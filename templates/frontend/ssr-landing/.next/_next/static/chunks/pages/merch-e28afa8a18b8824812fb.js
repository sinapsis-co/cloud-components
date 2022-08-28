_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [15],
  {
    F4Zc: function (t, a, e) {
      'use strict';
      e.r(a),
        e.d(a, '__N_SSP', function () {
          return f;
        }),
        e.d(a, 'default', function () {
          return g;
        });
      var n = e('q1tI'),
        i = e.n(n),
        r = e('jtTr'),
        c = e('6Hpx'),
        o = e('MWXp'),
        u = e('42Rd'),
        d = e('M/EI'),
        p = e('xQzR'),
        l = i.a.createElement;
      function m(t) {
        var a = t.products.sort(function (t, a) {
          return (t.order || 0) - (a.order || 0);
        });
        return (
          (a = a.map(function (t) {
            var a,
              e = t.colors.find(function (t) {
                return 'White' == t.name || 'white' == t.name;
              }),
              n = t.colors[0].image || (null === (a = t.colors[0].images) || void 0 === a ? void 0 : a[0].src);
            return e ? ((t.image = e.image || t.image), t) : n ? ((t.image = n || t.image), t) : t;
          })),
          l(
            d.a,
            null,
            a.map(function (t, a) {
              return l(p.a, { className: 'product-item', key: ''.concat(t.title, '-').concat(a), product: t });
            })
          )
        );
      }
      var s = i.a.createElement,
        f = !0;
      function g(t) {
        var a = Object(r.a)(t.siteData).pageData;
        return (
          Object(n.useEffect)(function () {
            var a = t.merchData.map(function (t, a) {
              return { product_id: t.id, index: a };
            });
            window.analytics && window.analytics.track('Merch Page Viewed', { products: a });
          }),
          a && a.id
            ? s(
                i.a.Fragment,
                null,
                s(o.a, { pageData: a }),
                s(
                  u.a,
                  { theme: a ? a.theme : void 0 },
                  s(c.a, { pageData: a, noAnimation: !0 }, s(m, { products: t.merchData }))
                )
              )
            : null
        );
      }
    },
    'M/EI': function (t, a, e) {
      'use strict';
      var n = e('q1tI'),
        i = e.n(n),
        r = e('vOnD'),
        c = i.a.createElement,
        o = r.d.div.withConfig({ displayName: 'grid__StyledGrid', componentId: 'sc-1mu4cgu-0' })(
          [
            'display:grid;grid-template-columns:repeat(3,minmax(100px,1fr));gap:32px;.full-width{grid-column:span 3;}@media (max-width:',
            '){grid-template-columns:repeat(2,minmax(100px,1fr));.full-width{grid-column:span 2;}}@media (max-width:',
            '){grid-column-gap:16px;grid-row-gap:32px;}& > *{flex-shrink:0;}',
          ],
          function (t) {
            var a = t.theme;
            return ''.concat(a.breakpoints.laptopXL, 'px');
          },
          function (t) {
            var a = t.theme;
            return ''.concat(a.breakpoints.laptop, 'px');
          }
        );
      a.a = function (t) {
        var a = t.className,
          e = t.children;
        return c(o, { className: a || '' }, e);
      };
    },
    MWXp: function (t, a, e) {
      'use strict';
      var n = e('q1tI'),
        i = e.n(n),
        r = e('9ixD'),
        c = i.a.createElement;
      a.a = function (t) {
        var a = t.pageData;
        return c(
          i.a.Fragment,
          null,
          c(r.a, {
            title: a.title,
            description: a.description || a.data.bio || a.title,
            openGraph: {
              title: a.title,
              description: a.description || a.data.bio || a.title,
              url: 'https://'.concat(a.subdomain, '.').concat('development.trac.co', '/'),
              images: [{ url: a.avatar }],
              type: 'website',
            },
          })
        );
      };
    },
    TOVE: function (t, a, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch',
        function () {
          return e('F4Zc');
        },
      ]);
    },
  },
  [['TOVE', 0, 2, 3, 1, 4]],
]);
