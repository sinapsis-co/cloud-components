webpackHotUpdate_N_E('pages/merch/payment/billing', {
  /***/ './src/utils/get-products-from-cart.ts':
    /*!*********************************************!*\
  !*** ./src/utils/get-products-from-cart.ts ***!
  \*********************************************/
    /*! exports provided: getProductsCheckout */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductsCheckout\", function() { return getProductsCheckout; });\nconst getProductsCheckout = cart => {\n  const products = cart.reduce((memo, item) => {\n    const variant = item.product.variants.find(v => {\n      var _item$color;\n\n      return v.colorId === ((_item$color = item.color) === null || _item$color === void 0 ? void 0 : _item$color.id) && v.sizeId === item.size.id;\n    }); // tslint:disable-next-line:no-console\n\n    console.log(\"variant: \", variant); // eslint-disable-line no-console\n\n    if (!variant) {\n      return memo;\n    }\n\n    if (!(item.product.id in memo)) {\n      memo[item.product.id] = {\n        id: item.product.id,\n        variants: []\n      };\n    }\n\n    memo[item.product.id].variants.push({\n      id: variant.id,\n      quantity: item.quantity\n    }); // tslint:disable-next-line:no-console\n\n    console.log(\"memo: \", memo); // eslint-disable-line no-console\n\n    return memo;\n  }, {});\n  return Object.values(products);\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2dldC1wcm9kdWN0cy1mcm9tLWNhcnQudHM/ZWU3YyJdLCJuYW1lcyI6WyJnZXRQcm9kdWN0c0NoZWNrb3V0IiwiY2FydCIsInByb2R1Y3RzIiwicmVkdWNlIiwibWVtbyIsIml0ZW0iLCJ2YXJpYW50IiwicHJvZHVjdCIsInZhcmlhbnRzIiwiZmluZCIsInYiLCJjb2xvcklkIiwiY29sb3IiLCJpZCIsInNpemVJZCIsInNpemUiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInF1YW50aXR5IiwiT2JqZWN0IiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiQUFHQTtBQUFBO0FBQU8sTUFBTUEsbUJBQW1CLEdBQUlDLElBQUQsSUFBbUM7QUFDcEUsUUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLE1BQUwsQ0FDZixDQUFDQyxJQUFELEVBQXdDQyxJQUF4QyxLQUFpRDtBQUMvQyxVQUFNQyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsT0FBTCxDQUFhQyxRQUFiLENBQXNCQyxJQUF0QixDQUNiQyxDQUFEO0FBQUE7O0FBQUEsYUFBT0EsQ0FBQyxDQUFDQyxPQUFGLHFCQUFjTixJQUFJLENBQUNPLEtBQW5CLGdEQUFjLFlBQVlDLEVBQTFCLEtBQWdDSCxDQUFDLENBQUNJLE1BQUYsS0FBYVQsSUFBSSxDQUFDVSxJQUFMLENBQVVGLEVBQTlEO0FBQUEsS0FEYyxDQUFoQixDQUQrQyxDQUkvQzs7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QlgsT0FBekIsRUFMK0MsQ0FLWjs7QUFFbkMsUUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWixhQUFPRixJQUFQO0FBQ0Q7O0FBRUQsUUFBSSxFQUFFQyxJQUFJLENBQUNFLE9BQUwsQ0FBYU0sRUFBYixJQUFtQlQsSUFBckIsQ0FBSixFQUFnQztBQUM5QkEsVUFBSSxDQUFDQyxJQUFJLENBQUNFLE9BQUwsQ0FBYU0sRUFBZCxDQUFKLEdBQXdCO0FBQ3RCQSxVQUFFLEVBQUVSLElBQUksQ0FBQ0UsT0FBTCxDQUFhTSxFQURLO0FBRXRCTCxnQkFBUSxFQUFFO0FBRlksT0FBeEI7QUFJRDs7QUFFREosUUFBSSxDQUFDQyxJQUFJLENBQUNFLE9BQUwsQ0FBYU0sRUFBZCxDQUFKLENBQXNCTCxRQUF0QixDQUErQlUsSUFBL0IsQ0FBb0M7QUFDbENMLFFBQUUsRUFBRVAsT0FBTyxDQUFDTyxFQURzQjtBQUVsQ00sY0FBUSxFQUFFZCxJQUFJLENBQUNjO0FBRm1CLEtBQXBDLEVBbEIrQyxDQXNCL0M7O0FBQ0FILFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JiLElBQXRCLEVBdkIrQyxDQXVCbEI7O0FBRTdCLFdBQU9BLElBQVA7QUFDRCxHQTNCYyxFQTRCZixFQTVCZSxDQUFqQjtBQStCQSxTQUFPZ0IsTUFBTSxDQUFDQyxNQUFQLENBQWNuQixRQUFkLENBQVA7QUFDRCxDQWpDTSIsImZpbGUiOiIuL3NyYy91dGlscy9nZXQtcHJvZHVjdHMtZnJvbS1jYXJ0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0BhcnRpc3QvdHlwZXMvY2FydCc7XG5pbXBvcnQgeyBQcm9kdWN0Q2hlY2tvdXQgfSBmcm9tICdAY29tbW9uL3R5cGVzL21lcmNoL2NyZWF0ZS1jaGVja291dC1yZXF1ZXN0JztcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzQ2hlY2tvdXQgPSAoY2FydDogQ2FydCk6IFByb2R1Y3RDaGVja291dFtdID0+IHtcbiAgY29uc3QgcHJvZHVjdHMgPSBjYXJ0LnJlZHVjZShcbiAgICAobWVtbzogUmVjb3JkPHN0cmluZywgUHJvZHVjdENoZWNrb3V0PiwgaXRlbSkgPT4ge1xuICAgICAgY29uc3QgdmFyaWFudCA9IGl0ZW0ucHJvZHVjdC52YXJpYW50cy5maW5kKFxuICAgICAgICAodikgPT4gdi5jb2xvcklkID09PSBpdGVtLmNvbG9yPy5pZCAmJiB2LnNpemVJZCA9PT0gaXRlbS5zaXplLmlkXG4gICAgICApO1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUubG9nKFwidmFyaWFudDogXCIsIHZhcmlhbnQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgaWYgKCF2YXJpYW50KSB7XG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShpdGVtLnByb2R1Y3QuaWQgaW4gbWVtbykpIHtcbiAgICAgICAgbWVtb1tpdGVtLnByb2R1Y3QuaWRdID0ge1xuICAgICAgICAgIGlkOiBpdGVtLnByb2R1Y3QuaWQsXG4gICAgICAgICAgdmFyaWFudHM6IFtdLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBtZW1vW2l0ZW0ucHJvZHVjdC5pZF0udmFyaWFudHMucHVzaCh7XG4gICAgICAgIGlkOiB2YXJpYW50LmlkLFxuICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcbiAgICAgIH0pO1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUubG9nKFwibWVtbzogXCIsIG1lbW8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfSxcbiAgICB7fVxuICApO1xuXG4gIHJldHVybiBPYmplY3QudmFsdWVzKHByb2R1Y3RzKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/get-products-from-cart.ts\n"
      );

      /***/
    },
});
