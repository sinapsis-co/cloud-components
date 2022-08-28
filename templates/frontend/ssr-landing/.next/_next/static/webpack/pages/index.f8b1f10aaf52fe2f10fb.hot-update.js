webpackHotUpdate_N_E('pages/index', {
  /***/ './src/components/sidebar/sidebar-featured-item.tsx':
    /*!**********************************************************!*\
  !*** ./src/components/sidebar/sidebar-featured-item.tsx ***!
  \**********************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_simple_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/simple-link */ "./src/components/simple-link/index.tsx");\n/* harmony import */ var _components_song_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/song-link */ "./src/components/song-link/index.tsx");\n/* harmony import */ var _components_video_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/video-link */ "./src/components/video-link/index.tsx");\n/* harmony import */ var _components_merch_product_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/merch/product-item */ "./src/components/merch/product-item/index.tsx");\nvar _jsxFileName = "/Users/volod34/WebStormProjects/newage/trac/platform/frontend/ssr-artist/src/components/sidebar/sidebar-featured-item.tsx";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst SidebarFeaturedItem = ({\n  data,\n  pageData\n}) => {\n  var _data, _data$embedData, _data$embedData2;\n\n  return ((_data = !!data) !== null && _data !== void 0 ? _data : \'type\' in data) ? data.type === \'url\' ? __jsx(_components_simple_link__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    className: "in-sidebar",\n    data: data,\n    releaseId: pageData.id,\n    artistId: pageData.ownerId,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }) : data.type === \'traclink\' ? __jsx(_components_song_link__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    className: data.highlight ? \'highlight\' : \'\',\n    inSidebar: true,\n    data: data,\n    artistName: data.title,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }) : __jsx(_components_video_link__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    inSidebar: true,\n    className: data.highlight ? \'highlight\' : \'\',\n    data: {\n      title: data.title,\n      url: (_data$embedData = data.embedData) === null || _data$embedData === void 0 ? void 0 : _data$embedData.url,\n      id: ((_data$embedData2 = data.embedData) === null || _data$embedData2 === void 0 ? void 0 : _data$embedData2.id) || \'\',\n      highlight: data.highlight,\n      type: data.type\n    },\n    artistName: pageData.title,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }) : __jsx(_components_merch_product_item__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: "in-sidebar",\n    product: data,\n    hasAnimation: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  });\n};\n\n_c = SidebarFeaturedItem;\n/* harmony default export */ __webpack_exports__["default"] = (SidebarFeaturedItem);\n\nvar _c;\n\n$RefreshReg$(_c, "SidebarFeaturedItem");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLWZlYXR1cmVkLWl0ZW0udHN4PzVkY2IiXSwibmFtZXMiOlsiU2lkZWJhckZlYXR1cmVkSXRlbSIsImRhdGEiLCJwYWdlRGF0YSIsInR5cGUiLCJpZCIsIm93bmVySWQiLCJoaWdobGlnaHQiLCJ0aXRsZSIsInVybCIsImVtYmVkRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxNQUFNQSxtQkFBZ0UsR0FBRyxDQUFDO0FBQ3hFQyxNQUR3RTtBQUV4RUM7QUFGd0UsQ0FBRCxLQUduRTtBQUFBOztBQUNKLFNBQU8sV0FBQyxDQUFDRCxJQUFGLHlDQUFVLFVBQVVBLElBQXBCLElBQ0xBLElBQUksQ0FBQ0UsSUFBTCxLQUFjLEtBQWQsR0FDRSxNQUFDLCtEQUFEO0FBQ0UsYUFBUyxFQUFDLFlBRFo7QUFFRSxRQUFJLEVBQUVGLElBRlI7QUFHRSxhQUFTLEVBQUVDLFFBQVEsQ0FBQ0UsRUFIdEI7QUFJRSxZQUFRLEVBQUVGLFFBQVEsQ0FBQ0csT0FKckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEdBT0lKLElBQUksQ0FBQ0UsSUFBTCxLQUFjLFVBQWQsR0FDRixNQUFDLDZEQUFEO0FBQ0UsYUFBUyxFQUFFRixJQUFJLENBQUNLLFNBQUwsR0FBaUIsV0FBakIsR0FBK0IsRUFENUM7QUFFRSxhQUFTLE1BRlg7QUFHRSxRQUFJLEVBQUVMLElBSFI7QUFJRSxjQUFVLEVBQUVBLElBQUksQ0FBQ00sS0FKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURFLEdBUUYsTUFBQyw4REFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLGFBQVMsRUFBRU4sSUFBSSxDQUFDSyxTQUFMLEdBQWlCLFdBQWpCLEdBQStCLEVBRjVDO0FBR0UsUUFBSSxFQUFFO0FBQ0pDLFdBQUssRUFBRU4sSUFBSSxDQUFDTSxLQURSO0FBRUpDLFNBQUcscUJBQUVQLElBQUksQ0FBQ1EsU0FBUCxvREFBRSxnQkFBZ0JELEdBRmpCO0FBR0pKLFFBQUUsRUFBRSxxQkFBQUgsSUFBSSxDQUFDUSxTQUFMLHNFQUFnQkwsRUFBaEIsS0FBc0IsRUFIdEI7QUFJSkUsZUFBUyxFQUFFTCxJQUFJLENBQUNLLFNBSlo7QUFLSkgsVUFBSSxFQUFFRixJQUFJLENBQUNFO0FBTFAsS0FIUjtBQVVFLGNBQVUsRUFBRUQsUUFBUSxDQUFDSyxLQVZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJHLEdBOEJMLE1BQUMsc0VBQUQ7QUFBYSxhQUFTLEVBQUMsWUFBdkI7QUFBb0MsV0FBTyxFQUFFTixJQUE3QztBQUFtRCxnQkFBWSxNQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOUJGO0FBZ0NELENBcENEOztLQUFNRCxtQjtBQXNDU0Esa0ZBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXItZmVhdHVyZWQtaXRlbS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJhY1BhZ2UgZnJvbSAnQHNlcnZpY2VzL3RyYWNwYWdlL3R5cGVzL3RyYWMtcGFnZSc7XG5pbXBvcnQgU2ltcGxlTGluayBmcm9tICdAY29tcG9uZW50cy9zaW1wbGUtbGluayc7XG5pbXBvcnQgU29uZ0xpbmsgZnJvbSAnQGNvbXBvbmVudHMvc29uZy1saW5rJztcbmltcG9ydCBWaWRlb0xpbmsgZnJvbSAnQGNvbXBvbmVudHMvdmlkZW8tbGluayc7XG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSAnQGNvbXBvbmVudHMvbWVyY2gvcHJvZHVjdC1pdGVtJztcblxuaW50ZXJmYWNlIFNpZGViYXJGZWF0dXJlZEl0ZW1Qcm9wcyB7XG4gIGRhdGE6IGFueTtcbiAgcGFnZURhdGE6IFRyYWNQYWdlO1xufVxuXG5jb25zdCBTaWRlYmFyRmVhdHVyZWRJdGVtOiBGdW5jdGlvbkNvbXBvbmVudDxTaWRlYmFyRmVhdHVyZWRJdGVtUHJvcHM+ID0gKHtcbiAgZGF0YSxcbiAgcGFnZURhdGEsXG59KSA9PiB7XG4gIHJldHVybiAhIWRhdGEgPz8gJ3R5cGUnIGluIGRhdGEgPyAoXG4gICAgZGF0YS50eXBlID09PSAndXJsJyA/IChcbiAgICAgIDxTaW1wbGVMaW5rXG4gICAgICAgIGNsYXNzTmFtZT1cImluLXNpZGViYXJcIlxuICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICByZWxlYXNlSWQ9e3BhZ2VEYXRhLmlkfVxuICAgICAgICBhcnRpc3RJZD17cGFnZURhdGEub3duZXJJZH1cbiAgICAgIC8+XG4gICAgKSA6IGRhdGEudHlwZSA9PT0gJ3RyYWNsaW5rJyA/IChcbiAgICAgIDxTb25nTGlua1xuICAgICAgICBjbGFzc05hbWU9e2RhdGEuaGlnaGxpZ2h0ID8gJ2hpZ2hsaWdodCcgOiAnJ31cbiAgICAgICAgaW5TaWRlYmFyXG4gICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIGFydGlzdE5hbWU9e2RhdGEudGl0bGV9XG4gICAgICAvPlxuICAgICkgOiAoXG4gICAgICA8VmlkZW9MaW5rXG4gICAgICAgIGluU2lkZWJhclxuICAgICAgICBjbGFzc05hbWU9e2RhdGEuaGlnaGxpZ2h0ID8gJ2hpZ2hsaWdodCcgOiAnJ31cbiAgICAgICAgZGF0YT17e1xuICAgICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgICAgIHVybDogZGF0YS5lbWJlZERhdGE/LnVybCxcbiAgICAgICAgICBpZDogZGF0YS5lbWJlZERhdGE/LmlkIHx8ICcnLFxuICAgICAgICAgIGhpZ2hsaWdodDogZGF0YS5oaWdobGlnaHQsXG4gICAgICAgICAgdHlwZTogZGF0YS50eXBlLFxuICAgICAgICB9fVxuICAgICAgICBhcnRpc3ROYW1lPXtwYWdlRGF0YS50aXRsZX1cbiAgICAgIC8+XG4gICAgKVxuICApIDogKFxuICAgIDxQcm9kdWN0SXRlbSBjbGFzc05hbWU9XCJpbi1zaWRlYmFyXCIgcHJvZHVjdD17ZGF0YX0gaGFzQW5pbWF0aW9uIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyRmVhdHVyZWRJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/sidebar/sidebar-featured-item.tsx\n'
      );

      /***/
    },
});
