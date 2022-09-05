webpackHotUpdate_N_E('pages/index', {
  /***/ './src/components/link-components/link.tsx':
    /*!*************************************************!*\
  !*** ./src/components/link-components/link.tsx ***!
  \*************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");\n/* harmony import */ var _components_framer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/framer */ "./src/components/framer/index.tsx");\n/* harmony import */ var _wrapper_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wrapper-image */ "./src/components/link-components/wrapper-image.tsx");\n/* harmony import */ var _artist_hooks_is_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @artist/hooks/is-mobile */ "./src/hooks/is-mobile.tsx");\nvar _jsxFileName = "/Users/herni/Documents/repositories/trac/platform/frontend/ssr-artist/src/components/link-components/link.tsx",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst Link = ({\n  className,\n  children,\n  href,\n  hasDelay,\n  image,\n  isHighlight,\n  onClick\n}) => {\n  _s();\n\n  const isMobile = Object(_artist_hooks_is_mobile__WEBPACK_IMPORTED_MODULE_6__["default"])();\n  const {\n    ref,\n    inView\n  } = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"])({\n    triggerOnce: true,\n    rootMargin: isMobile ? \'60px 0px\' : \'200px 0px\'\n  });\n  return __jsx(StyledLink, {\n    className: className || \'\',\n    href: href,\n    onClick: onClick,\n    variants: _components_framer__WEBPACK_IMPORTED_MODULE_4__["scaleAnimations"],\n    initial: "initial",\n    animate: inView ? \'animate\' : \'initial\',\n    exit: "exit",\n    ref: ref,\n    transition: () => Object(_components_framer__WEBPACK_IMPORTED_MODULE_4__["delayTransition"])(hasDelay),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(Wrapper, {\n    initial: "rest",\n    whileHover: "hover",\n    whileTap: "tap",\n    animate: "rest",\n    className: "wrapper",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, __jsx(_wrapper_image__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    className: isHighlight,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {\n    className: "motion",\n    variants: _components_framer__WEBPACK_IMPORTED_MODULE_4__["hoverMotion"],\n    transition: _components_framer__WEBPACK_IMPORTED_MODULE_4__["easeTransition"],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, image)), children));\n};\n\n_s(Link, "6pkIga0pTgDFLwgyHliPNWvUeJY=", false, function () {\n  return [_artist_hooks_is_mobile__WEBPACK_IMPORTED_MODULE_6__["default"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"]];\n});\n\n_c = Link;\n/* harmony default export */ __webpack_exports__["default"] = (Link);\nconst StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].a).withConfig({\n  displayName: "link__StyledLink",\n  componentId: "gyn5x7-0"\n})(["&.highlight{background-color:", ";grid-column:span 2;order:-1;.wrapper{flex-direction:row;padding:32px;gap:32px;border-radius:5px;height:100%;@media (max-width:", "){padding:24px;gap:24px;flex-direction:column;justify-content:center;align-items:center;}}}&:hover{.wrapper-image{background-color:", ";&.highlight{background:none;}}}"], ({\n  theme\n}) => theme.colors.highlightBackground, ({\n  theme\n}) => `${theme.breakpoints.laptopS}px`, ({\n  theme\n}) => theme.colors.itemBackgroundHover);\n_c2 = StyledLink;\nconst Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div).withConfig({\n  displayName: "link__Wrapper",\n  componentId: "gyn5x7-1"\n})(["display:flex;flex-direction:column;align-items:flex-start;gap:24px;@media (max-width:", "){gap:12px;}&:hover{.play-icon{opacity:1;}}"], ({\n  theme\n}) => `${theme.breakpoints.laptopS}px`);\n_c3 = Wrapper;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, "Link");\n$RefreshReg$(_c2, "StyledLink");\n$RefreshReg$(_c3, "Wrapper");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGluay1jb21wb25lbnRzL2xpbmsudHN4P2M5MDkiXSwibmFtZXMiOlsiTGluayIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiaHJlZiIsImhhc0RlbGF5IiwiaW1hZ2UiLCJpc0hpZ2hsaWdodCIsIm9uQ2xpY2siLCJpc01vYmlsZSIsInVzZUlzTW9iaWxlIiwicmVmIiwiaW5WaWV3IiwidXNlSW5WaWV3IiwidHJpZ2dlck9uY2UiLCJyb290TWFyZ2luIiwic2NhbGVBbmltYXRpb25zIiwiZGVsYXlUcmFuc2l0aW9uIiwiaG92ZXJNb3Rpb24iLCJlYXNlVHJhbnNpdGlvbiIsIlN0eWxlZExpbmsiLCJzdHlsZWQiLCJtb3Rpb24iLCJhIiwidGhlbWUiLCJjb2xvcnMiLCJoaWdobGlnaHRCYWNrZ3JvdW5kIiwiYnJlYWtwb2ludHMiLCJsYXB0b3BTIiwiaXRlbUJhY2tncm91bmRIb3ZlciIsIldyYXBwZXIiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFDQTs7QUFXQSxNQUFNQSxJQUFrQyxHQUFHLENBQUM7QUFDMUNDLFdBRDBDO0FBRTFDQyxVQUYwQztBQUcxQ0MsTUFIMEM7QUFJMUNDLFVBSjBDO0FBSzFDQyxPQUwwQztBQU0xQ0MsYUFOMEM7QUFPMUNDO0FBUDBDLENBQUQsS0FRckM7QUFBQTs7QUFDSixRQUFNQyxRQUFRLEdBQUdDLHVFQUFXLEVBQTVCO0FBQ0EsUUFBTTtBQUFFQyxPQUFGO0FBQU9DO0FBQVAsTUFBa0JDLDZFQUFTLENBQUM7QUFDaENDLGVBQVcsRUFBRSxJQURtQjtBQUVoQ0MsY0FBVSxFQUFFTixRQUFRLEdBQUcsVUFBSCxHQUFnQjtBQUZKLEdBQUQsQ0FBakM7QUFLQSxTQUNFLE1BQUMsVUFBRDtBQUNFLGFBQVMsRUFBRVAsU0FBUyxJQUFJLEVBRDFCO0FBRUUsUUFBSSxFQUFFRSxJQUZSO0FBR0UsV0FBTyxFQUFFSSxPQUhYO0FBSUUsWUFBUSxFQUFFUSxrRUFKWjtBQUtFLFdBQU8sRUFBQyxTQUxWO0FBTUUsV0FBTyxFQUFFSixNQUFNLEdBQUcsU0FBSCxHQUFlLFNBTmhDO0FBT0UsUUFBSSxFQUFDLE1BUFA7QUFRRSxPQUFHLEVBQUVELEdBUlA7QUFTRSxjQUFVLEVBQUUsTUFBTU0sMEVBQWUsQ0FBQ1osUUFBRCxDQVRuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0UsTUFBQyxPQUFEO0FBQ0UsV0FBTyxFQUFDLE1BRFY7QUFFRSxjQUFVLEVBQUMsT0FGYjtBQUdFLFlBQVEsRUFBQyxLQUhYO0FBSUUsV0FBTyxFQUFDLE1BSlY7QUFLRSxhQUFTLEVBQUMsU0FMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyxzREFBRDtBQUFjLGFBQVMsRUFBRUUsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsYUFBUyxFQUFDLFFBRFo7QUFFRSxZQUFRLEVBQUVXLDhEQUZaO0FBR0UsY0FBVSxFQUFFQyxpRUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0diLEtBTEgsQ0FERixDQVBGLEVBZ0JHSCxRQWhCSCxDQVhGLENBREY7QUFnQ0QsQ0EvQ0Q7O0dBQU1GLEk7VUFTYVMsK0QsRUFDT0cscUU7OztLQVZwQlosSTtBQWlEU0EsbUVBQWY7QUFFQSxNQUFNbUIsVUFBVSxHQUFHQyxpRUFBTSxDQUFDQyxvREFBTSxDQUFDQyxDQUFSLENBQVQ7QUFBQTtBQUFBO0FBQUEsb1ZBRVEsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLG1CQUZwQyxFQWFXLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWdCLEdBQUVBLEtBQUssQ0FBQ0csV0FBTixDQUFrQkMsT0FBUSxJQWJ2RCxFQXdCVSxDQUFDO0FBQUVKO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUksbUJBeEJ0QyxDQUFoQjtNQUFNVCxVO0FBZ0NOLE1BQU1VLE9BQU8sR0FBR1QsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ1MsR0FBUixDQUFUO0FBQUE7QUFBQTtBQUFBLDZJQU1VLENBQUM7QUFBRVA7QUFBRixDQUFELEtBQWdCLEdBQUVBLEtBQUssQ0FBQ0csV0FBTixDQUFrQkMsT0FBUSxJQU50RCxDQUFiO01BQU1FLE8iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9saW5rLWNvbXBvbmVudHMvbGluay50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XG5pbXBvcnQge1xuICBkZWxheVRyYW5zaXRpb24sXG4gIGVhc2VUcmFuc2l0aW9uLFxuICBob3Zlck1vdGlvbixcbiAgc2NhbGVBbmltYXRpb25zLFxufSBmcm9tICdAY29tcG9uZW50cy9mcmFtZXInO1xuaW1wb3J0IFdyYXBwZXJJbWFnZSBmcm9tICcuL3dyYXBwZXItaW1hZ2UnO1xuaW1wb3J0IHVzZUlzTW9iaWxlIGZyb20gJ0BhcnRpc3QvaG9va3MvaXMtbW9iaWxlJztcblxuaW50ZXJmYWNlIExpbmtQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgaHJlZj86IHN0cmluZztcbiAgaGFzRGVsYXk/OiBudW1iZXI7XG4gIGltYWdlPzogUmVhY3QuUmVhY3ROb2RlO1xuICBpc0hpZ2hsaWdodD86IHN0cmluZztcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IExpbms6IEZ1bmN0aW9uQ29tcG9uZW50PExpbmtQcm9wcz4gPSAoe1xuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxuICBocmVmLFxuICBoYXNEZWxheSxcbiAgaW1hZ2UsXG4gIGlzSGlnaGxpZ2h0LFxuICBvbkNsaWNrLFxufSkgPT4ge1xuICBjb25zdCBpc01vYmlsZSA9IHVzZUlzTW9iaWxlKCk7XG4gIGNvbnN0IHsgcmVmLCBpblZpZXcgfSA9IHVzZUluVmlldyh7XG4gICAgdHJpZ2dlck9uY2U6IHRydWUsXG4gICAgcm9vdE1hcmdpbjogaXNNb2JpbGUgPyAnNjBweCAwcHgnIDogJzIwMHB4IDBweCcsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZExpbmtcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lIHx8ICcnfVxuICAgICAgaHJlZj17aHJlZn1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICB2YXJpYW50cz17c2NhbGVBbmltYXRpb25zfVxuICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgYW5pbWF0ZT17aW5WaWV3ID8gJ2FuaW1hdGUnIDogJ2luaXRpYWwnfVxuICAgICAgZXhpdD1cImV4aXRcIlxuICAgICAgcmVmPXtyZWZ9XG4gICAgICB0cmFuc2l0aW9uPXsoKSA9PiBkZWxheVRyYW5zaXRpb24oaGFzRGVsYXkpfVxuICAgID5cbiAgICAgIDxXcmFwcGVyXG4gICAgICAgIGluaXRpYWw9XCJyZXN0XCJcbiAgICAgICAgd2hpbGVIb3Zlcj1cImhvdmVyXCJcbiAgICAgICAgd2hpbGVUYXA9XCJ0YXBcIlxuICAgICAgICBhbmltYXRlPVwicmVzdFwiXG4gICAgICAgIGNsYXNzTmFtZT1cIndyYXBwZXJcIlxuICAgICAgPlxuICAgICAgICA8V3JhcHBlckltYWdlIGNsYXNzTmFtZT17aXNIaWdobGlnaHR9PlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtb3Rpb25cIlxuICAgICAgICAgICAgdmFyaWFudHM9e2hvdmVyTW90aW9ufVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17ZWFzZVRyYW5zaXRpb259XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ltYWdlfVxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9XcmFwcGVySW1hZ2U+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L1N0eWxlZExpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkKG1vdGlvbi5hKWBcbiAgJi5oaWdobGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmhpZ2hsaWdodEJhY2tncm91bmR9O1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gICAgb3JkZXI6IC0xO1xuXG4gICAgLndyYXBwZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHBhZGRpbmc6IDMycHg7XG4gICAgICBnYXA6IDMycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLmJyZWFrcG9pbnRzLmxhcHRvcFN9cHhgfSkge1xuICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICBnYXA6IDI0cHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmOmhvdmVyIHtcbiAgICAud3JhcHBlci1pbWFnZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5pdGVtQmFja2dyb3VuZEhvdmVyfTtcbiAgICAgICYuaGlnaGxpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQobW90aW9uLmRpdilgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDI0cHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuYnJlYWtwb2ludHMubGFwdG9wU31weGB9KSB7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgLnBsYXktaWNvbiB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/link-components/link.tsx\n'
      );

      /***/
    },
});