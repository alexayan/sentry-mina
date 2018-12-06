import { BaseClient } from '@sentry/core';
import { MinaBackend } from './backend';
import { SDK_NAME, SDK_VERSION } from './version';
import { getCurrentPage } from './env';

export class MinaClient extends BaseClient {
  constructor(options) {
    super(MinaBackend, options);
  }

  async prepareEvent(event, scope, hint) {
    event.platform = event.platform || 'javascript';
    event.sdk = {
      ...event.sdk,
      name: SDK_NAME,
      packages: [
        ...((event.sdk && event.sdk.packages) || []),
        {
          name: 'npm:sentry-mina',
          version: SDK_VERSION
        }
      ],
      version: SDK_VERSION
    };

    scope.tags = scope.tags || {};
    scope.tags.page = getCurrentPage();
    return super.prepareEvent(event, scope, hint);
  }

  showReportDialog() {
    return;
  }
}
