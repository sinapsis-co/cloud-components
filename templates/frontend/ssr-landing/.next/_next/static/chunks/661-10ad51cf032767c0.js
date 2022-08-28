'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [661],
  {
    5322: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return h;
        },
      });
      r(7294);
      var n = r(186),
        i = r(9499),
        o = r(4730),
        s = r(5893),
        a = ['className', 'onClick'];
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                (0, i.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var u = function (e) {
          var t = e.className,
            r = e.onClick,
            i = (0, o.Z)(e, a),
            c = (0, n.Fg)();
          return (0, s.jsxs)(
            'svg',
            l(
              l(
                {
                  viewBox: '0 0 13 14',
                  width: 13,
                  height: 14,
                  className: t,
                  onClick: r,
                  'aria-hidden': 'true',
                  role: 'img',
                  style: { cursor: r ? 'pointer' : 'auto' },
                },
                i
              ),
              {},
              {
                children: [
                  (0, s.jsx)('path', {
                    fill: c.colors.highlightDark,
                    d: 'M5.53,12.45c-.5,0-.99-.21-1.33-.6l-.17-.2c-.38-.44-.43-1.07-.12-1.56,.19-.31,.25-.66,.17-1.01-.09-.35-.3-.64-.62-.83L.95,6.74C.41,6.42,.05,5.85,0,5.24c-.05-.62,.22-1.23,.7-1.63L4.56,.46C5.04,.06,5.68-.09,6.29,.05c.62,.14,1.12,.55,1.37,1.11l1.08,2.41c.3,.66,1.01,1.04,1.74,.93,.57-.09,1.14,.12,1.5,.55l.1,.11c.68,.79,.57,1.96-.23,2.62l-5.21,4.26c-.32,.27-.72,.39-1.11,.39ZM1.99,5.09l2.51,1.5c.77,.46,1.3,1.18,1.51,2.03,.11,.46,.12,.93,.03,1.38l4.33-3.55c-1.47,.07-2.86-.77-3.46-2.11l-1.08-2.41L1.99,5.09Zm8.47,1.21h0Z',
                  }),
                  (0, s.jsx)('path', {
                    fill: c.colors.highlightDark,
                    d: 'M12.19,14c-.23,0-.46-.1-.62-.28l-1.28-1.49c-.29-.33-.24-.83,.1-1.12,.34-.28,.85-.24,1.14,.1l1.28,1.49c.29,.33,.24,.83-.1,1.12-.15,.12-.34,.18-.52,.18Z',
                  }),
                ],
              }
            )
          );
        },
        h = function (e) {
          var t = e.className;
          return (0, s.jsxs)(p, {
            className: t || '',
            children: [(0, s.jsx)(u, {}), (0, s.jsx)('h6', { children: 'Featured' })],
          });
        },
        p = n.ZP.div.withConfig({ displayName: 'featured-badge__StyledBadge', componentId: 'sc-69krp2-0' })(
          [
            'background-color:',
            ';border-radius:90px;max-width:120px;padding:8px 16px;display:flex;justify-content:flex-start;align-items:center;gap:10px;h6{color:',
            ';font-size:14px;font-weight:700;line-height:24px;margin:0;}@media (max-width:',
            '){padding:8px;}',
          ],
          function (e) {
            return e.theme.colors.highlightLight;
          },
          function (e) {
            return e.theme.colors.highlightDark;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          }
        );
    },
    1972: function (e, t, r) {
      r(7294);
      var n = r(186),
        i = r(5893),
        o = n.ZP.div.withConfig({ displayName: 'grid__StyledGrid', componentId: 'sc-1mu4cgu-0' })(
          [
            'display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:32px;.full-width{grid-column:span 2;}@media (max-width:',
            '){grid-column-gap:16px;grid-row-gap:32px;}& > *{flex-shrink:0;}',
          ],
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.laptop, 'px');
          }
        );
      t.Z = function (e) {
        var t = e.className,
          r = e.children;
        return (0, i.jsx)(o, { className: t || '', children: r });
      };
    },
    131: function (e, t, r) {
      r.d(t, {
        YD: function () {
          return g;
        },
      });
      var n = r(7294);
      function i() {
        return (
          (i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          i.apply(this, arguments)
        );
      }
      function o(e, t) {
        return (
          (o =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          o(e, t)
        );
      }
      var s = new Map(),
        a = new WeakMap(),
        c = 0,
        l = void 0;
      function u(e) {
        return Object.keys(e)
          .sort()
          .filter(function (t) {
            return void 0 !== e[t];
          })
          .map(function (t) {
            return (
              t +
              '_' +
              ('root' === t ? ((r = e.root) ? (a.has(r) || ((c += 1), a.set(r, c.toString())), a.get(r)) : '0') : e[t])
            );
            var r;
          })
          .toString();
      }
      function h(e, t, r, n) {
        if (
          (void 0 === r && (r = {}),
          void 0 === n && (n = l),
          'undefined' === typeof window.IntersectionObserver && void 0 !== n)
        ) {
          var i = e.getBoundingClientRect();
          return (
            t(n, {
              isIntersecting: n,
              target: e,
              intersectionRatio: 'number' === typeof r.threshold ? r.threshold : 0,
              time: 0,
              boundingClientRect: i,
              intersectionRect: i,
              rootBounds: i,
            }),
            function () {}
          );
        }
        var o = (function (e) {
            var t = u(e),
              r = s.get(t);
            if (!r) {
              var n,
                i = new Map(),
                o = new IntersectionObserver(function (t) {
                  t.forEach(function (t) {
                    var r,
                      o =
                        t.isIntersecting &&
                        n.some(function (e) {
                          return t.intersectionRatio >= e;
                        });
                    e.trackVisibility && 'undefined' === typeof t.isVisible && (t.isVisible = o),
                      null == (r = i.get(t.target)) ||
                        r.forEach(function (e) {
                          e(o, t);
                        });
                  });
                }, e);
              (n = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
                (r = { id: t, observer: o, elements: i }),
                s.set(t, r);
            }
            return r;
          })(r),
          a = o.id,
          c = o.observer,
          h = o.elements,
          p = h.get(e) || [];
        return (
          h.has(e) || h.set(e, p),
          p.push(t),
          c.observe(e),
          function () {
            p.splice(p.indexOf(t), 1),
              0 === p.length && (h.delete(e), c.unobserve(e)),
              0 === h.size && (c.disconnect(), s.delete(a));
          }
        );
      }
      var p = [
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
      function d(e) {
        return 'function' !== typeof e.children;
      }
      var f = (function (e) {
        var t, r;
        function s(t) {
          var r;
          return (
            ((r = e.call(this, t) || this).node = null),
            (r._unobserveCb = null),
            (r.handleNode = function (e) {
              r.node &&
                (r.unobserve(),
                e ||
                  r.props.triggerOnce ||
                  r.props.skip ||
                  r.setState({ inView: !!r.props.initialInView, entry: void 0 })),
                (r.node = e || null),
                r.observeNode();
            }),
            (r.handleChange = function (e, t) {
              e && r.props.triggerOnce && r.unobserve(),
                d(r.props) || r.setState({ inView: e, entry: t }),
                r.props.onChange && r.props.onChange(e, t);
            }),
            (r.state = { inView: !!t.initialInView, entry: void 0 }),
            r
          );
        }
        (r = e), ((t = s).prototype = Object.create(r.prototype)), (t.prototype.constructor = t), o(t, r);
        var a = s.prototype;
        return (
          (a.componentDidUpdate = function (e) {
            (e.rootMargin === this.props.rootMargin &&
              e.root === this.props.root &&
              e.threshold === this.props.threshold &&
              e.skip === this.props.skip &&
              e.trackVisibility === this.props.trackVisibility &&
              e.delay === this.props.delay) ||
              (this.unobserve(), this.observeNode());
          }),
          (a.componentWillUnmount = function () {
            this.unobserve(), (this.node = null);
          }),
          (a.observeNode = function () {
            if (this.node && !this.props.skip) {
              var e = this.props,
                t = e.threshold,
                r = e.root,
                n = e.rootMargin,
                i = e.trackVisibility,
                o = e.delay,
                s = e.fallbackInView;
              this._unobserveCb = h(
                this.node,
                this.handleChange,
                { threshold: t, root: r, rootMargin: n, trackVisibility: i, delay: o },
                s
              );
            }
          }),
          (a.unobserve = function () {
            this._unobserveCb && (this._unobserveCb(), (this._unobserveCb = null));
          }),
          (a.render = function () {
            if (!d(this.props)) {
              var e = this.state,
                t = e.inView,
                r = e.entry;
              return this.props.children({ inView: t, entry: r, ref: this.handleNode });
            }
            var o = this.props,
              s = o.children,
              a = o.as,
              c = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  i = {},
                  o = Object.keys(e);
                for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i;
              })(o, p);
            return n.createElement(a || 'div', i({ ref: this.handleNode }, c), s);
          }),
          s
        );
      })(n.Component);
      function g(e) {
        var t = void 0 === e ? {} : e,
          r = t.threshold,
          i = t.delay,
          o = t.trackVisibility,
          s = t.rootMargin,
          a = t.root,
          c = t.triggerOnce,
          l = t.skip,
          u = t.initialInView,
          p = t.fallbackInView,
          d = n.useRef(),
          f = n.useState({ inView: !!u }),
          g = f[0],
          v = f[1],
          b = n.useCallback(
            function (e) {
              void 0 !== d.current && (d.current(), (d.current = void 0)),
                l ||
                  (e &&
                    (d.current = h(
                      e,
                      function (e, t) {
                        v({ inView: e, entry: t }),
                          t.isIntersecting && c && d.current && (d.current(), (d.current = void 0));
                      },
                      { root: a, rootMargin: s, threshold: r, trackVisibility: o, delay: i },
                      p
                    )));
            },
            [Array.isArray(r) ? r.toString() : r, a, s, c, l, o, p, i]
          );
        (0, n.useEffect)(function () {
          d.current || !g.entry || c || l || v({ inView: !!u });
        });
        var y = [b, g.inView, g.entry];
        return (y.ref = y[0]), (y.inView = y[1]), (y.entry = y[2]), y;
      }
      (f.displayName = 'InView'), (f.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 });
    },
  },
]);
