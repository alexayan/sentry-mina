import { API, SentryError } from '@sentry/core';

/** Base Transport class implementation */
export class BaseTransport {
  constructor(options) {
    this.options = options;
    this.url = new API(this.options.dsn).getStoreEndpointWithUrlEncodedAuth();
  }

  async captureEvent() {
    throw new SentryError('Transport Class has to implement `captureEvent` method');
  }
}
