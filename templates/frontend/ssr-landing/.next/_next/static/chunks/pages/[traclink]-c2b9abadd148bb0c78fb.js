_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [14],
  {
    '36NK': function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, '__N_SSP', function () {
          return se;
        }),
        t.d(n, 'default', function () {
          return le;
        });
      var o = t('rePB'),
        r = t('q1tI'),
        a = t.n(r),
        i = t('9ixD'),
        u = t('6Hpx'),
        d = t('FBxL'),
        s = t('1LmX'),
        l = t('vOnD'),
        c = a.a.createElement;
      function _(e) {
        var n = e.data,
          t = e.title,
          o = e.isPreSave;
        return c(
          p,
          null,
          n.videoUrl
            ? c(s.a, { variant: 'small', data: { title: t, url: n.videoUrl } })
            : c(f, { src: n.coverUrl, alt: t }),
          c(
            m,
            null,
            c('a', { href: '/' }, c('span', null, n.artistName)),
            c('h1', null, t),
            o && c(h, null, 'Coming soon, pre-save this release to your library')
          )
        );
      }
      var p = l.e.div.withConfig({ displayName: 'traclink-info__InfoContainer', componentId: 'lff03t-0' })([
          'display:flex;flex-direction:column;align-items:center;',
        ]),
        f = l.e.img.withConfig({ displayName: 'traclink-info__CoverImage', componentId: 'lff03t-1' })([
          'border-radius:5px;width:212px;height:212px;',
        ]),
        m = l.e.div.withConfig({ displayName: 'traclink-info__Info', componentId: 'lff03t-2' })(
          [
            'text-align:center;padding-top:30px;> h1{font-weight:800;font-size:36px;line-height:100%;margin-bottom:24px;margin-top:12px;color:',
            ';}> span{font-size:14px;color:',
            ';}',
          ],
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            return e.theme.colors.secondary;
          }
        ),
        h = l.e.span.withConfig({ displayName: 'traclink-info__PreSaveLabel', componentId: 'lff03t-3' })([
          'font-size:16px;',
        ]),
        v = t('ZMKu'),
        y = t('HlzF'),
        g = a.a.createElement;
      function w(e) {
        return g(
          b,
          {
            className: e.className,
            key: 'playlist',
            initial: 'closed',
            animate: 'open',
            exit: 'closed',
            variants: {
              open: { y: 0, opacity: 1, zIndex: 4, transition: { ease: 'linear', duration: 0.75, delayChildren: 0.5 } },
              closed: { y: '100%', opacity: 0, zIndex: 0 },
            },
          },
          e.children
        );
      }
      var b = Object(l.e)(v.b.div).withConfig({
          displayName: 'playlist-container__StyledMotion',
          componentId: 'sc-126ysx1-0',
        })([
          'background:black;max-height:50%;max-height:50vh;overflow-y:auto;position:absolute;top:auto;right:0;bottom:100%;left:0;display:flex;justify-content:center;',
        ]),
        x = t('wx14'),
        A = a.a.createElement;
      function T(e) {
        return A(
          'svg',
          Object(x.a)({ viewBox: '0 0 16 16' }, e),
          A('path', {
            fill: e.fill,
            d: 'M13,7H9V3c0-0.55-0.45-1-1-1S7,2.45,7,3v4H3C2.45,7,2,7.45,2,8s0.45,1,1,1h4v4c0,0.55,0.45,1,1,1s1-0.45,1-1V9h4c0.55,0,1-0.45,1-1S13.55,7,13,7z',
          })
        );
      }
      var k = a.a.createElement;
      function S() {
        var e = { animate: { height: 3 }, initial: { height: 9, rotate: 180 } };
        return k(
          'svg',
          { width: '18', height: '9', viewBox: '0 0 18 9' },
          k(v.b.rect, {
            variants: e,
            initial: 'initial',
            animate: 'animate',
            transition: { loop: 1 / 0, ease: 'linear', duration: 1, delay: 0.25 },
            fill: '#FFFFFF',
            width: '4',
            height: '9',
          }),
          k(v.b.rect, {
            variants: e,
            initial: 'initial',
            animate: 'animate',
            transition: { loop: 1 / 0, ease: 'linear', duration: 1, delay: 0.75 },
            fill: '#FFFFFF',
            x: '7',
            width: '4',
            height: '9',
          }),
          k(v.b.rect, {
            variants: e,
            initial: 'initial',
            animate: 'animate',
            transition: { loop: 1 / 0, ease: 'linear', duration: 1, delay: 0.5 },
            fill: '#FFFFFF',
            x: '14',
            width: '4',
            height: '9',
          })
        );
      }
      var I = a.a.createElement;
      function O(e) {
        return I(
          P,
          { variants: { visible: { opacity: 1 }, hidden: { opacity: 0 } }, className: e.className },
          I(
            v.b.div,
            {
              className: 'item-link',
              whileHover: { paddingLeft: '5px', paddingRight: '5px' },
              onClick: function () {
                return e.onClick ? e.onClick() : null;
              },
            },
            I(F, null, I('span', null, e.songName), e.isPlaying ? I(S, null) : null)
          )
        );
      }
      var P = Object(l.e)(v.b.div).withConfig({
          displayName: 'traclink-release-item__StyledTraclinkReleaseItem',
          componentId: 'p9uhcv-0',
        })([
          'height:auto;width:100%;max-width:300px;padding:20px 0;border-bottom:1px solid rgba(255,255,255,0.1);.item-link{cursor:pointer;}',
        ]),
        F = l.e.div.withConfig({ displayName: 'traclink-release-item__SongName', componentId: 'p9uhcv-1' })(
          ['display:flex;justify-content:space-between;align-items:center;> span{color:', ';}'],
          function (e) {
            return e.theme.colors.secondary;
          }
        ),
        N = a.a.createElement;
      function C(e) {
        return N(
          H,
          { className: e.className },
          N(L, null, e.title),
          e.releasePlaylist.map(function (n, t) {
            return N(O, {
              key: t,
              songName: n.songName,
              isPlaying: n.isPlaying,
              onClick: function () {
                return e.setActive(t);
              },
            });
          })
        );
      }
      var H = Object(l.e)(v.b.div).withConfig({
          displayName: 'traclink-release__StyledTraclinkRelease',
          componentId: 'xnmvxw-0',
        })(['height:auto;width:100%;max-width:300px;padding:20px 40px;overflow-y:scroll;']),
        L = l.e.span.withConfig({ displayName: 'traclink-release__ReleaseTypeTitle', componentId: 'xnmvxw-1' })(
          ['color:', ';font-size:24px;margin-bottom:24px;'],
          function (e) {
            return e.theme.palette.white;
          }
        ),
        M = t('F6jV'),
        B = a.a.createElement;
      function E(e) {
        return B(
          'svg',
          Object(x.a)({ width: '14', height: '14', viewBox: '0 0 14 14' }, e),
          B('path', {
            d: 'M2 2V12',
            stroke: 'white',
            strokeWidth: '4',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
          B('path', {
            d: 'M11.5 2V12',
            stroke: 'white',
            strokeWidth: '4',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          })
        );
      }
      var j = t('5wV8'),
        D = a.a.createElement;
      function G(e) {
        var n,
          t = e.className,
          o = e.data,
          a = e.title,
          i = Object(r.useRef)(),
          u = Object(r.useState)(),
          d = u[0],
          s = u[1],
          c = Object(r.useState)(!1),
          _ = c[0],
          p = c[1],
          f = Object(r.useState)(!1),
          m = f[0],
          h = f[1],
          g = Object(r.useState)(0),
          b = g[0],
          x = g[1],
          A = Object(l.f)();
        Object(r.useEffect)(
          function () {
            return (function (e) {
              var n;
              return (
                e &&
                  (x(0),
                  (i.current = new y.Howl({ src: [e], html5: !0, autoplay: !0 })),
                  i.current.on('play', function () {
                    p(!0);
                  }),
                  (n = setInterval(function () {
                    var e;
                    if (null !== (e = i.current) && void 0 !== e && e.playing()) {
                      var n,
                        t,
                        o = (null === (n = i.current) || void 0 === n ? void 0 : n.seek()) || 0,
                        r = (null === (t = i.current) || void 0 === t ? void 0 : t.duration()) || 1;
                      x((o / r) * 100);
                    }
                  }, 50)),
                  i.current.on('pause', function () {
                    var e;
                    return p((null === (e = i.current) || void 0 === e ? void 0 : e.playing()) || !1);
                  }),
                  i.current.on('end', function () {
                    return p(!1);
                  })),
                function () {
                  var e;
                  clearInterval(n),
                    i.current && (null === (e = i.current) || void 0 === e || e.off(), i.current.unload());
                }
              );
            })(d);
          },
          [d]
        );
        var k =
          (null === (n = o.tracks) || void 0 === n
            ? void 0
            : n
                .sort(function (e, n) {
                  return (e.order || 0) - (n.order || 0);
                })
                .map(function (e) {
                  return { songName: e.title, url: e.url, isPlaying: e.url === d && _ };
                })) || [];
        return D(
          V,
          null,
          D(
            R,
            { className: ''.concat(t, ' ').concat(m ? 'open' : '') },
            D(
              W,
              null,
              D(j.a, { src: o.coverUrl, alt: o.title, variant: 'squareSmall' }),
              D(U, null, D('span', null, o.title), D('label', null, o.artistName))
            ),
            D(
              z,
              {
                onClick: function (e) {
                  var n, t;
                  (e.stopPropagation(), _ || d)
                    ? _
                      ? null === (n = i.current) || void 0 === n || n.pause()
                      : null === (t = i.current) || void 0 === t || t.play()
                    : s(k[0].url);
                },
              },
              D(_ ? E : M.a, { fill: A.palette.white })
            ),
            null !== k && void 0 !== k && k.length
              ? D(
                  q,
                  {
                    onClick: function () {
                      return h(!m);
                    },
                  },
                  _ && D(S, null),
                  D(
                    'span',
                    null,
                    null === k || void 0 === k ? void 0 : k.length,
                    '\xa0',
                    1 === (null === k || void 0 === k ? void 0 : k.length) ? 'Song' : 'Songs'
                  )
                )
              : null
          ),
          D(
            v.a,
            null,
            m
              ? D(
                  w,
                  null,
                  D(
                    v.b.div,
                    {
                      className: 'close-icon',
                      initial: 'initial',
                      whileHover: 'animate',
                      whileTap: 'animate',
                      variants: { animate: { scale: 1.25 }, initial: { scale: 1 } },
                    },
                    D(T, {
                      onClick: function () {
                        return h(!1);
                      },
                    })
                  ),
                  D(C, {
                    title: a,
                    releasePlaylist: k,
                    setActive: function (e) {
                      return s(k[e].url);
                    },
                  })
                )
              : null
          ),
          D(X, { progressbarWidth: b }, D('span', null))
        );
      }
      var V = l.e.div.withConfig({ displayName: 'traclink-player__PlayerContainer', componentId: 'sc-4jg59k-0' })(
          [
            'max-width:642px;margin:auto;position:fixed;top:auto;right:0;bottom:0;left:0;z-index:9;margin-bottom:20px;@media (max-width:',
            '){margin-bottom:0px;}',
          ],
          function (e) {
            var n = e.theme;
            return ''.concat(n.breakpoints.mobileL, 'px');
          }
        ),
        R = l.e.div.withConfig({ displayName: 'traclink-player__PlayerNav', componentId: 'sc-4jg59k-1' })(
          [
            'border-radius:5px;height:80px;background:black;padding:20px;position:relative;display:flex;justify-content:space-between;align-items:center;cursor:pointer;@media (max-width:',
            '){border-radius:0px;}',
          ],
          function (e) {
            var n = e.theme;
            return ''.concat(n.breakpoints.mobileL, 'px');
          }
        ),
        X = l.e.div.withConfig({ displayName: 'traclink-player__TraclinkProgressbar', componentId: 'sc-4jg59k-2' })(
          [
            'position:absolute;right:0;bottom:0px;left:0;height:5px;background-color:',
            ';z-index:1;border-bottom-left-radius:5px;border-bottom-right-radius:5px;@media (max-width:',
            '){border-bottom-left-radius:0px;border-bottom-right-radius:0px;height:2px;> span{border-bottom-left-radius:0px;border-bottom-right-radius:0px;}}> span{position:absolute;top:0;right:auto;bottom:0;left:0;border-bottom-left-radius:5px;border-bottom-right-radius:5px;background:',
            ';width:',
            ';}',
          ],
          function (e) {
            return e.theme.palette.grays.gray4;
          },
          function (e) {
            var n = e.theme;
            return ''.concat(n.breakpoints.mobileL, 'px');
          },
          function (e) {
            return e.theme.colors.accent;
          },
          function (e) {
            var n = e.progressbarWidth;
            return n ? ''.concat(n, '%') : null;
          }
        ),
        z = l.e.button.withConfig({ displayName: 'traclink-player__ActionButton', componentId: 'sc-4jg59k-3' })(
          [
            'width:40px;height:40px;background-color:',
            ';display:flex;justify-content:center;align-items:center;border-radius:50%;cursor:pointer;position:absolute;right:calc(50% - 20px);top:calc(50% - 20px);> svg{fill:',
            ';height:16px;}',
          ],
          function (e) {
            return e.theme.colors.accent;
          },
          function (e) {
            return e.theme.colors.accent;
          }
        ),
        q = l.e.div.withConfig({ displayName: 'traclink-player__SongsInfo', componentId: 'sc-4jg59k-4' })(
          ['> span{font-size:14px;line-height:24px;color:', ';font-weight:bold;}> svg{margin-right:30px;}'],
          function (e) {
            return e.theme.palette.white;
          }
        ),
        W = l.e.div.withConfig({ displayName: 'traclink-player__TracInfo', componentId: 'sc-4jg59k-5' })([
          'display:flex;width:calc(50% - 20px);display:flex;align-items:center;',
        ]),
        U = l.e.div.withConfig({ displayName: 'traclink-player__TracInfoContent', componentId: 'sc-4jg59k-6' })(
          [
            'color:',
            ';display:flex;flex-direction:column;padding-left:15px;flex-grow:1;> span{font-weight:bold;font-size:16px;line-height:24px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:calc(100% - 30px);}> label{color:',
            ';font-size:14px;}@media (max-width:',
            '){display:none;}',
          ],
          function (e) {
            return e.theme.palette.white;
          },
          function (e) {
            return e.theme.palette.grays.gray4;
          },
          function (e) {
            var n = e.theme;
            return ''.concat(n.breakpoints.mobileL, 'px');
          }
        ),
        $ = t('42Rd'),
        Q = t('jtTr'),
        Z = t('zoQI'),
        Y = r.createElement,
        K = Object(l.e)(function (e) {
          return Y('div', { className: e.className }, e.children);
        }).withConfig({ displayName: 'fixed-button', componentId: 'lmfryw-0' })([
          'position:fixed;&.top{top:0%;margin-top:30px;margin-right:20px;}right:0;z-index:500;&.bottom{top:85%;right:0;margin-right:20px;}.more{font-size:14px;font-weight:400;margin-right:5px;}.artistName{margin-right:15px;}',
        ]),
        J = a.a.createElement;
      function ee() {
        return J(
          'svg',
          { width: '11', height: '10', viewBox: '0 0 11 10', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          J('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M5.64007 1.53697L8.0606 4.09174L0.837498 4.12698C0.614275 4.12787 0.400549 4.22353 0.243444 4.39288C0.08634 4.56224 -0.00124073 4.79136 1.23978e-05 5.02975C0.0010519 5.26799 0.090724 5.49602 0.249279 5.66362C0.407835 5.83121 0.62227 5.92463 0.845354 5.92329L8.06688 5.88889L5.67856 8.46967C5.52135 8.63872 5.43351 8.86758 5.43439 9.10584C5.43528 9.3441 5.52481 9.57221 5.68328 9.73993C6.0136 10.089 6.54622 10.0863 6.87351 9.73405L10.8017 5.49791C11.0691 5.20761 11.0656 4.74071 10.7938 4.45503L6.82401 0.260002C6.49396 -0.0889478 5.96158 -0.0863191 5.63457 0.265876C5.47741 0.435182 5.38969 0.664244 5.39072 0.902639C5.39175 1.14103 5.48145 1.36922 5.64007 1.53697Z',
            fill: '#EAEAEA',
          })
        );
      }
      var ne = t('20a2'),
        te = t('g4pe'),
        oe = t.n(te),
        re = a.a.createElement;
      function ae(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function ie(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? ae(Object(t), !0).forEach(function (n) {
                Object(o.a)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ae(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              });
        }
        return e;
      }
      var ue = ['spotify', 'deezer', 'napster'],
        de = ['custom', 'spotify', 'appleMusic', 'tidal', 'amazonMusic', 'youtube', 'deezer', 'pandora', 'napster'],
        se = !0;
      function le(e) {
        var n = Object(Q.a)(e.pageData).pageData,
          t = Object(r.useState)([]),
          o = t[0],
          u = t[1],
          s = Object(ne.useRouter)(),
          l = function () {
            var e;
            return (
              !(!n || null === (e = n.data) || void 0 === e || !e.releaseDate) &&
              n.data.releaseDate > Number(new Date())
            );
          };
        return (
          Object(r.useEffect)(
            function () {
              if (n) {
                var e = function (e) {
                    var n;
                    return (
                      (null === (n = window) || void 0 === n
                        ? void 0
                        : n.location.search.includes('success='.concat(e.platform))) || !1
                    );
                  },
                  t = function (e) {
                    return e.platform
                      ? (function (e, n, t) {
                          var o = {
                              action: t,
                              releaseId: n,
                              returnUrl: ''.concat(
                                window.location.search ? window.location : ''.concat(window.location, '?results')
                              ),
                              isPreSave: !1,
                              timestamp: Number(new Date()),
                              nonce: Math.floor(1e8 * Math.random()),
                            },
                            r = btoa(JSON.stringify(o));
                          return ''
                            .concat('https://api.trac-dev.sinapsis.co', '/pre-save/')
                            .concat(e, '/?state=')
                            .concat(r);
                        })(e.platform, n.id, 'save')
                      : '';
                  };
                u(
                  (function () {
                    var o =
                      null === n || void 0 === n
                        ? void 0
                        : n.links
                            .map(function (e) {
                              if (e.platform && e.platform.length > 0) return e;
                              var n,
                                t =
                                  ((n = e.title),
                                  de.find(function (e) {
                                    return n.toLowerCase().includes(e);
                                  }));
                              return t ? ie(ie({}, e), {}, { platform: t }) : e;
                            })
                            .filter(function (e) {
                              return de.some(function (n) {
                                return n === e.platform;
                              });
                            });
                    return l()
                      ? o
                          .filter(function (e) {
                            return ue.some(function (n) {
                              return n === e.platform;
                            });
                          })
                          .map(function (n) {
                            return ie(ie({}, n), {}, { url: t(n), isSuccess: e(n) });
                          })
                      : o.filter(function (e) {
                          return e.url && e.url.length > 0;
                        });
                  })()
                );
              }
            },
            [n]
          ),
          n && n.data
            ? re(
                a.a.Fragment,
                null,
                re(oe.a, null, re('link', { rel: 'icon', href: '/favicon/favicon.ico' })),
                re(i.a, {
                  title: ''.concat(n.data.artistName, ' | ').concat(n.title),
                  description: ''.concat(n.data.artistName, ' | ').concat(n.title),
                  openGraph: {
                    title: ''.concat(n.data.artistName, ' | ').concat(n.title),
                    description: ''.concat(n.data.artistName, ' | ').concat(n.title),
                    url: 'https://'.concat(e.subdomain, '.').concat('trac-dev.sinapsis.co', '/').concat(n.path),
                    images: [{ url: n.avatar }],
                    type: 'website',
                  },
                }),
                re(
                  $.a,
                  {
                    theme: n ? n.theme : void 0,
                    removeBranding: null === n || void 0 === n ? void 0 : n.removeBranding,
                  },
                  re(
                    _e,
                    null,
                    re(_, { data: n.data, isPreSave: l(), title: n.title }),
                    re(
                      pe,
                      { className: 'mt-60' },
                      o
                        .filter(function (e) {
                          return !(null === e || void 0 === e || !e.url);
                        })
                        .map(function (e, n) {
                          return re(d.a, { key: n, data: e, className: 'mt-5' });
                        })
                    )
                  ),
                  n.data.tracks && n.data.tracks.length > 0 && re(G, { data: n.data, title: n.title }),
                  re(
                    K,
                    { className: 'top' },
                    re(
                      ce,
                      {
                        className: 'rounded',
                        onClick: function () {
                          return s.push('/');
                        },
                      },
                      re(
                        a.a.Fragment,
                        null,
                        re('span', { className: 'more' }, 'More From '),
                        ' ',
                        re('span', { className: 'artistName' }, n.data.artistName),
                        re(ee, null)
                      )
                    )
                  )
                )
              )
            : null
        );
      }
      var ce = Object(l.e)(Z.a).withConfig({ displayName: 'traclink__RoundedButton', componentId: 'sc-1fpre7y-0' })([
          'border-radius:1.5rem;padding-top:0.8rem;padding-left:1rem;padding-right:1rem;padding-bottom:0.8rem;height:auto;',
        ]),
        _e = Object(l.e)(u.a).withConfig({ displayName: 'traclink__StyledContainer', componentId: 'sc-1fpre7y-1' })([
          'justify-content:center;flex-direction:column;margin-bottom:100px;',
        ]),
        pe = l.e.div.withConfig({ displayName: 'traclink__LinksContainer', componentId: 'sc-1fpre7y-2' })([
          'width:100%;',
        ]);
    },
    '3r9c': function (e, n) {
      var t;
      t = (function () {
        return this;
      })();
      try {
        t = t || new Function('return this')();
      } catch (o) {
        'object' === typeof window && (t = window);
      }
      e.exports = t;
    },
    'CPH/': function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/[traclink]',
        function () {
          return t('36NK');
        },
      ]);
    },
    HlzF: function (e, n, t) {
      (function (t) {
        var o;
        !(function () {
          'use strict';
          var r = function () {
            this.init();
          };
          r.prototype = {
            init: function () {
              var e = this || a;
              return (
                (e._counter = 1e3),
                (e._html5AudioPool = []),
                (e.html5PoolSize = 10),
                (e._codecs = {}),
                (e._howls = []),
                (e._muted = !1),
                (e._volume = 1),
                (e._canPlayEvent = 'canplaythrough'),
                (e._navigator = 'undefined' !== typeof window && window.navigator ? window.navigator : null),
                (e.masterGain = null),
                (e.noAudio = !1),
                (e.usingWebAudio = !0),
                (e.autoSuspend = !0),
                (e.ctx = null),
                (e.autoUnlock = !0),
                e._setup(),
                e
              );
            },
            volume: function (e) {
              var n = this || a;
              if (((e = parseFloat(e)), n.ctx || p(), 'undefined' !== typeof e && e >= 0 && e <= 1)) {
                if (((n._volume = e), n._muted)) return n;
                n.usingWebAudio && n.masterGain.gain.setValueAtTime(e, a.ctx.currentTime);
                for (var t = 0; t < n._howls.length; t++)
                  if (!n._howls[t]._webAudio)
                    for (var o = n._howls[t]._getSoundIds(), r = 0; r < o.length; r++) {
                      var i = n._howls[t]._soundById(o[r]);
                      i && i._node && (i._node.volume = i._volume * e);
                    }
                return n;
              }
              return n._volume;
            },
            mute: function (e) {
              var n = this || a;
              n.ctx || p(),
                (n._muted = e),
                n.usingWebAudio && n.masterGain.gain.setValueAtTime(e ? 0 : n._volume, a.ctx.currentTime);
              for (var t = 0; t < n._howls.length; t++)
                if (!n._howls[t]._webAudio)
                  for (var o = n._howls[t]._getSoundIds(), r = 0; r < o.length; r++) {
                    var i = n._howls[t]._soundById(o[r]);
                    i && i._node && (i._node.muted = !!e || i._muted);
                  }
              return n;
            },
            stop: function () {
              for (var e = this || a, n = 0; n < e._howls.length; n++) e._howls[n].stop();
              return e;
            },
            unload: function () {
              for (var e = this || a, n = e._howls.length - 1; n >= 0; n--) e._howls[n].unload();
              return (
                e.usingWebAudio && e.ctx && 'undefined' !== typeof e.ctx.close && (e.ctx.close(), (e.ctx = null), p()),
                e
              );
            },
            codecs: function (e) {
              return (this || a)._codecs[e.replace(/^x-/, '')];
            },
            _setup: function () {
              var e = this || a;
              if (((e.state = (e.ctx && e.ctx.state) || 'suspended'), e._autoSuspend(), !e.usingWebAudio))
                if ('undefined' !== typeof Audio)
                  try {
                    'undefined' === typeof new Audio().oncanplaythrough && (e._canPlayEvent = 'canplay');
                  } catch (n) {
                    e.noAudio = !0;
                  }
                else e.noAudio = !0;
              try {
                new Audio().muted && (e.noAudio = !0);
              } catch (n) {}
              return e.noAudio || e._setupCodecs(), e;
            },
            _setupCodecs: function () {
              var e = this || a,
                n = null;
              try {
                n = 'undefined' !== typeof Audio ? new Audio() : null;
              } catch (i) {
                return e;
              }
              if (!n || 'function' !== typeof n.canPlayType) return e;
              var t = n.canPlayType('audio/mpeg;').replace(/^no$/, ''),
                o = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
                r = o && parseInt(o[0].split('/')[1], 10) < 33;
              return (
                (e._codecs = {
                  mp3: !(r || (!t && !n.canPlayType('audio/mp3;').replace(/^no$/, ''))),
                  mpeg: !!t,
                  opus: !!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
                  ogg: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                  oga: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                  wav: !!(n.canPlayType('audio/wav; codecs="1"') || n.canPlayType('audio/wav')).replace(/^no$/, ''),
                  aac: !!n.canPlayType('audio/aac;').replace(/^no$/, ''),
                  caf: !!n.canPlayType('audio/x-caf;').replace(/^no$/, ''),
                  m4a: !!(
                    n.canPlayType('audio/x-m4a;') ||
                    n.canPlayType('audio/m4a;') ||
                    n.canPlayType('audio/aac;')
                  ).replace(/^no$/, ''),
                  m4b: !!(
                    n.canPlayType('audio/x-m4b;') ||
                    n.canPlayType('audio/m4b;') ||
                    n.canPlayType('audio/aac;')
                  ).replace(/^no$/, ''),
                  mp4: !!(
                    n.canPlayType('audio/x-mp4;') ||
                    n.canPlayType('audio/mp4;') ||
                    n.canPlayType('audio/aac;')
                  ).replace(/^no$/, ''),
                  weba: !!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
                  webm: !!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
                  dolby: !!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
                  flac: !!(n.canPlayType('audio/x-flac;') || n.canPlayType('audio/flac;')).replace(/^no$/, ''),
                }),
                e
              );
            },
            _unlockAudio: function () {
              var e = this || a;
              if (!e._audioUnlocked && e.ctx) {
                (e._audioUnlocked = !1),
                  (e.autoUnlock = !1),
                  e._mobileUnloaded || 44100 === e.ctx.sampleRate || ((e._mobileUnloaded = !0), e.unload()),
                  (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050));
                var n = function (t) {
                  for (; e._html5AudioPool.length < e.html5PoolSize; )
                    try {
                      var o = new Audio();
                      (o._unlocked = !0), e._releaseHtml5Audio(o);
                    } catch (t) {
                      e.noAudio = !0;
                      break;
                    }
                  for (var r = 0; r < e._howls.length; r++)
                    if (!e._howls[r]._webAudio)
                      for (var a = e._howls[r]._getSoundIds(), i = 0; i < a.length; i++) {
                        var u = e._howls[r]._soundById(a[i]);
                        u && u._node && !u._node._unlocked && ((u._node._unlocked = !0), u._node.load());
                      }
                  e._autoResume();
                  var d = e.ctx.createBufferSource();
                  (d.buffer = e._scratchBuffer),
                    d.connect(e.ctx.destination),
                    'undefined' === typeof d.start ? d.noteOn(0) : d.start(0),
                    'function' === typeof e.ctx.resume && e.ctx.resume(),
                    (d.onended = function () {
                      d.disconnect(0),
                        (e._audioUnlocked = !0),
                        document.removeEventListener('touchstart', n, !0),
                        document.removeEventListener('touchend', n, !0),
                        document.removeEventListener('click', n, !0);
                      for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit('unlock');
                    });
                };
                return (
                  document.addEventListener('touchstart', n, !0),
                  document.addEventListener('touchend', n, !0),
                  document.addEventListener('click', n, !0),
                  e
                );
              }
            },
            _obtainHtml5Audio: function () {
              var e = this || a;
              if (e._html5AudioPool.length) return e._html5AudioPool.pop();
              var n = new Audio().play();
              return (
                n &&
                  'undefined' !== typeof Promise &&
                  (n instanceof Promise || 'function' === typeof n.then) &&
                  n.catch(function () {
                    console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
                  }),
                new Audio()
              );
            },
            _releaseHtml5Audio: function (e) {
              var n = this || a;
              return e._unlocked && n._html5AudioPool.push(e), n;
            },
            _autoSuspend: function () {
              var e = this;
              if (e.autoSuspend && e.ctx && 'undefined' !== typeof e.ctx.suspend && a.usingWebAudio) {
                for (var n = 0; n < e._howls.length; n++)
                  if (e._howls[n]._webAudio)
                    for (var t = 0; t < e._howls[n]._sounds.length; t++) if (!e._howls[n]._sounds[t]._paused) return e;
                return (
                  e._suspendTimer && clearTimeout(e._suspendTimer),
                  (e._suspendTimer = setTimeout(function () {
                    if (e.autoSuspend) {
                      (e._suspendTimer = null), (e.state = 'suspending');
                      var n = function () {
                        (e.state = 'suspended'),
                          e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume());
                      };
                      e.ctx.suspend().then(n, n);
                    }
                  }, 3e4)),
                  e
                );
              }
            },
            _autoResume: function () {
              var e = this;
              if (e.ctx && 'undefined' !== typeof e.ctx.resume && a.usingWebAudio)
                return (
                  'running' === e.state && 'interrupted' !== e.ctx.state && e._suspendTimer
                    ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
                    : 'suspended' === e.state || ('running' === e.state && 'interrupted' === e.ctx.state)
                    ? (e.ctx.resume().then(function () {
                        e.state = 'running';
                        for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit('resume');
                      }),
                      e._suspendTimer && (clearTimeout(e._suspendTimer), (e._suspendTimer = null)))
                    : 'suspending' === e.state && (e._resumeAfterSuspend = !0),
                  e
                );
            },
          };
          var a = new r(),
            i = function (e) {
              e.src && 0 !== e.src.length
                ? this.init(e)
                : console.error('An array of source files must be passed with any new Howl.');
            };
          i.prototype = {
            init: function (e) {
              var n = this;
              return (
                a.ctx || p(),
                (n._autoplay = e.autoplay || !1),
                (n._format = 'string' !== typeof e.format ? e.format : [e.format]),
                (n._html5 = e.html5 || !1),
                (n._muted = e.mute || !1),
                (n._loop = e.loop || !1),
                (n._pool = e.pool || 5),
                (n._preload = ('boolean' !== typeof e.preload && 'metadata' !== e.preload) || e.preload),
                (n._rate = e.rate || 1),
                (n._sprite = e.sprite || {}),
                (n._src = 'string' !== typeof e.src ? e.src : [e.src]),
                (n._volume = void 0 !== e.volume ? e.volume : 1),
                (n._xhr = {
                  method: e.xhr && e.xhr.method ? e.xhr.method : 'GET',
                  headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                  withCredentials: !(!e.xhr || !e.xhr.withCredentials) && e.xhr.withCredentials,
                }),
                (n._duration = 0),
                (n._state = 'unloaded'),
                (n._sounds = []),
                (n._endTimers = {}),
                (n._queue = []),
                (n._playLock = !1),
                (n._onend = e.onend ? [{ fn: e.onend }] : []),
                (n._onfade = e.onfade ? [{ fn: e.onfade }] : []),
                (n._onload = e.onload ? [{ fn: e.onload }] : []),
                (n._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
                (n._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
                (n._onpause = e.onpause ? [{ fn: e.onpause }] : []),
                (n._onplay = e.onplay ? [{ fn: e.onplay }] : []),
                (n._onstop = e.onstop ? [{ fn: e.onstop }] : []),
                (n._onmute = e.onmute ? [{ fn: e.onmute }] : []),
                (n._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
                (n._onrate = e.onrate ? [{ fn: e.onrate }] : []),
                (n._onseek = e.onseek ? [{ fn: e.onseek }] : []),
                (n._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
                (n._onresume = []),
                (n._webAudio = a.usingWebAudio && !n._html5),
                'undefined' !== typeof a.ctx && a.ctx && a.autoUnlock && a._unlockAudio(),
                a._howls.push(n),
                n._autoplay &&
                  n._queue.push({
                    event: 'play',
                    action: function () {
                      n.play();
                    },
                  }),
                n._preload && 'none' !== n._preload && n.load(),
                n
              );
            },
            load: function () {
              var e = this,
                n = null;
              if (a.noAudio) e._emit('loaderror', null, 'No audio support.');
              else {
                'string' === typeof e._src && (e._src = [e._src]);
                for (var t = 0; t < e._src.length; t++) {
                  var o, r;
                  if (e._format && e._format[t]) o = e._format[t];
                  else {
                    if ('string' !== typeof (r = e._src[t])) {
                      e._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
                      continue;
                    }
                    (o = /^data:audio\/([^;,]+);/i.exec(r)) || (o = /\.([^.]+)$/.exec(r.split('?', 1)[0])),
                      o && (o = o[1].toLowerCase());
                  }
                  if (
                    (o ||
                      console.warn(
                        'No file extension was found. Consider using the "format" property or specify an extension.'
                      ),
                    o && a.codecs(o))
                  ) {
                    n = e._src[t];
                    break;
                  }
                }
                if (n)
                  return (
                    (e._src = n),
                    (e._state = 'loading'),
                    'https:' === window.location.protocol &&
                      'http:' === n.slice(0, 5) &&
                      ((e._html5 = !0), (e._webAudio = !1)),
                    new u(e),
                    e._webAudio && s(e),
                    e
                  );
                e._emit('loaderror', null, 'No codec support for selected audio sources.');
              }
            },
            play: function (e, n) {
              var t = this,
                o = null;
              if ('number' === typeof e) (o = e), (e = null);
              else {
                if ('string' === typeof e && 'loaded' === t._state && !t._sprite[e]) return null;
                if ('undefined' === typeof e && ((e = '__default'), !t._playLock)) {
                  for (var r = 0, i = 0; i < t._sounds.length; i++)
                    t._sounds[i]._paused && !t._sounds[i]._ended && (r++, (o = t._sounds[i]._id));
                  1 === r ? (e = null) : (o = null);
                }
              }
              var u = o ? t._soundById(o) : t._inactiveSound();
              if (!u) return null;
              if ((o && !e && (e = u._sprite || '__default'), 'loaded' !== t._state)) {
                (u._sprite = e), (u._ended = !1);
                var d = u._id;
                return (
                  t._queue.push({
                    event: 'play',
                    action: function () {
                      t.play(d);
                    },
                  }),
                  d
                );
              }
              if (o && !u._paused) return n || t._loadQueue('play'), u._id;
              t._webAudio && a._autoResume();
              var s = Math.max(0, u._seek > 0 ? u._seek : t._sprite[e][0] / 1e3),
                l = Math.max(0, (t._sprite[e][0] + t._sprite[e][1]) / 1e3 - s),
                c = (1e3 * l) / Math.abs(u._rate),
                _ = t._sprite[e][0] / 1e3,
                p = (t._sprite[e][0] + t._sprite[e][1]) / 1e3;
              (u._sprite = e), (u._ended = !1);
              var f = function () {
                (u._paused = !1),
                  (u._seek = s),
                  (u._start = _),
                  (u._stop = p),
                  (u._loop = !(!u._loop && !t._sprite[e][2]));
              };
              if (!(s >= p)) {
                var m = u._node;
                if (t._webAudio) {
                  var h = function () {
                    (t._playLock = !1), f(), t._refreshBuffer(u);
                    var e = u._muted || t._muted ? 0 : u._volume;
                    m.gain.setValueAtTime(e, a.ctx.currentTime),
                      (u._playStart = a.ctx.currentTime),
                      'undefined' === typeof m.bufferSource.start
                        ? u._loop
                          ? m.bufferSource.noteGrainOn(0, s, 86400)
                          : m.bufferSource.noteGrainOn(0, s, l)
                        : u._loop
                        ? m.bufferSource.start(0, s, 86400)
                        : m.bufferSource.start(0, s, l),
                      c !== 1 / 0 && (t._endTimers[u._id] = setTimeout(t._ended.bind(t, u), c)),
                      n ||
                        setTimeout(function () {
                          t._emit('play', u._id), t._loadQueue();
                        }, 0);
                  };
                  'running' === a.state && 'interrupted' !== a.ctx.state
                    ? h()
                    : ((t._playLock = !0), t.once('resume', h), t._clearTimer(u._id));
                } else {
                  var v = function () {
                    (m.currentTime = s),
                      (m.muted = u._muted || t._muted || a._muted || m.muted),
                      (m.volume = u._volume * a.volume()),
                      (m.playbackRate = u._rate);
                    try {
                      var o = m.play();
                      if (
                        (o && 'undefined' !== typeof Promise && (o instanceof Promise || 'function' === typeof o.then)
                          ? ((t._playLock = !0),
                            f(),
                            o
                              .then(function () {
                                (t._playLock = !1), (m._unlocked = !0), n || (t._emit('play', u._id), t._loadQueue());
                              })
                              .catch(function () {
                                (t._playLock = !1),
                                  t._emit(
                                    'playerror',
                                    u._id,
                                    'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.'
                                  ),
                                  (u._ended = !0),
                                  (u._paused = !0);
                              }))
                          : n || ((t._playLock = !1), f(), t._emit('play', u._id), t._loadQueue()),
                        (m.playbackRate = u._rate),
                        m.paused)
                      )
                        return void t._emit(
                          'playerror',
                          u._id,
                          'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.'
                        );
                      '__default' !== e || u._loop
                        ? (t._endTimers[u._id] = setTimeout(t._ended.bind(t, u), c))
                        : ((t._endTimers[u._id] = function () {
                            t._ended(u), m.removeEventListener('ended', t._endTimers[u._id], !1);
                          }),
                          m.addEventListener('ended', t._endTimers[u._id], !1));
                    } catch (r) {
                      t._emit('playerror', u._id, r);
                    }
                  };
                  'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA' === m.src &&
                    ((m.src = t._src), m.load());
                  var y = (window && window.ejecta) || (!m.readyState && a._navigator.isCocoonJS);
                  if (m.readyState >= 3 || y) v();
                  else {
                    t._playLock = !0;
                    var g = function () {
                      v(), m.removeEventListener(a._canPlayEvent, g, !1);
                    };
                    m.addEventListener(a._canPlayEvent, g, !1), t._clearTimer(u._id);
                  }
                }
                return u._id;
              }
              t._ended(u);
            },
            pause: function (e) {
              var n = this;
              if ('loaded' !== n._state || n._playLock)
                return (
                  n._queue.push({
                    event: 'pause',
                    action: function () {
                      n.pause(e);
                    },
                  }),
                  n
                );
              for (var t = n._getSoundIds(e), o = 0; o < t.length; o++) {
                n._clearTimer(t[o]);
                var r = n._soundById(t[o]);
                if (
                  r &&
                  !r._paused &&
                  ((r._seek = n.seek(t[o])), (r._rateSeek = 0), (r._paused = !0), n._stopFade(t[o]), r._node)
                )
                  if (n._webAudio) {
                    if (!r._node.bufferSource) continue;
                    'undefined' === typeof r._node.bufferSource.stop
                      ? r._node.bufferSource.noteOff(0)
                      : r._node.bufferSource.stop(0),
                      n._cleanBuffer(r._node);
                  } else (isNaN(r._node.duration) && r._node.duration !== 1 / 0) || r._node.pause();
                arguments[1] || n._emit('pause', r ? r._id : null);
              }
              return n;
            },
            stop: function (e, n) {
              var t = this;
              if ('loaded' !== t._state || t._playLock)
                return (
                  t._queue.push({
                    event: 'stop',
                    action: function () {
                      t.stop(e);
                    },
                  }),
                  t
                );
              for (var o = t._getSoundIds(e), r = 0; r < o.length; r++) {
                t._clearTimer(o[r]);
                var a = t._soundById(o[r]);
                a &&
                  ((a._seek = a._start || 0),
                  (a._rateSeek = 0),
                  (a._paused = !0),
                  (a._ended = !0),
                  t._stopFade(o[r]),
                  a._node &&
                    (t._webAudio
                      ? a._node.bufferSource &&
                        ('undefined' === typeof a._node.bufferSource.stop
                          ? a._node.bufferSource.noteOff(0)
                          : a._node.bufferSource.stop(0),
                        t._cleanBuffer(a._node))
                      : (isNaN(a._node.duration) && a._node.duration !== 1 / 0) ||
                        ((a._node.currentTime = a._start || 0),
                        a._node.pause(),
                        a._node.duration === 1 / 0 && t._clearSound(a._node))),
                  n || t._emit('stop', a._id));
              }
              return t;
            },
            mute: function (e, n) {
              var t = this;
              if ('loaded' !== t._state || t._playLock)
                return (
                  t._queue.push({
                    event: 'mute',
                    action: function () {
                      t.mute(e, n);
                    },
                  }),
                  t
                );
              if ('undefined' === typeof n) {
                if ('boolean' !== typeof e) return t._muted;
                t._muted = e;
              }
              for (var o = t._getSoundIds(n), r = 0; r < o.length; r++) {
                var i = t._soundById(o[r]);
                i &&
                  ((i._muted = e),
                  i._interval && t._stopFade(i._id),
                  t._webAudio && i._node
                    ? i._node.gain.setValueAtTime(e ? 0 : i._volume, a.ctx.currentTime)
                    : i._node && (i._node.muted = !!a._muted || e),
                  t._emit('mute', i._id));
              }
              return t;
            },
            volume: function () {
              var e,
                n,
                t,
                o = this,
                r = arguments;
              if (0 === r.length) return o._volume;
              if (1 === r.length || (2 === r.length && 'undefined' === typeof r[1])) {
                var i = o._getSoundIds(),
                  u = i.indexOf(r[0]);
                u >= 0 ? (n = parseInt(r[0], 10)) : (e = parseFloat(r[0]));
              } else r.length >= 2 && ((e = parseFloat(r[0])), (n = parseInt(r[1], 10)));
              if (!('undefined' !== typeof e && e >= 0 && e <= 1))
                return (t = n ? o._soundById(n) : o._sounds[0]) ? t._volume : 0;
              if ('loaded' !== o._state || o._playLock)
                return (
                  o._queue.push({
                    event: 'volume',
                    action: function () {
                      o.volume.apply(o, r);
                    },
                  }),
                  o
                );
              'undefined' === typeof n && (o._volume = e), (n = o._getSoundIds(n));
              for (var d = 0; d < n.length; d++)
                (t = o._soundById(n[d])) &&
                  ((t._volume = e),
                  r[2] || o._stopFade(n[d]),
                  o._webAudio && t._node && !t._muted
                    ? t._node.gain.setValueAtTime(e, a.ctx.currentTime)
                    : t._node && !t._muted && (t._node.volume = e * a.volume()),
                  o._emit('volume', t._id));
              return o;
            },
            fade: function (e, n, t, o) {
              var r = this;
              if ('loaded' !== r._state || r._playLock)
                return (
                  r._queue.push({
                    event: 'fade',
                    action: function () {
                      r.fade(e, n, t, o);
                    },
                  }),
                  r
                );
              (e = Math.min(Math.max(0, parseFloat(e)), 1)),
                (n = Math.min(Math.max(0, parseFloat(n)), 1)),
                (t = parseFloat(t)),
                r.volume(e, o);
              for (var i = r._getSoundIds(o), u = 0; u < i.length; u++) {
                var d = r._soundById(i[u]);
                if (d) {
                  if ((o || r._stopFade(i[u]), r._webAudio && !d._muted)) {
                    var s = a.ctx.currentTime,
                      l = s + t / 1e3;
                    (d._volume = e), d._node.gain.setValueAtTime(e, s), d._node.gain.linearRampToValueAtTime(n, l);
                  }
                  r._startFadeInterval(d, e, n, t, i[u], 'undefined' === typeof o);
                }
              }
              return r;
            },
            _startFadeInterval: function (e, n, t, o, r, a) {
              var i = this,
                u = n,
                d = t - n,
                s = Math.abs(d / 0.01),
                l = Math.max(4, s > 0 ? o / s : o),
                c = Date.now();
              (e._fadeTo = t),
                (e._interval = setInterval(function () {
                  var r = (Date.now() - c) / o;
                  (c = Date.now()),
                    (u += d * r),
                    (u = Math.round(100 * u) / 100),
                    (u = d < 0 ? Math.max(t, u) : Math.min(t, u)),
                    i._webAudio ? (e._volume = u) : i.volume(u, e._id, !0),
                    a && (i._volume = u),
                    ((t < n && u <= t) || (t > n && u >= t)) &&
                      (clearInterval(e._interval),
                      (e._interval = null),
                      (e._fadeTo = null),
                      i.volume(t, e._id),
                      i._emit('fade', e._id));
                }, l));
            },
            _stopFade: function (e) {
              var n = this,
                t = n._soundById(e);
              return (
                t &&
                  t._interval &&
                  (n._webAudio && t._node.gain.cancelScheduledValues(a.ctx.currentTime),
                  clearInterval(t._interval),
                  (t._interval = null),
                  n.volume(t._fadeTo, e),
                  (t._fadeTo = null),
                  n._emit('fade', e)),
                n
              );
            },
            loop: function () {
              var e,
                n,
                t,
                o = this,
                r = arguments;
              if (0 === r.length) return o._loop;
              if (1 === r.length) {
                if ('boolean' !== typeof r[0]) return !!(t = o._soundById(parseInt(r[0], 10))) && t._loop;
                (e = r[0]), (o._loop = e);
              } else 2 === r.length && ((e = r[0]), (n = parseInt(r[1], 10)));
              for (var a = o._getSoundIds(n), i = 0; i < a.length; i++)
                (t = o._soundById(a[i])) &&
                  ((t._loop = e),
                  o._webAudio &&
                    t._node &&
                    t._node.bufferSource &&
                    ((t._node.bufferSource.loop = e),
                    e && ((t._node.bufferSource.loopStart = t._start || 0), (t._node.bufferSource.loopEnd = t._stop))));
              return o;
            },
            rate: function () {
              var e,
                n,
                t,
                o = this,
                r = arguments;
              if (0 === r.length) n = o._sounds[0]._id;
              else if (1 === r.length) {
                var i = o._getSoundIds(),
                  u = i.indexOf(r[0]);
                u >= 0 ? (n = parseInt(r[0], 10)) : (e = parseFloat(r[0]));
              } else 2 === r.length && ((e = parseFloat(r[0])), (n = parseInt(r[1], 10)));
              if ('number' !== typeof e) return (t = o._soundById(n)) ? t._rate : o._rate;
              if ('loaded' !== o._state || o._playLock)
                return (
                  o._queue.push({
                    event: 'rate',
                    action: function () {
                      o.rate.apply(o, r);
                    },
                  }),
                  o
                );
              'undefined' === typeof n && (o._rate = e), (n = o._getSoundIds(n));
              for (var d = 0; d < n.length; d++)
                if ((t = o._soundById(n[d]))) {
                  o.playing(n[d]) &&
                    ((t._rateSeek = o.seek(n[d])), (t._playStart = o._webAudio ? a.ctx.currentTime : t._playStart)),
                    (t._rate = e),
                    o._webAudio && t._node && t._node.bufferSource
                      ? t._node.bufferSource.playbackRate.setValueAtTime(e, a.ctx.currentTime)
                      : t._node && (t._node.playbackRate = e);
                  var s = o.seek(n[d]),
                    l = (o._sprite[t._sprite][0] + o._sprite[t._sprite][1]) / 1e3 - s,
                    c = (1e3 * l) / Math.abs(t._rate);
                  (!o._endTimers[n[d]] && t._paused) ||
                    (o._clearTimer(n[d]), (o._endTimers[n[d]] = setTimeout(o._ended.bind(o, t), c))),
                    o._emit('rate', t._id);
                }
              return o;
            },
            seek: function () {
              var e,
                n,
                t = this,
                o = arguments;
              if (0 === o.length) n = t._sounds[0]._id;
              else if (1 === o.length) {
                var r = t._getSoundIds(),
                  i = r.indexOf(o[0]);
                i >= 0
                  ? (n = parseInt(o[0], 10))
                  : t._sounds.length && ((n = t._sounds[0]._id), (e = parseFloat(o[0])));
              } else 2 === o.length && ((e = parseFloat(o[0])), (n = parseInt(o[1], 10)));
              if ('undefined' === typeof n) return t;
              if ('number' === typeof e && ('loaded' !== t._state || t._playLock))
                return (
                  t._queue.push({
                    event: 'seek',
                    action: function () {
                      t.seek.apply(t, o);
                    },
                  }),
                  t
                );
              var u = t._soundById(n);
              if (u) {
                if (!('number' === typeof e && e >= 0)) {
                  if (t._webAudio) {
                    var d = t.playing(n) ? a.ctx.currentTime - u._playStart : 0,
                      s = u._rateSeek ? u._rateSeek - u._seek : 0;
                    return u._seek + (s + d * Math.abs(u._rate));
                  }
                  return u._node.currentTime;
                }
                var l = t.playing(n);
                l && t.pause(n, !0),
                  (u._seek = e),
                  (u._ended = !1),
                  t._clearTimer(n),
                  t._webAudio || !u._node || isNaN(u._node.duration) || (u._node.currentTime = e);
                var c = function () {
                  t._emit('seek', n), l && t.play(n, !0);
                };
                if (l && !t._webAudio) {
                  var _ = function () {
                    t._playLock ? setTimeout(_, 0) : c();
                  };
                  setTimeout(_, 0);
                } else c();
              }
              return t;
            },
            playing: function (e) {
              var n = this;
              if ('number' === typeof e) {
                var t = n._soundById(e);
                return !!t && !t._paused;
              }
              for (var o = 0; o < n._sounds.length; o++) if (!n._sounds[o]._paused) return !0;
              return !1;
            },
            duration: function (e) {
              var n = this,
                t = n._duration,
                o = n._soundById(e);
              return o && (t = n._sprite[o._sprite][1] / 1e3), t;
            },
            state: function () {
              return this._state;
            },
            unload: function () {
              for (var e = this, n = e._sounds, t = 0; t < n.length; t++)
                n[t]._paused || e.stop(n[t]._id),
                  e._webAudio ||
                    (e._clearSound(n[t]._node),
                    n[t]._node.removeEventListener('error', n[t]._errorFn, !1),
                    n[t]._node.removeEventListener(a._canPlayEvent, n[t]._loadFn, !1),
                    n[t]._node.removeEventListener('ended', n[t]._endFn, !1),
                    a._releaseHtml5Audio(n[t]._node)),
                  delete n[t]._node,
                  e._clearTimer(n[t]._id);
              var o = a._howls.indexOf(e);
              o >= 0 && a._howls.splice(o, 1);
              var r = !0;
              for (t = 0; t < a._howls.length; t++)
                if (a._howls[t]._src === e._src || e._src.indexOf(a._howls[t]._src) >= 0) {
                  r = !1;
                  break;
                }
              return (
                d && r && delete d[e._src],
                (a.noAudio = !1),
                (e._state = 'unloaded'),
                (e._sounds = []),
                (e = null),
                null
              );
            },
            on: function (e, n, t, o) {
              var r = this['_on' + e];
              return 'function' === typeof n && r.push(o ? { id: t, fn: n, once: o } : { id: t, fn: n }), this;
            },
            off: function (e, n, t) {
              var o = this,
                r = o['_on' + e],
                a = 0;
              if (('number' === typeof n && ((t = n), (n = null)), n || t))
                for (a = 0; a < r.length; a++) {
                  var i = t === r[a].id;
                  if ((n === r[a].fn && i) || (!n && i)) {
                    r.splice(a, 1);
                    break;
                  }
                }
              else if (e) o['_on' + e] = [];
              else {
                var u = Object.keys(o);
                for (a = 0; a < u.length; a++) 0 === u[a].indexOf('_on') && Array.isArray(o[u[a]]) && (o[u[a]] = []);
              }
              return o;
            },
            once: function (e, n, t) {
              return this.on(e, n, t, 1), this;
            },
            _emit: function (e, n, t) {
              for (var o = this, r = o['_on' + e], a = r.length - 1; a >= 0; a--)
                (r[a].id && r[a].id !== n && 'load' !== e) ||
                  (setTimeout(
                    function (e) {
                      e.call(this, n, t);
                    }.bind(o, r[a].fn),
                    0
                  ),
                  r[a].once && o.off(e, r[a].fn, r[a].id));
              return o._loadQueue(e), o;
            },
            _loadQueue: function (e) {
              var n = this;
              if (n._queue.length > 0) {
                var t = n._queue[0];
                t.event === e && (n._queue.shift(), n._loadQueue()), e || t.action();
              }
              return n;
            },
            _ended: function (e) {
              var n = this,
                t = e._sprite;
              if (!n._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop)
                return setTimeout(n._ended.bind(n, e), 100), n;
              var o = !(!e._loop && !n._sprite[t][2]);
              if ((n._emit('end', e._id), !n._webAudio && o && n.stop(e._id, !0).play(e._id), n._webAudio && o)) {
                n._emit('play', e._id),
                  (e._seek = e._start || 0),
                  (e._rateSeek = 0),
                  (e._playStart = a.ctx.currentTime);
                var r = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
                n._endTimers[e._id] = setTimeout(n._ended.bind(n, e), r);
              }
              return (
                n._webAudio &&
                  !o &&
                  ((e._paused = !0),
                  (e._ended = !0),
                  (e._seek = e._start || 0),
                  (e._rateSeek = 0),
                  n._clearTimer(e._id),
                  n._cleanBuffer(e._node),
                  a._autoSuspend()),
                n._webAudio || o || n.stop(e._id, !0),
                n
              );
            },
            _clearTimer: function (e) {
              var n = this;
              if (n._endTimers[e]) {
                if ('function' !== typeof n._endTimers[e]) clearTimeout(n._endTimers[e]);
                else {
                  var t = n._soundById(e);
                  t && t._node && t._node.removeEventListener('ended', n._endTimers[e], !1);
                }
                delete n._endTimers[e];
              }
              return n;
            },
            _soundById: function (e) {
              for (var n = this, t = 0; t < n._sounds.length; t++) if (e === n._sounds[t]._id) return n._sounds[t];
              return null;
            },
            _inactiveSound: function () {
              var e = this;
              e._drain();
              for (var n = 0; n < e._sounds.length; n++) if (e._sounds[n]._ended) return e._sounds[n].reset();
              return new u(e);
            },
            _drain: function () {
              var e = this,
                n = e._pool,
                t = 0,
                o = 0;
              if (!(e._sounds.length < n)) {
                for (o = 0; o < e._sounds.length; o++) e._sounds[o]._ended && t++;
                for (o = e._sounds.length - 1; o >= 0; o--) {
                  if (t <= n) return;
                  e._sounds[o]._ended &&
                    (e._webAudio && e._sounds[o]._node && e._sounds[o]._node.disconnect(0),
                    e._sounds.splice(o, 1),
                    t--);
                }
              }
            },
            _getSoundIds: function (e) {
              if ('undefined' === typeof e) {
                for (var n = [], t = 0; t < this._sounds.length; t++) n.push(this._sounds[t]._id);
                return n;
              }
              return [e];
            },
            _refreshBuffer: function (e) {
              return (
                (e._node.bufferSource = a.ctx.createBufferSource()),
                (e._node.bufferSource.buffer = d[this._src]),
                e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node),
                (e._node.bufferSource.loop = e._loop),
                e._loop &&
                  ((e._node.bufferSource.loopStart = e._start || 0), (e._node.bufferSource.loopEnd = e._stop || 0)),
                e._node.bufferSource.playbackRate.setValueAtTime(e._rate, a.ctx.currentTime),
                this
              );
            },
            _cleanBuffer: function (e) {
              var n = a._navigator && a._navigator.vendor.indexOf('Apple') >= 0;
              if (
                a._scratchBuffer &&
                e.bufferSource &&
                ((e.bufferSource.onended = null), e.bufferSource.disconnect(0), n)
              )
                try {
                  e.bufferSource.buffer = a._scratchBuffer;
                } catch (t) {}
              return (e.bufferSource = null), this;
            },
            _clearSound: function (e) {
              /MSIE |Trident\//.test(a._navigator && a._navigator.userAgent) ||
                (e.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
            },
          };
          var u = function (e) {
            (this._parent = e), this.init();
          };
          u.prototype = {
            init: function () {
              var e = this,
                n = e._parent;
              return (
                (e._muted = n._muted),
                (e._loop = n._loop),
                (e._volume = n._volume),
                (e._rate = n._rate),
                (e._seek = 0),
                (e._paused = !0),
                (e._ended = !0),
                (e._sprite = '__default'),
                (e._id = ++a._counter),
                n._sounds.push(e),
                e.create(),
                e
              );
            },
            create: function () {
              var e = this,
                n = e._parent,
                t = a._muted || e._muted || e._parent._muted ? 0 : e._volume;
              return (
                n._webAudio
                  ? ((e._node = 'undefined' === typeof a.ctx.createGain ? a.ctx.createGainNode() : a.ctx.createGain()),
                    e._node.gain.setValueAtTime(t, a.ctx.currentTime),
                    (e._node.paused = !0),
                    e._node.connect(a.masterGain))
                  : a.noAudio ||
                    ((e._node = a._obtainHtml5Audio()),
                    (e._errorFn = e._errorListener.bind(e)),
                    e._node.addEventListener('error', e._errorFn, !1),
                    (e._loadFn = e._loadListener.bind(e)),
                    e._node.addEventListener(a._canPlayEvent, e._loadFn, !1),
                    (e._endFn = e._endListener.bind(e)),
                    e._node.addEventListener('ended', e._endFn, !1),
                    (e._node.src = n._src),
                    (e._node.preload = !0 === n._preload ? 'auto' : n._preload),
                    (e._node.volume = t * a.volume()),
                    e._node.load()),
                e
              );
            },
            reset: function () {
              var e = this,
                n = e._parent;
              return (
                (e._muted = n._muted),
                (e._loop = n._loop),
                (e._volume = n._volume),
                (e._rate = n._rate),
                (e._seek = 0),
                (e._rateSeek = 0),
                (e._paused = !0),
                (e._ended = !0),
                (e._sprite = '__default'),
                (e._id = ++a._counter),
                e
              );
            },
            _errorListener: function () {
              var e = this;
              e._parent._emit('loaderror', e._id, e._node.error ? e._node.error.code : 0),
                e._node.removeEventListener('error', e._errorFn, !1);
            },
            _loadListener: function () {
              var e = this,
                n = e._parent;
              (n._duration = Math.ceil(10 * e._node.duration) / 10),
                0 === Object.keys(n._sprite).length && (n._sprite = { __default: [0, 1e3 * n._duration] }),
                'loaded' !== n._state && ((n._state = 'loaded'), n._emit('load'), n._loadQueue()),
                e._node.removeEventListener(a._canPlayEvent, e._loadFn, !1);
            },
            _endListener: function () {
              var e = this,
                n = e._parent;
              n._duration === 1 / 0 &&
                ((n._duration = Math.ceil(10 * e._node.duration) / 10),
                n._sprite.__default[1] === 1 / 0 && (n._sprite.__default[1] = 1e3 * n._duration),
                n._ended(e)),
                e._node.removeEventListener('ended', e._endFn, !1);
            },
          };
          var d = {},
            s = function (e) {
              var n = e._src;
              if (d[n]) return (e._duration = d[n].duration), void _(e);
              if (/^data:[^;]+;base64,/.test(n)) {
                for (var t = atob(n.split(',')[1]), o = new Uint8Array(t.length), r = 0; r < t.length; ++r)
                  o[r] = t.charCodeAt(r);
                c(o.buffer, e);
              } else {
                var a = new XMLHttpRequest();
                a.open(e._xhr.method, n, !0),
                  (a.withCredentials = e._xhr.withCredentials),
                  (a.responseType = 'arraybuffer'),
                  e._xhr.headers &&
                    Object.keys(e._xhr.headers).forEach(function (n) {
                      a.setRequestHeader(n, e._xhr.headers[n]);
                    }),
                  (a.onload = function () {
                    var n = (a.status + '')[0];
                    '0' === n || '2' === n || '3' === n
                      ? c(a.response, e)
                      : e._emit('loaderror', null, 'Failed loading audio file with status: ' + a.status + '.');
                  }),
                  (a.onerror = function () {
                    e._webAudio && ((e._html5 = !0), (e._webAudio = !1), (e._sounds = []), delete d[n], e.load());
                  }),
                  l(a);
              }
            },
            l = function (e) {
              try {
                e.send();
              } catch (n) {
                e.onerror();
              }
            },
            c = function (e, n) {
              var t = function () {
                  n._emit('loaderror', null, 'Decoding audio data failed.');
                },
                o = function (e) {
                  e && n._sounds.length > 0 ? ((d[n._src] = e), _(n, e)) : t();
                };
              'undefined' !== typeof Promise && 1 === a.ctx.decodeAudioData.length
                ? a.ctx.decodeAudioData(e).then(o).catch(t)
                : a.ctx.decodeAudioData(e, o, t);
            },
            _ = function (e, n) {
              n && !e._duration && (e._duration = n.duration),
                0 === Object.keys(e._sprite).length && (e._sprite = { __default: [0, 1e3 * e._duration] }),
                'loaded' !== e._state && ((e._state = 'loaded'), e._emit('load'), e._loadQueue());
            },
            p = function () {
              if (a.usingWebAudio) {
                try {
                  'undefined' !== typeof AudioContext
                    ? (a.ctx = new AudioContext())
                    : 'undefined' !== typeof webkitAudioContext
                    ? (a.ctx = new webkitAudioContext())
                    : (a.usingWebAudio = !1);
                } catch (r) {
                  a.usingWebAudio = !1;
                }
                a.ctx || (a.usingWebAudio = !1);
                var e = /iP(hone|od|ad)/.test(a._navigator && a._navigator.platform),
                  n = a._navigator && a._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                  t = n ? parseInt(n[1], 10) : null;
                if (e && t && t < 9) {
                  var o = /safari/.test(a._navigator && a._navigator.userAgent.toLowerCase());
                  a._navigator && !o && (a.usingWebAudio = !1);
                }
                a.usingWebAudio &&
                  ((a.masterGain =
                    'undefined' === typeof a.ctx.createGain ? a.ctx.createGainNode() : a.ctx.createGain()),
                  a.masterGain.gain.setValueAtTime(a._muted ? 0 : a._volume, a.ctx.currentTime),
                  a.masterGain.connect(a.ctx.destination)),
                  a._setup();
              }
            };
          void 0 ===
            (o = function () {
              return { Howler: a, Howl: i };
            }.apply(n, [])) || (e.exports = o),
            (n.Howler = a),
            (n.Howl = i),
            'undefined' !== typeof t
              ? ((t.HowlerGlobal = r), (t.Howler = a), (t.Howl = i), (t.Sound = u))
              : 'undefined' !== typeof window &&
                ((window.HowlerGlobal = r), (window.Howler = a), (window.Howl = i), (window.Sound = u));
        })(),
          (function () {
            'use strict';
            var e;
            (HowlerGlobal.prototype._pos = [0, 0, 0]),
              (HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
              (HowlerGlobal.prototype.stereo = function (e) {
                var n = this;
                if (!n.ctx || !n.ctx.listener) return n;
                for (var t = n._howls.length - 1; t >= 0; t--) n._howls[t].stereo(e);
                return n;
              }),
              (HowlerGlobal.prototype.pos = function (e, n, t) {
                var o = this;
                return o.ctx && o.ctx.listener
                  ? ((n = 'number' !== typeof n ? o._pos[1] : n),
                    (t = 'number' !== typeof t ? o._pos[2] : t),
                    'number' !== typeof e
                      ? o._pos
                      : ((o._pos = [e, n, t]),
                        'undefined' !== typeof o.ctx.listener.positionX
                          ? (o.ctx.listener.positionX.setTargetAtTime(o._pos[0], Howler.ctx.currentTime, 0.1),
                            o.ctx.listener.positionY.setTargetAtTime(o._pos[1], Howler.ctx.currentTime, 0.1),
                            o.ctx.listener.positionZ.setTargetAtTime(o._pos[2], Howler.ctx.currentTime, 0.1))
                          : o.ctx.listener.setPosition(o._pos[0], o._pos[1], o._pos[2]),
                        o))
                  : o;
              }),
              (HowlerGlobal.prototype.orientation = function (e, n, t, o, r, a) {
                var i = this;
                if (!i.ctx || !i.ctx.listener) return i;
                var u = i._orientation;
                return (
                  (n = 'number' !== typeof n ? u[1] : n),
                  (t = 'number' !== typeof t ? u[2] : t),
                  (o = 'number' !== typeof o ? u[3] : o),
                  (r = 'number' !== typeof r ? u[4] : r),
                  (a = 'number' !== typeof a ? u[5] : a),
                  'number' !== typeof e
                    ? u
                    : ((i._orientation = [e, n, t, o, r, a]),
                      'undefined' !== typeof i.ctx.listener.forwardX
                        ? (i.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, 0.1),
                          i.ctx.listener.forwardY.setTargetAtTime(n, Howler.ctx.currentTime, 0.1),
                          i.ctx.listener.forwardZ.setTargetAtTime(t, Howler.ctx.currentTime, 0.1),
                          i.ctx.listener.upX.setTargetAtTime(o, Howler.ctx.currentTime, 0.1),
                          i.ctx.listener.upY.setTargetAtTime(r, Howler.ctx.currentTime, 0.1),
                          i.ctx.listener.upZ.setTargetAtTime(a, Howler.ctx.currentTime, 0.1))
                        : i.ctx.listener.setOrientation(e, n, t, o, r, a),
                      i)
                );
              }),
              (Howl.prototype.init =
                ((e = Howl.prototype.init),
                function (n) {
                  var t = this;
                  return (
                    (t._orientation = n.orientation || [1, 0, 0]),
                    (t._stereo = n.stereo || null),
                    (t._pos = n.pos || null),
                    (t._pannerAttr = {
                      coneInnerAngle: 'undefined' !== typeof n.coneInnerAngle ? n.coneInnerAngle : 360,
                      coneOuterAngle: 'undefined' !== typeof n.coneOuterAngle ? n.coneOuterAngle : 360,
                      coneOuterGain: 'undefined' !== typeof n.coneOuterGain ? n.coneOuterGain : 0,
                      distanceModel: 'undefined' !== typeof n.distanceModel ? n.distanceModel : 'inverse',
                      maxDistance: 'undefined' !== typeof n.maxDistance ? n.maxDistance : 1e4,
                      panningModel: 'undefined' !== typeof n.panningModel ? n.panningModel : 'HRTF',
                      refDistance: 'undefined' !== typeof n.refDistance ? n.refDistance : 1,
                      rolloffFactor: 'undefined' !== typeof n.rolloffFactor ? n.rolloffFactor : 1,
                    }),
                    (t._onstereo = n.onstereo ? [{ fn: n.onstereo }] : []),
                    (t._onpos = n.onpos ? [{ fn: n.onpos }] : []),
                    (t._onorientation = n.onorientation ? [{ fn: n.onorientation }] : []),
                    e.call(this, n)
                  );
                })),
              (Howl.prototype.stereo = function (e, t) {
                var o = this;
                if (!o._webAudio) return o;
                if ('loaded' !== o._state)
                  return (
                    o._queue.push({
                      event: 'stereo',
                      action: function () {
                        o.stereo(e, t);
                      },
                    }),
                    o
                  );
                var r = 'undefined' === typeof Howler.ctx.createStereoPanner ? 'spatial' : 'stereo';
                if ('undefined' === typeof t) {
                  if ('number' !== typeof e) return o._stereo;
                  (o._stereo = e), (o._pos = [e, 0, 0]);
                }
                for (var a = o._getSoundIds(t), i = 0; i < a.length; i++) {
                  var u = o._soundById(a[i]);
                  if (u) {
                    if ('number' !== typeof e) return u._stereo;
                    (u._stereo = e),
                      (u._pos = [e, 0, 0]),
                      u._node &&
                        ((u._pannerAttr.panningModel = 'equalpower'),
                        (u._panner && u._panner.pan) || n(u, r),
                        'spatial' === r
                          ? 'undefined' !== typeof u._panner.positionX
                            ? (u._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime),
                              u._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime),
                              u._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime))
                            : u._panner.setPosition(e, 0, 0)
                          : u._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)),
                      o._emit('stereo', u._id);
                  }
                }
                return o;
              }),
              (Howl.prototype.pos = function (e, t, o, r) {
                var a = this;
                if (!a._webAudio) return a;
                if ('loaded' !== a._state)
                  return (
                    a._queue.push({
                      event: 'pos',
                      action: function () {
                        a.pos(e, t, o, r);
                      },
                    }),
                    a
                  );
                if (
                  ((t = 'number' !== typeof t ? 0 : t),
                  (o = 'number' !== typeof o ? -0.5 : o),
                  'undefined' === typeof r)
                ) {
                  if ('number' !== typeof e) return a._pos;
                  a._pos = [e, t, o];
                }
                for (var i = a._getSoundIds(r), u = 0; u < i.length; u++) {
                  var d = a._soundById(i[u]);
                  if (d) {
                    if ('number' !== typeof e) return d._pos;
                    (d._pos = [e, t, o]),
                      d._node &&
                        ((d._panner && !d._panner.pan) || n(d, 'spatial'),
                        'undefined' !== typeof d._panner.positionX
                          ? (d._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime),
                            d._panner.positionY.setValueAtTime(t, Howler.ctx.currentTime),
                            d._panner.positionZ.setValueAtTime(o, Howler.ctx.currentTime))
                          : d._panner.setPosition(e, t, o)),
                      a._emit('pos', d._id);
                  }
                }
                return a;
              }),
              (Howl.prototype.orientation = function (e, t, o, r) {
                var a = this;
                if (!a._webAudio) return a;
                if ('loaded' !== a._state)
                  return (
                    a._queue.push({
                      event: 'orientation',
                      action: function () {
                        a.orientation(e, t, o, r);
                      },
                    }),
                    a
                  );
                if (
                  ((t = 'number' !== typeof t ? a._orientation[1] : t),
                  (o = 'number' !== typeof o ? a._orientation[2] : o),
                  'undefined' === typeof r)
                ) {
                  if ('number' !== typeof e) return a._orientation;
                  a._orientation = [e, t, o];
                }
                for (var i = a._getSoundIds(r), u = 0; u < i.length; u++) {
                  var d = a._soundById(i[u]);
                  if (d) {
                    if ('number' !== typeof e) return d._orientation;
                    (d._orientation = [e, t, o]),
                      d._node &&
                        (d._panner || (d._pos || (d._pos = a._pos || [0, 0, -0.5]), n(d, 'spatial')),
                        'undefined' !== typeof d._panner.orientationX
                          ? (d._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime),
                            d._panner.orientationY.setValueAtTime(t, Howler.ctx.currentTime),
                            d._panner.orientationZ.setValueAtTime(o, Howler.ctx.currentTime))
                          : d._panner.setOrientation(e, t, o)),
                      a._emit('orientation', d._id);
                  }
                }
                return a;
              }),
              (Howl.prototype.pannerAttr = function () {
                var e,
                  t,
                  o,
                  r = this,
                  a = arguments;
                if (!r._webAudio) return r;
                if (0 === a.length) return r._pannerAttr;
                if (1 === a.length) {
                  if ('object' !== typeof a[0])
                    return (o = r._soundById(parseInt(a[0], 10))) ? o._pannerAttr : r._pannerAttr;
                  (e = a[0]),
                    'undefined' === typeof t &&
                      (e.pannerAttr ||
                        (e.pannerAttr = {
                          coneInnerAngle: e.coneInnerAngle,
                          coneOuterAngle: e.coneOuterAngle,
                          coneOuterGain: e.coneOuterGain,
                          distanceModel: e.distanceModel,
                          maxDistance: e.maxDistance,
                          refDistance: e.refDistance,
                          rolloffFactor: e.rolloffFactor,
                          panningModel: e.panningModel,
                        }),
                      (r._pannerAttr = {
                        coneInnerAngle:
                          'undefined' !== typeof e.pannerAttr.coneInnerAngle
                            ? e.pannerAttr.coneInnerAngle
                            : r._coneInnerAngle,
                        coneOuterAngle:
                          'undefined' !== typeof e.pannerAttr.coneOuterAngle
                            ? e.pannerAttr.coneOuterAngle
                            : r._coneOuterAngle,
                        coneOuterGain:
                          'undefined' !== typeof e.pannerAttr.coneOuterGain
                            ? e.pannerAttr.coneOuterGain
                            : r._coneOuterGain,
                        distanceModel:
                          'undefined' !== typeof e.pannerAttr.distanceModel
                            ? e.pannerAttr.distanceModel
                            : r._distanceModel,
                        maxDistance:
                          'undefined' !== typeof e.pannerAttr.maxDistance ? e.pannerAttr.maxDistance : r._maxDistance,
                        refDistance:
                          'undefined' !== typeof e.pannerAttr.refDistance ? e.pannerAttr.refDistance : r._refDistance,
                        rolloffFactor:
                          'undefined' !== typeof e.pannerAttr.rolloffFactor
                            ? e.pannerAttr.rolloffFactor
                            : r._rolloffFactor,
                        panningModel:
                          'undefined' !== typeof e.pannerAttr.panningModel
                            ? e.pannerAttr.panningModel
                            : r._panningModel,
                      }));
                } else 2 === a.length && ((e = a[0]), (t = parseInt(a[1], 10)));
                for (var i = r._getSoundIds(t), u = 0; u < i.length; u++)
                  if ((o = r._soundById(i[u]))) {
                    var d = o._pannerAttr;
                    d = {
                      coneInnerAngle: 'undefined' !== typeof e.coneInnerAngle ? e.coneInnerAngle : d.coneInnerAngle,
                      coneOuterAngle: 'undefined' !== typeof e.coneOuterAngle ? e.coneOuterAngle : d.coneOuterAngle,
                      coneOuterGain: 'undefined' !== typeof e.coneOuterGain ? e.coneOuterGain : d.coneOuterGain,
                      distanceModel: 'undefined' !== typeof e.distanceModel ? e.distanceModel : d.distanceModel,
                      maxDistance: 'undefined' !== typeof e.maxDistance ? e.maxDistance : d.maxDistance,
                      refDistance: 'undefined' !== typeof e.refDistance ? e.refDistance : d.refDistance,
                      rolloffFactor: 'undefined' !== typeof e.rolloffFactor ? e.rolloffFactor : d.rolloffFactor,
                      panningModel: 'undefined' !== typeof e.panningModel ? e.panningModel : d.panningModel,
                    };
                    var s = o._panner;
                    s
                      ? ((s.coneInnerAngle = d.coneInnerAngle),
                        (s.coneOuterAngle = d.coneOuterAngle),
                        (s.coneOuterGain = d.coneOuterGain),
                        (s.distanceModel = d.distanceModel),
                        (s.maxDistance = d.maxDistance),
                        (s.refDistance = d.refDistance),
                        (s.rolloffFactor = d.rolloffFactor),
                        (s.panningModel = d.panningModel))
                      : (o._pos || (o._pos = r._pos || [0, 0, -0.5]), n(o, 'spatial'));
                  }
                return r;
              }),
              (Sound.prototype.init = (function (e) {
                return function () {
                  var n = this,
                    t = n._parent;
                  (n._orientation = t._orientation),
                    (n._stereo = t._stereo),
                    (n._pos = t._pos),
                    (n._pannerAttr = t._pannerAttr),
                    e.call(this),
                    n._stereo ? t.stereo(n._stereo) : n._pos && t.pos(n._pos[0], n._pos[1], n._pos[2], n._id);
                };
              })(Sound.prototype.init)),
              (Sound.prototype.reset = (function (e) {
                return function () {
                  var n = this,
                    t = n._parent;
                  return (
                    (n._orientation = t._orientation),
                    (n._stereo = t._stereo),
                    (n._pos = t._pos),
                    (n._pannerAttr = t._pannerAttr),
                    n._stereo
                      ? t.stereo(n._stereo)
                      : n._pos
                      ? t.pos(n._pos[0], n._pos[1], n._pos[2], n._id)
                      : n._panner && (n._panner.disconnect(0), (n._panner = void 0), t._refreshBuffer(n)),
                    e.call(this)
                  );
                };
              })(Sound.prototype.reset));
            var n = function (e, n) {
              'spatial' === (n = n || 'spatial')
                ? ((e._panner = Howler.ctx.createPanner()),
                  (e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle),
                  (e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle),
                  (e._panner.coneOuterGain = e._pannerAttr.coneOuterGain),
                  (e._panner.distanceModel = e._pannerAttr.distanceModel),
                  (e._panner.maxDistance = e._pannerAttr.maxDistance),
                  (e._panner.refDistance = e._pannerAttr.refDistance),
                  (e._panner.rolloffFactor = e._pannerAttr.rolloffFactor),
                  (e._panner.panningModel = e._pannerAttr.panningModel),
                  'undefined' !== typeof e._panner.positionX
                    ? (e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime),
                      e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime),
                      e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime))
                    : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]),
                  'undefined' !== typeof e._panner.orientationX
                    ? (e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime),
                      e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime),
                      e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime))
                    : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2]))
                : ((e._panner = Howler.ctx.createStereoPanner()),
                  e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)),
                e._panner.connect(e._node),
                e._paused || e._parent.pause(e._id, !0).play(e._id, !0);
            };
          })();
      }.call(this, t('3r9c')));
    },
  },
  [['CPH/', 0, 2, 4, 1, 3, 5, 6, 8]],
]);
