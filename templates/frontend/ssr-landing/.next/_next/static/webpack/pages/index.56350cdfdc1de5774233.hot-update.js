webpackHotUpdate_N_E('pages/index', {
  /***/ './src/hooks/use-page-data.ts':
    /*!************************************!*\
  !*** ./src/hooks/use-page-data.ts ***!
  \************************************/
    /*! exports provided: usePageData */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePageData\", function() { return usePageData; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n/**\n * usePageData: This hook supports injecting preview data from a container window\n */\n\n\nfunction inIframe() {\n  try {\n    return window.self !== window.top;\n  } catch (e) {\n    return true;\n  }\n}\n\nconst usePageData = initial => {\n  _s();\n\n  const {\n    0: pageData,\n    1: setPageData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initial);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    var _window, _window$parent, _window2;\n\n    const processState = data => {\n      try {\n        return JSON.parse(decodeURIComponent(escape(window.atob(data))));\n      } catch {\n        return {};\n      }\n    };\n\n    const receiveMessage = event => {\n      var _event$data, _process$env$NEXT_PUB, _event$data2, _event$data3;\n\n      console.log('event: ', event); // eslint-disable-line\n\n      console.log('event: ', (_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.origin); // eslint-disable-line\n\n      console.log('event.data.payload: ', processState(event.data.payload)); // eslint-disable-line\n\n      const allowedOrigins = ((_process$env$NEXT_PUB = \"http://localhost:3000,https://app.development.trac.co\") === null || _process$env$NEXT_PUB === void 0 ? void 0 : _process$env$NEXT_PUB.split(',')) || [];\n\n      if (!(allowedOrigins.includes(event.origin) && ((_event$data2 = event.data) === null || _event$data2 === void 0 ? void 0 : _event$data2.origin) === 'trac-editor' && (_event$data3 = event.data) !== null && _event$data3 !== void 0 && _event$data3.payload)) {\n        return;\n      }\n\n      setPageData(processState(event.data.payload));\n    };\n\n    window.addEventListener('message', receiveMessage, false);\n    console.log('window.parent: ', window.parent); // eslint-disable-line\n\n    console.log('window.location: ', window.location, (_window = window) === null || _window === void 0 ? void 0 : (_window$parent = _window.parent) === null || _window$parent === void 0 ? void 0 : _window$parent.location); // eslint-disable-line\n\n    console.log('document.referrer: ', document.referrer); // eslint-disable-line\n\n    console.log('inIframe: ', inIframe(), window.self, (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.top); // eslint-disable-line\n\n    console.log('window.frameElement: ', window.frameElement); // eslint-disable-line\n\n    if (inIframe()) {\n      window.parent.postMessage({\n        origin: 'trac-artist-site',\n        ready: true\n      }, '*');\n    }\n\n    ; // if (document.referrer) {\n    //   window.parent.postMessage(\n    //     {\n    //       origin: 'trac-artist-site',\n    //       ready: true,\n    //     },\n    //     document.referrer\n    //   );\n    // }\n\n    return () => {\n      window.removeEventListener('message', receiveMessage);\n    };\n  }, []);\n  return {\n    pageData\n  };\n};\n\n_s(usePageData, \"UphAlo7MnYeILHnOwLM6KowDYaY=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZS1wYWdlLWRhdGEudHM/OGVkNCJdLCJuYW1lcyI6WyJpbklmcmFtZSIsIndpbmRvdyIsInNlbGYiLCJ0b3AiLCJlIiwidXNlUGFnZURhdGEiLCJpbml0aWFsIiwicGFnZURhdGEiLCJzZXRQYWdlRGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicHJvY2Vzc1N0YXRlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImVzY2FwZSIsImF0b2IiLCJyZWNlaXZlTWVzc2FnZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsIm9yaWdpbiIsInBheWxvYWQiLCJhbGxvd2VkT3JpZ2lucyIsInByb2Nlc3MiLCJzcGxpdCIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcmVudCIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJyZWZlcnJlciIsImZyYW1lRWxlbWVudCIsInBvc3RNZXNzYWdlIiwicmVhZHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQSxTQUFTQSxRQUFULEdBQXFCO0FBQ25CLE1BQUk7QUFDRixXQUFPQyxNQUFNLENBQUNDLElBQVAsS0FBZ0JELE1BQU0sQ0FBQ0UsR0FBOUI7QUFDRCxHQUZELENBRUUsT0FBT0MsQ0FBUCxFQUFVO0FBQ1YsV0FBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFTSxNQUFNQyxXQUFXLEdBQWtCQyxPQUFmLElBQStCO0FBQUE7O0FBQ3hELFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBZ0JILE9BQWhCLENBQXhDO0FBRUFJLHlEQUFTLENBQUMsTUFBTTtBQUFBOztBQUNkLFVBQU1DLFlBQVksR0FBSUMsSUFBRCxJQUFxQjtBQUN4QyxVQUFJO0FBQ0YsZUFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLGtCQUFrQixDQUFDQyxNQUFNLENBQUNmLE1BQU0sQ0FBQ2dCLElBQVAsQ0FBWUwsSUFBWixDQUFELENBQVAsQ0FBN0IsQ0FBUDtBQUNELE9BRkQsQ0FFRSxNQUFNO0FBQ04sZUFBTyxFQUFQO0FBQ0Q7QUFDRixLQU5EOztBQU9BLFVBQU1NLGNBQWMsR0FBSUMsS0FBRCxJQUF5QjtBQUFBOztBQUM5Q0MsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkYsS0FBdkIsRUFEOEMsQ0FDZjs7QUFDL0JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosaUJBQXVCRixLQUFLLENBQUNQLElBQTdCLGdEQUF1QixZQUFZVSxNQUFuQyxFQUY4QyxDQUVGOztBQUM1Q0YsYUFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBb0NWLFlBQVksQ0FBQ1EsS0FBSyxDQUFDUCxJQUFOLENBQVdXLE9BQVosQ0FBaEQsRUFIOEMsQ0FHeUI7O0FBRXZFLFlBQU1DLGNBQWMsR0FDbEIsMEJBQUFDLHVEQUFBLGdGQUE2Q0MsS0FBN0MsQ0FBbUQsR0FBbkQsTUFBMkQsRUFEN0Q7O0FBR0EsVUFDRSxFQUNFRixjQUFjLENBQUNHLFFBQWYsQ0FBd0JSLEtBQUssQ0FBQ0csTUFBOUIsS0FDQSxpQkFBQUgsS0FBSyxDQUFDUCxJQUFOLDhEQUFZVSxNQUFaLE1BQXVCLGFBRHZCLG9CQUVBSCxLQUFLLENBQUNQLElBRk4seUNBRUEsYUFBWVcsT0FIZCxDQURGLEVBTUU7QUFDQTtBQUNEOztBQUVEZixpQkFBVyxDQUFDRyxZQUFZLENBQUNRLEtBQUssQ0FBQ1AsSUFBTixDQUFXVyxPQUFaLENBQWIsQ0FBWDtBQUNELEtBbkJEOztBQXFCQXRCLFVBQU0sQ0FBQzJCLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DVixjQUFuQyxFQUFtRCxLQUFuRDtBQUVBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQnBCLE1BQU0sQ0FBQzRCLE1BQXRDLEVBL0JjLENBK0JpQzs7QUFDL0NULFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDcEIsTUFBTSxDQUFDNkIsUUFBeEMsYUFBa0Q3QixNQUFsRCw4REFBa0QsUUFBUTRCLE1BQTFELG1EQUFrRCxlQUFnQkMsUUFBbEUsRUFoQ2MsQ0FnQytEOztBQUM3RVYsV0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUNVLFFBQVEsQ0FBQ0MsUUFBNUMsRUFqQ2MsQ0FpQ3lDOztBQUN2RFosV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQnJCLFFBQVEsRUFBbEMsRUFBc0NDLE1BQU0sQ0FBQ0MsSUFBN0MsY0FBbURELE1BQW5ELDZDQUFtRCxTQUFRRSxHQUEzRCxFQWxDYyxDQWtDbUQ7O0FBQ2pFaUIsV0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFBcUNwQixNQUFNLENBQUNnQyxZQUE1QyxFQW5DYyxDQW1DNkM7O0FBRTNELFFBQUdqQyxRQUFRLEVBQVgsRUFBZTtBQUNiQyxZQUFNLENBQUM0QixNQUFQLENBQWNLLFdBQWQsQ0FDRTtBQUNFWixjQUFNLEVBQUUsa0JBRFY7QUFFRWEsYUFBSyxFQUFFO0FBRlQsT0FERixFQUtFLEdBTEY7QUFPRDs7QUFBQSxLQTdDYSxDQStDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBTyxNQUFNO0FBQ1hsQyxZQUFNLENBQUNtQyxtQkFBUCxDQUEyQixTQUEzQixFQUFzQ2xCLGNBQXRDO0FBQ0QsS0FGRDtBQUdELEdBNURRLEVBNEROLEVBNURNLENBQVQ7QUE4REEsU0FBTztBQUNMWDtBQURLLEdBQVA7QUFHRCxDQXBFTTs7R0FBTUYsVyIsImZpbGUiOiIuL3NyYy9ob29rcy91c2UtcGFnZS1kYXRhLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiB1c2VQYWdlRGF0YTogVGhpcyBob29rIHN1cHBvcnRzIGluamVjdGluZyBwcmV2aWV3IGRhdGEgZnJvbSBhIGNvbnRhaW5lciB3aW5kb3dcbiAqL1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyYWNQYWdlIGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3RyYWNwYWdlL3R5cGVzL3RyYWMtcGFnZSc7XG5cbmZ1bmN0aW9uIGluSWZyYW1lICgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlUGFnZURhdGEgPSA8VCA9IFRyYWNQYWdlPihpbml0aWFsPzogVCkgPT4ge1xuICBjb25zdCBbcGFnZURhdGEsIHNldFBhZ2VEYXRhXSA9IHVzZVN0YXRlPFQgfCB1bmRlZmluZWQ+KGluaXRpYWwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJvY2Vzc1N0YXRlID0gKGRhdGE6IHN0cmluZyk6IFQgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSh3aW5kb3cuYXRvYihkYXRhKSkpKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4ge30gYXMgVDtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHJlY2VpdmVNZXNzYWdlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdldmVudDogJywgZXZlbnQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICBjb25zb2xlLmxvZygnZXZlbnQ6ICcsIGV2ZW50LmRhdGE/Lm9yaWdpbik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGNvbnNvbGUubG9nKCdldmVudC5kYXRhLnBheWxvYWQ6ICcsIHByb2Nlc3NTdGF0ZShldmVudC5kYXRhLnBheWxvYWQpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgXG4gICAgICBjb25zdCBhbGxvd2VkT3JpZ2lucyA9XG4gICAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9BTExPV0VEX09SSUdJTlM/LnNwbGl0KCcsJykgfHwgW107XG5cbiAgICAgIGlmIChcbiAgICAgICAgIShcbiAgICAgICAgICBhbGxvd2VkT3JpZ2lucy5pbmNsdWRlcyhldmVudC5vcmlnaW4pICYmXG4gICAgICAgICAgZXZlbnQuZGF0YT8ub3JpZ2luID09PSAndHJhYy1lZGl0b3InICYmXG4gICAgICAgICAgZXZlbnQuZGF0YT8ucGF5bG9hZFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRQYWdlRGF0YShwcm9jZXNzU3RhdGUoZXZlbnQuZGF0YS5wYXlsb2FkKSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgcmVjZWl2ZU1lc3NhZ2UsIGZhbHNlKTtcbiAgXG4gICAgY29uc29sZS5sb2coJ3dpbmRvdy5wYXJlbnQ6ICcsIHdpbmRvdy5wYXJlbnQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgY29uc29sZS5sb2coJ3dpbmRvdy5sb2NhdGlvbjogJywgd2luZG93LmxvY2F0aW9uLCB3aW5kb3c/LnBhcmVudD8ubG9jYXRpb24pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgY29uc29sZS5sb2coJ2RvY3VtZW50LnJlZmVycmVyOiAnLCBkb2N1bWVudC5yZWZlcnJlcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBjb25zb2xlLmxvZygnaW5JZnJhbWU6ICcsIGluSWZyYW1lKCksIHdpbmRvdy5zZWxmLCB3aW5kb3c/LnRvcCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBjb25zb2xlLmxvZygnd2luZG93LmZyYW1lRWxlbWVudDogJywgd2luZG93LmZyYW1lRWxlbWVudCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBcbiAgICBpZihpbklmcmFtZSgpKSB7XG4gICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKFxuICAgICAgICB7XG4gICAgICAgICAgb3JpZ2luOiAndHJhYy1hcnRpc3Qtc2l0ZScsXG4gICAgICAgICAgcmVhZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgICcqJ1xuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gaWYgKGRvY3VtZW50LnJlZmVycmVyKSB7XG4gICAgLy8gICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgb3JpZ2luOiAndHJhYy1hcnRpc3Qtc2l0ZScsXG4gICAgLy8gICAgICAgcmVhZHk6IHRydWUsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGRvY3VtZW50LnJlZmVycmVyXG4gICAgLy8gICApO1xuICAgIC8vIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHJlY2VpdmVNZXNzYWdlKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYWdlRGF0YSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/use-page-data.ts\n"
      );

      /***/
    },
});