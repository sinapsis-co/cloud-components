webpackHotUpdate_N_E('pages/merch/cart', {
  /***/ './src/components/featured-badge/index.tsx': false,

  /***/ './src/components/flex/index.tsx': false,

  /***/ './src/components/icons/delete/index.tsx': false,

  /***/ './src/components/icons/featured/index.tsx': false,

  /***/ './src/components/icons/quantity/index.tsx': false,

  /***/ './src/components/merch/product-cart-item/index.tsx':
    /*!**********************************************************!*\
  !*** ./src/components/merch/product-cart-item/index.tsx ***!
  \**********************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductCartItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\nvar _jsxFileName = "/Users/herni/Documents/repositories/trac/platform/frontend/ssr-artist/src/components/merch/product-cart-item/index.tsx";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n// import useIsTablet from \'@artist/hooks/is-tablet\';\n// import ProductImage from \'../product-img\';\n// import ProductInfo from \'../product-info\';\n// import RemoveBtn from \'../product-remove-item\';\n// import QuantitySelector from \'../product-quantity-selector\';\n// import Flex from \'@components/flex\';\n// import ImageColorFilter from \'@components/image-color-filter\';\nfunction ProductCartItem({\n  className,\n  item\n}) {\n  // const isTablet = useIsTablet();\n  // const { product, quantity } = item;\n  // const findWhite = product.colors.find(\n  //   (item) => item.name == \'White\' || item.name == \'white\'\n  // );\n  return item ? __jsx(ProductContainer, {\n    className: className,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx("div", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, "aca funca")) : null;\n}\n_c = ProductCartItem;\nconst ProductContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "product-cart-item__ProductContainer",\n  componentId: "sc-1tvca32-0"\n})(["width:100%;display:flex;flex-direction:row;padding:16px 32px;background-color:", ";border-radius:5px;@media (max-width:", "){padding:16px;align-items:center;}.image-container{flex-shrink:0;@media (max-width:", "){height:100%;}}"], ({\n  theme\n}) => theme.colors.cartItemBackground, ({\n  theme\n}) => `${theme.breakpoints.laptopS}px`, ({\n  theme\n}) => `${theme.breakpoints.laptopS}px`); // const InfoWrapper = styled(Flex)<{ noControls?: boolean }>`\n//   margin-left: 24px;\n//   flex-direction: row;\n//   align-items: center;\n//   justify-content: space-between;\n//   flex-grow: 1;\n//   gap: 20px;\n//   width: 100%;\n//   @media (max-width: ${({ theme }) => `${theme.breakpoints.laptopS}px`}) {\n//     flex-direction: column;\n//     justify-content: center;\n//     gap: 10px;\n//     margin-left: 0;\n//   }\n//   ${({ noControls }) =>\n//     noControls\n//       ? css`\n//           justify-content: flex-start;\n//         `\n//       : null}\n// `;\n// const ActionsWrapper = styled(Flex)`\n//   gap: 20px;\n//   @media (max-width: ${({ theme }) => `${theme.breakpoints.laptopS}px`}) {\n//     gap: 0;\n//   }\n// `;\n// const QuantityNumber = styled.p`\n//   font-size: 16px;\n//   font-weight: 400;\n//   color: ${({ theme }) => theme.colors.secondary};\n//   width: 100%;\n//   width: fill-available;\n//   text-align: right;\n// `;\n// const Price = styled.h6`\n//   color: ${({ theme }) => theme.colors.primary};\n//   font-size: 16px;\n//   font-weight: 400;\n//   line-height: 24px;\n//   opacity: 0.7;\n//   margin: 0;\n// `;\n// const MobileContainer = styled.div`\n//   width: 100%;\n//   display: flex;\n//   flex-direction: row;\n//   @media (max-width: ${({ theme }) => `${theme.breakpoints.laptopS}px`}) {\n//     flex-direction: column;\n//     margin-left: 12px;\n//     gap: 12px;\n//   }\n// `;\n// const MobileRemoveBtn = styled(RemoveBtn)`\n//   @media (max-width: ${({ theme }) => `${theme.breakpoints.laptopS}px`}) {\n//     width: 32px;\n//     height: 32px;\n//   }\n// `;\n\n_c2 = ProductContainer;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, "ProductCartItem");\n$RefreshReg$(_c2, "ProductContainer");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWVyY2gvcHJvZHVjdC1jYXJ0LWl0ZW0vaW5kZXgudHN4PzhkOTciXSwibmFtZXMiOlsiUHJvZHVjdENhcnRJdGVtIiwiY2xhc3NOYW1lIiwiaXRlbSIsIlByb2R1Y3RDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsImNvbG9ycyIsImNhcnRJdGVtQmFja2dyb3VuZCIsImJyZWFrcG9pbnRzIiwibGFwdG9wUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsZUFBVCxDQUF5QjtBQUN0Q0MsV0FEc0M7QUFFdENDO0FBRnNDLENBQXpCLEVBY1o7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsU0FBT0EsSUFBSSxHQUNULE1BQUMsZ0JBQUQ7QUFBa0IsYUFBUyxFQUFFRCxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGLENBRFMsR0FtQlAsSUFuQko7QUFvQkQ7S0F6Q3VCRCxlO0FBMkN4QixNQUFNRyxnQkFBZ0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0T0FLQSxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsa0JBTDVCLEVBUUMsQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FBZ0IsR0FBRUEsS0FBSyxDQUFDRyxXQUFOLENBQWtCQyxPQUFRLElBUjdDLEVBZUcsQ0FBQztBQUFFSjtBQUFGLENBQUQsS0FBZ0IsR0FBRUEsS0FBSyxDQUFDRyxXQUFOLENBQWtCQyxPQUFRLElBZi9DLENBQXRCLEMsQ0FxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7TUF0Rk1QLGdCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvbWVyY2gvcHJvZHVjdC1jYXJ0LWl0ZW0vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IENhcnRJdGVtIH0gZnJvbSAnQGFydGlzdC90eXBlcy9jYXJ0Jztcbi8vIGltcG9ydCB1c2VJc1RhYmxldCBmcm9tICdAYXJ0aXN0L2hvb2tzL2lzLXRhYmxldCc7XG5cbi8vIGltcG9ydCBQcm9kdWN0SW1hZ2UgZnJvbSAnLi4vcHJvZHVjdC1pbWcnO1xuLy8gaW1wb3J0IFByb2R1Y3RJbmZvIGZyb20gJy4uL3Byb2R1Y3QtaW5mbyc7XG4vLyBpbXBvcnQgUmVtb3ZlQnRuIGZyb20gJy4uL3Byb2R1Y3QtcmVtb3ZlLWl0ZW0nO1xuLy8gaW1wb3J0IFF1YW50aXR5U2VsZWN0b3IgZnJvbSAnLi4vcHJvZHVjdC1xdWFudGl0eS1zZWxlY3Rvcic7XG5cbi8vIGltcG9ydCBGbGV4IGZyb20gJ0Bjb21wb25lbnRzL2ZsZXgnO1xuLy8gaW1wb3J0IEltYWdlQ29sb3JGaWx0ZXIgZnJvbSAnQGNvbXBvbmVudHMvaW1hZ2UtY29sb3ItZmlsdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdENhcnRJdGVtKHtcbiAgY2xhc3NOYW1lLFxuICBpdGVtLFxufTogLy8gbm9Db250cm9scyxcbi8vIG9uQ2hhbmdlUXVhbnRpdHksXG4vLyBvblJlbW92ZSxcbi8vIGNvbG9yLFxue1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGl0ZW06IENhcnRJdGVtO1xuICBub0NvbnRyb2xzPzogYm9vbGVhbjtcbiAgb25DaGFuZ2VRdWFudGl0eTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlOiAoKSA9PiB2b2lkO1xuICBjb2xvcj86IHN0cmluZztcbn0pIHtcbiAgLy8gY29uc3QgaXNUYWJsZXQgPSB1c2VJc1RhYmxldCgpO1xuICAvLyBjb25zdCB7IHByb2R1Y3QsIHF1YW50aXR5IH0gPSBpdGVtO1xuICAvLyBjb25zdCBmaW5kV2hpdGUgPSBwcm9kdWN0LmNvbG9ycy5maW5kKFxuICAvLyAgIChpdGVtKSA9PiBpdGVtLm5hbWUgPT0gJ1doaXRlJyB8fCBpdGVtLm5hbWUgPT0gJ3doaXRlJ1xuICAvLyApO1xuXG4gIHJldHVybiBpdGVtID8gKFxuICAgIDxQcm9kdWN0Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHsvKiA8UHJvZHVjdEltYWdlXG4gICAgICAgIGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiXG4gICAgICAgIGltYWdlPXtwcm9kdWN0LmltYWdlfVxuICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgIGluQ2FydFxuICAgICAgICBpc0pzeD17dHJ1ZX1cbiAgICAgICAgaGFzQW5pbWF0aW9uPXtmYWxzZX1cbiAgICAgICAganN4SW1hZ2U9e1xuICAgICAgICAgIDxJbWFnZUNvbG9yRmlsdGVyXG4gICAgICAgICAgICBmaWxsPXtjb2xvciB8fCAnd2hpdGUnfVxuICAgICAgICAgICAgaW1hZ2VTcmM9eyhmaW5kV2hpdGUgfHwgcHJvZHVjdCkuaW1hZ2UgfHwgJyd9XG4gICAgICAgICAgICBtYXNrU3JjPXtgaHR0cHM6Ly9tZWRpYS5kZXZlbG9wbWVudC50cmFjLmNvL21lcmNoLXByZXZpZXcvJHtwcm9kdWN0LmJsdWVwcmludElkfS1tYXNrLnBuZ2B9XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgLz4gKi99XG4gICAgICA8ZGl2PmFjYSBmdW5jYTwvZGl2PlxuICAgIDwvUHJvZHVjdENvbnRhaW5lcj5cbiAgKSA6IG51bGw7XG59XG5cbmNvbnN0IFByb2R1Y3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMTZweCAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5jYXJ0SXRlbUJhY2tncm91bmR9O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMubGFwdG9wU31weGB9KSB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMubGFwdG9wU31weGB9KSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG5gO1xuXG4vLyBjb25zdCBJbmZvV3JhcHBlciA9IHN0eWxlZChGbGV4KTx7IG5vQ29udHJvbHM/OiBib29sZWFuIH0+YFxuLy8gICBtYXJnaW4tbGVmdDogMjRweDtcbi8vICAgZmxleC1kaXJlY3Rpb246IHJvdztcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICBmbGV4LWdyb3c6IDE7XG4vLyAgIGdhcDogMjBweDtcbi8vICAgd2lkdGg6IDEwMCU7XG5cbi8vICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMubGFwdG9wU31weGB9KSB7XG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBnYXA6IDEwcHg7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IDA7XG4vLyAgIH1cblxuLy8gICAkeyh7IG5vQ29udHJvbHMgfSkgPT5cbi8vICAgICBub0NvbnRyb2xzXG4vLyAgICAgICA/IGNzc2Bcbi8vICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4vLyAgICAgICAgIGBcbi8vICAgICAgIDogbnVsbH1cbi8vIGA7XG5cbi8vIGNvbnN0IEFjdGlvbnNXcmFwcGVyID0gc3R5bGVkKEZsZXgpYFxuLy8gICBnYXA6IDIwcHg7XG4vLyAgIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLmJyZWFrcG9pbnRzLmxhcHRvcFN9cHhgfSkge1xuLy8gICAgIGdhcDogMDtcbi8vICAgfVxuLy8gYDtcblxuLy8gY29uc3QgUXVhbnRpdHlOdW1iZXIgPSBzdHlsZWQucGBcbi8vICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICBmb250LXdlaWdodDogNDAwO1xuLy8gICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIHdpZHRoOiBmaWxsLWF2YWlsYWJsZTtcbi8vICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4vLyBgO1xuXG4vLyBjb25zdCBQcmljZSA9IHN0eWxlZC5oNmBcbi8vICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuLy8gICBmb250LXNpemU6IDE2cHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuLy8gICBvcGFjaXR5OiAwLjc7XG4vLyAgIG1hcmdpbjogMDtcbi8vIGA7XG5cbi8vIGNvbnN0IE1vYmlsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuLy8gICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5icmVha3BvaW50cy5sYXB0b3BTfXB4YH0pIHtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuLy8gICAgIGdhcDogMTJweDtcbi8vICAgfVxuLy8gYDtcblxuLy8gY29uc3QgTW9iaWxlUmVtb3ZlQnRuID0gc3R5bGVkKFJlbW92ZUJ0bilgXG4vLyAgIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLmJyZWFrcG9pbnRzLmxhcHRvcFN9cHhgfSkge1xuLy8gICAgIHdpZHRoOiAzMnB4O1xuLy8gICAgIGhlaWdodDogMzJweDtcbi8vICAgfVxuLy8gYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/merch/product-cart-item/index.tsx\n'
      );

      /***/
    },

  /***/ './src/components/merch/product-info/index.tsx': false,

  /***/ './src/components/merch/product-quantity-selector/index.tsx': false,

  /***/ './src/components/merch/product-remove-item/index.tsx': false,

  /***/ './src/hooks/is-tablet.tsx': false,
});