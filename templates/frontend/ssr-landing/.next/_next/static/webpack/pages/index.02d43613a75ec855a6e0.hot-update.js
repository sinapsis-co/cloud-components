webpackHotUpdate_N_E('pages/index', {
  /***/ './src/components/video-link/index.tsx':
    /*!*********************************************!*\
  !*** ./src/components/video-link/index.tsx ***!
  \*********************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoLink; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var _components_icons_play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/icons/play */ "./src/components/icons/play/index.tsx");\n/* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/cover-image */ "./src/components/cover-image/index.tsx");\n/* harmony import */ var _components_featured_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/featured-badge */ "./src/components/featured-badge/index.tsx");\nvar _jsxFileName = "/Users/herni/Documents/repositories/trac/platform/frontend/ssr-artist/src/components/video-link/index.tsx";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction VideoLink({\n  data,\n  className,\n  artistName\n}) {\n  const handleClick = () => {\n    analytics.track(\'Tracpage Link Click\', {\n      artist_id: artistName,\n      category: data.type === \'embed\',\n      name: data.title\n    });\n  };\n\n  const getCode = () => {\n    var _data$url;\n\n    if (data.id) {\n      return data.id;\n    }\n\n    return (_data$url = data.url) === null || _data$url === void 0 ? void 0 : _data$url.split(\'embed/\')[1];\n  };\n\n  const getPoster = () => {\n    const code = getCode();\n    return [`https://img.youtube.com/vi/${code}/maxresdefault.jpg`, `https://img.youtube.com/vi/${code}/hqdefault.jpg`, `https://img.youtube.com/vi/${code}/mqdefault.jpg`, `https://img.youtube.com/vi/${code}/default.jpg`];\n  };\n\n  return data.title && data.url ? __jsx(StyledVideoLink, {\n    className: className ? className : \'\',\n    href: `/video/${data.id}`,\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, __jsx(WrapperImage, {\n    className: `${data.highlight ? \'highlight\' : null}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(_components_cover_image__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    src: getPoster()[0] || undefined,\n    alt: data.title,\n    variant: data.highlight ? \'squareHighlight\' : \'square\',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }), __jsx(Play, {\n    className: `play-icon ${data.highlight ? \'highlight\' : null}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(_components_icons_play__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }))), __jsx(WrapperInfo, {\n    highlight: data.highlight,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(Info, {\n    className: `${data.highlight ? \'highlight\' : null}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx("h3", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, data.title), __jsx("p", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, artistName, ", Star6ixse7en, MRG, Sweez")), data.highlight ? __jsx(_components_featured_badge__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: "badge",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 27\n    }\n  }) : null)) : null;\n}\n_c = VideoLink;\nconst StyledVideoLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({\n  displayName: "video-link__StyledVideoLink",\n  componentId: "sc-7idreb-0"\n})(["display:flex;flex-direction:column;align-items:flex-start;&.highlight{background-color:", ";grid-column:1/-1;order:-1;flex-direction:row;padding:32px;border-radius:5px;@media (max-width:", "){grid-column:1 / -1;padding:24px;flex-direction:column;justify-content:center;align-items:center;}}&:hover{.play-icon{opacity:1;}}"], ({\n  theme\n}) => theme.colors.highlightBackground, ({\n  theme\n}) => `${theme.breakpoints.laptop}px`);\n_c2 = StyledVideoLink;\nconst WrapperImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "video-link__WrapperImage",\n  componentId: "sc-7idreb-1"\n})(["padding:32px;border-radius:5px;background-color:", ";margin-bottom:24px;position:relative;max-height:288px;@media (max-width:", "){display:flex;justify-content:center;align-items:center;padding:0;}&.highlight{height:", ";padding:0;background:none;margin:0 32px 0 0;@media (max-width:", "){height:", ";margin:0 0 24px 0;height:auto;}}"], ({\n  theme\n}) => theme.colors.inputsBackground, ({\n  theme\n}) => `${theme.breakpoints.laptop}px`, ({\n  theme\n}) => theme.sizes.coverSizeHighlight, ({\n  theme\n}) => `${theme.breakpoints.laptop}px`, ({\n  theme\n}) => theme.sizes.coverSizeHighlightMobile);\n_c3 = WrapperImage;\nconst WrapperInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "video-link__WrapperInfo",\n  componentId: "sc-7idreb-2"\n})(["display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;height:100%;", ""], ({\n  highlight\n}) => highlight && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (max-width:", "){align-items:center;gap:24px;}"], ({\n  theme\n}) => `${theme.breakpoints.laptop}px`));\n_c4 = WrapperInfo;\nconst Info = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "video-link__Info",\n  componentId: "sc-7idreb-3"\n})(["text-align:left;> h3{margin:0px;color:", ";font-size:16px;font-weight:700;line-height:24px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}> p{color:", ";margin:0px;font-size:14px;font-weight:400;line-height:20px;opacity:0.7;}@media (max-width:", "){&.highlight{> h3,> p{text-align:center;}}> h3{white-space:pre-wrap;text-overflow:ellipsis;}> p{white-space:pre-wrap;overflow:hidden;text-overflow:ellipsis;}}"], ({\n  theme\n}) => theme.colors.primary, ({\n  theme\n}) => theme.colors.primary, ({\n  theme\n}) => `${theme.breakpoints.tablet}px`);\n_c5 = Info;\nconst Play = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "video-link__Play",\n  componentId: "sc-7idreb-4"\n})(["background-color:", ";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:50%;cursor:pointer;opacity:0;padding:0;overflow:hidden;transition:opacity ", ";> svg{fill:", ";transition:fill ", ";}"], ({\n  theme\n}) => theme.colors.background, ({\n  theme\n}) => `${theme.transitions.duration} ${theme.transitions.type}`, ({\n  theme\n}) => theme.colors.accent, ({\n  theme\n}) => `${theme.transitions.duration} ${theme.transitions.type}`);\n_c6 = Play;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, "VideoLink");\n$RefreshReg$(_c2, "StyledVideoLink");\n$RefreshReg$(_c3, "WrapperImage");\n$RefreshReg$(_c4, "WrapperInfo");\n$RefreshReg$(_c5, "Info");\n$RefreshReg$(_c6, "Play");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8tbGluay9pbmRleC50c3g/MWU0NCJdLCJuYW1lcyI6WyJWaWRlb0xpbmsiLCJkYXRhIiwiY2xhc3NOYW1lIiwiYXJ0aXN0TmFtZSIsImhhbmRsZUNsaWNrIiwiYW5hbHl0aWNzIiwidHJhY2siLCJhcnRpc3RfaWQiLCJjYXRlZ29yeSIsInR5cGUiLCJuYW1lIiwidGl0bGUiLCJnZXRDb2RlIiwiaWQiLCJ1cmwiLCJzcGxpdCIsImdldFBvc3RlciIsImNvZGUiLCJoaWdobGlnaHQiLCJ1bmRlZmluZWQiLCJTdHlsZWRWaWRlb0xpbmsiLCJzdHlsZWQiLCJhIiwidGhlbWUiLCJjb2xvcnMiLCJoaWdobGlnaHRCYWNrZ3JvdW5kIiwiYnJlYWtwb2ludHMiLCJsYXB0b3AiLCJXcmFwcGVySW1hZ2UiLCJkaXYiLCJpbnB1dHNCYWNrZ3JvdW5kIiwic2l6ZXMiLCJjb3ZlclNpemVIaWdobGlnaHQiLCJjb3ZlclNpemVIaWdobGlnaHRNb2JpbGUiLCJXcmFwcGVySW5mbyIsImNzcyIsIkluZm8iLCJwcmltYXJ5IiwidGFibGV0IiwiUGxheSIsImJhY2tncm91bmQiLCJ0cmFuc2l0aW9ucyIsImR1cmF0aW9uIiwiYWNjZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSWUsU0FBU0EsU0FBVCxDQUFtQjtBQUNoQ0MsTUFEZ0M7QUFFaENDLFdBRmdDO0FBR2hDQztBQUhnQyxDQUFuQixFQWNaO0FBQ0QsUUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDeEJDLGFBQVMsQ0FBQ0MsS0FBVixDQUFnQixxQkFBaEIsRUFBdUM7QUFDckNDLGVBQVMsRUFBRUosVUFEMEI7QUFFckNLLGNBQVEsRUFBRVAsSUFBSSxDQUFDUSxJQUFMLEtBQWMsT0FGYTtBQUdyQ0MsVUFBSSxFQUFFVCxJQUFJLENBQUNVO0FBSDBCLEtBQXZDO0FBS0QsR0FORDs7QUFRQSxRQUFNQyxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNwQixRQUFJWCxJQUFJLENBQUNZLEVBQVQsRUFBYTtBQUNYLGFBQU9aLElBQUksQ0FBQ1ksRUFBWjtBQUNEOztBQUVELHdCQUFPWixJQUFJLENBQUNhLEdBQVosOENBQU8sVUFBVUMsS0FBVixDQUFnQixRQUFoQixFQUEwQixDQUExQixDQUFQO0FBQ0QsR0FORDs7QUFRQSxRQUFNQyxTQUFTLEdBQUcsTUFBTTtBQUN0QixVQUFNQyxJQUFJLEdBQUdMLE9BQU8sRUFBcEI7QUFDQSxXQUFPLENBQ0osOEJBQTZCSyxJQUFLLG9CQUQ5QixFQUVKLDhCQUE2QkEsSUFBSyxnQkFGOUIsRUFHSiw4QkFBNkJBLElBQUssZ0JBSDlCLEVBSUosOEJBQTZCQSxJQUFLLGNBSjlCLENBQVA7QUFNRCxHQVJEOztBQVVBLFNBQU9oQixJQUFJLENBQUNVLEtBQUwsSUFBY1YsSUFBSSxDQUFDYSxHQUFuQixHQUNMLE1BQUMsZUFBRDtBQUNFLGFBQVMsRUFBRVosU0FBUyxHQUFHQSxTQUFILEdBQWUsRUFEckM7QUFFRSxRQUFJLEVBQUcsVUFBU0QsSUFBSSxDQUFDWSxFQUFHLEVBRjFCO0FBR0UsV0FBTyxFQUFFVCxXQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLFlBQUQ7QUFBYyxhQUFTLEVBQUcsR0FBRUgsSUFBSSxDQUFDaUIsU0FBTCxHQUFpQixXQUFqQixHQUErQixJQUFLLEVBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQ0UsT0FBRyxFQUFFRixTQUFTLEdBQUcsQ0FBSCxDQUFULElBQWtCRyxTQUR6QjtBQUVFLE9BQUcsRUFBRWxCLElBQUksQ0FBQ1UsS0FGWjtBQUdFLFdBQU8sRUFBRVYsSUFBSSxDQUFDaUIsU0FBTCxHQUFpQixpQkFBakIsR0FBcUMsUUFIaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUUsTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFHLGFBQVlqQixJQUFJLENBQUNpQixTQUFMLEdBQWlCLFdBQWpCLEdBQStCLElBQUssRUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTkYsQ0FMRixFQWVFLE1BQUMsV0FBRDtBQUFhLGFBQVMsRUFBRWpCLElBQUksQ0FBQ2lCLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBTSxhQUFTLEVBQUcsR0FBRWpCLElBQUksQ0FBQ2lCLFNBQUwsR0FBaUIsV0FBakIsR0FBK0IsSUFBSyxFQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLakIsSUFBSSxDQUFDVSxLQUFWLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlSLFVBQUosK0JBRkYsQ0FERixFQUtHRixJQUFJLENBQUNpQixTQUFMLEdBQWlCLE1BQUMsa0VBQUQ7QUFBZSxhQUFTLEVBQUMsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFqQixHQUF1RCxJQUwxRCxDQWZGLENBREssR0F3QkgsSUF4Qko7QUF5QkQ7S0FsRXVCbEIsUztBQW9FeEIsTUFBTW9CLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsQ0FBVjtBQUFBO0FBQUE7QUFBQSwwVUFNRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsbUJBTi9CLEVBWUksQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FBZ0IsR0FBRUEsS0FBSyxDQUFDRyxXQUFOLENBQWtCQyxNQUFPLElBWi9DLENBQXJCO01BQU1QLGU7QUE0Qk4sTUFBTVEsWUFBWSxHQUFHUCx5REFBTSxDQUFDUSxHQUFWO0FBQUE7QUFBQTtBQUFBLHNWQUdJLENBQUM7QUFBRU47QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhTSxnQkFIaEMsRUFRSyxDQUFDO0FBQUVQO0FBQUYsQ0FBRCxLQUFnQixHQUFFQSxLQUFLLENBQUNHLFdBQU4sQ0FBa0JDLE1BQU8sSUFSaEQsRUFnQkosQ0FBQztBQUFFSjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDUSxLQUFOLENBQVlDLGtCQWhCdkIsRUFvQk8sQ0FBQztBQUFFVDtBQUFGLENBQUQsS0FBZ0IsR0FBRUEsS0FBSyxDQUFDRyxXQUFOLENBQWtCQyxNQUFPLElBcEJsRCxFQXFCRixDQUFDO0FBQUVKO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNRLEtBQU4sQ0FBWUUsd0JBckJ6QixDQUFsQjtNQUFNTCxZO0FBNEJOLE1BQU1NLFdBQVcsR0FBR2IseURBQU0sQ0FBQ1EsR0FBVjtBQUFBO0FBQUE7QUFBQSxpSEFPYixDQUFDO0FBQUVYO0FBQUYsQ0FBRCxLQUNBQSxTQUFTLElBQ1RpQiw2REFEUyw0REFFYyxDQUFDO0FBQUVaO0FBQUYsQ0FBRCxLQUFnQixHQUFFQSxLQUFLLENBQUNHLFdBQU4sQ0FBa0JDLE1BQU8sSUFGekQsQ0FSSSxDQUFqQjtNQUFNTyxXO0FBaUJOLE1BQU1FLElBQUksR0FBR2YseURBQU0sQ0FBQ1EsR0FBVjtBQUFBO0FBQUE7QUFBQSxzY0FLRyxDQUFDO0FBQUVOO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYWEsT0FML0IsRUFnQkcsQ0FBQztBQUFFZDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFhLE9BaEIvQixFQXdCYSxDQUFDO0FBQUVkO0FBQUYsQ0FBRCxLQUFnQixHQUFFQSxLQUFLLENBQUNHLFdBQU4sQ0FBa0JZLE1BQU8sSUF4QnhELENBQVY7TUFBTUYsSTtBQTZDTixNQUFNRyxJQUFJLEdBQUdsQix5REFBTSxDQUFDUSxHQUFWO0FBQUE7QUFBQTtBQUFBLGtUQUNZLENBQUM7QUFBRU47QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhZ0IsVUFEeEMsRUFpQkosQ0FBQztBQUFFakI7QUFBRixDQUFELEtBQWdCLEdBQUVBLEtBQUssQ0FBQ2tCLFdBQU4sQ0FBa0JDLFFBQVMsSUFBR25CLEtBQUssQ0FBQ2tCLFdBQU4sQ0FBa0JoQyxJQUFLLEVBakJuRSxFQW9CRSxDQUFDO0FBQUVjO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYW1CLE1BcEI5QixFQXNCRixDQUFDO0FBQUVwQjtBQUFGLENBQUQsS0FDQyxHQUFFQSxLQUFLLENBQUNrQixXQUFOLENBQWtCQyxRQUFTLElBQUduQixLQUFLLENBQUNrQixXQUFOLENBQWtCaEMsSUFBSyxFQXZCdEQsQ0FBVjtNQUFNOEIsSSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3ZpZGVvLWxpbmsvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBQbGF5SWNvbiBmcm9tICdAY29tcG9uZW50cy9pY29ucy9wbGF5JztcbmltcG9ydCBDb3ZlckltYWdlIGZyb20gJ0Bjb21wb25lbnRzL2NvdmVyLWltYWdlJztcbmltcG9ydCBGZWF0dXJlZEJhZGdlIGZyb20gJ0Bjb21wb25lbnRzL2ZlYXR1cmVkLWJhZGdlJztcblxuaW1wb3J0IHsgVHJhY1BhZ2VMaW5rVHlwZSB9IGZyb20gJ0BzZXJ2aWNlcy90cmFjcGFnZS90eXBlcy90cmFjLXBhZ2UtbGluay10eXBlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlkZW9MaW5rKHtcbiAgZGF0YSxcbiAgY2xhc3NOYW1lLFxuICBhcnRpc3ROYW1lLFxufToge1xuICBkYXRhOiB7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgdXJsPzogc3RyaW5nO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGhpZ2hsaWdodD86IGJvb2xlYW47XG4gICAgdHlwZT86IFRyYWNQYWdlTGlua1R5cGU7XG4gIH07XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgYXJ0aXN0TmFtZT86IHN0cmluZyB8IG51bGw7XG59KSB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGFuYWx5dGljcy50cmFjaygnVHJhY3BhZ2UgTGluayBDbGljaycsIHtcbiAgICAgIGFydGlzdF9pZDogYXJ0aXN0TmFtZSxcbiAgICAgIGNhdGVnb3J5OiBkYXRhLnR5cGUgPT09ICdlbWJlZCcsXG4gICAgICBuYW1lOiBkYXRhLnRpdGxlLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldENvZGUgPSAoKSA9PiB7XG4gICAgaWYgKGRhdGEuaWQpIHtcbiAgICAgIHJldHVybiBkYXRhLmlkO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLnVybD8uc3BsaXQoJ2VtYmVkLycpWzFdO1xuICB9O1xuXG4gIGNvbnN0IGdldFBvc3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb2RlID0gZ2V0Q29kZSgpO1xuICAgIHJldHVybiBbXG4gICAgICBgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtjb2RlfS9tYXhyZXNkZWZhdWx0LmpwZ2AsXG4gICAgICBgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtjb2RlfS9ocWRlZmF1bHQuanBnYCxcbiAgICAgIGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke2NvZGV9L21xZGVmYXVsdC5qcGdgLFxuICAgICAgYGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7Y29kZX0vZGVmYXVsdC5qcGdgLFxuICAgIF07XG4gIH07XG5cbiAgcmV0dXJuIGRhdGEudGl0bGUgJiYgZGF0YS51cmwgPyAoXG4gICAgPFN0eWxlZFZpZGVvTGlua1xuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJ31cbiAgICAgIGhyZWY9e2AvdmlkZW8vJHtkYXRhLmlkfWB9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICA+XG4gICAgICA8V3JhcHBlckltYWdlIGNsYXNzTmFtZT17YCR7ZGF0YS5oaWdobGlnaHQgPyAnaGlnaGxpZ2h0JyA6IG51bGx9YH0+XG4gICAgICAgIDxDb3ZlckltYWdlXG4gICAgICAgICAgc3JjPXtnZXRQb3N0ZXIoKVswXSB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgYWx0PXtkYXRhLnRpdGxlfVxuICAgICAgICAgIHZhcmlhbnQ9e2RhdGEuaGlnaGxpZ2h0ID8gJ3NxdWFyZUhpZ2hsaWdodCcgOiAnc3F1YXJlJ31cbiAgICAgICAgLz5cbiAgICAgICAgPFBsYXkgY2xhc3NOYW1lPXtgcGxheS1pY29uICR7ZGF0YS5oaWdobGlnaHQgPyAnaGlnaGxpZ2h0JyA6IG51bGx9YH0+XG4gICAgICAgICAgPFBsYXlJY29uIC8+XG4gICAgICAgIDwvUGxheT5cbiAgICAgIDwvV3JhcHBlckltYWdlPlxuICAgICAgPFdyYXBwZXJJbmZvIGhpZ2hsaWdodD17ZGF0YS5oaWdobGlnaHR9PlxuICAgICAgICA8SW5mbyBjbGFzc05hbWU9e2Ake2RhdGEuaGlnaGxpZ2h0ID8gJ2hpZ2hsaWdodCcgOiBudWxsfWB9PlxuICAgICAgICAgIDxoMz57ZGF0YS50aXRsZX08L2gzPlxuICAgICAgICAgIDxwPnthcnRpc3ROYW1lfSwgU3RhcjZpeHNlN2VuLCBNUkcsIFN3ZWV6PC9wPlxuICAgICAgICA8L0luZm8+XG4gICAgICAgIHtkYXRhLmhpZ2hsaWdodCA/IDxGZWF0dXJlZEJhZGdlIGNsYXNzTmFtZT1cImJhZGdlXCIgLz4gOiBudWxsfVxuICAgICAgPC9XcmFwcGVySW5mbz5cbiAgICA8L1N0eWxlZFZpZGVvTGluaz5cbiAgKSA6IG51bGw7XG59XG5cbmNvbnN0IFN0eWxlZFZpZGVvTGluayA9IHN0eWxlZC5hYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAmLmhpZ2hsaWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuaGlnaGxpZ2h0QmFja2dyb3VuZH07XG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gICAgb3JkZXI6IC0xO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMubGFwdG9wfXB4YH0pIHtcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICAucGxheS1pY29uIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBXcmFwcGVySW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmlucHV0c0JhY2tncm91bmR9O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDI4OHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLmJyZWFrcG9pbnRzLmxhcHRvcH1weGB9KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAmLmhpZ2hsaWdodCB7XG4gICAgaGVpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNpemVzLmNvdmVyU2l6ZUhpZ2hsaWdodH07XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1hcmdpbjogMCAzMnB4IDAgMDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5icmVha3BvaW50cy5sYXB0b3B9cHhgfSkge1xuICAgICAgaGVpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNpemVzLmNvdmVyU2l6ZUhpZ2hsaWdodE1vYmlsZX07XG4gICAgICBtYXJnaW46IDAgMCAyNHB4IDA7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBXcmFwcGVySW5mbyA9IHN0eWxlZC5kaXY8eyBoaWdobGlnaHQ/OiBib29sZWFuIH0+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgJHsoeyBoaWdobGlnaHQgfSkgPT5cbiAgICBoaWdobGlnaHQgJiZcbiAgICBjc3NgXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5icmVha3BvaW50cy5sYXB0b3B9cHhgfSkge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDI0cHg7XG4gICAgICB9XG4gICAgYH1cbmA7XG5cbmNvbnN0IEluZm8gPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gID4gaDMge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgPiBwIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMudGFibGV0fXB4YH0pIHtcbiAgICAmLmhpZ2hsaWdodCB7XG4gICAgICA+IGgzLFxuICAgICAgPiBwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgID4gaDMge1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgPiBwIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFBsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5XG4gICAgJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbn0gJHt0aGVtZS50cmFuc2l0aW9ucy50eXBlfWB9O1xuXG4gID4gc3ZnIHtcbiAgICBmaWxsOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnR9O1xuICAgIHRyYW5zaXRpb246IGZpbGxcbiAgICAgICR7KHsgdGhlbWUgfSkgPT5cbiAgICAgICAgYCR7dGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb259ICR7dGhlbWUudHJhbnNpdGlvbnMudHlwZX1gfTtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/video-link/index.tsx\n'
      );

      /***/
    },
});
