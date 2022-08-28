_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [20],
  {
    '0B8f': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, '__N_SSP', function () {
          return g;
        }),
        n.d(e, 'default', function () {
          return _;
        });
      var r = n('o0o1'),
        a = n.n(r),
        i = n('HaE+'),
        o = n('q1tI'),
        c = n.n(o),
        u = n('6Hpx'),
        d = n('42Rd'),
        s = n('/kYb'),
        p = n('20a2'),
        l = n('+8Ae'),
        f = n('vOnD'),
        h = n('zoQI'),
        v = n('A/OS'),
        m = n('pZhd'),
        w = n('MWXp'),
        b = n('jtTr'),
        y = c.a.createElement,
        g = !0;
      function _(t) {
        var e = t.siteData,
          n = Object(b.a)(e).pageData,
          r = Object(p.useRouter)(),
          f = Object(m.a)(e.ownerId),
          h = f.cart,
          g = f.total,
          _ = f.saveCart,
          j = f.emptyCart,
          x = Object(o.useState)(!1),
          I = x[0],
          E = x[1],
          N = (function () {
            var t = Object(i.a)(
              a.a.mark(function t() {
                var e, n, r, i;
                return a.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (0 !== h.length) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt('return');
                      case 2:
                        return E(!0), (t.next = 5), O(h);
                      case 5:
                        (e = t.sent),
                          (n = h.map(function (t) {
                            var e;
                            return {
                              category: 'Merch',
                              type: 'One Time',
                              length: '0',
                              product_id: t.product.id,
                              variant_id:
                                null ===
                                  (e = t.product.variants.find(function (e) {
                                    return e.sizeId == t.size.id;
                                  })) || void 0 === e
                                  ? void 0
                                  : e.id,
                              quantity: t.quantity,
                            };
                          })),
                          e.success &&
                            (j(),
                            window.analytics.track('Checkout Started', {
                              created_by: 'Fan',
                              checkout_id: null === (r = e.response) || void 0 === r ? void 0 : r.checkoutId,
                              products: n,
                            }),
                            null !== (i = e.response) &&
                              void 0 !== i &&
                              i.webUrl &&
                              window.open(e.response.webUrl, '_blank')),
                          E(!1);
                      case 9:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })();
        return y(
          c.a.Fragment,
          null,
          y(w.a, { pageData: n }),
          y(
            d.a,
            { theme: e.theme, removeBranding: e.removeBranding },
            y(
              u.a,
              { columnFlow: !0 },
              y(s.a, {
                title: 'Cart',
                onClick: function () {
                  return r.back();
                },
              }),
              h.length
                ? y(c.a.Fragment, null, y(l.a, { cartKey: e.ownerId, onCartChanged: _ }), y(v.a, { subtotal: g }))
                : y(C, null, 'Cart is empty.'),
              h.length ? y(k, { onClick: N, disabled: I }, 'Proceed to Checkout') : null
            )
          )
        );
      }
      var k = Object(f.e)(h.a).withConfig({ displayName: 'cart__CartButton', componentId: 'sc-18dr43p-0' })([
          'width:100%;height:70px;margin:32px auto 64px;',
        ]),
        C = f.e.p.withConfig({ displayName: 'cart__StyledEmptyCartMessage', componentId: 'sc-18dr43p-1' })(
          ['line-height:1.2;color:', ';display:block;opacity:0.5;font-size:16px;font-weight:400;'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        O = (function () {
          var t = Object(i.a)(
            a.a.mark(function t(e) {
              var n, r, i;
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = e.reduce(function (t, e) {
                          var n = e.product.variants.find(function (t) {
                            var n;
                            return (
                              t.colorId === (null === (n = e.color) || void 0 === n ? void 0 : n.id) &&
                              t.sizeId === e.size.id
                            );
                          });
                          return n
                            ? (e.product.id in t || (t[e.product.id] = { id: e.product.id, variants: [] }),
                              t[e.product.id].variants.push({ id: n.id, quantity: e.quantity }),
                              t)
                            : t;
                        }, {})),
                        (r = { products: Object.values(n) }),
                        (t.next = 4),
                        fetch(''.concat('https://api.trac-dev.sinapsis.co', '/merch/checkout'), {
                          method: 'POST',
                          body: JSON.stringify(r),
                        })
                      );
                    case 4:
                      return (i = t.sent), t.abrupt('return', i.json());
                    case 6:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
    },
    MWXp: function (t, e, n) {
      'use strict';
      var r = n('q1tI'),
        a = n.n(r),
        i = n('g4pe'),
        o = n.n(i),
        c = n('9ixD'),
        u = a.a.createElement;
      e.a = function (t) {
        var e = t.pageData;
        return u(
          a.a.Fragment,
          null,
          u(o.a, null, u('link', { rel: 'icon', href: '/favicon/favicon.ico' })),
          u(c.a, {
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
    jtyc: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch/cart',
        function () {
          return n('0B8f');
        },
      ]);
    },
  },
  [['jtyc', 0, 2, 4, 1, 3, 5, 6, 13]],
]);
