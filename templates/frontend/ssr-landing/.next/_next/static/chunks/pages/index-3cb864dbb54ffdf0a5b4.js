_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [18],
  {
    '/EDR': function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n('QeBL');
        },
      ]);
    },
    'HaE+': function (t, e, n) {
      'use strict';
      function i(t, e, n, i, r, o, a) {
        try {
          var c = t[o](a),
            l = c.value;
        } catch (u) {
          return void n(u);
        }
        c.done ? e(l) : Promise.resolve(l).then(i, r);
      }
      function r(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = t.apply(e, n);
            function c(t) {
              i(a, r, o, c, l, 'next', t);
            }
            function l(t) {
              i(a, r, o, c, l, 'throw', t);
            }
            c(void 0);
          });
        };
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    QeBL: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, '__N_SSP', function () {
          return ot;
        }),
        n.d(e, 'default', function () {
          return at;
        });
      var i = n('rePB'),
        r = n('q1tI'),
        o = n.n(r),
        a = n('vOnD'),
        c = n('ufqH'),
        l = n('9ixD'),
        u = n('Vt1p'),
        s = n('voqa'),
        d = n('zoQI'),
        h = n('6Hpx'),
        p = n('o0o1'),
        f = n.n(p),
        m = n('HaE+'),
        g = n('wx14'),
        b = o.a.createElement;
      function w(t) {
        return b(
          'svg',
          Object(g.a)({ width: '24', height: '16', viewBox: '0 0 24 16' }, t),
          b('path', {
            d: 'M23 0H5C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V13C4 13.2652 3.89464 13.5196 3.70711 13.7071C3.51957 13.8946 3.26522 14 3 14C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5C2 4.73478 1.89464 4.48043 1.70711 4.29289C1.51957 4.10536 1.26522 4 1 4C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5L0 13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H21C21.7956 16 22.5587 15.6839 23.1213 15.1213C23.6839 14.5587 24 13.7956 24 13V1C24 0.734784 23.8946 0.48043 23.7071 0.292893C23.5196 0.105357 23.2652 0 23 0ZM6 4.699L10.062 6.956L6 9.276V4.699ZM22 13C22 13.2652 21.8946 13.5196 21.7071 13.7071C21.5196 13.8946 21.2652 14 21 14H5.816C5.928 13.686 6 13.353 6 13V11.58L12.105 8.092L13.514 8.874L13.521 8.861C13.666 8.941 13.823 9 14 9C14.177 9 14.334 8.941 14.479 8.861L14.486 8.874L15.895 8.092L22 11.58V13ZM22 9.276L17.938 6.956L22 4.699V9.276ZM22 2.411L14 6.856L6 2.411V2H22V2.411Z',
            fill: t.fill,
          })
        );
      }
      var v = n('hRDA'),
        x = o.a.createElement;
      function y(t) {
        var e = t.children,
          n = t.className,
          i = t.onClose,
          o = t.closeOnClickOutside,
          a = void 0 === o || o,
          c = Object(r.useRef)();
        return (
          Object(r.useEffect)(
            function () {
              if (a) {
                var t = function (t) {
                  c.current && !c.current.contains(t.target) && i();
                };
                return (
                  document.addEventListener('mousedown', t),
                  function () {
                    document.removeEventListener('mousedown', t);
                  }
                );
              }
            },
            [c]
          ),
          x(
            j,
            null,
            x(
              _,
              null,
              x(
                O,
                {
                  onClick: function () {
                    return i();
                  },
                },
                x(v.a, null)
              ),
              x(k, { ref: c, className: n }, e)
            )
          )
        );
      }
      var k = a.e.div.withConfig({ displayName: 'modal__StyledModal', componentId: 'f3j5aq-0' })(
          ['background-color:', ';padding:20px;width:100%;border-radius:5px;min-height:40vh;'],
          function (t) {
            return t.theme.colors.inputsBackground;
          }
        ),
        j = a.e.div.withConfig({ displayName: 'modal__Wrapper', componentId: 'f3j5aq-1' })([
          'position:fixed;top:0px;width:100vw;height:100vh;right:0px;overflow:hidden;background:#191919c9;z-index:999;',
        ]),
        O = a.e.button.withConfig({ displayName: 'modal__CloseButton', componentId: 'f3j5aq-2' })(
          ['width:36px;height:36px;background-color:', ';border-radius:50%;align-self:flex-end;margin-bottom:20px;'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        _ = a.e.div.withConfig({ displayName: 'modal__ModalContent', componentId: 'f3j5aq-3' })([
          'width:100%;display:flex;justify-content:center;flex-direction:column;align-items:center;padding:100px 20px 20px 20px;',
        ]),
        C = o.a.createElement;
      function z(t) {
        var e = t.artistId,
          n = t.className,
          i = Object(s.a)(),
          c = Object(r.useState)(''),
          l = c[0],
          u = c[1],
          h = Object(r.useState)(!1),
          p = h[0],
          g = h[1],
          b = Object(r.useState)(!1),
          v = b[0],
          x = b[1],
          k = Object(r.useState)(!1),
          j = k[0],
          O = k[1],
          _ = Object(r.useState)(!1),
          z = _[0],
          M = _[1],
          H = Object(a.f)(),
          V = (function () {
            var t = Object(m.a)(
              f.a.mark(function t() {
                var n, i;
                return f.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        /^\S+@\S+\.\S{2,}$/.test(l)
                          ? (x(!0),
                            (n = ''.concat('https://api.staging.trac.co', '/leads/artist')),
                            (i = { artistId: e, email: l }),
                            fetch(n, { method: 'POST', body: JSON.stringify(i) })
                              .then(function () {
                                O(!0), x(!1), M(!1);
                              })
                              .catch(function () {
                                x(!1), M(!0);
                              }))
                          : M(!0);
                      case 1:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
          F = C(P, null, "Thanks! We'll be in touch"),
          T = C(B, null, 'There was an error. Please try again');
        return i
          ? C(
              o.a.Fragment,
              null,
              C(
                N,
                null,
                C(
                  'button',
                  {
                    onClick: function () {
                      return g(!0);
                    },
                  },
                  C(w, { fill: H.colors.primary })
                )
              ),
              p &&
                C(
                  y,
                  {
                    onClose: function () {
                      return g(!1);
                    },
                  },
                  C(
                    q,
                    null,
                    C('h2', null, 'Subscribe for newsletter'),
                    z && T,
                    j
                      ? F
                      : C(
                          o.a.Fragment,
                          null,
                          C(D, {
                            type: 'text',
                            disabled: v,
                            onChange: function (t) {
                              return u(t.currentTarget.value);
                            },
                            name: 'newsletter',
                            placeholder: 'Email Address...',
                          }),
                          C(
                            d.a,
                            {
                              disabled: v,
                              fullWidth: !0,
                              className: 'mt-20',
                              onClick: function () {
                                return V();
                              },
                            },
                            'Subscribe'
                          )
                        )
                  )
                )
            )
          : C(
              o.a.Fragment,
              null,
              z && T,
              C(
                I,
                { className: n },
                j
                  ? F
                  : C(
                      o.a.Fragment,
                      null,
                      C(S, { htmlFor: 'newsletter' }, 'Subscribe for newsletter'),
                      C(L, {
                        type: 'text',
                        id: 'newsletter',
                        onChange: function (t) {
                          return u(t.currentTarget.value);
                        },
                        name: 'newsletter',
                        placeholder: 'Email Address...',
                        disabled: v,
                      }),
                      C(
                        E,
                        {
                          disabled: v,
                          onClick: function () {
                            return V();
                          },
                        },
                        'Subscribe'
                      )
                    )
              )
            );
      }
      var N = a.e.div.withConfig({ displayName: 'newsletter__NewsletterMobile', componentId: 'qzsd7i-0' })([
          'position:absolute;top:0px;right:0px;> button{padding:24px;background-color:transparent;}',
        ]),
        I = a.e.div.withConfig({ displayName: 'newsletter__NewsletterContainer', componentId: 'qzsd7i-1' })([
          'position:relative;width:100%;',
        ]),
        S = a.e.label.withConfig({ displayName: 'newsletter__Label', componentId: 'qzsd7i-2' })(
          ['position:absolute;font-size:16px;line-height:24px;color:', ';padding:24px 0px 0px 24px;'],
          function (t) {
            return t.theme.colors.secondary;
          }
        ),
        E = a.e.button.withConfig({ displayName: 'newsletter__Subscribe', componentId: 'qzsd7i-3' })(
          [
            'position:absolute;right:0;color:',
            ';bottom:0;padding:24px;background:transparent;font-weight:bold;font-size:16px;line-height:24px;cursor:pointer;transition:color ',
            ';&:hover{color:',
            ';}',
            '',
          ],
          function (t) {
            return t.theme.colors.accent;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            return t.theme.colors.accentHover;
          },
          function (t) {
            return t.disabled && Object(a.d)(['opacity:0.5;cursor:not-allowed;']);
          }
        ),
        L = a.e.input.withConfig({ displayName: 'newsletter__NewsletterInput', componentId: 'qzsd7i-4' })(
          [
            'height:100px;border-radius:5px;background-color:',
            ';font-size:16px;line-height:24px;color:',
            ';font-family:',
            ';width:100%;padding:52px 120px 24px 24px;@media (max-width:',
            '){height:84px;}::placeholder{font-size:16px;line-height:24px;color:',
            ';}',
            '',
          ],
          function (t) {
            return t.theme.colors.inputsBackground;
          },
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            return t.theme.fontFamily;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          },
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            return t.disabled && Object(a.d)(['opacity:0.5;cursor:not-allowed;']);
          }
        ),
        q = a.e.div.withConfig({ displayName: 'newsletter__ModalContent', componentId: 'qzsd7i-5' })(
          ['padding-bottom:34px;text-align:center;> h2{font-weight:800;font-size:32px;color:', ';text-align:center;}'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        D = a.e.input.withConfig({ displayName: 'newsletter__MobileInput', componentId: 'qzsd7i-6' })(
          [
            'height:70px;border-radius:5px;background-color:',
            ';font-family:',
            ';width:100%;font-size:16px;line-height:24px;color:',
            ';text-align:center;',
            '::placeholder{font-size:16px;line-height:24px;color:',
            ';}',
          ],
          function (t) {
            return t.theme.colors.background;
          },
          function (t) {
            return t.theme.fontFamily;
          },
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            return t.disabled && Object(a.d)(['opacity:0.5;cursor:not-allowed;']);
          },
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        P = a.e.span.withConfig({ displayName: 'newsletter__StyledSuccessMessage', componentId: 'qzsd7i-7' })(
          ['color:', ';font-weight:bold;height:100px;display:flex;flex-direction:column;justify-content:center;'],
          function (t) {
            return t.theme.colors.success;
          }
        ),
        B = a.e.p.withConfig({ displayName: 'newsletter__StyledError', componentId: 'qzsd7i-8' })(
          ['color:', ';font-weight:bold;margin-bottom:5px;margin-top:0px;font-size:12px;text-align:left;'],
          function (t) {
            return t.theme.colors.error;
          }
        ),
        M = n('FBxL'),
        H = n('5wV8'),
        V = o.a.createElement;
      function F(t) {
        var e = t.avatar,
          n = t.className,
          i = t.title,
          r = t.description;
        return V(
          T,
          { className: n },
          V(H.a, { variant: 'rounded', alt: ''.concat(i, '-img'), src: e }),
          V('h1', null, i),
          r && V('span', null, r)
        );
      }
      var T = a.e.div.withConfig({ displayName: 'artist-info__Artist', componentId: 'sc-18jmy9p-0' })(
          [
            'display:flex;justify-content:center;align-items:center;flex-direction:column;margin-bottom:40px;text-align:center;width:100%;> h1{font-weight:800;font-size:64px;line-height:100%;margin-bottom:24px;text-align:center;color:',
            ';width:100%;}> span{font-size:16px;color:',
            ';width:100%;}@media (max-width:',
            '){> h1{font-size:32px;}> span{font-size:14px;}}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            return t.theme.colors.secondary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        R = o.a.createElement;
      function A(t) {
        var e = t.children,
          n = t.href;
        return R(W, { href: n, target: '_blank' }, e);
      }
      var W = a.e.a.withConfig({ displayName: 'social-link__Social', componentId: 'sc-15ne3m8-0' })(
          [
            'width:',
            ';max-width:',
            ';height:',
            ';max-height:',
            ';background-color:',
            ';display:flex;justify-content:center;align-items:center;border-radius:50%;transition:background-color ',
            ';&:hover{background-color:',
            ';}> svg{fill:white;height:calc(',
            ' / 2);}',
          ],
          function (t) {
            return t.theme.sizes.socialIconSize;
          },
          function (t) {
            return t.theme.sizes.socialIconSize;
          },
          function (t) {
            return t.theme.sizes.socialIconSize;
          },
          function (t) {
            return t.theme.sizes.socialIconSize;
          },
          function (t) {
            return t.theme.colors.inputsBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            return t.theme.colors.inputsBackgroundHover;
          },
          function (t) {
            return t.theme.sizes.socialIconSize;
          }
        ),
        Z = n('1LmX'),
        J = n('42Rd'),
        Q = n('F6jV'),
        X = o.a.createElement;
      function G(t) {
        var e = t.data,
          n = t.className,
          i = t.artistName,
          r = t.variant,
          o = void 0 === r ? 'row' : r;
        return e.title && e.url
          ? X(
              U,
              {
                className: n || '',
                variant: o,
                href: e.url,
                onClick: function () {
                  analytics.track('Tracpage Link Click', {
                    artist_id: i,
                    category: 'traclink' === e.type ? 'Release' : 'Url',
                    name: e.title,
                  });
                },
              },
              X(H.a, { src: e.avatar, alt: e.title }),
              X(
                $,
                { variant: o, className: ''.concat(e.highlight ? 'highlight' : null) },
                X('h3', null, e.title),
                X('p', null, e.subtitle)
              ),
              'row' === o && X(K, { className: ''.concat(e.highlight ? 'highlight' : null) }, X(Q.a, null))
            )
          : null;
      }
      var U = a.e.a.withConfig({ displayName: 'song-link__StyledSongLink', componentId: 'sc-1wye2kl-0' })(
          [
            'display:flex;padding:20px;width:100%;align-items:center;background-color:',
            ';border-radius:5px;height:100px;&.highlight{background-color:',
            ';}@media (max-width:',
            '){height:84px;}',
            ' ',
            '',
          ],
          function (t) {
            return t.theme.colors.inputsBackground;
          },
          function (t) {
            return t.theme.colors.highLightBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          },
          function (t) {
            return (
              'column-left' === t.variant &&
              Object(a.d)([
                'width:calc(50% - 2px);flex-direction:column;align-items:flex-start;height:170px;margin-right:2px;',
              ])
            );
          },
          function (t) {
            return (
              'column-right' === t.variant &&
              Object(a.d)([
                'width:calc(50% - 2px);flex-direction:column;align-items:flex-start;height:170px;margin-left:2px;',
              ])
            );
          }
        ),
        $ = a.e.div.withConfig({ displayName: 'song-link__Info', componentId: 'sc-1wye2kl-1' })(
          [
            'flex-grow:1;padding:0px 20px;width:',
            ';> h3{margin:0px;color:',
            ';font-size:16px;font-weight:700;line-height:24px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}&.highlight > h3{color:',
            ';}.highlight,> p{color:',
            ';}> p{color:',
            ';margin:0px;font-size:14px;line-height:20px;}@media (max-width:',
            '){width:',
            ';> h3{white-space:nowrap;text-overflow:ellipsis;}> p{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}}',
            '',
          ],
          function (t) {
            var e = t.theme;
            return 'calc(100% - '.concat(e.sizes.coverSize, ' - ').concat(e.sizes.commonIconSize, ')');
          },
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            return t.theme.colors.highLightPrimary;
          },
          function (t) {
            return t.theme.colors.highLightSecondary;
          },
          function (t) {
            return t.theme.colors.secondary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          },
          function (t) {
            var e = t.theme;
            return 'calc(100% - '.concat(e.sizes.coverSizeMobile, ' - ').concat(e.sizes.commonIconSize, ')');
          },
          function (t) {
            var e = t.variant;
            return ('column-right' === e || 'column-left' === e) && Object(a.d)(['padding:20px 0px 0px 0px;']);
          }
        ),
        K = a.e.div.withConfig({ displayName: 'song-link__Play', componentId: 'sc-1wye2kl-2' })(
          [
            '&.highlight{background-color:',
            ';}background-color:',
            ';display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:50%;cursor:pointer;opacity:1;padding:0;overflow:hidden;transition:opacity ',
            ';&:hover{opacity:0.75;> svg{fill:',
            ';}}&.highlight > svg{fill:',
            ';}> svg{margin-left:4px;fill:',
            ';transition:fill ',
            ';}',
          ],
          function (t) {
            return t.theme.colors.highLightPlay;
          },
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
            return t.theme.colors.background;
          },
          function (t) {
            return t.theme.colors.accent;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          }
        ),
        Y = n('jtTr'),
        tt = n('wd/R'),
        et = n.n(tt),
        nt = o.a.createElement;
      function it(t, e) {
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
      function rt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? it(Object(n), !0).forEach(function (e) {
                Object(i.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : it(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var ot = !0;
      function at(t) {
        var e = Object(s.a)(),
          n = Object(Y.a)(t.siteData).pageData;
        Object(r.useEffect)(function () {
          window.analytics &&
            window.analytics.track('Tracpage Viewed', {
              artist_id: null === n || void 0 === n ? void 0 : n.id,
              name: null === n || void 0 === n ? void 0 : n.title,
              releases: null === n || void 0 === n ? void 0 : n.links.length,
              social_links:
                null === n || void 0 === n
                  ? void 0
                  : n.data.social.map(function (t) {
                      return t.provider;
                    }),
            });
        });
        var i,
          a = function (t, n) {
            if (e) return 'row';
            var i = n.filter(function (t) {
                return 'embed' !== t.type;
              }),
              r =
                i.findIndex(function (e) {
                  return e.order === t.order;
                }) + 1;
            return i.length < 5 ? 'row' : 5 === r ? 'column-right' : 4 === r ? 'column-left' : 'row';
          };
        return n && n.id
          ? nt(
              o.a.Fragment,
              null,
              nt(l.a, {
                title: n.title,
                description: n.description || n.data.bio || n.title,
                openGraph: {
                  title: n.title,
                  description: n.description || n.data.bio || n.title,
                  url: 'https://'.concat(n.subdomain, '.').concat('staging.trac.co', '/'),
                  images: [{ url: n.avatar }],
                  type: 'website',
                },
              }),
              nt(
                J.a,
                { theme: n ? n.theme : void 0, removeBranding: null === n || void 0 === n ? void 0 : n.removeBranding },
                nt(
                  h.a,
                  null,
                  nt(F, {
                    avatar: (null === n || void 0 === n ? void 0 : n.avatar) || '',
                    title: (null === n || void 0 === n ? void 0 : n.title) || '',
                    description: null === n || void 0 === n ? void 0 : n.data.bio,
                  }),
                  nt(
                    lt,
                    null,
                    nt(
                      ut,
                      { width: ((i = n.data.social.length), 48 * i + 20 * i), length: n.data.social.length },
                      n.data.social
                        .filter(function (t) {
                          return t.url && 'NEW' !== t.url;
                        })
                        .map(function (t, e) {
                          return t.url && nt(A, { href: t.url, key: e }, Object(u.a)(t.provider));
                        })
                    )
                  ),
                  t.merchData.length
                    ? nt(
                        d.a,
                        {
                          fullWidth: !0,
                          onClick: function () {
                            return window.location.assign('/merch');
                          },
                        },
                        'Shop Merch'
                      )
                    : null,
                  nt(z, { className: 'mt-5', artistId: null === n || void 0 === n ? void 0 : n.id }),
                  (function () {
                    var t,
                      e = [],
                      i = [];
                    return (
                      null === n ||
                        void 0 === n ||
                        n.links
                          .sort(function (t, e) {
                            return t.order - e.order;
                          })
                          .forEach(function (t) {
                            5 ===
                              (function (t) {
                                var e = 0;
                                return (
                                  t.forEach(function (t) {
                                    'embed' !== t.type && (e += 1);
                                  }),
                                  e
                                );
                              })(i) && (e.push(i), (i = [])),
                              i.push(rt(rt({}, t), {}, { order: i.length }));
                          }),
                      (null === (t = i) || void 0 === t ? void 0 : t.length) > 0 && e.push(i),
                      e
                    );
                  })().map(function (t) {
                    return t.map(function (e, i) {
                      var r, o, c, l, u, s;
                      return !1 === e.show
                        ? null
                        : ((u = null !== (r = e.start) && void 0 !== r ? r : ''),
                          (s = null !== (o = e.end) && void 0 !== o ? o : ''),
                          '' === u ||
                          '' === s ||
                          (et()(new Date()).isAfter(new Date(u)) && et()(new Date()).isBefore(new Date(s)))
                            ? 'embed' === e.type
                              ? nt(Z.a, {
                                  className: 'mt-5',
                                  data: {
                                    title: e.title,
                                    url: null === (c = e.embedData) || void 0 === c ? void 0 : c.url,
                                    id: (null === (l = e.embedData) || void 0 === l ? void 0 : l.id) || '',
                                    type: e.type,
                                  },
                                  artistName: n.title,
                                  key: i,
                                })
                              : 'header' === e.type
                              ? nt(ct, null, nt('span', null, e.title))
                              : 'traclink' === e.type
                              ? nt(G, {
                                  data: e,
                                  key: i,
                                  className: 'mt-5 '.concat(e.highlight ? 'highlight' : null),
                                  variant: a(e, t),
                                  artistName: n.title,
                                })
                              : nt(M.a, {
                                  data: e,
                                  key: i,
                                  className: 'mt-5',
                                  variant: a(e, t),
                                  releaseId: n.id,
                                  artistId: n.ownerId,
                                })
                            : null);
                    });
                  })
                )
              )
            )
          : null;
      }
      var ct = a.e.div.withConfig({ displayName: 'pages__HeaderContainer', componentId: 'fuh4kw-0' })(
          ['margin-bottom:10px;margin-top:25px;span{font-size:24px;color:', ';font-weight:800;}'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        lt = a.e.div.withConfig({ displayName: 'pages__SocialLinks', componentId: 'fuh4kw-1' })(
          [
            "width:100%;margin-bottom:40px;position:relative;overflow:hidden;&:before,&:after{content:'';position:absolute;top:0;height:",
            ';width:64px;background:transparent;overflow-x:visible;pointer-events:none;z-index:2;}&:before{left:-24px;background:-moz-linear-gradient( left,',
            ' 0%,',
            ' 100% );background:-webkit-linear-gradient( left,',
            ' 0%,',
            ' 100% );background:linear-gradient( to right,',
            ' 0%,',
            ' 100% );}&:after{right:-24px;background:-moz-linear-gradient( left,',
            ' 0%,',
            ' 100% );background:-webkit-linear-gradient( left,',
            ' 0%,',
            ' 100% );background:linear-gradient( to right,',
            ' 0%,',
            ' 100% );}',
          ],
          function (t) {
            return t.theme.sizes.socialIconSize;
          },
          function (t) {
            var e = t.theme;
            return Object(c.a)(e.colors.background, 1);
          },
          function (t) {
            var e = t.theme;
            return Object(c.a)(e.colors.background, 0);
          },
          function (t) {
            var e = t.theme;
            return Object(c.a)(e.colors.background, 1);
          },
          function (t) {
            var e = t.theme;
            return Object(c.a)(e.colors.background, 0);
          },
          function (t) {
            var e = t.theme;
            return Object(c.a)(e.colors.background, 1);
          },
          function (t) {
            var e = t.theme;
            return Object(c.a)(e.colors.background, 0);
          },
          function (t) {
            var e = t.theme;
            return Object(c.a)(e.colors.background, 0);
          },
          function (t) {
            var e = t.theme;
            return Object(c.a)(e.colors.background, 1);
          },
          function (t) {
            var e = t.theme;
            return Object(c.a)(e.colors.background, 0);
          },
          function (t) {
            var e = t.theme;
            return Object(c.a)(e.colors.background, 1);
          },
          function (t) {
            var e = t.theme;
            return Object(c.a)(e.colors.background, 0);
          },
          function (t) {
            var e = t.theme;
            return Object(c.a)(e.colors.background, 1);
          }
        ),
        ut = a.e.div.withConfig({ displayName: 'pages__SocialLinksContent', componentId: 'fuh4kw-2' })(
          [
            'width:100%;display:flex;',
            ' @media (max-width:',
            '){justify-content:space-between;}> a{flex:1 0 auto;}> a:not(:last-child){margin-right:24px;}> a:first-child,> a:last-child{z-index:999;}',
          ],
          function (t) {
            return t.length >= 8
              ? Object(a.d)([
                  'justify-content:flex-start;overflow:scroll;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}',
                ])
              : Object(a.d)(['justify-content:center;']);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        );
    },
    hRDA: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var i = n('wx14'),
        r = n('q1tI'),
        o = n.n(r).a.createElement;
      function a(t) {
        return o(
          'svg',
          Object(i.a)({ width: '12', height: '12', viewBox: '0 0 12 12' }, t),
          o('rect', {
            x: '10.9497',
            y: '-0.36377',
            width: '2',
            height: '16',
            rx: '1',
            transform: 'rotate(45 10.9497 -0.36377)',
            fill: t.fill,
          }),
          o('rect', {
            x: '1.05029',
            y: '-0.36377',
            width: '16',
            height: '2',
            rx: '1',
            transform: 'rotate(45 1.05029 -0.36377)',
            fill: t.fill,
          })
        );
      }
    },
    voqa: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var i = n('q1tI'),
        r = n('MllO');
      function o() {
        var t = Object(i.useState)({ width: void 0, height: void 0 }),
          e = t[0],
          n = t[1];
        return (
          Object(i.useEffect)(function () {
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
          !!e.width && e.width <= r.a.laptopS
        );
      }
    },
  },
  [['/EDR', 0, 2, 11, 1, 3, 6, 7, 8, 9]],
]);
