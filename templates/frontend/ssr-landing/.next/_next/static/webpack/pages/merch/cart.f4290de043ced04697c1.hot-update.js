webpackHotUpdate_N_E('pages/merch/cart', {
  /***/ './src/components/merch/product-img/index.tsx':
    /*!****************************************************!*\
  !*** ./src/components/merch/product-img/index.tsx ***!
  \****************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductImage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\nvar _jsxFileName = "/Users/herni/Documents/repositories/trac/platform/frontend/ssr-artist/src/components/merch/product-img/index.tsx";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ProductImage({\n  className,\n  image,\n  alt,\n  hasDarkBackground,\n  isJsx,\n  jsxImage,\n  inCart,\n  inDetail\n}) {\n  return __jsx(ImgContainer, {\n    className: `${className} ${inCart ? \'cart\' : \'\'} ${inDetail ? \'detail\' : \'\'}`,\n    hasDarkBackground: hasDarkBackground,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, isJsx ? __jsx(FilteredImageWrap, {\n    className: `${inCart ? \'cart\' : \'\'} ${inDetail ? \'detail\' : \'\'}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(ProductImg, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, jsxImage)) : __jsx(ProductImgTag, {\n    src: image,\n    alt: alt,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }));\n}\n_c = ProductImage;\nconst ImgContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "product-img__ImgContainer",\n  componentId: "sc-1wvkwid-0"\n})(["display:flex;justify-content:center;align-items:center;border-radius:5px;padding:32px;background-color:", ";&.cart{padding:0;}@media (max-width:", "){padding:0;width:fit-content;justify-content:flex-start;&.detail{padding:32px;width:auto;height:auto;justify-content:center;}}", ""], ({\n  theme\n}) => theme.colors.itemBackground, ({\n  theme\n}) => `${theme.breakpoints.laptop}px`, ({\n  hasDarkBackground\n}) => hasDarkBackground ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["background-color:", ";"], ({\n  theme\n}) => theme.colors.sidebarBackground) : null);\n_c2 = ImgContainer;\nconst FilteredImageWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "product-img__FilteredImageWrap",\n  componentId: "sc-1wvkwid-1"\n})(["width:", ";height:", ";object-fit:cover;border-radius:5px;overflow:hidden;position:relative;@media (max-width:", "){width:", ";height:", ";&.detail{width:auto;height:auto;}}&.cart{width:", ";height:", ";}"], ({\n  theme\n}) => theme.sizes.productSize, ({\n  theme\n}) => theme.sizes.productSize, ({\n  theme\n}) => `${theme.breakpoints.laptop}px`, ({\n  theme\n}) => theme.sizes.coverSizeMobile, ({\n  theme\n}) => theme.sizes.coverSizeMobile, ({\n  theme\n}) => `${theme.sizes.productSizeMobile}`, ({\n  theme\n}) => `${theme.sizes.productSizeMobile}`);\n_c3 = FilteredImageWrap;\nconst ProductImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "product-img__ProductImg",\n  componentId: "sc-1wvkwid-2"\n})(["height:100%;"]);\n_c4 = ProductImg;\nconst ProductImgTag = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({\n  displayName: "product-img__ProductImgTag",\n  componentId: "sc-1wvkwid-3"\n})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:65%;width:100%;display:block;"]);\n_c5 = ProductImgTag;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, "ProductImage");\n$RefreshReg$(_c2, "ImgContainer");\n$RefreshReg$(_c3, "FilteredImageWrap");\n$RefreshReg$(_c4, "ProductImg");\n$RefreshReg$(_c5, "ProductImgTag");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWVyY2gvcHJvZHVjdC1pbWcvaW5kZXgudHN4PzY5YTgiXSwibmFtZXMiOlsiUHJvZHVjdEltYWdlIiwiY2xhc3NOYW1lIiwiaW1hZ2UiLCJhbHQiLCJoYXNEYXJrQmFja2dyb3VuZCIsImlzSnN4IiwianN4SW1hZ2UiLCJpbkNhcnQiLCJpbkRldGFpbCIsIkltZ0NvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiY29sb3JzIiwiaXRlbUJhY2tncm91bmQiLCJicmVha3BvaW50cyIsImxhcHRvcCIsImNzcyIsInNpZGViYXJCYWNrZ3JvdW5kIiwiRmlsdGVyZWRJbWFnZVdyYXAiLCJzaXplcyIsInByb2R1Y3RTaXplIiwiY292ZXJTaXplTW9iaWxlIiwicHJvZHVjdFNpemVNb2JpbGUiLCJQcm9kdWN0SW1nIiwiUHJvZHVjdEltZ1RhZyIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFlBQVQsQ0FBc0I7QUFDbkNDLFdBRG1DO0FBRW5DQyxPQUZtQztBQUduQ0MsS0FIbUM7QUFJbkNDLG1CQUptQztBQUtuQ0MsT0FMbUM7QUFNbkNDLFVBTm1DO0FBT25DQyxRQVBtQztBQVFuQ0M7QUFSbUMsQ0FBdEIsRUFrQlo7QUFDRCxTQUNFLE1BQUMsWUFBRDtBQUNFLGFBQVMsRUFBRyxHQUFFUCxTQUFVLElBQUdNLE1BQU0sR0FBRyxNQUFILEdBQVksRUFBRyxJQUM5Q0MsUUFBUSxHQUFHLFFBQUgsR0FBYyxFQUN2QixFQUhIO0FBSUUscUJBQWlCLEVBQUVKLGlCQUpyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdDLEtBQUssR0FDSixNQUFDLGlCQUFEO0FBQ0UsYUFBUyxFQUFHLEdBQUVFLE1BQU0sR0FBRyxNQUFILEdBQVksRUFBRyxJQUFHQyxRQUFRLEdBQUcsUUFBSCxHQUFjLEVBQUcsRUFEakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFGLFFBQWIsQ0FIRixDQURJLEdBT0osTUFBQyxhQUFEO0FBQWUsT0FBRyxFQUFFSixLQUFwQjtBQUEyQixPQUFHLEVBQUVDLEdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiSixDQURGO0FBa0JEO0tBckN1QkgsWTtBQXVDeEIsTUFBTVMsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdTQVFJLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxjQVJoQyxFQWNLLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWdCLEdBQUVBLEtBQUssQ0FBQ0csV0FBTixDQUFrQkMsTUFBTyxJQWRoRCxFQTJCZCxDQUFDO0FBQUVaO0FBQUYsQ0FBRCxLQUNBQSxpQkFBaUIsR0FDYmEsNkRBRGEsNkJBRVMsQ0FBQztBQUFFTDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFLLGlCQUZyQyxJQUliLElBaENVLENBQWxCO01BQU1ULFk7QUFtQ04sTUFBTVUsaUJBQWlCLEdBQUdULHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscU5BQ1osQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDUSxLQUFOLENBQVlDLFdBRGYsRUFFWCxDQUFDO0FBQUVUO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNRLEtBQU4sQ0FBWUMsV0FGaEIsRUFRQSxDQUFDO0FBQUVUO0FBQUYsQ0FBRCxLQUFnQixHQUFFQSxLQUFLLENBQUNHLFdBQU4sQ0FBa0JDLE1BQU8sSUFSM0MsRUFTVixDQUFDO0FBQUVKO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNRLEtBQU4sQ0FBWUUsZUFUakIsRUFVVCxDQUFDO0FBQUVWO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNRLEtBQU4sQ0FBWUUsZUFWbEIsRUFtQlYsQ0FBQztBQUFFVjtBQUFGLENBQUQsS0FBZ0IsR0FBRUEsS0FBSyxDQUFDUSxLQUFOLENBQVlHLGlCQUFrQixFQW5CdEMsRUFvQlQsQ0FBQztBQUFFWDtBQUFGLENBQUQsS0FBZ0IsR0FBRUEsS0FBSyxDQUFDUSxLQUFOLENBQVlHLGlCQUFrQixFQXBCdkMsQ0FBdkI7TUFBTUosaUI7QUF3Qk4sTUFBTUssVUFBVSxHQUFHZCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9CQUFoQjtNQUFNYSxVO0FBSU4sTUFBTUMsYUFBYSxHQUFHZix5REFBTSxDQUFDZ0IsR0FBVjtBQUFBO0FBQUE7QUFBQSxpSEFBbkI7TUFBTUQsYSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL21lcmNoL3Byb2R1Y3QtaW1nL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0SW1hZ2Uoe1xuICBjbGFzc05hbWUsXG4gIGltYWdlLFxuICBhbHQsXG4gIGhhc0RhcmtCYWNrZ3JvdW5kLFxuICBpc0pzeCxcbiAganN4SW1hZ2UsXG4gIGluQ2FydCxcbiAgaW5EZXRhaWwsXG59OiB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgYWx0OiBzdHJpbmc7XG4gIGhhc0RhcmtCYWNrZ3JvdW5kPzogYm9vbGVhbjtcbiAgaW5DYXJ0PzogYm9vbGVhbjtcbiAgaW5EZXRhaWw/OiBib29sZWFuO1xuICBpc0pzeD86IGJvb2xlYW47XG4gIGpzeEltYWdlPzogSlNYLkVsZW1lbnQ7XG59KSB7XG4gIHJldHVybiAoXG4gICAgPEltZ0NvbnRhaW5lclxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9ICR7aW5DYXJ0ID8gJ2NhcnQnIDogJyd9ICR7XG4gICAgICAgIGluRGV0YWlsID8gJ2RldGFpbCcgOiAnJ1xuICAgICAgfWB9XG4gICAgICBoYXNEYXJrQmFja2dyb3VuZD17aGFzRGFya0JhY2tncm91bmR9XG4gICAgPlxuICAgICAge2lzSnN4ID8gKFxuICAgICAgICA8RmlsdGVyZWRJbWFnZVdyYXBcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2luQ2FydCA/ICdjYXJ0JyA6ICcnfSAke2luRGV0YWlsID8gJ2RldGFpbCcgOiAnJ31gfVxuICAgICAgICA+XG4gICAgICAgICAgPFByb2R1Y3RJbWc+e2pzeEltYWdlfTwvUHJvZHVjdEltZz5cbiAgICAgICAgPC9GaWx0ZXJlZEltYWdlV3JhcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxQcm9kdWN0SW1nVGFnIHNyYz17aW1hZ2V9IGFsdD17YWx0fSAvPlxuICAgICAgKX1cbiAgICA8L0ltZ0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgSW1nQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7XG4gIGhhc0RhcmtCYWNrZ3JvdW5kPzogYm9vbGVhbjtcbn0+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5pdGVtQmFja2dyb3VuZH07XG5cbiAgJi5jYXJ0IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMubGFwdG9wfXB4YH0pIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICAmLmRldGFpbCB7XG4gICAgICBwYWRkaW5nOiAzMnB4O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAkeyh7IGhhc0RhcmtCYWNrZ3JvdW5kIH0pID0+XG4gICAgaGFzRGFya0JhY2tncm91bmRcbiAgICAgID8gY3NzYFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnNpZGViYXJCYWNrZ3JvdW5kfTtcbiAgICAgICAgYFxuICAgICAgOiBudWxsfVxuYDtcblxuY29uc3QgRmlsdGVyZWRJbWFnZVdyYXAgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zaXplcy5wcm9kdWN0U2l6ZX07XG4gIGhlaWdodDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zaXplcy5wcm9kdWN0U2l6ZX07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5icmVha3BvaW50cy5sYXB0b3B9cHhgfSkge1xuICAgIHdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNpemVzLmNvdmVyU2l6ZU1vYmlsZX07XG4gICAgaGVpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNpemVzLmNvdmVyU2l6ZU1vYmlsZX07XG5cbiAgICAmLmRldGFpbCB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cblxuICAmLmNhcnQge1xuICAgIHdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnNpemVzLnByb2R1Y3RTaXplTW9iaWxlfWB9O1xuICAgIGhlaWdodDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5zaXplcy5wcm9kdWN0U2l6ZU1vYmlsZX1gfTtcbiAgfVxuYDtcblxuY29uc3QgUHJvZHVjdEltZyA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwJTtcbmA7XG5cbmNvbnN0IFByb2R1Y3RJbWdUYWcgPSBzdHlsZWQuaW1nYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBtYXgtd2lkdGg6IDY1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/merch/product-img/index.tsx\n'
      );

      /***/
    },
});
