webpackHotUpdate_N_E('pages/merch/payment/confirmation', {
  /***/ './src/pages/merch/payment/confirmation/index.tsx':
    /*!********************************************************!*\
  !*** ./src/pages/merch/payment/confirmation/index.tsx ***!
  \********************************************************/
    /*! exports provided: __N_SSP, default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentConfirmation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var _artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @artist/hooks/use-page-data */ "./src/hooks/use-page-data.ts");\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/container */ "./src/components/container/index.tsx");\n/* harmony import */ var _components_next_seo_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/next-seo-head */ "./src/components/next-seo-head/index.tsx");\n/* harmony import */ var _components_theme_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/theme-wrapper */ "./src/components/theme-wrapper/index.tsx");\n/* harmony import */ var _components_merch_payment_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/merch/payment-confirmation */ "./src/components/merch/payment-confirmation/index.tsx");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = "/Users/volod34/WebStormProjects/newage/trac/platform/frontend/ssr-artist/src/pages/merch/payment/confirmation/index.tsx",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst redirectLink = \'/\';\nvar __N_SSP = true;\nfunction PaymentConfirmation({\n  siteData\n}) {\n  _s();\n\n  const {\n    pageData\n  } = Object(_artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_2__["usePageData"])(siteData);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {\n    const toMainTimer = setTimeout(() => {\n      router.push(redirectLink);\n    }, 3000);\n    return () => {\n      clearTimeout(toMainTimer);\n    };\n  }, []);\n  return pageData && pageData.id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_next_seo_head__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    pageData: pageData,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(_components_theme_wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    theme: pageData ? pageData.theme : undefined,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    hideNavbar: true,\n    hideCart: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, __jsx(_components_merch_payment_confirmation__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }), __jsx(RedirectingContainer, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx("p", {\n    className: "redirecting",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, "REDIRECTING YOU SHORTLY..."), __jsx("a", {\n    href: "/",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, "Continue to Artist Name"))))) : null;\n}\n\n_s(PaymentConfirmation, "TtSC0wrSnTMtX8pzMF3MDH/OY7E=", false, function () {\n  return [_artist_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_2__["usePageData"], next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];\n});\n\n_c = PaymentConfirmation;\nconst RedirectingContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "confirmation__RedirectingContainer",\n  componentId: "sc-1rjhmep-0"\n})(["position:absolute;top:80%;left:50%;color:white;transform:translate(-50%,-50%);display:flex;max-width:420px;width:100%;align-items:center;justify-content:space-between;a,p{font-family:\\"Sen\\",sans-serif;font-size:14px;line-height:18px;text-decoration:underline;}.redirecting{text-transform:uppercase;font-weight:700;max-width:180px;text-decoration:none;}"]);\n_c2 = RedirectingContainer;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, "PaymentConfirmation");\n$RefreshReg$(_c2, "RedirectingContainer");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lcmNoL3BheW1lbnQvY29uZmlybWF0aW9uL2luZGV4LnRzeD8xM2IzIl0sIm5hbWVzIjpbInJlZGlyZWN0TGluayIsIlBheW1lbnRDb25maXJtYXRpb24iLCJzaXRlRGF0YSIsInBhZ2VEYXRhIiwidXNlUGFnZURhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ0b01haW5UaW1lciIsInNldFRpbWVvdXQiLCJwdXNoIiwiY2xlYXJUaW1lb3V0IiwiaWQiLCJ0aGVtZSIsInVuZGVmaW5lZCIsIlJlZGlyZWN0aW5nQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQSxNQUFNQSxZQUFZLEdBQUcsR0FBckI7O0FBRWUsU0FBU0MsbUJBQVQsQ0FBNkI7QUFDRUM7QUFERixDQUE3QixFQUV3RDtBQUFBOztBQUNyRSxRQUFNO0FBQUVDO0FBQUYsTUFBZUMsK0VBQVcsQ0FBQ0YsUUFBRCxDQUFoQztBQUNBLFFBQU1HLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FDUCxNQUFNO0FBQ0osVUFBTUMsV0FBVyxHQUFHQyxVQUFVLENBQUMsTUFBTTtBQUNuQ0osWUFBTSxDQUFDSyxJQUFQLENBQVlWLFlBQVo7QUFDRCxLQUY2QixFQUUzQixJQUYyQixDQUE5QjtBQUlBLFdBQU8sTUFBTTtBQUNYVyxrQkFBWSxDQUFDSCxXQUFELENBQVo7QUFDRCxLQUZEO0FBR0QsR0FUTSxFQVVQLEVBVk8sQ0FBVDtBQWFBLFNBQU9MLFFBQVEsSUFBSUEsUUFBUSxDQUFDUyxFQUFyQixHQUNMLG1FQUNFLE1BQUMsaUVBQUQ7QUFBYSxZQUFRLEVBQUVULFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsaUVBQUQ7QUFBYyxTQUFLLEVBQUVBLFFBQVEsR0FBR0EsUUFBUSxDQUFDVSxLQUFaLEdBQW9CQyxTQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFXLGNBQVUsTUFBckI7QUFBc0IsWUFBUSxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRSxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsRUFFRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRkYsQ0FGRixDQURGLENBRkYsQ0FESyxHQWFILElBYko7QUFjRDs7R0FqQ3VCYixtQjtVQUdERyx1RSxFQUNORSxxRDs7O0tBSk9MLG1CO0FBbUN4QixNQUFNYyxvQkFBb0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5V0FBMUI7TUFBTUYsb0IiLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWVyY2gvcGF5bWVudC9jb25maXJtYXRpb24vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCwgR2V0U2VydmVyU2lkZVByb3BzUmVzdWx0IH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgR2V0VHJhY1BhZ2VEYXRhIGZyb20gXCIuLi8uLi8uLi9hcGkvdHJhY3BhZ2VcIjtcbmltcG9ydCB7IHVzZVBhZ2VEYXRhIH0gZnJvbSBcIkBhcnRpc3QvaG9va3MvdXNlLXBhZ2UtZGF0YVwiO1xuaW1wb3J0IFRyYWNQYWdlIGZyb20gXCJAc2VydmljZXMvdHJhY3BhZ2UvdHlwZXMvdHJhYy1wYWdlXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAY29tcG9uZW50cy9jb250YWluZXJcIjtcbmltcG9ydCBOZXh0U2VvSGVhZCBmcm9tIFwiQGNvbXBvbmVudHMvbmV4dC1zZW8taGVhZFwiO1xuaW1wb3J0IFRoZW1lV3JhcHBlciBmcm9tIFwiQGNvbXBvbmVudHMvdGhlbWUtd3JhcHBlclwiO1xuaW1wb3J0IE1lcmNoUGF5bWVudENvbmZpcm1hdGlvbiBmcm9tIFwiQGNvbXBvbmVudHMvbWVyY2gvcGF5bWVudC1jb25maXJtYXRpb25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbnRlcmZhY2UgTWVyY2hDb25maXJtYXRpb25Qcm9wcyB7XG4gIHNpdGVEYXRhOiBUcmFjUGFnZTtcbn1cblxuY29uc3QgcmVkaXJlY3RMaW5rID0gJy8nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBheW1lbnRDb25maXJtYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH06IE1lcmNoQ29uZmlybWF0aW9uUHJvcHMpIHtcbiAgY29uc3QgeyBwYWdlRGF0YSB9ID0gdXNlUGFnZURhdGEoc2l0ZURhdGEpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBjb25zdCB0b01haW5UaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaChyZWRpcmVjdExpbmspO1xuICAgICAgfSwgMzAwMCk7XG4gICAgICBcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0b01haW5UaW1lcik7XG4gICAgICB9O1xuICAgIH0sXG4gICAgW11cbiAgKTtcbiAgXG4gIHJldHVybiBwYWdlRGF0YSAmJiBwYWdlRGF0YS5pZCA/IChcbiAgICA8PlxuICAgICAgPE5leHRTZW9IZWFkIHBhZ2VEYXRhPXtwYWdlRGF0YX0gLz5cbiAgICAgIDxUaGVtZVdyYXBwZXIgdGhlbWU9e3BhZ2VEYXRhID8gcGFnZURhdGEudGhlbWUgOiB1bmRlZmluZWR9PlxuICAgICAgICA8Q29udGFpbmVyIGhpZGVOYXZiYXIgaGlkZUNhcnQ+XG4gICAgICAgICAgPE1lcmNoUGF5bWVudENvbmZpcm1hdGlvbiAvPlxuICAgICAgICAgIDxSZWRpcmVjdGluZ0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17XCJyZWRpcmVjdGluZ1wifT5SRURJUkVDVElORyBZT1UgU0hPUlRMWS4uLjwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+Q29udGludWUgdG8gQXJ0aXN0IE5hbWU8L2E+XG4gICAgICAgICAgPC9SZWRpcmVjdGluZ0NvbnRhaW5lcj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L1RoZW1lV3JhcHBlcj5cbiAgICA8Lz5cbiAgKSA6IG51bGw7XG59XG5cbmNvbnN0IFJlZGlyZWN0aW5nQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgwJTtcbiAgbGVmdDogNTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG5cbiAgYSwgcCB7XG4gICAgZm9udC1mYW1pbHk6IFwiU2VuXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5cbiAgLnJlZGlyZWN0aW5nIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoXG4gIGNvbnRleHQ6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHRcbik6IFByb21pc2U8R2V0U2VydmVyU2lkZVByb3BzUmVzdWx0PE1lcmNoQ29uZmlybWF0aW9uUHJvcHM+PiB7XG4gIGNvbnN0IHNpdGVEYXRhID0gYXdhaXQgR2V0VHJhY1BhZ2VEYXRhKFxuICAgIGBodHRwczovLyR7Y29udGV4dC5yZXEuaGVhZGVyc1tcIngtZm9yd2FyZGVkLWhvc3RcIl19JHtcbiAgICAgIGNvbnRleHQucmVxLnVybCB8fCBcIi9cIlxuICAgIH1gXG4gICk7XG4gIFxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzaXRlRGF0YVxuICAgIH1cbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/merch/payment/confirmation/index.tsx\n'
      );

      /***/
    },
});