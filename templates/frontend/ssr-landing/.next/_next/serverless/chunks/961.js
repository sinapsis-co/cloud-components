'use strict';
exports.id = 961;
exports.ids = [961];
exports.modules = {
  /***/ 8961: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* unused harmony export CircleCheckIcon */
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
    /* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9141);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);

    const CircleCheckIcon = (props) => {
      const pathLength = (0, framer_motion__WEBPACK_IMPORTED_MODULE_1__ /* .useMotionValue */.c$)(0);
      const opacity = (0, framer_motion__WEBPACK_IMPORTED_MODULE_1__ /* .useTransform */.Hm)(
        pathLength,
        [0.05, 0.15],
        [0, 1]
      );
      const path = {
        hidden: {
          pathLength: 0,
        },
        visible: {
          pathLength: 1,
          transition: {
            duration: 4,
            type: 'spring',
            stiffness: 50,
          },
        },
      };
      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('svg', {
        className: props.className,
        onClick: (ev) => (props.onClick ? props.onClick(ev) : null),
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        xmlns: 'http://www.w3.org/2000/svg',
        xmlnsXlink: 'http://www.w3.org/1999/xlink',
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
            framer_motion__WEBPACK_IMPORTED_MODULE_1__ /* .motion.path */.ww.path,
            {
              className: 'path',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeMiterlimit: '10',
              strokeLinejoin: 'round',
              d: 'M8 12.1 10.9 15 16 10',
              initial: 'hidden',
              animate: 'visible',
              exit: 'hidden',
              variants: path,
              style: {
                pathLength: pathLength,
                opacity: opacity,
              },
            }
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
            framer_motion__WEBPACK_IMPORTED_MODULE_1__ /* .motion.path */.ww.path,
            {
              className: 'circle',
              d: 'M1,12a11,11 0 1,0 22,0a11,11 0 1,0 -22,0',
              strokeWidth: '1.5',
              strokeLinecap: 'round',
              strokeMiterlimit: '10',
              initial: 'hidden',
              animate: 'visible',
              exit: 'hidden',
              variants: path,
              style: {
                pathLength: pathLength,
                opacity: opacity,
              },
            }
          ),
        ],
      });
    };
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (0,
    styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.ZP)(CircleCheckIcon).withConfig({
      displayName: 'circle-check',
      componentId: 'sc-197s174-0',
    })(
      [
        'width:',
        'px;height:',
        'px;.path,.circle{fill:none;transition:stroke ',
        ';}.path{stroke:',
        ';}.circle{stroke:',
        ';}',
        ' ',
        ' ',
        '',
      ],
      (props) => (props.iconSize ? props.iconSize : '32'),
      (props) => (props.iconSize ? props.iconSize : '32'),
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ theme }) => theme.colors.primary,
      ({ theme }) => theme.colors.success,
      (props) =>
        props.noAnimation
          ? `
      .path,
      .circle {
        opacity: 1;
        animation: none;
        stroke-dasharray: 0;
        stroke-dashoffset: 0;
      }
    `
          : null,
      (props) =>
        props.noCircle
          ? `
      .circle {
        display: none;
      }
  `
          : null,
      (props) =>
        props.customColor
          ? `
      .circle,
      .path {
        stroke: ${props.customColor};
      }
  `
          : null
    );

    /***/
  },
};
