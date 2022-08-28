(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8874: function (t, e, n) {
      'use strict';
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var r = n(2809),
        i = n(5893);
      function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(n), !0).forEach(function (e) {
                (0, r.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      function a(t) {
        return (0, i.jsxs)(
          'svg',
          c(
            c({ width: '12', height: '12', viewBox: '0 0 12 12' }, t),
            {},
            {
              children: [
                (0, i.jsx)('rect', {
                  x: '10.9497',
                  y: '-0.36377',
                  width: '2',
                  height: '16',
                  rx: '1',
                  transform: 'rotate(45 10.9497 -0.36377)',
                  fill: t.fill,
                }),
                (0, i.jsx)('rect', {
                  x: '1.05029',
                  y: '-0.36377',
                  width: '16',
                  height: '2',
                  rx: '1',
                  transform: 'rotate(45 1.05029 -0.36377)',
                  fill: t.fill,
                }),
              ],
            }
          )
        );
      }
    },
    3904: function (t, e, n) {
      'use strict';
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var r = n(7294),
        i = n(2400);
      function o() {
        var t = (0, r.useState)({ width: void 0, height: void 0 }),
          e = t[0],
          n = t[1];
        return (
          (0, r.useEffect)(function () {
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
          !!e.width && e.width <= i.Z.laptopS
        );
      }
    },
    8780: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, {
          __N_SSP: function () {
            return Y;
          },
          default: function () {
            return tt;
          },
        });
      var r = n(2809),
        i = n(186),
        o = n(6502),
        c = n(2962),
        a = n(3374),
        l = n(3904),
        s = n(5578),
        u = n(2872),
        d = n(266),
        h = n(809),
        p = n.n(h),
        f = n(5893);
      function m(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? m(Object(n), !0).forEach(function (e) {
                (0, r.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      function x(t) {
        return (0, f.jsx)(
          'svg',
          g(
            g({ width: '24', height: '16', viewBox: '0 0 24 16' }, t),
            {},
            {
              children: (0, f.jsx)('path', {
                d: 'M23 0H5C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V13C4 13.2652 3.89464 13.5196 3.70711 13.7071C3.51957 13.8946 3.26522 14 3 14C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5C2 4.73478 1.89464 4.48043 1.70711 4.29289C1.51957 4.10536 1.26522 4 1 4C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5L0 13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H21C21.7956 16 22.5587 15.6839 23.1213 15.1213C23.6839 14.5587 24 13.7956 24 13V1C24 0.734784 23.8946 0.48043 23.7071 0.292893C23.5196 0.105357 23.2652 0 23 0ZM6 4.699L10.062 6.956L6 9.276V4.699ZM22 13C22 13.2652 21.8946 13.5196 21.7071 13.7071C21.5196 13.8946 21.2652 14 21 14H5.816C5.928 13.686 6 13.353 6 13V11.58L12.105 8.092L13.514 8.874L13.521 8.861C13.666 8.941 13.823 9 14 9C14.177 9 14.334 8.941 14.479 8.861L14.486 8.874L15.895 8.092L22 11.58V13ZM22 9.276L17.938 6.956L22 4.699V9.276ZM22 2.411L14 6.856L6 2.411V2H22V2.411Z',
                fill: t.fill,
              }),
            }
          )
        );
      }
      var v = n(8874),
        w = n(7294);
      function b(t) {
        var e = t.children,
          n = t.className,
          r = t.onClose,
          i = t.closeOnClickOutside,
          o = void 0 === i || i,
          c = (0, w.useRef)();
        return (
          (0, w.useEffect)(
            function () {
              if (o) {
                var t = function (t) {
                  c.current && !c.current.contains(t.target) && r();
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
          (0, f.jsx)(j, {
            children: (0, f.jsxs)(C, {
              children: [
                (0, f.jsx)(k, {
                  onClick: function () {
                    return r();
                  },
                  children: (0, f.jsx)(v.Z, {}),
                }),
                (0, f.jsx)(y, { ref: c, className: n, children: e }),
              ],
            }),
          })
        );
      }
      var y = i.ZP.div.withConfig({ displayName: 'modal__StyledModal', componentId: 'f3j5aq-0' })(
          ['background-color:', ';padding:20px;width:100%;border-radius:5px;min-height:40vh;'],
          function (t) {
            return t.theme.colors.inputsBackground;
          }
        ),
        j = i.ZP.div.withConfig({ displayName: 'modal__Wrapper', componentId: 'f3j5aq-1' })([
          'position:fixed;top:0px;width:100vw;height:100vh;right:0px;overflow:hidden;background:#191919c9;z-index:999;',
        ]),
        k = i.ZP.button.withConfig({ displayName: 'modal__CloseButton', componentId: 'f3j5aq-2' })(
          ['width:36px;height:36px;background-color:', ';border-radius:50%;align-self:flex-end;margin-bottom:20px;'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        C = i.ZP.div.withConfig({ displayName: 'modal__ModalContent', componentId: 'f3j5aq-3' })([
          'width:100%;display:flex;justify-content:center;flex-direction:column;align-items:center;padding:100px 20px 20px 20px;',
        ]);
      function _(t) {
        var e = t.artistId,
          n = t.className,
          r = (0, l.Z)(),
          o = (0, w.useState)(''),
          c = o[0],
          a = o[1],
          u = (0, w.useState)(!1),
          h = u[0],
          m = u[1],
          g = (0, w.useState)(!1),
          v = g[0],
          y = g[1],
          j = (0, w.useState)(!1),
          k = j[0],
          C = j[1],
          _ = (0, w.useState)(!1),
          D = _[0],
          M = _[1],
          q = (0, i.Fg)(),
          B = (function () {
            var t = (0, d.Z)(
              p().mark(function t() {
                var n, r;
                return p().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        /^\S+@\S+\.\S{2,}$/.test(c)
                          ? (y(!0),
                            (n = ''.concat('https://api.development.trac.co', '/leads/artist')),
                            (r = { artistId: e, email: c }),
                            fetch(n, { method: 'POST', body: JSON.stringify(r) })
                              .then(function () {
                                C(!0), y(!1), M(!1);
                              })
                              .catch(function () {
                                y(!1), M(!0);
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
          V = (0, f.jsx)(L, { children: "Thanks! We'll be in touch" }),
          F = (0, f.jsx)(E, { children: 'There was an error. Please try again' });
        return r
          ? (0, f.jsxs)(f.Fragment, {
              children: [
                (0, f.jsx)(O, {
                  children: (0, f.jsx)('button', {
                    onClick: function () {
                      return m(!0);
                    },
                    children: (0, f.jsx)(x, { fill: q.colors.primary }),
                  }),
                }),
                h &&
                  (0, f.jsx)(b, {
                    onClose: function () {
                      return m(!1);
                    },
                    children: (0, f.jsxs)(S, {
                      children: [
                        (0, f.jsx)('h2', { children: 'Subscribe for newsletter' }),
                        D && F,
                        k
                          ? V
                          : (0, f.jsxs)(f.Fragment, {
                              children: [
                                (0, f.jsx)(I, {
                                  type: 'text',
                                  disabled: v,
                                  onChange: function (t) {
                                    return a(t.currentTarget.value);
                                  },
                                  name: 'newsletter',
                                  placeholder: 'Email Address...',
                                }),
                                (0, f.jsx)(s.Z, {
                                  disabled: v,
                                  fullWidth: !0,
                                  className: 'mt-20',
                                  onClick: function () {
                                    return B();
                                  },
                                  children: 'Subscribe',
                                }),
                              ],
                            }),
                      ],
                    }),
                  }),
              ],
            })
          : (0, f.jsxs)(f.Fragment, {
              children: [
                D && F,
                (0, f.jsx)(P, {
                  className: n,
                  children: k
                    ? V
                    : (0, f.jsxs)(f.Fragment, {
                        children: [
                          (0, f.jsx)(z, { htmlFor: 'newsletter', children: 'Subscribe for newsletter' }),
                          (0, f.jsx)(Z, {
                            type: 'text',
                            id: 'newsletter',
                            onChange: function (t) {
                              return a(t.currentTarget.value);
                            },
                            name: 'newsletter',
                            placeholder: 'Email Address...',
                            disabled: v,
                          }),
                          (0, f.jsx)(N, {
                            disabled: v,
                            onClick: function () {
                              return B();
                            },
                            children: 'Subscribe',
                          }),
                        ],
                      }),
                }),
              ],
            });
      }
      var O = i.ZP.div.withConfig({ displayName: 'newsletter__NewsletterMobile', componentId: 'qzsd7i-0' })([
          'position:absolute;top:0px;right:0px;> button{padding:24px;background-color:transparent;}',
        ]),
        P = i.ZP.div.withConfig({ displayName: 'newsletter__NewsletterContainer', componentId: 'qzsd7i-1' })([
          'position:relative;width:100%;',
        ]),
        z = i.ZP.label.withConfig({ displayName: 'newsletter__Label', componentId: 'qzsd7i-2' })(
          ['position:absolute;font-size:16px;line-height:24px;color:', ';padding:24px 0px 0px 24px;'],
          function (t) {
            return t.theme.colors.secondary;
          }
        ),
        N = i.ZP.button.withConfig({ displayName: 'newsletter__Subscribe', componentId: 'qzsd7i-3' })(
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
            return t.disabled && (0, i.iv)(['opacity:0.5;cursor:not-allowed;']);
          }
        ),
        Z = i.ZP.input.withConfig({ displayName: 'newsletter__NewsletterInput', componentId: 'qzsd7i-4' })(
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
            return t.disabled && (0, i.iv)(['opacity:0.5;cursor:not-allowed;']);
          }
        ),
        S = i.ZP.div.withConfig({ displayName: 'newsletter__ModalContent', componentId: 'qzsd7i-5' })(
          ['padding-bottom:34px;text-align:center;> h2{font-weight:800;font-size:32px;color:', ';text-align:center;}'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        I = i.ZP.input.withConfig({ displayName: 'newsletter__MobileInput', componentId: 'qzsd7i-6' })(
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
            return t.disabled && (0, i.iv)(['opacity:0.5;cursor:not-allowed;']);
          },
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        L = i.ZP.span.withConfig({ displayName: 'newsletter__StyledSuccessMessage', componentId: 'qzsd7i-7' })(
          ['color:', ';font-weight:bold;height:100px;display:flex;flex-direction:column;justify-content:center;'],
          function (t) {
            return t.theme.colors.success;
          }
        ),
        E = i.ZP.p.withConfig({ displayName: 'newsletter__StyledError', componentId: 'qzsd7i-8' })(
          ['color:', ';font-weight:bold;margin-bottom:5px;margin-top:0px;font-size:12px;text-align:left;'],
          function (t) {
            return t.theme.colors.error;
          }
        ),
        D = n(9117),
        M = n(8820);
      function q(t) {
        var e = t.avatar,
          n = t.className,
          r = t.title,
          i = t.description;
        return (0, f.jsxs)(B, {
          className: n,
          children: [
            (0, f.jsx)(M.Z, { variant: 'rounded', alt: ''.concat(r, '-img'), src: e }),
            (0, f.jsx)('h1', { children: r }),
            i && (0, f.jsx)('span', { children: i }),
          ],
        });
      }
      var B = i.ZP.div.withConfig({ displayName: 'artist-info__Artist', componentId: 'sc-18jmy9p-0' })(
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
      );
      function V(t) {
        var e = t.children,
          n = t.href;
        return (0, f.jsx)(F, { href: n, target: '_blank', children: e });
      }
      var F = i.ZP.a.withConfig({ displayName: 'social-link__Social', componentId: 'sc-15ne3m8-0' })(
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
        H = n(2577),
        T = n(6747),
        W = n(4144);
      function A(t) {
        var e = t.data,
          n = t.className,
          r = t.artistName,
          i = t.variant,
          o = void 0 === i ? 'row' : i;
        return e.title && e.url
          ? (0, f.jsxs)(R, {
              className: n || '',
              variant: o,
              href: e.url,
              onClick: function () {
                analytics.track('Tracpage Link Click', {
                  artist_id: r,
                  category: 'traclink' === e.type ? 'Release' : 'Url',
                  name: e.title,
                });
              },
              children: [
                (0, f.jsx)(M.Z, { src: e.avatar, alt: e.title }),
                (0, f.jsxs)(X, {
                  variant: o,
                  className: ''.concat(e.highlight ? 'highlight' : null),
                  children: [(0, f.jsx)('h3', { children: e.title }), (0, f.jsx)('p', { children: e.subtitle })],
                }),
                'row' === o &&
                  (0, f.jsx)(G, {
                    className: ''.concat(e.highlight ? 'highlight' : null),
                    children: (0, f.jsx)(W.Z, {}),
                  }),
              ],
            })
          : null;
      }
      var R = i.ZP.a.withConfig({ displayName: 'song-link__StyledSongLink', componentId: 'sc-1wye2kl-0' })(
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
              (0, i.iv)([
                'width:calc(50% - 2px);flex-direction:column;align-items:flex-start;height:170px;margin-right:2px;',
              ])
            );
          },
          function (t) {
            return (
              'column-right' === t.variant &&
              (0, i.iv)([
                'width:calc(50% - 2px);flex-direction:column;align-items:flex-start;height:170px;margin-left:2px;',
              ])
            );
          }
        ),
        X = i.ZP.div.withConfig({ displayName: 'song-link__Info', componentId: 'sc-1wye2kl-1' })(
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
            return ('column-right' === e || 'column-left' === e) && (0, i.iv)(['padding:20px 0px 0px 0px;']);
          }
        ),
        G = i.ZP.div.withConfig({ displayName: 'song-link__Play', componentId: 'sc-1wye2kl-2' })(
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
        J = n(9207),
        U = n(381),
        $ = n.n(U);
      function K(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Q(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? K(Object(n), !0).forEach(function (e) {
                (0, r.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var Y = !0;
      function tt(t) {
        var e = (0, l.Z)(),
          n = (0, J.V)(t.siteData).pageData;
        (0, w.useEffect)(function () {
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
        var r,
          i = function (t, n) {
            if (e) return 'row';
            var r = n.filter(function (t) {
                return 'embed' !== t.type;
              }),
              i =
                r.findIndex(function (e) {
                  return e.order === t.order;
                }) + 1;
            return r.length < 5 ? 'row' : 5 === i ? 'column-right' : 4 === i ? 'column-left' : 'row';
          },
          o = (0, w.useMemo)(
            function () {
              var t,
                e = [],
                r = [];
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
                        })(r) && (e.push(r), (r = [])),
                        r.push(Q(Q({}, t), {}, { order: r.length }));
                    }),
                (null === (t = r) || void 0 === t ? void 0 : t.length) > 0 && e.push(r),
                e
              );
            },
            [n]
          );
        return n && n.id
          ? (0, f.jsxs)(f.Fragment, {
              children: [
                (0, f.jsx)(c.PB, {
                  title: n.title,
                  description: n.description || n.data.bio || n.title,
                  openGraph: {
                    title: n.title,
                    description: n.description || n.data.bio || n.title,
                    url: 'https://'.concat(n.subdomain, '.').concat('development.trac.co', '/'),
                    images: [{ url: n.avatar }],
                    type: 'website',
                  },
                }),
                (0, f.jsx)(T.Z, {
                  theme: n ? n.theme : void 0,
                  removeBranding: null === n || void 0 === n ? void 0 : n.removeBranding,
                  children: (0, f.jsxs)(u.Z, {
                    children: [
                      (0, f.jsx)(q, {
                        avatar: (null === n || void 0 === n ? void 0 : n.avatar) || '',
                        title: (null === n || void 0 === n ? void 0 : n.title) || '',
                        description: null === n || void 0 === n ? void 0 : n.data.bio,
                      }),
                      (0, f.jsx)(nt, {
                        children: (0, f.jsx)(rt, {
                          width: ((r = n.data.social.length), 48 * r + 20 * r),
                          length: n.data.social.length,
                          children: n.data.social
                            .filter(function (t) {
                              return t.url && 'NEW' !== t.url;
                            })
                            .map(function (t) {
                              return t.url && (0, f.jsx)(V, { href: t.url, children: (0, a.Z)(t.provider) }, t.url);
                            }),
                        }),
                      }),
                      t.merchData.length
                        ? (0, f.jsx)(s.Z, {
                            fullWidth: !0,
                            onClick: function () {
                              return window.location.assign('/merch');
                            },
                            children: 'Shop Merch',
                          })
                        : null,
                      (0, f.jsx)(_, { className: 'mt-5', artistId: null === n || void 0 === n ? void 0 : n.id }),
                      o.map(function (t) {
                        return t.map(function (e) {
                          var r, o, c, a, l, s, u;
                          return !1 === e.show
                            ? null
                            : ((s = null !== (r = e.start) && void 0 !== r ? r : ''),
                              (u = null !== (o = e.end) && void 0 !== o ? o : ''),
                              '' === s ||
                              '' === u ||
                              ($()(new Date()).isAfter(new Date(s)) && $()(new Date()).isBefore(new Date(u)))
                                ? 'embed' === e.type
                                  ? (0, f.jsx)(
                                      H.Z,
                                      {
                                        className: 'mt-5',
                                        data: {
                                          title: e.title,
                                          url: null === (c = e.embedData) || void 0 === c ? void 0 : c.url,
                                          id: (null === (a = e.embedData) || void 0 === a ? void 0 : a.id) || '',
                                          type: e.type,
                                        },
                                        artistName: n.title,
                                      },
                                      null === (l = e.embedData) || void 0 === l ? void 0 : l.url
                                    )
                                  : 'header' === e.type
                                  ? (0, f.jsx)(et, { children: (0, f.jsx)('span', { children: e.title }) }, e.title)
                                  : 'traclink' === e.type
                                  ? (0, f.jsx)(
                                      A,
                                      {
                                        data: e,
                                        className: 'mt-5 '.concat(e.highlight ? 'highlight' : null),
                                        variant: i(e, t),
                                        artistName: n.title,
                                      },
                                      e.order
                                    )
                                  : (0, f.jsx)(
                                      D.Z,
                                      {
                                        data: e,
                                        className: 'mt-5',
                                        variant: i(e, t),
                                        releaseId: n.id,
                                        artistId: n.ownerId,
                                      },
                                      e.order
                                    )
                                : null);
                        });
                      }),
                    ],
                  }),
                }),
              ],
            })
          : null;
      }
      var et = i.ZP.div.withConfig({ displayName: 'pages__HeaderContainer', componentId: 'fuh4kw-0' })(
          ['margin-bottom:10px;margin-top:25px;span{font-size:24px;color:', ';font-weight:800;}'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        nt = i.ZP.div.withConfig({ displayName: 'pages__SocialLinks', componentId: 'fuh4kw-1' })(
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
            return (0, o.m4)(e.colors.background, 1);
          },
          function (t) {
            var e = t.theme;
            return (0, o.m4)(e.colors.background, 0);
          },
          function (t) {
            var e = t.theme;
            return (0, o.m4)(e.colors.background, 1);
          },
          function (t) {
            var e = t.theme;
            return (0, o.m4)(e.colors.background, 0);
          },
          function (t) {
            var e = t.theme;
            return (0, o.m4)(e.colors.background, 1);
          },
          function (t) {
            var e = t.theme;
            return (0, o.m4)(e.colors.background, 0);
          },
          function (t) {
            var e = t.theme;
            return (0, o.m4)(e.colors.background, 0);
          },
          function (t) {
            var e = t.theme;
            return (0, o.m4)(e.colors.background, 1);
          },
          function (t) {
            var e = t.theme;
            return (0, o.m4)(e.colors.background, 0);
          },
          function (t) {
            var e = t.theme;
            return (0, o.m4)(e.colors.background, 1);
          },
          function (t) {
            var e = t.theme;
            return (0, o.m4)(e.colors.background, 0);
          },
          function (t) {
            var e = t.theme;
            return (0, o.m4)(e.colors.background, 1);
          }
        ),
        rt = i.ZP.div.withConfig({ displayName: 'pages__SocialLinksContent', componentId: 'fuh4kw-2' })(
          [
            'width:100%;display:flex;',
            ' @media (max-width:',
            '){justify-content:space-between;}> a{flex:1 0 auto;}> a:not(:last-child){margin-right:24px;}> a:first-child,> a:last-child{z-index:999;}',
          ],
          function (t) {
            return t.length >= 8
              ? (0, i.iv)([
                  'justify-content:flex-start;overflow:scroll;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}',
                ])
              : (0, i.iv)(['justify-content:center;']);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        );
    },
    5301: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n(8780);
        },
      ]);
    },
    266: function (t, e, n) {
      'use strict';
      function r(t, e, n, r, i, o, c) {
        try {
          var a = t[o](c),
            l = a.value;
        } catch (s) {
          return void n(s);
        }
        a.done ? e(l) : Promise.resolve(l).then(r, i);
      }
      function i(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (i, o) {
            var c = t.apply(e, n);
            function a(t) {
              r(c, i, o, a, l, 'next', t);
            }
            function l(t) {
              r(c, i, o, a, l, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      n.d(e, {
        Z: function () {
          return i;
        },
      });
    },
  },
  function (t) {
    t.O(0, [885, 987, 55, 742, 886, 774, 888, 179], function () {
      return (e = 5301), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
