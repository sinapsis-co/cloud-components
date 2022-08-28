'use strict';
exports.id = 55;
exports.ids = [55];
exports.modules = {
  /***/ 4055: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
      const { 0: cart, 1: setCart } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(getStoredCart(storageKey));

      const saveCart = (newCart) => {
        storeCart(storageKey, newCart);
        setCart(newCart);
        return newCart;
      };

      const emptyCart = () => {
        storeCart(storageKey, []);
        setCart([]);
      };

      const updateCart = (action, item, quantity = 1) => {
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
