import { BaseBackend, SentryError } from '@sentry/core';
import { Status } from '@sentry/types';
import { isError, isErrorEvent, isPlainObject } from '@sentry/utils/is';
import { logger } from '@sentry/utils/logger';
import { eventFromPlainObject, eventFromStacktrace, prepareFramesForEvent } from './parsers';
import { computeStackTrace } from './tracekit';
import { RequestTransport } from './transports';
import { supportRequest} from './env';

export class MinaBackend extends BaseBackend {
  install() {
    const dsn = this.options.dsn;
    if (!dsn) {
      throw new SentryError('Invariant exception: install() must not be called when disabled');
    }

    Error.stackTraceLimit = 50;

    return true;
  }

  async eventFromException(exception, hint) {
    let event;

    if (isErrorEvent(exception) && exception.error) {
      const ex = exception;
      exception = ex.error;
      event = eventFromStacktrace(computeStackTrace(exception));
    } else if (isError(exception)) {
      event = eventFromStacktrace(computeStackTrace(exception ));
    } else if (isPlainObject(exception) && hint && hint.syntheticException) {
      const ex = exception;
      event = eventFromPlainObject(ex, hint.syntheticException);
    } else {
      const ex = exception;
      event = await this.eventFromMessage(ex, undefined, hint);
    }

    event = {
      ...event,
      event_id: hint && hint.event_id,
      exception: {
        ...event.exception,
        mechanism: {
          handled: true,
          type: 'generic',
        },
      },
    };

    return event;
  }

  async eventFromMessage(
    message,
    level,
    hint,
  ) {
    const event = {
      event_id: hint && hint.event_id,
      level,
      message,
    };

    if (this.options.attachStacktrace && hint && hint.syntheticException) {
      const stacktrace = computeStackTrace(hint.syntheticException);
      const frames = prepareFramesForEvent(stacktrace.stack);
      event.stacktrace = {
        frames,
      };
    }

    return event;
  }

  async sendEvent(event) {
    if (!this.options.dsn) {
      logger.warn('Event has been skipped because no Dsn is configured.');
      return { status: Status.Skipped, reason: 'Event has been skipped because no Dsn is configured.'};
    }

    if (!this.transport) {
      const transportOptions = this.options.transportOptions
        ? this.options.transportOptions
        : { dsn: this.options.dsn };

      if (this.options.transport) {
        this.transport = new this.options.transport({ dsn: this.options.dsn });
      } else if (supportRequest()) {
        this.transport = new RequestTransport(transportOptions);
      }
    }

    if (!this.transport) {
      logger.warn('Event has been skipped because no transport is configured.');
      return { status: Status.Skipped, reason: 'Event has been skipped because no transport is configured.'};
    }

    return this.transport.captureEvent(event);
  }
}
