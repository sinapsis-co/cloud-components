_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [13],
  {
    '2sFz': function (t, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch/detail/[productId]',
        function () {
          return i('baZN');
        },
      ]);
    },
    RHGb: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return l;
      });
      var n = i('q1tI'),
        o = i.n(n),
        a = i('vOnD'),
        r = i('WqaS'),
        c = o.a.createElement;
      function l(t) {
        var e = t.className,
          i = t.product,
          n = t.inDetail,
          o = t.inCart,
          a = t.size,
          r = t.color,
          l = t.noPrice;
        return c(
          d,
          { className: e, inDetail: n, inCart: o },
          c(
            'div',
            null,
            c(s, { className: 'title' }, i.title),
            o && a ? c(p, null, 'Size: ', a, r && ', '.concat(r)) : null
          ),
          !l && c(u, { className: 'price' }, '$', i.price.toFixed(2).toLocaleString())
        );
      }
      var d = Object(a.d)(r.a).withConfig({
          displayName: 'product-info__InformationWrapper',
          componentId: 'sc-1vodx6d-0',
        })(
          ['flex-direction:column;align-items:flex-start;', ' ', ''],
          function (t) {
            return t.inDetail
              ? Object(a.c)(
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
              ? Object(a.c)([
                  'width:100%;flex-direction:row;justify-content:space-between;align-items:center;.title{font-size:16px;font-weight:700;line-height:24px;}',
                ])
              : null;
          }
        ),
        s = a.d.h4.withConfig({ displayName: 'product-info__Title', componentId: 'sc-1vodx6d-1' })(
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
        u = a.d.h6.withConfig({ displayName: 'product-info__Price', componentId: 'sc-1vodx6d-2' })(
          ['color:', ';font-size:16px;font-weight:400;line-height:24px;opacity:0.7;margin:0;'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        p = a.d.h6.withConfig({ displayName: 'product-info__Details', componentId: 'sc-1vodx6d-3' })(
          ['color:', ';font-size:14px;font-weight:400;line-height:24px;margin:0;'],
          function (t) {
            return t.theme.colors.primary;
          }
        );
    },
    SPwB: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return c;
      });
      var n = i('q1tI'),
        o = i.n(n),
        a = i('vOnD'),
        r = o.a.createElement;
      function c(t) {
        var e = t.fill,
          i = void 0 === e ? '#EDA064' : e,
          n = t.imageSrc,
          o = void 0 === n ? ''.concat('https://media.development.trac.co', '/merch/images/49-368.jpg') : n,
          a = t.maskSrc,
          c = void 0 === a ? '/sweater.png' : a,
          d = t.haveHover;
        return r(
          l,
          { className: 'white' === i ? 'no-mask' : '', fill: i, haveHover: void 0 !== d && d },
          r('img', { className: 'main-image', src: o, alt: 'filter-main-image' }),
          'white' !== i && r('img', { className: 'mask-image', src: c, alt: 'filter-mask-image' })
        );
      }
      var l = a.d.div.withConfig({ displayName: 'image-color-filter__FilterWrapper', componentId: 'sc-11t2le6-0' })(
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
    aagu: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return c;
      });
      var n = i('q1tI'),
        o = i.n(n),
        a = i('vOnD'),
        r = o.a.createElement;
      function c(t) {
        var e = t.className,
          i = t.image,
          n = t.alt,
          o = t.hasDarkBackground,
          a = t.isJsx,
          c = t.jsxImage,
          p = t.inCart,
          m = t.inDetail;
        return r(
          l,
          {
            className: ''
              .concat(e, ' ')
              .concat(p ? 'cart' : '', ' ')
              .concat(m ? 'detail' : ''),
            hasDarkBackground: o,
          },
          a
            ? r(d, { className: ''.concat(p ? 'cart' : '', ' ').concat(m ? 'detail' : '') }, r(s, null, c))
            : r(u, { src: i, alt: n })
        );
      }
      var l = a.d.div.withConfig({ displayName: 'product-img__ImgContainer', componentId: 'sc-1wvkwid-0' })(
          [
            'display:flex;justify-content:center;align-items:center;border-radius:5px;padding:32px;background-color:',
            ';transition:background-color ',
            ';&.cart{padding:0;}@media (max-width:',
            '){padding:0;width:fit-content;justify-content:flex-start;&.detail{padding:32px;width:auto;height:auto;justify-content:center;}}',
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
              ? Object(a.c)(['background-color:', ';'], function (t) {
                  return t.theme.colors.sidebarBackground;
                })
              : null;
          }
        ),
        d = a.d.div.withConfig({ displayName: 'product-img__FilteredImageWrap', componentId: 'sc-1wvkwid-1' })(
          [
            'width:',
            ';height:',
            ';object-fit:cover;border-radius:5px;overflow:hidden;position:relative;&.detail{width:',
            ';height:',
            ';}@media (max-width:',
            '){width:',
            ';height:',
            ';&.detail{width:auto;height:auto;}}&.cart{width:',
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
            return t.theme.sizes.productSizeDetail;
          },
          function (t) {
            return t.theme.sizes.productSizeDetail;
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
        s = a.d.div.withConfig({ displayName: 'product-img__ProductImg', componentId: 'sc-1wvkwid-2' })([
          'height:100%;',
        ]),
        u = a.d.img.withConfig({ displayName: 'product-img__ProductImgTag', componentId: 'sc-1wvkwid-3' })([
          'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:65%;width:100%;display:block;',
        ]);
    },
    baZN: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, '__N_SSP', function () {
          return _t;
        }),
        i.d(e, 'default', function () {
          return Ct;
        });
      var n = i('q1tI'),
        o = i.n(n),
        a = i('jtTr'),
        r = i('6Hpx'),
        c = i('MWXp'),
        l = i('42Rd'),
        d = i('/kYb'),
        s = i('20a2'),
        u = i('vOnD'),
        p = i('pZhd'),
        m = i('voqa'),
        f = i('a3WO');
      var h = i('BsWD');
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
      var v = i('XGvB'),
        b = o.a.createElement,
        w = Object(v.a)(),
        x = u.d.span.withConfig({
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
        y = u.d.div.withConfig({
          displayName: 'product-quantity-selector-dropdown__Container',
          componentId: 'rr9qe-1',
        })(['position:relative;']),
        _ = function (t) {
          var e = t.isLimited,
            i = t.quantity,
            n = t.onChange,
            o = t.active,
            a = e ? i : 1e3,
            r = g(Array(null !== a && void 0 !== a ? a : 0).keys()).map(function (t) {
              return { label: ''.concat(t + 1), value: t + 1 };
            });
          return b(
            y,
            null,
            e && i && i >= 10 ? b(x, null, 'Limited') : null,
            e && i && i < 10 ? b(x, { isRed: !0 }, 'Only ', i, ' remaining!') : null,
            0 === i ? b(x, { soldOut: !0 }, 'Sold Out') : null,
            b(w, {
              options: r,
              title: e ? 'Limited Quantity' : 'Select Quantity',
              value: o,
              customBorderRadius: '4px',
              onChange: function (t) {
                return n(t);
              },
            })
          );
        },
        C = i('zoQI'),
        z = o.a.createElement;
      var I = function (t) {
          var e = t.fill;
          return z(
            'svg',
            { width: '7', height: '7', viewBox: '0 0 7 7', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
            z('circle', { cx: '3.5', cy: '3.5', r: '3.5', fill: e })
          );
        },
        N = i('RHGb'),
        O = i('aagu'),
        k = i('WqaS'),
        j = i('ZMKu'),
        S = o.a.createElement;
      var D = Object(u.d)(j.b.div).withConfig({
          displayName: 'product-size-guide__SizeGuideWrapper',
          componentId: 'sc-4m4hc0-0',
        })(['']),
        q = Object(u.d)(k.a).withConfig({ displayName: 'product-size-guide__Row', componentId: 'sc-4m4hc0-1' })(
          [
            'justify-content:flex-start;align-items:center;flex-direction:row;padding:20px 0;border-bottom:1px dotted ',
            ';&:first-child{padding:0 0 30px;border-bottom:none;& > span{font-weight:700;}}',
            '',
          ],
          function (t) {
            return t.theme.colors.primaryHover;
          },
          function (t) {
            return t.noLine ? Object(u.c)(['border-bottom:none;padding:20px 0 0;']) : null;
          }
        ),
        L = u.d.span.withConfig({ displayName: 'product-size-guide__Item', componentId: 'sc-4m4hc0-2' })(
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
            return e > 1 ? Object(u.c)(['calc(100% / (', ' + 1));'], e) : '100%;';
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        T = u.d.p.withConfig({ displayName: 'product-size-guide__HelpText', componentId: 'sc-4m4hc0-3' })(
          ['font-size:12px;font-weight:400;line-height:14px;text-align:left;color:', ';'],
          function (t) {
            return t.theme.colors.background;
          }
        ),
        E = i('hRDA'),
        W = i('SXEb'),
        P = i('wx14'),
        M = o.a.createElement;
      function B(t) {
        var e = t.props,
          i = t.onClick,
          n = Object(u.e)();
        return M(
          A,
          Object(P.a)({ width: '16', height: '16', viewBox: '0 0 16 16' }, e, { onClick: i }),
          M('circle', { cx: '8', cy: '8', r: '8', fill: n.colors.sidebarBackground }),
          M(
            'g',
            null,
            M('path', {
              fill: n.colors.primary,
              d: 'M7.83,4.57c.39,0,.76,.08,1.09,.24,.35,.16,.62,.38,.83,.68,.21,.3,.32,.66,.32,1.07,0,.25-.06,.48-.19,.66-.12,.19-.27,.36-.45,.51-.18,.15-.35,.29-.53,.42-.18,.12-.32,.25-.44,.37-.12,.12-.17,.25-.17,.39v.21h-1.23v-.39c0-.14,.06-.28,.17-.41,.12-.13,.26-.26,.43-.38l.51-.39c.18-.14,.32-.27,.43-.41,.12-.14,.18-.29,.18-.45,0-.27-.11-.49-.32-.65-.21-.17-.49-.25-.83-.25s-.65,.07-.94,.2c-.28,.12-.54,.32-.77,.6v-1.29c.2-.21,.46-.38,.78-.52,.33-.14,.7-.21,1.12-.21Z',
            }),
            M('path', {
              fill: n.colors.primary,
              d: 'M7.74,9.87c.21,0,.4,.08,.55,.23,.16,.15,.23,.33,.23,.55s-.08,.4-.23,.56-.33,.22-.55,.22-.4-.07-.56-.22c-.15-.16-.22-.34-.22-.56s.07-.4,.22-.55c.16-.16,.34-.23,.56-.23Z',
            })
          )
        );
      }
      var A = u.d.svg.withConfig({ displayName: 'question-mark__QuestionMark', componentId: 'sc-130dwmn-0' })([
          'cursor:pointer;',
        ]),
        X = n.createElement;
      function R(t) {
        var e = t.className,
          i = t.text,
          o = t.children,
          a = t.fixedOnMobile,
          r = t.hasClose,
          c = t.hasHelpIcon,
          l = t.titleText,
          d = Object(n.useState)(!1),
          s = d[0],
          p = d[1],
          m = Object(u.e)();
        return X(
          H,
          { className: ''.concat(e, ' ').concat(a ? 'fixed' : null) },
          X(
            F,
            {
              onClick: function () {
                return p(!s);
              },
            },
            X(G, null, i),
            c ? X(B, null) : null
          ),
          X(
            j.a,
            null,
            s
              ? X(
                  W.a,
                  null,
                  X(
                    J,
                    { className: 'tooltip-content' },
                    r
                      ? X(
                          Q,
                          { alignItems: 'center', justifyContent: 'space-between' },
                          l ? X(Z, null, l) : null,
                          X(K, {
                            onClick: function () {
                              return p(!s);
                            },
                            fill: m.colors.background,
                          })
                        )
                      : null,
                    o
                  )
                )
              : null
          )
        );
      }
      var H = u.d.div.withConfig({ displayName: 'tooltip__TooltipWrapper', componentId: 'sc-1ha8c9q-0' })([
          '&.fixed{.tooltip-content{z-index:999;position:fixed;right:0;bottom:0;left:0;transform:none;}}',
        ]),
        F = u.d.div.withConfig({ displayName: 'tooltip__TextWrapper', componentId: 'sc-1ha8c9q-1' })([
          'display:flex;justify-content:flex-start;align-items:center;gap:5px;',
        ]),
        G = u.d.span.withConfig({ displayName: 'tooltip__TooltipText', componentId: 'sc-1ha8c9q-2' })(
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
        J = u.d.div.withConfig({ displayName: 'tooltip__TooltipContent', componentId: 'sc-1ha8c9q-3' })(
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
        Z = u.d.h4.withConfig({ displayName: 'tooltip__Title', componentId: 'sc-1ha8c9q-4' })(
          ['font-size:14px;font-weight:700;line-height:17px;color:', ';'],
          function (t) {
            return t.theme.colors.background;
          }
        ),
        Q = Object(u.d)(k.a).withConfig({ displayName: 'tooltip__Header', componentId: 'sc-1ha8c9q-5' })([
          'margin:4px 0 20px;',
        ]),
        K = Object(u.d)(E.a).withConfig({ displayName: 'tooltip__StyledCloseIcon', componentId: 'sc-1ha8c9q-6' })([
          'cursor:pointer;',
        ]),
        V = i('fXhW'),
        U = o.a.createElement,
        Y = Object(v.a)(),
        $ = ['Unisex Twill Hat', 'Custom Pin Buttons', 'Tough Cases'];
      function tt(t) {
        var e = t.className,
          i = t.active,
          n = t.sizes,
          o = t.onChange,
          a = t.productName,
          r = void 0 === a ? '' : a,
          c = n.map(function (t) {
            return { label: t.name, value: t.id };
          }),
          l = Object(m.a)();
        return U(
          it,
          { className: ''.concat(e, ' ').concat(l ? '' : 'desktop') },
          l && !$.includes(r)
            ? U(
                rt,
                { fixedOnMobile: !0, hasClose: !0, titleText: 'Size Guide', text: 'Size Guide', hasHelpIcon: !0 },
                U(at, { sizeItems: V, helpText: '*All measurements are in Inches. All pieces fit true to size.' })
              )
            : null,
          U(
            nt,
            null,
            U(
              ot,
              { justifyContent: 'flex-end', alignItems: 'center' },
              l || $.includes(r)
                ? null
                : U(
                    ct,
                    { text: 'Size Guide', hasHelpIcon: !0, hasClose: !0 },
                    U(at, { sizeItems: V, helpText: '*All measurements are in Inches. All pieces fit true to size.' })
                  ),
              U(et, {
                options: c,
                title: 'Select size',
                value: i,
                onChange: function (t) {
                  return o(t);
                },
                customBorderRadius: '4px',
              })
            )
          )
        );
      }
      var et = Object(u.d)(Y).withConfig({
          displayName: 'product-size-selector__StyledDropdownCtrl',
          componentId: 'sc-1fu7rya-0',
        })(['width:100%;']),
        it = u.d.div.withConfig({ displayName: 'product-size-selector__SizesWrappper', componentId: 'sc-1fu7rya-1' })([
          'margin:12px 0px 0;&.desktop{position:relative;}',
        ]),
        nt = Object(u.d)(k.a).withConfig({
          displayName: 'product-size-selector__SizeSelectorWrapper',
          componentId: 'sc-1fu7rya-2',
        })(['align-items:center !important;justify-content:space-between !important;']),
        ot = Object(u.d)(k.a).withConfig({
          displayName: 'product-size-selector__FlexWrapper',
          componentId: 'sc-1fu7rya-3',
        })(['width:-webkit-fill-available;display:flex;flex-direction:column;']),
        at = Object(u.d)(function (t) {
          var e = t.className,
            i = t.sizeItems,
            n = t.helpText;
          return S(
            D,
            { className: e },
            S(
              q,
              null,
              S(L, { itemsLength: 3 }),
              i[0].sizeOptions.map(function (t, e) {
                return S(L, { key: ''.concat(t.label, '-').concat(e), itemsLength: i.length }, t.label);
              })
            ),
            i.map(function (t, e) {
              return S(
                q,
                { key: ''.concat(t.label, '-').concat(e) },
                S(L, { itemsLength: i.length }, t.label),
                t.sizeOptions.map(function (t, e) {
                  return S(L, { key: ''.concat(t.label, '-').concat(e), itemsLength: i.length }, t.value);
                })
              );
            }),
            n ? S(q, { noLine: !0 }, S(T, null, n)) : null
          );
        }).withConfig({ displayName: 'product-size-selector__StyledSizeGuide', componentId: 'sc-1fu7rya-4' })([
          'width:535px;max-width:100%;',
        ]),
        rt = Object(u.d)(R).withConfig({
          displayName: 'product-size-selector__StyledTooltip',
          componentId: 'sc-1fu7rya-5',
        })(
          ['margin-bottom:10px;.tooltip-content{padding:24px;border-radius:2px;background-color:', ';}'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        ct = Object(u.d)(R).withConfig({
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
        lt = i('SPwB'),
        dt = o.a.createElement;
      function st(t) {
        var e = t.className,
          i = t.cartKey,
          o = t.product,
          a = Object(s.useRouter)(),
          r = Object(m.a)();
        Object(n.useEffect)(function () {
          window.analytics && window.analytics.track('Merch Product Viewed', { product_id: o.id });
        });
        var c = Object(n.useState)(),
          l = c[0],
          d = c[1],
          u = o.colors.find(function (t) {
            return 'White' == t.name || 'white' == t.name;
          }),
          f = Object(n.useState)(u || o.colors[0]),
          h = f[0],
          g = f[1],
          v = Object(n.useState)(),
          b = v[0],
          w = v[1],
          x = Object(p.a)(i),
          y = x.updateCart,
          C = x.cart,
          z = !(!l || !b || (o.colors.length && !h.id)),
          k = C.find(function (t) {
            return t.product.id === o.id;
          }),
          j = function (t) {
            return 'https://media.development.trac.co/merch-preview/'.concat(t, '-mask.png');
          };
        return dt(
          ut,
          { className: e },
          dt(
            vt,
            null,
            dt(
              'div',
              null,
              dt(O.a, {
                className: 'image-container',
                image: o.image,
                alt: o.title,
                hasDarkBackground: !0,
                inDetail: !0,
                isJsx: !0,
                jsxImage: dt(lt.a, {
                  fill: (null === h || void 0 === h ? void 0 : h.color) || 'white',
                  imageSrc: (u || o).image || '',
                  maskSrc: j(o.blueprintId || 0),
                }),
              })
            ),
            o.colors.length
              ? dt(
                  bt,
                  null,
                  o.colors.map(function (t, e) {
                    return dt(
                      wt,
                      {
                        key: e,
                        onClick: function () {
                          g(t);
                        },
                      },
                      t.id == h.id ? dt(I, { fill: 'white' }) : dt(I, { fill: 'grey' })
                    );
                  })
                )
              : null
          ),
          dt(N.a, { className: 'product-info', product: o, inDetail: !0 }),
          dt(
            gt,
            { isMobile: r },
            dt(
              'div',
              null,
              dt(ht, null, 'Available Colors'),
              dt(
                mt,
                { isMobile: r },
                o.colors.map(function (t, e) {
                  return dt(
                    ft,
                    {
                      key: e,
                      onClick: function () {
                        return (function (t) {
                          var e = o.colors.find(function (e) {
                            return e.id == t;
                          });
                          g(e || h);
                        })(t.id);
                      },
                      isSelected: t.id == h.id,
                    },
                    dt(lt.a, {
                      fill: t.color || 'white',
                      imageSrc: (null === u || void 0 === u ? void 0 : u.image) || '',
                      maskSrc: j(o.blueprintId || 0),
                    })
                  );
                })
              )
            ),
            dt(
              xt,
              null,
              dt(tt, { sizes: o.sizes, active: l, onChange: d, productName: o.title }),
              dt(_, { isLimited: !o.unlimitedQty, quantity: o.qty, onChange: w, active: b })
            )
          ),
          dt(
            pt,
            {
              onClick: function () {
                var t = o.sizes.find(function (t) {
                  return t.id === l;
                });
                if (z && t) {
                  var e, i;
                  if (
                    (y('add', {
                      product: o,
                      size: t,
                      color: h,
                      quantity:
                        k && b
                          ? null !== (e = b + (null === k || void 0 === k ? void 0 : k.quantity)) && void 0 !== e
                            ? e
                            : 1
                          : null !== b && void 0 !== b
                          ? b
                          : 1,
                    }),
                    window.analytics)
                  )
                    window.analytics.track('Merch Added To Cart', {
                      product_id: o.id,
                      variant_id:
                        null ===
                          (i = o.variants.find(function (e) {
                            return e.sizeId == t.id;
                          })) || void 0 === i
                          ? void 0
                          : i.id,
                      size_selected: t.name,
                      quantity: 1,
                    });
                  a.push('../cart');
                }
              },
              disabled: !z,
            },
            'Add to Cart'
          )
        );
      }
      var ut = u.d.div.withConfig({ displayName: 'product-item-detail__ProductContainer', componentId: 'sc-98sn0-0' })(
          [
            'width:100%;margin-bottom:128px;@media (max-width:',
            '){margin-bottom:144px;}.product-info{margin:24px 0 48px;}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        pt = Object(u.d)(C.a).withConfig({ displayName: 'product-item-detail__CartButton', componentId: 'sc-98sn0-1' })(
          ['width:100%;height:70px;']
        ),
        mt = u.d.div.withConfig({ displayName: 'product-item-detail__VariantWrap', componentId: 'sc-98sn0-2' })(
          ['display:grid;width:fit-content;grid-gap:5px;grid-template-columns:repeat( ', ',1fr );'],
          function (t) {
            return t.isMobile ? '5' : '4';
          }
        ),
        ft = u.d.div.withConfig({ displayName: 'product-item-detail__VariantItemWrap', componentId: 'sc-98sn0-3' })(
          ['width:60px;height:60px;:hover{cursor:pointer;}border:', ';'],
          function (t) {
            return t.isSelected ? '2px solid #A2D743' : '';
          }
        ),
        ht = u.d.h4.withConfig({ displayName: 'product-item-detail__Title', componentId: 'sc-98sn0-4' })(
          ['font-family:Inter;font-style:normal;font-weight:normal;font-size:12px;opacity:0.5;color:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        gt = u.d.div.withConfig({ displayName: 'product-item-detail__DetailsWrap', componentId: 'sc-98sn0-5' })(
          ['display:grid;grid-template-columns:repeat( ', ',1fr );padding-bottom:32px;'],
          function (t) {
            return t.isMobile ? '1' : '2';
          }
        ),
        vt = u.d.div.withConfig({ displayName: 'product-item-detail__ImageWrap', componentId: 'sc-98sn0-6' })([
          'position:relative;',
        ]),
        bt = u.d.div.withConfig({ displayName: 'product-item-detail__DotSelect', componentId: 'sc-98sn0-7' })([
          'display:flex;justify-content:center;position:absolute;bottom:10px;left:45%;:hover{cursor:pointer;}',
        ]),
        wt = u.d.div.withConfig({ displayName: 'product-item-detail__DotSelectItem', componentId: 'sc-98sn0-8' })([
          'padding:2px;',
        ]),
        xt = u.d.div.withConfig({ displayName: 'product-item-detail__FiltersWrapper', componentId: 'sc-98sn0-9' })([
          'display:flex;flex-direction:column;gap:12px;',
        ]),
        yt = o.a.createElement,
        _t = !0;
      function Ct(t) {
        var e = Object(n.useState)(t.siteData)[0],
          i = Object(a.a)(t.siteData).pageData;
        return t.product
          ? yt(
              o.a.Fragment,
              null,
              yt(c.a, { pageData: i }),
              yt(
                l.a,
                { theme: e ? e.theme : void 0 },
                yt(
                  r.a,
                  { pageData: i, hideNavbar: !0, hasBackground: !0, action: yt(d.a, null) },
                  yt(st, { product: t.product, cartKey: e.ownerId })
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
    pZhd: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return d;
      });
      var n = i('rePB'),
        o = i('q1tI');
      function a(t, e) {
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
      function r(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? a(Object(i), !0).forEach(function (e) {
                Object(n.a)(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : a(Object(i)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
              });
        }
        return t;
      }
      var c = function (t, e) {
          'undefined' !== typeof localStorage && localStorage.setItem(t, JSON.stringify(e));
        },
        l = function (t) {
          return function (e) {
            var i, n;
            return (
              e.product.id === t.product.id &&
              e.size.id === t.size.id &&
              (null === (i = e.color) || void 0 === i ? void 0 : i.id) ===
                (null === (n = t.color) || void 0 === n ? void 0 : n.id)
            );
          };
        },
        d = function (t) {
          var e = 'TRAC_CART.'.concat(t),
            i = Object(o.useState)(
              (function (t) {
                if ('undefined' !== typeof localStorage) {
                  var e = localStorage.getItem(t);
                  if (e) return JSON.parse(e);
                }
                return [];
              })(e)
            ),
            n = i[0],
            a = i[1],
            d = function (t) {
              return c(e, t), a(t), t;
            },
            s = n.reduce(function (t, e) {
              return t + e.product.price * e.quantity;
            }, 0);
          return {
            cart: n,
            total: s,
            updateCart: function (t, e) {
              var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                o = n.find(l(e));
              o && ('add' === t && (e.quantity += i), 'remove' === t && (e.quantity -= i));
              var a = n
                .concat(o || 'add' !== t ? [] : [e])
                .map(function (t) {
                  return l(e)(t) ? r({}, e) : r({}, t);
                })
                .filter(function (t) {
                  return t.quantity > 0;
                });
              return d(a);
            },
            saveCart: d,
            emptyCart: function () {
              c(e, []), a([]);
            },
          };
        };
    },
  },
  [['2sFz', 0, 2, 3, 1, 4, 5]],
]);
