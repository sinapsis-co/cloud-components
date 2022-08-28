_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [16],
  {
    F4Zc: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, '__N_SSP', function () {
          return m;
        }),
        i.d(e, 'default', function () {
          return f;
        });
      var n = i('q1tI'),
        r = i.n(n),
        a = i('jtTr'),
        o = i('6Hpx'),
        c = i('MWXp'),
        s = i('42Rd'),
        l = i('M/EI'),
        u = i('xQzR'),
        d = r.a.createElement;
      function h(t) {
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
          d(
            l.a,
            null,
            e.map(function (t, e) {
              return d(u.a, { className: 'product-item', key: ''.concat(t.title, '-').concat(e), product: t });
            })
          )
        );
      }
      var p = r.a.createElement,
        m = !0;
      function f(t) {
        var e = Object(a.a)(t.siteData).pageData;
        return (
          Object(n.useEffect)(function () {
            var e = t.merchData.map(function (t, e) {
              return { product_id: t.id, index: e };
            });
            window.analytics && window.analytics.track('Merch Page Viewed', { products: e });
          }),
          e && e.id
            ? p(
                r.a.Fragment,
                null,
                p(c.a, { pageData: e }),
                p(
                  s.a,
                  { theme: e ? e.theme : void 0 },
                  p(o.a, { pageData: e, noAnimation: !0 }, p(h, { products: t.merchData }))
                )
              )
            : null
        );
      }
    },
    'M/EI': function (t, e, i) {
      'use strict';
      var n = i('q1tI'),
        r = i.n(n),
        a = i('vOnD'),
        o = r.a.createElement,
        c = a.d.div.withConfig({ displayName: 'grid__StyledGrid', componentId: 'sc-1mu4cgu-0' })(
          [
            'display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:32px;.full-width{grid-column:span 2;}@media (max-width:',
            '){grid-column-gap:16px;grid-row-gap:32px;}& > *{flex-shrink:0;}',
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
    PGlZ: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return f;
      });
      var n = i('q1tI');
      function r() {
        return (r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function a(t, e) {
        return (a =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var o = new Map(),
        c = new WeakMap(),
        s = 0,
        l = void 0;
      function u(t) {
        return Object.keys(t)
          .sort()
          .filter(function (e) {
            return void 0 !== t[e];
          })
          .map(function (e) {
            return (
              e +
              '_' +
              ('root' === e ? ((i = t.root) ? (c.has(i) || ((s += 1), c.set(i, s.toString())), c.get(i)) : '0') : t[e])
            );
            var i;
          })
          .toString();
      }
      function d(t, e, i, n) {
        if (
          (void 0 === i && (i = {}),
          void 0 === n && (n = l),
          'undefined' === typeof window.IntersectionObserver && void 0 !== n)
        ) {
          var r = t.getBoundingClientRect();
          return (
            e(n, {
              isIntersecting: n,
              target: t,
              intersectionRatio: 'number' === typeof i.threshold ? i.threshold : 0,
              time: 0,
              boundingClientRect: r,
              intersectionRect: r,
              rootBounds: r,
            }),
            function () {}
          );
        }
        var a = (function (t) {
            var e = u(t),
              i = o.get(e);
            if (!i) {
              var n,
                r = new Map(),
                a = new IntersectionObserver(function (e) {
                  e.forEach(function (e) {
                    var i,
                      a =
                        e.isIntersecting &&
                        n.some(function (t) {
                          return e.intersectionRatio >= t;
                        });
                    t.trackVisibility && 'undefined' === typeof e.isVisible && (e.isVisible = a),
                      null == (i = r.get(e.target)) ||
                        i.forEach(function (t) {
                          t(a, e);
                        });
                  });
                }, t);
              (n = a.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0])),
                (i = { id: e, observer: a, elements: r }),
                o.set(e, i);
            }
            return i;
          })(i),
          c = a.id,
          s = a.observer,
          d = a.elements,
          h = d.get(t) || [];
        return (
          d.has(t) || d.set(t, h),
          h.push(e),
          s.observe(t),
          function () {
            h.splice(h.indexOf(e), 1),
              0 === h.length && (d.delete(t), s.unobserve(t)),
              0 === d.size && (s.disconnect(), o.delete(c));
          }
        );
      }
      var h = [
        'children',
        'as',
        'triggerOnce',
        'threshold',
        'root',
        'rootMargin',
        'onChange',
        'skip',
        'trackVisibility',
        'delay',
        'initialInView',
        'fallbackInView',
      ];
      function p(t) {
        return 'function' !== typeof t.children;
      }
      var m = (function (t) {
        var e, i;
        function o(e) {
          var i;
          return (
            ((i = t.call(this, e) || this).node = null),
            (i._unobserveCb = null),
            (i.handleNode = function (t) {
              i.node &&
                (i.unobserve(),
                t ||
                  i.props.triggerOnce ||
                  i.props.skip ||
                  i.setState({ inView: !!i.props.initialInView, entry: void 0 })),
                (i.node = t || null),
                i.observeNode();
            }),
            (i.handleChange = function (t, e) {
              t && i.props.triggerOnce && i.unobserve(),
                p(i.props) || i.setState({ inView: t, entry: e }),
                i.props.onChange && i.props.onChange(t, e);
            }),
            (i.state = { inView: !!e.initialInView, entry: void 0 }),
            i
          );
        }
        (i = t), ((e = o).prototype = Object.create(i.prototype)), (e.prototype.constructor = e), a(e, i);
        var c = o.prototype;
        return (
          (c.componentDidUpdate = function (t) {
            (t.rootMargin === this.props.rootMargin &&
              t.root === this.props.root &&
              t.threshold === this.props.threshold &&
              t.skip === this.props.skip &&
              t.trackVisibility === this.props.trackVisibility &&
              t.delay === this.props.delay) ||
              (this.unobserve(), this.observeNode());
          }),
          (c.componentWillUnmount = function () {
            this.unobserve(), (this.node = null);
          }),
          (c.observeNode = function () {
            if (this.node && !this.props.skip) {
              var t = this.props,
                e = t.threshold,
                i = t.root,
                n = t.rootMargin,
                r = t.trackVisibility,
                a = t.delay,
                o = t.fallbackInView;
              this._unobserveCb = d(
                this.node,
                this.handleChange,
                { threshold: e, root: i, rootMargin: n, trackVisibility: r, delay: a },
                o
              );
            }
          }),
          (c.unobserve = function () {
            this._unobserveCb && (this._unobserveCb(), (this._unobserveCb = null));
          }),
          (c.render = function () {
            if (!p(this.props)) {
              var t = this.state,
                e = t.inView,
                i = t.entry;
              return this.props.children({ inView: e, entry: i, ref: this.handleNode });
            }
            var a = this.props,
              o = a.children,
              c = a.as,
              s = (function (t, e) {
                if (null == t) return {};
                var i,
                  n,
                  r = {},
                  a = Object.keys(t);
                for (n = 0; n < a.length; n++) (i = a[n]), e.indexOf(i) >= 0 || (r[i] = t[i]);
                return r;
              })(a, h);
            return n.createElement(c || 'div', r({ ref: this.handleNode }, s), o);
          }),
          o
        );
      })(n.Component);
      function f(t) {
        var e = void 0 === t ? {} : t,
          i = e.threshold,
          r = e.delay,
          a = e.trackVisibility,
          o = e.rootMargin,
          c = e.root,
          s = e.triggerOnce,
          l = e.skip,
          u = e.initialInView,
          h = e.fallbackInView,
          p = n.useRef(),
          m = n.useState({ inView: !!u }),
          f = m[0],
          g = m[1],
          v = n.useCallback(
            function (t) {
              void 0 !== p.current && (p.current(), (p.current = void 0)),
                l ||
                  (t &&
                    (p.current = d(
                      t,
                      function (t, e) {
                        g({ inView: t, entry: e }),
                          e.isIntersecting && s && p.current && (p.current(), (p.current = void 0));
                      },
                      { root: c, rootMargin: o, threshold: i, trackVisibility: a, delay: r },
                      h
                    )));
            },
            [Array.isArray(i) ? i.toString() : i, c, o, s, l, a, h, r]
          );
        Object(n.useEffect)(function () {
          p.current || !f.entry || s || l || g({ inView: !!u });
        });
        var w = [v, f.inView, f.entry];
        return (w.ref = w[0]), (w.inView = w[1]), (w.entry = w[2]), w;
      }
      (m.displayName = 'InView'), (m.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 });
    },
    RHGb: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return l;
      });
      var n = i('q1tI'),
        r = i.n(n),
        a = i('vOnD'),
        o = i('WqaS'),
        c = i('rJDM'),
        s = r.a.createElement;
      function l(t) {
        var e = t.className,
          i = t.product,
          n = t.inDetail,
          a = t.inCart,
          o = t.size,
          l = t.color,
          m = t.noPrice,
          f = t.highlight,
          g = function () {
            return s(
              r.a.Fragment,
              null,
              s(
                'div',
                null,
                s(d, { className: 'title' }, i.title),
                a && o ? s(p, null, 'Size: ', o, l && ', '.concat(l)) : null
              ),
              !m && s(h, { className: 'price' }, '$', i.price.toFixed(2).toLocaleString())
            );
          };
        return s(
          u,
          { className: e, inDetail: n, inCart: a, highlight: f },
          f ? s(r.a.Fragment, null, s('div', null, s(g, null)), s(c.a, { className: 'badge' })) : s(g, null)
        );
      }
      var u = Object(a.d)(o.a).withConfig({
          displayName: 'product-info__InformationWrapper',
          componentId: 'sc-1vodx6d-0',
        })(
          ['flex-direction:column;align-items:flex-start;', ' ', ' ', ''],
          function (t) {
            return t.inDetail
              ? Object(a.c)(
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
              ? Object(a.c)([
                  'width:100%;flex-direction:row;justify-content:space-between;align-items:center;.title{font-size:16px;font-weight:700;line-height:24px;}',
                ])
              : null;
          },
          function (t) {
            return t.highlight
              ? Object(a.c)(
                  [
                    'height:100%;justify-content:space-between;@media (max-width:',
                    '){gap:24px;text-align:center;align-items:center;}',
                  ],
                  function (t) {
                    var e = t.theme;
                    return ''.concat(e.breakpoints.laptopS, 'px');
                  }
                )
              : null;
          }
        ),
        d = a.d.h4.withConfig({ displayName: 'product-info__Title', componentId: 'sc-1vodx6d-1' })(
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
        h = a.d.h6.withConfig({ displayName: 'product-info__Price', componentId: 'sc-1vodx6d-2' })(
          ['color:', ';font-size:16px;font-weight:400;line-height:24px;opacity:0.7;margin:0;'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        p = a.d.h6.withConfig({ displayName: 'product-info__Details', componentId: 'sc-1vodx6d-3' })(
          ['color:', ';font-size:14px;font-weight:400;line-height:24px;margin:0;'],
          function (t) {
            return t.theme.colors.primary;
          }
        );
    },
    SPwB: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return c;
      });
      var n = i('q1tI'),
        r = i.n(n),
        a = i('vOnD'),
        o = r.a.createElement;
      function c(t) {
        var e = t.fill,
          i = void 0 === e ? '#EDA064' : e,
          n = t.imageSrc,
          r = void 0 === n ? ''.concat('https://media.development.trac.co', '/merch/images/49-368.jpg') : n,
          a = t.maskSrc,
          c = void 0 === a ? '/sweater.png' : a,
          l = t.haveHover;
        return o(
          s,
          { className: 'white' === i ? 'no-mask' : '', fill: i, haveHover: void 0 !== l && l },
          o('img', { className: 'main-image', src: r, alt: 'filter-main-image' }),
          'white' !== i && o('img', { className: 'mask-image', src: c, alt: 'filter-mask-image' })
        );
      }
      var s = a.d.div.withConfig({ displayName: 'image-color-filter__FilterWrapper', componentId: 'sc-11t2le6-0' })(
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
    TOVE: function (t, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch',
        function () {
          return i('F4Zc');
        },
      ]);
    },
    WqaS: function (t, e, i) {
      'use strict';
      var n = i('q1tI'),
        r = i('vOnD'),
        a = n.createElement;
      e.a = Object(r.d)(function (t) {
        return a(
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
    aagu: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return l;
      });
      var n = i('q1tI'),
        r = i.n(n),
        a = i('V0DS'),
        o = i('ZMKu'),
        c = i('vOnD'),
        s = r.a.createElement;
      function l(t) {
        var e = t.className,
          i = t.image,
          n = t.alt,
          r = t.hasDarkBackground,
          c = t.isJsx,
          l = t.jsxImage,
          m = t.inCart,
          f = t.inDetail,
          g = t.highlight,
          v = t.hasAnimation,
          w = t.variants;
        return s(
          u,
          {
            className: ''
              .concat(e, ' ')
              .concat(m ? 'cart' : '', ' ')
              .concat(f ? 'detail' : ''),
            hasDarkBackground: r,
            isHighlighted: g,
          },
          s(
            o.b.div,
            { variants: w, transition: a.b },
            c
              ? s(
                  d,
                  {
                    variants: v ? a.e : void 0,
                    initial: 'initial',
                    animate: 'animate',
                    exit: 'exit',
                    transition: a.d,
                    className: ''
                      .concat(m ? 'cart' : '', ' ')
                      .concat(f ? 'detail' : '', ' ')
                      .concat(m || f || !g ? '' : 'highlight'),
                  },
                  s(h, null, l)
                )
              : s(p, {
                  src: i,
                  alt: n,
                  variants: v ? a.e : void 0,
                  initial: 'initial',
                  animate: 'animate',
                  exit: 'exit',
                  transition: a.d,
                })
          )
        );
      }
      var u = c.d.div.withConfig({ displayName: 'product-img__ImgContainer', componentId: 'sc-1wvkwid-0' })(
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
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          },
          function (t) {
            return t.hasDarkBackground
              ? Object(c.c)(['background-color:', ';'], function (t) {
                  return t.theme.colors.sidebarBackground;
                })
              : null;
          },
          function (t) {
            return t.isHighlighted
              ? Object(c.c)(['background-color:', ';padding:0;'], function (t) {
                  return t.theme.colors.sidebarBackground;
                })
              : null;
          }
        ),
        d = Object(c.d)(o.b.div).withConfig({
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
            var e = t.theme;
            return ''.concat(e.sizes.productSizeMobile);
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.sizes.productSizeMobile);
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlight;
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlight;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlightMobile;
          },
          function (t) {
            return t.theme.sizes.coverSizeHighlightMobile;
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
        ),
        h = c.d.div.withConfig({ displayName: 'product-img__ProductImg', componentId: 'sc-1wvkwid-2' })([
          'height:100%;',
        ]),
        p = Object(c.d)(o.b.img).withConfig({ displayName: 'product-img__ProductImgTag', componentId: 'sc-1wvkwid-3' })(
          ['position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:65%;width:100%;display:block;']
        );
    },
    rJDM: function (t, e, i) {
      'use strict';
      var n = i('q1tI'),
        r = i.n(n),
        a = i('vOnD'),
        o = i('wx14'),
        c = i('Ff2n'),
        s = r.a.createElement,
        l = function (t) {
          var e = t.className,
            i = t.onClick,
            n = Object(c.a)(t, ['className', 'onClick']),
            r = Object(a.f)();
          return s(
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
                style: { cursor: i ? 'pointer' : 'auto' },
              },
              n
            ),
            s('path', {
              fill: r.colors.highlightDark,
              d: 'M5.53,12.45c-.5,0-.99-.21-1.33-.6l-.17-.2c-.38-.44-.43-1.07-.12-1.56,.19-.31,.25-.66,.17-1.01-.09-.35-.3-.64-.62-.83L.95,6.74C.41,6.42,.05,5.85,0,5.24c-.05-.62,.22-1.23,.7-1.63L4.56,.46C5.04,.06,5.68-.09,6.29,.05c.62,.14,1.12,.55,1.37,1.11l1.08,2.41c.3,.66,1.01,1.04,1.74,.93,.57-.09,1.14,.12,1.5,.55l.1,.11c.68,.79,.57,1.96-.23,2.62l-5.21,4.26c-.32,.27-.72,.39-1.11,.39ZM1.99,5.09l2.51,1.5c.77,.46,1.3,1.18,1.51,2.03,.11,.46,.12,.93,.03,1.38l4.33-3.55c-1.47,.07-2.86-.77-3.46-2.11l-1.08-2.41L1.99,5.09Zm8.47,1.21h0Z',
            }),
            s('path', {
              fill: r.colors.highlightDark,
              d: 'M12.19,14c-.23,0-.46-.1-.62-.28l-1.28-1.49c-.29-.33-.24-.83,.1-1.12,.34-.28,.85-.24,1.14,.1l1.28,1.49c.29,.33,.24,.83-.1,1.12-.15,.12-.34,.18-.52,.18Z',
            })
          );
        },
        u = r.a.createElement,
        d =
          ((e.a = function (t) {
            var e = t.className;
            return u(d, { className: e || '' }, u(l, null), u('h6', null, 'Featured'));
          }),
          a.d.div.withConfig({ displayName: 'featured-badge__StyledBadge', componentId: 'sc-69krp2-0' })(
            [
              'background-color:',
              ';border-radius:90px;max-width:120px;padding:8px 16px;display:flex;justify-content:flex-start;align-items:center;gap:10px;h6{color:',
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
    xQzR: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return m;
      });
      var n = i('q1tI'),
        r = i.n(n),
        a = i('20a2'),
        o = i('vOnD'),
        c = i('ZMKu'),
        s = i('PGlZ'),
        l = i('aagu'),
        u = i('RHGb'),
        d = i('SPwB'),
        h = i('V0DS'),
        p = r.a.createElement;
      function m(t) {
        var e = t.className,
          i = t.product,
          n = t.highlight,
          r = t.hasAnimation,
          o = t.hasDelay,
          c = Object(a.useRouter)(),
          m = Object(s.a)({ triggerOnce: !0, rootMargin: '200px 0px' }),
          v = m.ref,
          w = m.inView;
        return p(
          f,
          {
            className: ''.concat(e || '', ' ').concat(n ? 'highlight' : ''),
            onClick: function () {
              window.analytics && window.analytics.track('Merch Page Clicked', { product_id: i.id }),
                c.push('/merch/detail/'.concat(i.id));
            },
            variants: h.e,
            initial: 'initial',
            animate: w || 0 === o ? 'animate' : 'initial',
            exit: 'exit',
            ref: v,
            transition: { duration: 0.35, delay: o ? 0.1 * o : 0, ease: [0, 0.005, 0.2, 1] },
          },
          p(
            g,
            { initial: 'rest', whileHover: 'hover', whileTap: 'tap', animate: 'rest', className: 'wrapper' },
            p(l.a, {
              className: 'image-container',
              image: i.image,
              alt: i.title,
              isJsx: !0,
              highlight: n,
              hasAnimation: r,
              variants: h.c,
              jsxImage: p(d.a, {
                fill: '',
                haveHover: !0,
                imageSrc: i.image,
                maskSrc: ''
                  .concat('https://media.development.trac.co', '/merch-preview/')
                  .concat(i.blueprintId, '-mask.png'),
              }),
            }),
            p(u.a, { className: 'product-info', product: i, highlight: n })
          )
        );
      }
      var f = Object(o.d)(c.b.div).withConfig({
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
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          }
        ),
        g = Object(o.d)(c.b.div).withConfig({ displayName: 'product-item__Wrapper', componentId: 'sc-1rx8y8s-1' })(
          [
            'display:flex;flex-direction:column;gap:24px;@media (max-width:',
            '){width:max-content;}@media (max-width:',
            '){max-width:none;width:auto;gap:12px;}',
          ],
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.laptopS, 'px');
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.breakpoints.tablet, 'px');
          }
        );
    },
  },
  [['TOVE', 0, 2, 3, 1, 4]],
]);
