import { wrap } from './helpers';

export class TryCatch {
  constructor() {
    this.ignoreOnError = 0;
    this.name = 'TryCatch';
  }

  wrapTimeFunction(original) {
    const that = this;
    return function(...args) {
      const originalCallback = args[0];
      args[0] = wrap(originalCallback, {
        mechanism: {
          data: { function: original.name || '<anonymous>' },
          handled: true,
          type: 'instrument',
        },
      });
      return original.apply(that, args);
    };
  }

  setupOnce() {
    // eslint-disable-next-line
    setTimeout = fill(setTimeout, this.wrapTimeFunction.bind(this));
    // eslint-disable-next-line
    setInterval = fill(setInterval, this.wrapTimeFunction.bind(this));
  }
}

TryCatch.id = 'TryCatch';

export function fill(origin, replacement) {
  if (origin.__sentry__) {
    return;
  }
  const wrapped = replacement(origin);
  wrapped.__sentry__ = true;
  wrapped.__sentry_original__ = origin;
  wrapped.__sentry_wrapped__ = wrapped;
  return wrapped;
}
