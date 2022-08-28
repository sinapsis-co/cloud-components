_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [17],
  {
    '5wV8': function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return h;
      });
      var n = i('wx14'),
        r = i('Ff2n'),
        a = i('q1tI'),
        o = i.n(a),
        c = i('vOnD'),
        l = o.a.createElement;
      function h(t) {
        var e = t.src,
          i = t.variant,
          a = void 0 === i ? 'square' : i,
          o = Object(r.a)(t, ['src', 'variant']);
        return e ? l(s, Object(n.a)({ variant: a, src: e }, o)) : l(u, { variant: a, as: 'div' });
      }
      var s = c.d.img.withConfig({ displayName: 'cover-image__Cover', componentId: 'y910y5-0' })(
          ['object-fit:cover;border-radius:5px;', ' ', ' ', ''],
          function (t) {
            return (
              'square' === t.variant &&
              Object(c.c)(
                ['width:', ';height:', ';@media (max-width:', '){width:', ';height:', ';}'],
                function (t) {
                  return t.theme.sizes.coverSize;
                },
                function (t) {
                  return t.theme.sizes.coverSize;
                },
                function (t) {
                  var e = t.theme;
                  return ''.concat(e.breakpoints.laptop, 'px');
                },
                function (t) {
                  return t.theme.sizes.coverSizeMobile;
                },
                function (t) {
                  return t.theme.sizes.coverSizeMobile;
                }
              )
            );
          },
          function (t) {
            return (
              'squareSmall' === t.variant &&
              Object(c.c)(
                ['width:', ';height:', ';'],
                function (t) {
                  return t.theme.sizes.coverSizeSmall;
                },
                function (t) {
                  return t.theme.sizes.coverSizeSmall;
                }
              )
            );
          },
          function (t) {
            return (
              'squareHighlight' === t.variant &&
              Object(c.c)(
                ['width:', ';height:', ';@media (max-width:', '){width:', ';height:', ';}'],
                function (t) {
                  return t.theme.sizes.coverSizeHighlight;
                },
                function (t) {
                  return t.theme.sizes.coverSizeHighlight;
                },
                function (t) {
                  var e = t.theme;
                  return ''.concat(e.breakpoints.laptop, 'px');
                },
                function (t) {
                  return t.theme.sizes.coverSizeHighlightMobile;
                },
                function (t) {
                  return t.theme.sizes.coverSizeHighlightMobile;
                }
              )
            );
          }
        ),
        u = Object(c.d)(s).withConfig({ displayName: 'cover-image__CoverColor', componentId: 'y910y5-1' })(
          ['background-color:', ';'],
          function (t) {
            return t.theme.colors.secondary;
          }
        );
    },
    F6jV: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return o;
      });
      var n = i('wx14'),
        r = i('q1tI'),
        a = i.n(r).a.createElement;
      function o(t) {
        return a(
          'svg',
          Object(n.a)({ width: '12', height: '16', viewBox: '0 0 11 14' }, t),
          a('path', {
            d: 'M0 2.73703C0 1.13964 1.78029 0.18686 3.1094 1.07293L9.50385 5.3359C10.6913 6.12754 10.6913 7.87246 9.50385 8.6641L3.1094 12.9271C1.78029 13.8131 0 12.8604 0 11.263V2.73703Z',
            fill: t.fill,
          })
        );
      }
    },
    HkQY: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return s;
      });
      var n = i('q1tI'),
        r = i.n(n),
        a = i('vOnD'),
        o = i('F6jV'),
        c = i('5wV8'),
        l = i('rJDM'),
        h = r.a.createElement;
      function s(t) {
        var e = t.data,
          i = t.className,
          n = t.artistName;
        return e.title && e.url
          ? h(
              u,
              {
                className: i || '',
                href: '/video/'.concat(e.id),
                onClick: function () {
                  analytics.track('Tracpage Link Click', { artist_id: n, category: 'embed' === e.type, name: e.title });
                },
              },
              h(
                p,
                { className: ''.concat(e.highlight ? 'highlight' : null) },
                h(c.a, {
                  src:
                    (function () {
                      var t = (function () {
                        var t;
                        return e.id ? e.id : null === (t = e.url) || void 0 === t ? void 0 : t.split('embed/')[1];
                      })();
                      return [
                        'https://img.youtube.com/vi/'.concat(t, '/maxresdefault.jpg'),
                        'https://img.youtube.com/vi/'.concat(t, '/hqdefault.jpg'),
                        'https://img.youtube.com/vi/'.concat(t, '/mqdefault.jpg'),
                        'https://img.youtube.com/vi/'.concat(t, '/default.jpg'),
                      ];
                    })()[0] || void 0,
                  alt: e.title,
                  variant: e.highlight ? 'squareHighlight' : 'square',
                }),
                h(m, { className: 'play-icon '.concat(e.highlight ? 'highlight' : null) }, h(o.a, null))
              ),
              h(
                d,
                { highlight: e.highlight },
                h(
                  g,
                  { className: ''.concat(e.highlight ? 'highlight' : null) },
                  h('h3', null, e.title),
                  h('p', null, n, ', Star6ixse7en, MRG, Sweez')
                ),
                e.highlight ? h(l.a, { className: 'badge' }) : null
              )
            )
          : null;
      }
      var u = a.d.a.withConfig({ displayName: 'video-link__StyledVideoLink', componentId: 'sc-7idreb-0' })(
          [
            'display:flex;flex-direction:column;align-items:flex-start;gap:24px;@media (max-width:',
            '){gap:12px;}&.highlight{background-color:',
            ';grid-column:1/-1;order:-1;flex-direction:row;padding:32px;border-radius:5px;@media (max-width:',
            '){grid-column:1 / -1;padding:24px;flex-direction:column;justify-content:center;align-items:center;}}&:hover{.play-icon{opacity:1;}}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptop, 'px');
          },
          function (t) {
            return t.theme.colors.highlightBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptop, 'px');
          }
        ),
        p = a.d.div.withConfig({ displayName: 'video-link__WrapperImage', componentId: 'sc-7idreb-1' })(
          [
            'padding:32px;border-radius:5px;background-color:',
            ';position:relative;max-height:288px;transition:background-color ',
            ';&:hover{background-color:',
            ';}@media (max-width:',
            '){display:flex;justify-content:center;align-items:center;padding:0;}&.highlight{height:',
            ';padding:0;background:none;margin:0 32px 0 0;@media (max-width:',
            '){height:',
            ';margin:0 0 24px 0;height:auto;}}',
          ],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            return t.theme.colors.itemBackgroundHover;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptop, 'px');
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlight;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptop, 'px');
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlightMobile;
          }
        ),
        d = a.d.div.withConfig({ displayName: 'video-link__WrapperInfo', componentId: 'sc-7idreb-2' })(
          ['display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;height:100%;', ''],
          function (t) {
            return (
              t.highlight &&
              Object(a.c)(['@media (max-width:', '){align-items:center;gap:24px;}'], function (t) {
                var e = t.theme;
                return ''.concat(e.breakpoints.laptop, 'px');
              })
            );
          }
        ),
        g = a.d.div.withConfig({ displayName: 'video-link__Info', componentId: 'sc-7idreb-3' })(
          [
            'text-align:left;> h3{margin:0px;color:',
            ';font-size:16px;font-weight:700;line-height:24px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}> p{color:',
            ';margin:0px;font-size:14px;font-weight:400;line-height:20px;opacity:0.7;}@media (max-width:',
            '){&.highlight{> h3,> p{text-align:center;}}> h3{white-space:pre-wrap;text-overflow:ellipsis;}> p{white-space:pre-wrap;overflow:hidden;text-overflow:ellipsis;}}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        m = a.d.div.withConfig({ displayName: 'video-link__Play', componentId: 'sc-7idreb-4' })(
          [
            'background-color:',
            ';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:50%;cursor:pointer;opacity:0;padding:0;overflow:hidden;transition:opacity ',
            ';> svg{fill:',
            ';transition:fill ',
            ';}',
          ],
          function (t) {
            return t.theme.colors.background;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            return t.theme.colors.accent;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          }
        );
    },
    'M/EI': function (t, e, i) {
      'use strict';
      var n = i('q1tI'),
        r = i.n(n),
        a = i('vOnD'),
        o = r.a.createElement,
        c = a.d.div.withConfig({ displayName: 'grid__StyledGrid', componentId: 'sc-1mu4cgu-0' })(
          [
            'display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:32px;.full-width{grid-column:1 / -1;}@media (max-width:',
            '){grid-column-gap:16px;grid-row-gap:32px;}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptop, 'px');
          }
        );
      e.a = function (t) {
        var e = t.className,
          i = t.children;
        return o(c, { className: e || '' }, i);
      };
    },
    MWXp: function (t, e, i) {
      'use strict';
      var n = i('q1tI'),
        r = i.n(n),
        a = i('9ixD'),
        o = r.a.createElement;
      e.a = function (t) {
        var e = t.pageData;
        return o(
          r.a.Fragment,
          null,
          o(a.a, {
            title: e.title,
            description: e.description || e.data.bio || e.title,
            openGraph: {
              title: e.title,
              description: e.description || e.data.bio || e.title,
              url: 'https://'.concat(e.subdomain, '.').concat('development.trac.co', '/'),
              images: [{ url: e.avatar }],
              type: 'website',
            },
          })
        );
      };
    },
    P1vn: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, '__N_SSP', function () {
          return f;
        }),
        i.d(e, 'default', function () {
          return v;
        });
      var n = i('rePB'),
        r = i('q1tI'),
        a = i.n(r),
        o = i('M/EI'),
        c = i('SL6b'),
        l = i('6Hpx'),
        h = i('MWXp'),
        s = i('42Rd'),
        u = i('jtTr'),
        p = i('HkQY'),
        d = a.a.createElement;
      function g(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? g(Object(i), !0).forEach(function (e) {
                Object(n.a)(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : g(Object(i)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
              });
        }
        return t;
      }
      var f = !0;
      function v(t) {
        var e = Object(u.a)(t.siteData).pageData;
        return e && e.id
          ? d(
              a.a.Fragment,
              null,
              d(h.a, { pageData: e }),
              d(
                s.a,
                { theme: e ? e.theme : void 0 },
                d(
                  l.a,
                  { pageData: e },
                  d(
                    o.a,
                    null,
                    (function () {
                      var t = [],
                        i = [];
                      return (
                        null === e ||
                          void 0 === e ||
                          e.links
                            .sort(function (t, e) {
                              return t.order - e.order;
                            })
                            .forEach(function (t) {
                              i.push(m(m({}, t), {}, { order: i.length }));
                            }),
                        (null === i || void 0 === i ? void 0 : i.length) > 0 && t.push(i),
                        t
                      );
                    })().map(function (t) {
                      return t.map(function (t, i) {
                        var n, r;
                        return 'embed' === t.type
                          ? d(p.a, {
                              data: {
                                title: t.title,
                                url: null === (n = t.embedData) || void 0 === n ? void 0 : n.url,
                                id: (null === (r = t.embedData) || void 0 === r ? void 0 : r.id) || '',
                                type: t.type,
                              },
                              artistName: e.title,
                              key: i,
                            })
                          : 'traclink' === t.type
                          ? d(c.a, { data: t, key: i, className: t.highlight ? 'highlight' : '', artistName: e.title })
                          : null;
                      });
                    })
                  )
                )
              )
            )
          : null;
      }
    },
    SL6b: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return s;
      });
      var n = i('q1tI'),
        r = i.n(n),
        a = i('vOnD'),
        o = i('F6jV'),
        c = i('5wV8'),
        l = i('rJDM'),
        h = r.a.createElement;
      function s(t) {
        var e = t.data,
          i = t.className,
          n = t.artistName;
        return e.title && e.url
          ? h(
              u,
              {
                className: i || '',
                href: '/music'.concat(e.url),
                onClick: function () {
                  analytics.track('Tracpage Link Click', {
                    artist_id: n,
                    category: 'traclink' === e.type ? 'Release' : 'Url',
                    name: e.title,
                  });
                },
              },
              h(
                p,
                { className: ''.concat(e.highlight ? 'highlight' : null) },
                h(c.a, { src: e.avatar, alt: e.title, variant: e.highlight ? 'squareHighlight' : 'square' }),
                h(m, { className: 'play-icon '.concat(e.highlight ? 'highlight' : null) }, h(o.a, null))
              ),
              h(
                d,
                { highlight: e.highlight },
                h(
                  g,
                  { className: ''.concat(e.highlight ? 'highlight' : null) },
                  h('h3', null, e.title),
                  h('p', null, n, ', Star6ixse7en, MRG, Sweez')
                ),
                e.highlight ? h(l.a, { className: 'badge' }) : null
              )
            )
          : null;
      }
      var u = a.d.a.withConfig({ displayName: 'song-link__StyledSongLink', componentId: 'sc-1wye2kl-0' })(
          [
            'display:flex;flex-direction:column;align-items:flex-start;gap:24px;@media (max-width:',
            '){gap:12px;}&.highlight{background-color:',
            ';grid-column:1/-1;order:-1;flex-direction:row;padding:32px;border-radius:5px;@media (max-width:',
            '){grid-column:1 / -1;padding:24px;flex-direction:column;justify-content:center;align-items:center;}}&:hover{.play-icon{opacity:1;}}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptop, 'px');
          },
          function (t) {
            return t.theme.colors.highlightBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptop, 'px');
          }
        ),
        p = a.d.div.withConfig({ displayName: 'song-link__WrapperImage', componentId: 'sc-1wye2kl-1' })(
          [
            'padding:32px;border-radius:5px;background-color:',
            ';position:relative;max-height:288px;transition:background-color ',
            ';&:hover{background-color:',
            ';}@media (max-width:',
            '){display:flex;justify-content:center;align-items:center;padding:0;}&.highlight{height:',
            ';padding:0;background:none;margin:0 32px 0 0;@media (max-width:',
            '){height:',
            ';margin:0 0 24px 0;height:auto;}}',
          ],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            return t.theme.colors.itemBackgroundHover;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptop, 'px');
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlight;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptop, 'px');
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlightMobile;
          }
        ),
        d = a.d.div.withConfig({ displayName: 'song-link__WrapperInfo', componentId: 'sc-1wye2kl-2' })(
          ['display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;height:100%;', ''],
          function (t) {
            return (
              t.highlight &&
              Object(a.c)(['@media (max-width:', '){align-items:center;gap:24px;}'], function (t) {
                var e = t.theme;
                return ''.concat(e.breakpoints.laptop, 'px');
              })
            );
          }
        ),
        g = a.d.div.withConfig({ displayName: 'song-link__Info', componentId: 'sc-1wye2kl-3' })(
          [
            'text-align:left;> h3{margin:0px;color:',
            ';font-size:16px;font-weight:700;line-height:24px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}> p{color:',
            ';margin:0px;font-size:14px;font-weight:400;line-height:20px;opacity:0.7;}@media (max-width:',
            '){&.highlight{> h3,> p{text-align:center;}}> h3{white-space:pre-wrap;text-overflow:ellipsis;}> p{white-space:pre-wrap;overflow:hidden;text-overflow:ellipsis;}}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        m = a.d.div.withConfig({ displayName: 'song-link__Play', componentId: 'sc-1wye2kl-4' })(
          [
            'background-color:',
            ';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:50%;cursor:pointer;opacity:0;padding:0;overflow:hidden;transition:opacity ',
            ';> svg{fill:',
            ';transition:fill ',
            ';}',
          ],
          function (t) {
            return t.theme.colors.background;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            return t.theme.colors.accent;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          }
        );
    },
    gq86: function (t, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/music',
        function () {
          return i('P1vn');
        },
      ]);
    },
    rJDM: function (t, e, i) {
      'use strict';
      var n = i('q1tI'),
        r = i.n(n),
        a = i('vOnD'),
        o = i('wx14'),
        c = i('Ff2n'),
        l = r.a.createElement,
        h = function (t) {
          var e = t.className,
            i = t.onClick,
            n = Object(c.a)(t, ['className', 'onClick']),
            r = Object(a.e)();
          return l(
            'svg',
            Object(o.a)(
              {
                viewBox: '0 0 13 14',
                width: 13,
                height: 14,
                className: e,
                onClick: i,
                'aria-hidden': 'true',
                role: 'img',
                style: { cursor: i ? 'pointer' : 'normal' },
              },
              n
            ),
            l('path', {
              fill: r.colors.highlightDark,
              d: 'M5.53,12.45c-.5,0-.99-.21-1.33-.6l-.17-.2c-.38-.44-.43-1.07-.12-1.56,.19-.31,.25-.66,.17-1.01-.09-.35-.3-.64-.62-.83L.95,6.74C.41,6.42,.05,5.85,0,5.24c-.05-.62,.22-1.23,.7-1.63L4.56,.46C5.04,.06,5.68-.09,6.29,.05c.62,.14,1.12,.55,1.37,1.11l1.08,2.41c.3,.66,1.01,1.04,1.74,.93,.57-.09,1.14,.12,1.5,.55l.1,.11c.68,.79,.57,1.96-.23,2.62l-5.21,4.26c-.32,.27-.72,.39-1.11,.39ZM1.99,5.09l2.51,1.5c.77,.46,1.3,1.18,1.51,2.03,.11,.46,.12,.93,.03,1.38l4.33-3.55c-1.47,.07-2.86-.77-3.46-2.11l-1.08-2.41L1.99,5.09Zm8.47,1.21h0Z',
            }),
            l('path', {
              fill: r.colors.highlightDark,
              d: 'M12.19,14c-.23,0-.46-.1-.62-.28l-1.28-1.49c-.29-.33-.24-.83,.1-1.12,.34-.28,.85-.24,1.14,.1l1.28,1.49c.29,.33,.24,.83-.1,1.12-.15,.12-.34,.18-.52,.18Z',
            })
          );
        },
        s = r.a.createElement,
        u =
          ((e.a = function (t) {
            var e = t.className;
            return s(u, { className: e || '' }, s(h, null), s('h6', null, 'Featured'));
          }),
          a.d.div.withConfig({ displayName: 'featured-badge__StyledBadge', componentId: 'sc-69krp2-0' })(
            [
              'background-color:',
              ';border-radius:90px;max-width:120px;padding:8px 16px;display:flex;justify-contet:flex-start;align-items:center;gap:10px;h6{color:',
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
          ));
    },
  },
  [['gq86', 0, 2, 3, 1, 4]],
]);
