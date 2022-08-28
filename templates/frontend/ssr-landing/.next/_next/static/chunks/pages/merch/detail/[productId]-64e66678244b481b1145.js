_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [14],
  {
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
      var i = n('q1tI'),
        o = n.n(i),
        a = n('vOnD'),
        r = n('WqaS'),
        c = o.a.createElement;
      function l(t) {
        var e = t.className,
          n = t.product,
          i = t.inDetail,
          o = t.inCart,
          a = t.size,
          r = t.color,
          l = t.noPrice;
        return c(
          d,
          { className: e, inDetail: i, inCart: o },
          c(
            'div',
            null,
            c(s, { className: 'title' }, n.title),
            o && a ? c(p, null, 'Size: ', a, r && ', '.concat(r)) : null
          ),
          !l && c(u, { className: 'price' }, '$', n.price.toFixed(2).toLocaleString())
        );
      }
      var d = Object(a.d)(r.a).withConfig({
          displayName: 'product-info__InformationWrapper',
          componentId: 'sc-1vodx6d-0',
        })(
          ['flex-direction:column;align-items:center;', ' ', ''],
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
    SPwB: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var i = n('q1tI'),
        o = n.n(i),
        a = n('vOnD'),
        r = o.a.createElement;
      function c(t) {
        var e = t.fill,
          n = void 0 === e ? '#EDA064' : e,
          i = t.imageSrc,
          o = void 0 === i ? ''.concat('https://media.development.trac.co', '/merch/images/49-368.jpg') : i,
          a = t.maskSrc,
          c = void 0 === a ? '/sweater.png' : a,
          d = t.haveHover;
        return r(
          l,
          { className: 'white' === n ? 'no-mask' : '', fill: n, haveHover: void 0 !== d && d },
          r('img', { className: 'main-image', src: o, alt: 'filter-main-image' }),
          'white' !== n && r('img', { className: 'mask-image', src: c, alt: 'filter-mask-image' })
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
    aagu: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var i = n('q1tI'),
        o = n.n(i),
        a = n('vOnD'),
        r = o.a.createElement;
      function c(t) {
        var e = t.className,
          n = t.image,
          i = t.alt,
          o = t.hasDarkBackground,
          a = t.isJsx,
          c = t.jsxImage,
          p = t.inCart;
        return r(
          l,
          { className: ''.concat(e, ' ').concat(p ? 'cart' : ''), hasDarkBackground: o },
          a ? r(d, { className: p ? 'cart' : '' }, r(s, null, c)) : r(u, { src: n, alt: i })
        );
      }
      var l = a.d.div.withConfig({ displayName: 'product-img__ImgContainer', componentId: 'sc-1wvkwid-0' })(
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
        s = a.d.div.withConfig({ displayName: 'product-img__ProductImg', componentId: 'sc-1wvkwid-2' })([
          'height:100%;',
        ]),
        u = a.d.img.withConfig({ displayName: 'product-img__ProductImgTag', componentId: 'sc-1wvkwid-3' })([
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
      var i = n('q1tI'),
        o = n.n(i),
        a = n('jtTr'),
        r = n('6Hpx'),
        c = n('MWXp'),
        l = n('42Rd'),
        d = n('/kYb'),
        s = n('20a2'),
        u = n('vOnD'),
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
              i = t.soldOut;
            return n || (void 0 !== i && i) ? 700 : 400;
          }
        ),
        y = u.d.div.withConfig({
          displayName: 'product-quantity-selector-dropdown__Container',
          componentId: 'rr9qe-1',
        })(['position:relative;margin-top:5px;']),
        _ = function (t) {
          var e = t.isLimited,
            n = t.quantity,
            i = t.onChange,
            o = t.active,
            a = e ? n : 1e3,
            r = g(Array(null !== a && void 0 !== a ? a : 0).keys()).map(function (t) {
              return { label: ''.concat(t + 1), value: t + 1 };
            });
          return b(
            y,
            null,
            e && n && n >= 10 ? b(x, null, 'Limited') : null,
            e && n && n < 10 ? b(x, { isRed: !0 }, 'Only ', n, ' remaining!') : null,
            0 === n ? b(x, { soldOut: !0 }, 'Sold Out') : null,
            b(w, {
              options: r,
              title: e ? 'Limited Quantity' : 'Select Quantity',
              value: o,
              customBorderRadius: '4px',
              onChange: function (t) {
                return i(t);
              },
            })
          );
        },
        C = n('zoQI'),
        I = o.a.createElement;
      var O = function (t) {
          var e = t.fill;
          return I(
            'svg',
            { width: '7', height: '7', viewBox: '0 0 7 7', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
            I('circle', { cx: '3.5', cy: '3.5', r: '3.5', fill: e })
          );
        },
        N = n('RHGb'),
        k = n('aagu'),
        z = n('WqaS'),
        j = n('ZMKu'),
        S = o.a.createElement;
      var D = Object(u.d)(j.b.div).withConfig({
          displayName: 'product-size-guide__SizeGuideWrapper',
          componentId: 'sc-4m4hc0-0',
        })(['']),
        q = Object(u.d)(z.a).withConfig({ displayName: 'product-size-guide__Row', componentId: 'sc-4m4hc0-1' })(
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
        E = n('hRDA'),
        W = n('SXEb'),
        P = n('wx14'),
        B = o.a.createElement;
      function M(t) {
        var e = t.props,
          n = t.onClick,
          i = Object(u.e)();
        return B(
          A,
          Object(P.a)({ width: '16', height: '16', viewBox: '0 0 16 16' }, e, { onClick: n }),
          B('circle', { cx: '8', cy: '8', r: '8', fill: i.colors.sidebarBackground }),
          B(
            'g',
            null,
            B('path', {
              fill: i.colors.primary,
              d: 'M7.83,4.57c.39,0,.76,.08,1.09,.24,.35,.16,.62,.38,.83,.68,.21,.3,.32,.66,.32,1.07,0,.25-.06,.48-.19,.66-.12,.19-.27,.36-.45,.51-.18,.15-.35,.29-.53,.42-.18,.12-.32,.25-.44,.37-.12,.12-.17,.25-.17,.39v.21h-1.23v-.39c0-.14,.06-.28,.17-.41,.12-.13,.26-.26,.43-.38l.51-.39c.18-.14,.32-.27,.43-.41,.12-.14,.18-.29,.18-.45,0-.27-.11-.49-.32-.65-.21-.17-.49-.25-.83-.25s-.65,.07-.94,.2c-.28,.12-.54,.32-.77,.6v-1.29c.2-.21,.46-.38,.78-.52,.33-.14,.7-.21,1.12-.21Z',
            }),
            B('path', {
              fill: i.colors.primary,
              d: 'M7.74,9.87c.21,0,.4,.08,.55,.23,.16,.15,.23,.33,.23,.55s-.08,.4-.23,.56-.33,.22-.55,.22-.4-.07-.56-.22c-.15-.16-.22-.34-.22-.56s.07-.4,.22-.55c.16-.16,.34-.23,.56-.23Z',
            })
          )
        );
      }
      var A = u.d.svg.withConfig({ displayName: 'question-mark__QuestionMark', componentId: 'sc-130dwmn-0' })([
          'cursor:pointer;',
        ]),
        X = i.createElement;
      function R(t) {
        var e = t.className,
          n = t.text,
          o = t.children,
          a = t.fixedOnMobile,
          r = t.hasClose,
          c = t.hasHelpIcon,
          l = t.titleText,
          d = Object(i.useState)(!1),
          s = d[0],
          p = d[1],
          f = Object(m.a)(),
          h = Object(u.e)();
        return X(
          H,
          { className: ''.concat(e, ' ').concat(a ? 'fixed' : null) },
          X(
            G,
            {
              onClick: function () {
                return p(!s);
              },
            },
            X(F, null, n),
            c ? X(M, null) : null
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
                    f && r
                      ? X(
                          Q,
                          { alignItems: 'center', justifyContent: 'space-between' },
                          l ? X(Z, null, l) : null,
                          X(E.a, {
                            onClick: function () {
                              return p(!s);
                            },
                            fill: h.colors.background,
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
        G = u.d.div.withConfig({ displayName: 'tooltip__TextWrapper', componentId: 'sc-1ha8c9q-1' })([
          'display:flex;justify-content:flex-start;align-items:center;gap:5px;',
        ]),
        F = u.d.span.withConfig({ displayName: 'tooltip__TooltipText', componentId: 'sc-1ha8c9q-2' })(
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
        Q = Object(u.d)(z.a).withConfig({ displayName: 'tooltip__Header', componentId: 'sc-1ha8c9q-5' })([
          'margin:4px 0 20px;',
        ]),
        K = n('fXhW'),
        V = o.a.createElement,
        U = Object(v.a)(),
        Y = ['Unisex Twill Hat', 'Custom Pin Buttons', 'Tough Cases'];
      function $(t) {
        var e = t.className,
          n = t.active,
          i = t.sizes,
          o = t.onChange,
          a = t.productName,
          r = void 0 === a ? '' : a,
          c = i.map(function (t) {
            return { label: t.name, value: t.id };
          }),
          l = Object(m.a)();
        return V(
          et,
          { className: ''.concat(e, ' ').concat(l ? '' : 'desktop') },
          l && !Y.includes(r)
            ? V(
                at,
                { fixedOnMobile: !0, hasClose: !0, titleText: 'Size Guide', text: 'Size Guide', hasHelpIcon: !0 },
                V(ot, { sizeItems: K, helpText: '*All measurements are in Inches. All pieces fit true to size.' })
              )
            : null,
          V(
            nt,
            null,
            V(
              it,
              { justifyContent: 'flex-end', alignItems: 'center' },
              l || Y.includes(r)
                ? null
                : V(
                    rt,
                    { text: 'Size Guide', hasHelpIcon: !0 },
                    V(ot, { sizeItems: K, helpText: '*All measurements are in Inches. All pieces fit true to size.' })
                  ),
              V(tt, {
                options: c,
                title: 'Select size',
                value: n,
                onChange: function (t) {
                  return o(t);
                },
                customBorderRadius: '4px',
              })
            )
          )
        );
      }
      var tt = Object(u.d)(U).withConfig({
          displayName: 'product-size-selector__StyledDropdownCtrl',
          componentId: 'sc-1fu7rya-0',
        })(['width:100%;']),
        et = u.d.div.withConfig({ displayName: 'product-size-selector__SizesWrappper', componentId: 'sc-1fu7rya-1' })([
          'margin:12px 0px 0;&.desktop{position:relative;}',
        ]),
        nt = Object(u.d)(z.a).withConfig({
          displayName: 'product-size-selector__SizeSelectorWrapper',
          componentId: 'sc-1fu7rya-2',
        })(['align-items:center !important;justify-content:space-between !important;margin:24px 0 0;']),
        it = Object(u.d)(z.a).withConfig({
          displayName: 'product-size-selector__FlexWrapper',
          componentId: 'sc-1fu7rya-3',
        })(['width:-webkit-fill-available;display:flex;flex-direction:column;']),
        ot = Object(u.d)(function (t) {
          var e = t.className,
            n = t.sizeItems,
            i = t.helpText;
          return S(
            D,
            { className: e },
            S(
              q,
              null,
              S(L, { itemsLength: 3 }),
              n[0].sizeOptions.map(function (t, e) {
                return S(L, { key: ''.concat(t.label, '-').concat(e), itemsLength: n.length }, t.label);
              })
            ),
            n.map(function (t, e) {
              return S(
                q,
                { key: ''.concat(t.label, '-').concat(e) },
                S(L, { itemsLength: n.length }, t.label),
                t.sizeOptions.map(function (t, e) {
                  return S(L, { key: ''.concat(t.label, '-').concat(e), itemsLength: n.length }, t.value);
                })
              );
            }),
            i ? S(q, { noLine: !0 }, S(T, null, i)) : null
          );
        }).withConfig({ displayName: 'product-size-selector__StyledSizeGuide', componentId: 'sc-1fu7rya-4' })([
          'width:535px;max-width:100%;',
        ]),
        at = Object(u.d)(R).withConfig({
          displayName: 'product-size-selector__StyledTooltip',
          componentId: 'sc-1fu7rya-5',
        })(['.tooltip-content{padding:24px;border-radius:2px;background-color:', ';}'], function (t) {
          return t.theme.colors.primary;
        }),
        rt = Object(u.d)(R).withConfig({
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
        lt = o.a.createElement;
      function dt(t) {
        var e = t.className,
          n = t.cartKey,
          o = t.product,
          a = t.onClick,
          r = Object(s.useRouter)(),
          c = Object(m.a)();
        Object(i.useEffect)(function () {
          window.analytics && window.analytics.track('Merch Product Viewed', { product_id: o.id });
        });
        var l = Object(i.useState)(),
          d = l[0],
          u = l[1],
          f = o.colors.find(function (t) {
            return 'White' == t.name || 'white' == t.name;
          }),
          h = Object(i.useState)(f || o.colors[0]),
          g = h[0],
          v = h[1],
          b = Object(i.useState)(),
          w = b[0],
          x = b[1],
          y = Object(p.a)(n).updateCart,
          C = !(!d || !w || (o.colors.length && !g.id)),
          I = function (t) {
            return 'https://media.development.trac.co/merch-preview/'.concat(t, '-mask.png');
          };
        return lt(
          st,
          { className: e, onClick: a },
          lt(
            gt,
            null,
            lt(
              'div',
              null,
              lt(k.a, {
                className: 'image-container',
                image: o.image,
                alt: o.title,
                hasDarkBackground: !0,
                isJsx: !0,
                jsxImage: lt(ct.a, {
                  fill: (null === g || void 0 === g ? void 0 : g.color) || 'white',
                  imageSrc: (f || o).image || '',
                  maskSrc: I(o.blueprintId || 0),
                }),
              })
            ),
            o.colors.length
              ? lt(
                  vt,
                  null,
                  o.colors.map(function (t, e) {
                    return lt(
                      bt,
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
          lt(N.a, { className: 'product-info', product: o, inDetail: !0 }),
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
                o.colors.map(function (t, e) {
                  return lt(
                    mt,
                    {
                      key: e,
                      onClick: function () {
                        return (function (t) {
                          var e = o.colors.find(function (e) {
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
                      maskSrc: I(o.blueprintId || 0),
                    })
                  );
                })
              )
            ),
            lt(
              'div',
              null,
              lt($, { sizes: o.sizes, active: d, onChange: u, productName: o.title }),
              lt(_, { isLimited: !o.unlimitedQty, quantity: o.qty, onChange: x, active: w })
            )
          ),
          lt(
            ut,
            {
              onClick: function () {
                var t = o.sizes.find(function (t) {
                  return t.id === d;
                });
                if (C && t) {
                  var e;
                  if (
                    (y('add', { product: o, size: t, color: g, quantity: null !== w && void 0 !== w ? w : 1 }),
                    window.analytics)
                  )
                    window.analytics.track('Merch Added To Cart', {
                      product_id: o.id,
                      variant_id:
                        null ===
                          (e = o.variants.find(function (e) {
                            return e.sizeId == t.id;
                          })) || void 0 === e
                          ? void 0
                          : e.id,
                      size_selected: t.name,
                      quantity: 1,
                    });
                  r.push('../cart');
                }
              },
              disabled: !C,
            },
            'Add to Cart'
          )
        );
      }
      var st = u.d.div.withConfig({ displayName: 'product-item-detail__ProductContainer', componentId: 'sc-98sn0-0' })([
          'width:100%;.product-info{margin:24px 0 48px;}',
        ]),
        ut = Object(u.d)(C.a).withConfig({ displayName: 'product-item-detail__CartButton', componentId: 'sc-98sn0-1' })(
          ['width:100%;height:70px;']
        ),
        pt = u.d.div.withConfig({ displayName: 'product-item-detail__VariantWrap', componentId: 'sc-98sn0-2' })(
          ['display:grid;width:fit-content;grid-gap:5px;grid-template-columns:repeat( ', ',1fr );'],
          function (t) {
            return t.isMobile ? '5' : '4';
          }
        ),
        mt = u.d.div.withConfig({ displayName: 'product-item-detail__VariantItemWrap', componentId: 'sc-98sn0-3' })(
          ['width:60px;height:60px;:hover{cursor:pointer;}border:', ';'],
          function (t) {
            return t.isSelected ? '2px solid #A2D743' : '';
          }
        ),
        ft = u.d.h4.withConfig({ displayName: 'product-item-detail__Title', componentId: 'sc-98sn0-4' })(
          ['font-family:Inter;font-style:normal;font-weight:normal;font-size:12px;opacity:0.5;color:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        ht = u.d.div.withConfig({ displayName: 'product-item-detail__DetailsWrap', componentId: 'sc-98sn0-5' })(
          ['display:grid;grid-template-columns:repeat( ', ',1fr );padding-bottom:32px;'],
          function (t) {
            return t.isMobile ? '1' : '2';
          }
        ),
        gt = u.d.div.withConfig({ displayName: 'product-item-detail__ImageWrap', componentId: 'sc-98sn0-6' })([
          'position:relative;',
        ]),
        vt = u.d.div.withConfig({ displayName: 'product-item-detail__DotSelect', componentId: 'sc-98sn0-7' })([
          'display:flex;justify-content:center;position:absolute;bottom:10px;left:45%;:hover{cursor:pointer;}',
        ]),
        bt = u.d.div.withConfig({ displayName: 'product-item-detail__DotSelectItem', componentId: 'sc-98sn0-8' })([
          'padding:2px;',
        ]),
        wt = o.a.createElement,
        xt = !0;
      function yt(t) {
        var e = Object(i.useState)(t.siteData)[0],
          n = Object(a.a)(t.siteData).pageData;
        return t.product
          ? wt(
              o.a.Fragment,
              null,
              wt(c.a, { pageData: n }),
              wt(
                l.a,
                { theme: e ? e.theme : void 0 },
                wt(
                  r.a,
                  { pageData: n, hideNavbar: !0, hasBackground: !0, action: wt(d.a, null) },
                  wt(dt, { product: t.product, cartKey: e.ownerId })
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
        return d;
      });
      var i = n('rePB'),
        o = n('q1tI');
      function a(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function r(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? a(Object(n), !0).forEach(function (e) {
                Object(i.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (e) {
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
            var n, i;
            return (
              e.product.id === t.product.id &&
              e.size.id === t.size.id &&
              (null === (n = e.color) || void 0 === n ? void 0 : n.id) ===
                (null === (i = t.color) || void 0 === i ? void 0 : i.id)
            );
          };
        },
        d = function (t) {
          var e = 'TRAC_CART.'.concat(t),
            n = Object(o.useState)(
              (function (t) {
                if ('undefined' !== typeof localStorage) {
                  var e = localStorage.getItem(t);
                  if (e) return JSON.parse(e);
                }
                return [];
              })(e)
            ),
            i = n[0],
            a = n[1],
            d = function (t) {
              return c(e, t), a(t), t;
            },
            s = i.reduce(function (t, e) {
              return t + e.product.price * e.quantity;
            }, 0);
          return {
            cart: i,
            total: s,
            updateCart: function (t, e) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                o = i.find(l(e));
              o && ('add' === t && (e.quantity += n), 'remove' === t && (e.quantity -= n));
              var a = i
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
