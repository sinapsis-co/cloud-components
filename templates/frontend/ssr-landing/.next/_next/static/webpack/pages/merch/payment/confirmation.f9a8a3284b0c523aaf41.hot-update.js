webpackHotUpdate_N_E('pages/merch/payment/confirmation', {
  /***/ './src/pages/merch/payment/confirmation/index.tsx':
    /*!********************************************************!*\
  !*** ./src/pages/merch/payment/confirmation/index.tsx ***!
  \********************************************************/
    /*! exports provided: __N_SSP, default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentConfirmation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var _artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @artist/hooks/use-page-data */ "./src/hooks/use-page-data.ts");\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/container */ "./src/components/container/index.tsx");\n/* harmony import */ var _components_next_seo_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/next-seo-head */ "./src/components/next-seo-head/index.tsx");\n/* harmony import */ var _components_theme_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/theme-wrapper */ "./src/components/theme-wrapper/index.tsx");\n/* harmony import */ var _components_merch_payment_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/merch/payment-confirmation */ "./src/components/merch/payment-confirmation/index.tsx");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = "/Users/volod34/WebStormProjects/newage/trac/platform/frontend/ssr-artist/src/pages/merch/payment/confirmation/index.tsx",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst redirectLink = \'/\';\nvar __N_SSP = true;\nfunction PaymentConfirmation({\n  siteData\n}) {\n  _s();\n\n  const {\n    pageData\n  } = Object(_artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_2__["usePageData"])(siteData);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {\n    const toMainTimer = setTimeout(() => {\n      router.push(redirectLink);\n    }, 3000);\n    return () => {\n      clearTimeout(toMainTimer);\n    };\n  }, []);\n  return pageData && pageData.id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_next_seo_head__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    pageData: pageData,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }), __jsx(_components_theme_wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    theme: pageData ? pageData.theme : undefined,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    hideNavbar: true,\n    hideCart: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(_components_merch_payment_confirmation__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }), __jsx(RedirectingContainer, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, __jsx("p", {\n    className: \'redirecting\',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, "REDIRECTING YOU SHORTLY..."), __jsx("a", {\n    href: redirectLink,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, "Continue to Artist Name"))))) : null;\n}\n\n_s(PaymentConfirmation, "TtSC0wrSnTMtX8pzMF3MDH/OY7E=", false, function () {\n  return [_artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_2__["usePageData"], next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];\n});\n\n_c = PaymentConfirmation;\nconst RedirectingContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "confirmation__RedirectingContainer",\n  componentId: "sc-1rjhmep-0"\n})(["position:absolute;top:80%;left:50%;color:white;transform:translate(-50%,-50%);display:flex;max-width:420px;width:100%;align-items:center;justify-content:space-between;a,p{font-family:\'Sen\',sans-serif;font-size:14px;line-height:18px;text-decoration:underline;}.redirecting{text-transform:uppercase;font-weight:700;max-width:180px;text-decoration:none;}"]);\n_c2 = RedirectingContainer;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, "PaymentConfirmation");\n$RefreshReg$(_c2, "RedirectingContainer");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lcmNoL3BheW1lbnQvY29uZmlybWF0aW9uL2luZGV4LnRzeD8xM2IzIl0sIm5hbWVzIjpbInJlZGlyZWN0TGluayIsIlBheW1lbnRDb25maXJtYXRpb24iLCJzaXRlRGF0YSIsInBhZ2VEYXRhIiwidXNlUGFnZURhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ0b01haW5UaW1lciIsInNldFRpbWVvdXQiLCJwdXNoIiwiY2xlYXJUaW1lb3V0IiwiaWQiLCJ0aGVtZSIsInVuZGVmaW5lZCIsIlJlZGlyZWN0aW5nQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxZQUFZLEdBQUcsR0FBckI7O0FBTWUsU0FBU0MsbUJBQVQsQ0FBNkI7QUFDMUNDO0FBRDBDLENBQTdCLEVBRVk7QUFBQTs7QUFDekIsUUFBTTtBQUFFQztBQUFGLE1BQWVDLCtFQUFXLENBQUNGLFFBQUQsQ0FBaEM7QUFDQSxRQUFNRyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLFdBQVcsR0FBR0MsVUFBVSxDQUFDLE1BQU07QUFDbkNKLFlBQU0sQ0FBQ0ssSUFBUCxDQUFZVixZQUFaO0FBQ0QsS0FGNkIsRUFFM0IsSUFGMkIsQ0FBOUI7QUFJQSxXQUFPLE1BQU07QUFDWFcsa0JBQVksQ0FBQ0gsV0FBRCxDQUFaO0FBQ0QsS0FGRDtBQUdELEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQSxTQUFPTCxRQUFRLElBQUlBLFFBQVEsQ0FBQ1MsRUFBckIsR0FDTCxtRUFDRSxNQUFDLGlFQUFEO0FBQWEsWUFBUSxFQUFFVCxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGlFQUFEO0FBQWMsU0FBSyxFQUFFQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ1UsS0FBWixHQUFvQkMsU0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBVyxjQUFVLE1BQXJCO0FBQXNCLFlBQVEsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUUsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLEVBRUU7QUFBRyxRQUFJLEVBQUVkLFlBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGRixDQUZGLENBREYsQ0FGRixDQURLLEdBYUgsSUFiSjtBQWNEOztHQTlCdUJDLG1CO1VBR0RHLHVFLEVBQ05FLHFEOzs7S0FKT0wsbUI7QUFnQ3hCLE1BQU1jLG9CQUFvQixHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVXQUExQjtNQUFNRixvQiIsImZpbGUiOiIuL3NyYy9wYWdlcy9tZXJjaC9wYXltZW50L2NvbmZpcm1hdGlvbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCwgR2V0U2VydmVyU2lkZVByb3BzUmVzdWx0IH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBHZXRUcmFjUGFnZURhdGEgZnJvbSAnLi4vLi4vLi4vYXBpL3RyYWNwYWdlJztcbmltcG9ydCB7IHVzZVBhZ2VEYXRhIH0gZnJvbSAnQGFydGlzdC9ob29rcy91c2UtcGFnZS1kYXRhJztcbmltcG9ydCBUcmFjUGFnZSBmcm9tICdAc2VydmljZXMvdHJhY3BhZ2UvdHlwZXMvdHJhYy1wYWdlJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQGNvbXBvbmVudHMvY29udGFpbmVyJztcbmltcG9ydCBOZXh0U2VvSGVhZCBmcm9tICdAY29tcG9uZW50cy9uZXh0LXNlby1oZWFkJztcbmltcG9ydCBUaGVtZVdyYXBwZXIgZnJvbSAnQGNvbXBvbmVudHMvdGhlbWUtd3JhcHBlcic7XG5pbXBvcnQgTWVyY2hQYXltZW50Q29uZmlybWF0aW9uIGZyb20gJ0Bjb21wb25lbnRzL21lcmNoL3BheW1lbnQtY29uZmlybWF0aW9uJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgcmVkaXJlY3RMaW5rID0gJy8nO1xuXG5pbnRlcmZhY2UgTWVyY2hDb25maXJtYXRpb25Qcm9wcyB7XG4gIHNpdGVEYXRhOiBUcmFjUGFnZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF5bWVudENvbmZpcm1hdGlvbih7XG4gIHNpdGVEYXRhLFxufTogTWVyY2hDb25maXJtYXRpb25Qcm9wcykge1xuICBjb25zdCB7IHBhZ2VEYXRhIH0gPSB1c2VQYWdlRGF0YShzaXRlRGF0YSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9NYWluVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKHJlZGlyZWN0TGluayk7XG4gICAgfSwgMzAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRvTWFpblRpbWVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHBhZ2VEYXRhICYmIHBhZ2VEYXRhLmlkID8gKFxuICAgIDw+XG4gICAgICA8TmV4dFNlb0hlYWQgcGFnZURhdGE9e3BhZ2VEYXRhfSAvPlxuICAgICAgPFRoZW1lV3JhcHBlciB0aGVtZT17cGFnZURhdGEgPyBwYWdlRGF0YS50aGVtZSA6IHVuZGVmaW5lZH0+XG4gICAgICAgIDxDb250YWluZXIgaGlkZU5hdmJhciBoaWRlQ2FydD5cbiAgICAgICAgICA8TWVyY2hQYXltZW50Q29uZmlybWF0aW9uIC8+XG4gICAgICAgICAgPFJlZGlyZWN0aW5nQ29udGFpbmVyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXsncmVkaXJlY3RpbmcnfT5SRURJUkVDVElORyBZT1UgU0hPUlRMWS4uLjwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9e3JlZGlyZWN0TGlua30+Q29udGludWUgdG8gQXJ0aXN0IE5hbWU8L2E+XG4gICAgICAgICAgPC9SZWRpcmVjdGluZ0NvbnRhaW5lcj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L1RoZW1lV3JhcHBlcj5cbiAgICA8Lz5cbiAgKSA6IG51bGw7XG59XG5cbmNvbnN0IFJlZGlyZWN0aW5nQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgwJTtcbiAgbGVmdDogNTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGEsXG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiAnU2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICAucmVkaXJlY3Rpbmcge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhcbiAgY29udGV4dDogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dFxuKTogUHJvbWlzZTxHZXRTZXJ2ZXJTaWRlUHJvcHNSZXN1bHQ8TWVyY2hDb25maXJtYXRpb25Qcm9wcz4+IHtcbiAgY29uc3Qgc2l0ZURhdGEgPSBhd2FpdCBHZXRUcmFjUGFnZURhdGEoXG4gICAgYGh0dHBzOi8vJHtjb250ZXh0LnJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1ob3N0J119JHtcbiAgICAgIGNvbnRleHQucmVxLnVybCB8fCAnLydcbiAgICB9YFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNpdGVEYXRhLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/merch/payment/confirmation/index.tsx\n'
      );

      /***/
    },
});