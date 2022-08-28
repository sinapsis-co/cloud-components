webpackHotUpdate_N_E('pages/merch/detail/[productId]', {
  /***/ './src/pages/merch/detail/[productId]/index.tsx':
    /*!******************************************************!*\
  !*** ./src/pages/merch/detail/[productId]/index.tsx ***!
  \******************************************************/
    /*! exports provided: __N_SSP, default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MerchDetail; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/container */ "./src/components/container/index.tsx");\n/* harmony import */ var _components_theme_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/theme-wrapper */ "./src/components/theme-wrapper/index.tsx");\n/* harmony import */ var _components_merch_product_item_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/merch/product-item-detail */ "./src/components/merch/product-item-detail/index.tsx");\n/* harmony import */ var _components_merch_product_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/merch/product-list */ "./src/components/merch/product-list/index.tsx");\n/* harmony import */ var _components_back_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/back-navigation */ "./src/components/back-navigation/index.tsx");\n/* harmony import */ var _hooks_use_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/use-cart */ "./src/hooks/use-cart.ts");\n/* harmony import */ var _hooks_use_page_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/use-page-data */ "./src/hooks/use-page-data.ts");\n/* harmony import */ var _components_next_seo_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/next-seo-head */ "./src/components/next-seo-head/index.tsx");\nvar _jsxFileName = "/Users/faizanuddinmorkas/projects/trac-technologies/trac/platform/frontend/ssr-artist/src/pages/merch/detail/[productId]/index.tsx",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction MerchDetail(props) {\n  _s();\n\n  // const [merchPageData, setMerchPageData] = useState(MerchDetailData);\n  const {\n    0: merchPageData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.siteData);\n  const {\n    cart\n  } = Object(_hooks_use_cart__WEBPACK_IMPORTED_MODULE_6__["useCart"])(merchPageData.ownerId);\n  const {\n    pageData\n  } = Object(_hooks_use_page_data__WEBPACK_IMPORTED_MODULE_7__["usePageData"])(props.siteData);\n  console.log(merchPageData);\n\n  if (!props.product) {\n    return null;\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_next_seo_head__WEBPACK_IMPORTED_MODULE_8__["default"], {\n    pageData: pageData,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }), __jsx(_components_theme_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    theme: merchPageData ? merchPageData.theme : undefined,\n    removeBranding: merchPageData === null || merchPageData === void 0 ? void 0 : merchPageData.removeBranding,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    columnFlow: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(_components_back_navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    title: "Merch",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }), __jsx(_components_merch_product_item_detail__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    product: props.product,\n    cartKey: merchPageData.ownerId,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }), __jsx(_components_merch_product_list__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    products: props.merchData,\n    showCart: cart.length > 0,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(MerchDetail, "cUEdA8Pz1pt5d0fjjn9L1/JaTJY=", false, function () {\n  return [_hooks_use_cart__WEBPACK_IMPORTED_MODULE_6__["useCart"], _hooks_use_page_data__WEBPACK_IMPORTED_MODULE_7__["usePageData"]];\n});\n\n_c = MerchDetail;\n\nvar _c;\n\n$RefreshReg$(_c, "MerchDetail");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lcmNoL2RldGFpbC9bcHJvZHVjdElkXS9pbmRleC50c3g/NmRhNiJdLCJuYW1lcyI6WyJNZXJjaERldGFpbCIsInByb3BzIiwibWVyY2hQYWdlRGF0YSIsInVzZVN0YXRlIiwic2l0ZURhdGEiLCJjYXJ0IiwidXNlQ2FydCIsIm93bmVySWQiLCJwYWdlRGF0YSIsInVzZVBhZ2VEYXRhIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3QiLCJ0aGVtZSIsInVuZGVmaW5lZCIsInJlbW92ZUJyYW5kaW5nIiwibWVyY2hEYXRhIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7O0FBT2UsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBOEM7QUFBQTs7QUFDM0Q7QUFDQSxRQUFNO0FBQUEsT0FBQ0M7QUFBRCxNQUFrQkMsc0RBQVEsQ0FBQ0YsS0FBSyxDQUFDRyxRQUFQLENBQWhDO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVdDLCtEQUFPLENBQUNKLGFBQWEsQ0FBQ0ssT0FBZixDQUF4QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFlQyx3RUFBVyxDQUFDUixLQUFLLENBQUNHLFFBQVAsQ0FBaEM7QUFFQU0sU0FBTyxDQUFDQyxHQUFSLENBQVlULGFBQVo7O0FBRUEsTUFBSSxDQUFDRCxLQUFLLENBQUNXLE9BQVgsRUFBb0I7QUFDbEIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FDRSxtRUFDRSxNQUFDLGlFQUFEO0FBQWEsWUFBUSxFQUFFSixRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGlFQUFEO0FBQ0UsU0FBSyxFQUFFTixhQUFhLEdBQUlBLGFBQWEsQ0FBQ1csS0FBbEIsR0FBcUNDLFNBRDNEO0FBRUUsa0JBQWMsRUFBRVosYUFBRixhQUFFQSxhQUFGLHVCQUFFQSxhQUFhLENBQUVhLGNBRmpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLDZEQUFEO0FBQVcsY0FBVSxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFnQixTQUFLLEVBQUMsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw2RUFBRDtBQUNFLFdBQU8sRUFBRWQsS0FBSyxDQUFDVyxPQURqQjtBQUVFLFdBQU8sRUFBRVYsYUFBYSxDQUFDSyxPQUZ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFNRSxNQUFDLHNFQUFEO0FBQWEsWUFBUSxFQUFFTixLQUFLLENBQUNlLFNBQTdCO0FBQXdDLFlBQVEsRUFBRVgsSUFBSSxDQUFDWSxNQUFMLEdBQWMsQ0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBSkYsQ0FGRixDQURGO0FBa0JEOztHQTlCdUJqQixXO1VBR0xNLHVELEVBQ0lHLGdFOzs7S0FKQ1QsVyIsImZpbGUiOiIuL3NyYy9wYWdlcy9tZXJjaC9kZXRhaWwvW3Byb2R1Y3RJZF0vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSAnQGNvbXBvbmVudHMvY29udGFpbmVyJztcbmltcG9ydCBUaGVtZVdyYXBwZXIgZnJvbSAnQGNvbXBvbmVudHMvdGhlbWUtd3JhcHBlcic7XG5pbXBvcnQgUHJvZHVjdEl0ZW1EZXRhaWwgZnJvbSAnQGNvbXBvbmVudHMvbWVyY2gvcHJvZHVjdC1pdGVtLWRldGFpbCc7XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnQGNvbXBvbmVudHMvbWVyY2gvcHJvZHVjdC1saXN0JztcblxuaW1wb3J0IEJhY2tOYXZpZ2F0aW9uIGZyb20gJ0Bjb21wb25lbnRzL2JhY2stbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBNZXJjaFByb2R1Y3RGcm9udCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lcmNoL3R5cGVzL2FwaS9tZXJjaC1wcm9kdWN0LWZyb250JztcbmltcG9ydCB7IExpc3RNZXJjaFByb2R1Y3RzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL3R5cGVzL21lcmNoL2xpc3QtbWVyY2gtcHJvZHVjdHMnO1xuaW1wb3J0IFRyYWNQYWdlIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NlcnZpY2VzL3RyYWNwYWdlL3R5cGVzL3RyYWMtcGFnZSc7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0LCBHZXRTZXJ2ZXJTaWRlUHJvcHNSZXN1bHQgfSBmcm9tICduZXh0JztcbmltcG9ydCBHZXRUcmFjUGFnZURhdGEgZnJvbSAnLi4vLi4vLi4vYXBpL3RyYWNwYWdlJztcbmltcG9ydCBHZXRNZXJjaERhdGEgZnJvbSAnLi4vLi4vLi4vYXBpL21lcmNoJztcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2UtY2FydCc7XG5pbXBvcnQgeyB1c2VQYWdlRGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2hvb2tzL3VzZS1wYWdlLWRhdGEnO1xuaW1wb3J0IE5leHRTZW9IZWFkIGZyb20gJ0Bjb21wb25lbnRzL25leHQtc2VvLWhlYWQnO1xuaW50ZXJmYWNlIE1lcmNoRGV0YWlsUHJvcHMge1xuICBzaXRlRGF0YTogVHJhY1BhZ2U7XG4gIG1lcmNoRGF0YTogTGlzdE1lcmNoUHJvZHVjdHM7XG4gIHByb2R1Y3Q/OiBNZXJjaFByb2R1Y3RGcm9udDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVyY2hEZXRhaWwocHJvcHM6IE1lcmNoRGV0YWlsUHJvcHMpIHtcbiAgLy8gY29uc3QgW21lcmNoUGFnZURhdGEsIHNldE1lcmNoUGFnZURhdGFdID0gdXNlU3RhdGUoTWVyY2hEZXRhaWxEYXRhKTtcbiAgY29uc3QgW21lcmNoUGFnZURhdGFdID0gdXNlU3RhdGUocHJvcHMuc2l0ZURhdGEpO1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNhcnQobWVyY2hQYWdlRGF0YS5vd25lcklkKTtcbiAgY29uc3QgeyBwYWdlRGF0YSB9ID0gdXNlUGFnZURhdGEocHJvcHMuc2l0ZURhdGEpO1xuXG4gIGNvbnNvbGUubG9nKG1lcmNoUGFnZURhdGEpXG5cbiAgaWYgKCFwcm9wcy5wcm9kdWN0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmV4dFNlb0hlYWQgcGFnZURhdGE9e3BhZ2VEYXRhfSAvPlxuICAgICAgPFRoZW1lV3JhcHBlclxuICAgICAgICB0aGVtZT17bWVyY2hQYWdlRGF0YSA/IChtZXJjaFBhZ2VEYXRhLnRoZW1lIGFzICdkYXJrJykgOiB1bmRlZmluZWR9XG4gICAgICAgIHJlbW92ZUJyYW5kaW5nPXttZXJjaFBhZ2VEYXRhPy5yZW1vdmVCcmFuZGluZ31cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lciBjb2x1bW5GbG93PlxuICAgICAgICAgIDxCYWNrTmF2aWdhdGlvbiB0aXRsZT1cIk1lcmNoXCIgLz5cbiAgICAgICAgICA8UHJvZHVjdEl0ZW1EZXRhaWxcbiAgICAgICAgICAgIHByb2R1Y3Q9e3Byb3BzLnByb2R1Y3R9XG4gICAgICAgICAgICBjYXJ0S2V5PXttZXJjaFBhZ2VEYXRhLm93bmVySWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHM9e3Byb3BzLm1lcmNoRGF0YX0gc2hvd0NhcnQ9e2NhcnQubGVuZ3RoID4gMH0gLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L1RoZW1lV3JhcHBlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhcbiAgY29udGV4dDogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dFxuKTogUHJvbWlzZTxHZXRTZXJ2ZXJTaWRlUHJvcHNSZXN1bHQ8TWVyY2hEZXRhaWxQcm9wcz4+IHtcbiAgY29uc3Qgc2l0ZURhdGEgPSBhd2FpdCBHZXRUcmFjUGFnZURhdGEoXG4gICAgYGh0dHBzOi8vJHtjb250ZXh0LnJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1ob3N0J119JHtcbiAgICAgIGNvbnRleHQucmVxLnVybCB8fCAnLydcbiAgICB9YFxuICApO1xuXG4gIGNvbnN0IG1lcmNoRGF0YSA9IGF3YWl0IEdldE1lcmNoRGF0YShzaXRlRGF0YS5vd25lcklkKTtcblxuICBjb25zdCBwcm9kdWN0ID0gbWVyY2hEYXRhLmZpbmQoKHApID0+IHAuaWQgPT09IGNvbnRleHQucGFyYW1zPy5wcm9kdWN0SWQpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNpdGVEYXRhLFxuICAgICAgbWVyY2hEYXRhLFxuICAgICAgcHJvZHVjdCxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/merch/detail/[productId]/index.tsx\n'
      );

      /***/
    },
});
