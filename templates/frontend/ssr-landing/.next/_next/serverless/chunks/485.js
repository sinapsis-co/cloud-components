'use strict';
exports.id = 485;
exports.ids = [485];
exports.modules = {
  /***/ 839: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9141);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
    const _excluded = ['className', 'onClick'];

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

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }
      return target;
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }

    const DeleteIcon = (_ref) => {
      let { className, onClick } = _ref,
        props = _objectWithoutProperties(_ref, _excluded);

      const theme = (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* .useTheme */.Fg)();
      const iconMotion = {
        rest: {
          rotate: 0,
          scale: 1,
        },
        hover: {
          rotate: -15,
          scale: 1.0625,
        },
        tap: {
          rotate: 90,
          scale: 0.95,
        },
      };
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(IconWrapper, {
        initial: 'rest',
        whileHover: 'hover',
        whileTap: 'tap',
        animate: 'rest',
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
          'svg',
          _objectSpread(
            _objectSpread(
              {
                className: className,
                width: '24',
                height: '24',
                viewBox: '0 0 24 24',
                onClick: onClick,
                style: {
                  cursor: onClick ? 'pointer' : 'auto',
                },
              },
              props
            ),
            {},
            {
              children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('path', {
                  className: 'circle',
                  d: 'M24,12C24,5.37,18.63,0,12,0S0,5.37,0,12s5.37,12,12,12,12-5.37,12-12Z',
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
                  framer_motion__WEBPACK_IMPORTED_MODULE_1__ /* .motion.path */.ww.path,
                  {
                    fill: theme.colors.primary,
                    variants: iconMotion,
                    d: 'M12.95,12l2.85-2.85c.26-.26,.26-.69,0-.95-.26-.26-.69-.26-.95,0l-2.85,2.85-2.85-2.85c-.26-.26-.69-.26-.95,0s-.26,.69,0,.95l2.85,2.85-2.85,2.85c-.26,.26-.26,.69,0,.95s.69,.26,.95,0l2.85-2.85,2.85,2.85c.26,.26,.69,.26,.95,0,.26-.26,.26-.69,0-.95l-2.85-2.85Z',
                  }
                ),
              ],
            }
          )
        ),
      });
    };

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (0,
    styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.ZP)(DeleteIcon).withConfig({
      displayName: 'delete',
      componentId: 'sc-10igv0s-0',
    })(
      ['.circle{fill:', ';transition:fill ', ';}&:hover{.circle{fill:', ';}}'],
      ({ theme }) => theme.colors.sidebarBackground,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ theme }) => theme.colors.background
    );
    const IconWrapper = (0, styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.ZP)(
      framer_motion__WEBPACK_IMPORTED_MODULE_1__ /* .motion.div */.ww.div
    ).withConfig({
      displayName: 'delete__IconWrapper',
      componentId: 'sc-10igv0s-1',
    })(
      ['cursor:pointer;display:flex;justify-content:center;align-items:center;&:hover{circle{fill:', ';}}'],
      ({ theme }) => theme.colors.itemBackgroundHover
    );

    /***/
  },

  /***/ 4961: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ j: () => /* binding */ useCart,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
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

    const getStoredCart = (key) => {
      if (typeof localStorage !== 'undefined') {
        const previousCart = localStorage.getItem(key);

        if (previousCart) {
          return JSON.parse(previousCart);
        }
      }

      return [];
    };

    const storeCart = (key, cart) => {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(cart));
      }
    };

    const isSameProduct = (item) => (another) => {
      var _another$color, _item$color;

      return (
        another.product.id === item.product.id &&
        another.size.id === item.size.id &&
        ((_another$color = another.color) === null || _another$color === void 0 ? void 0 : _another$color.id) ===
          ((_item$color = item.color) === null || _item$color === void 0 ? void 0 : _item$color.id)
      );
    };

    const useCart = (cartId) => {
      const storageKey = `TRAC_CART.${cartId}`;
      const { 0: cart, 1: setCart } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
      (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setCart(getStoredCart(storageKey));
      }, [storageKey]);

      const saveCart = (newCart) => {
        storeCart(storageKey, newCart);
        setCart(newCart);
        return newCart;
      };

      const emptyCart = () => {
        storeCart(storageKey, []);
        setCart([]);
      };

      const updateCart = (action, item, quantity = 0) => {
        const exists = cart.find(isSameProduct(item));

        if (exists) {
          if (action === 'add') {
            item.quantity += quantity;
          }

          if (action === 'remove') {
            item.quantity -= quantity;
          }
        }

        const newCart = cart
          .concat(!exists && action === 'add' ? [item] : [])
          .map((c) => {
            if (isSameProduct(item)(c)) {
              return _objectSpread({}, item);
            }

            return _objectSpread({}, c);
          })
          .filter((c) => c.quantity > 0);
        return saveCart(newCart);
      };

      const total = cart.reduce((memo, c) => memo + c.product.price * c.quantity, 0);
      return {
        cart,
        total,
        updateCart,
        saveCart,
        emptyCart,
      };
    };

    /***/
  },
};
