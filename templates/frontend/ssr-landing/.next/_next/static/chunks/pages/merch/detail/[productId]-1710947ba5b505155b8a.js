_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [20],
  {
    '0FW9': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return f;
      });
      var i = n('q1tI'),
        o = n.n(i),
        a = n('vOnD'),
        r = n('20a2'),
        c = n('WqaS'),
        l = n('zoQI'),
        u = n('aagu'),
        s = n('RHGb'),
        p = o.a.createElement;
      function d(t) {
        var e = t.className,
          n = t.product,
          i = t.inList,
          o = Object(r.useRouter)();
        return p(
          m,
          {
            className: e,
            onClick: function () {
              return o.push('/merch/detail/'.concat(n.id));
            },
          },
          p(u.a, { className: 'image-container', image: n.image, alt: n.title, inList: i || 1 }),
          p(s.a, { className: 'product-info', product: n })
        );
      }
      var m = a.e.div.withConfig({ displayName: 'product-item__ProductContainer', componentId: 'sc-1rx8y8s-0' })(
          [
            'cursor:pointer;max-width:265px;width:100%;@media (max-width:',
            '){max-width:none;}.product-info{margin-top:30px;@media (max-width:',
            '){margin-top:15px;}}&:hover{.image-container{background-color:',
            ';}}',
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
            return t.theme.colors.itemBackgroundHover;
          }
        ),
        h = o.a.createElement;
      function f(t) {
        var e = t.products,
          n = t.showCart,
          i = Object(r.useRouter)(),
          a = e.sort(function (t, e) {
            return (t.order || 0) - (e.order || 0);
          });
        return h(
          o.a.Fragment,
          null,
          h(
            g,
            null,
            a.map(function (t, e) {
              return h(d, { className: 'product-item', key: ''.concat(t.title, '-').concat(e), product: t, inList: 2 });
            })
          ),
          n
            ? null
            : h(
                b,
                {
                  onClick: function () {
                    return i.push('/merch/cart');
                  },
                },
                'View Cart'
              )
        );
      }
      var g = Object(a.e)(c.a).withConfig({ displayName: 'product-list__ListWrapper', componentId: 'sc-1epfjzo-0' })(
          [
            'align-items:flex-start;justify-content:space-between;flex-flow:row wrap;width:100%;@media (max-width:',
            '){align-items:center;flex-flow:column wrap;padding-bottom:120px;}.product-item{margin-top:70px;@media (max-width:',
            '){margin-top:30px;}}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        b = Object(a.e)(l.a).withConfig({ displayName: 'product-list__CartButton', componentId: 'sc-1epfjzo-1' })(
          [
            'height:70px;font-size:14px;line-height:16px;width:156px;box-shadow:',
            ';position:fixed;right:80px;bottom:80px;@media (max-width:',
            '){width:80%;right:auto;bottom:32px;left:50%;transform:translate(-50%,0);}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.shadows.redShadow);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
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
    MWXp: function (t, e, n) {
      'use strict';
      var i = n('q1tI'),
        o = n.n(i),
        a = n('g4pe'),
        r = n.n(a),
        c = n('9ixD'),
        l = o.a.createElement;
      e.a = function (t) {
        var e = t.pageData;
        return l(
          o.a.Fragment,
          null,
          l(r.a, null, l('link', { rel: 'icon', href: '/favicon/favicon.ico' })),
          l(c.a, {
            title: e.title,
            description: e.description || e.data.bio || e.title,
            openGraph: {
              title: e.title,
              description: e.description || e.data.bio || e.title,
              url: 'https://'.concat(e.subdomain, '.').concat('trac-dev.sinapsis.co', '/'),
              images: [{ url: e.avatar }],
              type: 'website',
            },
          })
        );
      };
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
          o = t.noPrice,
          a = t.hasSize;
        return c(
          u,
          { className: e, inDetail: i },
          c(s, { className: 'title' }, n.title),
          c(p, { className: 'description' }, n.description ? n.description : '', a && ' - L'),
          !o && c(d, { className: 'price' }, '$', n.price.toFixed(2).toLocaleString())
        );
      }
      var u = Object(a.e)(r.a).withConfig({
          displayName: 'product-info__InformationWrapper',
          componentId: 'sc-1vodx6d-0',
        })(['flex-direction:column;', ''], function (t) {
          return t.inDetail
            ? Object(a.d)(
                [
                  '.title{font-size:40px;line-height:40px;font-weight:800;margin:24px 0;@media (max-width:',
                  '){font-size:32px;margin:12px 0;}}.price{order:-1;font-size:24px;margin-top:0;@media (max-width:',
                  '){font-size:14px;}}',
                ],
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
        }),
        s = a.e.h4.withConfig({ displayName: 'product-info__Title', componentId: 'sc-1vodx6d-1' })(
          [
            'color:',
            ';font-size:16px;font-weight:600;line-height:24px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;@media (max-width:',
            '){font-size:16px;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        p = a.e.p.withConfig({ displayName: 'product-info__Description', componentId: 'sc-1vodx6d-2' })(
          ['color:', ';font-size:14px;font-weight:400;line-height:21px;margin:0;opacity:0.7;'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        d = a.e.h6.withConfig({ displayName: 'product-info__Price', componentId: 'sc-1vodx6d-3' })(
          [
            'color:',
            ';font-size:16px;font-weight:400;line-height:24px;opacity:0.7;margin:0;margin-top:10px;@media (max-width:',
            '){font-size:16px;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
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
          i = t.inList,
          o = t.square,
          a = t.alt;
        return r(l, { className: e, inList: i, square: o }, r(u, { src: n, alt: a }));
      }
      var l = a.e.div.withConfig({ displayName: 'product-img__ImgContainer', componentId: 'sc-1wvkwid-0' })(
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
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          },
          function (t) {
            var e = t.square;
            return e
              ? Object(a.d)(
                  [
                    'width:',
                    'px;height:',
                    'px;border-radius:4px;@media (max-width:',
                    '){height:auto;min-height:300px;}',
                  ],
                  e,
                  e,
                  function (t) {
                    var e = t.theme;
                    return ''.concat(e.breakpoints.tablet, 'px');
                  }
                )
              : null;
          },
          function (t) {
            var e = t.inList;
            return e
              ? Object(a.d)(
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
                  e > 1 ? e - 1 : e,
                  e,
                  e > 1 ? e - 1 : e,
                  e,
                  e > 1 ? e - 1 : e,
                  e,
                  function (t) {
                    var e = t.theme;
                    return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
                  },
                  function (t) {
                    return t.theme.colors.itemBackgroundHover;
                  },
                  function (t) {
                    var e = t.theme;
                    return ''.concat(e.breakpoints.tablet, 'px');
                  },
                  e > 1 ? e - 1 : e,
                  e,
                  e ? Object(a.d)(['margin:0 auto;']) : null
                )
              : null;
          }
        ),
        u = a.e.img.withConfig({ displayName: 'product-img__ProductImg', componentId: 'sc-1wvkwid-1' })([
          'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:65%;width:100%;display:block;',
        ]);
    },
    baZN: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, '__N_SSP', function () {
          return et;
        }),
        n.d(e, 'default', function () {
          return nt;
        });
      var i = n('q1tI'),
        o = n.n(i),
        a = n('6Hpx'),
        r = n('42Rd'),
        c = n('vOnD'),
        l = n('20a2'),
        u = n('RHGb'),
        s = n('aagu'),
        p = n('XGvB'),
        d = n('voqa'),
        m = n('WqaS'),
        h = n('ZMKu'),
        f = o.a.createElement;
      var g = Object(c.e)(h.b.div).withConfig({
          displayName: 'product-size-guide__SizeGuideWrapper',
          componentId: 'sc-4m4hc0-0',
        })(['']),
        b = Object(c.e)(m.a).withConfig({ displayName: 'product-size-guide__Row', componentId: 'sc-4m4hc0-1' })(
          [
            'justify-content:flex-start;align-items:center;flex-direction:row;padding:20px 0;border-bottom:1px dotted ',
            ';&:first-child{padding:0 0 30px;border-bottom:none;& > span{font-weight:700;}}',
            '',
          ],
          function (t) {
            return t.theme.colors.primaryHover;
          },
          function (t) {
            return t.noLine ? Object(c.d)(['border-bottom:none;padding:20px 0 0;']) : null;
          }
        ),
        x = c.e.span.withConfig({ displayName: 'product-size-guide__Item', componentId: 'sc-4m4hc0-2' })(
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
            return e > 1 ? Object(c.d)(['calc(100% / (', ' + 1));'], e) : '100%;';
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        v = c.e.p.withConfig({ displayName: 'product-size-guide__HelpText', componentId: 'sc-4m4hc0-3' })(
          ['font-size:12px;font-weight:400;line-height:14px;text-align:left;color:', ';'],
          function (t) {
            return t.theme.colors.background;
          }
        ),
        w = n('hRDA'),
        y = n('SXEb'),
        _ = i.createElement;
      var O = c.e.div.withConfig({ displayName: 'tooltip__TooltipWrapper', componentId: 'sc-1ha8c9q-0' })([
          '&.fixed{.tooltip-content{z-index:999;position:fixed;right:0;bottom:0;left:0;transform:none;}}',
        ]),
        C = c.e.span.withConfig({ displayName: 'tooltip__TooltopText', componentId: 'sc-1ha8c9q-1' })(
          [
            'font-size:14px;font-weight:400;cursor:pointer;color:',
            ';margin-right:20px;opacity:1;transition:opacity ',
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
        N = c.e.div.withConfig({ displayName: 'tooltip__TooltipContent', componentId: 'sc-1ha8c9q-2' })(
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
        z = c.e.h4.withConfig({ displayName: 'tooltip__Title', componentId: 'sc-1ha8c9q-3' })(
          ['font-size:14px;font-weight:700;line-height:17px;color:', ';'],
          function (t) {
            return t.theme.colors.background;
          }
        ),
        j = Object(c.e)(m.a).withConfig({ displayName: 'tooltip__Header', componentId: 'sc-1ha8c9q-4' })([
          'margin:4px 0 20px;',
        ]),
        I = n('fXhW'),
        k = o.a.createElement,
        S = Object(p.a)(),
        L = ['Unisex Twill Hat', 'Custom Pin Buttons', 'Tough Cases'];
      function q(t) {
        var e = t.className,
          n = t.active,
          i = t.sizes,
          o = t.onChange,
          a = t.productName,
          r = void 0 === a ? '' : a,
          c = i.map(function (t) {
            return { label: t.name, value: t.id };
          }),
          l = Object(d.a)();
        return k(
          E,
          { className: ''.concat(e, ' ').concat(l ? '' : 'desktop') },
          l && !L.includes(r)
            ? k(
                X,
                { fixedOnMobile: !0, hasClose: !0, titleText: 'Size Guide', text: 'Size Guide (?)' },
                k(W, { sizeItems: I, helpText: '*All measurements are in Inches. All pieces fit true to size.' })
              )
            : null,
          k(
            T,
            null,
            k(P, null, 'Size'),
            k(
              m.a,
              { justifyContent: 'flex-end', alignItems: 'center' },
              l || L.includes(r)
                ? null
                : k(
                    X,
                    { text: 'Size Guide (?)' },
                    k(W, { sizeItems: I, helpText: '*All measurements are in Inches. All pieces fit true to size.' })
                  ),
              k(D, {
                options: c,
                title: 'Select size',
                value: n,
                onChange: function (t) {
                  return o(t);
                },
              })
            )
          )
        );
      }
      var D = Object(c.e)(S).withConfig({
          displayName: 'product-size-selector__StyledDropdownCtrl',
          componentId: 'sc-1fu7rya-0',
        })(['width:230px;']),
        E = c.e.div.withConfig({ displayName: 'product-size-selector__SizesWrappper', componentId: 'sc-1fu7rya-1' })([
          'margin:40px 0 20px;&.desktop{position:relative;}',
        ]),
        T = Object(c.e)(m.a).withConfig({
          displayName: 'product-size-selector__SizeSelectorWrapper',
          componentId: 'sc-1fu7rya-2',
        })(['align-items:center !important;justify-content:space-between !important;margin:24px 0;']),
        P = c.e.h4.withConfig({ displayName: 'product-size-selector__Title', componentId: 'sc-1fu7rya-3' })(
          ['font-size:14px;font-weight:700;color:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        W = Object(c.e)(function (t) {
          var e = t.className,
            n = t.sizeItems,
            i = t.helpText;
          return f(
            g,
            { className: e },
            f(
              b,
              null,
              f(x, { itemsLength: 3 }),
              n[0].sizeOptions.map(function (t, e) {
                return f(x, { key: ''.concat(t.label, '-').concat(e), itemsLength: n.length }, t.label);
              })
            ),
            n.map(function (t, e) {
              return f(
                b,
                { key: ''.concat(t.label, '-').concat(e) },
                f(x, { itemsLength: n.length }, t.label),
                t.sizeOptions.map(function (t, e) {
                  return f(x, { key: ''.concat(t.label, '-').concat(e), itemsLength: n.length }, t.value);
                })
              );
            }),
            i ? f(b, { noLine: !0 }, f(v, null, i)) : null
          );
        }).withConfig({ displayName: 'product-size-selector__StyledSizeGuide', componentId: 'sc-1fu7rya-4' })([
          'width:535px;max-width:100%;',
        ]),
        X = Object(c.e)(function (t) {
          var e = t.className,
            n = t.text,
            o = t.children,
            a = t.fixedOnMobile,
            r = t.hasClose,
            l = t.titleText,
            u = Object(i.useState)(!1),
            s = u[0],
            p = u[1],
            m = Object(d.a)(),
            f = Object(c.f)();
          return _(
            O,
            { className: ''.concat(e, ' ').concat(a ? 'fixed' : null) },
            _(
              C,
              {
                onClick: function () {
                  return p(!s);
                },
              },
              n
            ),
            _(
              h.a,
              null,
              s
                ? _(
                    y.a,
                    null,
                    _(
                      N,
                      { className: 'tooltip-content' },
                      m && r
                        ? _(
                            j,
                            { alignItems: 'center', justifyContent: 'space-between' },
                            l ? _(z, null, l) : null,
                            _(w.a, {
                              onClick: function () {
                                return p(!s);
                              },
                              fill: f.colors.background,
                            })
                          )
                        : null,
                      o
                    )
                  )
                : null
            )
          );
        }).withConfig({ displayName: 'product-size-selector__StyledTooltip', componentId: 'sc-1fu7rya-5' })(
          ['.tooltip-content{padding:24px;border-radius:2px;background-color:', ';}'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        M = o.a.createElement,
        R = Object(p.a)();
      function B(t) {
        var e = t.className,
          n = t.colors,
          i = t.active,
          o = t.onChange,
          a = n.map(function (t) {
            return { label: t.name, value: t };
          });
        return M(
          H,
          { className: e },
          M(G, {
            title: 'Select color',
            keyMapper: function (t) {
              return ''.concat(t.id);
            },
            valueMapper: function (t) {
              return t.name;
            },
            value: i,
            options: a,
            onChange: o,
            disabled: !0,
          })
        );
      }
      var H = c.e.div.withConfig({ displayName: 'product-color-selector__ColorsWrapper', componentId: 'sc-17hbcl4-0' })(
          ['margin:40px 0 20px;']
        ),
        G = Object(c.e)(R).withConfig({
          displayName: 'product-color-selector__StyledDropdownCtrl',
          componentId: 'sc-17hbcl4-1',
        })(['margin-bottom:5px;']),
        A = n('zoQI'),
        F = n('pZhd'),
        J = o.a.createElement;
      function Z(t) {
        var e = t.className,
          n = t.cartKey,
          o = t.product,
          a = t.onClick,
          r = Object(l.useRouter)(),
          c = Object(i.useState)(),
          p = c[0],
          d = c[1],
          m = Object(i.useState)(o.colors[0]),
          h = m[0],
          f = m[1],
          g = Object(F.a)(n).updateCart,
          b = !(!p || (o.colors.length && !h.id));
        return J(
          K,
          { className: e, onClick: a },
          J(s.a, { className: 'image-container', image: o.image, alt: o.title }),
          J(u.a, { className: 'product-info', product: o, inDetail: !0 }),
          J(B, { colors: o.colors, active: h, onChange: f }),
          J(q, { sizes: o.sizes, active: p, onChange: d, productName: o.title }),
          J(
            Q,
            {
              onClick: function () {
                var t = o.sizes.find(function (t) {
                  return t.id === p;
                });
                b && t && (g('add', { product: o, size: t, color: h, quantity: 1 }), r.push('../cart'));
              },
              disabled: !b,
            },
            'Add to Cart'
          )
        );
      }
      var K = c.e.div.withConfig({ displayName: 'product-item-detail__ProductContainer', componentId: 'sc-98sn0-0' })([
          'max-width:535px;width:100%;.product-info{margin-top:40px;}',
        ]),
        Q = Object(c.e)(A.a).withConfig({ displayName: 'product-item-detail__CartButton', componentId: 'sc-98sn0-1' })([
          'width:100%;height:70px;',
        ]),
        U = n('0FW9'),
        V = n('/kYb'),
        Y = n('jtTr'),
        $ = n('MWXp'),
        tt = o.a.createElement,
        et = !0;
      function nt(t) {
        var e = Object(i.useState)(t.siteData)[0],
          n = Object(F.a)(e.ownerId).cart,
          c = Object(Y.a)(t.siteData).pageData;
        return t.product
          ? tt(
              o.a.Fragment,
              null,
              tt($.a, { pageData: c }),
              tt(
                r.a,
                { theme: e ? e.theme : void 0, removeBranding: null === e || void 0 === e ? void 0 : e.removeBranding },
                tt(
                  a.a,
                  { columnFlow: !0 },
                  tt(V.a, { title: 'Merch' }),
                  tt(Z, { product: t.product, cartKey: e.ownerId }),
                  tt(U.a, { products: t.merchData, showCart: n.length > 0 })
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
    hRDA: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      var i = n('wx14'),
        o = n('q1tI'),
        a = n.n(o).a.createElement;
      function r(t) {
        return a(
          'svg',
          Object(i.a)({ width: '12', height: '12', viewBox: '0 0 12 12' }, t),
          a('rect', {
            x: '10.9497',
            y: '-0.36377',
            width: '2',
            height: '16',
            rx: '1',
            transform: 'rotate(45 10.9497 -0.36377)',
            fill: t.fill,
          }),
          a('rect', {
            x: '1.05029',
            y: '-0.36377',
            width: '16',
            height: '2',
            rx: '1',
            transform: 'rotate(45 1.05029 -0.36377)',
            fill: t.fill,
          })
        );
      }
    },
    pZhd: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return u;
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
        u = function (t) {
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
            u = function (t) {
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
              return u(a);
            },
            saveCart: u,
            emptyCart: function () {
              c(e, []), a([]);
            },
          };
        };
    },
    voqa: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var i = n('q1tI'),
        o = n('MllO');
      function a() {
        var t = Object(i.useState)({ width: void 0, height: void 0 }),
          e = t[0],
          n = t[1];
        return (
          Object(i.useEffect)(function () {
            function t() {
              n({ width: window.innerWidth, height: window.innerHeight });
            }
            return (
              window.addEventListener('resize', t),
              t(),
              function () {
                return window.removeEventListener('resize', t);
              }
            );
          }, []),
          !!e.width && e.width <= o.a.laptopS
        );
      }
    },
  },
  [['2sFz', 0, 2, 4, 1, 3, 5, 6, 7, 10]],
]);
