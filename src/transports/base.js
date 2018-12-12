import { API, SentryError } from '@sentry/core';
import { supportStorage, getMinaContext } from '../env';

const STORAGE_KEY = 'transport_tasks';

export class BaseTransport {
  constructor(options) {
    this.options = options;
    this.url = new API(this.options.dsn).getStoreEndpointWithUrlEncodedAuth();
    this.supportStorage = supportStorage();
    this.tasks = this.loadTasks();
    this.task = null;
    let retry = parseInt(options.retry, 10);
    if (isNaN(retry)) {
      retry = 2;
    }
    this.retry = retry + 1;
  }

  addTask(event) {
    const task = {
      event,
      ctime: Date.now()
    };
    this.tasks.push(task);
    this.manageTask();
  }

  saveTasks() {
    if (this.supportStorage) {
      getMinaContext().setStorage({
        key: STORAGE_KEY,
        data: this.tasks
      });
    }
  }

  loadTasks() {
    if (this.supportStorage) {
      return getMinaContext().getStorageSync(STORAGE_KEY) || [];
    } else {
      return [];
    }
  }

  async manageTask() {
    if (this.task || this.tasks.length === 0) {
      this.saveTasks();
      return;
    }
    this.task = this.tasks.shift();
    for (let i = 0; i < this.retry; i++) {
      try {
        await this.processTask(this.task);
        break;
      } catch (e) {
        await new Promise((resolve) => {
          setTimeout(resolve, 2000 * Math.pow(2, i));
        });
      }
    }
    this.task.event._resolve && typeof this.task.event._resolve === 'function' && this.task.event._resolve({});
    this.task = null;
    this.saveTasks();
    this.manageTask();
  }

  async processTask() {
    throw new SentryError('Transport Class has to implement `processTask` method');
  }

  async captureEvent() {
    throw new SentryError('Transport Class has to implement `captureEvent` method');
  }
}
