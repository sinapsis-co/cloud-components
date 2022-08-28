'use strict';
exports.id = 416;
exports.ids = [416];
exports.modules = {
  /***/ 9568: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* unused harmony export Flex */
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);

    const Flex = (props) =>
      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx('div', {
        className: props.className,
        onClick: (ev) => (props.onClick ? props.onClick(ev) : null),
        children: props.children || '',
      });
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (0,
    styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.ZP)(Flex).withConfig({
      displayName: 'flex',
      componentId: 'sc-53hndv-0',
    })(
      [
        'display:flex;justify-content:',
        ';flex-direction:',
        ';flex-grow:',
        ';flex-basis:',
        ';flex-shrink:',
        ';flex-wrap:',
        ';flex:',
        ';align-items:',
        ';',
      ],
      (props) => props.justifyContent || 'flex-start',
      (props) => props.flexDirection || 'row',
      (props) => props.flexGrow || 0,
      (props) => props.flexBasis || 'auto',
      (props) => props.flexShrink || 1,
      (props) => props.flexWrap || 'nowrap',
      (props) => props.flex || ' 0 1 auto',
      (props) => props.alignItems || 'stretch'
    );

    /***/
  },

  /***/ 2321: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ ProductItem,
      /* harmony export */
    });
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1163);
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      next_router__WEBPACK_IMPORTED_MODULE_0__
    );
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27);
    /* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9141);
    /* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4225);
    /* harmony import */ var _product_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9806);
    /* harmony import */ var _product_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5981);
    /* harmony import */ var _components_image_color_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8465);
    /* harmony import */ var _components_framer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8052);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5893);

    function ProductItem({ className, product, highlight, hasAnimation, hasDelay }) {
      const router = (0, next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
      const { ref, inView } = (0, react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ /* .useInView */.YD)({
        triggerOnce: true,
        rootMargin: '200px 0px',
      });

      const handleClick = () => {
        if (window.analytics) {
          window.analytics.track('Merch Page Clicked', {
            product_id: product.id,
          });
        }

        router.push(`/merch/detail/${product.id}`);
      };

      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(ProductContainer, {
        className: `${className ? className : ''} ${highlight ? 'highlight' : ''}`,
        onClick: handleClick,
        variants: _components_framer__WEBPACK_IMPORTED_MODULE_5__ /* .scaleAnimations */.LS,
        initial: 'initial',
        animate: inView || hasDelay === 0 ? 'animate' : 'initial',
        exit: 'exit',
        ref: ref,
        transition: {
          duration: 0.35,
          delay: hasDelay ? hasDelay * 0.1 : 0,
          ease: [0.0, 0.005, 0.2, 1.0],
        },
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Wrapper, {
          initial: 'rest',
          whileHover: 'hover',
          whileTap: 'tap',
          animate: 'rest',
          className: 'wrapper',
          children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
              _product_img__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
              {
                className: 'image-container',
                image: product.image,
                alt: product.title,
                isJsx: true,
                highlight: highlight,
                hasAnimation: hasAnimation,
                variants: _components_framer__WEBPACK_IMPORTED_MODULE_5__ /* .hoverMotion */.wM,
                jsxImage: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
                  _components_image_color_filter__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
                  {
                    fill: '',
                    haveHover: true,
                    imageSrc: product.image,
                    maskSrc: `${'https://media.development.trac.co'}/merch-preview/${product.blueprintId}-mask.png`,
                  }
                ),
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
              _product_info__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
              {
                className: 'product-info',
                product: product,
                highlight: highlight,
              }
            ),
          ],
        }),
      });
    }
    const ProductContainer = (0, styled_components__WEBPACK_IMPORTED_MODULE_8__ /* ["default"] */.ZP)(
      framer_motion__WEBPACK_IMPORTED_MODULE_1__ /* .motion.div */.ww.div
    ).withConfig({
      displayName: 'product-item__ProductContainer',
      componentId: 'sc-1rx8y8s-0',
    })(
      [
        'cursor:pointer;width:100%;&:hover{.image-container{background-color:',
        ';}}&.highlight{background-color:',
        ';grid-column:span 2;order:-1;.wrapper{flex-direction:row;padding:32px;gap:32px;border-radius:5px;&:hover{.image-container{background-color:inherit;}}@media (max-width:',
        '){padding:24px;gap:24px;flex-direction:column;justify-content:center;align-items:center;}}}',
      ],
      ({ theme }) => theme.colors.itemBackgroundHover,
      ({ theme }) => theme.colors.highlightBackground,
      ({ theme }) => `${theme.breakpoints.laptopS}px`
    );
    const Wrapper = (0, styled_components__WEBPACK_IMPORTED_MODULE_8__ /* ["default"] */.ZP)(
      framer_motion__WEBPACK_IMPORTED_MODULE_1__ /* .motion.div */.ww.div
    ).withConfig({
      displayName: 'product-item__Wrapper',
      componentId: 'sc-1rx8y8s-1',
    })(
      [
        'display:flex;flex-direction:column;gap:24px;@media (max-width:',
        '){width:max-content;}@media (max-width:',
        '){max-width:none;width:auto;gap:12px;}',
      ],
      ({ theme }) => `${theme.breakpoints.laptopS}px`,
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );

    /***/
  },

  /***/ 4799: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ GetMerchData,
      /* harmony export */
    });
    async function GetMerchData(artistId) {
      const url = `${'https://media.development.trac.co'}/merch/${artistId}/data.json`;
      return fetch(url).then((response) => {
        if (response.ok) {
          return response.json();
        }

        return [];
      });
    }

    /***/
  },
};
