var e,
    n,
    t,
    _,
    r,
    o,
    l,
    u = {},
    i = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function f(e, n) {
    for (var t in n) e[t] = n[t];
    return e;
}
function a(e) {
    var n = e.parentNode;
    n && n.removeChild(e);
}
function s(n, t, _) {
    var r,
        o,
        l,
        u = {};
    for (l in t)
        "key" == l ? (r = t[l]) : "ref" == l ? (o = t[l]) : (u[l] = t[l]);
    if (
        (arguments.length > 2 &&
            (u.children = arguments.length > 3 ? e.call(arguments, 2) : _),
            "function" == typeof n && null != n.defaultProps)
    )
        for (l in n.defaultProps) void 0 === u[l] && (u[l] = n.defaultProps[l]);
    return p(n, u, r, o, null);
}
function p(e, _, r, o, l) {
    var u = {
        type: e,
        props: _,
        key: r,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == l ? ++t : l,
    };
    return null != n.vnode && n.vnode(u), u;
}
function h() {
    return { current: null };
}
function d(e) {
    return e.children;
}
function v(e, n) {
    (this.props = e), (this.context = n);
}
function y(e, n) {
    if (null == n) return e.__ ? y(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var t; n < e.__k.length; n++)
        if (null != (t = e.__k[n]) && null != t.__e) return t.__e;
    return "function" == typeof e.type ? y(e) : null;
}
function m(e) {
    var n, t;
    if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
            if (null != (t = e.__k[n]) && null != t.__e) {
                e.__e = e.__c.base = t.__e;
                break;
            }
        return m(e);
    }
}
function b(e) {
    ((!e.__d && (e.__d = !0) && _.push(e) && !k.__r++) ||
        o !== n.debounceRendering) &&
        ((o = n.debounceRendering) || r)(k);
}
function k() {
    for (var e; (k.__r = _.length);)
        (e = _.sort(function (e, n) {
            return e.__v.__b - n.__v.__b;
        })),
            (_ = []),
            e.some(function (e) {
                var n, t, _, r, o, l;
                e.__d &&
                    ((o = (r = (n = e).__v).__e),
                        (l = n.__P) &&
                        ((t = []),
                            ((_ = f({}, r)).__v = r.__v + 1),
                            U(
                                l,
                                r,
                                _,
                                n.__n,
                                void 0 !== l.ownerSVGElement,
                                null != r.__h ? [o] : null,
                                t,
                                null == o ? y(r) : o,
                                r.__h
                            ),
                            A(t, r),
                            r.__e != o && m(r)));
            });
}
function g(e, n, t, _, r, o, l, c, f, a) {
    var s,
        h,
        v,
        m,
        b,
        k,
        g,
        C = (_ && _.__k) || i,
        x = C.length;
    for (t.__k = [], s = 0; s < n.length; s++)
        if (
            null !=
            (m = t.__k[s] =
                null == (m = n[s]) || "boolean" == typeof m
                    ? null
                    : "string" == typeof m || "number" == typeof m || "bigint" == typeof m
                        ? p(null, m, null, null, m)
                        : Array.isArray(m)
                            ? p(d, { children: m }, null, null, null)
                            : m.__b > 0
                                ? p(m.type, m.props, m.key, null, m.__v)
                                : m)
        ) {
            if (
                ((m.__ = t),
                    (m.__b = t.__b + 1),
                    null === (v = C[s]) || (v && m.key == v.key && m.type === v.type))
            )
                C[s] = void 0;
            else
                for (h = 0; h < x; h++) {
                    if ((v = C[h]) && m.key == v.key && m.type === v.type) {
                        C[h] = void 0;
                        break;
                    }
                    v = null;
                }
            U(e, m, (v = v || u), r, o, l, c, f, a),
                (b = m.__e),
                (h = m.ref) &&
                v.ref != h &&
                (g || (g = []),
                    v.ref && g.push(v.ref, null, m),
                    g.push(h, m.__c || b, m)),
                null != b
                    ? (null == k && (k = b),
                        "function" == typeof m.type && null != m.__k && m.__k === v.__k
                            ? (m.__d = f = P(m, f, e))
                            : (f = S(e, m, v, C, b, f)),
                        a || "option" !== t.type
                            ? "function" == typeof t.type && (t.__d = f)
                            : (e.value = ""))
                    : f && v.__e == f && f.parentNode != e && (f = y(v));
        }
    for (t.__e = k, s = x; s--;)
        null != C[s] &&
            ("function" == typeof t.type &&
                null != C[s].__e &&
                C[s].__e == t.__d &&
                (t.__d = y(_, s + 1)),
                O(C[s], C[s]));
    if (g) for (s = 0; s < g.length; s++) T(g[s], g[++s], g[++s]);
}
function P(e, n, t) {
    var _, r;
    for (_ = 0; _ < e.__k.length; _++)
        (r = e.__k[_]) &&
            ((r.__ = e),
                (n =
                    "function" == typeof r.type
                        ? P(r, n, t)
                        : S(t, r, r, e.__k, r.__e, n)));
    return n;
}
function C(e, n) {
    return (
        (n = n || []),
        null == e ||
        "boolean" == typeof e ||
        (Array.isArray(e)
            ? e.some(function (e) {
                C(e, n);
            })
            : n.push(e)),
        n
    );
}
function S(e, n, t, _, r, o) {
    var l, u, i;
    if (void 0 !== n.__d) (l = n.__d), (n.__d = void 0);
    else if (null == t || r != o || null == r.parentNode)
        e: if (null == o || o.parentNode !== e) e.appendChild(r), (l = null);
        else {
            for (u = o, i = 0; (u = u.nextSibling) && i < _.length; i += 2)
                if (u == r) break e;
            e.insertBefore(r, o), (l = o);
        }
    return void 0 !== l ? l : r.nextSibling;
}
function x(e, n, t) {
    "-" === n[0]
        ? e.setProperty(n, t)
        : (e[n] =
            null == t ? "" : "number" != typeof t || c.test(n) ? t : t + "px");
}
function H(e, n, t, _, r) {
    var o;
    e: if ("style" === n)
        if ("string" == typeof t) e.style.cssText = t;
        else {
            if (("string" == typeof _ && (e.style.cssText = _ = ""), _))
                for (n in _) (t && n in t) || x(e.style, n, "");
            if (t) for (n in t) (_ && t[n] === _[n]) || x(e.style, n, t[n]);
        }
    else if ("o" === n[0] && "n" === n[1])
        (o = n !== (n = n.replace(/Capture$/, ""))),
            (n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2)),
            e.l || (e.l = {}),
            (e.l[n + o] = t),
            t
                ? _ || e.addEventListener(n, o ? w : E, o)
                : e.removeEventListener(n, o ? w : E, o);
    else if ("dangerouslySetInnerHTML" !== n) {
        if (r) n = n.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (
            "href" !== n &&
            "list" !== n &&
            "form" !== n &&
            "tabIndex" !== n &&
            "download" !== n &&
            n in e
        )
            try {
                e[n] = null == t ? "" : t;
                break e;
            } catch (e) { }
        "function" == typeof t ||
            (null != t && (!1 !== t || ("a" === n[0] && "r" === n[1]))
                ? e.setAttribute(n, t)
                : e.removeAttribute(n));
    }
}
function E(e) {
    this.l[e.type + !1](n.event ? n.event(e) : e);
}
function w(e) {
    this.l[e.type + !0](n.event ? n.event(e) : e);
}
function U(e, t, _, r, o, l, u, i, c) {
    var a,
        s,
        p,
        h,
        y,
        m,
        b,
        k,
        P,
        C,
        S,
        x = t.type;
    if (void 0 !== t.constructor) return null;
    null != _.__h &&
        ((c = _.__h), (i = t.__e = _.__e), (t.__h = null), (l = [i])),
        (a = n.__b) && a(t);
    try {
        e: if ("function" == typeof x) {
            if (
                ((k = t.props),
                    (P = (a = x.contextType) && r[a.__c]),
                    (C = a ? (P ? P.props.value : a.__) : r),
                    _.__c
                        ? (b = (s = t.__c = _.__c).__ = s.__E)
                        : ("prototype" in x && x.prototype.render
                            ? (t.__c = s = new x(k, C))
                            : ((t.__c = s = new v(k, C)),
                                (s.constructor = x),
                                (s.render = D)),
                            P && P.sub(s),
                            (s.props = k),
                            s.state || (s.state = {}),
                            (s.context = C),
                            (s.__n = r),
                            (p = s.__d = !0),
                            (s.__h = [])),
                    null == s.__s && (s.__s = s.state),
                    null != x.getDerivedStateFromProps &&
                    (s.__s == s.state && (s.__s = f({}, s.__s)),
                        f(s.__s, x.getDerivedStateFromProps(k, s.__s))),
                    (h = s.props),
                    (y = s.state),
                    p)
            )
                null == x.getDerivedStateFromProps &&
                    null != s.componentWillMount &&
                    s.componentWillMount(),
                    null != s.componentDidMount && s.__h.push(s.componentDidMount);
            else {
                if (
                    (null == x.getDerivedStateFromProps &&
                        k !== h &&
                        null != s.componentWillReceiveProps &&
                        s.componentWillReceiveProps(k, C),
                        (!s.__e &&
                            null != s.shouldComponentUpdate &&
                            !1 === s.shouldComponentUpdate(k, s.__s, C)) ||
                        t.__v === _.__v)
                ) {
                    (s.props = k),
                        (s.state = s.__s),
                        t.__v !== _.__v && (s.__d = !1),
                        (s.__v = t),
                        (t.__e = _.__e),
                        (t.__k = _.__k),
                        t.__k.forEach(function (e) {
                            e && (e.__ = t);
                        }),
                        s.__h.length && u.push(s);
                    break e;
                }
                null != s.componentWillUpdate && s.componentWillUpdate(k, s.__s, C),
                    null != s.componentDidUpdate &&
                    s.__h.push(function () {
                        s.componentDidUpdate(h, y, m);
                    });
            }
            (s.context = C),
                (s.props = k),
                (s.state = s.__s),
                (a = n.__r) && a(t),
                (s.__d = !1),
                (s.__v = t),
                (s.__P = e),
                (a = s.render(s.props, s.state, s.context)),
                (s.state = s.__s),
                null != s.getChildContext && (r = f(f({}, r), s.getChildContext())),
                p ||
                null == s.getSnapshotBeforeUpdate ||
                (m = s.getSnapshotBeforeUpdate(h, y)),
                (S = null != a && a.type === d && null == a.key ? a.props.children : a),
                g(e, Array.isArray(S) ? S : [S], t, _, r, o, l, u, i, c),
                (s.base = t.__e),
                (t.__h = null),
                s.__h.length && u.push(s),
                b && (s.__E = s.__ = null),
                (s.__e = !1);
        } else
            null == l && t.__v === _.__v
                ? ((t.__k = _.__k), (t.__e = _.__e))
                : (t.__e = N(_.__e, t, _, r, o, l, u, c));
        (a = n.diffed) && a(t);
    } catch (e) {
        (t.__v = null),
            (c || null != l) &&
            ((t.__e = i), (t.__h = !!c), (l[l.indexOf(i)] = null)),
            n.__e(e, t, _);
    }
}
function A(e, t) {
    n.__c && n.__c(t, e),
        e.some(function (t) {
            try {
                (e = t.__h),
                    (t.__h = []),
                    e.some(function (e) {
                        e.call(t);
                    });
            } catch (e) {
                n.__e(e, t.__v);
            }
        });
}
function N(n, t, _, r, o, l, i, c) {
    var f,
        s,
        p,
        h = _.props,
        d = t.props,
        v = t.type,
        m = 0;
    if (("svg" === v && (o = !0), null != l))
        for (; m < l.length; m++)
            if ((f = l[m]) && (f === n || (v ? f.localName == v : 3 == f.nodeType))) {
                (n = f), (l[m] = null);
                break;
            }
    if (null == n) {
        if (null === v) return document.createTextNode(d);
        (n = o
            ? document.createElementNS("http://www.w3.org/2000/svg", v)
            : document.createElement(v, d.is && d)),
            (l = null),
            (c = !1);
    }
    if (null === v) h === d || (c && n.data === d) || (n.data = d);
    else {
        if (
            ((l = l && e.call(n.childNodes)),
                (s = (h = _.props || u).dangerouslySetInnerHTML),
                (p = d.dangerouslySetInnerHTML),
                !c)
        ) {
            if (null != l)
                for (h = {}, m = 0; m < n.attributes.length; m++)
                    h[n.attributes[m].name] = n.attributes[m].value;
            (p || s) &&
                ((p && ((s && p.__html == s.__html) || p.__html === n.innerHTML)) ||
                    (n.innerHTML = (p && p.__html) || ""));
        }
        if (
            ((function (e, n, t, _, r) {
                var o;
                for (o in t)
                    "children" === o || "key" === o || o in n || H(e, o, null, t[o], _);
                for (o in n)
                    (r && "function" != typeof n[o]) ||
                        "children" === o ||
                        "key" === o ||
                        "value" === o ||
                        "checked" === o ||
                        t[o] === n[o] ||
                        H(e, o, n[o], t[o], _);
            })(n, d, h, o, c),
                p)
        )
            t.__k = [];
        else if (
            ((m = t.props.children),
                g(
                    n,
                    Array.isArray(m) ? m : [m],
                    t,
                    _,
                    r,
                    o && "foreignObject" !== v,
                    l,
                    i,
                    l ? l[0] : _.__k && y(_, 0),
                    c
                ),
                null != l)
        )
            for (m = l.length; m--;) null != l[m] && a(l[m]);
        c ||
            ("value" in d &&
                void 0 !== (m = d.value) &&
                (m !== n.value || ("progress" === v && !m)) &&
                H(n, "value", m, h.value, !1),
                "checked" in d &&
                void 0 !== (m = d.checked) &&
                m !== n.checked &&
                H(n, "checked", m, h.checked, !1));
    }
    return n;
}
function T(e, t, _) {
    try {
        "function" == typeof e ? e(t) : (e.current = t);
    } catch (e) {
        n.__e(e, _);
    }
}
function O(e, t, _) {
    var r, o;
    if (
        (n.unmount && n.unmount(e),
            (r = e.ref) && ((r.current && r.current !== e.__e) || T(r, null, t)),
            null != (r = e.__c))
    ) {
        if (r.componentWillUnmount)
            try {
                r.componentWillUnmount();
            } catch (e) {
                n.__e(e, t);
            }
        r.base = r.__P = null;
    }
    if ((r = e.__k))
        for (o = 0; o < r.length; o++)
            r[o] && O(r[o], t, "function" != typeof e.type);
    _ || null == e.__e || a(e.__e), (e.__e = e.__d = void 0);
}
function D(e, n, t) {
    return this.constructor(e, t);
}
function R(t, _, r) {
    var o, l, i;
    n.__ && n.__(t, _),
        (l = (o = "function" == typeof r) ? null : (r && r.__k) || _.__k),
        (i = []),
        U(
            _,
            (t = ((!o && r) || _).__k = s(d, null, [t])),
            l || u,
            u,
            void 0 !== _.ownerSVGElement,
            !o && r ? [r] : l ? null : _.firstChild ? e.call(_.childNodes) : null,
            i,
            !o && r ? r : l ? l.__e : _.firstChild,
            o
        ),
        A(i, t);
}
function W(e, n) {
    R(e, n, W);
}
function F(n, t, _) {
    var r,
        o,
        l,
        u = f({}, n.props);
    for (l in t)
        "key" == l ? (r = t[l]) : "ref" == l ? (o = t[l]) : (u[l] = t[l]);
    return (
        arguments.length > 2 &&
        (u.children = arguments.length > 3 ? e.call(arguments, 2) : _),
        p(n.type, u, r || n.key, o || n.ref, null)
    );
}
function M(e, n) {
    var t = {
        __c: (n = "__cC" + l++),
        __: e,
        Consumer: function (e, n) {
            return e.children(n);
        },
        Provider: function (e) {
            var t, _;
            return (
                this.getChildContext ||
                ((t = []),
                    ((_ = {})[n] = this),
                    (this.getChildContext = function () {
                        return _;
                    }),
                    (this.shouldComponentUpdate = function (e) {
                        this.props.value !== e.value && t.some(b);
                    }),
                    (this.sub = function (e) {
                        t.push(e);
                        var n = e.componentWillUnmount;
                        e.componentWillUnmount = function () {
                            t.splice(t.indexOf(e), 1), n && n.call(e);
                        };
                    })),
                e.children
            );
        },
    };
    return (t.Provider.__ = t.Consumer.contextType = t);
}
(e = i.slice),
    (n = {
        __e: function (e, n) {
            for (var t, _, r; (n = n.__);)
                if ((t = n.__c) && !t.__)
                    try {
                        if (
                            ((_ = t.constructor) &&
                                null != _.getDerivedStateFromError &&
                                (t.setState(_.getDerivedStateFromError(e)), (r = t.__d)),
                                null != t.componentDidCatch &&
                                (t.componentDidCatch(e), (r = t.__d)),
                                r)
                        )
                            return (t.__E = t);
                    } catch (n) {
                        e = n;
                    }
            throw e;
        },
    }),
    (t = 0),
    (v.prototype.setState = function (e, n) {
        var t;
        (t =
            null != this.__s && this.__s !== this.state
                ? this.__s
                : (this.__s = f({}, this.state))),
            "function" == typeof e && (e = e(f({}, t), this.props)),
            e && f(t, e),
            null != e && this.__v && (n && this.__h.push(n), b(this));
    }),
    (v.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), b(this));
    }),
    (v.prototype.render = d),
    (_ = []),
    (r =
        "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
    (k.__r = 0),
    (l = 0);
var L,
    $,
    V,
    B = 0,
    j = [],
    I = n.__b,
    q = n.__r,
    z = n.diffed,
    G = n.__c,
    Z = n.unmount;
function J(e, t) {
    n.__h && n.__h($, e, B || t), (B = 0);
    var _ = $.__H || ($.__H = { __: [], __h: [] });
    return e >= _.__.length && _.__.push({}), _.__[e];
}
function K(e) {
    return (
        (B = 1),
        (function (e, n, t) {
            var _ = J(L++, 2);
            return (
                (_.t = e),
                _.__c ||
                ((_.__ = [
                    ie(void 0, n),
                    function (e) {
                        var n = _.t(_.__[0], e);
                        _.__[0] !== n && ((_.__ = [n, _.__[1]]), _.__c.setState({}));
                    },
                ]),
                    (_.__c = $)),
                _.__
            );
        })(ie, e)
    );
}
function Q(e, t) {
    var _ = J(L++, 3);
    !n.__s && ue(_.__H, t) && ((_.__ = e), (_.__H = t), $.__H.__h.push(_));
}
function X(e, t) {
    var _ = J(L++, 4);
    !n.__s && ue(_.__H, t) && ((_.__ = e), (_.__H = t), $.__h.push(_));
}
function Y(e) {
    return (
        (B = 5),
        ee(function () {
            return { current: e };
        }, [])
    );
}
function ee(e, n) {
    var t = J(L++, 7);
    return ue(t.__H, n) && ((t.__ = e()), (t.__H = n), (t.__h = e)), t.__;
}
function ne(e, n) {
    return (
        (B = 8),
        ee(function () {
            return e;
        }, n)
    );
}
function te(e) {
    var n = $.context[e.__c],
        t = J(L++, 9);
    return (
        (t.c = e),
        n ? (null == t.__ && ((t.__ = !0), n.sub($)), n.props.value) : e.__
    );
}
function _e() {
    j.forEach(function (e) {
        if (e.__P)
            try {
                e.__H.__h.forEach(oe), e.__H.__h.forEach(le), (e.__H.__h = []);
            } catch (t) {
                (e.__H.__h = []), n.__e(t, e.__v);
            }
    }),
        (j = []);
}
(n.__b = function (e) {
    ($ = null), I && I(e);
}),
    (n.__r = function (e) {
        q && q(e), (L = 0);
        var n = ($ = e.__c).__H;
        n && (n.__h.forEach(oe), n.__h.forEach(le), (n.__h = []));
    }),
    (n.diffed = function (e) {
        z && z(e);
        var t = e.__c;
        t &&
            t.__H &&
            t.__H.__h.length &&
            ((1 !== j.push(t) && V === n.requestAnimationFrame) ||
                (
                    (V = n.requestAnimationFrame) ||
                    function (e) {
                        var n,
                            t = function () {
                                clearTimeout(_), re && cancelAnimationFrame(n), setTimeout(e);
                            },
                            _ = setTimeout(t, 100);
                        re && (n = requestAnimationFrame(t));
                    }
                )(_e)),
            ($ = void 0);
    }),
    (n.__c = function (e, t) {
        t.some(function (e) {
            try {
                e.__h.forEach(oe),
                    (e.__h = e.__h.filter(function (e) {
                        return !e.__ || le(e);
                    }));
            } catch (_) {
                t.some(function (e) {
                    e.__h && (e.__h = []);
                }),
                    (t = []),
                    n.__e(_, e.__v);
            }
        }),
            G && G(e, t);
    }),
    (n.unmount = function (e) {
        Z && Z(e);
        var t = e.__c;
        if (t && t.__H)
            try {
                t.__H.__.forEach(oe);
            } catch (e) {
                n.__e(e, t.__v);
            }
    });
var re = "function" == typeof requestAnimationFrame;
function oe(e) {
    var n = $;
    "function" == typeof e.__c && e.__c(), ($ = n);
}
function le(e) {
    var n = $;
    (e.__c = e.__()), ($ = n);
}
function ue(e, n) {
    return (
        !e ||
        e.length !== n.length ||
        n.some(function (n, t) {
            return n !== e[t];
        })
    );
}
function ie(e, n) {
    return "function" == typeof n ? n(e) : n;
}
var ce = 0;
function fe(e, t, _, r, o) {
    var l,
        u,
        i = {};
    for (u in t) "ref" == u ? (l = t[u]) : (i[u] = t[u]);
    var c = {
        type: e,
        props: i,
        key: _,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --ce,
        __source: r,
        __self: o,
    };
    if ("function" == typeof e && (l = e.defaultProps))
        for (u in l) void 0 === i[u] && (i[u] = l[u]);
    return n.vnode && n.vnode(c), c;
}
function ae(e, n) {
    for (var t in n) e[t] = n[t];
    return e;
}
function se(e, n) {
    for (var t in e) if ("__source" !== t && !(t in n)) return !0;
    for (var _ in n) if ("__source" !== _ && e[_] !== n[_]) return !0;
    return !1;
}
function pe(e) {
    this.props = e;
}
function he(e, n) {
    function t(e) {
        console.log("in `g` function.")
        console.log(this.props)
        var t = this.props.ref,
            _ = t == e.ref;
        return (
            !_ && t && (t.call ? t(null) : (t.current = null)),
            n ? !n(this.props, e) || !_ : se(this.props, e)
        );
    }
    function _(n) {
        return (this.shouldComponentUpdate = t), s(e, n);
    }
    return (
        (_.displayName = "Memo(" + (e.displayName || e.name) + ")"),
        (_.prototype.isReactComponent = !0),
        (_.__f = !0),
        _
    );
}
((pe.prototype = new v()).isPureReactComponent = !0),
    (pe.prototype.shouldComponentUpdate = function (e, n) {
        return se(this.props, e) || se(this.state, n);
    });
var de = n.__b;
n.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
        de && de(e);
};
var ve =
    ("undefined" != typeof Symbol &&
        Symbol.for &&
        Symbol.for("react.forward_ref")) ||
    3911;
