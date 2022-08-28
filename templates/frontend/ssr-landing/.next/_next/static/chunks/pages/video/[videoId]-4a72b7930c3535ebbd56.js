_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [22],
  {
    '/kYb': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return h;
      });
      var i = n('q1tI'),
        o = n.n(i),
        r = n('vOnD'),
        a = n('WqaS'),
        c = n('wx14'),
        l = n('ZMKu'),
        d = o.a.createElement;
      function u(t) {
        return d(
          p,
          { initial: 'rest', whileHover: 'hover', whileTap: 'tap', animate: 'rest' },
          d(
            'svg',
            Object(c.a)({ width: '40', height: '40', viewBox: '0 0 50 50' }, t),
            d(s, { cx: '25', cy: '25', r: '25' }),
            d(m, {
              variants: { rest: { x: 0, scale: 1 }, hover: { x: -2, scale: 1.0625 }, tap: { x: -100, scale: 0.95 } },
              d: 'M31 24h-9.6l3.3-3.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5 5c-0.1 0.1-0.2 0.2-0.2 0.3 -0.1 0.2-0.1 0.5 0 0.8 0.1 0.1 0.1 0.2 0.2 0.3l5 5C23.5 30.9 23.7 31 24 31s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4L21.4 26H31c0.6 0 1-0.4 1-1S31.6 24 31 24z',
            })
          )
        );
      }
      var p = Object(r.d)(l.b.div).withConfig({ displayName: 'back__IconWrapper', componentId: 'om8no8-0' })(
          ['cursor:pointer;width:40px;height:40px;&:hover{circle{fill:', ';}}'],
          function (t) {
            return t.theme.colors.itemBackgroundHover;
          }
        ),
        s = r.d.circle.withConfig({ displayName: 'back__StyledCircle', componentId: 'om8no8-1' })(
          ['fill:', ';transition:fill ', ';'],
          function (t) {
            return t.theme.colors.sidebarBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          }
        ),
        m = Object(r.d)(l.b.path).withConfig({ displayName: 'back__StyledPath', componentId: 'om8no8-2' })(
          ['fill:', ';'],
          function (t) {
            return t.theme.colors.icon;
          }
        ),
        f = n('20a2'),
        v = o.a.createElement;
      function h(t) {
        var e = t.onClick,
          n = Object(f.useRouter)();
        return v(
          g,
          { alignItems: 'center' },
          v(u, {
            onClick:
              e ||
              function () {
                return n.back();
              },
          })
        );
      }
      var g = Object(r.d)(a.a).withConfig({
        displayName: 'back-navigation__NavigationContainer',
        componentId: 'kfmxgl-0',
      })(['max-height:40px;']);
    },
    '1LmX': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return m;
      });
      var i = n('q1tI'),
        o = n.n(i),
        r = n('vOnD'),
        a = n('F6jV'),
        c = n('wx14'),
        l = n('rePB'),
        d = o.a.createElement;
      function u(t, e) {
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
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                Object(l.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var s = o.a.createElement;
      function m(t) {
        var e,
          n = t.className,
          o = t.data,
          r = t.variant,
          c = void 0 === r ? 'large' : r,
          l = t.artistName,
          d = Object(i.useState)(!1),
          u = d[0],
          p = d[1],
          m = function () {
            var t;
            return o.id ? o.id : null === (t = o.url) || void 0 === t ? void 0 : t.split('embed/')[1];
          },
          O = null === (e = o.url) || void 0 === e ? void 0 : e.includes('list=');
        return s(
          f,
          { className: n },
          s(
            v,
            null,
            u
              ? s('iframe', {
                  className: 'iframe',
                  title: o.title ? o.title : 'Music Video',
                  src: (function () {
                    var t = m();
                    return t
                      ? O
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
              : s(
                  h,
                  {
                    onClick: function () {
                      analytics.track('Tracpage Link Click', {
                        artist_id: l,
                        category: 'traclink' === o.type ? 'Release' : 'Url',
                        name: o.title,
                      }),
                        p(!u);
                    },
                  },
                  s(g, null, s(a.a, null)),
                  s(b, {
                    variant: c,
                    src: (function () {
                      var t = m();
                      return [
                        'https://img.youtube.com/vi/'.concat(t, '/maxresdefault.jpg'),
                        'https://img.youtube.com/vi/'.concat(t, '/hqdefault.jpg'),
                        'https://img.youtube.com/vi/'.concat(t, '/mqdefault.jpg'),
                        'https://img.youtube.com/vi/'.concat(t, '/default.jpg'),
                      ];
                    })(),
                    alt: o.title || 'Music Video',
                  })
                )
          ),
          s(y, null, s(w, null, o.title), s(x, null, l))
        );
      }
      var f = r.d.div.withConfig({ displayName: 'video-player__VideoContainer', componentId: 'sc-19p591d-0' })([
          'display:grid;grid-template-columns:1fr;gap:24px;',
        ]),
        v = r.d.div.withConfig({ displayName: 'video-player__VideoWrapper', componentId: 'sc-19p591d-1' })([
          'width:100%;position:relative;border-radius:5px;overflow:hidden;height:0;padding-top:56.25%;> iframe{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;}',
        ]),
        h = r.d.div.withConfig({ displayName: 'video-player__ImageWrapper', componentId: 'sc-19p591d-2' })([
          'cursor:pointer;display:flex;justify-content:center;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;',
        ]),
        g = r.d.button.withConfig({ displayName: 'video-player__PlayButton', componentId: 'sc-19p591d-3' })(
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
        b = Object(r.d)(function (t) {
          var e = Object(i.useState)(t.src),
            n = e[0],
            o = e[1],
            r = Object(i.useState)(t.src.length ? t.src[0] : ''),
            a = r[0],
            l = r[1];
          if (!t.src.length || !a || !n.length) return null;
          var u = function () {
              var t = n.slice(1);
              o(t), t.length && l(t[0]);
            },
            s = p(
              p({}, t),
              {},
              {
                src: a,
                onError: u,
                onLoad: function (t) {
                  120 === t.currentTarget.naturalWidth && u();
                },
              }
            );
          return d('img', Object(c.a)({}, s, { alt: t.alt }));
        }).withConfig({ displayName: 'video-player__CoverImage', componentId: 'sc-19p591d-4' })(
          ['border-radius:5px;', ' ', ''],
          function (t) {
            return 'large' === t.variant && Object(r.c)(['object-fit:cover;width:100%;']);
          },
          function (t) {
            return 'small' === t.variant && Object(r.c)(['object-fit:cover;height:100%;width:100%;']);
          }
        ),
        y = r.d.div.withConfig({ displayName: 'video-player__Info', componentId: 'sc-19p591d-5' })([
          'display:flex;flex-direction:column;gap:12px;',
        ]),
        w = r.d.h4.withConfig({ displayName: 'video-player__Title', componentId: 'sc-19p591d-6' })(
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
        x = r.d.h6.withConfig({ displayName: 'video-player__Text', componentId: 'sc-19p591d-7' })(
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
          return w;
        }),
        n.d(e, 'default', function () {
          return x;
        });
      var i = n('rePB'),
        o = n('q1tI'),
        r = n.n(o),
        a = n('vOnD'),
        c = n('voqa'),
        l = n('jtTr'),
        d = n('M/EI'),
        u = n('6Hpx'),
        p = n('HkQY'),
        s = n('qYvR'),
        m = n('1LmX'),
        f = n('MWXp'),
        v = n('42Rd'),
        h = n('/kYb'),
        g = r.a.createElement;
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
      var w = !0;
      function x(t) {
        var e,
          n,
          i = t.siteData,
          o = t.video,
          a = Object(l.a)(i).pageData,
          b = Object(c.a)();
        return a && a.data
          ? g(
              r.a.Fragment,
              null,
              g(f.a, { pageData: a }),
              g(
                v.a,
                { theme: a ? a.theme : void 0 },
                g(
                  u.a,
                  { pageData: a, hasBackground: !0, hideNavbar: !0, hideCart: !0, action: g(h.a, null) },
                  g(
                    O,
                    null,
                    g(m.a, {
                      data: {
                        title: null === o || void 0 === o ? void 0 : o.title,
                        url: null === o || void 0 === o || null === (e = o.embedData) || void 0 === e ? void 0 : e.url,
                        id:
                          (null === o || void 0 === o || null === (n = o.embedData) || void 0 === n ? void 0 : n.id) ||
                          '',
                        type: null === o || void 0 === o ? void 0 : o.type,
                      },
                      artistName: a.title,
                    }),
                    (function () {
                      if (a)
                        return (
                          (null === a || void 0 === a
                            ? void 0
                            : a.links.filter(function (t) {
                                return 'embed' === t.type;
                              }).length) > 1
                        );
                    })()
                      ? g(
                          r.a.Fragment,
                          null,
                          g(_, null, 'More from'),
                          g(
                            d.a,
                            null,
                            (function () {
                              var t = [],
                                e = [];
                              return (
                                null === a ||
                                  void 0 === a ||
                                  a.links
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
                                    (null === o || void 0 === o || null === (n = o.embedData) || void 0 === n
                                      ? void 0
                                      : n.id)
                                  );
                                })
                                .map(function (t, e) {
                                  var n, i;
                                  return 'embed' === t.type
                                    ? g(p.a, {
                                        data: {
                                          title: t.title,
                                          url: null === (n = t.embedData) || void 0 === n ? void 0 : n.url,
                                          id: (null === (i = t.embedData) || void 0 === i ? void 0 : i.id) || '',
                                          type: t.type,
                                        },
                                        noAnimation: !0,
                                        artistName: a.title,
                                        key: e,
                                      })
                                    : null;
                                });
                            })
                          )
                        )
                      : null,
                    b
                      ? g(
                          j,
                          null,
                          g(s.a, {
                            avatar: (null === a || void 0 === a ? void 0 : a.avatar) || '',
                            title: (null === a || void 0 === a ? void 0 : a.title) || '',
                          }),
                          g(k, { href: '/' }, 'View Profile')
                        )
                      : null
                  )
                )
              )
            )
          : null;
      }
      var O = a.d.div.withConfig({ displayName: 'videoId__Wrapper', componentId: 'sc-1a956zz-0' })([
          'max-width:608px;margin:0 auto;',
        ]),
        _ = a.d.h3.withConfig({ displayName: 'videoId__MoreTitle', componentId: 'sc-1a956zz-1' })(
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
        j = a.d.div.withConfig({ displayName: 'videoId__MobileInfo', componentId: 'sc-1a956zz-2' })([
          'margin-top:32px;padding:0 24px;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;gap:24px;',
        ]),
        k = a.d.a.withConfig({ displayName: 'videoId__HomeButton', componentId: 'sc-1a956zz-3' })(
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
    'M/EI': function (t, e, n) {
      'use strict';
      var i = n('q1tI'),
        o = n.n(i),
        r = n('vOnD'),
        a = o.a.createElement,
        c = r.d.div.withConfig({ displayName: 'grid__StyledGrid', componentId: 'sc-1mu4cgu-0' })(
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
        return a(c, { className: e || '' }, n);
      };
    },
    MWXp: function (t, e, n) {
      'use strict';
      var i = n('q1tI'),
        o = n.n(i),
        r = n('9ixD'),
        a = o.a.createElement;
      e.a = function (t) {
        var e = t.pageData;
        return a(
          o.a.Fragment,
          null,
          a(r.a, {
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
  },
  [['22w/', 0, 2, 3, 1, 4]],
]);
