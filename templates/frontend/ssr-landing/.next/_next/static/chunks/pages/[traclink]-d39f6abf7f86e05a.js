(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [458],
  {
    5322: function (t, e, n) {
      'use strict';
      n.d(e, {
        Z: function () {
          return p;
        },
      });
      n(7294);
      var i = n(186),
        r = n(9499),
        o = n(4730),
        a = n(5893),
        c = ['className', 'onClick'];
      function l(t, e) {
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
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function (e) {
                (0, r.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var u = function (t) {
          var e = t.className,
            n = t.onClick,
            r = (0, o.Z)(t, c),
            l = (0, i.Fg)();
          return (0, a.jsxs)(
            'svg',
            s(
              s(
                {
                  viewBox: '0 0 13 14',
                  width: 13,
                  height: 14,
                  className: e,
                  onClick: n,
                  'aria-hidden': 'true',
                  role: 'img',
                  style: { cursor: n ? 'pointer' : 'auto' },
                },
                r
              ),
              {},
              {
                children: [
                  (0, a.jsx)('path', {
                    fill: l.colors.highlightDark,
                    d: 'M5.53,12.45c-.5,0-.99-.21-1.33-.6l-.17-.2c-.38-.44-.43-1.07-.12-1.56,.19-.31,.25-.66,.17-1.01-.09-.35-.3-.64-.62-.83L.95,6.74C.41,6.42,.05,5.85,0,5.24c-.05-.62,.22-1.23,.7-1.63L4.56,.46C5.04,.06,5.68-.09,6.29,.05c.62,.14,1.12,.55,1.37,1.11l1.08,2.41c.3,.66,1.01,1.04,1.74,.93,.57-.09,1.14,.12,1.5,.55l.1,.11c.68,.79,.57,1.96-.23,2.62l-5.21,4.26c-.32,.27-.72,.39-1.11,.39ZM1.99,5.09l2.51,1.5c.77,.46,1.3,1.18,1.51,2.03,.11,.46,.12,.93,.03,1.38l4.33-3.55c-1.47,.07-2.86-.77-3.46-2.11l-1.08-2.41L1.99,5.09Zm8.47,1.21h0Z',
                  }),
                  (0, a.jsx)('path', {
                    fill: l.colors.highlightDark,
                    d: 'M12.19,14c-.23,0-.46-.1-.62-.28l-1.28-1.49c-.29-.33-.24-.83,.1-1.12,.34-.28,.85-.24,1.14,.1l1.28,1.49c.29,.33,.24,.83-.1,1.12-.15,.12-.34,.18-.52,.18Z',
                  }),
                ],
              }
            )
          );
        },
        p = function (t) {
          var e = t.className;
          return (0, a.jsxs)(d, {
            className: e || '',
            children: [(0, a.jsx)(u, {}), (0, a.jsx)('h6', { children: 'Featured' })],
          });
        },
        d = i.ZP.div.withConfig({ displayName: 'featured-badge__StyledBadge', componentId: 'sc-69krp2-0' })(
          [
            'background-color:',
            ';border-radius:90px;max-width:120px;padding:8px 16px;display:flex;justify-content:flex-start;align-items:center;gap:10px;h6{color:',
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
        );
    },
    6876: function (t, e, n) {
      'use strict';
      n.d(e, {
        Z: function () {
          return y;
        },
      });
      var i = n(186),
        r = n(2447),
        o = n(1389),
        a = n(1355),
        c = n(9499),
        l = n(6805),
        s = n(5893);
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
                (0, c.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      function d(t) {
        return (0, s.jsx)(h, {
          initial: 'rest',
          whileHover: 'hover',
          whileTap: 'tap',
          animate: 'rest',
          children: (0, s.jsx)(
            'svg',
            p(
              p({ width: '11', height: '10', viewBox: '0 0 11 10' }, t),
              {},
              {
                style: { overflow: 'visible' },
                children: (0, s.jsx)(f, {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M5.64007 1.53697L8.0606 4.09174L0.837498 4.12698C0.614275 4.12787 0.400549 4.22353 0.243444 4.39288C0.08634 4.56224 -0.00124073 4.79136 1.23978e-05 5.02975C0.0010519 5.26799 0.090724 5.49602 0.249279 5.66362C0.407835 5.83121 0.62227 5.92463 0.845354 5.92329L8.06688 5.88889L5.67856 8.46967C5.52135 8.63872 5.43351 8.86758 5.43439 9.10584C5.43528 9.3441 5.52481 9.57221 5.68328 9.73993C6.0136 10.089 6.54622 10.0863 6.87351 9.73405L10.8017 5.49791C11.0691 5.20761 11.0656 4.74071 10.7938 4.45503L6.82401 0.260002C6.49396 -0.0889478 5.96158 -0.0863191 5.63457 0.265876C5.47741 0.435182 5.38969 0.664244 5.39072 0.902639C5.39175 1.14103 5.48145 1.36922 5.64007 1.53697Z',
                  fill: t.fill,
                  variants: { rest: { x: 0, scale: 1 }, hover: { x: 3, scale: 1.0625 }, tap: { x: 100, scale: 0.95 } },
                }),
              }
            )
          ),
        });
      }
      var h = (0, i.ZP)(l.ww.div).withConfig({ displayName: 'arrow-right__IconWrapper', componentId: 'sc-1ovjnyu-0' })([
          'cursor:pointer;',
        ]),
        f = (0, i.ZP)(l.ww.path).withConfig({ displayName: 'arrow-right__StyledPath', componentId: 'sc-1ovjnyu-1' })(
          ['fill:', ';'],
          function (t) {
            return t.theme.colors.icon;
          }
        ),
        m = n(5322),
        g = n(1183),
        x = n(7887),
        v = n(131),
        w = n(8052);
      function y(t) {
        var e,
          n = t.data,
          c = t.className,
          u = t.artistId,
          p = t.releaseId,
          h = t.hasDelay,
          f = t.noAnimation,
          y = (0, i.Fg)(),
          _ = (0, r.Z)(),
          C = (0, v.YD)({ triggerOnce: !0, rootMargin: '200px 0px' }),
          N = C.ref,
          Z = C.inView,
          S = (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(k, {
                className: ''.concat(n.highlight ? 'highlight' : ''),
                children: [
                  (0, s.jsx)(l.ww.div, {
                    variants: w.wM,
                    transition: w.BH,
                    children: n.platform
                      ? (0, s.jsx)(O, { as: 'div', children: (0, o.Z)(n.platform) })
                      : (0, s.jsx)(a.Z, {
                          src: n.avatar,
                          alt: n.title,
                          variant: n.highlight ? 'squareHighlight' : 'squareSmall',
                        }),
                  }),
                  (0, s.jsxs)(x.Z, {
                    highlight: n.highlight,
                    children: [
                      (0, s.jsx)(g.Z, {
                        className: ''.concat(n.highlight ? 'highlight' : ''),
                        children: (0, s.jsx)('h3', { children: n.title }),
                      }),
                      n.highlight ? (0, s.jsx)(m.Z, { className: 'badge' }) : null,
                    ],
                  }),
                ],
              }),
              n.highlight && _
                ? null
                : (0, s.jsx)(P, {
                    className: 'icon',
                    children: (0, s.jsx)(d, { height: '20px', fill: y.colors.primary }),
                  }),
            ],
          }),
          I = ''
            .concat(c || '', ' ')
            .concat(n.highlight ? 'highlight' : '', ' ')
            .concat(n.platform ? 'platform' : '');
        return n.title && n.url
          ? (0, s.jsx)(j, {
              className: I,
              href: '/link/'.concat(
                ((e = n.title),
                e
                  .split(' ')
                  .join('-')
                  .replace(/[^a-zA-Z ]/g, '')
                  .toLowerCase())
              ),
              onClick: function () {
                analytics.track('Traclink Click', { dsp: n.platform, artist_id: u, release_id: p });
              },
              variants: f ? void 0 : w.LS,
              initial: f ? void 0 : 'initial',
              animate: f ? void 0 : Z || 0 === h ? 'animate' : 'initial',
              exit: 'exit',
              ref: N,
              transition: { duration: 0.35, delay: h ? 0.1 * h : 0, ease: [0.43, 0.13, 0.23, 0.96] },
              children: (0, s.jsx)(b, {
                initial: 'rest',
                whileHover: 'hover',
                whileTap: 'tap',
                animate: 'rest',
                className: 'wrapper',
                children: S,
              }),
            })
          : null;
      }
      var j = (0, i.ZP)(l.ww.a).withConfig({ displayName: 'simple-link__Link', componentId: 'fqic60-0' })(
          [
            'border-radius:5px;background-color:',
            ';color:',
            ';width:100%;cursor:pointer;.wrapper{transition:background-color ',
            ';}&:hover{.wrapper{background-color:',
            ';}}&.highlight{background-color:',
            ';grid-column:span 2;order:-1;.wrapper{padding:32px;gap:32px;@media (max-width:',
            '){padding:24px;gap:24px;}}}&.platform{.wrapper{background-color:',
            ';&:hover{background-color:',
            ';.icon{background-color:',
            ';}}}}',
          ],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            return t.theme.colors.itemBackgroundHover;
          },
          function (t) {
            return t.theme.colors.highlightBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          },
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
        b = (0, i.ZP)(l.ww.div).withConfig({ displayName: 'simple-link__Wrapper', componentId: 'fqic60-1' })(
          [
            'padding:20px;display:flex;align-items:center;gap:24px;@media (max-width:',
            '){gap:12px;}@media (max-width:',
            '){height:auto;}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        k = i.ZP.div.withConfig({ displayName: 'simple-link__Content', componentId: 'fqic60-2' })(
          [
            'display:flex;align-items:center;justify-content:flex-start;width:100%;gap:24px;&.highlight{height:100%;@media (max-width:',
            '){flex-direction:column;}}@media (max-width:',
            '){gap:12px;}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          }
        ),
        P = i.ZP.button.withConfig({ displayName: 'simple-link__Icon', componentId: 'fqic60-3' })(
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
        O = (0, i.ZP)(P).withConfig({ displayName: 'simple-link__PlatformIcon', componentId: 'fqic60-4' })(
          ['background-color:', ';> svg{height:20px;fill:', ';}'],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            return t.theme.colors.primary;
          }
        );
    },
    6105: function (t, e, n) {
      'use strict';
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = n(7294),
        r = n(7911);
      function o() {
        var t = (0, i.useState)({ width: void 0, height: void 0 }),
          e = t[0],
          n = t[1];
        return (
          (0, i.useEffect)(function () {
            function t() {
              n({ width: window.innerWidth, height: window.innerHeight });
            }
            return (
              window.addEventListener('resize', t),
              t(),
              function () {
                return window.removeEventListener('resize', t);
              }
            );
          }, []),
          !!e.width && e.width <= r.Z.laptopS
        );
      }
    },
    1032: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, {
          __N_SSP: function () {
            return J;
          },
          default: function () {
            return Q;
          },
        });
      var i = n(9499),
        r = n(7294),
        o = n(186),
        a = n(2447),
        c = n(3886),
        l = n(2310),
        s = n(6876),
        u = n(1947),
        p = n(6900),
        d = n(1766),
        h = n(6105),
        f = n(6711),
        m = n(4730),
        g = n(5893),
        x = ['className', 'onClick', 'hasPointer'];
      function v(t, e) {
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
      function w(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? v(Object(n), !0).forEach(function (e) {
                (0, i.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var y = function (t) {
          var e = t.className,
            n = t.onClick,
            i = t.hasPointer,
            r = (0, m.Z)(t, x);
          return (0, g.jsxs)(
            'svg',
            w(
              w(
                {
                  className: e,
                  'aria-hidden': 'true',
                  role: 'img',
                  width: '14',
                  height: '14',
                  viewBox: '0 0 14 14',
                  onClick: n,
                  style: { cursor: n || i ? 'pointer' : 'auto' },
                },
                r
              ),
              {},
              {
                children: [
                  (0, g.jsx)('path', {
                    d: 'M2 2V12',
                    stroke: 'white',
                    strokeWidth: '4',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }),
                  (0, g.jsx)('path', {
                    d: 'M11.5 2V12',
                    stroke: 'white',
                    strokeWidth: '4',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }),
                ],
              }
            )
          );
        },
        j = n(1355),
        b = n(5834),
        k = n(6805),
        P = n(6502);
      function O(t) {
        var e,
          n = t.data,
          i = t.title,
          a = t.activeTrack,
          c = t.isPlaying,
          l = t.setActiveTrack,
          s = t.setPlaying,
          u = (0, h.Z)(),
          p = (0, o.Fg)(),
          m = (0, r.useRef)(),
          x = function (t) {
            var e, n;
            (t.stopPropagation(), c || a)
              ? c
                ? null === (e = m.current) || void 0 === e || e.pause()
                : null === (n = m.current) || void 0 === n || n.play()
              : l(v[0].url);
          },
          v =
            (null === (e = n.tracks) || void 0 === e
              ? void 0
              : e
                  .sort(function (t, e) {
                    return (t.order || 0) - (e.order || 0);
                  })
                  .map(function (t) {
                    return { songName: t.title, url: t.url, isPlaying: t.url === a && c };
                  })) || [];
        (0, r.useEffect)(
          function () {
            return (
              (t = a) &&
                ((m.current = new d.Howl({ src: [t], html5: !0, autoplay: !1 })),
                m.current.on('play', function () {
                  s(!0);
                }),
                m.current.on('pause', function () {
                  var t;
                  return s((null === (t = m.current) || void 0 === t ? void 0 : t.playing()) || !1);
                }),
                m.current.on('end', function () {
                  return s(!1);
                })),
              function () {
                var t;
                clearInterval(void 0),
                  m.current && (null === (t = m.current) || void 0 === t || t.off(), m.current.unload());
              }
            );
            var t;
          },
          [a]
        );
        return (0, g.jsx)(_, {
          className: n.videoUrl ? 'video' : '',
          children: n.videoUrl
            ? (0, g.jsx)(b.Z, { variant: 'small', data: { title: i, url: n.videoUrl } })
            : (0, g.jsxs)(g.Fragment, {
                children: [
                  (0, g.jsxs)(B, {
                    children: [
                      (0, g.jsx)(C, { src: n.coverUrl, alt: i, variant: 'square', noAnimation: !0 }),
                      u &&
                        n.tracks &&
                        n.tracks.length > 0 &&
                        (0, g.jsx)(I, {
                          onClick: x,
                          children: (0, g.jsx)(k.M_, {
                            children: c ? (0, g.jsx)(y, {}) : (0, g.jsx)(f.Z, { fill: p.palette.white }),
                          }),
                        }),
                    ],
                  }),
                  (0, g.jsxs)(N, {
                    children: [
                      (0, g.jsxs)(Z, {
                        children: [(0, g.jsx)('h1', { children: i }), (0, g.jsx)('p', { children: n.artistName })],
                      }),
                      (0, g.jsxs)(S, {
                        children: [
                          !u &&
                            n.tracks &&
                            n.tracks.length > 0 &&
                            (0, g.jsx)(I, {
                              onClick: x,
                              initial: 'rest',
                              whileHover: 'hover',
                              whileTap: 'tap',
                              animate: 'rest',
                              variants: { rest: { scale: 1 }, hover: { scale: 1.0625 }, tap: { scale: 0.95 } },
                              children: c
                                ? (0, g.jsx)(y, { hasPointer: !0 })
                                : (0, g.jsx)(f.Z, { hasPointer: !0, fill: p.palette.white }),
                            }),
                          null !== v && void 0 !== v && v.length
                            ? (0, g.jsx)(D, {
                                children: (0, g.jsxs)('p', {
                                  children: [
                                    null === v || void 0 === v ? void 0 : v.length,
                                    '\xa0',
                                    1 === (null === v || void 0 === v ? void 0 : v.length) ? 'Song' : 'Songs',
                                  ],
                                }),
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
        });
      }
      var _ = o.ZP.div.withConfig({ displayName: 'traclink-info__InfoContainer', componentId: 'lff03t-0' })(
          [
            'display:flex;flex-direction:row;align-items:flex-start;width:100%;gap:32px;@media (max-width:',
            '){flex-direction:column;gap:24px;}&.video{flex-direction:column;}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          }
        ),
        C = (0, o.ZP)(j.Z).withConfig({ displayName: 'traclink-info__StyledCoverImage', componentId: 'lff03t-1' })(
          ['margin-right:32px;@media (max-width:', '){margin:0 auto 24px;}'],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          }
        ),
        N = o.ZP.div.withConfig({ displayName: 'traclink-info__Content', componentId: 'lff03t-2' })(
          [
            'min-height:',
            ';display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;width:100%;@media (max-width:',
            '){min-height:auto;gap:32px;}@media (max-width:',
            '){align-items:center;gap:0;}',
          ],
          function (t) {
            return t.theme.sizes.coverSize;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptop, 'px');
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          }
        ),
        Z = o.ZP.div.withConfig({ displayName: 'traclink-info__Info', componentId: 'lff03t-3' })(
          [
            'color:',
            ';@media (max-width:',
            '){text-align:center;}> h1{margin:0;font-size:40px;font-weight:800;line-height:40px;letter-spacing:-1px;margin-bottom:10px;word-break:break-word;}> p{margin:0;font-size:14px;font-weight:400;line-height:20px;opacity:0.7;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          }
        ),
        S = o.ZP.div.withConfig({ displayName: 'traclink-info__PlayerInfo', componentId: 'lff03t-4' })(
          [
            'display:flex;justify-content:space-between;align-items:center;width:100%;@media (max-width:',
            '){justify-content:center;}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          }
        ),
        I = (0, o.ZP)(k.ww.button).withConfig({ displayName: 'traclink-info__ActionButton', componentId: 'lff03t-5' })(
          [
            'width:50px;height:50px;background-color:',
            ';display:flex;justify-content:center;align-items:center;border-radius:50%;cursor:pointer;box-shadow:0px 5px 10px ',
            ';transition:box-shadow ',
            ';&:hover{box-shadow:0px 10px 10px ',
            ';}@media (max-width:',
            '){position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}> svg{fill:',
            ';height:16px;}',
          ],
          function (t) {
            return t.theme.colors.accent;
          },
          function (t) {
            var e = t.theme;
            return (0, P.m4)(e.colors.accent, 0.25);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            var e = t.theme;
            return (0, P.m4)(e.colors.accent, 0.35);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          },
          function (t) {
            return t.theme.colors.accent;
          }
        ),
        D = o.ZP.div.withConfig({ displayName: 'traclink-info__SongsInfo', componentId: 'lff03t-6' })(
          [
            'border-radius:50px;padding:8px 24px;background-color:',
            ';@media (max-width:',
            '){margin-top:14px;}> p{color:',
            ';font-size:14px;font-weight:700;line-height:24px;margin:0;}',
          ],
          function (t) {
            return t.theme.colors.sidebarBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          },
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        B = o.ZP.div.withConfig({ displayName: 'traclink-info__CoverWrapper', componentId: 'lff03t-7' })([
          'position:relative;margin:0 auto;',
        ]),
        L = n(8134),
        z = n(1774);
      function E(t) {
        var e = (0, o.Fg)(),
          n = { animate: { height: 3 }, initial: { height: 9, rotate: 180 } };
        return (0, g.jsxs)('svg', {
          width: '18',
          height: '9',
          viewBox: '0 0 18 9',
          children: [
            (0, g.jsx)(k.ww.rect, {
              variants: n,
              initial: 'initial',
              animate: 'animate',
              transition: { loop: 1 / 0, ease: 'linear', duration: 1, delay: 0.25 },
              fill: t.fill ? t.fill : e.colors.primary,
              width: '4',
              height: '9',
            }),
            (0, g.jsx)(k.ww.rect, {
              variants: n,
              initial: 'initial',
              animate: 'animate',
              transition: { loop: 1 / 0, ease: 'linear', duration: 1, delay: 0.75 },
              fill: t.fill ? t.fill : e.colors.primary,
              x: '7',
              width: '4',
              height: '9',
            }),
            (0, g.jsx)(k.ww.rect, {
              variants: n,
              initial: 'initial',
              animate: 'animate',
              transition: { loop: 1 / 0, ease: 'linear', duration: 1, delay: 0.5 },
              fill: t.fill ? t.fill : e.colors.primary,
              x: '14',
              width: '4',
              height: '9',
            }),
          ],
        });
      }
      function M(t) {
        var e,
          n = (0, o.Fg)();
        return (0, g.jsx)(T, {
          className: t.className,
          whileHover: { paddingLeft: '5px', paddingRight: '5px' },
          onClick: function () {
            return t.onClick ? t.onClick() : null;
          },
          children: (0, g.jsxs)(H, {
            className: 'song-name '.concat(t.isPlaying ? 'playing' : ''),
            children: [
              (0, g.jsxs)('p', { children: [((e = t.index), (e + 1).toString().padStart(2, '0')), ' ', t.songName] }),
              t.isPlaying ? (0, g.jsx)(E, { fill: n.colors.accent }) : null,
              t.isPlaying
                ? null
                : (0, g.jsx)(A, {
                    className: 'play-icon',
                    onClick: function () {
                      return t.onClick ? t.onClick() : null;
                    },
                    children: (0, g.jsx)(f.Z, { fill: n.colors.accent, hasPointer: !0 }),
                  }),
            ],
          }),
        });
      }
      var T = (0, o.ZP)(k.ww.div).withConfig({
          displayName: 'traclink-release-item__StyledTraclinkReleaseItem',
          componentId: 'p9uhcv-0',
        })(
          [
            'height:auto;width:100%;padding:24px 0;border-bottom:1px solid ',
            ';cursor:pointer;&:hover{.song-name{> p{opacity:1;}}.play-icon{opacity:1;}}',
          ],
          function (t) {
            var e = t.theme;
            return (0, P.m4)(e.colors.primary, 0.1);
          }
        ),
        H = o.ZP.div.withConfig({ displayName: 'traclink-release-item__SongName', componentId: 'p9uhcv-1' })(
          [
            'display:flex;justify-content:space-between;align-items:center;min-height:32px;> p{color:',
            ';font-size:16px;font-weight:700;line-height:19px;opacity:0.5;transition:opacity ',
            ';}&.playing{> p{opacity:1;}}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          }
        ),
        A = o.ZP.div.withConfig({ displayName: 'traclink-release-item__IconWrapper', componentId: 'p9uhcv-2' })(
          [
            'width:32px;height:32px;background-color:',
            ';display:flex;justify-content:center;align-items:center;border-radius:50%;opacity:0;transition:opacity ',
            ';> svg{fill:',
            ';height:10px;}',
          ],
          function (t) {
            return t.theme.colors.sidebarBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            return t.theme.colors.accent;
          }
        );
      function F(t) {
        return t.releasePlaylist.length
          ? (0, g.jsxs)(q, {
              className: t.className,
              children: [
                (0, g.jsxs)(W, {
                  children: [t.releasePlaylist.length, ' ', 1 === t.releasePlaylist.length ? 'Song' : 'Songs'],
                }),
                t.releasePlaylist.map(function (e, n) {
                  return (0, g.jsx)(
                    M,
                    {
                      index: n,
                      songName: e.songName,
                      isPlaying: e.isPlaying,
                      onClick: function () {
                        return t.setActive(n);
                      },
                    },
                    n
                  );
                }),
              ],
            })
          : null;
      }
      var q = (0, o.ZP)(k.ww.div).withConfig({
          displayName: 'traclink-release__StyledTraclinkRelease',
          componentId: 'xnmvxw-0',
        })(['height:auto;width:100%;']),
        W = o.ZP.h2.withConfig({ displayName: 'traclink-release__SongsQty', componentId: 'xnmvxw-1' })(
          ['color:', ';font-size:24px;font-weight:800;line-height:24px;margin:60px 0 24px;'],
          function (t) {
            return t.theme.colors.primary;
          }
        );
      function V(t, e) {
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
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? V(Object(n), !0).forEach(function (e) {
                (0, i.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : V(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var U = ['spotify', 'deezer', 'napster'],
        X = ['custom', 'spotify', 'appleMusic', 'tidal', 'amazonMusic', 'youtube', 'deezer', 'pandora', 'napster'],
        J = !0;
      function Q(t) {
        var e,
          n,
          i = (0, c.V)(t.pageData).pageData,
          o = (0, c.V)(t.siteData).pageData,
          d = (0, r.useState)([]),
          h = d[0],
          f = d[1],
          m = (0, r.useState)(),
          x = m[0],
          v = m[1],
          w = (0, r.useState)(!1),
          y = w[0],
          j = w[1],
          b = (0, a.Z)();
        (0, r.useEffect)(
          function () {
            if (i) {
              var t = function (t) {
                return t.platform
                  ? (function (t, e, n) {
                      var i = {
                          action: n,
                          releaseId: e,
                          returnUrl: ''.concat(
                            window.location.search ? window.location : ''.concat(window.location, '?results')
                          ),
                          isPreSave: !1,
                          timestamp: Number(new Date()),
                          nonce: Math.floor(1e8 * Math.random()),
                        },
                        r = btoa(JSON.stringify(i));
                      return ''.concat('https://api.development.trac.co', '/pre-save/').concat(t, '/?state=').concat(r);
                    })(t.platform, i.id, 'save')
                  : '';
              };
              f(
                (function () {
                  var e =
                    null === i || void 0 === i
                      ? void 0
                      : i.links
                          .map(function (t) {
                            if (t.platform && t.platform.length > 0) return t;
                            var e,
                              n =
                                ((e = t.title),
                                X.find(function (t) {
                                  return e.toLowerCase().includes(t);
                                }));
                            return n ? R(R({}, t), {}, { platform: n }) : t;
                          })
                          .filter(function (t) {
                            return X.some(function (e) {
                              return e === t.platform;
                            });
                          });
                  return (function () {
                    var t;
                    return (
                      !(!i || null === (t = i.data) || void 0 === t || !t.releaseDate) &&
                      i.data.releaseDate > Number(new Date())
                    );
                  })()
                    ? e
                        .filter(function (t) {
                          return U.some(function (e) {
                            return e === t.platform;
                          });
                        })
                        .map(function (e) {
                          return R(R({}, e), {}, { url: t(e) });
                        })
                    : e.filter(function (t) {
                        return t.url && t.url.length > 0;
                      });
                })()
              ),
                analytics.track('Traclink Viewed', {
                  artist_name: i.data.artistName,
                  release_name: i.title,
                  artist_id: i.ownerId,
                  release_id: i.id,
                });
            }
          },
          [i]
        );
        var k =
          (null === i ||
          void 0 === i ||
          null === (e = i.data) ||
          void 0 === e ||
          null === (n = e.tracks) ||
          void 0 === n
            ? void 0
            : n
                .sort(function (t, e) {
                  return (t.order || 0) - (e.order || 0);
                })
                .map(function (t) {
                  return { songName: t.title, url: t.url, isPlaying: t.url === x && y };
                })) || [];
        return i && i.data
          ? (0, g.jsxs)(g.Fragment, {
              children: [
                (0, g.jsx)(p.Z, { pageData: i }),
                (0, g.jsx)(L.Z, {
                  theme: o ? o.theme : void 0,
                  children: (0, g.jsx)(l.Z, {
                    pageData: o,
                    hasBackground: !0,
                    hasBackgroundMobile: !0,
                    hideNavbar: !0,
                    hideCart: !0,
                    action: (0, g.jsx)(z.Z, {}),
                    children: (0, g.jsxs)(Y, {
                      children: [
                        (0, g.jsx)(O, {
                          data: i.data,
                          title: i.title,
                          activeTrack: x,
                          isPlaying: y,
                          setActiveTrack: v,
                          setPlaying: j,
                        }),
                        h.length > 0
                          ? (0, g.jsx)(G, {
                              children: h
                                .filter(function (t) {
                                  return !(null === t || void 0 === t || !t.url);
                                })
                                .map(function (t, e) {
                                  return (0,
                                  g.jsx)(s.Z, { data: t, artistId: i.ownerId, releaseId: i.id, noAnimation: !0 }, e);
                                }),
                            })
                          : null,
                        (0, g.jsx)(F, {
                          title: i.title,
                          releasePlaylist: k,
                          setActive: function (t) {
                            return v(k[t].url);
                          },
                        }),
                        b
                          ? (0, g.jsxs)(K, {
                              children: [
                                (0, g.jsx)(u.Z, {
                                  avatar: (null === o || void 0 === o ? void 0 : o.avatar) || '',
                                  title: (null === o || void 0 === o ? void 0 : o.title) || '',
                                }),
                                (0, g.jsx)($, { href: '/', children: 'View Profile' }),
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
      var Y = o.ZP.div.withConfig({ displayName: 'traclink__Wrapper', componentId: 'sc-1fpre7y-0' })([
          'max-width:608px;margin:0 auto;',
        ]),
        G = o.ZP.div.withConfig({ displayName: 'traclink__LinksContainer', componentId: 'sc-1fpre7y-1' })([
          'width:100%;margin-top:48px;gap:14px;display:flex;flex-direction:column;',
        ]),
        K = o.ZP.div.withConfig({ displayName: 'traclink__MobileInfo', componentId: 'sc-1fpre7y-2' })([
          'margin-top:32px;padding:0 24px;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;gap:24px;',
        ]),
        $ = o.ZP.a.withConfig({ displayName: 'traclink__HomeButton', componentId: 'sc-1fpre7y-3' })(
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
    1200: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/[traclink]',
        function () {
          return n(1032);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [774, 430, 457, 626, 890, 92, 888, 179], function () {
      return (e = 1200), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
