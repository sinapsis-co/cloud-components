var h,
  L,
  j,
  S,
  D,
  _ = -1,
  g = function (e) {
    addEventListener(
      'pageshow',
      function (t) {
        t.persisted && ((_ = t.timeStamp), e(t));
      },
      !0
    );
  },
  k = function () {
    return window.performance && performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
  },
  I = function () {
    var e = k();
    return (e && e.activationStart) || 0;
  },
  d = function (e, t) {
    var n = k(),
      a = 'navigate';
    return (
      _ >= 0
        ? (a = 'back-forward-cache')
        : n &&
          (a =
            document.prerendering || I() > 0
              ? 'prerender'
              : document.wasDiscarded
              ? 'restore'
              : n.type.replace(/_/g, '-')),
      {
        name: e,
        value: t === void 0 ? -1 : t,
        rating: 'good',
        delta: 0,
        entries: [],
        id: 'v3-'.concat(Date.now(), '-').concat(Math.floor(8999999999999 * Math.random()) + 1e12),
        navigationType: a,
      }
    );
  },
  T = function (e, t, n) {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        var a = new PerformanceObserver(function (r) {
          Promise.resolve().then(function () {
            t(r.getEntries());
          });
        });
        return a.observe(Object.assign({ type: e, buffered: !0 }, n || {})), a;
      }
    } catch {}
  },
  P = function (e, t) {
    var n = function a(r) {
      (r.type !== 'pagehide' && document.visibilityState !== 'hidden') ||
        (e(r), t && (removeEventListener('visibilitychange', a, !0), removeEventListener('pagehide', a, !0)));
    };
    addEventListener('visibilitychange', n, !0), addEventListener('pagehide', n, !0);
  },
  l = function (e, t, n, a) {
    var r, i;
    return function (o) {
      t.value >= 0 &&
        (o || a) &&
        ((i = t.value - (r || 0)) || r === void 0) &&
        ((r = t.value),
        (t.delta = i),
        (t.rating = (function (u, s) {
          return u > s[1] ? 'poor' : u > s[0] ? 'needs-improvement' : 'good';
        })(t.value, n)),
        e(t));
    };
  },
  x = function (e) {
    requestAnimationFrame(function () {
      return requestAnimationFrame(function () {
        return e();
      });
    });
  },
  E = function (e) {
    document.prerendering
      ? addEventListener(
          'prerenderingchange',
          function () {
            return e();
          },
          !0
        )
      : e();
  },
  y = -1,
  R = function () {
    return document.visibilityState !== 'hidden' || document.prerendering ? 1 / 0 : 0;
  },
  w = function (e) {
    document.visibilityState === 'hidden' && y > -1 && ((y = e.type === 'visibilitychange' ? e.timeStamp : 0), W());
  },
  H = function () {
    addEventListener('visibilitychange', w, !0), addEventListener('prerenderingchange', w, !0);
  },
  W = function () {
    removeEventListener('visibilitychange', w, !0), removeEventListener('prerenderingchange', w, !0);
  },
  B = function () {
    return (
      y < 0 &&
        ((y = R()),
        H(),
        g(function () {
          setTimeout(function () {
            (y = R()), H();
          }, 0);
        })),
      {
        get firstHiddenTime() {
          return y;
        },
      }
    );
  },
  X = function (e, t) {
    (t = t || {}),
      E(function () {
        var n,
          a = [1800, 3e3],
          r = B(),
          i = d('FCP'),
          o = T('paint', function (u) {
            u.forEach(function (s) {
              s.name === 'first-contentful-paint' &&
                (o.disconnect(),
                s.startTime < r.firstHiddenTime &&
                  ((i.value = Math.max(s.startTime - I(), 0)), i.entries.push(s), n(!0)));
            });
          });
        o &&
          ((n = l(e, i, a, t.reportAllChanges)),
          g(function (u) {
            (i = d('FCP')),
              (n = l(e, i, a, t.reportAllChanges)),
              x(function () {
                (i.value = performance.now() - u.timeStamp), n(!0);
              });
          }));
      });
  },
  nt = function (e, t) {
    (t = t || {}),
      E(function () {
        var n,
          a = [0.1, 0.25],
          r = d('CLS'),
          i = -1,
          o = 0,
          u = [],
          s = function (v) {
            i > -1 && e(v);
          },
          c = function (v) {
            v.forEach(function (p) {
              if (!p.hadRecentInput) {
                var U = u[0],
                  V = u[u.length - 1];
                o && p.startTime - V.startTime < 1e3 && p.startTime - U.startTime < 5e3
                  ? ((o += p.value), u.push(p))
                  : ((o = p.value), (u = [p])),
                  o > r.value && ((r.value = o), (r.entries = u), n());
              }
            });
          },
          f = T('layout-shift', c);
        f &&
          ((n = l(s, r, a, t.reportAllChanges)),
          X(function (v) {
            (i = v.value), r.value < 0 && ((r.value = 0), n());
          }),
          P(function () {
            c(f.takeRecords()), n(!0);
          }),
          g(function () {
            (o = 0),
              (i = -1),
              (r = d('CLS', 0)),
              (n = l(s, r, a, t.reportAllChanges)),
              x(function () {
                return n();
              });
          }));
      });
  },
  C = { passive: !0, capture: !0 },
  Y = new Date(),
  N = function (e, t) {
    h || ((h = t), (L = e), (j = new Date()), G(removeEventListener), z());
  },
  z = function () {
    if (L >= 0 && L < j - Y) {
      var e = {
        entryType: 'first-input',
        name: h.type,
        target: h.target,
        cancelable: h.cancelable,
        startTime: h.timeStamp,
        processingStart: h.timeStamp + L,
      };
      S.forEach(function (t) {
        t(e);
      }),
        (S = []);
    }
  },
  Z = function (e) {
    if (e.cancelable) {
      var t = (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp;
      e.type == 'pointerdown'
        ? (function (n, a) {
            var r = function () {
                N(n, a), o();
              },
              i = function () {
                o();
              },
              o = function () {
                removeEventListener('pointerup', r, C), removeEventListener('pointercancel', i, C);
              };
            addEventListener('pointerup', r, C), addEventListener('pointercancel', i, C);
          })(t, e)
        : N(t, e);
    }
  },
  G = function (e) {
    ['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(function (t) {
      return e(t, Z, C);
    });
  },
  rt = function (e, t) {
    (t = t || {}),
      E(function () {
        var n,
          a = [100, 300],
          r = B(),
          i = d('FID'),
          o = function (c) {
            c.startTime < r.firstHiddenTime && ((i.value = c.processingStart - c.startTime), i.entries.push(c), n(!0));
          },
          u = function (c) {
            c.forEach(o);
          },
          s = T('first-input', u);
        (n = l(e, i, a, t.reportAllChanges)),
          s &&
            P(function () {
              u(s.takeRecords()), s.disconnect();
            }, !0),
          s &&
            g(function () {
              var c;
              (i = d('FID')),
                (n = l(e, i, a, t.reportAllChanges)),
                (S = []),
                (L = -1),
                (h = null),
                G(addEventListener),
                (c = o),
                S.push(c),
                z();
            });
      });
  },
  J = 0,
  A = 1 / 0,
  b = 0,
  $ = function (e) {
    e.forEach(function (t) {
      t.interactionId &&
        ((A = Math.min(A, t.interactionId)), (b = Math.max(b, t.interactionId)), (J = b ? (b - A) / 7 + 1 : 0));
    });
  },
  K = function () {
    return D ? J : performance.interactionCount || 0;
  },
  tt = function () {
    'interactionCount' in performance ||
      D ||
      (D = T('event', $, { type: 'event', buffered: !0, durationThreshold: 0 }));
  },
  Q = 0,
  O = function () {
    return K() - Q;
  },
  m = [],
  F = {},
  q = function (e) {
    var t = m[m.length - 1],
      n = F[e.interactionId];
    if (n || m.length < 10 || e.duration > t.latency) {
      if (n) n.entries.push(e), (n.latency = Math.max(n.latency, e.duration));
      else {
        var a = { id: e.interactionId, latency: e.duration, entries: [e] };
        (F[a.id] = a), m.push(a);
      }
      m.sort(function (r, i) {
        return i.latency - r.latency;
      }),
        m.splice(10).forEach(function (r) {
          delete F[r.id];
        });
    }
  },
  it = function (e, t) {
    (t = t || {}),
      E(function () {
        var n = [200, 500];
        tt();
        var a,
          r = d('INP'),
          i = function (u) {
            u.forEach(function (f) {
              f.interactionId && q(f),
                f.entryType === 'first-input' &&
                  !m.some(function (v) {
                    return v.entries.some(function (p) {
                      return f.duration === p.duration && f.startTime === p.startTime;
                    });
                  }) &&
                  q(f);
            });
            var s,
              c = ((s = Math.min(m.length - 1, Math.floor(O() / 50))), m[s]);
            c && c.latency !== r.value && ((r.value = c.latency), (r.entries = c.entries), a());
          },
          o = T('event', i, { durationThreshold: t.durationThreshold || 40 });
        (a = l(e, r, n, t.reportAllChanges)),
          o &&
            (o.observe({ type: 'first-input', buffered: !0 }),
            P(function () {
              i(o.takeRecords()), r.value < 0 && O() > 0 && ((r.value = 0), (r.entries = [])), a(!0);
            }),
            g(function () {
              (m = []), (Q = K()), (r = d('INP')), (a = l(e, r, n, t.reportAllChanges));
            }));
      });
  },
  M = {},
  at = function (e, t) {
    (t = t || {}),
      E(function () {
        var n,
          a = [2500, 4e3],
          r = B(),
          i = d('LCP'),
          o = function (c) {
            var f = c[c.length - 1];
            if (f) {
              var v = Math.max(f.startTime - I(), 0);
              v < r.firstHiddenTime && ((i.value = v), (i.entries = [f]), n());
            }
          },
          u = T('largest-contentful-paint', o);
        if (u) {
          n = l(e, i, a, t.reportAllChanges);
          var s = function () {
            M[i.id] || (o(u.takeRecords()), u.disconnect(), (M[i.id] = !0), n(!0));
          };
          ['keydown', 'click'].forEach(function (c) {
            addEventListener(c, s, { once: !0, capture: !0 });
          }),
            P(s, !0),
            g(function (c) {
              (i = d('LCP')),
                (n = l(e, i, a, t.reportAllChanges)),
                x(function () {
                  (i.value = performance.now() - c.timeStamp), (M[i.id] = !0), n(!0);
                });
            });
        }
      });
  },
  et = function e(t) {
    document.prerendering
      ? E(function () {
          return e(t);
        })
      : document.readyState !== 'complete'
      ? addEventListener(
          'load',
          function () {
            return e(t);
          },
          !0
        )
      : setTimeout(t, 0);
  },
  ot = function (e, t) {
    t = t || {};
    var n = [800, 1800],
      a = d('TTFB'),
      r = l(e, a, n, t.reportAllChanges);
    et(function () {
      var i = k();
      if (i) {
        var o = i.responseStart;
        if (o <= 0 || o > performance.now()) return;
        (a.value = Math.max(o - I(), 0)),
          (a.entries = [i]),
          r(!0),
          g(function () {
            (a = d('TTFB', 0)), (r = l(e, a, n, t.reportAllChanges))(!0);
          });
      }
    });
  };
export {
  nt as getCLS,
  X as getFCP,
  rt as getFID,
  it as getINP,
  at as getLCP,
  ot as getTTFB,
  nt as onCLS,
  X as onFCP,
  rt as onFID,
  it as onINP,
  at as onLCP,
  ot as onTTFB,
};
