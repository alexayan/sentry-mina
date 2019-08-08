import { API, getCurrentHub, captureException } from '@sentry/core';
import { supportRequest, getMinaContext, supportNavigations, getCurrentPage, getPrevPage, getMinaApiList, MINA_APP_LIFE_CYCLE, isWxUnhandledPromiseError } from '../env';
import { Severity } from '@sentry/types';
import { isArray, isError } from '@sentry/utils/is';
import { logger } from '@sentry/utils/logger';
import { getEventDescription, getGlobalObject } from '@sentry/utils/misc';
import { deserialize, serializeObject } from '@sentry/utils/object';
import { includes, safeJoin } from '@sentry/utils/string';
import {fill} from '../tools';

const global = getGlobalObject();

export class Breadcrumbs {
  constructor(options = {}) {
    this.name = Breadcrumbs.id;
    this.ctx = getMinaContext();
    this.options = {
      console: true,
      request: true,
      navigation: true,
      api: true,
      lifecycle: true,
      unhandleError: true,
      ...options,
    };
  }

  instrumentConsole() {
    if (!('console' in global)) {
      return;
    }
    let watchFunctions = ['info', 'warn', 'error', 'log'];
    let filterFunctions = this.options.console ? watchFunctions : [];
    if (isArray(this.options.console)) {
      filterFunctions = this.options.console;
    }
    const captureUnhandleError = this.unhandleError;
    watchFunctions.forEach(function(level) {
      if (!(level in global.console)) {
        return;
      }

      fill(global.console, level, function(originalConsoleLevel) {
        return function(...args) {
          if (filterFunctions.indexOf(level) > -1) {
            const breadcrumbData = {
              category: 'console',
              data: {
                extra: {
                  arguments: serializeObject(args, 2),
                },
                logger: level,
              },
              level: Severity.fromString(level),
              message: safeJoin(args, ' '),
            };

            if (level === 'assert') {
              if (args[0] === false) {
                breadcrumbData.message = `Assertion failed: ${safeJoin(args.slice(1), ' ') || 'console.assert'}`;
                breadcrumbData.data.extra.arguments = serializeObject(args.slice(1), 2);
              }
            }

            Breadcrumbs.addBreadcrumb(breadcrumbData, {
              input: args,
              level,
            });
          }

          if ((level === 'warn' || level === 'error') && captureUnhandleError) {
            if (isWxUnhandledPromiseError(args[0]) && isError(args[1])) {
              captureException(args[1]);
            }
          }

          if (originalConsoleLevel) {
            try {
              Function.prototype.apply.call(originalConsoleLevel, global.console, args);
            } catch (e) {
              originalConsoleLevel.apply(global.console, args);
            }
          }
        };
      });
    });
  }

  instrumentMinaApi() {
    let apiList = getMinaApiList();
    if (isArray(this.options.api)) {
      apiList = this.options.api;
    } else if (!this.options.api) {
      apiList = [];
    }
    apiList.forEach((api) => {
      if (this.ctx[api] && typeof this.ctx[api] === 'function') {
        fill(this.ctx, api, (originalRequest) => {
          return (...args) => {
            Breadcrumbs.addBreadcrumb(
              {
                category: 'mina-api',
                data: {
                  args,
                  name: api
                }
              }
            );
            return originalRequest.apply(this.ctx, args);
          };
        });
      }
    });
  }

  instrumentRequest() {
    if (!supportRequest()) {
      return;
    }

    fill(this.ctx, 'request', (originalRequest) => {
      return function(requestOptions = {}) {
        let method = requestOptions.method ? requestOptions.method.toUpperCase() : 'GET';
        let url = requestOptions.url;

        const client = getCurrentHub().getClient();
        const dsn = client && client.getDsn();
        if (dsn) {
          const filterUrl = new API(dsn).getStoreEndpoint();
          if (filterUrl && includes(url, filterUrl)) {
            if (method === 'POST' && requestOptions.data) {
              addSentryBreadcrumb(requestOptions.data);
            }
            return originalRequest.call(this.ctx, requestOptions);
          }
        }
        const fetchData = {
          method,
          url,
          header: requestOptions.header,
          dataType: requestOptions.dataType
        };

        const originSuccess = requestOptions.success;
        const originFail = requestOptions.fail;

        requestOptions.success = (res) => {
          if (originSuccess) {
            originSuccess(res);
          }
          fetchData.status_code = res.statusCode;
          Breadcrumbs.addBreadcrumb(
            {
              category: 'request',
              data: fetchData,
              type: 'http',
            }
          );
        };

        requestOptions.fail = (error) => {
          if (originFail) {
            originFail(error);
          }
          Breadcrumbs.addBreadcrumb(
            {
              category: 'request',
              data: fetchData,
              level: Severity.Error,
              type: 'http',
            }
          );
        };

        return originalRequest.call(this.ctx, requestOptions);
      };
    });
  }

  instrumentNavigation() {
    const supportList = supportNavigations();
    if (!supportList) {
      return;
    }

    const captureUrlChange = (to) => {
      let from = getCurrentPage();

      Breadcrumbs.addBreadcrumb({
        category: 'navigation',
        data: {
          from,
          to,
        },
      });
    };

    function historyReplacementFunction(originalHistoryFunction) {
      return function(options = {}) {
        let to = options.url;
        if (!to && options.delta) {
          to = getPrevPage(options.delta);
        }
        if (to) {
          captureUrlChange(to);
        }
        return originalHistoryFunction.call(this, options);
      };
    }

    supportList.forEach((api) => {
      fill(this.ctx, api, historyReplacementFunction);
    });
  }

  instrumentLifeCycle() {
    // eslint-disable-next-line
    const ctx = this.ctx;
    MINA_APP_LIFE_CYCLE.forEach((key) => {
      ctx[key] && ctx[key]((res) => {
        Breadcrumbs.addBreadcrumb({
          category: 'app-life-cycle',
          data: {
            name: key,
            args: res
          },
        });
      });
    });
  }

  static addBreadcrumb(breadcrumb, hint) {
    if (getCurrentHub().getIntegration(Breadcrumbs)) {
      getCurrentHub().addBreadcrumb(breadcrumb, hint);
    }
  }

  setupOnce() {
    if (this.options.console) {
      this.instrumentConsole();
    }
    if (this.options.navigation) {
      this.instrumentNavigation();
    }
    if (this.options.request) {
      this.instrumentRequest();
    }
    if (this.options.api) {
      this.instrumentMinaApi();
    }
    if (this.options.lifecycle) {
      this.instrumentLifeCycle();
    }
  }
}

Breadcrumbs.id = 'Breadcrumbs';

function addSentryBreadcrumb(serializedData) {
  try {
    const event = deserialize(serializedData);
    Breadcrumbs.addBreadcrumb(
      {
        category: 'sentry',
        event_id: event.event_id,
        level: event.level || Severity.fromString('error'),
        message: getEventDescription(event),
      },
      {
        event,
      },
    );
  } catch (_oO) {
    logger.error('Error while adding sentry type breadcrumb');
  }
}
