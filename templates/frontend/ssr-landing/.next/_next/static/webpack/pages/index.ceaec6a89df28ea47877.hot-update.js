webpackHotUpdate_N_E('pages/index', {
  /***/ './src/components/song-link/index.tsx':
    /*!********************************************!*\
  !*** ./src/components/song-link/index.tsx ***!
  \********************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SongLink; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var _components_icons_play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/icons/play */ "./src/components/icons/play/index.tsx");\n/* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/cover-image */ "./src/components/cover-image/index.tsx");\n/* harmony import */ var _components_featured_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/featured-badge */ "./src/components/featured-badge/index.tsx");\nvar _jsxFileName = "/Users/herni/Documents/repositories/trac/platform/frontend/ssr-artist/src/components/song-link/index.tsx";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction SongLink({\n  data,\n  className,\n  artistName\n}) {\n  const handleClick = () => {\n    analytics.track(\'Tracpage Link Click\', {\n      artist_id: artistName,\n      category: data.type === \'traclink\' ? \'Release\' : \'Url\',\n      name: data.title\n    });\n  };\n\n  return data.title && data.url ? __jsx(StyledSongLink, {\n    className: className ? className : \'\',\n    href: `/music${data.url}`,\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(WrapperImage, {\n    className: `${data.highlight ? \'highlight\' : null}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(_components_cover_image__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    src: data.avatar,\n    alt: data.title,\n    variant: data.highlight ? \'squareHighlight\' : \'square\',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }), __jsx(Play, {\n    className: `play-icon ${data.highlight ? \'highlight\' : null}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(_components_icons_play__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }))), __jsx(WrapperInfo, {\n    highlight: data.highlight,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(Info, {\n    className: `${data.highlight ? \'highlight\' : null}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx("h3", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, data.title), __jsx("p", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, artistName, ", Star6ixse7en, MRG, Sweez")), data.highlight ? __jsx(_components_featured_badge__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: "badge",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 27\n    }\n  }) : null)) : null;\n}\n_c = SongLink;\nconst StyledSongLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({\n  displayName: "song-link__StyledSongLink",\n  componentId: "sc-1wye2kl-0"\n})(["display:flex;flex-direction:column;align-items:flex-start;gap:24px;@media (max-width:", "){gap:12px;}&.highlight{background-color:", ";grid-column:1/-1;order:-1;flex-direction:row;padding:32px;border-radius:5px;@media (max-width:", "){grid-column:1 / -1;padding:24px;flex-direction:column;justify-content:center;align-items:center;}}&:hover{.play-icon{opacity:1;}}"], ({\n  theme\n}) => `${theme.breakpoints.laptop}px`, ({\n  theme\n}) => theme.colors.highlightBackground, ({\n  theme\n}) => `${theme.breakpoints.laptop}px`);\n_c2 = StyledSongLink;\nconst WrapperImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "song-link__WrapperImage",\n  componentId: "sc-1wye2kl-1"\n})(["padding:32px;border-radius:5px;background-color:", ";position:relative;max-height:288px;transition:background-color ", ";&:hover{background-color:", ";}@media (max-width:", "){display:flex;justify-content:center;align-items:center;padding:0;}&.highlight{height:", ";padding:0;background:none;margin:0 32px 0 0;@media (max-width:", "){height:", ";margin:0 0 24px 0;height:auto;}}"], ({\n  theme\n}) => theme.colors.itemBackground, ({\n  theme\n}) => `${theme.transitions.duration} ${theme.transitions.type}`, ({\n  theme\n}) => theme.colors.itemBackgroundHover, ({\n  theme\n}) => `${theme.breakpoints.laptop}px`, ({\n  theme\n}) => theme.sizes.coverSizeHighlight, ({\n  theme\n}) => `${theme.breakpoints.laptop}px`, ({\n  theme\n}) => theme.sizes.coverSizeHighlightMobile);\n_c3 = WrapperImage;\nconst WrapperInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "song-link__WrapperInfo",\n  componentId: "sc-1wye2kl-2"\n})(["display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;height:100%;", ""], ({\n  highlight\n}) => highlight && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (max-width:", "){align-items:center;gap:24px;}"], ({\n  theme\n}) => `${theme.breakpoints.laptop}px`));\n_c4 = WrapperInfo;\nconst Info = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "song-link__Info",\n  componentId: "sc-1wye2kl-3"\n})(["text-align:left;> h3{margin:0px;color:", ";font-size:16px;font-weight:700;line-height:24px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}> p{color:", ";margin:0px;font-size:14px;font-weight:400;line-height:20px;opacity:0.7;}@media (max-width:", "){&.highlight{> h3,> p{text-align:center;}}> h3{white-space:pre-wrap;text-overflow:ellipsis;}> p{white-space:pre-wrap;overflow:hidden;text-overflow:ellipsis;}}"], ({\n  theme\n}) => theme.colors.primary, ({\n  theme\n}) => theme.colors.primary, ({\n  theme\n}) => `${theme.breakpoints.tablet}px`);\n_c5 = Info;\nconst Play = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "song-link__Play",\n  componentId: "sc-1wye2kl-4"\n})(["background-color:", ";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:50%;cursor:pointer;opacity:0;padding:0;overflow:hidden;transition:opacity ", ";> svg{fill:", ";transition:fill ", ";}"], ({\n  theme\n}) => theme.colors.background, ({\n  theme\n}) => `${theme.transitions.duration} ${theme.transitions.type}`, ({\n  theme\n}) => theme.colors.accent, ({\n  theme\n}) => `${theme.transitions.duration} ${theme.transitions.type}`);\n_c6 = Play;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, "SongLink");\n$RefreshReg$(_c2, "StyledSongLink");\n$RefreshReg$(_c3, "WrapperImage");\n$RefreshReg$(_c4, "WrapperInfo");\n$RefreshReg$(_c5, "Info");\n$RefreshReg$(_c6, "Play");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc29uZy1saW5rL2luZGV4LnRzeD80OGJlIl0sIm5hbWVzIjpbIlNvbmdMaW5rIiwiZGF0YSIsImNsYXNzTmFtZSIsImFydGlzdE5hbWUiLCJoYW5kbGVDbGljayIsImFuYWx5dGljcyIsInRyYWNrIiwiYXJ0aXN0X2lkIiwiY2F0ZWdvcnkiLCJ0eXBlIiwibmFtZSIsInRpdGxlIiwidXJsIiwiaGlnaGxpZ2h0IiwiYXZhdGFyIiwiU3R5bGVkU29uZ0xpbmsiLCJzdHlsZWQiLCJhIiwidGhlbWUiLCJicmVha3BvaW50cyIsImxhcHRvcCIsImNvbG9ycyIsImhpZ2hsaWdodEJhY2tncm91bmQiLCJXcmFwcGVySW1hZ2UiLCJkaXYiLCJpdGVtQmFja2dyb3VuZCIsInRyYW5zaXRpb25zIiwiZHVyYXRpb24iLCJpdGVtQmFja2dyb3VuZEhvdmVyIiwic2l6ZXMiLCJjb3ZlclNpemVIaWdobGlnaHQiLCJjb3ZlclNpemVIaWdobGlnaHRNb2JpbGUiLCJXcmFwcGVySW5mbyIsImNzcyIsIkluZm8iLCJwcmltYXJ5IiwidGFibGV0IiwiUGxheSIsImJhY2tncm91bmQiLCJhY2NlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFJZSxTQUFTQSxRQUFULENBQWtCO0FBQy9CQyxNQUQrQjtBQUUvQkMsV0FGK0I7QUFHL0JDO0FBSCtCLENBQWxCLEVBUVo7QUFDRCxRQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUN4QkMsYUFBUyxDQUFDQyxLQUFWLENBQWdCLHFCQUFoQixFQUF1QztBQUNyQ0MsZUFBUyxFQUFFSixVQUQwQjtBQUVyQ0ssY0FBUSxFQUFFUCxJQUFJLENBQUNRLElBQUwsS0FBYyxVQUFkLEdBQTJCLFNBQTNCLEdBQXVDLEtBRlo7QUFHckNDLFVBQUksRUFBRVQsSUFBSSxDQUFDVTtBQUgwQixLQUF2QztBQUtELEdBTkQ7O0FBUUEsU0FBT1YsSUFBSSxDQUFDVSxL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QUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDRyxNQUFOLENBQWFrQixNQXBCOUIsRUFzQkYsQ0FBQztBQUFFckI7QUFBRixDQUFELEtBQ0MsR0FBRUEsS0FBSyxDQUFDUSxXQUFOLENBQWtCQyxRQUFTLElBQUdULEtBQUssQ0FBQ1EsV0FBTixDQUFrQmpCLElBQUssRUF2QnRELENBQVY7TUFBTTRCLEkiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zb25nLWxpbmsvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBQbGF5SWNvbiBmcm9tICdAY29tcG9uZW50cy9pY29ucy9wbGF5JztcbmltcG9ydCBDb3ZlckltYWdlIGZyb20gJ0Bjb21wb25lbnRzL2NvdmVyLWltYWdlJztcbmltcG9ydCBGZWF0dXJlZEJhZGdlIGZyb20gJ0Bjb21wb25lbnRzL2ZlYXR1cmVkLWJhZGdlJztcblxuaW1wb3J0IHsgVHJhY1BhZ2VMaW5rIH0gZnJvbSAnQHNlcnZpY2VzL3RyYWNwYWdlL3R5cGVzL3RyYWMtcGFnZS1saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29uZ0xpbmsoe1xuICBkYXRhLFxuICBjbGFzc05hbWUsXG4gIGFydGlzdE5hbWUsXG59OiB7XG4gIGRhdGE6IFRyYWNQYWdlTGluaztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBhcnRpc3ROYW1lPzogc3RyaW5nIHwgbnVsbDtcbn0pIHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgYW5hbHl0aWNzLnRyYWNrKCdUcmFjcGFnZSBMaW5rIENsaWNrJywge1xuICAgICAgYXJ0aXN0X2lkOiBhcnRpc3ROYW1lLFxuICAgICAgY2F0ZWdvcnk6IGRhdGEudHlwZSA9PT0gJ3RyYWNsaW5rJyA/ICdSZWxlYXNlJyA6ICdVcmwnLFxuICAgICAgbmFtZTogZGF0YS50aXRsZSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gZGF0YS50aXRsZSAmJiBkYXRhLnVybCA/IChcbiAgICA8U3R5bGVkU29uZ0xpbmtcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyd9XG4gICAgICBocmVmPXtgL211c2ljJHtkYXRhLnVybH1gfVxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgPlxuICAgICAgPFdyYXBwZXJJbWFnZSBjbGFzc05hbWU9e2Ake2RhdGEuaGlnaGxpZ2h0ID8gJ2hpZ2hsaWdodCcgOiBudWxsfWB9PlxuICAgICAgICA8Q292ZXJJbWFnZVxuICAgICAgICAgIHNyYz17ZGF0YS5hdmF0YXJ9XG4gICAgICAgICAgYWx0PXtkYXRhLnRpdGxlfVxuICAgICAgICAgIHZhcmlhbnQ9e2RhdGEuaGlnaGxpZ2h0ID8gJ3NxdWFyZUhpZ2hsaWdodCcgOiAnc3F1YXJlJ31cbiAgICAgICAgLz5cbiAgICAgICAgPFBsYXkgY2xhc3NOYW1lPXtgcGxheS1pY29uICR7ZGF0YS5oaWdobGlnaHQgPyAnaGlnaGxpZ2h0JyA6IG51bGx9YH0+XG4gICAgICAgICAgPFBsYXlJY29uIC8+XG4gICAgICAgIDwvUGxheT5cbiAgICAgIDwvV3JhcHBlckltYWdlPlxuICAgICAgPFdyYXBwZXJJbmZvIGhpZ2hsaWdodD17ZGF0YS5oaWdobGlnaHR9PlxuICAgICAgICA8SW5mbyBjbGFzc05hbWU9e2Ake2RhdGEuaGlnaGxpZ2h0ID8gJ2hpZ2hsaWdodCcgOiBudWxsfWB9PlxuICAgICAgICAgIDxoMz57ZGF0YS50aXRsZX08L2gzPlxuICAgICAgICAgIDxwPnthcnRpc3ROYW1lfSwgU3RhcjZpeHNlN2VuLCBNUkcsIFN3ZWV6PC9wPlxuICAgICAgICA8L0luZm8+XG4gICAgICAgIHtkYXRhLmhpZ2hsaWdodCA/IDxGZWF0dXJlZEJhZGdlIGNsYXNzTmFtZT1cImJhZGdlXCIgLz4gOiBudWxsfVxuICAgICAgPC9XcmFwcGVySW5mbz5cbiAgICA8L1N0eWxlZFNvbmdMaW5rPlxuICApIDogbnVsbDtcbn1cblxuY29uc3QgU3R5bGVkU29uZ0xpbmsgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMjRweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5icmVha3BvaW50cy5sYXB0b3B9cHhgfSkge1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gICYuaGlnaGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5oaWdobGlnaHRCYWNrZ3JvdW5kfTtcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcbiAgICBvcmRlcjogLTE7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5icmVha3BvaW50cy5sYXB0b3B9cHhgfSkge1xuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIC5wbGF5LWljb24ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFdyYXBwZXJJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuaXRlbUJhY2tncm91bmR9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDI4OHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yXG4gICAgJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbn0gJHt0aGVtZS50cmFuc2l0aW9ucy50eXBlfWB9O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLml0ZW1CYWNrZ3JvdW5kSG92ZXJ9O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMubGFwdG9wfXB4YH0pIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gICYuaGlnaGxpZ2h0IHtcbiAgICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2l6ZXMuY292ZXJTaXplSGlnaGxpZ2h0fTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWFyZ2luOiAwIDMycHggMCAwO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLmJyZWFrcG9pbnRzLmxhcHRvcH1weGB9KSB7XG4gICAgICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2l6ZXMuY292ZXJTaXplSGlnaGxpZ2h0TW9iaWxlfTtcbiAgICAgIG1hcmdpbjogMCAwIDI0cHggMDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFdyYXBwZXJJbmZvID0gc3R5bGVkLmRpdjx7IGhpZ2hsaWdodD86IGJvb2xlYW4gfT5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogMTAwJTtcblxuICAkeyh7IGhpZ2hsaWdodCB9KSA9PlxuICAgIGhpZ2hsaWdodCAmJlxuICAgIGNzc2BcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLmJyZWFrcG9pbnRzLmxhcHRvcH1weGB9KSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMjRweDtcbiAgICAgIH1cbiAgICBgfVxuYDtcblxuY29uc3QgSW5mbyA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgPiBoMyB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICA+IHAge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5icmVha3BvaW50cy50YWJsZXR9cHhgfSkge1xuICAgICYuaGlnaGxpZ2h0IHtcbiAgICAgID4gaDMsXG4gICAgICA+IHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgPiBoMyB7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICA+IHAge1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUGxheSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHlcbiAgICAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9ufSAke3RoZW1lLnRyYW5zaXRpb25zLnR5cGV9YH07XG5cbiAgPiBzdmcge1xuICAgIGZpbGw6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudH07XG4gICAgdHJhbnNpdGlvbjogZmlsbFxuICAgICAgJHsoeyB0aGVtZSB9KSA9PlxuICAgICAgICBgJHt0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbn0gJHt0aGVtZS50cmFuc2l0aW9ucy50eXBlfWB9O1xuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/song-link/index.tsx\n'
      );

      /***/
    },
});