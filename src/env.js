import './globalfix.js';
import {compareVersion} from './tools';
// eslint-disable-next-line
let minaContext = wx || {};
let systemInfo = null;

export function setMinaContext(ctx) {
  minaContext = ctx;
}

export function getMinaContext() {
  return minaContext;
}

export function getSystemInfo() {
  return systemInfo || (systemInfo = minaContext.getSystemInfoSync());
}

export function isWorkerEnabled(options) {
  if (!options.worker) {
    return false;
  }
  const systemInfo = getSystemInfo();
  // https://developers.weixin.qq.com/miniprogram/dev/api/wx.createWorker.html
  if (!systemInfo || compareVersion(systemInfo.SDKVersion, '1.9.90') < 0) {
    return false;
  }
  return true;
}

export function supportRequest() {
  return !!minaContext.request;
}
