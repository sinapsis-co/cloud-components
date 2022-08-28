_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [19],
  {
    '/kYb': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return g;
      });
      var i = n('q1tI'),
        a = n.n(i),
        r = n('vOnD'),
        o = n('WqaS'),
        c = n('wx14'),
        l = n('ZMKu'),
        u = a.a.createElement;
      function m(t) {
        return u(
          s,
          { initial: 'rest', whileHover: 'hover', whileTap: 'tap', animate: 'rest' },
          u(
            'svg',
            Object(c.a)({ width: '40', height: '40', viewBox: '0 0 50 50' }, t),
            u(p, { cx: '25', cy: '25', r: '25' }),
            u(d, {
              variants: { rest: { x: 0, scale: 1 }, hover: { x: -2, scale: 1.0625 }, tap: { x: -100, scale: 0.95 } },
              d: 'M31 24h-9.6l3.3-3.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5 5c-0.1 0.1-0.2 0.2-0.2 0.3 -0.1 0.2-0.1 0.5 0 0.8 0.1 0.1 0.1 0.2 0.2 0.3l5 5C23.5 30.9 23.7 31 24 31s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4L21.4 26H31c0.6 0 1-0.4 1-1S31.6 24 31 24z',
            })
          )
        );
      }
      var s = Object(r.e)(l.b.div).withConfig({ displayName: 'back__IconWrapper', componentId: 'om8no8-0' })(
          ['cursor:pointer;width:40px;height:40px;&:hover{circle{fill:', ';}}'],
          function (t) {
            return t.theme.colors.itemBackgroundHover;
          }
        ),
        p = r.e.circle.withConfig({ displayName: 'back__StyledCircle', componentId: 'om8no8-1' })(
          ['fill:', ';transition:fill ', ';'],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          }
        ),
        d = Object(r.e)(l.b.path).withConfig({ displayName: 'back__StyledPath', componentId: 'om8no8-2' })(
          ['fill:', ';'],
          function (t) {
            return t.theme.colors.icon;
          }
        ),
        f = n('20a2'),
        h = a.a.createElement;
      function g(t) {
        var e = t.artistName,
          n = t.title,
          i = t.onClick,
          a = Object(f.useRouter)();
        return h(
          x,
          { alignItems: 'center' },
          h(m, {
            onClick:
              i ||
              function () {
                return a.back();
              },
          }),
          h(w, null, n || e)
        );
      }
      var x = Object(r.e)(o.a).withConfig({
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
        return g;
      });
      var i = n('q1tI'),
        a = n.n(i),
        r = n('vOnD'),
        o = n('20a2'),
        c = n('WqaS'),
        l = n('zoQI'),
        u = n('aagu'),
        m = n('RHGb'),
        s = n('SPwB'),
        p = a.a.createElement;
      function d(t) {
        var e = t.className,
          n = t.product,
          i = t.inList,
          a = Object(o.useRouter)();
        return p(
          f,
          {
            className: e,
            onClick: function () {
              window.analytics && window.analytics.track('Merch Page Clicked', { product_id: n.id }),
                a.push('/merch/detail/'.concat(n.id));
            },
          },
          p(u.a, {
            className: 'image-container',
            image: n.image,
            alt: n.title,
            inList: i || 1,
            isJsx: !0,
            jsxImage: p(s.a, {
              fill: '',
              haveHover: !0,
              imageSrc: n.image,
              maskSrc: 'https://media.development.trac.co/merch-preview/'.concat(n.blueprintId, '-mask.png'),
            }),
          }),
          p(m.a, { className: 'product-info', product: n })
        );
      }
      var f = r.e.div.withConfig({ displayName: 'product-item__ProductContainer', componentId: 'sc-1rx8y8s-0' })(
          [
            'max-width:265px;width:100%;@media (max-width:',
            '){max-width:none;}.product-info{margin-top:30px;@media (max-width:',
            '){margin-top:15px;}}&:hover{.image-container{}}',
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
        h = a.a.createElement;
      function g(t) {
        var e = t.products,
          n = t.showCart,
          i = Object(o.useRouter)(),
          r = e.sort(function (t, e) {
            return (t.order || 0) - (e.order || 0);
          });
        return (
          (r = r.map(function (t) {
            var e = t.colors.find(function (t) {
              return 'White' == t.name || 'white' == t.name;
            });
            return e ? ((t.image = e.image || t.image), t) : t;
          })),
          h(
            a.a.Fragment,
            null,
            h(
              x,
              null,
              r.map(function (t, e) {
                return h(d, {
                  className: 'product-item',
                  key: ''.concat(t.title, '-').concat(e),
                  product: t,
                  inList: 2,
                });
              })
            ),
            n
              ? null
              : h(
                  w,
                  {
                    onClick: function () {
                      return i.push('/merch/cart');
                    },
                  },
                  'View Cart'
                )
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
        w = Object(r.e)(l.a).withConfig({ displayName: 'product-list__CartButton', componentId: 'sc-1epfjzo-1' })(
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
          return x;
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
        return o(l, null, e);
      }
      var l = r.e.h1.withConfig({ displayName: 'title__TitleType', componentId: 'eoccqe-0' })(
          ['color:', ';font-size:64px;font-weight:800;margin:0;@media (max-width:', '){font-size:48px;}'],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        u = n('6Hpx'),
        m = n('42Rd'),
        s = n('/kYb'),
        p = n('0FW9'),
        d = n('20a2'),
        f = n('jtTr'),
        h = n('MWXp'),
        g = a.a.createElement,
        x = !0;
      function w(t) {
        var e = Object(f.a)(t.siteData).pageData;
        Object(i.useEffect)(function () {
          var e = t.merchData.map(function (t, e) {
            return { product_id: t.id, index: e };
          });
          window.analytics && window.analytics.track('Merch Page Viewed', { products: e });
        });
        var n = Object(d.useRouter)();
        return e && e.id
          ? g(
              a.a.Fragment,
              null,
              g(h.a, { pageData: e }),
              g(
                m.a,
                { theme: e ? e.theme : void 0, removeBranding: null === e || void 0 === e ? void 0 : e.removeBranding },
                g(
                  u.a,
                  { columnFlow: !0 },
                  g(s.a, {
                    artistName: null === e || void 0 === e ? void 0 : e.title,
                    onClick: function () {
                      return n.push('./');
                    },
                  }),
                  g(c, null, 'Merch'),
                  g(p.a, { products: t.merchData })
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
        l = a.a.createElement;
      e.a = function (t) {
        var e = t.pageData;
        return l(
          a.a.Fragment,
          null,
          l(o.a, null, l('link', { rel: 'icon', href: '/favicon/favicon.ico' })),
          l(c.a, {
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
        return l;
      });
      var i = n('q1tI'),
        a = n.n(i),
        r = n('vOnD'),
        o = n('WqaS'),
        c = a.a.createElement;
      function l(t) {
        var e = t.className,
          n = t.product,
          i = t.inDetail,
          a = t.noPrice;
        return c(
          u,
          { className: e, inDetail: i },
          c(m, { className: 'title' }, n.title),
          !a && c(s, { className: 'price' }, '$', n.price.toFixed(2).toLocaleString())
        );
      }
      var u = Object(r.e)(o.a).withConfig({
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
        m = r.e.h4.withConfig({ displayName: 'product-info__Title', componentId: 'sc-1vodx6d-1' })(
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
        s = r.e.h6.withConfig({ displayName: 'product-info__Price', componentId: 'sc-1vodx6d-2' })(
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
    SPwB: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var i = n('q1tI'),
        a = n.n(i),
        r = n('vOnD'),
        o = a.a.createElement;
      function c(t) {
        var e = t.fill,
          n = void 0 === e ? '#EDA064' : e,
          i = t.imageSrc,
          a = void 0 === i ? 'https://media.development.trac.co/merch/images/49-368.jpg' : i,
          r = t.maskSrc,
          c = void 0 === r ? '/sweater.png' : r,
          u = t.haveHover;
        return o(
          l,
          { fill: n, haveHover: void 0 !== u && u },
          o('img', { id: 'main-image', src: a, alt: 'filter-main-image' }),
          'white' != n && o('img', { id: 'mask-image', src: c, alt: 'filter-mask-image' })
        );
      }
      var l = r.e.div.withConfig({ displayName: 'image-color-filter__FilterWrapper', componentId: 'sc-11t2le6-0' })(
        [
          'position:relative;*,#mask-image,#main-image{width:100%;height:100%;}#main-image{position:absolute;top:0;left:0;z-index:0;}#mask-image{background-color:',
          ';mix-blend-mode:multiply;margin-bottom:-4px;filter:brightness(0.94);',
          '}',
        ],
        function (t) {
          return t.fill;
        },
        function (t) {
          return t.haveHover && '.image-container:hover {\n    \n    }';
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
          m = void 0 !== c && c,
          d = t.jsxImage;
        return o(u, { className: e, inList: i, square: a }, m ? o(l, null, o(s, null, d)) : o(p, { src: n, alt: r }));
      }
      var l = r.e.div.withConfig({ displayName: 'product-img__FilteredImageWrap', componentId: 'sc-1wvkwid-0' })([
          'height:100%;position:relative;display:flex;justify-content:center;align-items:center;',
        ]),
        u = r.e.div.withConfig({ displayName: 'product-img__ImgContainer', componentId: 'sc-1wvkwid-1' })(
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
                    ';&:last-child{margin-right:0;}@media (max-width:',
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
        m = '\n  position: absolute;\n  max-width: 65%;\n  width: 100%;\n  display: block;\n',
        s = r.e.div.withConfig({ displayName: 'product-img__ProductImg', componentId: 'sc-1wvkwid-2' })(['', ''], m),
        p = r.e.img.withConfig({ displayName: 'product-img__ProductImgTag', componentId: 'sc-1wvkwid-3' })(
          ['top:50%;left:50%;transform:translate(-50%,-50%);', ''],
          m
        );
    },
  },
  [['TOVE', 0, 2, 4, 1, 3, 5, 6]],
]);
