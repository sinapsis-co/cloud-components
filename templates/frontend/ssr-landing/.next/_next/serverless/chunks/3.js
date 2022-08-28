'use strict';
exports.id = 3;
exports.ids = [3];
exports.modules = {
  /***/ 8478: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ loading,
    });

    // EXTERNAL MODULE: ./node_modules/react/index.js
    var react = __webpack_require__(7294);
    // EXTERNAL MODULE: ./node_modules/@crello/react-lottie/dist/index.cjs.js
    var index_cjs = __webpack_require__(4120); // CONCATENATED MODULE: ./src/components/loading/data.json
    const data_namespaceObject = JSON.parse(
      '{"v":"5.6.10","fr":24,"ip":0,"op":60,"w":800,"h":800,"nm":"Shape Layer 1 Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":30,"s":[100]},{"t":59,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[350,340,0],"ix":2},"a":{"a":0,"k":[-91.512,-147.449,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[20,50],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":197,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-91.512,-147.449],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"rp","c":{"a":1,"k":[{"i":{"x":[0.822],"y":[1]},"o":{"x":[0.66],"y":[0]},"t":0,"s":[20]},{"i":{"x":[0.36],"y":[1]},"o":{"x":[0.172],"y":[0]},"t":30,"s":[10]},{"t":59,"s":[20]}],"ix":1},"o":{"a":0,"k":0,"ix":2},"m":1,"ix":2,"tr":{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.134],"y":[1]},"o":{"x":[0.59],"y":[0]},"t":0,"s":[180]},{"i":{"x":[0.41],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":30,"s":[250]},{"t":59,"s":[180]}],"ix":4},"so":{"a":0,"k":0,"ix":5},"eo":{"a":0,"k":100,"ix":6},"nm":"Transform"},"nm":"Repeater 1","mn":"ADBE Vector Filter - Repeater","hd":false}],"ip":0,"op":60,"st":-50,"bm":0}],"markers":[]}'
    );
    // EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
    var styled_components_cjs = __webpack_require__(27);
    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(5893); // CONCATENATED MODULE: ./src/components/loading/index.tsx
    const LoadingCtrl = ({ className, loading, size }) => {
      const defaultOptions = {
        loop: true,
        autoplay: false,
        renderer: 'canvas',
        animationData: JSON.parse(JSON.stringify(data_namespaceObject)),
      };
      return /*#__PURE__*/ jsx_runtime.jsx('div', {
        className: className,
        children: /*#__PURE__*/ jsx_runtime.jsx(index_cjs /* Lottie */.q, {
          config: defaultOptions,
          height: size ? size : '116px',
          width: size ? size : '116px',
          playingState: !loading ? 'paused' : 'playing',
        }),
      });
    };

    /* harmony default export */ const loading = (0, styled_components_cjs /* default */.ZP)(LoadingCtrl).withConfig({
      displayName: 'loading',
      componentId: 'iutiec-0',
    })(['display:flex;justify-content:center;']);

    /***/
  },

  /***/ 7506: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ A: () => /* binding */ useOrder,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

    const getStoredOrder = (key) => {
      if (typeof localStorage !== 'undefined') {
        const previousOrder = localStorage.getItem(key);

        if (previousOrder) {
          return JSON.parse(previousOrder);
        }
      }

      return undefined;
    };

    const storeOrder = (key, order) => {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(order));
      }
    };

    const useOrder = (orderId) => {
      const storageKey = `TRAC_ORDER.${orderId}`;
      const { 0: order, 1: setOrder } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)();
      (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setOrder(getStoredOrder(storageKey));
      }, [storageKey]);

      const saveOrder = (newOrder) => {
        const orderId = newOrder.id;
        const storageKey = `TRAC_ORDER.${orderId}`;
        storeOrder(storageKey, newOrder);
        setOrder(newOrder);
        return newOrder;
      };

      const emptyOrder = () => {
        storeOrder(storageKey, undefined);
        setOrder(undefined);
      };

      return {
        order,
        saveOrder,
        emptyOrder,
      };
    };

    /***/
  },

  /***/ 3962: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ G_: () => /* binding */ centsToDollars,
      /* harmony export */
    });
    /* unused harmony exports normalizeEmail, normalizePhone, normalizePhoneOrEmail, normalizeTitle, joinList, formatOwners, formatDate, formatGenre, formatRegions, formatStores */
    /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(381);
    /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      moment__WEBPACK_IMPORTED_MODULE_0__
    );

    const normalizeEmail = (text) => {
      if (isEmail(text)) {
        return text.toLowerCase();
      }
    };
    const normalizePhone = (text) => {
      if (isPhone(text)) {
        return text.replace('-', '').replace(' ', '');
      }
    };
    const normalizePhoneOrEmail = (text) => {
      if (isEmail(text)) {
        return {
          value: normalizeEmail(text),
          type: 'email',
        };
      }

      if (isPhone(text)) {
        return {
          value: normalizePhone(text),
          type: 'sms',
        };
      }
    };
    const normalizeTitle = (text) =>
      text
        .replace(/\s{2,}/g, ' ')
        .split(' ')
        .map((part) => (part.length >= 1 ? `${part[0].toLocaleUpperCase()}${part.slice(1)}` : ''))
        .join(' ');
    const joinList = (l) => {
      if (l.length <= 1) {
        return l.join();
      }

      const begining = l.slice(0, -1);
      const end = l.slice(-1)[0];
      return `${begining.join(', ')} & ${end}`;
    };
    const formatOwners = (ownerCount) => {
      if (!ownerCount) {
        return '-';
      }

      return `${ownerCount} Owner${ownerCount !== 1 ? 's' : ''}`;
    };
    const formatDate = (release) => {
      const date = release.releaseHistory === 'new' ? release.releaseDate : release.previousReleaseDate;
      return moment(date).format('ll');
    };
    const formatGenre = (genres) => {
      return joinList(genres.map((g) => g.value) || []);
    };

    const getBrief = (list, size = 3) => {
      const highlighted = list.sort().slice(0, size);
      let result = `${highlighted.join(', ')}`;

      if (list.length > size) {
        result = `${result} and ${list.length - size} other${list.length > size + 1 ? 's' : ''}`;
      }

      return result;
    };

    const formatRegions = (regions) => {
      return getBrief(
        regions.map((r) => r.name),
        2
      );
    };
    const formatStores = (active, all) => {
      const stores = active.length ? active.map((s) => s.name) : all;

      if (stores.length === all.length) {
        return 'All Stores';
      }

      return getBrief(stores);
    };
    const centsToDollars = (cents) => {
      const numbs = `${Math.round(cents) / 100}`.split('.');
      if (numbs.length < 2) return `${cents / 100}`;

      if (numbs[1].length < 2) {
        numbs[1] = numbs[1] + '0';
      }

      return numbs.join('.');
    };

    /***/
  },
};
