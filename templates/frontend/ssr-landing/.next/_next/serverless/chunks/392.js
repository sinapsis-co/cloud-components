'use strict';
exports.id = 392;
exports.ids = [392];
exports.modules = {
  /***/ 1807: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ SongLink,
      /* harmony export */
    });
    /* harmony import */ var _components_icons_play__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6711);
    /* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1355);
    /* harmony import */ var _components_link_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7423);
    /* harmony import */ var _components_featured_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5322);
    /* harmony import */ var _components_link_components_text_info__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(1183);
    /* harmony import */ var _components_link_components_play_wrapper__WEBPACK_IMPORTED_MODULE_5__ =
      __webpack_require__(1362);
    /* harmony import */ var _components_link_components_wrapper_info__WEBPACK_IMPORTED_MODULE_6__ =
      __webpack_require__(7887);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5893);

    function SongLink({ data, className, artistName, hasDelay, noAnimation }) {
      const handleClick = () => {
        analytics.track('Tracpage Link Click', {
          artist_id: artistName,
          category: data.type === 'traclink' ? 'Release' : 'Url',
          name: data.title,
        });
      };

      return data.title && data.url
        ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
            _components_link_components_link__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
            {
              className: className ? className : '',
              href: `${data.url}`,
              onClick: handleClick,
              hasDelay: hasDelay,
              highlight: data.highlight ? 'highlight' : '',
              noAnimation: noAnimation,
              image: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                      _components_cover_image__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
                      {
                        src: data.avatar,
                        alt: data.title,
                        variant: data.highlight ? 'squareHighlight' : 'square',
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                      _components_link_components_play_wrapper__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                      {
                        className: `play-icon ${data.highlight ? 'highlight' : ''}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                          _components_icons_play__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z,
                          {}
                        ),
                      }
                    ),
                  ],
                }
              ),
              children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
                _components_link_components_wrapper_info__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                {
                  highlight: data.highlight,
                  children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
                      _components_link_components_text_info__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
                      {
                        className: `${data.highlight ? 'highlight' : ''}`,
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx('h3', {
                            children: data.title,
                          }),
                          /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)('p', {
                            children: [artistName, ', Star6ixse7en, MRG, Sweez'],
                          }),
                        ],
                      }
                    ),
                    data.highlight
                      ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                          _components_featured_badge__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
                          {
                            className: 'badge',
                          }
                        )
                      : null,
                  ],
                }
              ),
            }
          )
        : null;
    }

    /***/
  },
};
