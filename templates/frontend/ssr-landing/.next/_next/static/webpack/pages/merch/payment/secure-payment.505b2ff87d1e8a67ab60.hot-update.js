webpackHotUpdate_N_E('pages/merch/payment/secure-payment', {
  /***/ './src/pages/merch/payment/secure-payment/index.tsx':
    /*!**********************************************************!*\
  !*** ./src/pages/merch/payment/secure-payment/index.tsx ***!
  \**********************************************************/
    /*! exports provided: __N_SSP, default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecurePayment; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");\n/* harmony import */ var _artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @artist/hooks/use-page-data */ "./src/hooks/use-page-data.ts");\n/* harmony import */ var _components_merch_payment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/merch/payment */ "./src/components/merch/payment/index.tsx");\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/container */ "./src/components/container/index.tsx");\n/* harmony import */ var _components_next_seo_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/next-seo-head */ "./src/components/next-seo-head/index.tsx");\n/* harmony import */ var _components_theme_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/theme-wrapper */ "./src/components/theme-wrapper/index.tsx");\n/* harmony import */ var _components_back_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/back-navigation */ "./src/components/back-navigation/index.tsx");\nvar _jsxFileName = "/Users/volod34/WebStormProjects/newage/trac/platform/frontend/ssr-artist/src/pages/merch/payment/secure-payment/index.tsx",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nconst stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__["loadStripe"])("pk_test_51GuOjtHv0LNpqD7HL4JfffZf4EyhZdJxSya2G7THwb1L2M3enr8FYzXGax7O6mxVltMMR5HyZTHF3pQ2Ls4v1In800KSTe9QFv");\nconst ELEMENTS_OPTIONS = {\n  fonts: [{\n    cssSrc: \'https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap\'\n  }]\n};\nvar __N_SSP = true;\nfunction SecurePayment({\n  siteData\n}) {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();\n  const {\n    pageData\n  } = Object(_artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_4__["usePageData"])(siteData);\n  const orderId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {\n    if (!router.isReady) return;\n    const {\n      orderId\n    } = router.query;\n    return Array.isArray(orderId) ? orderId[0] : orderId;\n  }, [router.isReady]); // tslint:disable-next-line:no-console\n\n  console.log("pageData: ", pageData); // eslint-disable-line no-console\n  // tslint:disable-next-line:no-console\n\n  console.log("router.query1: ", orderId); // eslint-disable-line no-console\n\n  return pageData && pageData.id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__["Elements"], {\n    stripe: stripePromise,\n    options: ELEMENTS_OPTIONS,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(_components_next_seo_head__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    pageData: pageData,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }), __jsx(_components_theme_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {\n    theme: pageData ? pageData.theme : undefined,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    pageData: pageData,\n    hasBackground: true,\n    hideNavbar: true,\n    hideCart: true,\n    hideSidebar: true,\n    action: __jsx(_components_back_navigation__WEBPACK_IMPORTED_MODULE_9__["default"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 21\n      }\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, __jsx(_components_merch_payment__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    orderId: orderId,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }))))) : null;\n}\n\n_s(SecurePayment, "VYeRXjOy28A2YnwHuunFLPLcXuw=", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], _artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_4__["usePageData"]];\n});\n\n_c = SecurePayment;\n\nvar _c;\n\n$RefreshReg$(_c, "SecurePayment");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lcmNoL3BheW1lbnQvc2VjdXJlLXBheW1lbnQvaW5kZXgudHN4PzZkM2UiXSwibmFtZXMiOlsic3RyaXBlUHJvbWlzZSIsImxvYWRTdHJpcGUiLCJwcm9jZXNzIiwiRUxFTUVOVFNfT1BUSU9OUyIsImZvbnRzIiwiY3NzU3JjIiwiU2VjdXJlUGF5bWVudCIsInNpdGVEYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwicGFnZURhdGEiLCJ1c2VQYWdlRGF0YSIsIm9yZGVySWQiLCJ1c2VNZW1vIiwiaXNSZWFkeSIsInF1ZXJ5IiwiQXJyYXkiLCJpc0FycmF5IiwiY29uc29sZSIsImxvZyIsImlkIiwidGhlbWUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNQSxhQUFhLEdBQUdDLG9FQUFVLENBQzlCQyw2R0FEOEIsQ0FBaEM7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRztBQUN2QkMsT0FBSyxFQUFFLENBQ0w7QUFDRUMsVUFBTSxFQUNKO0FBRkosR0FESztBQURnQixDQUF6Qjs7QUFhZSxTQUFTQyxhQUFULENBQXVCO0FBQUVDO0FBQUYsQ0FBdkIsRUFBeUQ7QUFBQTs7QUFDdEUsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFFBQU07QUFBRUM7QUFBRixNQUFlQywrRUFBVyxDQUFDSixRQUFELENBQWhDO0FBRUEsUUFBTUssT0FBTyxHQUFHQyxxREFBTyxDQUFDLE1BQU07QUFDNUIsUUFBRyxDQUFDTCxNQUFNLENBQUNNLE9BQVgsRUFBb0I7QUFFcEIsVUFBTTtBQUFFRjtBQUFGLFFBQWNKLE1BQU0sQ0FBQ08sS0FBM0I7QUFFQSxXQUFPQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsT0FBZCxJQUF5QkEsT0FBTyxDQUFDLENBQUQsQ0FBaEMsR0FBc0NBLE9BQTdDO0FBQ0QsR0FOc0IsRUFNcEIsQ0FBQ0osTUFBTSxDQUFDTSxPQUFSLENBTm9CLENBQXZCLENBTHNFLENBY3RFOztBQUNBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCVCxRQUExQixFQWZzRSxDQWVqQztBQUVyQzs7QUFDQVEsU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JQLE9BQS9CLEVBbEJzRSxDQWtCN0I7O0FBRXpDLFNBQU9GLFFBQVEsSUFBSUEsUUFBUSxDQUFDVSxFQUFyQixHQUNMLG1FQUNFLE1BQUMsZ0VBQUQ7QUFBVSxVQUFNLEVBQUVwQixhQUFsQjtBQUFpQyxXQUFPLEVBQUVHLGdCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFhLFlBQVEsRUFBRU8sUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxpRUFBRDtBQUFjLFNBQUssRUFBRUEsUUFBUSxHQUFHQSxRQUFRLENBQUNXLEtBQVosR0FBb0JDLFNBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQ0UsWUFBUSxFQUFFWixRQURaO0FBRUUsaUJBQWEsTUFGZjtBQUdFLGNBQVUsTUFIWjtBQUlFLFlBQVEsTUFKVjtBQUtFLGVBQVcsTUFMYjtBQU1FLFVBQU0sRUFBRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyxpRUFBRDtBQUFTLFdBQU8sRUFBRUUsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREYsQ0FGRixDQURGLENBREssR0FrQkgsSUFsQko7QUFtQkQ7O0dBdkN1Qk4sYTtVQUNQRyxxRCxFQUVNRSx1RTs7O0tBSENMLGEiLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWVyY2gvcGF5bWVudC9zZWN1cmUtcGF5bWVudC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0LCBHZXRTZXJ2ZXJTaWRlUHJvcHNSZXN1bHQgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnQHN0cmlwZS9yZWFjdC1zdHJpcGUtanMnO1xuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcbmltcG9ydCBHZXRUcmFjUGFnZURhdGEgZnJvbSAnQGFydGlzdC9wYWdlcy9hcGkvdHJhY3BhZ2UnO1xuaW1wb3J0IHsgdXNlUGFnZURhdGEgfSBmcm9tICdAYXJ0aXN0L2hvb2tzL3VzZS1wYWdlLWRhdGEnO1xuaW1wb3J0IFBheW1lbnQgZnJvbSAnQGNvbXBvbmVudHMvbWVyY2gvcGF5bWVudCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0Bjb21wb25lbnRzL2NvbnRhaW5lcic7XG5pbXBvcnQgTmV4dFNlb0hlYWQgZnJvbSAnQGNvbXBvbmVudHMvbmV4dC1zZW8taGVhZCc7XG5pbXBvcnQgVGhlbWVXcmFwcGVyIGZyb20gJ0Bjb21wb25lbnRzL3RoZW1lLXdyYXBwZXInO1xuaW1wb3J0IEJhY2tOYXZpZ2F0aW9uIGZyb20gJ0Bjb21wb25lbnRzL2JhY2stbmF2aWdhdGlvbic7XG5pbXBvcnQgVHJhY1BhZ2UgZnJvbSAnQHNlcnZpY2VzL3RyYWNwYWdlL3R5cGVzL3RyYWMtcGFnZSc7XG5cbmNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKFxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElDX0tFWSBhcyBzdHJpbmdcbik7XG5cbmNvbnN0IEVMRU1FTlRTX09QVElPTlMgPSB7XG4gIGZvbnRzOiBbXG4gICAge1xuICAgICAgY3NzU3JjOlxuICAgICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TZW46d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcsXG4gICAgfSxcbiAgXSxcbn07XG5cbmludGVyZmFjZSBTZWN1cmVQYXltZW50UHJvcHMge1xuICBzaXRlRGF0YTogVHJhY1BhZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3VyZVBheW1lbnQoeyBzaXRlRGF0YSB9OiBTZWN1cmVQYXltZW50UHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIFxuICBjb25zdCB7IHBhZ2VEYXRhIH0gPSB1c2VQYWdlRGF0YShzaXRlRGF0YSk7XG4gIFxuICBjb25zdCBvcmRlcklkID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgeyBvcmRlcklkIH0gPSByb3V0ZXIucXVlcnk7XG4gICAgXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob3JkZXJJZCkgPyBvcmRlcklkWzBdIDogb3JkZXJJZDtcbiAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG4gIFxuICBcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgY29uc29sZS5sb2coXCJwYWdlRGF0YTogXCIsIHBhZ2VEYXRhKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICBjb25zb2xlLmxvZyhcInJvdXRlci5xdWVyeTE6IFwiLCBvcmRlcklkKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIFxuICByZXR1cm4gcGFnZURhdGEgJiYgcGFnZURhdGEuaWQgPyAoXG4gICAgPD5cbiAgICAgIDxFbGVtZW50cyBzdHJpcGU9e3N0cmlwZVByb21pc2V9IG9wdGlvbnM9e0VMRU1FTlRTX09QVElPTlN9PlxuICAgICAgICA8TmV4dFNlb0hlYWQgcGFnZURhdGE9e3BhZ2VEYXRhfSAvPlxuICAgICAgICA8VGhlbWVXcmFwcGVyIHRoZW1lPXtwYWdlRGF0YSA/IHBhZ2VEYXRhLnRoZW1lIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICBwYWdlRGF0YT17cGFnZURhdGF9XG4gICAgICAgICAgICBoYXNCYWNrZ3JvdW5kXG4gICAgICAgICAgICBoaWRlTmF2YmFyXG4gICAgICAgICAgICBoaWRlQ2FydFxuICAgICAgICAgICAgaGlkZVNpZGViYXJcbiAgICAgICAgICAgIGFjdGlvbj17PEJhY2tOYXZpZ2F0aW9uIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYXltZW50IG9yZGVySWQ9e29yZGVySWR9IC8+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvVGhlbWVXcmFwcGVyPlxuICAgICAgPC9FbGVtZW50cz5cbiAgICA8Lz5cbiAgKSA6IG51bGw7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoXG4gIGNvbnRleHQ6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHRcbik6IFByb21pc2U8R2V0U2VydmVyU2lkZVByb3BzUmVzdWx0PFNlY3VyZVBheW1lbnRQcm9wcz4+IHtcbiAgY29uc3Qgc2l0ZURhdGEgPSBhd2FpdCBHZXRUcmFjUGFnZURhdGEoXG4gICAgYGh0dHBzOi8vJHtjb250ZXh0LnJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1ob3N0J119JHtcbiAgICAgIGNvbnRleHQucmVxLnVybCB8fCAnLydcbiAgICB9YFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNpdGVEYXRhLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/merch/payment/secure-payment/index.tsx\n'
      );

      /***/
    },
});