'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [227],
  {
    2163: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return f;
        },
      });
      var r = t(186),
        o = t(5343),
        i = t(2809),
        a = t(6805),
        c = t(5893);
      function l(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function s(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(t), !0).forEach(function (e) {
                (0, i.Z)(n, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
              });
        }
        return n;
      }
      function p(n) {
        return (0, c.jsx)(m, {
          initial: 'rest',
          whileHover: 'hover',
          whileTap: 'tap',
          animate: 'rest',
          children: (0, c.jsxs)(
            'svg',
            s(
              s({ width: '40', height: '40', viewBox: '0 0 50 50' }, n),
              {},
              {
                children: [
                  (0, c.jsx)(g, { cx: '25', cy: '25', r: '25' }),
                  (0, c.jsx)(d, {
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
      var m = (0, r.ZP)(a.ww.div).withConfig({ displayName: 'back__IconWrapper', componentId: 'om8no8-0' })(
          ['cursor:pointer;width:40px;height:40px;&:hover{circle{fill:', ';}}'],
          function (n) {
            return n.theme.colors.itemBackgroundHover;
          }
        ),
        g = r.ZP.circle.withConfig({ displayName: 'back__StyledCircle', componentId: 'om8no8-1' })(
          ['fill:', ';transition:fill ', ';'],
          function (n) {
            return n.theme.colors.itemBackground;
          },
          function (n) {
            var e = n.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          }
        ),
        d = (0, r.ZP)(a.ww.path).withConfig({ displayName: 'back__StyledPath', componentId: 'om8no8-2' })(
          ['fill:', ';'],
          function (n) {
            return n.theme.colors.icon;
          }
        ),
        u = t(1163);
      function f(n) {
        var e = n.artistName,
          t = n.title,
          r = n.onClick,
          o = (0, u.useRouter)();
        return (0, c.jsxs)(b, {
          alignItems: 'center',
          children: [
            (0, c.jsx)(p, {
              onClick:
                r ||
                function () {
                  return o.back();
                },
            }),
            (0, c.jsx)(h, { children: t || e }),
          ],
        });
      }
      var b = (0, r.ZP)(o.Z).withConfig({
          displayName: 'back-navigation__NavigationContainer',
          componentId: 'kfmxgl-0',
        })(['margin-bottom:30px;@media (max-width:', '){margin-bottom:15px;}'], function (n) {
          var e = n.theme;
          return ''.concat(e.breakpoints.tablet, 'px');
        }),
        h = r.ZP.h6.withConfig({ displayName: 'back-navigation__Title', componentId: 'kfmxgl-1' })(
          ['font-size:14px;font-weight:700;text-transform:uppercase;margin-left:18px;opacity:0.7;color:', ';'],
          function (n) {
            return n.theme.colors.primary;
          }
        );
    },
    2872: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return i;
        },
      });
      var r = t(186),
        o = t(5893);
      function i(n) {
        var e = n.className,
          t = n.children,
          r = n.columnFlow,
          i = n.hasBackground;
        return (0, o.jsx)(a, { className: e || '', columnFlow: r, hasBackground: i, children: t });
      }
      var a = r.ZP.div.withConfig({ displayName: 'container__StyledContainer', componentId: 'u3fn7h-0' })(
        ['max-width:535px;margin:auto;display:flex;flex-flow:row wrap;', ' ', ''],
        function (n) {
          return n.columnFlow && (0, r.iv)(['flex-flow:column wrap;']);
        },
        function (n) {
          return (
            n.hasBackground &&
            (0, r.iv)(['background-color:', ';border-radius:4px;'], function (n) {
              return n.theme.colors.itemBackground;
            })
          );
        }
      );
    },
    5343: function (n, e, t) {
      t(7294);
      var r = t(186),
        o = t(5893);
      e.Z = (0, r.ZP)(function (n) {
        return (0, o.jsx)('div', {
          className: n.className,
          onClick: function (e) {
            return n.onClick ? n.onClick(e) : null;
          },
          children: n.children || '',
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
        function (n) {
          return n.justifyContent || 'flex-start';
        },
        function (n) {
          return n.flexDirection || 'row';
        },
        function (n) {
          return n.flexGrow || 0;
        },
        function (n) {
          return n.flexBasis || 'auto';
        },
        function (n) {
          return n.flexShrink || 1;
        },
        function (n) {
          return n.flexWrap || 'nowrap';
        },
        function (n) {
          return n.flex || ' 0 1 auto';
        },
        function (n) {
          return n.alignItems || 'stretch';
        }
      );
    },
    6747: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return C;
        },
      });
      var r = t(186),
        o = (t(7294), t(1664)),
        i = t(2809),
        a = t(5893);
      function c(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function l(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(t), !0).forEach(function (e) {
                (0, i.Z)(n, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
              });
        }
        return n;
      }
      function s(n) {
        return (0, a.jsxs)(
          'svg',
          l(
            l({ width: '60', height: '24', viewBox: '0 0 60 24' }, n),
            {},
            {
              children: [
                (0, a.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M5.14128 9.37417V15.9604C5.14128 18.3661 5.56253 18.9229 7.76148 18.9229C8.44017 18.9229 10.4129 18.8888 10.8328 18.8888L10.0573 23.2443C9.66905 23.2443 7.82619 23.2809 7.11492 23.2809C1.29266 23.2809 0 21.746 0 16.0652V0.802073L5.14128 0V5.01815H11.0278L10.2509 9.37417H5.14128Z',
                }),
                (0, a.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M18.5454 23.2805H13.4785V11.7879C13.4785 6.54859 15.9007 4.90643 20.6813 4.90643C21.9245 4.90643 22.9764 4.87173 24.5063 4.97582L23.7407 9.48248C23.3581 9.44729 22.18 9.41309 21.191 9.41309C18.8647 9.41309 18.5454 10.2865 18.5454 12.3807V23.2805Z',
                }),
                (0, a.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M30.7256 17.4678C30.7256 18.8364 31.3128 19.3948 33.14 19.3948H36.6006V17.3649C36.6006 15.9283 36.1101 15.2616 33.7939 15.2616H33.3368C31.2795 15.2616 30.7256 15.7892 30.7256 17.2229V17.4678ZM41.6605 19.6739C41.6605 22.4052 40.68 23.2805 37.9382 23.2805H32.1609C27.3302 23.2805 25.7314 21.2477 25.7314 17.7842V17.049C25.7314 13.1622 27.8855 11.5169 32.3572 11.5169C34.5433 11.5169 35.7516 11.9377 36.6321 12.4623V12.0768C36.6321 10.1518 36.2088 9.20692 33.3687 9.20692C31.9001 9.20692 29.1587 9.17115 27.2316 9.27646L27.9828 4.97043C29.256 4.93466 31.1813 4.90088 33.6957 4.90088C39.1465 4.90088 41.6605 6.75534 41.6605 11.5169V19.6739Z',
                }),
                (0, a.jsx)('mask', {
                  id: 'mask0',
                  'mask-type': 'alpha',
                  maskUnits: 'userSpaceOnUse',
                  x: '45',
                  y: '4',
                  width: '15',
                  height: '20',
                  children: (0, a.jsx)('path', { d: 'M45.3359 4.90088H59.3604V23.8892H45.3359V4.90088Z' }),
                }),
                (0, a.jsx)('g', {
                  mask: 'url(#mask0)',
                  children: (0, a.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M59.2917 4.97845L58.4804 9.51691C56.9253 9.40805 56.1164 9.40805 54.2564 9.40805C51.4522 9.40805 50.7756 9.98455 50.7756 13.4426V15.3515C50.7756 18.8095 51.5188 19.3845 54.2564 19.3845C56.1826 19.3845 57.5008 19.4192 59.3608 19.3139L58.549 23.8156C56.7575 23.8539 55.1013 23.8892 54.1216 23.8892C47.4981 23.8892 45.3359 21.5484 45.3359 15.3515V13.4426C45.3359 7.28346 47.6664 4.9069 54.0554 4.9069C55.272 4.9069 56.7244 4.8701 59.2917 4.97845Z',
                  }),
                }),
              ],
            }
          )
        );
      }
      function p(n) {
        var e = n.children,
          t = n.removeBranding,
          o = (0, r.Fg)();
        return (0, a.jsxs)(m, {
          children: [
            t
              ? null
              : (0, a.jsx)(g, {
                  children: (0, a.jsx)(d, {
                    href: '/',
                    children: (0, a.jsx)('a', { children: (0, a.jsx)(s, { fill: o.colors.logo }) }),
                  }),
                }),
            e,
          ],
        });
      }
      var m = r.ZP.div.withConfig({ displayName: 'page__StyledLayout', componentId: 'qan11h-0' })(
          [
            'background-color:',
            ';min-width:100vw;min-height:100vh;padding:24px;@media (max-width:',
            '){padding:16px;}',
          ],
          function (n) {
            return n.theme.colors.background;
          },
          function (n) {
            var e = n.theme;
            return ''.concat(e.breakpoints.mobileL, 'px');
          }
        ),
        g = r.ZP.div.withConfig({ displayName: 'page__LogoWrapper', componentId: 'qan11h-1' })([
          'margin-bottom:10px;height:24px;',
        ]),
        d = (0, r.ZP)(o.default).withConfig({ displayName: 'page__StyledLink', componentId: 'qan11h-2' })([
          'height:24px;',
        ]),
        u = {
          grays: {
            gray1: '#181818',
            gray2: '#2d2f33',
            gray25: '#3B3D42',
            gray3: '#8e8e8e',
            gray4: '#bababa',
            gray5: '#dedede',
            gray6: '#eaeaea',
            gray7: '#676767',
            gray8: '#999999',
            gray85: '#d9d9d9',
            gray9: '#f0f0f0',
          },
          white: '#FFFFFF',
          black: '#111111',
          reds: { red1: '#ED3438', red2: '#D82F32', red3: '#ed0a0f' },
          green: { green1: '#a2d76b' },
        },
        f = {
          primary: u.white,
          primaryHover: u.grays.gray8,
          secondary: u.grays.gray4,
          secondaryHover: u.grays.gray3,
          accent: u.reds.red1,
          accentHover: u.reds.red2,
          success: u.green.green1,
          error: u.reds.red3,
          background: u.grays.gray1,
          logo: u.reds.red1,
          inputsBackground: u.grays.gray2,
          highLightBackground: u.white,
          highLightPlay: u.reds.red1,
          highLightPrimary: u.grays.gray1,
          highLightSecondary: u.grays.gray7,
          inputsBackgroundHover: u.black,
          icon: u.white,
          itemBackground: u.grays.gray25,
          itemBackgroundHover: u.grays.gray2,
        },
        b = {
          primary: u.grays.gray1,
          primaryHover: u.black,
          secondary: u.grays.gray7,
          secondaryHover: u.grays.gray7,
          accent: u.reds.red1,
          accentHover: u.reds.red2,
          success: u.green.green1,
          error: u.reds.red3,
          background: u.white,
          logo: u.reds.red1,
          inputsBackground: u.grays.gray5,
          highLightBackground: u.black,
          highLightPlay: u.grays.gray2,
          highLightPrimary: u.white,
          highLightSecondary: u.grays.gray4,
          inputsBackgroundHover: u.grays.gray4,
          icon: u.grays.gray2,
          itemBackground: u.grays.gray9,
          itemBackgroundHover: u.grays.gray85,
        },
        h = t(2400);
      function x(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function y(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? x(Object(t), !0).forEach(function (e) {
                (0, i.Z)(n, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
              });
        }
        return n;
      }
      var w,
        k = {
          fontFamily: "'Inter', sans-serif;",
          palette: y({}, u),
          transitions: y(
            {},
            { duration: '.275s', type: 'ease-in-out', curve: 'cubic-bezier(0.650, 0.000, 0.450, 1.000)' }
          ),
          sizes: y(
            {},
            {
              socialIconSize: '48px',
              commonIconSize: '44px',
              coverSize: '60px',
              coverSizeSmall: '40px',
              coverSizeMobile: '48px',
              coverSizeRounded: '200px',
              coverSizeRoundedMobile: '130px',
            }
          ),
          shadows: y({}, { redShadow: '10px 10px 20px rgba(237, 52, 56, 0.3);' }),
        },
        v = {
          light: y(y({}, k), {}, { colors: y({}, b), breakpoints: y({}, h.Z) }),
          dark: y(y({}, k), {}, { colors: y({}, f), breakpoints: y({}, h.Z) }),
        },
        j = t(2209),
        O = (0, r.vJ)(
          w ||
            (w = (0, j.Z)([
              '\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #F1F2F5;\n  color: #32343c;\n  font-size: 16px;\n  font: 400 16px "Inter", sans-serif;\n  font-family: \'Inter\', sans-serif;\n  text-rendering: geometricPrecision;\n  font-feature-settings: "pnum";\n  font-variant-numeric: proportional-nums;\n  font-weight: normal;\n  min-width: 320px;\n  margin: 0;\n  padding: 0;\n  font-stretch: normal;\n  font-style: normal;\n  overscroll-behavior: none;\n}\n\nbody.alternate-font {\n  background-color: white;\n  font: 400 16px "Inter", sans-serif;\n  font-family: "Inter", sans-serif;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  font-weight: 700;\n  position: relative;\n}\n\na.link-line {\n  display: inline-flex;\n}\n\na.link-line.red {\n  color: #ED3438;\n}\n\na.link-line:after {\n  content: \'\';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 100%;\n  width: 0%;\n  height: 2px;\n  background-color: #32343c;\n  border-radius: 2px;\n  transition: width .25s ease-in-out, right .25s ease-in-out;\n}\na.link-line.red:after {\n  background-color: #ED3438;\n}\n\na.link-line:hover:after {\n  right: 0;\n  width: 100%;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  -webkit-appearance: none;\n  filter: none;\n  border: none;\n  outline: none;\n  font-family: "Sen", sans-serif;\n}\n\ndiv[data-consent-manager-dialog] input {\n  -webkit-appearance: auto;\n}\n\nbody.alternate-font button,\nbody.alternate-font input,\nbody.alternate-font select,\nbody.alternate-font textarea {\n  font-family: "Inter", sans-serif;\n}\n\nbutton:focus,\ninput:focus {\n  outline: none;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ntextarea:-webkit-autofill,\ntextarea:-webkit-autofill:hover,\ntextarea:-webkit-autofill:focus,\nselect:-webkit-autofill,\nselect:-webkit-autofill:hover,\nselect:-webkit-autofill:focus {\n  background-color: white !important;\n  color: #32343C !important;\n  -webkit-text-fill-color: #32343C !important;\n  box-shadow: 0 0 0 1000px white inset !important;\n  -webkit-box-shadow: 0 0 0 1000px white inset !important;\n}\n\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n\n.mb-5 {\n  margin-bottom: 5px;\n}\n.mb-10 {\n  margin-bottom: 5px;\n}\n.mb-15 {\n  margin-bottom: 8px;\n}\n.mb-20 {\n  margin-bottom: 10px;\n}\n.mb-30 {\n  margin-bottom: 15px;\n}\n.mb-40 {\n  margin-bottom: 20px;\n}\n.mb-50 {\n  margin-bottom: 25px;\n}\n.mb-60 {\n  margin-bottom: 30px;\n}\n.mb-70 {\n  margin-bottom: 35px;\n}\n.mb-80 {\n  margin-bottom: 40px;\n}\n\n.mt-5 {\n  margin-top: 5px;\n}\n.mt-10 {\n  margin-top: 5px;\n}\n.mt-15 {\n  margin-top: 8px;\n}\n.mt-20 {\n  margin-top: 10px;\n}\n.mt-30 {\n  margin-top: 15px;\n}\n.mt-40 {\n  margin-top: 20px;\n}\n.mt-50 {\n  margin-top: 25px;\n}\n.mt-60 {\n  margin-top: 30px;\n}\n.mt-70 {\n  margin-top: 35px;\n}\n.mt-80 {\n  margin-top: 40px;\n}\n\n.mr-5 {\n  margin-right: 5px;\n}\n.mr-10 {\n  margin-right: 5px;\n}\n\n.ml-4 {\n  margin-left: 4px;\n}\n\n.ml-5 {\n  margin-left: 5px;\n}\n\n.ml-10 {\n  margin-left: 5px;\n}\n\n@media only screen and (min-width:1280px) {\n\t.mb-5 {\n    margin-bottom: 5px;\n  }\n\t.mb-10 {\n    margin-bottom: 10px;\n  }\n\t.mb-15 {\n    margin-bottom: 15px;\n  }\n  .mb-20 {\n    margin-bottom: 20px;\n  }\n  .mb-30 {\n    margin-bottom: 30px;\n  }\n  .mb-40 {\n    margin-bottom: 40px;\n  }\n  .mb-50 {\n    margin-bottom: 50px;\n  }\n  .mb-60 {\n    margin-bottom: 60px;\n  }\n  .mb-70 {\n    margin-bottom: 70px;\n  }\n  .mb-80 {\n    margin-bottom: 80px;\n  }\n\n  .mt-5 {\n    margin-top: 5px;\n  }\n  .mt-10 {\n    margin-top: 10px;\n  }\n  .mt-15 {\n    margin-top: 15px;\n  }\n  .mt-20 {\n    margin-top: 20px;\n  }\n  .mt-30 {\n    margin-top: 30px;\n  }\n  .mt-40 {\n    margin-top: 40px;\n  }\n  .mt-50 {\n    margin-top: 50px;\n  }\n  .mt-60 {\n    margin-top: 60px;\n  }\n  .mt-70 {\n    margin-top: 70px;\n  }\n  .mt-80 {\n    margin-top: 80px;\n  }\n}\n\n::selection {\n  background: #111111;\n  color: #ffffff;\n}\n',
            ]))
        );
      function C(n) {
        var e = n.theme,
          t = void 0 === e ? 'dark' : e,
          o = n.children,
          i = n.removeBranding;
        return (0, a.jsxs)(r.f6, {
          theme: v[t],
          children: [(0, a.jsx)(O, {}), (0, a.jsx)(p, { removeBranding: i, children: o })],
        });
      }
    },
    2400: function (n, e) {
      e.Z = {
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
  },
]);
