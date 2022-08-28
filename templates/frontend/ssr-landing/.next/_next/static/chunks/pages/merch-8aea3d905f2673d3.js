(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [502],
  {
    5578: function (t, e, i) {
      'use strict';
      i.d(e, {
        Z: function () {
          return u;
        },
      });
      var n = i(2809),
        r = i(1164),
        o = (i(7294), i(186)),
        a = i(5893),
        c = ['children', 'variant', 'fullWidth', 'className'];
      function s(t, e) {
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
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(i), !0).forEach(function (e) {
                (0, n.Z)(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : s(Object(i)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
              });
        }
        return t;
      }
      function u(t) {
        var e = t.children,
          i = t.variant,
          n = void 0 === i ? 'accent' : i,
          o = t.fullWidth,
          s = void 0 !== o && o,
          u = t.className,
          p = (0, r.Z)(t, c);
        return (0, a.jsx)(l, d(d({ variant: n, fullWidth: s, className: u || '' }, p), {}, { children: e }));
      }
      var l = o.ZP.button.withConfig({ displayName: 'button__StyledButton', componentId: 'sc-1n9tfjy-0' })(
        [
          'font-weight:bold;font-size:16px;line-height:24px;height:100px;display:flex;justify-content:center;align-items:center;border-radius:5px;cursor:pointer;font-family:',
          ';transition:background-color ',
          ';&:hover{opacity:0.8;}',
          ' ',
          ' ',
          ' @media (max-width:',
          '){height:70px;}',
        ],
        function (t) {
          return t.theme.fontFamily;
        },
        function (t) {
          var e = t.theme;
          return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
        },
        function (t) {
          return t.fullWidth && (0, o.iv)(['width:100%;']);
        },
        function (t) {
          var e = t.variant,
            i = t.theme;
          return 'accent' === e
            ? (0, o.iv)(
                ['color:white;background-color:', ';&:hover{background-color:', ';}'],
                i.colors.accent,
                i.colors.accentHover
              )
            : (0, o.iv)(
                ['color:#111111;background-color:', ';&:hover{background-color:', ';}'],
                i.colors.secondary,
                i.colors.secondaryHover
              );
        },
        function (t) {
          return t.disabled && (0, o.iv)(['opacity:0.5;cursor:not-allowed;']);
        },
        function (t) {
          var e = t.theme;
          return ''.concat(e.breakpoints.tablet, 'px');
        }
      );
    },
    4325: function (t, e, i) {
      'use strict';
      i.d(e, {
        Z: function () {
          return o;
        },
      });
      i(7294);
      var n = i(186),
        r = i(5893);
      function o(t) {
        var e = t.fill,
          i = void 0 === e ? '#EDA064' : e,
          n = t.imageSrc,
          o = void 0 === n ? 'https://media.development.trac.co/merch/images/49-368.jpg' : n,
          c = t.maskSrc,
          s = void 0 === c ? '/sweater.png' : c,
          d = t.haveHover,
          u = void 0 !== d && d;
        return (0, r.jsxs)(a, {
          fill: i,
          haveHover: u,
          children: [
            (0, r.jsx)('img', { id: 'main-image', src: o, alt: 'filter-main-image' }),
            'white' != i && (0, r.jsx)('img', { id: 'mask-image', src: s, alt: 'filter-mask-image' }),
          ],
        });
      }
      var a = n.ZP.div.withConfig({ displayName: 'image-color-filter__FilterWrapper', componentId: 'sc-11t2le6-0' })(
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
    9482: function (t, e, i) {
      'use strict';
      i.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = i(186),
        r = i(5893);
      function o(t) {
        var e = t.className,
          i = t.image,
          n = t.inList,
          o = t.square,
          s = t.alt,
          l = t.isJsx,
          p = void 0 !== l && l,
          m = t.jsxImage;
        return (0, r.jsx)(c, {
          className: e,
          inList: n,
          square: o,
          children: p ? (0, r.jsx)(a, { children: (0, r.jsx)(d, { children: m }) }) : (0, r.jsx)(u, { src: i, alt: s }),
        });
      }
      var a = n.ZP.div.withConfig({ displayName: 'product-img__FilteredImageWrap', componentId: 'sc-1wvkwid-0' })([
          'height:100%;position:relative;display:flex;justify-content:center;align-items:center;',
        ]),
        c = n.ZP.div.withConfig({ displayName: 'product-img__ImgContainer', componentId: 'sc-1wvkwid-1' })(
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
              ? (0, n.iv)(
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
              ? (0, n.iv)(
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
                  e ? (0, n.iv)(['margin:0 auto;']) : null
                )
              : null;
          }
        ),
        s = '\n  position: absolute;\n  max-width: 65%;\n  width: 100%;\n  display: block;\n',
        d = n.ZP.div.withConfig({ displayName: 'product-img__ProductImg', componentId: 'sc-1wvkwid-2' })(['', ''], s),
        u = n.ZP.img.withConfig({ displayName: 'product-img__ProductImgTag', componentId: 'sc-1wvkwid-3' })(
          ['top:50%;left:50%;transform:translate(-50%,-50%);', ''],
          s
        );
    },
    5372: function (t, e, i) {
      'use strict';
      i.d(e, {
        Z: function () {
          return a;
        },
      });
      var n = i(186),
        r = i(5343),
        o = i(5893);
      function a(t) {
        var e = t.className,
          i = t.product,
          n = t.inDetail,
          r = t.noPrice;
        return (0, o.jsxs)(c, {
          className: e,
          inDetail: n,
          children: [
            (0, o.jsx)(s, { className: 'title', children: i.title }),
            !r && (0, o.jsxs)(d, { className: 'price', children: ['$', i.price.toFixed(2).toLocaleString()] }),
          ],
        });
      }
      var c = (0, n.ZP)(r.Z).withConfig({
          displayName: 'product-info__InformationWrapper',
          componentId: 'sc-1vodx6d-0',
        })(['flex-direction:column;', ''], function (t) {
          return t.inDetail
            ? (0, n.iv)(
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
        s = n.ZP.h4.withConfig({ displayName: 'product-info__Title', componentId: 'sc-1vodx6d-1' })(
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
        d = n.ZP.h6.withConfig({ displayName: 'product-info__Price', componentId: 'sc-1vodx6d-2' })(
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
    7343: function (t, e, i) {
      'use strict';
      i.d(e, {
        Z: function () {
          return m;
        },
      });
      var n = i(186),
        r = i(1163),
        o = i(5343),
        a = i(5578),
        c = i(9482),
        s = i(5372),
        d = i(4325),
        u = i(5893);
      function l(t) {
        var e = t.className,
          i = t.product,
          n = t.inList,
          o = (0, r.useRouter)();
        return (0, u.jsxs)(p, {
          className: e,
          onClick: function () {
            window.analytics && window.analytics.track('Merch Page Clicked', { product_id: i.id }),
              o.push('/merch/detail/'.concat(i.id));
          },
          children: [
            (0, u.jsx)(c.Z, {
              className: 'image-container',
              image: i.image,
              alt: i.title,
              inList: n || 1,
              isJsx: !0,
              jsxImage: (0, u.jsx)(d.Z, {
                fill: '',
                haveHover: !0,
                imageSrc: i.image,
                maskSrc: 'https://media.development.trac.co/merch-preview/'.concat(i.blueprintId, '-mask.png'),
              }),
            }),
            (0, u.jsx)(s.Z, { className: 'product-info', product: i }),
          ],
        });
      }
      var p = n.ZP.div.withConfig({ displayName: 'product-item__ProductContainer', componentId: 'sc-1rx8y8s-0' })(
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
      );
      function m(t) {
        var e = t.products,
          i = t.showCart,
          n = (0, r.useRouter)(),
          o = e.sort(function (t, e) {
            return (t.order || 0) - (e.order || 0);
          });
        return (
          (o = o.map(function (t) {
            var e = t.colors.find(function (t) {
              return 'White' == t.name || 'white' == t.name;
            });
            return e ? ((t.image = e.image || t.image), t) : t;
          })),
          (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsx)(h, {
                children: o.map(function (t, e) {
                  return (0,
                  u.jsx)(l, { className: 'product-item', product: t, inList: 2 }, ''.concat(t.title, '-').concat(e));
                }),
              }),
              i
                ? null
                : (0, u.jsx)(f, {
                    onClick: function () {
                      return n.push('/merch/cart');
                    },
                    children: 'View Cart',
                  }),
            ],
          })
        );
      }
      var h = (0, n.ZP)(o.Z).withConfig({ displayName: 'product-list__ListWrapper', componentId: 'sc-1epfjzo-0' })(
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
        f = (0, n.ZP)(a.Z).withConfig({ displayName: 'product-list__CartButton', componentId: 'sc-1epfjzo-1' })(
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
    1421: function (t, e, i) {
      'use strict';
      var n = i(9008),
        r = i(2962),
        o = i(5893);
      e.Z = function (t) {
        var e = t.pageData;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(n.default, { children: (0, o.jsx)('link', { rel: 'icon', href: '/favicon/favicon.ico' }) }),
            (0, o.jsx)(r.PB, {
              title: e.title,
              description: e.description || e.data.bio || e.title,
              openGraph: {
                title: e.title,
                description: e.description || e.data.bio || e.title,
                url: 'https://'.concat(e.subdomain, '.').concat('development.trac.co', '/'),
                images: [{ url: e.avatar }],
                type: 'website',
              },
            }),
          ],
        });
      };
    },
    9207: function (t, e, i) {
      'use strict';
      i.d(e, {
        V: function () {
          return r;
        },
      });
      var n = i(7294),
        r = function (t) {
          var e = (0, n.useState)(t),
            i = e[0],
            r = e[1];
          return (
            (0, n.useEffect)(function () {
              var t = function (t) {
                var e, i, n;
                (
                  (null === (e = 'http://localhost:3000,https://app.development.trac.co') ? void 0 : e.split(',')) || []
                ).includes(t.origin) &&
                  'trac-editor' === (null === (i = t.data) || void 0 === i ? void 0 : i.origin) &&
                  null !== (n = t.data) &&
                  void 0 !== n &&
                  n.payload &&
                  r(
                    (function (t) {
                      try {
                        return JSON.parse(decodeURIComponent(escape(window.atob(t))));
                      } catch (e) {
                        return {};
                      }
                    })(t.data.payload)
                  );
              };
              return (
                window.addEventListener('message', t, !1),
                document.referrer &&
                  window.parent.postMessage({ origin: 'trac-artist-site', ready: !0 }, document.referrer),
                function () {
                  window.removeEventListener('message', t);
                }
              );
            }, []),
            { pageData: i }
          );
        };
    },
    3403: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, {
          __N_SSP: function () {
            return f;
          },
          default: function () {
            return x;
          },
        });
      var n = i(186),
        r = i(5893);
      function o(t) {
        var e = t.children;
        return (0, r.jsx)(a, { children: e });
      }
      var a = n.ZP.h1.withConfig({ displayName: 'title__TitleType', componentId: 'eoccqe-0' })(
          ['color:', ';font-size:64px;font-weight:800;margin:0;@media (max-width:', '){font-size:48px;}'],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        c = i(2872),
        s = i(6747),
        d = i(2163),
        u = i(7343),
        l = i(1163),
        p = i(9207),
        m = i(7294),
        h = i(1421),
        f = !0;
      function x(t) {
        var e = (0, p.V)(t.siteData).pageData;
        (0, m.useEffect)(function () {
          var e = t.merchData.map(function (t, e) {
            return { product_id: t.id, index: e };
          });
          window.analytics && window.analytics.track('Merch Page Viewed', { products: e });
        });
        var i = (0, l.useRouter)();
        return e && e.id
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(h.Z, { pageData: e }),
                (0, r.jsx)(s.Z, {
                  theme: e ? e.theme : void 0,
                  removeBranding: null === e || void 0 === e ? void 0 : e.removeBranding,
                  children: (0, r.jsxs)(c.Z, {
                    columnFlow: !0,
                    children: [
                      (0, r.jsx)(d.Z, {
                        artistName: null === e || void 0 === e ? void 0 : e.title,
                        onClick: function () {
                          return i.push('./');
                        },
                      }),
                      (0, r.jsx)(o, { children: 'Merch' }),
                      (0, r.jsx)(u.Z, { products: t.merchData }),
                    ],
                  }),
                }),
              ],
            })
          : null;
      }
    },
    542: function (t, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch',
        function () {
          return i(3403);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [430, 987, 819, 55, 227, 774, 888, 179], function () {
      return (e = 542), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
