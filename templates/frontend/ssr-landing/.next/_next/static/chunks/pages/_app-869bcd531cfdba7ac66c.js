_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [14],
  {
    '/0+H': function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(o.default.useContext(a.AmpStateContext));
        });
      var r,
        o = (r = n('q1tI')) && r.__esModule ? r : { default: r },
        a = n('lwAK');
      function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          a = e.hasQuery,
          i = void 0 !== a && a;
        return n || (o && i);
      }
    },
    0: function (e, t, n) {
      n('74v/'), (e.exports = n('nOHt'));
    },
    '20a2': function (e, t, n) {
      e.exports = n('nOHt');
    },
    '74v/': function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n('hUgY');
        },
      ]);
    },
    '7W2i': function (e, t, n) {
      var r = n('SksO');
      e.exports = function (e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          t && r(e, t);
      };
    },
    '8Kt/': function (e, t, n) {
      'use strict';
      n('lSNA');
      (t.__esModule = !0), (t.defaultHead = f), (t.default = void 0);
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== typeof e && 'function' !== typeof e)) return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set) ? Object.defineProperty(n, o, a) : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n('q1tI')),
        a = (r = n('Xuae')) && r.__esModule ? r : { default: r },
        i = n('lwAK'),
        u = n('FYa8'),
        c = n('/0+H');
      function s() {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement('meta', { charSet: 'utf-8' })];
        return e || t.push(o.default.createElement('meta', { name: 'viewport', content: 'width=device-width' })), t;
      }
      function l(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(function (e, t) {
                return 'string' === typeof t || 'number' === typeof t ? e : e.concat(t);
              }, [])
            )
          : e.concat(t);
      }
      var p = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function d(e, t) {
        return e
          .reduce(function (e, t) {
            var n = o.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(l, [])
          .reverse()
          .concat(f(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var a = !0,
                  i = !1;
                if (o.key && 'number' !== typeof o.key && o.key.indexOf('$') > 0) {
                  i = !0;
                  var u = o.key.slice(o.key.indexOf('$') + 1);
                  e.has(u) ? (a = !1) : e.add(u);
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case 'meta':
                    for (var c = 0, s = p.length; c < s; c++) {
                      var f = p[c];
                      if (o.props.hasOwnProperty(f))
                        if ('charSet' === f) n.has(f) ? (a = !1) : n.add(f);
                        else {
                          var l = o.props[f],
                            d = r[f] || new Set();
                          ('name' === f && i) || !d.has(l) ? (d.add(l), (r[f] = d)) : (a = !1);
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return o.default.cloneElement(e, { key: n });
          });
      }
      function h(e) {
        var t = e.children,
          n = (0, o.useContext)(i.AmpStateContext),
          r = (0, o.useContext)(u.HeadManagerContext);
        return o.default.createElement(
          a.default,
          { reduceComponentsToState: d, headManager: r, inAmpMode: (0, c.isInAmpMode)(n) },
          t
        );
      }
      h.rewind = function () {};
      var m = h;
      t.default = m;
    },
    '8oxB': function (e, t) {
      var n,
        r,
        o = (e.exports = {});
      function a() {
        throw new Error('setTimeout has not been defined');
      }
      function i() {
        throw new Error('clearTimeout has not been defined');
      }
      function u(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === a || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          n = 'function' === typeof setTimeout ? setTimeout : a;
        } catch (e) {
          n = a;
        }
        try {
          r = 'function' === typeof clearTimeout ? clearTimeout : i;
        } catch (e) {
          r = i;
        }
      })();
      var c,
        s = [],
        f = !1,
        l = -1;
      function p() {
        f && c && ((f = !1), c.length ? (s = c.concat(s)) : (l = -1), s.length && d());
      }
      function d() {
        if (!f) {
          var e = u(p);
          f = !0;
          for (var t = s.length; t; ) {
            for (c = s, s = []; ++l < t; ) c && c[l].run();
            (l = -1), (t = s.length);
          }
          (c = null),
            (f = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === i || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function h(e, t) {
        (this.fun = e), (this.array = t);
      }
      function m() {}
      (o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        s.push(new h(e, t)), 1 !== s.length || f || u(d);
      }),
        (h.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = 'browser'),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ''),
        (o.versions = {}),
        (o.on = m),
        (o.addListener = m),
        (o.once = m),
        (o.off = m),
        (o.removeListener = m),
        (o.removeAllListeners = m),
        (o.emit = m),
        (o.prependListener = m),
        (o.prependOnceListener = m),
        (o.listeners = function (e) {
          return [];
        }),
        (o.binding = function (e) {
          throw new Error('process.binding is not supported');
        }),
        (o.cwd = function () {
          return '/';
        }),
        (o.chdir = function (e) {
          throw new Error('process.chdir is not supported');
        }),
        (o.umask = function () {
          return 0;
        });
    },
    Bnag: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      };
    },
    EbDI: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      };
    },
    FYa8: function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var o = ((r = n('q1tI')) && r.__esModule ? r : { default: r }).default.createContext({});
      t.HeadManagerContext = o;
    },
    Ijbi: function (e, t, n) {
      var r = n('WkPL');
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    Nsbk: function (e, t) {
      function n(t) {
        return (
          (e.exports = n =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          n(t)
        );
      }
      e.exports = n;
    },
    PJYZ: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      };
    },
    RIqP: function (e, t, n) {
      var r = n('Ijbi'),
        o = n('EbDI'),
        a = n('ZhPi'),
        i = n('Bnag');
      e.exports = function (e) {
        return r(e) || o(e) || a(e) || i();
      };
    },
    Xuae: function (e, t, n) {
      'use strict';
      var r = n('RIqP'),
        o = n('lwsE'),
        a = n('W8MJ'),
        i = (n('PJYZ'), n('7W2i')),
        u = n('a1gu'),
        c = n('Nsbk');
      function s(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = c(e);
          if (t) {
            var o = c(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return u(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var f = n('q1tI'),
        l = (function (e) {
          i(n, e);
          var t = s(n);
          function n(e) {
            var a;
            return (
              o(this, n),
              ((a = t.call(this, e))._hasHeadManager = void 0),
              (a.emitChange = function () {
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
        })(f.Component);
      t.default = l;
    },
    a1gu: function (e, t, n) {
      var r = n('cDf5'),
        o = n('PJYZ');
      e.exports = function (e, t) {
        return !t || ('object' !== r(t) && 'function' !== typeof t) ? o(e) : t;
      };
    },
    g4pe: function (e, t, n) {
      e.exports = n('8Kt/');
    },
    hUgY: function (e, t, n) {
      'use strict';
      n.r(t),
        function (e) {
          var r = n('q1tI'),
            o = n.n(r),
            a = n('g4pe'),
            i = n.n(a),
            u = n('20a2'),
            c = n.n(u),
            s = n('eWwy'),
            f = n('v4r+'),
            l = o.a.createElement;
          t.default = function (t) {
            var n = t.Component,
              a = t.pageProps;
            Object(r.useEffect)(function () {
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
                c.a.events.on('hashChangeComplete', e),
                c.a.events.on('routeChangeComplete', e),
                function () {
                  c.a.events.off('hashChangeComplete', e), c.a.events.off('routeChangeComplete', e);
                }
              );
            }, []);
            var u = Object(f.a)(e.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
            return l(
              o.a.Fragment,
              null,
              l(
                i.a,
                null,
                l('meta', { name: 'msapplication-TileColor', content: '#ffffff' }),
                l('meta', { name: 'msapplication-TileImage', content: 'favicon/ms-icon-144x144.png' }),
                l('meta', { name: 'theme-color', content: '#ffffff' }),
                l('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
                l('meta', { name: 'theme-color', content: '#F4514D' })
              ),
              l(
                s.Elements,
                {
                  stripe: u,
                  options: {
                    fonts: [{ cssSrc: 'https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap' }],
                  },
                },
                l(n, a)
              )
            );
          };
        }.call(this, n('8oxB'));
    },
    lSNA: function (e, t) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      };
    },
    lwAK: function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var o = ((r = n('q1tI')) && r.__esModule ? r : { default: r }).default.createContext({});
      t.AmpStateContext = o;
    },
    'v4r+': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return l;
      });
      var r = 'https://js.stripe.com/v3',
        o = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        a =
          'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
        i = null,
        u = function (e) {
          return null !== i
            ? i
            : (i = new Promise(function (t, n) {
                if ('undefined' !== typeof window)
                  if ((window.Stripe && e && console.warn(a), window.Stripe)) t(window.Stripe);
                  else
                    try {
                      var i = (function () {
                        for (
                          var e = document.querySelectorAll('script[src^="'.concat(r, '"]')), t = 0;
                          t < e.length;
                          t++
                        ) {
                          var n = e[t];
                          if (o.test(n.src)) return n;
                        }
                        return null;
                      })();
                      i && e
                        ? console.warn(a)
                        : i ||
                          (i = (function (e) {
                            var t = e && !e.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
                              n = document.createElement('script');
                            n.src = ''.concat(r).concat(t);
                            var o = document.head || document.body;
                            if (!o)
                              throw new Error(
                                'Expected document.body not to be null. Stripe.js requires a <body> element.'
                              );
                            return o.appendChild(n), n;
                          })(e)),
                        i.addEventListener('load', function () {
                          window.Stripe ? t(window.Stripe) : n(new Error('Stripe.js not available'));
                        }),
                        i.addEventListener('error', function () {
                          n(new Error('Failed to load Stripe.js'));
                        });
                    } catch (u) {
                      return void n(u);
                    }
                else t(null);
              }));
        },
        c = function (e, t, n) {
          if (null === e) return null;
          var r = e.apply(void 0, t);
          return (
            (function (e, t) {
              e && e._registerWrapper && e._registerWrapper({ name: 'stripe-js', version: '1.13.2', startTime: t });
            })(r, n),
            r
          );
        },
        s = Promise.resolve().then(function () {
          return u(null);
        }),
        f = !1;
      s.catch(function (e) {
        f || console.warn(e);
      });
      var l = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        f = !0;
        var r = Date.now();
        return s.then(function (e) {
          return c(e, t, r);
        });
      };
    },
  },
  [[0, 0, 2, 1, 8]],
]);
