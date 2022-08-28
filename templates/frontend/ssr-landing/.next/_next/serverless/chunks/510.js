'use strict';
exports.id = 510;
exports.ids = [510];
exports.modules = {
  /***/ 7600: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9008);
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1163);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7294);
    /* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5141);
    /* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(174);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8521);
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

    function MyApp({ Component, pageProps }) {
      (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        const handleHashChange = () => {
          if (location.hash) {
            const element = document.querySelector(`#scroll-${location.hash.slice(1)}`);

            if (element) {
              const rect = element.getBoundingClientRect();
              window.scrollTo({
                top: window.scrollY + rect.top - 120,
                behavior: 'smooth',
              });
            }
          }
        };

        next_router__WEBPACK_IMPORTED_MODULE_1__['default'].events.on('hashChangeComplete', handleHashChange);
        next_router__WEBPACK_IMPORTED_MODULE_1__['default'].events.on('routeChangeComplete', handleHashChange);
        return () => {
          next_router__WEBPACK_IMPORTED_MODULE_1__['default'].events.off('hashChangeComplete', handleHashChange);
          next_router__WEBPACK_IMPORTED_MODULE_1__['default'].events.off('routeChangeComplete', handleHashChange);
        };
      }, []);
      const stripePromise = (0, _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__ /* .loadStripe */.J)(
        'pk_test_51GuOjtHv0LNpqD7HL4JfffZf4EyhZdJxSya2G7THwb1L2M3enr8FYzXGax7O6mxVltMMR5HyZTHF3pQ2Ls4v1In800KSTe9QFv'
      );
      const ELEMENTS_OPTIONS = {
        fonts: [
          {
            cssSrc: 'https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap',
          },
        ],
      };
      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
        {
          children: [
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
              next_head__WEBPACK_IMPORTED_MODULE_0__['default'],
              {
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx('meta', {
                    name: 'msapplication-TileColor',
                    content: '#ffffff',
                  }),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx('meta', {
                    name: 'msapplication-TileImage',
                    content: 'favicon/ms-icon-144x144.png',
                  }),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx('meta', {
                    name: 'theme-color',
                    content: '#ffffff',
                  }),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx('meta', {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                  }),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx('meta', {
                    name: 'theme-color',
                    content: '#F4514D',
                  }),
                ],
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(
              _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ /* .Elements */.eK,
              {
                stripe: stripePromise,
                options: ELEMENTS_OPTIONS,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(
                  Component,
                  _objectSpread({}, pageProps)
                ),
              }
            ),
          ],
        }
      );
    }

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = MyApp;

    /***/
  },

  /***/ 9820: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => /* binding */ MyDocument,
      /* harmony export */
    });
    /* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6859);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
    /* harmony import */ var _segment_snippet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2913);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8521);
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

    // This write key is associated with https://segment.com/nextjs-example/sources/nextjs.

    const { NEXT_PUBLIC_SEGMENT_KEY, NEXT_PUBLIC_STAGE, NEXT_PUBLIC_OPTIMIZE_ID } = process.env;
    class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_0__['default'] {
      static async getInitialProps(ctx) {
        const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_3__ /* .ServerStyleSheet */.qH();
        const originalRenderPage = ctx.renderPage;

        try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: (App) => (props) =>
                sheet.collectStyles(
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(App, _objectSpread({}, props))
                ),
            });

          const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_0__['default'].getInitialProps(ctx);
          return _objectSpread(
            _objectSpread({}, initialProps),
            {},
            {
              styles: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                {
                  children: [initialProps.styles, sheet.getStyleElement()],
                }
              ),
            }
          );
        } finally {
          sheet.seal();
        }
      }

      renderSnippet() {
        const opts = {
          apiKey: NEXT_PUBLIC_SEGMENT_KEY,
          // note: the page option only covers SSR tracking.
          // Page.js is used to track other events using `window.analytics.page()`
          page: true,
        };

        if (NEXT_PUBLIC_STAGE === 'dev') {
          return _segment_snippet__WEBPACK_IMPORTED_MODULE_1__ /* .max */
            .F(opts);
        }

        return _segment_snippet__WEBPACK_IMPORTED_MODULE_1__ /* .min */
          .V(opts);
      }

      render() {
        return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
          next_document__WEBPACK_IMPORTED_MODULE_0__.Html,
          {
            children: [
              /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                next_document__WEBPACK_IMPORTED_MODULE_0__.Head,
                {
                  children: [
                    NEXT_PUBLIC_OPTIMIZE_ID &&
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('script', {
                        async: true,
                        src: `https://www.googleoptimize.com/optimize.js?id=${NEXT_PUBLIC_OPTIMIZE_ID}`,
                      }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      href: 'favicon/favicon.ico',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'mask-icon',
                      href: 'favicon/favicon.svg',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'apple-touch-icon',
                      sizes: '60x60',
                      href: 'favicon/apple-icon-60x60.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'apple-touch-icon',
                      sizes: '72x72',
                      href: 'favicon/apple-icon-72x72.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'apple-touch-icon',
                      sizes: '114x114',
                      href: 'favicon/apple-icon-114x114.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'apple-touch-icon',
                      sizes: '152x152',
                      href: 'favicon/apple-icon-152x152.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'apple-touch-icon',
                      sizes: '180x180',
                      href: 'favicon/apple-icon-180x180.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '192x192',
                      href: 'favicon/android-icon-192x192.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '16x16',
                      href: 'favicon/favicon-16x16.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '32x32',
                      href: 'favicon/favicon-32x32.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '96x96',
                      href: 'favicon/favicon-96x96.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '96x96',
                      href: 'favicon/favicon-128x128.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '96x96',
                      href: 'favicon/favicon-152x152.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '96x96',
                      href: 'favicon/favicon-167x167.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '96x96',
                      href: 'favicon/favicon-180x180.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '96x96',
                      href: 'favicon/favicon-192x192.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '96x96',
                      href: 'favicon/favicon-196x196.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'manifest',
                      href: 'manifest.json',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      // rel="preload"
                      rel: 'stylesheet',
                      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=Sen:wght@400;700&display=swap',
                      as: 'style', // onLoad="this.onload=null;this.rel='stylesheet'"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('script', {
                      dangerouslySetInnerHTML: {
                        __html: this.renderSnippet(),
                      },
                    }),
                  ],
                }
              ),
              /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('body', {
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
                    next_document__WEBPACK_IMPORTED_MODULE_0__.Main,
                    {}
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
                    next_document__WEBPACK_IMPORTED_MODULE_0__.NextScript,
                    {}
                  ),
                ],
              }),
            ],
          }
        );
      }
    }

    /***/
  },

  /***/ 7020: /***/ (module) => {
    module.exports = JSON.parse(
      '{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/XZ1fBINrLTU3MNm8djZa8/_buildManifest.js","static/XZ1fBINrLTU3MNm8djZa8/_ssgManifest.js","static/XZ1fBINrLTU3MNm8djZa8/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-5d23685de7ba8ab3.js","static/chunks/framework-83f3d149a311c54b.js","static/chunks/main-8eac6eed8f057324.js","static/chunks/75fc9c18-4d2f0a9f494a9dad.js","static/chunks/987-fff329590702184d.js","static/chunks/55-613c8dae201e6754.js","static/chunks/742-08f6746dc0bfa545.js","static/chunks/886-1ac7d030001e7130.js","static/chunks/pages/index-94f1f08585e9d61f.js"],"/[traclink]":["static/chunks/webpack-5d23685de7ba8ab3.js","static/chunks/framework-83f3d149a311c54b.js","static/chunks/main-8eac6eed8f057324.js","static/chunks/05d954cf-78aae20234759595.js","static/chunks/987-fff329590702184d.js","static/chunks/819-9711d4260aefac15.js","static/chunks/55-613c8dae201e6754.js","static/chunks/766-180054e0afb4e564.js","static/chunks/886-1ac7d030001e7130.js","static/chunks/pages/[traclink]-8f319fd404116d8b.js"],"/_app":["static/chunks/webpack-5d23685de7ba8ab3.js","static/chunks/framework-83f3d149a311c54b.js","static/chunks/main-8eac6eed8f057324.js","static/chunks/pages/_app-de66733c1416d0ba.js"],"/_error":["static/chunks/webpack-5d23685de7ba8ab3.js","static/chunks/framework-83f3d149a311c54b.js","static/chunks/main-8eac6eed8f057324.js","static/chunks/pages/_error-1f95674706ce531a.js"],"/merch":["static/chunks/webpack-5d23685de7ba8ab3.js","static/chunks/framework-83f3d149a311c54b.js","static/chunks/main-8eac6eed8f057324.js","static/chunks/05d954cf-78aae20234759595.js","static/chunks/987-fff329590702184d.js","static/chunks/819-9711d4260aefac15.js","static/chunks/55-613c8dae201e6754.js","static/chunks/227-bdc33319d423c911.js","static/chunks/pages/merch-8aea3d905f2673d3.js"],"/merch/cart":["static/chunks/webpack-5d23685de7ba8ab3.js","static/chunks/framework-83f3d149a311c54b.js","static/chunks/main-8eac6eed8f057324.js","static/chunks/05d954cf-78aae20234759595.js","static/chunks/987-fff329590702184d.js","static/chunks/819-9711d4260aefac15.js","static/chunks/55-613c8dae201e6754.js","static/chunks/227-bdc33319d423c911.js","static/chunks/48-e1d24f3a2bc07b05.js","static/chunks/pages/merch/cart-8d762f4aa2876f7f.js"],"/merch/detail/[productId]":["static/chunks/webpack-5d23685de7ba8ab3.js","static/chunks/framework-83f3d149a311c54b.js","static/chunks/main-8eac6eed8f057324.js","static/chunks/05d954cf-78aae20234759595.js","static/chunks/987-fff329590702184d.js","static/chunks/819-9711d4260aefac15.js","static/chunks/55-613c8dae201e6754.js","static/chunks/742-08f6746dc0bfa545.js","static/chunks/227-bdc33319d423c911.js","static/chunks/324-23c3e77ce171656a.js","static/chunks/pages/merch/detail/[productId]-58d14a023456d545.js"],"/merch/payment/billing":["static/chunks/webpack-5d23685de7ba8ab3.js","static/chunks/framework-83f3d149a311c54b.js","static/chunks/main-8eac6eed8f057324.js","static/chunks/05d954cf-78aae20234759595.js","static/chunks/75fc9c18-4d2f0a9f494a9dad.js","static/chunks/987-fff329590702184d.js","static/chunks/819-9711d4260aefac15.js","static/chunks/742-08f6746dc0bfa545.js","static/chunks/227-bdc33319d423c911.js","static/chunks/324-23c3e77ce171656a.js","static/chunks/pages/merch/payment/billing-ddafc7a95aecf3cf.js"],"/merch/payment/confirmation":["static/chunks/webpack-5d23685de7ba8ab3.js","static/chunks/framework-83f3d149a311c54b.js","static/chunks/main-8eac6eed8f057324.js","static/chunks/05d954cf-78aae20234759595.js","static/chunks/987-fff329590702184d.js","static/chunks/819-9711d4260aefac15.js","static/chunks/227-bdc33319d423c911.js","static/chunks/pages/merch/payment/confirmation-d96af5a22d650b37.js"],"/merch/payment/secure-payment":["static/chunks/webpack-5d23685de7ba8ab3.js","static/chunks/framework-83f3d149a311c54b.js","static/chunks/main-8eac6eed8f057324.js","static/chunks/05d954cf-78aae20234759595.js","static/chunks/987-fff329590702184d.js","static/chunks/819-9711d4260aefac15.js","static/chunks/742-08f6746dc0bfa545.js","static/chunks/227-bdc33319d423c911.js","static/chunks/48-e1d24f3a2bc07b05.js","static/chunks/pages/merch/payment/secure-payment-3822d90bc964c624.js"]},"ampFirstPages":[]}'
    );

    /***/
  },

  /***/ 3978: /***/ (module) => {
    module.exports = JSON.parse(
      '{"../../node_modules/next/dist/client/index.js -> ../pages/_error":{"id":9651,"files":["static/chunks/651.e7ad805f32a091cd.js"]}}'
    );

    /***/
  },

  /***/ 9450: /***/ (module) => {
    module.exports = { Dg: [] };

    /***/
  },
};
