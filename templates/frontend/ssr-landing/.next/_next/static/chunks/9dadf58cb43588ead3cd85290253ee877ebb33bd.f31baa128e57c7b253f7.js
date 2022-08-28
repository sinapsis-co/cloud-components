(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [13],
  {
    '+8Ae': function (t, n, e) {
      'use strict';
      e.d(n, 'a', function () {
        return E;
      });
      var i = e('q1tI'),
        r = e.n(i),
        o = e('vOnD'),
        a = e('aagu'),
        c = e('RHGb'),
        u = e('WqaS'),
        l = e('wx14'),
        s = r.a.createElement;
      function p(t) {
        var n = t.props,
          e = t.isPlus,
          i = t.onClick;
        return s(
          d,
          Object(l.a)({ width: '40', height: '40', viewBox: '0 0 40 40' }, n, { onClick: i }),
          s(m, {
            opacity: '0.1',
            d: 'M36 40H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h32c2.21 0 4 1.79 4 4v32C40 38.21 38.21 40 36 40zM4 1C2.35 1 1 2.35 1 4v32c0 1.65 1.35 3 3 3h32c1.65 0 3-1.35 3-3V4c0-1.65-1.35-3-3-3H4z',
          }),
          s(
            m,
            e
              ? {
                  opacity: '0.5',
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M20 14c0.6 0 1 0.5 1 1v4h4c0.6 0 1 0.5 1 1s-0.4 1-1 1h-4v4c0 0.6-0.4 1-1 1s-1-0.4-1-1v-4h-4c-0.5 0-1-0.4-1-1s0.5-1 1-1h4v-4C19 14.5 19.5 14 20 14z',
                }
              : { opacity: '0.5', d: 'M25 19H15c-0.5 0-1 0.5-1 1s0.5 1 1 1h10c0.6 0 1-0.4 1-1S25.6 19 25 19z' }
          )
        );
      }
      var d = o.e.svg.withConfig({ displayName: 'quantity__QuantitySvg', componentId: 'sc-1spopsv-0' })([
          'cursor:pointer;',
        ]),
        m = o.e.path.withConfig({ displayName: 'quantity__QuantityPath', componentId: 'sc-1spopsv-1' })(
          ['fill:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        f = r.a.createElement;
      function h(t) {
        var n = t.className,
          e = t.quantity,
          i = t.onChange;
        return f(
          g,
          { className: n },
          f(p, {
            onClick: function () {
              return i(-1);
            },
          }),
          f(v, null, e),
          f(p, {
            onClick: function () {
              return i(1);
            },
            isPlus: !0,
          })
        );
      }
      var g = Object(o.e)(u.a).withConfig({
          displayName: 'product-quantity-selector__QuantityWrapper',
          componentId: 'sc-9xduq-0',
        })(['justify-content:flex-start;align-items:center;']),
        v = o.e.h6.withConfig({ displayName: 'product-quantity-selector__QuantityText', componentId: 'sc-9xduq-1' })(
          ['margin:0 18px;text-align:center;font-size:16px;min-width:24px;opacity:0.5;color:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        x = r.a.createElement;
      function w(t) {
        var n = t.props,
          e = t.onClick;
        return x(
          y,
          Object(l.a)({ width: '20', height: '20', viewBox: '0 0 20 20', onClick: e }, n),
          x(b, {
            d: 'M17.5 4.3h-1.7 -1.7V3.3c0-0.6-0.2-1.2-0.7-1.7 -0.5-0.5-1.1-0.7-1.7-0.7H8.3c-0.6 0-1.2 0.3-1.7 0.7C6.2 2.1 5.9 2.7 5.9 3.3v0.9H4.2 2.5C2.1 4.3 1.8 4.6 1.8 5S2.1 5.8 2.5 5.8h0.9v10.9c0 0.7 0.3 1.3 0.7 1.7 0.5 0.5 1.1 0.7 1.7 0.7h8.3c0.7 0 1.3-0.2 1.7-0.7 0.5-0.5 0.7-1.1 0.7-1.7V5.8h0.9c0.4 0 0.8-0.3 0.8-0.7S17.9 4.3 17.5 4.3zM7.4 3.3c0-0.2 0.1-0.5 0.3-0.6 0.2-0.2 0.4-0.3 0.7-0.3h3.3c0.3 0 0.5 0.1 0.7 0.3s0.3 0.4 0.3 0.7v0.9H7.4V3.3zM15.1 16.7c0 0.3-0.1 0.5-0.3 0.7s-0.4 0.3-0.6 0.3H5.8c-0.2 0-0.5-0.1-0.6-0.3s-0.3-0.4-0.3-0.6V5.8h10.2V16.7z',
          }),
          x(b, {
            d: 'M8.3 14.9c0.4 0 0.8-0.3 0.8-0.7v-5c0-0.4-0.3-0.7-0.7-0.7S7.6 8.8 7.6 9.2v5C7.6 14.6 7.9 14.9 8.3 14.9z',
          }),
          x(b, {
            d: 'M11.7 14.9c0.4 0 0.8-0.3 0.8-0.7v-5c0-0.4-0.3-0.7-0.7-0.7s-0.7 0.3-0.7 0.8v5C10.9 14.6 11.3 14.9 11.7 14.9z',
          })
        );
      }
      var y = o.e.svg.withConfig({ displayName: 'trash__TrashSvg', componentId: 'sc-10bnm6z-0' })(['']),
        b = o.e.path.withConfig({ displayName: 'trash__TrashPath', componentId: 'sc-10bnm6z-1' })(
          ['fill:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        C = r.a.createElement;
      function _(t) {
        var n = t.className,
          e = t.onClick;
        return C(k, { className: n }, C(w, { onClick: e }));
      }
      var k = Object(o.e)(u.a).withConfig({
          displayName: 'product-remove-item__TrashWrapper',
          componentId: 'sc-1i8vi90-0',
        })(
          [
            'cursor:pointer;justify-content:center;align-items:center;width:40px;height:40px;border-radius:4px;background-color:',
            ';transition:background-color ',
            ';&:hover{background-color:',
            ';}',
          ],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            var n = t.theme;
            return ''.concat(n.transitions.duration, ' ').concat(n.transitions.type);
          },
          function (t) {
            return t.theme.colors.itemBackgroundHover;
          }
        ),
        N = r.a.createElement;
      function O(t) {
        var n = t.className,
          e = t.item,
          i = t.noControls,
          r = t.onChangeQuantity,
          o = t.onRemove,
          u = e.product,
          l = e.quantity;
        return N(
          I,
          { className: n },
          N(a.a, { className: 'image-container', image: u.image, alt: u.title, square: 160 }),
          N(
            j,
            { noControls: i },
            N(c.a, { className: 'product-info', product: u, noPrice: i }),
            i
              ? N(S, null, 'Qty: $', l)
              : N(
                  q,
                  { justifyContent: 'space-between', alignItems: 'center' },
                  N(h, { quantity: e.quantity, onChange: r }),
                  N(_, { onClick: o })
                )
          )
        );
      }
      var I = Object(o.e)(u.a).withConfig({
          displayName: 'product-cart-item__ProductContainer',
          componentId: 'sc-1tvca32-0',
        })(
          [
            'width:100%;flex-direction:row;@media (max-width:',
            '){flex-direction:column;}.image-container{flex-shrink:0;}',
          ],
          function (t) {
            var n = t.theme;
            return ''.concat(n.breakpoints.tablet, 'px');
          }
        ),
        j = Object(o.e)(u.a).withConfig({ displayName: 'product-cart-item__InfoWrapper', componentId: 'sc-1tvca32-1' })(
          [
            'margin-left:24px;flex-direction:column;justify-content:space-between;flex-grow:1;@media (max-width:',
            '){margin-top:24px;margin-left:0;}',
            '',
          ],
          function (t) {
            var n = t.theme;
            return ''.concat(n.breakpoints.tablet, 'px');
          },
          function (t) {
            return t.noControls ? '\n    justify-content: flex-start;\n  ' : null;
          }
        ),
        q = Object(o.e)(u.a).withConfig({
          displayName: 'product-cart-item__ActionsWrapper',
          componentId: 'sc-1tvca32-2',
        })(['@media (max-width:', '){margin-top:24px;}'], function (t) {
          var n = t.theme;
          return ''.concat(n.breakpoints.tablet, 'px');
        }),
        S = o.e.p.withConfig({ displayName: 'product-cart-item__QuantityNumber', componentId: 'sc-1tvca32-3' })(
          ['font-size:16px;font-weight:400;color:', ';margin:8px 0 0;'],
          function (t) {
            return t.theme.colors.secondary;
          }
        ),
        z = e('pZhd'),
        P = r.a.createElement;
      function E(t) {
        var n = t.className,
          e = t.noControls,
          r = t.cartKey,
          o = t.onCartChanged,
          a = Object(z.a)(r),
          c = a.cart,
          u = a.updateCart;
        return (
          Object(i.useEffect)(
            function () {
              o(c);
            },
            [c, o]
          ),
          P(
            H,
            { className: n },
            c.map(function (t, n) {
              return P(O, {
                key: n,
                className: 'cart-item',
                item: t,
                noControls: e,
                onChangeQuantity: function (n) {
                  return (function (t, n) {
                    u(t > 0 ? 'add' : 'remove', n, Math.abs(t)),
                      window.analytics.track('Checkout Updated', {
                        category: 'Merch',
                        checkout_id: n.product.id,
                        field_index: 1,
                        field_name: 'Quantity',
                        field_value: t,
                      });
                  })(n, t);
                },
                onRemove: function () {
                  return u('remove', t, t.quantity);
                },
              });
            })
          )
        );
      }
      var H = o.e.div.withConfig({ displayName: 'product-cart-list__CartList', componentId: 'h81uri-0' })(
        [
          "width:100%;.cart-item{padding:32px 0;position:relative;&:after{content:'';position:absolute;right:0;bottom:0;left:0;height:1px;opacity:0.1;background-color:",
          ';}&:first-child{padding-top:0;}&:last-child{padding-bottom:0;&:after{content:none;}}}',
        ],
        function (t) {
          return t.theme.colors.primary;
        }
      );
    },
    '/kYb': function (t, n, e) {
      'use strict';
      e.d(n, 'a', function () {
        return g;
      });
      var i = e('q1tI'),
        r = e.n(i),
        o = e('vOnD'),
        a = e('WqaS'),
        c = e('wx14'),
        u = e('ZMKu'),
        l = r.a.createElement;
      function s(t) {
        return l(
          p,
          { initial: 'rest', whileHover: 'hover', whileTap: 'tap', animate: 'rest' },
          l(
            'svg',
            Object(c.a)({ width: '40', height: '40', viewBox: '0 0 50 50' }, t),
            l(d, { cx: '25', cy: '25', r: '25' }),
            l(m, {
              variants: { rest: { x: 0, scale: 1 }, hover: { x: -2, scale: 1.0625 }, tap: { x: -100, scale: 0.95 } },
              d: 'M31 24h-9.6l3.3-3.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5 5c-0.1 0.1-0.2 0.2-0.2 0.3 -0.1 0.2-0.1 0.5 0 0.8 0.1 0.1 0.1 0.2 0.2 0.3l5 5C23.5 30.9 23.7 31 24 31s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4L21.4 26H31c0.6 0 1-0.4 1-1S31.6 24 31 24z',
            })
          )
        );
      }
      var p = Object(o.e)(u.b.div).withConfig({ displayName: 'back__IconWrapper', componentId: 'om8no8-0' })(
          ['cursor:pointer;width:40px;height:40px;&:hover{circle{fill:', ';}}'],
          function (t) {
            return t.theme.colors.itemBackgroundHover;
          }
        ),
        d = o.e.circle.withConfig({ displayName: 'back__StyledCircle', componentId: 'om8no8-1' })(
          ['fill:', ';transition:fill ', ';'],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            var n = t.theme;
            return ''.concat(n.transitions.duration, ' ').concat(n.transitions.type);
          }
        ),
        m = Object(o.e)(u.b.path).withConfig({ displayName: 'back__StyledPath', componentId: 'om8no8-2' })(
          ['fill:', ';'],
          function (t) {
            return t.theme.colors.icon;
          }
        ),
        f = e('20a2'),
        h = r.a.createElement;
      function g(t) {
        var n = t.artistName,
          e = t.title,
          i = t.onClick,
          r = Object(f.useRouter)();
        return h(
          v,
          { alignItems: 'center' },
          h(s, {
            onClick:
              i ||
              function () {
                return r.back();
              },
          }),
          h(x, null, e || n)
        );
      }
      var v = Object(o.e)(a.a).withConfig({
          displayName: 'back-navigation__NavigationContainer',
          componentId: 'kfmxgl-0',
        })(['margin-bottom:30px;@media (max-width:', '){margin-bottom:15px;}'], function (t) {
          var n = t.theme;
          return ''.concat(n.breakpoints.tablet, 'px');
        }),
        x = o.e.h6.withConfig({ displayName: 'back-navigation__Title', componentId: 'kfmxgl-1' })(
          ['font-size:14px;font-weight:700;text-transform:uppercase;margin-left:18px;opacity:0.7;color:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        );
    },
    'A/OS': function (t, n, e) {
      'use strict';
      e.d(n, 'a', function () {
        return u;
      });
      var i = e('q1tI'),
        r = e.n(i),
        o = e('vOnD'),
        a = e('WqaS'),
        c = r.a.createElement;
      function u(t) {
        var n = t.className,
          e = t.subtotal,
          i = t.shipping;
        return c(
          l,
          { className: n },
          c(s, null, c(d, null, 'Subtotal'), c(m, null, '$', e.toFixed(2))),
          void 0 !== i && c(s, null, c(d, null, 'Shipping'), c(m, null, i ? '$ '.concat(i.toFixed(2)) : 'Free')),
          c(p, null),
          c(
            s,
            null,
            c(d, null, 'Total'),
            c(
              m,
              null,
              '$',
              (function (t, n) {
                return n ? (t + n).toFixed(2) : t.toFixed(2);
              })(e, i)
            )
          )
        );
      }
      var l = o.e.div.withConfig({
          displayName: 'product-cart-total__CartTotalContainer',
          componentId: 'sc-1svph4p-0',
        })(['width:100%;margin:48px 0;@media (max-width:', '){margin:32px 0;}'], function (t) {
          var n = t.theme;
          return ''.concat(n.breakpoints.tablet, 'px');
        }),
        s = Object(o.e)(a.a).withConfig({ displayName: 'product-cart-total__Row', componentId: 'sc-1svph4p-1' })([
          'align-items:center;justify-content:space-between;margin-bottom:14px;&:last-child{margin-bottom:0;}',
        ]),
        p = o.e.hr.withConfig({ displayName: 'product-cart-total__SeparatorLine', componentId: 'sc-1svph4p-2' })(
          ['margin:24px 0;border:none;height:1px;opacity:0.1;background-color:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        d = o.e.h6.withConfig({ displayName: 'product-cart-total__Text', componentId: 'sc-1svph4p-3' })(
          ['font-size:14px;font-weight:400;line-height:22px;margin:0 0.5rem 0 0;opacity:0.7;color:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        m = o.e.h5.withConfig({ displayName: 'product-cart-total__Price', componentId: 'sc-1svph4p-4' })(
          ['font-size:14px;font-weight:700;line-height:22px;margin:0;color:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        );
    },
    'HaE+': function (t, n, e) {
      'use strict';
      function i(t, n, e, i, r, o, a) {
        try {
          var c = t[o](a),
            u = c.value;
        } catch (l) {
          return void e(l);
        }
        c.done ? n(u) : Promise.resolve(u).then(i, r);
      }
      function r(t) {
        return function () {
          var n = this,
            e = arguments;
          return new Promise(function (r, o) {
            var a = t.apply(n, e);
            function c(t) {
              i(a, r, o, c, u, 'next', t);
            }
            function u(t) {
              i(a, r, o, c, u, 'throw', t);
            }
            c(void 0);
          });
        };
      }
      e.d(n, 'a', function () {
        return r;
      });
    },
    RHGb: function (t, n, e) {
      'use strict';
      e.d(n, 'a', function () {
        return u;
      });
      var i = e('q1tI'),
        r = e.n(i),
        o = e('vOnD'),
        a = e('WqaS'),
        c = r.a.createElement;
      function u(t) {
        var n = t.className,
          e = t.product,
          i = t.inDetail,
          r = t.noPrice;
        return c(
          l,
          { className: n, inDetail: i },
          c(s, { className: 'title' }, e.title),
          !r && c(p, { className: 'price' }, '$', e.price.toFixed(2).toLocaleString())
        );
      }
      var l = Object(o.e)(a.a).withConfig({
          displayName: 'product-info__InformationWrapper',
          componentId: 'sc-1vodx6d-0',
        })(['flex-direction:column;', ''], function (t) {
          return t.inDetail
            ? Object(o.d)(
                [
                  '.title{font-size:40px;line-height:40px;font-weight:800;margin:24px 0;@media (max-width:',
                  '){font-size:32px;margin:12px 0;}}.price{order:-1;font-size:24px;margin-top:0;@media (max-width:',
                  '){font-size:14px;}}',
                ],
                function (t) {
                  var n = t.theme;
                  return ''.concat(n.breakpoints.tablet, 'px');
                },
                function (t) {
                  var n = t.theme;
                  return ''.concat(n.breakpoints.tablet, 'px');
                }
              )
            : null;
        }),
        s = o.e.h4.withConfig({ displayName: 'product-info__Title', componentId: 'sc-1vodx6d-1' })(
          [
            'color:',
            ';font-size:16px;font-weight:600;line-height:24px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;@media (max-width:',
            '){font-size:16px;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var n = t.theme;
            return ''.concat(n.breakpoints.tablet, 'px');
          }
        ),
        p = o.e.h6.withConfig({ displayName: 'product-info__Price', componentId: 'sc-1vodx6d-2' })(
          [
            'color:',
            ';font-size:16px;font-weight:400;line-height:24px;opacity:0.7;margin:0;margin-top:10px;@media (max-width:',
            '){font-size:16px;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var n = t.theme;
            return ''.concat(n.breakpoints.tablet, 'px');
          }
        );
    },
    WqaS: function (t, n, e) {
      'use strict';
      var i = e('q1tI'),
        r = e('vOnD'),
        o = i.createElement;
      n.a = Object(r.e)(function (t) {
        return o(
          'div',
          {
            className: t.className,
            onClick: function (n) {
              return t.onClick ? t.onClick(n) : null;
            },
          },
          t.children || ''
        );
      }).withConfig({ displayName: 'flex', componentId: 'sc-53hndv-0' })(
        [
          'display:flex;justify-content:',
          ';flex-direction:',
          ';flex-grow:',
          ';flex-basis:',
          ';flex-shrink:',
          ';flex-wrap:',
          ';flex:',
          ';align-items:',
          ';',
        ],
        function (t) {
          return t.justifyContent || 'flex-start';
        },
        function (t) {
          return t.flexDirection || 'row';
        },
        function (t) {
          return t.flexGrow || 0;
        },
        function (t) {
          return t.flexBasis || 'auto';
        },
        function (t) {
          return t.flexShrink || 1;
        },
        function (t) {
          return t.flexWrap || 'nowrap';
        },
        function (t) {
          return t.flex || ' 0 1 auto';
        },
        function (t) {
          return t.alignItems || 'stretch';
        }
      );
    },
    aagu: function (t, n, e) {
      'use strict';
      e.d(n, 'a', function () {
        return c;
      });
      var i = e('q1tI'),
        r = e.n(i),
        o = e('vOnD'),
        a = r.a.createElement;
      function c(t) {
        var n = t.className,
          e = t.image,
          i = t.inList,
          r = t.square,
          o = t.alt;
        return a(u, { className: n, inList: i, square: r }, a(l, { src: e, alt: o }));
      }
      var u = o.e.div.withConfig({ displayName: 'product-img__ImgContainer', componentId: 'sc-1wvkwid-0' })(
          [
            'position:relative;width:100%;max-width:100%;height:420px;max-height:420px;border-radius:10px;background-color:',
            ';@media (max-width:',
            '){width:100%;max-width:none;}',
            ' ',
            ';',
          ],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            var n = t.theme;
            return ''.concat(n.breakpoints.tablet, 'px');
          },
          function (t) {
            var n = t.square;
            return n
              ? Object(o.d)(
                  [
                    'width:',
                    'px;height:',
                    'px;border-radius:4px;@media (max-width:',
                    '){height:auto;min-height:300px;}',
                  ],
                  n,
                  n,
                  function (t) {
                    var n = t.theme;
                    return ''.concat(n.breakpoints.tablet, 'px');
                  }
                )
              : null;
          },
          function (t) {
            var n = t.inList;
            return n
              ? Object(o.d)(
                  [
                    'width:calc( (535px - (5px * ',
                    ')) / ',
                    ' );max-width:calc( (535px - (5px * ',
                    ')) / ',
                    ' );height:calc( (535px - (5px * ',
                    ')) / ',
                    ' );border-radius:5px;cursor:pointer;transition:background-color ',
                    ';&:hover{background-color:',
                    ';}&:last-child{margin-right:0;}@media (max-width:',
                    '){width:calc( (100% - (5px * ',
                    ')) / ',
                    ' );',
                    '}',
                  ],
                  n > 1 ? n - 1 : n,
                  n,
                  n > 1 ? n - 1 : n,
                  n,
                  n > 1 ? n - 1 : n,
                  n,
                  function (t) {
                    var n = t.theme;
                    return ''.concat(n.transitions.duration, ' ').concat(n.transitions.type);
                  },
                  function (t) {
                    return t.theme.colors.itemBackgroundHover;
                  },
                  function (t) {
                    var n = t.theme;
                    return ''.concat(n.breakpoints.tablet, 'px');
                  },
                  n > 1 ? n - 1 : n,
                  n,
                  n ? Object(o.d)(['margin:0 auto;']) : null
                )
              : null;
          }
        ),
        l = o.e.img.withConfig({ displayName: 'product-img__ProductImg', componentId: 'sc-1wvkwid-1' })([
          'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:65%;width:100%;display:block;',
        ]);
    },
    pZhd: function (t, n, e) {
      'use strict';
      e.d(n, 'a', function () {
        return l;
      });
      var i = e('rePB'),
        r = e('q1tI');
      function o(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, i);
        }
        return e;
      }
      function a(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? o(Object(e), !0).forEach(function (n) {
                Object(i.a)(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : o(Object(e)).forEach(function (n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              });
        }
        return t;
      }
      var c = function (t, n) {
          'undefined' !== typeof localStorage && localStorage.setItem(t, JSON.stringify(n));
        },
        u = function (t) {
          return function (n) {
            var e, i;
            return (
              n.product.id === t.product.id &&
              n.size.id === t.size.id &&
              (null === (e = n.color) || void 0 === e ? void 0 : e.id) ===
                (null === (i = t.color) || void 0 === i ? void 0 : i.id)
            );
          };
        },
        l = function (t) {
          var n = 'TRAC_CART.'.concat(t),
            e = Object(r.useState)(
              (function (t) {
                if ('undefined' !== typeof localStorage) {
                  var n = localStorage.getItem(t);
                  if (n) return JSON.parse(n);
                }
                return [];
              })(n)
            ),
            i = e[0],
            o = e[1],
            l = function (t) {
              return c(n, t), o(t), t;
            },
            s = i.reduce(function (t, n) {
              return t + n.product.price * n.quantity;
            }, 0);
          return {
            cart: i,
            total: s,
            updateCart: function (t, n) {
              var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                r = i.find(u(n));
              r && ('add' === t && (n.quantity += e), 'remove' === t && (n.quantity -= e));
              var o = i
                .concat(r || 'add' !== t ? [] : [n])
                .map(function (t) {
                  return u(n)(t) ? a({}, n) : a({}, t);
                })
                .filter(function (t) {
                  return t.quantity > 0;
                });
              return l(o);
            },
            saveCart: l,
            emptyCart: function () {
              c(n, []), o([]);
            },
          };
        };
    },
  },
]);
