/* eslint-disable */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom'), require('leaflet')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom', 'leaflet'], factory) :
  (global = global || self, factory(global.React, global.ReactDOM, global.L));
}(this, (function (React, reactDom, L) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  var reactDom__default = 'default' in reactDom ? reactDom['default'] : reactDom;
  var L__default = 'default' in L ? L['default'] : L;

  var SymfonyContext = React.createContext();
  var SymfonyContextProvider = function SymfonyContextProvider(_ref) {
    var value = _ref.value,
        children = _ref.children;
    return /*#__PURE__*/React__default.createElement(SymfonyContext.Provider, {
      value: value
    }, children);
  };
  var useSymfonyContext = function useSymfonyContext() {
    return React.useContext(SymfonyContext);
  };

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var reactIs_development = createCommonjsModule(function (module, exports) {



  {
    (function() {

  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
  // (unstable) APIs that have been removed. Can we remove the symbols?

  var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
  var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
  var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
  var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
  var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
  var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

  function isValidElementType(type) {
    return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
    type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
  }

  function typeOf(object) {
    if (typeof object === 'object' && object !== null) {
      var $$typeof = object.$$typeof;

      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          var type = object.type;

          switch (type) {
            case REACT_ASYNC_MODE_TYPE:
            case REACT_CONCURRENT_MODE_TYPE:
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
              return type;

            default:
              var $$typeofType = type && type.$$typeof;

              switch ($$typeofType) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                case REACT_PROVIDER_TYPE:
                  return $$typeofType;

                default:
                  return $$typeof;
              }

          }

        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }

    return undefined;
  } // AsyncMode is deprecated along with isAsyncMode

  var AsyncMode = REACT_ASYNC_MODE_TYPE;
  var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  var ContextConsumer = REACT_CONTEXT_TYPE;
  var ContextProvider = REACT_PROVIDER_TYPE;
  var Element = REACT_ELEMENT_TYPE;
  var ForwardRef = REACT_FORWARD_REF_TYPE;
  var Fragment = REACT_FRAGMENT_TYPE;
  var Lazy = REACT_LAZY_TYPE;
  var Memo = REACT_MEMO_TYPE;
  var Portal = REACT_PORTAL_TYPE;
  var Profiler = REACT_PROFILER_TYPE;
  var StrictMode = REACT_STRICT_MODE_TYPE;
  var Suspense = REACT_SUSPENSE_TYPE;
  var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

  function isAsyncMode(object) {
    {
      if (!hasWarnedAboutDeprecatedIsAsyncMode) {
        hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

        console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
      }
    }

    return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  }
  function isConcurrentMode(object) {
    return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  }
  function isContextConsumer(object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  }
  function isContextProvider(object) {
    return typeOf(object) === REACT_PROVIDER_TYPE;
  }
  function isElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function isForwardRef(object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  }
  function isFragment(object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  }
  function isLazy(object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  }
  function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  }
  function isPortal(object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  }
  function isProfiler(object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  }
  function isStrictMode(object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  }
  function isSuspense(object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  }

  exports.AsyncMode = AsyncMode;
  exports.ConcurrentMode = ConcurrentMode;
  exports.ContextConsumer = ContextConsumer;
  exports.ContextProvider = ContextProvider;
  exports.Element = Element;
  exports.ForwardRef = ForwardRef;
  exports.Fragment = Fragment;
  exports.Lazy = Lazy;
  exports.Memo = Memo;
  exports.Portal = Portal;
  exports.Profiler = Profiler;
  exports.StrictMode = StrictMode;
  exports.Suspense = Suspense;
  exports.isAsyncMode = isAsyncMode;
  exports.isConcurrentMode = isConcurrentMode;
  exports.isContextConsumer = isContextConsumer;
  exports.isContextProvider = isContextProvider;
  exports.isElement = isElement;
  exports.isForwardRef = isForwardRef;
  exports.isFragment = isFragment;
  exports.isLazy = isLazy;
  exports.isMemo = isMemo;
  exports.isPortal = isPortal;
  exports.isProfiler = isProfiler;
  exports.isStrictMode = isStrictMode;
  exports.isSuspense = isSuspense;
  exports.isValidElementType = isValidElementType;
  exports.typeOf = typeOf;
    })();
  }
  });
  var reactIs_development_1 = reactIs_development.AsyncMode;
  var reactIs_development_2 = reactIs_development.ConcurrentMode;
  var reactIs_development_3 = reactIs_development.ContextConsumer;
  var reactIs_development_4 = reactIs_development.ContextProvider;
  var reactIs_development_5 = reactIs_development.Element;
  var reactIs_development_6 = reactIs_development.ForwardRef;
  var reactIs_development_7 = reactIs_development.Fragment;
  var reactIs_development_8 = reactIs_development.Lazy;
  var reactIs_development_9 = reactIs_development.Memo;
  var reactIs_development_10 = reactIs_development.Portal;
  var reactIs_development_11 = reactIs_development.Profiler;
  var reactIs_development_12 = reactIs_development.StrictMode;
  var reactIs_development_13 = reactIs_development.Suspense;
  var reactIs_development_14 = reactIs_development.isAsyncMode;
  var reactIs_development_15 = reactIs_development.isConcurrentMode;
  var reactIs_development_16 = reactIs_development.isContextConsumer;
  var reactIs_development_17 = reactIs_development.isContextProvider;
  var reactIs_development_18 = reactIs_development.isElement;
  var reactIs_development_19 = reactIs_development.isForwardRef;
  var reactIs_development_20 = reactIs_development.isFragment;
  var reactIs_development_21 = reactIs_development.isLazy;
  var reactIs_development_22 = reactIs_development.isMemo;
  var reactIs_development_23 = reactIs_development.isPortal;
  var reactIs_development_24 = reactIs_development.isProfiler;
  var reactIs_development_25 = reactIs_development.isStrictMode;
  var reactIs_development_26 = reactIs_development.isSuspense;
  var reactIs_development_27 = reactIs_development.isValidElementType;
  var reactIs_development_28 = reactIs_development.typeOf;

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_development;
  }
  });

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning = function() {};

  {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    printWarning = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
              );
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || 'React class') + ': type specification of ' +
              location + ' `' + typeSpecName + '` is invalid; the type checker ' +
              'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
              'You may have forgotten to pass an argument to the type checker ' +
              'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
              'shape all require an argument).'
            );
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            printWarning(
              'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
            );
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function() {
    {
      loggedTypeFailures = {};
    }
  };

  var checkPropTypes_1 = checkPropTypes;

  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
  var printWarning$1 = function() {};

  {
    printWarning$1 = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use `PropTypes.checkPropTypes()` to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          } else if ( typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning$1(
                'You are manually calling a React.PropTypes validation ' +
                'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                'and will throw in the standalone `prop-types` package. ' +
                'You may be seeing this warning due to a third-party PropTypes ' +
                'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!reactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        {
          if (arguments.length > 1) {
            printWarning$1(
              'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
              'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
            );
          } else {
            printWarning$1('Invalid argument supplied to oneOf, expected an array.');
          }
        }
        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === 'symbol') {
            return String(value);
          }
          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (has$1(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
         printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') ;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning$1(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
            'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = objectAssign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
              '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
              '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    var ReactIs = reactIs;

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  }
  });

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var warning = function() {};

  {
    var printWarning$2 = function printWarning(format, args) {
      var len = arguments.length;
      args = new Array(len > 1 ? len - 1 : 0);
      for (var key = 1; key < len; key++) {
        args[key - 1] = arguments[key];
      }
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function(condition, format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      if (format === undefined) {
        throw new Error(
            '`warning(condition, format, ...args)` requires a warning ' +
            'message argument'
        );
      }
      if (!condition) {
        printWarning$2.apply(null, [format].concat(args));
      }
    };
  }

  var warning_1 = warning;

  /* eslint-disable no-restricted-globals, eqeqeq,  */
  /**
   * React currently throws a warning when using useLayoutEffect on the server.
   * To get around it, we can conditionally useEffect on the server (no-op) and
   * useLayoutEffect in the browser. We occasionally need useLayoutEffect to
   * ensure we don't get a render flash for certain operations, but we may also
   * need affected components to render on the server. One example is when setting
   * a component's descendants to retrieve their index values.
   *
   * Important to note that using this hook as an escape hatch will break the
   * eslint dependency warnings unless you rename the import to `useLayoutEffect`.
   * Use sparingly only when the effect won't effect the rendered HTML to avoid
   * any server/client mismatch.
   *
   * If a useLayoutEffect is needed and the result would create a mismatch, it's
   * likely that the component in question shouldn't be rendered on the server at
   * all, so a better approach would be to lazily render those in a parent
   * component after client-side hydration.
   *
   * TODO: We are calling useLayoutEffect in a couple of places that will likely
   * cause some issues for SSR users, whether the warning shows or not. Audit and
   * fix these.
   *
   * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
   * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
   *
   * @param effect
   * @param deps
   */

  var useIsomorphicLayoutEffect = /*#__PURE__*/canUseDOM() ? React__default.useLayoutEffect : React__default.useEffect;
  var checkedPkgs = {};
  /**
   * When in dev mode, checks that styles for a given @reach package are loaded.
   *
   * @param packageName Name of the package to check.
   * @example checkStyles("dialog") will check for styles for @reach/dialog
   */
  // @ts-ignore

  var checkStyles = function checkStyles(packageName) {
    return void packageName;
  };

  {
    // In CJS files, "development" is stripped from our build, but we need
    // it to prevent style checks from clogging up user logs while testing.
    // This is a workaround until we can tweak the build a bit to accommodate.
    var _ref = typeof process !== "undefined" ? process : {
      env: {
        NODE_ENV: "development"
      }
    },
        env = _ref.env;

    checkStyles = function checkStyles(packageName) {
      // only check once per package
      if (checkedPkgs[packageName]) return;
      checkedPkgs[packageName] = true;

      if (env.NODE_ENV !== "test" && parseInt(window.getComputedStyle(document.body).getPropertyValue("--reach-" + packageName), 10) !== 1) {
        console.warn("@reach/" + packageName + " styles not found. If you are using a bundler like webpack or parcel include this in the entry file of your app before any of your own styles:\n\n    import \"@reach/" + packageName + "/styles.css\";\n\n  Otherwise you'll need to include them some other way:\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"node_modules/@reach/" + packageName + "/styles.css\" />\n\n  For more information visit https://ui.reach.tech/styling.\n  ");
      }
    };
  }
  /**
   * Passes or assigns an arbitrary value to a ref function or object.
   *
   * @param ref
   * @param value
   */

  function assignRef(ref, value) {
    if (ref == null) return;

    if (isFunction(ref)) {
      ref(value);
    } else {
      try {
        ref.current = value;
      } catch (error) {
        throw new Error("Cannot assign value \"" + value + "\" to ref \"" + ref + "\"");
      }
    }
  }
  function canUseDOM() {
    return typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  }
  function createNamedContext(name, defaultValue) {
    var Ctx = React.createContext(defaultValue);
    Ctx.displayName = name;
    return Ctx;
  }
  /**
   * This is a hack for sure. The thing is, getting a component to intelligently
   * infer props based on a component or JSX string passed into an `as` prop is
   * kind of a huge pain. Getting it to work and satisfy the constraints of
   * `forwardRef` seems dang near impossible. To avoid needing to do this awkward
   * type song-and-dance every time we want to forward a ref into a component
   * that accepts an `as` prop, we abstract all of that mess to this function for
   * the time time being.
   *
   * TODO: Eventually we should probably just try to get the type defs above
   * working across the board, but ain't nobody got time for that mess!
   *
   * @param Comp
   */

  function forwardRefWithAs(comp) {
    return React__default.forwardRef(comp);
  }
  /**
   * Get an element's owner document. Useful when components are used in iframes
   * or other environments like dev tools.
   *
   * @param element
   */

  function getOwnerDocument(element) {
    return element && element.ownerDocument ? element.ownerDocument : canUseDOM() ? document : null;
  }
  /**
   * Checks whether or not a value is a function.
   *
   * @param value
   */

  function isFunction(value) {
    return !!(value && {}.toString.call(value) == "[object Function]");
  }
  /**
   * Joins strings to format IDs for compound components.
   *
   * @param args
   */

  function makeId() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return args.filter(function (val) {
      return val != null;
    }).join("--");
  }
  /**
   * No-op function.
   */

  function noop() {}
  /**
   * Passes or assigns a value to multiple refs (typically a DOM node). Useful for
   * dealing with components that need an explicit ref for DOM calculations but
   * also forwards refs assigned by an app.
   *
   * @param refs Refs to fork
   */

  function useForkedRef() {
    for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      refs[_key4] = arguments[_key4];
    }

    return React.useMemo(function () {
      if (refs.every(function (ref) {
        return ref == null;
      })) {
        return null;
      }

      return function (node) {
        refs.forEach(function (ref) {
          assignRef(ref, node);
        });
      }; // eslint-disable-next-line react-hooks/exhaustive-deps
    }, refs);
  }
  /**
   * Call an effect after a component update, skipping the initial mount.
   *
   * @param effect Effect to call
   * @param deps Effect dependency list
   */

  function useUpdateEffect(effect, deps) {
    var mounted = React.useRef(false);
    React.useEffect(function () {
      if (mounted.current) {
        effect();
      } else {
        mounted.current = true;
      } // eslint-disable-next-line react-hooks/exhaustive-deps

    }, deps);
  }
  /**
   * Wraps a lib-defined event handler and a user-defined event handler, returning
   * a single handler that allows a user to prevent lib-defined handlers from
   * firing.
   *
   * @param theirHandler User-supplied event handler
   * @param ourHandler Library-supplied event handler
   */

  function wrapEvent(theirHandler, ourHandler) {
    return function (event) {
      theirHandler && theirHandler(event);

      if (!event.defaultPrevented) {
        return ourHandler(event);
      }
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function createDescendantContext(name, initialValue) {
    if (initialValue === void 0) {
      initialValue = {};
    }

    return createNamedContext(name, _extends({
      descendants: [],
      registerDescendant: noop,
      unregisterDescendant: noop
    }, initialValue));
  }
  /**
   * This hook registers our descendant by passing it into an array. We can then
   * search that array by to find its index when registering it in the component.
   * We use this for focus management, keyboard navigation, and typeahead
   * functionality for some components.
   *
   * The hook accepts the element node and (optionally) a key. The key is useful
   * if multiple descendants have identical text values and we need to
   * differentiate siblings for some reason.
   *
   * Our main goals with this are:
   *   1) maximum composability,
   *   2) minimal API friction
   *   3) SSR compatibility*
   *   4) concurrent safe
   *   5) index always up-to-date with the tree despite changes
   *   6) works with memoization of any component in the tree (hopefully)
   *
   * * As for SSR, the good news is that we don't actually need the index on the
   * server for most use-cases, as we are only using it to determine the order of
   * composed descendants for keyboard navigation. However, in the few cases where
   * this is not the case, we can require an explicit index from the app.
   */

  function useDescendant(_ref, indexProp) {
    var context = _ref.context,
        element = _ref.element,
        rest = _objectWithoutPropertiesLoose$1(_ref, ["context", "element"]);

    var _useState = React.useState(),
        forceUpdate = _useState[1];

    var _useContext = React.useContext(context),
        registerDescendant = _useContext.registerDescendant,
        unregisterDescendant = _useContext.unregisterDescendant,
        descendants = _useContext.descendants; // Prevent any flashing


    useIsomorphicLayoutEffect(function () {
      if (!element) forceUpdate({}); // @ts-ignore

      registerDescendant(_extends({
        element: element
      }, rest));
      return function () {
        return unregisterDescendant(element);
      }; // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [element].concat(Object.values(rest)));
    return indexProp !== null && indexProp !== void 0 ? indexProp : descendants.findIndex(function (item) {
      return item.element === element;
    });
  }
  function useDescendants() {
    return React.useState([]);
  }
  function DescendantProvider(_ref2) {
    var Ctx = _ref2.context,
        children = _ref2.children,
        items = _ref2.items,
        set = _ref2.set;
    var registerDescendant = React__default.useCallback(function (_ref3) {
      var element = _ref3.element,
          rest = _objectWithoutPropertiesLoose$1(_ref3, ["element"]);

      if (!element) {
        return;
      }

      set(function (items) {
        var newItem;
        var newItems; // If there are no items, register at index 0 and bail.

        if (items.length === 0) {
          newItem = _extends({
            element: element,
            index: 0
          }, rest);
          newItems = [].concat(items, [newItem]);
        } else if (items.find(function (item) {
          return item.element === element;
        })) {
          // If the element is already registered, just use the same array
          newItems = items;
        } else {
          // When registering a descendant, we need to make sure we insert in
          // into the array in the same order that it appears in the DOM. So as
          // new descendants are added or maybe some are removed, we always know
          // that the array is up-to-date and correct.
          //
          // So here we look at our registered descendants and see if the new
          // element we are adding appears earlier than an existing descendant's
          // DOM node via `node.compareDocumentPosition`. If it does, we insert
          // the new element at this index. Because `registerDescendant` will be
          // called in an effect every time the descendants state value changes,
          // we should be sure that this index is accurate when descendent
          // elements come or go from our component.
          var index = items.findIndex(function (item) {
            if (!item.element || !element) {
              return false;
            } // Does this element's DOM node appear before another item in the
            // array in our DOM tree? If so, return true to grab the index at
            // this point in the array so we know where to insert the new
            // element.


            return Boolean(item.element.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_PRECEDING);
          });
          newItem = _extends({
            element: element,
            index: index
          }, rest); // If an index is not found we will push the element to the end.

          if (index === -1) {
            newItems = [].concat(items, [newItem]);
          } else {
            newItems = [].concat(items.slice(0, index), [newItem], items.slice(index));
          }
        }

        return newItems.map(function (item, index) {
          return _extends({}, item, {
            index: index
          });
        });
      });
    }, // set is a state setter initialized by the useDescendants hook.
    // We can safely ignore the lint warning here because it will not change
    // between renders.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    var unregisterDescendant = React.useCallback(function (element) {
      if (!element) {
        return;
      }

      set(function (items) {
        return items.filter(function (item) {
          return element !== item.element;
        });
      });
    }, // set is a state setter initialized by the useDescendants hook.
    // We can safely ignore the lint warning here because it will not change
    // between renders.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    var value = React.useMemo(function () {
      return {
        descendants: items,
        registerDescendant: registerDescendant,
        unregisterDescendant: unregisterDescendant
      };
    }, [items, registerDescendant, unregisterDescendant]);
    return React__default.createElement(Ctx.Provider, {
      value: value
    }, children);
  }

  var dist = createCommonjsModule(function (module) {
  module.exports =
  /******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/
  /******/ 		// Check if module is in cache
  /******/ 		if(installedModules[moduleId])
  /******/ 			return installedModules[moduleId].exports;
  /******/
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			exports: {},
  /******/ 			id: moduleId,
  /******/ 			loaded: false
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.loaded = true;
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(0);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ (function(module, exports, __webpack_require__) {

  	module.exports = __webpack_require__(1);


  /***/ }),
  /* 1 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	Object.defineProperty(exports, "__esModule", {
  	  value: true
  	});
  	
  	var _utils = __webpack_require__(2);
  	
  	Object.defineProperty(exports, 'combineChunks', {
  	  enumerable: true,
  	  get: function get() {
  	    return _utils.combineChunks;
  	  }
  	});
  	Object.defineProperty(exports, 'fillInChunks', {
  	  enumerable: true,
  	  get: function get() {
  	    return _utils.fillInChunks;
  	  }
  	});
  	Object.defineProperty(exports, 'findAll', {
  	  enumerable: true,
  	  get: function get() {
  	    return _utils.findAll;
  	  }
  	});
  	Object.defineProperty(exports, 'findChunks', {
  	  enumerable: true,
  	  get: function get() {
  	    return _utils.findChunks;
  	  }
  	});

  /***/ }),
  /* 2 */
  /***/ (function(module, exports) {
  	
  	Object.defineProperty(exports, "__esModule", {
  	  value: true
  	});
  	
  	
  	/**
  	 * Creates an array of chunk objects representing both higlightable and non highlightable pieces of text that match each search word.
  	 * @return Array of "chunks" (where a Chunk is { start:number, end:number, highlight:boolean })
  	 */
  	var findAll = exports.findAll = function findAll(_ref) {
  	  var autoEscape = _ref.autoEscape,
  	      _ref$caseSensitive = _ref.caseSensitive,
  	      caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
  	      _ref$findChunks = _ref.findChunks,
  	      findChunks = _ref$findChunks === undefined ? defaultFindChunks : _ref$findChunks,
  	      sanitize = _ref.sanitize,
  	      searchWords = _ref.searchWords,
  	      textToHighlight = _ref.textToHighlight;
  	  return fillInChunks({
  	    chunksToHighlight: combineChunks({
  	      chunks: findChunks({
  	        autoEscape: autoEscape,
  	        caseSensitive: caseSensitive,
  	        sanitize: sanitize,
  	        searchWords: searchWords,
  	        textToHighlight: textToHighlight
  	      })
  	    }),
  	    totalLength: textToHighlight ? textToHighlight.length : 0
  	  });
  	};
  	
  	/**
  	 * Takes an array of {start:number, end:number} objects and combines chunks that overlap into single chunks.
  	 * @return {start:number, end:number}[]
  	 */
  	
  	
  	var combineChunks = exports.combineChunks = function combineChunks(_ref2) {
  	  var chunks = _ref2.chunks;
  	
  	  chunks = chunks.sort(function (first, second) {
  	    return first.start - second.start;
  	  }).reduce(function (processedChunks, nextChunk) {
  	    // First chunk just goes straight in the array...
  	    if (processedChunks.length === 0) {
  	      return [nextChunk];
  	    } else {
  	      // ... subsequent chunks get checked to see if they overlap...
  	      var prevChunk = processedChunks.pop();
  	      if (nextChunk.start <= prevChunk.end) {
  	        // It may be the case that prevChunk completely surrounds nextChunk, so take the
  	        // largest of the end indeces.
  	        var endIndex = Math.max(prevChunk.end, nextChunk.end);
  	        processedChunks.push({ highlight: false, start: prevChunk.start, end: endIndex });
  	      } else {
  	        processedChunks.push(prevChunk, nextChunk);
  	      }
  	      return processedChunks;
  	    }
  	  }, []);
  	
  	  return chunks;
  	};
  	
  	/**
  	 * Examine text for any matches.
  	 * If we find matches, add them to the returned array as a "chunk" object ({start:number, end:number}).
  	 * @return {start:number, end:number}[]
  	 */
  	var defaultFindChunks = function defaultFindChunks(_ref3) {
  	  var autoEscape = _ref3.autoEscape,
  	      caseSensitive = _ref3.caseSensitive,
  	      _ref3$sanitize = _ref3.sanitize,
  	      sanitize = _ref3$sanitize === undefined ? defaultSanitize : _ref3$sanitize,
  	      searchWords = _ref3.searchWords,
  	      textToHighlight = _ref3.textToHighlight;
  	
  	  textToHighlight = sanitize(textToHighlight);
  	
  	  return searchWords.filter(function (searchWord) {
  	    return searchWord;
  	  }) // Remove empty words
  	  .reduce(function (chunks, searchWord) {
  	    searchWord = sanitize(searchWord);
  	
  	    if (autoEscape) {
  	      searchWord = escapeRegExpFn(searchWord);
  	    }
  	
  	    var regex = new RegExp(searchWord, caseSensitive ? 'g' : 'gi');
  	
  	    var match = void 0;
  	    while (match = regex.exec(textToHighlight)) {
  	      var _start = match.index;
  	      var _end = regex.lastIndex;
  	      // We do not return zero-length matches
  	      if (_end > _start) {
  	        chunks.push({ highlight: false, start: _start, end: _end });
  	      }
  	
  	      // Prevent browsers like Firefox from getting stuck in an infinite loop
  	      // See http://www.regexguru.com/2008/04/watch-out-for-zero-length-matches/
  	      if (match.index === regex.lastIndex) {
  	        regex.lastIndex++;
  	      }
  	    }
  	
  	    return chunks;
  	  }, []);
  	};
  	// Allow the findChunks to be overridden in findAll,
  	// but for backwards compatibility we export as the old name
  	exports.findChunks = defaultFindChunks;
  	
  	/**
  	 * Given a set of chunks to highlight, create an additional set of chunks
  	 * to represent the bits of text between the highlighted text.
  	 * @param chunksToHighlight {start:number, end:number}[]
  	 * @param totalLength number
  	 * @return {start:number, end:number, highlight:boolean}[]
  	 */
  	
  	var fillInChunks = exports.fillInChunks = function fillInChunks(_ref4) {
  	  var chunksToHighlight = _ref4.chunksToHighlight,
  	      totalLength = _ref4.totalLength;
  	
  	  var allChunks = [];
  	  var append = function append(start, end, highlight) {
  	    if (end - start > 0) {
  	      allChunks.push({
  	        start: start,
  	        end: end,
  	        highlight: highlight
  	      });
  	    }
  	  };
  	
  	  if (chunksToHighlight.length === 0) {
  	    append(0, totalLength, false);
  	  } else {
  	    var lastIndex = 0;
  	    chunksToHighlight.forEach(function (chunk) {
  	      append(lastIndex, chunk.start, false);
  	      append(chunk.start, chunk.end, true);
  	      lastIndex = chunk.end;
  	    });
  	    append(lastIndex, totalLength, false);
  	  }
  	  return allChunks;
  	};
  	
  	function defaultSanitize(string) {
  	  return string;
  	}
  	
  	function escapeRegExpFn(string) {
  	  return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  	}

  /***/ })
  /******/ ]);

  });

  unwrapExports(dist);
  var dist_1 = dist.combineChunks;
  var dist_2 = dist.fillInChunks;
  var dist_3 = dist.findAll;
  var dist_4 = dist.findChunks;

  /*
   * Welcome to @reach/auto-id!

   * Let's see if we can make sense of why this hook exists and its
   * implementation.
   *
   * Some background:
   *   1. Accessibiliy APIs rely heavily on element IDs
   *   2. Requiring developers to put IDs on every element in Reach UI is both
   *      cumbersome and error-prone
   *   3. With a component model, we can generate IDs for them!
   *
   * Solution 1: Generate random IDs.
   *
   * This works great as long as you don't server render your app. When React (in
   * the client) tries to reuse the markup from the server, the IDs won't match
   * and React will then recreate the entire DOM tree.
   *
   * Solution 2: Increment an integer
   *
   * This sounds great. Since we're rendering the exact same tree on the server
   * and client, we can increment a counter and get a deterministic result between
   * client and server. Also, JS integers can go up to nine-quadrillion. I'm
   * pretty sure the tab will be closed before an app never needs
   * 10 quadrillion IDs!
   *
   * Problem solved, right?
   *
   * Ah, but there's a catch! React's concurrent rendering makes this approach
   * non-deterministic. While the client and server will end up with the same
   * elements in the end, depending on suspense boundaries (and possibly some user
   * input during the initial render) the incrementing integers won't always match
   * up.
   *
   * Solution 3: Don't use IDs at all on the server; patch after first render.
   *
   * What we've done here is solution 2 with some tricks. With this approach, the
   * ID returned is an empty string on the first render. This way the server and
   * client have the same markup no matter how wild the concurrent rendering may
   * have gotten.
   *
   * After the render, we patch up the components with an incremented ID. This
   * causes a double render on any components with `useId`. Shouldn't be a problem
   * since the components using this hook should be small, and we're only updating
   * the ID attribute on the DOM, nothing big is happening.
   *
   * It doesn't have to be an incremented number, though--we could do generate
   * random strings instead, but incrementing a number is probably the cheapest
   * thing we can do.
   *
   * Additionally, we only do this patchup on the very first client render ever.
   * Any calls to `useId` that happen dynamically in the client will be
   * populated immediately with a value. So, we only get the double render after
   * server hydration and never again, SO BACK OFF ALRIGHT?
   */
  var serverHandoffComplete = false;
  var id = 0;

  var genId = function genId() {
    return ++id;
  };
  /**
   * useId
   *
   * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
   *
   * Note: The returned ID will initially be `null` and will update after a
   * component mounts. Users may need to supply their own ID if they need
   * consistent values for SSR.
   *
   * @see Docs https://reacttraining.com/reach-ui/auto-id
   */


  var useId = function useId(idFromProps) {
    /*
     * If this instance isn't part of the initial render, we don't have to do the
     * double render/patch-up dance. We can just generate the ID and return it.
     */
    var initialId = idFromProps || (serverHandoffComplete ? genId() : null);

    var _useState = React.useState(initialId),
        id = _useState[0],
        setId = _useState[1];

    useIsomorphicLayoutEffect(function () {
      if (id === null) {
        /*
         * Patch the ID after render. We do this in `useLayoutEffect` to avoid any
         * rendering flicker, though it'll make the first render slower (unlikely
         * to matter, but you're welcome to measure your app and let us know if
         * it's a problem).
         */
        setId(genId());
      } // eslint-disable-next-line react-hooks/exhaustive-deps

    }, []);
    React.useEffect(function () {
      if (serverHandoffComplete === false) {
        /*
         * Flag all future uses of `useId` to skip the update dance. This is in
         * `useEffect` because it goes after `useLayoutEffect`, ensuring we don't
         * accidentally bail out of the patch-up dance prematurely.
         */
        serverHandoffComplete = true;
      }
    }, []);
    return id != null ? String(id) : undefined;
  };

  /**
   * Welcome to @reach/portal!
   *
   * Creates and appends a DOM node to the end of `document.body` and renders a
   * React tree into it. Useful for rendering a natural React element hierarchy
   * with a different DOM hierarchy to prevent parent styles from clipping or
   * hiding content (for popovers, dropdowns, and modals).
   *
   * @see Docs   https://reacttraining.com/reach-ui/portal
   * @see Source https://github.com/reach/reach-ui/tree/master/packages/portal
   * @see React  https://reactjs.org/docs/portals.html
   */
  /**
   * Portal
   *
   * @see Docs https://reacttraining.com/reach-ui/portal#portal
   */

  var Portal = function Portal(_ref) {
    var children = _ref.children,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? "reach-portal" : _ref$type;
    var mountNode = React.useRef(null);
    var portalNode = React.useRef(null);

    var _useState = React.useState(),
        forceUpdate = _useState[1];

    useIsomorphicLayoutEffect(function () {
      // It's possible that the content we are portal has, itself, been portaled.
      // In that case, it's important to append to the correct document element.
      var ownerDocument = mountNode.current.ownerDocument;
      portalNode.current = ownerDocument === null || ownerDocument === void 0 ? void 0 : ownerDocument.createElement(type);
      ownerDocument.body.appendChild(portalNode.current);
      forceUpdate({});
      return function () {
        if (portalNode.current && portalNode.current.ownerDocument) {
          portalNode.current.ownerDocument.body.removeChild(portalNode.current);
        }
      };
    }, [type]);
    return portalNode.current ? reactDom.createPortal(children, portalNode.current) : React__default.createElement("span", {
      ref: mountNode
    });
  };

  {
    Portal.displayName = "Portal";
  }

  var props = ['bottom', 'height', 'left', 'right', 'top', 'width'];

  var rectChanged = function rectChanged(a, b) {
    if (a === void 0) {
      a = {};
    }

    if (b === void 0) {
      b = {};
    }

    return props.some(function (prop) {
      return a[prop] !== b[prop];
    });
  };

  var observedNodes =
  /*#__PURE__*/
  new Map();
  var rafId;

  var run = function run() {
    var changedStates = [];
    observedNodes.forEach(function (state, node) {
      var newRect = node.getBoundingClientRect();

      if (rectChanged(newRect, state.rect)) {
        state.rect = newRect;
        changedStates.push(state);
      }
    });
    changedStates.forEach(function (state) {
      state.callbacks.forEach(function (cb) {
        return cb(state.rect);
      });
    });
    rafId = window.requestAnimationFrame(run);
  };

  function observeRect(node, cb) {
    return {
      observe: function observe() {
        var wasEmpty = observedNodes.size === 0;

        if (observedNodes.has(node)) {
          observedNodes.get(node).callbacks.push(cb);
        } else {
          observedNodes.set(node, {
            rect: undefined,
            hasRectChanged: false,
            callbacks: [cb]
          });
        }

        if (wasEmpty) run();
      },
      unobserve: function unobserve() {
        var state = observedNodes.get(node);

        if (state) {
          // Remove the callback
          var index = state.callbacks.indexOf(cb);
          if (index >= 0) state.callbacks.splice(index, 1); // Remove the node reference

          if (!state.callbacks.length) observedNodes["delete"](node); // Stop the loop

          if (!observedNodes.size) cancelAnimationFrame(rafId);
        }
      }
    };
  }

  /**
   * Welcome to @reach/rect!
   *
   * Measures DOM elements (aka. bounding client rect).
   *
   * @see getBoundingClientRect https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
   * @see Docs                  https://reacttraining.com/reach-ui/rect
   * @see Source                https://github.com/reach/reach-ui/tree/master/packages/rect
   */

  /**
   * Rect
   *
   * @param props
   */

  var Rect = function Rect(_ref) {
    var onChange = _ref.onChange,
        _ref$observe = _ref.observe,
        observe = _ref$observe === void 0 ? true : _ref$observe,
        children = _ref.children;
    var ref = React.useRef(null);
    var rect = useRect(ref, observe, onChange);
    return children({
      ref: ref,
      rect: rect
    });
  };

  {
    Rect.displayName = "Rect";
    Rect.propTypes = {
      children: propTypes.func.isRequired,
      observe: propTypes.bool,
      onChange: propTypes.func
    };
  } ////////////////////////////////////////////////////////////////////////////////

  /**
   * useRect
   *
   * @param nodeRef
   * @param observe
   * @param onChange
   */


  function useRect(nodeRef, observe, onChange) {
    if (observe === void 0) {
      observe = true;
    }

    var initialRectSet = React.useRef(false);

    var _useState = React.useState(null),
        rect = _useState[0],
        setRect = _useState[1];

    var observerRef = React.useRef(null);
    useIsomorphicLayoutEffect(function () {
      var cleanup = function cleanup() {
        observerRef.current && observerRef.current.unobserve();
      };

      if (!nodeRef.current) {
        console.warn("You need to place the ref");
        return cleanup;
      }

      if (!observerRef.current) {
        observerRef.current = observeRect(nodeRef.current, function (rect) {
          onChange && onChange(rect);
          setRect(rect);
        });
      }

      if (!initialRectSet.current) {
        initialRectSet.current = true;
        setRect(nodeRef.current.getBoundingClientRect());
      }

      observe && observerRef.current.observe();
      return cleanup; // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [observe, onChange]);
    return rect;
  }

  var candidateSelectors = [
    'input',
    'select',
    'textarea',
    'a[href]',
    'button',
    '[tabindex]',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable="false"])',
  ];
  var candidateSelector = candidateSelectors.join(',');

  var matches = typeof Element === 'undefined'
    ? function () {}
    : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

  function tabbable(el, options) {
    options = options || {};

    var regularTabbables = [];
    var orderedTabbables = [];

    var candidates = el.querySelectorAll(candidateSelector);

    if (options.includeContainer) {
      if (matches.call(el, candidateSelector)) {
        candidates = Array.prototype.slice.apply(candidates);
        candidates.unshift(el);
      }
    }

    var i, candidate, candidateTabindex;
    for (i = 0; i < candidates.length; i++) {
      candidate = candidates[i];

      if (!isNodeMatchingSelectorTabbable(candidate)) continue;

      candidateTabindex = getTabindex(candidate);
      if (candidateTabindex === 0) {
        regularTabbables.push(candidate);
      } else {
        orderedTabbables.push({
          documentOrder: i,
          tabIndex: candidateTabindex,
          node: candidate,
        });
      }
    }

    var tabbableNodes = orderedTabbables
      .sort(sortOrderedTabbables)
      .map(function(a) { return a.node })
      .concat(regularTabbables);

    return tabbableNodes;
  }

  tabbable.isTabbable = isTabbable;
  tabbable.isFocusable = isFocusable;

  function isNodeMatchingSelectorTabbable(node) {
    if (
      !isNodeMatchingSelectorFocusable(node)
      || isNonTabbableRadio(node)
      || getTabindex(node) < 0
    ) {
      return false;
    }
    return true;
  }

  function isTabbable(node) {
    if (!node) throw new Error('No node provided');
    if (matches.call(node, candidateSelector) === false) return false;
    return isNodeMatchingSelectorTabbable(node);
  }

  function isNodeMatchingSelectorFocusable(node) {
    if (
      node.disabled
      || isHiddenInput(node)
      || isHidden(node)
    ) {
      return false;
    }
    return true;
  }

  var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
  function isFocusable(node) {
    if (!node) throw new Error('No node provided');
    if (matches.call(node, focusableCandidateSelector) === false) return false;
    return isNodeMatchingSelectorFocusable(node);
  }

  function getTabindex(node) {
    var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
    if (!isNaN(tabindexAttr)) return tabindexAttr;
    // Browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if (isContentEditable(node)) return 0;
    return node.tabIndex;
  }

  function sortOrderedTabbables(a, b) {
    return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
  }

  function isContentEditable(node) {
    return node.contentEditable === 'true';
  }

  function isInput(node) {
    return node.tagName === 'INPUT';
  }

  function isHiddenInput(node) {
    return isInput(node) && node.type === 'hidden';
  }

  function isRadio(node) {
    return isInput(node) && node.type === 'radio';
  }

  function isNonTabbableRadio(node) {
    return isRadio(node) && !isTabbableRadio(node);
  }

  function getCheckedRadio(nodes) {
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].checked) {
        return nodes[i];
      }
    }
  }

  function isTabbableRadio(node) {
    if (!node.name) return true;
    // This won't account for the edge case where you have radio groups with the same
    // in separate forms on the same page.
    var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
    var checked = getCheckedRadio(radioSet);
    return !checked || checked === node;
  }

  function isHidden(node) {
    // offsetParent being null will allow detecting cases where an element is invisible or inside an invisible element,
    // as long as the element does not use position: fixed. For them, their visibility has to be checked directly as well.
    return node.offsetParent === null || getComputedStyle(node).visibility === 'hidden';
  }

  var tabbable_1 = tabbable;

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$1.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose$2(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  /**
   * Popover
   */

  var Popover = /*#__PURE__*/React.forwardRef(function Popover(props, ref) {
    return React__default.createElement(Portal, null, React__default.createElement(PopoverImpl, Object.assign({
      ref: ref
    }, props)));
  });

  {
    Popover.displayName = "Popover";
  }

  /**
   * PopoverImpl
   *
   * Popover is conditionally rendered so we can't start measuring until it shows
   * up, so useRect needs to live down here not up in Popover
   */

  var PopoverImpl = /*#__PURE__*/React.forwardRef(function PopoverImpl(_ref, forwardedRef) {
    var targetRef = _ref.targetRef,
        _ref$position = _ref.position,
        position = _ref$position === void 0 ? positionDefault : _ref$position,
        style = _ref.style,
        rest = _objectWithoutPropertiesLoose$2(_ref, ["targetRef", "position", "style"]);

    var popoverRef = React.useRef(null);
    var popoverRect = useRect(popoverRef);
    var targetRect = useRect(targetRef);
    var ref = useForkedRef(popoverRef, forwardedRef);
    useSimulateTabNavigationForReactTree(targetRef, popoverRef);
    return React__default.createElement("div", Object.assign({
      "data-reach-popover": "",
      ref: ref,
      style: _extends$1({}, style, {
        position: "absolute"
      }, getStyles(position, targetRect, popoverRect))
    }, rest));
  });

  {
    PopoverImpl.displayName = "PopoverImpl";
  } ////////////////////////////////////////////////////////////////////////////////


  function getStyles(position, targetRect, popoverRect) {
    var needToMeasurePopup = !popoverRect;

    if (needToMeasurePopup) {
      return {
        visibility: "hidden"
      };
    }

    return position(targetRect, popoverRect);
  }

  var positionDefault = function positionDefault(targetRect, popoverRect) {
    if (!targetRect || !popoverRect) {
      return {};
    }

    var _getCollisions = getCollisions(targetRect, popoverRect),
        directionUp = _getCollisions.directionUp,
        directionRight = _getCollisions.directionRight;

    return {
      left: directionRight ? targetRect.right - popoverRect.width + window.pageXOffset + "px" : targetRect.left + window.pageXOffset + "px",
      top: directionUp ? targetRect.top - popoverRect.height + window.pageYOffset + "px" : targetRect.top + targetRect.height + window.pageYOffset + "px"
    };
  };
  var positionMatchWidth = function positionMatchWidth(targetRect, popoverRect) {
    if (!targetRect || !popoverRect) {
      return {};
    }

    var _getCollisions2 = getCollisions(targetRect, popoverRect),
        directionUp = _getCollisions2.directionUp;

    return {
      width: targetRect.width,
      left: targetRect.left,
      top: directionUp ? targetRect.top - popoverRect.height + window.pageYOffset + "px" : targetRect.top + targetRect.height + window.pageYOffset + "px"
    };
  };

  function getCollisions(targetRect, popoverRect, offsetLeft, offsetBottom) {
    if (offsetLeft === void 0) {
      offsetLeft = 0;
    }

    if (offsetBottom === void 0) {
      offsetBottom = 0;
    }

    var collisions = {
      top: targetRect.top - popoverRect.height < 0,
      right: window.innerWidth < targetRect.left + popoverRect.width - offsetLeft,
      bottom: window.innerHeight < targetRect.bottom + popoverRect.height - offsetBottom,
      left: targetRect.left + targetRect.width - popoverRect.width < 0
    };
    var directionRight = collisions.right && !collisions.left;
    var directionUp = collisions.bottom && !collisions.top;
    return {
      directionRight: directionRight,
      directionUp: directionUp
    };
  } // Heads up, my jQuery past haunts this function. This hook scopes the tab
  // order to the React element tree, instead of the DOM tree. This way, when the
  // user navigates with tab from the targetRef, the tab order moves into the
  // popup, and then out of the popup back to the rest of the document.
  // (We call targetRef, triggerRef inside this function to avoid confusion with
  // event.target)


  function useSimulateTabNavigationForReactTree(triggerRef, popoverRef) {
    var ownerDocument = getOwnerDocument(triggerRef.current);

    function handleKeyDown(event) {
      if (event.key === "Tab" && popoverRef.current && tabbable_1(popoverRef.current).length === 0) {
        return;
      }

      if (event.key === "Tab" && event.shiftKey) {
        if (shiftTabbedFromElementAfterTrigger(event)) {
          focusLastTabbableInPopover(event);
        } else if (shiftTabbedOutOfPopover(event)) {
          focusTriggerRef(event);
        } else if (shiftTabbedToBrowserChrome(event)) {
          disableTabbablesInPopover();
        }
      } else if (event.key === "Tab") {
        if (tabbedFromTriggerToPopover()) {
          focusFirstPopoverTabbable(event);
        } else if (tabbedOutOfPopover()) {
          focusTabbableAfterTrigger(event);
        } else if (tabbedToBrowserChrome(event)) {
          disableTabbablesInPopover();
        }
      }
    }

    React.useEffect(function () {
      if (ownerDocument) {
        ownerDocument.addEventListener("keydown", handleKeyDown);
        return function () {
          ownerDocument.removeEventListener("keydown", handleKeyDown);
        };
      }

      return; // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function getElementAfterTrigger() {
      var elements = ownerDocument && tabbable_1(ownerDocument);
      var targetIndex = elements && triggerRef.current ? elements.indexOf(triggerRef.current) : -1;
      return elements && elements[targetIndex + 1];
    }

    function tabbedFromTriggerToPopover() {
      return triggerRef.current && ownerDocument ? triggerRef.current === ownerDocument.activeElement : false;
    }

    function focusFirstPopoverTabbable(event) {
      var elements = popoverRef.current && tabbable_1(popoverRef.current);

      if (elements && elements[0]) {
        event.preventDefault();
        elements[0].focus();
      }
    }

    function tabbedOutOfPopover() {
      var inPopover = popoverRef.current && ownerDocument ? popoverRef.current.contains(ownerDocument.activeElement || null) : false;

      if (inPopover) {
        var elements = popoverRef.current && tabbable_1(popoverRef.current);
        return Boolean(elements && ownerDocument && elements[elements.length - 1] === ownerDocument.activeElement);
      }

      return false;
    }

    function focusTabbableAfterTrigger(event) {
      var elementAfterTrigger = getElementAfterTrigger();

      if (elementAfterTrigger) {
        event.preventDefault();
        elementAfterTrigger.focus();
      }
    }

    function shiftTabbedFromElementAfterTrigger(event) {
      if (!event.shiftKey) return;
      var elementAfterTrigger = getElementAfterTrigger();
      return event.target === elementAfterTrigger;
    }

    function focusLastTabbableInPopover(event) {
      var elements = popoverRef.current && tabbable_1(popoverRef.current);
      var last = elements && elements[elements.length - 1];

      if (last) {
        event.preventDefault();
        last.focus();
      }
    }

    function shiftTabbedOutOfPopover(event) {
      var elements = popoverRef.current && tabbable_1(popoverRef.current);

      if (elements) {
        return elements.length === 0 ? false : event.target === elements[0];
      }

      return false;
    }

    function focusTriggerRef(event) {
      var _triggerRef$current;

      event.preventDefault();
      (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.focus();
    }

    function tabbedToBrowserChrome(event) {
      var elements = ownerDocument && popoverRef.current ? tabbable_1(ownerDocument).filter(function (element) {
        return !popoverRef.current.contains(element);
      }) : null;
      return elements ? event.target === elements[elements.length - 1] : false;
    }

    function shiftTabbedToBrowserChrome(event) {
      // we're assuming the popover will never contain the first tabbable
      // element, and it better not, because the trigger needs to be tabbable!
      return ownerDocument ? event.target === tabbable_1(ownerDocument)[0] : false;
    }

    var restoreTabIndexTuplés = [];

    function disableTabbablesInPopover() {
      var elements = popoverRef.current && tabbable_1(popoverRef.current);

      if (elements) {
        elements.forEach(function (element) {
          restoreTabIndexTuplés.push([element, element.tabIndex]);
          element.tabIndex = -1;
        });
        ownerDocument && ownerDocument.addEventListener("focusin", enableTabbablesInPopover);
      }
    }

    function enableTabbablesInPopover() {
      ownerDocument && ownerDocument.removeEventListener("focusin", enableTabbablesInPopover);
      restoreTabIndexTuplés.forEach(function (_ref2) {
        var element = _ref2[0],
            tabIndex = _ref2[1];
        element.tabIndex = tabIndex;
      });
    }
  }

  function _extends$2() {
    _extends$2 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$2.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose$3(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var _on, _on2, _on3, _on4, _states;
  // States
  // Nothing going on, waiting for the user to type or use the arrow keys

  var IDLE = "IDLE"; // The component is suggesting options as the user types

  var SUGGESTING = "SUGGESTING"; // The user is using the keyboard to navigate the list, not typing

  var NAVIGATING = "NAVIGATING"; // The user is interacting with arbitrary elements inside the popup that
  // are not ComboboxInputs

  var INTERACTING = "INTERACTING"; ////////////////////////////////////////////////////////////////////////////////
  // Events
  // User cleared the value w/ backspace, but input still has focus

  var CLEAR = "CLEAR"; // User is typing

  var CHANGE = "CHANGE"; // Initial input value change handler for syncing user state with state machine
  // Prevents initial change from sending the user to the NAVIGATING state
  // https://github.com/reach/reach-ui/issues/464

  var INITIAL_CHANGE = "INITIAL_CHANGE"; // User is navigating w/ the keyboard

  var NAVIGATE = "NAVIGATE"; // User can be navigating with keyboard and then click instead, we want the
  // value from the click, not the current nav item

  var SELECT_WITH_KEYBOARD = "SELECT_WITH_KEYBOARD";
  var SELECT_WITH_CLICK = "SELECT_WITH_CLICK"; // Pretty self-explanatory, user can hit escape or blur to close the popover

  var ESCAPE = "ESCAPE";
  var BLUR = "BLUR"; // The user left the input to interact with arbitrary elements inside the popup

  var INTERACT = "INTERACT";
  var FOCUS = "FOCUS";
  var OPEN_WITH_BUTTON = "OPEN_WITH_BUTTON";
  var CLOSE_WITH_BUTTON = "CLOSE_WITH_BUTTON"; ////////////////////////////////////////////////////////////////////////////////

  var stateChart = {
    initial: IDLE,
    states: (_states = {}, _states[IDLE] = {
      on: (_on = {}, _on[BLUR] = IDLE, _on[CLEAR] = IDLE, _on[CHANGE] = SUGGESTING, _on[INITIAL_CHANGE] = IDLE, _on[FOCUS] = SUGGESTING, _on[NAVIGATE] = NAVIGATING, _on[OPEN_WITH_BUTTON] = SUGGESTING, _on)
    }, _states[SUGGESTING] = {
      on: (_on2 = {}, _on2[CHANGE] = SUGGESTING, _on2[FOCUS] = SUGGESTING, _on2[NAVIGATE] = NAVIGATING, _on2[CLEAR] = IDLE, _on2[ESCAPE] = IDLE, _on2[BLUR] = IDLE, _on2[SELECT_WITH_CLICK] = IDLE, _on2[INTERACT] = INTERACTING, _on2[CLOSE_WITH_BUTTON] = IDLE, _on2)
    }, _states[NAVIGATING] = {
      on: (_on3 = {}, _on3[CHANGE] = SUGGESTING, _on3[FOCUS] = SUGGESTING, _on3[CLEAR] = IDLE, _on3[BLUR] = IDLE, _on3[ESCAPE] = IDLE, _on3[NAVIGATE] = NAVIGATING, _on3[SELECT_WITH_CLICK] = IDLE, _on3[SELECT_WITH_KEYBOARD] = IDLE, _on3[CLOSE_WITH_BUTTON] = IDLE, _on3[INTERACT] = INTERACTING, _on3)
    }, _states[INTERACTING] = {
      on: (_on4 = {}, _on4[CHANGE] = SUGGESTING, _on4[FOCUS] = SUGGESTING, _on4[BLUR] = IDLE, _on4[ESCAPE] = IDLE, _on4[NAVIGATE] = NAVIGATING, _on4[CLOSE_WITH_BUTTON] = IDLE, _on4[SELECT_WITH_CLICK] = IDLE, _on4)
    }, _states)
  };

  var reducer = function reducer(data, event) {
    var nextState = _extends$2({}, data, {
      lastEventType: event.type
    });

    switch (event.type) {
      case CHANGE:
      case INITIAL_CHANGE:
        return _extends$2({}, nextState, {
          navigationValue: null,
          value: event.value
        });

      case NAVIGATE:
      case OPEN_WITH_BUTTON:
        return _extends$2({}, nextState, {
          navigationValue: findNavigationValue(nextState, event)
        });

      case CLEAR:
        return _extends$2({}, nextState, {
          value: "",
          navigationValue: null
        });

      case BLUR:
      case ESCAPE:
        return _extends$2({}, nextState, {
          navigationValue: null
        });

      case SELECT_WITH_CLICK:
        return _extends$2({}, nextState, {
          value: event.value,
          navigationValue: null
        });

      case SELECT_WITH_KEYBOARD:
        return _extends$2({}, nextState, {
          value: data.navigationValue,
          navigationValue: null
        });

      case CLOSE_WITH_BUTTON:
        return _extends$2({}, nextState, {
          navigationValue: null
        });

      case INTERACT:
        return nextState;

      case FOCUS:
        return _extends$2({}, nextState, {
          navigationValue: findNavigationValue(nextState, event)
        });

      default:
        return nextState;
    }
  };

  function popoverIsExpanded(state) {
    return [SUGGESTING, NAVIGATING, INTERACTING].includes(state);
  }
  /**
   * When we open a list, set the navigation value to the value in the input, if
   * it's in the list, then it'll automatically be highlighted.
   *
   * @param stateData
   * @param event
   */


  function findNavigationValue(stateData, event) {
    // @ts-ignore
    if (event.value) {
      // @ts-ignore
      return event.value; // @ts-ignore
    } else if (event.persistSelection) {
      return stateData.value;
    } else {
      return null;
    }
  }

  var ComboboxDescendantContext = /*#__PURE__*/createDescendantContext("ComboboxDescendantContext");
  var ComboboxContext = /*#__PURE__*/createNamedContext("ComboboxContext", {}); // Allows us to put the option's value on context so that ComboboxOptionText
  // can work it's highlight text magic no matter what else is rendered around
  // it.

  var OptionContext = /*#__PURE__*/createNamedContext("OptionContext", {}); ////////////////////////////////////////////////////////////////////////////////

  /**
   * Combobox
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#combobox
   */

  var Combobox = /*#__PURE__*/forwardRefWithAs(function Combobox(_ref, forwardedRef) {
    var onSelect = _ref.onSelect,
        _ref$openOnFocus = _ref.openOnFocus,
        openOnFocus = _ref$openOnFocus === void 0 ? false : _ref$openOnFocus,
        children = _ref.children,
        _ref$as = _ref.as,
        Comp = _ref$as === void 0 ? "div" : _ref$as,
        ariaLabel = _ref["aria-label"],
        ariaLabelledby = _ref["aria-labelledby"],
        props = _objectWithoutPropertiesLoose$3(_ref, ["onSelect", "openOnFocus", "children", "as", "aria-label", "aria-labelledby"]);

    var _useDescendants = useDescendants(),
        options = _useDescendants[0],
        setOptions = _useDescendants[1]; // Need this to focus it


    var inputRef = React.useRef();
    var popoverRef = React.useRef();
    var buttonRef = React.useRef(); // When <ComboboxInput autocomplete={false} /> we don't want cycle back to
    // the user's value while navigating (because it's always the user's value),
    // but we need to know this in useKeyDown which is far away from the prop
    // here, so we do something sneaky and write it to this ref on context so we
    // can use it anywhere else 😛. Another new trick for me and I'm excited
    // about this one too!

    var autocompletePropRef = React.useRef();
    var persistSelectionRef = React.useRef();
    var defaultData = {
      // The value the user has typed. We derive this also when the developer is
      // controlling the value of ComboboxInput.
      value: "",
      // the value the user has navigated to with the keyboard
      navigationValue: null
    };

    var _useReducerMachine = useReducerMachine(stateChart, reducer, defaultData),
        state = _useReducerMachine[0],
        data = _useReducerMachine[1],
        transition = _useReducerMachine[2];

    useFocusManagement(data.lastEventType, inputRef);
    var id = useId(props.id);
    var listboxId = id ? makeId("listbox", id) : "listbox";
    var context = {
      ariaLabel: ariaLabel,
      ariaLabelledby: ariaLabelledby,
      autocompletePropRef: autocompletePropRef,
      buttonRef: buttonRef,
      comboboxId: id,
      data: data,
      inputRef: inputRef,
      isExpanded: popoverIsExpanded(state),
      listboxId: listboxId,
      onSelect: onSelect || noop,
      openOnFocus: openOnFocus,
      persistSelectionRef: persistSelectionRef,
      popoverRef: popoverRef,
      state: state,
      transition: transition
    };
    React.useEffect(function () {
      return checkStyles("combobox");
    }, []);
    return React__default.createElement(DescendantProvider, {
      context: ComboboxDescendantContext,
      items: options,
      set: setOptions
    }, React__default.createElement(ComboboxContext.Provider, {
      value: context
    }, React__default.createElement(Comp, Object.assign({}, props, {
      "data-reach-combobox": "",
      ref: forwardedRef
    }), isFunction(children) ? children({
      id: id,
      isExpanded: popoverIsExpanded(state)
    }) : children)));
  });

  {
    Combobox.displayName = "Combobox";
    Combobox.propTypes = {
      as: propTypes.any,
      onSelect: propTypes.func,
      openOnFocus: propTypes.bool
    };
  } ////////////////////////////////////////////////////////////////////////////////

  /**
   * ComboboxInput
   *
   * Wraps an `<input/>` with a couple extra props that work with the combobox.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxinput
   */


  var ComboboxInput = /*#__PURE__*/forwardRefWithAs(function ComboboxInput(_ref2, forwardedRef) {
    var _ref2$as = _ref2.as,
        Comp = _ref2$as === void 0 ? "input" : _ref2$as,
        _ref2$selectOnClick = _ref2.selectOnClick,
        selectOnClick = _ref2$selectOnClick === void 0 ? false : _ref2$selectOnClick,
        _ref2$autocomplete = _ref2.autocomplete,
        autocomplete = _ref2$autocomplete === void 0 ? true : _ref2$autocomplete,
        onClick = _ref2.onClick,
        onChange = _ref2.onChange,
        onKeyDown = _ref2.onKeyDown,
        onBlur = _ref2.onBlur,
        onFocus = _ref2.onFocus,
        controlledValue = _ref2.value,
        props = _objectWithoutPropertiesLoose$3(_ref2, ["as", "selectOnClick", "autocomplete", "onClick", "onChange", "onKeyDown", "onBlur", "onFocus", "value"]);

    // https://github.com/reach/reach-ui/issues/464
    var _useRef = React.useRef(controlledValue),
        initialControlledValue = _useRef.current;

    var controlledValueChangedRef = React.useRef(false);
    useUpdateEffect(function () {
      controlledValueChangedRef.current = true;
    }, [controlledValue]);

    var _useContext = React.useContext(ComboboxContext),
        _useContext$data = _useContext.data,
        navigationValue = _useContext$data.navigationValue,
        value = _useContext$data.value,
        lastEventType = _useContext$data.lastEventType,
        inputRef = _useContext.inputRef,
        state = _useContext.state,
        transition = _useContext.transition,
        listboxId = _useContext.listboxId,
        autocompletePropRef = _useContext.autocompletePropRef,
        openOnFocus = _useContext.openOnFocus,
        isExpanded = _useContext.isExpanded,
        ariaLabel = _useContext.ariaLabel,
        ariaLabelledby = _useContext.ariaLabelledby;

    var ref = useForkedRef(inputRef, forwardedRef); // Because we close the List on blur, we need to track if the blur is
    // caused by clicking inside the list, and if so, don't close the List.

    var selectOnClickRef = React.useRef(false);
    var handleKeyDown = useKeyDown();
    var handleBlur = useBlur();
    var isControlled = controlledValue != null; // Layout effect should be SSR-safe here because we don't actually do
    // anything with this ref that involves rendering until after we've
    // let the client hydrate in nested components.

    useIsomorphicLayoutEffect(function () {
      autocompletePropRef.current = autocomplete;
    }, [autocomplete, autocompletePropRef]);
    var handleValueChange = React.useCallback(function (value) {
      if (value.trim() === "") {
        transition(CLEAR);
      } else if (value === initialControlledValue && !controlledValueChangedRef.current) {
        transition(INITIAL_CHANGE, {
          value: value
        });
      } else {
        transition(CHANGE, {
          value: value
        });
      }
    }, [initialControlledValue, transition]);
    React.useEffect(function () {
      // If they are controlling the value we still need to do our transitions,
      // so  we have this derived state to emulate onChange of the input as we
      // receive new `value`s ...[*]
      if (isControlled && controlledValue !== value && ( // https://github.com/reach/reach-ui/issues/481
      controlledValue.trim() === "" ? (value || "").trim() !== "" : true)) {
        handleValueChange(controlledValue);
      }
    }, [controlledValue, handleValueChange, isControlled, value]); // [*]... and when controlled, we don't trigger handleValueChange as the
    // user types, instead the developer controls it with the normal input
    // onChange prop

    function handleChange(event) {
      var value = event.target.value;

      if (!isControlled) {
        handleValueChange(value);
      }
    }

    function handleFocus() {
      if (selectOnClick) {
        selectOnClickRef.current = true;
      } // If we select an option with click, useFocusManagement will focus the
      // input, in those cases we don't want to cause the menu to open back up,
      // so we guard behind these states.


      if (openOnFocus && lastEventType !== SELECT_WITH_CLICK) {
        transition(FOCUS);
      }
    }

    function handleClick() {
      if (selectOnClickRef.current) {
        selectOnClickRef.current = false;
        inputRef.current.select();
      }
    }

    var inputValue = autocomplete && (state === NAVIGATING || state === INTERACTING) ? // When idle, we don't have a navigationValue on ArrowUp/Down
    navigationValue || controlledValue || value : controlledValue || value;
    return React__default.createElement(Comp, Object.assign({
      "aria-activedescendant": navigationValue ? String(makeHash(navigationValue)) : undefined,
      "aria-autocomplete": "both",
      "aria-controls": listboxId,
      "aria-expanded": isExpanded,
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabel ? undefined : ariaLabelledby,
      role: "combobox"
    }, props, {
      "data-reach-combobox-input": "",
      ref: ref,
      onBlur: wrapEvent(onBlur, handleBlur),
      onChange: wrapEvent(onChange, handleChange),
      onClick: wrapEvent(onClick, handleClick),
      onFocus: wrapEvent(onFocus, handleFocus),
      onKeyDown: wrapEvent(onKeyDown, handleKeyDown),
      value: inputValue || ""
    }));
  });

  {
    ComboboxInput.displayName = "ComboboxInput";
  } ////////////////////////////////////////////////////////////////////////////////

  /**
   * ComboboxPopover
   *
   * Contains the popup that renders the list. Because some UI needs to render
   * more than the list in the popup, you need to render one of these around the
   * list. For example, maybe you want to render the number of results suggested.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxpopover
   */


  var ComboboxPopover = /*#__PURE__*/React.forwardRef(function ComboboxPopover(_ref3, forwardedRef) {
    var children = _ref3.children,
        _ref3$portal = _ref3.portal,
        portal = _ref3$portal === void 0 ? true : _ref3$portal,
        onKeyDown = _ref3.onKeyDown,
        onBlur = _ref3.onBlur,
        props = _objectWithoutPropertiesLoose$3(_ref3, ["children", "portal", "onKeyDown", "onBlur"]);

    var _useContext2 = React.useContext(ComboboxContext),
        popoverRef = _useContext2.popoverRef,
        inputRef = _useContext2.inputRef,
        isExpanded = _useContext2.isExpanded;

    var ref = useForkedRef(popoverRef, forwardedRef);
    var handleKeyDown = useKeyDown();
    var handleBlur = useBlur();
    var sharedProps = {
      "data-reach-combobox-popover": "",
      onKeyDown: wrapEvent(onKeyDown, handleKeyDown),
      onBlur: wrapEvent(onBlur, handleBlur),
      // Instead of conditionally rendering the popover we use the `hidden` prop
      // because we don't want to unmount on close (from escape or onSelect).
      // However, the developer can conditionally render the ComboboxPopover if
      // they do want to cause mount/unmount based on the app's own data (like
      // results.length or whatever).
      hidden: !isExpanded,
      tabIndex: -1,
      children: children
    };
    return portal ? React__default.createElement(Popover, Object.assign({}, props, {
      // @ts-ignore
      ref: ref,
      position: positionMatchWidth,
      targetRef: inputRef
    }, sharedProps)) : React__default.createElement("div", Object.assign({
      ref: ref
    }, props, sharedProps));
  });

  {
    ComboboxPopover.displayName = "ComboboxPopover";
  } ////////////////////////////////////////////////////////////////////////////////

  /**
   * ComboboxList
   *
   * Contains the `ComboboxOption` elements and sets up the proper aria attributes
   * for the list.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxlist
   */


  var ComboboxList = /*#__PURE__*/forwardRefWithAs(function ComboboxList(_ref4, forwardedRef) {
    var _ref4$persistSelectio = _ref4.persistSelection,
        persistSelection = _ref4$persistSelectio === void 0 ? false : _ref4$persistSelectio,
        _ref4$as = _ref4.as,
        Comp = _ref4$as === void 0 ? "ul" : _ref4$as,
        props = _objectWithoutPropertiesLoose$3(_ref4, ["persistSelection", "as"]);

    var _useContext3 = React.useContext(ComboboxContext),
        persistSelectionRef = _useContext3.persistSelectionRef,
        listboxId = _useContext3.listboxId;

    if (persistSelection) {
      persistSelectionRef.current = true;
    }

    return React__default.createElement(Comp, Object.assign({
      role: "listbox"
    }, props, {
      ref: forwardedRef,
      "data-reach-combobox-list": "",
      id: listboxId
    }));
  });

  {
    ComboboxList.displayName = "ComboboxList";
  } ////////////////////////////////////////////////////////////////////////////////

  /**
   * ComboboxOption
   *
   * An option that is suggested to the user as they interact with the combobox.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxoption
   */


  var ComboboxOption = /*#__PURE__*/forwardRefWithAs(function ComboboxOption(_ref5, forwardedRef) {
    var _ref5$as = _ref5.as,
        Comp = _ref5$as === void 0 ? "li" : _ref5$as,
        children = _ref5.children,
        value = _ref5.value,
        onClick = _ref5.onClick,
        props = _objectWithoutPropertiesLoose$3(_ref5, ["as", "children", "value", "onClick"]);

    var _useContext4 = React.useContext(ComboboxContext),
        onSelect = _useContext4.onSelect,
        navigationValue = _useContext4.data.navigationValue,
        transition = _useContext4.transition;

    var ownRef = React.useRef(null);
    var ref = useForkedRef(forwardedRef, ownRef);
    var index = useDescendant({
      context: ComboboxDescendantContext,
      element: ownRef.current,
      value: value
    });
    var isActive = navigationValue === value;

    var handleClick = function handleClick() {
      onSelect && onSelect(value);
      transition(SELECT_WITH_CLICK, {
        value: value
      });
    };

    return React__default.createElement(OptionContext.Provider, {
      value: {
        value: value,
        index: index
      }
    }, React__default.createElement(Comp, Object.assign({
      "aria-selected": isActive,
      role: "option"
    }, props, {
      "data-reach-combobox-option": "",
      ref: ref,
      id: String(makeHash(value)),
      "data-highlighted": isActive ? "" : undefined,
      // Without this the menu will close from `onBlur`, but with it the
      // element can be `document.activeElement` and then our focus checks in
      // onBlur will work as intended
      tabIndex: -1,
      onClick: wrapEvent(onClick, handleClick),
      children: children || React__default.createElement(ComboboxOptionText, null)
    })));
  });

  {
    ComboboxOption.displayName = "ComboboxOption";
  } ////////////////////////////////////////////////////////////////////////////////

  /**
   * ComboboxOptionText
   *
   * Renders the value of a `ComboboxOption` as text but with spans wrapping the
   * matching and non-matching segments of text.
   *
   * We don't forwardRef or spread props because we render multiple spans or null,
   * should be fine 🤙
   *
   * @example
   *   <ComboboxOption value="Seattle">
   *     🌧 <ComboboxOptionText />
   *   </ComboboxOption>
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxoptiontext
   */


  function ComboboxOptionText() {
    var _useContext5 = React.useContext(OptionContext),
        value = _useContext5.value;

    var _useContext6 = React.useContext(ComboboxContext),
        contextValue = _useContext6.data.value;

    var results = React.useMemo(function () {
      return dist_3({
        searchWords: escapeRegexp(contextValue || "").split(/\s+/),
        textToHighlight: value
      });
    }, [contextValue, value]);
    return React__default.createElement(React__default.Fragment, null, results.length ? results.map(function (result, index) {
      var str = value.slice(result.start, result.end);
      return React__default.createElement("span", {
        key: index,
        "data-user-value": result.highlight ? true : undefined,
        "data-suggested-value": result.highlight ? undefined : true
      }, str);
    }) : value);
  }

  {
    ComboboxOptionText.displayName = "ComboboxOptionText";
  } ////////////////////////////////////////////////////////////////////////////////

  /**
   * ComboboxButton
   */


  var ComboboxButton = /*#__PURE__*/forwardRefWithAs(function ComboboxButton(_ref6, forwardedRef) {
    var _ref6$as = _ref6.as,
        Comp = _ref6$as === void 0 ? "button" : _ref6$as,
        onClick = _ref6.onClick,
        onKeyDown = _ref6.onKeyDown,
        props = _objectWithoutPropertiesLoose$3(_ref6, ["as", "onClick", "onKeyDown"]);

    var _useContext7 = React.useContext(ComboboxContext),
        transition = _useContext7.transition,
        state = _useContext7.state,
        buttonRef = _useContext7.buttonRef,
        listboxId = _useContext7.listboxId,
        isExpanded = _useContext7.isExpanded;

    var ref = useForkedRef(buttonRef, forwardedRef);
    var handleKeyDown = useKeyDown();

    var handleClick = function handleClick() {
      if (state === IDLE) {
        transition(OPEN_WITH_BUTTON);
      } else {
        transition(CLOSE_WITH_BUTTON);
      }
    };

    return React__default.createElement(Comp, Object.assign({
      "aria-controls": listboxId,
      "aria-haspopup": "listbox",
      "aria-expanded": isExpanded
    }, props, {
      "data-reach-combobox-button": "",
      ref: ref,
      onClick: wrapEvent(onClick, handleClick),
      onKeyDown: wrapEvent(onKeyDown, handleKeyDown)
    }));
  });

  {
    ComboboxButton.displayName = "ComboboxButton";
  } ////////////////////////////////////////////////////////////////////////////////

  /**
   * Move focus back to the input if we start navigating w/ the
   * keyboard after focus has moved to any focusable content in
   * the popup.
   *
   * @param lastEventType
   * @param inputRef
   */


  function useFocusManagement(lastEventType, inputRef) {
    // useLayoutEffect so that the cursor goes to the end of the input instead
    // of awkwardly at the beginning, unclear to me why 🤷‍♂️
    //
    // Should be safe to use here since we're just focusing an input.
    useIsomorphicLayoutEffect(function () {
      if (lastEventType === NAVIGATE || lastEventType === ESCAPE || lastEventType === SELECT_WITH_CLICK || lastEventType === OPEN_WITH_BUTTON) {
        inputRef.current.focus();
      }
    }, [inputRef, lastEventType]);
  }
  /**
   * We want the same events when the input or the popup have focus (HOW COOL ARE
   * HOOKS BTW?) This is probably the hairiest piece but it's not bad.
   */


  function useKeyDown() {
    var _useContext8 = React.useContext(ComboboxContext),
        navigationValue = _useContext8.data.navigationValue,
        onSelect = _useContext8.onSelect,
        state = _useContext8.state,
        transition = _useContext8.transition,
        autocompletePropRef = _useContext8.autocompletePropRef,
        persistSelectionRef = _useContext8.persistSelectionRef;

    var _useContext9 = React.useContext(ComboboxDescendantContext),
        options = _useContext9.descendants;

    return function handleKeyDown(event) {
      var index = options.findIndex(function (_ref7) {
        var value = _ref7.value;
        return value === navigationValue;
      });

      function getNextOption() {
        var atBottom = index === options.length - 1;

        if (atBottom) {
          if (autocompletePropRef.current) {
            // Go back to the value the user has typed because we are
            // autocompleting and they need to be able to get back to what
            // they had typed w/o having to backspace out.
            return null;
          } else {
            // cycle through
            return getFirstOption();
          }
        } else {
          // Go to the next item in the list
          return options[(index + 1) % options.length];
        }
      }

      function getPreviousOption() {
        var atTop = index === 0;

        if (atTop) {
          if (autocompletePropRef.current) {
            // Go back to the value the user has typed because we are
            // autocompleting and they need to be able to get back to what
            // they had typed w/o having to backspace out.
            return null;
          } else {
            // cycle through
            return getLastOption();
          }
        } else if (index === -1) {
          // displaying the user's value, so go select the last one
          return getLastOption();
        } else {
          // normal case, select previous
          return options[(index - 1 + options.length) % options.length];
        }
      }

      function getFirstOption() {
        return options[0];
      }

      function getLastOption() {
        return options[options.length - 1];
      }

      switch (event.key) {
        case "ArrowDown":
          // Don't scroll the page
          event.preventDefault();

          if (!options || !options.length) {
            return;
          }

          if (state === IDLE) {
            // Opening a closed list
            transition(NAVIGATE, {
              persistSelection: persistSelectionRef.current
            });
          } else {
            var next = getNextOption();
            transition(NAVIGATE, {
              value: next ? next.value : null
            });
          }

          break;
        // A lot of duplicate code with ArrowDown up next, I'm already over it.

        case "ArrowUp":
          // Don't scroll the page
          event.preventDefault();

          if (!options || options.length === 0) {
            return;
          }

          if (state === IDLE) {
            transition(NAVIGATE);
          } else {
            var prev = getPreviousOption();
            transition(NAVIGATE, {
              value: prev ? prev.value : null
            });
          }

          break;

        case "Home":
        case "PageUp":
          // Don't scroll the page
          event.preventDefault();

          if (!options || options.length === 0) {
            return;
          }

          if (state === IDLE) {
            transition(NAVIGATE);
          } else {
            transition(NAVIGATE, {
              value: getFirstOption().value
            });
          }

          break;

        case "End":
        case "PageDown":
          // Don't scroll the page
          event.preventDefault();

          if (!options || options.length === 0) {
            return;
          }

          if (state === IDLE) {
            transition(NAVIGATE);
          } else {
            transition(NAVIGATE, {
              value: getLastOption().value
            });
          }

          break;

        case "Escape":
          if (state !== IDLE) {
            transition(ESCAPE);
          }

          break;

        case "Enter":
          if (state === NAVIGATING && navigationValue !== null) {
            // don't want to submit forms
            event.preventDefault();
            onSelect && onSelect(navigationValue);
            transition(SELECT_WITH_KEYBOARD);
          }

          break;
      }
    };
  }

  function useBlur() {
    var _useContext10 = React.useContext(ComboboxContext),
        state = _useContext10.state,
        transition = _useContext10.transition,
        popoverRef = _useContext10.popoverRef,
        inputRef = _useContext10.inputRef,
        buttonRef = _useContext10.buttonRef;

    return function handleBlur() {
      var ownerDocument = getOwnerDocument(inputRef.current) || document;
      requestAnimationFrame(function () {
        // we on want to close only if focus propss outside the combobox
        if (ownerDocument.activeElement !== inputRef.current && ownerDocument.activeElement !== buttonRef.current && popoverRef.current) {
          if (popoverRef.current.contains(ownerDocument.activeElement)) {
            // focus landed inside the combobox, keep it open
            if (state !== INTERACTING) {
              transition(INTERACT);
            }
          } else {
            // focus landed outside the combobox, close it.
            transition(BLUR);
          }
        }
      });
    };
  }
  /**
   * This manages transitions between states with a built in reducer to manage
   * the data that goes with those transitions.
   *
   * @param chart
   * @param reducer
   * @param initialData
   */


  function useReducerMachine(chart, reducer, initialData) {
    var _useState = React.useState(chart.initial),
        state = _useState[0],
        setState = _useState[1];

    var _useReducer = React.useReducer(reducer, initialData),
        data = _useReducer[0],
        dispatch = _useReducer[1];

    var transition = function transition(event, payload) {
      if (payload === void 0) {
        payload = {};
      }

      var currentState = chart.states[state];
      var nextState = currentState && currentState.on[event];

      if (nextState) {
        dispatch(_extends$2({
          type: event,
          state: state,
          nextState: state
        }, payload));
        setState(nextState);
        return;
      }
    };

    return [state, data, transition];
  }
  /**
   * We don't want to track the active descendant with indexes because nothing is
   * more annoying in a combobox than having it change values RIGHT AS YOU HIT
   * ENTER. That only happens if you use the index as your data, rather than
   * *your data as your data*. We use this to generate a unique ID based on the
   * value of each item.  This function is short, sweet, and good enough™ (I also
   * don't know how it works, tbqh)
   *
   * @see https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
   * @param str
   */


  var makeHash = function makeHash(str) {
    var hash = 0;

    if (str.length === 0) {
      return hash;
    }

    for (var i = 0; i < str.length; i++) {
      var _char = str.charCodeAt(i);

      hash = (hash << 5) - hash + _char;
      hash = hash & hash;
    }

    return hash;
  };
  /**
   * Escape regexp special characters in `str`
   *
   * @see https://github.com/component/escape-regexp/blob/5ce923c1510c9802b3da972c90b6861dd2829b6b/index.js
   * @param str
   */


  function escapeRegexp(str) {
    return String(str).replace(/([.*+?=^!:${}()|[\]/\\])/g, "\\$1");
  } ////////////////////////////////////////////////////////////////////////////////

  var API_DATAGOUV = 'https://api-adresse.data.gouv.fr/search/';
  var API_EZGEODATAGOUV = '/api/ezp/v2/ez_geo_data_gouv/';
  function client(endpoint) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        body = _ref.body,
        _ref$output = _ref.output,
        output = _ref$output === void 0 ? 'json' : _ref$output,
        customConfig = _objectWithoutProperties(_ref, ["body", "output"]);

    var headers = {
      json: {
        'Content-Type': 'application/json'
      },
      text: {
        'Content-Type': 'text/html'
      }
    };

    var config = _objectSpread2({
      method: body ? 'POST' : 'GET'
    }, customConfig, {
      headers: _objectSpread2({}, headers[output], {}, customConfig.headers)
    });

    if (body) {
      config.body = JSON.stringify(body);
    }

    return window.fetch(new URL(endpoint, document.location.origin + API_EZGEODATAGOUV).href, config).then(function (response) {
      if (response.ok) {
        return response[output]();
      } else {
        return Promise.reject(response.statusText);
      }
    });
  }
  function promiseAllWrapper(ContentList, siteaccess) {
    return ContentList.reduce(function (promises, ContentInfo) {
      return [].concat(_toConsumableArray(promises), [client("view/content/".concat(ContentInfo.Content._id, "/line/").concat(ContentInfo._distance), {
        output: 'text',
        headers: {
          'X-Siteaccess': siteaccess
        }
      })]);
    }, []);
  }

  function useAddressSearch(searchTerm) {
    var _useState = React.useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        addresses = _useState2[0],
        setAddress = _useState2[1];

    React.useEffect(function () {
      if (searchTerm.trim() !== '') {
        var isFresh = true;
        client("".concat(API_DATAGOUV, "?q=").concat(searchTerm)).then(function (_ref) {
          var features = _ref.features;
          if (isFresh) setAddress(features);
        });
        return function () {
          return isFresh = false;
        };
      }
    }, [searchTerm]);
    return addresses;
  }

  function _extends$3() {
    _extends$3 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$3.apply(this, arguments);
  }

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  };
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };
  var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
      return MEMO_STATICS;
    } // React v16.12 and above


    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
  }

  var defineProperty = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = Object.prototype;
  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
      // don't hoist over string (html) components
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent);

        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
      }

      var keys = getOwnPropertyNames(sourceComponent);

      if (getOwnPropertySymbols$1) {
        keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
      }

      var targetStatics = getStatics(targetComponent);
      var sourceStatics = getStatics(sourceComponent);

      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];

        if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
          var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

          try {
            // Avoid failures from read-only properties
            defineProperty(targetComponent, key, descriptor);
          } catch (e) {}
        }
      }
    }

    return targetComponent;
  }

  var hoistNonReactStatics_cjs = hoistNonReactStatics;

  var leafletContext = React.createContext({});
  var useLeaflet = function useLeaflet() {
    return React.useContext(leafletContext);
  };
  var LeafletConsumer = leafletContext.Consumer;
  var LeafletProvider = leafletContext.Provider;
  var withLeaflet = function withLeaflet(WrappedComponent) {
    var WithLeafletComponent = function WithLeafletComponent(props, ref) {
      return React__default.createElement(LeafletConsumer, null, function (leaflet) {
        return React__default.createElement(WrappedComponent, _extends$3({}, props, {
          leaflet: leaflet,
          ref: ref
        }));
      });
    };

    var name = // flowlint-next-line sketchy-null-string:off
    WrappedComponent.displayName || WrappedComponent.name || 'Component';
    WithLeafletComponent.displayName = "Leaflet(" + name + ")";
    var LeafletComponent = React.forwardRef(WithLeafletComponent);
    hoistNonReactStatics_cjs(LeafletComponent, WrappedComponent);
    return LeafletComponent;
  };

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var MapControl = /*#__PURE__*/function (_Component) {
    _inheritsLoose(MapControl, _Component);

    function MapControl(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _defineProperty$1(_assertThisInitialized(_this), "leafletElement", void 0);

      _this.leafletElement = _this.createLeafletElement(_this.props);
      return _this;
    }

    var _proto = MapControl.prototype;

    _proto.createLeafletElement = function createLeafletElement(_props) {
      throw new Error('createLeafletElement() must be implemented');
    };

    _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      if (toProps.position !== fromProps.position) {
        this.leafletElement.setPosition(toProps.position);
      }
    };

    _proto.componentDidMount = function componentDidMount() {
      this.leafletElement.addTo(this.props.leaflet.map);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      this.updateLeafletElement(prevProps, this.props);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.leafletElement.remove();
    };

    _proto.render = function render() {
      return null;
    };

    return MapControl;
  }(React.Component);

  var AttributionControl = /*#__PURE__*/function (_MapControl) {
    _inheritsLoose(AttributionControl, _MapControl);

    function AttributionControl() {
      return _MapControl.apply(this, arguments) || this;
    }

    var _proto = AttributionControl.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      return new L.Control.Attribution(props);
    };

    return AttributionControl;
  }(MapControl);

  var AttributionControl$1 = withLeaflet(AttributionControl);

  function _objectWithoutPropertiesLoose$4(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  // do not edit .js files directly - edit src/index.jst



  var fastDeepEqual = function equal(a, b) {
    if (a === b) return true;

    if (a && b && typeof a == 'object' && typeof b == 'object') {
      if (a.constructor !== b.constructor) return false;

      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (!equal(a[i], b[i])) return false;
        return true;
      }



      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;

      for (i = length; i-- !== 0;)
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

      for (i = length; i-- !== 0;) {
        var key = keys[i];

        if (!equal(a[key], b[key])) return false;
      }

      return true;
    }

    // true if both NaN, false otherwise
    return a!==a && b!==b;
  };

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var EVENTS_RE = /^on(.+)$/i;

  var MapEvented = /*#__PURE__*/function (_Component) {
    _inheritsLoose(MapEvented, _Component);

    function MapEvented(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _defineProperty$1(_assertThisInitialized(_this), "_leafletEvents", void 0);

      _defineProperty$1(_assertThisInitialized(_this), "leafletElement", void 0);

      _this._leafletEvents = _this.extractLeafletEvents(props);
      return _this;
    }

    var _proto = MapEvented.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.bindLeafletEvents(this._leafletEvents);
    };

    _proto.componentDidUpdate = function componentDidUpdate(_prevProps) {
      this._leafletEvents = this.bindLeafletEvents(this.extractLeafletEvents(this.props), this._leafletEvents);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      var _this2 = this;

      var el = this.leafletElement;
      if (!el) return;
      Object.keys(this._leafletEvents).forEach(function (ev) {
        el.off(ev, _this2._leafletEvents[ev]);
      });
    };

    _proto.extractLeafletEvents = function extractLeafletEvents(props) {
      return Object.keys(props).reduce(function (res, prop) {
        if (EVENTS_RE.test(prop)) {
          if (props[prop] != null) {
            var _key = prop.replace(EVENTS_RE, function (match, p) {
              return p.toLowerCase();
            });

            res[_key] = props[prop];
          }
        }

        return res;
      }, {});
    };

    _proto.bindLeafletEvents = function bindLeafletEvents(next, prev) {
      if (next === void 0) {
        next = {};
      }

      if (prev === void 0) {
        prev = {};
      }

      var el = this.leafletElement;
      if (el == null || el.on == null) return {};

      var diff = _extends$3({}, prev);

      Object.keys(prev).forEach(function (ev) {
        if (next[ev] == null || prev[ev] !== next[ev]) {
          delete diff[ev];
          el.off(ev, prev[ev]);
        }
      });
      Object.keys(next).forEach(function (ev) {
        if (prev[ev] == null || next[ev] !== prev[ev]) {
          diff[ev] = next[ev];
          el.on(ev, next[ev]);
        }
      });
      return diff;
    };

    _proto.fireLeafletEvent = function fireLeafletEvent(type, data) {
      var el = this.leafletElement;
      if (el) el.fire(type, data);
    };

    return MapEvented;
  }(React.Component);

  var MapComponent = /*#__PURE__*/function (_MapEvented) {
    _inheritsLoose(MapComponent, _MapEvented);

    function MapComponent() {
      return _MapEvented.apply(this, arguments) || this;
    }

    var _proto = MapComponent.prototype;

    _proto.getOptions = function getOptions(props) {
      if (props.pane != null) {
        return props;
      }

      if (props.leaflet != null && props.leaflet.pane != null) {
        return _extends$3({}, props, {
          pane: props.leaflet.pane
        });
      }

      return props;
    };

    return MapComponent;
  }(MapEvented);

  var MapLayer = /*#__PURE__*/function (_MapComponent) {
    _inheritsLoose(MapLayer, _MapComponent);

    function MapLayer(props) {
      var _this;

      _this = _MapComponent.call(this, props) || this;

      _defineProperty$1(_assertThisInitialized(_this), "contextValue", void 0);

      _defineProperty$1(_assertThisInitialized(_this), "leafletElement", void 0);

      _this.leafletElement = _this.createLeafletElement(props);
      return _this;
    }

    var _proto = MapLayer.prototype;

    _proto.createLeafletElement = function createLeafletElement(_props) {
      throw new Error('createLeafletElement() must be implemented');
    };

    _proto.updateLeafletElement = function updateLeafletElement(_fromProps, _toProps) {};

    _proto.componentDidMount = function componentDidMount() {
      _MapComponent.prototype.componentDidMount.call(this);

      this.layerContainer.addLayer(this.leafletElement);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      _MapComponent.prototype.componentDidUpdate.call(this, prevProps);

      if (this.props.attribution !== prevProps.attribution) {
        var map = this.props.leaflet.map;

        if (map != null && map.attributionControl != null) {
          map.attributionControl.removeAttribution(prevProps.attribution);
          map.attributionControl.addAttribution(this.props.attribution);
        }
      }

      this.updateLeafletElement(prevProps, this.props);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      _MapComponent.prototype.componentWillUnmount.call(this);

      this.layerContainer.removeLayer(this.leafletElement);
    };

    _proto.render = function render() {
      var children = this.props.children;

      if (children == null) {
        return null;
      }

      return this.contextValue == null ? React__default.createElement(React.Fragment, null, children) : React__default.createElement(LeafletProvider, {
        value: this.contextValue
      }, children);
    };

    _createClass(MapLayer, [{
      key: "layerContainer",
      get: function get() {
        return this.props.leaflet.layerContainer || this.props.leaflet.map;
      }
    }]);

    return MapLayer;
  }(MapComponent);

  function pick(object, keys) {
    return keys.reduce(function (obj, key) {
      if (typeof object[key] !== 'undefined') {
        obj[key] = object[key];
      }

      return obj;
    }, {});
  }

  var OPTIONS = ['stroke', 'color', 'weight', 'opacity', 'lineCap', 'lineJoin', 'dashArray', 'dashOffset', 'fill', 'fillColor', 'fillOpacity', 'fillRule', 'bubblingMouseEvents', 'renderer', 'className', // Interactive Layer
  'interactive', // Layer
  'pane', 'attribution'];

  var Path = /*#__PURE__*/function (_MapLayer) {
    _inheritsLoose(Path, _MapLayer);

    function Path(props) {
      var _this;

      _this = _MapLayer.call(this, props) || this;

      if (_this.contextValue == null) {
        _this.contextValue = _extends$3({}, props.leaflet, {
          popupContainer: _this.leafletElement
        });
      }

      return _this;
    }

    var _proto = Path.prototype;

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      _MapLayer.prototype.componentDidUpdate.call(this, prevProps);

      this.setStyleIfChanged(prevProps, this.props);
    };

    _proto.getPathOptions = function getPathOptions(props) {
      return pick(props, OPTIONS);
    };

    _proto.setStyle = function setStyle(options) {
      if (options === void 0) {
        options = {};
      }

      this.leafletElement.setStyle(options);
    };

    _proto.setStyleIfChanged = function setStyleIfChanged(fromProps, toProps) {
      var nextStyle = this.getPathOptions(toProps);

      if (!fastDeepEqual(nextStyle, this.getPathOptions(fromProps))) {
        this.setStyle(nextStyle);
      }
    };

    return Path;
  }(MapLayer);

  var Circle = /*#__PURE__*/function (_Path) {
    _inheritsLoose(Circle, _Path);

    function Circle() {
      return _Path.apply(this, arguments) || this;
    }

    var _proto = Circle.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      var center = props.center,
          radius = props.radius,
          options = _objectWithoutPropertiesLoose$4(props, ["center", "radius"]);

      return new L.Circle(center, radius, this.getOptions(options));
    };

    _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      if (toProps.center !== fromProps.center) {
        this.leafletElement.setLatLng(toProps.center);
      }

      if (toProps.radius !== fromProps.radius) {
        this.leafletElement.setRadius(toProps.radius);
      }
    };

    return Circle;
  }(Path);

  var Circle$1 = withLeaflet(Circle);

  var CircleMarker = /*#__PURE__*/function (_Path) {
    _inheritsLoose(CircleMarker, _Path);

    function CircleMarker() {
      return _Path.apply(this, arguments) || this;
    }

    var _proto = CircleMarker.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      var el = new L.CircleMarker(props.center, this.getOptions(props));
      this.contextValue = _extends$3({}, props.leaflet, {
        popupContainer: el
      });
      return el;
    };

    _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      if (toProps.center !== fromProps.center) {
        this.leafletElement.setLatLng(toProps.center);
      }

      if (toProps.radius !== fromProps.radius) {
        this.leafletElement.setRadius(toProps.radius);
      }
    };

    return CircleMarker;
  }(Path);

  var CircleMarker$1 = withLeaflet(CircleMarker);

  var splitClassName = function splitClassName(className) {
    if (className === void 0) {
      className = '';
    }

    return className.split(' ').filter(Boolean);
  };

  var addClassName = function addClassName(container, className) {
    splitClassName(className).forEach(function (cls) {
      L.DomUtil.addClass(container, cls);
    });
  };
  var removeClassName = function removeClassName(container, className) {
    splitClassName(className).forEach(function (cls) {
      L.DomUtil.removeClass(container, cls);
    });
  };
  var updateClassName = (function (container, prevClassName, nextClassName) {
    if (container != null && nextClassName !== prevClassName) {
      if (prevClassName != null && prevClassName.length > 0) {
        removeClassName(container, prevClassName);
      }

      if (nextClassName != null && nextClassName.length > 0) {
        addClassName(container, nextClassName);
      }
    }
  });

  var DivOverlay = /*#__PURE__*/function (_MapComponent) {
    _inheritsLoose(DivOverlay, _MapComponent);

    function DivOverlay(props) {
      var _this;

      _this = _MapComponent.call(this, props) || this;

      _defineProperty$1(_assertThisInitialized(_this), "onClose", function () {
        if (_this.props.onClose) {
          _this.props.onClose();
        }
      });

      _defineProperty$1(_assertThisInitialized(_this), "onOpen", function () {
        _this.forceUpdate(); // Re-render now that leafletElement is created


        if (_this.props.onOpen) {
          _this.props.onOpen();
        }
      });

      _this.leafletElement = _this.createLeafletElement(props);
      return _this;
    }

    var _proto = DivOverlay.prototype;

    _proto.createLeafletElement = function createLeafletElement(_props) {
      throw new Error('createLeafletElement() must be implemented');
    };

    _proto.updateLeafletElement = function updateLeafletElement(_prevProps, _props) {};

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      updateClassName(this.leafletElement._container, prevProps.className, this.props.className);
      this.updateLeafletElement(prevProps, this.props);

      if (this.leafletElement.isOpen()) {
        this.leafletElement.update();
        this.onRender();
      }
    };

    _proto.onRender = function onRender() {};

    _proto.render = function render() {
      if (this.leafletElement._contentNode) {
        return reactDom.createPortal(this.props.children, this.leafletElement._contentNode);
      }

      return null;
    };

    return DivOverlay;
  }(MapComponent);

  var FeatureGroup = /*#__PURE__*/function (_Path) {
    _inheritsLoose(FeatureGroup, _Path);

    function FeatureGroup() {
      return _Path.apply(this, arguments) || this;
    }

    var _proto = FeatureGroup.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      var el = new L.FeatureGroup(this.getOptions(props));
      this.contextValue = _extends$3({}, props.leaflet, {
        layerContainer: el,
        popupContainer: el
      });
      return el;
    };

    _proto.componentDidMount = function componentDidMount() {
      _Path.prototype.componentDidMount.call(this);

      this.setStyle(this.props);
    };

    return FeatureGroup;
  }(Path);

  var FeatureGroup$1 = withLeaflet(FeatureGroup);

  var GeoJSON = /*#__PURE__*/function (_Path) {
    _inheritsLoose(GeoJSON, _Path);

    function GeoJSON() {
      return _Path.apply(this, arguments) || this;
    }

    var _proto = GeoJSON.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      return new L.GeoJSON(props.data, this.getOptions(props));
    };

    _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      if (typeof toProps.style === 'function') {
        this.leafletElement.setStyle(toProps.style);
      } else {
        this.setStyleIfChanged(fromProps, toProps);
      }
    };

    return GeoJSON;
  }(Path);

  var GeoJSON$1 = withLeaflet(GeoJSON);

  var GridLayer = /*#__PURE__*/function (_MapLayer) {
    _inheritsLoose(GridLayer, _MapLayer);

    function GridLayer() {
      return _MapLayer.apply(this, arguments) || this;
    }

    var _proto = GridLayer.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      return new L.GridLayer(this.getOptions(props));
    };

    _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      var opacity = toProps.opacity,
          zIndex = toProps.zIndex;

      if (opacity !== fromProps.opacity) {
        this.leafletElement.setOpacity(opacity);
      }

      if (zIndex !== fromProps.zIndex) {
        this.leafletElement.setZIndex(zIndex);
      }
    };

    _proto.getOptions = function getOptions(props) {
      var options = _extends$3({}, _MapLayer.prototype.getOptions.call(this, props));

      var map = props.leaflet.map;

      if (map != null) {
        // $FlowFixMe: Object spread
        if (options.maxZoom == null && map.options.maxZoom != null) {
          // $FlowFixMe: Object spread
          options.maxZoom = map.options.maxZoom;
        } // $FlowFixMe: Object spread


        if (options.minZoom == null && map.options.minZoom != null) {
          // $FlowFixMe: Object spread
          options.minZoom = map.options.minZoom;
        }
      }

      return options;
    };

    _proto.render = function render() {
      return null;
    };

    return GridLayer;
  }(MapLayer);

  var ImageOverlay = /*#__PURE__*/function (_MapLayer) {
    _inheritsLoose(ImageOverlay, _MapLayer);

    function ImageOverlay() {
      return _MapLayer.apply(this, arguments) || this;
    }

    var _proto = ImageOverlay.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      var el = new L.ImageOverlay(props.url, props.bounds, this.getOptions(props));
      this.contextValue = _extends$3({}, props.leaflet, {
        popupContainer: el
      });
      return el;
    };

    _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      if (toProps.url !== fromProps.url) {
        this.leafletElement.setUrl(toProps.url);
      }

      if (toProps.bounds !== fromProps.bounds) {
        this.leafletElement.setBounds(L.latLngBounds(toProps.bounds));
      }

      if (toProps.opacity !== fromProps.opacity) {
        this.leafletElement.setOpacity(toProps.opacity);
      }

      if (toProps.zIndex !== fromProps.zIndex) {
        this.leafletElement.setZIndex(toProps.zIndex);
      }
    };

    return ImageOverlay;
  }(MapLayer);

  var ImageOverlay$1 = withLeaflet(ImageOverlay);

  var LayerGroup = /*#__PURE__*/function (_MapLayer) {
    _inheritsLoose(LayerGroup, _MapLayer);

    function LayerGroup() {
      return _MapLayer.apply(this, arguments) || this;
    }

    var _proto = LayerGroup.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      var el = new L.LayerGroup([], this.getOptions(props));
      this.contextValue = _extends$3({}, props.leaflet, {
        layerContainer: el
      });
      return el;
    };

    return LayerGroup;
  }(MapLayer);

  var LayerGroup$1 = withLeaflet(LayerGroup);

  // Abtract class for layer container, extended by BaseLayer and Overlay
  var ControlledLayer = /*#__PURE__*/function (_Component) {
    _inheritsLoose(ControlledLayer, _Component);

    function ControlledLayer() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _defineProperty$1(_assertThisInitialized(_this), "contextValue", void 0);

      _defineProperty$1(_assertThisInitialized(_this), "layer", void 0);

      return _this;
    }

    var _proto = ControlledLayer.prototype;

    _proto.componentDidUpdate = function componentDidUpdate(_ref) {
      var checked = _ref.checked;

      if (this.props.leaflet.map == null) {
        return;
      } // Handle dynamically (un)checking the layer => adding/removing from the map


      if (this.props.checked === true && (checked == null || checked === false)) {
        this.props.leaflet.map.addLayer(this.layer);
      } else if (checked === true && (this.props.checked == null || this.props.checked === false)) {
        this.props.leaflet.map.removeLayer(this.layer);
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.props.removeLayerControl(this.layer);
    };

    _proto.addLayer = function addLayer() {
      throw new Error('Must be implemented in extending class');
    };

    _proto.removeLayer = function removeLayer(layer) {
      this.props.removeLayer(layer);
    };

    _proto.render = function render() {
      var children = this.props.children;
      return children ? React__default.createElement(LeafletProvider, {
        value: this.contextValue
      }, children) : null;
    };

    return ControlledLayer;
  }(React.Component);

  var BaseLayer = /*#__PURE__*/function (_ControlledLayer) {
    _inheritsLoose(BaseLayer, _ControlledLayer);

    function BaseLayer(props) {
      var _this2;

      _this2 = _ControlledLayer.call(this, props) || this;

      _defineProperty$1(_assertThisInitialized(_this2), "addLayer", function (layer) {
        _this2.layer = layer; // Keep layer reference to handle dynamic changes of props

        var _this2$props = _this2.props,
            addBaseLayer = _this2$props.addBaseLayer,
            checked = _this2$props.checked,
            name = _this2$props.name;
        addBaseLayer(layer, name, checked);
      });

      _this2.contextValue = _extends$3({}, props.leaflet, {
        layerContainer: {
          addLayer: _this2.addLayer.bind(_assertThisInitialized(_this2)),
          removeLayer: _this2.removeLayer.bind(_assertThisInitialized(_this2))
        }
      });
      return _this2;
    }

    return BaseLayer;
  }(ControlledLayer);

  var Overlay = /*#__PURE__*/function (_ControlledLayer2) {
    _inheritsLoose(Overlay, _ControlledLayer2);

    function Overlay(props) {
      var _this3;

      _this3 = _ControlledLayer2.call(this, props) || this;

      _defineProperty$1(_assertThisInitialized(_this3), "addLayer", function (layer) {
        _this3.layer = layer; // Keep layer reference to handle dynamic changes of props

        var _this3$props = _this3.props,
            addOverlay = _this3$props.addOverlay,
            checked = _this3$props.checked,
            name = _this3$props.name;
        addOverlay(layer, name, checked);
      });

      _this3.contextValue = _extends$3({}, props.leaflet, {
        layerContainer: {
          addLayer: _this3.addLayer.bind(_assertThisInitialized(_this3)),
          removeLayer: _this3.removeLayer.bind(_assertThisInitialized(_this3))
        }
      });
      return _this3;
    }

    return Overlay;
  }(ControlledLayer);

  var LayersControl = /*#__PURE__*/function (_MapControl) {
    _inheritsLoose(LayersControl, _MapControl);

    function LayersControl(props) {
      var _this4;

      _this4 = _MapControl.call(this, props) || this;

      _defineProperty$1(_assertThisInitialized(_this4), "controlProps", void 0);

      _this4.controlProps = {
        addBaseLayer: _this4.addBaseLayer.bind(_assertThisInitialized(_this4)),
        addOverlay: _this4.addOverlay.bind(_assertThisInitialized(_this4)),
        leaflet: props.leaflet,
        removeLayer: _this4.removeLayer.bind(_assertThisInitialized(_this4)),
        removeLayerControl: _this4.removeLayerControl.bind(_assertThisInitialized(_this4))
      };
      return _this4;
    }

    var _proto2 = LayersControl.prototype;

    _proto2.createLeafletElement = function createLeafletElement(props) {
      var _children = props.children,
          options = _objectWithoutPropertiesLoose$4(props, ["children"]);

      return new L.Control.Layers(undefined, undefined, options);
    };

    _proto2.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      _MapControl.prototype.updateLeafletElement.call(this, fromProps, toProps);

      if (toProps.collapsed !== fromProps.collapsed) {
        if (toProps.collapsed === true) {
          this.leafletElement.collapse();
        } else {
          this.leafletElement.expand();
        }
      }
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      var _this5 = this;

      setTimeout(function () {
        _MapControl.prototype.componentWillUnmount.call(_this5);
      }, 0);
    };

    _proto2.addBaseLayer = function addBaseLayer(layer, name, checked) {
      if (checked === void 0) {
        checked = false;
      }

      if (checked && this.props.leaflet.map != null) {
        this.props.leaflet.map.addLayer(layer);
      }

      this.leafletElement.addBaseLayer(layer, name);
    };

    _proto2.addOverlay = function addOverlay(layer, name, checked) {
      if (checked === void 0) {
        checked = false;
      }

      if (checked && this.props.leaflet.map != null) {
        this.props.leaflet.map.addLayer(layer);
      }

      this.leafletElement.addOverlay(layer, name);
    };

    _proto2.removeLayer = function removeLayer(layer) {
      if (this.props.leaflet.map != null) {
        this.props.leaflet.map.removeLayer(layer);
      }
    };

    _proto2.removeLayerControl = function removeLayerControl(layer) {
      this.leafletElement.removeLayer(layer);
    };

    _proto2.render = function render() {
      var _this6 = this;

      var children = React.Children.map(this.props.children, function (child) {
        return child ? React.cloneElement(child, _this6.controlProps) : null;
      });
      return React__default.createElement(React.Fragment, null, children);
    };

    return LayersControl;
  }(MapControl);

  var LayersControlExport = withLeaflet(LayersControl);
  LayersControlExport.BaseLayer = BaseLayer;
  LayersControlExport.Overlay = Overlay;

  function omit(obj) {
    for (var _len = arguments.length, keysToOmit = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      keysToOmit[_key - 1] = arguments[_key];
    }

    return Object.keys(obj).reduce(function (acc, key) {
      if (keysToOmit.indexOf(key) === -1) {
        acc[key] = obj[key];
      }

      return acc;
    }, {});
  }

  var OTHER_PROPS = ['children', 'className', 'id', 'style', 'useFlyTo', 'whenReady'];

  var normalizeCenter = function normalizeCenter(pos) {
    return Array.isArray(pos) ? [pos[0], pos[1]] : [pos.lat, pos.lon ? pos.lon : pos.lng];
  };

  var Map$1 = /*#__PURE__*/function (_MapEvented) {
    _inheritsLoose(Map, _MapEvented);

    function Map(props) {
      var _this;

      _this = _MapEvented.call(this, props) || this;

      _defineProperty$1(_assertThisInitialized(_this), "className", void 0);

      _defineProperty$1(_assertThisInitialized(_this), "contextValue", void 0);

      _defineProperty$1(_assertThisInitialized(_this), "container", void 0);

      _defineProperty$1(_assertThisInitialized(_this), "viewport", {
        center: undefined,
        zoom: undefined
      });

      _defineProperty$1(_assertThisInitialized(_this), "_ready", false);

      _defineProperty$1(_assertThisInitialized(_this), "_updating", false);

      _defineProperty$1(_assertThisInitialized(_this), "onViewportChange", function () {
        var center = _this.leafletElement.getCenter();

        _this.viewport = {
          center: center ? [center.lat, center.lng] : undefined,
          zoom: _this.leafletElement.getZoom()
        };

        if (_this.props.onViewportChange && !_this._updating) {
          _this.props.onViewportChange(_this.viewport);
        }
      });

      _defineProperty$1(_assertThisInitialized(_this), "onViewportChanged", function () {
        if (_this.props.onViewportChanged && !_this._updating) {
          _this.props.onViewportChanged(_this.viewport);
        }
      });

      _defineProperty$1(_assertThisInitialized(_this), "bindContainer", function (container) {
        _this.container = container;
      });

      _this.className = props.className;
      return _this;
    }

    var _proto = Map.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      var viewport = props.viewport,
          options = _objectWithoutPropertiesLoose$4(props, ["viewport"]);

      if (viewport) {
        if (viewport.center) {
          options.center = viewport.center;
        }

        if (typeof viewport.zoom === 'number') {
          options.zoom = viewport.zoom;
        }
      }

      return new L.Map(this.container, options);
    };

    _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      this._updating = true;
      var bounds = toProps.bounds,
          boundsOptions = toProps.boundsOptions,
          boxZoom = toProps.boxZoom,
          center = toProps.center,
          className = toProps.className,
          doubleClickZoom = toProps.doubleClickZoom,
          dragging = toProps.dragging,
          keyboard = toProps.keyboard,
          maxBounds = toProps.maxBounds,
          scrollWheelZoom = toProps.scrollWheelZoom,
          tap = toProps.tap,
          touchZoom = toProps.touchZoom,
          useFlyTo = toProps.useFlyTo,
          viewport = toProps.viewport,
          zoom = toProps.zoom;
      updateClassName(this.container, fromProps.className, className);

      if (viewport && viewport !== fromProps.viewport) {
        var c = viewport.center ? viewport.center : center;
        var z = viewport.zoom == null ? zoom : viewport.zoom;

        if (useFlyTo === true) {
          this.leafletElement.flyTo(c, z, this.getZoomPanOptions(toProps));
        } else {
          this.leafletElement.setView(c, z, this.getZoomPanOptions(toProps));
        }
      } else if (center && this.shouldUpdateCenter(center, fromProps.center)) {
        if (useFlyTo === true) {
          this.leafletElement.flyTo(center, zoom, this.getZoomPanOptions(toProps));
        } else {
          this.leafletElement.setView(center, zoom, this.getZoomPanOptions(toProps));
        }
      } else if (typeof zoom === 'number' && zoom !== fromProps.zoom) {
        if (fromProps.zoom == null) {
          this.leafletElement.setView(center, zoom, this.getZoomPanOptions(toProps));
        } else {
          this.leafletElement.setZoom(zoom, this.getZoomPanOptions(toProps));
        }
      }

      if (maxBounds && this.shouldUpdateBounds(maxBounds, fromProps.maxBounds)) {
        this.leafletElement.setMaxBounds(maxBounds);
      }

      if (bounds && (this.shouldUpdateBounds(bounds, fromProps.bounds) || boundsOptions !== fromProps.boundsOptions)) {
        if (useFlyTo === true) {
          this.leafletElement.flyToBounds(bounds, this.getFitBoundsOptions(toProps));
        } else {
          this.leafletElement.fitBounds(bounds, this.getFitBoundsOptions(toProps));
        }
      }

      if (boxZoom !== fromProps.boxZoom) {
        if (boxZoom === true) {
          this.leafletElement.boxZoom.enable();
        } else {
          this.leafletElement.boxZoom.disable();
        }
      }

      if (doubleClickZoom !== fromProps.doubleClickZoom) {
        if (doubleClickZoom === true || typeof doubleClickZoom === 'string') {
          this.leafletElement.options.doubleClickZoom = doubleClickZoom;
          this.leafletElement.doubleClickZoom.enable();
        } else {
          this.leafletElement.doubleClickZoom.disable();
        }
      }

      if (dragging !== fromProps.dragging) {
        if (dragging === true) {
          this.leafletElement.dragging.enable();
        } else {
          this.leafletElement.dragging.disable();
        }
      }

      if (keyboard !== fromProps.keyboard) {
        if (keyboard === true) {
          this.leafletElement.keyboard.enable();
        } else {
          this.leafletElement.keyboard.disable();
        }
      }

      if (scrollWheelZoom !== fromProps.scrollWheelZoom) {
        if (scrollWheelZoom === true || typeof scrollWheelZoom === 'string') {
          this.leafletElement.options.scrollWheelZoom = scrollWheelZoom;
          this.leafletElement.scrollWheelZoom.enable();
        } else {
          this.leafletElement.scrollWheelZoom.disable();
        }
      }

      if (tap !== fromProps.tap) {
        if (tap === true) {
          this.leafletElement.tap.enable();
        } else {
          this.leafletElement.tap.disable();
        }
      }

      if (touchZoom !== fromProps.touchZoom) {
        if (touchZoom === true || typeof touchZoom === 'string') {
          this.leafletElement.options.touchZoom = touchZoom;
          this.leafletElement.touchZoom.enable();
        } else {
          this.leafletElement.touchZoom.disable();
        }
      }

      this._updating = false;
    };

    _proto.getZoomPanOptions = function getZoomPanOptions(props) {
      var animate = props.animate,
          duration = props.duration,
          easeLinearity = props.easeLinearity,
          noMoveStart = props.noMoveStart;
      return {
        animate: animate,
        duration: duration,
        easeLinearity: easeLinearity,
        noMoveStart: noMoveStart
      };
    };

    _proto.getFitBoundsOptions = function getFitBoundsOptions(props) {
      var zoomPanOptions = this.getZoomPanOptions(props);
      return _extends$3({}, zoomPanOptions, {}, props.boundsOptions);
    };

    _proto.componentDidMount = function componentDidMount() {
      var props = omit.apply(void 0, [this.props].concat(OTHER_PROPS));
      this.leafletElement = this.createLeafletElement(props);
      this.leafletElement.on('move', this.onViewportChange);
      this.leafletElement.on('moveend', this.onViewportChanged);

      if (props.bounds != null) {
        this.leafletElement.fitBounds(props.bounds, this.getFitBoundsOptions(props));
      }

      this.contextValue = {
        layerContainer: this.leafletElement,
        map: this.leafletElement
      };

      _MapEvented.prototype.componentDidMount.call(this);

      this.forceUpdate(); // Re-render now that leafletElement is created
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (this._ready === false) {
        this._ready = true;

        if (this.props.whenReady) {
          this.leafletElement.whenReady(this.props.whenReady);
        }
      }

      _MapEvented.prototype.componentDidUpdate.call(this, prevProps);

      this.updateLeafletElement(prevProps, this.props);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      _MapEvented.prototype.componentWillUnmount.call(this);

      this.leafletElement.off('move', this.onViewportChange);
      this.leafletElement.off('moveend', this.onViewportChanged); // The canvas renderer uses requestAnimationFrame, making a deferred call to a deleted object
      // When preferCanvas is set, use simpler teardown logic

      if (this.props.preferCanvas === true) {
        this.leafletElement._initEvents(true);

        this.leafletElement._stop();
      } else {
        this.leafletElement.remove();
      }
    };

    _proto.shouldUpdateCenter = function shouldUpdateCenter(next, prev) {
      if (!prev) return true;
      next = normalizeCenter(next);
      prev = normalizeCenter(prev);
      return next[0] !== prev[0] || next[1] !== prev[1];
    };

    _proto.shouldUpdateBounds = function shouldUpdateBounds(next, prev) {
      return prev ? !L.latLngBounds(next).equals(L.latLngBounds(prev)) : true;
    };

    _proto.render = function render() {
      return React__default.createElement("div", {
        className: this.className,
        id: this.props.id,
        ref: this.bindContainer,
        style: this.props.style
      }, this.contextValue ? React__default.createElement(LeafletProvider, {
        value: this.contextValue
      }, this.props.children) : null);
    };

    return Map;
  }(MapEvented);

  var Marker = /*#__PURE__*/function (_MapLayer) {
    _inheritsLoose(Marker, _MapLayer);

    function Marker() {
      return _MapLayer.apply(this, arguments) || this;
    }

    var _proto = Marker.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      var el = new L.Marker(props.position, this.getOptions(props));
      this.contextValue = _extends$3({}, props.leaflet, {
        popupContainer: el
      });
      return el;
    };

    _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      if (toProps.position !== fromProps.position) {
        this.leafletElement.setLatLng(toProps.position);
      }

      if (toProps.icon !== fromProps.icon) {
        this.leafletElement.setIcon(toProps.icon);
      }

      if (toProps.zIndexOffset !== fromProps.zIndexOffset) {
        this.leafletElement.setZIndexOffset(toProps.zIndexOffset);
      }

      if (toProps.opacity !== fromProps.opacity) {
        this.leafletElement.setOpacity(toProps.opacity);
      }

      if (toProps.draggable !== fromProps.draggable) {
        if (toProps.draggable === true) {
          this.leafletElement.dragging.enable();
        } else {
          this.leafletElement.dragging.disable();
        }
      }
    };

    _proto.render = function render() {
      var children = this.props.children;
      return children == null || this.contextValue == null ? null : React__default.createElement(LeafletProvider, {
        value: this.contextValue
      }, children);
    };

    return Marker;
  }(MapLayer);

  var Marker$1 = withLeaflet(Marker);

  var idCounter = 0;

  var uniqueId = function uniqueId() {
    return ++idCounter;
  };

  var LEAFLET_PANES = ['tile', 'shadow', 'overlay', 'map', 'marker', 'tooltip', 'popup'];
  var PANE_RE = /-*pane/gi;

  var isLeafletPane = function isLeafletPane(name) {
    return LEAFLET_PANES.indexOf(name.replace(PANE_RE, '')) !== -1;
  };

  var paneStyles = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  var Pane = /*#__PURE__*/function (_Component) {
    _inheritsLoose(Pane, _Component);

    function Pane() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _defineProperty$1(_assertThisInitialized(_this), "state", {
        name: undefined,
        context: undefined
      });

      _defineProperty$1(_assertThisInitialized(_this), "setStyle", function (_temp) {
        var _ref = _temp === void 0 ? _this.props : _temp,
            style = _ref.style,
            className = _ref.className;

        var pane = _this.getPane(_this.state.name);

        if (pane) {
          if (className) {
            addClassName(pane, className);
          }

          if (style) {
            // Without the cast, Flow throws this error:
            //   Cannot assign style[key] to pane.style[key] because string
            //   is incompatible with number.
            Object.keys(style).forEach(function (key) {
              pane.style[key] = style[key];
            });
          }
        }
      });

      return _this;
    }

    var _proto = Pane.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.createPane(this.props);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (!this.state.name) {
        // Do nothing if this.state.name is undefined due to errors or
        // an invalid props.name value
        return;
      } // If the 'name' prop has changed the current pane is unmounted and a new
      // pane is created.


      if (this.props.name !== prevProps.name) {
        this.removePane();
        this.createPane(this.props);
      } else {
        // Remove the previous css class name from the pane if it has changed.
        // setStyle() will take care of adding in the updated className
        if (prevProps.className && this.props.className !== prevProps.className) {
          var pane = this.getPane(this.state.name);

          if (pane != null && prevProps.className != null) {
            removeClassName(pane, prevProps.className);
          }
        } // Update the pane's DOM node style and class


        this.setStyle(this.props);
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.removePane();
    };

    _proto.createPane = function createPane(props) {
      var map = props.leaflet.map;
      var name = props.name || "pane-" + uniqueId();

      if (map != null && map.createPane != null) {
        var isDefault = isLeafletPane(name);
        var existing = isDefault || this.getPane(name);

        if (existing == null) {
          map.createPane(name, this.getParentPane());
        } else {
          var message = isDefault ? "You must use a unique name for a pane that is not a default leaflet pane (" + name + ")" : "A pane with this name already exists. (" + name + ")";
           warning_1(false, message) ;
        }

        this.setState({
          name: name,
          context: _extends$3({}, props.leaflet, {
            pane: name
          })
        }, this.setStyle);
      }
    };

    _proto.removePane = function removePane() {
      // Remove the created pane
      var name = this.state.name;

      if (name != null) {
        var pane = this.getPane(name);
        if (pane != null && pane.remove) pane.remove();
        var map = this.props.leaflet.map;

        if (map != null && map._panes != null) {
          map._panes = omit(map._panes, name);
          map._paneRenderers = omit(map._paneRenderers, name);
        }
      }
    };

    _proto.getParentPane = function getParentPane() {
      return this.getPane(this.props.pane || this.props.leaflet.pane);
    };

    _proto.getPane = function getPane(name) {
      if (name != null && this.props.leaflet.map != null) {
        return this.props.leaflet.map.getPane(name);
      }
    };

    _proto.render = function render() {
      var context = this.state.context;
      return context ? React__default.createElement(LeafletProvider, {
        value: context
      }, React__default.createElement("div", {
        style: paneStyles
      }, this.props.children)) : null;
    };

    return Pane;
  }(React.Component);

  var Pane$1 = withLeaflet(Pane);

  var Polygon = /*#__PURE__*/function (_Path) {
    _inheritsLoose(Polygon, _Path);

    function Polygon() {
      return _Path.apply(this, arguments) || this;
    }

    var _proto = Polygon.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      return new L.Polygon(props.positions, this.getOptions(props));
    };

    _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      if (toProps.positions !== fromProps.positions) {
        this.leafletElement.setLatLngs(toProps.positions);
      }

      this.setStyleIfChanged(fromProps, toProps);
    };

    return Polygon;
  }(Path);

  var Polygon$1 = withLeaflet(Polygon);

  var Polyline = /*#__PURE__*/function (_Path) {
    _inheritsLoose(Polyline, _Path);

    function Polyline() {
      return _Path.apply(this, arguments) || this;
    }

    var _proto = Polyline.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      return new L.Polyline(props.positions, this.getOptions(props));
    };

    _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      if (toProps.positions !== fromProps.positions) {
        this.leafletElement.setLatLngs(toProps.positions);
      }

      this.setStyleIfChanged(fromProps, toProps);
    };

    return Polyline;
  }(Path);

  var Polyline$1 = withLeaflet(Polyline);

  var Popup = /*#__PURE__*/function (_DivOverlay) {
    _inheritsLoose(Popup, _DivOverlay);

    function Popup() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _DivOverlay.call.apply(_DivOverlay, [this].concat(args)) || this;

      _defineProperty$1(_assertThisInitialized(_this), "onPopupOpen", function (_ref) {
        var popup = _ref.popup;

        if (popup === _this.leafletElement) {
          _this.onOpen();
        }
      });

      _defineProperty$1(_assertThisInitialized(_this), "onPopupClose", function (_ref2) {
        var popup = _ref2.popup;

        if (popup === _this.leafletElement) {
          _this.onClose();
        }
      });

      _defineProperty$1(_assertThisInitialized(_this), "onRender", function () {
        if (_this.props.autoPan !== false && _this.leafletElement.isOpen()) {
          if (_this.leafletElement._map && _this.leafletElement._map._panAnim) {
            _this.leafletElement._map._panAnim = undefined;
          }

          _this.leafletElement._adjustPan();
        }
      });

      return _this;
    }

    var _proto = Popup.prototype;

    _proto.getOptions = function getOptions(props) {
      return _extends$3({}, _DivOverlay.prototype.getOptions.call(this, props), {
        autoPan: false
      });
    };

    _proto.createLeafletElement = function createLeafletElement(props) {
      var options = this.getOptions(props);
      options.autoPan = props.autoPan !== false;
      return new L.Popup(options, props.leaflet.popupContainer);
    };

    _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      if (toProps.position !== fromProps.position) {
        this.leafletElement.setLatLng(toProps.position);
      }
    };

    _proto.componentDidMount = function componentDidMount() {
      var position = this.props.position;
      var _this$props$leaflet = this.props.leaflet,
          map = _this$props$leaflet.map,
          popupContainer = _this$props$leaflet.popupContainer;
      var el = this.leafletElement;

      if (map != null) {
        map.on({
          popupopen: this.onPopupOpen,
          popupclose: this.onPopupClose
        });
      }

      if (popupContainer) {
        // Attach to container component
        popupContainer.bindPopup(el);
      } else {
        // Attach to a Map
        if (position) {
          el.setLatLng(position);
        }

        el.openOn(map);
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      var map = this.props.leaflet.map;

      if (map != null) {
        map.off({
          popupopen: this.onPopupOpen,
          popupclose: this.onPopupClose
        });
        map.removeLayer(this.leafletElement);
      }

      _DivOverlay.prototype.componentWillUnmount.call(this);
    };

    return Popup;
  }(DivOverlay);

  _defineProperty$1(Popup, "defaultProps", {
    pane: 'popupPane'
  });

  var Popup$1 = withLeaflet(Popup);

  var Rectangle = /*#__PURE__*/function (_Path) {
    _inheritsLoose(Rectangle, _Path);

    function Rectangle() {
      return _Path.apply(this, arguments) || this;
    }

    var _proto = Rectangle.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      return new L.Rectangle(props.bounds, this.getOptions(props));
    };

    _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      if (toProps.bounds !== fromProps.bounds) {
        this.leafletElement.setBounds(toProps.bounds);
      }

      this.setStyleIfChanged(fromProps, toProps);
    };

    return Rectangle;
  }(Path);

  var Rectangle$1 = withLeaflet(Rectangle);

  var ScaleControl = /*#__PURE__*/function (_MapControl) {
    _inheritsLoose(ScaleControl, _MapControl);

    function ScaleControl() {
      return _MapControl.apply(this, arguments) || this;
    }

    var _proto = ScaleControl.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      return new L.Control.Scale(props);
    };

    return ScaleControl;
  }(MapControl);

  var ScaleControl$1 = withLeaflet(ScaleControl);

  var SVGOverlay = /*#__PURE__*/function (_MapComponent) {
    _inheritsLoose(SVGOverlay, _MapComponent);

    function SVGOverlay(props) {
      var _this;

      _this = _MapComponent.call(this, props) || this;

      _defineProperty$1(_assertThisInitialized(_this), "leafletElement", void 0);

      _defineProperty$1(_assertThisInitialized(_this), "container", void 0);

      _this.leafletElement = _this.createLeafletElement(props);
      return _this;
    }

    var _proto = SVGOverlay.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      this.container = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      return new L.SVGOverlay(this.container, props.bounds, this.getOptions(props));
    };

    _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      if (toProps.bounds !== fromProps.bounds) {
        this.leafletElement.setBounds(toProps.bounds);
      }

      if (toProps.opacity !== fromProps.opacity) {
        this.leafletElement.setOpacity(toProps.opacity);
      }

      if (toProps.zIndex !== fromProps.zIndex) {
        this.leafletElement.setZIndex(toProps.zIndex);
      }
    };

    _proto.componentDidMount = function componentDidMount() {
      _MapComponent.prototype.componentDidMount.call(this);

      this.layerContainer.addLayer(this.leafletElement);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      _MapComponent.prototype.componentDidUpdate.call(this, prevProps);

      if (this.props.attribution !== prevProps.attribution) {
        var map = this.props.leaflet.map;

        if (map != null && map.attributionControl != null) {
          map.attributionControl.removeAttribution(prevProps.attribution);
          map.attributionControl.addAttribution(this.props.attribution);
        }
      }

      this.updateLeafletElement(prevProps, this.props);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      _MapComponent.prototype.componentWillUnmount.call(this);

      this.layerContainer.removeLayer(this.leafletElement);
      this.container = null;
    };

    _proto.render = function render() {
      var children = this.props.children;

      if (children == null || this.container == null) {
        return null;
      }

      return reactDom.createPortal(children, this.container);
    };

    _createClass(SVGOverlay, [{
      key: "layerContainer",
      get: function get() {
        return this.props.leaflet.layerContainer || this.props.leaflet.map;
      }
    }]);

    return SVGOverlay;
  }(MapComponent);

  var SVGOverlay$1 = withLeaflet(SVGOverlay);

  var TileLayer = /*#__PURE__*/function (_GridLayer) {
    _inheritsLoose(TileLayer, _GridLayer);

    function TileLayer() {
      return _GridLayer.apply(this, arguments) || this;
    }

    var _proto = TileLayer.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      return new L.TileLayer(props.url, this.getOptions(props));
    };

    _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      _GridLayer.prototype.updateLeafletElement.call(this, fromProps, toProps);

      if (toProps.url !== fromProps.url) {
        this.leafletElement.setUrl(toProps.url);
      }
    };

    return TileLayer;
  }(GridLayer);

  var TileLayer$1 = withLeaflet(TileLayer);

  var Tooltip = /*#__PURE__*/function (_DivOverlay) {
    _inheritsLoose(Tooltip, _DivOverlay);

    function Tooltip() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _DivOverlay.call.apply(_DivOverlay, [this].concat(args)) || this;

      _defineProperty$1(_assertThisInitialized(_this), "onTooltipOpen", function (_ref) {
        var tooltip = _ref.tooltip;

        if (tooltip === _this.leafletElement) {
          _this.onOpen();
        }
      });

      _defineProperty$1(_assertThisInitialized(_this), "onTooltipClose", function (_ref2) {
        var tooltip = _ref2.tooltip;

        if (tooltip === _this.leafletElement) {
          _this.onClose();
        }
      });

      return _this;
    }

    var _proto = Tooltip.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      return new L.Tooltip(this.getOptions(props), props.leaflet.popupContainer);
    };

    _proto.componentDidMount = function componentDidMount() {
      var popupContainer = this.props.leaflet.popupContainer;
      if (popupContainer == null) return;
      popupContainer.on({
        tooltipopen: this.onTooltipOpen,
        tooltipclose: this.onTooltipClose
      });
      popupContainer.bindTooltip(this.leafletElement);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      var popupContainer = this.props.leaflet.popupContainer;
      if (popupContainer == null) return;
      popupContainer.off({
        tooltipopen: this.onTooltipOpen,
        tooltipclose: this.onTooltipClose
      });

      if (popupContainer._map != null) {
        popupContainer.unbindTooltip(this.leafletElement);
      }
    };

    return Tooltip;
  }(DivOverlay);

  _defineProperty$1(Tooltip, "defaultProps", {
    pane: 'tooltipPane'
  });

  var Tooltip$1 = withLeaflet(Tooltip);

  var VideoOverlay = /*#__PURE__*/function (_MapLayer) {
    _inheritsLoose(VideoOverlay, _MapLayer);

    function VideoOverlay() {
      return _MapLayer.apply(this, arguments) || this;
    }

    var _proto = VideoOverlay.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      return new L.VideoOverlay(props.url, props.bounds, this.getOptions(props));
    };

    _proto.componentDidMount = function componentDidMount() {
      _MapLayer.prototype.componentDidMount.call(this);

      if (this.props.play === true) {
        this.leafletElement.getElement().play();
      }
    };

    _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      if (toProps.url !== fromProps.url) {
        this.leafletElement.setUrl(toProps.url);
      }

      if (toProps.bounds !== fromProps.bounds) {
        this.leafletElement.setBounds(L.latLngBounds(toProps.bounds));
      }

      if (toProps.opacity !== fromProps.opacity) {
        this.leafletElement.setOpacity(toProps.opacity);
      }

      if (toProps.zIndex !== fromProps.zIndex) {
        this.leafletElement.setZIndex(toProps.zIndex);
      } // flowlint-next-line sketchy-null-bool:off


      if (toProps.play === true && !fromProps.play) {
        this.leafletElement.getElement().play(); // flowlint-next-line sketchy-null-bool:off
      } else if (!toProps.play && fromProps.play === true) {
        this.leafletElement.getElement().pause();
      }
    };

    return VideoOverlay;
  }(MapLayer);

  var VideoOverlay$1 = withLeaflet(VideoOverlay);

  var WMSTileLayer = /*#__PURE__*/function (_GridLayer) {
    _inheritsLoose(WMSTileLayer, _GridLayer);

    function WMSTileLayer() {
      return _GridLayer.apply(this, arguments) || this;
    }

    var _proto = WMSTileLayer.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      var url = props.url,
          params = _objectWithoutPropertiesLoose$4(props, ["url"]);

      var _this$getOptions = this.getOptions(params),
          _l = _this$getOptions.leaflet,
          options = _objectWithoutPropertiesLoose$4(_this$getOptions, ["leaflet"]);

      return new L.TileLayer.WMS(url, options);
    };

    _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
      _GridLayer.prototype.updateLeafletElement.call(this, fromProps, toProps);

      var prevUrl = fromProps.url,
          _po = fromProps.opacity,
          _pz = fromProps.zIndex,
          prevProps = _objectWithoutPropertiesLoose$4(fromProps, ["url", "opacity", "zIndex"]);

      var _this$getOptions2 = this.getOptions(prevProps),
          _pl = _this$getOptions2.leaflet,
          prevParams = _objectWithoutPropertiesLoose$4(_this$getOptions2, ["leaflet"]);

      var url = toProps.url,
          _o = toProps.opacity,
          _z = toProps.zIndex,
          props = _objectWithoutPropertiesLoose$4(toProps, ["url", "opacity", "zIndex"]);

      var _this$getOptions3 = this.getOptions(props),
          _l = _this$getOptions3.leaflet,
          params = _objectWithoutPropertiesLoose$4(_this$getOptions3, ["leaflet"]);

      if (url !== prevUrl) {
        this.leafletElement.setUrl(url);
      }

      if (!fastDeepEqual(params, prevParams)) {
        this.leafletElement.setParams(params);
      }
    };

    _proto.getOptions = function getOptions(params) {
      var superOptions = _GridLayer.prototype.getOptions.call(this, params);

      return Object.keys(superOptions).reduce(function (options, key) {
        if (!EVENTS_RE.test(key)) {
          options[key] = superOptions[key];
        }

        return options;
      }, {});
    };

    return WMSTileLayer;
  }(GridLayer);

  var WMSTileLayer$1 = withLeaflet(WMSTileLayer);

  var ZoomControl = /*#__PURE__*/function (_MapControl) {
    _inheritsLoose(ZoomControl, _MapControl);

    function ZoomControl() {
      return _MapControl.apply(this, arguments) || this;
    }

    var _proto = ZoomControl.prototype;

    _proto.createLeafletElement = function createLeafletElement(props) {
      return new L.Control.Zoom(props);
    };

    return ZoomControl;
  }(MapControl);

  var ZoomControl$1 = withLeaflet(ZoomControl);

  var es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    LeafletConsumer: LeafletConsumer,
    LeafletProvider: LeafletProvider,
    withLeaflet: withLeaflet,
    useLeaflet: useLeaflet,
    AttributionControl: AttributionControl$1,
    Circle: Circle$1,
    CircleMarker: CircleMarker$1,
    DivOverlay: DivOverlay,
    FeatureGroup: FeatureGroup$1,
    GeoJSON: GeoJSON$1,
    GridLayer: GridLayer,
    ImageOverlay: ImageOverlay$1,
    LayerGroup: LayerGroup$1,
    LayersControl: LayersControlExport,
    ControlledLayer: ControlledLayer,
    Map: Map$1,
    MapComponent: MapComponent,
    MapControl: MapControl,
    MapEvented: MapEvented,
    MapLayer: MapLayer,
    Marker: Marker$1,
    Pane: Pane$1,
    Path: Path,
    Polygon: Polygon$1,
    Polyline: Polyline$1,
    Popup: Popup$1,
    Rectangle: Rectangle$1,
    ScaleControl: ScaleControl$1,
    SVGOverlay: SVGOverlay$1,
    TileLayer: TileLayer$1,
    Tooltip: Tooltip$1,
    VideoOverlay: VideoOverlay$1,
    WMSTileLayer: WMSTileLayer$1,
    ZoomControl: ZoomControl$1
  });

  var reactLeafletCustomControl = createCommonjsModule(function (module, exports) {
  !function(e,t){module.exports=t(L__default,propTypes,es,reactDom__default,React__default);}(commonjsGlobal,function(e,t,o,r,n){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=6)}([function(t,o){t.exports=e;},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),n=r.Control.extend({options:{className:""},onAdd:function(){var e=r.DomUtil.create("div",this.options.className);return r.DomEvent.disableClickPropagation(e),e}});t.default=n,e.exports=t.default;},function(e,o){e.exports=t;},function(e,t){e.exports=o;},function(e,t){e.exports=r;},function(e,t){e.exports=n;},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),n=function e(t,o,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,o);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,o,r)}if("value"in n)return n.value;var u=n.get;return void 0!==u?u.call(r):void 0},i=o(5),u=o(4),l=o(3),a=f(o(2)),c=f(o(1));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}(t,l.MapControl),r(t,[{key:"createLeafletElement",value:function(e){var t=e.position,o=e.className;return this.leafletElement=new c.default({position:t,className:o}),this.leafletElement}},{key:"updateLeafletElement",value:function(e,o){n(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateLeafletElement",this).call(this,e,o),this.renderContent();}},{key:"componentDidMount",value:function(){n(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidMount",this).call(this),this.renderContent();}},{key:"componentWillUnmount",value:function(){(0, u.unmountComponentAtNode)(this.leafletElement.getContainer()),n(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentWillUnmount",this).call(this);}},{key:"renderContent",value:function(){var e=this.leafletElement.getContainer();(0, u.render)(i.Children.only(this.props.children),e);}}]),t}();p.propTypes={className:a.default.string,children:a.default.node,position:a.default.string},t.default=(0, l.withLeaflet)(p),e.exports=t.default;}])});
  });

  var Control = unwrapExports(reactLeafletCustomControl);
  var reactLeafletCustomControl_1 = reactLeafletCustomControl.ReactLeafletCustomControl;

  var defaultProps = {
    iconSize: 30,
    iconAnchor: [15, 30],
    popupAnchor: [0, -25],
    tooltipAnchor: [0, -25]
  };
  var defaultMarker = new L__default.divIcon(_objectSpread2({}, defaultProps, {
    className: 'ezgeodatagouv__marker'
  }));
  var homeMarker = new L__default.divIcon(_objectSpread2({}, defaultProps, {
    className: 'ezgeodatagouv__marker--start'
  }));
  var selectedMarker = new L__default.divIcon(_objectSpread2({}, defaultProps, {
    className: 'ezgeodatagouv__marker--selected'
  }));

  function useLocationSearch(coordinates) {
    var _useSymfonyContext = useSymfonyContext(),
        siteaccess = _useSymfonyContext.siteaccess,
        contentType = _useSymfonyContext.contentType,
        maxDistance = _useSymfonyContext.maxDistance;

    var _useState = React.useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        resultList = _useState2[0],
        setResultList = _useState2[1];

    React.useEffect(function () {
      if (coordinates.length > 0) {
        var isFresh = true;

        var _coordinates = _slicedToArray(coordinates, 2),
            latitude = _coordinates[0],
            longitude = _coordinates[1];

        client("search/".concat(contentType, "/").concat(maxDistance, "/").concat(latitude, "/").concat(longitude), {
          headers: {
            Accept: 'application/vnd.ez.api.ContentList+json',
            'X-Siteaccess': siteaccess
          }
        }).then(function (data) {
          return normalizeContentList(data);
        }).then(function (result) {
          if (isFresh) setResultList(result);
        });
        return function () {
          return isFresh = false;
        };
      }
    }, [coordinates]);
    return resultList;

    function normalizeContentList(data) {
      var ContentList = data.ContentList.ContentInfo;

      if (ContentList.length > 0) {
        return Promise.all(promiseAllWrapper(ContentList, siteaccess)).then(function (html) {
          return ContentList.reduce(function (acc, ContentInfo, index) {
            return [].concat(_toConsumableArray(acc), [{
              _id: ContentInfo.Content._id,
              _href: ContentInfo.Content._href,
              name: ContentInfo.Content.TranslatedName,
              distance: ContentInfo._distance,
              html: html[index],
              loc: ContentInfo.Content.CurrentVersion.Version.Fields.field.find(function (field) {
                return field.fieldTypeIdentifier === 'ezgmaplocation';
              }).fieldValue
            }]);
          }, []);
        });
      } else {
        return [];
      }
    }
  }

  var ResultList = function ResultList(_ref) {
    var list = _ref.list,
        currentIndex = _ref.currentIndex,
        changeIndex = _ref.changeIndex;
    return list.length > 0 ? list.map(function (item, index) {
      return /*#__PURE__*/React__default.createElement("div", {
        className: "ezgeodatagouv__line__wrapper".concat(index === currentIndex ? '--selected' : ''),
        key: item._id,
        onClick: function onClick() {
          return changeIndex(index);
        },
        dangerouslySetInnerHTML: {
          __html: item.html
        }
      });
    }) : null;
  };

  var ResultMap = function ResultMap(_ref) {
    var coordinates = _ref.coordinates;
    var ref = React.useRef();

    var _useState = React.useState(null),
        _useState2 = _slicedToArray(_useState, 2),
        currentIndex = _useState2[0],
        setIndex = _useState2[1];

    var result = useLocationSearch(coordinates);
    React.useEffect(function () {
      if (currentIndex !== null) {
        ref.current.leafletElement.flyTo([result[currentIndex].loc.latitude, result[currentIndex].loc.longitude], 15);
      }
    }, [currentIndex, result]);
    return result.length > 0 && /*#__PURE__*/React__default.createElement("div", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      style: {
        display: 'block'
      }
    }, /*#__PURE__*/React__default.createElement(ResultList, {
      list: result,
      currentIndex: currentIndex,
      changeIndex: setIndex,
      coords: coordinates
    })), /*#__PURE__*/React__default.createElement("div", {
      style: {
        maxWidth: 400
      }
    }, /*#__PURE__*/React__default.createElement(Map$1, {
      ref: ref,
      zoom: 15,
      bounds: [coordinates].concat(_toConsumableArray(result.reduce(function (acc, _ref2) {
        var _ref2$loc = _ref2.loc,
            latitude = _ref2$loc.latitude,
            longitude = _ref2$loc.longitude;
        return [].concat(_toConsumableArray(acc), [[latitude, longitude]]);
      }, []))),
      boundsOptions: {
        padding: [30, 30]
      },
      useFlyTo: true,
      style: {
        width: 300,
        height: 300
      }
    }, /*#__PURE__*/React__default.createElement(Control, {
      position: "topleft",
      className: "leaflet-bar ezgeodatagouv__control--reset"
    }, /*#__PURE__*/React__default.createElement("a", {
      href: "#",
      onClick: function onClick(e) {
        e.preventDefault();
        setIndex(null);
        ref.current.leafletElement.flyToBounds(ref.current.leafletElement.getBounds(), {
          maxZoom: 15
        });
      }
    }, /*#__PURE__*/React__default.createElement("svg", {
      viewBox: "0 0 32 32"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M32 0h-13l5 5-6 6 3 3 6-6 5 5z"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M32 32v-13l-5 5-6-6-3 3 6 6-5 5z"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M0 32h13l-5-5 6-6-3-3-6 6-5-5z"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M0 0v13l5-5 6 6 3-3-6-6 5-5z"
    })))), /*#__PURE__*/React__default.createElement(ScaleControl$1, {
      imperial: false
    }), /*#__PURE__*/React__default.createElement(TileLayer$1, {
      attribution: "&copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    }), /*#__PURE__*/React__default.createElement(Marker$1, {
      zIndexOffset: 1000,
      position: coordinates,
      icon: homeMarker
    }, /*#__PURE__*/React__default.createElement(Tooltip$1, null, "Search point")), result.map(function (_ref3, index) {
      var name = _ref3.name,
          _ref3$loc = _ref3.loc,
          latitude = _ref3$loc.latitude,
          longitude = _ref3$loc.longitude;
      return /*#__PURE__*/React__default.createElement(Marker$1, {
        icon: index === currentIndex ? selectedMarker : defaultMarker,
        position: [latitude, longitude],
        onClick: function onClick() {
          return setIndex(index);
        }
      }, /*#__PURE__*/React__default.createElement(Popup$1, {
        autoClose: true
      }, name));
    }))));
  };

  var GeoFinder = function GeoFinder() {
    var _useState = React.useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        coordinates = _useState2[0],
        setCoordinates = _useState2[1];

    var _useState3 = React.useState(''),
        _useState4 = _slicedToArray(_useState3, 2),
        searchTerm = _useState4[0],
        setSearchTerm = _useState4[1];

    var addresses = useAddressSearch(searchTerm);

    var handleSearchTermChange = function handleSearchTermChange(event) {
      setSearchTerm(event.target.value);
    };

    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Combobox, {
      onSelect: function onSelect(value) {
        var coords = addresses.find(function (a) {
          return a.properties.label === value;
        }).geometry.coordinates;
        coords.reverse();
        setCoordinates(coords);
      }
    }, /*#__PURE__*/React__default.createElement(ComboboxInput, {
      selectOnClick: true,
      className: "ezgeodatagouv__search--input",
      onChange: handleSearchTermChange
    }), addresses && /*#__PURE__*/React__default.createElement(ComboboxPopover, {
      className: "shadow-popup"
    }, addresses.length > 0 ? /*#__PURE__*/React__default.createElement(ComboboxList, null, addresses.map(function (_ref) {
      var _ref$properties = _ref.properties,
          id = _ref$properties.id,
          label = _ref$properties.label;
      return /*#__PURE__*/React__default.createElement(ComboboxOption, {
        key: id,
        value: label
      });
    })) : /*#__PURE__*/React__default.createElement("span", {
      style: {
        display: 'block',
        margin: 8
      }
    }, "No results found"))), /*#__PURE__*/React__default.createElement(ResultMap, {
      coordinates: coordinates
    }));
  };

  var root = document.getElementById('root_geo_finder');
  var props$1 = {
    siteaccess: root.getAttribute('data-siteaccess'),
    maxDistance: root.getAttribute('data-distance'),
    contentType: root.getAttribute('data-contenttype')
  };
  reactDom__default.render( /*#__PURE__*/React__default.createElement(SymfonyContextProvider, {
    value: props$1
  }, /*#__PURE__*/React__default.createElement(GeoFinder, null)), document.getElementById('root_geo_finder'));

})));
