(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [4],
  {
    ZMKu: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return xr;
      }),
        n.d(e, 'b', function () {
          return vr;
        }),
        n.d(e, 'c', function () {
          return wr;
        }),
        n.d(e, 'd', function () {
          return Pr;
        });
      var r = n('mrSG'),
        i = n('eUsl'),
        o = n('Neuu'),
        a = n('82gj'),
        s = n('Ibe6'),
        u = n('q1tI'),
        c = n.n(u),
        l = function (t) {
          return 'object' === typeof t && t.hasOwnProperty('current');
        },
        f = (function () {
          function t() {
            this.subscriptions = new Set();
          }
          return (
            (t.prototype.add = function (t) {
              var e = this;
              return (
                this.subscriptions.add(t),
                function () {
                  e.subscriptions.delete(t);
                }
              );
            }),
            (t.prototype.notify = function (t, e, n) {
              var i, o;
              if (this.subscriptions.size)
                try {
                  for (var a = Object(r.g)(this.subscriptions), s = a.next(); !s.done; s = a.next()) {
                    (0, s.value)(t, e, n);
                  }
                } catch (u) {
                  i = { error: u };
                } finally {
                  try {
                    s && !s.done && (o = a.return) && o.call(a);
                  } finally {
                    if (i) throw i.error;
                  }
                }
            }),
            (t.prototype.clear = function () {
              this.subscriptions.clear();
            }),
            t
          );
        })(),
        d = (function () {
          function t(t) {
            var e,
              n = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new f()),
              (this.renderSubscribers = new f()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0),
                  (n.prev = n.current),
                  (n.current = t),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  e && n.renderSubscribers.notify(n.current);
                var r = Object(i.c)(),
                  o = r.delta,
                  a = r.timestamp;
                n.lastUpdated !== a &&
                  ((n.timeDelta = o), (n.lastUpdated = a), i.b.postRender(n.scheduleVelocityCheck));
              }),
              (this.scheduleVelocityCheck = function () {
                return i.b.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== n.lastUpdated && (n.prev = n.current);
              }),
              (this.current = t),
              (this.canTrackVelocity = ((e = this.current), !isNaN(parseFloat(e))));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? Object(o.x)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
                : 0;
            }),
            (t.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  e.stopAnimation = t(n);
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop();
            }),
            t
          );
        })();
      function p(t) {
        return new d(t);
      }
      var v = (function () {
        function t(t, e) {
          var n = this;
          (this.children = new Set()),
            (this.isHoverEventsEnabled = !0),
            (this.baseTarget = {}),
            (this.latest = {}),
            (this.values = new Map()),
            (this.valueSubscriptions = new Map()),
            (this.config = {}),
            (this.isMounted = !1),
            (this.update = function () {
              return n.config.onUpdate(n.latest);
            }),
            (this.triggerRender = function () {
              return n.render();
            }),
            (this.ref = function (t) {
              t ? n.mount(t) : n.unmount(),
                n.externalRef &&
                  ('function' === typeof n.externalRef
                    ? n.externalRef(t)
                    : l(n.externalRef) && (n.externalRef.current = t));
            }),
            (this.parent = t),
            (this.rootParent = t ? t.rootParent : this),
            (this.treePath = t ? Object(r.e)(t.treePath, [t]) : []),
            (this.depth = t ? t.depth + 1 : 0),
            (this.externalRef = e);
        }
        return (
          (t.prototype.suspendHoverEvents = function () {
            var t = this;
            (this.isHoverEventsEnabled = !1),
              i.b.postRender(function () {
                return setTimeout(function () {
                  return (t.isHoverEventsEnabled = !0);
                }, 10);
              });
          }),
          (t.prototype.getVariantPayload = function () {
            return this.config.custom;
          }),
          (t.prototype.getVariant = function (t) {
            var e;
            return null === (e = this.config.variants) || void 0 === e ? void 0 : e[t];
          }),
          (t.prototype.addVariantChild = function (t) {
            var e = this;
            return (
              this.variantChildren || (this.variantChildren = new Set()),
              this.variantChildren.add(t),
              function () {
                return e.variantChildren.delete(t);
              }
            );
          }),
          (t.prototype.addVariantChildOrder = function (t) {
            this.variantChildrenOrder || (this.variantChildrenOrder = new Set()), this.variantChildrenOrder.add(t);
          }),
          (t.prototype.onAnimationStart = function () {
            var t, e;
            null === (e = (t = this.config).onAnimationStart) || void 0 === e || e.call(t);
          }),
          (t.prototype.onAnimationComplete = function () {
            var t, e;
            this.isMounted && (null === (e = (t = this.config).onAnimationComplete) || void 0 === e || e.call(t));
          }),
          (t.prototype.getDefaultTransition = function () {
            return this.config.transition;
          }),
          (t.prototype.subscribe = function (t) {
            var e = this;
            return (
              this.children.add(t),
              function () {
                return e.children.delete(t);
              }
            );
          }),
          (t.prototype.hasValue = function (t) {
            return this.values.has(t);
          }),
          (t.prototype.addValue = function (t, e) {
            this.hasValue(t) && this.removeValue(t),
              this.values.set(t, e),
              this.setSingleStaticValue(t, e.get()),
              this.subscribeToValue(t, e);
          }),
          (t.prototype.removeValue = function (t) {
            var e;
            null === (e = this.valueSubscriptions.get(t)) || void 0 === e || e(),
              this.valueSubscriptions.delete(t),
              this.values.delete(t),
              delete this.latest[t];
          }),
          (t.prototype.getValue = function (t, e) {
            var n = this.values.get(t);
            return void 0 === n && void 0 !== e && ((n = new d(e)), this.addValue(t, n)), n;
          }),
          (t.prototype.forEachValue = function (t) {
            this.values.forEach(t);
          }),
          (t.prototype.getInstance = function () {
            return this.element;
          }),
          (t.prototype.updateConfig = function (t) {
            void 0 === t && (t = {}), (this.config = Object(r.a)({}, t));
          }),
          (t.prototype.getBaseValue = function (t, e) {
            return this.baseTarget[t];
          }),
          (t.prototype.setSingleStaticValue = function (t, e) {
            this.latest[t] = e;
          }),
          (t.prototype.setStaticValues = function (t, e) {
            if ('string' === typeof t) this.setSingleStaticValue(t, e);
            else for (var n in t) this.setSingleStaticValue(n, t[n]);
          }),
          (t.prototype.scheduleRender = function () {
            i.b.render(this.triggerRender, !1, !0);
          }),
          (t.prototype.scheduleUpdateLayoutDelta = function () {
            i.b.preRender(this.rootParent.updateLayoutDelta, !1, !0);
          }),
          (t.prototype.subscribeToValue = function (t, e) {
            var n = this,
              r = e.onChange(function (e) {
                n.setSingleStaticValue(t, e), n.element && n.config.onUpdate && i.b.update(n.update, !1, !0);
              }),
              o = e.onRenderRequest(function () {
                n.element && n.scheduleRender();
              });
            this.valueSubscriptions.set(t, function () {
              r(), o();
            });
          }),
          (t.prototype.mount = function (t) {
            Object(a.a)(
              !!t,
              'No ref found. Ensure components created with motion.custom forward refs using React.forwardRef'
            ),
              this.parent && (this.removeFromParent = this.parent.subscribe(this)),
              (this.element = this.current = t);
          }),
          (t.prototype.unmount = function () {
            var t = this;
            this.forEachValue(function (e, n) {
              return t.removeValue(n);
            }),
              i.a.update(this.update),
              i.a.render(this.render),
              this.removeFromParent && this.removeFromParent();
          }),
          t
        );
      })();
      function h(t) {
        return t;
      }
      function m(t) {
        var e = t.top;
        return { x: { min: t.left, max: t.right }, y: { min: e, max: t.bottom } };
      }
      function g(t) {
        return { x: Object(r.a)({}, t.x), y: Object(r.a)({}, t.y) };
      }
      var y = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
      function b() {
        return { x: Object(r.a)({}, y), y: Object(r.a)({}, y) };
      }
      var x = Object(r.a)(Object(r.a)({}, s.h), { transform: Math.round }),
        O = {
          color: s.b,
          backgroundColor: s.b,
          outlineColor: s.b,
          fill: s.b,
          stroke: s.b,
          borderColor: s.b,
          borderTopColor: s.b,
          borderRightColor: s.b,
          borderBottomColor: s.b,
          borderLeftColor: s.b,
          borderWidth: s.k,
          borderTopWidth: s.k,
          borderRightWidth: s.k,
          borderBottomWidth: s.k,
          borderLeftWidth: s.k,
          borderRadius: s.k,
          radius: s.k,
          borderTopLeftRadius: s.k,
          borderTopRightRadius: s.k,
          borderBottomRightRadius: s.k,
          borderBottomLeftRadius: s.k,
          width: s.k,
          maxWidth: s.k,
          height: s.k,
          maxHeight: s.k,
          size: s.k,
          top: s.k,
          right: s.k,
          bottom: s.k,
          left: s.k,
          padding: s.k,
          paddingTop: s.k,
          paddingRight: s.k,
          paddingBottom: s.k,
          paddingLeft: s.k,
          margin: s.k,
          marginTop: s.k,
          marginRight: s.k,
          marginBottom: s.k,
          marginLeft: s.k,
          rotate: s.d,
          rotateX: s.d,
          rotateY: s.d,
          rotateZ: s.d,
          scale: s.m,
          scaleX: s.m,
          scaleY: s.m,
          scaleZ: s.m,
          skew: s.d,
          skewX: s.d,
          skewY: s.d,
          distance: s.k,
          translateX: s.k,
          translateY: s.k,
          translateZ: s.k,
          x: s.k,
          y: s.k,
          z: s.k,
          perspective: s.k,
          transformPerspective: s.k,
          opacity: s.a,
          originX: s.j,
          originY: s.j,
          originZ: s.k,
          zIndex: x,
          filter: s.e,
          WebkitFilter: s.e,
          fillOpacity: s.a,
          strokeOpacity: s.a,
          numOctaves: x,
        },
        j = [
          s.h,
          s.k,
          s.i,
          s.d,
          s.o,
          s.n,
          {
            test: function (t) {
              return 'auto' === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        E = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        w = function (t) {
          return j.find(E(t));
        },
        C = Object(r.e)(j, [s.b, s.c]),
        A = function (t) {
          return C.find(E(t));
        },
        P = function (t) {
          return O[t];
        },
        S = function (t, e) {
          return e && 'number' === typeof t ? e.transform(t) : t;
        };
      function k(t, e) {
        var n,
          r = P(t);
        return r !== s.e && (r = s.c), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, e);
      }
      var V = ['', 'X', 'Y', 'Z'],
        T = ['transformPerspective', 'x', 'y', 'z'];
      function B(t, e) {
        return T.indexOf(t) - T.indexOf(e);
      }
      ['perspective', 'translate', 'scale', 'rotate', 'skew'].forEach(function (t) {
        V.forEach(function (e) {
          var n = t + e;
          T.push(n);
        });
      });
      var L = new Set(T);
      function R(t) {
        return L.has(t);
      }
      var M = new Set(['originX', 'originY', 'originZ']);
      function D(t) {
        return M.has(t);
      }
      var F = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' };
      function U(t, e, n) {
        var r = t.x,
          i = t.y,
          o = 'translate3d(' + r.translate / e.x + 'px, ' + i.translate / e.y + 'px, 0) ';
        if (n) {
          var a = n.rotate,
            s = n.rotateX,
            u = n.rotateY;
          a && (o += 'rotate(' + a + ') '), s && (o += 'rotateX(' + s + ') '), u && (o += 'rotateY(' + u + ') ');
        }
        return (o += 'scale(' + r.scale + ', ' + i.scale + ')'), n || o !== I ? o : '';
      }
      var I = U(b(), { x: 1, y: 1 });
      function H(t) {
        return t.startsWith('--');
      }
      function Y(t) {
        return 'string' === typeof t && t.startsWith('var(--');
      }
      var X = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function z(t, e, n) {
        void 0 === n && (n = 1),
          Object(a.a)(
            n <= 4,
            'Max CSS variable fallback depth detected in property "' +
              t +
              '". This may indicate a circular fallback dependency.'
          );
        var i = Object(r.c)(
            (function (t) {
              var e = X.exec(t);
              if (!e) return [,];
              var n = Object(r.c)(e, 3);
              return [n[1], n[2]];
            })(t),
            2
          ),
          o = i[0],
          s = i[1];
        if (o) {
          var u = window.getComputedStyle(e).getPropertyValue(o);
          return u ? u.trim() : Y(s) ? z(s, e, n + 1) : s;
        }
      }
      function W(t, e) {
        return (t / (e.max - e.min)) * 100;
      }
      var N = '_$css';
      var G = {
          process: function (t, e) {
            if ('string' === typeof t) {
              if (!s.k.test(t)) return t;
              t = parseFloat(t);
            }
            return W(t, e.x) + '% ' + W(t, e.y) + '%';
          },
        },
        Z = {
          borderRadius: Object(r.a)(Object(r.a)({}, G), {
            applyTo: [
              'borderTopLeftRadius',
              'borderTopRightRadius',
              'borderBottomLeftRadius',
              'borderBottomRightRadius',
            ],
          }),
          borderTopLeftRadius: G,
          borderTopRightRadius: G,
          borderBottomLeftRadius: G,
          borderBottomRightRadius: G,
          boxShadow: {
            process: function (t, e, n, r) {
              var i = t,
                a = t.includes('var('),
                u = [];
              a &&
                (t = t.replace(X, function (t) {
                  return u.push(t), N;
                }));
              var c = s.c.parse(t);
              if (c.length > 5) return i;
              var l = s.c.createTransformer(t),
                f = 'number' !== typeof c[0] ? 1 : 0,
                d = n.x.scale * r.x,
                p = n.y.scale * r.y;
              (c[0 + f] /= d), (c[1 + f] /= p);
              var v = Object(o.u)(d, p, 0.5);
              'number' === typeof c[2 + f] && (c[2 + f] /= v), 'number' === typeof c[3 + f] && (c[3 + f] /= v);
              var h = l(c);
              if (a) {
                var m = 0;
                h = h.replace(N, function () {
                  var t = u[m];
                  return m++, t;
                });
              }
              return h;
            },
          },
        };
      function K(t, e, n, r, i, o, a, s, u, c, l, f) {
        var d = a.enableHardwareAcceleration,
          p = a.transformTemplate,
          v = a.allowTransformNone;
        o.length = 0;
        var h = !1,
          m = !1,
          g = !0;
        for (var y in t) {
          var b = t[y],
            x = P(y),
            O = S(b, x);
          if (R(y)) {
            if (((h = !0), (r[y] = O), o.push(y), !g)) continue;
            b !== (void 0 !== x.default ? x.default : 0) && (g = !1);
          } else if (D(y)) (i[y] = O), (m = !0);
          else if ('transform' !== y || 'function' !== typeof b) {
            var j = H(y) ? n : e;
            if (s && Z[y]) {
              var E = Z[y].process(b, f, u, l),
                w = Z[y].applyTo;
              if (w) for (var C = w.length, A = 0; A < C; A++) j[w[A]] = E;
              else j[y] = E;
            } else j[y] = O;
          }
        }
        s
          ? ((e.transform = U(c, l, h ? r : void 0)),
            p && (e.transform = p(r, e.transform)),
            (e.transformOrigin = (function (t) {
              var e = t.x,
                n = t.y;
              return 100 * e.origin + '% ' + 100 * n.origin + '% 0';
            })(c)))
          : (h &&
              (e.transform = (function (t, e, n, r, i, o) {
                void 0 === i && (i = !0), void 0 === o && (o = !0);
                var a = '';
                e.sort(B);
                for (var s = !1, u = e.length, c = 0; c < u; c++) {
                  var l = e[c];
                  (a += (F[l] || l) + '(' + t[l] + ') '), 'z' === l && (s = !0);
                }
                return (
                  !s && i ? (a += 'translateZ(0)') : (a = a.trim()),
                  n ? (a = n(t, r ? '' : a)) : o && r && (a = 'none'),
                  a
                );
              })(r, o, p, g, d, v)),
            m &&
              (e.transformOrigin = (function (t) {
                var e = t.originX,
                  n = void 0 === e ? '50%' : e,
                  r = t.originY,
                  i = void 0 === r ? '50%' : r,
                  o = t.originZ;
                return n + ' ' + i + ' ' + (void 0 === o ? 0 : o);
              })(i)));
      }
      function _(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function $(t, e, n) {
        return n + e * (t - n);
      }
      function q(t, e, n, r, i) {
        return void 0 !== i && (t = $(t, i, r)), $(t, n, r) + e;
      }
      function J(t, e, n, r, i) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          (t.min = q(t.min, e, n, r, i)),
          (t.max = q(t.max, e, n, r, i));
      }
      function Q(t, e) {
        var n = e.x,
          r = e.y;
        J(t.x, n.translate, n.scale, n.originPoint), J(t.y, r.translate, r.scale, r.originPoint);
      }
      function tt(t, e, n, i) {
        var a = Object(r.c)(i, 3),
          s = a[0],
          u = a[1],
          c = a[2];
        (t.min = e.min), (t.max = e.max);
        var l = void 0 !== n[c] ? n[c] : 0.5,
          f = Object(o.u)(e.min, e.max, l);
        J(t, n[s], n[u], f, n.scale);
      }
      var et = ['x', 'scaleX', 'originX'],
        nt = ['y', 'scaleY', 'originY'];
      function rt(t, e, n, r, i) {
        return (t = $((t -= e), 1 / n, r)), void 0 !== i && (t = $(t, 1 / i, r)), t;
      }
      function it(t, e, n) {
        var i = Object(r.c)(n, 3),
          a = i[0],
          s = i[1],
          u = i[2];
        !(function (t, e, n, r, i) {
          void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === r && (r = 0.5);
          var a = Object(o.u)(t.min, t.max, r) - e;
          (t.min = rt(t.min, e, n, a, i)), (t.max = rt(t.max, e, n, a, i));
        })(t, e[a], e[s], e[u], e.scale);
      }
      function ot(t, e, n) {
        return void 0 === e && (e = 0), void 0 === n && (n = 0.01), Object(o.n)(t, e) < n;
      }
      function at(t) {
        return t.max - t.min;
      }
      function st(t, e) {
        var n,
          r = 0.5,
          i = at(t),
          a = at(e);
        return (
          a > i ? (r = Object(o.w)(e.min, e.max - i, t.min)) : i > a && (r = Object(o.w)(t.min, t.max - a, e.min)),
          (n = r),
          Object(o.l)(0, 1, n)
        );
      }
      function ut(t, e, n, r) {
        (t.origin = void 0 === r ? st(e, n) : r),
          (t.originPoint = Object(o.u)(e.min, e.max, t.origin)),
          (t.scale = at(n) / at(e)),
          ot(t.scale, 1, 1e-4) && (t.scale = 1),
          (t.translate = Object(o.u)(n.min, n.max, t.origin) - t.originPoint),
          ot(t.translate) && (t.translate = 0);
      }
      function ct(t, e, n, r) {
        ut(t.x, e.x, n.x, r), ut(t.y, e.y, n.y, r);
      }
      function lt(t) {
        return [t('x'), t('y')];
      }
      function ft(t, e) {
        return m(
          (function (t, e) {
            var n = t.top,
              r = t.left,
              i = t.bottom,
              o = t.right;
            void 0 === e && (e = h);
            var a = e({ x: r, y: n }),
              s = e({ x: o, y: i });
            return { top: a.y, left: a.x, bottom: s.y, right: s.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var dt,
        pt = function (t) {
          return Array.isArray(t);
        },
        vt = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'x', 'y']),
        ht = function (t) {
          return vt.has(t);
        },
        mt = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        gt = function (t) {
          return t === s.h || t === s.k;
        };
      !(function (t) {
        (t.width = 'width'),
          (t.height = 'height'),
          (t.left = 'left'),
          (t.right = 'right'),
          (t.top = 'top'),
          (t.bottom = 'bottom');
      })(dt || (dt = {}));
      var yt = function (t, e) {
          return parseFloat(t.split(', ')[e]);
        },
        bt = function (t, e) {
          return function (n, r) {
            var i = r.transform;
            if ('none' === i || !i) return 0;
            var o = i.match(/^matrix3d\((.+)\)$/);
            if (o) return yt(o[1], e);
            var a = i.match(/^matrix\((.+)\)$/);
            return a ? yt(a[1], t) : 0;
          };
        },
        xt = new Set(['x', 'y', 'z']),
        Ot = T.filter(function (t) {
          return !xt.has(t);
        });
      var jt = {
          width: function (t) {
            var e = t.x;
            return e.max - e.min;
          },
          height: function (t) {
            var e = t.y;
            return e.max - e.min;
          },
          top: function (t, e) {
            var n = e.top;
            return parseFloat(n);
          },
          left: function (t, e) {
            var n = e.left;
            return parseFloat(n);
          },
          bottom: function (t, e) {
            var n = t.y,
              r = e.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x,
              r = e.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: bt(4, 13),
          y: bt(5, 14),
        },
        Et = function (t, e, n, i) {
          void 0 === n && (n = {}), void 0 === i && (i = {}), (e = Object(r.a)({}, e)), (i = Object(r.a)({}, i));
          var o = Object.keys(e).filter(ht),
            u = [],
            c = !1,
            l = [];
          if (
            (o.forEach(function (r) {
              var o = t.getValue(r);
              if (t.hasValue(r)) {
                var f,
                  d = n[r],
                  p = e[r],
                  v = w(d);
                if (pt(p))
                  for (var h = p.length, m = null === p[0] ? 1 : 0; m < h; m++)
                    f
                      ? Object(a.a)(w(p[m]) === f, 'All keyframes must be of the same type')
                      : ((f = w(p[m])),
                        Object(a.a)(
                          f === v || (gt(v) && gt(f)),
                          'Keyframes must be of the same dimension as the current value'
                        ));
                else f = w(p);
                if (v !== f)
                  if (gt(v) && gt(f)) {
                    var g = o.get();
                    'string' === typeof g && o.set(parseFloat(g)),
                      'string' === typeof p
                        ? (e[r] = parseFloat(p))
                        : Array.isArray(p) && f === s.k && (e[r] = p.map(parseFloat));
                  } else
                    (null === v || void 0 === v ? void 0 : v.transform) &&
                    (null === f || void 0 === f ? void 0 : f.transform) &&
                    (0 === d || 0 === p)
                      ? 0 === d
                        ? o.set(f.transform(d))
                        : (e[r] = v.transform(p))
                      : (c ||
                          ((u = (function (t) {
                            var e = [];
                            return (
                              Ot.forEach(function (n) {
                                var r = t.getValue(n);
                                void 0 !== r && (e.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
                              }),
                              e.length && t.render(),
                              e
                            );
                          })(t)),
                          (c = !0)),
                        l.push(r),
                        (i[r] = void 0 !== i[r] ? i[r] : e[r]),
                        mt(o, p));
              }
            }),
            l.length)
          ) {
            var f = (function (t, e, n) {
              var r = e.getBoundingBox(),
                i = e.getComputedStyle(),
                o = i.display,
                a = { top: i.top, left: i.left, bottom: i.bottom, right: i.right, transform: i.transform };
              'none' === o && e.setStaticValues('display', t.display || 'block'), e.render();
              var s = e.getBoundingBox();
              return (
                n.forEach(function (n) {
                  var o = e.getValue(n);
                  mt(o, jt[n](r, a)), (t[n] = jt[n](s, i));
                }),
                t
              );
            })(e, t, l);
            return (
              u.length &&
                u.forEach(function (e) {
                  var n = Object(r.c)(e, 2),
                    i = n[0],
                    o = n[1];
                  t.getValue(i).set(o);
                }),
              t.render(),
              { target: f, transitionEnd: i }
            );
          }
          return { target: e, transitionEnd: i };
        };
      function wt(t, e, n, r) {
        return (function (t) {
          return Object.keys(t).some(ht);
        })(e)
          ? Et(t, e, n, r)
          : { target: e, transitionEnd: r };
      }
      var Ct = function (t, e, n, i) {
        var o = (function (t, e, n) {
          var i,
            o = Object(r.d)(e, []),
            a = t.getInstance();
          if (!(a instanceof HTMLElement)) return { target: o, transitionEnd: n };
          for (var s in (n && (n = Object(r.a)({}, n)),
          t.forEachValue(function (t) {
            var e = t.get();
            if (Y(e)) {
              var n = z(e, a);
              n && t.set(n);
            }
          }),
          o)) {
            var u = o[s];
            if (Y(u)) {
              var c = z(u, a);
              c && ((o[s] = c), n && ((null !== (i = n[s]) && void 0 !== i) || (n[s] = u)));
            }
          }
          return { target: o, transitionEnd: n };
        })(t, e, i);
        return wt(t, (e = o.target), n, (i = o.transitionEnd));
      };
      function At(t) {
        return Array.isArray(t);
      }
      function Pt(t, e, n) {
        return (
          'string' === typeof e && (e = t.getVariant(e)),
          'function' === typeof e
            ? e(
                null !== n && void 0 !== n ? n : t.getVariantPayload(),
                (function (t) {
                  var e = {};
                  return (
                    t.forEachValue(function (t, n) {
                      return (e[n] = t.get());
                    }),
                    e
                  );
                })(t),
                (function (t) {
                  var e = {};
                  return (
                    t.forEachValue(function (t, n) {
                      return (e[n] = t.getVelocity());
                    }),
                    e
                  );
                })(t)
              )
            : e
        );
      }
      function St(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, p(n));
      }
      function kt(t, e) {
        var n,
          i = Pt(t, e),
          o = i ? t.makeTargetAnimatable(i, !1) : {},
          a = o.transitionEnd,
          s = void 0 === a ? {} : a,
          u = (o.transition, Object(r.d)(o, ['transitionEnd', 'transition']));
        for (var c in (u = Object(r.a)(Object(r.a)({}, u), s))) {
          St(t, c, ((n = u[c]), pt(n) ? n[n.length - 1] || 0 : n));
        }
      }
      function Vt(t, e) {
        Object(r.e)(e)
          .reverse()
          .forEach(function (n) {
            var r;
            kt(t, t.getVariant(n)),
              null === (r = t.variantChildren) ||
                void 0 === r ||
                r.forEach(function (t) {
                  Vt(t, e);
                });
          });
      }
      function Tt(t, e) {
        return Array.isArray(e) ? Vt(t, e) : 'string' === typeof e ? Vt(t, [e]) : void kt(t, e);
      }
      function Bt(t, e, n) {
        var r,
          i,
          o,
          u = Object.keys(e).filter(function (e) {
            return !t.hasValue(e);
          }),
          c = u.length;
        if (c)
          for (var l = 0; l < c; l++) {
            var f = u[l],
              d = e[f],
              v = null;
            if ((Array.isArray(d) && (v = d[0]), null === v)) {
              var h = null !== (r = n[f]) && void 0 !== r ? r : t.readNativeValue(f);
              (v = void 0 !== h ? h : e[f]),
                Object(a.a)(
                  null !== v,
                  'No initial value for "' +
                    f +
                    '" can be inferred. Ensure an initial value for "' +
                    f +
                    '" is defined on the component.'
                );
            }
            'string' === typeof v && /^\-?\d*\.?\d+$/.test(v)
              ? (v = parseFloat(v))
              : !A(v) && s.c.test(d) && (v = k(f, d)),
              t.addValue(f, p(v)),
              (null !== (i = (o = n)[f]) && void 0 !== i) || (o[f] = v),
              (t.baseTarget[f] = v);
          }
      }
      function Lt(t, e) {
        if (e) return (e[t] || e.default || e).from;
      }
      function Rt(t, e, n) {
        var r,
          i,
          o = {};
        for (var a in t)
          o[a] =
            null !== (r = Lt(a, e)) && void 0 !== r
              ? r
              : null === (i = n.getValue(a)) || void 0 === i
              ? void 0
              : i.get();
        return o;
      }
      var Mt = function (t) {
          return t instanceof d;
        },
        Dt = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.defaultConfig = { enableHardwareAcceleration: !0, allowTransformNone: !0 }),
              (e.style = {}),
              (e.reactStyle = {}),
              (e.vars = {}),
              (e.transform = {}),
              (e.transformOrigin = {}),
              (e.transformKeys = []),
              (e.config = e.defaultConfig),
              (e.isLayoutProjectionEnabled = !1),
              (e.layoutUpdateListeners = new f()),
              (e.layoutMeasureListeners = new f()),
              (e.viewportBoxUpdateListeners = new f()),
              (e.hasViewportBoxUpdated = !1),
              (e.targetBoxFinal = { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } }),
              (e.treeScale = { x: 1, y: 1 }),
              (e.delta = b()),
              (e.deltaFinal = b()),
              (e.deltaTransform = I),
              (e.stopLayoutAxisAnimation = { x: function () {}, y: function () {} }),
              (e.isTargetBoxLocked = !1),
              (e.updateLayoutDelta = function () {
                e.isLayoutProjectionEnabled && e.box && e.updateLayoutDeltas(), e.children.forEach(Ft);
              }),
              e
            );
          }
          return (
            Object(r.b)(e, t),
            (e.prototype.removeValue = function (e) {
              t.prototype.removeValue.call(this, e), delete this.vars[e], delete this.style[e];
            }),
            (e.prototype.clean = function () {
              (this.style = {}), (this.vars = {}), (this.transform = {});
            }),
            (e.prototype.updateConfig = function (t) {
              void 0 === t && (t = {}), (this.config = Object(r.a)(Object(r.a)({}, this.defaultConfig), t));
            }),
            (e.prototype.read = function (t) {
              var e = this.getComputedStyle();
              return (H(t) ? e.getPropertyValue(t) : e[t]) || 0;
            }),
            (e.prototype.addValue = function (e, n) {
              t.prototype.addValue.call(this, e, n), e.startsWith('rotate') && (this.layoutOrigin = 0.5);
            }),
            (e.prototype.readNativeValue = function (t) {
              if (R(t)) {
                var e = P(t);
                return (e && e.default) || 0;
              }
              return this.read(t);
            }),
            (e.prototype.getBaseValue = function (e, n) {
              var r,
                i = null === (r = n.style) || void 0 === r ? void 0 : r[e];
              return void 0 === i || Mt(i) ? t.prototype.getBaseValue.call(this, e, n) : i;
            }),
            (e.prototype.makeTargetAnimatable = function (t, e) {
              void 0 === e && (e = !0);
              var n = t.transition,
                i = t.transitionEnd,
                o = Object(r.d)(t, ['transition', 'transitionEnd']),
                a = this.config.transformValues,
                s = Rt(o, n || {}, this);
              if ((a && (i && (i = a(i)), o && (o = a(o)), s && (s = a(s))), e)) {
                Bt(this, o, s);
                var u = Ct(this, o, s, i);
                (i = u.transitionEnd), (o = u.target);
              }
              return Object(r.a)({ transition: n, transitionEnd: i }, o);
            }),
            (e.prototype.enableLayoutProjection = function () {
              this.isLayoutProjectionEnabled = !0;
            }),
            (e.prototype.hide = function () {
              !1 !== this.isVisible && ((this.isVisible = !1), this.scheduleRender());
            }),
            (e.prototype.show = function () {
              !0 !== this.isVisible && ((this.isVisible = !0), this.scheduleRender());
            }),
            (e.prototype.onLayoutUpdate = function (t) {
              return this.layoutUpdateListeners.add(t);
            }),
            (e.prototype.onLayoutMeasure = function (t) {
              return this.layoutMeasureListeners.add(t);
            }),
            (e.prototype.onViewportBoxUpdate = function (t) {
              return this.viewportBoxUpdateListeners.add(t);
            }),
            (e.prototype.layoutReady = function (t) {
              this.layoutUpdateListeners.notify(this.box, this.prevViewportBox || this.box, t);
            }),
            (e.prototype.getBoundingBox = function () {
              var t = this.config.transformPagePoint;
              return ft(this.element, t);
            }),
            (e.prototype.getBoundingBoxWithoutTransforms = function () {
              var t,
                e,
                n = this.getBoundingBox();
              return (t = n), (e = this.latest), it(t.x, e, et), it(t.y, e, nt), n;
            }),
            (e.prototype.getComputedStyle = function () {
              return window.getComputedStyle(this.element);
            }),
            (e.prototype.snapshotBoundingBox = function () {
              (this.prevViewportBox = this.getBoundingBoxWithoutTransforms()),
                this.rebaseTargetBox(!1, this.prevViewportBox);
            }),
            (e.prototype.rebaseTargetBox = function (t, e) {
              var n = this;
              void 0 === t && (t = !1), void 0 === e && (e = this.box);
              var r = this.getAxisProgress(),
                i = r.x,
                o = r.y,
                a = this.box && !this.isTargetBoxLocked && !i.isAnimating() && !o.isAnimating();
              (t || a) &&
                lt(function (t) {
                  var r = e[t],
                    i = r.min,
                    o = r.max;
                  n.setAxisTarget(t, i, o);
                });
            }),
            (e.prototype.measureLayout = function () {
              var t = this;
              (this.box = this.getBoundingBox()),
                (this.boxCorrected = g(this.box)),
                this.targetBox || (this.targetBox = g(this.box)),
                this.layoutMeasureListeners.notify(this.box, this.prevViewportBox || this.box),
                i.b.update(function () {
                  return t.rebaseTargetBox();
                });
            }),
            (e.prototype.lockTargetBox = function () {
              this.isTargetBoxLocked = !0;
            }),
            (e.prototype.unlockTargetBox = function () {
              this.stopLayoutAnimation(), (this.isTargetBoxLocked = !1);
            }),
            (e.prototype.resetTransform = function () {
              this.suspendHoverEvents();
              var t = this.config.transformTemplate;
              (this.element.style.transform = t ? t({}, '') : 'none'), this.scheduleRender();
            }),
            (e.prototype.setAxisTarget = function (t, e, n) {
              var r = this.targetBox[t];
              (r.min = e), (r.max = n), (this.hasViewportBoxUpdated = !0), this.rootParent.scheduleUpdateLayoutDelta();
            }),
            (e.prototype.getAxisProgress = function () {
              return this.axisProgress || (this.axisProgress = { x: p(0), y: p(0) }), this.axisProgress;
            }),
            (e.prototype.startLayoutAxisAnimation = function (t, e) {
              var n,
                r = this,
                i = this.getAxisProgress()[t],
                o = this.targetBox[t],
                a = o.min,
                s = o.max - a;
              return (
                i.clearListeners(),
                i.set(a),
                i.set(a),
                i.onChange(function (e) {
                  return r.setAxisTarget(t, e, e + s);
                }),
                null === (n = this.animateMotionValue) || void 0 === n ? void 0 : n.call(this, t, i, 0, e)
              );
            }),
            (e.prototype.stopLayoutAnimation = function () {
              var t = this;
              lt(function (e) {
                return t.getAxisProgress()[e].stop();
              });
            }),
            (e.prototype.withoutTransform = function (t) {
              this.isLayoutProjectionEnabled && this.resetTransform(),
                this.parent ? this.parent.withoutTransform(t) : t(),
                this.isLayoutProjectionEnabled && (this.element.style.transform = this.style.transform);
            }),
            (e.prototype.updateLayoutDeltas = function () {
              var t, e;
              (t = this.boxCorrected), (e = this.box), _(t.x, e.x), _(t.y, e.y);
              var n = this.treeScale.x,
                r = this.treeScale.y;
              !(function (t, e, n) {
                var r = n.length;
                if (r) {
                  e.x = e.y = 1;
                  for (var i = 0; i < r; i++) {
                    var o = n[i].delta;
                    (e.x *= o.x.scale), (e.y *= o.y.scale), Q(t, o);
                  }
                }
              })(this.boxCorrected, this.treeScale, this.treePath),
                ct(this.delta, this.boxCorrected, this.targetBox, this.layoutOrigin),
                this.hasViewportBoxUpdated && this.viewportBoxUpdateListeners.notify(this.targetBox, this.delta),
                (this.hasViewportBoxUpdated = !1);
              var i = U(this.delta, this.treeScale);
              (i === this.deltaTransform && n === this.treeScale.x && r === this.treeScale.y) || this.scheduleRender(),
                (this.deltaTransform = i);
            }),
            (e.prototype.updateTransformDeltas = function () {
              var t, e, n;
              this.isLayoutProjectionEnabled &&
                this.box &&
                ((t = this.targetBoxFinal),
                (e = this.targetBox),
                (n = this.latest),
                tt(t.x, e.x, n, et),
                tt(t.y, e.y, n, nt),
                ct(this.deltaFinal, this.boxCorrected, this.targetBoxFinal, this.layoutOrigin));
            }),
            (e.prototype.build = function () {
              this.updateTransformDeltas(),
                void 0 !== this.isVisible && (this.style.visibility = this.isVisible ? 'visible' : 'hidden'),
                K(
                  this.latest,
                  this.style,
                  this.vars,
                  this.transform,
                  this.transformOrigin,
                  this.transformKeys,
                  this.config,
                  this.isLayoutProjectionEnabled && !!this.box,
                  this.delta,
                  this.deltaFinal,
                  this.treeScale,
                  this.targetBoxFinal
                );
            }),
            (e.prototype.render = function () {
              for (var t in (this.build(), Object.assign(this.element.style, this.style), this.vars))
                this.element.style.setProperty(t, this.vars[t]);
            }),
            e
          );
        })(v),
        Ft = function (t) {
          return t.updateLayoutDelta();
        };
      function Ut(t) {
        var e = Object(u.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
      function It(t, e, n) {
        return 'string' === typeof t ? t : s.k.transform(e + n * t);
      }
      var Ht = function (t, e) {
          return s.k.transform(t * e);
        },
        Yt = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
        Xt = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
      var zt = { x: 0, y: 0, width: 0, height: 0 };
      function Wt(t, e, n, i, o, a, s, u, c, l, f, d, p, v, h) {
        var m = t.attrX,
          g = t.attrY,
          y = t.originX,
          b = t.originY,
          x = t.pathLength,
          O = t.pathSpacing,
          j = void 0 === O ? 1 : O,
          E = t.pathOffset,
          w = void 0 === E ? 0 : E;
        return (
          K(
            Object(r.d)(t, ['attrX', 'attrY', 'originX', 'originY', 'pathLength', 'pathSpacing', 'pathOffset']),
            i,
            n,
            o,
            a,
            s,
            u,
            f,
            d,
            p,
            v,
            h
          ),
          i.transform && ((e.transform = i.transform), delete i.transform),
          (void 0 !== y || void 0 !== b || e.transform) &&
            (e.transformOrigin = (function (t, e, n) {
              return It(e, t.x, t.width) + ' ' + It(n, t.y, t.height);
            })(c || zt, void 0 !== y ? y : 0.5, void 0 !== b ? b : 0.5)),
          void 0 !== m && (i.x = m),
          void 0 !== g && (i.y = g),
          void 0 !== l &&
            void 0 !== x &&
            (function (t, e, n, r, i, o) {
              void 0 === r && (r = 1), void 0 === i && (i = 0), void 0 === o && (o = !0);
              var a = o ? Yt : Xt;
              t[a.offset] = Ht(-i, e);
              var s = Ht(n, e),
                u = Ht(r, e);
              t[a.array] = s + ' ' + u;
            })(i, l, x, j, w, !1),
          i
        );
      }
      var Nt = new Set([
          'baseFrequency',
          'diffuseConstant',
          'kernelMatrix',
          'kernelUnitLength',
          'keySplines',
          'keyTimes',
          'limitingConeAngle',
          'markerHeight',
          'markerWidth',
          'numOctaves',
          'targetX',
          'targetY',
          'surfaceScale',
          'specularConstant',
          'specularExponent',
          'stdDeviation',
          'tableValues',
          'viewBox',
        ]),
        Gt = /([a-z])([A-Z])/g,
        Zt = function (t) {
          return t.replace(Gt, '$1-$2').toLowerCase();
        },
        Kt = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.attrs = {}), (e.defaultConfig = { enableHardwareAcceleration: !1 }), (e.config = e.defaultConfig), e
            );
          }
          return (
            Object(r.b)(e, t),
            (e.prototype.mount = function (e) {
              t.prototype.mount.call(this, e), this.measure();
            }),
            (e.prototype.measure = function () {
              var t = this;
              try {
                this.dimensions =
                  'function' === typeof this.element.getBBox
                    ? this.element.getBBox()
                    : this.element.getBoundingClientRect();
              } catch (e) {
                this.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              'path' === this.element.tagName && (this.totalPathLength = this.element.getTotalLength()),
                i.b.render(function () {
                  return t.render();
                });
            }),
            (e.prototype.getBaseValue = function (e, n) {
              var r = n[e];
              return void 0 === r || Mt(r) ? t.prototype.getBaseValue.call(this, e, n) : r;
            }),
            (e.prototype.clean = function () {
              t.prototype.clean.call(this), (this.attrs = {});
            }),
            (e.prototype.read = function (t) {
              return (t = Nt.has(t) ? t : Zt(t)), this.element.getAttribute(t);
            }),
            (e.prototype.build = function () {
              this.updateTransformDeltas(),
                Wt(
                  this.latest,
                  this.style,
                  this.vars,
                  this.attrs,
                  this.transform,
                  this.transformOrigin,
                  this.transformKeys,
                  this.config,
                  this.dimensions,
                  this.totalPathLength,
                  this.isLayoutProjectionEnabled && !!this.box,
                  this.delta,
                  this.deltaFinal,
                  this.treeScale,
                  this.targetBoxFinal
                );
            }),
            (e.prototype.render = function () {
              for (var e in (t.prototype.render.call(this), this.attrs))
                this.element.setAttribute(Nt.has(e) ? e : Zt(e), this.attrs[e]);
            }),
            e
          );
        })(Dt);
      var _t = new Set([
        'animate',
        'circle',
        'clipPath',
        'defs',
        'desc',
        'ellipse',
        'feBlend',
        'feColorMatrix',
        'feComponentTransfer',
        'feComposite',
        'feConvolveMatrix',
        'feDiffuseLighting',
        'feDisplacementMap',
        'feDistantLight',
        'feDropShadow',
        'feFlood',
        'feFuncA',
        'feFuncB',
        'feFuncG',
        'feFuncR',
        'feGaussianBlur',
        'feImage',
        'feMerge',
        'feMergeNode',
        'feMorphology',
        'feOffset',
        'fePointLight',
        'feSpecularLighting',
        'feSpotLight',
        'feTile',
        'feTurbulence',
        'filter',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'marker',
        'mask',
        'metadata',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'switch',
        'symbol',
        'text',
        'textPath',
        'tspan',
        'use',
        'view',
      ]);
      function $t(t) {
        return 'string' === typeof t && _t.has(t);
      }
      var qt = Object(u.createContext)(null),
        Jt = Object(u.createContext)({ variantContext: {} });
      function Qt() {
        return Object(u.useContext)(Jt).variantContext;
      }
      function te() {
        return Object(u.useContext)(Jt).visualElement;
      }
      var ee = Object(u.createContext)(null),
        ne = Object(u.createContext)({
          transformPagePoint: function (t) {
            return t;
          },
          features: [],
          isStatic: !1,
        });
      function re(t) {
        return Object(u.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
      function ie(t, e, n, r) {
        return (
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n, r);
          }
        );
      }
      function oe(t, e, n, r) {
        Object(u.useEffect)(
          function () {
            var i = t.current;
            if (n && i) return ie(i, e, n, r);
          },
          [t, e, n, r]
        );
      }
      function ae(t) {
        return 'undefined' !== typeof PointerEvent && t instanceof PointerEvent
          ? !('mouse' !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function se(t) {
        return !!t.touches;
      }
      var ue = { pageX: 0, pageY: 0 };
      function ce(t, e) {
        void 0 === e && (e = 'page');
        var n = t.touches[0] || t.changedTouches[0] || ue;
        return { x: n[e + 'X'], y: n[e + 'Y'] };
      }
      function le(t, e) {
        return void 0 === e && (e = 'page'), { x: t[e + 'X'], y: t[e + 'Y'] };
      }
      function fe(t, e) {
        return void 0 === e && (e = 'page'), { point: se(t) ? ce(t, e) : le(t, e) };
      }
      function de(t) {
        return fe(t, 'client');
      }
      var pe = function (t, e) {
          void 0 === e && (e = !1);
          var n,
            r = function (e) {
              return t(e, fe(e));
            };
          return e
            ? ((n = r),
              function (t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && n(t);
              })
            : r;
        },
        ve = 'undefined' !== typeof window,
        he = {
          pointerdown: 'mousedown',
          pointermove: 'mousemove',
          pointerup: 'mouseup',
          pointercancel: 'mousecancel',
          pointerover: 'mouseover',
          pointerout: 'mouseout',
          pointerenter: 'mouseenter',
          pointerleave: 'mouseleave',
        },
        me = {
          pointerdown: 'touchstart',
          pointermove: 'touchmove',
          pointerup: 'touchend',
          pointercancel: 'touchcancel',
        };
      function ge(t) {
        return ve && null === window.onpointerdown
          ? t
          : ve && null === window.ontouchstart
          ? me[t]
          : ve && null === window.onmousedown
          ? he[t]
          : t;
      }
      function ye(t, e, n, r) {
        return ie(t, ge(e), pe(n, 'pointerdown' === e), r);
      }
      function be(t, e, n, r) {
        return oe(t, ge(e), n && pe(n, 'pointerdown' === e), r);
      }
      var xe = function (t) {
          return 1e3 * t;
        },
        Oe = (function () {
          function t(t, e, n) {
            var a = this,
              s = (void 0 === n ? {} : n).transformPagePoint;
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function () {
                if (a.lastMoveEvent && a.lastMoveEventInfo) {
                  var t = we(a.lastMoveEventInfo, a.history),
                    e = null !== a.startEvent,
                    n = Object(o.n)(t.offset, { x: 0, y: 0 }) >= 3;
                  if (e || n) {
                    var s = t.point,
                      u = Object(i.c)().timestamp;
                    a.history.push(Object(r.a)(Object(r.a)({}, s), { timestamp: u }));
                    var c = a.handlers,
                      l = c.onStart,
                      f = c.onMove;
                    e || (l && l(a.lastMoveEvent, t), (a.startEvent = a.lastMoveEvent)), f && f(a.lastMoveEvent, t);
                  }
                }
              }),
              (this.handlePointerMove = function (t, e) {
                (a.lastMoveEvent = t),
                  (a.lastMoveEventInfo = je(e, a.transformPagePoint)),
                  ae(t) && 0 === t.buttons ? a.handlePointerUp(t, e) : i.b.update(a.updatePoint, !0);
              }),
              (this.handlePointerUp = function (t, e) {
                a.end();
                var n = a.handlers.onEnd;
                if (n) {
                  var r = we(je(e, a.transformPagePoint), a.history);
                  n && n(t, r);
                }
              }),
              !(se(t) && t.touches.length > 1))
            ) {
              (this.handlers = e), (this.transformPagePoint = s);
              var u = je(fe(t), this.transformPagePoint),
                c = u.point,
                l = Object(i.c)().timestamp;
              this.history = [Object(r.a)(Object(r.a)({}, c), { timestamp: l })];
              var f = e.onSessionStart;
              f && f(t, we(u, this.history)),
                (this.removeListeners = Object(o.v)(
                  ye(window, 'pointermove', this.handlePointerMove),
                  ye(window, 'pointerup', this.handlePointerUp),
                  ye(window, 'pointercancel', this.handlePointerUp)
                ));
            }
          }
          return (
            (t.prototype.updateHandlers = function (t) {
              this.handlers = t;
            }),
            (t.prototype.end = function () {
              this.removeListeners && this.removeListeners(), i.a.update(this.updatePoint);
            }),
            t
          );
        })();
      function je(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function Ee(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function we(t, e) {
        var n = t.point;
        return { point: n, delta: Ee(n, Ae(e)), offset: Ee(n, Ce(e)), velocity: Pe(e, 0.1) };
      }
      function Ce(t) {
        return t[0];
      }
      function Ae(t) {
        return t[t.length - 1];
      }
      function Pe(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (var n = t.length - 1, r = null, i = Ae(t); n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > xe(e))); )
          n--;
        if (!r) return { x: 0, y: 0 };
        var o = (i.timestamp - r.timestamp) / 1e3;
        if (0 === o) return { x: 0, y: 0 };
        var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      var Se = function (t, e) {
          return !!e && (t === e || Se(t, e.parentElement));
        },
        ke = {
          linear: o.t,
          easeIn: o.o,
          easeInOut: o.p,
          easeOut: o.q,
          circIn: o.i,
          circInOut: o.j,
          circOut: o.k,
          backIn: o.c,
          backInOut: o.d,
          backOut: o.e,
          anticipate: o.b,
          bounceIn: o.f,
          bounceInOut: o.g,
          bounceOut: o.h,
        },
        Ve = function (t) {
          if (Array.isArray(t)) {
            Object(a.a)(4 === t.length, 'Cubic bezier arrays must contain four numerical values.');
            var e = Object(r.c)(t, 4),
              n = e[0],
              i = e[1],
              s = e[2],
              u = e[3];
            return Object(o.m)(n, i, s, u);
          }
          return 'string' === typeof t ? (Object(a.a)(void 0 !== ke[t], "Invalid easing type '" + t + "'"), ke[t]) : t;
        },
        Te = function (t, e) {
          return (
            'zIndex' !== t &&
            (!('number' !== typeof e && !Array.isArray(e)) ||
              !('string' !== typeof e || !s.c.test(e) || e.startsWith('url(')))
          );
        },
        Be = function () {
          return { type: 'spring', stiffness: 500, damping: 25, restDelta: 0.5, restSpeed: 10 };
        },
        Le = function (t) {
          return { type: 'spring', stiffness: 550, damping: 0 === t ? 100 : 30, restDelta: 0.01, restSpeed: 10 };
        },
        Re = function () {
          return { type: 'keyframes', ease: 'linear', duration: 0.3 };
        },
        Me = function (t) {
          return { type: 'keyframes', duration: 0.8, values: t };
        },
        De = {
          x: Be,
          y: Be,
          z: Be,
          rotate: Be,
          rotateX: Be,
          rotateY: Be,
          rotateZ: Be,
          scaleX: Le,
          scaleY: Le,
          scale: Le,
          opacity: Re,
          backgroundColor: Re,
          color: Re,
          default: Le,
        };
      var Fe = !1;
      function Ue(t) {
        var e = t.ease,
          n = t.times,
          i = t.yoyo,
          o = t.flip,
          s = t.loop,
          u = Object(r.d)(t, ['ease', 'times', 'yoyo', 'flip', 'loop']),
          c = Object(r.a)({}, u);
        return (
          n && (c.offset = n),
          u.duration && (c.duration = xe(u.duration)),
          u.repeatDelay && (c.repeatDelay = xe(u.repeatDelay)),
          e &&
            (c.ease = (function (t) {
              return Array.isArray(t) && 'number' !== typeof t[0];
            })(e)
              ? e.map(Ve)
              : Ve(e)),
          'tween' === u.type && (c.type = 'keyframes'),
          (i || s || o) &&
            (Object(a.b)(
              !Fe,
              'yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.'
            ),
            (Fe = !0),
            i ? (c.repeatType = 'reverse') : s ? (c.repeatType = 'loop') : o && (c.repeatType = 'mirror'),
            (c.repeat = s || i || o || u.repeat)),
          'spring' !== u.type && (c.type = 'keyframes'),
          c
        );
      }
      function Ie(t, e, n) {
        var i;
        return (
          Array.isArray(e.to) && ((null !== (i = t.duration) && void 0 !== i) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) && null === t.to[0] && ((t.to = Object(r.e)(t.to)), (t.to[0] = t.from));
          })(e),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from;
            var e = Object(r.d)(t, [
              'when',
              'delay',
              'delayChildren',
              'staggerChildren',
              'staggerDirection',
              'repeat',
              'repeatType',
              'repeatDelay',
              'from',
            ]);
            return !!Object.keys(e).length;
          })(t) ||
            (t = Object(r.a)(
              Object(r.a)({}, t),
              (function (t, e) {
                var n;
                return (n = pt(e) ? Me : De[t] || De.default), Object(r.a)({ to: e }, n(e));
              })(n, e.to)
            )),
          Object(r.a)(Object(r.a)({}, e), Ue(t))
        );
      }
      function He(t, e, n, i) {
        return (
          void 0 === i && (i = {}),
          e.start(function (s) {
            var u,
              c,
              l = (function (t, e, n, i, s) {
                var u,
                  c = (function (t, e) {
                    return t[e] || t.default || t;
                  })(i, t),
                  l = null !== (u = c.from) && void 0 !== u ? u : e.get(),
                  f = Te(t, n);
                'none' === l && f && 'string' === typeof n && (l = k(t, n));
                var d = Te(t, l);
                return (
                  Object(a.b)(
                    d === f,
                    'You are trying to animate ' +
                      t +
                      ' from "' +
                      l +
                      '" to "' +
                      n +
                      '". ' +
                      l +
                      ' is not an animatable value - to enable this animation set ' +
                      l +
                      ' to a value animatable to ' +
                      n +
                      ' via the `style` property.'
                  ),
                  d && f && !1 !== c.type
                    ? function () {
                        var i = {
                          from: l,
                          to: n,
                          velocity: e.getVelocity(),
                          onComplete: s,
                          onUpdate: function (t) {
                            return e.set(t);
                          },
                        };
                        return 'inertia' === c.type || 'decay' === c.type
                          ? Object(o.r)(Object(r.a)(Object(r.a)({}, i), c))
                          : Object(o.a)(
                              Object(r.a)(Object(r.a)({}, Ie(c, i, t)), {
                                onUpdate: function (t) {
                                  var e;
                                  i.onUpdate(t), null === (e = c.onUpdate) || void 0 === e || e.call(c, t);
                                },
                                onComplete: function () {
                                  var t;
                                  i.onComplete(), null === (t = c.onComplete) || void 0 === t || t.call(c);
                                },
                              })
                            );
                      }
                    : function () {
                        var t;
                        return (
                          e.set(n),
                          s(),
                          null === (t = null === c || void 0 === c ? void 0 : c.onComplete) ||
                            void 0 === t ||
                            t.call(c),
                          { stop: function () {} }
                        );
                      }
                );
              })(t, e, n, i, s),
              f = (function (t, e) {
                var n, r, i, o, a;
                return null !==
                  (a =
                    null !==
                      (o =
                        null !== (r = null === (n = t[e]) || void 0 === n ? void 0 : n.delay) && void 0 !== r
                          ? r
                          : null === (i = t.default) || void 0 === i
                          ? void 0
                          : i.delay) && void 0 !== o
                      ? o
                      : t.delay) && void 0 !== a
                  ? a
                  : 0;
              })(i, t),
              d = function () {
                return (c = l());
              };
            return (
              f ? (u = setTimeout(d, xe(f))) : d(),
              function () {
                clearTimeout(u), null === c || void 0 === c || c.stop();
              }
            );
          })
        );
      }
      function Ye(t, e, n) {
        var r;
        if ((t.onAnimationStart(), Array.isArray(e))) {
          var i = e.map(function (e) {
            return Xe(t, e, n);
          });
          r = Promise.all(i);
        } else r = 'string' === typeof e ? Xe(t, e, n) : ze(t, e, n);
        return r.then(function () {
          return t.onAnimationComplete();
        });
      }
      function Xe(t, e, n) {
        var i;
        void 0 === n && (n = {});
        var o = Pt(t, e, n.custom),
          a = (o || {}).transition,
          s = void 0 === a ? t.getDefaultTransition() || {} : a;
        n.transitionOverride && (s = n.transitionOverride);
        var u = o
            ? function () {
                return ze(t, o, n);
              }
            : function () {
                return Promise.resolve();
              },
          c = (null === (i = t.variantChildrenOrder) || void 0 === i ? void 0 : i.size)
            ? function (i) {
                void 0 === i && (i = 0);
                var o = s.delayChildren,
                  a = void 0 === o ? 0 : o,
                  u = s.staggerChildren,
                  c = s.staggerDirection;
                return (function (t, e, n, i, o, a) {
                  void 0 === n && (n = 0);
                  void 0 === i && (i = 0);
                  void 0 === o && (o = 1);
                  var s = [],
                    u = (t.variantChildrenOrder.size - 1) * i,
                    c =
                      1 === o
                        ? function (t) {
                            return void 0 === t && (t = 0), t * i;
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), u - t * i;
                          };
                  return (
                    Array.from(t.variantChildrenOrder).forEach(function (t, i) {
                      var o = Xe(t, e, Object(r.a)(Object(r.a)({}, a), { delay: n + c(i) }));
                      s.push(o);
                    }),
                    Promise.all(s)
                  );
                })(t, e, a + i, u, c, n);
              }
            : function () {
                return Promise.resolve();
              },
          l = s.when;
        if (l) {
          var f = Object(r.c)('beforeChildren' === l ? [u, c] : [c, u], 2),
            d = f[0],
            p = f[1];
          return d().then(p);
        }
        return Promise.all([u(), c(n.delay)]);
      }
      function ze(t, e, n) {
        var i,
          o = void 0 === n ? {} : n,
          a = o.delay,
          s = void 0 === a ? 0 : a,
          u = o.transitionOverride,
          c = o.type,
          l = t.makeTargetAnimatable(e),
          f = l.transition,
          d = void 0 === f ? t.getDefaultTransition() : f,
          p = l.transitionEnd,
          v = Object(r.d)(l, ['transition', 'transitionEnd']);
        u && (d = u);
        var h = [],
          m = c && (null === (i = t.animationState) || void 0 === i ? void 0 : i.getProtectedKeys(c));
        for (var g in v) {
          var y = t.getValue(g),
            b = v[g];
          if (y && void 0 !== b && void 0 === (null === m || void 0 === m ? void 0 : m[g])) {
            var x = He(g, y, b, Object(r.a)({ delay: s }, d));
            h.push(x);
          }
        }
        return Promise.all(h).then(function () {
          p && kt(t, p);
        });
      }
      var We,
        Ne = (function () {
          function t() {
            (this.hasMounted = !1), (this.pendingAnimations = []), (this.subscribers = new Set());
          }
          return (
            (t.prototype.subscribe = function (t) {
              var e = this;
              return (
                this.subscribers.add(t),
                function () {
                  return e.subscribers.delete(t);
                }
              );
            }),
            (t.prototype.start = function (t, e) {
              var n = this;
              if (this.hasMounted) {
                var r = [];
                return (
                  this.subscribers.forEach(function (n) {
                    r.push(Ye(n, t, { transitionOverride: e }));
                  }),
                  Promise.all(r)
                );
              }
              return new Promise(function (r) {
                n.pendingAnimations.push({ animation: [t, e], resolve: r });
              });
            }),
            (t.prototype.set = function (t) {
              return (
                Object(a.a)(
                  this.hasMounted,
                  'controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.'
                ),
                this.subscribers.forEach(function (e) {
                  Tt(e, t);
                })
              );
            }),
            (t.prototype.stop = function () {
              this.subscribers.forEach(function (t) {
                !(function (t) {
                  t.forEachValue(function (t) {
                    return t.stop();
                  });
                })(t);
              });
            }),
            (t.prototype.mount = function () {
              var t = this;
              (this.hasMounted = !0),
                this.pendingAnimations.forEach(function (e) {
                  var n = e.animation,
                    i = e.resolve;
                  t.start.apply(t, Object(r.e)(n)).then(i);
                });
            }),
            (t.prototype.unmount = function () {
              (this.hasMounted = !1), this.stop();
            }),
            t
          );
        })();
      !(function (t) {
        (t.Animate = 'animate'),
          (t.Hover = 'whileHover'),
          (t.Tap = 'whileTap'),
          (t.Drag = 'whileDrag'),
          (t.Focus = 'whileFocus'),
          (t.Exit = 'exit');
      })(We || (We = {}));
      var Ge = [We.Animate, We.Hover, We.Tap, We.Drag, We.Focus, We.Exit],
        Ze = Object(r.e)(Ge).reverse(),
        Ke = Ge.length;
      function _e(t) {
        var e,
          n,
          i = (function (t) {
            return function (e) {
              return Promise.all(
                e.map(function (e) {
                  var n = e.animation,
                    r = e.options;
                  return Ye(t, n, r);
                })
              );
            };
          })(t),
          o = (function () {
            var t;
            return (
              ((t = {})[We.Animate] = $e(!0)),
              (t[We.Hover] = $e()),
              (t[We.Tap] = $e()),
              (t[We.Drag] = $e()),
              (t[We.Focus] = $e()),
              (t[We.Exit] = $e()),
              t
            );
          })(),
          a = !0,
          s = function (e, n) {
            var i = Pt(t, n);
            if (i) {
              i.transition;
              var o = i.transitionEnd,
                a = Object(r.d)(i, ['transition', 'transitionEnd']);
              e = Object(r.a)(Object(r.a)(Object(r.a)({}, e), a), o);
            }
            return e;
          };
        function u(u, c, l, f) {
          void 0 === c && (c = {}), (e = u), (n = c);
          var d = [],
            p = new Set(),
            v = {};
          u.variants && t.updateConfig(Object(r.a)(Object(r.a)({}, t.config), { variants: u.variants }));
          for (
            var h = 1 / 0,
              m = function (e) {
                var n,
                  i = Ze[e],
                  m = o[i],
                  g = null !== (w = u[i]) && void 0 !== w ? w : c[i],
                  y = 'string' === typeof (n = g) || At(n),
                  b = i === f ? m.isActive : null;
                !1 === b && (h = e);
                var x = g === c[i] && y;
                if (
                  (x && a && t.manuallyAnimateOnMount && (x = !1),
                  a && i === We.Animate && t.prevSnapshot && ((a = !1), (m.prevResolvedValues = t.prevSnapshot)),
                  (m.protectedKeys = Object(r.a)({}, v)),
                  (!m.isActive && null === b) || (!g && !m.prevProp) || g instanceof Ne || 'boolean' === typeof g)
                )
                  return 'continue';
                var O =
                    (function (t, e) {
                      if ('string' === typeof e) return e !== t;
                      if (At(e))
                        return !(function (t, e) {
                          if (!Array.isArray(e)) return !1;
                          var n = e.length;
                          if (n !== t.length) return !1;
                          for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
                          return !0;
                        })(e, t);
                      return !1;
                    })(m.prevProp, g) ||
                    (i === f && m.isActive && !x && y) ||
                    (e > h && y),
                  j = Array.isArray(g) ? g : [g],
                  E = j.reduce(s, {});
                !1 === b && (E = {});
                var w = m.prevResolvedValues,
                  C = void 0 === w ? {} : w,
                  A = Object(r.a)(Object(r.a)({}, C), E);
                for (var P in A) {
                  var S = E[P],
                    k = C[P];
                  v.hasOwnProperty(P) ||
                    (S !== k
                      ? void 0 !== S
                        ? ((O = !0), p.delete(P))
                        : p.add(P)
                      : void 0 !== S && p.has(P)
                      ? ((O = !0), p.delete(P))
                      : (m.protectedKeys[P] = !0));
                }
                (m.prevProp = g),
                  (m.prevResolvedValues = E),
                  m.isActive && (v = Object(r.a)(Object(r.a)({}, v), E)),
                  O &&
                    !x &&
                    d.push.apply(
                      d,
                      Object(r.e)(
                        j.map(function (t) {
                          return { animation: t, options: Object(r.a)({ type: i }, l) };
                        })
                      )
                    );
              },
              g = 0;
            g < Ke;
            g++
          )
            m(g);
          if (p.size) {
            var y = {};
            p.forEach(function (e) {
              var n = t.getBaseValue(e, u);
              void 0 !== n && (y[e] = n);
            }),
              d.push({ animation: y });
          }
          var b = Boolean(d.length);
          return a && !1 === u.initial && !t.manuallyAnimateOnMount && (b = !1), (a = !1), b ? i(d) : Promise.resolve();
        }
        return {
          getProtectedKeys: function (t) {
            return o[t].protectedKeys;
          },
          setProps: u,
          setActive: function (r, i, a) {
            var s;
            return o[r].isActive === i
              ? Promise.resolve()
              : (null === (s = t.variantChildrenOrder) ||
                  void 0 === s ||
                  s.forEach(function (t) {
                    var e;
                    return null === (e = t.animationState) || void 0 === e ? void 0 : e.setActive(r, i);
                  }),
                (o[r].isActive = i),
                u(e, n, a, r));
          },
          setAnimateFunction: function (e) {
            i = e(t);
          },
        };
      }
      function $e(t) {
        return void 0 === t && (t = !1), { isActive: t, protectedKeys: {}, prevResolvedValues: {} };
      }
      function qe(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var Je = qe('dragHorizontal'),
        Qe = qe('dragVertical');
      function tn(t) {
        var e = !1;
        if ('y' === t) e = Qe();
        else if ('x' === t) e = Je();
        else {
          var n = Je(),
            r = Qe();
          n && r
            ? (e = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return e;
      }
      function en(t, e) {
        var n = t.onTap,
          r = t.onTapStart,
          i = t.onTapCancel,
          a = t.whileTap,
          s = n || r || i || a,
          c = Object(u.useRef)(!1),
          l = Object(u.useRef)(null);
        function f() {
          var t;
          null === (t = l.current) || void 0 === t || t.call(l), (l.current = null);
        }
        function d() {
          var t;
          return (
            (c.current = !1),
            null === (t = e.animationState) || void 0 === t || t.setActive(We.Tap, !1),
            !(function () {
              var t = tn(!0);
              return !t || (t(), !1);
            })()
          );
        }
        function p(t, r) {
          d() &&
            (Se(e.getInstance(), t.target)
              ? null === n || void 0 === n || n(t, r)
              : null === i || void 0 === i || i(t, r));
        }
        function v(t, e) {
          d() && (null === i || void 0 === i || i(t, e));
        }
        be(
          e,
          'pointerdown',
          s
            ? function (t, n) {
                var i;
                f(),
                  c.current ||
                    ((c.current = !0),
                    (l.current = Object(o.v)(ye(window, 'pointerup', p), ye(window, 'pointercancel', v))),
                    null === r || void 0 === r || r(t, n),
                    null === (i = e.animationState) || void 0 === i || i.setActive(We.Tap, !0));
              }
            : void 0
        ),
          re(f);
      }
      function nn(t, e, n) {
        return function (r, i) {
          var o;
          ae(r) &&
            t.isHoverEventsEnabled &&
            (null === n || void 0 === n || n(r, i),
            null === (o = t.animationState) || void 0 === o || o.setActive(We.Hover, e));
        };
      }
      function rn(t, e) {
        !(function (t, e) {
          var n = t.onPan,
            r = t.onPanStart,
            i = t.onPanEnd,
            o = t.onPanSessionStart,
            a = n || r || i || o,
            s = Object(u.useRef)(null),
            c = Object(u.useContext)(ne).transformPagePoint,
            l = {
              onSessionStart: o,
              onStart: r,
              onMove: n,
              onEnd: function (t, e) {
                (s.current = null), i && i(t, e);
              },
            };
          Object(u.useEffect)(function () {
            null !== s.current && s.current.updateHandlers(l);
          }),
            be(
              e,
              'pointerdown',
              a &&
                function (t) {
                  s.current = new Oe(t, l, { transformPagePoint: c });
                }
            ),
            re(function () {
              return s.current && s.current.end();
            });
        })(t, e),
          en(t, e),
          (function (t, e) {
            var n = t.onHoverStart,
              r = t.onHoverEnd,
              i = t.whileHover;
            be(e, 'pointerenter', n || i ? nn(e, !0, n) : void 0),
              be(e, 'pointerleave', r || i ? nn(e, !1, r) : void 0);
          })(t, e),
          (function (t, e) {
            var n = t.whileFocus;
            oe(
              e,
              'focus',
              n
                ? function () {
                    var t;
                    null === (t = e.animationState) || void 0 === t || t.setActive(We.Focus, !0);
                  }
                : void 0
            ),
              oe(
                e,
                'blur',
                n
                  ? function () {
                      var t;
                      null === (t = e.animationState) || void 0 === t || t.setActive(We.Focus, !1);
                    }
                  : void 0
              );
          })(t, e);
      }
      var on = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        an = [
          'onPan',
          'onPanStart',
          'onPanEnd',
          'onPanSessionStart',
          'onTap',
          'onTapStart',
          'onTapCancel',
          'onHoverStart',
          'onHoverEnd',
          'whileFocus',
          'whileTap',
          'whileHover',
        ],
        sn = on(function (t) {
          var e = t.visualElement;
          rn(Object(r.d)(t, ['visualElement']), e);
        }),
        un = {
          key: 'gestures',
          shouldRender: function (t) {
            return an.some(function (e) {
              return t.hasOwnProperty(e);
            });
          },
          getComponent: function () {
            return sn;
          },
        },
        cn = new Set(
          Object(r.e)(
            [
              'initial',
              'animate',
              'exit',
              'style',
              'variants',
              'transition',
              'transformTemplate',
              'transformValues',
              'custom',
              'inherit',
              'layout',
              'layoutId',
              'onLayoutAnimationComplete',
              'onViewportBoxUpdate',
              'onAnimationStart',
              'onAnimationComplete',
              'onUpdate',
              'onDragStart',
              'onDrag',
              'onDragEnd',
              'onMeasureDragConstraints',
              'onDirectionLock',
              'onDragTransitionEnd',
              'drag',
              'dragControls',
              'dragListener',
              'dragConstraints',
              'dragDirectionLock',
              '_dragX',
              '_dragY',
              'dragElastic',
              'dragMomentum',
              'dragPropagation',
              'dragTransition',
              'whileDrag',
            ],
            an
          )
        );
      function ln(t) {
        return cn.has(t);
      }
      var fn = function (t) {
        return !ln(t);
      };
      try {
        var dn = n('9uj6').default;
        fn = function (t) {
          return t.startsWith('on') ? !ln(t) : dn(t);
        };
      } catch (kr) {}
      function pn(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return R(t) || D(t) || ((n || void 0 !== r) && !!Z[t]);
      }
      function vn(t, e, n, r, i) {
        for (var o in (void 0 === r && (r = !1), r && (t.reactStyle = {}), n)) {
          var a = n[o],
            s = !1;
          if (Mt(a)) gn.has(o) || (t.addValue(o, a), (s = !0));
          else if (pn(o, i)) {
            if (t.hasValue(o)) {
              if (a !== e[o]) {
                if (Mt(e[o])) t.addValue(o, p(a));
                else t.getValue(o).set(a);
              }
            } else t.addValue(o, p(a));
            s = !0;
          } else r && (t.reactStyle[o] = a);
          s && (e[o] = a);
        }
      }
      var hn,
        mn,
        gn = new Set([]),
        yn = function () {
          return {};
        };
      !(function (t) {
        (t[(t.Entering = 0)] = 'Entering'), (t[(t.Present = 1)] = 'Present'), (t[(t.Exiting = 2)] = 'Exiting');
      })(hn || (hn = {})),
        (function (t) {
          (t[(t.Hide = 0)] = 'Hide'), (t[(t.Show = 1)] = 'Show');
        })(mn || (mn = {}));
      var bn = {
          measureLayout: function (t) {
            return t.measureLayout();
          },
          layoutReady: function (t) {
            return t.layoutReady();
          },
        },
        xn = function (t, e) {
          return t.depth - e.depth;
        };
      function On() {
        var t = new Set();
        return {
          add: function (e) {
            return t.add(e);
          },
          flush: function (e) {
            var n = void 0 === e ? bn : e,
              r = n.measureLayout,
              i = n.layoutReady,
              o = n.parent,
              a = Array.from(t).sort(xn),
              s = function () {
                a.forEach(function (t) {
                  return t.resetTransform();
                }),
                  a.forEach(r);
              };
            o ? o.withoutTransform(s) : s(),
              a.forEach(i),
              a.forEach(function (t) {
                t.isPresent && (t.presence = hn.Present);
              }),
              t.clear();
          },
        };
      }
      function jn(t) {
        return !!t.forceUpdate;
      }
      var En = Object(u.createContext)(On()),
        wn = Object(u.createContext)(On()),
        Cn = 'undefined' !== typeof window ? u.useLayoutEffect : u.useEffect;
      function An() {
        var t = Object(u.useContext)(qt);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          i = Vn();
        Object(u.useEffect)(function () {
          return r(i);
        }, []);
        return !e && n
          ? [
              !1,
              function () {
                return null === n || void 0 === n ? void 0 : n(i);
              },
            ]
          : [!0];
      }
      function Pn(t) {
        return null === t || t.isPresent;
      }
      var Sn = 0,
        kn = function () {
          return Sn++;
        },
        Vn = function () {
          return Ut(kn);
        };
      function Tn(t, e) {
        void 0 === e && (e = !1);
        var n = Object(u.useRef)(!0);
        (!e || (e && n.current)) && t(), (n.current = !1);
      }
      function Bn(t) {
        var e = t.animate,
          n = t.variants,
          r = t.inherit;
        return null !== r && void 0 !== r ? r : !!n && !e;
      }
      function Ln(t, e, n) {
        var r,
          i,
          o,
          a = Qt(),
          s = Object(u.useContext)(qt),
          c = Bn(e),
          l = [],
          f = {},
          d = !1;
        (function (t) {
          var e;
          return (
            'function' === typeof (null === (e = t.animate) || void 0 === e ? void 0 : e.start) ||
            Dn(t.animate) ||
            Dn(t.whileHover) ||
            Dn(t.whileDrag) ||
            Dn(t.whileTap) ||
            Dn(t.whileFocus) ||
            Dn(t.exit)
          );
        })(e) && ((d = !0), (a = {}));
        for (var p = d || e.variants, v = 0; v < Mn; v++) {
          var h = Rn[v],
            m = e[h],
            g = a[h];
          Dn(m) || !1 === m ? ((f[h] = m), l.push(m)) : ((Dn(g) || !1 === g) && (f[h] = g), l.push(null)),
            l.push(Dn(g) ? g : null);
        }
        var y = null !== (r = e.animate) && void 0 !== r ? r : f.animate,
          b = e.initial;
        void 0 !== b || (!Dn(y) && !1 === f.initial) || (b = f.initial),
          !1 === (null === s || void 0 === s ? void 0 : s.initial) && (b = f.initial = !1),
          (f.parent = p ? t : a.parent),
          Tn(function () {
            var e,
              n = !1 === b ? y : b;
            n && 'boolean' !== typeof n && ('object' !== typeof (e = n) || 'function' !== typeof e.start) && Tt(t, n);
          }, !n),
          Tn(function () {
            t.forEachValue(function (e, n) {
              t.baseTarget[n] = e.get();
            });
          }, !0);
        var x,
          O = Object(u.useMemo)(function () {
            return f;
          }, l);
        return (
          p &&
            c &&
            !d &&
            ((x = null === (i = a.parent) || void 0 === i ? void 0 : i.addVariantChild(t)), (t.inheritsVariants = !0)),
          !d &&
            c &&
            (null === (o = t.parent) || void 0 === o ? void 0 : o.isMounted) &&
            !1 !== b &&
            y &&
            (t.manuallyAnimateOnMount = !0),
          Object(u.useEffect)(function () {
            return (
              (t.isMounted = !0),
              function () {
                (t.isMounted = !1), null === x || void 0 === x || x();
              }
            );
          }, []),
          Cn(function () {
            var e;
            Pn(s) && (null === (e = t.variantChildrenOrder) || void 0 === e || e.clear());
          }),
          Object(u.useEffect)(function () {
            var e;
            p && (null === (e = a.parent) || void 0 === e || e.addVariantChildOrder(t));
          }),
          O
        );
      }
      var Rn = Object(r.e)(['initial'], Ge),
        Mn = Rn.length;
      function Dn(t) {
        return 'string' === typeof t || Array.isArray(t);
      }
      function Fn(t, e) {
        var n = e.defaultFeatures,
          i = e.useVisualElement,
          o = e.useRender;
        return Object(u.forwardRef)(function (e, a) {
          var s = Object(u.useContext)(ne).isStatic,
            c = i(t, e, s, a);
          !(function (t, e) {
            var n = Ut(yn);
            for (var r in n) {
              var i = pn(r, e),
                o = void 0 !== e[r],
                a = e.style && void 0 !== e.style[r],
                s = o && Mt(e[r]),
                u = a && Mt(e.style[r]);
              ((i && !o && !a) || (!i && !s && !u)) && (t.removeValue(r), delete n[r]);
            }
            vn(t, n, e, !1, e),
              e.style && vn(t, n, e.style, !0, e),
              e.transformValues && (t.reactStyle = e.transformValues(t.reactStyle));
          })(c, e);
          var l = Ln(c, e, s),
            f = (function (t, e, n, i) {
              var o = Object(u.useContext)(ne);
              if (e || 'undefined' === typeof window) return null;
              for (var a = Object(r.e)(t, o.features), s = a.length, c = [], l = 0; l < s; l++) {
                var f = a[l],
                  d = f.shouldRender,
                  p = f.key,
                  v = f.getComponent;
                if (d(i)) {
                  var h = v(i);
                  h && c.push(Object(u.createElement)(h, Object(r.a)({ key: p }, i, { visualElement: n })));
                }
              }
              return c;
            })(n, s, c, e),
            d = Object(u.useMemo)(
              function () {
                return { visualElement: c, variantContext: l };
              },
              [c, l]
            ),
            p = o(t, e, c);
          return (
            (function (t) {
              var e = Object(u.useContext)(En),
                n = Object(u.useContext)(wn);
              Cn(function () {
                return function () {
                  jn(e) && e.remove(t), jn(n) && n.remove(t);
                };
              }, []);
            })(c),
            Object(u.createElement)(u.Fragment, null, Object(u.createElement)(Jt.Provider, { value: d }, p), f)
          );
        });
      }
      function Un(t, e, n) {
        var r = e.min,
          i = e.max;
        return (
          void 0 !== r && t < r
            ? (t = n ? Object(o.u)(r, t, n) : Math.max(t, r))
            : void 0 !== i && t > i && (t = n ? Object(o.u)(i, t, n) : Math.min(t, i)),
          t
        );
      }
      function In(t, e, n) {
        return { min: void 0 !== e ? t.min + e : void 0, max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0 };
      }
      function Hn(t, e) {
        var n,
          i = e.min - t.min,
          o = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ((i = (n = Object(r.c)([o, i], 2))[0]), (o = n[1])),
          { min: t.min + i, max: t.min + o }
        );
      }
      var Yn,
        Xn = new WeakMap(),
        zn = (function () {
          function t(t) {
            var e = t.visualElement;
            (this.isDragging = !1),
              (this.currentDirection = null),
              (this.constraints = !1),
              (this.props = {}),
              (this.hasMutatedConstraints = !1),
              (this.cursorProgress = { x: 0.5, y: 0.5 }),
              (this.originPoint = {}),
              (this.openGlobalLock = null),
              (this.panSession = null),
              (this.visualElement = e),
              this.visualElement.enableLayoutProjection(),
              Xn.set(e, this);
          }
          return (
            (t.prototype.start = function (t, e) {
              var n = this,
                r = void 0 === e ? {} : e,
                i = r.snapToCursor,
                a = void 0 !== i && i,
                s = r.cursorProgress;
              a && this.snapToCursor(t);
              var u = this.props.transformPagePoint;
              this.panSession = new Oe(
                t,
                {
                  onSessionStart: function () {
                    n.stopMotion();
                  },
                  onStart: function (t, e) {
                    var r,
                      i,
                      a,
                      u = n.props,
                      c = u.drag,
                      l = u.dragPropagation;
                    if (
                      !c ||
                      l ||
                      (n.openGlobalLock && n.openGlobalLock(), (n.openGlobalLock = tn(c)), n.openGlobalLock)
                    ) {
                      n.prepareBoundingBox(), n.visualElement.lockTargetBox(), n.resolveDragConstraints();
                      var f = de(t).point;
                      lt(function (t) {
                        var e = n.visualElement.targetBox[t],
                          r = e.min,
                          i = e.max;
                        n.cursorProgress[t] = s ? s[t] : Object(o.w)(r, i, f[t]);
                        var a = n.getAxisMotionValue(t);
                        a && (n.originPoint[t] = a.get());
                      }),
                        (n.isDragging = !0),
                        (n.currentDirection = null),
                        null === (i = (r = n.props).onDragStart) || void 0 === i || i.call(r, t, e),
                        null === (a = n.visualElement.animationState) || void 0 === a || a.setActive(We.Drag, !0);
                    }
                  },
                  onMove: function (t, e) {
                    var r,
                      i,
                      o,
                      a,
                      s = n.props,
                      u = s.dragPropagation,
                      c = s.dragDirectionLock;
                    if (u || n.openGlobalLock) {
                      var l = e.offset;
                      if (c && null === n.currentDirection)
                        return (
                          (n.currentDirection = (function (t, e) {
                            void 0 === e && (e = 10);
                            var n = null;
                            Math.abs(t.y) > e ? (n = 'y') : Math.abs(t.x) > e && (n = 'x');
                            return n;
                          })(l)),
                          void (
                            null !== n.currentDirection &&
                            (null === (i = (r = n.props).onDirectionLock) ||
                              void 0 === i ||
                              i.call(r, n.currentDirection))
                          )
                        );
                      n.updateAxis('x', t, l),
                        n.updateAxis('y', t, l),
                        null === (a = (o = n.props).onDrag) || void 0 === a || a.call(o, t, e),
                        (Yn = t);
                    }
                  },
                  onEnd: function (t, e) {
                    return n.stop(t, e);
                  },
                },
                { transformPagePoint: u }
              );
            }),
            (t.prototype.prepareBoundingBox = function () {
              var t = this.visualElement;
              t.withoutTransform(function () {
                t.measureLayout();
              }),
                t.rebaseTargetBox(!0, t.getBoundingBoxWithoutTransforms());
            }),
            (t.prototype.resolveDragConstraints = function () {
              var t = this,
                e = this.props.dragConstraints;
              (this.constraints =
                !!e &&
                (l(e)
                  ? this.resolveRefConstraints(this.visualElement.box, e)
                  : (function (t, e) {
                      var n = e.top,
                        r = e.left,
                        i = e.bottom,
                        o = e.right;
                      return { x: In(t.x, r, o), y: In(t.y, n, i) };
                    })(this.visualElement.box, e))),
                this.constraints &&
                  !this.hasMutatedConstraints &&
                  lt(function (e) {
                    t.getAxisMotionValue(e) &&
                      (t.constraints[e] = (function (t, e) {
                        var n = {};
                        return (
                          void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
                        );
                      })(t.visualElement.box[e], t.constraints[e]));
                  });
            }),
            (t.prototype.resolveRefConstraints = function (t, e) {
              var n = this.props,
                r = n.onMeasureDragConstraints,
                i = n.transformPagePoint,
                o = e.current;
              Object(a.a)(
                null !== o,
                "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
              ),
                (this.constraintsBox = ft(o, i));
              var s = (function (t, e) {
                return { x: Hn(t.x, e.x), y: Hn(t.y, e.y) };
              })(t, this.constraintsBox);
              if (r) {
                var u = r(
                  (function (t) {
                    var e = t.x,
                      n = t.y;
                    return { top: n.min, bottom: n.max, left: e.min, right: e.max };
                  })(s)
                );
                (this.hasMutatedConstraints = !!u), u && (s = m(u));
              }
              return s;
            }),
            (t.prototype.cancelDrag = function () {
              var t;
              (this.isDragging = !1),
                this.panSession && this.panSession.end(),
                (this.panSession = null),
                !this.props.dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (t = this.visualElement.animationState) || void 0 === t || t.setActive(We.Drag, !1);
            }),
            (t.prototype.stop = function (t, e) {
              var n;
              this.visualElement.unlockTargetBox(),
                null === (n = this.panSession) || void 0 === n || n.end(),
                (this.panSession = null);
              var r = this.isDragging;
              if ((this.cancelDrag(), r)) {
                var i = this.props,
                  o = i.dragMomentum,
                  a = i.dragElastic,
                  s = i.onDragEnd;
                if (o || a) {
                  var u = e.velocity;
                  this.animateDragEnd(u);
                }
                null === s || void 0 === s || s(t, e);
              }
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this;
              this.prepareBoundingBox(),
                lt(function (n) {
                  if (Wn(n, e.props.drag, e.currentDirection)) {
                    var r = e.getAxisMotionValue(n);
                    if (r) {
                      var i = de(t).point,
                        o = e.visualElement.box,
                        a = o[n].max - o[n].min,
                        s = o[n].min + a / 2,
                        u = i[n] - s;
                      (e.originPoint[n] = i[n]), r.set(u);
                    } else (e.cursorProgress[n] = 0.5), e.updateVisualElementAxis(n, t);
                  }
                });
            }),
            (t.prototype.updateAxis = function (t, e, n) {
              if (Wn(t, this.props.drag, this.currentDirection))
                return this.getAxisMotionValue(t)
                  ? this.updateAxisMotionValue(t, n)
                  : this.updateVisualElementAxis(t, e);
            }),
            (t.prototype.updateAxisMotionValue = function (t, e) {
              var n = this.getAxisMotionValue(t);
              if (e && n) {
                var r = this.props.dragElastic,
                  i = this.originPoint[t] + e[t],
                  o = this.constraints ? Un(i, this.constraints[t], r) : i;
                n.set(o);
              }
            }),
            (t.prototype.updateVisualElementAxis = function (t, e) {
              var n,
                r = this.props.dragElastic,
                i = this.visualElement.box[t],
                o = i.max - i.min,
                a = this.cursorProgress[t],
                s = (function (t, e, n, r, i) {
                  var o = t - e * n;
                  return r ? Un(o, r, i) : o;
                })(de(e).point[t], o, a, null === (n = this.constraints) || void 0 === n ? void 0 : n[t], r);
              this.visualElement.setAxisTarget(t, s, s + o);
            }),
            (t.prototype.updateProps = function (t) {
              var e = t.drag,
                n = void 0 !== e && e,
                i = t.dragDirectionLock,
                o = void 0 !== i && i,
                a = t.dragPropagation,
                s = void 0 !== a && a,
                u = t.dragConstraints,
                c = void 0 !== u && u,
                l = t.dragElastic,
                f = void 0 === l ? 0.35 : l,
                d = t.dragMomentum,
                p = void 0 === d || d,
                v = Object(r.d)(t, [
                  'drag',
                  'dragDirectionLock',
                  'dragPropagation',
                  'dragConstraints',
                  'dragElastic',
                  'dragMomentum',
                ]);
              this.props = Object(r.a)(
                {
                  drag: n,
                  dragDirectionLock: o,
                  dragPropagation: s,
                  dragConstraints: c,
                  dragElastic: f,
                  dragMomentum: p,
                },
                v
              );
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e = this.props,
                n = e.layout,
                r = e.layoutId,
                i = '_drag' + t.toUpperCase();
              return this.props[i] ? this.props[i] : n || void 0 !== r ? void 0 : this.visualElement.getValue(t, 0);
            }),
            (t.prototype.animateDragEnd = function (t) {
              var e = this,
                n = this.props,
                i = n.drag,
                o = n.dragMomentum,
                a = n.dragElastic,
                s = n.dragTransition,
                u = lt(function (n) {
                  if (Wn(n, i, e.currentDirection)) {
                    var u = e.constraints ? e.constraints[n] : {},
                      c = a ? 200 : 1e6,
                      l = a ? 40 : 1e7,
                      f = Object(r.a)(
                        Object(r.a)(
                          {
                            type: 'inertia',
                            velocity: o ? t[n] : 0,
                            bounceStiffness: c,
                            bounceDamping: l,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          },
                          s
                        ),
                        u
                      );
                    return e.getAxisMotionValue(n)
                      ? e.startAxisValueAnimation(n, f)
                      : e.visualElement.startLayoutAxisAnimation(n, f);
                  }
                });
              return Promise.all(u).then(function () {
                var t, n;
                null === (n = (t = e.props).onDragTransitionEnd) || void 0 === n || n.call(t);
              });
            }),
            (t.prototype.stopMotion = function () {
              var t = this;
              lt(function (e) {
                var n = t.getAxisMotionValue(e);
                n ? n.stop() : t.visualElement.stopLayoutAnimation();
              });
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              var n = this.getAxisMotionValue(t);
              if (n) {
                var r = n.get();
                return n.set(r), n.set(r), He(t, n, 0, e);
              }
            }),
            (t.prototype.scalePoint = function () {
              var t = this,
                e = this.props,
                n = e.drag,
                r = e.dragConstraints;
              if (l(r) && this.constraintsBox) {
                this.stopMotion();
                var i = { x: 0, y: 0 };
                lt(function (e) {
                  i[e] = st(t.visualElement.targetBox[e], t.constraintsBox[e]);
                }),
                  this.prepareBoundingBox(),
                  this.resolveDragConstraints(),
                  lt(function (e) {
                    if (Wn(e, n, null)) {
                      var r = (function (t, e, n) {
                          var r = t.max - t.min,
                            i = Object(o.u)(e.min, e.max - r, n);
                          return { min: i, max: i + r };
                        })(t.visualElement.targetBox[e], t.constraintsBox[e], i[e]),
                        a = r.min,
                        s = r.max;
                      t.visualElement.setAxisTarget(e, a, s);
                    }
                  });
              }
            }),
            (t.prototype.mount = function (t) {
              var e = this,
                n = ye(t.getInstance(), 'pointerdown', function (t) {
                  var n = e.props,
                    r = n.drag,
                    i = n.dragListener;
                  r && (void 0 === i || i) && e.start(t);
                }),
                r = ie(window, 'resize', function () {
                  e.scalePoint();
                }),
                i = t.onLayoutUpdate(function () {
                  e.isDragging && e.resolveDragConstraints();
                }),
                o = t.prevSnapshot;
              return (
                (null === o || void 0 === o ? void 0 : o.isDragging) &&
                  this.start(Yn, { cursorProgress: o.cursorProgress }),
                function () {
                  null === n || void 0 === n || n(),
                    null === r || void 0 === r || r(),
                    null === i || void 0 === i || i(),
                    e.cancelDrag();
                }
              );
            }),
            t
          );
        })();
      function Wn(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var Nn = on(function (t) {
          var e = t.visualElement;
          return (function (t, e) {
            var n = t.dragControls,
              i = Object(u.useContext)(ne).transformPagePoint,
              o = Ut(function () {
                return new zn({ visualElement: e });
              });
            o.updateProps(Object(r.a)(Object(r.a)({}, t), { transformPagePoint: i })),
              Object(u.useEffect)(
                function () {
                  return n && n.subscribe(o);
                },
                [o]
              ),
              Object(u.useEffect)(function () {
                return o.mount(e);
              }, []);
          })(Object(r.d)(t, ['visualElement']), e);
        }),
        Gn = {
          key: 'drag',
          shouldRender: function (t) {
            return !!t.drag || !!t.dragControls;
          },
          getComponent: function () {
            return Nn;
          },
        },
        Zn = on(function (t) {
          var e = t.custom,
            n = t.visualElement,
            i = Object(r.c)(An(), 2),
            o = i[0],
            a = i[1],
            s = Object(u.useContext)(qt);
          Object(u.useEffect)(
            function () {
              var t,
                r,
                i =
                  null === (t = n.animationState) || void 0 === t
                    ? void 0
                    : t.setActive(We.Exit, !o, {
                        custom: null !== (r = null === s || void 0 === s ? void 0 : s.custom) && void 0 !== r ? r : e,
                      });
              !o && (null === i || void 0 === i || i.then(a));
            },
            [o]
          );
        }),
        Kn = {
          key: 'exit',
          shouldRender: function (t) {
            return !!t.exit && !Bn(t);
          },
          getComponent: function () {
            return Zn;
          },
        };
      var _n = on(function (t) {
          var e = t.visualElement,
            n = t.animate;
          e.animationState || (e.animationState = _e(e));
          var r = Qt();
          Object(u.useEffect)(function () {
            e.animationState.setProps(t, e.inheritsVariants ? r : void 0);
          }),
            n instanceof Ne &&
              (function (t, e) {
                var n = Object(u.useMemo)(
                  function () {
                    return e.subscribe(t);
                  },
                  [e]
                );
                re(function () {
                  return null === n || void 0 === n ? void 0 : n();
                });
              })(e, n);
        }),
        $n = {
          key: 'animation',
          shouldRender: function () {
            return !0;
          },
          getComponent: function (t) {
            var e = t.animate,
              n = t.whileHover,
              r = t.whileFocus,
              i = t.whileTap,
              o = t.whileDrag,
              a = t.exit,
              s = t.variants;
            return e || n || r || i || o || a || s ? _n : void 0;
          },
        };
      var qn = (function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (
            (e.frameTarget = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
            (e.stopAxisAnimation = { x: void 0, y: void 0 }),
            (e.animate = function (t, n, i) {
              void 0 === i && (i = {});
              var o = i.originBox,
                a = i.targetBox,
                s = i.visibilityAction,
                u = i.shouldStackAnimate,
                c = Object(r.d)(i, ['originBox', 'targetBox', 'visibilityAction', 'shouldStackAnimate']),
                l = e.props,
                f = l.visualElement,
                d = l.layout;
              if (!1 === u) return e.safeToRemove();
              var p = Qn((n = o || n), (t = a || t)),
                v = lt(function (r) {
                  if ('position' === d) {
                    var i = t[r].max - t[r].min;
                    n[r].max = n[r].min + i;
                  }
                  if (!f.isTargetBoxLocked)
                    return void 0 === s
                      ? p
                        ? e.animateAxis(r, t[r], n[r], c)
                        : f.setAxisTarget(r, t[r].min, t[r].max)
                      : void (s === mn.Hide ? f.hide() : f.show());
                });
              return (
                f.render(),
                Promise.all(v).then(function () {
                  var t, n;
                  null === (n = (t = e.props).onLayoutAnimationComplete) || void 0 === n || n.call(t),
                    f.isPresent ? (f.presence = hn.Present) : e.safeToRemove();
                })
              );
            }),
            e
          );
        }
        return (
          Object(r.b)(e, t),
          (e.prototype.componentDidMount = function () {
            var t = this,
              e = this.props.visualElement;
            (e.animateMotionValue = He),
              e.enableLayoutProjection(),
              (this.unsubLayoutReady = e.onLayoutUpdate(this.animate)),
              e.updateConfig(
                Object(r.a)(Object(r.a)({}, e.config), {
                  safeToRemove: function () {
                    return t.safeToRemove();
                  },
                })
              );
          }),
          (e.prototype.componentWillUnmount = function () {
            var t = this;
            this.unsubLayoutReady(),
              lt(function (e) {
                var n, r;
                return null === (r = (n = t.stopAxisAnimation)[e]) || void 0 === r ? void 0 : r.call(n);
              });
          }),
          (e.prototype.animateAxis = function (t, e, n, r) {
            var i,
              a,
              s = void 0 === r ? {} : r,
              u = s.transition,
              c = s.crossfadeOpacity;
            null === (a = (i = this.stopAxisAnimation)[t]) || void 0 === a || a.call(i);
            var l,
              f = this.props.visualElement,
              d = this.frameTarget[t],
              p = f.getAxisProgress()[t];
            p.clearListeners(), p.set(0), p.set(0), c && ((l = this.createCrossfadeAnimation(c)), f.show());
            var v = function () {
              var r = p.get() / 1e3;
              !(function (t, e, n, r) {
                (t.min = Object(o.u)(e.min, n.min, r)), (t.max = Object(o.u)(e.max, n.max, r));
              })(d, n, e, r),
                f.setAxisTarget(t, d.min, d.max),
                null === l || void 0 === l || l(r);
            };
            v(), f.updateLayoutDelta();
            var h = p.onChange(v),
              m = He('x' === t ? 'layoutX' : 'layoutY', p, 1e3, u || this.props.transition || rr).then(h);
            return (
              (this.stopAxisAnimation[t] = function () {
                p.stop(), h();
              }),
              m
            );
          }),
          (e.prototype.createCrossfadeAnimation = function (t) {
            var e = this.props.visualElement.getValue('opacity', 0);
            return function (n) {
              e.set(or(Object(o.u)(0, 1, n))), t.set(ar(Object(o.u)(1, 0, n)));
            };
          }),
          (e.prototype.safeToRemove = function () {
            var t, e;
            null === (e = (t = this.props).safeToRemove) || void 0 === e || e.call(t);
          }),
          (e.prototype.render = function () {
            return null;
          }),
          e
        );
      })(u.Component);
      function Jn(t) {
        var e = Object(r.c)(An(), 2)[1];
        return Object(u.createElement)(qn, Object(r.a)({}, t, { safeToRemove: e }));
      }
      function Qn(t, e) {
        return !er(t) && !er(e) && (!nr(t.x, e.x) || !nr(t.y, e.y));
      }
      var tr = { min: 0, max: 0 };
      function er(t) {
        return nr(t.x, tr) && nr(t.y, tr);
      }
      function nr(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      var rr = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function ir(t, e, n) {
        return function (r) {
          return r < t ? 0 : r > e ? 1 : n(Object(o.w)(t, e, r));
        };
      }
      var or = ir(0, 0.5, o.k),
        ar = ir(0.5, 0.95, o.t),
        sr = {
          key: 'animate-layout',
          shouldRender: function (t) {
            return !!t.layout || !!t.layoutId;
          },
          getComponent: function () {
            return Jn;
          },
        },
        ur = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(r.b)(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this.props,
                e = t.syncLayout,
                n = t.framerSyncLayout,
                r = t.visualElement;
              jn(e) && e.register(r), jn(n) && n.register(r);
            }),
            (e.prototype.getSnapshotBeforeUpdate = function () {
              var t = this.props,
                e = t.syncLayout,
                n = t.visualElement;
              return jn(e) ? e.syncUpdate() : (n.snapshotBoundingBox(), e.add(n)), null;
            }),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props,
                e = t.syncLayout,
                n = t.visualElement;
              jn(e) || e.flush(), n.rebaseTargetBox();
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(c.a.Component);
      function cr(t) {
        var e = Object(u.useContext)(En),
          n = Object(u.useContext)(wn);
        return c.a.createElement(ur, Object(r.a)({}, t, { syncLayout: e, framerSyncLayout: n }));
      }
      var lr = {
          key: 'measure-layout',
          shouldRender: function (t) {
            return !!t.drag || !!t.layout || !!t.layoutId;
          },
          getComponent: function () {
            return cr;
          },
        },
        fr = [lr, $n, Gn, un, Kn, sr],
        dr = {
          useVisualElement: function (t, e, n, i) {
            var o = te(),
              a = Ut(function () {
                return new ($t(t) ? Kt : Dt)(o, i);
              });
            n && (a.values.clear(), (a.latest = {})),
              a.updateConfig(
                Object(r.a)(Object(r.a)(Object(r.a)({}, a.config), { enableHardwareAcceleration: !n }), e)
              );
            var s = Object(u.useContext)(ee);
            a.layoutId = s && e.layoutId ? s + '-' + e.layoutId : e.layoutId;
            var c = Object(u.useContext)(qt),
              l = null === c || c.isPresent;
            a.isPresent = void 0 !== e.isPresent ? e.isPresent : l;
            var f = null === c || void 0 === c ? void 0 : c.id;
            return (
              (a.isPresenceRoot = !o || o.presenceId !== f),
              Object(u.useEffect)(
                function () {
                  if (e.onViewportBoxUpdate) return a.onViewportBoxUpdate(e.onViewportBoxUpdate);
                },
                [e.onViewportBoxUpdate]
              ),
              a
            );
          },
          useRender: function (t, e, n) {
            var i =
              'string' === typeof t
                ? (function (t) {
                    var e = {};
                    for (var n in t) fn(n) && (e[n] = t[n]);
                    return e;
                  })(e)
                : e;
            n.clean(), n.build();
            var o = $t(t)
              ? (function (t) {
                  return Object(r.a)(Object(r.a)({}, t.attrs), { style: Object(r.a)({}, t.reactStyle) });
                })(n)
              : (function (t, e) {
                  var n = e.drag,
                    i = {},
                    o = Object(r.a)(Object(r.a)(Object(r.a)({}, t.reactStyle), t.style), t.vars);
                  return (
                    n &&
                      ((i.draggable = !1),
                      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
                      (o.touchAction = !0 === n ? 'none' : 'pan-' + ('x' === n ? 'y' : 'x'))),
                    (i.style = o),
                    i
                  );
                })(n, e);
            return Object(u.createElement)(t, Object(r.a)(Object(r.a)(Object(r.a)({}, i), { ref: n.ref }), o));
          },
        };
      function pr(t) {
        var e = Object(r.a)(Object(r.a)({}, dr), { defaultFeatures: t });
        var n = new Map();
        return new Proxy(
          {
            custom: function (t) {
              return Fn(t, e);
            },
          },
          {
            get: function (t, r) {
              return 'custom' === r ? t.custom : (n.has(r) || n.set(r, Fn(r, e)), n.get(r));
            },
          }
        );
      }
      var vr = pr(fr);
      var hr = 0;
      function mr() {
        var t = hr;
        return hr++, t;
      }
      var gr = function (t) {
        var e = t.children,
          n = t.initial,
          r = t.isPresent,
          i = t.onExitComplete,
          o = t.custom,
          a = t.presenceAffectsLayout,
          s = Ut(yr),
          c = Ut(mr),
          l = Object(u.useMemo)(
            function () {
              return {
                id: c,
                initial: n,
                isPresent: r,
                custom: o,
                onExitComplete: function (t) {
                  s.set(t, !0);
                  var e = !0;
                  s.forEach(function (t) {
                    t || (e = !1);
                  }),
                    e && (null === i || void 0 === i || i());
                },
                register: function (t) {
                  return (
                    s.set(t, !1),
                    function () {
                      return s.delete(t);
                    }
                  );
                },
              };
            },
            a ? void 0 : [r]
          );
        return (
          Object(u.useMemo)(
            function () {
              s.forEach(function (t, e) {
                return s.set(e, !1);
              });
            },
            [r]
          ),
          Object(u.createElement)(qt.Provider, { value: l }, e)
        );
      };
      function yr() {
        return new Map();
      }
      function br(t) {
        return t.key || '';
      }
      var xr = function (t) {
        var e = t.children,
          n = t.custom,
          i = t.initial,
          o = void 0 === i || i,
          a = t.onExitComplete,
          s = t.exitBeforeEnter,
          c = t.presenceAffectsLayout,
          l = void 0 === c || c,
          f = (function () {
            var t = Object(u.useRef)(!1),
              e = Object(r.c)(Object(u.useState)(0), 2),
              n = e[0],
              i = e[1];
            return (
              re(function () {
                return (t.current = !0);
              }),
              Object(u.useCallback)(
                function () {
                  !t.current && i(n + 1);
                },
                [n]
              )
            );
          })(),
          d = Object(u.useContext)(En);
        jn(d) && (f = d.forceUpdate);
        var p = Object(u.useRef)(!0),
          v = (function (t) {
            var e = [];
            return (
              u.Children.forEach(t, function (t) {
                Object(u.isValidElement)(t) && e.push(t);
              }),
              e
            );
          })(e),
          h = Object(u.useRef)(v),
          m = Object(u.useRef)(new Map()).current,
          g = Object(u.useRef)(new Set()).current;
        if (
          ((function (t, e) {
            t.forEach(function (t) {
              var n = br(t);
              e.set(n, t);
            });
          })(v, m),
          p.current)
        )
          return (
            (p.current = !1),
            Object(u.createElement)(
              u.Fragment,
              null,
              v.map(function (t) {
                return Object(u.createElement)(
                  gr,
                  { key: br(t), isPresent: !0, initial: !!o && void 0, presenceAffectsLayout: l },
                  t
                );
              })
            )
          );
        for (var y = Object(r.e)(v), b = h.current.map(br), x = v.map(br), O = b.length, j = 0; j < O; j++) {
          var E = b[j];
          -1 === x.indexOf(E) ? g.add(E) : g.delete(E);
        }
        return (
          s && g.size && (y = []),
          g.forEach(function (t) {
            if (-1 === x.indexOf(t)) {
              var e = m.get(t);
              if (e) {
                var r = b.indexOf(t);
                y.splice(
                  r,
                  0,
                  Object(u.createElement)(
                    gr,
                    {
                      key: br(e),
                      isPresent: !1,
                      onExitComplete: function () {
                        m.delete(t), g.delete(t);
                        var e = h.current.findIndex(function (e) {
                          return e.key === t;
                        });
                        h.current.splice(e, 1), g.size || ((h.current = v), f(), a && a());
                      },
                      custom: n,
                      presenceAffectsLayout: l,
                    },
                    e
                  )
                );
              }
            }
          }),
          (y = y.map(function (t) {
            var e = t.key;
            return g.has(e)
              ? t
              : Object(u.createElement)(gr, { key: br(t), isPresent: !0, presenceAffectsLayout: l }, t);
          })),
          (h.current = y),
          Object(u.createElement)(
            u.Fragment,
            null,
            g.size
              ? y
              : y.map(function (t) {
                  return Object(u.cloneElement)(t);
                })
          )
        );
      };
      function Or(t, e) {
        return e && t !== e.lead
          ? { visibilityAction: mn.Hide }
          : e && t.presence !== hn.Entering && t === e.lead && e.lead !== e.prevLead
          ? { visibilityAction: mn.Show }
          : (t.presence === hn.Entering
              ? (n = null === e || void 0 === e ? void 0 : e.getFollowOrigin())
              : t.presence === hn.Exiting && (r = null === e || void 0 === e ? void 0 : e.getFollowTarget()),
            { originBox: n, targetBox: r });
        var n, r;
      }
      function jr(t, e) {
        var n,
          r,
          i,
          o = {},
          a = e && e.lead,
          s = null === a || void 0 === a ? void 0 : a.presence;
        return (
          e && t === a
            ? t.presence === hn.Entering
              ? (o.originBox = e.getFollowOrigin())
              : t.presence === hn.Exiting && (o.targetBox = e.getFollowTarget())
            : e &&
              t === e.follow &&
              ((o.transition = e.getLeadTransition()),
              s === hn.Entering
                ? (o.targetBox = e.getLeadTarget())
                : s === hn.Exiting && (o.originBox = e.getLeadOrigin())),
          (null === (n = null === e || void 0 === e ? void 0 : e.follow) || void 0 === n ? void 0 : n.isPresenceRoot) ||
          (null === a || void 0 === a ? void 0 : a.isPresenceRoot)
            ? (e && t !== a
                ? e && t === e.follow
                  ? a &&
                    s !== hn.Entering &&
                    s === hn.Exiting &&
                    (o.crossfadeOpacity =
                      null === (i = null === e || void 0 === e ? void 0 : e.lead) || void 0 === i
                        ? void 0
                        : i.getValue('opacity', 1))
                  : (o.visibilityAction = mn.Hide)
                : t.presence === hn.Entering &&
                  (o.crossfadeOpacity =
                    null === (r = null === e || void 0 === e ? void 0 : e.follow) || void 0 === r
                      ? void 0
                      : r.getValue('opacity', 0)),
              o)
            : o
        );
      }
      var Er = (function () {
        function t() {
          (this.order = []), (this.hasChildren = !1);
        }
        return (
          (t.prototype.add = function (t) {
            var e;
            if ((this.order.push(t), this.snapshot)) {
              (t.prevSnapshot = this.snapshot), (t.prevViewportBox = this.snapshot.boundingBox);
              var n = this.snapshot.latestMotionValues;
              for (var r in n)
                t.hasValue(r) ? null === (e = t.getValue(r)) || void 0 === e || e.set(n[r]) : t.addValue(r, p(n[r]));
            }
            this.hasChildren = !0;
          }),
          (t.prototype.remove = function (t) {
            var e = this.order.findIndex(function (e) {
              return t === e;
            });
            -1 !== e && this.order.splice(e, 1);
          }),
          (t.prototype.updateLeadAndFollow = function () {
            (this.prevLead = this.lead), (this.prevFollow = this.follow);
            var t = Object(r.c)(
                (function (t, e) {
                  for (
                    var n = Object(r.c)(e, 2),
                      i = n[0],
                      o = n[1],
                      a = void 0,
                      s = 0,
                      u = void 0,
                      c = t.length,
                      l = !1,
                      f = c - 1;
                    f >= 0;
                    f--
                  ) {
                    var d = t[f];
                    if ((f === c - 1 && (l = d.isPresent), l)) a = d;
                    else {
                      var p = t[f - 1];
                      p && p.isPresent && (a = d);
                    }
                    if (a) {
                      s = f;
                      break;
                    }
                  }
                  if ((a || (a = t[0]), (u = t[s - 1]), a))
                    for (f = s - 1; f >= 0; f--)
                      if ((d = t[f]).isPresent) {
                        u = d;
                        break;
                      }
                  return (
                    a !== i &&
                      !l &&
                      u === o &&
                      t.find(function (t) {
                        return t === i;
                      }) &&
                      (a = i),
                    [a, u]
                  );
                })(this.order, [this.lead, this.follow]),
                2
              ),
              e = t[0],
              n = t[1];
            (this.lead = e), (this.follow = n);
          }),
          (t.prototype.updateSnapshot = function () {
            if (this.lead) {
              var t = { boundingBox: this.lead.prevViewportBox, latestMotionValues: {} };
              this.lead.forEachValue(function (e, n) {
                var r = e.get();
                R(r) || (t.latestMotionValues[n] = r);
              });
              var e = Xn.get(this.lead);
              e && e.isDragging && ((t.isDragging = !0), (t.cursorProgress = e.cursorProgress)), (this.snapshot = t);
            }
          }),
          (t.prototype.isLeadPresent = function () {
            var t;
            return this.lead && (null === (t = this.lead) || void 0 === t ? void 0 : t.presence) !== hn.Exiting;
          }),
          (t.prototype.getFollowOrigin = function () {
            var t;
            return this.follow
              ? this.follow.prevViewportBox
              : null === (t = this.snapshot) || void 0 === t
              ? void 0
              : t.boundingBox;
          }),
          (t.prototype.getFollowTarget = function () {
            var t;
            return null === (t = this.follow) || void 0 === t ? void 0 : t.box;
          }),
          (t.prototype.getLeadOrigin = function () {
            var t;
            return null === (t = this.lead) || void 0 === t ? void 0 : t.prevViewportBox;
          }),
          (t.prototype.getLeadTarget = function () {
            var t;
            return null === (t = this.lead) || void 0 === t ? void 0 : t.box;
          }),
          (t.prototype.getLeadTransition = function () {
            var t;
            return null === (t = this.lead) || void 0 === t ? void 0 : t.config.transition;
          }),
          t
        );
      })();
      !(function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (
            (e.children = new Set()),
            (e.stacks = new Map()),
            (e.hasMounted = !1),
            (e.updateScheduled = !1),
            (e.renderScheduled = !1),
            (e.syncContext = Object(r.a)(Object(r.a)({}, On()), {
              syncUpdate: function (t) {
                return e.scheduleUpdate(t);
              },
              forceUpdate: function () {
                (e.syncContext = Object(r.a)({}, e.syncContext)), e.scheduleUpdate(!0);
              },
              register: function (t) {
                return e.addChild(t);
              },
              remove: function (t) {
                return e.removeChild(t);
              },
            })),
            e
          );
        }
        Object(r.b)(e, t),
          (e.prototype.componentDidMount = function () {
            (this.hasMounted = !0), this.updateStacks();
          }),
          (e.prototype.componentDidUpdate = function () {
            this.startLayoutAnimation();
          }),
          (e.prototype.shouldComponentUpdate = function () {
            return (this.renderScheduled = !0), !0;
          }),
          (e.prototype.startLayoutAnimation = function () {
            var t = this;
            this.renderScheduled = this.updateScheduled = !1;
            var e = this.props.type;
            this.children.forEach(function (t) {
              t.isPresent
                ? t.presence !== hn.Entering && (t.presence = t.presence === hn.Exiting ? hn.Entering : hn.Present)
                : (t.presence = hn.Exiting);
            }),
              this.updateStacks();
            var n = 'crossfade' === e ? jr : Or,
              r = {
                measureLayout: function (t) {
                  return t.measureLayout();
                },
                layoutReady: function (e) {
                  var r = e.layoutId;
                  e.layoutReady(n(e, t.getStack(r)));
                },
                parent: this.context.visualElement,
              };
            this.children.forEach(function (e) {
              return t.syncContext.add(e);
            }),
              this.syncContext.flush(r),
              this.stacks.forEach(function (t) {
                return (t.snapshot = void 0);
              });
          }),
          (e.prototype.updateStacks = function () {
            this.stacks.forEach(function (t) {
              return t.updateLeadAndFollow();
            });
          }),
          (e.prototype.scheduleUpdate = function (t) {
            void 0 === t && (t = !1),
              (!t && this.updateScheduled) ||
                ((this.updateScheduled = !0),
                this.children.forEach(function (t) {
                  return (function (t) {
                    for (var e = !1, n = {}, r = 0; r < V.length; r++) {
                      var i = 'rotate' + V[r];
                      t.hasValue(i) && 0 !== t.latest[i] && ((e = !0), (n[i] = t.latest[i]), (t.latest[i] = 0));
                    }
                    if (e) {
                      for (var i in (t.render(), n)) t.latest[i] = n[i];
                      t.scheduleRender();
                    }
                  })(t);
                }),
                this.children.forEach(function (t) {
                  return t.snapshotBoundingBox();
                }),
                this.stacks.forEach(function (t) {
                  return t.updateSnapshot();
                }),
                (!t && this.renderScheduled) || ((this.renderScheduled = !0), this.forceUpdate()));
          }),
          (e.prototype.addChild = function (t) {
            this.children.add(t), this.addToStack(t), (t.presence = this.hasMounted ? hn.Entering : hn.Present);
          }),
          (e.prototype.removeChild = function (t) {
            this.scheduleUpdate(), this.children.delete(t), this.removeFromStack(t);
          }),
          (e.prototype.addToStack = function (t) {
            var e = this.getStack(t.layoutId);
            null === e || void 0 === e || e.add(t);
          }),
          (e.prototype.removeFromStack = function (t) {
            var e = this.getStack(t.layoutId);
            null === e || void 0 === e || e.remove(t);
          }),
          (e.prototype.getStack = function (t) {
            if (void 0 !== t) return !this.stacks.has(t) && this.stacks.set(t, new Er()), this.stacks.get(t);
          }),
          (e.prototype.render = function () {
            return Object(u.createElement)(En.Provider, { value: this.syncContext }, this.props.children);
          }),
          (e.contextType = Jt);
      })(u.Component);
      function wr(t) {
        return Ut(function () {
          return p(t);
        });
      }
      function Cr(t, e) {
        var n = wr(e()),
          r = function () {
            return n.set(e());
          };
        return (
          r(),
          (function (t, e) {
            Object(u.useEffect)(function () {
              var n = t.map(function (t) {
                return t.onChange(e);
              });
              return function () {
                return n.forEach(function (t) {
                  return t();
                });
              };
            });
          })(t, function () {
            return i.b.update(r, !1, !0);
          }),
          n
        );
      }
      var Ar = function (t) {
        return (function (t) {
          return 'object' === typeof t && t.mix;
        })(t)
          ? t.mix
          : void 0;
      };
      function Pr(t, e, n, i) {
        var a =
          'function' === typeof e
            ? e
            : (function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = !Array.isArray(t[0]),
                  i = n ? 0 : -1,
                  a = t[0 + i],
                  s = t[1 + i],
                  u = t[2 + i],
                  c = t[3 + i],
                  l = Object(o.s)(s, u, Object(r.a)({ mixer: Ar(u[0]) }, c));
                return n ? l(a) : l;
              })(e, n, i);
        return Array.isArray(t)
          ? Sr(t, a)
          : Sr([t], function (t) {
              var e = Object(r.c)(t, 1)[0];
              return a(e);
            });
      }
      function Sr(t, e) {
        var n = Ut(function () {
          return [];
        });
        return Cr(t, function () {
          n.length = 0;
          for (var r = t.length, i = 0; i < r; i++) n[i] = t[i].get();
          return e(n);
        });
      }
      !(function () {
        function t() {
          this.componentControls = new Set();
        }
        (t.prototype.subscribe = function (t) {
          var e = this;
          return (
            this.componentControls.add(t),
            function () {
              return e.componentControls.delete(t);
            }
          );
        }),
          (t.prototype.start = function (t, e) {
            this.componentControls.forEach(function (n) {
              n.start(t.nativeEvent || t, e);
            });
          }),
          (t.prototype.updateConstraints = function () {
            this.componentControls.forEach(function (t) {
              t.prepareBoundingBox(), t.resolveDragConstraints();
            });
          });
      })();
      !(function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (e.initialState = {}), e;
        }
        Object(r.b)(e, t),
          (e.prototype.updateLayoutDelta = function () {}),
          (e.prototype.build = function () {}),
          (e.prototype.clean = function () {}),
          (e.prototype.makeTargetAnimatable = function (t) {
            var e = t.transition,
              n = t.transitionEnd,
              i = Object(r.d)(t, ['transition', 'transitionEnd']);
            return Bt(this, i, Rt(i, e || {}, this)), Object(r.a)({ transition: e, transitionEnd: n }, i);
          }),
          (e.prototype.getBoundingBox = function () {
            return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
          }),
          (e.prototype.readNativeValue = function (t) {
            return this.initialState[t] || 0;
          }),
          (e.prototype.render = function () {
            this.build();
          });
      })(v);
    },
  },
]);
