let originalFunctionToString;

export class FunctionToString {
  setupOnce() {
    originalFunctionToString = Function.prototype.toString;

    try {
      Function.prototype.toString = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var context = this.__sentry__ ? this.__sentry_original__ : this;
        return originalFunctionToString.apply(context, args);
      };
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(
        'sentry-mina: FunctionToString integration not support'
      );
    }
  }
}

FunctionToString.id = 'FunctionToString';
