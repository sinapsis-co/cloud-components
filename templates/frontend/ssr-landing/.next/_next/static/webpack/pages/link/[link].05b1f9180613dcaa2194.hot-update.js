webpackHotUpdate_N_E('pages/link/[link]', {
  /***/ './src/components/container/index.tsx':
    /*!********************************************!*\
  !*** ./src/components/container/index.tsx ***!
  \********************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/navbar */ "./src/components/navbar/index.tsx");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/sidebar */ "./src/components/sidebar/index.tsx");\n/* harmony import */ var _components_icons_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/icons/cart */ "./src/components/icons/cart/index.tsx");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _artist_hooks_is_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @artist/hooks/is-mobile */ "./src/hooks/is-mobile.tsx");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");\n/* harmony import */ var _components_framer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/framer */ "./src/components/framer/index.tsx");\nvar _jsxFileName = "/Users/herni/Documents/repositories/trac/platform/frontend/ssr-artist/src/components/container/index.tsx",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction Container({\n  className,\n  children,\n  pageData,\n  action,\n  hasBackground,\n  hasBackgroundMobile,\n  hideNavbar,\n  hideSidebar,\n  hideCart,\n  noAnimation\n}) {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();\n  const isMobile = Object(_artist_hooks_is_mobile__WEBPACK_IMPORTED_MODULE_6__["default"])();\n  return __jsx(StyledContainer, {\n    className: className ? className : \'\',\n    hasBackground: hasBackground,\n    hasBackgroundMobile: hasBackgroundMobile,\n    hideSidebar: hideSidebar,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, pageData ? !hideSidebar ? __jsx(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    noBg: hasBackgroundMobile,\n    pageData: pageData,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }) : null : null, __jsx(Wrapper, {\n    className: "wrapper",\n    variants: _components_framer__WEBPACK_IMPORTED_MODULE_8__["containerAnimations"],\n    initial: noAnimation ? undefined : \'initial\',\n    animate: noAnimation ? undefined : \'animate\',\n    exit: noAnimation ? undefined : \'exit\',\n    transition: _components_framer__WEBPACK_IMPORTED_MODULE_8__["easeTransition"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, !isMobile ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !hideNavbar ? __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 28\n    }\n  }) : null, action ? __jsx(ActionWrapper, {\n    className: hideSidebar ? \'centered\' : \'\',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 15\n    }\n  }, action) : null, !hideCart ? __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"].div, {\n    animate: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }, __jsx(PositionedCartIcon, {\n    onClick: () => router.push(`/merch/cart`),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  })) : null) : null, isMobile && hideSidebar ? action ? __jsx(ActionWrapper, {\n    className: hideSidebar ? \'centered\' : \'\',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, action) : null : null, __jsx(Content, {\n    className: `content ${action ? \'has-action\' : \'\'}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }, children)));\n}\n\n_s(Container, "XdBoCC1SvuNCbYnPDPW+8vIrdSU=", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], _artist_hooks_is_mobile__WEBPACK_IMPORTED_MODULE_6__["default"]];\n});\n\n_c = Container;\nconst StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "container__StyledContainer",\n  componentId: "u3fn7h-0"\n})(["height:100%;height:100vh;max-height:100%;max-height:100vh;overflow:hidden;margin:auto;position:relative;display:flex;@media (max-width:", "){flex-direction:column;max-height:none;overflow:auto;}", " ", " .content{", "}"], ({\n  theme\n}) => `${theme.breakpoints.tablet}px`, ({\n  hasBackground\n}) => hasBackground && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])([".wrapper{background-color:", ";@media (max-width:", "){background-color:", ";}}.content{margin-left:112px;@media (max-width:", "){margin-left:0;}}"], ({\n  theme\n}) => theme.colors.background, ({\n  theme\n}) => `${theme.breakpoints.laptop}px`, ({\n  theme\n}) => theme.colors.sidebarBackground, ({\n  theme\n}) => `${theme.breakpoints.laptop}px`), ({\n  hasBackgroundMobile\n}) => hasBackgroundMobile && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])([".wrapper{@media (max-width:", "){background-color:", ";}}"], ({\n  theme\n}) => `${theme.breakpoints.laptop}px`, ({\n  theme\n}) => theme.colors.background), ({\n  hideSidebar\n}) => hideSidebar && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["margin-inline:auto;"]));\n_c2 = StyledContainer;\nconst Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"].div).withConfig({\n  displayName: "container__Wrapper",\n  componentId: "u3fn7h-1"\n})(["width:100%;height:100%;height:100vh;max-height:100%;max-height:100vh;overflow-y:scroll;padding:32px;position:relative;@media (max-width:", "){max-width:none;padding:24px;height:auto;max-height:none;overflow-y:visible;}"], ({\n  theme\n}) => `${theme.breakpoints.tablet}px`);\n_c3 = Wrapper;\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "container__Content",\n  componentId: "u3fn7h-2"\n})(["max-width:608px;&.has-action{margin-top:80px;}@media (max-width:", "){max-width:none;&.has-action{margin-top:0;}}"], ({\n  theme\n}) => `${theme.breakpoints.tablet}px`);\n_c4 = Content;\nconst PositionedCartIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_icons_cart__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({\n  displayName: "container__PositionedCartIcon",\n  componentId: "u3fn7h-3"\n})(["position:absolute;top:32px;right:32px;"]);\n_c5 = PositionedCartIcon;\nconst ActionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  displayName: "container__ActionWrapper",\n  componentId: "u3fn7h-4"\n})(["position:absolute;top:32px;left:32px;&.centered{left:max(32px,calc(50% - (608px / 2)));@media (max-width:", "){position:relative;top:auto;left:auto;margin-bottom:24px;}}"], ({\n  theme\n}) => `${theme.breakpoints.tablet}px`);\n_c6 = ActionWrapper;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, "Container");\n$RefreshReg$(_c2, "StyledContainer");\n$RefreshReg$(_c3, "Wrapper");\n$RefreshReg$(_c4, "Content");\n$RefreshReg$(_c5, "PositionedCartIcon");\n$RefreshReg$(_c6, "ActionWrapper");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29udGFpbmVyL2luZGV4LnRzeD9lODdhIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicGFnZURhdGEiLCJhY3Rpb24iLCJoYXNCYWNrZ3JvdW5kIiwiaGFzQmFja2dyb3VuZE1vYmlsZSIsImhpZGVOYXZiYXIiLCJoaWRlU2lkZWJhciIsImhpZGVDYXJ0Iiwibm9BbmltYXRpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc01vYmlsZSIsInVzZUlzTW9iaWxlIiwiY29udGFpbmVyQW5pbWF0aW9ucyIsInVuZGVmaW5lZCIsImVhc2VUcmFuc2l0aW9uIiwicHVzaCIsIlN0eWxlZENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJ0YWJsZXQiLCJjc3MiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwibGFwdG9wIiwic2lkZWJhckJhY2tncm91bmQiLCJXcmFwcGVyIiwibW90aW9uIiwiQ29udGVudCIsIlBvc2l0aW9uZWRDYXJ0SWNvbiIsIkNhcnRJY29uIiwiQWN0aW9uV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsQ0FBbUI7QUFDaENDLFdBRGdDO0FBRWhDQyxVQUZnQztBQUdoQ0MsVUFIZ0M7QUFJaENDLFFBSmdDO0FBS2hDQyxlQUxnQztBQU1oQ0MscUJBTmdDO0FBT2hDQyxZQVBnQztBQVFoQ0MsYUFSZ0M7QUFTaENDLFVBVGdDO0FBVWhDQztBQVZnQyxDQUFuQixFQXNCWjtBQUFBOztBQUNELFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLHVFQUFXLEVBQTVCO0FBRUEsU0FDRSxNQUFDLGVBQUQ7QUFDRSxhQUFTLEVBQUViLFNBQVMsR0FBR0EsU0FB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QUFELEtBQ0FBLG1CQUFtQixJQUNuQm1CLDZEQURtQixnRUFHTSxDQUFDO0FBQUVIO0FBQUYsQ0FBRCxLQUFnQixHQUFFQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JLLE1BQU8sSUFIakQsRUFJTyxDQUFDO0FBQUVOO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsVUFKbkMsQ0F6Q0YsRUFtRGYsQ0FBQztBQUFFbkI7QUFBRixDQUFELEtBQ0FBLFdBQVcsSUFDWGlCLDZEQURXLHlCQXBESSxDQUFyQjtNQUFNTixlO0FBMkROLE1BQU1XLE9BQU8sR0FBR1YsaUVBQU0sQ0FBQ1csb0RBQU0sQ0FBQ1YsR0FBUixDQUFUO0FBQUE7QUFBQTtBQUFBLG1PQVVVLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCLEdBQUVBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkMsTUFBTyxJQVZyRCxDQUFiO01BQU1NLE87QUFtQk4sTUFBTUUsT0FBTyxHQUFHWix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBIQU9VLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCLEdBQUVBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkMsTUFBTyxJQVByRCxDQUFiO01BQU1RLE87QUFnQk4sTUFBTUMsa0JBQWtCLEdBQUdiLGlFQUFNLENBQUNjLDhEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsOENBQXhCO01BQU1ELGtCO0FBTU4sTUFBTUUsYUFBYSxHQUFHZix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtMQVFNLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCLEdBQUVBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkMsTUFBTyxJQVJqRCxDQUFuQjtNQUFNVyxhIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvY29udGFpbmVyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJ0Bjb21wb25lbnRzL25hdmJhcic7XG5pbXBvcnQgU2lkZWJhciBmcm9tICdAY29tcG9uZW50cy9zaWRlYmFyJztcbmltcG9ydCBDYXJ0SWNvbiBmcm9tICdAY29tcG9uZW50cy9pY29ucy9jYXJ0JztcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgVHJhY1BhZ2UgZnJvbSAnQHNlcnZpY2VzL3RyYWNwYWdlL3R5cGVzL3RyYWMtcGFnZSc7XG5cbmltcG9ydCB1c2VJc01vYmlsZSBmcm9tICdAYXJ0aXN0L2hvb2tzL2lzLW1vYmlsZSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IGNvbnRhaW5lckFuaW1hdGlvbnMsIGVhc2VUcmFuc2l0aW9uIH0gZnJvbSAnQGNvbXBvbmVudHMvZnJhbWVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFpbmVyKHtcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgcGFnZURhdGEsXG4gIGFjdGlvbixcbiAgaGFzQmFja2dyb3VuZCxcbiAgaGFzQmFja2dyb3VuZE1vYmlsZSxcbiAgaGlkZU5hdmJhcixcbiAgaGlkZVNpZGViYXIsXG4gIGhpZGVDYXJ0LFxuICBub0FuaW1hdGlvbixcbn06IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBwYWdlRGF0YT86IFRyYWNQYWdlO1xuICBhY3Rpb24/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGhhc0JhY2tncm91bmQ/OiBib29sZWFuO1xuICBoYXNCYWNrZ3JvdW5kTW9iaWxlPzogYm9vbGVhbjtcbiAgaGlkZU5hdmJhcj86IGJvb2xlYW47XG4gIGhpZGVTaWRlYmFyPzogYm9vbGVhbjtcbiAgaGlkZUNhcnQ/OiBib29sZWFuO1xuICBub0FuaW1hdGlvbj86IGJvb2xlYW47XG59KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpc01vYmlsZSA9IHVzZUlzTW9iaWxlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQ29udGFpbmVyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnfVxuICAgICAgaGFzQmFja2dyb3VuZD17aGFzQmFja2dyb3VuZH1cbiAgICAgIGhhc0JhY2tncm91bmRNb2JpbGU9e2hhc0JhY2tncm91bmRNb2JpbGV9XG4gICAgICBoaWRlU2lkZWJhcj17aGlkZVNpZGViYXJ9XG4gICAgPlxuICAgICAge3BhZ2VEYXRhID8gKFxuICAgICAgICAhaGlkZVNpZGViYXIgPyAoXG4gICAgICAgICAgPFNpZGViYXIgbm9CZz17aGFzQmFja2dyb3VuZE1vYmlsZX0gcGFnZURhdGE9e3BhZ2VEYXRhfSAvPlxuICAgICAgICApIDogbnVsbFxuICAgICAgKSA6IG51bGx9XG4gICAgICA8V3JhcHBlclxuICAgICAgICBjbGFzc05hbWU9XCJ3cmFwcGVyXCJcbiAgICAgICAgdmFyaWFudHM9e2NvbnRhaW5lckFuaW1hdGlvbnN9XG4gICAgICAgIGluaXRpYWw9e25vQW5pbWF0aW9uID8gdW5kZWZpbmVkIDogJ2luaXRpYWwnfVxuICAgICAgICBhbmltYXRlPXtub0FuaW1hdGlvbiA/IHVuZGVmaW5lZCA6ICdhbmltYXRlJ31cbiAgICAgICAgZXhpdD17bm9BbmltYXRpb24gPyB1bmRlZmluZWQgOiAnZXhpdCd9XG4gICAgICAgIHRyYW5zaXRpb249e2Vhc2VUcmFuc2l0aW9ufVxuICAgICAgPlxuICAgICAgICB7IWlzTW9iaWxlID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7IWhpZGVOYXZiYXIgPyA8TmF2YmFyIC8+IDogbnVsbH1cbiAgICAgICAgICAgIHthY3Rpb24gPyAoXG4gICAgICAgICAgICAgIDxBY3Rpb25XcmFwcGVyIGNsYXNzTmFtZT17aGlkZVNpZGViYXIgPyAnY2VudGVyZWQnIDogJyd9PlxuICAgICAgICAgICAgICAgIHthY3Rpb259XG4gICAgICAgICAgICAgIDwvQWN0aW9uV3JhcHBlcj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgeyFoaWRlQ2FydCA/IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgYW5pbWF0ZT5cbiAgICAgICAgICAgICAgICA8UG9zaXRpb25lZENhcnRJY29uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL21lcmNoL2NhcnRgKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtpc01vYmlsZSAmJiBoaWRlU2lkZWJhciA/IChcbiAgICAgICAgICBhY3Rpb24gPyAoXG4gICAgICAgICAgICA8QWN0aW9uV3JhcHBlciBjbGFzc05hbWU9e2hpZGVTaWRlYmFyID8gJ2NlbnRlcmVkJyA6ICcnfT5cbiAgICAgICAgICAgICAge2FjdGlvbn1cbiAgICAgICAgICAgIDwvQWN0aW9uV3JhcHBlcj5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPENvbnRlbnQgY2xhc3NOYW1lPXtgY29udGVudCAke2FjdGlvbiA/ICdoYXMtYWN0aW9uJyA6ICcnfWB9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Db250ZW50PlxuICAgICAgPC9XcmFwcGVyPlxuICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2PHtcbiAgaGFzQmFja2dyb3VuZD86IGJvb2xlYW47XG4gIGhhc0JhY2tncm91bmRNb2JpbGU/OiBib29sZWFuO1xuICBoaWRlU2lkZWJhcj86IGJvb2xlYW47XG59PmBcbiAgaGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMudGFibGV0fXB4YH0pIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICAkeyh7IGhhc0JhY2tncm91bmQgfSkgPT5cbiAgICBoYXNCYWNrZ3JvdW5kICYmXG4gICAgY3NzYFxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5icmVha3BvaW50cy5sYXB0b3B9cHhgfSkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnNpZGViYXJCYWNrZ3JvdW5kfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29udGVudCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMTJweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5icmVha3BvaW50cy5sYXB0b3B9cHhgfSkge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGhhc0JhY2tncm91bmRNb2JpbGUgfSkgPT5cbiAgICBoYXNCYWNrZ3JvdW5kTW9iaWxlICYmXG4gICAgY3NzYFxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5icmVha3BvaW50cy5sYXB0b3B9cHhgfSkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cblxuICAgIC5jb250ZW50IHtcbiAgICAkeyh7IGhpZGVTaWRlYmFyIH0pID0+XG4gICAgICBoaWRlU2lkZWJhciAmJlxuICAgICAgY3NzYFxuICAgICAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICAgICAgYH1cbiAgfVxuYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZzogMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLmJyZWFrcG9pbnRzLnRhYmxldH1weGB9KSB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgfVxuYDtcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogNjA4cHg7XG5cbiAgJi5oYXMtYWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMudGFibGV0fXB4YH0pIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG5cbiAgICAmLmhhcy1hY3Rpb24ge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFBvc2l0aW9uZWRDYXJ0SWNvbiA9IHN0eWxlZChDYXJ0SWNvbilgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMnB4O1xuICByaWdodDogMzJweDtcbmA7XG5cbmNvbnN0IEFjdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzJweDtcbiAgbGVmdDogMzJweDtcblxuICAmLmNlbnRlcmVkIHtcbiAgICBsZWZ0OiBtYXgoMzJweCwgY2FsYyg1MCUgLSAoNjA4cHggLyAyKSkpO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMudGFibGV0fXB4YH0pIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogYXV0bztcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/container/index.tsx\n'
      );

      /***/
    },
});