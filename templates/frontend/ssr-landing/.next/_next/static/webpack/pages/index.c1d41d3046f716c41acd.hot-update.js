webpackHotUpdate_N_E('pages/index', {
  /***/ './src/components/video-link/index.tsx':
    /*!*********************************************!*\
  !*** ./src/components/video-link/index.tsx ***!
  \*********************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoLink; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var _components_icons_play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/icons/play */ "./src/components/icons/play/index.tsx");\n/* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/cover-image */ "./src/components/cover-image/index.tsx");\n/* harmony import */ var _components_featured_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/featured-badge */ "./src/components/featured-badge/index.tsx");\nvar _jsxFileName = "/Users/herni/Documents/repositories/trac/platform/frontend/ssr-artist/src/components/video-link/index.tsx";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction VideoLink({\n  data,\n  className,\n  artistName\n}) {\n  const handleClick = () => {\n    analytics.track(\'Tracpage Link Click\', {\n      artist_id: artistName,\n      category: data.type === \'embed\',\n      name: data.title\n    });\n  };\n\n  const getCode = () => {\n    var _data$url;\n\n    if (data.id) {\n      return data.id;\n    }\n\n    return (_data$url = data.url) === null || _data$url === void 0 ? void 0 : _data$url.split(\'embed/\')[1];\n  };\n\n  const getPoster = () => {\n    const code = getCode();\n    return [`https://img.youtube.com/vi/${code}/maxresdefault.jpg`, `https://img.youtube.com/vi/${code}/hqdefault.jpg`, `https://img.youtube.com/vi/${code}/mqdefault.jpg`, `https://img.youtube.com/vi/${code}/default.jpg`];\n  };\n\n  return data.title && data.url ? __jsx(StyledVideoLink, {\n    className: className ? className : \'\',\n    href: `/video/${data.id}`,\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, __jsx(WrapperImage, {\n    className: `${data.highlight ? \'highlight\' : null}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(_components_cover_image__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    src: getPoster()[0] || undefined,\n    alt: data.title,\n    variant: data.highlight ? \'squareHighlight\' : \'square\',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }), __jsx(Play, {\n    className: `play-icon ${data.highlight ? \'highlight\' : null}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(_components_icons_play__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }))), __jsx(WrapperInfo, {\n    highlight: data.highlight,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(Info, {\n    className: `${data.highlight ? \'highlight\' : null}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx("h3", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, data.title), __jsx("p", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, artistName, ", Star6ixse7en, MRG, Sweez")), data.highlight ? __jsx(_components_featured_badge__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: "badge",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 27\n    }\n  }) : null)) : null;\n}\n_c = VideoLink;\nconst StyledVideoLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({\n  displayName: "video-link__StyledVideoLink",\n  componentId: "sc-7idreb-0"\n})(["display:flex;flex-direction:column;align-items:flex-start;gap:24px;@media (max-width:", "){gap:12px;}&.highlight{background-color:", ";grid-column:1/-1;order:-1;flex-direction:row;padding:32px;border-radius:5px;@media (max-width:", "){grid-column:1 / -1;padding:24px;flex-direction:column;justify-content:center;align-items:center;}}&:hover{.play-icon{opacity:1;}}"], ({\n  theme\n}) => `${theme.breakpoints.laptop}px`, ({\n  theme\n}) => theme.colors.highlightBackground, ({\n  theme\n}) => `${theme.breakpoints.laptop}px`);\n_c2 = StyledVideoLink;\nconst WrapperImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "video-link__WrapperImage",\n  componentId: "sc-7idreb-1"\n})(["padding:32px;border-radius:5px;background-color:", ";position:relative;max-height:288px;&:hover{background-color:", ";}@media (max-width:", "){display:flex;justify-content:center;align-items:center;padding:0;}&.highlight{height:", ";padding:0;background:none;margin:0 32px 0 0;@media (max-width:", "){height:", ";margin:0 0 24px 0;height:auto;}}"], ({\n  theme\n}) => theme.colors.itemBackground, ({\n  theme\n}) => theme.colors.itemBackgroundHover, ({\n  theme\n}) => `${theme.breakpoints.laptop}px`, ({\n  theme\n}) => theme.sizes.coverSizeHighlight, ({\n  theme\n}) => `${theme.breakpoints.laptop}px`, ({\n  theme\n}) => theme.sizes.coverSizeHighlightMobile);\n_c3 = WrapperImage;\nconst WrapperInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "video-link__WrapperInfo",\n  componentId: "sc-7idreb-2"\n})(["display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;height:100%;", ""], ({\n  highlight\n}) => highlight && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (max-width:", "){align-items:center;gap:24px;}"], ({\n  theme\n}) => `${theme.breakpoints.laptop}px`));\n_c4 = WrapperInfo;\nconst Info = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "video-link__Info",\n  componentId: "sc-7idreb-3"\n})(["text-align:left;> h3{margin:0px;color:", ";font-size:16px;font-weight:700;line-height:24px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}> p{color:", ";margin:0px;font-size:14px;font-weight:400;line-height:20px;opacity:0.7;}@media (max-width:", "){&.highlight{> h3,> p{text-align:center;}}> h3{white-space:pre-wrap;text-overflow:ellipsis;}> p{white-space:pre-wrap;overflow:hidden;text-overflow:ellipsis;}}"], ({\n  theme\n}) => theme.colors.primary, ({\n  theme\n}) => theme.colors.primary, ({\n  theme\n}) => `${theme.breakpoints.tablet}px`);\n_c5 = Info;\nconst Play = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "video-link__Play",\n  componentId: "sc-7idreb-4"\n})(["background-color:", ";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:50%;cursor:pointer;opacity:0;padding:0;overflow:hidden;transition:opacity ", ";> svg{fill:", ";transition:fill ", ";}"], ({\n  theme\n}) => theme.colors.background, ({\n  theme\n}) => `${theme.transitions.duration} ${theme.transitions.type}`, ({\n  theme\n}) => theme.colors.accent, ({\n  theme\n}) => `${theme.transitions.duration} ${theme.transitions.type}`);\n_c6 = Play;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, "VideoLink");\n$RefreshReg$(_c2, "StyledVideoLink");\n$RefreshReg$(_c3, "WrapperImage");\n$RefreshReg$(_c4, "WrapperInfo");\n$RefreshReg$(_c5, "Info");\n$RefreshReg$(_c6, "Play");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8tbGluay9pbmRleC50c3g/MWU0NCJdLCJuYW1lcyI6WyJWaWRlb0xpbmsiLCJkYXRhIiwiY2xhc3NOYW1lIiwiYXJ0aXN0TmFtZSIsImhhbmRsZUNsaWNrIiwiYW5hbHl0aWNzIiwidHJhY2siLCJhcnRpc3RfaWQiLCJjYXRlZ29yeSIsInR5cGUiLCJuYW1lIiwidGl0bGUiLCJnZXRDb2RlIiwiaWQiLCJ1cmwiLCJzcGxpdCIsImdldFBvc3RlciIsImNvZGUiLCJoaWdobGlnaHQiLCJ1bmRlZmluZWQiLCJTdHlsZWRWaWRlb0xpbmsiLCJzdHlsZWQiLCJhIiwidGhlbWUiLCJicmVha3BvaW50cyIsImxhcHRvcCIsImNvbG9ycyIsImhpZ2hsaWdodEJhY2tncm91bmQiLCJXcmFwcGVySW1hZ2UiLCJkaXYiLCJpdGVtQmFja2dyb3VuZCIsIml0ZW1CYWNrZ3JvdW5kSG92ZXIiLCJzaXplcyIsImNvdmVyU2l6ZUhpZ2hsaWdodCIsImNvdmVyU2l6ZUhpZ2hsaWdodE1vYmlsZSIsIldyYXBwZXJJbmZvIiwiY3NzIiwiSW5mbyIsInByaW1hcnkiLCJ0YWJsZXQiLCJQbGF5IiwiYmFja2dyb3VuZCIsInRyYW5zaXRpb25zIiwiZHVyYXRpb24iLCJhY2NlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFJZSxTQUFTQSxTQUFULENBQW1CO0FBQ2hDQyxNQURnQztBQUVoQ0MsV0FGZ0M7QUFHaENDO0FBSGdDLENBQW5CLEVBY1o7QUFDRCxRQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUN4QkMsYUFBUyxDQUFDQyxLQUFWLENBQWdCLHFCQUFoQixFQUF1QztBQUNyQ0MsZUFBUyxFQUFFSixVQUQwQjtBQUVyQ0ssY0FBUSxFQUFFUCxJQUFJLENBQUNRLElBQUwsS0FBYyxPQUZhO0FBR3JDQyxVQUFJLEVBQUVULElBQUksQ0FBQ1U7QUFIMEIsS0FBdkM7QUFLRCxHQU5E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RixDQUFELEtBQWdCLEdBQUVBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQmUsTUFBTyxJQXhCeEQsQ0FBVjtNQUFNRixJO0FBNkNOLE1BQU1HLElBQUksR0FBR25CLHlEQUFNLENBQUNRLEdBQVY7QUFBQTtBQUFBO0FBQUEsa1RBQ1ksQ0FBQztBQUFFTjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDRyxNQUFOLENBQWFlLFVBRHhDLEVBaUJKLENBQUM7QUFBRWxCO0FBQUYsQ0FBRCxLQUFnQixHQUFFQSxLQUFLLENBQUNtQixXQUFOLENBQWtCQyxRQUFTLElBQUdwQixLQUFLLENBQUNtQixXQUFOLENBQWtCakMsSUFBSyxFQWpCbkUsRUFvQkUsQ0FBQztBQUFFYztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDRyxNQUFOLENBQWFrQixNQXBCOUIsRUFzQkYsQ0FBQztBQUFFckI7QUFBRixDQUFELEtBQ0MsR0FBRUEsS0FBSyxDQUFDbUIsV0FBTixDQUFrQkMsUUFBUyxJQUFHcEIsS0FBSyxDQUFDbUIsV0FBTixDQUFrQmpDLElBQUssRUF2QnRELENBQVY7TUFBTStCLEkiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy92aWRlby1saW5rL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgUGxheUljb24gZnJvbSAnQGNvbXBvbmVudHMvaWNvbnMvcGxheSc7XG5pbXBvcnQgQ292ZXJJbWFnZSBmcm9tICdAY29tcG9uZW50cy9jb3Zlci1pbWFnZSc7XG5pbXBvcnQgRmVhdHVyZWRCYWRnZSBmcm9tICdAY29tcG9uZW50cy9mZWF0dXJlZC1iYWRnZSc7XG5cbmltcG9ydCB7IFRyYWNQYWdlTGlua1R5cGUgfSBmcm9tICdAc2VydmljZXMvdHJhY3BhZ2UvdHlwZXMvdHJhYy1wYWdlLWxpbmstdHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvTGluayh7XG4gIGRhdGEsXG4gIGNsYXNzTmFtZSxcbiAgYXJ0aXN0TmFtZSxcbn06IHtcbiAgZGF0YToge1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZztcbiAgICBpZD86IHN0cmluZztcbiAgICBoaWdobGlnaHQ/OiBib29sZWFuO1xuICAgIHR5cGU/OiBUcmFjUGFnZUxpbmtUeXBlO1xuICB9O1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGFydGlzdE5hbWU/OiBzdHJpbmcgfCBudWxsO1xufSkge1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBhbmFseXRpY3MudHJhY2soJ1RyYWNwYWdlIExpbmsgQ2xpY2snLCB7XG4gICAgICBhcnRpc3RfaWQ6IGFydGlzdE5hbWUsXG4gICAgICBjYXRlZ29yeTogZGF0YS50eXBlID09PSAnZW1iZWQnLFxuICAgICAgbmFtZTogZGF0YS50aXRsZSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRDb2RlID0gKCkgPT4ge1xuICAgIGlmIChkYXRhLmlkKSB7XG4gICAgICByZXR1cm4gZGF0YS5pZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS51cmw/LnNwbGl0KCdlbWJlZC8nKVsxXTtcbiAgfTtcblxuICBjb25zdCBnZXRQb3N0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29kZSA9IGdldENvZGUoKTtcbiAgICByZXR1cm4gW1xuICAgICAgYGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7Y29kZX0vbWF4cmVzZGVmYXVsdC5qcGdgLFxuICAgICAgYGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7Y29kZX0vaHFkZWZhdWx0LmpwZ2AsXG4gICAgICBgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtjb2RlfS9tcWRlZmF1bHQuanBnYCxcbiAgICAgIGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke2NvZGV9L2RlZmF1bHQuanBnYCxcbiAgICBdO1xuICB9O1xuXG4gIHJldHVybiBkYXRhLnRpdGxlICYmIGRhdGEudXJsID8gKFxuICAgIDxTdHlsZWRWaWRlb0xpbmtcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyd9XG4gICAgICBocmVmPXtgL3ZpZGVvLyR7ZGF0YS5pZH1gfVxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgPlxuICAgICAgPFdyYXBwZXJJbWFnZSBjbGFzc05hbWU9e2Ake2RhdGEuaGlnaGxpZ2h0ID8gJ2hpZ2hsaWdodCcgOiBudWxsfWB9PlxuICAgICAgICA8Q292ZXJJbWFnZVxuICAgICAgICAgIHNyYz17Z2V0UG9zdGVyKClbMF0gfHwgdW5kZWZpbmVkfVxuICAgICAgICAgIGFsdD17ZGF0YS50aXRsZX1cbiAgICAgICAgICB2YXJpYW50PXtkYXRhLmhpZ2hsaWdodCA/ICdzcXVhcmVIaWdobGlnaHQnIDogJ3NxdWFyZSd9XG4gICAgICAgIC8+XG4gICAgICAgIDxQbGF5IGNsYXNzTmFtZT17YHBsYXktaWNvbiAke2RhdGEuaGlnaGxpZ2h0ID8gJ2hpZ2hsaWdodCcgOiBudWxsfWB9PlxuICAgICAgICAgIDxQbGF5SWNvbiAvPlxuICAgICAgICA8L1BsYXk+XG4gICAgICA8L1dyYXBwZXJJbWFnZT5cbiAgICAgIDxXcmFwcGVySW5mbyBoaWdobGlnaHQ9e2RhdGEuaGlnaGxpZ2h0fT5cbiAgICAgICAgPEluZm8gY2xhc3NOYW1lPXtgJHtkYXRhLmhpZ2hsaWdodCA/ICdoaWdobGlnaHQnIDogbnVsbH1gfT5cbiAgICAgICAgICA8aDM+e2RhdGEudGl0bGV9PC9oMz5cbiAgICAgICAgICA8cD57YXJ0aXN0TmFtZX0sIFN0YXI2aXhzZTdlbiwgTVJHLCBTd2VlejwvcD5cbiAgICAgICAgPC9JbmZvPlxuICAgICAgICB7ZGF0YS5oaWdobGlnaHQgPyA8RmVhdHVyZWRCYWRnZSBjbGFzc05hbWU9XCJiYWRnZVwiIC8+IDogbnVsbH1cbiAgICAgIDwvV3JhcHBlckluZm8+XG4gICAgPC9TdHlsZWRWaWRlb0xpbms+XG4gICkgOiBudWxsO1xufVxuXG5jb25zdCBTdHlsZWRWaWRlb0xpbmsgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMjRweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5icmVha3BvaW50cy5sYXB0b3B9cHhgfSkge1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gICYuaGlnaGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5oaWdobGlnaHRCYWNrZ3JvdW5kfTtcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcbiAgICBvcmRlcjogLTE7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5icmVha3BvaW50cy5sYXB0b3B9cHhgfSkge1xuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIC5wbGF5LWljb24ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFdyYXBwZXJJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuaXRlbUJhY2tncm91bmR9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDI4OHB4O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLml0ZW1CYWNrZ3JvdW5kSG92ZXJ9O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMubGFwdG9wfXB4YH0pIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gICYuaGlnaGxpZ2h0IHtcbiAgICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2l6ZXMuY292ZXJTaXplSGlnaGxpZ2h0fTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWFyZ2luOiAwIDMycHggMCAwO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLmJyZWFrcG9pbnRzLmxhcHRvcH1weGB9KSB7XG4gICAgICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2l6ZXMuY292ZXJTaXplSGlnaGxpZ2h0TW9iaWxlfTtcbiAgICAgIG1hcmdpbjogMCAwIDI0cHggMDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFdyYXBwZXJJbmZvID0gc3R5bGVkLmRpdjx7IGhpZ2hsaWdodD86IGJvb2xlYW4gfT5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogMTAwJTtcblxuICAkeyh7IGhpZ2hsaWdodCB9KSA9PlxuICAgIGhpZ2hsaWdodCAmJlxuICAgIGNzc2BcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLmJyZWFrcG9pbnRzLmxhcHRvcH1weGB9KSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMjRweDtcbiAgICAgIH1cbiAgICBgfVxuYDtcblxuY29uc3QgSW5mbyA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgPiBoMyB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICA+IHAge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5icmVha3BvaW50cy50YWJsZXR9cHhgfSkge1xuICAgICYuaGlnaGxpZ2h0IHtcbiAgICAgID4gaDMsXG4gICAgICA+IHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgPiBoMyB7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICA+IHAge1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUGxheSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHlcbiAgICAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9ufSAke3RoZW1lLnRyYW5zaXRpb25zLnR5cGV9YH07XG5cbiAgPiBzdmcge1xuICAgIGZpbGw6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudH07XG4gICAgdHJhbnNpdGlvbjogZmlsbFxuICAgICAgJHsoeyB0aGVtZSB9KSA9PlxuICAgICAgICBgJHt0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbn0gJHt0aGVtZS50cmFuc2l0aW9ucy50eXBlfWB9O1xuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/video-link/index.tsx\n'
      );

      /***/
    },
});
