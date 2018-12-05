import './globalfix.js';

export { MinaBackend } from './backend';
export { MinaClient } from './client';
export { defaultIntegrations, init, lastEventId, showReportDialog } from './sdk';
export { SDK_NAME, SDK_VERSION } from './version';

import { Integrations as CoreIntegrations } from '@sentry/core';
import * as MinaIntegrations from './integrations';
import * as Transports from './transports';

const INTEGRATIONS = {
  ...CoreIntegrations,
  ...MinaIntegrations,
};

export { INTEGRATIONS as Integrations, Transports };
