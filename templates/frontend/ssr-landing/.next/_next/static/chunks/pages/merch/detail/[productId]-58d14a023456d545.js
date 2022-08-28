(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [500],
  {
    8874: function (t, e, i) {
      'use strict';
      i.d(e, {
        Z: function () {
          return c;
        },
      });
      var n = i(2809),
        r = i(5893);
      function o(t, e) {
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
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(i), !0).forEach(function (e) {
                (0, n.Z)(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : o(Object(i)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
              });
        }
        return t;
      }
      function c(t) {
        return (0, r.jsxs)(
          'svg',
          a(
            a({ width: '12', height: '12', viewBox: '0 0 12 12' }, t),
            {},
            {
              children: [
                (0, r.jsx)('rect', {
                  x: '10.9497',
                  y: '-0.36377',
                  width: '2',
                  height: '16',
                  rx: '1',
                  transform: 'rotate(45 10.9497 -0.36377)',
                  fill: t.fill,
                }),
                (0, r.jsx)('rect', {
                  x: '1.05029',
                  y: '-0.36377',
                  width: '16',
                  height: '2',
                  rx: '1',
                  transform: 'rotate(45 1.05029 -0.36377)',
                  fill: t.fill,
                }),
              ],
            }
          )
        );
      }
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
          l = t.haveHover,
          d = void 0 !== l && l;
        return (0, r.jsxs)(a, {
          fill: i,
          haveHover: d,
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
          u = t.isJsx,
          p = void 0 !== u && u,
          m = t.jsxImage;
        return (0, r.jsx)(c, {
          className: e,
          inList: n,
          square: o,
          children: p ? (0, r.jsx)(a, { children: (0, r.jsx)(l, { children: m }) }) : (0, r.jsx)(d, { src: i, alt: s }),
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
        l = n.ZP.div.withConfig({ displayName: 'product-img__ProductImg', componentId: 'sc-1wvkwid-2' })(['', ''], s),
        d = n.ZP.img.withConfig({ displayName: 'product-img__ProductImgTag', componentId: 'sc-1wvkwid-3' })(
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
            !r && (0, o.jsxs)(l, { className: 'price', children: ['$', i.price.toFixed(2).toLocaleString()] }),
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
        l = n.ZP.h6.withConfig({ displayName: 'product-info__Price', componentId: 'sc-1vodx6d-2' })(
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
        l = i(4325),
        d = i(5893);
      function u(t) {
        var e = t.className,
          i = t.product,
          n = t.inList,
          o = (0, r.useRouter)();
        return (0, d.jsxs)(p, {
          className: e,
          onClick: function () {
            window.analytics && window.analytics.track('Merch Page Clicked', { product_id: i.id }),
              o.push('/merch/detail/'.concat(i.id));
          },
          children: [
            (0, d.jsx)(c.Z, {
              className: 'image-container',
              image: i.image,
              alt: i.title,
              inList: n || 1,
              isJsx: !0,
              jsxImage: (0, d.jsx)(l.Z, {
                fill: '',
                haveHover: !0,
                imageSrc: i.image,
                maskSrc: 'https://media.development.trac.co/merch-preview/'.concat(i.blueprintId, '-mask.png'),
              }),
            }),
            (0, d.jsx)(s.Z, { className: 'product-info', product: i }),
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
          (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)(h, {
                children: o.map(function (t, e) {
                  return (0,
                  d.jsx)(u, { className: 'product-item', product: t, inList: 2 }, ''.concat(t.title, '-').concat(e));
                }),
              }),
              i
                ? null
                : (0, d.jsx)(f, {
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
    3904: function (t, e, i) {
      'use strict';
      i.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = i(7294),
        r = i(2400);
      function o() {
        var t = (0, n.useState)({ width: void 0, height: void 0 }),
          e = t[0],
          i = t[1];
        return (
          (0, n.useEffect)(function () {
            function t() {
              i({ width: window.innerWidth, height: window.innerHeight });
            }
            return (
              window.addEventListener('resize', t),
              t(),
              function () {
                return window.removeEventListener('resize', t);
              }
            );
          }, []),
          !!e.width && e.width <= r.Z.laptopS
        );
      }
    },
    4055: function (t, e, i) {
      'use strict';
      i.d(e, {
        j: function () {
          return l;
        },
      });
      var n = i(2809),
        r = i(7294);
      function o(t, e) {
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
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(i), !0).forEach(function (e) {
                (0, n.Z)(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : o(Object(i)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
              });
        }
        return t;
      }
      var c = function (t, e) {
          'undefined' !== typeof localStorage && localStorage.setItem(t, JSON.stringify(e));
        },
        s = function (t) {
          return function (e) {
            var i, n;
            return (
              e.product.id === t.product.id &&
              e.size.id === t.size.id &&
              (null === (i = e.color) || void 0 === i ? void 0 : i.id) ===
                (null === (n = t.color) || void 0 === n ? void 0 : n.id)
            );
          };
        },
        l = function (t) {
          var e = 'TRAC_CART.'.concat(t),
            i = (0, r.useState)(
              (function (t) {
                if ('undefined' !== typeof localStorage) {
                  var e = localStorage.getItem(t);
                  if (e) return JSON.parse(e);
                }
                return [];
              })(e)
            ),
            n = i[0],
            o = i[1],
            l = function (t) {
              return c(e, t), o(t), t;
            },
            d = n.reduce(function (t, e) {
              return t + e.product.price * e.quantity;
            }, 0);
          return {
            cart: n,
            total: d,
            updateCart: function (t, e) {
              var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                r = n.find(s(e));
              r && ('add' === t && (e.quantity += i), 'remove' === t && (e.quantity -= i));
              var o = n
                .concat(r || 'add' !== t ? [] : [e])
                .map(function (t) {
                  return s(e)(t) ? a({}, e) : a({}, t);
                })
                .filter(function (t) {
                  return t.quantity > 0;
                });
              return l(o);
            },
            saveCart: l,
            emptyCart: function () {
              c(e, []), o([]);
            },
          };
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
    7060: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, {
          __N_SSP: function () {
            return lt;
          },
          default: function () {
            return dt;
          },
        });
      var n = i(7294),
        r = i(2872),
        o = i(6747),
        a = i(186),
        c = i(1163),
        s = i(3904),
        l = i(5372),
        d = i(9482),
        u = i(9542),
        p = i(5343),
        m = i(6805),
        h = i(5893);
      var f = (0, a.ZP)(m.ww.div).withConfig({
          displayName: 'product-size-guide__SizeGuideWrapper',
          componentId: 'sc-4m4hc0-0',
        })(['']),
        x = (0, a.ZP)(p.Z).withConfig({ displayName: 'product-size-guide__Row', componentId: 'sc-4m4hc0-1' })(
          [
            'justify-content:flex-start;align-items:center;flex-direction:row;padding:20px 0;border-bottom:1px dotted ',
            ';&:first-child{padding:0 0 30px;border-bottom:none;& > span{font-weight:700;}}',
            '',
          ],
          function (t) {
            return t.theme.colors.primaryHover;
          },
          function (t) {
            return t.noLine ? (0, a.iv)(['border-bottom:none;padding:20px 0 0;']) : null;
          }
        ),
        g = a.ZP.span.withConfig({ displayName: 'product-size-guide__Item', componentId: 'sc-4m4hc0-2' })(
          [
            'color:',
            ';font-size:16px;min-height:20px;text-align:center;width:',
            ';&:first-child{text-align:left;}@media (max-width:',
            '){font-size:14px;}',
          ],
          function (t) {
            return t.theme.colors.background;
          },
          function (t) {
            var e = t.itemsLength;
            return e > 1 ? (0, a.iv)(['calc(100% / (', ' + 1));'], e) : '100%;';
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        v = a.ZP.p.withConfig({ displayName: 'product-size-guide__HelpText', componentId: 'sc-4m4hc0-3' })(
          ['font-size:12px;font-weight:400;line-height:14px;text-align:left;color:', ';'],
          function (t) {
            return t.theme.colors.background;
          }
        ),
        w = i(8874),
        b = i(224);
      function y(t) {
        var e = t.className,
          i = t.text,
          r = t.children,
          o = t.fixedOnMobile,
          c = t.hasClose,
          l = t.titleText,
          d = (0, n.useState)(!1),
          u = d[0],
          p = d[1],
          f = (0, s.Z)(),
          x = (0, a.Fg)();
        return (0, h.jsxs)(j, {
          className: ''.concat(e, ' ').concat(o ? 'fixed' : null),
          children: [
            (0, h.jsx)(_, {
              onClick: function () {
                return p(!u);
              },
              children: i,
            }),
            (0, h.jsx)(m.M_, {
              children: u
                ? (0, h.jsx)(b.Z, {
                    children: (0, h.jsxs)(C, {
                      className: 'tooltip-content',
                      children: [
                        f && c
                          ? (0, h.jsxs)(N, {
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              children: [
                                l ? (0, h.jsx)(Z, { children: l }) : null,
                                (0, h.jsx)(w.Z, {
                                  onClick: function () {
                                    return p(!u);
                                  },
                                  fill: x.colors.background,
                                }),
                              ],
                            })
                          : null,
                        r,
                      ],
                    }),
                  })
                : null,
            }),
          ],
        });
      }
      var j = a.ZP.div.withConfig({ displayName: 'tooltip__TooltipWrapper', componentId: 'sc-1ha8c9q-0' })([
          '&.fixed{.tooltip-content{z-index:999;position:fixed;right:0;bottom:0;left:0;transform:none;}}',
        ]),
        _ = a.ZP.span.withConfig({ displayName: 'tooltip__TooltopText', componentId: 'sc-1ha8c9q-1' })(
          [
            'font-size:14px;font-weight:400;cursor:pointer;color:',
            ';margin-right:20px;opacity:1;transition:opacity ',
            ';@media (max-width:',
            '){font-size:12px;}&:hover{opacity:0.7;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        C = a.ZP.div.withConfig({ displayName: 'tooltip__TooltipContent', componentId: 'sc-1ha8c9q-2' })(
          [
            'position:absolute;bottom:calc(100% + 10px);left:50%;transform:translate(-50%,0);max-width:535px;@media (max-width:',
            "){max-width:none;width:100%;overflow-x:scroll;}&:before{content:'';position:absolute;bottom:0;width:32px;height:32px;left:35%;transform:translate(-50%,0);background-color:",
            ';transform:rotate(45deg);z-index:-1;}@media (max-width:',
            '){&:before{content:none;}}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          },
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        Z = a.ZP.h4.withConfig({ displayName: 'tooltip__Title', componentId: 'sc-1ha8c9q-3' })(
          ['font-size:14px;font-weight:700;line-height:17px;color:', ';'],
          function (t) {
            return t.theme.colors.background;
          }
        ),
        N = (0, a.ZP)(p.Z).withConfig({ displayName: 'tooltip__Header', componentId: 'sc-1ha8c9q-4' })([
          'margin:4px 0 20px;',
        ]),
        I = JSON.parse(
          '[{"label":"Width","sizeOptions":[{"label":"S","value":"18"},{"label":"M","value":"20"},{"label":"L","value":"21.97"},{"label":"XL","value":"23.98"},{"label":"2XL","value":"25.99"},{"label":"3XL","value":"28"}]},{"label":"Length","sizeOptions":[{"label":"S","value":"28"},{"label":"M","value":"29.26"},{"label":"L","value":"30.24"},{"label":"XL","value":"31.26"},{"label":"2XL","value":"32.49"},{"label":"3XL","value":"33.51"}]},{"label":"Sleeve length","sizeOptions":[{"label":"S","value":"8.23"},{"label":"M","value":"8.51"},{"label":"L","value":"8.75"},{"label":"XL","value":"9.02"},{"label":"2XL","value":"9.26"},{"label":"3XL","value":"9.49"}]}]'
        ),
        P = (0, u.u7)(),
        k = ['Unisex Twill Hat', 'Custom Pin Buttons', 'Tough Cases'];
      function z(t) {
        var e = t.className,
          i = t.active,
          n = t.sizes,
          r = t.onChange,
          o = t.productName,
          a = void 0 === o ? '' : o,
          c = n.map(function (t) {
            return { label: t.name, value: t.id };
          }),
          l = (0, s.Z)();
        return (0, h.jsxs)(O, {
          className: ''.concat(e, ' ').concat(l ? '' : 'desktop'),
          children: [
            l && !k.includes(a)
              ? (0, h.jsx)(q, {
                  fixedOnMobile: !0,
                  hasClose: !0,
                  titleText: 'Size Guide',
                  text: 'Size Guide (?)',
                  children: (0, h.jsx)(T, {
                    sizeItems: I,
                    helpText: '*All measurements are in Inches. All pieces fit true to size.',
                  }),
                })
              : null,
            (0, h.jsx)(L, {
              children: (0, h.jsxs)(D, {
                justifyContent: 'flex-end',
                alignItems: 'center',
                children: [
                  l || k.includes(a)
                    ? null
                    : (0, h.jsx)(E, {
                        text: 'Size Guide (?)',
                        children: (0, h.jsx)(T, {
                          sizeItems: I,
                          helpText: '*All measurements are in Inches. All pieces fit true to size.',
                        }),
                      }),
                  (0, h.jsx)(S, {
                    options: c,
                    title: 'Select size',
                    value: i,
                    onChange: function (t) {
                      return r(t);
                    },
                    customBorderRadius: '4px',
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var S = (0, a.ZP)(P).withConfig({
          displayName: 'product-size-selector__StyledDropdownCtrl',
          componentId: 'sc-1fu7rya-0',
        })(['width:100%;']),
        O = a.ZP.div.withConfig({ displayName: 'product-size-selector__SizesWrappper', componentId: 'sc-1fu7rya-1' })([
          'margin:12px 0px;&.desktop{position:relative;}',
        ]),
        L = (0, a.ZP)(p.Z).withConfig({
          displayName: 'product-size-selector__SizeSelectorWrapper',
          componentId: 'sc-1fu7rya-2',
        })(['align-items:center !important;justify-content:space-between !important;margin:24px 0;']),
        D = (0, a.ZP)(p.Z).withConfig({
          displayName: 'product-size-selector__FlexWrapper',
          componentId: 'sc-1fu7rya-3',
        })(['width:-webkit-fill-available;display:flex;flex-direction:column;']),
        T = (0, a.ZP)(function (t) {
          var e = t.className,
            i = t.sizeItems,
            n = t.helpText;
          return (0, h.jsxs)(f, {
            className: e,
            children: [
              (0, h.jsxs)(x, {
                children: [
                  (0, h.jsx)(g, { itemsLength: 3 }),
                  i[0].sizeOptions.map(function (t, e) {
                    return (0,
                    h.jsx)(g, { itemsLength: i.length, children: t.label }, ''.concat(t.label, '-').concat(e));
                  }),
                ],
              }),
              i.map(function (t, e) {
                return (0, h.jsxs)(
                  x,
                  {
                    children: [
                      (0, h.jsx)(g, { itemsLength: i.length, children: t.label }),
                      t.sizeOptions.map(function (t, e) {
                        return (0,
                        h.jsx)(g, { itemsLength: i.length, children: t.value }, ''.concat(t.label, '-').concat(e));
                      }),
                    ],
                  },
                  ''.concat(t.label, '-').concat(e)
                );
              }),
              n ? (0, h.jsx)(x, { noLine: !0, children: (0, h.jsx)(v, { children: n }) }) : null,
            ],
          });
        }).withConfig({ displayName: 'product-size-selector__StyledSizeGuide', componentId: 'sc-1fu7rya-4' })([
          'width:535px;max-width:100%;',
        ]),
        q = (0, a.ZP)(y).withConfig({
          displayName: 'product-size-selector__StyledTooltip',
          componentId: 'sc-1fu7rya-5',
        })(['.tooltip-content{padding:24px;border-radius:2px;background-color:', ';}'], function (t) {
          return t.theme.colors.primary;
        }),
        E = (0, a.ZP)(y).withConfig({
          displayName: 'product-size-selector__StyledTooltipExt',
          componentId: 'sc-1fu7rya-6',
        })(
          [
            '.tooltip-content{padding:24px;border-radius:2px;background-color:',
            ';}display:flex;justify-content:end;width:100%;& span{margin-right:0px;margin-bottom:10px;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        W = i(5578),
        A = i(4055),
        M = i(6586);
      var R = i(6988);
      function B(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return (0, M.Z)(t);
          })(t) ||
          (function (t) {
            if (('undefined' !== typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator'])
              return Array.from(t);
          })(t) ||
          (0, R.Z)(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      var X = (0, u.u7)(),
        F = a.ZP.span.withConfig({
          displayName: 'product-quantity-selector-dropdown__LimitedContainer',
          componentId: 'rr9qe-0',
        })(
          [
            'color:',
            ';opacity:',
            ';font-weight:',
            ';position:absolute;right:60px;top:23px;z-index:1;font-size:12px;line-height:15px;',
          ],
          function (t) {
            var e = t.theme,
              i = t.isRed;
            return void 0 !== i && i ? e.colors.accent : e.colors.primary;
          },
          function (t) {
            var e = t.isRed;
            return void 0 !== e && e ? 1 : 0.5;
          },
          function (t) {
            var e = t.isRed,
              i = void 0 !== e && e,
              n = t.soldOut;
            return i || (void 0 !== n && n) ? 700 : 400;
          }
        ),
        H = a.ZP.div.withConfig({
          displayName: 'product-quantity-selector-dropdown__Container',
          componentId: 'rr9qe-1',
        })(['position:relative;']),
        J = function (t) {
          var e = t.isLimited,
            i = t.quantity,
            n = t.onChange,
            r = t.active,
            o = e ? i : 1e3,
            a = B(Array(null !== o && void 0 !== o ? o : 0).keys()).map(function (t) {
              return { label: ''.concat(t + 1), value: t + 1 };
            });
          return (0, h.jsxs)(H, {
            className: 'mt-40',
            children: [
              e && i && i >= 10 ? (0, h.jsx)(F, { children: 'Limited' }) : null,
              e && i && i < 10 ? (0, h.jsxs)(F, { isRed: !0, children: ['Only ', i, ' remaining!'] }) : null,
              0 === i ? (0, h.jsx)(F, { soldOut: !0, children: 'Sold Out' }) : null,
              (0, h.jsx)(X, {
                options: a,
                title: 'Select quantity',
                value: r,
                customBorderRadius: '4px',
                onChange: function (t) {
                  return n(t);
                },
              }),
            ],
          });
        },
        G = i(4325);
      var V = function (t) {
        var e = t.fill;
        return (0, h.jsx)('svg', {
          width: '7',
          height: '7',
          viewBox: '0 0 7 7',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: (0, h.jsx)('circle', { cx: '3.5', cy: '3.5', r: '3.5', fill: e }),
        });
      };
      function K(t) {
        var e = t.className,
          i = t.cartKey,
          r = t.product,
          o = t.onClick,
          a = (0, c.useRouter)(),
          u = (0, s.Z)();
        (0, n.useEffect)(function () {
          window.analytics && window.analytics.track('Merch Product Viewed', { product_id: r.id });
        });
        var p = (0, n.useState)(),
          m = p[0],
          f = p[1],
          x = r.colors.find(function (t) {
            return 'White' == t.name || 'white' == t.name;
          }),
          g = (0, n.useState)(x || r.colors[0]),
          v = g[0],
          w = g[1],
          b = (0, n.useState)(),
          y = b[0],
          j = b[1],
          _ = (0, A.j)(i).updateCart,
          C = !(!m || !y || (r.colors.length && !v.id)),
          Z = function (t) {
            return 'https://media.development.trac.co/merch-preview/'.concat(t, '-mask.png');
          };
        return (0, h.jsxs)(U, {
          className: e,
          onClick: o,
          children: [
            (0, h.jsxs)(it, {
              children: [
                (0, h.jsx)('div', {
                  children: (0, h.jsx)(d.Z, {
                    className: 'image-container',
                    image: r.image,
                    isJsx: !0,
                    jsxImage: (0, h.jsx)(G.Z, {
                      fill: v.color || 'white',
                      imageSrc: (null === x || void 0 === x ? void 0 : x.image) || '',
                      maskSrc: Z(r.blueprintId || 0),
                    }),
                    alt: r.title,
                  }),
                }),
                (0, h.jsx)(nt, {
                  children: r.colors.map(function (t, e) {
                    return (0, h.jsx)(
                      rt,
                      {
                        onClick: function () {
                          w(t);
                        },
                        children: t.id == v.id ? (0, h.jsx)(V, { fill: 'white' }) : (0, h.jsx)(V, { fill: 'grey' }),
                      },
                      e
                    );
                  }),
                }),
              ],
            }),
            (0, h.jsx)(l.Z, { className: 'product-info', product: r, inDetail: !0 }),
            (0, h.jsxs)(et, {
              isMobile: u,
              children: [
                (0, h.jsxs)('div', {
                  children: [
                    (0, h.jsx)(tt, { children: 'Available Colors' }),
                    (0, h.jsx)($, {
                      isMobile: u,
                      children: r.colors.map(function (t, e) {
                        return (0, h.jsx)(
                          Y,
                          {
                            onClick: function () {
                              return (function (t) {
                                var e = r.colors.find(function (e) {
                                  return e.id == t;
                                });
                                w(e || v);
                              })(t.id);
                            },
                            isSelected: t.id == v.id,
                            children: (0, h.jsx)(G.Z, {
                              fill: t.color || 'white',
                              imageSrc: (null === x || void 0 === x ? void 0 : x.image) || '',
                              maskSrc: Z(r.blueprintId || 0),
                            }),
                          },
                          e
                        );
                      }),
                    }),
                  ],
                }),
                (0, h.jsxs)('div', {
                  children: [
                    (0, h.jsx)(z, { sizes: r.sizes, active: m, onChange: f, productName: r.title }),
                    (0, h.jsx)(J, { isLimited: !r.unlimitedQty, quantity: r.qty, onChange: j, active: y }),
                  ],
                }),
              ],
            }),
            (0, h.jsx)(Q, {
              onClick: function () {
                var t = r.sizes.find(function (t) {
                  return t.id === m;
                });
                if (C && t) {
                  var e;
                  if (
                    (_('add', { product: r, size: t, color: v, quantity: null !== y && void 0 !== y ? y : 1 }),
                    window.analytics)
                  )
                    window.analytics.track('Merch Added To Cart', {
                      product_id: r.id,
                      variant_id:
                        null ===
                          (e = r.variants.find(function (e) {
                            return e.sizeId == t.id;
                          })) || void 0 === e
                          ? void 0
                          : e.id,
                      size_selected: t.name,
                      quantity: 1,
                    });
                  a.push('../cart');
                }
              },
              disabled: !C,
              children: 'Add to Cart',
            }),
          ],
        });
      }
      var U = a.ZP.div.withConfig({ displayName: 'product-item-detail__ProductContainer', componentId: 'sc-98sn0-0' })([
          'max-width:535px;width:100%;.product-info{margin-top:40px;}',
        ]),
        Q = (0, a.ZP)(W.Z).withConfig({ displayName: 'product-item-detail__CartButton', componentId: 'sc-98sn0-1' })([
          'width:100%;height:70px;',
        ]),
        $ = a.ZP.div.withConfig({ displayName: 'product-item-detail__VariantWrap', componentId: 'sc-98sn0-2' })(
          ['display:grid;width:fit-content;grid-gap:5px;grid-template-columns:repeat( ', ',1fr );'],
          function (t) {
            return t.isMobile ? '5' : '4';
          }
        ),
        Y = a.ZP.div.withConfig({ displayName: 'product-item-detail__VariantItemWrap', componentId: 'sc-98sn0-3' })(
          ['width:60px;height:60px;:hover{cursor:pointer;}border:', ';'],
          function (t) {
            return t.isSelected ? '2px solid #A2D743' : '';
          }
        ),
        tt = a.ZP.h4.withConfig({ displayName: 'product-item-detail__Title', componentId: 'sc-98sn0-4' })(
          ['font-family:Inter;font-style:normal;font-weight:normal;font-size:12px;opacity:0.5;color:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        et = a.ZP.div.withConfig({ displayName: 'product-item-detail__DetailsWrap', componentId: 'sc-98sn0-5' })(
          ['display:grid;grid-template-columns:repeat( ', ',1fr );padding-bottom:20px;'],
          function (t) {
            return t.isMobile ? '1' : '2';
          }
        ),
        it = a.ZP.div.withConfig({ displayName: 'product-item-detail__ImageWrap', componentId: 'sc-98sn0-6' })([
          'position:relative;',
        ]),
        nt = a.ZP.div.withConfig({ displayName: 'product-item-detail__DotSelect', componentId: 'sc-98sn0-7' })([
          'display:flex;justify-content:center;position:absolute;bottom:10px;left:45%;:hover{cursor:pointer;}',
        ]),
        rt = a.ZP.div.withConfig({ displayName: 'product-item-detail__DotSelectItem', componentId: 'sc-98sn0-8' })([
          'padding:2px;',
        ]),
        ot = i(7343),
        at = i(2163),
        ct = i(9207),
        st = i(1421),
        lt = !0;
      function dt(t) {
        var e = (0, n.useState)(t.siteData)[0],
          i = (0, A.j)(e.ownerId).cart,
          a = (0, ct.V)(t.siteData).pageData;
        return t.product
          ? (0, h.jsxs)(h.Fragment, {
              children: [
                (0, h.jsx)(st.Z, { pageData: a }),
                (0, h.jsx)(o.Z, {
                  theme: e ? e.theme : void 0,
                  removeBranding: null === e || void 0 === e ? void 0 : e.removeBranding,
                  children: (0, h.jsxs)(r.Z, {
                    columnFlow: !0,
                    children: [
                      (0, h.jsx)(at.Z, { title: 'Merch' }),
                      (0, h.jsx)(K, { product: t.product, cartKey: e.ownerId }),
                      (0, h.jsx)(ot.Z, { products: t.merchData, showCart: i.length > 0 }),
                    ],
                  }),
                }),
              ],
            })
          : null;
      }
    },
    5216: function (t, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch/detail/[productId]',
        function () {
          return i(7060);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [430, 987, 819, 55, 742, 227, 324, 774, 888, 179], function () {
      return (e = 5216), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
