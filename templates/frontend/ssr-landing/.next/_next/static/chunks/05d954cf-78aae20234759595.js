'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [430],
  {
    6805: function (t, n, e) {
      e.d(n, {
        M_: function () {
          return xr;
        },
        ww: function () {
          return dr;
        },
        c$: function () {
          return Pr;
        },
        Hm: function () {
          return Sr;
        },
      });
      var r = e(655),
        i = e(1687),
        o = e(4819),
        a = e(4394),
        s = e(1744),
        u = e(7294),
        l = function (t) {
          return 'object' === typeof t && t.hasOwnProperty('current');
        },
        c = (function () {
          function t() {
            this.subscriptions = new Set();
          }
          return (
            (t.prototype.add = function (t) {
              var n = this;
              return (
                this.subscriptions.add(t),
                function () {
                  n.subscriptions.delete(t);
                }
              );
            }),
            (t.prototype.notify = function (t, n, e) {
              var i, o;
              if (this.subscriptions.size)
                try {
                  for (var a = (0, r.XA)(this.subscriptions), s = a.next(); !s.done; s = a.next()) {
                    (0, s.value)(t, n, e);
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
        f = (function () {
          function t(t) {
            var n,
              e = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new c()),
              (this.renderSubscribers = new c()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, n) {
                void 0 === n && (n = !0),
                  (e.prev = e.current),
                  (e.current = t),
                  e.prev !== e.current && e.updateSubscribers.notify(e.current),
                  n && e.renderSubscribers.notify(e.current);
                var r = (0, i.$B)(),
                  o = r.delta,
                  a = r.timestamp;
                e.lastUpdated !== a &&
                  ((e.timeDelta = o), (e.lastUpdated = a), i.ZP.postRender(e.scheduleVelocityCheck));
              }),
              (this.scheduleVelocityCheck = function () {
                return i.ZP.postRender(e.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== e.lastUpdated && (e.prev = e.current);
              }),
              (this.current = t),
              (this.canTrackVelocity = ((n = this.current), !isNaN(parseFloat(n))));
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
            (t.prototype.set = function (t, n) {
              void 0 === n && (n = !0),
                n && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, n);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? (0, o.Rv)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
                : 0;
            }),
            (t.prototype.start = function (t) {
              var n = this;
              return (
                this.stop(),
                new Promise(function (e) {
                  n.stopAnimation = t(e);
                }).then(function () {
                  return n.clearAnimation();
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
        return new f(t);
      }
      var d = (function () {
        function t(t, n) {
          var e = this;
          (this.children = new Set()),
            (this.isHoverEventsEnabled = !0),
            (this.baseTarget = {}),
            (this.latest = {}),
            (this.values = new Map()),
            (this.valueSubscriptions = new Map()),
            (this.config = {}),
            (this.isMounted = !1),
            (this.update = function () {
              return e.config.onUpdate(e.latest);
            }),
            (this.triggerRender = function () {
              return e.render();
            }),
            (this.ref = function (t) {
              t ? e.mount(t) : e.unmount(),
                e.externalRef &&
                  ('function' === typeof e.externalRef
                    ? e.externalRef(t)
                    : l(e.externalRef) && (e.externalRef.current = t));
            }),
            (this.parent = t),
            (this.rootParent = t ? t.rootParent : this),
            (this.treePath = t ? (0, r.fl)(t.treePath, [t]) : []),
            (this.depth = t ? t.depth + 1 : 0),
            (this.externalRef = n);
        }
        return (
          (t.prototype.suspendHoverEvents = function () {
            var t = this;
            (this.isHoverEventsEnabled = !1),
              i.ZP.postRender(function () {
                return setTimeout(function () {
                  return (t.isHoverEventsEnabled = !0);
                }, 10);
              });
          }),
          (t.prototype.getVariantPayload = function () {
            return this.config.custom;
          }),
          (t.prototype.getVariant = function (t) {
            var n;
            return null === (n = this.config.variants) || void 0 === n ? void 0 : n[t];
          }),
          (t.prototype.addVariantChild = function (t) {
            var n = this;
            return (
              this.variantChildren || (this.variantChildren = new Set()),
              this.variantChildren.add(t),
              function () {
                return n.variantChildren.delete(t);
              }
            );
          }),
          (t.prototype.addVariantChildOrder = function (t) {
            this.variantChildrenOrder || (this.variantChildrenOrder = new Set()), this.variantChildrenOrder.add(t);
          }),
          (t.prototype.onAnimationStart = function () {
            var t, n;
            null === (n = (t = this.config).onAnimationStart) || void 0 === n || n.call(t);
          }),
          (t.prototype.onAnimationComplete = function () {
            var t, n;
            this.isMounted && (null === (n = (t = this.config).onAnimationComplete) || void 0 === n || n.call(t));
          }),
          (t.prototype.getDefaultTransition = function () {
            return this.config.transition;
          }),
          (t.prototype.subscribe = function (t) {
            var n = this;
            return (
              this.children.add(t),
              function () {
                return n.children.delete(t);
              }
            );
          }),
          (t.prototype.hasValue = function (t) {
            return this.values.has(t);
          }),
          (t.prototype.addValue = function (t, n) {
            this.hasValue(t) && this.removeValue(t),
              this.values.set(t, n),
              this.setSingleStaticValue(t, n.get()),
              this.subscribeToValue(t, n);
          }),
          (t.prototype.removeValue = function (t) {
            var n;
            null === (n = this.valueSubscriptions.get(t)) || void 0 === n || n(),
              this.valueSubscriptions.delete(t),
              this.values.delete(t),
              delete this.latest[t];
          }),
          (t.prototype.getValue = function (t, n) {
            var e = this.values.get(t);
            return void 0 === e && void 0 !== n && ((e = new f(n)), this.addValue(t, e)), e;
          }),
          (t.prototype.forEachValue = function (t) {
            this.values.forEach(t);
          }),
          (t.prototype.getInstance = function () {
            return this.element;
          }),
          (t.prototype.updateConfig = function (t) {
            void 0 === t && (t = {}), (this.config = (0, r.pi)({}, t));
          }),
          (t.prototype.getBaseValue = function (t, n) {
            return this.baseTarget[t];
          }),
          (t.prototype.setSingleStaticValue = function (t, n) {
            this.latest[t] = n;
          }),
          (t.prototype.setStaticValues = function (t, n) {
            if ('string' === typeof t) this.setSingleStaticValue(t, n);
            else for (var e in t) this.setSingleStaticValue(e, t[e]);
          }),
          (t.prototype.scheduleRender = function () {
            i.ZP.render(this.triggerRender, !1, !0);
          }),
          (t.prototype.scheduleUpdateLayoutDelta = function () {
            i.ZP.preRender(this.rootParent.updateLayoutDelta, !1, !0);
          }),
          (t.prototype.subscribeToValue = function (t, n) {
            var e = this,
              r = n.onChange(function (n) {
                e.setSingleStaticValue(t, n), e.element && e.config.onUpdate && i.ZP.update(e.update, !1, !0);
              }),
              o = n.onRenderRequest(function () {
                e.element && e.scheduleRender();
              });
            this.valueSubscriptions.set(t, function () {
              r(), o();
            });
          }),
          (t.prototype.mount = function (t) {
            (0, a.k)(
              !!t,
              'No ref found. Ensure components created with motion.custom forward refs using React.forwardRef'
            ),
              this.parent && (this.removeFromParent = this.parent.subscribe(this)),
              (this.element = this.current = t);
          }),
          (t.prototype.unmount = function () {
            var t = this;
            this.forEachValue(function (n, e) {
              return t.removeValue(e);
            }),
              i.qY.update(this.update),
              i.qY.render(this.render),
              this.removeFromParent && this.removeFromParent();
          }),
          t
        );
      })();
      function v(t) {
        return t;
      }
      function h(t) {
        var n = t.top;
        return { x: { min: t.left, max: t.right }, y: { min: n, max: t.bottom } };
      }
      function m(t) {
        return { x: (0, r.pi)({}, t.x), y: (0, r.pi)({}, t.y) };
      }
      var g = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
      function y() {
        return { x: (0, r.pi)({}, g), y: (0, r.pi)({}, g) };
      }
      var x = (0, r.pi)((0, r.pi)({}, s.Rx), { transform: Math.round }),
        b = {
          color: s.$_,
          backgroundColor: s.$_,
          outlineColor: s.$_,
          fill: s.$_,
          stroke: s.$_,
          borderColor: s.$_,
          borderTopColor: s.$_,
          borderRightColor: s.$_,
          borderBottomColor: s.$_,
          borderLeftColor: s.$_,
          borderWidth: s.px,
          borderTopWidth: s.px,
          borderRightWidth: s.px,
          borderBottomWidth: s.px,
          borderLeftWidth: s.px,
          borderRadius: s.px,
          radius: s.px,
          borderTopLeftRadius: s.px,
          borderTopRightRadius: s.px,
          borderBottomRightRadius: s.px,
          borderBottomLeftRadius: s.px,
          width: s.px,
          maxWidth: s.px,
          height: s.px,
          maxHeight: s.px,
          size: s.px,
          top: s.px,
          right: s.px,
          bottom: s.px,
          left: s.px,
          padding: s.px,
          paddingTop: s.px,
          paddingRight: s.px,
          paddingBottom: s.px,
          paddingLeft: s.px,
          margin: s.px,
          marginTop: s.px,
          marginRight: s.px,
          marginBottom: s.px,
          marginLeft: s.px,
          rotate: s.RW,
          rotateX: s.RW,
          rotateY: s.RW,
          rotateZ: s.RW,
          scale: s.bA,
          scaleX: s.bA,
          scaleY: s.bA,
          scaleZ: s.bA,
          skew: s.RW,
          skewX: s.RW,
          skewY: s.RW,
          distance: s.px,
          translateX: s.px,
          translateY: s.px,
          translateZ: s.px,
          x: s.px,
          y: s.px,
          z: s.px,
          perspective: s.px,
          transformPerspective: s.px,
          opacity: s.Fq,
          originX: s.$C,
          originY: s.$C,
          originZ: s.px,
          zIndex: x,
          filter: s.hX,
          WebkitFilter: s.hX,
          fillOpacity: s.Fq,
          strokeOpacity: s.Fq,
          numOctaves: x,
        },
        E = [
          s.Rx,
          s.px,
          s.aQ,
          s.RW,
          s.vw,
          s.vh,
          {
            test: function (t) {
              return 'auto' === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        C = function (t) {
          return function (n) {
            return n.test(t);
          };
        },
        P = function (t) {
          return E.find(C(t));
        },
        w = (0, r.fl)(E, [s.$_, s.PY]),
        A = function (t) {
          return w.find(C(t));
        },
        S = function (t) {
          return b[t];
        },
        T = function (t, n) {
          return n && 'number' === typeof t ? n.transform(t) : t;
        };
      function V(t, n) {
        var e,
          r = S(t);
        return r !== s.hX && (r = s.PY), null === (e = r.getAnimatableNone) || void 0 === e ? void 0 : e.call(r, n);
      }
      var B = ['', 'X', 'Y', 'Z'],
        L = ['transformPerspective', 'x', 'y', 'z'];
      function k(t, n) {
        return L.indexOf(t) - L.indexOf(n);
      }
      ['perspective', 'translate', 'scale', 'rotate', 'skew'].forEach(function (t) {
        B.forEach(function (n) {
          var e = t + n;
          L.push(e);
        });
      });
      var R = new Set(L);
      function D(t) {
        return R.has(t);
      }
      var M = new Set(['originX', 'originY', 'originZ']);
      function O(t) {
        return M.has(t);
      }
      var F = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' };
      function U(t, n, e) {
        var r = t.x,
          i = t.y,
          o = 'translate3d(' + r.translate / n.x + 'px, ' + i.translate / n.y + 'px, 0) ';
        if (e) {
          var a = e.rotate,
            s = e.rotateX,
            u = e.rotateY;
          a && (o += 'rotate(' + a + ') '), s && (o += 'rotateX(' + s + ') '), u && (o += 'rotateY(' + u + ') ');
        }
        return (o += 'scale(' + r.scale + ', ' + i.scale + ')'), e || o !== Y ? o : '';
      }
      var Y = U(y(), { x: 1, y: 1 });
      function I(t) {
        return t.startsWith('--');
      }
      function H(t) {
        return 'string' === typeof t && t.startsWith('var(--');
      }
      var _ = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function Z(t, n, e) {
        void 0 === e && (e = 1),
          (0, a.k)(
            e <= 4,
            'Max CSS variable fallback depth detected in property "' +
              t +
              '". This may indicate a circular fallback dependency.'
          );
        var i = (0, r.CR)(
            (function (t) {
              var n = _.exec(t);
              if (!n) return [,];
              var e = (0, r.CR)(n, 3);
              return [e[1], e[2]];
            })(t),
            2
          ),
          o = i[0],
          s = i[1];
        if (o) {
          var u = window.getComputedStyle(n).getPropertyValue(o);
          return u ? u.trim() : H(s) ? Z(s, n, e + 1) : s;
        }
      }
      function X(t, n) {
        return (t / (n.max - n.min)) * 100;
      }
      var W = '_$css';
      var z = {
          process: function (t, n) {
            if ('string' === typeof t) {
              if (!s.px.test(t)) return t;
              t = parseFloat(t);
            }
            return X(t, n.x) + '% ' + X(t, n.y) + '%';
          },
        },
        $ = {
          borderRadius: (0, r.pi)((0, r.pi)({}, z), {
            applyTo: [
              'borderTopLeftRadius',
              'borderTopRightRadius',
              'borderBottomLeftRadius',
              'borderBottomRightRadius',
            ],
          }),
          borderTopLeftRadius: z,
          borderTopRightRadius: z,
          borderBottomLeftRadius: z,
          borderBottomRightRadius: z,
          boxShadow: {
            process: function (t, n, e, r) {
              var i = t,
                a = t.includes('var('),
                u = [];
              a &&
                (t = t.replace(_, function (t) {
                  return u.push(t), W;
                }));
              var l = s.PY.parse(t);
              if (l.length > 5) return i;
              var c = s.PY.createTransformer(t),
                f = 'number' !== typeof l[0] ? 1 : 0,
                p = e.x.scale * r.x,
                d = e.y.scale * r.y;
              (l[0 + f] /= p), (l[1 + f] /= d);
              var v = (0, o.CD)(p, d, 0.5);
              'number' === typeof l[2 + f] && (l[2 + f] /= v), 'number' === typeof l[3 + f] && (l[3 + f] /= v);
              var h = c(l);
              if (a) {
                var m = 0;
                h = h.replace(W, function () {
                  var t = u[m];
                  return m++, t;
                });
              }
              return h;
            },
          },
        };
      function j(t, n, e, r, i, o, a, s, u, l, c, f) {
        var p = a.enableHardwareAcceleration,
          d = a.transformTemplate,
          v = a.allowTransformNone;
        o.length = 0;
        var h = !1,
          m = !1,
          g = !0;
        for (var y in t) {
          var x = t[y],
            b = S(y),
            E = T(x, b);
          if (D(y)) {
            if (((h = !0), (r[y] = E), o.push(y), !g)) continue;
            x !== (void 0 !== b.default ? b.default : 0) && (g = !1);
          } else if (O(y)) (i[y] = E), (m = !0);
          else if ('transform' !== y || 'function' !== typeof x) {
            var C = I(y) ? e : n;
            if (s && $[y]) {
              var P = $[y].process(x, f, u, c),
                w = $[y].applyTo;
              if (w) for (var A = w.length, V = 0; V < A; V++) C[w[V]] = P;
              else C[y] = P;
            } else C[y] = E;
          }
        }
        s
          ? ((n.transform = U(l, c, h ? r : void 0)),
            d && (n.transform = d(r, n.transform)),
            (n.transformOrigin = (function (t) {
              var n = t.x,
                e = t.y;
              return 100 * n.origin + '% ' + 100 * e.origin + '% 0';
            })(l)))
          : (h &&
              (n.transform = (function (t, n, e, r, i, o) {
                void 0 === i && (i = !0), void 0 === o && (o = !0);
                var a = '';
                n.sort(k);
                for (var s = !1, u = n.length, l = 0; l < u; l++) {
                  var c = n[l];
                  (a += (F[c] || c) + '(' + t[c] + ') '), 'z' === c && (s = !0);
                }
                return (
                  !s && i ? (a += 'translateZ(0)') : (a = a.trim()),
                  e ? (a = e(t, r ? '' : a)) : o && r && (a = 'none'),
                  a
                );
              })(r, o, d, g, p, v)),
            m &&
              (n.transformOrigin = (function (t) {
                var n = t.originX,
                  e = void 0 === n ? '50%' : n,
                  r = t.originY,
                  i = void 0 === r ? '50%' : r,
                  o = t.originZ;
                return e + ' ' + i + ' ' + (void 0 === o ? 0 : o);
              })(i)));
      }
      function G(t, n) {
        (t.min = n.min), (t.max = n.max);
      }
      function N(t, n, e) {
        return e + n * (t - e);
      }
      function K(t, n, e, r, i) {
        return void 0 !== i && (t = N(t, i, r)), N(t, e, r) + n;
      }
      function q(t, n, e, r, i) {
        void 0 === n && (n = 0),
          void 0 === e && (e = 1),
          (t.min = K(t.min, n, e, r, i)),
          (t.max = K(t.max, n, e, r, i));
      }
      function Q(t, n) {
        var e = n.x,
          r = n.y;
        q(t.x, e.translate, e.scale, e.originPoint), q(t.y, r.translate, r.scale, r.originPoint);
      }
      function J(t, n, e, i) {
        var a = (0, r.CR)(i, 3),
          s = a[0],
          u = a[1],
          l = a[2];
        (t.min = n.min), (t.max = n.max);
        var c = void 0 !== e[l] ? e[l] : 0.5,
          f = (0, o.CD)(n.min, n.max, c);
        q(t, e[s], e[u], f, e.scale);
      }
      var tt = ['x', 'scaleX', 'originX'],
        nt = ['y', 'scaleY', 'originY'];
      function et(t, n, e, r, i) {
        return (t = N((t -= n), 1 / e, r)), void 0 !== i && (t = N(t, 1 / i, r)), t;
      }
      function rt(t, n, e) {
        var i = (0, r.CR)(e, 3),
          a = i[0],
          s = i[1],
          u = i[2];
        !(function (t, n, e, r, i) {
          void 0 === n && (n = 0), void 0 === e && (e = 1), void 0 === r && (r = 0.5);
          var a = (0, o.CD)(t.min, t.max, r) - n;
          (t.min = et(t.min, n, e, a, i)), (t.max = et(t.max, n, e, a, i));
        })(t, n[a], n[s], n[u], n.scale);
      }
      function it(t, n, e) {
        return void 0 === n && (n = 0), void 0 === e && (e = 0.01), (0, o.TE)(t, n) < e;
      }
      function ot(t) {
        return t.max - t.min;
      }
      function at(t, n) {
        var e,
          r = 0.5,
          i = ot(t),
          a = ot(n);
        return (
          a > i ? (r = (0, o.YD)(n.min, n.max - i, t.min)) : i > a && (r = (0, o.YD)(t.min, t.max - a, n.min)),
          (e = r),
          (0, o.uZ)(0, 1, e)
        );
      }
      function st(t, n, e, r) {
        (t.origin = void 0 === r ? at(n, e) : r),
          (t.originPoint = (0, o.CD)(n.min, n.max, t.origin)),
          (t.scale = ot(e) / ot(n)),
          it(t.scale, 1, 1e-4) && (t.scale = 1),
          (t.translate = (0, o.CD)(e.min, e.max, t.origin) - t.originPoint),
          it(t.translate) && (t.translate = 0);
      }
      function ut(t, n, e, r) {
        st(t.x, n.x, e.x, r), st(t.y, n.y, e.y, r);
      }
      function lt(t) {
        return [t('x'), t('y')];
      }
      function ct(t, n) {
        return h(
          (function (t, n) {
            var e = t.top,
              r = t.left,
              i = t.bottom,
              o = t.right;
            void 0 === n && (n = v);
            var a = n({ x: r, y: e }),
              s = n({ x: o, y: i });
            return { top: a.y, left: a.x, bottom: s.y, right: s.x };
          })(t.getBoundingClientRect(), n)
        );
      }
      var ft,
        pt = function (t) {
          return Array.isArray(t);
        },
        dt = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'x', 'y']),
        vt = function (t) {
          return dt.has(t);
        },
        ht = function (t, n) {
          t.set(n, !1), t.set(n);
        },
        mt = function (t) {
          return t === s.Rx || t === s.px;
        };
      !(function (t) {
        (t.width = 'width'),
          (t.height = 'height'),
          (t.left = 'left'),
          (t.right = 'right'),
          (t.top = 'top'),
          (t.bottom = 'bottom');
      })(ft || (ft = {}));
      var gt = function (t, n) {
          return parseFloat(t.split(', ')[n]);
        },
        yt = function (t, n) {
          return function (e, r) {
            var i = r.transform;
            if ('none' === i || !i) return 0;
            var o = i.match(/^matrix3d\((.+)\)$/);
            if (o) return gt(o[1], n);
            var a = i.match(/^matrix\((.+)\)$/);
            return a ? gt(a[1], t) : 0;
          };
        },
        xt = new Set(['x', 'y', 'z']),
        bt = L.filter(function (t) {
          return !xt.has(t);
        });
      var Et = {
          width: function (t) {
            var n = t.x;
            return n.max - n.min;
          },
          height: function (t) {
            var n = t.y;
            return n.max - n.min;
          },
          top: function (t, n) {
            var e = n.top;
            return parseFloat(e);
          },
          left: function (t, n) {
            var e = n.left;
            return parseFloat(e);
          },
          bottom: function (t, n) {
            var e = t.y,
              r = n.top;
            return parseFloat(r) + (e.max - e.min);
          },
          right: function (t, n) {
            var e = t.x,
              r = n.left;
            return parseFloat(r) + (e.max - e.min);
          },
          x: yt(4, 13),
          y: yt(5, 14),
        },
        Ct = function (t, n, e, i) {
          void 0 === e && (e = {}), void 0 === i && (i = {}), (n = (0, r.pi)({}, n)), (i = (0, r.pi)({}, i));
          var o = Object.keys(n).filter(vt),
            u = [],
            l = !1,
            c = [];
          if (
            (o.forEach(function (r) {
              var o = t.getValue(r);
              if (t.hasValue(r)) {
                var f,
                  p = e[r],
                  d = n[r],
                  v = P(p);
                if (pt(d))
                  for (var h = d.length, m = null === d[0] ? 1 : 0; m < h; m++)
                    f
                      ? (0, a.k)(P(d[m]) === f, 'All keyframes must be of the same type')
                      : ((f = P(d[m])),
                        (0, a.k)(
                          f === v || (mt(v) && mt(f)),
                          'Keyframes must be of the same dimension as the current value'
                        ));
                else f = P(d);
                if (v !== f)
                  if (mt(v) && mt(f)) {
                    var g = o.get();
                    'string' === typeof g && o.set(parseFloat(g)),
                      'string' === typeof d
                        ? (n[r] = parseFloat(d))
                        : Array.isArray(d) && f === s.px && (n[r] = d.map(parseFloat));
                  } else
                    (null === v || void 0 === v ? void 0 : v.transform) &&
                    (null === f || void 0 === f ? void 0 : f.transform) &&
                    (0 === p || 0 === d)
                      ? 0 === p
                        ? o.set(f.transform(p))
                        : (n[r] = v.transform(d))
                      : (l ||
                          ((u = (function (t) {
                            var n = [];
                            return (
                              bt.forEach(function (e) {
                                var r = t.getValue(e);
                                void 0 !== r && (n.push([e, r.get()]), r.set(e.startsWith('scale') ? 1 : 0));
                              }),
                              n.length && t.render(),
                              n
                            );
                          })(t)),
                          (l = !0)),
                        c.push(r),
                        (i[r] = void 0 !== i[r] ? i[r] : n[r]),
                        ht(o, d));
              }
            }),
            c.length)
          ) {
            var f = (function (t, n, e) {
              var r = n.getBoundingBox(),
                i = n.getComputedStyle(),
                o = i.display,
                a = { top: i.top, left: i.left, bottom: i.bottom, right: i.right, transform: i.transform };
              'none' === o && n.setStaticValues('display', t.display || 'block'), n.render();
              var s = n.getBoundingBox();
              return (
                e.forEach(function (e) {
                  var o = n.getValue(e);
                  ht(o, Et[e](r, a)), (t[e] = Et[e](s, i));
                }),
                t
              );
            })(n, t, c);
            return (
              u.length &&
                u.forEach(function (n) {
                  var e = (0, r.CR)(n, 2),
                    i = e[0],
                    o = e[1];
                  t.getValue(i).set(o);
                }),
              t.render(),
              { target: f, transitionEnd: i }
            );
          }
          return { target: n, transitionEnd: i };
        };
      function Pt(t, n, e, r) {
        return (function (t) {
          return Object.keys(t).some(vt);
        })(n)
          ? Ct(t, n, e, r)
          : { target: n, transitionEnd: r };
      }
      var wt = function (t, n, e, i) {
        var o = (function (t, n, e) {
          var i,
            o = (0, r._T)(n, []),
            a = t.getInstance();
          if (!(a instanceof HTMLElement)) return { target: o, transitionEnd: e };
          for (var s in (e && (e = (0, r.pi)({}, e)),
          t.forEachValue(function (t) {
            var n = t.get();
            if (H(n)) {
              var e = Z(n, a);
              e && t.set(e);
            }
          }),
          o)) {
            var u = o[s];
            if (H(u)) {
              var l = Z(u, a);
              l && ((o[s] = l), e && ((null !== (i = e[s]) && void 0 !== i) || (e[s] = u)));
            }
          }
          return { target: o, transitionEnd: e };
        })(t, n, i);
        return Pt(t, (n = o.target), e, (i = o.transitionEnd));
      };
      function At(t) {
        return Array.isArray(t);
      }
      function St(t, n, e) {
        return (
          'string' === typeof n && (n = t.getVariant(n)),
          'function' === typeof n
            ? n(
                null !== e && void 0 !== e ? e : t.getVariantPayload(),
                (function (t) {
                  var n = {};
                  return (
                    t.forEachValue(function (t, e) {
                      return (n[e] = t.get());
                    }),
                    n
                  );
                })(t),
                (function (t) {
                  var n = {};
                  return (
                    t.forEachValue(function (t, e) {
                      return (n[e] = t.getVelocity());
                    }),
                    n
                  );
                })(t)
              )
            : n
        );
      }
      function Tt(t, n, e) {
        t.hasValue(n) ? t.getValue(n).set(e) : t.addValue(n, p(e));
      }
      function Vt(t, n) {
        var e,
          i = St(t, n),
          o = i ? t.makeTargetAnimatable(i, !1) : {},
          a = o.transitionEnd,
          s = void 0 === a ? {} : a,
          u = (o.transition, (0, r._T)(o, ['transitionEnd', 'transition']));
        for (var l in (u = (0, r.pi)((0, r.pi)({}, u), s))) {
          Tt(t, l, ((e = u[l]), pt(e) ? e[e.length - 1] || 0 : e));
        }
      }
      function Bt(t, n) {
        (0, r.fl)(n)
          .reverse()
          .forEach(function (e) {
            var r;
            Vt(t, t.getVariant(e)),
              null === (r = t.variantChildren) ||
                void 0 === r ||
                r.forEach(function (t) {
                  Bt(t, n);
                });
          });
      }
      function Lt(t, n) {
        return Array.isArray(n) ? Bt(t, n) : 'string' === typeof n ? Bt(t, [n]) : void Vt(t, n);
      }
      function kt(t, n, e) {
        var r,
          i,
          o,
          u = Object.keys(n).filter(function (n) {
            return !t.hasValue(n);
          }),
          l = u.length;
        if (l)
          for (var c = 0; c < l; c++) {
            var f = u[c],
              d = n[f],
              v = null;
            if ((Array.isArray(d) && (v = d[0]), null === v)) {
              var h = null !== (r = e[f]) && void 0 !== r ? r : t.readNativeValue(f);
              (v = void 0 !== h ? h : n[f]),
                (0, a.k)(
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
              : !A(v) && s.PY.test(d) && (v = V(f, d)),
              t.addValue(f, p(v)),
              (null !== (i = (o = e)[f]) && void 0 !== i) || (o[f] = v),
              (t.baseTarget[f] = v);
          }
      }
      function Rt(t, n) {
        if (n) return (n[t] || n.default || n).from;
      }
      function Dt(t, n, e) {
        var r,
          i,
          o = {};
        for (var a in t)
          o[a] =
            null !== (r = Rt(a, n)) && void 0 !== r
              ? r
              : null === (i = e.getValue(a)) || void 0 === i
              ? void 0
              : i.get();
        return o;
      }
      var Mt = function (t) {
          return t instanceof f;
        },
        Ot = (function (t) {
          function n() {
            var n = (null !== t && t.apply(this, arguments)) || this;
            return (
              (n.defaultConfig = { enableHardwareAcceleration: !0, allowTransformNone: !0 }),
              (n.style = {}),
              (n.reactStyle = {}),
              (n.vars = {}),
              (n.transform = {}),
              (n.transformOrigin = {}),
              (n.transformKeys = []),
              (n.config = n.defaultConfig),
              (n.isLayoutProjectionEnabled = !1),
              (n.layoutUpdateListeners = new c()),
              (n.layoutMeasureListeners = new c()),
              (n.viewportBoxUpdateListeners = new c()),
              (n.hasViewportBoxUpdated = !1),
              (n.targetBoxFinal = { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } }),
              (n.treeScale = { x: 1, y: 1 }),
              (n.delta = y()),
              (n.deltaFinal = y()),
              (n.deltaTransform = Y),
              (n.stopLayoutAxisAnimation = { x: function () {}, y: function () {} }),
              (n.isTargetBoxLocked = !1),
              (n.updateLayoutDelta = function () {
                n.isLayoutProjectionEnabled && n.box && n.updateLayoutDeltas(), n.children.forEach(Ft);
              }),
              n
            );
          }
          return (
            (0, r.ZT)(n, t),
            (n.prototype.removeValue = function (n) {
              t.prototype.removeValue.call(this, n), delete this.vars[n], delete this.style[n];
            }),
            (n.prototype.clean = function () {
              (this.style = {}), (this.vars = {}), (this.transform = {});
            }),
            (n.prototype.updateConfig = function (t) {
              void 0 === t && (t = {}), (this.config = (0, r.pi)((0, r.pi)({}, this.defaultConfig), t));
            }),
            (n.prototype.read = function (t) {
              var n = this.getComputedStyle();
              return (I(t) ? n.getPropertyValue(t) : n[t]) || 0;
            }),
            (n.prototype.addValue = function (n, e) {
              t.prototype.addValue.call(this, n, e), n.startsWith('rotate') && (this.layoutOrigin = 0.5);
            }),
            (n.prototype.readNativeValue = function (t) {
              if (D(t)) {
                var n = S(t);
                return (n && n.default) || 0;
              }
              return this.read(t);
            }),
            (n.prototype.getBaseValue = function (n, e) {
              var r,
                i = null === (r = e.style) || void 0 === r ? void 0 : r[n];
              return void 0 === i || Mt(i) ? t.prototype.getBaseValue.call(this, n, e) : i;
            }),
            (n.prototype.makeTargetAnimatable = function (t, n) {
              void 0 === n && (n = !0);
              var e = t.transition,
                i = t.transitionEnd,
                o = (0, r._T)(t, ['transition', 'transitionEnd']),
                a = this.config.transformValues,
                s = Dt(o, e || {}, this);
              if ((a && (i && (i = a(i)), o && (o = a(o)), s && (s = a(s))), n)) {
                kt(this, o, s);
                var u = wt(this, o, s, i);
                (i = u.transitionEnd), (o = u.target);
              }
              return (0, r.pi)({ transition: e, transitionEnd: i }, o);
            }),
            (n.prototype.enableLayoutProjection = function () {
              this.isLayoutProjectionEnabled = !0;
            }),
            (n.prototype.hide = function () {
              !1 !== this.isVisible && ((this.isVisible = !1), this.scheduleRender());
            }),
            (n.prototype.show = function () {
              !0 !== this.isVisible && ((this.isVisible = !0), this.scheduleRender());
            }),
            (n.prototype.onLayoutUpdate = function (t) {
              return this.layoutUpdateListeners.add(t);
            }),
            (n.prototype.onLayoutMeasure = function (t) {
              return this.layoutMeasureListeners.add(t);
            }),
            (n.prototype.onViewportBoxUpdate = function (t) {
              return this.viewportBoxUpdateListeners.add(t);
            }),
            (n.prototype.layoutReady = function (t) {
              this.layoutUpdateListeners.notify(this.box, this.prevViewportBox || this.box, t);
            }),
            (n.prototype.getBoundingBox = function () {
              var t = this.config.transformPagePoint;
              return ct(this.element, t);
            }),
            (n.prototype.getBoundingBoxWithoutTransforms = function () {
              var t,
                n,
                e = this.getBoundingBox();
              return (t = e), (n = this.latest), rt(t.x, n, tt), rt(t.y, n, nt), e;
            }),
            (n.prototype.getComputedStyle = function () {
              return window.getComputedStyle(this.element);
            }),
            (n.prototype.snapshotBoundingBox = function () {
              (this.prevViewportBox = this.getBoundingBoxWithoutTransforms()),
                this.rebaseTargetBox(!1, this.prevViewportBox);
            }),
            (n.prototype.rebaseTargetBox = function (t, n) {
              var e = this;
              void 0 === t && (t = !1), void 0 === n && (n = this.box);
              var r = this.getAxisProgress(),
                i = r.x,
                o = r.y,
                a = this.box && !this.isTargetBoxLocked && !i.isAnimating() && !o.isAnimating();
              (t || a) &&
                lt(function (t) {
                  var r = n[t],
                    i = r.min,
                    o = r.max;
                  e.setAxisTarget(t, i, o);
                });
            }),
            (n.prototype.measureLayout = function () {
              var t = this;
              (this.box = this.getBoundingBox()),
                (this.boxCorrected = m(this.box)),
                this.targetBox || (this.targetBox = m(this.box)),
                this.layoutMeasureListeners.notify(this.box, this.prevViewportBox || this.box),
                i.ZP.update(function () {
                  return t.rebaseTargetBox();
                });
            }),
            (n.prototype.lockTargetBox = function () {
              this.isTargetBoxLocked = !0;
            }),
            (n.prototype.unlockTargetBox = function () {
              this.stopLayoutAnimation(), (this.isTargetBoxLocked = !1);
            }),
            (n.prototype.resetTransform = function () {
              this.suspendHoverEvents();
              var t = this.config.transformTemplate;
              (this.element.style.transform = t ? t({}, '') : 'none'), this.scheduleRender();
            }),
            (n.prototype.setAxisTarget = function (t, n, e) {
              var r = this.targetBox[t];
              (r.min = n), (r.max = e), (this.hasViewportBoxUpdated = !0), this.rootParent.scheduleUpdateLayoutDelta();
            }),
            (n.prototype.getAxisProgress = function () {
              return this.axisProgress || (this.axisProgress = { x: p(0), y: p(0) }), this.axisProgress;
            }),
            (n.prototype.startLayoutAxisAnimation = function (t, n) {
              var e,
                r = this,
                i = this.getAxisProgress()[t],
                o = this.targetBox[t],
                a = o.min,
                s = o.max - a;
              return (
                i.clearListeners(),
                i.set(a),
                i.set(a),
                i.onChange(function (n) {
                  return r.setAxisTarget(t, n, n + s);
                }),
                null === (e = this.animateMotionValue) || void 0 === e ? void 0 : e.call(this, t, i, 0, n)
              );
            }),
            (n.prototype.stopLayoutAnimation = function () {
              var t = this;
              lt(function (n) {
                return t.getAxisProgress()[n].stop();
              });
            }),
            (n.prototype.withoutTransform = function (t) {
              this.isLayoutProjectionEnabled && this.resetTransform(),
                this.parent ? this.parent.withoutTransform(t) : t(),
                this.isLayoutProjectionEnabled && (this.element.style.transform = this.style.transform);
            }),
            (n.prototype.updateLayoutDeltas = function () {
              var t, n;
              (t = this.boxCorrected), (n = this.box), G(t.x, n.x), G(t.y, n.y);
              var e = this.treeScale.x,
                r = this.treeScale.y;
              !(function (t, n, e) {
                var r = e.length;
                if (r) {
                  n.x = n.y = 1;
                  for (var i = 0; i < r; i++) {
                    var o = e[i].delta;
                    (n.x *= o.x.scale), (n.y *= o.y.scale), Q(t, o);
                  }
                }
              })(this.boxCorrected, this.treeScale, this.treePath),
                ut(this.delta, this.boxCorrected, this.targetBox, this.layoutOrigin),
                this.hasViewportBoxUpdated && this.viewportBoxUpdateListeners.notify(this.targetBox, this.delta),
                (this.hasViewportBoxUpdated = !1);
              var i = U(this.delta, this.treeScale);
              (i === this.deltaTransform && e === this.treeScale.x && r === this.treeScale.y) || this.scheduleRender(),
                (this.deltaTransform = i);
            }),
            (n.prototype.updateTransformDeltas = function () {
              var t, n, e;
              this.isLayoutProjectionEnabled &&
                this.box &&
                ((t = this.targetBoxFinal),
                (n = this.targetBox),
                (e = this.latest),
                J(t.x, n.x, e, tt),
                J(t.y, n.y, e, nt),
                ut(this.deltaFinal, this.boxCorrected, this.targetBoxFinal, this.layoutOrigin));
            }),
            (n.prototype.build = function () {
              this.updateTransformDeltas(),
                void 0 !== this.isVisible && (this.style.visibility = this.isVisible ? 'visible' : 'hidden'),
                j(
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
            (n.prototype.render = function () {
              for (var t in (this.build(), Object.assign(this.element.style, this.style), this.vars))
                this.element.style.setProperty(t, this.vars[t]);
            }),
            n
          );
        })(d),
        Ft = function (t) {
          return t.updateLayoutDelta();
        };
      function Ut(t) {
        var n = (0, u.useRef)(null);
        return null === n.current && (n.current = t()), n.current;
      }
      function Yt(t, n, e) {
        return 'string' === typeof t ? t : s.px.transform(n + e * t);
      }
      var It = function (t, n) {
          return s.px.transform(t * n);
        },
        Ht = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
        _t = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
      var Zt = { x: 0, y: 0, width: 0, height: 0 };
      function Xt(t, n, e, i, o, a, s, u, l, c, f, p, d, v, h) {
        var m = t.attrX,
          g = t.attrY,
          y = t.originX,
          x = t.originY,
          b = t.pathLength,
          E = t.pathSpacing,
          C = void 0 === E ? 1 : E,
          P = t.pathOffset,
          w = void 0 === P ? 0 : P;
        return (
          j(
            (0, r._T)(t, ['attrX', 'attrY', 'originX', 'originY', 'pathLength', 'pathSpacing', 'pathOffset']),
            i,
            e,
            o,
            a,
            s,
            u,
            f,
            p,
            d,
            v,
            h
          ),
          i.transform && ((n.transform = i.transform), delete i.transform),
          (void 0 !== y || void 0 !== x || n.transform) &&
            (n.transformOrigin = (function (t, n, e) {
              return Yt(n, t.x, t.width) + ' ' + Yt(e, t.y, t.height);
            })(l || Zt, void 0 !== y ? y : 0.5, void 0 !== x ? x : 0.5)),
          void 0 !== m && (i.x = m),
          void 0 !== g && (i.y = g),
          void 0 !== c &&
            void 0 !== b &&
            (function (t, n, e, r, i, o) {
              void 0 === r && (r = 1), void 0 === i && (i = 0), void 0 === o && (o = !0);
              var a = o ? Ht : _t;
              t[a.offset] = It(-i, n);
              var s = It(e, n),
                u = It(r, n);
              t[a.array] = s + ' ' + u;
            })(i, c, b, C, w, !1),
          i
        );
      }
      var Wt = new Set([
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
        zt = /([a-z])([A-Z])/g,
        $t = function (t) {
          return t.replace(zt, '$1-$2').toLowerCase();
        },
        jt = (function (t) {
          function n() {
            var n = (null !== t && t.apply(this, arguments)) || this;
            return (
              (n.attrs = {}), (n.defaultConfig = { enableHardwareAcceleration: !1 }), (n.config = n.defaultConfig), n
            );
          }
          return (
            (0, r.ZT)(n, t),
            (n.prototype.mount = function (n) {
              t.prototype.mount.call(this, n), this.measure();
            }),
            (n.prototype.measure = function () {
              var t = this;
              try {
                this.dimensions =
                  'function' === typeof this.element.getBBox
                    ? this.element.getBBox()
                    : this.element.getBoundingClientRect();
              } catch (n) {
                this.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              'path' === this.element.tagName && (this.totalPathLength = this.element.getTotalLength()),
                i.ZP.render(function () {
                  return t.render();
                });
            }),
            (n.prototype.getBaseValue = function (n, e) {
              var r = e[n];
              return void 0 === r || Mt(r) ? t.prototype.getBaseValue.call(this, n, e) : r;
            }),
            (n.prototype.clean = function () {
              t.prototype.clean.call(this), (this.attrs = {});
            }),
            (n.prototype.read = function (t) {
              return (t = Wt.has(t) ? t : $t(t)), this.element.getAttribute(t);
            }),
            (n.prototype.build = function () {
              this.updateTransformDeltas(),
                Xt(
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
            (n.prototype.render = function () {
              for (var n in (t.prototype.render.call(this), this.attrs))
                this.element.setAttribute(Wt.has(n) ? n : $t(n), this.attrs[n]);
            }),
            n
          );
        })(Ot);
      var Gt = new Set([
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
      function Nt(t) {
        return 'string' === typeof t && Gt.has(t);
      }
      var Kt = (0, u.createContext)(null),
        qt = (0, u.createContext)({ variantContext: {} });
      function Qt() {
        return (0, u.useContext)(qt).variantContext;
      }
      function Jt() {
        return (0, u.useContext)(qt).visualElement;
      }
      var tn = (0, u.createContext)(null),
        nn = (0, u.createContext)({
          transformPagePoint: function (t) {
            return t;
          },
          features: [],
          isStatic: !1,
        });
      function en(t) {
        return (0, u.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
      function rn(t, n, e, r) {
        return (
          t.addEventListener(n, e, r),
          function () {
            return t.removeEventListener(n, e, r);
          }
        );
      }
      function on(t, n, e, r) {
        (0, u.useEffect)(
          function () {
            var i = t.current;
            if (e && i) return rn(i, n, e, r);
          },
          [t, n, e, r]
        );
      }
      function an(t) {
        return 'undefined' !== typeof PointerEvent && t instanceof PointerEvent
          ? !('mouse' !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function sn(t) {
        return !!t.touches;
      }
      var un = { pageX: 0, pageY: 0 };
      function ln(t, n) {
        void 0 === n && (n = 'page');
        var e = t.touches[0] || t.changedTouches[0] || un;
        return { x: e[n + 'X'], y: e[n + 'Y'] };
      }
      function cn(t, n) {
        return void 0 === n && (n = 'page'), { x: t[n + 'X'], y: t[n + 'Y'] };
      }
      function fn(t, n) {
        return void 0 === n && (n = 'page'), { point: sn(t) ? ln(t, n) : cn(t, n) };
      }
      function pn(t) {
        return fn(t, 'client');
      }
      var dn = function (t, n) {
          void 0 === n && (n = !1);
          var e,
            r = function (n) {
              return t(n, fn(n));
            };
          return n
            ? ((e = r),
              function (t) {
                var n = t instanceof MouseEvent;
                (!n || (n && 0 === t.button)) && e(t);
              })
            : r;
        },
        vn = 'undefined' !== typeof window,
        hn = {
          pointerdown: 'mousedown',
          pointermove: 'mousemove',
          pointerup: 'mouseup',
          pointercancel: 'mousecancel',
          pointerover: 'mouseover',
          pointerout: 'mouseout',
          pointerenter: 'mouseenter',
          pointerleave: 'mouseleave',
        },
        mn = {
          pointerdown: 'touchstart',
          pointermove: 'touchmove',
          pointerup: 'touchend',
          pointercancel: 'touchcancel',
        };
      function gn(t) {
        return vn && null === window.onpointerdown
          ? t
          : vn && null === window.ontouchstart
          ? mn[t]
          : vn && null === window.onmousedown
          ? hn[t]
          : t;
      }
      function yn(t, n, e, r) {
        return rn(t, gn(n), dn(e, 'pointerdown' === n), r);
      }
      function xn(t, n, e, r) {
        return on(t, gn(n), e && dn(e, 'pointerdown' === n), r);
      }
      var bn = function (t) {
          return 1e3 * t;
        },
        En = (function () {
          function t(t, n, e) {
            var a = this,
              s = (void 0 === e ? {} : e).transformPagePoint;
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function () {
                if (a.lastMoveEvent && a.lastMoveEventInfo) {
                  var t = wn(a.lastMoveEventInfo, a.history),
                    n = null !== a.startEvent,
                    e = (0, o.TE)(t.offset, { x: 0, y: 0 }) >= 3;
                  if (n || e) {
                    var s = t.point,
                      u = (0, i.$B)().timestamp;
                    a.history.push((0, r.pi)((0, r.pi)({}, s), { timestamp: u }));
                    var l = a.handlers,
                      c = l.onStart,
                      f = l.onMove;
                    n || (c && c(a.lastMoveEvent, t), (a.startEvent = a.lastMoveEvent)), f && f(a.lastMoveEvent, t);
                  }
                }
              }),
              (this.handlePointerMove = function (t, n) {
                (a.lastMoveEvent = t),
                  (a.lastMoveEventInfo = Cn(n, a.transformPagePoint)),
                  an(t) && 0 === t.buttons ? a.handlePointerUp(t, n) : i.ZP.update(a.updatePoint, !0);
              }),
              (this.handlePointerUp = function (t, n) {
                a.end();
                var e = a.handlers.onEnd;
                if (e) {
                  var r = wn(Cn(n, a.transformPagePoint), a.history);
                  e && e(t, r);
                }
              }),
              !(sn(t) && t.touches.length > 1))
            ) {
              (this.handlers = n), (this.transformPagePoint = s);
              var u = Cn(fn(t), this.transformPagePoint),
                l = u.point,
                c = (0, i.$B)().timestamp;
              this.history = [(0, r.pi)((0, r.pi)({}, l), { timestamp: c })];
              var f = n.onSessionStart;
              f && f(t, wn(u, this.history)),
                (this.removeListeners = (0, o.zG)(
                  yn(window, 'pointermove', this.handlePointerMove),
                  yn(window, 'pointerup', this.handlePointerUp),
                  yn(window, 'pointercancel', this.handlePointerUp)
                ));
            }
          }
          return (
            (t.prototype.updateHandlers = function (t) {
              this.handlers = t;
            }),
            (t.prototype.end = function () {
              this.removeListeners && this.removeListeners(), i.qY.update(this.updatePoint);
            }),
            t
          );
        })();
      function Cn(t, n) {
        return n ? { point: n(t.point) } : t;
      }
      function Pn(t, n) {
        return { x: t.x - n.x, y: t.y - n.y };
      }
      function wn(t, n) {
        var e = t.point;
        return { point: e, delta: Pn(e, Sn(n)), offset: Pn(e, An(n)), velocity: Tn(n, 0.1) };
      }
      function An(t) {
        return t[0];
      }
      function Sn(t) {
        return t[t.length - 1];
      }
      function Tn(t, n) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (var e = t.length - 1, r = null, i = Sn(t); e >= 0 && ((r = t[e]), !(i.timestamp - r.timestamp > bn(n))); )
          e--;
        if (!r) return { x: 0, y: 0 };
        var o = (i.timestamp - r.timestamp) / 1e3;
        if (0 === o) return { x: 0, y: 0 };
        var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      var Vn = function (t, n) {
          return !!n && (t === n || Vn(t, n.parentElement));
        },
        Bn = {
          linear: o.GE,
          easeIn: o.YQ,
          easeInOut: o.mZ,
          easeOut: o.Vv,
          circIn: o.Z7,
          circInOut: o.X7,
          circOut: o.Bn,
          backIn: o.G2,
          backInOut: o.XL,
          backOut: o.CG,
          anticipate: o.LU,
          bounceIn: o.h9,
          bounceInOut: o.yD,
          bounceOut: o.gJ,
        },
        Ln = function (t) {
          if (Array.isArray(t)) {
            (0, a.k)(4 === t.length, 'Cubic bezier arrays must contain four numerical values.');
            var n = (0, r.CR)(t, 4),
              e = n[0],
              i = n[1],
              s = n[2],
              u = n[3];
            return (0, o._s)(e, i, s, u);
          }
          return 'string' === typeof t ? ((0, a.k)(void 0 !== Bn[t], "Invalid easing type '" + t + "'"), Bn[t]) : t;
        },
        kn = function (t, n) {
          return (
            'zIndex' !== t &&
            (!('number' !== typeof n && !Array.isArray(n)) ||
              !('string' !== typeof n || !s.PY.test(n) || n.startsWith('url(')))
          );
        },
        Rn = function () {
          return { type: 'spring', stiffness: 500, damping: 25, restDelta: 0.5, restSpeed: 10 };
        },
        Dn = function (t) {
          return { type: 'spring', stiffness: 550, damping: 0 === t ? 100 : 30, restDelta: 0.01, restSpeed: 10 };
        },
        Mn = function () {
          return { type: 'keyframes', ease: 'linear', duration: 0.3 };
        },
        On = function (t) {
          return { type: 'keyframes', duration: 0.8, values: t };
        },
        Fn = {
          x: Rn,
          y: Rn,
          z: Rn,
          rotate: Rn,
          rotateX: Rn,
          rotateY: Rn,
          rotateZ: Rn,
          scaleX: Dn,
          scaleY: Dn,
          scale: Dn,
          opacity: Mn,
          backgroundColor: Mn,
          color: Mn,
          default: Dn,
        };
      var Un = !1;
      function Yn(t) {
        var n = t.ease,
          e = t.times,
          i = t.yoyo,
          o = t.flip,
          s = t.loop,
          u = (0, r._T)(t, ['ease', 'times', 'yoyo', 'flip', 'loop']),
          l = (0, r.pi)({}, u);
        return (
          e && (l.offset = e),
          u.duration && (l.duration = bn(u.duration)),
          u.repeatDelay && (l.repeatDelay = bn(u.repeatDelay)),
          n &&
            (l.ease = (function (t) {
              return Array.isArray(t) && 'number' !== typeof t[0];
            })(n)
              ? n.map(Ln)
              : Ln(n)),
          'tween' === u.type && (l.type = 'keyframes'),
          (i || s || o) &&
            ((0, a.K)(
              !Un,
              'yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.'
            ),
            (Un = !0),
            i ? (l.repeatType = 'reverse') : s ? (l.repeatType = 'loop') : o && (l.repeatType = 'mirror'),
            (l.repeat = s || i || o || u.repeat)),
          'spring' !== u.type && (l.type = 'keyframes'),
          l
        );
      }
      function In(t, n, e) {
        var i;
        return (
          Array.isArray(n.to) && ((null !== (i = t.duration) && void 0 !== i) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) && null === t.to[0] && ((t.to = (0, r.fl)(t.to)), (t.to[0] = t.from));
          })(n),
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
            var n = (0, r._T)(t, [
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
            return !!Object.keys(n).length;
          })(t) ||
            (t = (0, r.pi)(
              (0, r.pi)({}, t),
              (function (t, n) {
                var e;
                return (e = pt(n) ? On : Fn[t] || Fn.default), (0, r.pi)({ to: n }, e(n));
              })(e, n.to)
            )),
          (0, r.pi)((0, r.pi)({}, n), Yn(t))
        );
      }
      function Hn(t, n, e, i) {
        return (
          void 0 === i && (i = {}),
          n.start(function (s) {
            var u,
              l,
              c = (function (t, n, e, i, s) {
                var u,
                  l = (function (t, n) {
                    return t[n] || t.default || t;
                  })(i, t),
                  c = null !== (u = l.from) && void 0 !== u ? u : n.get(),
                  f = kn(t, e);
                'none' === c && f && 'string' === typeof e && (c = V(t, e));
                var p = kn(t, c);
                return (
                  (0, a.K)(
                    p === f,
                    'You are trying to animate ' +
                      t +
                      ' from "' +
                      c +
                      '" to "' +
                      e +
                      '". ' +
                      c +
                      ' is not an animatable value - to enable this animation set ' +
                      c +
                      ' to a value animatable to ' +
                      e +
                      ' via the `style` property.'
                  ),
                  p && f && !1 !== l.type
                    ? function () {
                        var i = {
                          from: c,
                          to: e,
                          velocity: n.getVelocity(),
                          onComplete: s,
                          onUpdate: function (t) {
                            return n.set(t);
                          },
                        };
                        return 'inertia' === l.type || 'decay' === l.type
                          ? (0, o.II)((0, r.pi)((0, r.pi)({}, i), l))
                          : (0, o.jt)(
                              (0, r.pi)((0, r.pi)({}, In(l, i, t)), {
                                onUpdate: function (t) {
                                  var n;
                                  i.onUpdate(t), null === (n = l.onUpdate) || void 0 === n || n.call(l, t);
                                },
                                onComplete: function () {
                                  var t;
                                  i.onComplete(), null === (t = l.onComplete) || void 0 === t || t.call(l);
                                },
                              })
                            );
                      }
                    : function () {
                        var t;
                        return (
                          n.set(e),
                          s(),
                          null === (t = null === l || void 0 === l ? void 0 : l.onComplete) ||
                            void 0 === t ||
                            t.call(l),
                          { stop: function () {} }
                        );
                      }
                );
              })(t, n, e, i, s),
              f = (function (t, n) {
                var e, r, i, o, a;
                return null !==
                  (a =
                    null !==
                      (o =
                        null !== (r = null === (e = t[n]) || void 0 === e ? void 0 : e.delay) && void 0 !== r
                          ? r
                          : null === (i = t.default) || void 0 === i
                          ? void 0
                          : i.delay) && void 0 !== o
                      ? o
                      : t.delay) && void 0 !== a
                  ? a
                  : 0;
              })(i, t),
              p = function () {
                return (l = c());
              };
            return (
              f ? (u = setTimeout(p, bn(f))) : p(),
              function () {
                clearTimeout(u), null === l || void 0 === l || l.stop();
              }
            );
          })
        );
      }
      function _n(t, n, e) {
        var r;
        if ((t.onAnimationStart(), Array.isArray(n))) {
          var i = n.map(function (n) {
            return Zn(t, n, e);
          });
          r = Promise.all(i);
        } else r = 'string' === typeof n ? Zn(t, n, e) : Xn(t, n, e);
        return r.then(function () {
          return t.onAnimationComplete();
        });
      }
      function Zn(t, n, e) {
        var i;
        void 0 === e && (e = {});
        var o = St(t, n, e.custom),
          a = (o || {}).transition,
          s = void 0 === a ? t.getDefaultTransition() || {} : a;
        e.transitionOverride && (s = e.transitionOverride);
        var u = o
            ? function () {
                return Xn(t, o, e);
              }
            : function () {
                return Promise.resolve();
              },
          l = (null === (i = t.variantChildrenOrder) || void 0 === i ? void 0 : i.size)
            ? function (i) {
                void 0 === i && (i = 0);
                var o = s.delayChildren,
                  a = void 0 === o ? 0 : o,
                  u = s.staggerChildren,
                  l = s.staggerDirection;
                return (function (t, n, e, i, o, a) {
                  void 0 === e && (e = 0);
                  void 0 === i && (i = 0);
                  void 0 === o && (o = 1);
                  var s = [],
                    u = (t.variantChildrenOrder.size - 1) * i,
                    l =
                      1 === o
                        ? function (t) {
                            return void 0 === t && (t = 0), t * i;
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), u - t * i;
                          };
                  return (
                    Array.from(t.variantChildrenOrder).forEach(function (t, i) {
                      var o = Zn(t, n, (0, r.pi)((0, r.pi)({}, a), { delay: e + l(i) }));
                      s.push(o);
                    }),
                    Promise.all(s)
                  );
                })(t, n, a + i, u, l, e);
              }
            : function () {
                return Promise.resolve();
              },
          c = s.when;
        if (c) {
          var f = (0, r.CR)('beforeChildren' === c ? [u, l] : [l, u], 2),
            p = f[0],
            d = f[1];
          return p().then(d);
        }
        return Promise.all([u(), l(e.delay)]);
      }
      function Xn(t, n, e) {
        var i,
          o = void 0 === e ? {} : e,
          a = o.delay,
          s = void 0 === a ? 0 : a,
          u = o.transitionOverride,
          l = o.type,
          c = t.makeTargetAnimatable(n),
          f = c.transition,
          p = void 0 === f ? t.getDefaultTransition() : f,
          d = c.transitionEnd,
          v = (0, r._T)(c, ['transition', 'transitionEnd']);
        u && (p = u);
        var h = [],
          m = l && (null === (i = t.animationState) || void 0 === i ? void 0 : i.getProtectedKeys(l));
        for (var g in v) {
          var y = t.getValue(g),
            x = v[g];
          if (y && void 0 !== x && void 0 === (null === m || void 0 === m ? void 0 : m[g])) {
            var b = Hn(g, y, x, (0, r.pi)({ delay: s }, p));
            h.push(b);
          }
        }
        return Promise.all(h).then(function () {
          d && Vt(t, d);
        });
      }
      var Wn,
        zn = (function () {
          function t() {
            (this.hasMounted = !1), (this.pendingAnimations = []), (this.subscribers = new Set());
          }
          return (
            (t.prototype.subscribe = function (t) {
              var n = this;
              return (
                this.subscribers.add(t),
                function () {
                  return n.subscribers.delete(t);
                }
              );
            }),
            (t.prototype.start = function (t, n) {
              var e = this;
              if (this.hasMounted) {
                var r = [];
                return (
                  this.subscribers.forEach(function (e) {
                    r.push(_n(e, t, { transitionOverride: n }));
                  }),
                  Promise.all(r)
                );
              }
              return new Promise(function (r) {
                e.pendingAnimations.push({ animation: [t, n], resolve: r });
              });
            }),
            (t.prototype.set = function (t) {
              return (
                (0, a.k)(
                  this.hasMounted,
                  'controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.'
                ),
                this.subscribers.forEach(function (n) {
                  Lt(n, t);
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
                this.pendingAnimations.forEach(function (n) {
                  var e = n.animation,
                    i = n.resolve;
                  t.start.apply(t, (0, r.fl)(e)).then(i);
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
      })(Wn || (Wn = {}));
      var $n = [Wn.Animate, Wn.Hover, Wn.Tap, Wn.Drag, Wn.Focus, Wn.Exit],
        jn = (0, r.fl)($n).reverse(),
        Gn = $n.length;
      function Nn(t) {
        var n,
          e,
          i = (function (t) {
            return function (n) {
              return Promise.all(
                n.map(function (n) {
                  var e = n.animation,
                    r = n.options;
                  return _n(t, e, r);
                })
              );
            };
          })(t),
          o = (function () {
            var t;
            return (
              ((t = {})[Wn.Animate] = Kn(!0)),
              (t[Wn.Hover] = Kn()),
              (t[Wn.Tap] = Kn()),
              (t[Wn.Drag] = Kn()),
              (t[Wn.Focus] = Kn()),
              (t[Wn.Exit] = Kn()),
              t
            );
          })(),
          a = !0,
          s = function (n, e) {
            var i = St(t, e);
            if (i) {
              i.transition;
              var o = i.transitionEnd,
                a = (0, r._T)(i, ['transition', 'transitionEnd']);
              n = (0, r.pi)((0, r.pi)((0, r.pi)({}, n), a), o);
            }
            return n;
          };
        function u(u, l, c, f) {
          void 0 === l && (l = {}), (n = u), (e = l);
          var p = [],
            d = new Set(),
            v = {};
          u.variants && t.updateConfig((0, r.pi)((0, r.pi)({}, t.config), { variants: u.variants }));
          for (
            var h = 1 / 0,
              m = function (n) {
                var e,
                  i = jn[n],
                  m = o[i],
                  g = null !== (w = u[i]) && void 0 !== w ? w : l[i],
                  y = 'string' === typeof (e = g) || At(e),
                  x = i === f ? m.isActive : null;
                !1 === x && (h = n);
                var b = g === l[i] && y;
                if (
                  (b && a && t.manuallyAnimateOnMount && (b = !1),
                  a && i === Wn.Animate && t.prevSnapshot && ((a = !1), (m.prevResolvedValues = t.prevSnapshot)),
                  (m.protectedKeys = (0, r.pi)({}, v)),
                  (!m.isActive && null === x) || (!g && !m.prevProp) || g instanceof zn || 'boolean' === typeof g)
                )
                  return 'continue';
                var E =
                    (function (t, n) {
                      if ('string' === typeof n) return n !== t;
                      if (At(n))
                        return !(function (t, n) {
                          if (!Array.isArray(n)) return !1;
                          var e = n.length;
                          if (e !== t.length) return !1;
                          for (var r = 0; r < e; r++) if (n[r] !== t[r]) return !1;
                          return !0;
                        })(n, t);
                      return !1;
                    })(m.prevProp, g) ||
                    (i === f && m.isActive && !b && y) ||
                    (n > h && y),
                  C = Array.isArray(g) ? g : [g],
                  P = C.reduce(s, {});
                !1 === x && (P = {});
                var w = m.prevResolvedValues,
                  A = void 0 === w ? {} : w,
                  S = (0, r.pi)((0, r.pi)({}, A), P);
                for (var T in S) {
                  var V = P[T],
                    B = A[T];
                  v.hasOwnProperty(T) ||
                    (V !== B
                      ? void 0 !== V
                        ? ((E = !0), d.delete(T))
                        : d.add(T)
                      : void 0 !== V && d.has(T)
                      ? ((E = !0), d.delete(T))
                      : (m.protectedKeys[T] = !0));
                }
                (m.prevProp = g),
                  (m.prevResolvedValues = P),
                  m.isActive && (v = (0, r.pi)((0, r.pi)({}, v), P)),
                  E &&
                    !b &&
                    p.push.apply(
                      p,
                      (0, r.fl)(
                        C.map(function (t) {
                          return { animation: t, options: (0, r.pi)({ type: i }, c) };
                        })
                      )
                    );
              },
              g = 0;
            g < Gn;
            g++
          )
            m(g);
          if (d.size) {
            var y = {};
            d.forEach(function (n) {
              var e = t.getBaseValue(n, u);
              void 0 !== e && (y[n] = e);
            }),
              p.push({ animation: y });
          }
          var x = Boolean(p.length);
          return a && !1 === u.initial && !t.manuallyAnimateOnMount && (x = !1), (a = !1), x ? i(p) : Promise.resolve();
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
                    var n;
                    return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(r, i);
                  }),
                (o[r].isActive = i),
                u(n, e, a, r));
          },
          setAnimateFunction: function (n) {
            i = n(t);
          },
        };
      }
      function Kn(t) {
        return void 0 === t && (t = !1), { isActive: t, protectedKeys: {}, prevResolvedValues: {} };
      }
      function qn(t) {
        var n = null;
        return function () {
          return (
            null === n &&
            ((n = t),
            function () {
              n = null;
            })
          );
        };
      }
      var Qn = qn('dragHorizontal'),
        Jn = qn('dragVertical');
      function te(t) {
        var n = !1;
        if ('y' === t) n = Jn();
        else if ('x' === t) n = Qn();
        else {
          var e = Qn(),
            r = Jn();
          e && r
            ? (n = function () {
                e(), r();
              })
            : (e && e(), r && r());
        }
        return n;
      }
      function ne(t, n) {
        var e = t.onTap,
          r = t.onTapStart,
          i = t.onTapCancel,
          a = t.whileTap,
          s = e || r || i || a,
          l = (0, u.useRef)(!1),
          c = (0, u.useRef)(null);
        function f() {
          var t;
          null === (t = c.current) || void 0 === t || t.call(c), (c.current = null);
        }
        function p() {
          var t;
          return (
            (l.current = !1),
            null === (t = n.animationState) || void 0 === t || t.setActive(Wn.Tap, !1),
            !(function () {
              var t = te(!0);
              return !t || (t(), !1);
            })()
          );
        }
        function d(t, r) {
          p() &&
            (Vn(n.getInstance(), t.target)
              ? null === e || void 0 === e || e(t, r)
              : null === i || void 0 === i || i(t, r));
        }
        function v(t, n) {
          p() && (null === i || void 0 === i || i(t, n));
        }
        xn(
          n,
          'pointerdown',
          s
            ? function (t, e) {
                var i;
                f(),
                  l.current ||
                    ((l.current = !0),
                    (c.current = (0, o.zG)(yn(window, 'pointerup', d), yn(window, 'pointercancel', v))),
                    null === r || void 0 === r || r(t, e),
                    null === (i = n.animationState) || void 0 === i || i.setActive(Wn.Tap, !0));
              }
            : void 0
        ),
          en(f);
      }
      function ee(t, n, e) {
        return function (r, i) {
          var o;
          an(r) &&
            t.isHoverEventsEnabled &&
            (null === e || void 0 === e || e(r, i),
            null === (o = t.animationState) || void 0 === o || o.setActive(Wn.Hover, n));
        };
      }
      function re(t, n) {
        !(function (t, n) {
          var e = t.onPan,
            r = t.onPanStart,
            i = t.onPanEnd,
            o = t.onPanSessionStart,
            a = e || r || i || o,
            s = (0, u.useRef)(null),
            l = (0, u.useContext)(nn).transformPagePoint,
            c = {
              onSessionStart: o,
              onStart: r,
              onMove: e,
              onEnd: function (t, n) {
                (s.current = null), i && i(t, n);
              },
            };
          (0, u.useEffect)(function () {
            null !== s.current && s.current.updateHandlers(c);
          }),
            xn(
              n,
              'pointerdown',
              a &&
                function (t) {
                  s.current = new En(t, c, { transformPagePoint: l });
                }
            ),
            en(function () {
              return s.current && s.current.end();
            });
        })(t, n),
          ne(t, n),
          (function (t, n) {
            var e = t.onHoverStart,
              r = t.onHoverEnd,
              i = t.whileHover;
            xn(n, 'pointerenter', e || i ? ee(n, !0, e) : void 0),
              xn(n, 'pointerleave', r || i ? ee(n, !1, r) : void 0);
          })(t, n),
          (function (t, n) {
            var e = t.whileFocus;
            on(
              n,
              'focus',
              e
                ? function () {
                    var t;
                    null === (t = n.animationState) || void 0 === t || t.setActive(Wn.Focus, !0);
                  }
                : void 0
            ),
              on(
                n,
                'blur',
                e
                  ? function () {
                      var t;
                      null === (t = n.animationState) || void 0 === t || t.setActive(Wn.Focus, !1);
                    }
                  : void 0
              );
          })(t, n);
      }
      var ie = function (t) {
          return function (n) {
            return t(n), null;
          };
        },
        oe = [
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
        ae = ie(function (t) {
          var n = t.visualElement;
          re((0, r._T)(t, ['visualElement']), n);
        }),
        se = {
          key: 'gestures',
          shouldRender: function (t) {
            return oe.some(function (n) {
              return t.hasOwnProperty(n);
            });
          },
          getComponent: function () {
            return ae;
          },
        },
        ue = new Set(
          (0, r.fl)(
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
            oe
          )
        );
      function le(t) {
        return ue.has(t);
      }
      var ce = function (t) {
        return !le(t);
      };
      try {
        var fe = e(4465).Z;
        ce = function (t) {
          return t.startsWith('on') ? !le(t) : fe(t);
        };
      } catch (Vr) {}
      function pe(t, n) {
        var e = n.layout,
          r = n.layoutId;
        return D(t) || O(t) || ((e || void 0 !== r) && !!$[t]);
      }
      function de(t, n, e, r, i) {
        for (var o in (void 0 === r && (r = !1), r && (t.reactStyle = {}), e)) {
          var a = e[o],
            s = !1;
          if (Mt(a)) me.has(o) || (t.addValue(o, a), (s = !0));
          else if (pe(o, i)) {
            if (t.hasValue(o)) {
              if (a !== n[o]) {
                if (Mt(n[o])) t.addValue(o, p(a));
                else t.getValue(o).set(a);
              }
            } else t.addValue(o, p(a));
            s = !0;
          } else r && (t.reactStyle[o] = a);
          s && (n[o] = a);
        }
      }
      var ve,
        he,
        me = new Set([]),
        ge = function () {
          return {};
        };
      !(function (t) {
        (t[(t.Entering = 0)] = 'Entering'), (t[(t.Present = 1)] = 'Present'), (t[(t.Exiting = 2)] = 'Exiting');
      })(ve || (ve = {})),
        (function (t) {
          (t[(t.Hide = 0)] = 'Hide'), (t[(t.Show = 1)] = 'Show');
        })(he || (he = {}));
      var ye = {
          measureLayout: function (t) {
            return t.measureLayout();
          },
          layoutReady: function (t) {
            return t.layoutReady();
          },
        },
        xe = function (t, n) {
          return t.depth - n.depth;
        };
      function be() {
        var t = new Set();
        return {
          add: function (n) {
            return t.add(n);
          },
          flush: function (n) {
            var e = void 0 === n ? ye : n,
              r = e.measureLayout,
              i = e.layoutReady,
              o = e.parent,
              a = Array.from(t).sort(xe),
              s = function () {
                a.forEach(function (t) {
                  return t.resetTransform();
                }),
                  a.forEach(r);
              };
            o ? o.withoutTransform(s) : s(),
              a.forEach(i),
              a.forEach(function (t) {
                t.isPresent && (t.presence = ve.Present);
              }),
              t.clear();
          },
        };
      }
      function Ee(t) {
        return !!t.forceUpdate;
      }
      var Ce = (0, u.createContext)(be()),
        Pe = (0, u.createContext)(be()),
        we = 'undefined' !== typeof window ? u.useLayoutEffect : u.useEffect;
      function Ae() {
        var t = (0, u.useContext)(Kt);
        if (null === t) return [!0, null];
        var n = t.isPresent,
          e = t.onExitComplete,
          r = t.register,
          i = Be();
        (0, u.useEffect)(function () {
          return r(i);
        }, []);
        return !n && e
          ? [
              !1,
              function () {
                return null === e || void 0 === e ? void 0 : e(i);
              },
            ]
          : [!0];
      }
      function Se(t) {
        return null === t || t.isPresent;
      }
      var Te = 0,
        Ve = function () {
          return Te++;
        },
        Be = function () {
          return Ut(Ve);
        };
      function Le(t, n) {
        void 0 === n && (n = !1);
        var e = (0, u.useRef)(!0);
        (!n || (n && e.current)) && t(), (e.current = !1);
      }
      function ke(t) {
        var n = t.animate,
          e = t.variants,
          r = t.inherit;
        return null !== r && void 0 !== r ? r : !!e && !n;
      }
      function Re(t, n, e) {
        var r,
          i,
          o,
          a = Qt(),
          s = (0, u.useContext)(Kt),
          l = ke(n),
          c = [],
          f = {},
          p = !1;
        (function (t) {
          var n;
          return (
            'function' === typeof (null === (n = t.animate) || void 0 === n ? void 0 : n.start) ||
            Oe(t.animate) ||
            Oe(t.whileHover) ||
            Oe(t.whileDrag) ||
            Oe(t.whileTap) ||
            Oe(t.whileFocus) ||
            Oe(t.exit)
          );
        })(n) && ((p = !0), (a = {}));
        for (var d = p || n.variants, v = 0; v < Me; v++) {
          var h = De[v],
            m = n[h],
            g = a[h];
          Oe(m) || !1 === m ? ((f[h] = m), c.push(m)) : ((Oe(g) || !1 === g) && (f[h] = g), c.push(null)),
            c.push(Oe(g) ? g : null);
        }
        var y = null !== (r = n.animate) && void 0 !== r ? r : f.animate,
          x = n.initial;
        void 0 !== x || (!Oe(y) && !1 === f.initial) || (x = f.initial),
          !1 === (null === s || void 0 === s ? void 0 : s.initial) && (x = f.initial = !1),
          (f.parent = d ? t : a.parent),
          Le(function () {
            var n,
              e = !1 === x ? y : x;
            e && 'boolean' !== typeof e && ('object' !== typeof (n = e) || 'function' !== typeof n.start) && Lt(t, e);
          }, !e),
          Le(function () {
            t.forEachValue(function (n, e) {
              t.baseTarget[e] = n.get();
            });
          }, !0);
        var b,
          E = (0, u.useMemo)(function () {
            return f;
          }, c);
        return (
          d &&
            l &&
            !p &&
            ((b = null === (i = a.parent) || void 0 === i ? void 0 : i.addVariantChild(t)), (t.inheritsVariants = !0)),
          !p &&
            l &&
            (null === (o = t.parent) || void 0 === o ? void 0 : o.isMounted) &&
            !1 !== x &&
            y &&
            (t.manuallyAnimateOnMount = !0),
          (0, u.useEffect)(function () {
            return (
              (t.isMounted = !0),
              function () {
                (t.isMounted = !1), null === b || void 0 === b || b();
              }
            );
          }, []),
          we(function () {
            var n;
            Se(s) && (null === (n = t.variantChildrenOrder) || void 0 === n || n.clear());
          }),
          (0, u.useEffect)(function () {
            var n;
            d && (null === (n = a.parent) || void 0 === n || n.addVariantChildOrder(t));
          }),
          E
        );
      }
      var De = (0, r.fl)(['initial'], $n),
        Me = De.length;
      function Oe(t) {
        return 'string' === typeof t || Array.isArray(t);
      }
      function Fe(t, n) {
        var e = n.defaultFeatures,
          i = n.useVisualElement,
          o = n.useRender;
        return (0, u.forwardRef)(function (n, a) {
          var s = (0, u.useContext)(nn).isStatic,
            l = i(t, n, s, a);
          !(function (t, n) {
            var e = Ut(ge);
            for (var r in e) {
              var i = pe(r, n),
                o = void 0 !== n[r],
                a = n.style && void 0 !== n.style[r],
                s = o && Mt(n[r]),
                u = a && Mt(n.style[r]);
              ((i && !o && !a) || (!i && !s && !u)) && (t.removeValue(r), delete e[r]);
            }
            de(t, e, n, !1, n),
              n.style && de(t, e, n.style, !0, n),
              n.transformValues && (t.reactStyle = n.transformValues(t.reactStyle));
          })(l, n);
          var c = Re(l, n, s),
            f = (function (t, n, e, i) {
              var o = (0, u.useContext)(nn);
              if (n || 'undefined' === typeof window) return null;
              for (var a = (0, r.fl)(t, o.features), s = a.length, l = [], c = 0; c < s; c++) {
                var f = a[c],
                  p = f.shouldRender,
                  d = f.key,
                  v = f.getComponent;
                if (p(i)) {
                  var h = v(i);
                  h && l.push((0, u.createElement)(h, (0, r.pi)({ key: d }, i, { visualElement: e })));
                }
              }
              return l;
            })(e, s, l, n),
            p = (0, u.useMemo)(
              function () {
                return { visualElement: l, variantContext: c };
              },
              [l, c]
            ),
            d = o(t, n, l);
          return (
            (function (t) {
              var n = (0, u.useContext)(Ce),
                e = (0, u.useContext)(Pe);
              we(function () {
                return function () {
                  Ee(n) && n.remove(t), Ee(e) && e.remove(t);
                };
              }, []);
            })(l),
            (0, u.createElement)(u.Fragment, null, (0, u.createElement)(qt.Provider, { value: p }, d), f)
          );
        });
      }
      function Ue(t, n, e) {
        var r = n.min,
          i = n.max;
        return (
          void 0 !== r && t < r
            ? (t = e ? (0, o.CD)(r, t, e) : Math.max(t, r))
            : void 0 !== i && t > i && (t = e ? (0, o.CD)(i, t, e) : Math.min(t, i)),
          t
        );
      }
      function Ye(t, n, e) {
        return { min: void 0 !== n ? t.min + n : void 0, max: void 0 !== e ? t.max + e - (t.max - t.min) : void 0 };
      }
      function Ie(t, n) {
        var e,
          i = n.min - t.min,
          o = n.max - t.max;
        return (
          n.max - n.min < t.max - t.min && ((i = (e = (0, r.CR)([o, i], 2))[0]), (o = e[1])),
          { min: t.min + i, max: t.min + o }
        );
      }
      var He,
        _e = new WeakMap(),
        Ze = (function () {
          function t(t) {
            var n = t.visualElement;
            (this.isDragging = !1),
              (this.currentDirection = null),
              (this.constraints = !1),
              (this.props = {}),
              (this.hasMutatedConstraints = !1),
              (this.cursorProgress = { x: 0.5, y: 0.5 }),
              (this.originPoint = {}),
              (this.openGlobalLock = null),
              (this.panSession = null),
              (this.visualElement = n),
              this.visualElement.enableLayoutProjection(),
              _e.set(n, this);
          }
          return (
            (t.prototype.start = function (t, n) {
              var e = this,
                r = void 0 === n ? {} : n,
                i = r.snapToCursor,
                a = void 0 !== i && i,
                s = r.cursorProgress;
              a && this.snapToCursor(t);
              var u = this.props.transformPagePoint;
              this.panSession = new En(
                t,
                {
                  onSessionStart: function () {
                    e.stopMotion();
                  },
                  onStart: function (t, n) {
                    var r,
                      i,
                      a,
                      u = e.props,
                      l = u.drag,
                      c = u.dragPropagation;
                    if (
                      !l ||
                      c ||
                      (e.openGlobalLock && e.openGlobalLock(), (e.openGlobalLock = te(l)), e.openGlobalLock)
                    ) {
                      e.prepareBoundingBox(), e.visualElement.lockTargetBox(), e.resolveDragConstraints();
                      var f = pn(t).point;
                      lt(function (t) {
                        var n = e.visualElement.targetBox[t],
                          r = n.min,
                          i = n.max;
                        e.cursorProgress[t] = s ? s[t] : (0, o.YD)(r, i, f[t]);
                        var a = e.getAxisMotionValue(t);
                        a && (e.originPoint[t] = a.get());
                      }),
                        (e.isDragging = !0),
                        (e.currentDirection = null),
                        null === (i = (r = e.props).onDragStart) || void 0 === i || i.call(r, t, n),
                        null === (a = e.visualElement.animationState) || void 0 === a || a.setActive(Wn.Drag, !0);
                    }
                  },
                  onMove: function (t, n) {
                    var r,
                      i,
                      o,
                      a,
                      s = e.props,
                      u = s.dragPropagation,
                      l = s.dragDirectionLock;
                    if (u || e.openGlobalLock) {
                      var c = n.offset;
                      if (l && null === e.currentDirection)
                        return (
                          (e.currentDirection = (function (t, n) {
                            void 0 === n && (n = 10);
                            var e = null;
                            Math.abs(t.y) > n ? (e = 'y') : Math.abs(t.x) > n && (e = 'x');
                            return e;
                          })(c)),
                          void (
                            null !== e.currentDirection &&
                            (null === (i = (r = e.props).onDirectionLock) ||
                              void 0 === i ||
                              i.call(r, e.currentDirection))
                          )
                        );
                      e.updateAxis('x', t, c),
                        e.updateAxis('y', t, c),
                        null === (a = (o = e.props).onDrag) || void 0 === a || a.call(o, t, n),
                        (He = t);
                    }
                  },
                  onEnd: function (t, n) {
                    return e.stop(t, n);
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
                n = this.props.dragConstraints;
              (this.constraints =
                !!n &&
                (l(n)
                  ? this.resolveRefConstraints(this.visualElement.box, n)
                  : (function (t, n) {
                      var e = n.top,
                        r = n.left,
                        i = n.bottom,
                        o = n.right;
                      return { x: Ye(t.x, r, o), y: Ye(t.y, e, i) };
                    })(this.visualElement.box, n))),
                this.constraints &&
                  !this.hasMutatedConstraints &&
                  lt(function (n) {
                    t.getAxisMotionValue(n) &&
                      (t.constraints[n] = (function (t, n) {
                        var e = {};
                        return (
                          void 0 !== n.min && (e.min = n.min - t.min), void 0 !== n.max && (e.max = n.max - t.min), e
                        );
                      })(t.visualElement.box[n], t.constraints[n]));
                  });
            }),
            (t.prototype.resolveRefConstraints = function (t, n) {
              var e = this.props,
                r = e.onMeasureDragConstraints,
                i = e.transformPagePoint,
                o = n.current;
              (0, a.k)(
                null !== o,
                "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
              ),
                (this.constraintsBox = ct(o, i));
              var s = (function (t, n) {
                return { x: Ie(t.x, n.x), y: Ie(t.y, n.y) };
              })(t, this.constraintsBox);
              if (r) {
                var u = r(
                  (function (t) {
                    var n = t.x,
                      e = t.y;
                    return { top: e.min, bottom: e.max, left: n.min, right: n.max };
                  })(s)
                );
                (this.hasMutatedConstraints = !!u), u && (s = h(u));
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
                null === (t = this.visualElement.animationState) || void 0 === t || t.setActive(Wn.Drag, !1);
            }),
            (t.prototype.stop = function (t, n) {
              var e;
              this.visualElement.unlockTargetBox(),
                null === (e = this.panSession) || void 0 === e || e.end(),
                (this.panSession = null);
              var r = this.isDragging;
              if ((this.cancelDrag(), r)) {
                var i = this.props,
                  o = i.dragMomentum,
                  a = i.dragElastic,
                  s = i.onDragEnd;
                if (o || a) {
                  var u = n.velocity;
                  this.animateDragEnd(u);
                }
                null === s || void 0 === s || s(t, n);
              }
            }),
            (t.prototype.snapToCursor = function (t) {
              var n = this;
              this.prepareBoundingBox(),
                lt(function (e) {
                  if (Xe(e, n.props.drag, n.currentDirection)) {
                    var r = n.getAxisMotionValue(e);
                    if (r) {
                      var i = pn(t).point,
                        o = n.visualElement.box,
                        a = o[e].max - o[e].min,
                        s = o[e].min + a / 2,
                        u = i[e] - s;
                      (n.originPoint[e] = i[e]), r.set(u);
                    } else (n.cursorProgress[e] = 0.5), n.updateVisualElementAxis(e, t);
                  }
                });
            }),
            (t.prototype.updateAxis = function (t, n, e) {
              if (Xe(t, this.props.drag, this.currentDirection))
                return this.getAxisMotionValue(t)
                  ? this.updateAxisMotionValue(t, e)
                  : this.updateVisualElementAxis(t, n);
            }),
            (t.prototype.updateAxisMotionValue = function (t, n) {
              var e = this.getAxisMotionValue(t);
              if (n && e) {
                var r = this.props.dragElastic,
                  i = this.originPoint[t] + n[t],
                  o = this.constraints ? Ue(i, this.constraints[t], r) : i;
                e.set(o);
              }
            }),
            (t.prototype.updateVisualElementAxis = function (t, n) {
              var e,
                r = this.props.dragElastic,
                i = this.visualElement.box[t],
                o = i.max - i.min,
                a = this.cursorProgress[t],
                s = (function (t, n, e, r, i) {
                  var o = t - n * e;
                  return r ? Ue(o, r, i) : o;
                })(pn(n).point[t], o, a, null === (e = this.constraints) || void 0 === e ? void 0 : e[t], r);
              this.visualElement.setAxisTarget(t, s, s + o);
            }),
            (t.prototype.updateProps = function (t) {
              var n = t.drag,
                e = void 0 !== n && n,
                i = t.dragDirectionLock,
                o = void 0 !== i && i,
                a = t.dragPropagation,
                s = void 0 !== a && a,
                u = t.dragConstraints,
                l = void 0 !== u && u,
                c = t.dragElastic,
                f = void 0 === c ? 0.35 : c,
                p = t.dragMomentum,
                d = void 0 === p || p,
                v = (0, r._T)(t, [
                  'drag',
                  'dragDirectionLock',
                  'dragPropagation',
                  'dragConstraints',
                  'dragElastic',
                  'dragMomentum',
                ]);
              this.props = (0, r.pi)(
                {
                  drag: e,
                  dragDirectionLock: o,
                  dragPropagation: s,
                  dragConstraints: l,
                  dragElastic: f,
                  dragMomentum: d,
                },
                v
              );
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var n = this.props,
                e = n.layout,
                r = n.layoutId,
                i = '_drag' + t.toUpperCase();
              return this.props[i] ? this.props[i] : e || void 0 !== r ? void 0 : this.visualElement.getValue(t, 0);
            }),
            (t.prototype.animateDragEnd = function (t) {
              var n = this,
                e = this.props,
                i = e.drag,
                o = e.dragMomentum,
                a = e.dragElastic,
                s = e.dragTransition,
                u = lt(function (e) {
                  if (Xe(e, i, n.currentDirection)) {
                    var u = n.constraints ? n.constraints[e] : {},
                      l = a ? 200 : 1e6,
                      c = a ? 40 : 1e7,
                      f = (0, r.pi)(
                        (0, r.pi)(
                          {
                            type: 'inertia',
                            velocity: o ? t[e] : 0,
                            bounceStiffness: l,
                            bounceDamping: c,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          },
                          s
                        ),
                        u
                      );
                    return n.getAxisMotionValue(e)
                      ? n.startAxisValueAnimation(e, f)
                      : n.visualElement.startLayoutAxisAnimation(e, f);
                  }
                });
              return Promise.all(u).then(function () {
                var t, e;
                null === (e = (t = n.props).onDragTransitionEnd) || void 0 === e || e.call(t);
              });
            }),
            (t.prototype.stopMotion = function () {
              var t = this;
              lt(function (n) {
                var e = t.getAxisMotionValue(n);
                e ? e.stop() : t.visualElement.stopLayoutAnimation();
              });
            }),
            (t.prototype.startAxisValueAnimation = function (t, n) {
              var e = this.getAxisMotionValue(t);
              if (e) {
                var r = e.get();
                return e.set(r), e.set(r), Hn(t, e, 0, n);
              }
            }),
            (t.prototype.scalePoint = function () {
              var t = this,
                n = this.props,
                e = n.drag,
                r = n.dragConstraints;
              if (l(r) && this.constraintsBox) {
                this.stopMotion();
                var i = { x: 0, y: 0 };
                lt(function (n) {
                  i[n] = at(t.visualElement.targetBox[n], t.constraintsBox[n]);
                }),
                  this.prepareBoundingBox(),
                  this.resolveDragConstraints(),
                  lt(function (n) {
                    if (Xe(n, e, null)) {
                      var r = (function (t, n, e) {
                          var r = t.max - t.min,
                            i = (0, o.CD)(n.min, n.max - r, e);
                          return { min: i, max: i + r };
                        })(t.visualElement.targetBox[n], t.constraintsBox[n], i[n]),
                        a = r.min,
                        s = r.max;
                      t.visualElement.setAxisTarget(n, a, s);
                    }
                  });
              }
            }),
            (t.prototype.mount = function (t) {
              var n = this,
                e = yn(t.getInstance(), 'pointerdown', function (t) {
                  var e = n.props,
                    r = e.drag,
                    i = e.dragListener;
                  r && (void 0 === i || i) && n.start(t);
                }),
                r = rn(window, 'resize', function () {
                  n.scalePoint();
                }),
                i = t.onLayoutUpdate(function () {
                  n.isDragging && n.resolveDragConstraints();
                }),
                o = t.prevSnapshot;
              return (
                (null === o || void 0 === o ? void 0 : o.isDragging) &&
                  this.start(He, { cursorProgress: o.cursorProgress }),
                function () {
                  null === e || void 0 === e || e(),
                    null === r || void 0 === r || r(),
                    null === i || void 0 === i || i(),
                    n.cancelDrag();
                }
              );
            }),
            t
          );
        })();
      function Xe(t, n, e) {
        return (!0 === n || n === t) && (null === e || e === t);
      }
      var We = ie(function (t) {
          var n = t.visualElement;
          return (function (t, n) {
            var e = t.dragControls,
              i = (0, u.useContext)(nn).transformPagePoint,
              o = Ut(function () {
                return new Ze({ visualElement: n });
              });
            o.updateProps((0, r.pi)((0, r.pi)({}, t), { transformPagePoint: i })),
              (0, u.useEffect)(
                function () {
                  return e && e.subscribe(o);
                },
                [o]
              ),
              (0, u.useEffect)(function () {
                return o.mount(n);
              }, []);
          })((0, r._T)(t, ['visualElement']), n);
        }),
        ze = {
          key: 'drag',
          shouldRender: function (t) {
            return !!t.drag || !!t.dragControls;
          },
          getComponent: function () {
            return We;
          },
        },
        $e = ie(function (t) {
          var n = t.custom,
            e = t.visualElement,
            i = (0, r.CR)(Ae(), 2),
            o = i[0],
            a = i[1],
            s = (0, u.useContext)(Kt);
          (0, u.useEffect)(
            function () {
              var t,
                r,
                i =
                  null === (t = e.animationState) || void 0 === t
                    ? void 0
                    : t.setActive(Wn.Exit, !o, {
                        custom: null !== (r = null === s || void 0 === s ? void 0 : s.custom) && void 0 !== r ? r : n,
                      });
              !o && (null === i || void 0 === i || i.then(a));
            },
            [o]
          );
        }),
        je = {
          key: 'exit',
          shouldRender: function (t) {
            return !!t.exit && !ke(t);
          },
          getComponent: function () {
            return $e;
          },
        };
      var Ge = ie(function (t) {
          var n = t.visualElement,
            e = t.animate;
          n.animationState || (n.animationState = Nn(n));
          var r = Qt();
          (0, u.useEffect)(function () {
            n.animationState.setProps(t, n.inheritsVariants ? r : void 0);
          }),
            e instanceof zn &&
              (function (t, n) {
                var e = (0, u.useMemo)(
                  function () {
                    return n.subscribe(t);
                  },
                  [n]
                );
                en(function () {
                  return null === e || void 0 === e ? void 0 : e();
                });
              })(n, e);
        }),
        Ne = {
          key: 'animation',
          shouldRender: function () {
            return !0;
          },
          getComponent: function (t) {
            var n = t.animate,
              e = t.whileHover,
              r = t.whileFocus,
              i = t.whileTap,
              o = t.whileDrag,
              a = t.exit,
              s = t.variants;
            return n || e || r || i || o || a || s ? Ge : void 0;
          },
        };
      var Ke = (function (t) {
        function n() {
          var n = (null !== t && t.apply(this, arguments)) || this;
          return (
            (n.frameTarget = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
            (n.stopAxisAnimation = { x: void 0, y: void 0 }),
            (n.animate = function (t, e, i) {
              void 0 === i && (i = {});
              var o = i.originBox,
                a = i.targetBox,
                s = i.visibilityAction,
                u = i.shouldStackAnimate,
                l = (0, r._T)(i, ['originBox', 'targetBox', 'visibilityAction', 'shouldStackAnimate']),
                c = n.props,
                f = c.visualElement,
                p = c.layout;
              if (!1 === u) return n.safeToRemove();
              var d = Qe((e = o || e), (t = a || t)),
                v = lt(function (r) {
                  if ('position' === p) {
                    var i = t[r].max - t[r].min;
                    e[r].max = e[r].min + i;
                  }
                  if (!f.isTargetBoxLocked)
                    return void 0 === s
                      ? d
                        ? n.animateAxis(r, t[r], e[r], l)
                        : f.setAxisTarget(r, t[r].min, t[r].max)
                      : void (s === he.Hide ? f.hide() : f.show());
                });
              return (
                f.render(),
                Promise.all(v).then(function () {
                  var t, e;
                  null === (e = (t = n.props).onLayoutAnimationComplete) || void 0 === e || e.call(t),
                    f.isPresent ? (f.presence = ve.Present) : n.safeToRemove();
                })
              );
            }),
            n
          );
        }
        return (
          (0, r.ZT)(n, t),
          (n.prototype.componentDidMount = function () {
            var t = this,
              n = this.props.visualElement;
            (n.animateMotionValue = Hn),
              n.enableLayoutProjection(),
              (this.unsubLayoutReady = n.onLayoutUpdate(this.animate)),
              n.updateConfig(
                (0, r.pi)((0, r.pi)({}, n.config), {
                  safeToRemove: function () {
                    return t.safeToRemove();
                  },
                })
              );
          }),
          (n.prototype.componentWillUnmount = function () {
            var t = this;
            this.unsubLayoutReady(),
              lt(function (n) {
                var e, r;
                return null === (r = (e = t.stopAxisAnimation)[n]) || void 0 === r ? void 0 : r.call(e);
              });
          }),
          (n.prototype.animateAxis = function (t, n, e, r) {
            var i,
              a,
              s = void 0 === r ? {} : r,
              u = s.transition,
              l = s.crossfadeOpacity;
            null === (a = (i = this.stopAxisAnimation)[t]) || void 0 === a || a.call(i);
            var c,
              f = this.props.visualElement,
              p = this.frameTarget[t],
              d = f.getAxisProgress()[t];
            d.clearListeners(), d.set(0), d.set(0), l && ((c = this.createCrossfadeAnimation(l)), f.show());
            var v = function () {
              var r = d.get() / 1e3;
              !(function (t, n, e, r) {
                (t.min = (0, o.CD)(n.min, e.min, r)), (t.max = (0, o.CD)(n.max, e.max, r));
              })(p, e, n, r),
                f.setAxisTarget(t, p.min, p.max),
                null === c || void 0 === c || c(r);
            };
            v(), f.updateLayoutDelta();
            var h = d.onChange(v),
              m = Hn('x' === t ? 'layoutX' : 'layoutY', d, 1e3, u || this.props.transition || er).then(h);
            return (
              (this.stopAxisAnimation[t] = function () {
                d.stop(), h();
              }),
              m
            );
          }),
          (n.prototype.createCrossfadeAnimation = function (t) {
            var n = this.props.visualElement.getValue('opacity', 0);
            return function (e) {
              n.set(ir((0, o.CD)(0, 1, e))), t.set(or((0, o.CD)(1, 0, e)));
            };
          }),
          (n.prototype.safeToRemove = function () {
            var t, n;
            null === (n = (t = this.props).safeToRemove) || void 0 === n || n.call(t);
          }),
          (n.prototype.render = function () {
            return null;
          }),
          n
        );
      })(u.Component);
      function qe(t) {
        var n = (0, r.CR)(Ae(), 2)[1];
        return (0, u.createElement)(Ke, (0, r.pi)({}, t, { safeToRemove: n }));
      }
      function Qe(t, n) {
        return !tr(t) && !tr(n) && (!nr(t.x, n.x) || !nr(t.y, n.y));
      }
      var Je = { min: 0, max: 0 };
      function tr(t) {
        return nr(t.x, Je) && nr(t.y, Je);
      }
      function nr(t, n) {
        return t.min === n.min && t.max === n.max;
      }
      var er = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function rr(t, n, e) {
        return function (r) {
          return r < t ? 0 : r > n ? 1 : e((0, o.YD)(t, n, r));
        };
      }
      var ir = rr(0, 0.5, o.Bn),
        or = rr(0.5, 0.95, o.GE),
        ar = {
          key: 'animate-layout',
          shouldRender: function (t) {
            return !!t.layout || !!t.layoutId;
          },
          getComponent: function () {
            return qe;
          },
        },
        sr = (function (t) {
          function n() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, r.ZT)(n, t),
            (n.prototype.componentDidMount = function () {
              var t = this.props,
                n = t.syncLayout,
                e = t.framerSyncLayout,
                r = t.visualElement;
              Ee(n) && n.register(r), Ee(e) && e.register(r);
            }),
            (n.prototype.getSnapshotBeforeUpdate = function () {
              var t = this.props,
                n = t.syncLayout,
                e = t.visualElement;
              return Ee(n) ? n.syncUpdate() : (e.snapshotBoundingBox(), n.add(e)), null;
            }),
            (n.prototype.componentDidUpdate = function () {
              var t = this.props,
                n = t.syncLayout,
                e = t.visualElement;
              Ee(n) || n.flush(), e.rebaseTargetBox();
            }),
            (n.prototype.render = function () {
              return null;
            }),
            n
          );
        })(u.Component);
      function ur(t) {
        var n = (0, u.useContext)(Ce),
          e = (0, u.useContext)(Pe);
        return u.createElement(sr, (0, r.pi)({}, t, { syncLayout: n, framerSyncLayout: e }));
      }
      var lr = {
          key: 'measure-layout',
          shouldRender: function (t) {
            return !!t.drag || !!t.layout || !!t.layoutId;
          },
          getComponent: function () {
            return ur;
          },
        },
        cr = [lr, Ne, ze, se, je, ar],
        fr = {
          useVisualElement: function (t, n, e, i) {
            var o = Jt(),
              a = Ut(function () {
                return new (Nt(t) ? jt : Ot)(o, i);
              });
            e && (a.values.clear(), (a.latest = {})),
              a.updateConfig((0, r.pi)((0, r.pi)((0, r.pi)({}, a.config), { enableHardwareAcceleration: !e }), n));
            var s = (0, u.useContext)(tn);
            a.layoutId = s && n.layoutId ? s + '-' + n.layoutId : n.layoutId;
            var l = (0, u.useContext)(Kt),
              c = null === l || l.isPresent;
            a.isPresent = void 0 !== n.isPresent ? n.isPresent : c;
            var f = null === l || void 0 === l ? void 0 : l.id;
            return (
              (a.isPresenceRoot = !o || o.presenceId !== f),
              (0, u.useEffect)(
                function () {
                  if (n.onViewportBoxUpdate) return a.onViewportBoxUpdate(n.onViewportBoxUpdate);
                },
                [n.onViewportBoxUpdate]
              ),
              a
            );
          },
          useRender: function (t, n, e) {
            var i =
              'string' === typeof t
                ? (function (t) {
                    var n = {};
                    for (var e in t) ce(e) && (n[e] = t[e]);
                    return n;
                  })(n)
                : n;
            e.clean(), e.build();
            var o = Nt(t)
              ? (function (t) {
                  return (0, r.pi)((0, r.pi)({}, t.attrs), { style: (0, r.pi)({}, t.reactStyle) });
                })(e)
              : (function (t, n) {
                  var e = n.drag,
                    i = {},
                    o = (0, r.pi)((0, r.pi)((0, r.pi)({}, t.reactStyle), t.style), t.vars);
                  return (
                    e &&
                      ((i.draggable = !1),
                      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
                      (o.touchAction = !0 === e ? 'none' : 'pan-' + ('x' === e ? 'y' : 'x'))),
                    (i.style = o),
                    i
                  );
                })(e, n);
            return (0, u.createElement)(t, (0, r.pi)((0, r.pi)((0, r.pi)({}, i), { ref: e.ref }), o));
          },
        };
      function pr(t) {
        var n = (0, r.pi)((0, r.pi)({}, fr), { defaultFeatures: t });
        var e = new Map();
        return new Proxy(
          {
            custom: function (t) {
              return Fe(t, n);
            },
          },
          {
            get: function (t, r) {
              return 'custom' === r ? t.custom : (e.has(r) || e.set(r, Fe(r, n)), e.get(r));
            },
          }
        );
      }
      var dr = pr(cr);
      var vr = 0;
      function hr() {
        var t = vr;
        return vr++, t;
      }
      var mr = function (t) {
        var n = t.children,
          e = t.initial,
          r = t.isPresent,
          i = t.onExitComplete,
          o = t.custom,
          a = t.presenceAffectsLayout,
          s = Ut(gr),
          l = Ut(hr),
          c = (0, u.useMemo)(
            function () {
              return {
                id: l,
                initial: e,
                isPresent: r,
                custom: o,
                onExitComplete: function (t) {
                  s.set(t, !0);
                  var n = !0;
                  s.forEach(function (t) {
                    t || (n = !1);
                  }),
                    n && (null === i || void 0 === i || i());
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
          (0, u.useMemo)(
            function () {
              s.forEach(function (t, n) {
                return s.set(n, !1);
              });
            },
            [r]
          ),
          (0, u.createElement)(Kt.Provider, { value: c }, n)
        );
      };
      function gr() {
        return new Map();
      }
      function yr(t) {
        return t.key || '';
      }
      var xr = function (t) {
        var n = t.children,
          e = t.custom,
          i = t.initial,
          o = void 0 === i || i,
          a = t.onExitComplete,
          s = t.exitBeforeEnter,
          l = t.presenceAffectsLayout,
          c = void 0 === l || l,
          f = (function () {
            var t = (0, u.useRef)(!1),
              n = (0, r.CR)((0, u.useState)(0), 2),
              e = n[0],
              i = n[1];
            return (
              en(function () {
                return (t.current = !0);
              }),
              (0, u.useCallback)(
                function () {
                  !t.current && i(e + 1);
                },
                [e]
              )
            );
          })(),
          p = (0, u.useContext)(Ce);
        Ee(p) && (f = p.forceUpdate);
        var d = (0, u.useRef)(!0),
          v = (function (t) {
            var n = [];
            return (
              u.Children.forEach(t, function (t) {
                (0, u.isValidElement)(t) && n.push(t);
              }),
              n
            );
          })(n),
          h = (0, u.useRef)(v),
          m = (0, u.useRef)(new Map()).current,
          g = (0, u.useRef)(new Set()).current;
        if (
          ((function (t, n) {
            t.forEach(function (t) {
              var e = yr(t);
              n.set(e, t);
            });
          })(v, m),
          d.current)
        )
          return (
            (d.current = !1),
            (0, u.createElement)(
              u.Fragment,
              null,
              v.map(function (t) {
                return (0,
                u.createElement)(mr, { key: yr(t), isPresent: !0, initial: !!o && void 0, presenceAffectsLayout: c }, t);
              })
            )
          );
        for (var y = (0, r.fl)(v), x = h.current.map(yr), b = v.map(yr), E = x.length, C = 0; C < E; C++) {
          var P = x[C];
          -1 === b.indexOf(P) ? g.add(P) : g.delete(P);
        }
        return (
          s && g.size && (y = []),
          g.forEach(function (t) {
            if (-1 === b.indexOf(t)) {
              var n = m.get(t);
              if (n) {
                var r = x.indexOf(t);
                y.splice(
                  r,
                  0,
                  (0, u.createElement)(
                    mr,
                    {
                      key: yr(n),
                      isPresent: !1,
                      onExitComplete: function () {
                        m.delete(t), g.delete(t);
                        var n = h.current.findIndex(function (n) {
                          return n.key === t;
                        });
                        h.current.splice(n, 1), g.size || ((h.current = v), f(), a && a());
                      },
                      custom: e,
                      presenceAffectsLayout: c,
                    },
                    n
                  )
                );
              }
            }
          }),
          (y = y.map(function (t) {
            var n = t.key;
            return g.has(n) ? t : (0, u.createElement)(mr, { key: yr(t), isPresent: !0, presenceAffectsLayout: c }, t);
          })),
          (h.current = y),
          (0, u.createElement)(
            u.Fragment,
            null,
            g.size
              ? y
              : y.map(function (t) {
                  return (0, u.cloneElement)(t);
                })
          )
        );
      };
      function br(t, n) {
        return n && t !== n.lead
          ? { visibilityAction: he.Hide }
          : n && t.presence !== ve.Entering && t === n.lead && n.lead !== n.prevLead
          ? { visibilityAction: he.Show }
          : (t.presence === ve.Entering
              ? (e = null === n || void 0 === n ? void 0 : n.getFollowOrigin())
              : t.presence === ve.Exiting && (r = null === n || void 0 === n ? void 0 : n.getFollowTarget()),
            { originBox: e, targetBox: r });
        var e, r;
      }
      function Er(t, n) {
        var e,
          r,
          i,
          o = {},
          a = n && n.lead,
          s = null === a || void 0 === a ? void 0 : a.presence;
        return (
          n && t === a
            ? t.presence === ve.Entering
              ? (o.originBox = n.getFollowOrigin())
              : t.presence === ve.Exiting && (o.targetBox = n.getFollowTarget())
            : n &&
              t === n.follow &&
              ((o.transition = n.getLeadTransition()),
              s === ve.Entering
                ? (o.targetBox = n.getLeadTarget())
                : s === ve.Exiting && (o.originBox = n.getLeadOrigin())),
          (null === (e = null === n || void 0 === n ? void 0 : n.follow) || void 0 === e ? void 0 : e.isPresenceRoot) ||
          (null === a || void 0 === a ? void 0 : a.isPresenceRoot)
            ? (n && t !== a
                ? n && t === n.follow
                  ? a &&
                    s !== ve.Entering &&
                    s === ve.Exiting &&
                    (o.crossfadeOpacity =
                      null === (i = null === n || void 0 === n ? void 0 : n.lead) || void 0 === i
                        ? void 0
                        : i.getValue('opacity', 1))
                  : (o.visibilityAction = he.Hide)
                : t.presence === ve.Entering &&
                  (o.crossfadeOpacity =
                    null === (r = null === n || void 0 === n ? void 0 : n.follow) || void 0 === r
                      ? void 0
                      : r.getValue('opacity', 0)),
              o)
            : o
        );
      }
      var Cr = (function () {
        function t() {
          (this.order = []), (this.hasChildren = !1);
        }
        return (
          (t.prototype.add = function (t) {
            var n;
            if ((this.order.push(t), this.snapshot)) {
              (t.prevSnapshot = this.snapshot), (t.prevViewportBox = this.snapshot.boundingBox);
              var e = this.snapshot.latestMotionValues;
              for (var r in e)
                t.hasValue(r) ? null === (n = t.getValue(r)) || void 0 === n || n.set(e[r]) : t.addValue(r, p(e[r]));
            }
            this.hasChildren = !0;
          }),
          (t.prototype.remove = function (t) {
            var n = this.order.findIndex(function (n) {
              return t === n;
            });
            -1 !== n && this.order.splice(n, 1);
          }),
          (t.prototype.updateLeadAndFollow = function () {
            (this.prevLead = this.lead), (this.prevFollow = this.follow);
            var t = (0, r.CR)(
                (function (t, n) {
                  for (
                    var e = (0, r.CR)(n, 2),
                      i = e[0],
                      o = e[1],
                      a = void 0,
                      s = 0,
                      u = void 0,
                      l = t.length,
                      c = !1,
                      f = l - 1;
                    f >= 0;
                    f--
                  ) {
                    var p = t[f];
                    if ((f === l - 1 && (c = p.isPresent), c)) a = p;
                    else {
                      var d = t[f - 1];
                      d && d.isPresent && (a = p);
                    }
                    if (a) {
                      s = f;
                      break;
                    }
                  }
                  if ((a || (a = t[0]), (u = t[s - 1]), a))
                    for (f = s - 1; f >= 0; f--)
                      if ((p = t[f]).isPresent) {
                        u = p;
                        break;
                      }
                  return (
                    a !== i &&
                      !c &&
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
              n = t[0],
              e = t[1];
            (this.lead = n), (this.follow = e);
          }),
          (t.prototype.updateSnapshot = function () {
            if (this.lead) {
              var t = { boundingBox: this.lead.prevViewportBox, latestMotionValues: {} };
              this.lead.forEachValue(function (n, e) {
                var r = n.get();
                D(r) || (t.latestMotionValues[e] = r);
              });
              var n = _e.get(this.lead);
              n && n.isDragging && ((t.isDragging = !0), (t.cursorProgress = n.cursorProgress)), (this.snapshot = t);
            }
          }),
          (t.prototype.isLeadPresent = function () {
            var t;
            return this.lead && (null === (t = this.lead) || void 0 === t ? void 0 : t.presence) !== ve.Exiting;
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
        function n() {
          var n = (null !== t && t.apply(this, arguments)) || this;
          return (
            (n.children = new Set()),
            (n.stacks = new Map()),
            (n.hasMounted = !1),
            (n.updateScheduled = !1),
            (n.renderScheduled = !1),
            (n.syncContext = (0, r.pi)((0, r.pi)({}, be()), {
              syncUpdate: function (t) {
                return n.scheduleUpdate(t);
              },
              forceUpdate: function () {
                (n.syncContext = (0, r.pi)({}, n.syncContext)), n.scheduleUpdate(!0);
              },
              register: function (t) {
                return n.addChild(t);
              },
              remove: function (t) {
                return n.removeChild(t);
              },
            })),
            n
          );
        }
        (0, r.ZT)(n, t),
          (n.prototype.componentDidMount = function () {
            (this.hasMounted = !0), this.updateStacks();
          }),
          (n.prototype.componentDidUpdate = function () {
            this.startLayoutAnimation();
          }),
          (n.prototype.shouldComponentUpdate = function () {
            return (this.renderScheduled = !0), !0;
          }),
          (n.prototype.startLayoutAnimation = function () {
            var t = this;
            this.renderScheduled = this.updateScheduled = !1;
            var n = this.props.type;
            this.children.forEach(function (t) {
              t.isPresent
                ? t.presence !== ve.Entering && (t.presence = t.presence === ve.Exiting ? ve.Entering : ve.Present)
                : (t.presence = ve.Exiting);
            }),
              this.updateStacks();
            var e = 'crossfade' === n ? Er : br,
              r = {
                measureLayout: function (t) {
                  return t.measureLayout();
                },
                layoutReady: function (n) {
                  var r = n.layoutId;
                  n.layoutReady(e(n, t.getStack(r)));
                },
                parent: this.context.visualElement,
              };
            this.children.forEach(function (n) {
              return t.syncContext.add(n);
            }),
              this.syncContext.flush(r),
              this.stacks.forEach(function (t) {
                return (t.snapshot = void 0);
              });
          }),
          (n.prototype.updateStacks = function () {
            this.stacks.forEach(function (t) {
              return t.updateLeadAndFollow();
            });
          }),
          (n.prototype.scheduleUpdate = function (t) {
            void 0 === t && (t = !1),
              (!t && this.updateScheduled) ||
                ((this.updateScheduled = !0),
                this.children.forEach(function (t) {
                  return (function (t) {
                    for (var n = !1, e = {}, r = 0; r < B.length; r++) {
                      var i = 'rotate' + B[r];
                      t.hasValue(i) && 0 !== t.latest[i] && ((n = !0), (e[i] = t.latest[i]), (t.latest[i] = 0));
                    }
                    if (n) {
                      for (var i in (t.render(), e)) t.latest[i] = e[i];
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
          (n.prototype.addChild = function (t) {
            this.children.add(t), this.addToStack(t), (t.presence = this.hasMounted ? ve.Entering : ve.Present);
          }),
          (n.prototype.removeChild = function (t) {
            this.scheduleUpdate(), this.children.delete(t), this.removeFromStack(t);
          }),
          (n.prototype.addToStack = function (t) {
            var n = this.getStack(t.layoutId);
            null === n || void 0 === n || n.add(t);
          }),
          (n.prototype.removeFromStack = function (t) {
            var n = this.getStack(t.layoutId);
            null === n || void 0 === n || n.remove(t);
          }),
          (n.prototype.getStack = function (t) {
            if (void 0 !== t) return !this.stacks.has(t) && this.stacks.set(t, new Cr()), this.stacks.get(t);
          }),
          (n.prototype.render = function () {
            return (0, u.createElement)(Ce.Provider, { value: this.syncContext }, this.props.children);
          }),
          (n.contextType = qt);
      })(u.Component);
      function Pr(t) {
        return Ut(function () {
          return p(t);
        });
      }
      function wr(t, n) {
        var e = Pr(n()),
          r = function () {
            return e.set(n());
          };
        return (
          r(),
          (function (t, n) {
            (0, u.useEffect)(function () {
              var e = t.map(function (t) {
                return t.onChange(n);
              });
              return function () {
                return e.forEach(function (t) {
                  return t();
                });
              };
            });
          })(t, function () {
            return i.ZP.update(r, !1, !0);
          }),
          e
        );
      }
      var Ar = function (t) {
        return (function (t) {
          return 'object' === typeof t && t.mix;
        })(t)
          ? t.mix
          : void 0;
      };
      function Sr(t, n, e, i) {
        var a =
          'function' === typeof n
            ? n
            : (function () {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var e = !Array.isArray(t[0]),
                  i = e ? 0 : -1,
                  a = t[0 + i],
                  s = t[1 + i],
                  u = t[2 + i],
                  l = t[3 + i],
                  c = (0, o.sX)(s, u, (0, r.pi)({ mixer: Ar(u[0]) }, l));
                return e ? c(a) : c;
              })(n, e, i);
        return Array.isArray(t)
          ? Tr(t, a)
          : Tr([t], function (t) {
              var n = (0, r.CR)(t, 1)[0];
              return a(n);
            });
      }
      function Tr(t, n) {
        var e = Ut(function () {
          return [];
        });
        return wr(t, function () {
          e.length = 0;
          for (var r = t.length, i = 0; i < r; i++) e[i] = t[i].get();
          return n(e);
        });
      }
      !(function () {
        function t() {
          this.componentControls = new Set();
        }
        (t.prototype.subscribe = function (t) {
          var n = this;
          return (
            this.componentControls.add(t),
            function () {
              return n.componentControls.delete(t);
            }
          );
        }),
          (t.prototype.start = function (t, n) {
            this.componentControls.forEach(function (e) {
              e.start(t.nativeEvent || t, n);
            });
          }),
          (t.prototype.updateConstraints = function () {
            this.componentControls.forEach(function (t) {
              t.prepareBoundingBox(), t.resolveDragConstraints();
            });
          });
      })();
      !(function (t) {
        function n() {
          var n = (null !== t && t.apply(this, arguments)) || this;
          return (n.initialState = {}), n;
        }
        (0, r.ZT)(n, t),
          (n.prototype.updateLayoutDelta = function () {}),
          (n.prototype.build = function () {}),
          (n.prototype.clean = function () {}),
          (n.prototype.makeTargetAnimatable = function (t) {
            var n = t.transition,
              e = t.transitionEnd,
              i = (0, r._T)(t, ['transition', 'transitionEnd']);
            return kt(this, i, Dt(i, n || {}, this)), (0, r.pi)({ transition: n, transitionEnd: e }, i);
          }),
          (n.prototype.getBoundingBox = function () {
            return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
          }),
          (n.prototype.readNativeValue = function (t) {
            return this.initialState[t] || 0;
          }),
          (n.prototype.render = function () {
            this.build();
          });
      })(d);
    },
  },
]);
