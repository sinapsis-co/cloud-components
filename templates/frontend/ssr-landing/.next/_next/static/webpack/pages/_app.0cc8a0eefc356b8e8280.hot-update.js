webpackHotUpdate_N_E('pages/_app', {
  /***/ './src/components/error-boundary/index.tsx':
    /*!*************************************************!*\
  !*** ./src/components/error-boundary/index.tsx ***!
  \*************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n\n  static getDerivedStateFromError(error) {\n    // Update state so the next render will show the fallback UI.\n    return {\n      error\n    };\n  }\n\n  render() {\n    if (this.state.error) {\n      // You can render any custom fallback UI\n      console.log(`ErrorBoundary: ${this.state.error}`); // eslint-disable-line\n    } // eslint-disable-next-line react/prop-types\n\n\n    return this.props.children;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorBoundary);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZXJyb3ItYm91bmRhcnkvaW5kZXgudHN4PzAwODIiXSwibmFtZXMiOlsiRXJyb3JCb3VuZGFyeSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwiZXJyb3IiLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFBLE1BQU1BLGFBQU4sU0FBNEJDLDRDQUFLLENBQUNDLFNBQWxDLENBQTRFO0FBQzFFQyxhQUFXLENBQUNDLEtBQUQsRUFBaUM7QUFDMUMsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7O0FBRUQsU0FBT0Msd0JBQVAsQ0FBZ0NDLEtBQWhDLEVBQWdEO0FBQzlDO0FBQ0EsV0FBTztBQUFFQTtBQUFGLEtBQVA7QUFDRDs7QUFFREMsUUFBTSxHQUFHO0FBQ1AsUUFBSSxLQUFLSCxLQUFMLENBQVdFLEtBQWYsRUFBc0I7QUFDcEI7QUFDQUUsYUFBTyxDQUFDQyxHQUFSLENBQWEsa0JBQWlCLEtBQUtMLEtBQUwsQ0FBV0UsS0FBTSxFQUEvQyxFQUZvQixDQUUrQjtBQUNwRCxLQUpNLENBS1A7OztBQUNBLFdBQU8sS0FBS0gsS0FBTCxDQUFXTyxRQUFsQjtBQUNEOztBQWxCeUU7O0FBcUI3RFgsNEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9lcnJvci1ib3VuZGFyeS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG50eXBlIFN0YXRlID0ge1xuICBlcnJvcj86IHtcbiAgICBzdGF0dXNDb2RlPzogc3RyaW5nO1xuICB9O1xufTtcblxuY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3I6IHVua25vd24pIHtcbiAgICAvLyBVcGRhdGUgc3RhdGUgc28gdGhlIG5leHQgcmVuZGVyIHdpbGwgc2hvdyB0aGUgZmFsbGJhY2sgVUkuXG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5lcnJvcikge1xuICAgICAgLy8gWW91IGNhbiByZW5kZXIgYW55IGN1c3RvbSBmYWxsYmFjayBVSVxuICAgICAgY29uc29sZS5sb2coYEVycm9yQm91bmRhcnk6ICR7dGhpcy5zdGF0ZS5lcnJvcn1gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yQm91bmRhcnk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/error-boundary/index.tsx\n"
      );

      /***/
    },

  /***/ './src/pages/_app.tsx':
    /*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");\n/* harmony import */ var _components_error_boundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/error-boundary */ "./src/components/error-boundary/index.tsx");\n\n\nvar _jsxFileName = "/Users/volod34/WebStormProjects/newage/trac/platform/frontend/ssr-artist/src/pages/_app.tsx",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {\n    const handleHashChange = () => {\n      if (location.hash) {\n        const element = document.querySelector(`#scroll-${location.hash.slice(1)}`);\n\n        if (element) {\n          const rect = element.getBoundingClientRect();\n          window.scrollTo({\n            top: window.scrollY + rect.top - 120,\n            behavior: \'smooth\'\n          });\n        }\n      }\n    };\n\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on(\'hashChangeComplete\', handleHashChange);\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on(\'routeChangeComplete\', handleHashChange);\n    return () => {\n      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.off(\'hashChangeComplete\', handleHashChange);\n      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.off(\'routeChangeComplete\', handleHashChange);\n    };\n  }, []);\n  const stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__["loadStripe"])("pk_test_51GuOjtHv0LNpqD7HL4JfffZf4EyhZdJxSya2G7THwb1L2M3enr8FYzXGax7O6mxVltMMR5HyZTHF3pQ2Ls4v1In800KSTe9QFv");\n  const ELEMENTS_OPTIONS = {\n    fonts: [{\n      cssSrc: \'https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap\'\n    }]\n  };\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, __jsx("meta", {\n    name: "msapplication-TileColor",\n    content: "#ffffff",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }), __jsx("meta", {\n    name: "msapplication-TileImage",\n    content: "favicon/ms-icon-144x144.png",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }), __jsx("meta", {\n    name: "theme-color",\n    content: "#ffffff",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }), __jsx("meta", {\n    name: "viewport",\n    content: "width=device-width, initial-scale=1",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }), __jsx("meta", {\n    name: "theme-color",\n    content: "#F4514D",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  })), __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__["Elements"], {\n    stripe: stripePromise,\n    options: ELEMENTS_OPTIONS,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(_components_error_boundary__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  })))));\n}\n\n_s(MyApp, "OD7bBpZva5O2jO+Puf00hKivP7c=");\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__["default"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, "MyApp");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Pzg1NDgiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VFZmZlY3QiLCJoYW5kbGVIYXNoQ2hhbmdlIiwibG9jYXRpb24iLCJoYXNoIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWNlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwic2Nyb2xsWSIsImJlaGF2aW9yIiwiUm91dGVyIiwiZXZlbnRzIiwib24iLCJvZmYiLCJzdHJpcGVQcm9taXNlIiwibG9hZFN0cmlwZSIsInByb2Nlc3MiLCJFTEVNRU5UU19PUFRJT05TIiwiZm9udHMiLCJjc3NTcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQWdFO0FBQUE7O0FBQzlEQyx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxnQkFBZ0IsR0FBRyxNQUFNO0FBQzdCLFVBQUlDLFFBQVEsQ0FBQ0MsSUFBYixFQUFtQjtBQUNqQixjQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUNiLFdBQVVKLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjSSxLQUFkLENBQW9CLENBQXBCLENBQXVCLEVBRHBCLENBQWhCOztBQUlBLFlBQUlILE9BQUosRUFBYTtBQUNYLGdCQUFNSSxJQUFJLEdBQUdKLE9BQU8sQ0FBQ0sscUJBQVIsRUFBYjtBQUNBQyxnQkFBTSxDQUFDQyxRQUFQLENBQWdCO0FBQ2RDLGVBQUcsRUFBRUYsTUFBTSxDQUFDRyxPQUFQLEdBQWlCTCxJQUFJLENBQUNJLEdBQXRCLEdBQTRCLEdBRG5CO0FBRWRFLG9CQUFRLEVBQUU7QUFGSSxXQUFoQjtBQUlEO0FBQ0Y7QUFDRixLQWREOztBQWdCQUMsc0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLG9CQUFqQixFQUF1Q2hCLGdCQUF2QztBQUNBYyxzREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDaEIsZ0JBQXhDO0FBRUEsV0FBTyxNQUFNO0FBQ1hjLHdEQUFNLENBQUNDLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixvQkFBbEIsRUFBd0NqQixnQkFBeEM7QUFDQWMsd0RBQU0sQ0FBQ0MsTUFBUCxDQUFjRSxHQUFkLENBQWtCLHFCQUFsQixFQUF5Q2pCLGdCQUF6QztBQUNELEtBSEQ7QUFJRCxHQXhCUSxFQXdCTixFQXhCTSxDQUFUO0FBMEJBLFFBQU1rQixhQUFhLEdBQUdDLG9FQUFVLENBQzlCQyw2R0FEOEIsQ0FBaEM7QUFJQSxRQUFNQyxnQkFBZ0IsR0FBRztBQUN2QkMsU0FBSyxFQUFFLENBQ0w7QUFDRUMsWUFBTSxFQUNKO0FBRkosS0FESztBQURnQixHQUF6QjtBQVNBLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxRQUFJLEVBQUMseUJBQVg7QUFBcUMsV0FBTyxFQUFDLFNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLHlCQURQO0FBRUUsV0FBTyxFQUFDLDZCQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQU1FO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFDLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLHFDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRTtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLFdBQU8sRUFBQyxTQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERixFQVdFLE1BQUMsZ0VBQUQ7QUFBVSxVQUFNLEVBQUVMLGFBQWxCO0FBQWlDLFdBQU8sRUFBRUcsZ0JBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQseUZBQWV2QixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGLENBWEYsQ0FERjtBQW1CRDs7R0EzRFFGLEs7O0tBQUFBLEs7QUE2RE1BLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICdAc3RyaXBlL3JlYWN0LXN0cmlwZS1qcyc7XG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnO1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnQGNvbXBvbmVudHMvZXJyb3ItYm91bmRhcnknO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKTogSlNYLkVsZW1lbnQge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUhhc2hDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgI3Njcm9sbC0ke2xvY2F0aW9uLmhhc2guc2xpY2UoMSl9YFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogd2luZG93LnNjcm9sbFkgKyByZWN0LnRvcCAtIDEyMCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlSGFzaENoYW5nZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkgYXMgc3RyaW5nXG4gICk7XG5cbiAgY29uc3QgRUxFTUVOVFNfT1BUSU9OUyA9IHtcbiAgICBmb250czogW1xuICAgICAge1xuICAgICAgICBjc3NTcmM6XG4gICAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2VuOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUltYWdlXCJcbiAgICAgICAgICBjb250ZW50PVwiZmF2aWNvbi9tcy1pY29uLTE0NHgxNDQucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI0Y0NTE0RFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8RWxlbWVudHMgc3RyaXBlPXtzdHJpcGVQcm9taXNlfSBvcHRpb25zPXtFTEVNRU5UU19PUFRJT05TfT5cbiAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgICA8L0VsZW1lbnRzPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n'
      );

      /***/
    },
});
