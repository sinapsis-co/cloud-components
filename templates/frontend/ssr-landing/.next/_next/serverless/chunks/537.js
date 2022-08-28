'use strict';
exports.id = 537;
exports.ids = [537];
exports.modules = {
  /***/ 8465: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ ImageFilter,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);

    function ImageFilter({
      fill = '#EDA064',
      imageSrc = `${'https://media.development.trac.co'}/merch/images/49-368.jpg`,
      maskSrc = '/sweater.png',
      haveHover = false,
    }) {
      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FilterWrapper, {
        className: fill === 'white' ? 'no-mask' : '',
        fill: fill,
        haveHover: haveHover,
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx('img', {
            className: 'main-image',
            src: imageSrc,
            alt: 'filter-main-image',
          }),
          fill !== 'white' &&
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx('img', {
              className: 'mask-image',
              src: maskSrc,
              alt: 'filter-mask-image',
            }),
        ],
      });
    }
    const FilterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"].div.withConfig */.ZP.div
      .withConfig({
        displayName: 'image-color-filter__FilterWrapper',
        componentId: 'sc-11t2le6-0',
      })(
      [
        'height:100%;position:relative;&.no-mask{.main-image{position:relative;top:auto;left:auto;}}.mask-image,.main-image{width:100%;height:100%;}.main-image{position:absolute;top:0;left:0;z-index:0;}.mask-image{background-color:',
        ';mix-blend-mode:multiply;margin-bottom:-4px;filter:brightness(0.94);',
        '}',
      ],
      (props) => props.fill,
      ({ haveHover }) =>
        haveHover &&
        `.image-container:hover {
    
    }`
    );

    /***/
  },

  /***/ 9806: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ ProductImage,
      /* harmony export */
    });
    /* harmony import */ var _components_framer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8052);
    /* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9141);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);

    function ProductImage({
      className,
      image,
      alt,
      hasDarkBackground,
      isJsx,
      jsxImage,
      inCart,
      inDetail,
      highlight,
      hasAnimation,
      variants,
    }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(ImgContainer, {
        className: `${className} ${inCart ? 'cart' : ''} ${inDetail ? 'detail' : ''}`,
        hasDarkBackground: hasDarkBackground,
        isHighlighted: highlight,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
          framer_motion__WEBPACK_IMPORTED_MODULE_1__ /* .motion.div */.ww.div,
          {
            variants: variants,
            transition: _components_framer__WEBPACK_IMPORTED_MODULE_0__ /* .easeTransition */.BH,
            children: isJsx
              ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(FilteredImageWrap, {
                  variants: hasAnimation
                    ? _components_framer__WEBPACK_IMPORTED_MODULE_0__ /* .scaleAnimations */.LS
                    : undefined,
                  initial: 'initial',
                  animate: 'animate',
                  exit: 'exit',
                  transition: _components_framer__WEBPACK_IMPORTED_MODULE_0__ /* .imageTransition */.kr,
                  className: `${inCart ? 'cart' : ''} ${inDetail ? 'detail' : ''} ${
                    !inCart && !inDetail && highlight ? 'highlight' : ''
                  }`,
                  children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(ProductImg, {
                    children: jsxImage,
                  }),
                })
              : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(ProductImgTag, {
                  src: image,
                  alt: alt,
                  variants: hasAnimation
                    ? _components_framer__WEBPACK_IMPORTED_MODULE_0__ /* .scaleAnimations */.LS
                    : undefined,
                  initial: 'initial',
                  animate: 'animate',
                  exit: 'exit',
                  transition: _components_framer__WEBPACK_IMPORTED_MODULE_0__ /* .imageTransition */.kr,
                }),
          }
        ),
      });
    }
    const ImgContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"].div.withConfig */.ZP.div
      .withConfig({
        displayName: 'product-img__ImgContainer',
        componentId: 'sc-1wvkwid-0',
      })(
      [
        'display:flex;justify-content:center;align-items:center;border-radius:5px;padding:32px;background-color:',
        ';transition:background-color ',
        ';&.cart{padding:0;}@media (max-width:',
        '){padding:0;width:fit-content;justify-content:flex-start;&.detail{padding:32px;width:auto;height:auto;justify-content:center;}}',
        ' ',
        '',
      ],
      ({ theme }) => theme.colors.itemBackground,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ theme }) => `${theme.breakpoints.laptopS}px`,
      ({ hasDarkBackground }) =>
        hasDarkBackground
          ? (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* .css */.iv)(
              ['background-color:', ';'],
              ({ theme }) => theme.colors.sidebarBackground
            )
          : null,
      ({ isHighlighted }) =>
        isHighlighted
          ? (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* .css */.iv)(
              ['background-color:', ';padding:0;'],
              ({ theme }) => theme.colors.sidebarBackground
            )
          : null
    );
    const FilteredImageWrap = (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.ZP)(
      framer_motion__WEBPACK_IMPORTED_MODULE_1__ /* .motion.div */.ww.div
    ).withConfig({
      displayName: 'product-img__FilteredImageWrap',
      componentId: 'sc-1wvkwid-1',
    })(
      [
        'width:',
        ';height:',
        ';object-fit:cover;border-radius:5px;overflow:hidden;position:relative;&.detail{width:',
        ';height:',
        ';}&.cart{width:',
        ';height:',
        ';}&.highlight{width:',
        ';height:',
        ';@media (max-width:',
        '){width:',
        ';height:',
        ';}}@media (max-width:',
        '){width:',
        ';height:',
        ';&.detail{width:auto;height:auto;}}',
      ],
      ({ theme }) => theme.sizes.productSize,
      ({ theme }) => theme.sizes.productSize,
      ({ theme }) => theme.sizes.productSizeDetail,
      ({ theme }) => theme.sizes.productSizeDetail,
      ({ theme }) => `${theme.sizes.productSizeMobile}`,
      ({ theme }) => `${theme.sizes.productSizeMobile}`,
      ({ theme }) => theme.sizes.coverSizeHighlight,
      ({ theme }) => theme.sizes.coverSizeHighlight,
      ({ theme }) => `${theme.breakpoints.laptopS}px`,
      ({ theme }) => theme.sizes.coverSizeHighlightMobile,
      ({ theme }) => theme.sizes.coverSizeHighlightMobile,
      ({ theme }) => `${theme.breakpoints.laptop}px`,
      ({ theme }) => theme.sizes.coverSizeMobile,
      ({ theme }) => theme.sizes.coverSizeMobile
    );
    const ProductImg = styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"].div.withConfig */.ZP.div
      .withConfig({
        displayName: 'product-img__ProductImg',
        componentId: 'sc-1wvkwid-2',
      })(['height:100%;']);
    const ProductImgTag = (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.ZP)(
      framer_motion__WEBPACK_IMPORTED_MODULE_1__ /* .motion.img */.ww.img
    ).withConfig({
      displayName: 'product-img__ProductImgTag',
      componentId: 'sc-1wvkwid-3',
    })(['position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:65%;width:100%;display:block;']);

    /***/
  },

  /***/ 5981: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ ProductInfo,
      /* harmony export */
    });
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
    /* harmony import */ var _components_flex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9568);
    /* harmony import */ var _components_featured_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5322);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);

    function ProductInfo({ className, product, inDetail, inCart, size, color, noPrice, highlight }) {
      const Content = () =>
        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
          {
            children: [
              /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('div', {
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Title, {
                    className: 'title',
                    children: product.title,
                  }),
                  inCart && size
                    ? /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Details, {
                        children: ['Size: ', size, color && `, ${color}`],
                      })
                    : null,
                ],
              }),
              !noPrice &&
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Price, {
                  className: 'price',
                  children: ['$', product.price.toFixed(2).toLocaleString()],
                }),
            ],
          }
        );

      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(InformationWrapper, {
        className: className,
        inDetail: inDetail,
        inCart: inCart,
        highlight: highlight,
        children: highlight
          ? /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
              {
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('div', {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Content, {}),
                  }),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
                    _components_featured_badge__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
                    {
                      className: 'badge',
                    }
                  ),
                ],
              }
            )
          : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Content, {}),
      });
    }
    const InformationWrapper = (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.ZP)(
      _components_flex__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z
    ).withConfig({
      displayName: 'product-info__InformationWrapper',
      componentId: 'sc-1vodx6d-0',
    })(
      ['flex-direction:column;align-items:flex-start;', ' ', ' ', ''],
      ({ inDetail }) =>
        inDetail
          ? (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* .css */.iv)(
              [
                'flex-direction:row;justify-content:space-between;align-items:flex-end;@media (max-width:',
                '){flex-direction:column;justify-content:flex-start;align-items:flex-start;}.title{max-width:320px;font-weight:800;font-size:40px;line-height:40px;white-space:normal;@media (max-width:',
                '){font-size:32px;max-width:none;}}.price{font-size:24px;margin-top:0;@media (max-width:',
                '){font-size:16px;}}',
              ],
              ({ theme }) => `${theme.breakpoints.tablet}px`,
              ({ theme }) => `${theme.breakpoints.tablet}px`,
              ({ theme }) => `${theme.breakpoints.tablet}px`
            )
          : null,
      ({ inCart }) =>
        inCart
          ? (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* .css */.iv)([
              'width:100%;flex-direction:row;justify-content:space-between;align-items:center;.title{font-size:16px;font-weight:700;line-height:24px;}',
            ])
          : null,
      ({ highlight }) =>
        highlight
          ? (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* .css */.iv)(
              [
                'height:100%;justify-content:space-between;@media (max-width:',
                '){gap:24px;text-align:center;align-items:center;}',
              ],
              ({ theme }) => `${theme.breakpoints.laptopS}px`
            )
          : null
    );
    const Title = styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"].h4.withConfig */.ZP.h4
      .withConfig({
        displayName: 'product-info__Title',
        componentId: 'sc-1vodx6d-1',
      })(
      [
        'color:',
        ';font-size:16px;font-weight:700;line-height:24px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;@media (max-width:',
        '){white-space:pre-wrap;}',
      ],
      ({ theme }) => theme.colors.primary,
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );
    const Price = styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"].h6.withConfig */.ZP.h6
      .withConfig({
        displayName: 'product-info__Price',
        componentId: 'sc-1vodx6d-2',
      })(
      ['color:', ';font-size:16px;font-weight:400;line-height:24px;opacity:0.7;margin:0;'],
      ({ theme }) => theme.colors.primary
    );
    const Details = styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"].h6.withConfig */.ZP.h6
      .withConfig({
        displayName: 'product-info__Details',
        componentId: 'sc-1vodx6d-3',
      })(['color:', ';font-size:14px;font-weight:400;line-height:24px;margin:0;'], ({ theme }) => theme.colors.primary);

    /***/
  },
};
