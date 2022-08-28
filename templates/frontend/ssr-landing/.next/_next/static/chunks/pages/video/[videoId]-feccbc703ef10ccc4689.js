_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [21],
  {
    '/kYb': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return g;
      });
      var i = n('q1tI'),
        r = n.n(i),
        a = n('vOnD'),
        o = n('WqaS'),
        c = n('wx14'),
        l = n('ZMKu'),
        u = r.a.createElement;
      function s(t) {
        return u(
          d,
          { initial: 'rest', whileHover: 'hover', whileTap: 'tap', animate: 'rest' },
          u(
            'svg',
            Object(c.a)({ width: '40', height: '40', viewBox: '0 0 50 50' }, t),
            u(p, { cx: '25', cy: '25', r: '25' }),
            u(h, {
              variants: { rest: { x: 0, scale: 1 }, hover: { x: -2, scale: 1.0625 }, tap: { x: -100, scale: 0.95 } },
              d: 'M31 24h-9.6l3.3-3.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5 5c-0.1 0.1-0.2 0.2-0.2 0.3 -0.1 0.2-0.1 0.5 0 0.8 0.1 0.1 0.1 0.2 0.2 0.3l5 5C23.5 30.9 23.7 31 24 31s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4L21.4 26H31c0.6 0 1-0.4 1-1S31.6 24 31 24z',
            })
          )
        );
      }
      var d = Object(a.d)(l.b.div).withConfig({ displayName: 'back__IconWrapper', componentId: 'om8no8-0' })(
          ['cursor:pointer;width:40px;height:40px;&:hover{circle{fill:', ';}}'],
          function (t) {
            return t.theme.colors.itemBackgroundHover;
          }
        ),
        p = a.d.circle.withConfig({ displayName: 'back__StyledCircle', componentId: 'om8no8-1' })(
          ['fill:', ';transition:fill ', ';'],
          function (t) {
            return t.theme.colors.sidebarBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          }
        ),
        h = Object(a.d)(l.b.path).withConfig({ displayName: 'back__StyledPath', componentId: 'om8no8-2' })(
          ['fill:', ';'],
          function (t) {
            return t.theme.colors.icon;
          }
        ),
        m = n('20a2'),
        f = r.a.createElement;
      function g(t) {
        var e = t.onClick,
          n = Object(m.useRouter)();
        return f(
          v,
          { alignItems: 'center' },
          f(s, {
            onClick:
              e ||
              function () {
                return n.back();
              },
          })
        );
      }
      var v = Object(a.d)(o.a).withConfig({
        displayName: 'back-navigation__NavigationContainer',
        componentId: 'kfmxgl-0',
      })(['max-height:40px;']);
    },
    '1LmX': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return h;
      });
      var i = n('q1tI'),
        r = n.n(i),
        a = n('vOnD'),
        o = n('F6jV'),
        c = n('wx14'),
        l = n('rePB'),
        u = r.a.createElement;
      function s(t, e) {
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
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(n), !0).forEach(function (e) {
                Object(l.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var p = r.a.createElement;
      function h(t) {
        var e,
          n = t.className,
          r = t.data,
          a = t.variant,
          c = void 0 === a ? 'large' : a,
          l = t.artistName,
          u = Object(i.useState)(!1),
          s = u[0],
          d = u[1],
          h = function () {
            var t;
            return r.id ? r.id : null === (t = r.url) || void 0 === t ? void 0 : t.split('embed/')[1];
          },
          k = null === (e = r.url) || void 0 === e ? void 0 : e.includes('list=');
        return p(
          m,
          { className: n },
          p(
            f,
            null,
            s
              ? p('iframe', {
                  className: 'iframe',
                  title: r.title ? r.title : 'Music Video',
                  src: (function () {
                    var t = h();
                    return t
                      ? k
                        ? 'https://www.youtube.com/embed/videoseries?list='.concat(t)
                        : 'https://www.youtube.com/embed/'.concat(t, '?autoplay=1&controls=0&disablekb=1&rel=0')
                      : '';
                  })(),
                  width: '100%',
                  height: '100%',
                  frameBorder: '0',
                  allow: 'autoplay',
                  allowFullScreen: !0,
                })
              : p(
                  g,
                  {
                    onClick: function () {
                      analytics.track('Tracpage Link Click', {
                        artist_id: l,
                        category: 'traclink' === r.type ? 'Release' : 'Url',
                        name: r.title,
                      }),
                        d(!s);
                    },
                  },
                  p(v, null, p(o.a, null)),
                  p(b, {
                    variant: c,
                    src: (function () {
                      var t = h();
                      return [
                        'https://img.youtube.com/vi/'.concat(t, '/maxresdefault.jpg'),
                        'https://img.youtube.com/vi/'.concat(t, '/hqdefault.jpg'),
                        'https://img.youtube.com/vi/'.concat(t, '/mqdefault.jpg'),
                        'https://img.youtube.com/vi/'.concat(t, '/default.jpg'),
                      ];
                    })(),
                    alt: r.title || 'Music Video',
                  })
                )
          ),
          p(y, null, p(x, null, r.title), p(w, null, l))
        );
      }
      var m = a.d.div.withConfig({ displayName: 'video-player__VideoContainer', componentId: 'sc-19p591d-0' })([
          'display:grid;grid-template-columns:1fr;gap:24px;',
        ]),
        f = a.d.div.withConfig({ displayName: 'video-player__VideoWrapper', componentId: 'sc-19p591d-1' })([
          'width:100%;position:relative;border-radius:5px;overflow:hidden;height:0;padding-top:56.25%;> iframe{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;}',
        ]),
        g = a.d.div.withConfig({ displayName: 'video-player__ImageWrapper', componentId: 'sc-19p591d-2' })([
          'cursor:pointer;display:flex;justify-content:center;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;',
        ]),
        v = a.d.button.withConfig({ displayName: 'video-player__PlayButton', componentId: 'sc-19p591d-3' })(
          [
            'background-color:',
            ';display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:50%;cursor:pointer;opacity:1;padding:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:opacity ',
            ';&:hover{opacity:0.85;> svg{fill:',
            ';}}> svg{margin-left:4px;fill:',
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
            return t.theme.colors.accentHover;
          },
          function (t) {
            return t.theme.colors.accent;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          }
        ),
        b = Object(a.d)(function (t) {
          var e = Object(i.useState)(t.src),
            n = e[0],
            r = e[1],
            a = Object(i.useState)(t.src.length ? t.src[0] : ''),
            o = a[0],
            l = a[1];
          if (!t.src.length || !o || !n.length) return null;
          var s = function () {
              var t = n.slice(1);
              r(t), t.length && l(t[0]);
            },
            p = d(
              d({}, t),
              {},
              {
                src: o,
                onError: s,
                onLoad: function (t) {
                  120 === t.currentTarget.naturalWidth && s();
                },
              }
            );
          return u('img', Object(c.a)({}, p, { alt: t.alt }));
        }).withConfig({ displayName: 'video-player__CoverImage', componentId: 'sc-19p591d-4' })(
          ['border-radius:5px;', ' ', ''],
          function (t) {
            return 'large' === t.variant && Object(a.c)(['object-fit:cover;width:100%;']);
          },
          function (t) {
            return 'small' === t.variant && Object(a.c)(['object-fit:cover;height:100%;width:100%;']);
          }
        ),
        y = a.d.div.withConfig({ displayName: 'video-player__Info', componentId: 'sc-19p591d-5' })([
          'display:flex;flex-direction:column;gap:12px;',
        ]),
        x = a.d.h4.withConfig({ displayName: 'video-player__Title', componentId: 'sc-19p591d-6' })(
          [
            'color:',
            ';font-weight:800;font-size:32px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;margin:0;@media (max-width:',
            '){font-size:24px;overflow:visible;display:block;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          }
        ),
        w = a.d.h6.withConfig({ displayName: 'video-player__Text', componentId: 'sc-19p591d-7' })(
          ['color:', ';font-size:24px;font-weight:400;margin:0;opacity:0.7;@media (max-width:', '){font-size:16px;}'],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          }
        );
    },
    '22w/': function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/video/[videoId]',
        function () {
          return n('2JbC');
        },
      ]);
    },
    '2JbC': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, '__N_SSP', function () {
          return x;
        }),
        n.d(e, 'default', function () {
          return w;
        });
      var i = n('rePB'),
        r = n('q1tI'),
        a = n.n(r),
        o = n('vOnD'),
        c = n('voqa'),
        l = n('jtTr'),
        u = n('M/EI'),
        s = n('6Hpx'),
        d = n('HkQY'),
        p = n('qYvR'),
        h = n('1LmX'),
        m = n('MWXp'),
        f = n('42Rd'),
        g = n('/kYb'),
        v = a.a.createElement;
      function b(t, e) {
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
      function y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? b(Object(n), !0).forEach(function (e) {
                Object(i.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var x = !0;
      function w(t) {
        var e,
          n,
          i = t.siteData,
          r = t.video,
          o = Object(l.a)(i).pageData,
          b = Object(c.a)();
        return o && o.data
          ? v(
              a.a.Fragment,
              null,
              v(m.a, { pageData: o }),
              v(
                f.a,
                { theme: o ? o.theme : void 0 },
                v(
                  s.a,
                  { pageData: o, hasBackground: !0, hideNavbar: !0, hideCart: !0, action: v(g.a, null) },
                  v(
                    k,
                    null,
                    v(h.a, {
                      data: {
                        title: null === r || void 0 === r ? void 0 : r.title,
                        url: null === r || void 0 === r || null === (e = r.embedData) || void 0 === e ? void 0 : e.url,
                        id:
                          (null === r || void 0 === r || null === (n = r.embedData) || void 0 === n ? void 0 : n.id) ||
                          '',
                        type: null === r || void 0 === r ? void 0 : r.type,
                      },
                      artistName: o.title,
                    }),
                    (function () {
                      if (o)
                        return (
                          (null === o || void 0 === o
                            ? void 0
                            : o.links.filter(function (t) {
                                return 'embed' === t.type;
                              }).length) > 1
                        );
                    })()
                      ? v(
                          a.a.Fragment,
                          null,
                          v(j, null, 'More from'),
                          v(
                            u.a,
                            null,
                            (function () {
                              var t = [],
                                e = [];
                              return (
                                null === o ||
                                  void 0 === o ||
                                  o.links
                                    .sort(function (t, e) {
                                      return t.order - e.order;
                                    })
                                    .forEach(function (t) {
                                      e.push(y(y({}, t), {}, { order: e.length }));
                                    }),
                                (null === e || void 0 === e ? void 0 : e.length) > 0 && t.push(e),
                                t
                              );
                            })().map(function (t) {
                              return t
                                .filter(function (t) {
                                  var e, n;
                                  return (
                                    (null === (e = t.embedData) || void 0 === e ? void 0 : e.id) !==
                                    (null === r || void 0 === r || null === (n = r.embedData) || void 0 === n
                                      ? void 0
                                      : n.id)
                                  );
                                })
                                .map(function (t, e) {
                                  var n, i;
                                  return 'embed' === t.type
                                    ? v(d.a, {
                                        data: {
                                          title: t.title,
                                          url: null === (n = t.embedData) || void 0 === n ? void 0 : n.url,
                                          id: (null === (i = t.embedData) || void 0 === i ? void 0 : i.id) || '',
                                          type: t.type,
                                        },
                                        noAnimation: !0,
                                        artistName: o.title,
                                        key: e,
                                      })
                                    : null;
                                });
                            })
                          )
                        )
                      : null,
                    b
                      ? v(
                          O,
                          null,
                          v(p.a, {
                            avatar: (null === o || void 0 === o ? void 0 : o.avatar) || '',
                            title: (null === o || void 0 === o ? void 0 : o.title) || '',
                          }),
                          v(_, { href: '/' }, 'View Profile')
                        )
                      : null
                  )
                )
              )
            )
          : null;
      }
      var k = o.d.div.withConfig({ displayName: 'videoId__Wrapper', componentId: 'sc-1a956zz-0' })([
          'max-width:608px;margin:0 auto;',
        ]),
        j = o.d.h3.withConfig({ displayName: 'videoId__MoreTitle', componentId: 'sc-1a956zz-1' })(
          [
            'font-size:24px;font-weight:800;line-height:24px;margin:70px 0 40px;color:',
            ';@media (max-width:',
            '){margin:40px 0;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        O = o.d.div.withConfig({ displayName: 'videoId__MobileInfo', componentId: 'sc-1a956zz-2' })([
          'margin-top:32px;padding:0 24px;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;gap:24px;',
        ]),
        _ = o.d.a.withConfig({ displayName: 'videoId__HomeButton', componentId: 'sc-1a956zz-3' })(
          [
            'background-color:',
            ';color:',
            ';font-size:14px;font-weight:700;line-height:24px;border-radius:50px;padding:8px 20px;transition:background-color ',
            ';&:hover,&:focus,&:active{background-color:',
            ';}',
          ],
          function (t) {
            return t.theme.colors.inputsBackground;
          },
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            return t.theme.colors.inputsBackgroundHover;
          }
        );
    },
    '5hsk': function (t, e, n) {
      'use strict';
      var i = n('q1tI'),
        r = n.n(i),
        a = n('vOnD'),
        o = r.a.createElement;
      e.a = function (t) {
        var e = t.className,
          n = t.children;
        return o(c, { className: e || '' }, n);
      };
      var c = a.d.div.withConfig({ displayName: 'play-wrapper__PlayWrapper', componentId: 'sc-2nscag-0' })(
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
    HkQY: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return h;
      });
      var i = n('q1tI'),
        r = n.n(i),
        a = n('F6jV'),
        o = n('5wV8'),
        c = n('yQlh'),
        l = n('rJDM'),
        u = n('4+F4'),
        s = n('5hsk'),
        d = n('vZwk'),
        p = r.a.createElement;
      function h(t) {
        var e = t.data,
          n = t.className,
          i = t.artistName,
          h = t.hasDelay,
          m = t.noAnimation;
        return e.title && e.url
          ? p(
              c.a,
              {
                className: n || '',
                href: '/video/'.concat(e.id),
                onClick: function () {
                  analytics.track('Tracpage Link Click', { artist_id: i, category: 'embed' === e.type, name: e.title });
                },
                hasDelay: h,
                highlight: e.highlight ? 'highlight' : '',
                noAnimation: m,
                image: p(
                  r.a.Fragment,
                  null,
                  p(o.a, {
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
                  p(s.a, { className: 'play-icon '.concat(e.highlight ? 'highlight' : '') }, p(a.a, null))
                ),
              },
              p(
                d.a,
                { highlight: e.highlight },
                p(
                  u.a,
                  { className: ''.concat(e.highlight ? 'highlight' : '') },
                  p('h3', null, e.title),
                  p('p', null, i, ', Star6ixse7en, MRG, Sweez')
                ),
                e.highlight ? p(l.a, { className: 'badge' }) : null
              )
            )
          : null;
      }
    },
    'M/EI': function (t, e, n) {
      'use strict';
      var i = n('q1tI'),
        r = n.n(i),
        a = n('vOnD'),
        o = r.a.createElement,
        c = a.d.div.withConfig({ displayName: 'grid__StyledGrid', componentId: 'sc-1mu4cgu-0' })(
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
          n = t.children;
        return o(c, { className: e || '' }, n);
      };
    },
    MWXp: function (t, e, n) {
      'use strict';
      var i = n('q1tI'),
        r = n.n(i),
        a = n('9ixD'),
        o = r.a.createElement;
      e.a = function (t) {
        var e = t.pageData;
        return o(
          r.a.Fragment,
          null,
          o(a.a, {
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
    WqaS: function (t, e, n) {
      'use strict';
      var i = n('q1tI'),
        r = n('vOnD'),
        a = i.createElement;
      e.a = Object(r.d)(function (t) {
        return a(
          'div',
          {
            className: t.className,
            onClick: function (e) {
              return t.onClick ? t.onClick(e) : null;
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
    yQlh: function (t, e, n) {
      'use strict';
      var i = n('ODXe'),
        r = n('q1tI'),
        a = n.n(r),
        o = n('vOnD'),
        c = n('ZMKu'),
        l = n('PGlZ'),
        u = n('V0DS'),
        s = n('wx14'),
        d = n('Ff2n'),
        p = a.a.createElement,
        h = function (t) {
          var e = t.className,
            n = t.children,
            i = Object(d.a)(t, ['className', 'children']);
          return p(m, Object(s.a)({ className: 'wrapper-image '.concat(e || '') }, i), n);
        },
        m = Object(o.d)(c.b.div).withConfig({ displayName: 'wrapper-image__Wrapper', componentId: 'sc-1uhyz08-0' })(
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
        f = a.a.createElement,
        g =
          ((e.a = function (t) {
            var e = t.className,
              n = t.children,
              r = t.href,
              a = t.hasDelay,
              o = t.image,
              s = t.highlight,
              d = t.noAnimation,
              p = t.onClick,
              m = Object(l.a)({ root: null, rootMargin: '100px 0px', threshold: 0.3, triggerOnce: !0 }),
              b = Object(i.a)(m, 2),
              y = b[0],
              x = b[1];
            return f(
              g,
              {
                className: e || '',
                href: r,
                onClick: p,
                ref: y,
                variants: u.e,
                initial: 'initial',
                animate: x || 0 === a || d ? 'animate' : 'initial',
                exit: 'exit',
                transition: { duration: 0.35, delay: a ? 0.1 * a : 0, ease: [0.43, 0.13, 0.23, 0.96] },
              },
              f(
                v,
                { initial: 'rest', whileHover: 'hover', whileTap: 'tap', animate: 'rest', className: 'wrapper' },
                f(h, { className: s }, f(c.b.div, { className: 'motion', variants: u.c, transition: u.b }, o)),
                n
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
  [['22w/', 0, 2, 3, 1, 4, 5]],
]);
