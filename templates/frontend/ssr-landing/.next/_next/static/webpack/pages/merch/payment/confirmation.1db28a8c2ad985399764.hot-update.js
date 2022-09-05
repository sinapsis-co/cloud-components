webpackHotUpdate_N_E('pages/merch/payment/confirmation', {
  /***/ './src/pages/merch/payment/confirmation/index.tsx':
    /*!********************************************************!*\
  !*** ./src/pages/merch/payment/confirmation/index.tsx ***!
  \********************************************************/
    /*! exports provided: __N_SSP, default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentConfirmation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var _artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @artist/hooks/use-page-data */ "./src/hooks/use-page-data.ts");\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/container */ "./src/components/container/index.tsx");\n/* harmony import */ var _components_next_seo_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/next-seo-head */ "./src/components/next-seo-head/index.tsx");\n/* harmony import */ var _components_theme_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/theme-wrapper */ "./src/components/theme-wrapper/index.tsx");\n/* harmony import */ var _components_merch_payment_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/merch/payment-confirmation */ "./src/components/merch/payment-confirmation/index.tsx");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = "/Users/volod34/WebStormProjects/newage/trac/platform/frontend/ssr-artist/src/pages/merch/payment/confirmation/index.tsx",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst redirectLink = "/";\nvar __N_SSP = true;\nfunction PaymentConfirmation({\n  siteData\n}) {\n  _s();\n\n  const {\n    pageData\n  } = Object(_artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_2__["usePageData"])(siteData);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {\n    const toMainTimer = setTimeout(() => {\n      router.push(redirectLink);\n    }, 3000);\n    return () => {\n      clearTimeout(toMainTimer);\n    };\n  }, []);\n  return pageData && pageData.id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_next_seo_head__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    pageData: pageData,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }), __jsx(_components_theme_wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    theme: pageData ? pageData.theme : undefined,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    hideNavbar: true,\n    hideCart: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(_components_merch_payment_confirmation__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }), __jsx(RedirectingContainer, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx("p", {\n    className: "redirecting",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, "REDIRECTING YOU SHORTLY..."), __jsx("a", {\n    href: redirectLink,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, "Continue to Artist Name"))))) : null;\n}\n\n_s(PaymentConfirmation, "TtSC0wrSnTMtX8pzMF3MDH/OY7E=", false, function () {\n  return [_artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_2__["usePageData"], next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];\n});\n\n_c = PaymentConfirmation;\nconst RedirectingContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "confirmation__RedirectingContainer",\n  componentId: "sc-1rjhmep-0"\n})(["position:absolute;top:80%;left:50%;color:white;transform:translate(-50%,-50%);display:flex;max-width:420px;width:100%;align-items:center;justify-content:space-between;a,p{font-family:\\"Sen\\",sans-serif;font-size:14px;line-height:18px;text-decoration:underline;}.redirecting{text-transform:uppercase;font-weight:700;max-width:180px;text-decoration:none;}"]);\n_c2 = RedirectingContainer;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, "PaymentConfirmation");\n$RefreshReg$(_c2, "RedirectingContainer");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lcmNoL3BheW1lbnQvY29uZmlybWF0aW9uL2luZGV4LnRzeD8xM2IzIl0sIm5hbWVzIjpbInJlZGlyZWN0TGluayIsIlBheW1lbnRDb25maXJtYXRpb24iLCJzaXRlRGF0YSIsInBhZ2VEYXRhIiwidXNlUGFnZURhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ0b01haW5UaW1lciIsInNldFRpbWVvdXQiLCJwdXNoIiwiY2xlYXJUaW1lb3V0IiwiaWQiLCJ0aGVtZSIsInVuZGVmaW5lZCIsIlJlZGlyZWN0aW5nQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxZQUFZLEdBQUcsR0FBckI7O0FBTWUsU0FBU0MsbUJBQVQsQ0FBNkI7QUFBRUM7QUFBRixDQUE3QixFQUFtRTtBQUFBOztBQUNoRixRQUFNO0FBQUVDO0FBQUYsTUFBZUMsK0VBQVcsQ0FBQ0YsUUFBRCxDQUFoQztBQUNBLFFBQU1HLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FDUCxNQUFNO0FBQ0osVUFBTUMsV0FBVyxHQUFHQyxVQUFVLENBQUMsTUFBTTtBQUNuQ0osWUFBTSxDQUFDSyxJQUFQLENBQVlWLFlBQVo7QUFDRCxLQUY2QixFQUUzQixJQUYyQixDQUE5QjtBQUlBLFdBQU8sTUFBTTtBQUNYVyxrQkFBWSxDQUFDSCxXQUFELENBQVo7QUFDRCxLQUZEO0FBR0QsR0FUTSxFQVVQLEVBVk8sQ0FBVDtBQWFBLFNBQU9MLFFBQVEsSUFBSUEsUUFBUSxDQUFDUyxFQUFyQixHQUNMLG1FQUNFLE1BQUMsaUVBQUQ7QUFBYSxZQUFRLEVBQUVULFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsaUVBQUQ7QUFBYyxTQUFLLEVBQUVBLFFBQVEsR0FBR0EsUUFBUSxDQUFDVSxLQUFaLEdBQW9CQyxTQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFXLGNBQVUsTUFBckI7QUFBc0IsWUFBUSxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRSxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsRUFFRTtBQUFHLFFBQUksRUFBRWQsWUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZGLENBRkYsQ0FERixDQUZGLENBREssR0FhSCxJQWJKO0FBY0Q7O0dBL0J1QkMsbUI7VUFDREcsdUUsRUFDTkUscUQ7OztLQUZPTCxtQjtBQWlDeEIsTUFBTWMsb0JBQW9CLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseVdBQTFCO01BQU1GLG9CIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL21lcmNoL3BheW1lbnQvY29uZmlybWF0aW9uL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQsIEdldFNlcnZlclNpZGVQcm9wc1Jlc3VsdCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEdldFRyYWNQYWdlRGF0YSBmcm9tIFwiLi4vLi4vLi4vYXBpL3RyYWNwYWdlXCI7XG5pbXBvcnQgeyB1c2VQYWdlRGF0YSB9IGZyb20gXCJAYXJ0aXN0L2hvb2tzL3VzZS1wYWdlLWRhdGFcIjtcbmltcG9ydCBUcmFjUGFnZSBmcm9tIFwiQHNlcnZpY2VzL3RyYWNwYWdlL3R5cGVzL3RyYWMtcGFnZVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQGNvbXBvbmVudHMvY29udGFpbmVyXCI7XG5pbXBvcnQgTmV4dFNlb0hlYWQgZnJvbSBcIkBjb21wb25lbnRzL25leHQtc2VvLWhlYWRcIjtcbmltcG9ydCBUaGVtZVdyYXBwZXIgZnJvbSBcIkBjb21wb25lbnRzL3RoZW1lLXdyYXBwZXJcIjtcbmltcG9ydCBNZXJjaFBheW1lbnRDb25maXJtYXRpb24gZnJvbSBcIkBjb21wb25lbnRzL21lcmNoL3BheW1lbnQtY29uZmlybWF0aW9uXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgcmVkaXJlY3RMaW5rID0gXCIvXCI7XG5cbmludGVyZmFjZSBNZXJjaENvbmZpcm1hdGlvblByb3BzIHtcbiAgc2l0ZURhdGE6IFRyYWNQYWdlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXltZW50Q29uZmlybWF0aW9uKHsgc2l0ZURhdGEgfTogTWVyY2hDb25maXJtYXRpb25Qcm9wcykge1xuICBjb25zdCB7IHBhZ2VEYXRhIH0gPSB1c2VQYWdlRGF0YShzaXRlRGF0YSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBcbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGNvbnN0IHRvTWFpblRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKHJlZGlyZWN0TGluayk7XG4gICAgICB9LCAzMDAwKTtcbiAgICAgIFxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRvTWFpblRpbWVyKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBbXVxuICApO1xuICBcbiAgcmV0dXJuIHBhZ2VEYXRhICYmIHBhZ2VEYXRhLmlkID8gKFxuICAgIDw+XG4gICAgICA8TmV4dFNlb0hlYWQgcGFnZURhdGE9e3BhZ2VEYXRhfSAvPlxuICAgICAgPFRoZW1lV3JhcHBlciB0aGVtZT17cGFnZURhdGEgPyBwYWdlRGF0YS50aGVtZSA6IHVuZGVmaW5lZH0+XG4gICAgICAgIDxDb250YWluZXIgaGlkZU5hdmJhciBoaWRlQ2FydD5cbiAgICAgICAgICA8TWVyY2hQYXltZW50Q29uZmlybWF0aW9uIC8+XG4gICAgICAgICAgPFJlZGlyZWN0aW5nQ29udGFpbmVyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcInJlZGlyZWN0aW5nXCJ9PlJFRElSRUNUSU5HIFlPVSBTSE9SVExZLi4uPC9wPlxuICAgICAgICAgICAgPGEgaHJlZj17cmVkaXJlY3RMaW5rfT5Db250aW51ZSB0byBBcnRpc3QgTmFtZTwvYT5cbiAgICAgICAgICA8L1JlZGlyZWN0aW5nQ29udGFpbmVyPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvVGhlbWVXcmFwcGVyPlxuICAgIDwvPlxuICApIDogbnVsbDtcbn1cblxuY29uc3QgUmVkaXJlY3RpbmdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODAlO1xuICBsZWZ0OiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogNDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cblxuICBhLCBwIHtcbiAgICBmb250LWZhbWlseTogXCJTZW5cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICAucmVkaXJlY3Rpbmcge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhcbiAgY29udGV4dDogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dFxuKTogUHJvbWlzZTxHZXRTZXJ2ZXJTaWRlUHJvcHNSZXN1bHQ8TWVyY2hDb25maXJtYXRpb25Qcm9wcz4+IHtcbiAgY29uc3Qgc2l0ZURhdGEgPSBhd2FpdCBHZXRUcmFjUGFnZURhdGEoXG4gICAgYGh0dHBzOi8vJHtjb250ZXh0LnJlcS5oZWFkZXJzW1wieC1mb3J3YXJkZWQtaG9zdFwiXX0ke1xuICAgICAgY29udGV4dC5yZXEudXJsIHx8IFwiL1wiXG4gICAgfWBcbiAgKTtcbiAgXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNpdGVEYXRhXG4gICAgfVxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/merch/payment/confirmation/index.tsx\n'
      );

      /***/
    },
});