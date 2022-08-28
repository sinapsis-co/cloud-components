'use strict';
exports.id = 139;
exports.ids = [139];
exports.modules = {
  /***/ 1355: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ CoverImage,
      /* harmony export */
    });
    /* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9141);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
    /* harmony import */ var _components_framer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8052);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);

    function CoverImage({ src, alt, variant = 'square', noAnimation }) {
      return src
        ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Cover, {
            variant: variant,
            src: src,
            alt: alt,
            variants: noAnimation
              ? undefined
              : _components_framer__WEBPACK_IMPORTED_MODULE_1__ /* .scaleAnimations */.LS,
            initial: noAnimation ? undefined : 'initial',
            animate: noAnimation ? undefined : 'animate',
            exit: 'exit',
            transition: _components_framer__WEBPACK_IMPORTED_MODULE_1__ /* .imageTransition */.kr,
          })
        : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(CoverColor, {
            variant: variant,
            variants: noAnimation
              ? undefined
              : _components_framer__WEBPACK_IMPORTED_MODULE_1__ /* .scaleAnimations */.LS,
            initial: noAnimation ? undefined : 'initial',
            animate: noAnimation ? undefined : 'animate',
            exit: 'exit',
            transition: _components_framer__WEBPACK_IMPORTED_MODULE_1__ /* .imageTransition */.kr,
          });
    }
    const Cover = (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.ZP)(
      framer_motion__WEBPACK_IMPORTED_MODULE_0__ /* .motion.img */.ww.img
    ).withConfig({
      displayName: 'cover-image__Cover',
      componentId: 'y910y5-0',
    })(
      ['object-fit:cover;border-radius:5px;', ' ', ' ', ''],
      ({ variant }) =>
        variant === 'square' &&
        (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* .css */.iv)(
          ['width:', ';height:', ';@media (max-width:', '){width:', ';height:', ';}'],
          ({ theme }) => theme.sizes.coverSize,
          ({ theme }) => theme.sizes.coverSize,
          ({ theme }) => `${theme.breakpoints.laptop}px`,
          ({ theme }) => theme.sizes.coverSizeMobile,
          ({ theme }) => theme.sizes.coverSizeMobile
        ),
      ({ variant }) =>
        variant === 'squareSmall' &&
        (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* .css */.iv)(
          ['width:', ';height:', ';'],
          ({ theme }) => theme.sizes.coverSizeSmall,
          ({ theme }) => theme.sizes.coverSizeSmall
        ),
      ({ variant }) =>
        variant === 'squareHighlight' &&
        (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* .css */.iv)(
          ['width:', ';height:', ';@media (max-width:', '){width:', ';height:', ';}'],
          ({ theme }) => theme.sizes.coverSizeHighlight,
          ({ theme }) => theme.sizes.coverSizeHighlight,
          ({ theme }) => `${theme.breakpoints.laptopS}px`,
          ({ theme }) => theme.sizes.coverSizeHighlightMobile,
          ({ theme }) => theme.sizes.coverSizeHighlightMobile
        )
    );
    const CoverColor = (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.ZP)(
      framer_motion__WEBPACK_IMPORTED_MODULE_0__ /* .motion.div */.ww.div
    ).withConfig({
      displayName: 'cover-image__CoverColor',
      componentId: 'y910y5-1',
    })(
      ['background-color:', ';border-radius:5px;', ' ', ' ', ''],
      ({ theme }) => theme.colors.secondary,
      ({ variant }) =>
        variant === 'square' &&
        (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* .css */.iv)(
          ['width:', ';height:', ';@media (max-width:', '){width:', ';height:', ';}'],
          ({ theme }) => theme.sizes.coverSize,
          ({ theme }) => theme.sizes.coverSize,
          ({ theme }) => `${theme.breakpoints.laptop}px`,
          ({ theme }) => theme.sizes.coverSizeMobile,
          ({ theme }) => theme.sizes.coverSizeMobile
        ),
      ({ variant }) =>
        variant === 'squareSmall' &&
        (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* .css */.iv)(
          ['width:', ';height:', ';'],
          ({ theme }) => theme.sizes.coverSizeSmall,
          ({ theme }) => theme.sizes.coverSizeSmall
        ),
      ({ variant }) =>
        variant === 'squareHighlight' &&
        (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* .css */.iv)(
          ['width:', ';height:', ';@media (max-width:', '){width:', ';height:', ';}'],
          ({ theme }) => theme.sizes.coverSizeHighlight,
          ({ theme }) => theme.sizes.coverSizeHighlight,
          ({ theme }) => `${theme.breakpoints.laptopS}px`,
          ({ theme }) => theme.sizes.coverSizeHighlightMobile,
          ({ theme }) => theme.sizes.coverSizeHighlightMobile
        )
    );

    /***/
  },

  /***/ 6711: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
    const _excluded = ['className', 'onClick', 'hasPointer'];

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

    const PlayIcon = (_ref) => {
      let { className, onClick, hasPointer } = _ref,
        props = _objectWithoutProperties(_ref, _excluded);

      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        'svg',
        _objectSpread(
          _objectSpread(
            {
              className: className,
              'aria-hidden': 'true',
              role: 'img',
              width: '11',
              height: '14',
              viewBox: '0 0 11 14',
              onClick: onClick,
              style: {
                cursor: onClick || hasPointer ? 'pointer' : 'auto',
              },
            },
            props
          ),
          {},
          {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('path', {
              d: 'M0 2.73703C0 1.13964 1.78029 0.18686 3.1094 1.07293L9.50385 5.3359C10.6913 6.12754 10.6913 7.87246 9.50385 8.6641L3.1094 12.9271C1.78029 13.8131 0 12.8604 0 11.263V2.73703Z',
              fill: props.fill,
            }),
          }
        )
      );
    };

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = PlayIcon;

    /***/
  },

  /***/ 1183: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);

    const Info = ({ className, children }) => {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(InfoWrapper, {
        className: className || '',
        children: children,
      });
    };

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Info;
    const InfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"].div.withConfig */.ZP.div
      .withConfig({
        displayName: 'text-info__InfoWrapper',
        componentId: 'zd3pfj-0',
      })(
      [
        'text-align:left;> h3,> p{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}> h3{margin:0px;color:',
        ';font-size:16px;font-weight:700;line-height:24px;}> p{color:',
        ';margin:0px;font-size:14px;font-weight:400;line-height:20px;opacity:0.7;}@media (max-width:',
        '){&.highlight{> h3,> p{text-align:center;white-space:pre-wrap;text-overflow:ellipsis;}}> h3,> p{white-space:pre-wrap;text-overflow:ellipsis;}}',
      ],
      ({ theme }) => theme.colors.primary,
      ({ theme }) => theme.colors.primary,
      ({ theme }) => `${theme.breakpoints.laptopS}px`
    );

    /***/
  },

  /***/ 7887: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);

    const WrapperInfo = ({ className, children, highlight }) => {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Wrapper, {
        className: className || '',
        highlight: highlight,
        children: children,
      });
    };

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = WrapperInfo;
    const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"].div.withConfig */.ZP.div
      .withConfig({
        displayName: 'wrapper-info__Wrapper',
        componentId: 'sc-1kn8itc-0',
      })(
      ['display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;height:100%;', ''],
      ({ highlight }) =>
        highlight &&
        (0, styled_components__WEBPACK_IMPORTED_MODULE_2__ /* .css */.iv)(
          ['@media (max-width:', '){align-items:center;gap:24px;}'],
          ({ theme }) => `${theme.breakpoints.laptopS}px`
        )
    );

    /***/
  },
};
