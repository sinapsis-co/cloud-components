(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [621],
  {
    6900: function (t, e, r) {
      'use strict';
      var n = r(2962),
        i = r(5893);
      e.Z = function (t) {
        var e = t.pageData;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(n.PB, {
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
        });
      };
    },
    3130: function (t, e, r) {
      'use strict';
      r.r(e),
        r.d(e, {
          __N_SSP: function () {
            return h;
          },
          default: function () {
            return b;
          },
        });
      var n = r(9499),
        i = r(1972),
        a = r(1807),
        o = r(2310),
        c = r(6900),
        u = r(8134),
        l = r(3886),
        s = r(3492),
        p = r(5893);
      function d(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? d(Object(r), !0).forEach(function (e) {
                (0, n.Z)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              });
        }
        return t;
      }
      var h = !0;
      function b(t) {
        var e = (0, l.V)(t.siteData).pageData;
        return e && e.id
          ? (0, p.jsxs)(p.Fragment, {
              children: [
                (0, p.jsx)(c.Z, { pageData: e }),
                (0, p.jsx)(u.Z, {
                  theme: e ? e.theme : void 0,
                  children: (0, p.jsx)(o.Z, {
                    pageData: e,
                    noAnimation: !0,
                    children: (0, p.jsx)(i.Z, {
                      children: (function () {
                        var t = [],
                          r = [];
                        return (
                          null === e ||
                            void 0 === e ||
                            e.links
                              .sort(function (t, e) {
                                return t.order - e.order;
                              })
                              .forEach(function (t) {
                                r.push(f(f({}, t), {}, { order: r.length }));
                              }),
                          (null === r || void 0 === r ? void 0 : r.length) > 0 && t.push(r),
                          t
                        );
                      })().map(function (t) {
                        return t.map(function (t, r) {
                          var n, i;
                          return 'embed' === t.type
                            ? (0, p.jsx)(
                                s.Z,
                                {
                                  data: {
                                    title: t.title,
                                    url: null === (n = t.embedData) || void 0 === n ? void 0 : n.url,
                                    id: (null === (i = t.embedData) || void 0 === i ? void 0 : i.id) || '',
                                    type: t.type,
                                  },
                                  artistName: e.title,
                                },
                                r
                              )
                            : 'traclink' === t.type
                            ? (0, p.jsx)(
                                a.Z,
                                { data: t, className: t.highlight ? 'highlight' : '', artistName: e.title },
                                r
                              )
                            : null;
                        });
                      }),
                    }),
                  }),
                }),
              ],
            })
          : null;
      }
    },
    2095: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/music',
        function () {
          return r(3130);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [774, 430, 457, 890, 661, 957, 888, 179], function () {
      return (e = 2095), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
