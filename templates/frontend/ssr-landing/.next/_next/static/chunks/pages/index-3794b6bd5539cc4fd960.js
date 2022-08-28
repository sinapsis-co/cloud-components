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
    'M/EI': function (t, i, e) {
      'use strict';
      var n = e('q1tI'),
        a = e.n(n),
        o = e('vOnD'),
        r = a.a.createElement,
        l = o.d.div.withConfig({ displayName: 'grid__StyledGrid', componentId: 'sc-1mu4cgu-0' })(
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
        return r(l, { className: i || '' }, e);
      };
    },
    QeBL: function (t, i, e) {
      'use strict';
      e.r(i),
        e.d(i, '__N_SSP', function () {
          return j;
        }),
        e.d(i, 'default', function () {
          return L;
        });
      var n = e('q1tI'),
        a = e.n(n),
        o = e('9ixD'),
        r = e('jtTr'),
        l = e('M/EI'),
        c = e('SL6b'),
        h = e('6Hpx'),
        d = e('HkQY'),
        u = e('FBxL'),
        s = e('42Rd'),
        g = e('xQzR'),
        p = e('MllO');
      var m = e('vOnD'),
        f = e('Vt1p'),
        v = e('Zwk6'),
        w = e('5wV8'),
        k = e('rJDM'),
        y = e('4+F4'),
        b = e('vZwk'),
        _ = e('yQlh'),
        N = a.a.createElement;
      function I(t) {
        var i = t.data,
          e = t.className,
          n = t.artistId,
          a = t.releaseId,
          o = t.hasDelay,
          r = t.noAnimation,
          l = ''
            .concat(e || '', ' ')
            .concat(i.highlight ? 'highlight' : '', ' ')
            .concat(i.platform ? 'platform' : '');
        return i.title && i.url
          ? N(
              x,
              {
                className: l,
                href: '/link/'.concat(Object(v.a)(i.title)),
                onClick: function () {
                  analytics.track('Traclink Click', { dsp: i.platform, artist_id: n, release_id: a });
                },
                hasDelay: o,
                highlight: i.highlight ? 'highlight' : '',
                noAnimation: r,
                image: i.platform
                  ? N(E, { as: 'div' }, Object(f.a)(i.platform))
                  : N(w.a, { src: i.avatar, alt: i.title, variant: i.highlight ? 'squareHighlight' : 'square' }),
              },
              N(
                b.a,
                { highlight: i.highlight },
                N(y.a, { className: ''.concat(i.highlight ? 'highlight' : '') }, N('h3', null, i.title)),
                i.highlight ? N(k.a, { className: 'badge' }) : null
              )
            )
          : null;
      }
      var x = Object(m.d)(_.a).withConfig({ displayName: 'large-simple-link__StyledLink', componentId: 'f4d7wc-0' })(
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
        D = m.d.button.withConfig({ displayName: 'large-simple-link__Icon', componentId: 'f4d7wc-1' })(
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
        E = Object(m.d)(D).withConfig({ displayName: 'large-simple-link__PlatformIcon', componentId: 'f4d7wc-2' })(
          ['background-color:', ';> svg{height:20px;fill:', ';}'],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        O = a.a.createElement,
        j = !0;
      function L(t) {
        var i = Object(r.a)(t.siteData).pageData,
          e = t.merchData,
          m = (function () {
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
              !!i.width && i.width > p.a.laptopXL
            );
          })(),
          f = e.sort(function (t, i) {
            return (t.order || 0) - (i.order || 0);
          });
        (f = f.map(function (t) {
          var i,
            e,
            n,
            a = t.colors.find(function (t) {
              return 'White' == t.name || 'white' == t.name;
            }),
            o =
              (null === (i = t.colors[0]) || void 0 === i ? void 0 : i.image) ||
              (null === (e = t.colors[0]) || void 0 === e || null === (n = e.images) || void 0 === n
                ? void 0
                : n[0].src);
          return a ? ((t.image = a.image || t.image), t) : o ? ((t.image = o || t.image), t) : t;
        })),
          Object(n.useEffect)(function () {
            var t, e;
            window.analytics &&
              window.analytics.track('Tracpage Viewed', {
                artist_id: null === i || void 0 === i ? void 0 : i.id,
                name: null === i || void 0 === i ? void 0 : i.title,
                releases: null === i || void 0 === i || null === (t = i.links) || void 0 === t ? void 0 : t.length,
                social_links:
                  null === i || void 0 === i || null === (e = i.data) || void 0 === e
                    ? void 0
                    : e.social.map(function (t) {
                        return t.provider;
                      }),
              });
          });
        return i && i.id
          ? O(
              a.a.Fragment,
              null,
              O(o.a, {
                title: i.title,
                description: i.description || i.data.bio || i.title,
                openGraph: {
                  title: i.title,
                  description: i.description || i.data.bio || i.title,
                  url: 'https://'.concat(i.subdomain, '.').concat('development.trac.co', '/'),
                  images: [{ url: i.avatar }],
                  type: 'website',
                },
              }),
              O(
                s.a,
                { theme: i ? i.theme : void 0 },
                O(
                  h.a,
                  { pageData: i, noAnimation: !0 },
                  O(
                    l.a,
                    null,
                    (function () {
                      var t = [],
                        e = [],
                        n = [],
                        a = [],
                        o = [];
                      null === i ||
                        void 0 === i ||
                        i.links.forEach(function (t) {
                          return t.highlight ? a.push(t) : 'url' === t.type ? n.push(t) : e.push(t);
                        }),
                        f.forEach(function (t) {
                          return o.push(t);
                        }),
                        (t = [].concat(a));
                      do {
                        var r, l;
                        if (o.length)
                          o.length > 1 && 0 === e.length && (null === (r = t[t.length - 1]) || void 0 === r || !r.price)
                            ? (t.push(o[0]), t.push(o[1]), o.shift(), o.shift())
                            : (t.push(o[0]), o.shift());
                        if (e.length)
                          e.length > 1 && 0 === o.length && (null === (l = t[t.length - 1]) || void 0 === l || !l.price)
                            ? (t.push(e[0]), t.push(e[1]), e.shift(), e.shift())
                            : (t.push(e[0]), e.shift());
                        n.length && (t.push(n[0]), n.shift());
                      } while (n.length || o.length || e.length);
                      return t;
                    })().map(function (t, e) {
                      var n, a;
                      return 'type' in t
                        ? 'url' === t.type
                          ? m
                            ? O(I, {
                                data: t,
                                key: ''.concat(e, '-').concat(t.title),
                                releaseId: i.id,
                                artistId: i.ownerId,
                              })
                            : O(u.a, {
                                className: 'full-width',
                                data: t,
                                key: ''.concat(e, '-').concat(t.title),
                                releaseId: i.id,
                                artistId: i.ownerId,
                                hasDelay: e,
                              })
                          : 'traclink' === t.type
                          ? O(c.a, {
                              className: t.highlight ? 'highlight' : '',
                              data: t,
                              artistName: t.title,
                              key: ''.concat(e, '-').concat(t.title),
                              hasDelay: e,
                            })
                          : O(d.a, {
                              className: t.highlight ? 'highlight' : '',
                              data: {
                                title: t.title,
                                url: null === (n = t.embedData) || void 0 === n ? void 0 : n.url,
                                id: (null === (a = t.embedData) || void 0 === a ? void 0 : a.id) || '',
                                highlight: t.highlight,
                                type: t.type,
                              },
                              artistName: i.title,
                              key: ''.concat(e, '-').concat(t.title),
                              hasDelay: e,
                            })
                        : O(g.a, { key: ''.concat(e, '-').concat(t.title), product: t, hasDelay: e, hasAnimation: !0 });
                    })
                  )
                )
              )
            )
          : null;
      }
    },
  },
  [['/EDR', 0, 2, 3, 1, 4]],
]);
