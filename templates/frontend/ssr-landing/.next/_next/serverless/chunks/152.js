'use strict';
exports.id = 152;
exports.ids = [152];
exports.modules = {
  /***/ 2152: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ input,
    });

    // UNUSED EXPORTS: InputField

    // EXTERNAL MODULE: ./node_modules/react/index.js
    var react = __webpack_require__(7294);
    // EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
    var styled_components_cjs = __webpack_require__(27);
    // EXTERNAL MODULE: ./node_modules/polished/dist/polished.cjs.js
    var polished_cjs = __webpack_require__(2521);
    // EXTERNAL MODULE: ./node_modules/framer-motion/dist/framer-motion.cjs.js
    var framer_motion_cjs = __webpack_require__(9141);
    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(8521); // CONCATENATED MODULE: ./src/components/form/input/styled-input/index.tsx
    const StyledInput = (0, styled_components_cjs /* default */.ZP)((props) =>
      /*#__PURE__*/ jsx_runtime.jsx('input', {
        className: props.className,
        id: props.id,
        type: props.type,
        value: props.value,
        placeholder: props.placeholder,
        autoComplete: props.autoComplete,
        tabIndex: props.tabIndex,
        maxLength: props.maxLength,
        disabled: props.disabled,
        onClick: (ev) => (props.propagateClick ? null : ev.stopPropagation()),
        onChange: (ev) => (props.onChange ? props.onChange(ev) : null),
        onFocus: (ev) => (props.onFocus ? props.onFocus(ev) : null),
        onBlur: (ev) => (props.onBlur ? props.onBlur(ev) : null),
        min: props.min,
        max: props.max,
        step: props.step,
      })
    ).withConfig({
      displayName: 'styled-input__StyledInput',
      componentId: 'zrisb9-0',
    })(
      [
        'width:100%;position:relative;border:none;border-radius:0 4px 4px 0;margin:0;background-color:',
        ';color:',
        ';cursor:auto;box-sizing:border-box;font-size:14px;font-weight:700;line-height:16px;padding:',
        ';',
        ' ',
        ';',
        ' ',
        ' ',
        ' @media (max-width:',
        '){}',
      ],
      ({ theme }) => theme.colors.inputsBackground,
      ({ theme }) => theme.colors.primary,
      (props) => (props.active || props.value ? '30px 18px 14px 15px' : '22px 18px 22px 15px'),
      (props) =>
        props.customBorderRadius &&
        (0, styled_components_cjs /* css */.iv)(
          ['border-radius:', ';border-bottom-left-radius:0;'],
          props.customBorderRadius
        ),
      (props) =>
        props.withDecoration === 'right' && (props.active || props.value)
          ? `
    padding: 30px 40px 14px 15px;
  `
          : null,
      (props) =>
        props.withDecoration === 'left'
          ? props.bigDecoration
            ? 'padding: 30px 40px 14px 64px;'
            : 'padding: 30px 15px 14px 45px;'
          : null,
      (props) =>
        props.withDecoration === 'both'
          ? props.bigDecoration
            ? 'padding: 30px 40px 14px 64px;'
            : 'padding: 30px 15px 14px 45px;'
          : null,
      (props) =>
        props.withDecoration === 'left' ? (props.biggerDecoration ? 'padding: 30px 40px 14px 144px;' : null) : null,
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );
    /* harmony default export */ const styled_input = StyledInput; // CONCATENATED MODULE: ./src/components/form/input/styled-label/index.tsx
    const labelMoved = (withDecoration) => {
      return withDecoration === 'left' || withDecoration === 'both';
    };

    const isActiveCss = (0, styled_components_cjs /* css */.iv)(
      ['font-size:12px;top:12px;font-weight:400;line-height:normal;color:', ';'],
      ({ theme }) => (0, polished_cjs /* rgba */.m4)(theme.colors.primary, 0.5)
    );
    const isNotActiveCss = (0, styled_components_cjs /* css */.iv)(
      ['top:22px;font-size:14px;font-weight:400;line-height:16px;color:', ';'],
      ({ theme }) => theme.colors.primary
    );
    const StyledLabel = (0, styled_components_cjs /* default */.ZP)((props) =>
      /*#__PURE__*/ jsx_runtime.jsx('label', {
        htmlFor: props.id,
        className: props.className,
        children: props.label,
      })
    ).withConfig({
      displayName: 'styled-label__StyledLabel',
      componentId: 'sc-1cd7y43-0',
    })(
      ['position:absolute;left:', ';', ';opacity:1;pointer-events:none;transition:top ', ';', ''],
      (props) => (labelMoved(props.withDecoration) ? (props.bigDecoration ? '64px' : '45px') : '15px'),
      (props) => (props.biggerDecoration ? 'left: 144px' : null),
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      (props) => (props.active ? isActiveCss : isNotActiveCss)
    );
    /* harmony default export */ const styled_label = StyledLabel; // CONCATENATED MODULE: ./src/components/form/input/styled-error/index.tsx
    const StyledError = styled_components_cjs /* default.p.withConfig */.ZP.p
      .withConfig({
        displayName: 'styled-error__StyledError',
        componentId: 'wpm28m-0',
      })(
      [
        'position:absolute;top:12px;right:18px;text-align:right;pointer-events:none;color:',
        ';font-size:10px;font-weight:400px;margin:0;',
      ],
      ({ theme }) => theme.colors.error
    );
    /* harmony default export */ const styled_error = StyledError; // CONCATENATED MODULE: ./src/components/form/input/index.tsx
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    class InputField extends react.Component {
      constructor(props) {
        super(props);

        _defineProperty(this, 'state', void 0);

        this.state = {
          active: (props.locked && props.active) || !!props.value,
        };
      }

      changeValue(event) {
        const value = event.target.value;
        this.setState({
          active: true,
        });

        if (this.props.onChange) {
          this.props.onChange(value, event);
        }
      }

      handleFocus() {
        if (!this.props.locked) {
          this.setState({
            active: true,
          });

          if (this.props.onFocus) {
            this.props.onFocus();
          }
        }
      }

      handleBlur() {
        if (!this.props.locked) {
          if (!this.props.value) {
            this.setState({
              active: false,
            });
          }

          if (this.props.onBlur) {
            this.props.onBlur();
          }
        }
      }

      render() {
        const { active } = this.state;
        const decorationType =
          this.props.rightDecoration && this.props.leftDecoration
            ? 'both'
            : this.props.rightDecoration
            ? 'right'
            : this.props.leftDecoration
            ? 'left'
            : undefined;
        return /*#__PURE__*/ (0, jsx_runtime.jsxs)('div', {
          className: `${this.props.className ? this.props.className : ''} ${active ? 'active' : ''} input-wrapper`,
          children: [
            /*#__PURE__*/ jsx_runtime.jsx(styled_input, {
              id: this.props.id,
              type: this.props.type,
              value: this.props.value,
              placeholder: this.props.placeholder,
              active: active || !!this.props.value || !!this.props.placeholder,
              withDecoration: decorationType,
              bigDecoration: this.props.bigDecoration,
              biggerDecoration: this.props.biggerDecoration,
              autoComplete: this.props.autoComplete,
              onChange: (ev) => (this.props.locked ? null : this.changeValue(ev)),
              onFocus: () => this.handleFocus(),
              onBlur: () => this.handleBlur(),
              disabled: this.props.locked,
              customBorderRadius: this.props.customBorderRadius,
              propagateClick: this.props.propagateClick,
              min: this.props.min,
              max: this.props.max,
              step: this.props.step,
            }),
            this.props.leftDecoration
              ? /*#__PURE__*/ jsx_runtime.jsx('div', {
                  className: 'decoration-left',
                  children: this.props.leftDecoration,
                })
              : null,
            this.props.rightDecoration
              ? /*#__PURE__*/ jsx_runtime.jsx('div', {
                  className: 'decoration-right',
                  children: this.props.rightDecoration,
                })
              : null,
            /*#__PURE__*/ jsx_runtime.jsx(framer_motion_cjs /* AnimatePresence */.M_, {
              children:
                this.props.error && !this.props.locked
                  ? /*#__PURE__*/ jsx_runtime.jsx(framer_motion_cjs /* motion.div */.ww.div, {
                      initial: {
                        opacity: 0,
                      },
                      animate: {
                        opacity: 1,
                      },
                      exit: {
                        opacity: 0,
                      },
                      children: /*#__PURE__*/ jsx_runtime.jsx(styled_error, {
                        className: this.props.rightDecoration ? 'error-right-decoration' : '',
                        children: this.props.error,
                      }),
                    })
                  : null,
            }),
            this.props.label
              ? /*#__PURE__*/ jsx_runtime.jsx(styled_label, {
                  label: this.props.label,
                  id: this.props.id,
                  active: active || !!this.props.value || !!this.props.placeholder,
                  withDecoration: decorationType,
                  bigDecoration: this.props.bigDecoration,
                  biggerDecoration: this.props.biggerDecoration,
                })
              : null,
          ],
        });
      }
    }
    /* harmony default export */ const input = (0, styled_components_cjs /* default */.ZP)(InputField).withConfig({
      displayName: 'input',
      componentId: 'ykvnzj-0',
    })(
      [
        'width:auto;min-height:60px;border-radius:4px;position:relative;transition:border-left-color ',
        ';border-left:3px solid;',
        ';.decoration-right{position:absolute;top:50%;right:18px;transform:translate(0,-50%);}.error-right-decoration{right:60px;}.decoration-left{position:absolute;top:50%;right:auto;left:',
        ';transform:translate(-50%,-50%);display:flex;align-items:center;}',
        ' ',
        '',
      ],
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      (props) =>
        props.error && !props.locked
          ? (0, styled_components_cjs /* css */.iv)(['border-left-color:', ';'], ({ theme }) => theme.colors.error)
          : (0, styled_components_cjs /* css */.iv)(
              ['border-left-color:', ';'],
              ({ theme }) => theme.colors.inputsBackground
            ),
      (props) => (props.bigDecoration ? '32px' : props.biggerDecoration ? '72px' : '22px'),
      (props) =>
        props.customBorderRadius &&
        (0, styled_components_cjs /* css */.iv)(['border-radius:', ';'], props.customBorderRadius),
      (props) =>
        props.locked
          ? (0, styled_components_cjs /* css */.iv)(
              ['cursor:not-allowed;input{opacity:0.6;}label{color:', ';}'],
              ({ theme }) => (0, polished_cjs /* rgba */.m4)(theme.colors.inputsBackground, 0.5)
            )
          : null
    );

    /***/
  },
};
