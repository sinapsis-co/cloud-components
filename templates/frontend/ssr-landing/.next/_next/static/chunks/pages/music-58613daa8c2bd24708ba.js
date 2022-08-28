_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [20],
  {
    '5hsk': function (t, e, i) {
      'use strict';
      var n = i('q1tI'),
        a = i.n(n),
        r = i('vOnD'),
        o = a.a.createElement;
      e.a = function (t) {
        var e = t.className,
          i = t.children;
        return o(c, { className: e || '' }, i);
      };
      var c = r.d.div.withConfig({ displayName: 'play-wrapper__PlayWrapper', componentId: 'sc-2nscag-0' })(
        [
          'background-color:',
          ';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:50%;cursor:pointer;opacity:0;padding:0;overflow:hidden;transition:opacity ',
          ';> svg{fill:',
          ';transition:fill ',
          ';}',
        ],
        function (t) {
          return t.theme.colors.background;
        },
        function (t) {
          var e = t.theme;
          return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
        },
        function (t) {
          return t.theme.colors.accent;
        },
        function (t) {
          var e = t.theme;
          return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
        }
      );
    },
    HkQY: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return p;
      });
      var n = i('q1tI'),
        a = i.n(n),
        r = i('F6jV'),
        o = i('5wV8'),
        c = i('yQlh'),
        l = i('rJDM'),
        h = i('4+F4'),
        s = i('5hsk'),
        u = i('vZwk'),
        g = a.a.createElement;
      function p(t) {
        var e = t.data,
          i = t.className,
          n = t.artistName,
          p = t.hasDelay,
          d = t.noAnimation;
        return e.title && e.url
          ? g(
              c.a,
              {
                className: i || '',
                href: '/video/'.concat(e.id),
                onClick: function () {
                  analytics.track('Tracpage Link Click', { artist_id: n, category: 'embed' === e.type, name: e.title });
                },
                hasDelay: p,
                highlight: e.highlight ? 'highlight' : '',
                noAnimation: d,
                image: g(
                  a.a.Fragment,
                  null,
                  g(o.a, {
                    src:
                      (function () {
                        var t = (function () {
                          var t;
                          return e.id ? e.id : null === (t = e.url) || void 0 === t ? void 0 : t.split('embed/')[1];
                        })();
                        return [
                          'https://img.youtube.com/vi/'.concat(t, '/maxresdefault.jpg'),
                          'https://img.youtube.com/vi/'.concat(t, '/hqdefault.jpg'),
                          'https://img.youtube.com/vi/'.concat(t, '/mqdefault.jpg'),
                          'https://img.youtube.com/vi/'.concat(t, '/default.jpg'),
                        ];
                      })()[0] || void 0,
                    alt: e.title,
                    variant: e.highlight ? 'squareHighlight' : 'square',
                  }),
                  g(s.a, { className: 'play-icon '.concat(e.highlight ? 'highlight' : '') }, g(r.a, null))
                ),
              },
              g(
                u.a,
                { highlight: e.highlight },
                g(
                  h.a,
                  { className: ''.concat(e.highlight ? 'highlight' : '') },
                  g('h3', null, e.title),
                  g('p', null, n, ', Star6ixse7en, MRG, Sweez')
                ),
                e.highlight ? g(l.a, { className: 'badge' }) : null
              )
            )
          : null;
      }
    },
    'M/EI': function (t, e, i) {
      'use strict';
      var n = i('q1tI'),
        a = i.n(n),
        r = i('vOnD'),
        o = a.a.createElement,
        c = r.d.div.withConfig({ displayName: 'grid__StyledGrid', componentId: 'sc-1mu4cgu-0' })(
          [
            'display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:32px;.full-width{grid-column:span 2;}@media (max-width:',
            '){grid-column-gap:16px;grid-row-gap:32px;}& > *{flex-shrink:0;}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptop, 'px');
          }
        );
      e.a = function (t) {
        var e = t.className,
          i = t.children;
        return o(c, { className: e || '' }, i);
      };
    },
    MWXp: function (t, e, i) {
      'use strict';
      var n = i('q1tI'),
        a = i.n(n),
        r = i('9ixD'),
        o = a.a.createElement;
      e.a = function (t) {
        var e = t.pageData;
        return o(
          a.a.Fragment,
          null,
          o(r.a, {
            title: e.title,
            description: e.description || e.data.bio || e.title,
            openGraph: {
              title: e.title,
              description: e.description || e.data.bio || e.title,
              url: 'https://'.concat(e.subdomain, '.').concat('development.trac.co', '/'),
              images: [{ url: e.avatar }],
              type: 'website',
            },
          })
        );
      };
    },
    P1vn: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, '__N_SSP', function () {
          return f;
        }),
        i.d(e, 'default', function () {
          return v;
        });
      var n = i('rePB'),
        a = i('q1tI'),
        r = i.n(a),
        o = i('M/EI'),
        c = i('SL6b'),
        l = i('6Hpx'),
        h = i('MWXp'),
        s = i('42Rd'),
        u = i('jtTr'),
        g = i('HkQY'),
        p = r.a.createElement;
      function d(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? d(Object(i), !0).forEach(function (e) {
                Object(n.a)(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : d(Object(i)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
              });
        }
        return t;
      }
      var f = !0;
      function v(t) {
        var e = Object(u.a)(t.siteData).pageData;
        return e && e.id
          ? p(
              r.a.Fragment,
              null,
              p(h.a, { pageData: e }),
              p(
                s.a,
                { theme: e ? e.theme : void 0 },
                p(
                  l.a,
                  { pageData: e },
                  p(
                    o.a,
                    null,
                    (function () {
                      var t = [],
                        i = [];
                      return (
                        null === e ||
                          void 0 === e ||
                          e.links
                            .sort(function (t, e) {
                              return t.order - e.order;
                            })
                            .forEach(function (t) {
                              i.push(m(m({}, t), {}, { order: i.length }));
                            }),
                        (null === i || void 0 === i ? void 0 : i.length) > 0 && t.push(i),
                        t
                      );
                    })().map(function (t) {
                      return t.map(function (t, i) {
                        var n, a;
                        return 'embed' === t.type
                          ? p(g.a, {
                              data: {
                                title: t.title,
                                url: null === (n = t.embedData) || void 0 === n ? void 0 : n.url,
                                id: (null === (a = t.embedData) || void 0 === a ? void 0 : a.id) || '',
                                type: t.type,
                              },
                              artistName: e.title,
                              key: i,
                            })
                          : 'traclink' === t.type
                          ? p(c.a, { data: t, key: i, className: t.highlight ? 'highlight' : '', artistName: e.title })
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
    SL6b: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return p;
      });
      var n = i('q1tI'),
        a = i.n(n),
        r = i('F6jV'),
        o = i('5wV8'),
        c = i('yQlh'),
        l = i('rJDM'),
        h = i('4+F4'),
        s = i('5hsk'),
        u = i('vZwk'),
        g = a.a.createElement;
      function p(t) {
        var e = t.data,
          i = t.className,
          n = t.artistName,
          p = t.hasDelay,
          d = t.noAnimation;
        return e.title && e.url
          ? g(
              c.a,
              {
                className: i || '',
                href: ''.concat(e.url),
                onClick: function () {
                  analytics.track('Tracpage Link Click', {
                    artist_id: n,
                    category: 'traclink' === e.type ? 'Release' : 'Url',
                    name: e.title,
                  });
                },
                hasDelay: p,
                highlight: e.highlight ? 'highlight' : '',
                noAnimation: d,
                image: g(
                  a.a.Fragment,
                  null,
                  g(o.a, { src: e.avatar, alt: e.title, variant: e.highlight ? 'squareHighlight' : 'square' }),
                  g(s.a, { className: 'play-icon '.concat(e.highlight ? 'highlight' : '') }, g(r.a, null))
                ),
              },
              g(
                u.a,
                { highlight: e.highlight },
                g(
                  h.a,
                  { className: ''.concat(e.highlight ? 'highlight' : '') },
                  g('h3', null, e.title),
                  g('p', null, n, ', Star6ixse7en, MRG, Sweez')
                ),
                e.highlight ? g(l.a, { className: 'badge' }) : null
              )
            )
          : null;
      }
    },
    gq86: function (t, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/music',
        function () {
          return i('P1vn');
        },
      ]);
    },
    yQlh: function (t, e, i) {
      'use strict';
      var n = i('ODXe'),
        a = i('q1tI'),
        r = i.n(a),
        o = i('vOnD'),
        c = i('ZMKu'),
        l = i('PGlZ'),
        h = i('V0DS'),
        s = i('wx14'),
        u = i('Ff2n'),
        g = r.a.createElement,
        p = function (t) {
          var e = t.className,
            i = t.children,
            n = Object(u.a)(t, ['className', 'children']);
          return g(d, Object(s.a)({ className: 'wrapper-image '.concat(e || '') }, n), i);
        },
        d = Object(o.d)(c.b.div).withConfig({ displayName: 'wrapper-image__Wrapper', componentId: 'sc-1uhyz08-0' })(
          [
            'padding:32px;border-radius:5px;background-color:',
            ';position:relative;max-height:',
            ';width:100%;display:flex;justify-content:center;transition:background-color ',
            ';@media (max-width:',
            '){display:flex;justify-content:center;align-items:center;padding:0;width:auto;max-height:',
            ';.motion{max-height:',
            ';}}&.highlight{height:',
            ';padding:0;width:auto;background:none;max-height:none;@media (max-width:',
            '){max-height:none;height:',
            ';.motion{height:',
            ';max-height:none;}}}',
          ],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            var e = t.theme;
            return 'calc('.concat(e.sizes.coverSize, ' + (32px * 2))');
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          },
          function (t) {
            return t.theme.sizes.coverSizeMobile;
          },
          function (t) {
            return t.theme.sizes.coverSizeMobile;
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlight;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlightMobile;
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlightMobile;
          }
        ),
        m = r.a.createElement,
        f =
          ((e.a = function (t) {
            var e = t.className,
              i = t.children,
              a = t.href,
              r = t.hasDelay,
              o = t.image,
              s = t.highlight,
              u = t.noAnimation,
              g = t.onClick,
              d = Object(l.a)({ root: null, rootMargin: '100px 0px', threshold: 0.3, triggerOnce: !0 }),
              b = Object(n.a)(d, 2),
              y = b[0],
              x = b[1];
            return m(
              f,
              {
                className: e || '',
                href: a,
                onClick: g,
                ref: y,
                variants: h.e,
                initial: 'initial',
                animate: x || 0 === r || u ? 'animate' : 'initial',
                exit: 'exit',
                transition: { duration: 0.35, delay: r ? 0.1 * r : 0, ease: [0.43, 0.13, 0.23, 0.96] },
              },
              m(
                v,
                { initial: 'rest', whileHover: 'hover', whileTap: 'tap', animate: 'rest', className: 'wrapper' },
                m(p, { className: s }, m(c.b.div, { className: 'motion', variants: h.c, transition: h.b }, o)),
                i
              )
            );
          }),
          Object(o.d)(c.b.a).withConfig({ displayName: 'link__StyledLink', componentId: 'gyn5x7-0' })(
            [
              '&.highlight{background-color:',
              ';grid-column:span 2;order:-1;.wrapper{flex-direction:row;padding:32px;gap:32px;border-radius:5px;height:100%;@media (max-width:',
              '){padding:24px;gap:24px;flex-direction:column;justify-content:center;align-items:center;}}}&:hover{.wrapper-image{background-color:',
              ';&.highlight{background:none;}}}',
            ],
            function (t) {
              return t.theme.colors.highlightBackground;
            },
            function (t) {
              var e = t.theme;
              return ''.concat(e.breakpoints.laptopS, 'px');
            },
            function (t) {
              return t.theme.colors.itemBackgroundHover;
            }
          )),
        v = Object(o.d)(c.b.div).withConfig({ displayName: 'link__Wrapper', componentId: 'gyn5x7-1' })(
          [
            'display:flex;flex-direction:column;align-items:flex-start;gap:24px;@media (max-width:',
            '){gap:12px;}&:hover{.play-icon{opacity:1;}}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          }
        );
    },
  },
  [['gq86', 0, 2, 3, 1, 4, 5]],
]);
