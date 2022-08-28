'use strict';
exports.id = 818;
exports.ids = [818];
exports.modules = {
  /***/ 1972: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);

    const StyledGrid = styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"].div.withConfig */.ZP.div
      .withConfig({
        displayName: 'grid__StyledGrid',
        componentId: 'sc-1mu4cgu-0',
      })(
      [
        'display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:32px;.full-width{grid-column:span 2;}@media (max-width:',
        '){grid-column-gap:16px;grid-row-gap:32px;}& > *{flex-shrink:0;}',
      ],
      ({ theme }) => `${theme.breakpoints.laptop}px`
    );

    const Grid = ({ className, children }) => {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(StyledGrid, {
        className: className || '',
        children: children,
      });
    };

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Grid;

    /***/
  },

  /***/ 7423: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ link_components_link,
    });

    // EXTERNAL MODULE: ./node_modules/react/index.js
    var react = __webpack_require__(7294);
    // EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
    var styled_components_cjs = __webpack_require__(27);
    // EXTERNAL MODULE: ./node_modules/framer-motion/dist/framer-motion.cjs.js
    var framer_motion_cjs = __webpack_require__(9141);
    // EXTERNAL MODULE: ./node_modules/react-intersection-observer/react-intersection-observer.js
    var react_intersection_observer = __webpack_require__(4225);
    // EXTERNAL MODULE: ./src/components/framer/index.tsx
    var framer = __webpack_require__(8052);
    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(5893); // CONCATENATED MODULE: ./src/components/link-components/wrapper-image.tsx
    const _excluded = ['className', 'children'];

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

    const WrapperImage = (_ref) => {
      let { className, children } = _ref,
        props = _objectWithoutProperties(_ref, _excluded);

      return /*#__PURE__*/ jsx_runtime.jsx(
        Wrapper,
        _objectSpread(
          _objectSpread(
            {
              className: `wrapper-image ${className || ''}`,
            },
            props
          ),
          {},
          {
            children: children,
          }
        )
      );
    };

    /* harmony default export */ const wrapper_image = WrapperImage;
    const Wrapper = (0, styled_components_cjs /* default */.ZP)(framer_motion_cjs /* motion.div */.ww.div).withConfig({
      displayName: 'wrapper-image__Wrapper',
      componentId: 'sc-1uhyz08-0',
    })(
      [
        'padding:32px;border-radius:5px;background-color:',
        ';position:relative;max-height:',
        ';width:100%;display:flex;justify-content:center;transition:background-color ',
        ';@media (max-width:',
        '){display:flex;justify-content:center;align-items:center;padding:0;width:auto;max-height:',
        ';.motion{max-height:',
        ';}}&.highlight{height:',
        ';padding:0;width:auto;background:none;max-height:none;@media (max-width:',
        '){max-height:none;height:',
        ';.motion{height:',
        ';max-height:none;}}}',
      ],
      ({ theme }) => theme.colors.itemBackground,
      ({ theme }) => `calc(${theme.sizes.coverSize} + (32px * 2))`,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ theme }) => `${theme.breakpoints.laptopS}px`,
      ({ theme }) => theme.sizes.coverSizeMobile,
      ({ theme }) => theme.sizes.coverSizeMobile,
      ({ theme }) => theme.sizes.coverSizeHighlight,
      ({ theme }) => `${theme.breakpoints.laptopS}px`,
      ({ theme }) => theme.sizes.coverSizeHighlightMobile,
      ({ theme }) => theme.sizes.coverSizeHighlightMobile
    ); // CONCATENATED MODULE: ./src/components/link-components/link.tsx
    const Link = ({ className, children, href, hasDelay, image, highlight, noAnimation, onClick }) => {
      const [ref, inView] = (0, react_intersection_observer /* useInView */.YD)({
        root: null,
        rootMargin: '100px 0px',
        threshold: 0.3,
        triggerOnce: true,
      });
      return /*#__PURE__*/ jsx_runtime.jsx(StyledLink, {
        className: className || '',
        href: href,
        onClick: onClick,
        ref: ref,
        variants: noAnimation ? undefined : framer /* scaleAnimations */.LS,
        initial: noAnimation ? undefined : 'initial',
        animate: noAnimation ? undefined : inView || hasDelay === 0 ? 'animate' : 'initial',
        exit: 'exit',
        transition: {
          duration: 0.35,
          delay: hasDelay ? hasDelay * 0.1 : 0,
          ease: [0.0, 0.005, 0.2, 1.0],
        },
        children: /*#__PURE__*/ (0, jsx_runtime.jsxs)(link_Wrapper, {
          initial: 'rest',
          whileHover: 'hover',
          whileTap: 'tap',
          animate: 'rest',
          className: 'wrapper',
          children: [
            /*#__PURE__*/ jsx_runtime.jsx(wrapper_image, {
              className: highlight,
              children: /*#__PURE__*/ jsx_runtime.jsx(framer_motion_cjs /* motion.div */.ww.div, {
                className: 'motion',
                variants: framer /* hoverMotion */.wM,
                transition: framer /* easeTransition */.BH,
                children: image,
              }),
            }),
            children,
          ],
        }),
      });
    };

    /* harmony default export */ const link_components_link = Link;
    const StyledLink = (0, styled_components_cjs /* default */.ZP)(framer_motion_cjs /* motion.a */.ww.a).withConfig({
      displayName: 'link__StyledLink',
      componentId: 'gyn5x7-0',
    })(
      [
        '&.highlight{background-color:',
        ';grid-column:span 2;order:-1;.wrapper{flex-direction:row;padding:32px;gap:32px;border-radius:5px;height:100%;@media (max-width:',
        '){padding:24px;gap:24px;flex-direction:column;justify-content:center;align-items:center;}}}&:hover{.wrapper-image{background-color:',
        ';&.highlight{background:none;}}}',
      ],
      ({ theme }) => theme.colors.highlightBackground,
      ({ theme }) => `${theme.breakpoints.laptopS}px`,
      ({ theme }) => theme.colors.itemBackgroundHover
    );
    const link_Wrapper = (0, styled_components_cjs /* default */.ZP)(
      framer_motion_cjs /* motion.div */.ww.div
    ).withConfig({
      displayName: 'link__Wrapper',
      componentId: 'gyn5x7-1',
    })(
      [
        'display:flex;flex-direction:column;align-items:flex-start;gap:24px;@media (max-width:',
        '){gap:12px;}&:hover{.play-icon{opacity:1;}}',
      ],
      ({ theme }) => `${theme.breakpoints.laptopS}px`
    );

    /***/
  },

  /***/ 1362: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);

    const Play = ({ className, children }) => {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(PlayWrapper, {
        className: className || '',
        children: children,
      });
    };

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Play;
    const PlayWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"].div.withConfig */.ZP.div
      .withConfig({
        displayName: 'play-wrapper__PlayWrapper',
        componentId: 'sc-2nscag-0',
      })(
      [
        'background-color:',
        ';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:50%;cursor:pointer;opacity:0;padding:0;overflow:hidden;transition:opacity ',
        ';> svg{fill:',
        ';transition:fill ',
        ';}',
      ],
      ({ theme }) => theme.colors.background,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ theme }) => theme.colors.accent,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`
    );

    /***/
  },

  /***/ 3492: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ VideoLink,
      /* harmony export */
    });
    /* harmony import */ var _components_icons_play__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6711);
    /* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1355);
    /* harmony import */ var _components_link_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7423);
    /* harmony import */ var _components_featured_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5322);
    /* harmony import */ var _components_link_components_text_info__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(1183);
    /* harmony import */ var _components_link_components_play_wrapper__WEBPACK_IMPORTED_MODULE_5__ =
      __webpack_require__(1362);
    /* harmony import */ var _components_link_components_wrapper_info__WEBPACK_IMPORTED_MODULE_6__ =
      __webpack_require__(7887);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5893);

    function VideoLink({ data, className, artistName, hasDelay, noAnimation }) {
      const handleClick = () => {
        analytics.track('Tracpage Link Click', {
          artist_id: artistName,
          category: data.type === 'embed',
          name: data.title,
        });
      };

      const getCode = () => {
        var _data$url;

        if (data.id) {
          return data.id;
        }

        return (_data$url = data.url) === null || _data$url === void 0 ? void 0 : _data$url.split('embed/')[1];
      };

      const getPoster = () => {
        const code = getCode();
        return [
          `https://img.youtube.com/vi/${code}/maxresdefault.jpg`,
          `https://img.youtube.com/vi/${code}/hqdefault.jpg`,
          `https://img.youtube.com/vi/${code}/mqdefault.jpg`,
          `https://img.youtube.com/vi/${code}/default.jpg`,
        ];
      };

      return data.title && data.url
        ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
            _components_link_components_link__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
            {
              className: className ? className : '',
              href: `/video/${data.id}`,
              onClick: handleClick,
              hasDelay: hasDelay,
              highlight: data.highlight ? 'highlight' : '',
              noAnimation: noAnimation,
              image: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                      _components_cover_image__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
                      {
                        src: getPoster()[0] || undefined,
                        alt: data.title,
                        variant: data.highlight ? 'squareHighlight' : 'square',
                        noAnimation: noAnimation,
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                      _components_link_components_play_wrapper__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                      {
                        className: `play-icon ${data.highlight ? 'highlight' : ''}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                          _components_icons_play__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z,
                          {}
                        ),
                      }
                    ),
                  ],
                }
              ),
              children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
                _components_link_components_wrapper_info__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                {
                  highlight: data.highlight,
                  children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
                      _components_link_components_text_info__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
                      {
                        className: `${data.highlight ? 'highlight' : ''}`,
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx('h3', {
                            children: data.title,
                          }),
                          /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)('p', {
                            children: [artistName, ', Star6ixse7en, MRG, Sweez'],
                          }),
                        ],
                      }
                    ),
                    data.highlight
                      ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                          _components_featured_badge__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
                          {
                            className: 'badge',
                          }
                        )
                      : null,
                  ],
                }
              ),
            }
          )
        : null;
    }

    /***/
  },
};
