(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [278],
  {
    1421: function (t, e, n) {
      'use strict';
      var r = n(9008),
        i = n(2962),
        a = n(5893);
      e.Z = function (t) {
        var e = t.pageData;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(r.default, { children: (0, a.jsx)('link', { rel: 'icon', href: '/favicon/favicon.ico' }) }),
            (0, a.jsx)(i.PB, {
              title: e.title,
              description: e.description || e.data.bio || e.title,
              openGraph: {
                title: e.title,
                description: e.description || e.data.bio || e.title,
                url: 'https://'.concat(e.subdomain, '.').concat('development.trac.co', '/'),
                images: [{ url: e.avatar }],
                type: 'website',
              },
            }),
          ],
        });
      };
    },
    9207: function (t, e, n) {
      'use strict';
      n.d(e, {
        V: function () {
          return i;
        },
      });
      var r = n(7294),
        i = function (t) {
          var e = (0, r.useState)(t),
            n = e[0],
            i = e[1];
          return (
            (0, r.useEffect)(function () {
              var t = function (t) {
                var e, n, r;
                (
                  (null === (e = 'http://localhost:3000,https://app.development.trac.co') ? void 0 : e.split(',')) || []
                ).includes(t.origin) &&
                  'trac-editor' === (null === (n = t.data) || void 0 === n ? void 0 : n.origin) &&
                  null !== (r = t.data) &&
                  void 0 !== r &&
                  r.payload &&
                  i(
                    (function (t) {
                      try {
                        return JSON.parse(decodeURIComponent(escape(window.atob(t))));
                      } catch (e) {
                        return {};
                      }
                    })(t.data.payload)
                  );
              };
              return (
                window.addEventListener('message', t, !1),
                document.referrer &&
                  window.parent.postMessage({ origin: 'trac-artist-site', ready: !0 }, document.referrer),
                function () {
                  window.removeEventListener('message', t);
                }
              );
            }, []),
            { pageData: n }
          );
        };
    },
    6894: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, {
          __N_SSP: function () {
            return y;
          },
          default: function () {
            return _;
          },
        });
      var r = n(266),
        i = n(809),
        a = n.n(i),
        o = n(7294),
        c = n(2872),
        u = n(6747),
        s = n(2163),
        d = n(1163),
        p = n(9685),
        l = n(186),
        f = n(5578),
        h = n(8666),
        v = n(4055),
        m = n(1421),
        w = n(9207),
        g = n(5893),
        y = !0;
      function _(t) {
        var e = t.siteData,
          n = (0, w.V)(e).pageData,
          i = (0, d.useRouter)(),
          l = (0, v.j)(e.ownerId),
          f = l.cart,
          y = l.total,
          _ = l.saveCart,
          j = l.emptyCart,
          C = (0, o.useState)(!1),
          Z = C[0],
          N = C[1],
          E = (function () {
            var t = (0, r.Z)(
              a().mark(function t() {
                var e, n, r, i;
                return a().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (0 !== f.length) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt('return');
                      case 2:
                        return N(!0), (t.next = 5), k(f);
                      case 5:
                        (e = t.sent),
                          (n = f.map(function (t) {
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
                          N(!1);
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
        return (0, g.jsxs)(g.Fragment, {
          children: [
            (0, g.jsx)(m.Z, { pageData: n }),
            (0, g.jsx)(u.Z, {
              theme: e.theme,
              removeBranding: e.removeBranding,
              children: (0, g.jsxs)(c.Z, {
                columnFlow: !0,
                children: [
                  (0, g.jsx)(s.Z, {
                    title: 'Cart',
                    onClick: function () {
                      return i.back();
                    },
                  }),
                  f.length
                    ? (0, g.jsxs)(g.Fragment, {
                        children: [
                          (0, g.jsx)(p.Z, { cartKey: e.ownerId, onCartChanged: _ }),
                          (0, g.jsx)(h.Z, { subtotal: y }),
                        ],
                      })
                    : (0, g.jsx)(b, { children: 'Cart is empty.' }),
                  f.length ? (0, g.jsx)(x, { onClick: E, disabled: Z, children: 'Proceed to Checkout' }) : null,
                ],
              }),
            }),
          ],
        });
      }
      var x = (0, l.ZP)(f.Z).withConfig({ displayName: 'cart__CartButton', componentId: 'sc-18dr43p-0' })([
          'width:100%;height:70px;margin:32px auto 64px;',
        ]),
        b = l.ZP.p.withConfig({ displayName: 'cart__StyledEmptyCartMessage', componentId: 'sc-18dr43p-1' })(
          ['line-height:1.2;color:', ';display:block;opacity:0.5;font-size:16px;font-weight:400;'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        k = (function () {
          var t = (0, r.Z)(
            a().mark(function t(e) {
              var n, r, i;
              return a().wrap(function (t) {
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
                        fetch(''.concat('https://api.development.trac.co', '/merch/checkout'), {
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
    8585: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch/cart',
        function () {
          return n(6894);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [430, 987, 819, 55, 227, 48, 774, 888, 179], function () {
      return (e = 8585), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
