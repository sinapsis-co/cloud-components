webpackHotUpdate_N_E('pages/index', {
  /***/ './src/components/simple-link/index.tsx':
    /*!**********************************************!*\
  !*** ./src/components/simple-link/index.tsx ***!
  \**********************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleLink; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var _artist_utils_get_social_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @artist/utils/get-social-icon */ "./src/utils/get-social-icon.tsx");\n/* harmony import */ var _components_icons_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/icons/check */ "./src/components/icons/check/index.tsx");\n/* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/cover-image */ "./src/components/cover-image/index.tsx");\n/* harmony import */ var _components_icons_arrow_right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/icons/arrow-right */ "./src/components/icons/arrow-right/index.tsx");\nvar _jsxFileName = "/Users/herni/Documents/repositories/trac/platform/frontend/ssr-artist/src/components/simple-link/index.tsx",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction SimpleLink({\n  data,\n  className,\n  artistId,\n  releaseId\n}) {\n  _s();\n\n  const theme = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();\n\n  const handleClick = () => {\n    analytics.track(\'Traclink Click\', {\n      dsp: data.platform,\n      artist_id: artistId,\n      release_id: releaseId\n    });\n  };\n\n  const SimpleLinkContent = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, data.platform ? __jsx(PlatformIcon, {\n    as: "div",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, Object(_artist_utils_get_social_icon__WEBPACK_IMPORTED_MODULE_2__["default"])(data.platform)) : __jsx(_components_cover_image__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    src: data.avatar,\n    alt: data.title,\n    variant: "squareSmall",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }), __jsx(Info, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx("h3", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, data.title))), __jsx(Icon, {\n    className: "icon",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, data.isSuccess ? __jsx(_components_icons_check__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    height: "20px",\n    fill: theme.colors.success,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }) : __jsx(_components_icons_arrow_right__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    height: "20px",\n    fill: theme.colors.primary,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  })));\n\n  return data.title && data.url ? __jsx(Link, {\n    className: `${className ? className : \'\'} ${data.highlight ? \'highlight\' : \'\'} ${data.platform ? \'platform\' : \'\'}`,\n    href: data.url,\n    target: "_blank",\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 5\n    }\n  }, SimpleLinkContent) : null;\n}\n\n_s(SimpleLink, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function () {\n  return [styled_components__WEBPACK_IMPORTED_MODULE_1__["useTheme"]];\n});\n\n_c = SimpleLink;\nconst Link = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({\n  displayName: "simple-link__Link",\n  componentId: "fqic60-0"\n})(["height:100px;border-radius:5px;background-color:", ";color:", ";width:100%;padding:20px;display:flex;align-items:center;justify-content:space-between;transition:background-color ", ";@media (max-width:", "){height:auto;}&:hover{background-color:", ";}&.highlight{background-color:", ";order:-1;grid-column:1/-1;}&.platform{background-color:", ";&:hover{background-color:", ";.icon{background-color:", ";}}}"], ({\n  theme\n}) => theme.colors.itemBackground, ({\n  theme\n}) => theme.colors.primary, ({\n  theme\n}) => `${theme.transitions.duration} ${theme.transitions.type}`, ({\n  theme\n}) => `${theme.breakpoints.tablet}px`, ({\n  theme\n}) => theme.colors.itemBackground, ({\n  theme\n}) => theme.colors.highlightBackground, ({\n  theme\n}) => theme.colors.sidebarBackground, ({\n  theme\n}) => theme.colors.inputsBackground, ({\n  theme\n}) => theme.colors.inputsBackground);\n_c2 = Link;\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "simple-link__Content",\n  componentId: "fqic60-1"\n})(["display:flex;align-items:center;justify-content:flex-start;width:100%;flex:0 1 auto;"]);\n_c3 = Content;\nconst Info = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "simple-link__Info",\n  componentId: "fqic60-2"\n})(["flex-grow:0;padding:0px 20px;> h3{margin:0px;color:", ";font-size:16px;line-height:24px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}@media (max-width:", "){> h3{white-space:wrap;}}"], ({\n  theme\n}) => theme.colors.primary, ({\n  theme\n}) => `${theme.breakpoints.laptop}px`);\n_c4 = Info;\nconst Icon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({\n  displayName: "simple-link__Icon",\n  componentId: "fqic60-3"\n})(["background-color:", ";display:flex;width:", ";height:", ";justify-content:center;align-items:center;border-radius:50%;cursor:pointer;opacity:1;padding:0;flex:0 0 auto;transition:opacity ", ",background-color ", ";&:hover{opacity:0.75;> svg{fill:", ";}}"], ({\n  theme\n}) => theme.colors.sidebarBackground, ({\n  theme\n}) => theme.sizes.commonIconSize, ({\n  theme\n}) => theme.sizes.commonIconSize, ({\n  theme\n}) => `${theme.transitions.duration} ${theme.transitions.type}`, ({\n  theme\n}) => `${theme.transitions.duration} ${theme.transitions.type}`, ({\n  theme\n}) => theme.colors.primaryHover);\n_c5 = Icon;\nconst PlatformIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Icon).withConfig({\n  displayName: "simple-link__PlatformIcon",\n  componentId: "fqic60-4"\n})(["background-color:", ";> svg{height:20px;fill:", ";}"], ({\n  theme\n}) => theme.colors.itemBackground, ({\n  theme\n}) => theme.colors.primary);\n_c6 = PlatformIcon;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, "SimpleLink");\n$RefreshReg$(_c2, "Link");\n$RefreshReg$(_c3, "Content");\n$RefreshReg$(_c4, "Info");\n$RefreshReg$(_c5, "Icon");\n$RefreshReg$(_c6, "PlatformIcon");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2ltcGxlLWxpbmsvaW5kZXgudHN4PzE0MWMiXSwibmFtZXMiOlsiU2ltcGxlTGluayIsImRhdGEiLCJjbGFzc05hbWUiLCJhcnRpc3RJZCIsInJlbGVhc2VJZCIsInRoZW1lIiwidXNlVGhlbWUiLCJoYW5kbGVDbGljayIsImFuYWx5dGljcyIsInRyYWNrIiwiZHNwIiwicGxhdGZvcm0iLCJhcnRpc3RfaWQiLCJyZWxlYXNlX2lkIiwiU2ltcGxlTGlua0NvbnRlbnQiLCJnZXRTb2NpYWxJY29uIiwiYXZhdGFyIiwidGl0bGUiLCJpc1N1Y2Nlc3MiLCJjb2xvcnMiLCJzdWNjZXNzIiwicHJpbWFyeSIsInVybCIsImhpZ2hsaWdodCIsIkxpbmsiLCJzdHlsZWQiLCJhIiwiaXRlbUJhY2tncm91bmQiLCJ0cmFuc2l0aW9ucyIsImR1cmF0aW9uIiwidHlwZSIsImJyZWFrcG9pbnRzIiwidGFibGV0IiwiaGlnaGxpZ2h0QmFja2dyb3VuZCIsInNpZGViYXJCYWNrZ3JvdW5kIiwiaW5wdXRzQmFja2dyb3VuZCIsIkNvbnRlbnQiLCJkaXYiLCJJbmZvIiwibGFwdG9wIiwiSWNvbiIsImJ1dHRvbiIsInNpemVzIiwiY29tbW9uSWNvblNpemUiLCJwcmltYXJ5SG92ZXIiLCJQbGF0Zm9ybUljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQW1CZSxTQUFTQSxVQUFULENBQW9CO0FBQ2pDQyxNQURpQztBQUVqQ0MsV0FGaUM7QUFHakNDLFVBSGlDO0FBSWpDQztBQUppQyxDQUFwQixFQUtLO0FBQUE7O0FBQ2xCLFFBQU1DLEtBQUssR0FBR0Msa0VBQVEsRUFBdEI7O0FBRUEsUUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDeEJDLGFBQVMsQ0FBQ0MsS0FBVixDQUFnQixnQkFBaEIsRUFBa0M7QUFDaENDLFNBQUcsRUFBRVQsSUFBSSxDQUFDVSxRQURzQjtBQUVoQ0MsZUFBUyxFQUFFVCxRQUZxQjtBQUdoQ1UsZ0JBQVUsRUFBRVQ7QUFIb0IsS0FBbEM7QUFLRCxHQU5EOztBQVFBLFFBQU1VLGlCQUFpQixHQUNyQixtRUFDRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHYixJQUFJLENBQUNVLFFBQUwsR0FDQyxNQUFDLFlBQUQ7QUFBYyxNQUFFLEVBQUMsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QkksNkVBQWEsQ0FBQ2QsSUFBSSxDQUFDVSxRQUFOLENBQXJDLENBREQsR0FHQyxNQUFDLCtEQUFEO0FBQ0UsT0FBRyxFQUFFVixJQUFJLENBQUNlLE1BRFo7QUFFRSxPQUFHLEVBQUVmLElBQUksQ0FBQ2dCLEtBRlo7QUFHRSxXQUFPLEVBQUMsYUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFXRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS2hCLElBQUksQ0FBQ2dCLEtBQVYsQ0FERixDQVhGLENBREYsRUFnQkUsTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2hCLElBQUksQ0FBQ2lCLFNBQUwsR0FDQyxNQUFDLCtEQUFEO0FBQVcsVUFBTSxFQUFDLE1BQWxCO0FBQXlCLFFBQUksRUFBRWIsS0FBSyxDQUFDYyxNQUFOLENBQWFDLE9BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxHQUdDLE1BQUMscUVBQUQ7QUFBWSxVQUFNLEVBQUMsTUFBbkI7QUFBMEIsUUFBSSxFQUFFZixLQUFLLENBQUNjLE1BQU4sQ0FBYUUsT0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBaEJGLENBREY7O0FBMkJBLFNBQU9wQixJQUFJLENBQUNnQixLQUFMLElBQWNoQixJQUFJLENBQUNxQixHQUFuQixHQUNMLE1BQUMsSUFBRDtBQUNFLGFBQVMsRUFBRyxHQUFFcEIsU0FBUyxHQUFHQSxTQUFILEdBQWUsRUFBRyxJQUN2Q0QsSUFBSSxDQUFDc0IsU0FBTCxHQUFpQixXQUFqQixHQUErQixFQUNoQyxJQUFHdEIsSUFBSSxDQUFDVSxRQUFMLEdBQWdCLFVBQWhCLEdBQTZCLEVBQUcsRUFIdEM7QUFJRSxRQUFJLEVBQUVWLElBQUksQ0FBQ3FCLEdBSmI7QUFLRSxVQUFNLEVBQUMsUUFMVDtBQU1FLFdBQU8sRUFBRWYsV0FOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUdPLGlCQVJILENBREssR0FXSCxJQVhKO0FBWUQ7O0dBdkR1QmQsVTtVQU1STSwwRDs7O0tBTlFOLFU7QUF5RHhCLE1BQU13QixJQUFJLEdBQUdDLHlEQUFNLENBQUNDLENBQVY7QUFBQTtBQUFBO0FBQUEsK1pBR1ksQ0FBQztBQUFFckI7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2MsTUFBTixDQUFhUSxjQUh4QyxFQUlDLENBQUM7QUFBRXRCO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNjLE1BQU4sQ0FBYUUsT0FKN0IsRUFXSixDQUFDO0FBQUVoQjtBQUFGLENBQUQsS0FBZ0IsR0FBRUEsS0FBSyxDQUFDdUIsV0FBTixDQUFrQkMsUUFBUyxJQUFHeEIsS0FBSyxDQUFDdUIsV0FBTixDQUFrQkUsSUFBSyxFQVhuRSxFQWFhLENBQUM7QUFBRXpCO0FBQUYsQ0FBRCxLQUFnQixHQUFFQSxLQUFLLENBQUMwQixXQUFOLENBQWtCQyxNQUFPLElBYnhELEVBa0JjLENBQUM7QUFBRTNCO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNjLE1BQU4sQ0FBYVEsY0FsQjFDLEVBc0JjLENBQUM7QUFBRXRCO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNjLE1BQU4sQ0FBYWMsbUJBdEIxQyxFQTRCYyxDQUFDO0FBQUU1QjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDYyxNQUFOLENBQWFlLGlCQTVCMUMsRUE4QmdCLENBQUM7QUFBRTdCO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNjLE1BQU4sQ0FBYWdCLGdCQTlCNUMsRUFnQ2tCLENBQUM7QUFBRTlCO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNjLE1BQU4sQ0FBYWdCLGdCQWhDOUMsQ0FBVjtNQUFNWCxJO0FBc0NOLE1BQU1ZLE9BQU8sR0FBR1gseURBQU0sQ0FBQ1ksR0FBVjtBQUFBO0FBQUE7QUFBQSw0RkFBYjtNQUFNRCxPO0FBUU4sTUFBTUUsSUFBSSxHQUFHYix5REFBTSxDQUFDWSxHQUFWO0FBQUE7QUFBQTtBQUFBLHVPQU1HLENBQUM7QUFBRWhDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNjLE1BQU4sQ0FBYUUsT0FOL0IsRUFlYSxDQUFDO0FBQUVoQjtBQUFGLENBQUQsS0FBZ0IsR0FBRUEsS0FBSyxDQUFDMEIsV0FBTixDQUFrQlEsTUFBTyxJQWZ4RCxDQUFWO01BQU1ELEk7QUFzQk4sTUFBTUUsSUFBSSxHQUFHZix5REFBTSxDQUFDZ0IsTUFBVjtBQUFBO0FBQUE7QUFBQSxxUUFDWSxDQUFDO0FBQUVwQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDYyxNQUFOLENBQWFlLGlCQUR4QyxFQUdDLENBQUM7QUFBRTdCO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNxQyxLQUFOLENBQVlDLGNBSDVCLEVBSUUsQ0FBQztBQUFFdEM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ3FDLEtBQU4sQ0FBWUMsY0FKN0IsRUFhRixDQUFDO0FBQUV0QztBQUFGLENBQUQsS0FDQyxHQUFFQSxLQUFLLENBQUN1QixXQUFOLENBQWtCQyxRQUFTLElBQUd4QixLQUFLLENBQUN1QixXQUFOLENBQWtCRSxJQUFLLEVBZHRELEVBZ0JGLENBQUM7QUFBRXpCO0FBQUYsQ0FBRCxLQUNDLEdBQUVBLEtBQUssQ0FBQ3VCLFdBQU4sQ0FBa0JDLFFBQVMsSUFBR3hCLEtBQUssQ0FBQ3VCLFdBQU4sQ0FBa0JFLElBQUssRUFqQnRELEVBdUJJLENBQUM7QUFBRXpCO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNjLE1BQU4sQ0FBYXlCLFlBdkJoQyxDQUFWO01BQU1KLEk7QUE0Qk4sTUFBTUssWUFBWSxHQUFHcEIsaUVBQU0sQ0FBQ2UsSUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDREQUNJLENBQUM7QUFBRW5DO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNjLE1BQU4sQ0FBYVEsY0FEaEMsRUFJTixDQUFDO0FBQUV0QjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDYyxNQUFOLENBQWFFLE9BSnRCLENBQWxCO01BQU13QixZIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvc2ltcGxlLWxpbmsvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyB1c2VUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgVHJhY0xpbmtQbGF0Zm9ybSB9IGZyb20gJ0BzZXJ2aWNlcy90cmFjcGFnZS90eXBlcy90cmFjLWxpbmstcGxhdGZvcm0nO1xuXG5pbXBvcnQgZ2V0U29jaWFsSWNvbiBmcm9tICdAYXJ0aXN0L3V0aWxzL2dldC1zb2NpYWwtaWNvbic7XG5cbmltcG9ydCBDaGVja0ljb24gZnJvbSAnQGNvbXBvbmVudHMvaWNvbnMvY2hlY2snO1xuaW1wb3J0IENvdmVySW1hZ2UgZnJvbSAnQGNvbXBvbmVudHMvY292ZXItaW1hZ2UnO1xuaW1wb3J0IEFycm93UmlnaHQgZnJvbSAnQGNvbXBvbmVudHMvaWNvbnMvYXJyb3ctcmlnaHQnO1xuXG5kZWNsYXJlIHR5cGUgU2ltcGxlTGlua1Byb3BzID0ge1xuICBkYXRhOiB7XG4gICAgb3JkZXI6IG51bWJlcjtcbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgYXZhdGFyPzogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgcGxhdGZvcm0/OiBUcmFjTGlua1BsYXRmb3JtO1xuICAgIGlzU3VjY2Vzcz86IGJvb2xlYW47XG4gICAgc2NoZWR1bGU/OiBib29sZWFuO1xuICAgIGhpZ2hsaWdodD86IGJvb2xlYW47XG4gICAgc2hvd1RpdGxlPzogYm9vbGVhbjtcbiAgfTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBhcnRpc3RJZDogc3RyaW5nO1xuICByZWxlYXNlSWQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZUxpbmsoe1xuICBkYXRhLFxuICBjbGFzc05hbWUsXG4gIGFydGlzdElkLFxuICByZWxlYXNlSWQsXG59OiBTaW1wbGVMaW5rUHJvcHMpIHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGFuYWx5dGljcy50cmFjaygnVHJhY2xpbmsgQ2xpY2snLCB7XG4gICAgICBkc3A6IGRhdGEucGxhdGZvcm0sXG4gICAgICBhcnRpc3RfaWQ6IGFydGlzdElkLFxuICAgICAgcmVsZWFzZV9pZDogcmVsZWFzZUlkLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IFNpbXBsZUxpbmtDb250ZW50ID0gKFxuICAgIDw+XG4gICAgICA8Q29udGVudD5cbiAgICAgICAge2RhdGEucGxhdGZvcm0gPyAoXG4gICAgICAgICAgPFBsYXRmb3JtSWNvbiBhcz1cImRpdlwiPntnZXRTb2NpYWxJY29uKGRhdGEucGxhdGZvcm0pfTwvUGxhdGZvcm1JY29uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxDb3ZlckltYWdlXG4gICAgICAgICAgICBzcmM9e2RhdGEuYXZhdGFyfVxuICAgICAgICAgICAgYWx0PXtkYXRhLnRpdGxlfVxuICAgICAgICAgICAgdmFyaWFudD1cInNxdWFyZVNtYWxsXCJcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxJbmZvPlxuICAgICAgICAgIDxoMz57ZGF0YS50aXRsZX08L2gzPlxuICAgICAgICA8L0luZm8+XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgICA8SWNvbiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgIHtkYXRhLmlzU3VjY2VzcyA/IChcbiAgICAgICAgICA8Q2hlY2tJY29uIGhlaWdodD1cIjIwcHhcIiBmaWxsPXt0aGVtZS5jb2xvcnMuc3VjY2Vzc30gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8QXJyb3dSaWdodCBoZWlnaHQ9XCIyMHB4XCIgZmlsbD17dGhlbWUuY29sb3JzLnByaW1hcnl9IC8+XG4gICAgICAgICl9XG4gICAgICA8L0ljb24+XG4gICAgPC8+XG4gICk7XG5cbiAgcmV0dXJuIGRhdGEudGl0bGUgJiYgZGF0YS51cmwgPyAoXG4gICAgPExpbmtcbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyd9ICR7XG4gICAgICAgIGRhdGEuaGlnaGxpZ2h0ID8gJ2hpZ2hsaWdodCcgOiAnJ1xuICAgICAgfSAke2RhdGEucGxhdGZvcm0gPyAncGxhdGZvcm0nIDogJyd9YH1cbiAgICAgIGhyZWY9e2RhdGEudXJsfVxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgID5cbiAgICAgIHtTaW1wbGVMaW5rQ29udGVudH1cbiAgICA8L0xpbms+XG4gICkgOiBudWxsO1xufVxuXG5jb25zdCBMaW5rID0gc3R5bGVkLmFgXG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuaXRlbUJhY2tncm91bmR9O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3JcbiAgICAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9ufSAke3RoZW1lLnRyYW5zaXRpb25zLnR5cGV9YH07XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMudGFibGV0fXB4YH0pIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5pdGVtQmFja2dyb3VuZH07XG4gIH1cblxuICAmLmhpZ2hsaWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuaGlnaGxpZ2h0QmFja2dyb3VuZH07XG4gICAgb3JkZXI6IC0xO1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICB9XG5cbiAgJi5wbGF0Zm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuc2lkZWJhckJhY2tncm91bmR9O1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuaW5wdXRzQmFja2dyb3VuZH07XG4gICAgICAuaWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmlucHV0c0JhY2tncm91bmR9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDAgMSBhdXRvO1xuYDtcblxuY29uc3QgSW5mbyA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtZ3JvdzogMDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG5cbiAgPiBoMyB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMubGFwdG9wfXB4YH0pIHtcbiAgICA+IGgzIHtcbiAgICAgIHdoaXRlLXNwYWNlOiB3cmFwO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgSWNvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnNpZGViYXJCYWNrZ3JvdW5kfTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2l6ZXMuY29tbW9uSWNvblNpemV9O1xuICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2l6ZXMuY29tbW9uSWNvblNpemV9O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDA7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5XG4gICAgICAkeyh7IHRoZW1lIH0pID0+XG4gICAgICAgIGAke3RoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9ufSAke3RoZW1lLnRyYW5zaXRpb25zLnR5cGV9YH0sXG4gICAgYmFja2dyb3VuZC1jb2xvclxuICAgICAgJHsoeyB0aGVtZSB9KSA9PlxuICAgICAgICBgJHt0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbn0gJHt0aGVtZS50cmFuc2l0aW9ucy50eXBlfWB9O1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNzU7XG5cbiAgICA+IHN2ZyB7XG4gICAgICBmaWxsOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5SG92ZXJ9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUGxhdGZvcm1JY29uID0gc3R5bGVkKEljb24pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5pdGVtQmFja2dyb3VuZH07XG4gID4gc3ZnIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZmlsbDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/simple-link/index.tsx\n'
      );

      /***/
    },
});
