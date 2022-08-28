(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [502],
  {
    9568: function (t, i, e) {
      'use strict';
      e(7294);
      var n = e(186),
        r = e(5893);
      i.Z = (0, n.ZP)(function (t) {
        return (0, r.jsx)('div', {
          className: t.className,
          onClick: function (i) {
            return t.onClick ? t.onClick(i) : null;
          },
          children: t.children || '',
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
    8465: function (t, i, e) {
      'use strict';
      e.d(i, {
        Z: function () {
          return a;
        },
      });
      e(7294);
      var n = e(186),
        r = e(5893);
      function a(t) {
        var i = t.fill,
          e = void 0 === i ? '#EDA064' : i,
          n = t.imageSrc,
          a = void 0 === n ? ''.concat('https://media.development.trac.co', '/merch/images/49-368.jpg') : n,
          c = t.maskSrc,
          s = void 0 === c ? '/sweater.png' : c,
          l = t.haveHover,
          d = void 0 !== l && l;
        return (0, r.jsxs)(o, {
          className: 'white' === e ? 'no-mask' : '',
          fill: e,
          haveHover: d,
          children: [
            (0, r.jsx)('img', { className: 'main-image', src: a, alt: 'filter-main-image' }),
            'white' !== e && (0, r.jsx)('img', { className: 'mask-image', src: s, alt: 'filter-mask-image' }),
          ],
        });
      }
      var o = n.ZP.div.withConfig({ displayName: 'image-color-filter__FilterWrapper', componentId: 'sc-11t2le6-0' })(
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
    9806: function (t, i, e) {
      'use strict';
      e.d(i, {
        Z: function () {
          return c;
        },
      });
      var n = e(8052),
        r = e(6805),
        a = e(186),
        o = e(5893);
      function c(t) {
        var i = t.className,
          e = t.image,
          a = t.alt,
          c = t.hasDarkBackground,
          h = t.isJsx,
          m = t.jsxImage,
          p = t.inCart,
          f = t.inDetail,
          g = t.highlight,
          x = t.hasAnimation,
          w = t.variants;
        return (0, o.jsx)(s, {
          className: ''
            .concat(i, ' ')
            .concat(p ? 'cart' : '', ' ')
            .concat(f ? 'detail' : ''),
          hasDarkBackground: c,
          isHighlighted: g,
          children: (0, o.jsx)(r.ww.div, {
            variants: w,
            transition: n.BH,
            children: h
              ? (0, o.jsx)(l, {
                  variants: x ? n.LS : void 0,
                  initial: 'initial',
                  animate: 'animate',
                  exit: 'exit',
                  transition: n.kr,
                  className: ''
                    .concat(p ? 'cart' : '', ' ')
                    .concat(f ? 'detail' : '', ' ')
                    .concat(p || f || !g ? '' : 'highlight'),
                  children: (0, o.jsx)(d, { children: m }),
                })
              : (0, o.jsx)(u, {
                  src: e,
                  alt: a,
                  variants: x ? n.LS : void 0,
                  initial: 'initial',
                  animate: 'animate',
                  exit: 'exit',
                  transition: n.kr,
                }),
          }),
        });
      }
      var s = a.ZP.div.withConfig({ displayName: 'product-img__ImgContainer', componentId: 'sc-1wvkwid-0' })(
          [
            'display:flex;justify-content:center;align-items:center;border-radius:5px;padding:32px;background-color:',
            ';transition:background-color ',
            ';&.cart{padding:0;}@media (max-width:',
            '){padding:0;width:fit-content;justify-content:flex-start;&.detail{padding:32px;width:auto;height:auto;justify-content:center;}}',
            ' ',
            '',
          ],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            var i = t.theme;
            return ''.concat(i.transitions.duration, ' ').concat(i.transitions.type);
          },
          function (t) {
            var i = t.theme;
            return ''.concat(i.breakpoints.laptopS, 'px');
          },
          function (t) {
            return t.hasDarkBackground
              ? (0, a.iv)(['background-color:', ';'], function (t) {
                  return t.theme.colors.sidebarBackground;
                })
              : null;
          },
          function (t) {
            return t.isHighlighted
              ? (0, a.iv)(['background-color:', ';padding:0;'], function (t) {
                  return t.theme.colors.sidebarBackground;
                })
              : null;
          }
        ),
        l = (0, a.ZP)(r.ww.div).withConfig({
          displayName: 'product-img__FilteredImageWrap',
          componentId: 'sc-1wvkwid-1',
        })(
          [
            'width:',
            ';height:',
            ';object-fit:cover;border-radius:5px;overflow:hidden;position:relative;&.detail{width:',
            ';height:',
            ';}&.cart{width:',
            ';height:',
            ';}&.highlight{width:',
            ';height:',
            ';@media (max-width:',
            '){width:',
            ';height:',
            ';}}@media (max-width:',
            '){width:',
            ';height:',
            ';&.detail{width:auto;height:auto;}}',
          ],
          function (t) {
            return t.theme.sizes.productSize;
          },
          function (t) {
            return t.theme.sizes.productSize;
          },
          function (t) {
            return t.theme.sizes.productSizeDetail;
          },
          function (t) {
            return t.theme.sizes.productSizeDetail;
          },
          function (t) {
            var i = t.theme;
            return ''.concat(i.sizes.productSizeMobile);
          },
          function (t) {
            var i = t.theme;
            return ''.concat(i.sizes.productSizeMobile);
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlight;
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlight;
          },
          function (t) {
            var i = t.theme;
            return ''.concat(i.breakpoints.laptopS, 'px');
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlightMobile;
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlightMobile;
          },
          function (t) {
            var i = t.theme;
            return ''.concat(i.breakpoints.laptop, 'px');
          },
          function (t) {
            return t.theme.sizes.coverSizeMobile;
          },
          function (t) {
            return t.theme.sizes.coverSizeMobile;
          }
        ),
        d = a.ZP.div.withConfig({ displayName: 'product-img__ProductImg', componentId: 'sc-1wvkwid-2' })([
          'height:100%;',
        ]),
        u = (0, a.ZP)(r.ww.img).withConfig({ displayName: 'product-img__ProductImgTag', componentId: 'sc-1wvkwid-3' })([
          'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:65%;width:100%;display:block;',
        ]);
    },
    5981: function (t, i, e) {
      'use strict';
      e.d(i, {
        Z: function () {
          return c;
        },
      });
      var n = e(186),
        r = e(9568),
        a = e(5322),
        o = e(5893);
      function c(t) {
        var i = t.className,
          e = t.product,
          n = t.inDetail,
          r = t.inCart,
          c = t.size,
          h = t.color,
          m = t.noPrice,
          p = t.highlight,
          f = function () {
            return (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsxs)('div', {
                  children: [
                    (0, o.jsx)(l, { className: 'title', children: e.title }),
                    r && c ? (0, o.jsxs)(u, { children: ['Size: ', c, h && ', '.concat(h)] }) : null,
                  ],
                }),
                !m && (0, o.jsxs)(d, { className: 'price', children: ['$', e.price.toFixed(2).toLocaleString()] }),
              ],
            });
          };
        return (0, o.jsx)(s, {
          className: i,
          inDetail: n,
          inCart: r,
          highlight: p,
          children: p
            ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)('div', { children: (0, o.jsx)(f, {}) }), (0, o.jsx)(a.Z, { className: 'badge' })],
              })
            : (0, o.jsx)(f, {}),
        });
      }
      var s = (0, n.ZP)(r.Z).withConfig({
          displayName: 'product-info__InformationWrapper',
          componentId: 'sc-1vodx6d-0',
        })(
          ['flex-direction:column;align-items:flex-start;', ' ', ' ', ''],
          function (t) {
            return t.inDetail
              ? (0, n.iv)(
                  [
                    'flex-direction:row;justify-content:space-between;align-items:flex-end;@media (max-width:',
                    '){flex-direction:column;justify-content:flex-start;align-items:flex-start;}.title{max-width:320px;font-weight:800;font-size:40px;line-height:40px;white-space:normal;@media (max-width:',
                    '){font-size:32px;max-width:none;}}.price{font-size:24px;margin-top:0;@media (max-width:',
                    '){font-size:16px;}}',
                  ],
                  function (t) {
                    var i = t.theme;
                    return ''.concat(i.breakpoints.tablet, 'px');
                  },
                  function (t) {
                    var i = t.theme;
                    return ''.concat(i.breakpoints.tablet, 'px');
                  },
                  function (t) {
                    var i = t.theme;
                    return ''.concat(i.breakpoints.tablet, 'px');
                  }
                )
              : null;
          },
          function (t) {
            return t.inCart
              ? (0, n.iv)([
                  'width:100%;flex-direction:row;justify-content:space-between;align-items:center;.title{font-size:16px;font-weight:700;line-height:24px;}',
                ])
              : null;
          },
          function (t) {
            return t.highlight
              ? (0, n.iv)(
                  [
                    'height:100%;justify-content:space-between;@media (max-width:',
                    '){gap:24px;text-align:center;align-items:center;}',
                  ],
                  function (t) {
                    var i = t.theme;
                    return ''.concat(i.breakpoints.laptopS, 'px');
                  }
                )
              : null;
          }
        ),
        l = n.ZP.h4.withConfig({ displayName: 'product-info__Title', componentId: 'sc-1vodx6d-1' })(
          [
            'color:',
            ';font-size:16px;font-weight:700;line-height:24px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;@media (max-width:',
            '){white-space:pre-wrap;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var i = t.theme;
            return ''.concat(i.breakpoints.tablet, 'px');
          }
        ),
        d = n.ZP.h6.withConfig({ displayName: 'product-info__Price', componentId: 'sc-1vodx6d-2' })(
          ['color:', ';font-size:16px;font-weight:400;line-height:24px;opacity:0.7;margin:0;'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        u = n.ZP.h6.withConfig({ displayName: 'product-info__Details', componentId: 'sc-1vodx6d-3' })(
          ['color:', ';font-size:14px;font-weight:400;line-height:24px;margin:0;'],
          function (t) {
            return t.theme.colors.primary;
          }
        );
    },
    2321: function (t, i, e) {
      'use strict';
      e.d(i, {
        Z: function () {
          return h;
        },
      });
      var n = e(1163),
        r = e(186),
        a = e(6805),
        o = e(131),
        c = e(9806),
        s = e(5981),
        l = e(8465),
        d = e(8052),
        u = e(5893);
      function h(t) {
        var i = t.className,
          e = t.product,
          r = t.highlight,
          a = t.hasAnimation,
          h = t.hasDelay,
          f = (0, n.useRouter)(),
          g = (0, o.YD)({ triggerOnce: !0, rootMargin: '200px 0px' }),
          x = g.ref,
          w = g.inView;
        return (0, u.jsx)(m, {
          className: ''.concat(i || '', ' ').concat(r ? 'highlight' : ''),
          onClick: function () {
            window.analytics && window.analytics.track('Merch Page Clicked', { product_id: e.id }),
              f.push('/merch/detail/'.concat(e.id));
          },
          variants: d.LS,
          initial: 'initial',
          animate: w || 0 === h ? 'animate' : 'initial',
          exit: 'exit',
          ref: x,
          transition: { duration: 0.35, delay: h ? 0.1 * h : 0, ease: [0, 0.005, 0.2, 1] },
          children: (0, u.jsxs)(p, {
            initial: 'rest',
            whileHover: 'hover',
            whileTap: 'tap',
            animate: 'rest',
            className: 'wrapper',
            children: [
              (0, u.jsx)(c.Z, {
                className: 'image-container',
                image: e.image,
                alt: e.title,
                isJsx: !0,
                highlight: r,
                hasAnimation: a,
                variants: d.wM,
                jsxImage: (0, u.jsx)(l.Z, {
                  fill: '',
                  haveHover: !0,
                  imageSrc: e.image,
                  maskSrc: ''
                    .concat('https://media.development.trac.co', '/merch-preview/')
                    .concat(e.blueprintId, '-mask.png'),
                }),
              }),
              (0, u.jsx)(s.Z, { className: 'product-info', product: e, highlight: r }),
            ],
          }),
        });
      }
      var m = (0, r.ZP)(a.ww.div).withConfig({
          displayName: 'product-item__ProductContainer',
          componentId: 'sc-1rx8y8s-0',
        })(
          [
            'cursor:pointer;width:100%;&:hover{.image-container{background-color:',
            ';}}&.highlight{background-color:',
            ';grid-column:span 2;order:-1;.wrapper{flex-direction:row;padding:32px;gap:32px;border-radius:5px;&:hover{.image-container{background-color:inherit;}}@media (max-width:',
            '){padding:24px;gap:24px;flex-direction:column;justify-content:center;align-items:center;}}}',
          ],
          function (t) {
            return t.theme.colors.itemBackgroundHover;
          },
          function (t) {
            return t.theme.colors.highlightBackground;
          },
          function (t) {
            var i = t.theme;
            return ''.concat(i.breakpoints.laptopS, 'px');
          }
        ),
        p = (0, r.ZP)(a.ww.div).withConfig({ displayName: 'product-item__Wrapper', componentId: 'sc-1rx8y8s-1' })(
          [
            'display:flex;flex-direction:column;gap:24px;@media (max-width:',
            '){width:max-content;}@media (max-width:',
            '){max-width:none;width:auto;gap:12px;}',
          ],
          function (t) {
            var i = t.theme;
            return ''.concat(i.breakpoints.laptopS, 'px');
          },
          function (t) {
            var i = t.theme;
            return ''.concat(i.breakpoints.tablet, 'px');
          }
        );
    },
    6900: function (t, i, e) {
      'use strict';
      var n = e(2962),
        r = e(5893);
      i.Z = function (t) {
        var i = t.pageData;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(n.PB, {
            title: i.title,
            description: i.description || i.data.bio || i.title,
            openGraph: {
              title: i.title,
              description: i.description || i.data.bio || i.title,
              url: 'https://'.concat(i.subdomain, '.').concat('development.trac.co', '/'),
              images: [{ url: i.avatar }],
              type: 'website',
            },
          }),
        });
      };
    },
    3854: function (t, i, e) {
      'use strict';
      e.r(i),
        e.d(i, {
          __N_SSP: function () {
            return h;
          },
          default: function () {
            return m;
          },
        });
      var n = e(7294),
        r = e(3886),
        a = e(2310),
        o = e(6900),
        c = e(8134),
        s = e(1972),
        l = e(2321),
        d = e(5893);
      function u(t) {
        var i = t.products.sort(function (t, i) {
          return (t.order || 0) - (i.order || 0);
        });
        return (
          (i = i.map(function (t) {
            var i = t.colors.find(function (t) {
              return 'White' == t.name || 'white' == t.name;
            });
            return i ? ((t.image = i.image || t.image), t) : t;
          })),
          (0, d.jsx)(s.Z, {
            children: i.map(function (t, i) {
              return (0, d.jsx)(l.Z, { className: 'product-item', product: t }, ''.concat(t.title, '-').concat(i));
            }),
          })
        );
      }
      var h = !0;
      function m(t) {
        var i = (0, r.V)(t.siteData).pageData;
        return (
          (0, n.useEffect)(function () {
            var i = t.merchData.map(function (t, i) {
              return { product_id: t.id, index: i };
            });
            window.analytics && window.analytics.track('Merch Page Viewed', { products: i });
          }),
          i && i.id
            ? (0, d.jsxs)(d.Fragment, {
                children: [
                  (0, d.jsx)(o.Z, { pageData: i }),
                  (0, d.jsx)(c.Z, {
                    theme: i ? i.theme : void 0,
                    children: (0, d.jsx)(a.Z, {
                      pageData: i,
                      noAnimation: !0,
                      children: (0, d.jsx)(u, { products: t.merchData }),
                    }),
                  }),
                ],
              })
            : null
        );
      }
    },
    9404: function (t, i, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch',
        function () {
          return e(3854);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [774, 430, 457, 890, 661, 888, 179], function () {
      return (i = 9404), t((t.s = i));
      var i;
    });
    var i = t.O();
    _N_E = i;
  },
]);
