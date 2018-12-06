import { addGlobalEventProcessor } from '@sentry/core';
import {supportLogManager, getMinaContext} from '../env';

export class LogManager {
  constructor(options = {}) {
    this.options = {
      level: 0,
      ...options,
    };
    this.name = 'LogManager';
    this.logManager = null;
  }

  instrumentLogManager() {
    if (this.logManager) {
      return;
    }
    const logManager = this.logManager = getMinaContext().getLogManager(this.options.level);
    addGlobalEventProcessor((event, hint) => {
      logManager.log('sentry-event', {
        event,
        hint
      });
      return event;
    });
  }

  setupOnce() {
    if (supportLogManager()) {
      this.instrumentLogManager();
    }
  }
}

LogManager.id = 'LogManager';
