import './globalfix.js';

export {
  addGlobalEventProcessor,
  addBreadcrumb,
  captureException,
  captureEvent,
  captureMessage,
  configureScope,
  withScope,
  getHubFromCarrier,
  getCurrentHub,
  Hub,
  Scope,
} from '@sentry/core';

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
export {MINA_SYSTEMINFO_TAGS as SYSTEMINFO_TAGS} from './env';
