/**
 * https://github.com/getsentry/sentry-javascript/blob/master/packages/browser/src/integrations/helpers.ts
 *
 * Copyright 2018, Sentry
 *
 * https://sentry.io
 *
 * Licensed under the BSD 3-Clause license:
 */
import { captureException, withScope } from '@sentry/core';
import { isFunction } from '@sentry/utils/is';
import { serializeObject } from '@sentry/utils/object';

let ignoreOnError = 0;

/** JSDoc */
export function shouldIgnoreOnError() {
  return ignoreOnError > 0;
}
/** JSDoc */
export function ignoreNextOnError() {
  // onerror should trigger before setTimeout
  ignoreOnError += 1;
  setTimeout(() => {
    ignoreOnError -= 1;
  });
}

/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap.
 * @returns The wrapped function.
 */
export function wrap(
  fn,
  options = {},
  before,
) {
  if (!isFunction(fn)) {
    return fn;
  }

  try {
    // We don't wanna wrap it twice
    if (fn.__sentry__) {
      return fn;
    }

    // If this has already been wrapped in the past, return that wrapped function
    if (fn.__sentry_wrapped__) {
      return fn.__sentry_wrapped__;
    }
  } catch (e) {
    // Just accessing custom props in some Selenium environments
    // can cause a "Permission denied" exception (see raven-js#495).
    // Bail on wrapping and return the function as-is (defers to window.onerror).
    return fn;
  }

  const sentryWrapped = function() {
    const that = this;
    if (before && isFunction(before)) {
      before.apply(that, arguments);
    }

    const args = Array.prototype.slice.call(arguments);

    try {
      // Attempt to invoke user-land function
      // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
      //       means Raven caught an error invoking your application code. This is
      //       expected behavior and NOT indicative of a bug with Raven.js.
      const wrappedArguments = args.map((arg) => wrap(arg, options));

      if (fn.handleEvent) {
        return fn.handleEvent.apply(that, wrappedArguments);
      } else {
        return fn.apply(that, wrappedArguments);
      }
    } catch (ex) {
      ignoreNextOnError();

      withScope(async scope => {
        scope.addEventProcessor(async (event) => {
          const processedEvent = { ...event };

          if (options.mechanism) {
            processedEvent.exception = processedEvent.exception || {};
            processedEvent.exception.mechanism = options.mechanism;
          }

          processedEvent.extra = {
            ...processedEvent.extra,
            arguments: serializeObject(args, 2),
          };

          return processedEvent;
        });

        captureException(ex);
      });

      throw ex;
    }
  };

  // Accessing some objects may throw
  // ref: https://github.com/getsentry/sentry-javascript/issues/1168
  try {
    for (const property in fn) {
      if (Object.prototype.hasOwnProperty.call(fn, property)) {
        sentryWrapped[property] = fn[property];
      }
    }
  } catch (_oO) {1;} // tslint:disable-line:no-empty

  sentryWrapped.prototype = fn.prototype;
  fn.__sentry_wrapped__ = sentryWrapped;

  // Signal that this function has been wrapped/filled already
  // for both debugging and to prevent it to being wrapped/filled twice
  sentryWrapped.__sentry__ = true;
  sentryWrapped.__sentry_original__ = fn;

  return sentryWrapped;
}
