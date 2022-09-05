webpackHotUpdate_N_E('pages/index', {
  /***/ './src/components/cover-image/index.tsx':
    /*!**********************************************!*\
  !*** ./src/components/cover-image/index.tsx ***!
  \**********************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoverImage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var _components_framer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/framer */ "./src/components/framer/index.tsx");\nvar _jsxFileName = "/Users/herni/Documents/repositories/trac/platform/frontend/ssr-artist/src/components/cover-image/index.tsx";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction CoverImage({\n  src,\n  alt,\n  variant = \'square\'\n}) {\n  return src ? __jsx(Cover, {\n    variant: variant,\n    src: src,\n    alt: alt,\n    variants: _components_framer__WEBPACK_IMPORTED_MODULE_3__["scaleAnimations"],\n    initial: "initial",\n    animate: "animate",\n    exit: "exit",\n    transition: _components_framer__WEBPACK_IMPORTED_MODULE_3__["imageTransition"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }) : __jsx(CoverColor, {\n    variant: variant,\n    variants: _components_framer__WEBPACK_IMPORTED_MODULE_3__["scaleAnimations"],\n    initial: "initial",\n    animate: "animate",\n    exit: "exit",\n    transition: _components_framer__WEBPACK_IMPORTED_MODULE_3__["imageTransition"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  });\n}\n_c = CoverImage;\nconst Cover = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].img).withConfig({\n  displayName: "cover-image__Cover",\n  componentId: "y910y5-0"\n})(["object-fit:cover;border-radius:5px;", " ", " ", ""], ({\n  variant\n}) => variant === \'square\' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:", ";height:", ";@media (max-width:", "){width:", ";height:", ";}"], ({\n  theme\n}) => theme.sizes.coverSize, ({\n  theme\n}) => theme.sizes.coverSize, ({\n  theme\n}) => `${theme.breakpoints.laptop}px`, ({\n  theme\n}) => theme.sizes.coverSizeMobile, ({\n  theme\n}) => theme.sizes.coverSizeMobile), ({\n  variant\n}) => variant === \'squareSmall\' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:", ";height:", ";"], ({\n  theme\n}) => theme.sizes.coverSizeSmall, ({\n  theme\n}) => theme.sizes.coverSizeSmall), ({\n  variant\n}) => variant === \'squareHighlight\' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:", ";height:", ";@media (max-width:", "){width:", ";height:", ";}"], ({\n  theme\n}) => theme.sizes.coverSizeHighlight, ({\n  theme\n}) => theme.sizes.coverSizeHighlight, ({\n  theme\n}) => `${theme.breakpoints.laptopS}px`, ({\n  theme\n}) => theme.sizes.coverSizeHighlightMobile, ({\n  theme\n}) => theme.sizes.coverSizeHighlightMobile));\n_c2 = Cover;\nconst CoverColor = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div).withConfig({\n  displayName: "cover-image__CoverColor",\n  componentId: "y910y5-1"\n})(["background-color:", ";border-radius:5px;", " ", " ", ""], ({\n  theme\n}) => theme.colors.secondary, ({\n  variant\n}) => variant === \'square\' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:", ";height:", ";@media (max-width:", "){width:", ";height:", ";}"], ({\n  theme\n}) => theme.sizes.coverSize, ({\n  theme\n}) => theme.sizes.coverSize, ({\n  theme\n}) => `${theme.breakpoints.laptop}px`, ({\n  theme\n}) => theme.sizes.coverSizeMobile, ({\n  theme\n}) => theme.sizes.coverSizeMobile), ({\n  variant\n}) => variant === \'squareSmall\' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:", ";height:", ";"], ({\n  theme\n}) => theme.sizes.coverSizeSmall, ({\n  theme\n}) => theme.sizes.coverSizeSmall), ({\n  variant\n}) => variant === \'squareHighlight\' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:", ";height:", ";@media (max-width:", "){width:", ";height:", ";}"], ({\n  theme\n}) => theme.sizes.coverSizeHighlight, ({\n  theme\n}) => theme.sizes.coverSizeHighlight, ({\n  theme\n}) => `${theme.breakpoints.laptopS}px`, ({\n  theme\n}) => theme.sizes.coverSizeHighlightMobile, ({\n  theme\n}) => theme.sizes.coverSizeHighlightMobile));\n_c3 = CoverColor;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, "CoverImage");\n$RefreshReg$(_c2, "Cover");\n$RefreshReg$(_c3, "CoverColor");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvaW5kZXgudHN4P2U3MDUiXSwibmFtZXMiOlsiQ292ZXJJbWFnZSIsInNyYyIsImFsdCIsInZhcmlhbnQiLCJzY2FsZUFuaW1hdGlvbnMiLCJpbWFnZVRyYW5zaXRpb24iLCJDb3ZlciIsInN0eWxlZCIsIm1vdGlvbiIsImltZyIsImNzcyIsInRoZW1lIiwic2l6ZXMiLCJjb3ZlclNpemUiLCJicmVha3BvaW50cyIsImxhcHRvcCIsImNvdmVyU2l6ZU1vYmlsZSIsImNvdmVyU2l6ZVNtYWxsIiwiY292ZXJTaXplSGlnaGxpZ2h0IiwibGFwdG9wUyIsImNvdmVyU2l6ZUhpZ2hsaWdodE1vYmlsZSIsIkNvdmVyQ29sb3IiLCJkaXYiLCJjb2xvcnMiLCJzZWNvbmRhcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFVZSxTQUFTQSxVQUFULENBQW9CO0FBQ2pDQyxLQURpQztBQUVqQ0MsS0FGaUM7QUFHakNDLFNBQU8sR0FBRztBQUh1QixDQUFwQixFQUlLO0FBQ2xCLFNBQU9GLEdBQUcsR0FDUixNQUFDLEtBQUQ7QUFDRSxXQUFPLEVBQUVFLE9BRFg7QUFFRSxPQUFHLEVBQUVGLEdBRlA7QUFHRSxPQUFHLEVBQUVDLEdBSFA7QUFJRSxZQUFRLEVBQUVFLGtFQUpaO0FBS0UsV0FBTyxFQUFDLFNBTFY7QUFNRSxXQUFPLEVBQUMsU0FOVjtBQU9FLFFBQUksRUFBQyxNQVBQO0FBUUUsY0FBVSxFQUFFQyxrRUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFEsR0FZUixNQUFDLFVBQUQ7QUFDRSxXQUFPLEVBQUVGLE9BRFg7QUFFRSxZQUFRLEVBQUVDLGtFQUZaO0FBR0UsV0FBTyxFQUFDLFNBSFY7QUFJRSxXQUFPLEVBQUMsU0FKVjtBQUtFLFFBQUksRUFBQyxNQUxQO0FBTUUsY0FBVSxFQUFFQyxrRUFOZDtBQUFBO0FBQUE7QUFB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QUFELEtBQ0FBLE9BQU8sS0FBSyxpQkFBWixJQUNBTyw2REFEQSw4RUFFVyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU0sa0JBRnRDLEVBR1ksQ0FBQztBQUFFUDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLGtCQUh2QyxFQUt1QixDQUFDO0FBQUVQO0FBQUYsQ0FBRCxLQUFnQixHQUFFQSxLQUFLLENBQUNHLFdBQU4sQ0FBa0JLLE9BQVEsSUFMbkUsRUFNYSxDQUFDO0FBQUVSO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVEsd0JBTnhDLEVBT2MsQ0FBQztBQUFFVDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlRLHdCQVB6QyxDQXZCWSxDQUFoQjtNQUFNQyxVIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGltYWdlVHJhbnNpdGlvbiwgc2NhbGVBbmltYXRpb25zIH0gZnJvbSAnQGNvbXBvbmVudHMvZnJhbWVyJztcblxuZGVjbGFyZSB0eXBlIENvdmVySW1hZ2VUeXBlID0gJ3NxdWFyZScgfCAnc3F1YXJlU21hbGwnIHwgJ3NxdWFyZUhpZ2hsaWdodCc7XG5cbmludGVyZmFjZSBDb3ZlckltYWdlUHJvcHMge1xuICB2YXJpYW50PzogQ292ZXJJbWFnZVR5cGU7XG4gIGFsdD86IHN0cmluZztcbiAgc3JjPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3ZlckltYWdlKHtcbiAgc3JjLFxuICBhbHQsXG4gIHZhcmlhbnQgPSAnc3F1YXJlJyxcbn06IENvdmVySW1hZ2VQcm9wcykge1xuICByZXR1cm4gc3JjID8gKFxuICAgIDxDb3ZlclxuICAgICAgdmFyaWFudD17dmFyaWFudH1cbiAgICAgIHNyYz17c3JjfVxuICAgICAgYWx0PXthbHR9XG4gICAgICB2YXJpYW50cz17c2NhbGVBbmltYXRpb25zfVxuICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgZXhpdD1cImV4aXRcIlxuICAgICAgdHJhbnNpdGlvbj17aW1hZ2VUcmFuc2l0aW9ufVxuICAgIC8+XG4gICkgOiAoXG4gICAgPENvdmVyQ29sb3JcbiAgICAgIHZhcmlhbnQ9e3ZhcmlhbnR9XG4gICAgICB2YXJpYW50cz17c2NhbGVBbmltYXRpb25zfVxuICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgZXhpdD1cImV4aXRcIlxuICAgICAgdHJhbnNpdGlvbj17aW1hZ2VUcmFuc2l0aW9ufVxuICAgIC8+XG4gICk7XG59XG5cbmNvbnN0IENvdmVyID0gc3R5bGVkKG1vdGlvbi5pbWcpPHsgdmFyaWFudDogQ292ZXJJbWFnZVR5cGUgfT5gXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgJHsoeyB2YXJpYW50IH0pID0+XG4gICAgdmFyaWFudCA9PT0gJ3NxdWFyZScgJiZcbiAgICBjc3NgXG4gICAgICB3aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zaXplcy5jb3ZlclNpemV9O1xuICAgICAgaGVpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNpemVzLmNvdmVyU2l6ZX07XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5icmVha3BvaW50cy5sYXB0b3B9cHhgfSkge1xuICAgICAgICB3aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zaXplcy5jb3ZlclNpemVNb2JpbGV9O1xuICAgICAgICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2l6ZXMuY292ZXJTaXplTW9iaWxlfTtcbiAgICAgIH1cbiAgICBgfVxuXG4gICR7KHsgdmFyaWFudCB9KSA9PlxuICAgIHZhcmlhbnQgPT09ICdzcXVhcmVTbWFsbCcgJiZcbiAgICBjc3NgXG4gICAgICB3aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zaXplcy5jb3ZlclNpemVTbWFsbH07XG4gICAgICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2l6ZXMuY292ZXJTaXplU21hbGx9O1xuICAgIGB9XG5cbiAgJHsoeyB2YXJpYW50IH0pID0+XG4gICAgdmFyaWFudCA9PT0gJ3NxdWFyZUhpZ2hsaWdodCcgJiZcbiAgICBjc3NgXG4gICAgICB3aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zaXplcy5jb3ZlclNpemVIaWdobGlnaHR9O1xuICAgICAgaGVpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNpemVzLmNvdmVyU2l6ZUhpZ2hsaWdodH07XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLmJyZWFrcG9pbnRzLmxhcHRvcFN9cHhgfSkge1xuICAgICAgICB3aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zaXplcy5jb3ZlclNpemVIaWdobGlnaHRNb2JpbGV9O1xuICAgICAgICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2l6ZXMuY292ZXJTaXplSGlnaGxpZ2h0TW9iaWxlfTtcbiAgICAgIH1cbiAgICBgfVxuYDtcblxuY29uc3QgQ292ZXJDb2xvciA9IHN0eWxlZChtb3Rpb24uZGl2KTx7IHZhcmlhbnQ6IENvdmVySW1hZ2VUeXBlIH0+YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgJHsoeyB2YXJpYW50IH0pID0+XG4gICAgdmFyaWFudCA9PT0gJ3NxdWFyZScgJiZcbiAgICBjc3NgXG4gICAgICB3aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zaXplcy5jb3ZlclNpemV9O1xuICAgICAgaGVpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNpemVzLmNvdmVyU2l6ZX07XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5icmVha3BvaW50cy5sYXB0b3B9cHhgfSkge1xuICAgICAgICB3aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zaXplcy5jb3ZlclNpemVNb2JpbGV9O1xuICAgICAgICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2l6ZXMuY292ZXJTaXplTW9iaWxlfTtcbiAgICAgIH1cbiAgICBgfVxuXG4gICR7KHsgdmFyaWFudCB9KSA9PlxuICAgIHZhcmlhbnQgPT09ICdzcXVhcmVTbWFsbCcgJiZcbiAgICBjc3NgXG4gICAgICB3aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zaXplcy5jb3ZlclNpemVTbWFsbH07XG4gICAgICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2l6ZXMuY292ZXJTaXplU21hbGx9O1xuICAgIGB9XG5cbiAgJHsoeyB2YXJpYW50IH0pID0+XG4gICAgdmFyaWFudCA9PT0gJ3NxdWFyZUhpZ2hsaWdodCcgJiZcbiAgICBjc3NgXG4gICAgICB3aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zaXplcy5jb3ZlclNpemVIaWdobGlnaHR9O1xuICAgICAgaGVpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNpemVzLmNvdmVyU2l6ZUhpZ2hsaWdodH07XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLmJyZWFrcG9pbnRzLmxhcHRvcFN9cHhgfSkge1xuICAgICAgICB3aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zaXplcy5jb3ZlclNpemVIaWdobGlnaHRNb2JpbGV9O1xuICAgICAgICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2l6ZXMuY292ZXJTaXplSGlnaGxpZ2h0TW9iaWxlfTtcbiAgICAgIH1cbiAgICBgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/cover-image/index.tsx\n'
      );

      /***/
    },
});