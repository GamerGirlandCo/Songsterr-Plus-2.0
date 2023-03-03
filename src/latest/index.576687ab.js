var e,
  t,
  n,
  i,
  r,
  o,
  s,
  u,
  a = function (e, t) {
    return (a =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      })(e, t);
  };
function c(e, t) {
  if ("function" != typeof t && null !== t)
    throw TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  function n() {
    this.constructor = e;
  }
  a(e, t),
    (e.prototype =
      null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var l = function () {
  return (l =
    Object.assign ||
    function (e) {
      for (var t, n = 1, i = arguments.length; n < i; n++)
        for (var r in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return e;
    }).apply(this, arguments);
};
function d(e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      0 > t.indexOf(i) &&
      (n[i] = e[i]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols)
    for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
      0 > t.indexOf(i[r]) &&
        Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
        (n[i[r]] = e[i[r]]);
  return n;
}
function f(e, t, n, i) {
  return new (n || (n = Promise))(function (r, o) {
    function s(e) {
      try {
        a(i.next(e));
      } catch (e) {
        o(e);
      }
    }
    function u(e) {
      try {
        a(i.throw(e));
      } catch (e) {
        o(e);
      }
    }
    function a(e) {
      var t;
      e.done
        ? r(e.value)
        : ((t = e.value) instanceof n
            ? t
            : new n(function (e) {
                e(t);
              })
          ).then(s, u);
    }
    a((i = i.apply(e, t || [])).next());
  });
}
function p(e, t) {
  var n,
    i,
    r,
    o,
    s = {
      label: 0,
      sent: function () {
        if (1 & r[0]) throw r[1];
        return r[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (o = { next: u(0), throw: u(1), return: u(2) }),
    "function" == typeof Symbol &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function u(u) {
    return function (a) {
      return (function (u) {
        if (n) throw TypeError("Generator is already executing.");
        for (; o && ((o = 0), u[0] && (s = 0)), s; )
          try {
            if (
              ((n = 1),
              i &&
                (r =
                  2 & u[0]
                    ? i.return
                    : u[0]
                    ? i.throw || ((r = i.return) && r.call(i), 0)
                    : i.next) &&
                !(r = r.call(i, u[1])).done)
            )
              return r;
            switch (((i = 0), r && (u = [2 & u[0], r.value]), u[0])) {
              case 0:
              case 1:
                r = u;
                break;
              case 4:
                return s.label++, { value: u[1], done: !1 };
              case 5:
                s.label++, (i = u[1]), (u = [0]);
                continue;
              case 7:
                (u = s.ops.pop()), s.trys.pop();
                continue;
              default:
                if (
                  !(r = (r = s.trys).length > 0 && r[r.length - 1]) &&
                  (6 === u[0] || 2 === u[0])
                ) {
                  s = 0;
                  continue;
                }
                if (3 === u[0] && (!r || (u[1] > r[0] && u[1] < r[3]))) {
                  s.label = u[1];
                  break;
                }
                if (6 === u[0] && s.label < r[1]) {
                  (s.label = r[1]), (r = u);
                  break;
                }
                if (r && s.label < r[2]) {
                  (s.label = r[2]), s.ops.push(u);
                  break;
                }
                r[2] && s.ops.pop(), s.trys.pop();
                continue;
            }
            u = t.call(e, s);
          } catch (e) {
            (u = [6, e]), (i = 0);
          } finally {
            n = r = 0;
          }
        if (5 & u[0]) throw u[1];
        return { value: u[0] ? u[1] : void 0, done: !0 };
      })([u, a]);
    };
  }
}
function v(e) {
  var t = "function" == typeof Symbol && Symbol.iterator,
    n = t && e[t],
    i = 0;
  if (n) return n.call(e);
  if (e && "number" == typeof e.length)
    return {
      next: function () {
        return (
          e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e }
        );
      },
    };
  throw TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function h(e, t) {
  var n = "function" == typeof Symbol && e[Symbol.iterator];
  if (!n) return e;
  var i,
    r,
    o = n.call(e),
    s = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; ) s.push(i.value);
  } catch (e) {
    r = { error: e };
  } finally {
    try {
      i && !i.done && (n = o.return) && n.call(o);
    } finally {
      if (r) throw r.error;
    }
  }
  return s;
}
function g(e, t, n) {
  if (n || 2 == arguments.length)
    for (var i, r = 0, o = t.length; r < o; r++)
      (!i && r in t) ||
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
!(function (e) {
  (e.SET = "$set"),
    (e.SET_ONCE = "$setOnce"),
    (e.ADD = "$add"),
    (e.APPEND = "$append"),
    (e.PREPEND = "$prepend"),
    (e.REMOVE = "$remove"),
    (e.PREINSERT = "$preInsert"),
    (e.POSTINSERT = "$postInsert"),
    (e.UNSET = "$unset"),
    (e.CLEAR_ALL = "$clearAll");
})(e || (e = {})),
  (function (e) {
    (e.REVENUE_PRODUCT_ID = "$productId"),
      (e.REVENUE_QUANTITY = "$quantity"),
      (e.REVENUE_PRICE = "$price"),
      (e.REVENUE_TYPE = "$revenueType"),
      (e.REVENUE = "$revenue");
  })(t || (t = {})),
  (function (e) {
    (e.IDENTIFY = "$identify"),
      (e.GROUP_IDENTIFY = "$groupidentify"),
      (e.REVENUE = "revenue_amount");
  })(n || (n = {})),
  (function (e) {
    (e[(e.None = 0)] = "None"),
      (e[(e.Error = 1)] = "Error"),
      (e[(e.Warn = 2)] = "Warn"),
      (e[(e.Verbose = 3)] = "Verbose"),
      (e[(e.Debug = 4)] = "Debug");
  })(i || (i = {})),
  (function (e) {
    (e.BEFORE = "before"),
      (e.ENRICHMENT = "enrichment"),
      (e.DESTINATION = "destination");
  })(r || (r = {})),
  (function (e) {
    (e.US = "US"), (e.EU = "EU");
  })(o || (o = {})),
  (function (e) {
    (e.Unknown = "unknown"),
      (e.Skipped = "skipped"),
      (e.Success = "success"),
      (e.RateLimit = "rate_limit"),
      (e.PayloadTooLarge = "payload_too_large"),
      (e.Invalid = "invalid"),
      (e.Failed = "failed"),
      (e.Timeout = "Timeout"),
      (e.SystemError = "SystemError");
  })(s || (s = {})),
  (function (e) {
    (e.XHR = "xhr"), (e.SendBeacon = "beacon"), (e.Fetch = "fetch");
  })(u || (u = {}));
var y = Object.freeze({
    __proto__: null,
    get IdentifyOperation() {
      return e;
    },
    get LogLevel() {
      return i;
    },
    get PluginType() {
      return r;
    },
    get RevenueProperty() {
      return t;
    },
    get ServerZone() {
      return o;
    },
    get SpecialEventType() {
      return n;
    },
    get Status() {
      return s;
    },
    get TransportType() {
      return u;
    },
  }),
  m = "-",
  b = "AMP",
  _ = "".concat(b, "_unsent"),
  I = "https://api2.amplitude.com/2/httpapi",
  w = "https://api.eu.amplitude.com/2/httpapi",
  E = "https://api2.amplitude.com/batch",
  S = "https://api.eu.amplitude.com/batch",
  O = 1e3,
  k = function (e) {
    if (Object.keys(e).length > O) return !1;
    for (var t in e) {
      var n = e[t];
      if (!T(t, n)) return !1;
    }
    return !0;
  },
  T = function (e, t) {
    var n, i;
    if ("string" != typeof e) return !1;
    if (Array.isArray(t)) {
      var r = !0;
      try {
        for (var o = v(t), s = o.next(); !s.done; s = o.next()) {
          var u = s.value;
          if (Array.isArray(u)) return !1;
          if ("object" == typeof u) r = r && k(u);
          else if (!["number", "string"].includes(typeof u)) return !1;
          if (!r) return !1;
        }
      } catch (e) {
        n = { error: e };
      } finally {
        try {
          s && !s.done && (i = o.return) && i.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
    } else if (null == t) return !1;
    else if ("object" == typeof t) return k(t);
    else if (!["number", "string", "boolean"].includes(typeof t)) return !1;
    return !0;
  },
  P = (function () {
    function t() {
      (this._propertySet = new Set()), (this._properties = {});
    }
    return (
      (t.prototype.getUserProperties = function () {
        return l({}, this._properties);
      }),
      (t.prototype.set = function (t, n) {
        return this._safeSet(e.SET, t, n), this;
      }),
      (t.prototype.setOnce = function (t, n) {
        return this._safeSet(e.SET_ONCE, t, n), this;
      }),
      (t.prototype.append = function (t, n) {
        return this._safeSet(e.APPEND, t, n), this;
      }),
      (t.prototype.prepend = function (t, n) {
        return this._safeSet(e.PREPEND, t, n), this;
      }),
      (t.prototype.postInsert = function (t, n) {
        return this._safeSet(e.POSTINSERT, t, n), this;
      }),
      (t.prototype.preInsert = function (t, n) {
        return this._safeSet(e.PREINSERT, t, n), this;
      }),
      (t.prototype.remove = function (t, n) {
        return this._safeSet(e.REMOVE, t, n), this;
      }),
      (t.prototype.add = function (t, n) {
        return this._safeSet(e.ADD, t, n), this;
      }),
      (t.prototype.unset = function (t) {
        return this._safeSet(e.UNSET, t, m), this;
      }),
      (t.prototype.clearAll = function () {
        return (
          (this._properties = {}), (this._properties[e.CLEAR_ALL] = m), this
        );
      }),
      (t.prototype._safeSet = function (e, t, n) {
        if (this._validate(e, t, n)) {
          var i = this._properties[e];
          return (
            void 0 === i && ((i = {}), (this._properties[e] = i)),
            (i[t] = n),
            this._propertySet.add(t),
            !0
          );
        }
        return !1;
      }),
      (t.prototype._validate = function (t, n, i) {
        return (
          !(
            void 0 !== this._properties[e.CLEAR_ALL] || this._propertySet.has(n)
          ) &&
          (t === e.ADD
            ? "number" == typeof i
            : t === e.UNSET || t === e.REMOVE || T(n, i))
        );
      }),
      t
    );
  })(),
  R = function (e, t, n) {
    return l(
      l(l({}, "string" == typeof e ? { event_type: e } : e), n),
      t && { event_properties: t }
    );
  },
  x = function (e, t) {
    return l(l({}, t), {
      event_type: n.IDENTIFY,
      user_properties: e.getUserProperties(),
    });
  },
  N = function (e, t, i, r) {
    var o;
    return l(l({}, r), {
      event_type: n.GROUP_IDENTIFY,
      group_properties: i.getUserProperties(),
      groups: (((o = {})[e] = t), o),
    });
  },
  U = function (e, t, i) {
    var r,
      o = new P();
    return (
      o.set(e, t),
      l(l({}, i), {
        event_type: n.IDENTIFY,
        user_properties: o.getUserProperties(),
        groups: (((r = {})[e] = t), r),
      })
    );
  },
  D = function (e, t) {
    return l(l({}, t), {
      event_type: n.REVENUE,
      event_properties: e.getEventProperties(),
    });
  },
  q = function (e, t, n) {
    return (
      void 0 === t && (t = 0),
      void 0 === n && (n = s.Unknown),
      { event: e, code: t, message: n }
    );
  },
  A = (function () {
    function e(e) {
      (this.client = e),
        (this.queue = []),
        (this.applying = !1),
        (this.plugins = []);
    }
    return (
      (e.prototype.register = function (e, t) {
        return f(this, void 0, void 0, function () {
          return p(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, e.setup(t, this.client)];
              case 1:
                return n.sent(), this.plugins.push(e), [2];
            }
          });
        });
      }),
      (e.prototype.deregister = function (e) {
        return (
          this.plugins.splice(
            this.plugins.findIndex(function (t) {
              return t.name === e;
            }),
            1
          ),
          Promise.resolve()
        );
      }),
      (e.prototype.reset = function (e) {
        (this.applying = !1), (this.plugins = []), (this.client = e);
      }),
      (e.prototype.push = function (e) {
        var t = this;
        return new Promise(function (n) {
          t.queue.push([e, n]), t.scheduleApply(0);
        });
      }),
      (e.prototype.scheduleApply = function (e) {
        var t = this;
        this.applying ||
          ((this.applying = !0),
          setTimeout(function () {
            t.apply(t.queue.shift()).then(function () {
              (t.applying = !1), t.queue.length > 0 && t.scheduleApply(0);
            });
          }, e));
      }),
      (e.prototype.apply = function (e) {
        return f(this, void 0, void 0, function () {
          var t, n, i, o, s, u, a, c, d, f, g, y;
          return p(this, function (p) {
            switch (p.label) {
              case 0:
                if (!e) return [2];
                (t = h(e, 1)[0]),
                  (n = h(e, 2)[1]),
                  (i = this.plugins.filter(function (e) {
                    return e.type === r.BEFORE;
                  })),
                  (p.label = 1);
              case 1:
                p.trys.push([1, 6, 7, 8]),
                  (s = (o = v(i)).next()),
                  (p.label = 2);
              case 2:
                if (s.done) return [3, 5];
                return [4, (0, s.value).execute(l({}, t))];
              case 3:
                (t = p.sent()), (p.label = 4);
              case 4:
                return (s = o.next()), [3, 2];
              case 5:
                return [3, 8];
              case 6:
                return (d = { error: p.sent() }), [3, 8];
              case 7:
                try {
                  s && !s.done && (f = o.return) && f.call(o);
                } finally {
                  if (d) throw d.error;
                }
                return [7];
              case 8:
                (u = this.plugins.filter(function (e) {
                  return e.type === r.ENRICHMENT;
                })),
                  (p.label = 9);
              case 9:
                p.trys.push([9, 14, 15, 16]),
                  (c = (a = v(u)).next()),
                  (p.label = 10);
              case 10:
                if (c.done) return [3, 13];
                return [4, (0, c.value).execute(l({}, t))];
              case 11:
                (t = p.sent()), (p.label = 12);
              case 12:
                return (c = a.next()), [3, 10];
              case 13:
                return [3, 16];
              case 14:
                return (g = { error: p.sent() }), [3, 16];
              case 15:
                try {
                  c && !c.done && (y = a.return) && y.call(a);
                } finally {
                  if (g) throw g.error;
                }
                return [7];
              case 16:
                return (
                  Promise.all(
                    this.plugins
                      .filter(function (e) {
                        return e.type === r.DESTINATION;
                      })
                      .map(function (e) {
                        var n = l({}, t);
                        return e.execute(n).catch(function (e) {
                          return q(n, 0, String(e));
                        });
                      })
                  ).then(function (e) {
                    n(h(e, 1)[0]);
                  }),
                  [2]
                );
            }
          });
        });
      }),
      (e.prototype.flush = function () {
        return f(this, void 0, void 0, function () {
          var e,
            t = this;
          return p(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (e = this.queue),
                  (this.queue = []),
                  [
                    4,
                    Promise.all(
                      e.map(function (e) {
                        return t.apply(e);
                      })
                    ),
                  ]
                );
              case 1:
                return (
                  n.sent(),
                  [
                    4,
                    Promise.all(
                      this.plugins
                        .filter(function (e) {
                          return e.type === r.DESTINATION;
                        })
                        .map(function (e) {
                          return e.flush && e.flush();
                        })
                    ),
                  ]
                );
              case 2:
                return n.sent(), [2];
            }
          });
        });
      }),
      e
    );
  })(),
  C = "Event tracked successfully",
  j = "Unexpected error occurred",
  L = "Event rejected due to exceeded retry count",
  V = "Event skipped due to optOut config",
  M = "Event rejected due to missing API key",
  F = "Invalid API key",
  B = "Client not initialized",
  Q = function (e) {
    return { promise: e || Promise.resolve() };
  },
  K = (function () {
    function e(e) {
      void 0 === e && (e = "$default"),
        (this.initializing = !1),
        (this.q = []),
        (this.dispatchQ = []),
        (this.logEvent = this.track.bind(this)),
        (this.timeline = new A(this)),
        (this.name = e);
    }
    return (
      (e.prototype._init = function (e) {
        return f(this, void 0, void 0, function () {
          return p(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (this.config = e),
                  this.timeline.reset(this),
                  [4, this.runQueuedFunctions("q")]
                );
              case 1:
                return t.sent(), [2];
            }
          });
        });
      }),
      (e.prototype.runQueuedFunctions = function (e) {
        return f(this, void 0, void 0, function () {
          var t, n, i, r, o;
          return p(this, function (s) {
            switch (s.label) {
              case 0:
                (t = this[e]), (this[e] = []), (s.label = 1);
              case 1:
                s.trys.push([1, 6, 7, 8]),
                  (i = (n = v(t)).next()),
                  (s.label = 2);
              case 2:
                if (i.done) return [3, 5];
                return [4, (0, i.value)()];
              case 3:
                s.sent(), (s.label = 4);
              case 4:
                return (i = n.next()), [3, 2];
              case 5:
                return [3, 8];
              case 6:
                return (r = { error: s.sent() }), [3, 8];
              case 7:
                try {
                  i && !i.done && (o = n.return) && o.call(n);
                } finally {
                  if (r) throw r.error;
                }
                return [7];
              case 8:
                return [2];
            }
          });
        });
      }),
      (e.prototype.track = function (e, t, n) {
        var i = R(e, t, n);
        return Q(this.dispatch(i));
      }),
      (e.prototype.identify = function (e, t) {
        var n = x(e, t);
        return Q(this.dispatch(n));
      }),
      (e.prototype.groupIdentify = function (e, t, n, i) {
        var r = N(e, t, n, i);
        return Q(this.dispatch(r));
      }),
      (e.prototype.setGroup = function (e, t, n) {
        var i = U(e, t, n);
        return Q(this.dispatch(i));
      }),
      (e.prototype.revenue = function (e, t) {
        var n = D(e, t);
        return Q(this.dispatch(n));
      }),
      (e.prototype.add = function (e) {
        return this.config
          ? Q(this.timeline.register(e, this.config))
          : (this.q.push(this.add.bind(this, e)), Q());
      }),
      (e.prototype.remove = function (e) {
        return this.config
          ? Q(this.timeline.deregister(e))
          : (this.q.push(this.remove.bind(this, e)), Q());
      }),
      (e.prototype.dispatchWithCallback = function (e, t) {
        if (!this.config) return t(q(e, 0, B));
        this.process(e).then(t);
      }),
      (e.prototype.dispatch = function (e) {
        return f(this, void 0, void 0, function () {
          var t = this;
          return p(this, function (n) {
            return this.config
              ? [2, this.process(e)]
              : [
                  2,
                  new Promise(function (n) {
                    t.dispatchQ.push(t.dispatchWithCallback.bind(t, e, n));
                  }),
                ];
          });
        });
      }),
      (e.prototype.process = function (e) {
        return f(this, void 0, void 0, function () {
          var t, n;
          return p(this, function (i) {
            switch (i.label) {
              case 0:
                if ((i.trys.push([0, 2, , 3]), this.config.optOut))
                  return [2, q(e, 0, V)];
                return [4, this.timeline.push(e)];
              case 1:
                return (
                  200 === (t = i.sent()).code
                    ? this.config.loggerProvider.log(t.message)
                    : this.config.loggerProvider.error(t.message),
                  [2, t]
                );
              case 2:
                return (
                  (n = String(i.sent())),
                  this.config.loggerProvider.error(n),
                  [2, (t = q(e, 0, n))]
                );
              case 3:
                return [2];
            }
          });
        });
      }),
      (e.prototype.setOptOut = function (e) {
        if (!this.config) {
          this.q.push(this.setOptOut.bind(this, Boolean(e)));
          return;
        }
        this.config.optOut = Boolean(e);
      }),
      (e.prototype.flush = function () {
        return Q(this.timeline.flush());
      }),
      e
    );
  })(),
  $ = (function () {
    function e() {
      (this.productId = ""), (this.quantity = 1), (this.price = 0);
    }
    return (
      (e.prototype.setProductId = function (e) {
        return (this.productId = e), this;
      }),
      (e.prototype.setQuantity = function (e) {
        return e > 0 && (this.quantity = e), this;
      }),
      (e.prototype.setPrice = function (e) {
        return (this.price = e), this;
      }),
      (e.prototype.setRevenueType = function (e) {
        return (this.revenueType = e), this;
      }),
      (e.prototype.setRevenue = function (e) {
        return (this.revenue = e), this;
      }),
      (e.prototype.setEventProperties = function (e) {
        return k(e) && (this.properties = e), this;
      }),
      (e.prototype.getEventProperties = function () {
        var e = this.properties ? l({}, this.properties) : {};
        return (
          (e[t.REVENUE_PRODUCT_ID] = this.productId),
          (e[t.REVENUE_QUANTITY] = this.quantity),
          (e[t.REVENUE_PRICE] = this.price),
          (e[t.REVENUE_TYPE] = this.revenueType),
          (e[t.REVENUE] = this.revenue),
          e
        );
      }),
      e
    );
  })(),
  z = function (e, t) {
    var n = Math.max(t, 1);
    return e.reduce(function (e, t, i) {
      var r = Math.floor(i / n);
      return e[r] || (e[r] = []), e[r].push(t), e;
    }, []);
  },
  H = "Amplitude Logger ",
  W = (function () {
    function e() {
      this.logLevel = i.None;
    }
    return (
      (e.prototype.disable = function () {
        this.logLevel = i.None;
      }),
      (e.prototype.enable = function (e) {
        void 0 === e && (e = i.Warn), (this.logLevel = e);
      }),
      (e.prototype.log = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.logLevel < i.Verbose ||
          console.log("".concat(H, "[Log]: ").concat(e.join(" ")));
      }),
      (e.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.logLevel < i.Warn ||
          console.warn("".concat(H, "[Warn]: ").concat(e.join(" ")));
      }),
      (e.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.logLevel < i.Error ||
          console.error("".concat(H, "[Error]: ").concat(e.join(" ")));
      }),
      (e.prototype.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.logLevel < i.Debug ||
          console.log("".concat(H, "[Debug]: ").concat(e.join(" ")));
      }),
      e
    );
  })(),
  J = function () {
    return {
      flushMaxRetries: 12,
      flushQueueSize: 200,
      flushIntervalMillis: 1e4,
      logLevel: i.Warn,
      loggerProvider: new W(),
      optOut: !1,
      serverUrl: I,
      serverZone: o.US,
      useBatch: !1,
    };
  },
  Z = (function () {
    function e(e) {
      this._optOut = !1;
      var t,
        n,
        i,
        r = J();
      (this.apiKey = e.apiKey),
        (this.flushIntervalMillis =
          e.flushIntervalMillis || r.flushIntervalMillis),
        (this.flushMaxRetries = e.flushMaxRetries || r.flushMaxRetries),
        (this.flushQueueSize = e.flushQueueSize || r.flushQueueSize),
        (this.loggerProvider = e.loggerProvider || r.loggerProvider),
        (this.logLevel =
          null !== (t = e.logLevel) && void 0 !== t ? t : r.logLevel),
        (this.minIdLength = e.minIdLength),
        (this.plan = e.plan),
        (this.ingestionMetadata = e.ingestionMetadata),
        (this.optOut = null !== (n = e.optOut) && void 0 !== n ? n : r.optOut),
        (this.serverUrl = e.serverUrl),
        (this.serverZone = e.serverZone || r.serverZone),
        (this.storageProvider = e.storageProvider),
        (this.transportProvider = e.transportProvider),
        (this.useBatch =
          null !== (i = e.useBatch) && void 0 !== i ? i : r.useBatch),
        this.loggerProvider.enable(this.logLevel);
      var o = G(e.serverUrl, e.serverZone, e.useBatch);
      (this.serverZone = o.serverZone), (this.serverUrl = o.serverUrl);
    }
    return (
      Object.defineProperty(e.prototype, "optOut", {
        get: function () {
          return this._optOut;
        },
        set: function (e) {
          this._optOut = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      e
    );
  })(),
  Y = function (e, t) {
    return e === o.EU ? (t ? S : w) : t ? E : I;
  },
  G = function (e, t, n) {
    if (
      (void 0 === e && (e = ""),
      void 0 === t && (t = J().serverZone),
      void 0 === n && (n = J().useBatch),
      e)
    )
      return { serverUrl: e, serverZone: void 0 };
    var i = ["US", "EU"].includes(t) ? t : J().serverZone;
    return { serverZone: i, serverUrl: Y(i, n) };
  },
  X = (function () {
    function e() {
      (this.name = "amplitude"),
        (this.type = r.DESTINATION),
        (this.retryTimeout = 1e3),
        (this.throttleTimeout = 3e4),
        (this.storageKey = ""),
        (this.scheduled = null),
        (this.queue = []);
    }
    return (
      (e.prototype.setup = function (e) {
        var t;
        return f(this, void 0, void 0, function () {
          var n,
            i = this;
          return p(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (this.config = e),
                  (this.storageKey = ""
                    .concat(_, "_")
                    .concat(this.config.apiKey.substring(0, 10))),
                  [
                    4,
                    null === (t = this.config.storageProvider) || void 0 === t
                      ? void 0
                      : t.get(this.storageKey),
                  ]
                );
              case 1:
                return (
                  (n = r.sent()),
                  this.saveEvents(),
                  n &&
                    n.length > 0 &&
                    Promise.all(
                      n.map(function (e) {
                        return i.execute(e);
                      })
                    ).catch(),
                  [2, Promise.resolve(void 0)]
                );
            }
          });
        });
      }),
      (e.prototype.execute = function (e) {
        var t = this;
        return new Promise(function (n) {
          t.addToQueue({
            event: e,
            attempts: 0,
            callback: function (e) {
              return n(e);
            },
            timeout: 0,
          });
        });
      }),
      (e.prototype.addToQueue = function () {
        for (var e = this, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        t
          .filter(function (t) {
            return t.attempts < e.config.flushMaxRetries
              ? ((t.attempts += 1), !0)
              : (e.fulfillRequest([t], 500, L), !1);
          })
          .forEach(function (t) {
            if (((e.queue = e.queue.concat(t)), 0 === t.timeout)) {
              e.schedule(e.config.flushIntervalMillis);
              return;
            }
            setTimeout(function () {
              (t.timeout = 0), e.schedule(0);
            }, t.timeout);
          }),
          this.saveEvents();
      }),
      (e.prototype.schedule = function (e) {
        var t = this;
        this.scheduled ||
          (this.scheduled = setTimeout(function () {
            t.flush(!0).then(function () {
              t.queue.length > 0 && t.schedule(e);
            });
          }, e));
      }),
      (e.prototype.flush = function (e) {
        return (
          void 0 === e && (e = !1),
          f(this, void 0, void 0, function () {
            var t,
              n,
              i = this;
            return p(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (t = []),
                    (n = []),
                    this.queue.forEach(function (e) {
                      return 0 === e.timeout ? t.push(e) : n.push(e);
                    }),
                    (this.queue = n),
                    this.scheduled &&
                      (clearTimeout(this.scheduled), (this.scheduled = null)),
                    [
                      4,
                      Promise.all(
                        z(t, this.config.flushQueueSize).map(function (t) {
                          return i.send(t, e);
                        })
                      ),
                    ]
                  );
                case 1:
                  return r.sent(), [2];
              }
            });
          })
        );
      }),
      (e.prototype.send = function (e, t) {
        return (
          void 0 === t && (t = !0),
          f(this, void 0, void 0, function () {
            var n, i, r, o, s;
            return p(this, function (u) {
              switch (u.label) {
                case 0:
                  if (!this.config.apiKey)
                    return [2, this.fulfillRequest(e, 400, M)];
                  (n = {
                    api_key: this.config.apiKey,
                    events: e.map(function (e) {
                      var t = e.event;
                      return t.extra, d(t, ["extra"]);
                    }),
                    options: { min_id_length: this.config.minIdLength },
                  }),
                    (u.label = 1);
                case 1:
                  return (
                    u.trys.push([1, 3, , 4]),
                    (i = G(
                      this.config.serverUrl,
                      this.config.serverZone,
                      this.config.useBatch
                    ).serverUrl),
                    [4, this.config.transportProvider.send(i, n)]
                  );
                case 2:
                  if (null === (r = u.sent()))
                    return this.fulfillRequest(e, 0, j), [2];
                  if (!t) {
                    if ("body" in r) {
                      o = "";
                      try {
                        o = JSON.stringify(r.body, null, 2);
                      } catch (e) {}
                      this.fulfillRequest(
                        e,
                        r.statusCode,
                        "".concat(r.status, ": ").concat(o)
                      );
                    } else this.fulfillRequest(e, r.statusCode, r.status);
                    return [2];
                  }
                  return this.handleReponse(r, e), [3, 4];
                case 3:
                  return (
                    (s = u.sent()), this.fulfillRequest(e, 0, String(s)), [3, 4]
                  );
                case 4:
                  return [2];
              }
            });
          })
        );
      }),
      (e.prototype.handleReponse = function (e, t) {
        switch (e.status) {
          case s.Success:
            this.handleSuccessResponse(e, t);
            break;
          case s.Invalid:
            this.handleInvalidResponse(e, t);
            break;
          case s.PayloadTooLarge:
            this.handlePayloadTooLargeResponse(e, t);
            break;
          case s.RateLimit:
            this.handleRateLimitResponse(e, t);
            break;
          default:
            this.handleOtherReponse(t);
        }
      }),
      (e.prototype.handleSuccessResponse = function (e, t) {
        this.fulfillRequest(t, e.statusCode, C);
      }),
      (e.prototype.handleInvalidResponse = function (e, t) {
        var n = this;
        if (e.body.missingField || e.body.error.startsWith(F)) {
          this.fulfillRequest(t, e.statusCode, e.body.error);
          return;
        }
        var i = g(
            g(
              g(
                g([], h(Object.values(e.body.eventsWithInvalidFields)), !1),
                h(Object.values(e.body.eventsWithMissingFields)),
                !1
              ),
              h(Object.values(e.body.eventsWithInvalidIdLengths)),
              !1
            ),
            h(e.body.silencedEvents),
            !1
          ).flat(),
          r = new Set(i),
          o = t.filter(function (t, i) {
            if (r.has(i)) {
              n.fulfillRequest([t], e.statusCode, e.body.error);
              return;
            }
            return !0;
          });
        this.addToQueue.apply(this, g([], h(o), !1));
      }),
      (e.prototype.handlePayloadTooLargeResponse = function (e, t) {
        if (1 === t.length) {
          this.fulfillRequest(t, e.statusCode, e.body.error);
          return;
        }
        (this.config.flushQueueSize /= 2),
          this.addToQueue.apply(this, g([], h(t), !1));
      }),
      (e.prototype.handleRateLimitResponse = function (e, t) {
        var n = this,
          i = Object.keys(e.body.exceededDailyQuotaUsers),
          r = Object.keys(e.body.exceededDailyQuotaDevices),
          o = e.body.throttledEvents,
          s = new Set(i),
          u = new Set(r),
          a = new Set(o),
          c = t.filter(function (t, i) {
            if (
              (t.event.user_id && s.has(t.event.user_id)) ||
              (t.event.device_id && u.has(t.event.device_id))
            ) {
              n.fulfillRequest([t], e.statusCode, e.body.error);
              return;
            }
            return a.has(i) && (t.timeout = n.throttleTimeout), !0;
          });
        this.addToQueue.apply(this, g([], h(c), !1));
      }),
      (e.prototype.handleOtherReponse = function (e) {
        var t = this;
        this.addToQueue.apply(
          this,
          g(
            [],
            h(
              e.map(function (e) {
                return (e.timeout = e.attempts * t.retryTimeout), e;
              })
            ),
            !1
          )
        );
      }),
      (e.prototype.fulfillRequest = function (e, t, n) {
        this.saveEvents(),
          e.forEach(function (e) {
            return e.callback(q(e.event, t, n));
          });
      }),
      (e.prototype.saveEvents = function () {
        if (this.config.storageProvider) {
          var e = Array.from(
            this.queue.map(function (e) {
              return e.event;
            })
          );
          this.config.storageProvider.set(this.storageKey, e);
        }
      }),
      e
    );
  })(),
  ee = function (e) {
    return (
      void 0 === e && (e = 0),
      (Error().stack || "")
        .split("\n")
        .slice(2 + e)
        .map(function (e) {
          return e.trim();
        })
    );
  },
  et = function (e) {
    return function () {
      var t = l({}, e.config);
      return { logger: t.loggerProvider, logLevel: t.logLevel };
    };
  },
  en = function (e, t) {
    var n, i;
    t = (t = t.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "");
    try {
      for (var r = v(t.split(".")), o = r.next(); !o.done; o = r.next()) {
        var s = o.value;
        if (!(s in e)) return;
        e = e[s];
      }
    } catch (e) {
      n = { error: e };
    } finally {
      try {
        o && !o.done && (i = r.return) && i.call(r);
      } finally {
        if (n) throw n.error;
      }
    }
    return e;
  },
  ei = function (e, t) {
    return function () {
      var n,
        i,
        r = {};
      try {
        for (var o = v(t), s = o.next(); !s.done; s = o.next()) {
          var u = s.value;
          r[u] = en(e, u);
        }
      } catch (e) {
        n = { error: e };
      } finally {
        try {
          s && !s.done && (i = o.return) && i.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      return r;
    };
  },
  er = function (e, t, n, r, o) {
    return (
      void 0 === o && (o = null),
      function () {
        for (var s = [], u = 0; u < arguments.length; u++) s[u] = arguments[u];
        var a = n(),
          c = a.logger,
          l = a.logLevel;
        if ((l && l < i.Debug) || !l || !c) return e.apply(o, s);
        var d = {
          type: "invoke public method",
          name: t,
          args: s,
          stacktrace: ee(1),
          time: { start: new Date().toISOString() },
          states: {},
        };
        r && d.states && (d.states.before = r());
        var f = e.apply(o, s);
        return (
          f && f.promise
            ? f.promise.then(function () {
                r && d.states && (d.states.after = r()),
                  d.time && (d.time.end = new Date().toISOString()),
                  c.debug(JSON.stringify(d, null, 2));
              })
            : (r && d.states && (d.states.after = r()),
              d.time && (d.time.end = new Date().toISOString()),
              c.debug(JSON.stringify(d, null, 2))),
          f
        );
      }
    );
  },
  eo = function (e) {
    return e
      ? (e ^ ((16 * Math.random()) >> (e / 4))).toString(16)
      : (
          String(1e7) +
          String(-1e3) +
          String(-4e3) +
          String(-8e3) +
          String(-1e11)
        ).replace(/[018]/g, eo);
  },
  es = (function () {
    function e() {
      this.memoryStorage = new Map();
    }
    return (
      (e.prototype.isEnabled = function () {
        return f(this, void 0, void 0, function () {
          return p(this, function (e) {
            return [2, !0];
          });
        });
      }),
      (e.prototype.get = function (e) {
        return f(this, void 0, void 0, function () {
          return p(this, function (t) {
            return [2, this.memoryStorage.get(e)];
          });
        });
      }),
      (e.prototype.getRaw = function (e) {
        return f(this, void 0, void 0, function () {
          var t;
          return p(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.get(e)];
              case 1:
                return [2, (t = n.sent()) ? JSON.stringify(t) : void 0];
            }
          });
        });
      }),
      (e.prototype.set = function (e, t) {
        return f(this, void 0, void 0, function () {
          return p(this, function (n) {
            return this.memoryStorage.set(e, t), [2];
          });
        });
      }),
      (e.prototype.remove = function (e) {
        return f(this, void 0, void 0, function () {
          return p(this, function (t) {
            return this.memoryStorage.delete(e), [2];
          });
        });
      }),
      (e.prototype.reset = function () {
        return f(this, void 0, void 0, function () {
          return p(this, function (e) {
            return this.memoryStorage.clear(), [2];
          });
        });
      }),
      e
    );
  })(),
  eu = (function () {
    function e() {}
    return (
      (e.prototype.send = function (e, t) {
        return Promise.resolve(null);
      }),
      (e.prototype.buildResponse = function (e) {
        if ("object" != typeof e) return null;
        var t,
          n,
          i,
          r,
          o,
          u,
          a,
          c,
          l,
          d,
          f,
          p,
          v,
          h,
          g,
          y,
          m,
          b,
          _,
          I,
          w,
          E,
          S = e.code || 0,
          O = this.buildStatus(S);
        switch (O) {
          case s.Success:
            return {
              status: O,
              statusCode: S,
              body: {
                eventsIngested:
                  null !== (t = e.events_ingested) && void 0 !== t ? t : 0,
                payloadSizeBytes:
                  null !== (n = e.payload_size_bytes) && void 0 !== n ? n : 0,
                serverUploadTime:
                  null !== (i = e.server_upload_time) && void 0 !== i ? i : 0,
              },
            };
          case s.Invalid:
            return {
              status: O,
              statusCode: S,
              body: {
                error: null !== (r = e.error) && void 0 !== r ? r : "",
                missingField:
                  null !== (o = e.missing_field) && void 0 !== o ? o : "",
                eventsWithInvalidFields:
                  null !== (u = e.events_with_invalid_fields) && void 0 !== u
                    ? u
                    : {},
                eventsWithMissingFields:
                  null !== (a = e.events_with_missing_fields) && void 0 !== a
                    ? a
                    : {},
                eventsWithInvalidIdLengths:
                  null !== (c = e.events_with_invalid_id_lengths) &&
                  void 0 !== c
                    ? c
                    : {},
                epsThreshold:
                  null !== (l = e.eps_threshold) && void 0 !== l ? l : 0,
                exceededDailyQuotaDevices:
                  null !== (d = e.exceeded_daily_quota_devices) && void 0 !== d
                    ? d
                    : {},
                silencedDevices:
                  null !== (f = e.silenced_devices) && void 0 !== f ? f : [],
                silencedEvents:
                  null !== (p = e.silenced_events) && void 0 !== p ? p : [],
                throttledDevices:
                  null !== (v = e.throttled_devices) && void 0 !== v ? v : {},
                throttledEvents:
                  null !== (h = e.throttled_events) && void 0 !== h ? h : [],
              },
            };
          case s.PayloadTooLarge:
            return {
              status: O,
              statusCode: S,
              body: { error: null !== (g = e.error) && void 0 !== g ? g : "" },
            };
          case s.RateLimit:
            return {
              status: O,
              statusCode: S,
              body: {
                error: null !== (y = e.error) && void 0 !== y ? y : "",
                epsThreshold:
                  null !== (m = e.eps_threshold) && void 0 !== m ? m : 0,
                throttledDevices:
                  null !== (b = e.throttled_devices) && void 0 !== b ? b : {},
                throttledUsers:
                  null !== (_ = e.throttled_users) && void 0 !== _ ? _ : {},
                exceededDailyQuotaDevices:
                  null !== (I = e.exceeded_daily_quota_devices) && void 0 !== I
                    ? I
                    : {},
                exceededDailyQuotaUsers:
                  null !== (w = e.exceeded_daily_quota_users) && void 0 !== w
                    ? w
                    : {},
                throttledEvents:
                  null !== (E = e.throttled_events) && void 0 !== E ? E : [],
              },
            };
          case s.Timeout:
          default:
            return { status: O, statusCode: S };
        }
      }),
      (e.prototype.buildStatus = function (e) {
        return e >= 200 && e < 300
          ? s.Success
          : 429 === e
          ? s.RateLimit
          : 413 === e
          ? s.PayloadTooLarge
          : 408 === e
          ? s.Timeout
          : e >= 400 && e < 500
          ? s.Invalid
          : e >= 500
          ? s.Failed
          : s.Unknown;
      }),
      e
    );
  })(),
  ea = function () {
    return "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof global
      ? global
      : void 0;
  },
  ec = function () {
    var e,
      t = ea();
    return (
      null === (e = null == t ? void 0 : t.location) || void 0 === e
        ? void 0
        : e.search
    )
      ? t.location.search
          .substring(1)
          .split("&")
          .filter(Boolean)
          .reduce(function (e, t) {
            var n = t.split("=", 2),
              i = el(n[0]),
              r = el(n[1]);
            return r && (e[i] = r), e;
          }, {})
      : {};
  },
  el = function (e) {
    void 0 === e && (e = "");
    try {
      return decodeURIComponent(e);
    } catch (e) {
      return "";
    }
  },
  ed = "utm_campaign",
  ef = "utm_content",
  ep = "utm_id",
  ev = "utm_medium",
  eh = "utm_source",
  eg = "utm_term",
  ey = "dclid",
  em = "fbclid",
  eb = "gbraid",
  e_ = "gclid",
  eI = "ko_click_id",
  ew = "msclkid",
  eE = "ttclid",
  eS = "twclid",
  eO = "wbraid",
  ek = {
    utm_campaign: void 0,
    utm_content: void 0,
    utm_id: void 0,
    utm_medium: void 0,
    utm_source: void 0,
    utm_term: void 0,
    referrer: void 0,
    referring_domain: void 0,
    dclid: void 0,
    gbraid: void 0,
    gclid: void 0,
    fbclid: void 0,
    ko_click_id: void 0,
    msclkid: void 0,
    ttclid: void 0,
    twclid: void 0,
    wbraid: void 0,
  },
  eT = (function () {
    function e() {}
    return (
      (e.prototype.parse = function () {
        return f(this, void 0, void 0, function () {
          return p(this, function (e) {
            return [
              2,
              l(
                l(l(l({}, ek), this.getUtmParam()), this.getReferrer()),
                this.getClickIds()
              ),
            ];
          });
        });
      }),
      (e.prototype.getUtmParam = function () {
        var e = ec();
        return {
          utm_campaign: e[ed],
          utm_content: e[ef],
          utm_id: e[ep],
          utm_medium: e[ev],
          utm_source: e[eh],
          utm_term: e[eg],
        };
      }),
      (e.prototype.getReferrer = function () {
        var e,
          t,
          n = { referrer: void 0, referring_domain: void 0 };
        try {
          (n.referrer = document.referrer || void 0),
            (n.referring_domain =
              null !==
                (t =
                  null === (e = n.referrer) || void 0 === e
                    ? void 0
                    : e.split("/")[2]) && void 0 !== t
                ? t
                : void 0);
        } catch (e) {}
        return n;
      }),
      (e.prototype.getClickIds = function () {
        var e,
          t = ec();
        return (
          ((e = {})[ey] = t[ey]),
          (e[em] = t[em]),
          (e[eb] = t[eb]),
          (e[e_] = t[e_]),
          (e[eI] = t[eI]),
          (e[ew] = t[ew]),
          (e[eE] = t[eE]),
          (e[eS] = t[eS]),
          (e[eO] = t[eO]),
          e
        );
      }),
      e
    );
  })(),
  eP = function (e, t, n) {
    return (
      void 0 === t && (t = ""),
      void 0 === n && (n = 10),
      [b, t, e.substring(0, n)].filter(Boolean).join("_")
    );
  },
  eR = function (e) {
    return "".concat(b.toLowerCase(), "_").concat(e.substring(0, 6));
  },
  ex = (function () {
    function e(e) {
      this.options = l({}, e);
    }
    return (
      (e.prototype.isEnabled = function () {
        return f(this, void 0, void 0, function () {
          var t, n, i;
          return p(this, function (r) {
            switch (r.label) {
              case 0:
                if (!ea()) return [2, !1];
                (t = String(Date.now())),
                  (n = new e(this.options)),
                  (i = "AMP_TEST"),
                  (r.label = 1);
              case 1:
                return r.trys.push([1, 4, 5, 7]), [4, n.set(i, t)];
              case 2:
                return r.sent(), [4, n.get(i)];
              case 3:
                return [2, r.sent() === t];
              case 4:
                return r.sent(), [2, !1];
              case 5:
                return [4, n.remove(i)];
              case 6:
                return r.sent(), [7];
              case 7:
                return [2];
            }
          });
        });
      }),
      (e.prototype.get = function (e) {
        return f(this, void 0, void 0, function () {
          var t;
          return p(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.getRaw(e)];
              case 1:
                if (!(t = n.sent())) return [2, void 0];
                try {
                  try {
                    t = decodeURIComponent(atob(t));
                  } catch (e) {}
                  return [2, JSON.parse(t)];
                } catch (e) {
                  return [2, void 0];
                }
                return [2];
            }
          });
        });
      }),
      (e.prototype.getRaw = function (e) {
        var t;
        return f(this, void 0, void 0, function () {
          var n, i;
          return p(this, function (r) {
            return (i = (
              null !==
                (t =
                  null == (n = ea())
                    ? void 0
                    : n.document.cookie.split("; ")) && void 0 !== t
                ? t
                : []
            ).find(function (t) {
              return 0 === t.indexOf(e + "=");
            }))
              ? [2, i.substring(e.length + 1)]
              : [2, void 0];
          });
        });
      }),
      (e.prototype.set = function (e, t) {
        var n;
        return f(this, void 0, void 0, function () {
          var i, r, o, s, u, a;
          return p(this, function (c) {
            try {
              (i =
                null !== (n = this.options.expirationDays) && void 0 !== n
                  ? n
                  : 0),
                (r = null !== t ? i : -1),
                (o = void 0),
                r &&
                  ((s = new Date()).setTime(s.getTime() + 864e5 * r), (o = s)),
                (u = ""
                  .concat(e, "=")
                  .concat(btoa(encodeURIComponent(JSON.stringify(t))))),
                o && (u += "; expires=".concat(o.toUTCString())),
                (u += "; path=/"),
                this.options.domain &&
                  (u += "; domain=".concat(this.options.domain)),
                this.options.secure && (u += "; Secure"),
                this.options.sameSite &&
                  (u += "; SameSite=".concat(this.options.sameSite)),
                (a = ea()) && (a.document.cookie = u);
            } catch (e) {}
            return [2];
          });
        });
      }),
      (e.prototype.remove = function (e) {
        return f(this, void 0, void 0, function () {
          return p(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.set(e, null)];
              case 1:
                return t.sent(), [2];
            }
          });
        });
      }),
      (e.prototype.reset = function () {
        return f(this, void 0, void 0, function () {
          return p(this, function (e) {
            return [2];
          });
        });
      }),
      e
    );
  })(),
  eN = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      c(t, e),
      (t.prototype.send = function (e, t) {
        return f(this, void 0, void 0, function () {
          var n, i;
          return p(this, function (r) {
            switch (r.label) {
              case 0:
                if ("undefined" == typeof fetch)
                  throw Error("FetchTransport is not supported");
                return (
                  (n = {
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "*/*",
                    },
                    body: JSON.stringify(t),
                    method: "POST",
                  }),
                  [4, fetch(e, n)]
                );
              case 1:
                return [4, r.sent().json()];
              case 2:
                return (i = r.sent()), [2, this.buildResponse(i)];
            }
          });
        });
      }),
      t
    );
  })(eu);
