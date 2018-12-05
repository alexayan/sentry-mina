/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "MinaBackend", {
	  enumerable: true,
	  get: function get() {
	    return _backend.MinaBackend;
	  }
	});
	Object.defineProperty(exports, "MinaClient", {
	  enumerable: true,
	  get: function get() {
	    return _client.MinaClient;
	  }
	});
	Object.defineProperty(exports, "defaultIntegrations", {
	  enumerable: true,
	  get: function get() {
	    return _sdk.defaultIntegrations;
	  }
	});
	Object.defineProperty(exports, "init", {
	  enumerable: true,
	  get: function get() {
	    return _sdk.init;
	  }
	});
	Object.defineProperty(exports, "lastEventId", {
	  enumerable: true,
	  get: function get() {
	    return _sdk.lastEventId;
	  }
	});
	Object.defineProperty(exports, "showReportDialog", {
	  enumerable: true,
	  get: function get() {
	    return _sdk.showReportDialog;
	  }
	});
	Object.defineProperty(exports, "SDK_NAME", {
	  enumerable: true,
	  get: function get() {
	    return _version.SDK_NAME;
	  }
	});
	Object.defineProperty(exports, "SDK_VERSION", {
	  enumerable: true,
	  get: function get() {
	    return _version.SDK_VERSION;
	  }
	});
	exports.Transports = exports.Integrations = void 0;

	__webpack_require__(1);

	var _backend = __webpack_require__(2);

	var _client = __webpack_require__(44);

	var _sdk = __webpack_require__(46);

	var _version = __webpack_require__(45);

	var _core = __webpack_require__(3);

	var MinaIntegrations = _interopRequireWildcard(__webpack_require__(47));

	var Transports = _interopRequireWildcard(__webpack_require__(38));

	exports.Transports = Transports;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	const INTEGRATIONS = _objectSpread({}, _core.Integrations, MinaIntegrations);

	exports.Integrations = INTEGRATIONS;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	// https://github.com/getsentry/sentry-javascript/blob/master/packages/utils/src/misc.ts#L29
	if (typeof window === 'undefined') {
	  // eslint-disable-next-line
	  window = {
	    console: console
	  };
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MinaBackend = void 0;

	__webpack_require__(1);

	var _core = __webpack_require__(3);

	var _types = __webpack_require__(19);

	var _is = __webpack_require__(10);

	var _logger = __webpack_require__(14);

	var _parsers = __webpack_require__(35);

	var _tracekit = __webpack_require__(37);

	var _transports = __webpack_require__(38);

	var _env = __webpack_require__(41);

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

	function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

	class MinaBackend extends _core.BaseBackend {
	  install() {
	    const dsn = this.options.dsn;

	    if (!dsn) {
	      throw new _core.SentryError('Invariant exception: install() must not be called when disabled');
	    }

	    Error.stackTraceLimit = 50;
	    return true;
	  }

	  eventFromException(exception, hint) {
	    var _this = this;

	    return _asyncToGenerator(function* () {
	      let event;

	      if ((0, _is.isErrorEvent)(exception) && exception.error) {
	        const ex = exception;
	        exception = ex.error;
	        event = (0, _parsers.eventFromStacktrace)((0, _tracekit.computeStackTrace)(exception));
	      } else if ((0, _is.isError)(exception)) {
	        event = (0, _parsers.eventFromStacktrace)((0, _tracekit.computeStackTrace)(exception));
	      } else if ((0, _is.isPlainObject)(exception) && hint && hint.syntheticException) {
	        const ex = exception;
	        event = (0, _parsers.eventFromPlainObject)(ex, hint.syntheticException);
	      } else {
	        const ex = exception;
	        event = yield _this.eventFromMessage(ex, undefined, hint);
	      }

	      event = _objectSpread({}, event, {
	        event_id: hint && hint.event_id,
	        exception: _objectSpread({}, event.exception, {
	          mechanism: {
	            handled: true,
	            type: 'generic'
	          }
	        })
	      });
	      return event;
	    })();
	  }

	  eventFromMessage(message, level, hint) {
	    var _this2 = this;

	    return _asyncToGenerator(function* () {
	      const event = {
	        event_id: hint && hint.event_id,
	        level,
	        message
	      };

	      if (_this2.options.attachStacktrace && hint && hint.syntheticException) {
	        const stacktrace = (0, _tracekit.computeStackTrace)(hint.syntheticException);
	        const frames = (0, _parsers.prepareFramesForEvent)(stacktrace.stack);
	        event.stacktrace = {
	          frames
	        };
	      }

	      return event;
	    })();
	  }

	  sendEvent(event) {
	    var _this3 = this;

	    return _asyncToGenerator(function* () {
	      if (!_this3.options.dsn) {
	        _logger.logger.warn('Event has been skipped because no Dsn is configured.');

	        return {
	          status: _types.Status.Skipped,
	          reason: 'Event has been skipped because no Dsn is configured.'
	        };
	      }

	      if (!_this3.transport) {
	        const transportOptions = _this3.options.transportOptions ? _this3.options.transportOptions : {
	          dsn: _this3.options.dsn
	        };

	        if (_this3.options.transport) {
	          _this3.transport = new _this3.options.transport({
	            dsn: _this3.options.dsn
	          });
	        } else if ((0, _env.isWorkerEnabled)(_this3.options)) {
	          transportOptions.worker = _this3.options.worker;
	          _this3.transport = new _transports.WorkerTransport(transportOptions);
	        } else if ((0, _env.supportRequest)()) {
	          _this3.transport = new _transports.RequestTransport(transportOptions);
	        }
	      }

	      if (!_this3.transport) {
	        _logger.logger.warn('Event has been skipped because no transport is configured.');

	        return {
	          status: _types.Status.Skipped,
	          reason: 'Event has been skipped because no transport is configured.'
	        };
	      }

	      return _this3.transport.captureEvent(event);
	    })();
	  }

	}

	exports.MinaBackend = MinaBackend;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var minimal_1 = __webpack_require__(4);
	exports.addBreadcrumb = minimal_1.addBreadcrumb;
	exports.captureException = minimal_1.captureException;
	exports.captureEvent = minimal_1.captureEvent;
	exports.captureMessage = minimal_1.captureMessage;
	exports.configureScope = minimal_1.configureScope;
	exports.withScope = minimal_1.withScope;
	var hub_1 = __webpack_require__(6);
	exports.addGlobalEventProcessor = hub_1.addGlobalEventProcessor;
	exports.getCurrentHub = hub_1.getCurrentHub;
	exports.Hub = hub_1.Hub;
	exports.getHubFromCarrier = hub_1.getHubFromCarrier;
	exports.Scope = hub_1.Scope;
	var api_1 = __webpack_require__(15);
	exports.API = api_1.API;
	var baseclient_1 = __webpack_require__(18);
	exports.BaseClient = baseclient_1.BaseClient;
	var basebackend_1 = __webpack_require__(23);
	exports.BaseBackend = basebackend_1.BaseBackend;
	var dsn_1 = __webpack_require__(16);
	exports.Dsn = dsn_1.Dsn;
	var error_1 = __webpack_require__(17);
	exports.SentryError = error_1.SentryError;
	var requestbuffer_1 = __webpack_require__(24);
	exports.RequestBuffer = requestbuffer_1.RequestBuffer;
	var interfaces_1 = __webpack_require__(25);
	exports.LogLevel = interfaces_1.LogLevel;
	var sdk_1 = __webpack_require__(26);
	exports.initAndBind = sdk_1.initAndBind;
	var Integrations = __webpack_require__(27);
	exports.Integrations = Integrations;
	//# sourceMappingURL=index.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var hub_1 = __webpack_require__(6);
	/**
	 * This calls a function on the current hub.
	 * @param method function to call on hub.
	 * @param args to pass to function.
	 */
	function callOnHub(method) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    var hub = hub_1.getCurrentHub();
	    if (hub && hub[method]) {
	        // tslint:disable-next-line:no-unsafe-any
	        return hub[method].apply(hub, tslib_1.__spread(args));
	    }
	    throw new Error("No hub defined or " + method + " was not found on the hub, please open a bug report.");
	}
	/**
	 * Captures an exception event and sends it to Sentry.
	 *
	 * @param exception An exception-like object.
	 * @returns The generated eventId.
	 */
	function captureException(exception) {
	    var syntheticException;
	    try {
	        throw new Error('Sentry syntheticException');
	    }
	    catch (exception) {
	        syntheticException = exception;
	    }
	    return callOnHub('captureException', exception, {
	        originalException: exception,
	        syntheticException: syntheticException,
	    });
	}
	exports.captureException = captureException;
	/**
	 * Captures a message event and sends it to Sentry.
	 *
	 * @param message The message to send to Sentry.
	 * @param level Define the level of the message.
	 * @returns The generated eventId.
	 */
	function captureMessage(message, level) {
	    var syntheticException;
	    try {
	        throw new Error(message);
	    }
	    catch (exception) {
	        syntheticException = exception;
	    }
	    return callOnHub('captureMessage', message, level, {
	        originalException: message,
	        syntheticException: syntheticException,
	    });
	}
	exports.captureMessage = captureMessage;
	/**
	 * Captures a manually created event and sends it to Sentry.
	 *
	 * @param event The event to send to Sentry.
	 * @returns The generated eventId.
	 */
	function captureEvent(event) {
	    return callOnHub('captureEvent', event);
	}
	exports.captureEvent = captureEvent;
	/**
	 * Records a new breadcrumb which will be attached to future events.
	 *
	 * Breadcrumbs will be added to subsequent events to provide more context on
	 * user's actions prior to an error or crash.
	 *
	 * @param breadcrumb The breadcrumb to record.
	 */
	function addBreadcrumb(breadcrumb) {
	    callOnHub('addBreadcrumb', breadcrumb);
	}
	exports.addBreadcrumb = addBreadcrumb;
	/**
	 * Callback to set context information onto the scope.
	 * @param callback Callback function that receives Scope.
	 */
	function configureScope(callback) {
	    callOnHub('configureScope', callback);
	}
	exports.configureScope = configureScope;
	/**
	 * Creates a new scope with and executes the given operation within.
	 * The scope is automatically removed once the operation
	 * finishes or throws.
	 *
	 * This is essentially a convenience function for:
	 *
	 *     pushScope();
	 *     callback();
	 *     popScope();
	 *
	 * @param callback that will be enclosed into push/popScope.
	 */
	function withScope(callback) {
	    callOnHub('withScope', callback);
	}
	exports.withScope = withScope;
	/**
	 * Calls a function on the latest client. Use this with caution, it's meant as
	 * in "internal" helper so we don't need to expose every possible function in
	 * the shim. It is not guaranteed that the client actually implements the
	 * function.
	 *
	 * @param method The method to call on the client/client.
	 * @param args Arguments to pass to the client/fontend.
	 */
	function _callOnClient(method) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    callOnHub.apply(void 0, tslib_1.__spread(['invokeClient', method], args));
	}
	exports._callOnClient = _callOnClient;
	//# sourceMappingURL=index.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global global, define, System, Reflect, Promise */
	var __extends;
	var __assign;
	var __rest;
	var __decorate;
	var __param;
	var __metadata;
	var __awaiter;
	var __generator;
	var __exportStar;
	var __values;
	var __read;
	var __spread;
	var __await;
	var __asyncGenerator;
	var __asyncDelegator;
	var __asyncValues;
	var __makeTemplateObject;
	var __importStar;
	var __importDefault;
	(function (factory) {
	    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) { factory(createExporter(root, createExporter(exports))); }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    else if (typeof module === "object" && typeof module.exports === "object") {
	        factory(createExporter(root, createExporter(module.exports)));
	    }
	    else {
	        factory(createExporter(root));
	    }
	    function createExporter(exports, previous) {
	        if (exports !== root) {
	            if (typeof Object.create === "function") {
	                Object.defineProperty(exports, "__esModule", { value: true });
	            }
	            else {
	                exports.__esModule = true;
	            }
	        }
	        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
	    }
	})
	(function (exporter) {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

	    __extends = function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };

	    __assign = Object.assign || function (t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };

	    __rest = function (s, e) {
	        var t = {};
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	            t[p] = s[p];
	        if (s != null && typeof Object.getOwnPropertySymbols === "function")
	            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
	                t[p[i]] = s[p[i]];
	        return t;
	    };

	    __decorate = function (decorators, target, key, desc) {
	        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	        return c > 3 && r && Object.defineProperty(target, key, r), r;
	    };

	    __param = function (paramIndex, decorator) {
	        return function (target, key) { decorator(target, key, paramIndex); }
	    };

	    __metadata = function (metadataKey, metadataValue) {
	        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	    };

	    __awaiter = function (thisArg, _arguments, P, generator) {
	        return new (P || (P = Promise))(function (resolve, reject) {
	            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	            step((generator = generator.apply(thisArg, _arguments || [])).next());
	        });
	    };

	    __generator = function (thisArg, body) {
	        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	        function verb(n) { return function (v) { return step([n, v]); }; }
	        function step(op) {
	            if (f) throw new TypeError("Generator is already executing.");
	            while (_) try {
	                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	                if (y = 0, t) op = [op[0] & 2, t.value];
	                switch (op[0]) {
	                    case 0: case 1: t = op; break;
	                    case 4: _.label++; return { value: op[1], done: false };
	                    case 5: _.label++; y = op[1]; op = [0]; continue;
	                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                    default:
	                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                        if (t[2]) _.ops.pop();
	                        _.trys.pop(); continue;
	                }
	                op = body.call(thisArg, _);
	            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	        }
	    };

	    __exportStar = function (m, exports) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    };

	    __values = function (o) {
	        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
	        if (m) return m.call(o);
	        return {
	            next: function () {
	                if (o && i >= o.length) o = void 0;
	                return { value: o && o[i++], done: !o };
	            }
	        };
	    };

	    __read = function (o, n) {
	        var m = typeof Symbol === "function" && o[Symbol.iterator];
	        if (!m) return o;
	        var i = m.call(o), r, ar = [], e;
	        try {
	            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	        }
	        catch (error) { e = { error: error }; }
	        finally {
	            try {
	                if (r && !r.done && (m = i["return"])) m.call(i);
	            }
	            finally { if (e) throw e.error; }
	        }
	        return ar;
	    };

	    __spread = function () {
	        for (var ar = [], i = 0; i < arguments.length; i++)
	            ar = ar.concat(__read(arguments[i]));
	        return ar;
	    };

	    __await = function (v) {
	        return this instanceof __await ? (this.v = v, this) : new __await(v);
	    };

	    __asyncGenerator = function (thisArg, _arguments, generator) {
	        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	        var g = generator.apply(thisArg, _arguments || []), i, q = [];
	        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
	        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
	        function fulfill(value) { resume("next", value); }
	        function reject(value) { resume("throw", value); }
	        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
	    };

	    __asyncDelegator = function (o) {
	        var i, p;
	        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
	    };

	    __asyncValues = function (o) {
	        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	        var m = o[Symbol.asyncIterator], i;
	        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
	        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
	        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
	    };

	    __makeTemplateObject = function (cooked, raw) {
	        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
	        return cooked;
	    };

	    __importStar = function (mod) {
	        if (mod && mod.__esModule) return mod;
	        var result = {};
	        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	        result["default"] = mod;
	        return result;
	    };

	    __importDefault = function (mod) {
	        return (mod && mod.__esModule) ? mod : { "default": mod };
	    };

	    exporter("__extends", __extends);
	    exporter("__assign", __assign);
	    exporter("__rest", __rest);
	    exporter("__decorate", __decorate);
	    exporter("__param", __param);
	    exporter("__metadata", __metadata);
	    exporter("__awaiter", __awaiter);
	    exporter("__generator", __generator);
	    exporter("__exportStar", __exportStar);
	    exporter("__values", __values);
	    exporter("__read", __read);
	    exporter("__spread", __spread);
	    exporter("__await", __await);
	    exporter("__asyncGenerator", __asyncGenerator);
	    exporter("__asyncDelegator", __asyncDelegator);
	    exporter("__asyncValues", __asyncValues);
	    exporter("__makeTemplateObject", __makeTemplateObject);
	    exporter("__importStar", __importStar);
	    exporter("__importDefault", __importDefault);
	});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var scope_1 = __webpack_require__(7);
	exports.addGlobalEventProcessor = scope_1.addGlobalEventProcessor;
	exports.Scope = scope_1.Scope;
	var hub_1 = __webpack_require__(12);
	exports.getCurrentHub = hub_1.getCurrentHub;
	exports.getHubFromCarrier = hub_1.getHubFromCarrier;
	exports.getMainCarrier = hub_1.getMainCarrier;
	exports.Hub = hub_1.Hub;
	exports.setHubOnCarrier = hub_1.setHubOnCarrier;
	//# sourceMappingURL=index.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var misc_1 = __webpack_require__(8);
	var object_1 = __webpack_require__(11);
	/**
	 * Holds additional event information. {@link Scope.applyToEvent} will be
	 * called by the client before an event will be sent.
	 */
	var Scope = /** @class */ (function () {
	    function Scope() {
	        /** Flag if notifiying is happening. */
	        this.notifyingListeners = false;
	        /** Callback for client to receive scope changes. */
	        this.scopeListeners = [];
	        /** Callback list that will be called after {@link applyToEvent}. */
	        this.eventProcessors = [];
	        /** Array of breadcrumbs. */
	        this.breadcrumbs = [];
	        /** User */
	        this.user = {};
	        /** Tags */
	        this.tags = {};
	        /** Extra */
	        this.extra = {};
	    }
	    /** Add internal on change listener. */
	    Scope.prototype.addScopeListener = function (callback) {
	        this.scopeListeners.push(callback);
	    };
	    /** Add new event processor that will be called after {@link applyToEvent}. */
	    Scope.prototype.addEventProcessor = function (callback) {
	        this.eventProcessors.push(callback);
	        return this;
	    };
	    /**
	     * This will be called on every set call.
	     */
	    Scope.prototype.notifyScopeListeners = function () {
	        var _this = this;
	        if (!this.notifyingListeners) {
	            this.notifyingListeners = true;
	            setTimeout(function () {
	                _this.scopeListeners.forEach(function (callback) {
	                    callback(_this);
	                });
	                _this.notifyingListeners = false;
	            }, 0);
	        }
	    };
	    /**
	     * This will be called after {@link applyToEvent} is finished.
	     */
	    Scope.prototype.notifyEventProcessors = function (event, hint) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var e_1, _a, processedEvent, _b, _c, processor, e_2, e_1_1;
	            return tslib_1.__generator(this, function (_d) {
	                switch (_d.label) {
	                    case 0:
	                        processedEvent = event;
	                        _d.label = 1;
	                    case 1:
	                        _d.trys.push([1, 8, 9, 10]);
	                        _b = tslib_1.__values(tslib_1.__spread(getGlobalEventProcessors(), this.eventProcessors)), _c = _b.next();
	                        _d.label = 2;
	                    case 2:
	                        if (!!_c.done) return [3 /*break*/, 7];
	                        processor = _c.value;
	                        _d.label = 3;
	                    case 3:
	                        _d.trys.push([3, 5, , 6]);
	                        return [4 /*yield*/, processor(tslib_1.__assign({}, processedEvent), hint)];
	                    case 4:
	                        processedEvent = _d.sent();
	                        if (processedEvent === null) {
	                            return [2 /*return*/, null];
	                        }
	                        return [3 /*break*/, 6];
	                    case 5:
	                        e_2 = _d.sent();
	                        return [3 /*break*/, 6];
	                    case 6:
	                        _c = _b.next();
	                        return [3 /*break*/, 2];
	                    case 7: return [3 /*break*/, 10];
	                    case 8:
	                        e_1_1 = _d.sent();
	                        e_1 = { error: e_1_1 };
	                        return [3 /*break*/, 10];
	                    case 9:
	                        try {
	                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	                        }
	                        finally { if (e_1) throw e_1.error; }
	                        return [7 /*endfinally*/];
	                    case 10: return [2 /*return*/, processedEvent];
	                }
	            });
	        });
	    };
	    /**
	     * Updates user context information for future events.
	     * @param user User context object to merge into current context.
	     */
	    Scope.prototype.setUser = function (user) {
	        this.user = user;
	        this.notifyScopeListeners();
	        return this;
	    };
	    /**
	     * Updates tags context information for future events.
	     * @param tags Tags context object to merge into current context.
	     */
	    Scope.prototype.setTag = function (key, value) {
	        var _a;
	        this.tags = tslib_1.__assign({}, this.tags, (_a = {}, _a[key] = value, _a));
	        this.notifyScopeListeners();
	        return this;
	    };
	    /**
	     * Updates extra context information for future events.
	     * @param extra context object to merge into current context.
	     */
	    Scope.prototype.setExtra = function (key, extra) {
	        var _a;
	        this.extra = tslib_1.__assign({}, this.extra, (_a = {}, _a[key] = extra, _a));
	        this.notifyScopeListeners();
	        return this;
	    };
	    /**
	     * Sets the fingerprint on the scope to send with the events.
	     * @param fingerprint string[] to group events in Sentry.
	     */
	    Scope.prototype.setFingerprint = function (fingerprint) {
	        this.fingerprint = fingerprint;
	        this.notifyScopeListeners();
	        return this;
	    };
	    /**
	     * Sets the level on the scope for future events.
	     * @param level string {@link Severity}
	     */
	    Scope.prototype.setLevel = function (level) {
	        this.level = level;
	        this.notifyScopeListeners();
	        return this;
	    };
	    /**
	     * Inherit values from the parent scope.
	     * @param scope to clone.
	     */
	    Scope.clone = function (scope) {
	        var newScope = new Scope();
	        object_1.assign(newScope, scope, {
	            scopeListeners: [],
	        });
	        if (scope) {
	            newScope.extra = object_1.assign(scope.extra);
	            newScope.tags = object_1.assign(scope.tags);
	            newScope.breadcrumbs = tslib_1.__spread(scope.breadcrumbs);
	            newScope.eventProcessors = tslib_1.__spread(scope.eventProcessors);
	        }
	        return newScope;
	    };
	    /** Clears the current scope and resets its properties. */
	    Scope.prototype.clear = function () {
	        this.breadcrumbs = [];
	        this.tags = {};
	        this.extra = {};
	        this.user = {};
	        this.level = undefined;
	        this.fingerprint = undefined;
	        this.notifyScopeListeners();
	    };
	    /**
	     * Sets the breadcrumbs in the scope
	     * @param breadcrumbs Breadcrumb
	     * @param maxBreadcrumbs number of max breadcrumbs to merged into event.
	     */
	    Scope.prototype.addBreadcrumb = function (breadcrumb, maxBreadcrumbs) {
	        this.breadcrumbs =
	            maxBreadcrumbs !== undefined && maxBreadcrumbs >= 0
	                ? tslib_1.__spread(this.breadcrumbs, [breadcrumb]).slice(-maxBreadcrumbs)
	                : tslib_1.__spread(this.breadcrumbs, [breadcrumb]);
	        this.notifyScopeListeners();
	    };
	    /**
	     * Applies fingerprint from the scope to the event if there's one,
	     * uses message if there's one instead or get rid of empty fingerprint
	     */
	    Scope.prototype.applyFingerprint = function (event) {
	        // Make sure it's an array first and we actually have something in place
	        event.fingerprint = event.fingerprint
	            ? Array.isArray(event.fingerprint)
	                ? event.fingerprint
	                : [event.fingerprint]
	            : [];
	        // If we have something on the scope, then merge it with event
	        if (this.fingerprint) {
	            event.fingerprint = event.fingerprint.concat(this.fingerprint);
	        }
	        else if (event.message) {
	            // If not, but we have message, use it instead
	            event.fingerprint = event.fingerprint.concat(event.message);
	        }
	        // If we have no data at all, remove empty array default
	        if (event.fingerprint && !event.fingerprint.length) {
	            delete event.fingerprint;
	        }
	    };
	    /**
	     * Applies the current context and fingerprint to the event.
	     * Note that breadcrumbs will be added by the client.
	     * Also if the event has already breadcrumbs on it, we do not merge them.
	     * @param event SentryEvent
	     * @param hint May contain additional informartion about the original exception.
	     * @param maxBreadcrumbs number of max breadcrumbs to merged into event.
	     */
	    Scope.prototype.applyToEvent = function (event, hint, maxBreadcrumbs) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var hasNoBreadcrumbs;
	            return tslib_1.__generator(this, function (_a) {
	                if (this.extra && Object.keys(this.extra).length) {
	                    event.extra = tslib_1.__assign({}, this.extra, event.extra);
	                }
	                if (this.tags && Object.keys(this.tags).length) {
	                    event.tags = tslib_1.__assign({}, this.tags, event.tags);
	                }
	                if (this.user && Object.keys(this.user).length) {
	                    event.user = tslib_1.__assign({}, this.user, event.user);
	                }
	                if (this.level) {
	                    event.level = this.level;
	                }
	                this.applyFingerprint(event);
	                hasNoBreadcrumbs = !event.breadcrumbs || event.breadcrumbs.length === 0;
	                if (hasNoBreadcrumbs && this.breadcrumbs.length > 0) {
	                    event.breadcrumbs =
	                        maxBreadcrumbs !== undefined && maxBreadcrumbs >= 0
	                            ? this.breadcrumbs.slice(-maxBreadcrumbs)
	                            : this.breadcrumbs;
	                }
	                return [2 /*return*/, this.notifyEventProcessors(event, hint)];
	            });
	        });
	    };
	    return Scope;
	}());
	exports.Scope = Scope;
	/**
	 * Retruns the global event processors.
	 */
	function getGlobalEventProcessors() {
	    var global = misc_1.getGlobalObject();
	    global.__SENTRY__ = global.__SENTRY__ || {};
	    global.__SENTRY__.globalEventProcessors = global.__SENTRY__.globalEventProcessors || [];
	    return global.__SENTRY__.globalEventProcessors;
	}
	/**
	 * Add a EventProcessor to be kept globally.
	 * @param callback EventProcessor to add
	 */
	function addGlobalEventProcessor(callback) {
	    getGlobalEventProcessors().push(callback);
	}
	exports.addGlobalEventProcessor = addGlobalEventProcessor;
	//# sourceMappingURL=scope.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var is_1 = __webpack_require__(10);
	/**
	 * Requires a module which is protected against bundler minification.
	 *
	 * @param request The module path to resolve
	 */
	function dynamicRequire(mod, request) {
	    return mod.require(request);
	}
	exports.dynamicRequire = dynamicRequire;
	/**
	 * Checks whether we're in the Node.js or Browser environment
	 *
	 * @returns Answer to given question
	 */
	function isNodeEnv() {
	    // tslint:disable:strict-type-predicates
	    return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
	}
	exports.isNodeEnv = isNodeEnv;
	/**
	 * Safely get global scope object
	 *
	 * @returns Global scope object
	 */
	// tslint:disable:strict-type-predicates
	function getGlobalObject() {
	    return isNodeEnv() ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {};
	}
	exports.getGlobalObject = getGlobalObject;
	/**
	 * UUID4 generator
	 *
	 * @returns string Generated UUID4.
	 */
	function uuid4() {
	    var global = getGlobalObject();
	    var crypto = global.crypto || global.msCrypto;
	    if (!(crypto === void 0) && crypto.getRandomValues) {
	        // Use window.crypto API if available
	        var arr = new Uint16Array(8);
	        crypto.getRandomValues(arr);
	        // set 4 in byte 7
	        // tslint:disable-next-line:no-bitwise
	        arr[3] = (arr[3] & 0xfff) | 0x4000;
	        // set 2 most significant bits of byte 9 to '10'
	        // tslint:disable-next-line:no-bitwise
	        arr[4] = (arr[4] & 0x3fff) | 0x8000;
	        var pad = function (num) {
	            var v = num.toString(16);
	            while (v.length < 4) {
	                v = "0" + v;
	            }
	            return v;
	        };
	        return (pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]));
	    }
	    else {
	        // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
	        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	            // tslint:disable-next-line:no-bitwise
	            var r = (Math.random() * 16) | 0;
	            // tslint:disable-next-line:no-bitwise
	            var v = c === 'x' ? r : (r & 0x3) | 0x8;
	            return v.toString(16);
	        });
	    }
	}
	exports.uuid4 = uuid4;
	/**
	 * Given a child DOM element, returns a query-selector statement describing that
	 * and its ancestors
	 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
	 * @returns generated DOM path
	 */
	function htmlTreeAsString(elem) {
	    var currentElem = elem;
	    var MAX_TRAVERSE_HEIGHT = 5;
	    var MAX_OUTPUT_LEN = 80;
	    var out = [];
	    var height = 0;
	    var len = 0;
	    var separator = ' > ';
	    var sepLength = separator.length;
	    var nextStr;
	    while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
	        nextStr = htmlElementAsString(currentElem);
	        // bail out if
	        // - nextStr is the 'html' element
	        // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
	        //   (ignore this limit if we are on the first iteration)
	        if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)) {
	            break;
	        }
	        out.push(nextStr);
	        len += nextStr.length;
	        currentElem = currentElem.parentNode;
	    }
	    return out.reverse().join(separator);
	}
	exports.htmlTreeAsString = htmlTreeAsString;
	/**
	 * Returns a simple, query-selector representation of a DOM element
	 * e.g. [HTMLElement] => input#foo.btn[name=baz]
	 * @returns generated DOM path
	 */
	function htmlElementAsString(elem) {
	    var out = [];
	    var className;
	    var classes;
	    var key;
	    var attr;
	    var i;
	    if (!elem || !elem.tagName) {
	        return '';
	    }
	    out.push(elem.tagName.toLowerCase());
	    if (elem.id) {
	        out.push("#" + elem.id);
	    }
	    className = elem.className;
	    if (className && is_1.isString(className)) {
	        classes = className.split(/\s+/);
	        for (i = 0; i < classes.length; i++) {
	            out.push("." + classes[i]);
	        }
	    }
	    var attrWhitelist = ['type', 'name', 'title', 'alt'];
	    for (i = 0; i < attrWhitelist.length; i++) {
	        key = attrWhitelist[i];
	        attr = elem.getAttribute(key);
	        if (attr) {
	            out.push("[" + key + "=\"" + attr + "\"]");
	        }
	    }
	    return out.join('');
	}
	exports.htmlElementAsString = htmlElementAsString;
	/**
	 * Parses string form of URL into an object
	 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
	 * // intentionally using regex and not <a/> href parsing trick because React Native and other
	 * // environments where DOM might not be available
	 * @returns parsed URL object
	 */
	function parseUrl(url) {
	    if (!url) {
	        return {};
	    }
	    var match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
	    if (!match) {
	        return {};
	    }
	    // coerce to undefined values to empty string so we don't get 'undefined'
	    var query = match[6] || '';
	    var fragment = match[8] || '';
	    return {
	        host: match[4],
	        path: match[5],
	        protocol: match[2],
	        relative: match[5] + query + fragment,
	    };
	}
	exports.parseUrl = parseUrl;
	/**
	 * Extracts either message or type+value from an event that can be used for user-facing logs
	 * @returns event's description
	 */
	function getEventDescription(event) {
	    if (event.message) {
	        return event.message;
	    }
	    else if (event.exception && event.exception.values && event.exception.values[0]) {
	        var exception = event.exception.values[0];
	        if (exception.type && exception.value) {
	            return exception.type + ": " + exception.value;
	        }
	        else {
	            return exception.type || exception.value || event.event_id || '<unknown>';
	        }
	    }
	    else {
	        return event.event_id || '<unknown>';
	    }
	}
	exports.getEventDescription = getEventDescription;
	/** JSDoc */
	function consoleSandbox(callback) {
	    var global = getGlobalObject();
	    var levels = ['debug', 'info', 'warn', 'error', 'log'];
	    if (!('console' in global)) {
	        return callback();
	    }
	    var originalConsole = global.console;
	    var wrappedLevels = {};
	    // Restore all wrapped console methods
	    levels.forEach(function (level) {
	        if (level in global.console && originalConsole[level].__sentry__) {
	            wrappedLevels[level] = originalConsole[level].__sentry_wrapped__;
	            originalConsole[level] = originalConsole[level].__sentry_original__;
	        }
	    });
	    // Perform callback manipulations
	    var result = callback();
	    // Revert restoration to wrapped state
	    Object.keys(wrappedLevels).forEach(function (level) {
	        originalConsole[level] = wrappedLevels[level];
	    });
	    return result;
	}
	exports.consoleSandbox = consoleSandbox;
	//# sourceMappingURL=misc.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Checks whether given value's type is one of a few Error or Error-like
	 * {@link isError}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isError(wat) {
	    switch (Object.prototype.toString.call(wat)) {
	        case '[object Error]':
	            return true;
	        case '[object Exception]':
	            return true;
	        case '[object DOMException]':
	            return true;
	        default:
	            return wat instanceof Error;
	    }
	}
	exports.isError = isError;
	/**
	 * Checks whether given value's type is ErrorEvent
	 * {@link isErrorEvent}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isErrorEvent(wat) {
	    return Object.prototype.toString.call(wat) === '[object ErrorEvent]';
	}
	exports.isErrorEvent = isErrorEvent;
	/**
	 * Checks whether given value's type is DOMError
	 * {@link isDOMError}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isDOMError(wat) {
	    return Object.prototype.toString.call(wat) === '[object DOMError]';
	}
	exports.isDOMError = isDOMError;
	/**
	 * Checks whether given value's type is DOMException
	 * {@link isDOMException}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isDOMException(wat) {
	    return Object.prototype.toString.call(wat) === '[object DOMException]';
	}
	exports.isDOMException = isDOMException;
	/**
	 * Checks whether given value's type is an undefined
	 * {@link isUndefined}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isUndefined(wat) {
	    return wat === void 0;
	}
	exports.isUndefined = isUndefined;
	/**
	 * Checks whether given value's type is a function
	 * {@link isFunction}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isFunction(wat) {
	    return typeof wat === 'function';
	}
	exports.isFunction = isFunction;
	/**
	 * Checks whether given value's type is a string
	 * {@link isString}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isString(wat) {
	    return Object.prototype.toString.call(wat) === '[object String]';
	}
	exports.isString = isString;
	/**
	 * Checks whether given value's type is an array
	 * {@link isArray}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isArray(wat) {
	    return Object.prototype.toString.call(wat) === '[object Array]';
	}
	exports.isArray = isArray;
	/**
	 * Checks whether given value's type is an object literal
	 * {@link isPlainObject}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isPlainObject(wat) {
	    return Object.prototype.toString.call(wat) === '[object Object]';
	}
	exports.isPlainObject = isPlainObject;
	/**
	 * Checks whether given value's type is an regexp
	 * {@link isRegExp}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isRegExp(wat) {
	    return Object.prototype.toString.call(wat) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	/**
	 * Checks whether given value's type is a NaN
	 * {@link isNaN}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isNaN(wat) {
	    return wat !== wat;
	}
	exports.isNaN = isNaN;
	//# sourceMappingURL=is.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var is_1 = __webpack_require__(10);
	/**
	 * Transforms Error object into an object literal with all it's attributes
	 * attached to it.
	 *
	 * Based on: https://github.com/ftlabs/js-abbreviate/blob/fa709e5f139e7770a71827b1893f22418097fbda/index.js#L95-L106
	 *
	 * @param error An Error containing all relevant information
	 * @returns An object with all error properties
	 */
	function objectifyError(error) {
	    // These properties are implemented as magical getters and don't show up in `for-in` loop
	    var err = {
	        message: error.message,
	        name: error.name,
	        stack: error.stack,
	    };
	    for (var i in error) {
	        if (Object.prototype.hasOwnProperty.call(error, i)) {
	            err[i] = error[i];
	        }
	    }
	    return err;
	}
	var NAN_VALUE = '[NaN]';
	var UNDEFINED_VALUE = '[undefined]';
	/**
	 * Serializer function used as 2nd argument to JSON.serialize in `serialize()` util function.
	 */
	function serializer() {
	    var stack = [];
	    var keys = [];
	    var cycleReplacer = function (_, value) {
	        if (stack[0] === value) {
	            return '[Circular ~]';
	        }
	        return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join('.') + "]";
	    };
	    return function (key, value) {
	        var currentValue = value;
	        // NaN and undefined are not JSON.parseable, but we want to preserve this information
	        if (is_1.isNaN(value)) {
	            currentValue = NAN_VALUE;
	        }
	        else if (is_1.isUndefined(value)) {
	            currentValue = UNDEFINED_VALUE;
	        }
	        if (stack.length > 0) {
	            var thisPos = stack.indexOf(this);
	            if (thisPos !== -1) {
	                stack.splice(thisPos + 1);
	                keys.splice(thisPos, Infinity, key);
	            }
	            else {
	                stack.push(this);
	                keys.push(key);
	            }
	            if (stack.indexOf(currentValue) !== -1) {
	                currentValue = cycleReplacer.call(this, key, currentValue);
	            }
	        }
	        else {
	            stack.push(currentValue);
	        }
	        return currentValue instanceof Error ? objectifyError(currentValue) : currentValue;
	    };
	}
	/**
	 * Reviver function used as 2nd argument to JSON.parse in `deserialize()` util function.
	 */
	function reviver(_key, value) {
	    // NaN and undefined are not JSON.parseable, but we want to preserve this information
	    if (value === NAN_VALUE) {
	        return NaN;
	    }
	    if (value === UNDEFINED_VALUE) {
	        return undefined;
	    }
	    return value;
	}
	/**
	 * Serializes the given object into a string.
	 * Like JSON.stringify, but doesn't throw on circular references.
	 * Based on a `json-stringify-safe` package and modified to handle Errors serialization.
	 *
	 * The object must be serializable, i.e.:
	 *  - Only primitive types are allowed (object, array, number, string, boolean)
	 *  - Its depth should be considerably low for performance reasons
	 *
	 * @param object A JSON-serializable object.
	 * @returns A string containing the serialized object.
	 */
	function serialize(object) {
	    return JSON.stringify(object, serializer());
	}
	exports.serialize = serialize;
	/**
	 * Deserializes an object from a string previously serialized with
	 * {@link serialize}.
	 *
	 * @param str A serialized object.
	 * @returns The deserialized object.
	 */
	function deserialize(str) {
	    return JSON.parse(str, reviver);
	}
	exports.deserialize = deserialize;
	/**
	 * Creates a deep copy of the given object.
	 *
	 * The object must be serializable, i.e.:
	 *  - It must not contain any cycles
	 *  - Only primitive types are allowed (object, array, number, string, boolean)
	 *  - Its depth should be considerably low for performance reasons
	 *
	 * @param object A JSON-serializable object.
	 * @returns The object clone.
	 */
	function clone(object) {
	    return deserialize(serialize(object));
	}
	exports.clone = clone;
	/**
	 * Wrap a given object method with a higher-order function
	 *
	 * @param source An object that contains a method to be wrapped.
	 * @param name A name of method to be wrapped.
	 * @param replacement A function that should be used to wrap a given method.
	 * @returns void
	 */
	function fill(source, name, replacement) {
	    if (!(name in source) || source[name].__sentry__) {
	        return;
	    }
	    var original = source[name];
	    var wrapped = replacement(original);
	    wrapped.__sentry__ = true;
	    wrapped.__sentry_original__ = original;
	    wrapped.__sentry_wrapped__ = wrapped;
	    source[name] = wrapped;
	}
	exports.fill = fill;
	/**
	 * Encodes given object into url-friendly format
	 *
	 * @param object An object that contains serializable values
	 * @returns string Encoded
	 */
	function urlEncode(object) {
	    return Object.keys(object)
	        .map(
	    // tslint:disable-next-line:no-unsafe-any
	    function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]); })
	        .join('&');
	}
	exports.urlEncode = urlEncode;
	// Default Node.js REPL depth
	var MAX_SERIALIZE_EXCEPTION_DEPTH = 3;
	// 100kB, as 200kB is max payload size, so half sounds reasonable
	var MAX_SERIALIZE_EXCEPTION_SIZE = 100 * 1024;
	var MAX_SERIALIZE_KEYS_LENGTH = 40;
	/** JSDoc */
	function utf8Length(value) {
	    // tslint:disable-next-line:no-bitwise
	    return ~-encodeURI(value).split(/%..|./).length;
	}
	/** JSDoc */
	function jsonSize(value) {
	    return utf8Length(JSON.stringify(value));
	}
	/** JSDoc */
	function serializeValue(value) {
	    var maxLength = 40;
	    if (typeof value === 'string') {
	        return value.length <= maxLength ? value : value.substr(0, maxLength - 1) + "\u2026";
	    }
	    else if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'undefined') {
	        return value;
	    }
	    else if (is_1.isNaN(value)) {
	        // NaN and undefined are not JSON.parseable, but we want to preserve this information
	        return '[NaN]';
	    }
	    else if (is_1.isUndefined(value)) {
	        return '[undefined]';
	    }
	    var type = Object.prototype.toString.call(value);
	    // Node.js REPL notation
	    if (type === '[object Object]') {
	        return '[Object]';
	    }
	    if (type === '[object Array]') {
	        return '[Array]';
	    }
	    if (type === '[object Function]') {
	        var name_1 = value.name;
	        return name_1 ? "[Function: " + name_1 + "]" : '[Function]';
	    }
	    return value;
	}
	/** JSDoc */
	function serializeObject(value, depth) {
	    if (depth === 0) {
	        return serializeValue(value);
	    }
	    if (is_1.isPlainObject(value)) {
	        var serialized_1 = {};
	        var val_1 = value;
	        Object.keys(val_1).forEach(function (key) {
	            serialized_1[key] = serializeObject(val_1[key], depth - 1);
	        });
	        return serialized_1;
	    }
	    else if (Array.isArray(value)) {
	        var val = value;
	        return val.map(function (v) { return serializeObject(v, depth - 1); });
	    }
	    return serializeValue(value);
	}
	exports.serializeObject = serializeObject;
	/** JSDoc */
	function limitObjectDepthToSize(object, depth, maxSize) {
	    if (depth === void 0) { depth = MAX_SERIALIZE_EXCEPTION_DEPTH; }
	    if (maxSize === void 0) { maxSize = MAX_SERIALIZE_EXCEPTION_SIZE; }
	    var serialized = serializeObject(object, depth);
	    if (jsonSize(serialize(serialized)) > maxSize) {
	        return limitObjectDepthToSize(object, depth - 1);
	    }
	    return serialized;
	}
	exports.limitObjectDepthToSize = limitObjectDepthToSize;
	/** JSDoc */
	function serializeKeysToEventMessage(keys, maxLength) {
	    if (maxLength === void 0) { maxLength = MAX_SERIALIZE_KEYS_LENGTH; }
	    if (!keys.length) {
	        return '[object has no keys]';
	    }
	    if (keys[0].length >= maxLength) {
	        return keys[0];
	    }
	    for (var includedKeys = keys.length; includedKeys > 0; includedKeys--) {
	        var serialized = keys.slice(0, includedKeys).join(', ');
	        if (serialized.length > maxLength) {
	            continue;
	        }
	        if (includedKeys === keys.length) {
	            return serialized;
	        }
	        return serialized + "\u2026";
	    }
	    return '';
	}
	exports.serializeKeysToEventMessage = serializeKeysToEventMessage;
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
	/** JSDoc */
	function assign(target) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    if (target === null || target === undefined) {
	        throw new TypeError('Cannot convert undefined or null to object');
	    }
	    var to = Object(target);
	    // tslint:disable-next-line
	    for (var i = 0; i < args.length; i++) {
	        var source = args[i];
	        if (source !== null) {
	            for (var nextKey in source) {
	                if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
	                    to[nextKey] = source[nextKey];
	                }
	            }
	        }
	    }
	    return to;
	}
	exports.assign = assign;
	//# sourceMappingURL=object.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var logger_1 = __webpack_require__(14);
	var misc_1 = __webpack_require__(8);
	var scope_1 = __webpack_require__(7);
	/**
	 * API compatibility version of this hub.
	 *
	 * WARNING: This number should only be incresed when the global interface
	 * changes a and new methods are introduced.
	 */
	exports.API_VERSION = 3;
	/**
	 * Internal class used to make sure we always have the latest internal functions
	 * working in case we have a version conflict.
	 */
	var Hub = /** @class */ (function () {
	    /**
	     * Creates a new instance of the hub, will push one {@link Layer} into the
	     * internal stack on creation.
	     *
	     * @param client bound to the hub.
	     * @param scope bound to the hub.
	     * @param version number, higher number means higher priority.
	     */
	    function Hub(client, scope, version) {
	        if (scope === void 0) { scope = new scope_1.Scope(); }
	        if (version === void 0) { version = exports.API_VERSION; }
	        this.version = version;
	        /** Is a {@link Layer}[] containing the client and scope */
	        this.stack = [];
	        this.stack.push({ client: client, scope: scope });
	    }
	    /**
	     * Internal helper function to call a method on the top client if it exists.
	     *
	     * @param method The method to call on the client/client.
	     * @param args Arguments to pass to the client/frontend.
	     */
	    Hub.prototype.invokeClient = function (method) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var _a;
	        var top = this.getStackTop();
	        if (top && top.client && top.client[method]) {
	            (_a = top.client)[method].apply(_a, tslib_1.__spread(args, [top.scope]));
	        }
	    };
	    /**
	     * Internal helper function to call an async method on the top client if it
	     * exists.
	     *
	     * @param method The method to call on the client/client.
	     * @param args Arguments to pass to the client/frontend.
	     */
	    Hub.prototype.invokeClientAsync = function (method) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var _a;
	        var top = this.getStackTop();
	        if (top && top.client && top.client[method]) {
	            (_a = top.client)[method].apply(_a, tslib_1.__spread(args, [top.scope])).catch(function (err) {
	                logger_1.logger.error(err);
	            });
	        }
	    };
	    /**
	     * Checks if this hub's version is older than the given version.
	     *
	     * @param version A version number to compare to.
	     * @return True if the given version is newer; otherwise false.
	     */
	    Hub.prototype.isOlderThan = function (version) {
	        return this.version < version;
	    };
	    /**
	     * This binds the given client to the current scope.
	     * @param client An SDK client (client) instance.
	     */
	    Hub.prototype.bindClient = function (client) {
	        var top = this.getStackTop();
	        top.client = client;
	        if (top && top.scope && client) {
	            top.scope.addScopeListener(function (s) {
	                if (client.getBackend) {
	                    try {
	                        client.getBackend().storeScope(s);
	                    }
	                    catch (_a) {
	                        // Do nothing
	                    }
	                }
	            });
	        }
	    };
	    /**
	     * Create a new scope to store context information.
	     *
	     * The scope will be layered on top of the current one. It is isolated, i.e. all
	     * breadcrumbs and context information added to this scope will be removed once
	     * the scope ends. Be sure to always remove this scope with {@link this.popScope}
	     * when the operation finishes or throws.
	     *
	     * @returns Scope, the new cloned scope
	     */
	    Hub.prototype.pushScope = function () {
	        // We want to clone the content of prev scope
	        var stack = this.getStack();
	        var parentScope = stack.length > 0 ? stack[stack.length - 1].scope : undefined;
	        var scope = scope_1.Scope.clone(parentScope);
	        this.getStack().push({
	            client: this.getClient(),
	            scope: scope,
	        });
	        return scope;
	    };
	    /**
	     * Removes a previously pushed scope from the stack.
	     *
	     * This restores the state before the scope was pushed. All breadcrumbs and
	     * context information added since the last call to {@link this.pushScope} are
	     * discarded.
	     */
	    Hub.prototype.popScope = function () {
	        return this.getStack().pop() !== undefined;
	    };
	    /**
	     * Creates a new scope with and executes the given operation within.
	     * The scope is automatically removed once the operation
	     * finishes or throws.
	     *
	     * This is essentially a convenience function for:
	     *
	     *     pushScope();
	     *     callback();
	     *     popScope();
	     *
	     * @param callback that will be enclosed into push/popScope.
	     */
	    Hub.prototype.withScope = function (callback) {
	        var scope = this.pushScope();
	        try {
	            callback(scope);
	        }
	        finally {
	            this.popScope();
	        }
	    };
	    /** Returns the client of the top stack. */
	    Hub.prototype.getClient = function () {
	        return this.getStackTop().client;
	    };
	    /** Returns the scope of the top stack. */
	    Hub.prototype.getScope = function () {
	        return this.getStackTop().scope;
	    };
	    /** Returns the scope stack for domains or the process. */
	    Hub.prototype.getStack = function () {
	        return this.stack;
	    };
	    /** Returns the topmost scope layer in the order domain > local > process. */
	    Hub.prototype.getStackTop = function () {
	        return this.stack[this.stack.length - 1];
	    };
	    /**
	     * Captures an exception event and sends it to Sentry.
	     *
	     * @param exception An exception-like object.
	     * @param hint May contain additional information about the original exception.
	     * @returns The generated eventId.
	     */
	    Hub.prototype.captureException = function (exception, hint) {
	        var eventId = (this._lastEventId = misc_1.uuid4());
	        this.invokeClientAsync('captureException', exception, tslib_1.__assign({}, hint, { event_id: eventId }));
	        return eventId;
	    };
	    /**
	     * Captures a message event and sends it to Sentry.
	     *
	     * @param message The message to send to Sentry.
	     * @param level Define the level of the message.
	     * @param hint May contain additional information about the original exception.
	     * @returns The generated eventId.
	     */
	    Hub.prototype.captureMessage = function (message, level, hint) {
	        var eventId = (this._lastEventId = misc_1.uuid4());
	        this.invokeClientAsync('captureMessage', message, level, tslib_1.__assign({}, hint, { event_id: eventId }));
	        return eventId;
	    };
	    /**
	     * Captures a manually created event and sends it to Sentry.
	     *
	     * @param event The event to send to Sentry.
	     * @param hint May contain additional information about the original exception.
	     */
	    Hub.prototype.captureEvent = function (event, hint) {
	        var eventId = (this._lastEventId = misc_1.uuid4());
	        this.invokeClientAsync('captureEvent', event, tslib_1.__assign({}, hint, { event_id: eventId }));
	        return eventId;
	    };
	    /**
	     * This is the getter for lastEventId.
	     *
	     * @returns The last event id of a captured event.
	     */
	    Hub.prototype.lastEventId = function () {
	        return this._lastEventId;
	    };
	    /**
	     * Records a new breadcrumb which will be attached to future events.
	     *
	     * Breadcrumbs will be added to subsequent events to provide more context on
	     * user's actions prior to an error or crash.
	     *
	     * @param breadcrumb The breadcrumb to record.
	     * @param hint May contain additional information about the original breadcrumb.
	     */
	    Hub.prototype.addBreadcrumb = function (breadcrumb, hint) {
	        this.invokeClient('addBreadcrumb', breadcrumb, tslib_1.__assign({}, hint));
	    };
	    /**
	     * Callback to set context information onto the scope.
	     *
	     * @param callback Callback function that receives Scope.
	     */
	    Hub.prototype.configureScope = function (callback) {
	        var top = this.getStackTop();
	        if (top.scope && top.client) {
	            // TODO: freeze flag
	            callback(top.scope);
	        }
	    };
	    /**
	     * For the duraction of the callback, this hub will be set as the global current Hub.
	     * This function is useful if you want to run your own client and hook into an already initialized one
	     * e.g.: Reporting issues to your own sentry when running in your component while still using the users configuration.
	     */
	    Hub.prototype.run = function (callback) {
	        var oldHub = makeMain(this);
	        try {
	            callback(this);
	        }
	        finally {
	            makeMain(oldHub);
	        }
	    };
	    /** Returns the integration if installed on the current client. */
	    Hub.prototype.getIntegration = function (integration) {
	        try {
	            return this.getClient().getIntegration(integration);
	        }
	        catch (_oO) {
	            logger_1.logger.warn("Cannot retrieve integration " + integration.id + " from the current Hub");
	            return null;
	        }
	    };
	    return Hub;
	}());
	exports.Hub = Hub;
	/** Returns the global shim registry. */
	function getMainCarrier() {
	    var carrier = misc_1.getGlobalObject();
	    carrier.__SENTRY__ = carrier.__SENTRY__ || {
	        hub: undefined,
	    };
	    return carrier;
	}
	exports.getMainCarrier = getMainCarrier;
	/**
	 * Replaces the current main hub with the passed one on the global object
	 *
	 * @returns The old replaced hub
	 */
	function makeMain(hub) {
	    var registry = getMainCarrier();
	    var oldHub = getHubFromCarrier(registry);
	    setHubOnCarrier(registry, hub);
	    return oldHub;
	}
	exports.makeMain = makeMain;
	/**
	 * Returns the default hub instance.
	 *
	 * If a hub is already registered in the global carrier but this module
	 * contains a more recent version, it replaces the registered version.
	 * Otherwise, the currently registered hub will be returned.
	 */
	function getCurrentHub() {
	    // Get main carrier (global for every environment)
	    var registry = getMainCarrier();
	    // If there's no hub, or its an old API, assign a new one
	    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(exports.API_VERSION)) {
	        setHubOnCarrier(registry, new Hub());
	    }
	    // Prefer domains over global if they are there
	    try {
	        // We need to use `dynamicRequire` because `require` on it's own will be optimized by webpack.
	        // We do not want this to happen, we need to try to `require` the domain node module and fail if we are in browser
	        // for example so we do not have to shim it and use `getCurrentHub` universally.
	        var domain = misc_1.dynamicRequire(module, 'domain');
	        var activeDomain = domain.active;
	        // If there no active domain, just return global hub
	        if (!activeDomain) {
	            return getHubFromCarrier(registry);
	        }
	        // If there's no hub on current domain, or its an old API, assign a new one
	        if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(exports.API_VERSION)) {
	            var registryHubTopStack = getHubFromCarrier(registry).getStackTop();
	            setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, scope_1.Scope.clone(registryHubTopStack.scope)));
	        }
	        // Return hub that lives on a domain
	        return getHubFromCarrier(activeDomain);
	    }
	    catch (_Oo) {
	        // Return hub that lives on a global object
	        return getHubFromCarrier(registry);
	    }
	}
	exports.getCurrentHub = getCurrentHub;
	/**
	 * This will tell whether a carrier has a hub on it or not
	 * @param carrier object
	 */
	function hasHubOnCarrier(carrier) {
	    if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub) {
	        return true;
	    }
	    else {
	        return false;
	    }
	}
	exports.hasHubOnCarrier = hasHubOnCarrier;
	/**
	 * This will create a new {@link Hub} and add to the passed object on
	 * __SENTRY__.hub.
	 * @param carrier object
	 */
	function getHubFromCarrier(carrier) {
	    if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub) {
	        return carrier.__SENTRY__.hub;
	    }
	    else {
	        carrier.__SENTRY__ = {};
	        carrier.__SENTRY__.hub = new Hub();
	        return carrier.__SENTRY__.hub;
	    }
	}
	exports.getHubFromCarrier = getHubFromCarrier;
	/**
	 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
	 * @param carrier object
	 * @param hub Hub
	 */
	function setHubOnCarrier(carrier, hub) {
	    if (!carrier) {
	        return false;
	    }
	    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
	    carrier.__SENTRY__.hub = hub;
	    return true;
	}
	exports.setHubOnCarrier = setHubOnCarrier;
	//# sourceMappingURL=hub.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var misc_1 = __webpack_require__(8);
	// TODO: Implement different loggers for different environments
	var global = misc_1.getGlobalObject();
	/** JSDoc */
	var Logger = /** @class */ (function () {
	    /** JSDoc */
	    function Logger() {
	        this.enabled = false;
	    }
	    /** JSDoc */
	    Logger.prototype.disable = function () {
	        this.enabled = false;
	    };
	    /** JSDoc */
	    Logger.prototype.enable = function () {
	        this.enabled = true;
	    };
	    /** JSDoc */
	    Logger.prototype.log = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        if (!this.enabled) {
	            return;
	        }
	        misc_1.consoleSandbox(function () {
	            global.console.log("Sentry Logger [Log]: " + args.join(' ')); // tslint:disable-line:no-console
	        });
	    };
	    /** JSDoc */
	    Logger.prototype.warn = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        if (!this.enabled) {
	            return;
	        }
	        misc_1.consoleSandbox(function () {
	            global.console.warn("Sentry Logger [Warn]: " + args.join(' ')); // tslint:disable-line:no-console
	        });
	    };
	    /** JSDoc */
	    Logger.prototype.error = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        if (!this.enabled) {
	            return;
	        }
	        misc_1.consoleSandbox(function () {
	            global.console.error("Sentry Logger [Error]: " + args.join(' ')); // tslint:disable-line:no-console
	        });
	    };
	    return Logger;
	}());
	var logger = new Logger();
	exports.logger = logger;
	//# sourceMappingURL=logger.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var object_1 = __webpack_require__(11);
	var dsn_1 = __webpack_require__(16);
	var SENTRY_API_VERSION = '7';
	/** Helper class to provide urls to different Sentry endpoints. */
	var API = /** @class */ (function () {
	    /** Create a new instance of API */
	    function API(dsn) {
	        this.dsn = dsn;
	        this.dsnObject = new dsn_1.Dsn(dsn);
	    }
	    /** Returns the Dsn object. */
	    API.prototype.getDsn = function () {
	        return this.dsnObject;
	    };
	    /** Returns a string with auth headers in the url to the store endpoint. */
	    API.prototype.getStoreEndpoint = function () {
	        return "" + this.getBaseUrl() + this.getStoreEndpointPath();
	    };
	    /** Returns the store endpoint with auth added in url encoded. */
	    API.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
	        var dsn = this.dsnObject;
	        var auth = {
	            sentry_key: dsn.user,
	            sentry_version: SENTRY_API_VERSION,
	        };
	        // Auth is intentionally sent as part of query string (NOT as custom HTTP header)
	        // to avoid preflight CORS requests
	        return this.getStoreEndpoint() + "?" + object_1.urlEncode(auth);
	    };
	    /** Returns the base path of the url including the port. */
	    API.prototype.getBaseUrl = function () {
	        var dsn = this.dsnObject;
	        var protocol = dsn.protocol ? dsn.protocol + ":" : '';
	        var port = dsn.port ? ":" + dsn.port : '';
	        return protocol + "//" + dsn.host + port;
	    };
	    /** Returns only the path component for the store endpoint. */
	    API.prototype.getStoreEndpointPath = function () {
	        var dsn = this.dsnObject;
	        return (dsn.path ? "/" + dsn.path : '') + "/api/" + dsn.projectId + "/store/";
	    };
	    /** Returns an object that can be used in request headers. */
	    API.prototype.getRequestHeaders = function (clientName, clientVersion) {
	        var dsn = this.dsnObject;
	        var header = ["Sentry sentry_version=" + SENTRY_API_VERSION];
	        header.push("sentry_timestamp=" + new Date().getTime());
	        header.push("sentry_client=" + clientName + "/" + clientVersion);
	        header.push("sentry_key=" + dsn.user);
	        if (dsn.pass) {
	            header.push("sentry_secret=" + dsn.pass);
	        }
	        return {
	            'Content-Type': 'application/json',
	            'X-Sentry-Auth': header.join(', '),
	        };
	    };
	    /** Returns the url to the report dialog endpoint. */
	    API.prototype.getReportDialogEndpoint = function (dialogOptions) {
	        if (dialogOptions === void 0) { dialogOptions = {}; }
	        var dsn = this.dsnObject;
	        var endpoint = "" + this.getBaseUrl() + (dsn.path ? "/" + dsn.path : '') + "/api/embed/error-page/";
	        var encodedOptions = [];
	        encodedOptions.push("dsn=" + dsn.toString());
	        for (var key in dialogOptions) {
	            if (key === 'user') {
	                if (!dialogOptions.user) {
	                    continue;
	                }
	                if (dialogOptions.user.name) {
	                    encodedOptions.push("name=" + encodeURIComponent(dialogOptions.user.name));
	                }
	                if (dialogOptions.user.email) {
	                    encodedOptions.push("email=" + encodeURIComponent(dialogOptions.user.email));
	                }
	            }
	            else {
	                encodedOptions.push(encodeURIComponent(key) + "=" + encodeURIComponent(dialogOptions[key]));
	            }
	        }
	        if (encodedOptions.length) {
	            return endpoint + "?" + encodedOptions.join('&');
	        }
	        return endpoint;
	    };
	    return API;
	}());
	exports.API = API;
	//# sourceMappingURL=api.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var is_1 = __webpack_require__(10);
	var object_1 = __webpack_require__(11);
	var error_1 = __webpack_require__(17);
	/** Regular expression used to parse a Dsn. */
	var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/;
	/** The Sentry Dsn, identifying a Sentry instance and project. */
	var Dsn = /** @class */ (function () {
	    /** Creates a new Dsn component */
	    function Dsn(from) {
	        if (typeof from === 'string') {
	            this.fromString(from);
	        }
	        else {
	            this.fromComponents(from);
	        }
	        this.validate();
	    }
	    /**
	     * Renders the string representation of this Dsn.
	     *
	     * By default, this will render the public representation without the password
	     * component. To get the deprecated private representation, set `withPassword`
	     * to true.
	     *
	     * @param withPassword When set to true, the password will be included.
	     */
	    Dsn.prototype.toString = function (withPassword) {
	        if (withPassword === void 0) { withPassword = false; }
	        // tslint:disable-next-line:no-this-assignment
	        var _a = this, host = _a.host, path = _a.path, pass = _a.pass, port = _a.port, projectId = _a.projectId, protocol = _a.protocol, user = _a.user;
	        return (protocol + "://" + user + (withPassword && pass ? ":" + pass : '') +
	            ("@" + host + (port ? ":" + port : '') + "/" + (path ? path + "/" : path) + projectId));
	    };
	    /** Parses a string into this Dsn. */
	    Dsn.prototype.fromString = function (str) {
	        var match = DSN_REGEX.exec(str);
	        if (!match) {
	            throw new error_1.SentryError('Invalid Dsn');
	        }
	        var _a = tslib_1.__read(match.slice(1), 6), protocol = _a[0], user = _a[1], _b = _a[2], pass = _b === void 0 ? '' : _b, host = _a[3], _c = _a[4], port = _c === void 0 ? '' : _c, lastPath = _a[5];
	        var path = '';
	        var projectId = lastPath;
	        var split = projectId.split('/');
	        if (split.length > 1) {
	            path = split.slice(0, -1).join('/');
	            projectId = split.pop();
	        }
	        object_1.assign(this, { host: host, pass: pass, path: path, projectId: projectId, port: port, protocol: protocol, user: user });
	    };
	    /** Maps Dsn components into this instance. */
	    Dsn.prototype.fromComponents = function (components) {
	        this.protocol = components.protocol;
	        this.user = components.user;
	        this.pass = components.pass || '';
	        this.host = components.host;
	        this.port = components.port || '';
	        this.path = components.path || '';
	        this.projectId = components.projectId;
	    };
	    /** Validates this Dsn and throws on error. */
	    Dsn.prototype.validate = function () {
	        var e_1, _a;
	        try {
	            for (var _b = tslib_1.__values(['protocol', 'user', 'host', 'projectId']), _c = _b.next(); !_c.done; _c = _b.next()) {
	                var component = _c.value;
	                if (!this[component]) {
	                    throw new error_1.SentryError("Invalid Dsn: Missing " + component);
	                }
	            }
	        }
	        catch (e_1_1) { e_1 = { error: e_1_1 }; }
	        finally {
	            try {
	                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	            }
	            finally { if (e_1) throw e_1.error; }
	        }
	        if (this.protocol !== 'http' && this.protocol !== 'https') {
	            throw new error_1.SentryError("Invalid Dsn: Unsupported protocol \"" + this.protocol + "\"");
	        }
	        if (this.port && is_1.isNaN(parseInt(this.port, 10))) {
	            throw new error_1.SentryError("Invalid Dsn: Invalid port number \"" + this.port + "\"");
	        }
	    };
	    return Dsn;
	}());
	exports.Dsn = Dsn;
	//# sourceMappingURL=dsn.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	/** An error emitted by Sentry SDKs and related utilities. */
	var SentryError = /** @class */ (function (_super) {
	    tslib_1.__extends(SentryError, _super);
	    function SentryError(message) {
	        var _newTarget = this.constructor;
	        var _this = _super.call(this, message) || this;
	        _this.message = message;
	        // tslint:disable:no-unsafe-any
	        _this.name = _newTarget.prototype.constructor.name;
	        Object.setPrototypeOf(_this, _newTarget.prototype);
	        return _this;
	    }
	    return SentryError;
	}(Error));
	exports.SentryError = SentryError;
	//# sourceMappingURL=error.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var types_1 = __webpack_require__(19);
	var async_1 = __webpack_require__(20);
	var logger_1 = __webpack_require__(14);
	var misc_1 = __webpack_require__(8);
	var string_1 = __webpack_require__(21);
	var dsn_1 = __webpack_require__(16);
	var integration_1 = __webpack_require__(22);
	/**
	 * Default maximum number of breadcrumbs added to an event. Can be overwritten
	 * with {@link Options.maxBreadcrumbs}.
	 */
	var DEFAULT_BREADCRUMBS = 30;
	/**
	 * Absolute maximum number of breadcrumbs added to an event. The
	 * `maxBreadcrumbs` option cannot be higher than this value.
	 */
	var MAX_BREADCRUMBS = 100;
	/**
	 * By default, truncates URL values to 250 chars
	 */
	var MAX_URL_LENGTH = 250;
	/**
	 * Base implementation for all JavaScript SDK clients.
	 *
	 * Call the constructor with the corresponding backend constructor and options
	 * specific to the client subclass. To access these options later, use
	 * {@link Client.getOptions}. Also, the Backend instance is available via
	 * {@link Client.getBackend}.
	 *
	 * If a Dsn is specified in the options, it will be parsed and stored. Use
	 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
	 * invalid, the constructor will throw a {@link SentryException}. Note that
	 * without a valid Dsn, the SDK will not send any events to Sentry.
	 *
	 * Before sending an event via the backend, it is passed through
	 * {@link BaseClient.prepareEvent} to add SDK information and scope data
	 * (breadcrumbs and context). To add more custom information, override this
	 * method and extend the resulting prepared event.
	 *
	 * To issue automatically created events (e.g. via instrumentation), use
	 * {@link Client.captureEvent}. It will prepare the event and pass it through
	 * the callback lifecycle. To issue auto-breadcrumbs, use
	 * {@link Client.addBreadcrumb}.
	 *
	 * @example
	 * class NodeClient extends BaseClient<NodeBackend, NodeOptions> {
	 *   public constructor(options: NodeOptions) {
	 *     super(NodeBackend, options);
	 *   }
	 *
	 *   // ...
	 * }
	 */
	var BaseClient = /** @class */ (function () {
	    /**
	     * Initializes this client instance.
	     *
	     * @param backendClass A constructor function to create the backend.
	     * @param options Options for the client.
	     */
	    function BaseClient(backendClass, options) {
	        this.backend = new backendClass(options);
	        this.options = options;
	        if (options.dsn) {
	            this.dsn = new dsn_1.Dsn(options.dsn);
	        }
	        // We have to setup the integrations in the constructor since we do not want
	        // that anyone needs to call client.install();
	        this.integrations = integration_1.setupIntegrations(this.options);
	    }
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.install = function () {
	        if (!this.isEnabled()) {
	            return (this.installed = false);
	        }
	        var backend = this.getBackend();
	        if (!this.installed && backend.install) {
	            backend.install();
	        }
	        return (this.installed = true);
	    };
	    /**
	     * Internal helper function to buffer promises.
	     *
	     * @param promise Any promise, but in this case Promise<SentryResponse>.
	     */
	    BaseClient.prototype.buffer = function (promise) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            return tslib_1.__generator(this, function (_a) {
	                return [2 /*return*/, this.getBackend()
	                        .getBuffer()
	                        .add(promise)];
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.captureException = function (exception, hint, scope) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            return tslib_1.__generator(this, function (_a) {
	                return [2 /*return*/, this.buffer((function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	                        var event;
	                        return tslib_1.__generator(this, function (_a) {
	                            switch (_a.label) {
	                                case 0: return [4 /*yield*/, this.getBackend().eventFromException(exception, hint)];
	                                case 1:
	                                    event = _a.sent();
	                                    return [2 /*return*/, this.captureEvent(event, hint, scope)];
	                            }
	                        });
	                    }); })())];
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.captureMessage = function (message, level, hint, scope) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            return tslib_1.__generator(this, function (_a) {
	                return [2 /*return*/, this.buffer((function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	                        var event;
	                        return tslib_1.__generator(this, function (_a) {
	                            switch (_a.label) {
	                                case 0: return [4 /*yield*/, this.getBackend().eventFromMessage(message, level, hint)];
	                                case 1:
	                                    event = _a.sent();
	                                    return [2 /*return*/, this.captureEvent(event, hint, scope)];
	                            }
	                        });
	                    }); })())];
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.captureEvent = function (event, hint, scope) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            return tslib_1.__generator(this, function (_a) {
	                // Adding this here is technically not correct since if you call captureMessage/captureException it's already
	                // buffered. But since we not really need the count and we only need to know if the buffer is full or not,
	                // This is fine...
	                return [2 /*return*/, this.buffer((function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	                        var _this = this;
	                        return tslib_1.__generator(this, function (_a) {
	                            return [2 /*return*/, this.processEvent(event, function (finalEvent) { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
	                                    return [2 /*return*/, this.getBackend().sendEvent(finalEvent)];
	                                }); }); }, hint, scope)];
	                        });
	                    }); })())];
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.addBreadcrumb = function (breadcrumb, hint, scope) {
	        var _a = this.getOptions(), beforeBreadcrumb = _a.beforeBreadcrumb, _b = _a.maxBreadcrumbs, maxBreadcrumbs = _b === void 0 ? DEFAULT_BREADCRUMBS : _b;
	        if (maxBreadcrumbs <= 0) {
	            return;
	        }
	        var timestamp = new Date().getTime() / 1000;
	        var mergedBreadcrumb = tslib_1.__assign({ timestamp: timestamp }, breadcrumb);
	        var finalBreadcrumb = beforeBreadcrumb
	            ? misc_1.consoleSandbox(function () { return beforeBreadcrumb(mergedBreadcrumb, hint); })
	            : mergedBreadcrumb;
	        if (finalBreadcrumb === null) {
	            return;
	        }
	        if (this.getBackend().storeBreadcrumb(finalBreadcrumb) && scope) {
	            scope.addBreadcrumb(finalBreadcrumb, Math.min(maxBreadcrumbs, MAX_BREADCRUMBS));
	        }
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.getDsn = function () {
	        return this.dsn;
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.getOptions = function () {
	        return this.options;
	    };
	    /** Returns the current backend. */
	    BaseClient.prototype.getBackend = function () {
	        return this.backend;
	    };
	    /** Determines whether this SDK is enabled and a valid Dsn is present. */
	    BaseClient.prototype.isEnabled = function () {
	        return this.getOptions().enabled !== false && this.dsn !== undefined;
	    };
	    /**
	     * Adds common information to events.
	     *
	     * The information includes release and environment from `options`,
	     * breadcrumbs and context (extra, tags and user) from the scope.
	     *
	     * Information that is already present in the event is never overwritten. For
	     * nested objects, such as the context, keys are merged.
	     *
	     * @param event The original event.
	     * @param hint May contain additional informartion about the original exception.
	     * @param scope A scope containing event metadata.
	     * @returns A new event with more information.
	     */
	    BaseClient.prototype.prepareEvent = function (event, scope, hint) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var _a, environment, _b, maxBreadcrumbs, release, dist, prepared, exception, request;
	            return tslib_1.__generator(this, function (_c) {
	                _a = this.getOptions(), environment = _a.environment, _b = _a.maxBreadcrumbs, maxBreadcrumbs = _b === void 0 ? DEFAULT_BREADCRUMBS : _b, release = _a.release, dist = _a.dist;
	                prepared = tslib_1.__assign({}, event);
	                if (prepared.environment === undefined && environment !== undefined) {
	                    prepared.environment = environment;
	                }
	                if (prepared.release === undefined && release !== undefined) {
	                    prepared.release = release;
	                }
	                if (prepared.dist === undefined && dist !== undefined) {
	                    prepared.dist = dist;
	                }
	                if (prepared.message) {
	                    prepared.message = string_1.truncate(prepared.message, MAX_URL_LENGTH);
	                }
	                exception = prepared.exception && prepared.exception.values && prepared.exception.values[0];
	                if (exception && exception.value) {
	                    exception.value = string_1.truncate(exception.value, MAX_URL_LENGTH);
	                }
	                request = prepared.request;
	                if (request && request.url) {
	                    request.url = string_1.truncate(request.url, MAX_URL_LENGTH);
	                }
	                if (prepared.event_id === undefined) {
	                    prepared.event_id = misc_1.uuid4();
	                }
	                // This should be the last thing called, since we want that
	                // {@link Hub.addEventProcessor} gets the finished prepared event.
	                if (scope) {
	                    return [2 /*return*/, scope.applyToEvent(prepared, hint, Math.min(maxBreadcrumbs, MAX_BREADCRUMBS))];
	                }
	                return [2 /*return*/, prepared];
	            });
	        });
	    };
	    /**
	     * Processes an event (either error or message) and sends it to Sentry.
	     *
	     * This also adds breadcrumbs and context information to the event. However,
	     * platform specific meta data (such as the User's IP address) must be added
	     * by the SDK implementor.
	     *
	     * The returned event status offers clues to whether the event was sent to
	     * Sentry and accepted there. If the {@link Options.shouldSend} hook returns
	     * `false`, the status will be {@link SendStatus.Skipped}. If the rate limit
	     * was exceeded, the status will be {@link SendStatus.RateLimit}.
	     *
	     * @param event The event to send to Sentry.
	     * @param send A function to actually send the event.
	     * @param scope A scope containing event metadata.
	     * @param hint May contain additional informartion about the original exception.
	     * @returns A Promise that resolves with the event status.
	     */
	    BaseClient.prototype.processEvent = function (event, send, hint, scope) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var _a, beforeSend, sampleRate, prepared, finalEvent, isInternalException, exception_1, response;
	            return tslib_1.__generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        if (!this.isEnabled()) {
	                            return [2 /*return*/, {
	                                    status: types_1.Status.Skipped,
	                                }];
	                        }
	                        _a = this.getOptions(), beforeSend = _a.beforeSend, sampleRate = _a.sampleRate;
	                        // 1.0 === 100% events are sent
	                        // 0.0 === 0% events are sent
	                        if (typeof sampleRate === 'number' && Math.random() > sampleRate) {
	                            return [2 /*return*/, {
	                                    status: types_1.Status.Skipped,
	                                }];
	                        }
	                        return [4 /*yield*/, this.prepareEvent(event, scope, hint)];
	                    case 1:
	                        prepared = _b.sent();
	                        if (prepared === null) {
	                            return [2 /*return*/, {
	                                    status: types_1.Status.Skipped,
	                                }];
	                        }
	                        finalEvent = prepared;
	                        _b.label = 2;
	                    case 2:
	                        _b.trys.push([2, 5, , 6]);
	                        isInternalException = hint && hint.data && hint.data.__sentry__ === true;
	                        if (!(!isInternalException && beforeSend)) return [3 /*break*/, 4];
	                        return [4 /*yield*/, beforeSend(prepared, hint)];
	                    case 3:
	                        finalEvent = _b.sent();
	                        if (typeof finalEvent === 'undefined') {
	                            logger_1.logger.error('`beforeSend` method has to return `null` or a valid event');
	                        }
	                        _b.label = 4;
	                    case 4: return [3 /*break*/, 6];
	                    case 5:
	                        exception_1 = _b.sent();
	                        async_1.forget(this.captureException(exception_1, {
	                            data: {
	                                __sentry__: true,
	                            },
	                            originalException: exception_1,
	                        }));
	                        return [2 /*return*/, {
	                                reason: 'Event processing in beforeSend method threw an exception',
	                                status: types_1.Status.Invalid,
	                            }];
	                    case 6:
	                        if (finalEvent === null) {
	                            return [2 /*return*/, {
	                                    reason: 'Event dropped due to being discarded by beforeSend method',
	                                    status: types_1.Status.Skipped,
	                                }];
	                        }
	                        return [4 /*yield*/, send(finalEvent)];
	                    case 7:
	                        response = _b.sent();
	                        response.event = finalEvent;
	                        if (response.status === types_1.Status.RateLimit) {
	                            // TODO: Handle rate limits and maintain a queue. For now, we require SDK
	                            // implementors to override this method and handle it themselves.
	                        }
	                        return [2 /*return*/, response];
	                }
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.close = function (timeout) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            return tslib_1.__generator(this, function (_a) {
	                return [2 /*return*/, this.getBackend()
	                        .getBuffer()
	                        .drain(timeout)];
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.getIntegrations = function () {
	        return this.integrations || {};
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.getIntegration = function (integration) {
	        try {
	            return this.integrations[integration.id] || null;
	        }
	        catch (_oO) {
	            logger_1.logger.warn("Cannot retrieve integration " + integration.id + " from the current Client");
	            return null;
	        }
	    };
	    return BaseClient;
	}());
	exports.BaseClient = BaseClient;
	//# sourceMappingURL=baseclient.js.map

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/** JSDoc */
	var Severity;
	(function (Severity) {
	    /** JSDoc */
	    Severity["Fatal"] = "fatal";
	    /** JSDoc */
	    Severity["Error"] = "error";
	    /** JSDoc */
	    Severity["Warning"] = "warning";
	    /** JSDoc */
	    Severity["Log"] = "log";
	    /** JSDoc */
	    Severity["Info"] = "info";
	    /** JSDoc */
	    Severity["Debug"] = "debug";
	    /** JSDoc */
	    Severity["Critical"] = "critical";
	})(Severity = exports.Severity || (exports.Severity = {}));
	// tslint:disable:no-unnecessary-qualifier no-namespace
	(function (Severity) {
	    /**
	     * Converts a string-based level into a {@link Severity}.
	     *
	     * @param level string representation of Severity
	     * @returns Severity
	     */
	    function fromString(level) {
	        switch (level) {
	            case 'debug':
	                return Severity.Debug;
	            case 'info':
	                return Severity.Info;
	            case 'warn':
	            case 'warning':
	                return Severity.Warning;
	            case 'error':
	                return Severity.Error;
	            case 'fatal':
	                return Severity.Fatal;
	            case 'critical':
	                return Severity.Critical;
	            case 'log':
	            default:
	                return Severity.Log;
	        }
	    }
	    Severity.fromString = fromString;
	})(Severity = exports.Severity || (exports.Severity = {}));
	/** The status of an event. */
	var Status;
	(function (Status) {
	    /** The status could not be determined. */
	    Status["Unknown"] = "unknown";
	    /** The event was skipped due to configuration or callbacks. */
	    Status["Skipped"] = "skipped";
	    /** The event was sent to Sentry successfully. */
	    Status["Success"] = "success";
	    /** The client is currently rate limited and will try again later. */
	    Status["RateLimit"] = "rate_limit";
	    /** The event could not be processed. */
	    Status["Invalid"] = "invalid";
	    /** A server-side error ocurred during submission. */
	    Status["Failed"] = "failed";
	})(Status = exports.Status || (exports.Status = {}));
	// tslint:disable:no-unnecessary-qualifier no-namespace
	(function (Status) {
	    /**
	     * Converts a HTTP status code into a {@link Status}.
	     *
	     * @param code The HTTP response status code.
	     * @returns The send status or {@link Status.Unknown}.
	     */
	    function fromHttpCode(code) {
	        if (code >= 200 && code < 300) {
	            return Status.Success;
	        }
	        if (code === 429) {
	            return Status.RateLimit;
	        }
	        if (code >= 400 && code < 500) {
	            return Status.Invalid;
	        }
	        if (code >= 500) {
	            return Status.Failed;
	        }
	        return Status.Unknown;
	    }
	    Status.fromHttpCode = fromHttpCode;
	})(Status = exports.Status || (exports.Status = {}));
	//# sourceMappingURL=index.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	/**
	 * Consumes the promise and logs the error when it rejects.
	 * @param promise A promise to forget.
	 */
	function forget(promise) {
	    promise.catch(function (e) {
	        // TODO: Use a better logging mechanism
	        console.error(e);
	    });
	}
	exports.forget = forget;
	/**
	 * Helper to filter an array with asynchronous callbacks.
	 *
	 * @param array An array containing items to filter.
	 * @param predicate An async predicate evaluated on every item.
	 * @param thisArg Optional value passed as "this" into the callback.
	 * @returns An array containing only values where the callback returned true.
	 */
	function filterAsync(array, predicate, thisArg) {
	    return tslib_1.__awaiter(this, void 0, void 0, function () {
	        var verdicts;
	        return tslib_1.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0: return [4 /*yield*/, Promise.all(array.map(predicate, thisArg))];
	                case 1:
	                    verdicts = _a.sent();
	                    return [2 /*return*/, array.filter(function (_, index) { return verdicts[index]; })];
	            }
	        });
	    });
	}
	exports.filterAsync = filterAsync;
	//# sourceMappingURL=async.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var is_1 = __webpack_require__(10);
	/**
	 * Encodes given object into url-friendly format
	 *
	 * @param str An object that contains serializable values
	 * @param max Maximum number of characters in truncated string
	 * @returns string Encoded
	 */
	function truncate(str, max) {
	    if (max === void 0) { max = 0; }
	    if (max === 0 || !is_1.isString(str)) {
	        return str;
	    }
	    return str.length <= max ? str : str.substr(0, max) + "\u2026";
	}
	exports.truncate = truncate;
	/**
	 * This is basically just `trim_line` from
	 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
	 *
	 * @param str An object that contains serializable values
	 * @param max Maximum number of characters in truncated string
	 * @returns string Encoded
	 */
	function snipLine(line, colno) {
	    var newLine = line;
	    var ll = newLine.length;
	    if (ll <= 150) {
	        return newLine;
	    }
	    if (colno > ll) {
	        colno = ll; // tslint:disable-line:no-parameter-reassignment
	    }
	    var start = Math.max(colno - 60, 0);
	    if (start < 5) {
	        start = 0;
	    }
	    var end = Math.min(start + 140, ll);
	    if (end > ll - 5) {
	        end = ll;
	    }
	    if (end === ll) {
	        start = Math.max(end - 140, 0);
	    }
	    newLine = newLine.slice(start, end);
	    if (start > 0) {
	        newLine = "'{snip} " + newLine;
	    }
	    if (end < ll) {
	        newLine += ' {snip}';
	    }
	    return newLine;
	}
	exports.snipLine = snipLine;
	/**
	 * Join values in array
	 * @param input array of values to be joined together
	 * @param delimiter string to be placed in-between values
	 * @returns Joined values
	 */
	function safeJoin(input, delimiter) {
	    if (!Array.isArray(input)) {
	        return '';
	    }
	    var output = [];
	    // tslint:disable-next-line
	    for (var i = 0; i < input.length; i++) {
	        var value = input[i];
	        try {
	            output.push(String(value));
	        }
	        catch (e) {
	            output.push('[value cannot be serialized]');
	        }
	    }
	    return output.join(delimiter);
	}
	exports.safeJoin = safeJoin;
	/**
	 * Checks if given value is included in the target
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#Polyfill
	 * @param target source string
	 * @param search string to be looked for
	 * @returns An answer
	 */
	function includes(target, search) {
	    if (search.length > target.length) {
	        return false;
	    }
	    else {
	        return target.indexOf(search) !== -1;
	    }
	}
	exports.includes = includes;
	//# sourceMappingURL=string.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var logger_1 = __webpack_require__(14);
	exports.installedIntegrations = [];
	/** Gets integration to install */
	function getIntegrationsToSetup(options) {
	    var e_1, _a, e_2, _b;
	    var defaultIntegrations = (options.defaultIntegrations && tslib_1.__spread(options.defaultIntegrations)) || [];
	    var userIntegrations = options.integrations;
	    var integrations = [];
	    if (Array.isArray(userIntegrations)) {
	        var userIntegrationsNames = userIntegrations.map(function (i) { return i.name; });
	        var pickedIntegrationsNames = [];
	        try {
	            // Leave only unique default integrations, that were not overridden with provided user integrations
	            for (var defaultIntegrations_1 = tslib_1.__values(defaultIntegrations), defaultIntegrations_1_1 = defaultIntegrations_1.next(); !defaultIntegrations_1_1.done; defaultIntegrations_1_1 = defaultIntegrations_1.next()) {
	                var defaultIntegration = defaultIntegrations_1_1.value;
	                if (userIntegrationsNames.indexOf(getIntegrationName(defaultIntegration)) === -1 &&
	                    pickedIntegrationsNames.indexOf(getIntegrationName(defaultIntegration)) === -1) {
	                    integrations.push(defaultIntegration);
	                    pickedIntegrationsNames.push(getIntegrationName(defaultIntegration));
	                }
	            }
	        }
	        catch (e_1_1) { e_1 = { error: e_1_1 }; }
	        finally {
	            try {
	                if (defaultIntegrations_1_1 && !defaultIntegrations_1_1.done && (_a = defaultIntegrations_1.return)) _a.call(defaultIntegrations_1);
	            }
	            finally { if (e_1) throw e_1.error; }
	        }
	        try {
	            // Don't add same user integration twice
	            for (var userIntegrations_1 = tslib_1.__values(userIntegrations), userIntegrations_1_1 = userIntegrations_1.next(); !userIntegrations_1_1.done; userIntegrations_1_1 = userIntegrations_1.next()) {
	                var userIntegration = userIntegrations_1_1.value;
	                if (pickedIntegrationsNames.indexOf(getIntegrationName(userIntegration)) === -1) {
	                    integrations.push(userIntegration);
	                    pickedIntegrationsNames.push(getIntegrationName(userIntegration));
	                }
	            }
	        }
	        catch (e_2_1) { e_2 = { error: e_2_1 }; }
	        finally {
	            try {
	                if (userIntegrations_1_1 && !userIntegrations_1_1.done && (_b = userIntegrations_1.return)) _b.call(userIntegrations_1);
	            }
	            finally { if (e_2) throw e_2.error; }
	        }
	    }
	    else if (typeof userIntegrations === 'function') {
	        integrations = userIntegrations(defaultIntegrations);
	        integrations = Array.isArray(integrations) ? integrations : [integrations];
	    }
	    else {
	        return tslib_1.__spread(defaultIntegrations);
	    }
	    return integrations;
	}
	exports.getIntegrationsToSetup = getIntegrationsToSetup;
	/** Setup given integration */
	function setupIntegration(integration, options) {
	    if (exports.installedIntegrations.indexOf(getIntegrationName(integration)) !== -1) {
	        return;
	    }
	    try {
	        integration.setupOnce();
	    }
	    catch (_Oo) {
	        /** @deprecated */
	        // TODO: Remove in v5
	        logger_1.logger.warn("Integration " + getIntegrationName(integration) + ": The install method is deprecated. Use \"setupOnce\".");
	        // tslint:disable:deprecation
	        if (integration.install) {
	            integration.install(options);
	        }
	        // tslint:enable:deprecation
	    }
	    exports.installedIntegrations.push(getIntegrationName(integration));
	    logger_1.logger.log("Integration installed: " + getIntegrationName(integration));
	}
	exports.setupIntegration = setupIntegration;
	/**
	 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
	 * integrations are added unless they were already provided before.
	 * @param integrations array of integration instances
	 * @param withDefault should enable default integrations
	 */
	function setupIntegrations(options) {
	    var integrations = {};
	    getIntegrationsToSetup(options).forEach(function (integration) {
	        integrations[getIntegrationName(integration)] = integration;
	        setupIntegration(integration, options);
	    });
	    return integrations;
	}
	exports.setupIntegrations = setupIntegrations;
	/**
	 * Returns the integration static id.
	 * @param integration Integration to retrieve id
	 */
	function getIntegrationName(integration) {
	    /**
	     * @depracted
	     */
	    // tslint:disable-next-line:no-unsafe-any
	    return integration.constructor.id || integration.name;
	}
	//# sourceMappingURL=integration.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var logger_1 = __webpack_require__(14);
	var error_1 = __webpack_require__(17);
	var requestbuffer_1 = __webpack_require__(24);
	/**
	 * This is the base implemention of a Backend.
	 */
	var BaseBackend = /** @class */ (function () {
	    /** Creates a new browser backend instance. */
	    function BaseBackend(options) {
	        /** A simple buffer holding all requests. */
	        this.buffer = new requestbuffer_1.RequestBuffer();
	        this.options = options;
	        if (!this.options.dsn) {
	            logger_1.logger.warn('No DSN provided, backend will not do anything.');
	        }
	    }
	    /**
	     * @inheritDoc
	     */
	    BaseBackend.prototype.eventFromException = function (_exception, _hint) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            return tslib_1.__generator(this, function (_a) {
	                throw new error_1.SentryError('Backend has to implement `eventFromException` method');
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseBackend.prototype.eventFromMessage = function (_message, _level, _hint) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            return tslib_1.__generator(this, function (_a) {
	                throw new error_1.SentryError('Backend has to implement `eventFromMessage` method');
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseBackend.prototype.sendEvent = function (_event) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            return tslib_1.__generator(this, function (_a) {
	                throw new error_1.SentryError('Backend has to implement `sendEvent` method');
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseBackend.prototype.storeBreadcrumb = function (_) {
	        return true;
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseBackend.prototype.storeScope = function (_) {
	        // Noop
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseBackend.prototype.getBuffer = function () {
	        return this.buffer;
	    };
	    return BaseBackend;
	}());
	exports.BaseBackend = BaseBackend;
	//# sourceMappingURL=basebackend.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	/** A simple queue that holds promises. */
	var RequestBuffer = /** @class */ (function () {
	    function RequestBuffer() {
	        /** Internal set of queued Promises */
	        this.buffer = [];
	    }
	    /**
	     * Add a promise to the queue.
	     *
	     * @param task Can be any Promise<T>
	     * @returns The original promise.
	     */
	    RequestBuffer.prototype.add = function (task) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            return tslib_1.__generator(this, function (_a) {
	                if (this.buffer.indexOf(task) === -1) {
	                    this.buffer.push(task);
	                }
	                task.then(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
	                    return [2 /*return*/, this.remove(task)];
	                }); }); }).catch(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
	                    return [2 /*return*/, this.remove(task)];
	                }); }); });
	                return [2 /*return*/, task];
	            });
	        });
	    };
	    /**
	     * Remove a promise to the queue.
	     *
	     * @param task Can be any Promise<T>
	     * @returns Removed promise.
	     */
	    RequestBuffer.prototype.remove = function (task) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var removedTask;
	            return tslib_1.__generator(this, function (_a) {
	                removedTask = this.buffer.splice(this.buffer.indexOf(task), 1)[0];
	                return [2 /*return*/, removedTask];
	            });
	        });
	    };
	    /**
	     * This function returns the number of unresolved promises in the queue.
	     */
	    RequestBuffer.prototype.length = function () {
	        return this.buffer.length;
	    };
	    /**
	     * This will drain the whole queue, returns true if queue is empty or drained.
	     * If timeout is provided and the queue takes longer to drain, the promise still resolves but with false.
	     *
	     * @param timeout Number in ms to wait until it resolves with false.
	     */
	    RequestBuffer.prototype.drain = function (timeout) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            return tslib_1.__generator(this, function (_a) {
	                return [2 /*return*/, new Promise(function (resolve) {
	                        var capturedSetTimeout = setTimeout(function () {
	                            if (timeout && timeout > 0) {
	                                resolve(false);
	                            }
	                        }, timeout);
	                        Promise.all(_this.buffer)
	                            .then(function () {
	                            clearTimeout(capturedSetTimeout);
	                            resolve(true);
	                        })
	                            .catch(function () {
	                            resolve(true);
	                        });
	                    })];
	            });
	        });
	    };
	    return RequestBuffer;
	}());
	exports.RequestBuffer = RequestBuffer;
	//# sourceMappingURL=requestbuffer.js.map

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/** Console logging verbosity for the SDK. */
	var LogLevel;
	(function (LogLevel) {
	    /** No logs will be generated. */
	    LogLevel[LogLevel["None"] = 0] = "None";
	    /** Only SDK internal errors will be logged. */
	    LogLevel[LogLevel["Error"] = 1] = "Error";
	    /** Information useful for debugging the SDK will be logged. */
	    LogLevel[LogLevel["Debug"] = 2] = "Debug";
	    /** All SDK actions will be logged. */
	    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
	})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
	//# sourceMappingURL=interfaces.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var hub_1 = __webpack_require__(6);
	var logger_1 = __webpack_require__(14);
	/**
	 * Internal function to create a new SDK client instance. The client is
	 * installed and then bound to the current scope.
	 *
	 * @param clientClass The client class to instanciate.
	 * @param options Options to pass to the client.
	 * @returns The installed and bound client instance.
	 */
	function initAndBind(clientClass, options) {
	    if (options.debug === true) {
	        logger_1.logger.enable();
	    }
	    if (hub_1.getCurrentHub().getClient()) {
	        return;
	    }
	    var client = new clientClass(options);
	    hub_1.getCurrentHub().bindClient(client);
	    client.install();
	}
	exports.initAndBind = initAndBind;
	//# sourceMappingURL=sdk.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var dedupe_1 = __webpack_require__(28);
	exports.Dedupe = dedupe_1.Dedupe;
	var functiontostring_1 = __webpack_require__(29);
	exports.FunctionToString = functiontostring_1.FunctionToString;
	var sdkinformation_1 = __webpack_require__(30);
	exports.SDKInformation = sdkinformation_1.SDKInformation;
	var inboundfilters_1 = __webpack_require__(31);
	exports.InboundFilters = inboundfilters_1.InboundFilters;
	var debug_1 = __webpack_require__(32);
	exports.Debug = debug_1.Debug;
	var rewriteframes_1 = __webpack_require__(33);
	exports.RewriteFrames = rewriteframes_1.RewriteFrames;
	//# sourceMappingURL=index.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var hub_1 = __webpack_require__(6);
	var logger_1 = __webpack_require__(14);
	var misc_1 = __webpack_require__(8);
	/** Deduplication filter */
	var Dedupe = /** @class */ (function () {
	    function Dedupe() {
	        /**
	         * @inheritDoc
	         */
	        this.name = Dedupe.id;
	    }
	    /**
	     * @inheritDoc
	     */
	    Dedupe.prototype.setupOnce = function () {
	        var _this = this;
	        hub_1.addGlobalEventProcessor(function (currentEvent) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            var self;
	            return tslib_1.__generator(this, function (_a) {
	                self = hub_1.getCurrentHub().getIntegration(Dedupe);
	                if (self) {
	                    // Juuust in case something goes wrong
	                    try {
	                        if (self.shouldDropEvent(currentEvent, self.previousEvent)) {
	                            return [2 /*return*/, null];
	                        }
	                    }
	                    catch (_oO) {
	                        return [2 /*return*/, (self.previousEvent = currentEvent)];
	                    }
	                    return [2 /*return*/, (self.previousEvent = currentEvent)];
	                }
	                return [2 /*return*/, currentEvent];
	            });
	        }); });
	    };
	    /** JSDoc */
	    Dedupe.prototype.shouldDropEvent = function (currentEvent, previousEvent) {
	        if (!previousEvent) {
	            return false;
	        }
	        if (this.isSameMessageEvent(currentEvent, previousEvent)) {
	            logger_1.logger.warn("Event dropped due to being a duplicate of previous event (same message).\nEvent: " + misc_1.getEventDescription(currentEvent));
	            return true;
	        }
	        if (this.isSameExceptionEvent(currentEvent, previousEvent)) {
	            logger_1.logger.warn("Event dropped due to being a duplicate of previous event (same exception).\nEvent: " + misc_1.getEventDescription(currentEvent));
	            return true;
	        }
	        return false;
	    };
	    /** JSDoc */
	    Dedupe.prototype.isSameMessageEvent = function (currentEvent, previousEvent) {
	        var currentMessage = currentEvent.message;
	        var previousMessage = previousEvent.message;
	        // If no event has a message, they were both exceptions, so bail out
	        if (!currentMessage && !previousMessage) {
	            return false;
	        }
	        // If only one event has a stacktrace, but not the other one, they are not the same
	        if ((currentMessage && !previousMessage) || (!currentMessage && previousMessage)) {
	            return false;
	        }
	        if (currentMessage !== previousMessage) {
	            return false;
	        }
	        if (!this.isSameFingerprint(currentEvent, previousEvent)) {
	            return false;
	        }
	        if (!this.isSameStacktrace(currentEvent, previousEvent)) {
	            return false;
	        }
	        return true;
	    };
	    /** JSDoc */
	    Dedupe.prototype.getFramesFromEvent = function (event) {
	        var exception = event.exception;
	        if (exception) {
	            try {
	                // @ts-ignore
	                return exception.values[0].stacktrace.frames;
	            }
	            catch (_oO) {
	                return undefined;
	            }
	        }
	        else if (event.stacktrace) {
	            return event.stacktrace.frames;
	        }
	        else {
	            return undefined;
	        }
	    };
	    /** JSDoc */
	    Dedupe.prototype.isSameStacktrace = function (currentEvent, previousEvent) {
	        var currentFrames = this.getFramesFromEvent(currentEvent);
	        var previousFrames = this.getFramesFromEvent(previousEvent);
	        // If no event has a fingerprint, they are assumed to be the same
	        if (!currentFrames && !previousFrames) {
	            return true;
	        }
	        // If only one event has a stacktrace, but not the other one, they are not the same
	        if ((currentFrames && !previousFrames) || (!currentFrames && previousFrames)) {
	            return false;
	        }
	        currentFrames = currentFrames;
	        previousFrames = previousFrames;
	        // If number of frames differ, they are not the same
	        if (previousFrames.length !== currentFrames.length) {
	            return false;
	        }
	        // Otherwise, compare the two
	        for (var i = 0; i < previousFrames.length; i++) {
	            var frameA = previousFrames[i];
	            var frameB = currentFrames[i];
	            if (frameA.filename !== frameB.filename ||
	                frameA.lineno !== frameB.lineno ||
	                frameA.colno !== frameB.colno ||
	                frameA.function !== frameB.function) {
	                return false;
	            }
	        }
	        return true;
	    };
	    /** JSDoc */
	    Dedupe.prototype.getExceptionFromEvent = function (event) {
	        return event.exception && event.exception.values && event.exception.values[0];
	    };
	    /** JSDoc */
	    Dedupe.prototype.isSameExceptionEvent = function (currentEvent, previousEvent) {
	        var previousException = this.getExceptionFromEvent(previousEvent);
	        var currentException = this.getExceptionFromEvent(currentEvent);
	        if (!previousException || !currentException) {
	            return false;
	        }
	        if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
	            return false;
	        }
	        if (!this.isSameFingerprint(currentEvent, previousEvent)) {
	            return false;
	        }
	        if (!this.isSameStacktrace(currentEvent, previousEvent)) {
	            return false;
	        }
	        return true;
	    };
	    /** JSDoc */
	    Dedupe.prototype.isSameFingerprint = function (currentEvent, previousEvent) {
	        var currentFingerprint = currentEvent.fingerprint;
	        var previousFingerprint = previousEvent.fingerprint;
	        // If no event has a fingerprint, they are assumed to be the same
	        if (!currentFingerprint && !previousFingerprint) {
	            return true;
	        }
	        // If only one event has a fingerprint, but not the other one, they are not the same
	        if ((currentFingerprint && !previousFingerprint) || (!currentFingerprint && previousFingerprint)) {
	            return false;
	        }
	        currentFingerprint = currentFingerprint;
	        previousFingerprint = previousFingerprint;
	        // Otherwise, compare the two
	        try {
	            return !!(currentFingerprint.join('') === previousFingerprint.join(''));
	        }
	        catch (_oO) {
	            return false;
	        }
	    };
	    /**
	     * @inheritDoc
	     */
	    Dedupe.id = 'Dedupe';
	    return Dedupe;
	}());
	exports.Dedupe = Dedupe;
	//# sourceMappingURL=dedupe.js.map

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var originalFunctionToString;
	/** Patch toString calls to return proper name for wrapped functions */
	var FunctionToString = /** @class */ (function () {
	    function FunctionToString() {
	        /**
	         * @inheritDoc
	         */
	        this.name = FunctionToString.id;
	    }
	    /**
	     * @inheritDoc
	     */
	    FunctionToString.prototype.setupOnce = function () {
	        originalFunctionToString = Function.prototype.toString;
	        Function.prototype.toString = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            var context = this.__sentry__ ? this.__sentry_original__ : this;
	            // tslint:disable-next-line:no-unsafe-any
	            return originalFunctionToString.apply(context, args);
	        };
	    };
	    /**
	     * @inheritDoc
	     */
	    FunctionToString.id = 'FunctionToString';
	    return FunctionToString;
	}());
	exports.FunctionToString = FunctionToString;
	//# sourceMappingURL=functiontostring.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var logger_1 = __webpack_require__(14);
	/**
	 * @deprecated
	 * This file can be safely removed in the next major bump
	 */
	/** Adds SDK info to an event. */
	var SDKInformation = /** @class */ (function () {
	    function SDKInformation() {
	        /**
	         * @inheritDoc
	         */
	        this.name = 'SDKInformation';
	    }
	    /**
	     * @inheritDoc
	     */
	    SDKInformation.prototype.setupOnce = function () {
	        logger_1.logger.warn("SDKInformation Integration is deprecated and can be safely removed. It's functionality has been merged into the SDK's core.");
	    };
	    return SDKInformation;
	}());
	exports.SDKInformation = SDKInformation;
	//# sourceMappingURL=sdkinformation.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var hub_1 = __webpack_require__(6);
	var is_1 = __webpack_require__(10);
	var logger_1 = __webpack_require__(14);
	var misc_1 = __webpack_require__(8);
	var string_1 = __webpack_require__(21);
	// "Script error." is hard coded into browsers for errors that it can't read.
	// this is the result of a script being pulled in from an external domain and CORS.
	var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
	/** Inbound filters configurable by the user */
	var InboundFilters = /** @class */ (function () {
	    function InboundFilters(options) {
	        if (options === void 0) { options = {}; }
	        this.options = options;
	        /**
	         * @inheritDoc
	         */
	        this.name = InboundFilters.id;
	    }
	    /**
	     * @inheritDoc
	     */
	    InboundFilters.prototype.setupOnce = function () {
	        var _this = this;
	        hub_1.addGlobalEventProcessor(function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            var hub, self, client, clientOptions, options;
	            return tslib_1.__generator(this, function (_a) {
	                hub = hub_1.getCurrentHub();
	                if (!hub) {
	                    return [2 /*return*/, event];
	                }
	                self = hub.getIntegration(InboundFilters);
	                if (self) {
	                    client = hub.getClient();
	                    clientOptions = client ? client.getOptions() : {};
	                    options = self.mergeOptions(clientOptions);
	                    if (self.shouldDropEvent(event, options)) {
	                        return [2 /*return*/, null];
	                    }
	                }
	                return [2 /*return*/, event];
	            });
	        }); });
	    };
	    /** JSDoc */
	    InboundFilters.prototype.shouldDropEvent = function (event, options) {
	        if (this.isSentryError(event, options)) {
	            logger_1.logger.warn("Event dropped due to being internal Sentry Error.\nEvent: " + misc_1.getEventDescription(event));
	            return true;
	        }
	        if (this.isIgnoredError(event, options)) {
	            logger_1.logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + misc_1.getEventDescription(event));
	            return true;
	        }
	        if (this.isBlacklistedUrl(event, options)) {
	            logger_1.logger.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + misc_1.getEventDescription(event) + ".\nUrl: " + this.getEventFilterUrl(event));
	            return true;
	        }
	        if (!this.isWhitelistedUrl(event, options)) {
	            logger_1.logger.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + misc_1.getEventDescription(event) + ".\nUrl: " + this.getEventFilterUrl(event));
	            return true;
	        }
	        return false;
	    };
	    /** JSDoc */
	    InboundFilters.prototype.isSentryError = function (event, options) {
	        if (options === void 0) { options = {}; }
	        if (!options.ignoreInternal) {
	            return false;
	        }
	        try {
	            // tslint:disable-next-line:no-unsafe-any
	            return event.exception.values[0].type === 'SentryError';
	        }
	        catch (_oO) {
	            return false;
	        }
	    };
	    /** JSDoc */
	    InboundFilters.prototype.isIgnoredError = function (event, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        if (!options.ignoreErrors || !options.ignoreErrors.length) {
	            return false;
	        }
	        return this.getPossibleEventMessages(event).some(function (message) {
	            // Not sure why TypeScript complains here...
	            return options.ignoreErrors.some(function (pattern) { return _this.isMatchingPattern(message, pattern); });
	        });
	    };
	    /** JSDoc */
	    InboundFilters.prototype.isBlacklistedUrl = function (event, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        // TODO: Use Glob instead?
	        if (!options.blacklistUrls || !options.blacklistUrls.length) {
	            return false;
	        }
	        var url = this.getEventFilterUrl(event);
	        return !url ? false : options.blacklistUrls.some(function (pattern) { return _this.isMatchingPattern(url, pattern); });
	    };
	    /** JSDoc */
	    InboundFilters.prototype.isWhitelistedUrl = function (event, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        // TODO: Use Glob instead?
	        if (!options.whitelistUrls || !options.whitelistUrls.length) {
	            return true;
	        }
	        var url = this.getEventFilterUrl(event);
	        return !url ? true : options.whitelistUrls.some(function (pattern) { return _this.isMatchingPattern(url, pattern); });
	    };
	    /** JSDoc */
	    InboundFilters.prototype.mergeOptions = function (clientOptions) {
	        if (clientOptions === void 0) { clientOptions = {}; }
	        return {
	            blacklistUrls: tslib_1.__spread((this.options.blacklistUrls || []), (clientOptions.blacklistUrls || [])),
	            ignoreErrors: tslib_1.__spread((this.options.ignoreErrors || []), (clientOptions.ignoreErrors || []), DEFAULT_IGNORE_ERRORS),
	            ignoreInternal: typeof this.options.ignoreInternal !== 'undefined' ? this.options.ignoreInternal : true,
	            whitelistUrls: tslib_1.__spread((this.options.whitelistUrls || []), (clientOptions.whitelistUrls || [])),
	        };
	    };
	    /** JSDoc */
	    InboundFilters.prototype.isMatchingPattern = function (value, pattern) {
	        if (is_1.isRegExp(pattern)) {
	            return pattern.test(value);
	        }
	        else if (typeof pattern === 'string') {
	            return string_1.includes(value, pattern);
	        }
	        else {
	            return false;
	        }
	    };
	    /** JSDoc */
	    InboundFilters.prototype.getPossibleEventMessages = function (event) {
	        if (event.message) {
	            return [event.message];
	        }
	        else if (event.exception) {
	            try {
	                // tslint:disable-next-line:no-unsafe-any
	                var _a = event.exception.values[0], type = _a.type, value = _a.value;
	                return ["" + value, type + ": " + value];
	            }
	            catch (oO) {
	                logger_1.logger.error("Cannot extract message for event " + misc_1.getEventDescription(event));
	                return [];
	            }
	        }
	        else {
	            return [];
	        }
	    };
	    /** JSDoc */
	    InboundFilters.prototype.getEventFilterUrl = function (event) {
	        try {
	            if (event.stacktrace) {
	                // tslint:disable-next-line:no-unsafe-any
	                return event.stacktrace.frames[0].filename;
	            }
	            else if (event.exception) {
	                // tslint:disable-next-line:no-unsafe-any
	                return event.exception.values[0].stacktrace.frames[0].filename;
	            }
	            else {
	                return null;
	            }
	        }
	        catch (oO) {
	            logger_1.logger.error("Cannot extract url for event " + misc_1.getEventDescription(event));
	            return null;
	        }
	    };
	    /**
	     * @inheritDoc
	     */
	    InboundFilters.id = 'InboundFilters';
	    return InboundFilters;
	}());
	exports.InboundFilters = InboundFilters;
	//# sourceMappingURL=inboundfilters.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var hub_1 = __webpack_require__(6);
	/** JSDoc */
	var Debug = /** @class */ (function () {
	    /**
	     * @inheritDoc
	     */
	    function Debug(options) {
	        /**
	         * @inheritDoc
	         */
	        this.name = Debug.id;
	        this.options = tslib_1.__assign({ debugger: false, stringify: false }, options);
	    }
	    /**
	     * @inheritDoc
	     */
	    Debug.prototype.setupOnce = function () {
	        var _this = this;
	        hub_1.addGlobalEventProcessor(function (event, hint) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            var self;
	            return tslib_1.__generator(this, function (_a) {
	                self = hub_1.getCurrentHub().getIntegration(Debug);
	                if (self) {
	                    // tslint:disable:no-console
	                    // tslint:disable:no-debugger
	                    if (self.options.debugger) {
	                        debugger;
	                    }
	                    if (self.options.stringify) {
	                        console.log(JSON.stringify(event, null, 2));
	                        if (hint) {
	                            console.log(JSON.stringify(hint, null, 2));
	                        }
	                    }
	                    else {
	                        console.log(event);
	                        if (hint) {
	                            console.log(hint);
	                        }
	                    }
	                }
	                return [2 /*return*/, event];
	            });
	        }); });
	    };
	    /**
	     * @inheritDoc
	     */
	    Debug.id = 'Debug';
	    return Debug;
	}());
	exports.Debug = Debug;
	//# sourceMappingURL=debug.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(5);
	var hub_1 = __webpack_require__(6);
	var path_1 = __webpack_require__(34);
	/** Rewrite event frames paths */
	var RewriteFrames = /** @class */ (function () {
	    /**
	     * @inheritDoc
	     */
	    function RewriteFrames(options) {
	        if (options === void 0) { options = {}; }
	        var _this = this;
	        /**
	         * @inheritDoc
	         */
	        this.name = RewriteFrames.id;
	        /**
	         * @inheritDoc
	         */
	        this.iteratee = function (frame) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            var base;
	            return tslib_1.__generator(this, function (_a) {
	                if (frame.filename && frame.filename.startsWith('/')) {
	                    base = this.root ? path_1.relative(this.root, frame.filename) : path_1.basename(frame.filename);
	                    frame.filename = "app:///" + base;
	                }
	                return [2 /*return*/, frame];
	            });
	        }); };
	        if (options.root) {
	            this.root = options.root;
	        }
	        if (options.iteratee) {
	            this.iteratee = options.iteratee;
	        }
	    }
	    /**
	     * @inheritDoc
	     */
	    RewriteFrames.prototype.setupOnce = function () {
	        var _this = this;
	        hub_1.addGlobalEventProcessor(function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            var self;
	            return tslib_1.__generator(this, function (_a) {
	                self = hub_1.getCurrentHub().getIntegration(RewriteFrames);
	                if (self) {
	                    return [2 /*return*/, self.process(event)];
	                }
	                return [2 /*return*/, event];
	            });
	        }); });
	    };
	    /** JSDoc */
	    RewriteFrames.prototype.process = function (event) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var frames, _a, _b, _i, i, _c, _d;
	            return tslib_1.__generator(this, function (_e) {
	                switch (_e.label) {
	                    case 0:
	                        frames = this.getFramesFromEvent(event);
	                        if (!frames) return [3 /*break*/, 4];
	                        _a = [];
	                        for (_b in frames)
	                            _a.push(_b);
	                        _i = 0;
	                        _e.label = 1;
	                    case 1:
	                        if (!(_i < _a.length)) return [3 /*break*/, 4];
	                        i = _a[_i];
	                        // tslint:disable-next-line
	                        _c = frames;
	                        _d = i;
	                        return [4 /*yield*/, this.iteratee(frames[i])];
	                    case 2:
	                        // tslint:disable-next-line
	                        _c[_d] = _e.sent();
	                        _e.label = 3;
	                    case 3:
	                        _i++;
	                        return [3 /*break*/, 1];
	                    case 4: return [2 /*return*/, event];
	                }
	            });
	        });
	    };
	    /** JSDoc */
	    RewriteFrames.prototype.getFramesFromEvent = function (event) {
	        var exception = event.exception;
	        if (exception) {
	            try {
	                // tslint:disable-next-line:no-unsafe-any
	                return exception.values[0].stacktrace.frames;
	            }
	            catch (_oO) {
	                return undefined;
	            }
	        }
	        else if (event.stacktrace) {
	            return event.stacktrace.frames;
	        }
	        else {
	            return undefined;
	        }
	    };
	    /**
	     * @inheritDoc
	     */
	    RewriteFrames.id = 'RewriteFrames';
	    return RewriteFrames;
	}());
	exports.RewriteFrames = RewriteFrames;
	//# sourceMappingURL=rewriteframes.js.map

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	// Slightly modified (no IE8 support, ES6) and transcribed to TypeScript
	// https://raw.githubusercontent.com/calvinmetcalf/rollup-plugin-node-builtins/master/src/es6/path.js
	Object.defineProperty(exports, "__esModule", { value: true });
	/** JSDoc */
	function normalizeArray(parts, allowAboveRoot) {
	    // if the path tries to go above the root, `up` ends up > 0
	    var up = 0;
	    for (var i = parts.length - 1; i >= 0; i--) {
	        var last = parts[i];
	        if (last === '.') {
	            parts.splice(i, 1);
	        }
	        else if (last === '..') {
	            parts.splice(i, 1);
	            up++;
	        }
	        else if (up) {
	            parts.splice(i, 1);
	            up--;
	        }
	    }
	    // if the path is allowed to go above the root, restore leading ..s
	    if (allowAboveRoot) {
	        for (; up--; up) {
	            parts.unshift('..');
	        }
	    }
	    return parts;
	}
	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	/** JSDoc */
	function splitPath(filename) {
	    var parts = splitPathRe.exec(filename);
	    return parts ? parts.slice(1) : [];
	}
	// path.resolve([from ...], to)
	// posix version
	/** JSDoc */
	function resolve() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i] = arguments[_i];
	    }
	    var resolvedPath = '';
	    var resolvedAbsolute = false;
	    for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	        var path = i >= 0 ? args[i] : '/';
	        // Skip empty entries
	        if (!path) {
	            continue;
	        }
	        resolvedPath = path + "/" + resolvedPath;
	        resolvedAbsolute = path.charAt(0) === '/';
	    }
	    // At this point the path should be resolved to a full absolute path, but
	    // handle relative paths to be safe (might happen when process.cwd() fails)
	    // Normalize the path
	    resolvedPath = normalizeArray(resolvedPath.split('/').filter(function (p) { return !!p; }), !resolvedAbsolute).join('/');
	    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
	}
	exports.resolve = resolve;
	/** JSDoc */
	function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	        if (arr[start] !== '') {
	            break;
	        }
	    }
	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	        if (arr[end] !== '') {
	            break;
	        }
	    }
	    if (start > end) {
	        return [];
	    }
	    return arr.slice(start, end - start + 1);
	}
	// path.relative(from, to)
	// posix version
	/** JSDoc */
	function relative(from, to) {
	    // tslint:disable:no-parameter-reassignment
	    from = resolve(from).substr(1);
	    to = resolve(to).substr(1);
	    var fromParts = trim(from.split('/'));
	    var toParts = trim(to.split('/'));
	    var length = Math.min(fromParts.length, toParts.length);
	    var samePartsLength = length;
	    for (var i = 0; i < length; i++) {
	        if (fromParts[i] !== toParts[i]) {
	            samePartsLength = i;
	            break;
	        }
	    }
	    var outputParts = [];
	    for (var i = samePartsLength; i < fromParts.length; i++) {
	        outputParts.push('..');
	    }
	    outputParts = outputParts.concat(toParts.slice(samePartsLength));
	    return outputParts.join('/');
	}
	exports.relative = relative;
	// path.normalize(path)
	// posix version
	/** JSDoc */
	function normalize(path) {
	    var isPathAbsolute = isAbsolute(path);
	    var trailingSlash = path.substr(-1) === '/';
	    // Normalize the path
	    var normalizedPath = normalizeArray(path.split('/').filter(function (p) { return !!p; }), !isPathAbsolute).join('/');
	    if (!normalizedPath && !isPathAbsolute) {
	        normalizedPath = '.';
	    }
	    if (normalizedPath && trailingSlash) {
	        normalizedPath += '/';
	    }
	    return (isPathAbsolute ? '/' : '') + normalizedPath;
	}
	exports.normalize = normalize;
	// posix version
	/** JSDoc */
	function isAbsolute(path) {
	    return path.charAt(0) === '/';
	}
	exports.isAbsolute = isAbsolute;
	// posix version
	/** JSDoc */
	function join() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i] = arguments[_i];
	    }
	    return normalize(args.join('/'));
	}
	exports.join = join;
	/** JSDoc */
	function dirname(path) {
	    var result = splitPath(path);
	    var root = result[0];
	    var dir = result[1];
	    if (!root && !dir) {
	        // No dirname whatsoever
	        return '.';
	    }
	    if (dir) {
	        // It has a dirname, strip trailing slash
	        dir = dir.substr(0, dir.length - 1);
	    }
	    return root + dir;
	}
	exports.dirname = dirname;
	/** JSDoc */
	function basename(path, ext) {
	    var f = splitPath(path)[2];
	    if (ext && f.substr(ext.length * -1) === ext) {
	        f = f.substr(0, f.length - ext.length);
	    }
	    return f;
	}
	exports.basename = basename;
	//# sourceMappingURL=path.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.exceptionFromStacktrace = exceptionFromStacktrace;
	exports.eventFromPlainObject = eventFromPlainObject;
	exports.eventFromStacktrace = eventFromStacktrace;
	exports.prepareFramesForEvent = prepareFramesForEvent;

	var _object = __webpack_require__(11);

	var _string = __webpack_require__(21);

	var _md = __webpack_require__(36);

	var _tracekit = __webpack_require__(37);

	const STACKTRACE_LIMIT = 50;
	/** JSDoc */

	function exceptionFromStacktrace(stacktrace) {
	  const frames = prepareFramesForEvent(stacktrace.stack);
	  const exception = {
	    stacktrace: {
	      frames
	    },
	    type: stacktrace.name,
	    value: stacktrace.message
	  }; // tslint:disable-next-line:strict-type-predicates

	  if (exception.type === undefined && exception.value === '') {
	    exception.value = 'Unrecoverable error caught';
	  }

	  return exception;
	}
	/** JSDoc */


	function eventFromPlainObject(exception, syntheticException) {
	  const exceptionKeys = Object.keys(exception).sort();
	  const event = {
	    extra: {
	      __serialized__: (0, _object.limitObjectDepthToSize)(exception)
	    },
	    fingerprint: [(0, _md.md5)(exceptionKeys.join(''))],
	    message: `Non-Error exception captured with keys: ${(0, _object.serializeKeysToEventMessage)(exceptionKeys)}`
	  };

	  if (syntheticException) {
	    const stacktrace = (0, _tracekit.computeStackTrace)(syntheticException);
	    const frames = prepareFramesForEvent(stacktrace.stack);
	    event.stacktrace = {
	      frames
	    };
	  }

	  return event;
	}
	/** JSDoc */


	function eventFromStacktrace(stacktrace) {
	  const exception = exceptionFromStacktrace(stacktrace);
	  return {
	    exception: {
	      values: [exception]
	    }
	  };
	}
	/** JSDoc */


	function prepareFramesForEvent(stack) {
	  if (!stack || !stack.length) {
	    return [];
	  }

	  let localStack = stack;
	  const firstFrameFunction = localStack[0].func || '';
	  const lastFrameFunction = localStack[localStack.length - 1].func || ''; // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)

	  if ((0, _string.includes)(firstFrameFunction, 'captureMessage') || (0, _string.includes)(firstFrameFunction, 'captureException')) {
	    localStack = localStack.slice(1);
	  } // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)


	  if ((0, _string.includes)(lastFrameFunction, 'sentryWrapped')) {
	    localStack = localStack.slice(0, -1);
	  } // The frame where the crash happened, should be the last entry in the array


	  return localStack.map(frame => ({
	    colno: frame.column,
	    filename: frame.url || localStack[0].url,
	    function: frame.func || '?',
	    in_app: true,
	    lineno: frame.line
	  })).slice(0, STACKTRACE_LIMIT).reverse();
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	/*
	 * JavaScript MD5
	 * https://github.com/blueimp/JavaScript-MD5
	 *
	 * Copyright 2011, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Licensed under the MIT license:
	 * https://opensource.org/licenses/MIT
	 *
	 * Based on
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */

	/* global define */
	(function ($) {
	  'use strict';
	  /*
	  * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	  * to work around bugs in some JS interpreters.
	  */

	  function safeAdd(x, y) {
	    var lsw = (x & 0xffff) + (y & 0xffff);
	    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	    return msw << 16 | lsw & 0xffff;
	  }
	  /*
	  * Bitwise rotate a 32-bit number to the left.
	  */


	  function bitRotateLeft(num, cnt) {
	    return num << cnt | num >>> 32 - cnt;
	  }
	  /*
	  * These functions implement the four basic operations the algorithm uses.
	  */


	  function md5cmn(q, a, b, x, s, t) {
	    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
	  }

	  function md5ff(a, b, c, d, x, s, t) {
	    return md5cmn(b & c | ~b & d, a, b, x, s, t);
	  }

	  function md5gg(a, b, c, d, x, s, t) {
	    return md5cmn(b & d | c & ~d, a, b, x, s, t);
	  }

	  function md5hh(a, b, c, d, x, s, t) {
	    return md5cmn(b ^ c ^ d, a, b, x, s, t);
	  }

	  function md5ii(a, b, c, d, x, s, t) {
	    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
	  }
	  /*
	  * Calculate the MD5 of an array of little-endian words, and a bit length.
	  */


	  function binlMD5(x, len) {
	    /* append padding */
	    x[len >> 5] |= 0x80 << len % 32;
	    x[(len + 64 >>> 9 << 4) + 14] = len;
	    var i;
	    var olda;
	    var oldb;
	    var oldc;
	    var oldd;
	    var a = 1732584193;
	    var b = -271733879;
	    var c = -1732584194;
	    var d = 271733878;

	    for (i = 0; i < x.length; i += 16) {
	      olda = a;
	      oldb = b;
	      oldc = c;
	      oldd = d;
	      a = md5ff(a, b, c, d, x[i], 7, -680876936);
	      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
	      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
	      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
	      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
	      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
	      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
	      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
	      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
	      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
	      c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
	      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
	      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
	      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
	      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
	      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
	      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
	      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
	      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
	      b = md5gg(b, c, d, a, x[i], 20, -373897302);
	      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
	      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
	      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
	      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
	      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
	      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
	      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
	      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
	      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
	      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
	      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
	      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
	      a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
	      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
	      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
	      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
	      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
	      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
	      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
	      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
	      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
	      d = md5hh(d, a, b, c, x[i], 11, -358537222);
	      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
	      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
	      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
	      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
	      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
	      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
	      a = md5ii(a, b, c, d, x[i], 6, -198630844);
	      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
	      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
	      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
	      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
	      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
	      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
	      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
	      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
	      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
	      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
	      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
	      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
	      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
	      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
	      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
	      a = safeAdd(a, olda);
	      b = safeAdd(b, oldb);
	      c = safeAdd(c, oldc);
	      d = safeAdd(d, oldd);
	    }

	    return [a, b, c, d];
	  }
	  /*
	  * Convert an array of little-endian words to a string
	  */


	  function binl2rstr(input) {
	    var i;
	    var output = '';
	    var length32 = input.length * 32;

	    for (i = 0; i < length32; i += 8) {
	      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
	    }

	    return output;
	  }
	  /*
	  * Convert a raw string to an array of little-endian words
	  * Characters >255 have their high-byte silently ignored.
	  */


	  function rstr2binl(input) {
	    var i;
	    var output = [];
	    output[(input.length >> 2) - 1] = undefined;

	    for (i = 0; i < output.length; i += 1) {
	      output[i] = 0;
	    }

	    var length8 = input.length * 8;

	    for (i = 0; i < length8; i += 8) {
	      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
	    }

	    return output;
	  }
	  /*
	  * Calculate the MD5 of a raw string
	  */


	  function rstrMD5(s) {
	    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
	  }
	  /*
	  * Calculate the HMAC-MD5, of a key and some data (raw strings)
	  */


	  function rstrHMACMD5(key, data) {
	    var i;
	    var bkey = rstr2binl(key);
	    var ipad = [];
	    var opad = [];
	    var hash;
	    ipad[15] = opad[15] = undefined;

	    if (bkey.length > 16) {
	      bkey = binlMD5(bkey, key.length * 8);
	    }

	    for (i = 0; i < 16; i += 1) {
	      ipad[i] = bkey[i] ^ 0x36363636;
	      opad[i] = bkey[i] ^ 0x5c5c5c5c;
	    }

	    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
	    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
	  }
	  /*
	  * Convert a raw string to a hex string
	  */


	  function rstr2hex(input) {
	    var hexTab = '0123456789abcdef';
	    var output = '';
	    var x;
	    var i;

	    for (i = 0; i < input.length; i += 1) {
	      x = input.charCodeAt(i);
	      output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);
	    }

	    return output;
	  }
	  /*
	  * Encode a string as utf-8
	  */


	  function str2rstrUTF8(input) {
	    return unescape(encodeURIComponent(input));
	  }
	  /*
	  * Take string arguments and return either raw or hex encoded strings
	  */


	  function rawMD5(s) {
	    return rstrMD5(str2rstrUTF8(s));
	  }

	  function hexMD5(s) {
	    return rstr2hex(rawMD5(s));
	  }

	  function rawHMACMD5(k, d) {
	    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
	  }

	  function hexHMACMD5(k, d) {
	    return rstr2hex(rawHMACMD5(k, d));
	  }

	  function md5(string, key, raw) {
	    if (!key) {
	      if (!raw) {
	        return hexMD5(string);
	      }

	      return rawMD5(string);
	    }

	    if (!raw) {
	      return hexHMACMD5(key, string);
	    }

	    return rawHMACMD5(key, string);
	  }

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return md5;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    module.exports = md5;
	  } else {
	    $.md5 = md5;
	  }
	})(void 0);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.computeStackTrace = exports.installGlobalUnhandledRejectionHandler = exports.installGlobalHandler = exports.subscribe = exports.report = void 0;

	var _is = __webpack_require__(10);

	var _misc = __webpack_require__(8);

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var window = (0, _misc.getGlobalObject)();
	var TraceKit = {
	  wrap: () => () => {},
	  report: false,
	  collectWindowErrors: false,
	  computeStackTrace: false,
	  remoteFetching: false,
	  linesOfContext: false,
	  extendToAsynchronousCallbacks: false
	};
	var _slice = [].slice;
	var UNKNOWN_FUNCTION = '?';
	var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

	function _has(object, key) {
	  return Object.prototype.hasOwnProperty.call(object, key);
	}

	function getLocationHref() {
	  if (typeof document === 'undefined' || document.location == null) return '';
	  return document.location.href;
	}

	function getLocationOrigin() {
	  if (typeof document === 'undefined' || document.location == null) return '';

	  if (!document.location.origin) {
	    return document.location.protocol + '//' + document.location.hostname + (document.location.port ? ':' + document.location.port : '');
	  }

	  return document.location.origin;
	}

	TraceKit.wrap = function traceKitWrapper(func) {
	  function wrapped() {
	    try {
	      // @ts-ignore
	      return func.apply(this, arguments);
	    } catch (e) {
	      TraceKit.report(e);
	      throw e;
	    }
	  }

	  return wrapped;
	};

	TraceKit.report = function reportModuleWrapper() {
	  var handlers = [],
	      lastException = null,
	      lastExceptionStack = null;

	  function subscribe(handler) {
	    handlers.push(handler);
	  }

	  function unsubscribe(handler) {
	    for (var i = handlers.length - 1; i >= 0; --i) {
	      if (handlers[i] === handler) {
	        handlers.splice(i, 1);
	      }
	    }

	    if (handlers.length === 0) {
	      uninstallGlobalHandler();
	      uninstallGlobalUnhandledRejectionHandler();
	    }
	  }

	  function notifyHandlers(stack, isWindowError, error) {
	    var exception = null;

	    if (isWindowError && !TraceKit.collectWindowErrors) {
	      return;
	    }

	    for (var i in handlers) {
	      if (_has(handlers, i)) {
	        try {
	          handlers[i](stack, isWindowError, error);
	        } catch (inner) {
	          exception = inner;
	        }
	      }
	    }

	    if (exception) {
	      throw exception;
	    }
	  }

	  var _oldOnerrorHandler, _onErrorHandlerInstalled;

	  var _oldOnunhandledrejectionHandler, _onUnhandledRejectionHandlerInstalled;

	  function traceKitWindowOnError(message, url, lineNo, columnNo, errorObj) {
	    var stack = null;
	    errorObj = (0, _is.isErrorEvent)(errorObj) ? errorObj.error : errorObj;
	    message = (0, _is.isErrorEvent)(message) ? message.message : message;

	    if (lastExceptionStack) {
	      TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(lastExceptionStack, url, lineNo, message);
	      processLastException();
	    } else if (errorObj && (0, _is.isError)(errorObj)) {
	      stack = TraceKit.computeStackTrace(errorObj);
	      stack.mechanism = 'onerror';
	      notifyHandlers(stack, true, errorObj);
	    } else {
	      var location = {
	        url: url,
	        line: lineNo,
	        column: columnNo
	      };
	      var name;
	      var msg = message; // must be new var or will modify original `arguments`

	      if ({}.toString.call(message) === '[object String]') {
	        var groups = message.match(ERROR_TYPES_RE);

	        if (groups) {
	          name = groups[1];
	          msg = groups[2];
	        }
	      }

	      location.func = TraceKit.computeStackTrace.guessFunctionName(location.url, location.line);
	      location.context = TraceKit.computeStackTrace.gatherContext(location.url, location.line);
	      stack = {
	        name: name,
	        message: msg,
	        mode: 'onerror',
	        mechanism: 'onerror',
	        stack: [_objectSpread({}, location, {
	          // Firefox sometimes doesn't return url correctly and this is an old behavior
	          // that I prefer to port here as well.
	          // It can be altered only here, as previously it's using `location.url` for other things — Kamil
	          url: location.url || getLocationHref()
	        })]
	      };
	      notifyHandlers(stack, true, null);
	    }

	    if (_oldOnerrorHandler) {
	      // @ts-ignore
	      return _oldOnerrorHandler.apply(this, arguments);
	    }

	    return false;
	  }
	  /**
	   * Ensures all unhandled rejections are recorded.
	   * @param {PromiseRejectionEvent} e event.
	   * @memberof TraceKit.report
	   * @see https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunhandledrejection
	   * @see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
	   */


	  function traceKitWindowOnUnhandledRejection(e) {
	    var err = e && (e.detail ? e.detail.reason : e.reason) || e;
	    var stack = TraceKit.computeStackTrace(err);
	    stack.mechanism = 'onunhandledrejection';
	    notifyHandlers(stack, true, err);
	  }
	  /**
	   * Install a global onerror handler
	   * @memberof TraceKit.report
	   */


	  function installGlobalHandler() {
	    if (_onErrorHandlerInstalled === true) {
	      return;
	    }

	    _oldOnerrorHandler = window.onerror;
	    window.onerror = traceKitWindowOnError;
	    _onErrorHandlerInstalled = true;
	  }
	  /**
	   * Uninstall the global onerror handler
	   * @memberof TraceKit.report
	   */


	  function uninstallGlobalHandler() {
	    if (_onErrorHandlerInstalled) {
	      window.onerror = _oldOnerrorHandler;
	      _onErrorHandlerInstalled = false;
	    }
	  }
	  /**
	   * Install a global onunhandledrejection handler
	   * @memberof TraceKit.report
	   */


	  function installGlobalUnhandledRejectionHandler() {
	    if (_onUnhandledRejectionHandlerInstalled === true) {
	      return;
	    }

	    _oldOnunhandledrejectionHandler = window.onunhandledrejection;
	    window.onunhandledrejection = traceKitWindowOnUnhandledRejection;
	    _onUnhandledRejectionHandlerInstalled = true;
	  }
	  /**
	   * Uninstall the global onunhandledrejection handler
	   * @memberof TraceKit.report
	   */


	  function uninstallGlobalUnhandledRejectionHandler() {
	    if (_onUnhandledRejectionHandlerInstalled) {
	      window.onerror = _oldOnunhandledrejectionHandler;
	      _onUnhandledRejectionHandlerInstalled = false;
	    }
	  }
	  /**
	   * Process the most recent exception
	   * @memberof TraceKit.report
	   */


	  function processLastException() {
	    var _lastExceptionStack = lastExceptionStack,
	        _lastException = lastException;
	    lastExceptionStack = null;
	    lastException = null;
	    notifyHandlers(_lastExceptionStack, false, _lastException);
	  }
	  /**
	   * Reports an unhandled Error to TraceKit.
	   * @param {Error} ex
	   * @memberof TraceKit.report
	   * @throws An exception if an incomplete stack trace is detected (old IE browsers).
	   */


	  function report(ex) {
	    if (lastExceptionStack) {
	      if (lastException === ex) {
	        return; // already caught by an inner catch block, ignore
	      } else {
	        processLastException();
	      }
	    }

	    var stack = TraceKit.computeStackTrace(ex);
	    lastExceptionStack = stack;
	    lastException = ex; // If the stack trace is incomplete, wait for 2 seconds for
	    // slow slow IE to see if onerror occurs or not before reporting
	    // this exception; otherwise, we will end up with an incomplete
	    // stack trace

	    setTimeout(function () {
	      if (lastException === ex) {
	        processLastException();
	      }
	    }, stack.incomplete ? 2000 : 0);
	    throw ex; // re-throw to propagate to the top level (and cause window.onerror)
	  }

	  report.subscribe = subscribe;
	  report.unsubscribe = unsubscribe;
	  report.installGlobalHandler = installGlobalHandler;
	  report.installGlobalUnhandledRejectionHandler = installGlobalUnhandledRejectionHandler;
	  return report;
	}();
	/**
	 * An object representing a single stack frame.
	 * @typedef {Object} StackFrame
	 * @property {string} url The JavaScript or HTML file URL.
	 * @property {string} func The function name, or empty for anonymous functions (if guessing did not work).
	 * @property {string[]?} args The arguments passed to the function, if known.
	 * @property {number=} line The line number, if known.
	 * @property {number=} column The column number, if known.
	 * @property {string[]} context An array of source code lines; the middle element corresponds to the correct line#.
	 * @memberof TraceKit
	 */

	/**
	 * An object representing a JavaScript stack trace.
	 * @typedef {Object} StackTrace
	 * @property {string} name The name of the thrown exception.
	 * @property {string} message The exception error message.
	 * @property {TraceKit.StackFrame[]} stack An array of stack frames.
	 * @property {string} mode 'stack', 'stacktrace', 'multiline', 'callers', 'onerror', or 'failed' -- method used to collect the stack trace.
	 * @memberof TraceKit
	 */

	/**
	 * TraceKit.computeStackTrace: cross-browser stack traces in JavaScript
	 *
	 * Syntax:
	 *   ```js
	 *   s = TraceKit.computeStackTrace.ofCaller([depth])
	 *   s = TraceKit.computeStackTrace(exception) // consider using TraceKit.report instead (see below)
	 *   ```
	 *
	 * Supports:
	 *   - Firefox:  full stack trace with line numbers and unreliable column
	 *               number on top frame
	 *   - Opera 10: full stack trace with line and column numbers
	 *   - Opera 9-: full stack trace with line numbers
	 *   - Chrome:   full stack trace with line and column numbers
	 *   - Safari:   line and column number for the topmost stacktrace element
	 *               only
	 *   - IE:       no line numbers whatsoever
	 *
	 * Tries to guess names of anonymous functions by looking for assignments
	 * in the source code. In IE and Safari, we have to guess source file names
	 * by searching for function bodies inside all page scripts. This will not
	 * work for scripts that are loaded cross-domain.
	 * Here be dragons: some function names may be guessed incorrectly, and
	 * duplicate functions may be mismatched.
	 *
	 * TraceKit.computeStackTrace should only be used for tracing purposes.
	 * Logging of unhandled exceptions should be done with TraceKit.report,
	 * which builds on top of TraceKit.computeStackTrace and provides better
	 * IE support by utilizing the window.onerror event to retrieve information
	 * about the top of the stack.
	 *
	 * Note: In IE and Safari, no stack trace is recorded on the Error object,
	 * so computeStackTrace instead walks its *own* chain of callers.
	 * This means that:
	 *  * in Safari, some methods may be missing from the stack trace;
	 *  * in IE, the topmost function in the stack trace will always be the
	 *    caller of computeStackTrace.
	 *
	 * This is okay for tracing (because you are likely to be calling
	 * computeStackTrace from the function you want to be the topmost element
	 * of the stack trace anyway), but not okay for logging unhandled
	 * exceptions (because your catch block will likely be far away from the
	 * inner function that actually caused the exception).
	 *
	 * Tracing example:
	 *  ```js
	 *     function trace(message) {
	 *         var stackInfo = TraceKit.computeStackTrace.ofCaller();
	 *         var data = message + "\n";
	 *         for(var i in stackInfo.stack) {
	 *             var item = stackInfo.stack[i];
	 *             data += (item.func || '[anonymous]') + "() in " + item.url + ":" + (item.line || '0') + "\n";
	 *         }
	 *         if (window.console)
	 *             console.info(data);
	 *         else
	 *             alert(data);
	 *     }
	 * ```
	 * @memberof TraceKit
	 * @namespace
	 */


	TraceKit.computeStackTrace = function computeStackTraceWrapper() {
	  var debug = false,
	      sourceCache = {};
	  /**
	   * Attempts to retrieve source code via XMLHttpRequest, which is used
	   * to look up anonymous function names.
	   * @param {string} url URL of source code.
	   * @return {string} Source contents.
	   * @memberof TraceKit.computeStackTrace
	   */

	  function loadSource(url) {
	    if (!TraceKit.remoteFetching) {
	      //Only attempt request if remoteFetching is on.
	      return '';
	    }

	    try {
	      var getXHR = function getXHR() {
	        try {
	          return new window.XMLHttpRequest();
	        } catch (e) {
	          // explicitly bubble up the exception if not found
	          return new window.ActiveXObject('Microsoft.XMLHTTP');
	        }
	      };

	      var request = getXHR();
	      request.open('GET', url, false);
	      request.send('');
	      return request.responseText;
	    } catch (e) {
	      return '';
	    }
	  }
	  /**
	   * Retrieves source code from the source code cache.
	   * @param {string} url URL of source code.
	   * @return {Array.<string>} Source contents.
	   * @memberof TraceKit.computeStackTrace
	   */


	  function getSource(url) {
	    if (typeof url !== 'string') {
	      return [];
	    }

	    if (!_has(sourceCache, url)) {
	      // URL needs to be able to fetched within the acceptable domain.  Otherwise,
	      // cross-domain errors will be triggered.

	      /*
	                  Regex matches:
	                  0 - Full Url
	                  1 - Protocol
	                  2 - Domain
	                  3 - Port (Useful for internal applications)
	                  4 - Path
	              */
	      var source = '';
	      var domain = '';

	      try {
	        domain = window.document.domain;
	      } catch (e) {
	        1;
	      } // eslint-disable-next-line


	      var match = /(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(url);

	      if (match && match[2] === domain) {
	        source = loadSource(url);
	      }

	      sourceCache[url] = source ? source.split('\n') : [];
	    }

	    return sourceCache[url];
	  }
	  /**
	   * Tries to use an externally loaded copy of source code to determine
	   * the name of a function by looking at the name of the variable it was
	   * assigned to, if any.
	   * @param {string} url URL of source code.
	   * @param {(string|number)} lineNo Line number in source code.
	   * @return {string} The function name, if discoverable.
	   * @memberof TraceKit.computeStackTrace
	   */


	  function guessFunctionName(url, lineNo) {
	    var reFunctionArgNames = /function ([^(]*)\(([^)]*)\)/,
	        reGuessFunction = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
	        line = '',
	        maxLines = 10,
	        source = getSource(url),
	        m;

	    if (!source.length) {
	      return UNKNOWN_FUNCTION;
	    } // Walk backwards from the first line in the function until we find the line which
	    // matches the pattern above, which is the function definition


	    for (var i = 0; i < maxLines; ++i) {
	      line = source[lineNo - i] + line;

	      if (!(0, _is.isUndefined)(line)) {
	        if (m = reGuessFunction.exec(line)) {
	          return m[1];
	        } else if (m = reFunctionArgNames.exec(line)) {
	          return m[1];
	        }
	      }
	    }

	    return UNKNOWN_FUNCTION;
	  }
	  /**
	   * Retrieves the surrounding lines from where an exception occurred.
	   * @param {string} url URL of source code.
	   * @param {(string|number)} line Line number in source code to center around for context.
	   * @return {?Array.<string>} Lines of source code.
	   * @memberof TraceKit.computeStackTrace
	   */


	  function gatherContext(url, line) {
	    var source = getSource(url);

	    if (!source.length) {
	      return null;
	    }

	    var context = [],
	        // linesBefore & linesAfter are inclusive with the offending line.
	    // if linesOfContext is even, there will be one extra line
	    //   *before* the offending line.
	    linesBefore = Math.floor(TraceKit.linesOfContext / 2),
	        // Add one extra line if linesOfContext is odd
	    linesAfter = linesBefore + TraceKit.linesOfContext % 2,
	        start = Math.max(0, line - linesBefore - 1),
	        end = Math.min(source.length, line + linesAfter - 1);
	    line -= 1; // convert to 0-based index

	    for (var i = start; i < end; ++i) {
	      if (!(0, _is.isUndefined)(source[i])) {
	        context.push(source[i]);
	      }
	    }

	    return context.length > 0 ? context : null;
	  }
	  /**
	   * Escapes special characters, except for whitespace, in a string to be
	   * used inside a regular expression as a string literal.
	   * @param {string} text The string.
	   * @return {string} The escaped string literal.
	   * @memberof TraceKit.computeStackTrace
	   */


	  function escapeRegExp(text) {
	    // eslint-disable-next-line
	    return text.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, '\\$&');
	  }
	  /**
	   * Escapes special characters in a string to be used inside a regular
	   * expression as a string literal. Also ensures that HTML entities will
	   * be matched the same as their literal friends.
	   * @param {string} body The string.
	   * @return {string} The escaped string.
	   * @memberof TraceKit.computeStackTrace
	   */


	  function escapeCodeAsRegExpForMatchingInsideHTML(body) {
	    return escapeRegExp(body).replace('<', '(?:<|&lt;)').replace('>', '(?:>|&gt;)').replace('&', '(?:&|&amp;)').replace('"', '(?:"|&quot;)').replace(/\s+/g, '\\s+');
	  }
	  /**
	   * Determines where a code fragment occurs in the source code.
	   * @param {RegExp} re The function definition.
	   * @param {Array.<string>} urls A list of URLs to search.
	   * @return {?Object.<string, (string|number)>} An object containing
	   * the url, line, and column number of the defined function.
	   * @memberof TraceKit.computeStackTrace
	   */


	  function findSourceInUrls(re, urls) {
	    var source, m;

	    for (var i = 0, j = urls.length; i < j; ++i) {
	      if ((source = getSource(urls[i])).length) {
	        source = source.join('\n');

	        if (m = re.exec(source)) {
	          return {
	            url: urls[i],
	            line: source.substring(0, m.index).split('\n').length,
	            column: m.index - source.lastIndexOf('\n', m.index) - 1
	          };
	        }
	      }
	    }

	    return null;
	  }
	  /**
	   * Determines at which column a code fragment occurs on a line of the
	   * source code.
	   * @param {string} fragment The code fragment.
	   * @param {string} url The URL to search.
	   * @param {(string|number)} line The line number to examine.
	   * @return {?number} The column number.
	   * @memberof TraceKit.computeStackTrace
	   */


	  function findSourceInLine(fragment, url, line) {
	    var source = getSource(url),
	        re = new RegExp('\\b' + escapeRegExp(fragment) + '\\b'),
	        m;
	    line -= 1;

	    if (source && source.length > line && (m = re.exec(source[line]))) {
	      return m.index;
	    }

	    return null;
	  }
	  /**
	   * Determines where a function was defined within the source code.
	   * @param {(Function|string)} func A function reference or serialized
	   * function definition.
	   * @return {?Object.<string, (string|number)>} An object containing
	   * the url, line, and column number of the defined function.
	   * @memberof TraceKit.computeStackTrace
	   */


	  function findSourceByFunctionBody(func) {
	    if ((0, _is.isUndefined)(window && window.document)) {
	      return;
	    }

	    var urls = [getLocationHref()],
	        scripts = window.document.getElementsByTagName('script'),
	        body,
	        code = '' + func,
	        codeRE = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,
	        eventRE = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,
	        re,
	        parts,
	        result;

	    for (var i = 0; i < scripts.length; ++i) {
	      var script = scripts[i];

	      if (script.src) {
	        urls.push(script.src);
	      }
	    }

	    if (!(parts = codeRE.exec(code))) {
	      re = new RegExp(escapeRegExp(code).replace(/\s+/g, '\\s+'));
	    } // not sure if this is really necessary, but I don’t have a test
	    // corpus large enough to confirm that and it was in the original.
	    else {
	        var name = parts[1] ? '\\s+' + parts[1] : '',
	            args = parts[2].split(',').join('\\s*,\\s*');
	        body = escapeRegExp(parts[3]).replace(/;$/, ';?'); // semicolon is inserted if the function ends with a comment.replace(/\s+/g, '\\s+');

	        re = new RegExp('function' + name + '\\s*\\(\\s*' + args + '\\s*\\)\\s*{\\s*' + body + '\\s*}');
	      } // look for a normal function definition


	    if (result = findSourceInUrls(re, urls)) {
	      return result;
	    } // look for an old-school event handler function


	    if (parts = eventRE.exec(code)) {
	      var event = parts[1];
	      body = escapeCodeAsRegExpForMatchingInsideHTML(parts[2]); // look for a function defined in HTML as an onXXX handler

	      re = new RegExp('on' + event + '=[\\\'"]\\s*' + body + '\\s*[\\\'"]', 'i');

	      if (result = findSourceInUrls(re, urls[0])) {
	        return result;
	      } // look for ???


	      re = new RegExp(body);

	      if (result = findSourceInUrls(re, urls)) {
	        return result;
	      }
	    }

	    return null;
	  } // Contents of Exception in various browsers.
	  //
	  // SAFARI:
	  // ex.message = Can't find variable: qq
	  // ex.line = 59
	  // ex.sourceId = 580238192
	  // ex.sourceURL = http://...
	  // ex.expressionBeginOffset = 96
	  // ex.expressionCaretOffset = 98
	  // ex.expressionEndOffset = 98
	  // ex.name = ReferenceError
	  //
	  // FIREFOX:
	  // ex.message = qq is not defined
	  // ex.fileName = http://...
	  // ex.lineNumber = 59
	  // ex.columnNumber = 69
	  // ex.stack = ...stack trace... (see the example below)
	  // ex.name = ReferenceError
	  //
	  // CHROME:
	  // ex.message = qq is not defined
	  // ex.name = ReferenceError
	  // ex.type = not_defined
	  // ex.arguments = ['aa']
	  // ex.stack = ...stack trace...
	  //
	  // INTERNET EXPLORER:
	  // ex.message = ...
	  // ex.name = ReferenceError
	  //
	  // OPERA:
	  // ex.message = ...message... (see the example below)
	  // ex.name = ReferenceError
	  // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
	  // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'

	  /**
	   * Computes stack trace information from the stack property.
	   * Chrome and Gecko use this property.
	   * @param {Error} ex
	   * @return {?TraceKit.StackTrace} Stack trace information.
	   * @memberof TraceKit.computeStackTrace
	   */


	  function computeStackTraceFromStackProp(ex) {
	    if (!ex.stack) {
	      return null;
	    }

	    var chrome = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
	        gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
	        winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
	        // Used to additionally parse URL/line/column from eval frames
	    isEval,
	        geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
	        chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/,
	        lines = ex.stack.split('\n'),
	        stack = [],
	        submatch,
	        parts,
	        element,
	        reference = /^(.*) is undefined$/.exec(ex.message);

	    for (var i = 0, j = lines.length; i < j; ++i) {
	      if (parts = chrome.exec(lines[i])) {
	        var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line

	        isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line

	        if (isEval && (submatch = chromeEval.exec(parts[2]))) {
	          // throw out eval line/column and use top-most line/column number
	          parts[2] = submatch[1]; // url
	          // NOTE: It's messing out our integration tests in Karma, let's see if we can live with it – Kamil
	          // parts[3] = submatch[2]; // line
	          // parts[4] = submatch[3]; // column
	        }

	        element = {
	          url: !isNative ? parts[2] : null,
	          func: parts[1] || UNKNOWN_FUNCTION,
	          args: isNative ? [parts[2]] : [],
	          line: parts[3] ? +parts[3] : null,
	          column: parts[4] ? +parts[4] : null
	        };
	      } else if (parts = winjs.exec(lines[i])) {
	        element = {
	          url: parts[2],
	          func: parts[1] || UNKNOWN_FUNCTION,
	          args: [],
	          line: +parts[3],
	          column: parts[4] ? +parts[4] : null
	        };
	      } else if (parts = gecko.exec(lines[i])) {
	        isEval = parts[3] && parts[3].indexOf(' > eval') > -1;

	        if (isEval && (submatch = geckoEval.exec(parts[3]))) {
	          // throw out eval line/column and use top-most line number
	          parts[3] = submatch[1]; // NOTE: It's messing out our integration tests in Karma, let's see if we can live with it – Kamil
	          // parts[4] = submatch[2];
	          // parts[5] = null; // no column when eval
	        } else if (i === 0 && !parts[5] && !(0, _is.isUndefined)(ex.columnNumber)) {
	          // FireFox uses this awesome columnNumber property for its top frame
	          // Also note, Firefox's column number is 0-based and everything else expects 1-based,
	          // so adding 1
	          // NOTE: this hack doesn't work if top-most frame is eval
	          stack[0].column = ex.columnNumber + 1;
	        }

	        element = {
	          url: parts[3],
	          func: parts[1] || UNKNOWN_FUNCTION,
	          args: parts[2] ? parts[2].split(',') : [],
	          line: parts[4] ? +parts[4] : null,
	          column: parts[5] ? +parts[5] : null
	        };
	      } else {
	        continue;
	      }

	      if (!element.func && element.line) {
	        element.func = guessFunctionName(element.url, element.line);
	      }

	      if (TraceKit.remoteFetching && element.url && element.url.substr(0, 5) === 'blob:') {
	        // Special case for handling JavaScript loaded into a blob.
	        // We use a synchronous AJAX request here as a blob is already in
	        // memory - it's not making a network request.  This will generate a warning
	        // in the browser console, but there has already been an error so that's not
	        // that much of an issue.
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', element.url, false);
	        xhr.send(''); // If we failed to download the source, skip this patch

	        if (xhr.status === 200) {
	          var source = xhr.responseText || ''; // We trim the source down to the last 300 characters as sourceMappingURL is always at the end of the file.
	          // Why 300? To be in line with: https://github.com/getsentry/sentry/blob/4af29e8f2350e20c28a6933354e4f42437b4ba42/src/sentry/lang/javascript/processor.py#L164-L175

	          source = source.slice(-300); // Now we dig out the source map URL

	          var sourceMaps = source.match(/\/\/# sourceMappingURL=(.*)$/); // If we don't find a source map comment or we find more than one, continue on to the next element.

	          if (sourceMaps) {
	            var sourceMapAddress = sourceMaps[1]; // Now we check to see if it's a relative URL.
	            // If it is, convert it to an absolute one.

	            if (sourceMapAddress.charAt(0) === '~') {
	              sourceMapAddress = getLocationOrigin() + sourceMapAddress.slice(1);
	            } // Now we strip the '.map' off of the end of the URL and update the
	            // element so that Sentry can match the map to the blob.


	            element.url = sourceMapAddress.slice(0, -4);
	          }
	        }
	      }

	      element.context = element.line ? gatherContext(element.url, element.line) : null;
	      stack.push(element);
	    }

	    if (!stack.length) {
	      return null;
	    }

	    if (stack[0] && stack[0].line && !stack[0].column && reference) {
	      stack[0].column = findSourceInLine(reference[1], stack[0].url, stack[0].line);
	    }

	    return {
	      mode: 'stack',
	      name: ex.name,
	      message: ex.message,
	      stack: stack
	    };
	  }
	  /**
	   * Computes stack trace information from the stacktrace property.
	   * Opera 10+ uses this property.
	   * @param {Error} ex
	   * @return {?TraceKit.StackTrace} Stack trace information.
	   * @memberof TraceKit.computeStackTrace
	   */


	  function computeStackTraceFromStacktraceProp(ex) {
	    // Access and store the stacktrace property before doing ANYTHING
	    // else to it because Opera is not very good at providing it
	    // reliably in other circumstances.
	    var stacktrace = ex.stacktrace;

	    if (!stacktrace) {
	      return;
	    }

	    var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
	        // eslint-disable-next-line
	    opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,
	        lines = stacktrace.split('\n'),
	        stack = [],
	        parts;

	    for (var line = 0; line < lines.length; line += 2) {
	      var element = null;

	      if (parts = opera10Regex.exec(lines[line])) {
	        element = {
	          url: parts[2],
	          line: +parts[1],
	          column: null,
	          func: parts[3],
	          args: []
	        };
	      } else if (parts = opera11Regex.exec(lines[line])) {
	        element = {
	          url: parts[6],
	          line: +parts[1],
	          column: +parts[2],
	          func: parts[3] || parts[4],
	          args: parts[5] ? parts[5].split(',') : []
	        };
	      }

	      if (element) {
	        if (!element.func && element.line) {
	          element.func = guessFunctionName(element.url, element.line);
	        }

	        if (element.line) {
	          try {
	            element.context = gatherContext(element.url, element.line);
	          } catch (exc) {
	            1;
	          }
	        }

	        if (!element.context) {
	          element.context = [lines[line + 1]];
	        }

	        stack.push(element);
	      }
	    }

	    if (!stack.length) {
	      return null;
	    }

	    return {
	      mode: 'stacktrace',
	      name: ex.name,
	      message: ex.message,
	      stack: stack
	    };
	  }
	  /**
	   * NOT TESTED.
	   * Computes stack trace information from an error message that includes
	   * the stack trace.
	   * Opera 9 and earlier use this method if the option to show stack
	   * traces is turned on in opera:config.
	   * @param {Error} ex
	   * @return {?TraceKit.StackTrace} Stack information.
	   * @memberof TraceKit.computeStackTrace
	   */


	  function computeStackTraceFromOperaMultiLineMessage(ex) {
	    // TODO: Clean this function up
	    // Opera includes a stack trace into the exception message. An example is:
	    //
	    // Statement on line 3: Undefined variable: undefinedFunc
	    // Backtrace:
	    //   Line 3 of linked script file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.js: In function zzz
	    //         undefinedFunc(a);
	    //   Line 7 of inline#1 script in file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.html: In function yyy
	    //           zzz(x, y, z);
	    //   Line 3 of inline#1 script in file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.html: In function xxx
	    //           yyy(a, a, a);
	    //   Line 1 of function script
	    //     try { xxx('hi'); return false; } catch(ex) { TraceKit.report(ex); }
	    //   ...
	    var lines = ex.message.split('\n');

	    if (lines.length < 4) {
	      return null;
	    }

	    var lineRE1 = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
	        lineRE2 = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
	        lineRE3 = /^\s*Line (\d+) of function script\s*$/i,
	        stack = [],
	        scripts = window && window.document && window.document.getElementsByTagName('script'),
	        inlineScriptBlocks = [],
	        parts;

	    for (var s in scripts) {
	      if (_has(scripts, s) && !scripts[s].src) {
	        inlineScriptBlocks.push(scripts[s]);
	      }
	    }

	    for (var line = 2; line < lines.length; line += 2) {
	      var item = null;

	      if (parts = lineRE1.exec(lines[line])) {
	        item = {
	          url: parts[2],
	          func: parts[3],
	          args: [],
	          line: +parts[1],
	          column: null
	        };
	      } else if (parts = lineRE2.exec(lines[line])) {
	        item = {
	          url: parts[3],
	          func: parts[4],
	          args: [],
	          line: +parts[1],
	          column: null // TODO: Check to see if inline#1 (+parts[2]) points to the script number or column number.

	        };
	        var relativeLine = +parts[1]; // relative to the start of the <SCRIPT> block

	        var script = inlineScriptBlocks[parts[2] - 1];

	        if (script) {
	          var source = getSource(item.url);

	          if (source) {
	            source = source.join('\n');
	            var pos = source.indexOf(script.innerText);

	            if (pos >= 0) {
	              item.line = relativeLine + source.substring(0, pos).split('\n').length;
	            }
	          }
	        }
	      } else if (parts = lineRE3.exec(lines[line])) {
	        var url = getLocationHref().replace(/#.*$/, '');
	        var re = new RegExp(escapeCodeAsRegExpForMatchingInsideHTML(lines[line + 1]));
	        var src = findSourceInUrls(re, [url]);
	        item = {
	          url: url,
	          func: '',
	          args: [],
	          line: src ? src.line : parts[1],
	          column: null
	        };
	      }

	      if (item) {
	        if (!item.func) {
	          item.func = guessFunctionName(item.url, item.line);
	        }

	        var context = gatherContext(item.url, item.line);
	        var midline = context ? context[Math.floor(context.length / 2)] : null;

	        if (context && midline.replace(/^\s*/, '') === lines[line + 1].replace(/^\s*/, '')) {
	          item.context = context;
	        } else {
	          // if (context) alert("Context mismatch. Correct midline:\n" + lines[i+1] + "\n\nMidline:\n" + midline + "\n\nContext:\n" + context.join("\n") + "\n\nURL:\n" + item.url);
	          item.context = [lines[line + 1]];
	        }

	        stack.push(item);
	      }
	    }

	    if (!stack.length) {
	      return null; // could not parse multiline exception message as Opera stack trace
	    }

	    return {
	      mode: 'multiline',
	      name: ex.name,
	      message: lines[0],
	      stack: stack
	    };
	  }
	  /**
	   * Adds information about the first frame to incomplete stack traces.
	   * Safari and IE require this to get complete data on the first frame.
	   * @param {TraceKit.StackTrace} stackInfo Stack trace information from
	   * one of the compute* methods.
	   * @param {string} url The URL of the script that caused an error.
	   * @param {(number|string)} lineNo The line number of the script that
	   * caused an error.
	   * @param {string=} message The error generated by the browser, which
	   * hopefully contains the name of the object that caused the error.
	   * @return {boolean} Whether or not the stack information was
	   * augmented.
	   * @memberof TraceKit.computeStackTrace
	   */


	  function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
	    var initial = {
	      url: url,
	      line: lineNo
	    };

	    if (initial.url && initial.line) {
	      stackInfo.incomplete = false;

	      if (!initial.func) {
	        initial.func = guessFunctionName(initial.url, initial.line);
	      }

	      if (!initial.context) {
	        initial.context = gatherContext(initial.url, initial.line);
	      }

	      var reference = / '([^']+)' /.exec(message);

	      if (reference) {
	        initial.column = findSourceInLine(reference[1], initial.url, initial.line);
	      }

	      if (stackInfo.stack.length > 0) {
	        if (stackInfo.stack[0].url === initial.url) {
	          if (stackInfo.stack[0].line === initial.line) {
	            return false; // already in stack trace
	          } else if (!stackInfo.stack[0].line && stackInfo.stack[0].func === initial.func) {
	            stackInfo.stack[0].line = initial.line;
	            stackInfo.stack[0].context = initial.context;
	            return false;
	          }
	        }
	      }

	      stackInfo.stack.unshift(initial);
	      stackInfo.partial = true;
	      return true;
	    } else {
	      stackInfo.incomplete = true;
	    }

	    return false;
	  }
	  /**
	   * Computes stack trace information by walking the arguments.caller
	   * chain at the time the exception occurred. This will cause earlier
	   * frames to be missed but is the only way to get any stack trace in
	   * Safari and IE. The top frame is restored by
	   * {@link augmentStackTraceWithInitialElement}.
	   * @param {Error} ex
	   * @return {TraceKit.StackTrace=} Stack trace information.
	   * @memberof TraceKit.computeStackTrace
	   */


	  function computeStackTraceByWalkingCallerChain(ex, depth) {
	    var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
	        stack = [],
	        funcs = {},
	        recursion = false,
	        parts,
	        item,
	        source;

	    for (var curr = computeStackTraceByWalkingCallerChain.caller; curr && !recursion; curr = curr.caller) {
	      if (curr === computeStackTrace || curr === TraceKit.report) {
	        continue;
	      }

	      item = {
	        url: null,
	        func: UNKNOWN_FUNCTION,
	        args: [],
	        line: null,
	        column: null
	      };

	      if (curr.name) {
	        item.func = curr.name;
	      } else if (parts = functionName.exec(curr.toString())) {
	        item.func = parts[1];
	      }

	      if (typeof item.func === 'undefined') {
	        try {
	          item.func = parts.input.substring(0, parts.input.indexOf('{'));
	        } catch (e) {
	          1;
	        }
	      }

	      if (source = findSourceByFunctionBody(curr)) {
	        item.url = source.url;
	        item.line = source.line;

	        if (item.func === UNKNOWN_FUNCTION) {
	          item.func = guessFunctionName(item.url, item.line);
	        }

	        var reference = / '([^']+)' /.exec(ex.message || ex.description);

	        if (reference) {
	          item.column = findSourceInLine(reference[1], source.url, source.line);
	        }
	      }

	      if (funcs['' + curr]) {
	        recursion = true;
	      } else {
	        funcs['' + curr] = true;
	      }

	      stack.push(item);
	    }

	    if (depth) {
	      stack.splice(0, depth);
	    }

	    var result = {
	      mode: 'callers',
	      name: ex.name,
	      message: ex.message,
	      stack: stack
	    };
	    augmentStackTraceWithInitialElement(result, ex.sourceURL || ex.fileName, ex.line || ex.lineNumber, ex.message || ex.description);
	    return result;
	  }
	  /**
	   * Computes a stack trace for an exception.
	   * @param {Error} ex
	   * @param {(string|number)=} depth
	   * @memberof TraceKit.computeStackTrace
	   */


	  function computeStackTrace(ex, depth) {
	    var stack = null;
	    depth = depth == null ? 0 : +depth;

	    try {
	      // This must be tried first because Opera 10 *destroys*
	      // its stacktrace property if you try to access the stack
	      // property first!!
	      stack = computeStackTraceFromStacktraceProp(ex);

	      if (stack) {
	        return stack;
	      }
	    } catch (e) {
	      if (debug) {
	        throw e;
	      }
	    }

	    try {
	      stack = computeStackTraceFromStackProp(ex);

	      if (stack) {
	        return stack;
	      }
	    } catch (e) {
	      if (debug) {
	        throw e;
	      }
	    }

	    try {
	      stack = computeStackTraceFromOperaMultiLineMessage(ex);

	      if (stack) {
	        return stack;
	      }
	    } catch (e) {
	      if (debug) {
	        throw e;
	      }
	    }

	    try {
	      stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);

	      if (stack) {
	        return stack;
	      }
	    } catch (e) {
	      if (debug) {
	        throw e;
	      }
	    }

	    return {
	      name: ex.name,
	      message: ex.message,
	      mode: 'failed'
	    };
	  }
	  /**
	   * Logs a stacktrace starting from the previous call and working down.
	   * @param {(number|string)=} depth How many frames deep to trace.
	   * @return {TraceKit.StackTrace} Stack trace information.
	   * @memberof TraceKit.computeStackTrace
	   */


	  function computeStackTraceOfCaller(depth) {
	    depth = (depth == null ? 0 : +depth) + 1; // "+ 1" because "ofCaller" should drop one frame

	    try {
	      throw new Error();
	    } catch (ex) {
	      return computeStackTrace(ex, depth + 1);
	    }
	  }

	  computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
	  computeStackTrace.computeStackTraceFromStackProp = computeStackTraceFromStackProp;
	  computeStackTrace.guessFunctionName = guessFunctionName;
	  computeStackTrace.gatherContext = gatherContext;
	  computeStackTrace.ofCaller = computeStackTraceOfCaller;
	  computeStackTrace.getSource = getSource;
	  return computeStackTrace;
	}();
	/**
	 * Extends support for global error handling for asynchronous browser
	 * functions. Adopted from Closure Library's errorhandler.js
	 * @memberof TraceKit
	 */


	TraceKit.extendToAsynchronousCallbacks = function () {
	  var _helper = function _helper(fnName) {
	    var originalFn = window[fnName];

	    window[fnName] = function traceKitAsyncExtension() {
	      // Make a copy of the arguments
	      var args = _slice.call(arguments);

	      var originalCallback = args[0];

	      if (typeof originalCallback === 'function') {
	        args[0] = TraceKit.wrap(originalCallback);
	      } // IE < 9 doesn't support .call/.apply on setInterval/setTimeout, but it
	      // also only supports 2 argument and doesn't care what "this" is, so we
	      // can just call the original function directly.


	      if (originalFn.apply) {
	        return originalFn.apply(this, args);
	      } else {
	        return originalFn(args[0], args[1]);
	      }
	    };
	  };

	  _helper('setTimeout');

	  _helper('setInterval');
	};

	TraceKit.remoteFetching = false;
	TraceKit.collectWindowErrors = true;
	TraceKit.linesOfContext = 11;
	const report = TraceKit.report;
	exports.report = report;
	const subscribe = TraceKit.report.subscribe;
	exports.subscribe = subscribe;
	const installGlobalHandler = TraceKit.report.installGlobalHandler;
	exports.installGlobalHandler = installGlobalHandler;
	const installGlobalUnhandledRejectionHandler = TraceKit.report.installGlobalUnhandledRejectionHandler;
	exports.installGlobalUnhandledRejectionHandler = installGlobalUnhandledRejectionHandler;
	const computeStackTrace = TraceKit.computeStackTrace;
	exports.computeStackTrace = computeStackTrace;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "BaseTransport", {
	  enumerable: true,
	  get: function get() {
	    return _base.BaseTransport;
	  }
	});
	Object.defineProperty(exports, "RequestTransport", {
	  enumerable: true,
	  get: function get() {
	    return _request.RequestTransport;
	  }
	});
	Object.defineProperty(exports, "WorkerTransport", {
	  enumerable: true,
	  get: function get() {
	    return _worker.WorkerTransport;
	  }
	});

	__webpack_require__(1);

	var _base = __webpack_require__(39);

	var _request = __webpack_require__(40);

	var _worker = __webpack_require__(43);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BaseTransport = void 0;

	var _core = __webpack_require__(3);

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

	function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

	/** Base Transport class implementation */
	class BaseTransport {
	  constructor(options) {
	    this.options = options;
	    this.url = new _core.API(this.options.dsn).getStoreEndpointWithUrlEncodedAuth();
	  }

	  captureEvent() {
	    return _asyncToGenerator(function* () {
	      throw new _core.SentryError('Transport Class has to implement `captureEvent` method');
	    })();
	  }

	}

	exports.BaseTransport = BaseTransport;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.XHRTransport = void 0;

	var _types = __webpack_require__(19);

	var _base = __webpack_require__(39);

	var _env = __webpack_require__(41);

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

	function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

	class XHRTransport extends _base.BaseTransport {
	  captureEvent(event) {
	    var _this = this;

	    return _asyncToGenerator(function* () {
	      return new Promise((resolve, reject) => {
	        (0, _env.getMinaContext)().request({
	          url: _this.url,
	          method: 'POST',
	          data: event,
	          success: res => {
	            if (res.statusCode === 200) {
	              resolve({
	                status: _types.Status.fromHttpCode(res.statusCode)
	              });
	            } else {
	              reject(new Error(`request fail with status code: ${res.statusCode}`));
	            }
	          },
	          fail: e => {
	            reject(e);
	          }
	        });
	      });
	    })();
	  }

	}

	exports.XHRTransport = XHRTransport;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setMinaContext = setMinaContext;
	exports.getMinaContext = getMinaContext;
	exports.getSystemInfo = getSystemInfo;
	exports.isWorkerEnabled = isWorkerEnabled;
	exports.supportRequest = supportRequest;

	__webpack_require__(1);

	var _tools = __webpack_require__(42);

	// eslint-disable-next-line
	let minaContext = wx || {};
	let systemInfo = null;

	function setMinaContext(ctx) {
	  minaContext = ctx;
	}

	function getMinaContext() {
	  return minaContext;
	}

	function getSystemInfo() {
	  return systemInfo || (systemInfo = minaContext.getSystemInfoSync());
	}

	function isWorkerEnabled(options) {
	  if (!options.worker) {
	    return false;
	  }

	  const systemInfo = getSystemInfo(); // https://developers.weixin.qq.com/miniprogram/dev/api/wx.createWorker.html

	  if (!systemInfo || (0, _tools.compareVersion)(systemInfo.SDKVersion, '1.9.90') < 0) {
	    return false;
	  }

	  return true;
	}

	function supportRequest() {
	  return !!minaContext.request;
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.compareVersion = compareVersion;

	__webpack_require__(1);

	function compareVersion(v1, v2) {
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

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.XHRTransport = void 0;

	var _types = __webpack_require__(19);

	var _base = __webpack_require__(39);

	var _env = __webpack_require__(41);

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

	function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

	class XHRTransport extends _base.BaseTransport {
	  constructor(options) {
	    super(options);
	    this.worker = (0, _env.getMinaContext)().createWorker(options.worker);
	  }

	  captureEvent(event) {
	    var _this = this;

	    return _asyncToGenerator(function* () {
	      return new Promise((resolve, reject) => {
	        (0, _env.getMinaContext)().request({
	          url: _this.url,
	          method: 'POST',
	          data: event,
	          success: res => {
	            if (res.statusCode === 200) {
	              resolve({
	                status: _types.Status.fromHttpCode(res.statusCode)
	              });
	            } else {
	              reject(new Error(`request fail with status code: ${res.statusCode}`));
	            }
	          },
	          fail: e => {
	            reject(e);
	          }
	        });
	      });
	    })();
	  }

	}

	exports.XHRTransport = XHRTransport;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BrowserClient = void 0;

	__webpack_require__(1);

	var _core = __webpack_require__(3);

	var _backend = __webpack_require__(2);

	var _version = __webpack_require__(45);

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

	function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

	class BrowserClient extends _core.BaseClient {
	  constructor(options) {
	    super(_backend.MinaBackend, options);
	  }

	  prepareEvent(event, scope, hint) {
	    var _superprop_callPrepareEvent = (..._args) => super.prepareEvent(..._args);

	    return _asyncToGenerator(function* () {
	      event.platform = event.platform || 'javascript';
	      event.sdk = _objectSpread({}, event.sdk, {
	        name: _version.SDK_NAME,
	        packages: [...(event.sdk && event.sdk.packages || []), {
	          name: 'npm:sentry-mina',
	          version: _version.SDK_VERSION
	        }],
	        version: _version.SDK_VERSION
	      });
	      return _superprop_callPrepareEvent(event, scope, hint);
	    })();
	  }

	  showReportDialog() {
	    return;
	  }

	}

	exports.BrowserClient = BrowserClient;

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SDK_VERSION = exports.SDK_NAME = void 0;
	const SDK_NAME = 'sentry.javascript.mina';
	exports.SDK_NAME = SDK_NAME;
	const SDK_VERSION = '0.0.1';
	exports.SDK_VERSION = SDK_VERSION;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	exports.showReportDialog = showReportDialog;
	exports.lastEventId = lastEventId;
	exports.defaultIntegrations = void 0;

	__webpack_require__(1);

	var _core = __webpack_require__(3);

	var _client = __webpack_require__(44);

	const defaultIntegrations = [new _core.Integrations.Dedupe(), new _core.Integrations.InboundFilters(), new _core.Integrations.FunctionToString()];
	exports.defaultIntegrations = defaultIntegrations;

	function init(options) {
	  if (options.defaultIntegrations === undefined) {
	    options.defaultIntegrations = defaultIntegrations;
	  }

	  (0, _core.initAndBind)(_client.MinaClient, options);
	}

	function showReportDialog() {
	  throw new _core.SentryError('showReportDialog not support');
	}

	function lastEventId() {
	  return (0, _core.getCurrentHub)().lastEventId();
	}

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";

/***/ }
/******/ ]);