function ye(e) {
    function n(n, t) {
        var _ = ae({}, n);
        return (
            delete _.ref,
            e(
                _,
                (t = n.ref || t) && ("object" != typeof t || "current" in t) ? t : null
            )
        );
    }
    return (
        (n.$$typeof = ve),
        (n.render = n),
        (n.prototype.isReactComponent = n.__f = !0),
        (n.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
        n
    );
}
var me = n.__e;
n.__e = function (e, n, t) {
    if (e.then)
        for (var _, r = n; (r = r.__);)
            if ((_ = r.__c) && _.__c)
                return null == n.__e && ((n.__e = t.__e), (n.__k = t.__k)), _.__c(e, n);
    me(e, n, t);
};
var be = n.unmount;
function ke() {
    (this.__u = 0), (this.t = null), (this.__b = null);
}
function ge(e) {
    var n = e.__.__c;
    return n && n.__e && n.__e(e);
}
function Pe() {
    (this.u = null), (this.o = null);
}
(n.unmount = function (e) {
    var n = e.__c;
    n && n.__R && n.__R(), n && !0 === e.__h && (e.type = null), be && be(e);
}),
    ((ke.prototype = new v()).__c = function (e, n) {
        var t = n.__c,
            _ = this;
        null == _.t && (_.t = []), _.t.push(t);
        var r = ge(_.__v),
            o = !1,
            l = function () {
                o || ((o = !0), (t.__R = null), r ? r(u) : u());
            };
        t.__R = l;
        var u = function () {
            if (!--_.__u) {
                if (_.state.__e) {
                    var e = _.state.__e;
                    _.__v.__k[0] = (function e(n, t, _) {
                        return (
                            n &&
                            ((n.__v = null),
                                (n.__k =
                                    n.__k &&
                                    n.__k.map(function (n) {
                                        return e(n, t, _);
                                    })),
                                n.__c &&
                                n.__c.__P === t &&
                                (n.__e && _.insertBefore(n.__e, n.__d),
                                    (n.__c.__e = !0),
                                    (n.__c.__P = _))),
                            n
                        );
                    })(e, e.__c.__P, e.__c.__O);
                }
                var n;
                for (_.setState({ __e: (_.__b = null) }); (n = _.t.pop());)
                    n.forceUpdate();
            }
        },
            i = !0 === n.__h;
        _.__u++ || i || _.setState({ __e: (_.__b = _.__v.__k[0]) }), e.then(l, l);
    }),
    (ke.prototype.componentWillUnmount = function () {
        this.t = [];
    }),
    (ke.prototype.render = function (e, n) {
        if (this.__b) {
            if (this.__v.__k) {
                var t = document.createElement("div"),
                    _ = this.__v.__k[0].__c;
                this.__v.__k[0] = (function e(n, t, _) {
                    return (
                        n &&
                        (n.__c &&
                            n.__c.__H &&
                            (n.__c.__H.__.forEach(function (e) {
                                "function" == typeof e.__c && e.__c();
                            }),
                                (n.__c.__H = null)),
                            null != (n = ae({}, n)).__c &&
                            (n.__c.__P === _ && (n.__c.__P = t), (n.__c = null)),
                            (n.__k =
                                n.__k &&
                                n.__k.map(function (n) {
                                    return e(n, t, _);
                                }))),
                        n
                    );
                })(this.__b, t, (_.__O = _.__P));
            }
            this.__b = null;
        }
        var r = n.__e && s(d, null, e.fallback);
        return r && (r.__h = null), [s(d, null, n.__e ? null : e.children), r];
    });
var Ce = function (e, n, t) {
    if (
        (++t[1] === t[0] && e.o.delete(n),
            e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
    )
        for (t = e.u; t;) {
            for (; t.length > 3;) t.pop()();
            if (t[1] < t[0]) break;
            e.u = t = t[2];
        }
};
((Pe.prototype = new v()).__e = function (e) {
    var n = this,
        t = ge(n.__v),
        _ = n.o.get(e);
    return (
        _[0]++,
        function (r) {
            var o = function () {
                n.props.revealOrder ? (_.push(r), Ce(n, e, _)) : r();
            };
            t ? t(o) : o();
        }
    );
}),
    (Pe.prototype.render = function (e) {
        (this.u = null), (this.o = new Map());
        var n = C(e.children);
        e.revealOrder && "b" === e.revealOrder[0] && n.reverse();
        for (var t = n.length; t--;) this.o.set(n[t], (this.u = [1, 0, this.u]));
        return e.children;
    }),
    (Pe.prototype.componentDidUpdate = Pe.prototype.componentDidMount =
        function () {
            var e = this;
            this.o.forEach(function (n, t) {
                Ce(e, t, n);
            });
        });
var Se =
    ("undefined" != typeof Symbol &&
        Symbol.for &&
        Symbol.for("react.element")) ||
    60103,
    xe =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    He = function (e) {
        return (
            "undefined" != typeof Symbol && "symbol" == typeof Symbol()
                ? /fil|che|rad/i
                : /fil|che|ra/i
        ).test(e);
    };
(v.prototype.isReactComponent = {}),
    [
        "componentWillMount",
        "componentWillReceiveProps",
        "componentWillUpdate",
    ].forEach(function (e) {
        Object.defineProperty(v.prototype, e, {
            configurable: !0,
            get: function () {
                return this["UNSAFE_" + e];
            },
            set: function (n) {
                Object.defineProperty(this, e, {
                    configurable: !0,
                    writable: !0,
                    value: n,
                });
            },
        });
    });
var Ee = n.event;
function we() { }
function Ue() {
    return this.cancelBubble;
}
function Ae() {
    return this.defaultPrevented;
}
n.event = function (e) {
    return (
        Ee && (e = Ee(e)),
        (e.persist = we),
        (e.isPropagationStopped = Ue),
        (e.isDefaultPrevented = Ae),
        (e.nativeEvent = e)
    );
};
var Ne = {
    configurable: !0,
    get: function () {
        return this.class;
    },
},
    Te = n.vnode;
n.vnode = function (e) {
    var n = e.type,
        t = e.props,
        _ = t;
    if ("string" == typeof n) {
        for (var r in ((_ = {}), t)) {
            var o = t[r];
            ("value" === r && "defaultValue" in t && null == o) ||
                ("defaultValue" === r && "value" in t && null == t.value
                    ? (r = "value")
                    : "download" === r && !0 === o
                        ? (o = "")
                        : /ondoubleclick/i.test(r)
                            ? (r = "ondblclick")
                            : /^onchange(textarea|input)/i.test(r + n) && !He(t.type)
                                ? (r = "oninput")
                                : /^on(Ani|Tra|Tou|BeforeInp)/.test(r)
                                    ? (r = r.toLowerCase())
                                    : xe.test(r)
                                        ? (r = r.replace(/[A-Z0-9]/, "-$&").toLowerCase())
                                        : null === o && (o = void 0),
                    (_[r] = o));
        }
        "select" == n &&
            _.multiple &&
            Array.isArray(_.value) &&
            (_.value = C(t.children).forEach(function (e) {
                e.props.selected = -1 != _.value.indexOf(e.props.value);
            })),
            "select" == n &&
            null != _.defaultValue &&
            (_.value = C(t.children).forEach(function (e) {
                e.props.selected = _.multiple
                    ? -1 != _.defaultValue.indexOf(e.props.value)
                    : _.defaultValue == e.props.value;
            })),
            (e.props = _);
    }
    n &&
        t.class != t.className &&
        ((Ne.enumerable = "className" in t),
            null != t.className && (_.class = t.className),
            Object.defineProperty(_, "className", Ne)),
        (e.$$typeof = Se),
        Te && Te(e);
};
var Oe = n.__r;
n.__r = function (e) {
    Oe && Oe(e);
};
export {
    C as A,
    F as B,
    M as D,
    te as F,
    v as _,
    d as a,
    ne as b,
    ee as d,
    fe as e,
    he as g,
    X as h,
    K as l,
    h as p,
    W as q,
    Y as s,
    s as v,
    ye as x,
    Q as y,
};
//# sourceMappingURL=preact.9cb2fa7a.js.map
