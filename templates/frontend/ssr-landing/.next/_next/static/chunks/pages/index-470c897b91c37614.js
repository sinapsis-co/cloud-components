(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
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
          l = void 0 === c ? '/sweater.png' : c,
          s = t.haveHover,
          h = void 0 !== s && s;
        return (0, r.jsxs)(o, {
          className: 'white' === e ? 'no-mask' : '',
          fill: e,
          haveHover: h,
          children: [
            (0, r.jsx)('img', { className: 'main-image', src: a, alt: 'filter-main-image' }),
            'white' !== e && (0, r.jsx)('img', { className: 'mask-image', src: l, alt: 'filter-mask-image' }),
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
          u = t.isJsx,
          p = t.jsxImage,
          m = t.inCart,
          g = t.inDetail,
          f = t.highlight,
          x = t.hasAnimation,
          v = t.variants;
        return (0, o.jsx)(l, {
          className: ''
            .concat(i, ' ')
            .concat(m ? 'cart' : '', ' ')
            .concat(g ? 'detail' : ''),
          hasDarkBackground: c,
          isHighlighted: f,
          children: (0, o.jsx)(r.ww.div, {
            variants: v,
            transition: n.BH,
            children: u
              ? (0, o.jsx)(s, {
                  variants: x ? n.LS : void 0,
                  initial: 'initial',
                  animate: 'animate',
                  exit: 'exit',
                  transition: n.kr,
                  className: ''
                    .concat(m ? 'cart' : '', ' ')
                    .concat(g ? 'detail' : '', ' ')
                    .concat(m || g || !f ? '' : 'highlight'),
                  children: (0, o.jsx)(h, { children: p }),
                })
              : (0, o.jsx)(d, {
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
      var l = a.ZP.div.withConfig({ displayName: 'product-img__ImgContainer', componentId: 'sc-1wvkwid-0' })(
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
        s = (0, a.ZP)(r.ww.div).withConfig({
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
        h = a.ZP.div.withConfig({ displayName: 'product-img__ProductImg', componentId: 'sc-1wvkwid-2' })([
          'height:100%;',
        ]),
        d = (0, a.ZP)(r.ww.img).withConfig({ displayName: 'product-img__ProductImgTag', componentId: 'sc-1wvkwid-3' })([
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
          u = t.color,
          p = t.noPrice,
          m = t.highlight,
          g = function () {
            return (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsxs)('div', {
                  children: [
                    (0, o.jsx)(s, { className: 'title', children: e.title }),
                    r && c ? (0, o.jsxs)(d, { children: ['Size: ', c, u && ', '.concat(u)] }) : null,
                  ],
                }),
                !p && (0, o.jsxs)(h, { className: 'price', children: ['$', e.price.toFixed(2).toLocaleString()] }),
              ],
            });
          };
        return (0, o.jsx)(l, {
          className: i,
          inDetail: n,
          inCart: r,
          highlight: m,
          children: m
            ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)('div', { children: (0, o.jsx)(g, {}) }), (0, o.jsx)(a.Z, { className: 'badge' })],
              })
            : (0, o.jsx)(g, {}),
        });
      }
      var l = (0, n.ZP)(r.Z).withConfig({
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
        s = n.ZP.h4.withConfig({ displayName: 'product-info__Title', componentId: 'sc-1vodx6d-1' })(
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
        h = n.ZP.h6.withConfig({ displayName: 'product-info__Price', componentId: 'sc-1vodx6d-2' })(
          ['color:', ';font-size:16px;font-weight:400;line-height:24px;opacity:0.7;margin:0;'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        d = n.ZP.h6.withConfig({ displayName: 'product-info__Details', componentId: 'sc-1vodx6d-3' })(
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
          return u;
        },
      });
      var n = e(1163),
        r = e(186),
        a = e(6805),
        o = e(131),
        c = e(9806),
        l = e(5981),
        s = e(8465),
        h = e(8052),
        d = e(5893);
      function u(t) {
        var i = t.className,
          e = t.product,
          r = t.highlight,
          a = t.hasAnimation,
          u = t.hasDelay,
          g = (0, n.useRouter)(),
          f = (0, o.YD)({ triggerOnce: !0, rootMargin: '200px 0px' }),
          x = f.ref,
          v = f.inView;
        return (0, d.jsx)(p, {
          className: ''.concat(i || '', ' ').concat(r ? 'highlight' : ''),
          onClick: function () {
            window.analytics && window.analytics.track('Merch Page Clicked', { product_id: e.id }),
              g.push('/merch/detail/'.concat(e.id));
          },
          variants: h.LS,
          initial: 'initial',
          animate: v || 0 === u ? 'animate' : 'initial',
          exit: 'exit',
          ref: x,
          transition: { duration: 0.35, delay: u ? 0.1 * u : 0, ease: [0, 0.005, 0.2, 1] },
          children: (0, d.jsxs)(m, {
            initial: 'rest',
            whileHover: 'hover',
            whileTap: 'tap',
            animate: 'rest',
            className: 'wrapper',
            children: [
              (0, d.jsx)(c.Z, {
                className: 'image-container',
                image: e.image,
                alt: e.title,
                isJsx: !0,
                highlight: r,
                hasAnimation: a,
                variants: h.wM,
                jsxImage: (0, d.jsx)(s.Z, {
                  fill: '',
                  haveHover: !0,
                  imageSrc: e.image,
                  maskSrc: ''
                    .concat('https://media.development.trac.co', '/merch-preview/')
                    .concat(e.blueprintId, '-mask.png'),
                }),
              }),
              (0, d.jsx)(l.Z, { className: 'product-info', product: e, highlight: r }),
            ],
          }),
        });
      }
      var p = (0, r.ZP)(a.ww.div).withConfig({
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
        m = (0, r.ZP)(a.ww.div).withConfig({ displayName: 'product-item__Wrapper', componentId: 'sc-1rx8y8s-1' })(
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
    6876: function (t, i, e) {
      'use strict';
      e.d(i, {
        Z: function () {
          return k;
        },
      });
      var n = e(186),
        r = e(2447),
        a = e(1389),
        o = e(1355),
        c = e(9499),
        l = e(6805),
        s = e(5893);
      function h(t, i) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          i &&
            (n = n.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function d(t) {
        for (var i = 1; i < arguments.length; i++) {
          var e = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? h(Object(e), !0).forEach(function (i) {
                (0, c.Z)(t, i, e[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : h(Object(e)).forEach(function (i) {
                Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i));
              });
        }
        return t;
      }
      function u(t) {
        return (0, s.jsx)(p, {
          initial: 'rest',
          whileHover: 'hover',
          whileTap: 'tap',
          animate: 'rest',
          children: (0, s.jsx)(
            'svg',
            d(
              d({ width: '11', height: '10', viewBox: '0 0 11 10' }, t),
              {},
              {
                style: { overflow: 'visible' },
                children: (0, s.jsx)(m, {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M5.64007 1.53697L8.0606 4.09174L0.837498 4.12698C0.614275 4.12787 0.400549 4.22353 0.243444 4.39288C0.08634 4.56224 -0.00124073 4.79136 1.23978e-05 5.02975C0.0010519 5.26799 0.090724 5.49602 0.249279 5.66362C0.407835 5.83121 0.62227 5.92463 0.845354 5.92329L8.06688 5.88889L5.67856 8.46967C5.52135 8.63872 5.43351 8.86758 5.43439 9.10584C5.43528 9.3441 5.52481 9.57221 5.68328 9.73993C6.0136 10.089 6.54622 10.0863 6.87351 9.73405L10.8017 5.49791C11.0691 5.20761 11.0656 4.74071 10.7938 4.45503L6.82401 0.260002C6.49396 -0.0889478 5.96158 -0.0863191 5.63457 0.265876C5.47741 0.435182 5.38969 0.664244 5.39072 0.902639C5.39175 1.14103 5.48145 1.36922 5.64007 1.53697Z',
                  fill: t.fill,
                  variants: { rest: { x: 0, scale: 1 }, hover: { x: 3, scale: 1.0625 }, tap: { x: 100, scale: 0.95 } },
                }),
              }
            )
          ),
        });
      }
      var p = (0, n.ZP)(l.ww.div).withConfig({ displayName: 'arrow-right__IconWrapper', componentId: 'sc-1ovjnyu-0' })([
          'cursor:pointer;',
        ]),
        m = (0, n.ZP)(l.ww.path).withConfig({ displayName: 'arrow-right__StyledPath', componentId: 'sc-1ovjnyu-1' })(
          ['fill:', ';'],
          function (t) {
            return t.theme.colors.icon;
          }
        ),
        g = e(5322),
        f = e(1183),
        x = e(7887),
        v = e(131),
        w = e(8052);
      function k(t) {
        var i,
          e = t.data,
          c = t.className,
          h = t.artistId,
          d = t.releaseId,
          p = t.hasDelay,
          m = t.noAnimation,
          k = (0, n.Fg)(),
          C = (0, r.Z)(),
          Z = (0, v.YD)({ triggerOnce: !0, rootMargin: '200px 0px' }),
          z = Z.ref,
          S = Z.inView,
          P = (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(j, {
                className: ''.concat(e.highlight ? 'highlight' : ''),
                children: [
                  (0, s.jsx)(l.ww.div, {
                    variants: w.wM,
                    transition: w.BH,
                    children: e.platform
                      ? (0, s.jsx)(N, { as: 'div', children: (0, a.Z)(e.platform) })
                      : (0, s.jsx)(o.Z, {
                          src: e.avatar,
                          alt: e.title,
                          variant: e.highlight ? 'squareHighlight' : 'squareSmall',
                        }),
                  }),
                  (0, s.jsxs)(x.Z, {
                    highlight: e.highlight,
                    children: [
                      (0, s.jsx)(f.Z, {
                        className: ''.concat(e.highlight ? 'highlight' : ''),
                        children: (0, s.jsx)('h3', { children: e.title }),
                      }),
                      e.highlight ? (0, s.jsx)(g.Z, { className: 'badge' }) : null,
                    ],
                  }),
                ],
              }),
              e.highlight && C
                ? null
                : (0, s.jsx)(_, {
                    className: 'icon',
                    children: (0, s.jsx)(u, { height: '20px', fill: k.colors.primary }),
                  }),
            ],
          }),
          I = ''
            .concat(c || '', ' ')
            .concat(e.highlight ? 'highlight' : '', ' ')
            .concat(e.platform ? 'platform' : '');
        return e.title && e.url
          ? (0, s.jsx)(b, {
              className: I,
              href: '/link/'.concat(
                ((i = e.title),
                i
                  .split(' ')
                  .join('-')
                  .replace(/[^a-zA-Z ]/g, '')
                  .toLowerCase())
              ),
              onClick: function () {
                analytics.track('Traclink Click', { dsp: e.platform, artist_id: h, release_id: d });
              },
              variants: m ? void 0 : w.LS,
              initial: m ? void 0 : 'initial',
              animate: m ? void 0 : S || 0 === p ? 'animate' : 'initial',
              exit: 'exit',
              ref: z,
              transition: { duration: 0.35, delay: p ? 0.1 * p : 0, ease: [0.43, 0.13, 0.23, 0.96] },
              children: (0, s.jsx)(y, {
                initial: 'rest',
                whileHover: 'hover',
                whileTap: 'tap',
                animate: 'rest',
                className: 'wrapper',
                children: P,
              }),
            })
          : null;
      }
      var b = (0, n.ZP)(l.ww.a).withConfig({ displayName: 'simple-link__Link', componentId: 'fqic60-0' })(
          [
            'border-radius:5px;background-color:',
            ';color:',
            ';width:100%;cursor:pointer;.wrapper{transition:background-color ',
            ';}&:hover{.wrapper{background-color:',
            ';}}&.highlight{background-color:',
            ';grid-column:span 2;order:-1;.wrapper{padding:32px;gap:32px;@media (max-width:',
            '){padding:24px;gap:24px;}}}&.platform{.wrapper{background-color:',
            ';&:hover{background-color:',
            ';.icon{background-color:',
            ';}}}}',
          ],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            return t.theme.colors.primary;
          },
          function (t) {
            var i = t.theme;
            return ''.concat(i.transitions.duration, ' ').concat(i.transitions.type);
          },
          function (t) {
            return t.theme.colors.itemBackgroundHover;
          },
          function (t) {
            return t.theme.colors.highlightBackground;
          },
          function (t) {
            var i = t.theme;
            return ''.concat(i.breakpoints.laptopS, 'px');
          },
          function (t) {
            return t.theme.colors.sidebarBackground;
          },
          function (t) {
            return t.theme.colors.inputsBackground;
          },
          function (t) {
            return t.theme.colors.inputsBackground;
          }
        ),
        y = (0, n.ZP)(l.ww.div).withConfig({ displayName: 'simple-link__Wrapper', componentId: 'fqic60-1' })(
          [
            'padding:20px;display:flex;align-items:center;gap:24px;@media (max-width:',
            '){gap:12px;}@media (max-width:',
            '){height:auto;}',
          ],
          function (t) {
            var i = t.theme;
            return ''.concat(i.breakpoints.laptopS, 'px');
          },
          function (t) {
            var i = t.theme;
            return ''.concat(i.breakpoints.tablet, 'px');
          }
        ),
        j = n.ZP.div.withConfig({ displayName: 'simple-link__Content', componentId: 'fqic60-2' })(
          [
            'display:flex;align-items:center;justify-content:flex-start;width:100%;gap:24px;&.highlight{height:100%;@media (max-width:',
            '){flex-direction:column;}}@media (max-width:',
            '){gap:12px;}',
          ],
          function (t) {
            var i = t.theme;
            return ''.concat(i.breakpoints.laptopS, 'px');
          },
          function (t) {
            var i = t.theme;
            return ''.concat(i.breakpoints.laptopS, 'px');
          }
        ),
        _ = n.ZP.button.withConfig({ displayName: 'simple-link__Icon', componentId: 'fqic60-3' })(
          [
            'background-color:',
            ';display:flex;justify-content:center;align-items:center;flex:0 0 auto;width:',
            ';height:',
            ';border-radius:50%;cursor:pointer;overflow:visible;',
          ],
          function (t) {
            return t.theme.colors.sidebarBackground;
          },
          function (t) {
            return t.theme.sizes.commonIconSize;
          },
          function (t) {
            return t.theme.sizes.commonIconSize;
          }
        ),
        N = (0, n.ZP)(_).withConfig({ displayName: 'simple-link__PlatformIcon', componentId: 'fqic60-4' })(
          ['background-color:', ';> svg{height:20px;fill:', ';}'],
          function (t) {
            return t.theme.colors.itemBackground;
          },
          function (t) {
            return t.theme.colors.primary;
          }
        );
    },
    2779: function (t, i, e) {
      'use strict';
      e.r(i),
        e.d(i, {
          __N_SSP: function () {
            return m;
          },
          default: function () {
            return g;
          },
        });
      var n = e(7294),
        r = e(2962),
        a = e(3886),
        o = e(1972),
        c = e(1807),
        l = e(2310),
        s = e(3492),
        h = e(6876),
        d = e(8134),
        u = e(2321),
        p = e(5893),
        m = !0;
      function g(t) {
        var i = (0, a.V)(t.siteData).pageData,
          e = t.merchData.sort(function (t, i) {
            return (t.order || 0) - (i.order || 0);
          });
        (e = e.map(function (t) {
          var i = t.colors.find(function (t) {
            return 'White' == t.name || 'white' == t.name;
          });
          return i ? ((t.image = i.image || t.image), t) : t;
        })),
          (0, n.useEffect)(function () {
            var t, e;
            window.analytics &&
              window.analytics.track('Tracpage Viewed', {
                artist_id: null === i || void 0 === i ? void 0 : i.id,
                name: null === i || void 0 === i ? void 0 : i.title,
                releases: null === i || void 0 === i || null === (t = i.links) || void 0 === t ? void 0 : t.length,
                social_links:
                  null === i || void 0 === i || null === (e = i.data) || void 0 === e
                    ? void 0
                    : e.social.map(function (t) {
                        return t.provider;
                      }),
              });
          });
        return i && i.id
          ? (0, p.jsxs)(p.Fragment, {
              children: [
                (0, p.jsx)(r.PB, {
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
                (0, p.jsx)(d.Z, {
                  theme: i ? i.theme : void 0,
                  children: (0, p.jsx)(l.Z, {
                    pageData: i,
                    noAnimation: !0,
                    children: (0, p.jsx)(o.Z, {
                      children: (function () {
                        var t = [],
                          n = [],
                          r = [],
                          a = [],
                          o = [];
                        null === i ||
                          void 0 === i ||
                          i.links.forEach(function (t) {
                            return t.highlight ? a.push(t) : 'url' === t.type ? r.push(t) : n.push(t);
                          }),
                          e.forEach(function (t) {
                            return o.push(t);
                          }),
                          (t = [].concat(a));
                        do {
                          o.length &&
                            (o.length > 1 && 0 === n.length && !t[t.length - 1].price
                              ? (t.push(o[0]), t.push(o[1]), o.shift(), o.shift())
                              : (t.push(o[0]), o.shift())),
                            n.length &&
                              (n.length > 1 && 0 === o.length && !t[t.length - 1].price
                                ? (t.push(n[0]), t.push(n[1]), n.shift(), n.shift())
                                : (t.push(n[0]), n.shift())),
                            r.length && (t.push(r[0]), r.shift());
                        } while (r.length || o.length || n.length);
                        return t;
                      })().map(function (t, e) {
                        var n, r;
                        return 'type' in t
                          ? 'url' === t.type
                            ? (0, p.jsx)(
                                h.Z,
                                { className: 'full-width', data: t, releaseId: i.id, artistId: i.ownerId, hasDelay: e },
                                ''.concat(e, '-').concat(t.title)
                              )
                            : 'traclink' === t.type
                            ? (0, p.jsx)(
                                c.Z,
                                {
                                  className: t.highlight ? 'highlight' : '',
                                  data: t,
                                  artistName: t.title,
                                  hasDelay: e,
                                },
                                ''.concat(e, '-').concat(t.title)
                              )
                            : (0, p.jsx)(
                                s.Z,
                                {
                                  className: t.highlight ? 'highlight' : '',
                                  data: {
                                    title: t.title,
                                    url: null === (n = t.embedData) || void 0 === n ? void 0 : n.url,
                                    id: (null === (r = t.embedData) || void 0 === r ? void 0 : r.id) || '',
                                    highlight: t.highlight,
                                    type: t.type,
                                  },
                                  artistName: i.title,
                                  hasDelay: e,
                                },
                                ''.concat(e, '-').concat(t.title)
                              )
                          : (0, p.jsx)(
                              u.Z,
                              { product: t, hasDelay: e, hasAnimation: !0 },
                              ''.concat(e, '-').concat(t.title)
                            );
                      }),
                    }),
                  }),
                }),
              ],
            })
          : null;
      }
    },
    8312: function (t, i, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return e(2779);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [774, 430, 457, 890, 661, 957, 888, 179], function () {
      return (i = 8312), t((t.s = i));
      var i;
    });
    var i = t.O();
    _N_E = i;
  },
]);
