webpackHotUpdate_N_E('pages/merch/cart', {
  /***/ './src/hooks/use-cart.ts':
    /*!*******************************!*\
  !*** ./src/hooks/use-cart.ts ***!
  \*******************************/
    /*! exports provided: useCart */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCart\", function() { return useCart; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nconst getStoredCart = _key => {\n  // if (typeof localStorage !== 'undefined') {\n  //   const previousCart = localStorage.getItem(key);\n  //   if (previousCart) {\n  //     return JSON.parse(previousCart) as Cart;\n  //   }\n  // }\n  return [];\n};\n\nconst storeCart = (key, cart) => {\n  if (typeof localStorage !== 'undefined') {\n    localStorage.setItem(key, JSON.stringify(cart));\n  }\n};\n\nconst isSameProduct = item => another => {\n  var _another$color, _item$color;\n\n  return another.product.id === item.product.id && another.size.id === item.size.id && ((_another$color = another.color) === null || _another$color === void 0 ? void 0 : _another$color.id) === ((_item$color = item.color) === null || _item$color === void 0 ? void 0 : _item$color.id);\n};\n\nconst useCart = cartId => {\n  _s();\n\n  const storageKey = `TRAC_CART.${cartId}`;\n  const {\n    0: cart,\n    1: setCart\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(getStoredCart(storageKey));\n\n  const saveCart = newCart => {\n    storeCart(storageKey, newCart);\n    setCart(newCart);\n    return newCart;\n  };\n\n  const emptyCart = () => {\n    storeCart(storageKey, []);\n    setCart([]);\n  };\n\n  const updateCart = (action, item, quantity = 0) => {\n    const exists = cart.find(isSameProduct(item));\n\n    if (exists) {\n      if (action === 'add') {\n        item.quantity += quantity;\n      }\n\n      if (action === 'remove') {\n        item.quantity -= quantity;\n      }\n    }\n\n    const newCart = cart.concat(!exists && action === 'add' ? [item] : []).map(c => {\n      if (isSameProduct(item)(c)) {\n        return _objectSpread({}, item);\n      }\n\n      return _objectSpread({}, c);\n    }).filter(c => c.quantity > 0);\n    return saveCart(newCart);\n  };\n\n  const total = cart.reduce((memo, c) => memo + c.product.price * c.quantity, 0);\n  return {\n    cart,\n    total,\n    updateCart,\n    saveCart,\n    emptyCart\n  };\n};\n\n_s(useCart, \"S+g80bLTrLYkP0g7pu6SQ7sVDnc=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZS1jYXJ0LnRzP2E1OTgiXSwibmFtZXMiOlsiZ2V0U3RvcmVkQ2FydCIsIl9rZXkiLCJzdG9yZUNhcnQiLCJrZXkiLCJjYXJ0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc1NhbWVQcm9kdWN0IiwiaXRlbSIsImFub3RoZXIiLCJwcm9kdWN0IiwiaWQiLCJzaXplIiwiY29sb3IiLCJ1c2VDYXJ0IiwiY2FydElkIiwic3RvcmFnZUtleSIsInNldENhcnQiLCJ1c2VTdGF0ZSIsInNhdmVDYXJ0IiwibmV3Q2FydCIsImVtcHR5Q2FydCIsInVwZGF0ZUNhcnQiLCJhY3Rpb24iLCJxdWFudGl0eSIsImV4aXN0cyIsImZpbmQiLCJjb25jYXQiLCJtYXAiLCJjIiwiZmlsdGVyIiwidG90YWwiLCJyZWR1Y2UiLCJtZW1vIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxNQUFNQSxhQUFhLEdBQUlDLElBQUQsSUFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBTyxFQUFQO0FBQ0QsQ0FSRDs7QUFVQSxNQUFNQyxTQUFTLEdBQUcsQ0FBQ0MsR0FBRCxFQUFjQyxJQUFkLEtBQW1DO0FBQ25ELE1BQUksT0FBT0MsWUFBUCxLQUF3QixXQUE1QixFQUF5QztBQUN2Q0EsZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQkgsR0FBckIsRUFBMEJJLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixJQUFmLENBQTFCO0FBQ0Q7QUFDRixDQUpEOztBQU1BLE1BQU1LLGFBQWEsR0FBSUMsSUFBRCxJQUFxQkMsT0FBRDtBQUFBOztBQUFBLFNBQ3hDQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLEVBQWhCLEtBQXVCSCxJQUFJLENBQUNFLE9BQUwsQ0FBYUMsRUFBcEMsSUFDQUYsT0FBTyxDQUFDRyxJQUFSLENBQWFELEVBQWIsS0FBb0JILElBQUksQ0FBQ0ksSUFBTCxDQUFVRCxFQUQ5QixJQUVBLG1CQUFBRixPQUFPLENBQUNJLEtBQVIsa0VBQWVGLEVBQWYsc0JBQXNCSCxJQUFJLENBQUNLLEtBQTNCLGdEQUFzQixZQUFZRixFQUFsQyxDQUh3QztBQUFBLENBQTFDOztBQUtPLE1BQU1HLE9BQU8sR0FBSUMsTUFBRCxJQUFvQjtBQUFBOztBQUN6QyxRQUFNQyxVQUFVLEdBQUksYUFBWUQsTUFBTyxFQUF2QztBQUVBLFFBQU07QUFBQSxPQUFDYixJQUFEO0FBQUEsT0FBT2U7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBT3BCLGFBQWEsQ0FBQ2tCLFVBQUQsQ0FBcEIsQ0FBaEM7O0FBRUEsUUFBTUcsUUFBUSxHQUFJQyxPQUFELElBQW1CO0FBQ2xDcEIsYUFBUyxDQUFDZ0IsVUFBRCxFQUFhSSxPQUFiLENBQVQ7QUFDQUgsV0FBTyxDQUFDRyxPQUFELENBQVA7QUFDQSxXQUFPQSxPQUFQO0FBQ0QsR0FKRDs7QUFNQSxRQUFNQyxTQUFTLEdBQUcsTUFBTTtBQUN0QnJCLGFBQVMsQ0FBQ2dCLFVBQUQsRUFBYSxFQUFiLENBQVQ7QUFDQUMsV0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNELEdBSEQ7O0FBS0EsUUFBTUssVUFBVSxHQUFHLENBQ2pCQyxNQURpQixFQUVqQmYsSUFGaUIsRUFHakJnQixRQUFRLEdBQUcsQ0FITSxLQUlSO0FBQ1QsVUFBTUMsTUFBTSxHQUFHdkIsSUFBSSxDQUFDd0IsSUFBTCxDQUFVbkIsYUFBYSxDQUFDQyxJQUFELENBQXZCLENBQWY7O0FBRUEsUUFBSWlCLE1BQUosRUFBWTtBQUNWLFVBQUlGLE1BQU0sS0FBSyxLQUFmLEVBQXNCO0FBQ3BCZixZQUFJLENBQUNnQixRQUFMLElBQWlCQSxRQUFqQjtBQUNEOztBQUNELFVBQUlELE1BQU0sS0FBSyxRQUFmLEVBQXlCO0FBQ3ZCZixZQUFJLENBQUNnQixRQUFMLElBQWlCQSxRQUFqQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBTUosT0FBTyxHQUFHbEIsSUFBSSxDQUNqQnlCLE1BRGEsQ0FDTixDQUFDRixNQUFELElBQVdGLE1BQU0sS0FBSyxLQUF0QixHQUE4QixDQUFDZixJQUFELENBQTlCLEdBQXVDLEVBRGpDLEVBRWJvQixHQUZhLENBRVJDLENBQUQsSUFBTztBQUNWLFVBQUl0QixhQUFhLENBQUNDLElBQUQsQ0FBYixDQUFvQnFCLENBQXBCLENBQUosRUFBNEI7QUFDMUIsaUNBQ0tyQixJQURMO0FBR0Q7O0FBQ0QsK0JBQ0txQixDQURMO0FBR0QsS0FYYSxFQVliQyxNQVphLENBWUxELENBQUQsSUFBT0EsQ0FBQyxDQUFDTCxRQUFGLEdBQWEsQ0FaZCxDQUFoQjtBQWFBLFdBQU9MLFFBQVEsQ0FBQ0MsT0FBRCxDQUFmO0FBQ0QsR0E5QkQ7O0FBZ0NBLFFBQU1XLEtBQUssR0FBRzdCLElBQUksQ0FBQzhCLE1BQUwsQ0FDWixDQUFDQyxJQUFELEVBQU9KLENBQVAsS0FBYUksSUFBSSxHQUFHSixDQUFDLENBQUNuQixPQUFGLENBQVV3QixLQUFWLEdBQWtCTCxDQUFDLENBQUNMLFFBRDVCLEVBRVosQ0FGWSxDQUFkO0FBS0EsU0FBTztBQUNMdEIsUUFESztBQUVMNkIsU0FGSztBQUdMVCxjQUhLO0FBSUxILFlBSks7QUFLTEU7QUFMSyxHQUFQO0FBT0QsQ0E1RE07O0dBQU1QLE8iLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlLWNhcnQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcnQsIENhcnRJdGVtIH0gZnJvbSAnLi4vdHlwZXMvY2FydCc7XG5cbmNvbnN0IGdldFN0b3JlZENhcnQgPSAoX2tleTogc3RyaW5nKTogQ2FydCA9PiB7XG4gIC8vIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAvLyAgIGNvbnN0IHByZXZpb3VzQ2FydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIC8vICAgaWYgKHByZXZpb3VzQ2FydCkge1xuICAvLyAgICAgcmV0dXJuIEpTT04ucGFyc2UocHJldmlvdXNDYXJ0KSBhcyBDYXJ0O1xuICAvLyAgIH1cbiAgLy8gfVxuICByZXR1cm4gW107XG59O1xuXG5jb25zdCBzdG9yZUNhcnQgPSAoa2V5OiBzdHJpbmcsIGNhcnQ6IENhcnQpOiB2b2lkID0+IHtcbiAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XG4gIH1cbn07XG5cbmNvbnN0IGlzU2FtZVByb2R1Y3QgPSAoaXRlbTogQ2FydEl0ZW0pID0+IChhbm90aGVyOiBDYXJ0SXRlbSkgPT5cbiAgYW5vdGhlci5wcm9kdWN0LmlkID09PSBpdGVtLnByb2R1Y3QuaWQgJiZcbiAgYW5vdGhlci5zaXplLmlkID09PSBpdGVtLnNpemUuaWQgJiZcbiAgYW5vdGhlci5jb2xvcj8uaWQgPT09IGl0ZW0uY29sb3I/LmlkO1xuXG5leHBvcnQgY29uc3QgdXNlQ2FydCA9IChjYXJ0SWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBzdG9yYWdlS2V5ID0gYFRSQUNfQ0FSVC4ke2NhcnRJZH1gO1xuXG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlPENhcnQ+KGdldFN0b3JlZENhcnQoc3RvcmFnZUtleSkpO1xuXG4gIGNvbnN0IHNhdmVDYXJ0ID0gKG5ld0NhcnQ6IENhcnQpID0+IHtcbiAgICBzdG9yZUNhcnQoc3RvcmFnZUtleSwgbmV3Q2FydCk7XG4gICAgc2V0Q2FydChuZXdDYXJ0KTtcbiAgICByZXR1cm4gbmV3Q2FydDtcbiAgfTtcblxuICBjb25zdCBlbXB0eUNhcnQgPSAoKSA9PiB7XG4gICAgc3RvcmVDYXJ0KHN0b3JhZ2VLZXksIFtdKTtcbiAgICBzZXRDYXJ0KFtdKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVDYXJ0ID0gKFxuICAgIGFjdGlvbjogJ2FkZCcgfCAncmVtb3ZlJyxcbiAgICBpdGVtOiBDYXJ0SXRlbSxcbiAgICBxdWFudGl0eSA9IDBcbiAgKTogQ2FydCA9PiB7XG4gICAgY29uc3QgZXhpc3RzID0gY2FydC5maW5kKGlzU2FtZVByb2R1Y3QoaXRlbSkpO1xuXG4gICAgaWYgKGV4aXN0cykge1xuICAgICAgaWYgKGFjdGlvbiA9PT0gJ2FkZCcpIHtcbiAgICAgICAgaXRlbS5xdWFudGl0eSArPSBxdWFudGl0eTtcbiAgICAgIH1cbiAgICAgIGlmIChhY3Rpb24gPT09ICdyZW1vdmUnKSB7XG4gICAgICAgIGl0ZW0ucXVhbnRpdHkgLT0gcXVhbnRpdHk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbmV3Q2FydCA9IGNhcnRcbiAgICAgIC5jb25jYXQoIWV4aXN0cyAmJiBhY3Rpb24gPT09ICdhZGQnID8gW2l0ZW1dIDogW10pXG4gICAgICAubWFwKChjKSA9PiB7XG4gICAgICAgIGlmIChpc1NhbWVQcm9kdWN0KGl0ZW0pKGMpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmMsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoYykgPT4gYy5xdWFudGl0eSA+IDApO1xuICAgIHJldHVybiBzYXZlQ2FydChuZXdDYXJ0KTtcbiAgfTtcblxuICBjb25zdCB0b3RhbCA9IGNhcnQucmVkdWNlKFxuICAgIChtZW1vLCBjKSA9PiBtZW1vICsgYy5wcm9kdWN0LnByaWNlICogYy5xdWFudGl0eSxcbiAgICAwXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBjYXJ0LFxuICAgIHRvdGFsLFxuICAgIHVwZGF0ZUNhcnQsXG4gICAgc2F2ZUNhcnQsXG4gICAgZW1wdHlDYXJ0LFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/use-cart.ts\n"
      );

      /***/
    },
});
