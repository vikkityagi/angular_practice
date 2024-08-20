import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  NGXS_PLUGINS,
  Store,
  getActionTypeFromInstance,
  withNgxsPlugin
} from "./chunk-4P33H5XD.js";
import "./chunk-O3HWFTNB.js";
import {
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  makeEnvironmentProviders,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7HIQWCT3.js";
import "./chunk-IXWXOSOL.js";
import {
  require_operators
} from "./chunk-IJKRIHJI.js";
import "./chunk-4SNWTT7U.js";
import {
  __spreadValues,
  __toESM
} from "./chunk-NQ4HTGF6.js";

// node_modules/@ngxs/logger-plugin/fesm2022/ngxs-logger-plugin.mjs
var import_operators = __toESM(require_operators(), 1);
var repeat = (str, times) => new Array(times + 1).join(str);
var pad = (num, maxLength) => repeat("0", maxLength - num.toString().length) + num;
function formatTime(time) {
  return pad(time.getHours(), 2) + `:` + pad(time.getMinutes(), 2) + `:` + pad(time.getSeconds(), 2) + `.` + pad(time.getMilliseconds(), 3);
}
var ActionLogger = class {
  constructor(action, store, logWriter) {
    this.action = action;
    this.store = store;
    this.logWriter = logWriter;
  }
  dispatched(state) {
    const actionName = getActionTypeFromInstance(this.action);
    const formattedTime = formatTime(/* @__PURE__ */ new Date());
    const message = `action ${actionName} @ ${formattedTime}`;
    this.logWriter.startGroup(message);
    if (this._hasPayload(this.action)) {
      this.logWriter.logGrey("payload", __spreadValues({}, this.action));
    }
    this.logWriter.logGrey("prev state", state);
  }
  completed(nextState) {
    this.logWriter.logGreen("next state", nextState);
    this.logWriter.endGroup();
  }
  errored(error) {
    this.logWriter.logRedish("next state after error", this.store.snapshot());
    this.logWriter.logRedish("error", error);
    this.logWriter.endGroup();
  }
  _hasPayload(event) {
    const nonEmptyProperties = this._getNonEmptyProperties(event);
    return nonEmptyProperties.length > 0;
  }
  _getNonEmptyProperties(event) {
    const keys = Object.keys(event);
    const values = keys.map((key) => event[key]);
    return values.filter((value) => value !== void 0);
  }
};
var LogWriter = class {
  constructor(options) {
    this.options = options;
    this.options = this.options || {};
    this.logger = options.logger || console;
  }
  startGroup(message) {
    const startGroupFn = this.options.collapsed ? this.logger.groupCollapsed : this.logger.group;
    try {
      startGroupFn.call(this.logger, message);
    } catch (e) {
      console.log(message);
    }
  }
  endGroup() {
    try {
      this.logger.groupEnd();
    } catch (e) {
      this.logger.log("—— log end ——");
    }
  }
  logGrey(title, payload) {
    const greyStyle = "color: #9E9E9E; font-weight: bold";
    this.log(title, greyStyle, payload);
  }
  logGreen(title, payload) {
    const greenStyle = "color: #4CAF50; font-weight: bold";
    this.log(title, greenStyle, payload);
  }
  logRedish(title, payload) {
    const redishStyle = "color: #FD8182; font-weight: bold";
    this.log(title, redishStyle, payload);
  }
  log(title, color, payload) {
    if (this.isIE()) {
      this.logger.log(title, payload);
    } else {
      this.logger.log("%c " + title, color, payload);
    }
  }
  isIE() {
    const ua = typeof window !== "undefined" && window.navigator.userAgent ? window.navigator.userAgent : "";
    let msIE = false;
    const oldIE = ua.indexOf("MSIE ");
    const newIE = ua.indexOf("Trident/");
    if (oldIE > -1 || newIE > -1) {
      msIE = true;
    }
    return msIE;
  }
};
var NGXS_LOGGER_PLUGIN_OPTIONS = new InjectionToken("NGXS_LOGGER_PLUGIN_OPTIONS");
var _NgxsLoggerPlugin = class _NgxsLoggerPlugin {
  constructor(_options, _injector) {
    this._options = _options;
    this._injector = _injector;
  }
  handle(state, event, next) {
    if (this._options.disabled || !this._options.filter(event, state)) {
      return next(state, event);
    }
    this._logWriter = this._logWriter || new LogWriter(this._options);
    this._store = this._store || this._injector.get(Store);
    const actionLogger = new ActionLogger(event, this._store, this._logWriter);
    actionLogger.dispatched(state);
    return next(state, event).pipe((0, import_operators.tap)((nextState) => {
      actionLogger.completed(nextState);
    }), (0, import_operators.catchError)((error) => {
      actionLogger.errored(error);
      throw error;
    }));
  }
};
_NgxsLoggerPlugin.ɵfac = function NgxsLoggerPlugin_Factory(ɵt) {
  return new (ɵt || _NgxsLoggerPlugin)(ɵɵinject(NGXS_LOGGER_PLUGIN_OPTIONS), ɵɵinject(Injector));
};
_NgxsLoggerPlugin.ɵprov = ɵɵdefineInjectable({
  token: _NgxsLoggerPlugin,
  factory: _NgxsLoggerPlugin.ɵfac
});
var NgxsLoggerPlugin = _NgxsLoggerPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsLoggerPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NGXS_LOGGER_PLUGIN_OPTIONS]
    }]
  }, {
    type: Injector
  }], null);
})();
var USER_OPTIONS = new InjectionToken("LOGGER_USER_OPTIONS");
function loggerOptionsFactory(options) {
  const defaultLoggerOptions = {
    logger: console,
    collapsed: false,
    disabled: false,
    filter: () => true
  };
  return __spreadValues(__spreadValues({}, defaultLoggerOptions), options);
}
var _NgxsLoggerPluginModule = class _NgxsLoggerPluginModule {
  static forRoot(options) {
    return {
      ngModule: _NgxsLoggerPluginModule,
      providers: [{
        provide: NGXS_PLUGINS,
        useClass: NgxsLoggerPlugin,
        multi: true
      }, {
        provide: USER_OPTIONS,
        useValue: options
      }, {
        provide: NGXS_LOGGER_PLUGIN_OPTIONS,
        useFactory: loggerOptionsFactory,
        deps: [USER_OPTIONS]
      }]
    };
  }
};
_NgxsLoggerPluginModule.ɵfac = function NgxsLoggerPluginModule_Factory(ɵt) {
  return new (ɵt || _NgxsLoggerPluginModule)();
};
_NgxsLoggerPluginModule.ɵmod = ɵɵdefineNgModule({
  type: _NgxsLoggerPluginModule
});
_NgxsLoggerPluginModule.ɵinj = ɵɵdefineInjector({});
var NgxsLoggerPluginModule = _NgxsLoggerPluginModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsLoggerPluginModule, [{
    type: NgModule
  }], null, null);
})();
function withNgxsLoggerPlugin(options) {
  return makeEnvironmentProviders([withNgxsPlugin(NgxsLoggerPlugin), {
    provide: USER_OPTIONS,
    useValue: options
  }, {
    provide: NGXS_LOGGER_PLUGIN_OPTIONS,
    useFactory: loggerOptionsFactory,
    deps: [USER_OPTIONS]
  }]);
}
export {
  NGXS_LOGGER_PLUGIN_OPTIONS,
  NgxsLoggerPlugin,
  NgxsLoggerPluginModule,
  withNgxsLoggerPlugin
};
//# sourceMappingURL=@ngxs_logger-plugin.js.map
