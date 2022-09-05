webpackHotUpdate_N_E('pages/index', {
  /***/ './src/hooks/use-page-data.ts':
    /*!************************************!*\
  !*** ./src/hooks/use-page-data.ts ***!
  \************************************/
    /*! exports provided: usePageData */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePageData\", function() { return usePageData; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n/**\n * usePageData: This hook supports injecting preview data from a container window\n */\n\n\nfunction inIframe() {\n  try {\n    return window.self !== window.top;\n  } catch (e) {\n    return true;\n  }\n}\n\nconst usePageData = initial => {\n  _s();\n\n  const {\n    0: pageData,\n    1: setPageData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initial);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const processState = data => {\n      try {\n        return JSON.parse(decodeURIComponent(escape(window.atob(data))));\n      } catch {\n        return {};\n      }\n    };\n\n    const receiveMessage = event => {\n      var _process$env$NEXT_PUB, _event$data, _event$data2;\n\n      const allowedOrigins = ((_process$env$NEXT_PUB = \"http://localhost:3000,https://app.development.trac.co\") === null || _process$env$NEXT_PUB === void 0 ? void 0 : _process$env$NEXT_PUB.split(',')) || [];\n\n      if (!(allowedOrigins.includes(event.origin) && ((_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.origin) === 'trac-editor' && (_event$data2 = event.data) !== null && _event$data2 !== void 0 && _event$data2.payload)) {\n        return;\n      }\n\n      setPageData(processState(event.data.payload));\n    };\n\n    window.addEventListener('message', receiveMessage, false);\n\n    if (inIframe()) {\n      window.parent.postMessage({\n        origin: 'trac-artist-site',\n        ready: true\n      }, '*');\n    }\n\n    return () => {\n      window.removeEventListener('message', receiveMessage);\n    };\n  }, []);\n  return {\n    pageData\n  };\n};\n\n_s(usePageData, \"UphAlo7MnYeILHnOwLM6KowDYaY=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZS1wYWdlLWRhdGEudHM/OGVkNCJdLCJuYW1lcyI6WyJpbklmcmFtZSIsIndpbmRvdyIsInNlbGYiLCJ0b3AiLCJlIiwidXNlUGFnZURhdGEiLCJpbml0aWFsIiwicGFnZURhdGEiLCJzZXRQYWdlRGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicHJvY2Vzc1N0YXRlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImVzY2FwZSIsImF0b2IiLCJyZWNlaXZlTWVzc2FnZSIsImV2ZW50IiwiYWxsb3dlZE9yaWdpbnMiLCJwcm9jZXNzIiwic3BsaXQiLCJpbmNsdWRlcyIsIm9yaWdpbiIsInBheWxvYWQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFyZW50IiwicG9zdE1lc3NhZ2UiLCJyZWFkeSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLFNBQVNBLFFBQVQsR0FBcUI7QUFDbkIsTUFBSTtBQUNGLFdBQU9DLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQkQsTUFBTSxDQUFDRSxHQUE5QjtBQUNELEdBRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7QUFDVixXQUFPLElBQVA7QUFDRDtBQUNGOztBQUVNLE1BQU1DLFdBQVcsR0FBa0JDLE9BQWYsSUFBK0I7QUFBQTs7QUFDeEQsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFnQkgsT0FBaEIsQ0FBeEM7QUFFQUkseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsWUFBWSxHQUFJQyxJQUFELElBQXFCO0FBQ3hDLFVBQUk7QUFDRixlQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0Msa0JBQWtCLENBQUNDLE1BQU0sQ0FBQ2YsTUFBTSxDQUFDZ0IsSUFBUCxDQUFZTCxJQUFaLENBQUQsQ0FBUCxDQUE3QixDQUFQO0FBQ0QsT0FGRCxDQUVFLE1BQU07QUFDTixlQUFPLEVBQVA7QUFDRDtBQUNGLEtBTkQ7O0FBT0EsVUFBTU0sY0FBYyxHQUFJQyxLQUFELElBQXlCO0FBQUE7O0FBQzlDLFlBQU1DLGNBQWMsR0FDbEIsMEJBQUFDLHVEQUFBLGdGQUE2Q0MsS0FBN0MsQ0FBbUQsR0FBbkQsTUFBMkQsRUFEN0Q7O0FBR0EsVUFDRSxFQUNFRixjQUFjLENBQUNHLFFBQWYsQ0FBd0JKLEtBQUssQ0FBQ0ssTUFBOUIsS0FDQSxnQkFBQUwsS0FBSyxDQUFDUCxJQUFOLDREQUFZWSxNQUFaLE1BQXVCLGFBRHZCLG9CQUVBTCxLQUFLLENBQUNQLElBRk4seUNBRUEsYUFBWWEsT0FIZCxDQURGLEVBTUU7QUFDQTtBQUNEOztBQUVEakIsaUJBQVcsQ0FBQ0csWUFBWSxDQUFDUSxLQUFLLENBQUNQLElBQU4sQ0FBV2EsT0FBWixDQUFiLENBQVg7QUFDRCxLQWZEOztBQWlCQXhCLFVBQU0sQ0FBQ3lCLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DUixjQUFuQyxFQUFtRCxLQUFuRDs7QUFFQSxRQUFHbEIsUUFBUSxFQUFYLEVBQWU7QUFDYkMsWUFBTSxDQUFDMEIsTUFBUCxDQUFjQyxXQUFkLENBQ0U7QUFDRUosY0FBTSxFQUFFLGtCQURWO0FBRUVLLGFBQUssRUFBRTtBQUZULE9BREYsRUFLRSxHQUxGO0FBT0Q7O0FBRUQsV0FBTyxNQUFNO0FBQ1g1QixZQUFNLENBQUM2QixtQkFBUCxDQUEyQixTQUEzQixFQUFzQ1osY0FBdEM7QUFDRCxLQUZEO0FBR0QsR0F4Q1EsRUF3Q04sRUF4Q00sQ0FBVDtBQTBDQSxTQUFPO0FBQ0xYO0FBREssR0FBUDtBQUdELENBaERNOztHQUFNRixXIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL3VzZS1wYWdlLWRhdGEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHVzZVBhZ2VEYXRhOiBUaGlzIGhvb2sgc3VwcG9ydHMgaW5qZWN0aW5nIHByZXZpZXcgZGF0YSBmcm9tIGEgY29udGFpbmVyIHdpbmRvd1xuICovXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJhY1BhZ2UgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdHJhY3BhZ2UvdHlwZXMvdHJhYy1wYWdlJztcblxuZnVuY3Rpb24gaW5JZnJhbWUgKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VQYWdlRGF0YSA9IDxUID0gVHJhY1BhZ2U+KGluaXRpYWw/OiBUKSA9PiB7XG4gIGNvbnN0IFtwYWdlRGF0YSwgc2V0UGFnZURhdGFdID0gdXNlU3RhdGU8VCB8IHVuZGVmaW5lZD4oaW5pdGlhbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcm9jZXNzU3RhdGUgPSAoZGF0YTogc3RyaW5nKTogVCA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKHdpbmRvdy5hdG9iKGRhdGEpKSkpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiB7fSBhcyBUO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgcmVjZWl2ZU1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgYWxsb3dlZE9yaWdpbnMgPVxuICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfQUxMT1dFRF9PUklHSU5TPy5zcGxpdCgnLCcpIHx8IFtdO1xuXG4gICAgICBpZiAoXG4gICAgICAgICEoXG4gICAgICAgICAgYWxsb3dlZE9yaWdpbnMuaW5jbHVkZXMoZXZlbnQub3JpZ2luKSAmJlxuICAgICAgICAgIGV2ZW50LmRhdGE/Lm9yaWdpbiA9PT0gJ3RyYWMtZWRpdG9yJyAmJlxuICAgICAgICAgIGV2ZW50LmRhdGE/LnBheWxvYWRcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0UGFnZURhdGEocHJvY2Vzc1N0YXRlKGV2ZW50LmRhdGEucGF5bG9hZCkpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHJlY2VpdmVNZXNzYWdlLCBmYWxzZSk7XG5cbiAgICBpZihpbklmcmFtZSgpKSB7XG4gICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKFxuICAgICAgICB7XG4gICAgICAgICAgb3JpZ2luOiAndHJhYy1hcnRpc3Qtc2l0ZScsXG4gICAgICAgICAgcmVhZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgICcqJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCByZWNlaXZlTWVzc2FnZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB7XG4gICAgcGFnZURhdGEsXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/use-page-data.ts\n"
      );

      /***/
    },
});