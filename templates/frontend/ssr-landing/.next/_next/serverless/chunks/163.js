'use strict';
exports.id = 163;
exports.ids = [163];
exports.modules = {
  /***/ 2163: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ BackNavigation,
    });

    // EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
    var styled_components_cjs = __webpack_require__(27);
    // EXTERNAL MODULE: ./src/components/flex/index.tsx
    var flex = __webpack_require__(5343);
    // EXTERNAL MODULE: ./node_modules/framer-motion/dist/framer-motion.cjs.js
    var framer_motion_cjs = __webpack_require__(9141);
    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(8521); // CONCATENATED MODULE: ./src/components/icons/back/index.tsx
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

    function BackIcon(props) {
      const iconMotion = {
        rest: {
          x: 0,
          scale: 1,
        },
        hover: {
          x: -2,
          scale: 1.0625,
        },
        tap: {
          x: -100,
          scale: 0.95,
        },
      };
      return /*#__PURE__*/ jsx_runtime.jsx(IconWrapper, {
        initial: 'rest',
        whileHover: 'hover',
        whileTap: 'tap',
        animate: 'rest',
        children: /*#__PURE__*/ (0, jsx_runtime.jsxs)(
          'svg',
          _objectSpread(
            _objectSpread(
              {
                width: '40',
                height: '40',
                viewBox: '0 0 50 50',
              },
              props
            ),
            {},
            {
              children: [
                /*#__PURE__*/ jsx_runtime.jsx(StyledCircle, {
                  cx: '25',
                  cy: '25',
                  r: '25',
                }),
                /*#__PURE__*/ jsx_runtime.jsx(StyledPath, {
                  variants: iconMotion,
                  d: 'M31 24h-9.6l3.3-3.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5 5c-0.1 0.1-0.2 0.2-0.2 0.3 -0.1 0.2-0.1 0.5 0 0.8 0.1 0.1 0.1 0.2 0.2 0.3l5 5C23.5 30.9 23.7 31 24 31s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4L21.4 26H31c0.6 0 1-0.4 1-1S31.6 24 31 24z',
                }),
              ],
            }
          )
        ),
      });
    }
    const IconWrapper = (0, styled_components_cjs /* default */.ZP)(
      framer_motion_cjs /* motion.div */.ww.div
    ).withConfig({
      displayName: 'back__IconWrapper',
      componentId: 'om8no8-0',
    })(
      ['cursor:pointer;width:40px;height:40px;&:hover{circle{fill:', ';}}'],
      ({ theme }) => theme.colors.itemBackgroundHover
    );
    const StyledCircle = styled_components_cjs /* default.circle.withConfig */.ZP.circle
      .withConfig({
        displayName: 'back__StyledCircle',
        componentId: 'om8no8-1',
      })(
      ['fill:', ';transition:fill ', ';'],
      ({ theme }) => theme.colors.itemBackground,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`
    );
    const StyledPath = (0, styled_components_cjs /* default */.ZP)(
      framer_motion_cjs /* motion.path */.ww.path
    ).withConfig({
      displayName: 'back__StyledPath',
      componentId: 'om8no8-2',
    })(['fill:', ';'], ({ theme }) => theme.colors.icon);
    // EXTERNAL MODULE: ./node_modules/next/router.js
    var next_router = __webpack_require__(1163); // CONCATENATED MODULE: ./src/components/back-navigation/index.tsx
    function BackNavigation({ artistName, title, onClick }) {
      const router = (0, next_router.useRouter)();
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(NavigationContainer, {
        alignItems: 'center',
        children: [
          /*#__PURE__*/ jsx_runtime.jsx(BackIcon, {
            onClick: onClick ? onClick : () => router.back(),
          }),
          /*#__PURE__*/ jsx_runtime.jsx(Title, {
            children: title ? title : artistName,
          }),
        ],
      });
    }
    const NavigationContainer = (0, styled_components_cjs /* default */.ZP)(flex /* default */.Z).withConfig({
      displayName: 'back-navigation__NavigationContainer',
      componentId: 'kfmxgl-0',
    })(
      ['margin-bottom:30px;@media (max-width:', '){margin-bottom:15px;}'],
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );
    const Title = styled_components_cjs /* default.h6.withConfig */.ZP.h6
      .withConfig({
        displayName: 'back-navigation__Title',
        componentId: 'kfmxgl-1',
      })(
      ['font-size:14px;font-weight:700;text-transform:uppercase;margin-left:18px;opacity:0.7;color:', ';'],
      ({ theme }) => theme.colors.primary
    );

    /***/
  },

  /***/ 5343: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* unused harmony export Flex */
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8521);

    const Flex = (props) =>
      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx('div', {
        className: props.className,
        onClick: (ev) => (props.onClick ? props.onClick(ev) : null),
        children: props.children || '',
      });
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (0,
    styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.ZP)(Flex).withConfig({
      displayName: 'flex',
      componentId: 'sc-53hndv-0',
    })(
      [
        'display:flex;justify-content:',
        ';flex-direction:',
        ';flex-grow:',
        ';flex-basis:',
        ';flex-shrink:',
        ';flex-wrap:',
        ';flex:',
        ';align-items:',
        ';',
      ],
      (props) => props.justifyContent || 'flex-start',
      (props) => props.flexDirection || 'row',
      (props) => props.flexGrow || 0,
      (props) => props.flexBasis || 'auto',
      (props) => props.flexShrink || 1,
      (props) => props.flexWrap || 'nowrap',
      (props) => props.flex || ' 0 1 auto',
      (props) => props.alignItems || 'stretch'
    );

    /***/
  },
};
