_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [14],
  {
    '0sNQ': function (e, t) {
      'trimStart' in String.prototype || (String.prototype.trimStart = String.prototype.trimLeft),
        'trimEnd' in String.prototype || (String.prototype.trimEnd = String.prototype.trimRight),
        'description' in Symbol.prototype ||
          Object.defineProperty(Symbol.prototype, 'description', {
            configurable: !0,
            get: function () {
              var e = /\((.*)\)/.exec(this.toString());
              return e ? e[1] : void 0;
            },
          }),
        Array.prototype.flat ||
          ((Array.prototype.flat = function (e, t) {
            return (t = this.concat.apply([], this)), e > 1 && t.some(Array.isArray) ? t.flat(e - 1) : t;
          }),
          (Array.prototype.flatMap = function (e, t) {
            return this.map(e, t).flat();
          })),
        Promise.prototype.finally ||
          (Promise.prototype.finally = function (e) {
            if ('function' != typeof e) return this.then(e, e);
            var t = this.constructor || Promise;
            return this.then(
              function (r) {
                return t.resolve(e()).then(function () {
                  return r;
                });
              },
              function (r) {
                return t.resolve(e()).then(function () {
                  throw r;
                });
              }
            );
          });
    },
    '7W2i': function (e, t, r) {
      var n = r('SksO');
      e.exports = function (e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          t && n(e, t);
      };
    },
    BMP1: function (e, t, r) {
      'use strict';
      var n = r('284h')(r('IKlv'));
      (window.next = n), (0, n.default)().catch(console.error);
    },
    DqTX: function (e, t, r) {
      'use strict';
      (t.__esModule = !0),
        (t.default = function () {
          var e = null;
          return {
            mountedInstances: new Set(),
            updateHead: function (t) {
              var r = (e = Promise.resolve().then(function () {
                if (r === e) {
                  e = null;
                  var n = {};
                  t.forEach(function (e) {
                    var t = n[e.type] || [];
                    t.push(e), (n[e.type] = t);
                  });
                  var a = n.title ? n.title[0] : null,
                    i = '';
                  if (a) {
                    var u = a.props.children;
                    i = 'string' === typeof u ? u : Array.isArray(u) ? u.join('') : '';
                  }
                  i !== document.title && (document.title = i),
                    ['meta', 'base', 'link', 'style', 'script'].forEach(function (e) {
                      !(function (e, t) {
                        var r = document.getElementsByTagName('head')[0],
                          n = r.querySelector('meta[name=next-head-count]');
                        0;
                        for (
                          var a = Number(n.content), i = [], u = 0, c = n.previousElementSibling;
                          u < a;
                          u++, c = c.previousElementSibling
                        )
                          c.tagName.toLowerCase() === e && i.push(c);
                        var s = t.map(o).filter(function (e) {
                          for (var t = 0, r = i.length; t < r; t++) {
                            if (i[t].isEqualNode(e)) return i.splice(t, 1), !1;
                          }
                          return !0;
                        });
                        i.forEach(function (e) {
                          return e.parentNode.removeChild(e);
                        }),
                          s.forEach(function (e) {
                            return r.insertBefore(e, n);
                          }),
                          (n.content = (a - i.length + s.length).toString());
                      })(e, n[e] || []);
                    });
                }
              }));
            },
          };
        }),
        (t.DOMAttributeNames = void 0);
      var n = {
        acceptCharset: 'accept-charset',
        className: 'class',
        htmlFor: 'for',
        httpEquiv: 'http-equiv',
        noModule: 'noModule',
      };
      function o(e) {
        var t = e.type,
          r = e.props,
          o = document.createElement(t);
        for (var a in r)
          if (r.hasOwnProperty(a) && 'children' !== a && 'dangerouslySetInnerHTML' !== a && void 0 !== r[a]) {
            var i = n[a] || a.toLowerCase();
            'script' !== t || ('async' !== i && 'defer' !== i && 'noModule' !== i)
              ? o.setAttribute(i, r[a])
              : (o[i] = !!r[a]);
          }
        var u = r.children,
          c = r.dangerouslySetInnerHTML;
        return (
          c
            ? (o.innerHTML = c.__html || '')
            : u && (o.textContent = 'string' === typeof u ? u : Array.isArray(u) ? u.join('') : ''),
          o
        );
      }
      t.DOMAttributeNames = n;
    },
    FYa8: function (e, t, r) {
      'use strict';
      var n;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var o = ((n = r('q1tI')) && n.__esModule ? n : { default: n }).default.createContext({});
      t.HeadManagerContext = o;
    },
    IKlv: function (e, t, r) {
      'use strict';
      var n = r('o0o1'),
        o = r('yXPU'),
        a = r('lwsE'),
        i = r('W8MJ'),
        u = r('7W2i'),
        c = r('a1gu'),
        s = r('Nsbk'),
        l = r('J4zp');
      function f(e) {
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
          var r,
            n = s(e);
          if (t) {
            var o = s(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return c(this, r);
        };
      }
      var p = r('284h'),
        d = r('TqRt');
      (t.__esModule = !0),
        (t.render = ae),
        (t.renderError = ue),
        (t.default = t.emitter = t.router = t.version = void 0);
      var m = d(r('pVnL'));
      d(r('284h'));
      r('0sNQ');
      var h = d(r('q1tI')),
        v = d(r('i8i4')),
        y = r('FYa8'),
        g = d(r('dZ6Y')),
        b = r('qOIg'),
        S = r('elyg'),
        w = r('/jkW'),
        _ = p(r('3WeD')),
        E = p(r('yLiY')),
        x = r('g/15'),
        T = d(r('DqTX')),
        P = d(r('zmvN')),
        N = d(r('bGXG')),
        k = r('nOHt'),
        A = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
      window.__NEXT_DATA__ = A;
      t.version = '10.0.5';
      var C = function (e) {
          return [].slice.call(e);
        },
        M = A.props,
        L = A.err,
        R = A.page,
        F = A.query,
        I = A.buildId,
        D = A.assetPrefix,
        O = A.runtimeConfig,
        j = A.dynamicIds,
        B = A.isFallback,
        q = A.locales,
        H = A.domainLocales,
        X = A.locale,
        G = A.defaultLocale,
        W = D || '';
      (r.p = ''.concat(W, '/_next/')), E.setConfig({ serverRuntimeConfig: {}, publicRuntimeConfig: O || {} });
      var J = (0, x.getURL)();
      (0, S.hasBasePath)(J) && (J = (0, S.delBasePath)(J));
      var U = new P.default(I, W),
        Y = function (e) {
          var t = l(e, 2),
            r = t[0],
            n = t[1];
          return U.routeLoader.onEntrypoint(r, n);
        };
      window.__NEXT_P &&
        window.__NEXT_P.map(function (e) {
          return setTimeout(function () {
            return Y(e);
          }, 0);
        }),
        (window.__NEXT_P = []),
        (window.__NEXT_P.push = Y);
      var V,
        z,
        Q,
        Z,
        K,
        $,
        ee = (0, T.default)(),
        te = document.getElementById('__next');
      t.router = Q;
      var re = (function (e) {
          u(r, e);
          var t = f(r);
          function r() {
            return a(this, r), t.apply(this, arguments);
          }
          return (
            i(r, [
              {
                key: 'componentDidCatch',
                value: function (e, t) {
                  this.props.fn(e, t);
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this.scrollToHash(),
                    Q.isSsr &&
                      (B ||
                        (A.nextExport && ((0, w.isDynamicRoute)(Q.pathname) || location.search)) ||
                        (M && M.__N_SSG && location.search)) &&
                      Q.replace(
                        Q.pathname +
                          '?' +
                          String(_.assign(_.urlQueryToSearchParams(Q.query), new URLSearchParams(location.search))),
                        J,
                        { _h: 1, shallow: !B }
                      );
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.scrollToHash();
                },
              },
              {
                key: 'scrollToHash',
                value: function () {
                  var e = location.hash;
                  if ((e = e && e.substring(1))) {
                    var t = document.getElementById(e);
                    t &&
                      setTimeout(function () {
                        return t.scrollIntoView();
                      }, 0);
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            r
          );
        })(h.default.Component),
        ne = (0, g.default)();
      t.emitter = ne;
      var oe = (function () {
        var e = o(
          n.mark(function e() {
            var r,
              o,
              a,
              i,
              u,
              c,
              s = arguments;
            return n.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        s.length > 0 && void 0 !== s[0] ? s[0] : {}, (e.next = 4), U.routeLoader.whenEntrypoint('/_app')
                      );
                    case 4:
                      if (!('error' in (r = e.sent))) {
                        e.next = 7;
                        break;
                      }
                      throw r.error;
                    case 7:
                      (o = r.component),
                        (a = r.exports),
                        (K = o),
                        a &&
                          a.reportWebVitals &&
                          ($ = function (e) {
                            var t,
                              r = e.id,
                              n = e.name,
                              o = e.startTime,
                              i = e.value,
                              u = e.duration,
                              c = e.entryType,
                              s = e.entries,
                              l = ''.concat(Date.now(), '-').concat(Math.floor(8999999999999 * Math.random()) + 1e12);
                            s && s.length && (t = s[0].startTime),
                              a.reportWebVitals({
                                id: r || l,
                                name: n,
                                startTime: o || t,
                                value: null == i ? u : i,
                                label: 'mark' === c || 'measure' === c ? 'custom' : 'web-vital',
                              });
                          }),
                        (i = L),
                        (e.prev = 11),
                        (e.next = 16);
                      break;
                    case 16:
                      return (e.next = 18), U.routeLoader.whenEntrypoint(R);
                    case 18:
                      e.t0 = e.sent;
                    case 19:
                      if (!('error' in (u = e.t0))) {
                        e.next = 22;
                        break;
                      }
                      throw u.error;
                    case 22:
                      (Z = u.component), (e.next = 27);
                      break;
                    case 27:
                      e.next = 32;
                      break;
                    case 29:
                      (e.prev = 29), (e.t1 = e.catch(11)), (i = e.t1);
                    case 32:
                      if (!window.__NEXT_PRELOADREADY) {
                        e.next = 36;
                        break;
                      }
                      return (e.next = 36), window.__NEXT_PRELOADREADY(j);
                    case 36:
                      return (
                        (t.router = Q =
                          (0, k.createRouter)(R, F, J, {
                            initialProps: M,
                            pageLoader: U,
                            App: K,
                            Component: Z,
                            wrapApp: de,
                            err: i,
                            isFallback: Boolean(B),
                            subscription: function (e, t, r) {
                              return ae(Object.assign({}, e, { App: t, scroll: r }));
                            },
                            locale: X,
                            locales: q,
                            defaultLocale: G,
                            domainLocales: H,
                          })),
                        ae((c = { App: K, initial: !0, Component: Z, props: M, err: i })),
                        e.abrupt('return', ne)
                      );
                    case 44:
                      return e.abrupt('return', { emitter: ne, render: ae, renderCtx: c });
                    case 45:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[11, 29]]
            );
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
      function ae(e) {
        return ie.apply(this, arguments);
      }
      function ie() {
        return (ie = o(
          n.mark(function e(t) {
            return n.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!t.err) {
                        e.next = 4;
                        break;
                      }
                      return (e.next = 3), ue(t);
                    case 3:
                      return e.abrupt('return');
                    case 4:
                      return (e.prev = 4), (e.next = 7), me(t);
                    case 7:
                      e.next = 16;
                      break;
                    case 9:
                      if (((e.prev = 9), (e.t0 = e.catch(4)), !e.t0.cancelled)) {
                        e.next = 13;
                        break;
                      }
                      throw e.t0;
                    case 13:
                      return (e.next = 16), ue((0, m.default)({}, t, { err: e.t0 }));
                    case 16:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[4, 9]]
            );
          })
        )).apply(this, arguments);
      }
      function ue(e) {
        var t = e.App,
          r = e.err;
        return (
          console.error(r),
          U.loadPage('/_error').then(function (n) {
            var o = n.page,
              a = n.styleSheets,
              i = de(t),
              u = {
                Component: o,
                AppTree: i,
                router: Q,
                ctx: { err: r, pathname: R, query: F, asPath: J, AppTree: i },
              };
            return Promise.resolve(e.props ? e.props : (0, x.loadGetInitialProps)(t, u)).then(function (t) {
              return me((0, m.default)({}, e, { err: r, Component: o, styleSheets: a, props: t }));
            });
          })
        );
      }
      t.default = oe;
      var ce = 'function' === typeof v.default.hydrate;
      function se() {
        x.ST &&
          (performance.mark('afterHydrate'),
          performance.measure('Next.js-before-hydration', 'navigationStart', 'beforeRender'),
          performance.measure('Next.js-hydration', 'beforeRender', 'afterHydrate'),
          $ && performance.getEntriesByName('Next.js-hydration').forEach($),
          fe());
      }
      function le() {
        if (x.ST) {
          performance.mark('afterRender');
          var e = performance.getEntriesByName('routeChange', 'mark');
          e.length &&
            (performance.measure('Next.js-route-change-to-render', e[0].name, 'beforeRender'),
            performance.measure('Next.js-render', 'beforeRender', 'afterRender'),
            $ &&
              (performance.getEntriesByName('Next.js-render').forEach($),
              performance.getEntriesByName('Next.js-route-change-to-render').forEach($)),
            fe(),
            ['Next.js-route-change-to-render', 'Next.js-render'].forEach(function (e) {
              return performance.clearMeasures(e);
            }));
        }
      }
      function fe() {
        ['beforeRender', 'afterHydrate', 'afterRender', 'routeChange'].forEach(function (e) {
          return performance.clearMarks(e);
        });
      }
      function pe(e) {
        var t = e.children;
        return h.default.createElement(
          re,
          {
            fn: function (e) {
              return ue({ App: K, err: e }).catch(function (e) {
                return console.error('Error rendering page: ', e);
              });
            },
          },
          h.default.createElement(
            b.RouterContext.Provider,
            { value: (0, k.makePublicRouterInstance)(Q) },
            h.default.createElement(y.HeadManagerContext.Provider, { value: ee }, t)
          )
        );
      }
      var de = function (e) {
        return function (t) {
          var r = (0, m.default)({}, t, { Component: Z, err: L, router: Q });
          return h.default.createElement(pe, null, h.default.createElement(e, r));
        };
      };
      function me(e) {
        var t = e.App,
          r = e.Component,
          n = e.props,
          o = e.err,
          a = 'initial' in e ? void 0 : e.styleSheets;
        (r = r || V.Component), (n = n || V.props);
        var i = (0, m.default)({}, n, { Component: r, err: o, router: Q });
        V = i;
        var u,
          c = !1,
          s = new Promise(function (e, t) {
            z && z(),
              (u = function () {
                (z = null), e();
              }),
              (z = function () {
                (c = !0), (z = null);
                var e = new Error('Cancel rendering route');
                (e.cancelled = !0), t(e);
              });
          });
        var l,
          f,
          p = h.default.createElement(
            he,
            {
              callback: function () {
                u();
              },
            },
            h.default.createElement(ve, {
              callback: function () {
                if (a && !c) {
                  for (
                    var t = new Set(
                        a.map(function (e) {
                          return e.href;
                        })
                      ),
                      r = C(document.querySelectorAll('style[data-n-href]')),
                      n = r.map(function (e) {
                        return e.getAttribute('data-n-href');
                      }),
                      o = 0;
                    o < n.length;
                    ++o
                  )
                    t.has(n[o]) ? r[o].removeAttribute('media') : r[o].setAttribute('media', 'x');
                  var i = document.querySelector('noscript[data-n-css]');
                  i &&
                    a.forEach(function (e) {
                      var t = e.href,
                        r = document.querySelector('style[data-n-href="'.concat(t, '"]'));
                      r && (i.parentNode.insertBefore(r, i.nextSibling), (i = r));
                    }),
                    C(document.querySelectorAll('link[data-n-p]')).forEach(function (e) {
                      e.parentNode.removeChild(e);
                    }),
                    getComputedStyle(document.body, 'height');
                }
                e.scroll && window.scrollTo(e.scroll.x, e.scroll.y);
              },
            }),
            h.default.createElement(pe, null, h.default.createElement(t, i))
          );
        return (
          (function () {
            if (!a) return !1;
            var e = C(document.querySelectorAll('style[data-n-href]')),
              t = new Set(
                e.map(function (e) {
                  return e.getAttribute('data-n-href');
                })
              ),
              r = document.querySelector('noscript[data-n-css]'),
              n = null == r ? void 0 : r.getAttribute('data-n-css');
            a.forEach(function (e) {
              var r = e.href,
                o = e.text;
              if (!t.has(r)) {
                var a = document.createElement('style');
                a.setAttribute('data-n-href', r),
                  a.setAttribute('media', 'x'),
                  n && a.setAttribute('nonce', n),
                  document.head.appendChild(a),
                  a.appendChild(document.createTextNode(o));
              }
            });
          })(),
          (l = p),
          (f = te),
          x.ST && performance.mark('beforeRender'),
          ce ? (v.default.hydrate(l, f, se), (ce = !1)) : v.default.render(l, f, le),
          s
        );
      }
      function he(e) {
        var t = e.callback,
          r = e.children;
        return (
          h.default.useLayoutEffect(
            function () {
              return t();
            },
            [t]
          ),
          h.default.useEffect(function () {
            (0, N.default)($);
          }, []),
          r
        );
      }
      function ve(e) {
        var t = e.callback;
        return (
          h.default.useLayoutEffect(
            function () {
              return t();
            },
            [t]
          ),
          null
        );
      }
    },
    Nsbk: function (e, t) {
      function r(t) {
        return (
          (e.exports = r =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          r(t)
        );
      }
      e.exports = r;
    },
    PJYZ: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      };
    },
    a1gu: function (e, t, r) {
      var n = r('cDf5'),
        o = r('PJYZ');
      e.exports = function (e, t) {
        return !t || ('object' !== n(t) && 'function' !== typeof t) ? o(e) : t;
      };
    },
    bGXG: function (e, t, r) {
      'use strict';
      (t.__esModule = !0), (t.default = void 0);
      var n,
        o = r('p0hA'),
        a = (location.href, !1);
      function i(e) {
        n && n(e);
      }
      t.default = function (e) {
        (n = e),
          a || ((a = !0), (0, o.getCLS)(i), (0, o.getFID)(i), (0, o.getFCP)(i), (0, o.getLCP)(i), (0, o.getTTFB)(i));
      };
    },
    p0hA: function (e, t, r) {
      (function (t) {
        e.exports = (function () {
          var e = {
              599: function (e, t) {
                !(function (e) {
                  'use strict';
                  var t,
                    r,
                    n = function () {
                      return ''.concat(Date.now(), '-').concat(Math.floor(8999999999999 * Math.random()) + 1e12);
                    },
                    o = function (e) {
                      return {
                        name: e,
                        value: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                        delta: 0,
                        entries: [],
                        id: n(),
                        isFinal: !1,
                      };
                    },
                    a = function (e, t) {
                      try {
                        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                          var r = new PerformanceObserver(function (e) {
                            return e.getEntries().map(t);
                          });
                          return r.observe({ type: e, buffered: !0 }), r;
                        }
                      } catch (e) {}
                    },
                    i = !1,
                    u = !1,
                    c = function (e) {
                      i = !e.persisted;
                    },
                    s = function () {
                      addEventListener('pagehide', c), addEventListener('beforeunload', function () {});
                    },
                    l = function (e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                      u || (s(), (u = !0)),
                        addEventListener(
                          'visibilitychange',
                          function (t) {
                            var r = t.timeStamp;
                            'hidden' === document.visibilityState && e({ timeStamp: r, isUnloading: i });
                          },
                          { capture: !0, once: t }
                        );
                    },
                    f = function (e, t, r, n) {
                      var o;
                      return function () {
                        r && t.isFinal && r.disconnect(),
                          t.value >= 0 &&
                            (n || t.isFinal || 'hidden' === document.visibilityState) &&
                            ((t.delta = t.value - (o || 0)),
                            (t.delta || t.isFinal || void 0 === o) && (e(t), (o = t.value)));
                      };
                    },
                    p = function () {
                      return (
                        void 0 === t &&
                          ((t = 'hidden' === document.visibilityState ? 0 : 1 / 0),
                          l(function (e) {
                            var r = e.timeStamp;
                            return (t = r);
                          }, !0)),
                        {
                          get timeStamp() {
                            return t;
                          },
                        }
                      );
                    },
                    d = function () {
                      return (
                        r ||
                          (r = new Promise(function (e) {
                            return ['scroll', 'keydown', 'pointerdown'].map(function (t) {
                              addEventListener(t, e, { once: !0, passive: !0, capture: !0 });
                            });
                          })),
                        r
                      );
                    };
                  (e.getCLS = function (e) {
                    var t,
                      r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                      n = o('CLS', 0),
                      i = function (e) {
                        e.hadRecentInput || ((n.value += e.value), n.entries.push(e), t());
                      },
                      u = a('layout-shift', i);
                    u &&
                      ((t = f(e, n, u, r)),
                      l(function (e) {
                        var r = e.isUnloading;
                        u.takeRecords().map(i), r && (n.isFinal = !0), t();
                      }));
                  }),
                    (e.getFCP = function (e) {
                      var t,
                        r = o('FCP'),
                        n = p(),
                        i = a('paint', function (e) {
                          'first-contentful-paint' === e.name &&
                            e.startTime < n.timeStamp &&
                            ((r.value = e.startTime), (r.isFinal = !0), r.entries.push(e), t());
                        });
                      i && (t = f(e, r, i));
                    }),
                    (e.getFID = function (e) {
                      var t = o('FID'),
                        r = p(),
                        n = function (e) {
                          e.startTime < r.timeStamp &&
                            ((t.value = e.processingStart - e.startTime), t.entries.push(e), (t.isFinal = !0), u());
                        },
                        i = a('first-input', n),
                        u = f(e, t, i);
                      i
                        ? l(function () {
                            i.takeRecords().map(n), i.disconnect();
                          }, !0)
                        : window.perfMetrics &&
                          window.perfMetrics.onFirstInputDelay &&
                          window.perfMetrics.onFirstInputDelay(function (e, n) {
                            n.timeStamp < r.timeStamp &&
                              ((t.value = e),
                              (t.isFinal = !0),
                              (t.entries = [
                                {
                                  entryType: 'first-input',
                                  name: n.type,
                                  target: n.target,
                                  cancelable: n.cancelable,
                                  startTime: n.timeStamp,
                                  processingStart: n.timeStamp + e,
                                },
                              ]),
                              u());
                          });
                    }),
                    (e.getLCP = function (e) {
                      var t,
                        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = o('LCP'),
                        i = p(),
                        u = function (e) {
                          var r = e.startTime;
                          r < i.timeStamp ? ((n.value = r), n.entries.push(e)) : (n.isFinal = !0), t();
                        },
                        c = a('largest-contentful-paint', u);
                      if (c) {
                        t = f(e, n, c, r);
                        var s = function () {
                          n.isFinal || (c.takeRecords().map(u), (n.isFinal = !0), t());
                        };
                        d().then(s), l(s, !0);
                      }
                    }),
                    (e.getTTFB = function (e) {
                      var t,
                        r = o('TTFB');
                      (t = function () {
                        try {
                          var t =
                            performance.getEntriesByType('navigation')[0] ||
                            (function () {
                              var e = performance.timing,
                                t = { entryType: 'navigation', startTime: 0 };
                              for (var r in e)
                                'navigationStart' !== r &&
                                  'toJSON' !== r &&
                                  (t[r] = Math.max(e[r] - e.navigationStart, 0));
                              return t;
                            })();
                          (r.value = r.delta = t.responseStart), (r.entries = [t]), (r.isFinal = !0), e(r);
                        } catch (e) {}
                      }),
                        'complete' === document.readyState ? setTimeout(t, 0) : addEventListener('pageshow', t);
                    }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
                })(t);
              },
            },
            r = {};
          function n(t) {
            if (r[t]) return r[t].exports;
            var o = (r[t] = { exports: {} }),
              a = !0;
            try {
              e[t].call(o.exports, o, o.exports, n), (a = !1);
            } finally {
              a && delete r[t];
            }
            return o.exports;
          }
          return (n.ab = t + '/'), n(599);
        })();
      }.call(this, '/'));
    },
    pVnL: function (e, t) {
      function r() {
        return (
          (e.exports = r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      e.exports = r;
    },
    yLiY: function (e, t, r) {
      'use strict';
      var n;
      (t.__esModule = !0),
        (t.setConfig = function (e) {
          n = e;
        }),
        (t.default = void 0);
      t.default = function () {
        return n;
      };
    },
    zmvN: function (e, t, r) {
      'use strict';
      var n = r('lwsE'),
        o = r('W8MJ'),
        a = r('284h'),
        i = r('TqRt');
      (t.__esModule = !0), (t.default = void 0);
      var u = r('elyg'),
        c = i(r('Lab5')),
        s = r('/jkW'),
        l = r('hS4m'),
        f = a(r('Nh2W'));
      function p(e) {
        if ('/' !== e[0]) throw new Error('Route name should start with a "/", got "'.concat(e, '"'));
        return '/' === e ? e : e.replace(/\/$/, '');
      }
      var d = (function () {
        function e(t, r) {
          n(this, e),
            (this.buildId = void 0),
            (this.assetPrefix = void 0),
            (this.promisedSsgManifest = void 0),
            (this.promisedDevPagesManifest = void 0),
            (this.routeLoader = void 0),
            (this.routeLoader = (0, f.default)(r)),
            (this.buildId = t),
            (this.assetPrefix = r),
            (this.promisedSsgManifest = new Promise(function (e) {
              window.__SSG_MANIFEST
                ? e(window.__SSG_MANIFEST)
                : (window.__SSG_MANIFEST_CB = function () {
                    e(window.__SSG_MANIFEST);
                  });
            }));
        }
        return (
          o(e, [
            {
              key: 'getPageList',
              value: function () {
                return (0, f.getClientBuildManifest)().then(function (e) {
                  return e.sortedPages;
                });
              },
            },
            {
              key: 'getDataHref',
              value: function (e, t, r, n) {
                var o = this,
                  a = (0, l.parseRelativeUrl)(e),
                  i = a.pathname,
                  f = a.query,
                  d = a.search,
                  m = (0, l.parseRelativeUrl)(t).pathname,
                  h = p(i),
                  v = function (e) {
                    var t = (0, c.default)((0, u.addLocale)(e, n), '.json');
                    return (0, u.addBasePath)(
                      '/_next/data/'
                        .concat(o.buildId)
                        .concat(t)
                        .concat(r ? '' : d)
                    );
                  },
                  y = (0, s.isDynamicRoute)(h),
                  g = y ? (0, u.interpolateAs)(i, m, f).result : '';
                return y ? g && v(g) : v(h);
              },
            },
            {
              key: '_isSsg',
              value: function (e) {
                var t = p((0, l.parseRelativeUrl)(e).pathname);
                return this.promisedSsgManifest.then(function (e) {
                  return e.has(t);
                });
              },
            },
            {
              key: 'loadPage',
              value: function (e) {
                return this.routeLoader.loadRoute(e).then(function (e) {
                  if ('component' in e)
                    return {
                      page: e.component,
                      mod: e.exports,
                      styleSheets: e.styles.map(function (e) {
                        return { href: e.href, text: e.content };
                      }),
                    };
                  throw e.error;
                });
              },
            },
            {
              key: 'prefetch',
              value: function (e) {
                return this.routeLoader.prefetch(e);
              },
            },
          ]),
          e
        );
      })();
      t.default = d;
    },
  },
  [['BMP1', 0, 2, 1]],
]);
