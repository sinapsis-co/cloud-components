webpackHotUpdate_N_E('pages/merch', {
  /***/ './src/components/merch/product-img/index.tsx':
    /*!****************************************************!*\
  !*** ./src/components/merch/product-img/index.tsx ***!
  \****************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductImage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\nvar _jsxFileName = "/Users/faizanuddinmorkas/projects/trac-technologies/trac/platform/frontend/ssr-artist/src/components/merch/product-img/index.tsx";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ProductImage({\n  className,\n  image,\n  inList,\n  square,\n  alt\n}) {\n  return __jsx(ImgContainer, {\n    className: className,\n    inList: inList,\n    square: square,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(ProductImg, {\n    src: image,\n    alt: alt,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }));\n}\n_c = ProductImage;\nconst ImgContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "product-img__ImgContainer",\n  componentId: "sc-1wvkwid-0"\n})(["position:relative;width:100%;max-width:100%;height:420px;max-height:420px;border-radius:10px;background-color:", ";@media (max-width:", "){width:100%;max-width:none;}", " ", ";"], ({\n  theme\n}) => theme.colors.itemBackground, ({\n  theme\n}) => `${theme.breakpoints.tablet}px`, ({\n  square\n}) => square ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:", "px;height:", "px;border-radius:4px;@media (max-width:", "){height:auto;min-height:300px;}"], square, square, ({\n  theme\n}) => `${theme.breakpoints.tablet}px`) : null, ({\n  inList\n}) => inList ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:calc( (535px - (5px * ", ")) / ", " );max-width:calc( (535px - (5px * ", ")) / ", " );height:calc( (535px - (5px * ", ")) / ", " );border-radius:5px;cursor:pointer;transition:background-color ", ";&:hover{background-color:", ";}&:last-child{margin-right:0;}@media (max-width:", "){width:calc( (100% - (5px * ", ")) / ", " );", "}"], inList > 1 ? inList - 1 : inList, inList, inList > 1 ? inList - 1 : inList, inList, inList > 1 ? inList - 1 : inList, inList, ({\n  theme\n}) => `${theme.transitions.duration} ${theme.transitions.type}`, ({\n  theme\n}) => theme.colors.itemBackgroundHover, ({\n  theme\n}) => `${theme.breakpoints.tablet}px`, inList > 1 ? inList - 1 : inList, inList, inList ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["margin:0 auto;"]) : null) : null);\n_c2 = ImgContainer;\nconst ProductImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({\n  displayName: "product-img__ProductImg",\n  componentId: "sc-1wvkwid-1"\n})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:65%;width:100%;display:block;"]);\n_c3 = ProductImg;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, "ProductImage");\n$RefreshReg$(_c2, "ImgContainer");\n$RefreshReg$(_c3, "ProductImg");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWVyY2gvcHJvZHVjdC1pbWcvaW5kZXgudHN4PzY5YTgiXSwibmFtZXMiOlsiUHJvZHVjdEltYWdlIiwiY2xhc3NOYW1lIiwiaW1hZ2UiLCJpbkxpc3QiLCJzcXVhcmUiLCJhbHQiLCJJbWdDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsImNvbG9ycyIsIml0ZW1CYWNrZ3JvdW5kIiwiYnJlYWtwb2ludHMiLCJ0YWJsZXQiLCJjc3MiLCJ0cmFuc2l0aW9ucyIsImR1cmF0aW9uIiwidHlwZSIsIml0ZW1CYWNrZ3JvdW5kSG92ZXIiLCJQcm9kdWN0SW1nIiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsWUFBVCxDQUFzQjtBQUNuQ0MsV0FEbUM7QUFFbkNDLE9BRm1DO0FBR25DQyxRQUhtQztBQUluQ0MsUUFKbUM7QUFLbkNDO0FBTG1DLENBQXRCLEVBWVo7QUFDRCxTQUNFLE1BQUMsWUFBRDtBQUFjLGFBQVMsRUFBRUosU0FBekI7QUFBb0MsVUFBTSxFQUFFRSxNQUE1QztBQUFvRCxVQUFNLEVBQUVDLE1BQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQ7QUFBWSxPQUFHLEVBQUVGLEtBQWpCO0FBQXdCLE9BQUcsRUFBRUcsR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFLRDtLQWxCdUJMLFk7QUFvQnhCLE1BQU1NLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5TEFPSSxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsY0FQaEMsRUFTSyxDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFnQixHQUFFQSxLQUFLLENBQUNHLFdBQU4sQ0FBa0JDLE1BQU8sSUFUaEQsRUFjZCxDQUFDO0FBQUVUO0FBQUYsQ0FBRCxLQUNBQSxNQUFNLEdBQ0ZVLDZEQURFLDBHQUVTVixNQUZULEVBR1VBLE1BSFYsRUFLcUIsQ0FBQztBQUFFSztBQUFGLENBQUQsS0FDaEIsR0FBRUEsS0FBSyxDQUFDRyxXQUFOLENBQWtCQyxNQUFPLElBTmhDLElBV0YsSUExQlUsRUE0QmQsQ0FBQztBQUFFVjtBQUFGLENBQUQsS0FDQUEsTUFBTSxHQUNGVyw2REFERSxzVkFHb0JYLE1BQU0sR0FBRyxDQUFULEdBQWFBLE1BQU0sR0FBRyxDQUF0QixHQUEwQkEsTUFIOUMsRUFHNERBLE1BSDVELEVBTW9CQSxNQUFNLEdBQUcsQ0FBVCxHQUFhQSxNQUFNLEdBQUcsQ0FBdEIsR0FBMEJBLE1BTjlDLEVBTTREQSxNQU41RCxFQVNvQkEsTUFBTSxHQUFHLENBQVQsR0FBYUEsTUFBTSxHQUFHLENBQXRCLEdBQTBCQSxNQVQ5QyxFQVM0REEsTUFUNUQsRUFjSSxDQUFDO0FBQUVNO0FBQUYsQ0FBRCxLQUNDLEdBQUVBLEtBQUssQ0FBQ00sV0FBTixDQUFrQkMsUUFBUyxJQUFHUCxLQUFLLENBQUNNLFdBQU4sQ0FBa0JFLElBQUssRUFmNUQsRUFrQnNCLENBQUM7QUFBRVI7QUFBRixDQUFELEtBQ2xCQSxLQUFLLENBQUNDLE1BQU4sQ0FBYVEsbUJBbkJqQixFQTBCcUIsQ0FBQztBQUFFVDtBQUFGLENBQUQsS0FDaEIsR0FBRUEsS0FBSyxDQUFDRyxXQUFOLENBQWtCQyxNQUFPLElBM0JoQyxFQTZCcUJWLE1BQU0sR0FBRyxDQUFULEdBQWFBLE1BQU0sR0FBRyxDQUF0QixHQUEwQkEsTUE3Qi9DLEVBNkI2REEsTUE3QjdELEVBK0JJQSxNQUFNLEdBQ0pXLDZEQURJLHVCQUlKLElBbkNOLElBc0NGLElBbkVVLENBQWxCO01BQU1SLFk7QUFzRU4sTUFBTWEsVUFBVSxHQUFHWix5REFBTSxDQUFDYSxHQUFWO0FBQUE7QUFBQTtBQUFBLGlIQUFoQjtNQUFNRCxVIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvbWVyY2gvcHJvZHVjdC1pbWcvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RJbWFnZSh7XG4gIGNsYXNzTmFtZSxcbiAgaW1hZ2UsXG4gIGluTGlzdCxcbiAgc3F1YXJlLFxuICBhbHQsXG59OiB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgYWx0OiBzdHJpbmc7XG4gIGluTGlzdD86IG51bWJlcjtcbiAgc3F1YXJlPzogbnVtYmVyO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxJbWdDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGluTGlzdD17aW5MaXN0fSBzcXVhcmU9e3NxdWFyZX0+XG4gICAgICA8UHJvZHVjdEltZyBzcmM9e2ltYWdlfSBhbHQ9e2FsdH0gLz5cbiAgICA8L0ltZ0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgSW1nQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGluTGlzdD86IG51bWJlcjsgc3F1YXJlPzogbnVtYmVyIH0+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5pdGVtQmFja2dyb3VuZH07XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMudGFibGV0fXB4YH0pIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gIH1cblxuICAkeyh7IHNxdWFyZSB9KSA9PlxuICAgIHNxdWFyZVxuICAgICAgPyBjc3NgXG4gICAgICAgICAgd2lkdGg6ICR7c3F1YXJlfXB4O1xuICAgICAgICAgIGhlaWdodDogJHtzcXVhcmV9cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+XG4gICAgICAgICAgICAgIGAke3RoZW1lLmJyZWFrcG9pbnRzLnRhYmxldH1weGB9KSB7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGBcbiAgICAgIDogbnVsbH1cblxuICAkeyh7IGluTGlzdCB9KSA9PlxuICAgIGluTGlzdFxuICAgICAgPyBjc3NgXG4gICAgICAgICAgd2lkdGg6IGNhbGMoXG4gICAgICAgICAgICAoNTM1cHggLSAoNXB4ICogJHtpbkxpc3QgPiAxID8gaW5MaXN0IC0gMSA6IGluTGlzdH0pKSAvICR7aW5MaXN0fVxuICAgICAgICAgICk7XG4gICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKFxuICAgICAgICAgICAgKDUzNXB4IC0gKDVweCAqICR7aW5MaXN0ID4gMSA/IGluTGlzdCAtIDEgOiBpbkxpc3R9KSkgLyAke2luTGlzdH1cbiAgICAgICAgICApO1xuICAgICAgICAgIGhlaWdodDogY2FsYyhcbiAgICAgICAgICAgICg1MzVweCAtICg1cHggKiAke2luTGlzdCA+IDEgPyBpbkxpc3QgLSAxIDogaW5MaXN0fSkpIC8gJHtpbkxpc3R9XG4gICAgICAgICAgKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3JcbiAgICAgICAgICAgICR7KHsgdGhlbWUgfSkgPT5cbiAgICAgICAgICAgICAgYCR7dGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb259ICR7dGhlbWUudHJhbnNpdGlvbnMudHlwZX1gfTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PlxuICAgICAgICAgICAgICB0aGVtZS5jb2xvcnMuaXRlbUJhY2tncm91bmRIb3Zlcn07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PlxuICAgICAgICAgICAgICBgJHt0aGVtZS5icmVha3BvaW50cy50YWJsZXR9cHhgfSkge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoXG4gICAgICAgICAgICAgICgxMDAlIC0gKDVweCAqICR7aW5MaXN0ID4gMSA/IGluTGlzdCAtIDEgOiBpbkxpc3R9KSkgLyAke2luTGlzdH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAke2luTGlzdFxuICAgICAgICAgICAgICA/IGNzc2BcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIH1cbiAgICAgICAgYFxuICAgICAgOiBudWxsfTtcbmA7XG5cbmNvbnN0IFByb2R1Y3RJbWcgPSBzdHlsZWQuaW1nYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBtYXgtd2lkdGg6IDY1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/merch/product-img/index.tsx\n'
      );

      /***/
    },
});
