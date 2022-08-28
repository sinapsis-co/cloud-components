(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [458],
  {
    2869: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, {
          __N_SSP: function () {
            return tt;
          },
          default: function () {
            return et;
          },
        });
      var i = n(2809),
        r = n(2962),
        a = n(2872),
        o = n(9117),
        l = n(2577),
        c = n(186),
        s = n(5893);
      function d(t) {
        var e = t.data,
          n = t.title,
          i = t.isPreSave;
        return (0, s.jsxs)(p, {
          children: [
            e.videoUrl
              ? (0, s.jsx)(l.Z, { variant: 'small', data: { title: n, url: e.videoUrl } })
              : (0, s.jsx)(u, { src: e.coverUrl, alt: n }),
            (0, s.jsxs)(f, {
              children: [
                (0, s.jsx)('a', { href: '/', children: (0, s.jsx)('span', { children: e.artistName }) }),
                (0, s.jsx)('h1', { children: n }),
                i && (0, s.jsx)(h, { children: 'Coming soon, pre-save this release to your library' }),
              ],
            }),
          ],
        });
      }
      var p = c.ZP.div.withConfig({ displayName: 'traclink-info__InfoContainer', componentId: 'lff03t-0' })([
          'display:flex;flex-direction:column;align-items:center;',
        ]),
        u = c.ZP.img.withConfig({ displayName: 'traclink-info__CoverImage', componentId: 'lff03t-1' })([
          'border-radius:5px;width:212px;height:212px;',
        ]),
        f = c.ZP.div.withConfig({ displayName: 'traclink-info__Info', componentId: 'lff03t-2' })(
          [
            'text-align:center;padding-top:30px;> h1{font-weight:800;font-size:36px;line-height:100%;margin-bottom:24px;margin-top:12px;color:',
            ';}> span{font-size:14px;color:',
            ';}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            return t.theme.colors.secondary;
          }
        ),
        h = c.ZP.span.withConfig({ displayName: 'traclink-info__PreSaveLabel', componentId: 'lff03t-3' })([
          'font-size:16px;',
        ]),
        m = n(7294),
        g = n(6805),
        x = n(1766);
      function v(t) {
        return (0, s.jsx)(
          w,
          {
            className: t.className,
            initial: 'closed',
            animate: 'open',
            exit: 'closed',
            variants: {
              open: { y: 0, opacity: 1, zIndex: 4, transition: { ease: 'linear', duration: 0.75, delayChildren: 0.5 } },
              closed: { y: '100%', opacity: 0, zIndex: 0 },
            },
            children: t.children,
          },
          'playlist'
        );
      }
      var w = (0, c.ZP)(g.ww.div).withConfig({
        displayName: 'playlist-container__StyledMotion',
        componentId: 'sc-126ysx1-0',
      })([
        'background:black;max-height:50%;max-height:50vh;overflow-y:auto;position:absolute;top:auto;right:0;bottom:100%;left:0;display:flex;justify-content:center;',
      ]);
      function y(t, e) {
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
      function b(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? y(Object(n), !0).forEach(function (e) {
                (0, i.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      function j(t) {
        return (0, s.jsx)(
          'svg',
          b(
            b({ viewBox: '0 0 16 16' }, t),
            {},
            {
              children: (0, s.jsx)('path', {
                fill: t.fill,
                d: 'M13,7H9V3c0-0.55-0.45-1-1-1S7,2.45,7,3v4H3C2.45,7,2,7.45,2,8s0.45,1,1,1h4v4c0,0.55,0.45,1,1,1s1-0.45,1-1V9h4c0.55,0,1-0.45,1-1S13.55,7,13,7z',
              }),
            }
          )
        );
      }
      function k() {
        var t = { animate: { height: 3 }, initial: { height: 9, rotate: 180 } };
        return (0, s.jsxs)('svg', {
          width: '18',
          height: '9',
          viewBox: '0 0 18 9',
          children: [
            (0, s.jsx)(g.ww.rect, {
              variants: t,
              initial: 'initial',
              animate: 'animate',
              transition: { loop: 1 / 0, ease: 'linear', duration: 1, delay: 0.25 },
              fill: '#FFFFFF',
              width: '4',
              height: '9',
            }),
            (0, s.jsx)(g.ww.rect, {
              variants: t,
              initial: 'initial',
              animate: 'animate',
              transition: { loop: 1 / 0, ease: 'linear', duration: 1, delay: 0.75 },
              fill: '#FFFFFF',
              x: '7',
              width: '4',
              height: '9',
            }),
            (0, s.jsx)(g.ww.rect, {
              variants: t,
              initial: 'initial',
              animate: 'animate',
              transition: { loop: 1 / 0, ease: 'linear', duration: 1, delay: 0.5 },
              fill: '#FFFFFF',
              x: '14',
              width: '4',
              height: '9',
            }),
          ],
        });
      }
      function N(t) {
        return (0, s.jsx)(P, {
          variants: { visible: { opacity: 1 }, hidden: { opacity: 0 } },
          className: t.className,
          children: (0, s.jsx)(g.ww.div, {
            className: 'item-link',
            whileHover: { paddingLeft: '5px', paddingRight: '5px' },
            onClick: function () {
              return t.onClick ? t.onClick() : null;
            },
            children: (0, s.jsxs)(_, {
              children: [(0, s.jsx)('span', { children: t.songName }), t.isPlaying ? (0, s.jsx)(k, {}) : null],
            }),
          }),
        });
      }
      var P = (0, c.ZP)(g.ww.div).withConfig({
          displayName: 'traclink-release-item__StyledTraclinkReleaseItem',
          componentId: 'p9uhcv-0',
        })([
          'height:auto;width:100%;max-width:300px;padding:20px 0;border-bottom:1px solid rgba(255,255,255,0.1);.item-link{cursor:pointer;}',
        ]),
        _ = c.ZP.div.withConfig({ displayName: 'traclink-release-item__SongName', componentId: 'p9uhcv-1' })(
          ['display:flex;justify-content:space-between;align-items:center;> span{color:', ';}'],
          function (t) {
            return t.theme.colors.secondary;
          }
        );
      function O(t) {
        return (0, s.jsxs)(C, {
          className: t.className,
          children: [
            (0, s.jsx)(I, { children: t.title }),
            t.releasePlaylist.map(function (e, n) {
              return (0, s.jsx)(
                N,
                {
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
        });
      }
      var C = (0, c.ZP)(g.ww.div).withConfig({
          displayName: 'traclink-release__StyledTraclinkRelease',
          componentId: 'xnmvxw-0',
        })(['height:auto;width:100%;max-width:300px;padding:20px 40px;overflow-y:scroll;']),
        I = c.ZP.span.withConfig({ displayName: 'traclink-release__ReleaseTypeTitle', componentId: 'xnmvxw-1' })(
          ['color:', ';font-size:24px;margin-bottom:24px;'],
          function (t) {
            return t.theme.palette.white;
          }
        ),
        Z = n(4144);
      function S(t, e) {
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
      function F(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? S(Object(n), !0).forEach(function (e) {
                (0, i.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      function D(t) {
        return (0, s.jsxs)(
          'svg',
          F(
            F({ width: '14', height: '14', viewBox: '0 0 14 14' }, t),
            {},
            {
              children: [
                (0, s.jsx)('path', {
                  d: 'M2 2V12',
                  stroke: 'white',
                  strokeWidth: '4',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, s.jsx)('path', {
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
      }
      var L = n(8820);
      function z(t) {
        var e,
          n = t.className,
          i = t.data,
          r = t.title,
          a = (0, m.useRef)(),
          o = (0, m.useState)(),
          l = o[0],
          d = o[1],
          p = (0, m.useState)(!1),
          u = p[0],
          f = p[1],
          h = (0, m.useState)(!1),
          w = h[0],
          y = h[1],
          b = (0, m.useState)(0),
          N = b[0],
          P = b[1],
          _ = (0, c.Fg)();
        (0, m.useEffect)(
          function () {
            return (function (t) {
              var e;
              return (
                t &&
                  (P(0),
                  (a.current = new x.Howl({ src: [t], html5: !0, autoplay: !0 })),
                  a.current.on('play', function () {
                    f(!0);
                  }),
                  (e = setInterval(function () {
                    var t;
                    if (null !== (t = a.current) && void 0 !== t && t.playing()) {
                      var e,
                        n,
                        i = (null === (e = a.current) || void 0 === e ? void 0 : e.seek()) || 0,
                        r = (null === (n = a.current) || void 0 === n ? void 0 : n.duration()) || 1;
                      P((i / r) * 100);
                    }
                  }, 50)),
                  a.current.on('pause', function () {
                    var t;
                    return f((null === (t = a.current) || void 0 === t ? void 0 : t.playing()) || !1);
                  }),
                  a.current.on('end', function () {
                    return f(!1);
                  })),
                function () {
                  var t;
                  clearInterval(e),
                    a.current && (null === (t = a.current) || void 0 === t || t.off(), a.current.unload());
                }
              );
            })(l);
          },
          [l]
        );
        var C =
          (null === (e = i.tracks) || void 0 === e
            ? void 0
            : e
                .sort(function (t, e) {
                  return (t.order || 0) - (e.order || 0);
                })
                .map(function (t) {
                  return { songName: t.title, url: t.url, isPlaying: t.url === l && u };
                })) || [];
        return (0, s.jsxs)(E, {
          children: [
            (0, s.jsxs)(M, {
              className: ''.concat(n, ' ').concat(w ? 'open' : ''),
              children: [
                (0, s.jsxs)(A, {
                  children: [
                    (0, s.jsx)(L.Z, { src: i.coverUrl, alt: i.title, variant: 'squareSmall' }),
                    (0, s.jsxs)(V, {
                      children: [
                        (0, s.jsx)('span', { children: i.title }),
                        (0, s.jsx)('label', { children: i.artistName }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(B, {
                  onClick: function (t) {
                    var e, n;
                    (t.stopPropagation(), u || l)
                      ? u
                        ? null === (e = a.current) || void 0 === e || e.pause()
                        : null === (n = a.current) || void 0 === n || n.play()
                      : d(C[0].url);
                  },
                  children: u ? (0, s.jsx)(D, { fill: _.palette.white }) : (0, s.jsx)(Z.Z, { fill: _.palette.white }),
                }),
                null !== C && void 0 !== C && C.length
                  ? (0, s.jsxs)(R, {
                      onClick: function () {
                        return y(!w);
                      },
                      children: [
                        u && (0, s.jsx)(k, {}),
                        (0, s.jsxs)('span', {
                          children: [
                            null === C || void 0 === C ? void 0 : C.length,
                            '\xa0',
                            1 === (null === C || void 0 === C ? void 0 : C.length) ? 'Song' : 'Songs',
                          ],
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            (0, s.jsx)(g.M_, {
              children: w
                ? (0, s.jsxs)(v, {
                    children: [
                      (0, s.jsx)(g.ww.div, {
                        className: 'close-icon',
                        initial: 'initial',
                        whileHover: 'animate',
                        whileTap: 'animate',
                        variants: { animate: { scale: 1.25 }, initial: { scale: 1 } },
                        children: (0, s.jsx)(j, {
                          onClick: function () {
                            return y(!1);
                          },
                        }),
                      }),
                      (0, s.jsx)(O, {
                        title: r,
                        releasePlaylist: C,
                        setActive: function (t) {
                          return d(C[t].url);
                        },
                      }),
                    ],
                  })
                : null,
            }),
            (0, s.jsx)(T, { progressbarWidth: N, children: (0, s.jsx)('span', {}) }),
          ],
        });
      }
      var E = c.ZP.div.withConfig({ displayName: 'traclink-player__PlayerContainer', componentId: 'sc-4jg59k-0' })(
          [
            'max-width:642px;margin:auto;position:fixed;top:auto;right:0;bottom:0;left:0;z-index:9;margin-bottom:20px;@media (max-width:',
            '){margin-bottom:0px;}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.mobileL, 'px');
          }
        ),
        M = c.ZP.div.withConfig({ displayName: 'traclink-player__PlayerNav', componentId: 'sc-4jg59k-1' })(
          [
            'border-radius:5px;height:80px;background:black;padding:20px;position:relative;display:flex;justify-content:space-between;align-items:center;cursor:pointer;@media (max-width:',
            '){border-radius:0px;}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.mobileL, 'px');
          }
        ),
        T = c.ZP.div.withConfig({ displayName: 'traclink-player__TraclinkProgressbar', componentId: 'sc-4jg59k-2' })(
          [
            'position:absolute;right:0;bottom:0px;left:0;height:5px;background-color:',
            ';z-index:1;border-bottom-left-radius:5px;border-bottom-right-radius:5px;@media (max-width:',
            '){border-bottom-left-radius:0px;border-bottom-right-radius:0px;height:2px;> span{border-bottom-left-radius:0px;border-bottom-right-radius:0px;}}> span{position:absolute;top:0;right:auto;bottom:0;left:0;border-bottom-left-radius:5px;border-bottom-right-radius:5px;background:',
            ';width:',
            ';}',
          ],
          function (t) {
            return t.theme.palette.grays.gray4;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.mobileL, 'px');
          },
          function (t) {
            return t.theme.colors.accent;
          },
          function (t) {
            var e = t.progressbarWidth;
            return e ? ''.concat(e, '%') : null;
          }
        ),
        B = c.ZP.button.withConfig({ displayName: 'traclink-player__ActionButton', componentId: 'sc-4jg59k-3' })(
          [
            'width:40px;height:40px;background-color:',
            ';display:flex;justify-content:center;align-items:center;border-radius:50%;cursor:pointer;position:absolute;right:calc(50% - 20px);top:calc(50% - 20px);> svg{fill:',
            ';height:16px;}',
          ],
          function (t) {
            return t.theme.colors.accent;
          },
          function (t) {
            return t.theme.colors.accent;
          }
        ),
        R = c.ZP.div.withConfig({ displayName: 'traclink-player__SongsInfo', componentId: 'sc-4jg59k-4' })(
          ['> span{font-size:14px;line-height:24px;color:', ';font-weight:bold;}> svg{margin-right:30px;}'],
          function (t) {
            return t.theme.palette.white;
          }
        ),
        A = c.ZP.div.withConfig({ displayName: 'traclink-player__TracInfo', componentId: 'sc-4jg59k-5' })([
          'display:flex;width:calc(50% - 20px);display:flex;align-items:center;',
        ]),
        V = c.ZP.div.withConfig({ displayName: 'traclink-player__TracInfoContent', componentId: 'sc-4jg59k-6' })(
          [
            'color:',
            ';display:flex;flex-direction:column;padding-left:15px;flex-grow:1;> span{font-weight:bold;font-size:16px;line-height:24px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:calc(100% - 30px);}> label{color:',
            ';font-size:14px;}@media (max-width:',
            '){display:none;}',
          ],
          function (t) {
            return t.theme.palette.white;
          },
          function (t) {
            return t.theme.palette.grays.gray4;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.mobileL, 'px');
          }
        ),
        H = n(6747),
        U = n(9207),
        W = n(5578),
        X = (0, c.ZP)(function (t) {
          return (0, s.jsx)('div', { className: t.className, children: t.children });
        }).withConfig({ displayName: 'fixed-button', componentId: 'lmfryw-0' })([
          'position:fixed;&.top{top:0%;margin-top:30px;margin-right:20px;}right:0;z-index:500;&.bottom{top:85%;right:0;margin-right:20px;}.more{font-size:14px;font-weight:400;margin-right:5px;}.artistName{margin-right:15px;}',
        ]);
      function q() {
        return (0, s.jsx)('svg', {
          width: '11',
          height: '10',
          viewBox: '0 0 11 10',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: (0, s.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M5.64007 1.53697L8.0606 4.09174L0.837498 4.12698C0.614275 4.12787 0.400549 4.22353 0.243444 4.39288C0.08634 4.56224 -0.00124073 4.79136 1.23978e-05 5.02975C0.0010519 5.26799 0.090724 5.49602 0.249279 5.66362C0.407835 5.83121 0.62227 5.92463 0.845354 5.92329L8.06688 5.88889L5.67856 8.46967C5.52135 8.63872 5.43351 8.86758 5.43439 9.10584C5.43528 9.3441 5.52481 9.57221 5.68328 9.73993C6.0136 10.089 6.54622 10.0863 6.87351 9.73405L10.8017 5.49791C11.0691 5.20761 11.0656 4.74071 10.7938 4.45503L6.82401 0.260002C6.49396 -0.0889478 5.96158 -0.0863191 5.63457 0.265876C5.47741 0.435182 5.38969 0.664244 5.39072 0.902639C5.39175 1.14103 5.48145 1.36922 5.64007 1.53697Z',
            fill: '#EAEAEA',
          }),
        });
      }
      var G = n(1163),
        J = n(9008);
      function K(t, e) {
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
      function Q(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? K(Object(n), !0).forEach(function (e) {
                (0, i.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var Y = ['spotify', 'deezer', 'napster'],
        $ = ['custom', 'spotify', 'appleMusic', 'tidal', 'amazonMusic', 'youtube', 'deezer', 'pandora', 'napster'],
        tt = !0;
      function et(t) {
        var e = (0, U.V)(t.pageData).pageData,
          n = (0, m.useState)([]),
          i = n[0],
          a = n[1],
          l = (0, G.useRouter)(),
          c = function () {
            var t;
            return (
              !(!e || null === (t = e.data) || void 0 === t || !t.releaseDate) &&
              e.data.releaseDate > Number(new Date())
            );
          };
        return (
          (0, m.useEffect)(
            function () {
              if (e) {
                var t = function (t) {
                    var e;
                    return (
                      (null === (e = window) || void 0 === e
                        ? void 0
                        : e.location.search.includes('success='.concat(t.platform))) || !1
                    );
                  },
                  n = function (t) {
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
                          return ''
                            .concat('https://api.development.trac.co', '/pre-save/')
                            .concat(t, '/?state=')
                            .concat(r);
                        })(t.platform, e.id, 'save')
                      : '';
                  };
                a(
                  (function () {
                    var i =
                      null === e || void 0 === e
                        ? void 0
                        : e.links
                            .map(function (t) {
                              if (t.platform && t.platform.length > 0) return t;
                              var e,
                                n =
                                  ((e = t.title),
                                  $.find(function (t) {
                                    return e.toLowerCase().includes(t);
                                  }));
                              return n ? Q(Q({}, t), {}, { platform: n }) : t;
                            })
                            .filter(function (t) {
                              return $.some(function (e) {
                                return e === t.platform;
                              });
                            });
                    return c()
                      ? i
                          .filter(function (t) {
                            return Y.some(function (e) {
                              return e === t.platform;
                            });
                          })
                          .map(function (e) {
                            return Q(Q({}, e), {}, { url: n(e), isSuccess: t(e) });
                          })
                      : i.filter(function (t) {
                          return t.url && t.url.length > 0;
                        });
                  })()
                ),
                  analytics.track('Traclink Viewed', {
                    artist_name: e.data.artistName,
                    release_name: e.title,
                    artist_id: e.ownerId,
                    release_id: e.id,
                  });
              }
            },
            [e]
          ),
          e && e.data
            ? (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(J.default, {
                    children: (0, s.jsx)('link', { rel: 'icon', href: '/favicon/favicon.ico' }),
                  }),
                  (0, s.jsx)(r.PB, {
                    title: ''.concat(e.data.artistName, ' | ').concat(e.title),
                    description: ''.concat(e.data.artistName, ' | ').concat(e.title),
                    openGraph: {
                      title: ''.concat(e.data.artistName, ' | ').concat(e.title),
                      description: ''.concat(e.data.artistName, ' | ').concat(e.title),
                      url: 'https://'.concat(t.subdomain, '.').concat('development.trac.co', '/').concat(e.path),
                      images: [{ url: e.avatar }],
                      type: 'website',
                    },
                  }),
                  (0, s.jsxs)(H.Z, {
                    theme: e ? e.theme : void 0,
                    removeBranding: null === e || void 0 === e ? void 0 : e.removeBranding,
                    children: [
                      (0, s.jsxs)(it, {
                        children: [
                          (0, s.jsx)(d, { data: e.data, isPreSave: c(), title: e.title }),
                          (0, s.jsx)(rt, {
                            className: 'mt-60',
                            children: i
                              .filter(function (t) {
                                return !(null === t || void 0 === t || !t.url);
                              })
                              .map(function (t, n) {
                                return (0,
                                s.jsx)(o.Z, { data: t, className: 'mt-5', artistId: e.ownerId, releaseId: e.id }, n);
                              }),
                          }),
                        ],
                      }),
                      e.data.tracks && e.data.tracks.length > 0 && (0, s.jsx)(z, { data: e.data, title: e.title }),
                      (0, s.jsx)(X, {
                        className: 'top',
                        children: (0, s.jsx)(nt, {
                          className: 'rounded',
                          onClick: function () {
                            return l.push('/');
                          },
                          children: (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)('span', { className: 'more', children: 'More From ' }),
                              ' ',
                              (0, s.jsx)('span', { className: 'artistName', children: e.data.artistName }),
                              (0, s.jsx)(q, {}),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null
        );
      }
      var nt = (0, c.ZP)(W.Z).withConfig({ displayName: 'traclink__RoundedButton', componentId: 'sc-1fpre7y-0' })([
          'border-radius:1.5rem;padding-top:0.8rem;padding-left:1rem;padding-right:1rem;padding-bottom:0.8rem;height:auto;',
        ]),
        it = (0, c.ZP)(a.Z).withConfig({ displayName: 'traclink__StyledContainer', componentId: 'sc-1fpre7y-1' })([
          'justify-content:center;flex-direction:column;margin-bottom:100px;',
        ]),
        rt = c.ZP.div.withConfig({ displayName: 'traclink__LinksContainer', componentId: 'sc-1fpre7y-2' })([
          'width:100%;',
        ]);
    },
    5111: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/[traclink]',
        function () {
          return n(2869);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [430, 987, 819, 55, 766, 886, 774, 888, 179], function () {
      return (e = 5111), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
