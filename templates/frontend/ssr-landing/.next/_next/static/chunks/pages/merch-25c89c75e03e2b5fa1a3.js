_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [19],
  {
    '/kYb': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return x;
      });
      var i = n('q1tI'),
        a = n.n(i),
        r = n('vOnD'),
        o = n('WqaS'),
        c = n('wx14'),
        u = n('ZMKu'),
        l = a.a.createElement;
      function s(t) {
        return l(
          p,
          { initial: 'rest', whileHover: 'hover', whileTap: 'tap', animate: 'rest' },
          l(
            'svg',
            Object(c.a)({ width: '40', height: '40', viewBox: '0 0 50 50' }, t),
            l(d, { cx: '25', cy: '25', r: '25' }),
            l(m, {
              variants: { rest: { x: 0, scale: 1 }, hover: { x: -2, scale: 1.0625 }, tap: { x: -100, scale: 0.95 } },
              d: 'M31 24h-9.6l3.3-3.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5 5c-0.1 0.1-0.2 0.2-0.2 0.3 -0.1 0.2-0.1 0.5 0 0.8 0.1 0.1 0.1 0.2 0.2 0.3l5 5C23.5 30.9 23.7 31 24 31s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4L21.4 26H31c0.6 0 1-0.4 1-1S31.6 24 31 24z',
            })
          )
        );
      }
      var p = Object(r.e)(u.b.div).withConfig({ displayName: 'back__IconWrapper', componentId: 'om8no8-0' })(
          ['cursor:pointer;width:40px;height:40px;&:hover{circle{fill:', ';}}'],
          function (t) {
            return t.theme.colors.itemBackgroundHover;
          }
        ),
        d = r.e.circle.withConfig({ displayName: 'back__StyledCircle', componentId: 'om8no8-1' })(
          ['fill:', ';transition:fill ', ';'],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          }
        ),
        m = Object(r.e)(u.b.path).withConfig({ displayName: 'back__StyledPath', componentId: 'om8no8-2' })(
          ['fill:', ';'],
          function (t) {
            return t.theme.colors.icon;
          }
        ),
        f = n('20a2'),
        h = a.a.createElement;
      function x(t) {
        var e = t.artistName,
          n = t.title,
          i = t.onClick,
          a = Object(f.useRouter)();
        return h(
          g,
          { alignItems: 'center' },
          h(s, {
            onClick:
              i ||
              function () {
                return a.back();
              },
          }),
          h(w, null, n || e)
        );
      }
      var g = Object(r.e)(o.a).withConfig({
          displayName: 'back-navigation__NavigationContainer',
          componentId: 'kfmxgl-0',
        })(['margin-bottom:30px;@media (max-width:', '){margin-bottom:15px;}'], function (t) {
          var e = t.theme;
          return ''.concat(e.breakpoints.tablet, 'px');
        }),
        w = r.e.h6.withConfig({ displayName: 'back-navigation__Title', componentId: 'kfmxgl-1' })(
          ['font-size:14px;font-weight:700;text-transform:uppercase;margin-left:18px;opacity:0.7;color:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        );
    },
    '0FW9': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return h;
      });
      var i = n('q1tI'),
        a = n.n(i),
        r = n('vOnD'),
        o = n('20a2'),
        c = n('WqaS'),
        u = n('zoQI'),
        l = n('aagu'),
        s = n('RHGb'),
        p = a.a.createElement;
      function d(t) {
        var e = t.className,
          n = t.product,
          i = t.inList,
          a = Object(o.useRouter)();
        return p(
          m,
          {
            className: e,
            onClick: function () {
              window.analytics && window.analytics.track('Merch Page Clicked', { product_id: n.id }),
                a.push('/merch/detail/'.concat(n.id));
            },
          },
          p(l.a, { className: 'image-container', image: n.image, alt: n.title, inList: i || 1 }),
          p(s.a, { className: 'product-info', product: n })
        );
      }
      var m = r.e.div.withConfig({ displayName: 'product-item__ProductContainer', componentId: 'sc-1rx8y8s-0' })(
          [
            'cursor:pointer;max-width:265px;width:100%;@media (max-width:',
            '){max-width:none;}.product-info{margin-top:30px;@media (max-width:',
            '){margin-top:15px;}}&:hover{.image-container{background-color:',
            ';}}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          },
          function (t) {
            return t.theme.colors.itemBackgroundHover;
          }
        ),
        f = a.a.createElement;
      function h(t) {
        var e = t.products,
          n = t.showCart,
          i = Object(o.useRouter)(),
          r = e.sort(function (t, e) {
            return (t.order || 0) - (e.order || 0);
          });
        return f(
          a.a.Fragment,
          null,
          f(
            x,
            null,
            r.map(function (t, e) {
              return f(d, { className: 'product-item', key: ''.concat(t.title, '-').concat(e), product: t, inList: 2 });
            })
          ),
          n
            ? null
            : f(
                g,
                {
                  onClick: function () {
                    return i.push('/merch/cart');
                  },
                },
                'View Cart'
              )
        );
      }
      var x = Object(r.e)(c.a).withConfig({ displayName: 'product-list__ListWrapper', componentId: 'sc-1epfjzo-0' })(
          [
            'align-items:flex-start;justify-content:space-between;flex-flow:row wrap;width:100%;@media (max-width:',
            '){align-items:center;flex-flow:column wrap;padding-bottom:120px;}.product-item{margin-top:70px;@media (max-width:',
            '){margin-top:30px;}}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        g = Object(r.e)(u.a).withConfig({ displayName: 'product-list__CartButton', componentId: 'sc-1epfjzo-1' })(
          [
            'height:70px;font-size:14px;line-height:16px;width:156px;box-shadow:',
            ';position:fixed;right:80px;bottom:80px;@media (max-width:',
            '){width:80%;right:auto;bottom:32px;left:50%;transform:translate(-50%,0);}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.shadows.redShadow);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        );
    },
    F4Zc: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, '__N_SSP', function () {
          return g;
        }),
        n.d(e, 'default', function () {
          return w;
        });
      var i = n('q1tI'),
        a = n.n(i),
        r = n('vOnD'),
        o = a.a.createElement;
      function c(t) {
        var e = t.children;
        return o(u, null, e);
      }
      var u = r.e.h1.withConfig({ displayName: 'title__TitleType', componentId: 'eoccqe-0' })(
          ['color:', ';font-size:64px;font-weight:800;margin:0;@media (max-width:', '){font-size:48px;}'],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        l = n('6Hpx'),
        s = n('42Rd'),
        p = n('/kYb'),
        d = n('0FW9'),
        m = n('20a2'),
        f = n('jtTr'),
        h = n('MWXp'),
        x = a.a.createElement,
        g = !0;
      function w(t) {
        var e = Object(f.a)(t.siteData).pageData;
        Object(i.useEffect)(function () {
          var e = t.merchData.map(function (t, e) {
            return { product_id: t.id, index: e };
          });
          window.analytics && window.analytics.track('Merch Page Viewed', { products: e });
        });
        var n = Object(m.useRouter)();
        return e && e.id
          ? x(
              a.a.Fragment,
              null,
              x(h.a, { pageData: e }),
              x(
                s.a,
                { theme: e ? e.theme : void 0, removeBranding: null === e || void 0 === e ? void 0 : e.removeBranding },
                x(
                  l.a,
                  { columnFlow: !0 },
                  x(p.a, {
                    artistName: null === e || void 0 === e ? void 0 : e.title,
                    onClick: function () {
                      return n.push('./');
                    },
                  }),
                  x(c, null, 'Merch'),
                  x(d.a, { products: t.merchData })
                )
              )
            )
          : null;
      }
    },
    MWXp: function (t, e, n) {
      'use strict';
      var i = n('q1tI'),
        a = n.n(i),
        r = n('g4pe'),
        o = n.n(r),
        c = n('9ixD'),
        u = a.a.createElement;
      e.a = function (t) {
        var e = t.pageData;
        return u(
          a.a.Fragment,
          null,
          u(o.a, null, u('link', { rel: 'icon', href: '/favicon/favicon.ico' })),
          u(c.a, {
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
    RHGb: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return u;
      });
      var i = n('q1tI'),
        a = n.n(i),
        r = n('vOnD'),
        o = n('WqaS'),
        c = a.a.createElement;
      function u(t) {
        var e = t.className,
          n = t.product,
          i = t.inDetail,
          a = t.noPrice;
        return c(
          l,
          { className: e, inDetail: i },
          c(s, { className: 'title' }, n.title),
          !a && c(p, { className: 'price' }, '$', n.price.toFixed(2).toLocaleString())
        );
      }
      var l = Object(r.e)(o.a).withConfig({
          displayName: 'product-info__InformationWrapper',
          componentId: 'sc-1vodx6d-0',
        })(['flex-direction:column;', ''], function (t) {
          return t.inDetail
            ? Object(r.d)(
                [
                  '.title{font-size:40px;line-height:40px;font-weight:800;margin:24px 0;@media (max-width:',
                  '){font-size:32px;margin:12px 0;}}.price{order:-1;font-size:24px;margin-top:0;@media (max-width:',
                  '){font-size:14px;}}',
                ],
                function (t) {
                  var e = t.theme;
                  return ''.concat(e.breakpoints.tablet, 'px');
                },
                function (t) {
                  var e = t.theme;
                  return ''.concat(e.breakpoints.tablet, 'px');
                }
              )
            : null;
        }),
        s = r.e.h4.withConfig({ displayName: 'product-info__Title', componentId: 'sc-1vodx6d-1' })(
          [
            'color:',
            ';font-size:16px;font-weight:600;line-height:24px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;@media (max-width:',
            '){font-size:16px;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        p = r.e.h6.withConfig({ displayName: 'product-info__Price', componentId: 'sc-1vodx6d-2' })(
          [
            'color:',
            ';font-size:16px;font-weight:400;line-height:24px;opacity:0.7;margin:0;margin-top:10px;@media (max-width:',
            '){font-size:16px;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        );
    },
    TOVE: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch',
        function () {
          return n('F4Zc');
        },
      ]);
    },
    WqaS: function (t, e, n) {
      'use strict';
      var i = n('q1tI'),
        a = n('vOnD'),
        r = i.createElement;
      e.a = Object(a.e)(function (t) {
        return r(
          'div',
          {
            className: t.className,
            onClick: function (e) {
              return t.onClick ? t.onClick(e) : null;
            },
          },
          t.children || ''
        );
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
        function (t) {
          return t.justifyContent || 'flex-start';
        },
        function (t) {
          return t.flexDirection || 'row';
        },
        function (t) {
          return t.flexGrow || 0;
        },
        function (t) {
          return t.flexBasis || 'auto';
        },
        function (t) {
          return t.flexShrink || 1;
        },
        function (t) {
          return t.flexWrap || 'nowrap';
        },
        function (t) {
          return t.flex || ' 0 1 auto';
        },
        function (t) {
          return t.alignItems || 'stretch';
        }
      );
    },
    aagu: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var i = n('q1tI'),
        a = n.n(i),
        r = n('vOnD'),
        o = a.a.createElement;
      function c(t) {
        var e = t.className,
          n = t.image,
          i = t.inList,
          a = t.square,
          r = t.alt,
          c = t.isJsx,
          l = void 0 !== c && c,
          d = t.jsxImage;
        return o(
          u,
          { className: e, inList: i, square: a },
          o('div', null, l ? o(s, null, d) : o(p, { src: n, alt: r }))
        );
      }
      var u = r.e.div.withConfig({ displayName: 'product-img__ImgContainer', componentId: 'sc-1wvkwid-0' })(
          [
            'position:relative;width:100%;max-width:100%;height:420px;max-height:420px;border-radius:10px;background-color:',
            ';@media (max-width:',
            '){width:100%;max-width:none;}',
            ' ',
            ';',
          ],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          },
          function (t) {
            var e = t.square;
            return e
              ? Object(r.d)(
                  [
                    'width:',
                    'px;height:',
                    'px;border-radius:4px;@media (max-width:',
                    '){height:auto;min-height:300px;}',
                  ],
                  e,
                  e,
                  function (t) {
                    var e = t.theme;
                    return ''.concat(e.breakpoints.tablet, 'px');
                  }
                )
              : null;
          },
          function (t) {
            var e = t.inList;
            return e
              ? Object(r.d)(
                  [
                    'width:calc( (535px - (5px * ',
                    ')) / ',
                    ' );max-width:calc( (535px - (5px * ',
                    ')) / ',
                    ' );height:calc( (535px - (5px * ',
                    ')) / ',
                    ' );border-radius:5px;cursor:pointer;transition:background-color ',
                    ';&:hover{background-color:',
                    ';}&:last-child{margin-right:0;}@media (max-width:',
                    '){width:calc( (100% - (5px * ',
                    ')) / ',
                    ' );',
                    '}',
                  ],
                  e > 1 ? e - 1 : e,
                  e,
                  e > 1 ? e - 1 : e,
                  e,
                  e > 1 ? e - 1 : e,
                  e,
                  function (t) {
                    var e = t.theme;
                    return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
                  },
                  function (t) {
                    return t.theme.colors.itemBackgroundHover;
                  },
                  function (t) {
                    var e = t.theme;
                    return ''.concat(e.breakpoints.tablet, 'px');
                  },
                  e > 1 ? e - 1 : e,
                  e,
                  e ? Object(r.d)(['margin:0 auto;']) : null
                )
              : null;
          }
        ),
        l =
          '\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nmax-width: 65%;\nwidth: 100%;\ndisplay: block;',
        s = r.e.div.withConfig({ displayName: 'product-img__ProductImg', componentId: 'sc-1wvkwid-1' })(['', ''], l),
        p = r.e.img.withConfig({ displayName: 'product-img__ProductImgTag', componentId: 'sc-1wvkwid-2' })(['', ''], l);
    },
  },
  [['TOVE', 0, 2, 4, 1, 3, 5, 6]],
]);
