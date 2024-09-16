function oy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function ay(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var jp = { exports: {} },
  $o = {},
  Dp = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ui = Symbol.for("react.element"),
  ly = Symbol.for("react.portal"),
  uy = Symbol.for("react.fragment"),
  cy = Symbol.for("react.strict_mode"),
  dy = Symbol.for("react.profiler"),
  fy = Symbol.for("react.provider"),
  py = Symbol.for("react.context"),
  hy = Symbol.for("react.forward_ref"),
  my = Symbol.for("react.suspense"),
  gy = Symbol.for("react.memo"),
  vy = Symbol.for("react.lazy"),
  ud = Symbol.iterator;
function yy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ud && e[ud]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Up = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zp = Object.assign,
  Fp = {};
function Ar(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fp),
    (this.updater = n || Up);
}
Ar.prototype.isReactComponent = {};
Ar.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ar.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $p() {}
$p.prototype = Ar.prototype;
function Pu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fp),
    (this.updater = n || Up);
}
var ku = (Pu.prototype = new $p());
ku.constructor = Pu;
zp(ku, Ar.prototype);
ku.isPureReactComponent = !0;
var cd = Array.isArray,
  Bp = Object.prototype.hasOwnProperty,
  Iu = { current: null },
  Vp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hp(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Bp.call(t, r) && !Vp.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Ui,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Iu.current,
  };
}
function wy(e, t) {
  return {
    $$typeof: Ui,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Nu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ui;
}
function _y(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var dd = /\/+/g;
function ma(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? _y("" + e.key)
    : t.toString(36);
}
function Cs(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ui:
          case ly:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + ma(o, 0) : r),
      cd(i)
        ? ((n = ""),
          e != null && (n = e.replace(dd, "$&/") + "/"),
          Cs(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Nu(i) &&
            (i = wy(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(dd, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), cd(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + ma(s, l);
      o += Cs(s, t, n, a, i);
    }
  else if (((a = yy(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + ma(s, l++)), (o += Cs(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function ts(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Cs(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Sy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Te = { current: null },
  bs = { transition: null },
  xy = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: bs,
    ReactCurrentOwner: Iu,
  };
function Wp() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = {
  map: ts,
  forEach: function (e, t, n) {
    ts(
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
      ts(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ts(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Nu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
U.Component = Ar;
U.Fragment = uy;
U.Profiler = dy;
U.PureComponent = Pu;
U.StrictMode = cy;
U.Suspense = my;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xy;
U.act = Wp;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = zp({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Iu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Bp.call(t, a) &&
        !Vp.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Ui, type: e.type, key: i, ref: s, props: r, _owner: o };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: py,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: fy, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = Hp;
U.createFactory = function (e) {
  var t = Hp.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: hy, render: e };
};
U.isValidElement = Nu;
U.lazy = function (e) {
  return { $$typeof: vy, _payload: { _status: -1, _result: e }, _init: Sy };
};
U.memo = function (e, t) {
  return { $$typeof: gy, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = bs.transition;
  bs.transition = {};
  try {
    e();
  } finally {
    bs.transition = t;
  }
};
U.unstable_act = Wp;
U.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
U.useContext = function (e) {
  return Te.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
U.useId = function () {
  return Te.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return Te.current.useRef(e);
};
U.useState = function (e) {
  return Te.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return Te.current.useTransition();
};
U.version = "18.3.1";
Dp.exports = U;
var C = Dp.exports;
const $ = ay(C),
  ul = oy({ __proto__: null, default: $ }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ey = C,
  Ty = Symbol.for("react.element"),
  Cy = Symbol.for("react.fragment"),
  by = Object.prototype.hasOwnProperty,
  Py = Ey.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ky = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gp(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) by.call(t, r) && !ky.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Ty,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Py.current,
  };
}
$o.Fragment = Cy;
$o.jsx = Gp;
$o.jsxs = Gp;
jp.exports = $o;
var m = jp.exports,
  cl = {},
  qp = { exports: {} },
  Be = {},
  Kp = { exports: {} },
  Xp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, A) {
    var j = O.length;
    O.push(A);
    e: for (; 0 < j; ) {
      var Y = (j - 1) >>> 1,
        ie = O[Y];
      if (0 < i(ie, A)) (O[Y] = A), (O[j] = ie), (j = Y);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var A = O[0],
      j = O.pop();
    if (j !== A) {
      O[0] = j;
      e: for (var Y = 0, ie = O.length, Zi = ie >>> 1; Y < Zi; ) {
        var Cn = 2 * (Y + 1) - 1,
          ha = O[Cn],
          bn = Cn + 1,
          es = O[bn];
        if (0 > i(ha, j))
          bn < ie && 0 > i(es, ha)
            ? ((O[Y] = es), (O[bn] = j), (Y = bn))
            : ((O[Y] = ha), (O[Cn] = j), (Y = Cn));
        else if (bn < ie && 0 > i(es, j)) (O[Y] = es), (O[bn] = j), (Y = bn);
        else break e;
      }
    }
    return A;
  }
  function i(O, A) {
    var j = O.sortIndex - A.sortIndex;
    return j !== 0 ? j : O.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    v = !1,
    y = !1,
    _ = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(O) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= O)
        r(u), (A.sortIndex = A.expirationTime), t(a, A);
      else break;
      A = n(u);
    }
  }
  function w(O) {
    if (((_ = !1), h(O), !y))
      if (n(a) !== null) (y = !0), he(x);
      else {
        var A = n(u);
        A !== null && Tn(w, A.startTime - O);
      }
  }
  function x(O, A) {
    (y = !1), _ && ((_ = !1), p(b), (b = -1)), (v = !0);
    var j = f;
    try {
      for (
        h(A), d = n(a);
        d !== null && (!(d.expirationTime > A) || (O && !N()));

      ) {
        var Y = d.callback;
        if (typeof Y == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var ie = Y(d.expirationTime <= A);
          (A = e.unstable_now()),
            typeof ie == "function" ? (d.callback = ie) : d === n(a) && r(a),
            h(A);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var Zi = !0;
      else {
        var Cn = n(u);
        Cn !== null && Tn(w, Cn.startTime - A), (Zi = !1);
      }
      return Zi;
    } finally {
      (d = null), (f = j), (v = !1);
    }
  }
  var E = !1,
    P = null,
    b = -1,
    k = 5,
    T = -1;
  function N() {
    return !(e.unstable_now() - T < k);
  }
  function L() {
    if (P !== null) {
      var O = e.unstable_now();
      T = O;
      var A = !0;
      try {
        A = P(!0, O);
      } finally {
        A ? M() : ((E = !1), (P = null));
      }
    } else E = !1;
  }
  var M;
  if (typeof g == "function")
    M = function () {
      g(L);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(),
      V = z.port2;
    (z.port1.onmessage = L),
      (M = function () {
        V.postMessage(null);
      });
  } else
    M = function () {
      S(L, 0);
    };
  function he(O) {
    (P = O), E || ((E = !0), M());
  }
  function Tn(O, A) {
    b = S(function () {
      O(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), he(x));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (k = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (O) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = f;
      }
      var j = f;
      f = A;
      try {
        return O();
      } finally {
        f = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, A) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var j = f;
      f = O;
      try {
        return A();
      } finally {
        f = j;
      }
    }),
    (e.unstable_scheduleCallback = function (O, A, j) {
      var Y = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? Y + j : Y))
          : (j = Y),
        O)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = j + ie),
        (O = {
          id: c++,
          callback: A,
          priorityLevel: O,
          startTime: j,
          expirationTime: ie,
          sortIndex: -1,
        }),
        j > Y
          ? ((O.sortIndex = j),
            t(u, O),
            n(a) === null &&
              O === n(u) &&
              (_ ? (p(b), (b = -1)) : (_ = !0), Tn(w, j - Y)))
          : ((O.sortIndex = ie), t(a, O), y || v || ((y = !0), he(x))),
        O
      );
    }),
    (e.unstable_shouldYield = N),
    (e.unstable_wrapCallback = function (O) {
      var A = f;
      return function () {
        var j = f;
        f = A;
        try {
          return O.apply(this, arguments);
        } finally {
          f = j;
        }
      };
    });
})(Xp);
Kp.exports = Xp;
var Iy = Kp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ny = C,
  ze = Iy;
function I(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Yp = new Set(),
  mi = {};
function Yn(e, t) {
  Er(e, t), Er(e + "Capture", t);
}
function Er(e, t) {
  for (mi[e] = t, e = 0; e < t.length; e++) Yp.add(t[e]);
}
var Rt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  dl = Object.prototype.hasOwnProperty,
  Oy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  fd = {},
  pd = {};
function Ry(e) {
  return dl.call(pd, e)
    ? !0
    : dl.call(fd, e)
    ? !1
    : Oy.test(e)
    ? (pd[e] = !0)
    : ((fd[e] = !0), !1);
}
function Ly(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ay(e, t, n, r) {
  if (t === null || typeof t > "u" || Ly(e, t, n, r)) return !0;
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
function Ce(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  pe[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  pe[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  pe[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  pe[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  pe[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  pe[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  pe[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ou = /[\-:]([a-z])/g;
function Ru(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ou, Ru);
    pe[t] = new Ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ou, Ru);
    pe[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ou, Ru);
  pe[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  pe[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  pe[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Lu(e, t, n, r) {
  var i = pe.hasOwnProperty(t) ? pe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ay(t, n, i, r) && (n = null),
    r || i === null
      ? Ry(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = Ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ns = Symbol.for("react.element"),
  tr = Symbol.for("react.portal"),
  nr = Symbol.for("react.fragment"),
  Au = Symbol.for("react.strict_mode"),
  fl = Symbol.for("react.profiler"),
  Qp = Symbol.for("react.provider"),
  Jp = Symbol.for("react.context"),
  Mu = Symbol.for("react.forward_ref"),
  pl = Symbol.for("react.suspense"),
  hl = Symbol.for("react.suspense_list"),
  ju = Symbol.for("react.memo"),
  Vt = Symbol.for("react.lazy"),
  Zp = Symbol.for("react.offscreen"),
  hd = Symbol.iterator;
function Vr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hd && e[hd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Z = Object.assign,
  ga;
function Jr(e) {
  if (ga === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ga = (t && t[1]) || "";
    }
  return (
    `
` +
    ga +
    e
  );
}
var va = !1;
function ya(e, t) {
  if (!e || va) return "";
  va = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (va = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Jr(e) : "";
}
function My(e) {
  switch (e.tag) {
    case 5:
      return Jr(e.type);
    case 16:
      return Jr("Lazy");
    case 13:
      return Jr("Suspense");
    case 19:
      return Jr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ya(e.type, !1)), e;
    case 11:
      return (e = ya(e.type.render, !1)), e;
    case 1:
      return (e = ya(e.type, !0)), e;
    default:
      return "";
  }
}
function ml(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case nr:
      return "Fragment";
    case tr:
      return "Portal";
    case fl:
      return "Profiler";
    case Au:
      return "StrictMode";
    case pl:
      return "Suspense";
    case hl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Jp:
        return (e.displayName || "Context") + ".Consumer";
      case Qp:
        return (e._context.displayName || "Context") + ".Provider";
      case Mu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ju:
        return (
          (t = e.displayName || null), t !== null ? t : ml(e.type) || "Memo"
        );
      case Vt:
        (t = e._payload), (e = e._init);
        try {
          return ml(e(t));
        } catch {}
    }
  return null;
}
function jy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ml(t);
    case 8:
      return t === Au ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function hn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function eh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Dy(e) {
  var t = eh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function rs(e) {
  e._valueTracker || (e._valueTracker = Dy(e));
}
function th(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = eh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ks(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function gl(e, t) {
  var n = t.checked;
  return Z({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function md(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = hn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function nh(e, t) {
  (t = t.checked), t != null && Lu(e, "checked", t, !1);
}
function vl(e, t) {
  nh(e, t);
  var n = hn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? yl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && yl(e, t.type, hn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function gd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function yl(e, t, n) {
  (t !== "number" || Ks(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Zr = Array.isArray;
function pr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + hn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function wl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return Z({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function vd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(I(92));
      if (Zr(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: hn(n) };
}
function rh(e, t) {
  var n = hn(t.value),
    r = hn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function yd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ih(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _l(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ih(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var is,
  sh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        is = is || document.createElement("div"),
          is.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = is.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function gi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ri = {
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
  Uy = ["Webkit", "ms", "Moz", "O"];
Object.keys(ri).forEach(function (e) {
  Uy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ri[t] = ri[e]);
  });
});
function oh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ri.hasOwnProperty(e) && ri[e])
    ? ("" + t).trim()
    : t + "px";
}
function ah(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = oh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var zy = Z(
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
function Sl(e, t) {
  if (t) {
    if (zy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function xl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var El = null;
function Du(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Tl = null,
  hr = null,
  mr = null;
function wd(e) {
  if ((e = $i(e))) {
    if (typeof Tl != "function") throw Error(I(280));
    var t = e.stateNode;
    t && ((t = Go(t)), Tl(e.stateNode, e.type, t));
  }
}
function lh(e) {
  hr ? (mr ? mr.push(e) : (mr = [e])) : (hr = e);
}
function uh() {
  if (hr) {
    var e = hr,
      t = mr;
    if (((mr = hr = null), wd(e), t)) for (e = 0; e < t.length; e++) wd(t[e]);
  }
}
function ch(e, t) {
  return e(t);
}
function dh() {}
var wa = !1;
function fh(e, t, n) {
  if (wa) return e(t, n);
  wa = !0;
  try {
    return ch(e, t, n);
  } finally {
    (wa = !1), (hr !== null || mr !== null) && (dh(), uh());
  }
}
function vi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Go(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var Cl = !1;
if (Rt)
  try {
    var Hr = {};
    Object.defineProperty(Hr, "passive", {
      get: function () {
        Cl = !0;
      },
    }),
      window.addEventListener("test", Hr, Hr),
      window.removeEventListener("test", Hr, Hr);
  } catch {
    Cl = !1;
  }
function Fy(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ii = !1,
  Xs = null,
  Ys = !1,
  bl = null,
  $y = {
    onError: function (e) {
      (ii = !0), (Xs = e);
    },
  };
function By(e, t, n, r, i, s, o, l, a) {
  (ii = !1), (Xs = null), Fy.apply($y, arguments);
}
function Vy(e, t, n, r, i, s, o, l, a) {
  if ((By.apply(this, arguments), ii)) {
    if (ii) {
      var u = Xs;
      (ii = !1), (Xs = null);
    } else throw Error(I(198));
    Ys || ((Ys = !0), (bl = u));
  }
}
function Qn(e) {
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
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function _d(e) {
  if (Qn(e) !== e) throw Error(I(188));
}
function Hy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Qn(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return _d(i), e;
        if (s === r) return _d(i), t;
        s = s.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function hh(e) {
  return (e = Hy(e)), e !== null ? mh(e) : null;
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
var gh = ze.unstable_scheduleCallback,
  Sd = ze.unstable_cancelCallback,
  Wy = ze.unstable_shouldYield,
  Gy = ze.unstable_requestPaint,
  ne = ze.unstable_now,
  qy = ze.unstable_getCurrentPriorityLevel,
  Uu = ze.unstable_ImmediatePriority,
  vh = ze.unstable_UserBlockingPriority,
  Qs = ze.unstable_NormalPriority,
  Ky = ze.unstable_LowPriority,
  yh = ze.unstable_IdlePriority,
  Bo = null,
  ft = null;
function Xy(e) {
  if (ft && typeof ft.onCommitFiberRoot == "function")
    try {
      ft.onCommitFiberRoot(Bo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rt = Math.clz32 ? Math.clz32 : Jy,
  Yy = Math.log,
  Qy = Math.LN2;
function Jy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Yy(e) / Qy) | 0)) | 0;
}
var ss = 64,
  os = 4194304;
function ei(e) {
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
function Js(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = ei(l)) : ((s &= o), s !== 0 && (r = ei(s)));
  } else (o = n & ~i), o !== 0 ? (r = ei(o)) : s !== 0 && (r = ei(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - rt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Zy(e, t) {
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
function e0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - rt(s),
      l = 1 << o,
      a = i[o];
    a === -1
      ? (!(l & n) || l & r) && (i[o] = Zy(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function Pl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function wh() {
  var e = ss;
  return (ss <<= 1), !(ss & 4194240) && (ss = 64), e;
}
function _a(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rt(t)),
    (e[t] = n);
}
function t0(e, t) {
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
    var i = 31 - rt(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function zu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - rt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var B = 0;
function _h(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Sh,
  Fu,
  xh,
  Eh,
  Th,
  kl = !1,
  as = [],
  tn = null,
  nn = null,
  rn = null,
  yi = new Map(),
  wi = new Map(),
  Wt = [],
  n0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function xd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      tn = null;
      break;
    case "dragenter":
    case "dragleave":
      nn = null;
      break;
    case "mouseover":
    case "mouseout":
      rn = null;
      break;
    case "pointerover":
    case "pointerout":
      yi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wi.delete(t.pointerId);
  }
}
function Wr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = $i(t)), t !== null && Fu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function r0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (tn = Wr(tn, e, t, n, r, i)), !0;
    case "dragenter":
      return (nn = Wr(nn, e, t, n, r, i)), !0;
    case "mouseover":
      return (rn = Wr(rn, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return yi.set(s, Wr(yi.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), wi.set(s, Wr(wi.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Ch(e) {
  var t = On(e.target);
  if (t !== null) {
    var n = Qn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ph(n)), t !== null)) {
          (e.blockedOn = t),
            Th(e.priority, function () {
              xh(n);
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
function Ps(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Il(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (El = r), n.target.dispatchEvent(r), (El = null);
    } else return (t = $i(n)), t !== null && Fu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ed(e, t, n) {
  Ps(e) && n.delete(t);
}
function i0() {
  (kl = !1),
    tn !== null && Ps(tn) && (tn = null),
    nn !== null && Ps(nn) && (nn = null),
    rn !== null && Ps(rn) && (rn = null),
    yi.forEach(Ed),
    wi.forEach(Ed);
}
function Gr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    kl ||
      ((kl = !0),
      ze.unstable_scheduleCallback(ze.unstable_NormalPriority, i0)));
}
function _i(e) {
  function t(i) {
    return Gr(i, e);
  }
  if (0 < as.length) {
    Gr(as[0], e);
    for (var n = 1; n < as.length; n++) {
      var r = as[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tn !== null && Gr(tn, e),
      nn !== null && Gr(nn, e),
      rn !== null && Gr(rn, e),
      yi.forEach(t),
      wi.forEach(t),
      n = 0;
    n < Wt.length;
    n++
  )
    (r = Wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
    Ch(n), n.blockedOn === null && Wt.shift();
}
var gr = Ut.ReactCurrentBatchConfig,
  Zs = !0;
function s0(e, t, n, r) {
  var i = B,
    s = gr.transition;
  gr.transition = null;
  try {
    (B = 1), $u(e, t, n, r);
  } finally {
    (B = i), (gr.transition = s);
  }
}
function o0(e, t, n, r) {
  var i = B,
    s = gr.transition;
  gr.transition = null;
  try {
    (B = 4), $u(e, t, n, r);
  } finally {
    (B = i), (gr.transition = s);
  }
}
function $u(e, t, n, r) {
  if (Zs) {
    var i = Il(e, t, n, r);
    if (i === null) Na(e, t, r, eo, n), xd(e, r);
    else if (r0(i, e, t, n, r)) r.stopPropagation();
    else if ((xd(e, r), t & 4 && -1 < n0.indexOf(e))) {
      for (; i !== null; ) {
        var s = $i(i);
        if (
          (s !== null && Sh(s),
          (s = Il(e, t, n, r)),
          s === null && Na(e, t, r, eo, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Na(e, t, r, null, n);
  }
}
var eo = null;
function Il(e, t, n, r) {
  if (((eo = null), (e = Du(r)), (e = On(e)), e !== null))
    if (((t = Qn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ph(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (eo = e), null;
}
function bh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (qy()) {
        case Uu:
          return 1;
        case vh:
          return 4;
        case Qs:
        case Ky:
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
var Qt = null,
  Bu = null,
  ks = null;
function Ph() {
  if (ks) return ks;
  var e,
    t = Bu,
    n = t.length,
    r,
    i = "value" in Qt ? Qt.value : Qt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (ks = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Is(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ls() {
  return !0;
}
function Td() {
  return !1;
}
function Ve(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ls
        : Td),
      (this.isPropagationStopped = Td),
      this
    );
  }
  return (
    Z(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ls));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ls));
      },
      persist: function () {},
      isPersistent: ls,
    }),
    t
  );
}
var Mr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Vu = Ve(Mr),
  Fi = Z({}, Mr, { view: 0, detail: 0 }),
  a0 = Ve(Fi),
  Sa,
  xa,
  qr,
  Vo = Z({}, Fi, {
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
    getModifierState: Hu,
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
      return "movementX" in e
        ? e.movementX
        : (e !== qr &&
            (qr && e.type === "mousemove"
              ? ((Sa = e.screenX - qr.screenX), (xa = e.screenY - qr.screenY))
              : (xa = Sa = 0),
            (qr = e)),
          Sa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : xa;
    },
  }),
  Cd = Ve(Vo),
  l0 = Z({}, Vo, { dataTransfer: 0 }),
  u0 = Ve(l0),
  c0 = Z({}, Fi, { relatedTarget: 0 }),
  Ea = Ve(c0),
  d0 = Z({}, Mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  f0 = Ve(d0),
  p0 = Z({}, Mr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  h0 = Ve(p0),
  m0 = Z({}, Mr, { data: 0 }),
  bd = Ve(m0),
  g0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  v0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  y0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function w0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = y0[e]) ? !!t[e] : !1;
}
function Hu() {
  return w0;
}
var _0 = Z({}, Fi, {
    key: function (e) {
      if (e.key) {
        var t = g0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Is(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? v0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Hu,
    charCode: function (e) {
      return e.type === "keypress" ? Is(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Is(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  S0 = Ve(_0),
  x0 = Z({}, Vo, {
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
  Pd = Ve(x0),
  E0 = Z({}, Fi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hu,
  }),
  T0 = Ve(E0),
  C0 = Z({}, Mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  b0 = Ve(C0),
  P0 = Z({}, Vo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  k0 = Ve(P0),
  I0 = [9, 13, 27, 32],
  Wu = Rt && "CompositionEvent" in window,
  si = null;
Rt && "documentMode" in document && (si = document.documentMode);
var N0 = Rt && "TextEvent" in window && !si,
  kh = Rt && (!Wu || (si && 8 < si && 11 >= si)),
  kd = " ",
  Id = !1;
function Ih(e, t) {
  switch (e) {
    case "keyup":
      return I0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Nh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var rr = !1;
function O0(e, t) {
  switch (e) {
    case "compositionend":
      return Nh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Id = !0), kd);
    case "textInput":
      return (e = t.data), e === kd && Id ? null : e;
    default:
      return null;
  }
}
function R0(e, t) {
  if (rr)
    return e === "compositionend" || (!Wu && Ih(e, t))
      ? ((e = Ph()), (ks = Bu = Qt = null), (rr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return kh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var L0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
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
function Nd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!L0[e.type] : t === "textarea";
}
function Oh(e, t, n, r) {
  lh(r),
    (t = to(t, "onChange")),
    0 < t.length &&
      ((n = new Vu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var oi = null,
  Si = null;
function A0(e) {
  Bh(e, 0);
}
function Ho(e) {
  var t = or(e);
  if (th(t)) return e;
}
function M0(e, t) {
  if (e === "change") return t;
}
var Rh = !1;
if (Rt) {
  var Ta;
  if (Rt) {
    var Ca = "oninput" in document;
    if (!Ca) {
      var Od = document.createElement("div");
      Od.setAttribute("oninput", "return;"),
        (Ca = typeof Od.oninput == "function");
    }
    Ta = Ca;
  } else Ta = !1;
  Rh = Ta && (!document.documentMode || 9 < document.documentMode);
}
function Rd() {
  oi && (oi.detachEvent("onpropertychange", Lh), (Si = oi = null));
}
function Lh(e) {
  if (e.propertyName === "value" && Ho(Si)) {
    var t = [];
    Oh(t, Si, e, Du(e)), fh(A0, t);
  }
}
function j0(e, t, n) {
  e === "focusin"
    ? (Rd(), (oi = t), (Si = n), oi.attachEvent("onpropertychange", Lh))
    : e === "focusout" && Rd();
}
function D0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ho(Si);
}
function U0(e, t) {
  if (e === "click") return Ho(t);
}
function z0(e, t) {
  if (e === "input" || e === "change") return Ho(t);
}
function F0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ot = typeof Object.is == "function" ? Object.is : F0;
function xi(e, t) {
  if (ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!dl.call(t, i) || !ot(e[i], t[i])) return !1;
  }
  return !0;
}
function Ld(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ad(e, t) {
  var n = Ld(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
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
    n = Ld(n);
  }
}
function Ah(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ah(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Mh() {
  for (var e = window, t = Ks(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ks(e.document);
  }
  return t;
}
function Gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function $0(e) {
  var t = Mh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ah(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Gu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Ad(n, s));
        var o = Ad(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var B0 = Rt && "documentMode" in document && 11 >= document.documentMode,
  ir = null,
  Nl = null,
  ai = null,
  Ol = !1;
function Md(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ol ||
    ir == null ||
    ir !== Ks(r) ||
    ((r = ir),
    "selectionStart" in r && Gu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ai && xi(ai, r)) ||
      ((ai = r),
      (r = to(Nl, "onSelect")),
      0 < r.length &&
        ((t = new Vu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ir))));
}
function us(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var sr = {
    animationend: us("Animation", "AnimationEnd"),
    animationiteration: us("Animation", "AnimationIteration"),
    animationstart: us("Animation", "AnimationStart"),
    transitionend: us("Transition", "TransitionEnd"),
  },
  ba = {},
  jh = {};
Rt &&
  ((jh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete sr.animationend.animation,
    delete sr.animationiteration.animation,
    delete sr.animationstart.animation),
  "TransitionEvent" in window || delete sr.transitionend.transition);
function Wo(e) {
  if (ba[e]) return ba[e];
  if (!sr[e]) return e;
  var t = sr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in jh) return (ba[e] = t[n]);
  return e;
}
var Dh = Wo("animationend"),
  Uh = Wo("animationiteration"),
  zh = Wo("animationstart"),
  Fh = Wo("transitionend"),
  $h = new Map(),
  jd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function yn(e, t) {
  $h.set(e, t), Yn(t, [e]);
}
for (var Pa = 0; Pa < jd.length; Pa++) {
  var ka = jd[Pa],
    V0 = ka.toLowerCase(),
    H0 = ka[0].toUpperCase() + ka.slice(1);
  yn(V0, "on" + H0);
}
yn(Dh, "onAnimationEnd");
yn(Uh, "onAnimationIteration");
yn(zh, "onAnimationStart");
yn("dblclick", "onDoubleClick");
yn("focusin", "onFocus");
yn("focusout", "onBlur");
yn(Fh, "onTransitionEnd");
Er("onMouseEnter", ["mouseout", "mouseover"]);
Er("onMouseLeave", ["mouseout", "mouseover"]);
Er("onPointerEnter", ["pointerout", "pointerover"]);
Er("onPointerLeave", ["pointerout", "pointerover"]);
Yn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Yn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Yn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Yn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ti =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  W0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ti));
function Dd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Vy(r, t, void 0, e), (e.currentTarget = null);
}
function Bh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          Dd(i, l, u), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          Dd(i, l, u), (s = a);
        }
    }
  }
  if (Ys) throw ((e = bl), (Ys = !1), (bl = null), e);
}
function G(e, t) {
  var n = t[jl];
  n === void 0 && (n = t[jl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Vh(t, e, 2, !1), n.add(r));
}
function Ia(e, t, n) {
  var r = 0;
  t && (r |= 4), Vh(n, e, r, t);
}
var cs = "_reactListening" + Math.random().toString(36).slice(2);
function Ei(e) {
  if (!e[cs]) {
    (e[cs] = !0),
      Yp.forEach(function (n) {
        n !== "selectionchange" && (W0.has(n) || Ia(n, !1, e), Ia(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[cs] || ((t[cs] = !0), Ia("selectionchange", !1, t));
  }
}
function Vh(e, t, n, r) {
  switch (bh(t)) {
    case 1:
      var i = s0;
      break;
    case 4:
      i = o0;
      break;
    default:
      i = $u;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Cl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Na(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = On(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  fh(function () {
    var u = s,
      c = Du(n),
      d = [];
    e: {
      var f = $h.get(e);
      if (f !== void 0) {
        var v = Vu,
          y = e;
        switch (e) {
          case "keypress":
            if (Is(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = S0;
            break;
          case "focusin":
            (y = "focus"), (v = Ea);
            break;
          case "focusout":
            (y = "blur"), (v = Ea);
            break;
          case "beforeblur":
          case "afterblur":
            v = Ea;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Cd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = u0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = T0;
            break;
          case Dh:
          case Uh:
          case zh:
            v = f0;
            break;
          case Fh:
            v = b0;
            break;
          case "scroll":
            v = a0;
            break;
          case "wheel":
            v = k0;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = h0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Pd;
        }
        var _ = (t & 4) !== 0,
          S = !_ && e === "scroll",
          p = _ ? (f !== null ? f + "Capture" : null) : f;
        _ = [];
        for (var g = u, h; g !== null; ) {
          h = g;
          var w = h.stateNode;
          if (
            (h.tag === 5 &&
              w !== null &&
              ((h = w),
              p !== null && ((w = vi(g, p)), w != null && _.push(Ti(g, w, h)))),
            S)
          )
            break;
          g = g.return;
        }
        0 < _.length &&
          ((f = new v(f, y, null, n, c)), d.push({ event: f, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          f &&
            n !== El &&
            (y = n.relatedTarget || n.fromElement) &&
            (On(y) || y[Lt]))
        )
          break e;
        if (
          (v || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = u),
              (y = y ? On(y) : null),
              y !== null &&
                ((S = Qn(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = u)),
          v !== y)
        ) {
          if (
            ((_ = Cd),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = Pd),
              (w = "onPointerLeave"),
              (p = "onPointerEnter"),
              (g = "pointer")),
            (S = v == null ? f : or(v)),
            (h = y == null ? f : or(y)),
            (f = new _(w, g + "leave", v, n, c)),
            (f.target = S),
            (f.relatedTarget = h),
            (w = null),
            On(c) === u &&
              ((_ = new _(p, g + "enter", y, n, c)),
              (_.target = h),
              (_.relatedTarget = S),
              (w = _)),
            (S = w),
            v && y)
          )
            t: {
              for (_ = v, p = y, g = 0, h = _; h; h = Jn(h)) g++;
              for (h = 0, w = p; w; w = Jn(w)) h++;
              for (; 0 < g - h; ) (_ = Jn(_)), g--;
              for (; 0 < h - g; ) (p = Jn(p)), h--;
              for (; g--; ) {
                if (_ === p || (p !== null && _ === p.alternate)) break t;
                (_ = Jn(_)), (p = Jn(p));
              }
              _ = null;
            }
          else _ = null;
          v !== null && Ud(d, f, v, _, !1),
            y !== null && S !== null && Ud(d, S, y, _, !0);
        }
      }
      e: {
        if (
          ((f = u ? or(u) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === "select" || (v === "input" && f.type === "file"))
        )
          var x = M0;
        else if (Nd(f))
          if (Rh) x = z0;
          else {
            x = D0;
            var E = j0;
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (x = U0);
        if (x && (x = x(e, u))) {
          Oh(d, x, n, c);
          break e;
        }
        E && E(e, f, u),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            yl(f, "number", f.value);
      }
      switch (((E = u ? or(u) : window), e)) {
        case "focusin":
          (Nd(E) || E.contentEditable === "true") &&
            ((ir = E), (Nl = u), (ai = null));
          break;
        case "focusout":
          ai = Nl = ir = null;
          break;
        case "mousedown":
          Ol = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ol = !1), Md(d, n, c);
          break;
        case "selectionchange":
          if (B0) break;
        case "keydown":
        case "keyup":
          Md(d, n, c);
      }
      var P;
      if (Wu)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        rr
          ? Ih(e, n) && (b = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b &&
        (kh &&
          n.locale !== "ko" &&
          (rr || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && rr && (P = Ph())
            : ((Qt = c),
              (Bu = "value" in Qt ? Qt.value : Qt.textContent),
              (rr = !0))),
        (E = to(u, b)),
        0 < E.length &&
          ((b = new bd(b, e, null, n, c)),
          d.push({ event: b, listeners: E }),
          P ? (b.data = P) : ((P = Nh(n)), P !== null && (b.data = P)))),
        (P = N0 ? O0(e, n) : R0(e, n)) &&
          ((u = to(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new bd("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    Bh(d, t);
  });
}
function Ti(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function to(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = vi(e, n)),
      s != null && r.unshift(Ti(e, s, i)),
      (s = vi(e, t)),
      s != null && r.push(Ti(e, s, i))),
      (e = e.return);
  }
  return r;
}
function Jn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ud(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = vi(n, s)), a != null && o.unshift(Ti(n, a, l)))
        : i || ((a = vi(n, s)), a != null && o.push(Ti(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var G0 = /\r\n?/g,
  q0 = /\u0000|\uFFFD/g;
function zd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      G0,
      `
`
    )
    .replace(q0, "");
}
function ds(e, t, n) {
  if (((t = zd(t)), zd(e) !== t && n)) throw Error(I(425));
}
function no() {}
var Rl = null,
  Ll = null;
function Al(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ml = typeof setTimeout == "function" ? setTimeout : void 0,
  K0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Fd = typeof Promise == "function" ? Promise : void 0,
  X0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Fd < "u"
      ? function (e) {
          return Fd.resolve(null).then(e).catch(Y0);
        }
      : Ml;
function Y0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Oa(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), _i(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  _i(t);
}
function sn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function $d(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var jr = Math.random().toString(36).slice(2),
  ut = "__reactFiber$" + jr,
  Ci = "__reactProps$" + jr,
  Lt = "__reactContainer$" + jr,
  jl = "__reactEvents$" + jr,
  Q0 = "__reactListeners$" + jr,
  J0 = "__reactHandles$" + jr;
function On(e) {
  var t = e[ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Lt] || n[ut])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = $d(e); e !== null; ) {
          if ((n = e[ut])) return n;
          e = $d(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function $i(e) {
  return (
    (e = e[ut] || e[Lt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function or(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function Go(e) {
  return e[Ci] || null;
}
var Dl = [],
  ar = -1;
function wn(e) {
  return { current: e };
}
function q(e) {
  0 > ar || ((e.current = Dl[ar]), (Dl[ar] = null), ar--);
}
function W(e, t) {
  ar++, (Dl[ar] = e.current), (e.current = t);
}
var mn = {},
  we = wn(mn),
  Ie = wn(!1),
  zn = mn;
function Tr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ne(e) {
  return (e = e.childContextTypes), e != null;
}
function ro() {
  q(Ie), q(we);
}
function Bd(e, t, n) {
  if (we.current !== mn) throw Error(I(168));
  W(we, t), W(Ie, n);
}
function Hh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(I(108, jy(e) || "Unknown", i));
  return Z({}, n, r);
}
function io(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (zn = we.current),
    W(we, e),
    W(Ie, Ie.current),
    !0
  );
}
function Vd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n
    ? ((e = Hh(e, t, zn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(Ie),
      q(we),
      W(we, e))
    : q(Ie),
    W(Ie, n);
}
var xt = null,
  qo = !1,
  Ra = !1;
function Wh(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function Z0(e) {
  (qo = !0), Wh(e);
}
function _n() {
  if (!Ra && xt !== null) {
    Ra = !0;
    var e = 0,
      t = B;
    try {
      var n = xt;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (xt = null), (qo = !1);
    } catch (i) {
      throw (xt !== null && (xt = xt.slice(e + 1)), gh(Uu, _n), i);
    } finally {
      (B = t), (Ra = !1);
    }
  }
  return null;
}
var lr = [],
  ur = 0,
  so = null,
  oo = 0,
  We = [],
  Ge = 0,
  Fn = null,
  Tt = 1,
  Ct = "";
function Pn(e, t) {
  (lr[ur++] = oo), (lr[ur++] = so), (so = e), (oo = t);
}
function Gh(e, t, n) {
  (We[Ge++] = Tt), (We[Ge++] = Ct), (We[Ge++] = Fn), (Fn = e);
  var r = Tt;
  e = Ct;
  var i = 32 - rt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - rt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Tt = (1 << (32 - rt(t) + i)) | (n << i) | r),
      (Ct = s + e);
  } else (Tt = (1 << s) | (n << i) | r), (Ct = e);
}
function qu(e) {
  e.return !== null && (Pn(e, 1), Gh(e, 1, 0));
}
function Ku(e) {
  for (; e === so; )
    (so = lr[--ur]), (lr[ur] = null), (oo = lr[--ur]), (lr[ur] = null);
  for (; e === Fn; )
    (Fn = We[--Ge]),
      (We[Ge] = null),
      (Ct = We[--Ge]),
      (We[Ge] = null),
      (Tt = We[--Ge]),
      (We[Ge] = null);
}
var Ue = null,
  Me = null,
  X = !1,
  tt = null;
function qh(e, t) {
  var n = qe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Hd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ue = e), (Me = sn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ue = e), (Me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Fn !== null ? { id: Tt, overflow: Ct } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = qe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ue = e),
            (Me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ul(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zl(e) {
  if (X) {
    var t = Me;
    if (t) {
      var n = t;
      if (!Hd(e, t)) {
        if (Ul(e)) throw Error(I(418));
        t = sn(n.nextSibling);
        var r = Ue;
        t && Hd(e, t)
          ? qh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (X = !1), (Ue = e));
      }
    } else {
      if (Ul(e)) throw Error(I(418));
      (e.flags = (e.flags & -4097) | 2), (X = !1), (Ue = e);
    }
  }
}
function Wd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ue = e;
}
function fs(e) {
  if (e !== Ue) return !1;
  if (!X) return Wd(e), (X = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Al(e.type, e.memoizedProps))),
    t && (t = Me))
  ) {
    if (Ul(e)) throw (Kh(), Error(I(418)));
    for (; t; ) qh(e, t), (t = sn(t.nextSibling));
  }
  if ((Wd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = sn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = Ue ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function Kh() {
  for (var e = Me; e; ) e = sn(e.nextSibling);
}
function Cr() {
  (Me = Ue = null), (X = !1);
}
function Xu(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
var ew = Ut.ReactCurrentBatchConfig;
function Kr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function ps(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      I(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Gd(e) {
  var t = e._init;
  return t(e._payload);
}
function Xh(e) {
  function t(p, g) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [g]), (p.flags |= 16)) : h.push(g);
    }
  }
  function n(p, g) {
    if (!e) return null;
    for (; g !== null; ) t(p, g), (g = g.sibling);
    return null;
  }
  function r(p, g) {
    for (p = new Map(); g !== null; )
      g.key !== null ? p.set(g.key, g) : p.set(g.index, g), (g = g.sibling);
    return p;
  }
  function i(p, g) {
    return (p = un(p, g)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, g, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < g ? ((p.flags |= 2), g) : h)
            : ((p.flags |= 2), g))
        : ((p.flags |= 1048576), g)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, g, h, w) {
    return g === null || g.tag !== 6
      ? ((g = za(h, p.mode, w)), (g.return = p), g)
      : ((g = i(g, h)), (g.return = p), g);
  }
  function a(p, g, h, w) {
    var x = h.type;
    return x === nr
      ? c(p, g, h.props.children, w, h.key)
      : g !== null &&
        (g.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === Vt &&
            Gd(x) === g.type))
      ? ((w = i(g, h.props)), (w.ref = Kr(p, g, h)), (w.return = p), w)
      : ((w = js(h.type, h.key, h.props, null, p.mode, w)),
        (w.ref = Kr(p, g, h)),
        (w.return = p),
        w);
  }
  function u(p, g, h, w) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== h.containerInfo ||
      g.stateNode.implementation !== h.implementation
      ? ((g = Fa(h, p.mode, w)), (g.return = p), g)
      : ((g = i(g, h.children || [])), (g.return = p), g);
  }
  function c(p, g, h, w, x) {
    return g === null || g.tag !== 7
      ? ((g = jn(h, p.mode, w, x)), (g.return = p), g)
      : ((g = i(g, h)), (g.return = p), g);
  }
  function d(p, g, h) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = za("" + g, p.mode, h)), (g.return = p), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ns:
          return (
            (h = js(g.type, g.key, g.props, null, p.mode, h)),
            (h.ref = Kr(p, null, g)),
            (h.return = p),
            h
          );
        case tr:
          return (g = Fa(g, p.mode, h)), (g.return = p), g;
        case Vt:
          var w = g._init;
          return d(p, w(g._payload), h);
      }
      if (Zr(g) || Vr(g))
        return (g = jn(g, p.mode, h, null)), (g.return = p), g;
      ps(p, g);
    }
    return null;
  }
  function f(p, g, h, w) {
    var x = g !== null ? g.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return x !== null ? null : l(p, g, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ns:
          return h.key === x ? a(p, g, h, w) : null;
        case tr:
          return h.key === x ? u(p, g, h, w) : null;
        case Vt:
          return (x = h._init), f(p, g, x(h._payload), w);
      }
      if (Zr(h) || Vr(h)) return x !== null ? null : c(p, g, h, w, null);
      ps(p, h);
    }
    return null;
  }
  function v(p, g, h, w, x) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (p = p.get(h) || null), l(g, p, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ns:
          return (p = p.get(w.key === null ? h : w.key) || null), a(g, p, w, x);
        case tr:
          return (p = p.get(w.key === null ? h : w.key) || null), u(g, p, w, x);
        case Vt:
          var E = w._init;
          return v(p, g, h, E(w._payload), x);
      }
      if (Zr(w) || Vr(w)) return (p = p.get(h) || null), c(g, p, w, x, null);
      ps(g, w);
    }
    return null;
  }
  function y(p, g, h, w) {
    for (
      var x = null, E = null, P = g, b = (g = 0), k = null;
      P !== null && b < h.length;
      b++
    ) {
      P.index > b ? ((k = P), (P = null)) : (k = P.sibling);
      var T = f(p, P, h[b], w);
      if (T === null) {
        P === null && (P = k);
        break;
      }
      e && P && T.alternate === null && t(p, P),
        (g = s(T, g, b)),
        E === null ? (x = T) : (E.sibling = T),
        (E = T),
        (P = k);
    }
    if (b === h.length) return n(p, P), X && Pn(p, b), x;
    if (P === null) {
      for (; b < h.length; b++)
        (P = d(p, h[b], w)),
          P !== null &&
            ((g = s(P, g, b)), E === null ? (x = P) : (E.sibling = P), (E = P));
      return X && Pn(p, b), x;
    }
    for (P = r(p, P); b < h.length; b++)
      (k = v(P, p, b, h[b], w)),
        k !== null &&
          (e && k.alternate !== null && P.delete(k.key === null ? b : k.key),
          (g = s(k, g, b)),
          E === null ? (x = k) : (E.sibling = k),
          (E = k));
    return (
      e &&
        P.forEach(function (N) {
          return t(p, N);
        }),
      X && Pn(p, b),
      x
    );
  }
  function _(p, g, h, w) {
    var x = Vr(h);
    if (typeof x != "function") throw Error(I(150));
    if (((h = x.call(h)), h == null)) throw Error(I(151));
    for (
      var E = (x = null), P = g, b = (g = 0), k = null, T = h.next();
      P !== null && !T.done;
      b++, T = h.next()
    ) {
      P.index > b ? ((k = P), (P = null)) : (k = P.sibling);
      var N = f(p, P, T.value, w);
      if (N === null) {
        P === null && (P = k);
        break;
      }
      e && P && N.alternate === null && t(p, P),
        (g = s(N, g, b)),
        E === null ? (x = N) : (E.sibling = N),
        (E = N),
        (P = k);
    }
    if (T.done) return n(p, P), X && Pn(p, b), x;
    if (P === null) {
      for (; !T.done; b++, T = h.next())
        (T = d(p, T.value, w)),
          T !== null &&
            ((g = s(T, g, b)), E === null ? (x = T) : (E.sibling = T), (E = T));
      return X && Pn(p, b), x;
    }
    for (P = r(p, P); !T.done; b++, T = h.next())
      (T = v(P, p, b, T.value, w)),
        T !== null &&
          (e && T.alternate !== null && P.delete(T.key === null ? b : T.key),
          (g = s(T, g, b)),
          E === null ? (x = T) : (E.sibling = T),
          (E = T));
    return (
      e &&
        P.forEach(function (L) {
          return t(p, L);
        }),
      X && Pn(p, b),
      x
    );
  }
  function S(p, g, h, w) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === nr &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case ns:
          e: {
            for (var x = h.key, E = g; E !== null; ) {
              if (E.key === x) {
                if (((x = h.type), x === nr)) {
                  if (E.tag === 7) {
                    n(p, E.sibling),
                      (g = i(E, h.props.children)),
                      (g.return = p),
                      (p = g);
                    break e;
                  }
                } else if (
                  E.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === Vt &&
                    Gd(x) === E.type)
                ) {
                  n(p, E.sibling),
                    (g = i(E, h.props)),
                    (g.ref = Kr(p, E, h)),
                    (g.return = p),
                    (p = g);
                  break e;
                }
                n(p, E);
                break;
              } else t(p, E);
              E = E.sibling;
            }
            h.type === nr
              ? ((g = jn(h.props.children, p.mode, w, h.key)),
                (g.return = p),
                (p = g))
              : ((w = js(h.type, h.key, h.props, null, p.mode, w)),
                (w.ref = Kr(p, g, h)),
                (w.return = p),
                (p = w));
          }
          return o(p);
        case tr:
          e: {
            for (E = h.key; g !== null; ) {
              if (g.key === E)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === h.containerInfo &&
                  g.stateNode.implementation === h.implementation
                ) {
                  n(p, g.sibling),
                    (g = i(g, h.children || [])),
                    (g.return = p),
                    (p = g);
                  break e;
                } else {
                  n(p, g);
                  break;
                }
              else t(p, g);
              g = g.sibling;
            }
            (g = Fa(h, p.mode, w)), (g.return = p), (p = g);
          }
          return o(p);
        case Vt:
          return (E = h._init), S(p, g, E(h._payload), w);
      }
      if (Zr(h)) return y(p, g, h, w);
      if (Vr(h)) return _(p, g, h, w);
      ps(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        g !== null && g.tag === 6
          ? (n(p, g.sibling), (g = i(g, h)), (g.return = p), (p = g))
          : (n(p, g), (g = za(h, p.mode, w)), (g.return = p), (p = g)),
        o(p))
      : n(p, g);
  }
  return S;
}
var br = Xh(!0),
  Yh = Xh(!1),
  ao = wn(null),
  lo = null,
  cr = null,
  Yu = null;
function Qu() {
  Yu = cr = lo = null;
}
function Ju(e) {
  var t = ao.current;
  q(ao), (e._currentValue = t);
}
function Fl(e, t, n) {
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
function vr(e, t) {
  (lo = e),
    (Yu = cr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ke = !0), (e.firstContext = null));
}
function Xe(e) {
  var t = e._currentValue;
  if (Yu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), cr === null)) {
      if (lo === null) throw Error(I(308));
      (cr = e), (lo.dependencies = { lanes: 0, firstContext: e });
    } else cr = cr.next = e;
  return t;
}
var Rn = null;
function Zu(e) {
  Rn === null ? (Rn = [e]) : Rn.push(e);
}
function Qh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Zu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    At(e, r)
  );
}
function At(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ht = !1;
function ec(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Jh(e, t) {
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
function Nt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function on(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      At(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Zu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    At(e, n)
  );
}
function Ns(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), zu(e, n);
  }
}
function qd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function uo(e, t, n, r) {
  var i = e.updateQueue;
  Ht = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var f = l.lane,
        v = l.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            _ = l;
          switch (((f = t), (v = n), _.tag)) {
            case 1:
              if (((y = _.payload), typeof y == "function")) {
                d = y.call(v, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = _.payload),
                (f = typeof y == "function" ? y.call(v, d, f) : y),
                f == null)
              )
                break e;
              d = Z({}, d, f);
              break e;
            case 2:
              Ht = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [l]) : f.push(l));
      } else
        (v = {
          eventTime: v,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (a = d)) : (c = c.next = v),
          (o |= f);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = d),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Bn |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function Kd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(I(191, i));
        i.call(r);
      }
    }
}
var Bi = {},
  pt = wn(Bi),
  bi = wn(Bi),
  Pi = wn(Bi);
function Ln(e) {
  if (e === Bi) throw Error(I(174));
  return e;
}
function tc(e, t) {
  switch ((W(Pi, t), W(bi, e), W(pt, Bi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _l(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _l(t, e));
  }
  q(pt), W(pt, t);
}
function Pr() {
  q(pt), q(bi), q(Pi);
}
function Zh(e) {
  Ln(Pi.current);
  var t = Ln(pt.current),
    n = _l(t, e.type);
  t !== n && (W(bi, e), W(pt, n));
}
function nc(e) {
  bi.current === e && (q(pt), q(bi));
}
var Q = wn(0);
function co(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
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
var La = [];
function rc() {
  for (var e = 0; e < La.length; e++)
    La[e]._workInProgressVersionPrimary = null;
  La.length = 0;
}
var Os = Ut.ReactCurrentDispatcher,
  Aa = Ut.ReactCurrentBatchConfig,
  $n = 0,
  J = null,
  oe = null,
  le = null,
  fo = !1,
  li = !1,
  ki = 0,
  tw = 0;
function me() {
  throw Error(I(321));
}
function ic(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ot(e[n], t[n])) return !1;
  return !0;
}
function sc(e, t, n, r, i, s) {
  if (
    (($n = s),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Os.current = e === null || e.memoizedState === null ? sw : ow),
    (e = n(r, i)),
    li)
  ) {
    s = 0;
    do {
      if (((li = !1), (ki = 0), 25 <= s)) throw Error(I(301));
      (s += 1),
        (le = oe = null),
        (t.updateQueue = null),
        (Os.current = aw),
        (e = n(r, i));
    } while (li);
  }
  if (
    ((Os.current = po),
    (t = oe !== null && oe.next !== null),
    ($n = 0),
    (le = oe = J = null),
    (fo = !1),
    t)
  )
    throw Error(I(300));
  return e;
}
function oc() {
  var e = ki !== 0;
  return (ki = 0), e;
}
function lt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (J.memoizedState = le = e) : (le = le.next = e), le;
}
function Ye() {
  if (oe === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = le === null ? J.memoizedState : le.next;
  if (t !== null) (le = t), (oe = e);
  else {
    if (e === null) throw Error(I(310));
    (oe = e),
      (e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      le === null ? (J.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function Ii(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ma(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = oe,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if (($n & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = d), (o = r)) : (a = a.next = d),
          (J.lanes |= c),
          (Bn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = r) : (a.next = l),
      ot(r, t.memoizedState) || (ke = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (J.lanes |= s), (Bn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ja(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    ot(s, t.memoizedState) || (ke = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function em() {}
function tm(e, t) {
  var n = J,
    r = Ye(),
    i = t(),
    s = !ot(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (ke = !0)),
    (r = r.queue),
    ac(im.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ni(9, rm.bind(null, n, r, i, t), void 0, null),
      ue === null)
    )
      throw Error(I(349));
    $n & 30 || nm(n, t, i);
  }
  return i;
}
function nm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function rm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), sm(t) && om(e);
}
function im(e, t, n) {
  return n(function () {
    sm(t) && om(e);
  });
}
function sm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function om(e) {
  var t = At(e, 1);
  t !== null && it(t, e, 1, -1);
}
function Xd(e) {
  var t = lt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ii,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = iw.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function Ni(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function am() {
  return Ye().memoizedState;
}
function Rs(e, t, n, r) {
  var i = lt();
  (J.flags |= e),
    (i.memoizedState = Ni(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ko(e, t, n, r) {
  var i = Ye();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (oe !== null) {
    var o = oe.memoizedState;
    if (((s = o.destroy), r !== null && ic(r, o.deps))) {
      i.memoizedState = Ni(t, n, s, r);
      return;
    }
  }
  (J.flags |= e), (i.memoizedState = Ni(1 | t, n, s, r));
}
function Yd(e, t) {
  return Rs(8390656, 8, e, t);
}
function ac(e, t) {
  return Ko(2048, 8, e, t);
}
function lm(e, t) {
  return Ko(4, 2, e, t);
}
function um(e, t) {
  return Ko(4, 4, e, t);
}
function cm(e, t) {
  if (typeof t == "function")
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
function dm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ko(4, 4, cm.bind(null, t, e), n)
  );
}
function lc() {}
function fm(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ic(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function pm(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ic(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function hm(e, t, n) {
  return $n & 21
    ? (ot(n, t) || ((n = wh()), (J.lanes |= n), (Bn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = n));
}
function nw(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Aa.transition;
  Aa.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (Aa.transition = r);
  }
}
function mm() {
  return Ye().memoizedState;
}
function rw(e, t, n) {
  var r = ln(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    gm(e))
  )
    vm(t, n);
  else if (((n = Qh(e, t, n, r)), n !== null)) {
    var i = Ee();
    it(n, e, r, i), ym(n, t, r);
  }
}
function iw(e, t, n) {
  var r = ln(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gm(e)) vm(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), ot(l, o))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Zu(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Qh(e, t, i, r)),
      n !== null && ((i = Ee()), it(n, e, r, i), ym(n, t, r));
  }
}
function gm(e) {
  var t = e.alternate;
  return e === J || (t !== null && t === J);
}
function vm(e, t) {
  li = fo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ym(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), zu(e, n);
  }
}
var po = {
    readContext: Xe,
    useCallback: me,
    useContext: me,
    useEffect: me,
    useImperativeHandle: me,
    useInsertionEffect: me,
    useLayoutEffect: me,
    useMemo: me,
    useReducer: me,
    useRef: me,
    useState: me,
    useDebugValue: me,
    useDeferredValue: me,
    useTransition: me,
    useMutableSource: me,
    useSyncExternalStore: me,
    useId: me,
    unstable_isNewReconciler: !1,
  },
  sw = {
    readContext: Xe,
    useCallback: function (e, t) {
      return (lt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Xe,
    useEffect: Yd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Rs(4194308, 4, cm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Rs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Rs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = lt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = lt();
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
        (e = e.dispatch = rw.bind(null, J, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = lt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Xd,
    useDebugValue: lc,
    useDeferredValue: function (e) {
      return (lt().memoizedState = e);
    },
    useTransition: function () {
      var e = Xd(!1),
        t = e[0];
      return (e = nw.bind(null, e[1])), (lt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = J,
        i = lt();
      if (X) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = t()), ue === null)) throw Error(I(349));
        $n & 30 || nm(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Yd(im.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Ni(9, rm.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = lt(),
        t = ue.identifierPrefix;
      if (X) {
        var n = Ct,
          r = Tt;
        (n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ki++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = tw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ow = {
    readContext: Xe,
    useCallback: fm,
    useContext: Xe,
    useEffect: ac,
    useImperativeHandle: dm,
    useInsertionEffect: lm,
    useLayoutEffect: um,
    useMemo: pm,
    useReducer: Ma,
    useRef: am,
    useState: function () {
      return Ma(Ii);
    },
    useDebugValue: lc,
    useDeferredValue: function (e) {
      var t = Ye();
      return hm(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ma(Ii)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: em,
    useSyncExternalStore: tm,
    useId: mm,
    unstable_isNewReconciler: !1,
  },
  aw = {
    readContext: Xe,
    useCallback: fm,
    useContext: Xe,
    useEffect: ac,
    useImperativeHandle: dm,
    useInsertionEffect: lm,
    useLayoutEffect: um,
    useMemo: pm,
    useReducer: ja,
    useRef: am,
    useState: function () {
      return ja(Ii);
    },
    useDebugValue: lc,
    useDeferredValue: function (e) {
      var t = Ye();
      return oe === null ? (t.memoizedState = e) : hm(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = ja(Ii)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: em,
    useSyncExternalStore: tm,
    useId: mm,
    unstable_isNewReconciler: !1,
  };
function Ze(e, t) {
  if (e && e.defaultProps) {
    (t = Z({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function $l(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Z({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Xo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      i = ln(e),
      s = Nt(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = on(e, s, i)),
      t !== null && (it(t, e, i, r), Ns(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      i = ln(e),
      s = Nt(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = on(e, s, i)),
      t !== null && (it(t, e, i, r), Ns(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ee(),
      r = ln(e),
      i = Nt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = on(e, i, r)),
      t !== null && (it(t, e, r, n), Ns(t, e, r));
  },
};
function Qd(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !xi(n, r) || !xi(i, s)
      : !0
  );
}
function wm(e, t, n) {
  var r = !1,
    i = mn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Xe(s))
      : ((i = Ne(t) ? zn : we.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Tr(e, i) : mn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Xo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Jd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Xo.enqueueReplaceState(t, t.state, null);
}
function Bl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), ec(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Xe(s))
    : ((s = Ne(t) ? zn : we.current), (i.context = Tr(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && ($l(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Xo.enqueueReplaceState(i, i.state, null),
      uo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function kr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += My(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Da(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var lw = typeof WeakMap == "function" ? WeakMap : Map;
function _m(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      mo || ((mo = !0), (Zl = r)), Vl(e, t);
    }),
    n
  );
}
function Sm(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Vl(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Vl(e, t),
          typeof r != "function" &&
            (an === null ? (an = new Set([this])) : an.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Zd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lw();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = xw.bind(null, e, t, n)), t.then(e, e));
}
function ef(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function tf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Nt(-1, 1)), (t.tag = 2), on(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var uw = Ut.ReactCurrentOwner,
  ke = !1;
function xe(e, t, n, r) {
  t.child = e === null ? Yh(t, null, n, r) : br(t, e.child, n, r);
}
function nf(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    vr(t, i),
    (r = sc(e, t, n, r, s, i)),
    (n = oc()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Mt(e, t, i))
      : (X && n && qu(t), (t.flags |= 1), xe(e, t, r, i), t.child)
  );
}
function rf(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !gc(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), xm(e, t, s, r, i))
      : ((e = js(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : xi), n(o, r) && e.ref === t.ref)
    )
      return Mt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = un(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function xm(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (xi(s, r) && e.ref === t.ref)
      if (((ke = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (ke = !0);
      else return (t.lanes = e.lanes), Mt(e, t, i);
  }
  return Hl(e, t, n, r, i);
}
function Em(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(fr, Le),
        (Le |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(fr, Le),
          (Le |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        W(fr, Le),
        (Le |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(fr, Le),
      (Le |= r);
  return xe(e, t, i, n), t.child;
}
function Tm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Hl(e, t, n, r, i) {
  var s = Ne(n) ? zn : we.current;
  return (
    (s = Tr(t, s)),
    vr(t, i),
    (n = sc(e, t, n, r, s, i)),
    (r = oc()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Mt(e, t, i))
      : (X && r && qu(t), (t.flags |= 1), xe(e, t, n, i), t.child)
  );
}
function sf(e, t, n, r, i) {
  if (Ne(n)) {
    var s = !0;
    io(t);
  } else s = !1;
  if ((vr(t, i), t.stateNode === null))
    Ls(e, t), wm(t, n, r), Bl(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Xe(u))
      : ((u = Ne(n) ? zn : we.current), (u = Tr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Jd(t, o, r, u)),
      (Ht = !1);
    var f = t.memoizedState;
    (o.state = f),
      uo(t, r, o, i),
      (a = t.memoizedState),
      l !== r || f !== a || Ie.current || Ht
        ? (typeof c == "function" && ($l(t, n, c, r), (a = t.memoizedState)),
          (l = Ht || Qd(t, n, l, r, f, a, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Jh(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ze(t.type, l)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Xe(a))
        : ((a = Ne(n) ? zn : we.current), (a = Tr(t, a)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== d || f !== a) && Jd(t, o, r, a)),
      (Ht = !1),
      (f = t.memoizedState),
      (o.state = f),
      uo(t, r, o, i);
    var y = t.memoizedState;
    l !== d || f !== y || Ie.current || Ht
      ? (typeof v == "function" && ($l(t, n, v, r), (y = t.memoizedState)),
        (u = Ht || Qd(t, n, u, r, f, y, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Wl(e, t, n, r, s, i);
}
function Wl(e, t, n, r, i, s) {
  Tm(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Vd(t, n, !1), Mt(e, t, s);
  (r = t.stateNode), (uw.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = br(t, e.child, null, s)), (t.child = br(t, null, l, s)))
      : xe(e, t, l, s),
    (t.memoizedState = r.state),
    i && Vd(t, n, !0),
    t.child
  );
}
function Cm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Bd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Bd(e, t.context, !1),
    tc(e, t.containerInfo);
}
function of(e, t, n, r, i) {
  return Cr(), Xu(i), (t.flags |= 256), xe(e, t, n, r), t.child;
}
var Gl = { dehydrated: null, treeContext: null, retryLane: 0 };
function ql(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bm(e, t, n) {
  var r = t.pendingProps,
    i = Q.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    W(Q, i & 1),
    e === null)
  )
    return (
      zl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Jo(o, r, 0, null)),
              (e = jn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = ql(n)),
              (t.memoizedState = Gl),
              e)
            : uc(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return cw(e, t, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = un(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = un(l, s)) : ((s = jn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? ql(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Gl),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = un(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function uc(e, t) {
  return (
    (t = Jo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hs(e, t, n, r) {
  return (
    r !== null && Xu(r),
    br(t, e.child, null, n),
    (e = uc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function cw(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Da(Error(I(422)))), hs(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Jo({ mode: "visible", children: r.children }, i, 0, null)),
        (s = jn(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && br(t, e.child, null, o),
        (t.child.memoizedState = ql(o)),
        (t.memoizedState = Gl),
        s);
  if (!(t.mode & 1)) return hs(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(I(419))), (r = Da(s, r, void 0)), hs(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), ke || l)) {
    if (((r = ue), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), At(e, i), it(r, e, i, -1));
    }
    return mc(), (r = Da(Error(I(421)))), hs(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ew.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Me = sn(i.nextSibling)),
      (Ue = t),
      (X = !0),
      (tt = null),
      e !== null &&
        ((We[Ge++] = Tt),
        (We[Ge++] = Ct),
        (We[Ge++] = Fn),
        (Tt = e.id),
        (Ct = e.overflow),
        (Fn = t)),
      (t = uc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function af(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fl(e.return, t, n);
}
function Ua(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Pm(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((xe(e, t, r.children, n), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && af(e, n, t);
        else if (e.tag === 19) af(e, n, t);
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
  if ((W(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && co(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ua(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && co(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ua(t, !0, n, null, s);
        break;
      case "together":
        Ua(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ls(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Bn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = un(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function dw(e, t, n) {
  switch (t.tag) {
    case 3:
      Cm(t), Cr();
      break;
    case 5:
      Zh(t);
      break;
    case 1:
      Ne(t.type) && io(t);
      break;
    case 4:
      tc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      W(ao, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? bm(e, t, n)
          : (W(Q, Q.current & 1),
            (e = Mt(e, t, n)),
            e !== null ? e.sibling : null);
      W(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Pm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        W(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Em(e, t, n);
  }
  return Mt(e, t, n);
}
var km, Kl, Im, Nm;
km = function (e, t) {
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
Kl = function () {};
Im = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Ln(pt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = gl(e, i)), (r = gl(e, r)), (s = []);
        break;
      case "select":
        (i = Z({}, i, { value: void 0 })),
          (r = Z({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = wl(e, i)), (r = wl(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = no);
    }
    Sl(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (mi.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (mi.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && G("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Nm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Xr(e, t) {
  if (!X)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function fw(e, t, n) {
  var r = t.pendingProps;
  switch ((Ku(t), t.tag)) {
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
      return ge(t), null;
    case 1:
      return Ne(t.type) && ro(), ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Pr(),
        q(Ie),
        q(we),
        rc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (fs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tt !== null && (nu(tt), (tt = null)))),
        Kl(e, t),
        ge(t),
        null
      );
    case 5:
      nc(t);
      var i = Ln(Pi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Im(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return ge(t), null;
        }
        if (((e = Ln(pt.current)), fs(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[ut] = t), (r[Ci] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              G("cancel", r), G("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ti.length; i++) G(ti[i], r);
              break;
            case "source":
              G("error", r);
              break;
            case "img":
            case "image":
            case "link":
              G("error", r), G("load", r);
              break;
            case "details":
              G("toggle", r);
              break;
            case "input":
              md(r, s), G("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                G("invalid", r);
              break;
            case "textarea":
              vd(r, s), G("invalid", r);
          }
          Sl(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      ds(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      ds(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : mi.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  G("scroll", r);
            }
          switch (n) {
            case "input":
              rs(r), gd(r, s, !0);
              break;
            case "textarea":
              rs(r), yd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = no);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ih(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[ut] = t),
            (e[Ci] = r),
            km(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = xl(n, r)), n)) {
              case "dialog":
                G("cancel", e), G("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ti.length; i++) G(ti[i], e);
                i = r;
                break;
              case "source":
                G("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                G("error", e), G("load", e), (i = r);
                break;
              case "details":
                G("toggle", e), (i = r);
                break;
              case "input":
                md(e, r), (i = gl(e, r)), G("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Z({}, r, { value: void 0 })),
                  G("invalid", e);
                break;
              case "textarea":
                vd(e, r), (i = wl(e, r)), G("invalid", e);
                break;
              default:
                i = r;
            }
            Sl(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? ah(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && sh(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && gi(e, a)
                    : typeof a == "number" && gi(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (mi.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && G("scroll", e)
                      : a != null && Lu(e, s, a, o));
              }
            switch (n) {
              case "input":
                rs(e), gd(e, r, !1);
                break;
              case "textarea":
                rs(e), yd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? pr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      pr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = no);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
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
      return ge(t), null;
    case 6:
      if (e && t.stateNode != null) Nm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (((n = Ln(Pi.current)), Ln(pt.current), fs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ut] = t),
            (s = r.nodeValue !== n) && ((e = Ue), e !== null))
          )
            switch (e.tag) {
              case 3:
                ds(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ds(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ut] = t),
            (t.stateNode = r);
      }
      return ge(t), null;
    case 13:
      if (
        (q(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (X && Me !== null && t.mode & 1 && !(t.flags & 128))
          Kh(), Cr(), (t.flags |= 98560), (s = !1);
        else if (((s = fs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(I(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(I(317));
            s[ut] = t;
          } else
            Cr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ge(t), (s = !1);
        } else tt !== null && (nu(tt), (tt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? ae === 0 && (ae = 3) : mc())),
          t.updateQueue !== null && (t.flags |= 4),
          ge(t),
          null);
    case 4:
      return (
        Pr(), Kl(e, t), e === null && Ei(t.stateNode.containerInfo), ge(t), null
      );
    case 10:
      return Ju(t.type._context), ge(t), null;
    case 17:
      return Ne(t.type) && ro(), ge(t), null;
    case 19:
      if ((q(Q), (s = t.memoizedState), s === null)) return ge(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Xr(s, !1);
        else {
          if (ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = co(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Xr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(Q, (Q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ne() > Ir &&
            ((t.flags |= 128), (r = !0), Xr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = co(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Xr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !X)
            )
              return ge(t), null;
          } else
            2 * ne() - s.renderingStartTime > Ir &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Xr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ne()),
          (t.sibling = null),
          (n = Q.current),
          W(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (ge(t), null);
    case 22:
    case 23:
      return (
        hc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Le & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function pw(e, t) {
  switch ((Ku(t), t.tag)) {
    case 1:
      return (
        Ne(t.type) && ro(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Pr(),
        q(Ie),
        q(we),
        rc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return nc(t), null;
    case 13:
      if ((q(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(I(340));
        Cr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(Q), null;
    case 4:
      return Pr(), null;
    case 10:
      return Ju(t.type._context), null;
    case 22:
    case 23:
      return hc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ms = !1,
  ve = !1,
  hw = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function dr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        te(e, t, r);
      }
    else n.current = null;
}
function Xl(e, t, n) {
  try {
    n();
  } catch (r) {
    te(e, t, r);
  }
}
var lf = !1;
function mw(e, t) {
  if (((Rl = Zs), (e = Mh()), Gu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (i !== 0 && d.nodeType !== 3) || (l = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (a = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (f = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (l = o),
                f === s && ++c === r && (a = o),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = v;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ll = { focusedElem: e, selectionRange: n }, Zs = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
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
                  var _ = y.memoizedProps,
                    S = y.memoizedState,
                    p = t.stateNode,
                    g = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : Ze(t.type, _),
                      S
                    );
                  p.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (w) {
          te(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (y = lf), (lf = !1), y;
}
function ui(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Xl(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Yo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
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
function Yl(e) {
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
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Om(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Om(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ut], delete t[Ci], delete t[jl], delete t[Q0], delete t[J0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Rm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function uf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ql(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = no));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ql(e, t, n), e = e.sibling; e !== null; ) Ql(e, t, n), (e = e.sibling);
}
function Jl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jl(e, t, n), e = e.sibling; e !== null; ) Jl(e, t, n), (e = e.sibling);
}
var de = null,
  et = !1;
function $t(e, t, n) {
  for (n = n.child; n !== null; ) Lm(e, t, n), (n = n.sibling);
}
function Lm(e, t, n) {
  if (ft && typeof ft.onCommitFiberUnmount == "function")
    try {
      ft.onCommitFiberUnmount(Bo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ve || dr(n, t);
    case 6:
      var r = de,
        i = et;
      (de = null),
        $t(e, t, n),
        (de = r),
        (et = i),
        de !== null &&
          (et
            ? ((e = de),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : de.removeChild(n.stateNode));
      break;
    case 18:
      de !== null &&
        (et
          ? ((e = de),
            (n = n.stateNode),
            e.nodeType === 8
              ? Oa(e.parentNode, n)
              : e.nodeType === 1 && Oa(e, n),
            _i(e))
          : Oa(de, n.stateNode));
      break;
    case 4:
      (r = de),
        (i = et),
        (de = n.stateNode.containerInfo),
        (et = !0),
        $t(e, t, n),
        (de = r),
        (et = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Xl(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      $t(e, t, n);
      break;
    case 1:
      if (
        !ve &&
        (dr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          te(n, t, l);
        }
      $t(e, t, n);
      break;
    case 21:
      $t(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ve = (r = ve) || n.memoizedState !== null), $t(e, t, n), (ve = r))
        : $t(e, t, n);
      break;
    default:
      $t(e, t, n);
  }
}
function cf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new hw()),
      t.forEach(function (r) {
        var i = Tw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (de = l.stateNode), (et = !1);
              break e;
            case 3:
              (de = l.stateNode.containerInfo), (et = !0);
              break e;
            case 4:
              (de = l.stateNode.containerInfo), (et = !0);
              break e;
          }
          l = l.return;
        }
        if (de === null) throw Error(I(160));
        Lm(s, o, i), (de = null), (et = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        te(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Am(t, e), (t = t.sibling);
}
function Am(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), at(e), r & 4)) {
        try {
          ui(3, e, e.return), Yo(3, e);
        } catch (_) {
          te(e, e.return, _);
        }
        try {
          ui(5, e, e.return);
        } catch (_) {
          te(e, e.return, _);
        }
      }
      break;
    case 1:
      Qe(t, e), at(e), r & 512 && n !== null && dr(n, n.return);
      break;
    case 5:
      if (
        (Qe(t, e),
        at(e),
        r & 512 && n !== null && dr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          gi(i, "");
        } catch (_) {
          te(e, e.return, _);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && nh(i, s),
              xl(l, o);
            var u = xl(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                d = a[o + 1];
              c === "style"
                ? ah(i, d)
                : c === "dangerouslySetInnerHTML"
                ? sh(i, d)
                : c === "children"
                ? gi(i, d)
                : Lu(i, c, d, u);
            }
            switch (l) {
              case "input":
                vl(i, s);
                break;
              case "textarea":
                rh(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var v = s.value;
                v != null
                  ? pr(i, !!s.multiple, v, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? pr(i, !!s.multiple, s.defaultValue, !0)
                      : pr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Ci] = s;
          } catch (_) {
            te(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((Qe(t, e), at(e), r & 4)) {
        if (e.stateNode === null) throw Error(I(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (_) {
          te(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        (Qe(t, e), at(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          _i(t.containerInfo);
        } catch (_) {
          te(e, e.return, _);
        }
      break;
    case 4:
      Qe(t, e), at(e);
      break;
    case 13:
      Qe(t, e),
        at(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (fc = ne())),
        r & 4 && cf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ve = (u = ve) || c), Qe(t, e), (ve = u)) : Qe(t, e),
        at(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (R = e, c = e.child; c !== null; ) {
            for (d = R = c; R !== null; ) {
              switch (((f = R), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ui(4, f, f.return);
                  break;
                case 1:
                  dr(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (_) {
                      te(r, n, _);
                    }
                  }
                  break;
                case 5:
                  dr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    ff(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), (R = v)) : ff(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = oh("display", o)));
              } catch (_) {
                te(e, e.return, _);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (_) {
                te(e, e.return, _);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Qe(t, e), at(e), r & 4 && cf(e);
      break;
    case 21:
      break;
    default:
      Qe(t, e), at(e);
  }
}
function at(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (gi(i, ""), (r.flags &= -33));
          var s = uf(e);
          Jl(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = uf(e);
          Ql(e, l, o);
          break;
        default:
          throw Error(I(161));
      }
    } catch (a) {
      te(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gw(e, t, n) {
  (R = e), Mm(e);
}
function Mm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ms;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || ve;
        l = ms;
        var u = ve;
        if (((ms = o), (ve = a) && !u))
          for (R = i; R !== null; )
            (o = R),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? pf(i)
                : a !== null
                ? ((a.return = o), (R = a))
                : pf(i);
        for (; s !== null; ) (R = s), Mm(s), (s = s.sibling);
        (R = i), (ms = l), (ve = u);
      }
      df(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (R = s)) : df(e);
  }
}
function df(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ve || Yo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Kd(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Kd(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && _i(d);
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
              throw Error(I(163));
          }
        ve || (t.flags & 512 && Yl(t));
      } catch (f) {
        te(t, t.return, f);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function ff(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function pf(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Yo(4, t);
          } catch (a) {
            te(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              te(t, i, a);
            }
          }
          var s = t.return;
          try {
            Yl(t);
          } catch (a) {
            te(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Yl(t);
          } catch (a) {
            te(t, o, a);
          }
      }
    } catch (a) {
      te(t, t.return, a);
    }
    if (t === e) {
      R = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (R = l);
      break;
    }
    R = t.return;
  }
}
var vw = Math.ceil,
  ho = Ut.ReactCurrentDispatcher,
  cc = Ut.ReactCurrentOwner,
  Ke = Ut.ReactCurrentBatchConfig,
  F = 0,
  ue = null,
  se = null,
  fe = 0,
  Le = 0,
  fr = wn(0),
  ae = 0,
  Oi = null,
  Bn = 0,
  Qo = 0,
  dc = 0,
  ci = null,
  Pe = null,
  fc = 0,
  Ir = 1 / 0,
  St = null,
  mo = !1,
  Zl = null,
  an = null,
  gs = !1,
  Jt = null,
  go = 0,
  di = 0,
  eu = null,
  As = -1,
  Ms = 0;
function Ee() {
  return F & 6 ? ne() : As !== -1 ? As : (As = ne());
}
function ln(e) {
  return e.mode & 1
    ? F & 2 && fe !== 0
      ? fe & -fe
      : ew.transition !== null
      ? (Ms === 0 && (Ms = wh()), Ms)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : bh(e.type))),
        e)
    : 1;
}
function it(e, t, n, r) {
  if (50 < di) throw ((di = 0), (eu = null), Error(I(185)));
  zi(e, n, r),
    (!(F & 2) || e !== ue) &&
      (e === ue && (!(F & 2) && (Qo |= n), ae === 4 && Gt(e, fe)),
      Oe(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Ir = ne() + 500), qo && _n()));
}
function Oe(e, t) {
  var n = e.callbackNode;
  e0(e, t);
  var r = Js(e, e === ue ? fe : 0);
  if (r === 0)
    n !== null && Sd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Sd(n), t === 1))
      e.tag === 0 ? Z0(hf.bind(null, e)) : Wh(hf.bind(null, e)),
        X0(function () {
          !(F & 6) && _n();
        }),
        (n = null);
    else {
      switch (_h(r)) {
        case 1:
          n = Uu;
          break;
        case 4:
          n = vh;
          break;
        case 16:
          n = Qs;
          break;
        case 536870912:
          n = yh;
          break;
        default:
          n = Qs;
      }
      n = Vm(n, jm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function jm(e, t) {
  if (((As = -1), (Ms = 0), F & 6)) throw Error(I(327));
  var n = e.callbackNode;
  if (yr() && e.callbackNode !== n) return null;
  var r = Js(e, e === ue ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vo(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var s = Um();
    (ue !== e || fe !== t) && ((St = null), (Ir = ne() + 500), Mn(e, t));
    do
      try {
        _w();
        break;
      } catch (l) {
        Dm(e, l);
      }
    while (!0);
    Qu(),
      (ho.current = s),
      (F = i),
      se !== null ? (t = 0) : ((ue = null), (fe = 0), (t = ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Pl(e)), i !== 0 && ((r = i), (t = tu(e, i)))), t === 1)
    )
      throw ((n = Oi), Mn(e, 0), Gt(e, r), Oe(e, ne()), n);
    if (t === 6) Gt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !yw(i) &&
          ((t = vo(e, r)),
          t === 2 && ((s = Pl(e)), s !== 0 && ((r = s), (t = tu(e, s)))),
          t === 1))
      )
        throw ((n = Oi), Mn(e, 0), Gt(e, r), Oe(e, ne()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          kn(e, Pe, St);
          break;
        case 3:
          if (
            (Gt(e, r), (r & 130023424) === r && ((t = fc + 500 - ne()), 10 < t))
          ) {
            if (Js(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ee(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ml(kn.bind(null, e, Pe, St), t);
            break;
          }
          kn(e, Pe, St);
          break;
        case 4:
          if ((Gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - rt(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = ne() - r),
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
                : 1960 * vw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ml(kn.bind(null, e, Pe, St), r);
            break;
          }
          kn(e, Pe, St);
          break;
        case 5:
          kn(e, Pe, St);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return Oe(e, ne()), e.callbackNode === n ? jm.bind(null, e) : null;
}
function tu(e, t) {
  var n = ci;
  return (
    e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
    (e = vo(e, t)),
    e !== 2 && ((t = Pe), (Pe = n), t !== null && nu(t)),
    e
  );
}
function nu(e) {
  Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function yw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!ot(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
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
function Gt(e, t) {
  for (
    t &= ~dc,
      t &= ~Qo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - rt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function hf(e) {
  if (F & 6) throw Error(I(327));
  yr();
  var t = Js(e, 0);
  if (!(t & 1)) return Oe(e, ne()), null;
  var n = vo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Pl(e);
    r !== 0 && ((t = r), (n = tu(e, r)));
  }
  if (n === 1) throw ((n = Oi), Mn(e, 0), Gt(e, t), Oe(e, ne()), n);
  if (n === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kn(e, Pe, St),
    Oe(e, ne()),
    null
  );
}
function pc(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Ir = ne() + 500), qo && _n());
  }
}
function Vn(e) {
  Jt !== null && Jt.tag === 0 && !(F & 6) && yr();
  var t = F;
  F |= 1;
  var n = Ke.transition,
    r = B;
  try {
    if (((Ke.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (Ke.transition = n), (F = t), !(F & 6) && _n();
  }
}
function hc() {
  (Le = fr.current), q(fr);
}
function Mn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), K0(n)), se !== null))
    for (n = se.return; n !== null; ) {
      var r = n;
      switch ((Ku(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ro();
          break;
        case 3:
          Pr(), q(Ie), q(we), rc();
          break;
        case 5:
          nc(r);
          break;
        case 4:
          Pr();
          break;
        case 13:
          q(Q);
          break;
        case 19:
          q(Q);
          break;
        case 10:
          Ju(r.type._context);
          break;
        case 22:
        case 23:
          hc();
      }
      n = n.return;
    }
  if (
    ((ue = e),
    (se = e = un(e.current, null)),
    (fe = Le = t),
    (ae = 0),
    (Oi = null),
    (dc = Qo = Bn = 0),
    (Pe = ci = null),
    Rn !== null)
  ) {
    for (t = 0; t < Rn.length; t++)
      if (((n = Rn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Rn = null;
  }
  return e;
}
function Dm(e, t) {
  do {
    var n = se;
    try {
      if ((Qu(), (Os.current = po), fo)) {
        for (var r = J.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        fo = !1;
      }
      if (
        (($n = 0),
        (le = oe = J = null),
        (li = !1),
        (ki = 0),
        (cc.current = null),
        n === null || n.return === null)
      ) {
        (ae = 1), (Oi = t), (se = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = fe),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = ef(o);
          if (v !== null) {
            (v.flags &= -257),
              tf(v, o, l, s, t),
              v.mode & 1 && Zd(s, u, t),
              (t = v),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var _ = new Set();
              _.add(a), (t.updateQueue = _);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Zd(s, u, t), mc();
              break e;
            }
            a = Error(I(426));
          }
        } else if (X && l.mode & 1) {
          var S = ef(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              tf(S, o, l, s, t),
              Xu(kr(a, l));
            break e;
          }
        }
        (s = a = kr(a, l)),
          ae !== 4 && (ae = 2),
          ci === null ? (ci = [s]) : ci.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var p = _m(s, a, t);
              qd(s, p);
              break e;
            case 1:
              l = a;
              var g = s.type,
                h = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (an === null || !an.has(h))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var w = Sm(s, l, t);
                qd(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Fm(n);
    } catch (x) {
      (t = x), se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Um() {
  var e = ho.current;
  return (ho.current = po), e === null ? po : e;
}
function mc() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    ue === null || (!(Bn & 268435455) && !(Qo & 268435455)) || Gt(ue, fe);
}
function vo(e, t) {
  var n = F;
  F |= 2;
  var r = Um();
  (ue !== e || fe !== t) && ((St = null), Mn(e, t));
  do
    try {
      ww();
      break;
    } catch (i) {
      Dm(e, i);
    }
  while (!0);
  if ((Qu(), (F = n), (ho.current = r), se !== null)) throw Error(I(261));
  return (ue = null), (fe = 0), ae;
}
function ww() {
  for (; se !== null; ) zm(se);
}
function _w() {
  for (; se !== null && !Wy(); ) zm(se);
}
function zm(e) {
  var t = Bm(e.alternate, e, Le);
  (e.memoizedProps = e.pendingProps),
    t === null ? Fm(e) : (se = t),
    (cc.current = null);
}
function Fm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = pw(n, t)), n !== null)) {
        (n.flags &= 32767), (se = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ae = 6), (se = null);
        return;
      }
    } else if (((n = fw(n, t, Le)), n !== null)) {
      se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function kn(e, t, n) {
  var r = B,
    i = Ke.transition;
  try {
    (Ke.transition = null), (B = 1), Sw(e, t, n, r);
  } finally {
    (Ke.transition = i), (B = r);
  }
  return null;
}
function Sw(e, t, n, r) {
  do yr();
  while (Jt !== null);
  if (F & 6) throw Error(I(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(I(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (t0(e, s),
    e === ue && ((se = ue = null), (fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gs ||
      ((gs = !0),
      Vm(Qs, function () {
        return yr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Ke.transition), (Ke.transition = null);
    var o = B;
    B = 1;
    var l = F;
    (F |= 4),
      (cc.current = null),
      mw(e, n),
      Am(n, e),
      $0(Ll),
      (Zs = !!Rl),
      (Ll = Rl = null),
      (e.current = n),
      gw(n),
      Gy(),
      (F = l),
      (B = o),
      (Ke.transition = s);
  } else e.current = n;
  if (
    (gs && ((gs = !1), (Jt = e), (go = i)),
    (s = e.pendingLanes),
    s === 0 && (an = null),
    Xy(n.stateNode),
    Oe(e, ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (mo) throw ((mo = !1), (e = Zl), (Zl = null), e);
  return (
    go & 1 && e.tag !== 0 && yr(),
    (s = e.pendingLanes),
    s & 1 ? (e === eu ? di++ : ((di = 0), (eu = e))) : (di = 0),
    _n(),
    null
  );
}
function yr() {
  if (Jt !== null) {
    var e = _h(go),
      t = Ke.transition,
      n = B;
    try {
      if (((Ke.transition = null), (B = 16 > e ? 16 : e), Jt === null))
        var r = !1;
      else {
        if (((e = Jt), (Jt = null), (go = 0), F & 6)) throw Error(I(331));
        var i = F;
        for (F |= 4, R = e.current; R !== null; ) {
          var s = R,
            o = s.child;
          if (R.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (R = u; R !== null; ) {
                  var c = R;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ui(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (R = d);
                  else
                    for (; R !== null; ) {
                      c = R;
                      var f = c.sibling,
                        v = c.return;
                      if ((Om(c), c === u)) {
                        R = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = v), (R = f);
                        break;
                      }
                      R = v;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var _ = y.child;
                if (_ !== null) {
                  y.child = null;
                  do {
                    var S = _.sibling;
                    (_.sibling = null), (_ = S);
                  } while (_ !== null);
                }
              }
              R = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (R = o);
          else
            e: for (; R !== null; ) {
              if (((s = R), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ui(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (R = p);
                break e;
              }
              R = s.return;
            }
        }
        var g = e.current;
        for (R = g; R !== null; ) {
          o = R;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (R = h);
          else
            e: for (o = g; R !== null; ) {
              if (((l = R), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yo(9, l);
                  }
                } catch (x) {
                  te(l, l.return, x);
                }
              if (l === o) {
                R = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (R = w);
                break e;
              }
              R = l.return;
            }
        }
        if (
          ((F = i), _n(), ft && typeof ft.onPostCommitFiberRoot == "function")
        )
          try {
            ft.onPostCommitFiberRoot(Bo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (Ke.transition = t);
    }
  }
  return !1;
}
function mf(e, t, n) {
  (t = kr(n, t)),
    (t = _m(e, t, 1)),
    (e = on(e, t, 1)),
    (t = Ee()),
    e !== null && (zi(e, 1, t), Oe(e, t));
}
function te(e, t, n) {
  if (e.tag === 3) mf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        mf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (an === null || !an.has(r)))
        ) {
          (e = kr(n, e)),
            (e = Sm(t, e, 1)),
            (t = on(t, e, 1)),
            (e = Ee()),
            t !== null && (zi(t, 1, e), Oe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function xw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ee()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ue === e &&
      (fe & n) === n &&
      (ae === 4 || (ae === 3 && (fe & 130023424) === fe && 500 > ne() - fc)
        ? Mn(e, 0)
        : (dc |= n)),
    Oe(e, t);
}
function $m(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = os), (os <<= 1), !(os & 130023424) && (os = 4194304))
      : (t = 1));
  var n = Ee();
  (e = At(e, t)), e !== null && (zi(e, t, n), Oe(e, n));
}
function Ew(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), $m(e, n);
}
function Tw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  r !== null && r.delete(t), $m(e, n);
}
var Bm;
Bm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ke = !1), dw(e, t, n);
      ke = !!(e.flags & 131072);
    }
  else (ke = !1), X && t.flags & 1048576 && Gh(t, oo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ls(e, t), (e = t.pendingProps);
      var i = Tr(t, we.current);
      vr(t, n), (i = sc(null, t, r, e, i, n));
      var s = oc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ne(r) ? ((s = !0), io(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ec(t),
            (i.updater = Xo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Bl(t, r, e, n),
            (t = Wl(null, t, r, !0, s, n)))
          : ((t.tag = 0), X && s && qu(t), xe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ls(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = bw(r)),
          (e = Ze(r, e)),
          i)
        ) {
          case 0:
            t = Hl(null, t, r, e, n);
            break e;
          case 1:
            t = sf(null, t, r, e, n);
            break e;
          case 11:
            t = nf(null, t, r, e, n);
            break e;
          case 14:
            t = rf(null, t, r, Ze(r.type, e), n);
            break e;
        }
        throw Error(I(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ze(r, i)),
        Hl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ze(r, i)),
        sf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Cm(t), e === null)) throw Error(I(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Jh(e, t),
          uo(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = kr(Error(I(423)), t)), (t = of(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = kr(Error(I(424)), t)), (t = of(e, t, r, n, i));
            break e;
          } else
            for (
              Me = sn(t.stateNode.containerInfo.firstChild),
                Ue = t,
                X = !0,
                tt = null,
                n = Yh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Cr(), r === i)) {
            t = Mt(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Zh(t),
        e === null && zl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Al(r, i) ? (o = null) : s !== null && Al(r, s) && (t.flags |= 32),
        Tm(e, t),
        xe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && zl(t), null;
    case 13:
      return bm(e, t, n);
    case 4:
      return (
        tc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = br(t, null, r, n)) : xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ze(r, i)),
        nf(e, t, r, i, n)
      );
    case 7:
      return xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          W(ao, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (ot(s.value, o)) {
            if (s.children === i.children && !Ie.current) {
              t = Mt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = Nt(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      Fl(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(I(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Fl(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        xe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        vr(t, n),
        (i = Xe(i)),
        (r = r(i)),
        (t.flags |= 1),
        xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ze(r, t.pendingProps)),
        (i = Ze(r.type, i)),
        rf(e, t, r, i, n)
      );
    case 15:
      return xm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ze(r, i)),
        Ls(e, t),
        (t.tag = 1),
        Ne(r) ? ((e = !0), io(t)) : (e = !1),
        vr(t, n),
        wm(t, r, i),
        Bl(t, r, i, n),
        Wl(null, t, r, !0, e, n)
      );
    case 19:
      return Pm(e, t, n);
    case 22:
      return Em(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Vm(e, t) {
  return gh(e, t);
}
function Cw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function qe(e, t, n, r) {
  return new Cw(e, t, n, r);
}
function gc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function bw(e) {
  if (typeof e == "function") return gc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Mu)) return 11;
    if (e === ju) return 14;
  }
  return 2;
}
function un(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = qe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function js(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) gc(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case nr:
        return jn(n.children, i, s, t);
      case Au:
        (o = 8), (i |= 8);
        break;
      case fl:
        return (
          (e = qe(12, n, t, i | 2)), (e.elementType = fl), (e.lanes = s), e
        );
      case pl:
        return (e = qe(13, n, t, i)), (e.elementType = pl), (e.lanes = s), e;
      case hl:
        return (e = qe(19, n, t, i)), (e.elementType = hl), (e.lanes = s), e;
      case Zp:
        return Jo(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qp:
              o = 10;
              break e;
            case Jp:
              o = 9;
              break e;
            case Mu:
              o = 11;
              break e;
            case ju:
              o = 14;
              break e;
            case Vt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = qe(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function jn(e, t, n, r) {
  return (e = qe(7, e, r, t)), (e.lanes = n), e;
}
function Jo(e, t, n, r) {
  return (
    (e = qe(22, e, r, t)),
    (e.elementType = Zp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function za(e, t, n) {
  return (e = qe(6, e, null, t)), (e.lanes = n), e;
}
function Fa(e, t, n) {
  return (
    (t = qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Pw(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _a(0)),
    (this.expirationTimes = _a(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _a(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function vc(e, t, n, r, i, s, o, l, a) {
  return (
    (e = new Pw(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = qe(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ec(s),
    e
  );
}
function kw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: tr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Hm(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (Qn(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return Hh(e, n, t);
  }
  return t;
}
function Wm(e, t, n, r, i, s, o, l, a) {
  return (
    (e = vc(n, r, !0, e, i, s, o, l, a)),
    (e.context = Hm(null)),
    (n = e.current),
    (r = Ee()),
    (i = ln(n)),
    (s = Nt(r, i)),
    (s.callback = t ?? null),
    on(n, s, i),
    (e.current.lanes = i),
    zi(e, i, r),
    Oe(e, r),
    e
  );
}
function Zo(e, t, n, r) {
  var i = t.current,
    s = Ee(),
    o = ln(i);
  return (
    (n = Hm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Nt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = on(i, t, o)),
    e !== null && (it(e, i, o, s), Ns(e, i, o)),
    o
  );
}
function yo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function yc(e, t) {
  gf(e, t), (e = e.alternate) && gf(e, t);
}
function Iw() {
  return null;
}
var Gm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function wc(e) {
  this._internalRoot = e;
}
ea.prototype.render = wc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  Zo(e, t, null, null);
};
ea.prototype.unmount = wc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Vn(function () {
      Zo(null, e, null, null);
    }),
      (t[Lt] = null);
  }
};
function ea(e) {
  this._internalRoot = e;
}
ea.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Eh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
    Wt.splice(n, 0, e), n === 0 && Ch(e);
  }
};
function _c(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ta(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function vf() {}
function Nw(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = yo(o);
        s.call(u);
      };
    }
    var o = Wm(t, r, e, 0, null, !1, !1, "", vf);
    return (
      (e._reactRootContainer = o),
      (e[Lt] = o.current),
      Ei(e.nodeType === 8 ? e.parentNode : e),
      Vn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = yo(a);
      l.call(u);
    };
  }
  var a = vc(e, 0, !1, null, null, !1, !1, "", vf);
  return (
    (e._reactRootContainer = a),
    (e[Lt] = a.current),
    Ei(e.nodeType === 8 ? e.parentNode : e),
    Vn(function () {
      Zo(t, a, n, r);
    }),
    a
  );
}
function na(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = yo(o);
        l.call(a);
      };
    }
    Zo(t, o, e, i);
  } else o = Nw(n, t, e, i, r);
  return yo(o);
}
Sh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ei(t.pendingLanes);
        n !== 0 &&
          (zu(t, n | 1), Oe(t, ne()), !(F & 6) && ((Ir = ne() + 500), _n()));
      }
      break;
    case 13:
      Vn(function () {
        var r = At(e, 1);
        if (r !== null) {
          var i = Ee();
          it(r, e, 1, i);
        }
      }),
        yc(e, 1);
  }
};
Fu = function (e) {
  if (e.tag === 13) {
    var t = At(e, 134217728);
    if (t !== null) {
      var n = Ee();
      it(t, e, 134217728, n);
    }
    yc(e, 134217728);
  }
};
xh = function (e) {
  if (e.tag === 13) {
    var t = ln(e),
      n = At(e, t);
    if (n !== null) {
      var r = Ee();
      it(n, e, t, r);
    }
    yc(e, t);
  }
};
Eh = function () {
  return B;
};
Th = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
Tl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((vl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Go(r);
            if (!i) throw Error(I(90));
            th(r), vl(r, i);
          }
        }
      }
      break;
    case "textarea":
      rh(e, n);
      break;
    case "select":
      (t = n.value), t != null && pr(e, !!n.multiple, t, !1);
  }
};
ch = pc;
dh = Vn;
var Ow = { usingClientEntryPoint: !1, Events: [$i, or, Go, lh, uh, pc] },
  Yr = {
    findFiberByHostInstance: On,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Rw = {
    bundleType: Yr.bundleType,
    version: Yr.version,
    rendererPackageName: Yr.rendererPackageName,
    rendererConfig: Yr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = hh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Yr.findFiberByHostInstance || Iw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vs.isDisabled && vs.supportsFiber)
    try {
      (Bo = vs.inject(Rw)), (ft = vs);
    } catch {}
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ow;
Be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_c(t)) throw Error(I(200));
  return kw(e, t, null, n);
};
Be.createRoot = function (e, t) {
  if (!_c(e)) throw Error(I(299));
  var n = !1,
    r = "",
    i = Gm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = vc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Lt] = t.current),
    Ei(e.nodeType === 8 ? e.parentNode : e),
    new wc(t)
  );
};
Be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(I(188))
      : ((e = Object.keys(e).join(",")), Error(I(268, e)));
  return (e = hh(t)), (e = e === null ? null : e.stateNode), e;
};
Be.flushSync = function (e) {
  return Vn(e);
};
Be.hydrate = function (e, t, n) {
  if (!ta(t)) throw Error(I(200));
  return na(null, e, t, !0, n);
};
Be.hydrateRoot = function (e, t, n) {
  if (!_c(e)) throw Error(I(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Gm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Wm(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[Lt] = t.current),
    Ei(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ea(t);
};
Be.render = function (e, t, n) {
  if (!ta(t)) throw Error(I(200));
  return na(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function (e) {
  if (!ta(e)) throw Error(I(40));
  return e._reactRootContainer
    ? (Vn(function () {
        na(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Lt] = null);
        });
      }),
      !0)
    : !1;
};
Be.unstable_batchedUpdates = pc;
Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ta(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return na(e, t, n, !1, r);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function qm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qm);
    } catch (e) {
      console.error(e);
    }
}
qm(), (qp.exports = Be);
var Lw = qp.exports,
  yf = Lw;
(cl.createRoot = yf.createRoot), (cl.hydrateRoot = yf.hydrateRoot);
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ri() {
  return (
    (Ri = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ri.apply(this, arguments)
  );
}
var Zt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Zt || (Zt = {}));
const wf = "popstate";
function Aw(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: l } = r.location;
    return ru(
      "",
      { pathname: s, search: o, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : wo(i);
  }
  return jw(t, n, null, e);
}
function re(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Km(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Mw() {
  return Math.random().toString(36).substr(2, 8);
}
function _f(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ru(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ri(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Dr(t) : t,
      { state: n, key: (t && t.key) || r || Mw() }
    )
  );
}
function wo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Dr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function jw(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    l = Zt.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), o.replaceState(Ri({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    l = Zt.Pop;
    let S = c(),
      p = S == null ? null : S - u;
    (u = S), a && a({ action: l, location: _.location, delta: p });
  }
  function f(S, p) {
    l = Zt.Push;
    let g = ru(_.location, S, p);
    u = c() + 1;
    let h = _f(g, u),
      w = _.createHref(g);
    try {
      o.pushState(h, "", w);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError") throw x;
      i.location.assign(w);
    }
    s && a && a({ action: l, location: _.location, delta: 1 });
  }
  function v(S, p) {
    l = Zt.Replace;
    let g = ru(_.location, S, p);
    u = c();
    let h = _f(g, u),
      w = _.createHref(g);
    o.replaceState(h, "", w),
      s && a && a({ action: l, location: _.location, delta: 0 });
  }
  function y(S) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      g = typeof S == "string" ? S : wo(S);
    return (
      (g = g.replace(/ $/, "%20")),
      re(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          g
      ),
      new URL(g, p)
    );
  }
  let _ = {
    get action() {
      return l;
    },
    get location() {
      return e(i, o);
    },
    listen(S) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(wf, d),
        (a = S),
        () => {
          i.removeEventListener(wf, d), (a = null);
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: y,
    encodeLocation(S) {
      let p = y(S);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: f,
    replace: v,
    go(S) {
      return o.go(S);
    },
  };
  return _;
}
var Sf;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Sf || (Sf = {}));
function Dw(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Dr(t) : t,
    i = Sc(r.pathname || "/", n);
  if (i == null) return null;
  let s = Xm(e);
  Uw(s);
  let o = null;
  for (let l = 0; o == null && l < s.length; ++l) {
    let a = Yw(i);
    o = qw(s[l], a);
  }
  return o;
}
function Xm(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (re(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = cn([r, a.relativePath]),
      c = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (re(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Xm(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: Ww(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, o) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) i(s, o);
      else for (let a of Ym(s.path)) i(s, o, a);
    }),
    t
  );
}
function Ym(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = Ym(r.join("/")),
    l = [];
  return (
    l.push(...o.map((a) => (a === "" ? s : [s, a].join("/")))),
    i && l.push(...o),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Uw(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Gw(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const zw = /^:[\w-]+$/,
  Fw = 3,
  $w = 2,
  Bw = 1,
  Vw = 10,
  Hw = -2,
  xf = (e) => e === "*";
function Ww(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(xf) && (r += Hw),
    t && (r += $w),
    n
      .filter((i) => !xf(i))
      .reduce((i, s) => i + (zw.test(s) ? Fw : s === "" ? Bw : Vw), r)
  );
}
function Gw(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function qw(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let l = n[o],
      a = o === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = Kw(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = l.route;
    s.push({
      params: r,
      pathname: cn([i, c.pathname]),
      pathnameBase: e_(cn([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (i = cn([i, c.pathnameBase]));
  }
  return s;
}
function Kw(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Xw(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: v } = c;
      if (f === "*") {
        let _ = l[d] || "";
        o = s.slice(0, s.length - _.length).replace(/(.)\/+$/, "$1");
      }
      const y = l[d];
      return (
        v && !y ? (u[f] = void 0) : (u[f] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function Xw(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Km(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Yw(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Km(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Sc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Qw(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Dr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Jw(n, t)) : t,
    search: t_(r),
    hash: n_(i),
  };
}
function Jw(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function $a(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Zw(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function xc(e, t) {
  let n = Zw(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Ec(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Dr(e))
    : ((i = Ri({}, e)),
      re(
        !i.pathname || !i.pathname.includes("?"),
        $a("?", "pathname", "search", i)
      ),
      re(
        !i.pathname || !i.pathname.includes("#"),
        $a("#", "pathname", "hash", i)
      ),
      re(!i.search || !i.search.includes("#"), $a("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    l;
  if (o == null) l = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      i.pathname = f.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let a = Qw(i, l),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const cn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  e_ = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  t_ = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  n_ = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function r_(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Qm = ["post", "put", "patch", "delete"];
new Set(Qm);
const i_ = ["get", ...Qm];
new Set(i_);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Li() {
  return (
    (Li = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Li.apply(this, arguments)
  );
}
const Tc = C.createContext(null),
  s_ = C.createContext(null),
  Sn = C.createContext(null),
  ra = C.createContext(null),
  gt = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Jm = C.createContext(null);
function o_(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ur() || re(!1);
  let { basename: r, navigator: i } = C.useContext(Sn),
    { hash: s, pathname: o, search: l } = tg(e, { relative: n }),
    a = o;
  return (
    r !== "/" && (a = o === "/" ? r : cn([r, o])),
    i.createHref({ pathname: a, search: l, hash: s })
  );
}
function Ur() {
  return C.useContext(ra) != null;
}
function Vi() {
  return Ur() || re(!1), C.useContext(ra).location;
}
function Zm(e) {
  C.useContext(Sn).static || C.useLayoutEffect(e);
}
function zt() {
  let { isDataRoute: e } = C.useContext(gt);
  return e ? S_() : a_();
}
function a_() {
  Ur() || re(!1);
  let e = C.useContext(Tc),
    { basename: t, future: n, navigator: r } = C.useContext(Sn),
    { matches: i } = C.useContext(gt),
    { pathname: s } = Vi(),
    o = JSON.stringify(xc(i, n.v7_relativeSplatPath)),
    l = C.useRef(!1);
  return (
    Zm(() => {
      l.current = !0;
    }),
    C.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = Ec(u, JSON.parse(o), s, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : cn([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, o, s, e]
    )
  );
}
const l_ = C.createContext(null);
function u_(e) {
  let t = C.useContext(gt).outlet;
  return t && C.createElement(l_.Provider, { value: e }, t);
}
function eg() {
  let { matches: e } = C.useContext(gt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function tg(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = C.useContext(Sn),
    { matches: i } = C.useContext(gt),
    { pathname: s } = Vi(),
    o = JSON.stringify(xc(i, r.v7_relativeSplatPath));
  return C.useMemo(() => Ec(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function c_(e, t) {
  return d_(e, t);
}
function d_(e, t, n, r) {
  Ur() || re(!1);
  let { navigator: i } = C.useContext(Sn),
    { matches: s } = C.useContext(gt),
    o = s[s.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let u = Vi(),
    c;
  if (t) {
    var d;
    let S = typeof t == "string" ? Dr(t) : t;
    a === "/" || ((d = S.pathname) != null && d.startsWith(a)) || re(!1),
      (c = S);
  } else c = u;
  let f = c.pathname || "/",
    v = f;
  if (a !== "/") {
    let S = a.replace(/^\//, "").split("/");
    v = "/" + f.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let y = Dw(e, { pathname: v }),
    _ = g_(
      y &&
        y.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, l, S.params),
            pathname: cn([
              a,
              i.encodeLocation
                ? i.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? a
                : cn([
                    a,
                    i.encodeLocation
                      ? i.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && _
    ? C.createElement(
        ra.Provider,
        {
          value: {
            location: Li(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Zt.Pop,
          },
        },
        _
      )
    : _;
}
function f_() {
  let e = __(),
    t = r_(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: i }, n) : null,
    null
  );
}
const p_ = C.createElement(f_, null);
class h_ extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? C.createElement(
          gt.Provider,
          { value: this.props.routeContext },
          C.createElement(Jm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function m_(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = C.useContext(Tc);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(gt.Provider, { value: t }, r)
  );
}
function g_(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let o = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let c = o.findIndex(
      (d) => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0
    );
    c >= 0 || re(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let d = o[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: v } = n,
          y =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!v || v[d.route.id] === void 0);
        if (d.route.lazy || y) {
          (a = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, d, f) => {
    let v,
      y = !1,
      _ = null,
      S = null;
    n &&
      ((v = l && d.route.id ? l[d.route.id] : void 0),
      (_ = d.route.errorElement || p_),
      a &&
        (u < 0 && f === 0
          ? ((y = !0), (S = null))
          : u === f &&
            ((y = !0), (S = d.route.hydrateFallbackElement || null))));
    let p = t.concat(o.slice(0, f + 1)),
      g = () => {
        let h;
        return (
          v
            ? (h = _)
            : y
            ? (h = S)
            : d.route.Component
            ? (h = C.createElement(d.route.Component, null))
            : d.route.element
            ? (h = d.route.element)
            : (h = c),
          C.createElement(m_, {
            match: d,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? C.createElement(h_, {
          location: n.location,
          revalidation: n.revalidation,
          component: _,
          error: v,
          children: g(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var ng = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(ng || {}),
  _o = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(_o || {});
function v_(e) {
  let t = C.useContext(Tc);
  return t || re(!1), t;
}
function y_(e) {
  let t = C.useContext(s_);
  return t || re(!1), t;
}
function w_(e) {
  let t = C.useContext(gt);
  return t || re(!1), t;
}
function rg(e) {
  let t = w_(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || re(!1), n.route.id;
}
function __() {
  var e;
  let t = C.useContext(Jm),
    n = y_(_o.UseRouteError),
    r = rg(_o.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function S_() {
  let { router: e } = v_(ng.UseNavigateStable),
    t = rg(_o.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Zm(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Li({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function x_(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  Ur() || re(!1);
  let { future: s, static: o } = C.useContext(Sn),
    { matches: l } = C.useContext(gt),
    { pathname: a } = Vi(),
    u = zt(),
    c = Ec(t, xc(l, s.v7_relativeSplatPath), a, i === "path"),
    d = JSON.stringify(c);
  return (
    C.useEffect(
      () => u(JSON.parse(d), { replace: n, state: r, relative: i }),
      [u, d, i, n, r]
    ),
    null
  );
}
function E_(e) {
  return u_(e.context);
}
function Je(e) {
  re(!1);
}
function T_(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Zt.Pop,
    navigator: s,
    static: o = !1,
    future: l,
  } = e;
  Ur() && re(!1);
  let a = t.replace(/^\/*/, "/"),
    u = C.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: o,
        future: Li({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, o]
    );
  typeof r == "string" && (r = Dr(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: v = null,
      key: y = "default",
    } = r,
    _ = C.useMemo(() => {
      let S = Sc(c, a);
      return S == null
        ? null
        : {
            location: { pathname: S, search: d, hash: f, state: v, key: y },
            navigationType: i,
          };
    }, [a, c, d, f, v, y, i]);
  return _ == null
    ? null
    : C.createElement(
        Sn.Provider,
        { value: u },
        C.createElement(ra.Provider, { children: n, value: _ })
      );
}
function C_(e) {
  let { children: t, location: n } = e;
  return c_(iu(t), n);
}
new Promise(() => {});
function iu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, i) => {
      if (!C.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === C.Fragment) {
        n.push.apply(n, iu(r.props.children, s));
        return;
      }
      r.type !== Je && re(!1), !r.props.index || !r.props.children || re(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = iu(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function su() {
  return (
    (su = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    su.apply(this, arguments)
  );
}
function b_(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function P_(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function k_(e, t) {
  return e.button === 0 && (!t || t === "_self") && !P_(e);
}
const I_ = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  N_ = "6";
try {
  window.__reactRouterVersion = N_;
} catch {}
const O_ = "startTransition",
  Ef = ul[O_];
function R_(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = C.useRef();
  s.current == null && (s.current = Aw({ window: i, v5Compat: !0 }));
  let o = s.current,
    [l, a] = C.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = C.useCallback(
      (d) => {
        u && Ef ? Ef(() => a(d)) : a(d);
      },
      [a, u]
    );
  return (
    C.useLayoutEffect(() => o.listen(c), [o, c]),
    C.createElement(T_, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: o,
      future: r,
    })
  );
}
const L_ =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  A_ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ye = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: l,
        target: a,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      f = b_(t, I_),
      { basename: v } = C.useContext(Sn),
      y,
      _ = !1;
    if (typeof u == "string" && A_.test(u) && ((y = u), L_))
      try {
        let h = new URL(window.location.href),
          w = u.startsWith("//") ? new URL(h.protocol + u) : new URL(u),
          x = Sc(w.pathname, v);
        w.origin === h.origin && x != null
          ? (u = x + w.search + w.hash)
          : (_ = !0);
      } catch {}
    let S = o_(u, { relative: i }),
      p = M_(u, {
        replace: o,
        state: l,
        target: a,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: d,
      });
    function g(h) {
      r && r(h), h.defaultPrevented || p(h);
    }
    return C.createElement(
      "a",
      su({}, f, { href: y || S, onClick: _ || s ? r : g, ref: n, target: a })
    );
  });
var Tf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Tf || (Tf = {}));
var Cf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Cf || (Cf = {}));
function M_(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    a = zt(),
    u = Vi(),
    c = tg(e, { relative: o });
  return C.useCallback(
    (d) => {
      if (k_(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : wo(u) === wo(c);
        a(e, {
          replace: f,
          state: i,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: l,
        });
      }
    },
    [u, a, c, r, i, n, e, s, o, l]
  );
}
function bf(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function Cc(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : bf(t[n]) &&
          bf(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          Cc(e[n], t[n]);
    });
}
const ig = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function zr() {
  const e = typeof document < "u" ? document : {};
  return Cc(e, ig), e;
}
const j_ = {
  document: ig,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function He() {
  const e = typeof window < "u" ? window : {};
  return Cc(e, j_), e;
}
function D_(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function U_(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function ou(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function So() {
  return Date.now();
}
function z_(e) {
  const t = He();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function F_(e, t) {
  t === void 0 && (t = "x");
  const n = He();
  let r, i, s;
  const o = z_(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (s = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((s =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = s.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = s.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = s.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function ys(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function $_(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Ae() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !$_(r)) {
      const i = Object.keys(Object(r)).filter((s) => t.indexOf(s) < 0);
      for (let s = 0, o = i.length; s < o; s += 1) {
        const l = i[s],
          a = Object.getOwnPropertyDescriptor(r, l);
        a !== void 0 &&
          a.enumerable &&
          (ys(e[l]) && ys(r[l])
            ? r[l].__swiper__
              ? (e[l] = r[l])
              : Ae(e[l], r[l])
            : !ys(e[l]) && ys(r[l])
            ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : Ae(e[l], r[l]))
            : (e[l] = r[l]));
      }
    }
  }
  return e;
}
function ws(e, t, n) {
  e.style.setProperty(t, n);
}
function sg(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = He(),
    s = -t.translate;
  let o = null,
    l;
  const a = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > s ? "next" : "prev",
    c = (f, v) => (u === "next" && f >= v) || (u === "prev" && f <= v),
    d = () => {
      (l = new Date().getTime()), o === null && (o = l);
      const f = Math.max(Math.min((l - o) / a, 1), 0),
        v = 0.5 - Math.cos(f * Math.PI) / 2;
      let y = s + v * (n - s);
      if ((c(y, n) && (y = n), t.wrapperEl.scrollTo({ [r]: y }), c(y, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: y });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(d);
    };
  d();
}
function ct(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function xo(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function Eo(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : D_(t))), n;
}
function B_(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function V_(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function en(e, t) {
  return He().getComputedStyle(e, null).getPropertyValue(t);
}
function Pf(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function H_(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) n.push(r), (r = r.parentElement);
  return n;
}
function kf(e, t, n) {
  const r = He();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
function yt(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
let Ba;
function W_() {
  const e = He(),
    t = zr();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function og() {
  return Ba || (Ba = W_()), Ba;
}
let Va;
function G_(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = og(),
    r = He(),
    i = r.navigator.platform,
    s = t || r.navigator.userAgent,
    o = { ios: !1, android: !1 },
    l = r.screen.width,
    a = r.screen.height,
    u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = s.match(/(iPad).*OS\s([\d_]+)/);
  const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    v = i === "Win32";
  let y = i === "MacIntel";
  const _ = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      y &&
      n.touch &&
      _.indexOf(`${l}x${a}`) >= 0 &&
      ((c = s.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (y = !1)),
    u && !v && ((o.os = "android"), (o.android = !0)),
    (c || f || d) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function ag(e) {
  return e === void 0 && (e = {}), Va || (Va = G_(e)), Va;
}
let Ha;
function q_() {
  const e = He(),
    t = ag();
  let n = !1;
  function r() {
    const l = e.navigator.userAgent.toLowerCase();
    return (
      l.indexOf("safari") >= 0 &&
      l.indexOf("chrome") < 0 &&
      l.indexOf("android") < 0
    );
  }
  if (r()) {
    const l = String(e.navigator.userAgent);
    if (l.includes("Version/")) {
      const [a, u] = l
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((c) => Number(c));
      n = a < 16 || (a === 16 && u < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    s = r(),
    o = s || (i && t.ios);
  return {
    isSafari: n || s,
    needPerspectiveFix: n,
    need3dFix: o,
    isWebView: i,
  };
}
function K_() {
  return Ha || (Ha = q_()), Ha;
}
function X_(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = He();
  let s = null,
    o = null;
  const l = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((s = new ResizeObserver((d) => {
          o = i.requestAnimationFrame(() => {
            const { width: f, height: v } = t;
            let y = f,
              _ = v;
            d.forEach((S) => {
              let { contentBoxSize: p, contentRect: g, target: h } = S;
              (h && h !== t.el) ||
                ((y = g ? g.width : (p[0] || p).inlineSize),
                (_ = g ? g.height : (p[0] || p).blockSize));
            }),
              (y !== f || _ !== v) && l();
          });
        })),
        s.observe(t.el));
    },
    u = () => {
      o && i.cancelAnimationFrame(o),
        s && s.unobserve && t.el && (s.unobserve(t.el), (s = null));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return;
    }
    i.addEventListener("resize", l), i.addEventListener("orientationchange", c);
  }),
    n("destroy", () => {
      u(),
        i.removeEventListener("resize", l),
        i.removeEventListener("orientationchange", c);
    });
}
function Y_(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = [],
    o = He(),
    l = function (c, d) {
      d === void 0 && (d = {});
      const f = o.MutationObserver || o.WebkitMutationObserver,
        v = new f((y) => {
          if (t.__preventObserver__) return;
          if (y.length === 1) {
            i("observerUpdate", y[0]);
            return;
          }
          const _ = function () {
            i("observerUpdate", y[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(_)
            : o.setTimeout(_, 0);
        });
      v.observe(c, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: typeof d.childList > "u" ? !0 : d.childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        s.push(v);
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = H_(t.hostEl);
          for (let d = 0; d < c.length; d += 1) l(c[d]);
        }
        l(t.hostEl, { childList: t.params.observeSlideChildren }),
          l(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      s.forEach((c) => {
        c.disconnect();
      }),
        s.splice(0, s.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", a),
    r("destroy", u);
}
var Q_ = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((s) => {
        r.eventsListeners[s] || (r.eventsListeners[s] = []),
          r.eventsListeners[s][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var s = arguments.length, o = new Array(s), l = 0; l < s; l++)
        o[l] = arguments[l];
      t.apply(r, o);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, s) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(s, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
        : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(r, [a, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((u) => {
              u.apply(r, n);
            });
      }),
      e
    );
  },
};
function J_() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(en(r, "padding-left") || 0, 10) -
        parseInt(en(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(en(r, "padding-top") || 0, 10) -
        parseInt(en(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function Z_() {
  const e = this;
  function t(T, N) {
    return parseFloat(T.getPropertyValue(e.getDirectionLabel(N)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: s, rtlTranslate: o, wrongRTL: l } = e,
    a = e.virtual && n.virtual.enabled,
    u = a ? e.virtual.slides.length : e.slides.length,
    c = ct(i, `.${e.params.slideClass}, swiper-slide`),
    d = a ? e.virtual.slides.length : c.length;
  let f = [];
  const v = [],
    y = [];
  let _ = n.slidesOffsetBefore;
  typeof _ == "function" && (_ = n.slidesOffsetBefore.call(e));
  let S = n.slidesOffsetAfter;
  typeof S == "function" && (S = n.slidesOffsetAfter.call(e));
  const p = e.snapGrid.length,
    g = e.slidesGrid.length;
  let h = n.spaceBetween,
    w = -_,
    x = 0,
    E = 0;
  if (typeof s > "u") return;
  typeof h == "string" && h.indexOf("%") >= 0
    ? (h = (parseFloat(h.replace("%", "")) / 100) * s)
    : typeof h == "string" && (h = parseFloat(h)),
    (e.virtualSize = -h),
    c.forEach((T) => {
      o ? (T.style.marginLeft = "") : (T.style.marginRight = ""),
        (T.style.marginBottom = ""),
        (T.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (ws(r, "--swiper-centered-offset-before", ""),
      ws(r, "--swiper-centered-offset-after", ""));
  const P = n.grid && n.grid.rows > 1 && e.grid;
  P ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
  let b;
  const k =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (T) => typeof n.breakpoints[T].slidesPerView < "u"
    ).length > 0;
  for (let T = 0; T < d; T += 1) {
    b = 0;
    let N;
    if (
      (c[T] && (N = c[T]),
      P && e.grid.updateSlide(T, N, c),
      !(c[T] && en(N, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        k && (c[T].style[e.getDirectionLabel("width")] = "");
        const L = getComputedStyle(N),
          M = N.style.transform,
          z = N.style.webkitTransform;
        if (
          (M && (N.style.transform = "none"),
          z && (N.style.webkitTransform = "none"),
          n.roundLengths)
        )
          b = e.isHorizontal() ? kf(N, "width") : kf(N, "height");
        else {
          const V = t(L, "width"),
            he = t(L, "padding-left"),
            Tn = t(L, "padding-right"),
            O = t(L, "margin-left"),
            A = t(L, "margin-right"),
            j = L.getPropertyValue("box-sizing");
          if (j && j === "border-box") b = V + O + A;
          else {
            const { clientWidth: Y, offsetWidth: ie } = N;
            b = V + he + Tn + O + A + (ie - Y);
          }
        }
        M && (N.style.transform = M),
          z && (N.style.webkitTransform = z),
          n.roundLengths && (b = Math.floor(b));
      } else
        (b = (s - (n.slidesPerView - 1) * h) / n.slidesPerView),
          n.roundLengths && (b = Math.floor(b)),
          c[T] && (c[T].style[e.getDirectionLabel("width")] = `${b}px`);
      c[T] && (c[T].swiperSlideSize = b),
        y.push(b),
        n.centeredSlides
          ? ((w = w + b / 2 + x / 2 + h),
            x === 0 && T !== 0 && (w = w - s / 2 - h),
            T === 0 && (w = w - s / 2 - h),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            n.roundLengths && (w = Math.floor(w)),
            E % n.slidesPerGroup === 0 && f.push(w),
            v.push(w))
          : (n.roundLengths && (w = Math.floor(w)),
            (E - Math.min(e.params.slidesPerGroupSkip, E)) %
              e.params.slidesPerGroup ===
              0 && f.push(w),
            v.push(w),
            (w = w + b + h)),
        (e.virtualSize += b + h),
        (x = b),
        (E += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + S),
    o &&
      l &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + h}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + h}px`),
    P && e.grid.updateWrapperSize(b, f),
    !n.centeredSlides)
  ) {
    const T = [];
    for (let N = 0; N < f.length; N += 1) {
      let L = f[N];
      n.roundLengths && (L = Math.floor(L)),
        f[N] <= e.virtualSize - s && T.push(L);
    }
    (f = T),
      Math.floor(e.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(e.virtualSize - s);
  }
  if (a && n.loop) {
    const T = y[0] + h;
    if (n.slidesPerGroup > 1) {
      const N = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        L = T * n.slidesPerGroup;
      for (let M = 0; M < N; M += 1) f.push(f[f.length - 1] + L);
    }
    for (let N = 0; N < e.virtual.slidesBefore + e.virtual.slidesAfter; N += 1)
      n.slidesPerGroup === 1 && f.push(f[f.length - 1] + T),
        v.push(v[v.length - 1] + T),
        (e.virtualSize += T);
  }
  if ((f.length === 0 && (f = [0]), h !== 0)) {
    const T =
      e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
    c.filter((N, L) =>
      !n.cssMode || n.loop ? !0 : L !== c.length - 1
    ).forEach((N) => {
      N.style[T] = `${h}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let T = 0;
    y.forEach((L) => {
      T += L + (h || 0);
    }),
      (T -= h);
    const N = T - s;
    f = f.map((L) => (L <= 0 ? -_ : L > N ? N + S : L));
  }
  if (n.centerInsufficientSlides) {
    let T = 0;
    y.forEach((L) => {
      T += L + (h || 0);
    }),
      (T -= h);
    const N = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
    if (T + N < s) {
      const L = (s - T - N) / 2;
      f.forEach((M, z) => {
        f[z] = M - L;
      }),
        v.forEach((M, z) => {
          v[z] = M + L;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: f,
      slidesGrid: v,
      slidesSizesGrid: y,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    ws(r, "--swiper-centered-offset-before", `${-f[0]}px`),
      ws(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - y[y.length - 1] / 2}px`
      );
    const T = -e.snapGrid[0],
      N = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((L) => L + T)),
      (e.slidesGrid = e.slidesGrid.map((L) => L + N));
  }
  if (
    (d !== u && e.emit("slidesLengthChange"),
    f.length !== p &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    v.length !== g && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !a && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const T = `${n.containerModifierClass}backface-hidden`,
      N = e.el.classList.contains(T);
    d <= n.maxBackfaceHiddenSlides
      ? N || e.el.classList.add(T)
      : N && e.el.classList.remove(T);
  }
}
function eS(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    s;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const o = (l) => (r ? t.slides[t.getSlideIndexByData(l)] : t.slides[l]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        n.push(l);
      });
    else
      for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
        const l = t.activeIndex + s;
        if (l > t.slides.length && !r) break;
        n.push(o(l));
      }
  else n.push(o(t.activeIndex));
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < "u") {
      const l = n[s].offsetHeight;
      i = l > i ? l : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function tS() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
const If = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function nS(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: s } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -e;
  i && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let l = n.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
    : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < r.length; a += 1) {
    const u = r[a];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
    const d =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + l),
      f =
        (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + l),
      v = -(o - c),
      y = v + t.slidesSizesGrid[a],
      _ = v >= 0 && v <= t.size - t.slidesSizesGrid[a],
      S =
        (v >= 0 && v < t.size - 1) ||
        (y > 1 && y <= t.size) ||
        (v <= 0 && y >= t.size);
    S && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(a)),
      If(u, S, n.slideVisibleClass),
      If(u, _, n.slideFullyVisibleClass),
      (u.progress = i ? -d : d),
      (u.originalProgress = i ? -f : f);
  }
}
function rS(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: s, isEnd: o, progressLoop: l } = t;
  const a = s,
    u = o;
  if (r === 0) (i = 0), (s = !0), (o = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const c = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1;
    (s = c || i <= 0), (o = d || i >= 1), c && (i = 0), d && (i = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      f = t.slidesGrid[c],
      v = t.slidesGrid[d],
      y = t.slidesGrid[t.slidesGrid.length - 1],
      _ = Math.abs(e);
    _ >= f ? (l = (_ - f) / y) : (l = (_ + y - v) / y), l > 1 && (l -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: l, isBeginning: s, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    s && !a && t.emit("reachBeginning toEdge"),
    o && !u && t.emit("reachEnd toEdge"),
    ((a && !s) || (u && !o)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
const Wa = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function iS() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    s = e.virtual && n.virtual.enabled,
    o = e.grid && n.grid && n.grid.rows > 1,
    l = (d) => ct(r, `.${n.slideClass}${d}, swiper-slide${d}`)[0];
  let a, u, c;
  if (s)
    if (n.loop) {
      let d = i - e.virtual.slidesBefore;
      d < 0 && (d = e.virtual.slides.length + d),
        d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
        (a = l(`[data-swiper-slide-index="${d}"]`));
    } else a = l(`[data-swiper-slide-index="${i}"]`);
  else
    o
      ? ((a = t.filter((d) => d.column === i)[0]),
        (c = t.filter((d) => d.column === i + 1)[0]),
        (u = t.filter((d) => d.column === i - 1)[0]))
      : (a = t[i]);
  a &&
    (o ||
      ((c = V_(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c && (c = t[0]),
      (u = B_(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach((d) => {
      Wa(d, d === a, n.slideActiveClass),
        Wa(d, d === c, n.slideNextClass),
        Wa(d, d === u, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const Ds = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  Ga = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  au = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const o = i,
        l = [o - t];
      l.push(...Array.from({ length: t }).map((a, u) => o + r + u)),
        e.slides.forEach((a, u) => {
          l.includes(a.column) && Ga(e, u);
        });
      return;
    }
    const s = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let o = i - t; o <= s + t; o += 1) {
        const l = ((o % n) + n) % n;
        (l < i || l > s) && Ga(e, l);
      }
    else
      for (let o = Math.max(i - t, 0); o <= Math.min(s + t, n - 1); o += 1)
        o !== i && (o > s || o < i) && Ga(e, o);
  };
function sS(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let s = 0; s < t.length; s += 1)
    typeof t[s + 1] < "u"
      ? r >= t[s] && r < t[s + 1] - (t[s + 1] - t[s]) / 2
        ? (i = s)
        : r >= t[s] && r < t[s + 1] && (i = s + 1)
      : r >= t[s] && (i = s);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function oS(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: s, realIndex: o, snapIndex: l } = t;
  let a = e,
    u;
  const c = (v) => {
    let y = v - t.virtual.slidesBefore;
    return (
      y < 0 && (y = t.virtual.slides.length + y),
      y >= t.virtual.slides.length && (y -= t.virtual.slides.length),
      y
    );
  };
  if ((typeof a > "u" && (a = sS(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
  else {
    const v = Math.min(i.slidesPerGroupSkip, a);
    u = v + Math.floor((a - v) / i.slidesPerGroup);
  }
  if ((u >= r.length && (u = r.length - 1), a === s && !t.params.loop)) {
    u !== l && ((t.snapIndex = u), t.emit("snapIndexChange"));
    return;
  }
  if (a === s && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(a);
    return;
  }
  const d = t.grid && i.grid && i.grid.rows > 1;
  let f;
  if (t.virtual && i.virtual.enabled && i.loop) f = c(a);
  else if (d) {
    const v = t.slides.filter((_) => _.column === a)[0];
    let y = parseInt(v.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(y) && (y = Math.max(t.slides.indexOf(v), 0)),
      (f = Math.floor(y / i.grid.rows));
  } else if (t.slides[a]) {
    const v = t.slides[a].getAttribute("data-swiper-slide-index");
    v ? (f = parseInt(v, 10)) : (f = a);
  } else f = a;
  Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: u,
    previousRealIndex: o,
    realIndex: f,
    previousIndex: s,
    activeIndex: a,
  }),
    t.initialized && au(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (o !== f && t.emit("realIndexChange"), t.emit("slideChange"));
}
function aS(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((l) => {
      !i && l.matches && l.matches(`.${r.slideClass}, swiper-slide`) && (i = l);
    });
  let s = !1,
    o;
  if (i) {
    for (let l = 0; l < n.slides.length; l += 1)
      if (n.slides[l] === i) {
        (s = !0), (o = l);
        break;
      }
  }
  if (i && s)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = o);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var lS = {
  updateSize: J_,
  updateSlides: Z_,
  updateAutoHeight: eS,
  updateSlidesOffset: tS,
  updateSlidesProgress: nS,
  updateProgress: rS,
  updateSlidesClasses: iS,
  updateActiveIndex: oS,
  updateClickedSlide: aS,
};
function uS(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: s } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let o = F_(s, e);
  return (o += t.cssOverflowAdjustment()), r && (o = -o), o || 0;
}
function cS(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: s, progress: o } = n;
  let l = 0,
    a = 0;
  const u = 0;
  n.isHorizontal() ? (l = r ? -e : e) : (a = e),
    i.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? l : a),
    i.cssMode
      ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -l
          : -a)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (l -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${l}px, ${a}px, ${u}px)`));
  let c;
  const d = n.maxTranslate() - n.minTranslate();
  d === 0 ? (c = 0) : (c = (e - n.minTranslate()) / d),
    c !== o && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function dS() {
  return -this.snapGrid[0];
}
function fS() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function pS(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const s = this,
    { params: o, wrapperEl: l } = s;
  if (s.animating && o.preventInteractionOnTransition) return !1;
  const a = s.minTranslate(),
    u = s.maxTranslate();
  let c;
  if (
    (r && e > a ? (c = a) : r && e < u ? (c = u) : (c = e),
    s.updateProgress(c),
    o.cssMode)
  ) {
    const d = s.isHorizontal();
    if (t === 0) l[d ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!s.support.smoothScroll)
        return (
          sg({ swiper: s, targetPosition: -c, side: d ? "left" : "top" }), !0
        );
      l.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (s.setTransition(0),
        s.setTranslate(c),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd")))
      : (s.setTransition(t),
        s.setTranslate(c),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (f) {
              !s ||
                s.destroyed ||
                (f.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  (s.animating = !1),
                  n && s.emit("transitionEnd")));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var hS = {
  getTranslate: uS,
  setTranslate: cS,
  minTranslate: dS,
  maxTranslate: fS,
  translateTo: pS,
};
function mS(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function lg(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: s, previousIndex: o } = t;
  let l = r;
  if (
    (l || (s > o ? (l = "next") : s < o ? (l = "prev") : (l = "reset")),
    t.emit(`transition${i}`),
    n && s !== o)
  ) {
    if (l === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      l === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function gS(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    lg({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function vS(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      lg({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var yS = { setTransition: mS, transitionStart: gS, transitionEnd: vS };
function wS(e, t, n, r, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: f,
    wrapperEl: v,
    enabled: y,
  } = s;
  if (
    (!y && !r && !i) ||
    s.destroyed ||
    (s.animating && l.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = s.params.speed);
  const _ = Math.min(s.params.slidesPerGroupSkip, o);
  let S = _ + Math.floor((o - _) / s.params.slidesPerGroup);
  S >= a.length && (S = a.length - 1);
  const p = -a[S];
  if (l.normalizeSlideIndex)
    for (let h = 0; h < u.length; h += 1) {
      const w = -Math.floor(p * 100),
        x = Math.floor(u[h] * 100),
        E = Math.floor(u[h + 1] * 100);
      typeof u[h + 1] < "u"
        ? w >= x && w < E - (E - x) / 2
          ? (o = h)
          : w >= x && w < E && (o = h + 1)
        : w >= x && (o = h);
    }
  if (
    s.initialized &&
    o !== d &&
    ((!s.allowSlideNext &&
      (f
        ? p > s.translate && p > s.minTranslate()
        : p < s.translate && p < s.minTranslate())) ||
      (!s.allowSlidePrev &&
        p > s.translate &&
        p > s.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1;
  o !== (c || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(p);
  let g;
  if (
    (o > d ? (g = "next") : o < d ? (g = "prev") : (g = "reset"),
    (f && -p === s.translate) || (!f && p === s.translate))
  )
    return (
      s.updateActiveIndex(o),
      l.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      l.effect !== "slide" && s.setTranslate(p),
      g !== "reset" && (s.transitionStart(n, g), s.transitionEnd(n, g)),
      !1
    );
  if (l.cssMode) {
    const h = s.isHorizontal(),
      w = f ? p : -p;
    if (t === 0) {
      const x = s.virtual && s.params.virtual.enabled;
      x &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        x && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              v[h ? "scrollLeft" : "scrollTop"] = w;
            }))
          : (v[h ? "scrollLeft" : "scrollTop"] = w),
        x &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""), (s._immediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          sg({ swiper: s, targetPosition: w, side: h ? "left" : "top" }), !0
        );
      v.scrollTo({ [h ? "left" : "top"]: w, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(t),
    s.setTranslate(p),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", t, r),
    s.transitionStart(n, g),
    t === 0
      ? s.transitionEnd(n, g)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (w) {
            !s ||
              s.destroyed ||
              (w.target === this &&
                (s.wrapperEl.removeEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(n, g)));
          }),
        s.wrapperEl.addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function _S(e, t, n, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const s = i.grid && i.params.grid && i.params.grid.rows > 1;
  let o = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) o = o + i.virtual.slidesBefore;
    else {
      let l;
      if (s) {
        const f = o * i.params.grid.rows;
        l = i.slides.filter(
          (v) => v.getAttribute("data-swiper-slide-index") * 1 === f
        )[0].column;
      } else l = i.getSlideIndexByData(o);
      const a = s
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: u } = i.params;
      let c = i.params.slidesPerView;
      c === "auto"
        ? (c = i.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          u && c % 2 === 0 && (c = c + 1));
      let d = a - l < c;
      if (
        (u && (d = d || l < Math.ceil(c / 2)),
        r && u && i.params.slidesPerView !== "auto" && !s && (d = !1),
        d)
      ) {
        const f = u
          ? l < i.activeIndex
            ? "prev"
            : "next"
          : l - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: f,
          slideTo: !0,
          activeSlideIndex: f === "next" ? l + 1 : l - a + 1,
          slideRealIndex: f === "next" ? i.realIndex : void 0,
        });
      }
      if (s) {
        const f = o * i.params.grid.rows;
        o = i.slides.filter(
          (v) => v.getAttribute("data-swiper-slide-index") * 1 === f
        )[0].column;
      } else o = i.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(o, t, n, r);
    }),
    i
  );
}
function SS(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: s, animating: o } = r;
  if (!i || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  let l = s.slidesPerGroup;
  s.slidesPerView === "auto" &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const a = r.activeIndex < s.slidesPerGroupSkip ? 1 : l,
    u = r.virtual && s.virtual.enabled;
  if (s.loop) {
    if (o && !u && s.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && s.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + a, e, t, n);
        }),
        !0
      );
  }
  return s.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + a, e, t, n);
}
function xS(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: s,
      slidesGrid: o,
      rtlTranslate: l,
      enabled: a,
      animating: u,
    } = r;
  if (!a || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  const c = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const d = l ? r.translate : -r.translate;
  function f(p) {
    return p < 0 ? -Math.floor(Math.abs(p)) : Math.floor(p);
  }
  const v = f(d),
    y = s.map((p) => f(p));
  let _ = s[y.indexOf(v) - 1];
  if (typeof _ > "u" && i.cssMode) {
    let p;
    s.forEach((g, h) => {
      v >= g && (p = h);
    }),
      typeof p < "u" && (_ = s[p > 0 ? p - 1 : p]);
  }
  let S = 0;
  if (
    (typeof _ < "u" &&
      ((S = o.indexOf(_)),
      S < 0 && (S = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((S = S - r.slidesPerViewDynamic("previous", !0) + 1),
        (S = Math.max(S, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const p =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(p, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(S, e, t, n);
      }),
      !0
    );
  return r.slideTo(S, e, t, n);
}
function ES(e, t, n) {
  t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed)
    return (
      typeof e > "u" && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    );
}
function TS(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let s = i.activeIndex;
  const o = Math.min(i.params.slidesPerGroupSkip, s),
    l = o + Math.floor((s - o) / i.params.slidesPerGroup),
    a = i.rtlTranslate ? i.translate : -i.translate;
  if (a >= i.snapGrid[l]) {
    const u = i.snapGrid[l],
      c = i.snapGrid[l + 1];
    a - u > (c - u) * r && (s += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[l - 1],
      c = i.snapGrid[l];
    a - u <= (c - u) * r && (s -= i.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, i.slidesGrid.length - 1)),
    i.slideTo(s, e, t, n)
  );
}
function CS() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    s;
  const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              ct(n, `${o}[data-swiper-slide-index="${s}"]`)[0]
            )),
            ou(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            ct(n, `${o}[data-swiper-slide-index="${s}"]`)[0]
          )),
          ou(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var bS = {
  slideTo: wS,
  slideToLoop: _S,
  slideNext: SS,
  slidePrev: xS,
  slideReset: ES,
  slideToClosest: TS,
  slideToClickedSlide: CS,
};
function PS(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      ct(r, `.${n.slideClass}, swiper-slide`).forEach((d, f) => {
        d.setAttribute("data-swiper-slide-index", f);
      });
    },
    s = t.grid && n.grid && n.grid.rows > 1,
    o = n.slidesPerGroup * (s ? n.grid.rows : 1),
    l = t.slides.length % o !== 0,
    a = s && t.slides.length % n.grid.rows !== 0,
    u = (c) => {
      for (let d = 0; d < c; d += 1) {
        const f = t.isElement
          ? Eo("swiper-slide", [n.slideBlankClass])
          : Eo("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(f);
      }
    };
  if (l) {
    if (n.loopAddBlankSlides) {
      const c = o - (t.slides.length % o);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      xo(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (a) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      xo(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function kS(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: s,
    byController: o,
    byMousewheel: l,
  } = e === void 0 ? {} : e;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
      slides: u,
      allowSlidePrev: c,
      allowSlideNext: d,
      slidesEl: f,
      params: v,
    } = a,
    { centeredSlides: y } = v;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && v.virtual.enabled)
  ) {
    n &&
      (!v.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : v.centeredSlides && a.snapIndex < v.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = c),
      (a.allowSlideNext = d),
      a.emit("loopFix");
    return;
  }
  let _ = v.slidesPerView;
  _ === "auto"
    ? (_ = a.slidesPerViewDynamic())
    : ((_ = Math.ceil(parseFloat(v.slidesPerView, 10))),
      y && _ % 2 === 0 && (_ = _ + 1));
  const S = v.slidesPerGroupAuto ? _ : v.slidesPerGroup;
  let p = S;
  p % S !== 0 && (p += S - (p % S)),
    (p += v.loopAdditionalSlides),
    (a.loopedSlides = p);
  const g = a.grid && v.grid && v.grid.rows > 1;
  u.length < _ + p
    ? xo(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : g &&
      v.grid.fill === "row" &&
      xo(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const h = [],
    w = [];
  let x = a.activeIndex;
  typeof s > "u"
    ? (s = a.getSlideIndex(
        u.filter((M) => M.classList.contains(v.slideActiveClass))[0]
      ))
    : (x = s);
  const E = r === "next" || !r,
    P = r === "prev" || !r;
  let b = 0,
    k = 0;
  const T = g ? Math.ceil(u.length / v.grid.rows) : u.length,
    L = (g ? u[s].column : s) + (y && typeof i > "u" ? -_ / 2 + 0.5 : 0);
  if (L < p) {
    b = Math.max(p - L, S);
    for (let M = 0; M < p - L; M += 1) {
      const z = M - Math.floor(M / T) * T;
      if (g) {
        const V = T - z - 1;
        for (let he = u.length - 1; he >= 0; he -= 1)
          u[he].column === V && h.push(he);
      } else h.push(T - z - 1);
    }
  } else if (L + _ > T - p) {
    k = Math.max(L - (T - p * 2), S);
    for (let M = 0; M < k; M += 1) {
      const z = M - Math.floor(M / T) * T;
      g
        ? u.forEach((V, he) => {
            V.column === z && w.push(he);
          })
        : w.push(z);
    }
  }
  if (
    ((a.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      a.__preventObserver__ = !1;
    }),
    P &&
      h.forEach((M) => {
        (u[M].swiperLoopMoveDOM = !0),
          f.prepend(u[M]),
          (u[M].swiperLoopMoveDOM = !1);
      }),
    E &&
      w.forEach((M) => {
        (u[M].swiperLoopMoveDOM = !0),
          f.append(u[M]),
          (u[M].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    v.slidesPerView === "auto"
      ? a.updateSlides()
      : g &&
        ((h.length > 0 && P) || (w.length > 0 && E)) &&
        a.slides.forEach((M, z) => {
          a.grid.updateSlide(z, M, a.slides);
        }),
    v.watchSlidesProgress && a.updateSlidesOffset(),
    n)
  ) {
    if (h.length > 0 && P) {
      if (typeof t > "u") {
        const M = a.slidesGrid[x],
          V = a.slidesGrid[x + b] - M;
        l
          ? a.setTranslate(a.translate - V)
          : (a.slideTo(x + Math.ceil(b), 0, !1, !0),
            i &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - V),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - V)));
      } else if (i) {
        const M = g ? h.length / v.grid.rows : h.length;
        a.slideTo(a.activeIndex + M, 0, !1, !0),
          (a.touchEventsData.currentTranslate = a.translate);
      }
    } else if (w.length > 0 && E)
      if (typeof t > "u") {
        const M = a.slidesGrid[x],
          V = a.slidesGrid[x - k] - M;
        l
          ? a.setTranslate(a.translate - V)
          : (a.slideTo(x - k, 0, !1, !0),
            i &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - V),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - V)));
      } else {
        const M = g ? w.length / v.grid.rows : w.length;
        a.slideTo(a.activeIndex - M, 0, !1, !0);
      }
  }
  if (
    ((a.allowSlidePrev = c),
    (a.allowSlideNext = d),
    a.controller && a.controller.control && !o)
  ) {
    const M = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: s,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((z) => {
          !z.destroyed &&
            z.params.loop &&
            z.loopFix({
              ...M,
              slideTo: z.params.slidesPerView === v.slidesPerView ? n : !1,
            });
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({
          ...M,
          slideTo:
            a.controller.control.params.slidesPerView === v.slidesPerView
              ? n
              : !1,
        });
  }
  a.emit("loopFix");
}
function IS() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const s =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[s] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var NS = { loopCreate: PS, loopFix: kS, loopDestroy: IS };
function OS(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function RS() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var LS = { setGrabCursor: OS, unsetGrabCursor: RS };
function AS(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === zr() || r === He()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function Nf(e, t, n) {
  const r = He(),
    { params: i } = e,
    s = i.edgeSwipeDetection,
    o = i.edgeSwipeThreshold;
  return s && (n <= o || n >= r.innerWidth - o)
    ? s === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function MS(e) {
  const t = this,
    n = zr();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    Nf(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: s, touches: o, enabled: l } = t;
  if (
    !l ||
    (!s.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && s.preventInteractionOnTransition)
  )
    return;
  !t.animating && s.cssMode && s.loop && t.loopFix();
  let a = r.target;
  if (
    (s.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(a)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const u = !!s.noSwipingClass && s.noSwipingClass !== "",
    c = r.composedPath ? r.composedPath() : r.path;
  u && r.target && r.target.shadowRoot && c && (a = c[0]);
  const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    f = !!(r.target && r.target.shadowRoot);
  if (s.noSwiping && (f ? AS(d, a) : a.closest(d))) {
    t.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !a.closest(s.swipeHandler)) return;
  (o.currentX = r.pageX), (o.currentY = r.pageY);
  const v = o.currentX,
    y = o.currentY;
  if (!Nf(t, r, v)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = v),
    (o.startY = y),
    (i.touchStartTime = So()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    s.threshold > 0 && (i.allowThresholdMove = !1);
  let _ = !0;
  a.matches(i.focusableElements) &&
    ((_ = !1), a.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== a &&
      n.activeElement.blur();
  const S = _ && t.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || S) &&
    !a.isContentEditable &&
    r.preventDefault(),
    s.freeMode &&
      s.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !s.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function jS(e) {
  const t = zr(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: s, rtlTranslate: o, enabled: l } = n;
  if (!l || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let a = e;
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" &&
      (r.touchId !== null || a.pointerId !== r.pointerId))
  )
    return;
  let u;
  if (a.type === "touchmove") {
    if (
      ((u = [...a.changedTouches].filter((E) => E.identifier === r.touchId)[0]),
      !u || u.identifier !== r.touchId)
    )
      return;
  } else u = a;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", a);
    return;
  }
  const c = u.pageX,
    d = u.pageY;
  if (a.preventedByNestedSwiper) {
    (s.startX = c), (s.startY = d);
    return;
  }
  if (!n.allowTouchMove) {
    a.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(s, { startX: c, startY: d, currentX: c, currentY: d }),
        (r.touchStartTime = So()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (d < s.startY && n.translate <= n.maxTranslate()) ||
        (d > s.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (c < s.startX && n.translate <= n.maxTranslate()) ||
      (c > s.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    a.target === t.activeElement &&
    a.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", a),
    (s.previousX = s.currentX),
    (s.previousY = s.currentY),
    (s.currentX = c),
    (s.currentY = d);
  const f = s.currentX - s.startX,
    v = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(f ** 2 + v ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let E;
    (n.isHorizontal() && s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (r.isScrolling = !1)
      : f * f + v * v >= 25 &&
        ((E = (Math.atan2(Math.abs(v), Math.abs(f)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? E > i.touchAngle
          : 90 - E > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", a),
    typeof r.startMoving > "u" &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (a.type === "touchmove" && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && a.cancelable && a.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
  let y = n.isHorizontal() ? f : v,
    _ = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  i.oneWayMovement &&
    ((y = Math.abs(y) * (o ? 1 : -1)), (_ = Math.abs(_) * (o ? 1 : -1))),
    (s.diff = y),
    (y *= i.touchRatio),
    o && ((y = -y), (_ = -_));
  const S = n.touchesDirection;
  (n.swipeDirection = y > 0 ? "prev" : "next"),
    (n.touchesDirection = _ > 0 ? "prev" : "next");
  const p = n.params.loop && !i.cssMode,
    g =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (p && g && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const E = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      n.wrapperEl.dispatchEvent(E);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a);
  }
  let h;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      S !== n.touchesDirection &&
      p &&
      g &&
      Math.abs(y) >= 1)
  ) {
    Object.assign(s, {
      startX: c,
      startY: d,
      currentX: c,
      currentY: d,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", a),
    (r.isMoved = !0),
    (r.currentTranslate = y + r.startTranslate);
  let w = !0,
    x = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (x = 0),
    y > 0
      ? (p &&
          g &&
          !h &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + y) ** x)))
      : y < 0 &&
        (p &&
          g &&
          !h &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - y) ** x))),
    w && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (r.currentTranslate = r.startTranslate),
          (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function DS(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((x) => x.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: o,
    touches: l,
    rtlTranslate: a,
    slidesGrid: u,
    enabled: c,
  } = t;
  if (!c || (!o.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && o.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  o.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const d = So(),
    f = d - n.touchStartTime;
  if (t.allowClick) {
    const x = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((x && x[0]) || r.target, x),
      t.emit("tap click", r),
      f < 300 &&
        d - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = So()),
    ou(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (l.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let v;
  if (
    (o.followFinger
      ? (v = a ? t.translate : -t.translate)
      : (v = -n.currentTranslate),
    o.cssMode)
  )
    return;
  if (o.freeMode && o.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: v });
    return;
  }
  const y = v >= -t.maxTranslate() && !t.params.loop;
  let _ = 0,
    S = t.slidesSizesGrid[0];
  for (
    let x = 0;
    x < u.length;
    x += x < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const E = x < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof u[x + E] < "u"
      ? (y || (v >= u[x] && v < u[x + E])) && ((_ = x), (S = u[x + E] - u[x]))
      : (y || v >= u[x]) && ((_ = x), (S = u[u.length - 1] - u[u.length - 2]));
  }
  let p = null,
    g = null;
  o.rewind &&
    (t.isBeginning
      ? (g =
          o.virtual && o.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (p = 0));
  const h = (v - u[_]) / S,
    w = _ < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (f > o.longSwipesMs) {
    if (!o.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (h >= o.longSwipesRatio
        ? t.slideTo(o.rewind && t.isEnd ? p : _ + w)
        : t.slideTo(_)),
      t.swipeDirection === "prev" &&
        (h > 1 - o.longSwipesRatio
          ? t.slideTo(_ + w)
          : g !== null && h < 0 && Math.abs(h) > o.longSwipesRatio
          ? t.slideTo(g)
          : t.slideTo(_));
  } else {
    if (!o.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(_ + w)
        : t.slideTo(_)
      : (t.swipeDirection === "next" && t.slideTo(p !== null ? p : _ + w),
        t.swipeDirection === "prev" && t.slideTo(g !== null ? g : _));
  }
}
function Of() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e,
    o = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const l = o && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !l
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !o
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
}
function US(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function zS() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const s = e.maxTranslate() - e.minTranslate();
  s === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / s),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function FS(e) {
  const t = this;
  Ds(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function $S() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const ug = (e, t) => {
  const n = zr(),
    { params: r, el: i, wrapperEl: s, device: o } = e,
    l = !!r.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  !i ||
    typeof i == "string" ||
    (n[a]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }),
    i[a]("touchstart", e.onTouchStart, { passive: !1 }),
    i[a]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[a]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
    n[a]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
    n[a]("touchend", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[a]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[a]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[a]("click", e.onClick, !0),
    r.cssMode && s[a]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[u](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Of,
          !0
        )
      : e[u]("observerUpdate", Of, !0),
    i[a]("load", e.onLoad, { capture: !0 }));
};
function BS() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = MS.bind(e)),
    (e.onTouchMove = jS.bind(e)),
    (e.onTouchEnd = DS.bind(e)),
    (e.onDocumentTouchStart = $S.bind(e)),
    t.cssMode && (e.onScroll = zS.bind(e)),
    (e.onClick = US.bind(e)),
    (e.onLoad = FS.bind(e)),
    ug(e, "on");
}
function VS() {
  ug(this, "off");
}
var HS = { attachEvents: BS, detachEvents: VS };
const Rf = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function WS() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    s = r.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const o = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
  if (!o || e.currentBreakpoint === o) return;
  const a = (o in s ? s[o] : void 0) || e.originalParams,
    u = Rf(e, r),
    c = Rf(e, a),
    d = e.params.grabCursor,
    f = a.grabCursor,
    v = r.enabled;
  u && !c
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !u &&
      c &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === "column") ||
        (!a.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    d && !f ? e.unsetGrabCursor() : !d && f && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((h) => {
      if (typeof a[h] > "u") return;
      const w = r[h] && r[h].enabled,
        x = a[h] && a[h].enabled;
      w && !x && e[h].disable(), !w && x && e[h].enable();
    });
  const y = a.direction && a.direction !== r.direction,
    _ = r.loop && (a.slidesPerView !== r.slidesPerView || y),
    S = r.loop;
  y && n && e.changeDirection(), Ae(e.params, a);
  const p = e.params.enabled,
    g = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    v && !p ? e.disable() : !v && p && e.enable(),
    (e.currentBreakpoint = o),
    e.emit("_beforeBreakpoint", a),
    n &&
      (_
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !S && g
        ? (e.loopCreate(t), e.updateSlides())
        : S && !g && e.loopDestroy()),
    e.emit("breakpoint", a);
}
function GS(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = He(),
    s = t === "window" ? i.innerHeight : n.clientHeight,
    o = Object.keys(e).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1));
        return { value: s * a, point: l };
      }
      return { value: l, point: l };
    });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const { point: a, value: u } = o[l];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = a)
      : u <= n.clientWidth && (r = a);
  }
  return r || "max";
}
var qS = { setBreakpoint: WS, getBreakpoint: GS };
function KS(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function XS() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: s } = e,
    o = KS(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...o), i.classList.add(...t), e.emitContainerClasses();
}
function YS() {
  const e = this,
    { el: t, classNames: n } = e;
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...n), e.emitContainerClasses());
}
var QS = { addClasses: XS, removeClasses: YS };
function JS() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > s;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var ZS = { checkOverflow: JS },
  lu = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function ex(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      s = r[i];
    if (typeof s != "object" || s === null) {
      Ae(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in s))
    ) {
      Ae(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      Ae(t, r);
  };
}
const qa = {
    eventsEmitter: Q_,
    update: lS,
    translate: hS,
    transition: yS,
    slide: bS,
    loop: NS,
    grabCursor: LS,
    events: HS,
    breakpoints: qS,
    checkOverflow: ZS,
    classes: QS,
  },
  Ka = {};
let Hi = class _t {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = Ae({}, n)),
      t && !n.el && (n.el = t);
    const o = zr();
    if (
      n.el &&
      typeof n.el == "string" &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        o.querySelectorAll(n.el).forEach((d) => {
          const f = Ae({}, n, { el: d });
          c.push(new _t(f));
        }),
        c
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = og()),
      (l.device = ag({ userAgent: n.userAgent })),
      (l.browser = K_()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules);
    const a = {};
    l.modules.forEach((c) => {
      c({
        params: n,
        swiper: l,
        extendParams: ex(n, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const u = Ae({}, lu, a);
    return (
      (l.params = Ae({}, u, Ka, n)),
      (l.originalParams = Ae({}, l.params)),
      (l.passedParams = Ae({}, n)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((c) => {
          l.on(c, l.params.on[c]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = ct(n, `.${r.slideClass}, swiper-slide`),
      s = Pf(i[0]);
    return Pf(t) - s;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = ct(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      o = (r.maxTranslate() - i) * t + i;
    r.translateTo(o, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: s,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: a,
        activeIndex: u,
      } = r;
    let c = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let d = s[u] ? Math.ceil(s[u].swiperSlideSize) : 0,
        f;
      for (let v = u + 1; v < s.length; v += 1)
        s[v] &&
          !f &&
          ((d += Math.ceil(s[v].swiperSlideSize)), (c += 1), d > a && (f = !0));
      for (let v = u - 1; v >= 0; v -= 1)
        s[v] &&
          !f &&
          ((d += s[v].swiperSlideSize), (c += 1), d > a && (f = !0));
    } else if (t === "current")
      for (let d = u + 1; d < s.length; d += 1)
        (n ? o[d] + l[d] - o[u] < a : o[d] - o[u] < a) && (c += 1);
    else for (let d = u - 1; d >= 0; d -= 1) o[u] - o[d] < a && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && Ds(t, o);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let s;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const o = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        s = t.slideTo(o.length - 1, 0, !1, !0);
      } else s = t.slideTo(t.activeIndex, 0, !1, !0);
      s || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((s) => {
          t === "vertical" ? (s.style.width = "") : (s.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : ct(r, i())[0];
    return (
      !o &&
        n.params.createElements &&
        ((o = Eo("div", n.params.wrapperClass)),
        r.append(o),
        ct(r, `.${n.params.slideClass}`).forEach((l) => {
          o.append(l);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: o,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : o,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || en(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || en(r, "direction") === "rtl"),
        wrongRTL: en(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((s) => {
        s.complete
          ? Ds(n, s)
          : s.addEventListener("load", (o) => {
              Ds(n, o.target);
            });
      }),
      au(n),
      (n.initialized = !0),
      au(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: s, wrapperEl: o, slides: l } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          s && typeof s != "string" && s.removeAttribute("style"),
          o && o.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((a) => {
              a.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((a) => {
          r.off(a);
        }),
        t !== !1 &&
          (r.el && typeof r.el != "string" && (r.el.swiper = null), U_(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Ae(Ka, t);
  }
  static get extendedDefaults() {
    return Ka;
  }
  static get defaults() {
    return lu;
  }
  static installModule(t) {
    _t.prototype.__modules__ || (_t.prototype.__modules__ = []);
    const n = _t.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => _t.installModule(n)), _t)
      : (_t.installModule(t), _t);
  }
};
Object.keys(qa).forEach((e) => {
  Object.keys(qa[e]).forEach((t) => {
    Hi.prototype[t] = qa[e][t];
  });
});
Hi.use([X_, Y_]);
const cg = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function Hn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function wr(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Hn(t[r]) && Hn(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : wr(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function dg(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function fg(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function pg(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function hg(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function tx(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function nx(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: s,
    prevEl: o,
    scrollbarEl: l,
    paginationEl: a,
  } = e;
  const u = i.filter(
      (k) => k !== "children" && k !== "direction" && k !== "wrapperClass"
    ),
    {
      params: c,
      pagination: d,
      navigation: f,
      scrollbar: v,
      virtual: y,
      thumbs: _,
    } = t;
  let S, p, g, h, w, x, E, P;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (S = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      c.controller &&
      !c.controller.control &&
      (p = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || a) &&
      (c.pagination || c.pagination === !1) &&
      d &&
      !d.el &&
      (g = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || l) &&
      (c.scrollbar || c.scrollbar === !1) &&
      v &&
      !v.el &&
      (h = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || o) &&
      (r.navigation.nextEl || s) &&
      (c.navigation || c.navigation === !1) &&
      f &&
      !f.prevEl &&
      !f.nextEl &&
      (w = !0);
  const b = (k) => {
    t[k] &&
      (t[k].destroy(),
      k === "navigation"
        ? (t.isElement && (t[k].prevEl.remove(), t[k].nextEl.remove()),
          (c[k].prevEl = void 0),
          (c[k].nextEl = void 0),
          (t[k].prevEl = void 0),
          (t[k].nextEl = void 0))
        : (t.isElement && t[k].el.remove(),
          (c[k].el = void 0),
          (t[k].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (c.loop && !r.loop ? (x = !0) : !c.loop && r.loop ? (E = !0) : (P = !0)),
    u.forEach((k) => {
      if (Hn(c[k]) && Hn(r[k]))
        Object.assign(c[k], r[k]),
          (k === "navigation" || k === "pagination" || k === "scrollbar") &&
            "enabled" in r[k] &&
            !r[k].enabled &&
            b(k);
      else {
        const T = r[k];
        (T === !0 || T === !1) &&
        (k === "navigation" || k === "pagination" || k === "scrollbar")
          ? T === !1 && b(k)
          : (c[k] = r[k]);
      }
    }),
    u.includes("controller") &&
      !p &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    i.includes("children") && n && y && c.virtual.enabled
      ? ((y.slides = n), y.update(!0))
      : i.includes("virtual") &&
        y &&
        c.virtual.enabled &&
        (n && (y.slides = n), y.update(!0)),
    i.includes("children") && n && c.loop && (P = !0),
    S && _.init() && _.update(!0),
    p && (t.controller.control = c.controller.control),
    g &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        a.part.add("pagination"),
        t.el.appendChild(a)),
      a && (c.pagination.el = a),
      d.init(),
      d.render(),
      d.update()),
    h &&
      (t.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-scrollbar"),
        l.part.add("scrollbar"),
        t.el.appendChild(l)),
      l && (c.scrollbar.el = l),
      v.init(),
      v.updateSize(),
      v.setTranslate()),
    w &&
      (t.isElement &&
        ((!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-next"),
          (s.innerHTML = t.hostEl.constructor.nextButtonSvg),
          s.part.add("button-next"),
          t.el.appendChild(s)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          (o.innerHTML = t.hostEl.constructor.prevButtonSvg),
          o.part.add("button-prev"),
          t.el.appendChild(o))),
      s && (c.navigation.nextEl = s),
      o && (c.navigation.prevEl = o),
      f.init(),
      f.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (x || P) && t.loopDestroy(),
    (E || P) && t.loopCreate(),
    t.update();
}
function rx(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  wr(n, lu), (n._emitClasses = !0), (n.init = !1);
  const s = {},
    o = cg.map((a) => a.replace(/_/, "")),
    l = Object.assign({}, e);
  return (
    Object.keys(l).forEach((a) => {
      typeof e[a] > "u" ||
        (o.indexOf(a) >= 0
          ? Hn(e[a])
            ? ((n[a] = {}), (i[a] = {}), wr(n[a], e[a]), wr(i[a], e[a]))
            : ((n[a] = e[a]), (i[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function"
          ? t
            ? (r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
          : (s[a] = e[a]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a];
    }),
    { params: n, passedParams: i, rest: s, events: r }
  );
}
function ix(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: s,
    scrollbarEl: o,
    swiper: l,
  } = e;
  dg(t) &&
    r &&
    i &&
    ((l.params.navigation.nextEl = r),
    (l.originalParams.navigation.nextEl = r),
    (l.params.navigation.prevEl = i),
    (l.originalParams.navigation.prevEl = i)),
    fg(t) &&
      s &&
      ((l.params.pagination.el = s), (l.originalParams.pagination.el = s)),
    pg(t) &&
      o &&
      ((l.params.scrollbar.el = o), (l.originalParams.scrollbar.el = o)),
    l.init(n);
}
function sx(e, t, n, r, i) {
  const s = [];
  if (!t) return s;
  const o = (a) => {
    s.indexOf(a) < 0 && s.push(a);
  };
  if (n && r) {
    const a = r.map(i),
      u = n.map(i);
    a.join("") !== u.join("") && o("children"),
      r.length !== n.length && o("children");
  }
  return (
    cg
      .filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in e && a in t)
          if (Hn(e[a]) && Hn(t[a])) {
            const u = Object.keys(e[a]),
              c = Object.keys(t[a]);
            u.length !== c.length
              ? o(a)
              : (u.forEach((d) => {
                  e[a][d] !== t[a][d] && o(a);
                }),
                c.forEach((d) => {
                  e[a][d] !== t[a][d] && o(a);
                }));
          } else e[a] !== t[a] && o(a);
      }),
    s
  );
}
const ox = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function To() {
  return (
    (To = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    To.apply(this, arguments)
  );
}
function mg(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function gg(e) {
  const t = [];
  return (
    $.Children.toArray(e).forEach((n) => {
      mg(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          gg(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function ax(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    $.Children.toArray(e).forEach((r) => {
      if (mg(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = gg(r.props.children);
        i.length > 0 ? i.forEach((s) => t.push(s)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function lx(e, t, n) {
  if (!n) return null;
  const r = (c) => {
      let d = c;
      return (
        c < 0 ? (d = t.length + c) : d >= t.length && (d = d - t.length), d
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: s, to: o } = n,
    l = e.params.loop ? -t.length : 0,
    a = e.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = l; c < a; c += 1) c >= s && c <= o && u.push(t[r(c)]);
  return u.map((c, d) =>
    $.cloneElement(c, {
      swiper: e,
      style: i,
      key: c.props.virtualIndex || c.key || `slide-${d}`,
    })
  );
}
function fi(e, t) {
  return typeof window > "u" ? C.useEffect(e, t) : C.useLayoutEffect(e, t);
}
const Lf = C.createContext(null),
  ux = C.createContext(null),
  bc = C.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: s,
        onSwiper: o,
        ...l
      } = e === void 0 ? {} : e,
      a = !1;
    const [u, c] = C.useState("swiper"),
      [d, f] = C.useState(null),
      [v, y] = C.useState(!1),
      _ = C.useRef(!1),
      S = C.useRef(null),
      p = C.useRef(null),
      g = C.useRef(null),
      h = C.useRef(null),
      w = C.useRef(null),
      x = C.useRef(null),
      E = C.useRef(null),
      P = C.useRef(null),
      { params: b, passedParams: k, rest: T, events: N } = rx(l),
      { slides: L, slots: M } = ax(s),
      z = () => {
        y(!v);
      };
    Object.assign(b.on, {
      _containerClasses(A, j) {
        c(j);
      },
    });
    const V = () => {
      Object.assign(b.on, N), (a = !0);
      const A = { ...b };
      if (
        (delete A.wrapperClass,
        (p.current = new Hi(A)),
        p.current.virtual && p.current.params.virtual.enabled)
      ) {
        p.current.virtual.slides = L;
        const j = {
          cache: !1,
          slides: L,
          renderExternal: f,
          renderExternalUpdate: !1,
        };
        wr(p.current.params.virtual, j),
          wr(p.current.originalParams.virtual, j);
      }
    };
    S.current || V(), p.current && p.current.on("_beforeBreakpoint", z);
    const he = () => {
        a ||
          !N ||
          !p.current ||
          Object.keys(N).forEach((A) => {
            p.current.on(A, N[A]);
          });
      },
      Tn = () => {
        !N ||
          !p.current ||
          Object.keys(N).forEach((A) => {
            p.current.off(A, N[A]);
          });
      };
    C.useEffect(() => () => {
      p.current && p.current.off("_beforeBreakpoint", z);
    }),
      C.useEffect(() => {
        !_.current &&
          p.current &&
          (p.current.emitSlidesClasses(), (_.current = !0));
      }),
      fi(() => {
        if ((t && (t.current = S.current), !!S.current))
          return (
            p.current.destroyed && V(),
            ix(
              {
                el: S.current,
                nextEl: w.current,
                prevEl: x.current,
                paginationEl: E.current,
                scrollbarEl: P.current,
                swiper: p.current,
              },
              b
            ),
            o && !p.current.destroyed && o(p.current),
            () => {
              p.current && !p.current.destroyed && p.current.destroy(!0, !1);
            }
          );
      }, []),
      fi(() => {
        he();
        const A = sx(k, g.current, L, h.current, (j) => j.key);
        return (
          (g.current = k),
          (h.current = L),
          A.length &&
            p.current &&
            !p.current.destroyed &&
            nx({
              swiper: p.current,
              slides: L,
              passedParams: k,
              changedParams: A,
              nextEl: w.current,
              prevEl: x.current,
              scrollbarEl: P.current,
              paginationEl: E.current,
            }),
          () => {
            Tn();
          }
        );
      }),
      fi(() => {
        ox(p.current);
      }, [d]);
    function O() {
      return b.virtual
        ? lx(p.current, L, d)
        : L.map((A, j) =>
            $.cloneElement(A, { swiper: p.current, swiperSlideIndex: j })
          );
    }
    return $.createElement(
      r,
      To({ ref: S, className: hg(`${u}${n ? ` ${n}` : ""}`) }, T),
      $.createElement(
        ux.Provider,
        { value: p.current },
        M["container-start"],
        $.createElement(
          i,
          { className: tx(b.wrapperClass) },
          M["wrapper-start"],
          O(),
          M["wrapper-end"]
        ),
        dg(b) &&
          $.createElement(
            $.Fragment,
            null,
            $.createElement("div", { ref: x, className: "swiper-button-prev" }),
            $.createElement("div", { ref: w, className: "swiper-button-next" })
          ),
        pg(b) &&
          $.createElement("div", { ref: P, className: "swiper-scrollbar" }),
        fg(b) &&
          $.createElement("div", { ref: E, className: "swiper-pagination" }),
        M["container-end"]
      )
    );
  });
bc.displayName = "Swiper";
const Pc = C.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: s,
    zoom: o,
    lazy: l,
    virtualIndex: a,
    swiperSlideIndex: u,
    ...c
  } = e === void 0 ? {} : e;
  const d = C.useRef(null),
    [f, v] = C.useState("swiper-slide"),
    [y, _] = C.useState(!1);
  function S(w, x, E) {
    x === d.current && v(E);
  }
  fi(() => {
    if (
      (typeof u < "u" && (d.current.swiperSlideIndex = u),
      t && (t.current = d.current),
      !(!d.current || !s))
    ) {
      if (s.destroyed) {
        f !== "swiper-slide" && v("swiper-slide");
        return;
      }
      return (
        s.on("_slideClass", S),
        () => {
          s && s.off("_slideClass", S);
        }
      );
    }
  }),
    fi(() => {
      s && d.current && !s.destroyed && v(s.getSlideClasses(d.current));
    }, [s]);
  const p = {
      isActive: f.indexOf("swiper-slide-active") >= 0,
      isVisible: f.indexOf("swiper-slide-visible") >= 0,
      isPrev: f.indexOf("swiper-slide-prev") >= 0,
      isNext: f.indexOf("swiper-slide-next") >= 0,
    },
    g = () => (typeof r == "function" ? r(p) : r),
    h = () => {
      _(!0);
    };
  return $.createElement(
    n,
    To(
      {
        ref: d,
        className: hg(`${f}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": a,
        onLoad: h,
      },
      c
    ),
    o &&
      $.createElement(
        Lf.Provider,
        { value: p },
        $.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof o == "number" ? o : void 0,
          },
          g(),
          l &&
            !y &&
            $.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !o &&
      $.createElement(
        Lf.Provider,
        { value: p },
        g(),
        l &&
          !y &&
          $.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
Pc.displayName = "SwiperSlide";
function cx(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let s = ct(e.el, `.${r[i]}`)[0];
          s || ((s = Eo("div", r[i])), (s.className = r[i]), e.el.append(s)),
            (n[i] = s),
            (t[i] = s);
        }
      }),
    n
  );
}
function vg(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null });
  function s(y) {
    let _;
    return y &&
      typeof y == "string" &&
      t.isElement &&
      ((_ = t.el.querySelector(y)), _)
      ? _
      : (y &&
          (typeof y == "string" && (_ = [...document.querySelectorAll(y)]),
          t.params.uniqueNavElements &&
          typeof y == "string" &&
          _ &&
          _.length > 1 &&
          t.el.querySelectorAll(y).length === 1
            ? (_ = t.el.querySelector(y))
            : _ && _.length === 1 && (_ = _[0])),
        y && !_ ? y : _);
  }
  function o(y, _) {
    const S = t.params.navigation;
    (y = yt(y)),
      y.forEach((p) => {
        p &&
          (p.classList[_ ? "add" : "remove"](...S.disabledClass.split(" ")),
          p.tagName === "BUTTON" && (p.disabled = _),
          t.params.watchOverflow &&
            t.enabled &&
            p.classList[t.isLocked ? "add" : "remove"](S.lockClass));
      });
  }
  function l() {
    const { nextEl: y, prevEl: _ } = t.navigation;
    if (t.params.loop) {
      o(_, !1), o(y, !1);
      return;
    }
    o(_, t.isBeginning && !t.params.rewind), o(y, t.isEnd && !t.params.rewind);
  }
  function a(y) {
    y.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i("navigationPrev"));
  }
  function u(y) {
    y.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), i("navigationNext"));
  }
  function c() {
    const y = t.params.navigation;
    if (
      ((t.params.navigation = cx(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(y.nextEl || y.prevEl))
    )
      return;
    let _ = s(y.nextEl),
      S = s(y.prevEl);
    Object.assign(t.navigation, { nextEl: _, prevEl: S }),
      (_ = yt(_)),
      (S = yt(S));
    const p = (g, h) => {
      g && g.addEventListener("click", h === "next" ? u : a),
        !t.enabled && g && g.classList.add(...y.lockClass.split(" "));
    };
    _.forEach((g) => p(g, "next")), S.forEach((g) => p(g, "prev"));
  }
  function d() {
    let { nextEl: y, prevEl: _ } = t.navigation;
    (y = yt(y)), (_ = yt(_));
    const S = (p, g) => {
      p.removeEventListener("click", g === "next" ? u : a),
        p.classList.remove(...t.params.navigation.disabledClass.split(" "));
    };
    y.forEach((p) => S(p, "next")), _.forEach((p) => S(p, "prev"));
  }
  r("init", () => {
    t.params.navigation.enabled === !1 ? v() : (c(), l());
  }),
    r("toEdge fromEdge lock unlock", () => {
      l();
    }),
    r("destroy", () => {
      d();
    }),
    r("enable disable", () => {
      let { nextEl: y, prevEl: _ } = t.navigation;
      if (((y = yt(y)), (_ = yt(_)), t.enabled)) {
        l();
        return;
      }
      [...y, ..._]
        .filter((S) => !!S)
        .forEach((S) => S.classList.add(t.params.navigation.lockClass));
    }),
    r("click", (y, _) => {
      let { nextEl: S, prevEl: p } = t.navigation;
      (S = yt(S)), (p = yt(p));
      const g = _.target;
      let h = p.includes(g) || S.includes(g);
      if (t.isElement && !h) {
        const w = _.path || (_.composedPath && _.composedPath());
        w && (h = w.find((x) => S.includes(x) || p.includes(x)));
      }
      if (t.params.navigation.hideOnClick && !h) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === g || t.pagination.el.contains(g))
        )
          return;
        let w;
        S.length
          ? (w = S[0].classList.contains(t.params.navigation.hiddenClass))
          : p.length &&
            (w = p[0].classList.contains(t.params.navigation.hiddenClass)),
          i(w === !0 ? "navigationShow" : "navigationHide"),
          [...S, ...p]
            .filter((x) => !!x)
            .forEach((x) =>
              x.classList.toggle(t.params.navigation.hiddenClass)
            );
      }
    });
  const f = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        c(),
        l();
    },
    v = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        d();
    };
  Object.assign(t.navigation, {
    enable: f,
    disable: v,
    update: l,
    init: c,
    destroy: d,
  });
}
var yg = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Af = $.createContext && $.createContext(yg),
  dx = ["attr", "size", "title"];
function fx(e, t) {
  if (e == null) return {};
  var n = px(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function px(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Co() {
  return (
    (Co = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Co.apply(this, arguments)
  );
}
function Mf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function bo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Mf(Object(n), !0).forEach(function (r) {
          hx(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Mf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function hx(e, t, n) {
  return (
    (t = mx(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function mx(e) {
  var t = gx(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function gx(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wg(e) {
  return (
    e &&
    e.map((t, n) => $.createElement(t.tag, bo({ key: n }, t.attr), wg(t.child)))
  );
}
function xn(e) {
  return (t) =>
    $.createElement(vx, Co({ attr: bo({}, e.attr) }, t), wg(e.child));
}
function vx(e) {
  var t = (n) => {
    var { attr: r, size: i, title: s } = e,
      o = fx(e, dx),
      l = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      $.createElement(
        "svg",
        Co(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: a,
            style: bo(bo({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && $.createElement("title", null, s),
        e.children
      )
    );
  };
  return Af !== void 0
    ? $.createElement(Af.Consumer, null, (n) => t(n))
    : t(yg);
}
function yx(e) {
  return xn({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z",
        },
        child: [],
      },
    ],
  })(e);
}
function Us({ listing: e }) {
  return m.jsx("div", {
    className:
      "bg-white shadow-md w-full sm:w-[330px] hover:shadow-lg transition-shadow overflow-hidden rounded-lg",
    children: m.jsxs(ye, {
      to: `/listing/${e._id}`,
      children: [
        m.jsx("img", {
          src:
            e.imageUrls[0] ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUJiZNj0IHwnmh5QkJ4ifUMAR3rlBQrBDhVPS1u-WbyDgMjHPJed6_8ySCY7guNLPgg4&usqp=CAU",
          alt: "Listing Cover",
          className:
            "h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300",
        }),
        m.jsxs("div", {
          className: "p-3 flex flex-col gap-2 w-full",
          children: [
            m.jsx("p", {
              className: "truncate text-lg font-semibold text-slate-700",
              children: e.name,
            }),
            m.jsxs("div", {
              className: "flex items-center gap-1",
              children: [
                m.jsx(yx, { className: "h-4 w-4 text-green-500" }),
                m.jsx("p", {
                  className: "truncate text-sm text-gray-600 w-full",
                  children: e.address,
                }),
              ],
            }),
            m.jsx("p", {
              className: "text-sm text-gray-600 line-clamp-2",
              children: e.description,
            }),
            m.jsxs("p", {
              className: "flex items-center text-slate-500 mt-2 font-semibold",
              children: [
                "$",
                e.offer
                  ? m.jsxs("p", {
                      className: "flex items-center justify-center",
                      children: [
                        m.jsx("p", {
                          className: "line-through mx-1",
                          children: e.regularPrice.toLocaleString("en-US"),
                        }),
                        m.jsx("p", {
                          children: e.discountPrice.toLocaleString("en-US"),
                        }),
                      ],
                    })
                  : e.regularPrice.toLocaleString("en-US"),
                m.jsx("p", {
                  className: "m-1",
                  children: e.type === "rent" && "/ month",
                }),
              ],
            }),
            m.jsxs("div", {
              className: "flex gap-4 text-slate-700",
              children: [
                m.jsx("div", {
                  className: "font-bold text-xs",
                  children:
                    e.bedrooms > 1 ? `${e.bedrooms} Beds` : `${e.bedrooms} Bed`,
                }),
                m.jsx("div", {
                  className: "font-bold text-xs",
                  children:
                    e.bathrooms > 1
                      ? `${e.bathrooms} Baths`
                      : `${e.bathrooms} Bath`,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const wx = () => {
  const [e, t] = C.useState([]),
    [n, r] = C.useState([]),
    [i, s] = C.useState([]);
  return (
    console.log(e),
    Hi.use([vg]),
    C.useEffect(() => {
      const o = async () => {
          try {
            const c = await (
              await fetch("/api/listing/get?offer=true&limit=3")
            ).json();
            t(c), l();
          } catch (u) {
            console.log(u);
          }
        },
        l = async () => {
          try {
            const c = await (
              await fetch("/api/listing/get?type=rent&limit=3")
            ).json();
            s(c), a();
          } catch (u) {
            console.log(u);
          }
        },
        a = async () => {
          try {
            const c = await (
              await fetch("/api/listing/get?type=sale&limit=3")
            ).json();
            r(c);
          } catch (u) {
            console.log(u);
          }
        };
      o();
    }, []),
    m.jsxs("div", {
      children: [
        m.jsxs("div", {
          className: "flex flex-col gap-6 px-3 p-28 max-w-6xl mx-auto",
          children: [
            m.jsxs("h1", {
              className: "text-slate-700 font-bold text-3xl lg:text-6xl",
              children: [
                "Find your ",
                m.jsx("span", {
                  className: "text-slate-500",
                  children: "Perfect",
                }),
                m.jsx("br", {}),
                "home with comfort",
              ],
            }),
            m.jsxs("div", {
              className: "text-gray-400 text-xs sm:text-sm",
              children: [
                "With Utkarsh Estates, finding your dream home is swift, effortless, and enjoyable.",
                m.jsx("br", {}),
                "Discover a diverse array of properties tailored to your needs.",
              ],
            }),
            m.jsx(ye, {
              to: "/search",
              className:
                "text-xs sm:text-sm text-blue-800 font-serif font-bold hover:underline hover:text-blue-600",
              children: "Let's get you a home...",
            }),
          ],
        }),
        m.jsx(bc, {
          navigation: !0,
          children:
            e &&
            e.length > 0 &&
            e.map((o) =>
              m.jsx(Pc, {
                children: m.jsx(
                  "div",
                  {
                    style: {
                      background: `url(${o.imageUrls[0]}) center no-repeat`,
                      backgroundSize: "cover",
                    },
                    className: "h-[500px]",
                  },
                  o._id
                ),
              })
            ),
        }),
        m.jsx("div", {
          className: "flex items-center",
          children: m.jsxs("div", {
            className: "max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10",
            children: [
              e &&
                e.length > 0 &&
                m.jsxs("div", {
                  className: "",
                  children: [
                    m.jsxs("div", {
                      className: "my-3",
                      children: [
                        m.jsx("h2", {
                          className: "text-2xl font-semibold text-slate-600",
                          children: "Recent Offers",
                        }),
                        m.jsx(ye, {
                          to: "/search?offer=true",
                          className:
                            "text-sm text-blue-800 hover:underline hover:text-blue-600",
                          children: "Show more offers",
                        }),
                      ],
                    }),
                    m.jsx("div", {
                      className: "flex flex-wrap gap-4",
                      children: e.map((o) => m.jsx(Us, { listing: o }, o._id)),
                    }),
                  ],
                }),
              i &&
                i.length > 0 &&
                m.jsxs("div", {
                  className: "",
                  children: [
                    m.jsxs("div", {
                      className: "my-3",
                      children: [
                        m.jsx("h2", {
                          className: "text-2xl font-semibold text-slate-600",
                          children: "Properties for Rent",
                        }),
                        m.jsx(ye, {
                          to: "/search?type=rent",
                          className:
                            "text-sm text-blue-800 hover:underline hover:text-blue-600",
                          children: "Show more properties for Rent",
                        }),
                      ],
                    }),
                    m.jsx("div", {
                      className: "flex flex-wrap gap-4",
                      children: i.map((o) => m.jsx(Us, { listing: o }, o._id)),
                    }),
                  ],
                }),
              n &&
                n.length > 0 &&
                m.jsxs("div", {
                  className: "",
                  children: [
                    m.jsxs("div", {
                      className: "my-3",
                      children: [
                        m.jsx("h2", {
                          className: "text-2xl font-semibold text-slate-600",
                          children: "Properties for Sale",
                        }),
                        m.jsx(ye, {
                          to: "/search?type=sale",
                          className:
                            "text-sm text-blue-800 hover:underline hover:text-blue-600",
                          children: "Show more Properties for Sale",
                        }),
                      ],
                    }),
                    m.jsx("div", {
                      className: "flex flex-wrap gap-4",
                      children: n.map((o) => m.jsx(Us, { listing: o }, o._id)),
                    }),
                  ],
                }),
            ],
          }),
        }),
      ],
    })
  );
};
var _g = { exports: {} },
  Sg = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wi = C;
function _x(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Sx = typeof Object.is == "function" ? Object.is : _x,
  xx = Wi.useSyncExternalStore,
  Ex = Wi.useRef,
  Tx = Wi.useEffect,
  Cx = Wi.useMemo,
  bx = Wi.useDebugValue;
Sg.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var s = Ex(null);
  if (s.current === null) {
    var o = { hasValue: !1, value: null };
    s.current = o;
  } else o = s.current;
  s = Cx(
    function () {
      function a(v) {
        if (!u) {
          if (((u = !0), (c = v), (v = r(v)), i !== void 0 && o.hasValue)) {
            var y = o.value;
            if (i(y, v)) return (d = y);
          }
          return (d = v);
        }
        if (((y = d), Sx(c, v))) return y;
        var _ = r(v);
        return i !== void 0 && i(y, _) ? y : ((c = v), (d = _));
      }
      var u = !1,
        c,
        d,
        f = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        f === null
          ? void 0
          : function () {
              return a(f());
            },
      ];
    },
    [t, n, r, i]
  );
  var l = xx(e, s[0], s[1]);
  return (
    Tx(
      function () {
        (o.hasValue = !0), (o.value = l);
      },
      [l]
    ),
    bx(l),
    l
  );
};
_g.exports = Sg;
var Px = _g.exports,
  je = "default" in ul ? $ : ul,
  jf = Symbol.for("react-redux-context"),
  Df = typeof globalThis < "u" ? globalThis : {};
function kx() {
  if (!je.createContext) return {};
  const e = Df[jf] ?? (Df[jf] = new Map());
  let t = e.get(je.createContext);
  return t || ((t = je.createContext(null)), e.set(je.createContext, t)), t;
}
var gn = kx(),
  Ix = () => {
    throw new Error("uSES not initialized!");
  };
function kc(e = gn) {
  return function () {
    return je.useContext(e);
  };
}
var xg = kc(),
  Eg = Ix,
  Nx = (e) => {
    Eg = e;
  },
  Ox = (e, t) => e === t;
function Rx(e = gn) {
  const t = e === gn ? xg : kc(e),
    n = (r, i = {}) => {
      const { equalityFn: s = Ox, devModeChecks: o = {} } =
          typeof i == "function" ? { equalityFn: i } : i,
        {
          store: l,
          subscription: a,
          getServerState: u,
          stabilityCheck: c,
          identityFunctionCheck: d,
        } = t();
      je.useRef(!0);
      const f = je.useCallback(
          {
            [r.name](y) {
              return r(y);
            },
          }[r.name],
          [r, c, o.stabilityCheck]
        ),
        v = Eg(a.addNestedSub, l.getState, u || l.getState, f, s);
      return je.useDebugValue(v), v;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var En = Rx();
function Lx(e) {
  e();
}
function Ax() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      Lx(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var Uf = { notify() {}, get: () => [] };
function Mx(e, t) {
  let n,
    r = Uf,
    i = 0,
    s = !1;
  function o(_) {
    c();
    const S = r.subscribe(_);
    let p = !1;
    return () => {
      p || ((p = !0), S(), d());
    };
  }
  function l() {
    r.notify();
  }
  function a() {
    y.onStateChange && y.onStateChange();
  }
  function u() {
    return s;
  }
  function c() {
    i++, n || ((n = e.subscribe(a)), (r = Ax()));
  }
  function d() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = Uf));
  }
  function f() {
    s || ((s = !0), c());
  }
  function v() {
    s && ((s = !1), d());
  }
  const y = {
    addNestedSub: o,
    notifyNestedSubs: l,
    handleChangeWrapper: a,
    isSubscribed: u,
    trySubscribe: f,
    tryUnsubscribe: v,
    getListeners: () => r,
  };
  return y;
}
var jx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Dx = typeof navigator < "u" && navigator.product === "ReactNative",
  Ux = jx || Dx ? je.useLayoutEffect : je.useEffect;
function zx({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: s = "once",
}) {
  const o = je.useMemo(() => {
      const u = Mx(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: s,
      };
    }, [e, r, i, s]),
    l = je.useMemo(() => e.getState(), [e]);
  Ux(() => {
    const { subscription: u } = o;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      l !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [o, l]);
  const a = t || gn;
  return je.createElement(a.Provider, { value: o }, n);
}
var Fx = zx;
function Tg(e = gn) {
  const t = e === gn ? xg : kc(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var $x = Tg();
function Bx(e = gn) {
  const t = e === gn ? $x : Tg(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var Ic = Bx();
Nx(Px.useSyncExternalStoreWithSelector);
function ce(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Vx = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  zf = Vx,
  Xa = () => Math.random().toString(36).substring(7).split("").join("."),
  Hx = {
    INIT: `@@redux/INIT${Xa()}`,
    REPLACE: `@@redux/REPLACE${Xa()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Xa()}`,
  },
  Po = Hx;
function Nc(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Oc(e, t, n) {
  if (typeof e != "function") throw new Error(ce(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(ce(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(ce(1));
    return n(Oc)(e, t);
  }
  let r = e,
    i = t,
    s = new Map(),
    o = s,
    l = 0,
    a = !1;
  function u() {
    o === s &&
      ((o = new Map()),
      s.forEach((S, p) => {
        o.set(p, S);
      }));
  }
  function c() {
    if (a) throw new Error(ce(3));
    return i;
  }
  function d(S) {
    if (typeof S != "function") throw new Error(ce(4));
    if (a) throw new Error(ce(5));
    let p = !0;
    u();
    const g = l++;
    return (
      o.set(g, S),
      function () {
        if (p) {
          if (a) throw new Error(ce(6));
          (p = !1), u(), o.delete(g), (s = null);
        }
      }
    );
  }
  function f(S) {
    if (!Nc(S)) throw new Error(ce(7));
    if (typeof S.type > "u") throw new Error(ce(8));
    if (typeof S.type != "string") throw new Error(ce(17));
    if (a) throw new Error(ce(9));
    try {
      (a = !0), (i = r(i, S));
    } finally {
      a = !1;
    }
    return (
      (s = o).forEach((g) => {
        g();
      }),
      S
    );
  }
  function v(S) {
    if (typeof S != "function") throw new Error(ce(10));
    (r = S), f({ type: Po.REPLACE });
  }
  function y() {
    const S = d;
    return {
      subscribe(p) {
        if (typeof p != "object" || p === null) throw new Error(ce(11));
        function g() {
          const w = p;
          w.next && w.next(c());
        }
        return g(), { unsubscribe: S(g) };
      },
      [zf]() {
        return this;
      },
    };
  }
  return (
    f({ type: Po.INIT }),
    { dispatch: f, subscribe: d, getState: c, replaceReducer: v, [zf]: y }
  );
}
function Wx(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: Po.INIT }) > "u") throw new Error(ce(12));
    if (typeof n(void 0, { type: Po.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(ce(13));
  });
}
function Cg(e) {
  const t = Object.keys(e),
    n = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  const r = Object.keys(n);
  let i;
  try {
    Wx(n);
  } catch (s) {
    i = s;
  }
  return function (o = {}, l) {
    if (i) throw i;
    let a = !1;
    const u = {};
    for (let c = 0; c < r.length; c++) {
      const d = r[c],
        f = n[d],
        v = o[d],
        y = f(v, l);
      if (typeof y > "u") throw (l && l.type, new Error(ce(14)));
      (u[d] = y), (a = a || y !== v);
    }
    return (a = a || r.length !== Object.keys(o).length), a ? u : o;
  };
}
function ko(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function Gx(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let s = () => {
      throw new Error(ce(15));
    };
    const o = { getState: i.getState, dispatch: (a, ...u) => s(a, ...u) },
      l = e.map((a) => a(o));
    return (s = ko(...l)(i.dispatch)), { ...i, dispatch: s };
  };
}
function qx(e) {
  return Nc(e) && "type" in e && typeof e.type == "string";
}
var bg = Symbol.for("immer-nothing"),
  Ff = Symbol.for("immer-draftable"),
  Fe = Symbol.for("immer-state");
function nt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Nr = Object.getPrototypeOf;
function vn(e) {
  return !!e && !!e[Fe];
}
function jt(e) {
  var t;
  return e
    ? Pg(e) ||
        Array.isArray(e) ||
        !!e[Ff] ||
        !!((t = e.constructor) != null && t[Ff]) ||
        sa(e) ||
        oa(e)
    : !1;
}
var Kx = Object.prototype.constructor.toString();
function Pg(e) {
  if (!e || typeof e != "object") return !1;
  const t = Nr(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === Kx;
}
function Io(e, t) {
  ia(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function ia(e) {
  const t = e[Fe];
  return t ? t.type_ : Array.isArray(e) ? 1 : sa(e) ? 2 : oa(e) ? 3 : 0;
}
function uu(e, t) {
  return ia(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function kg(e, t, n) {
  const r = ia(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Xx(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function sa(e) {
  return e instanceof Map;
}
function oa(e) {
  return e instanceof Set;
}
function In(e) {
  return e.copy_ || e.base_;
}
function cu(e, t) {
  if (sa(e)) return new Map(e);
  if (oa(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = Pg(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Fe];
    let i = Reflect.ownKeys(r);
    for (let s = 0; s < i.length; s++) {
      const o = i[s],
        l = r[o];
      l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
        (l.get || l.set) &&
          (r[o] = {
            configurable: !0,
            writable: !0,
            enumerable: l.enumerable,
            value: e[o],
          });
    }
    return Object.create(Nr(e), r);
  } else {
    const r = Nr(e);
    if (r !== null && n) return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function Rc(e, t = !1) {
  return (
    aa(e) ||
      vn(e) ||
      !jt(e) ||
      (ia(e) > 1 && (e.set = e.add = e.clear = e.delete = Yx),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => Rc(r, !0))),
    e
  );
}
function Yx() {
  nt(2);
}
function aa(e) {
  return Object.isFrozen(e);
}
var Qx = {};
function Wn(e) {
  const t = Qx[e];
  return t || nt(0, e), t;
}
var Ai;
function Ig() {
  return Ai;
}
function Jx(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function $f(e, t) {
  t &&
    (Wn("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function du(e) {
  fu(e), e.drafts_.forEach(Zx), (e.drafts_ = null);
}
function fu(e) {
  e === Ai && (Ai = e.parent_);
}
function Bf(e) {
  return (Ai = Jx(Ai, e));
}
function Zx(e) {
  const t = e[Fe];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Vf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Fe].modified_ && (du(t), nt(4)),
        jt(e) && ((e = No(t, e)), t.parent_ || Oo(t, e)),
        t.patches_ &&
          Wn("Patches").generateReplacementPatches_(
            n[Fe].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = No(t, n, [])),
    du(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== bg ? e : void 0
  );
}
function No(e, t, n) {
  if (aa(t)) return t;
  const r = t[Fe];
  if (!r) return Io(t, (i, s) => Hf(e, r, t, i, s, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Oo(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let s = i,
      o = !1;
    r.type_ === 3 && ((s = new Set(i)), i.clear(), (o = !0)),
      Io(s, (l, a) => Hf(e, r, i, l, a, n, o)),
      Oo(e, i, !1),
      n &&
        e.patches_ &&
        Wn("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function Hf(e, t, n, r, i, s, o) {
  if (vn(i)) {
    const l =
        s && t && t.type_ !== 3 && !uu(t.assigned_, r) ? s.concat(r) : void 0,
      a = No(e, i, l);
    if ((kg(n, r, a), vn(a))) e.canAutoFreeze_ = !1;
    else return;
  } else o && n.add(i);
  if (jt(i) && !aa(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    No(e, i),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        Oo(e, i);
  }
}
function Oo(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Rc(t, n);
}
function e1(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Ig(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = r,
    s = Lc;
  n && ((i = [r]), (s = Mi));
  const { revoke: o, proxy: l } = Proxy.revocable(i, s);
  return (r.draft_ = l), (r.revoke_ = o), l;
}
var Lc = {
    get(e, t) {
      if (t === Fe) return e;
      const n = In(e);
      if (!uu(n, t)) return t1(e, n, t);
      const r = n[t];
      return e.finalized_ || !jt(r)
        ? r
        : r === Ya(e.base_, t)
        ? (Qa(e), (e.copy_[t] = hu(r, e)))
        : r;
    },
    has(e, t) {
      return t in In(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(In(e));
    },
    set(e, t, n) {
      const r = Ng(In(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const i = Ya(In(e), t),
          s = i == null ? void 0 : i[Fe];
        if (s && s.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (Xx(n, i) && (n !== void 0 || uu(e.base_, t))) return !0;
        Qa(e), pu(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Ya(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Qa(e), pu(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = In(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      nt(11);
    },
    getPrototypeOf(e) {
      return Nr(e.base_);
    },
    setPrototypeOf() {
      nt(12);
    },
  },
  Mi = {};
Io(Lc, (e, t) => {
  Mi[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Mi.deleteProperty = function (e, t) {
  return Mi.set.call(this, e, t, void 0);
};
Mi.set = function (e, t, n) {
  return Lc.set.call(this, e[0], t, n, e[0]);
};
function Ya(e, t) {
  const n = e[Fe];
  return (n ? In(n) : e)[t];
}
function t1(e, t, n) {
  var i;
  const r = Ng(t, n);
  return r
    ? "value" in r
      ? r.value
      : (i = r.get) == null
      ? void 0
      : i.call(e.draft_)
    : void 0;
}
function Ng(e, t) {
  if (!(t in e)) return;
  let n = Nr(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Nr(n);
  }
}
function pu(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && pu(e.parent_));
}
function Qa(e) {
  e.copy_ || (e.copy_ = cu(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var n1 = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const s = n;
          n = t;
          const o = this;
          return function (a = s, ...u) {
            return o.produce(a, (c) => n.call(this, c, ...u));
          };
        }
        typeof n != "function" && nt(6),
          r !== void 0 && typeof r != "function" && nt(7);
        let i;
        if (jt(t)) {
          const s = Bf(this),
            o = hu(t, void 0);
          let l = !0;
          try {
            (i = n(o)), (l = !1);
          } finally {
            l ? du(s) : fu(s);
          }
          return $f(s, r), Vf(i, s);
        } else if (!t || typeof t != "object") {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === bg && (i = void 0),
            this.autoFreeze_ && Rc(i, !0),
            r)
          ) {
            const s = [],
              o = [];
            Wn("Patches").generateReplacementPatches_(t, i, s, o), r(s, o);
          }
          return i;
        } else nt(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (o, ...l) => this.produceWithPatches(o, (a) => t(a, ...l));
        let r, i;
        return [
          this.produce(t, n, (o, l) => {
            (r = o), (i = l);
          }),
          r,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    jt(e) || nt(8), vn(e) && (e = Og(e));
    const t = Bf(this),
      n = hu(e, void 0);
    return (n[Fe].isManual_ = !0), fu(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Fe];
    (!n || !n.isManual_) && nt(9);
    const { scope_: r } = n;
    return $f(r, t), Vf(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Wn("Patches").applyPatches_;
    return vn(e) ? r(e, t) : this.produce(e, (i) => r(i, t));
  }
};
function hu(e, t) {
  const n = sa(e)
    ? Wn("MapSet").proxyMap_(e, t)
    : oa(e)
    ? Wn("MapSet").proxySet_(e, t)
    : e1(e, t);
  return (t ? t.scope_ : Ig()).drafts_.push(n), n;
}
function Og(e) {
  return vn(e) || nt(10, e), Rg(e);
}
function Rg(e) {
  if (!jt(e) || aa(e)) return e;
  const t = e[Fe];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = cu(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = cu(e, !0);
  return (
    Io(n, (r, i) => {
      kg(n, r, Rg(i));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var $e = new n1(),
  Lg = $e.produce;
$e.produceWithPatches.bind($e);
$e.setAutoFreeze.bind($e);
$e.setUseStrictShallowCopy.bind($e);
$e.applyPatches.bind($e);
$e.createDraft.bind($e);
$e.finishDraft.bind($e);
function r1(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function i1(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function s1(
  e,
  t = "expected all items to be functions, instead received the following types: "
) {
  if (!e.every((n) => typeof n == "function")) {
    const n = e
      .map((r) =>
        typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
      )
      .join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Wf = (e) => (Array.isArray(e) ? e : [e]);
function o1(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    s1(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: "
    ),
    t
  );
}
function a1(e, t) {
  const n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var l1 = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  u1 = typeof WeakRef < "u" ? WeakRef : l1,
  c1 = 0,
  Gf = 1;
function _s() {
  return { s: c1, v: void 0, o: null, p: null };
}
function Ac(e, t = {}) {
  let n = _s();
  const { resultEqualityCheck: r } = t;
  let i,
    s = 0;
  function o() {
    var d;
    let l = n;
    const { length: a } = arguments;
    for (let f = 0, v = a; f < v; f++) {
      const y = arguments[f];
      if (typeof y == "function" || (typeof y == "object" && y !== null)) {
        let _ = l.o;
        _ === null && (l.o = _ = new WeakMap());
        const S = _.get(y);
        S === void 0 ? ((l = _s()), _.set(y, l)) : (l = S);
      } else {
        let _ = l.p;
        _ === null && (l.p = _ = new Map());
        const S = _.get(y);
        S === void 0 ? ((l = _s()), _.set(y, l)) : (l = S);
      }
    }
    const u = l;
    let c;
    if (l.s === Gf) c = l.v;
    else if (((c = e.apply(null, arguments)), s++, r)) {
      const f =
        ((d = i == null ? void 0 : i.deref) == null ? void 0 : d.call(i)) ?? i;
      f != null && r(f, c) && ((c = f), s !== 0 && s--),
        (i =
          (typeof c == "object" && c !== null) || typeof c == "function"
            ? new u1(c)
            : c);
    }
    return (u.s = Gf), (u.v = c), c;
  }
  return (
    (o.clearCache = () => {
      (n = _s()), o.resetResultsCount();
    }),
    (o.resultsCount = () => s),
    (o.resetResultsCount = () => {
      s = 0;
    }),
    o
  );
}
function Ag(e, ...t) {
  const n = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    r = (...i) => {
      let s = 0,
        o = 0,
        l,
        a = {},
        u = i.pop();
      typeof u == "object" && ((a = u), (u = i.pop())),
        r1(
          u,
          `createSelector expects an output function after the inputs, but received: [${typeof u}]`
        );
      const c = { ...n, ...a },
        {
          memoize: d,
          memoizeOptions: f = [],
          argsMemoize: v = Ac,
          argsMemoizeOptions: y = [],
          devModeChecks: _ = {},
        } = c,
        S = Wf(f),
        p = Wf(y),
        g = o1(i),
        h = d(function () {
          return s++, u.apply(null, arguments);
        }, ...S),
        w = v(function () {
          o++;
          const E = a1(g, arguments);
          return (l = h.apply(null, E)), l;
        }, ...p);
      return Object.assign(w, {
        resultFunc: u,
        memoizedResultFunc: h,
        dependencies: g,
        dependencyRecomputations: () => o,
        resetDependencyRecomputations: () => {
          o = 0;
        },
        lastResult: () => l,
        recomputations: () => s,
        resetRecomputations: () => {
          s = 0;
        },
        memoize: d,
        argsMemoize: v,
      });
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var d1 = Ag(Ac),
  f1 = Object.assign(
    (e, t = d1) => {
      i1(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      );
      const n = Object.keys(e),
        r = n.map((s) => e[s]);
      return t(r, (...s) => s.reduce((o, l, a) => ((o[n[a]] = l), o), {}));
    },
    { withTypes: () => f1 }
  );
function Mg(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (s) =>
      typeof s == "function" ? s(n, r, e) : i(s);
}
var p1 = Mg(),
  h1 = Mg,
  m1 = (...e) => {
    const t = Ag(...e),
      n = Object.assign(
        (...r) => {
          const i = t(...r),
            s = (o, ...l) => i(vn(o) ? Og(o) : o, ...l);
          return Object.assign(s, i), s;
        },
        { withTypes: () => n }
      );
    return n;
  };
m1(Ac);
var g1 =
  typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == "object"
            ? ko
            : ko.apply(null, arguments);
      };
function Or(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i) throw new Error(Re(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => qx(r) && r.type === e),
    n
  );
}
var jg = class ni extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ni.prototype);
  }
  static get [Symbol.species]() {
    return ni;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new ni(...t[0].concat(this))
      : new ni(...t.concat(this));
  }
};
function qf(e) {
  return jt(e) ? Lg(e, () => {}) : e;
}
function Kf(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i;
  }
  if (!n.insert) throw new Error(Re(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function v1(e) {
  return typeof e == "boolean";
}
var y1 = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: s = !0,
      } = t ?? {};
      let o = new jg();
      return n && (v1(n) ? o.push(p1) : o.push(h1(n.extraArgument))), o;
    },
  w1 = "RTK_autoBatch",
  Dg = (e) => (t) => {
    setTimeout(t, e);
  },
  _1 =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : Dg(10),
  S1 =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let i = !0,
        s = !1,
        o = !1;
      const l = new Set(),
        a =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? _1
            : e.type === "callback"
            ? e.queueNotification
            : Dg(e.timeout),
        u = () => {
          (o = !1), s && ((s = !1), l.forEach((c) => c()));
        };
      return Object.assign({}, r, {
        subscribe(c) {
          const d = () => i && c(),
            f = r.subscribe(d);
          return (
            l.add(c),
            () => {
              f(), l.delete(c);
            }
          );
        },
        dispatch(c) {
          var d;
          try {
            return (
              (i = !((d = c == null ? void 0 : c.meta) != null && d[w1])),
              (s = !i),
              s && (o || ((o = !0), a(u))),
              r.dispatch(c)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  x1 = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let i = new jg(e);
      return r && i.push(S1(typeof r == "object" ? r : void 0)), i;
    },
  E1 = !0;
function T1(e) {
  const t = y1(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: s = void 0,
      enhancers: o = void 0,
    } = e || {};
  let l;
  if (typeof n == "function") l = n;
  else if (Nc(n)) l = Cg(n);
  else throw new Error(Re(1));
  let a;
  typeof r == "function" ? (a = r(t)) : (a = t());
  let u = ko;
  i && (u = g1({ trace: !E1, ...(typeof i == "object" && i) }));
  const c = Gx(...a),
    d = x1(c);
  let f = typeof o == "function" ? o(d) : d();
  const v = u(...f);
  return Oc(l, s, v);
}
function Ug(e) {
  const t = {},
    n = [];
  let r;
  const i = {
    addCase(s, o) {
      const l = typeof s == "string" ? s : s.type;
      if (!l) throw new Error(Re(28));
      if (l in t) throw new Error(Re(29));
      return (t[l] = o), i;
    },
    addMatcher(s, o) {
      return n.push({ matcher: s, reducer: o }), i;
    },
    addDefaultCase(s) {
      return (r = s), i;
    },
  };
  return e(i), [t, n, r];
}
function C1(e) {
  return typeof e == "function";
}
function b1(e, t) {
  let [n, r, i] = Ug(t),
    s;
  if (C1(e)) s = () => qf(e());
  else {
    const l = qf(e);
    s = () => l;
  }
  function o(l = s(), a) {
    let u = [
      n[a.type],
      ...r.filter(({ matcher: c }) => c(a)).map(({ reducer: c }) => c),
    ];
    return (
      u.filter((c) => !!c).length === 0 && (u = [i]),
      u.reduce((c, d) => {
        if (d)
          if (vn(c)) {
            const v = d(c, a);
            return v === void 0 ? c : v;
          } else {
            if (jt(c)) return Lg(c, (f) => d(f, a));
            {
              const f = d(c, a);
              if (f === void 0) {
                if (c === null) return c;
                throw new Error(Re(9));
              }
              return f;
            }
          }
        return c;
      }, l)
    );
  }
  return (o.getInitialState = s), o;
}
var P1 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  k1 = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += P1[(Math.random() * 64) | 0];
    return t;
  },
  I1 = Symbol.for("rtk-slice-createasyncthunk");
function N1(e, t) {
  return `${e}/${t}`;
}
function O1({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[I1];
  return function (i) {
    const { name: s, reducerPath: o = s } = i;
    if (!s) throw new Error(Re(11));
    typeof process < "u";
    const l =
        (typeof i.reducers == "function" ? i.reducers(A1()) : i.reducers) || {},
      a = Object.keys(l),
      u = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      c = {
        addCase(h, w) {
          const x = typeof h == "string" ? h : h.type;
          if (!x) throw new Error(Re(12));
          if (x in u.sliceCaseReducersByType) throw new Error(Re(13));
          return (u.sliceCaseReducersByType[x] = w), c;
        },
        addMatcher(h, w) {
          return u.sliceMatchers.push({ matcher: h, reducer: w }), c;
        },
        exposeAction(h, w) {
          return (u.actionCreators[h] = w), c;
        },
        exposeCaseReducer(h, w) {
          return (u.sliceCaseReducersByName[h] = w), c;
        },
      };
    a.forEach((h) => {
      const w = l[h],
        x = {
          reducerName: h,
          type: N1(s, h),
          createNotation: typeof i.reducers == "function",
        };
      j1(w) ? U1(x, w, c, t) : M1(x, w, c);
    });
    function d() {
      const [h = {}, w = [], x = void 0] =
          typeof i.extraReducers == "function"
            ? Ug(i.extraReducers)
            : [i.extraReducers],
        E = { ...h, ...u.sliceCaseReducersByType };
      return b1(i.initialState, (P) => {
        for (let b in E) P.addCase(b, E[b]);
        for (let b of u.sliceMatchers) P.addMatcher(b.matcher, b.reducer);
        for (let b of w) P.addMatcher(b.matcher, b.reducer);
        x && P.addDefaultCase(x);
      });
    }
    const f = (h) => h,
      v = new Map();
    let y;
    function _(h, w) {
      return y || (y = d()), y(h, w);
    }
    function S() {
      return y || (y = d()), y.getInitialState();
    }
    function p(h, w = !1) {
      function x(P) {
        let b = P[h];
        return typeof b > "u" && w && (b = S()), b;
      }
      function E(P = f) {
        const b = Kf(v, w, { insert: () => new WeakMap() });
        return Kf(b, P, {
          insert: () => {
            const k = {};
            for (const [T, N] of Object.entries(i.selectors ?? {}))
              k[T] = R1(N, P, S, w);
            return k;
          },
        });
      }
      return {
        reducerPath: h,
        getSelectors: E,
        get selectors() {
          return E(x);
        },
        selectSlice: x,
      };
    }
    const g = {
      name: s,
      reducer: _,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: S,
      ...p(o),
      injectInto(h, { reducerPath: w, ...x } = {}) {
        const E = w ?? o;
        return (
          h.inject({ reducerPath: E, reducer: _ }, x), { ...g, ...p(E, !0) }
        );
      },
    };
    return g;
  };
}
function R1(e, t, n, r) {
  function i(s, ...o) {
    let l = t(s);
    return typeof l > "u" && r && (l = n()), e(l, ...o);
  }
  return (i.unwrapped = e), i;
}
var L1 = O1();
function A1() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function M1({ type: e, reducerName: t, createNotation: n }, r, i) {
  let s, o;
  if ("reducer" in r) {
    if (n && !D1(r)) throw new Error(Re(17));
    (s = r.reducer), (o = r.prepare);
  } else s = r;
  i.addCase(e, s)
    .exposeCaseReducer(t, s)
    .exposeAction(t, o ? Or(e, o) : Or(e));
}
function j1(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function D1(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function U1({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(Re(18));
  const {
      payloadCreator: s,
      fulfilled: o,
      pending: l,
      rejected: a,
      settled: u,
      options: c,
    } = n,
    d = i(e, s, c);
  r.exposeAction(t, d),
    o && r.addCase(d.fulfilled, o),
    l && r.addCase(d.pending, l),
    a && r.addCase(d.rejected, a),
    u && r.addMatcher(d.settled, u),
    r.exposeCaseReducer(t, {
      fulfilled: o || Ss,
      pending: l || Ss,
      rejected: a || Ss,
      settled: u || Ss,
    });
}
function Ss() {}
var z1 = (e, t) => {
    if (typeof e != "function") throw new Error(Re(32));
  },
  Mc = "listenerMiddleware",
  F1 = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: s } = e;
    if (t) i = Or(t).match;
    else if (n) (t = n.type), (i = n.match);
    else if (r) i = r;
    else if (!i) throw new Error(Re(21));
    return z1(s), { predicate: i, type: t, effect: s };
  },
  $1 = Object.assign(
    (e) => {
      const { type: t, predicate: n, effect: r } = F1(e);
      return {
        id: k1(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(Re(22));
        },
      };
    },
    { withTypes: () => $1 }
  ),
  B1 = Object.assign(Or(`${Mc}/add`), { withTypes: () => B1 });
Or(`${Mc}/removeAll`);
var V1 = Object.assign(Or(`${Mc}/remove`), { withTypes: () => V1 });
function Re(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const H1 = { currentUser: null, error: null, loading: !1 },
  zg = L1({
    name: "user",
    initialState: H1,
    reducers: {
      signInStart: (e) => {
        e.loading = !0;
      },
      signInSuccess: (e, t) => {
        (e.currentUser = t.payload), (e.loading = !1), (e.error = null);
      },
      signInFailure: (e, t) => {
        (e.error = t.payload), (e.loading = !1);
      },
      updateUserStart: (e) => {
        e.loading = !0;
      },
      updateUserSuccess: (e, t) => {
        (e.currentUser = t.payload), (e.loading = !1), (e.error = null);
      },
      updateUserFailure: (e, t) => {
        (e.error = t.payload), (e.loading = !1);
      },
      deleteUserStart: (e) => {
        e.loading = !0;
      },
      deleteUserSuccess: (e) => {
        (e.currentUser = null), (e.loading = !1), (e.error = null);
      },
      deleteUserFailure: (e, t) => {
        (e.error = t.payload), (e.loading = !1);
      },
      signOutUserStart: (e) => {
        e.loading = !0;
      },
      signOutUserSuccess: (e) => {
        (e.currentUser = null), (e.loading = !1), (e.error = null);
      },
      signOutUserFailure: (e, t) => {
        (e.error = t.payload), (e.loading = !1);
      },
    },
  }),
  {
    signInStart: W1,
    signInSuccess: Fg,
    signInFailure: Xf,
    updateUserStart: G1,
    updateUserSuccess: q1,
    updateUserFailure: Yf,
    deleteUserStart: K1,
    deleteUserSuccess: X1,
    deleteUserFailure: Qf,
    signOutUserStart: Y1,
    signOutUserSuccess: Q1,
    signOutUserFailure: Jf,
  } = zg.actions,
  J1 = zg.reducer;
var Zf = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $g = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.charCodeAt(r);
      i < 128
        ? (t[n++] = i)
        : i < 2048
        ? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < e.length &&
          (e.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
          (t[n++] = (i >> 18) | 240),
          (t[n++] = ((i >> 12) & 63) | 128),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128))
        : ((t[n++] = (i >> 12) | 224),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128));
    }
    return t;
  },
  Z1 = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const i = e[n++];
      if (i < 128) t[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = e[n++];
        t[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = e[n++],
          o = e[n++],
          l = e[n++],
          a =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (l & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (a >> 10))),
          (t[r++] = String.fromCharCode(56320 + (a & 1023)));
      } else {
        const s = e[n++],
          o = e[n++];
        t[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
        );
      }
    }
    return t.join("");
  },
  Bg = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < e.length; i += 3) {
        const s = e[i],
          o = i + 1 < e.length,
          l = o ? e[i + 1] : 0,
          a = i + 2 < e.length,
          u = a ? e[i + 2] : 0,
          c = s >> 2,
          d = ((s & 3) << 4) | (l >> 4);
        let f = ((l & 15) << 2) | (u >> 6),
          v = u & 63;
        a || ((v = 64), o || (f = 64)), r.push(n[c], n[d], n[f], n[v]);
      }
      return r.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray($g(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : Z1(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < e.length; ) {
        const s = n[e.charAt(i++)],
          l = i < e.length ? n[e.charAt(i)] : 0;
        ++i;
        const u = i < e.length ? n[e.charAt(i)] : 64;
        ++i;
        const d = i < e.length ? n[e.charAt(i)] : 64;
        if ((++i, s == null || l == null || u == null || d == null))
          throw new eE();
        const f = (s << 2) | (l >> 4);
        if ((r.push(f), u !== 64)) {
          const v = ((l << 4) & 240) | (u >> 2);
          if ((r.push(v), d !== 64)) {
            const y = ((u << 6) & 192) | d;
            r.push(y);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class eE extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const tE = function (e) {
    const t = $g(e);
    return Bg.encodeByteArray(t, !0);
  },
  Ro = function (e) {
    return tE(e).replace(/\./g, "");
  },
  Vg = function (e) {
    try {
      return Bg.decodeString(e, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nE() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const rE = () => nE().__FIREBASE_DEFAULTS__,
  iE = () => {
    if (typeof process > "u" || typeof Zf > "u") return;
    const e = Zf.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  sE = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && Vg(e[1]);
    return t && JSON.parse(t);
  },
  jc = () => {
    try {
      return rE() || iE() || sE();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  Hg = (e) => {
    var t, n;
    return (n =
      (t = jc()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e];
  },
  oE = (e) => {
    const t = Hg(e);
    if (!t) return;
    const n = t.lastIndexOf(":");
    if (n <= 0 || n + 1 === t.length)
      throw new Error(`Invalid host ${t} with no separate hostname and port!`);
    const r = parseInt(t.substring(n + 1), 10);
    return t[0] === "[" ? [t.substring(1, n - 1), r] : [t.substring(0, n), r];
  },
  Wg = () => {
    var e;
    return (e = jc()) === null || e === void 0 ? void 0 : e.config;
  },
  Gg = (e) => {
    var t;
    return (t = jc()) === null || t === void 0 ? void 0 : t[`_${e}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aE {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function lE(e, t) {
  if (e.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  const n = { alg: "none", type: "JWT" },
    r = t || "demo-project",
    i = e.iat || 0,
    s = e.sub || e.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign(
    {
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: i,
      exp: i + 3600,
      auth_time: i,
      sub: s,
      user_id: s,
      firebase: { sign_in_provider: "custom", identities: {} },
    },
    e
  );
  return [Ro(JSON.stringify(n)), Ro(JSON.stringify(o)), ""].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _e() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function uE() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())
  );
}
function cE() {
  const e =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function dE() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function fE() {
  const e = _e();
  return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function pE() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function hE() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          t(
            ((s = i.error) === null || s === void 0 ? void 0 : s.message) || ""
          );
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mE = "FirebaseError";
class Ft extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = mE),
      Object.setPrototypeOf(this, Ft.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, Gi.prototype.create);
  }
}
class Gi {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${t}`,
      s = this.errors[t],
      o = s ? gE(s, r) : "Error",
      l = `${this.serviceName}: ${o} (${i}).`;
    return new Ft(i, l, r);
  }
}
function gE(e, t) {
  return e.replace(vE, (n, r) => {
    const i = t[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const vE = /\{\$([^}]+)}/g;
function yE(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function Lo(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = e[i],
      o = t[i];
    if (ep(s) && ep(o)) {
      if (!Lo(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function ep(e) {
  return e !== null && typeof e == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qi(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((i) => {
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return t.length ? "&" + t.join("&") : "";
}
function wE(e, t) {
  const n = new _E(e, t);
  return n.subscribe.bind(n);
}
class _E {
  constructor(t, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          t(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(t) {
    this.forEachObserver((n) => {
      n.next(t);
    });
  }
  error(t) {
    this.forEachObserver((n) => {
      n.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, n, r) {
    let i;
    if (t === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    SE(t, ["next", "error", "complete"])
      ? (i = t)
      : (i = { next: t, error: n, complete: r }),
      i.next === void 0 && (i.next = Ja),
      i.error === void 0 && (i.error = Ja),
      i.complete === void 0 && (i.complete = Ja);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      s
    );
  }
  unsubscribeOne(t) {
    this.observers === void 0 ||
      this.observers[t] === void 0 ||
      (delete this.observers[t],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, t);
  }
  sendOne(t, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          n(this.observers[t]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(t) {
    this.finalized ||
      ((this.finalized = !0),
      t !== void 0 && (this.finalError = t),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function SE(e, t) {
  if (typeof e != "object" || e === null) return !1;
  for (const n of t) if (n in e && typeof e[n] == "function") return !0;
  return !1;
}
function Ja() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vt(e) {
  return e && e._delegate ? e._delegate : e;
}
class Gn {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Nn = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xE {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new aE();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier
      ),
      i =
        (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (TE(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Nn });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(t = Nn) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = Nn) {
    return this.instances.has(t);
  }
  getOptions(t = Nn) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(s);
      r === l && o.resolve(i);
    }
    return i;
  }
  onInit(t, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    s.add(t), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && t(o, i),
      () => {
        s.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: EE(t),
        options: n,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = Nn) {
    return this.component ? (this.component.multipleInstances ? t : Nn) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function EE(e) {
  return e === Nn ? void 0 : e;
}
function TE(e) {
  return e.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class CE {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new xE(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var H;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(H || (H = {}));
const bE = {
    debug: H.DEBUG,
    verbose: H.VERBOSE,
    info: H.INFO,
    warn: H.WARN,
    error: H.ERROR,
    silent: H.SILENT,
  },
  PE = H.INFO,
  kE = {
    [H.DEBUG]: "log",
    [H.VERBOSE]: "log",
    [H.INFO]: "info",
    [H.WARN]: "warn",
    [H.ERROR]: "error",
  },
  IE = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      i = kE[t];
    if (i) console[i](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class qg {
  constructor(t) {
    (this.name = t),
      (this._logLevel = PE),
      (this._logHandler = IE),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in H))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? bE[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, H.DEBUG, ...t),
      this._logHandler(this, H.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, H.VERBOSE, ...t),
      this._logHandler(this, H.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, H.INFO, ...t),
      this._logHandler(this, H.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, H.WARN, ...t),
      this._logHandler(this, H.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, H.ERROR, ...t),
      this._logHandler(this, H.ERROR, ...t);
  }
}
const NE = (e, t) => t.some((n) => e instanceof n);
let tp, np;
function OE() {
  return (
    tp ||
    (tp = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function RE() {
  return (
    np ||
    (np = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Kg = new WeakMap(),
  mu = new WeakMap(),
  Xg = new WeakMap(),
  Za = new WeakMap(),
  Dc = new WeakMap();
function LE(e) {
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("success", s), e.removeEventListener("error", o);
      },
      s = () => {
        n(dn(e.result)), i();
      },
      o = () => {
        r(e.error), i();
      };
    e.addEventListener("success", s), e.addEventListener("error", o);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && Kg.set(n, e);
      })
      .catch(() => {}),
    Dc.set(t, e),
    t
  );
}
function AE(e) {
  if (mu.has(e)) return;
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("complete", s),
          e.removeEventListener("error", o),
          e.removeEventListener("abort", o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), i();
      };
    e.addEventListener("complete", s),
      e.addEventListener("error", o),
      e.addEventListener("abort", o);
  });
  mu.set(e, t);
}
let gu = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return mu.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || Xg.get(e);
      if (t === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return dn(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in e;
  },
};
function ME(e) {
  gu = e(gu);
}
function jE(e) {
  return e === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(el(this), t, ...n);
        return Xg.set(r, t.sort ? t.sort() : [t]), dn(r);
      }
    : RE().includes(e)
    ? function (...t) {
        return e.apply(el(this), t), dn(Kg.get(this));
      }
    : function (...t) {
        return dn(e.apply(el(this), t));
      };
}
function DE(e) {
  return typeof e == "function"
    ? jE(e)
    : (e instanceof IDBTransaction && AE(e),
      NE(e, OE()) ? new Proxy(e, gu) : e);
}
function dn(e) {
  if (e instanceof IDBRequest) return LE(e);
  if (Za.has(e)) return Za.get(e);
  const t = DE(e);
  return t !== e && (Za.set(e, t), Dc.set(t, e)), t;
}
const el = (e) => Dc.get(e);
function UE(e, t, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(e, t),
    l = dn(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (a) => {
        r(dn(o.result), a.oldVersion, a.newVersion, dn(o.transaction), a);
      }),
    n && o.addEventListener("blocked", (a) => n(a.oldVersion, a.newVersion, a)),
    l
      .then((a) => {
        s && a.addEventListener("close", () => s()),
          i &&
            a.addEventListener("versionchange", (u) =>
              i(u.oldVersion, u.newVersion, u)
            );
      })
      .catch(() => {}),
    l
  );
}
const zE = ["get", "getKey", "getAll", "getAllKeys", "count"],
  FE = ["put", "add", "delete", "clear"],
  tl = new Map();
function rp(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (tl.get(t)) return tl.get(t);
  const n = t.replace(/FromIndex$/, ""),
    r = t !== n,
    i = FE.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || zE.includes(n))
  )
    return;
  const s = async function (o, ...l) {
    const a = this.transaction(o, i ? "readwrite" : "readonly");
    let u = a.store;
    return (
      r && (u = u.index(l.shift())),
      (await Promise.all([u[n](...l), i && a.done]))[0]
    );
  };
  return tl.set(t, s), s;
}
ME((e) => ({
  ...e,
  get: (t, n, r) => rp(t, n) || e.get(t, n, r),
  has: (t, n) => !!rp(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $E {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (BE(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function BE(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const vu = "@firebase/app",
  ip = "0.10.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qn = new qg("@firebase/app"),
  VE = "@firebase/app-compat",
  HE = "@firebase/analytics-compat",
  WE = "@firebase/analytics",
  GE = "@firebase/app-check-compat",
  qE = "@firebase/app-check",
  KE = "@firebase/auth",
  XE = "@firebase/auth-compat",
  YE = "@firebase/database",
  QE = "@firebase/database-compat",
  JE = "@firebase/functions",
  ZE = "@firebase/functions-compat",
  eT = "@firebase/installations",
  tT = "@firebase/installations-compat",
  nT = "@firebase/messaging",
  rT = "@firebase/messaging-compat",
  iT = "@firebase/performance",
  sT = "@firebase/performance-compat",
  oT = "@firebase/remote-config",
  aT = "@firebase/remote-config-compat",
  lT = "@firebase/storage",
  uT = "@firebase/storage-compat",
  cT = "@firebase/firestore",
  dT = "@firebase/vertexai-preview",
  fT = "@firebase/firestore-compat",
  pT = "firebase",
  hT = "10.12.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yu = "[DEFAULT]",
  mT = {
    [vu]: "fire-core",
    [VE]: "fire-core-compat",
    [WE]: "fire-analytics",
    [HE]: "fire-analytics-compat",
    [qE]: "fire-app-check",
    [GE]: "fire-app-check-compat",
    [KE]: "fire-auth",
    [XE]: "fire-auth-compat",
    [YE]: "fire-rtdb",
    [QE]: "fire-rtdb-compat",
    [JE]: "fire-fn",
    [ZE]: "fire-fn-compat",
    [eT]: "fire-iid",
    [tT]: "fire-iid-compat",
    [nT]: "fire-fcm",
    [rT]: "fire-fcm-compat",
    [iT]: "fire-perf",
    [sT]: "fire-perf-compat",
    [oT]: "fire-rc",
    [aT]: "fire-rc-compat",
    [lT]: "fire-gcs",
    [uT]: "fire-gcs-compat",
    [cT]: "fire-fst",
    [fT]: "fire-fst-compat",
    [dT]: "fire-vertex",
    "fire-js": "fire-js",
    [pT]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ao = new Map(),
  gT = new Map(),
  wu = new Map();
function sp(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    qn.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    );
  }
}
function Rr(e) {
  const t = e.name;
  if (wu.has(t))
    return (
      qn.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  wu.set(t, e);
  for (const n of Ao.values()) sp(n, e);
  for (const n of gT.values()) sp(n, e);
  return !0;
}
function Uc(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
function bt(e) {
  return e.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vT = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  fn = new Gi("app", "Firebase", vT);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yT {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Gn("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw fn.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fr = hT;
function Yg(e, t = {}) {
  let n = e;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: yu, automaticDataCollectionEnabled: !1 }, t),
    i = r.name;
  if (typeof i != "string" || !i)
    throw fn.create("bad-app-name", { appName: String(i) });
  if ((n || (n = Wg()), !n)) throw fn.create("no-options");
  const s = Ao.get(i);
  if (s) {
    if (Lo(n, s.options) && Lo(r, s.config)) return s;
    throw fn.create("duplicate-app", { appName: i });
  }
  const o = new CE(i);
  for (const a of wu.values()) o.addComponent(a);
  const l = new yT(n, r, o);
  return Ao.set(i, l), l;
}
function Qg(e = yu) {
  const t = Ao.get(e);
  if (!t && e === yu && Wg()) return Yg();
  if (!t) throw fn.create("no-app", { appName: e });
  return t;
}
function pn(e, t, n) {
  var r;
  let i = (r = mT[e]) !== null && r !== void 0 ? r : e;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = t.match(/\s|\//);
  if (s || o) {
    const l = [`Unable to register library "${i}" with version "${t}":`];
    s &&
      l.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      s && o && l.push("and"),
      o &&
        l.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      qn.warn(l.join(" "));
    return;
  }
  Rr(new Gn(`${i}-version`, () => ({ library: i, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const wT = "firebase-heartbeat-database",
  _T = 1,
  ji = "firebase-heartbeat-store";
let nl = null;
function Jg() {
  return (
    nl ||
      (nl = UE(wT, _T, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(ji);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((e) => {
        throw fn.create("idb-open", { originalErrorMessage: e.message });
      })),
    nl
  );
}
async function ST(e) {
  try {
    const n = (await Jg()).transaction(ji),
      r = await n.objectStore(ji).get(Zg(e));
    return await n.done, r;
  } catch (t) {
    if (t instanceof Ft) qn.warn(t.message);
    else {
      const n = fn.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      qn.warn(n.message);
    }
  }
}
async function op(e, t) {
  try {
    const r = (await Jg()).transaction(ji, "readwrite");
    await r.objectStore(ji).put(t, Zg(e)), await r.done;
  } catch (n) {
    if (n instanceof Ft) qn.warn(n.message);
    else {
      const r = fn.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      qn.warn(r.message);
    }
  }
}
function Zg(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xT = 1024,
  ET = 30 * 24 * 60 * 60 * 1e3;
class TT {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new bT(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var t, n;
    const i = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      s = ap();
    if (
      !(
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)
      ) &&
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === s ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === s)
      )
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: s, agent: i }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((o) => {
            const l = new Date(o.date).valueOf();
            return Date.now() - l <= ET;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    var t;
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      ((t = this._heartbeatsCache) === null || t === void 0
        ? void 0
        : t.heartbeats) == null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const n = ap(),
      { heartbeatsToSend: r, unsentEntries: i } = CT(
        this._heartbeatsCache.heartbeats
      ),
      s = Ro(JSON.stringify({ version: 2, heartbeats: r }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = n),
      i.length > 0
        ? ((this._heartbeatsCache.heartbeats = i),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      s
    );
  }
}
function ap() {
  return new Date().toISOString().substring(0, 10);
}
function CT(e, t = xT) {
  const n = [];
  let r = e.slice();
  for (const i of e) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), lp(n) > t)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), lp(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class bT {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return pE()
      ? hE()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await ST(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return op(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return op(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function lp(e) {
  return Ro(JSON.stringify({ version: 2, heartbeats: e })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function PT(e) {
  Rr(new Gn("platform-logger", (t) => new $E(t), "PRIVATE")),
    Rr(new Gn("heartbeat", (t) => new TT(t), "PRIVATE")),
    pn(vu, ip, e),
    pn(vu, ip, "esm2017"),
    pn("fire-js", "");
}
PT("");
function zc(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function ev() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const kT = ev,
  tv = new Gi("auth", "Firebase", ev());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Mo = new qg("@firebase/auth");
function IT(e, ...t) {
  Mo.logLevel <= H.WARN && Mo.warn(`Auth (${Fr}): ${e}`, ...t);
}
function zs(e, ...t) {
  Mo.logLevel <= H.ERROR && Mo.error(`Auth (${Fr}): ${e}`, ...t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function mt(e, ...t) {
  throw $c(e, ...t);
}
function st(e, ...t) {
  return $c(e, ...t);
}
function Fc(e, t, n) {
  const r = Object.assign(Object.assign({}, kT()), { [t]: n });
  return new Gi("auth", "Firebase", r).create(t, { appName: e.name });
}
function Dn(e) {
  return Fc(
    e,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
  );
}
function NT(e, t, n) {
  const r = n;
  if (!(t instanceof r))
    throw (
      (r.name !== t.constructor.name && mt(e, "argument-error"),
      Fc(
        e,
        "argument-error",
        `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
      ))
    );
}
function $c(e, ...t) {
  if (typeof e != "string") {
    const n = t[0],
      r = [...t.slice(1)];
    return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
  }
  return tv.create(e, ...t);
}
function D(e, t, ...n) {
  if (!e) throw $c(t, ...n);
}
function Pt(e) {
  const t = "INTERNAL ASSERTION FAILED: " + e;
  throw (zs(t), new Error(t));
}
function Dt(e, t) {
  e || Pt(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _u() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.href)) ||
    ""
  );
}
function OT() {
  return up() === "http:" || up() === "https:";
}
function up() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function RT() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (OT() || cE() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function LT() {
  if (typeof navigator > "u") return null;
  const e = navigator;
  return (e.languages && e.languages[0]) || e.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ki {
  constructor(t, n) {
    (this.shortDelay = t),
      (this.longDelay = n),
      Dt(n > t, "Short delay should be less than long delay!"),
      (this.isMobile = uE() || dE());
  }
  get() {
    return RT()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Bc(e, t) {
  Dt(e.emulator, "Emulator should always be set here");
  const { url: n } = e.emulator;
  return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nv {
  static initialize(t, n, r) {
    (this.fetchImpl = t),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    Pt(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    Pt(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    Pt(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const AT = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const MT = new Ki(3e4, 6e4);
function Vc(e, t) {
  return e.tenantId && !t.tenantId
    ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
    : t;
}
async function $r(e, t, n, r, i = {}) {
  return rv(e, i, async () => {
    let s = {},
      o = {};
    r && (t === "GET" ? (o = r) : (s = { body: JSON.stringify(r) }));
    const l = qi(Object.assign({ key: e.config.apiKey }, o)).slice(1),
      a = await e._getAdditionalHeaders();
    return (
      (a["Content-Type"] = "application/json"),
      e.languageCode && (a["X-Firebase-Locale"] = e.languageCode),
      nv.fetch()(
        iv(e, e.config.apiHost, n, l),
        Object.assign(
          { method: t, headers: a, referrerPolicy: "no-referrer" },
          s
        )
      )
    );
  });
}
async function rv(e, t, n) {
  e._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, AT), t);
  try {
    const i = new DT(e),
      s = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw xs(e, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o)) return o;
    {
      const l = s.ok ? o.errorMessage : o.error.message,
        [a, u] = l.split(" : ");
      if (a === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw xs(e, "credential-already-in-use", o);
      if (a === "EMAIL_EXISTS") throw xs(e, "email-already-in-use", o);
      if (a === "USER_DISABLED") throw xs(e, "user-disabled", o);
      const c = r[a] || a.toLowerCase().replace(/[_\s]+/g, "-");
      if (u) throw Fc(e, c, u);
      mt(e, c);
    }
  } catch (i) {
    if (i instanceof Ft) throw i;
    mt(e, "network-request-failed", { message: String(i) });
  }
}
async function jT(e, t, n, r, i = {}) {
  const s = await $r(e, t, n, r, i);
  return (
    "mfaPendingCredential" in s &&
      mt(e, "multi-factor-auth-required", { _serverResponse: s }),
    s
  );
}
function iv(e, t, n, r) {
  const i = `${t}${n}?${r}`;
  return e.config.emulator ? Bc(e.config, i) : `${e.config.apiScheme}://${i}`;
}
class DT {
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(st(this.auth, "network-request-failed")),
          MT.get()
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function xs(e, t, n) {
  const r = { appName: e.name };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = st(e, t, r);
  return (i.customData._tokenResponse = n), i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function UT(e, t) {
  return $r(e, "POST", "/v1/accounts:delete", t);
}
async function sv(e, t) {
  return $r(e, "POST", "/v1/accounts:lookup", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pi(e) {
  if (e)
    try {
      const t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function zT(e, t = !1) {
  const n = vt(e),
    r = await n.getIdToken(t),
    i = Hc(r);
  D(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const s = typeof i.firebase == "object" ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: pi(rl(i.auth_time)),
    issuedAtTime: pi(rl(i.iat)),
    expirationTime: pi(rl(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
  };
}
function rl(e) {
  return Number(e) * 1e3;
}
function Hc(e) {
  const [t, n, r] = e.split(".");
  if (t === void 0 || n === void 0 || r === void 0)
    return zs("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = Vg(n);
    return i
      ? JSON.parse(i)
      : (zs("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return (
      zs(
        "Caught error parsing JWT payload as JSON",
        i == null ? void 0 : i.toString()
      ),
      null
    );
  }
}
function cp(e) {
  const t = Hc(e);
  return (
    D(t, "internal-error"),
    D(typeof t.exp < "u", "internal-error"),
    D(typeof t.iat < "u", "internal-error"),
    Number(t.exp) - Number(t.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Di(e, t, n = !1) {
  if (n) return t;
  try {
    return await t;
  } catch (r) {
    throw (
      (r instanceof Ft &&
        FT(r) &&
        e.auth.currentUser === e &&
        (await e.auth.signOut()),
      r)
    );
  }
}
function FT({ code: e }) {
  return e === "auth/user-disabled" || e === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $T {
  constructor(t) {
    (this.user = t),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(t) {
    var n;
    if (t) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      (t == null ? void 0 : t.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Su {
  constructor(t, n) {
    (this.createdAt = t), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = pi(this.lastLoginAt)),
      (this.creationTime = pi(this.createdAt));
  }
  _copy(t) {
    (this.createdAt = t.createdAt),
      (this.lastLoginAt = t.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function jo(e) {
  var t;
  const n = e.auth,
    r = await e.getIdToken(),
    i = await Di(e, sv(n, { idToken: r }));
  D(i == null ? void 0 : i.users.length, n, "internal-error");
  const s = i.users[0];
  e._notifyReloadListener(s);
  const o =
      !((t = s.providerUserInfo) === null || t === void 0) && t.length
        ? ov(s.providerUserInfo)
        : [],
    l = VT(e.providerData, o),
    a = e.isAnonymous,
    u = !(e.email && s.passwordHash) && !(l != null && l.length),
    c = a ? u : !1,
    d = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: l,
      metadata: new Su(s.createdAt, s.lastLoginAt),
      isAnonymous: c,
    };
  Object.assign(e, d);
}
async function BT(e) {
  const t = vt(e);
  await jo(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t);
}
function VT(e, t) {
  return [
    ...e.filter((r) => !t.some((i) => i.providerId === r.providerId)),
    ...t,
  ];
}
function ov(e) {
  return e.map((t) => {
    var { providerId: n } = t,
      r = zc(t, ["providerId"]);
    return {
      providerId: n,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function HT(e, t) {
  const n = await rv(e, {}, async () => {
    const r = qi({ grant_type: "refresh_token", refresh_token: t }).slice(1),
      { tokenApiHost: i, apiKey: s } = e.config,
      o = iv(e, i, "/v1/token", `key=${s}`),
      l = await e._getAdditionalHeaders();
    return (
      (l["Content-Type"] = "application/x-www-form-urlencoded"),
      nv.fetch()(o, { method: "POST", headers: l, body: r })
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
async function WT(e, t) {
  return $r(e, "POST", "/v2/accounts:revokeToken", Vc(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _r {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    D(t.idToken, "internal-error"),
      D(typeof t.idToken < "u", "internal-error"),
      D(typeof t.refreshToken < "u", "internal-error");
    const n =
      "expiresIn" in t && typeof t.expiresIn < "u"
        ? Number(t.expiresIn)
        : cp(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, n);
  }
  updateFromIdToken(t) {
    D(t.length !== 0, "internal-error");
    const n = cp(t);
    this.updateTokensAndExpiration(t, null, n);
  }
  async getToken(t, n = !1) {
    return !n && this.accessToken && !this.isExpired
      ? this.accessToken
      : (D(this.refreshToken, t, "user-token-expired"),
        this.refreshToken
          ? (await this.refresh(t, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, n) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await HT(t, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(t, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = t || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(t, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      o = new _r();
    return (
      r &&
        (D(typeof r == "string", "internal-error", { appName: t }),
        (o.refreshToken = r)),
      i &&
        (D(typeof i == "string", "internal-error", { appName: t }),
        (o.accessToken = i)),
      s &&
        (D(typeof s == "number", "internal-error", { appName: t }),
        (o.expirationTime = s)),
      o
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(t) {
    (this.accessToken = t.accessToken),
      (this.refreshToken = t.refreshToken),
      (this.expirationTime = t.expirationTime);
  }
  _clone() {
    return Object.assign(new _r(), this.toJSON());
  }
  _performRefresh() {
    return Pt("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Bt(e, t) {
  D(typeof e == "string" || typeof e > "u", "internal-error", { appName: t });
}
class kt {
  constructor(t) {
    var { uid: n, auth: r, stsTokenManager: i } = t,
      s = zc(t, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new $T(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = s.displayName || null),
      (this.email = s.email || null),
      (this.emailVerified = s.emailVerified || !1),
      (this.phoneNumber = s.phoneNumber || null),
      (this.photoURL = s.photoURL || null),
      (this.isAnonymous = s.isAnonymous || !1),
      (this.tenantId = s.tenantId || null),
      (this.providerData = s.providerData ? [...s.providerData] : []),
      (this.metadata = new Su(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const n = await Di(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      D(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(t) {
    return zT(this, t);
  }
  reload() {
    return BT(this);
  }
  _assign(t) {
    this !== t &&
      (D(this.uid === t.uid, this.auth, "internal-error"),
      (this.displayName = t.displayName),
      (this.photoURL = t.photoURL),
      (this.email = t.email),
      (this.emailVerified = t.emailVerified),
      (this.phoneNumber = t.phoneNumber),
      (this.isAnonymous = t.isAnonymous),
      (this.tenantId = t.tenantId),
      (this.providerData = t.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(t.metadata),
      this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const n = new kt(
      Object.assign(Object.assign({}, this), {
        auth: t,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(t) {
    D(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = t),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(t) {
    this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(t, n = !1) {
    let r = !1;
    t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (r = !0)),
      n && (await jo(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (bt(this.auth.app)) return Promise.reject(Dn(this.auth));
    const t = await this.getIdToken();
    return (
      await Di(this, UT(this.auth, { idToken: t })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((t) => Object.assign({}, t)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(t, n) {
    var r, i, s, o, l, a, u, c;
    const d = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      f = (i = n.email) !== null && i !== void 0 ? i : void 0,
      v = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0,
      y = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
      _ = (l = n.tenantId) !== null && l !== void 0 ? l : void 0,
      S = (a = n._redirectEventId) !== null && a !== void 0 ? a : void 0,
      p = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
      g = (c = n.lastLoginAt) !== null && c !== void 0 ? c : void 0,
      {
        uid: h,
        emailVerified: w,
        isAnonymous: x,
        providerData: E,
        stsTokenManager: P,
      } = n;
    D(h && P, t, "internal-error");
    const b = _r.fromJSON(this.name, P);
    D(typeof h == "string", t, "internal-error"),
      Bt(d, t.name),
      Bt(f, t.name),
      D(typeof w == "boolean", t, "internal-error"),
      D(typeof x == "boolean", t, "internal-error"),
      Bt(v, t.name),
      Bt(y, t.name),
      Bt(_, t.name),
      Bt(S, t.name),
      Bt(p, t.name),
      Bt(g, t.name);
    const k = new kt({
      uid: h,
      auth: t,
      email: f,
      emailVerified: w,
      displayName: d,
      isAnonymous: x,
      photoURL: y,
      phoneNumber: v,
      tenantId: _,
      stsTokenManager: b,
      createdAt: p,
      lastLoginAt: g,
    });
    return (
      E &&
        Array.isArray(E) &&
        (k.providerData = E.map((T) => Object.assign({}, T))),
      S && (k._redirectEventId = S),
      k
    );
  }
  static async _fromIdTokenResponse(t, n, r = !1) {
    const i = new _r();
    i.updateFromServerResponse(n);
    const s = new kt({
      uid: n.localId,
      auth: t,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await jo(s), s;
  }
  static async _fromGetAccountInfoResponse(t, n, r) {
    const i = n.users[0];
    D(i.localId !== void 0, "internal-error");
    const s = i.providerUserInfo !== void 0 ? ov(i.providerUserInfo) : [],
      o = !(i.email && i.passwordHash) && !(s != null && s.length),
      l = new _r();
    l.updateFromIdToken(r);
    const a = new kt({
        uid: i.localId,
        auth: t,
        stsTokenManager: l,
        isAnonymous: o,
      }),
      u = {
        uid: i.localId,
        displayName: i.displayName || null,
        photoURL: i.photoUrl || null,
        email: i.email || null,
        emailVerified: i.emailVerified || !1,
        phoneNumber: i.phoneNumber || null,
        tenantId: i.tenantId || null,
        providerData: s,
        metadata: new Su(i.createdAt, i.lastLoginAt),
        isAnonymous: !(i.email && i.passwordHash) && !(s != null && s.length),
      };
    return Object.assign(a, u), a;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dp = new Map();
function It(e) {
  Dt(e instanceof Function, "Expected a class definition");
  let t = dp.get(e);
  return t
    ? (Dt(t instanceof e, "Instance stored in cache mismatched with class"), t)
    : ((t = new e()), dp.set(e, t), t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class av {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, n) {
    this.storage[t] = n;
  }
  async _get(t) {
    const n = this.storage[t];
    return n === void 0 ? null : n;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
av.type = "NONE";
const fp = av;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Fs(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
class Sr {
  constructor(t, n, r) {
    (this.persistence = t), (this.auth = n), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = Fs(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = Fs("persistence", i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    return t ? kt._fromJSON(this.auth, t) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(t) {
    if (this.persistence === t) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = t), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, n, r = "authUser") {
    if (!n.length) return new Sr(It(fp), t, r);
    const i = (
      await Promise.all(
        n.map(async (u) => {
          if (await u._isAvailable()) return u;
        })
      )
    ).filter((u) => u);
    let s = i[0] || It(fp);
    const o = Fs(r, t.config.apiKey, t.name);
    let l = null;
    for (const u of n)
      try {
        const c = await u._get(o);
        if (c) {
          const d = kt._fromJSON(t, c);
          u !== s && (l = d), (s = u);
          break;
        }
      } catch {}
    const a = i.filter((u) => u._shouldAllowMigration);
    return !s._shouldAllowMigration || !a.length
      ? new Sr(s, t, r)
      : ((s = a[0]),
        l && (await s._set(o, l.toJSON())),
        await Promise.all(
          n.map(async (u) => {
            if (u !== s)
              try {
                await u._remove(o);
              } catch {}
          })
        ),
        new Sr(s, t, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pp(e) {
  const t = e.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
    return "Opera";
  if (cv(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (lv(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (fv(t)) return "Blackberry";
  if (pv(t)) return "Webos";
  if (Wc(t)) return "Safari";
  if ((t.includes("chrome/") || uv(t)) && !t.includes("edge/")) return "Chrome";
  if (dv(t)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = e.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function lv(e = _e()) {
  return /firefox\//i.test(e);
}
function Wc(e = _e()) {
  const t = e.toLowerCase();
  return (
    t.includes("safari/") &&
    !t.includes("chrome/") &&
    !t.includes("crios/") &&
    !t.includes("android")
  );
}
function uv(e = _e()) {
  return /crios\//i.test(e);
}
function cv(e = _e()) {
  return /iemobile/i.test(e);
}
function dv(e = _e()) {
  return /android/i.test(e);
}
function fv(e = _e()) {
  return /blackberry/i.test(e);
}
function pv(e = _e()) {
  return /webos/i.test(e);
}
function la(e = _e()) {
  return (
    /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
  );
}
function GT(e = _e()) {
  var t;
  return (
    la(e) &&
    !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
  );
}
function qT() {
  return fE() && document.documentMode === 10;
}
function hv(e = _e()) {
  return la(e) || dv(e) || pv(e) || fv(e) || /windows phone/i.test(e) || cv(e);
}
function KT() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function mv(e, t = []) {
  let n;
  switch (e) {
    case "Browser":
      n = pp(_e());
      break;
    case "Worker":
      n = `${pp(_e())}-${e}`;
      break;
    default:
      n = e;
  }
  const r = t.length ? t.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${Fr}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class XT {
  constructor(t) {
    (this.auth = t), (this.queue = []);
  }
  pushCallback(t, n) {
    const r = (s) =>
      new Promise((o, l) => {
        try {
          const a = t(s);
          o(a);
        } catch (a) {
          l(a);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const n = [];
    try {
      for (const r of this.queue) await r(t), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function YT(e, t = {}) {
  return $r(e, "GET", "/v2/passwordPolicy", Vc(e, t));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const QT = 6;
class JT {
  constructor(t) {
    var n, r, i, s;
    const o = t.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (n = o.minPasswordLength) !== null && n !== void 0 ? n : QT),
      o.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength),
      o.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          o.containsLowercaseCharacter),
      o.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          o.containsUppercaseCharacter),
      o.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          o.containsNumericCharacter),
      o.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          o.containsNonAlphanumericCharacter),
      (this.enforcementState = t.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" &&
        (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        (i =
          (r = t.allowedNonAlphanumericCharacters) === null || r === void 0
            ? void 0
            : r.join("")) !== null && i !== void 0
          ? i
          : ""),
      (this.forceUpgradeOnSignin =
        (s = t.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1),
      (this.schemaVersion = t.schemaVersion);
  }
  validatePassword(t) {
    var n, r, i, s, o, l;
    const a = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(t, a),
      this.validatePasswordCharacterOptions(t, a),
      a.isValid &&
        (a.isValid =
          (n = a.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
      a.isValid &&
        (a.isValid =
          (r = a.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      a.isValid &&
        (a.isValid =
          (i = a.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
      a.isValid &&
        (a.isValid =
          (s = a.containsUppercaseLetter) !== null && s !== void 0 ? s : !0),
      a.isValid &&
        (a.isValid =
          (o = a.containsNumericCharacter) !== null && o !== void 0 ? o : !0),
      a.isValid &&
        (a.isValid =
          (l = a.containsNonAlphanumericCharacter) !== null && l !== void 0
            ? l
            : !0),
      a
    );
  }
  validatePasswordLengthOptions(t, n) {
    const r = this.customStrengthOptions.minPasswordLength,
      i = this.customStrengthOptions.maxPasswordLength;
    r && (n.meetsMinPasswordLength = t.length >= r),
      i && (n.meetsMaxPasswordLength = t.length <= i);
  }
  validatePasswordCharacterOptions(t, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
    let r;
    for (let i = 0; i < t.length; i++)
      (r = t.charAt(i)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= "a" && r <= "z",
          r >= "A" && r <= "Z",
          r >= "0" && r <= "9",
          this.allowedNonAlphanumericCharacters.includes(r)
        );
  }
  updatePasswordCharacterOptionsStatuses(t, n, r, i, s) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (t.containsLowercaseLetter || (t.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (t.containsUppercaseLetter || (t.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (t.containsNumericCharacter || (t.containsNumericCharacter = i)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (t.containsNonAlphanumericCharacter ||
          (t.containsNonAlphanumericCharacter = s));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ZT {
  constructor(t, n, r, i) {
    (this.app = t),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new hp(this)),
      (this.idTokenSubscription = new hp(this)),
      (this.beforeStateQueue = new XT(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = tv),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = t.name),
      (this.clientVersion = i.sdkClientVersion);
  }
  _initializeWithPersistence(t, n) {
    return (
      n && (this._popupRedirectResolver = It(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Sr.create(this, t)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0
                ? void 0
                : i.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const t = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !t)) {
      if (this.currentUser && t && this.currentUser.uid === t.uid) {
        this._currentUser._assign(t), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(t, !0);
    }
  }
  async initializeCurrentUserFromIdToken(t) {
    try {
      const n = await sv(this, { idToken: t }),
        r = await kt._fromGetAccountInfoResponse(this, n, t);
      await this.directlySetCurrentUser(r);
    } catch (n) {
      console.warn(
        "FirebaseServerApp could not login user with provided authIdToken: ",
        n
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(t) {
    var n;
    if (bt(this.app)) {
      const o = this.app.settings.authIdToken;
      return o
        ? new Promise((l) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(o).then(l, l)
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      s = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o =
          (n = this.redirectUser) === null || n === void 0
            ? void 0
            : n._redirectEventId,
        l = i == null ? void 0 : i._redirectEventId,
        a = await this.tryRedirectSignIn(t);
      (!o || o === l) && a != null && a.user && ((i = a.user), (s = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (o) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(o)
            );
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null);
    }
    return (
      D(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(t) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await jo(t);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = LT();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    if (bt(this.app)) return Promise.reject(Dn(this));
    const n = t ? vt(t) : null;
    return (
      n &&
        D(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(t, n = !1) {
    if (!this._deleted)
      return (
        t && D(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return bt(this.app)
      ? Promise.reject(Dn(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(t) {
    return bt(this.app)
      ? Promise.reject(Dn(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(It(t));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(t) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const n = this._getPasswordPolicyInternal();
    return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            "unsupported-password-policy-schema-version",
            {}
          )
        )
      : n.validatePassword(t);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const t = await YT(this),
      n = new JT(t);
    this.tenantId === null
      ? (this._projectPasswordPolicy = n)
      : (this._tenantPasswordPolicies[this.tenantId] = n);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(t) {
    this._errorFactory = new Gi("auth", "Firebase", t());
  }
  onAuthStateChanged(t, n, r) {
    return this.registerStateListener(this.authStateSubscription, t, n, r);
  }
  beforeAuthStateChanged(t, n) {
    return this.beforeStateQueue.pushCallback(t, n);
  }
  onIdTokenChanged(t, n, r) {
    return this.registerStateListener(this.idTokenSubscription, t, n, r);
  }
  authStateReady() {
    return new Promise((t, n) => {
      if (this.currentUser) t();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), t();
        }, n);
      }
    });
  }
  async revokeAccessToken(t) {
    if (this.currentUser) {
      const n = await this.currentUser.getIdToken(),
        r = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: t,
          idToken: n,
        };
      this.tenantId != null && (r.tenantId = this.tenantId), await WT(this, r);
    }
  }
  toJSON() {
    var t;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON(),
    };
  }
  async _setRedirectUser(t, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return t === null ? r.removeCurrentUser() : r.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const n = (t && It(t)) || this._popupRedirectResolver;
      D(n, this, "argument-error"),
        (this.redirectPersistenceManager = await Sr.create(
          this,
          [It(n._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0
        ? void 0
        : n._redirectEventId) === t
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId) === t
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(t) {
    if (t === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(t));
  }
  _notifyListenersIfCurrent(t) {
    t === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var t, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !==
        null && n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, n, r, i) {
    if (this._deleted) return () => {};
    const s = typeof n == "function" ? n : n.next.bind(n);
    let o = !1;
    const l = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (D(l, this, "internal-error"),
      l.then(() => {
        o || s(this.currentUser);
      }),
      typeof n == "function")
    ) {
      const a = t.addObserver(n, r, i);
      return () => {
        (o = !0), a();
      };
    } else {
      const a = t.addObserver(n);
      return () => {
        (o = !0), a();
      };
    }
  }
  async directlySetCurrentUser(t) {
    this.currentUser &&
      this.currentUser !== t &&
      this._currentUser._stopProactiveRefresh(),
      t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
      (this.currentUser = t),
      t
        ? await this.assertedPersistence.setCurrentUser(t)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(t) {
    return (this.operations = this.operations.then(t, t)), this.operations;
  }
  get assertedPersistence() {
    return (
      D(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = mv(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var t;
    const n = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
    const r = await ((t = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getHeartbeatsHeader());
    r && (n["X-Firebase-Client"] = r);
    const i = await this._getAppCheckToken();
    return i && (n["X-Firebase-AppCheck"] = i), n;
  }
  async _getAppCheckToken() {
    var t;
    const n = await ((t = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getToken());
    return (
      n != null &&
        n.error &&
        IT(`Error while retrieving App Check token: ${n.error}`),
      n == null ? void 0 : n.token
    );
  }
}
function ua(e) {
  return vt(e);
}
class hp {
  constructor(t) {
    (this.auth = t),
      (this.observer = null),
      (this.addObserver = wE((n) => (this.observer = n)));
  }
  get next() {
    return (
      D(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Gc = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function eC(e) {
  Gc = e;
}
function tC(e) {
  return Gc.loadJS(e);
}
function nC() {
  return Gc.gapiScript;
}
function rC(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iC(e, t) {
  const n = Uc(e, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      s = n.getOptions();
    if (Lo(s, t ?? {})) return i;
    mt(i, "already-initialized");
  }
  return n.initialize({ options: t });
}
function sC(e, t) {
  const n = (t == null ? void 0 : t.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(It);
  t != null && t.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(
      r,
      t == null ? void 0 : t.popupRedirectResolver
    );
}
function oC(e, t, n) {
  const r = ua(e);
  D(r._canInitEmulator, r, "emulator-config-failed"),
    D(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
  const i = !1,
    s = gv(t),
    { host: o, port: l } = aC(t),
    a = l === null ? "" : `:${l}`;
  (r.config.emulator = { url: `${s}//${o}${a}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: o,
      port: l,
      protocol: s.replace(":", ""),
      options: Object.freeze({ disableWarnings: i }),
    })),
    lC();
}
function gv(e) {
  const t = e.indexOf(":");
  return t < 0 ? "" : e.substr(0, t + 1);
}
function aC(e) {
  const t = gv(e),
    n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
  if (!n) return { host: "", port: null };
  const r = n[2].split("@").pop() || "",
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: mp(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(":");
    return { host: s, port: mp(o) };
  }
}
function mp(e) {
  if (!e) return null;
  const t = Number(e);
  return isNaN(t) ? null : t;
}
function lC() {
  function e() {
    const t = document.createElement("p"),
      n = t.style;
    (t.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (n.position = "fixed"),
      (n.width = "100%"),
      (n.backgroundColor = "#ffffff"),
      (n.border = ".1em solid #000000"),
      (n.color = "#b50000"),
      (n.bottom = "0px"),
      (n.left = "0px"),
      (n.margin = "0px"),
      (n.zIndex = "10000"),
      (n.textAlign = "center"),
      t.classList.add("firebase-emulator-warning"),
      document.body.appendChild(t);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", e)
        : e());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vv {
  constructor(t, n) {
    (this.providerId = t), (this.signInMethod = n);
  }
  toJSON() {
    return Pt("not implemented");
  }
  _getIdTokenResponse(t) {
    return Pt("not implemented");
  }
  _linkToIdToken(t, n) {
    return Pt("not implemented");
  }
  _getReauthenticationResolver(t) {
    return Pt("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function xr(e, t) {
  return jT(e, "POST", "/v1/accounts:signInWithIdp", Vc(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const uC = "http://localhost";
class Kn extends vv {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const n = new Kn(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (n.idToken = t.idToken),
          t.accessToken && (n.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (n.nonce = t.nonce),
          t.pendingToken && (n.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
        ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
        : mt("argument-error"),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(t) {
    const n = typeof t == "string" ? JSON.parse(t) : t,
      { providerId: r, signInMethod: i } = n,
      s = zc(n, ["providerId", "signInMethod"]);
    if (!r || !i) return null;
    const o = new Kn(r, i);
    return (
      (o.idToken = s.idToken || void 0),
      (o.accessToken = s.accessToken || void 0),
      (o.secret = s.secret),
      (o.nonce = s.nonce),
      (o.pendingToken = s.pendingToken || null),
      o
    );
  }
  _getIdTokenResponse(t) {
    const n = this.buildRequest();
    return xr(t, n);
  }
  _linkToIdToken(t, n) {
    const r = this.buildRequest();
    return (r.idToken = n), xr(t, r);
  }
  _getReauthenticationResolver(t) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), xr(t, n);
  }
  buildRequest() {
    const t = { requestUri: uC, returnSecureToken: !0 };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (t.postBody = qi(n));
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qc {
  constructor(t) {
    (this.providerId = t),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(t) {
    this.defaultLanguageCode = t;
  }
  setCustomParameters(t) {
    return (this.customParameters = t), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xi extends qc {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(t) {
    return this.scopes.includes(t) || this.scopes.push(t), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qt extends Xi {
  constructor() {
    super("facebook.com");
  }
  static credential(t) {
    return Kn._fromParams({
      providerId: qt.PROVIDER_ID,
      signInMethod: qt.FACEBOOK_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return qt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return qt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return qt.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
qt.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
qt.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Et extends Xi {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(t, n) {
    return Kn._fromParams({
      providerId: Et.PROVIDER_ID,
      signInMethod: Et.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: n,
    });
  }
  static credentialFromResult(t) {
    return Et.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Et.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = t;
    if (!n && !r) return null;
    try {
      return Et.credential(n, r);
    } catch {
      return null;
    }
  }
}
Et.GOOGLE_SIGN_IN_METHOD = "google.com";
Et.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kt extends Xi {
  constructor() {
    super("github.com");
  }
  static credential(t) {
    return Kn._fromParams({
      providerId: Kt.PROVIDER_ID,
      signInMethod: Kt.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Kt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Kt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Kt.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Kt.GITHUB_SIGN_IN_METHOD = "github.com";
Kt.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xt extends Xi {
  constructor() {
    super("twitter.com");
  }
  static credential(t, n) {
    return Kn._fromParams({
      providerId: Xt.PROVIDER_ID,
      signInMethod: Xt.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(t) {
    return Xt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Xt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = t;
    if (!n || !r) return null;
    try {
      return Xt.credential(n, r);
    } catch {
      return null;
    }
  }
}
Xt.TWITTER_SIGN_IN_METHOD = "twitter.com";
Xt.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lr {
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, n, r, i = !1) {
    const s = await kt._fromIdTokenResponse(t, r, i),
      o = gp(r);
    return new Lr({
      user: s,
      providerId: o,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(t, n, r) {
    await t._updateTokensIfNecessary(r, !0);
    const i = gp(r);
    return new Lr({
      user: t,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function gp(e) {
  return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Do extends Ft {
  constructor(t, n, r, i) {
    var s;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, Do.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: (s = t.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(t, n, r, i) {
    return new Do(t, n, r, i);
  }
}
function yv(e, t, n, r) {
  return (
    t === "reauthenticate"
      ? n._getReauthenticationResolver(e)
      : n._getIdTokenResponse(e)
  ).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required"
      ? Do._fromErrorAndOperation(e, s, t, r)
      : s;
  });
}
async function cC(e, t, n = !1) {
  const r = await Di(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
  return Lr._forOperation(e, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function dC(e, t, n = !1) {
  const { auth: r } = e;
  if (bt(r.app)) return Promise.reject(Dn(r));
  const i = "reauthenticate";
  try {
    const s = await Di(e, yv(r, i, t, e), n);
    D(s.idToken, r, "internal-error");
    const o = Hc(s.idToken);
    D(o, r, "internal-error");
    const { sub: l } = o;
    return D(e.uid === l, r, "user-mismatch"), Lr._forOperation(e, i, s);
  } catch (s) {
    throw (
      ((s == null ? void 0 : s.code) === "auth/user-not-found" &&
        mt(r, "user-mismatch"),
      s)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function fC(e, t, n = !1) {
  if (bt(e.app)) return Promise.reject(Dn(e));
  const r = "signIn",
    i = await yv(e, r, t),
    s = await Lr._fromIdTokenResponse(e, r, i);
  return n || (await e._updateCurrentUser(s.user)), s;
}
function pC(e, t, n, r) {
  return vt(e).onIdTokenChanged(t, n, r);
}
function hC(e, t, n) {
  return vt(e).beforeAuthStateChanged(t, n);
}
const Uo = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wv {
  constructor(t, n) {
    (this.storageRetriever = t), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Uo, "1"),
          this.storage.removeItem(Uo),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, n) {
    return this.storage.setItem(t, JSON.stringify(n)), Promise.resolve();
  }
  _get(t) {
    const n = this.storage.getItem(t);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(t) {
    return this.storage.removeItem(t), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function mC() {
  const e = _e();
  return Wc(e) || la(e);
}
const gC = 1e3,
  vC = 10;
class _v extends wv {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (t, n) => this.onStorageEvent(t, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = mC() && KT()),
      (this.fallbackToPolling = hv()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(t) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n];
      r !== i && t(n, i, r);
    }
  }
  onStorageEvent(t, n = !1) {
    if (!t.key) {
      this.forAllChangedKeys((o, l, a) => {
        this.notifyListeners(o, a);
      });
      return;
    }
    const r = t.key;
    if (
      (n ? this.detachListener() : this.stopPolling(),
      this.safariLocalStorageNotSynced)
    ) {
      const o = this.storage.getItem(r);
      if (t.newValue !== o)
        t.newValue !== null
          ? this.storage.setItem(r, t.newValue)
          : this.storage.removeItem(r);
      else if (this.localCache[r] === t.newValue && !n) return;
    }
    const i = () => {
        const o = this.storage.getItem(r);
        (!n && this.localCache[r] === o) || this.notifyListeners(r, o);
      },
      s = this.storage.getItem(r);
    qT() && s !== t.newValue && t.newValue !== t.oldValue
      ? setTimeout(i, vC)
      : i();
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, n, r) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: t, oldValue: n, newValue: r }),
            !0
          );
        });
      }, gC));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[t] ||
        ((this.listeners[t] = new Set()),
        (this.localCache[t] = this.storage.getItem(t))),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(t, n) {
    await super._set(t, n), (this.localCache[t] = JSON.stringify(n));
  }
  async _get(t) {
    const n = await super._get(t);
    return (this.localCache[t] = JSON.stringify(n)), n;
  }
  async _remove(t) {
    await super._remove(t), delete this.localCache[t];
  }
}
_v.type = "LOCAL";
const yC = _v;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Sv extends wv {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
Sv.type = "SESSION";
const xv = Sv;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function wC(e) {
  return Promise.all(
    e.map(async (t) => {
      try {
        return { fulfilled: !0, value: await t };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ca {
  constructor(t) {
    (this.eventTarget = t),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const n = this.receivers.find((i) => i.isListeningto(t));
    if (n) return n;
    const r = new ca(t);
    return this.receivers.push(r), r;
  }
  isListeningto(t) {
    return this.eventTarget === t;
  }
  async handleEvent(t) {
    const n = t,
      { eventId: r, eventType: i, data: s } = n.data,
      o = this.handlersMap[i];
    if (!(o != null && o.size)) return;
    n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i });
    const l = Array.from(o).map(async (u) => u(n.origin, s)),
      a = await wC(l);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
      response: a,
    });
  }
  _subscribe(t, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[t] || (this.handlersMap[t] = new Set()),
      this.handlersMap[t].add(n);
  }
  _unsubscribe(t, n) {
    this.handlersMap[t] && n && this.handlersMap[t].delete(n),
      (!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
ca.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Kc(e = "", t = 10) {
  let n = "";
  for (let r = 0; r < t; r++) n += Math.floor(Math.random() * 10);
  return e + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _C {
  constructor(t) {
    (this.target = t), (this.handlers = new Set());
  }
  removeMessageHandler(t) {
    t.messageChannel &&
      (t.messageChannel.port1.removeEventListener("message", t.onMessage),
      t.messageChannel.port1.close()),
      this.handlers.delete(t);
  }
  async _send(t, n, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i) throw new Error("connection_unavailable");
    let s, o;
    return new Promise((l, a) => {
      const u = Kc("", 20);
      i.port1.start();
      const c = setTimeout(() => {
        a(new Error("unsupported_event"));
      }, r);
      (o = {
        messageChannel: i,
        onMessage(d) {
          const f = d;
          if (f.data.eventId === u)
            switch (f.data.status) {
              case "ack":
                clearTimeout(c),
                  (s = setTimeout(() => {
                    a(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(s), l(f.data.response);
                break;
              default:
                clearTimeout(c),
                  clearTimeout(s),
                  a(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(o),
        i.port1.addEventListener("message", o.onMessage),
        this.target.postMessage({ eventType: t, eventId: u, data: n }, [
          i.port2,
        ]);
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ht() {
  return window;
}
function SC(e) {
  ht().location.href = e;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ev() {
  return (
    typeof ht().WorkerGlobalScope < "u" &&
    typeof ht().importScripts == "function"
  );
}
async function xC() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function EC() {
  var e;
  return (
    ((e = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    e === void 0
      ? void 0
      : e.controller) || null
  );
}
function TC() {
  return Ev() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Tv = "firebaseLocalStorageDb",
  CC = 1,
  zo = "firebaseLocalStorage",
  Cv = "fbase_key";
class Yi {
  constructor(t) {
    this.request = t;
  }
  toPromise() {
    return new Promise((t, n) => {
      this.request.addEventListener("success", () => {
        t(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          n(this.request.error);
        });
    });
  }
}
function da(e, t) {
  return e.transaction([zo], t ? "readwrite" : "readonly").objectStore(zo);
}
function bC() {
  const e = indexedDB.deleteDatabase(Tv);
  return new Yi(e).toPromise();
}
function xu() {
  const e = indexedDB.open(Tv, CC);
  return new Promise((t, n) => {
    e.addEventListener("error", () => {
      n(e.error);
    }),
      e.addEventListener("upgradeneeded", () => {
        const r = e.result;
        try {
          r.createObjectStore(zo, { keyPath: Cv });
        } catch (i) {
          n(i);
        }
      }),
      e.addEventListener("success", async () => {
        const r = e.result;
        r.objectStoreNames.contains(zo)
          ? t(r)
          : (r.close(), await bC(), t(await xu()));
      });
  });
}
async function vp(e, t, n) {
  const r = da(e, !0).put({ [Cv]: t, value: n });
  return new Yi(r).toPromise();
}
async function PC(e, t) {
  const n = da(e, !1).get(t),
    r = await new Yi(n).toPromise();
  return r === void 0 ? null : r.value;
}
function yp(e, t) {
  const n = da(e, !0).delete(t);
  return new Yi(n).toPromise();
}
const kC = 800,
  IC = 3;
class bv {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await xu()), this.db);
  }
  async _withRetries(t) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await t(r);
      } catch (r) {
        if (n++ > IC) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Ev() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = ca._getInstance(TC())),
      this.receiver._subscribe("keyChanged", async (t, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (t, n) => ["keyChanged"]);
  }
  async initializeSender() {
    var t, n;
    if (((this.activeServiceWorker = await xC()), !this.activeServiceWorker))
      return;
    this.sender = new _C(this.activeServiceWorker);
    const r = await this.sender._send("ping", {}, 800);
    r &&
      !((t = r[0]) === null || t === void 0) &&
      t.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(t) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        EC() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: t },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const t = await xu();
      return await vp(t, Uo, "1"), await yp(t, Uo), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(t) {
    this.pendingWrites++;
    try {
      await t();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(t, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => vp(r, t, n)),
        (this.localCache[t] = n),
        this.notifyServiceWorker(t)
      )
    );
  }
  async _get(t) {
    const n = await this._withRetries((r) => PC(r, t));
    return (this.localCache[t] = n), n;
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => yp(n, t)),
        delete this.localCache[t],
        this.notifyServiceWorker(t)
      )
    );
  }
  async _poll() {
    const t = await this._withRetries((i) => {
      const s = da(i, !1).getAll();
      return new Yi(s).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    if (t.length !== 0)
      for (const { fbase_key: i, value: s } of t)
        r.add(i),
          JSON.stringify(this.localCache[i]) !== JSON.stringify(s) &&
            (this.notifyListeners(i, s), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] &&
        !r.has(i) &&
        (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), kC));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
bv.type = "LOCAL";
const NC = bv;
new Ki(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Pv(e, t) {
  return t
    ? It(t)
    : (D(e._popupRedirectResolver, e, "argument-error"),
      e._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xc extends vv {
  constructor(t) {
    super("custom", "custom"), (this.params = t);
  }
  _getIdTokenResponse(t) {
    return xr(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, n) {
    return xr(t, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(t) {
    return xr(t, this._buildIdpRequest());
  }
  _buildIdpRequest(t) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return t && (n.idToken = t), n;
  }
}
function OC(e) {
  return fC(e.auth, new Xc(e), e.bypassAuthState);
}
function RC(e) {
  const { auth: t, user: n } = e;
  return D(n, t, "internal-error"), dC(n, new Xc(e), e.bypassAuthState);
}
async function LC(e) {
  const { auth: t, user: n } = e;
  return D(n, t, "internal-error"), cC(n, new Xc(e), e.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kv {
  constructor(t, n, r, i, s = !1) {
    (this.auth = t),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = s),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (t, n) => {
      this.pendingPromise = { resolve: t, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(t) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: i,
      tenantId: s,
      error: o,
      type: l,
    } = t;
    if (o) {
      this.reject(o);
      return;
    }
    const a = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(l)(a));
    } catch (u) {
      this.reject(u);
    }
  }
  onError(t) {
    this.reject(t);
  }
  getIdpTask(t) {
    switch (t) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return OC;
      case "linkViaPopup":
      case "linkViaRedirect":
        return LC;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return RC;
      default:
        mt(this.auth, "internal-error");
    }
  }
  resolve(t) {
    Dt(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp();
  }
  reject(t) {
    Dt(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(t),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const AC = new Ki(2e3, 1e4);
async function MC(e, t, n) {
  if (bt(e.app))
    return Promise.reject(st(e, "operation-not-supported-in-this-environment"));
  const r = ua(e);
  NT(e, t, qc);
  const i = Pv(r, n);
  return new An(r, "signInViaPopup", t, i).executeNotNull();
}
class An extends kv {
  constructor(t, n, r, i, s) {
    super(t, n, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      An.currentPopupAction && An.currentPopupAction.cancel(),
      (An.currentPopupAction = this);
  }
  async executeNotNull() {
    const t = await this.execute();
    return D(t, this.auth, "internal-error"), t;
  }
  async onExecution() {
    Dt(this.filter.length === 1, "Popup operations only handle one event");
    const t = Kc();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      t
    )),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(st(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var t;
    return (
      ((t = this.authWindow) === null || t === void 0
        ? void 0
        : t.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(st(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (An.currentPopupAction = null);
  }
  pollUserCancellation() {
    const t = () => {
      var n, r;
      if (
        !(
          (r =
            (n = this.authWindow) === null || n === void 0
              ? void 0
              : n.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(st(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, AC.get());
    };
    t();
  }
}
An.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const jC = "pendingRedirect",
  $s = new Map();
class DC extends kv {
  constructor(t, n, r = !1) {
    super(
      t,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      n,
      void 0,
      r
    ),
      (this.eventId = null);
  }
  async execute() {
    let t = $s.get(this.auth._key());
    if (!t) {
      try {
        const r = (await UC(this.resolver, this.auth))
          ? await super.execute()
          : null;
        t = () => Promise.resolve(r);
      } catch (n) {
        t = () => Promise.reject(n);
      }
      $s.set(this.auth._key(), t);
    }
    return (
      this.bypassAuthState ||
        $s.set(this.auth._key(), () => Promise.resolve(null)),
      t()
    );
  }
  async onAuthEvent(t) {
    if (t.type === "signInViaRedirect") return super.onAuthEvent(t);
    if (t.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (t.eventId) {
      const n = await this.auth._redirectUserForId(t.eventId);
      if (n) return (this.user = n), super.onAuthEvent(t);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function UC(e, t) {
  const n = $C(t),
    r = FC(e);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === "true";
  return await r._remove(n), i;
}
function zC(e, t) {
  $s.set(e._key(), t);
}
function FC(e) {
  return It(e._redirectPersistence);
}
function $C(e) {
  return Fs(jC, e.config.apiKey, e.name);
}
async function BC(e, t, n = !1) {
  if (bt(e.app)) return Promise.reject(Dn(e));
  const r = ua(e),
    i = Pv(r, t),
    o = await new DC(r, i, n).execute();
  return (
    o &&
      !n &&
      (delete o.user._redirectEventId,
      await r._persistUserIfCurrent(o.user),
      await r._setRedirectUser(null, t)),
    o
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const VC = 10 * 60 * 1e3;
class HC {
  constructor(t) {
    (this.auth = t),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(t) {
    this.consumers.add(t),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, t) &&
        (this.sendToConsumer(this.queuedRedirectEvent, t),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(t) {
    this.consumers.delete(t);
  }
  onEvent(t) {
    if (this.hasEventBeenHandled(t)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(t, r) &&
          ((n = !0), this.sendToConsumer(t, r), this.saveEventToCache(t));
      }),
      this.hasHandledPotentialRedirect ||
        !WC(t) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = t), (n = !0))),
      n
    );
  }
  sendToConsumer(t, n) {
    var r;
    if (t.error && !Iv(t)) {
      const i =
        ((r = t.error.code) === null || r === void 0
          ? void 0
          : r.split("auth/")[1]) || "internal-error";
      n.onError(st(this.auth, i));
    } else n.onAuthEvent(t);
  }
  isEventForConsumer(t, n) {
    const r = n.eventId === null || (!!t.eventId && t.eventId === n.eventId);
    return n.filter.includes(t.type) && r;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= VC &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(wp(t))
    );
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(wp(t)), (this.lastProcessedEventTime = Date.now());
  }
}
function wp(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId]
    .filter((t) => t)
    .join("-");
}
function Iv({ type: e, error: t }) {
  return (
    e === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event"
  );
}
function WC(e) {
  switch (e.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Iv(e);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function GC(e, t = {}) {
  return $r(e, "GET", "/v1/projects", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qC = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  KC = /^https?/;
async function XC(e) {
  if (e.config.emulator) return;
  const { authorizedDomains: t } = await GC(e);
  for (const n of t)
    try {
      if (YC(n)) return;
    } catch {}
  mt(e, "unauthorized-domain");
}
function YC(e) {
  const t = _u(),
    { protocol: n, hostname: r } = new URL(t);
  if (e.startsWith("chrome-extension://")) {
    const o = new URL(e);
    return o.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          e.replace("chrome-extension://", "") ===
            t.replace("chrome-extension://", "")
      : n === "chrome-extension:" && o.hostname === r;
  }
  if (!KC.test(n)) return !1;
  if (qC.test(e)) return r === e;
  const i = e.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const QC = new Ki(3e4, 6e4);
function _p() {
  const e = ht().___jsl;
  if (e != null && e.H) {
    for (const t of Object.keys(e.H))
      if (
        ((e.H[t].r = e.H[t].r || []),
        (e.H[t].L = e.H[t].L || []),
        (e.H[t].r = [...e.H[t].L]),
        e.CP)
      )
        for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
}
function JC(e) {
  return new Promise((t, n) => {
    var r, i, s;
    function o() {
      _p(),
        gapi.load("gapi.iframes", {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            _p(), n(st(e, "network-request-failed"));
          },
          timeout: QC.get(),
        });
    }
    if (
      !(
        (i = (r = ht().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || i === void 0
      ) &&
      i.Iframe
    )
      t(gapi.iframes.getContext());
    else if (!((s = ht().gapi) === null || s === void 0) && s.load) o();
    else {
      const l = rC("iframefcb");
      return (
        (ht()[l] = () => {
          gapi.load ? o() : n(st(e, "network-request-failed"));
        }),
        tC(`${nC()}?onload=${l}`).catch((a) => n(a))
      );
    }
  }).catch((t) => {
    throw ((Bs = null), t);
  });
}
let Bs = null;
function ZC(e) {
  return (Bs = Bs || JC(e)), Bs;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const eb = new Ki(5e3, 15e3),
  tb = "__/auth/iframe",
  nb = "emulator/auth/iframe",
  rb = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  ib = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function sb(e) {
  const t = e.config;
  D(t.authDomain, e, "auth-domain-config-required");
  const n = t.emulator ? Bc(t, nb) : `https://${e.config.authDomain}/${tb}`,
    r = { apiKey: t.apiKey, appName: e.name, v: Fr },
    i = ib.get(e.config.apiHost);
  i && (r.eid = i);
  const s = e._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${n}?${qi(r).slice(1)}`;
}
async function ob(e) {
  const t = await ZC(e),
    n = ht().gapi;
  return (
    D(n, e, "internal-error"),
    t.open(
      {
        where: document.body,
        url: sb(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: rb,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = st(e, "network-request-failed"),
            l = ht().setTimeout(() => {
              s(o);
            }, eb.get());
          function a() {
            ht().clearTimeout(l), i(r);
          }
          r.ping(a).then(a, () => {
            s(o);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ab = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  lb = 500,
  ub = 600,
  cb = "_blank",
  db = "http://localhost";
class Sp {
  constructor(t) {
    (this.window = t), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function fb(e, t, n, r = lb, i = ub) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let l = "";
  const a = Object.assign(Object.assign({}, ab), {
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: o,
    }),
    u = _e().toLowerCase();
  n && (l = uv(u) ? cb : n), lv(u) && ((t = t || db), (a.scrollbars = "yes"));
  const c = Object.entries(a).reduce((f, [v, y]) => `${f}${v}=${y},`, "");
  if (GT(u) && l !== "_self") return pb(t || "", l), new Sp(null);
  const d = window.open(t || "", l, c);
  D(d, e, "popup-blocked");
  try {
    d.focus();
  } catch {}
  return new Sp(d);
}
function pb(e, t) {
  const n = document.createElement("a");
  (n.href = e), (n.target = t);
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hb = "__/auth/handler",
  mb = "emulator/auth/handler",
  gb = encodeURIComponent("fac");
async function xp(e, t, n, r, i, s) {
  D(e.config.authDomain, e, "auth-domain-config-required"),
    D(e.config.apiKey, e, "invalid-api-key");
  const o = {
    apiKey: e.config.apiKey,
    appName: e.name,
    authType: n,
    redirectUrl: r,
    v: Fr,
    eventId: i,
  };
  if (t instanceof qc) {
    t.setDefaultLanguage(e.languageCode),
      (o.providerId = t.providerId || ""),
      yE(t.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [c, d] of Object.entries({})) o[c] = d;
  }
  if (t instanceof Xi) {
    const c = t.getScopes().filter((d) => d !== "");
    c.length > 0 && (o.scopes = c.join(","));
  }
  e.tenantId && (o.tid = e.tenantId);
  const l = o;
  for (const c of Object.keys(l)) l[c] === void 0 && delete l[c];
  const a = await e._getAppCheckToken(),
    u = a ? `#${gb}=${encodeURIComponent(a)}` : "";
  return `${vb(e)}?${qi(l).slice(1)}${u}`;
}
function vb({ config: e }) {
  return e.emulator ? Bc(e, mb) : `https://${e.authDomain}/${hb}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const il = "webStorageSupport";
class yb {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = xv),
      (this._completeRedirectFn = BC),
      (this._overrideRedirectResult = zC);
  }
  async _openPopup(t, n, r, i) {
    var s;
    Dt(
      (s = this.eventManagers[t._key()]) === null || s === void 0
        ? void 0
        : s.manager,
      "_initialize() not called before _openPopup()"
    );
    const o = await xp(t, n, r, _u(), i);
    return fb(t, o, Kc());
  }
  async _openRedirect(t, n, r, i) {
    await this._originValidation(t);
    const s = await xp(t, n, r, _u(), i);
    return SC(s), new Promise(() => {});
  }
  _initialize(t) {
    const n = t._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n];
      return i
        ? Promise.resolve(i)
        : (Dt(s, "If manager is not set, promise should be"), s);
    }
    const r = this.initAndGetManager(t);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(t) {
    const n = await ob(t),
      r = new HC(t);
    return (
      n.register(
        "authEvent",
        (i) => (
          D(i == null ? void 0 : i.authEvent, t, "invalid-auth-event"),
          { status: r.onEvent(i.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[t._key()] = { manager: r }),
      (this.iframes[t._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(t, n) {
    this.iframes[t._key()].send(
      il,
      { type: il },
      (i) => {
        var s;
        const o =
          (s = i == null ? void 0 : i[0]) === null || s === void 0
            ? void 0
            : s[il];
        o !== void 0 && n(!!o), mt(t, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(t) {
    const n = t._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = XC(t)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return hv() || Wc() || la();
  }
}
const wb = yb;
var Ep = "@firebase/auth",
  Tp = "1.7.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _b {
  constructor(t) {
    (this.auth = t), (this.internalListeners = new Map());
  }
  getUid() {
    var t;
    return (
      this.assertAuthConfigured(),
      ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) ||
        null
    );
  }
  async getToken(t) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(t) }
        : null
    );
  }
  addAuthTokenListener(t) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      t((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(t, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(t);
    n && (this.internalListeners.delete(t), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    D(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Sb(e) {
  switch (e) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function xb(e) {
  Rr(
    new Gn(
      "auth",
      (t, { options: n }) => {
        const r = t.getProvider("app").getImmediate(),
          i = t.getProvider("heartbeat"),
          s = t.getProvider("app-check-internal"),
          { apiKey: o, authDomain: l } = r.options;
        D(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
        const a = {
            apiKey: o,
            authDomain: l,
            clientPlatform: e,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: mv(e),
          },
          u = new ZT(r, i, s, a);
        return sC(u, n), u;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, n, r) => {
        t.getProvider("auth-internal").initialize();
      })
  ),
    Rr(
      new Gn(
        "auth-internal",
        (t) => {
          const n = ua(t.getProvider("auth").getImmediate());
          return ((r) => new _b(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    pn(Ep, Tp, Sb(e)),
    pn(Ep, Tp, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Eb = 5 * 60,
  Tb = Gg("authIdTokenMaxAge") || Eb;
let Cp = null;
const Cb = (e) => async (t) => {
  const n = t && (await t.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > Tb) return;
  const i = n == null ? void 0 : n.token;
  Cp !== i &&
    ((Cp = i),
    await fetch(e, {
      method: i ? "POST" : "DELETE",
      headers: i ? { Authorization: `Bearer ${i}` } : {},
    }));
};
function bb(e = Qg()) {
  const t = Uc(e, "auth");
  if (t.isInitialized()) return t.getImmediate();
  const n = iC(e, { popupRedirectResolver: wb, persistence: [NC, yC, xv] }),
    r = Gg("authTokenSyncURL");
  if (r && typeof isSecureContext == "boolean" && isSecureContext) {
    const s = new URL(r, location.origin);
    if (location.origin === s.origin) {
      const o = Cb(s.toString());
      hC(n, o, () => o(n.currentUser)), pC(n, (l) => o(l));
    }
  }
  const i = Hg("auth");
  return i && oC(n, `http://${i}`), n;
}
function Pb() {
  var e, t;
  return (t =
    (e = document.getElementsByTagName("head")) === null || e === void 0
      ? void 0
      : e[0]) !== null && t !== void 0
    ? t
    : document;
}
eC({
  loadJS(e) {
    return new Promise((t, n) => {
      const r = document.createElement("script");
      r.setAttribute("src", e),
        (r.onload = t),
        (r.onerror = (i) => {
          const s = st("internal-error");
          (s.customData = i), n(s);
        }),
        (r.type = "text/javascript"),
        (r.charset = "UTF-8"),
        Pb().appendChild(r);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript:
    "https://www.google.com/recaptcha/enterprise.js?render=",
});
xb("Browser");
var kb = "firebase",
  Ib = "10.12.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ pn(kb, Ib, "app");
const Nb = {
    apiKey: "AIzaSyCyLlVtd6Swn8MYdj8qJksuwszxf0UHOx8",
    authDomain: "mern-estate-f92cb.firebaseapp.com",
    projectId: "mern-estate-f92cb",
    storageBucket: "mern-estate-f92cb.appspot.com",
    messagingSenderId: "250421171091",
    appId: "1:250421171091:web:4d4f8266f5778eeea38e66",
  },
  fa = Yg(Nb);
function Nv() {
  const e = Ic(),
    t = zt(),
    n = async () => {
      try {
        const r = new Et(),
          i = bb(fa),
          s = await MC(i, r),
          l = await (
            await fetch("/api/auth/google", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: s.user.displayName,
                email: s.user.email,
                photo: s.user.photoURL,
              }),
            })
          ).json();
        e(Fg(l)), t("/");
      } catch (r) {
        console.log("Could not sign in with Google.", r);
      }
    };
  return m.jsx("button", {
    type: "button",
    onClick: n,
    className:
      "bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95",
    children: "Continue with Google",
  });
}
const Ob = () => {
    const [e, t] = C.useState({}),
      { loading: n, error: r } = En((a) => a.user),
      i = Ic(),
      s = zt(),
      o = (a) => {
        t({ ...e, [a.target.id]: a.target.value });
      },
      l = async (a) => {
        a.preventDefault();
        try {
          i(W1());
          const c = await (
            await fetch("/api/auth/signin", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e),
            })
          ).json();
          if (c.success === !1) {
            i(Xf(c.message));
            return;
          }
          i(Fg(c)), s("/");
        } catch {
          i(Xf(data.message));
        }
      };
    return m.jsxs("div", {
      className: "p-3 max-w-lg mx-auto",
      children: [
        m.jsx("h1", {
          className: "text-3xl text-center font-semibold my-7",
          children: "Sign In",
        }),
        m.jsxs("form", {
          onSubmit: l,
          className: "flex flex-col gap-4",
          children: [
            m.jsx("input", {
              type: "email",
              placeholder: "email",
              className: "border p-3 rounded-lg",
              id: "email",
              onChange: o,
            }),
            m.jsx("input", {
              type: "password",
              placeholder: "password",
              className: "border p-3 rounded-lg",
              id: "password",
              onChange: o,
            }),
            m.jsx("button", {
              disabled: n,
              className:
                "bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80",
              children: n ? "loading..." : "Sign In",
            }),
            m.jsx(Nv, {}),
          ],
        }),
        m.jsxs("div", {
          className: "flex gap-2 mt-5",
          children: [
            m.jsx("p", { children: "Do not have an account?" }),
            m.jsx(ye, {
              to: "/sign-up",
              children: m.jsx("span", {
                className: "text-blue-700 ",
                children: "Sign up",
              }),
            }),
          ],
        }),
        r && m.jsx("p", { className: "text-red-500 mt-5", children: r }),
      ],
    });
  },
  Rb = () => {
    const [e, t] = C.useState({}),
      [n, r] = C.useState(null),
      [i, s] = C.useState(!1),
      o = zt(),
      l = (u) => {
        t({ ...e, [u.target.id]: u.target.value });
      },
      a = async (u) => {
        u.preventDefault();
        try {
          s(!0);
          const d = await (
            await fetch("/api/auth/signup", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e),
            })
          ).json();
          if (d.success === !1) {
            r(d.message), s(!1);
            return;
          }
          s(!1), r(null), o("/sign-in");
        } catch {
          s(!1), r(data.message);
        }
      };
    return m.jsxs("div", {
      className: "p-3 max-w-lg mx-auto",
      children: [
        m.jsx("h1", {
          className: "text-3xl text-center font-semibold my-7",
          children: "Sign Up",
        }),
        m.jsxs("form", {
          onSubmit: a,
          className: "flex flex-col gap-4",
          children: [
            m.jsx("input", {
              type: "text",
              placeholder: "username",
              className: "border p-3 rounded-lg",
              id: "username",
              onChange: l,
            }),
            m.jsx("input", {
              type: "email",
              placeholder: "email",
              className: "border p-3 rounded-lg",
              id: "email",
              onChange: l,
            }),
            m.jsx("input", {
              type: "password",
              placeholder: "password",
              className: "border p-3 rounded-lg",
              id: "password",
              onChange: l,
            }),
            m.jsx("button", {
              disabled: i,
              className:
                "bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80",
              children: i ? "loading..." : "Sign Up",
            }),
            m.jsx(Nv, {}),
          ],
        }),
        m.jsxs("div", {
          className: "flex gap-2 mt-5",
          children: [
            m.jsx("p", { children: "Have an account?" }),
            m.jsx(ye, {
              to: "/sign-in",
              children: m.jsx("span", {
                className: "text-blue-700 ",
                children: "Sign in",
              }),
            }),
          ],
        }),
        n && m.jsx("p", { className: "text-red-500 mt-5", children: n }),
      ],
    });
  },
  Lb = () =>
    m.jsxs("div", {
      className: "py-20 px-4 max-w-6xl mx-auto",
      children: [
        m.jsx("h1", {
          className: "text-3xl font-bold font-serif mb-4 text-slate-800",
          children: "About Utkarsh Estates",
        }),
        m.jsx("p", {
          className: "mb-4 text-slate-600",
          children:
            "Utkarsh Estates is a leading real estate agency that specializes in helping their clients buy, sell and rent properties in the most desirable neighbourhoods. Our team of experienced agents is dedicated to provide exceptional services to make the buying and selling process as smooth as possible.",
        }),
        m.jsx("p", {
          className: "mb-4 text-slate-600",
          children:
            "Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service and a deep understanding of the International market. Whether you're looking to buy, sell or rent a property, we are here to help you with every step all the way to the end.",
        }),
        m.jsx("p", {
          className: "mb-4 text-slate-600",
          children:
            "Our team of agents have a wealth of experience and knowledge in the real estate industry, and we're committed to providing the highest level of services to our clients. We believe that buying or selling a property should be an exciting and rewarding experience. Thus, we're dedicated to making that a reality for each and every one of our clients.",
        }),
      ],
    });
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ov = "firebasestorage.googleapis.com",
  Rv = "storageBucket",
  Ab = 2 * 60 * 1e3,
  Mb = 10 * 60 * 1e3,
  jb = 1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ee extends Ft {
  constructor(t, n, r = 0) {
    super(sl(t), `Firebase Storage: ${n} (${sl(t)})`),
      (this.status_ = r),
      (this.customData = { serverResponse: null }),
      (this._baseMessage = this.message),
      Object.setPrototypeOf(this, ee.prototype);
  }
  get status() {
    return this.status_;
  }
  set status(t) {
    this.status_ = t;
  }
  _codeEquals(t) {
    return sl(t) === this.code;
  }
  get serverResponse() {
    return this.customData.serverResponse;
  }
  set serverResponse(t) {
    (this.customData.serverResponse = t),
      this.customData.serverResponse
        ? (this.message = `${this._baseMessage}
${this.customData.serverResponse}`)
        : (this.message = this._baseMessage);
  }
}
var K;
(function (e) {
  (e.UNKNOWN = "unknown"),
    (e.OBJECT_NOT_FOUND = "object-not-found"),
    (e.BUCKET_NOT_FOUND = "bucket-not-found"),
    (e.PROJECT_NOT_FOUND = "project-not-found"),
    (e.QUOTA_EXCEEDED = "quota-exceeded"),
    (e.UNAUTHENTICATED = "unauthenticated"),
    (e.UNAUTHORIZED = "unauthorized"),
    (e.UNAUTHORIZED_APP = "unauthorized-app"),
    (e.RETRY_LIMIT_EXCEEDED = "retry-limit-exceeded"),
    (e.INVALID_CHECKSUM = "invalid-checksum"),
    (e.CANCELED = "canceled"),
    (e.INVALID_EVENT_NAME = "invalid-event-name"),
    (e.INVALID_URL = "invalid-url"),
    (e.INVALID_DEFAULT_BUCKET = "invalid-default-bucket"),
    (e.NO_DEFAULT_BUCKET = "no-default-bucket"),
    (e.CANNOT_SLICE_BLOB = "cannot-slice-blob"),
    (e.SERVER_FILE_WRONG_SIZE = "server-file-wrong-size"),
    (e.NO_DOWNLOAD_URL = "no-download-url"),
    (e.INVALID_ARGUMENT = "invalid-argument"),
    (e.INVALID_ARGUMENT_COUNT = "invalid-argument-count"),
    (e.APP_DELETED = "app-deleted"),
    (e.INVALID_ROOT_OPERATION = "invalid-root-operation"),
    (e.INVALID_FORMAT = "invalid-format"),
    (e.INTERNAL_ERROR = "internal-error"),
    (e.UNSUPPORTED_ENVIRONMENT = "unsupported-environment");
})(K || (K = {}));
function sl(e) {
  return "storage/" + e;
}
function Yc() {
  const e =
    "An unknown error occurred, please check the error payload for server response.";
  return new ee(K.UNKNOWN, e);
}
function Db(e) {
  return new ee(K.OBJECT_NOT_FOUND, "Object '" + e + "' does not exist.");
}
function Ub(e) {
  return new ee(
    K.QUOTA_EXCEEDED,
    "Quota for bucket '" +
      e +
      "' exceeded, please view quota on https://firebase.google.com/pricing/."
  );
}
function zb() {
  const e =
    "User is not authenticated, please authenticate using Firebase Authentication and try again.";
  return new ee(K.UNAUTHENTICATED, e);
}
function Fb() {
  return new ee(
    K.UNAUTHORIZED_APP,
    "This app does not have permission to access Firebase Storage on this project."
  );
}
function $b(e) {
  return new ee(
    K.UNAUTHORIZED,
    "User does not have permission to access '" + e + "'."
  );
}
function Lv() {
  return new ee(
    K.RETRY_LIMIT_EXCEEDED,
    "Max retry time for operation exceeded, please try again."
  );
}
function Av() {
  return new ee(K.CANCELED, "User canceled the upload/download.");
}
function Bb(e) {
  return new ee(K.INVALID_URL, "Invalid URL '" + e + "'.");
}
function Vb(e) {
  return new ee(
    K.INVALID_DEFAULT_BUCKET,
    "Invalid default bucket '" + e + "'."
  );
}
function Hb() {
  return new ee(
    K.NO_DEFAULT_BUCKET,
    "No default bucket found. Did you set the '" +
      Rv +
      "' property when initializing the app?"
  );
}
function Mv() {
  return new ee(
    K.CANNOT_SLICE_BLOB,
    "Cannot slice blob for upload. Please retry the upload."
  );
}
function Wb() {
  return new ee(
    K.SERVER_FILE_WRONG_SIZE,
    "Server recorded incorrect upload file size, please retry the upload."
  );
}
function Gb() {
  return new ee(
    K.NO_DOWNLOAD_URL,
    "The given file does not have any download URLs."
  );
}
function qb(e) {
  return new ee(
    K.UNSUPPORTED_ENVIRONMENT,
    `${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`
  );
}
function Eu(e) {
  return new ee(K.INVALID_ARGUMENT, e);
}
function jv() {
  return new ee(K.APP_DELETED, "The Firebase app was deleted.");
}
function Kb(e) {
  return new ee(
    K.INVALID_ROOT_OPERATION,
    "The operation '" +
      e +
      "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png')."
  );
}
function hi(e, t) {
  return new ee(
    K.INVALID_FORMAT,
    "String does not match format '" + e + "': " + t
  );
}
function Qr(e) {
  throw new ee(K.INTERNAL_ERROR, "Internal error: " + e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class De {
  constructor(t, n) {
    (this.bucket = t), (this.path_ = n);
  }
  get path() {
    return this.path_;
  }
  get isRoot() {
    return this.path.length === 0;
  }
  fullServerUrl() {
    const t = encodeURIComponent;
    return "/b/" + t(this.bucket) + "/o/" + t(this.path);
  }
  bucketOnlyServerUrl() {
    return "/b/" + encodeURIComponent(this.bucket) + "/o";
  }
  static makeFromBucketSpec(t, n) {
    let r;
    try {
      r = De.makeFromUrl(t, n);
    } catch {
      return new De(t, "");
    }
    if (r.path === "") return r;
    throw Vb(t);
  }
  static makeFromUrl(t, n) {
    let r = null;
    const i = "([A-Za-z0-9.\\-_]+)";
    function s(w) {
      w.path.charAt(w.path.length - 1) === "/" &&
        (w.path_ = w.path_.slice(0, -1));
    }
    const o = "(/(.*))?$",
      l = new RegExp("^gs://" + i + o, "i"),
      a = { bucket: 1, path: 3 };
    function u(w) {
      w.path_ = decodeURIComponent(w.path);
    }
    const c = "v[A-Za-z0-9_]+",
      d = n.replace(/[.]/g, "\\."),
      f = "(/([^?#]*).*)?$",
      v = new RegExp(`^https?://${d}/${c}/b/${i}/o${f}`, "i"),
      y = { bucket: 1, path: 3 },
      _ = n === Ov ? "(?:storage.googleapis.com|storage.cloud.google.com)" : n,
      S = "([^?#]*)",
      p = new RegExp(`^https?://${_}/${i}/${S}`, "i"),
      h = [
        { regex: l, indices: a, postModify: s },
        { regex: v, indices: y, postModify: u },
        { regex: p, indices: { bucket: 1, path: 2 }, postModify: u },
      ];
    for (let w = 0; w < h.length; w++) {
      const x = h[w],
        E = x.regex.exec(t);
      if (E) {
        const P = E[x.indices.bucket];
        let b = E[x.indices.path];
        b || (b = ""), (r = new De(P, b)), x.postModify(r);
        break;
      }
    }
    if (r == null) throw Bb(t);
    return r;
  }
}
class Xb {
  constructor(t) {
    this.promise_ = Promise.reject(t);
  }
  getPromise() {
    return this.promise_;
  }
  cancel(t = !1) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Yb(e, t, n) {
  let r = 1,
    i = null,
    s = null,
    o = !1,
    l = 0;
  function a() {
    return l === 2;
  }
  let u = !1;
  function c(...S) {
    u || ((u = !0), t.apply(null, S));
  }
  function d(S) {
    i = setTimeout(() => {
      (i = null), e(v, a());
    }, S);
  }
  function f() {
    s && clearTimeout(s);
  }
  function v(S, ...p) {
    if (u) {
      f();
      return;
    }
    if (S) {
      f(), c.call(null, S, ...p);
      return;
    }
    if (a() || o) {
      f(), c.call(null, S, ...p);
      return;
    }
    r < 64 && (r *= 2);
    let h;
    l === 1 ? ((l = 2), (h = 0)) : (h = (r + Math.random()) * 1e3), d(h);
  }
  let y = !1;
  function _(S) {
    y ||
      ((y = !0),
      f(),
      !u &&
        (i !== null ? (S || (l = 2), clearTimeout(i), d(0)) : S || (l = 1)));
  }
  return (
    d(0),
    (s = setTimeout(() => {
      (o = !0), _(!0);
    }, n)),
    _
  );
}
function Qb(e) {
  e(!1);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Jb(e) {
  return e !== void 0;
}
function Zb(e) {
  return typeof e == "function";
}
function eP(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function pa(e) {
  return typeof e == "string" || e instanceof String;
}
function bp(e) {
  return Qc() && e instanceof Blob;
}
function Qc() {
  return typeof Blob < "u";
}
function Pp(e, t, n, r) {
  if (r < t) throw Eu(`Invalid value for '${e}'. Expected ${t} or greater.`);
  if (r > n) throw Eu(`Invalid value for '${e}'. Expected ${n} or less.`);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Qi(e, t, n) {
  let r = t;
  return n == null && (r = `https://${t}`), `${n}://${r}/v0${e}`;
}
function Dv(e) {
  const t = encodeURIComponent;
  let n = "?";
  for (const r in e)
    if (e.hasOwnProperty(r)) {
      const i = t(r) + "=" + t(e[r]);
      n = n + i + "&";
    }
  return (n = n.slice(0, -1)), n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Un;
(function (e) {
  (e[(e.NO_ERROR = 0)] = "NO_ERROR"),
    (e[(e.NETWORK_ERROR = 1)] = "NETWORK_ERROR"),
    (e[(e.ABORT = 2)] = "ABORT");
})(Un || (Un = {}));
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Uv(e, t) {
  const n = e >= 500 && e < 600,
    i = [408, 429].indexOf(e) !== -1,
    s = t.indexOf(e) !== -1;
  return n || i || s;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tP {
  constructor(t, n, r, i, s, o, l, a, u, c, d, f = !0) {
    (this.url_ = t),
      (this.method_ = n),
      (this.headers_ = r),
      (this.body_ = i),
      (this.successCodes_ = s),
      (this.additionalRetryCodes_ = o),
      (this.callback_ = l),
      (this.errorCallback_ = a),
      (this.timeout_ = u),
      (this.progressCallback_ = c),
      (this.connectionFactory_ = d),
      (this.retry = f),
      (this.pendingConnection_ = null),
      (this.backoffId_ = null),
      (this.canceled_ = !1),
      (this.appDelete_ = !1),
      (this.promise_ = new Promise((v, y) => {
        (this.resolve_ = v), (this.reject_ = y), this.start_();
      }));
  }
  start_() {
    const t = (r, i) => {
        if (i) {
          r(!1, new Es(!1, null, !0));
          return;
        }
        const s = this.connectionFactory_();
        this.pendingConnection_ = s;
        const o = (l) => {
          const a = l.loaded,
            u = l.lengthComputable ? l.total : -1;
          this.progressCallback_ !== null && this.progressCallback_(a, u);
        };
        this.progressCallback_ !== null && s.addUploadProgressListener(o),
          s
            .send(this.url_, this.method_, this.body_, this.headers_)
            .then(() => {
              this.progressCallback_ !== null &&
                s.removeUploadProgressListener(o),
                (this.pendingConnection_ = null);
              const l = s.getErrorCode() === Un.NO_ERROR,
                a = s.getStatus();
              if (!l || (Uv(a, this.additionalRetryCodes_) && this.retry)) {
                const c = s.getErrorCode() === Un.ABORT;
                r(!1, new Es(!1, null, c));
                return;
              }
              const u = this.successCodes_.indexOf(a) !== -1;
              r(!0, new Es(u, s));
            });
      },
      n = (r, i) => {
        const s = this.resolve_,
          o = this.reject_,
          l = i.connection;
        if (i.wasSuccessCode)
          try {
            const a = this.callback_(l, l.getResponse());
            Jb(a) ? s(a) : s();
          } catch (a) {
            o(a);
          }
        else if (l !== null) {
          const a = Yc();
          (a.serverResponse = l.getErrorText()),
            this.errorCallback_ ? o(this.errorCallback_(l, a)) : o(a);
        } else if (i.canceled) {
          const a = this.appDelete_ ? jv() : Av();
          o(a);
        } else {
          const a = Lv();
          o(a);
        }
      };
    this.canceled_
      ? n(!1, new Es(!1, null, !0))
      : (this.backoffId_ = Yb(t, n, this.timeout_));
  }
  getPromise() {
    return this.promise_;
  }
  cancel(t) {
    (this.canceled_ = !0),
      (this.appDelete_ = t || !1),
      this.backoffId_ !== null && Qb(this.backoffId_),
      this.pendingConnection_ !== null && this.pendingConnection_.abort();
  }
}
class Es {
  constructor(t, n, r) {
    (this.wasSuccessCode = t), (this.connection = n), (this.canceled = !!r);
  }
}
function nP(e, t) {
  t !== null && t.length > 0 && (e.Authorization = "Firebase " + t);
}
function rP(e, t) {
  e["X-Firebase-Storage-Version"] = "webjs/" + (t ?? "AppManager");
}
function iP(e, t) {
  t && (e["X-Firebase-GMPID"] = t);
}
function sP(e, t) {
  t !== null && (e["X-Firebase-AppCheck"] = t);
}
function oP(e, t, n, r, i, s, o = !0) {
  const l = Dv(e.urlParams),
    a = e.url + l,
    u = Object.assign({}, e.headers);
  return (
    iP(u, t),
    nP(u, n),
    rP(u, s),
    sP(u, r),
    new tP(
      a,
      e.method,
      u,
      e.body,
      e.successCodes,
      e.additionalRetryCodes,
      e.handler,
      e.errorHandler,
      e.timeout,
      e.progressCallback,
      i,
      o
    )
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function aP() {
  return typeof BlobBuilder < "u"
    ? BlobBuilder
    : typeof WebKitBlobBuilder < "u"
    ? WebKitBlobBuilder
    : void 0;
}
function lP(...e) {
  const t = aP();
  if (t !== void 0) {
    const n = new t();
    for (let r = 0; r < e.length; r++) n.append(e[r]);
    return n.getBlob();
  } else {
    if (Qc()) return new Blob(e);
    throw new ee(
      K.UNSUPPORTED_ENVIRONMENT,
      "This browser doesn't seem to support creating Blobs"
    );
  }
}
function uP(e, t, n) {
  return e.webkitSlice
    ? e.webkitSlice(t, n)
    : e.mozSlice
    ? e.mozSlice(t, n)
    : e.slice
    ? e.slice(t, n)
    : null;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cP(e) {
  if (typeof atob > "u") throw qb("base-64");
  return atob(e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dt = {
  RAW: "raw",
  BASE64: "base64",
  BASE64URL: "base64url",
  DATA_URL: "data_url",
};
class ol {
  constructor(t, n) {
    (this.data = t), (this.contentType = n || null);
  }
}
function dP(e, t) {
  switch (e) {
    case dt.RAW:
      return new ol(zv(t));
    case dt.BASE64:
    case dt.BASE64URL:
      return new ol(Fv(e, t));
    case dt.DATA_URL:
      return new ol(pP(t), hP(t));
  }
  throw Yc();
}
function zv(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r <= 127) t.push(r);
    else if (r <= 2047) t.push(192 | (r >> 6), 128 | (r & 63));
    else if ((r & 64512) === 55296)
      if (!(n < e.length - 1 && (e.charCodeAt(n + 1) & 64512) === 56320))
        t.push(239, 191, 189);
      else {
        const s = r,
          o = e.charCodeAt(++n);
        (r = 65536 | ((s & 1023) << 10) | (o & 1023)),
          t.push(
            240 | (r >> 18),
            128 | ((r >> 12) & 63),
            128 | ((r >> 6) & 63),
            128 | (r & 63)
          );
      }
    else
      (r & 64512) === 56320
        ? t.push(239, 191, 189)
        : t.push(224 | (r >> 12), 128 | ((r >> 6) & 63), 128 | (r & 63));
  }
  return new Uint8Array(t);
}
function fP(e) {
  let t;
  try {
    t = decodeURIComponent(e);
  } catch {
    throw hi(dt.DATA_URL, "Malformed data URL.");
  }
  return zv(t);
}
function Fv(e, t) {
  switch (e) {
    case dt.BASE64: {
      const i = t.indexOf("-") !== -1,
        s = t.indexOf("_") !== -1;
      if (i || s)
        throw hi(
          e,
          "Invalid character '" +
            (i ? "-" : "_") +
            "' found: is it base64url encoded?"
        );
      break;
    }
    case dt.BASE64URL: {
      const i = t.indexOf("+") !== -1,
        s = t.indexOf("/") !== -1;
      if (i || s)
        throw hi(
          e,
          "Invalid character '" +
            (i ? "+" : "/") +
            "' found: is it base64 encoded?"
        );
      t = t.replace(/-/g, "+").replace(/_/g, "/");
      break;
    }
  }
  let n;
  try {
    n = cP(t);
  } catch (i) {
    throw i.message.includes("polyfill") ? i : hi(e, "Invalid character found");
  }
  const r = new Uint8Array(n.length);
  for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
  return r;
}
class $v {
  constructor(t) {
    (this.base64 = !1), (this.contentType = null);
    const n = t.match(/^data:([^,]+)?,/);
    if (n === null)
      throw hi(
        dt.DATA_URL,
        "Must be formatted 'data:[<mediatype>][;base64],<data>"
      );
    const r = n[1] || null;
    r != null &&
      ((this.base64 = mP(r, ";base64")),
      (this.contentType = this.base64 ? r.substring(0, r.length - 7) : r)),
      (this.rest = t.substring(t.indexOf(",") + 1));
  }
}
function pP(e) {
  const t = new $v(e);
  return t.base64 ? Fv(dt.BASE64, t.rest) : fP(t.rest);
}
function hP(e) {
  return new $v(e).contentType;
}
function mP(e, t) {
  return e.length >= t.length ? e.substring(e.length - t.length) === t : !1;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yt {
  constructor(t, n) {
    let r = 0,
      i = "";
    bp(t)
      ? ((this.data_ = t), (r = t.size), (i = t.type))
      : t instanceof ArrayBuffer
      ? (n
          ? (this.data_ = new Uint8Array(t))
          : ((this.data_ = new Uint8Array(t.byteLength)),
            this.data_.set(new Uint8Array(t))),
        (r = this.data_.length))
      : t instanceof Uint8Array &&
        (n
          ? (this.data_ = t)
          : ((this.data_ = new Uint8Array(t.length)), this.data_.set(t)),
        (r = t.length)),
      (this.size_ = r),
      (this.type_ = i);
  }
  size() {
    return this.size_;
  }
  type() {
    return this.type_;
  }
  slice(t, n) {
    if (bp(this.data_)) {
      const r = this.data_,
        i = uP(r, t, n);
      return i === null ? null : new Yt(i);
    } else {
      const r = new Uint8Array(this.data_.buffer, t, n - t);
      return new Yt(r, !0);
    }
  }
  static getBlob(...t) {
    if (Qc()) {
      const n = t.map((r) => (r instanceof Yt ? r.data_ : r));
      return new Yt(lP.apply(null, n));
    } else {
      const n = t.map((o) => (pa(o) ? dP(dt.RAW, o).data : o.data_));
      let r = 0;
      n.forEach((o) => {
        r += o.byteLength;
      });
      const i = new Uint8Array(r);
      let s = 0;
      return (
        n.forEach((o) => {
          for (let l = 0; l < o.length; l++) i[s++] = o[l];
        }),
        new Yt(i, !0)
      );
    }
  }
  uploadData() {
    return this.data_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Bv(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return null;
  }
  return eP(t) ? t : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gP(e) {
  if (e.length === 0) return null;
  const t = e.lastIndexOf("/");
  return t === -1 ? "" : e.slice(0, t);
}
function vP(e, t) {
  const n = t
    .split("/")
    .filter((r) => r.length > 0)
    .join("/");
  return e.length === 0 ? n : e + "/" + n;
}
function Vv(e) {
  const t = e.lastIndexOf("/", e.length - 2);
  return t === -1 ? e : e.slice(t + 1);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yP(e, t) {
  return t;
}
class Se {
  constructor(t, n, r, i) {
    (this.server = t),
      (this.local = n || t),
      (this.writable = !!r),
      (this.xform = i || yP);
  }
}
let Ts = null;
function wP(e) {
  return !pa(e) || e.length < 2 ? e : Vv(e);
}
function Hv() {
  if (Ts) return Ts;
  const e = [];
  e.push(new Se("bucket")),
    e.push(new Se("generation")),
    e.push(new Se("metageneration")),
    e.push(new Se("name", "fullPath", !0));
  function t(s, o) {
    return wP(o);
  }
  const n = new Se("name");
  (n.xform = t), e.push(n);
  function r(s, o) {
    return o !== void 0 ? Number(o) : o;
  }
  const i = new Se("size");
  return (
    (i.xform = r),
    e.push(i),
    e.push(new Se("timeCreated")),
    e.push(new Se("updated")),
    e.push(new Se("md5Hash", null, !0)),
    e.push(new Se("cacheControl", null, !0)),
    e.push(new Se("contentDisposition", null, !0)),
    e.push(new Se("contentEncoding", null, !0)),
    e.push(new Se("contentLanguage", null, !0)),
    e.push(new Se("contentType", null, !0)),
    e.push(new Se("metadata", "customMetadata", !0)),
    (Ts = e),
    Ts
  );
}
function _P(e, t) {
  function n() {
    const r = e.bucket,
      i = e.fullPath,
      s = new De(r, i);
    return t._makeStorageReference(s);
  }
  Object.defineProperty(e, "ref", { get: n });
}
function SP(e, t, n) {
  const r = {};
  r.type = "file";
  const i = n.length;
  for (let s = 0; s < i; s++) {
    const o = n[s];
    r[o.local] = o.xform(r, t[o.server]);
  }
  return _P(r, e), r;
}
function Wv(e, t, n) {
  const r = Bv(t);
  return r === null ? null : SP(e, r, n);
}
function xP(e, t, n, r) {
  const i = Bv(t);
  if (i === null || !pa(i.downloadTokens)) return null;
  const s = i.downloadTokens;
  if (s.length === 0) return null;
  const o = encodeURIComponent;
  return s.split(",").map((u) => {
    const c = e.bucket,
      d = e.fullPath,
      f = "/b/" + o(c) + "/o/" + o(d),
      v = Qi(f, n, r),
      y = Dv({ alt: "media", token: u });
    return v + y;
  })[0];
}
function Gv(e, t) {
  const n = {},
    r = t.length;
  for (let i = 0; i < r; i++) {
    const s = t[i];
    s.writable && (n[s.server] = e[s.local]);
  }
  return JSON.stringify(n);
}
class Br {
  constructor(t, n, r, i) {
    (this.url = t),
      (this.method = n),
      (this.handler = r),
      (this.timeout = i),
      (this.urlParams = {}),
      (this.headers = {}),
      (this.body = null),
      (this.errorHandler = null),
      (this.progressCallback = null),
      (this.successCodes = [200]),
      (this.additionalRetryCodes = []);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ot(e) {
  if (!e) throw Yc();
}
function Jc(e, t) {
  function n(r, i) {
    const s = Wv(e, i, t);
    return Ot(s !== null), s;
  }
  return n;
}
function EP(e, t) {
  function n(r, i) {
    const s = Wv(e, i, t);
    return Ot(s !== null), xP(s, i, e.host, e._protocol);
  }
  return n;
}
function Ji(e) {
  function t(n, r) {
    let i;
    return (
      n.getStatus() === 401
        ? n.getErrorText().includes("Firebase App Check token is invalid")
          ? (i = Fb())
          : (i = zb())
        : n.getStatus() === 402
        ? (i = Ub(e.bucket))
        : n.getStatus() === 403
        ? (i = $b(e.path))
        : (i = r),
      (i.status = n.getStatus()),
      (i.serverResponse = r.serverResponse),
      i
    );
  }
  return t;
}
function qv(e) {
  const t = Ji(e);
  function n(r, i) {
    let s = t(r, i);
    return (
      r.getStatus() === 404 && (s = Db(e.path)),
      (s.serverResponse = i.serverResponse),
      s
    );
  }
  return n;
}
function TP(e, t, n) {
  const r = t.fullServerUrl(),
    i = Qi(r, e.host, e._protocol),
    s = "GET",
    o = e.maxOperationRetryTime,
    l = new Br(i, s, Jc(e, n), o);
  return (l.errorHandler = qv(t)), l;
}
function CP(e, t, n) {
  const r = t.fullServerUrl(),
    i = Qi(r, e.host, e._protocol),
    s = "GET",
    o = e.maxOperationRetryTime,
    l = new Br(i, s, EP(e, n), o);
  return (l.errorHandler = qv(t)), l;
}
function bP(e, t) {
  return (e && e.contentType) || (t && t.type()) || "application/octet-stream";
}
function Kv(e, t, n) {
  const r = Object.assign({}, n);
  return (
    (r.fullPath = e.path),
    (r.size = t.size()),
    r.contentType || (r.contentType = bP(null, t)),
    r
  );
}
function PP(e, t, n, r, i) {
  const s = t.bucketOnlyServerUrl(),
    o = { "X-Goog-Upload-Protocol": "multipart" };
  function l() {
    let h = "";
    for (let w = 0; w < 2; w++) h = h + Math.random().toString().slice(2);
    return h;
  }
  const a = l();
  o["Content-Type"] = "multipart/related; boundary=" + a;
  const u = Kv(t, r, i),
    c = Gv(u, n),
    d =
      "--" +
      a +
      `\r
Content-Type: application/json; charset=utf-8\r
\r
` +
      c +
      `\r
--` +
      a +
      `\r
Content-Type: ` +
      u.contentType +
      `\r
\r
`,
    f =
      `\r
--` +
      a +
      "--",
    v = Yt.getBlob(d, r, f);
  if (v === null) throw Mv();
  const y = { name: u.fullPath },
    _ = Qi(s, e.host, e._protocol),
    S = "POST",
    p = e.maxUploadRetryTime,
    g = new Br(_, S, Jc(e, n), p);
  return (
    (g.urlParams = y),
    (g.headers = o),
    (g.body = v.uploadData()),
    (g.errorHandler = Ji(t)),
    g
  );
}
class Fo {
  constructor(t, n, r, i) {
    (this.current = t),
      (this.total = n),
      (this.finalized = !!r),
      (this.metadata = i || null);
  }
}
function Zc(e, t) {
  let n = null;
  try {
    n = e.getResponseHeader("X-Goog-Upload-Status");
  } catch {
    Ot(!1);
  }
  return Ot(!!n && (t || ["active"]).indexOf(n) !== -1), n;
}
function kP(e, t, n, r, i) {
  const s = t.bucketOnlyServerUrl(),
    o = Kv(t, r, i),
    l = { name: o.fullPath },
    a = Qi(s, e.host, e._protocol),
    u = "POST",
    c = {
      "X-Goog-Upload-Protocol": "resumable",
      "X-Goog-Upload-Command": "start",
      "X-Goog-Upload-Header-Content-Length": `${r.size()}`,
      "X-Goog-Upload-Header-Content-Type": o.contentType,
      "Content-Type": "application/json; charset=utf-8",
    },
    d = Gv(o, n),
    f = e.maxUploadRetryTime;
  function v(_) {
    Zc(_);
    let S;
    try {
      S = _.getResponseHeader("X-Goog-Upload-URL");
    } catch {
      Ot(!1);
    }
    return Ot(pa(S)), S;
  }
  const y = new Br(a, u, v, f);
  return (
    (y.urlParams = l),
    (y.headers = c),
    (y.body = d),
    (y.errorHandler = Ji(t)),
    y
  );
}
function IP(e, t, n, r) {
  const i = { "X-Goog-Upload-Command": "query" };
  function s(u) {
    const c = Zc(u, ["active", "final"]);
    let d = null;
    try {
      d = u.getResponseHeader("X-Goog-Upload-Size-Received");
    } catch {
      Ot(!1);
    }
    d || Ot(!1);
    const f = Number(d);
    return Ot(!isNaN(f)), new Fo(f, r.size(), c === "final");
  }
  const o = "POST",
    l = e.maxUploadRetryTime,
    a = new Br(n, o, s, l);
  return (a.headers = i), (a.errorHandler = Ji(t)), a;
}
const kp = 256 * 1024;
function NP(e, t, n, r, i, s, o, l) {
  const a = new Fo(0, 0);
  if (
    (o
      ? ((a.current = o.current), (a.total = o.total))
      : ((a.current = 0), (a.total = r.size())),
    r.size() !== a.total)
  )
    throw Wb();
  const u = a.total - a.current;
  let c = u;
  i > 0 && (c = Math.min(c, i));
  const d = a.current,
    f = d + c;
  let v = "";
  c === 0
    ? (v = "finalize")
    : u === c
    ? (v = "upload, finalize")
    : (v = "upload");
  const y = {
      "X-Goog-Upload-Command": v,
      "X-Goog-Upload-Offset": `${a.current}`,
    },
    _ = r.slice(d, f);
  if (_ === null) throw Mv();
  function S(w, x) {
    const E = Zc(w, ["active", "final"]),
      P = a.current + c,
      b = r.size();
    let k;
    return (
      E === "final" ? (k = Jc(t, s)(w, x)) : (k = null),
      new Fo(P, b, E === "final", k)
    );
  }
  const p = "POST",
    g = t.maxUploadRetryTime,
    h = new Br(n, p, S, g);
  return (
    (h.headers = y),
    (h.body = _.uploadData()),
    (h.progressCallback = l || null),
    (h.errorHandler = Ji(e)),
    h
  );
}
const be = {
  RUNNING: "running",
  PAUSED: "paused",
  SUCCESS: "success",
  CANCELED: "canceled",
  ERROR: "error",
};
function al(e) {
  switch (e) {
    case "running":
    case "pausing":
    case "canceling":
      return be.RUNNING;
    case "paused":
      return be.PAUSED;
    case "success":
      return be.SUCCESS;
    case "canceled":
      return be.CANCELED;
    case "error":
      return be.ERROR;
    default:
      return be.ERROR;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class OP {
  constructor(t, n, r) {
    if (Zb(t) || n != null || r != null)
      (this.next = t),
        (this.error = n ?? void 0),
        (this.complete = r ?? void 0);
    else {
      const s = t;
      (this.next = s.next),
        (this.error = s.error),
        (this.complete = s.complete);
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Zn(e) {
  return (...t) => {
    Promise.resolve().then(() => e(...t));
  };
}
class RP {
  constructor() {
    (this.sent_ = !1),
      (this.xhr_ = new XMLHttpRequest()),
      this.initXhr(),
      (this.errorCode_ = Un.NO_ERROR),
      (this.sendPromise_ = new Promise((t) => {
        this.xhr_.addEventListener("abort", () => {
          (this.errorCode_ = Un.ABORT), t();
        }),
          this.xhr_.addEventListener("error", () => {
            (this.errorCode_ = Un.NETWORK_ERROR), t();
          }),
          this.xhr_.addEventListener("load", () => {
            t();
          });
      }));
  }
  send(t, n, r, i) {
    if (this.sent_) throw Qr("cannot .send() more than once");
    if (((this.sent_ = !0), this.xhr_.open(n, t, !0), i !== void 0))
      for (const s in i)
        i.hasOwnProperty(s) && this.xhr_.setRequestHeader(s, i[s].toString());
    return (
      r !== void 0 ? this.xhr_.send(r) : this.xhr_.send(), this.sendPromise_
    );
  }
  getErrorCode() {
    if (!this.sent_) throw Qr("cannot .getErrorCode() before sending");
    return this.errorCode_;
  }
  getStatus() {
    if (!this.sent_) throw Qr("cannot .getStatus() before sending");
    try {
      return this.xhr_.status;
    } catch {
      return -1;
    }
  }
  getResponse() {
    if (!this.sent_) throw Qr("cannot .getResponse() before sending");
    return this.xhr_.response;
  }
  getErrorText() {
    if (!this.sent_) throw Qr("cannot .getErrorText() before sending");
    return this.xhr_.statusText;
  }
  abort() {
    this.xhr_.abort();
  }
  getResponseHeader(t) {
    return this.xhr_.getResponseHeader(t);
  }
  addUploadProgressListener(t) {
    this.xhr_.upload != null &&
      this.xhr_.upload.addEventListener("progress", t);
  }
  removeUploadProgressListener(t) {
    this.xhr_.upload != null &&
      this.xhr_.upload.removeEventListener("progress", t);
  }
}
class LP extends RP {
  initXhr() {
    this.xhr_.responseType = "text";
  }
}
function er() {
  return new LP();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AP {
  constructor(t, n, r = null) {
    (this._transferred = 0),
      (this._needToFetchStatus = !1),
      (this._needToFetchMetadata = !1),
      (this._observers = []),
      (this._error = void 0),
      (this._uploadUrl = void 0),
      (this._request = void 0),
      (this._chunkMultiplier = 1),
      (this._resolve = void 0),
      (this._reject = void 0),
      (this._ref = t),
      (this._blob = n),
      (this._metadata = r),
      (this._mappings = Hv()),
      (this._resumable = this._shouldDoResumable(this._blob)),
      (this._state = "running"),
      (this._errorHandler = (i) => {
        if (
          ((this._request = void 0),
          (this._chunkMultiplier = 1),
          i._codeEquals(K.CANCELED))
        )
          (this._needToFetchStatus = !0), this.completeTransitions_();
        else {
          const s = this.isExponentialBackoffExpired();
          if (Uv(i.status, []))
            if (s) i = Lv();
            else {
              (this.sleepTime = Math.max(this.sleepTime * 2, jb)),
                (this._needToFetchStatus = !0),
                this.completeTransitions_();
              return;
            }
          (this._error = i), this._transition("error");
        }
      }),
      (this._metadataErrorHandler = (i) => {
        (this._request = void 0),
          i._codeEquals(K.CANCELED)
            ? this.completeTransitions_()
            : ((this._error = i), this._transition("error"));
      }),
      (this.sleepTime = 0),
      (this.maxSleepTime = this._ref.storage.maxUploadRetryTime),
      (this._promise = new Promise((i, s) => {
        (this._resolve = i), (this._reject = s), this._start();
      })),
      this._promise.then(null, () => {});
  }
  isExponentialBackoffExpired() {
    return this.sleepTime > this.maxSleepTime;
  }
  _makeProgressCallback() {
    const t = this._transferred;
    return (n) => this._updateProgress(t + n);
  }
  _shouldDoResumable(t) {
    return t.size() > 256 * 1024;
  }
  _start() {
    this._state === "running" &&
      this._request === void 0 &&
      (this._resumable
        ? this._uploadUrl === void 0
          ? this._createResumable()
          : this._needToFetchStatus
          ? this._fetchStatus()
          : this._needToFetchMetadata
          ? this._fetchMetadata()
          : (this.pendingTimeout = setTimeout(() => {
              (this.pendingTimeout = void 0), this._continueUpload();
            }, this.sleepTime))
        : this._oneShotUpload());
  }
  _resolveToken(t) {
    Promise.all([
      this._ref.storage._getAuthToken(),
      this._ref.storage._getAppCheckToken(),
    ]).then(([n, r]) => {
      switch (this._state) {
        case "running":
          t(n, r);
          break;
        case "canceling":
          this._transition("canceled");
          break;
        case "pausing":
          this._transition("paused");
          break;
      }
    });
  }
  _createResumable() {
    this._resolveToken((t, n) => {
      const r = kP(
          this._ref.storage,
          this._ref._location,
          this._mappings,
          this._blob,
          this._metadata
        ),
        i = this._ref.storage._makeRequest(r, er, t, n);
      (this._request = i),
        i.getPromise().then((s) => {
          (this._request = void 0),
            (this._uploadUrl = s),
            (this._needToFetchStatus = !1),
            this.completeTransitions_();
        }, this._errorHandler);
    });
  }
  _fetchStatus() {
    const t = this._uploadUrl;
    this._resolveToken((n, r) => {
      const i = IP(this._ref.storage, this._ref._location, t, this._blob),
        s = this._ref.storage._makeRequest(i, er, n, r);
      (this._request = s),
        s.getPromise().then((o) => {
          (o = o),
            (this._request = void 0),
            this._updateProgress(o.current),
            (this._needToFetchStatus = !1),
            o.finalized && (this._needToFetchMetadata = !0),
            this.completeTransitions_();
        }, this._errorHandler);
    });
  }
  _continueUpload() {
    const t = kp * this._chunkMultiplier,
      n = new Fo(this._transferred, this._blob.size()),
      r = this._uploadUrl;
    this._resolveToken((i, s) => {
      let o;
      try {
        o = NP(
          this._ref._location,
          this._ref.storage,
          r,
          this._blob,
          t,
          this._mappings,
          n,
          this._makeProgressCallback()
        );
      } catch (a) {
        (this._error = a), this._transition("error");
        return;
      }
      const l = this._ref.storage._makeRequest(o, er, i, s, !1);
      (this._request = l),
        l.getPromise().then((a) => {
          this._increaseMultiplier(),
            (this._request = void 0),
            this._updateProgress(a.current),
            a.finalized
              ? ((this._metadata = a.metadata), this._transition("success"))
              : this.completeTransitions_();
        }, this._errorHandler);
    });
  }
  _increaseMultiplier() {
    kp * this._chunkMultiplier * 2 < 32 * 1024 * 1024 &&
      (this._chunkMultiplier *= 2);
  }
  _fetchMetadata() {
    this._resolveToken((t, n) => {
      const r = TP(this._ref.storage, this._ref._location, this._mappings),
        i = this._ref.storage._makeRequest(r, er, t, n);
      (this._request = i),
        i.getPromise().then((s) => {
          (this._request = void 0),
            (this._metadata = s),
            this._transition("success");
        }, this._metadataErrorHandler);
    });
  }
  _oneShotUpload() {
    this._resolveToken((t, n) => {
      const r = PP(
          this._ref.storage,
          this._ref._location,
          this._mappings,
          this._blob,
          this._metadata
        ),
        i = this._ref.storage._makeRequest(r, er, t, n);
      (this._request = i),
        i.getPromise().then((s) => {
          (this._request = void 0),
            (this._metadata = s),
            this._updateProgress(this._blob.size()),
            this._transition("success");
        }, this._errorHandler);
    });
  }
  _updateProgress(t) {
    const n = this._transferred;
    (this._transferred = t), this._transferred !== n && this._notifyObservers();
  }
  _transition(t) {
    if (this._state !== t)
      switch (t) {
        case "canceling":
        case "pausing":
          (this._state = t),
            this._request !== void 0
              ? this._request.cancel()
              : this.pendingTimeout &&
                (clearTimeout(this.pendingTimeout),
                (this.pendingTimeout = void 0),
                this.completeTransitions_());
          break;
        case "running":
          const n = this._state === "paused";
          (this._state = t), n && (this._notifyObservers(), this._start());
          break;
        case "paused":
          (this._state = t), this._notifyObservers();
          break;
        case "canceled":
          (this._error = Av()), (this._state = t), this._notifyObservers();
          break;
        case "error":
          (this._state = t), this._notifyObservers();
          break;
        case "success":
          (this._state = t), this._notifyObservers();
          break;
      }
  }
  completeTransitions_() {
    switch (this._state) {
      case "pausing":
        this._transition("paused");
        break;
      case "canceling":
        this._transition("canceled");
        break;
      case "running":
        this._start();
        break;
    }
  }
  get snapshot() {
    const t = al(this._state);
    return {
      bytesTransferred: this._transferred,
      totalBytes: this._blob.size(),
      state: t,
      metadata: this._metadata,
      task: this,
      ref: this._ref,
    };
  }
  on(t, n, r, i) {
    const s = new OP(n || void 0, r || void 0, i || void 0);
    return (
      this._addObserver(s),
      () => {
        this._removeObserver(s);
      }
    );
  }
  then(t, n) {
    return this._promise.then(t, n);
  }
  catch(t) {
    return this.then(null, t);
  }
  _addObserver(t) {
    this._observers.push(t), this._notifyObserver(t);
  }
  _removeObserver(t) {
    const n = this._observers.indexOf(t);
    n !== -1 && this._observers.splice(n, 1);
  }
  _notifyObservers() {
    this._finishPromise(),
      this._observers.slice().forEach((n) => {
        this._notifyObserver(n);
      });
  }
  _finishPromise() {
    if (this._resolve !== void 0) {
      let t = !0;
      switch (al(this._state)) {
        case be.SUCCESS:
          Zn(this._resolve.bind(null, this.snapshot))();
          break;
        case be.CANCELED:
        case be.ERROR:
          const n = this._reject;
          Zn(n.bind(null, this._error))();
          break;
        default:
          t = !1;
          break;
      }
      t && ((this._resolve = void 0), (this._reject = void 0));
    }
  }
  _notifyObserver(t) {
    switch (al(this._state)) {
      case be.RUNNING:
      case be.PAUSED:
        t.next && Zn(t.next.bind(t, this.snapshot))();
        break;
      case be.SUCCESS:
        t.complete && Zn(t.complete.bind(t))();
        break;
      case be.CANCELED:
      case be.ERROR:
        t.error && Zn(t.error.bind(t, this._error))();
        break;
      default:
        t.error && Zn(t.error.bind(t, this._error))();
    }
  }
  resume() {
    const t = this._state === "paused" || this._state === "pausing";
    return t && this._transition("running"), t;
  }
  pause() {
    const t = this._state === "running";
    return t && this._transition("pausing"), t;
  }
  cancel() {
    const t = this._state === "running" || this._state === "pausing";
    return t && this._transition("canceling"), t;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xn {
  constructor(t, n) {
    (this._service = t),
      n instanceof De
        ? (this._location = n)
        : (this._location = De.makeFromUrl(n, t.host));
  }
  toString() {
    return "gs://" + this._location.bucket + "/" + this._location.path;
  }
  _newRef(t, n) {
    return new Xn(t, n);
  }
  get root() {
    const t = new De(this._location.bucket, "");
    return this._newRef(this._service, t);
  }
  get bucket() {
    return this._location.bucket;
  }
  get fullPath() {
    return this._location.path;
  }
  get name() {
    return Vv(this._location.path);
  }
  get storage() {
    return this._service;
  }
  get parent() {
    const t = gP(this._location.path);
    if (t === null) return null;
    const n = new De(this._location.bucket, t);
    return new Xn(this._service, n);
  }
  _throwIfRoot(t) {
    if (this._location.path === "") throw Kb(t);
  }
}
function MP(e, t, n) {
  return e._throwIfRoot("uploadBytesResumable"), new AP(e, new Yt(t), n);
}
function jP(e) {
  e._throwIfRoot("getDownloadURL");
  const t = CP(e.storage, e._location, Hv());
  return e.storage.makeRequestWithTokens(t, er).then((n) => {
    if (n === null) throw Gb();
    return n;
  });
}
function DP(e, t) {
  const n = vP(e._location.path, t),
    r = new De(e._location.bucket, n);
  return new Xn(e.storage, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function UP(e) {
  return /^[A-Za-z]+:\/\//.test(e);
}
function zP(e, t) {
  return new Xn(e, t);
}
function Xv(e, t) {
  if (e instanceof ed) {
    const n = e;
    if (n._bucket == null) throw Hb();
    const r = new Xn(n, n._bucket);
    return t != null ? Xv(r, t) : r;
  } else return t !== void 0 ? DP(e, t) : e;
}
function FP(e, t) {
  if (t && UP(t)) {
    if (e instanceof ed) return zP(e, t);
    throw Eu(
      "To use ref(service, url), the first argument must be a Storage instance."
    );
  } else return Xv(e, t);
}
function Ip(e, t) {
  const n = t == null ? void 0 : t[Rv];
  return n == null ? null : De.makeFromBucketSpec(n, e);
}
function $P(e, t, n, r = {}) {
  (e.host = `${t}:${n}`), (e._protocol = "http");
  const { mockUserToken: i } = r;
  i &&
    (e._overrideAuthToken =
      typeof i == "string" ? i : lE(i, e.app.options.projectId));
}
class ed {
  constructor(t, n, r, i, s) {
    (this.app = t),
      (this._authProvider = n),
      (this._appCheckProvider = r),
      (this._url = i),
      (this._firebaseVersion = s),
      (this._bucket = null),
      (this._host = Ov),
      (this._protocol = "https"),
      (this._appId = null),
      (this._deleted = !1),
      (this._maxOperationRetryTime = Ab),
      (this._maxUploadRetryTime = Mb),
      (this._requests = new Set()),
      i != null
        ? (this._bucket = De.makeFromBucketSpec(i, this._host))
        : (this._bucket = Ip(this._host, this.app.options));
  }
  get host() {
    return this._host;
  }
  set host(t) {
    (this._host = t),
      this._url != null
        ? (this._bucket = De.makeFromBucketSpec(this._url, t))
        : (this._bucket = Ip(t, this.app.options));
  }
  get maxUploadRetryTime() {
    return this._maxUploadRetryTime;
  }
  set maxUploadRetryTime(t) {
    Pp("time", 0, Number.POSITIVE_INFINITY, t), (this._maxUploadRetryTime = t);
  }
  get maxOperationRetryTime() {
    return this._maxOperationRetryTime;
  }
  set maxOperationRetryTime(t) {
    Pp("time", 0, Number.POSITIVE_INFINITY, t),
      (this._maxOperationRetryTime = t);
  }
  async _getAuthToken() {
    if (this._overrideAuthToken) return this._overrideAuthToken;
    const t = this._authProvider.getImmediate({ optional: !0 });
    if (t) {
      const n = await t.getToken();
      if (n !== null) return n.accessToken;
    }
    return null;
  }
  async _getAppCheckToken() {
    const t = this._appCheckProvider.getImmediate({ optional: !0 });
    return t ? (await t.getToken()).token : null;
  }
  _delete() {
    return (
      this._deleted ||
        ((this._deleted = !0),
        this._requests.forEach((t) => t.cancel()),
        this._requests.clear()),
      Promise.resolve()
    );
  }
  _makeStorageReference(t) {
    return new Xn(this, t);
  }
  _makeRequest(t, n, r, i, s = !0) {
    if (this._deleted) return new Xb(jv());
    {
      const o = oP(t, this._appId, r, i, n, this._firebaseVersion, s);
      return (
        this._requests.add(o),
        o.getPromise().then(
          () => this._requests.delete(o),
          () => this._requests.delete(o)
        ),
        o
      );
    }
  }
  async makeRequestWithTokens(t, n) {
    const [r, i] = await Promise.all([
      this._getAuthToken(),
      this._getAppCheckToken(),
    ]);
    return this._makeRequest(t, n, r, i).getPromise();
  }
}
const Np = "@firebase/storage",
  Op = "0.12.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yv = "storage";
function td(e, t, n) {
  return (e = vt(e)), MP(e, t, n);
}
function nd(e) {
  return (e = vt(e)), jP(e);
}
function rd(e, t) {
  return (e = vt(e)), FP(e, t);
}
function id(e = Qg(), t) {
  e = vt(e);
  const r = Uc(e, Yv).getImmediate({ identifier: t }),
    i = oE("storage");
  return i && BP(r, ...i), r;
}
function BP(e, t, n, r = {}) {
  $P(e, t, n, r);
}
function VP(e, { instanceIdentifier: t }) {
  const n = e.getProvider("app").getImmediate(),
    r = e.getProvider("auth-internal"),
    i = e.getProvider("app-check-internal");
  return new ed(n, r, i, t, Fr);
}
function HP() {
  Rr(new Gn(Yv, VP, "PUBLIC").setMultipleInstances(!0)),
    pn(Np, Op, ""),
    pn(Np, Op, "esm2017");
}
HP();
const WP = () => {
    const e = C.useRef(null),
      { currentUser: t, loading: n, error: r } = En((T) => T.user),
      [i, s] = C.useState(void 0),
      [o, l] = C.useState(0),
      [a, u] = C.useState(!1),
      [c, d] = C.useState({}),
      [f, v] = C.useState(!1),
      [y, _] = C.useState([]),
      [S, p] = C.useState(!1),
      g = Ic(),
      h = (T) => {
        const N = id(fa),
          L = new Date().getTime() + T.name,
          M = rd(N, L),
          z = td(M, T);
        z.on(
          "state_changed",
          (V) => {
            const he = (V.bytesTransferred / V.totalBytes) * 100;
            l(Math.round(he)), console.log(o);
          },
          (V) => {
            u(!0);
          },
          () => {
            nd(z.snapshot.ref).then((V) => {
              d({ ...c, avatar: V });
            });
          }
        );
      };
    C.useEffect(() => {
      i && h(i);
    }, [i]);
    const w = (T) => {
        d({ ...c, [T.target.id]: T.target.value });
      },
      x = async (T) => {
        T.preventDefault();
        try {
          g(G1());
          const L = await (
            await fetch(`/api/user/update/${t._id}`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(c),
            })
          ).json();
          if (L.success === !1) {
            g(Yf(L.message));
            return;
          }
          g(q1(L)), v(!0);
        } catch (N) {
          g(Yf(N.message));
        }
      },
      E = async () => {
        try {
          g(K1());
          const N = await (
            await fetch(`api/user/delete/${t._id}`, { method: "DELETE" })
          ).json();
          if (N.success === !1) {
            g(Qf(N.message));
            return;
          }
          g(X1(N));
        } catch (T) {
          g(Qf(T.message));
        }
      },
      P = async () => {
        try {
          g(Y1());
          const N = await (await fetch("/api/auth/signout")).json();
          if (N.success === !1) {
            g(Jf(N.message));
            return;
          }
          g(Q1());
        } catch {
          g(Jf(data.message));
        }
      },
      b = async () => {
        try {
          p(!1);
          const N = await (await fetch(`/api/user/listings/${t._id}`)).json();
          if (N.success === !1) {
            p(!0);
            return;
          }
          _(N);
        } catch {
          p(!0);
        }
      },
      k = async (T) => {
        try {
          const L = await (
            await fetch(`/api/listing/delete/${T}`, { method: "DELETE" })
          ).json();
          if (L.success === !1) {
            console.log(L.message);
            return;
          }
          _((M) => {
            const z = M.filter((V) => V._id !== T);
            return console.log("Updated listings:", z), z;
          });
        } catch (N) {
          console.log(N.message);
        }
      };
    return m.jsxs("div", {
      className: "p-3 max-w-lg mx-auto",
      children: [
        m.jsx("h1", {
          className: "text-3xl font-semibold text-center my-7",
          children: "Profile",
        }),
        m.jsxs("form", {
          onSubmit: x,
          className: "flex flex-col gap-4",
          children: [
            m.jsx("input", {
              onChange: (T) => s(T.target.files[0]),
              type: "file",
              ref: e,
              hidden: !0,
              accept: "image/*",
            }),
            m.jsx("img", {
              onClick: () => e.current.click(),
              src: c.avatar || t.avatar,
              alt: "Profile",
              className:
                "rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2",
            }),
            m.jsx("p", {
              className: "text-sm self-center",
              children: a
                ? m.jsx("span", {
                    className: "text-red-700",
                    children:
                      "Error uploading image (Image must be less than 2MB.)",
                  })
                : o > 0 && o < 100
                ? m.jsx("span", {
                    className: "text-slate-700",
                    children: `Uploading ${o}%`,
                  })
                : o === 100
                ? m.jsx("span", {
                    className: "text-green-600",
                    children: "Image uploaded successfully!",
                  })
                : "",
            }),
            m.jsx("input", {
              type: "text",
              placeholder: "username",
              defaultValue: t.username,
              id: "username",
              className: "border p-3 rounded-lg",
              onChange: w,
            }),
            m.jsx("input", {
              type: "text",
              placeholder: "email",
              defaultValue: t.email,
              id: "email",
              className: "border p-3 rounded-lg",
              onChange: w,
            }),
            m.jsx("input", {
              type: "password",
              placeholder: "password",
              id: "password",
              className: "border p-3 rounded-lg",
              onChange: w,
            }),
            m.jsx("button", {
              disabled: n,
              className:
                "bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80",
              children: n ? "loading..." : "update",
            }),
            m.jsx(ye, {
              className:
                "bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95",
              to: "/create-listing",
              children: "Create Listing",
            }),
          ],
        }),
        m.jsxs("div", {
          className: "flex justify-between my-5",
          children: [
            m.jsx("span", {
              onClick: E,
              className: "text-red-700 cursor-pointer ",
              children: "Delete Account",
            }),
            m.jsx("span", {
              onClick: P,
              className: "text-red-700 cursor-pointer ",
              children: "Sign Out",
            }),
          ],
        }),
        m.jsx("p", { className: "text-red-700 mt-5", children: r || "" }),
        m.jsx("p", {
          className: "text-green-600 mt-5",
          children: f ? "User update Successful!" : "",
        }),
        m.jsx("button", {
          onClick: b,
          className: "text-green-600 font-bold w-full",
          children: "Show Listings",
        }),
        m.jsx("p", {
          className: "text-red-700 mt-5 text-sm",
          children: S ? "Error showing listings!" : "",
        }),
        y &&
          y.length > 0 &&
          m.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [
              m.jsx("h1", {
                className: "text-center text-2xl font-semibold",
                children: "Your Listings",
              }),
              y.map((T) =>
                m.jsxs(
                  "div",
                  {
                    className:
                      "flex justify-between items-center gap-6 border rounded-lg p-3",
                    children: [
                      m.jsx(ye, {
                        to: `/listing/${T._id}`,
                        children: m.jsx("img", {
                          src: T.imageUrls[0],
                          alt: "Cover Image",
                          className: "h-16 w-16 object-contain",
                        }),
                      }),
                      m.jsx(ye, {
                        to: `/listing/${T._id}`,
                        className:
                          "text-slate-700 font-semibold flex-1 hover:underline truncate",
                        children: m.jsx("p", { children: T.name }),
                      }),
                      m.jsxs("div", {
                        className: "flex flex-col items-center",
                        children: [
                          m.jsx("button", {
                            onClick: () => k(T._id),
                            className: "text-red-700 uppercase",
                            children: "Delete",
                          }),
                          m.jsx(ye, {
                            to: `/update-listing/${T._id}`,
                            children: m.jsx("button", {
                              className: "text-green-700 uppercase",
                              children: "Edit",
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  T._id
                )
              ),
            ],
          }),
      ],
    });
  },
  GP = () =>
    m.jsx(ye, {
      to: "/",
      children: m.jsxs("h1", {
        className: "font-bold text-sm sm:text-xl flex flex-wrap",
        children: [
          m.jsx("span", { className: "text-slate-500", children: "Utkarsh" }),
          m.jsx("span", { className: "text-slate-700", children: "Estates" }),
        ],
      }),
    });
function qP(e) {
  return xn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z",
        },
        child: [],
      },
    ],
  })(e);
}
function KP(e) {
  return xn({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z",
        },
        child: [],
      },
    ],
  })(e);
}
function XP(e) {
  return xn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M112 128c0-29.5 16.2-55 40-68.9V256h48V48h48v208h48V59.1c23.8 13.9 40 39.4 40 68.9v128h48V128C384 57.3 326.7 0 256 0h-64C121.3 0 64 57.3 64 128v128h48zm334.3 213.9l-10.7-32c-4.4-13.1-16.6-21.9-30.4-21.9H42.7c-13.8 0-26 8.8-30.4 21.9l-10.7 32C-5.2 362.6 10.2 384 32 384v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V384h256v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V384c21.8 0 37.2-21.4 30.3-42.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function YP(e) {
  return xn({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
        },
        child: [],
      },
    ],
  })(e);
}
function QP(e) {
  return xn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM240 320h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h96c52.9 0 96 43.1 96 96s-43.1 96-96 96zm0-128h-48v64h48c17.6 0 32-14.4 32-32s-14.4-32-32-32z",
        },
        child: [],
      },
    ],
  })(e);
}
function JP(e) {
  return xn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
        },
        child: [],
      },
    ],
  })(e);
}
function ZP(e) {
  return xn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z",
        },
        child: [],
      },
    ],
  })(e);
}
const ek = () => {
    const [e, t] = C.useState(""),
      n = zt(),
      r = (i) => {
        i.preventDefault();
        const s = new URLSearchParams(window.location.search);
        s.set("searchTerm", e);
        const o = s.toString();
        n(`/search?${o}`);
      };
    return (
      C.useEffect(() => {
        const s = new URLSearchParams(location.search).get("searchTerm");
        s && t(s);
      }, [location.search]),
      m.jsxs("form", {
        onSubmit: r,
        className: "bg-slate-100 p-3 rounded-lg flex items-center",
        children: [
          m.jsx("input", {
            type: "text",
            placeholder: "Search...",
            className: "bg-transparent focus:outline-none w-24 sm:w-64",
            value: e,
            onChange: (i) => t(i.target.value),
          }),
          m.jsx("button", {
            children: m.jsx(JP, { className: "text-slate-600" }),
          }),
        ],
      })
    );
  },
  tk = () => {
    const { currentUser: e } = En((t) => t.user);
    return m.jsxs("ul", {
      className: "flex gap-10",
      children: [
        m.jsx(ye, {
          to: "/",
          children: m.jsx("li", {
            className: "hidden sm:inline text-slate-700 hover:underline",
            children: "Home",
          }),
        }),
        m.jsx(ye, {
          to: "/about",
          children: m.jsx("li", {
            className: "hidden sm:inline text-slate-700 hover:underline",
            children: "About",
          }),
        }),
        m.jsx(ye, {
          to: "/profile",
          children: e
            ? m.jsx("img", {
                className: "rounded-full h-7 w-7 object-cover",
                src: e.avatar,
                alt: "profile",
              })
            : m.jsx("li", {
                className: "text-slate-700 hover:underline",
                children: "Sign in",
              }),
        }),
      ],
    });
  },
  nk = () => (
    En((e) => e.user),
    m.jsx("header", {
      className: "bg-slate-200 shadow-md ",
      children: m.jsxs("div", {
        className: "flex justify-between items-center max-w-6xl mx-auto p-3",
        children: [m.jsx(GP, {}), m.jsx(ek, {}), m.jsx(tk, {})],
      }),
    })
  );
function rk() {
  const { currentUser: e } = En((t) => t.user);
  return e ? m.jsx(E_, {}) : m.jsx(x_, { to: "/sign-in" });
}
function ik() {
  const { currentUser: e } = En((h) => h.user),
    t = zt(),
    [n, r] = C.useState([]),
    [i, s] = C.useState({
      imageUrls: [],
      name: "",
      description: "",
      address: "",
      type: "rent",
      bedrooms: 1,
      bathrooms: 1,
      regularPrice: 50,
      discountPrice: 0,
      offer: !1,
      parking: !1,
      furnished: !1,
    }),
    [o, l] = C.useState(!1),
    [a, u] = C.useState(!1),
    [c, d] = C.useState(!1),
    [f, v] = C.useState(!1),
    y = async (h) =>
      new Promise((w, x) => {
        const E = id(fa),
          P = new Date().getTime() + h.name,
          b = rd(E, P),
          k = td(b, h);
        k.on(
          "state_changed",
          (T) => {
            const N = T.bytesTransferred / T.totalBytes / 100;
            console.log(`Upload is ${N}% done.`);
          },
          (T) => {
            x(T);
          },
          () => {
            nd(k.snapshot.ref).then((T) => {
              w(T);
            });
          }
        );
      }),
    _ = (h) => {
      if (
        (h.preventDefault(), n.length > 0 && n.length + i.imageUrls.length < 7)
      ) {
        u(!0), l(!1);
        const w = [];
        for (let x = 0; x < n.length; ++x) w.push(y(n[x]));
        Promise.all(w)
          .then((x) => {
            s({ ...i, imageUrls: i.imageUrls.concat(x) }), u(!1), l(!1);
          })
          .catch((x) => {
            u(!1), l("Image Upload failed! (max image size: 2 MB)");
          });
      } else u(!1), l("You can only upload upto 6 images per listing.");
    },
    S = (h) => {
      s({ ...i, imageUrls: i.imageUrls.filter((w, x) => x !== h) });
    },
    p = (h) => {
      (h.target.id === "sale" || h.target.id === "rent") &&
        s({ ...i, type: h.target.id }),
        (h.target.id === "parking" ||
          h.target.id === "furnished" ||
          h.target.id === "offer") &&
          s({ ...i, [h.target.id]: h.target.checked }),
        (h.target.type === "number" ||
          h.target.type === "text" ||
          h.target.type === "textarea") &&
          s({ ...i, [h.target.id]: h.target.value });
    },
    g = async (h) => {
      h.preventDefault();
      try {
        if (i.imageUrls.length < 1)
          return d("You must upload at least one image.");
        if (+i.regularPrice < +i.discountPrice)
          return d("Discounted price must be less than the Regular price");
        v(!0), d(!1);
        const x = await (
          await fetch("/api/listing/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...i, userRef: e._id }),
          })
        ).json();
        v(!1), x.success === !1 && d(x.message), t(`/listing/${x._id}`);
      } catch (w) {
        d(w.message), v(!1);
      }
    };
  return m.jsxs("main", {
    className: "p-3 max-w-4xl mx-auto",
    children: [
      m.jsx("h1", {
        className: "text-3xl font-semibold text-center my-7",
        children: "Create a Listing",
      }),
      m.jsxs("form", {
        onSubmit: g,
        className: "flex flex-col sm:flex-row gap-4",
        children: [
          m.jsxs("div", {
            className: "flex flex-col gap-4 flex-1",
            children: [
              m.jsx("input", {
                onChange: p,
                value: i.name,
                type: "text",
                placeholder: "Name",
                className: "border p-3 rounded-lg",
                id: "name",
                maxLength: "62",
                minLength: "10",
                required: !0,
              }),
              m.jsx("textarea", {
                onChange: p,
                value: i.description,
                type: "text",
                placeholder: "Description",
                className: "border p-3 rounded-lg",
                id: "description",
                required: !0,
              }),
              m.jsx("input", {
                onChange: p,
                value: i.address,
                type: "text",
                placeholder: "Address",
                className: "border p-3 rounded-lg",
                id: "address",
                required: !0,
              }),
              m.jsxs("div", {
                className: "flex gap-6 flex-wrap",
                children: [
                  m.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: p,
                        checked: i.type === "sale",
                        type: "checkbox",
                        id: "sale",
                        className: "w-5",
                      }),
                      m.jsx("span", { children: "Sell" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: p,
                        checked: i.type === "rent",
                        type: "checkbox",
                        id: "rent",
                        className: "w-5",
                      }),
                      m.jsx("span", { children: "Rent" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: p,
                        checked: i.parking,
                        type: "checkbox",
                        id: "parking",
                        className: "w-5",
                      }),
                      m.jsx("span", { children: "Parking spot" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: p,
                        checked: i.furnished,
                        type: "checkbox",
                        id: "furnished",
                        className: "w-5",
                      }),
                      m.jsx("span", { children: "Furnished" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: p,
                        checked: i.offer,
                        type: "checkbox",
                        id: "offer",
                        className: "w-5",
                      }),
                      m.jsx("span", { children: "Offer" }),
                    ],
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "flex flex-wrap gap-4",
                children: [
                  m.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: p,
                        value: i.bedrooms,
                        type: "number",
                        id: "bedrooms",
                        min: "1",
                        max: "10",
                        className: "p-3 border border-grey-300 rounded-lg",
                        required: !0,
                      }),
                      m.jsx("p", { children: "Beds" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: p,
                        value: i.bathrooms,
                        type: "number",
                        id: "bathrooms",
                        min: "1",
                        max: "10",
                        className: "p-3 border border-grey-300 rounded-lg",
                        required: !0,
                      }),
                      m.jsx("p", { children: "Baths" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: p,
                        value: i.regularPrice,
                        type: "number",
                        id: "regularPrice",
                        min: "50",
                        max: "1000000000",
                        className: "p-3 border border-grey-300 rounded-lg",
                        required: !0,
                      }),
                      m.jsxs("div", {
                        className: "flex flex-col items-center",
                        children: [
                          m.jsx("p", { children: "Regular Price" }),
                          i.type === "rent" &&
                            m.jsx("span", {
                              className: "text-xs",
                              children: "($ / month)",
                            }),
                        ],
                      }),
                    ],
                  }),
                  i.offer &&
                    m.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        m.jsx("input", {
                          onChange: p,
                          value: i.discountPrice,
                          type: "number",
                          id: "discountPrice",
                          min: "0",
                          max: "1000000000",
                          className: "p-3 border border-grey-300 rounded-lg",
                          required: !0,
                        }),
                        m.jsxs("div", {
                          className: "flex flex-col items-center",
                          children: [
                            m.jsx("p", { children: "Discounted Price" }),
                            i.type === "rent" &&
                              m.jsx("span", {
                                className: "text-xs",
                                children: "($ / month)",
                              }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          m.jsxs("div", {
            className: "flex flex-col flex-1 gap-4",
            children: [
              m.jsxs("p", {
                className: "font-semibold ",
                children: [
                  "Images:",
                  m.jsx("span", {
                    className: "font-normal text-gray-600 ml-2",
                    children: "The first image will be the cover image (max 6)",
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "flex gap-4",
                children: [
                  m.jsx("input", {
                    onChange: (h) => r(h.target.files),
                    className: "p-3 border border-gray-300 rounded w-full",
                    type: "file",
                    id: "images",
                    accept: "image/*",
                    multiple: !0,
                  }),
                  m.jsx("button", {
                    onClick: _,
                    className:
                      "p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80",
                    type: "button",
                    disabled: a,
                    children: a ? "Uploading..." : "Upload",
                  }),
                ],
              }),
              m.jsx("p", {
                className: "text-red-700 text-sm",
                children: o && o,
              }),
              i.imageUrls.length > 0 &&
                i.imageUrls.map((h, w) =>
                  m.jsxs(
                    "div",
                    {
                      className: "flex justify-between items-center p-3 border",
                      children: [
                        m.jsx("img", {
                          src: h,
                          alt: "Listing image",
                          className: "w-20 h-20 object-contain rounded-lg",
                        }),
                        m.jsx("button", {
                          onClick: () => S(w),
                          className:
                            "p-3 text-red-700 rounded-lg uppercase hover:opacity-75",
                          type: "button",
                          children: "Delete",
                        }),
                      ],
                    },
                    h
                  )
                ),
              m.jsx("button", {
                className:
                  "p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80",
                type: "submit",
                disabled: f || a,
                children: f ? "Creating..." : "Create Listing",
              }),
              c &&
                m.jsx("p", { className: "text-red-700 text-sm", children: c }),
            ],
          }),
        ],
      }),
    ],
  });
}
function sk() {
  const { currentUser: e } = En((w) => w.user),
    t = zt(),
    n = eg(),
    [r, i] = C.useState([]),
    [s, o] = C.useState({
      imageUrls: [],
      name: "",
      description: "",
      address: "",
      type: "rent",
      bedrooms: 1,
      bathrooms: 1,
      regularPrice: 50,
      discountPrice: 0,
      offer: !1,
      parking: !1,
      furnished: !1,
    }),
    [l, a] = C.useState(!1),
    [u, c] = C.useState(!1),
    [d, f] = C.useState(!1),
    [v, y] = C.useState(!1);
  C.useEffect(() => {
    (async () => {
      const x = n.listingId,
        P = await (await fetch(`/api/listing/get/${x}`)).json();
      if (P.success === !1) {
        console.log(P.message);
        return;
      }
      o(P);
    })();
  }, []);
  const _ = async (w) =>
      new Promise((x, E) => {
        const P = id(fa),
          b = new Date().getTime() + w.name,
          k = rd(P, b),
          T = td(k, w);
        T.on(
          "state_changed",
          (N) => {
            const L = N.bytesTransferred / N.totalBytes / 100;
            console.log(`Upload is ${L}% done.`);
          },
          (N) => {
            E(N);
          },
          () => {
            nd(T.snapshot.ref).then((N) => {
              x(N);
            });
          }
        );
      }),
    S = (w) => {
      if (
        (w.preventDefault(), r.length > 0 && r.length + s.imageUrls.length < 7)
      ) {
        c(!0), a(!1);
        const x = [];
        for (let E = 0; E < r.length; ++E) x.push(_(r[E]));
        Promise.all(x)
          .then((E) => {
            o({ ...s, imageUrls: s.imageUrls.concat(E) }), c(!1), a(!1);
          })
          .catch((E) => {
            c(!1), a("Image Upload failed! (max image size: 2 MB)");
          });
      } else c(!1), a("You can only upload upto 6 images per listing.");
    },
    p = (w) => {
      o({ ...s, imageUrls: s.imageUrls.filter((x, E) => E !== w) });
    },
    g = (w) => {
      (w.target.id === "sale" || w.target.id === "rent") &&
        o({ ...s, type: w.target.id }),
        (w.target.id === "parking" ||
          w.target.id === "furnished" ||
          w.target.id === "offer") &&
          o({ ...s, [w.target.id]: w.target.checked }),
        (w.target.type === "number" ||
          w.target.type === "text" ||
          w.target.type === "textarea") &&
          o({ ...s, [w.target.id]: w.target.value });
    },
    h = async (w) => {
      w.preventDefault();
      try {
        if (s.imageUrls.length < 1)
          return f("You must upload at least one image.");
        if (+s.regularPrice < +s.discountPrice)
          return f("Discounted price must be less than the Regular price");
        y(!0), f(!1);
        const E = await (
          await fetch(`/api/listing/update/${n.listingId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...s, userRef: e._id }),
          })
        ).json();
        y(!1), E.success === !1 && f(E.message), t(`/listing/${E._id}`);
      } catch (x) {
        f(x.message), y(!1);
      }
    };
  return m.jsxs("main", {
    className: "p-3 max-w-4xl mx-auto",
    children: [
      m.jsx("h1", {
        className: "text-3xl font-semibold text-center my-7",
        children: "Update Listing",
      }),
      m.jsxs("form", {
        onSubmit: h,
        className: "flex flex-col sm:flex-row gap-4",
        children: [
          m.jsxs("div", {
            className: "flex flex-col gap-4 flex-1",
            children: [
              m.jsx("input", {
                onChange: g,
                value: s.name,
                type: "text",
                placeholder: "Name",
                className: "border p-3 rounded-lg",
                id: "name",
                maxLength: "62",
                minLength: "10",
                required: !0,
              }),
              m.jsx("textarea", {
                onChange: g,
                value: s.description,
                type: "text",
                placeholder: "Description",
                className: "border p-3 rounded-lg",
                id: "description",
                required: !0,
              }),
              m.jsx("input", {
                onChange: g,
                value: s.address,
                type: "text",
                placeholder: "Address",
                className: "border p-3 rounded-lg",
                id: "address",
                required: !0,
              }),
              m.jsxs("div", {
                className: "flex gap-6 flex-wrap",
                children: [
                  m.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: g,
                        checked: s.type === "sale",
                        type: "checkbox",
                        id: "sale",
                        className: "w-5",
                      }),
                      m.jsx("span", { children: "Sell" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: g,
                        checked: s.type === "rent",
                        type: "checkbox",
                        id: "rent",
                        className: "w-5",
                      }),
                      m.jsx("span", { children: "Rent" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: g,
                        checked: s.parking,
                        type: "checkbox",
                        id: "parking",
                        className: "w-5",
                      }),
                      m.jsx("span", { children: "Parking spot" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: g,
                        checked: s.furnished,
                        type: "checkbox",
                        id: "furnished",
                        className: "w-5",
                      }),
                      m.jsx("span", { children: "Furnished" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: g,
                        checked: s.offer,
                        type: "checkbox",
                        id: "offer",
                        className: "w-5",
                      }),
                      m.jsx("span", { children: "Offer" }),
                    ],
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "flex flex-wrap gap-4",
                children: [
                  m.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: g,
                        value: s.bedrooms,
                        type: "number",
                        id: "bedrooms",
                        min: "1",
                        max: "10",
                        className: "p-3 border border-grey-300 rounded-lg",
                        required: !0,
                      }),
                      m.jsx("p", { children: "Beds" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: g,
                        value: s.bathrooms,
                        type: "number",
                        id: "bathrooms",
                        min: "1",
                        max: "10",
                        className: "p-3 border border-grey-300 rounded-lg",
                        required: !0,
                      }),
                      m.jsx("p", { children: "Baths" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: g,
                        value: s.regularPrice,
                        type: "number",
                        id: "regularPrice",
                        min: "50",
                        max: "1000000000",
                        className: "p-3 border border-grey-300 rounded-lg",
                        required: !0,
                      }),
                      m.jsxs("div", {
                        className: "flex flex-col items-center",
                        children: [
                          m.jsx("p", { children: "Regular Price" }),
                          s.type === "rent" &&
                            m.jsx("span", {
                              className: "text-xs",
                              children: "($ / month)",
                            }),
                        ],
                      }),
                    ],
                  }),
                  s.offer &&
                    m.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        m.jsx("input", {
                          onChange: g,
                          value: s.discountPrice,
                          type: "number",
                          id: "discountPrice",
                          min: "0",
                          max: "1000000000",
                          className: "p-3 border border-grey-300 rounded-lg",
                          required: !0,
                        }),
                        m.jsxs("div", {
                          className: "flex flex-col items-center",
                          children: [
                            m.jsx("p", { children: "Discounted Price" }),
                            s.type === "rent" &&
                              m.jsx("span", {
                                className: "text-xs",
                                children: "($ / month)",
                              }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          m.jsxs("div", {
            className: "flex flex-col flex-1 gap-4",
            children: [
              m.jsxs("p", {
                className: "font-semibold ",
                children: [
                  "Images:",
                  m.jsx("span", {
                    className: "font-normal text-gray-600 ml-2",
                    children: "The first image will be the cover image (max 6)",
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "flex gap-4",
                children: [
                  m.jsx("input", {
                    onChange: (w) => i(w.target.files),
                    className: "p-3 border border-gray-300 rounded w-full",
                    type: "file",
                    id: "images",
                    accept: "image/*",
                    multiple: !0,
                  }),
                  m.jsx("button", {
                    onClick: S,
                    className:
                      "p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80",
                    type: "button",
                    disabled: u,
                    children: u ? "Uploading..." : "Upload",
                  }),
                ],
              }),
              m.jsx("p", {
                className: "text-red-700 text-sm",
                children: l && l,
              }),
              s.imageUrls.length > 0 &&
                s.imageUrls.map((w, x) =>
                  m.jsxs(
                    "div",
                    {
                      className: "flex justify-between items-center p-3 border",
                      children: [
                        m.jsx("img", {
                          src: w,
                          alt: "Listing image",
                          className: "w-20 h-20 object-contain rounded-lg",
                        }),
                        m.jsx("button", {
                          onClick: () => p(x),
                          className:
                            "p-3 text-red-700 rounded-lg uppercase hover:opacity-75",
                          type: "button",
                          children: "Delete",
                        }),
                      ],
                    },
                    w
                  )
                ),
              m.jsx("button", {
                className:
                  "p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80",
                type: "submit",
                disabled: v || u,
                children: v ? "Updating..." : "Update Listing",
              }),
              d &&
                m.jsx("p", { className: "text-red-700 text-sm", children: d }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ok({ listing: e }) {
  const [t, n] = C.useState(null),
    [r, i] = C.useState("");
  C.useEffect(() => {
    (async () => {
      try {
        const a = await (await fetch(`/api/user/${e.userRef}`)).json();
        n(a);
      } catch {}
    })();
  }, [e.userRef]);
  const s = (o) => {
    i(o.target.value);
  };
  return m.jsx("div", {
    children:
      t &&
      m.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [
          m.jsxs("p", {
            className: "text-lg",
            children: [
              "Contact ",
              m.jsx("span", {
                className: "font-semibold",
                children: t.username,
              }),
              " for ",
              m.jsx("span", {
                className: "font-semibold",
                children: e.name.toLowerCase(),
              }),
            ],
          }),
          m.jsx("textarea", {
            name: "message",
            placeholder: "Enter your message here",
            id: "message",
            rows: "2",
            value: r,
            onChange: s,
            className: "w-full border p-3 rounded-lg",
          }),
          m.jsx(ye, {
            to: `mailto:${t.email}?subject=Regarding ${e.name}&body=${r}`,
            className:
              "bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95",
            children: "Send Message",
          }),
        ],
      }),
  });
}
function ak() {
  Hi.use([vg]);
  const e = eg(),
    { currentUser: t } = En((f) => f.user),
    [n, r] = C.useState(null),
    [i, s] = C.useState(!1),
    [o, l] = C.useState(!1),
    [a, u] = C.useState(!1),
    [c, d] = C.useState(!1);
  return (
    C.useEffect(() => {
      (async () => {
        try {
          s(!0);
          const y = await (
            await fetch(`/api/listing/get/${e.listingId}`)
          ).json();
          if (y.success === !1) {
            l(!0), s(!1);
            return;
          }
          r(y), s(!1), l(!1);
        } catch {
          l(!0), s(!1);
        }
      })();
    }, [e.listingId]),
    m.jsxs("main", {
      children: [
        i &&
          m.jsx("p", {
            className: "text-center my-7 text-2xl text-blue-800 font-serif",
            children: "Loading...",
          }),
        o &&
          m.jsx("p", {
            className: "text-center my-7 text-2xl text-red-600 font-serif",
            children: "Something went Wrong!",
          }),
        n &&
          !o &&
          !i &&
          m.jsxs("div", {
            children: [
              m.jsx(bc, {
                navigation: !0,
                children: n.imageUrls.map((f) =>
                  m.jsx(
                    Pc,
                    {
                      children: m.jsx("div", {
                        className: "h-[550px]",
                        style: {
                          background: `url(${f}) center no-repeat`,
                          backgroundSize: "cover",
                        },
                      }),
                    },
                    f
                  )
                ),
              }),
              m.jsx("div", {
                className:
                  "fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer",
                children: m.jsx(ZP, {
                  className: "text-slate-500",
                  onClick: () => {
                    navigator.clipboard.writeText(window.location.href),
                      u(!0),
                      setTimeout(() => {
                        u(!1);
                      }, 2e3);
                  },
                }),
              }),
              a &&
                m.jsx("p", {
                  className:
                    "fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2",
                  children: "Link copied!",
                }),
              m.jsxs("div", {
                className: "flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4",
                children: [
                  m.jsxs("p", {
                    className: "text-3xl font-semibold font-serif",
                    children: [
                      n.name,
                      " ",
                      n.offer &&
                        m.jsxs("span", {
                          className: "text-xl text-slate-700",
                          children: [
                            "(",
                            n.type === "rent"
                              ? " Monthly Discount : "
                              : " Discount : ",
                            "$",
                            (+n.regularPrice - +n.discountPrice).toLocaleString(
                              "en-US"
                            ),
                            ")",
                          ],
                        }),
                    ],
                  }),
                  m.jsxs("p", {
                    className:
                      "flex items-center mt-6 gap-2 text-slate-600  text-sm",
                    children: [
                      m.jsx(YP, { className: "text-green-700" }),
                      n.address,
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-4",
                    children: [
                      m.jsx("p", {
                        className:
                          "flex items-center justify-center bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md",
                        children: n.type === "rent" ? "For Rent" : "For Sale",
                      }),
                      n.offer
                        ? m.jsxs("p", {
                            className:
                              "flex items-center justify-center bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md",
                            children: [
                              m.jsxs("div", {
                                className: "flex items-center justify-center",
                                children: [
                                  "$",
                                  m.jsx("p", {
                                    className: "line-through mx-1",
                                    children:
                                      n.regularPrice.toLocaleString("en-US"),
                                  }),
                                  m.jsx("p", {
                                    children:
                                      n.discountPrice.toLocaleString("en-US"),
                                  }),
                                ],
                              }),
                              m.jsx("p", {
                                className: "m-1",
                                children: n.type === "rent" && "/ month",
                              }),
                            ],
                          })
                        : m.jsxs("p", {
                            className:
                              "bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md",
                            children: [
                              "$ ",
                              n.regularPrice.toLocaleString("en-US"),
                              n.type === "rent" && " / month",
                            ],
                          }),
                    ],
                  }),
                  m.jsxs("p", {
                    className: "text-slate-800",
                    children: [
                      m.jsx("span", {
                        className: "font-semibold text-black",
                        children: "Description - ",
                      }),
                      n.description,
                    ],
                  }),
                  m.jsxs("ul", {
                    className:
                      "text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6",
                    children: [
                      m.jsxs("li", {
                        className: "flex items-center gap-1 whitespace-nowrap ",
                        children: [
                          m.jsx(KP, { className: "text-lg" }),
                          n.bedrooms > 1
                            ? `${n.bedrooms} beds `
                            : `${n.bedrooms} bed `,
                        ],
                      }),
                      m.jsxs("li", {
                        className: "flex items-center gap-1 whitespace-nowrap ",
                        children: [
                          m.jsx(qP, { className: "text-lg" }),
                          n.bathrooms > 1
                            ? `${n.bathrooms} baths `
                            : `${n.bathrooms} bath `,
                        ],
                      }),
                      m.jsxs("li", {
                        className: "flex items-center gap-1 whitespace-nowrap ",
                        children: [
                          m.jsx(QP, { className: "text-lg" }),
                          n.parking ? "Parking spot" : "No Parking",
                        ],
                      }),
                      m.jsxs("li", {
                        className: "flex items-center gap-1 whitespace-nowrap ",
                        children: [
                          m.jsx(XP, { className: "text-lg" }),
                          n.furnished ? "Furnished" : "Unfurnished",
                        ],
                      }),
                    ],
                  }),
                  t &&
                    n.userRef !== t._id &&
                    !c &&
                    m.jsx("button", {
                      onClick: () => d(!0),
                      className:
                        "bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3",
                      children: "Contact Landlord",
                    }),
                  c && m.jsx(ok, { listing: n }),
                ],
              }),
            ],
          }),
      ],
    })
  );
}
function lk() {
  const e = zt(),
    [t, n] = C.useState(!1),
    [r, i] = C.useState([]),
    [s, o] = C.useState(!1),
    [l, a] = C.useState({
      searchTerm: "",
      type: "all",
      parking: !1,
      furnished: !1,
      offer: !1,
      sort: "createdAt",
      order: "desc",
    });
  console.log(r),
    C.useEffect(() => {
      const f = new URLSearchParams(location.search),
        v = f.get("searchTerm"),
        y = f.get("type"),
        _ = f.get("parking"),
        S = f.get("furnished"),
        p = f.get("offer"),
        g = f.get("sort"),
        h = f.get("order");
      (v || y || _ || S || p || g || h) &&
        a({
          searchTerm: v || "",
          type: y || "all",
          parking: _ === "true",
          furnished: S === "true",
          offer: p === "true",
          sort: g || "created_at",
          order: h || "desc",
        }),
        (async () => {
          n(!0), o(!1);
          const x = f.toString(),
            P = await (await fetch(`/api/listing/get?${x}`)).json();
          P.length > 8 ? o(!0) : o(!1), i(P), n(!1);
        })();
    }, [location.search]);
  const u = (f) => {
      if (
        ((f.target.id === "all" ||
          f.target.id === "rent" ||
          f.target.id === "sale") &&
          a({ ...l, type: f.target.id }),
        f.target.id === "searchTerm" && a({ ...l, searchTerm: f.target.value }),
        (f.target.id === "parking" || f.target.id === "furnished") &&
          a({
            ...l,
            [f.target.id]: !!(f.target.checked || f.target.checked === "true"),
          }),
        f.target.id === "sort_order")
      ) {
        let v = f.target.value.split("_")[0] || "created_at";
        const y = f.target.value.split("_")[1] || "desc";
        a({ ...l, sort: v, order: y });
      }
      f.target.id === "offer" &&
        (f.target.checked || f.target.checked === "true"
          ? a({ ...l, [f.target.id]: !0 })
          : a({ ...l, sort: "regularPrice", [f.target.id]: !1 }));
    },
    c = (f) => {
      f.preventDefault();
      const v = new URLSearchParams();
      l.searchTerm && v.set("searchTerm", l.searchTerm),
        l.type !== "all" && v.set("type", l.type),
        l.parking && v.set("parking", l.parking),
        l.furnished && v.set("furnished", l.furnished),
        l.offer && v.set("offer", l.offer),
        v.set("sort", l.sort),
        v.set("order", l.order);
      const y = v.toString();
      e(`/search?${y}`);
    },
    d = async () => {
      const v = r.length,
        y = new URLSearchParams(location.search);
      y.set("startIndex", v);
      const _ = y.toString(),
        p = await (await fetch(`/api/listing/get?${_}`)).json();
      p.length < 9 && o(!1), i([...r, ...p]);
    };
  return m.jsxs("div", {
    className: "flex flex-col md:flex-row",
    children: [
      m.jsx("div", {
        className: "p-7 border-b-2 md:border-r-2 md:min-h-screen",
        children: m.jsxs("form", {
          onSubmit: c,
          className: "flex flex-col gap-8",
          children: [
            m.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                m.jsx("label", {
                  className: "whitespace-nowrap font-semibold",
                  children: "Search Term :",
                }),
                m.jsx("input", {
                  type: "text",
                  id: "searchTerm",
                  placeholder: "Seach Property",
                  className: "border rounded-lg p-3 w-full",
                  value: l.searchTerm,
                  onChange: u,
                }),
              ],
            }),
            m.jsxs("div", {
              className: "flex gap-3 flex-wrap items-center",
              children: [
                m.jsx("label", {
                  className: "font-semibold",
                  children: "Type :",
                }),
                m.jsxs("div", {
                  className: "flex gap-1",
                  children: [
                    m.jsx("input", {
                      type: "checkbox",
                      id: "all",
                      className: "w-5",
                      onChange: u,
                      checked: l.type === "all",
                    }),
                    m.jsx("span", { children: "Rent & Sale" }),
                  ],
                }),
                m.jsxs("div", {
                  className: "flex gap-1",
                  children: [
                    m.jsx("input", {
                      type: "checkbox",
                      id: "rent",
                      className: "w-5",
                      onChange: u,
                      checked: l.type === "rent",
                    }),
                    m.jsx("span", { children: "Rent" }),
                  ],
                }),
                m.jsxs("div", {
                  className: "flex gap-1",
                  children: [
                    m.jsx("input", {
                      type: "checkbox",
                      id: "sale",
                      className: "w-5",
                      onChange: u,
                      checked: l.type === "sale",
                    }),
                    m.jsx("span", { children: "Sale" }),
                  ],
                }),
                m.jsxs("div", {
                  className: "flex gap-1",
                  children: [
                    m.jsx("input", {
                      type: "checkbox",
                      id: "offer",
                      className: "w-5",
                      onChange: u,
                      checked: l.offer,
                    }),
                    m.jsx("span", { children: "Offer" }),
                  ],
                }),
              ],
            }),
            m.jsxs("div", {
              className: "flex gap-3 flex-wrap items-center",
              children: [
                m.jsx("label", {
                  className: "font-semibold",
                  children: "Amenities :",
                }),
                m.jsxs("div", {
                  className: "flex gap-1",
                  children: [
                    m.jsx("input", {
                      type: "checkbox",
                      id: "parking",
                      className: "w-5",
                      onChange: u,
                      checked: l.parking,
                    }),
                    m.jsx("span", { children: "Parking" }),
                  ],
                }),
                m.jsxs("div", {
                  className: "flex gap-1",
                  children: [
                    m.jsx("input", {
                      type: "checkbox",
                      id: "furnished",
                      className: "w-5",
                      onChange: u,
                      checked: l.furnished,
                    }),
                    m.jsx("span", { children: "Furnished" }),
                  ],
                }),
              ],
            }),
            m.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                m.jsx("label", {
                  className: "font-semibold",
                  children: "Sort :",
                }),
                m.jsxs("select", {
                  onChange: u,
                  defaultValue: "createdAt_desc",
                  id: "sort_order",
                  className: "border rounded-lg p-2",
                  children: [
                    m.jsx("option", {
                      value: "discountPrice_desc",
                      children: "Price High to Low",
                    }),
                    m.jsx("option", {
                      value: "discountPrice_asc",
                      children: "Price Low to High",
                    }),
                    m.jsx("option", {
                      value: "createdAt_desc",
                      children: "Latest",
                    }),
                    m.jsx("option", {
                      value: "createdAt_asc",
                      children: "Oldest",
                    }),
                  ],
                }),
              ],
            }),
            m.jsx("button", {
              className:
                "bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95",
              children: "Search",
            }),
          ],
        }),
      }),
      m.jsxs("div", {
        className: "flex-1",
        children: [
          m.jsx("h1", {
            className:
              "text-3xl font-semibold font-serif border-b p-3 mt-5 text-slate-700",
            children: "Listing Results:",
          }),
          m.jsxs("div", {
            className: "flex flex-wrap gap-4 p-7",
            children: [
              !t &&
                r.length === 0 &&
                m.jsx("p", {
                  className:
                    "text-3xl text-red-500 text-center w-full font-serif",
                  children: "No Listings Available!",
                }),
              t &&
                m.jsx("p", {
                  className:
                    "text-2xl text-slate-500 text-center w-full font-serif",
                  children: "Loading...",
                }),
              !t && r && r.map((f) => m.jsx(Us, { listing: f }, f._id)),
              s &&
                m.jsx("button", {
                  onClick: d,
                  className:
                    "text-green-500 hover:underline p-7 text-center w-full",
                  children: "Show More",
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
const uk = () =>
  m.jsxs(R_, {
    children: [
      m.jsx(nk, {}),
      m.jsxs(C_, {
        children: [
          m.jsx(Je, { path: "/", element: m.jsx(wx, {}) }),
          m.jsx(Je, { path: "/sign-in", element: m.jsx(Ob, {}) }),
          m.jsx(Je, { path: "/sign-up", element: m.jsx(Rb, {}) }),
          m.jsx(Je, { path: "/about", element: m.jsx(Lb, {}) }),
          m.jsxs(Je, {
            element: m.jsx(rk, {}),
            children: [
              m.jsx(Je, { path: "/profile", element: m.jsx(WP, {}) }),
              m.jsx(Je, { path: "/create-listing", element: m.jsx(ik, {}) }),
              m.jsx(Je, {
                path: "/update-listing/:listingId",
                element: m.jsx(sk, {}),
              }),
            ],
          }),
          m.jsx(Je, { path: "/listing/:listingId", element: m.jsx(ak, {}) }),
          m.jsx(Je, { path: "/search", element: m.jsx(lk, {}) }),
        ],
      }),
    ],
  });
var sd = "persist:",
  Qv = "persist/FLUSH",
  od = "persist/REHYDRATE",
  Jv = "persist/PAUSE",
  Zv = "persist/PERSIST",
  ey = "persist/PURGE",
  ty = "persist/REGISTER",
  ck = -1;
function Vs(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Vs = function (n) {
          return typeof n;
        })
      : (Vs = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Vs(e)
  );
}
function Rp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function dk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rp(n, !0).forEach(function (r) {
          fk(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Rp(n).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function fk(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function pk(e, t, n, r) {
  r.debug;
  var i = dk({}, n);
  return (
    e &&
      Vs(e) === "object" &&
      Object.keys(e).forEach(function (s) {
        s !== "_persist" && t[s] === n[s] && (i[s] = e[s]);
      }),
    i
  );
}
function hk(e) {
  var t = e.blacklist || null,
    n = e.whitelist || null,
    r = e.transforms || [],
    i = e.throttle || 0,
    s = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : sd).concat(e.key),
    o = e.storage,
    l;
  e.serialize === !1
    ? (l = function (x) {
        return x;
      })
    : typeof e.serialize == "function"
    ? (l = e.serialize)
    : (l = mk);
  var a = e.writeFailHandler || null,
    u = {},
    c = {},
    d = [],
    f = null,
    v = null,
    y = function (x) {
      Object.keys(x).forEach(function (E) {
        p(E) && u[E] !== x[E] && d.indexOf(E) === -1 && d.push(E);
      }),
        Object.keys(u).forEach(function (E) {
          x[E] === void 0 &&
            p(E) &&
            d.indexOf(E) === -1 &&
            u[E] !== void 0 &&
            d.push(E);
        }),
        f === null && (f = setInterval(_, i)),
        (u = x);
    };
  function _() {
    if (d.length === 0) {
      f && clearInterval(f), (f = null);
      return;
    }
    var w = d.shift(),
      x = r.reduce(function (E, P) {
        return P.in(E, w, u);
      }, u[w]);
    if (x !== void 0)
      try {
        c[w] = l(x);
      } catch (E) {
        console.error(
          "redux-persist/createPersistoid: error serializing state",
          E
        );
      }
    else delete c[w];
    d.length === 0 && S();
  }
  function S() {
    Object.keys(c).forEach(function (w) {
      u[w] === void 0 && delete c[w];
    }),
      (v = o.setItem(s, l(c)).catch(g));
  }
  function p(w) {
    return !(
      (n && n.indexOf(w) === -1 && w !== "_persist") ||
      (t && t.indexOf(w) !== -1)
    );
  }
  function g(w) {
    a && a(w);
  }
  var h = function () {
    for (; d.length !== 0; ) _();
    return v || Promise.resolve();
  };
  return { update: y, flush: h };
}
function mk(e) {
  return JSON.stringify(e);
}
function gk(e) {
  var t = e.transforms || [],
    n = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : sd).concat(e.key),
    r = e.storage;
  e.debug;
  var i;
  return (
    e.deserialize === !1
      ? (i = function (o) {
          return o;
        })
      : typeof e.deserialize == "function"
      ? (i = e.deserialize)
      : (i = vk),
    r.getItem(n).then(function (s) {
      if (s)
        try {
          var o = {},
            l = i(s);
          return (
            Object.keys(l).forEach(function (a) {
              o[a] = t.reduceRight(function (u, c) {
                return c.out(u, a, l);
              }, i(l[a]));
            }),
            o
          );
        } catch (a) {
          throw a;
        }
      else return;
    })
  );
}
function vk(e) {
  return JSON.parse(e);
}
function yk(e) {
  var t = e.storage,
    n = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : sd).concat(e.key);
  return t.removeItem(n, wk);
}
function wk(e) {}
function Lp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lp(n, !0).forEach(function (r) {
          _k(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Lp(n).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function _k(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Sk(e, t) {
  if (e == null) return {};
  var n = xk(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function xk(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Ek = 5e3;
function Tk(e, t) {
  var n = e.version !== void 0 ? e.version : ck;
  e.debug;
  var r = e.stateReconciler === void 0 ? pk : e.stateReconciler,
    i = e.getStoredState || gk,
    s = e.timeout !== void 0 ? e.timeout : Ek,
    o = null,
    l = !1,
    a = !0,
    u = function (d) {
      return d._persist.rehydrated && o && !a && o.update(d), d;
    };
  return function (c, d) {
    var f = c || {},
      v = f._persist,
      y = Sk(f, ["_persist"]),
      _ = y;
    if (d.type === Zv) {
      var S = !1,
        p = function (b, k) {
          S || (d.rehydrate(e.key, b, k), (S = !0));
        };
      if (
        (s &&
          setTimeout(function () {
            !S &&
              p(
                void 0,
                new Error(
                  'redux-persist: persist timed out for persist key "'.concat(
                    e.key,
                    '"'
                  )
                )
              );
          }, s),
        (a = !1),
        o || (o = hk(e)),
        v)
      )
        return wt({}, t(_, d), { _persist: v });
      if (typeof d.rehydrate != "function" || typeof d.register != "function")
        throw new Error(
          "redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution."
        );
      return (
        d.register(e.key),
        i(e).then(
          function (P) {
            var b =
              e.migrate ||
              function (k, T) {
                return Promise.resolve(k);
              };
            b(P, n).then(
              function (k) {
                p(k);
              },
              function (k) {
                p(void 0, k);
              }
            );
          },
          function (P) {
            p(void 0, P);
          }
        ),
        wt({}, t(_, d), { _persist: { version: n, rehydrated: !1 } })
      );
    } else {
      if (d.type === ey)
        return (l = !0), d.result(yk(e)), wt({}, t(_, d), { _persist: v });
      if (d.type === Qv)
        return d.result(o && o.flush()), wt({}, t(_, d), { _persist: v });
      if (d.type === Jv) a = !0;
      else if (d.type === od) {
        if (l) return wt({}, _, { _persist: wt({}, v, { rehydrated: !0 }) });
        if (d.key === e.key) {
          var g = t(_, d),
            h = d.payload,
            w = r !== !1 && h !== void 0 ? r(h, c, g, e) : g,
            x = wt({}, w, { _persist: wt({}, v, { rehydrated: !0 }) });
          return u(x);
        }
      }
    }
    if (!v) return t(c, d);
    var E = t(_, d);
    return E === _ ? c : u(wt({}, E, { _persist: v }));
  };
}
function Ap(e) {
  return Pk(e) || bk(e) || Ck();
}
function Ck() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function bk(e) {
  if (
    Symbol.iterator in Object(e) ||
    Object.prototype.toString.call(e) === "[object Arguments]"
  )
    return Array.from(e);
}
function Pk(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
    return n;
  }
}
function Mp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Tu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Mp(n, !0).forEach(function (r) {
          kk(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Mp(n).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function kk(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var ny = { registry: [], bootstrapped: !1 },
  Ik = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ny,
      n = arguments.length > 1 ? arguments[1] : void 0;
    switch (n.type) {
      case ty:
        return Tu({}, t, { registry: [].concat(Ap(t.registry), [n.key]) });
      case od:
        var r = t.registry.indexOf(n.key),
          i = Ap(t.registry);
        return (
          i.splice(r, 1),
          Tu({}, t, { registry: i, bootstrapped: i.length === 0 })
        );
      default:
        return t;
    }
  };
function Nk(e, t, n) {
  var r = Oc(Ik, ny, void 0),
    i = function (a) {
      r.dispatch({ type: ty, key: a });
    },
    s = function (a, u, c) {
      var d = { type: od, payload: u, err: c, key: a };
      e.dispatch(d), r.dispatch(d);
    },
    o = Tu({}, r, {
      purge: function () {
        var a = [];
        return (
          e.dispatch({
            type: ey,
            result: function (c) {
              a.push(c);
            },
          }),
          Promise.all(a)
        );
      },
      flush: function () {
        var a = [];
        return (
          e.dispatch({
            type: Qv,
            result: function (c) {
              a.push(c);
            },
          }),
          Promise.all(a)
        );
      },
      pause: function () {
        e.dispatch({ type: Jv });
      },
      persist: function () {
        e.dispatch({ type: Zv, register: i, rehydrate: s });
      },
    });
  return o.persist(), o;
}
var ad = {},
  ld = {};
ld.__esModule = !0;
ld.default = Lk;
function Hs(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Hs = function (n) {
          return typeof n;
        })
      : (Hs = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Hs(e)
  );
}
function ll() {}
var Ok = { getItem: ll, setItem: ll, removeItem: ll };
function Rk(e) {
  if ((typeof self > "u" ? "undefined" : Hs(self)) !== "object" || !(e in self))
    return !1;
  try {
    var t = self[e],
      n = "redux-persist ".concat(e, " test");
    t.setItem(n, "test"), t.getItem(n), t.removeItem(n);
  } catch {
    return !1;
  }
  return !0;
}
function Lk(e) {
  var t = "".concat(e, "Storage");
  return Rk(t) ? self[t] : Ok;
}
ad.__esModule = !0;
ad.default = jk;
var Ak = Mk(ld);
function Mk(e) {
  return e && e.__esModule ? e : { default: e };
}
function jk(e) {
  var t = (0, Ak.default)(e);
  return {
    getItem: function (r) {
      return new Promise(function (i, s) {
        i(t.getItem(r));
      });
    },
    setItem: function (r, i) {
      return new Promise(function (s, o) {
        s(t.setItem(r, i));
      });
    },
    removeItem: function (r) {
      return new Promise(function (i, s) {
        i(t.removeItem(r));
      });
    },
  };
}
var ry = void 0,
  Dk = Uk(ad);
function Uk(e) {
  return e && e.__esModule ? e : { default: e };
}
var zk = (0, Dk.default)("local");
ry = zk;
const Fk = Cg({ user: J1 }),
  $k = { key: "root", storage: ry, version: 1 },
  Bk = Tk($k, Fk),
  iy = T1({ reducer: Bk, middleware: (e) => e({ serializableCheck: !1 }) }),
  Vk = Nk(iy);
function Ws(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ws = function (n) {
          return typeof n;
        })
      : (Ws = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Ws(e)
  );
}
function Hk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wk(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Gk(e, t, n) {
  return t && Wk(e.prototype, t), e;
}
function qk(e, t) {
  return t && (Ws(t) === "object" || typeof t == "function") ? t : Gs(e);
}
function Cu(e) {
  return (
    (Cu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Cu(e)
  );
}
function Gs(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Kk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && bu(e, t);
}
function bu(e, t) {
  return (
    (bu =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    bu(e, t)
  );
}
function qs(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var sy = (function (e) {
  Kk(t, e);
  function t() {
    var n, r;
    Hk(this, t);
    for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return (
      (r = qk(this, (n = Cu(t)).call.apply(n, [this].concat(s)))),
      qs(Gs(r), "state", { bootstrapped: !1 }),
      qs(Gs(r), "_unsubscribe", void 0),
      qs(Gs(r), "handlePersistorState", function () {
        var l = r.props.persistor,
          a = l.getState(),
          u = a.bootstrapped;
        u &&
          (r.props.onBeforeLift
            ? Promise.resolve(r.props.onBeforeLift()).finally(function () {
                return r.setState({ bootstrapped: !0 });
              })
            : r.setState({ bootstrapped: !0 }),
          r._unsubscribe && r._unsubscribe());
      }),
      r
    );
  }
  return (
    Gk(t, [
      {
        key: "componentDidMount",
        value: function () {
          (this._unsubscribe = this.props.persistor.subscribe(
            this.handlePersistorState
          )),
            this.handlePersistorState();
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this._unsubscribe && this._unsubscribe();
        },
      },
      {
        key: "render",
        value: function () {
          return typeof this.props.children == "function"
            ? this.props.children(this.state.bootstrapped)
            : this.state.bootstrapped
            ? this.props.children
            : this.props.loading;
        },
      },
    ]),
    t
  );
})(C.PureComponent);
qs(sy, "defaultProps", { children: null, loading: null });
cl.createRoot(document.getElementById("root")).render(
  m.jsx($.StrictMode, {
    children: m.jsx(Fx, {
      store: iy,
      children: m.jsx(sy, {
        loading: null,
        persistor: Vk,
        children: m.jsx(uk, {}),
      }),
    }),
  })
);
