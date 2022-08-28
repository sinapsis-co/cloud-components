webpackHotUpdate_N_E('pages/merch/payment/confirmation', {
  /***/ './src/pages/merch/payment/confirmation/index.tsx':
    /*!********************************************************!*\
  !*** ./src/pages/merch/payment/confirmation/index.tsx ***!
  \********************************************************/
    /*! exports provided: __N_SSP, default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentConfirmation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var _artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @artist/hooks/use-page-data */ "./src/hooks/use-page-data.ts");\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/container */ "./src/components/container/index.tsx");\n/* harmony import */ var _components_next_seo_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/next-seo-head */ "./src/components/next-seo-head/index.tsx");\n/* harmony import */ var _components_theme_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/theme-wrapper */ "./src/components/theme-wrapper/index.tsx");\n/* harmony import */ var _components_merch_payment_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/merch/payment-confirmation */ "./src/components/merch/payment-confirmation/index.tsx");\nvar _jsxFileName = "/Users/volod34/WebStormProjects/newage/trac/platform/frontend/ssr-artist/src/pages/merch/payment/confirmation/index.tsx",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction PaymentConfirmation({\n  siteData\n}) {\n  _s();\n\n  const {\n    pageData\n  } = Object(_artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_2__["usePageData"])(siteData);\n  return pageData && pageData.id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_next_seo_head__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    pageData: pageData,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(_components_theme_wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    theme: pageData ? pageData.theme : undefined,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    hideNavbar: true,\n    hideCart: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(_components_merch_payment_confirmation__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }), __jsx(RedirectingContainer, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, __jsx("p", {\n    style: {\n      color: \'white\'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, "Redirecting you shortly..."), __jsx("p", {\n    style: {\n      color: \'white\'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, "Continue to Artist Name \\u2192"))))) : null;\n}\n\n_s(PaymentConfirmation, "j7K2lOJEb/gXZLOl+eJkJfeg0b4=", false, function () {\n  return [_artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_2__["usePageData"]];\n});\n\n_c = PaymentConfirmation;\nconst RedirectingContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "confirmation__RedirectingContainer",\n  componentId: "sc-1rjhmep-0"\n})(["position:absolute;top:70%;left:50%;color:white;transform:translate(-50%,-50%);display:flex;max-width:420px;width:100%;align-items:center;justify-content:space-between;"]);\n_c2 = RedirectingContainer;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, "PaymentConfirmation");\n$RefreshReg$(_c2, "RedirectingContainer");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lcmNoL3BheW1lbnQvY29uZmlybWF0aW9uL2luZGV4LnRzeD8xM2IzIl0sIm5hbWVzIjpbIlBheW1lbnRDb25maXJtYXRpb24iLCJzaXRlRGF0YSIsInBhZ2VEYXRhIiwidXNlUGFnZURhdGEiLCJpZCIsInRoZW1lIiwidW5kZWZpbmVkIiwiY29sb3IiLCJSZWRpcmVjdGluZ0NvbnRhaW5lciIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNZSxTQUFTQSxtQkFBVCxDQUE2QjtBQUMxQ0M7QUFEMEMsQ0FBN0IsRUFFWTtBQUFBOztBQUN6QixRQUFNO0FBQUVDO0FBQUYsTUFBZUMsK0VBQVcsQ0FBQ0YsUUFBRCxDQUFoQztBQUVBLFNBQU9DLFFBQVEsSUFBSUEsUUFBUSxDQUFDRSxFQUFyQixHQUNMLG1FQUNFLE1BQUMsaUVBQUQ7QUFBYSxZQUFRLEVBQUVGLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsaUVBQUQ7QUFBYyxTQUFLLEVBQUVBLFFBQVEsR0FBR0EsUUFBUSxDQUFDRyxLQUFaLEdBQW9CQyxTQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFXLGNBQVUsTUFBckI7QUFBc0IsWUFBUSxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUU7QUFBUixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsRUFFRTtBQUFHLFNBQUssRUFBRTtBQUFDQSxXQUFLLEVBQUU7QUFBUixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBRkYsQ0FGRixDQURGLENBRkYsQ0FESyxHQWFILElBYko7QUFjRDs7R0FuQnVCUCxtQjtVQUdERyx1RTs7O0tBSENILG1CO0FBcUJ4QixNQUFNUSxvQkFBb0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrS0FBMUI7TUFBTUYsb0IiLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWVyY2gvcGF5bWVudC9jb25maXJtYXRpb24vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCwgR2V0U2VydmVyU2lkZVByb3BzUmVzdWx0IH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEdldFRyYWNQYWdlRGF0YSBmcm9tICcuLi8uLi8uLi9hcGkvdHJhY3BhZ2UnO1xuaW1wb3J0IHsgdXNlUGFnZURhdGEgfSBmcm9tICdAYXJ0aXN0L2hvb2tzL3VzZS1wYWdlLWRhdGEnO1xuaW1wb3J0IFRyYWNQYWdlIGZyb20gJ0BzZXJ2aWNlcy90cmFjcGFnZS90eXBlcy90cmFjLXBhZ2UnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IE5leHRTZW9IZWFkIGZyb20gJ0Bjb21wb25lbnRzL25leHQtc2VvLWhlYWQnO1xuaW1wb3J0IFRoZW1lV3JhcHBlciBmcm9tICdAY29tcG9uZW50cy90aGVtZS13cmFwcGVyJztcbmltcG9ydCBNZXJjaFBheW1lbnRDb25maXJtYXRpb24gZnJvbSAnQGNvbXBvbmVudHMvbWVyY2gvcGF5bWVudC1jb25maXJtYXRpb24nO1xuXG5pbnRlcmZhY2UgTWVyY2hDb25maXJtYXRpb25Qcm9wcyB7XG4gIHNpdGVEYXRhOiBUcmFjUGFnZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF5bWVudENvbmZpcm1hdGlvbih7XG4gIHNpdGVEYXRhLFxufTogTWVyY2hDb25maXJtYXRpb25Qcm9wcykge1xuICBjb25zdCB7IHBhZ2VEYXRhIH0gPSB1c2VQYWdlRGF0YShzaXRlRGF0YSk7XG5cbiAgcmV0dXJuIHBhZ2VEYXRhICYmIHBhZ2VEYXRhLmlkID8gKFxuICAgIDw+XG4gICAgICA8TmV4dFNlb0hlYWQgcGFnZURhdGE9e3BhZ2VEYXRhfSAvPlxuICAgICAgPFRoZW1lV3JhcHBlciB0aGVtZT17cGFnZURhdGEgPyBwYWdlRGF0YS50aGVtZSA6IHVuZGVmaW5lZH0+XG4gICAgICAgIDxDb250YWluZXIgaGlkZU5hdmJhciBoaWRlQ2FydD5cbiAgICAgICAgICA8TWVyY2hQYXltZW50Q29uZmlybWF0aW9uIC8+XG4gICAgICAgICAgPFJlZGlyZWN0aW5nQ29udGFpbmVyPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PlJlZGlyZWN0aW5nIHlvdSBzaG9ydGx5Li4uPC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PkNvbnRpbnVlIHRvIEFydGlzdCBOYW1lIOKGkjwvcD5cbiAgICAgICAgICA8L1JlZGlyZWN0aW5nQ29udGFpbmVyPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvVGhlbWVXcmFwcGVyPlxuICAgIDwvPlxuICApIDogbnVsbDtcbn1cblxuY29uc3QgUmVkaXJlY3RpbmdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzAlO1xuICBsZWZ0OiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhcbiAgY29udGV4dDogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dFxuKTogUHJvbWlzZTxHZXRTZXJ2ZXJTaWRlUHJvcHNSZXN1bHQ8TWVyY2hDb25maXJtYXRpb25Qcm9wcz4+IHtcbiAgY29uc3Qgc2l0ZURhdGEgPSBhd2FpdCBHZXRUcmFjUGFnZURhdGEoXG4gICAgYGh0dHBzOi8vJHtjb250ZXh0LnJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1ob3N0J119JHtcbiAgICAgIGNvbnRleHQucmVxLnVybCB8fCAnLydcbiAgICB9YFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNpdGVEYXRhLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/merch/payment/confirmation/index.tsx\n'
      );

      /***/
    },
});
