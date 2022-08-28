'use strict';
exports.id = 596;
exports.ids = [596];
exports.modules = {
  /***/ 9596: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ SimpleLink,
    });

    // EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
    var styled_components_cjs = __webpack_require__(27);
    // EXTERNAL MODULE: ./src/hooks/is-mobile.tsx
    var is_mobile = __webpack_require__(2447);
    // EXTERNAL MODULE: ./src/utils/get-social-icon.tsx + 16 modules
    var get_social_icon = __webpack_require__(1389);
    // EXTERNAL MODULE: ./src/hooks/normalize-text.tsx
    var normalize_text = __webpack_require__(2590);
    // EXTERNAL MODULE: ./src/components/cover-image/index.tsx
    var cover_image = __webpack_require__(1355);
    // EXTERNAL MODULE: ./node_modules/framer-motion/dist/framer-motion.cjs.js
    var framer_motion_cjs = __webpack_require__(9141);
    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(5893); // CONCATENATED MODULE: ./src/components/icons/arrow-right/index.tsx
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

    function ArrowRight(props) {
      const iconMotion = {
        rest: {
          x: 0,
          scale: 1,
        },
        hover: {
          x: 3,
          scale: 1.0625,
        },
        tap: {
          x: 100,
          scale: 0.95,
        },
      };
      return /*#__PURE__*/ jsx_runtime.jsx(IconWrapper, {
        initial: 'rest',
        whileHover: 'hover',
        whileTap: 'tap',
        animate: 'rest',
        children: /*#__PURE__*/ jsx_runtime.jsx(
          'svg',
          _objectSpread(
            _objectSpread(
              {
                width: '11',
                height: '10',
                viewBox: '0 0 11 10',
              },
              props
            ),
            {},
            {
              style: {
                overflow: 'visible',
              },
              children: /*#__PURE__*/ jsx_runtime.jsx(StyledPath, {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M5.64007 1.53697L8.0606 4.09174L0.837498 4.12698C0.614275 4.12787 0.400549 4.22353 0.243444 4.39288C0.08634 4.56224 -0.00124073 4.79136 1.23978e-05 5.02975C0.0010519 5.26799 0.090724 5.49602 0.249279 5.66362C0.407835 5.83121 0.62227 5.92463 0.845354 5.92329L8.06688 5.88889L5.67856 8.46967C5.52135 8.63872 5.43351 8.86758 5.43439 9.10584C5.43528 9.3441 5.52481 9.57221 5.68328 9.73993C6.0136 10.089 6.54622 10.0863 6.87351 9.73405L10.8017 5.49791C11.0691 5.20761 11.0656 4.74071 10.7938 4.45503L6.82401 0.260002C6.49396 -0.0889478 5.96158 -0.0863191 5.63457 0.265876C5.47741 0.435182 5.38969 0.664244 5.39072 0.902639C5.39175 1.14103 5.48145 1.36922 5.64007 1.53697Z',
                fill: props.fill,
                variants: iconMotion,
              }),
            }
          )
        ),
      });
    }
    const IconWrapper = (0, styled_components_cjs /* default */.ZP)(
      framer_motion_cjs /* motion.div */.ww.div
    ).withConfig({
      displayName: 'arrow-right__IconWrapper',
      componentId: 'sc-1ovjnyu-0',
    })(['cursor:pointer;']);
    const StyledPath = (0, styled_components_cjs /* default */.ZP)(
      framer_motion_cjs /* motion.path */.ww.path
    ).withConfig({
      displayName: 'arrow-right__StyledPath',
      componentId: 'sc-1ovjnyu-1',
    })(['fill:', ';'], ({ theme }) => theme.colors.icon);
    // EXTERNAL MODULE: ./src/components/featured-badge/index.tsx + 1 modules
    var featured_badge = __webpack_require__(5322);
    // EXTERNAL MODULE: ./src/components/link-components/text-info.tsx
    var text_info = __webpack_require__(1183);
    // EXTERNAL MODULE: ./src/components/link-components/wrapper-info.tsx
    var wrapper_info = __webpack_require__(7887);
    // EXTERNAL MODULE: ./node_modules/react-intersection-observer/react-intersection-observer.js
    var react_intersection_observer = __webpack_require__(4225);
    // EXTERNAL MODULE: ./src/components/framer/index.tsx
    var framer = __webpack_require__(8052); // CONCATENATED MODULE: ./src/components/simple-link/index.tsx
    function SimpleLink({ data, className, artistId, releaseId, hasDelay, noAnimation }) {
      const theme = (0, styled_components_cjs /* useTheme */.Fg)();
      const isMobile = (0, is_mobile /* default */.Z)();
      const { ref, inView } = (0, react_intersection_observer /* useInView */.YD)({
        triggerOnce: true,
        rootMargin: '200px 0px',
      });

      const handleClick = () => {
        analytics.track('Traclink Click', {
          dsp: data.platform,
          artist_id: artistId,
          release_id: releaseId,
        });
      };

      const SimpleLinkContent = /*#__PURE__*/ (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
          /*#__PURE__*/ (0, jsx_runtime.jsxs)(Content, {
            className: `${data.highlight ? 'highlight' : ''}`,
            children: [
              /*#__PURE__*/ jsx_runtime.jsx(framer_motion_cjs /* motion.div */.ww.div, {
                variants: framer /* hoverMotion */.wM,
                transition: framer /* easeTransition */.BH,
                children: data.platform
                  ? /*#__PURE__*/ jsx_runtime.jsx(PlatformIcon, {
                      as: 'div',
                      children: (0, get_social_icon /* default */.Z)(data.platform),
                    })
                  : /*#__PURE__*/ jsx_runtime.jsx(cover_image /* default */.Z, {
                      src: data.avatar,
                      alt: data.title,
                      variant: data.highlight ? 'squareHighlight' : 'squareSmall',
                    }),
              }),
              /*#__PURE__*/ (0, jsx_runtime.jsxs)(wrapper_info /* default */.Z, {
                highlight: data.highlight,
                children: [
                  /*#__PURE__*/ jsx_runtime.jsx(text_info /* default */.Z, {
                    className: `${data.highlight ? 'highlight' : ''}`,
                    children: /*#__PURE__*/ jsx_runtime.jsx('h3', {
                      children: data.title,
                    }),
                  }),
                  data.highlight
                    ? /*#__PURE__*/ jsx_runtime.jsx(featured_badge /* default */.Z, {
                        className: 'badge',
                      })
                    : null,
                ],
              }),
            ],
          }),
          data.highlight && isMobile
            ? null
            : /*#__PURE__*/ jsx_runtime.jsx(Icon, {
                className: 'icon',
                children: /*#__PURE__*/ jsx_runtime.jsx(ArrowRight, {
                  height: '20px',
                  fill: theme.colors.primary,
                }),
              }),
        ],
      });

      const SimpleLinkClassName = `${className ? className : ''} ${data.highlight ? 'highlight' : ''} ${
        data.platform ? 'platform' : ''
      }`;
      return data.title && data.url
        ? /*#__PURE__*/ jsx_runtime.jsx(Link, {
            className: SimpleLinkClassName,
            href: `/link/${(0, normalize_text /* NormalizeText */.L)(data.title)}`,
            onClick: handleClick,
            variants: noAnimation ? undefined : framer /* scaleAnimations */.LS,
            initial: noAnimation ? undefined : 'initial',
            animate: noAnimation ? undefined : inView || hasDelay === 0 ? 'animate' : 'initial',
            exit: 'exit',
            ref: ref,
            transition: {
              duration: 0.35,
              delay: hasDelay ? hasDelay * 0.1 : 0,
              ease: [0.43, 0.13, 0.23, 0.96],
            },
            children: /*#__PURE__*/ jsx_runtime.jsx(Wrapper, {
              initial: 'rest',
              whileHover: 'hover',
              whileTap: 'tap',
              animate: 'rest',
              className: 'wrapper',
              children: SimpleLinkContent,
            }),
          })
        : null;
    }
    const Link = (0, styled_components_cjs /* default */.ZP)(framer_motion_cjs /* motion.a */.ww.a).withConfig({
      displayName: 'simple-link__Link',
      componentId: 'fqic60-0',
    })(
      [
        'border-radius:5px;background-color:',
        ';color:',
        ';width:100%;cursor:pointer;.wrapper{transition:background-color ',
        ';}&:hover{.wrapper{background-color:',
        ';}}&.highlight{background-color:',
        ';grid-column:span 2;order:-1;.wrapper{padding:32px;gap:32px;@media (max-width:',
        '){padding:24px;gap:24px;}}}&.platform{.wrapper{background-color:',
        ';&:hover{background-color:',
        ';.icon{background-color:',
        ';}}}}',
      ],
      ({ theme }) => theme.colors.itemBackground,
      ({ theme }) => theme.colors.primary,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ theme }) => theme.colors.itemBackgroundHover,
      ({ theme }) => theme.colors.highlightBackground,
      ({ theme }) => `${theme.breakpoints.laptopS}px`,
      ({ theme }) => theme.colors.sidebarBackground,
      ({ theme }) => theme.colors.inputsBackground,
      ({ theme }) => theme.colors.inputsBackground
    );
    const Wrapper = (0, styled_components_cjs /* default */.ZP)(framer_motion_cjs /* motion.div */.ww.div).withConfig({
      displayName: 'simple-link__Wrapper',
      componentId: 'fqic60-1',
    })(
      [
        'padding:20px;display:flex;align-items:center;gap:24px;@media (max-width:',
        '){gap:12px;}@media (max-width:',
        '){height:auto;}',
      ],
      ({ theme }) => `${theme.breakpoints.laptopS}px`,
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );
    const Content = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'simple-link__Content',
        componentId: 'fqic60-2',
      })(
      [
        'display:flex;align-items:center;justify-content:flex-start;width:100%;gap:24px;&.highlight{height:100%;@media (max-width:',
        '){flex-direction:column;}}@media (max-width:',
        '){gap:12px;}',
      ],
      ({ theme }) => `${theme.breakpoints.laptopS}px`,
      ({ theme }) => `${theme.breakpoints.laptopS}px`
    );
    const Icon = styled_components_cjs /* default.button.withConfig */.ZP.button
      .withConfig({
        displayName: 'simple-link__Icon',
        componentId: 'fqic60-3',
      })(
      [
        'background-color:',
        ';display:flex;justify-content:center;align-items:center;flex:0 0 auto;width:',
        ';height:',
        ';border-radius:50%;cursor:pointer;overflow:visible;',
      ],
      ({ theme }) => theme.colors.sidebarBackground,
      ({ theme }) => theme.sizes.commonIconSize,
      ({ theme }) => theme.sizes.commonIconSize
    );
    const PlatformIcon = (0, styled_components_cjs /* default */.ZP)(Icon).withConfig({
      displayName: 'simple-link__PlatformIcon',
      componentId: 'fqic60-4',
    })(
      ['background-color:', ';> svg{height:20px;fill:', ';}'],
      ({ theme }) => theme.colors.itemBackground,
      ({ theme }) => theme.colors.primary
    );

    /***/
  },

  /***/ 2590: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ L: () => /* binding */ NormalizeText,
      /* harmony export */
    });
    const NormalizeText = (value) => {
      return value
        .split(' ')
        .join('-')
        .replace(/[^a-zA-Z ]/g, '')
        .toLowerCase();
    };

    /***/
  },
};
