_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [15],
  {
    '2JSo': function (t, e, n) {
      'use strict';
      var o = n('q1tI'),
        i = n('vOnD'),
        r = n('WqaS'),
        a = o.createElement;
      e.a = Object(i.e)(function (t) {
        return a(
          r.a,
          {
            className: t.className,
            alignItems: 'center',
            onClick: function () {
              return t.onClick ? t.onClick() : null;
            },
          },
          t.decoration ? a('div', { className: 'decoration-item' }, t.decoration) : null,
          a(
            r.a,
            { flexDirection: 'column', className: 'dropdown-item-wrapper' },
            a(c, null, t.children),
            t.helpText ? a(l, null, t.helpText) : null
          )
        );
      }).withConfig({ displayName: 'dropdown-item', componentId: 'sc-1j2i4mc-0' })(
        ['padding:7px 0;cursor:pointer;width:100%;.dropdown-item-wrapper{width:', ';}', ''],
        function (t) {
          return t.decoration ? 'calc(100% - (32px + 12px))' : '100%';
        },
        function (t) {
          return t.decoration ? '\n    .decoration-item {\n      margin-right: 12px;\n    }\n  ' : null;
        }
      );
      var c = i.e.span.withConfig({ displayName: 'dropdown-item__DrodownItemText', componentId: 'sc-1j2i4mc-1' })(
          [
            'color:',
            ';font-weight:700;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:0.75;margin:0;transition:opacity ',
            ';&:hover{opacity:1;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          }
        ),
        l = i.e.span.withConfig({ displayName: 'dropdown-item__HelpText', componentId: 'sc-1j2i4mc-2' })(
          ['color:', ';margin:0;font-size:12px;font-weight:700;opacity:0.5;'],
          function (t) {
            return t.theme.colors.primary;
          }
        );
    },
    '2sFz': function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch/detail/[productId]',
        function () {
          return n('baZN');
        },
      ]);
    },
    RHGb: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return l;
      });
      var o = n('q1tI'),
        i = n.n(o),
        r = n('vOnD'),
        a = n('WqaS'),
        c = i.a.createElement;
      function l(t) {
        var e = t.className,
          n = t.product,
          o = t.inDetail,
          i = t.inCart,
          r = t.size,
          a = t.color,
          l = t.noPrice;
        return c(
          s,
          { className: e, inDetail: o, inCart: i },
          c(
            'div',
            null,
            c(u, { className: 'title' }, n.title),
            i && r ? c(p, null, 'Size: ', r, a && ', '.concat(a)) : null
          ),
          !l && c(d, { className: 'price' }, '$', n.price.toFixed(2).toLocaleString())
        );
      }
      var s = Object(r.e)(a.a).withConfig({
          displayName: 'product-info__InformationWrapper',
          componentId: 'sc-1vodx6d-0',
        })(
          ['flex-direction:column;', ' ', ''],
          function (t) {
            return t.inDetail
              ? Object(r.d)(
                  [
                    'flex-direction:row;justify-content:space-between;align-items:flex-end;@media (max-width:',
                    '){flex-direction:column;justify-content:flex-start;align-items:flex-start;}.title{max-width:320px;font-weight:800;font-size:40px;line-height:40px;white-space:normal;@media (max-width:',
                    '){font-size:32px;max-width:none;}}.price{font-size:24px;margin-top:0;@media (max-width:',
                    '){font-size:16px;}}',
                  ],
                  function (t) {
                    var e = t.theme;
                    return ''.concat(e.breakpoints.tablet, 'px');
                  },
                  function (t) {
                    var e = t.theme;
                    return ''.concat(e.breakpoints.tablet, 'px');
                  },
                  function (t) {
                    var e = t.theme;
                    return ''.concat(e.breakpoints.tablet, 'px');
                  }
                )
              : null;
          },
          function (t) {
            return t.inCart
              ? Object(r.d)([
                  'width:100%;flex-direction:row;justify-content:space-between;align-items:center;.title{font-size:16px;font-weight:700;line-height:24px;}',
                ])
              : null;
          }
        ),
        u = r.e.h4.withConfig({ displayName: 'product-info__Title', componentId: 'sc-1vodx6d-1' })(
          [
            'color:',
            ';font-size:16px;font-weight:700;line-height:24px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;@media (max-width:',
            '){white-space:pre-wrap;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        d = r.e.h6.withConfig({ displayName: 'product-info__Price', componentId: 'sc-1vodx6d-2' })(
          ['color:', ';font-size:16px;font-weight:400;line-height:24px;opacity:0.7;margin:0;'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        p = r.e.h6.withConfig({ displayName: 'product-info__Details', componentId: 'sc-1vodx6d-3' })(
          ['color:', ';font-size:14px;font-weight:400;line-height:24px;margin:0;'],
          function (t) {
            return t.theme.colors.primary;
          }
        );
    },
    SPwB: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var o = n('q1tI'),
        i = n.n(o),
        r = n('vOnD'),
        a = i.a.createElement;
      function c(t) {
        var e = t.fill,
          n = void 0 === e ? '#EDA064' : e,
          o = t.imageSrc,
          i = void 0 === o ? ''.concat('https://media.development.trac.co', '/merch/images/49-368.jpg') : o,
          r = t.maskSrc,
          c = void 0 === r ? '/sweater.png' : r,
          s = t.haveHover;
        return a(
          l,
          { className: 'white' === n ? 'no-mask' : '', fill: n, haveHover: void 0 !== s && s },
          a('img', { className: 'main-image', src: i, alt: 'filter-main-image' }),
          'white' !== n && a('img', { className: 'mask-image', src: c, alt: 'filter-mask-image' })
        );
      }
      var l = r.e.div.withConfig({ displayName: 'image-color-filter__FilterWrapper', componentId: 'sc-11t2le6-0' })(
        [
          'height:100%;position:relative;&.no-mask{.main-image{position:relative;top:auto;left:auto;}}.mask-image,.main-image{width:100%;height:100%;}.main-image{position:absolute;top:0;left:0;z-index:0;}.mask-image{background-color:',
          ';mix-blend-mode:multiply;margin-bottom:-4px;filter:brightness(0.94);',
          '}',
        ],
        function (t) {
          return t.fill;
        },
        function (t) {
          return t.haveHover && '.image-container:hover {\n    \n    }';
        }
      );
    },
    XGvB: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return S;
      });
      var o = n('ODXe'),
        i = n('q1tI'),
        r = n.n(i),
        a = n('vOnD'),
        c = n('GNXZ'),
        l = r.a.createElement;
      function s(t) {
        var e = t.className;
        return l(
          'svg',
          { width: '24', height: '24', viewBox: '0 0 24 24', className: e },
          l(u, {
            d: 'M14.3 16.2c-0.4-0.4-0.4-1 0-1.4 0.4-0.4 1-0.4 1.4 0l4 4c0.4 0.4 0.4 1 0 1.4 -0.4 0.4-1 0.4-1.4 0L14.3 16.2z',
          }),
          l(d, {
            d: 'M11 17.5c-2.5 0-4.8-1.3-6.1-3.5 -1.3-2.2-1.3-4.8 0-7S8.5 3.5 11 3.5c3.9 0 7 3.1 7 7S14.9 17.5 11 17.5zM11 15.5c2.8 0 5-2.2 5-5s-2.2-5-5-5c-2.8 0-5 2.2-5 5S8.2 15.5 11 15.5z',
          })
        );
      }
      var u = a.e.path.withConfig({ displayName: 'search__Handle', componentId: 'sc-1pnq8jm-0' })(
          ['fill:', ';opacity:0.3;'],
          function (t) {
            return t.theme.colors.icon;
          }
        ),
        d = a.e.path.withConfig({ displayName: 'search__Circle', componentId: 'sc-1pnq8jm-1' })(
          ['fill:', ';'],
          function (t) {
            return t.theme.colors.icon;
          }
        ),
        p = n('ufqH'),
        m = n('ZMKu'),
        f = r.a.createElement;
      var h = a.e.circle.withConfig({ displayName: 'circle-arrow__Circle', componentId: 'sc-1tp4xs4-0' })(
          ['fill:', ';'],
          function (t) {
            var e = t.theme;
            return Object(p.a)(e.colors.primary, 0.2);
          }
        ),
        g = a.e.path.withConfig({ displayName: 'circle-arrow__Path', componentId: 'sc-1tp4xs4-1' })(
          ['stroke:', ';'],
          function (t) {
            return t.theme.colors.icon;
          }
        ),
        v = i.createElement,
        w = a.e.span.withConfig({ displayName: 'dropdown-header__SelectedItem', componentId: 'tlc708-0' })(
          ['position:absolute;pointer-events:none;transition:top ', ',opacity ', ',left ', ';color:', ';'],
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            var e = t.theme;
            return Object(p.a)(e.colors.primary, 0.7);
          }
        ),
        b = a.e.span.withConfig({ displayName: 'dropdown-header__StyledError', componentId: 'tlc708-1' })(
          [
            'font-size:10px;font-weight:700;position:absolute;top:50%;right:58px;text-align:right;transform:translate(0,-50%);color:',
            ';',
          ],
          function (t) {
            return t.theme.colors.error;
          }
        ),
        x = Object(a.e)(function (t) {
          return v(
            'div',
            { className: t.className },
            t.decoration ? v('div', { className: 'decoration' }, t.decoration) : null,
            v(
              'div',
              { className: 'dropdown-text-wrapper' },
              v(C, { className: 'dropdown-text' }, t.label || t.title),
              v(w, { className: 'label' }, t.title)
            ),
            t.error ? v(b, null, t.error) : null,
            t.disabled ? null : v(y, null, v(_, { arrowUp: t.listOpen }))
          );
        }).withConfig({ displayName: 'dropdown-header', componentId: 'tlc708-2' })(
          [
            'display:flex;box-sizing:border-box;align-items:center;cursor:',
            ';height:60px;padding:',
            ';border-radius:',
            ';background-color:transparent;transition:box-shadow ',
            ',padding ',
            ';position:relative;background-color:',
            ';color:',
            ';.dropdown-text-wrapper{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;.dropdown-text{',
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
          function (t) {
            return t.disabled ? 'not-allowed' : 'pointer';
          },
          function (t) {
            return t.hasSelected ? '28px 50px 13px 15px' : '20px 50px 20px 15px';
          },
          function (t) {
            return t.customBorderRadius ? t.customBorderRadius : '4px';
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            return t.theme.colors.inputsBackground;
          },
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            return t.disabled ? 'opacity: .6;' : null;
          },
          function (t) {
            return t.decoration
              ? '\n    .decoration {\n      display: none;\n      position: absolute;\n    }\n  '
              : null;
          },
          function (t) {
            return t.decoration && !t.smallDecoration
              ? '\n    .decoration {\n      top: 50%;\n      left: 15px;\n      transform: translate(0, -50%);\n      max-height: 32px;\n    }\n  '
              : null;
          },
          function (t) {
            return t.decoration && t.smallDecoration
              ? '\n    .decoration {\n        bottom: 14px;\n        left: 15px;\n    }\n  '
              : null;
          },
          function (t) {
            return t.decoration && t.hasSelected ? '\n    .decoration {\n      display: block;\n    }\n  ' : null;
          },
          function (t) {
            return t.error
              ? Object(a.d)(['border-color:', ';;'], function (t) {
                  return t.theme.colors.error;
                })
              : null;
          },
          function (t) {
            return t.listOpen ? '\n    border-radius: 2px 2px 0 0;\n  ' : null;
          },
          function (t) {
            return t.listOpen && t.customBorderRadius ? '\n    border-radius: 0 2px 2px 0;\n  ' : null;
          },
          function (t) {
            return t.hasSelected ? '12px' : '16px';
          },
          function (t) {
            return t.hasSelected ? '12px' : '19px';
          },
          function (t) {
            return t.hasSelected ? '1' : '0';
          },
          function (t) {
            return t.decoration && !t.smallDecoration && t.hasSelected
              ? Object(a.d)(['padding-left:55px !important;background-color:', ';.label{left:55px;}'], function (t) {
                  return t.theme.colors.itemBackground;
                })
              : null;
          },
          function (t) {
            return t.decoration && t.smallDecoration && t.hasSelected
              ? '\n    padding-left: 35px !important;\n  '
              : null;
          },
          function (t) {
            return t.disabled ? 'user-select: none;' : null;
          }
        ),
        y = a.e.div.withConfig({ displayName: 'dropdown-header__IconWrapper', componentId: 'tlc708-3' })([
          'position:absolute;top:50%;right:18px;transform:translate(0,-50%);',
        ]),
        C = a.e.span.withConfig({ displayName: 'dropdown-header__DropdownText', componentId: 'tlc708-4' })(
          [
            'text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:14px;font-weight:700;line-height:16px;height:auto;color:',
            ';',
          ],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        _ = Object(a.e)(function (t) {
          var e = t.className,
            n = t.arrowUp,
            o = t.onClick;
          return f(
            'svg',
            {
              width: '18px',
              height: '18px',
              viewBox: '0 0 18 18',
              className: e,
              preserveAspectRatio: 'none',
              onClick: function (t) {
                return o ? o(t) : null;
              },
            },
            f(
              m.b.g,
              { variants: { down: { rotate: 0 }, up: { rotate: 180 } }, initial: 'down', animate: n ? 'up' : 'down' },
              f(h, { cx: '9', cy: '9', r: '9' }),
              f(g, {
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: '10',
                d: 'M6,7.5l3,3l3-3',
              })
            )
          );
        }).withConfig({ displayName: 'dropdown-header__StyledCircleArrowIcon', componentId: 'tlc708-5' })([
          'width:24px;height:24px;',
        ]),
        N = i.createElement,
        O = Object(a.e)(function (t) {
          return N(
            'div',
            {
              className: t.className,
              onMouseOver: function () {
                return t.onMouseOver ? t.onMouseOver() : null;
              },
            },
            N(
              m.b.div,
              {
                className: 'container',
                initial: 'hidden',
                animate: t.listOpen ? 'visible' : 'hidden',
                variants: {
                  visible: { y: 0, opacity: 1, transition: { ease: [0.17, 0.67, 0.83, 0.67], duration: 0.125 } },
                  hidden: { y: -100, opacity: 0 },
                },
              },
              t.children
            )
          );
        }).withConfig({ displayName: 'dropdown-list', componentId: 'lffnfb-0' })(
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
          function (t) {
            return t.listOpen ? 'height: 100%;' : 'height: 0;';
          },
          function (t) {
            return t.customContent && t.listOpen ? 'height: auto; pointer-events: initial;' : null;
          },
          function (t) {
            return t.customContent ? '0' : '4px';
          },
          function (t) {
            return t.theme.colors.inputsBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            return t.noMaxHeight ? null : 'max-height: 250px';
          },
          function (t) {
            return t.customContent ? '\n      margin-top: 0;\n    ' : null;
          },
          function (t) {
            return t.listOpen && !t.customContent
              ? '\n    pointer-events: initial;\n    top: 64px;\n\n    .container {\n      .dropdown-list-content {\n      overflow-y: auto;\n      overflow-x: hidden;\n\n        ::-webkit-scrollbar {\n          width: 15px;\n        }\n\n        ::-webkit-scrollbar-track {\n          background: transparent;\n        }\n\n        ::-webkit-scrollbar-thumb {\n          background-color: #d8d8d8;\n          border-radius: 8px;\n          border: 4px solid white;\n        }\n      }\n    }\n  '
              : null;
          },
          function (t) {
            return t.listOpen && '' === t.content
              ? '\n    &:hover {\n      span {\n        opacity: .5;\n      }\n    }\n  '
              : null;
          }
        ),
        k = n('2JSo'),
        I = i.createElement,
        j = function (t) {
          var e,
            n = (null === (e = t.options) || void 0 === e ? void 0 : e.length) || t.children,
            r = t.onOpen,
            a = t.getNextPage,
            l = t.children,
            u = t.onClose,
            d = i.useState(!1),
            p = Object(o.a)(d, 2),
            m = p[0],
            f = p[1],
            h = i.useState(),
            g = Object(o.a)(h, 2),
            v = g[0],
            w = g[1],
            b = i.useState(''),
            y = Object(o.a)(b, 2),
            C = y[0],
            _ = y[1],
            N = i.useState(0),
            j = Object(o.a)(N, 2),
            S = j[0],
            z = j[1],
            D = Object(i.useRef)(null);
          Object(i.useEffect)(
            function () {
              var t = function (t) {
                D.current && !D.current.contains(t.target) && f(!1);
              };
              return (
                document.addEventListener('mousedown', t),
                function () {
                  document.removeEventListener('mousedown', t);
                }
              );
            },
            [D]
          ),
            i.useEffect(
              function () {
                r && r(m), u && !m && u();
              },
              [r, u, m]
            ),
            i.useEffect(
              function () {
                if (a) {
                  var t = setTimeout(function () {
                    return a(S > 0 ? 1 : 0);
                  }, 200);
                  return function () {
                    return clearTimeout(t);
                  };
                }
              },
              [S, a]
            ),
            i.useEffect(
              function () {
                z(0);
              },
              [l]
            );
          var M = function (e) {
              return void 0 !== e ? (t.valueMapper ? t.valueMapper(e) : ''.concat(e)) : '';
            },
            q = function (e) {
              var n = M(e).replace(/\s/g, '-').toLowerCase();
              return t.keyMapper && e && (n = t.keyMapper(e)), 'dropdown-'.concat(n);
            };
          return I(
            'div',
            {
              className: ''.concat(t.className, ' ').concat(t.forceOpen || m ? 'opened' : ''),
              onClick: function () {
                return (function () {
                  if (!t.disabled) return f(n ? !m : !!t.header);
                })();
              },
              ref: D,
            },
            t.header
              ? t.header
              : I(x, {
                  decoration: t.decoration,
                  smallDecoration: t.smallDecoration,
                  hasSelected: void 0 !== t.value,
                  title: t.title,
                  label: (function () {
                    if (void 0 !== t.value) {
                      var e;
                      if (null === (e = t.options) || void 0 === e || !e.length) return M(t.value);
                      var n = t.options.find(function (e) {
                        return t.keyMapper ? t.keyMapper(e.value) === t.keyMapper(t.value) : e.value === t.value;
                      });
                      if (n) return n.label;
                    }
                    return '';
                  })(),
                  listOpen: m,
                  disabled: t.disabled,
                  bgColor: t.bgColor,
                  customBorderRadius: t.customBorderRadius,
                  noShadow: t.noShadow,
                }),
            n
              ? I(
                  O,
                  {
                    listOpen: t.forceOpen || m,
                    onMouseOver: function () {
                      return f(!0);
                    },
                    content: t.contentType,
                    height: (function () {
                      if (v) return v;
                    })(),
                    customContent: t.customContent,
                    noMaxHeight: t.noMaxHeight,
                  },
                  t.hasFilter
                    ? I(
                        'form',
                        {
                          className: 'filter-wrapper',
                          autoComplete: 'off',
                          onClick: function (t) {
                            return t.stopPropagation();
                          },
                          onSubmit: function (t) {
                            return t.stopPropagation(), t.preventDefault(), !1;
                          },
                        },
                        I(c.a, {
                          name: 'filter',
                          label: t.filterLabel || '',
                          autoComplete: 'off',
                          value: t.customFilterValue ? t.customFilterValue : C || ' ',
                          onChange: function (e) {
                            return t.onCustomFilter ? t.onCustomFilter(e.trim()) : _(e.trim());
                          },
                          customBorderRadius: '0 0 4px 4px',
                          rightDecoration: I(s, null),
                        })
                      )
                    : null,
                  t.options
                    ? I(
                        'div',
                        { className: 'dropdown-list-content' },
                        (function () {
                          var e;
                          return t.options
                            ? C
                              ? null === (e = t.options) || void 0 === e
                                ? void 0
                                : e.filter(function (t) {
                                    return t.label.toLowerCase().includes(C.trim().toLowerCase());
                                  })
                              : t.options
                            : [];
                        })().map(function (e) {
                          return I(
                            k.a,
                            {
                              key: q(e.value),
                              onClick: function () {
                                return t.onChange ? t.onChange(e.value) : null;
                              },
                              decoration: e.decoration,
                              helpText: e.helpText,
                            },
                            e.label
                          );
                        })
                      )
                    : t.customContent
                    ? l
                    : I(
                        'div',
                        {
                          className: 'dropdown-list-content',
                          ref: function (t) {
                            return w(null === t || void 0 === t ? void 0 : t.offsetHeight);
                          },
                          onScroll: function () {
                            return a ? z(S + 1) : null;
                          },
                        },
                        l
                      )
                )
              : null
          );
        },
        S = function () {
          return Object(a.e)(function (t) {
            return I(j, t);
          }).withConfig({ displayName: 'dropdown', componentId: 'd4cqq2-0' })(
            ['', ' &.opened{z-index:99;}.filter-wrapper{position:relative;border-bottom:2px solid ', ';}'],
            function (t) {
              return t.parentRelative ? null : 'position: relative;';
            },
            function (t) {
              return t.theme.colors.background;
            }
          );
        };
      S();
    },
    aagu: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var o = n('q1tI'),
        i = n.n(o),
        r = n('vOnD'),
        a = i.a.createElement;
      function c(t) {
        var e = t.className,
          n = t.image,
          o = t.alt,
          i = t.hasDarkBackground,
          r = t.isJsx,
          c = t.jsxImage,
          p = t.inCart;
        return a(
          l,
          { className: ''.concat(e, ' ').concat(p ? 'cart' : ''), hasDarkBackground: i },
          r ? a(s, { className: p ? 'cart' : '' }, a(u, null, c)) : a(d, { src: n, alt: o })
        );
      }
      var l = r.e.div.withConfig({ displayName: 'product-img__ImgContainer', componentId: 'sc-1wvkwid-0' })(
          [
            'display:flex;justify-content:center;align-items:center;border-radius:5px;padding:32px;background-color:',
            ';&.cart{padding:0;}',
            '',
          ],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            return t.hasDarkBackground
              ? Object(r.d)(['background-color:', ';'], function (t) {
                  return t.theme.colors.sidebarBackground;
                })
              : null;
          }
        ),
        s = r.e.div.withConfig({ displayName: 'product-img__FilteredImageWrap', componentId: 'sc-1wvkwid-1' })(
          [
            'width:',
            ';height:',
            ';object-fit:cover;border-radius:5px;overflow:hidden;position:relative;@media (max-width:',
            '){width:auto;height:auto;}&.cart{width:',
            ';height:',
            ';}',
          ],
          function (t) {
            return t.theme.sizes.productSize;
          },
          function (t) {
            return t.theme.sizes.productSize;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptop, 'px');
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.sizes.productSizeMobile);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.sizes.productSizeMobile);
          }
        ),
        u = r.e.div.withConfig({ displayName: 'product-img__ProductImg', componentId: 'sc-1wvkwid-2' })([
          'height:100%;',
        ]),
        d = r.e.img.withConfig({ displayName: 'product-img__ProductImgTag', componentId: 'sc-1wvkwid-3' })([
          'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:65%;width:100%;display:block;',
        ]);
    },
    baZN: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, '__N_SSP', function () {
          return xt;
        }),
        n.d(e, 'default', function () {
          return yt;
        });
      var o = n('q1tI'),
        i = n.n(o),
        r = n('jtTr'),
        a = n('6Hpx'),
        c = n('MWXp'),
        l = n('42Rd'),
        s = n('/kYb'),
        u = n('20a2'),
        d = n('vOnD'),
        p = n('pZhd'),
        m = n('voqa'),
        f = n('a3WO');
      var h = n('BsWD');
      function g(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Object(f.a)(t);
          })(t) ||
          (function (t) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
          })(t) ||
          Object(h.a)(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      var v = n('XGvB'),
        w = i.a.createElement,
        b = Object(v.a)(),
        x = d.e.span.withConfig({
          displayName: 'product-quantity-selector-dropdown__LimitedContainer',
          componentId: 'rr9qe-0',
        })(
          [
            'color:',
            ';opacity:',
            ';font-weight:',
            ';position:absolute;right:60px;top:23px;z-index:1;font-size:12px;line-height:15px;',
          ],
          function (t) {
            var e = t.theme,
              n = t.isRed;
            return void 0 !== n && n ? e.colors.accent : e.colors.primary;
          },
          function (t) {
            var e = t.isRed;
            return void 0 !== e && e ? 1 : 0.5;
          },
          function (t) {
            var e = t.isRed,
              n = void 0 !== e && e,
              o = t.soldOut;
            return n || (void 0 !== o && o) ? 700 : 400;
          }
        ),
        y = d.e.div.withConfig({
          displayName: 'product-quantity-selector-dropdown__Container',
          componentId: 'rr9qe-1',
        })(['position:relative;margin-top:5px;']),
        C = function (t) {
          var e = t.isLimited,
            n = t.quantity,
            o = t.onChange,
            i = t.active,
            r = e ? n : 1e3,
            a = g(Array(null !== r && void 0 !== r ? r : 0).keys()).map(function (t) {
              return { label: ''.concat(t + 1), value: t + 1 };
            });
          return w(
            y,
            null,
            e && n && n >= 10 ? w(x, null, 'Limited') : null,
            e && n && n < 10 ? w(x, { isRed: !0 }, 'Only ', n, ' remaining!') : null,
            0 === n ? w(x, { soldOut: !0 }, 'Sold Out') : null,
            w(b, {
              options: a,
              title: e ? 'Limited Quantity' : 'Select Quantity',
              value: i,
              customBorderRadius: '4px',
              onChange: function (t) {
                return o(t);
              },
            })
          );
        },
        _ = n('zoQI'),
        N = i.a.createElement;
      var O = function (t) {
          var e = t.fill;
          return N(
            'svg',
            { width: '7', height: '7', viewBox: '0 0 7 7', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
            N('circle', { cx: '3.5', cy: '3.5', r: '3.5', fill: e })
          );
        },
        k = n('RHGb'),
        I = n('aagu'),
        j = n('WqaS'),
        S = n('ZMKu'),
        z = i.a.createElement;
      var D = Object(d.e)(S.b.div).withConfig({
          displayName: 'product-size-guide__SizeGuideWrapper',
          componentId: 'sc-4m4hc0-0',
        })(['']),
        M = Object(d.e)(j.a).withConfig({ displayName: 'product-size-guide__Row', componentId: 'sc-4m4hc0-1' })(
          [
            'justify-content:flex-start;align-items:center;flex-direction:row;padding:20px 0;border-bottom:1px dotted ',
            ';&:first-child{padding:0 0 30px;border-bottom:none;& > span{font-weight:700;}}',
            '',
          ],
          function (t) {
            return t.theme.colors.primaryHover;
          },
          function (t) {
            return t.noLine ? Object(d.d)(['border-bottom:none;padding:20px 0 0;']) : null;
          }
        ),
        q = d.e.span.withConfig({ displayName: 'product-size-guide__Item', componentId: 'sc-4m4hc0-2' })(
          [
            'color:',
            ';font-size:16px;min-height:20px;text-align:center;width:',
            ';&:first-child{text-align:left;}@media (max-width:',
            '){font-size:14px;}',
          ],
          function (t) {
            return t.theme.colors.background;
          },
          function (t) {
            var e = t.itemsLength;
            return e > 1 ? Object(d.d)(['calc(100% / (', ' + 1));'], e) : '100%;';
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        E = d.e.p.withConfig({ displayName: 'product-size-guide__HelpText', componentId: 'sc-4m4hc0-3' })(
          ['font-size:12px;font-weight:400;line-height:14px;text-align:left;color:', ';'],
          function (t) {
            return t.theme.colors.background;
          }
        ),
        T = n('hRDA'),
        L = n('SXEb'),
        B = n('wx14'),
        P = i.a.createElement;
      function W(t) {
        var e = t.props,
          n = t.onClick,
          o = Object(d.f)();
        return P(
          R,
          Object(B.a)({ width: '16', height: '16', viewBox: '0 0 16 16' }, e, { onClick: n }),
          P('circle', { cx: '8', cy: '8', r: '8', fill: o.colors.sidebarBackground }),
          P(
            'g',
            null,
            P('path', {
              fill: o.colors.primary,
              d: 'M7.83,4.57c.39,0,.76,.08,1.09,.24,.35,.16,.62,.38,.83,.68,.21,.3,.32,.66,.32,1.07,0,.25-.06,.48-.19,.66-.12,.19-.27,.36-.45,.51-.18,.15-.35,.29-.53,.42-.18,.12-.32,.25-.44,.37-.12,.12-.17,.25-.17,.39v.21h-1.23v-.39c0-.14,.06-.28,.17-.41,.12-.13,.26-.26,.43-.38l.51-.39c.18-.14,.32-.27,.43-.41,.12-.14,.18-.29,.18-.45,0-.27-.11-.49-.32-.65-.21-.17-.49-.25-.83-.25s-.65,.07-.94,.2c-.28,.12-.54,.32-.77,.6v-1.29c.2-.21,.46-.38,.78-.52,.33-.14,.7-.21,1.12-.21Z',
            }),
            P('path', {
              fill: o.colors.primary,
              d: 'M7.74,9.87c.21,0,.4,.08,.55,.23,.16,.15,.23,.33,.23,.55s-.08,.4-.23,.56-.33,.22-.55,.22-.4-.07-.56-.22c-.15-.16-.22-.34-.22-.56s.07-.4,.22-.55c.16-.16,.34-.23,.56-.23Z',
            })
          )
        );
      }
      var R = d.e.svg.withConfig({ displayName: 'question-mark__QuestionMark', componentId: 'sc-130dwmn-0' })([
          'cursor:pointer;',
        ]),
        H = o.createElement;
      function X(t) {
        var e = t.className,
          n = t.text,
          i = t.children,
          r = t.fixedOnMobile,
          a = t.hasClose,
          c = t.hasHelpIcon,
          l = t.titleText,
          s = Object(o.useState)(!1),
          u = s[0],
          p = s[1],
          f = Object(m.a)(),
          h = Object(d.f)();
        return H(
          A,
          { className: ''.concat(e, ' ').concat(r ? 'fixed' : null) },
          H(
            F,
            {
              onClick: function () {
                return p(!u);
              },
            },
            H(G, null, n),
            c ? H(W, null) : null
          ),
          H(
            S.a,
            null,
            u
              ? H(
                  L.a,
                  null,
                  H(
                    J,
                    { className: 'tooltip-content' },
                    f && a
                      ? H(
                          Q,
                          { alignItems: 'center', justifyContent: 'space-between' },
                          l ? H(Z, null, l) : null,
                          H(T.a, {
                            onClick: function () {
                              return p(!u);
                            },
                            fill: h.colors.background,
                          })
                        )
                      : null,
                    i
                  )
                )
              : null
          )
        );
      }
      var A = d.e.div.withConfig({ displayName: 'tooltip__TooltipWrapper', componentId: 'sc-1ha8c9q-0' })([
          '&.fixed{.tooltip-content{z-index:999;position:fixed;right:0;bottom:0;left:0;transform:none;}}',
        ]),
        F = d.e.div.withConfig({ displayName: 'tooltip__TextWrapper', componentId: 'sc-1ha8c9q-1' })([
          'display:flex;justify-content:flex-start;align-items:center;gap:5px;',
        ]),
        G = d.e.span.withConfig({ displayName: 'tooltip__TooltipText', componentId: 'sc-1ha8c9q-2' })(
          [
            'font-size:14px;font-weight:400;cursor:pointer;color:',
            ';opacity:1;transition:opacity ',
            ';@media (max-width:',
            '){font-size:12px;}&:hover{opacity:0.7;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        J = d.e.div.withConfig({ displayName: 'tooltip__TooltipContent', componentId: 'sc-1ha8c9q-3' })(
          [
            'position:absolute;bottom:calc(100% + 10px);left:50%;transform:translate(-50%,0);max-width:535px;@media (max-width:',
            "){max-width:none;width:100%;overflow-x:scroll;}&:before{content:'';position:absolute;bottom:0;width:32px;height:32px;left:35%;transform:translate(-50%,0);background-color:",
            ';transform:rotate(45deg);z-index:-1;}@media (max-width:',
            '){&:before{content:none;}}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          },
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        Z = d.e.h4.withConfig({ displayName: 'tooltip__Title', componentId: 'sc-1ha8c9q-4' })(
          ['font-size:14px;font-weight:700;line-height:17px;color:', ';'],
          function (t) {
            return t.theme.colors.background;
          }
        ),
        Q = Object(d.e)(j.a).withConfig({ displayName: 'tooltip__Header', componentId: 'sc-1ha8c9q-5' })([
          'margin:4px 0 20px;',
        ]),
        V = n('fXhW'),
        K = i.a.createElement,
        U = Object(v.a)(),
        Y = ['Unisex Twill Hat', 'Custom Pin Buttons', 'Tough Cases'];
      function $(t) {
        var e = t.className,
          n = t.active,
          o = t.sizes,
          i = t.onChange,
          r = t.productName,
          a = void 0 === r ? '' : r,
          c = o.map(function (t) {
            return { label: t.name, value: t.id };
          }),
          l = Object(m.a)();
        return K(
          et,
          { className: ''.concat(e, ' ').concat(l ? '' : 'desktop') },
          l && !Y.includes(a)
            ? K(
                rt,
                { fixedOnMobile: !0, hasClose: !0, titleText: 'Size Guide', text: 'Size Guide', hasHelpIcon: !0 },
                K(it, { sizeItems: V, helpText: '*All measurements are in Inches. All pieces fit true to size.' })
              )
            : null,
          K(
            nt,
            null,
            K(
              ot,
              { justifyContent: 'flex-end', alignItems: 'center' },
              l || Y.includes(a)
                ? null
                : K(
                    at,
                    { text: 'Size Guide', hasHelpIcon: !0 },
                    K(it, { sizeItems: V, helpText: '*All measurements are in Inches. All pieces fit true to size.' })
                  ),
              K(tt, {
                options: c,
                title: 'Select size',
                value: n,
                onChange: function (t) {
                  return i(t);
                },
                customBorderRadius: '4px',
              })
            )
          )
        );
      }
      var tt = Object(d.e)(U).withConfig({
          displayName: 'product-size-selector__StyledDropdownCtrl',
          componentId: 'sc-1fu7rya-0',
        })(['width:100%;']),
        et = d.e.div.withConfig({ displayName: 'product-size-selector__SizesWrappper', componentId: 'sc-1fu7rya-1' })([
          'margin:12px 0px 0;&.desktop{position:relative;}',
        ]),
        nt = Object(d.e)(j.a).withConfig({
          displayName: 'product-size-selector__SizeSelectorWrapper',
          componentId: 'sc-1fu7rya-2',
        })(['align-items:center !important;justify-content:space-between !important;margin:24px 0 0;']),
        ot = Object(d.e)(j.a).withConfig({
          displayName: 'product-size-selector__FlexWrapper',
          componentId: 'sc-1fu7rya-3',
        })(['width:-webkit-fill-available;display:flex;flex-direction:column;']),
        it = Object(d.e)(function (t) {
          var e = t.className,
            n = t.sizeItems,
            o = t.helpText;
          return z(
            D,
            { className: e },
            z(
              M,
              null,
              z(q, { itemsLength: 3 }),
              n[0].sizeOptions.map(function (t, e) {
                return z(q, { key: ''.concat(t.label, '-').concat(e), itemsLength: n.length }, t.label);
              })
            ),
            n.map(function (t, e) {
              return z(
                M,
                { key: ''.concat(t.label, '-').concat(e) },
                z(q, { itemsLength: n.length }, t.label),
                t.sizeOptions.map(function (t, e) {
                  return z(q, { key: ''.concat(t.label, '-').concat(e), itemsLength: n.length }, t.value);
                })
              );
            }),
            o ? z(M, { noLine: !0 }, z(E, null, o)) : null
          );
        }).withConfig({ displayName: 'product-size-selector__StyledSizeGuide', componentId: 'sc-1fu7rya-4' })([
          'width:535px;max-width:100%;',
        ]),
        rt = Object(d.e)(X).withConfig({
          displayName: 'product-size-selector__StyledTooltip',
          componentId: 'sc-1fu7rya-5',
        })(['.tooltip-content{padding:24px;border-radius:2px;background-color:', ';}'], function (t) {
          return t.theme.colors.primary;
        }),
        at = Object(d.e)(X).withConfig({
          displayName: 'product-size-selector__StyledTooltipExt',
          componentId: 'sc-1fu7rya-6',
        })(
          [
            'display:flex;justify-content:end;width:100%;margin-bottom:10px;.tooltip-content{padding:24px;border-radius:2px;background-color:',
            ';}',
          ],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        ct = n('SPwB'),
        lt = i.a.createElement;
      function st(t) {
        var e = t.className,
          n = t.cartKey,
          i = t.product,
          r = t.onClick,
          a = Object(u.useRouter)(),
          c = Object(m.a)();
        Object(o.useEffect)(function () {
          window.analytics && window.analytics.track('Merch Product Viewed', { product_id: i.id });
        });
        var l = Object(o.useState)(),
          s = l[0],
          d = l[1],
          f = i.colors.find(function (t) {
            return 'White' == t.name || 'white' == t.name;
          }),
          h = Object(o.useState)(f || i.colors[0]),
          g = h[0],
          v = h[1],
          w = Object(o.useState)(),
          b = w[0],
          x = w[1],
          y = Object(p.a)(n).updateCart,
          _ = !(!s || !b || (i.colors.length && !g.id)),
          N = function (t) {
            return 'https://media.development.trac.co/merch-preview/'.concat(t, '-mask.png');
          };
        return lt(
          ut,
          { className: e, onClick: r },
          lt(
            gt,
            null,
            lt(
              'div',
              null,
              lt(I.a, {
                className: 'image-container',
                image: i.image,
                alt: i.title,
                hasDarkBackground: !0,
                isJsx: !0,
                jsxImage: lt(ct.a, {
                  fill: (null === g || void 0 === g ? void 0 : g.color) || 'white',
                  imageSrc: (f || i).image || '',
                  maskSrc: N(i.blueprintId || 0),
                }),
              })
            ),
            i.colors.length
              ? lt(
                  vt,
                  null,
                  i.colors.map(function (t, e) {
                    return lt(
                      wt,
                      {
                        key: e,
                        onClick: function () {
                          v(t);
                        },
                      },
                      t.id == g.id ? lt(O, { fill: 'white' }) : lt(O, { fill: 'grey' })
                    );
                  })
                )
              : null
          ),
          lt(k.a, { className: 'product-info', product: i, inDetail: !0 }),
          lt(
            ht,
            { isMobile: c },
            lt(
              'div',
              null,
              lt(ft, null, 'Available Colors'),
              lt(
                pt,
                { isMobile: c },
                i.colors.map(function (t, e) {
                  return lt(
                    mt,
                    {
                      key: e,
                      onClick: function () {
                        return (function (t) {
                          var e = i.colors.find(function (e) {
                            return e.id == t;
                          });
                          v(e || g);
                        })(t.id);
                      },
                      isSelected: t.id == g.id,
                    },
                    lt(ct.a, {
                      fill: t.color || 'white',
                      imageSrc: (null === f || void 0 === f ? void 0 : f.image) || '',
                      maskSrc: N(i.blueprintId || 0),
                    })
                  );
                })
              )
            ),
            lt(
              'div',
              null,
              lt($, { sizes: i.sizes, active: s, onChange: d, productName: i.title }),
              lt(C, { isLimited: !i.unlimitedQty, quantity: i.qty, onChange: x, active: b })
            )
          ),
          lt(
            dt,
            {
              onClick: function () {
                var t = i.sizes.find(function (t) {
                  return t.id === s;
                });
                if (_ && t) {
                  var e;
                  if (
                    (y('add', { product: i, size: t, color: g, quantity: null !== b && void 0 !== b ? b : 1 }),
                    window.analytics)
                  )
                    window.analytics.track('Merch Added To Cart', {
                      product_id: i.id,
                      variant_id:
                        null ===
                          (e = i.variants.find(function (e) {
                            return e.sizeId == t.id;
                          })) || void 0 === e
                          ? void 0
                          : e.id,
                      size_selected: t.name,
                      quantity: 1,
                    });
                  a.push('../cart');
                }
              },
              disabled: !_,
            },
            'Add to Cart'
          )
        );
      }
      var ut = d.e.div.withConfig({ displayName: 'product-item-detail__ProductContainer', componentId: 'sc-98sn0-0' })([
          'width:100%;.product-info{margin:24px 0 48px;}',
        ]),
        dt = Object(d.e)(_.a).withConfig({ displayName: 'product-item-detail__CartButton', componentId: 'sc-98sn0-1' })(
          ['width:100%;height:70px;']
        ),
        pt = d.e.div.withConfig({ displayName: 'product-item-detail__VariantWrap', componentId: 'sc-98sn0-2' })(
          ['display:grid;width:fit-content;grid-gap:5px;grid-template-columns:repeat( ', ',1fr );'],
          function (t) {
            return t.isMobile ? '5' : '4';
          }
        ),
        mt = d.e.div.withConfig({ displayName: 'product-item-detail__VariantItemWrap', componentId: 'sc-98sn0-3' })(
          ['width:60px;height:60px;:hover{cursor:pointer;}border:', ';'],
          function (t) {
            return t.isSelected ? '2px solid #A2D743' : '';
          }
        ),
        ft = d.e.h4.withConfig({ displayName: 'product-item-detail__Title', componentId: 'sc-98sn0-4' })(
          ['font-family:Inter;font-style:normal;font-weight:normal;font-size:12px;opacity:0.5;color:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        ht = d.e.div.withConfig({ displayName: 'product-item-detail__DetailsWrap', componentId: 'sc-98sn0-5' })(
          ['display:grid;grid-template-columns:repeat( ', ',1fr );padding-bottom:32px;'],
          function (t) {
            return t.isMobile ? '1' : '2';
          }
        ),
        gt = d.e.div.withConfig({ displayName: 'product-item-detail__ImageWrap', componentId: 'sc-98sn0-6' })([
          'position:relative;',
        ]),
        vt = d.e.div.withConfig({ displayName: 'product-item-detail__DotSelect', componentId: 'sc-98sn0-7' })([
          'display:flex;justify-content:center;position:absolute;bottom:10px;left:45%;:hover{cursor:pointer;}',
        ]),
        wt = d.e.div.withConfig({ displayName: 'product-item-detail__DotSelectItem', componentId: 'sc-98sn0-8' })([
          'padding:2px;',
        ]),
        bt = i.a.createElement,
        xt = !0;
      function yt(t) {
        var e = Object(o.useState)(t.siteData)[0],
          n = Object(r.a)(t.siteData).pageData;
        return t.product
          ? bt(
              i.a.Fragment,
              null,
              bt(c.a, { pageData: n }),
              bt(
                l.a,
                { theme: e ? e.theme : void 0 },
                bt(
                  a.a,
                  { pageData: n, hideNavbar: !0, hasBackground: !0, action: bt(s.a, null) },
                  bt(st, { product: t.product, cartKey: e.ownerId })
                )
              )
            )
          : null;
      }
    },
    fXhW: function (t) {
      t.exports = JSON.parse(
        '[{"label":"Width","sizeOptions":[{"label":"S","value":"18"},{"label":"M","value":"20"},{"label":"L","value":"21.97"},{"label":"XL","value":"23.98"},{"label":"2XL","value":"25.99"},{"label":"3XL","value":"28"}]},{"label":"Length","sizeOptions":[{"label":"S","value":"28"},{"label":"M","value":"29.26"},{"label":"L","value":"30.24"},{"label":"XL","value":"31.26"},{"label":"2XL","value":"32.49"},{"label":"3XL","value":"33.51"}]},{"label":"Sleeve length","sizeOptions":[{"label":"S","value":"8.23"},{"label":"M","value":"8.51"},{"label":"L","value":"8.75"},{"label":"XL","value":"9.02"},{"label":"2XL","value":"9.26"},{"label":"3XL","value":"9.49"}]}]'
      );
    },
    pZhd: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var o = n('rePB'),
        i = n('q1tI');
      function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? r(Object(n), !0).forEach(function (e) {
                Object(o.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var c = function (t, e) {
          'undefined' !== typeof localStorage && localStorage.setItem(t, JSON.stringify(e));
        },
        l = function (t) {
          return function (e) {
            var n, o;
            return (
              e.product.id === t.product.id &&
              e.size.id === t.size.id &&
              (null === (n = e.color) || void 0 === n ? void 0 : n.id) ===
                (null === (o = t.color) || void 0 === o ? void 0 : o.id)
            );
          };
        },
        s = function (t) {
          var e = 'TRAC_CART.'.concat(t),
            n = Object(i.useState)(
              (function (t) {
                if ('undefined' !== typeof localStorage) {
                  var e = localStorage.getItem(t);
                  if (e) return JSON.parse(e);
                }
                return [];
              })(e)
            ),
            o = n[0],
            r = n[1],
            s = function (t) {
              return c(e, t), r(t), t;
            },
            u = o.reduce(function (t, e) {
              return t + e.product.price * e.quantity;
            }, 0);
          return {
            cart: o,
            total: u,
            updateCart: function (t, e) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                i = o.find(l(e));
              i && ('add' === t && (e.quantity += n), 'remove' === t && (e.quantity -= n));
              var r = o
                .concat(i || 'add' !== t ? [] : [e])
                .map(function (t) {
                  return l(e)(t) ? a({}, e) : a({}, t);
                })
                .filter(function (t) {
                  return t.quantity > 0;
                });
              return s(r);
            },
            saveCart: s,
            emptyCart: function () {
              c(e, []), r([]);
            },
          };
        };
    },
  },
  [['2sFz', 0, 2, 3, 1, 4, 5]],
]);
