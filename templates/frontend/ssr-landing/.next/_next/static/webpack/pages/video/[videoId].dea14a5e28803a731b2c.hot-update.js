webpackHotUpdate_N_E('pages/video/[videoId]', {
  /***/ './src/components/link-components/link.tsx':
    /*!*************************************************!*\
  !*** ./src/components/link-components/link.tsx ***!
  \*************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");\n/* harmony import */ var _components_framer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/framer */ "./src/components/framer/index.tsx");\n/* harmony import */ var _wrapper_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wrapper-image */ "./src/components/link-components/wrapper-image.tsx");\nvar _jsxFileName = "/Users/herni/Documents/repositories/trac/platform/frontend/ssr-artist/src/components/link-components/link.tsx",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst Link = ({\n  className,\n  children,\n  href,\n  hasDelay,\n  image,\n  highlight,\n  onClick\n}) => {\n  _s();\n\n  const {\n    ref,\n    inView\n  } = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"])({\n    triggerOnce: true,\n    rootMargin: \'200px 0px\'\n  });\n  return __jsx(StyledLink, {\n    className: className || \'\',\n    href: href,\n    onClick: onClick,\n    variants: _components_framer__WEBPACK_IMPORTED_MODULE_4__["scaleAnimations"],\n    initial: "initial",\n    animate: inView || hasDelay === 0 ? \'animate\' : \'initial\',\n    exit: "exit",\n    ref: ref,\n    transition: () => Object(_components_framer__WEBPACK_IMPORTED_MODULE_4__["delayTransition"])(hasDelay),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(Wrapper, {\n    initial: "rest",\n    whileHover: "hover",\n    whileTap: "tap",\n    animate: "rest",\n    className: "wrapper",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(_wrapper_image__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    className: highlight,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {\n    className: "motion",\n    variants: _components_framer__WEBPACK_IMPORTED_MODULE_4__["hoverMotion"],\n    transition: _components_framer__WEBPACK_IMPORTED_MODULE_4__["easeTransition"],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, image)), children));\n};\n\n_s(Link, "oyd/E8SD7Fx4uOp6P7gVV2pVlaE=", false, function () {\n  return [react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"]];\n});\n\n_c = Link;\n/* harmony default export */ __webpack_exports__["default"] = (Link);\nconst StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].a).withConfig({\n  displayName: "link__StyledLink",\n  componentId: "gyn5x7-0"\n})(["&.highlight{background-color:", ";grid-column:span 2;order:-1;.wrapper{flex-direction:row;padding:32px;gap:32px;border-radius:5px;height:100%;@media (max-width:", "){padding:24px;gap:24px;flex-direction:column;justify-content:center;align-items:center;}}}&:hover{.wrapper-image{background-color:", ";&.highlight{background:none;}}}"], ({\n  theme\n}) => theme.colors.highlightBackground, ({\n  theme\n}) => `${theme.breakpoints.laptopS}px`, ({\n  theme\n}) => theme.colors.itemBackgroundHover);\n_c2 = StyledLink;\nconst Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div).withConfig({\n  displayName: "link__Wrapper",\n  componentId: "gyn5x7-1"\n})(["display:flex;flex-direction:column;align-items:flex-start;gap:24px;@media (max-width:", "){gap:12px;}&:hover{.play-icon{opacity:1;}}"], ({\n  theme\n}) => `${theme.breakpoints.laptopS}px`);\n_c3 = Wrapper;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, "Link");\n$RefreshReg$(_c2, "StyledLink");\n$RefreshReg$(_c3, "Wrapper");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGluay1jb21wb25lbnRzL2xpbmsudHN4P2M5MDkiXSwibmFtZXMiOlsiTGluayIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiaHJlZiIsImhhc0RlbGF5IiwiaW1hZ2UiLCJoaWdobGlnaHQiLCJvbkNsaWNrIiwicmVmIiwiaW5WaWV3IiwidXNlSW5WaWV3IiwidHJpZ2dlck9uY2UiLCJyb290TWFyZ2luIiwic2NhbGVBbmltYXRpb25zIiwiZGVsYXlUcmFuc2l0aW9uIiwiaG92ZXJNb3Rpb24iLCJlYXNlVHJhbnNpdGlvbiIsIlN0eWxlZExpbmsiLCJzdHlsZWQiLCJtb3Rpb24iLCJhIiwidGhlbWUiLCJjb2xvcnMiLCJoaWdobGlnaHRCYWNrZ3JvdW5kIiwiYnJlYWtwb2ludHMiLCJsYXB0b3BTIiwiaXRlbUJhY2tncm91bmRIb3ZlciIsIldyYXBwZXIiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFNQTs7QUFXQSxNQUFNQSxJQUFrQyxHQUFHLENBQUM7QUFDMUNDLFdBRDBDO0FBRTFDQyxVQUYwQztBQUcxQ0MsTUFIMEM7QUFJMUNDLFVBSjBDO0FBSzFDQyxPQUwwQztBQU0xQ0MsV0FOMEM7QUFPMUNDO0FBUDBDLENBQUQsS0FRckM7QUFBQTs7QUFDSixRQUFNO0FBQUVDLE9BQUY7QUFBT0M7QUFBUCxNQUFrQkMsNkVBQVMsQ0FBQztBQUNoQ0MsZUFBVyxFQUFFLElBRG1CO0FBRWhDQyxjQUFVLEVBQUU7QUFGb0IsR0FBRCxDQUFqQztBQUtBLFNBQ0UsTUFBQyxVQUFEO0FBQ0UsYUFBUyxFQUFFWCxTQUFTLElBQUksRUFEMUI7QUFFRSxRQUFJLEVBQUVFLElBRlI7QUFHRSxXQUFPLEVBQUVJLE9BSFg7QUFJRSxZQUFRLEVBQUVNLGtFQUpaO0FBS0UsV0FBTyxFQUFDLFNBTFY7QUFNRSxXQUFPLEVBQUVKLE1BQU0sSUFBSUwsUUFBUSxLQUFLLENBQXZCLEdBQTJCLFNBQTNCLEdBQXVDLFNBTmxEO0FBT0UsUUFBSSxFQUFDLE1BUFA7QUFRRSxPQUFHLEVBQUVJLEdBUlA7QUFTRSxjQUFVLEVBQUUsTUFBTU0sMEVBQWUsQ0FBQ1YsUUFBRCxDQVRuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0UsTUFBQyxPQUFEO0FBQ0UsV0FBTyxFQUFDLE1BRFY7QUFFRSxjQUFVLEVBQUMsT0FGYjtBQUdFLFlBQVEsRUFBQyxLQUhYO0FBSUUsV0FBTyxFQUFDLE1BSlY7QUFLRSxhQUFTLEVBQUMsU0FMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyxzREFBRDtBQUFjLGFBQVMsRUFBRUUsU0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsYUFBUyxFQUFDLFFBRFo7QUFFRSxZQUFRLEVBQUVTLDhEQUZaO0FBR0UsY0FBVSxFQUFFQyxpRUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dYLEtBTEgsQ0FERixDQVBGLEVBZ0JHSCxRQWhCSCxDQVhGLENBREY7QUFnQ0QsQ0E5Q0Q7O0dBQU1GLEk7VUFTb0JVLHFFOzs7S0FUcEJWLEk7QUFnRFNBLG1FQUFmO0FBRUEsTUFBTWlCLFVBQVUsR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsQ0FBUixDQUFUO0FBQUE7QUFBQTtBQUFBLG9WQUVRLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxtQkFGcEMsRUFhVyxDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFnQixHQUFFQSxLQUFLLENBQUNHLFdBQU4sQ0FBa0JDLE9BQVEsSUFidkQsRUF3QlUsQ0FBQztBQUFFSjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFJLG1CQXhCdEMsQ0FBaEI7TUFBTVQsVTtBQWdDTixNQUFNVSxPQUFPLEdBQUdULGlFQUFNLENBQUNDLG9EQUFNLENBQUNTLEdBQVIsQ0FBVDtBQUFBO0FBQUE7QUFBQSw2SUFNVSxDQUFDO0FBQUVQO0FBQUYsQ0FBRCxLQUFnQixHQUFFQSxLQUFLLENBQUNHLFdBQU4sQ0FBa0JDLE9BQVEsSUFOdEQsQ0FBYjtNQUFNRSxPIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvbGluay1jb21wb25lbnRzL2xpbmsudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xuaW1wb3J0IHtcbiAgZGVsYXlUcmFuc2l0aW9uLFxuICBlYXNlVHJhbnNpdGlvbixcbiAgaG92ZXJNb3Rpb24sXG4gIHNjYWxlQW5pbWF0aW9ucyxcbn0gZnJvbSAnQGNvbXBvbmVudHMvZnJhbWVyJztcbmltcG9ydCBXcmFwcGVySW1hZ2UgZnJvbSAnLi93cmFwcGVyLWltYWdlJztcblxuaW50ZXJmYWNlIExpbmtQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgaHJlZj86IHN0cmluZztcbiAgaGFzRGVsYXk/OiBudW1iZXI7XG4gIGltYWdlPzogUmVhY3QuUmVhY3ROb2RlO1xuICBoaWdobGlnaHQ/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBMaW5rOiBGdW5jdGlvbkNvbXBvbmVudDxMaW5rUHJvcHM+ID0gKHtcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgaHJlZixcbiAgaGFzRGVsYXksXG4gIGltYWdlLFxuICBoaWdobGlnaHQsXG4gIG9uQ2xpY2ssXG59KSA9PiB7XG4gIGNvbnN0IHsgcmVmLCBpblZpZXcgfSA9IHVzZUluVmlldyh7XG4gICAgdHJpZ2dlck9uY2U6IHRydWUsXG4gICAgcm9vdE1hcmdpbjogJzIwMHB4IDBweCcsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZExpbmtcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lIHx8ICcnfVxuICAgICAgaHJlZj17aHJlZn1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICB2YXJpYW50cz17c2NhbGVBbmltYXRpb25zfVxuICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgYW5pbWF0ZT17aW5WaWV3IHx8IGhhc0RlbGF5ID09PSAwID8gJ2FuaW1hdGUnIDogJ2luaXRpYWwnfVxuICAgICAgZXhpdD1cImV4aXRcIlxuICAgICAgcmVmPXtyZWZ9XG4gICAgICB0cmFuc2l0aW9uPXsoKSA9PiBkZWxheVRyYW5zaXRpb24oaGFzRGVsYXkpfVxuICAgID5cbiAgICAgIDxXcmFwcGVyXG4gICAgICAgIGluaXRpYWw9XCJyZXN0XCJcbiAgICAgICAgd2hpbGVIb3Zlcj1cImhvdmVyXCJcbiAgICAgICAgd2hpbGVUYXA9XCJ0YXBcIlxuICAgICAgICBhbmltYXRlPVwicmVzdFwiXG4gICAgICAgIGNsYXNzTmFtZT1cIndyYXBwZXJcIlxuICAgICAgPlxuICAgICAgICA8V3JhcHBlckltYWdlIGNsYXNzTmFtZT17aGlnaGxpZ2h0fT5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90aW9uXCJcbiAgICAgICAgICAgIHZhcmlhbnRzPXtob3Zlck1vdGlvbn1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e2Vhc2VUcmFuc2l0aW9ufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpbWFnZX1cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvV3JhcHBlckltYWdlPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9TdHlsZWRMaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGluaztcblxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZChtb3Rpb24uYSlgXG4gICYuaGlnaGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5oaWdobGlnaHRCYWNrZ3JvdW5kfTtcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICAgIG9yZGVyOiAtMTtcblxuICAgIC53cmFwcGVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBwYWRkaW5nOiAzMnB4O1xuICAgICAgZ2FwOiAzMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5icmVha3BvaW50cy5sYXB0b3BTfXB4YH0pIHtcbiAgICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgICAgZ2FwOiAyNHB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgLndyYXBwZXItaW1hZ2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuaXRlbUJhY2tncm91bmRIb3Zlcn07XG4gICAgICAmLmhpZ2hsaWdodCB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAyNHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLmJyZWFrcG9pbnRzLmxhcHRvcFN9cHhgfSkge1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIC5wbGF5LWljb24ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/link-components/link.tsx\n'
      );

      /***/
    },

  /***/ './src/components/video-link/index.tsx':
    /*!*********************************************!*\
  !*** ./src/components/video-link/index.tsx ***!
  \*********************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoLink; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_icons_play__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/icons/play */ "./src/components/icons/play/index.tsx");\n/* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/cover-image */ "./src/components/cover-image/index.tsx");\n/* harmony import */ var _components_link_components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/link-components/link */ "./src/components/link-components/link.tsx");\n/* harmony import */ var _components_featured_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/featured-badge */ "./src/components/featured-badge/index.tsx");\n/* harmony import */ var _components_link_components_text_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/link-components/text-info */ "./src/components/link-components/text-info.tsx");\n/* harmony import */ var _components_link_components_play_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/link-components/play-wrapper */ "./src/components/link-components/play-wrapper.tsx");\n/* harmony import */ var _components_link_components_wrapper_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/link-components/wrapper-info */ "./src/components/link-components/wrapper-info.tsx");\nvar _jsxFileName = "/Users/herni/Documents/repositories/trac/platform/frontend/ssr-artist/src/components/video-link/index.tsx";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction VideoLink({\n  data,\n  className,\n  artistName,\n  hasDelay\n}) {\n  const handleClick = () => {\n    analytics.track(\'Tracpage Link Click\', {\n      artist_id: artistName,\n      category: data.type === \'embed\',\n      name: data.title\n    });\n  };\n\n  const getCode = () => {\n    var _data$url;\n\n    if (data.id) {\n      return data.id;\n    }\n\n    return (_data$url = data.url) === null || _data$url === void 0 ? void 0 : _data$url.split(\'embed/\')[1];\n  };\n\n  const getPoster = () => {\n    const code = getCode();\n    return [`https://img.youtube.com/vi/${code}/maxresdefault.jpg`, `https://img.youtube.com/vi/${code}/hqdefault.jpg`, `https://img.youtube.com/vi/${code}/mqdefault.jpg`, `https://img.youtube.com/vi/${code}/default.jpg`];\n  };\n\n  return data.title && data.url ? __jsx(_components_link_components_link__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    className: className ? className : \'\',\n    href: `/video/${data.id}`,\n    onClick: handleClick,\n    hasDelay: hasDelay,\n    highlight: data.highlight ? \'highlight\' : \'\',\n    image: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_cover_image__WEBPACK_IMPORTED_MODULE_2__["default"], {\n      src: getPoster()[0] || undefined,\n      alt: data.title,\n      variant: data.highlight ? \'squareHighlight\' : \'square\',\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }\n    }), __jsx(_components_link_components_play_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {\n      className: `play-icon ${data.highlight ? \'highlight\' : \'\'}`,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 11\n      }\n    }, __jsx(_components_icons_play__WEBPACK_IMPORTED_MODULE_1__["default"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 13\n      }\n    }))),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, __jsx(_components_link_components_wrapper_info__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    highlight: data.highlight,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(_components_link_components_text_info__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    className: `${data.highlight ? \'highlight\' : \'\'}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, __jsx("h3", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, data.title), __jsx("p", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, artistName, ", Star6ixse7en, MRG, Sweez")), data.highlight ? __jsx(_components_featured_badge__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: "badge",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 27\n    }\n  }) : null)) : null;\n}\n_c = VideoLink;\n\nvar _c;\n\n$RefreshReg$(_c, "VideoLink");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8tbGluay9pbmRleC50c3g/MWU0NCJdLCJuYW1lcyI6WyJWaWRlb0xpbmsiLCJkYXRhIiwiY2xhc3NOYW1lIiwiYXJ0aXN0TmFtZSIsImhhc0RlbGF5IiwiaGFuZGxlQ2xpY2siLCJhbmFseXRpY3MiLCJ0cmFjayIsImFydGlzdF9pZCIsImNhdGVnb3J5IiwidHlwZSIsIm5hbWUiLCJ0aXRsZSIsImdldENvZGUiLCJpZCIsInVybCIsInNwbGl0IiwiZ2V0UG9zdGVyIiwiY29kZSIsImhpZ2hsaWdodCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLFNBQVQsQ0FBbUI7QUFDaENDLE1BRGdDO0FBRWhDQyxXQUZnQztBQUdoQ0MsWUFIZ0M7QUFJaENDO0FBSmdDLENBQW5CLEVBZ0JaO0FBQ0QsUUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDeEJDLGFBQVMsQ0FBQ0MsS0FBVixDQUFnQixxQkFBaEIsRUFBdUM7QUFDckNDLGVBQVMsRUFBRUwsVUFEMEI7QUFFckNNLGNBQVEsRUFBRVIsSUFBSSxDQUFDUyxJQUFMLEtBQWMsT0FGYTtBQUdyQ0MsVUFBSSxFQUFFVixJQUFJLENBQUNXO0FBSDBCLEtBQXZDO0FBS0QsR0FORDs7QUFRQSxRQUFNQyxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNwQixRQUFJWixJQUFJLENBQUNhLEVBQVQsRUFBYTtBQUNYLGFBQU9iLElBQUksQ0FBQ2EsRUFBWjtBQUNEOztBQUVELHdCQUFPYixJQUFJLENBQUNjLEdBQVosOENBQU8sVUFBVUMsS0FBVixDQUFnQixRQUFoQixFQUEwQixDQUExQixDQUFQO0FBQ0QsR0FORDs7QUFRQSxRQUFNQyxTQUFTLEdBQUcsTUFBTTtBQUN0QixVQUFNQyxJQUFJLEdBQUdMLE9BQU8sRUFBcEI7QUFDQSxXQUFPLENBQ0osOEJBQTZCSyxJQUFLLG9CQUQ5QixFQUVKLDhCQUE2QkEsSUFBSyxnQkFGOUIsRUFHSiw4QkFBNkJBLElBQUssZ0JBSDlCLEVBSUosOEJBQTZCQSxJQUFLLGNBSjlCLENBQVA7QUFNRCxHQVJEOztBQVVBLFNBQU9qQixJQUFJLENBQUNXLEtBQUwsSUFBY1gsSUFBSSxDQUFDYyxHQUFuQixHQUNMLE1BQUMsd0VBQUQ7QUFDRSxhQUFTLEVBQUViLFNBQVMsR0FBR0EsU0FBSCxHQUFlLEVBRHJDO0FBRUUsUUFBSSxFQUFHLFVBQVNELElBQUksQ0FBQ2EsRUFBRyxFQUYxQjtBQUdFLFdBQU8sRUFBRVQsV0FIWDtBQUlFLFlBQVEsRUFBRUQsUUFKWjtBQUtFLGFBQVMsRUFBRUgsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQixXQUFqQixHQUErQixFQUw1QztBQU1FLFNBQUssRUFDSCxtRUFDRSxNQUFDLCtEQUFEO0FBQ0UsU0FBRyxFQUFFRixTQUFTLEdBQUcsQ0FBSCxDQUFULElBQWtCRyxTQUR6QjtBQUVFLFNBQUcsRUFBRW5CLElBQUksQ0FBQ1csS0FGWjtBQUdFLGFBQU8sRUFBRVgsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQixpQkFBakIsR0FBcUMsUUFIaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBTUUsTUFBQyxnRkFBRDtBQUFNLGVBQVMsRUFBRyxhQUFZbEIsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQixXQUFqQixHQUErQixFQUFHLEVBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQU5GLENBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW1CRSxNQUFDLGdGQUFEO0FBQWEsYUFBUyxFQUFFbEIsSUFBSSxDQUFDa0IsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkVBQUQ7QUFBTSxhQUFTLEVBQUcsR0FBRWxCLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUIsV0FBakIsR0FBK0IsRUFBRyxFQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLbEIsSUFBSSxDQUFDVyxLQUFWLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlULFVBQUosK0JBRkYsQ0FERixFQUtHRixJQUFJLENBQUNrQixTQUFMLEdBQWlCLE1BQUMsa0VBQUQ7QUFBZSxhQUFTLEVBQUMsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFqQixHQUF1RCxJQUwxRCxDQW5CRixDQURLLEdBNEJILElBNUJKO0FBNkJEO0tBeEV1Qm5CLFMiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy92aWRlby1saW5rL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5SWNvbiBmcm9tICdAY29tcG9uZW50cy9pY29ucy9wbGF5JztcbmltcG9ydCBDb3ZlckltYWdlIGZyb20gJ0Bjb21wb25lbnRzL2NvdmVyLWltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ0Bjb21wb25lbnRzL2xpbmstY29tcG9uZW50cy9saW5rJztcbmltcG9ydCBGZWF0dXJlZEJhZGdlIGZyb20gJ0Bjb21wb25lbnRzL2ZlYXR1cmVkLWJhZGdlJztcbmltcG9ydCBJbmZvIGZyb20gJ0Bjb21wb25lbnRzL2xpbmstY29tcG9uZW50cy90ZXh0LWluZm8nO1xuaW1wb3J0IFBsYXkgZnJvbSAnQGNvbXBvbmVudHMvbGluay1jb21wb25lbnRzL3BsYXktd3JhcHBlcic7XG5pbXBvcnQgV3JhcHBlckluZm8gZnJvbSAnQGNvbXBvbmVudHMvbGluay1jb21wb25lbnRzL3dyYXBwZXItaW5mbyc7XG5cbmltcG9ydCB7IFRyYWNQYWdlTGlua1R5cGUgfSBmcm9tICdAc2VydmljZXMvdHJhY3BhZ2UvdHlwZXMvdHJhYy1wYWdlLWxpbmstdHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvTGluayh7XG4gIGRhdGEsXG4gIGNsYXNzTmFtZSxcbiAgYXJ0aXN0TmFtZSxcbiAgaGFzRGVsYXksXG59OiB7XG4gIGRhdGE6IHtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgaGlnaGxpZ2h0PzogYm9vbGVhbjtcbiAgICB0eXBlPzogVHJhY1BhZ2VMaW5rVHlwZTtcbiAgfTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBhcnRpc3ROYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgaGFzRGVsYXk/OiBudW1iZXI7XG59KSB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGFuYWx5dGljcy50cmFjaygnVHJhY3BhZ2UgTGluayBDbGljaycsIHtcbiAgICAgIGFydGlzdF9pZDogYXJ0aXN0TmFtZSxcbiAgICAgIGNhdGVnb3J5OiBkYXRhLnR5cGUgPT09ICdlbWJlZCcsXG4gICAgICBuYW1lOiBkYXRhLnRpdGxlLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldENvZGUgPSAoKSA9PiB7XG4gICAgaWYgKGRhdGEuaWQpIHtcbiAgICAgIHJldHVybiBkYXRhLmlkO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLnVybD8uc3BsaXQoJ2VtYmVkLycpWzFdO1xuICB9O1xuXG4gIGNvbnN0IGdldFBvc3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb2RlID0gZ2V0Q29kZSgpO1xuICAgIHJldHVybiBbXG4gICAgICBgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtjb2RlfS9tYXhyZXNkZWZhdWx0LmpwZ2AsXG4gICAgICBgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtjb2RlfS9ocWRlZmF1bHQuanBnYCxcbiAgICAgIGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke2NvZGV9L21xZGVmYXVsdC5qcGdgLFxuICAgICAgYGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7Y29kZX0vZGVmYXVsdC5qcGdgLFxuICAgIF07XG4gIH07XG5cbiAgcmV0dXJuIGRhdGEudGl0bGUgJiYgZGF0YS51cmwgPyAoXG4gICAgPExpbmtcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyd9XG4gICAgICBocmVmPXtgL3ZpZGVvLyR7ZGF0YS5pZH1gfVxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICBoYXNEZWxheT17aGFzRGVsYXl9XG4gICAgICBoaWdobGlnaHQ9e2RhdGEuaGlnaGxpZ2h0ID8gJ2hpZ2hsaWdodCcgOiAnJ31cbiAgICAgIGltYWdlPXtcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q292ZXJJbWFnZVxuICAgICAgICAgICAgc3JjPXtnZXRQb3N0ZXIoKVswXSB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICBhbHQ9e2RhdGEudGl0bGV9XG4gICAgICAgICAgICB2YXJpYW50PXtkYXRhLmhpZ2hsaWdodCA/ICdzcXVhcmVIaWdobGlnaHQnIDogJ3NxdWFyZSd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UGxheSBjbGFzc05hbWU9e2BwbGF5LWljb24gJHtkYXRhLmhpZ2hsaWdodCA/ICdoaWdobGlnaHQnIDogJyd9YH0+XG4gICAgICAgICAgICA8UGxheUljb24gLz5cbiAgICAgICAgICA8L1BsYXk+XG4gICAgICAgIDwvPlxuICAgICAgfVxuICAgID5cbiAgICAgIDxXcmFwcGVySW5mbyBoaWdobGlnaHQ9e2RhdGEuaGlnaGxpZ2h0fT5cbiAgICAgICAgPEluZm8gY2xhc3NOYW1lPXtgJHtkYXRhLmhpZ2hsaWdodCA/ICdoaWdobGlnaHQnIDogJyd9YH0+XG4gICAgICAgICAgPGgzPntkYXRhLnRpdGxlfTwvaDM+XG4gICAgICAgICAgPHA+e2FydGlzdE5hbWV9LCBTdGFyNml4c2U3ZW4sIE1SRywgU3dlZXo8L3A+XG4gICAgICAgIDwvSW5mbz5cbiAgICAgICAge2RhdGEuaGlnaGxpZ2h0ID8gPEZlYXR1cmVkQmFkZ2UgY2xhc3NOYW1lPVwiYmFkZ2VcIiAvPiA6IG51bGx9XG4gICAgICA8L1dyYXBwZXJJbmZvPlxuICAgIDwvTGluaz5cbiAgKSA6IG51bGw7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/video-link/index.tsx\n'
      );

      /***/
    },
});