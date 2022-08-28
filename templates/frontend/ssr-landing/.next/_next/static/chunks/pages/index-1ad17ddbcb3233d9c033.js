_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [13],
  {
    '/EDR': function (t, i, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return e('QeBL');
        },
      ]);
    },
    '8kRk': function (t, i, e) {
      'use strict';
      e.d(i, 'a', function () {
        return m;
      });
      var n = e('q1tI'),
        a = e.n(n),
        r = e('vOnD'),
        o = e('Vt1p'),
        l = e('Zwk6'),
        c = e('5wV8'),
        h = e('rJDM'),
        u = e('4+F4'),
        s = e('vZwk'),
        d = e('yQlh'),
        g = a.a.createElement;
      function m(t) {
        var i = t.data,
          e = t.className,
          n = t.artistId,
          a = t.releaseId,
          r = t.hasDelay,
          d = t.noAnimation,
          m = ''
            .concat(e || '', ' ')
            .concat(i.highlight ? 'highlight' : '', ' ')
            .concat(i.platform ? 'platform' : '');
        return i.title && i.url
          ? g(
              p,
              {
                className: m,
                href: '/link/'.concat(Object(l.a)(i.title)),
                onClick: function () {
                  analytics.track('Traclink Click', { dsp: i.platform, artist_id: n, release_id: a });
                },
                hasDelay: r,
                highlight: i.highlight ? 'highlight' : '',
                noAnimation: d,
                image: i.platform
                  ? g(v, { as: 'div' }, Object(o.a)(i.platform))
                  : g(c.a, { src: i.avatar, alt: i.title, variant: i.highlight ? 'squareHighlight' : 'square' }),
              },
              g(
                s.a,
                { highlight: i.highlight },
                g(u.a, { className: ''.concat(i.highlight ? 'highlight' : '') }, g('h3', null, i.title)),
                i.highlight ? g(h.a, { className: 'badge' }) : null
              )
            )
          : null;
      }
      var p = Object(r.d)(d.a).withConfig({ displayName: 'large-simple-link__StyledLink', componentId: 'f4d7wc-0' })(
          ['&.platform{.wrapper{background-color:', ';&:hover{background-color:', ';.icon{background-color:', ';}}}}'],
          function (t) {
            return t.theme.colors.sidebarBackground;
          },
          function (t) {
            return t.theme.colors.inputsBackground;
          },
          function (t) {
            return t.theme.colors.inputsBackground;
          }
        ),
        f = r.d.button.withConfig({ displayName: 'large-simple-link__Icon', componentId: 'f4d7wc-1' })(
          [
            'background-color:',
            ';display:flex;justify-content:center;align-items:center;flex:0 0 auto;width:',
            ';height:',
            ';border-radius:50%;cursor:pointer;overflow:visible;',
          ],
          function (t) {
            return t.theme.colors.sidebarBackground;
          },
          function (t) {
            return t.theme.sizes.commonIconSize;
          },
          function (t) {
            return t.theme.sizes.commonIconSize;
          }
        ),
        v = Object(r.d)(f).withConfig({ displayName: 'large-simple-link__PlatformIcon', componentId: 'f4d7wc-2' })(
          ['background-color:', ';> svg{height:20px;fill:', ';}'],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            return t.theme.colors.primary;
          }
        );
    },
    DKmw: function (t, i, e) {
      'use strict';
      e.d(i, 'a', function () {
        return r;
      });
      var n = e('q1tI'),
        a = e('MllO');
      function r() {
        var t = Object(n.useState)({ width: void 0, height: void 0 }),
          i = t[0],
          e = t[1];
        return (
          Object(n.useEffect)(function () {
            function t() {
              e({ width: window.innerWidth, height: window.innerHeight });
            }
            return (
              window.addEventListener('resize', t),
              t(),
              function () {
                return window.removeEventListener('resize', t);
              }
            );
          }, []),
          !!i.width && i.width > a.a.laptopXL
        );
      }
    },
    'M/EI': function (t, i, e) {
      'use strict';
      var n = e('q1tI'),
        a = e.n(n),
        r = e('vOnD'),
        o = a.a.createElement,
        l = r.d.div.withConfig({ displayName: 'grid__StyledGrid', componentId: 'sc-1mu4cgu-0' })(
          [
            'display:grid;grid-template-columns:repeat(3,minmax(100px,1fr));gap:32px;.full-width{grid-column:span 3;}@media (max-width:',
            '){grid-template-columns:repeat(2,minmax(100px,1fr));.full-width{grid-column:span 2;}}@media (max-width:',
            '){grid-column-gap:16px;grid-row-gap:32px;}& > *{flex-shrink:0;}',
          ],
          function (t) {
            var i = t.theme;
            return ''.concat(i.breakpoints.laptopXL, 'px');
          },
          function (t) {
            var i = t.theme;
            return ''.concat(i.breakpoints.laptop, 'px');
          }
        );
      i.a = function (t) {
        var i = t.className,
          e = t.children;
        return o(l, { className: i || '' }, e);
      };
    },
    QeBL: function (t, i, e) {
      'use strict';
      e.r(i),
        function (t) {
          e.d(i, '__N_SSP', function () {
            return v;
          }),
            e.d(i, 'default', function () {
              return w;
            });
          var n = e('q1tI'),
            a = e.n(n),
            r = e('9ixD'),
            o = e('jtTr'),
            l = e('M/EI'),
            c = e('SL6b'),
            h = e('6Hpx'),
            u = e('HkQY'),
            s = e('FBxL'),
            d = e('42Rd'),
            g = e('xQzR'),
            m = e('DKmw'),
            p = e('8kRk'),
            f = a.a.createElement,
            v = !0;
          function w(i) {
            var e = Object(o.a)(i.siteData).pageData,
              v = i.merchData,
              w = Object(m.a)(),
              k = v.sort(function (t, i) {
                return (t.order || 0) - (i.order || 0);
              });
            (k = k.map(function (t) {
              var i,
                e = t.colors.find(function (t) {
                  return 'White' == t.name || 'white' == t.name;
                }),
                n = t.colors[0].image || (null === (i = t.colors[0].images) || void 0 === i ? void 0 : i[0].src);
              return e ? ((t.image = e.image || t.image), t) : n ? ((t.image = n || t.image), t) : t;
            })),
              Object(n.useEffect)(function () {
                var t, i;
                window.analytics &&
                  window.analytics.track('Tracpage Viewed', {
                    artist_id: null === e || void 0 === e ? void 0 : e.id,
                    name: null === e || void 0 === e ? void 0 : e.title,
                    releases: null === e || void 0 === e || null === (t = e.links) || void 0 === t ? void 0 : t.length,
                    social_links:
                      null === e || void 0 === e || null === (i = e.data) || void 0 === i
                        ? void 0
                        : i.social.map(function (t) {
                            return t.provider;
                          }),
                  });
              });
            return e && e.id
              ? f(
                  a.a.Fragment,
                  null,
                  f(r.a, {
                    title: e.title,
                    description: e.description || e.data.bio || e.title,
                    openGraph: {
                      title: e.title,
                      description: e.description || e.data.bio || e.title,
                      url: 'https://'.concat(e.subdomain, '.').concat(t.env.NEXT_PUBLIC_APP_BASE_DOMAIN, '/'),
                      images: [{ url: e.avatar }],
                      type: 'website',
                    },
                  }),
                  f(
                    d.a,
                    { theme: e ? e.theme : void 0 },
                    f(
                      h.a,
                      { pageData: e, noAnimation: !0 },
                      f(
                        l.a,
                        null,
                        (function () {
                          var t = [],
                            i = [],
                            n = [],
                            a = [],
                            r = [];
                          null === e ||
                            void 0 === e ||
                            e.links.forEach(function (t) {
                              return t.highlight ? a.push(t) : 'url' === t.type ? n.push(t) : i.push(t);
                            }),
                            k.forEach(function (t) {
                              return r.push(t);
                            }),
                            (t = [].concat(a));
                          do {
                            var o, l;
                            if (r.length)
                              r.length > 1 &&
                              0 === i.length &&
                              (null === (o = t[t.length - 1]) || void 0 === o || !o.price)
                                ? (t.push(r[0]), t.push(r[1]), r.shift(), r.shift())
                                : (t.push(r[0]), r.shift());
                            if (i.length)
                              i.length > 1 &&
                              0 === r.length &&
                              (null === (l = t[t.length - 1]) || void 0 === l || !l.price)
                                ? (t.push(i[0]), t.push(i[1]), i.shift(), i.shift())
                                : (t.push(i[0]), i.shift());
                            n.length && (t.push(n[0]), n.shift());
                          } while (n.length || r.length || i.length);
                          return t;
                        })().map(function (t, i) {
                          var n, a;
                          return 'type' in t
                            ? 'url' === t.type
                              ? w
                                ? f(p.a, {
                                    data: t,
                                    key: ''.concat(i, '-').concat(t.title),
                                    releaseId: e.id,
                                    artistId: e.ownerId,
                                  })
                                : f(s.a, {
                                    className: 'full-width',
                                    data: t,
                                    key: ''.concat(i, '-').concat(t.title),
                                    releaseId: e.id,
                                    artistId: e.ownerId,
                                    hasDelay: i,
                                  })
                              : 'traclink' === t.type
                              ? f(c.a, {
                                  className: t.highlight ? 'highlight' : '',
                                  data: t,
                                  artistName: t.title,
                                  key: ''.concat(i, '-').concat(t.title),
                                  hasDelay: i,
                                })
                              : f(u.a, {
                                  className: t.highlight ? 'highlight' : '',
                                  data: {
                                    title: t.title,
                                    url: null === (n = t.embedData) || void 0 === n ? void 0 : n.url,
                                    id: (null === (a = t.embedData) || void 0 === a ? void 0 : a.id) || '',
                                    highlight: t.highlight,
                                    type: t.type,
                                  },
                                  artistName: e.title,
                                  key: ''.concat(i, '-').concat(t.title),
                                  hasDelay: i,
                                })
                            : f(g.a, {
                                key: ''.concat(i, '-').concat(t.title),
                                product: t,
                                hasDelay: i,
                                hasAnimation: !0,
                              });
                        })
                      )
                    )
                  )
                )
              : null;
          }
        }.call(this, e('8oxB'));
    },
  },
  [['/EDR', 0, 2, 3, 1, 4]],
]);
