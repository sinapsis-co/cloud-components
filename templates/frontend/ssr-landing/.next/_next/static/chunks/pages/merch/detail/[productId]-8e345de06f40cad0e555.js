_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [21],
  {
    '0FW9': function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return g;
      });
      var n = i('q1tI'),
        o = i.n(n),
        a = i('vOnD'),
        r = i('20a2'),
        c = i('WqaS'),
        l = i('zoQI'),
        d = i('aagu'),
        s = i('RHGb'),
        u = i('SPwB'),
        p = o.a.createElement;
      function m(t) {
        var e = t.className,
          i = t.product,
          n = t.inList,
          o = Object(r.useRouter)();
        return p(
          f,
          {
            className: e,
            onClick: function () {
              window.analytics && window.analytics.track('Merch Page Clicked', { product_id: i.id }),
                o.push('/merch/detail/'.concat(i.id));
            },
          },
          p(d.a, {
            className: 'image-container',
            image: i.image,
            alt: i.title,
            inList: n || 1,
            isJsx: !0,
            jsxImage: p(u.a, {
              fill: '',
              haveHover: !0,
              imageSrc: i.image,
              maskSrc: 'https://media.development.trac.co/merch-preview/'.concat(i.blueprintId, '-mask.png'),
            }),
          }),
          p(s.a, { className: 'product-info', product: i })
        );
      }
      var f = a.e.div.withConfig({ displayName: 'product-item__ProductContainer', componentId: 'sc-1rx8y8s-0' })(
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
        h = o.a.createElement;
      function g(t) {
        var e = t.products,
          i = t.showCart,
          n = Object(r.useRouter)(),
          a = e.sort(function (t, e) {
            return (t.order || 0) - (e.order || 0);
          });
        return (
          (a = a.map(function (t) {
            var e = t.colors.find(function (t) {
              return 'White' == t.name || 'white' == t.name;
            });
            return e ? ((t.image = e.image || t.image), t) : t;
          })),
          h(
            o.a.Fragment,
            null,
            h(
              v,
              null,
              a.map(function (t, e) {
                return h(m, {
                  className: 'product-item',
                  key: ''.concat(t.title, '-').concat(e),
                  product: t,
                  inList: 2,
                });
              })
            ),
            i
              ? null
              : h(
                  b,
                  {
                    onClick: function () {
                      return n.push('/merch/cart');
                    },
                  },
                  'View Cart'
                )
          )
        );
      }
      var v = Object(a.e)(c.a).withConfig({ displayName: 'product-list__ListWrapper', componentId: 'sc-1epfjzo-0' })(
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
        b = Object(a.e)(l.a).withConfig({ displayName: 'product-list__CartButton', componentId: 'sc-1epfjzo-1' })(
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
    '2sFz': function (t, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch/detail/[productId]',
        function () {
          return i('baZN');
        },
      ]);
    },
    MWXp: function (t, e, i) {
      'use strict';
      var n = i('q1tI'),
        o = i.n(n),
        a = i('g4pe'),
        r = i.n(a),
        c = i('9ixD'),
        l = o.a.createElement;
      e.a = function (t) {
        var e = t.pageData;
        return l(
          o.a.Fragment,
          null,
          l(r.a, null, l('link', { rel: 'icon', href: '/favicon/favicon.ico' })),
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
    RHGb: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return l;
      });
      var n = i('q1tI'),
        o = i.n(n),
        a = i('vOnD'),
        r = i('WqaS'),
        c = o.a.createElement;
      function l(t) {
        var e = t.className,
          i = t.product,
          n = t.inDetail,
          o = t.noPrice;
        return c(
          d,
          { className: e, inDetail: n },
          c(s, { className: 'title' }, i.title),
          !o && c(u, { className: 'price' }, '$', i.price.toFixed(2).toLocaleString())
        );
      }
      var d = Object(a.e)(r.a).withConfig({
          displayName: 'product-info__InformationWrapper',
          componentId: 'sc-1vodx6d-0',
        })(['flex-direction:column;', ''], function (t) {
          return t.inDetail
            ? Object(a.d)(
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
        s = a.e.h4.withConfig({ displayName: 'product-info__Title', componentId: 'sc-1vodx6d-1' })(
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
        u = a.e.h6.withConfig({ displayName: 'product-info__Price', componentId: 'sc-1vodx6d-2' })(
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
    SPwB: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return c;
      });
      var n = i('q1tI'),
        o = i.n(n),
        a = i('vOnD'),
        r = o.a.createElement;
      function c(t) {
        var e = t.fill,
          i = void 0 === e ? '#EDA064' : e,
          n = t.imageSrc,
          o = void 0 === n ? 'https://media.development.trac.co/merch/images/49-368.jpg' : n,
          a = t.maskSrc,
          c = void 0 === a ? '/sweater.png' : a,
          d = t.haveHover;
        return r(
          l,
          { fill: i, haveHover: void 0 !== d && d },
          r('img', { id: 'main-image', src: o, alt: 'filter-main-image' }),
          'white' != i && r('img', { id: 'mask-image', src: c, alt: 'filter-mask-image' })
        );
      }
      var l = a.e.div.withConfig({ displayName: 'image-color-filter__FilterWrapper', componentId: 'sc-11t2le6-0' })(
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
    aagu: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return c;
      });
      var n = i('q1tI'),
        o = i.n(n),
        a = i('vOnD'),
        r = o.a.createElement;
      function c(t) {
        var e = t.className,
          i = t.image,
          n = t.inList,
          o = t.square,
          a = t.alt,
          c = t.isJsx,
          s = void 0 !== c && c,
          m = t.jsxImage;
        return r(d, { className: e, inList: n, square: o }, s ? r(l, null, r(u, null, m)) : r(p, { src: i, alt: a }));
      }
      var l = a.e.div.withConfig({ displayName: 'product-img__FilteredImageWrap', componentId: 'sc-1wvkwid-0' })([
          'height:100%;position:relative;display:flex;justify-content:center;align-items:center;',
        ]),
        d = a.e.div.withConfig({ displayName: 'product-img__ImgContainer', componentId: 'sc-1wvkwid-1' })(
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
              ? Object(a.d)(
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
              ? Object(a.d)(
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
                  e ? Object(a.d)(['margin:0 auto;']) : null
                )
              : null;
          }
        ),
        s = '\n  position: absolute;\n  max-width: 65%;\n  width: 100%;\n  display: block;\n',
        u = a.e.div.withConfig({ displayName: 'product-img__ProductImg', componentId: 'sc-1wvkwid-2' })(['', ''], s),
        p = a.e.img.withConfig({ displayName: 'product-img__ProductImgTag', componentId: 'sc-1wvkwid-3' })(
          ['top:50%;left:50%;transform:translate(-50%,-50%);', ''],
          s
        );
    },
    baZN: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, '__N_SSP', function () {
          return gt;
        }),
        i.d(e, 'default', function () {
          return vt;
        });
      var n = i('q1tI'),
        o = i.n(n),
        a = i('6Hpx'),
        r = i('42Rd'),
        c = i('vOnD'),
        l = i('20a2'),
        d = i('voqa'),
        s = i('RHGb'),
        u = i('aagu'),
        p = i('XGvB'),
        m = i('WqaS'),
        f = i('ZMKu'),
        h = o.a.createElement;
      var g = Object(c.e)(f.b.div).withConfig({
          displayName: 'product-size-guide__SizeGuideWrapper',
          componentId: 'sc-4m4hc0-0',
        })(['']),
        v = Object(c.e)(m.a).withConfig({ displayName: 'product-size-guide__Row', componentId: 'sc-4m4hc0-1' })(
          [
            'justify-content:flex-start;align-items:center;flex-direction:row;padding:20px 0;border-bottom:1px dotted ',
            ';&:first-child{padding:0 0 30px;border-bottom:none;& > span{font-weight:700;}}',
            '',
          ],
          function (t) {
            return t.theme.colors.primaryHover;
          },
          function (t) {
            return t.noLine ? Object(c.d)(['border-bottom:none;padding:20px 0 0;']) : null;
          }
        ),
        b = c.e.span.withConfig({ displayName: 'product-size-guide__Item', componentId: 'sc-4m4hc0-2' })(
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
            return e > 1 ? Object(c.d)(['calc(100% / (', ' + 1));'], e) : '100%;';
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        ),
        w = c.e.p.withConfig({ displayName: 'product-size-guide__HelpText', componentId: 'sc-4m4hc0-3' })(
          ['font-size:12px;font-weight:400;line-height:14px;text-align:left;color:', ';'],
          function (t) {
            return t.theme.colors.background;
          }
        ),
        x = i('hRDA'),
        y = i('SXEb'),
        _ = n.createElement;
      function O(t) {
        var e = t.className,
          i = t.text,
          o = t.children,
          a = t.fixedOnMobile,
          r = t.hasClose,
          l = t.titleText,
          s = Object(n.useState)(!1),
          u = s[0],
          p = s[1],
          m = Object(d.a)(),
          h = Object(c.f)();
        return _(
          C,
          { className: ''.concat(e, ' ').concat(a ? 'fixed' : null) },
          _(
            I,
            {
              onClick: function () {
                return p(!u);
              },
            },
            i
          ),
          _(
            f.a,
            null,
            u
              ? _(
                  y.a,
                  null,
                  _(
                    N,
                    { className: 'tooltip-content' },
                    m && r
                      ? _(
                          k,
                          { alignItems: 'center', justifyContent: 'space-between' },
                          l ? _(j, null, l) : null,
                          _(x.a, {
                            onClick: function () {
                              return p(!u);
                            },
                            fill: h.colors.background,
                          })
                        )
                      : null,
                    o
                  )
                )
              : null
          )
        );
      }
      var C = c.e.div.withConfig({ displayName: 'tooltip__TooltipWrapper', componentId: 'sc-1ha8c9q-0' })([
          '&.fixed{.tooltip-content{z-index:999;position:fixed;right:0;bottom:0;left:0;transform:none;}}',
        ]),
        I = c.e.span.withConfig({ displayName: 'tooltip__TooltopText', componentId: 'sc-1ha8c9q-1' })(
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
        N = c.e.div.withConfig({ displayName: 'tooltip__TooltipContent', componentId: 'sc-1ha8c9q-2' })(
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
        j = c.e.h4.withConfig({ displayName: 'tooltip__Title', componentId: 'sc-1ha8c9q-3' })(
          ['font-size:14px;font-weight:700;line-height:17px;color:', ';'],
          function (t) {
            return t.theme.colors.background;
          }
        ),
        k = Object(c.e)(m.a).withConfig({ displayName: 'tooltip__Header', componentId: 'sc-1ha8c9q-4' })([
          'margin:4px 0 20px;',
        ]),
        z = i('fXhW'),
        S = o.a.createElement,
        q = Object(p.a)(),
        L = ['Unisex Twill Hat', 'Custom Pin Buttons', 'Tough Cases'];
      function D(t) {
        var e = t.className,
          i = t.active,
          n = t.sizes,
          o = t.onChange,
          a = t.productName,
          r = void 0 === a ? '' : a,
          c = n.map(function (t) {
            return { label: t.name, value: t.id };
          }),
          l = Object(d.a)();
        return S(
          W,
          { className: ''.concat(e, ' ').concat(l ? '' : 'desktop') },
          l && !L.includes(r)
            ? S(
                A,
                { fixedOnMobile: !0, hasClose: !0, titleText: 'Size Guide', text: 'Size Guide (?)' },
                S(R, { sizeItems: z, helpText: '*All measurements are in Inches. All pieces fit true to size.' })
              )
            : null,
          S(
            T,
            null,
            S(
              P,
              { justifyContent: 'flex-end', alignItems: 'center' },
              l || L.includes(r)
                ? null
                : S(
                    M,
                    { text: 'Size Guide (?)' },
                    S(R, { sizeItems: z, helpText: '*All measurements are in Inches. All pieces fit true to size.' })
                  ),
              S(E, {
                options: c,
                title: 'Select size',
                value: i,
                onChange: function (t) {
                  return o(t);
                },
                customBorderRadius: '4px',
              })
            )
          )
        );
      }
      var E = Object(c.e)(q).withConfig({
          displayName: 'product-size-selector__StyledDropdownCtrl',
          componentId: 'sc-1fu7rya-0',
        })(['width:100%;']),
        W = c.e.div.withConfig({ displayName: 'product-size-selector__SizesWrappper', componentId: 'sc-1fu7rya-1' })([
          'margin:12px 0px;&.desktop{position:relative;}',
        ]),
        T = Object(c.e)(m.a).withConfig({
          displayName: 'product-size-selector__SizeSelectorWrapper',
          componentId: 'sc-1fu7rya-2',
        })(['align-items:center !important;justify-content:space-between !important;margin:24px 0;']),
        P = Object(c.e)(m.a).withConfig({
          displayName: 'product-size-selector__FlexWrapper',
          componentId: 'sc-1fu7rya-3',
        })(['width:-webkit-fill-available;display:flex;flex-direction:column;']),
        R = Object(c.e)(function (t) {
          var e = t.className,
            i = t.sizeItems,
            n = t.helpText;
          return h(
            g,
            { className: e },
            h(
              v,
              null,
              h(b, { itemsLength: 3 }),
              i[0].sizeOptions.map(function (t, e) {
                return h(b, { key: ''.concat(t.label, '-').concat(e), itemsLength: i.length }, t.label);
              })
            ),
            i.map(function (t, e) {
              return h(
                v,
                { key: ''.concat(t.label, '-').concat(e) },
                h(b, { itemsLength: i.length }, t.label),
                t.sizeOptions.map(function (t, e) {
                  return h(b, { key: ''.concat(t.label, '-').concat(e), itemsLength: i.length }, t.value);
                })
              );
            }),
            n ? h(v, { noLine: !0 }, h(w, null, n)) : null
          );
        }).withConfig({ displayName: 'product-size-selector__StyledSizeGuide', componentId: 'sc-1fu7rya-4' })([
          'width:535px;max-width:100%;',
        ]),
        A = Object(c.e)(O).withConfig({
          displayName: 'product-size-selector__StyledTooltip',
          componentId: 'sc-1fu7rya-5',
        })(['.tooltip-content{padding:24px;border-radius:2px;background-color:', ';}'], function (t) {
          return t.theme.colors.primary;
        }),
        M = Object(c.e)(O).withConfig({
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
        X = i('zoQI'),
        B = i('pZhd'),
        H = i('a3WO');
      var F = i('BsWD');
      function G(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Object(H.a)(t);
          })(t) ||
          (function (t) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
          })(t) ||
          Object(F.a)(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      var J = o.a.createElement,
        Z = Object(p.a)(),
        V = c.e.span.withConfig({
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
        K = c.e.div.withConfig({
          displayName: 'product-quantity-selector-dropdown__Container',
          componentId: 'rr9qe-1',
        })(['position:relative;']),
        Q = function (t) {
          var e = t.isLimited,
            i = t.quantity,
            n = t.onChange,
            o = t.active,
            a = e ? i : 1e3,
            r = G(Array(null !== a && void 0 !== a ? a : 0).keys()).map(function (t) {
              return { label: ''.concat(t + 1), value: t + 1 };
            });
          return J(
            K,
            { className: 'mt-40' },
            e && i && i >= 10 ? J(V, null, 'Limited') : null,
            e && i && i < 10 ? J(V, { isRed: !0 }, 'Only ', i, ' remaining!') : null,
            0 === i ? J(V, { soldOut: !0 }, 'Sold Out') : null,
            J(Z, {
              options: r,
              title: 'Select quantity',
              value: o,
              customBorderRadius: '4px',
              onChange: function (t) {
                return n(t);
              },
            })
          );
        },
        U = i('SPwB'),
        Y = o.a.createElement;
      var $ = function (t) {
          var e = t.fill;
          return Y(
            'svg',
            { width: '7', height: '7', viewBox: '0 0 7 7', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
            Y('circle', { cx: '3.5', cy: '3.5', r: '3.5', fill: e })
          );
        },
        tt = o.a.createElement;
      function et(t) {
        var e = t.className,
          i = t.cartKey,
          o = t.product,
          a = t.onClick,
          r = Object(l.useRouter)(),
          c = Object(d.a)();
        Object(n.useEffect)(function () {
          window.analytics && window.analytics.track('Merch Product Viewed', { product_id: o.id });
        });
        var p = Object(n.useState)(),
          m = p[0],
          f = p[1],
          h = o.colors.find(function (t) {
            return 'White' == t.name || 'white' == t.name;
          }),
          g = Object(n.useState)(h || o.colors[0]),
          v = g[0],
          b = g[1],
          w = Object(n.useState)(),
          x = w[0],
          y = w[1],
          _ = Object(B.a)(i).updateCart,
          O = !(!m || !x || (o.colors.length && !v.id)),
          C = function (t) {
            return 'https://media.development.trac.co/merch-preview/'.concat(t, '-mask.png');
          };
        return tt(
          it,
          { className: e, onClick: a },
          tt(
            lt,
            null,
            tt(
              'div',
              null,
              tt(u.a, {
                className: 'image-container',
                image: o.image,
                isJsx: !0,
                jsxImage: tt(U.a, {
                  fill: v.color || 'white',
                  imageSrc: (null === h || void 0 === h ? void 0 : h.image) || '',
                  maskSrc: C(o.blueprintId || 0),
                }),
                alt: o.title,
              })
            ),
            tt(
              dt,
              null,
              o.colors.map(function (t, e) {
                return tt(
                  st,
                  {
                    key: e,
                    onClick: function () {
                      b(t);
                    },
                  },
                  t.id == v.id ? tt($, { fill: 'white' }) : tt($, { fill: 'grey' })
                );
              })
            )
          ),
          tt(s.a, { className: 'product-info', product: o, inDetail: !0 }),
          tt(
            ct,
            { isMobile: c },
            tt(
              'div',
              null,
              tt(rt, null, 'Available Colors'),
              tt(
                ot,
                { isMobile: c },
                o.colors.map(function (t, e) {
                  return tt(
                    at,
                    {
                      key: e,
                      onClick: function () {
                        return (function (t) {
                          var e = o.colors.find(function (e) {
                            return e.id == t;
                          });
                          b(e || v);
                        })(t.id);
                      },
                      isSelected: t.id == v.id,
                    },
                    tt(U.a, {
                      fill: t.color || 'white',
                      imageSrc: (null === h || void 0 === h ? void 0 : h.image) || '',
                      maskSrc: C(o.blueprintId || 0),
                    })
                  );
                })
              )
            ),
            tt(
              'div',
              null,
              tt(D, { sizes: o.sizes, active: m, onChange: f, productName: o.title }),
              tt(Q, { isLimited: !o.unlimitedQty, quantity: o.qty, onChange: y, active: x })
            )
          ),
          tt(
            nt,
            {
              onClick: function () {
                var t = o.sizes.find(function (t) {
                  return t.id === m;
                });
                if (O && t) {
                  var e;
                  if (
                    (_('add', { product: o, size: t, color: v, quantity: null !== x && void 0 !== x ? x : 1 }),
                    window.analytics)
                  )
                    window.analytics.track('Merch Added To Cart', {
                      product_id: o.id,
                      variant_id:
                        null ===
                          (e = o.variants.find(function (e) {
                            return e.sizeId == t.id;
                          })) || void 0 === e
                          ? void 0
                          : e.id,
                      size_selected: t.name,
                      quantity: 1,
                    });
                  r.push('../cart');
                }
              },
              disabled: !O,
            },
            'Add to Cart'
          )
        );
      }
      var it = c.e.div.withConfig({ displayName: 'product-item-detail__ProductContainer', componentId: 'sc-98sn0-0' })([
          'max-width:535px;width:100%;.product-info{margin-top:40px;}',
        ]),
        nt = Object(c.e)(X.a).withConfig({ displayName: 'product-item-detail__CartButton', componentId: 'sc-98sn0-1' })(
          ['width:100%;height:70px;']
        ),
        ot = c.e.div.withConfig({ displayName: 'product-item-detail__VariantWrap', componentId: 'sc-98sn0-2' })(
          ['display:grid;width:fit-content;grid-gap:5px;grid-template-columns:repeat( ', ',1fr );'],
          function (t) {
            return t.isMobile ? '5' : '4';
          }
        ),
        at = c.e.div.withConfig({ displayName: 'product-item-detail__VariantItemWrap', componentId: 'sc-98sn0-3' })(
          ['width:60px;height:60px;:hover{cursor:pointer;}border:', ';'],
          function (t) {
            return t.isSelected ? '2px solid #A2D743' : '';
          }
        ),
        rt = c.e.h4.withConfig({ displayName: 'product-item-detail__Title', componentId: 'sc-98sn0-4' })(
          ['font-family:Inter;font-style:normal;font-weight:normal;font-size:12px;opacity:0.5;color:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        ct = c.e.div.withConfig({ displayName: 'product-item-detail__DetailsWrap', componentId: 'sc-98sn0-5' })(
          ['display:grid;grid-template-columns:repeat( ', ',1fr );padding-bottom:20px;'],
          function (t) {
            return t.isMobile ? '1' : '2';
          }
        ),
        lt = c.e.div.withConfig({ displayName: 'product-item-detail__ImageWrap', componentId: 'sc-98sn0-6' })([
          'position:relative;',
        ]),
        dt = c.e.div.withConfig({ displayName: 'product-item-detail__DotSelect', componentId: 'sc-98sn0-7' })([
          'display:flex;justify-content:center;position:absolute;bottom:10px;left:45%;:hover{cursor:pointer;}',
        ]),
        st = c.e.div.withConfig({ displayName: 'product-item-detail__DotSelectItem', componentId: 'sc-98sn0-8' })([
          'padding:2px;',
        ]),
        ut = i('0FW9'),
        pt = i('/kYb'),
        mt = i('jtTr'),
        ft = i('MWXp'),
        ht = o.a.createElement,
        gt = !0;
      function vt(t) {
        var e = Object(n.useState)(t.siteData)[0],
          i = Object(B.a)(e.ownerId).cart,
          c = Object(mt.a)(t.siteData).pageData;
        return t.product
          ? ht(
              o.a.Fragment,
              null,
              ht(ft.a, { pageData: c }),
              ht(
                r.a,
                { theme: e ? e.theme : void 0, removeBranding: null === e || void 0 === e ? void 0 : e.removeBranding },
                ht(
                  a.a,
                  { columnFlow: !0 },
                  ht(pt.a, { title: 'Merch' }),
                  ht(et, { product: t.product, cartKey: e.ownerId }),
                  ht(ut.a, { products: t.merchData, showCart: i.length > 0 })
                )
              )
            )
          : null;
      }
    },
    fXhW: function (t) {
      t.exports = JSON.parse(
        '[{"label":"Width","sizeOptions":[{"label":"S","value":"18"},{"label":"M","value":"20"},{"label":"L","value":"21.97"},{"label":"XL","value":"23.98"},{"label":"2XL","value":"25.99"},{"label":"3XL","value":"28"}]},{"label":"Length","sizeOptions":[{"label":"S","value":"28"},{"label":"M","value":"29.26"},{"label":"L","value":"30.24"},{"label":"XL","value":"31.26"},{"label":"2XL","value":"32.49"},{"label":"3XL","value":"33.51"}]},{"label":"Sleeve length","sizeOptions":[{"label":"S","value":"8.23"},{"label":"M","value":"8.51"},{"label":"L","value":"8.75"},{"label":"XL","value":"9.02"},{"label":"2XL","value":"9.26"},{"label":"3XL","value":"9.49"}]}]'
      );
    },
    hRDA: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return r;
      });
      var n = i('wx14'),
        o = i('q1tI'),
        a = i.n(o).a.createElement;
      function r(t) {
        return a(
          'svg',
          Object(n.a)({ width: '12', height: '12', viewBox: '0 0 12 12' }, t),
          a('rect', {
            x: '10.9497',
            y: '-0.36377',
            width: '2',
            height: '16',
            rx: '1',
            transform: 'rotate(45 10.9497 -0.36377)',
            fill: t.fill,
          }),
          a('rect', {
            x: '1.05029',
            y: '-0.36377',
            width: '16',
            height: '2',
            rx: '1',
            transform: 'rotate(45 1.05029 -0.36377)',
            fill: t.fill,
          })
        );
      }
    },
    pZhd: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return d;
      });
      var n = i('rePB'),
        o = i('q1tI');
      function a(t, e) {
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
      function r(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? a(Object(i), !0).forEach(function (e) {
                Object(n.a)(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : a(Object(i)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
              });
        }
        return t;
      }
      var c = function (t, e) {
          'undefined' !== typeof localStorage && localStorage.setItem(t, JSON.stringify(e));
        },
        l = function (t) {
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
        d = function (t) {
          var e = 'TRAC_CART.'.concat(t),
            i = Object(o.useState)(
              (function (t) {
                if ('undefined' !== typeof localStorage) {
                  var e = localStorage.getItem(t);
                  if (e) return JSON.parse(e);
                }
                return [];
              })(e)
            ),
            n = i[0],
            a = i[1],
            d = function (t) {
              return c(e, t), a(t), t;
            },
            s = n.reduce(function (t, e) {
              return t + e.product.price * e.quantity;
            }, 0);
          return {
            cart: n,
            total: s,
            updateCart: function (t, e) {
              var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                o = n.find(l(e));
              o && ('add' === t && (e.quantity += i), 'remove' === t && (e.quantity -= i));
              var a = n
                .concat(o || 'add' !== t ? [] : [e])
                .map(function (t) {
                  return l(e)(t) ? r({}, e) : r({}, t);
                })
                .filter(function (t) {
                  return t.quantity > 0;
                });
              return d(a);
            },
            saveCart: d,
            emptyCart: function () {
              c(e, []), a([]);
            },
          };
        };
    },
    voqa: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return a;
      });
      var n = i('q1tI'),
        o = i('MllO');
      function a() {
        var t = Object(n.useState)({ width: void 0, height: void 0 }),
          e = t[0],
          i = t[1];
        return (
          Object(n.useEffect)(function () {
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
          !!e.width && e.width <= o.a.laptopS
        );
      }
    },
  },
  [['2sFz', 0, 2, 4, 1, 3, 5, 6, 7, 12]],
]);
