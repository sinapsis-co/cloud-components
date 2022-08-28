(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [500],
  {
    5322: function (t, e, i) {
      'use strict';
      i.d(e, {
        Z: function () {
          return u;
        },
      });
      i(7294);
      var n = i(186),
        o = i(9499),
        r = i(4730),
        a = i(5893),
        c = ['className', 'onClick'];
      function l(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(i), !0).forEach(function (e) {
                (0, o.Z)(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : l(Object(i)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
              });
        }
        return t;
      }
      var d = function (t) {
          var e = t.className,
            i = t.onClick,
            o = (0, r.Z)(t, c),
            l = (0, n.Fg)();
          return (0, a.jsxs)(
            'svg',
            s(
              s(
                {
                  viewBox: '0 0 13 14',
                  width: 13,
                  height: 14,
                  className: e,
                  onClick: i,
                  'aria-hidden': 'true',
                  role: 'img',
                  style: { cursor: i ? 'pointer' : 'auto' },
                },
                o
              ),
              {},
              {
                children: [
                  (0, a.jsx)('path', {
                    fill: l.colors.highlightDark,
                    d: 'M5.53,12.45c-.5,0-.99-.21-1.33-.6l-.17-.2c-.38-.44-.43-1.07-.12-1.56,.19-.31,.25-.66,.17-1.01-.09-.35-.3-.64-.62-.83L.95,6.74C.41,6.42,.05,5.85,0,5.24c-.05-.62,.22-1.23,.7-1.63L4.56,.46C5.04,.06,5.68-.09,6.29,.05c.62,.14,1.12,.55,1.37,1.11l1.08,2.41c.3,.66,1.01,1.04,1.74,.93,.57-.09,1.14,.12,1.5,.55l.1,.11c.68,.79,.57,1.96-.23,2.62l-5.21,4.26c-.32,.27-.72,.39-1.11,.39ZM1.99,5.09l2.51,1.5c.77,.46,1.3,1.18,1.51,2.03,.11,.46,.12,.93,.03,1.38l4.33-3.55c-1.47,.07-2.86-.77-3.46-2.11l-1.08-2.41L1.99,5.09Zm8.47,1.21h0Z',
                  }),
                  (0, a.jsx)('path', {
                    fill: l.colors.highlightDark,
                    d: 'M12.19,14c-.23,0-.46-.1-.62-.28l-1.28-1.49c-.29-.33-.24-.83,.1-1.12,.34-.28,.85-.24,1.14,.1l1.28,1.49c.29,.33,.24,.83-.1,1.12-.15,.12-.34,.18-.52,.18Z',
                  }),
                ],
              }
            )
          );
        },
        u = function (t) {
          var e = t.className;
          return (0, a.jsxs)(p, {
            className: e || '',
            children: [(0, a.jsx)(d, {}), (0, a.jsx)('h6', { children: 'Featured' })],
          });
        },
        p = n.ZP.div.withConfig({ displayName: 'featured-badge__StyledBadge', componentId: 'sc-69krp2-0' })(
          [
            'background-color:',
            ';border-radius:90px;max-width:120px;padding:8px 16px;display:flex;justify-content:flex-start;align-items:center;gap:10px;h6{color:',
            ';font-size:14px;font-weight:700;line-height:24px;margin:0;}@media (max-width:',
            '){padding:8px;}',
          ],
          function (t) {
            return t.theme.colors.highlightLight;
          },
          function (t) {
            return t.theme.colors.highlightDark;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        );
    },
    8465: function (t, e, i) {
      'use strict';
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      i(7294);
      var n = i(186),
        o = i(5893);
      function r(t) {
        var e = t.fill,
          i = void 0 === e ? '#EDA064' : e,
          n = t.imageSrc,
          r = void 0 === n ? ''.concat('https://media.development.trac.co', '/merch/images/49-368.jpg') : n,
          c = t.maskSrc,
          l = void 0 === c ? '/sweater.png' : c,
          s = t.haveHover,
          d = void 0 !== s && s;
        return (0, o.jsxs)(a, {
          className: 'white' === i ? 'no-mask' : '',
          fill: i,
          haveHover: d,
          children: [
            (0, o.jsx)('img', { className: 'main-image', src: r, alt: 'filter-main-image' }),
            'white' !== i && (0, o.jsx)('img', { className: 'mask-image', src: l, alt: 'filter-mask-image' }),
          ],
        });
      }
      var a = n.ZP.div.withConfig({ displayName: 'image-color-filter__FilterWrapper', componentId: 'sc-11t2le6-0' })(
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
    9806: function (t, e, i) {
      'use strict';
      i.d(e, {
        Z: function () {
          return c;
        },
      });
      var n = i(8052),
        o = i(6805),
        r = i(186),
        a = i(5893);
      function c(t) {
        var e = t.className,
          i = t.image,
          r = t.alt,
          c = t.hasDarkBackground,
          p = t.isJsx,
          h = t.jsxImage,
          m = t.inCart,
          f = t.inDetail,
          g = t.highlight,
          x = t.hasAnimation,
          v = t.variants;
        return (0, a.jsx)(l, {
          className: ''
            .concat(e, ' ')
            .concat(m ? 'cart' : '', ' ')
            .concat(f ? 'detail' : ''),
          hasDarkBackground: c,
          isHighlighted: g,
          children: (0, a.jsx)(o.ww.div, {
            variants: v,
            transition: n.BH,
            children: p
              ? (0, a.jsx)(s, {
                  variants: x ? n.LS : void 0,
                  initial: 'initial',
                  animate: 'animate',
                  exit: 'exit',
                  transition: n.kr,
                  className: ''
                    .concat(m ? 'cart' : '', ' ')
                    .concat(f ? 'detail' : '', ' ')
                    .concat(m || f || !g ? '' : 'highlight'),
                  children: (0, a.jsx)(d, { children: h }),
                })
              : (0, a.jsx)(u, {
                  src: i,
                  alt: r,
                  variants: x ? n.LS : void 0,
                  initial: 'initial',
                  animate: 'animate',
                  exit: 'exit',
                  transition: n.kr,
                }),
          }),
        });
      }
      var l = r.ZP.div.withConfig({ displayName: 'product-img__ImgContainer', componentId: 'sc-1wvkwid-0' })(
          [
            'display:flex;justify-content:center;align-items:center;border-radius:5px;padding:32px;background-color:',
            ';transition:background-color ',
            ';&.cart{padding:0;}@media (max-width:',
            '){padding:0;width:fit-content;justify-content:flex-start;&.detail{padding:32px;width:auto;height:auto;justify-content:center;}}',
            ' ',
            '',
          ],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          },
          function (t) {
            return t.hasDarkBackground
              ? (0, r.iv)(['background-color:', ';'], function (t) {
                  return t.theme.colors.sidebarBackground;
                })
              : null;
          },
          function (t) {
            return t.isHighlighted
              ? (0, r.iv)(['background-color:', ';padding:0;'], function (t) {
                  return t.theme.colors.sidebarBackground;
                })
              : null;
          }
        ),
        s = (0, r.ZP)(o.ww.div).withConfig({
          displayName: 'product-img__FilteredImageWrap',
          componentId: 'sc-1wvkwid-1',
        })(
          [
            'width:',
            ';height:',
            ';object-fit:cover;border-radius:5px;overflow:hidden;position:relative;&.detail{width:',
            ';height:',
            ';}&.cart{width:',
            ';height:',
            ';}&.highlight{width:',
            ';height:',
            ';@media (max-width:',
            '){width:',
            ';height:',
            ';}}@media (max-width:',
            '){width:',
            ';height:',
            ';&.detail{width:auto;height:auto;}}',
          ],
          function (t) {
            return t.theme.sizes.productSize;
          },
          function (t) {
            return t.theme.sizes.productSize;
          },
          function (t) {
            return t.theme.sizes.productSizeDetail;
          },
          function (t) {
            return t.theme.sizes.productSizeDetail;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.sizes.productSizeMobile);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.sizes.productSizeMobile);
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlight;
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlight;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlightMobile;
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlightMobile;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptop, 'px');
          },
          function (t) {
            return t.theme.sizes.coverSizeMobile;
          },
          function (t) {
            return t.theme.sizes.coverSizeMobile;
          }
        ),
        d = r.ZP.div.withConfig({ displayName: 'product-img__ProductImg', componentId: 'sc-1wvkwid-2' })([
          'height:100%;',
        ]),
        u = (0, r.ZP)(o.ww.img).withConfig({ displayName: 'product-img__ProductImgTag', componentId: 'sc-1wvkwid-3' })([
          'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:65%;width:100%;display:block;',
        ]);
    },
    5981: function (t, e, i) {
      'use strict';
      i.d(e, {
        Z: function () {
          return c;
        },
      });
      var n = i(186),
        o = i(9568),
        r = i(5322),
        a = i(5893);
      function c(t) {
        var e = t.className,
          i = t.product,
          n = t.inDetail,
          o = t.inCart,
          c = t.size,
          p = t.color,
          h = t.noPrice,
          m = t.highlight,
          f = function () {
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)('div', {
                  children: [
                    (0, a.jsx)(s, { className: 'title', children: i.title }),
                    o && c ? (0, a.jsxs)(u, { children: ['Size: ', c, p && ', '.concat(p)] }) : null,
                  ],
                }),
                !h && (0, a.jsxs)(d, { className: 'price', children: ['$', i.price.toFixed(2).toLocaleString()] }),
              ],
            });
          };
        return (0, a.jsx)(l, {
          className: e,
          inDetail: n,
          inCart: o,
          highlight: m,
          children: m
            ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)('div', { children: (0, a.jsx)(f, {}) }), (0, a.jsx)(r.Z, { className: 'badge' })],
              })
            : (0, a.jsx)(f, {}),
        });
      }
      var l = (0, n.ZP)(o.Z).withConfig({
          displayName: 'product-info__InformationWrapper',
          componentId: 'sc-1vodx6d-0',
        })(
          ['flex-direction:column;align-items:flex-start;', ' ', ' ', ''],
          function (t) {
            return t.inDetail
              ? (0, n.iv)(
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
              ? (0, n.iv)([
                  'width:100%;flex-direction:row;justify-content:space-between;align-items:center;.title{font-size:16px;font-weight:700;line-height:24px;}',
                ])
              : null;
          },
          function (t) {
            return t.highlight
              ? (0, n.iv)(
                  [
                    'height:100%;justify-content:space-between;@media (max-width:',
                    '){gap:24px;text-align:center;align-items:center;}',
                  ],
                  function (t) {
                    var e = t.theme;
                    return ''.concat(e.breakpoints.laptopS, 'px');
                  }
                )
              : null;
          }
        ),
        s = n.ZP.h4.withConfig({ displayName: 'product-info__Title', componentId: 'sc-1vodx6d-1' })(
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
        d = n.ZP.h6.withConfig({ displayName: 'product-info__Price', componentId: 'sc-1vodx6d-2' })(
          ['color:', ';font-size:16px;font-weight:400;line-height:24px;opacity:0.7;margin:0;'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        u = n.ZP.h6.withConfig({ displayName: 'product-info__Details', componentId: 'sc-1vodx6d-3' })(
          ['color:', ';font-size:14px;font-weight:400;line-height:24px;margin:0;'],
          function (t) {
            return t.theme.colors.primary;
          }
        );
    },
    2407: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, {
          __N_SSP: function () {
            return gt;
          },
          default: function () {
            return xt;
          },
        });
      var n = i(7294),
        o = i(4961),
        r = i(3886),
        a = i(2310),
        c = i(6900),
        l = i(8134),
        s = i(1774),
        d = i(1163),
        u = i(186),
        p = i(2447),
        h = i(2587);
      var m = i(2937);
      function f(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return (0, h.Z)(t);
          })(t) ||
          (function (t) {
            if (('undefined' !== typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator'])
              return Array.from(t);
          })(t) ||
          (0, m.Z)(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      var g = i(745),
        x = i(5893),
        v = (0, g.u7)(),
        w = u.ZP.span.withConfig({
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
              i = t.isRed;
            return void 0 !== i && i ? e.colors.accent : e.colors.primary;
          },
          function (t) {
            var e = t.isRed;
            return void 0 !== e && e ? 1 : 0.5;
          },
          function (t) {
            var e = t.isRed,
              i = void 0 !== e && e,
              n = t.soldOut;
            return i || (void 0 !== n && n) ? 700 : 400;
          }
        ),
        b = u.ZP.div.withConfig({
          displayName: 'product-quantity-selector-dropdown__Container',
          componentId: 'rr9qe-1',
        })(['position:relative;']),
        y = function (t) {
          var e = t.isLimited,
            i = t.quantity,
            n = t.onChange,
            o = t.active,
            r = e ? i : 1e3,
            a = f(Array(null !== r && void 0 !== r ? r : 0).keys()).map(function (t) {
              return { label: ''.concat(t + 1), value: t + 1 };
            });
          return (0, x.jsxs)(b, {
            children: [
              e && i && i >= 10 ? (0, x.jsx)(w, { children: 'Limited' }) : null,
              e && i && i < 10 ? (0, x.jsxs)(w, { isRed: !0, children: ['Only ', i, ' remaining!'] }) : null,
              0 === i ? (0, x.jsx)(w, { soldOut: !0, children: 'Sold Out' }) : null,
              (0, x.jsx)(v, {
                options: a,
                title: e ? 'Limited Quantity' : 'Select Quantity',
                value: o,
                customBorderRadius: '4px',
                onChange: function (t) {
                  return n(t);
                },
              }),
            ],
          });
        },
        j = i(9231);
      var _ = function (t) {
          var e = t.fill;
          return (0, x.jsx)('svg', {
            width: '7',
            height: '7',
            viewBox: '0 0 7 7',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, x.jsx)('circle', { cx: '3.5', cy: '3.5', r: '3.5', fill: e }),
          });
        },
        C = i(5981),
        k = i(9806),
        z = i(9568),
        N = i(6805);
      var Z = (0, u.ZP)(N.ww.div).withConfig({
          displayName: 'product-size-guide__SizeGuideWrapper',
          componentId: 'sc-4m4hc0-0',
        })(['']),
        I = (0, u.ZP)(z.Z).withConfig({ displayName: 'product-size-guide__Row', componentId: 'sc-4m4hc0-1' })(
          [
            'justify-content:flex-start;align-items:center;flex-direction:row;padding:20px 0;border-bottom:1px dotted ',
            ';&:first-child{padding:0 0 30px;border-bottom:none;& > span{font-weight:700;}}',
            '',
          ],
          function (t) {
            return t.theme.colors.primaryHover;
          },
          function (t) {
            return t.noLine ? (0, u.iv)(['border-bottom:none;padding:20px 0 0;']) : null;
          }
        ),
        P = u.ZP.span.withConfig({ displayName: 'product-size-guide__Item', componentId: 'sc-4m4hc0-2' })(
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
            return e > 1 ? (0, u.iv)(['calc(100% / (', ' + 1));'], e) : '100%;';
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        S = u.ZP.p.withConfig({ displayName: 'product-size-guide__HelpText', componentId: 'sc-4m4hc0-3' })(
          ['font-size:12px;font-weight:400;line-height:14px;text-align:left;color:', ';'],
          function (t) {
            return t.theme.colors.background;
          }
        ),
        O = i(6041),
        D = i(2869),
        L = i(9499);
      function M(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function T(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? M(Object(i), !0).forEach(function (e) {
                (0, L.Z)(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : M(Object(i)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
              });
        }
        return t;
      }
      function q(t) {
        var e = t.props,
          i = t.onClick,
          n = (0, u.Fg)();
        return (0, x.jsxs)(
          B,
          T(
            T({ width: '16', height: '16', viewBox: '0 0 16 16' }, e),
            {},
            {
              onClick: i,
              children: [
                (0, x.jsx)('circle', { cx: '8', cy: '8', r: '8', fill: n.colors.sidebarBackground }),
                (0, x.jsxs)('g', {
                  children: [
                    (0, x.jsx)('path', {
                      fill: n.colors.primary,
                      d: 'M7.83,4.57c.39,0,.76,.08,1.09,.24,.35,.16,.62,.38,.83,.68,.21,.3,.32,.66,.32,1.07,0,.25-.06,.48-.19,.66-.12,.19-.27,.36-.45,.51-.18,.15-.35,.29-.53,.42-.18,.12-.32,.25-.44,.37-.12,.12-.17,.25-.17,.39v.21h-1.23v-.39c0-.14,.06-.28,.17-.41,.12-.13,.26-.26,.43-.38l.51-.39c.18-.14,.32-.27,.43-.41,.12-.14,.18-.29,.18-.45,0-.27-.11-.49-.32-.65-.21-.17-.49-.25-.83-.25s-.65,.07-.94,.2c-.28,.12-.54,.32-.77,.6v-1.29c.2-.21,.46-.38,.78-.52,.33-.14,.7-.21,1.12-.21Z',
                    }),
                    (0, x.jsx)('path', {
                      fill: n.colors.primary,
                      d: 'M7.74,9.87c.21,0,.4,.08,.55,.23,.16,.15,.23,.33,.23,.55s-.08,.4-.23,.56-.33,.22-.55,.22-.4-.07-.56-.22c-.15-.16-.22-.34-.22-.56s.07-.4,.22-.55c.16-.16,.34-.23,.56-.23Z',
                    }),
                  ],
                }),
              ],
            }
          )
        );
      }
      var B = u.ZP.svg.withConfig({ displayName: 'question-mark__QuestionMark', componentId: 'sc-130dwmn-0' })([
        'cursor:pointer;',
      ]);
      function H(t) {
        var e = t.className,
          i = t.text,
          o = t.children,
          r = t.fixedOnMobile,
          a = t.hasClose,
          c = t.hasHelpIcon,
          l = t.titleText,
          s = (0, n.useState)(!1),
          d = s[0],
          p = s[1],
          h = (0, u.Fg)();
        return (0, x.jsxs)(W, {
          className: ''.concat(e, ' ').concat(r ? 'fixed' : null),
          children: [
            (0, x.jsxs)(A, {
              onClick: function () {
                return p(!d);
              },
              children: [(0, x.jsx)(E, { children: i }), c ? (0, x.jsx)(q, {}) : null],
            }),
            (0, x.jsx)(N.M_, {
              children: d
                ? (0, x.jsx)(D.Z, {
                    children: (0, x.jsxs)(F, {
                      className: 'tooltip-content',
                      children: [
                        a
                          ? (0, x.jsxs)(R, {
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              children: [
                                l ? (0, x.jsx)(X, { children: l }) : null,
                                (0, x.jsx)(G, {
                                  onClick: function () {
                                    return p(!d);
                                  },
                                  fill: h.colors.background,
                                }),
                              ],
                            })
                          : null,
                        o,
                      ],
                    }),
                  })
                : null,
            }),
          ],
        });
      }
      var W = u.ZP.div.withConfig({ displayName: 'tooltip__TooltipWrapper', componentId: 'sc-1ha8c9q-0' })([
          '&.fixed{.tooltip-content{z-index:999;position:fixed;right:0;bottom:0;left:0;transform:none;}}',
        ]),
        A = u.ZP.div.withConfig({ displayName: 'tooltip__TextWrapper', componentId: 'sc-1ha8c9q-1' })([
          'display:flex;justify-content:flex-start;align-items:center;gap:5px;',
        ]),
        E = u.ZP.span.withConfig({ displayName: 'tooltip__TooltipText', componentId: 'sc-1ha8c9q-2' })(
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
        F = u.ZP.div.withConfig({ displayName: 'tooltip__TooltipContent', componentId: 'sc-1ha8c9q-3' })(
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
        X = u.ZP.h4.withConfig({ displayName: 'tooltip__Title', componentId: 'sc-1ha8c9q-4' })(
          ['font-size:14px;font-weight:700;line-height:17px;color:', ';'],
          function (t) {
            return t.theme.colors.background;
          }
        ),
        R = (0, u.ZP)(z.Z).withConfig({ displayName: 'tooltip__Header', componentId: 'sc-1ha8c9q-5' })([
          'margin:4px 0 20px;',
        ]),
        G = (0, u.ZP)(O.Z).withConfig({ displayName: 'tooltip__StyledCloseIcon', componentId: 'sc-1ha8c9q-6' })([
          'cursor:pointer;',
        ]),
        Q = JSON.parse(
          '[{"label":"Width","sizeOptions":[{"label":"S","value":"18"},{"label":"M","value":"20"},{"label":"L","value":"21.97"},{"label":"XL","value":"23.98"},{"label":"2XL","value":"25.99"},{"label":"3XL","value":"28"}]},{"label":"Length","sizeOptions":[{"label":"S","value":"28"},{"label":"M","value":"29.26"},{"label":"L","value":"30.24"},{"label":"XL","value":"31.26"},{"label":"2XL","value":"32.49"},{"label":"3XL","value":"33.51"}]},{"label":"Sleeve length","sizeOptions":[{"label":"S","value":"8.23"},{"label":"M","value":"8.51"},{"label":"L","value":"8.75"},{"label":"XL","value":"9.02"},{"label":"2XL","value":"9.26"},{"label":"3XL","value":"9.49"}]}]'
        ),
        V = (0, g.u7)(),
        J = ['Unisex Twill Hat', 'Custom Pin Buttons', 'Tough Cases'];
      function U(t) {
        var e = t.className,
          i = t.active,
          n = t.sizes,
          o = t.onChange,
          r = t.productName,
          a = void 0 === r ? '' : r,
          c = n.map(function (t) {
            return { label: t.name, value: t.id };
          }),
          l = (0, p.Z)();
        return (0, x.jsxs)(K, {
          className: ''.concat(e, ' ').concat(l ? '' : 'desktop'),
          children: [
            l && !J.includes(a)
              ? (0, x.jsx)(it, {
                  fixedOnMobile: !0,
                  hasClose: !0,
                  titleText: 'Size Guide',
                  text: 'Size Guide',
                  hasHelpIcon: !0,
                  children: (0, x.jsx)(et, {
                    sizeItems: Q,
                    helpText: '*All measurements are in Inches. All pieces fit true to size.',
                  }),
                })
              : null,
            (0, x.jsx)(Y, {
              children: (0, x.jsxs)(tt, {
                justifyContent: 'flex-end',
                alignItems: 'center',
                children: [
                  l || J.includes(a)
                    ? null
                    : (0, x.jsx)(nt, {
                        text: 'Size Guide',
                        hasHelpIcon: !0,
                        hasClose: !0,
                        children: (0, x.jsx)(et, {
                          sizeItems: Q,
                          helpText: '*All measurements are in Inches. All pieces fit true to size.',
                        }),
                      }),
                  (0, x.jsx)($, {
                    options: c,
                    title: 'Select size',
                    value: i,
                    onChange: function (t) {
                      return o(t);
                    },
                    customBorderRadius: '4px',
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var $ = (0, u.ZP)(V).withConfig({
          displayName: 'product-size-selector__StyledDropdownCtrl',
          componentId: 'sc-1fu7rya-0',
        })(['width:100%;']),
        K = u.ZP.div.withConfig({ displayName: 'product-size-selector__SizesWrappper', componentId: 'sc-1fu7rya-1' })([
          'margin:12px 0px 0;&.desktop{position:relative;}',
        ]),
        Y = (0, u.ZP)(z.Z).withConfig({
          displayName: 'product-size-selector__SizeSelectorWrapper',
          componentId: 'sc-1fu7rya-2',
        })(['align-items:center !important;justify-content:space-between !important;']),
        tt = (0, u.ZP)(z.Z).withConfig({
          displayName: 'product-size-selector__FlexWrapper',
          componentId: 'sc-1fu7rya-3',
        })(['width:-webkit-fill-available;display:flex;flex-direction:column;']),
        et = (0, u.ZP)(function (t) {
          var e = t.className,
            i = t.sizeItems,
            n = t.helpText;
          return (0, x.jsxs)(Z, {
            className: e,
            children: [
              (0, x.jsxs)(I, {
                children: [
                  (0, x.jsx)(P, { itemsLength: 3 }),
                  i[0].sizeOptions.map(function (t, e) {
                    return (0,
                    x.jsx)(P, { itemsLength: i.length, children: t.label }, ''.concat(t.label, '-').concat(e));
                  }),
                ],
              }),
              i.map(function (t, e) {
                return (0, x.jsxs)(
                  I,
                  {
                    children: [
                      (0, x.jsx)(P, { itemsLength: i.length, children: t.label }),
                      t.sizeOptions.map(function (t, e) {
                        return (0,
                        x.jsx)(P, { itemsLength: i.length, children: t.value }, ''.concat(t.label, '-').concat(e));
                      }),
                    ],
                  },
                  ''.concat(t.label, '-').concat(e)
                );
              }),
              n ? (0, x.jsx)(I, { noLine: !0, children: (0, x.jsx)(S, { children: n }) }) : null,
            ],
          });
        }).withConfig({ displayName: 'product-size-selector__StyledSizeGuide', componentId: 'sc-1fu7rya-4' })([
          'width:535px;max-width:100%;',
        ]),
        it = (0, u.ZP)(H).withConfig({
          displayName: 'product-size-selector__StyledTooltip',
          componentId: 'sc-1fu7rya-5',
        })(
          ['margin-bottom:10px;.tooltip-content{padding:24px;border-radius:2px;background-color:', ';}'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        nt = (0, u.ZP)(H).withConfig({
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
        ot = i(8465);
      function rt(t) {
        var e = t.className,
          i = t.product,
          o = t.cart,
          r = t.updateCart,
          a = (0, d.useRouter)(),
          c = (0, p.Z)();
        (0, n.useEffect)(function () {
          window.analytics && window.analytics.track('Merch Product Viewed', { product_id: i.id });
        });
        var l = (0, n.useState)(),
          s = l[0],
          u = l[1],
          h = i.colors.find(function (t) {
            return 'White' == t.name || 'white' == t.name;
          }),
          m = (0, n.useState)(h || i.colors[0]),
          f = m[0],
          g = m[1],
          v = (0, n.useState)(),
          w = v[0],
          b = v[1],
          j = !(!s || !w || (i.colors.length && !f.id)),
          z = o.find(function (t) {
            return t.product.id === i.id;
          }),
          N = function (t) {
            return 'https://media.development.trac.co/merch-preview/'.concat(t, '-mask.png');
          };
        return (0, x.jsxs)(at, {
          className: e,
          children: [
            (0, x.jsxs)(pt, {
              children: [
                (0, x.jsx)('div', {
                  children: (0, x.jsx)(k.Z, {
                    className: 'image-container',
                    image: i.image,
                    alt: i.title,
                    hasDarkBackground: !0,
                    inDetail: !0,
                    isJsx: !0,
                    jsxImage: (0, x.jsx)(ot.Z, {
                      fill: (null === f || void 0 === f ? void 0 : f.color) || 'white',
                      imageSrc: (h || i).image || '',
                      maskSrc: N(i.blueprintId || 0),
                    }),
                  }),
                }),
                i.colors.length
                  ? (0, x.jsx)(ht, {
                      children: i.colors.map(function (t, e) {
                        return (0, x.jsx)(
                          mt,
                          {
                            onClick: function () {
                              g(t);
                            },
                            children: t.id == f.id ? (0, x.jsx)(_, { fill: 'white' }) : (0, x.jsx)(_, { fill: 'grey' }),
                          },
                          e
                        );
                      }),
                    })
                  : null,
              ],
            }),
            (0, x.jsx)(C.Z, { className: 'product-info', product: i, inDetail: !0 }),
            (0, x.jsxs)(ut, {
              isMobile: c,
              children: [
                (0, x.jsxs)('div', {
                  children: [
                    (0, x.jsx)(dt, { children: 'Available Colors' }),
                    (0, x.jsx)(lt, {
                      isMobile: c,
                      children: i.colors.map(function (t, e) {
                        return (0, x.jsx)(
                          st,
                          {
                            onClick: function () {
                              return (function (t) {
                                var e = i.colors.find(function (e) {
                                  return e.id == t;
                                });
                                g(e || f);
                              })(t.id);
                            },
                            isSelected: t.id == f.id,
                            children: (0, x.jsx)(ot.Z, {
                              fill: t.color || 'white',
                              imageSrc: (null === h || void 0 === h ? void 0 : h.image) || '',
                              maskSrc: N(i.blueprintId || 0),
                            }),
                          },
                          e
                        );
                      }),
                    }),
                  ],
                }),
                (0, x.jsxs)(ft, {
                  children: [
                    (0, x.jsx)(U, { sizes: i.sizes, active: s, onChange: u, productName: i.title }),
                    (0, x.jsx)(y, { isLimited: !i.unlimitedQty, quantity: i.qty, onChange: b, active: w }),
                  ],
                }),
              ],
            }),
            (0, x.jsx)(ct, {
              onClick: function () {
                var t = i.sizes.find(function (t) {
                  return t.id === s;
                });
                if (j && t) {
                  var e, n;
                  if (
                    (r('add', {
                      product: i,
                      size: t,
                      color: f,
                      quantity:
                        z && w
                          ? null !== (e = w + (null === z || void 0 === z ? void 0 : z.quantity)) && void 0 !== e
                            ? e
                            : 1
                          : null !== w && void 0 !== w
                          ? w
                          : 1,
                    }),
                    window.analytics)
                  )
                    window.analytics.track('Merch Added To Cart', {
                      product_id: i.id,
                      variant_id:
                        null ===
                          (n = i.variants.find(function (e) {
                            return e.sizeId == t.id;
                          })) || void 0 === n
                          ? void 0
                          : n.id,
                      size_selected: t.name,
                      quantity: 1,
                    });
                  a.push('../cart');
                }
              },
              disabled: !j,
              children: 'Add to Cart',
            }),
          ],
        });
      }
      var at = u.ZP.div.withConfig({ displayName: 'product-item-detail__ProductContainer', componentId: 'sc-98sn0-0' })(
          [
            'width:100%;margin-bottom:128px;@media (max-width:',
            '){margin-bottom:144px;}.product-info{margin:24px 0 48px;}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        ct = (0, u.ZP)(j.Z).withConfig({ displayName: 'product-item-detail__CartButton', componentId: 'sc-98sn0-1' })([
          'width:100%;height:70px;',
        ]),
        lt = u.ZP.div.withConfig({ displayName: 'product-item-detail__VariantWrap', componentId: 'sc-98sn0-2' })(
          ['display:grid;width:fit-content;grid-gap:5px;grid-template-columns:repeat( ', ',1fr );'],
          function (t) {
            return t.isMobile ? '5' : '4';
          }
        ),
        st = u.ZP.div.withConfig({ displayName: 'product-item-detail__VariantItemWrap', componentId: 'sc-98sn0-3' })(
          ['width:60px;height:60px;:hover{cursor:pointer;}border:', ';'],
          function (t) {
            return t.isSelected ? '2px solid #A2D743' : '';
          }
        ),
        dt = u.ZP.h4.withConfig({ displayName: 'product-item-detail__Title', componentId: 'sc-98sn0-4' })(
          ['font-family:Inter;font-style:normal;font-weight:normal;font-size:12px;opacity:0.5;color:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        ut = u.ZP.div.withConfig({ displayName: 'product-item-detail__DetailsWrap', componentId: 'sc-98sn0-5' })(
          ['display:grid;grid-template-columns:repeat( ', ',1fr );padding-bottom:32px;'],
          function (t) {
            return t.isMobile ? '1' : '2';
          }
        ),
        pt = u.ZP.div.withConfig({ displayName: 'product-item-detail__ImageWrap', componentId: 'sc-98sn0-6' })([
          'position:relative;',
        ]),
        ht = u.ZP.div.withConfig({ displayName: 'product-item-detail__DotSelect', componentId: 'sc-98sn0-7' })([
          'display:flex;justify-content:center;position:absolute;bottom:10px;left:45%;:hover{cursor:pointer;}',
        ]),
        mt = u.ZP.div.withConfig({ displayName: 'product-item-detail__DotSelectItem', componentId: 'sc-98sn0-8' })([
          'padding:2px;',
        ]),
        ft = u.ZP.div.withConfig({ displayName: 'product-item-detail__FiltersWrapper', componentId: 'sc-98sn0-9' })([
          'display:flex;flex-direction:column;gap:12px;',
        ]),
        gt = !0;
      function xt(t) {
        var e = t.siteData,
          i = t.product,
          d = (0, n.useState)(e)[0],
          u = (0, r.V)(e).pageData,
          p = (0, o.j)(e.ownerId),
          h = p.cart,
          m = p.updateCart;
        return i
          ? (0, x.jsxs)(x.Fragment, {
              children: [
                (0, x.jsx)(c.Z, { pageData: u }),
                (0, x.jsx)(l.Z, {
                  theme: d ? d.theme : void 0,
                  children: (0, x.jsx)(a.Z, {
                    pageData: u,
                    hideNavbar: !0,
                    hasBackground: !0,
                    action: (0, x.jsx)(s.Z, {}),
                    children: (0, x.jsx)(rt, { product: i, cart: h, updateCart: m }),
                  }),
                }),
              ],
            })
          : null;
      }
    },
    7937: function (t, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch/detail/[productId]',
        function () {
          return i(2407);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [774, 430, 457, 890, 478, 888, 179], function () {
      return (e = 7937), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
