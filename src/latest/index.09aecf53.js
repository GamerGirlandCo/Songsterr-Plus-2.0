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
function p(e, t, n, i) {
	return new (n || (n = Promise))(function (r, o) {
		function s(e) {
			try {
				a(i.next(e));
			} catch (t) {
				o(t);
			}
		}
		function u(e) {
			try {
				a(i.throw(e));
			} catch (t) {
				o(t);
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
function f(e, t) {
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
	function u(o) {
		return function (u) {
			return (function (o) {
				if (n) throw TypeError("Generator is already executing.");
				for (; s; )
					try {
						if (
							((n = 1),
							i &&
								(r =
									2 & o[0]
										? i.return
										: o[0]
										? i.throw || ((r = i.return) && r.call(i), 0)
										: i.next) &&
								!(r = r.call(i, o[1])).done)
						)
							return r;
						switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
							case 0:
							case 1:
								r = o;
								break;
							case 4:
								return s.label++, { value: o[1], done: !1 };
							case 5:
								s.label++, (i = o[1]), (o = [0]);
								continue;
							case 7:
								(o = s.ops.pop()), s.trys.pop();
								continue;
							default:
								if (
									!(r = (r = s.trys).length > 0 && r[r.length - 1]) &&
									(6 === o[0] || 2 === o[0])
								) {
									s = 0;
									continue;
								}
								if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
									s.label = o[1];
									break;
								}
								if (6 === o[0] && s.label < r[1]) {
									(s.label = r[1]), (r = o);
									break;
								}
								if (r && s.label < r[2]) {
									(s.label = r[2]), s.ops.push(o);
									break;
								}
								r[2] && s.ops.pop(), s.trys.pop();
								continue;
						}
						o = t.call(e, s);
					} catch (u) {
						(o = [6, u]), (i = 0);
					} finally {
						n = r = 0;
					}
				if (5 & o[0]) throw o[1];
				return { value: o[0] ? o[1] : void 0, done: !0 };
			})([o, u]);
		};
	}
}
function h(e) {
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
function v(e, t) {
	var n = "function" == typeof Symbol && e[Symbol.iterator];
	if (!n) return e;
	var i,
		r,
		o = n.call(e),
		s = [];
	try {
		for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; ) s.push(i.value);
	} catch (u) {
		r = { error: u };
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
	(e.US = "US"), (e.EU = "EU");
})(e || (e = {})),
	(function (e) {
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
	})(t || (t = {})),
	(function (e) {
		(e.REVENUE_PRODUCT_ID = "$productId"),
			(e.REVENUE_QUANTITY = "$quantity"),
			(e.REVENUE_PRICE = "$price"),
			(e.REVENUE_TYPE = "$revenueType"),
			(e.REVENUE = "$revenue");
	})(n || (n = {})),
	(function (e) {
		(e.IDENTIFY = "$identify"),
			(e.GROUP_IDENTIFY = "$groupidentify"),
			(e.REVENUE = "revenue_amount");
	})(i || (i = {})),
	(function (e) {
		(e[(e.None = 0)] = "None"),
			(e[(e.Error = 1)] = "Error"),
			(e[(e.Warn = 2)] = "Warn"),
			(e[(e.Verbose = 3)] = "Verbose");
	})(r || (r = {})),
	(function (e) {
		(e.BEFORE = "before"),
			(e.ENRICHMENT = "enrichment"),
			(e.DESTINATION = "destination");
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
		get ServerZone() {
			return e;
		},
		get SpecialEventType() {
			return i;
		},
		get IdentifyOperation() {
			return t;
		},
		get RevenueProperty() {
			return n;
		},
		get LogLevel() {
			return r;
		},
		get PluginType() {
			return o;
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
	I = "".concat(b, "_unsent"),
	w = "https://api2.amplitude.com/2/httpapi",
	_ = "https://api.eu.amplitude.com/2/httpapi",
	E = "https://api2.amplitude.com/batch",
	S = "https://api.eu.amplitude.com/batch",
	O = 1e3,
	T = function (e) {
		if (Object.keys(e).length > O) return !1;
		for (var t in e) {
			var n = e[t];
			if (!P(t, n)) return !1;
		}
		return !0;
	},
	P = function (e, t) {
		var n, i;
		if ("string" != typeof e) return !1;
		if (Array.isArray(t)) {
			var r = !0;
			try {
				for (var o = h(t), s = o.next(); !s.done; s = o.next()) {
					var u = s.value;
					if (Array.isArray(u)) return !1;
					if ("object" == typeof u) r = r && T(u);
					else if (!["number", "string"].includes(typeof u)) return !1;
					if (!r) return !1;
				}
			} catch (a) {
				n = { error: a };
			} finally {
				try {
					s && !s.done && (i = o.return) && i.call(o);
				} finally {
					if (n) throw n.error;
				}
			}
		} else if (null == t) return !1;
		else if ("object" == typeof t) return T(t);
		else if (!["number", "string", "boolean"].includes(typeof t)) return !1;
		return !0;
	},
	R = (function () {
		function e() {
			(this._propertySet = new Set()), (this._properties = {});
		}
		return (
			(e.prototype.getUserProperties = function () {
				return l({}, this._properties);
			}),
			(e.prototype.set = function (e, n) {
				return this._safeSet(t.SET, e, n), this;
			}),
			(e.prototype.setOnce = function (e, n) {
				return this._safeSet(t.SET_ONCE, e, n), this;
			}),
			(e.prototype.append = function (e, n) {
				return this._safeSet(t.APPEND, e, n), this;
			}),
			(e.prototype.prepend = function (e, n) {
				return this._safeSet(t.PREPEND, e, n), this;
			}),
			(e.prototype.postInsert = function (e, n) {
				return this._safeSet(t.POSTINSERT, e, n), this;
			}),
			(e.prototype.preInsert = function (e, n) {
				return this._safeSet(t.PREINSERT, e, n), this;
			}),
			(e.prototype.remove = function (e, n) {
				return this._safeSet(t.REMOVE, e, n), this;
			}),
			(e.prototype.add = function (e, n) {
				return this._safeSet(t.ADD, e, n), this;
			}),
			(e.prototype.unset = function (e) {
				return this._safeSet(t.UNSET, e, m), this;
			}),
			(e.prototype.clearAll = function () {
				return (
					(this._properties = {}), (this._properties[t.CLEAR_ALL] = m), this
				);
			}),
			(e.prototype._safeSet = function (e, t, n) {
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
			(e.prototype._validate = function (e, n, i) {
				return (
					!(
						void 0 !== this._properties[t.CLEAR_ALL] || this._propertySet.has(n)
					) &&
					(e === t.ADD
						? "number" == typeof i
						: e === t.UNSET || e === t.REMOVE || P(n, i))
				);
			}),
			e
		);
	})(),
	k = function (e, t, n) {
		return l(
			l(l({}, "string" == typeof e ? { event_type: e } : e), n),
			t && { event_properties: t }
		);
	},
	U = function (e, t) {
		return l(l({}, t), {
			event_type: i.IDENTIFY,
			user_properties: e.getUserProperties(),
		});
	},
	N = function (e, t, n, r) {
		var o;
		return l(l({}, r), {
			event_type: i.GROUP_IDENTIFY,
			group_properties: n.getUserProperties(),
			groups: (((o = {})[e] = t), o),
		});
	},
	D = function (e, t, n) {
		var r,
			o = new R();
		return (
			o.set(e, t),
			l(l({}, n), {
				event_type: i.IDENTIFY,
				user_properties: o.getUserProperties(),
				groups: (((r = {})[e] = t), r),
			})
		);
	},
	x = function (e, t) {
		return l(l({}, t), {
			event_type: i.REVENUE,
			event_properties: e.getEventProperties(),
		});
	},
	C = function (e, t, n) {
		return (
			void 0 === t && (t = 0),
			void 0 === n && (n = s.Unknown),
			{ event: e, code: t, message: n }
		);
	},
	A = (function () {
		function e() {
			(this.queue = []),
				(this.applying = !1),
				(this.isReady = !1),
				(this.plugins = []);
		}
		return (
			(e.prototype.register = function (e, t) {
				return p(this, void 0, void 0, function () {
					return f(this, function (n) {
						switch (n.label) {
							case 0:
								return [4, e.setup(t)];
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
			(e.prototype.reset = function () {
				(this.applying = !1), (this.isReady = !1), (this.plugins = []);
			}),
			(e.prototype.push = function (e) {
				var t = this;
				return new Promise(function (n) {
					t.queue.push([e, n]), t.scheduleApply(0);
				});
			}),
			(e.prototype.scheduleApply = function (e) {
				var t = this;
				this.isReady &&
					!this.applying &&
					((this.applying = !0),
					setTimeout(function () {
						t.apply(t.queue.shift()).then(function () {
							(t.applying = !1), t.queue.length > 0 && t.scheduleApply(0);
						});
					}, e));
			}),
			(e.prototype.apply = function (e) {
				return p(this, void 0, void 0, function () {
					var t, n, i, r, s, u, a, c, d, p, g, y;
					return f(this, function (f) {
						switch (f.label) {
							case 0:
								if (!e) return [2];
								(t = v(e, 1)[0]),
									(n = v(e, 2)[1]),
									(i = this.plugins.filter(function (e) {
										return e.type === o.BEFORE;
									})),
									(f.label = 1);
							case 1:
								f.trys.push([1, 6, 7, 8]),
									(s = (r = h(i)).next()),
									(f.label = 2);
							case 2:
								if (s.done) return [3, 5];
								return [4, (0, s.value).execute(l({}, t))];
							case 3:
								(t = f.sent()), (f.label = 4);
							case 4:
								return (s = r.next()), [3, 2];
							case 5:
								return [3, 8];
							case 6:
								return (d = { error: f.sent() }), [3, 8];
							case 7:
								try {
									s && !s.done && (p = r.return) && p.call(r);
								} finally {
									if (d) throw d.error;
								}
								return [7];
							case 8:
								(u = this.plugins.filter(function (e) {
									return e.type === o.ENRICHMENT;
								})),
									(f.label = 9);
							case 9:
								f.trys.push([9, 14, 15, 16]),
									(c = (a = h(u)).next()),
									(f.label = 10);
							case 10:
								if (c.done) return [3, 13];
								return [4, (0, c.value).execute(l({}, t))];
							case 11:
								(t = f.sent()), (f.label = 12);
							case 12:
								return (c = a.next()), [3, 10];
							case 13:
								return [3, 16];
							case 14:
								return (g = { error: f.sent() }), [3, 16];
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
												return e.type === o.DESTINATION;
											})
											.map(function (e) {
												var n = l({}, t);
												return e.execute(n).catch(function (e) {
													return C(n, 0, String(e));
												});
											})
									).then(function (e) {
										n(v(e, 1)[0]);
									}),
									[2]
								);
						}
					});
				});
			}),
			(e.prototype.flush = function () {
				return p(this, void 0, void 0, function () {
					var e,
						t = this;
					return f(this, function (n) {
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
													return e.type === o.DESTINATION;
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
	q = "Event tracked successfully",
	M = "Unexpected error occurred",
	L = "Event rejected due to exceeded retry count",
	j = "Event skipped due to optOut config",
	V = "Event rejected due to missing API key",
	Q = "Invalid API key",
	F = (function () {
		function e(e) {
			void 0 === e && (e = "$default"),
				(this.initializing = !1),
				(this.q = []),
				(this.pluginQueue = []),
				(this.logEvent = this.track.bind(this)),
				(this.timeline = new A()),
				(this.name = e);
		}
		return (
			(e.prototype._init = function (e) {
				return p(this, void 0, void 0, function () {
					return f(this, function (t) {
						switch (t.label) {
							case 0:
								return (
									(this.config = e),
									this.timeline.reset(),
									[4, this.runQueuedPluginFunctions()]
								);
							case 1:
								return t.sent(), [4, this.runQueuedFunctions()];
							case 2:
								return t.sent(), [2];
						}
					});
				});
			}),
			(e.prototype.getAndResetQueuedFunctions = function () {
				var e = this.q;
				return (this.q = []), e;
			}),
			(e.prototype.runQueuedFunctions = function () {
				return p(this, void 0, void 0, function () {
					var e, t, n, i, r;
					return f(this, function (o) {
						switch (o.label) {
							case 0:
								(e = this.getAndResetQueuedFunctions()), (o.label = 1);
							case 1:
								o.trys.push([1, 6, 7, 8]),
									(n = (t = h(e)).next()),
									(o.label = 2);
							case 2:
								if (n.done) return [3, 5];
								return [4, (0, n.value)()];
							case 3:
								o.sent(), (o.label = 4);
							case 4:
								return (n = t.next()), [3, 2];
							case 5:
								return [3, 8];
							case 6:
								return (i = { error: o.sent() }), [3, 8];
							case 7:
								try {
									n && !n.done && (r = t.return) && r.call(t);
								} finally {
									if (i) throw i.error;
								}
								return [7];
							case 8:
								return [2];
						}
					});
				});
			}),
			(e.prototype.getAndResetQueuedPluginFunctions = function () {
				var e = this.pluginQueue;
				return (this.pluginQueue = []), e;
			}),
			(e.prototype.runQueuedPluginFunctions = function () {
				return p(this, void 0, void 0, function () {
					var e, t, n, i, r;
					return f(this, function (o) {
						switch (o.label) {
							case 0:
								(e = this.getAndResetQueuedPluginFunctions()), (o.label = 1);
							case 1:
								o.trys.push([1, 6, 7, 8]),
									(n = (t = h(e)).next()),
									(o.label = 2);
							case 2:
								if (n.done) return [3, 5];
								return [4, (0, n.value)()];
							case 3:
								o.sent(), (o.label = 4);
							case 4:
								return (n = t.next()), [3, 2];
							case 5:
								return [3, 8];
							case 6:
								return (i = { error: o.sent() }), [3, 8];
							case 7:
								try {
									n && !n.done && (r = t.return) && r.call(t);
								} finally {
									if (i) throw i.error;
								}
								return [7];
							case 8:
								return [2];
						}
					});
				});
			}),
			(e.prototype.track = function (e, t, n) {
				var i = k(e, t, n);
				return this.dispatch(i);
			}),
			(e.prototype.identify = function (e, t) {
				var n = U(e, t);
				return this.dispatch(n);
			}),
			(e.prototype.groupIdentify = function (e, t, n, i) {
				var r = N(e, t, n, i);
				return this.dispatch(r);
			}),
			(e.prototype.setGroup = function (e, t, n) {
				var i = D(e, t, n);
				return this.dispatch(i);
			}),
			(e.prototype.revenue = function (e, t) {
				var n = x(e, t);
				return this.dispatch(n);
			}),
			(e.prototype.add = function (e) {
				return p(this, void 0, void 0, function () {
					return f(this, function (t) {
						return this.config
							? [2, this.timeline.register(e, this.config)]
							: (this.pluginQueue.push(this.add.bind(this, e)), [2]);
					});
				});
			}),
			(e.prototype.remove = function (e) {
				return p(this, void 0, void 0, function () {
					return f(this, function (t) {
						return this.config
							? [2, this.timeline.deregister(e)]
							: (this.pluginQueue.push(this.remove.bind(this, e)), [2]);
					});
				});
			}),
			(e.prototype.dispatch = function (e) {
				var t;
				return p(this, void 0, void 0, function () {
					var n, i;
					return f(this, function (r) {
						switch (r.label) {
							case 0:
								if (
									(r.trys.push([0, 2, , 3]),
									null === (t = this.config) || void 0 === t
										? void 0
										: t.optOut)
								)
									return [2, C(e, 0, j)];
								return [4, this.timeline.push(e)];
							case 1:
								return (
									200 === (n = r.sent()).code
										? this.config.loggerProvider.log(n.message)
										: this.config.loggerProvider.error(n.message),
									[2, n]
								);
							case 2:
								return (
									(i = String(r.sent())),
									this.config.loggerProvider.error(i),
									[2, C(e, 0, i)]
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
				return this.timeline.flush();
			}),
			e
		);
	})(),
	B = (function () {
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
				return T(e) && (this.properties = e), this;
			}),
			(e.prototype.getEventProperties = function () {
				var e = this.properties ? l({}, this.properties) : {};
				return (
					(e[n.REVENUE_PRODUCT_ID] = this.productId),
					(e[n.REVENUE_QUANTITY] = this.quantity),
					(e[n.REVENUE_PRICE] = this.price),
					(e[n.REVENUE_TYPE] = this.revenueType),
					(e[n.REVENUE] = this.revenue),
					e
				);
			}),
			e
		);
	})(),
	$ = function (e, t) {
		var n = Math.max(t, 1);
		return e.reduce(function (e, t, i) {
			var r = Math.floor(i / n);
			return e[r] || (e[r] = []), e[r].push(t), e;
		}, []);
	},
	K = "Amplitude Logger ",
	z = (function () {
		function e() {
			this.logLevel = r.None;
		}
		return (
			(e.prototype.disable = function () {
				this.logLevel = r.None;
			}),
			(e.prototype.enable = function (e) {
				void 0 === e && (e = r.Warn), (this.logLevel = e);
			}),
			(e.prototype.log = function () {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				this.logLevel < r.Verbose ||
					console.log("".concat(K, "[Log]: ").concat(e.join(" ")));
			}),
			(e.prototype.warn = function () {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				this.logLevel < r.Warn ||
					console.warn("".concat(K, "[Warn]: ").concat(e.join(" ")));
			}),
			(e.prototype.error = function () {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				this.logLevel < r.Error ||
					console.error("".concat(K, "[Error]: ").concat(e.join(" ")));
			}),
			e
		);
	})(),
	W = function () {
		return {
			flushMaxRetries: 12,
			flushQueueSize: 200,
			flushIntervalMillis: 1e4,
			logLevel: r.Warn,
			loggerProvider: new z(),
			optOut: !1,
			serverUrl: w,
			serverZone: e.US,
			useBatch: !1,
		};
	},
	Z = (function () {
		function e(e) {
			this._optOut = !1;
			var t,
				n,
				i,
				r = W();
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
	J = function (t, n) {
		return t === e.EU ? (n ? S : _) : n ? E : w;
	},
	G = function (t, n, i) {
		if (
			(void 0 === t && (t = ""),
			void 0 === n && (n = W().serverZone),
			void 0 === i && (i = W().useBatch),
			t)
		)
			return { serverUrl: t, serverZone: void 0 };
		var r = [e.US, e.EU].includes(n) ? n : W().serverZone;
		return { serverZone: r, serverUrl: J(r, i) };
	},
	Y = (function () {
		function e() {
			(this.name = "amplitude"),
				(this.type = o.DESTINATION),
				(this.retryTimeout = 1e3),
				(this.throttleTimeout = 3e4),
				(this.storageKey = ""),
				(this.scheduled = !1),
				(this.queue = []);
		}
		return (
			(e.prototype.setup = function (e) {
				var t;
				return p(this, void 0, void 0, function () {
					var n,
						i = this;
					return f(this, function (r) {
						switch (r.label) {
							case 0:
								return (
									(this.config = e),
									(this.storageKey = ""
										.concat(I, "_")
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
					((this.scheduled = !0),
					setTimeout(function () {
						t.flush(!0).then(function () {
							(t.scheduled = !1), t.queue.length > 0 && t.schedule(e);
						});
					}, e));
			}),
			(e.prototype.flush = function (e) {
				return (
					void 0 === e && (e = !1),
					p(this, void 0, void 0, function () {
						var t,
							n,
							i = this;
						return f(this, function (r) {
							switch (r.label) {
								case 0:
									return (
										(t = []),
										(n = []),
										this.queue.forEach(function (e) {
											return 0 === e.timeout ? t.push(e) : n.push(e);
										}),
										(this.queue = n),
										[
											4,
											Promise.all(
												$(t, this.config.flushQueueSize).map(function (t) {
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
					p(this, void 0, void 0, function () {
						var n, i, r, o;
						return f(this, function (s) {
							switch (s.label) {
								case 0:
									if (!this.config.apiKey)
										return [2, this.fulfillRequest(e, 400, V)];
									(n = {
										api_key: this.config.apiKey,
										events: e.map(function (e) {
											var t = e.event;
											return t.extra, d(t, ["extra"]);
										}),
										options: { min_id_length: this.config.minIdLength },
									}),
										(s.label = 1);
								case 1:
									return (
										s.trys.push([1, 3, , 4]),
										(i = G(
											this.config.serverUrl,
											this.config.serverZone,
											this.config.useBatch
										).serverUrl),
										[4, this.config.transportProvider.send(i, n)]
									);
								case 2:
									if (null === (r = s.sent()))
										return this.fulfillRequest(e, 0, M), [2];
									if (!t)
										return this.fulfillRequest(e, r.statusCode, r.status), [2];
									return this.handleReponse(r, e), [3, 4];
								case 3:
									return (
										(o = s.sent()), this.fulfillRequest(e, 0, String(o)), [3, 4]
									);
								case 4:
									return [2];
							}
						});
					})
				);
			}),
			(e.prototype.handleReponse = function (e, t) {
				var n = e.status;
				switch (n) {
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
				this.fulfillRequest(t, e.statusCode, q);
			}),
			(e.prototype.handleInvalidResponse = function (e, t) {
				var n = this;
				if (e.body.missingField || e.body.error.startsWith(Q)) {
					this.fulfillRequest(t, e.statusCode, e.body.error);
					return;
				}
				var i = g(
						g(
							g(
								g([], v(Object.values(e.body.eventsWithInvalidFields)), !1),
								v(Object.values(e.body.eventsWithMissingFields)),
								!1
							),
							v(Object.values(e.body.eventsWithInvalidIdLengths)),
							!1
						),
						v(e.body.silencedEvents),
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
				this.addToQueue.apply(this, g([], v(o), !1));
			}),
			(e.prototype.handlePayloadTooLargeResponse = function (e, t) {
				if (1 === t.length) {
					this.fulfillRequest(t, e.statusCode, e.body.error);
					return;
				}
				(this.config.flushQueueSize /= 2),
					this.addToQueue.apply(this, g([], v(t), !1));
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
				this.addToQueue.apply(this, g([], v(c), !1));
			}),
			(e.prototype.handleOtherReponse = function (e) {
				var t = this;
				this.addToQueue.apply(
					this,
					g(
						[],
						v(
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
						return e.callback(C(e.event, t, n));
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
	H = function (e) {
		return function () {
			for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return { promise: e.apply(void 0, g([], v(t), !1)) };
		};
	},
	X = function (e) {
		return e
			? (e ^ ((16 * Math.random()) >> (e / 4))).toString(16)
			: (
					String(1e7) +
					String(-1e3) +
					String(-4e3) +
					String(-8e3) +
					String(-1e11)
			  ).replace(/[018]/g, X);
	},
	ee = (function () {
		function e() {
			this.memoryStorage = new Map();
		}
		return (
			(e.prototype.isEnabled = function () {
				return p(this, void 0, void 0, function () {
					return f(this, function (e) {
						return [2, !0];
					});
				});
			}),
			(e.prototype.get = function (e) {
				return p(this, void 0, void 0, function () {
					return f(this, function (t) {
						return [2, this.memoryStorage.get(e)];
					});
				});
			}),
			(e.prototype.getRaw = function (e) {
				return p(this, void 0, void 0, function () {
					var t;
					return f(this, function (n) {
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
				return p(this, void 0, void 0, function () {
					return f(this, function (n) {
						return this.memoryStorage.set(e, t), [2];
					});
				});
			}),
			(e.prototype.remove = function (e) {
				return p(this, void 0, void 0, function () {
					return f(this, function (t) {
						return this.memoryStorage.delete(e), [2];
					});
				});
			}),
			(e.prototype.reset = function () {
				return p(this, void 0, void 0, function () {
					return f(this, function (e) {
						return this.memoryStorage.clear(), [2];
					});
				});
			}),
			e
		);
	})(),
	et = (function () {
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
					p,
					f,
					h,
					v,
					g,
					y,
					m,
					b,
					I,
					w,
					_,
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
									null !== (p = e.silenced_devices) && void 0 !== p ? p : [],
								silencedEvents:
									null !== (f = e.silenced_events) && void 0 !== f ? f : [],
								throttledDevices:
									null !== (h = e.throttled_devices) && void 0 !== h ? h : {},
								throttledEvents:
									null !== (v = e.throttled_events) && void 0 !== v ? v : [],
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
									null !== (I = e.throttled_users) && void 0 !== I ? I : {},
								exceededDailyQuotaDevices:
									null !== (w = e.exceeded_daily_quota_devices) && void 0 !== w
										? w
										: {},
								exceededDailyQuotaUsers:
									null !== (_ = e.exceeded_daily_quota_users) && void 0 !== _
										? _
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
	en = function () {
		return "undefined" != typeof window &&
			window.location &&
			window.location.search
			? window.location.search
					.substring(1)
					.split("&")
					.filter(Boolean)
					.reduce(function (e, t) {
						var n = t.split("=", 2),
							i = ei(n[0]),
							r = ei(n[1]);
						return r && (e[i] = r), e;
					}, {})
			: {};
	},
	ei = function (e) {
		void 0 === e && (e = "");
		try {
			return decodeURIComponent(e);
		} catch (t) {
			return "";
		}
	},
	er = "utm_source",
	eo = "utm_medium",
	es = "utm_campaign",
	eu = "utm_term",
	ea = "utm_content",
	ec = "dclid",
	el = "fbclid",
	ed = "gbraid",
	ep = "gclid",
	ef = "ko_click_id",
	eh = "msclkid",
	ev = "ttclid",
	eg = "twclid",
	ey = "wbraid",
	em = "EMPTY",
	eb = {
		utm_source: void 0,
		utm_medium: void 0,
		utm_campaign: void 0,
		utm_term: void 0,
		utm_content: void 0,
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
	eI = "MKTG",
	ew = (function () {
		function e() {}
		return (
			(e.prototype.parse = function () {
				return p(this, void 0, void 0, function () {
					return f(this, function (e) {
						return [
							2,
							l(
								l(l(l({}, eb), this.getUtmParam()), this.getReferrer()),
								this.getClickIds()
							),
						];
					});
				});
			}),
			(e.prototype.getUtmParam = function () {
				var e = en();
				return {
					utm_source: e[er],
					utm_medium: e[eo],
					utm_campaign: e[es],
					utm_term: e[eu],
					utm_content: e[ea],
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
				} catch (i) {}
				return n;
			}),
			(e.prototype.getClickIds = function () {
				var e,
					t = en();
				return (
					((e = {})[ec] = t[ec]),
					(e[el] = t[el]),
					(e[ed] = t[ed]),
					(e[ep] = t[ep]),
					(e[ef] = t[ef]),
					(e[eh] = t[eh]),
					(e[ev] = t[ev]),
					(e[eg] = t[eg]),
					(e[ey] = t[ey]),
					e
				);
			}),
			e
		);
	})(),
	e_ = function (e, t, n) {
		return (
			void 0 === t && (t = ""),
			void 0 === n && (n = 10),
			[b, t, e.substring(0, n)].filter(Boolean).join("_")
		);
	},
	eE = function (e) {
		return "".concat(b.toLowerCase(), "_").concat(e.substring(0, 6));
	},
	eS = (function () {
		function e(e, t) {
			var n, i;
			(this.storage = t.storage),
				(this.storageKey = e_(e, eI)),
				(this.parser = new ew()),
				(this.track = t.track),
				(this.onNewCampaign = t.onNewCampaign),
				(this.disabled = Boolean(t.disabled)),
				(this.trackNewCampaigns = Boolean(t.trackNewCampaigns)),
				(this.trackPageViews = Boolean(t.trackPageViews)),
				(this.excludeReferrers =
					null !== (n = t.excludeReferrers) && void 0 !== n ? n : []),
				"undefined" != typeof location &&
					this.excludeReferrers.unshift(location.hostname),
				(this.initialEmptyValue =
					null !== (i = t.initialEmptyValue) && void 0 !== i ? i : em);
		}
		return (
			(e.prototype.isNewCampaign = function (e, t) {
				e.referrer;
				var n = d(e, ["referrer"]),
					i = t || {};
				i.referrer;
				var r = d(i, ["referrer"]),
					o = Boolean(
						n.referring_domain &&
							this.excludeReferrers.includes(n.referring_domain)
					),
					s = JSON.stringify(n) !== JSON.stringify(r);
				return !o && (!t || s);
			}),
			(e.prototype.saveCampaignToStorage = function (e) {
				return p(this, void 0, void 0, function () {
					return f(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.storage.set(this.storageKey, e)];
							case 1:
								return t.sent(), [2];
						}
					});
				});
			}),
			(e.prototype.getCampaignFromStorage = function () {
				return p(this, void 0, void 0, function () {
					return f(this, function (e) {
						switch (e.label) {
							case 0:
								return [4, this.storage.get(this.storageKey)];
							case 1:
								return [2, e.sent()];
						}
					});
				});
			}),
			(e.prototype.createCampaignEvent = function (e) {
				var t = this,
					n = Object.entries(l(l({}, eb), e)).reduce(function (e, n) {
						var i = v(n, 2),
							r = i[0],
							o = i[1];
						return (e.setOnce("initial_".concat(r), o || t.initialEmptyValue),
						o)
							? e.set(r, o)
							: e.unset(r);
					}, new R()),
					i = {
						event_type: "Page View",
						event_properties: {
							page_title:
								("undefined" != typeof document && document.title) || "",
							page_location:
								("undefined" != typeof location && location.href) || "",
							page_path:
								("undefined" != typeof location && location.pathname) || "",
						},
					};
				return l(l({}, U(n)), this.trackPageViews && i);
			}),
			(e.prototype.send = function (e) {
				return p(this, void 0, void 0, function () {
					var t, n;
					return f(this, function (i) {
						switch (i.label) {
							case 0:
								if (this.disabled) return [2];
								return [4, this.parser.parse()];
							case 1:
								return (t = i.sent()), [4, this.getCampaignFromStorage()];
							case 2:
								if (((n = i.sent()), !e)) {
									if (!this.trackNewCampaigns || !this.isNewCampaign(t, n))
										return [2];
									this.onNewCampaign(t);
								}
								return [4, this.track(this.createCampaignEvent(t))];
							case 3:
								return i.sent(), [4, this.saveCampaignToStorage(t)];
							case 4:
								return i.sent(), [2];
						}
					});
				});
			}),
			e
		);
	})(),
	eO = (function () {
		function e(e) {
			this.options = l({}, e);
		}
		return (
			(e.prototype.isEnabled = function () {
				return p(this, void 0, void 0, function () {
					var t, n, i;
					return f(this, function (r) {
						switch (r.label) {
							case 0:
								if ("undefined" == typeof window) return [2, !1];
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
				return p(this, void 0, void 0, function () {
					var t;
					return f(this, function (n) {
						switch (n.label) {
							case 0:
								return [4, this.getRaw(e)];
							case 1:
								if (!(t = n.sent())) return [2, void 0];
								try {
									try {
										t = decodeURIComponent(atob(t));
									} catch (i) {}
									return [2, JSON.parse(t)];
								} catch (r) {
									return [2, void 0];
								}
								return [2];
						}
					});
				});
			}),
			(e.prototype.getRaw = function (e) {
				return p(this, void 0, void 0, function () {
					var t;
					return f(this, function (n) {
						return (t = window.document.cookie.split("; ").find(function (t) {
							return 0 === t.indexOf(e + "=");
						}))
							? [2, t.substring(e.length + 1)]
							: [2, void 0];
					});
				});
			}),
			(e.prototype.set = function (e, t) {
				var n;
				return p(this, void 0, void 0, function () {
					var i, r, o, s, u;
					return f(this, function (a) {
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
								(window.document.cookie = u);
						} catch (c) {}
						return [2];
					});
				});
			}),
			(e.prototype.remove = function (e) {
				return p(this, void 0, void 0, function () {
					return f(this, function (t) {
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
				return p(this, void 0, void 0, function () {
					return f(this, function (e) {
						return [2];
					});
				});
			}),
			e
		);
	})(),
	eT = (function () {
		function e(e, t) {
			(this.storage = e),
				(this.isSessionCacheValid = !0),
				(this.storageKey = e_(t)),
				(this.cache = { optOut: !1 });
		}
		return (
			(e.prototype.load = function () {
				var e;
				return p(this, void 0, void 0, function () {
					var t;
					return f(this, function (n) {
						switch (n.label) {
							case 0:
								return (t = this), [4, this.storage.get(this.storageKey)];
							case 1:
								return (
									(t.cache =
										null !== (e = n.sent()) && void 0 !== e
											? e
											: { optOut: !1 }),
									[2, this]
								);
						}
					});
				});
			}),
			(e.prototype.setSession = function (e) {
				(this.cache = l(l({}, this.cache), e)),
					this.storage.set(this.storageKey, this.cache);
			}),
			(e.prototype.getSessionId = function () {
				var e = this;
				return (
					(this.isSessionCacheValid = !0),
					this.storage.get(this.storageKey).then(function (t) {
						e.isSessionCacheValid &&
							(e.cache.sessionId = null == t ? void 0 : t.sessionId);
					}),
					this.cache.sessionId
				);
			}),
			(e.prototype.setSessionId = function (e) {
				(this.isSessionCacheValid = !1), this.setSession({ sessionId: e });
			}),
			(e.prototype.getDeviceId = function () {
				return this.cache.deviceId;
			}),
			(e.prototype.setDeviceId = function (e) {
				this.setSession({ deviceId: e });
			}),
			(e.prototype.getUserId = function () {
				return this.cache.userId;
			}),
			(e.prototype.setUserId = function (e) {
				this.setSession({ userId: e });
			}),
			(e.prototype.getLastEventTime = function () {
				return this.cache.lastEventTime;
			}),
			(e.prototype.setLastEventTime = function (e) {
				this.setSession({ lastEventTime: e });
			}),
			(e.prototype.getOptOut = function () {
				return this.cache.optOut;
			}),
			(e.prototype.setOptOut = function (e) {
				this.setSession({ optOut: e });
			}),
			e
		);
	})(),
	eP = (function (e) {
		function t() {
			return (null !== e && e.apply(this, arguments)) || this;
		}
		return (
			c(t, e),
			(t.prototype.send = function (e, t) {
				return p(this, void 0, void 0, function () {
					var n, i;
					return f(this, function (r) {
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
	})(et);
class eR {
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
var ek = (function () {
		function e() {
			this.ua = new eR(
				"undefined" != typeof navigator ? navigator.userAgent : null
			).getResult();
		}
		return (
			(e.prototype.getApplicationContext = function () {
				return {
					versionName: this.versionName,
					language: eD(),
					platform: "Web",
					os: eU(this.ua),
					deviceModel: eN(this.ua),
				};
			}),
			e
		);
	})(),
	eU = function (e) {
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
	eN = function (e) {
		var t;
		return null === (t = e.os) || void 0 === t ? void 0 : t.name;
	},
	eD = function () {
		return (
			("undefined" != typeof navigator &&
				((navigator.languages && navigator.languages[0]) ||
					navigator.language)) ||
			""
		);
	},
	ex = (function () {
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
	eC = function () {
		return (eC =
			Object.assign ||
			function (e) {
				for (var t, n = 1, i = arguments.length; n < i; n++)
					for (var r in (t = arguments[n]))
						Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e;
			}).apply(this, arguments);
	},
	eA = "$set",
	eq = "$unset",
	eM = "$clearAll";
Object.entries ||
	(Object.entries = function (e) {
		for (var t = Object.keys(e), n = t.length, i = Array(n); n--; )
			i[n] = [t[n], e[t[n]]];
		return i;
	});
var eL = (function () {
		function e() {
			(this.identity = { userProperties: {} }), (this.listeners = new Set());
		}
		return (
			(e.prototype.editIdentity = function () {
				var e = this,
					t = eC({}, this.identity.userProperties),
					n = eC(eC({}, this.identity), { userProperties: t });
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
								case eA:
									for (var a = 0, c = Object.entries(u); a < c.length; a++) {
										var l = c[a],
											d = l[0],
											p = l[1];
										t[d] = p;
									}
									break;
								case eq:
									for (var f = 0, h = Object.keys(u); f < h.length; f++) {
										var d = h[f];
										delete t[d];
									}
									break;
								case eM:
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
				return eC({}, this.identity);
			}),
			(e.prototype.setIdentity = function (e) {
				var t = eC({}, this.identity);
				(this.identity = eC({}, e)),
					ej(t, this.identity) ||
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
	ej = function (e, t) {
		var n = typeof e;
		if (n !== typeof t) return !1;
		for (
			var i = 0, r = ["string", "number", "boolean", "undefined"];
			i < r.length;
			i++
		)
			if (r[i] === n) return e === t;
		if (e.length !== t.length) return !1;
		var o = Array.isArray(e),
			s = Array.isArray(t);
		if (o !== s) return !1;
		if (o && s) {
			for (var u = 0; u < e.length; u++) if (!ej(e[u], t[u])) return !1;
		} else {
			if (!ej(Object.keys(e).sort(), Object.keys(t).sort())) return !1;
			var a = !0;
			return (
				Object.keys(e).forEach(function (n) {
					ej(e[n], t[n]) || (a = !1);
				}),
				a
			);
		}
		return !0;
	},
	eV = "undefined" != typeof globalThis ? globalThis : global || self,
	eQ = (function () {
		function e() {
			(this.identityStore = new eL()),
				(this.eventBridge = new ex()),
				(this.applicationContextProvider = new ek());
		}
		return (
			(e.getInstance = function (t) {
				return (
					eV.analyticsConnectorInstances ||
						(eV.analyticsConnectorInstances = {}),
					eV.analyticsConnectorInstances[t] ||
						(eV.analyticsConnectorInstances[t] = new e()),
					eV.analyticsConnectorInstances[t]
				);
			}),
			e
		);
	})(),
	eF = function () {
		return eQ.getInstance("$default_instance");
	},
	eB = (function () {
		function e() {
			(this.name = "identity"),
				(this.type = o.BEFORE),
				(this.identityStore = eF().identityStore);
		}
		return (
			(e.prototype.execute = function (e) {
				return p(this, void 0, void 0, function () {
					var t;
					return f(this, function (n) {
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
	e$ = function () {
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
	eK = function (e, t) {
		ez(e, t);
	},
	ez = function (e, t) {
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
	eW = function (e) {
		return e && void 0 !== e._q;
	},
	eZ = "1.5.5",
	eJ = "Web",
	eG = "$remote",
	eY = (function () {
		function e() {
			var e;
			(this.name = "context"),
				(this.type = o.BEFORE),
				(this.eventId = 0),
				(this.library = "amplitude-ts/".concat(eZ)),
				"undefined" != typeof navigator && (e = navigator.userAgent),
				(this.uaResult = new eR(e).getResult());
		}
		return (
			(e.prototype.setup = function (e) {
				return (this.config = e), Promise.resolve(void 0);
			}),
			(e.prototype.execute = function (e) {
				return p(this, void 0, void 0, function () {
					var t, n, i, r, o;
					return f(this, function (s) {
						return (
							this.isSessionValid() || (this.config.sessionId = Date.now()),
							(this.config.lastEventTime = Date.now()),
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
																				platform: eJ,
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
															language: e$(),
														}
													),
													this.config.trackingOptions.ipAddress && { ip: eG }
												),
												{
													insert_id: X(),
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
			(e.prototype.isSessionValid = function () {
				var e = this.config.lastEventTime || Date.now();
				return Date.now() - e < this.config.sessionTimeout;
			}),
			e
		);
	})(),
	eH = (function () {
		function e() {}
		return (
			(e.prototype.isEnabled = function () {
				return p(this, void 0, void 0, function () {
					var t, n, i;
					return f(this, function (r) {
						switch (r.label) {
							case 0:
								if ("undefined" == typeof window) return [2, !1];
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
				return p(this, void 0, void 0, function () {
					var t;
					return f(this, function (n) {
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
				return p(this, void 0, void 0, function () {
					return f(this, function (t) {
						return [2, window.localStorage.getItem(e) || void 0];
					});
				});
			}),
			(e.prototype.set = function (e, t) {
				return p(this, void 0, void 0, function () {
					return f(this, function (n) {
						try {
							window.localStorage.setItem(e, JSON.stringify(t));
						} catch (i) {}
						return [2];
					});
				});
			}),
			(e.prototype.remove = function (e) {
				return p(this, void 0, void 0, function () {
					return f(this, function (t) {
						try {
							window.localStorage.removeItem(e);
						} catch (n) {}
						return [2];
					});
				});
			}),
			(e.prototype.reset = function () {
				return p(this, void 0, void 0, function () {
					return f(this, function (e) {
						try {
							window.localStorage.clear();
						} catch (t) {}
						return [2];
					});
				});
			}),
			e
		);
	})(),
	eX = (function (e) {
		function t() {
			var t = (null !== e && e.apply(this, arguments)) || this;
			return (t.state = { done: 4 }), t;
		}
		return (
			c(t, e),
			(t.prototype.send = function (e, t) {
				return p(this, void 0, void 0, function () {
					var n = this;
					return f(this, function (i) {
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
											} catch (u) {
												r(u);
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
	})(et),
	e0 = (function (e) {
		function t() {
			return (null !== e && e.apply(this, arguments)) || this;
		}
		return (
			c(t, e),
			(t.prototype.send = function (e, t) {
				return p(this, void 0, void 0, function () {
					var n = this;
					return f(this, function (i) {
						return [
							2,
							new Promise(function (i, r) {
								if (
									"undefined" == typeof window ||
									void 0 === window.navigator ||
									void 0 === window.navigator.sendBeacon
								)
									throw Error("SendBeaconTransport is not supported");
								try {
									var o = JSON.stringify(t);
									if (window.navigator.sendBeacon(e, JSON.stringify(t)))
										return i(
											n.buildResponse({
												code: 200,
												events_ingested: t.events.length,
												payload_size_bytes: o.length,
												server_upload_time: Date.now(),
											})
										);
									return i(n.buildResponse({ code: 500 }));
								} catch (s) {
									r(s);
								}
							}),
						];
					});
				});
			}),
			t
		);
	})(et),
	e1 = function () {
		var e = new ee();
		return {
			cookieExpiration: 365,
			cookieSameSite: "Lax",
			cookieSecure: !1,
			cookieStorage: e,
			disableCookies: !1,
			domain: "",
			sessionManager: new eT(e, ""),
			sessionTimeout: 18e5,
			storageProvider: new ee(),
			trackingOptions: {
				deviceManufacturer: !0,
				deviceModel: !0,
				ipAddress: !0,
				language: !0,
				osName: !0,
				osVersion: !0,
				platform: !0,
			},
			transportProvider: new eP(),
		};
	},
	e2 = (function (e) {
		function t(t, n, i) {
			var r,
				o,
				s,
				u,
				a,
				c,
				d,
				p,
				f,
				h,
				v,
				g,
				y = this,
				m = e1();
			return (
				((y =
					e.call(
						this,
						l(
							l(
								{
									flushIntervalMillis: 1e3,
									flushMaxRetries: 5,
									flushQueueSize: 30,
								},
								i
							),
							{
								apiKey: t,
								storageProvider:
									null !== (r = null == i ? void 0 : i.storageProvider) &&
									void 0 !== r
										? r
										: m.storageProvider,
								transportProvider:
									null !== (o = null == i ? void 0 : i.transportProvider) &&
									void 0 !== o
										? o
										: m.transportProvider,
							}
						)
					) || this).cookieStorage =
					null !== (s = null == i ? void 0 : i.cookieStorage) && void 0 !== s
						? s
						: m.cookieStorage),
				(y.sessionManager =
					null !== (u = null == i ? void 0 : i.sessionManager) && void 0 !== u
						? u
						: m.sessionManager),
				(y.sessionTimeout =
					null !== (a = null == i ? void 0 : i.sessionTimeout) && void 0 !== a
						? a
						: m.sessionTimeout),
				(y.appVersion = null == i ? void 0 : i.appVersion),
				(y.attribution = null == i ? void 0 : i.attribution),
				(y.cookieExpiration =
					null !== (c = null == i ? void 0 : i.cookieExpiration) && void 0 !== c
						? c
						: m.cookieExpiration),
				(y.cookieSameSite =
					null !== (d = null == i ? void 0 : i.cookieSameSite) && void 0 !== d
						? d
						: m.cookieSameSite),
				(y.cookieSecure =
					null !== (p = null == i ? void 0 : i.cookieSecure) && void 0 !== p
						? p
						: m.cookieSecure),
				(y.deviceId = null == i ? void 0 : i.deviceId),
				(y.disableCookies =
					null !== (f = null == i ? void 0 : i.disableCookies) && void 0 !== f
						? f
						: m.disableCookies),
				(y.domain =
					null !== (h = null == i ? void 0 : i.domain) && void 0 !== h
						? h
						: m.domain),
				(y.lastEventTime =
					null !== (v = y.lastEventTime) && void 0 !== v
						? v
						: null == i
						? void 0
						: i.lastEventTime),
				(y.optOut = Boolean(null == i ? void 0 : i.optOut)),
				(y.partnerId = null == i ? void 0 : i.partnerId),
				(y.sessionId = null == i ? void 0 : i.sessionId),
				(y.trackingOptions =
					null !== (g = null == i ? void 0 : i.trackingOptions) && void 0 !== g
						? g
						: m.trackingOptions),
				(y.userId = n),
				y
			);
		}
		return (
			c(t, e),
			Object.defineProperty(t.prototype, "deviceId", {
				get: function () {
					return this.sessionManager.getDeviceId();
				},
				set: function (e) {
					this.sessionManager.setDeviceId(e);
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, "userId", {
				get: function () {
					return this.sessionManager.getUserId();
				},
				set: function (e) {
					this.sessionManager.setUserId(e);
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, "sessionId", {
				get: function () {
					return this.sessionManager.getSessionId();
				},
				set: function (e) {
					this.sessionManager.setSessionId(e);
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, "optOut", {
				get: function () {
					return this.sessionManager.getOptOut();
				},
				set: function (e) {
					var t;
					null === (t = this.sessionManager) ||
						void 0 === t ||
						t.setOptOut(Boolean(e));
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, "lastEventTime", {
				get: function () {
					return this.sessionManager.getLastEventTime();
				},
				set: function (e) {
					this.sessionManager.setLastEventTime(e);
				},
				enumerable: !1,
				configurable: !0,
			}),
			t
		);
	})(Z),
	e4 = function (e, t, n) {
		return p(void 0, void 0, void 0, function () {
			var i, r, o, s, u, a, c, d, p, h, v, g, y, m, b, I, w;
			return f(this, function (f) {
				switch (f.label) {
					case 0:
						if (
							((i = e1()),
							!(null !== (y = null == n ? void 0 : n.domain) && void 0 !== y))
						)
							return [3, 1];
						return (o = y), [3, 3];
					case 1:
						return [4, e9()];
					case 2:
						(o = f.sent()), (f.label = 3);
					case 3:
						return (r = o), [4, e3(l(l({}, n), { domain: r }))];
					case 4:
						return (s = f.sent()), (u = e_(e)), [4, s.get(u)];
					case 5:
						return (a = f.sent()), (c = en()), [4, new eT(s, e).load()];
					case 6:
						return (
							(d = f.sent()),
							(p = e2.bind),
							(h = [void 0, e, null != t ? t : null == a ? void 0 : a.userId]),
							(v = [l({}, n)]),
							(g = {
								cookieStorage: s,
								sessionManager: d,
								deviceId: e7(
									null == a ? void 0 : a.deviceId,
									null == n ? void 0 : n.deviceId,
									c.deviceId
								),
								domain: r,
								optOut:
									null !== (m = null == n ? void 0 : n.optOut) && void 0 !== m
										? m
										: Boolean(null == a ? void 0 : a.optOut),
							}),
							[4, s.get(u)]
						);
					case 7:
						return (
							(g.sessionId =
								null !==
									(I =
										null === (b = f.sent()) || void 0 === b
											? void 0
											: b.sessionId) && void 0 !== I
									? I
									: null == n
									? void 0
									: n.sessionId),
							[4, e6(n)]
						);
					case 8:
						return [
							2,
							new (p.apply(
								e2,
								h.concat([
									l.apply(
										void 0,
										v.concat([
											((g.storageProvider = f.sent()),
											(g.trackingOptions = l(
												l({}, i.trackingOptions),
												null == n ? void 0 : n.trackingOptions
											)),
											(g.transportProvider =
												null !==
													(w = null == n ? void 0 : n.transportProvider) &&
												void 0 !== w
													? w
													: e8(null == n ? void 0 : n.transport)),
											g),
										])
									),
								])
							))(),
						];
				}
			});
		});
	},
	e3 = function (e, t) {
		return (
			void 0 === t && (t = e1()),
			p(void 0, void 0, void 0, function () {
				var n, i, r;
				return f(this, function (o) {
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
							if (r) return [2, e5(n)];
							return [2, i];
					}
				});
			})
		);
	},
	e5 = function (e) {
		return p(void 0, void 0, void 0, function () {
			var t, n;
			return f(this, function (i) {
				switch (i.label) {
					case 0:
						if (
							((t = new eO({
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
						return [4, (t = new eH()).isEnabled()];
					case 3:
						i.sent() || (t = new ee()), (i.label = 4);
					case 4:
						return [2, t];
				}
			});
		});
	},
	e6 = function (e) {
		return p(void 0, void 0, void 0, function () {
			var t, n, i, r, o, s;
			return f(this, function (u) {
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
							(n = (t = h([
								null == e ? void 0 : e.storageProvider,
								new eH(),
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
	e7 = function (e, t, n) {
		return t || n || e || X();
	},
	e8 = function (e) {
		return e === u.XHR
			? new eX()
			: e === u.SendBeacon
			? new e0()
			: e1().transportProvider;
	},
	e9 = function (e) {
		return p(void 0, void 0, void 0, function () {
			var t, n, i, r, o, s, u;
			return f(this, function (a) {
				switch (a.label) {
					case 0:
						return [4, new eO().isEnabled()];
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
							(s = { domain: "." + (o = n[r]) }), [4, (u = new eO(s)).set(i, 1)]
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
	te = function (e, t) {
		return p(void 0, void 0, void 0, function () {
			var n, i, r, o, s, u, a, c, l;
			return f(this, function (d) {
				switch (d.label) {
					case 0:
						return [4, (n = new eO()).isEnabled()];
					case 1:
						return (
							(!d.sent() || (null == t ? void 0 : t.disableCookies)) &&
								(n = new eH()),
							[4, n.isEnabled()]
						);
					case 2:
						if (!d.sent()) return [2, { optOut: !1 }];
						return (i = eE(e)), [4, n.getRaw(i)];
					case 3:
						if (!(r = d.sent())) return [2, { optOut: !1 }];
						return [4, n.remove(i)];
					case 4:
						return (
							d.sent(),
							(s = (o = v(r.split("."), 5))[0]),
							(u = o[1]),
							(a = o[2]),
							(c = o[3]),
							(l = o[4]),
							[
								2,
								{
									deviceId: s,
									userId: tn(u),
									sessionId: tt(c),
									lastEventTime: tt(l),
									optOut: Boolean(a),
								},
							]
						);
				}
			});
		});
	},
	tt = function (e) {
		var t = parseInt(e, 32);
		if (!isNaN(t)) return t;
	},
	tn = function (e) {
		if (atob && escape && e)
			try {
				return decodeURIComponent(escape(atob(e)));
			} catch (t) {
				return;
			}
	},
	ti = (function (e) {
		function t() {
			return (null !== e && e.apply(this, arguments)) || this;
		}
		return (
			c(t, e),
			(t.prototype.init = function (t, n, i) {
				var r, o, s;
				return (
					void 0 === t && (t = ""),
					p(this, void 0, void 0, function () {
						var u,
							a,
							c,
							d,
							p,
							h = this;
						return f(this, function (f) {
							switch (f.label) {
								case 0:
									if (this.initializing) return [2];
									return (this.initializing = !0), [4, te(t, i)];
								case 1:
									return (
										(u = f.sent()),
										[
											4,
											e4(
												t,
												n || u.userId,
												l(l({}, i), {
													deviceId:
														null !== (r = u.deviceId) && void 0 !== r
															? r
															: null == i
															? void 0
															: i.deviceId,
													sessionId:
														null !== (o = u.sessionId) && void 0 !== o
															? o
															: null == i
															? void 0
															: i.sessionId,
													optOut:
														null !== (s = null == i ? void 0 : i.optOut) &&
														void 0 !== s
															? s
															: u.optOut,
													lastEventTime: u.lastEventTime,
												})
											),
										]
									);
								case 2:
									return (
										(a = f.sent()),
										(c = this.getAndResetQueuedFunctions()),
										[4, e.prototype._init.call(this, a)]
									);
								case 3:
									return (
										f.sent(),
										(d = !this.config.lastEventTime),
										(!this.config.sessionId ||
											(this.config.lastEventTime &&
												Date.now() - this.config.lastEventTime >
													this.config.sessionTimeout)) &&
											(this.setSessionId(Date.now()), (d = !0)),
										(p = eF()).eventBridge.setEventReceiver(function (e) {
											h.track(e.eventType, e.eventProperties);
										}),
										p.identityStore.setIdentity({
											userId: this.config.userId,
											deviceId: this.config.deviceId,
										}),
										[4, this.add(new eY())]
									);
								case 4:
									return f.sent(), [4, this.add(new eB())];
								case 5:
									return f.sent(), [4, this.add(new Y())];
								case 6:
									return (
										f.sent(),
										(this.initializing = !1),
										(this.timeline.isReady = !0),
										this.config.optOut || this.timeline.scheduleApply(0),
										[4, this.runAttributionStrategy(a.attribution, d)]
									);
								case 7:
									return (
										f.sent(),
										(this.q = g(g([], v(c), !1), v(this.q), !1)),
										[4, this.runQueuedFunctions()]
									);
								case 8:
									return f.sent(), [2];
							}
						});
					})
				);
			}),
			(t.prototype.runAttributionStrategy = function (e, t) {
				return (
					void 0 === t && (t = !1),
					p(this, void 0, void 0, function () {
						var n, i, r;
						return f(this, function (o) {
							switch (o.label) {
								case 0:
									return (
										(n = this.track.bind(this)),
										(i = this.setSessionId.bind(this, Date.now())),
										[4, e5(this.config)]
									);
								case 1:
									return (
										(r = o.sent()),
										[
											4,
											new eS(
												this.config.apiKey,
												l(l({}, e), { storage: r, track: n, onNewCampaign: i })
											).send(t),
										]
									);
								case 2:
									return o.sent(), [2];
							}
						});
					})
				);
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
				this.config.userId = e;
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
				this.setUserId(void 0), this.setDeviceId(X());
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
				(this.config.sessionId = e), (this.config.lastEventTime = void 0);
			}),
			(t.prototype.setTransport = function (e) {
				if (!this.config) {
					this.q.push(this.setTransport.bind(this, e));
					return;
				}
				this.config.transportProvider = e8(e);
			}),
			(t.prototype.identify = function (t, n) {
				if (eW(t)) {
					var i = t._q;
					(t._q = []), (t = ez(new R(), i));
				}
				return (
					(null == n ? void 0 : n.user_id) && this.setUserId(n.user_id),
					(null == n ? void 0 : n.device_id) && this.setDeviceId(n.device_id),
					e.prototype.identify.call(this, t, n)
				);
			}),
			(t.prototype.groupIdentify = function (t, n, i, r) {
				if (eW(i)) {
					var o = i._q;
					(i._q = []), (i = ez(new R(), o));
				}
				return e.prototype.groupIdentify.call(this, t, n, i, r);
			}),
			(t.prototype.revenue = function (t, n) {
				if (eW(t)) {
					var i = t._q;
					(t._q = []), (t = ez(new B(), i));
				}
				return e.prototype.revenue.call(this, t, n);
			}),
			t
		);
	})(F),
	tr = function () {
		var e = new ti();
		return {
			init: H(e.init.bind(e)),
			add: H(e.add.bind(e)),
			remove: H(e.remove.bind(e)),
			track: H(e.track.bind(e)),
			logEvent: H(e.logEvent.bind(e)),
			identify: H(e.identify.bind(e)),
			groupIdentify: H(e.groupIdentify.bind(e)),
			setGroup: H(e.setGroup.bind(e)),
			revenue: H(e.revenue.bind(e)),
			flush: H(e.flush.bind(e)),
			getUserId: e.getUserId.bind(e),
			setUserId: e.setUserId.bind(e),
			getDeviceId: e.getDeviceId.bind(e),
			setDeviceId: e.setDeviceId.bind(e),
			reset: e.reset.bind(e),
			getSessionId: e.getSessionId.bind(e),
			setSessionId: e.setSessionId.bind(e),
			setOptOut: e.setOptOut.bind(e),
			setTransport: e.setTransport.bind(e),
		};
	},
	to = tr(),
	ts =
		"undefined" != typeof globalThis
			? globalThis
			: "undefined" != typeof window
			? window
			: "undefined" != typeof self
			? self
			: global,
	tu = to.add,
	ta = to.flush,
	tc = to.getDeviceId,
	tl = to.getSessionId,
	td = to.getUserId,
	tp = to.groupIdentify,
	tf = to.identify,
	th = to.init,
	tv = to.logEvent,
	tg = to.remove,
	ty = to.reset,
	tm = to.revenue,
	tb = to.setDeviceId,
	tI = to.setGroup,
	tw = to.setOptOut,
	t_ = to.setSessionId,
	tE = to.setTransport,
	tS = to.setUserId,
	tO = to.track;
export {
	ts as GlobalScope,
	R as Identify,
	B as Revenue,
	y as Types,
	tu as add,
	tr as createInstance,
	ta as flush,
	tc as getDeviceId,
	tl as getSessionId,
	td as getUserId,
	tp as groupIdentify,
	tf as identify,
	th as init,
	tv as logEvent,
	tg as remove,
	ty as reset,
	tm as revenue,
	eK as runQueuedFunctions,
	tb as setDeviceId,
	tI as setGroup,
	tw as setOptOut,
	t_ as setSessionId,
	tE as setTransport,
	tS as setUserId,
	tO as track,
};
