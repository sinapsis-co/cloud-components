_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [16],
  {
    '2sFz': function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch/detail/[productId]',
        function () {
          return n('baZN');
        },
      ]);
    },
    baZN: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, '__N_SSP', function () {
          return _t;
        }),
        n.d(e, 'default', function () {
          return Ct;
        });
      var i = n('q1tI'),
        o = n.n(i),
        a = n('jtTr'),
        r = n('6Hpx'),
        l = n('MWXp'),
        c = n('42Rd'),
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
      var b = n('XGvB'),
        v = o.a.createElement,
        y = Object(b.a)(),
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
        w = u.d.div.withConfig({
          displayName: 'product-quantity-selector-dropdown__Container',
          componentId: 'rr9qe-1',
        })(['position:relative;']),
        _ = function (t) {
          var e = t.isLimited,
            n = t.quantity,
            i = t.onChange,
            o = t.active,
            a = e ? n : 1e3,
            r = g(Array(null !== a && void 0 !== a ? a : 0).keys()).map(function (t) {
              return { label: ''.concat(t + 1), value: t + 1 };
            });
          return v(
            w,
            null,
            e && n && n >= 10 ? v(x, null, 'Limited') : null,
            e && n && n < 10 ? v(x, { isRed: !0 }, 'Only ', n, ' remaining!') : null,
            0 === n ? v(x, { soldOut: !0 }, 'Sold Out') : null,
            v(y, {
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
      var N = function (t) {
          var e = t.fill;
          return I(
            'svg',
            { width: '7', height: '7', viewBox: '0 0 7 7', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
            I('circle', { cx: '3.5', cy: '3.5', r: '3.5', fill: e })
          );
        },
        z = n('RHGb'),
        O = n('aagu'),
        j = n('WqaS'),
        k = n('ZMKu'),
        S = o.a.createElement;
      var L = Object(u.d)(k.b.div).withConfig({
          displayName: 'product-size-guide__SizeGuideWrapper',
          componentId: 'sc-4m4hc0-0',
        })(['']),
        T = Object(u.d)(j.a).withConfig({ displayName: 'product-size-guide__Row', componentId: 'sc-4m4hc0-1' })(
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
        q = u.d.span.withConfig({ displayName: 'product-size-guide__Item', componentId: 'sc-4m4hc0-2' })(
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
        W = u.d.p.withConfig({ displayName: 'product-size-guide__HelpText', componentId: 'sc-4m4hc0-3' })(
          ['font-size:12px;font-weight:400;line-height:14px;text-align:left;color:', ';'],
          function (t) {
            return t.theme.colors.background;
          }
        ),
        E = n('hRDA'),
        D = n('SXEb'),
        M = n('wx14'),
        X = o.a.createElement;
      function A(t) {
        var e = t.props,
          n = t.onClick,
          i = Object(u.e)();
        return X(
          B,
          Object(M.a)({ width: '16', height: '16', viewBox: '0 0 16 16' }, e, { onClick: n }),
          X('circle', { cx: '8', cy: '8', r: '8', fill: i.colors.sidebarBackground }),
          X(
            'g',
            null,
            X('path', {
              fill: i.colors.primary,
              d: 'M7.83,4.57c.39,0,.76,.08,1.09,.24,.35,.16,.62,.38,.83,.68,.21,.3,.32,.66,.32,1.07,0,.25-.06,.48-.19,.66-.12,.19-.27,.36-.45,.51-.18,.15-.35,.29-.53,.42-.18,.12-.32,.25-.44,.37-.12,.12-.17,.25-.17,.39v.21h-1.23v-.39c0-.14,.06-.28,.17-.41,.12-.13,.26-.26,.43-.38l.51-.39c.18-.14,.32-.27,.43-.41,.12-.14,.18-.29,.18-.45,0-.27-.11-.49-.32-.65-.21-.17-.49-.25-.83-.25s-.65,.07-.94,.2c-.28,.12-.54,.32-.77,.6v-1.29c.2-.21,.46-.38,.78-.52,.33-.14,.7-.21,1.12-.21Z',
            }),
            X('path', {
              fill: i.colors.primary,
              d: 'M7.74,9.87c.21,0,.4,.08,.55,.23,.16,.15,.23,.33,.23,.55s-.08,.4-.23,.56-.33,.22-.55,.22-.4-.07-.56-.22c-.15-.16-.22-.34-.22-.56s.07-.4,.22-.55c.16-.16,.34-.23,.56-.23Z',
            })
          )
        );
      }
      var B = u.d.svg.withConfig({ displayName: 'question-mark__QuestionMark', componentId: 'sc-130dwmn-0' })([
          'cursor:pointer;',
        ]),
        R = i.createElement;
      function H(t) {
        var e = t.className,
          n = t.text,
          o = t.children,
          a = t.fixedOnMobile,
          r = t.hasClose,
          l = t.hasHelpIcon,
          c = t.titleText,
          d = Object(i.useState)(!1),
          s = d[0],
          p = d[1],
          m = Object(u.e)();
        return R(
          G,
          { className: ''.concat(e, ' ').concat(a ? 'fixed' : null) },
          R(
            P,
            {
              onClick: function () {
                return p(!s);
              },
            },
            R(Z, null, n),
            l ? R(A, null) : null
          ),
          R(
            k.a,
            null,
            s
              ? R(
                  D.a,
                  null,
                  R(
                    F,
                    { className: 'tooltip-content' },
                    r
                      ? R(
                          J,
                          { alignItems: 'center', justifyContent: 'space-between' },
                          c ? R(Q, null, c) : null,
                          R(K, {
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
      var G = u.d.div.withConfig({ displayName: 'tooltip__TooltipWrapper', componentId: 'sc-1ha8c9q-0' })([
          '&.fixed{.tooltip-content{z-index:999;position:fixed;right:0;bottom:0;left:0;transform:none;}}',
        ]),
        P = u.d.div.withConfig({ displayName: 'tooltip__TextWrapper', componentId: 'sc-1ha8c9q-1' })([
          'display:flex;justify-content:flex-start;align-items:center;gap:5px;',
        ]),
        Z = u.d.span.withConfig({ displayName: 'tooltip__TooltipText', componentId: 'sc-1ha8c9q-2' })(
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
        F = u.d.div.withConfig({ displayName: 'tooltip__TooltipContent', componentId: 'sc-1ha8c9q-3' })(
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
        Q = u.d.h4.withConfig({ displayName: 'tooltip__Title', componentId: 'sc-1ha8c9q-4' })(
          ['font-size:14px;font-weight:700;line-height:17px;color:', ';'],
          function (t) {
            return t.theme.colors.background;
          }
        ),
        J = Object(u.d)(j.a).withConfig({ displayName: 'tooltip__Header', componentId: 'sc-1ha8c9q-5' })([
          'margin:4px 0 20px;',
        ]),
        K = Object(u.d)(E.a).withConfig({ displayName: 'tooltip__StyledCloseIcon', componentId: 'sc-1ha8c9q-6' })([
          'cursor:pointer;',
        ]),
        V = n('fXhW'),
        U = o.a.createElement,
        Y = Object(b.a)(),
        $ = ['Unisex Twill Hat', 'Custom Pin Buttons', 'Tough Cases'];
      function tt(t) {
        var e = t.className,
          n = t.active,
          i = t.sizes,
          o = t.onChange,
          a = t.productName,
          r = void 0 === a ? '' : a,
          l = i.map(function (t) {
            return { label: t.name, value: t.id };
          }),
          c = Object(m.a)();
        return U(
          nt,
          { className: ''.concat(e, ' ').concat(c ? '' : 'desktop') },
          c && !$.includes(r)
            ? U(
                rt,
                { fixedOnMobile: !0, hasClose: !0, titleText: 'Size Guide', text: 'Size Guide', hasHelpIcon: !0 },
                U(at, { sizeItems: V, helpText: '*All measurements are in Inches. All pieces fit true to size.' })
              )
            : null,
          U(
            it,
            null,
            U(
              ot,
              { justifyContent: 'flex-end', alignItems: 'center' },
              c || $.includes(r)
                ? null
                : U(
                    lt,
                    { text: 'Size Guide', hasHelpIcon: !0, hasClose: !0 },
                    U(at, { sizeItems: V, helpText: '*All measurements are in Inches. All pieces fit true to size.' })
                  ),
              U(et, {
                options: l,
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
      var et = Object(u.d)(Y).withConfig({
          displayName: 'product-size-selector__StyledDropdownCtrl',
          componentId: 'sc-1fu7rya-0',
        })(['width:100%;']),
        nt = u.d.div.withConfig({ displayName: 'product-size-selector__SizesWrappper', componentId: 'sc-1fu7rya-1' })([
          'margin:12px 0px 0;&.desktop{position:relative;}',
        ]),
        it = Object(u.d)(j.a).withConfig({
          displayName: 'product-size-selector__SizeSelectorWrapper',
          componentId: 'sc-1fu7rya-2',
        })(['align-items:center !important;justify-content:space-between !important;']),
        ot = Object(u.d)(j.a).withConfig({
          displayName: 'product-size-selector__FlexWrapper',
          componentId: 'sc-1fu7rya-3',
        })(['width:-webkit-fill-available;display:flex;flex-direction:column;']),
        at = Object(u.d)(function (t) {
          var e = t.className,
            n = t.sizeItems,
            i = t.helpText;
          return S(
            L,
            { className: e },
            S(
              T,
              null,
              S(q, { itemsLength: 3 }),
              n[0].sizeOptions.map(function (t, e) {
                return S(q, { key: ''.concat(t.label, '-').concat(e), itemsLength: n.length }, t.label);
              })
            ),
            n.map(function (t, e) {
              return S(
                T,
                { key: ''.concat(t.label, '-').concat(e) },
                S(q, { itemsLength: n.length }, t.label),
                t.sizeOptions.map(function (t, e) {
                  return S(q, { key: ''.concat(t.label, '-').concat(e), itemsLength: n.length }, t.value);
                })
              );
            }),
            i ? S(T, { noLine: !0 }, S(W, null, i)) : null
          );
        }).withConfig({ displayName: 'product-size-selector__StyledSizeGuide', componentId: 'sc-1fu7rya-4' })([
          'width:535px;max-width:100%;',
        ]),
        rt = Object(u.d)(H).withConfig({
          displayName: 'product-size-selector__StyledTooltip',
          componentId: 'sc-1fu7rya-5',
        })(
          ['margin-bottom:10px;.tooltip-content{padding:24px;border-radius:2px;background-color:', ';}'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        lt = Object(u.d)(H).withConfig({
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
        dt = o.a.createElement;
      function st(t) {
        var e = t.className,
          n = t.cartKey,
          o = t.product,
          a = Object(s.useRouter)(),
          r = Object(m.a)();
        Object(i.useEffect)(function () {
          window.analytics && window.analytics.track('Merch Product Viewed', { product_id: o.id });
        });
        var l = Object(i.useState)(),
          c = l[0],
          d = l[1],
          u = o.colors.find(function (t) {
            return 'White' == t.name || 'white' == t.name;
          }),
          f = Object(i.useState)(u || o.colors[0]),
          h = f[0],
          g = f[1],
          b = Object(i.useState)(),
          v = b[0],
          y = b[1],
          x = Object(p.a)(n),
          w = x.updateCart,
          C = x.cart,
          I = !(!c || !v || (o.colors.length && !h.id)),
          j = C.find(function (t) {
            return t.product.id === o.id;
          }),
          k = function (t) {
            return 'https://media.development.trac.co/merch-preview/'.concat(t, '-mask.png');
          };
        return dt(
          ut,
          { className: e },
          dt(
            bt,
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
                jsxImage: dt(ct.a, {
                  fill: (null === h || void 0 === h ? void 0 : h.color) || 'white',
                  imageSrc: (u || o).image || '',
                  maskSrc: k(o.blueprintId || 0),
                }),
              })
            ),
            o.colors.length
              ? dt(
                  vt,
                  null,
                  o.colors.map(function (t, e) {
                    return dt(
                      yt,
                      {
                        key: e,
                        onClick: function () {
                          g(t);
                        },
                      },
                      t.id == h.id ? dt(N, { fill: 'white' }) : dt(N, { fill: 'grey' })
                    );
                  })
                )
              : null
          ),
          dt(z.a, { className: 'product-info', product: o, inDetail: !0 }),
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
                    dt(ct.a, {
                      fill: t.color || 'white',
                      imageSrc: (null === u || void 0 === u ? void 0 : u.image) || '',
                      maskSrc: k(o.blueprintId || 0),
                    })
                  );
                })
              )
            ),
            dt(
              xt,
              null,
              dt(tt, { sizes: o.sizes, active: c, onChange: d, productName: o.title }),
              dt(_, { isLimited: !o.unlimitedQty, quantity: o.qty, onChange: y, active: v })
            )
          ),
          dt(
            pt,
            {
              onClick: function () {
                var t = o.sizes.find(function (t) {
                  return t.id === c;
                });
                if (I && t) {
                  var e, n;
                  if (
                    (w('add', {
                      product: o,
                      size: t,
                      color: h,
                      quantity:
                        j && v
                          ? null !== (e = v + (null === j || void 0 === j ? void 0 : j.quantity)) && void 0 !== e
                            ? e
                            : 1
                          : null !== v && void 0 !== v
                          ? v
                          : 1,
                    }),
                    window.analytics)
                  )
                    window.analytics.track('Merch Added To Cart', {
                      product_id: o.id,
                      variant_id:
                        null ===
                          (n = o.variants.find(function (e) {
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
              disabled: !I,
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
        bt = u.d.div.withConfig({ displayName: 'product-item-detail__ImageWrap', componentId: 'sc-98sn0-6' })([
          'position:relative;',
        ]),
        vt = u.d.div.withConfig({ displayName: 'product-item-detail__DotSelect', componentId: 'sc-98sn0-7' })([
          'display:flex;justify-content:center;position:absolute;bottom:10px;left:45%;:hover{cursor:pointer;}',
        ]),
        yt = u.d.div.withConfig({ displayName: 'product-item-detail__DotSelectItem', componentId: 'sc-98sn0-8' })([
          'padding:2px;',
        ]),
        xt = u.d.div.withConfig({ displayName: 'product-item-detail__FiltersWrapper', componentId: 'sc-98sn0-9' })([
          'display:flex;flex-direction:column;gap:12px;',
        ]),
        wt = o.a.createElement,
        _t = !0;
      function Ct(t) {
        var e = Object(i.useState)(t.siteData)[0],
          n = Object(a.a)(t.siteData).pageData;
        return t.product
          ? wt(
              o.a.Fragment,
              null,
              wt(l.a, { pageData: n }),
              wt(
                c.a,
                { theme: e ? e.theme : void 0 },
                wt(
                  r.a,
                  { pageData: n, hideNavbar: !0, hasBackground: !0, action: wt(d.a, null) },
                  wt(st, { product: t.product, cartKey: e.ownerId })
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
  },
  [['2sFz', 0, 2, 3, 1, 4, 6, 7]],
]);
