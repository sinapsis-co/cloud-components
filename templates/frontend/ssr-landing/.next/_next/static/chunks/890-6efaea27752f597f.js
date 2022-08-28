'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [890],
  {
    1947: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(186),
        i = (n(7294), n(5893)),
        o = r.ZP.img.withConfig({ displayName: 'avatar__AvatarImg', componentId: 'sc-1bted74-0' })(
          [
            'width:',
            ';height:',
            ';border-radius:4px;object-fit:cover;@media (max-width:',
            '){width:',
            ';height:',
            ';border-radius:50%;}',
          ],
          function (e) {
            return e.theme.sizes.avatarWidth;
          },
          function (e) {
            return e.theme.sizes.avatarHeight;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          },
          function (e) {
            return e.theme.sizes.avatarWidthMobile;
          },
          function (e) {
            return e.theme.sizes.avatarHeightMobile;
          }
        ),
        a = (0, r.ZP)(o).withConfig({ displayName: 'avatar__AvatarPlaceholder', componentId: 'sc-1bted74-1' })(
          ['background-color:', ';'],
          function (e) {
            return e.theme.colors.secondary;
          }
        ),
        c = function (e) {
          var t = e.className,
            n = e.src,
            r = e.alt;
          return n
            ? (0, i.jsx)(o, { className: t || '', src: n, alt: ''.concat(r, ' avatar') })
            : (0, i.jsx)(a, { as: 'div' });
        };
      function l(e) {
        var t = e.avatar,
          n = e.className,
          r = e.title,
          o = e.description;
        return (0, i.jsxs)(s, {
          className: n,
          children: [
            (0, i.jsx)(c, { alt: ''.concat(r, '-img'), src: t }),
            (0, i.jsx)('h1', { children: r }),
            o && (0, i.jsx)('span', { children: o }),
          ],
        });
      }
      var s = r.ZP.div.withConfig({ displayName: 'artist-info__Artist', componentId: 'sc-18jmy9p-0' })(
        [
          'display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;width:100%;@media (max-width:',
          '){justify-content:center;align-items:center;}> h1{font-weight:800;font-size:40px;line-height:100%;margin-bottom:14px;text-align:left;color:',
          ';width:100%;letter-spacing:-2px;}> span{font-size:14px;line-height:145%;opacity:0.5;color:',
          ';width:100%;}@media (max-width:',
          '){> h1{font-size:32px;}> h1,> span{text-align:center;}}',
        ],
        function (e) {
          var t = e.theme;
          return ''.concat(t.breakpoints.tablet, 'px');
        },
        function (e) {
          return e.theme.colors.primary;
        },
        function (e) {
          return e.theme.colors.primary;
        },
        function (e) {
          var t = e.theme;
          return ''.concat(t.breakpoints.tablet, 'px');
        }
      );
    },
    2310: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return X;
        },
      });
      var r = n(186),
        i = n(7294),
        o = n(1664),
        a = n.n(o),
        c = n(1163),
        l = n(5893),
        s = r.ZP.div.withConfig({ displayName: 'navbar__NavbarWrapper', componentId: 'sc-1j6iho3-0' })(
          [
            'display:flex;justify-content:space-between;align-items:center;width:100%;margin-bottom:56px;@media (max-width:',
            '){margin-bottom:0;justify-content:flex-start;align-items:flex-end;height:100%;}',
          ],
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          }
        ),
        p = r.ZP.div.withConfig({ displayName: 'navbar__LinksContainer', componentId: 'sc-1j6iho3-1' })(
          ['display:grid;grid-gap:24px;gap:24px;grid-auto-flow:column;@media (max-width:', '){grid-auto-flow:row;}'],
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          }
        ),
        u = r.ZP.a.withConfig({ displayName: 'navbar__NavbarLink', componentId: 'sc-1j6iho3-2' })(
          [
            'color:',
            ';font-weight:400;font-size:18px;line-height:100%;opacity:0.5;transition:opacity ',
            ';&.active,&:hover,&:focus{opacity:1;}&.disabled{pointer-events:none;opacity:0.15;}@media (max-width:',
            '){font-size:24px;font-weight:400;line-height:24px;text-align:left;transition:opacity ',
            ',font-weight ',
            ';&.active,&:hover,&:focus{font-weight:700;}}',
          ],
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          }
        ),
        d = [
          { label: 'All', href: '/', disabled: !1 },
          { label: 'Music', href: '/music', disabled: !1 },
          { label: 'Merch', href: '/merch', disabled: !0 },
          { label: 'NFT', href: '/nft', disabled: !0 },
          { label: 'Tour', href: '/tour', disabled: !0 },
        ],
        h = function (e) {
          var t = e.className,
            n = (0, c.useRouter)(),
            r = function (e) {
              return '/' === e ? n.pathname === e : n.pathname.startsWith(e);
            };
          return (0, l.jsx)(s, {
            className: t || '',
            children: (0, l.jsx)(p, {
              children: d
                .filter(function (e) {
                  return !e.disabled;
                })
                .map(function (e, t) {
                  return (0,
                  l.jsx)(a(), { href: e.href, passHref: !0, children: (0, l.jsx)(u, { className: ''.concat(r(e.href) ? 'active' : '', ' ').concat(e.disabled ? 'disabled' : ''), children: e.label }) }, ''.concat(e.label, '-').concat(t));
                }),
            }),
          });
        },
        f = n(6835),
        g = n(6502),
        b = n(6805),
        m = n(2447),
        y = n(9499),
        x = n(4730),
        w = ['className', 'noAnimation'];
      function j(e, t) {
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                (0, y.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var O = function (e) {
          var t = e.className,
            n = e.noAnimation,
            r = (0, x.Z)(e, w);
          return (0, l.jsx)(b.ww.div, {
            initial: 'rest',
            whileHover: 'hover',
            whileTap: 'tap',
            animate: 'rest',
            children: (0, l.jsxs)(
              'svg',
              v(
                v(
                  {
                    width: '86',
                    height: '19',
                    viewBox: '0 0 86 19',
                    className: t || '',
                    style: { overflow: 'visible' },
                  },
                  r
                ),
                {},
                {
                  children: [
                    (0, l.jsx)(b.ww.path, {
                      variants: n
                        ? void 0
                        : { rest: { scale: 1 }, hover: { scale: 1.125 }, tap: { scale: 0.85, scaleX: 1 } },
                      transition: { type: 'spring', duration: 0.75, bounce: 0.5 },
                      d: 'M17.31,8.71,8.66,0v8.7L0,0V14.74L4.24,19V10.3L12.9,19V10.3L21.55,19V4.26L17.31,0Z',
                    }),
                    (0, l.jsx)('path', {
                      d: 'M31.58,0,27.94,3.65V13.76c0,3.11,1.41,5.13,5.44,5.13a10.78,10.78,0,0,0,3-.4V15.57a8.61,8.61,0,0,1-2.09.26c-1.83,0-2.7-.82-2.7-2.64V7.74h4.79V4.42H31.58Z',
                    }),
                    (0, l.jsx)('path', {
                      d: 'M41.89,8.13V4.42H38.57V18.57H42.2V13.06a6.07,6.07,0,0,1,1.38-4.45,4.56,4.56,0,0,1,3.47-1.19,6.71,6.71,0,0,1,1.1.09V4.14a5.86,5.86,0,0,0-1-.09A5.33,5.33,0,0,0,41.89,8.13Z',
                    }),
                    (0, l.jsx)('path', {
                      d: 'M64.16,18.57V10c0-4.1-2.31-6-7.3-6C52.4,4,49.44,6,49.1,9.06h3.81c.22-1.67,1.63-2.57,3.94-2.57s3.64,1,3.64,3v.32l-5.05.42c-2.64.25-4.06.65-5.07,1.3a3.62,3.62,0,0,0-1.72,3.2c0,2.63,2.23,4.25,5.72,4.25,3.1,0,5.3-1.1,6.26-3v2.58Zm-3.62-6c0,2.41-2,4-5,4-2,0-3.15-.73-3.15-2s.9-2,3.35-2.21l4.76-.48Z',
                    }),
                    (0, l.jsx)('path', {
                      d: 'M74.35,6.74c2.28,0,3.75,1.08,4.17,3h0l3.4-1.56C80.94,5.49,78.31,4,74.46,4c-5.16,0-8.4,2.86-8.4,7.47S69.33,19,74.4,19c3.77,0,6.52-1.6,7.54-4.27L78.6,13.2a3.89,3.89,0,0,1-4.2,3c-2.81,0-4.56-1.79-4.56-4.79S71.53,6.74,74.35,6.74Z',
                    }),
                    (0, l.jsx)('path', {
                      d: 'M85.86,4.75a2.07,2.07,0,0,0-.39-.54,2.15,2.15,0,0,0-.56-.34,1.93,1.93,0,0,0-1.34,0,1.68,1.68,0,0,0-.56.34,1.73,1.73,0,0,0-.4.57,1.61,1.61,0,0,0-.13.68,1.63,1.63,0,0,0,.14.72,1.5,1.5,0,0,0,.39.54,1.53,1.53,0,0,0,.56.34,1.93,1.93,0,0,0,1.34,0,1.72,1.72,0,0,0,.56-.34,1.64,1.64,0,0,0,.4-.57A1.8,1.8,0,0,0,86,5.46,2,2,0,0,0,85.86,4.75ZM85.43,6a1.39,1.39,0,0,1-.28.43,1.07,1.07,0,0,1-.41.28,1.21,1.21,0,0,1-1,0,1.07,1.07,0,0,1-.41-.28A1.23,1.23,0,0,1,83,6a1.57,1.57,0,0,1,0-1.09,1.19,1.19,0,0,1,.28-.42,1,1,0,0,1,.41-.28,1.21,1.21,0,0,1,1,0,1,1,0,0,1,.41.28,1.34,1.34,0,0,1,.28.42A1.47,1.47,0,0,1,85.43,6Z',
                    }),
                    (0, l.jsx)('path', {
                      d: 'M84.72,5.54a.42.42,0,0,0,.16-.09A.33.33,0,0,0,85,5.3a.62.62,0,0,0,0-.23.43.43,0,0,0,0-.25.48.48,0,0,0-.15-.2,1,1,0,0,0-.56-.12h-.73V6.43h.38V5.6h.25l.47.83h.4l-.51-.85Zm-.79-.24V4.79h.46l.13,0a.16.16,0,0,1,.09.07.19.19,0,0,1,0,.12c0,.12,0,.19-.1.23a.86.86,0,0,1-.28,0Z',
                    }),
                  ],
                }
              )
            ),
          });
        },
        C = n(1843),
        P = ['className', 'onClick'];
      function k(e, t) {
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
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                (0, y.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var D = function (e) {
          var t = e.className,
            n = e.onClick,
            i = (0, x.Z)(e, P),
            o = (0, r.Fg)();
          return (0, l.jsxs)(
            'svg',
            Z(
              Z(
                {
                  viewBox: '0 0 24 13',
                  width: 24,
                  height: 13,
                  className: t,
                  onClick: n,
                  'aria-hidden': 'true',
                  role: 'img',
                  style: { cursor: n ? 'pointer' : 'auto' },
                },
                i
              ),
              {},
              {
                children: [
                  (0, l.jsx)('rect', { fill: o.colors.primary, y: '12', width: '24', height: '1' }),
                  (0, l.jsx)('rect', { fill: o.colors.primary, y: '6', width: '24', height: '1' }),
                  (0, l.jsx)('rect', { fill: o.colors.primary, width: '24', height: '1' }),
                ],
              }
            )
          );
        },
        S = n(6041),
        z = n(1947);
      function M(e) {
        var t = e.children,
          n = e.href;
        return (0, l.jsx)(L, { href: n, target: '_blank', children: t });
      }
      var L = r.ZP.a.withConfig({ displayName: 'social-link__Social', componentId: 'sc-15ne3m8-0' })(
          [
            'width:',
            ';max-width:',
            ';height:',
            ';max-height:',
            ';background-color:',
            ';display:flex;justify-content:center;align-items:center;border-radius:50%;transition:background-color ',
            ';&:hover{background-color:',
            ';}> svg{fill:',
            ';height:calc(',
            ' / 2);}',
          ],
          function (e) {
            return e.theme.sizes.socialIconSize;
          },
          function (e) {
            return e.theme.sizes.socialIconSize;
          },
          function (e) {
            return e.theme.sizes.socialIconSize;
          },
          function (e) {
            return e.theme.sizes.socialIconSize;
          },
          function (e) {
            return e.theme.colors.iconBackground;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          },
          function (e) {
            return e.theme.colors.iconBackgroundHover;
          },
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            return e.theme.sizes.socialIconSize;
          }
        ),
        B = n(2869),
        E = n(1389),
        N = function (e) {
          var t = e.className,
            n = e.pageData,
            o = e.noBg,
            a = e.hideIcons,
            s = (0, r.Fg)(),
            p = (0, m.Z)(),
            u = (0, c.useRouter)(),
            d = i.useState(!1),
            g = (0, f.Z)(d, 2),
            y = g[0],
            x = g[1],
            w = '/' === u.pathname,
            j = function () {
              if (p && !w) return !0;
            };
          return (0, l.jsxs)(H, {
            className: t || '',
            hideInfo: j(),
            noBg: o,
            children: [
              (0, l.jsxs)(W, {
                className: j() ? 'hide-info' : '',
                children: [
                  p && '/merch/cart' !== u.pathname
                    ? (0, l.jsx)(C.Z, {
                        onClick: function () {
                          return u.push('/merch/cart');
                        },
                      })
                    : null,
                  !a &&
                    (0, l.jsx)(A, {
                      children: w
                        ? (0, l.jsx)('span', {
                            style: { width: '86px', height: '20px' },
                            children: (0, l.jsx)(O, { noAnimation: !0, fill: s.colors.logo }),
                          })
                        : (0, l.jsx)(R, {
                            href: '/',
                            children: (0, l.jsx)('a', {
                              style: { width: '86px', height: '20px' },
                              children: (0, l.jsx)(O, { fill: s.colors.logo }),
                            }),
                          }),
                    }),
                  (0, l.jsx)(b.M_, {
                    children: p
                      ? y
                        ? (0, l.jsx)(B.Z, {
                            children: (0, l.jsx)(S.Z, {
                              style: { width: 24 },
                              fill: s.colors.primary,
                              onClick: function () {
                                return x(!1);
                              },
                            }),
                          })
                        : (0, l.jsx)(B.Z, {
                            children: (0, l.jsx)(D, {
                              onClick: function () {
                                return x(!0);
                              },
                            }),
                          })
                      : null,
                  }),
                ],
              }),
              p && y
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(_, {
                        onClick: function () {
                          return x(!1);
                        },
                      }),
                      (0, l.jsx)(I, { children: (0, l.jsx)(h, {}) }),
                    ],
                  })
                : null,
              j()
                ? null
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(z.Z, {
                        avatar: (null === n || void 0 === n ? void 0 : n.avatar) || '',
                        title: (null === n || void 0 === n ? void 0 : n.title) || '',
                        description: null === n || void 0 === n ? void 0 : n.data.bio,
                      }),
                      !a &&
                        (0, l.jsx)(V, {
                          children: (0, l.jsx)(F, {
                            children: n.data.social
                              .filter(function (e) {
                                return e.url && 'NEW' !== e.url;
                              })
                              .map(function (e, t) {
                                return e.url && (0, l.jsx)(M, { href: e.url, children: (0, E.Z)(e.provider) }, t);
                              }),
                          }),
                        }),
                    ],
                  }),
            ],
          });
        },
        H = r.ZP.div.withConfig({ displayName: 'sidebar__SidebarWrapper', componentId: 'sc-1a9uk47-0' })(
          [
            'max-width:500px;width:100%;height:100vh;padding:108px 116px 0;position:relative;background-color:',
            ';@media (max-width:',
            '){max-width:400px;padding:108px 32px 0;}@media (max-width:',
            '){width:100%;max-width:none;height:auto;padding:0 24px;position:static;}',
            ' ',
            '',
          ],
          function (e) {
            return e.theme.colors.sidebarBackground;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.laptop, 'px');
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          },
          function (e) {
            return e.hideInfo ? (0, r.iv)(['padding-bottom:0;']) : null;
          },
          function (e) {
            return e.noBg
              ? (0, r.iv)(['@media (max-width:', '){background-color:transparent;}'], function (e) {
                  var t = e.theme;
                  return ''.concat(t.breakpoints.tablet, 'px');
                })
              : null;
          }
        ),
        _ = r.ZP.div.withConfig({ displayName: 'sidebar__Backdrop', componentId: 'sc-1a9uk47-1' })(
          ['position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:', ';'],
          function (e) {
            var t = e.theme;
            return (0, g.m4)(t.colors.sidebarBackground, 0.5);
          }
        ),
        I = r.ZP.div.withConfig({ displayName: 'sidebar__MobileMenu', componentId: 'sc-1a9uk47-2' })(
          [
            'position:fixed;top:80px;right:0;bottom:40%;left:0;padding:160px 24px 48px;z-index:5;background-color:',
            ';',
          ],
          function (e) {
            return e.theme.colors.sidebarBackground;
          }
        ),
        V = r.ZP.div.withConfig({ displayName: 'sidebar__SocialLinks', componentId: 'sc-1a9uk47-3' })([
          'width:100%;margin-top:24px;position:relative;',
        ]),
        F = r.ZP.div.withConfig({ displayName: 'sidebar__SocialLinksContent', componentId: 'sc-1a9uk47-4' })(
          [
            'width:100%;display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;gap:6px;& > *{flex:0 0 auto;}@media (max-width:',
            '){justify-content:center;}',
          ],
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          }
        ),
        A = r.ZP.div.withConfig({ displayName: 'sidebar__LogoWrapper', componentId: 'sc-1a9uk47-5' })(
          [
            'width:86px;position:absolute;top:35px;left:32px;overflow:visible;@media (max-width:',
            '){position:relative;top:auto;left:auto;}',
          ],
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          }
        ),
        W = r.ZP.div.withConfig({ displayName: 'sidebar__Nav', componentId: 'sc-1a9uk47-6' })(
          [
            '@media (max-width:',
            '){display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;padding:28px 0;z-index:990;position:relative;}',
          ],
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          }
        ),
        R = (0, r.ZP)(a()).withConfig({ displayName: 'sidebar__StyledLink', componentId: 'sc-1a9uk47-7' })([
          'width:86px;',
        ]),
        Y = n(8052);
      function X(e) {
        var t = e.className,
          n = e.children,
          r = e.pageData,
          i = e.action,
          o = e.hasBackground,
          a = e.hasBackgroundMobile,
          s = e.hideNavbar,
          p = e.hideSidebar,
          u = e.hideCart,
          d = e.hideIcons,
          f = e.noAnimation,
          g = (0, c.useRouter)(),
          b = (0, m.Z)();
        return (0, l.jsxs)(T, {
          className: t || '',
          hasBackground: o,
          hasBackgroundMobile: a,
          hideSidebar: p,
          children: [
            r ? (p ? null : (0, l.jsx)(N, { noBg: a, pageData: r, hideIcons: d })) : null,
            (0, l.jsxs)(J, {
              className: 'wrapper',
              variants: f ? void 0 : Y.iR,
              initial: f ? void 0 : 'initial',
              animate: f ? void 0 : 'animate',
              exit: f ? void 0 : 'exit',
              transition: Y.BH,
              children: [
                b
                  ? null
                  : (0, l.jsxs)('div', {
                      children: [
                        s ? null : (0, l.jsx)(h, {}),
                        i ? (0, l.jsx)(G, { className: p ? 'centered' : '', children: i }) : null,
                        u
                          ? null
                          : (0, l.jsx)(U, {
                              onClick: function () {
                                return g.push('/merch/cart');
                              },
                            }),
                      ],
                    }),
                b && p && i ? (0, l.jsx)(G, { className: p ? 'centered' : '', children: i }) : null,
                (0, l.jsx)(q, { className: 'content '.concat(i ? 'has-action' : ''), children: n }),
              ],
            }),
          ],
        });
      }
      var T = r.ZP.div.withConfig({ displayName: 'container__StyledContainer', componentId: 'u3fn7h-0' })(
          [
            'height:100%;height:100vh;max-height:100%;max-height:100vh;overflow:hidden;margin:auto;position:relative;display:flex;@media (max-width:',
            '){flex-direction:column;max-height:none;overflow:auto;}',
            ' ',
            ' .content{',
            '}',
          ],
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          },
          function (e) {
            return (
              e.hasBackground &&
              (0, r.iv)(
                [
                  '.wrapper{background-color:',
                  ';@media (max-width:',
                  '){background-color:',
                  ';}}.content{margin-left:112px;@media (max-width:',
                  '){margin-left:0;}}',
                ],
                function (e) {
                  return e.theme.colors.background;
                },
                function (e) {
                  var t = e.theme;
                  return ''.concat(t.breakpoints.laptop, 'px');
                },
                function (e) {
                  return e.theme.colors.background;
                },
                function (e) {
                  var t = e.theme;
                  return ''.concat(t.breakpoints.laptop, 'px');
                }
              )
            );
          },
          function (e) {
            return (
              e.hasBackgroundMobile &&
              (0, r.iv)(
                ['.wrapper{@media (max-width:', '){background-color:', ';}}'],
                function (e) {
                  var t = e.theme;
                  return ''.concat(t.breakpoints.laptop, 'px');
                },
                function (e) {
                  return e.theme.colors.background;
                }
              )
            );
          },
          function (e) {
            return e.hideSidebar && (0, r.iv)(['margin-inline:auto;']);
          }
        ),
        J = (0, r.ZP)(b.ww.div).withConfig({ displayName: 'container__Wrapper', componentId: 'u3fn7h-1' })(
          [
            'width:100%;height:100%;height:100vh;max-height:100%;max-height:100vh;overflow-y:scroll;padding:32px;position:relative;@media (max-width:',
            '){max-width:none;padding:24px;height:auto;max-height:none;overflow-y:visible;}',
          ],
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          }
        ),
        q = r.ZP.div.withConfig({ displayName: 'container__Content', componentId: 'u3fn7h-2' })(
          [
            'max-width:608px;&.has-action{margin-top:80px;}@media (max-width:',
            '){max-width:none;&.has-action{margin-top:0;}}',
          ],
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          }
        ),
        U = (0, r.ZP)(C.Z).withConfig({ displayName: 'container__PositionedCartIcon', componentId: 'u3fn7h-3' })([
          'position:absolute;top:32px;right:32px;',
        ]),
        G = r.ZP.div.withConfig({ displayName: 'container__ActionWrapper', componentId: 'u3fn7h-4' })(
          [
            'position:absolute;top:32px;left:32px;&.centered{left:max(32px,calc(50% - (450px / 2)));@media (max-width:',
            '){position:relative;top:auto;left:auto;margin-bottom:24px;}}',
          ],
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          }
        );
    },
    8052: function (e, t, n) {
      n.d(t, {
        BH: function () {
          return r;
        },
        LS: function () {
          return o;
        },
        iR: function () {
          return c;
        },
        kr: function () {
          return i;
        },
        wM: function () {
          return a;
        },
      });
      var r = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        i = { duration: 0.5, delay: 0.35 },
        o = {
          initial: { opacity: 0, scaleY: 0, originY: 'top' },
          animate: { opacity: 1, scaleY: 1, originY: 'top' },
          exit: { opacity: 0, scaleY: 0, originY: 'top' },
        },
        a = { rest: { scale: 1 }, hover: { scale: 0.95 }, tap: { scale: 1.0125 } },
        c = { initial: { opacity: 0, x: '100%' }, animate: { opacity: 1, x: '0%' }, exit: { opacity: 0, x: '-100%' } };
    },
    1843: function (e, t, n) {
      var r = n(9499),
        i = n(4730),
        o = (n(7294), n(186)),
        a = n(6805),
        c = n(8052),
        l = n(5893),
        s = ['className', 'onClick'];
      function p(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      t.Z = function (e) {
        var t = e.className,
          n = e.onClick,
          r = (0, i.Z)(e, s),
          p = (0, o.Fg)();
        return (0, l.jsx)(a.ww.div, {
          whileHover: 'animate',
          initial: 'initial',
          children: (0, l.jsxs)(
            'svg',
            u(
              u(
                {
                  className: t,
                  'aria-hidden': 'true',
                  role: 'img',
                  viewBox: '0 0 24 24',
                  width: 24,
                  height: 24,
                  onClick: n,
                  style: { cursor: n ? 'pointer' : 'auto' },
                },
                r
              ),
              {},
              {
                children: [
                  (0, l.jsx)('rect', { fill: 'none', width: '24', height: '24' }),
                  (0, l.jsxs)(a.ww.g, {
                    variants: { initial: { scale: 1 }, animate: { scale: 1.2 } },
                    transition: c.BH,
                    children: [
                      (0, l.jsx)('path', {
                        fill: p.colors.primary,
                        d: 'M9.72,19.25c-.96,0-1.74-.79-1.74-1.75s.78-1.75,1.74-1.75,1.74,.79,1.74,1.75-.78,1.75-1.74,1.75Zm0-2.5c-.41,0-.75,.34-.75,.75s.33,.75,.75,.75,.75-.34,.75-.75-.33-.75-.75-.75Z',
                      }),
                      (0, l.jsx)('path', {
                        fill: p.colors.primary,
                        d: 'M15.97,19.25c-.96,0-1.74-.79-1.74-1.75s.78-1.75,1.74-1.75,1.74,.79,1.74,1.75-.78,1.75-1.74,1.75Zm0-2.5c-.41,0-.75,.34-.75,.75s.33,.75,.75,.75,.75-.34,.75-.75-.33-.75-.75-.75Z',
                      }),
                      (0, l.jsx)('path', {
                        fill: p.colors.primary,
                        d: 'M17.02,15.05h-7.65l-1.39-8.4h9.54c.67,0,1.28,.33,1.65,.89,.37,.56,.44,1.26,.18,1.88l-2.33,5.63Zm-6.81-1h6.15l2.07-5.02c.13-.31,.1-.66-.09-.94-.19-.28-.49-.45-.83-.45H9.15l1.06,6.4Z',
                      }),
                      (0, l.jsx)('polygon', {
                        fill: p.colors.primary,
                        points: '7.49 15.14 5.82 5.75 4.5 5.75 4.5 4.75 6.65 4.75 8.47 14.96 7.49 15.14',
                      }),
                    ],
                  }),
                ],
              }
            )
          ),
        });
      };
    },
    6041: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(9499),
        i = n(5893);
      function o(e, t) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function c(e) {
        return (0, i.jsxs)(
          'svg',
          a(
            a({ width: '12', height: '12', viewBox: '0 0 12 12' }, e),
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
                  fill: e.fill,
                }),
                (0, i.jsx)('rect', {
                  x: '1.05029',
                  y: '-0.36377',
                  width: '16',
                  height: '2',
                  rx: '1',
                  transform: 'rotate(45 1.05029 -0.36377)',
                  fill: e.fill,
                }),
              ],
            }
          )
        );
      }
    },
    2869: function (e, t, n) {
      n(7294);
      var r = n(6805),
        i = n(5893);
      t.Z = function (e) {
        return (0, i.jsx)('div', {
          className: e.className,
          children: (0, i.jsx)(r.ww.div, {
            initial: 'hidden',
            animate: 'visible',
            exit: 'hidden',
            variants: {
              visible: { opacity: 1, transition: { ease: 'easeIn', duration: 0.25 } },
              hidden: { opacity: 0 },
            },
            children: e.children,
          }),
        });
      };
    },
    8134: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      });
      var r = n(186),
        i = (n(7294), n(5893));
      function o(e) {
        var t = e.children;
        return (0, i.jsx)(a, { children: t });
      }
      var a = r.ZP.div.withConfig({ displayName: 'page__StyledLayout', componentId: 'qan11h-0' })(
          ['background-color:', ';min-width:100vw;min-height:100vh;'],
          function (e) {
            return e.theme.colors.background;
          }
        ),
        c = n(9499),
        l = {
          grays: {
            gray1: '#161618',
            gray2: '#2A2B2F',
            gray25: '#25262B',
            gray275: '#32343C',
            gray285: '#383A3E',
            gray3: '#8e8e8e',
            gray4: '#bababa',
            gray5: '#dedede',
            gray6: '#eaeaea',
            gray7: '#676767',
            gray8: '#999999',
            gray85: '#d9d9d9',
            gray9: '#f4f4f4',
            gray10: '#F1F2F5',
            gray12: '#EFF0F3',
          },
          blacks: { black0: '#010101' },
          white: '#FFFFFF',
          black: '#111111',
          reds: { red1: '#ED3438', red2: '#D82F32', red3: '#ed0a0f' },
          green: { green1: '#a2d76b', green2: '#4D5E3A', green3: '#536449', green4: '#E3F3D3' },
          yellow: { yellow1: '#2A2723', yellow2: '#F3D993' },
        },
        s = n(6502),
        p = {
          primary: l.white,
          primaryHover: l.grays.gray8,
          secondary: l.grays.gray4,
          secondaryHover: l.grays.gray3,
          accent: l.reds.red1,
          accentHover: l.reds.red2,
          success: l.green.green1,
          successDark: l.green.green2,
          successMid: l.green.green3,
          successLight: l.green.green4,
          error: l.reds.red3,
          inputLabel: l.grays.gray12,
          shadow: (0, s.m4)(l.blacks.black0, 0.3),
          background: l.grays.gray25,
          sidebarBackground: l.grays.gray1,
          logo: l.grays.gray10,
          inputsBackground: l.grays.gray275,
          highlightLight: l.yellow.yellow2,
          highlightDark: l.yellow.yellow1,
          highlightBackground: l.yellow.yellow1,
          inputsBackgroundHover: l.black,
          cartItemBackground: l.grays.gray275,
          icon: l.white,
          iconBackground: l.grays.gray2,
          iconBackgroundHover: l.grays.gray3,
          itemBackground: l.grays.gray2,
          itemBackgroundHover: l.grays.gray285,
          highlight: l.yellow.yellow2,
        },
        u = {
          primary: l.grays.gray1,
          primaryHover: l.black,
          secondary: l.grays.gray7,
          secondaryHover: l.grays.gray7,
          accent: l.reds.red1,
          accentHover: l.reds.red2,
          success: l.green.green1,
          successDark: l.green.green2,
          successMid: l.green.green3,
          successLight: l.green.green4,
          error: l.reds.red3,
          inputLabel: l.grays.gray3,
          shadow: (0, s.m4)(l.grays.gray5, 0.2),
          background: l.grays.gray6,
          sidebarBackground: l.grays.gray9,
          logo: l.black,
          inputsBackground: l.grays.gray5,
          highlightLight: l.yellow.yellow2,
          highlightDark: l.yellow.yellow1,
          highlightBackground: (0, s.m4)(l.yellow.yellow2, 0.1),
          inputsBackgroundHover: l.grays.gray4,
          cartItemBackground: l.grays.gray5,
          icon: l.grays.gray2,
          iconBackground: l.grays.gray9,
          iconBackgroundHover: l.grays.gray85,
          itemBackground: l.grays.gray6,
          itemBackgroundHover: l.grays.gray85,
          highlight: l.yellow.yellow2,
        },
        d = n(7911),
        h = {
          mobileS: '(min-width: '.concat(d.Z.mobileS, 'px)'),
          mobileM: '(min-width: '.concat(d.Z.mobileM, 'px)'),
          mobileL: '(min-width: '.concat(d.Z.mobileL, 'px)'),
          tablet: '(min-width: '.concat(d.Z.tablet, 'px)'),
          laptopS: '(min-width: '.concat(d.Z.laptopS, 'px)'),
          laptop: '(min-width: '.concat(d.Z.laptop, 'px)'),
          laptopL: '(min-width: '.concat(d.Z.laptopL, 'px)'),
          laptopXL: '(min-width: '.concat(d.Z.laptopXL, 'px)'),
          desktop: '(min-width: '.concat(d.Z.desktop, 'px)'),
          desktopL: '(min-width: '.concat(d.Z.desktopL, 'px)'),
          iphoneX:
            'only screen and (device-width : 375px) and (device-height : 812px) and (-webkit-device-pixel-ratio : 3)',
          retinaDesktop: '\n    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: '
            .concat(d.Z.tablet, 'px),\n    only screen and (min--moz-device-pixel-ratio: 2) and (min-width: ')
            .concat(d.Z.tablet, 'px),\n    only screen and (-o-min-device-pixel-ratio: 2/1) and (min-width: ')
            .concat(d.Z.tablet, 'px),\n    only screen and (min-device-pixel-ratio: 2) and (min-width: ')
            .concat(d.Z.tablet, 'px),\n    only screen and (min-resolution: 192dpi) and (min-width: ')
            .concat(d.Z.tablet, 'px),\n    only screen and (min-resolution: 2dppx) and (min-width: ')
            .concat(d.Z.tablet, 'px)'),
          retina:
            '\n    only screen and (-webkit-min-device-pixel-ratio: 2),\n    only screen and (min--moz-device-pixel-ratio: 2),\n    only screen and (-o-min-device-pixel-ratio: 2/1),\n    only screen and (min-device-pixel-ratio: 2),\n    only screen and (min-resolution: 192dpi),\n    only screen and (min-resolution: 2dppx)',
        };
      function f(e, t) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                (0, c.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var b,
        m = {
          fontFamily: "'Inter', sans-serif;",
          palette: g({}, l),
          transitions: g(
            {},
            { duration: '.275s', type: 'ease-in-out', curve: 'cubic-bezier(0.650, 0.000, 0.450, 1.000)' }
          ),
          sizes: g(
            {},
            {
              socialIconSize: '48px',
              commonIconSize: '44px',
              avatarWidth: '265px',
              avatarHeight: '316px',
              avatarWidthMobile: '200px',
              avatarHeightMobile: '200px',
              productSize: '224px',
              productSizeDetail: '400px',
              productSizeMobile: '94px',
              coverSize: '224px',
              coverSizeMobile: '155px',
              coverSizeHighlight: '136px',
              coverSizeHighlightMobile: '188px',
              coverSizeSmall: '60px',
              coverSizeRounded: '200px',
              coverSizeRoundedMobile: '130px',
            }
          ),
          shadows: g({}, { redShadow: '10px 10px 20px rgba(237, 52, 56, 0.3);' }),
          general: g(
            {},
            {
              borderRadius: '4px',
              paddingBtn: '22px',
              columnWidth: 49,
              gutterWidth: 5,
              boxShadow: '10px 10px 20px 0',
              boxShadowHover: '0px 5px 10px 0',
              boxShadowInput: '0 4px 8px 0',
              boxShadowInputHover: '0 2px 4px 0',
              boxShadowPricing: '0 20px 40px 0',
            }
          ),
        },
        y = {
          light: g(g({}, m), {}, { colors: g({}, u), breakpoints: g({}, d.Z), device: g({}, h) }),
          dark: g(g({}, m), {}, { colors: g({}, p), breakpoints: g({}, d.Z), device: g({}, h) }),
        },
        x = n(1383),
        w = (0, r.vJ)(
          b ||
            (b = (0, x.Z)([
              '\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #F1F2F5;\n  color: #32343c;\n  font-size: 16px;\n  font: 400 16px "Inter", sans-serif;\n  font-family: \'Inter\', sans-serif;\n  text-rendering: geometricPrecision;\n  font-feature-settings: "pnum";\n  font-variant-numeric: proportional-nums;\n  font-weight: normal;\n  min-width: 320px;\n  margin: 0;\n  padding: 0;\n  font-stretch: normal;\n  font-style: normal;\n  overscroll-behavior: none;\n}\n\nbody.alternate-font {\n  background-color: white;\n  font: 400 16px "Inter", sans-serif;\n  font-family: "Inter", sans-serif;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  font-weight: 700;\n  position: relative;\n}\n\na.link-line {\n  display: inline-flex;\n}\n\na.link-line.red {\n  color: #ED3438;\n}\n\na.link-line:after {\n  content: \'\';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 100%;\n  width: 0%;\n  height: 2px;\n  background-color: #32343c;\n  border-radius: 2px;\n  transition: width .25s ease-in-out, right .25s ease-in-out;\n}\na.link-line.red:after {\n  background-color: #ED3438;\n}\n\na.link-line:hover:after {\n  right: 0;\n  width: 100%;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  -webkit-appearance: none;\n  filter: none;\n  border: none;\n  outline: none;\n  font-family: "Sen", sans-serif;\n}\n\ndiv[data-consent-manager-dialog] input {\n  -webkit-appearance: auto;\n}\n\nbody.alternate-font button,\nbody.alternate-font input,\nbody.alternate-font select,\nbody.alternate-font textarea {\n  font-family: "Inter", sans-serif;\n}\n\nbutton:focus,\ninput:focus {\n  outline: none;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ntextarea:-webkit-autofill,\ntextarea:-webkit-autofill:hover,\ntextarea:-webkit-autofill:focus,\nselect:-webkit-autofill,\nselect:-webkit-autofill:hover,\nselect:-webkit-autofill:focus {\n  background-color: white !important;\n  color: #32343C !important;\n  -webkit-text-fill-color: #32343C !important;\n  box-shadow: 0 0 0 1000px white inset !important;\n  -webkit-box-shadow: 0 0 0 1000px white inset !important;\n}\n\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n\n.mb-5 {\n  margin-bottom: 5px;\n}\n.mb-10 {\n  margin-bottom: 5px;\n}\n.mb-15 {\n  margin-bottom: 8px;\n}\n.mb-20 {\n  margin-bottom: 10px;\n}\n.mb-30 {\n  margin-bottom: 15px;\n}\n.mb-40 {\n  margin-bottom: 20px;\n}\n.mb-50 {\n  margin-bottom: 25px;\n}\n.mb-60 {\n  margin-bottom: 30px;\n}\n.mb-70 {\n  margin-bottom: 35px;\n}\n.mb-80 {\n  margin-bottom: 40px;\n}\n\n.mt-5 {\n  margin-top: 5px;\n}\n.mt-10 {\n  margin-top: 5px;\n}\n.mt-15 {\n  margin-top: 8px;\n}\n.mt-20 {\n  margin-top: 10px;\n}\n.mt-30 {\n  margin-top: 15px;\n}\n.mt-40 {\n  margin-top: 20px;\n}\n.mt-50 {\n  margin-top: 25px;\n}\n.mt-60 {\n  margin-top: 30px;\n}\n.mt-70 {\n  margin-top: 35px;\n}\n.mt-80 {\n  margin-top: 40px;\n}\n\n.mr-5 {\n  margin-right: 5px;\n}\n.mr-10 {\n  margin-right: 5px;\n}\n\n.ml-4 {\n  margin-left: 4px;\n}\n\n.ml-5 {\n  margin-left: 5px;\n}\n\n.ml-10 {\n  margin-left: 5px;\n}\n\n@media only screen and (min-width:1280px) {\n\t.mb-5 {\n    margin-bottom: 5px;\n  }\n\t.mb-10 {\n    margin-bottom: 10px;\n  }\n\t.mb-15 {\n    margin-bottom: 15px;\n  }\n  .mb-20 {\n    margin-bottom: 20px;\n  }\n  .mb-30 {\n    margin-bottom: 30px;\n  }\n  .mb-40 {\n    margin-bottom: 40px;\n  }\n  .mb-50 {\n    margin-bottom: 50px;\n  }\n  .mb-60 {\n    margin-bottom: 60px;\n  }\n  .mb-70 {\n    margin-bottom: 70px;\n  }\n  .mb-80 {\n    margin-bottom: 80px;\n  }\n\n  .mt-5 {\n    margin-top: 5px;\n  }\n  .mt-10 {\n    margin-top: 10px;\n  }\n  .mt-15 {\n    margin-top: 15px;\n  }\n  .mt-20 {\n    margin-top: 20px;\n  }\n  .mt-30 {\n    margin-top: 30px;\n  }\n  .mt-40 {\n    margin-top: 40px;\n  }\n  .mt-50 {\n    margin-top: 50px;\n  }\n  .mt-60 {\n    margin-top: 60px;\n  }\n  .mt-70 {\n    margin-top: 70px;\n  }\n  .mt-80 {\n    margin-top: 80px;\n  }\n}\n\n::selection {\n  background: #111111;\n  color: #ffffff;\n}\n',
            ]))
        );
      function j(e) {
        var t = e.theme,
          n = void 0 === t ? 'dark' : t,
          a = e.children;
        return (0, i.jsxs)(r.f6, { theme: y[n], children: [(0, i.jsx)(w, {}), (0, i.jsx)(o, { children: a })] });
      }
    },
    2447: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(7294),
        i = n(7911);
      function o() {
        var e = (0, r.useState)({ width: void 0, height: void 0 }),
          t = e[0],
          n = e[1];
        return (
          (0, r.useEffect)(function () {
            function e() {
              n({ width: window.innerWidth, height: window.innerHeight });
            }
            return (
              window.addEventListener('resize', e),
              e(),
              function () {
                return window.removeEventListener('resize', e);
              }
            );
          }, []),
          !!t.width && t.width <= i.Z.tablet
        );
      }
    },
    3886: function (e, t, n) {
      n.d(t, {
        V: function () {
          return i;
        },
      });
      var r = n(7294);
      var i = function (e) {
        var t = (0, r.useState)(e),
          n = t[0],
          i = t[1];
        return (
          (0, r.useEffect)(function () {
            var e = function (e) {
              var t, n, r;
              (
                (null === (t = 'http://localhost:3000,https://app.development.trac.co') ? void 0 : t.split(',')) || []
              ).includes(e.origin) &&
                'trac-editor' === (null === (n = e.data) || void 0 === n ? void 0 : n.origin) &&
                null !== (r = e.data) &&
                void 0 !== r &&
                r.payload &&
                i(
                  (function (e) {
                    try {
                      return JSON.parse(decodeURIComponent(escape(window.atob(e))));
                    } catch (t) {
                      return {};
                    }
                  })(e.data.payload)
                );
            };
            return (
              window.addEventListener('message', e, !1),
              (function () {
                try {
                  return window.self !== window.top;
                } catch (e) {
                  return !0;
                }
              })() && window.parent.postMessage({ origin: 'trac-artist-site', ready: !0 }, '*'),
              function () {
                window.removeEventListener('message', e);
              }
            );
          }, []),
          { pageData: n }
        );
      };
    },
    7911: function (e, t) {
      t.Z = {
        mobileS: 321,
        mobileM: 374,
        mobileL: 425,
        tablet: 769,
        laptopS: 1023,
        laptop: 1366,
        laptopL: 1439,
        laptopXL: 1600,
        desktop: 1919,
        desktopL: 2559,
      };
    },
    1389: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return $;
        },
      });
      var r = n(9499),
        i = n(5893);
      function o(e, t) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function c(e) {
        return (0, i.jsx)(
          'svg',
          a(
            a({ role: 'img', viewBox: '0 0 512 512' }, e),
            {},
            {
              children: (0, i.jsx)('path', {
                fill: e.fill,
                d: 'M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z',
              }),
            }
          )
        );
      }
      function l(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function p(e) {
        return (0, i.jsx)(
          'svg',
          s(
            s({ width: '15', height: '15', viewBox: '0 0 15 15' }, e),
            {},
            {
              children: (0, i.jsx)('path', {
                fill: e.fill,
                d: 'M14 6.1c-0.1 0-0.2 0-0.4 0 -1.4 0-2.6-0.7-3.4-1.8v6.2c0 2.5-2.1 4.6-4.6 4.6S1 13 1 10.4s2.1-4.6 4.6-4.6l0 0c0.1 0 0.2 0 0.3 0v2.3C5.8 8.1 5.7 8.1 5.6 8.1c-1.3 0-2.4 1-2.4 2.3 0 1.3 1.1 2.3 2.4 2.3 1.3 0 2.5-1 2.5-2.3L8.1 0h2.2c0.2 1.9 1.8 3.4 3.7 3.6L14 6.1',
              }),
            }
          )
        );
      }
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function h(e) {
        return (0, i.jsx)(
          'svg',
          d(
            d(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-hidden': 'true',
                focusable: 'false',
                role: 'img',
                viewBox: '0 0 576 512',
              },
              e
            ),
            {},
            {
              children: (0, i.jsx)('path', {
                fill: e.fill,
                d: 'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z',
              }),
            }
          )
        );
      }
      function f(e, t) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function b(e) {
        return (0, i.jsx)(
          'svg',
          g(
            g({ width: '24', height: '20', viewBox: '0 0 24 20' }, e),
            {},
            {
              children: (0, i.jsx)('path', {
                d: 'M24 2.5585C23.1075 2.95 22.1565 3.2095 21.165 3.3355C22.185 2.7265 22.9635 1.7695 23.3295 0.616C22.3785 1.183 21.3285 1.5835 20.2095 1.807C19.3065 0.8455 18.0195 0.25 16.6155 0.25C13.8915 0.25 11.6985 2.461 11.6985 5.1715C11.6985 5.5615 11.7315 5.9365 11.8125 6.2935C7.722 6.094 4.1025 4.1335 1.671 1.147C1.2465 1.8835 0.9975 2.7265 0.9975 3.634C0.9975 5.338 1.875 6.8485 3.183 7.723C2.3925 7.708 1.617 7.4785 0.96 7.117C0.96 7.132 0.96 7.1515 0.96 7.171C0.96 9.562 2.6655 11.548 4.902 12.0055C4.5015 12.115 4.065 12.1675 3.612 12.1675C3.297 12.1675 2.979 12.1495 2.6805 12.0835C3.318 14.032 5.127 15.4645 7.278 15.511C5.604 16.8205 3.4785 17.6095 1.1775 17.6095C0.774 17.6095 0.387 17.5915 0 17.542C2.1795 18.9475 4.7625 19.75 7.548 19.75C16.602 19.75 21.552 12.25 21.552 5.749C21.552 5.5315 21.5445 5.3215 21.534 5.113C22.5105 4.42 23.331 3.5545 24 2.5585Z',
                fill: e.fill,
              }),
            }
          )
        );
      }
      function m(e, t) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function x(e) {
        return (0, i.jsx)(
          'svg',
          y(
            y({ 'aria-hidden': 'true', role: 'img', viewBox: '0 0 512 512' }, e),
            {},
            {
              children: (0, i.jsx)('path', {
                fill: e.fill,
                d: 'M510.846 392.673c-5.211 12.157-27.239 21.089-67.36 27.318-2.064 2.786-3.775 14.686-6.507 23.956-1.625 5.566-5.623 8.869-12.128 8.869l-.297-.005c-9.395 0-19.203-4.323-38.852-4.323-26.521 0-35.662 6.043-56.254 20.588-21.832 15.438-42.771 28.764-74.027 27.399-31.646 2.334-58.025-16.908-72.871-27.404-20.714-14.643-29.828-20.582-56.241-20.582-18.864 0-30.736 4.72-38.852 4.72-8.073 0-11.213-4.922-12.422-9.04-2.703-9.189-4.404-21.263-6.523-24.13-20.679-3.209-67.31-11.344-68.498-32.15a10.627 10.627 0 0 1 8.877-11.069c69.583-11.455 100.924-82.901 102.227-85.934.074-.176.155-.344.237-.515 3.713-7.537 4.544-13.849 2.463-18.753-5.05-11.896-26.872-16.164-36.053-19.796-23.715-9.366-27.015-20.128-25.612-27.504 2.437-12.836 21.725-20.735 33.002-15.453 8.919 4.181 16.843 6.297 23.547 6.297 5.022 0 8.212-1.204 9.96-2.171-2.043-35.936-7.101-87.29 5.687-115.969C158.122 21.304 229.705 15.42 250.826 15.42c.944 0 9.141-.089 10.11-.089 52.148 0 102.254 26.78 126.723 81.643 12.777 28.65 7.749 79.792 5.695 116.009 1.582.872 4.357 1.942 8.599 2.139 6.397-.286 13.815-2.389 22.069-6.257 6.085-2.846 14.406-2.461 20.48.058l.029.01c9.476 3.385 15.439 10.215 15.589 17.87.184 9.747-8.522 18.165-25.878 25.018-2.118.835-4.694 1.655-7.434 2.525-9.797 3.106-24.6 7.805-28.616 17.271-2.079 4.904-1.256 11.211 2.46 18.748.087.168.166.342.239.515 1.301 3.03 32.615 74.46 102.23 85.934 6.427 1.058 11.163 7.877 7.725 15.859z',
              }),
            }
          )
        );
      }
      function w(e, t) {
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
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function v(e) {
        return (0, i.jsx)(
          'svg',
          j(
            j({ width: '13', height: '24', viewBox: '0 0 13 24' }, e),
            {},
            {
              children: (0, i.jsx)('path', {
                d: 'M12.1482 13.3981L12.8219 9.08738H8.60731V6.29126C8.60731 5.11165 9.19498 3.96116 11.0826 3.96116H13V0.291262C13 0.291262 11.2607 0 9.59863 0C6.12603 0 3.85845 2.06505 3.85845 5.80194V9.08738H0V13.3981H3.85845V23.8194C4.6331 23.9388 5.42557 24 6.23288 24C7.04018 24 7.83265 23.9388 8.60731 23.8194V13.3981H12.1482Z',
                fill: e.fill,
              }),
            }
          )
        );
      }
      function O(e, t) {
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
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function P(e) {
        return (0, i.jsxs)(
          'svg',
          C(
            C({ width: '22', height: '22', viewBox: '0 0 22 22' }, e),
            {},
            {
              children: [
                (0, i.jsxs)('g', {
                  clipPath: 'url(#clip0)',
                  children: [
                    (0, i.jsx)('path', {
                      d: 'M21.9947 22V21.9991H22.0002V13.9306C22.0002 9.98345 21.1504 6.94287 16.5359 6.94287C14.3176 6.94287 12.8289 8.1602 12.2212 9.31429H12.157V7.31137H7.78174V21.9991H12.3376V14.7263C12.3376 12.8114 12.7006 10.9597 15.072 10.9597C17.4086 10.9597 17.4434 13.145 17.4434 14.8491V22H21.9947Z',
                      fill: e.fill,
                    }),
                    (0, i.jsx)('path', { d: 'M0.362793 7.3125H4.92413V22.0003H0.362793V7.3125Z', fill: e.fill }),
                    (0, i.jsx)('path', {
                      d: 'M2.64183 0C1.18342 0 0 1.18342 0 2.64183C0 4.10025 1.18342 5.30842 2.64183 5.30842C4.10025 5.30842 5.28367 4.10025 5.28367 2.64183C5.28275 1.18342 4.09933 0 2.64183 0V0Z',
                      fill: e.fill,
                    }),
                  ],
                }),
                (0, i.jsx)('defs', {
                  children: (0, i.jsx)('clipPath', {
                    id: 'clip0',
                    children: (0, i.jsx)('rect', { width: '22', height: '22', fill: e.fill }),
                  }),
                }),
              ],
            }
          )
        );
      }
      function k(e, t) {
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
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function D(e) {
        return (0, i.jsxs)(
          'svg',
          Z(
            Z({ width: '26', height: '26', viewBox: '0 0 26 26' }, e),
            {},
            {
              children: [
                (0, i.jsx)('path', {
                  d: 'M12.9999 2.51258C16.4157 2.51258 16.8203 2.52563 18.1694 2.58718C19.4167 2.64411 20.094 2.85246 20.5449 3.02766C21.1005 3.23274 21.6032 3.55974 22.0158 3.98463C22.4407 4.39728 22.7677 4.8999 22.9728 5.45556C23.148 5.90634 23.3564 6.58371 23.4132 7.831C23.4748 9.18001 23.4878 9.58458 23.4878 13.0005C23.4878 16.4165 23.4748 16.821 23.4132 18.1701C23.3563 19.4174 23.1479 20.0947 22.9728 20.5455C22.7599 21.0972 22.434 21.5983 22.0158 22.0165C21.5977 22.4346 21.0966 22.7606 20.5449 22.9734C20.0941 23.1486 19.4167 23.357 18.1694 23.4139C16.8207 23.4754 16.4161 23.4885 12.9999 23.4885C9.58369 23.4885 9.17927 23.4754 7.83036 23.4139C6.58307 23.357 5.90575 23.1486 5.45492 22.9734C4.89926 22.7683 4.39664 22.4413 3.98399 22.0164C3.5591 21.6038 3.2321 21.1012 3.02702 20.5455C2.85182 20.0947 2.64341 19.4174 2.58654 18.1701C2.52499 16.8211 2.51194 16.4165 2.51194 13.0005C2.51194 9.58458 2.52499 9.18011 2.58654 7.831C2.64347 6.58371 2.85182 5.90639 3.02702 5.45556C3.23212 4.89988 3.55916 4.39723 3.98409 3.98458C4.39674 3.55969 4.89937 3.23269 5.45502 3.02761C5.9058 2.85241 6.58318 2.644 7.83046 2.58713C9.17947 2.52558 9.58404 2.51253 13 2.51253L12.9999 2.51258ZM13 0.20752C9.52565 0.20752 9.08984 0.222246 7.72555 0.284504C6.36385 0.34666 5.43395 0.562887 4.62023 0.879152C3.76662 1.20038 2.99336 1.70393 2.35437 2.3547C1.70345 2.99366 1.19975 3.76692 0.87841 4.62056C0.562398 5.43433 0.346172 6.36424 0.28427 7.72594C0.221758 9.09023 0.207031 9.52603 0.207031 13.0004C0.207031 16.4747 0.221758 16.9105 0.28427 18.2748C0.346426 19.6365 0.562652 20.5664 0.878918 21.3801C1.20014 22.2337 1.7037 23.007 2.35447 23.646C2.99346 24.2968 3.76672 24.8003 4.62033 25.1216C5.4341 25.4378 6.364 25.6541 7.72565 25.7162C9.09015 25.7785 9.5258 25.7932 13.0001 25.7932C16.4744 25.7932 16.9103 25.7785 18.2745 25.7162C19.6362 25.6541 20.5661 25.4378 21.3799 25.1216C22.2297 24.7929 23.0015 24.2903 23.6457 23.646C24.29 23.0017 24.7926 22.23 25.1213 21.3801C25.4375 20.5664 25.6538 19.6365 25.7159 18.2748C25.7782 16.9103 25.7929 16.4747 25.7929 13.0004C25.7929 9.52608 25.7782 9.09023 25.7159 7.72594C25.6538 6.36424 25.4375 5.43433 25.1213 4.62061C24.8001 3.76701 24.2965 2.99375 23.6457 2.35475C23.0067 1.70385 22.2334 1.20019 21.3797 0.878898C20.5659 0.562887 19.636 0.34666 18.2743 0.284758C16.91 0.222246 16.4742 0.20752 12.9999 0.20752H13Z',
                  fill: e.fill,
                }),
                (0, i.jsx)('path', {
                  d: 'M13 6.43066C11.7007 6.43066 10.4306 6.81595 9.35027 7.53779C8.26995 8.25964 7.42794 9.28563 6.93073 10.486C6.43351 11.6864 6.30342 13.0073 6.55689 14.2816C6.81037 15.5559 7.43604 16.7265 8.35477 17.6452C9.27351 18.5639 10.4441 19.1896 11.7184 19.4431C12.9927 19.6965 14.3136 19.5665 15.514 19.0692C16.7143 18.572 17.7403 17.73 18.4622 16.6497C19.184 15.5694 19.5693 14.2993 19.5693 13C19.5693 11.2577 18.8772 9.58676 17.6452 8.35477C16.4132 7.12279 14.7423 6.43066 13 6.43066ZM13 17.2642C12.1566 17.2642 11.3322 17.0141 10.6309 16.5456C9.92966 16.077 9.38311 15.411 9.06036 14.6318C8.73762 13.8526 8.65318 12.9952 8.81772 12.168C8.98227 11.3409 9.3884 10.581 9.98477 9.98468C10.5811 9.38832 11.341 8.98219 12.1681 8.81766C12.9953 8.65313 13.8527 8.73758 14.6319 9.06033C15.4111 9.38308 16.0771 9.92964 16.5456 10.6309C17.0142 11.3321 17.2643 12.1566 17.2643 13C17.2643 14.1309 16.815 15.2156 16.0153 16.0153C15.2156 16.815 14.1309 17.2642 13 17.2642Z',
                  fill: e.fill,
                }),
                (0, i.jsx)('path', {
                  d: 'M19.8291 7.70647C20.6769 7.70647 21.3642 7.01917 21.3642 6.17135C21.3642 5.32353 20.6769 4.63623 19.8291 4.63623C18.9812 4.63623 18.2939 5.32353 18.2939 6.17135C18.2939 7.01917 18.9812 7.70647 19.8291 7.70647Z',
                  fill: e.fill,
                }),
              ],
            }
          )
        );
      }
      n(7294);
      function S(e, t) {
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
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var M = function (e) {
        return (0, i.jsxs)(
          'svg',
          z(
            z({ width: '23', height: '15', viewBox: '0 0 23 15' }, e),
            {},
            {
              children: [
                (0, i.jsx)('rect', { y: '12', width: '5', height: '3' }),
                (0, i.jsx)('rect', { x: '12', y: '12', width: '5', height: '3' }),
                (0, i.jsx)('rect', { x: '12', y: '8', width: '5', height: '3' }),
                (0, i.jsx)('rect', { x: '6', y: '12', width: '5', height: '3' }),
                (0, i.jsx)('rect', { x: '6', y: '8', width: '5', height: '3' }),
                (0, i.jsx)('rect', { x: '6', y: '4', width: '5', height: '3' }),
                (0, i.jsx)('rect', { x: '18', y: '12', width: '5', height: '3' }),
                (0, i.jsx)('rect', { x: '18', y: '8', width: '5', height: '3' }),
                (0, i.jsx)('rect', { x: '18', width: '5', height: '3' }),
                (0, i.jsx)('rect', { x: '18', y: '4', width: '5', height: '3' }),
              ],
            }
          )
        );
      };
      function L(e, t) {
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
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var E = function (e) {
        return (0, i.jsx)(
          'svg',
          B(
            B({ width: '14', height: '16', viewBox: '0 0 14 16' }, e),
            {},
            {
              children: (0, i.jsx)('path', {
                d: 'M14 5.4C13.7 2.4 11 0 7.8 0H0v16h4c0.6 0 1-0.4 1-1v-3h3c1.7 0 3.3-0.7 4.4-2C13.6 8.8 14.1 7.1 14 5.4z',
              }),
            }
          )
        );
      };
      function N(e, t) {
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
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var _ = function (e) {
        return (0, i.jsx)(
          'svg',
          H(
            H({ width: '24', height: '17', viewBox: '0 0 24 17' }, e),
            {},
            {
              children: (0, i.jsx)('path', {
                fill: e.fill,
                d: 'M16 12l-4 4 -4-4 4-4L16 12zM4 0L0 4l4 4 4-4L4 0zM12 0L8 4l4 4 4-4L12 0zM20 0l-4 4 4 4 4-4L20 0z',
              }),
            }
          )
        );
      };
      function I(e, t) {
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
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var F = function (e) {
        return (0, i.jsx)(
          'svg',
          V(
            V({ width: '24', height: '24', viewBox: '0 0 24 24' }, e),
            {},
            {
              children: (0, i.jsx)('path', {
                fill: e.fill,
                d: 'M12 0C5.4 0 0 5.4 0 12c0 6.6 5.4 12 12 12 6.6 0 12-5.4 12-12C24 5.4 18.6 0 12 0zM17.5 17.3c-0.2 0.4-0.7 0.5-1 0.2 -2.8-1.7-6.4-2.1-10.5-1.2 -0.4 0.1-0.8-0.2-0.9-0.6 -0.1-0.4 0.2-0.8 0.6-0.9 4.6-1 8.5-0.6 11.7 1.3C17.6 16.5 17.7 17 17.5 17.3zM19 14c-0.3 0.4-0.8 0.6-1.3 0.3 -3.2-2-8.1-2.6-12-1.4 -0.5 0.1-1-0.1-1.2-0.6 -0.1-0.5 0.1-1 0.6-1.2 4.4-1.3 9.8-0.7 13.5 1.6C19.1 13 19.2 13.6 19 14zM19.1 10.6C15.2 8.3 8.8 8.1 5.2 9.3 4.6 9.4 3.9 9.1 3.8 8.5 3.6 7.9 3.9 7.3 4.5 7.1c4.2-1.3 11.3-1 15.7 1.6 0.5 0.3 0.7 1 0.4 1.5C20.3 10.8 19.6 11 19.1 10.6z',
              }),
            }
          )
        );
      };
      function A(e, t) {
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
      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var R = function (e) {
        return (0, i.jsxs)(
          'svg',
          W(
            W({ width: '16', height: '16', viewBox: '0 0 16 16' }, e),
            {},
            {
              children: [
                (0, i.jsx)('path', { fill: e.fill, d: 'M9.7 11.6c-0.5 0.5-1 0.8-1.7 1 -0.6-0.2-1.2-0.6-1.7-1H9.7z' }),
                (0, i.jsx)('path', {
                  fill: e.fill,
                  d: 'M14.6 4.4l0-2.4c-0.6 0-1.1 0.1-1.6 0.3C11.7 0.9 10 0 8 0 6 0 4.3 0.9 3 2.3 2.5 2.2 2 2.1 1.4 2.1v2.4C0.6 5 0 6 0 7.1c0 1.1 0.6 2.1 1.4 2.7C1.8 13.3 4.6 16 8 16c3.4 0 6.2-2.7 6.6-6.1l0-0.1C15.4 9.3 16 8.3 16 7.1 16 6 15.4 5 14.6 4.4zM8 1.3c1.4 0 2.7 0.6 3.7 1.5C11.5 3 11.2 3.1 11 3.2c-0.9-0.5-1.9-0.8-3-0.8 -1.1 0-2.1 0.3-3 0.8C4.8 3.1 4.5 3 4.3 2.8 5.3 1.9 6.6 1.3 8 1.3zM13.3 8.8v0.3c0 3.1-2.4 5.6-5.3 5.6 -2.9 0-5.3-2.5-5.3-5.5V8.9l0-5.3C3.5 3.8 4.3 4.3 5 4.8c0.9-0.6 1.9-1 3-1 1.1 0 2.2 0.4 3 1 0.6-0.6 1.4-1 2.2-1.2L13.3 8.8z',
                }),
                (0, i.jsx)('path', {
                  fill: e.fill,
                  d: 'M9.5 13.5C9.1 13.8 8.6 14 8 14c-0.6 0-1.1-0.2-1.5-0.5 0 0 0-0.2 0.1-0.3 0.1-0.2 0.2-0.2 0.2-0.2 0.4 0.1 0.8 0.2 1.2 0.2 0.4 0 0.8-0.1 1.2-0.2 0 0 0.1 0.1 0.2 0.3C9.5 13.4 9.5 13.5 9.5 13.5z',
                }),
                (0, i.jsx)('path', {
                  fill: e.fill,
                  d: 'M6.4 9.1c0.7 0.1 1.1 0.8 1.3 1.8 0 0-1.1 0-1.9 0 -0.3 0-0.7-0.1-0.8-0.2C4.1 10.1 4.1 9.3 4.1 9 4.1 9 5.5 9 6.4 9.1z',
                }),
                (0, i.jsx)('path', {
                  fill: e.fill,
                  d: 'M9.6 9.1c-0.7 0.1-1.1 0.8-1.3 1.8 0 0 1.1 0 1.9 0 0.3 0 0.7-0.1 0.8-0.2 0.8-0.5 0.8-1.3 0.8-1.6C11.9 9 10.5 9 9.6 9.1z',
                }),
              ],
            }
          )
        );
      };
      function Y(e, t) {
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
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Y(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Y(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var T = function (e) {
        return (0, i.jsxs)(
          'svg',
          X(
            X({ width: '20', height: '24', viewBox: '0 0 20 24' }, e),
            {},
            {
              children: [
                (0, i.jsx)('path', {
                  fill: e.fill,
                  d: 'M19.6 18.7c-0.4 0.8-0.8 1.6-1.3 2.3 -0.7 1-1.2 1.6-1.6 2C16 23.6 15.3 24 14.5 24c-0.5 0-1.2-0.2-2-0.5 -0.8-0.3-1.5-0.5-2.1-0.5 -0.7 0-1.4 0.2-2.2 0.5C7.6 23.8 6.9 24 6.5 24c-0.7 0-1.4-0.3-2.2-1 -0.5-0.4-1-1.1-1.7-2.1 -0.7-1-1.3-2.3-1.8-3.7C0.3 15.8 0 14.4 0 12.9c0-1.6 0.3-3 1-4.2 0.5-0.9 1.3-1.7 2.2-2.2C4.1 6 5.1 5.8 6.1 5.7c0.6 0 1.3 0.2 2.3 0.5 0.9 0.4 1.5 0.5 1.8 0.5 0.2 0 0.9-0.2 2-0.6 1.1-0.4 2-0.5 2.7-0.5 2 0.2 3.5 1 4.5 2.4 -1.8 1.1-2.7 2.6-2.7 4.6 0 1.5 0.6 2.8 1.6 3.8 0.5 0.5 1 0.8 1.6 1.1C19.9 18 19.7 18.3 19.6 18.7L19.6 18.7z',
                }),
                (0, i.jsx)('path', {
                  fill: e.fill,
                  d: 'M15 0.5c0 1.2-0.4 2.3-1.3 3.4 -1 1.2-2.3 1.9-3.7 1.8 0-0.1 0-0.3 0-0.5 0-1.2 0.5-2.4 1.4-3.4 0.4-0.5 1-0.9 1.7-1.3C13.7 0.2 14.4 0 15 0 15 0.2 15 0.3 15 0.5L15 0.5z',
                }),
              ],
            }
          )
        );
      };
      function J(e, t) {
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
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? J(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var U = function (e) {
        return (0, i.jsxs)(
          'svg',
          q(
            q({ width: '24', height: '17', viewBox: '0 0 24 15' }, e),
            {},
            {
              children: [
                (0, i.jsx)('path', {
                  fill: e.fill,
                  d: 'M22.3 9.8c-0.8 0-1.8 0.2-2.5 0.7 -0.2 0.2-0.2 0.4 0 0.4 0.8-0.1 2.6-0.4 3 0.1 0.3 0.4-0.4 2.2-0.7 3 -0.1 0.3 0.1 0.3 0.3 0.2 1.4-1.2 1.7-3.7 1.5-4C23.8 9.9 23.1 9.8 22.3 9.8z',
                }),
                (0, i.jsx)('path', {
                  fill: e.fill,
                  d: 'M0.3 10.4c1.6 0.9 3.4 1.6 5.1 2.2 1.8 0.5 3.5 0.9 5.3 1 1.8 0.1 3.6-0.1 5.4-0.5 1.8-0.4 3.5-0.9 5.2-1.7l0 0c0.2-0.1 0.4 0 0.5 0.2 0.1 0.2 0 0.4-0.1 0.5 -1.6 1.2-3.4 2-5.3 2.5 -1.9 0.5-3.8 0.7-5.8 0.5 -1.9-0.1-3.8-0.6-5.6-1.3 -1.8-0.7-3.5-1.7-5-3C0 10.6 0 10.5 0 10.4 0.1 10.3 0.2 10.3 0.3 10.4L0.3 10.4z',
                }),
                (0, i.jsx)('path', {
                  fill: e.fill,
                  d: 'M21.7 3.3c0.5-0.3 1.1-0.2 1.6 0.2V2.6c-0.2-0.1-0.3-0.2-0.5-0.3 -0.5-0.1-1-0.1-1.5 0.1 -1 0.4-1.4 1.5-1.4 2.4 0 0.4 0.1 0.9 0.3 1.3 0.2 0.4 0.5 0.9 1 1.1 0.4 0.3 1 0.3 1.4 0.3 0.3 0 0.5-0.1 0.8-0.2V6.6c-0.6 0.1-1.3 0.1-1.7-0.2 -0.5-0.3-0.7-0.9-0.7-1.6C20.9 4.2 21.2 3.6 21.7 3.3z',
                }),
                (0, i.jsx)('path', {
                  fill: e.fill,
                  d: 'M16.1 4.7c-0.3-0.2-0.6-0.2-0.8-0.3 -0.2-0.1-0.9-0.2-0.9-0.8 0-0.2 0.2-0.4 0.4-0.4 0.6-0.2 1.3 0 1.9 0.3V2.6c-0.7-0.3-1.5-0.5-2.2-0.2 -0.6 0.2-1.1 0.7-1.2 1.1 -0.1 0.9 0.5 1.4 0.8 1.5 0.3 0.2 0.6 0.2 0.8 0.3 0.5 0.1 0.8 0.3 0.9 0.4C16 5.8 16 5.9 16 6.1s0 0.3-0.2 0.3c-0.3 0.2-0.8 0.2-1.2 0.2 -0.4 0-1-0.2-1.5-0.4v0.8c0.4 0.3 0.9 0.4 1.4 0.5 0.6 0.1 1.1 0.1 1.8-0.2C16.6 7.2 17 6.9 17 6.1 17 5.2 16.4 4.9 16.1 4.7z',
                }),
                (0, i.jsx)('path', {
                  fill: e.fill,
                  d: 'M7.2 4c0-0.1 0-0.2 0-0.3C7.1 3.2 6.8 2.8 6.4 2.6 6 2.4 5.5 2.3 5.1 2.5 4.7 2.6 4.3 2.8 3.9 2.9 3.8 2.8 3.6 2.7 3.5 2.6 3.1 2.4 2.6 2.3 2.2 2.5 2 2.6 1.7 2.7 1.4 2.8V2.3H0.4v5.3h1.1V3.6c0.4-0.1 0.7-0.2 1.1-0.3 0.4-0.1 0.7 0.2 0.7 0.5l0 3.6h1.1l0-1.9 0-0.9 0-0.5 0-0.2c0-0.1 0-0.2 0-0.3C4.7 3.6 5 3.5 5.4 3.4c0.4-0.1 0.7 0.2 0.7 0.5l0 3.6h1.1l0-1.9 0-0.9 0-0.5L7.2 4z',
                }),
                (0, i.jsx)('path', {
                  fill: e.fill,
                  d: 'M11.2 6.3c-0.2 0.1-0.3 0.1-0.5 0.2 -0.3 0.1-0.4 0.1-0.6 0.1C9.7 6.5 9.4 6.1 9.4 5.9c0-0.5 0-1.2 0-1.8l0-1.8 -1.1 0 0 1.8c0 0.6 0 1.2 0 1.8 0 0.5 0.3 0.9 0.6 1.1C9.2 7.3 9.6 7.5 10 7.5c0.4 0 0.8-0.1 1.1-0.3 0 0 0.1 0 0.1-0.1v0.2h1.1V2.3h-1.1V6.3z',
                }),
                (0, i.jsx)('rect', { fill: e.fill, x: '17.7', y: '2.3', width: '1.1', height: '5.3' }),
                (0, i.jsx)('ellipse', { fill: e.fill, cx: '18.2', cy: '0.8', rx: '0.7', ry: '0.8' }),
              ],
            }
          )
        );
      };
      function G(e, t) {
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
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? G(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : G(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var Q = function (e) {
        return (0, i.jsx)(
          'svg',
          K(
            K({ viewBox: '0 0 32 14', width: '32', height: '14' }, e),
            {},
            {
              children: (0, i.jsx)('path', {
                fill: e.fill,
                d: 'M0.4 8.4c-0.1 0-0.1 0.1-0.1 0.1L0 10.3 0.2 12c0 0.1 0.1 0.1 0.1 0.1 0.1 0 0.1-0.1 0.1-0.1v0 0l0.3-1.8L0.5 8.5C0.5 8.4 0.4 8.4 0.4 8.4L0.4 8.4zM1.7 7.4c0-0.1-0.1-0.1-0.1-0.1 -0.1 0-0.1 0.1-0.1 0.1 0 0-0.3 2.9-0.3 2.9l0.3 2.8c0 0.1 0.1 0.1 0.1 0.1 0.1 0 0.1-0.1 0.1-0.1L2 10.3 1.7 7.4 1.7 7.4zM6.6 4.7C6.5 4.7 6.4 4.8 6.4 5l-0.3 5.3 0.3 3.4c0 0.1 0.1 0.2 0.2 0.2 0.1 0 0.2-0.1 0.2-0.2v0l0.3-3.4L6.9 5C6.9 4.8 6.8 4.7 6.6 4.7zM4.1 6.6C4 6.6 3.9 6.7 3.9 6.8l-0.3 3.5 0.3 3.4c0 0.1 0.1 0.2 0.2 0.2 0.1 0 0.2-0.1 0.2-0.2l0.3-3.4L4.3 6.8C4.3 6.7 4.2 6.6 4.1 6.6zM9.2 14c0.2 0 0.3-0.1 0.3-0.3l0.2-3.4L9.5 3.2c0-0.2-0.1-0.3-0.3-0.3C9.1 2.9 9 3 8.9 3.2l-0.2 7.1 0.2 3.4C9 13.8 9.1 14 9.2 14zM14.6 14c0.2 0 0.4-0.2 0.4-0.4v0 0l0.2-3.3L15 2.1c0-0.2-0.2-0.4-0.4-0.4 -0.2 0-0.4 0.2-0.4 0.4L14 10.3c0 0 0.2 3.3 0.2 3.3C14.2 13.8 14.4 14 14.6 14zM11.9 14c0.2 0 0.3-0.2 0.4-0.4v0l0.2-3.3 -0.2-7.1c0-0.2-0.2-0.4-0.4-0.4 -0.2 0-0.3 0.2-0.4 0.4l-0.2 7.1 0.2 3.3C11.5 13.8 11.7 14 11.9 14L11.9 14zM5.4 13.9c0.1 0 0.2-0.1 0.2-0.2l0.3-3.4L5.6 7c0-0.1-0.1-0.2-0.2-0.2C5.2 6.8 5.1 6.9 5.1 7l-0.3 3.3 0.3 3.4C5.1 13.9 5.2 13.9 5.4 13.9zM2.8 13.8c0.1 0 0.2-0.1 0.2-0.2l0.3-3.3L3 6.9c0-0.1-0.1-0.2-0.2-0.2 -0.1 0-0.2 0.1-0.2 0.2l-0.3 3.4 0.3 3.3C2.7 13.7 2.7 13.8 2.8 13.8L2.8 13.8zM13.2 3c-0.2 0-0.4 0.2-0.4 0.4l-0.2 6.9 0.2 3.3c0 0.2 0.2 0.4 0.4 0.4 0.2 0 0.4-0.2 0.4-0.4v0l0.2-3.3 -0.2-6.9C13.6 3.2 13.4 3 13.2 3L13.2 3zM7.9 14c0.1 0 0.3-0.1 0.3-0.3l0.3-3.4L8.2 3.7c0-0.2-0.1-0.3-0.3-0.3 -0.1 0-0.3 0.1-0.3 0.3l-0.2 6.5 0.2 3.4C7.7 13.9 7.8 14 7.9 14zM10.9 13.7L10.9 13.7l0.2-3.4L10.9 3c0-0.2-0.1-0.3-0.3-0.3 -0.2 0-0.3 0.1-0.3 0.3L10 10.3l0.2 3.4c0 0.2 0.1 0.3 0.3 0.3C10.7 14 10.9 13.8 10.9 13.7L10.9 13.7 10.9 13.7zM28.1 6.1c-0.5 0-1.1 0.1-1.5 0.3C26.2 2.8 23.3 0 19.6 0c-0.9 0-1.8 0.2-2.5 0.5 -0.3 0.1-0.4 0.2-0.4 0.5v12.6c0 0.2 0.2 0.4 0.4 0.5 0 0 10.8 0 10.9 0 2.2 0 3.9-1.8 3.9-4C32 7.8 30.2 6.1 28.1 6.1L28.1 6.1zM15.9 0.9c-0.2 0-0.4 0.2-0.4 0.4l-0.2 8.9 0.2 3.2c0 0.2 0.2 0.4 0.4 0.4 0.2 0 0.4-0.2 0.4-0.4v0l0.2-3.2 -0.2-8.9C16.4 1.1 16.2 0.9 15.9 0.9L15.9 0.9z',
              }),
            }
          )
        );
      };
      function $(e) {
        switch (e) {
          case 'facebook':
            return (0, i.jsx)(v, {});
          case 'twitter':
            return (0, i.jsx)(b, {});
          case 'instagram':
            return (0, i.jsx)(D, {});
          case 'linkedin':
            return (0, i.jsx)(P, {});
          case 'youtube':
            return (0, i.jsx)(h, {});
          case 'tiktok':
            return (0, i.jsx)(p, {});
          case 'snapchat':
            return (0, i.jsx)(x, {});
          case 'amazonMusic':
          case 'amazon':
            return (0, i.jsx)(U, {});
          case 'appleMusic':
          case 'apple':
            return (0, i.jsx)(T, {});
          case 'napster':
            return (0, i.jsx)(R, {});
          case 'spotify':
            return (0, i.jsx)(F, {});
          case 'tidal':
            return (0, i.jsx)(_, {});
          case 'soundcloud':
            return (0, i.jsx)(Q, {});
          case 'deezer':
            return (0, i.jsx)(M, {});
          case 'pandora':
            return (0, i.jsx)(E, {});
          default:
            return (0, i.jsx)(c, {});
        }
      }
    },
  },
]);
