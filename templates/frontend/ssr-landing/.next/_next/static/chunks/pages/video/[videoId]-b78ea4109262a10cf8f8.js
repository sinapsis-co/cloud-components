_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [19],
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
        var e = t.artistName,
          n = t.title,
          i = t.onClick,
          r = Object(m.useRouter)();
        return f(
          v,
          { alignItems: 'center' },
          f(s, {
            onClick:
              i ||
              function () {
                return r.back();
              },
          }),
          n || e ? f(b, null, n || e) : null
        );
      }
      var v = Object(a.d)(o.a).withConfig({
          displayName: 'back-navigation__NavigationContainer',
          componentId: 'kfmxgl-0',
        })(['max-height:40px;']),
        b = a.d.h6.withConfig({ displayName: 'back-navigation__Title', componentId: 'kfmxgl-1' })(
          ['font-size:14px;font-weight:700;text-transform:uppercase;margin-left:18px;opacity:0.7;color:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        );
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
          b = null === (e = r.url) || void 0 === e ? void 0 : e.includes('list=');
        return p(
          m,
          { className: n },
          s
            ? p('iframe', {
                className: 'iframe',
                title: r.title ? r.title : 'Music Video',
                src: (function () {
                  var t = h();
                  return t
                    ? b
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
                f,
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
                p(g, null, p(o.a, null)),
                p(v, {
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
        );
      }
      var m = a.d.div.withConfig({ displayName: 'video-player__VideoWrapper', componentId: 'sc-19p591d-0' })([
          'width:100%;position:relative;border-radius:5px;overflow:hidden;height:0;padding-top:56.25%;> iframe{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;}',
        ]),
        f = a.d.div.withConfig({ displayName: 'video-player__ImageWrapper', componentId: 'sc-19p591d-1' })([
          'cursor:pointer;display:flex;justify-content:center;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;',
        ]),
        g = a.d.button.withConfig({ displayName: 'video-player__PlayButton', componentId: 'sc-19p591d-2' })(
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
        v = Object(a.d)(function (t) {
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
        }).withConfig({ displayName: 'video-player__CoverImage', componentId: 'sc-19p591d-3' })(
          ['border-radius:5px;', ' ', ''],
          function (t) {
            return 'large' === t.variant && Object(a.c)(['object-fit:cover;width:100%;']);
          },
          function (t) {
            return 'small' === t.variant && Object(a.c)(['object-fit:cover;height:100%;width:100%;']);
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
          return y;
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
        u = n('6Hpx'),
        s = n('qYvR'),
        d = n('1LmX'),
        p = n('MWXp'),
        h = n('42Rd'),
        m = n('/kYb'),
        f = n('M/EI'),
        g = n('HkQY'),
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
      function x(t) {
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
      var y = !0;
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
              v(p.a, { pageData: o }),
              v(
                h.a,
                { theme: o ? o.theme : void 0 },
                v(
                  u.a,
                  { pageData: o, hasBackground: !0, hideNavbar: !0, hideCart: !0, action: v(m.a, null) },
                  v(
                    k,
                    null,
                    v(d.a, {
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
                            f.a,
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
                                      e.push(x(x({}, t), {}, { order: e.length }));
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
                                    ? v(g.a, {
                                        data: {
                                          title: t.title,
                                          url: null === (n = t.embedData) || void 0 === n ? void 0 : n.url,
                                          id: (null === (i = t.embedData) || void 0 === i ? void 0 : i.id) || '',
                                          type: t.type,
                                        },
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
                          v(s.a, {
                            avatar: (null === o || void 0 === o ? void 0 : o.avatar) || '',
                            title: (null === o || void 0 === o ? void 0 : o.title) || '',
                          }),
                          v(N, { href: '/' }, 'View Profile')
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
        N = o.d.a.withConfig({ displayName: 'videoId__HomeButton', componentId: 'sc-1a956zz-3' })(
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
    '4+F4': function (t, e, n) {
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
      var c = a.d.div.withConfig({ displayName: 'text-info__InfoWrapper', componentId: 'zd3pfj-0' })(
        [
          'text-align:left;> h3,> p{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}> h3{margin:0px;color:',
          ';font-size:16px;font-weight:700;line-height:24px;}> p{color:',
          ';margin:0px;font-size:14px;font-weight:400;line-height:20px;opacity:0.7;}@media (max-width:',
          '){&.highlight{> h3,> p{text-align:center;white-space:pre-wrap;text-overflow:ellipsis;}}> h3,> p{white-space:pre-wrap;text-overflow:ellipsis;}}',
        ],
        function (t) {
          return t.theme.colors.primary;
        },
        function (t) {
          return t.theme.colors.primary;
        },
        function (t) {
          var e = t.theme;
          return ''.concat(e.breakpoints.laptopS, 'px');
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
    '5wV8': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return u;
      });
      var i = n('wx14'),
        r = n('Ff2n'),
        a = n('q1tI'),
        o = n.n(a),
        c = n('vOnD'),
        l = o.a.createElement;
      function u(t) {
        var e = t.src,
          n = t.variant,
          a = void 0 === n ? 'square' : n,
          o = Object(r.a)(t, ['src', 'variant']);
        return e ? l(s, Object(i.a)({ variant: a, src: e }, o)) : l(d, { variant: a, as: 'div' });
      }
      var s = c.d.img.withConfig({ displayName: 'cover-image__Cover', componentId: 'y910y5-0' })(
          ['object-fit:cover;border-radius:5px;', ' ', ' ', ''],
          function (t) {
            return (
              'square' === t.variant &&
              Object(c.c)(
                ['width:', ';height:', ';@media (max-width:', '){width:', ';height:', ';}'],
                function (t) {
                  return t.theme.sizes.coverSize;
                },
                function (t) {
                  return t.theme.sizes.coverSize;
                },
                function (t) {
                  var e = t.theme;
                  return ''.concat(e.breakpoints.laptop, 'px');
                },
                function (t) {
                  return t.theme.sizes.coverSizeMobile;
                },
                function (t) {
                  return t.theme.sizes.coverSizeMobile;
                }
              )
            );
          },
          function (t) {
            return (
              'squareSmall' === t.variant &&
              Object(c.c)(
                ['width:', ';height:', ';'],
                function (t) {
                  return t.theme.sizes.coverSizeSmall;
                },
                function (t) {
                  return t.theme.sizes.coverSizeSmall;
                }
              )
            );
          },
          function (t) {
            return (
              'squareHighlight' === t.variant &&
              Object(c.c)(
                ['width:', ';height:', ';@media (max-width:', '){width:', ';height:', ';}'],
                function (t) {
                  return t.theme.sizes.coverSizeHighlight;
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
              )
            );
          }
        ),
        d = Object(c.d)(s).withConfig({ displayName: 'cover-image__CoverColor', componentId: 'y910y5-1' })(
          ['background-color:', ';'],
          function (t) {
            return t.theme.colors.secondary;
          }
        );
    },
    F6jV: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var i = n('wx14'),
        r = n('q1tI'),
        a = n.n(r).a.createElement;
      function o(t) {
        return a(
          'svg',
          Object(i.a)({ width: '12', height: '16', viewBox: '0 0 11 14' }, t),
          a('path', {
            d: 'M0 2.73703C0 1.13964 1.78029 0.18686 3.1094 1.07293L9.50385 5.3359C10.6913 6.12754 10.6913 7.87246 9.50385 8.6641L3.1094 12.9271C1.78029 13.8131 0 12.8604 0 11.263V2.73703Z',
            fill: t.fill,
          })
        );
      }
    },
    HkQY: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return m;
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
        p = n('z7cC'),
        h = r.a.createElement;
      function m(t) {
        var e = t.data,
          n = t.className,
          i = t.artistName;
        return e.title && e.url
          ? h(
              c.a,
              {
                className: n || '',
                href: '/video/'.concat(e.id),
                onClick: function () {
                  analytics.track('Tracpage Link Click', { artist_id: i, category: 'embed' === e.type, name: e.title });
                },
              },
              h(
                p.a,
                { className: ''.concat(e.highlight ? 'highlight' : null) },
                h(o.a, {
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
                h(s.a, { className: 'play-icon '.concat(e.highlight ? 'highlight' : null) }, h(a.a, null))
              ),
              h(
                d.a,
                { highlight: e.highlight },
                h(
                  u.a,
                  { className: ''.concat(e.highlight ? 'highlight' : null) },
                  h('h3', null, e.title),
                  h('p', null, i, ', Star6ixse7en, MRG, Sweez')
                ),
                e.highlight ? h(l.a, { className: 'badge' }) : null
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
            'display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:32px;.full-width{grid-column:1 / -1;}@media (max-width:',
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
    rJDM: function (t, e, n) {
      'use strict';
      var i = n('q1tI'),
        r = n.n(i),
        a = n('vOnD'),
        o = n('wx14'),
        c = n('Ff2n'),
        l = r.a.createElement,
        u = function (t) {
          var e = t.className,
            n = t.onClick,
            i = Object(c.a)(t, ['className', 'onClick']),
            r = Object(a.e)();
          return l(
            'svg',
            Object(o.a)(
              {
                viewBox: '0 0 13 14',
                width: 13,
                height: 14,
                className: e,
                onClick: n,
                'aria-hidden': 'true',
                role: 'img',
                style: { cursor: n ? 'pointer' : 'normal' },
              },
              i
            ),
            l('path', {
              fill: r.colors.highlightDark,
              d: 'M5.53,12.45c-.5,0-.99-.21-1.33-.6l-.17-.2c-.38-.44-.43-1.07-.12-1.56,.19-.31,.25-.66,.17-1.01-.09-.35-.3-.64-.62-.83L.95,6.74C.41,6.42,.05,5.85,0,5.24c-.05-.62,.22-1.23,.7-1.63L4.56,.46C5.04,.06,5.68-.09,6.29,.05c.62,.14,1.12,.55,1.37,1.11l1.08,2.41c.3,.66,1.01,1.04,1.74,.93,.57-.09,1.14,.12,1.5,.55l.1,.11c.68,.79,.57,1.96-.23,2.62l-5.21,4.26c-.32,.27-.72,.39-1.11,.39ZM1.99,5.09l2.51,1.5c.77,.46,1.3,1.18,1.51,2.03,.11,.46,.12,.93,.03,1.38l4.33-3.55c-1.47,.07-2.86-.77-3.46-2.11l-1.08-2.41L1.99,5.09Zm8.47,1.21h0Z',
            }),
            l('path', {
              fill: r.colors.highlightDark,
              d: 'M12.19,14c-.23,0-.46-.1-.62-.28l-1.28-1.49c-.29-.33-.24-.83,.1-1.12,.34-.28,.85-.24,1.14,.1l1.28,1.49c.29,.33,.24,.83-.1,1.12-.15,.12-.34,.18-.52,.18Z',
            })
          );
        },
        s = r.a.createElement,
        d =
          ((e.a = function (t) {
            var e = t.className;
            return s(d, { className: e || '' }, s(u, null), s('h6', null, 'Featured'));
          }),
          a.d.div.withConfig({ displayName: 'featured-badge__StyledBadge', componentId: 'sc-69krp2-0' })(
            [
              'background-color:',
              ';border-radius:90px;max-width:120px;padding:8px 16px;display:flex;justify-contet:flex-start;align-items:center;gap:10px;h6{color:',
              ';font-size:14px;font-weight:700;line-height:24px;margin:0;}@media (max-width:',
              '){padding:8px;}',
            ],
            function (t) {
              return t.theme.colors.highlightLight;
            },
            function (t) {
              return t.theme.colors.highlightDark;
            },
            function (t) {
              var e = t.theme;
              return ''.concat(e.breakpoints.tablet, 'px');
            }
          ));
    },
    vZwk: function (t, e, n) {
      'use strict';
      var i = n('q1tI'),
        r = n.n(i),
        a = n('vOnD'),
        o = r.a.createElement;
      e.a = function (t) {
        var e = t.className,
          n = t.children,
          i = t.highlight;
        return o(c, { className: e || '', highlight: i }, n);
      };
      var c = a.d.div.withConfig({ displayName: 'wrapper-info__Wrapper', componentId: 'sc-1kn8itc-0' })(
        ['display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;height:100%;', ''],
        function (t) {
          return (
            t.highlight &&
            Object(a.c)(['@media (max-width:', '){align-items:center;gap:24px;}'], function (t) {
              var e = t.theme;
              return ''.concat(e.breakpoints.laptopS, 'px');
            })
          );
        }
      );
    },
    yQlh: function (t, e, n) {
      'use strict';
      var i = n('q1tI'),
        r = n.n(i),
        a = n('vOnD'),
        o = r.a.createElement;
      e.a = function (t) {
        var e = t.className,
          n = t.children,
          i = t.href,
          r = t.onClick;
        return o(c, { className: e || '', href: i, onClick: r }, n);
      };
      var c = a.d.a.withConfig({ displayName: 'link__StyledLink', componentId: 'gyn5x7-0' })(
        [
          'display:flex;flex-direction:column;align-items:flex-start;gap:24px;@media (max-width:',
          '){gap:12px;}&.highlight{background-color:',
          ';grid-column:1/-1;order:-1;flex-direction:row;padding:32px;border-radius:5px;@media (max-width:',
          '){grid-column:1 / -1;padding:24px;flex-direction:column;justify-content:center;align-items:center;}}&:hover{.play-icon{opacity:1;}}',
        ],
        function (t) {
          var e = t.theme;
          return ''.concat(e.breakpoints.laptopS, 'px');
        },
        function (t) {
          return t.theme.colors.highlightBackground;
        },
        function (t) {
          var e = t.theme;
          return ''.concat(e.breakpoints.laptopS, 'px');
        }
      );
    },
    z7cC: function (t, e, n) {
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
      var c = a.d.div.withConfig({ displayName: 'wrapper-image__Wrapper', componentId: 'sc-1uhyz08-0' })(
        [
          'padding:32px;border-radius:5px;background-color:',
          ';position:relative;max-height:288px;width:100%;display:flex;justify-content:center;transition:background-color ',
          ';&:hover{background-color:',
          ';}@media (max-width:',
          '){display:flex;justify-content:center;align-items:center;padding:0;width:auto;}&.highlight{height:',
          ';padding:0;width:auto;background:none;margin:0 32px 0 0;@media (max-width:',
          '){height:',
          ';margin:0 0 24px 0;height:auto;}}',
        ],
        function (t) {
          return t.theme.colors.itemBackground;
        },
        function (t) {
          var e = t.theme;
          return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
        },
        function (t) {
          return t.theme.colors.itemBackgroundHover;
        },
        function (t) {
          var e = t.theme;
          return ''.concat(e.breakpoints.laptopS, 'px');
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
        }
      );
    },
  },
  [['22w/', 0, 2, 3, 1, 4]],
]);