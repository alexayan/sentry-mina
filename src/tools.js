import { logger } from '@sentry/utils/logger';

export function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  const len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i]);
    const num2 = parseInt(v2[i]);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}

export function fill(source, name, replacement) {
  try {
    if (!(name in source) || (source[name]).__sentry__) {
      return;
    }
    const original = source[name];
    const wrapped = replacement(original);
    wrapped.__sentry__ = true;
    wrapped.__sentry_original__ = original;
    wrapped.__sentry_wrapped__ = wrapped;
    if (Object.defineProperties && Object.getOwnPropertyDescriptor) {
      const desp = Object.getOwnPropertyDescriptor(source, name);
      if (!desp.configurable) {
        throw new Error('unable to config');
      }
      Object.defineProperties(source, {
        [name]: {
          value: wrapped
        }
      });
    } else {
      source[name] = wrapped;
    }
  } catch (e) {
    logger.warn(`fail to reset property ${name}`);
  }
}
