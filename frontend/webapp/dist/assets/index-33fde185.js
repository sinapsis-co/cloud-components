var tg = Object.defineProperty;
var ng = (e, t, n) => (t in e ? tg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n));
var Kt = (e, t, n) => (ng(e, typeof t != 'symbol' ? t + '' : t, n), n);
function rg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const l of i.addedNodes) l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossorigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var hl =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function jp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
function zp(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == 'function') {
    var n = function r() {
      if (this instanceof r) {
        var o = [null];
        o.push.apply(o, arguments);
        var i = Function.bind.apply(t, o);
        return new i();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var ml = {},
  og = {
    get exports() {
      return ml;
    },
    set exports(e) {
      ml = e;
    },
  },
  ea = {},
  C = {},
  ig = {
    get exports() {
      return C;
    },
    set exports(e) {
      C = e;
    },
  },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var di = Symbol.for('react.element'),
  lg = Symbol.for('react.portal'),
  ag = Symbol.for('react.fragment'),
  ug = Symbol.for('react.strict_mode'),
  sg = Symbol.for('react.profiler'),
  cg = Symbol.for('react.provider'),
  fg = Symbol.for('react.context'),
  dg = Symbol.for('react.forward_ref'),
  pg = Symbol.for('react.suspense'),
  hg = Symbol.for('react.memo'),
  mg = Symbol.for('react.lazy'),
  Lf = Symbol.iterator;
function vg(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Lf && e[Lf]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Fp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Up = Object.assign,
  Bp = {};
function to(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Bp), (this.updater = n || Fp);
}
to.prototype.isReactComponent = {};
to.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
to.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Wp() {}
Wp.prototype = to.prototype;
function tc(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Bp), (this.updater = n || Fp);
}
var nc = (tc.prototype = new Wp());
nc.constructor = tc;
Up(nc, to.prototype);
nc.isPureReactComponent = !0;
var $f = Array.isArray,
  Hp = Object.prototype.hasOwnProperty,
  rc = { current: null },
  Vp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kp(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      Hp.call(t, r) && !Vp.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    o.children = u;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: di, type: e, key: i, ref: l, props: o, _owner: rc.current };
}
function gg(e, t) {
  return { $$typeof: di, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function oc(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === di;
}
function yg(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Mf = /\/+/g;
function su(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? yg('' + e.key) : t.toString(36);
}
function Ji(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        l = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case di:
          case lg:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + su(l, 0) : r),
      $f(o)
        ? ((n = ''),
          e != null && (n = e.replace(Mf, '$&/') + '/'),
          Ji(o, t, n, '', function (s) {
            return s;
          }))
        : o != null &&
          (oc(o) &&
            (o = gg(o, n + (!o.key || (l && l.key === o.key) ? '' : ('' + o.key).replace(Mf, '$&/') + '/') + e)),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), $f(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + su(i, a);
      l += Ji(i, t, n, u, o);
    }
  else if (((u = vg(e)), typeof u == 'function'))
    for (e = u.call(e), a = 0; !(i = e.next()).done; ) (i = i.value), (u = r + su(i, a++)), (l += Ji(i, t, n, u, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return l;
}
function Ti(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ji(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function wg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ke = { current: null },
  qi = { transition: null },
  Sg = { ReactCurrentDispatcher: Ke, ReactCurrentBatchConfig: qi, ReactCurrentOwner: rc };
W.Children = {
  map: Ti,
  forEach: function (e, t, n) {
    Ti(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ti(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ti(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!oc(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
W.Component = to;
W.Fragment = ag;
W.Profiler = sg;
W.PureComponent = tc;
W.StrictMode = ug;
W.Suspense = pg;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sg;
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
  var r = Up({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = rc.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t) Hp.call(t, u) && !Vp.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: di, type: e.type, key: o, ref: i, props: r, _owner: l };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: fg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: cg, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = Kp;
W.createFactory = function (e) {
  var t = Kp.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: dg, render: e };
};
W.isValidElement = oc;
W.lazy = function (e) {
  return { $$typeof: mg, _payload: { _status: -1, _result: e }, _init: wg };
};
W.memo = function (e, t) {
  return { $$typeof: hg, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = qi.transition;
  qi.transition = {};
  try {
    e();
  } finally {
    qi.transition = t;
  }
};
W.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
W.useCallback = function (e, t) {
  return Ke.current.useCallback(e, t);
};
W.useContext = function (e) {
  return Ke.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return Ke.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return Ke.current.useEffect(e, t);
};
W.useId = function () {
  return Ke.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return Ke.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return Ke.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return Ke.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return Ke.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return Ke.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return Ke.current.useRef(e);
};
W.useState = function (e) {
  return Ke.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return Ke.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return Ke.current.useTransition();
};
W.version = '18.2.0';
(function (e) {
  e.exports = W;
})(ig);
const Zt = jp(C),
  Uo = rg({ __proto__: null, default: Zt }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xg = C,
  Eg = Symbol.for('react.element'),
  kg = Symbol.for('react.fragment'),
  Cg = Object.prototype.hasOwnProperty,
  _g = xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Og = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qp(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = '' + n), t.key !== void 0 && (i = '' + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Cg.call(t, r) && !Og.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Eg, type: e, key: i, ref: l, props: o, _owner: _g.current };
}
ea.Fragment = kg;
ea.jsx = Qp;
ea.jsxs = Qp;
(function (e) {
  e.exports = ea;
})(og);
const se = ml.jsx,
  ta = ml.jsxs;
var Qu = {},
  vl = {},
  Pg = {
    get exports() {
      return vl;
    },
    set exports(e) {
      vl = e;
    },
  },
  st = {},
  Gu = {},
  Tg = {
    get exports() {
      return Gu;
    },
    set exports(e) {
      Gu = e;
    },
  },
  Gp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, j) {
    var F = R.length;
    R.push(j);
    e: for (; 0 < F; ) {
      var ie = (F - 1) >>> 1,
        we = R[ie];
      if (0 < o(we, j)) (R[ie] = j), (R[F] = we), (F = ie);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var j = R[0],
      F = R.pop();
    if (F !== j) {
      R[0] = F;
      e: for (var ie = 0, we = R.length, lr = we >>> 1; ie < lr; ) {
        var Bt = 2 * (ie + 1) - 1,
          Wt = R[Bt],
          Rt = Bt + 1,
          un = R[Rt];
        if (0 > o(Wt, F))
          Rt < we && 0 > o(un, Wt) ? ((R[ie] = un), (R[Rt] = F), (ie = Rt)) : ((R[ie] = Wt), (R[Bt] = F), (ie = Bt));
        else if (Rt < we && 0 > o(un, F)) (R[ie] = un), (R[Rt] = F), (ie = Rt);
        else break e;
      }
    }
    return j;
  }
  function o(R, j) {
    var F = R.sortIndex - j.sortIndex;
    return F !== 0 ? F : R.id - j.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var u = [],
    s = [],
    d = 1,
    h = null,
    c = 3,
    g = !1,
    y = !1,
    m = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(R) {
    for (var j = n(s); j !== null; ) {
      if (j.callback === null) r(s);
      else if (j.startTime <= R) r(s), (j.sortIndex = j.expirationTime), t(u, j);
      else break;
      j = n(s);
    }
  }
  function w(R) {
    if (((m = !1), v(R), !y))
      if (n(u) !== null) (y = !0), ir(E);
      else {
        var j = n(s);
        j !== null && $n(w, j.startTime - R);
      }
  }
  function E(R, j) {
    (y = !1), m && ((m = !1), p(P), (P = -1)), (g = !0);
    var F = c;
    try {
      for (v(j), h = n(u); h !== null && (!(h.expirationTime > j) || (R && !M())); ) {
        var ie = h.callback;
        if (typeof ie == 'function') {
          (h.callback = null), (c = h.priorityLevel);
          var we = ie(h.expirationTime <= j);
          (j = e.unstable_now()), typeof we == 'function' ? (h.callback = we) : h === n(u) && r(u), v(j);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var lr = !0;
      else {
        var Bt = n(s);
        Bt !== null && $n(w, Bt.startTime - j), (lr = !1);
      }
      return lr;
    } finally {
      (h = null), (c = F), (g = !1);
    }
  }
  var T = !1,
    x = null,
    P = -1,
    $ = 5,
    A = -1;
  function M() {
    return !(e.unstable_now() - A < $);
  }
  function te() {
    if (x !== null) {
      var R = e.unstable_now();
      A = R;
      var j = !0;
      try {
        j = x(!0, R);
      } finally {
        j ? ye() : ((T = !1), (x = null));
      }
    } else T = !1;
  }
  var ye;
  if (typeof f == 'function')
    ye = function () {
      f(te);
    };
  else if (typeof MessageChannel < 'u') {
    var H = new MessageChannel(),
      _e = H.port2;
    (H.port1.onmessage = te),
      (ye = function () {
        _e.postMessage(null);
      });
  } else
    ye = function () {
      S(te, 0);
    };
  function ir(R) {
    (x = R), T || ((T = !0), ye());
  }
  function $n(R, j) {
    P = S(function () {
      R(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), ir(E));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : ($ = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (R) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = c;
      }
      var F = c;
      c = j;
      try {
        return R();
      } finally {
        c = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, j) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var F = c;
      c = R;
      try {
        return j();
      } finally {
        c = F;
      }
    }),
    (e.unstable_scheduleCallback = function (R, j, F) {
      var ie = e.unstable_now();
      switch (
        (typeof F == 'object' && F !== null
          ? ((F = F.delay), (F = typeof F == 'number' && 0 < F ? ie + F : ie))
          : (F = ie),
        R)
      ) {
        case 1:
          var we = -1;
          break;
        case 2:
          we = 250;
          break;
        case 5:
          we = 1073741823;
          break;
        case 4:
          we = 1e4;
          break;
        default:
          we = 5e3;
      }
      return (
        (we = F + we),
        (R = { id: d++, callback: j, priorityLevel: R, startTime: F, expirationTime: we, sortIndex: -1 }),
        F > ie
          ? ((R.sortIndex = F),
            t(s, R),
            n(u) === null && R === n(s) && (m ? (p(P), (P = -1)) : (m = !0), $n(w, F - ie)))
          : ((R.sortIndex = we), t(u, R), y || g || ((y = !0), ir(E))),
        R
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (R) {
      var j = c;
      return function () {
        var F = c;
        c = j;
        try {
          return R.apply(this, arguments);
        } finally {
          c = F;
        }
      };
    });
})(Gp);
(function (e) {
  e.exports = Gp;
})(Tg);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yp = C,
  ut = Gu;
function O(e) {
  for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Xp = new Set(),
  Bo = {};
function qn(e, t) {
  Br(e, t), Br(e + 'Capture', t);
}
function Br(e, t) {
  for (Bo[e] = t, e = 0; e < t.length; e++) Xp.add(t[e]);
}
var tn = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  Yu = Object.prototype.hasOwnProperty,
  bg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Df = {},
  If = {};
function Rg(e) {
  return Yu.call(If, e) ? !0 : Yu.call(Df, e) ? !1 : bg.test(e) ? (If[e] = !0) : ((Df[e] = !0), !1);
}
function Ag(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Lg(e, t, n, r) {
  if (t === null || typeof t > 'u' || Ag(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Qe(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var Ie = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ie[e] = new Qe(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Ie[t] = new Qe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ie[e] = new Qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  Ie[e] = new Qe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ie[e] = new Qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ie[e] = new Qe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Ie[e] = new Qe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ie[e] = new Qe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Ie[e] = new Qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ic = /[\-:]([a-z])/g;
function lc(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ic, lc);
    Ie[t] = new Qe(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(ic, lc);
  Ie[t] = new Qe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ic, lc);
  Ie[t] = new Qe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ie[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new Qe('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ie[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ac(e, t, n, r) {
  var o = Ie.hasOwnProperty(t) ? Ie[t] : null;
  (o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (Lg(t, n, o, r) && (n = null),
    r || o === null
      ? Rg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var an = Yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  bi = Symbol.for('react.element'),
  mr = Symbol.for('react.portal'),
  vr = Symbol.for('react.fragment'),
  uc = Symbol.for('react.strict_mode'),
  Xu = Symbol.for('react.profiler'),
  Zp = Symbol.for('react.provider'),
  Jp = Symbol.for('react.context'),
  sc = Symbol.for('react.forward_ref'),
  Zu = Symbol.for('react.suspense'),
  Ju = Symbol.for('react.suspense_list'),
  cc = Symbol.for('react.memo'),
  fn = Symbol.for('react.lazy'),
  qp = Symbol.for('react.offscreen'),
  Nf = Symbol.iterator;
function so(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Nf && e[Nf]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var fe = Object.assign,
  cu;
function Eo(e) {
  if (cu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      cu = (t && t[1]) || '';
    }
  return (
    `
` +
    cu +
    e
  );
}
var fu = !1;
function du(e, t) {
  if (!e || fu) return '';
  fu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == 'string') {
      for (
        var o = s.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var u =
                  `
` + o[l].replace(' at new ', ' at ');
                return e.displayName && u.includes('<anonymous>') && (u = u.replace('<anonymous>', e.displayName)), u;
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (fu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Eo(e) : '';
}
function $g(e) {
  switch (e.tag) {
    case 5:
      return Eo(e.type);
    case 16:
      return Eo('Lazy');
    case 13:
      return Eo('Suspense');
    case 19:
      return Eo('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = du(e.type, !1)), e;
    case 11:
      return (e = du(e.type.render, !1)), e;
    case 1:
      return (e = du(e.type, !0)), e;
    default:
      return '';
  }
}
function qu(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case vr:
      return 'Fragment';
    case mr:
      return 'Portal';
    case Xu:
      return 'Profiler';
    case uc:
      return 'StrictMode';
    case Zu:
      return 'Suspense';
    case Ju:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Jp:
        return (e.displayName || 'Context') + '.Consumer';
      case Zp:
        return (e._context.displayName || 'Context') + '.Provider';
      case sc:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case cc:
        return (t = e.displayName || null), t !== null ? t : qu(e.type) || 'Memo';
      case fn:
        (t = e._payload), (e = e._init);
        try {
          return qu(e(t));
        } catch {}
    }
  return null;
}
function Mg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return qu(t);
    case 8:
      return t === uc ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function On(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function eh(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function Dg(e) {
  var t = eh(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = '' + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = '' + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ri(e) {
  e._valueTracker || (e._valueTracker = Dg(e));
}
function th(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return e && (r = eh(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function gl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function es(e, t) {
  var n = t.checked;
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function jf(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = On(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function nh(e, t) {
  (t = t.checked), t != null && ac(e, 'checked', t, !1);
}
function ts(e, t) {
  nh(e, t);
  var n = On(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value') ? ns(e, t.type, n) : t.hasOwnProperty('defaultValue') && ns(e, t.type, On(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function zf(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function ns(e, t, n) {
  (t !== 'number' || gl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var ko = Array.isArray;
function Ar(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + On(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function rs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return fe({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Ff(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (ko(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: On(n) };
}
function rh(e, t) {
  var n = On(t.value),
    r = On(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Uf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function oh(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function os(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? oh(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Ai,
  ih = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        Ai = Ai || document.createElement('div'),
          Ai.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Ai.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Oo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ig = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Oo).forEach(function (e) {
  Ig.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Oo[t] = Oo[e]);
  });
});
function lh(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Oo.hasOwnProperty(e) && Oo[e])
    ? ('' + t).trim()
    : t + 'px';
}
function ah(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = lh(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Ng = fe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function is(e, t) {
  if (t) {
    if (Ng[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(O(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(O(62));
  }
}
function ls(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var as = null;
function fc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var us = null,
  Lr = null,
  $r = null;
function Bf(e) {
  if ((e = mi(e))) {
    if (typeof us != 'function') throw Error(O(280));
    var t = e.stateNode;
    t && ((t = la(t)), us(e.stateNode, e.type, t));
  }
}
function uh(e) {
  Lr ? ($r ? $r.push(e) : ($r = [e])) : (Lr = e);
}
function sh() {
  if (Lr) {
    var e = Lr,
      t = $r;
    if ((($r = Lr = null), Bf(e), t)) for (e = 0; e < t.length; e++) Bf(t[e]);
  }
}
function ch(e, t) {
  return e(t);
}
function fh() {}
var pu = !1;
function dh(e, t, n) {
  if (pu) return e(t, n);
  pu = !0;
  try {
    return ch(e, t, n);
  } finally {
    (pu = !1), (Lr !== null || $r !== null) && (fh(), sh());
  }
}
function Ho(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = la(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(O(231, t, typeof n));
  return n;
}
var ss = !1;
if (tn)
  try {
    var co = {};
    Object.defineProperty(co, 'passive', {
      get: function () {
        ss = !0;
      },
    }),
      window.addEventListener('test', co, co),
      window.removeEventListener('test', co, co);
  } catch {
    ss = !1;
  }
function jg(e, t, n, r, o, i, l, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (d) {
    this.onError(d);
  }
}
var Po = !1,
  yl = null,
  wl = !1,
  cs = null,
  zg = {
    onError: function (e) {
      (Po = !0), (yl = e);
    },
  };
function Fg(e, t, n, r, o, i, l, a, u) {
  (Po = !1), (yl = null), jg.apply(zg, arguments);
}
function Ug(e, t, n, r, o, i, l, a, u) {
  if ((Fg.apply(this, arguments), Po)) {
    if (Po) {
      var s = yl;
      (Po = !1), (yl = null);
    } else throw Error(O(198));
    wl || ((wl = !0), (cs = s));
  }
}
function er(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ph(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Wf(e) {
  if (er(e) !== e) throw Error(O(188));
}
function Bg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = er(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Wf(o), e;
        if (i === r) return Wf(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function hh(e) {
  return (e = Bg(e)), e !== null ? mh(e) : null;
}
function mh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = mh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vh = ut.unstable_scheduleCallback,
  Hf = ut.unstable_cancelCallback,
  Wg = ut.unstable_shouldYield,
  Hg = ut.unstable_requestPaint,
  ge = ut.unstable_now,
  Vg = ut.unstable_getCurrentPriorityLevel,
  dc = ut.unstable_ImmediatePriority,
  gh = ut.unstable_UserBlockingPriority,
  Sl = ut.unstable_NormalPriority,
  Kg = ut.unstable_LowPriority,
  yh = ut.unstable_IdlePriority,
  na = null,
  Nt = null;
function Qg(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == 'function')
    try {
      Nt.onCommitFiberRoot(na, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var kt = Math.clz32 ? Math.clz32 : Xg,
  Gg = Math.log,
  Yg = Math.LN2;
function Xg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Gg(e) / Yg) | 0)) | 0;
}
var Li = 64,
  $i = 4194304;
function Co(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function xl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (r = Co(a)) : ((i &= l), i !== 0 && (r = Co(i)));
  } else (l = n & ~o), l !== 0 ? (r = Co(l)) : i !== 0 && (r = Co(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - kt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Zg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Jg(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - kt(i),
      a = 1 << l,
      u = o[l];
    u === -1 ? (!(a & n) || a & r) && (o[l] = Zg(a, t)) : u <= t && (e.expiredLanes |= a), (i &= ~a);
  }
}
function fs(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function wh() {
  var e = Li;
  return (Li <<= 1), !(Li & 4194240) && (Li = 64), e;
}
function hu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - kt(t)),
    (e[t] = n);
}
function qg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - kt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function pc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Z = 0;
function Sh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var xh,
  hc,
  Eh,
  kh,
  Ch,
  ds = !1,
  Mi = [],
  gn = null,
  yn = null,
  wn = null,
  Vo = new Map(),
  Ko = new Map(),
  pn = [],
  ey =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Vf(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      gn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      yn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      wn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Vo.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ko.delete(t.pointerId);
  }
}
function fo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
      t !== null && ((t = mi(t)), t !== null && hc(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function ty(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (gn = fo(gn, e, t, n, r, o)), !0;
    case 'dragenter':
      return (yn = fo(yn, e, t, n, r, o)), !0;
    case 'mouseover':
      return (wn = fo(wn, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Vo.set(i, fo(Vo.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (i = o.pointerId), Ko.set(i, fo(Ko.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function _h(e) {
  var t = zn(e.target);
  if (t !== null) {
    var n = er(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ph(n)), t !== null)) {
          (e.blockedOn = t),
            Ch(e.priority, function () {
              Eh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function el(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ps(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (as = r), n.target.dispatchEvent(r), (as = null);
    } else return (t = mi(n)), t !== null && hc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Kf(e, t, n) {
  el(e) && n.delete(t);
}
function ny() {
  (ds = !1),
    gn !== null && el(gn) && (gn = null),
    yn !== null && el(yn) && (yn = null),
    wn !== null && el(wn) && (wn = null),
    Vo.forEach(Kf),
    Ko.forEach(Kf);
}
function po(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), ds || ((ds = !0), ut.unstable_scheduleCallback(ut.unstable_NormalPriority, ny)));
}
function Qo(e) {
  function t(o) {
    return po(o, e);
  }
  if (0 < Mi.length) {
    po(Mi[0], e);
    for (var n = 1; n < Mi.length; n++) {
      var r = Mi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    gn !== null && po(gn, e), yn !== null && po(yn, e), wn !== null && po(wn, e), Vo.forEach(t), Ko.forEach(t), n = 0;
    n < pn.length;
    n++
  )
    (r = pn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pn.length && ((n = pn[0]), n.blockedOn === null); ) _h(n), n.blockedOn === null && pn.shift();
}
var Mr = an.ReactCurrentBatchConfig,
  El = !0;
function ry(e, t, n, r) {
  var o = Z,
    i = Mr.transition;
  Mr.transition = null;
  try {
    (Z = 1), mc(e, t, n, r);
  } finally {
    (Z = o), (Mr.transition = i);
  }
}
function oy(e, t, n, r) {
  var o = Z,
    i = Mr.transition;
  Mr.transition = null;
  try {
    (Z = 4), mc(e, t, n, r);
  } finally {
    (Z = o), (Mr.transition = i);
  }
}
function mc(e, t, n, r) {
  if (El) {
    var o = ps(e, t, n, r);
    if (o === null) Cu(e, t, r, kl, n), Vf(e, r);
    else if (ty(o, e, t, n, r)) r.stopPropagation();
    else if ((Vf(e, r), t & 4 && -1 < ey.indexOf(e))) {
      for (; o !== null; ) {
        var i = mi(o);
        if ((i !== null && xh(i), (i = ps(e, t, n, r)), i === null && Cu(e, t, r, kl, n), i === o)) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Cu(e, t, r, null, n);
  }
}
var kl = null;
function ps(e, t, n, r) {
  if (((kl = null), (e = fc(r)), (e = zn(e)), e !== null))
    if (((t = er(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ph(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (kl = e), null;
}
function Oh(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Vg()) {
        case dc:
          return 1;
        case gh:
          return 4;
        case Sl:
        case Kg:
          return 16;
        case yh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mn = null,
  vc = null,
  tl = null;
function Ph() {
  if (tl) return tl;
  var e,
    t = vc,
    n = t.length,
    r,
    o = 'value' in mn ? mn.value : mn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (tl = o.slice(e, 1 < r ? 1 - r : void 0));
}
function nl(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Di() {
  return !0;
}
function Qf() {
  return !1;
}
function ct(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Di : Qf),
      (this.isPropagationStopped = Qf),
      this
    );
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Di));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Di));
      },
      persist: function () {},
      isPersistent: Di,
    }),
    t
  );
}
var no = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  gc = ct(no),
  hi = fe({}, no, { view: 0, detail: 0 }),
  iy = ct(hi),
  mu,
  vu,
  ho,
  ra = fe({}, hi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: yc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== ho &&
            (ho && e.type === 'mousemove'
              ? ((mu = e.screenX - ho.screenX), (vu = e.screenY - ho.screenY))
              : (vu = mu = 0),
            (ho = e)),
          mu);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : vu;
    },
  }),
  Gf = ct(ra),
  ly = fe({}, ra, { dataTransfer: 0 }),
  ay = ct(ly),
  uy = fe({}, hi, { relatedTarget: 0 }),
  gu = ct(uy),
  sy = fe({}, no, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cy = ct(sy),
  fy = fe({}, no, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  dy = ct(fy),
  py = fe({}, no, { data: 0 }),
  Yf = ct(py),
  hy = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  my = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  vy = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function gy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vy[e]) ? !!t[e] : !1;
}
function yc() {
  return gy;
}
var yy = fe({}, hi, {
    key: function (e) {
      if (e.key) {
        var t = hy[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = nl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? my[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yc,
    charCode: function (e) {
      return e.type === 'keypress' ? nl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress' ? nl(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
  }),
  wy = ct(yy),
  Sy = fe({}, ra, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Xf = ct(Sy),
  xy = fe({}, hi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yc,
  }),
  Ey = ct(xy),
  ky = fe({}, no, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cy = ct(ky),
  _y = fe({}, ra, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Oy = ct(_y),
  Py = [9, 13, 27, 32],
  wc = tn && 'CompositionEvent' in window,
  To = null;
tn && 'documentMode' in document && (To = document.documentMode);
var Ty = tn && 'TextEvent' in window && !To,
  Th = tn && (!wc || (To && 8 < To && 11 >= To)),
  Zf = String.fromCharCode(32),
  Jf = !1;
function bh(e, t) {
  switch (e) {
    case 'keyup':
      return Py.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Rh(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var gr = !1;
function by(e, t) {
  switch (e) {
    case 'compositionend':
      return Rh(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Jf = !0), Zf);
    case 'textInput':
      return (e = t.data), e === Zf && Jf ? null : e;
    default:
      return null;
  }
}
function Ry(e, t) {
  if (gr) return e === 'compositionend' || (!wc && bh(e, t)) ? ((e = Ph()), (tl = vc = mn = null), (gr = !1), e) : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Th && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Ay = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function qf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Ay[e.type] : t === 'textarea';
}
function Ah(e, t, n, r) {
  uh(r),
    (t = Cl(t, 'onChange')),
    0 < t.length && ((n = new gc('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var bo = null,
  Go = null;
function Ly(e) {
  Bh(e, 0);
}
function oa(e) {
  var t = Sr(e);
  if (th(t)) return e;
}
function $y(e, t) {
  if (e === 'change') return t;
}
var Lh = !1;
if (tn) {
  var yu;
  if (tn) {
    var wu = 'oninput' in document;
    if (!wu) {
      var ed = document.createElement('div');
      ed.setAttribute('oninput', 'return;'), (wu = typeof ed.oninput == 'function');
    }
    yu = wu;
  } else yu = !1;
  Lh = yu && (!document.documentMode || 9 < document.documentMode);
}
function td() {
  bo && (bo.detachEvent('onpropertychange', $h), (Go = bo = null));
}
function $h(e) {
  if (e.propertyName === 'value' && oa(Go)) {
    var t = [];
    Ah(t, Go, e, fc(e)), dh(Ly, t);
  }
}
function My(e, t, n) {
  e === 'focusin' ? (td(), (bo = t), (Go = n), bo.attachEvent('onpropertychange', $h)) : e === 'focusout' && td();
}
function Dy(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return oa(Go);
}
function Iy(e, t) {
  if (e === 'click') return oa(t);
}
function Ny(e, t) {
  if (e === 'input' || e === 'change') return oa(t);
}
function jy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ot = typeof Object.is == 'function' ? Object.is : jy;
function Yo(e, t) {
  if (Ot(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Yu.call(t, o) || !Ot(e[o], t[o])) return !1;
  }
  return !0;
}
function nd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function rd(e, t) {
  var n = nd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = nd(n);
  }
}
function Mh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Mh(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Dh() {
  for (var e = window, t = gl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = gl(e.document);
  }
  return t;
}
function Sc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function zy(e) {
  var t = Dh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Mh(n.ownerDocument.documentElement, n)) {
    if (r !== null && Sc(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = rd(n, i));
        var l = rd(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Fy = tn && 'documentMode' in document && 11 >= document.documentMode,
  yr = null,
  hs = null,
  Ro = null,
  ms = !1;
function od(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ms ||
    yr == null ||
    yr !== gl(r) ||
    ((r = yr),
    'selectionStart' in r && Sc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ro && Yo(Ro, r)) ||
      ((Ro = r),
      (r = Cl(hs, 'onSelect')),
      0 < r.length &&
        ((t = new gc('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = yr))));
}
function Ii(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var wr = {
    animationend: Ii('Animation', 'AnimationEnd'),
    animationiteration: Ii('Animation', 'AnimationIteration'),
    animationstart: Ii('Animation', 'AnimationStart'),
    transitionend: Ii('Transition', 'TransitionEnd'),
  },
  Su = {},
  Ih = {};
tn &&
  ((Ih = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete wr.animationend.animation, delete wr.animationiteration.animation, delete wr.animationstart.animation),
  'TransitionEvent' in window || delete wr.transitionend.transition);
function ia(e) {
  if (Su[e]) return Su[e];
  if (!wr[e]) return e;
  var t = wr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ih) return (Su[e] = t[n]);
  return e;
}
var Nh = ia('animationend'),
  jh = ia('animationiteration'),
  zh = ia('animationstart'),
  Fh = ia('transitionend'),
  Uh = new Map(),
  id =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function bn(e, t) {
  Uh.set(e, t), qn(t, [e]);
}
for (var xu = 0; xu < id.length; xu++) {
  var Eu = id[xu],
    Uy = Eu.toLowerCase(),
    By = Eu[0].toUpperCase() + Eu.slice(1);
  bn(Uy, 'on' + By);
}
bn(Nh, 'onAnimationEnd');
bn(jh, 'onAnimationIteration');
bn(zh, 'onAnimationStart');
bn('dblclick', 'onDoubleClick');
bn('focusin', 'onFocus');
bn('focusout', 'onBlur');
bn(Fh, 'onTransitionEnd');
Br('onMouseEnter', ['mouseout', 'mouseover']);
Br('onMouseLeave', ['mouseout', 'mouseover']);
Br('onPointerEnter', ['pointerout', 'pointerover']);
Br('onPointerLeave', ['pointerout', 'pointerover']);
qn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
qn('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
qn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
qn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
qn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
qn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var _o =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Wy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(_o));
function ld(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Ug(r, t, void 0, e), (e.currentTarget = null);
}
function Bh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== i && o.isPropagationStopped())) break e;
          ld(o, a, s), (i = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]), (u = a.instance), (s = a.currentTarget), (a = a.listener), u !== i && o.isPropagationStopped())
          )
            break e;
          ld(o, a, s), (i = u);
        }
    }
  }
  if (wl) throw ((e = cs), (wl = !1), (cs = null), e);
}
function re(e, t) {
  var n = t[Ss];
  n === void 0 && (n = t[Ss] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Wh(t, e, 2, !1), n.add(r));
}
function ku(e, t, n) {
  var r = 0;
  t && (r |= 4), Wh(n, e, r, t);
}
var Ni = '_reactListening' + Math.random().toString(36).slice(2);
function Xo(e) {
  if (!e[Ni]) {
    (e[Ni] = !0),
      Xp.forEach(function (n) {
        n !== 'selectionchange' && (Wy.has(n) || ku(n, !1, e), ku(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ni] || ((t[Ni] = !0), ku('selectionchange', !1, t));
  }
}
function Wh(e, t, n, r) {
  switch (Oh(t)) {
    case 1:
      var o = ry;
      break;
    case 4:
      o = oy;
      break;
    default:
      o = mc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ss || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Cu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo), u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = zn(a)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  dh(function () {
    var s = i,
      d = fc(n),
      h = [];
    e: {
      var c = Uh.get(e);
      if (c !== void 0) {
        var g = gc,
          y = e;
        switch (e) {
          case 'keypress':
            if (nl(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = wy;
            break;
          case 'focusin':
            (y = 'focus'), (g = gu);
            break;
          case 'focusout':
            (y = 'blur'), (g = gu);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = gu;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = Gf;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = ay;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = Ey;
            break;
          case Nh:
          case jh:
          case zh:
            g = cy;
            break;
          case Fh:
            g = Cy;
            break;
          case 'scroll':
            g = iy;
            break;
          case 'wheel':
            g = Oy;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = dy;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = Xf;
        }
        var m = (t & 4) !== 0,
          S = !m && e === 'scroll',
          p = m ? (c !== null ? c + 'Capture' : null) : c;
        m = [];
        for (var f = s, v; f !== null; ) {
          v = f;
          var w = v.stateNode;
          if (
            (v.tag === 5 && w !== null && ((v = w), p !== null && ((w = Ho(f, p)), w != null && m.push(Zo(f, w, v)))),
            S)
          )
            break;
          f = f.return;
        }
        0 < m.length && ((c = new g(c, y, null, n, d)), h.push({ event: c, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          c && n !== as && (y = n.relatedTarget || n.fromElement) && (zn(y) || y[nn]))
        )
          break e;
        if (
          (g || c) &&
          ((c = d.window === d ? d : (c = d.ownerDocument) ? c.defaultView || c.parentWindow : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = s),
              (y = y ? zn(y) : null),
              y !== null && ((S = er(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((g = null), (y = s)),
          g !== y)
        ) {
          if (
            ((m = Gf),
            (w = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((m = Xf), (w = 'onPointerLeave'), (p = 'onPointerEnter'), (f = 'pointer')),
            (S = g == null ? c : Sr(g)),
            (v = y == null ? c : Sr(y)),
            (c = new m(w, f + 'leave', g, n, d)),
            (c.target = S),
            (c.relatedTarget = v),
            (w = null),
            zn(d) === s && ((m = new m(p, f + 'enter', y, n, d)), (m.target = v), (m.relatedTarget = S), (w = m)),
            (S = w),
            g && y)
          )
            t: {
              for (m = g, p = y, f = 0, v = m; v; v = cr(v)) f++;
              for (v = 0, w = p; w; w = cr(w)) v++;
              for (; 0 < f - v; ) (m = cr(m)), f--;
              for (; 0 < v - f; ) (p = cr(p)), v--;
              for (; f--; ) {
                if (m === p || (p !== null && m === p.alternate)) break t;
                (m = cr(m)), (p = cr(p));
              }
              m = null;
            }
          else m = null;
          g !== null && ad(h, c, g, m, !1), y !== null && S !== null && ad(h, S, y, m, !0);
        }
      }
      e: {
        if (
          ((c = s ? Sr(s) : window),
          (g = c.nodeName && c.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && c.type === 'file'))
        )
          var E = $y;
        else if (qf(c))
          if (Lh) E = Ny;
          else {
            E = Dy;
            var T = My;
          }
        else
          (g = c.nodeName) && g.toLowerCase() === 'input' && (c.type === 'checkbox' || c.type === 'radio') && (E = Iy);
        if (E && (E = E(e, s))) {
          Ah(h, E, n, d);
          break e;
        }
        T && T(e, c, s),
          e === 'focusout' && (T = c._wrapperState) && T.controlled && c.type === 'number' && ns(c, 'number', c.value);
      }
      switch (((T = s ? Sr(s) : window), e)) {
        case 'focusin':
          (qf(T) || T.contentEditable === 'true') && ((yr = T), (hs = s), (Ro = null));
          break;
        case 'focusout':
          Ro = hs = yr = null;
          break;
        case 'mousedown':
          ms = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (ms = !1), od(h, n, d);
          break;
        case 'selectionchange':
          if (Fy) break;
        case 'keydown':
        case 'keyup':
          od(h, n, d);
      }
      var x;
      if (wc)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart';
              break e;
            case 'compositionend':
              P = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              P = 'onCompositionUpdate';
              break e;
          }
          P = void 0;
        }
      else
        gr ? bh(e, n) && (P = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
      P &&
        (Th &&
          n.locale !== 'ko' &&
          (gr || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && gr && (x = Ph())
            : ((mn = d), (vc = 'value' in mn ? mn.value : mn.textContent), (gr = !0))),
        (T = Cl(s, P)),
        0 < T.length &&
          ((P = new Yf(P, e, null, n, d)),
          h.push({ event: P, listeners: T }),
          x ? (P.data = x) : ((x = Rh(n)), x !== null && (P.data = x)))),
        (x = Ty ? by(e, n) : Ry(e, n)) &&
          ((s = Cl(s, 'onBeforeInput')),
          0 < s.length &&
            ((d = new Yf('onBeforeInput', 'beforeinput', null, n, d)),
            h.push({ event: d, listeners: s }),
            (d.data = x)));
    }
    Bh(h, t);
  });
}
function Zo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Cl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i), (i = Ho(e, n)), i != null && r.unshift(Zo(e, i, o)), (i = Ho(e, t)), i != null && r.push(Zo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function cr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ad(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      o
        ? ((u = Ho(n, i)), u != null && l.unshift(Zo(n, u, a)))
        : o || ((u = Ho(n, i)), u != null && l.push(Zo(n, u, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Hy = /\r\n?/g,
  Vy = /\u0000|\uFFFD/g;
function ud(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Hy,
      `
`
    )
    .replace(Vy, '');
}
function ji(e, t, n) {
  if (((t = ud(t)), ud(e) !== t && n)) throw Error(O(425));
}
function _l() {}
var vs = null,
  gs = null;
function ys(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ws = typeof setTimeout == 'function' ? setTimeout : void 0,
  Ky = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  sd = typeof Promise == 'function' ? Promise : void 0,
  Qy =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof sd < 'u'
      ? function (e) {
          return sd.resolve(null).then(e).catch(Gy);
        }
      : ws;
function Gy(e) {
  setTimeout(function () {
    throw e;
  });
}
function _u(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Qo(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Qo(t);
}
function Sn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function cd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ro = Math.random().toString(36).slice(2),
  Dt = '__reactFiber$' + ro,
  Jo = '__reactProps$' + ro,
  nn = '__reactContainer$' + ro,
  Ss = '__reactEvents$' + ro,
  Yy = '__reactListeners$' + ro,
  Xy = '__reactHandles$' + ro;
function zn(e) {
  var t = e[Dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nn] || n[Dt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = cd(e); e !== null; ) {
          if ((n = e[Dt])) return n;
          e = cd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function mi(e) {
  return (e = e[Dt] || e[nn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Sr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function la(e) {
  return e[Jo] || null;
}
var xs = [],
  xr = -1;
function Rn(e) {
  return { current: e };
}
function oe(e) {
  0 > xr || ((e.current = xs[xr]), (xs[xr] = null), xr--);
}
function ne(e, t) {
  xr++, (xs[xr] = e.current), (e.current = t);
}
var Pn = {},
  We = Rn(Pn),
  Xe = Rn(!1),
  Kn = Pn;
function Wr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Pn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ze(e) {
  return (e = e.childContextTypes), e != null;
}
function Ol() {
  oe(Xe), oe(We);
}
function fd(e, t, n) {
  if (We.current !== Pn) throw Error(O(168));
  ne(We, t), ne(Xe, n);
}
function Hh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(O(108, Mg(e) || 'Unknown', o));
  return fe({}, n, r);
}
function Pl(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Pn),
    (Kn = We.current),
    ne(We, e),
    ne(Xe, Xe.current),
    !0
  );
}
function dd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n ? ((e = Hh(e, t, Kn)), (r.__reactInternalMemoizedMergedChildContext = e), oe(Xe), oe(We), ne(We, e)) : oe(Xe),
    ne(Xe, n);
}
var Gt = null,
  aa = !1,
  Ou = !1;
function Vh(e) {
  Gt === null ? (Gt = [e]) : Gt.push(e);
}
function Zy(e) {
  (aa = !0), Vh(e);
}
function An() {
  if (!Ou && Gt !== null) {
    Ou = !0;
    var e = 0,
      t = Z;
    try {
      var n = Gt;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Gt = null), (aa = !1);
    } catch (o) {
      throw (Gt !== null && (Gt = Gt.slice(e + 1)), vh(dc, An), o);
    } finally {
      (Z = t), (Ou = !1);
    }
  }
  return null;
}
var Er = [],
  kr = 0,
  Tl = null,
  bl = 0,
  pt = [],
  ht = 0,
  Qn = null,
  Yt = 1,
  Xt = '';
function Dn(e, t) {
  (Er[kr++] = bl), (Er[kr++] = Tl), (Tl = e), (bl = t);
}
function Kh(e, t, n) {
  (pt[ht++] = Yt), (pt[ht++] = Xt), (pt[ht++] = Qn), (Qn = e);
  var r = Yt;
  e = Xt;
  var o = 32 - kt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - kt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Yt = (1 << (32 - kt(t) + o)) | (n << o) | r),
      (Xt = i + e);
  } else (Yt = (1 << i) | (n << o) | r), (Xt = e);
}
function xc(e) {
  e.return !== null && (Dn(e, 1), Kh(e, 1, 0));
}
function Ec(e) {
  for (; e === Tl; ) (Tl = Er[--kr]), (Er[kr] = null), (bl = Er[--kr]), (Er[kr] = null);
  for (; e === Qn; )
    (Qn = pt[--ht]), (pt[ht] = null), (Xt = pt[--ht]), (pt[ht] = null), (Yt = pt[--ht]), (pt[ht] = null);
}
var lt = null,
  it = null,
  ae = !1,
  Et = null;
function Qh(e, t) {
  var n = mt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function pd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (lt = e), (it = Sn(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (lt = e), (it = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Qn !== null ? { id: Yt, overflow: Xt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = mt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (lt = e),
            (it = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Es(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ks(e) {
  if (ae) {
    var t = it;
    if (t) {
      var n = t;
      if (!pd(e, t)) {
        if (Es(e)) throw Error(O(418));
        t = Sn(n.nextSibling);
        var r = lt;
        t && pd(e, t) ? Qh(r, n) : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (lt = e));
      }
    } else {
      if (Es(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (ae = !1), (lt = e);
    }
  }
}
function hd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  lt = e;
}
function zi(e) {
  if (e !== lt) return !1;
  if (!ae) return hd(e), (ae = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !ys(e.type, e.memoizedProps))),
    t && (t = it))
  ) {
    if (Es(e)) throw (Gh(), Error(O(418)));
    for (; t; ) Qh(e, t), (t = Sn(t.nextSibling));
  }
  if ((hd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              it = Sn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      it = null;
    }
  } else it = lt ? Sn(e.stateNode.nextSibling) : null;
  return !0;
}
function Gh() {
  for (var e = it; e; ) e = Sn(e.nextSibling);
}
function Hr() {
  (it = lt = null), (ae = !1);
}
function kc(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
var Jy = an.ReactCurrentBatchConfig;
function St(e, t) {
  if (e && e.defaultProps) {
    (t = fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Rl = Rn(null),
  Al = null,
  Cr = null,
  Cc = null;
function _c() {
  Cc = Cr = Al = null;
}
function Oc(e) {
  var t = Rl.current;
  oe(Rl), (e._currentValue = t);
}
function Cs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Dr(e, t) {
  (Al = e),
    (Cc = Cr = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Ye = !0), (e.firstContext = null));
}
function gt(e) {
  var t = e._currentValue;
  if (Cc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Cr === null)) {
      if (Al === null) throw Error(O(308));
      (Cr = e), (Al.dependencies = { lanes: 0, firstContext: e });
    } else Cr = Cr.next = e;
  return t;
}
var Fn = null;
function Pc(e) {
  Fn === null ? (Fn = [e]) : Fn.push(e);
}
function Yh(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? ((n.next = n), Pc(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), rn(e, r);
}
function rn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var dn = !1;
function Tc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Xh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Jt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function xn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), K & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), rn(e, n);
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Pc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    rn(e, n)
  );
}
function rl(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), pc(e, n);
  }
}
function md(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Ll(e, t, n, r) {
  var o = e.updateQueue;
  dn = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), l === null ? (i = s) : (l.next = s), (l = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== l && (a === null ? (d.firstBaseUpdate = s) : (a.next = s), (d.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var h = o.baseState;
    (l = 0), (d = s = u = null), (a = i);
    do {
      var c = a.lane,
        g = a.eventTime;
      if ((r & c) === c) {
        d !== null &&
          (d = d.next = { eventTime: g, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
        e: {
          var y = e,
            m = a;
          switch (((c = t), (g = n), m.tag)) {
            case 1:
              if (((y = m.payload), typeof y == 'function')) {
                h = y.call(g, h, c);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (((y = m.payload), (c = typeof y == 'function' ? y.call(g, h, c) : y), c == null)) break e;
              h = fe({}, h, c);
              break e;
            case 2:
              dn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (c = o.effects), c === null ? (o.effects = [a]) : c.push(a));
      } else
        (g = { eventTime: g, lane: c, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
          d === null ? ((s = d = g), (u = h)) : (d = d.next = g),
          (l |= c);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (c = a), (a = c.next), (c.next = null), (o.lastBaseUpdate = c), (o.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (u = h),
      (o.baseState = u),
      (o.firstBaseUpdate = s),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Yn |= l), (e.lanes = l), (e.memoizedState = h);
  }
}
function vd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(O(191, o));
        o.call(r);
      }
    }
}
var Zh = new Yp.Component().refs;
function _s(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ua = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? er(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ve(),
      o = kn(e),
      i = Jt(r, o);
    (i.payload = t), n != null && (i.callback = n), (t = xn(e, i, o)), t !== null && (Ct(t, e, o, r), rl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ve(),
      o = kn(e),
      i = Jt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = xn(e, i, o)),
      t !== null && (Ct(t, e, o, r), rl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ve(),
      r = kn(e),
      o = Jt(n, r);
    (o.tag = 2), t != null && (o.callback = t), (t = xn(e, o, r)), t !== null && (Ct(t, e, r, n), rl(t, e, r));
  },
};
function gd(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Yo(n, r) || !Yo(o, i)
      : !0
  );
}
function Jh(e, t, n) {
  var r = !1,
    o = Pn,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = gt(i))
      : ((o = Ze(t) ? Kn : We.current), (r = t.contextTypes), (i = (r = r != null) ? Wr(e, o) : Pn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ua),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function yd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ua.enqueueReplaceState(t, t.state, null);
}
function Os(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Zh), Tc(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null ? (o.context = gt(i)) : ((i = Ze(t) ? Kn : We.current), (o.context = Wr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (_s(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && ua.enqueueReplaceState(o, o.state, null),
      Ll(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function mo(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var o = r,
        i = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            a === Zh && (a = o.refs = {}), l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function Fi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(O(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  );
}
function wd(e) {
  var t = e._init;
  return t(e._payload);
}
function qh(e) {
  function t(p, f) {
    if (e) {
      var v = p.deletions;
      v === null ? ((p.deletions = [f]), (p.flags |= 16)) : v.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; ) f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function o(p, f) {
    return (p = Cn(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, f, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate), v !== null ? ((v = v.index), v < f ? ((p.flags |= 2), f) : v) : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, f, v, w) {
    return f === null || f.tag !== 6 ? ((f = $u(v, p.mode, w)), (f.return = p), f) : ((f = o(f, v)), (f.return = p), f);
  }
  function u(p, f, v, w) {
    var E = v.type;
    return E === vr
      ? d(p, f, v.props.children, w, v.key)
      : f !== null &&
        (f.elementType === E || (typeof E == 'object' && E !== null && E.$$typeof === fn && wd(E) === f.type))
      ? ((w = o(f, v.props)), (w.ref = mo(p, f, v)), (w.return = p), w)
      : ((w = sl(v.type, v.key, v.props, null, p.mode, w)), (w.ref = mo(p, f, v)), (w.return = p), w);
  }
  function s(p, f, v, w) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = Mu(v, p.mode, w)), (f.return = p), f)
      : ((f = o(f, v.children || [])), (f.return = p), f);
  }
  function d(p, f, v, w, E) {
    return f === null || f.tag !== 7
      ? ((f = Hn(v, p.mode, w, E)), (f.return = p), f)
      : ((f = o(f, v)), (f.return = p), f);
  }
  function h(p, f, v) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = $u('' + f, p.mode, v)), (f.return = p), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case bi:
          return (v = sl(f.type, f.key, f.props, null, p.mode, v)), (v.ref = mo(p, null, f)), (v.return = p), v;
        case mr:
          return (f = Mu(f, p.mode, v)), (f.return = p), f;
        case fn:
          var w = f._init;
          return h(p, w(f._payload), v);
      }
      if (ko(f) || so(f)) return (f = Hn(f, p.mode, v, null)), (f.return = p), f;
      Fi(p, f);
    }
    return null;
  }
  function c(p, f, v, w) {
    var E = f !== null ? f.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number') return E !== null ? null : a(p, f, '' + v, w);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case bi:
          return v.key === E ? u(p, f, v, w) : null;
        case mr:
          return v.key === E ? s(p, f, v, w) : null;
        case fn:
          return (E = v._init), c(p, f, E(v._payload), w);
      }
      if (ko(v) || so(v)) return E !== null ? null : d(p, f, v, w, null);
      Fi(p, v);
    }
    return null;
  }
  function g(p, f, v, w, E) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number') return (p = p.get(v) || null), a(f, p, '' + w, E);
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case bi:
          return (p = p.get(w.key === null ? v : w.key) || null), u(f, p, w, E);
        case mr:
          return (p = p.get(w.key === null ? v : w.key) || null), s(f, p, w, E);
        case fn:
          var T = w._init;
          return g(p, f, v, T(w._payload), E);
      }
      if (ko(w) || so(w)) return (p = p.get(v) || null), d(f, p, w, E, null);
      Fi(f, w);
    }
    return null;
  }
  function y(p, f, v, w) {
    for (var E = null, T = null, x = f, P = (f = 0), $ = null; x !== null && P < v.length; P++) {
      x.index > P ? (($ = x), (x = null)) : ($ = x.sibling);
      var A = c(p, x, v[P], w);
      if (A === null) {
        x === null && (x = $);
        break;
      }
      e && x && A.alternate === null && t(p, x),
        (f = i(A, f, P)),
        T === null ? (E = A) : (T.sibling = A),
        (T = A),
        (x = $);
    }
    if (P === v.length) return n(p, x), ae && Dn(p, P), E;
    if (x === null) {
      for (; P < v.length; P++)
        (x = h(p, v[P], w)), x !== null && ((f = i(x, f, P)), T === null ? (E = x) : (T.sibling = x), (T = x));
      return ae && Dn(p, P), E;
    }
    for (x = r(p, x); P < v.length; P++)
      ($ = g(x, p, P, v[P], w)),
        $ !== null &&
          (e && $.alternate !== null && x.delete($.key === null ? P : $.key),
          (f = i($, f, P)),
          T === null ? (E = $) : (T.sibling = $),
          (T = $));
    return (
      e &&
        x.forEach(function (M) {
          return t(p, M);
        }),
      ae && Dn(p, P),
      E
    );
  }
  function m(p, f, v, w) {
    var E = so(v);
    if (typeof E != 'function') throw Error(O(150));
    if (((v = E.call(v)), v == null)) throw Error(O(151));
    for (var T = (E = null), x = f, P = (f = 0), $ = null, A = v.next(); x !== null && !A.done; P++, A = v.next()) {
      x.index > P ? (($ = x), (x = null)) : ($ = x.sibling);
      var M = c(p, x, A.value, w);
      if (M === null) {
        x === null && (x = $);
        break;
      }
      e && x && M.alternate === null && t(p, x),
        (f = i(M, f, P)),
        T === null ? (E = M) : (T.sibling = M),
        (T = M),
        (x = $);
    }
    if (A.done) return n(p, x), ae && Dn(p, P), E;
    if (x === null) {
      for (; !A.done; P++, A = v.next())
        (A = h(p, A.value, w)), A !== null && ((f = i(A, f, P)), T === null ? (E = A) : (T.sibling = A), (T = A));
      return ae && Dn(p, P), E;
    }
    for (x = r(p, x); !A.done; P++, A = v.next())
      (A = g(x, p, P, A.value, w)),
        A !== null &&
          (e && A.alternate !== null && x.delete(A.key === null ? P : A.key),
          (f = i(A, f, P)),
          T === null ? (E = A) : (T.sibling = A),
          (T = A));
    return (
      e &&
        x.forEach(function (te) {
          return t(p, te);
        }),
      ae && Dn(p, P),
      E
    );
  }
  function S(p, f, v, w) {
    if (
      (typeof v == 'object' && v !== null && v.type === vr && v.key === null && (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case bi:
          e: {
            for (var E = v.key, T = f; T !== null; ) {
              if (T.key === E) {
                if (((E = v.type), E === vr)) {
                  if (T.tag === 7) {
                    n(p, T.sibling), (f = o(T, v.props.children)), (f.return = p), (p = f);
                    break e;
                  }
                } else if (
                  T.elementType === E ||
                  (typeof E == 'object' && E !== null && E.$$typeof === fn && wd(E) === T.type)
                ) {
                  n(p, T.sibling), (f = o(T, v.props)), (f.ref = mo(p, T, v)), (f.return = p), (p = f);
                  break e;
                }
                n(p, T);
                break;
              } else t(p, T);
              T = T.sibling;
            }
            v.type === vr
              ? ((f = Hn(v.props.children, p.mode, w, v.key)), (f.return = p), (p = f))
              : ((w = sl(v.type, v.key, v.props, null, p.mode, w)), (w.ref = mo(p, f, v)), (w.return = p), (p = w));
          }
          return l(p);
        case mr:
          e: {
            for (T = v.key; f !== null; ) {
              if (f.key === T)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  n(p, f.sibling), (f = o(f, v.children || [])), (f.return = p), (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = Mu(v, p.mode, w)), (f.return = p), (p = f);
          }
          return l(p);
        case fn:
          return (T = v._init), S(p, f, T(v._payload), w);
      }
      if (ko(v)) return y(p, f, v, w);
      if (so(v)) return m(p, f, v, w);
      Fi(p, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = o(f, v)), (f.return = p), (p = f))
          : (n(p, f), (f = $u(v, p.mode, w)), (f.return = p), (p = f)),
        l(p))
      : n(p, f);
  }
  return S;
}
var Vr = qh(!0),
  em = qh(!1),
  vi = {},
  jt = Rn(vi),
  qo = Rn(vi),
  ei = Rn(vi);
function Un(e) {
  if (e === vi) throw Error(O(174));
  return e;
}
function bc(e, t) {
  switch ((ne(ei, t), ne(qo, e), ne(jt, vi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : os(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = os(t, e));
  }
  oe(jt), ne(jt, t);
}
function Kr() {
  oe(jt), oe(qo), oe(ei);
}
function tm(e) {
  Un(ei.current);
  var t = Un(jt.current),
    n = os(t, e.type);
  t !== n && (ne(qo, e), ne(jt, n));
}
function Rc(e) {
  qo.current === e && (oe(jt), oe(qo));
}
var ue = Rn(0);
function $l(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Pu = [];
function Ac() {
  for (var e = 0; e < Pu.length; e++) Pu[e]._workInProgressVersionPrimary = null;
  Pu.length = 0;
}
var ol = an.ReactCurrentDispatcher,
  Tu = an.ReactCurrentBatchConfig,
  Gn = 0,
  ce = null,
  Ee = null,
  Oe = null,
  Ml = !1,
  Ao = !1,
  ti = 0,
  qy = 0;
function ze() {
  throw Error(O(321));
}
function Lc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ot(e[n], t[n])) return !1;
  return !0;
}
function $c(e, t, n, r, o, i) {
  if (
    ((Gn = i),
    (ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ol.current = e === null || e.memoizedState === null ? r1 : o1),
    (e = n(r, o)),
    Ao)
  ) {
    i = 0;
    do {
      if (((Ao = !1), (ti = 0), 25 <= i)) throw Error(O(301));
      (i += 1), (Oe = Ee = null), (t.updateQueue = null), (ol.current = i1), (e = n(r, o));
    } while (Ao);
  }
  if (((ol.current = Dl), (t = Ee !== null && Ee.next !== null), (Gn = 0), (Oe = Ee = ce = null), (Ml = !1), t))
    throw Error(O(300));
  return e;
}
function Mc() {
  var e = ti !== 0;
  return (ti = 0), e;
}
function Lt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Oe === null ? (ce.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe;
}
function yt() {
  if (Ee === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = Oe === null ? ce.memoizedState : Oe.next;
  if (t !== null) (Oe = t), (Ee = e);
  else {
    if (e === null) throw Error(O(310));
    (Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      Oe === null ? (ce.memoizedState = Oe = e) : (Oe = Oe.next = e);
  }
  return Oe;
}
function ni(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function bu(e) {
  var t = yt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = Ee,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (l = null),
      u = null,
      s = i;
    do {
      var d = s.lane;
      if ((Gn & d) === d)
        u !== null &&
          (u = u.next =
            { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var h = { lane: d, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null };
        u === null ? ((a = u = h), (l = r)) : (u = u.next = h), (ce.lanes |= d), (Yn |= d);
      }
      s = s.next;
    } while (s !== null && s !== i);
    u === null ? (l = r) : (u.next = a),
      Ot(r, t.memoizedState) || (Ye = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ce.lanes |= i), (Yn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ru(e) {
  var t = yt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    Ot(i, t.memoizedState) || (Ye = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function nm() {}
function rm(e, t) {
  var n = ce,
    r = yt(),
    o = t(),
    i = !Ot(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ye = !0)),
    (r = r.queue),
    Dc(lm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Oe !== null && Oe.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), ri(9, im.bind(null, n, r, o, t), void 0, null), Pe === null)) throw Error(O(349));
    Gn & 30 || om(n, t, o);
  }
  return o;
}
function om(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ce.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function im(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), am(t) && um(e);
}
function lm(e, t, n) {
  return n(function () {
    am(t) && um(e);
  });
}
function am(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ot(e, n);
  } catch {
    return !0;
  }
}
function um(e) {
  var t = rn(e, 1);
  t !== null && Ct(t, e, 1, -1);
}
function Sd(e) {
  var t = Lt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ni, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = n1.bind(null, ce, e)),
    [t.memoizedState, e]
  );
}
function ri(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ce.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sm() {
  return yt().memoizedState;
}
function il(e, t, n, r) {
  var o = Lt();
  (ce.flags |= e), (o.memoizedState = ri(1 | t, n, void 0, r === void 0 ? null : r));
}
function sa(e, t, n, r) {
  var o = yt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ee !== null) {
    var l = Ee.memoizedState;
    if (((i = l.destroy), r !== null && Lc(r, l.deps))) {
      o.memoizedState = ri(t, n, i, r);
      return;
    }
  }
  (ce.flags |= e), (o.memoizedState = ri(1 | t, n, i, r));
}
function xd(e, t) {
  return il(8390656, 8, e, t);
}
function Dc(e, t) {
  return sa(2048, 8, e, t);
}
function cm(e, t) {
  return sa(4, 2, e, t);
}
function fm(e, t) {
  return sa(4, 4, e, t);
}
function dm(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function pm(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), sa(4, 4, dm.bind(null, t, e), n);
}
function Ic() {}
function hm(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lc(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function mm(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lc(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function vm(e, t, n) {
  return Gn & 21
    ? (Ot(n, t) || ((n = wh()), (ce.lanes |= n), (Yn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Ye = !0)), (e.memoizedState = n));
}
function e1(e, t) {
  var n = Z;
  (Z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Tu.transition;
  Tu.transition = {};
  try {
    e(!1), t();
  } finally {
    (Z = n), (Tu.transition = r);
  }
}
function gm() {
  return yt().memoizedState;
}
function t1(e, t, n) {
  var r = kn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), ym(e))) wm(t, n);
  else if (((n = Yh(e, t, n, r)), n !== null)) {
    var o = Ve();
    Ct(n, e, r, o), Sm(n, t, r);
  }
}
function n1(e, t, n) {
  var r = kn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ym(e)) wm(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var l = t.lastRenderedState,
          a = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Ot(a, l))) {
          var u = t.interleaved;
          u === null ? ((o.next = o), Pc(t)) : ((o.next = u.next), (u.next = o)), (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Yh(e, t, o, r)), n !== null && ((o = Ve()), Ct(n, e, r, o), Sm(n, t, r));
  }
}
function ym(e) {
  var t = e.alternate;
  return e === ce || (t !== null && t === ce);
}
function wm(e, t) {
  Ao = Ml = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Sm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), pc(e, n);
  }
}
var Dl = {
    readContext: gt,
    useCallback: ze,
    useContext: ze,
    useEffect: ze,
    useImperativeHandle: ze,
    useInsertionEffect: ze,
    useLayoutEffect: ze,
    useMemo: ze,
    useReducer: ze,
    useRef: ze,
    useState: ze,
    useDebugValue: ze,
    useDeferredValue: ze,
    useTransition: ze,
    useMutableSource: ze,
    useSyncExternalStore: ze,
    useId: ze,
    unstable_isNewReconciler: !1,
  },
  r1 = {
    readContext: gt,
    useCallback: function (e, t) {
      return (Lt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: gt,
    useEffect: xd,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), il(4194308, 4, dm.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return il(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return il(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Lt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Lt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = t1.bind(null, ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Lt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Sd,
    useDebugValue: Ic,
    useDeferredValue: function (e) {
      return (Lt().memoizedState = e);
    },
    useTransition: function () {
      var e = Sd(!1),
        t = e[0];
      return (e = e1.bind(null, e[1])), (Lt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ce,
        o = Lt();
      if (ae) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(O(349));
        Gn & 30 || om(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        xd(lm.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ri(9, im.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Lt(),
        t = Pe.identifierPrefix;
      if (ae) {
        var n = Xt,
          r = Yt;
        (n = (r & ~(1 << (32 - kt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = ti++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = qy++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  o1 = {
    readContext: gt,
    useCallback: hm,
    useContext: gt,
    useEffect: Dc,
    useImperativeHandle: pm,
    useInsertionEffect: cm,
    useLayoutEffect: fm,
    useMemo: mm,
    useReducer: bu,
    useRef: sm,
    useState: function () {
      return bu(ni);
    },
    useDebugValue: Ic,
    useDeferredValue: function (e) {
      var t = yt();
      return vm(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = bu(ni)[0],
        t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: nm,
    useSyncExternalStore: rm,
    useId: gm,
    unstable_isNewReconciler: !1,
  },
  i1 = {
    readContext: gt,
    useCallback: hm,
    useContext: gt,
    useEffect: Dc,
    useImperativeHandle: pm,
    useInsertionEffect: cm,
    useLayoutEffect: fm,
    useMemo: mm,
    useReducer: Ru,
    useRef: sm,
    useState: function () {
      return Ru(ni);
    },
    useDebugValue: Ic,
    useDeferredValue: function (e) {
      var t = yt();
      return Ee === null ? (t.memoizedState = e) : vm(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Ru(ni)[0],
        t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: nm,
    useSyncExternalStore: rm,
    useId: gm,
    unstable_isNewReconciler: !1,
  };
function Qr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += $g(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Au(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ps(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var l1 = typeof WeakMap == 'function' ? WeakMap : Map;
function xm(e, t, n) {
  (n = Jt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Nl || ((Nl = !0), (Ns = r)), Ps(e, t);
    }),
    n
  );
}
function Em(e, t, n) {
  (n = Jt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ps(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ps(e, t), typeof r != 'function' && (En === null ? (En = new Set([this])) : En.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' });
      }),
    n
  );
}
function Ed(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new l1();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = S1.bind(null, e, t, n)), t.then(e, e));
}
function kd(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Cd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Jt(-1, 1)), (t.tag = 2), xn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var a1 = an.ReactCurrentOwner,
  Ye = !1;
function He(e, t, n, r) {
  t.child = e === null ? em(t, null, n, r) : Vr(t, e.child, n, r);
}
function _d(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Dr(t, o),
    (r = $c(e, t, n, r, i, o)),
    (n = Mc()),
    e !== null && !Ye
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), on(e, t, o))
      : (ae && n && xc(t), (t.flags |= 1), He(e, t, r, o), t.child)
  );
}
function Od(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Hc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), km(e, t, i, r, o))
      : ((e = sl(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Yo), n(l, r) && e.ref === t.ref)) return on(e, t, o);
  }
  return (t.flags |= 1), (e = Cn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function km(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Yo(i, r) && e.ref === t.ref)
      if (((Ye = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Ye = !0);
      else return (t.lanes = e.lanes), on(e, t, o);
  }
  return Ts(e, t, n, r, o);
}
function Cm(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ne(Or, rt), (rt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          ne(Or, rt),
          (rt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ne(Or, rt),
        (rt |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), ne(Or, rt), (rt |= r);
  return He(e, t, o, n), t.child;
}
function _m(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Ts(e, t, n, r, o) {
  var i = Ze(n) ? Kn : We.current;
  return (
    (i = Wr(t, i)),
    Dr(t, o),
    (n = $c(e, t, n, r, i, o)),
    (r = Mc()),
    e !== null && !Ye
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), on(e, t, o))
      : (ae && r && xc(t), (t.flags |= 1), He(e, t, n, o), t.child)
  );
}
function Pd(e, t, n, r, o) {
  if (Ze(n)) {
    var i = !0;
    Pl(t);
  } else i = !1;
  if ((Dr(t, o), t.stateNode === null)) ll(e, t), Jh(t, n, r), Os(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var u = l.context,
      s = n.contextType;
    typeof s == 'object' && s !== null ? (s = gt(s)) : ((s = Ze(n) ? Kn : We.current), (s = Wr(t, s)));
    var d = n.getDerivedStateFromProps,
      h = typeof d == 'function' || typeof l.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' && typeof l.componentWillReceiveProps != 'function') ||
      ((a !== r || u !== s) && yd(t, l, r, s)),
      (dn = !1);
    var c = t.memoizedState;
    (l.state = c),
      Ll(t, r, l, o),
      (u = t.memoizedState),
      a !== r || c !== u || Xe.current || dn
        ? (typeof d == 'function' && (_s(t, n, d, r), (u = t.memoizedState)),
          (a = dn || gd(t, n, a, r, c, u, s))
            ? (h ||
                (typeof l.UNSAFE_componentWillMount != 'function' && typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' && l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = s),
          (r = a))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (l = t.stateNode),
      Xh(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : St(t.type, a)),
      (l.props = s),
      (h = t.pendingProps),
      (c = l.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null ? (u = gt(u)) : ((u = Ze(n) ? Kn : We.current), (u = Wr(t, u)));
    var g = n.getDerivedStateFromProps;
    (d = typeof g == 'function' || typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' && typeof l.componentWillReceiveProps != 'function') ||
      ((a !== h || c !== u) && yd(t, l, r, u)),
      (dn = !1),
      (c = t.memoizedState),
      (l.state = c),
      Ll(t, r, l, o);
    var y = t.memoizedState;
    a !== h || c !== y || Xe.current || dn
      ? (typeof g == 'function' && (_s(t, n, g, r), (y = t.memoizedState)),
        (s = dn || gd(t, n, s, r, c, y, u) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' && typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' && l.componentWillUpdate(r, y, u),
              typeof l.UNSAFE_componentWillUpdate == 'function' && l.UNSAFE_componentWillUpdate(r, y, u)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = u),
        (r = s))
      : (typeof l.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return bs(e, t, n, r, i, o);
}
function bs(e, t, n, r, o, i) {
  _m(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && dd(t, n, !1), on(e, t, i);
  (r = t.stateNode), (a1.current = t);
  var a = l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l ? ((t.child = Vr(t, e.child, null, i)), (t.child = Vr(t, null, a, i))) : He(e, t, a, i),
    (t.memoizedState = r.state),
    o && dd(t, n, !0),
    t.child
  );
}
function Om(e) {
  var t = e.stateNode;
  t.pendingContext ? fd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && fd(e, t.context, !1),
    bc(e, t.containerInfo);
}
function Td(e, t, n, r, o) {
  return Hr(), kc(o), (t.flags |= 256), He(e, t, n, r), t.child;
}
var Rs = { dehydrated: null, treeContext: null, retryLane: 0 };
function As(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Pm(e, t, n) {
  var r = t.pendingProps,
    o = ue.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(ue, o & 1),
    e === null)
  )
    return (
      ks(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = l)) : (i = da(l, r, 0, null)),
              (e = Hn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = As(n)),
              (t.memoizedState = Rs),
              e)
            : Nc(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null))) return u1(e, t, l, r, a, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = u), (t.deletions = null))
        : ((r = Cn(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Cn(a, i)) : ((i = Hn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l = l === null ? As(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Rs),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Cn(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Nc(e, t) {
  return (t = da({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Ui(e, t, n, r) {
  return (
    r !== null && kc(r),
    Vr(t, e.child, null, n),
    (e = Nc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function u1(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Au(Error(O(422)))), Ui(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = da({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = Hn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Vr(t, e.child, null, l),
        (t.child.memoizedState = As(l)),
        (t.memoizedState = Rs),
        i);
  if (!(t.mode & 1)) return Ui(e, t, l, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(O(419))), (r = Au(i, r, void 0)), Ui(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), Ye || a)) {
    if (((r = Pe), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), rn(e, o), Ct(r, e, o, -1));
    }
    return Wc(), (r = Au(Error(O(421)))), Ui(e, t, l, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = x1.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (it = Sn(o.nextSibling)),
      (lt = t),
      (ae = !0),
      (Et = null),
      e !== null && ((pt[ht++] = Yt), (pt[ht++] = Xt), (pt[ht++] = Qn), (Yt = e.id), (Xt = e.overflow), (Qn = t)),
      (t = Nc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Cs(e.return, t, n);
}
function Lu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Tm(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((He(e, t, r.children, n), (r = ue.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bd(e, n, t);
        else if (e.tag === 19) bd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ne(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && $l(e) === null && (o = n), (n = n.sibling);
        (n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          Lu(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && $l(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Lu(t, !0, n, null, i);
        break;
      case 'together':
        Lu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ll(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function on(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Yn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = Cn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function s1(e, t, n) {
  switch (t.tag) {
    case 3:
      Om(t), Hr();
      break;
    case 5:
      tm(t);
      break;
    case 1:
      Ze(t.type) && Pl(t);
      break;
    case 4:
      bc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ne(Rl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ne(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Pm(e, t, n)
          : (ne(ue, ue.current & 1), (e = on(e, t, n)), e !== null ? e.sibling : null);
      ne(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Tm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ne(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Cm(e, t, n);
  }
  return on(e, t, n);
}
var bm, Ls, Rm, Am;
bm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ls = function () {};
Rm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Un(jt.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = es(e, o)), (r = es(e, r)), (i = []);
        break;
      case 'select':
        (o = fe({}, o, { value: void 0 })), (r = fe({}, r, { value: void 0 })), (i = []);
        break;
      case 'textarea':
        (o = rs(e, o)), (r = rs(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = _l);
    }
    is(n, r);
    var l;
    n = null;
    for (s in o)
      if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && o[s] != null)
        if (s === 'style') {
          var a = o[s];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            (Bo.hasOwnProperty(s) ? i || (i = []) : (i = i || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (((a = o != null ? o[s] : void 0), r.hasOwnProperty(s) && u !== a && (u != null || a != null)))
        if (s === 'style')
          if (a) {
            for (l in a) !a.hasOwnProperty(l) || (u && u.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ''));
            for (l in u) u.hasOwnProperty(l) && a[l] !== u[l] && (n || (n = {}), (n[l] = u[l]));
          } else n || (i || (i = []), i.push(s, n)), (n = u);
        else
          s === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(s, u))
            : s === 'children'
            ? (typeof u != 'string' && typeof u != 'number') || (i = i || []).push(s, '' + u)
            : s !== 'suppressContentEditableWarning' &&
              s !== 'suppressHydrationWarning' &&
              (Bo.hasOwnProperty(s)
                ? (u != null && s === 'onScroll' && re('scroll', e), i || a === u || (i = []))
                : (i = i || []).push(s, u));
    }
    n && (i = i || []).push('style', n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Am = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vo(e, t) {
  if (!ae)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function Fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function c1(e, t, n) {
  var r = t.pendingProps;
  switch ((Ec(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Fe(t), null;
    case 1:
      return Ze(t.type) && Ol(), Fe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Kr(),
        oe(Xe),
        oe(We),
        Ac(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (zi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Et !== null && (Fs(Et), (Et = null)))),
        Ls(e, t),
        Fe(t),
        null
      );
    case 5:
      Rc(t);
      var o = Un(ei.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Rm(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Fe(t), null;
        }
        if (((e = Un(jt.current)), zi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Dt] = t), (r[Jo] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              re('cancel', r), re('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              re('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < _o.length; o++) re(_o[o], r);
              break;
            case 'source':
              re('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              re('error', r), re('load', r);
              break;
            case 'details':
              re('toggle', r);
              break;
            case 'input':
              jf(r, i), re('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }), re('invalid', r);
              break;
            case 'textarea':
              Ff(r, i), re('invalid', r);
          }
          is(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 && ji(r.textContent, a, e), (o = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 && ji(r.textContent, a, e), (o = ['children', '' + a]))
                : Bo.hasOwnProperty(l) && a != null && l === 'onScroll' && re('scroll', r);
            }
          switch (n) {
            case 'input':
              Ri(r), zf(r, i, !0);
              break;
            case 'textarea':
              Ri(r), Uf(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = _l);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = oh(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' && ((l = e), r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Dt] = t),
            (e[Jo] = r),
            bm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = ls(n, r)), n)) {
              case 'dialog':
                re('cancel', e), re('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                re('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < _o.length; o++) re(_o[o], e);
                o = r;
                break;
              case 'source':
                re('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                re('error', e), re('load', e), (o = r);
                break;
              case 'details':
                re('toggle', e), (o = r);
                break;
              case 'input':
                jf(e, r), (o = es(e, r)), re('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }), (o = fe({}, r, { value: void 0 })), re('invalid', e);
                break;
              case 'textarea':
                Ff(e, r), (o = rs(e, r)), re('invalid', e);
                break;
              default:
                o = r;
            }
            is(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === 'style'
                  ? ah(e, u)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((u = u ? u.__html : void 0), u != null && ih(e, u))
                  : i === 'children'
                  ? typeof u == 'string'
                    ? (n !== 'textarea' || u !== '') && Wo(e, u)
                    : typeof u == 'number' && Wo(e, '' + u)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Bo.hasOwnProperty(i)
                      ? u != null && i === 'onScroll' && re('scroll', e)
                      : u != null && ac(e, i, u, l));
              }
            switch (n) {
              case 'input':
                Ri(e), zf(e, r, !1);
                break;
              case 'textarea':
                Ri(e), Uf(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + On(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Ar(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && Ar(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = _l);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Fe(t), null;
    case 6:
      if (e && t.stateNode != null) Am(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(O(166));
        if (((n = Un(ei.current)), Un(jt.current), zi(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[Dt] = t), (i = r.nodeValue !== n) && ((e = lt), e !== null))
          )
            switch (e.tag) {
              case 3:
                ji(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ji(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Dt] = t), (t.stateNode = r);
      }
      return Fe(t), null;
    case 13:
      if (
        (oe(ue), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ae && it !== null && t.mode & 1 && !(t.flags & 128)) Gh(), Hr(), (t.flags |= 98560), (i = !1);
        else if (((i = zi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(O(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(O(317));
            i[Dt] = t;
          } else Hr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Fe(t), (i = !1);
        } else Et !== null && (Fs(Et), (Et = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || ue.current & 1 ? ke === 0 && (ke = 3) : Wc())),
          t.updateQueue !== null && (t.flags |= 4),
          Fe(t),
          null);
    case 4:
      return Kr(), Ls(e, t), e === null && Xo(t.stateNode.containerInfo), Fe(t), null;
    case 10:
      return Oc(t.type._context), Fe(t), null;
    case 17:
      return Ze(t.type) && Ol(), Fe(t), null;
    case 19:
      if ((oe(ue), (i = t.memoizedState), i === null)) return Fe(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) vo(i, !1);
        else {
          if (ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = $l(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    vo(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return ne(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && ge() > Gr && ((t.flags |= 128), (r = !0), vo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = $l(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              vo(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !ae)
            )
              return Fe(t), null;
          } else
            2 * ge() - i.renderingStartTime > Gr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), vo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last), n !== null ? (n.sibling = l) : (t.child = l), (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ge()),
          (t.sibling = null),
          (n = ue.current),
          ne(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (Fe(t), null);
    case 22:
    case 23:
      return (
        Bc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? rt & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function f1(e, t) {
  switch ((Ec(t), t.tag)) {
    case 1:
      return Ze(t.type) && Ol(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        Kr(), oe(Xe), oe(We), Ac(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Rc(t), null;
    case 13:
      if ((oe(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(O(340));
        Hr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return oe(ue), null;
    case 4:
      return Kr(), null;
    case 10:
      return Oc(t.type._context), null;
    case 22:
    case 23:
      return Bc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Bi = !1,
  Be = !1,
  d1 = typeof WeakSet == 'function' ? WeakSet : Set,
  L = null;
function _r(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function $s(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var Rd = !1;
function p1(e, t) {
  if (((vs = El), (e = Dh()), Sc(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            u = -1,
            s = 0,
            d = 0,
            h = e,
            c = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (o !== 0 && h.nodeType !== 3) || (a = l + o),
                h !== i || (r !== 0 && h.nodeType !== 3) || (u = l + r),
                h.nodeType === 3 && (l += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (c = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if ((c === n && ++s === o && (a = l), c === i && ++d === r && (u = l), (g = h.nextSibling) !== null))
                break;
              (h = c), (c = h.parentNode);
            }
            h = g;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (gs = { focusedElem: e, selectionRange: n }, El = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var m = y.memoizedProps,
                    S = y.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? m : St(t.type, m), S);
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (w) {
          me(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (y = Rd), (Rd = !1), y;
}
function Lo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && $s(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ca(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ms(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Lm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Lm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[Dt], delete t[Jo], delete t[Ss], delete t[Yy], delete t[Xy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function $m(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ad(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || $m(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ds(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = _l));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ds(e, t, n), e = e.sibling; e !== null; ) Ds(e, t, n), (e = e.sibling);
}
function Is(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Is(e, t, n), e = e.sibling; e !== null; ) Is(e, t, n), (e = e.sibling);
}
var Ae = null,
  xt = !1;
function cn(e, t, n) {
  for (n = n.child; n !== null; ) Mm(e, t, n), (n = n.sibling);
}
function Mm(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == 'function')
    try {
      Nt.onCommitFiberUnmount(na, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Be || _r(n, t);
    case 6:
      var r = Ae,
        o = xt;
      (Ae = null),
        cn(e, t, n),
        (Ae = r),
        (xt = o),
        Ae !== null &&
          (xt
            ? ((e = Ae), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null &&
        (xt
          ? ((e = Ae), (n = n.stateNode), e.nodeType === 8 ? _u(e.parentNode, n) : e.nodeType === 1 && _u(e, n), Qo(e))
          : _u(Ae, n.stateNode));
      break;
    case 4:
      (r = Ae), (o = xt), (Ae = n.stateNode.containerInfo), (xt = !0), cn(e, t, n), (Ae = r), (xt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Be && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag), l !== void 0 && (i & 2 || i & 4) && $s(n, t, l), (o = o.next);
        } while (o !== r);
      }
      cn(e, t, n);
      break;
    case 1:
      if (!Be && (_r(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          me(n, t, a);
        }
      cn(e, t, n);
      break;
    case 21:
      cn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((Be = (r = Be) || n.memoizedState !== null), cn(e, t, n), (Be = r)) : cn(e, t, n);
      break;
    default:
      cn(e, t, n);
  }
}
function Ld(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new d1()),
      t.forEach(function (r) {
        var o = E1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function wt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ae = a.stateNode), (xt = !1);
              break e;
            case 3:
              (Ae = a.stateNode.containerInfo), (xt = !0);
              break e;
            case 4:
              (Ae = a.stateNode.containerInfo), (xt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ae === null) throw Error(O(160));
        Mm(i, l, o), (Ae = null), (xt = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (s) {
        me(o, t, s);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Dm(t, e), (t = t.sibling);
}
function Dm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((wt(t, e), At(e), r & 4)) {
        try {
          Lo(3, e, e.return), ca(3, e);
        } catch (m) {
          me(e, e.return, m);
        }
        try {
          Lo(5, e, e.return);
        } catch (m) {
          me(e, e.return, m);
        }
      }
      break;
    case 1:
      wt(t, e), At(e), r & 512 && n !== null && _r(n, n.return);
      break;
    case 5:
      if ((wt(t, e), At(e), r & 512 && n !== null && _r(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          Wo(o, '');
        } catch (m) {
          me(e, e.return, m);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === 'input' && i.type === 'radio' && i.name != null && nh(o, i), ls(a, l);
            var s = ls(a, i);
            for (l = 0; l < u.length; l += 2) {
              var d = u[l],
                h = u[l + 1];
              d === 'style'
                ? ah(o, h)
                : d === 'dangerouslySetInnerHTML'
                ? ih(o, h)
                : d === 'children'
                ? Wo(o, h)
                : ac(o, d, h, s);
            }
            switch (a) {
              case 'input':
                ts(o, i);
                break;
              case 'textarea':
                rh(o, i);
                break;
              case 'select':
                var c = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Ar(o, !!i.multiple, g, !1)
                  : c !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Ar(o, !!i.multiple, i.defaultValue, !0)
                      : Ar(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[Jo] = i;
          } catch (m) {
            me(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((wt(t, e), At(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (m) {
          me(e, e.return, m);
        }
      }
      break;
    case 3:
      if ((wt(t, e), At(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Qo(t.containerInfo);
        } catch (m) {
          me(e, e.return, m);
        }
      break;
    case 4:
      wt(t, e), At(e);
      break;
    case 13:
      wt(t, e),
        At(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Fc = ge())),
        r & 4 && Ld(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Be = (s = Be) || d), wt(t, e), (Be = s)) : wt(t, e),
        At(e),
        r & 8192)
      ) {
        if (((s = e.memoizedState !== null), (e.stateNode.isHidden = s) && !d && e.mode & 1))
          for (L = e, d = e.child; d !== null; ) {
            for (h = L = d; L !== null; ) {
              switch (((c = L), (g = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Lo(4, c, c.return);
                  break;
                case 1:
                  _r(c, c.return);
                  var y = c.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = c), (n = c.return);
                    try {
                      (t = r), (y.props = t.memoizedProps), (y.state = t.memoizedState), y.componentWillUnmount();
                    } catch (m) {
                      me(r, n, m);
                    }
                  }
                  break;
                case 5:
                  _r(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    Md(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = c), (L = g)) : Md(h);
            }
            d = d.sibling;
          }
        e: for (d = null, h = e; ; ) {
          if (h.tag === 5) {
            if (d === null) {
              d = h;
              try {
                (o = h.stateNode),
                  s
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((a = h.stateNode),
                      (u = h.memoizedProps.style),
                      (l = u != null && u.hasOwnProperty('display') ? u.display : null),
                      (a.style.display = lh('display', l)));
              } catch (m) {
                me(e, e.return, m);
              }
            }
          } else if (h.tag === 6) {
            if (d === null)
              try {
                h.stateNode.nodeValue = s ? '' : h.memoizedProps;
              } catch (m) {
                me(e, e.return, m);
              }
          } else if (((h.tag !== 22 && h.tag !== 23) || h.memoizedState === null || h === e) && h.child !== null) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            d === h && (d = null), (h = h.return);
          }
          d === h && (d = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      wt(t, e), At(e), r & 4 && Ld(e);
      break;
    case 21:
      break;
    default:
      wt(t, e), At(e);
  }
}
function At(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($m(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Wo(o, ''), (r.flags &= -33));
          var i = Ad(e);
          Is(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = Ad(e);
          Ds(e, a, l);
          break;
        default:
          throw Error(O(161));
      }
    } catch (u) {
      me(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function h1(e, t, n) {
  (L = e), Im(e);
}
function Im(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Bi;
      if (!l) {
        var a = o.alternate,
          u = (a !== null && a.memoizedState !== null) || Be;
        a = Bi;
        var s = Be;
        if (((Bi = l), (Be = u) && !s))
          for (L = o; L !== null; )
            (l = L),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null ? Dd(o) : u !== null ? ((u.return = l), (L = u)) : Dd(o);
        for (; i !== null; ) (L = i), Im(i), (i = i.sibling);
        (L = o), (Bi = a), (Be = s);
      }
      $d(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (L = i)) : $d(e);
  }
}
function $d(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Be || ca(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Be)
                if (n === null) r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : St(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && vd(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                vd(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var d = s.memoizedState;
                  if (d !== null) {
                    var h = d.dehydrated;
                    h !== null && Qo(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        Be || (t.flags & 512 && Ms(t));
      } catch (c) {
        me(t, t.return, c);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Md(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Dd(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ca(4, t);
          } catch (u) {
            me(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              me(t, o, u);
            }
          }
          var i = t.return;
          try {
            Ms(t);
          } catch (u) {
            me(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ms(t);
          } catch (u) {
            me(t, l, u);
          }
      }
    } catch (u) {
      me(t, t.return, u);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (L = a);
      break;
    }
    L = t.return;
  }
}
var m1 = Math.ceil,
  Il = an.ReactCurrentDispatcher,
  jc = an.ReactCurrentOwner,
  vt = an.ReactCurrentBatchConfig,
  K = 0,
  Pe = null,
  xe = null,
  De = 0,
  rt = 0,
  Or = Rn(0),
  ke = 0,
  oi = null,
  Yn = 0,
  fa = 0,
  zc = 0,
  $o = null,
  Ge = null,
  Fc = 0,
  Gr = 1 / 0,
  Qt = null,
  Nl = !1,
  Ns = null,
  En = null,
  Wi = !1,
  vn = null,
  jl = 0,
  Mo = 0,
  js = null,
  al = -1,
  ul = 0;
function Ve() {
  return K & 6 ? ge() : al !== -1 ? al : (al = ge());
}
function kn(e) {
  return e.mode & 1
    ? K & 2 && De !== 0
      ? De & -De
      : Jy.transition !== null
      ? (ul === 0 && (ul = wh()), ul)
      : ((e = Z), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Oh(e.type))), e)
    : 1;
}
function Ct(e, t, n, r) {
  if (50 < Mo) throw ((Mo = 0), (js = null), Error(O(185)));
  pi(e, n, r),
    (!(K & 2) || e !== Pe) &&
      (e === Pe && (!(K & 2) && (fa |= n), ke === 4 && hn(e, De)),
      Je(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((Gr = ge() + 500), aa && An()));
}
function Je(e, t) {
  var n = e.callbackNode;
  Jg(e, t);
  var r = xl(e, e === Pe ? De : 0);
  if (r === 0) n !== null && Hf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Hf(n), t === 1))
      e.tag === 0 ? Zy(Id.bind(null, e)) : Vh(Id.bind(null, e)),
        Qy(function () {
          !(K & 6) && An();
        }),
        (n = null);
    else {
      switch (Sh(r)) {
        case 1:
          n = dc;
          break;
        case 4:
          n = gh;
          break;
        case 16:
          n = Sl;
          break;
        case 536870912:
          n = yh;
          break;
        default:
          n = Sl;
      }
      n = Hm(n, Nm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Nm(e, t) {
  if (((al = -1), (ul = 0), K & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (Ir() && e.callbackNode !== n) return null;
  var r = xl(e, e === Pe ? De : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zl(e, r);
  else {
    t = r;
    var o = K;
    K |= 2;
    var i = zm();
    (Pe !== e || De !== t) && ((Qt = null), (Gr = ge() + 500), Wn(e, t));
    do
      try {
        y1();
        break;
      } catch (a) {
        jm(e, a);
      }
    while (1);
    _c(), (Il.current = i), (K = o), xe !== null ? (t = 0) : ((Pe = null), (De = 0), (t = ke));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = fs(e)), o !== 0 && ((r = o), (t = zs(e, o)))), t === 1))
      throw ((n = oi), Wn(e, 0), hn(e, r), Je(e, ge()), n);
    if (t === 6) hn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !v1(o) &&
          ((t = zl(e, r)), t === 2 && ((i = fs(e)), i !== 0 && ((r = i), (t = zs(e, i)))), t === 1))
      )
        throw ((n = oi), Wn(e, 0), hn(e, r), Je(e, ge()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          In(e, Ge, Qt);
          break;
        case 3:
          if ((hn(e, r), (r & 130023424) === r && ((t = Fc + 500 - ge()), 10 < t))) {
            if (xl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ve(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ws(In.bind(null, e, Ge, Qt), t);
            break;
          }
          In(e, Ge, Qt);
          break;
        case 4:
          if ((hn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - kt(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ge() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * m1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ws(In.bind(null, e, Ge, Qt), r);
            break;
          }
          In(e, Ge, Qt);
          break;
        case 5:
          In(e, Ge, Qt);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Je(e, ge()), e.callbackNode === n ? Nm.bind(null, e) : null;
}
function zs(e, t) {
  var n = $o;
  return (
    e.current.memoizedState.isDehydrated && (Wn(e, t).flags |= 256),
    (e = zl(e, t)),
    e !== 2 && ((t = Ge), (Ge = n), t !== null && Fs(t)),
    e
  );
}
function Fs(e) {
  Ge === null ? (Ge = e) : Ge.push.apply(Ge, e);
}
function v1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Ot(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function hn(e, t) {
  for (t &= ~zc, t &= ~fa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - kt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Id(e) {
  if (K & 6) throw Error(O(327));
  Ir();
  var t = xl(e, 0);
  if (!(t & 1)) return Je(e, ge()), null;
  var n = zl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fs(e);
    r !== 0 && ((t = r), (n = zs(e, r)));
  }
  if (n === 1) throw ((n = oi), Wn(e, 0), hn(e, t), Je(e, ge()), n);
  if (n === 6) throw Error(O(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), In(e, Ge, Qt), Je(e, ge()), null;
}
function Uc(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((Gr = ge() + 500), aa && An());
  }
}
function Xn(e) {
  vn !== null && vn.tag === 0 && !(K & 6) && Ir();
  var t = K;
  K |= 1;
  var n = vt.transition,
    r = Z;
  try {
    if (((vt.transition = null), (Z = 1), e)) return e();
  } finally {
    (Z = r), (vt.transition = n), (K = t), !(K & 6) && An();
  }
}
function Bc() {
  (rt = Or.current), oe(Or);
}
function Wn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ky(n)), xe !== null))
    for (n = xe.return; n !== null; ) {
      var r = n;
      switch ((Ec(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ol();
          break;
        case 3:
          Kr(), oe(Xe), oe(We), Ac();
          break;
        case 5:
          Rc(r);
          break;
        case 4:
          Kr();
          break;
        case 13:
          oe(ue);
          break;
        case 19:
          oe(ue);
          break;
        case 10:
          Oc(r.type._context);
          break;
        case 22:
        case 23:
          Bc();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (xe = e = Cn(e.current, null)),
    (De = rt = t),
    (ke = 0),
    (oi = null),
    (zc = fa = Yn = 0),
    (Ge = $o = null),
    Fn !== null)
  ) {
    for (t = 0; t < Fn.length; t++)
      if (((n = Fn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    Fn = null;
  }
  return e;
}
function jm(e, t) {
  do {
    var n = xe;
    try {
      if ((_c(), (ol.current = Dl), Ml)) {
        for (var r = ce.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ml = !1;
      }
      if (
        ((Gn = 0), (Oe = Ee = ce = null), (Ao = !1), (ti = 0), (jc.current = null), n === null || n.return === null)
      ) {
        (ke = 1), (oi = t), (xe = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          a = n,
          u = t;
        if (((t = De), (a.flags |= 32768), u !== null && typeof u == 'object' && typeof u.then == 'function')) {
          var s = u,
            d = a,
            h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var c = d.alternate;
            c
              ? ((d.updateQueue = c.updateQueue), (d.memoizedState = c.memoizedState), (d.lanes = c.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = kd(l);
          if (g !== null) {
            (g.flags &= -257), Cd(g, l, a, i, t), g.mode & 1 && Ed(i, s, t), (t = g), (u = s);
            var y = t.updateQueue;
            if (y === null) {
              var m = new Set();
              m.add(u), (t.updateQueue = m);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ed(i, s, t), Wc();
              break e;
            }
            u = Error(O(426));
          }
        } else if (ae && a.mode & 1) {
          var S = kd(l);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Cd(S, l, a, i, t), kc(Qr(u, a));
            break e;
          }
        }
        (i = u = Qr(u, a)), ke !== 4 && (ke = 2), $o === null ? ($o = [i]) : $o.push(i), (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = xm(i, u, t);
              md(i, p);
              break e;
            case 1:
              a = u;
              var f = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (v !== null && typeof v.componentDidCatch == 'function' && (En === null || !En.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = Em(i, a, t);
                md(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Um(n);
    } catch (E) {
      (t = E), xe === n && n !== null && (xe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function zm() {
  var e = Il.current;
  return (Il.current = Dl), e === null ? Dl : e;
}
function Wc() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4), Pe === null || (!(Yn & 268435455) && !(fa & 268435455)) || hn(Pe, De);
}
function zl(e, t) {
  var n = K;
  K |= 2;
  var r = zm();
  (Pe !== e || De !== t) && ((Qt = null), Wn(e, t));
  do
    try {
      g1();
      break;
    } catch (o) {
      jm(e, o);
    }
  while (1);
  if ((_c(), (K = n), (Il.current = r), xe !== null)) throw Error(O(261));
  return (Pe = null), (De = 0), ke;
}
function g1() {
  for (; xe !== null; ) Fm(xe);
}
function y1() {
  for (; xe !== null && !Wg(); ) Fm(xe);
}
function Fm(e) {
  var t = Wm(e.alternate, e, rt);
  (e.memoizedProps = e.pendingProps), t === null ? Um(e) : (xe = t), (jc.current = null);
}
function Um(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = f1(n, t)), n !== null)) {
        (n.flags &= 32767), (xe = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ke = 6), (xe = null);
        return;
      }
    } else if (((n = c1(n, t, rt)), n !== null)) {
      xe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      xe = t;
      return;
    }
    xe = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function In(e, t, n) {
  var r = Z,
    o = vt.transition;
  try {
    (vt.transition = null), (Z = 1), w1(e, t, n, r);
  } finally {
    (vt.transition = o), (Z = r);
  }
  return null;
}
function w1(e, t, n, r) {
  do Ir();
  while (vn !== null);
  if (K & 6) throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (qg(e, i),
    e === Pe && ((xe = Pe = null), (De = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Wi ||
      ((Wi = !0),
      Hm(Sl, function () {
        return Ir(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = vt.transition), (vt.transition = null);
    var l = Z;
    Z = 1;
    var a = K;
    (K |= 4),
      (jc.current = null),
      p1(e, n),
      Dm(n, e),
      zy(gs),
      (El = !!vs),
      (gs = vs = null),
      (e.current = n),
      h1(n),
      Hg(),
      (K = a),
      (Z = l),
      (vt.transition = i);
  } else e.current = n;
  if (
    (Wi && ((Wi = !1), (vn = e), (jl = o)),
    (i = e.pendingLanes),
    i === 0 && (En = null),
    Qg(n.stateNode),
    Je(e, ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Nl) throw ((Nl = !1), (e = Ns), (Ns = null), e);
  return (
    jl & 1 && e.tag !== 0 && Ir(),
    (i = e.pendingLanes),
    i & 1 ? (e === js ? Mo++ : ((Mo = 0), (js = e))) : (Mo = 0),
    An(),
    null
  );
}
function Ir() {
  if (vn !== null) {
    var e = Sh(jl),
      t = vt.transition,
      n = Z;
    try {
      if (((vt.transition = null), (Z = 16 > e ? 16 : e), vn === null)) var r = !1;
      else {
        if (((e = vn), (vn = null), (jl = 0), K & 6)) throw Error(O(331));
        var o = K;
        for (K |= 4, L = e.current; L !== null; ) {
          var i = L,
            l = i.child;
          if (L.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (L = s; L !== null; ) {
                  var d = L;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lo(8, d, i);
                  }
                  var h = d.child;
                  if (h !== null) (h.return = d), (L = h);
                  else
                    for (; L !== null; ) {
                      d = L;
                      var c = d.sibling,
                        g = d.return;
                      if ((Lm(d), d === s)) {
                        L = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = g), (L = c);
                        break;
                      }
                      L = g;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var m = y.child;
                if (m !== null) {
                  y.child = null;
                  do {
                    var S = m.sibling;
                    (m.sibling = null), (m = S);
                  } while (m !== null);
                }
              }
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (L = l);
          else
            e: for (; L !== null; ) {
              if (((i = L), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Lo(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (L = p);
                break e;
              }
              L = i.return;
            }
        }
        var f = e.current;
        for (L = f; L !== null; ) {
          l = L;
          var v = l.child;
          if (l.subtreeFlags & 2064 && v !== null) (v.return = l), (L = v);
          else
            e: for (l = f; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ca(9, a);
                  }
                } catch (E) {
                  me(a, a.return, E);
                }
              if (a === l) {
                L = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (L = w);
                break e;
              }
              L = a.return;
            }
        }
        if (((K = o), An(), Nt && typeof Nt.onPostCommitFiberRoot == 'function'))
          try {
            Nt.onPostCommitFiberRoot(na, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Z = n), (vt.transition = t);
    }
  }
  return !1;
}
function Nd(e, t, n) {
  (t = Qr(n, t)), (t = xm(e, t, 1)), (e = xn(e, t, 1)), (t = Ve()), e !== null && (pi(e, 1, t), Je(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) Nd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Nd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (En === null || !En.has(r)))
        ) {
          (e = Qr(n, e)), (e = Em(t, e, 1)), (t = xn(t, e, 1)), (e = Ve()), t !== null && (pi(t, 1, e), Je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function S1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (De & n) === n &&
      (ke === 4 || (ke === 3 && (De & 130023424) === De && 500 > ge() - Fc) ? Wn(e, 0) : (zc |= n)),
    Je(e, t);
}
function Bm(e, t) {
  t === 0 && (e.mode & 1 ? ((t = $i), ($i <<= 1), !($i & 130023424) && ($i = 4194304)) : (t = 1));
  var n = Ve();
  (e = rn(e, t)), e !== null && (pi(e, t, n), Je(e, n));
}
function x1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Bm(e, n);
}
function E1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), Bm(e, n);
}
var Wm;
Wm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Xe.current) Ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ye = !1), s1(e, t, n);
      Ye = !!(e.flags & 131072);
    }
  else (Ye = !1), ae && t.flags & 1048576 && Kh(t, bl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ll(e, t), (e = t.pendingProps);
      var o = Wr(t, We.current);
      Dr(t, n), (o = $c(null, t, r, e, o, n));
      var i = Mc();
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ze(r) ? ((i = !0), Pl(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            Tc(t),
            (o.updater = ua),
            (t.stateNode = o),
            (o._reactInternals = t),
            Os(t, r, e, n),
            (t = bs(null, t, r, !0, i, n)))
          : ((t.tag = 0), ae && i && xc(t), He(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ll(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = C1(r)),
          (e = St(r, e)),
          o)
        ) {
          case 0:
            t = Ts(null, t, r, e, n);
            break e;
          case 1:
            t = Pd(null, t, r, e, n);
            break e;
          case 11:
            t = _d(null, t, r, e, n);
            break e;
          case 14:
            t = Od(null, t, r, St(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ''));
      }
      return t;
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : St(r, o)), Ts(e, t, r, o, n);
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : St(r, o)), Pd(e, t, r, o, n);
    case 3:
      e: {
        if ((Om(t), e === null)) throw Error(O(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), Xh(e, t), Ll(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Qr(Error(O(423)), t)), (t = Td(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Qr(Error(O(424)), t)), (t = Td(e, t, r, n, o));
            break e;
          } else
            for (
              it = Sn(t.stateNode.containerInfo.firstChild),
                lt = t,
                ae = !0,
                Et = null,
                n = em(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Hr(), r === o)) {
            t = on(e, t, n);
            break e;
          }
          He(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        tm(t),
        e === null && ks(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        ys(r, o) ? (l = null) : i !== null && ys(r, i) && (t.flags |= 32),
        _m(e, t),
        He(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && ks(t), null;
    case 13:
      return Pm(e, t, n);
    case 4:
      return (
        bc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vr(t, null, r, n)) : He(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : St(r, o)), _d(e, t, r, o, n);
    case 7:
      return He(e, t, t.pendingProps, n), t.child;
    case 8:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          ne(Rl, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Ot(i.value, l)) {
            if (i.children === o.children && !Xe.current) {
              t = on(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Jt(-1, n & -n)), (u.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var d = s.pending;
                        d === null ? (u.next = u) : ((u.next = d.next), (d.next = u)), (s.pending = u);
                      }
                    }
                    (i.lanes |= n), (u = i.alternate), u !== null && (u.lanes |= n), Cs(i.return, n, t), (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(O(341));
                (l.lanes |= n), (a = l.alternate), a !== null && (a.lanes |= n), Cs(l, n, t), (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        He(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Dr(t, n),
        (o = gt(o)),
        (r = r(o)),
        (t.flags |= 1),
        He(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (o = St(r, t.pendingProps)), (o = St(r.type, o)), Od(e, t, r, o, n);
    case 15:
      return km(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        ll(e, t),
        (t.tag = 1),
        Ze(r) ? ((e = !0), Pl(t)) : (e = !1),
        Dr(t, n),
        Jh(t, r, o),
        Os(t, r, o, n),
        bs(null, t, r, !0, e, n)
      );
    case 19:
      return Tm(e, t, n);
    case 22:
      return Cm(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Hm(e, t) {
  return vh(e, t);
}
function k1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function mt(e, t, n, r) {
  return new k1(e, t, n, r);
}
function Hc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function C1(e) {
  if (typeof e == 'function') return Hc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === sc)) return 11;
    if (e === cc) return 14;
  }
  return 2;
}
function Cn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = mt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function sl(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == 'function')) Hc(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case vr:
        return Hn(n.children, o, i, t);
      case uc:
        (l = 8), (o |= 8);
        break;
      case Xu:
        return (e = mt(12, n, t, o | 2)), (e.elementType = Xu), (e.lanes = i), e;
      case Zu:
        return (e = mt(13, n, t, o)), (e.elementType = Zu), (e.lanes = i), e;
      case Ju:
        return (e = mt(19, n, t, o)), (e.elementType = Ju), (e.lanes = i), e;
      case qp:
        return da(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Zp:
              l = 10;
              break e;
            case Jp:
              l = 9;
              break e;
            case sc:
              l = 11;
              break e;
            case cc:
              l = 14;
              break e;
            case fn:
              (l = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ''));
    }
  return (t = mt(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Hn(e, t, n, r) {
  return (e = mt(7, e, r, t)), (e.lanes = n), e;
}
function da(e, t, n, r) {
  return (e = mt(22, e, r, t)), (e.elementType = qp), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function $u(e, t, n) {
  return (e = mt(6, e, null, t)), (e.lanes = n), e;
}
function Mu(e, t, n) {
  return (
    (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function _1(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = hu(0)),
    (this.expirationTimes = hu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = hu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Vc(e, t, n, r, o, i, l, a, u) {
  return (
    (e = new _1(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = mt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Tc(i),
    e
  );
}
function O1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: mr, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function Vm(e) {
  if (!e) return Pn;
  e = e._reactInternals;
  e: {
    if (er(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ze(n)) return Hh(e, n, t);
  }
  return t;
}
function Km(e, t, n, r, o, i, l, a, u) {
  return (
    (e = Vc(n, r, !0, e, o, i, l, a, u)),
    (e.context = Vm(null)),
    (n = e.current),
    (r = Ve()),
    (o = kn(n)),
    (i = Jt(r, o)),
    (i.callback = t ?? null),
    xn(n, i, o),
    (e.current.lanes = o),
    pi(e, o, r),
    Je(e, r),
    e
  );
}
function pa(e, t, n, r) {
  var o = t.current,
    i = Ve(),
    l = kn(o);
  return (
    (n = Vm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Jt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = xn(o, t, l)),
    e !== null && (Ct(e, o, l, i), rl(e, o, l)),
    l
  );
}
function Fl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function jd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Kc(e, t) {
  jd(e, t), (e = e.alternate) && jd(e, t);
}
function P1() {
  return null;
}
var Qm =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Qc(e) {
  this._internalRoot = e;
}
ha.prototype.render = Qc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  pa(e, t, null, null);
};
ha.prototype.unmount = Qc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Xn(function () {
      pa(null, e, null, null);
    }),
      (t[nn] = null);
  }
};
function ha(e) {
  this._internalRoot = e;
}
ha.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = kh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++);
    pn.splice(n, 0, e), n === 0 && _h(e);
  }
};
function Gc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ma(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function zd() {}
function T1(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var s = Fl(l);
        i.call(s);
      };
    }
    var l = Km(t, r, e, 0, null, !1, !1, '', zd);
    return (e._reactRootContainer = l), (e[nn] = l.current), Xo(e.nodeType === 8 ? e.parentNode : e), Xn(), l;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var s = Fl(u);
      a.call(s);
    };
  }
  var u = Vc(e, 0, !1, null, null, !1, !1, '', zd);
  return (
    (e._reactRootContainer = u),
    (e[nn] = u.current),
    Xo(e.nodeType === 8 ? e.parentNode : e),
    Xn(function () {
      pa(t, u, n, r);
    }),
    u
  );
}
function va(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == 'function') {
      var a = o;
      o = function () {
        var u = Fl(l);
        a.call(u);
      };
    }
    pa(t, l, e, o);
  } else l = T1(n, t, e, o, r);
  return Fl(l);
}
xh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Co(t.pendingLanes);
        n !== 0 && (pc(t, n | 1), Je(t, ge()), !(K & 6) && ((Gr = ge() + 500), An()));
      }
      break;
    case 13:
      Xn(function () {
        var r = rn(e, 1);
        if (r !== null) {
          var o = Ve();
          Ct(r, e, 1, o);
        }
      }),
        Kc(e, 1);
  }
};
hc = function (e) {
  if (e.tag === 13) {
    var t = rn(e, 134217728);
    if (t !== null) {
      var n = Ve();
      Ct(t, e, 134217728, n);
    }
    Kc(e, 134217728);
  }
};
Eh = function (e) {
  if (e.tag === 13) {
    var t = kn(e),
      n = rn(e, t);
    if (n !== null) {
      var r = Ve();
      Ct(n, e, t, r);
    }
    Kc(e, t);
  }
};
kh = function () {
  return Z;
};
Ch = function (e, t) {
  var n = Z;
  try {
    return (Z = e), t();
  } finally {
    Z = n;
  }
};
us = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ts(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = la(r);
            if (!o) throw Error(O(90));
            th(r), ts(r, o);
          }
        }
      }
      break;
    case 'textarea':
      rh(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Ar(e, !!n.multiple, t, !1);
  }
};
ch = Uc;
fh = Xn;
var b1 = { usingClientEntryPoint: !1, Events: [mi, Sr, la, uh, sh, Uc] },
  go = { findFiberByHostInstance: zn, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
  R1 = {
    bundleType: go.bundleType,
    version: go.version,
    rendererPackageName: go.rendererPackageName,
    rendererConfig: go.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: an.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = hh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: go.findFiberByHostInstance || P1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Hi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hi.isDisabled && Hi.supportsFiber)
    try {
      (na = Hi.inject(R1)), (Nt = Hi);
    } catch {}
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b1;
st.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gc(t)) throw Error(O(200));
  return O1(e, t, null, n);
};
st.createRoot = function (e, t) {
  if (!Gc(e)) throw Error(O(299));
  var n = !1,
    r = '',
    o = Qm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Vc(e, 1, !1, null, null, n, !1, r, o)),
    (e[nn] = t.current),
    Xo(e.nodeType === 8 ? e.parentNode : e),
    new Qc(t)
  );
};
st.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(O(188)) : ((e = Object.keys(e).join(',')), Error(O(268, e)));
  return (e = hh(t)), (e = e === null ? null : e.stateNode), e;
};
st.flushSync = function (e) {
  return Xn(e);
};
st.hydrate = function (e, t, n) {
  if (!ma(t)) throw Error(O(200));
  return va(null, e, t, !0, n);
};
st.hydrateRoot = function (e, t, n) {
  if (!Gc(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = Qm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Km(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[nn] = t.current),
    Xo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ha(t);
};
st.render = function (e, t, n) {
  if (!ma(t)) throw Error(O(200));
  return va(null, e, t, !1, n);
};
st.unmountComponentAtNode = function (e) {
  if (!ma(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (Xn(function () {
        va(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[nn] = null);
        });
      }),
      !0)
    : !1;
};
st.unstable_batchedUpdates = Uc;
st.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ma(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return va(e, t, n, !1, r);
};
st.version = '18.2.0-next-9e3b772b8-20220608';
(function (e) {
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = st);
})(Pg);
var Fd = vl;
(Qu.createRoot = Fd.createRoot), (Qu.hydrateRoot = Fd.hydrateRoot);
/**
 * @remix-run/router v1.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ee() {
  return (
    (ee = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ee.apply(this, arguments)
  );
}
var ve;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(ve || (ve = {}));
function Gm(e) {
  e === void 0 && (e = {});
  let { initialEntries: t = ['/'], initialIndex: n, v5Compat: r = !1 } = e,
    o;
  o = t.map((c, g) => d(c, typeof c == 'string' ? null : c.state, g === 0 ? 'default' : void 0));
  let i = u(n ?? o.length - 1),
    l = ve.Pop,
    a = null;
  function u(c) {
    return Math.min(Math.max(c, 0), o.length - 1);
  }
  function s() {
    return o[i];
  }
  function d(c, g, y) {
    g === void 0 && (g = null);
    let m = Us(o ? s().pathname : '/', c, g, y);
    return (
      A1(m.pathname.charAt(0) === '/', 'relative pathnames are not supported in memory history: ' + JSON.stringify(c)),
      m
    );
  }
  return {
    get index() {
      return i;
    },
    get action() {
      return l;
    },
    get location() {
      return s();
    },
    createHref(c) {
      return typeof c == 'string' ? c : Tn(c);
    },
    encodeLocation(c) {
      let g = typeof c == 'string' ? Tt(c) : c;
      return { pathname: g.pathname || '', search: g.search || '', hash: g.hash || '' };
    },
    push(c, g) {
      l = ve.Push;
      let y = d(c, g);
      (i += 1), o.splice(i, o.length, y), r && a && a({ action: l, location: y });
    },
    replace(c, g) {
      l = ve.Replace;
      let y = d(c, g);
      (o[i] = y), r && a && a({ action: l, location: y });
    },
    go(c) {
      (l = ve.Pop), (i = u(i + c)), a && a({ action: l, location: s() });
    },
    listen(c) {
      return (
        (a = c),
        () => {
          a = null;
        }
      );
    },
  };
}
function N(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function A1(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function L1() {
  return Math.random().toString(36).substr(2, 8);
}
function Us(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ee({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? Tt(t) : t, {
      state: n,
      key: (t && t.key) || r || L1(),
    })
  );
}
function Tn(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Tt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function Ul(e) {
  let t =
      typeof window < 'u' && typeof window.location < 'u' && window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href,
    n = typeof e == 'string' ? e : Tn(e);
  return N(t, 'No window.location.(origin|href) available to create URL for href: ' + n), new URL(n, t);
}
var $e;
(function (e) {
  (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})($e || ($e = {}));
function $1(e) {
  return e.index === !0;
}
function Ym(e, t, n) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = new Set()),
    e.map((r, o) => {
      let i = [...t, o],
        l = typeof r.id == 'string' ? r.id : i.join('-');
      return (
        N(r.index !== !0 || !r.children, 'Cannot specify children on an index route'),
        N(
          !n.has(l),
          'Found a route id collision on id "' + l + `".  Route id's must be globally unique within Data Router usages`
        ),
        n.add(l),
        $1(r) ? ee({}, r, { id: l }) : ee({}, r, { id: l, children: r.children ? Ym(r.children, i, n) : void 0 })
      );
    })
  );
}
function Pr(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Tt(t) : t,
    o = Jm(r.pathname || '/', n);
  if (o == null) return null;
  let i = Xm(e);
  M1(i);
  let l = null;
  for (let a = 0; l == null && a < i.length; ++a) l = W1(i[a], K1(o));
  return l;
}
function Xm(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (i, l, a) => {
    let u = {
      relativePath: a === void 0 ? i.path || '' : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    u.relativePath.startsWith('/') &&
      (N(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = qt([r, u.relativePath]),
      d = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (N(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + s + '".')
      ),
      Xm(i.children, t, d, s)),
      !(i.path == null && !i.index) && t.push({ path: s, score: U1(s, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, l) => {
      var a;
      if (i.path === '' || !((a = i.path) != null && a.includes('?'))) o(i, l);
      else for (let u of Zm(i.path)) o(i, l, u);
    }),
    t
  );
}
function Zm(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [i, ''] : [i];
  let l = Zm(r.join('/')),
    a = [];
  return (
    a.push(...l.map((u) => (u === '' ? i : [i, u].join('/')))),
    o && a.push(...l),
    a.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function M1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : B1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const D1 = /^:\w+$/,
  I1 = 3,
  N1 = 2,
  j1 = 1,
  z1 = 10,
  F1 = -2,
  Ud = (e) => e === '*';
function U1(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Ud) && (r += F1),
    t && (r += N1),
    n.filter((o) => !Ud(o)).reduce((o, i) => o + (D1.test(i) ? I1 : i === '' ? j1 : z1), r)
  );
}
function B1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function W1(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let a = n[l],
      u = l === n.length - 1,
      s = o === '/' ? t : t.slice(o.length) || '/',
      d = Yc({ path: a.relativePath, caseSensitive: a.caseSensitive, end: u }, s);
    if (!d) return null;
    Object.assign(r, d.params);
    let h = a.route;
    i.push({ params: r, pathname: qt([o, d.pathname]), pathnameBase: Y1(qt([o, d.pathnameBase])), route: h }),
      d.pathnameBase !== '/' && (o = qt([o, d.pathnameBase]));
  }
  return i;
}
function H1(e, t) {
  t === void 0 && (t = {});
  let n = e;
  return (
    n.endsWith('*') &&
      n !== '*' &&
      !n.endsWith('/*') &&
      (ga(
        !1,
        'Route path "' +
          n +
          '" will be treated as if it were ' +
          ('"' + n.replace(/\*$/, '/*') + '" because the `*` character must ') +
          'always follow a `/` in the pattern. To get rid of this warning, ' +
          ('please change the route path to "' + n.replace(/\*$/, '/*') + '".')
      ),
      (n = n.replace(/\*$/, '/*'))),
    n
      .replace(/^:(\w+)/g, (r, o) => (N(t[o] != null, 'Missing ":' + o + '" param'), t[o]))
      .replace(/\/:(\w+)/g, (r, o) => (N(t[o] != null, 'Missing ":' + o + '" param'), '/' + t[o]))
      .replace(/(\/?)\*/, (r, o, i, l) => {
        const a = '*';
        return t[a] == null ? (l === '/*' ? '/' : '') : '' + o + t[a];
      })
  );
}
function Yc(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = V1(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, '$1'),
    a = o.slice(1);
  return {
    params: r.reduce((s, d, h) => {
      if (d === '*') {
        let c = a[h] || '';
        l = i.slice(0, i.length - c.length).replace(/(.)\/+$/, '$1');
      }
      return (s[d] = Q1(a[h] || '', d)), s;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function V1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ga(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (l, a) => (r.push(a), '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'), (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function K1(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      ga(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Q1(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      ga(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' + e + '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function Jm(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function ga(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function qm(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: o = '' } = typeof e == 'string' ? Tt(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : G1(n, t)) : t, search: X1(r), hash: Z1(o) };
}
function G1(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Du(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ya(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function Xc(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = Tt(e))
    : ((o = ee({}, e)),
      N(!o.pathname || !o.pathname.includes('?'), Du('?', 'pathname', 'search', o)),
      N(!o.pathname || !o.pathname.includes('#'), Du('#', 'pathname', 'hash', o)),
      N(!o.search || !o.search.includes('#'), Du('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    l = i ? '/' : o.pathname,
    a;
  if (r || l == null) a = n;
  else {
    let h = t.length - 1;
    if (l.startsWith('..')) {
      let c = l.split('/');
      for (; c[0] === '..'; ) c.shift(), (h -= 1);
      o.pathname = c.join('/');
    }
    a = h >= 0 ? t[h] : '/';
  }
  let u = qm(o, a),
    s = l && l !== '/' && l.endsWith('/'),
    d = (i || l === '.') && n.endsWith('/');
  return !u.pathname.endsWith('/') && (s || d) && (u.pathname += '/'), u;
}
const qt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Y1 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  X1 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Z1 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e),
  J1 = function (t, n) {
    n === void 0 && (n = {});
    let r = typeof n == 'number' ? { status: n } : n,
      o = new Headers(r.headers);
    return (
      o.has('Content-Type') || o.set('Content-Type', 'application/json; charset=utf-8'),
      new Response(JSON.stringify(t), ee({}, r, { headers: o }))
    );
  };
class Bl extends Error {}
class ev {
  constructor(t) {
    (this.pendingKeys = new Set()),
      (this.subscriber = void 0),
      N(t && typeof t == 'object' && !Array.isArray(t), 'defer() only accepts plain objects');
    let n;
    (this.abortPromise = new Promise((o, i) => (n = i))), (this.controller = new AbortController());
    let r = () => n(new Bl('Deferred data aborted'));
    (this.unlistenAbortSignal = () => this.controller.signal.removeEventListener('abort', r)),
      this.controller.signal.addEventListener('abort', r),
      (this.data = Object.entries(t).reduce((o, i) => {
        let [l, a] = i;
        return Object.assign(o, { [l]: this.trackPromise(l, a) });
      }, {}));
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.pendingKeys.add(t);
    let r = Promise.race([n, this.abortPromise]).then(
      (o) => this.onSettle(r, t, null, o),
      (o) => this.onSettle(r, t, o)
    );
    return r.catch(() => {}), Object.defineProperty(r, '_tracked', { get: () => !0 }), r;
  }
  onSettle(t, n, r, o) {
    if (this.controller.signal.aborted && r instanceof Bl)
      return this.unlistenAbortSignal(), Object.defineProperty(t, '_error', { get: () => r }), Promise.reject(r);
    this.pendingKeys.delete(n), this.done && this.unlistenAbortSignal();
    const i = this.subscriber;
    return r
      ? (Object.defineProperty(t, '_error', { get: () => r }), i && i(!1), Promise.reject(r))
      : (Object.defineProperty(t, '_data', { get: () => o }), i && i(!1), o);
  }
  subscribe(t) {
    this.subscriber = t;
  }
  cancel() {
    this.controller.abort(), this.pendingKeys.forEach((n, r) => this.pendingKeys.delete(r));
    let t = this.subscriber;
    t && t(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener('abort', r),
        (n = await new Promise((o) => {
          this.subscribe((i) => {
            t.removeEventListener('abort', r), (i || this.done) && o(i);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeys.size === 0;
  }
  get unwrappedData() {
    return (
      N(this.data !== null && this.done, 'Can only unwrap data on initialized and settled deferreds'),
      Object.entries(this.data).reduce((t, n) => {
        let [r, o] = n;
        return Object.assign(t, { [r]: ew(o) });
      }, {})
    );
  }
}
function q1(e) {
  return e instanceof Promise && e._tracked === !0;
}
function ew(e) {
  if (!q1(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
function tw(e) {
  return new ev(e);
}
const nw = function (t, n) {
  n === void 0 && (n = 302);
  let r = n;
  typeof r == 'number' ? (r = { status: r }) : typeof r.status > 'u' && (r.status = 302);
  let o = new Headers(r.headers);
  return o.set('Location', t), new Response(null, ee({}, r, { headers: o }));
};
class Zc {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = o),
      r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
  }
}
function Jc(e) {
  return e instanceof Zc;
}
const tv = ['post', 'put', 'patch', 'delete'],
  rw = new Set(tv),
  ow = ['get', ...tv],
  iw = new Set(ow),
  lw = new Set([301, 302, 303, 307, 308]),
  aw = new Set([307, 308]),
  Iu = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  uw = { state: 'idle', data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0 },
  sw = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  cw = !sw;
function fw(e) {
  N(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let t = Ym(e.routes),
    n = null,
    r = new Set(),
    o = null,
    i = null,
    l = null,
    a = e.hydrationData != null,
    u = Pr(t, e.history.location, e.basename),
    s = null;
  if (u == null) {
    let k = jn(404, { pathname: e.history.location.pathname }),
      { matches: _, route: b } = Qd(t);
    (u = _), (s = { [b.id]: k });
  }
  let d = !u.some((k) => k.route.loader) || e.hydrationData != null,
    h,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: u,
      initialized: d,
      navigation: Iu,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || s,
      fetchers: new Map(),
    },
    g = ve.Pop,
    y = !1,
    m,
    S = !1,
    p = !1,
    f = [],
    v = [],
    w = new Map(),
    E = 0,
    T = -1,
    x = new Map(),
    P = new Set(),
    $ = new Map(),
    A = new Map();
  function M() {
    return (
      (n = e.history.listen((k) => {
        let { action: _, location: b } = k;
        return R(_, b);
      })),
      c.initialized || R(ve.Pop, c.location),
      h
    );
  }
  function te() {
    n && n(), r.clear(), m && m.abort(), c.fetchers.forEach((k, _) => iu(_));
  }
  function ye(k) {
    return r.add(k), () => r.delete(k);
  }
  function H(k) {
    (c = ee({}, c, k)), r.forEach((_) => _(c));
  }
  function _e(k, _) {
    var b;
    let I =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        c.navigation.state === 'loading' &&
        ((b = c.navigation.formAction) == null ? void 0 : b.split('?')[0]) === k.pathname,
      D;
    _.actionData
      ? Object.keys(_.actionData).length > 0
        ? (D = _.actionData)
        : (D = null)
      : I
      ? (D = c.actionData)
      : (D = null);
    let z = _.loaderData ? Kd(c.loaderData, _.loaderData, _.matches || [], _.errors) : c.loaderData;
    H(
      ee({}, _, {
        actionData: D,
        loaderData: z,
        historyAction: g,
        location: k,
        initialized: !0,
        navigation: Iu,
        revalidation: 'idle',
        restoreScrollPosition: c.navigation.formData ? !1 : Rf(k, _.matches || c.matches),
        preventScrollReset: y,
      })
    ),
      S ||
        g === ve.Pop ||
        (g === ve.Push ? e.history.push(k, k.state) : g === ve.Replace && e.history.replace(k, k.state)),
      (g = ve.Pop),
      (y = !1),
      (S = !1),
      (p = !1),
      (f = []),
      (v = []);
  }
  async function ir(k, _) {
    if (typeof k == 'number') {
      e.history.go(k);
      return;
    }
    let { path: b, submission: I, error: D } = Bd(k, _),
      z = Us(c.location, b, _ && _.state);
    z = ee({}, z, e.history.encodeLocation(z));
    let U = _ && _.replace != null ? _.replace : void 0,
      V = ve.Push;
    U === !0
      ? (V = ve.Replace)
      : U === !1 ||
        (I != null && br(I.formMethod) && I.formAction === c.location.pathname + c.location.search && (V = ve.Replace));
    let Q = _ && 'preventScrollReset' in _ ? _.preventScrollReset === !0 : void 0;
    return await R(V, z, { submission: I, pendingError: D, preventScrollReset: Q, replace: _ && _.replace });
  }
  function $n() {
    if ((un(), H({ revalidation: 'loading' }), c.navigation.state !== 'submitting')) {
      if (c.navigation.state === 'idle') {
        R(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      R(g || c.historyAction, c.navigation.location, { overrideNavigation: c.navigation });
    }
  }
  async function R(k, _, b) {
    m && m.abort(),
      (m = null),
      (g = k),
      (S = (b && b.startUninterruptedRevalidation) === !0),
      Z0(c.location, c.matches),
      (y = (b && b.preventScrollReset) === !0);
    let I = b && b.overrideNavigation,
      D = Pr(t, _, e.basename);
    if (!D) {
      let Ne = jn(404, { pathname: _.pathname }),
        { matches: sn, route: Ht } = Qd(t);
      lu(), _e(_, { matches: sn, loaderData: {}, errors: { [Ht.id]: Ne } });
      return;
    }
    if (vw(c.location, _)) {
      _e(_, { matches: D });
      return;
    }
    m = new AbortController();
    let z = wo(_, m.signal, b && b.submission),
      U,
      V;
    if (b && b.pendingError) V = { [Tr(D).route.id]: b.pendingError };
    else if (b && b.submission && br(b.submission.formMethod)) {
      let Ne = await j(z, _, b.submission, D, { replace: b.replace });
      if (Ne.shortCircuited) return;
      (U = Ne.pendingActionData),
        (V = Ne.pendingActionError),
        (I = ee({ state: 'loading', location: _ }, b.submission)),
        (z = new Request(z.url, { signal: z.signal }));
    }
    let { shortCircuited: Q, loaderData: de, errors: B } = await F(z, _, D, I, b && b.submission, b && b.replace, U, V);
    Q || ((m = null), _e(_, ee({ matches: D }, U ? { actionData: U } : {}, { loaderData: de, errors: B })));
  }
  async function j(k, _, b, I, D) {
    un();
    let z = ee({ state: 'submitting', location: _ }, b);
    H({ navigation: z });
    let U,
      V = Zd(I, _);
    if (!V.route.action)
      U = { type: $e.error, error: jn(405, { method: k.method, pathname: _.pathname, routeId: V.route.id }) };
    else if (((U = await yo('action', k, V, I, h.basename)), k.signal.aborted)) return { shortCircuited: !0 };
    if (Nr(U)) {
      let Q;
      return (
        D && D.replace != null ? (Q = D.replace) : (Q = U.location === c.location.pathname + c.location.search),
        await Wt(c, U, Q),
        { shortCircuited: !0 }
      );
    }
    if (Do(U)) {
      let Q = Tr(I, V.route.id);
      return (
        (D && D.replace) !== !0 && (g = ve.Push),
        { pendingActionData: {}, pendingActionError: { [Q.route.id]: U.error } }
      );
    }
    if (Bn(U)) throw new Error('defer() is not supported in actions');
    return { pendingActionData: { [V.route.id]: U.data } };
  }
  async function F(k, _, b, I, D, z, U, V) {
    let Q = I;
    Q ||
      (Q = ee(
        {
          state: 'loading',
          location: _,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        D
      ));
    let [de, B] = Wd(c, b, D, _, p, f, v, U, V, $);
    if (
      (lu((je) => !(b && b.some((tt) => tt.route.id === je)) || (de && de.some((tt) => tt.route.id === je))),
      de.length === 0 && B.length === 0)
    )
      return (
        _e(_, ee({ matches: b, loaderData: {}, errors: V || null }, U ? { actionData: U } : {})), { shortCircuited: !0 }
      );
    if (!S) {
      B.forEach((tt) => {
        let [sr] = tt,
          uo = c.fetchers.get(sr),
          Pi = {
            state: 'loading',
            data: uo && uo.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            ' _hasFetcherDoneAnything ': !0,
          };
        c.fetchers.set(sr, Pi);
      });
      let je = U || c.actionData;
      H(
        ee(
          { navigation: Q },
          je ? (Object.keys(je).length === 0 ? { actionData: null } : { actionData: je }) : {},
          B.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
        )
      );
    }
    (T = ++E),
      B.forEach((je) => {
        let [tt] = je;
        return w.set(tt, m);
      });
    let { results: Ne, loaderResults: sn, fetcherResults: Ht } = await Rt(c.matches, b, de, B, k);
    if (k.signal.aborted) return { shortCircuited: !0 };
    B.forEach((je) => {
      let [tt] = je;
      return w.delete(tt);
    });
    let ar = Gd(Ne);
    if (ar) return await Wt(c, ar, z), { shortCircuited: !0 };
    let { loaderData: au, errors: Oi } = Vd(c, b, de, sn, V, B, Ht, A);
    A.forEach((je, tt) => {
      je.subscribe((sr) => {
        (sr || je.done) && A.delete(tt);
      });
    }),
      Y0();
    let ur = bf(T);
    return ee({ loaderData: au, errors: Oi }, ur || B.length > 0 ? { fetchers: new Map(c.fetchers) } : {});
  }
  function ie(k) {
    return c.fetchers.get(k) || uw;
  }
  function we(k, _, b, I) {
    if (cw)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    w.has(k) && _i(k);
    let D = Pr(t, b, e.basename);
    if (!D) {
      ou(k, _, jn(404, { pathname: b }));
      return;
    }
    let { path: z, submission: U } = Bd(b, I, !0),
      V = Zd(D, z);
    if (U && br(U.formMethod)) {
      lr(k, _, z, V, D, U);
      return;
    }
    $.set(k, [z, V, D]), Bt(k, _, z, V, D, U);
  }
  async function lr(k, _, b, I, D, z) {
    if ((un(), $.delete(k), !I.route.action)) {
      let Vt = jn(405, { method: z.formMethod, pathname: b, routeId: _ });
      ou(k, _, Vt);
      return;
    }
    let U = c.fetchers.get(k),
      V = ee({ state: 'submitting' }, z, { data: U && U.data, ' _hasFetcherDoneAnything ': !0 });
    c.fetchers.set(k, V), H({ fetchers: new Map(c.fetchers) });
    let Q = new AbortController(),
      de = wo(b, Q.signal, z);
    w.set(k, Q);
    let B = await yo('action', de, I, D, h.basename);
    if (de.signal.aborted) {
      w.get(k) === Q && w.delete(k);
      return;
    }
    if (Nr(B)) {
      w.delete(k), P.add(k);
      let Vt = ee({ state: 'loading' }, z, { data: void 0, ' _hasFetcherDoneAnything ': !0 });
      return c.fetchers.set(k, Vt), H({ fetchers: new Map(c.fetchers) }), Wt(c, B, !1, !0);
    }
    if (Do(B)) {
      ou(k, _, B.error);
      return;
    }
    Bn(B) && N(!1, 'defer() is not supported in actions');
    let Ne = c.navigation.location || c.location,
      sn = wo(Ne, Q.signal),
      Ht = c.navigation.state !== 'idle' ? Pr(t, c.navigation.location, e.basename) : c.matches;
    N(Ht, "Didn't find any matches after fetcher action");
    let ar = ++E;
    x.set(k, ar);
    let au = ee({ state: 'loading', data: B.data }, z, { ' _hasFetcherDoneAnything ': !0 });
    c.fetchers.set(k, au);
    let [Oi, ur] = Wd(c, Ht, z, Ne, p, f, v, { [I.route.id]: B.data }, void 0, $);
    ur
      .filter((Vt) => {
        let [Mn] = Vt;
        return Mn !== k;
      })
      .forEach((Vt) => {
        let [Mn] = Vt,
          Af = c.fetchers.get(Mn),
          eg = {
            state: 'loading',
            data: Af && Af.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            ' _hasFetcherDoneAnything ': !0,
          };
        c.fetchers.set(Mn, eg), w.set(Mn, Q);
      }),
      H({ fetchers: new Map(c.fetchers) });
    let { results: je, loaderResults: tt, fetcherResults: sr } = await Rt(c.matches, Ht, Oi, ur, sn);
    if (Q.signal.aborted) return;
    x.delete(k),
      w.delete(k),
      ur.forEach((Vt) => {
        let [Mn] = Vt;
        return w.delete(Mn);
      });
    let uo = Gd(je);
    if (uo) return Wt(c, uo);
    let { loaderData: Pi, errors: uu } = Vd(c, c.matches, Oi, tt, void 0, ur, sr, A),
      J0 = {
        state: 'idle',
        data: B.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        ' _hasFetcherDoneAnything ': !0,
      };
    c.fetchers.set(k, J0);
    let q0 = bf(ar);
    c.navigation.state === 'loading' && ar > T
      ? (N(g, 'Expected pending action'),
        m && m.abort(),
        _e(c.navigation.location, { matches: Ht, loaderData: Pi, errors: uu, fetchers: new Map(c.fetchers) }))
      : (H(ee({ errors: uu, loaderData: Kd(c.loaderData, Pi, Ht, uu) }, q0 ? { fetchers: new Map(c.fetchers) } : {})),
        (p = !1));
  }
  async function Bt(k, _, b, I, D, z) {
    let U = c.fetchers.get(k),
      V = ee({ state: 'loading', formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0 }, z, {
        data: U && U.data,
        ' _hasFetcherDoneAnything ': !0,
      });
    c.fetchers.set(k, V), H({ fetchers: new Map(c.fetchers) });
    let Q = new AbortController(),
      de = wo(b, Q.signal);
    w.set(k, Q);
    let B = await yo('loader', de, I, D, h.basename);
    if ((Bn(B) && (B = (await iv(B, de.signal, !0)) || B), w.get(k) === Q && w.delete(k), de.signal.aborted)) return;
    if (Nr(B)) {
      await Wt(c, B);
      return;
    }
    if (Do(B)) {
      let sn = Tr(c.matches, _);
      c.fetchers.delete(k), H({ fetchers: new Map(c.fetchers), errors: { [sn.route.id]: B.error } });
      return;
    }
    N(!Bn(B), 'Unhandled fetcher deferred data');
    let Ne = {
      state: 'idle',
      data: B.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      ' _hasFetcherDoneAnything ': !0,
    };
    c.fetchers.set(k, Ne), H({ fetchers: new Map(c.fetchers) });
  }
  async function Wt(k, _, b, I) {
    var D;
    _.revalidate && (p = !0);
    let z = Us(k.location, _.location, ee({ _isRedirect: !0 }, I ? { _isFetchActionRedirect: !0 } : {}));
    if (
      (N(z, 'Expected a location on the redirect navigation'),
      typeof ((D = window) == null ? void 0 : D.location) < 'u')
    ) {
      let Ne = Ul(_.location).origin;
      if (window.location.origin !== Ne) {
        b ? window.location.replace(_.location) : window.location.assign(_.location);
        return;
      }
    }
    m = null;
    let U = b === !0 ? ve.Replace : ve.Push,
      { formMethod: V, formAction: Q, formEncType: de, formData: B } = k.navigation;
    aw.has(_.status) && V && br(V) && de && B
      ? await R(U, z, { submission: { formMethod: V, formAction: _.location, formEncType: de, formData: B } })
      : await R(U, z, {
          overrideNavigation: {
            state: 'loading',
            location: z,
            formMethod: V || void 0,
            formAction: Q || void 0,
            formEncType: de || void 0,
            formData: B || void 0,
          },
        });
  }
  async function Rt(k, _, b, I, D) {
    let z = await Promise.all([
        ...b.map((Q) => yo('loader', D, Q, _, h.basename)),
        ...I.map((Q) => {
          let [, de, B, Ne] = Q;
          return yo('loader', wo(de, D.signal), B, Ne, h.basename);
        }),
      ]),
      U = z.slice(0, b.length),
      V = z.slice(b.length);
    return (
      await Promise.all([
        Yd(k, b, U, D.signal, !1, c.loaderData),
        Yd(
          k,
          I.map((Q) => {
            let [, , de] = Q;
            return de;
          }),
          V,
          D.signal,
          !0
        ),
      ]),
      { results: z, loaderResults: U, fetcherResults: V }
    );
  }
  function un() {
    (p = !0),
      f.push(...lu()),
      $.forEach((k, _) => {
        w.has(_) && (v.push(_), _i(_));
      });
  }
  function ou(k, _, b) {
    let I = Tr(c.matches, _);
    iu(k), H({ errors: { [I.route.id]: b }, fetchers: new Map(c.fetchers) });
  }
  function iu(k) {
    w.has(k) && _i(k), $.delete(k), x.delete(k), P.delete(k), c.fetchers.delete(k);
  }
  function _i(k) {
    let _ = w.get(k);
    N(_, 'Expected fetch controller: ' + k), _.abort(), w.delete(k);
  }
  function Tf(k) {
    for (let _ of k) {
      let I = {
        state: 'idle',
        data: ie(_).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        ' _hasFetcherDoneAnything ': !0,
      };
      c.fetchers.set(_, I);
    }
  }
  function Y0() {
    let k = [];
    for (let _ of P) {
      let b = c.fetchers.get(_);
      N(b, 'Expected fetcher: ' + _), b.state === 'loading' && (P.delete(_), k.push(_));
    }
    Tf(k);
  }
  function bf(k) {
    let _ = [];
    for (let [b, I] of x)
      if (I < k) {
        let D = c.fetchers.get(b);
        N(D, 'Expected fetcher: ' + b), D.state === 'loading' && (_i(b), x.delete(b), _.push(b));
      }
    return Tf(_), _.length > 0;
  }
  function lu(k) {
    let _ = [];
    return (
      A.forEach((b, I) => {
        (!k || k(I)) && (b.cancel(), _.push(I), A.delete(I));
      }),
      _
    );
  }
  function X0(k, _, b) {
    if (((o = k), (l = _), (i = b || ((I) => I.key)), !a && c.navigation === Iu)) {
      a = !0;
      let I = Rf(c.location, c.matches);
      I != null && H({ restoreScrollPosition: I });
    }
    return () => {
      (o = null), (l = null), (i = null);
    };
  }
  function Z0(k, _) {
    if (o && i && l) {
      let b = _.map((D) => Xd(D, c.loaderData)),
        I = i(k, b) || k.key;
      o[I] = l();
    }
  }
  function Rf(k, _) {
    if (o && i && l) {
      let b = _.map((z) => Xd(z, c.loaderData)),
        I = i(k, b) || k.key,
        D = o[I];
      if (typeof D == 'number') return D;
    }
    return null;
  }
  return (
    (h = {
      get basename() {
        return e.basename;
      },
      get state() {
        return c;
      },
      get routes() {
        return t;
      },
      initialize: M,
      subscribe: ye,
      enableScrollRestoration: X0,
      navigate: ir,
      fetch: we,
      revalidate: $n,
      createHref: (k) => e.history.createHref(k),
      encodeLocation: (k) => e.history.encodeLocation(k),
      getFetcher: ie,
      deleteFetcher: iu,
      dispose: te,
      _internalFetchControllers: w,
      _internalActiveDeferreds: A,
    }),
    h
  );
}
function dw(e) {
  return e != null && 'formData' in e;
}
function Bd(e, t, n) {
  n === void 0 && (n = !1);
  let r = typeof e == 'string' ? e : Tn(e);
  if (!t || !dw(t)) return { path: r };
  if (t.formMethod && !yw(t.formMethod)) return { path: r, error: jn(405, { method: t.formMethod }) };
  let o;
  if (
    t.formData &&
    ((o = {
      formMethod: t.formMethod || 'get',
      formAction: ov(r),
      formEncType: (t && t.formEncType) || 'application/x-www-form-urlencoded',
      formData: t.formData,
    }),
    br(o.formMethod))
  )
    return { path: r, submission: o };
  let i = Tt(r);
  try {
    let l = rv(t.formData);
    n && i.search && lv(i.search) && l.append('index', ''), (i.search = '?' + l);
  } catch {
    return { path: r, error: jn(400) };
  }
  return { path: Tn(i), submission: o };
}
function pw(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Wd(e, t, n, r, o, i, l, a, u, s) {
  let d = u ? Object.values(u)[0] : a ? Object.values(a)[0] : void 0,
    h = u ? Object.keys(u)[0] : void 0,
    g = pw(t, h).filter(
      (m, S) =>
        m.route.loader != null &&
        (hw(e.loaderData, e.matches[S], m) ||
          i.some((p) => p === m.route.id) ||
          Hd(e.location, e.matches[S], n, r, m, o, d))
    ),
    y = [];
  return (
    s &&
      s.forEach((m, S) => {
        let [p, f, v] = m;
        l.includes(S) ? y.push([S, p, f, v]) : o && Hd(p, f, n, p, f, o, d) && y.push([S, p, f, v]);
      }),
    [g, y]
  );
}
function hw(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function nv(e, t) {
  let n = e.route.path;
  return e.pathname !== t.pathname || (n && n.endsWith('*') && e.params['*'] !== t.params['*']);
}
function Hd(e, t, n, r, o, i, l) {
  let a = Ul(e),
    u = t.params,
    s = Ul(r),
    d = o.params,
    h = nv(t, o) || a.toString() === s.toString() || a.search !== s.search || i;
  if (o.route.shouldRevalidate) {
    let c = o.route.shouldRevalidate(
      ee({ currentUrl: a, currentParams: u, nextUrl: s, nextParams: d }, n, {
        actionResult: l,
        defaultShouldRevalidate: h,
      })
    );
    if (typeof c == 'boolean') return c;
  }
  return h;
}
async function yo(e, t, n, r, o, i, l, a) {
  o === void 0 && (o = '/'), i === void 0 && (i = !1), l === void 0 && (l = !1);
  let u,
    s,
    d,
    h = new Promise((g, y) => (d = y)),
    c = () => d();
  t.signal.addEventListener('abort', c);
  try {
    let g = n.route[e];
    N(g, 'Could not find the ' + e + ' to run on the "' + n.route.id + '" route'),
      (s = await Promise.race([g({ request: t, params: n.params, context: a }), h])),
      N(
        s !== void 0,
        'You defined ' +
          (e === 'action' ? 'an action' : 'a loader') +
          ' for route ' +
          ('"' + n.route.id + '" but didn\'t return anything from your `' + e + '` ') +
          'function. Please return a value or `null`.'
      );
  } catch (g) {
    (u = $e.error), (s = g);
  } finally {
    t.signal.removeEventListener('abort', c);
  }
  if (gw(s)) {
    let g = s.status;
    if (lw.has(g)) {
      let S = s.headers.get('Location');
      if (
        (N(S, 'Redirects returned/thrown from loaders/actions must have a Location header'),
        !(/^[a-z+]+:\/\//i.test(S) || S.startsWith('//')))
      ) {
        let f = r.slice(0, r.indexOf(n) + 1),
          v = ya(f).map((E) => E.pathnameBase),
          w = Xc(S, v, new URL(t.url).pathname);
        if ((N(Tn(w), 'Unable to resolve redirect location: ' + S), o)) {
          let E = w.pathname;
          w.pathname = E === '/' ? o : qt([o, E]);
        }
        S = Tn(w);
      }
      if (i) throw (s.headers.set('Location', S), s);
      return { type: $e.redirect, status: g, location: S, revalidate: s.headers.get('X-Remix-Revalidate') !== null };
    }
    if (l) throw { type: u || $e.data, response: s };
    let y,
      m = s.headers.get('Content-Type');
    return (
      m && /\bapplication\/json\b/.test(m) ? (y = await s.json()) : (y = await s.text()),
      u === $e.error
        ? { type: u, error: new Zc(g, s.statusText, y), headers: s.headers }
        : { type: $e.data, data: y, statusCode: s.status, headers: s.headers }
    );
  }
  return u === $e.error
    ? { type: u, error: s }
    : s instanceof ev
    ? { type: $e.deferred, deferredData: s }
    : { type: $e.data, data: s };
}
function wo(e, t, n) {
  let r = Ul(ov(e)).toString(),
    o = { signal: t };
  if (n && br(n.formMethod)) {
    let { formMethod: i, formEncType: l, formData: a } = n;
    (o.method = i.toUpperCase()), (o.body = l === 'application/x-www-form-urlencoded' ? rv(a) : a);
  }
  return new Request(r, o);
}
function rv(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    N(
      typeof r == 'string',
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
    ),
      t.append(n, r);
  return t;
}
function mw(e, t, n, r, o) {
  let i = {},
    l = null,
    a,
    u = !1,
    s = {};
  return (
    n.forEach((d, h) => {
      let c = t[h].route.id;
      if ((N(!Nr(d), 'Cannot handle redirect results in processLoaderData'), Do(d))) {
        let g = Tr(e, c),
          y = d.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (l = l || {}),
          l[g.route.id] == null && (l[g.route.id] = y),
          (i[c] = void 0),
          u || ((u = !0), (a = Jc(d.error) ? d.error.status : 500)),
          d.headers && (s[c] = d.headers);
      } else
        Bn(d)
          ? (o && o.set(c, d.deferredData), (i[c] = d.deferredData.data))
          : ((i[c] = d.data),
            d.statusCode != null && d.statusCode !== 200 && !u && (a = d.statusCode),
            d.headers && (s[c] = d.headers));
    }),
    r && ((l = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: l, statusCode: a || 200, loaderHeaders: s }
  );
}
function Vd(e, t, n, r, o, i, l, a) {
  let { loaderData: u, errors: s } = mw(t, n, r, o, a);
  for (let d = 0; d < i.length; d++) {
    let [h, , c] = i[d];
    N(l !== void 0 && l[d] !== void 0, 'Did not find corresponding fetcher result');
    let g = l[d];
    if (Do(g)) {
      let y = Tr(e.matches, c.route.id);
      (s && s[y.route.id]) || (s = ee({}, s, { [y.route.id]: g.error })), e.fetchers.delete(h);
    } else {
      if (Nr(g)) throw new Error('Unhandled fetcher revalidation redirect');
      if (Bn(g)) throw new Error('Unhandled fetcher deferred data');
      {
        let y = {
          state: 'idle',
          data: g.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          ' _hasFetcherDoneAnything ': !0,
        };
        e.fetchers.set(h, y);
      }
    }
  }
  return { loaderData: u, errors: s };
}
function Kd(e, t, n, r) {
  let o = ee({}, t);
  for (let i of n) {
    let l = i.route.id;
    if (
      (t.hasOwnProperty(l) ? t[l] !== void 0 && (o[l] = t[l]) : e[l] !== void 0 && (o[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break;
  }
  return o;
}
function Tr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Qd(e) {
  let t = e.find((n) => n.index || !n.path || n.path === '/') || { id: '__shim-error-route__' };
  return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t };
}
function jn(e, t) {
  let { pathname: n, routeId: r, method: o } = t === void 0 ? {} : t,
    i = 'Unknown Server Error',
    l = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((i = 'Bad Request'),
        o && n && r
          ? (l =
              'You made a ' +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : (l = 'Cannot submit binary form data using GET'))
      : e === 403
      ? ((i = 'Forbidden'), (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = 'Not Found'), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = 'Method Not Allowed'),
        o && n && r
          ? (l =
              'You made a ' +
              o.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o && (l = 'Invalid request method "' + o.toUpperCase() + '"')),
    new Zc(e || 500, i, new Error(l), !0)
  );
}
function Gd(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Nr(n)) return n;
  }
}
function ov(e) {
  let t = typeof e == 'string' ? Tt(e) : e;
  return Tn(ee({}, t, { hash: '' }));
}
function vw(e, t) {
  return e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash;
}
function Bn(e) {
  return e.type === $e.deferred;
}
function Do(e) {
  return e.type === $e.error;
}
function Nr(e) {
  return (e && e.type) === $e.redirect;
}
function gw(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function yw(e) {
  return iw.has(e);
}
function br(e) {
  return rw.has(e);
}
async function Yd(e, t, n, r, o, i) {
  for (let l = 0; l < n.length; l++) {
    let a = n[l],
      u = t[l],
      s = e.find((h) => h.route.id === u.route.id),
      d = s != null && !nv(s, u) && (i && i[u.route.id]) !== void 0;
    Bn(a) &&
      (o || d) &&
      (await iv(a, r, o).then((h) => {
        h && (n[l] = h || n[l]);
      }));
  }
}
async function iv(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: $e.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: $e.error, error: o };
      }
    return { type: $e.data, data: e.deferredData.data };
  }
}
function lv(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Xd(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function Zd(e, t) {
  let n = typeof t == 'string' ? Tt(t).search : t.search;
  if (e[e.length - 1].route.index && lv(n || '')) return e[e.length - 1];
  let r = ya(e);
  return r[r.length - 1];
}
/**
 * React Router v6.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Wl() {
  return (
    (Wl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Wl.apply(this, arguments)
  );
}
function ww(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Sw = typeof Object.is == 'function' ? Object.is : ww,
  { useState: xw, useEffect: Ew, useLayoutEffect: kw, useDebugValue: Cw } = Uo;
function _w(e, t, n) {
  const r = t(),
    [{ inst: o }, i] = xw({ inst: { value: r, getSnapshot: t } });
  return (
    kw(() => {
      (o.value = r), (o.getSnapshot = t), Nu(o) && i({ inst: o });
    }, [e, r, t]),
    Ew(
      () => (
        Nu(o) && i({ inst: o }),
        e(() => {
          Nu(o) && i({ inst: o });
        })
      ),
      [e]
    ),
    Cw(r),
    r
  );
}
function Nu(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Sw(n, r);
  } catch {
    return !0;
  }
}
function Ow(e, t, n) {
  return t();
}
const Pw = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  Tw = !Pw,
  bw = Tw ? Ow : _w,
  Rw = 'useSyncExternalStore' in Uo ? ((e) => e.useSyncExternalStore)(Uo) : bw,
  av = C.createContext(null),
  wa = C.createContext(null),
  gi = C.createContext(null),
  Hl = C.createContext(null),
  yi = C.createContext(null),
  oo = C.createContext(null),
  Ft = C.createContext({ outlet: null, matches: [] }),
  uv = C.createContext(null);
function Aw(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ln() || N(!1);
  let { basename: r, navigator: o } = C.useContext(yi),
    { hash: i, pathname: l, search: a } = dv(e, { relative: n }),
    u = l;
  return r !== '/' && (u = l === '/' ? r : qt([r, l])), o.createHref({ pathname: u, search: a, hash: i });
}
function Ln() {
  return C.useContext(oo) != null;
}
function wi() {
  return Ln() || N(!1), C.useContext(oo).location;
}
function Lw() {
  return C.useContext(oo).navigationType;
}
function $w(e) {
  Ln() || N(!1);
  let { pathname: t } = wi();
  return C.useMemo(() => Yc(e, t), [t, e]);
}
function sv() {
  Ln() || N(!1);
  let { basename: e, navigator: t } = C.useContext(yi),
    { matches: n } = C.useContext(Ft),
    { pathname: r } = wi(),
    o = JSON.stringify(ya(n).map((a) => a.pathnameBase)),
    i = C.useRef(!1);
  return (
    C.useEffect(() => {
      i.current = !0;
    }),
    C.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !i.current)) return;
        if (typeof a == 'number') {
          t.go(a);
          return;
        }
        let s = Xc(a, JSON.parse(o), r, u.relative === 'path');
        e !== '/' && (s.pathname = s.pathname === '/' ? e : qt([e, s.pathname])),
          (u.replace ? t.replace : t.push)(s, u.state, u);
      },
      [e, t, o, r]
    )
  );
}
const cv = C.createContext(null);
function Mw() {
  return C.useContext(cv);
}
function fv(e) {
  let t = C.useContext(Ft).outlet;
  return t && C.createElement(cv.Provider, { value: e }, t);
}
function Dw() {
  let { matches: e } = C.useContext(Ft),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function dv(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = C.useContext(Ft),
    { pathname: o } = wi(),
    i = JSON.stringify(ya(r).map((l) => l.pathnameBase));
  return C.useMemo(() => Xc(e, JSON.parse(i), o, n === 'path'), [e, i, o, n]);
}
function pv(e, t) {
  Ln() || N(!1);
  let { navigator: n } = C.useContext(yi),
    r = C.useContext(gi),
    { matches: o } = C.useContext(Ft),
    i = o[o.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : '/';
  i && i.route;
  let u = wi(),
    s;
  if (t) {
    var d;
    let m = typeof t == 'string' ? Tt(t) : t;
    a === '/' || ((d = m.pathname) != null && d.startsWith(a)) || N(!1), (s = m);
  } else s = u;
  let h = s.pathname || '/',
    c = a === '/' ? h : h.slice(a.length) || '/',
    g = Pr(e, { pathname: c }),
    y = hv(
      g &&
        g.map((m) =>
          Object.assign({}, m, {
            params: Object.assign({}, l, m.params),
            pathname: qt([a, n.encodeLocation ? n.encodeLocation(m.pathname).pathname : m.pathname]),
            pathnameBase:
              m.pathnameBase === '/'
                ? a
                : qt([a, n.encodeLocation ? n.encodeLocation(m.pathnameBase).pathname : m.pathnameBase]),
          })
        ),
      o,
      r || void 0
    );
  return t && y
    ? C.createElement(
        oo.Provider,
        {
          value: {
            location: Wl({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, s),
            navigationType: ve.Pop,
          },
        },
        y
      )
    : y;
}
function Iw() {
  let e = vv(),
    t = Jc(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    o = { padding: '0.5rem', backgroundColor: r },
    i = { padding: '2px 4px', backgroundColor: r };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement('h2', null, 'Unhandled Thrown Error!'),
    C.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? C.createElement('pre', { style: o }, n) : null,
    C.createElement('p', null, '💿 Hey developer 👋'),
    C.createElement(
      'p',
      null,
      'You can provide a way better UX than this when your app throws errors by providing your own ',
      C.createElement('code', { style: i }, 'errorElement'),
      ' props on ',
      C.createElement('code', { style: i }, '<Route>')
    )
  );
}
class Nw extends C.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n);
  }
  render() {
    return this.state.error
      ? C.createElement(
          Ft.Provider,
          { value: this.props.routeContext },
          C.createElement(uv.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function jw(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = C.useContext(av);
  return (
    o && n.route.errorElement && (o._deepestRenderedBoundaryId = n.route.id),
    C.createElement(Ft.Provider, { value: t }, r)
  );
}
function hv(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let i = r.findIndex((l) => l.route.id && (o == null ? void 0 : o[l.route.id]));
    i >= 0 || N(!1), (r = r.slice(0, Math.min(r.length, i + 1)));
  }
  return r.reduceRight((i, l, a) => {
    let u = l.route.id ? (o == null ? void 0 : o[l.route.id]) : null,
      s = n ? l.route.errorElement || C.createElement(Iw, null) : null,
      d = t.concat(r.slice(0, a + 1)),
      h = () =>
        C.createElement(
          jw,
          { match: l, routeContext: { outlet: i, matches: d } },
          u ? s : l.route.element !== void 0 ? l.route.element : i
        );
    return n && (l.route.errorElement || a === 0)
      ? C.createElement(Nw, {
          location: n.location,
          component: s,
          error: u,
          children: h(),
          routeContext: { outlet: null, matches: d },
        })
      : h();
  }, null);
}
var Bs;
(function (e) {
  e.UseRevalidator = 'useRevalidator';
})(Bs || (Bs = {}));
var Pt;
(function (e) {
  (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator');
})(Pt || (Pt = {}));
function zw(e) {
  let t = C.useContext(wa);
  return t || N(!1), t;
}
function tr(e) {
  let t = C.useContext(gi);
  return t || N(!1), t;
}
function Fw(e) {
  let t = C.useContext(Ft);
  return t || N(!1), t;
}
function mv(e) {
  let t = Fw(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || N(!1), n.route.id;
}
function Uw() {
  return tr(Pt.UseNavigation).navigation;
}
function Bw() {
  let e = zw(Bs.UseRevalidator),
    t = tr(Pt.UseRevalidator);
  return { revalidate: e.router.revalidate, state: t.revalidation };
}
function Ww() {
  let { matches: e, loaderData: t } = tr(Pt.UseMatches);
  return C.useMemo(
    () =>
      e.map((n) => {
        let { pathname: r, params: o } = n;
        return { id: n.route.id, pathname: r, params: o, data: t[n.route.id], handle: n.route.handle };
      }),
    [e, t]
  );
}
function Hw() {
  let e = tr(Pt.UseLoaderData),
    t = mv(Pt.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error('You cannot `useLoaderData` in an errorElement (routeId: ' + t + ')');
    return;
  }
  return e.loaderData[t];
}
function Vw(e) {
  return tr(Pt.UseRouteLoaderData).loaderData[e];
}
function Kw() {
  let e = tr(Pt.UseActionData);
  return C.useContext(Ft) || N(!1), Object.values((e == null ? void 0 : e.actionData) || {})[0];
}
function vv() {
  var e;
  let t = C.useContext(uv),
    n = tr(Pt.UseRouteError),
    r = mv(Pt.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function gv() {
  let e = C.useContext(Hl);
  return e == null ? void 0 : e._data;
}
function Qw() {
  let e = C.useContext(Hl);
  return e == null ? void 0 : e._error;
}
function Gw(e) {
  let { fallbackElement: t, router: n } = e,
    r = Rw(
      n.subscribe,
      () => n.state,
      () => n.state
    ),
    o = C.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (l) => n.navigate(l),
        push: (l, a, u) => n.navigate(l, { state: a, preventScrollReset: u == null ? void 0 : u.preventScrollReset }),
        replace: (l, a, u) =>
          n.navigate(l, { replace: !0, state: a, preventScrollReset: u == null ? void 0 : u.preventScrollReset }),
      }),
      [n]
    ),
    i = n.basename || '/';
  return C.createElement(
    wa.Provider,
    { value: { router: n, navigator: o, static: !1, basename: i } },
    C.createElement(
      gi.Provider,
      { value: r },
      C.createElement(
        ef,
        { basename: n.basename, location: n.state.location, navigationType: n.state.historyAction, navigator: o },
        n.state.initialized ? C.createElement(tf, null) : t
      )
    )
  );
}
function Yw(e) {
  let { basename: t, children: n, initialEntries: r, initialIndex: o } = e,
    i = C.useRef();
  i.current == null && (i.current = Gm({ initialEntries: r, initialIndex: o, v5Compat: !0 }));
  let l = i.current,
    [a, u] = C.useState({ action: l.action, location: l.location });
  return (
    C.useLayoutEffect(() => l.listen(u), [l]),
    C.createElement(ef, { basename: t, children: n, location: a.location, navigationType: a.action, navigator: l })
  );
}
function Xw(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  Ln() || N(!1);
  let i = C.useContext(gi),
    l = sv();
  return (
    C.useEffect(() => {
      (i && i.navigation.state !== 'idle') || l(t, { replace: n, state: r, relative: o });
    }),
    null
  );
}
function Zw(e) {
  return fv(e.context);
}
function qc(e) {
  N(!1);
}
function ef(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = ve.Pop,
    navigator: i,
    static: l = !1,
  } = e;
  Ln() && N(!1);
  let a = t.replace(/^\/*/, '/'),
    u = C.useMemo(() => ({ basename: a, navigator: i, static: l }), [a, i, l]);
  typeof r == 'string' && (r = Tt(r));
  let { pathname: s = '/', search: d = '', hash: h = '', state: c = null, key: g = 'default' } = r,
    y = C.useMemo(() => {
      let m = Jm(s, a);
      return m == null ? null : { pathname: m, search: d, hash: h, state: c, key: g };
    }, [a, s, d, h, c, g]);
  return y == null
    ? null
    : C.createElement(
        yi.Provider,
        { value: u },
        C.createElement(oo.Provider, { children: n, value: { location: y, navigationType: o } })
      );
}
function tf(e) {
  let { children: t, location: n } = e,
    r = C.useContext(wa),
    o = r && !t ? r.router.routes : ii(t);
  return pv(o, n);
}
function Jw(e) {
  let { children: t, errorElement: n, resolve: r } = e;
  return C.createElement(eS, { resolve: r, errorElement: n }, C.createElement(tS, null, t));
}
var nt;
(function (e) {
  (e[(e.pending = 0)] = 'pending'), (e[(e.success = 1)] = 'success'), (e[(e.error = 2)] = 'error');
})(nt || (nt = {}));
const qw = new Promise(() => {});
class eS extends C.Component {
  constructor(t) {
    super(t), (this.state = { error: null });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, n) {
    console.error('<Await> caught the following error during render', t, n);
  }
  render() {
    let { children: t, errorElement: n, resolve: r } = this.props,
      o = null,
      i = nt.pending;
    if (!(r instanceof Promise))
      (i = nt.success),
        (o = Promise.resolve()),
        Object.defineProperty(o, '_tracked', { get: () => !0 }),
        Object.defineProperty(o, '_data', { get: () => r });
    else if (this.state.error) {
      i = nt.error;
      let l = this.state.error;
      (o = Promise.reject().catch(() => {})),
        Object.defineProperty(o, '_tracked', { get: () => !0 }),
        Object.defineProperty(o, '_error', { get: () => l });
    } else
      r._tracked
        ? ((o = r), (i = o._error !== void 0 ? nt.error : o._data !== void 0 ? nt.success : nt.pending))
        : ((i = nt.pending),
          Object.defineProperty(r, '_tracked', { get: () => !0 }),
          (o = r.then(
            (l) => Object.defineProperty(r, '_data', { get: () => l }),
            (l) => Object.defineProperty(r, '_error', { get: () => l })
          )));
    if (i === nt.error && o._error instanceof Bl) throw qw;
    if (i === nt.error && !n) throw o._error;
    if (i === nt.error) return C.createElement(Hl.Provider, { value: o, children: n });
    if (i === nt.success) return C.createElement(Hl.Provider, { value: o, children: t });
    throw o;
  }
}
function tS(e) {
  let { children: t } = e,
    n = gv();
  return typeof t == 'function' ? t(n) : C.createElement(C.Fragment, null, t);
}
function ii(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, o) => {
      if (!C.isValidElement(r)) return;
      if (r.type === C.Fragment) {
        n.push.apply(n, ii(r.props.children, t));
        return;
      }
      r.type !== qc && N(!1), !r.props.index || !r.props.children || N(!1);
      let i = [...t, o],
        l = {
          id: r.props.id || i.join('-'),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (l.children = ii(r.props.children, i)), n.push(l);
    }),
    n
  );
}
function nS(e) {
  return hv(e);
}
function nf(e) {
  return e.map((t) => {
    let n = Wl({}, t);
    return (
      n.hasErrorBoundary == null && (n.hasErrorBoundary = n.errorElement != null),
      n.children && (n.children = nf(n.children)),
      n
    );
  });
}
function rS(e, t) {
  return fw({
    basename: t == null ? void 0 : t.basename,
    history: Gm({
      initialEntries: t == null ? void 0 : t.initialEntries,
      initialIndex: t == null ? void 0 : t.initialIndex,
    }),
    hydrationData: t == null ? void 0 : t.hydrationData,
    routes: nf(e),
  }).initialize();
}
const oS = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Await: Jw,
        MemoryRouter: Yw,
        Navigate: Xw,
        Outlet: Zw,
        Route: qc,
        Router: ef,
        RouterProvider: Gw,
        Routes: tf,
        UNSAFE_DataRouterContext: wa,
        UNSAFE_DataRouterStateContext: gi,
        UNSAFE_DataStaticRouterContext: av,
        UNSAFE_LocationContext: oo,
        UNSAFE_NavigationContext: yi,
        UNSAFE_RouteContext: Ft,
        UNSAFE_enhanceManualRouteObjects: nf,
        createMemoryRouter: rS,
        createRoutesFromChildren: ii,
        createRoutesFromElements: ii,
        renderMatches: nS,
        useActionData: Kw,
        useAsyncError: Qw,
        useAsyncValue: gv,
        useHref: Aw,
        useInRouterContext: Ln,
        useLoaderData: Hw,
        useLocation: wi,
        useMatch: $w,
        useMatches: Ww,
        useNavigate: sv,
        useNavigation: Uw,
        useNavigationType: Lw,
        useOutlet: fv,
        useOutletContext: Mw,
        useParams: Dw,
        useResolvedPath: dv,
        useRevalidator: Bw,
        useRouteError: vv,
        useRouteLoaderData: Vw,
        useRoutes: pv,
        AbortedDeferredError: Bl,
        get NavigationType() {
          return ve;
        },
        createPath: Tn,
        defer: tw,
        generatePath: H1,
        isRouteErrorResponse: Jc,
        json: J1,
        matchPath: Yc,
        matchRoutes: Pr,
        parsePath: Tt,
        redirect: nw,
        resolvePath: qm,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  iS = () =>
    ta('section', {
      children: [se('h1', { children: 'Sinapsis Base Project' }), se('p', { children: 'Secondary content' })],
    });
var Ws = {},
  lS = {
    get exports() {
      return Ws;
    },
    set exports(e) {
      Ws = e;
    },
  },
  aS = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  uS = aS,
  sS = uS;
function yv() {}
function wv() {}
wv.resetWarningCache = yv;
var cS = function () {
  function e(r, o, i, l, a, u) {
    if (u !== sS) {
      var s = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((s.name = 'Invariant Violation'), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: wv,
    resetWarningCache: yv,
  };
  return (n.PropTypes = n), n;
};
lS.exports = cS();
var Yr = Zt.createContext(null);
function fS(e) {
  e();
}
var Sv = fS,
  dS = function (t) {
    return (Sv = t);
  },
  pS = function () {
    return Sv;
  },
  Jd = { notify: function () {} };
function hS() {
  var e = pS(),
    t = null,
    n = null;
  return {
    clear: function () {
      (t = null), (n = null);
    },
    notify: function () {
      e(function () {
        for (var o = t; o; ) o.callback(), (o = o.next);
      });
    },
    get: function () {
      for (var o = [], i = t; i; ) o.push(i), (i = i.next);
      return o;
    },
    subscribe: function (o) {
      var i = !0,
        l = (n = { callback: o, next: null, prev: n });
      return (
        l.prev ? (l.prev.next = l) : (t = l),
        function () {
          !i ||
            t === null ||
            ((i = !1), l.next ? (l.next.prev = l.prev) : (n = l.prev), l.prev ? (l.prev.next = l.next) : (t = l.next));
        }
      );
    },
  };
}
var mS = (function () {
    function e(n, r) {
      (this.store = n),
        (this.parentSub = r),
        (this.unsubscribe = null),
        (this.listeners = Jd),
        (this.handleChangeWrapper = this.handleChangeWrapper.bind(this));
    }
    var t = e.prototype;
    return (
      (t.addNestedSub = function (r) {
        return this.trySubscribe(), this.listeners.subscribe(r);
      }),
      (t.notifyNestedSubs = function () {
        this.listeners.notify();
      }),
      (t.handleChangeWrapper = function () {
        this.onStateChange && this.onStateChange();
      }),
      (t.isSubscribed = function () {
        return Boolean(this.unsubscribe);
      }),
      (t.trySubscribe = function () {
        this.unsubscribe ||
          ((this.unsubscribe = this.parentSub
            ? this.parentSub.addNestedSub(this.handleChangeWrapper)
            : this.store.subscribe(this.handleChangeWrapper)),
          (this.listeners = hS()));
      }),
      (t.tryUnsubscribe = function () {
        this.unsubscribe &&
          (this.unsubscribe(), (this.unsubscribe = null), this.listeners.clear(), (this.listeners = Jd));
      }),
      e
    );
  })(),
  vS =
    typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u'
      ? C.useLayoutEffect
      : C.useEffect;
function gS(e) {
  var t = e.store,
    n = e.context,
    r = e.children,
    o = C.useMemo(
      function () {
        var a = new mS(t);
        return (a.onStateChange = a.notifyNestedSubs), { store: t, subscription: a };
      },
      [t]
    ),
    i = C.useMemo(
      function () {
        return t.getState();
      },
      [t]
    );
  vS(
    function () {
      var a = o.subscription;
      return (
        a.trySubscribe(),
        i !== t.getState() && a.notifyNestedSubs(),
        function () {
          a.tryUnsubscribe(), (a.onStateChange = null);
        }
      );
    },
    [o, i]
  );
  var l = n || Yr;
  return Zt.createElement(l.Provider, { value: o }, r);
}
var Hs = {},
  yS = {
    get exports() {
      return Hs;
    },
    set exports(e) {
      Hs = e;
    },
  },
  J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var be = typeof Symbol == 'function' && Symbol.for,
  rf = be ? Symbol.for('react.element') : 60103,
  of = be ? Symbol.for('react.portal') : 60106,
  Sa = be ? Symbol.for('react.fragment') : 60107,
  xa = be ? Symbol.for('react.strict_mode') : 60108,
  Ea = be ? Symbol.for('react.profiler') : 60114,
  ka = be ? Symbol.for('react.provider') : 60109,
  Ca = be ? Symbol.for('react.context') : 60110,
  lf = be ? Symbol.for('react.async_mode') : 60111,
  _a = be ? Symbol.for('react.concurrent_mode') : 60111,
  Oa = be ? Symbol.for('react.forward_ref') : 60112,
  Pa = be ? Symbol.for('react.suspense') : 60113,
  wS = be ? Symbol.for('react.suspense_list') : 60120,
  Ta = be ? Symbol.for('react.memo') : 60115,
  ba = be ? Symbol.for('react.lazy') : 60116,
  SS = be ? Symbol.for('react.block') : 60121,
  xS = be ? Symbol.for('react.fundamental') : 60117,
  ES = be ? Symbol.for('react.responder') : 60118,
  kS = be ? Symbol.for('react.scope') : 60119;
function ft(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case rf:
        switch (((e = e.type), e)) {
          case lf:
          case _a:
          case Sa:
          case Ea:
          case xa:
          case Pa:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ca:
              case Oa:
              case ba:
              case Ta:
              case ka:
                return e;
              default:
                return t;
            }
        }
      case of:
        return t;
    }
  }
}
function xv(e) {
  return ft(e) === _a;
}
J.AsyncMode = lf;
J.ConcurrentMode = _a;
J.ContextConsumer = Ca;
J.ContextProvider = ka;
J.Element = rf;
J.ForwardRef = Oa;
J.Fragment = Sa;
J.Lazy = ba;
J.Memo = Ta;
J.Portal = of;
J.Profiler = Ea;
J.StrictMode = xa;
J.Suspense = Pa;
J.isAsyncMode = function (e) {
  return xv(e) || ft(e) === lf;
};
J.isConcurrentMode = xv;
J.isContextConsumer = function (e) {
  return ft(e) === Ca;
};
J.isContextProvider = function (e) {
  return ft(e) === ka;
};
J.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === rf;
};
J.isForwardRef = function (e) {
  return ft(e) === Oa;
};
J.isFragment = function (e) {
  return ft(e) === Sa;
};
J.isLazy = function (e) {
  return ft(e) === ba;
};
J.isMemo = function (e) {
  return ft(e) === Ta;
};
J.isPortal = function (e) {
  return ft(e) === of;
};
J.isProfiler = function (e) {
  return ft(e) === Ea;
};
J.isStrictMode = function (e) {
  return ft(e) === xa;
};
J.isSuspense = function (e) {
  return ft(e) === Pa;
};
J.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Sa ||
    e === _a ||
    e === Ea ||
    e === xa ||
    e === Pa ||
    e === wS ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === ba ||
        e.$$typeof === Ta ||
        e.$$typeof === ka ||
        e.$$typeof === Ca ||
        e.$$typeof === Oa ||
        e.$$typeof === xS ||
        e.$$typeof === ES ||
        e.$$typeof === kS ||
        e.$$typeof === SS))
  );
};
J.typeOf = ft;
(function (e) {
  e.exports = J;
})(yS);
var Ev = Hs,
  CS = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  _S = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  kv = {};
kv[Ev.ForwardRef] = CS;
kv[Ev.Memo] = _S;
var qd = {},
  OS = {
    get exports() {
      return qd;
    },
    set exports(e) {
      qd = e;
    },
  },
  q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Re = typeof Symbol == 'function' && Symbol.for,
  af = Re ? Symbol.for('react.element') : 60103,
  uf = Re ? Symbol.for('react.portal') : 60106,
  Ra = Re ? Symbol.for('react.fragment') : 60107,
  Aa = Re ? Symbol.for('react.strict_mode') : 60108,
  La = Re ? Symbol.for('react.profiler') : 60114,
  $a = Re ? Symbol.for('react.provider') : 60109,
  Ma = Re ? Symbol.for('react.context') : 60110,
  sf = Re ? Symbol.for('react.async_mode') : 60111,
  Da = Re ? Symbol.for('react.concurrent_mode') : 60111,
  Ia = Re ? Symbol.for('react.forward_ref') : 60112,
  Na = Re ? Symbol.for('react.suspense') : 60113,
  PS = Re ? Symbol.for('react.suspense_list') : 60120,
  ja = Re ? Symbol.for('react.memo') : 60115,
  za = Re ? Symbol.for('react.lazy') : 60116,
  TS = Re ? Symbol.for('react.block') : 60121,
  bS = Re ? Symbol.for('react.fundamental') : 60117,
  RS = Re ? Symbol.for('react.responder') : 60118,
  AS = Re ? Symbol.for('react.scope') : 60119;
function dt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case af:
        switch (((e = e.type), e)) {
          case sf:
          case Da:
          case Ra:
          case La:
          case Aa:
          case Na:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ma:
              case Ia:
              case za:
              case ja:
              case $a:
                return e;
              default:
                return t;
            }
        }
      case uf:
        return t;
    }
  }
}
function Cv(e) {
  return dt(e) === Da;
}
q.AsyncMode = sf;
q.ConcurrentMode = Da;
q.ContextConsumer = Ma;
q.ContextProvider = $a;
q.Element = af;
q.ForwardRef = Ia;
q.Fragment = Ra;
q.Lazy = za;
q.Memo = ja;
q.Portal = uf;
q.Profiler = La;
q.StrictMode = Aa;
q.Suspense = Na;
q.isAsyncMode = function (e) {
  return Cv(e) || dt(e) === sf;
};
q.isConcurrentMode = Cv;
q.isContextConsumer = function (e) {
  return dt(e) === Ma;
};
q.isContextProvider = function (e) {
  return dt(e) === $a;
};
q.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === af;
};
q.isForwardRef = function (e) {
  return dt(e) === Ia;
};
q.isFragment = function (e) {
  return dt(e) === Ra;
};
q.isLazy = function (e) {
  return dt(e) === za;
};
q.isMemo = function (e) {
  return dt(e) === ja;
};
q.isPortal = function (e) {
  return dt(e) === uf;
};
q.isProfiler = function (e) {
  return dt(e) === La;
};
q.isStrictMode = function (e) {
  return dt(e) === Aa;
};
q.isSuspense = function (e) {
  return dt(e) === Na;
};
q.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ra ||
    e === Da ||
    e === La ||
    e === Aa ||
    e === Na ||
    e === PS ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === za ||
        e.$$typeof === ja ||
        e.$$typeof === $a ||
        e.$$typeof === Ma ||
        e.$$typeof === Ia ||
        e.$$typeof === bS ||
        e.$$typeof === RS ||
        e.$$typeof === AS ||
        e.$$typeof === TS))
  );
};
q.typeOf = dt;
(function (e) {
  e.exports = q;
})(OS);
function LS(e, t, n) {
  return (
    t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
  );
}
function ep(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function tp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ep(Object(n), !0).forEach(function (r) {
          LS(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ep(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Le(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var np = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  ju = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  li = {
    INIT: '@@redux/INIT' + ju(),
    REPLACE: '@@redux/REPLACE' + ju(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + ju();
    },
  };
function $S(e) {
  if (typeof e != 'object' || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Fa(e, t, n) {
  var r;
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Le(0));
  if ((typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)), typeof n < 'u')) {
    if (typeof n != 'function') throw new Error(Le(1));
    return n(Fa)(e, t);
  }
  if (typeof e != 'function') throw new Error(Le(2));
  var o = e,
    i = t,
    l = [],
    a = l,
    u = !1;
  function s() {
    a === l && (a = l.slice());
  }
  function d() {
    if (u) throw new Error(Le(3));
    return i;
  }
  function h(m) {
    if (typeof m != 'function') throw new Error(Le(4));
    if (u) throw new Error(Le(5));
    var S = !0;
    return (
      s(),
      a.push(m),
      function () {
        if (S) {
          if (u) throw new Error(Le(6));
          (S = !1), s();
          var f = a.indexOf(m);
          a.splice(f, 1), (l = null);
        }
      }
    );
  }
  function c(m) {
    if (!$S(m)) throw new Error(Le(7));
    if (typeof m.type > 'u') throw new Error(Le(8));
    if (u) throw new Error(Le(9));
    try {
      (u = !0), (i = o(i, m));
    } finally {
      u = !1;
    }
    for (var S = (l = a), p = 0; p < S.length; p++) {
      var f = S[p];
      f();
    }
    return m;
  }
  function g(m) {
    if (typeof m != 'function') throw new Error(Le(10));
    (o = m), c({ type: li.REPLACE });
  }
  function y() {
    var m,
      S = h;
    return (
      (m = {
        subscribe: function (f) {
          if (typeof f != 'object' || f === null) throw new Error(Le(11));
          function v() {
            f.next && f.next(d());
          }
          v();
          var w = S(v);
          return { unsubscribe: w };
        },
      }),
      (m[np] = function () {
        return this;
      }),
      m
    );
  }
  return c({ type: li.INIT }), (r = { dispatch: c, subscribe: h, getState: d, replaceReducer: g }), (r[np] = y), r;
}
var MS = Fa;
function DS(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: li.INIT });
    if (typeof r > 'u') throw new Error(Le(12));
    if (typeof n(void 0, { type: li.PROBE_UNKNOWN_ACTION() }) > 'u') throw new Error(Le(13));
  });
}
function _v(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r];
    typeof e[o] == 'function' && (n[o] = e[o]);
  }
  var i = Object.keys(n),
    l;
  try {
    DS(n);
  } catch (a) {
    l = a;
  }
  return function (u, s) {
    if ((u === void 0 && (u = {}), l)) throw l;
    for (var d = !1, h = {}, c = 0; c < i.length; c++) {
      var g = i[c],
        y = n[g],
        m = u[g],
        S = y(m, s);
      if (typeof S > 'u') throw (s && s.type, new Error(Le(14)));
      (h[g] = S), (d = d || S !== m);
    }
    return (d = d || i.length !== Object.keys(u).length), d ? h : u;
  };
}
function rp(e, t) {
  return function () {
    return t(e.apply(this, arguments));
  };
}
function IS(e, t) {
  if (typeof e == 'function') return rp(e, t);
  if (typeof e != 'object' || e === null) throw new Error(Le(16));
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == 'function' && (n[r] = rp(o, t));
  }
  return n;
}
function Ov() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, o) {
        return function () {
          return r(o.apply(void 0, arguments));
        };
      });
}
function Pv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        i = function () {
          throw new Error(Le(15));
        },
        l = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        a = t.map(function (u) {
          return u(l);
        });
      return (i = Ov.apply(void 0, a)(o.dispatch)), tp(tp({}, o), {}, { dispatch: i });
    };
  };
}
const NS = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      __DO_NOT_USE__ActionTypes: li,
      applyMiddleware: Pv,
      bindActionCreators: IS,
      combineReducers: _v,
      compose: Ov,
      createStore: Fa,
      legacy_createStore: MS,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function jS() {
  var e = C.useContext(Yr);
  return e;
}
function Tv(e) {
  e === void 0 && (e = Yr);
  var t =
    e === Yr
      ? jS
      : function () {
          return C.useContext(e);
        };
  return function () {
    var r = t(),
      o = r.store;
    return o;
  };
}
var zS = Tv();
function FS(e) {
  e === void 0 && (e = Yr);
  var t = e === Yr ? zS : Tv(e);
  return function () {
    var r = t();
    return r.dispatch;
  };
}
var US = FS();
dS(vl.unstable_batchedUpdates);
const bv = '@@router/CALL_HISTORY_METHOD',
  Ua = '@@router/LOCATION_CHANGE',
  zu = (e, t) => ({ type: Ua, payload: { location: e, action: t } });
function nr(e) {
  return (...t) => ({ type: bv, payload: { method: e, args: t } });
}
const Rv = nr('push'),
  BS = nr('replace'),
  WS = nr('go'),
  HS = nr('goBack'),
  VS = nr('goForward'),
  KS = nr('back'),
  QS = nr('forward');
function op(e, t) {
  return typeof e == 'string' && !e.startsWith(t)
    ? t + e
    : typeof e == 'object' && e.pathname && !e.pathname.startsWith(t)
    ? Object.assign(Object.assign({}, e), { pathname: t + e.pathname })
    : e;
}
const GS =
    ({ history: e, showHistoryAction: t, basename: n }) =>
    () =>
    (r) =>
    (o) => {
      if (o.type !== bv) return r(o);
      const i = o.payload.method,
        l = o.payload.args;
      switch (i) {
        case 'push': {
          let a = l;
          n && l.length > 0 && (a = [op(l[0], n), ...l.slice(1)]), e.push(...a);
          break;
        }
        case 'replace': {
          let a = l;
          n && l.length > 0 && (a = [op(l[0], n), ...l.slice(1)]), e.replace(...a);
          break;
        }
        case 'go':
          e.go(...l);
          break;
        case 'back':
        case 'goBack':
          e.goBack && e.goBack(...l), e.back && e.back(...l);
          break;
        case 'forward':
        case 'goForward':
          e.goForward && e.goForward(...l), e.forward && e.forward(...l);
          break;
      }
      if (t) return r(o);
    },
  YS = ({ savePreviousLocations: e = 0, basename: t }) => {
    const n = { location: null, action: null, basename: t },
      r = isNaN(e) ? 0 : e;
    return (
      r && (n.previousLocations = []),
      (o = n, { type: i, payload: l } = {}) => {
        if (i === Ua) {
          const { location: a, action: u } = l || {},
            s = r ? [{ location: a, action: u }, ...o.previousLocations.slice(0, r)] : void 0;
          return Object.assign(Object.assign({}, o), { location: a, action: u, previousLocations: s });
        }
        return o;
      }
    );
  },
  XS = ({
    history: e,
    routerReducerKey: t = 'router',
    reduxTravelling: n = !1,
    showHistoryAction: r = !1,
    selectRouterState: o,
    savePreviousLocations: i = 0,
    batch: l,
    reachGlobalHistory: a,
    basename: u,
  }) => {
    let s = !1;
    const d = (S, p, f) => (s ? S({ location: p, action: f }) : S(p, f));
    typeof l != 'function' &&
      (l = (S) => {
        S();
      }),
      typeof o != 'function' && (o = (S) => S[t]);
    const h = YS({ savePreviousLocations: i, basename: u }),
      c = GS({ history: e, showHistoryAction: r, basename: u });
    let g = !1;
    const y = (S) => {
      const p = (f, v) => f.pathname === v.pathname && f.search === v.search && f.hash === v.hash;
      return S.subscribe(() => {
        const f = o(S.getState()).location,
          v = e.location;
        f && v && !p(f, v) && ((g = !0), e.push({ pathname: f.pathname, search: f.search, hash: f.hash }));
      });
    };
    return {
      routerReducer: h,
      routerMiddleware: c,
      createReduxHistory: (S) => {
        let p = [];
        return (
          S.dispatch(zu(e.location, e.action)),
          n && y(S),
          e.listen((f, v) => {
            if ((f.location && ((v = f.action), (f = f.location), (s = !0)), g)) {
              g = !1;
              const w = o(S.getState());
              p.forEach((E) => d(E, w.location, w.action));
              return;
            }
            l(() => {
              S.dispatch(zu(f, v));
              const w = o(S.getState());
              p.forEach((E) => d(E, w.location, w.action));
            });
          }),
          a &&
            a.listen(({ location: f, action: v }) => {
              if (v !== 'POP') {
                const w = { pathname: f.pathname, search: f.search, hash: f.hash, key: f.key, state: f.state };
                l(() => {
                  S.dispatch(zu(w, v));
                  const E = o(S.getState());
                  p.forEach((T) => d(T, E.location, E.action));
                });
              }
            }),
          {
            block: e.block,
            createHref: e.createHref,
            push: (...f) => S.dispatch(Rv(...f)),
            replace: (...f) => S.dispatch(BS(...f)),
            go: (...f) => S.dispatch(WS(...f)),
            goBack: (...f) => S.dispatch(HS(...f)),
            goForward: (...f) => S.dispatch(VS(...f)),
            back: (...f) => S.dispatch(KS(...f)),
            forward: (...f) => S.dispatch(QS(...f)),
            listen: (f) => (
              p.indexOf(f) < 0 && p.push(f),
              () => {
                p = p.filter((v) => v !== f);
              }
            ),
            get location() {
              return o(S.getState()).location;
            },
            get action() {
              return o(S.getState()).action;
            },
            get length() {
              return e.length;
            },
            get listenObject() {
              return s;
            },
          }
        );
      },
    };
  },
  ZS = () => {
    const e = US();
    return ta('section', {
      children: [
        se('h1', { children: 'Sinapsis Base Project' }),
        se('p', { children: 'Initial content' }),
        se('button', {
          onClick: () => {
            e(Rv('/another'));
          },
          children: 'click me',
        }),
      ],
    });
  },
  JS = [
    { path: '/', component: se(ZS, {}) },
    { path: '/another', component: se(iS, {}) },
  ];
function qS() {
  return se('div', {
    className: 'App',
    children: se(tf, { children: JS.map((e, t) => se(qc, { path: e.path, element: e.component }, t)) }),
  });
}
var Io = {},
  ex = {
    get exports() {
      return Io;
    },
    set exports(e) {
      Io = e;
    },
  };
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var tx = function (e) {
  return e != null && (Av(e) || nx(e) || !!e._isBuffer);
};
function Av(e) {
  return !!e.constructor && typeof e.constructor.isBuffer == 'function' && e.constructor.isBuffer(e);
}
function nx(e) {
  return typeof e.readFloatLE == 'function' && typeof e.slice == 'function' && Av(e.slice(0, 0));
}
var Lv = tx;
ex.exports = Vl;
Vl.flatten = Vl;
Vl.unflatten = $v;
function Vl(e, t) {
  t = t || {};
  var n = t.delimiter || '.',
    r = t.maxDepth,
    o = {};
  function i(l, a, u) {
    (u = u || 1),
      Object.keys(l).forEach(function (s) {
        var d = l[s],
          h = t.safe && Array.isArray(d),
          c = Object.prototype.toString.call(d),
          g = Lv(d),
          y = c === '[object Object]' || c === '[object Array]',
          m = a ? a + n + s : s;
        if (!h && !g && y && Object.keys(d).length && (!t.maxDepth || u < r)) return i(d, m, u + 1);
        o[m] = d;
      });
  }
  return i(e), o;
}
function $v(e, t) {
  t = t || {};
  var n = t.delimiter || '.',
    r = t.overwrite || !1,
    o = {},
    i = Lv(e);
  if (i || Object.prototype.toString.call(e) !== '[object Object]') return e;
  function l(a) {
    var u = Number(a);
    return isNaN(u) || a.indexOf('.') !== -1 ? a : u;
  }
  return (
    Object.keys(e).forEach(function (a) {
      for (var u = a.split(n), s = l(u.shift()), d = l(u[0]), h = o; d !== void 0; ) {
        if (s === '__proto__') return;
        var c = Object.prototype.toString.call(h[s]),
          g = c === '[object Object]' || c === '[object Array]';
        if (!r && !g && typeof h[s] < 'u') return;
        ((r && !g) || (!r && h[s] == null)) && (h[s] = typeof d == 'number' && !t.object ? [] : {}),
          (h = h[s]),
          u.length > 0 && ((s = l(u.shift())), (d = l(u[0])));
      }
      h[s] = $v(e[a], t);
    }),
    o
  );
}
function rx(e, t) {
  return e === t;
}
function ox(e, t, n) {
  if (t === null || n === null || t.length !== n.length) return !1;
  for (var r = t.length, o = 0; o < r; o++) if (!e(t[o], n[o])) return !1;
  return !0;
}
function Ba(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rx,
    n = null,
    r = null;
  return function () {
    return ox(t, n, arguments) || (r = e.apply(null, arguments)), (n = arguments), r;
  };
}
function ix(e) {
  var t = Array.isArray(e[0]) ? e[0] : e;
  if (
    !t.every(function (r) {
      return typeof r == 'function';
    })
  ) {
    var n = t
      .map(function (r) {
        return typeof r;
      })
      .join(', ');
    throw new Error(
      'Selector creators expect all input-selectors to be functions, ' +
        ('instead received the following types: [' + n + ']')
    );
  }
  return t;
}
function Mv(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return function () {
    for (var o = arguments.length, i = Array(o), l = 0; l < o; l++) i[l] = arguments[l];
    var a = 0,
      u = i.pop(),
      s = ix(i),
      d = e.apply(
        void 0,
        [
          function () {
            return a++, u.apply(null, arguments);
          },
        ].concat(n)
      ),
      h = Ba(function () {
        for (var c = [], g = s.length, y = 0; y < g; y++) c.push(s[y].apply(null, arguments));
        return d.apply(null, c);
      });
    return (
      (h.resultFunc = u),
      (h.recomputations = function () {
        return a;
      }),
      (h.resetRecomputations = function () {
        return (a = 0);
      }),
      h
    );
  };
}
var Dv = Mv(Ba);
function lx(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
    return n;
  } else return Array.from(e);
}
var ip = function (t) {
    var n = t.translation,
      r = t.data,
      o = t.renderInnerHtml,
      i = ax(n, r);
    if (typeof i == 'string')
      return o === !0 && lp(i) ? Zt.createElement('span', { dangerouslySetInnerHTML: { __html: i } }) : i;
    var l = !0,
      a = !1,
      u = void 0;
    try {
      for (var s = i[Symbol.iterator](), d; !(l = (d = s.next()).done); l = !0) {
        var h = d.value;
        if (typeof h == 'string' && lp(h))
          return (
            fx(
              'HTML tags in the translation string are not supported when passing React components as arguments to the translation.'
            ),
            ''
          );
      }
    } catch (c) {
      (a = !0), (u = c);
    } finally {
      try {
        !l && s.return && s.return();
      } finally {
        if (a) throw u;
      }
    }
    return Zt.createElement.apply(Zt, ['span', null].concat(lx(i)));
  },
  lp = function (t) {
    var n = /(&[^\s]*;|<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[\^'">\s]+))?)+\s*|\s*)\/?>)/;
    return t.search(n) >= 0;
  },
  ax = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!t) return '';
    var r = '(\\${\\s*[^\\s}]+\\s*})',
      o = t
        .split(new RegExp(r, 'gmi'))
        .filter(function (i) {
          return !!i;
        })
        .map(function (i) {
          var l = void 0;
          for (var a in n) {
            if (l) break;
            var u = '\\${\\s*' + a + '\\s*}',
              s = new RegExp(u, 'gmi');
            s.test(i) && (l = n[a]);
          }
          return typeof l > 'u' ? i : l;
        });
    return o.some(function (i) {
      return Zt.isValidElement(i);
    })
      ? o
      : o.reduce(function (i, l) {
          return i + ('' + l);
        }, '');
  },
  ux = function (t, n) {
    return n
      .map(function (r) {
        return r.code;
      })
      .indexOf(t);
  },
  ap = function (t) {
    return Object.values
      ? Object.values(t).toString()
      : Object.keys(t)
          .map(function (n) {
            return t[n].toString();
          })
          .toString();
  },
  sx = function (t) {
    if (t.onMissingTranslation !== void 0 && typeof t.onMissingTranslation != 'function')
      throw new Error('react-localize-redux: an invalid onMissingTranslation function was provided.');
    if (t.renderToStaticMarkup !== !1 && typeof t.renderToStaticMarkup != 'function')
      throw new Error(`
      react-localize-redux: initialize option renderToStaticMarkup is invalid.
      Please see https://ryandrewjohnson.github.io/react-localize-redux-docs/#initialize.
    `);
    return t;
  },
  Iv = function (t, n, r) {
    if (!t) return {};
    for (var o = t.code, i = ux(o, n), l = Object.keys(r), a = l.length, u = {}, s = 0; s < a; s++) {
      var d = l[s];
      u[d] = r[d][i];
    }
    return u;
  },
  cx = function (t, n) {
    var r = void 0;
    function o() {
      var l = t.getState();
      l !== r && (n(r), (r = l));
    }
    var i = t.subscribe(o);
    return o(), i;
  },
  up = function (t, n, r, o) {
    for (
      var i = n.indexOf(t),
        l = i >= 0 ? r : {},
        a = Object.keys(l),
        u = a.length,
        s = {},
        d = function (g) {
          var y = a[g],
            m = n.map(function (S, p) {
              var f = o[y] || [];
              return p === i ? r[y] : f[p];
            });
          s[y] = m;
        },
        h = 0;
      h < u;
      h++
    )
      d(h);
    return s;
  },
  Vi = function (t, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0,
      o = n.split('.').filter(Boolean);
    return o.reduce(function (i, l) {
      return i && i[l] ? i[l] : r;
    }, t);
  },
  fx = function (t) {
    typeof console < 'u' && typeof console.error == 'function' && console.error(t);
    try {
      throw new Error(t);
    } catch {}
  },
  Ki =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        },
  _t =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    };
function dx(e, t, n) {
  return (
    t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
  );
}
function px(e, t) {
  var n = {};
  for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
  return n;
}
var Si = '@@localize/INITIALIZE',
  Nv = '@@localize/ADD_TRANSLATION',
  jv = '@@localize/ADD_TRANSLATION_FOR_LANGUAGE',
  zv = '@@localize/SET_ACTIVE_LANGUAGE';
function hx() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments[1];
  switch (t.type) {
    case Si:
      var n = t.payload.options || {};
      return t.payload.languages.map(function (r, o) {
        var i = function (a) {
          return n.defaultLanguage !== void 0 ? a === n.defaultLanguage : o === 0;
        };
        return typeof r == 'string' ? { code: r, active: i(r) } : _t({}, r, { active: i(r.code) });
      });
    case zv:
      return e.map(function (r) {
        return r.code === t.payload.languageCode ? _t({}, r, { active: !0 }) : _t({}, r, { active: !1 });
      });
    default:
      return e;
  }
}
function mx() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments[1],
    n = void 0,
    r = void 0;
  switch (t.type) {
    case Si:
      if (!t.payload.translation) return e;
      n = Io.flatten(t.payload.translation, { safe: !0 });
      var o = t.payload.options || {},
        i = typeof t.payload.languages[0] == 'string' ? t.payload.languages[0] : t.payload.languages[0].code,
        l = o.defaultLanguage || i,
        a = Object.keys(n).some(function (s) {
          return Array.isArray(n[s]);
        }),
        u = a ? n : up(l, t.languageCodes, n, e);
      return _t({}, e, u);
    case Nv:
      return (
        (r =
          t.payload.translationOptions && t.payload.translationOptions.translationTransform !== void 0
            ? t.payload.translationOptions.translationTransform(t.payload.translation || {}, t.languageCodes)
            : t.payload.translation),
        _t({}, e, Io.flatten(r, { safe: !0 }))
      );
    case jv:
      return (
        (n = Io.flatten(t.payload.translation, { safe: !0 })), _t({}, e, up(t.payload.language, t.languageCodes, n, e))
      );
    default:
      return e;
  }
}
function vx() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : cf,
    t = arguments[1];
  switch (t.type) {
    case Si:
      var n = t.payload.options || {},
        r = n.defaultLanguage || t.languageCodes[0];
      return _t({}, e, sx(n), { defaultLanguage: r });
    default:
      return e;
  }
}
var cf = {
    renderToStaticMarkup: !1,
    renderInnerHtml: !1,
    ignoreTranslateChildren: !1,
    defaultLanguage: '',
    onMissingTranslation: function (t) {
      return (
        t.translationId, t.languageCode, 'Missing translationId: ${ translationId } for language: ${ languageCode }'
      );
    },
  },
  gx = { languages: [], translations: {}, options: cf },
  No = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gx,
      n = arguments[1],
      r = hx(t.languages, n),
      o = r.map(function (i) {
        return i.code;
      });
    return {
      languages: r,
      translations: mx(t.translations, _t({}, n, { languageCodes: o })),
      options: vx(t.options, _t({}, n, { languageCodes: o })),
    };
  },
  Fv = function (t) {
    return { type: Si, payload: t };
  },
  yx = function (t, n) {
    return { type: Nv, payload: { translation: t, translationOptions: n } };
  },
  wx = function (t, n) {
    return { type: jv, payload: { translation: t, language: n } };
  },
  Sx = function (t) {
    return { type: zv, payload: { languageCode: t } };
  },
  Uv = function (t) {
    return t.translations;
  },
  Wa = function (t) {
    return t.languages;
  },
  Kl = function (t) {
    return t.options;
  },
  ai = function (t) {
    var n = Wa(t);
    return n.filter(function (r) {
      return r.active === !0;
    })[0];
  },
  Bv = Mv(Ba, function (e, t) {
    var n = (typeof e > 'u' ? 'undefined' : Ki(e)) === 'object' ? Object.keys(e).toString() : void 0,
      r = (typeof t > 'u' ? 'undefined' : Ki(t)) === 'object' ? Object.keys(t).toString() : void 0,
      o = (typeof e > 'u' ? 'undefined' : Ki(e)) === 'object' ? ap(e) : void 0,
      i = (typeof t > 'u' ? 'undefined' : Ki(t)) === 'object' ? ap(t) : void 0,
      l = n !== void 0 && o !== void 0 ? n + ' - ' + o : e,
      a = r !== void 0 && i !== void 0 ? r + ' - ' + i : t;
    return l === a;
  }),
  Vs = Bv(ai, Wa, Uv, Iv),
  xx = Bv(Wa, Uv, function (e, t) {
    return Ba(function (n) {
      return Iv({ code: n, active: !1 }, e, t);
    });
  }),
  Ex = Dv(Vs, xx, ai, Kl, function (e, t, n, r) {
    return function (o) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        a = r.defaultLanguage,
        u = px(r, ['defaultLanguage']),
        s = l.language,
        d = s !== void 0 ? t(s) : e,
        h = n && n.code === a ? e : t(a),
        c = s !== void 0 ? s : n && n.code,
        g = _t({}, u, l),
        y = function (S) {
          var p = d[S] !== void 0,
            f = h[S] !== void 0,
            v = f
              ? ip({ translation: h[S], data: i, renderInnerHtml: g.renderInnerHtml })
              : "No default translation found! Ensure you've added translations for your default langauge.",
            w = p ? d[S] : g.onMissingTranslation({ translationId: S, languageCode: c, defaultTranslation: v }),
            E = p ? i : { translationId: S, languageCode: c };
          return ip({ translation: w, data: E, languageCode: c, renderInnerHtml: g.renderInnerHtml });
        };
      if (typeof o == 'string') return y(o);
      if (Array.isArray(o))
        return o.reduce(function (m, S) {
          return _t({}, m, dx({}, S, y(S)));
        }, {});
      throw new Error('react-localize-redux: Invalid key passed to getTranslate.');
    };
  }),
  Ql = {},
  kx = {
    get exports() {
      return Ql;
    },
    set exports(e) {
      Ql = e;
    },
  },
  Gl = {},
  Cx = {
    get exports() {
      return Gl;
    },
    set exports(e) {
      Gl = e;
    },
  },
  sp = '__global_unique_id__',
  _x = function () {
    return (hl[sp] = (hl[sp] || 0) + 1);
  };
function Ha(e) {
  return function () {
    return e;
  };
}
var rr = function () {};
rr.thatReturns = Ha;
rr.thatReturnsFalse = Ha(!1);
rr.thatReturnsTrue = Ha(!0);
rr.thatReturnsNull = Ha(null);
rr.thatReturnsThis = function () {
  return this;
};
rr.thatReturnsArgument = function (e) {
  return e;
};
var Ox = rr,
  Px = Ox,
  Tx = Px,
  bx = Tx;
(function (e, t) {
  t.__esModule = !0;
  var n = C;
  u(n);
  var r = Ws,
    o = u(r),
    i = _x,
    l = u(i),
    a = bx;
  u(a);
  function u(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function s(p, f) {
    if (!(p instanceof f)) throw new TypeError('Cannot call a class as a function');
  }
  function d(p, f) {
    if (!p) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return f && (typeof f == 'object' || typeof f == 'function') ? f : p;
  }
  function h(p, f) {
    if (typeof f != 'function' && f !== null)
      throw new TypeError('Super expression must either be null or a function, not ' + typeof f);
    (p.prototype = Object.create(f && f.prototype, {
      constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 },
    })),
      f && (Object.setPrototypeOf ? Object.setPrototypeOf(p, f) : (p.__proto__ = f));
  }
  var c = 1073741823;
  function g(p, f) {
    return p === f ? p !== 0 || 1 / p === 1 / f : p !== p && f !== f;
  }
  function y(p) {
    var f = [];
    return {
      on: function (w) {
        f.push(w);
      },
      off: function (w) {
        f = f.filter(function (E) {
          return E !== w;
        });
      },
      get: function () {
        return p;
      },
      set: function (w, E) {
        (p = w),
          f.forEach(function (T) {
            return T(p, E);
          });
      },
    };
  }
  function m(p) {
    return Array.isArray(p) ? p[0] : p;
  }
  function S(p, f) {
    var v,
      w,
      E = '__create-react-context-' + (0, l.default)() + '__',
      T = (function (P) {
        h($, P);
        function $() {
          var A, M, te;
          s(this, $);
          for (var ye = arguments.length, H = Array(ye), _e = 0; _e < ye; _e++) H[_e] = arguments[_e];
          return (
            (te = ((A = ((M = d(this, P.call.apply(P, [this].concat(H)))), M)), (M.emitter = y(M.props.value)), A)),
            d(M, te)
          );
        }
        return (
          ($.prototype.getChildContext = function () {
            var M;
            return (M = {}), (M[E] = this.emitter), M;
          }),
          ($.prototype.componentWillReceiveProps = function (M) {
            if (this.props.value !== M.value) {
              var te = this.props.value,
                ye = M.value,
                H = void 0;
              g(te, ye)
                ? (H = 0)
                : ((H = typeof f == 'function' ? f(te, ye) : c), (H |= 0), H !== 0 && this.emitter.set(M.value, H));
            }
          }),
          ($.prototype.render = function () {
            return this.props.children;
          }),
          $
        );
      })(n.Component);
    T.childContextTypes = ((v = {}), (v[E] = o.default.object.isRequired), v);
    var x = (function (P) {
      h($, P);
      function $() {
        var A, M, te;
        s(this, $);
        for (var ye = arguments.length, H = Array(ye), _e = 0; _e < ye; _e++) H[_e] = arguments[_e];
        return (
          (te =
            ((A = ((M = d(this, P.call.apply(P, [this].concat(H)))), M)),
            (M.state = { value: M.getValue() }),
            (M.onUpdate = function (ir, $n) {
              var R = M.observedBits | 0;
              R & $n && M.setState({ value: M.getValue() });
            }),
            A)),
          d(M, te)
        );
      }
      return (
        ($.prototype.componentWillReceiveProps = function (M) {
          var te = M.observedBits;
          this.observedBits = te ?? c;
        }),
        ($.prototype.componentDidMount = function () {
          this.context[E] && this.context[E].on(this.onUpdate);
          var M = this.props.observedBits;
          this.observedBits = M ?? c;
        }),
        ($.prototype.componentWillUnmount = function () {
          this.context[E] && this.context[E].off(this.onUpdate);
        }),
        ($.prototype.getValue = function () {
          return this.context[E] ? this.context[E].get() : p;
        }),
        ($.prototype.render = function () {
          return m(this.props.children)(this.state.value);
        }),
        $
      );
    })(n.Component);
    return (x.contextTypes = ((w = {}), (w[E] = o.default.object), w)), { Provider: T, Consumer: x };
  }
  (t.default = S), (e.exports = t.default);
})(Cx, Gl);
(function (e, t) {
  t.__esModule = !0;
  var n = C,
    r = l(n),
    o = Gl,
    i = l(o);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  (t.default = r.default.createContext || i.default), (e.exports = t.default);
})(kx, Ql);
const Rx = jp(Ql);
var Ax = function (t) {
    return function (n) {
      return t(Fv(n));
    };
  },
  Lx = function (t) {
    return function (n) {
      return t(yx(n));
    };
  },
  $x = function (t) {
    return function (n, r) {
      return t(wx(n, r));
    };
  },
  Mx = function (t) {
    return function (n) {
      return t(Sx(n));
    };
  },
  Wv = function (t) {
    return Dv(Ex, Wa, ai, Kl, function (n, r, o, i) {
      var l = i.defaultLanguage || (r[0] && r[0].code),
        a = i.renderToStaticMarkup,
        u = i.ignoreTranslateChildren !== void 0 ? i.ignoreTranslateChildren : cf.ignoreTranslateChildren;
      return {
        translate: n,
        languages: r,
        defaultLanguage: l,
        activeLanguage: o,
        initialize: Ax(t),
        addTranslation: Lx(t),
        addTranslationForLanguage: $x(t),
        setActiveLanguage: Mx(t),
        renderToStaticMarkup: a,
        ignoreTranslateChildren: u,
      };
    });
  },
  Dx = No(void 0, {}),
  Ix = Wv(function () {})(Dx),
  Nx = Rx(Ix),
  jx = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })();
function zx(e, t, n) {
  return (
    t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
  );
}
function Fx(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function Ux(e, t) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == 'object' || typeof t == 'function') ? t : e;
}
function Bx(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
(function (e) {
  Bx(t, e);
  function t() {
    return Fx(this, t), Ux(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
  }
  return (
    jx(t, [
      {
        key: 'componentDidMount',
        value: function () {
          this.addDefaultTranslation();
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (r) {
          var o = this.props.id && r.id !== this.props.id,
            i = !Vi(r, 'context.defaultLanguage') && !Vi(r, 'options.language'),
            l = Vi(this.props, 'context.defaultLanguage') || Vi(this.props, 'options.language'),
            a = i && l;
          (o || a) && this.addDefaultTranslation();
        },
      },
      {
        key: 'addDefaultTranslation',
        value: function () {
          var r = this.props,
            o = r.context,
            i = r.id,
            l = r.children,
            a = r.options,
            u = a === void 0 ? {} : a,
            s = u.language || o.defaultLanguage,
            d = function (E) {
              return E;
            },
            h = o.renderToStaticMarkup || d,
            c = i !== void 0,
            g = s !== void 0,
            y = l !== void 0,
            m = typeof l == 'function',
            S = u.ignoreTranslateChildren !== void 0 ? u.ignoreTranslateChildren : o.ignoreTranslateChildren,
            p = y && c && g,
            f = p && !m && !S;
          if (f) {
            var v = h(l);
            o.addTranslationForLanguage && o.addTranslationForLanguage(zx({}, i, v), s);
          }
        },
      },
      {
        key: 'renderChildren',
        value: function () {
          var r = this.props,
            o = r.context,
            i = r.id,
            l = i === void 0 ? '' : i,
            a = r.options,
            u = r.data;
          return typeof this.props.children == 'function'
            ? this.props.children(o)
            : o.translate && o.translate(l, u, a);
        },
      },
      {
        key: 'render',
        value: function () {
          return this.renderChildren();
        },
      },
    ]),
    t
  );
})(C.Component);
var Wx = (function () {
  function e(t, n) {
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        'value' in o && (o.writable = !0),
        Object.defineProperty(t, o.key, o);
    }
  }
  return function (t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
})();
function Hx(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function Vx(e, t) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == 'object' || typeof t == 'function') ? t : e;
}
function Kx(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Qx = (function (e) {
  Kx(t, e);
  function t(n) {
    Hx(this, t);
    var r = Vx(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n)),
      o = r.props.store ? r.props.store.dispatch : r.dispatch.bind(r);
    r.getContextPropsSelector = Wv(o);
    var i = r.props.initialize !== void 0 ? No(void 0, { type: Si, payload: r.props.initialize }) : No(void 0, {});
    return (r.state = { localize: i }), r;
  }
  return (
    Wx(t, [
      {
        key: 'componentDidMount',
        value: function () {
          this.initExternalStore(), this.subscribeToExternalStore();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.unsubscribeFromStore && this.unsubscribeFromStore();
        },
      },
      {
        key: 'initExternalStore',
        value: function () {
          var r = this.props,
            o = r.store,
            i = r.initialize;
          o && i && o.dispatch(Fv(i));
        },
      },
      {
        key: 'subscribeToExternalStore',
        value: function () {
          var r = this.props.store;
          r && (this.unsubscribeFromStore = cx(r, this.onStateDidChange.bind(this)));
        },
      },
      {
        key: 'onStateDidChange',
        value: function (r) {
          if (this.props.store) {
            var o =
                this.props.getState ||
                function (S) {
                  return S.localize;
                },
              i = r && o(r),
              l = o(this.props.store.getState()),
              a = r && ai(i),
              u = ai(l),
              s = r && Kl(i),
              d = Kl(l),
              h = r && Vs(i),
              c = Vs(l),
              g = (a && a.code) !== (u && u.code),
              y = s !== d,
              m = h !== c;
            (g || y || m) && this.setState({ localize: l });
          }
        },
      },
      {
        key: 'dispatch',
        value: function (r) {
          this.setState(function (o) {
            return { localize: No(o.localize, r) };
          });
        },
      },
      {
        key: 'render',
        value: function () {
          return (
            (this.contextProps = this.getContextPropsSelector(this.state.localize)),
            Zt.createElement(Nx.Provider, { value: this.contextProps }, this.props.children)
          );
        },
      },
    ]),
    t
  );
})(C.Component);
const Gx = { loggedIn: !1, newUser: !1 },
  Yx = '[Auth] Create Account',
  Xx = '[Auth] Create Account Success',
  Zx = '[Auth] Resend Code',
  Jx = '[Auth] Resend Code Success',
  qx = '[Auth] Login User Success',
  Fu = '[Auth] Google Login User Error',
  Hv = '[Auth] Logout User Success',
  eE = '[Auth] Start Forgot password',
  tE = '[Auth] Change password',
  nE = '[Auth] Change password Success',
  rE = (e = Gx, t) => {
    switch (t.type) {
      case qx:
        return { ...e, user: t.user, loggedIn: !0 };
      case Hv:
        return { ...e, user: void 0, loggedIn: !1, newUser: !1 };
      case Yx:
        return { ...e, registrationData: t.data, newUser: !0 };
      case Xx:
        return { ...e, loggedIn: !0 };
      case eE:
        return { ...e, registrationData: { ...(e.registrationData || {}), email: t.username, password: '' } };
      case tE:
        return { ...e, changePasswordSuccess: void 0 };
      case nE:
        return { ...e, changePasswordSuccess: !0 };
      case Zx:
        return { ...e, resendCodeSuccess: void 0 };
      case Jx:
        return { ...e, resendCodeSuccess: !0 };
      default:
        return e;
    }
  },
  Uu = { errors: {}, loading: {}, mobile: !1, smallScreen: !1, showBackdrop: !1 },
  Vv = '[UI] Show Error',
  oE = '[UI] Reset Error',
  Kv = '[UI] Start Loading',
  Qv = '[UI] Finish Loading',
  iE = '[UI] Close Dialog',
  lE = '[UI] Destroy Dialog',
  aE = '[UI] Change mobile',
  Gv = '[UI] Open menu',
  Yv = '[UI] Reset',
  uE = '[UI] NOOP',
  sE = (e = Uu, t) => {
    switch (t.type) {
      case Vv:
        return { ...e, errors: { ...e.errors, [t.key]: t.message } };
      case aE:
        return { ...e, mobile: t.isMobile, smallScreen: t.isSmallScreen };
      case oE:
        return { ...e, errors: { ...e.errors, [t.key]: void 0 } };
      case Kv:
        return {
          ...e,
          loading: { ...e.loading, [t.key]: t.isMainLoader ? 'main' : 'local' },
          errors: { ...e.errors, [t.key + ' Error']: void 0 },
        };
      case Qv:
        return { ...e, loading: { ...e.loading, [t.key]: !1 } };
      case Gv:
        return { ...e, menuOpened: t.menuId, showBackdrop: !!t.menuId };
      case Yv:
        return e.errors[Fu] ? { ...Uu, errors: { [Fu]: e.errors[Fu] } } : { ...Uu };
      default:
        return e;
    }
  };
var Ks = function (e, t) {
  return (
    (Ks =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, r) {
          n.__proto__ = r;
        }) ||
      function (n, r) {
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
      }),
    Ks(e, t)
  );
};
function Ut(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
  Ks(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function cE(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (l) {
          l(i);
        });
  }
  return new (n || (n = Promise))(function (i, l) {
    function a(d) {
      try {
        s(r.next(d));
      } catch (h) {
        l(h);
      }
    }
    function u(d) {
      try {
        s(r.throw(d));
      } catch (h) {
        l(h);
      }
    }
    function s(d) {
      d.done ? i(d.value) : o(d.value).then(a, u);
    }
    s((r = r.apply(e, t || [])).next());
  });
}
function Xv(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    r,
    o,
    i,
    l;
  return (
    (l = { next: a(0), throw: a(1), return: a(2) }),
    typeof Symbol == 'function' &&
      (l[Symbol.iterator] = function () {
        return this;
      }),
    l
  );
  function a(s) {
    return function (d) {
      return u([s, d]);
    };
  }
  function u(s) {
    if (r) throw new TypeError('Generator is already executing.');
    for (; n; )
      try {
        if (
          ((r = 1),
          o &&
            (i = s[0] & 2 ? o.return : s[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) &&
            !(i = i.call(o, s[1])).done)
        )
          return i;
        switch (((o = 0), i && (s = [s[0] & 2, i.value]), s[0])) {
          case 0:
          case 1:
            i = s;
            break;
          case 4:
            return n.label++, { value: s[1], done: !1 };
          case 5:
            n.label++, (o = s[1]), (s = [0]);
            continue;
          case 7:
            (s = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (((i = n.trys), !(i = i.length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2))) {
              n = 0;
              continue;
            }
            if (s[0] === 3 && (!i || (s[1] > i[0] && s[1] < i[3]))) {
              n.label = s[1];
              break;
            }
            if (s[0] === 6 && n.label < i[1]) {
              (n.label = i[1]), (i = s);
              break;
            }
            if (i && n.label < i[2]) {
              (n.label = i[2]), n.ops.push(s);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        s = t.call(e, n);
      } catch (d) {
        (s = [6, d]), (o = 0);
      } finally {
        r = i = 0;
      }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
function Xr(e) {
  var t = typeof Symbol == 'function' && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == 'number')
    return {
      next: function () {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      },
    };
  throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
}
function Zr(e, t) {
  var n = typeof Symbol == 'function' && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e),
    o,
    i = [],
    l;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) i.push(o.value);
  } catch (a) {
    l = { error: a };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (l) throw l.error;
    }
  }
  return i;
}
function Jr(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function jr(e) {
  return this instanceof jr ? ((this.v = e), this) : new jr(e);
}
function fE(e, t, n) {
  if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
  var r = n.apply(e, t || []),
    o,
    i = [];
  return (
    (o = {}),
    l('next'),
    l('throw'),
    l('return'),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function l(c) {
    r[c] &&
      (o[c] = function (g) {
        return new Promise(function (y, m) {
          i.push([c, g, y, m]) > 1 || a(c, g);
        });
      });
  }
  function a(c, g) {
    try {
      u(r[c](g));
    } catch (y) {
      h(i[0][3], y);
    }
  }
  function u(c) {
    c.value instanceof jr ? Promise.resolve(c.value.v).then(s, d) : h(i[0][2], c);
  }
  function s(c) {
    a('next', c);
  }
  function d(c) {
    a('throw', c);
  }
  function h(c, g) {
    c(g), i.shift(), i.length && a(i[0][0], i[0][1]);
  }
}
function dE(e) {
  if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof Xr == 'function' ? Xr(e) : e[Symbol.iterator]()),
      (n = {}),
      r('next'),
      r('throw'),
      r('return'),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(i) {
    n[i] =
      e[i] &&
      function (l) {
        return new Promise(function (a, u) {
          (l = e[i](l)), o(a, u, l.done, l.value);
        });
      };
  }
  function o(i, l, a, u) {
    Promise.resolve(u).then(function (s) {
      i({ value: s, done: a });
    }, l);
  }
}
function Ce(e) {
  return typeof e == 'function';
}
function Zv(e) {
  var t = function (r) {
      Error.call(r), (r.stack = new Error().stack);
    },
    n = e(t);
  return (n.prototype = Object.create(Error.prototype)), (n.prototype.constructor = n), n;
}
var Bu = Zv(function (e) {
  return function (n) {
    e(this),
      (this.message = n
        ? n.length +
          ` errors occurred during unsubscription:
` +
          n.map(function (r, o) {
            return o + 1 + ') ' + r.toString();
          }).join(`
  `)
        : ''),
      (this.name = 'UnsubscriptionError'),
      (this.errors = n);
  };
});
function Yl(e, t) {
  if (e) {
    var n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var xi = (function () {
    function e(t) {
      (this.initialTeardown = t), (this.closed = !1), (this._parentage = null), (this._finalizers = null);
    }
    return (
      (e.prototype.unsubscribe = function () {
        var t, n, r, o, i;
        if (!this.closed) {
          this.closed = !0;
          var l = this._parentage;
          if (l)
            if (((this._parentage = null), Array.isArray(l)))
              try {
                for (var a = Xr(l), u = a.next(); !u.done; u = a.next()) {
                  var s = u.value;
                  s.remove(this);
                }
              } catch (m) {
                t = { error: m };
              } finally {
                try {
                  u && !u.done && (n = a.return) && n.call(a);
                } finally {
                  if (t) throw t.error;
                }
              }
            else l.remove(this);
          var d = this.initialTeardown;
          if (Ce(d))
            try {
              d();
            } catch (m) {
              i = m instanceof Bu ? m.errors : [m];
            }
          var h = this._finalizers;
          if (h) {
            this._finalizers = null;
            try {
              for (var c = Xr(h), g = c.next(); !g.done; g = c.next()) {
                var y = g.value;
                try {
                  cp(y);
                } catch (m) {
                  (i = i ?? []), m instanceof Bu ? (i = Jr(Jr([], Zr(i)), Zr(m.errors))) : i.push(m);
                }
              }
            } catch (m) {
              r = { error: m };
            } finally {
              try {
                g && !g.done && (o = c.return) && o.call(c);
              } finally {
                if (r) throw r.error;
              }
            }
          }
          if (i) throw new Bu(i);
        }
      }),
      (e.prototype.add = function (t) {
        var n;
        if (t && t !== this)
          if (this.closed) cp(t);
          else {
            if (t instanceof e) {
              if (t.closed || t._hasParent(this)) return;
              t._addParent(this);
            }
            (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
          }
      }),
      (e.prototype._hasParent = function (t) {
        var n = this._parentage;
        return n === t || (Array.isArray(n) && n.includes(t));
      }),
      (e.prototype._addParent = function (t) {
        var n = this._parentage;
        this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
      }),
      (e.prototype._removeParent = function (t) {
        var n = this._parentage;
        n === t ? (this._parentage = null) : Array.isArray(n) && Yl(n, t);
      }),
      (e.prototype.remove = function (t) {
        var n = this._finalizers;
        n && Yl(n, t), t instanceof e && t._removeParent(this);
      }),
      (e.EMPTY = (function () {
        var t = new e();
        return (t.closed = !0), t;
      })()),
      e
    );
  })(),
  Jv = xi.EMPTY;
function qv(e) {
  return e instanceof xi || (e && 'closed' in e && Ce(e.remove) && Ce(e.add) && Ce(e.unsubscribe));
}
function cp(e) {
  Ce(e) ? e() : e.unsubscribe();
}
var ff = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1,
  },
  Qs = {
    setTimeout: function (e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
      var o = Qs.delegate;
      return o != null && o.setTimeout
        ? o.setTimeout.apply(o, Jr([e, t], Zr(n)))
        : setTimeout.apply(void 0, Jr([e, t], Zr(n)));
    },
    clearTimeout: function (e) {
      var t = Qs.delegate;
      return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e);
    },
    delegate: void 0,
  };
function e0(e) {
  Qs.setTimeout(function () {
    throw e;
  });
}
function Gs() {}
var Qi = null;
function cl(e) {
  if (ff.useDeprecatedSynchronousErrorHandling) {
    var t = !Qi;
    if ((t && (Qi = { errorThrown: !1, error: null }), e(), t)) {
      var n = Qi,
        r = n.errorThrown,
        o = n.error;
      if (((Qi = null), r)) throw o;
    }
  } else e();
}
var df = (function (e) {
    Ut(t, e);
    function t(n) {
      var r = e.call(this) || this;
      return (r.isStopped = !1), n ? ((r.destination = n), qv(n) && n.add(r)) : (r.destination = vE), r;
    }
    return (
      (t.create = function (n, r, o) {
        return new Ys(n, r, o);
      }),
      (t.prototype.next = function (n) {
        this.isStopped || this._next(n);
      }),
      (t.prototype.error = function (n) {
        this.isStopped || ((this.isStopped = !0), this._error(n));
      }),
      (t.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (t.prototype.unsubscribe = function () {
        this.closed || ((this.isStopped = !0), e.prototype.unsubscribe.call(this), (this.destination = null));
      }),
      (t.prototype._next = function (n) {
        this.destination.next(n);
      }),
      (t.prototype._error = function (n) {
        try {
          this.destination.error(n);
        } finally {
          this.unsubscribe();
        }
      }),
      (t.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      t
    );
  })(xi),
  pE = Function.prototype.bind;
function Wu(e, t) {
  return pE.call(e, t);
}
var hE = (function () {
    function e(t) {
      this.partialObserver = t;
    }
    return (
      (e.prototype.next = function (t) {
        var n = this.partialObserver;
        if (n.next)
          try {
            n.next(t);
          } catch (r) {
            Gi(r);
          }
      }),
      (e.prototype.error = function (t) {
        var n = this.partialObserver;
        if (n.error)
          try {
            n.error(t);
          } catch (r) {
            Gi(r);
          }
        else Gi(t);
      }),
      (e.prototype.complete = function () {
        var t = this.partialObserver;
        if (t.complete)
          try {
            t.complete();
          } catch (n) {
            Gi(n);
          }
      }),
      e
    );
  })(),
  Ys = (function (e) {
    Ut(t, e);
    function t(n, r, o) {
      var i = e.call(this) || this,
        l;
      if (Ce(n) || !n) l = { next: n ?? void 0, error: r ?? void 0, complete: o ?? void 0 };
      else {
        var a;
        i && ff.useDeprecatedNextContext
          ? ((a = Object.create(n)),
            (a.unsubscribe = function () {
              return i.unsubscribe();
            }),
            (l = {
              next: n.next && Wu(n.next, a),
              error: n.error && Wu(n.error, a),
              complete: n.complete && Wu(n.complete, a),
            }))
          : (l = n);
      }
      return (i.destination = new hE(l)), i;
    }
    return t;
  })(df);
function Gi(e) {
  e0(e);
}
function mE(e) {
  throw e;
}
var vE = { closed: !0, next: Gs, error: mE, complete: Gs },
  pf = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })();
function t0(e) {
  return e;
}
function gE(e) {
  return e.length === 0
    ? t0
    : e.length === 1
    ? e[0]
    : function (n) {
        return e.reduce(function (r, o) {
          return o(r);
        }, n);
      };
}
var qe = (function () {
  function e(t) {
    t && (this._subscribe = t);
  }
  return (
    (e.prototype.lift = function (t) {
      var n = new e();
      return (n.source = this), (n.operator = t), n;
    }),
    (e.prototype.subscribe = function (t, n, r) {
      var o = this,
        i = wE(t) ? t : new Ys(t, n, r);
      return (
        cl(function () {
          var l = o,
            a = l.operator,
            u = l.source;
          i.add(a ? a.call(i, u) : u ? o._subscribe(i) : o._trySubscribe(i));
        }),
        i
      );
    }),
    (e.prototype._trySubscribe = function (t) {
      try {
        return this._subscribe(t);
      } catch (n) {
        t.error(n);
      }
    }),
    (e.prototype.forEach = function (t, n) {
      var r = this;
      return (
        (n = fp(n)),
        new n(function (o, i) {
          var l = new Ys({
            next: function (a) {
              try {
                t(a);
              } catch (u) {
                i(u), l.unsubscribe();
              }
            },
            error: i,
            complete: o,
          });
          r.subscribe(l);
        })
      );
    }),
    (e.prototype._subscribe = function (t) {
      var n;
      return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t);
    }),
    (e.prototype[pf] = function () {
      return this;
    }),
    (e.prototype.pipe = function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      return gE(t)(this);
    }),
    (e.prototype.toPromise = function (t) {
      var n = this;
      return (
        (t = fp(t)),
        new t(function (r, o) {
          var i;
          n.subscribe(
            function (l) {
              return (i = l);
            },
            function (l) {
              return o(l);
            },
            function () {
              return r(i);
            }
          );
        })
      );
    }),
    (e.create = function (t) {
      return new e(t);
    }),
    e
  );
})();
function fp(e) {
  var t;
  return (t = e ?? ff.Promise) !== null && t !== void 0 ? t : Promise;
}
function yE(e) {
  return e && Ce(e.next) && Ce(e.error) && Ce(e.complete);
}
function wE(e) {
  return (e && e instanceof df) || (yE(e) && qv(e));
}
function SE(e) {
  return Ce(e == null ? void 0 : e.lift);
}
function or(e) {
  return function (t) {
    if (SE(t))
      return t.lift(function (n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError('Unable to lift unknown Observable type');
  };
}
function Zn(e, t, n, r, o) {
  return new xE(e, t, n, r, o);
}
var xE = (function (e) {
    Ut(t, e);
    function t(n, r, o, i, l, a) {
      var u = e.call(this, n) || this;
      return (
        (u.onFinalize = l),
        (u.shouldUnsubscribe = a),
        (u._next = r
          ? function (s) {
              try {
                r(s);
              } catch (d) {
                n.error(d);
              }
            }
          : e.prototype._next),
        (u._error = i
          ? function (s) {
              try {
                i(s);
              } catch (d) {
                n.error(d);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._error),
        (u._complete = o
          ? function () {
              try {
                o();
              } catch (s) {
                n.error(s);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._complete),
        u
      );
    }
    return (
      (t.prototype.unsubscribe = function () {
        var n;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var r = this.closed;
          e.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
        }
      }),
      t
    );
  })(df),
  EE = Zv(function (e) {
    return function () {
      e(this), (this.name = 'ObjectUnsubscribedError'), (this.message = 'object unsubscribed');
    };
  }),
  jo = (function (e) {
    Ut(t, e);
    function t() {
      var n = e.call(this) || this;
      return (
        (n.closed = !1),
        (n.currentObservers = null),
        (n.observers = []),
        (n.isStopped = !1),
        (n.hasError = !1),
        (n.thrownError = null),
        n
      );
    }
    return (
      (t.prototype.lift = function (n) {
        var r = new dp(this, this);
        return (r.operator = n), r;
      }),
      (t.prototype._throwIfClosed = function () {
        if (this.closed) throw new EE();
      }),
      (t.prototype.next = function (n) {
        var r = this;
        cl(function () {
          var o, i;
          if ((r._throwIfClosed(), !r.isStopped)) {
            r.currentObservers || (r.currentObservers = Array.from(r.observers));
            try {
              for (var l = Xr(r.currentObservers), a = l.next(); !a.done; a = l.next()) {
                var u = a.value;
                u.next(n);
              }
            } catch (s) {
              o = { error: s };
            } finally {
              try {
                a && !a.done && (i = l.return) && i.call(l);
              } finally {
                if (o) throw o.error;
              }
            }
          }
        });
      }),
      (t.prototype.error = function (n) {
        var r = this;
        cl(function () {
          if ((r._throwIfClosed(), !r.isStopped)) {
            (r.hasError = r.isStopped = !0), (r.thrownError = n);
            for (var o = r.observers; o.length; ) o.shift().error(n);
          }
        });
      }),
      (t.prototype.complete = function () {
        var n = this;
        cl(function () {
          if ((n._throwIfClosed(), !n.isStopped)) {
            n.isStopped = !0;
            for (var r = n.observers; r.length; ) r.shift().complete();
          }
        });
      }),
      (t.prototype.unsubscribe = function () {
        (this.isStopped = this.closed = !0), (this.observers = this.currentObservers = null);
      }),
      Object.defineProperty(t.prototype, 'observed', {
        get: function () {
          var n;
          return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype._trySubscribe = function (n) {
        return this._throwIfClosed(), e.prototype._trySubscribe.call(this, n);
      }),
      (t.prototype._subscribe = function (n) {
        return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
      }),
      (t.prototype._innerSubscribe = function (n) {
        var r = this,
          o = this,
          i = o.hasError,
          l = o.isStopped,
          a = o.observers;
        return i || l
          ? Jv
          : ((this.currentObservers = null),
            a.push(n),
            new xi(function () {
              (r.currentObservers = null), Yl(a, n);
            }));
      }),
      (t.prototype._checkFinalizedStatuses = function (n) {
        var r = this,
          o = r.hasError,
          i = r.thrownError,
          l = r.isStopped;
        o ? n.error(i) : l && n.complete();
      }),
      (t.prototype.asObservable = function () {
        var n = new qe();
        return (n.source = this), n;
      }),
      (t.create = function (n, r) {
        return new dp(n, r);
      }),
      t
    );
  })(qe),
  dp = (function (e) {
    Ut(t, e);
    function t(n, r) {
      var o = e.call(this) || this;
      return (o.destination = n), (o.source = r), o;
    }
    return (
      (t.prototype.next = function (n) {
        var r, o;
        (o = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null ||
          o === void 0 ||
          o.call(r, n);
      }),
      (t.prototype.error = function (n) {
        var r, o;
        (o = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null ||
          o === void 0 ||
          o.call(r, n);
      }),
      (t.prototype.complete = function () {
        var n, r;
        (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null ||
          r === void 0 ||
          r.call(n);
      }),
      (t.prototype._subscribe = function (n) {
        var r, o;
        return (o = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && o !== void 0
          ? o
          : Jv;
      }),
      t
    );
  })(jo),
  n0 = {
    now: function () {
      return (n0.delegate || Date).now();
    },
    delegate: void 0,
  },
  kE = (function (e) {
    Ut(t, e);
    function t(n, r) {
      return e.call(this) || this;
    }
    return (
      (t.prototype.schedule = function (n, r) {
        return this;
      }),
      t
    );
  })(xi),
  Xl = {
    setInterval: function (e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
      var o = Xl.delegate;
      return o != null && o.setInterval
        ? o.setInterval.apply(o, Jr([e, t], Zr(n)))
        : setInterval.apply(void 0, Jr([e, t], Zr(n)));
    },
    clearInterval: function (e) {
      var t = Xl.delegate;
      return ((t == null ? void 0 : t.clearInterval) || clearInterval)(e);
    },
    delegate: void 0,
  },
  r0 = (function (e) {
    Ut(t, e);
    function t(n, r) {
      var o = e.call(this, n, r) || this;
      return (o.scheduler = n), (o.work = r), (o.pending = !1), o;
    }
    return (
      (t.prototype.schedule = function (n, r) {
        if ((r === void 0 && (r = 0), this.closed)) return this;
        this.state = n;
        var o = this.id,
          i = this.scheduler;
        return (
          o != null && (this.id = this.recycleAsyncId(i, o, r)),
          (this.pending = !0),
          (this.delay = r),
          (this.id = this.id || this.requestAsyncId(i, this.id, r)),
          this
        );
      }),
      (t.prototype.requestAsyncId = function (n, r, o) {
        return o === void 0 && (o = 0), Xl.setInterval(n.flush.bind(n, this), o);
      }),
      (t.prototype.recycleAsyncId = function (n, r, o) {
        if ((o === void 0 && (o = 0), o != null && this.delay === o && this.pending === !1)) return r;
        Xl.clearInterval(r);
      }),
      (t.prototype.execute = function (n, r) {
        if (this.closed) return new Error('executing a cancelled action');
        this.pending = !1;
        var o = this._execute(n, r);
        if (o) return o;
        this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }),
      (t.prototype._execute = function (n, r) {
        var o = !1,
          i;
        try {
          this.work(n);
        } catch (l) {
          (o = !0), (i = l || new Error('Scheduled action threw falsy error'));
        }
        if (o) return this.unsubscribe(), i;
      }),
      (t.prototype.unsubscribe = function () {
        if (!this.closed) {
          var n = this,
            r = n.id,
            o = n.scheduler,
            i = o.actions;
          (this.work = this.state = this.scheduler = null),
            (this.pending = !1),
            Yl(i, this),
            r != null && (this.id = this.recycleAsyncId(o, r, null)),
            (this.delay = null),
            e.prototype.unsubscribe.call(this);
        }
      }),
      t
    );
  })(kE),
  pp = (function () {
    function e(t, n) {
      n === void 0 && (n = e.now), (this.schedulerActionCtor = t), (this.now = n);
    }
    return (
      (e.prototype.schedule = function (t, n, r) {
        return n === void 0 && (n = 0), new this.schedulerActionCtor(this, t).schedule(r, n);
      }),
      (e.now = n0.now),
      e
    );
  })(),
  o0 = (function (e) {
    Ut(t, e);
    function t(n, r) {
      r === void 0 && (r = pp.now);
      var o = e.call(this, n, r) || this;
      return (o.actions = []), (o._active = !1), (o._scheduled = void 0), o;
    }
    return (
      (t.prototype.flush = function (n) {
        var r = this.actions;
        if (this._active) {
          r.push(n);
          return;
        }
        var o;
        this._active = !0;
        do if ((o = n.execute(n.state, n.delay))) break;
        while ((n = r.shift()));
        if (((this._active = !1), o)) {
          for (; (n = r.shift()); ) n.unsubscribe();
          throw o;
        }
      }),
      t
    );
  })(pp),
  i0 = new o0(r0),
  CE = i0,
  _E = (function (e) {
    Ut(t, e);
    function t(n, r) {
      var o = e.call(this, n, r) || this;
      return (o.scheduler = n), (o.work = r), o;
    }
    return (
      (t.prototype.schedule = function (n, r) {
        return (
          r === void 0 && (r = 0),
          r > 0
            ? e.prototype.schedule.call(this, n, r)
            : ((this.delay = r), (this.state = n), this.scheduler.flush(this), this)
        );
      }),
      (t.prototype.execute = function (n, r) {
        return r > 0 || this.closed ? e.prototype.execute.call(this, n, r) : this._execute(n, r);
      }),
      (t.prototype.requestAsyncId = function (n, r, o) {
        return (
          o === void 0 && (o = 0),
          (o != null && o > 0) || (o == null && this.delay > 0)
            ? e.prototype.requestAsyncId.call(this, n, r, o)
            : n.flush(this)
        );
      }),
      t
    );
  })(r0),
  OE = (function (e) {
    Ut(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return t;
  })(o0),
  hp = new OE(_E),
  l0 = new qe(function (e) {
    return e.complete();
  });
function a0(e) {
  return e && Ce(e.schedule);
}
function u0(e) {
  return e[e.length - 1];
}
function s0(e) {
  return a0(u0(e)) ? e.pop() : void 0;
}
function PE(e, t) {
  return typeof u0(e) == 'number' ? e.pop() : t;
}
var c0 = function (e) {
  return e && typeof e.length == 'number' && typeof e != 'function';
};
function f0(e) {
  return Ce(e == null ? void 0 : e.then);
}
function d0(e) {
  return Ce(e[pf]);
}
function p0(e) {
  return Symbol.asyncIterator && Ce(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function h0(e) {
  return new TypeError(
    'You provided ' +
      (e !== null && typeof e == 'object' ? 'an invalid object' : "'" + e + "'") +
      ' where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.'
  );
}
function TE() {
  return typeof Symbol != 'function' || !Symbol.iterator ? '@@iterator' : Symbol.iterator;
}
var m0 = TE();
function v0(e) {
  return Ce(e == null ? void 0 : e[m0]);
}
function g0(e) {
  return fE(this, arguments, function () {
    var n, r, o, i;
    return Xv(this, function (l) {
      switch (l.label) {
        case 0:
          (n = e.getReader()), (l.label = 1);
        case 1:
          l.trys.push([1, , 9, 10]), (l.label = 2);
        case 2:
          return [4, jr(n.read())];
        case 3:
          return (r = l.sent()), (o = r.value), (i = r.done), i ? [4, jr(void 0)] : [3, 5];
        case 4:
          return [2, l.sent()];
        case 5:
          return [4, jr(o)];
        case 6:
          return [4, l.sent()];
        case 7:
          return l.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return n.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function y0(e) {
  return Ce(e == null ? void 0 : e.getReader);
}
function io(e) {
  if (e instanceof qe) return e;
  if (e != null) {
    if (d0(e)) return bE(e);
    if (c0(e)) return RE(e);
    if (f0(e)) return AE(e);
    if (p0(e)) return w0(e);
    if (v0(e)) return LE(e);
    if (y0(e)) return $E(e);
  }
  throw h0(e);
}
function bE(e) {
  return new qe(function (t) {
    var n = e[pf]();
    if (Ce(n.subscribe)) return n.subscribe(t);
    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  });
}
function RE(e) {
  return new qe(function (t) {
    for (var n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}
function AE(e) {
  return new qe(function (t) {
    e.then(
      function (n) {
        t.closed || (t.next(n), t.complete());
      },
      function (n) {
        return t.error(n);
      }
    ).then(null, e0);
  });
}
function LE(e) {
  return new qe(function (t) {
    var n, r;
    try {
      for (var o = Xr(e), i = o.next(); !i.done; i = o.next()) {
        var l = i.value;
        if ((t.next(l), t.closed)) return;
      }
    } catch (a) {
      n = { error: a };
    } finally {
      try {
        i && !i.done && (r = o.return) && r.call(o);
      } finally {
        if (n) throw n.error;
      }
    }
    t.complete();
  });
}
function w0(e) {
  return new qe(function (t) {
    ME(e, t).catch(function (n) {
      return t.error(n);
    });
  });
}
function $E(e) {
  return w0(g0(e));
}
function ME(e, t) {
  var n, r, o, i;
  return cE(this, void 0, void 0, function () {
    var l, a;
    return Xv(this, function (u) {
      switch (u.label) {
        case 0:
          u.trys.push([0, 5, 6, 11]), (n = dE(e)), (u.label = 1);
        case 1:
          return [4, n.next()];
        case 2:
          if (((r = u.sent()), !!r.done)) return [3, 4];
          if (((l = r.value), t.next(l), t.closed)) return [2];
          u.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return (a = u.sent()), (o = { error: a }), [3, 11];
        case 6:
          return u.trys.push([6, , 9, 10]), r && !r.done && (i = n.return) ? [4, i.call(n)] : [3, 8];
        case 7:
          u.sent(), (u.label = 8);
        case 8:
          return [3, 10];
        case 9:
          if (o) throw o.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return t.complete(), [2];
      }
    });
  });
}
function _n(e, t, n, r, o) {
  r === void 0 && (r = 0), o === void 0 && (o = !1);
  var i = t.schedule(function () {
    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if ((e.add(i), !o)) return i;
}
function zo(e, t) {
  return (
    t === void 0 && (t = 0),
    or(function (n, r) {
      n.subscribe(
        Zn(
          r,
          function (o) {
            return _n(
              r,
              e,
              function () {
                return r.next(o);
              },
              t
            );
          },
          function () {
            return _n(
              r,
              e,
              function () {
                return r.complete();
              },
              t
            );
          },
          function (o) {
            return _n(
              r,
              e,
              function () {
                return r.error(o);
              },
              t
            );
          }
        )
      );
    })
  );
}
function hf(e, t) {
  return (
    t === void 0 && (t = 0),
    or(function (n, r) {
      r.add(
        e.schedule(function () {
          return n.subscribe(r);
        }, t)
      );
    })
  );
}
function DE(e, t) {
  return io(e).pipe(hf(t), zo(t));
}
function IE(e, t) {
  return io(e).pipe(hf(t), zo(t));
}
function NE(e, t) {
  return new qe(function (n) {
    var r = 0;
    return t.schedule(function () {
      r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function jE(e, t) {
  return new qe(function (n) {
    var r;
    return (
      _n(n, t, function () {
        (r = e[m0]()),
          _n(
            n,
            t,
            function () {
              var o, i, l;
              try {
                (o = r.next()), (i = o.value), (l = o.done);
              } catch (a) {
                n.error(a);
                return;
              }
              l ? n.complete() : n.next(i);
            },
            0,
            !0
          );
      }),
      function () {
        return Ce(r == null ? void 0 : r.return) && r.return();
      }
    );
  });
}
function S0(e, t) {
  if (!e) throw new Error('Iterable cannot be null');
  return new qe(function (n) {
    _n(n, t, function () {
      var r = e[Symbol.asyncIterator]();
      _n(
        n,
        t,
        function () {
          r.next().then(function (o) {
            o.done ? n.complete() : n.next(o.value);
          });
        },
        0,
        !0
      );
    });
  });
}
function zE(e, t) {
  return S0(g0(e), t);
}
function FE(e, t) {
  if (e != null) {
    if (d0(e)) return DE(e, t);
    if (c0(e)) return NE(e, t);
    if (f0(e)) return IE(e, t);
    if (p0(e)) return S0(e, t);
    if (v0(e)) return jE(e, t);
    if (y0(e)) return zE(e, t);
  }
  throw h0(e);
}
function mf(e, t) {
  return t ? FE(e, t) : io(e);
}
function UE(e) {
  return e instanceof Date && !isNaN(e);
}
function bt(e, t) {
  return or(function (n, r) {
    var o = 0;
    n.subscribe(
      Zn(r, function (i) {
        r.next(e.call(t, i, o++));
      })
    );
  });
}
function BE(e, t, n, r, o, i, l, a) {
  var u = [],
    s = 0,
    d = 0,
    h = !1,
    c = function () {
      h && !u.length && !s && t.complete();
    },
    g = function (m) {
      return s < r ? y(m) : u.push(m);
    },
    y = function (m) {
      i && t.next(m), s++;
      var S = !1;
      io(n(m, d++)).subscribe(
        Zn(
          t,
          function (p) {
            o == null || o(p), i ? g(p) : t.next(p);
          },
          function () {
            S = !0;
          },
          void 0,
          function () {
            if (S)
              try {
                s--;
                for (
                  var p = function () {
                    var f = u.shift();
                    l
                      ? _n(t, l, function () {
                          return y(f);
                        })
                      : y(f);
                  };
                  u.length && s < r;

                )
                  p();
                c();
              } catch (f) {
                t.error(f);
              }
          }
        )
      );
    };
  return (
    e.subscribe(
      Zn(t, g, function () {
        (h = !0), c();
      })
    ),
    function () {
      a == null || a();
    }
  );
}
function Va(e, t, n) {
  return (
    n === void 0 && (n = 1 / 0),
    Ce(t)
      ? Va(function (r, o) {
          return bt(function (i, l) {
            return t(r, i, o, l);
          })(io(e(r, o)));
        }, n)
      : (typeof t == 'number' && (n = t),
        or(function (r, o) {
          return BE(r, o, e, n);
        }))
  );
}
function x0(e) {
  return e === void 0 && (e = 1 / 0), Va(t0, e);
}
function WE() {
  return x0(1);
}
function HE() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return WE()(mf(e, s0(e)));
}
function VE(e, t, n) {
  e === void 0 && (e = 0), n === void 0 && (n = CE);
  var r = -1;
  return (
    t != null && (a0(t) ? (n = t) : (r = t)),
    new qe(function (o) {
      var i = UE(e) ? +e - n.now() : e;
      i < 0 && (i = 0);
      var l = 0;
      return n.schedule(function () {
        o.closed || (o.next(l++), 0 <= r ? this.schedule(void 0, r) : o.complete());
      }, i);
    })
  );
}
function KE() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = s0(e),
    r = PE(e, 1 / 0),
    o = e;
  return o.length ? (o.length === 1 ? io(o[0]) : x0(r)(mf(o, n))) : l0;
}
function lo(e, t) {
  return or(function (n, r) {
    var o = 0;
    n.subscribe(
      Zn(r, function (i) {
        return e.call(t, i, o++) && r.next(i);
      })
    );
  });
}
function mp(e) {
  return e <= 0
    ? function () {
        return l0;
      }
    : or(function (t, n) {
        var r = 0;
        t.subscribe(
          Zn(n, function (o) {
            ++r <= e && (n.next(o), e <= r && n.complete());
          })
        );
      });
}
function QE() {
  return or(function (e, t) {
    e.subscribe(Zn(t, Gs));
  });
}
function GE(e) {
  return bt(function () {
    return e;
  });
}
function E0(e, t) {
  return t
    ? function (n) {
        return HE(t.pipe(mp(1), QE()), n.pipe(E0(e)));
      }
    : Va(function (n, r) {
        return e(n, r).pipe(mp(1), GE(n));
      });
}
function YE(e, t) {
  t === void 0 && (t = i0);
  var n = VE(e, t);
  return E0(function () {
    return n;
  });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Xs = function (e, t) {
  return (
    (Xs =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, r) {
          n.__proto__ = r;
        }) ||
      function (n, r) {
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
      }),
    Xs(e, t)
  );
};
function XE(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
  Xs(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var ZE = (function (e) {
  XE(t, e);
  function t(n, r) {
    var o =
      e.call(this, function (i) {
        var l = o.__notifier.subscribe(i);
        return l && !l.closed && i.next(o.value), l;
      }) || this;
    return (
      (o.__notifier = new jo()),
      (o.value = r),
      n.subscribe(function (i) {
        i !== o.value && ((o.value = i), o.__notifier.next(i));
      }),
      o
    );
  }
  return t;
})(qe);
function JE(e) {
  e === void 0 && (e = {});
  var t = hp.constructor,
    n = new t(hp.schedulerActionCtor),
    r = new jo(),
    o,
    i = function (l) {
      o = l;
      var a = new jo(),
        u = new jo(),
        s = a.asObservable().pipe(zo(n)),
        d = new ZE(u.pipe(zo(n)), o.getState()),
        h = r.pipe(
          bt(function (c) {
            var g = c(s, d, e.dependencies);
            if (!g)
              throw new TypeError(
                'Your root Epic "' +
                  (c.name || '<anonymous>') +
                  `" does not return a stream. Double check you're not missing a return statement!`
              );
            return g;
          }),
          Va(function (c) {
            return mf(c).pipe(hf(n), zo(n));
          })
        );
      return (
        h.subscribe(o.dispatch),
        function (c) {
          return function (g) {
            var y = c(g);
            return u.next(o.getState()), a.next(g), y;
          };
        }
      );
    };
  return (
    (i.run = function (l) {
      r.next(l);
    }),
    i
  );
}
function vf() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = function () {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
    return KE.apply(
      void 0,
      e.map(function (i) {
        var l = i.apply(void 0, r);
        if (!l)
          throw new TypeError(
            'combineEpics: one of the provided Epics "' +
              (i.name || '<anonymous>') +
              `" does not return a stream. Double check you're not missing a return statement!`
          );
        return l;
      })
    );
  };
  try {
    Object.defineProperty(n, 'name', {
      value:
        'combineEpics(' +
        e
          .map(function (r) {
            return r.name || '<anonymous>';
          })
          .join(', ') +
        ')',
    });
  } catch {}
  return n;
}
var vp = function (e, t) {
  return e === t || (typeof t == 'function' && e === t.toString());
};
function Ka() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = e.length;
  return lo(
    n === 1
      ? function (r) {
          return vp(r.type, e[0]);
        }
      : function (r) {
          for (var o = 0; o < n; o++) if (vp(r.type, e[o])) return !0;
          return !1;
        }
  );
}
const qE = zp(NS);
var gp = qE.compose,
  e2 =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0) return typeof arguments[0] == 'object' ? gp : gp.apply(null, arguments);
        };
const t2 = vf();
class k0 {
  constructor() {
    Kt(this, 'type', uE);
  }
}
class n2 {
  constructor(t, n) {
    Kt(this, 'type', Vv);
    (this.key = t), (this.message = n);
  }
}
class r2 {
  constructor(t, n) {
    Kt(this, 'type', Kv);
    (this.key = t), (this.isMainLoader = n);
  }
}
class o2 {
  constructor(t) {
    Kt(this, 'type', Qv);
    this.key = t;
  }
}
class i2 {
  constructor(t) {
    Kt(this, 'type', lE);
    this.key = t;
  }
}
class l2 {
  constructor() {
    Kt(this, 'type', Gv);
    Kt(this, 'menuId');
  }
}
class a2 {
  constructor() {
    Kt(this, 'type', Yv);
  }
}
const gf = (e) =>
    e.getActionKey
      ? e.getActionKey()
      : e.type
          .replace(/Success$/i, '')
          .replace(/Error$/i, '')
          .trim(),
  u2 = (e) =>
    e.pipe(
      lo((t) => t.isError),
      bt((t) => new n2(gf(t), t.code))
    ),
  s2 = (e) =>
    e.pipe(
      lo((t) => t.isLoading),
      bt((t) => new r2(gf(t), t.mainLoader))
    ),
  c2 = (e) =>
    e.pipe(
      lo((t) => t.isLoading === !1 || t.isError),
      bt((t) => new o2(gf(t)))
    ),
  f2 = (e) =>
    e.pipe(
      Ka(iE),
      YE(300),
      bt((t) => new i2(t.key))
    ),
  d2 = (e) =>
    e.pipe(
      Ka(Ua),
      bt(() => (window.scrollTo(0, 1), new k0())),
      lo(() => !1)
    ),
  p2 = (e) =>
    e.pipe(
      Ka(Ua),
      bt(() => new l2())
    ),
  h2 = (e) =>
    e.pipe(
      Ka(Hv),
      bt(() => new a2())
    ),
  m2 = (e) =>
    e.pipe(
      lo((t) => t.isError && !t.code.includes('NOT_FOUND')),
      bt(() => new k0())
    ),
  v2 = vf(u2, s2, c2, f2, d2, p2, h2, m2);
function Zl() {
  return (
    (Zl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zl.apply(this, arguments)
  );
}
var Rr;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Rr || (Rr = {}));
var yp = function (e) {
    return e;
  },
  wp = 'beforeunload',
  g2 = 'popstate';
function y2(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.window,
    r = n === void 0 ? document.defaultView : n,
    o = r.history;
  function i() {
    var x = r.location,
      P = x.pathname,
      $ = x.search,
      A = x.hash,
      M = o.state || {};
    return [M.idx, yp({ pathname: P, search: $, hash: A, state: M.usr || null, key: M.key || 'default' })];
  }
  var l = null;
  function a() {
    if (l) g.call(l), (l = null);
    else {
      var x = Rr.Pop,
        P = i(),
        $ = P[0],
        A = P[1];
      if (g.length) {
        if ($ != null) {
          var M = d - $;
          M &&
            ((l = {
              action: x,
              location: A,
              retry: function () {
                E(M * -1);
              },
            }),
            E(M));
        }
      } else f(x);
    }
  }
  r.addEventListener(g2, a);
  var u = Rr.Pop,
    s = i(),
    d = s[0],
    h = s[1],
    c = xp(),
    g = xp();
  d == null && ((d = 0), o.replaceState(Zl({}, o.state, { idx: d }), ''));
  function y(x) {
    return typeof x == 'string' ? x : S2(x);
  }
  function m(x, P) {
    return (
      P === void 0 && (P = null),
      yp(Zl({ pathname: h.pathname, hash: '', search: '' }, typeof x == 'string' ? x2(x) : x, { state: P, key: w2() }))
    );
  }
  function S(x, P) {
    return [{ usr: x.state, key: x.key, idx: P }, y(x)];
  }
  function p(x, P, $) {
    return !g.length || (g.call({ action: x, location: P, retry: $ }), !1);
  }
  function f(x) {
    u = x;
    var P = i();
    (d = P[0]), (h = P[1]), c.call({ action: u, location: h });
  }
  function v(x, P) {
    var $ = Rr.Push,
      A = m(x, P);
    function M() {
      v(x, P);
    }
    if (p($, A, M)) {
      var te = S(A, d + 1),
        ye = te[0],
        H = te[1];
      try {
        o.pushState(ye, '', H);
      } catch {
        r.location.assign(H);
      }
      f($);
    }
  }
  function w(x, P) {
    var $ = Rr.Replace,
      A = m(x, P);
    function M() {
      w(x, P);
    }
    if (p($, A, M)) {
      var te = S(A, d),
        ye = te[0],
        H = te[1];
      o.replaceState(ye, '', H), f($);
    }
  }
  function E(x) {
    o.go(x);
  }
  var T = {
    get action() {
      return u;
    },
    get location() {
      return h;
    },
    createHref: y,
    push: v,
    replace: w,
    go: E,
    back: function () {
      E(-1);
    },
    forward: function () {
      E(1);
    },
    listen: function (P) {
      return c.push(P);
    },
    block: function (P) {
      var $ = g.push(P);
      return (
        g.length === 1 && r.addEventListener(wp, Sp),
        function () {
          $(), g.length || r.removeEventListener(wp, Sp);
        }
      );
    },
  };
  return T;
}
function Sp(e) {
  e.preventDefault(), (e.returnValue = '');
}
function xp() {
  var e = [];
  return {
    get length() {
      return e.length;
    },
    push: function (n) {
      return (
        e.push(n),
        function () {
          e = e.filter(function (r) {
            return r !== n;
          });
        }
      );
    },
    call: function (n) {
      e.forEach(function (r) {
        return r && r(n);
      });
    },
  };
}
function w2() {
  return Math.random().toString(36).substr(2, 8);
}
function S2(e) {
  var t = e.pathname,
    n = t === void 0 ? '/' : t,
    r = e.search,
    o = r === void 0 ? '' : r,
    i = e.hash,
    l = i === void 0 ? '' : i;
  return (
    o && o !== '?' && (n += o.charAt(0) === '?' ? o : '?' + o),
    l && l !== '#' && (n += l.charAt(0) === '#' ? l : '#' + l),
    n
  );
}
function x2(e) {
  var t = {};
  if (e) {
    var n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    var r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
const C0 = JE(),
  { createReduxHistory: E2, routerMiddleware: k2, routerReducer: C2 } = XS({ history: y2() }),
  _2 = () => (e) => (t) => e({ ...t }),
  Zs = Fa(_v({ router: C2, ui: sE, auth: rE, localize: No }), e2(Pv(_2, k2, C0)));
C0.run(vf(t2, v2));
const O2 = E2(Zs);
function Te() {
  return (
    (Te = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Te.apply(this, arguments)
  );
}
function zr() {
  return (
    (zr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zr.apply(this, arguments)
  );
}
function Yi(e) {
  return e !== null && typeof e == 'object' && e.constructor === Object;
}
function en(e, t, n = { clone: !0 }) {
  const r = n.clone ? zr({}, e) : e;
  return (
    Yi(e) &&
      Yi(t) &&
      Object.keys(t).forEach((o) => {
        o !== '__proto__' && (Yi(t[o]) && o in e && Yi(e[o]) ? (r[o] = en(e[o], t[o], n)) : (r[o] = t[o]));
      }),
    r
  );
}
function qr(e) {
  let t = 'https://mui.com/production-error/?code=' + e;
  for (let n = 1; n < arguments.length; n += 1) t += '&args[]=' + encodeURIComponent(arguments[n]);
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.';
}
function _0(e) {
  if (typeof e != 'string') throw new Error(qr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function O0(e, t) {
  const n = zr({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = zr({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = zr({}, i)),
              Object.keys(o).forEach((l) => {
                n[r][l] = O0(o[l], i[l]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function P2(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
function T2(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function b2(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var R2 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(b2(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = T2(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ue = '-ms-',
  Jl = '-moz-',
  G = '-webkit-',
  P0 = 'comm',
  yf = 'rule',
  wf = 'decl',
  A2 = '@import',
  T0 = '@keyframes',
  L2 = Math.abs,
  Qa = String.fromCharCode,
  $2 = Object.assign;
function M2(e, t) {
  return Me(e, 0) ^ 45 ? (((((((t << 2) ^ Me(e, 0)) << 2) ^ Me(e, 1)) << 2) ^ Me(e, 2)) << 2) ^ Me(e, 3) : 0;
}
function b0(e) {
  return e.trim();
}
function D2(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Y(e, t, n) {
  return e.replace(t, n);
}
function Js(e, t) {
  return e.indexOf(t);
}
function Me(e, t) {
  return e.charCodeAt(t) | 0;
}
function ui(e, t, n) {
  return e.slice(t, n);
}
function $t(e) {
  return e.length;
}
function Sf(e) {
  return e.length;
}
function Xi(e, t) {
  return t.push(e), e;
}
function I2(e, t) {
  return e.map(t).join('');
}
var Ga = 1,
  eo = 1,
  R0 = 0,
  et = 0,
  Se = 0,
  ao = '';
function Ya(e, t, n, r, o, i, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Ga, column: eo, length: l, return: '' };
}
function So(e, t) {
  return $2(Ya('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function N2() {
  return Se;
}
function j2() {
  return (Se = et > 0 ? Me(ao, --et) : 0), eo--, Se === 10 && ((eo = 1), Ga--), Se;
}
function at() {
  return (Se = et < R0 ? Me(ao, et++) : 0), eo++, Se === 10 && ((eo = 1), Ga++), Se;
}
function zt() {
  return Me(ao, et);
}
function fl() {
  return et;
}
function Ei(e, t) {
  return ui(ao, e, t);
}
function si(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function A0(e) {
  return (Ga = eo = 1), (R0 = $t((ao = e))), (et = 0), [];
}
function L0(e) {
  return (ao = ''), e;
}
function dl(e) {
  return b0(Ei(et - 1, qs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function z2(e) {
  for (; (Se = zt()) && Se < 33; ) at();
  return si(e) > 2 || si(Se) > 3 ? '' : ' ';
}
function F2(e, t) {
  for (; --t && at() && !(Se < 48 || Se > 102 || (Se > 57 && Se < 65) || (Se > 70 && Se < 97)); );
  return Ei(e, fl() + (t < 6 && zt() == 32 && at() == 32));
}
function qs(e) {
  for (; at(); )
    switch (Se) {
      case e:
        return et;
      case 34:
      case 39:
        e !== 34 && e !== 39 && qs(Se);
        break;
      case 40:
        e === 41 && qs(e);
        break;
      case 92:
        at();
        break;
    }
  return et;
}
function U2(e, t) {
  for (; at() && e + Se !== 47 + 10; ) if (e + Se === 42 + 42 && zt() === 47) break;
  return '/*' + Ei(t, et - 1) + '*' + Qa(e === 47 ? e : at());
}
function B2(e) {
  for (; !si(zt()); ) at();
  return Ei(e, et);
}
function W2(e) {
  return L0(pl('', null, null, null, [''], (e = A0(e)), 0, [0], e));
}
function pl(e, t, n, r, o, i, l, a, u) {
  for (
    var s = 0, d = 0, h = l, c = 0, g = 0, y = 0, m = 1, S = 1, p = 1, f = 0, v = '', w = o, E = i, T = r, x = v;
    S;

  )
    switch (((y = f), (f = at()))) {
      case 40:
        if (y != 108 && Me(x, h - 1) == 58) {
          Js((x += Y(dl(f), '&', '&\f')), '&\f') != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += dl(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += z2(y);
        break;
      case 92:
        x += F2(fl() - 1, 7);
        continue;
      case 47:
        switch (zt()) {
          case 42:
          case 47:
            Xi(H2(U2(at(), fl()), t, n), u);
            break;
          default:
            x += '/';
        }
        break;
      case 123 * m:
        a[s++] = $t(x) * p;
      case 125 * m:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            S = 0;
          case 59 + d:
            g > 0 && $t(x) - h && Xi(g > 32 ? kp(x + ';', r, n, h - 1) : kp(Y(x, ' ', '') + ';', r, n, h - 2), u);
            break;
          case 59:
            x += ';';
          default:
            if ((Xi((T = Ep(x, t, n, s, d, o, a, v, (w = []), (E = []), h)), i), f === 123))
              if (d === 0) pl(x, t, T, T, w, i, h, a, E);
              else
                switch (c === 99 && Me(x, 3) === 110 ? 100 : c) {
                  case 100:
                  case 109:
                  case 115:
                    pl(e, T, T, r && Xi(Ep(e, T, T, 0, 0, o, a, v, o, (w = []), h), E), o, E, h, a, r ? w : E);
                    break;
                  default:
                    pl(x, T, T, T, [''], E, 0, a, E);
                }
        }
        (s = d = g = 0), (m = p = 1), (v = x = ''), (h = l);
        break;
      case 58:
        (h = 1 + $t(x)), (g = y);
      default:
        if (m < 1) {
          if (f == 123) --m;
          else if (f == 125 && m++ == 0 && j2() == 125) continue;
        }
        switch (((x += Qa(f)), f * m)) {
          case 38:
            p = d > 0 ? 1 : ((x += '\f'), -1);
            break;
          case 44:
            (a[s++] = ($t(x) - 1) * p), (p = 1);
            break;
          case 64:
            zt() === 45 && (x += dl(at())), (c = zt()), (d = h = $t((v = x += B2(fl())))), f++;
            break;
          case 45:
            y === 45 && $t(x) == 2 && (m = 0);
        }
    }
  return i;
}
function Ep(e, t, n, r, o, i, l, a, u, s, d) {
  for (var h = o - 1, c = o === 0 ? i : [''], g = Sf(c), y = 0, m = 0, S = 0; y < r; ++y)
    for (var p = 0, f = ui(e, h + 1, (h = L2((m = l[y])))), v = e; p < g; ++p)
      (v = b0(m > 0 ? c[p] + ' ' + f : Y(f, /&\f/g, c[p]))) && (u[S++] = v);
  return Ya(e, t, n, o === 0 ? yf : a, u, s, d);
}
function H2(e, t, n) {
  return Ya(e, t, n, P0, Qa(N2()), ui(e, 2, -2), 0);
}
function kp(e, t, n, r) {
  return Ya(e, t, n, wf, ui(e, 0, r), ui(e, r + 1, -1), r);
}
function Fr(e, t) {
  for (var n = '', r = Sf(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || '';
  return n;
}
function V2(e, t, n, r) {
  switch (e.type) {
    case A2:
    case wf:
      return (e.return = e.return || e.value);
    case P0:
      return '';
    case T0:
      return (e.return = e.value + '{' + Fr(e.children, r) + '}');
    case yf:
      e.value = e.props.join(',');
  }
  return $t((n = Fr(e.children, r))) ? (e.return = e.value + '{' + n + '}') : '';
}
function K2(e) {
  var t = Sf(e);
  return function (n, r, o, i) {
    for (var l = '', a = 0; a < t; a++) l += e[a](n, r, o, i) || '';
    return l;
  };
}
function Q2(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var G2 = function (t, n, r) {
    for (var o = 0, i = 0; (o = i), (i = zt()), o === 38 && i === 12 && (n[r] = 1), !si(i); ) at();
    return Ei(t, et);
  },
  Y2 = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (si(o)) {
        case 0:
          o === 38 && zt() === 12 && (n[r] = 1), (t[r] += G2(et - 1, n, r));
          break;
        case 2:
          t[r] += dl(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = zt() === 58 ? '&\f' : ''), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Qa(o);
      }
    while ((o = at()));
    return t;
  },
  X2 = function (t, n) {
    return L0(Y2(A0(t), n));
  },
  Cp = new WeakMap(),
  Z2 = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== 'rule'; )
        if (((r = r.parent), !r)) return;
      if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Cp.get(r)) && !o) {
        Cp.set(t, !0);
        for (var i = [], l = X2(n, i), a = r.props, u = 0, s = 0; u < l.length; u++)
          for (var d = 0; d < a.length; d++, s++) t.props[s] = i[u] ? l[u].replace(/&\f/g, a[d]) : a[d] + ' ' + l[u];
      }
    }
  },
  J2 = function (t) {
    if (t.type === 'decl') {
      var n = t.value;
      n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && ((t.return = ''), (t.value = ''));
    }
  };
function $0(e, t) {
  switch (M2(e, t)) {
    case 5103:
      return G + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return G + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return G + e + Jl + e + Ue + e + e;
    case 6828:
    case 4268:
      return G + e + Ue + e + e;
    case 6165:
      return G + e + Ue + 'flex-' + e + e;
    case 5187:
      return G + e + Y(e, /(\w+).+(:[^]+)/, G + 'box-$1$2' + Ue + 'flex-$1$2') + e;
    case 5443:
      return G + e + Ue + 'flex-item-' + Y(e, /flex-|-self/, '') + e;
    case 4675:
      return G + e + Ue + 'flex-line-pack' + Y(e, /align-content|flex-|-self/, '') + e;
    case 5548:
      return G + e + Ue + Y(e, 'shrink', 'negative') + e;
    case 5292:
      return G + e + Ue + Y(e, 'basis', 'preferred-size') + e;
    case 6060:
      return G + 'box-' + Y(e, '-grow', '') + G + e + Ue + Y(e, 'grow', 'positive') + e;
    case 4554:
      return G + Y(e, /([^-])(transform)/g, '$1' + G + '$2') + e;
    case 6187:
      return Y(Y(Y(e, /(zoom-|grab)/, G + '$1'), /(image-set)/, G + '$1'), e, '') + e;
    case 5495:
    case 3959:
      return Y(e, /(image-set\([^]*)/, G + '$1$`$1');
    case 4968:
      return Y(Y(e, /(.+:)(flex-)?(.*)/, G + 'box-pack:$3' + Ue + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + G + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Y(e, /(.+)-inline(.+)/, G + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if ($t(e) - 1 - t > 6)
        switch (Me(e, t + 1)) {
          case 109:
            if (Me(e, t + 4) !== 45) break;
          case 102:
            return Y(e, /(.+:)(.+)-([^]+)/, '$1' + G + '$2-$3$1' + Jl + (Me(e, t + 3) == 108 ? '$3' : '$2-$3')) + e;
          case 115:
            return ~Js(e, 'stretch') ? $0(Y(e, 'stretch', 'fill-available'), t) + e : e;
        }
      break;
    case 4949:
      if (Me(e, t + 1) !== 115) break;
    case 6444:
      switch (Me(e, $t(e) - 3 - (~Js(e, '!important') && 10))) {
        case 107:
          return Y(e, ':', ':' + G) + e;
        case 101:
          return (
            Y(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' + G + (Me(e, 14) === 45 ? 'inline-' : '') + 'box$3$1' + G + '$2$3$1' + Ue + '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (Me(e, t + 11)) {
        case 114:
          return G + e + Ue + Y(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return G + e + Ue + Y(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return G + e + Ue + Y(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return G + e + Ue + e + e;
  }
  return e;
}
var q2 = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case wf:
          t.return = $0(t.value, t.length);
          break;
        case T0:
          return Fr([So(t, { value: Y(t.value, '@', '@' + G) })], o);
        case yf:
          if (t.length)
            return I2(t.props, function (i) {
              switch (D2(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return Fr([So(t, { props: [Y(i, /:(read-\w+)/, ':' + Jl + '$1')] })], o);
                case '::placeholder':
                  return Fr(
                    [
                      So(t, { props: [Y(i, /:(plac\w+)/, ':' + G + 'input-$1')] }),
                      So(t, { props: [Y(i, /:(plac\w+)/, ':' + Jl + '$1')] }),
                      So(t, { props: [Y(i, /:(plac\w+)/, Ue + 'input-$1')] }),
                    ],
                    o
                  );
              }
              return '';
            });
      }
  },
  ek = [q2],
  tk = function (t) {
    var n = t.key;
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(r, function (m) {
        var S = m.getAttribute('data-emotion');
        S.indexOf(' ') !== -1 && (document.head.appendChild(m), m.setAttribute('data-s', ''));
      });
    }
    var o = t.stylisPlugins || ek,
      i = {},
      l,
      a = [];
    (l = t.container || document.head),
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function (m) {
        for (var S = m.getAttribute('data-emotion').split(' '), p = 1; p < S.length; p++) i[S[p]] = !0;
        a.push(m);
      });
    var u,
      s = [Z2, J2];
    {
      var d,
        h = [
          V2,
          Q2(function (m) {
            d.insert(m);
          }),
        ],
        c = K2(s.concat(o, h)),
        g = function (S) {
          return Fr(W2(S), c);
        };
      u = function (S, p, f, v) {
        (d = f), g(S ? S + '{' + p.styles + '}' : p.styles), v && (y.inserted[p.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new R2({
        key: n,
        container: l,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: u,
    };
    return y.sheet.hydrate(a), y;
  },
  nk = !0,
  rk = function (t, n, r) {
    var o = t.key + '-' + n.name;
    (r === !1 || nk === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
  },
  ok = function (t, n, r) {
    rk(t, n, r);
    var o = t.key + '-' + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? '.' + o : '', i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function ik(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var lk = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  ak = /[A-Z]|^ms/g,
  uk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  M0 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  _p = function (t) {
    return t != null && typeof t != 'boolean';
  },
  Hu = P2(function (e) {
    return M0(e) ? e : e.replace(ak, '-$&').toLowerCase();
  }),
  Op = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(uk, function (r, o, i) {
            return (Mt = { name: o, styles: i, next: Mt }), o;
          });
    }
    return lk[t] !== 1 && !M0(t) && typeof n == 'number' && n !== 0 ? n + 'px' : n;
  };
function ci(e, t, n) {
  if (n == null) return '';
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case 'boolean':
      return '';
    case 'object': {
      if (n.anim === 1) return (Mt = { name: n.name, styles: n.styles, next: Mt }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0) for (; r !== void 0; ) (Mt = { name: r.name, styles: r.styles, next: Mt }), (r = r.next);
        var o = n.styles + ';';
        return o;
      }
      return sk(e, t, n);
    }
    case 'function': {
      if (e !== void 0) {
        var i = Mt,
          l = n(e);
        return (Mt = i), ci(e, t, l);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function sk(e, t, n) {
  var r = '';
  if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += ci(e, t, n[o]) + ';';
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != 'object')
        t != null && t[l] !== void 0 ? (r += i + '{' + t[l] + '}') : _p(l) && (r += Hu(i) + ':' + Op(i, l) + ';');
      else if (Array.isArray(l) && typeof l[0] == 'string' && (t == null || t[l[0]] === void 0))
        for (var a = 0; a < l.length; a++) _p(l[a]) && (r += Hu(i) + ':' + Op(i, l[a]) + ';');
      else {
        var u = ci(e, t, l);
        switch (i) {
          case 'animation':
          case 'animationName': {
            r += Hu(i) + ':' + u + ';';
            break;
          }
          default:
            r += i + '{' + u + '}';
        }
      }
    }
  return r;
}
var Pp = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Mt,
  ck = function (t, n, r) {
    if (t.length === 1 && typeof t[0] == 'object' && t[0] !== null && t[0].styles !== void 0) return t[0];
    var o = !0,
      i = '';
    Mt = void 0;
    var l = t[0];
    l == null || l.raw === void 0 ? ((o = !1), (i += ci(r, n, l))) : (i += l[0]);
    for (var a = 1; a < t.length; a++) (i += ci(r, n, t[a])), o && (i += l[a]);
    Pp.lastIndex = 0;
    for (var u = '', s; (s = Pp.exec(i)) !== null; ) u += '-' + s[1];
    var d = ik(i) + u;
    return { name: d, styles: i, next: Mt };
  },
  fk = Uo['useInsertionEffect'] ? Uo['useInsertionEffect'] : !1,
  Tp = fk || C.useLayoutEffect,
  D0 = C.createContext(typeof HTMLElement < 'u' ? tk({ key: 'css' }) : null);
D0.Provider;
var dk = function (t) {
    return C.forwardRef(function (n, r) {
      var o = C.useContext(D0);
      return t(n, o, r);
    });
  },
  I0 = C.createContext({}),
  pk = dk(function (e, t) {
    var n = e.styles,
      r = ck([n], void 0, C.useContext(I0)),
      o = C.useRef();
    return (
      Tp(
        function () {
          var i = t.key + '-global',
            l = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            u = document.querySelector('style[data-emotion="' + i + ' ' + r.name + '"]');
          return (
            t.sheet.tags.length && (l.before = t.sheet.tags[0]),
            u !== null && ((a = !0), u.setAttribute('data-emotion', i), l.hydrate([u])),
            (o.current = [l, a]),
            function () {
              l.flush();
            }
          );
        },
        [t]
      ),
      Tp(
        function () {
          var i = o.current,
            l = i[0],
            a = i[1];
          if (a) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && ok(t, r.next, !0), l.tags.length)) {
            var u = l.tags[l.tags.length - 1].nextElementSibling;
            (l.before = u), l.flush();
          }
          t.insert('', r, l, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function hk(e) {
  return e == null || Object.keys(e).length === 0;
}
function mk(e) {
  const { styles: t, defaultTheme: n = {} } = e;
  return se(pk, { styles: typeof t == 'function' ? (o) => t(hk(o) ? n : o) : t });
}
function Vn() {
  return (
    (Vn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vn.apply(this, arguments)
  );
}
function Fo(e, t) {
  return t ? en(e, t, { clone: !1 }) : e;
}
const xf = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  bp = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (e) => `@media (min-width:${xf[e]}px)` };
function ln(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || bp;
    return t.reduce((l, a, u) => ((l[i.up(i.keys[u])] = n(t[u])), l), {});
  }
  if (typeof t == 'object') {
    const i = r.breakpoints || bp;
    return Object.keys(t).reduce((l, a) => {
      if (Object.keys(i.values || xf).indexOf(a) !== -1) {
        const u = i.up(a);
        l[u] = n(t[a], a);
      } else {
        const u = a;
        l[u] = t[u];
      }
      return l;
    }, {});
  }
  return n(t);
}
function vk(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function gk(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Xa(e, t, n = !0) {
  if (!t || typeof t != 'string') return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split('.').reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split('.').reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function ql(e, t, n, r = n) {
  let o;
  return (
    typeof e == 'function' ? (o = e(n)) : Array.isArray(e) ? (o = e[n] || r) : (o = Xa(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function X(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (l) => {
      if (l[t] == null) return null;
      const a = l[t],
        u = l.theme,
        s = Xa(u, r) || {};
      return ln(l, a, (h) => {
        let c = ql(s, o, h);
        return (
          h === c && typeof h == 'string' && (c = ql(s, o, `${t}${h === 'default' ? '' : _0(h)}`, h)),
          n === !1 ? c : { [n]: c }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function Za(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Fo(o, t[i](r)) : o), {});
  return (n.propTypes = {}), (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])), n;
}
function yk(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const wk = { m: 'margin', p: 'padding' },
  Sk = { t: 'Top', r: 'Right', b: 'Bottom', l: 'Left', x: ['Left', 'Right'], y: ['Top', 'Bottom'] },
  Rp = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  xk = yk((e) => {
    if (e.length > 2)
      if (Rp[e]) e = Rp[e];
      else return [e];
    const [t, n] = e.split(''),
      r = wk[t],
      o = Sk[n] || '';
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  Ef = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  kf = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...Ef, ...kf];
function ki(e, t, n, r) {
  var o;
  const i = (o = Xa(e, t, !1)) != null ? o : n;
  return typeof i == 'number'
    ? (l) => (typeof l == 'string' ? l : i * l)
    : Array.isArray(i)
    ? (l) => (typeof l == 'string' ? l : i[l])
    : typeof i == 'function'
    ? i
    : () => {};
}
function N0(e) {
  return ki(e, 'spacing', 8);
}
function Ci(e, t) {
  if (typeof t == 'string' || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`;
}
function Ek(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = Ci(t, n)), r), {});
}
function kk(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = xk(n),
    i = Ek(o, r),
    l = e[n];
  return ln(e, l, i);
}
function j0(e, t) {
  const n = N0(e.theme);
  return Object.keys(e)
    .map((r) => kk(e, t, r, n))
    .reduce(Fo, {});
}
function pe(e) {
  return j0(e, Ef);
}
pe.propTypes = {};
pe.filterProps = Ef;
function he(e) {
  return j0(e, kf);
}
he.propTypes = {};
he.filterProps = kf;
function It(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
const Ck = X({ prop: 'border', themeKey: 'borders', transform: It }),
  _k = X({ prop: 'borderTop', themeKey: 'borders', transform: It }),
  Ok = X({ prop: 'borderRight', themeKey: 'borders', transform: It }),
  Pk = X({ prop: 'borderBottom', themeKey: 'borders', transform: It }),
  Tk = X({ prop: 'borderLeft', themeKey: 'borders', transform: It }),
  bk = X({ prop: 'borderColor', themeKey: 'palette' }),
  Rk = X({ prop: 'borderTopColor', themeKey: 'palette' }),
  Ak = X({ prop: 'borderRightColor', themeKey: 'palette' }),
  Lk = X({ prop: 'borderBottomColor', themeKey: 'palette' }),
  $k = X({ prop: 'borderLeftColor', themeKey: 'palette' }),
  Ja = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = ki(e.theme, 'shape.borderRadius', 4),
        n = (r) => ({ borderRadius: Ci(t, r) });
      return ln(e, e.borderRadius, n);
    }
    return null;
  };
Ja.propTypes = {};
Ja.filterProps = ['borderRadius'];
Za(Ck, _k, Ok, Pk, Tk, bk, Rk, Ak, Lk, $k, Ja);
const qa = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ki(e.theme, 'spacing', 8),
      n = (r) => ({ gap: Ci(t, r) });
    return ln(e, e.gap, n);
  }
  return null;
};
qa.propTypes = {};
qa.filterProps = ['gap'];
const eu = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ki(e.theme, 'spacing', 8),
      n = (r) => ({ columnGap: Ci(t, r) });
    return ln(e, e.columnGap, n);
  }
  return null;
};
eu.propTypes = {};
eu.filterProps = ['columnGap'];
const tu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ki(e.theme, 'spacing', 8),
      n = (r) => ({ rowGap: Ci(t, r) });
    return ln(e, e.rowGap, n);
  }
  return null;
};
tu.propTypes = {};
tu.filterProps = ['rowGap'];
const Mk = X({ prop: 'gridColumn' }),
  Dk = X({ prop: 'gridRow' }),
  Ik = X({ prop: 'gridAutoFlow' }),
  Nk = X({ prop: 'gridAutoColumns' }),
  jk = X({ prop: 'gridAutoRows' }),
  zk = X({ prop: 'gridTemplateColumns' }),
  Fk = X({ prop: 'gridTemplateRows' }),
  Uk = X({ prop: 'gridTemplateAreas' }),
  Bk = X({ prop: 'gridArea' });
Za(qa, eu, tu, Mk, Dk, Ik, Nk, jk, zk, Fk, Uk, Bk);
function Ur(e, t) {
  return t === 'grey' ? t : e;
}
const Wk = X({ prop: 'color', themeKey: 'palette', transform: Ur }),
  Hk = X({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette', transform: Ur }),
  Vk = X({ prop: 'backgroundColor', themeKey: 'palette', transform: Ur });
Za(Wk, Hk, Vk);
function ot(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Kk = X({ prop: 'width', transform: ot }),
  Cf = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o, i;
        return {
          maxWidth:
            ((r = e.theme) == null || (o = r.breakpoints) == null || (i = o.values) == null ? void 0 : i[n]) ||
            xf[n] ||
            ot(n),
        };
      };
      return ln(e, e.maxWidth, t);
    }
    return null;
  };
Cf.filterProps = ['maxWidth'];
const Qk = X({ prop: 'minWidth', transform: ot }),
  Gk = X({ prop: 'height', transform: ot }),
  Yk = X({ prop: 'maxHeight', transform: ot }),
  Xk = X({ prop: 'minHeight', transform: ot });
X({ prop: 'size', cssProperty: 'width', transform: ot });
X({ prop: 'size', cssProperty: 'height', transform: ot });
const Zk = X({ prop: 'boxSizing' });
Za(Kk, Cf, Qk, Gk, Yk, Xk, Zk);
const Jk = {
    border: { themeKey: 'borders', transform: It },
    borderTop: { themeKey: 'borders', transform: It },
    borderRight: { themeKey: 'borders', transform: It },
    borderBottom: { themeKey: 'borders', transform: It },
    borderLeft: { themeKey: 'borders', transform: It },
    borderColor: { themeKey: 'palette' },
    borderTopColor: { themeKey: 'palette' },
    borderRightColor: { themeKey: 'palette' },
    borderBottomColor: { themeKey: 'palette' },
    borderLeftColor: { themeKey: 'palette' },
    borderRadius: { themeKey: 'shape.borderRadius', style: Ja },
    color: { themeKey: 'palette', transform: Ur },
    bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: Ur },
    backgroundColor: { themeKey: 'palette', transform: Ur },
    p: { style: he },
    pt: { style: he },
    pr: { style: he },
    pb: { style: he },
    pl: { style: he },
    px: { style: he },
    py: { style: he },
    padding: { style: he },
    paddingTop: { style: he },
    paddingRight: { style: he },
    paddingBottom: { style: he },
    paddingLeft: { style: he },
    paddingX: { style: he },
    paddingY: { style: he },
    paddingInline: { style: he },
    paddingInlineStart: { style: he },
    paddingInlineEnd: { style: he },
    paddingBlock: { style: he },
    paddingBlockStart: { style: he },
    paddingBlockEnd: { style: he },
    m: { style: pe },
    mt: { style: pe },
    mr: { style: pe },
    mb: { style: pe },
    ml: { style: pe },
    mx: { style: pe },
    my: { style: pe },
    margin: { style: pe },
    marginTop: { style: pe },
    marginRight: { style: pe },
    marginBottom: { style: pe },
    marginLeft: { style: pe },
    marginX: { style: pe },
    marginY: { style: pe },
    marginInline: { style: pe },
    marginInlineStart: { style: pe },
    marginInlineEnd: { style: pe },
    marginBlock: { style: pe },
    marginBlockStart: { style: pe },
    marginBlockEnd: { style: pe },
    displayPrint: { cssProperty: !1, transform: (e) => ({ '@media print': { display: e } }) },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: qa },
    rowGap: { style: tu },
    columnGap: { style: eu },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: 'zIndex' },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: 'shadows' },
    width: { transform: ot },
    maxWidth: { style: Cf },
    minWidth: { transform: ot },
    height: { transform: ot },
    maxHeight: { transform: ot },
    minHeight: { transform: ot },
    boxSizing: {},
    fontFamily: { themeKey: 'typography' },
    fontSize: { themeKey: 'typography' },
    fontStyle: { themeKey: 'typography' },
    fontWeight: { themeKey: 'typography' },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: 'typography' },
  },
  _f = Jk;
function qk(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function eC(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function tC() {
  function e(n, r, o, i) {
    const l = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: u = n, themeKey: s, transform: d, style: h } = a;
    if (r == null) return null;
    const c = Xa(o, s) || {};
    return h
      ? h(l)
      : ln(l, r, (y) => {
          let m = ql(c, d, y);
          return (
            y === m && typeof y == 'string' && (m = ql(c, d, `${n}${y === 'default' ? '' : _0(y)}`, y)),
            u === !1 ? m : { [u]: m }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const l = (r = i.unstable_sxConfig) != null ? r : _f;
    function a(u) {
      let s = u;
      if (typeof u == 'function') s = u(i);
      else if (typeof u != 'object') return u;
      if (!s) return null;
      const d = vk(i.breakpoints),
        h = Object.keys(d);
      let c = d;
      return (
        Object.keys(s).forEach((g) => {
          const y = eC(s[g], i);
          if (y != null)
            if (typeof y == 'object')
              if (l[g]) c = Fo(c, e(g, y, i, l));
              else {
                const m = ln({ theme: i }, y, (S) => ({ [g]: S }));
                qk(m, y) ? (c[g] = t({ sx: y, theme: i })) : (c = Fo(c, m));
              }
            else c = Fo(c, e(g, y, i, l));
        }),
        gk(h, c)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const z0 = tC();
z0.filterProps = ['sx'];
const F0 = z0;
function U0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const nC = ['values', 'unit', 'step'],
  rC = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => Vn({}, n, { [r.key]: r.val }), {});
  };
function oC(e) {
  const { values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: n = 'px', step: r = 5 } = e,
    o = U0(e, nC),
    i = rC(t),
    l = Object.keys(i);
  function a(c) {
    return `@media (min-width:${typeof t[c] == 'number' ? t[c] : c}${n})`;
  }
  function u(c) {
    return `@media (max-width:${(typeof t[c] == 'number' ? t[c] : c) - r / 100}${n})`;
  }
  function s(c, g) {
    const y = l.indexOf(g);
    return `@media (min-width:${typeof t[c] == 'number' ? t[c] : c}${n}) and (max-width:${
      (y !== -1 && typeof t[l[y]] == 'number' ? t[l[y]] : g) - r / 100
    }${n})`;
  }
  function d(c) {
    return l.indexOf(c) + 1 < l.length ? s(c, l[l.indexOf(c) + 1]) : a(c);
  }
  function h(c) {
    const g = l.indexOf(c);
    return g === 0
      ? a(l[1])
      : g === l.length - 1
      ? u(l[g])
      : s(c, l[l.indexOf(c) + 1]).replace('@media', '@media not all and');
  }
  return Vn({ keys: l, values: i, up: a, down: u, between: s, only: d, not: h, unit: n }, o);
}
const iC = { borderRadius: 4 },
  lC = iC;
function aC(e = 8) {
  if (e.mui) return e;
  const t = N0({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const l = t(i);
          return typeof l == 'number' ? `${l}px` : l;
        })
        .join(' ');
  return (n.mui = !0), n;
}
const uC = ['breakpoints', 'palette', 'spacing', 'shape'];
function B0(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    l = U0(e, uC),
    a = oC(n),
    u = aC(o);
  let s = en(
    {
      breakpoints: a,
      direction: 'ltr',
      components: {},
      palette: Vn({ mode: 'light' }, r),
      spacing: u,
      shape: Vn({}, lC, i),
    },
    l
  );
  return (
    (s = t.reduce((d, h) => en(d, h), s)),
    (s.unstable_sxConfig = Vn({}, _f, l == null ? void 0 : l.unstable_sxConfig)),
    (s.unstable_sx = function (h) {
      return F0({ sx: h, theme: this });
    }),
    s
  );
}
function ec() {
  return (
    (ec = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ec.apply(this, arguments)
  );
}
const sC = C.createContext(null),
  W0 = sC;
function H0() {
  return C.useContext(W0);
}
const cC = typeof Symbol == 'function' && Symbol.for,
  fC = cC ? Symbol.for('mui.nested') : '__THEME_NESTED__';
function dC(e, t) {
  return typeof t == 'function' ? t(e) : ec({}, e, t);
}
function pC(e) {
  const { children: t, theme: n } = e,
    r = H0(),
    o = C.useMemo(() => {
      const i = r === null ? n : dC(r, n);
      return i != null && (i[fC] = r !== null), i;
    }, [n, r]);
  return se(W0.Provider, { value: o, children: t });
}
function hC(e) {
  return Object.keys(e).length === 0;
}
function mC(e = null) {
  const t = H0();
  return !t || hC(t) ? e : t;
}
const vC = B0();
function V0(e = vC) {
  return mC(e);
}
function gC(e) {
  const { theme: t, name: n, props: r } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps
    ? r
    : O0(t.components[n].defaultProps, r);
}
function yC({ props: e, name: t, defaultTheme: n }) {
  const r = V0(n);
  return gC({ theme: r, name: t, props: e });
}
function Of(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function wC(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? 'a' : ''}(${n
          .map((r, o) => (o < 3 ? parseInt(r, 16) : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3))
          .join(', ')})`
      : ''
  );
}
function Jn(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return Jn(wC(e));
  const t = e.indexOf('('),
    n = e.substring(0, t);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1) throw new Error(qr(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === 'color') {
    if (
      ((r = r.split(' ')),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === '/' && (r[3] = r[3].slice(1)),
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(o) === -1)
    )
      throw new Error(qr(10, o));
  } else r = r.split(',');
  return (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o };
}
function nu(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf('rgb') !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf('hsl') !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf('color') !== -1 ? (r = `${n} ${r.join(' ')}`) : (r = `${r.join(', ')}`),
    `${t}(${r})`
  );
}
function SC(e) {
  e = Jn(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    l = (s, d = (s + n / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let a = 'rgb';
  const u = [Math.round(l(0) * 255), Math.round(l(8) * 255), Math.round(l(4) * 255)];
  return e.type === 'hsla' && ((a += 'a'), u.push(t[3])), nu({ type: a, values: u });
}
function Ap(e) {
  e = Jn(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? Jn(SC(e)).values : e.values;
  return (
    (t = t.map((n) => (e.type !== 'color' && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4))),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function xC(e, t) {
  const n = Ap(e),
    r = Ap(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Zi(e, t) {
  return (
    (e = Jn(e)),
    (t = Of(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    nu(e)
  );
}
function EC(e, t) {
  if (((e = Jn(e)), (t = Of(t)), e.type.indexOf('hsl') !== -1)) e.values[2] *= 1 - t;
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return nu(e);
}
function kC(e, t) {
  if (((e = Jn(e)), (t = Of(t)), e.type.indexOf('hsl') !== -1)) e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf('rgb') !== -1) for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf('color') !== -1) for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return nu(e);
}
const CC = {};
function _C(e) {
  const t = V0();
  return se(I0.Provider, { value: typeof t == 'object' ? t : CC, children: e.children });
}
function OC(e) {
  const { children: t, theme: n } = e;
  return se(pC, { theme: n, children: se(_C, { children: t }) });
}
function ru(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function PC(e, t) {
  return Te(
    {
      toolbar: {
        minHeight: 56,
        [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
        [e.up('sm')]: { minHeight: 64 },
      },
    },
    t
  );
}
const TC = { black: '#000', white: '#fff' },
  fi = TC,
  bC = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  RC = bC,
  AC = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
  },
  fr = AC,
  LC = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  },
  Nn = LC,
  $C = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  },
  xo = $C,
  MC = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  },
  dr = MC,
  DC = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
  },
  pr = DC,
  IC = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  },
  hr = IC,
  NC = ['mode', 'contrastThreshold', 'tonalOffset'],
  Lp = {
    text: { primary: 'rgba(0, 0, 0, 0.87)', secondary: 'rgba(0, 0, 0, 0.6)', disabled: 'rgba(0, 0, 0, 0.38)' },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: fi.white, default: fi.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Vu = {
    text: {
      primary: fi.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: fi.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function $p(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
      ? (e.light = kC(e.main, o))
      : t === 'dark' && (e.dark = EC(e.main, i)));
}
function jC(e = 'light') {
  return e === 'dark'
    ? { main: dr[200], light: dr[50], dark: dr[400] }
    : { main: dr[700], light: dr[400], dark: dr[800] };
}
function zC(e = 'light') {
  return e === 'dark'
    ? { main: fr[200], light: fr[50], dark: fr[400] }
    : { main: fr[500], light: fr[300], dark: fr[700] };
}
function FC(e = 'light') {
  return e === 'dark'
    ? { main: Nn[500], light: Nn[300], dark: Nn[700] }
    : { main: Nn[700], light: Nn[400], dark: Nn[800] };
}
function UC(e = 'light') {
  return e === 'dark'
    ? { main: pr[400], light: pr[300], dark: pr[700] }
    : { main: pr[700], light: pr[500], dark: pr[900] };
}
function BC(e = 'light') {
  return e === 'dark'
    ? { main: hr[400], light: hr[300], dark: hr[700] }
    : { main: hr[800], light: hr[500], dark: hr[900] };
}
function WC(e = 'light') {
  return e === 'dark'
    ? { main: xo[400], light: xo[300], dark: xo[700] }
    : { main: '#ed6c02', light: xo[500], dark: xo[900] };
}
function HC(e) {
  const { mode: t = 'light', contrastThreshold: n = 3, tonalOffset: r = 0.2 } = e,
    o = ru(e, NC),
    i = e.primary || jC(t),
    l = e.secondary || zC(t),
    a = e.error || FC(t),
    u = e.info || UC(t),
    s = e.success || BC(t),
    d = e.warning || WC(t);
  function h(m) {
    return xC(m, Vu.text.primary) >= n ? Vu.text.primary : Lp.text.primary;
  }
  const c = ({ color: m, name: S, mainShade: p = 500, lightShade: f = 300, darkShade: v = 700 }) => {
      if (((m = Te({}, m)), !m.main && m[p] && (m.main = m[p]), !m.hasOwnProperty('main')))
        throw new Error(qr(11, S ? ` (${S})` : '', p));
      if (typeof m.main != 'string') throw new Error(qr(12, S ? ` (${S})` : '', JSON.stringify(m.main)));
      return $p(m, 'light', f, r), $p(m, 'dark', v, r), m.contrastText || (m.contrastText = h(m.main)), m;
    },
    g = { dark: Vu, light: Lp };
  return en(
    Te(
      {
        common: Te({}, fi),
        mode: t,
        primary: c({ color: i, name: 'primary' }),
        secondary: c({ color: l, name: 'secondary', mainShade: 'A400', lightShade: 'A200', darkShade: 'A700' }),
        error: c({ color: a, name: 'error' }),
        warning: c({ color: d, name: 'warning' }),
        info: c({ color: u, name: 'info' }),
        success: c({ color: s, name: 'success' }),
        grey: RC,
        contrastThreshold: n,
        getContrastText: h,
        augmentColor: c,
        tonalOffset: r,
      },
      g[t]
    ),
    o
  );
}
const VC = [
  'fontFamily',
  'fontSize',
  'fontWeightLight',
  'fontWeightRegular',
  'fontWeightMedium',
  'fontWeightBold',
  'htmlFontSize',
  'allVariants',
  'pxToRem',
];
function KC(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Mp = { textTransform: 'uppercase' },
  Dp = '"Roboto", "Helvetica", "Arial", sans-serif';
function QC(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: r = Dp,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: l = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: u = 700,
      htmlFontSize: s = 16,
      allVariants: d,
      pxToRem: h,
    } = n,
    c = ru(n, VC),
    g = o / 14,
    y = h || ((p) => `${(p / s) * g}rem`),
    m = (p, f, v, w, E) =>
      Te(
        { fontFamily: r, fontWeight: p, fontSize: y(f), lineHeight: v },
        r === Dp ? { letterSpacing: `${KC(w / f)}em` } : {},
        E,
        d
      ),
    S = {
      h1: m(i, 96, 1.167, -1.5),
      h2: m(i, 60, 1.2, -0.5),
      h3: m(l, 48, 1.167, 0),
      h4: m(l, 34, 1.235, 0.25),
      h5: m(l, 24, 1.334, 0),
      h6: m(a, 20, 1.6, 0.15),
      subtitle1: m(l, 16, 1.75, 0.15),
      subtitle2: m(a, 14, 1.57, 0.1),
      body1: m(l, 16, 1.5, 0.15),
      body2: m(l, 14, 1.43, 0.15),
      button: m(a, 14, 1.75, 0.4, Mp),
      caption: m(l, 12, 1.66, 0.4),
      overline: m(l, 12, 2.66, 1, Mp),
    };
  return en(
    Te(
      {
        htmlFontSize: s,
        pxToRem: y,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: l,
        fontWeightMedium: a,
        fontWeightBold: u,
      },
      S
    ),
    c,
    { clone: !1 }
  );
}
const GC = 0.2,
  YC = 0.14,
  XC = 0.12;
function le(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${GC})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${YC})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${XC})`,
  ].join(',');
}
const ZC = [
    'none',
    le(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    le(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    le(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    le(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    le(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    le(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    le(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    le(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    le(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    le(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    le(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    le(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    le(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    le(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    le(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    le(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    le(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    le(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    le(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    le(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    le(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    le(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    le(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    le(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  JC = ZC,
  qC = ['duration', 'easing', 'delay'],
  e_ = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  t_ = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Ip(e) {
  return `${Math.round(e)}ms`;
}
function n_(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function r_(e) {
  const t = Te({}, e_, e.easing),
    n = Te({}, t_, e.duration);
  return Te(
    {
      getAutoHeightDuration: n_,
      create: (o = ['all'], i = {}) => {
        const { duration: l = n.standard, easing: a = t.easeInOut, delay: u = 0 } = i;
        return (
          ru(i, qC),
          (Array.isArray(o) ? o : [o])
            .map((s) => `${s} ${typeof l == 'string' ? l : Ip(l)} ${a} ${typeof u == 'string' ? u : Ip(u)}`)
            .join(',')
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const o_ = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  i_ = o_,
  l_ = ['breakpoints', 'mixins', 'spacing', 'palette', 'transitions', 'typography', 'shape'];
function K0(e = {}, ...t) {
  const { mixins: n = {}, palette: r = {}, transitions: o = {}, typography: i = {} } = e,
    l = ru(e, l_);
  if (e.vars) throw new Error(qr(18));
  const a = HC(r),
    u = B0(e);
  let s = en(u, {
    mixins: PC(u.breakpoints, n),
    palette: a,
    shadows: JC.slice(),
    typography: QC(a, i),
    transitions: r_(o),
    zIndex: Te({}, i_),
  });
  return (
    (s = en(s, l)),
    (s = t.reduce((d, h) => en(d, h), s)),
    (s.unstable_sxConfig = Te({}, _f, l == null ? void 0 : l.unstable_sxConfig)),
    (s.unstable_sx = function (h) {
      return F0({ sx: h, theme: this });
    }),
    s
  );
}
const a_ = K0(),
  Q0 = a_;
function u_({ props: e, name: t }) {
  return yC({ props: e, name: t, defaultTheme: Q0 });
}
function s_(e) {
  return se(mk, Te({}, e, { defaultTheme: Q0 }));
}
const c_ = (e, t) =>
    Te(
      {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        boxSizing: 'border-box',
        WebkitTextSizeAdjust: '100%',
      },
      t && !e.vars && { colorScheme: e.palette.mode }
    ),
  f_ = (e) =>
    Te({ color: (e.vars || e).palette.text.primary }, e.typography.body1, {
      backgroundColor: (e.vars || e).palette.background.default,
      '@media print': { backgroundColor: (e.vars || e).palette.common.white },
    }),
  d_ = (e, t = !1) => {
    var n, r;
    const o = {};
    t &&
      e.colorSchemes &&
      Object.entries(e.colorSchemes).forEach(([a, u]) => {
        var s;
        o[e.getColorSchemeSelector(a).replace(/\s*&/, '')] = { colorScheme: (s = u.palette) == null ? void 0 : s.mode };
      });
    let i = Te(
      {
        html: c_(e, t),
        '*, *::before, *::after': { boxSizing: 'inherit' },
        'strong, b': { fontWeight: e.typography.fontWeightBold },
        body: Te({ margin: 0 }, f_(e), {
          '&::backdrop': { backgroundColor: (e.vars || e).palette.background.default },
        }),
      },
      o
    );
    const l = (n = e.components) == null || (r = n.MuiCssBaseline) == null ? void 0 : r.styleOverrides;
    return l && (i = [i, l]), i;
  };
function p_(e) {
  const t = u_({ props: e, name: 'MuiCssBaseline' }),
    { children: n, enableColorScheme: r = !1 } = t;
  return ta(C.Fragment, { children: [se(s_, { styles: (o) => d_(o, r) }), n] });
}
const h_ = {
    typography: { fontFamily: ['Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(',') },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { fontWeight: '700', textTransform: 'capitalize', borderRadius: '8px', padding: '8px 16px' },
        },
        variants: [
          {
            props: { variant: 'outlined', color: 'primary' },
            style: {
              boxShadow: 'none',
              borderWidth: 1,
              '&:hover': { backgroundColor: 'rgba(0, 171, 85, 0.24)', boxShadow: 'none' },
            },
          },
          {
            props: { variant: 'contained', color: 'primary' },
            style: { boxShadow: '0px 8px 16px rgba(0, 171, 85, 0.24)' },
          },
          {
            props: { variant: 'contained', color: 'error' },
            style: { boxShadow: `0px 8px 16px ${Zi(Nn[500], 0.24)}` },
          },
          { props: { size: 'small' }, style: { padding: '8px' } },
        ],
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            WebkitBoxShadow: '0 0 0 1000px white inset',
            borderRadius: '16px',
            transition: 'border 250ms ease-in',
          },
          notchedOutline: { border: '1px solid #E5E7EB', borderRadius: '16px' },
        },
      },
      MuiFormHelperText: { styleOverrides: { root: { background: 'transparent' } } },
      MuiInputBase: {
        styleOverrides: {
          root: { borderRadius: '16px', '&:-webkit-autofill': { WebkitBoxShadow: '0 0 0 1000px white inset' } },
          input: { borderRadius: '16px', '&:-webkit-autofill': { WebkitBoxShadow: '0 0 0 1000px white inset' } },
        },
      },
      MuiTextField: { styleOverrides: { root: { background: 'transparent', borderRadius: '16px' } } },
      MuiTooltip: { styleOverrides: { tooltip: { fontSize: '13px' } } },
      MuiTypography: { styleOverrides: { h4: { fontSize: '2rem' } } },
      MuiMenuItem: {
        styleOverrides: { root: { '&:hover': { backgroundColor: Zi('#04BF8a', 0.08), color: '#04BF8a' } } },
      },
      MuiAlert: {
        styleOverrides: {
          root: { borderRadius: '4px' },
          action: { padding: '4px 0' },
          standardSuccess: {
            color: '#04BF8a',
            backgroundColor: '#04BF8a',
            borderRadius: '8px',
            '.MuiAlert-icon': { color: '#ffffff' },
          },
          outlinedSuccess: {
            color: '#097f4a',
            borderColor: '#04BF8a',
            backgroundColor: '#E1F7F1',
            borderRadius: '8px',
            '.MuiAlert-icon': { color: '#04BF8a' },
          },
          outlinedError: { backgroundColor: '#ffffff', borderRadius: '8px', '.MuiAlert-icon': { color: '#d32f2f' } },
          outlinedInfo: {
            color: '#097f4a',
            borderColor: '#04BF8a',
            backgroundColor: '#E1F7F1',
            borderRadius: '8px',
            '.MuiAlert-icon': { color: '#04BF8a' },
          },
        },
      },
      MuiCard: { styleOverrides: { root: { boxShadow: `0px 1px 2px ${Zi('#1F2937', 0.08)}`, borderRadius: '4px' } } },
    },
    palette: {
      primary: { main: '#04BF8a', dark: '#097f4a', light: '#9BE5D0', contrastText: '#ffffff' },
      secondary: { main: '#2D99FF' },
      text: { primary: '#212B36', secondary: '#637381' },
      grey: { 300: '#E5E7EB' },
      success: { main: '#47B247' },
      error: { main: '#FF4842' },
      background: { default: '#F9FAFB' },
      action: { hover: `${Zi('#04BF8a', 0.15)}` },
    },
  },
  m_ = K0(h_),
  v_ = 'modulepreload',
  g_ = function (e) {
    return '/' + e;
  },
  Np = {},
  y_ = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const o = document.getElementsByTagName('link');
    return Promise.all(
      n.map((i) => {
        if (((i = g_(i)), i in Np)) return;
        Np[i] = !0;
        const l = i.endsWith('.css'),
          a = l ? '[rel="stylesheet"]' : '';
        if (!!r)
          for (let d = o.length - 1; d >= 0; d--) {
            const h = o[d];
            if (h.href === i && (!l || h.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${i}"]${a}`)) return;
        const s = document.createElement('link');
        if (
          ((s.rel = l ? 'stylesheet' : v_),
          l || ((s.as = 'script'), (s.crossOrigin = '')),
          (s.href = i),
          document.head.appendChild(s),
          l)
        )
          return new Promise((d, h) => {
            s.addEventListener('load', d),
              s.addEventListener('error', () => h(new Error(`Unable to preload CSS for ${i}`)));
          });
      })
    ).then(() => t());
  },
  w_ = (e) => {
    e &&
      e instanceof Function &&
      y_(() => import('./web-vitals-e779d285.js'), []).then(
        ({ getCLS: t, getFID: n, getFCP: r, getLCP: o, getTTFB: i }) => {
          t(e), n(e), r(e), o(e), i(e);
        }
      );
  };
var Pf = {};
const S_ = zp(oS);
var x_ =
  (hl && hl.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(Pf, '__esModule', { value: !0 });
var G0 = (Pf.HistoryRouter = void 0),
  Ku = x_(C),
  E_ = S_;
function k_(e) {
  var t = e.basename,
    n = e.children,
    r = e.history,
    o = Ku.default.useState({ action: r.action, location: r.location }),
    i = o[0],
    l = o[1];
  return (
    Ku.default.useLayoutEffect(
      function () {
        return r.listen(l);
      },
      [r]
    ),
    Ku.default.createElement(E_.Router, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: r,
    })
  );
}
G0 = Pf.HistoryRouter = k_;
Qu.createRoot(document.getElementById('root')).render(
  se(Zt.StrictMode, {
    children: se(gS, {
      store: Zs,
      children: ta(OC, {
        theme: m_,
        children: [se(p_, {}), se(G0, { history: O2, children: se(Qx, { store: Zs, children: se(qS, {}) }) })],
      }),
    }),
  })
);
w_();
