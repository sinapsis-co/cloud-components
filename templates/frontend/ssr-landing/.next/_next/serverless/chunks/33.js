'use strict';
exports.id = 33;
exports.ids = [33];
exports.modules = {
  /***/ 9207: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ V: () => /* binding */ usePageData,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /**
     * usePageData: This hook supports injecting preview data from a container window
     */

    const usePageData = (initial) => {
      const { 0: pageData, 1: setPageData } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);
      (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const processState = (data) => {
          try {
            return JSON.parse(decodeURIComponent(escape(window.atob(data))));
          } catch {
            return {};
          }
        };

        const receiveMessage = (event) => {
          var _process$env$NEXT_PUB, _event$data, _event$data2;

          const allowedOrigins =
            ((_process$env$NEXT_PUB = 'http://localhost:3000,https://app.development.trac.co') === null ||
            _process$env$NEXT_PUB === void 0
              ? void 0
              : _process$env$NEXT_PUB.split(',')) || [];

          if (
            !(
              allowedOrigins.includes(event.origin) &&
              ((_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.origin) ===
                'trac-editor' &&
              (_event$data2 = event.data) !== null &&
              _event$data2 !== void 0 &&
              _event$data2.payload
            )
          ) {
            return;
          }

          setPageData(processState(event.data.payload));
        };

        window.addEventListener('message', receiveMessage, false);

        if (document.referrer) {
          window.parent.postMessage(
            {
              origin: 'trac-artist-site',
              ready: true,
            },
            document.referrer
          );
        }

        return () => {
          window.removeEventListener('message', receiveMessage);
        };
      }, []);
      return {
        pageData,
      };
    };

    /***/
  },

  /***/ 5584: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ GetTracPageData,
    }); // CONCATENATED MODULE: ./src/utils/get-artist-id.ts

    function getArtistId(originalUrl) {
      var _window;

      const rx = new RegExp(`^([^.]+)(?:.[^.]+){0,1}.${'development.trac.co'}$`);
      const url = new URL(
        originalUrl || ((_window = window) === null || _window === void 0 ? void 0 : _window.location.toString()) || ''
      );
      const match = rx.exec(url.host);

      if (match) {
        return match[1];
      }

      return false ? 0 : false || '';
    } // CONCATENATED MODULE: ./src/pages/api/tracpage/index.ts
    async function GetTracPageData(originalUrl) {
      const artistId = getArtistId(originalUrl);
      const url = `${'https://media.development.trac.co'}/trac-page/${artistId}/data.json`;
      return fetch(url).then((response) => {
        if (response.ok) {
          return response.json();
        }

        return {};
      });
    }

    /***/
  },
};
