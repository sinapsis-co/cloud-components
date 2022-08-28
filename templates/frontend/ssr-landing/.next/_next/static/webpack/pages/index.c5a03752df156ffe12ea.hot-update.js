webpackHotUpdate_N_E('pages/index', {
  /***/ './src/hooks/use-page-data.ts':
    /*!************************************!*\
  !*** ./src/hooks/use-page-data.ts ***!
  \************************************/
    /*! exports provided: usePageData */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePageData\", function() { return usePageData; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n/**\n * usePageData: This hook supports injecting preview data from a container window\n */\n\n\nfunction inIframe() {\n  try {\n    return window.self !== window.top;\n  } catch (e) {\n    return true;\n  }\n}\n\nconst usePageData = initial => {\n  _s();\n\n  const {\n    0: pageData,\n    1: setPageData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initial);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    var _window, _window$parent, _window2;\n\n    const processState = data => {\n      try {\n        return JSON.parse(decodeURIComponent(escape(window.atob(data))));\n      } catch {\n        return {};\n      }\n    };\n\n    const receiveMessage = event => {\n      var _event$data, _process$env$NEXT_PUB, _event$data2, _event$data3;\n\n      console.log('event: ', event); // eslint-disable-line\n\n      console.log('event: ', (_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.origin); // eslint-disable-line\n\n      console.log('event.data.payload: ', processState(event.data.payload)); // eslint-disable-line\n\n      const allowedOrigins = ((_process$env$NEXT_PUB = \"http://localhost:3000,https://app.development.trac.co\") === null || _process$env$NEXT_PUB === void 0 ? void 0 : _process$env$NEXT_PUB.split(',')) || [];\n\n      if (!(allowedOrigins.includes(event.origin) && ((_event$data2 = event.data) === null || _event$data2 === void 0 ? void 0 : _event$data2.origin) === 'trac-editor' && (_event$data3 = event.data) !== null && _event$data3 !== void 0 && _event$data3.payload)) {\n        return;\n      }\n\n      setPageData(processState(event.data.payload));\n    };\n\n    window.addEventListener('message', receiveMessage, false);\n    console.log('window.parent: ', window.parent); // eslint-disable-line\n\n    console.log('window.location: ', window.location, (_window = window) === null || _window === void 0 ? void 0 : (_window$parent = _window.parent) === null || _window$parent === void 0 ? void 0 : _window$parent.location); // eslint-disable-line\n\n    console.log('document.referrer: ', document.referrer); // eslint-disable-line\n\n    console.log('inIframe: ', inIframe(), window.self, (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.top); // eslint-disable-line\n\n    console.log('window.frameElement: ', window.frameElement); // eslint-disable-line\n\n    if (inIframe()) {\n      window.parent.postMessage({\n        origin: 'trac-artist-site',\n        ready: true\n      }, '*');\n    }\n\n    if (document.referrer) {\n      window.parent.postMessage({\n        origin: 'trac-artist-site',\n        ready: true\n      }, document.referrer);\n    }\n\n    return () => {\n      window.removeEventListener('message', receiveMessage);\n    };\n  }, []);\n  return {\n    pageData\n  };\n};\n\n_s(usePageData, \"UphAlo7MnYeILHnOwLM6KowDYaY=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZS1wYWdlLWRhdGEudHM/OGVkNCJdLCJuYW1lcyI6WyJpbklmcmFtZSIsIndpbmRvdyIsInNlbGYiLCJ0b3AiLCJlIiwidXNlUGFnZURhdGEiLCJpbml0aWFsIiwicGFnZURhdGEiLCJzZXRQYWdlRGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicHJvY2Vzc1N0YXRlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImVzY2FwZSIsImF0b2IiLCJyZWNlaXZlTWVzc2FnZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsIm9yaWdpbiIsInBheWxvYWQiLCJhbGxvd2VkT3JpZ2lucyIsInByb2Nlc3MiLCJzcGxpdCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcmVudCIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJyZWZlcnJlciIsImZyYW1lRWxlbWVudCIsInBvc3RNZXNzYWdlIiwicmVhZHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQSxTQUFTQSxRQUFULEdBQXFCO0FBQ25CLE1BQUk7QUFDRixXQUFPQyxNQUFNLENBQUNDLElBQVAsS0FBZ0JELE1BQU0sQ0FBQ0UsR0FBOUI7QUFDRCxHQUZELENBRUUsT0FBT0MsQ0FBUCxFQUFVO0FBQ1YsV0FBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFTSxNQUFNQyxXQUFXLEdBQWtCQyxPQUFmLElBQStCO0FBQUE7O0FBQ3hELFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBZ0JILE9BQWhCLENBQXhDO0FBRUFJLHlEQUFTLENBQUMsTUFBTTtBQUFBOztBQUNkLFVBQU1DLFlBQVksR0FBSUMsSUFBRCxJQUFxQjtBQUN4QyxVQUFJO0FBQ0YsZUFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLGtCQUFrQixDQUFDQyxNQUFNLENBQUNmLE1BQU0sQ0FBQ2dCLElBQVAsQ0FBWUwsSUFBWixDQUFELENBQVAsQ0FBN0IsQ0FBUDtBQUNELE9BRkQsQ0FFRSxNQUFNO0FBQ04sZUFBTyxFQUFQO0FBQ0Q7QUFDRixLQU5EOztBQU9BLFVBQU1NLGNBQWMsR0FBSUMsS0FBRCxJQUF5QjtBQUFBOztBQUM5Q0MsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkYsS0FBdkIsRUFEOEMsQ0FDZjs7QUFDL0JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosaUJBQXVCRixLQUFLLENBQUNQLElBQTdCLGdEQUF1QixZQUFZVSxNQUFuQyxFQUY4QyxDQUVGOztBQUM1Q0YsYUFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBb0NWLFlBQVksQ0FBQ1EsS0FBSyxDQUFDUCxJQUFOLENBQVdXLE9BQVosQ0FBaEQsRUFIOEMsQ0FHeUI7O0FBRXZFLFlBQU1DLGNBQWMsR0FDbEIsMEJBQUFDLHVEQUFBLGdGQUE2Q0MsS0FBN0MsQ0FBbUQsR0FBbkQsTUFBMkQsRUFEN0Q7O0FBR0EsVUFDRSxFQUNFRixjQUFjLENBQUNHLFFBQWYsQ0FBd0JSLEtBQUssQ0FBQ0csTUFBOUIsS0FDQSxpQkFBQUgsS0FBSyxDQUFDUCxJQUFOLDhEQUFZVSxNQUFaLE1BQXVCLGFBRHZCLG9CQUVBSCxLQUFLLENBQUNQLElBRk4seUNBRUEsYUFBWVcsT0FIZCxDQURGLEVBTUU7QUFDQTtBQUNEOztBQUVEZixpQkFBVyxDQUFDRyxZQUFZLENBQUNRLEtBQUssQ0FBQ1AsSUFBTixDQUFXVyxPQUFaLENBQWIsQ0FBWDtBQUNELEtBbkJEOztBQXFCQXRCLFVBQU0sQ0FBQzJCLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DVixjQUFuQyxFQUFtRCxLQUFuRDtBQUVBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQnBCLE1BQU0sQ0FBQzRCLE1BQXRDLEVBL0JjLENBK0JpQzs7QUFDL0NULFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDcEIsTUFBTSxDQUFDNkIsUUFBeEMsYUFBa0Q3QixNQUFsRCw4REFBa0QsUUFBUTRCLE1BQTFELG1EQUFrRCxlQUFnQkMsUUFBbEUsRUFoQ2MsQ0FnQytEOztBQUM3RVYsV0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUNVLFFBQVEsQ0FBQ0MsUUFBNUMsRUFqQ2MsQ0FpQ3lDOztBQUN2RFosV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQnJCLFFBQVEsRUFBbEMsRUFBc0NDLE1BQU0sQ0FBQ0MsSUFBN0MsY0FBbURELE1BQW5ELDZDQUFtRCxTQUFRRSxHQUEzRCxFQWxDYyxDQWtDbUQ7O0FBQ2pFaUIsV0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFBcUNwQixNQUFNLENBQUNnQyxZQUE1QyxFQW5DYyxDQW1DNkM7O0FBRTNELFFBQUdqQyxRQUFRLEVBQVgsRUFBZTtBQUNiQyxZQUFNLENBQUM0QixNQUFQLENBQWNLLFdBQWQsQ0FDRTtBQUNFWixjQUFNLEVBQUUsa0JBRFY7QUFFRWEsYUFBSyxFQUFFO0FBRlQsT0FERixFQUtFLEdBTEY7QUFPRDs7QUFFRCxRQUFJSixRQUFRLENBQUNDLFFBQWIsRUFBdUI7QUFDckIvQixZQUFNLENBQUM0QixNQUFQLENBQWNLLFdBQWQsQ0FDRTtBQUNFWixjQUFNLEVBQUUsa0JBRFY7QUFFRWEsYUFBSyxFQUFFO0FBRlQsT0FERixFQUtFSixRQUFRLENBQUNDLFFBTFg7QUFPRDs7QUFFRCxXQUFPLE1BQU07QUFDWC9CLFlBQU0sQ0FBQ21DLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDbEIsY0FBdEM7QUFDRCxLQUZEO0FBR0QsR0E1RFEsRUE0RE4sRUE1RE0sQ0FBVDtBQThEQSxTQUFPO0FBQ0xYO0FBREssR0FBUDtBQUdELENBcEVNOztHQUFNRixXIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL3VzZS1wYWdlLWRhdGEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHVzZVBhZ2VEYXRhOiBUaGlzIGhvb2sgc3VwcG9ydHMgaW5qZWN0aW5nIHByZXZpZXcgZGF0YSBmcm9tIGEgY29udGFpbmVyIHdpbmRvd1xuICovXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJhY1BhZ2UgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdHJhY3BhZ2UvdHlwZXMvdHJhYy1wYWdlJztcblxuZnVuY3Rpb24gaW5JZnJhbWUgKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VQYWdlRGF0YSA9IDxUID0gVHJhY1BhZ2U+KGluaXRpYWw/OiBUKSA9PiB7XG4gIGNvbnN0IFtwYWdlRGF0YSwgc2V0UGFnZURhdGFdID0gdXNlU3RhdGU8VCB8IHVuZGVmaW5lZD4oaW5pdGlhbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcm9jZXNzU3RhdGUgPSAoZGF0YTogc3RyaW5nKTogVCA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKHdpbmRvdy5hdG9iKGRhdGEpKSkpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiB7fSBhcyBUO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgcmVjZWl2ZU1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2V2ZW50OiAnLCBldmVudCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGNvbnNvbGUubG9nKCdldmVudDogJywgZXZlbnQuZGF0YT8ub3JpZ2luKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgY29uc29sZS5sb2coJ2V2ZW50LmRhdGEucGF5bG9hZDogJywgcHJvY2Vzc1N0YXRlKGV2ZW50LmRhdGEucGF5bG9hZCkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICBcbiAgICAgIGNvbnN0IGFsbG93ZWRPcmlnaW5zID1cbiAgICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX0FMTE9XRURfT1JJR0lOUz8uc3BsaXQoJywnKSB8fCBbXTtcblxuICAgICAgaWYgKFxuICAgICAgICAhKFxuICAgICAgICAgIGFsbG93ZWRPcmlnaW5zLmluY2x1ZGVzKGV2ZW50Lm9yaWdpbikgJiZcbiAgICAgICAgICBldmVudC5kYXRhPy5vcmlnaW4gPT09ICd0cmFjLWVkaXRvcicgJiZcbiAgICAgICAgICBldmVudC5kYXRhPy5wYXlsb2FkXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNldFBhZ2VEYXRhKHByb2Nlc3NTdGF0ZShldmVudC5kYXRhLnBheWxvYWQpKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCByZWNlaXZlTWVzc2FnZSwgZmFsc2UpO1xuICBcbiAgICBjb25zb2xlLmxvZygnd2luZG93LnBhcmVudDogJywgd2luZG93LnBhcmVudCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBjb25zb2xlLmxvZygnd2luZG93LmxvY2F0aW9uOiAnLCB3aW5kb3cubG9jYXRpb24sIHdpbmRvdz8ucGFyZW50Py5sb2NhdGlvbik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBjb25zb2xlLmxvZygnZG9jdW1lbnQucmVmZXJyZXI6ICcsIGRvY3VtZW50LnJlZmVycmVyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGNvbnNvbGUubG9nKCdpbklmcmFtZTogJywgaW5JZnJhbWUoKSwgd2luZG93LnNlbGYsIHdpbmRvdz8udG9wKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGNvbnNvbGUubG9nKCd3aW5kb3cuZnJhbWVFbGVtZW50OiAnLCB3aW5kb3cuZnJhbWVFbGVtZW50KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIFxuICAgIGlmKGluSWZyYW1lKCkpIHtcbiAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoXG4gICAgICAgIHtcbiAgICAgICAgICBvcmlnaW46ICd0cmFjLWFydGlzdC1zaXRlJyxcbiAgICAgICAgICByZWFkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgJyonXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5yZWZlcnJlcikge1xuICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShcbiAgICAgICAge1xuICAgICAgICAgIG9yaWdpbjogJ3RyYWMtYXJ0aXN0LXNpdGUnLFxuICAgICAgICAgIHJlYWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBkb2N1bWVudC5yZWZlcnJlclxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCByZWNlaXZlTWVzc2FnZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB7XG4gICAgcGFnZURhdGEsXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/use-page-data.ts\n"
      );

      /***/
    },
});
