'use strict';
exports.id = 556;
exports.ids = [556];
exports.modules = {
  /***/ 7343: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ ProductList,
    });

    // EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
    var styled_components_cjs = __webpack_require__(27);
    // EXTERNAL MODULE: ./node_modules/next/router.js
    var next_router = __webpack_require__(1163);
    // EXTERNAL MODULE: ./src/components/flex/index.tsx
    var flex = __webpack_require__(5343);
    // EXTERNAL MODULE: ./src/components/button/index.tsx
    var components_button = __webpack_require__(5578);
    // EXTERNAL MODULE: ./src/components/merch/product-img/index.tsx
    var product_img = __webpack_require__(9482);
    // EXTERNAL MODULE: ./src/components/merch/product-info/index.tsx
    var product_info = __webpack_require__(5372);
    // EXTERNAL MODULE: ./src/components/image-color-filter/index.tsx
    var image_color_filter = __webpack_require__(4325);
    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(8521); // CONCATENATED MODULE: ./src/components/merch/product-item/index.tsx
    function ProductItem({ className, product, inList }) {
      const router = (0, next_router.useRouter)();

      const handleClick = () => {
        if (window.analytics) {
          window.analytics.track('Merch Page Clicked', {
            product_id: product.id,
          });
        }

        router.push(`/merch/detail/${product.id}`);
      };

      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(ProductContainer, {
        className: className,
        onClick: handleClick,
        children: [
          /*#__PURE__*/ jsx_runtime.jsx(product_img /* default */.Z, {
            className: 'image-container',
            image: product.image,
            alt: product.title,
            inList: inList ? inList : 1,
            isJsx: true,
            jsxImage: /*#__PURE__*/ jsx_runtime.jsx(image_color_filter /* default */.Z, {
              fill: '',
              haveHover: true,
              imageSrc: product.image,
              maskSrc: `https://media.development.trac.co/merch-preview/${product.blueprintId}-mask.png`,
            }),
          }),
          /*#__PURE__*/ jsx_runtime.jsx(product_info /* default */.Z, {
            className: 'product-info',
            product: product,
          }),
        ],
      });
    }
    const ProductContainer = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'product-item__ProductContainer',
        componentId: 'sc-1rx8y8s-0',
      })(
      [
        'max-width:265px;width:100%;@media (max-width:',
        '){max-width:none;}.product-info{margin-top:30px;@media (max-width:',
        '){margin-top:15px;}}&:hover{.image-container{}}',
      ],
      ({ theme }) => `${theme.breakpoints.tablet}px`,
      ({ theme }) => `${theme.breakpoints.tablet}px`
    ); // CONCATENATED MODULE: ./src/components/merch/product-list/index.tsx
    function ProductList({ products, showCart }) {
      const router = (0, next_router.useRouter)();
      let sortedProducts = products.sort((a, b) => (a.order || 0) - (b.order || 0)); // Replace image url with white image url

      sortedProducts = sortedProducts.map((item) => {
        const haveWhite = item.colors.find((el) => el.name == 'White' || el.name == 'white');

        if (haveWhite) {
          item.image = haveWhite.image || item.image;
          return item;
        }

        return item;
      });
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
          /*#__PURE__*/ jsx_runtime.jsx(ListWrapper, {
            children: sortedProducts.map((product, i) =>
              /*#__PURE__*/ jsx_runtime.jsx(
                ProductItem,
                {
                  className: 'product-item',
                  product: product,
                  inList: 2,
                },
                `${product.title}-${i}`
              )
            ),
          }),
          !showCart
            ? /*#__PURE__*/ jsx_runtime.jsx(CartButton, {
                onClick: () => router.push(`/merch/cart`),
                children: 'View Cart',
              })
            : null,
        ],
      });
    }
    const ListWrapper = (0, styled_components_cjs /* default */.ZP)(flex /* default */.Z).withConfig({
      displayName: 'product-list__ListWrapper',
      componentId: 'sc-1epfjzo-0',
    })(
      [
        'align-items:flex-start;justify-content:space-between;flex-flow:row wrap;width:100%;@media (max-width:',
        '){align-items:center;flex-flow:column wrap;padding-bottom:120px;}.product-item{margin-top:70px;@media (max-width:',
        '){margin-top:30px;}}',
      ],
      ({ theme }) => `${theme.breakpoints.tablet}px`,
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );
    const CartButton = (0, styled_components_cjs /* default */.ZP)(components_button /* default */.Z).withConfig({
      displayName: 'product-list__CartButton',
      componentId: 'sc-1epfjzo-1',
    })(
      [
        'height:70px;font-size:14px;line-height:16px;width:156px;box-shadow:',
        ';position:fixed;right:80px;bottom:80px;@media (max-width:',
        '){width:80%;right:auto;bottom:32px;left:50%;transform:translate(-50%,0);}',
      ],
      ({ theme }) => `${theme.shadows.redShadow}`,
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );

    /***/
  },

  /***/ 1421: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9008);
    /* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6847);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8521);

    const NextSeoHead = ({ pageData }) => {
      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
        {
          children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
              next_head__WEBPACK_IMPORTED_MODULE_0__['default'],
              {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('link', {
                  rel: 'icon',
                  href: '/favicon/favicon.ico',
                }),
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
              next_seo__WEBPACK_IMPORTED_MODULE_1__ /* .NextSeo */.PB,
              {
                title: pageData.title,
                description: pageData.description || pageData.data.bio || pageData.title,
                openGraph: {
                  title: pageData.title,
                  description: pageData.description || pageData.data.bio || pageData.title,
                  url: `https://${pageData.subdomain}.${'development.trac.co'}/`,
                  images: [
                    {
                      url: pageData.avatar,
                    },
                  ],
                  type: 'website',
                },
              }
            ),
          ],
        }
      );
    };

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = NextSeoHead;

    /***/
  },

  /***/ 1640: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
