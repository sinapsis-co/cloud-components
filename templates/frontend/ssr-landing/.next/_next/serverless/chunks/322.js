'use strict';
exports.id = 322;
exports.ids = [322];
exports.modules = {
  /***/ 5322: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ featured_badge,
    });

    // EXTERNAL MODULE: ./node_modules/react/index.js
    var react = __webpack_require__(7294);
    // EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
    var styled_components_cjs = __webpack_require__(27);
    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(5893); // CONCATENATED MODULE: ./src/components/icons/featured/index.tsx
    const _excluded = ['className', 'onClick'];

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

    const FeaturedIcon = (_ref) => {
      let { className, onClick } = _ref,
        props = _objectWithoutProperties(_ref, _excluded);

      const theme = (0, styled_components_cjs /* useTheme */.Fg)();
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(
        'svg',
        _objectSpread(
          _objectSpread(
            {
              viewBox: '0 0 13 14',
              width: 13,
              height: 14,
              className: className,
              onClick: onClick,
              'aria-hidden': 'true',
              role: 'img',
              style: {
                cursor: onClick ? 'pointer' : 'auto',
              },
            },
            props
          ),
          {},
          {
            children: [
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fill: theme.colors.highlightDark,
                d: 'M5.53,12.45c-.5,0-.99-.21-1.33-.6l-.17-.2c-.38-.44-.43-1.07-.12-1.56,.19-.31,.25-.66,.17-1.01-.09-.35-.3-.64-.62-.83L.95,6.74C.41,6.42,.05,5.85,0,5.24c-.05-.62,.22-1.23,.7-1.63L4.56,.46C5.04,.06,5.68-.09,6.29,.05c.62,.14,1.12,.55,1.37,1.11l1.08,2.41c.3,.66,1.01,1.04,1.74,.93,.57-.09,1.14,.12,1.5,.55l.1,.11c.68,.79,.57,1.96-.23,2.62l-5.21,4.26c-.32,.27-.72,.39-1.11,.39ZM1.99,5.09l2.51,1.5c.77,.46,1.3,1.18,1.51,2.03,.11,.46,.12,.93,.03,1.38l4.33-3.55c-1.47,.07-2.86-.77-3.46-2.11l-1.08-2.41L1.99,5.09Zm8.47,1.21h0Z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fill: theme.colors.highlightDark,
                d: 'M12.19,14c-.23,0-.46-.1-.62-.28l-1.28-1.49c-.29-.33-.24-.83,.1-1.12,.34-.28,.85-.24,1.14,.1l1.28,1.49c.29,.33,.24,.83-.1,1.12-.15,.12-.34,.18-.52,.18Z',
              }),
            ],
          }
        )
      );
    };

    /* harmony default export */ const featured = FeaturedIcon; // CONCATENATED MODULE: ./src/components/featured-badge/index.tsx
    const FeaturedBadge = ({ className }) => {
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(StyledBadge, {
        className: className || '',
        children: [
          /*#__PURE__*/ jsx_runtime.jsx(featured, {}),
          /*#__PURE__*/ jsx_runtime.jsx('h6', {
            children: 'Featured',
          }),
        ],
      });
    };

    /* harmony default export */ const featured_badge = FeaturedBadge;
    const StyledBadge = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'featured-badge__StyledBadge',
        componentId: 'sc-69krp2-0',
      })(
      [
        'background-color:',
        ';border-radius:90px;max-width:120px;padding:8px 16px;display:flex;justify-content:flex-start;align-items:center;gap:10px;h6{color:',
        ';font-size:14px;font-weight:700;line-height:24px;margin:0;}@media (max-width:',
        '){padding:8px;}',
      ],
      ({ theme }) => theme.colors.highlightLight,
      ({ theme }) => theme.colors.highlightDark,
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );

    /***/
  },
};
