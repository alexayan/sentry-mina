import { getCurrentHub, captureEvent, captureException } from '@sentry/core';
import { logger } from '@sentry/utils/logger';
import { eventFromStacktrace } from '../parsers';
import {
  subscribe,
} from '../tracekit';
import { shouldIgnoreOnError } from './helpers';
import { getMinaContext} from '../env';

export class GlobalHandlers {
  constructor(options = {}) {
    this.name = 'GlobalHandlers';
    this.ctx = getMinaContext();
    this.options = {
      onerror: true,
      onpagenotfound: true,
      ...options,
    };
  }

  async setupOnce(){
    subscribe((stack, _, error) => {
      if (shouldIgnoreOnError()) {
        return;
      }
      const self = getCurrentHub().getIntegration(GlobalHandlers);
      if (self) {
        getCurrentHub().captureEvent(self.eventFromGlobalHandler(stack), { originalException: error, data: { stack } });
      }
    });

    if (this.options.onerror && this.ctx.onError) {
      logger.log('Global Error Handler attached: onError');
      this.installGlobalErrorHandler();
    }

    if (this.options.onpagenotfound && this.ctx.onPageNotFound) {
      logger.log('Global Handler attached: onPageNotFound');
      this.installGlobalPageNotFoundHandler();
    }
  }

  installGlobalErrorHandler() {
    this.ctx.onError((msg) => {
      captureException(msg, {
        level: 'error'
      });
    });
  }

  installGlobalPageNotFoundHandler() {
    this.ctx.onPageNotFound((res) => {
      captureEvent({
        message: 'page not found',
        extra: res
      });
    });
  }


  eventFromGlobalHandler(stacktrace) {
    const event = eventFromStacktrace(stacktrace);
    return {
      ...event,
      exception: {
        ...event.exception,
        mechanism: {
          data: {
            mode: stacktrace.mode,
          },
          handled: false,
          type: stacktrace.mechanism,
        },
      },
    };
  }
}

GlobalHandlers.id = 'GlobalHandlers';
