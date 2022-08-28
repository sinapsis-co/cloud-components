_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [11],
  {
    0: function (t, n, e) {
      e('74v/'), (t.exports = e('nOHt'));
    },
    '1OyB': function (t, n, e) {
      'use strict';
      function o(t, n) {
        if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
      }
      e.d(n, 'a', function () {
        return o;
      });
    },
    '20a2': function (t, n, e) {
      t.exports = e('nOHt');
    },
    '74v/': function (t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return e('hUgY');
        },
      ]);
    },
    JX7q: function (t, n, e) {
      'use strict';
      function o(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      e.d(n, 'a', function () {
        return o;
      });
    },
    Ji7U: function (t, n, e) {
      'use strict';
      e.d(n, 'a', function () {
        return r;
      });
      var o = e('s4An');
      function r(t, n) {
        if ('function' !== typeof n && null !== n)
          throw new TypeError('Super expression must either be null or a function');
        (t.prototype = Object.create(n && n.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })),
          n && Object(o.a)(t, n);
      }
    },
    foSv: function (t, n, e) {
      'use strict';
      function o(t) {
        return (o = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      e.d(n, 'a', function () {
        return o;
      });
    },
    g4pe: function (t, n, e) {
      t.exports = e('8Kt/');
    },
    hUgY: function (t, n, e) {
      'use strict';
      e.r(n);
      var o = e('q1tI'),
        r = e.n(o),
        c = e('g4pe'),
        u = e.n(c),
        i = e('20a2'),
        a = e.n(i),
        f = e('1OyB'),
        s = e('vuIU'),
        l = e('Ji7U'),
        p = e('md7G'),
        h = e('foSv');
      function m(t) {
        var n = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            o = Object(h.a)(t);
          if (n) {
            var r = Object(h.a)(this).constructor;
            e = Reflect.construct(o, arguments, r);
          } else e = o.apply(this, arguments);
          return Object(p.a)(this, e);
        };
      }
      var y = (function (t) {
          Object(l.a)(e, t);
          var n = m(e);
          function e(t) {
            var o;
            return Object(f.a)(this, e), ((o = n.call(this, t)).state = {}), o;
          }
          return (
            Object(s.a)(
              e,
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
                  value: function (t) {
                    return { error: t };
                  },
                },
              ]
            ),
            e
          );
        })(r.a.Component),
        b = r.a.createElement;
      n.default = function (t) {
        var n = t.Component,
          e = t.pageProps;
        return (
          Object(o.useEffect)(function () {
            var t = function () {
              if (location.hash) {
                var t = document.querySelector('#scroll-'.concat(location.hash.slice(1)));
                if (t) {
                  var n = t.getBoundingClientRect();
                  window.scrollTo({ top: window.scrollY + n.top - 120, behavior: 'smooth' });
                }
              }
            };
            return (
              a.a.events.on('hashChangeComplete', t),
              a.a.events.on('routeChangeComplete', t),
              function () {
                a.a.events.off('hashChangeComplete', t), a.a.events.off('routeChangeComplete', t);
              }
            );
          }, []),
          b(
            r.a.Fragment,
            null,
            b(
              u.a,
              null,
              b('meta', { name: 'msapplication-TileColor', content: '#ffffff' }),
              b('meta', { name: 'msapplication-TileImage', content: 'favicon/ms-icon-144x144.png' }),
              b('meta', { name: 'theme-color', content: '#ffffff' }),
              b('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
              b('meta', { name: 'theme-color', content: '#F4514D' })
            ),
            b(y, null, b(n, e))
          )
        );
      };
    },
    md7G: function (t, n, e) {
      'use strict';
      function o(t) {
        return (o =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t && 'function' === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      e.d(n, 'a', function () {
        return c;
      });
      var r = e('JX7q');
      function c(t, n) {
        return !n || ('object' !== o(n) && 'function' !== typeof n) ? Object(r.a)(t) : n;
      }
    },
    s4An: function (t, n, e) {
      'use strict';
      function o(t, n) {
        return (o =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      e.d(n, 'a', function () {
        return o;
      });
    },
    vuIU: function (t, n, e) {
      'use strict';
      function o(t, n) {
        for (var e = 0; e < n.length; e++) {
          var o = n[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function r(t, n, e) {
        return n && o(t.prototype, n), e && o(t, e), t;
      }
      e.d(n, 'a', function () {
        return r;
      });
    },
  },
  [[0, 0, 2, 1]],
]);
