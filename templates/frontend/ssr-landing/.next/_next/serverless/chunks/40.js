'use strict';
exports.id = 40;
exports.ids = [40];
exports.modules = {
  /***/ 4325: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ ImageFilter,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8521);

    function ImageFilter({
      fill = '#EDA064',
      imageSrc = `https://media.development.trac.co/merch/images/49-368.jpg`,
      maskSrc = '/sweater.png',
      haveHover = false,
    }) {
      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FilterWrapper, {
        fill: fill,
        haveHover: haveHover,
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx('img', {
            id: 'main-image',
            src: imageSrc,
            alt: 'filter-main-image',
          }),
          fill != 'white' &&
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx('img', {
              id: 'mask-image',
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
        'position:relative;*,#mask-image,#main-image{width:100%;height:100%;}#main-image{position:absolute;top:0;left:0;z-index:0;}#mask-image{background-color:',
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

  /***/ 9482: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ ProductImage,
      /* harmony export */
    });
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8521);

    function ProductImage({ className, image, inList, square, alt, isJsx = false, jsxImage }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImgContainer, {
        className: className,
        inList: inList,
        square: square,
        children: isJsx
          ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FilteredImageWrap, {
              children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProductImg, {
                children: jsxImage,
              }),
            })
          : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProductImgTag, {
              src: image,
              alt: alt,
            }),
      });
    }
    const FilteredImageWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__ /* ["default"].div.withConfig */.ZP.div
      .withConfig({
        displayName: 'product-img__FilteredImageWrap',
        componentId: 'sc-1wvkwid-0',
      })(['height:100%;position:relative;display:flex;justify-content:center;align-items:center;']);
    const ImgContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__ /* ["default"].div.withConfig */.ZP.div
      .withConfig({
        displayName: 'product-img__ImgContainer',
        componentId: 'sc-1wvkwid-1',
      })(
      [
        'position:relative;width:100%;max-width:100%;height:420px;max-height:420px;border-radius:10px;background-color:',
        ';@media (max-width:',
        '){width:100%;max-width:none;}',
        ' ',
        ';',
      ],
      ({ theme }) => theme.colors.itemBackground,
      ({ theme }) => `${theme.breakpoints.tablet}px`,
      ({ square }) =>
        square
          ? (0, styled_components__WEBPACK_IMPORTED_MODULE_1__ /* .css */.iv)(
              ['width:', 'px;height:', 'px;border-radius:4px;@media (max-width:', '){height:auto;min-height:300px;}'],
              square,
              square,
              ({ theme }) => `${theme.breakpoints.tablet}px`
            )
          : null,
      ({ inList }) =>
        inList
          ? (0, styled_components__WEBPACK_IMPORTED_MODULE_1__ /* .css */.iv)(
              [
                'width:calc( (535px - (5px * ',
                ')) / ',
                ' );max-width:calc( (535px - (5px * ',
                ')) / ',
                ' );height:calc( (535px - (5px * ',
                ')) / ',
                ' );border-radius:5px;cursor:pointer;transition:background-color ',
                ';&:last-child{margin-right:0;}@media (max-width:',
                '){width:calc( (100% - (5px * ',
                ')) / ',
                ' );',
                '}',
              ],
              inList > 1 ? inList - 1 : inList,
              inList,
              inList > 1 ? inList - 1 : inList,
              inList,
              inList > 1 ? inList - 1 : inList,
              inList,
              ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
              ({ theme }) => `${theme.breakpoints.tablet}px`,
              inList > 1 ? inList - 1 : inList,
              inList,
              inList ? (0, styled_components__WEBPACK_IMPORTED_MODULE_1__ /* .css */.iv)(['margin:0 auto;']) : null
            )
          : null
    );
    const divCss = `
  position: absolute;
  max-width: 65%;
  width: 100%;
  display: block;
`;
    const ProductImg = styled_components__WEBPACK_IMPORTED_MODULE_1__ /* ["default"].div.withConfig */.ZP.div
      .withConfig({
        displayName: 'product-img__ProductImg',
        componentId: 'sc-1wvkwid-2',
      })(['', ''], divCss);
    const ProductImgTag = styled_components__WEBPACK_IMPORTED_MODULE_1__ /* ["default"].img.withConfig */.ZP.img
      .withConfig({
        displayName: 'product-img__ProductImgTag',
        componentId: 'sc-1wvkwid-3',
      })(['top:50%;left:50%;transform:translate(-50%,-50%);', ''], divCss);

    /***/
  },

  /***/ 5372: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ ProductInfo,
      /* harmony export */
    });
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
    /* harmony import */ var _components_flex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5343);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8521);

    function ProductInfo({ className, product, inDetail, noPrice }) {
      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(InformationWrapper, {
        className: className,
        inDetail: inDetail,
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Title, {
            className: 'title',
            children: product.title,
          }),
          !noPrice &&
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Price, {
              className: 'price',
              children: ['$', product.price.toFixed(2).toLocaleString()],
            }),
        ],
      });
    }
    const InformationWrapper = (0, styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.ZP)(
      _components_flex__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z
    ).withConfig({
      displayName: 'product-info__InformationWrapper',
      componentId: 'sc-1vodx6d-0',
    })(['flex-direction:column;', ''], ({ inDetail }) =>
      inDetail
        ? (0, styled_components__WEBPACK_IMPORTED_MODULE_2__ /* .css */.iv)(
            [
              '.title{font-size:40px;line-height:40px;font-weight:800;margin:24px 0;@media (max-width:',
              '){font-size:32px;margin:12px 0;}}.price{order:-1;font-size:24px;margin-top:0;@media (max-width:',
              '){font-size:14px;}}',
            ],
            ({ theme }) => `${theme.breakpoints.tablet}px`,
            ({ theme }) => `${theme.breakpoints.tablet}px`
          )
        : null
    );
    const Title = styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"].h4.withConfig */.ZP.h4
      .withConfig({
        displayName: 'product-info__Title',
        componentId: 'sc-1vodx6d-1',
      })(
      [
        'color:',
        ';font-size:16px;font-weight:600;line-height:24px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;@media (max-width:',
        '){font-size:16px;}',
      ],
      ({ theme }) => theme.colors.primary,
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );
    const Price = styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"].h6.withConfig */.ZP.h6
      .withConfig({
        displayName: 'product-info__Price',
        componentId: 'sc-1vodx6d-2',
      })(
      [
        'color:',
        ';font-size:16px;font-weight:400;line-height:24px;opacity:0.7;margin:0;margin-top:10px;@media (max-width:',
        '){font-size:16px;}',
      ],
      ({ theme }) => theme.colors.primary,
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );

    /***/
  },
};
