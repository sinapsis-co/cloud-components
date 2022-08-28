webpackHotUpdate_N_E('pages/merch', {
  /***/ './src/components/merch/product-item/index.tsx':
    /*!*****************************************************!*\
  !*** ./src/components/merch/product-item/index.tsx ***!
  \*****************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _product_img__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-img */ "./src/components/merch/product-img/index.tsx");\n/* harmony import */ var _product_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-info */ "./src/components/merch/product-info/index.tsx");\n/* harmony import */ var _components_image_color_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/image-color-filter */ "./src/components/image-color-filter/index.tsx");\nvar _jsxFileName = "/Users/herni/Documents/repositories/trac/platform/frontend/ssr-artist/src/components/merch/product-item/index.tsx",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction ProductItem({\n  className,\n  product\n}) {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();\n\n  const handleClick = () => {\n    if (window.analytics) {\n      window.analytics.track(\'Merch Page Clicked\', {\n        product_id: product.id\n      });\n    }\n\n    router.push(`/merch/detail/${product.id}`);\n  };\n\n  return __jsx(ProductContainer, {\n    className: className,\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(_product_img__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    className: "image-container",\n    image: product.image,\n    alt: product.title,\n    isJsx: true,\n    jsxImage: __jsx(_components_image_color_filter__WEBPACK_IMPORTED_MODULE_5__["default"], {\n      fill: \'\',\n      haveHover: true,\n      imageSrc: product.image,\n      maskSrc: `${"https://media.development.trac.co"}/merch-preview/${product.blueprintId}-mask.png`,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), __jsx(_product_info__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: "product-info",\n    product: product,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(ProductItem, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];\n});\n\n_c = ProductItem;\nconst ProductContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "product-item__ProductContainer",\n  componentId: "sc-1rx8y8s-0"\n})(["cursor:pointer;width:100%;display:flex;flex-direction:column;gap:24px;@media (max-width:", "){width:auto;}@media (max-width:", "){max-width:none;}&:hover{.image-container{background-color:", ";}}"], ({\n  theme\n}) => `${theme.breakpoints.laptop}px`, ({\n  theme\n}) => `${theme.breakpoints.tablet}px`, ({\n  theme\n}) => theme.colors.itemBackgroundHover);\n_c2 = ProductContainer;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, "ProductItem");\n$RefreshReg$(_c2, "ProductContainer");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWVyY2gvcHJvZHVjdC1pdGVtL2luZGV4LnRzeD9jNTBjIl0sIm5hbWVzIjpbIlByb2R1Y3RJdGVtIiwiY2xhc3NOYW1lIiwicHJvZHVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsaWNrIiwid2luZG93IiwiYW5hbHl0aWNzIiwidHJhY2siLCJwcm9kdWN0X2lkIiwiaWQiLCJwdXNoIiwiaW1hZ2UiLCJ0aXRsZSIsInByb2Nlc3MiLCJibHVlcHJpbnRJZCIsIlByb2R1Y3RDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwibGFwdG9wIiwidGFibGV0IiwiY29sb3JzIiwiaXRlbUJhY2tncm91bmRIb3ZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFdBQVQsQ0FBcUI7QUFDbENDLFdBRGtDO0FBRWxDQztBQUZrQyxDQUFyQixFQU1aO0FBQUE7O0FBQ0QsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxRQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUN4QixRQUFJQyxNQUFNLENBQUNDLFNBQVgsRUFBc0I7QUFDcEJELFlBQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsS0FBakIsQ0FBdUIsb0JBQXZCLEVBQTZDO0FBQzNDQyxrQkFBVSxFQUFFUCxPQUFPLENBQUNRO0FBRHVCLE9BQTdDO0FBR0Q7O0FBRURQLFVBQU0sQ0FBQ1EsSUFBUCxDQUFhLGlCQUFnQlQsT0FBTyxDQUFDUSxFQUFHLEVBQXhDO0FBQ0QsR0FSRDs7QUFVQSxTQUNFLE1BQUMsZ0JBQUQ7QUFBa0IsYUFBUyxFQUFFVCxTQUE3QjtBQUF3QyxXQUFPLEVBQUVJLFdBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQ0UsYUFBUyxFQUFDLGlCQURaO0FBRUUsU0FBSyxFQUFFSCxPQUFPLENBQUNVLEtBRmpCO0FBR0UsT0FBRyxFQUFFVixPQUFPLENBQUNXLEtBSGY7QUFJRSxTQUFLLEVBQUUsSUFKVDtBQUtFLFlBQVEsRUFDTixNQUFDLHNFQUFEO0FBQ0UsVUFBSSxFQUFFLEVBRFI7QUFFRSxlQUFTLEVBQUUsSUFGYjtBQUdFLGNBQVEsRUFBRVgsT0FBTyxDQUFDVSxLQUhwQjtBQUlFLGFBQU8sRUFBRyxHQUFFRSxtQ0FBMkMsa0JBQWlCWixPQUFPLENBQUNhLFdBQVksV0FKOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQWVFLE1BQUMscURBQUQ7QUFBYSxhQUFTLEVBQUMsY0FBdkI7QUFBc0MsV0FBTyxFQUFFYixPQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsQ0FERjtBQW1CRDs7R0F0Q3VCRixXO1VBT1BJLHFEOzs7S0FQT0osVztBQXdDeEIsTUFBTWdCLGdCQUFnQixHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDRNQVFDLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCLEdBQUVBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkMsTUFBTyxJQVI1QyxFQVlDLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWdCLEdBQUVBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkUsTUFBTyxJQVo1QyxFQWtCSSxDQUFDO0FBQUVIO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsbUJBbEJoQyxDQUF0QjtNQUFNUixnQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL21lcmNoL3Byb2R1Y3QtaXRlbS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgeyBNZXJjaFByb2R1Y3RGcm9udCB9IGZyb20gJ0BzZXJ2aWNlcy9tZXJjaC90eXBlcy9hcGkvbWVyY2gtcHJvZHVjdC1mcm9udCc7XG5cbmltcG9ydCBQcm9kdWN0SW1hZ2UgZnJvbSAnLi4vcHJvZHVjdC1pbWcnO1xuaW1wb3J0IFByb2R1Y3RJbmZvIGZyb20gJy4uL3Byb2R1Y3QtaW5mbyc7XG5cbmltcG9ydCBJbWFnZUNvbG9yRmlsdGVyIGZyb20gJ0Bjb21wb25lbnRzL2ltYWdlLWNvbG9yLWZpbHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RJdGVtKHtcbiAgY2xhc3NOYW1lLFxuICBwcm9kdWN0LFxufToge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHByb2R1Y3Q6IE1lcmNoUHJvZHVjdEZyb250O1xufSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmFuYWx5dGljcykge1xuICAgICAgd2luZG93LmFuYWx5dGljcy50cmFjaygnTWVyY2ggUGFnZSBDbGlja2VkJywge1xuICAgICAgICBwcm9kdWN0X2lkOiBwcm9kdWN0LmlkLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcm91dGVyLnB1c2goYC9tZXJjaC9kZXRhaWwvJHtwcm9kdWN0LmlkfWApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgIDxQcm9kdWN0SW1hZ2VcbiAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCJcbiAgICAgICAgaW1hZ2U9e3Byb2R1Y3QuaW1hZ2V9XG4gICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgaXNKc3g9e3RydWV9XG4gICAgICAgIGpzeEltYWdlPXtcbiAgICAgICAgICA8SW1hZ2VDb2xvckZpbHRlclxuICAgICAgICAgICAgZmlsbD17Jyd9XG4gICAgICAgICAgICBoYXZlSG92ZXI9e3RydWV9XG4gICAgICAgICAgICBpbWFnZVNyYz17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICAgIG1hc2tTcmM9e2Ake3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9NRURJQV9CQVNFX1VSTH0vbWVyY2gtcHJldmlldy8ke3Byb2R1Y3QuYmx1ZXByaW50SWR9LW1hc2sucG5nYH1cbiAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICAvPlxuICAgICAgPFByb2R1Y3RJbmZvIGNsYXNzTmFtZT1cInByb2R1Y3QtaW5mb1wiIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgPC9Qcm9kdWN0Q29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBQcm9kdWN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI0cHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMubGFwdG9wfXB4YH0pIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLmJyZWFrcG9pbnRzLnRhYmxldH1weGB9KSB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5pdGVtQmFja2dyb3VuZEhvdmVyfTtcbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/merch/product-item/index.tsx\n'
      );

      /***/
    },
});
