webpackHotUpdate_N_E('pages/merch/cart', {
  /***/ './src/hooks/use-cart.ts':
    /*!*******************************!*\
  !*** ./src/hooks/use-cart.ts ***!
  \*******************************/
    /*! exports provided: useCart */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCart\", function() { return useCart; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nconst getStoredCart = key => {\n  if (typeof localStorage !== 'undefined') {\n    const previousCart = localStorage.getItem(key);\n\n    if (previousCart) {\n      return JSON.parse(previousCart);\n    }\n  }\n\n  return [];\n};\n\nconst storeCart = (key, cart) => {\n  if (typeof localStorage !== 'undefined') {\n    localStorage.setItem(key, JSON.stringify(cart));\n  }\n};\n\nconst isSameProduct = item => another => {\n  var _another$color, _item$color;\n\n  return another.product.id === item.product.id && another.size.id === item.size.id && ((_another$color = another.color) === null || _another$color === void 0 ? void 0 : _another$color.id) === ((_item$color = item.color) === null || _item$color === void 0 ? void 0 : _item$color.id);\n};\n\nconst useCart = cartId => {\n  _s();\n\n  const storageKey = `TRAC_CART.${cartId}`;\n  const {\n    0: cart,\n    1: setCart\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    // eslint-disable-next-line no-console\n    console.log(getStoredCart(storageKey));\n    setCart(getStoredCart(storageKey));\n  }, [storageKey]);\n\n  const saveCart = newCart => {\n    storeCart(storageKey, newCart);\n    setCart(newCart);\n    return newCart;\n  };\n\n  const emptyCart = () => {\n    storeCart(storageKey, []);\n    setCart([]);\n  };\n\n  const updateCart = (action, item, quantity = 0) => {\n    const exists = cart.find(isSameProduct(item));\n\n    if (exists) {\n      if (action === 'add') {\n        item.quantity += quantity;\n      }\n\n      if (action === 'remove') {\n        item.quantity -= quantity;\n      }\n    }\n\n    const newCart = cart.concat(!exists && action === 'add' ? [item] : []).map(c => {\n      if (isSameProduct(item)(c)) {\n        return _objectSpread({}, item);\n      }\n\n      return _objectSpread({}, c);\n    }).filter(c => c.quantity > 0);\n    return saveCart(newCart);\n  };\n\n  const total = cart.reduce((memo, c) => memo + c.product.price * c.quantity, 0);\n  return {\n    cart,\n    total,\n    updateCart,\n    saveCart,\n    emptyCart\n  };\n};\n\n_s(useCart, \"5+HPoxSo1E/C3go3F1eDhM/DDhE=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZS1jYXJ0LnRzP2E1OTgiXSwibmFtZXMiOlsiZ2V0U3RvcmVkQ2FydCIsImtleSIsImxvY2FsU3RvcmFnZSIsInByZXZpb3VzQ2FydCIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzdG9yZUNhcnQiLCJjYXJ0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImlzU2FtZVByb2R1Y3QiLCJpdGVtIiwiYW5vdGhlciIsInByb2R1Y3QiLCJpZCIsInNpemUiLCJjb2xvciIsInVzZUNhcnQiLCJjYXJ0SWQiLCJzdG9yYWdlS2V5Iiwic2V0Q2FydCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInNhdmVDYXJ0IiwibmV3Q2FydCIsImVtcHR5Q2FydCIsInVwZGF0ZUNhcnQiLCJhY3Rpb24iLCJxdWFudGl0eSIsImV4aXN0cyIsImZpbmQiLCJjb25jYXQiLCJtYXAiLCJjIiwiZmlsdGVyIiwidG90YWwiLCJyZWR1Y2UiLCJtZW1vIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxNQUFNQSxhQUFhLEdBQUlDLEdBQUQsSUFBdUI7QUFDM0MsTUFBSSxPQUFPQyxZQUFQLEtBQXdCLFdBQTVCLEVBQXlDO0FBQ3ZDLFVBQU1DLFlBQVksR0FBR0QsWUFBWSxDQUFDRSxPQUFiLENBQXFCSCxHQUFyQixDQUFyQjs7QUFDQSxRQUFJRSxZQUFKLEVBQWtCO0FBQ2hCLGFBQU9FLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFYLENBQVA7QUFDRDtBQUNGOztBQUNELFNBQU8sRUFBUDtBQUNELENBUkQ7O0FBVUEsTUFBTUksU0FBUyxHQUFHLENBQUNOLEdBQUQsRUFBY08sSUFBZCxLQUFtQztBQUNuRCxNQUFJLE9BQU9OLFlBQVAsS0FBd0IsV0FBNUIsRUFBeUM7QUFDdkNBLGdCQUFZLENBQUNPLE9BQWIsQ0FBcUJSLEdBQXJCLEVBQTBCSSxJQUFJLENBQUNLLFNBQUws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bGUiOiIuL3NyYy9ob29rcy91c2UtY2FydC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJ0LCBDYXJ0SXRlbSB9IGZyb20gJy4uL3R5cGVzL2NhcnQnO1xuXG5jb25zdCBnZXRTdG9yZWRDYXJ0ID0gKGtleTogc3RyaW5nKTogQ2FydCA9PiB7XG4gIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IHByZXZpb3VzQ2FydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgaWYgKHByZXZpb3VzQ2FydCkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UocHJldmlvdXNDYXJ0KSBhcyBDYXJ0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gW107XG59O1xuXG5jb25zdCBzdG9yZUNhcnQgPSAoa2V5OiBzdHJpbmcsIGNhcnQ6IENhcnQpOiB2b2lkID0+IHtcbiAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XG4gIH1cbn07XG5cbmNvbnN0IGlzU2FtZVByb2R1Y3QgPSAoaXRlbTogQ2FydEl0ZW0pID0+IChhbm90aGVyOiBDYXJ0SXRlbSkgPT5cbiAgYW5vdGhlci5wcm9kdWN0LmlkID09PSBpdGVtLnByb2R1Y3QuaWQgJiZcbiAgYW5vdGhlci5zaXplLmlkID09PSBpdGVtLnNpemUuaWQgJiZcbiAgYW5vdGhlci5jb2xvcj8uaWQgPT09IGl0ZW0uY29sb3I/LmlkO1xuXG5leHBvcnQgY29uc3QgdXNlQ2FydCA9IChjYXJ0SWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBzdG9yYWdlS2V5ID0gYFRSQUNfQ0FSVC4ke2NhcnRJZH1gO1xuXG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlPENhcnQ+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coZ2V0U3RvcmVkQ2FydChzdG9yYWdlS2V5KSk7XG4gICAgc2V0Q2FydChnZXRTdG9yZWRDYXJ0KHN0b3JhZ2VLZXkpKTtcbiAgfSwgW3N0b3JhZ2VLZXldKTtcblxuICBjb25zdCBzYXZlQ2FydCA9IChuZXdDYXJ0OiBDYXJ0KSA9PiB7XG4gICAgc3RvcmVDYXJ0KHN0b3JhZ2VLZXksIG5ld0NhcnQpO1xuICAgIHNldENhcnQobmV3Q2FydCk7XG4gICAgcmV0dXJuIG5ld0NhcnQ7XG4gIH07XG5cbiAgY29uc3QgZW1wdHlDYXJ0ID0gKCkgPT4ge1xuICAgIHN0b3JlQ2FydChzdG9yYWdlS2V5LCBbXSk7XG4gICAgc2V0Q2FydChbXSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQ2FydCA9IChcbiAgICBhY3Rpb246ICdhZGQnIHwgJ3JlbW92ZScsXG4gICAgaXRlbTogQ2FydEl0ZW0sXG4gICAgcXVhbnRpdHkgPSAwXG4gICk6IENhcnQgPT4ge1xuICAgIGNvbnN0IGV4aXN0cyA9IGNhcnQuZmluZChpc1NhbWVQcm9kdWN0KGl0ZW0pKTtcblxuICAgIGlmIChleGlzdHMpIHtcbiAgICAgIGlmIChhY3Rpb24gPT09ICdhZGQnKSB7XG4gICAgICAgIGl0ZW0ucXVhbnRpdHkgKz0gcXVhbnRpdHk7XG4gICAgICB9XG4gICAgICBpZiAoYWN0aW9uID09PSAncmVtb3ZlJykge1xuICAgICAgICBpdGVtLnF1YW50aXR5IC09IHF1YW50aXR5O1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0NhcnQgPSBjYXJ0XG4gICAgICAuY29uY2F0KCFleGlzdHMgJiYgYWN0aW9uID09PSAnYWRkJyA/IFtpdGVtXSA6IFtdKVxuICAgICAgLm1hcCgoYykgPT4ge1xuICAgICAgICBpZiAoaXNTYW1lUHJvZHVjdChpdGVtKShjKSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5jLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGMpID0+IGMucXVhbnRpdHkgPiAwKTtcbiAgICByZXR1cm4gc2F2ZUNhcnQobmV3Q2FydCk7XG4gIH07XG5cbiAgY29uc3QgdG90YWwgPSBjYXJ0LnJlZHVjZShcbiAgICAobWVtbywgYykgPT4gbWVtbyArIGMucHJvZHVjdC5wcmljZSAqIGMucXVhbnRpdHksXG4gICAgMFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgY2FydCxcbiAgICB0b3RhbCxcbiAgICB1cGRhdGVDYXJ0LFxuICAgIHNhdmVDYXJ0LFxuICAgIGVtcHR5Q2FydCxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/use-cart.ts\n"
      );

      /***/
    },
});
