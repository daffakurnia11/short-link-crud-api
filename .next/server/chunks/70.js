"use strict";
exports.id = 70;
exports.ids = [70];
exports.modules = {

/***/ 7070:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classnames = _interopRequireDefault(__webpack_require__(89367));
var _omit = _interopRequireDefault(__webpack_require__(63007));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _throttleDebounce = __webpack_require__(45865);
var _reactNode = __webpack_require__(84552);
var _warning = _interopRequireDefault(__webpack_require__(4474));
var _configProvider = __webpack_require__(34791);
var _index = _interopRequireDefault(__webpack_require__(3348));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const SpinSizes = (/* unused pure expression or super */ null && (['small', 'default', 'large']));
// Render indicator
let defaultIndicator = null;
function renderIndicator(prefixCls, props) {
  const {
    indicator
  } = props;
  const dotClassName = `${prefixCls}-dot`;
  // should not be render default indicator when indicator value is null
  if (indicator === null) {
    return null;
  }
  if ((0, _reactNode.isValidElement)(indicator)) {
    return (0, _reactNode.cloneElement)(indicator, {
      className: (0, _classnames.default)(indicator.props.className, dotClassName)
    });
  }
  if ((0, _reactNode.isValidElement)(defaultIndicator)) {
    return (0, _reactNode.cloneElement)(defaultIndicator, {
      className: (0, _classnames.default)(defaultIndicator.props.className, dotClassName)
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames.default)(dotClassName, `${prefixCls}-dot-spin`)
  }, /*#__PURE__*/React.createElement("i", {
    className: `${prefixCls}-dot-item`,
    key: 1
  }), /*#__PURE__*/React.createElement("i", {
    className: `${prefixCls}-dot-item`,
    key: 2
  }), /*#__PURE__*/React.createElement("i", {
    className: `${prefixCls}-dot-item`,
    key: 3
  }), /*#__PURE__*/React.createElement("i", {
    className: `${prefixCls}-dot-item`,
    key: 4
  }));
}
function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}
const Spin = props => {
  const {
      spinPrefixCls: prefixCls,
      spinning: customSpinning = true,
      delay = 0,
      className,
      rootClassName,
      size = 'default',
      tip,
      wrapperClassName,
      style,
      children,
      hashId
    } = props,
    restProps = __rest(props, ["spinPrefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "hashId"]);
  const [spinning, setSpinning] = React.useState(() => customSpinning && !shouldDelay(customSpinning, delay));
  React.useEffect(() => {
    if (customSpinning) {
      const showSpinning = (0, _throttleDebounce.debounce)(delay, () => {
        setSpinning(true);
      });
      showSpinning();
      return () => {
        var _a;
        (_a = showSpinning === null || showSpinning === void 0 ? void 0 : showSpinning.cancel) === null || _a === void 0 ? void 0 : _a.call(showSpinning);
      };
    }
    setSpinning(false);
  }, [delay, customSpinning]);
  const isNestedPattern = React.useMemo(() => typeof children !== 'undefined', [children]);
  if (false) {}
  const {
    direction,
    spin
  } = React.useContext(_configProvider.ConfigContext);
  const spinClassName = (0, _classnames.default)(prefixCls, spin === null || spin === void 0 ? void 0 : spin.className, {
    [`${prefixCls}-sm`]: size === 'small',
    [`${prefixCls}-lg`]: size === 'large',
    [`${prefixCls}-spinning`]: spinning,
    [`${prefixCls}-show-text`]: !!tip,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, rootClassName, hashId);
  const containerClassName = (0, _classnames.default)(`${prefixCls}-container`, {
    [`${prefixCls}-blur`]: spinning
  });
  // fix https://fb.me/react-unknown-prop
  const divProps = (0, _omit.default)(restProps, ['indicator', 'prefixCls']);
  const mergedStyle = Object.assign(Object.assign({}, spin === null || spin === void 0 ? void 0 : spin.style), style);
  const spinElement = /*#__PURE__*/React.createElement("div", Object.assign({}, divProps, {
    style: mergedStyle,
    className: spinClassName,
    "aria-live": "polite",
    "aria-busy": spinning
  }), renderIndicator(prefixCls, props), tip && isNestedPattern ? /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-text`
  }, tip) : null);
  if (isNestedPattern) {
    return /*#__PURE__*/React.createElement("div", Object.assign({}, divProps, {
      className: (0, _classnames.default)(`${prefixCls}-nested-loading`, wrapperClassName, hashId)
    }), spinning && /*#__PURE__*/React.createElement("div", {
      key: "loading"
    }, spinElement), /*#__PURE__*/React.createElement("div", {
      className: containerClassName,
      key: "container"
    }, children));
  }
  return spinElement;
};
const SpinFC = props => {
  const {
    prefixCls: customizePrefixCls
  } = props;
  const {
    getPrefixCls
  } = React.useContext(_configProvider.ConfigContext);
  const spinPrefixCls = getPrefixCls('spin', customizePrefixCls);
  const [wrapSSR, hashId] = (0, _index.default)(spinPrefixCls);
  const spinClassProps = Object.assign(Object.assign({}, props), {
    spinPrefixCls,
    hashId
  });
  return wrapSSR( /*#__PURE__*/React.createElement(Spin, Object.assign({}, spinClassProps)));
};
SpinFC.setDefaultIndicator = indicator => {
  defaultIndicator = indicator;
};
if (false) {}
var _default = SpinFC;
exports["default"] = _default;

/***/ }),

/***/ 3348:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _cssinjs = __webpack_require__(64021);
var _style = __webpack_require__(82760);
var _internal = __webpack_require__(37952);
const antSpinMove = new _cssinjs.Keyframes('antSpinMove', {
  to: {
    opacity: 1
  }
});
const antRotate = new _cssinjs.Keyframes('antRotate', {
  to: {
    transform: 'rotate(405deg)'
  }
});
const genSpinStyle = token => ({
  [`${token.componentCls}`]: Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), {
    position: 'absolute',
    display: 'none',
    color: token.colorPrimary,
    fontSize: 0,
    textAlign: 'center',
    verticalAlign: 'middle',
    opacity: 0,
    transition: `transform ${token.motionDurationSlow} ${token.motionEaseInOutCirc}`,
    '&-spinning': {
      position: 'static',
      display: 'inline-block',
      opacity: 1
    },
    '&-nested-loading': {
      position: 'relative',
      [`> div > ${token.componentCls}`]: {
        position: 'absolute',
        top: 0,
        insetInlineStart: 0,
        zIndex: 4,
        display: 'block',
        width: '100%',
        height: '100%',
        maxHeight: token.contentHeight,
        [`${token.componentCls}-dot`]: {
          position: 'absolute',
          top: '50%',
          insetInlineStart: '50%',
          margin: -token.spinDotSize / 2
        },
        [`${token.componentCls}-text`]: {
          position: 'absolute',
          top: '50%',
          width: '100%',
          paddingTop: (token.spinDotSize - token.fontSize) / 2 + 2,
          textShadow: `0 1px 2px ${token.colorBgContainer}`,
          fontSize: token.fontSize
        },
        [`&${token.componentCls}-show-text ${token.componentCls}-dot`]: {
          marginTop: -(token.spinDotSize / 2) - 10
        },
        '&-sm': {
          [`${token.componentCls}-dot`]: {
            margin: -token.spinDotSizeSM / 2
          },
          [`${token.componentCls}-text`]: {
            paddingTop: (token.spinDotSizeSM - token.fontSize) / 2 + 2
          },
          [`&${token.componentCls}-show-text ${token.componentCls}-dot`]: {
            marginTop: -(token.spinDotSizeSM / 2) - 10
          }
        },
        '&-lg': {
          [`${token.componentCls}-dot`]: {
            margin: -(token.spinDotSizeLG / 2)
          },
          [`${token.componentCls}-text`]: {
            paddingTop: (token.spinDotSizeLG - token.fontSize) / 2 + 2
          },
          [`&${token.componentCls}-show-text ${token.componentCls}-dot`]: {
            marginTop: -(token.spinDotSizeLG / 2) - 10
          }
        }
      },
      [`${token.componentCls}-container`]: {
        position: 'relative',
        transition: `opacity ${token.motionDurationSlow}`,
        '&::after': {
          position: 'absolute',
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          zIndex: 10,
          width: '100%',
          height: '100%',
          background: token.colorBgContainer,
          opacity: 0,
          transition: `all ${token.motionDurationSlow}`,
          content: '""',
          pointerEvents: 'none'
        }
      },
      [`${token.componentCls}-blur`]: {
        clear: 'both',
        opacity: 0.5,
        userSelect: 'none',
        pointerEvents: 'none',
        [`&::after`]: {
          opacity: 0.4,
          pointerEvents: 'auto'
        }
      }
    },
    // tip
    // ------------------------------
    [`&-tip`]: {
      color: token.spinDotDefault
    },
    // dots
    // ------------------------------
    [`${token.componentCls}-dot`]: {
      position: 'relative',
      display: 'inline-block',
      fontSize: token.spinDotSize,
      width: '1em',
      height: '1em',
      '&-item': {
        position: 'absolute',
        display: 'block',
        width: (token.spinDotSize - token.marginXXS / 2) / 2,
        height: (token.spinDotSize - token.marginXXS / 2) / 2,
        backgroundColor: token.colorPrimary,
        borderRadius: '100%',
        transform: 'scale(0.75)',
        transformOrigin: '50% 50%',
        opacity: 0.3,
        animationName: antSpinMove,
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        animationDirection: 'alternate',
        '&:nth-child(1)': {
          top: 0,
          insetInlineStart: 0
        },
        '&:nth-child(2)': {
          top: 0,
          insetInlineEnd: 0,
          animationDelay: '0.4s'
        },
        '&:nth-child(3)': {
          insetInlineEnd: 0,
          bottom: 0,
          animationDelay: '0.8s'
        },
        '&:nth-child(4)': {
          bottom: 0,
          insetInlineStart: 0,
          animationDelay: '1.2s'
        }
      },
      '&-spin': {
        transform: 'rotate(45deg)',
        animationName: antRotate,
        animationDuration: '1.2s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
      }
    },
    // Sizes
    // ------------------------------
    // small
    [`&-sm ${token.componentCls}-dot`]: {
      fontSize: token.spinDotSizeSM,
      i: {
        width: (token.spinDotSizeSM - token.marginXXS / 2) / 2,
        height: (token.spinDotSizeSM - token.marginXXS / 2) / 2
      }
    },
    // large
    [`&-lg ${token.componentCls}-dot`]: {
      fontSize: token.spinDotSizeLG,
      i: {
        width: (token.spinDotSizeLG - token.marginXXS) / 2,
        height: (token.spinDotSizeLG - token.marginXXS) / 2
      }
    },
    [`&${token.componentCls}-show-text ${token.componentCls}-text`]: {
      display: 'block'
    }
  })
});
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Spin', token => {
  const spinToken = (0, _internal.mergeToken)(token, {
    spinDotDefault: token.colorTextDescription,
    spinDotSize: token.controlHeightLG / 2,
    spinDotSizeSM: token.controlHeightLG * 0.35,
    spinDotSizeLG: token.controlHeight
  });
  return [genSpinStyle(spinToken)];
}, {
  contentHeight: 400
});
exports["default"] = _default;

/***/ }),

/***/ 45865:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({ value: true }));

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */
function throttle (delay, callback, options) {
  var _ref = options || {},
      _ref$noTrailing = _ref.noTrailing,
      noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
      _ref$noLeading = _ref.noLeading,
      noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
      _ref$debounceMode = _ref.debounceMode,
      debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */


  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel(options) {
    var _ref2 = options || {},
        _ref2$upcomingOnly = _ref2.upcomingOnly,
        upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */
        lastExec = Date.now();

        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec();
      }
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, callback, options) {
  var _ref = options || {},
      _ref$atBegin = _ref.atBegin,
      atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;

  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}

exports.debounce = debounce;
exports.throttle = throttle;
//# sourceMappingURL=index.js.map


/***/ })

};
;