'use strict';
exports.id = 226;
exports.ids = [226];
exports.modules = {
  /***/ 8874: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ CloseIcon,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8521);
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function _objectSpread(target) {
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

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function CloseIcon(props) {
      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        'svg',
        _objectSpread(
          _objectSpread(
            {
              width: '12',
              height: '12',
              viewBox: '0 0 12 12',
            },
            props
          ),
          {},
          {
            children: [
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('rect', {
                x: '10.9497',
                y: '-0.36377',
                width: '2',
                height: '16',
                rx: '1',
                transform: 'rotate(45 10.9497 -0.36377)',
                fill: props.fill,
              }),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('rect', {
                x: '1.05029',
                y: '-0.36377',
                width: '16',
                height: '2',
                rx: '1',
                transform: 'rotate(45 1.05029 -0.36377)',
                fill: props.fill,
              }),
            ],
          }
        )
      );
    }

    /***/
  },

  /***/ 3904: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ useIsMobile,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var _artist_theme_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2400);

    function useIsMobile() {
      const { 0: windowSize, 1: setWindowSize } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: undefined,
        height: undefined,
      });
      (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      return windowSize.width
        ? windowSize.width <= _artist_theme_breakpoints__WEBPACK_IMPORTED_MODULE_1__ /* ["default"].laptopS */.Z.laptopS
        : false;
    }

    /***/
  },
};
