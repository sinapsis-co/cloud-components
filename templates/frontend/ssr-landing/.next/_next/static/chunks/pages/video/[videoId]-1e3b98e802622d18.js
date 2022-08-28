(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [842],
  {
    7423: function (t, e, i) {
      'use strict';
      i.d(e, {
        Z: function () {
          return f;
        },
      });
      var n = i(6835),
        r = (i(7294), i(186)),
        o = i(6805),
        a = i(131),
        c = i(8052),
        l = i(9499),
        s = i(4730),
        u = i(5893),
        d = ['className', 'children'];
      function h(t, e) {
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
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(i), !0).forEach(function (e) {
                (0, l.Z)(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : h(Object(i)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
              });
        }
        return t;
      }
      var g = function (t) {
          var e = t.className,
            i = t.children,
            n = (0, s.Z)(t, d);
          return (0, u.jsx)(m, p(p({ className: 'wrapper-image '.concat(e || '') }, n), {}, { children: i }));
        },
        m = (0, r.ZP)(o.ww.div).withConfig({ displayName: 'wrapper-image__Wrapper', componentId: 'sc-1uhyz08-0' })(
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
        f = function (t) {
          var e = t.className,
            i = t.children,
            r = t.href,
            l = t.hasDelay,
            s = t.image,
            d = t.highlight,
            h = t.noAnimation,
            p = t.onClick,
            m = (0, a.YD)({ root: null, rootMargin: '100px 0px', threshold: 0.3, triggerOnce: !0 }),
            f = (0, n.Z)(m, 2),
            y = f[0],
            b = f[1];
          return (0, u.jsx)(v, {
            className: e || '',
            href: r,
            onClick: p,
            ref: y,
            variants: h ? void 0 : c.LS,
            initial: h ? void 0 : 'initial',
            animate: h ? void 0 : b || 0 === l ? 'animate' : 'initial',
            exit: 'exit',
            transition: { duration: 0.35, delay: l ? 0.1 * l : 0, ease: [0, 0.005, 0.2, 1] },
            children: (0, u.jsxs)(x, {
              initial: 'rest',
              whileHover: 'hover',
              whileTap: 'tap',
              animate: 'rest',
              className: 'wrapper',
              children: [
                (0, u.jsx)(g, {
                  className: d,
                  children: (0, u.jsx)(o.ww.div, {
                    className: 'motion',
                    variants: c.wM,
                    transition: c.BH,
                    children: s,
                  }),
                }),
                i,
              ],
            }),
          });
        },
        v = (0, r.ZP)(o.ww.a).withConfig({ displayName: 'link__StyledLink', componentId: 'gyn5x7-0' })(
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
        ),
        x = (0, r.ZP)(o.ww.div).withConfig({ displayName: 'link__Wrapper', componentId: 'gyn5x7-1' })(
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
    1362: function (t, e, i) {
      'use strict';
      i(7294);
      var n = i(186),
        r = i(5893);
      e.Z = function (t) {
        var e = t.className,
          i = t.children;
        return (0, r.jsx)(o, { className: e || '', children: i });
      };
      var o = n.ZP.div.withConfig({ displayName: 'play-wrapper__PlayWrapper', componentId: 'sc-2nscag-0' })(
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
    3492: function (t, e, i) {
      'use strict';
      i.d(e, {
        Z: function () {
          return d;
        },
      });
      var n = i(6711),
        r = i(1355),
        o = i(7423),
        a = i(5322),
        c = i(1183),
        l = i(1362),
        s = i(7887),
        u = i(5893);
      function d(t) {
        var e = t.data,
          i = t.className,
          d = t.artistName,
          h = t.hasDelay,
          p = t.noAnimation;
        return e.title && e.url
          ? (0, u.jsx)(o.Z, {
              className: i || '',
              href: '/video/'.concat(e.id),
              onClick: function () {
                analytics.track('Tracpage Link Click', { artist_id: d, category: 'embed' === e.type, name: e.title });
              },
              hasDelay: h,
              highlight: e.highlight ? 'highlight' : '',
              noAnimation: p,
              image: (0, u.jsxs)(u.Fragment, {
                children: [
                  (0, u.jsx)(r.Z, {
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
                    noAnimation: p,
                  }),
                  (0, u.jsx)(l.Z, {
                    className: 'play-icon '.concat(e.highlight ? 'highlight' : ''),
                    children: (0, u.jsx)(n.Z, {}),
                  }),
                ],
              }),
              children: (0, u.jsxs)(s.Z, {
                highlight: e.highlight,
                children: [
                  (0, u.jsxs)(c.Z, {
                    className: ''.concat(e.highlight ? 'highlight' : ''),
                    children: [
                      (0, u.jsx)('h3', { children: e.title }),
                      (0, u.jsxs)('p', { children: [d, ', Star6ixse7en, MRG, Sweez'] }),
                    ],
                  }),
                  e.highlight ? (0, u.jsx)(a.Z, { className: 'badge' }) : null,
                ],
              }),
            })
          : null;
      }
    },
    7466: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, {
          __N_SSP: function () {
            return x;
          },
          default: function () {
            return y;
          },
        });
      var n = i(9499),
        r = i(186),
        o = i(2447),
        a = i(3886),
        c = i(1972),
        l = i(2310),
        s = i(3492),
        u = i(1947),
        d = i(5834),
        h = i(6900),
        p = i(8134),
        g = i(1774),
        m = i(5893);
      function f(t, e) {
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
      function v(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(i), !0).forEach(function (e) {
                (0, n.Z)(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : f(Object(i)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
              });
        }
        return t;
      }
      var x = !0;
      function y(t) {
        var e,
          i,
          n = t.siteData,
          r = t.video,
          f = (0, a.V)(n).pageData,
          x = (0, o.Z)();
        return f && f.data
          ? (0, m.jsxs)(m.Fragment, {
              children: [
                (0, m.jsx)(h.Z, { pageData: f }),
                (0, m.jsx)(p.Z, {
                  theme: f ? f.theme : void 0,
                  children: (0, m.jsx)(l.Z, {
                    pageData: f,
                    hasBackground: !0,
                    hideNavbar: !0,
                    hideCart: !0,
                    action: (0, m.jsx)(g.Z, {}),
                    children: (0, m.jsxs)(b, {
                      children: [
                        (0, m.jsx)(d.Z, {
                          data: {
                            title: null === r || void 0 === r ? void 0 : r.title,
                            url:
                              null === r || void 0 === r || null === (e = r.embedData) || void 0 === e ? void 0 : e.url,
                            id:
                              (null === r || void 0 === r || null === (i = r.embedData) || void 0 === i
                                ? void 0
                                : i.id) || '',
                            type: null === r || void 0 === r ? void 0 : r.type,
                          },
                          artistName: f.title,
                        }),
                        (function () {
                          if (f)
                            return (
                              (null === f || void 0 === f
                                ? void 0
                                : f.links.filter(function (t) {
                                    return 'embed' === t.type;
                                  }).length) > 1
                            );
                        })()
                          ? (0, m.jsxs)(m.Fragment, {
                              children: [
                                (0, m.jsx)(j, { children: 'More from' }),
                                (0, m.jsx)(c.Z, {
                                  children: (function () {
                                    var t = [],
                                      e = [];
                                    return (
                                      null === f ||
                                        void 0 === f ||
                                        f.links
                                          .sort(function (t, e) {
                                            return t.order - e.order;
                                          })
                                          .forEach(function (t) {
                                            e.push(v(v({}, t), {}, { order: e.length }));
                                          }),
                                      (null === e || void 0 === e ? void 0 : e.length) > 0 && t.push(e),
                                      t
                                    );
                                  })().map(function (t) {
                                    return t
                                      .filter(function (t) {
                                        var e, i;
                                        return (
                                          (null === (e = t.embedData) || void 0 === e ? void 0 : e.id) !==
                                          (null === r || void 0 === r || null === (i = r.embedData) || void 0 === i
                                            ? void 0
                                            : i.id)
                                        );
                                      })
                                      .map(function (t, e) {
                                        var i, n;
                                        return 'embed' === t.type
                                          ? (0, m.jsx)(
                                              s.Z,
                                              {
                                                data: {
                                                  title: t.title,
                                                  url: null === (i = t.embedData) || void 0 === i ? void 0 : i.url,
                                                  id:
                                                    (null === (n = t.embedData) || void 0 === n ? void 0 : n.id) || '',
                                                  type: t.type,
                                                },
                                                noAnimation: !0,
                                                artistName: f.title,
                                              },
                                              e
                                            )
                                          : null;
                                      });
                                  }),
                                }),
                              ],
                            })
                          : null,
                        x
                          ? (0, m.jsxs)(w, {
                              children: [
                                (0, m.jsx)(u.Z, {
                                  avatar: (null === f || void 0 === f ? void 0 : f.avatar) || '',
                                  title: (null === f || void 0 === f ? void 0 : f.title) || '',
                                }),
                                (0, m.jsx)(k, { href: '/', children: 'View Profile' }),
                              ],
                            })
                          : null,
                      ],
                    }),
                  }),
                }),
              ],
            })
          : null;
      }
      var b = r.ZP.div.withConfig({ displayName: 'videoId__Wrapper', componentId: 'sc-1a956zz-0' })([
          'max-width:608px;margin:0 auto;',
        ]),
        j = r.ZP.h3.withConfig({ displayName: 'videoId__MoreTitle', componentId: 'sc-1a956zz-1' })(
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
        w = r.ZP.div.withConfig({ displayName: 'videoId__MobileInfo', componentId: 'sc-1a956zz-2' })([
          'margin-top:32px;padding:0 24px;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;gap:24px;',
        ]),
        k = r.ZP.a.withConfig({ displayName: 'videoId__HomeButton', componentId: 'sc-1a956zz-3' })(
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
    5798: function (t, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/video/[videoId]',
        function () {
          return i(7466);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [774, 430, 457, 890, 661, 92, 888, 179], function () {
      return (e = 5798), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
