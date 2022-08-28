'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [886],
  {
    5578: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return p;
        },
      });
      var n = r(2809),
        o = r(1164),
        i = (r(7294), r(186)),
        c = r(5893),
        a = ['children', 'variant', 'fullWidth', 'className'];
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function p(e) {
        var t = e.children,
          r = e.variant,
          n = void 0 === r ? 'accent' : r,
          i = e.fullWidth,
          l = void 0 !== i && i,
          p = e.className,
          f = (0, o.Z)(e, a);
        return (0, c.jsx)(u, s(s({ variant: n, fullWidth: l, className: p || '' }, f), {}, { children: t }));
      }
      var u = i.ZP.button.withConfig({ displayName: 'button__StyledButton', componentId: 'sc-1n9tfjy-0' })(
        [
          'font-weight:bold;font-size:16px;line-height:24px;height:100px;display:flex;justify-content:center;align-items:center;border-radius:5px;cursor:pointer;font-family:',
          ';transition:background-color ',
          ';&:hover{opacity:0.8;}',
          ' ',
          ' ',
          ' @media (max-width:',
          '){height:70px;}',
        ],
        function (e) {
          return e.theme.fontFamily;
        },
        function (e) {
          var t = e.theme;
          return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
        },
        function (e) {
          return e.fullWidth && (0, i.iv)(['width:100%;']);
        },
        function (e) {
          var t = e.variant,
            r = e.theme;
          return 'accent' === t
            ? (0, i.iv)(
                ['color:white;background-color:', ';&:hover{background-color:', ';}'],
                r.colors.accent,
                r.colors.accentHover
              )
            : (0, i.iv)(
                ['color:#111111;background-color:', ';&:hover{background-color:', ';}'],
                r.colors.secondary,
                r.colors.secondaryHover
              );
        },
        function (e) {
          return e.disabled && (0, i.iv)(['opacity:0.5;cursor:not-allowed;']);
        },
        function (e) {
          var t = e.theme;
          return ''.concat(t.breakpoints.tablet, 'px');
        }
      );
    },
    2872: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(186),
        o = r(5893);
      function i(e) {
        var t = e.className,
          r = e.children,
          n = e.columnFlow,
          i = e.hasBackground;
        return (0, o.jsx)(c, { className: t || '', columnFlow: n, hasBackground: i, children: r });
      }
      var c = n.ZP.div.withConfig({ displayName: 'container__StyledContainer', componentId: 'u3fn7h-0' })(
        ['max-width:535px;margin:auto;display:flex;flex-flow:row wrap;', ' ', ''],
        function (e) {
          return e.columnFlow && (0, n.iv)(['flex-flow:column wrap;']);
        },
        function (e) {
          return (
            e.hasBackground &&
            (0, n.iv)(['background-color:', ';border-radius:4px;'], function (e) {
              return e.theme.colors.itemBackground;
            })
          );
        }
      );
    },
    8820: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(2809),
        o = r(1164),
        i = r(186),
        c = r(5893),
        a = ['src', 'variant'];
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        var t = e.src,
          r = e.variant,
          i = void 0 === r ? 'square' : r,
          s = (0, o.Z)(e, a);
        return t
          ? (0, c.jsx)(
              p,
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? l(Object(r), !0).forEach(function (t) {
                        (0, n.Z)(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : l(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                      });
                }
                return e;
              })({ variant: i, src: t }, s)
            )
          : (0, c.jsx)(u, { variant: i, as: 'div' });
      }
      var p = i.ZP.img.withConfig({ displayName: 'cover-image__Cover', componentId: 'y910y5-0' })(
          ['object-fit:cover;border-radius:5px;', ' ', ' ', ''],
          function (e) {
            return (
              'square' === e.variant &&
              (0, i.iv)(
                ['width:', ';height:', ';@media (max-width:', '){width:', ';height:', ';}'],
                function (e) {
                  return e.theme.sizes.coverSize;
                },
                function (e) {
                  return e.theme.sizes.coverSize;
                },
                function (e) {
                  var t = e.theme;
                  return ''.concat(t.breakpoints.tablet, 'px');
                },
                function (e) {
                  return e.theme.sizes.coverSizeMobile;
                },
                function (e) {
                  return e.theme.sizes.coverSizeMobile;
                }
              )
            );
          },
          function (e) {
            return (
              'squareSmall' === e.variant &&
              (0, i.iv)(
                ['width:', ';height:', ';'],
                function (e) {
                  return e.theme.sizes.coverSizeSmall;
                },
                function (e) {
                  return e.theme.sizes.coverSizeSmall;
                }
              )
            );
          },
          function (e) {
            return (
              'rounded' === e.variant &&
              (0, i.iv)(
                ['width:', ';height:', ';border-radius:99%;@media (max-width:', '){width:', ';height:', ';}'],
                function (e) {
                  return e.theme.sizes.coverSizeRounded;
                },
                function (e) {
                  return e.theme.sizes.coverSizeRounded;
                },
                function (e) {
                  var t = e.theme;
                  return ''.concat(t.breakpoints.tablet, 'px');
                },
                function (e) {
                  return e.theme.sizes.coverSizeRoundedMobile;
                },
                function (e) {
                  return e.theme.sizes.coverSizeRoundedMobile;
                }
              )
            );
          }
        ),
        u = (0, i.ZP)(p).withConfig({ displayName: 'cover-image__CoverColor', componentId: 'y910y5-1' })(
          ['background-color:', ';'],
          function (e) {
            return e.theme.colors.secondary;
          }
        );
    },
    4144: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(2809),
        o = r(5893);
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function a(e) {
        return (0, o.jsx)(
          'svg',
          c(
            c({ width: '12', height: '16', viewBox: '0 0 11 14' }, e),
            {},
            {
              children: (0, o.jsx)('path', {
                d: 'M0 2.73703C0 1.13964 1.78029 0.18686 3.1094 1.07293L9.50385 5.3359C10.6913 6.12754 10.6913 7.87246 9.50385 8.6641L3.1094 12.9271C1.78029 13.8131 0 12.8604 0 11.263V2.73703Z',
                fill: e.fill,
              }),
            }
          )
        );
      }
    },
    9117: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return h;
        },
      });
      var n = r(3374),
        o = r(8820),
        i = r(2809),
        c = r(5893);
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                (0, i.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function s(e) {
        return (0, c.jsx)(
          'svg',
          l(
            l({ width: '11', height: '10', viewBox: '0 0 11 10' }, e),
            {},
            {
              children: (0, c.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M5.64007 1.53697L8.0606 4.09174L0.837498 4.12698C0.614275 4.12787 0.400549 4.22353 0.243444 4.39288C0.08634 4.56224 -0.00124073 4.79136 1.23978e-05 5.02975C0.0010519 5.26799 0.090724 5.49602 0.249279 5.66362C0.407835 5.83121 0.62227 5.92463 0.845354 5.92329L8.06688 5.88889L5.67856 8.46967C5.52135 8.63872 5.43351 8.86758 5.43439 9.10584C5.43528 9.3441 5.52481 9.57221 5.68328 9.73993C6.0136 10.089 6.54622 10.0863 6.87351 9.73405L10.8017 5.49791C11.0691 5.20761 11.0656 4.74071 10.7938 4.45503L6.82401 0.260002C6.49396 -0.0889478 5.96158 -0.0863191 5.63457 0.265876C5.47741 0.435182 5.38969 0.664244 5.39072 0.902639C5.39175 1.14103 5.48145 1.36922 5.64007 1.53697Z',
                fill: e.fill,
              }),
            }
          )
        );
      }
      function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                (0, i.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function f(e) {
        return (0, c.jsx)(
          'svg',
          u(
            u({ 'aria-hidden': 'true', role: 'img', viewBox: '0 0 512 512' }, e),
            {},
            {
              children: (0, c.jsx)('path', {
                fill: e.fill,
                d: 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z',
              }),
            }
          )
        );
      }
      var d = r(186);
      function h(e) {
        var t = e.data,
          r = e.className,
          i = e.artistId,
          a = e.releaseId,
          l = e.variant,
          p = void 0 === l ? 'row' : l,
          u = (0, d.Fg)(),
          h = (0, c.jsxs)(c.Fragment, {
            children: [
              t.platform
                ? (0, c.jsx)(m, { as: 'div', children: (0, n.Z)(t.platform) })
                : (0, c.jsx)(o.Z, { src: t.avatar, alt: t.title }),
              (0, c.jsx)(g, { variant: p, children: (0, c.jsx)('h3', { children: t.title }) }),
              'row' === p &&
                (0, c.jsx)(y, {
                  children: t.isSuccess
                    ? (0, c.jsx)(f, { height: '20px', fill: u.colors.success })
                    : (0, c.jsx)(s, { height: '20px', fill: u.colors.primary }),
                }),
            ],
          });
        return t.title && t.url
          ? (0, c.jsx)(b, {
              className: ''.concat(r || ''),
              href: t.url,
              variant: p,
              target: '_blank',
              onClick: function () {
                analytics.track('Traclink Click', { dsp: t.platform, artist_id: i, release_id: a });
              },
              children: h,
            })
          : null;
      }
      var b = d.ZP.a.withConfig({ displayName: 'simple-link__Link', componentId: 'fqic60-0' })(
          [
            'height:100px;border-radius:5px;background-color:',
            ';font-size:16px;line-height:24px;color:',
            ';font-family:',
            ';width:100%;padding:20px;display:flex;align-items:center;justify-content:flex-start;@media (max-width:',
            '){height:84px;}',
            ' ',
            '',
          ],
          function (e) {
            return e.theme.colors.inputsBackground;
          },
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            return e.theme.fontFamily;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          },
          function (e) {
            return (
              'column-left' === e.variant &&
              (0, d.iv)([
                'width:calc(50% - 2px);flex-direction:column;align-items:flex-start;height:170px;margin-right:2px;',
              ])
            );
          },
          function (e) {
            return (
              'column-right' === e.variant &&
              (0, d.iv)([
                'width:calc(50% - 2px);flex-direction:column;align-items:flex-start;height:170px;margin-left:2px;',
              ])
            );
          }
        ),
        g = d.ZP.div.withConfig({ displayName: 'simple-link__Info', componentId: 'fqic60-1' })(
          [
            'flex-grow:0;padding:0px 20px;width:',
            ';> h3{margin:0px;color:',
            ';font-size:16px;line-height:24px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}@media (max-width:',
            '){width:',
            ';> h3{white-space:nowrap;text-overflow:ellipsis;}}',
            '',
          ],
          function (e) {
            var t = e.theme;
            return 'calc(100% - '.concat(t.sizes.coverSize, ' - ').concat(t.sizes.commonIconSize, ')');
          },
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          },
          function (e) {
            var t = e.theme;
            return 'calc(100% - '.concat(t.sizes.coverSizeMobile, ' - ').concat(t.sizes.commonIconSize, ')');
          },
          function (e) {
            var t = e.variant;
            return ('column-right' === t || 'column-left' === t) && (0, d.iv)(['padding:20px 0px 0px 0px;width:100%;']);
          }
        ),
        y = d.ZP.button.withConfig({ displayName: 'simple-link__Icon', componentId: 'fqic60-2' })(
          [
            'background-color:',
            ';display:flex;width:',
            ';height:',
            ';justify-content:center;align-items:center;border-radius:50%;cursor:pointer;opacity:1;padding:0;transition:opacity ',
            ';&:hover{opacity:0.75;> svg{fill:',
            ';}}',
          ],
          function (e) {
            return e.theme.colors.background;
          },
          function (e) {
            return e.theme.sizes.commonIconSize;
          },
          function (e) {
            return e.theme.sizes.commonIconSize;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          },
          function (e) {
            return e.theme.colors.primaryHover;
          }
        ),
        m = (0, d.ZP)(y).withConfig({ displayName: 'simple-link__PlatformIcon', componentId: 'fqic60-3' })(
          ['> svg{height:20px;fill:', ';}'],
          function (e) {
            return e.theme.colors.primary;
          }
        );
    },
    6747: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return P;
        },
      });
      var n = r(186),
        o = (r(7294), r(1664)),
        i = r(2809),
        c = r(5893);
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                (0, i.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function s(e) {
        return (0, c.jsxs)(
          'svg',
          l(
            l({ width: '60', height: '24', viewBox: '0 0 60 24' }, e),
            {},
            {
              children: [
                (0, c.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M5.14128 9.37417V15.9604C5.14128 18.3661 5.56253 18.9229 7.76148 18.9229C8.44017 18.9229 10.4129 18.8888 10.8328 18.8888L10.0573 23.2443C9.66905 23.2443 7.82619 23.2809 7.11492 23.2809C1.29266 23.2809 0 21.746 0 16.0652V0.802073L5.14128 0V5.01815H11.0278L10.2509 9.37417H5.14128Z',
                }),
                (0, c.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M18.5454 23.2805H13.4785V11.7879C13.4785 6.54859 15.9007 4.90643 20.6813 4.90643C21.9245 4.90643 22.9764 4.87173 24.5063 4.97582L23.7407 9.48248C23.3581 9.44729 22.18 9.41309 21.191 9.41309C18.8647 9.41309 18.5454 10.2865 18.5454 12.3807V23.2805Z',
                }),
                (0, c.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M30.7256 17.4678C30.7256 18.8364 31.3128 19.3948 33.14 19.3948H36.6006V17.3649C36.6006 15.9283 36.1101 15.2616 33.7939 15.2616H33.3368C31.2795 15.2616 30.7256 15.7892 30.7256 17.2229V17.4678ZM41.6605 19.6739C41.6605 22.4052 40.68 23.2805 37.9382 23.2805H32.1609C27.3302 23.2805 25.7314 21.2477 25.7314 17.7842V17.049C25.7314 13.1622 27.8855 11.5169 32.3572 11.5169C34.5433 11.5169 35.7516 11.9377 36.6321 12.4623V12.0768C36.6321 10.1518 36.2088 9.20692 33.3687 9.20692C31.9001 9.20692 29.1587 9.17115 27.2316 9.27646L27.9828 4.97043C29.256 4.93466 31.1813 4.90088 33.6957 4.90088C39.1465 4.90088 41.6605 6.75534 41.6605 11.5169V19.6739Z',
                }),
                (0, c.jsx)('mask', {
                  id: 'mask0',
                  'mask-type': 'alpha',
                  maskUnits: 'userSpaceOnUse',
                  x: '45',
                  y: '4',
                  width: '15',
                  height: '20',
                  children: (0, c.jsx)('path', { d: 'M45.3359 4.90088H59.3604V23.8892H45.3359V4.90088Z' }),
                }),
                (0, c.jsx)('g', {
                  mask: 'url(#mask0)',
                  children: (0, c.jsx)('path', {
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
      function p(e) {
        var t = e.children,
          r = e.removeBranding,
          o = (0, n.Fg)();
        return (0, c.jsxs)(u, {
          children: [
            r
              ? null
              : (0, c.jsx)(f, {
                  children: (0, c.jsx)(d, {
                    href: '/',
                    children: (0, c.jsx)('a', { children: (0, c.jsx)(s, { fill: o.colors.logo }) }),
                  }),
                }),
            t,
          ],
        });
      }
      var u = n.ZP.div.withConfig({ displayName: 'page__StyledLayout', componentId: 'qan11h-0' })(
          [
            'background-color:',
            ';min-width:100vw;min-height:100vh;padding:24px;@media (max-width:',
            '){padding:16px;}',
          ],
          function (e) {
            return e.theme.colors.background;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.mobileL, 'px');
          }
        ),
        f = n.ZP.div.withConfig({ displayName: 'page__LogoWrapper', componentId: 'qan11h-1' })([
          'margin-bottom:10px;height:24px;',
        ]),
        d = (0, n.ZP)(o.default).withConfig({ displayName: 'page__StyledLink', componentId: 'qan11h-2' })([
          'height:24px;',
        ]),
        h = {
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
        b = {
          primary: h.white,
          primaryHover: h.grays.gray8,
          secondary: h.grays.gray4,
          secondaryHover: h.grays.gray3,
          accent: h.reds.red1,
          accentHover: h.reds.red2,
          success: h.green.green1,
          error: h.reds.red3,
          background: h.grays.gray1,
          logo: h.reds.red1,
          inputsBackground: h.grays.gray2,
          highLightBackground: h.white,
          highLightPlay: h.reds.red1,
          highLightPrimary: h.grays.gray1,
          highLightSecondary: h.grays.gray7,
          inputsBackgroundHover: h.black,
          icon: h.white,
          itemBackground: h.grays.gray25,
          itemBackgroundHover: h.grays.gray2,
        },
        g = {
          primary: h.grays.gray1,
          primaryHover: h.black,
          secondary: h.grays.gray7,
          secondaryHover: h.grays.gray7,
          accent: h.reds.red1,
          accentHover: h.reds.red2,
          success: h.green.green1,
          error: h.reds.red3,
          background: h.white,
          logo: h.reds.red1,
          inputsBackground: h.grays.gray5,
          highLightBackground: h.black,
          highLightPlay: h.grays.gray2,
          highLightPrimary: h.white,
          highLightSecondary: h.grays.gray4,
          inputsBackgroundHover: h.grays.gray4,
          icon: h.grays.gray2,
          itemBackground: h.grays.gray9,
          itemBackgroundHover: h.grays.gray85,
        },
        y = r(2400);
      function m(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                (0, i.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var j,
        v = {
          fontFamily: "'Inter', sans-serif;",
          palette: O({}, h),
          transitions: O(
            {},
            { duration: '.275s', type: 'ease-in-out', curve: 'cubic-bezier(0.650, 0.000, 0.450, 1.000)' }
          ),
          sizes: O(
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
          shadows: O({}, { redShadow: '10px 10px 20px rgba(237, 52, 56, 0.3);' }),
        },
        w = {
          light: O(O({}, v), {}, { colors: O({}, g), breakpoints: O({}, y.Z) }),
          dark: O(O({}, v), {}, { colors: O({}, b), breakpoints: O({}, y.Z) }),
        },
        x = r(2209),
        C = (0, n.vJ)(
          j ||
            (j = (0, x.Z)([
              '\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #F1F2F5;\n  color: #32343c;\n  font-size: 16px;\n  font: 400 16px "Inter", sans-serif;\n  font-family: \'Inter\', sans-serif;\n  text-rendering: geometricPrecision;\n  font-feature-settings: "pnum";\n  font-variant-numeric: proportional-nums;\n  font-weight: normal;\n  min-width: 320px;\n  margin: 0;\n  padding: 0;\n  font-stretch: normal;\n  font-style: normal;\n  overscroll-behavior: none;\n}\n\nbody.alternate-font {\n  background-color: white;\n  font: 400 16px "Inter", sans-serif;\n  font-family: "Inter", sans-serif;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  font-weight: 700;\n  position: relative;\n}\n\na.link-line {\n  display: inline-flex;\n}\n\na.link-line.red {\n  color: #ED3438;\n}\n\na.link-line:after {\n  content: \'\';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 100%;\n  width: 0%;\n  height: 2px;\n  background-color: #32343c;\n  border-radius: 2px;\n  transition: width .25s ease-in-out, right .25s ease-in-out;\n}\na.link-line.red:after {\n  background-color: #ED3438;\n}\n\na.link-line:hover:after {\n  right: 0;\n  width: 100%;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  -webkit-appearance: none;\n  filter: none;\n  border: none;\n  outline: none;\n  font-family: "Sen", sans-serif;\n}\n\ndiv[data-consent-manager-dialog] input {\n  -webkit-appearance: auto;\n}\n\nbody.alternate-font button,\nbody.alternate-font input,\nbody.alternate-font select,\nbody.alternate-font textarea {\n  font-family: "Inter", sans-serif;\n}\n\nbutton:focus,\ninput:focus {\n  outline: none;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ntextarea:-webkit-autofill,\ntextarea:-webkit-autofill:hover,\ntextarea:-webkit-autofill:focus,\nselect:-webkit-autofill,\nselect:-webkit-autofill:hover,\nselect:-webkit-autofill:focus {\n  background-color: white !important;\n  color: #32343C !important;\n  -webkit-text-fill-color: #32343C !important;\n  box-shadow: 0 0 0 1000px white inset !important;\n  -webkit-box-shadow: 0 0 0 1000px white inset !important;\n}\n\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n\n.mb-5 {\n  margin-bottom: 5px;\n}\n.mb-10 {\n  margin-bottom: 5px;\n}\n.mb-15 {\n  margin-bottom: 8px;\n}\n.mb-20 {\n  margin-bottom: 10px;\n}\n.mb-30 {\n  margin-bottom: 15px;\n}\n.mb-40 {\n  margin-bottom: 20px;\n}\n.mb-50 {\n  margin-bottom: 25px;\n}\n.mb-60 {\n  margin-bottom: 30px;\n}\n.mb-70 {\n  margin-bottom: 35px;\n}\n.mb-80 {\n  margin-bottom: 40px;\n}\n\n.mt-5 {\n  margin-top: 5px;\n}\n.mt-10 {\n  margin-top: 5px;\n}\n.mt-15 {\n  margin-top: 8px;\n}\n.mt-20 {\n  margin-top: 10px;\n}\n.mt-30 {\n  margin-top: 15px;\n}\n.mt-40 {\n  margin-top: 20px;\n}\n.mt-50 {\n  margin-top: 25px;\n}\n.mt-60 {\n  margin-top: 30px;\n}\n.mt-70 {\n  margin-top: 35px;\n}\n.mt-80 {\n  margin-top: 40px;\n}\n\n.mr-5 {\n  margin-right: 5px;\n}\n.mr-10 {\n  margin-right: 5px;\n}\n\n.ml-4 {\n  margin-left: 4px;\n}\n\n.ml-5 {\n  margin-left: 5px;\n}\n\n.ml-10 {\n  margin-left: 5px;\n}\n\n@media only screen and (min-width:1280px) {\n\t.mb-5 {\n    margin-bottom: 5px;\n  }\n\t.mb-10 {\n    margin-bottom: 10px;\n  }\n\t.mb-15 {\n    margin-bottom: 15px;\n  }\n  .mb-20 {\n    margin-bottom: 20px;\n  }\n  .mb-30 {\n    margin-bottom: 30px;\n  }\n  .mb-40 {\n    margin-bottom: 40px;\n  }\n  .mb-50 {\n    margin-bottom: 50px;\n  }\n  .mb-60 {\n    margin-bottom: 60px;\n  }\n  .mb-70 {\n    margin-bottom: 70px;\n  }\n  .mb-80 {\n    margin-bottom: 80px;\n  }\n\n  .mt-5 {\n    margin-top: 5px;\n  }\n  .mt-10 {\n    margin-top: 10px;\n  }\n  .mt-15 {\n    margin-top: 15px;\n  }\n  .mt-20 {\n    margin-top: 20px;\n  }\n  .mt-30 {\n    margin-top: 30px;\n  }\n  .mt-40 {\n    margin-top: 40px;\n  }\n  .mt-50 {\n    margin-top: 50px;\n  }\n  .mt-60 {\n    margin-top: 60px;\n  }\n  .mt-70 {\n    margin-top: 70px;\n  }\n  .mt-80 {\n    margin-top: 80px;\n  }\n}\n\n::selection {\n  background: #111111;\n  color: #ffffff;\n}\n',
            ]))
        );
      function P(e) {
        var t = e.theme,
          r = void 0 === t ? 'dark' : t,
          o = e.children,
          i = e.removeBranding;
        return (0, c.jsxs)(n.f6, {
          theme: w[r],
          children: [(0, c.jsx)(C, {}), (0, c.jsx)(p, { removeBranding: i, children: o })],
        });
      }
    },
    2577: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return p;
        },
      });
      var n = r(4144),
        o = r(7294),
        i = r(186),
        c = r(2809),
        a = r(5893);
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                (0, c.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function p(e) {
        var t,
          r = e.className,
          i = e.data,
          c = e.variant,
          l = void 0 === c ? 'large' : c,
          s = e.artistName,
          p = (0, o.useState)(!1),
          b = p[0],
          g = p[1],
          y = function () {
            var e;
            return i.id ? i.id : null === (e = i.url) || void 0 === e ? void 0 : e.split('embed/')[1];
          },
          m = null === (t = i.url) || void 0 === t ? void 0 : t.includes('list=');
        return (0, a.jsx)(u, {
          className: r,
          children: b
            ? (0, a.jsx)('iframe', {
                className: 'iframe',
                title: i.title ? i.title : 'Music Video',
                src: (function () {
                  var e = y();
                  return e
                    ? m
                      ? 'https://www.youtube.com/embed/videoseries?list='.concat(e)
                      : 'https://www.youtube.com/embed/'.concat(e, '?autoplay=1&controls=0&disablekb=1&rel=0')
                    : '';
                })(),
                width: '100%',
                height: '100%',
                frameBorder: '0',
                allow: 'autoplay',
                allowFullScreen: !0,
              })
            : (0, a.jsxs)(f, {
                onClick: function () {
                  analytics.track('Tracpage Link Click', {
                    artist_id: s,
                    category: 'traclink' === i.type ? 'Release' : 'Url',
                    name: i.title,
                  }),
                    g(!b);
                },
                children: [
                  (0, a.jsx)(d, { children: (0, a.jsx)(n.Z, {}) }),
                  (0, a.jsx)(h, {
                    variant: l,
                    src: (function () {
                      var e = y();
                      return [
                        'https://img.youtube.com/vi/'.concat(e, '/maxresdefault.jpg'),
                        'https://img.youtube.com/vi/'.concat(e, '/hqdefault.jpg'),
                        'https://img.youtube.com/vi/'.concat(e, '/mqdefault.jpg'),
                        'https://img.youtube.com/vi/'.concat(e, '/default.jpg'),
                      ];
                    })(),
                    alt: i.title || 'Music Video',
                  }),
                ],
              }),
        });
      }
      var u = i.ZP.div.withConfig({ displayName: 'video-player__VideoWrapper', componentId: 'sc-19p591d-0' })([
          'width:100%;position:relative;border-radius:5px;overflow:hidden;height:0;padding-top:56.25%;> iframe{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;}',
        ]),
        f = i.ZP.div.withConfig({ displayName: 'video-player__ImageWrapper', componentId: 'sc-19p591d-1' })([
          'cursor:pointer;display:flex;justify-content:center;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;',
        ]),
        d = i.ZP.button.withConfig({ displayName: 'video-player__PlayButton', componentId: 'sc-19p591d-2' })(
          [
            'background-color:',
            ';display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:50%;cursor:pointer;opacity:1;padding:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:opacity ',
            ';&:hover{opacity:0.85;> svg{fill:',
            ';}}> svg{margin-left:4px;fill:',
            ';transition:fill ',
            ';}',
          ],
          function (e) {
            return e.theme.colors.background;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          },
          function (e) {
            return e.theme.colors.accentHover;
          },
          function (e) {
            return e.theme.colors.accent;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          }
        ),
        h = (0, i.ZP)(function (e) {
          var t = (0, o.useState)(e.src),
            r = t[0],
            n = t[1],
            i = (0, o.useState)(e.src.length ? e.src[0] : ''),
            c = i[0],
            l = i[1];
          if (!e.src.length || !c || !r.length) return null;
          var p = function () {
              var e = r.slice(1);
              n(e), e.length && l(e[0]);
            },
            u = s(
              s({}, e),
              {},
              {
                src: c,
                onError: p,
                onLoad: function (e) {
                  120 === e.currentTarget.naturalWidth && p();
                },
              }
            );
          return (0, a.jsx)('img', s(s({}, u), {}, { alt: e.alt }));
        }).withConfig({ displayName: 'video-player__CoverImage', componentId: 'sc-19p591d-3' })(
          ['border-radius:5px;', ' ', ''],
          function (e) {
            return 'large' === e.variant && (0, i.iv)(['object-fit:cover;width:100%;']);
          },
          function (e) {
            return 'small' === e.variant && (0, i.iv)(['object-fit:cover;height:100%;width:100%;']);
          }
        );
    },
    9207: function (e, t, r) {
      r.d(t, {
        V: function () {
          return o;
        },
      });
      var n = r(7294),
        o = function (e) {
          var t = (0, n.useState)(e),
            r = t[0],
            o = t[1];
          return (
            (0, n.useEffect)(function () {
              var e = function (e) {
                var t, r, n;
                (
                  (null === (t = 'http://localhost:3000,https://app.development.trac.co') ? void 0 : t.split(',')) || []
                ).includes(e.origin) &&
                  'trac-editor' === (null === (r = e.data) || void 0 === r ? void 0 : r.origin) &&
                  null !== (n = e.data) &&
                  void 0 !== n &&
                  n.payload &&
                  o(
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
                document.referrer &&
                  window.parent.postMessage({ origin: 'trac-artist-site', ready: !0 }, document.referrer),
                function () {
                  window.removeEventListener('message', e);
                }
              );
            }, []),
            { pageData: r }
          );
        };
    },
    2400: function (e, t) {
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
    3374: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return $;
        },
      });
      var n = r(2809),
        o = r(5893);
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function a(e) {
        return (0, o.jsx)(
          'svg',
          c(
            c({ role: 'img', viewBox: '0 0 512 512' }, e),
            {},
            {
              children: (0, o.jsx)('path', {
                fill: e.fill,
                d: 'M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z',
              }),
            }
          )
        );
      }
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function p(e) {
        return (0, o.jsx)(
          'svg',
          s(
            s({ width: '15', height: '15', viewBox: '0 0 15 15' }, e),
            {},
            {
              children: (0, o.jsx)('path', {
                fill: e.fill,
                d: 'M14 6.1c-0.1 0-0.2 0-0.4 0 -1.4 0-2.6-0.7-3.4-1.8v6.2c0 2.5-2.1 4.6-4.6 4.6S1 13 1 10.4s2.1-4.6 4.6-4.6l0 0c0.1 0 0.2 0 0.3 0v2.3C5.8 8.1 5.7 8.1 5.6 8.1c-1.3 0-2.4 1-2.4 2.3 0 1.3 1.1 2.3 2.4 2.3 1.3 0 2.5-1 2.5-2.3L8.1 0h2.2c0.2 1.9 1.8 3.4 3.7 3.6L14 6.1',
              }),
            }
          )
        );
      }
      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function d(e) {
        return (0, o.jsx)(
          'svg',
          f(
            f(
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
              children: (0, o.jsx)('path', {
                fill: e.fill,
                d: 'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z',
              }),
            }
          )
        );
      }
      function h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : h(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function g(e) {
        return (0, o.jsx)(
          'svg',
          b(
            b({ width: '24', height: '20', viewBox: '0 0 24 20' }, e),
            {},
            {
              children: (0, o.jsx)('path', {
                d: 'M24 2.5585C23.1075 2.95 22.1565 3.2095 21.165 3.3355C22.185 2.7265 22.9635 1.7695 23.3295 0.616C22.3785 1.183 21.3285 1.5835 20.2095 1.807C19.3065 0.8455 18.0195 0.25 16.6155 0.25C13.8915 0.25 11.6985 2.461 11.6985 5.1715C11.6985 5.5615 11.7315 5.9365 11.8125 6.2935C7.722 6.094 4.1025 4.1335 1.671 1.147C1.2465 1.8835 0.9975 2.7265 0.9975 3.634C0.9975 5.338 1.875 6.8485 3.183 7.723C2.3925 7.708 1.617 7.4785 0.96 7.117C0.96 7.132 0.96 7.1515 0.96 7.171C0.96 9.562 2.6655 11.548 4.902 12.0055C4.5015 12.115 4.065 12.1675 3.612 12.1675C3.297 12.1675 2.979 12.1495 2.6805 12.0835C3.318 14.032 5.127 15.4645 7.278 15.511C5.604 16.8205 3.4785 17.6095 1.1775 17.6095C0.774 17.6095 0.387 17.5915 0 17.542C2.1795 18.9475 4.7625 19.75 7.548 19.75C16.602 19.75 21.552 12.25 21.552 5.749C21.552 5.5315 21.5445 5.3215 21.534 5.113C22.5105 4.42 23.331 3.5545 24 2.5585Z',
                fill: e.fill,
              }),
            }
          )
        );
      }
      function y(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : y(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function O(e) {
        return (0, o.jsx)(
          'svg',
          m(
            m({ 'aria-hidden': 'true', role: 'img', viewBox: '0 0 512 512' }, e),
            {},
            {
              children: (0, o.jsx)('path', {
                fill: e.fill,
                d: 'M510.846 392.673c-5.211 12.157-27.239 21.089-67.36 27.318-2.064 2.786-3.775 14.686-6.507 23.956-1.625 5.566-5.623 8.869-12.128 8.869l-.297-.005c-9.395 0-19.203-4.323-38.852-4.323-26.521 0-35.662 6.043-56.254 20.588-21.832 15.438-42.771 28.764-74.027 27.399-31.646 2.334-58.025-16.908-72.871-27.404-20.714-14.643-29.828-20.582-56.241-20.582-18.864 0-30.736 4.72-38.852 4.72-8.073 0-11.213-4.922-12.422-9.04-2.703-9.189-4.404-21.263-6.523-24.13-20.679-3.209-67.31-11.344-68.498-32.15a10.627 10.627 0 0 1 8.877-11.069c69.583-11.455 100.924-82.901 102.227-85.934.074-.176.155-.344.237-.515 3.713-7.537 4.544-13.849 2.463-18.753-5.05-11.896-26.872-16.164-36.053-19.796-23.715-9.366-27.015-20.128-25.612-27.504 2.437-12.836 21.725-20.735 33.002-15.453 8.919 4.181 16.843 6.297 23.547 6.297 5.022 0 8.212-1.204 9.96-2.171-2.043-35.936-7.101-87.29 5.687-115.969C158.122 21.304 229.705 15.42 250.826 15.42c.944 0 9.141-.089 10.11-.089 52.148 0 102.254 26.78 126.723 81.643 12.777 28.65 7.749 79.792 5.695 116.009 1.582.872 4.357 1.942 8.599 2.139 6.397-.286 13.815-2.389 22.069-6.257 6.085-2.846 14.406-2.461 20.48.058l.029.01c9.476 3.385 15.439 10.215 15.589 17.87.184 9.747-8.522 18.165-25.878 25.018-2.118.835-4.694 1.655-7.434 2.525-9.797 3.106-24.6 7.805-28.616 17.271-2.079 4.904-1.256 11.211 2.46 18.748.087.168.166.342.239.515 1.301 3.03 32.615 74.46 102.23 85.934 6.427 1.058 11.163 7.877 7.725 15.859z',
              }),
            }
          )
        );
      }
      function j(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : j(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function w(e) {
        return (0, o.jsx)(
          'svg',
          v(
            v({ width: '13', height: '24', viewBox: '0 0 13 24' }, e),
            {},
            {
              children: (0, o.jsx)('path', {
                d: 'M12.1482 13.3981L12.8219 9.08738H8.60731V6.29126C8.60731 5.11165 9.19498 3.96116 11.0826 3.96116H13V0.291262C13 0.291262 11.2607 0 9.59863 0C6.12603 0 3.85845 2.06505 3.85845 5.80194V9.08738H0V13.3981H3.85845V23.8194C4.6331 23.9388 5.42557 24 6.23288 24C7.04018 24 7.83265 23.9388 8.60731 23.8194V13.3981H12.1482Z',
                fill: e.fill,
              }),
            }
          )
        );
      }
      function x(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? x(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function P(e) {
        return (0, o.jsxs)(
          'svg',
          C(
            C({ width: '22', height: '22', viewBox: '0 0 22 22' }, e),
            {},
            {
              children: [
                (0, o.jsxs)('g', {
                  clipPath: 'url(#clip0)',
                  children: [
                    (0, o.jsx)('path', {
                      d: 'M21.9947 22V21.9991H22.0002V13.9306C22.0002 9.98345 21.1504 6.94287 16.5359 6.94287C14.3176 6.94287 12.8289 8.1602 12.2212 9.31429H12.157V7.31137H7.78174V21.9991H12.3376V14.7263C12.3376 12.8114 12.7006 10.9597 15.072 10.9597C17.4086 10.9597 17.4434 13.145 17.4434 14.8491V22H21.9947Z',
                      fill: e.fill,
                    }),
                    (0, o.jsx)('path', { d: 'M0.362793 7.3125H4.92413V22.0003H0.362793V7.3125Z', fill: e.fill }),
                    (0, o.jsx)('path', {
                      d: 'M2.64183 0C1.18342 0 0 1.18342 0 2.64183C0 4.10025 1.18342 5.30842 2.64183 5.30842C4.10025 5.30842 5.28367 4.10025 5.28367 2.64183C5.28275 1.18342 4.09933 0 2.64183 0V0Z',
                      fill: e.fill,
                    }),
                  ],
                }),
                (0, o.jsx)('defs', {
                  children: (0, o.jsx)('clipPath', {
                    id: 'clip0',
                    children: (0, o.jsx)('rect', { width: '22', height: '22', fill: e.fill }),
                  }),
                }),
              ],
            }
          )
        );
      }
      function k(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : k(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function S(e) {
        return (0, o.jsxs)(
          'svg',
          D(
            D({ width: '26', height: '26', viewBox: '0 0 26 26' }, e),
            {},
            {
              children: [
                (0, o.jsx)('path', {
                  d: 'M12.9999 2.51258C16.4157 2.51258 16.8203 2.52563 18.1694 2.58718C19.4167 2.64411 20.094 2.85246 20.5449 3.02766C21.1005 3.23274 21.6032 3.55974 22.0158 3.98463C22.4407 4.39728 22.7677 4.8999 22.9728 5.45556C23.148 5.90634 23.3564 6.58371 23.4132 7.831C23.4748 9.18001 23.4878 9.58458 23.4878 13.0005C23.4878 16.4165 23.4748 16.821 23.4132 18.1701C23.3563 19.4174 23.1479 20.0947 22.9728 20.5455C22.7599 21.0972 22.434 21.5983 22.0158 22.0165C21.5977 22.4346 21.0966 22.7606 20.5449 22.9734C20.0941 23.1486 19.4167 23.357 18.1694 23.4139C16.8207 23.4754 16.4161 23.4885 12.9999 23.4885C9.58369 23.4885 9.17927 23.4754 7.83036 23.4139C6.58307 23.357 5.90575 23.1486 5.45492 22.9734C4.89926 22.7683 4.39664 22.4413 3.98399 22.0164C3.5591 21.6038 3.2321 21.1012 3.02702 20.5455C2.85182 20.0947 2.64341 19.4174 2.58654 18.1701C2.52499 16.8211 2.51194 16.4165 2.51194 13.0005C2.51194 9.58458 2.52499 9.18011 2.58654 7.831C2.64347 6.58371 2.85182 5.90639 3.02702 5.45556C3.23212 4.89988 3.55916 4.39723 3.98409 3.98458C4.39674 3.55969 4.89937 3.23269 5.45502 3.02761C5.9058 2.85241 6.58318 2.644 7.83046 2.58713C9.17947 2.52558 9.58404 2.51253 13 2.51253L12.9999 2.51258ZM13 0.20752C9.52565 0.20752 9.08984 0.222246 7.72555 0.284504C6.36385 0.34666 5.43395 0.562887 4.62023 0.879152C3.76662 1.20038 2.99336 1.70393 2.35437 2.3547C1.70345 2.99366 1.19975 3.76692 0.87841 4.62056C0.562398 5.43433 0.346172 6.36424 0.28427 7.72594C0.221758 9.09023 0.207031 9.52603 0.207031 13.0004C0.207031 16.4747 0.221758 16.9105 0.28427 18.2748C0.346426 19.6365 0.562652 20.5664 0.878918 21.3801C1.20014 22.2337 1.7037 23.007 2.35447 23.646C2.99346 24.2968 3.76672 24.8003 4.62033 25.1216C5.4341 25.4378 6.364 25.6541 7.72565 25.7162C9.09015 25.7785 9.5258 25.7932 13.0001 25.7932C16.4744 25.7932 16.9103 25.7785 18.2745 25.7162C19.6362 25.6541 20.5661 25.4378 21.3799 25.1216C22.2297 24.7929 23.0015 24.2903 23.6457 23.646C24.29 23.0017 24.7926 22.23 25.1213 21.3801C25.4375 20.5664 25.6538 19.6365 25.7159 18.2748C25.7782 16.9103 25.7929 16.4747 25.7929 13.0004C25.7929 9.52608 25.7782 9.09023 25.7159 7.72594C25.6538 6.36424 25.4375 5.43433 25.1213 4.62061C24.8001 3.76701 24.2965 2.99375 23.6457 2.35475C23.0067 1.70385 22.2334 1.20019 21.3797 0.878898C20.5659 0.562887 19.636 0.34666 18.2743 0.284758C16.91 0.222246 16.4742 0.20752 12.9999 0.20752H13Z',
                  fill: e.fill,
                }),
                (0, o.jsx)('path', {
                  d: 'M13 6.43066C11.7007 6.43066 10.4306 6.81595 9.35027 7.53779C8.26995 8.25964 7.42794 9.28563 6.93073 10.486C6.43351 11.6864 6.30342 13.0073 6.55689 14.2816C6.81037 15.5559 7.43604 16.7265 8.35477 17.6452C9.27351 18.5639 10.4441 19.1896 11.7184 19.4431C12.9927 19.6965 14.3136 19.5665 15.514 19.0692C16.7143 18.572 17.7403 17.73 18.4622 16.6497C19.184 15.5694 19.5693 14.2993 19.5693 13C19.5693 11.2577 18.8772 9.58676 17.6452 8.35477C16.4132 7.12279 14.7423 6.43066 13 6.43066ZM13 17.2642C12.1566 17.2642 11.3322 17.0141 10.6309 16.5456C9.92966 16.077 9.38311 15.411 9.06036 14.6318C8.73762 13.8526 8.65318 12.9952 8.81772 12.168C8.98227 11.3409 9.3884 10.581 9.98477 9.98468C10.5811 9.38832 11.341 8.98219 12.1681 8.81766C12.9953 8.65313 13.8527 8.73758 14.6319 9.06033C15.4111 9.38308 16.0771 9.92964 16.5456 10.6309C17.0142 11.3321 17.2643 12.1566 17.2643 13C17.2643 14.1309 16.815 15.2156 16.0153 16.0153C15.2156 16.815 14.1309 17.2642 13 17.2642Z',
                  fill: e.fill,
                }),
                (0, o.jsx)('path', {
                  d: 'M19.8291 7.70647C20.6769 7.70647 21.3642 7.01917 21.3642 6.17135C21.3642 5.32353 20.6769 4.63623 19.8291 4.63623C18.9812 4.63623 18.2939 5.32353 18.2939 6.17135C18.2939 7.01917 18.9812 7.70647 19.8291 7.70647Z',
                  fill: e.fill,
                }),
              ],
            }
          )
        );
      }
      r(7294);
      function z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : z(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var M = function (e) {
        return (0, o.jsxs)(
          'svg',
          L(
            L({ width: '23', height: '15', viewBox: '0 0 23 15' }, e),
            {},
            {
              children: [
                (0, o.jsx)('rect', { y: '12', width: '5', height: '3' }),
                (0, o.jsx)('rect', { x: '12', y: '12', width: '5', height: '3' }),
                (0, o.jsx)('rect', { x: '12', y: '8', width: '5', height: '3' }),
                (0, o.jsx)('rect', { x: '6', y: '12', width: '5', height: '3' }),
                (0, o.jsx)('rect', { x: '6', y: '8', width: '5', height: '3' }),
                (0, o.jsx)('rect', { x: '6', y: '4', width: '5', height: '3' }),
                (0, o.jsx)('rect', { x: '18', y: '12', width: '5', height: '3' }),
                (0, o.jsx)('rect', { x: '18', y: '8', width: '5', height: '3' }),
                (0, o.jsx)('rect', { x: '18', width: '5', height: '3' }),
                (0, o.jsx)('rect', { x: '18', y: '4', width: '5', height: '3' }),
              ],
            }
          )
        );
      };
      function Z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Z(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Z(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var V = function (e) {
        return (0, o.jsx)(
          'svg',
          E(
            E({ width: '14', height: '16', viewBox: '0 0 14 16' }, e),
            {},
            {
              children: (0, o.jsx)('path', {
                d: 'M14 5.4C13.7 2.4 11 0 7.8 0H0v16h4c0.6 0 1-0.4 1-1v-3h3c1.7 0 3.3-0.7 4.4-2C13.6 8.8 14.1 7.1 14 5.4z',
              }),
            }
          )
        );
      };
      function B(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? B(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : B(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var _ = function (e) {
        return (0, o.jsx)(
          'svg',
          H(
            H({ width: '24', height: '17', viewBox: '0 0 24 17' }, e),
            {},
            {
              children: (0, o.jsx)('path', {
                fill: e.fill,
                d: 'M16 12l-4 4 -4-4 4-4L16 12zM4 0L0 4l4 4 4-4L4 0zM12 0L8 4l4 4 4-4L12 0zM20 0l-4 4 4 4 4-4L20 0z',
              }),
            }
          )
        );
      };
      function I(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : I(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var F = function (e) {
        return (0, o.jsx)(
          'svg',
          N(
            N({ width: '24', height: '24', viewBox: '0 0 24 24' }, e),
            {},
            {
              children: (0, o.jsx)('path', {
                fill: e.fill,
                d: 'M12 0C5.4 0 0 5.4 0 12c0 6.6 5.4 12 12 12 6.6 0 12-5.4 12-12C24 5.4 18.6 0 12 0zM17.5 17.3c-0.2 0.4-0.7 0.5-1 0.2 -2.8-1.7-6.4-2.1-10.5-1.2 -0.4 0.1-0.8-0.2-0.9-0.6 -0.1-0.4 0.2-0.8 0.6-0.9 4.6-1 8.5-0.6 11.7 1.3C17.6 16.5 17.7 17 17.5 17.3zM19 14c-0.3 0.4-0.8 0.6-1.3 0.3 -3.2-2-8.1-2.6-12-1.4 -0.5 0.1-1-0.1-1.2-0.6 -0.1-0.5 0.1-1 0.6-1.2 4.4-1.3 9.8-0.7 13.5 1.6C19.1 13 19.2 13.6 19 14zM19.1 10.6C15.2 8.3 8.8 8.1 5.2 9.3 4.6 9.4 3.9 9.1 3.8 8.5 3.6 7.9 3.9 7.3 4.5 7.1c4.2-1.3 11.3-1 15.7 1.6 0.5 0.3 0.7 1 0.4 1.5C20.3 10.8 19.6 11 19.1 10.6z',
              }),
            }
          )
        );
      };
      function R(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? R(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : R(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var W = function (e) {
        return (0, o.jsxs)(
          'svg',
          q(
            q({ width: '16', height: '16', viewBox: '0 0 16 16' }, e),
            {},
            {
              children: [
                (0, o.jsx)('path', { fill: e.fill, d: 'M9.7 11.6c-0.5 0.5-1 0.8-1.7 1 -0.6-0.2-1.2-0.6-1.7-1H9.7z' }),
                (0, o.jsx)('path', {
                  fill: e.fill,
                  d: 'M14.6 4.4l0-2.4c-0.6 0-1.1 0.1-1.6 0.3C11.7 0.9 10 0 8 0 6 0 4.3 0.9 3 2.3 2.5 2.2 2 2.1 1.4 2.1v2.4C0.6 5 0 6 0 7.1c0 1.1 0.6 2.1 1.4 2.7C1.8 13.3 4.6 16 8 16c3.4 0 6.2-2.7 6.6-6.1l0-0.1C15.4 9.3 16 8.3 16 7.1 16 6 15.4 5 14.6 4.4zM8 1.3c1.4 0 2.7 0.6 3.7 1.5C11.5 3 11.2 3.1 11 3.2c-0.9-0.5-1.9-0.8-3-0.8 -1.1 0-2.1 0.3-3 0.8C4.8 3.1 4.5 3 4.3 2.8 5.3 1.9 6.6 1.3 8 1.3zM13.3 8.8v0.3c0 3.1-2.4 5.6-5.3 5.6 -2.9 0-5.3-2.5-5.3-5.5V8.9l0-5.3C3.5 3.8 4.3 4.3 5 4.8c0.9-0.6 1.9-1 3-1 1.1 0 2.2 0.4 3 1 0.6-0.6 1.4-1 2.2-1.2L13.3 8.8z',
                }),
                (0, o.jsx)('path', {
                  fill: e.fill,
                  d: 'M9.5 13.5C9.1 13.8 8.6 14 8 14c-0.6 0-1.1-0.2-1.5-0.5 0 0 0-0.2 0.1-0.3 0.1-0.2 0.2-0.2 0.2-0.2 0.4 0.1 0.8 0.2 1.2 0.2 0.4 0 0.8-0.1 1.2-0.2 0 0 0.1 0.1 0.2 0.3C9.5 13.4 9.5 13.5 9.5 13.5z',
                }),
                (0, o.jsx)('path', {
                  fill: e.fill,
                  d: 'M6.4 9.1c0.7 0.1 1.1 0.8 1.3 1.8 0 0-1.1 0-1.9 0 -0.3 0-0.7-0.1-0.8-0.2C4.1 10.1 4.1 9.3 4.1 9 4.1 9 5.5 9 6.4 9.1z',
                }),
                (0, o.jsx)('path', {
                  fill: e.fill,
                  d: 'M9.6 9.1c-0.7 0.1-1.1 0.8-1.3 1.8 0 0 1.1 0 1.9 0 0.3 0 0.7-0.1 0.8-0.2 0.8-0.5 0.8-1.3 0.8-1.6C11.9 9 10.5 9 9.6 9.1z',
                }),
              ],
            }
          )
        );
      };
      function U(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? U(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : U(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var A = function (e) {
        return (0, o.jsxs)(
          'svg',
          T(
            T({ width: '20', height: '24', viewBox: '0 0 20 24' }, e),
            {},
            {
              children: [
                (0, o.jsx)('path', {
                  fill: e.fill,
                  d: 'M19.6 18.7c-0.4 0.8-0.8 1.6-1.3 2.3 -0.7 1-1.2 1.6-1.6 2C16 23.6 15.3 24 14.5 24c-0.5 0-1.2-0.2-2-0.5 -0.8-0.3-1.5-0.5-2.1-0.5 -0.7 0-1.4 0.2-2.2 0.5C7.6 23.8 6.9 24 6.5 24c-0.7 0-1.4-0.3-2.2-1 -0.5-0.4-1-1.1-1.7-2.1 -0.7-1-1.3-2.3-1.8-3.7C0.3 15.8 0 14.4 0 12.9c0-1.6 0.3-3 1-4.2 0.5-0.9 1.3-1.7 2.2-2.2C4.1 6 5.1 5.8 6.1 5.7c0.6 0 1.3 0.2 2.3 0.5 0.9 0.4 1.5 0.5 1.8 0.5 0.2 0 0.9-0.2 2-0.6 1.1-0.4 2-0.5 2.7-0.5 2 0.2 3.5 1 4.5 2.4 -1.8 1.1-2.7 2.6-2.7 4.6 0 1.5 0.6 2.8 1.6 3.8 0.5 0.5 1 0.8 1.6 1.1C19.9 18 19.7 18.3 19.6 18.7L19.6 18.7z',
                }),
                (0, o.jsx)('path', {
                  fill: e.fill,
                  d: 'M15 0.5c0 1.2-0.4 2.3-1.3 3.4 -1 1.2-2.3 1.9-3.7 1.8 0-0.1 0-0.3 0-0.5 0-1.2 0.5-2.4 1.4-3.4 0.4-0.5 1-0.9 1.7-1.3C13.7 0.2 14.4 0 15 0 15 0.2 15 0.3 15 0.5L15 0.5z',
                }),
              ],
            }
          )
        );
      };
      function J(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? J(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : J(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var G = function (e) {
        return (0, o.jsxs)(
          'svg',
          X(
            X({ width: '24', height: '17', viewBox: '0 0 24 15' }, e),
            {},
            {
              children: [
                (0, o.jsx)('path', {
                  fill: e.fill,
                  d: 'M22.3 9.8c-0.8 0-1.8 0.2-2.5 0.7 -0.2 0.2-0.2 0.4 0 0.4 0.8-0.1 2.6-0.4 3 0.1 0.3 0.4-0.4 2.2-0.7 3 -0.1 0.3 0.1 0.3 0.3 0.2 1.4-1.2 1.7-3.7 1.5-4C23.8 9.9 23.1 9.8 22.3 9.8z',
                }),
                (0, o.jsx)('path', {
                  fill: e.fill,
                  d: 'M0.3 10.4c1.6 0.9 3.4 1.6 5.1 2.2 1.8 0.5 3.5 0.9 5.3 1 1.8 0.1 3.6-0.1 5.4-0.5 1.8-0.4 3.5-0.9 5.2-1.7l0 0c0.2-0.1 0.4 0 0.5 0.2 0.1 0.2 0 0.4-0.1 0.5 -1.6 1.2-3.4 2-5.3 2.5 -1.9 0.5-3.8 0.7-5.8 0.5 -1.9-0.1-3.8-0.6-5.6-1.3 -1.8-0.7-3.5-1.7-5-3C0 10.6 0 10.5 0 10.4 0.1 10.3 0.2 10.3 0.3 10.4L0.3 10.4z',
                }),
                (0, o.jsx)('path', {
                  fill: e.fill,
                  d: 'M21.7 3.3c0.5-0.3 1.1-0.2 1.6 0.2V2.6c-0.2-0.1-0.3-0.2-0.5-0.3 -0.5-0.1-1-0.1-1.5 0.1 -1 0.4-1.4 1.5-1.4 2.4 0 0.4 0.1 0.9 0.3 1.3 0.2 0.4 0.5 0.9 1 1.1 0.4 0.3 1 0.3 1.4 0.3 0.3 0 0.5-0.1 0.8-0.2V6.6c-0.6 0.1-1.3 0.1-1.7-0.2 -0.5-0.3-0.7-0.9-0.7-1.6C20.9 4.2 21.2 3.6 21.7 3.3z',
                }),
                (0, o.jsx)('path', {
                  fill: e.fill,
                  d: 'M16.1 4.7c-0.3-0.2-0.6-0.2-0.8-0.3 -0.2-0.1-0.9-0.2-0.9-0.8 0-0.2 0.2-0.4 0.4-0.4 0.6-0.2 1.3 0 1.9 0.3V2.6c-0.7-0.3-1.5-0.5-2.2-0.2 -0.6 0.2-1.1 0.7-1.2 1.1 -0.1 0.9 0.5 1.4 0.8 1.5 0.3 0.2 0.6 0.2 0.8 0.3 0.5 0.1 0.8 0.3 0.9 0.4C16 5.8 16 5.9 16 6.1s0 0.3-0.2 0.3c-0.3 0.2-0.8 0.2-1.2 0.2 -0.4 0-1-0.2-1.5-0.4v0.8c0.4 0.3 0.9 0.4 1.4 0.5 0.6 0.1 1.1 0.1 1.8-0.2C16.6 7.2 17 6.9 17 6.1 17 5.2 16.4 4.9 16.1 4.7z',
                }),
                (0, o.jsx)('path', {
                  fill: e.fill,
                  d: 'M7.2 4c0-0.1 0-0.2 0-0.3C7.1 3.2 6.8 2.8 6.4 2.6 6 2.4 5.5 2.3 5.1 2.5 4.7 2.6 4.3 2.8 3.9 2.9 3.8 2.8 3.6 2.7 3.5 2.6 3.1 2.4 2.6 2.3 2.2 2.5 2 2.6 1.7 2.7 1.4 2.8V2.3H0.4v5.3h1.1V3.6c0.4-0.1 0.7-0.2 1.1-0.3 0.4-0.1 0.7 0.2 0.7 0.5l0 3.6h1.1l0-1.9 0-0.9 0-0.5 0-0.2c0-0.1 0-0.2 0-0.3C4.7 3.6 5 3.5 5.4 3.4c0.4-0.1 0.7 0.2 0.7 0.5l0 3.6h1.1l0-1.9 0-0.9 0-0.5L7.2 4z',
                }),
                (0, o.jsx)('path', {
                  fill: e.fill,
                  d: 'M11.2 6.3c-0.2 0.1-0.3 0.1-0.5 0.2 -0.3 0.1-0.4 0.1-0.6 0.1C9.7 6.5 9.4 6.1 9.4 5.9c0-0.5 0-1.2 0-1.8l0-1.8 -1.1 0 0 1.8c0 0.6 0 1.2 0 1.8 0 0.5 0.3 0.9 0.6 1.1C9.2 7.3 9.6 7.5 10 7.5c0.4 0 0.8-0.1 1.1-0.3 0 0 0.1 0 0.1-0.1v0.2h1.1V2.3h-1.1V6.3z',
                }),
                (0, o.jsx)('rect', { fill: e.fill, x: '17.7', y: '2.3', width: '1.1', height: '5.3' }),
                (0, o.jsx)('ellipse', { fill: e.fill, cx: '18.2', cy: '0.8', rx: '0.7', ry: '0.8' }),
              ],
            }
          )
        );
      };
      function K(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : K(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var Y = function (e) {
        return (0, o.jsx)(
          'svg',
          Q(
            Q({ viewBox: '0 0 32 14', width: '32', height: '14' }, e),
            {},
            {
              children: (0, o.jsx)('path', {
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
            return (0, o.jsx)(w, {});
          case 'twitter':
            return (0, o.jsx)(g, {});
          case 'instagram':
            return (0, o.jsx)(S, {});
          case 'linkedin':
            return (0, o.jsx)(P, {});
          case 'youtube':
            return (0, o.jsx)(d, {});
          case 'tiktok':
            return (0, o.jsx)(p, {});
          case 'snapchat':
            return (0, o.jsx)(O, {});
          case 'amazonMusic':
          case 'amazon':
            return (0, o.jsx)(G, {});
          case 'appleMusic':
          case 'apple':
            return (0, o.jsx)(A, {});
          case 'napster':
            return (0, o.jsx)(W, {});
          case 'spotify':
            return (0, o.jsx)(F, {});
          case 'tidal':
            return (0, o.jsx)(_, {});
          case 'soundcloud':
            return (0, o.jsx)(Y, {});
          case 'deezer':
            return (0, o.jsx)(M, {});
          case 'pandora':
            return (0, o.jsx)(V, {});
          default:
            return (0, o.jsx)(a, {});
        }
      }
    },
  },
]);
