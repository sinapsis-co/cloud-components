'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [957],
  {
    1355: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = i(6805),
        r = i(186),
        a = i(8052),
        o = i(5893);
      function c(e) {
        var t = e.src,
          i = e.alt,
          n = e.variant,
          r = void 0 === n ? 'square' : n,
          c = e.noAnimation;
        return t
          ? (0, o.jsx)(h, {
              variant: r,
              src: t,
              alt: i,
              variants: c ? void 0 : a.LS,
              initial: c ? void 0 : 'initial',
              animate: c ? void 0 : 'animate',
              exit: 'exit',
              transition: a.kr,
            })
          : (0, o.jsx)(s, {
              variant: r,
              variants: c ? void 0 : a.LS,
              initial: c ? void 0 : 'initial',
              animate: c ? void 0 : 'animate',
              exit: 'exit',
              transition: a.kr,
            });
      }
      var h = (0, r.ZP)(n.ww.img).withConfig({ displayName: 'cover-image__Cover', componentId: 'y910y5-0' })(
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
    6711: function (e, t, i) {
      var n = i(9499),
        r = i(4730),
        a = i(5893),
        o = ['className', 'onClick', 'hasPointer'];
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
      function h(e) {
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
          c = (0, r.Z)(e, o);
        return (0, a.jsx)(
          'svg',
          h(
            h(
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
              children: (0, a.jsx)('path', {
                d: 'M0 2.73703C0 1.13964 1.78029 0.18686 3.1094 1.07293L9.50385 5.3359C10.6913 6.12754 10.6913 7.87246 9.50385 8.6641L3.1094 12.9271C1.78029 13.8131 0 12.8604 0 11.263V2.73703Z',
                fill: c.fill,
              }),
            }
          )
        );
      };
    },
    7423: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return f;
        },
      });
      var n = i(6835),
        r = (i(7294), i(186)),
        a = i(6805),
        o = i(131),
        c = i(8052),
        h = i(9499),
        s = i(4730),
        l = i(5893),
        u = ['className', 'children'];
      function g(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(i), !0).forEach(function (t) {
                (0, h.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : g(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      var m = function (e) {
          var t = e.className,
            i = e.children,
            n = (0, s.Z)(e, u);
          return (0, l.jsx)(d, p(p({ className: 'wrapper-image '.concat(t || '') }, n), {}, { children: i }));
        },
        d = (0, r.ZP)(a.ww.div).withConfig({ displayName: 'wrapper-image__Wrapper', componentId: 'sc-1uhyz08-0' })(
          [
            'padding:32px;border-radius:5px;background-color:',
            ';position:relative;max-height:',
            ';width:100%;display:flex;justify-content:center;transition:background-color ',
            ';@media (max-width:',
            '){display:flex;justify-content:center;align-items:center;padding:0;width:auto;max-height:',
            ';.motion{max-height:',
            ';}}&.highlight{height:',
            ';padding:0;width:auto;background:none;max-height:none;@media (max-width:',
            '){max-height:none;height:',
            ';.motion{height:',
            ';max-height:none;}}}',
          ],
          function (e) {
            return e.theme.colors.itemBackground;
          },
          function (e) {
            var t = e.theme;
            return 'calc('.concat(t.sizes.coverSize, ' + (32px * 2))');
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.laptopS, 'px');
          },
          function (e) {
            return e.theme.sizes.coverSizeMobile;
          },
          function (e) {
            return e.theme.sizes.coverSizeMobile;
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
        ),
        f = function (e) {
          var t = e.className,
            i = e.children,
            r = e.href,
            h = e.hasDelay,
            s = e.image,
            u = e.highlight,
            g = e.noAnimation,
            p = e.onClick,
            d = (0, o.YD)({ root: null, rootMargin: '100px 0px', threshold: 0.3, triggerOnce: !0 }),
            f = (0, n.Z)(d, 2),
            w = f[0],
            b = f[1];
          return (0, l.jsx)(v, {
            className: t || '',
            href: r,
            onClick: p,
            ref: w,
            variants: g ? void 0 : c.LS,
            initial: g ? void 0 : 'initial',
            animate: g ? void 0 : b || 0 === h ? 'animate' : 'initial',
            exit: 'exit',
            transition: { duration: 0.35, delay: h ? 0.1 * h : 0, ease: [0, 0.005, 0.2, 1] },
            children: (0, l.jsxs)(x, {
              initial: 'rest',
              whileHover: 'hover',
              whileTap: 'tap',
              animate: 'rest',
              className: 'wrapper',
              children: [
                (0, l.jsx)(m, {
                  className: u,
                  children: (0, l.jsx)(a.ww.div, {
                    className: 'motion',
                    variants: c.wM,
                    transition: c.BH,
                    children: s,
                  }),
                }),
                i,
              ],
            }),
          });
        },
        v = (0, r.ZP)(a.ww.a).withConfig({ displayName: 'link__StyledLink', componentId: 'gyn5x7-0' })(
          [
            '&.highlight{background-color:',
            ';grid-column:span 2;order:-1;.wrapper{flex-direction:row;padding:32px;gap:32px;border-radius:5px;height:100%;@media (max-width:',
            '){padding:24px;gap:24px;flex-direction:column;justify-content:center;align-items:center;}}}&:hover{.wrapper-image{background-color:',
            ';&.highlight{background:none;}}}',
          ],
          function (e) {
            return e.theme.colors.highlightBackground;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.laptopS, 'px');
          },
          function (e) {
            return e.theme.colors.itemBackgroundHover;
          }
        ),
        x = (0, r.ZP)(a.ww.div).withConfig({ displayName: 'link__Wrapper', componentId: 'gyn5x7-1' })(
          [
            'display:flex;flex-direction:column;align-items:flex-start;gap:24px;@media (max-width:',
            '){gap:12px;}&:hover{.play-icon{opacity:1;}}',
          ],
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.laptopS, 'px');
          }
        );
    },
    1362: function (e, t, i) {
      i(7294);
      var n = i(186),
        r = i(5893);
      t.Z = function (e) {
        var t = e.className,
          i = e.children;
        return (0, r.jsx)(a, { className: t || '', children: i });
      };
      var a = n.ZP.div.withConfig({ displayName: 'play-wrapper__PlayWrapper', componentId: 'sc-2nscag-0' })(
        [
          'background-color:',
          ';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:50%;cursor:pointer;opacity:0;padding:0;overflow:hidden;transition:opacity ',
          ';> svg{fill:',
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
          return e.theme.colors.accent;
        },
        function (e) {
          var t = e.theme;
          return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
        }
      );
    },
    1183: function (e, t, i) {
      i(7294);
      var n = i(186),
        r = i(5893);
      t.Z = function (e) {
        var t = e.className,
          i = e.children;
        return (0, r.jsx)(a, { className: t || '', children: i });
      };
      var a = n.ZP.div.withConfig({ displayName: 'text-info__InfoWrapper', componentId: 'zd3pfj-0' })(
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
        return (0, r.jsx)(a, { className: t || '', highlight: n, children: i });
      };
      var a = n.ZP.div.withConfig({ displayName: 'wrapper-info__Wrapper', componentId: 'sc-1kn8itc-0' })(
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
    1807: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = i(6711),
        r = i(1355),
        a = i(7423),
        o = i(5322),
        c = i(1183),
        h = i(1362),
        s = i(7887),
        l = i(5893);
      function u(e) {
        var t = e.data,
          i = e.className,
          u = e.artistName,
          g = e.hasDelay,
          p = e.noAnimation;
        return t.title && t.url
          ? (0, l.jsx)(a.Z, {
              className: i || '',
              href: ''.concat(t.url),
              onClick: function () {
                analytics.track('Tracpage Link Click', {
                  artist_id: u,
                  category: 'traclink' === t.type ? 'Release' : 'Url',
                  name: t.title,
                });
              },
              hasDelay: g,
              highlight: t.highlight ? 'highlight' : '',
              noAnimation: p,
              image: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(r.Z, { src: t.avatar, alt: t.title, variant: t.highlight ? 'squareHighlight' : 'square' }),
                  (0, l.jsx)(h.Z, {
                    className: 'play-icon '.concat(t.highlight ? 'highlight' : ''),
                    children: (0, l.jsx)(n.Z, {}),
                  }),
                ],
              }),
              children: (0, l.jsxs)(s.Z, {
                highlight: t.highlight,
                children: [
                  (0, l.jsxs)(c.Z, {
                    className: ''.concat(t.highlight ? 'highlight' : ''),
                    children: [
                      (0, l.jsx)('h3', { children: t.title }),
                      (0, l.jsxs)('p', { children: [u, ', Star6ixse7en, MRG, Sweez'] }),
                    ],
                  }),
                  t.highlight ? (0, l.jsx)(o.Z, { className: 'badge' }) : null,
                ],
              }),
            })
          : null;
      }
    },
    3492: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = i(6711),
        r = i(1355),
        a = i(7423),
        o = i(5322),
        c = i(1183),
        h = i(1362),
        s = i(7887),
        l = i(5893);
      function u(e) {
        var t = e.data,
          i = e.className,
          u = e.artistName,
          g = e.hasDelay,
          p = e.noAnimation;
        return t.title && t.url
          ? (0, l.jsx)(a.Z, {
              className: i || '',
              href: '/video/'.concat(t.id),
              onClick: function () {
                analytics.track('Tracpage Link Click', { artist_id: u, category: 'embed' === t.type, name: t.title });
              },
              hasDelay: g,
              highlight: t.highlight ? 'highlight' : '',
              noAnimation: p,
              image: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(r.Z, {
                    src:
                      (function () {
                        var e = (function () {
                          var e;
                          return t.id ? t.id : null === (e = t.url) || void 0 === e ? void 0 : e.split('embed/')[1];
                        })();
                        return [
                          'https://img.youtube.com/vi/'.concat(e, '/maxresdefault.jpg'),
                          'https://img.youtube.com/vi/'.concat(e, '/hqdefault.jpg'),
                          'https://img.youtube.com/vi/'.concat(e, '/mqdefault.jpg'),
                          'https://img.youtube.com/vi/'.concat(e, '/default.jpg'),
                        ];
                      })()[0] || void 0,
                    alt: t.title,
                    variant: t.highlight ? 'squareHighlight' : 'square',
                    noAnimation: p,
                  }),
                  (0, l.jsx)(h.Z, {
                    className: 'play-icon '.concat(t.highlight ? 'highlight' : ''),
                    children: (0, l.jsx)(n.Z, {}),
                  }),
                ],
              }),
              children: (0, l.jsxs)(s.Z, {
                highlight: t.highlight,
                children: [
                  (0, l.jsxs)(c.Z, {
                    className: ''.concat(t.highlight ? 'highlight' : ''),
                    children: [
                      (0, l.jsx)('h3', { children: t.title }),
                      (0, l.jsxs)('p', { children: [u, ', Star6ixse7en, MRG, Sweez'] }),
                    ],
                  }),
                  t.highlight ? (0, l.jsx)(o.Z, { className: 'badge' }) : null,
                ],
              }),
            })
          : null;
      }
    },
  },
]);
