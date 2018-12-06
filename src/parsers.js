/**
 * https://github.com/getsentry/sentry-javascript/blob/master/packages/browser/src/parsers.ts
 *
 * Copyright 2018, Sentry
 *
 * https://sentry.io
 *
 * Licensed under the BSD 3-Clause license:
 */
import { limitObjectDepthToSize, serializeKeysToEventMessage } from '@sentry/utils/object';
import { includes } from '@sentry/utils/string';
import { md5 } from './md5';
import { computeStackTrace } from './tracekit';

const STACKTRACE_LIMIT = 50;

/** JSDoc */
export function exceptionFromStacktrace(stacktrace) {
  const frames = prepareFramesForEvent(stacktrace.stack);

  const exception = {
    stacktrace: { frames },
    type: stacktrace.name,
    value: stacktrace.message,
  };

  // tslint:disable-next-line:strict-type-predicates
  if (exception.type === undefined && exception.value === '') {
    exception.value = 'Unrecoverable error caught';
  }

  return exception;
}

/** JSDoc */
export function eventFromPlainObject(exception, syntheticException) {
  const exceptionKeys = Object.keys(exception).sort();
  const event = {
    extra: {
      __serialized__: limitObjectDepthToSize(exception),
    },
    fingerprint: [md5(exceptionKeys.join(''))],
    message: `Non-Error exception captured with keys: ${serializeKeysToEventMessage(exceptionKeys)}`,
  };

  if (syntheticException) {
    const stacktrace = computeStackTrace(syntheticException);
    const frames = prepareFramesForEvent(stacktrace.stack);
    event.stacktrace = {
      frames,
    };
  }

  return event;
}

/** JSDoc */
export function eventFromStacktrace(stacktrace) {
  const exception = exceptionFromStacktrace(stacktrace);

  return {
    exception: {
      values: [exception],
    },
  };
}

/** JSDoc */
export function prepareFramesForEvent(stack) {
  if (!stack || !stack.length) {
    return [];
  }

  let localStack = stack;

  const firstFrameFunction = localStack[0].func || '';
  const lastFrameFunction = localStack[localStack.length - 1].func || '';

  // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
  if (includes(firstFrameFunction, 'captureMessage') || includes(firstFrameFunction, 'captureException')) {
    localStack = localStack.slice(1);
  }

  // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
  if (includes(lastFrameFunction, 'sentryWrapped')) {
    localStack = localStack.slice(0, -1);
  }

  // The frame where the crash happened, should be the last entry in the array
  return localStack
    .map(
      (frame) => ({
        colno: frame.column,
        filename: frame.url || localStack[0].url,
        function: frame.func || '?',
        in_app: true,
        lineno: frame.line,
      }),
    )
    .slice(0, STACKTRACE_LIMIT)
    .reverse();
}
