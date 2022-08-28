_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [21],
  {
    'M/EI': function (t, e, n) {
      'use strict';
      var r = n('q1tI'),
        a = n.n(r),
        i = n('vOnD'),
        o = a.a.createElement,
        c = i.d.div.withConfig({ displayName: 'grid__StyledGrid', componentId: 'sc-1mu4cgu-0' })(
          [
            'display:grid;grid-template-columns:repeat(3,minmax(100px,1fr));gap:32px;.full-width{grid-column:span 3;}@media (max-width:',
            '){grid-template-columns:repeat(2,minmax(100px,1fr));.full-width{grid-column:span 2;}}@media (max-width:',
            '){grid-column-gap:16px;grid-row-gap:32px;}& > *{flex-shrink:0;}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopXL, 'px');
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptop, 'px');
          }
        );
      e.a = function (t) {
        var e = t.className,
          n = t.children;
        return o(c, { className: e || '' }, n);
      };
    },
    MWXp: function (t, e, n) {
      'use strict';
      (function (t) {
        var r = n('q1tI'),
          a = n.n(r),
          i = n('9ixD'),
          o = a.a.createElement;
        e.a = function (e) {
          var n = e.pageData;
          return o(
            a.a.Fragment,
            null,
            o(i.a, {
              title: n.title,
              description: n.description || n.data.bio || n.title,
              openGraph: {
                title: n.title,
                description: n.description || n.data.bio || n.title,
                url: 'https://'.concat(n.subdomain, '.').concat(t.env.NEXT_PUBLIC_APP_BASE_DOMAIN, '/'),
                images: [{ url: n.avatar }],
                type: 'website',
              },
            })
          );
        };
      }.call(this, n('8oxB')));
    },
    P1vn: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, '__N_SSP', function () {
          return h;
        }),
        n.d(e, 'default', function () {
          return v;
        });
      var r = n('rePB'),
        a = n('q1tI'),
        i = n.n(a),
        o = n('M/EI'),
        c = n('SL6b'),
        l = n('6Hpx'),
        u = n('MWXp'),
        p = n('42Rd'),
        d = n('jtTr'),
        s = n('HkQY'),
        m = i.a.createElement;
      function f(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(n), !0).forEach(function (e) {
                Object(r.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var h = !0;
      function v(t) {
        var e = Object(d.a)(t.siteData).pageData;
        return e && e.id
          ? m(
              i.a.Fragment,
              null,
              m(u.a, { pageData: e }),
              m(
                p.a,
                { theme: e ? e.theme : void 0 },
                m(
                  l.a,
                  { pageData: e, noAnimation: !0 },
                  m(
                    o.a,
                    null,
                    (function () {
                      var t = [],
                        n = [];
                      return (
                        null === e ||
                          void 0 === e ||
                          e.links
                            .sort(function (t, e) {
                              return t.order - e.order;
                            })
                            .forEach(function (t) {
                              n.push(g(g({}, t), {}, { order: n.length }));
                            }),
                        (null === n || void 0 === n ? void 0 : n.length) > 0 && t.push(n),
                        t
                      );
                    })().map(function (t) {
                      return t.map(function (t, n) {
                        var r, a;
                        return 'embed' === t.type
                          ? m(s.a, {
                              data: {
                                title: t.title,
                                url: null === (r = t.embedData) || void 0 === r ? void 0 : r.url,
                                id: (null === (a = t.embedData) || void 0 === a ? void 0 : a.id) || '',
                                type: t.type,
                              },
                              artistName: e.title,
                              key: n,
                            })
                          : 'traclink' === t.type
                          ? m(c.a, { data: t, key: n, className: t.highlight ? 'highlight' : '', artistName: e.title })
                          : null;
                      });
                    })
                  )
                )
              )
            )
          : null;
      }
    },
    gq86: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/music',
        function () {
          return n('P1vn');
        },
      ]);
    },
  },
  [['gq86', 0, 2, 3, 1, 4]],
]);
