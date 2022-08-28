'use strict';
exports.id = 210;
exports.ids = [210];
exports.modules = {
  /***/ 7074: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__);

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      default: () => /* binding */ _app,
    });

    // EXTERNAL MODULE: ./node_modules/next/head.js
    var head = __webpack_require__(9008);
    var head_default = /*#__PURE__*/ __webpack_require__.n(head);
    // EXTERNAL MODULE: ./node_modules/next/router.js
    var router = __webpack_require__(1163);
    var router_default = /*#__PURE__*/ __webpack_require__.n(router);
    // EXTERNAL MODULE: ./node_modules/react/index.js
    var react = __webpack_require__(7294); // CONCATENATED MODULE: ./src/components/error-boundary/index.tsx
    class ErrorBoundary extends react.Component {
      constructor(props) {
        super(props);
        this.state = {};
      }

      static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {
          error,
        };
      }

      render() {
        if (this.state.error) {
          // You can render any custom fallback UI
          console.log(`ErrorBoundary: ${this.state.error}`); // eslint-disable-line
        } // eslint-disable-next-line react/prop-types

        return this.props.children;
      }
    }

    /* harmony default export */ const error_boundary = ErrorBoundary;
    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(5893); // CONCATENATED MODULE: ./src/pages/_app.tsx
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
      (0, react.useEffect)(() => {
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

        router_default().events.on('hashChangeComplete', handleHashChange);
        router_default().events.on('routeChangeComplete', handleHashChange);
        return () => {
          router_default().events.off('hashChangeComplete', handleHashChange);
          router_default().events.off('routeChangeComplete', handleHashChange);
        };
      }, []);
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
          /*#__PURE__*/ (0, jsx_runtime.jsxs)(head_default(), {
            children: [
              /*#__PURE__*/ jsx_runtime.jsx('meta', {
                name: 'msapplication-TileColor',
                content: '#ffffff',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('meta', {
                name: 'msapplication-TileImage',
                content: 'favicon/ms-icon-144x144.png',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('meta', {
                name: 'theme-color',
                content: '#ffffff',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('meta', {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('meta', {
                name: 'theme-color',
                content: '#F4514D',
              }),
            ],
          }),
          /*#__PURE__*/ jsx_runtime.jsx(error_boundary, {
            children: /*#__PURE__*/ jsx_runtime.jsx(Component, _objectSpread({}, pageProps)),
          }),
        ],
      });
    }

    /* harmony default export */ const _app = MyApp;

    /***/
  },

  /***/ 4001: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => /* binding */ MyDocument,
      /* harmony export */
    });
    /* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6859);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
    /* harmony import */ var _segment_snippet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2913);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
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

        if (NEXT_PUBLIC_STAGE === 'development') {
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
                      href: '/favicon/favicon.ico',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'mask-icon',
                      href: '/favicon/favicon.svg',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'apple-touch-icon',
                      sizes: '60x60',
                      href: '/favicon/apple-icon-60x60.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'apple-touch-icon',
                      sizes: '72x72',
                      href: '/favicon/apple-icon-72x72.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'apple-touch-icon',
                      sizes: '114x114',
                      href: '/favicon/apple-icon-114x114.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'apple-touch-icon',
                      sizes: '152x152',
                      href: '/favicon/apple-icon-152x152.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'apple-touch-icon',
                      sizes: '180x180',
                      href: '/favicon/apple-icon-180x180.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '192x192',
                      href: '/favicon/android-icon-192x192.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '16x16',
                      href: '/favicon/favicon-16x16.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '32x32',
                      href: '/favicon/favicon-32x32.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '96x96',
                      href: '/favicon/favicon-96x96.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '96x96',
                      href: '/favicon/favicon-128x128.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '96x96',
                      href: '/favicon/favicon-152x152.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '96x96',
                      href: '/favicon/favicon-167x167.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '96x96',
                      href: '/favicon/favicon-180x180.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '96x96',
                      href: '/favicon/favicon-192x192.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'icon',
                      type: 'image/png',
                      sizes: '96x96',
                      href: '/favicon/favicon-196x196.png',
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                      rel: 'manifest',
                      href: '/manifest.json',
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
      '{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/8z3ViENqGhQdZkz5pB9xu/_buildManifest.js","static/8z3ViENqGhQdZkz5pB9xu/_ssgManifest.js","static/8z3ViENqGhQdZkz5pB9xu/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-b6c8a4b3d8f363fc.js","static/chunks/framework-81ec7e63fad0631d.js","static/chunks/main-1a59f16f14cc63cc.js","static/chunks/05d954cf-e7d5cbc273286a3d.js","static/chunks/457-8f9da16ded35ac8b.js","static/chunks/890-6efaea27752f597f.js","static/chunks/661-10ad51cf032767c0.js","static/chunks/957-3ef05d5c09b43817.js","static/chunks/pages/index-470c897b91c37614.js"],"/[traclink]":["static/chunks/webpack-b6c8a4b3d8f363fc.js","static/chunks/framework-81ec7e63fad0631d.js","static/chunks/main-1a59f16f14cc63cc.js","static/chunks/05d954cf-e7d5cbc273286a3d.js","static/chunks/457-8f9da16ded35ac8b.js","static/chunks/626-7924e6b553d49688.js","static/chunks/890-6efaea27752f597f.js","static/chunks/92-c93380160cf4fe04.js","static/chunks/pages/[traclink]-d39f6abf7f86e05a.js"],"/_app":["static/chunks/webpack-b6c8a4b3d8f363fc.js","static/chunks/framework-81ec7e63fad0631d.js","static/chunks/main-1a59f16f14cc63cc.js","static/chunks/pages/_app-e37cda48c43ee4a6.js"],"/_error":["static/chunks/webpack-b6c8a4b3d8f363fc.js","static/chunks/framework-81ec7e63fad0631d.js","static/chunks/main-1a59f16f14cc63cc.js","static/chunks/pages/_error-815e492bede44f3e.js"],"/link/[link]":["static/chunks/webpack-b6c8a4b3d8f363fc.js","static/chunks/framework-81ec7e63fad0631d.js","static/chunks/main-1a59f16f14cc63cc.js","static/chunks/05d954cf-e7d5cbc273286a3d.js","static/chunks/457-8f9da16ded35ac8b.js","static/chunks/890-6efaea27752f597f.js","static/chunks/pages/link/[link]-cd072929034c414f.js"],"/merch":["static/chunks/webpack-b6c8a4b3d8f363fc.js","static/chunks/framework-81ec7e63fad0631d.js","static/chunks/main-1a59f16f14cc63cc.js","static/chunks/05d954cf-e7d5cbc273286a3d.js","static/chunks/457-8f9da16ded35ac8b.js","static/chunks/890-6efaea27752f597f.js","static/chunks/661-10ad51cf032767c0.js","static/chunks/pages/merch-4f12e2deb16d25e9.js"],"/merch/cart":["static/chunks/webpack-b6c8a4b3d8f363fc.js","static/chunks/framework-81ec7e63fad0631d.js","static/chunks/main-1a59f16f14cc63cc.js","static/chunks/05d954cf-e7d5cbc273286a3d.js","static/chunks/457-8f9da16ded35ac8b.js","static/chunks/890-6efaea27752f597f.js","static/chunks/pages/merch/cart-10c006f6ad9cbb2f.js"],"/merch/detail/[productId]":["static/chunks/webpack-b6c8a4b3d8f363fc.js","static/chunks/framework-81ec7e63fad0631d.js","static/chunks/main-1a59f16f14cc63cc.js","static/chunks/05d954cf-e7d5cbc273286a3d.js","static/chunks/457-8f9da16ded35ac8b.js","static/chunks/890-6efaea27752f597f.js","static/chunks/478-e2e9fbc6434d0c14.js","static/chunks/pages/merch/detail/[productId]-019c164c0aee0170.js"],"/merch/payment/billing":["static/chunks/webpack-b6c8a4b3d8f363fc.js","static/chunks/framework-81ec7e63fad0631d.js","static/chunks/main-1a59f16f14cc63cc.js","static/chunks/05d954cf-e7d5cbc273286a3d.js","static/chunks/ea88be26-916415f9601c3e3d.js","static/chunks/75fc9c18-c2ffd8d428a8879e.js","static/chunks/457-8f9da16ded35ac8b.js","static/chunks/890-6efaea27752f597f.js","static/chunks/478-e2e9fbc6434d0c14.js","static/chunks/pages/merch/payment/billing-09231c87d60e90b3.js"],"/merch/payment/confirmation":["static/chunks/webpack-b6c8a4b3d8f363fc.js","static/chunks/framework-81ec7e63fad0631d.js","static/chunks/main-1a59f16f14cc63cc.js","static/chunks/05d954cf-e7d5cbc273286a3d.js","static/chunks/457-8f9da16ded35ac8b.js","static/chunks/890-6efaea27752f597f.js","static/chunks/pages/merch/payment/confirmation-ee8a0e3ce006c3f1.js"],"/merch/payment/secure-payment":["static/chunks/webpack-b6c8a4b3d8f363fc.js","static/chunks/framework-81ec7e63fad0631d.js","static/chunks/main-1a59f16f14cc63cc.js","static/chunks/05d954cf-e7d5cbc273286a3d.js","static/chunks/ea88be26-916415f9601c3e3d.js","static/chunks/75fc9c18-c2ffd8d428a8879e.js","static/chunks/457-8f9da16ded35ac8b.js","static/chunks/41-54c71e732bb8f935.js","static/chunks/890-6efaea27752f597f.js","static/chunks/pages/merch/payment/secure-payment-7db4d9467e6d537a.js"],"/music":["static/chunks/webpack-b6c8a4b3d8f363fc.js","static/chunks/framework-81ec7e63fad0631d.js","static/chunks/main-1a59f16f14cc63cc.js","static/chunks/05d954cf-e7d5cbc273286a3d.js","static/chunks/457-8f9da16ded35ac8b.js","static/chunks/890-6efaea27752f597f.js","static/chunks/661-10ad51cf032767c0.js","static/chunks/957-3ef05d5c09b43817.js","static/chunks/pages/music-905af105a57a48fb.js"],"/video/[videoId]":["static/chunks/webpack-b6c8a4b3d8f363fc.js","static/chunks/framework-81ec7e63fad0631d.js","static/chunks/main-1a59f16f14cc63cc.js","static/chunks/05d954cf-e7d5cbc273286a3d.js","static/chunks/457-8f9da16ded35ac8b.js","static/chunks/890-6efaea27752f597f.js","static/chunks/661-10ad51cf032767c0.js","static/chunks/92-c93380160cf4fe04.js","static/chunks/pages/video/[videoId]-1e3b98e802622d18.js"]},"ampFirstPages":[]}'
    );

    /***/
  },

  /***/ 3978: /***/ (module) => {
    module.exports = JSON.parse(
      '{"../../node_modules/next/dist/client/index.js -> ../pages/_error":{"id":9894,"files":["static/chunks/894.884bc9854a9cfe85.js"]}}'
    );

    /***/
  },

  /***/ 9450: /***/ (module) => {
    module.exports = { Dg: [] };

    /***/
  },
};
