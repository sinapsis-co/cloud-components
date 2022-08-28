'use strict';
exports.id = 194;
exports.ids = [194];
exports.modules = {
  /***/ 7465: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* unused harmony export DropdownItem */
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
    /* harmony import */ var _components_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5343);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8521);

    const DropdownItem = (props) =>
      /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
        _components_flex__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
        {
          className: props.className,
          alignItems: 'center',
          onClick: () => (props.onClick ? props.onClick() : null),
          children: [
            props.decoration
              ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('div', {
                  className: 'decoration-item',
                  children: props.decoration,
                })
              : null,
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
              _components_flex__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
              {
                flexDirection: 'column',
                className: 'dropdown-item-wrapper',
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(DrodownItemText, {
                    children: props.children,
                  }),
                  props.helpText
                    ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(HelpText, {
                        children: props.helpText,
                      })
                    : null,
                ],
              }
            ),
          ],
        }
      );
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (0,
    styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.ZP)(DropdownItem).withConfig({
      displayName: 'dropdown-item',
      componentId: 'sc-1j2i4mc-0',
    })(
      ['padding:7px 0;cursor:pointer;width:100%;.dropdown-item-wrapper{width:', ';}', ''],
      (props) => (props.decoration ? `calc(100% - (32px + 12px))` : '100%'),
      (props) =>
        props.decoration
          ? `
    .decoration-item {
      margin-right: 12px;
    }
  `
          : null
    );
    const DrodownItemText = styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"].span.withConfig */.ZP.span
      .withConfig({
        displayName: 'dropdown-item__DrodownItemText',
        componentId: 'sc-1j2i4mc-1',
      })(
      [
        'color:',
        ';font-weight:700;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:0.75;margin:0;transition:opacity ',
        ';&:hover{opacity:1;}',
      ],
      ({ theme }) => theme.colors.primary,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`
    );
    const HelpText = styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"].span.withConfig */.ZP.span
      .withConfig({
        displayName: 'dropdown-item__HelpText',
        componentId: 'sc-1j2i4mc-2',
      })(['color:', ';margin:0;font-size:12px;font-weight:700;opacity:0.5;'], ({ theme }) => theme.colors.primary);

    /***/
  },

  /***/ 7744: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ CircleArrowIcon,
      /* harmony export */
    });
    /* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9141);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8521);

    function CircleArrowIcon({ className, arrowUp, onClick }) {
      const arrowDirection = {
        down: {
          rotate: 0,
        },
        up: {
          rotate: 180,
        },
      };
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx('svg', {
        width: '18px',
        height: '18px',
        viewBox: '0 0 18 18',
        className: className,
        preserveAspectRatio: 'none',
        onClick: (ev) => (onClick ? onClick(ev) : null),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
          framer_motion__WEBPACK_IMPORTED_MODULE_0__ /* .motion.g */.ww.g,
          {
            variants: arrowDirection,
            initial: 'down',
            animate: arrowUp ? 'up' : 'down',
            children: [
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Circle, {
                cx: '9',
                cy: '9',
                r: '9',
              }),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Path, {
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: '10',
                d: 'M6,7.5l3,3l3-3',
              }),
            ],
          }
        ),
      });
    }
    const Circle = styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"].circle.withConfig */.ZP.circle
      .withConfig({
        displayName: 'circle-arrow__Circle',
        componentId: 'sc-1tp4xs4-0',
      })(['fill:', ';'], ({ theme }) => theme.colors.background);
    const Path = styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"].path.withConfig */.ZP.path
      .withConfig({
        displayName: 'circle-arrow__Path',
        componentId: 'sc-1tp4xs4-1',
      })(['stroke:', ';'], ({ theme }) => theme.colors.icon);

    /***/
  },

  /***/ 224: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* unused harmony export MotionOpacity */
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9141);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8521);

    const MotionOpacity = (props) => {
      const opacity = {
        visible: {
          opacity: 1,
          transition: {
            ease: 'linear',
            duration: 0.75,
          },
        },
        hidden: {
          opacity: 0,
        },
      };
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('div', {
        className: props.className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
          framer_motion__WEBPACK_IMPORTED_MODULE_1__ /* .motion.div */.ww.div,
          {
            initial: 'hidden',
            animate: 'visible',
            exit: 'hidden',
            variants: opacity,
            children: props.children,
          }
        ),
      });
    };
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = MotionOpacity;

    /***/
  },

  /***/ 9542: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      u7: () => /* binding */ GenericDropdownBuilder,
      ZP: () => /* binding */ dropdown,
    });

    // UNUSED EXPORTS: DropdownCtrl

    // EXTERNAL MODULE: ./node_modules/react/index.js
    var react = __webpack_require__(7294);
    // EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
    var styled_components_cjs = __webpack_require__(27);
    // EXTERNAL MODULE: ./src/components/form/input/index.tsx + 3 modules
    var input = __webpack_require__(2152);
    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(8521); // CONCATENATED MODULE: ./src/components/icons/search/index.tsx
    function SearchIcon({ className }) {
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)('svg', {
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        className: className,
        children: [
          /*#__PURE__*/ jsx_runtime.jsx(Handle, {
            d: 'M14.3 16.2c-0.4-0.4-0.4-1 0-1.4 0.4-0.4 1-0.4 1.4 0l4 4c0.4 0.4 0.4 1 0 1.4 -0.4 0.4-1 0.4-1.4 0L14.3 16.2z',
          }),
          /*#__PURE__*/ jsx_runtime.jsx(Circle, {
            d: 'M11 17.5c-2.5 0-4.8-1.3-6.1-3.5 -1.3-2.2-1.3-4.8 0-7S8.5 3.5 11 3.5c3.9 0 7 3.1 7 7S14.9 17.5 11 17.5zM11 15.5c2.8 0 5-2.2 5-5s-2.2-5-5-5c-2.8 0-5 2.2-5 5S8.2 15.5 11 15.5z',
          }),
        ],
      });
    }
    const Handle = styled_components_cjs /* default.path.withConfig */.ZP.path
      .withConfig({
        displayName: 'search__Handle',
        componentId: 'sc-1pnq8jm-0',
      })(['fill:', ';opacity:0.3;'], ({ theme }) => theme.colors.icon);
    const Circle = styled_components_cjs /* default.path.withConfig */.ZP.path
      .withConfig({
        displayName: 'search__Circle',
        componentId: 'sc-1pnq8jm-1',
      })(['fill:', ';'], ({ theme }) => theme.colors.icon);
    // EXTERNAL MODULE: ./node_modules/polished/dist/polished.cjs.js
    var polished_cjs = __webpack_require__(2521);
    // EXTERNAL MODULE: ./src/components/icons/circle-arrow/index.tsx
    var circle_arrow = __webpack_require__(7744); // CONCATENATED MODULE: ./src/components/form/dropdown/dropdown-header/index.tsx
    const SelectedItem = styled_components_cjs /* default.span.withConfig */.ZP.span
      .withConfig({
        displayName: 'dropdown-header__SelectedItem',
        componentId: 'tlc708-0',
      })(
      ['position:absolute;pointer-events:none;transition:top ', ',opacity ', ',left ', ';color:', ';'],
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ theme }) => (0, polished_cjs /* rgba */.m4)(theme.colors.primary, 0.7)
    );
    const StyledError = styled_components_cjs /* default.span.withConfig */.ZP.span
      .withConfig({
        displayName: 'dropdown-header__StyledError',
        componentId: 'tlc708-1',
      })(
      [
        'font-size:10px;font-weight:700;position:absolute;top:50%;right:58px;text-align:right;transform:translate(0,-50%);color:',
        ';',
      ],
      ({ theme }) => theme.colors.error
    );
    const DropdownHeader = (props) =>
      /*#__PURE__*/ (0, jsx_runtime.jsxs)('div', {
        className: props.className,
        children: [
          props.decoration
            ? /*#__PURE__*/ jsx_runtime.jsx('div', {
                className: 'decoration',
                children: props.decoration,
              })
            : null,
          /*#__PURE__*/ (0, jsx_runtime.jsxs)('div', {
            className: 'dropdown-text-wrapper',
            children: [
              /*#__PURE__*/ jsx_runtime.jsx(DropdownText, {
                className: 'dropdown-text',
                children: props.label || props.title,
              }),
              /*#__PURE__*/ jsx_runtime.jsx(SelectedItem, {
                className: 'label',
                children: props.title,
              }),
            ],
          }),
          props.error
            ? /*#__PURE__*/ jsx_runtime.jsx(StyledError, {
                children: props.error,
              })
            : null,
          props.disabled
            ? null
            : /*#__PURE__*/ jsx_runtime.jsx(IconWrapper, {
                children: /*#__PURE__*/ jsx_runtime.jsx(StyledCircleArrowIcon, {
                  arrowUp: props.listOpen,
                }),
              }),
        ],
      });
    /* harmony default export */ const dropdown_header = (0, styled_components_cjs /* default */.ZP)(
      DropdownHeader
    ).withConfig({
      displayName: 'dropdown-header',
      componentId: 'tlc708-2',
    })(
      [
        'display:flex;box-sizing:border-box;align-items:center;cursor:',
        ';min-height:60px;padding:',
        ';border-radius:',
        ';background-color:',
        ';border-left:3px solid ',
        ';transition:box-shadow ',
        ',padding ',
        ';position:relative;.dropdown-text-wrapper{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;.dropdown-text{',
        '}}',
        ' ',
        ' ',
        ' ',
        ' .label{opacity:0;}',
        ' ',
        ' ',
        ' .label{font-size:',
        ';top:',
        ';left:15px;opacity:',
        ';}',
        ' ',
        ' ',
        '',
      ],
      (props) => (props.disabled ? 'not-allowed' : 'pointer'),
      (props) => (props.hasSelected ? '30px 50px 14px 15px' : '22px 50px 22px 15px'),
      (props) => (props.customBorderRadius ? props.customBorderRadius : '2px'),
      ({ theme }) => theme.colors.inputsBackground,
      ({ theme }) => theme.colors.inputsBackground,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      (props) => (props.disabled ? `opacity: .6;` : null),
      (props) =>
        props.decoration
          ? `
    .decoration {
      display: none;
      position: absolute;
    }
  `
          : null,
      (props) =>
        props.decoration && !props.smallDecoration
          ? `
    .decoration {
      top: 50%;
      left: 15px;
      transform: translate(0, -50%);
      max-height: 32px;
    }
  `
          : null,
      (props) =>
        props.decoration && props.smallDecoration
          ? `
    .decoration {
        bottom: 14px;
        left: 15px;
    }
  `
          : null,
      (props) =>
        props.decoration && props.hasSelected
          ? `
    .decoration {
      display: block;
    }
  `
          : null,
      (props) =>
        props.error
          ? (0, styled_components_cjs /* css */.iv)(['border-color:', ';;'], ({ theme }) => theme.colors.error)
          : null,
      (props) =>
        props.listOpen
          ? `
    border-radius: 2px 2px 0 0;
  `
          : null,
      (props) =>
        props.listOpen && props.customBorderRadius
          ? `
    border-radius: 0 2px 2px 0;
  `
          : null,
      (props) => (props.hasSelected ? '12px' : '16px'),
      (props) => (props.hasSelected ? '12px' : '19px'),
      (props) => (props.hasSelected ? '1' : '0'),
      (props) =>
        props.decoration && !props.smallDecoration && props.hasSelected
          ? (0, styled_components_cjs /* css */.iv)(
              ['padding-left:55px !important;background-color:', ';.label{left:55px;}'],
              ({ theme }) => theme.colors.itemBackground
            )
          : null,
      (props) =>
        props.decoration && props.smallDecoration && props.hasSelected
          ? `
    padding-left: 35px !important;
  `
          : null,
      (props) => (props.disabled ? `user-select: none;` : null)
    );
    const IconWrapper = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'dropdown-header__IconWrapper',
        componentId: 'tlc708-3',
      })(['position:absolute;top:50%;right:18px;transform:translate(0,-50%);']);
    const DropdownText = styled_components_cjs /* default.span.withConfig */.ZP.span
      .withConfig({
        displayName: 'dropdown-header__DropdownText',
        componentId: 'tlc708-4',
      })(
      [
        'text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:14px;font-weight:700;line-height:16px;height:auto;color:',
        ';',
      ],
      ({ theme }) => theme.colors.primary
    );
    const StyledCircleArrowIcon = (0, styled_components_cjs /* default */.ZP)(circle_arrow /* default */.Z).withConfig({
      displayName: 'dropdown-header__StyledCircleArrowIcon',
      componentId: 'tlc708-5',
    })(['width:24px;height:24px;']);
    // EXTERNAL MODULE: ./node_modules/framer-motion/dist/framer-motion.cjs.js
    var framer_motion_cjs = __webpack_require__(9141); // CONCATENATED MODULE: ./src/components/form/dropdown/dropdown-list/index.tsx
    const DropdownList = (props) => {
      const item = {
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            ease: [0.17, 0.67, 0.83, 0.67],
            duration: 0.125,
          },
        },
        hidden: {
          y: -100,
          opacity: 0,
        },
      };
      return /*#__PURE__*/ jsx_runtime.jsx('div', {
        className: props.className,
        onMouseOver: () => (props.onMouseOver ? props.onMouseOver() : null),
        children: /*#__PURE__*/ jsx_runtime.jsx(framer_motion_cjs /* motion.div */.ww.div, {
          className: 'container',
          initial: 'hidden',
          animate: props.listOpen ? 'visible' : 'hidden',
          variants: item,
          children: props.children,
        }),
      });
    };
    /* harmony default export */ const dropdown_list = (0, styled_components_cjs /* default */.ZP)(
      DropdownList
    ).withConfig({
      displayName: 'dropdown-list',
      componentId: 'lffnfb-0',
    })(
      [
        'width:100%;pointer-events:none;',
        ' z-index:999;position:absolute;top:100%;right:0;left:0;',
        ' .container{margin-top:',
        ';.dropdown-list-content{padding:11px 18px;overflow-y:auto;background-color:',
        ';border-radius:2px;overflow-y:hidden;overflow-x:hidden;transition:height ',
        ',margin-top ',
        ';',
        ';}',
        '}',
        ' ',
        '',
      ],
      (props) => (props.listOpen ? `height: 100%;` : `height: 0;`),
      (props) => (props.customContent && props.listOpen ? `height: auto; pointer-events: initial;` : null),
      (props) => (!props.customContent ? '4px' : '0'),
      ({ theme }) => theme.colors.inputsBackground,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      (props) => (!props.noMaxHeight ? 'max-height: 250px' : null),
      (props) =>
        props.customContent
          ? `
      margin-top: 0;
    `
          : null,
      (props) =>
        props.listOpen && !props.customContent
          ? `
    pointer-events: initial;
    top: 64px;

    .container {
      .dropdown-list-content {
      overflow-y: auto;
      overflow-x: hidden;

        ::-webkit-scrollbar {
          width: 15px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #d8d8d8;
          border-radius: 8px;
          border: 4px solid white;
        }
      }
    }
  `
          : null,
      (props) =>
        props.listOpen && props.content === ''
          ? `
    &:hover {
      span {
        opacity: .5;
      }
    }
  `
          : null
    );
    // EXTERNAL MODULE: ./src/components/form/dropdown/dropdown-item/index.tsx
    var dropdown_item = __webpack_require__(7465); // CONCATENATED MODULE: ./src/controllers/dropdown/index.tsx
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

    const DropdownCtrl = (props) => {
      var _props$options;

      const hasContent =
        ((_props$options = props.options) === null || _props$options === void 0 ? void 0 : _props$options.length) ||
        props.children;
      const { onOpen, getNextPage, children, onClose } = props;
      const [listOpen, setListOpen] = react.useState(false);
      const [height, setHeight] = react.useState();
      const [filterValue, setFilterValue] = react.useState('');
      const [scroll, setScroll] = react.useState(0);
      const ref = (0, react.useRef)(null);
      (0, react.useEffect)(() => {
        const handleClickOutside = (ev) => {
          if (ref.current && !ref.current.contains(ev.target)) {
            setListOpen(false);
          }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [ref]);
      react.useEffect(() => {
        if (onOpen) {
          onOpen(listOpen);
        }

        if (onClose && !listOpen) {
          onClose();
        }
      }, [onOpen, onClose, listOpen]);
      react.useEffect(() => {
        if (getNextPage) {
          const timer = setTimeout(() => getNextPage(scroll > 0 ? 1 : 0), 200);
          return () => clearTimeout(timer);
        }
      }, [scroll, getNextPage]);
      react.useEffect(() => {
        setScroll(0);
      }, [children]);

      const renderValue = (value) => {
        if (value !== undefined) {
          if (props.valueMapper) {
            return props.valueMapper(value);
          }

          return `${value}`;
        }

        return '';
      };

      const getOptions = () => {
        if (props.options) {
          if (filterValue) {
            var _props$options2;

            return (_props$options2 = props.options) === null || _props$options2 === void 0
              ? void 0
              : _props$options2.filter((o) => o.label.toLowerCase().includes(filterValue.trim().toLowerCase()));
          }

          return props.options;
        }

        return [];
      };

      const getLabel = () => {
        if (props.value !== undefined) {
          var _props$options3;

          if ((_props$options3 = props.options) !== null && _props$options3 !== void 0 && _props$options3.length) {
            const active = props.options.find((o) => {
              if (props.keyMapper) {
                return props.keyMapper(o.value) === props.keyMapper(props.value);
              }

              return o.value === props.value;
            });

            if (active) {
              return active.label;
            }
          } else {
            return renderValue(props.value);
          }
        }

        return '';
      };

      const getHeight = () => {
        if (height) {
          return height;
        }

        return undefined;
      };

      const toggleOpen = () => {
        if (props.disabled) {
          return;
        }

        if (hasContent) {
          return setListOpen(!listOpen);
        }

        return setListOpen(props.header ? true : false);
      };

      const getKey = (value) => {
        let key = renderValue(value).replace(/\s/g, '-').toLowerCase();

        if (props.keyMapper && value) {
          key = props.keyMapper(value);
        }

        return `dropdown-${key}`;
      };

      return /*#__PURE__*/ (0, jsx_runtime.jsxs)('div', {
        className: `${props.className} ${props.forceOpen || listOpen ? 'opened' : ''}`,
        onClick: () => toggleOpen(),
        ref: ref, // onMouseLeave={() => setListOpen(false)}
        // onMouseLeave={() => console.warn('MOUSELEAVE WAS DISABLED!!')}
        children: [
          props.header
            ? props.header
            : /*#__PURE__*/ jsx_runtime.jsx(dropdown_header, {
                decoration: props.decoration,
                smallDecoration: props.smallDecoration,
                hasSelected: props.value !== undefined,
                title: props.title,
                label: getLabel(),
                listOpen: listOpen,
                disabled: props.disabled,
                bgColor: props.bgColor,
                customBorderRadius: props.customBorderRadius,
                noShadow: props.noShadow,
              }),
          hasContent
            ? /*#__PURE__*/ (0, jsx_runtime.jsxs)(dropdown_list, {
                listOpen: props.forceOpen || listOpen,
                onMouseOver: () => setListOpen(true),
                content: props.contentType,
                height: getHeight(),
                customContent: props.customContent,
                noMaxHeight: props.noMaxHeight,
                children: [
                  props.hasFilter
                    ? /*#__PURE__*/ jsx_runtime.jsx('form', {
                        className: 'filter-wrapper',
                        autoComplete: 'off',
                        onClick: (ev) => ev.stopPropagation(),
                        onSubmit: (ev) => {
                          ev.stopPropagation();
                          ev.preventDefault();
                          return false;
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx(input /* default */.Z, {
                          name: 'filter',
                          label: props.filterLabel || '',
                          autoComplete: 'off',
                          value: props.customFilterValue ? props.customFilterValue : filterValue || ' ',
                          onChange: (value) =>
                            props.onCustomFilter ? props.onCustomFilter(value.trim()) : setFilterValue(value.trim()),
                          customBorderRadius: '0 0 4px 4px',
                          rightDecoration: /*#__PURE__*/ jsx_runtime.jsx(SearchIcon, {}),
                        }),
                      })
                    : null,
                  props.options
                    ? /*#__PURE__*/ jsx_runtime.jsx('div', {
                        className: 'dropdown-list-content',
                        children: getOptions().map((option) =>
                          /*#__PURE__*/ jsx_runtime.jsx(
                            dropdown_item /* default */.Z,
                            {
                              onClick: () => (props.onChange ? props.onChange(option.value) : null),
                              decoration: option.decoration,
                              helpText: option.helpText,
                              children: option.label,
                            },
                            getKey(option.value)
                          )
                        ),
                      })
                    : props.customContent
                    ? children
                    : /*#__PURE__*/ jsx_runtime.jsx('div', {
                        className: 'dropdown-list-content',
                        ref: (el) => setHeight(el === null || el === void 0 ? void 0 : el.offsetHeight),
                        onScroll: () => (getNextPage ? setScroll(scroll + 1) : null),
                        children: children,
                      }),
                ],
              })
            : null,
        ],
      });
    };
    const GenericDropdownBuilder = () =>
      (0, styled_components_cjs /* default */.ZP)((props) =>
        /*#__PURE__*/ jsx_runtime.jsx(DropdownCtrl, _objectSpread({}, props))
      ).withConfig({
        displayName: 'dropdown__GenericDropdownBuilder',
        componentId: 'd4cqq2-0',
      })(
        ['', ' &.opened{z-index:99;}.filter-wrapper{position:relative;border-bottom:2px solid ', ';}'],
        (props) => (props.parentRelative ? null : 'position: relative;'),
        ({ theme }) => theme.colors.background
      );
    const BasicDropdownCtrl = GenericDropdownBuilder();
    /* harmony default export */ const dropdown = BasicDropdownCtrl;

    /***/
  },
};
