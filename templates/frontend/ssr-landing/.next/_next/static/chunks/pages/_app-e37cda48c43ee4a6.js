(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    7285: function (e, t, n) {
      'use strict';
      var r;
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.AmpStateContext = void 0);
      var o = ((r = n(7294)) && r.__esModule ? r : { default: r }).default.createContext({});
      t.AmpStateContext = o;
    },
    9546: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isInAmpMode = c),
        (t.useAmp = function () {
          return c(o.default.useContext(a.AmpStateContext));
        });
      var r,
        o = (r = n(7294)) && r.__esModule ? r : { default: r },
        a = n(7285);
      function c() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          a = e.hasQuery,
          c = void 0 !== a && a;
        return n || (o && c);
      }
      ('function' === typeof t.default || ('object' === typeof t.default && null !== t.default)) &&
        (Object.assign(t.default, t), (e.exports = t.default));
    },
    6505: function (e, t, n) {
      'use strict';
      var r = n(930);
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.defaultHead = l), (t.default = void 0);
      var a,
        c = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                r.get || r.set ? Object.defineProperty(t, n, r) : (t[n] = e[n]);
              }
          return (t.default = e), t;
        })(n(7294)),
        u = (a = n(148)) && a.__esModule ? a : { default: a },
        i = n(7285),
        f = n(523),
        s = n(9546);
      n(7206);
      function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [c.default.createElement('meta', { charSet: 'utf-8' })];
        return e || t.push(c.default.createElement('meta', { name: 'viewport', content: 'width=device-width' })), t;
      }
      function p(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === c.default.Fragment
          ? e.concat(
              c.default.Children.toArray(t.props.children).reduce(function (e, t) {
                return 'string' === typeof t || 'number' === typeof t ? e : e.concat(t);
              }, [])
            )
          : e.concat(t);
      }
      var d = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function h(e, t) {
        return e
          .reduce(function (e, t) {
            var n = c.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(p, [])
          .reverse()
          .concat(l(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var a = !0,
                  c = !1;
                if (o.key && 'number' !== typeof o.key && o.key.indexOf('$') > 0) {
                  c = !0;
                  var u = o.key.slice(o.key.indexOf('$') + 1);
                  e.has(u) ? (a = !1) : e.add(u);
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case 'meta':
                    for (var i = 0, f = d.length; i < f; i++) {
                      var s = d[i];
                      if (o.props.hasOwnProperty(s))
                        if ('charSet' === s) n.has(s) ? (a = !1) : n.add(s);
                        else {
                          var l = o.props[s],
                            p = r[s] || new Set();
                          ('name' === s && c) || !p.has(l) ? (p.add(l), (r[s] = p)) : (a = !1);
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (e, n) {
            var a = e.key || n;
            if (
              !t.inAmpMode &&
              'link' === e.type &&
              e.props.href &&
              ['https://fonts.googleapis.com/css', 'https://use.typekit.net/'].some(function (t) {
                return e.props.href.startsWith(t);
              })
            ) {
              var u = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? o(Object(n), !0).forEach(function (t) {
                        r(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : o(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
                }
                return e;
              })({}, e.props || {});
              return (
                (u['data-href'] = u.href),
                (u.href = void 0),
                (u['data-optimized-fonts'] = !0),
                c.default.cloneElement(e, u)
              );
            }
            return c.default.cloneElement(e, { key: a });
          });
      }
      var y = function (e) {
        var t = e.children,
          n = c.useContext(i.AmpStateContext),
          r = c.useContext(f.HeadManagerContext);
        return c.default.createElement(
          u.default,
          { reduceComponentsToState: h, headManager: r, inAmpMode: s.isInAmpMode(n) },
          t
        );
      };
      (t.default = y),
        ('function' === typeof t.default || ('object' === typeof t.default && null !== t.default)) &&
          (Object.assign(t.default, t), (e.exports = t.default));
    },
    148: function (e, t, n) {
      'use strict';
      var r = n(7980),
        o = n(3227),
        a = n(8361),
        c = (n(2191), n(5971)),
        u = n(2715),
        i = n(1193);
      function f(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = i(e);
          if (t) {
            var o = i(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return u(this, n);
        };
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var s = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var r =
                Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
              r.get || r.set ? Object.defineProperty(t, n, r) : (t[n] = e[n]);
            }
        return (t.default = e), t;
      })(n(7294));
      var l = (function (e) {
        c(n, e);
        var t = f(n);
        function n(e) {
          var a;
          return (
            o(this, n),
            ((a = t.call(this, e)).emitChange = function () {
              a._hasHeadManager &&
                a.props.headManager.updateHead(
                  a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances), a.props)
                );
            }),
            (a._hasHeadManager = a.props.headManager && a.props.headManager.mountedInstances),
            a
          );
        }
        return (
          a(n, [
            {
              key: 'componentDidMount',
              value: function () {
                this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange();
              },
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                this.emitChange();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange();
              },
            },
            {
              key: 'render',
              value: function () {
                return null;
              },
            },
          ]),
          n
        );
      })(s.Component);
      t.default = l;
    },
    7074: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        });
      var r = n(9499),
        o = n(9008),
        a = n.n(o),
        c = n(1163),
        u = n.n(c),
        i = n(7294),
        f = n(2777),
        s = n(2262),
        l = n(5959),
        p = n(3553),
        d = n(7247);
      function h(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, d.Z)(e);
          if (t) {
            var o = (0, d.Z)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (0, p.Z)(this, n);
        };
      }
      var y = (function (e) {
          (0, l.Z)(n, e);
          var t = h(n);
          function n(e) {
            var r;
            return (0, f.Z)(this, n), ((r = t.call(this, e)).state = {}), r;
          }
          return (
            (0, s.Z)(
              n,
              [
                {
                  key: 'render',
                  value: function () {
                    return (
                      this.state.error && console.log('ErrorBoundary: '.concat(this.state.error)), this.props.children
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { error: e };
                  },
                },
              ]
            ),
            n
          );
        })(i.Component),
        v = n(5893);
      function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var O = function (e) {
        var t = e.Component,
          n = e.pageProps;
        return (
          (0, i.useEffect)(function () {
            var e = function () {
              if (location.hash) {
                var e = document.querySelector('#scroll-'.concat(location.hash.slice(1)));
                if (e) {
                  var t = e.getBoundingClientRect();
                  window.scrollTo({ top: window.scrollY + t.top - 120, behavior: 'smooth' });
                }
              }
            };
            return (
              u().events.on('hashChangeComplete', e),
              u().events.on('routeChangeComplete', e),
              function () {
                u().events.off('hashChangeComplete', e), u().events.off('routeChangeComplete', e);
              }
            );
          }, []),
          (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsxs)(a(), {
                children: [
                  (0, v.jsx)('meta', { name: 'msapplication-TileColor', content: '#ffffff' }),
                  (0, v.jsx)('meta', { name: 'msapplication-TileImage', content: 'favicon/ms-icon-144x144.png' }),
                  (0, v.jsx)('meta', { name: 'theme-color', content: '#ffffff' }),
                  (0, v.jsx)('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
                  (0, v.jsx)('meta', { name: 'theme-color', content: '#F4514D' }),
                ],
              }),
              (0, v.jsx)(y, { children: (0, v.jsx)(t, b({}, n)) }),
            ],
          })
        );
      };
    },
    6840: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n(7074);
        },
      ]);
    },
    9008: function (e, t, n) {
      e.exports = n(6505);
    },
    1163: function (e, t, n) {
      e.exports = n(1587);
    },
    748: function (e, t, n) {
      'use strict';
      function r(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    2777: function (e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    2262: function (e, t, n) {
      'use strict';
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function o(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    9499: function (e, t, n) {
      'use strict';
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    7247: function (e, t, n) {
      'use strict';
      function r(e) {
        return (
          (r = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          r(e)
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    5959: function (e, t, n) {
      'use strict';
      function r(e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          r(e, t)
        );
      }
      function o(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          t && r(e, t);
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    3553: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(4027),
        o = n(748);
      function a(e, t) {
        if (t && ('object' === r(t) || 'function' === typeof t)) return t;
        if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined');
        return (0, o.Z)(e);
      }
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6840), t(1587);
    });
    var n = e.O();
    _N_E = n;
  },
]);
