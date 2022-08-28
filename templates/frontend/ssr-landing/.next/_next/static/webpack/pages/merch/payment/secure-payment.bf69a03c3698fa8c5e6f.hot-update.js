webpackHotUpdate_N_E('pages/merch/payment/secure-payment', {
  /***/ './src/pages/merch/payment/secure-payment/index.tsx':
    /*!**********************************************************!*\
  !*** ./src/pages/merch/payment/secure-payment/index.tsx ***!
  \**********************************************************/
    /*! exports provided: __N_SSP, default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecurePayment; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");\n/* harmony import */ var _artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @artist/hooks/use-page-data */ "./src/hooks/use-page-data.ts");\n/* harmony import */ var _components_merch_payment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/merch/payment */ "./src/components/merch/payment/index.tsx");\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/container */ "./src/components/container/index.tsx");\n/* harmony import */ var _components_next_seo_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/next-seo-head */ "./src/components/next-seo-head/index.tsx");\n/* harmony import */ var _components_theme_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/theme-wrapper */ "./src/components/theme-wrapper/index.tsx");\n/* harmony import */ var _components_back_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/back-navigation */ "./src/components/back-navigation/index.tsx");\nvar _jsxFileName = "/Users/volod34/WebStormProjects/newage/trac/platform/frontend/ssr-artist/src/pages/merch/payment/secure-payment/index.tsx",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nconst stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__["loadStripe"])("pk_test_51GuOjtHv0LNpqD7HL4JfffZf4EyhZdJxSya2G7THwb1L2M3enr8FYzXGax7O6mxVltMMR5HyZTHF3pQ2Ls4v1In800KSTe9QFv");\nconst ELEMENTS_OPTIONS = {\n  fonts: [{\n    cssSrc: \'https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap\'\n  }]\n};\nvar __N_SSP = true;\nfunction SecurePayment({\n  siteData\n}) {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();\n  const {\n    pageData\n  } = Object(_artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_4__["usePageData"])(siteData);\n  const orderId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {\n    if (!router.isReady) return;\n    const {\n      orderId\n    } = router.query;\n  }, [router.isReady]); // tslint:disable-next-line:no-console\n\n  console.log("pageData: ", pageData); // eslint-disable-line no-console\n  // tslint:disable-next-line:no-console\n\n  console.log("router.query: ", router.query, orderId); // eslint-disable-line no-console\n\n  return pageData && pageData.id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__["Elements"], {\n    stripe: stripePromise,\n    options: ELEMENTS_OPTIONS,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, __jsx(_components_next_seo_head__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    pageData: pageData,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }), __jsx(_components_theme_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {\n    theme: pageData ? pageData.theme : undefined,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    pageData: pageData,\n    hasBackground: true,\n    hideNavbar: true,\n    hideCart: true,\n    hideSidebar: true,\n    action: __jsx(_components_back_navigation__WEBPACK_IMPORTED_MODULE_9__["default"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 21\n      }\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(_components_merch_payment__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    orderId: Array.isArray(orderId) ? orderId[0] : orderId,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }))))) : null;\n}\n\n_s(SecurePayment, "VYeRXjOy28A2YnwHuunFLPLcXuw=", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], _artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_4__["usePageData"]];\n});\n\n_c = SecurePayment;\n\nvar _c;\n\n$RefreshReg$(_c, "SecurePayment");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lcmNoL3BheW1lbnQvc2VjdXJlLXBheW1lbnQvaW5kZXgudHN4PzZkM2UiXSwibmFtZXMiOlsic3RyaXBlUHJvbWlzZSIsImxvYWRTdHJpcGUiLCJwcm9jZXNzIiwiRUxFTUVOVFNfT1BUSU9OUyIsImZvbnRzIiwiY3NzU3JjIiwiU2VjdXJlUGF5bWVudCIsInNpdGVEYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwicGFnZURhdGEiLCJ1c2VQYWdlRGF0YSIsIm9yZGVySWQiLCJ1c2VNZW1vIiwiaXNSZWFkeSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImlkIiwidGhlbWUiLCJ1bmRlZmluZWQiLCJBcnJheSIsImlzQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNQSxhQUFhLEdBQUdDLG9FQUFVLENBQzlCQyw2R0FEOEIsQ0FBaEM7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRztBQUN2QkMsT0FBSyxFQUFFLENBQ0w7QUFDRUMsVUFBTSxFQUNKO0FBRkosR0FESztBQURnQixDQUF6Qjs7QUFhZSxTQUFTQyxhQUFULENBQXVCO0FBQUVDO0FBQUYsQ0FBdkIsRUFBeUQ7QUFBQTs7QUFDdEUsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFFBQU07QUFBRUM7QUFBRixNQUFlQywrRUFBVyxDQUFDSixRQUFELENBQWhDO0FBRUEsUUFBTUssT0FBTyxHQUFHQyxxREFBTyxDQUFDLE1BQU07QUFDNUIsUUFBRyxDQUFDTCxNQUFNLENBQUNNLE9BQVgsRUFBb0I7QUFDcEIsVUFBTTtBQUFFRjtBQUFGLFFBQWNKLE1BQU0sQ0FBQ08sS0FBM0I7QUFDRCxHQUhzQixFQUdwQixDQUFDUCxNQUFNLENBQUNNLE9BQVIsQ0FIb0IsQ0FBdkIsQ0FMc0UsQ0FXdEU7O0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJQLFFBQTFCLEVBWnNFLENBWWpDO0FBRXJDOztBQUNBTSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QlQsTUFBTSxDQUFDTyxLQUFyQyxFQUE0Q0gsT0FBNUMsRUFmc0UsQ0FlaEI7O0FBRXRELFNBQU9GLFFBQVEsSUFBSUEsUUFBUSxDQUFDUSxFQUFyQixHQUNMLG1FQUNFLE1BQUMsZ0VBQUQ7QUFBVSxVQUFNLEVBQUVsQixhQUFsQjtBQUFpQyxXQUFPLEVBQUVHLGdCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFhLFlBQVEsRUFBRU8sUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxpRUFBRDtBQUFjLFNBQUssRUFBRUEsUUFBUSxHQUFHQSxRQUFRLENBQUNTLEtBQVosR0FBb0JDLFNBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQ0UsWUFBUSxFQUFFVixRQURaO0FBRUUsaUJBQWEsTUFGZjtBQUdFLGNBQVUsTUFIWjtBQUlFLFlBQVEsTUFKVjtBQUtFLGVBQVcsTUFMYjtBQU1FLFVBQU0sRUFBRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyxpRUFBRDtBQUFTLFdBQU8sRUFBRVcsS0FBSyxDQUFDQyxPQUFOLENBQWNWLE9BQWQsSUFBeUJBLE9BQU8sQ0FBQyxDQUFELENBQWhDLEdBQXNDQSxPQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERixDQUZGLENBREYsQ0FESyxHQWtCSCxJQWxCSjtBQW1CRDs7R0FwQ3VCTixhO1VBQ1BHLHFELEVBRU1FLHVFOzs7S0FIQ0wsYSIsImZpbGUiOiIuL3NyYy9wYWdlcy9tZXJjaC9wYXltZW50L3NlY3VyZS1wYXltZW50L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZU1lbW99IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQsIEdldFNlcnZlclNpZGVQcm9wc1Jlc3VsdCB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICdAc3RyaXBlL3JlYWN0LXN0cmlwZS1qcyc7XG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnO1xuaW1wb3J0IEdldFRyYWNQYWdlRGF0YSBmcm9tICdAYXJ0aXN0L3BhZ2VzL2FwaS90cmFjcGFnZSc7XG5pbXBvcnQgeyB1c2VQYWdlRGF0YSB9IGZyb20gJ0BhcnRpc3QvaG9va3MvdXNlLXBhZ2UtZGF0YSc7XG5pbXBvcnQgUGF5bWVudCBmcm9tICdAY29tcG9uZW50cy9tZXJjaC9wYXltZW50JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQGNvbXBvbmVudHMvY29udGFpbmVyJztcbmltcG9ydCBOZXh0U2VvSGVhZCBmcm9tICdAY29tcG9uZW50cy9uZXh0LXNlby1oZWFkJztcbmltcG9ydCBUaGVtZVdyYXBwZXIgZnJvbSAnQGNvbXBvbmVudHMvdGhlbWUtd3JhcHBlcic7XG5pbXBvcnQgQmFja05hdmlnYXRpb24gZnJvbSAnQGNvbXBvbmVudHMvYmFjay1uYXZpZ2F0aW9uJztcbmltcG9ydCBUcmFjUGFnZSBmcm9tICdAc2VydmljZXMvdHJhY3BhZ2UvdHlwZXMvdHJhYy1wYWdlJztcblxuY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUoXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZIGFzIHN0cmluZ1xuKTtcblxuY29uc3QgRUxFTUVOVFNfT1BUSU9OUyA9IHtcbiAgZm9udHM6IFtcbiAgICB7XG4gICAgICBjc3NTcmM6XG4gICAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNlbjp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyxcbiAgICB9LFxuICBdLFxufTtcblxuaW50ZXJmYWNlIFNlY3VyZVBheW1lbnRQcm9wcyB7XG4gIHNpdGVEYXRhOiBUcmFjUGFnZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdXJlUGF5bWVudCh7IHNpdGVEYXRhIH06IFNlY3VyZVBheW1lbnRQcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgXG4gIGNvbnN0IHsgcGFnZURhdGEgfSA9IHVzZVBhZ2VEYXRhKHNpdGVEYXRhKTtcbiAgXG4gIGNvbnN0IG9yZGVySWQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZighcm91dGVyLmlzUmVhZHkpIHJldHVybjtcbiAgICBjb25zdCB7IG9yZGVySWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG4gIFxuICBcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgY29uc29sZS5sb2coXCJwYWdlRGF0YTogXCIsIHBhZ2VEYXRhKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICBjb25zb2xlLmxvZyhcInJvdXRlci5xdWVyeTogXCIsIHJvdXRlci5xdWVyeSwgb3JkZXJJZCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICBcbiAgcmV0dXJuIHBhZ2VEYXRhICYmIHBhZ2VEYXRhLmlkID8gKFxuICAgIDw+XG4gICAgICA8RWxlbWVudHMgc3RyaXBlPXtzdHJpcGVQcm9taXNlfSBvcHRpb25zPXtFTEVNRU5UU19PUFRJT05TfT5cbiAgICAgICAgPE5leHRTZW9IZWFkIHBhZ2VEYXRhPXtwYWdlRGF0YX0gLz5cbiAgICAgICAgPFRoZW1lV3JhcHBlciB0aGVtZT17cGFnZURhdGEgPyBwYWdlRGF0YS50aGVtZSA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgcGFnZURhdGE9e3BhZ2VEYXRhfVxuICAgICAgICAgICAgaGFzQmFja2dyb3VuZFxuICAgICAgICAgICAgaGlkZU5hdmJhclxuICAgICAgICAgICAgaGlkZUNhcnRcbiAgICAgICAgICAgIGhpZGVTaWRlYmFyXG4gICAgICAgICAgICBhY3Rpb249ezxCYWNrTmF2aWdhdGlvbiAvPn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGF5bWVudCBvcmRlcklkPXtBcnJheS5pc0FycmF5KG9yZGVySWQpID8gb3JkZXJJZFswXSA6IG9yZGVySWR9IC8+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvVGhlbWVXcmFwcGVyPlxuICAgICAgPC9FbGVtZW50cz5cbiAgICA8Lz5cbiAgKSA6IG51bGw7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoXG4gIGNvbnRleHQ6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHRcbik6IFByb21pc2U8R2V0U2VydmVyU2lkZVByb3BzUmVzdWx0PFNlY3VyZVBheW1lbnRQcm9wcz4+IHtcbiAgY29uc3Qgc2l0ZURhdGEgPSBhd2FpdCBHZXRUcmFjUGFnZURhdGEoXG4gICAgYGh0dHBzOi8vJHtjb250ZXh0LnJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1ob3N0J119JHtcbiAgICAgIGNvbnRleHQucmVxLnVybCB8fCAnLydcbiAgICB9YFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNpdGVEYXRhLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/merch/payment/secure-payment/index.tsx\n'
      );

      /***/
    },
});
