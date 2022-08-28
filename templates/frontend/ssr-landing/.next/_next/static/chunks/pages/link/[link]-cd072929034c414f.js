(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [807],
  {
    1774: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var r = n(186),
        i = n(9568),
        o = n(9499),
        c = n(6805),
        a = n(5893);
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function u(e) {
        return (0, a.jsx)(f, {
          initial: 'rest',
          whileHover: 'hover',
          whileTap: 'tap',
          animate: 'rest',
          children: (0, a.jsxs)(
            'svg',
            l(
              l({ width: '40', height: '40', viewBox: '0 0 50 50' }, e),
              {},
              {
                children: [
                  (0, a.jsx)(p, { cx: '25', cy: '25', r: '25' }),
                  (0, a.jsx)(d, {
                    variants: {
                      rest: { x: 0, scale: 1 },
                      hover: { x: -2, scale: 1.0625 },
                      tap: { x: -100, scale: 0.95 },
                    },
                    d: 'M31 24h-9.6l3.3-3.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5 5c-0.1 0.1-0.2 0.2-0.2 0.3 -0.1 0.2-0.1 0.5 0 0.8 0.1 0.1 0.1 0.2 0.2 0.3l5 5C23.5 30.9 23.7 31 24 31s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4L21.4 26H31c0.6 0 1-0.4 1-1S31.6 24 31 24z',
                  }),
                ],
              }
            )
          ),
        });
      }
      var f = (0, r.ZP)(c.ww.div).withConfig({ displayName: 'back__IconWrapper', componentId: 'om8no8-0' })(
          ['cursor:pointer;width:40px;height:40px;&:hover{circle{fill:', ';}}'],
          function (e) {
            return e.theme.colors.itemBackgroundHover;
          }
        ),
        p = r.ZP.circle.withConfig({ displayName: 'back__StyledCircle', componentId: 'om8no8-1' })(
          ['fill:', ';transition:fill ', ';'],
          function (e) {
            return e.theme.colors.sidebarBackground;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          }
        ),
        d = (0, r.ZP)(c.ww.path).withConfig({ displayName: 'back__StyledPath', componentId: 'om8no8-2' })(
          ['fill:', ';'],
          function (e) {
            return e.theme.colors.icon;
          }
        ),
        h = n(1163);
      function m(e) {
        var t = e.onClick,
          n = (0, h.useRouter)();
        return (0, a.jsx)(g, {
          alignItems: 'center',
          children: (0, a.jsx)(u, {
            onClick:
              t ||
              function () {
                return n.back();
              },
          }),
        });
      }
      var g = (0, r.ZP)(i.Z).withConfig({
        displayName: 'back-navigation__NavigationContainer',
        componentId: 'kfmxgl-0',
      })(['max-height:40px;']);
    },
    9568: function (e, t, n) {
      'use strict';
      n(7294);
      var r = n(186),
        i = n(5893);
      t.Z = (0, r.ZP)(function (e) {
        return (0, i.jsx)('div', {
          className: e.className,
          onClick: function (t) {
            return e.onClick ? e.onClick(t) : null;
          },
          children: e.children || '',
        });
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
        function (e) {
          return e.justifyContent || 'flex-start';
        },
        function (e) {
          return e.flexDirection || 'row';
        },
        function (e) {
          return e.flexGrow || 0;
        },
        function (e) {
          return e.flexBasis || 'auto';
        },
        function (e) {
          return e.flexShrink || 1;
        },
        function (e) {
          return e.flexWrap || 'nowrap';
        },
        function (e) {
          return e.flex || ' 0 1 auto';
        },
        function (e) {
          return e.alignItems || 'stretch';
        }
      );
    },
    6900: function (e, t, n) {
      'use strict';
      var r = n(2962),
        i = n(5893);
      t.Z = function (e) {
        var t = e.pageData;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(r.PB, {
            title: t.title,
            description: t.description || t.data.bio || t.title,
            openGraph: {
              title: t.title,
              description: t.description || t.data.bio || t.title,
              url: 'https://'.concat(t.subdomain, '.').concat('development.trac.co', '/'),
              images: [{ url: t.avatar }],
              type: 'website',
            },
          }),
        });
      };
    },
    5217: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return g;
          },
          default: function () {
            return b;
          },
        });
      var r = n(186),
        i = n(3886),
        o = n(2310),
        c = n(9499),
        a = n(4730),
        s = (n(7294), n(5893)),
        l = ['className', 'src'];
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var f = function (e) {
          var t = e.className,
            n = e.src,
            r = (0, a.Z)(e, l);
          return (0, s.jsx)(
            p,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? u(Object(n), !0).forEach(function (t) {
                      (0, c.Z)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : u(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
              }
              return e;
            })(
              {
                className: t || '',
                frameBorder: '0',
                width: '100%',
                height: '100%',
                src: n,
                referrerPolicy: 'no-referrer',
                sandbox: 'allow-same-origin',
              },
              r
            )
          );
        },
        p = r.ZP.iframe.withConfig({ displayName: 'link-iframe__StyledIframe', componentId: 'sc-1yo402b-0' })([
          'border:none;background-color:white;',
        ]),
        d = n(6900),
        h = n(8134),
        m = n(1774),
        g = !0;
      function b(e) {
        var t = e.siteData,
          n = e.data,
          r = (0, i.V)(t).pageData;
        return r && r.data && n
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(d.Z, { pageData: r }),
                (0, s.jsx)(h.Z, {
                  theme: r ? r.theme : void 0,
                  children: (0, s.jsx)(o.Z, {
                    pageData: r,
                    hasBackground: !0,
                    hideNavbar: !0,
                    hideCart: !0,
                    action: (0, s.jsx)(m.Z, {}),
                    children: (0, s.jsx)(w, { children: (0, s.jsx)(x, { src: n.url }) }),
                  }),
                }),
              ],
            })
          : null;
      }
      var w = r.ZP.div.withConfig({ displayName: 'link__Wrapper', componentId: 'sc-1o3zuic-0' })([
          'max-width:608px;margin:0 auto;position:relative;min-height:80vh;',
        ]),
        x = (0, r.ZP)(f).withConfig({ displayName: 'link__PositionedIframe', componentId: 'sc-1o3zuic-1' })([
          'position:absolute;top:0;left:0;height:100%;width:100%;border-radius:8px;',
        ]);
    },
    5540: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/link/[link]',
        function () {
          return n(5217);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 430, 457, 890, 888, 179], function () {
      return (t = 5540), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
