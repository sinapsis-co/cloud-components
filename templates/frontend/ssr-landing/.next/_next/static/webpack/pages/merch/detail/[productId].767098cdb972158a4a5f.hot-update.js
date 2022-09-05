webpackHotUpdate_N_E('pages/merch/detail/[productId]', {
  /***/ './src/components/merch/product-info/index.tsx':
    /*!*****************************************************!*\
  !*** ./src/components/merch/product-info/index.tsx ***!
  \*****************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductInfo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var _components_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/flex */ "./src/components/flex/index.tsx");\nvar _jsxFileName = "/Users/herni/Documents/repositories/trac/platform/frontend/ssr-artist/src/components/merch/product-info/index.tsx";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction ProductInfo({\n  className,\n  product,\n  inDetail,\n  inCart,\n  size,\n  color,\n  noPrice\n}) {\n  return __jsx(InformationWrapper, {\n    className: className,\n    inDetail: inDetail,\n    inCart: inCart,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx("div", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(Title, {\n    className: "title",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, product.title), inCart && size ? __jsx(Details, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, "Size: ", size, color && `, ${color}`) : null), !noPrice && __jsx(Price, {\n    className: "price",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, "$", product.price.toFixed(2).toLocaleString()));\n}\n_c = ProductInfo;\nconst InformationWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_flex__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({\n  displayName: "product-info__InformationWrapper",\n  componentId: "sc-1vodx6d-0"\n})(["flex-direction:column;align-items:flex-start;", " ", ""], ({\n  inDetail\n}) => inDetail ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["flex-direction:row;justify-content:space-between;align-items:flex-end;@media (max-width:", "){flex-direction:column;justify-content:flex-start;align-items:flex-start;}.title{max-width:320px;font-weight:800;font-size:40px;line-height:40px;white-space:normal;@media (max-width:", "){font-size:32px;max-width:none;}}.price{font-size:24px;margin-top:0;@media (max-width:", "){font-size:16px;}}"], ({\n  theme\n}) => `${theme.breakpoints.tablet}px`, ({\n  theme\n}) => `${theme.breakpoints.tablet}px`, ({\n  theme\n}) => `${theme.breakpoints.tablet}px`) : null, ({\n  inCart\n}) => inCart ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:100%;flex-direction:row;justify-content:space-between;align-items:center;.title{font-size:16px;font-weight:700;line-height:24px;}"]) : null);\n_c2 = InformationWrapper;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({\n  displayName: "product-info__Title",\n  componentId: "sc-1vodx6d-1"\n})(["color:", ";font-size:16px;font-weight:700;line-height:24px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;@media (max-width:", "){white-space:pre-wrap;}"], ({\n  theme\n}) => theme.colors.primary, ({\n  theme\n}) => `${theme.breakpoints.tablet}px`);\n_c3 = Title;\nconst Price = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h6.withConfig({\n  displayName: "product-info__Price",\n  componentId: "sc-1vodx6d-2"\n})(["color:", ";font-size:16px;font-weight:400;line-height:24px;opacity:0.7;margin:0;"], ({\n  theme\n}) => theme.colors.primary);\n_c4 = Price;\nconst Details = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h6.withConfig({\n  displayName: "product-info__Details",\n  componentId: "sc-1vodx6d-3"\n})(["color:", ";font-size:14px;font-weight:400;line-height:24px;margin:0;"], ({\n  theme\n}) => theme.colors.primary);\n_c5 = Details;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, "ProductInfo");\n$RefreshReg$(_c2, "InformationWrapper");\n$RefreshReg$(_c3, "Title");\n$RefreshReg$(_c4, "Price");\n$RefreshReg$(_c5, "Details");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWVyY2gvcHJvZHVjdC1pbmZvL2luZGV4LnRzeD80NDcxIl0sIm5hbWVzIjpbIlByb2R1Y3RJbmZvIiwiY2xhc3NOYW1lIiwicHJvZHVjdCIsImluRGV0YWlsIiwiaW5DYXJ0Iiwic2l6ZSIsImNvbG9yIiwibm9QcmljZSIsInRpdGxlIiwicHJpY2UiLCJ0b0ZpeGVkIiwidG9Mb2NhbGVTdHJpbmciLCJJbmZvcm1hdGlvbldyYXBwZXIiLCJzdHlsZWQiLCJGbGV4IiwiY3NzIiwidGhlbWUiLCJicmVha3BvaW50cyIsInRhYmxldCIsIlRpdGxlIiwiaDQiLCJjb2xvcnMiLCJwcmltYXJ5IiwiUHJpY2UiLCJoNiIsIkRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7QUFJZSxTQUFTQSxXQUFULENBQXFCO0FBQ2xDQyxXQURrQztBQUVsQ0MsU0FGa0M7QUFHbENDLFVBSGtDO0FBSWxDQyxRQUprQztBQUtsQ0MsTUFMa0M7QUFNbENDLE9BTmtDO0FBT2xDQztBQVBrQyxDQUFyQixFQWdCWjtBQUNELFNBQ0UsTUFBQyxrQkFBRDtBQUNFLGFBQVMsRUFBRU4sU0FEYjtBQUVFLFlBQVEsRUFBRUUsUUFGWjtBQUdFLFVBQU0sRUFBRUMsTUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUFPLGFBQVMsRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCRixPQUFPLENBQUNNLEtBQWxDLENBREYsRUFFR0osTUFBTSxJQUFJQyxJQUFWLEdBQ0MsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFDU0EsSUFEVCxFQUVHQyxLQUFLLElBQUssS0FBSUEsS0FBTSxFQUZ2QixDQURELEdBS0csSUFQTixDQUxGLEVBY0csQ0FBQ0MsT0FBRCxJQUNDLE1BQUMsS0FBRDtBQUFPLGFBQVMsRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQ0lMLE9BQU8sQ0FBQ08sS0FBUixDQUFjQyxPQUFkLENBQXNCLENBQXRCLEVBQXlCQyxjQUF6QixFQURKLENBZkosQ0FERjtBQXNCRDtLQXZDdUJYLFc7QUF5Q3hCLE1BQU1ZLGtCQUFrQixHQUFHQyxpRUFBTSxDQUFDQyx3REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLCtEQU9wQixDQUFDO0FBQUVYO0FBQUYsQ0FBRCxLQUNBQSxRQUFRLEdBQ0pZLDZEQURJLDRZQUttQixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUNoQixHQUFFQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JDLE1BQU8sSUFOOUIsRUFpQnFCLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQ2hCLEdBQUVBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkMsTUFBTyxJQWxCaEMsRUEyQnFCLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQ2hCLEdBQUVBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkMsTUFBTyxJQTVCaEMsSUFpQ0osSUF6Q2dCLEVBMkNwQixDQUFDO0FBQUVkO0FBQUYsQ0FBRCxLQUNBQSxNQUFNLEdBQ0ZXLDZEQURFLGdKQVlGLElBeERnQixDQUF4QjtNQUFNSCxrQjtBQTJETixNQUFNTyxLQUFLLEdBQUdOLHlEQUFNLENBQUNPLEVBQVY7QUFBQTtBQUFBO0FBQUEscUxBQ0EsQ0FBQztBQUFFSjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSyxNQUFOLENBQWFDLE9BRDVCLEVBVVksQ0FBQztBQUFFTjtBQUFGLENBQUQsS0FBZ0IsR0FBRUEsS0FBSyxDQUFDQyxXQUFOLENBQWtCQyxNQUFPLElBVnZELENBQVg7TUFBTUMsSztBQWVOLE1BQU1JLEtBQUssR0FBR1YseURBQU0sQ0FBQ1csRUFBVjtBQUFBO0FBQUE7QUFBQSx5RkFDQSxDQUFDO0FBQUVSO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNLLE1BQU4sQ0FBYUMsT0FENUIsQ0FBWDtNQUFNQyxLO0FBU04sTUFBTUUsT0FBTyxHQUFHWix5REFBTSxDQUFDVyxFQUFWO0FBQUE7QUFBQTtBQUFBLDZFQUNGLENBQUM7QUFBRVI7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxPQUQxQixDQUFiO01BQU1HLE8iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tZXJjaC9wcm9kdWN0LWluZm8vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBGbGV4IGZyb20gJ0Bjb21wb25lbnRzL2ZsZXgnO1xuXG5pbXBvcnQgeyBNZXJjaFByb2R1Y3RGcm9udCB9IGZyb20gJ0BzZXJ2aWNlcy9tZXJjaC90eXBlcy9hcGkvbWVyY2gtcHJvZHVjdC1mcm9udCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RJbmZvKHtcbiAgY2xhc3NOYW1lLFxuICBwcm9kdWN0LFxuICBpbkRldGFpbCxcbiAgaW5DYXJ0LFxuICBzaXplLFxuICBjb2xvcixcbiAgbm9QcmljZSxcbn06IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBwcm9kdWN0OiBNZXJjaFByb2R1Y3RGcm9udDtcbiAgaW5EZXRhaWw/OiBib29sZWFuO1xuICBpbkNhcnQ/OiBib29sZWFuO1xuICBzaXplPzogc3RyaW5nO1xuICBjb2xvcj86IHN0cmluZztcbiAgbm9QcmljZT86IGJvb2xlYW47XG59KSB7XG4gIHJldHVybiAoXG4gICAgPEluZm9ybWF0aW9uV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBpbkRldGFpbD17aW5EZXRhaWx9XG4gICAgICBpbkNhcnQ9e2luQ2FydH1cbiAgICA+XG4gICAgICA8ZGl2PlxuICAgICAgICA8VGl0bGUgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvZHVjdC50aXRsZX08L1RpdGxlPlxuICAgICAgICB7aW5DYXJ0ICYmIHNpemUgPyAoXG4gICAgICAgICAgPERldGFpbHM+XG4gICAgICAgICAgICBTaXplOiB7c2l6ZX1cbiAgICAgICAgICAgIHtjb2xvciAmJiBgLCAke2NvbG9yfWB9XG4gICAgICAgICAgPC9EZXRhaWxzPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICAgeyFub1ByaWNlICYmIChcbiAgICAgICAgPFByaWNlIGNsYXNzTmFtZT1cInByaWNlXCI+XG4gICAgICAgICAgJHtwcm9kdWN0LnByaWNlLnRvRml4ZWQoMikudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgPC9QcmljZT5cbiAgICAgICl9XG4gICAgPC9JbmZvcm1hdGlvbldyYXBwZXI+XG4gICk7XG59XG5cbmNvbnN0IEluZm9ybWF0aW9uV3JhcHBlciA9IHN0eWxlZChGbGV4KTx7XG4gIGluRGV0YWlsPzogYm9vbGVhbjtcbiAgaW5DYXJ0PzogYm9vbGVhbjtcbn0+YFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAkeyh7IGluRGV0YWlsIH0pID0+XG4gICAgaW5EZXRhaWxcbiAgICAgID8gY3NzYFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PlxuICAgICAgICAgICAgICBgJHt0aGVtZS5icmVha3BvaW50cy50YWJsZXR9cHhgfSkge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PlxuICAgICAgICAgICAgICAgIGAke3RoZW1lLmJyZWFrcG9pbnRzLnRhYmxldH1weGB9KSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT5cbiAgICAgICAgICAgICAgICBgJHt0aGVtZS5icmVha3BvaW50cy50YWJsZXR9cHhgfSkge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgXG4gICAgICA6IG51bGx9XG5cbiAgJHsoeyBpbkNhcnQgfSkgPT5cbiAgICBpbkNhcnRcbiAgICAgID8gY3NzYFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICB9XG4gICAgICAgIGBcbiAgICAgIDogbnVsbH1cbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmg0YFxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXJnaW46IDA7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMudGFibGV0fXB4YH0pIHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIH1cbmA7XG5cbmNvbnN0IFByaWNlID0gc3R5bGVkLmg2YFxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luOiAwO1xuYDtcblxuY29uc3QgRGV0YWlscyA9IHN0eWxlZC5oNmBcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDA7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/merch/product-info/index.tsx\n'
      );

      /***/
    },
});