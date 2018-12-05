// https://github.com/getsentry/sentry-javascript/blob/master/packages/utils/src/misc.ts#L29
if (typeof window === 'undefined') {
  // eslint-disable-next-line
  window = {
    console: console
  };
}
