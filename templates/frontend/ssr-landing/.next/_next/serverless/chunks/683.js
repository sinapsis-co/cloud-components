'use strict';
exports.id = 683;
exports.ids = [683];
exports.modules = {
  /***/ 9685: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ ProductCartList,
    });

    // EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
    var styled_components_cjs = __webpack_require__(27);
    // EXTERNAL MODULE: ./src/components/merch/product-img/index.tsx
    var product_img = __webpack_require__(9482);
    // EXTERNAL MODULE: ./src/components/merch/product-info/index.tsx
    var product_info = __webpack_require__(5372);
    // EXTERNAL MODULE: ./src/components/flex/index.tsx
    var flex = __webpack_require__(5343);
    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(8521); // CONCATENATED MODULE: ./src/components/icons/quantity/index.tsx
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function QuantityIcon({ props, isPlus, onClick }) {
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(
        QuantitySvg,
        _objectSpread(
          _objectSpread(
            {
              width: '40',
              height: '40',
              viewBox: '0 0 40 40',
            },
            props
          ),
          {},
          {
            onClick: onClick,
            children: [
              /*#__PURE__*/ jsx_runtime.jsx(QuantityPath, {
                opacity: '0.1',
                d: 'M36 40H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h32c2.21 0 4 1.79 4 4v32C40 38.21 38.21 40 36 40zM4 1C2.35 1 1 2.35 1 4v32c0 1.65 1.35 3 3 3h32c1.65 0 3-1.35 3-3V4c0-1.65-1.35-3-3-3H4z',
              }),
              !isPlus
                ? /*#__PURE__*/ jsx_runtime.jsx(QuantityPath, {
                    opacity: '0.5',
                    d: 'M25 19H15c-0.5 0-1 0.5-1 1s0.5 1 1 1h10c0.6 0 1-0.4 1-1S25.6 19 25 19z',
                  })
                : /*#__PURE__*/ jsx_runtime.jsx(QuantityPath, {
                    opacity: '0.5',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M20 14c0.6 0 1 0.5 1 1v4h4c0.6 0 1 0.5 1 1s-0.4 1-1 1h-4v4c0 0.6-0.4 1-1 1s-1-0.4-1-1v-4h-4c-0.5 0-1-0.4-1-1s0.5-1 1-1h4v-4C19 14.5 19.5 14 20 14z',
                  }),
            ],
          }
        )
      );
    }
    const QuantitySvg = styled_components_cjs /* default.svg.withConfig */.ZP.svg
      .withConfig({
        displayName: 'quantity__QuantitySvg',
        componentId: 'sc-1spopsv-0',
      })(['cursor:pointer;']);
    const QuantityPath = styled_components_cjs /* default.path.withConfig */.ZP.path
      .withConfig({
        displayName: 'quantity__QuantityPath',
        componentId: 'sc-1spopsv-1',
      })(['fill:', ';'], ({ theme }) => theme.colors.primary); // CONCATENATED MODULE: ./src/components/merch/product-quantity-selector/index.tsx
    function QuantitySelector({ className, quantity, onChange }) {
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(QuantityWrapper, {
        className: className,
        children: [
          /*#__PURE__*/ jsx_runtime.jsx(QuantityIcon, {
            onClick: () => onChange(-1),
          }),
          /*#__PURE__*/ jsx_runtime.jsx(QuantityText, {
            children: quantity,
          }),
          /*#__PURE__*/ jsx_runtime.jsx(QuantityIcon, {
            onClick: () => onChange(1),
            isPlus: true,
          }),
        ],
      });
    }
    const QuantityWrapper = (0, styled_components_cjs /* default */.ZP)(flex /* default */.Z).withConfig({
      displayName: 'product-quantity-selector__QuantityWrapper',
      componentId: 'sc-9xduq-0',
    })(['justify-content:flex-start;align-items:center;']);
    const QuantityText = styled_components_cjs /* default.h6.withConfig */.ZP.h6
      .withConfig({
        displayName: 'product-quantity-selector__QuantityText',
        componentId: 'sc-9xduq-1',
      })(
      ['margin:0 18px;text-align:center;font-size:16px;min-width:24px;opacity:0.5;color:', ';'],
      ({ theme }) => theme.colors.primary
    ); // CONCATENATED MODULE: ./src/components/icons/trash/index.tsx
    function trash_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function trash_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          trash_ownKeys(Object(source), true).forEach(function (key) {
            trash_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          trash_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function trash_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function TrashIcon({ props, onClick }) {
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(
        TrashSvg,
        trash_objectSpread(
          trash_objectSpread(
            {
              width: '20',
              height: '20',
              viewBox: '0 0 20 20',
              onClick: onClick,
            },
            props
          ),
          {},
          {
            children: [
              /*#__PURE__*/ jsx_runtime.jsx(TrashPath, {
                d: 'M17.5 4.3h-1.7 -1.7V3.3c0-0.6-0.2-1.2-0.7-1.7 -0.5-0.5-1.1-0.7-1.7-0.7H8.3c-0.6 0-1.2 0.3-1.7 0.7C6.2 2.1 5.9 2.7 5.9 3.3v0.9H4.2 2.5C2.1 4.3 1.8 4.6 1.8 5S2.1 5.8 2.5 5.8h0.9v10.9c0 0.7 0.3 1.3 0.7 1.7 0.5 0.5 1.1 0.7 1.7 0.7h8.3c0.7 0 1.3-0.2 1.7-0.7 0.5-0.5 0.7-1.1 0.7-1.7V5.8h0.9c0.4 0 0.8-0.3 0.8-0.7S17.9 4.3 17.5 4.3zM7.4 3.3c0-0.2 0.1-0.5 0.3-0.6 0.2-0.2 0.4-0.3 0.7-0.3h3.3c0.3 0 0.5 0.1 0.7 0.3s0.3 0.4 0.3 0.7v0.9H7.4V3.3zM15.1 16.7c0 0.3-0.1 0.5-0.3 0.7s-0.4 0.3-0.6 0.3H5.8c-0.2 0-0.5-0.1-0.6-0.3s-0.3-0.4-0.3-0.6V5.8h10.2V16.7z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx(TrashPath, {
                d: 'M8.3 14.9c0.4 0 0.8-0.3 0.8-0.7v-5c0-0.4-0.3-0.7-0.7-0.7S7.6 8.8 7.6 9.2v5C7.6 14.6 7.9 14.9 8.3 14.9z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx(TrashPath, {
                d: 'M11.7 14.9c0.4 0 0.8-0.3 0.8-0.7v-5c0-0.4-0.3-0.7-0.7-0.7s-0.7 0.3-0.7 0.8v5C10.9 14.6 11.3 14.9 11.7 14.9z',
              }),
            ],
          }
        )
      );
    }
    const TrashSvg = styled_components_cjs /* default.svg.withConfig */.ZP.svg
      .withConfig({
        displayName: 'trash__TrashSvg',
        componentId: 'sc-10bnm6z-0',
      })(['']);
    const TrashPath = styled_components_cjs /* default.path.withConfig */.ZP.path
      .withConfig({
        displayName: 'trash__TrashPath',
        componentId: 'sc-10bnm6z-1',
      })(['fill:', ';'], ({ theme }) => theme.colors.primary); // CONCATENATED MODULE: ./src/components/merch/product-remove-item/index.tsx
    function RemoveBtn({ className, onClick }) {
      return /*#__PURE__*/ jsx_runtime.jsx(TrashWrapper, {
        className: className,
        children: /*#__PURE__*/ jsx_runtime.jsx(TrashIcon, {
          onClick: onClick,
        }),
      });
    }
    const TrashWrapper = (0, styled_components_cjs /* default */.ZP)(flex /* default */.Z).withConfig({
      displayName: 'product-remove-item__TrashWrapper',
      componentId: 'sc-1i8vi90-0',
    })(
      [
        'cursor:pointer;justify-content:center;align-items:center;width:40px;height:40px;border-radius:4px;background-color:',
        ';transition:background-color ',
        ';&:hover{background-color:',
        ';}',
      ],
      ({ theme }) => theme.colors.itemBackground,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ theme }) => theme.colors.itemBackgroundHover
    );
    // EXTERNAL MODULE: ./src/components/image-color-filter/index.tsx
    var image_color_filter = __webpack_require__(4325); // CONCATENATED MODULE: ./src/components/merch/product-cart-item/index.tsx
    function ProductCartItem({ className, item, noControls, onChangeQuantity, onRemove, color }) {
      const { product, quantity } = item;
      const findWhite = product.colors.find((item) => item.name == 'White' || item.name == 'white');
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(ProductContainer, {
        className: className,
        children: [
          /*#__PURE__*/ jsx_runtime.jsx(product_img /* default */.Z, {
            className: 'image-container',
            image: product.image,
            alt: product.title,
            isJsx: true,
            square: 160,
            jsxImage: /*#__PURE__*/ jsx_runtime.jsx(image_color_filter /* default */.Z, {
              fill: color || 'white',
              imageSrc: (findWhite === null || findWhite === void 0 ? void 0 : findWhite.image) || '',
              maskSrc: `https://media.development.trac.co/merch-preview/${product.blueprintId}-mask.png`,
            }),
          }),
          /*#__PURE__*/ (0, jsx_runtime.jsxs)(InfoWrapper, {
            noControls: noControls,
            children: [
              /*#__PURE__*/ jsx_runtime.jsx(product_info /* default */.Z, {
                className: 'product-info',
                product: product,
                noPrice: noControls,
              }),
              !noControls
                ? /*#__PURE__*/ (0, jsx_runtime.jsxs)(ActionsWrapper, {
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    children: [
                      /*#__PURE__*/ jsx_runtime.jsx(QuantitySelector, {
                        quantity: item.quantity,
                        onChange: onChangeQuantity,
                      }),
                      /*#__PURE__*/ jsx_runtime.jsx(RemoveBtn, {
                        onClick: onRemove,
                      }),
                    ],
                  })
                : /*#__PURE__*/ (0, jsx_runtime.jsxs)(QuantityNumber, {
                    children: ['Qty: $', quantity],
                  }),
            ],
          }),
        ],
      });
    }
    const ProductContainer = (0, styled_components_cjs /* default */.ZP)(flex /* default */.Z).withConfig({
      displayName: 'product-cart-item__ProductContainer',
      componentId: 'sc-1tvca32-0',
    })(
      ['width:100%;flex-direction:row;@media (max-width:', '){flex-direction:column;}.image-container{flex-shrink:0;}'],
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );
    const InfoWrapper = (0, styled_components_cjs /* default */.ZP)(flex /* default */.Z).withConfig({
      displayName: 'product-cart-item__InfoWrapper',
      componentId: 'sc-1tvca32-1',
    })(
      [
        'margin-left:24px;flex-direction:column;justify-content:space-between;flex-grow:1;@media (max-width:',
        '){margin-top:24px;margin-left:0;}',
        '',
      ],
      ({ theme }) => `${theme.breakpoints.tablet}px`,
      ({ noControls }) =>
        noControls
          ? `
    justify-content: flex-start;
  `
          : null
    );
    const ActionsWrapper = (0, styled_components_cjs /* default */.ZP)(flex /* default */.Z).withConfig({
      displayName: 'product-cart-item__ActionsWrapper',
      componentId: 'sc-1tvca32-2',
    })(['@media (max-width:', '){margin-top:24px;}'], ({ theme }) => `${theme.breakpoints.tablet}px`);
    const QuantityNumber = styled_components_cjs /* default.p.withConfig */.ZP.p
      .withConfig({
        displayName: 'product-cart-item__QuantityNumber',
        componentId: 'sc-1tvca32-3',
      })(['font-size:16px;font-weight:400;color:', ';margin:8px 0 0;'], ({ theme }) => theme.colors.secondary);
    // EXTERNAL MODULE: ./src/hooks/use-cart.ts
    var use_cart = __webpack_require__(4055);
    // EXTERNAL MODULE: ./node_modules/react/index.js
    var react = __webpack_require__(7294); // CONCATENATED MODULE: ./src/components/merch/product-cart-list/index.tsx
    function ProductCartList({ className, noControls, cartKey, onCartChanged }) {
      const { cart, updateCart } = (0, use_cart /* useCart */.j)(cartKey);

      const handleQuantityChange = (value, item) => {
        const change = value > 0 ? 'add' : 'remove';
        updateCart(change, item, Math.abs(value));
        window.analytics.track('Checkout Updated', {
          category: 'Merch',
          checkout_id: item.product.id,
          field_index: 1,
          field_name: 'Quantity',
          field_value: value,
        });
      };

      (0, react.useEffect)(() => {
        onCartChanged(cart);
      }, [cart, onCartChanged]);
      return /*#__PURE__*/ jsx_runtime.jsx(CartList, {
        className: className,
        children: cart.map((item, i) => {
          var _item$color;

          return /*#__PURE__*/ jsx_runtime.jsx(
            ProductCartItem,
            {
              className: 'cart-item',
              item: item,
              noControls: noControls,
              onChangeQuantity: (value) => handleQuantityChange(value, item),
              onRemove: () => updateCart('remove', item, item.quantity),
              color:
                item === null || item === void 0
                  ? void 0
                  : (_item$color = item.color) === null || _item$color === void 0
                  ? void 0
                  : _item$color.color,
            },
            i
          );
        }),
      });
    }
    const CartList = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'product-cart-list__CartList',
        componentId: 'h81uri-0',
      })(
      [
        "width:100%;.cart-item{padding:32px 0;position:relative;&:after{content:'';position:absolute;right:0;bottom:0;left:0;height:1px;opacity:0.1;background-color:",
        ';}&:first-child{padding-top:0;}&:last-child{padding-bottom:0;&:after{content:none;}}}',
      ],
      ({ theme }) => theme.colors.primary
    );

    /***/
  },

  /***/ 8666: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ MerchCartTotal,
      /* harmony export */
    });
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
    /* harmony import */ var _components_flex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5343);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8521);

    function MerchCartTotal({ className, subtotal, shipping }) {
      const getTotal = (subtotal, shipping) => {
        if (shipping) {
          return (subtotal + shipping).toFixed(2);
        } else {
          return subtotal.toFixed(2);
        }
      };

      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(CartTotalContainer, {
        className: className,
        children: [
          /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Row, {
            children: [
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Text, {
                children: 'Subtotal',
              }),
              /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Price, {
                children: ['$', subtotal.toFixed(2)],
              }),
            ],
          }),
          shipping !== undefined &&
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Row, {
              children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Text, {
                  children: 'Shipping',
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Price, {
                  children: !shipping ? 'Free' : `$ ${shipping.toFixed(2)}`,
                }),
              ],
            }),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SeparatorLine, {}),
          /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Row, {
            children: [
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Text, {
                children: 'Total',
              }),
              /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Price, {
                children: ['$', getTotal(subtotal, shipping)],
              }),
            ],
          }),
        ],
      });
    }
    const CartTotalContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"].div.withConfig */.ZP.div
      .withConfig({
        displayName: 'product-cart-total__CartTotalContainer',
        componentId: 'sc-1svph4p-0',
      })(
      ['width:100%;margin:48px 0;@media (max-width:', '){margin:32px 0;}'],
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );
    const Row = (0, styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.ZP)(
      _components_flex__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z
    ).withConfig({
      displayName: 'product-cart-total__Row',
      componentId: 'sc-1svph4p-1',
    })(['align-items:center;justify-content:space-between;margin-bottom:14px;&:last-child{margin-bottom:0;}']);
    const SeparatorLine = styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"].hr.withConfig */.ZP.hr
      .withConfig({
        displayName: 'product-cart-total__SeparatorLine',
        componentId: 'sc-1svph4p-2',
      })(
      ['margin:24px 0;border:none;height:1px;opacity:0.1;background-color:', ';'],
      ({ theme }) => theme.colors.primary
    );
    const Text = styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"].h6.withConfig */.ZP.h6
      .withConfig({
        displayName: 'product-cart-total__Text',
        componentId: 'sc-1svph4p-3',
      })(
      ['font-size:14px;font-weight:400;line-height:22px;margin:0 0.5rem 0 0;opacity:0.7;color:', ';'],
      ({ theme }) => theme.colors.primary
    );
    const Price = styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"].h5.withConfig */.ZP.h5
      .withConfig({
        displayName: 'product-cart-total__Price',
        componentId: 'sc-1svph4p-4',
      })(['font-size:14px;font-weight:700;line-height:22px;margin:0;color:', ';'], ({ theme }) => theme.colors.primary);

    /***/
  },
};
