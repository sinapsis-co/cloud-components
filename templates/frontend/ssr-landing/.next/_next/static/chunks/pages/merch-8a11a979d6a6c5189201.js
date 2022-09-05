_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [13],
  {
    F4Zc: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, '__N_SSP', function () {
          return k;
        }),
        n.d(e, 'default', function () {
          return _;
        });
      var i = n('q1tI'),
        a = n.n(i),
        r = n('jtTr'),
        o = n('6Hpx'),
        c = n('MWXp'),
        l = n('42Rd'),
        u = n('M/EI'),
        s = n('vOnD'),
        m = n('20a2'),
        d = n('aagu'),
        p = n('RHGb'),
        f = n('SPwB'),
        h = a.a.createElement;
      function g(t) {
        var e = t.className,
          n = t.product,
          i = Object(m.useRouter)();
        return h(
          w,
          {
            className: e,
            onClick: function () {
              window.analytics && window.analytics.track('Merch Page Clicked', { product_id: n.id }),
                i.push('/merch/detail/'.concat(n.id));
            },
          },
          h(d.a, {
            className: 'image-container',
            image: n.image,
            alt: n.title,
            isJsx: !0,
            jsxImage: h(f.a, {
              fill: '',
              haveHover: !0,
              imageSrc: n.image,
              maskSrc: ''
                .concat('https://media.development.trac.co', '/merch-preview/')
                .concat(n.blueprintId, '-mask.png'),
            }),
          }),
          h(p.a, { className: 'product-info', product: n })
        );
      }
      var w = s.e.div.withConfig({ displayName: 'product-item__ProductContainer', componentId: 'sc-1rx8y8s-0' })(
          [
            'cursor:pointer;width:100%;@media (max-width:',
            '){max-width:none;}.product-info{margin-top:24px;@media (max-width:',
            '){margin-top:12px;}}&:hover{.image-container{background-color:',
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
        v = a.a.createElement;
      function x(t) {
        var e = t.products.sort(function (t, e) {
          return (t.order || 0) - (e.order || 0);
        });
        return (
          (e = e.map(function (t) {
            var e = t.colors.find(function (t) {
              return 'White' == t.name || 'white' == t.name;
            });
            return e ? ((t.image = e.image || t.image), t) : t;
          })),
          v(
            a.a.Fragment,
            null,
            v(
              u.a,
              null,
              e.map(function (t, e) {
                return v(g, { className: 'product-item', key: ''.concat(t.title, '-').concat(e), product: t });
              })
            )
          )
        );
      }
      var b = a.a.createElement,
        k = !0;
      function _(t) {
        var e = Object(r.a)(t.siteData).pageData;
        return (
          Object(i.useEffect)(function () {
            var e = t.merchData.map(function (t, e) {
              return { product_id: t.id, index: e };
            });
            window.analytics && window.analytics.track('Merch Page Viewed', { products: e });
          }),
          e && e.id
            ? b(
                a.a.Fragment,
                null,
                b(c.a, { pageData: e }),
                b(l.a, { theme: e ? e.theme : void 0 }, b(o.a, { pageData: e }, b(x, { products: t.merchData })))
              )
            : null
        );
      }
    },
    'M/EI': function (t, e, n) {
      'use strict';
      var i = n('q1tI'),
        a = n.n(i),
        r = n('vOnD'),
        o = a.a.createElement,
        c = r.e.div.withConfig({ displayName: 'grid__StyledGrid', componentId: 'sc-1mu4cgu-0' })(
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
          n = t.children;
        return o(c, { className: e || '' }, n);
      };
    },
    MWXp: function (t, e, n) {
      'use strict';
      var i = n('q1tI'),
        a = n.n(i),
        r = n('9ixD'),
        o = a.a.createElement;
      e.a = function (t) {
        var e = t.pageData;
        return o(
          a.a.Fragment,
          null,
          o(r.a, {
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
          a = t.inCart,
          r = t.size,
          o = t.color,
          l = t.noPrice;
        return c(
          u,
          { className: e, inDetail: i, inCart: a },
          c(
            'div',
            null,
            c(s, { className: 'title' }, n.title),
            a && r ? c(d, null, 'Size: ', r, o && ', '.concat(o)) : null
          ),
          !l && c(m, { className: 'price' }, '$', n.price.toFixed(2).toLocaleString())
        );
      }
      var u = Object(r.e)(o.a).withConfig({
          displayName: 'product-info__InformationWrapper',
          componentId: 'sc-1vodx6d-0',
        })(
          ['flex-direction:column;', ' ', ''],
          function (t) {
            return t.inDetail
              ? Object(r.d)(
                  [
                    'flex-direction:row;justify-content:space-between;align-items:flex-end;@media (max-width:',
                    '){flex-direction:column;justify-content:flex-start;align-items:flex-start;}.title{max-width:320px;font-weight:800;font-size:40px;line-height:40px;white-space:normal;@media (max-width:',
                    '){font-size:32px;max-width:none;}}.price{font-size:24px;margin-top:0;@media (max-width:',
                    '){font-size:16px;}}',
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
                    var e = t.theme;
                    return ''.concat(e.breakpoints.tablet, 'px');
                  }
                )
              : null;
          },
          function (t) {
            return t.inCart
              ? Object(r.d)([
                  'width:100%;flex-direction:row;justify-content:space-between;align-items:center;.title{font-size:16px;font-weight:700;line-height:24px;}',
                ])
              : null;
          }
        ),
        s = r.e.h4.withConfig({ displayName: 'product-info__Title', componentId: 'sc-1vodx6d-1' })(
          [
            'color:',
            ';font-size:16px;font-weight:700;line-height:24px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;@media (max-width:',
            '){white-space:pre-wrap;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        m = r.e.h6.withConfig({ displayName: 'product-info__Price', componentId: 'sc-1vodx6d-2' })(
          ['color:', ';font-size:16px;font-weight:400;line-height:24px;opacity:0.7;margin:0;'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        d = r.e.h6.withConfig({ displayName: 'product-info__Details', componentId: 'sc-1vodx6d-3' })(
          ['color:', ';font-size:14px;font-weight:400;line-height:24px;margin:0;'],
          function (t) {
            return t.theme.colors.primary;
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
          a = void 0 === i ? ''.concat('https://media.development.trac.co', '/merch/images/49-368.jpg') : i,
          r = t.maskSrc,
          c = void 0 === r ? '/sweater.png' : r,
          u = t.haveHover;
        return o(
          l,
          { className: 'white' === n ? 'no-mask' : '', fill: n, haveHover: void 0 !== u && u },
          o('img', { className: 'main-image', src: a, alt: 'filter-main-image' }),
          'white' !== n && o('img', { className: 'mask-image', src: c, alt: 'filter-mask-image' })
        );
      }
      var l = r.e.div.withConfig({ displayName: 'image-color-filter__FilterWrapper', componentId: 'sc-11t2le6-0' })(
        [
          'height:100%;position:relative;&.no-mask{.main-image{position:relative;top:auto;left:auto;}}.mask-image,.main-image{width:100%;height:100%;}.main-image{position:absolute;top:0;left:0;z-index:0;}.mask-image{background-color:',
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
          i = t.alt,
          a = t.hasDarkBackground,
          r = t.isJsx,
          c = t.jsxImage,
          d = t.inCart;
        return o(
          l,
          { className: ''.concat(e, ' ').concat(d ? 'cart' : ''), hasDarkBackground: a },
          r ? o(u, { className: d ? 'cart' : '' }, o(s, null, c)) : o(m, { src: n, alt: i })
        );
      }
      var l = r.e.div.withConfig({ displayName: 'product-img__ImgContainer', componentId: 'sc-1wvkwid-0' })(
          [
            'display:flex;justify-content:center;align-items:center;border-radius:5px;padding:32px;background-color:',
            ';&.cart{padding:0;}',
            '',
          ],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            return t.hasDarkBackground
              ? Object(r.d)(['background-color:', ';'], function (t) {
                  return t.theme.colors.sidebarBackground;
                })
              : null;
          }
        ),
        u = r.e.div.withConfig({ displayName: 'product-img__FilteredImageWrap', componentId: 'sc-1wvkwid-1' })(
          [
            'width:',
            ';height:',
            ';object-fit:cover;border-radius:5px;overflow:hidden;position:relative;@media (max-width:',
            '){width:auto;height:auto;}&.cart{width:',
            ';height:',
            ';}',
          ],
          function (t) {
            return t.theme.sizes.productSize;
          },
          function (t) {
            return t.theme.sizes.productSize;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptop, 'px');
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.sizes.productSizeMobile);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.sizes.productSizeMobile);
          }
        ),
        s = r.e.div.withConfig({ displayName: 'product-img__ProductImg', componentId: 'sc-1wvkwid-2' })([
          'height:100%;',
        ]),
        m = r.e.img.withConfig({ displayName: 'product-img__ProductImgTag', componentId: 'sc-1wvkwid-3' })([
          'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:65%;width:100%;display:block;',
        ]);
    },
  },
  [['TOVE', 0, 2, 3, 1, 4]],
]);