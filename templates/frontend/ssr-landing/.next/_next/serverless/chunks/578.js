'use strict';
exports.id = 578;
exports.ids = [578];
exports.modules = {
  /***/ 5578: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ Button,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8521);
    const _excluded = ['children', 'variant', 'fullWidth', 'className'];

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

    function Button(_ref) {
      let { children, variant = 'accent', fullWidth = false, className } = _ref,
        props = _objectWithoutProperties(_ref, _excluded);

      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(
        StyledButton,
        _objectSpread(
          _objectSpread(
            {
              variant: variant,
              fullWidth: fullWidth,
              className: className ? className : '',
            },
            props
          ),
          {},
          {
            children: children,
          }
        )
      );
    }
    const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"].button.withConfig */.ZP.button
      .withConfig({
        displayName: 'button__StyledButton',
        componentId: 'sc-1n9tfjy-0',
      })(
      [
        'font-weight:bold;font-size:16px;line-height:24px;height:100px;display:flex;justify-content:center;align-items:center;border-radius:5px;cursor:pointer;font-family:',
        ';transition:background-color ',
        ';&:hover{opacity:0.8;}',
        ' ',
        ' ',
        ' @media (max-width:',
        '){height:70px;}',
      ],
      ({ theme }) => theme.fontFamily,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ fullWidth }) =>
        fullWidth && (0, styled_components__WEBPACK_IMPORTED_MODULE_2__ /* .css */.iv)(['width:100%;']),
      ({ variant, theme }) =>
        variant === 'accent'
          ? (0, styled_components__WEBPACK_IMPORTED_MODULE_2__ /* .css */.iv)(
              ['color:white;background-color:', ';&:hover{background-color:', ';}'],
              theme.colors.accent,
              theme.colors.accentHover
            )
          : (0, styled_components__WEBPACK_IMPORTED_MODULE_2__ /* .css */.iv)(
              ['color:#111111;background-color:', ';&:hover{background-color:', ';}'],
              theme.colors.secondary,
              theme.colors.secondaryHover
            ),
      ({ disabled }) =>
        disabled &&
        (0, styled_components__WEBPACK_IMPORTED_MODULE_2__ /* .css */.iv)(['opacity:0.5;cursor:not-allowed;']),
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );

    /***/
  },
};
