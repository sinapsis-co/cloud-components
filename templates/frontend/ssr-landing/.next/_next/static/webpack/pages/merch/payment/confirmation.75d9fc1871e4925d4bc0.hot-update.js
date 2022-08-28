webpackHotUpdate_N_E('pages/merch/payment/confirmation', {
  /***/ './src/pages/merch/payment/confirmation/index.tsx':
    /*!********************************************************!*\
  !*** ./src/pages/merch/payment/confirmation/index.tsx ***!
  \********************************************************/
    /*! exports provided: __N_SSP, default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentConfirmation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var _artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @artist/hooks/use-page-data */ "./src/hooks/use-page-data.ts");\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/container */ "./src/components/container/index.tsx");\n/* harmony import */ var _components_next_seo_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/next-seo-head */ "./src/components/next-seo-head/index.tsx");\n/* harmony import */ var _components_theme_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/theme-wrapper */ "./src/components/theme-wrapper/index.tsx");\n/* harmony import */ var _components_merch_payment_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/merch/payment-confirmation */ "./src/components/merch/payment-confirmation/index.tsx");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _artist_utils_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @artist/utils/localstorage */ "./src/utils/localstorage.ts");\nvar _jsxFileName = "/Users/volod34/WebStormProjects/newage/trac/platform/frontend/ssr-artist/src/pages/merch/payment/confirmation/index.tsx",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst redirectLink = \'/\';\nvar __N_SSP = true;\nfunction PaymentConfirmation({\n  siteData\n}) {\n  _s();\n\n  const {\n    pageData\n  } = Object(_artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_2__["usePageData"])(siteData);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {\n    Object(_artist_utils_localstorage__WEBPACK_IMPORTED_MODULE_8__["removeLocalStorageItem"])(\'orderId\');\n    const toMainTimer = setTimeout(() => {\n      router.push(redirectLink);\n    }, 3000);\n    return () => {\n      clearTimeout(toMainTimer);\n    };\n  }, []);\n  return pageData && pageData.id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_next_seo_head__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    pageData: pageData,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), __jsx(_components_theme_wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    theme: pageData ? pageData.theme : undefined,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    hideNavbar: true,\n    hideCart: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(_components_merch_payment_confirmation__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }), __jsx(RedirectingContainer, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx("p", {\n    className: \'redirecting\',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, "REDIRECTING YOU SHORTLY..."), __jsx("a", {\n    href: redirectLink,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, "Continue to Artist Name"))))) : null;\n}\n\n_s(PaymentConfirmation, "TtSC0wrSnTMtX8pzMF3MDH/OY7E=", false, function () {\n  return [_artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_2__["usePageData"], next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];\n});\n\n_c = PaymentConfirmation;\nconst RedirectingContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "confirmation__RedirectingContainer",\n  componentId: "sc-1rjhmep-0"\n})(["position:absolute;top:80%;left:50%;color:", ";transform:translate(-50%,-50%);display:flex;max-width:420px;width:100%;align-items:center;justify-content:space-between;a,p{font-family:\'Sen\',sans-serif;font-size:14px;line-height:18px;text-decoration:underline;}.redirecting{text-transform:uppercase;font-weight:700;max-width:180px;text-decoration:none;}"], ({\n  theme\n}) => theme.colors.primary);\n_c2 = RedirectingContainer;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, "PaymentConfirmation");\n$RefreshReg$(_c2, "RedirectingContainer");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lcmNoL3BheW1lbnQvY29uZmlybWF0aW9uL2luZGV4LnRzeD8xM2IzIl0sIm5hbWVzIjpbInJlZGlyZWN0TGluayIsIlBheW1lbnRDb25maXJtYXRpb24iLCJzaXRlRGF0YSIsInBhZ2VEYXRhIiwidXNlUGFnZURhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJyZW1vdmVMb2NhbFN0b3JhZ2VJdGVtIiwidG9NYWluVGltZXIiLCJzZXRUaW1lb3V0IiwicHVzaCIsImNsZWFyVGltZW91dCIsImlkIiwidGhlbWUiLCJ1bmRlZmluZWQiLCJSZWRpcmVjdGluZ0NvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImNvbG9ycyIsInByaW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBRyxHQUFyQjs7QUFNZSxTQUFTQyxtQkFBVCxDQUE2QjtBQUMxQ0M7QUFEMEMsQ0FBN0IsRUFFWTtBQUFBOztBQUN6QixRQUFNO0FBQUVDO0FBQUYsTUFBZUMsK0VBQVcsQ0FBQ0YsUUFBRCxDQUFoQztBQUNBLFFBQU1HLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLDZGQUFzQixDQUFDLFNBQUQsQ0FBdEI7QUFDQSxVQUFNQyxXQUFXLEdBQUdDLFVBQVUsQ0FBQyxNQUFNO0FBQ25DTCxZQUFNLENBQUNNLElBQVAsQ0FBWVgsWUFBWjtBQUNELEtBRjZCLEVBRTNCLElBRjJCLENBQTlCO0FBSUEsV0FBTyxNQUFNO0FBQ1hZLGtCQUFZLENBQUNILFdBQUQsQ0FBWjtBQUNELEtBRkQ7QUFHRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBV0EsU0FBT04sUUFBUSxJQUFJQSxRQUFRLENBQUNVLEVBQXJCLEdBQ0wsbUVBQ0UsTUFBQyxpRUFBRDtBQUFhLFlBQVEsRUFBRVYsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxpRUFBRDtBQUFjLFNBQUssRUFBRUEsUUFBUSxHQUFHQSxRQUFRLENBQUNXLEtBQVosR0FBb0JDLFNBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQVcsY0FBVSxNQUFyQjtBQUFzQixZQUFRLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixFQUVFO0FBQUcsUUFBSSxFQUFFZixZQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRkYsQ0FGRixDQURGLENBRkYsQ0FESyxHQWFILElBYko7QUFjRDs7R0EvQnVCQyxtQjtVQUdERyx1RSxFQUNORSxxRDs7O0tBSk9MLG1CO0FBaUN4QixNQUFNZSxvQkFBb0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1V0FJZixDQUFDO0FBQUVKO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNLLE1BQU4sQ0FBYUMsT0FKYixDQUExQjtNQUFNSixvQiIsImZpbGUiOiIuL3NyYy9wYWdlcy9tZXJjaC9wYXltZW50L2NvbmZpcm1hdGlvbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCwgR2V0U2VydmVyU2lkZVByb3BzUmVzdWx0IH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBHZXRUcmFjUGFnZURhdGEgZnJvbSAnLi4vLi4vLi4vYXBpL3RyYWNwYWdlJztcbmltcG9ydCB7IHVzZVBhZ2VEYXRhIH0gZnJvbSAnQGFydGlzdC9ob29rcy91c2UtcGFnZS1kYXRhJztcbmltcG9ydCBUcmFjUGFnZSBmcm9tICdAc2VydmljZXMvdHJhY3BhZ2UvdHlwZXMvdHJhYy1wYWdlJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQGNvbXBvbmVudHMvY29udGFpbmVyJztcbmltcG9ydCBOZXh0U2VvSGVhZCBmcm9tICdAY29tcG9uZW50cy9uZXh0LXNlby1oZWFkJztcbmltcG9ydCBUaGVtZVdyYXBwZXIgZnJvbSAnQGNvbXBvbmVudHMvdGhlbWUtd3JhcHBlcic7XG5pbXBvcnQgTWVyY2hQYXltZW50Q29uZmlybWF0aW9uIGZyb20gJ0Bjb21wb25lbnRzL21lcmNoL3BheW1lbnQtY29uZmlybWF0aW9uJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHJlbW92ZUxvY2FsU3RvcmFnZUl0ZW0gfSBmcm9tICdAYXJ0aXN0L3V0aWxzL2xvY2Fsc3RvcmFnZSc7XG5cbmNvbnN0IHJlZGlyZWN0TGluayA9ICcvJztcblxuaW50ZXJmYWNlIE1lcmNoQ29uZmlybWF0aW9uUHJvcHMge1xuICBzaXRlRGF0YTogVHJhY1BhZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBheW1lbnRDb25maXJtYXRpb24oe1xuICBzaXRlRGF0YSxcbn06IE1lcmNoQ29uZmlybWF0aW9uUHJvcHMpIHtcbiAgY29uc3QgeyBwYWdlRGF0YSB9ID0gdXNlUGFnZURhdGEoc2l0ZURhdGEpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlbW92ZUxvY2FsU3RvcmFnZUl0ZW0oJ29yZGVySWQnKTtcbiAgICBjb25zdCB0b01haW5UaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcm91dGVyLnB1c2gocmVkaXJlY3RMaW5rKTtcbiAgICB9LCAzMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodG9NYWluVGltZXIpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcGFnZURhdGEgJiYgcGFnZURhdGEuaWQgPyAoXG4gICAgPD5cbiAgICAgIDxOZXh0U2VvSGVhZCBwYWdlRGF0YT17cGFnZURhdGF9IC8+XG4gICAgICA8VGhlbWVXcmFwcGVyIHRoZW1lPXtwYWdlRGF0YSA/IHBhZ2VEYXRhLnRoZW1lIDogdW5kZWZpbmVkfT5cbiAgICAgICAgPENvbnRhaW5lciBoaWRlTmF2YmFyIGhpZGVDYXJ0PlxuICAgICAgICAgIDxNZXJjaFBheW1lbnRDb25maXJtYXRpb24gLz5cbiAgICAgICAgICA8UmVkaXJlY3RpbmdDb250YWluZXI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9eydyZWRpcmVjdGluZyd9PlJFRElSRUNUSU5HIFlPVSBTSE9SVExZLi4uPC9wPlxuICAgICAgICAgICAgPGEgaHJlZj17cmVkaXJlY3RMaW5rfT5Db250aW51ZSB0byBBcnRpc3QgTmFtZTwvYT5cbiAgICAgICAgICA8L1JlZGlyZWN0aW5nQ29udGFpbmVyPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvVGhlbWVXcmFwcGVyPlxuICAgIDwvPlxuICApIDogbnVsbDtcbn1cblxuY29uc3QgUmVkaXJlY3RpbmdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODAlO1xuICBsZWZ0OiA1MCU7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogNDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgYSxcbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6ICdTZW4nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuXG4gIC5yZWRpcmVjdGluZyB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKFxuICBjb250ZXh0OiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0XG4pOiBQcm9taXNlPEdldFNlcnZlclNpZGVQcm9wc1Jlc3VsdDxNZXJjaENvbmZpcm1hdGlvblByb3BzPj4ge1xuICBjb25zdCBzaXRlRGF0YSA9IGF3YWl0IEdldFRyYWNQYWdlRGF0YShcbiAgICBgaHR0cHM6Ly8ke2NvbnRleHQucmVxLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLWhvc3QnXX0ke1xuICAgICAgY29udGV4dC5yZXEudXJsIHx8ICcvJ1xuICAgIH1gXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc2l0ZURhdGEsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/merch/payment/confirmation/index.tsx\n'
      );

      /***/
    },
});
