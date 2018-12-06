import { Status } from '@sentry/types';
import { BaseTransport } from './base';
import {getMinaContext} from '../env';

export class RequestTransport extends BaseTransport {
  constructor(options) {
    super(options);
  }

  async processTask(task) {
    return new Promise((resolve, reject) => {
      getMinaContext().request({
        url: this.url,
        method: 'POST',
        data: task.event,
        success: (res) => {
          if (res.statusCode === 200) {
            resolve({
              status: Status.fromHttpCode(res.statusCode),
            });
          } else {
            reject(new Error(`request fail with status code: ${res.statusCode}`));
          }
        },
        fail: (e) => {
          reject(e);
        }
      });
    });
  }

  async captureEvent(event) {
    this.addTask(event);
  }
}
