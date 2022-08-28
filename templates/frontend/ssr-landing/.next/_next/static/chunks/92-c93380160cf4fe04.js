'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [92],
  {
    1774: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return m;
        },
      });
      var n = i(186),
        r = i(9568),
        o = i(9499),
        a = i(6805),
        c = i(5893);
      function l(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(i), !0).forEach(function (t) {
                (0, o.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : l(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function u(e) {
        return (0, c.jsx)(p, {
          initial: 'rest',
          whileHover: 'hover',
          whileTap: 'tap',
          animate: 'rest',
          children: (0, c.jsxs)(
            'svg',
            s(
              s({ width: '40', height: '40', viewBox: '0 0 50 50' }, e),
              {},
              {
                children: [
                  (0, c.jsx)(h, { cx: '25', cy: '25', r: '25' }),
                  (0, c.jsx)(f, {
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
      var p = (0, n.ZP)(a.ww.div).withConfig({ displayName: 'back__IconWrapper', componentId: 'om8no8-0' })(
          ['cursor:pointer;width:40px;height:40px;&:hover{circle{fill:', ';}}'],
          function (e) {
            return e.theme.colors.itemBackgroundHover;
          }
        ),
        h = n.ZP.circle.withConfig({ displayName: 'back__StyledCircle', componentId: 'om8no8-1' })(
          ['fill:', ';transition:fill ', ';'],
          function (e) {
            return e.theme.colors.sidebarBackground;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          }
        ),
        f = (0, n.ZP)(a.ww.path).withConfig({ displayName: 'back__StyledPath', componentId: 'om8no8-2' })(
          ['fill:', ';'],
          function (e) {
            return e.theme.colors.icon;
          }
        ),
        d = i(1163);
      function m(e) {
        var t = e.onClick,
          i = (0, d.useRouter)();
        return (0, c.jsx)(v, {
          alignItems: 'center',
          children: (0, c.jsx)(u, {
            onClick:
              t ||
              function () {
                return i.back();
              },
          }),
        });
      }
      var v = (0, n.ZP)(r.Z).withConfig({
        displayName: 'back-navigation__NavigationContainer',
        componentId: 'kfmxgl-0',
      })(['max-height:40px;']);
    },
    1355: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = i(6805),
        r = i(186),
        o = i(8052),
        a = i(5893);
      function c(e) {
        var t = e.src,
          i = e.alt,
          n = e.variant,
          r = void 0 === n ? 'square' : n,
          c = e.noAnimation;
        return t
          ? (0, a.jsx)(l, {
              variant: r,
              src: t,
              alt: i,
              variants: c ? void 0 : o.LS,
              initial: c ? void 0 : 'initial',
              animate: c ? void 0 : 'animate',
              exit: 'exit',
              transition: o.kr,
            })
          : (0, a.jsx)(s, {
              variant: r,
              variants: c ? void 0 : o.LS,
              initial: c ? void 0 : 'initial',
              animate: c ? void 0 : 'animate',
              exit: 'exit',
              transition: o.kr,
            });
      }
      var l = (0, r.ZP)(n.ww.img).withConfig({ displayName: 'cover-image__Cover', componentId: 'y910y5-0' })(
          ['object-fit:cover;border-radius:5px;', ' ', ' ', ''],
          function (e) {
            return (
              'square' === e.variant &&
              (0, r.iv)(
                ['width:', ';height:', ';@media (max-width:', '){width:', ';height:', ';}'],
                function (e) {
                  return e.theme.sizes.coverSize;
                },
                function (e) {
                  return e.theme.sizes.coverSize;
                },
                function (e) {
                  var t = e.theme;
                  return ''.concat(t.breakpoints.laptop, 'px');
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
              (0, r.iv)(
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
              'squareHighlight' === e.variant &&
              (0, r.iv)(
                ['width:', ';height:', ';@media (max-width:', '){width:', ';height:', ';}'],
                function (e) {
                  return e.theme.sizes.coverSizeHighlight;
                },
                function (e) {
                  return e.theme.sizes.coverSizeHighlight;
                },
                function (e) {
                  var t = e.theme;
                  return ''.concat(t.breakpoints.laptopS, 'px');
                },
                function (e) {
                  return e.theme.sizes.coverSizeHighlightMobile;
                },
                function (e) {
                  return e.theme.sizes.coverSizeHighlightMobile;
                }
              )
            );
          }
        ),
        s = (0, r.ZP)(n.ww.div).withConfig({ displayName: 'cover-image__CoverColor', componentId: 'y910y5-1' })(
          ['background-color:', ';border-radius:5px;', ' ', ' ', ''],
          function (e) {
            return e.theme.colors.secondary;
          },
          function (e) {
            return (
              'square' === e.variant &&
              (0, r.iv)(
                ['width:', ';height:', ';@media (max-width:', '){width:', ';height:', ';}'],
                function (e) {
                  return e.theme.sizes.coverSize;
                },
                function (e) {
                  return e.theme.sizes.coverSize;
                },
                function (e) {
                  var t = e.theme;
                  return ''.concat(t.breakpoints.laptop, 'px');
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
              (0, r.iv)(
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
              'squareHighlight' === e.variant &&
              (0, r.iv)(
                ['width:', ';height:', ';@media (max-width:', '){width:', ';height:', ';}'],
                function (e) {
                  return e.theme.sizes.coverSizeHighlight;
                },
                function (e) {
                  return e.theme.sizes.coverSizeHighlight;
                },
                function (e) {
                  var t = e.theme;
                  return ''.concat(t.breakpoints.laptopS, 'px');
                },
                function (e) {
                  return e.theme.sizes.coverSizeHighlightMobile;
                },
                function (e) {
                  return e.theme.sizes.coverSizeHighlightMobile;
                }
              )
            );
          }
        );
    },
    9568: function (e, t, i) {
      i(7294);
      var n = i(186),
        r = i(5893);
      t.Z = (0, n.ZP)(function (e) {
        return (0, r.jsx)('div', {
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
    6711: function (e, t, i) {
      var n = i(9499),
        r = i(4730),
        o = i(5893),
        a = ['className', 'onClick', 'hasPointer'];
      function c(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(i), !0).forEach(function (t) {
                (0, n.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : c(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      t.Z = function (e) {
        var t = e.className,
          i = e.onClick,
          n = e.hasPointer,
          c = (0, r.Z)(e, a);
        return (0, o.jsx)(
          'svg',
          l(
            l(
              {
                className: t,
                'aria-hidden': 'true',
                role: 'img',
                width: '11',
                height: '14',
                viewBox: '0 0 11 14',
                onClick: i,
                style: { cursor: i || n ? 'pointer' : 'auto' },
              },
              c
            ),
            {},
            {
              children: (0, o.jsx)('path', {
                d: 'M0 2.73703C0 1.13964 1.78029 0.18686 3.1094 1.07293L9.50385 5.3359C10.6913 6.12754 10.6913 7.87246 9.50385 8.6641L3.1094 12.9271C1.78029 13.8131 0 12.8604 0 11.263V2.73703Z',
                fill: c.fill,
              }),
            }
          )
        );
      };
    },
    1183: function (e, t, i) {
      i(7294);
      var n = i(186),
        r = i(5893);
      t.Z = function (e) {
        var t = e.className,
          i = e.children;
        return (0, r.jsx)(o, { className: t || '', children: i });
      };
      var o = n.ZP.div.withConfig({ displayName: 'text-info__InfoWrapper', componentId: 'zd3pfj-0' })(
        [
          'text-align:left;> h3,> p{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}> h3{margin:0px;color:',
          ';font-size:16px;font-weight:700;line-height:24px;}> p{color:',
          ';margin:0px;font-size:14px;font-weight:400;line-height:20px;opacity:0.7;}@media (max-width:',
          '){&.highlight{> h3,> p{text-align:center;white-space:pre-wrap;text-overflow:ellipsis;}}> h3,> p{white-space:pre-wrap;text-overflow:ellipsis;}}',
        ],
        function (e) {
          return e.theme.colors.primary;
        },
        function (e) {
          return e.theme.colors.primary;
        },
        function (e) {
          var t = e.theme;
          return ''.concat(t.breakpoints.laptopS, 'px');
        }
      );
    },
    7887: function (e, t, i) {
      i(7294);
      var n = i(186),
        r = i(5893);
      t.Z = function (e) {
        var t = e.className,
          i = e.children,
          n = e.highlight;
        return (0, r.jsx)(o, { className: t || '', highlight: n, children: i });
      };
      var o = n.ZP.div.withConfig({ displayName: 'wrapper-info__Wrapper', componentId: 'sc-1kn8itc-0' })(
        ['display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;height:100%;', ''],
        function (e) {
          return (
            e.highlight &&
            (0, n.iv)(['@media (max-width:', '){align-items:center;gap:24px;}'], function (e) {
              var t = e.theme;
              return ''.concat(t.breakpoints.laptopS, 'px');
            })
          );
        }
      );
    },
    6900: function (e, t, i) {
      var n = i(2962),
        r = i(5893);
      t.Z = function (e) {
        var t = e.pageData;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(n.PB, {
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
    5834: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = i(7294),
        r = i(186),
        o = i(6711),
        a = i(9499),
        c = i(5893);
      function l(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(i), !0).forEach(function (t) {
                (0, a.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : l(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function u(e) {
        var t,
          i = e.className,
          r = e.data,
          a = e.variant,
          l = void 0 === a ? 'large' : a,
          s = e.artistName,
          u = (0, n.useState)(!1),
          b = u[0],
          x = u[1],
          y = function () {
            var e;
            return r.id ? r.id : null === (e = r.url) || void 0 === e ? void 0 : e.split('embed/')[1];
          },
          j = null === (t = r.url) || void 0 === t ? void 0 : t.includes('list=');
        return (0, c.jsxs)(p, {
          className: i,
          children: [
            (0, c.jsx)(h, {
              children: b
                ? (0, c.jsx)('iframe', {
                    className: 'iframe',
                    title: r.title ? r.title : 'Music Video',
                    src: (function () {
                      var e = y();
                      return e
                        ? j
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
                : (0, c.jsxs)(f, {
                    onClick: function () {
                      analytics.track('Tracpage Link Click', {
                        artist_id: s,
                        category: 'traclink' === r.type ? 'Release' : 'Url',
                        name: r.title,
                      }),
                        x(!b);
                    },
                    children: [
                      (0, c.jsx)(d, { children: (0, c.jsx)(o.Z, {}) }),
                      (0, c.jsx)(m, {
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
                        alt: r.title || 'Music Video',
                      }),
                    ],
                  }),
            }),
            (0, c.jsxs)(v, { children: [(0, c.jsx)(g, { children: r.title }), (0, c.jsx)(w, { children: s })] }),
          ],
        });
      }
      var p = r.ZP.div.withConfig({ displayName: 'video-player__VideoContainer', componentId: 'sc-19p591d-0' })([
          'display:grid;grid-template-columns:1fr;gap:24px;',
        ]),
        h = r.ZP.div.withConfig({ displayName: 'video-player__VideoWrapper', componentId: 'sc-19p591d-1' })([
          'width:100%;position:relative;border-radius:5px;overflow:hidden;height:0;padding-top:56.25%;> iframe{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;}',
        ]),
        f = r.ZP.div.withConfig({ displayName: 'video-player__ImageWrapper', componentId: 'sc-19p591d-2' })([
          'cursor:pointer;display:flex;justify-content:center;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;',
        ]),
        d = r.ZP.button.withConfig({ displayName: 'video-player__PlayButton', componentId: 'sc-19p591d-3' })(
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
        m = (0, r.ZP)(function (e) {
          var t = (0, n.useState)(e.src),
            i = t[0],
            r = t[1],
            o = (0, n.useState)(e.src.length ? e.src[0] : ''),
            a = o[0],
            l = o[1];
          if (!e.src.length || !a || !i.length) return null;
          var u = function () {
              var e = i.slice(1);
              r(e), e.length && l(e[0]);
            },
            p = s(
              s({}, e),
              {},
              {
                src: a,
                onError: u,
                onLoad: function (e) {
                  120 === e.currentTarget.naturalWidth && u();
                },
              }
            );
          return (0, c.jsx)('img', s(s({}, p), {}, { alt: e.alt }));
        }).withConfig({ displayName: 'video-player__CoverImage', componentId: 'sc-19p591d-4' })(
          ['border-radius:5px;', ' ', ''],
          function (e) {
            return 'large' === e.variant && (0, r.iv)(['object-fit:cover;width:100%;']);
          },
          function (e) {
            return 'small' === e.variant && (0, r.iv)(['object-fit:cover;height:100%;width:100%;']);
          }
        ),
        v = r.ZP.div.withConfig({ displayName: 'video-player__Info', componentId: 'sc-19p591d-5' })([
          'display:flex;flex-direction:column;gap:12px;',
        ]),
        g = r.ZP.h4.withConfig({ displayName: 'video-player__Title', componentId: 'sc-19p591d-6' })(
          [
            'color:',
            ';font-weight:800;font-size:32px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;margin:0;@media (max-width:',
            '){font-size:24px;overflow:visible;display:block;}',
          ],
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.laptopS, 'px');
          }
        ),
        w = r.ZP.h6.withConfig({ displayName: 'video-player__Text', componentId: 'sc-19p591d-7' })(
          ['color:', ';font-size:24px;font-weight:400;margin:0;opacity:0.7;@media (max-width:', '){font-size:16px;}'],
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.laptopS, 'px');
          }
        );
    },
  },
]);
