import { getCurrentHub, initAndBind, SentryError, configureScope, addBreadcrumb, Integrations as CoreIntegrations } from '@sentry/core';
import { MinaClient } from './client';
import { getSystemInfo, MINA_SYSTEMINFO_TAGS, getMinaContext, setMinaContext } from './env';
import {Breadcrumbs, LogManager, GlobalHandlers} from './integrations';

export const defaultIntegrations = [
  new CoreIntegrations.Dedupe(),
  new CoreIntegrations.InboundFilters(),
  new CoreIntegrations.FunctionToString(),
  new GlobalHandlers(),
  new Breadcrumbs(),
  new LogManager()
];

export function init(options){
  if (options.defaultIntegrations === undefined) {
    options.defaultIntegrations = defaultIntegrations;
  }
  if (options.minaContext) {
    setMinaContext(options.minaContext);
  }
  initAndBind(MinaClient, options);
  const minaSystemInfo = getSystemInfo();
  const launchOptions = getMinaContext().getLaunchOptionsSync ? getMinaContext().getLaunchOptionsSync() : null;
  configureScope(scope => {
    if (minaSystemInfo) {
      MINA_SYSTEMINFO_TAGS.forEach((tag) => {
        scope.setTag(`mina_${tag}`, minaSystemInfo[tag] || 'unknow');
      });
    }
    if (launchOptions) {
      if (launchOptions.scene) {
        scope.setTag('scene', launchOptions.scene);
      }
      scope.setExtra('launch', launchOptions);
    }
  });
  if (launchOptions) {
    addBreadcrumb({
      category: 'app-life-cycle',
      data: {
        name: 'onAppLaunch',
        args: launchOptions
      },
    });
  }
}
export function showReportDialog(){
  throw new SentryError('showReportDialog not support');
}

export function lastEventId() {
  return getCurrentHub().lastEventId();
}
