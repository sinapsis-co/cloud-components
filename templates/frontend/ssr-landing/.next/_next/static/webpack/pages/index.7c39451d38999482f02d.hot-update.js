webpackHotUpdate_N_E('pages/index', {
  /***/ './src/components/song-link/index.tsx':
    /*!********************************************!*\
  !*** ./src/components/song-link/index.tsx ***!
  \********************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SongLink; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_icons_play__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/icons/play */ "./src/components/icons/play/index.tsx");\n/* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/cover-image */ "./src/components/cover-image/index.tsx");\n/* harmony import */ var _components_link_components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/link-components/link */ "./src/components/link-components/link.tsx");\n/* harmony import */ var _components_featured_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/featured-badge */ "./src/components/featured-badge/index.tsx");\n/* harmony import */ var _components_link_components_text_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/link-components/text-info */ "./src/components/link-components/text-info.tsx");\n/* harmony import */ var _components_link_components_play_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/link-components/play-wrapper */ "./src/components/link-components/play-wrapper.tsx");\n/* harmony import */ var _components_link_components_wrapper_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/link-components/wrapper-info */ "./src/components/link-components/wrapper-info.tsx");\nvar _jsxFileName = "/Users/herni/Documents/repositories/trac/platform/frontend/ssr-artist/src/components/song-link/index.tsx";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction SongLink({\n  data,\n  className,\n  artistName,\n  hasDelay,\n  noAnimation\n}) {\n  const handleClick = () => {\n    analytics.track(\'Tracpage Link Click\', {\n      artist_id: artistName,\n      category: data.type === \'traclink\' ? \'Release\' : \'Url\',\n      name: data.title\n    });\n  };\n\n  return data.title && data.url ? __jsx(_components_link_components_link__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    className: className ? className : \'\',\n    href: `${data.url}`,\n    onClick: handleClick,\n    hasDelay: hasDelay,\n    highlight: data.highlight ? \'highlight\' : \'\',\n    image: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_cover_image__WEBPACK_IMPORTED_MODULE_2__["default"], {\n      src: data.avatar,\n      alt: data.title,\n      variant: data.highlight ? \'squareHighlight\' : \'square\',\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }\n    }), __jsx(_components_link_components_play_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {\n      className: `play-icon ${data.highlight ? \'highlight\' : \'\'}`,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }\n    }, __jsx(_components_icons_play__WEBPACK_IMPORTED_MODULE_1__["default"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 13\n      }\n    }))),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(_components_link_components_wrapper_info__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    highlight: data.highlight,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, __jsx(_components_link_components_text_info__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    className: `${data.highlight ? \'highlight\' : \'\'}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx("h3", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, data.title), __jsx("p", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, artistName, ", Star6ixse7en, MRG, Sweez")), data.highlight ? __jsx(_components_featured_badge__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: "badge",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 27\n    }\n  }) : null)) : null;\n}\n_c = SongLink;\n\nvar _c;\n\n$RefreshReg$(_c, "SongLink");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc29uZy1saW5rL2luZGV4LnRzeD80OGJlIl0sIm5hbWVzIjpbIlNvbmdMaW5rIiwiZGF0YSIsImNsYXNzTmFtZSIsImFydGlzdE5hbWUiLCJoYXNEZWxheSIsIm5vQW5pbWF0aW9uIiwiaGFuZGxlQ2xpY2siLCJhbmFseXRpY3MiLCJ0cmFjayIsImFydGlzdF9pZCIsImNhdGVnb3J5IiwidHlwZSIsIm5hbWUiLCJ0aXRsZSIsInVybCIsImhpZ2hsaWdodCIsImF2YXRhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLFFBQVQsQ0FBa0I7QUFDL0JDLE1BRCtCO0FBRS9CQyxXQUYrQjtBQUcvQkMsWUFIK0I7QUFJL0JDLFVBSitCO0FBSy9CQztBQUwrQixDQUFsQixFQVlaO0FBQ0QsUUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDeEJDLGFBQVMsQ0FBQ0MsS0FBVixDQUFnQixxQkFBaEIsRUFBdUM7QUFDckNDLGVBQVMsRUFBRU4sVUFEMEI7QUFFckNPLGNBQVEsRUFBRVQsSUFBSSxDQUFDVSxJQUFMLEtBQWMsVUFBZCxHQUEyQixTQUEzQixHQUF1QyxLQUZaO0FBR3JDQyxVQUFJLEVBQUVYLElBQUksQ0FBQ1k7QUFIMEIsS0FBdkM7QUFLRCxHQU5EOztBQVFBLFNBQU9aLElBQUksQ0FBQ1ksS0FBTCxJQUFjWixJQUFJLENBQUNhLEdBQW5CLEdBQ0wsTUFBQyx3RUFBRDtBQUNFLGFBQVMsRUFBRVosU0FBUyxHQUFHQSxTQUFILEdBQWUsRUFEckM7QUFFRSxRQUFJLEVBQUcsR0FBRUQsSUFBSSxDQUFDYSxHQUFJLEVBRnBCO0FBR0UsV0FBTyxFQUFFUixXQUhYO0FBSUUsWUFBUSxFQUFFRixRQUpaO0FBS0UsYUFBUyxFQUFFSCxJQUFJLENBQUNjLFNBQUwsR0FBaUIsV0FBakIsR0FBK0IsRUFMNUM7QUFNRSxTQUFLLEVBQ0gsbUVBQ0UsTUFBQywrREFBRDtBQUNFLFNBQUcsRUFBRWQsSUFBSSxDQUFDZSxNQURaO0FBRUUsU0FBRyxFQUFFZixJQUFJLENBQUNZLEtBRlo7QUFHRSxhQUFPLEVBQUVaLElBQUksQ0FBQ2MsU0FBTCxHQUFpQixpQkFBakIsR0FBcUMsUUFIaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBTUUsTUFBQyxnRkFBRDtBQUFNLGVBQVMsRUFBRyxhQUFZZCxJQUFJLENBQUNjLFNBQUwsR0FBaUIsV0FBakIsR0FBK0IsRUFBRyxFQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FORixDQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FtQkUsTUFBQyxnRkFBRDtBQUFhLGFBQVMsRUFBRWQsSUFBSSxDQUFDYyxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2RUFBRDtBQUFNLGFBQVMsRUFBRyxHQUFFZCxJQUFJLENBQUNjLFNBQUwsR0FBaUIsV0FBakIsR0FBK0IsRUFBRyxFQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLZCxJQUFJLENBQUNZLEtBQVYsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVYsVUFBSiwrQkFGRixDQURGLEVBS0dGLElBQUksQ0FBQ2MsU0FBTCxHQUFpQixNQUFDLGtFQUFEO0FBQWUsYUFBUyxFQUFDLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBakIsR0FBdUQsSUFMMUQsQ0FuQkYsQ0FESyxHQTRCSCxJQTVCSjtBQTZCRDtLQWxEdUJmLFEiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zb25nLWxpbmsvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXlJY29uIGZyb20gJ0Bjb21wb25lbnRzL2ljb25zL3BsYXknO1xuaW1wb3J0IENvdmVySW1hZ2UgZnJvbSAnQGNvbXBvbmVudHMvY292ZXItaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnQGNvbXBvbmVudHMvbGluay1jb21wb25lbnRzL2xpbmsnO1xuaW1wb3J0IEZlYXR1cmVkQmFkZ2UgZnJvbSAnQGNvbXBvbmVudHMvZmVhdHVyZWQtYmFkZ2UnO1xuaW1wb3J0IEluZm8gZnJvbSAnQGNvbXBvbmVudHMvbGluay1jb21wb25lbnRzL3RleHQtaW5mbyc7XG5pbXBvcnQgUGxheSBmcm9tICdAY29tcG9uZW50cy9saW5rLWNvbXBvbmVudHMvcGxheS13cmFwcGVyJztcbmltcG9ydCBXcmFwcGVySW5mbyBmcm9tICdAY29tcG9uZW50cy9saW5rLWNvbXBvbmVudHMvd3JhcHBlci1pbmZvJztcblxuaW1wb3J0IHsgVHJhY1BhZ2VMaW5rIH0gZnJvbSAnQHNlcnZpY2VzL3RyYWNwYWdlL3R5cGVzL3RyYWMtcGFnZS1saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29uZ0xpbmsoe1xuICBkYXRhLFxuICBjbGFzc05hbWUsXG4gIGFydGlzdE5hbWUsXG4gIGhhc0RlbGF5LFxuICBub0FuaW1hdGlvblxufToge1xuICBkYXRhOiBUcmFjUGFnZUxpbms7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgYXJ0aXN0TmFtZT86IHN0cmluZyB8IG51bGw7XG4gIGhhc0RlbGF5PzogbnVtYmVyO1xuICBub0FuaW1hdGlvbj86IGJvb2xlYW47XG59KSB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGFuYWx5dGljcy50cmFjaygnVHJhY3BhZ2UgTGluayBDbGljaycsIHtcbiAgICAgIGFydGlzdF9pZDogYXJ0aXN0TmFtZSxcbiAgICAgIGNhdGVnb3J5OiBkYXRhLnR5cGUgPT09ICd0cmFjbGluaycgPyAnUmVsZWFzZScgOiAnVXJsJyxcbiAgICAgIG5hbWU6IGRhdGEudGl0bGUsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGEudGl0bGUgJiYgZGF0YS51cmwgPyAoXG4gICAgPExpbmtcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyd9XG4gICAgICBocmVmPXtgJHtkYXRhLnVybH1gfVxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICBoYXNEZWxheT17aGFzRGVsYXl9XG4gICAgICBoaWdobGlnaHQ9e2RhdGEuaGlnaGxpZ2h0ID8gJ2hpZ2hsaWdodCcgOiAnJ31cbiAgICAgIGltYWdlPXtcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q292ZXJJbWFnZVxuICAgICAgICAgICAgc3JjPXtkYXRhLmF2YXRhcn1cbiAgICAgICAgICAgIGFsdD17ZGF0YS50aXRsZX1cbiAgICAgICAgICAgIHZhcmlhbnQ9e2RhdGEuaGlnaGxpZ2h0ID8gJ3NxdWFyZUhpZ2hsaWdodCcgOiAnc3F1YXJlJ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQbGF5IGNsYXNzTmFtZT17YHBsYXktaWNvbiAke2RhdGEuaGlnaGxpZ2h0ID8gJ2hpZ2hsaWdodCcgOiAnJ31gfT5cbiAgICAgICAgICAgIDxQbGF5SWNvbiAvPlxuICAgICAgICAgIDwvUGxheT5cbiAgICAgICAgPC8+XG4gICAgICB9XG4gICAgPlxuICAgICAgPFdyYXBwZXJJbmZvIGhpZ2hsaWdodD17ZGF0YS5oaWdobGlnaHR9PlxuICAgICAgICA8SW5mbyBjbGFzc05hbWU9e2Ake2RhdGEuaGlnaGxpZ2h0ID8gJ2hpZ2hsaWdodCcgOiAnJ31gfT5cbiAgICAgICAgICA8aDM+e2RhdGEudGl0bGV9PC9oMz5cbiAgICAgICAgICA8cD57YXJ0aXN0TmFtZX0sIFN0YXI2aXhzZTdlbiwgTVJHLCBTd2VlejwvcD5cbiAgICAgICAgPC9JbmZvPlxuICAgICAgICB7ZGF0YS5oaWdobGlnaHQgPyA8RmVhdHVyZWRCYWRnZSBjbGFzc05hbWU9XCJiYWRnZVwiIC8+IDogbnVsbH1cbiAgICAgIDwvV3JhcHBlckluZm8+XG4gICAgPC9MaW5rPlxuICApIDogbnVsbDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/song-link/index.tsx\n'
      );

      /***/
    },
});
