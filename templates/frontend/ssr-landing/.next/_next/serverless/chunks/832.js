'use strict';
exports.id = 832;
exports.ids = [832];
exports.modules = {
  /***/ 2872: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ Container,
      /* harmony export */
    });
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8521);

    function Container({ className, children, columnFlow, hasBackground }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledContainer, {
        className: className ? className : '',
        columnFlow: columnFlow,
        hasBackground: hasBackground,
        children: children,
      });
    }
    const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__ /* ["default"].div.withConfig */.ZP.div
      .withConfig({
        displayName: 'container__StyledContainer',
        componentId: 'u3fn7h-0',
      })(
      ['max-width:535px;margin:auto;display:flex;flex-flow:row wrap;', ' ', ''],
      ({ columnFlow }) =>
        columnFlow && (0, styled_components__WEBPACK_IMPORTED_MODULE_1__ /* .css */.iv)(['flex-flow:column wrap;']),
      ({ hasBackground }) =>
        hasBackground &&
        (0, styled_components__WEBPACK_IMPORTED_MODULE_1__ /* .css */.iv)(
          ['background-color:', ';border-radius:4px;'],
          ({ theme }) => theme.colors.itemBackground
        )
    );

    /***/
  },

  /***/ 6747: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ ThemeWrapper,
    });

    // EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
    var styled_components_cjs = __webpack_require__(27);
    // EXTERNAL MODULE: ./node_modules/react/index.js
    var react = __webpack_require__(7294);
    // EXTERNAL MODULE: ./node_modules/next/link.js
    var next_link = __webpack_require__(1664);
    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(8521); // CONCATENATED MODULE: ./src/components/icons/logo/index.tsx
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

    function LogoIcon(props) {
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(
        'svg',
        _objectSpread(
          _objectSpread(
            {
              width: '60',
              height: '24',
              viewBox: '0 0 60 24',
            },
            props
          ),
          {},
          {
            children: [
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M5.14128 9.37417V15.9604C5.14128 18.3661 5.56253 18.9229 7.76148 18.9229C8.44017 18.9229 10.4129 18.8888 10.8328 18.8888L10.0573 23.2443C9.66905 23.2443 7.82619 23.2809 7.11492 23.2809C1.29266 23.2809 0 21.746 0 16.0652V0.802073L5.14128 0V5.01815H11.0278L10.2509 9.37417H5.14128Z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M18.5454 23.2805H13.4785V11.7879C13.4785 6.54859 15.9007 4.90643 20.6813 4.90643C21.9245 4.90643 22.9764 4.87173 24.5063 4.97582L23.7407 9.48248C23.3581 9.44729 22.18 9.41309 21.191 9.41309C18.8647 9.41309 18.5454 10.2865 18.5454 12.3807V23.2805Z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M30.7256 17.4678C30.7256 18.8364 31.3128 19.3948 33.14 19.3948H36.6006V17.3649C36.6006 15.9283 36.1101 15.2616 33.7939 15.2616H33.3368C31.2795 15.2616 30.7256 15.7892 30.7256 17.2229V17.4678ZM41.6605 19.6739C41.6605 22.4052 40.68 23.2805 37.9382 23.2805H32.1609C27.3302 23.2805 25.7314 21.2477 25.7314 17.7842V17.049C25.7314 13.1622 27.8855 11.5169 32.3572 11.5169C34.5433 11.5169 35.7516 11.9377 36.6321 12.4623V12.0768C36.6321 10.1518 36.2088 9.20692 33.3687 9.20692C31.9001 9.20692 29.1587 9.17115 27.2316 9.27646L27.9828 4.97043C29.256 4.93466 31.1813 4.90088 33.6957 4.90088C39.1465 4.90088 41.6605 6.75534 41.6605 11.5169V19.6739Z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('mask', {
                id: 'mask0',
                'mask-type': 'alpha',
                maskUnits: 'userSpaceOnUse',
                x: '45',
                y: '4',
                width: '15',
                height: '20',
                children: /*#__PURE__*/ jsx_runtime.jsx('path', {
                  d: 'M45.3359 4.90088H59.3604V23.8892H45.3359V4.90088Z',
                }),
              }),
              /*#__PURE__*/ jsx_runtime.jsx('g', {
                mask: 'url(#mask0)',
                children: /*#__PURE__*/ jsx_runtime.jsx('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M59.2917 4.97845L58.4804 9.51691C56.9253 9.40805 56.1164 9.40805 54.2564 9.40805C51.4522 9.40805 50.7756 9.98455 50.7756 13.4426V15.3515C50.7756 18.8095 51.5188 19.3845 54.2564 19.3845C56.1826 19.3845 57.5008 19.4192 59.3608 19.3139L58.549 23.8156C56.7575 23.8539 55.1013 23.8892 54.1216 23.8892C47.4981 23.8892 45.3359 21.5484 45.3359 15.3515V13.4426C45.3359 7.28346 47.6664 4.9069 54.0554 4.9069C55.272 4.9069 56.7244 4.8701 59.2917 4.97845Z',
                }),
              }),
            ],
          }
        )
      );
    } // CONCATENATED MODULE: ./src/components/layout/page/index.tsx
    function Page({ children, removeBranding }) {
      const theme = (0, styled_components_cjs /* useTheme */.Fg)();
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(StyledLayout, {
        children: [
          !removeBranding
            ? /*#__PURE__*/ jsx_runtime.jsx(LogoWrapper, {
                children: /*#__PURE__*/ jsx_runtime.jsx(StyledLink, {
                  href: '/',
                  children: /*#__PURE__*/ jsx_runtime.jsx('a', {
                    children: /*#__PURE__*/ jsx_runtime.jsx(LogoIcon, {
                      fill: theme.colors.logo,
                    }),
                  }),
                }),
              })
            : null,
          children,
        ],
      });
    }
    const StyledLayout = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'page__StyledLayout',
        componentId: 'qan11h-0',
      })(
      ['background-color:', ';min-width:100vw;min-height:100vh;padding:24px;@media (max-width:', '){padding:16px;}'],
      ({ theme }) => theme.colors.background,
      ({ theme }) => `${theme.breakpoints.mobileL}px`
    );
    const LogoWrapper = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'page__LogoWrapper',
        componentId: 'qan11h-1',
      })(['margin-bottom:10px;height:24px;']);
    const StyledLink = (0, styled_components_cjs /* default */.ZP)(next_link['default']).withConfig({
      displayName: 'page__StyledLink',
      componentId: 'qan11h-2',
    })(['height:24px;']); // CONCATENATED MODULE: ./src/theme/sizes/index.tsx
    /* harmony default export */ const sizes = {
      socialIconSize: '48px',
      commonIconSize: '44px',
      coverSize: '60px',
      coverSizeSmall: '40px',
      coverSizeMobile: '48px',
      coverSizeRounded: '200px',
      coverSizeRoundedMobile: '130px',
    }; // CONCATENATED MODULE: ./src/theme/colors/index.tsx
    /* harmony default export */ const colors = {
      grays: {
        gray1: '#181818',
        gray2: '#2d2f33',
        gray25: '#3B3D42',
        gray3: '#8e8e8e',
        gray4: '#bababa',
        gray5: '#dedede',
        gray6: '#eaeaea',
        gray7: '#676767',
        gray8: '#999999',
        gray85: '#d9d9d9',
        gray9: '#f0f0f0',
      },
      white: '#FFFFFF',
      black: '#111111',
      reds: {
        red1: '#ED3438',
        red2: '#D82F32',
        red3: '#ed0a0f',
      },
      green: {
        green1: '#a2d76b',
      },
    }; // CONCATENATED MODULE: ./src/theme/shadows/index.tsx
    /* harmony default export */ const shadows = {
      redShadow: '10px 10px 20px rgba(237, 52, 56, 0.3);',
    }; // CONCATENATED MODULE: ./src/theme/variant/dark.tsx
    const dark = {
      primary: colors.white,
      primaryHover: colors.grays.gray8,
      secondary: colors.grays.gray4,
      secondaryHover: colors.grays.gray3,
      accent: colors.reds.red1,
      accentHover: colors.reds.red2,
      success: colors.green.green1,
      error: colors.reds.red3,
      background: colors.grays.gray1,
      logo: colors.reds.red1,
      inputsBackground: colors.grays.gray2,
      highLightBackground: colors.white,
      highLightPlay: colors.reds.red1,
      highLightPrimary: colors.grays.gray1,
      highLightSecondary: colors.grays.gray7,
      inputsBackgroundHover: colors.black,
      icon: colors.white,
      itemBackground: colors.grays.gray25,
      itemBackgroundHover: colors.grays.gray2,
    };
    /* harmony default export */ const variant_dark = dark; // CONCATENATED MODULE: ./src/theme/variant/light.tsx
    const light = {
      primary: colors.grays.gray1,
      primaryHover: colors.black,
      secondary: colors.grays.gray7,
      secondaryHover: colors.grays.gray7,
      accent: colors.reds.red1,
      accentHover: colors.reds.red2,
      success: colors.green.green1,
      error: colors.reds.red3,
      background: colors.white,
      logo: colors.reds.red1,
      inputsBackground: colors.grays.gray5,
      highLightBackground: colors.black,
      highLightPlay: colors.grays.gray2,
      highLightPrimary: colors.white,
      highLightSecondary: colors.grays.gray4,
      inputsBackgroundHover: colors.grays.gray4,
      icon: colors.grays.gray2,
      itemBackground: colors.grays.gray9,
      itemBackgroundHover: colors.grays.gray85,
    };
    /* harmony default export */ const variant_light = light;
    // EXTERNAL MODULE: ./src/theme/breakpoints/index.tsx
    var breakpoints = __webpack_require__(2400); // CONCATENATED MODULE: ./src/theme/transitions/index.tsx
    /* harmony default export */ const transitions = {
      duration: '.275s',
      type: 'ease-in-out',
      curve: 'cubic-bezier(0.650, 0.000, 0.450, 1.000)',
    }; // CONCATENATED MODULE: ./src/theme/index.tsx
    function theme_ownKeys(object, enumerableOnly) {
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

    function theme_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          theme_ownKeys(Object(source), true).forEach(function (key) {
            theme_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          theme_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function theme_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    const commonThemeProps = {
      fontFamily: "'Inter', sans-serif;",
      palette: theme_objectSpread({}, colors),
      transitions: theme_objectSpread({}, transitions),
      sizes: theme_objectSpread({}, sizes),
      shadows: theme_objectSpread({}, shadows),
    };
    const theme = {
      light: theme_objectSpread(
        theme_objectSpread({}, commonThemeProps),
        {},
        {
          colors: theme_objectSpread({}, variant_light),
          breakpoints: theme_objectSpread({}, breakpoints /* default */.Z),
        }
      ),
      dark: theme_objectSpread(
        theme_objectSpread({}, commonThemeProps),
        {},
        {
          colors: theme_objectSpread({}, variant_dark),
          breakpoints: theme_objectSpread({}, breakpoints /* default */.Z),
        }
      ),
    };
    /* harmony default export */ const src_theme = theme; // CONCATENATED MODULE: ./src/theme/global/index.tsx
    /* harmony default export */ const global = styled_components_cjs /* createGlobalStyle */.vJ`
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background-color: #F1F2F5;
  color: #32343c;
  font-size: 16px;
  font: 400 16px "Inter", sans-serif;
  font-family: 'Inter', sans-serif;
  text-rendering: geometricPrecision;
  font-feature-settings: "pnum";
  font-variant-numeric: proportional-nums;
  font-weight: normal;
  min-width: 320px;
  margin: 0;
  padding: 0;
  font-stretch: normal;
  font-style: normal;
  overscroll-behavior: none;
}

body.alternate-font {
  background-color: white;
  font: 400 16px "Inter", sans-serif;
  font-family: "Inter", sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  position: relative;
}

a.link-line {
  display: inline-flex;
}

a.link-line.red {
  color: #ED3438;
}

a.link-line:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 100%;
  width: 0%;
  height: 2px;
  background-color: #32343c;
  border-radius: 2px;
  transition: width .25s ease-in-out, right .25s ease-in-out;
}
a.link-line.red:after {
  background-color: #ED3438;
}

a.link-line:hover:after {
  right: 0;
  width: 100%;
}

button,
input,
select,
textarea {
  -webkit-appearance: none;
  filter: none;
  border: none;
  outline: none;
  font-family: "Sen", sans-serif;
}

div[data-consent-manager-dialog] input {
  -webkit-appearance: auto;
}

body.alternate-font button,
body.alternate-font input,
body.alternate-font select,
body.alternate-font textarea {
  font-family: "Inter", sans-serif;
}

button:focus,
input:focus {
  outline: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  background-color: white !important;
  color: #32343C !important;
  -webkit-text-fill-color: #32343C !important;
  box-shadow: 0 0 0 1000px white inset !important;
  -webkit-box-shadow: 0 0 0 1000px white inset !important;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


.mb-5 {
  margin-bottom: 5px;
}
.mb-10 {
  margin-bottom: 5px;
}
.mb-15 {
  margin-bottom: 8px;
}
.mb-20 {
  margin-bottom: 10px;
}
.mb-30 {
  margin-bottom: 15px;
}
.mb-40 {
  margin-bottom: 20px;
}
.mb-50 {
  margin-bottom: 25px;
}
.mb-60 {
  margin-bottom: 30px;
}
.mb-70 {
  margin-bottom: 35px;
}
.mb-80 {
  margin-bottom: 40px;
}

.mt-5 {
  margin-top: 5px;
}
.mt-10 {
  margin-top: 5px;
}
.mt-15 {
  margin-top: 8px;
}
.mt-20 {
  margin-top: 10px;
}
.mt-30 {
  margin-top: 15px;
}
.mt-40 {
  margin-top: 20px;
}
.mt-50 {
  margin-top: 25px;
}
.mt-60 {
  margin-top: 30px;
}
.mt-70 {
  margin-top: 35px;
}
.mt-80 {
  margin-top: 40px;
}

.mr-5 {
  margin-right: 5px;
}
.mr-10 {
  margin-right: 5px;
}

.ml-4 {
  margin-left: 4px;
}

.ml-5 {
  margin-left: 5px;
}

.ml-10 {
  margin-left: 5px;
}

@media only screen and (min-width:1280px) {
	.mb-5 {
    margin-bottom: 5px;
  }
	.mb-10 {
    margin-bottom: 10px;
  }
	.mb-15 {
    margin-bottom: 15px;
  }
  .mb-20 {
    margin-bottom: 20px;
  }
  .mb-30 {
    margin-bottom: 30px;
  }
  .mb-40 {
    margin-bottom: 40px;
  }
  .mb-50 {
    margin-bottom: 50px;
  }
  .mb-60 {
    margin-bottom: 60px;
  }
  .mb-70 {
    margin-bottom: 70px;
  }
  .mb-80 {
    margin-bottom: 80px;
  }

  .mt-5 {
    margin-top: 5px;
  }
  .mt-10 {
    margin-top: 10px;
  }
  .mt-15 {
    margin-top: 15px;
  }
  .mt-20 {
    margin-top: 20px;
  }
  .mt-30 {
    margin-top: 30px;
  }
  .mt-40 {
    margin-top: 40px;
  }
  .mt-50 {
    margin-top: 50px;
  }
  .mt-60 {
    margin-top: 60px;
  }
  .mt-70 {
    margin-top: 70px;
  }
  .mt-80 {
    margin-top: 80px;
  }
}

::selection {
  background: #111111;
  color: #ffffff;
}
`; // CONCATENATED MODULE: ./src/components/theme-wrapper/index.tsx
    function ThemeWrapper({ theme = 'dark', children, removeBranding }) {
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(styled_components_cjs /* ThemeProvider */.f6, {
        theme: src_theme[theme],
        children: [
          /*#__PURE__*/ jsx_runtime.jsx(global, {}),
          /*#__PURE__*/ jsx_runtime.jsx(Page, {
            removeBranding: removeBranding,
            children: children,
          }),
        ],
      });
    }

    /***/
  },

  /***/ 2400: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
      mobileS: 321,
      mobileM: 374,
      mobileL: 425,
      tablet: 769,
      laptopS: 1023,
      laptop: 1366,
      laptopL: 1439,
      laptopXL: 1600,
      desktop: 1919,
      desktopL: 2559,
    };

    /***/
  },
};