class eU {
  getResult() {
    return {
      os: { name: "", version: "" },
      browser: {
        name: window.__AD_OS__ || "",
        version: window.__AD_OS_VER__ || "",
      },
      device: {
        model: window.__AD_DEVICE__ || "",
        vendor: window.__AD_DEVICE_VENDOR__ || "",
      },
    };
  }
}
var eD = (function () {
    function e() {
      this.ua = new eU(
        "undefined" != typeof navigator ? navigator.userAgent : null
      ).getResult();
    }
    return (
      (e.prototype.getApplicationContext = function () {
        return {
          versionName: this.versionName,
          language: eC(),
          platform: "Web",
          os: eq(this.ua),
          deviceModel: eA(this.ua),
        };
      }),
      e
    );
  })(),
  eq = function (e) {
    var t, n;
    return [
      null === (t = e.browser) || void 0 === t ? void 0 : t.name,
      null === (n = e.browser) || void 0 === n ? void 0 : n.major,
    ]
      .filter(function (e) {
        return null != e;
      })
      .join(" ");
  },
  eA = function (e) {
    var t;
    return null === (t = e.os) || void 0 === t ? void 0 : t.name;
  },
  eC = function () {
    return (
      ("undefined" != typeof navigator &&
        ((navigator.languages && navigator.languages[0]) ||
          navigator.language)) ||
      ""
    );
  },
  ej = (function () {
    function e() {
      this.queue = [];
    }
    return (
      (e.prototype.logEvent = function (e) {
        this.receiver
          ? this.receiver(e)
          : this.queue.length < 512 && this.queue.push(e);
      }),
      (e.prototype.setEventReceiver = function (e) {
        (this.receiver = e),
          this.queue.length > 0 &&
            (this.queue.forEach(function (t) {
              e(t);
            }),
            (this.queue = []));
      }),
      e
    );
  })(),
  eL = function () {
    return (eL =
      Object.assign ||
      function (e) {
        for (var t, n = 1, i = arguments.length; n < i; n++)
          for (var r in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e;
      }).apply(this, arguments);
  },
  eV = function (e, t) {
    var n = typeof e;
    if (n !== typeof t) return !1;
    for (
      var i = 0, r = ["string", "number", "boolean", "undefined"];
      i < r.length;
      i++
    )
      if (r[i] === n) return e === t;
    if (null == e && null == t) return !0;
    if (null == e || null == t || e.length !== t.length) return !1;
    var o = Array.isArray(e),
      s = Array.isArray(t);
    if (o !== s) return !1;
    if (o && s) {
      for (var u = 0; u < e.length; u++) if (!eV(e[u], t[u])) return !1;
    } else {
      if (!eV(Object.keys(e).sort(), Object.keys(t).sort())) return !1;
      var a = !0;
      return (
        Object.keys(e).forEach(function (n) {
          eV(e[n], t[n]) || (a = !1);
        }),
        a
      );
    }
    return !0;
  },
  eM = "$set",
  eF = "$unset",
  eB = "$clearAll";
Object.entries ||
  (Object.entries = function (e) {
    for (var t = Object.keys(e), n = t.length, i = Array(n); n--; )
      i[n] = [t[n], e[t[n]]];
    return i;
  });
var eQ = (function () {
    function e() {
      (this.identity = { userProperties: {} }), (this.listeners = new Set());
    }
    return (
      (e.prototype.editIdentity = function () {
        var e = this,
          t = eL({}, this.identity.userProperties),
          n = eL(eL({}, this.identity), { userProperties: t });
        return {
          setUserId: function (e) {
            return (n.userId = e), this;
          },
          setDeviceId: function (e) {
            return (n.deviceId = e), this;
          },
          setUserProperties: function (e) {
            return (n.userProperties = e), this;
          },
          updateUserProperties: function (e) {
            for (
              var t = n.userProperties || {}, i = 0, r = Object.entries(e);
              i < r.length;
              i++
            ) {
              var o = r[i],
                s = o[0],
                u = o[1];
              switch (s) {
                case eM:
                  for (var a = 0, c = Object.entries(u); a < c.length; a++) {
                    var l = c[a],
                      d = l[0],
                      f = l[1];
                    t[d] = f;
                  }
                  break;
                case eF:
                  for (var p = 0, v = Object.keys(u); p < v.length; p++) {
                    var d = v[p];
                    delete t[d];
                  }
                  break;
                case eB:
                  t = {};
              }
            }
            return (n.userProperties = t), this;
          },
          commit: function () {
            return e.setIdentity(n), this;
          },
        };
      }),
      (e.prototype.getIdentity = function () {
        return eL({}, this.identity);
      }),
      (e.prototype.setIdentity = function (e) {
        var t = eL({}, this.identity);
        (this.identity = eL({}, e)),
          eV(t, this.identity) ||
            this.listeners.forEach(function (t) {
              t(e);
            });
      }),
      (e.prototype.addIdentityListener = function (e) {
        this.listeners.add(e);
      }),
      (e.prototype.removeIdentityListener = function (e) {
        this.listeners.delete(e);
      }),
      e
    );
  })(),
  eK =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof global
      ? global
      : self,
  e$ = (function () {
    function e() {
      (this.identityStore = new eQ()),
        (this.eventBridge = new ej()),
        (this.applicationContextProvider = new eD());
    }
    return (
      (e.getInstance = function (t) {
        return (
          eK.analyticsConnectorInstances ||
            (eK.analyticsConnectorInstances = {}),
          eK.analyticsConnectorInstances[t] ||
            (eK.analyticsConnectorInstances[t] = new e()),
          eK.analyticsConnectorInstances[t]
        );
      }),
      e
    );
  })(),
  ez = function () {
    return e$.getInstance("$default_instance");
  },
  eH = (function () {
    function e() {
      (this.name = "identity"),
        (this.type = r.BEFORE),
        (this.identityStore = ez().identityStore);
    }
    return (
      (e.prototype.execute = function (e) {
        return f(this, void 0, void 0, function () {
          var t;
          return p(this, function (n) {
            return (
              (t = e.user_properties) &&
                this.identityStore
                  .editIdentity()
                  .updateUserProperties(t)
                  .commit(),
              [2, e]
            );
          });
        });
      }),
      (e.prototype.setup = function (e) {
        return Promise.resolve(void 0);
      }),
      e
    );
  })(),
  eW = function () {
    if ("undefined" == typeof navigator) return "";
    var e,
      t,
      n,
      i,
      r = navigator.userLanguage;
    return null !==
      (i =
        null !==
          (n =
            null !==
              (t =
                null === (e = navigator.languages) || void 0 === e
                  ? void 0
                  : e[0]) && void 0 !== t
              ? t
              : navigator.language) && void 0 !== n
          ? n
          : r) && void 0 !== i
      ? i
      : "";
  },
  eJ = function (e) {
    return "boolean" == typeof e ? e : null != e && !!e.fileDownloads;
  },
  eZ = function (e) {
    return "boolean" == typeof e ? e : null != e && !!e.formInteractions;
  },
  eY = function (e) {
    return "boolean" == typeof e
      ? e
      : (null == e ? void 0 : e.pageViews) === !0 ||
          (null != e && !!e.pageViews && "object" == typeof e.pageViews);
  },
  eG = function (e) {
    return "boolean" == typeof e ? e : null != e && !!e.sessions;
  },
  eX = function (e) {
    var t,
      n = (
        null === (t = e.attribution) || void 0 === t ? void 0 : t.trackPageViews
      )
        ? "attribution"
        : function () {
            return !1;
          },
      i = void 0,
      r = "Page View";
    return (
      eY(e.defaultTracking) &&
        ((n = void 0),
        (r = void 0),
        e.defaultTracking &&
          "object" == typeof e.defaultTracking &&
          e.defaultTracking.pageViews &&
          "object" == typeof e.defaultTracking.pageViews &&
          ("trackOn" in e.defaultTracking.pageViews &&
            (n = e.defaultTracking.pageViews.trackOn),
          "trackHistoryChanges" in e.defaultTracking.pageViews &&
            (i = e.defaultTracking.pageViews.trackHistoryChanges),
          "eventType" in e.defaultTracking.pageViews &&
            e.defaultTracking.pageViews.eventType &&
            (r = e.defaultTracking.pageViews.eventType))),
      { trackOn: n, trackHistoryChanges: i, eventType: r }
    );
  },
  e0 = function (e, t) {
    e1(e, t);
  },
  e1 = function (e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
        r = i.name,
        o = i.args,
        s = i.resolve,
        u = e && e[r];
      if ("function" == typeof u) {
        var a = u.apply(e, o);
        "function" == typeof s && s(null == a ? void 0 : a.promise);
      }
    }
    return e;
  },
  e2 = function (e) {
    return e && void 0 !== e._q;
  },
  e4 = "1.9.0",
  e3 = "Web",
  e5 = "$remote",
  e6 = (function () {
    function e() {
      var e;
      (this.name = "context"),
        (this.type = r.BEFORE),
        (this.eventId = 0),
        (this.library = "amplitude-ts/".concat(e4)),
        "undefined" != typeof navigator && (e = navigator.userAgent),
        (this.uaResult = new eU(e).getResult());
    }
    return (
      (e.prototype.setup = function (e) {
        return (this.config = e), Promise.resolve(void 0);
      }),
      (e.prototype.execute = function (e) {
        return f(this, void 0, void 0, function () {
          var t, n, i, r, o;
          return p(this, function (s) {
            return (
              (t = new Date().getTime()),
              (n = this.uaResult.browser.name),
              (i = this.uaResult.browser.version),
              (r = this.uaResult.device.model || this.uaResult.os.name),
              (o = this.uaResult.device.vendor),
              [
                2,
                l(
                  l(
                    l(
                      l(
                        l(
                          l(
                            l(
                              l(
                                l(
                                  l(
                                    l(
                                      l(
                                        {
                                          user_id: this.config.userId,
                                          device_id: this.config.deviceId,
                                          session_id: this.config.sessionId,
                                          time: t,
                                        },
                                        this.config.appVersion && {
                                          app_version: this.config.appVersion,
                                        }
                                      ),
                                      this.config.trackingOptions.platform && {
                                        platform: e3,
                                      }
                                    ),
                                    this.config.trackingOptions.osName && {
                                      os_name: n,
                                    }
                                  ),
                                  this.config.trackingOptions.osVersion && {
                                    os_version: i,
                                  }
                                ),
                                this.config.trackingOptions
                                  .deviceManufacturer && {
                                  device_manufacturer: o,
                                }
                              ),
                              this.config.trackingOptions.deviceModel && {
                                device_model: r,
                              }
                            ),
                            this.config.trackingOptions.language && {
                              language: eW(),
                            }
                          ),
                          this.config.trackingOptions.ipAddress && { ip: e5 }
                        ),
                        {
                          insert_id: eo(),
                          partner_id: this.config.partnerId,
                          plan: this.config.plan,
                        }
                      ),
                      this.config.ingestionMetadata && {
                        ingestion_metadata: {
                          source_name: this.config.ingestionMetadata.sourceName,
                          source_version:
                            this.config.ingestionMetadata.sourceVersion,
                        },
                      }
                    ),
                    e
                  ),
                  { event_id: this.eventId++, library: this.library }
                ),
              ]
            );
          });
        });
      }),
      e
    );
  })(),
  e7 = (function () {
    function e() {}
    return (
      (e.prototype.isEnabled = function () {
        return f(this, void 0, void 0, function () {
          var t, n, i;
          return p(this, function (r) {
            switch (r.label) {
              case 0:
                if (!ea()) return [2, !1];
                (t = String(Date.now())),
                  (n = new e()),
                  (i = "AMP_TEST"),
                  (r.label = 1);
              case 1:
                return r.trys.push([1, 4, 5, 7]), [4, n.set(i, t)];
              case 2:
                return r.sent(), [4, n.get(i)];
              case 3:
                return [2, r.sent() === t];
              case 4:
                return r.sent(), [2, !1];
              case 5:
                return [4, n.remove(i)];
              case 6:
                return r.sent(), [7];
              case 7:
                return [2];
            }
          });
        });
      }),
      (e.prototype.get = function (e) {
        return f(this, void 0, void 0, function () {
          var t;
          return p(this, function (n) {
            switch (n.label) {
              case 0:
                return n.trys.push([0, 2, , 3]), [4, this.getRaw(e)];
              case 1:
                if (!(t = n.sent())) return [2, void 0];
                return [2, JSON.parse(t)];
              case 2:
                return n.sent(), [2, void 0];
              case 3:
                return [2];
            }
          });
        });
      }),
      (e.prototype.getRaw = function (e) {
        var t;
        return f(this, void 0, void 0, function () {
          return p(this, function (n) {
            return [
              2,
              (null === (t = ea()) || void 0 === t
                ? void 0
                : t.localStorage.getItem(e)) || void 0,
            ];
          });
        });
      }),
      (e.prototype.set = function (e, t) {
        var n;
        return f(this, void 0, void 0, function () {
          return p(this, function (i) {
            try {
              null === (n = ea()) ||
                void 0 === n ||
                n.localStorage.setItem(e, JSON.stringify(t));
            } catch (e) {}
            return [2];
          });
        });
      }),
      (e.prototype.remove = function (e) {
        var t;
        return f(this, void 0, void 0, function () {
          return p(this, function (n) {
            try {
              null === (t = ea()) ||
                void 0 === t ||
                t.localStorage.removeItem(e);
            } catch (e) {}
            return [2];
          });
        });
      }),
      (e.prototype.reset = function () {
        var e;
        return f(this, void 0, void 0, function () {
          return p(this, function (t) {
            try {
              null === (e = ea()) || void 0 === e || e.localStorage.clear();
            } catch (e) {}
            return [2];
          });
        });
      }),
      e
    );
  })(),
  e8 = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (t.state = { done: 4 }), t;
    }
    return (
      c(t, e),
      (t.prototype.send = function (e, t) {
        return f(this, void 0, void 0, function () {
          var n = this;
          return p(this, function (i) {
            return [
              2,
              new Promise(function (i, r) {
                "undefined" == typeof XMLHttpRequest &&
                  r(Error("XHRTransport is not supported."));
                var o = new XMLHttpRequest();
                o.open("POST", e, !0),
                  (o.onreadystatechange = function () {
                    if (o.readyState === n.state.done)
                      try {
                        var e = o.responseText,
                          t = JSON.parse(e),
                          s = n.buildResponse(t);
                        i(s);
                      } catch (e) {
                        r(e);
                      }
                  }),
                  o.setRequestHeader("Content-Type", "application/json"),
                  o.setRequestHeader("Accept", "*/*"),
                  o.send(JSON.stringify(t));
              }),
            ];
          });
        });
      }),
      t
    );
  })(eu),
  e9 = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      c(t, e),
      (t.prototype.send = function (e, t) {
        return f(this, void 0, void 0, function () {
          var n = this;
          return p(this, function (i) {
            return [
              2,
              new Promise(function (i, r) {
                var o = ea();
                if (!(null == o ? void 0 : o.navigator.sendBeacon))
                  throw Error("SendBeaconTransport is not supported");
                try {
                  var s = JSON.stringify(t);
                  if (o.navigator.sendBeacon(e, JSON.stringify(t)))
                    return i(
                      n.buildResponse({
                        code: 200,
                        events_ingested: t.events.length,
                        payload_size_bytes: s.length,
                        server_upload_time: Date.now(),
                      })
                    );
                  return i(n.buildResponse({ code: 500 }));
                } catch (e) {
                  r(e);
                }
              }),
            ];
          });
        });
      }),
      t
    );
  })(eu),
  te = function () {
    return {
      cookieExpiration: 365,
      cookieSameSite: "Lax",
      cookieSecure: !1,
      cookieStorage: new es(),
      cookieUpgrade: !0,
      disableCookies: !1,
      domain: "",
      sessionTimeout: 18e5,
      trackingOptions: {
        deviceManufacturer: !0,
        deviceModel: !0,
        ipAddress: !0,
        language: !0,
        osName: !0,
        osVersion: !0,
        platform: !0,
      },
      transportProvider: new eN(),
    };
  },
  tt = (function (e) {
    function t(t, n) {
      var i,
        r,
        o,
        s,
        u,
        a,
        c,
        d,
        f,
        p = this,
        v = te();
      return (
        ((p =
          e.call(
            this,
            l(
              l(
                {
                  flushIntervalMillis: 1e3,
                  flushMaxRetries: 5,
                  flushQueueSize: 30,
                  transportProvider: v.transportProvider,
                },
                n
              ),
              { apiKey: t }
            )
          ) || this)._optOut = !1),
        (p.cookieStorage =
          null !== (i = null == n ? void 0 : n.cookieStorage) && void 0 !== i
            ? i
            : v.cookieStorage),
        (p.deviceId = null == n ? void 0 : n.deviceId),
        (p.lastEventTime = null == n ? void 0 : n.lastEventTime),
        (p.optOut = Boolean(null == n ? void 0 : n.optOut)),
        (p.sessionId = null == n ? void 0 : n.sessionId),
        (p.userId = null == n ? void 0 : n.userId),
        (p.appVersion = null == n ? void 0 : n.appVersion),
        (p.attribution = null == n ? void 0 : n.attribution),
        (p.cookieExpiration =
          null !== (r = null == n ? void 0 : n.cookieExpiration) && void 0 !== r
            ? r
            : v.cookieExpiration),
        (p.cookieSameSite =
          null !== (o = null == n ? void 0 : n.cookieSameSite) && void 0 !== o
            ? o
            : v.cookieSameSite),
        (p.cookieSecure =
          null !== (s = null == n ? void 0 : n.cookieSecure) && void 0 !== s
            ? s
            : v.cookieSecure),
        (p.cookieUpgrade =
          null !== (u = null == n ? void 0 : n.cookieUpgrade) && void 0 !== u
            ? u
            : v.cookieUpgrade),
        (p.defaultTracking = null == n ? void 0 : n.defaultTracking),
        (p.disableCookies =
          null !== (a = null == n ? void 0 : n.disableCookies) && void 0 !== a
            ? a
            : v.disableCookies),
        (p.defaultTracking = null == n ? void 0 : n.defaultTracking),
        (p.domain =
          null !== (c = null == n ? void 0 : n.domain) && void 0 !== c
            ? c
            : v.domain),
        (p.partnerId = null == n ? void 0 : n.partnerId),
        (p.sessionTimeout =
          null !== (d = null == n ? void 0 : n.sessionTimeout) && void 0 !== d
            ? d
            : v.sessionTimeout),
        (p.trackingOptions =
          null !== (f = null == n ? void 0 : n.trackingOptions) && void 0 !== f
            ? f
            : v.trackingOptions),
        p
      );
    }
    return (
      c(t, e),
      Object.defineProperty(t.prototype, "deviceId", {
        get: function () {
          return this._deviceId;
        },
        set: function (e) {
          this._deviceId !== e && ((this._deviceId = e), this.updateStorage());
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "userId", {
        get: function () {
          return this._userId;
        },
        set: function (e) {
          this._userId !== e && ((this._userId = e), this.updateStorage());
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "sessionId", {
        get: function () {
          return this._sessionId;
        },
        set: function (e) {
          this._sessionId !== e &&
            ((this._sessionId = e), this.updateStorage());
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "optOut", {
        get: function () {
          return this._optOut;
        },
        set: function (e) {
          this._optOut !== e && ((this._optOut = e), this.updateStorage());
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "lastEventTime", {
        get: function () {
          return this._lastEventTime;
        },
        set: function (e) {
          this._lastEventTime !== e &&
            ((this._lastEventTime = e), this.updateStorage());
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.updateStorage = function () {
        var e,
          t = {
            deviceId: this._deviceId,
            userId: this._userId,
            sessionId: this._sessionId,
            optOut: this._optOut,
            lastEventTime: this._lastEventTime,
          };
        null === (e = this.cookieStorage) ||
          void 0 === e ||
          e.set(eP(this.apiKey), t);
      }),
      t
    );
  })(Z),
  tn = function (e, t) {
    return f(void 0, void 0, void 0, function () {
      var n, i, r, o, s, u, a, c, d, f, v, h, g, y;
      return p(this, function (p) {
        switch (p.label) {
          case 0:
            return (
              (n = te()),
              (i =
                null !== (g = null == t ? void 0 : t.deviceId) && void 0 !== g
                  ? g
                  : eo()),
              (r = null == t ? void 0 : t.lastEventTime),
              (o = null == t ? void 0 : t.optOut),
              (s = null == t ? void 0 : t.sessionId),
              (u = null == t ? void 0 : t.userId),
              (a = null == t ? void 0 : t.cookieStorage),
              (c = null == t ? void 0 : t.domain),
              (d = tt.bind),
              (f = [void 0, e]),
              (v = [l({}, t)]),
              (h = {
                cookieStorage: a,
                deviceId: i,
                domain: c,
                lastEventTime: r,
                optOut: o,
                sessionId: s,
              }),
              [4, to(t)]
            );
          case 1:
            return [
              2,
              new (d.apply(
                tt,
                f.concat([
                  l.apply(
                    void 0,
                    v.concat([
                      ((h.storageProvider = p.sent()),
                      (h.trackingOptions = l(
                        l({}, n.trackingOptions),
                        null == t ? void 0 : t.trackingOptions
                      )),
                      (h.transportProvider =
                        null !==
                          (y = null == t ? void 0 : t.transportProvider) &&
                        void 0 !== y
                          ? y
                          : ts(null == t ? void 0 : t.transport)),
                      (h.userId = u),
                      h),
                    ])
                  ),
                ])
              ))(),
            ];
        }
      });
    });
  },
  ti = function (e, t) {
    return (
      void 0 === t && (t = te()),
      f(void 0, void 0, void 0, function () {
        var n, i, r;
        return p(this, function (o) {
          switch (o.label) {
            case 0:
              if (
                ((n = l(l({}, t), e)),
                (r = !(i = null == e ? void 0 : e.cookieStorage)))
              )
                return [3, 2];
              return [4, i.isEnabled()];
            case 1:
              (r = !o.sent()), (o.label = 2);
            case 2:
              if (r) return [2, tr(n)];
              return [2, i];
          }
        });
      })
    );
  },
  tr = function (e) {
    return f(void 0, void 0, void 0, function () {
      var t, n;
      return p(this, function (i) {
        switch (i.label) {
          case 0:
            if (
              ((t = new ex({
                domain: e.domain,
                expirationDays: e.cookieExpiration,
                sameSite: e.cookieSameSite,
                secure: e.cookieSecure,
              })),
              (n = e.disableCookies))
            )
              return [3, 2];
            return [4, t.isEnabled()];
          case 1:
            (n = !i.sent()), (i.label = 2);
          case 2:
            if (!n) return [3, 4];
            return [4, (t = new e7()).isEnabled()];
          case 3:
            i.sent() || (t = new es()), (i.label = 4);
          case 4:
            return [2, t];
        }
      });
    });
  },
  to = function (e) {
    return f(void 0, void 0, void 0, function () {
      var t, n, i, r, o, s;
      return p(this, function (u) {
        switch (u.label) {
          case 0:
            if (
              !(
                !(
                  e &&
                  Object.prototype.hasOwnProperty.call(e, "storageProvider")
                ) || e.storageProvider
              )
            )
              return [3, 9];
            u.label = 1;
          case 1:
            u.trys.push([1, 7, 8, 9]),
              (n = (t = v([
                null == e ? void 0 : e.storageProvider,
                new e7(),
              ])).next()),
              (u.label = 2);
          case 2:
            if (n.done) return [3, 6];
            if (!(r = i = n.value)) return [3, 4];
            return [4, i.isEnabled()];
          case 3:
            (r = u.sent()), (u.label = 4);
          case 4:
            if (r) return [2, i];
            u.label = 5;
          case 5:
            return (n = t.next()), [3, 2];
          case 6:
            return [3, 9];
          case 7:
            return (o = { error: u.sent() }), [3, 9];
          case 8:
            try {
              n && !n.done && (s = t.return) && s.call(t);
            } finally {
              if (o) throw o.error;
            }
            return [7];
          case 9:
            return [2, void 0];
        }
      });
    });
  },
  ts = function (e) {
    return e === u.XHR
      ? new e8()
      : e === u.SendBeacon
      ? new e9()
      : te().transportProvider;
  },
  tu = function (e) {
    return f(void 0, void 0, void 0, function () {
      var t, n, i, r, o, s, u;
      return p(this, function (a) {
        switch (a.label) {
          case 0:
            return [4, new ex().isEnabled()];
          case 1:
            if (!a.sent() || (!e && "undefined" == typeof location))
              return [2, ""];
            for (
              t = (null != e ? e : location.hostname).split("."),
                n = [],
                i = "AMP_TLDTEST",
                r = t.length - 2;
              r >= 0;
              --r
            )
              n.push(t.slice(r).join("."));
            (r = 0), (a.label = 2);
          case 2:
            if (!(r < n.length)) return [3, 7];
            return (
              (s = { domain: "." + (o = n[r]) }), [4, (u = new ex(s)).set(i, 1)]
            );
          case 3:
            return a.sent(), [4, u.get(i)];
          case 4:
            if (!a.sent()) return [3, 6];
            return [4, u.remove(i)];
          case 5:
            return a.sent(), [2, "." + o];
          case 6:
            return r++, [3, 2];
          case 7:
            return [2, ""];
        }
      });
    });
  },
  ta = function (e, t) {
    return f(void 0, void 0, void 0, function () {
      var n, i, r, o, s, u, a, c, l, d;
      return p(this, function (f) {
        switch (f.label) {
          case 0:
            return [4, ti(t)];
          case 1:
            return (n = f.sent()), (i = eR(e)), [4, n.getRaw(i)];
          case 2:
            if (!(r = f.sent())) return [2, { optOut: !1 }];
            if (
              !(null !== (d = null == t ? void 0 : t.cookieUpgrade) &&
              void 0 !== d
                ? d
                : te().cookieUpgrade)
            )
              return [3, 4];
            return [4, n.remove(i)];
          case 3:
            f.sent(), (f.label = 4);
          case 4:
            return (
              (s = (o = h(r.split("."), 5))[0]),
              (u = o[1]),
              (a = o[2]),
              (c = o[3]),
              (l = o[4]),
              [
                2,
                {
                  deviceId: s,
                  userId: tl(u),
                  sessionId: tc(c),
                  lastEventTime: tc(l),
                  optOut: Boolean(a),
                },
              ]
            );
        }
      });
    });
  },
  tc = function (e) {
    var t = parseInt(e, 32);
    if (!isNaN(t)) return t;
  },
  tl = function (e) {
    if (atob && escape && e)
      try {
        return decodeURIComponent(escape(atob(e)));
      } catch (e) {
        return;
      }
  },
  td = function (e, t, n) {
    return (
      void 0 === t && (t = ""),
      void 0 === n && (n = 10),
      [b, t, e.substring(0, n)].filter(Boolean).join("_")
    );
  },
  tf = function (e) {
    var t = e.split(".");
    return t.length <= 2 ? e : t.slice(t.length - 2, t.length).join(".");
  },
  tp = function (e, t, n) {
    e.referrer;
    var i,
      r = e.referring_domain,
      o = d(e, ["referrer", "referring_domain"]),
      s = t || {};
    s.referrer;
    var u = s.referring_domain,
      a = d(s, ["referrer", "referring_domain"]);
    if (
      e.referring_domain &&
      (null === (i = n.excludeReferrers) || void 0 === i
        ? void 0
        : i.includes(e.referring_domain))
    )
      return !1;
    var c = JSON.stringify(o) !== JSON.stringify(a),
      l = tf(r || "") !== tf(u || "");
    return !t || c || l;
  },
  tv = function (e, t) {
    return x(
      Object.entries(l(l({}, ek), e)).reduce(function (e, n) {
        var i,
          r = h(n, 2),
          o = r[0],
          s = r[1];
        return (e.setOnce(
          "initial_".concat(o),
          null !== (i = null != s ? s : t.initialEmptyValue) && void 0 !== i
            ? i
            : "EMPTY"
        ),
        s)
          ? e.set(o, s)
          : e.unset(o);
      }, new P())
    );
  },
  th = function () {
    for (var e, t, n = this, i = [], o = 0; o < arguments.length; o++)
      i[o] = arguments[o];
    var s = {},
      u = h(i, 2),
      a = u[0],
      c = u[1];
    a && "init" in a ? ((t = a), c && (s = c)) : a && (s = a);
    var d = null !== (e = s.excludeReferrers) && void 0 !== e ? e : [];
    "undefined" != typeof location && d.unshift(location.hostname),
      (s = l(
        l(
          {
            disabled: !1,
            initialEmptyValue: "EMPTY",
            resetSessionOnNewCampaign: !1,
          },
          s
        ),
        { excludeReferrers: d }
      ));
    var v = {
      name: "web-attribution",
      type: r.BEFORE,
      setup: function (e, n) {
        var i;
        return f(this, void 0, void 0, function () {
          var r, o, u, c, l, d, f, v;
          return p(this, function (p) {
            switch (p.label) {
              case 0:
                if (!(t = null != t ? t : n))
                  return (
                    (r = a ? "Options" : "undefined"),
                    e.loggerProvider.error(
                      "Argument of type '".concat(
                        r,
                        "' is not assignable to parameter of type 'BrowserClient'."
                      )
                    ),
                    [2]
                  );
                if (s.disabled)
                  return (
                    e.loggerProvider.log(
                      "@amplitude/plugin-web-attribution-browser is disabled. Attribution is not tracked."
                    ),
                    [2]
                  );
                return (
                  e.loggerProvider.log(
                    "Installing @amplitude/plugin-web-attribution-browser."
                  ),
                  n ||
                    (null === (i = e.attribution) || void 0 === i
                      ? void 0
                      : i.disabled) ||
                    (e.loggerProvider.warn(
                      "@amplitude/plugin-web-attribution-browser overrides web attribution behavior defined in @amplitude/analytics-browser. Resolve by disabling web attribution tracking in @amplitude/analytics-browser."
                    ),
                    (e.attribution = { disabled: !0 })),
                  (o = e.cookieStorage),
                  (u = td(e.apiKey, "MKTG")),
                  [4, Promise.all([new eT().parse(), o.get(u)])]
                );
              case 1:
                return (
                  (l = (c = h.apply(void 0, [p.sent(), 2]))[0]),
                  (d = c[1]),
                  (null != (f = this.__pluginEnabledOverride)
                    ? f
                    : tp(l, d, s)) &&
                    (s.resetSessionOnNewCampaign &&
                      (t.setSessionId(Date.now()),
                      e.loggerProvider.log(
                        "Created a new session for new campaign."
                      )),
                    e.loggerProvider.log("Tracking attribution."),
                    (v = tv(l, s)),
                    t.track(v),
                    o.set(u, l)),
                  [2]
                );
            }
          });
        });
      },
      execute: function (e) {
        return f(n, void 0, void 0, function () {
          return p(this, function (t) {
            return [2, e];
          });
        });
      },
    };
    return (v.__pluginEnabledOverride = void 0), v;
  },
  tg = function (e) {
    var t = {};
    for (var n in e) {
      var i = e[n];
      i && (t[n] = i);
    }
    return t;
  },
  ty = function () {
    for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = {},
      o = ea(),
      s = void 0,
      u = h(t, 2),
      a = u[0],
      c = u[1];
    a && "init" in a ? ((e = a), c && (i = c)) : a && (i = a);
    var d = function () {
        return f(void 0, void 0, void 0, function () {
          var e, t, n;
          return p(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (t = {
                    event_type:
                      null !== (n = i.eventType) && void 0 !== n
                        ? n
                        : "Page View",
                  }),
                  (e = [{}]),
                  [4, tm()]
                );
              case 1:
                return [
                  2,
                  ((t.event_properties = l.apply(void 0, [
                    l.apply(void 0, e.concat([r.sent()])),
                    {
                      page_domain:
                        ("undefined" != typeof location && location.hostname) ||
                        "",
                      page_location:
                        ("undefined" != typeof location && location.href) || "",
                      page_path:
                        ("undefined" != typeof location && location.pathname) ||
                        "",
                      page_title:
                        ("undefined" != typeof document && document.title) ||
                        "",
                      page_url:
                        ("undefined" != typeof location &&
                          location.href.split("?")[0]) ||
                        "",
                    },
                  ])),
                  t),
                ];
            }
          });
        });
      },
      v = function () {
        return (
          void 0 === i.trackOn ||
          ("function" == typeof i.trackOn && i.trackOn())
        );
      },
      g = null,
      y = function () {
        return f(void 0, void 0, void 0, function () {
          var t, n, r;
          return p(this, function (o) {
            switch (o.label) {
              case 0:
                if (
                  ((t = location.href),
                  !(t_(i.trackHistoryChanges, t, g || "") && v()))
                )
                  return [3, 4];
                if ((null == s || s.log("Tracking page view event"), null != e))
                  return [3, 1];
                return [3, 3];
              case 1:
                return (r = (n = e).track), [4, d()];
              case 2:
                r.apply(n, [o.sent()]), (o.label = 3);
              case 3:
                o.label = 4;
              case 4:
                return (g = t), [2];
            }
          });
        });
      },
      m = {
        name: "page-view-tracking",
        type: r.ENRICHMENT,
        setup: function (t, n) {
          return f(void 0, void 0, void 0, function () {
            var r, u, c, l, f;
            return p(this, function (p) {
              switch (p.label) {
                case 0:
                  if (!(e = null != e ? e : n))
                    return (
                      (r = a ? "Options" : "undefined"),
                      t.loggerProvider.error(
                        "Argument of type '".concat(
                          r,
                          "' is not assignable to parameter of type 'BrowserClient'."
                        )
                      ),
                      [2]
                    );
                  if (
                    ((s = t.loggerProvider).log(
                      "Installing @amplitude/plugin-page-view-tracking-browser"
                    ),
                    (i.trackOn = (
                      null === (l = t.attribution) || void 0 === l
                        ? void 0
                        : l.trackPageViews
                    )
                      ? "attribution"
                      : i.trackOn),
                    !n &&
                      (null === (f = t.attribution) || void 0 === f
                        ? void 0
                        : f.trackPageViews) &&
                      (s.warn(
                        "@amplitude/plugin-page-view-tracking-browser overrides page view tracking behavior defined in @amplitude/analytics-browser. Resolve by disabling page view tracking in @amplitude/analytics-browser."
                      ),
                      (t.attribution.trackPageViews = !1)),
                    i.trackHistoryChanges &&
                      o &&
                      (o.addEventListener("popstate", function () {
                        y();
                      }),
                      (o.history.pushState = new Proxy(o.history.pushState, {
                        apply: function (e, t, n) {
                          var i = h(n, 3),
                            r = i[0],
                            o = i[1],
                            s = i[2];
                          return y(), e.apply(t, [r, o, s]);
                        },
                      }))),
                    !v())
                  )
                    return [3, 2];
                  return (
                    s.log("Tracking page view event"),
                    (c = (u = e).track),
                    [4, d()]
                  );
                case 1:
                  c.apply(u, [p.sent()]), (p.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        },
        execute: function (e) {
          return f(void 0, void 0, void 0, function () {
            var t;
            return p(this, function (n) {
              switch (n.label) {
                case 0:
                  if (!("attribution" === i.trackOn && tb(e))) return [3, 2];
                  return (
                    null == s ||
                      s.log(
                        "Enriching campaign event to page view event with campaign parameters"
                      ),
                    [4, d()]
                  );
                case 1:
                  (t = n.sent()),
                    (e.event_type = t.event_type),
                    (e.event_properties = l(
                      l({}, e.event_properties),
                      t.event_properties
                    )),
                    (n.label = 2);
                case 2:
                  return [2, e];
              }
            });
          });
        },
      };
    return (m.__trackHistoryPageView = y), m;
  },
  tm = function () {
    return f(void 0, void 0, void 0, function () {
      var e;
      return p(this, function (t) {
        switch (t.label) {
          case 0:
            return (e = tg), [4, new eT().parse()];
          case 1:
            return [2, e.apply(void 0, [t.sent()])];
        }
      });
    });
  },
  tb = function (t) {
    if ("$identify" === t.event_type && t.user_properties) {
      var n = t.user_properties,
        i = n[e.SET] || {},
        r = n[e.UNSET] || {},
        o = g(g([], h(Object.keys(i)), !1), h(Object.keys(r)), !1);
      return Object.keys(ek).every(function (e) {
        return o.includes(e);
      });
    }
    return !1;
  },
  t_ = function (e, t, n) {
    return "pathOnly" === e ? t.split("?")[0] !== n.split("?")[0] : t !== n;
  },
  tI = "[Amplitude] Page View",
  tw = "session_start",
  tE = "session_end",
  tS = "[Amplitude] Form Start",
  tO = "[Amplitude] Form Submit",
  tk = "[Amplitude] File Download",
  tT = function () {
    var e, t;
    return {
      name: "@amplitude/plugin-session-handler",
      type: r.BEFORE,
      setup: function (n, i) {
        return f(void 0, void 0, void 0, function () {
          return p(this, function (r) {
            return (e = n), (t = i), [2];
          });
        });
      },
      execute: function (n) {
        return f(void 0, void 0, void 0, function () {
          var i, r;
          return p(this, function (o) {
            return ((i = Date.now()),
            n.event_type === tw || n.event_type === tE)
              ? ((e.lastEventTime = i), [2, n])
              : ((r = e.lastEventTime || i),
                i - r > e.sessionTimeout &&
                  (t.setSessionId(i),
                  (n.session_id = t.getSessionId()),
                  (n.time = i)),
                (e.lastEventTime = i),
                [2, n]);
          });
        });
      },
    };
  },
  tP = function () {
    return {
      name: "@amplitude/plugin-form-interaction-tracking-browser",
      type: r.ENRICHMENT,
      setup: function (e, t) {
        return f(void 0, void 0, void 0, function () {
          var n;
          return p(this, function (i) {
            return t
              ? ((n = function (e) {
                  var n = !1;
                  e.addEventListener(
                    "change",
                    function () {
                      n ||
                        t.track(tS, {
                          form_id: e.id,
                          form_name: e.name,
                          form_destination: e.action,
                        }),
                        (n = !0);
                    },
                    {}
                  ),
                    e.addEventListener("submit", function () {
                      n ||
                        t.track(tS, {
                          form_id: e.id,
                          form_name: e.name,
                          form_destination: e.action,
                        }),
                        t.track(tO, {
                          form_id: e.id,
                          form_name: e.name,
                          form_destination: e.action,
                        }),
                        (n = !1);
                    });
                }),
                Array.from(document.getElementsByTagName("form")).forEach(n),
                "undefined" != typeof MutationObserver &&
                  new MutationObserver(function (e) {
                    e.forEach(function (e) {
                      e.addedNodes.forEach(function (e) {
                        "FORM" === e.nodeName && n(e),
                          "querySelectorAll" in e &&
                            "function" == typeof e.querySelectorAll &&
                            Array.from(e.querySelectorAll("form")).map(n);
                      });
                    });
                  }).observe(document.body, { subtree: !0, childList: !0 }),
                [2])
              : (e.loggerProvider.warn(
                  "Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked."
                ),
                [2]);
          });
        });
      },
      execute: function (e) {
        return f(void 0, void 0, void 0, function () {
          return p(this, function (t) {
            return [2, e];
          });
        });
      },
    };
  },
  tR = function () {
    return {
      name: "@amplitude/plugin-file-download-tracking-browser",
      type: r.ENRICHMENT,
      setup: function (e, t) {
        return f(void 0, void 0, void 0, function () {
          var n, i;
          return p(this, function (r) {
            return t
              ? ((n = function (e) {
                  try {
                    n = new URL(e.href, window.location.href);
                  } catch (e) {
                    return;
                  }
                  var n,
                    r = i.exec(n.href),
                    o = null == r ? void 0 : r[1];
                  o &&
                    e.addEventListener("click", function () {
                      o &&
                        t.track(tk, {
                          file_extension: o,
                          file_name: n.pathname,
                          link_id: e.id,
                          link_text: e.text,
                          link_url: e.href,
                        });
                    });
                }),
                (i =
                  /\.(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$/),
                Array.from(document.getElementsByTagName("a")).forEach(n),
                "undefined" != typeof MutationObserver &&
                  new MutationObserver(function (e) {
                    e.forEach(function (e) {
                      e.addedNodes.forEach(function (e) {
                        "A" === e.nodeName && n(e),
                          "querySelectorAll" in e &&
                            "function" == typeof e.querySelectorAll &&
                            Array.from(e.querySelectorAll("a")).map(n);
                      });
                    });
                  }).observe(document.body, { subtree: !0, childList: !0 }),
                [2])
              : (e.loggerProvider.warn(
                  "File download tracking requires a later version of @amplitude/analytics-browser. File download events are not tracked."
                ),
                [2]);
          });
        });
      },
      execute: function (e) {
        return f(void 0, void 0, void 0, function () {
          return p(this, function (t) {
            return [2, e];
          });
        });
      },
    };
  },
  tx = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      c(t, e),
      (t.prototype.init = function (e, t, n) {
        return (
          void 0 === e && (e = ""),
          Q(this._init(l(l({}, n), { userId: t, apiKey: e })))
        );
      }),
      (t.prototype._init = function (t) {
        var n, i, r, o, s, u, a, c, d, v, h, g, y, m, b, _, I, w;
        return f(this, void 0, void 0, function () {
          var f,
            E,
            S,
            O,
            k,
            T,
            P,
            R,
            x,
            N,
            U,
            D,
            q,
            A,
            C,
            j,
            L,
            V = this;
          return p(this, function (p) {
            switch (p.label) {
              case 0:
                if (this.initializing) return [2];
                if (((this.initializing = !0), (f = t), !t.disableCookies))
                  return [3, 1];
                return (E = ""), [3, 5];
              case 1:
                if (!(null !== (n = t.domain) && void 0 !== n)) return [3, 2];
                return (S = n), [3, 4];
              case 2:
                return [4, tu()];
              case 3:
                (S = p.sent()), (p.label = 4);
              case 4:
                (E = S), (p.label = 5);
              case 5:
                return (f.domain = E), [4, ta(t.apiKey, t)];
              case 6:
                return (O = p.sent()), [4, ti(t)];
              case 7:
                return [4, (k = p.sent()).get(eP(t.apiKey))];
              case 8:
                return (
                  (T = p.sent()),
                  (P = ec()),
                  (R =
                    null !==
                      (o =
                        null !==
                          (r =
                            null !== (i = t.deviceId) && void 0 !== i
                              ? i
                              : P.deviceId) && void 0 !== r
                          ? r
                          : null == T
                          ? void 0
                          : T.deviceId) && void 0 !== o
                      ? o
                      : O.deviceId),
                  (x =
                    null !==
                      (u =
                        null !== (s = t.sessionId) && void 0 !== s
                          ? s
                          : null == T
                          ? void 0
                          : T.sessionId) && void 0 !== u
                      ? u
                      : O.sessionId),
                  (N =
                    null !==
                      (c =
                        null !== (a = t.optOut) && void 0 !== a
                          ? a
                          : null == T
                          ? void 0
                          : T.optOut) && void 0 !== c
                      ? c
                      : O.optOut),
                  (U =
                    null !== (d = null == T ? void 0 : T.lastEventTime) &&
                    void 0 !== d
                      ? d
                      : O.lastEventTime),
                  (D =
                    null !==
                      (h =
                        null !== (v = t.userId) && void 0 !== v
                          ? v
                          : null == T
                          ? void 0
                          : T.userId) && void 0 !== h
                      ? h
                      : O.userId),
                  (this.previousSessionDeviceId =
                    null !== (g = null == T ? void 0 : T.deviceId) &&
                    void 0 !== g
                      ? g
                      : O.deviceId),
                  (this.previousSessionUserId =
                    null !== (y = null == T ? void 0 : T.userId) && void 0 !== y
                      ? y
                      : O.userId),
                  [
                    4,
                    tn(
                      t.apiKey,
                      l(l({}, t), {
                        deviceId: R,
                        sessionId: x,
                        optOut: N,
                        lastEventTime: U,
                        userId: D,
                        cookieStorage: k,
                      })
                    ),
                  ]
                );
              case 9:
                return (q = p.sent()), [4, e.prototype._init.call(this, q)];
              case 10:
                return (
                  p.sent(),
                  (A = !this.config.lastEventTime),
                  (!this.config.sessionId ||
                    (this.config.lastEventTime &&
                      Date.now() - this.config.lastEventTime >
                        this.config.sessionTimeout)) &&
                    (this.setSessionId(Date.now()), (A = !0)),
                  (C = ez()).eventBridge.setEventReceiver(function (e) {
                    V.track(e.eventType, e.eventProperties);
                  }),
                  C.identityStore.setIdentity({
                    userId: this.config.userId,
                    deviceId: this.config.deviceId,
                  }),
                  [4, this.add(new X()).promise]
                );
              case 11:
                return p.sent(), [4, this.add(new e6()).promise];
              case 12:
                return p.sent(), [4, this.add(tT()).promise];
              case 13:
                return p.sent(), [4, this.add(new eH()).promise];
              case 14:
                if ((p.sent(), !eJ(this.config.defaultTracking)))
                  return [3, 16];
                return [4, this.add(tR()).promise];
              case 15:
                p.sent(), (p.label = 16);
              case 16:
                if (!eZ(this.config.defaultTracking)) return [3, 18];
                return [4, this.add(tP()).promise];
              case 17:
                p.sent(), (p.label = 18);
              case 18:
                if (
                  null === (m = this.config.attribution) || void 0 === m
                    ? void 0
                    : m.disabled
                )
                  return [3, 20];
                return (
                  ((j = th({
                    excludeReferrers:
                      null === (b = this.config.attribution) || void 0 === b
                        ? void 0
                        : b.excludeReferrers,
                    initialEmptyValue:
                      null === (_ = this.config.attribution) || void 0 === _
                        ? void 0
                        : _.initialEmptyValue,
                    resetSessionOnNewCampaign:
                      null === (I = this.config.attribution) || void 0 === I
                        ? void 0
                        : I.resetSessionOnNewCampaign,
                  })).__pluginEnabledOverride =
                    (!!A ||
                      (null !== (w = this.config.attribution) &&
                        void 0 !== w &&
                        !!w.trackNewCampaigns)) &&
                    void 0),
                  [4, this.add(j).promise]
                );
              case 19:
                p.sent(), (p.label = 20);
              case 20:
                return (
                  ((L = eX(this.config)).eventType = L.eventType || tI),
                  [4, this.add(ty(L)).promise]
                );
              case 21:
                return (
                  p.sent(),
                  (this.initializing = !1),
                  [4, this.runQueuedFunctions("dispatchQ")]
                );
              case 22:
                return p.sent(), [2];
            }
          });
        });
      }),
      (t.prototype.getUserId = function () {
        var e;
        return null === (e = this.config) || void 0 === e ? void 0 : e.userId;
      }),
      (t.prototype.setUserId = function (e) {
        if (!this.config) {
          this.q.push(this.setUserId.bind(this, e));
          return;
        }
        (e !== this.config.userId || void 0 === e) &&
          ((this.config.userId = e), this.setSessionId(Date.now()));
      }),
      (t.prototype.getDeviceId = function () {
        var e;
        return null === (e = this.config) || void 0 === e ? void 0 : e.deviceId;
      }),
      (t.prototype.setDeviceId = function (e) {
        if (!this.config) {
          this.q.push(this.setDeviceId.bind(this, e));
          return;
        }
        this.config.deviceId = e;
      }),
      (t.prototype.reset = function () {
        this.setDeviceId(eo()), this.setUserId(void 0);
      }),
      (t.prototype.getSessionId = function () {
        var e;
        return null === (e = this.config) || void 0 === e
          ? void 0
          : e.sessionId;
      }),
      (t.prototype.setSessionId = function (e) {
        if (!this.config) {
          this.q.push(this.setSessionId.bind(this, e));
          return;
        }
        var t = this.getSessionId(),
          n = this.config.lastEventTime;
        if (
          ((this.config.sessionId = e),
          (this.config.lastEventTime = void 0),
          eG(this.config.defaultTracking))
        ) {
          if (t && n) {
            var i = { session_id: t, time: n + 1 };
            (i.device_id = this.previousSessionDeviceId),
              (i.user_id = this.previousSessionUserId),
              this.track(tE, void 0, i);
          }
          this.track(tw, void 0, { session_id: e, time: e - 1 }),
            (this.previousSessionDeviceId = this.config.deviceId),
            (this.previousSessionUserId = this.config.userId);
        }
      }),
      (t.prototype.setTransport = function (e) {
        if (!this.config) {
          this.q.push(this.setTransport.bind(this, e));
          return;
        }
        this.config.transportProvider = ts(e);
      }),
      (t.prototype.identify = function (t, n) {
        if (e2(t)) {
          var i = t._q;
          (t._q = []), (t = e1(new P(), i));
        }
        return (
          (null == n ? void 0 : n.user_id) && this.setUserId(n.user_id),
          (null == n ? void 0 : n.device_id) && this.setDeviceId(n.device_id),
          e.prototype.identify.call(this, t, n)
        );
      }),
      (t.prototype.groupIdentify = function (t, n, i, r) {
        if (e2(i)) {
          var o = i._q;
          (i._q = []), (i = e1(new P(), o));
        }
        return e.prototype.groupIdentify.call(this, t, n, i, r);
      }),
      (t.prototype.revenue = function (t, n) {
        if (e2(t)) {
          var i = t._q;
          (t._q = []), (t = e1(new $(), i));
        }
        return e.prototype.revenue.call(this, t, n);
      }),
      t
    );
  })(K),
  tN = function () {
    var e = new tx();
    return {
      init: er(e.init.bind(e), "init", et(e), ei(e, ["config"])),
      add: er(
        e.add.bind(e),
        "add",
        et(e),
        ei(e, ["config.apiKey", "timeline.plugins"])
      ),
      remove: er(
        e.remove.bind(e),
        "remove",
        et(e),
        ei(e, ["config.apiKey", "timeline.plugins"])
      ),
      track: er(
        e.track.bind(e),
        "track",
        et(e),
        ei(e, ["config.apiKey", "timeline.queue.length"])
      ),
      logEvent: er(
        e.logEvent.bind(e),
        "logEvent",
        et(e),
        ei(e, ["config.apiKey", "timeline.queue.length"])
      ),
      identify: er(
        e.identify.bind(e),
        "identify",
        et(e),
        ei(e, ["config.apiKey", "timeline.queue.length"])
      ),
      groupIdentify: er(
        e.groupIdentify.bind(e),
        "groupIdentify",
        et(e),
        ei(e, ["config.apiKey", "timeline.queue.length"])
      ),
      setGroup: er(
        e.setGroup.bind(e),
        "setGroup",
        et(e),
        ei(e, ["config.apiKey", "timeline.queue.length"])
      ),
      revenue: er(
        e.revenue.bind(e),
        "revenue",
        et(e),
        ei(e, ["config.apiKey", "timeline.queue.length"])
      ),
      flush: er(
        e.flush.bind(e),
        "flush",
        et(e),
        ei(e, ["config.apiKey", "timeline.queue.length"])
      ),
      getUserId: er(
        e.getUserId.bind(e),
        "getUserId",
        et(e),
        ei(e, ["config", "config.userId"])
      ),
      setUserId: er(
        e.setUserId.bind(e),
        "setUserId",
        et(e),
        ei(e, ["config", "config.userId"])
      ),
      getDeviceId: er(
        e.getDeviceId.bind(e),
        "getDeviceId",
        et(e),
        ei(e, ["config", "config.deviceId"])
      ),
      setDeviceId: er(
        e.setDeviceId.bind(e),
        "setDeviceId",
        et(e),
        ei(e, ["config", "config.deviceId"])
      ),
      reset: er(
        e.reset.bind(e),
        "reset",
        et(e),
        ei(e, ["config", "config.userId", "config.deviceId"])
      ),
      getSessionId: er(
        e.getSessionId.bind(e),
        "getSessionId",
        et(e),
        ei(e, ["config"])
      ),
      setSessionId: er(
        e.setSessionId.bind(e),
        "setSessionId",
        et(e),
        ei(e, ["config"])
      ),
      setOptOut: er(e.setOptOut.bind(e), "setOptOut", et(e), ei(e, ["config"])),
      setTransport: er(
        e.setTransport.bind(e),
        "setTransport",
        et(e),
        ei(e, ["config"])
      ),
    };
  },
  tU = tN(),
  tD = tU.add,
  tq = tU.flush,
  tA = tU.getDeviceId,
  tC = tU.getSessionId,
  tj = tU.getUserId,
  tL = tU.groupIdentify,
  tV = tU.identify,
  tM = tU.init,
  tF = tU.logEvent,
  tB = tU.remove,
  tQ = tU.reset,
  tK = tU.revenue,
  t$ = tU.setDeviceId,
  tz = tU.setGroup,
  tH = tU.setOptOut,
  tW = tU.setSessionId,
  tJ = tU.setTransport,
  tZ = tU.setUserId,
  tY = tU.track;
export {
  P as Identify,
  $ as Revenue,
  y as Types,
  tD as add,
  tN as createInstance,
  tq as flush,
  tA as getDeviceId,
  tC as getSessionId,
  tj as getUserId,
  tL as groupIdentify,
  tV as identify,
  tM as init,
  tF as logEvent,
  tB as remove,
  tQ as reset,
  tK as revenue,
  e0 as runQueuedFunctions,
  t$ as setDeviceId,
  tz as setGroup,
  tH as setOptOut,
  tW as setSessionId,
  tJ as setTransport,
  tZ as setUserId,
  tY as track,
};
