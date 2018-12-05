import './globalfix.js';
import { getCurrentHub, initAndBind, SentryError, Integrations as CoreIntegrations } from '@sentry/core';
import { MinaClient } from './client';

export const defaultIntegrations = [
  new CoreIntegrations.Dedupe(),
  new CoreIntegrations.InboundFilters(),
  new CoreIntegrations.FunctionToString()
];


export function init(options){
  if (options.defaultIntegrations === undefined) {
    options.defaultIntegrations = defaultIntegrations;
  }
  initAndBind(MinaClient, options);
}
export function showReportDialog(){
  throw new SentryError('showReportDialog not support');
}

export function lastEventId() {
  return getCurrentHub().lastEventId();
}
