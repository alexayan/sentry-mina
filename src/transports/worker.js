import { Status } from '@sentry/types';
import { BaseTransport } from './base';
import {getMinaContext} from '../env';

export class XHRTransport extends BaseTransport {
  constructor(options) {
    super(options);
    this.worker = getMinaContext().createWorker(options.worker);
  }

  async captureEvent(event) {
    return new Promise((resolve, reject) => {
      getMinaContext().request({
        url: this.url,
        method: 'POST',
        data: event,
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
}
