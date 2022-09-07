import {
    B as t,
    q as e,
    p as n,
    F as i,
    s as r,
    h as s,
    T as a,
    d as o,
    x as l,
    a as u,
    b as c,
    e as d,
    V as h,
    c as p,
    U as f,
    E as g,
    f as m,
    _ as $,
    S as _
}
    from "./preact.272910a2.js";
async function y() {
    if (window.AudioContext = window.AudioContext || window.webkitAudioContext, "object" == typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__)
        for (let [t, e] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__))
            window.__REACT_DEVTOOLS_GLOBAL_HOOK__[t] = "function" == typeof e ? () => { }
                : null;
    window.PASSIVE = !1;
    try {
        let n = Object.defineProperty({}, "passive", {
            get() {
                window.PASSIVE = {
                    passive: !0
                }
            }
        });
        window.addEventListener("test", null, n)
    } catch (i) { }
    if ("function" != typeof SVGElement.prototype.focus && (SVGElement.prototype.focus = () => { }), "function" != typeof CSSRuleList.prototype[Symbol.iterator] && (CSSRuleList.prototype[Symbol.iterator] = [][Symbol.iterator]), "undefined" == typeof console) {
        let r = () => { };
        console = {
            error: r,
            info: r,
            log: r,
            warn: r
        }
    }
}
let v = {}, b = {}, w = "Cdy1hg", E = "Cdylb", k = "Cdy9a", S = "Cdyrh", x = "Cdyrh Cdy1j2", T = "Cdy21", L = "Cdy1xh", N = "Cdyft", I = "Cdy17e", A = "Cdy18g", C = "Cdy18g Cdy2gp", P = "Cdywb", O = "Cdy2g1", R = "Cdy1hg Cdy160", D = "Cdy1hg Cdy3h", M = "Cdy1hg Cdy308", B = "Cdy1hg Cdy308 Cdy2al", F = "Cdy1hg Cdy29", H = {
    app: "Cdy1hg",
    chordsMinimalism: "Cdylb",
    chords: "Cdy9a",
    tablature: "Cdyrh",
    tablatureFullscreen: "Cdyrh Cdy1j2",
    pane: "Cdy21",
    debug: "Cdy1xh",
    tos: "Cdyft",
    popupOverlay: "Cdy17e",
    footer: "Cdy18g",
    footerWithAds: "Cdy18g Cdy2gp",
    copyright: "Cdywb",
    rightSidebar: "Cdy2g1",
    appFree: "Cdy1hg Cdy160",
    appPlus: "Cdy1hg Cdy3h",
    appChords: "Cdy1hg Cdy308",
    appChordsMinimalism: "Cdy1hg Cdy308 Cdy2al",
    appTags: "Cdy1hg Cdy29"
}, W = !0, V = void 0, U = "b4921fc9", X = 27;
var G, z, j, q, Y, K, J, Q, Z = t();
let tt = r;
function te() {
    for (var t = arguments.length, r = Array(t), s = 0; s < t; s++)
        r[s] = arguments[s];
    let a = e(Z),
        o = n({});
    return tt(() => a.on("@changed", (t, e) => {
        r.some(t => t in e) && o[1]({})
    }), []),
        i(() => {
            let t = a.get(),
                e = {
                    dispatch: a.dispatch,
                    store: a
                };
            for (let n of r)
                e[n] = t[n];
            return e
        }, [o[0]])
}
function tn(t) {
    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
        n[i - 1] = arguments[i];
    return function (e) {
        return s(t, {
            ...e,
            ...te.apply(null, n)
        })
    }
}
let ti = {};
function tr(t, e) {
    t.onload = function () {
        this.onerror = this.onload = null,
            e(null, t)
    },
        t.onerror = function () {
            this.onerror = this.onload = null,
                e(Error("Failed to load " + this.src), t)
        }
}
function ts(t, e) {
    t.onreadystatechange = function () {
        ("complete" === this.readyState || "loaded" === this.readyState) && (this.onreadystatechange = null, e(null, t))
    }
}
function ta(t, e) {
    let n = document.head || document.getElementsByTagName("head")[0],
        i = document.createElement("script");
    i.async = !0,
        i.defer = !0,
        i.src = t;
    let r = "onload" in i ? tr : ts;
    r(i, e),
        i.onload || tr(i, e),
        n.appendChild(i)
}
function to(t, e) {
    return ti[e] || (ti[e] = new Promise((n, i) => {
        ta(t, t => {
            window[e] = !t,
                t ? i(t) : n()
        })
    })),
        ti[e]
}
let tl = ["signin", "signup", "subscribePlus", "updateCard", "help",];
function tu(t, e) {
    document.body && (t && tl.includes(e) ? (document.body.classList.add("grecaptcha-visible"), tc()) : document.body.classList.remove("grecaptcha-visible"))
}
function tc() {
    return to(`https://www.google.com/recaptcha/api.js?render=${window.__RECAPTCHA_KEY__}`, "__LOADED_RECAPTCHA__")
}
async function td(t) {
    try {
        return window.grecaptcha || await tc(),
            await window.grecaptcha.execute(window.__RECAPTCHA_KEY__, {
                action: t
            })
    } catch (e) { }
}
let th = t => !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
function tp(t) {
    let n = e(Z),
        i = t.href || t.to,
        r = t.onClick,
        o = a(t => {
            th(t) || (t.preventDefault(), r && r(), n.dispatch("navigate", i))
        }, [i, r]);
    return s("a", {
        ...t,
        href: i,
        onClick: o,
        to: null
    })
}
let tf = "x012m", tg = "x0ln", tm = "x01yo", t$ = "x02wd", t_ = "x02du", ty = "x01qb", tv = "x02zn", tb = "x02vp", t0 = "x02e0", tw = "x0tr", tE = "x02zn x035p", tk = "x026k", tS = "x02ar", tx = "x0mp", tT = "x02fd", t3 = "x0198", t1 = "x0tr x01vd", tL = {
    pane: "x012m",
    divider: "x0ln",
    dividerEdge: "x01yo",
    dividerSmall: "x02wd",
    float: "x02du",
    icon: "x01qb",
    item: "x02zn",
    logo: "x02vp",
    text: "x02e0",
    stroke: "x0tr",
    itemActive: "x02zn x035p",
    logoText: "x026k",
    overlay: "x02ar",
    jobs: "x0mp",
    new: "x02fd",
    mainpanel: "x0198",
    strokeBandmates: "x0tr x01vd"
}, tN = {
    search: ["search"],
    signin: ["signup", "forgotpassword"],
    account: ["changepassword", "cancelPlus", "deactivate", "updateCard"],
    plus: ["subscribePlus"]
    };

function download() {
    var stateText = document.getElementById("state");
    var myState = JSON.parse(stateText.innerHTML);
    var revision = myState.meta.current.revisionId;

    var requestUrl = "https://www.songsterr.com/a/ra/player/songrevision/" + revision + ".json";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", requestUrl, false);
    xhttp.send();

    var newData = JSON.parse(xhttp.responseText);
    var tabUrl = newData.tab.guitarProTab.attachmentUrl;
    window.open(tabUrl, '_blank').focus();
    alert("Make sure your browser didn't prevent opening a new tab");
}

function tI(t) {
    // not sure where's a good place to do all of this. At least this method is called.
    // ... MULTIPLE times ... Just make sure the element we want to create doesn't exist
    // Not beautiful, but a quick and super dirty hack
    if (document.getElementById("downloadTab")) {
        // I'm so lazy and JavaScript just sucks
        document.getElementById("downloadTab").remove();
    }
    window.downloadTab = download;

    console.log("Better debug me insteadf");
    var submitButton = document.getElementById("menu-submit");
    var svg = submitButton.getElementsByClassName("x01qb")[0];

    var downloadSvg = svg.cloneNode(true);
    downloadSvg.setAttribute("transform", "rotate(180)");

    var text = document.createElement("div");
    text.setAttribute("class", "x02e0");
    text.innerHTML = "Guitar Pro Tab";

    var newButton = document.createElement("div");
    newButton.setAttribute("onClick", "javascript: window.downloadTab();");
    newButton.setAttribute("id", "downloadTab");
    newButton.appendChild(downloadSvg);
    newButton.appendChild(text);

    submitButton.after(newButton);
    

    let {
        id: n,
        route: i,
        url: r,
        songUrl: o,
        children: l,
        linkClick: u
    } = t,
        c = e(Z),
        d = n === i.page || n in tN && -1 !== tN[n].indexOf(i.page),
        h = n === i.page ? o : r,
        p = a(t => {
            t.preventDefault(),
                u && u(d),
                c.dispatch("navigate", h)
        }, [h]);
    return s("a", {
        href: h,
        onClick: p,
        id: `menu-${n}`,
        class: d ? tL.itemActive : tL.item
    }, l)
}
let t2 = /(\/|-)((drum|bass)-)?(tab|chords)-s(\d+)(t(\d+))?(\/r(\d+))?/i, t8 = {
    page: "",
    isPanel: !1
}, tA = [["/", {
    page: "search",
    isPanel: !0
}
], ["/a/wa/favorites", {
    page: "favorites",
    isPanel: !0
}
], ["/a/wa/plus", {
    page: "plus",
    isPanel: !0
}
], ["/a/wa/privacy", {
    page: "privacy",
    isPanel: !0
}
], ["/a/wa/terms", {
    page: "terms",
    isPanel: !0
}
], ["/a/wa/do-not-sell-my-personal-information", {
    page: "dnsmpd",
    isPanel: !0
}
], ["/a/wa/submit", {
    page: "submit",
    isPanel: !0
}
], ["/a/wa/about", {
    page: "about",
    isPanel: !0
}
], ["/a/wa/jobs", {
    page: "jobs",
    isPanel: !0
}
], ["/a/wa/help", {
    page: "help",
    isPanel: !0
}
], ["/a/wa/signin", {
    page: "signin",
    isPanel: !0
}
], ["/a/wa/signup", {
    page: "signup",
    isPanel: !0
}
], ["/a/wa/recoverpassword", {
    page: "recoverpassword",
    isPanel: !0,
    isRecover: !0
}
], ["/a/wa/account/password", {
    page: "changepassword",
    isPanel: !0
}
], ["/a/wa/forgotpassword", {
    page: "forgotpassword",
    isPanel: !0
}
], ["/a/wa/account", {
    page: "account",
    isPanel: !0
}
], ["/a/wa/account/subscription", {
    page: "cancelPlus",
    isPanel: !0
}
], ["/a/wa/account/deactivate", {
    page: "deactivate",
    isPanel: !0
}
], ["/a/wa/account/card", {
    page: "updateCard",
    isPanel: !0
}
], ["/a/wa/plus/payment", {
    page: "subscribePlus",
    isPanel: !0
}
], ["/a/wa/plus/coupon", {
    page: "coupon",
    isPanel: !0
}
], ["/a/wa/howtoreadtab", {
    page: "howToReadTab",
    isPanel: !0
}
], ["/tags", {
    page: "tags",
    isPanel: !1
}
], ["/tags/", {
    page: "tags",
    isPanel: !1
}
], ["/a/wsa/tags", {
    page: "tags",
    isPanel: !1
}
], ["/a/wsa/tags/", {
    page: "tags",
    isPanel: !1
}
], [t2, t => {
    let [, , , e, n, i, , r, , s] = t;
    return "tab" === n ? {
        partInstrument: e || null,
        page: n,
        songId: +i,
        partId: r ? +r : null,
        revisionId: s ? +s : null,
        isPanel: !1
    }
        : {
            page: n,
            songId: +i,
            chordsRevisionId: s ? +s : null,
            isPanel: !1
        }
}
], [/(\/|-|undefined)tabs-a(\d+)/i, t => ({
    page: "artist",
    artistId: t[2] ? +t[2] : null,
    isPanel: !0
})], [/\/a\/wsa\/(.*)-tabs-t(\d+)/i, t => ({
    page: "tag",
    isPanel: !1,
    name: t[1].replace(/-/, " ")
})], [/tags\/(.*)/i, t => ({
    page: "tag",
    isPanel: !1,
    name: t[1]
})],];
function t7(t) {
    for (let [e, n] of tA)
        if (e instanceof RegExp) {
            let i = t.match(e);
            if (i) {
                if ("function" == typeof n)
                    return n(i);
                return n
            }
        } else if (t === e) {
            if ("function" == typeof n)
                return n.apply(null);
            return n
        }
    return t8
}
function tC(t) {
    let e = {};
    return t.split("&").map(t => t.split("=").map(decodeURIComponent)).forEach(t => {
        e[t[0]] = t[1] || ""
    }),
        e
}
function tP(t) {
    for (let e in t)
        if (Object.prototype.hasOwnProperty.call(t, e))
            return !1;
    return !0
}
function t6(t, e, n) {
    if (n.user.isLoggedIn) {
        if ("/a/wa/signin" === t || "/a/wa/signup" === t)
            return "/a/wa/account";
        if (n.user.hasPlus) {
            if ("/a/wa/account/deactivate" === t || t.startsWith("/a/wa/plus"))
                return "/a/wa/account"
        } else if ("/a/wa/account/card" === t || "/a/wa/account/subscription" === t)
            return "/a/wa/account"
    } else {
        if (t.startsWith("/a/wa/account"))
            return "/a/wa/signin?next=account";
        if ("/a/wa/plus/payment" === t)
            return "/a/wa/signin?next=subscribe";
        if (t.startsWith("/a/wa/plus/coupon")) {
            let i = new URLSearchParams(e);
            return i.set("next", "coupon"),
                `/a/wa/signin?${i}`
        }
    }
}
function tO(t, e, n) {
    let i = t ? t.toLowerCase() : "/";
    return t6(i, e, n)
}
function t9(t) {
    let e = t.page;
    return "tab" === e || "chords" === e || "tag" === e || "tags" === e
}
function t4(t, e, n, i) {
    let r = {
        route: t7(t.toLowerCase())
    };
    e && e.length ? r.query = tC(e) : tP(n.query) || (r.query = {}),
        t9(r.route) && (r.routeContent = r.route, r.query ? r.queryContent = r.query : tP(n.queryContent) || (r.queryContent = {})),
        i.dispatch("route/change", r)
}
let tR = t => {
    t.on("navigate", (e, n) => {
        let [i, r] = n.split("#")[0].split("?"),
            s = tO(i, r, e);
        return s && ([i, r] = s.split("?"), n = s),
            history.pushState(null, "", n),
            t4(i, r, e, t)
    }),
        t.on("popstate", (e, n) => {
            let {
                pathname: i,
                search: r
            } = n,
                s = r && r.substring(1),
                a = tO(i, s, e);
            if (a) {
                console.log("Found redirect to", a),
                    history.replaceState(null, "", a),
                    t.dispatch("navigate", a);
                return
            }
            return t4(i, s, e, t)
        }),
        t.on("route/change", (t, e) => e),
        window.addEventListener("popstate", () => {
            t.dispatch("popstate", {
                pathname: location.pathname,
                search: location.search
            })
        })
};
function tD(t) {
    let e = Object.keys(t).filter(e => t[e]).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&");
    return e.length ? `?${e}` : ""
}
let tM = "ALL INSTRUMENTS", tB = "GUITAR", t5 = "BASS", tF = "DRUMS", tH = "Any Difficulty", tW = "Beginner", tV = "Intermediate", tU = "Advanced", tX = "ALL TUNINGS";
function tG(t) {
    let e = tC(document.location.search.substring(1));
    t.length ? e.pattern = t : delete e.pattern,
        history.replaceState(null, "", `${document.location.pathname || "/"}${tD(e)}`)
}
function tz(t) {
    let e = tC(document.location.search.substring(1));
    t.length && t !== tM ? e.inst = tY(t) : delete e.inst,
        history.replaceState(null, "", `${document.location.pathname || "/"}${tD(e)}`)
}
function tj(t, e, n) {
    let i = n;
    return e.length && e !== tM && (i = {
        pattern: n.pattern,
        inst: tY(e)
    }),
        `${t}${tD(i)}`
}
function tq(t) {
    switch (t) {
        case "guitar":
            return tB;
        case "drum":
            return tF;
        case "bass":
            return t5;
        default:
            return tM
    }
}
function tY(t) {
    switch (t) {
        case tB:
            return "guitar";
        case tF:
            return "drum";
        case t5:
            return "bass";
        default:
            return ""
    }
}
function tK(t, e) {
    return tD({
        pattern: t || void 0,
        inst: e && e.instrument !== tM && e.instrument ? tY(e.instrument) : void 0
    })
}
function tJ(t) {
    let {
        songs: e
    } = te("songs");
    return s(tI, {
        ...t,
        url: `${t.url}${tK(e.pattern, e.filters)}`
    })
}
function tQ(t) {
    let {
        songs: e,
        dispatch: n
    } = te("songs"),
        i = `${t.url}${tK(e.pattern, e.filters)}`,
        r = "search" === t.route.page ? t.songUrl : i,
        o = a(t => {
            t.preventDefault(),
                n("navigate", r)
        }, [r]);
    return s("a", {
        ...t,
        href: r,
        onClick: o,
        to: null
    })
}
function tZ(t) {
    let {
        favorites: e
    } = te("favorites");
    return s(tI, {
        ...t,
        url: `${t.url}${tK(e.pattern, e.filters)}`
    })
}
function et(t) {
    let {
        width: e,
        height: n,
        styles: {
            icon: i,
            stroke: r
        }
    } = t;
    return s("svg", {
        width: e || 18,
        height: n || 19,
        viewBox: "0 0 18 19",
        className: i
    }, s("path", {
        className: r,
        strokeWidth: 1.5,
        strokeLinecap: "round",
        d: "M10.76 13.12A6.51 6.51 0 0 1 .97 7.56a6.5 6.5 0 1 1 9.79 5.56Zm6.25 4.9-5.4-5.42"
    }))
}
let ee = "M14 21l-7.25 4.75c-.25.25-2 .5-1.5-1L8 16l-6.75-4.5c-.75-.5-2.5-2 0-2.25L10 8.5 12.75 1C13 0 15 0 15.25 1L18 8.5l8.75.75c2.5.25.75 1.75 0 2.25L20 16l2.75 8.75c.5 1.5-1.25 1.25-1.5 1L14 21z", en = `${ee}m0-2.25l6.75 4.75-3-8.25 7.25-4.5-8.5-.5L14 3l-2.5 7.25-8.5.5 7.25 4.5-3 8.25L14 18.75z`;
function ei(t) {
    let {
        width: e,
        height: n,
        viewbox: i,
        title: r = "Favorite",
        styles: {
            icon: a
        },
        id: o,
        state: l
    } = t,
        u = `title-${o || "favorite"}`;
    return s("svg", {
        width: e || 29,
        height: n || 27,
        viewBox: i || "0 0 29 27",
        className: a,
        "data-icon": l,
        id: o,
        "aria-labelledby": u
    }, s("title", {
        id: u
    }, r), s("path", {
        d: "fill" === l ? ee : en
    }))
}
let er = "M2 11a2 2 0 0 1 2-2h5v2h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3v-2h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-21a2 2 0 0 1-2-2z", es = "M14.5 17v-15.5m-5 5l5 -5l5 5";
function ea(t) {
    let {
        width: e,
        height: n,
        styles: {
            icon: i,
            stroke: r
        }
    } = t;
    return s("svg", {
        width: e || 29,
        height: n || 27,
        viewBox: "0 0 29 27",
        className: i
    }, s("path", {
        d: "M2 11a2 2 0 0 1 2-2h5v2h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3v-2h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-21a2 2 0 0 1-2-2z"
    }), s("path", {
        className: r,
        "stroke-width": 2,
        d: "M14.5 17v-15.5m-5 5l5 -5l5 5"
    }))
}
function eo(t) {
    let {
        width: e,
        height: n,
        styles: {
            icon: i
        }
    } = t;
    return s("svg", {
        width: e || 29,
        height: n || 27,
        viewBox: "0 0 1000 820",
        className: i,
        "aria-labelledby": "title-faq"
    }, s("title", {
        id: "title-faq"
    }, "Frequently Asked Questions"), s("path", {
        d: "M 74 109.4 C 74 109.4 89.9 75 109.4 75 L 890.6 75 C 910.1 75 925 89.9 925 109.4 L 925 594.3 C 925 613.8 910.1 625 890.6 625 L 640 625 C 585 625 530 700 500 733 C 470 700 415 625 360 625 L 109.4 625 C 89.9 625 74.1 613.8 74.1 594.3 L 75 109.4 L 74 109.4 Z M 109.4 0 C 49 0 0 49 0 109.4 L 0 594.3 C 0 654.7 49.7 700 110.1 700 L 356 700 C 390 700 451.2 814.8 500 814.8 C 548.8 814.8 610 700 644 700 L 890.4 700 C 950.8 700 1000 654.7 1000 594.3 L 1000 109.4 C 1000 49 951 0 890.6 0 L 109.4 0 Z M 821.5 443.8 L 851.5 474.5 L 819.1 507.1 L 785.1 472.8 C 767.8 483.8 747.8 487.1 727.5 487.1 C 657.8 487.1 610.5 437.1 610.5 363.1 C 610.5 290.1 661.5 237.8 732.5 237.8 C 800.5 237.8 850.1 289.8 850.1 360.5 C 850.1 395.1 839.5 426.8 821.5 443.8 Z M 752.5 374.1 L 772.5 394.8 C 776.8 385.8 777.5 372.5 777.5 362.1 C 777.5 319.8 760.8 296.5 730.8 296.5 C 701.1 296.5 683.8 320.8 683.8 362.8 C 683.8 402.8 701.8 429.8 728.8 429.8 C 734.1 429.8 737.1 429.1 741.5 426.8 L 720.1 406.1 L 752.5 374.1 Z M 368.9 244.1 L 185.2 244.1 L 185.2 481.5 L 257.9 481.5 L 257.9 396.1 L 353.5 396.1 L 353.5 340.1 L 257.9 340.1 L 257.9 303.8 L 368.9 303.8 L 368.9 244.1 Z M 513.9 244.1 L 441.9 244.1 L 354.3 481.5 L 427.9 481.5 L 439.6 447.8 L 515.9 447.8 L 527.6 481.5 L 601.3 481.5 L 513.9 244.1 Z M 499.9 396.8 L 455.3 396.8 C 463.3 372.8 474.3 336.5 478.3 320.1 C 478.3 320.1 495.6 383.1 499.9 396.8 Z"
    }))
}
function el(t) {
    let {
        width: e,
        height: n,
        styles: {
            icon: i
        }
    } = t;
    return s("svg", {
        width: e || 29,
        height: n || 27,
        viewBox: "0 0 29 27",
        className: i
    }, s("path", {
        d: "M16 12V4.5a1.5 1.5 0 0 0-3 0V12H5.5a1.5 1.5 0 0 0 0 3H13v7.5a1.5 1.5 0 0 0 3 0V15h7.5a1.5 1.5 0 0 0 0-3H16zm-5-2V3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v7h7a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-7v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-7H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7z"
    }))
}
let eu = "M1 9.5h11l-3-3m3 3-3 3M5.1 4.3V1.96c.05-.52.5-.86 1.02-.85l10.05-.01c.41.11.8.48.84.9l.01 14.98c.01.48-.4.9-.88.99l-10.02-.02c-.54.04-.98-.4-1.04-.95l.02-2.27";
function ec(t) {
    let {
        width: e,
        height: n,
        styles: {
            icon: i,
            stroke: r
        }
    } = t;
    return s("svg", {
        width: e || 18,
        height: n || 19,
        viewBox: "0 0 18 19",
        className: i,
        "aria-labelledby": "title-signin"
    }, s("title", {
        id: "title-signin"
    }, "Sign In"), s("path", {
        className: r,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: eu
    }))
}
function ed(t) {
    let {
        width: e,
        height: n,
        styles: {
            icon: i,
            stroke: r
        }
    } = t;
    return s("svg", {
        width: e || 19,
        height: n || 19,
        viewBox: "0 0 19 19",
        className: i,
        "aria-labelledby": "title-account"
    }, s("title", {
        id: "title-account"
    }, "Account"), s("ellipse", {
        className: r,
        cx: 9.73,
        cy: 5.8,
        rx: 3.76,
        ry: 4.7,
        strokeWidth: 1.5
    }), s("path", {
        className: r,
        strokeWidth: 1.5,
        d: "M18 15.56c0 2.12-3.8 2.4-8.5 2.4S1 17.67 1 15.55s3.8-4.1 8.5-4.1 8.5 1.98 8.5 4.1Z"
    }))
}
let eh = t(null), ep = "unmounted", ef = "exited", eg = "entering", em = "entered", e$ = "exiting";
function e_(t) {
    return t ? t.base || 1 === t.nodeType && t : null
}
class ey extends o {
    static contextType = eh;
    constructor(t, e) {
        super(t, e);
        let n = e,
            i = n && !n.isMounting ? t.enter : t.appear,
            r;
        this.appearStatus = null,
            t.in ? i ? (r = ef, this.appearStatus = eg) : r = em : r = t.unmountOnExit || t.mountOnEnter ? ep : ef,
            this.state = {
                status: r
            },
            this.nextCallback = null
    }
    static getDerivedStateFromProps(t, e) {
        let {
            in: n
        } = t;
        return n && e.status === ep ? {
            status: ef
        }
            : null
    }
    componentDidMount() {
        this.updateStatus(!0, this.appearStatus)
    }
    componentDidUpdate(t) {
        let e = null;
        if (t !== this.props) {
            let {
                status: n
            } = this.state;
            this.props.in ? n !== eg && n !== em && (e = eg) : (n === eg || n === em) && (e = e$)
        }
        this.updateStatus(!1, e)
    }
    componentWillUnmount() {
        this.cancelNextCallback()
    }
    getTimeouts() {
        let {
            timeout: t
        } = this.props,
            e,
            n,
            i;
        return e = n = i = t,
            null != t && "number" != typeof t && (e = t.exit, n = t.enter, i = t.appear), {
            exit: e,
            enter: n,
            appear: i
        }
    }
    updateStatus() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            e = arguments.length > 1 ? arguments[1] : void 0;
        if (null !== e) {
            this.cancelNextCallback();
            let n = e_(this);
            e === eg ? this.performEnter(n, t) : this.performExit(n)
        } else
            this.props.unmountOnExit && this.state.status === ef && this.setState({
                status: ep
            })
    }
    performEnter(t, e) {
        let {
            enter: n
        } = this.props,
            i = this.context ? this.context.isMounting : e,
            r = this.getTimeouts();
        if (!e && !n) {
            this.safeSetState({
                status: em
            }, () => {
                this.props.onEntered(t)
            });
            return
        }
        this.props.onEnter(t, i),
            this.safeSetState({
                status: eg
            }, () => {
                this.props.onEntering(t, i),
                    this.onTransitionEnd(t, r.enter, () => {
                        this.safeSetState({
                            status: em
                        }, () => {
                            this.props.onEntered(t, i)
                        })
                    })
            })
    }
    performExit(t) {
        let {
            exit: e
        } = this.props,
            n = this.getTimeouts();
        if (!e) {
            this.safeSetState({
                status: ef
            }, () => {
                this.props.onExited(t)
            });
            return
        }
        this.props.onExit(t),
            this.safeSetState({
                status: e$
            }, () => {
                this.props.onExiting(t),
                    this.onTransitionEnd(t, n.exit, () => {
                        this.safeSetState({
                            status: ef
                        }, () => {
                            this.props.onExited(t)
                        })
                    })
            })
    }
    cancelNextCallback() {
        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
    }
    safeSetState(t, e) {
        e = this.setNextCallback(e),
            this.setState(t, e)
    }
    setNextCallback(t) {
        let e = !0;
        return this.nextCallback = n => {
            e && (e = !1, this.nextCallback = null, t(n))
        },
            this.nextCallback.cancel = () => {
                e = !1
            },
            this.nextCallback
    }
    onTransitionEnd(t, e, n) {
        this.setNextCallback(n),
            t ? (this.props.addEndListener && this.props.addEndListener(t, this.nextCallback), null != e && setTimeout(this.nextCallback, e)) : setTimeout(this.nextCallback, 0)
    }
    render() {
        let t = this.state.status;
        return t === ep ? null : s(eh.Provider, {
            value: null
        }, this.props.children)
    }
}
function ev() { }
ey.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: ev,
    onEntering: ev,
    onEntered: ev,
    onExit: ev,
    onExiting: ev,
    onExited: ev
};
class eb extends o {
    static defaultProps = {
        timeout: 200
    };
    onEnter = (t, e) => {
        if (t) {
            let n = this.props.animationStyles[e ? "appear" : "enter"];
            this.removeClasses(t, "exit"),
                n && t.classList.add(n)
        }
        this.props.onEnter && this.props.onEnter(t)
    };
    onEntering = (t, e) => {
        if (t) {
            let n = this.props.animationStyles[(e ? "appear" : "enter") + "Active"],
                i = window.requestAnimationFrame;
            n && i(() => {
                i(() => {
                    t && t.classList.add(n)
                })
            })
        }
        this.props.onEntering && this.props.onEntering(t)
    };
    onEntered = (t, e) => {
        if (t) {
            let n = this.props.animationStyles[(e ? "appear" : "enter") + "Done"];
            this.removeClasses(t, e ? "appear" : "enter"),
                n && t.classList.add(n)
        }
        this.props.onEntered && this.props.onEntered(t)
    };
    onExit = t => {
        if (t) {
            let e = this.props.animationStyles.exit;
            this.removeClasses(t, "appear"),
                this.removeClasses(t, "enter"),
                e && t.classList.add(e)
        }
        this.props.onExit && this.props.onExit(t)
    };
    onExiting = t => {
        if (t) {
            let e = this.props.animationStyles.exitActive,
                n = window.requestAnimationFrame;
            e && n(() => {
                n(() => {
                    t && t.classList.add(e)
                })
            })
        }
        this.props.onExiting && this.props.onExiting(t)
    };
    onExited = t => {
        if (t) {
            let e = this.props.animationStyles.exitDone;
            this.removeClasses(t, "exit"),
                e && t.classList.add(e)
        }
        this.props.onExited && this.props.onExited(t)
    };
    removeClasses(t, e) {
        let n = this.props.animationStyles[e],
            i = this.props.animationStyles[e + "Active"],
            r = this.props.animationStyles[e + "Done"];
        n && t.classList.remove(n),
            i && t.classList.remove(i),
            r && t.classList.remove(r)
    }
    render() {
        return s(ey, {
            ...this.props,
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited
        })
    }
}
let e0 = t => t && t.props;
function ew(t, e) {
    let n = t => e && e0(t) ? e(t) : t,
        i = Object.create(null);
    return t && l(t).forEach(t => {
        t && (i[t.key] = n(t))
    }),
        i
}
function eE(t, e) {
    function n(n) {
        return n in e ? e[n] : t[n]
    }
    t = t || {},
        e = e || {};
    let i = Object.create(null),
        r = [];
    for (let s in t)
        s in e ? r.length && (i[s] = r, r = []) : r.push(s);
    let a,
        o = {};
    for (let l in e) {
        if (i[l])
            for (a = 0; a < i[l].length; a++) {
                let u = i[l][a];
                o[i[l][a]] = n(u)
            }
        o[l] = n(l)
    }
    for (a = 0; a < r.length; a++)
        o[r[a]] = n(r[a]);
    return o
}
function ek(t, e, n) {
    return null != n[e] ? n[e] : t.props && t.props[e]
}
function eS(t, e) {
    return ew(t.children, n => u(n, {
        onExited: e.bind(null, n),
        in: !0,
        appear: ek(n, "appear", t),
        enter: ek(n, "enter", t),
        exit: ek(n, "exit", t)
    }))
}
function ex(t, e, n) {
    let i = ew(t.children),
        r = eE(e, i);
    return Object.keys(r).forEach(s => {
        let a = r[s];
        if (!e0(a))
            return;
        let o = s in e,
            l = s in i,
            c = e[s],
            d = e0(c) && !c.props.in;
        l && (!o || d) ? r[s] = u(a, {
            onExited: n.bind(null, a),
            in: !0,
            exit: ek(a, "exit", t),
            enter: ek(a, "enter", t)
        }) : l || !o || d ? l && o && e0(c) && (r[s] = u(a, {
            onExited: n.bind(null, a),
            in: c.props.in,
            exit: ek(a, "exit", t),
            enter: ek(a, "enter", t)
        })) : r[s] = u(a, {
            in: !1
        })
    }),
        r
}
let eT = Object.values || (t => Object.keys(t).map(e => t[e]));
class e3 extends o {
    static defaultProps = {
        component: null,
        childFactory: t => t
    };
    constructor(t) {
        super(t);
        let e = this.handleExited.bind(this);
        this.state = {
            handleExited: e,
            firstRender: !0
        }
    }
    componentDidMount() {
        this.appeared = !0
    }
    static getDerivedStateFromProps(t, e) {
        let {
            children: n,
            handleExited: i,
            firstRender: r
        } = e;
        return {
            children: r ? eS(t, i) : ex(t, n, i),
            firstRender: !1
        }
    }
    handleExited(t, e) {
        let n = ew(this.props.children);
        t.key in n || (t.props.onExited && t.props.onExited(e), this.setState(e => {
            let n = {
                ...e.children
            };
            return delete n[t.key], {
                children: n
            }
        }))
    }
    render() {
        let {
            component: t,
            childFactory: e,
            ...n
        } = this.props,
            i = eT(this.state.children).map(e);
        return delete n.appear,
            delete n.enter,
            delete n.exit,
            s(eh.Provider, {
                value: {
                    isMounting: !this.appeared
                }
            }, t ? s(t, n, i) : s(c, null, i))
    }
}
function e1(t) {
    if (!document.body)
        return;
    let e = window.innerWidth - document.body.clientWidth,
        n = t ? "0px" : `${e}px`;
    document.body.style.overflow = t ? "inherit" : "hidden";
    let i = document.getElementById("app");
    i && (i.style.marginRight = n);
    let r = document.getElementById("controls");
    r && (r.style.marginRight = n);
    let s = document.getElementById("fullscreen-controls");
    s && (s.style.marginRight = n);
    let a = document.getElementById("showroom");
    a && (a.style.paddingRight = n);
    let o = document.documentElement;
    o && o.style.setProperty("--page-overflow-gap", n)
}
let eL = "ki1vh", eN = "ki1vh ki326", eI = "ki1vh ki1hu", e2 = "ki1vh kibb", e8 = "ki29b", eA = "ki1vh ki1ny", e7 = "ki1vh ki32k", eC = "ki1vh ki32k ki2jd", eP = {
    spinner: "ki1vh",
    button: "ki1vh ki326",
    google: "ki1vh ki1hu",
    search: "ki1vh kibb",
    icon: "ki29b",
    revisions: "ki1vh ki1ny",
    songs: "ki1vh ki32k",
    songsInvisible: "ki1vh ki32k ki2jd"
}, e6 = t => {
    let {
        width: e,
        height: n,
        fill: i,
        className: r = eP.spinner,
        style: a,
        id: o,
        iref: l
    } = t;
    return s("svg", {
        className: r,
        ref: l,
        id: o,
        width: e,
        height: n,
        style: a,
        viewBox: "25 25 50 50",
        "aria-labelledby": "spinner-title"
    }, s("circle", {
        stroke: i,
        cx: "50",
        cy: "50",
        r: "20"
    }))
}, eO = "D0y2s5", e9 = {
    loader: "D0y2s5"
};
function e4() {
    return d("div", {
        className: e9.loader,
        children: s(e6, {
            width: 50,
            height: 40,
            fill: "#128df6"
        })
    })
}
let eR = "B41py", eD = "B41py B4d2", eM = "B41py B431b", eB = "B41py B41jo", e5 = {
    alert: "B41py",
    info: "B41py B4d2",
    error: "B41py B431b",
    notice: "B41py B41jo"
};
function eF(t) {
    switch (t) {
        case "error":
            return e5.error;
        case "notice":
            return e5.notice;
        default:
            return e5.info
    }
}
function eH(t, e, n, i) {
    let r = t.length,
        s = Math.ceil((r * n + i * Math.ceil(r * n / e)) / e);
    if (1 === s)
        return [t];
    let a = Math.ceil((e - i) / n),
        o = 0,
        l = [];
    for (let u = 0; u < s; u++) {
        let c = t.substr(o, a),
            d;
        if (u !== s - 1) {
            let h = c.split(" ");
            d = c.lastIndexOf(h[h.length - 1])
        }
        o += d,
            l.push(c.substr(0, d).trim())
    }
    return l
}
function eW(t) {
    let {
        level: e,
        title: n,
        action: i,
        reason: r
    } = t, {
        dispatch: a,
        screen: o,
        device: l
    } = te("screen", "device");
    if ("bot" === l.type)
        return;
    let u = eF(e),
        c = l.isPhone ? 0 : 190,
        d = o.viewport.width - c > 600 ? 600 : o.viewport.width - c,
        h = eH(n, d, 9, 10),
        p = eH(i, d, 7, 10),
        f = "undefined" == typeof btoa ? t => Buffer.from(t, "binary").toString("base64") : btoa;
    return s("section", {
        className: u,
        role: "alert"
    }, h.map(t => s("img", {
        height: 30,
        "aria-label": "title",
        alt: n,
        src: "data:image/svg+xml;base64," + f(`<svg xmlns='http://www.w3.org/2000/svg' width='${9 * t.length + 10}' height='30'>
            <text x='50%' y='50%' font-family='"songsterr", -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif' font-weight='400' font-size='20px' fill='#fff' dominant-baseline='central' text-anchor='middle'>${t}</text>
          </svg>`)
    })), i && p.map(t => s("img", {
        height: 22,
        "aria-label": "action",
        alt: i,
        src: "data:image/svg+xml;base64," + f(`<svg xmlns='http://www.w3.org/2000/svg' width='${7 * t.length + 10}' height='22'>
            <text x='50%' y='50%' font-family='"songsterr", -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif' font-weight='400' font-size='14px' fill='#fff' dominant-baseline='central' text-anchor='middle'>${t}</text>
          </svg>`)
    })))
}
function eV() {
    let [t] = h(t => {
        "Sentry" in window && "function" == typeof window.Sentry.captureException && window.Sentry.captureException(t),
            console && console.error(t)
    });
    return t ? d(eW, {
        level: "error",
        reason: "lazy",
        title: "Failed to load page",
        action: "Please disable your ad blocker and check network connection"
    }) : d(p, {
        fallback: d(e4, {}),
        children: d(this.props.component, this.props)
    })
}
let eU = "undefined" == typeof window;
async function eX(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
    if (!eU)
        return Promise.all(null == t ? void 0 : t.map(t => new Promise((n, i) => {
            if (document.querySelectorAll(`link[href="${t}"]`).length) {
                n(!0);
                return
            }
            let r = document.createElement("link"),
                s = (document.body || document.getElementsByTagName("head")[0]).childNodes,
                a = s[s.length - 1];
            Object.assign(r, {
                rel: "stylesheet",
                href: t,
                onerror: i,
                onload: n,
                media: e
            }),
                a.parentNode.insertBefore(r, a.nextSibling)
        })))
}
let eG = f(() => Promise.all([import("./AppChords.79fd8294.js"), eX(["/static/latest/AppChords.8c5c2858fe5f8fc4.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/NetworkError.a2b8f49ab63d4c4d.css", "/static/latest/Capo.83640d75d9c61cdb.css", "/static/latest/SWW.ee0869611439c289.css"])]).then(t => t[0])), ez = f(() => Promise.all([import("./AppTags.fef0efe9.js"), eX(["/static/latest/AppTags.e210aabd9d1f9d59.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/NetworkError.a2b8f49ab63d4c4d.css", "/static/latest/SWW.ee0869611439c289.css"])]).then(t => t[0])), ej = f(() => Promise.all([import("./AppTab.565d7227.js"), eX(["/static/latest/AppTab.be9c66d91f955977.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/Capo.83640d75d9c61cdb.css", "/static/latest/NetworkError.a2b8f49ab63d4c4d.css", "/static/latest/SWW.ee0869611439c289.css"])]).then(t => t[0])), eq = f(() => Promise.all([import("./SongsPanel.a160b7e4.js"), eX(["/static/latest/index.77af498a5051b300.css", "/static/latest/SongsPanel.module.85659ea4f8159326.css", "/static/latest/SearchBox.4bb250a8e8d72c76.css", "/static/latest/Stub.840d865f8d59eb70.css", "/static/latest/Panel.e73a15f0883258f2.css"])]).then(t => t[0])), eY = f(() => Promise.all([import("./FavoritesPanel.0bc9e22c.js"), eX(["/static/latest/FavoritesPanel.fccd96b41e79d31b.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/SongsPanel.module.85659ea4f8159326.css", "/static/latest/SearchBox.4bb250a8e8d72c76.css", "/static/latest/Stub.840d865f8d59eb70.css", "/static/latest/Panel.e73a15f0883258f2.css"])]).then(t => t[0])), eK = f(() => Promise.all([import("./ArtistPanel.3f961edb.js"), eX(["/static/latest/SongsPanel.module.85659ea4f8159326.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/SearchBox.4bb250a8e8d72c76.css", "/static/latest/Stub.840d865f8d59eb70.css", "/static/latest/Panel.e73a15f0883258f2.css"])]).then(t => t[0])), eJ = f(() => Promise.all([import("./SubmitPanel.5986e294.js"), eX(["/static/latest/SubmitPanel.8a39e7eff3cd94af.css", "/static/latest/Panel.e73a15f0883258f2.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/Input.2762c3e20d6520b6.css", "/static/latest/FormError.b880d263c7949fde.css", "/static/latest/FileInput.7c805333bfa0e181.css", "/static/latest/Stub.840d865f8d59eb70.css"])]).then(t => t[0])), eQ = f(() => Promise.all([import("./TextPanel.4c7d1429.js"), eX(["/static/latest/TextPanel.b65687d362098683.css", "/static/latest/Panel.e73a15f0883258f2.css", "/static/latest/index.77af498a5051b300.css"])]).then(t => t[0])), eZ = f(() => Promise.all([import("./AboutPanel.4e731185.js"), eX(["/static/latest/AboutPanel.90a1dc2a1bed94a5.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/Panel.e73a15f0883258f2.css"])]).then(t => t[0])), nt = f(() => Promise.all([import("./JobsPanel.4c953e6d.js"), eX(["/static/latest/JobsPanel.5f73cabf19d918b7.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/Panel.e73a15f0883258f2.css"])]).then(t => t[0])), ne = f(() => Promise.all([import("./HelpPanel.a919e130.js"), eX(["/static/latest/HelpPanel.0e111599c5b6d415.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/Panel.e73a15f0883258f2.css", "/static/latest/TocPointer.4277edfc32523766.css", "/static/latest/SearchBox.4bb250a8e8d72c76.css", "/static/latest/ContinueLink.15b61efe8be39218.css", "/static/latest/FormError.b880d263c7949fde.css", "/static/latest/Input.2762c3e20d6520b6.css", "/static/latest/GenericPanel.module.938bfc65af449eaa.css", "/static/latest/SWW.ee0869611439c289.css"])]).then(t => t[0])), nn = f(() => Promise.all([import("./SigninPanel.875223e4.js"), eX(["/static/latest/SigninPanel.374924d6629568fa.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/Input.2762c3e20d6520b6.css", "/static/latest/FormError.b880d263c7949fde.css", "/static/latest/Panel.e73a15f0883258f2.css"])]).then(t => t[0])), ni = f(() => Promise.all([import("./SignupPanel.6d437a84.js"), eX(["/static/latest/SignupPanel.c958ca78cefae30f.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/Input.2762c3e20d6520b6.css", "/static/latest/FormError.b880d263c7949fde.css", "/static/latest/Panel.e73a15f0883258f2.css"])]).then(t => t[0])), nr = f(() => Promise.all([import("./AccountPanel.9b7af0d6.js"), eX(["/static/latest/AccountPanel.a7de0c060248b987.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/FormError.b880d263c7949fde.css", "/static/latest/Panel.e73a15f0883258f2.css", "/static/latest/Input.2762c3e20d6520b6.css"])]).then(t => t[0])), ns = f(() => Promise.all([import("./ForgotPasswordPanel.99ea52ff.js"), eX(["/static/latest/index.77af498a5051b300.css", "/static/latest/FormError.b880d263c7949fde.css", "/static/latest/Input.2762c3e20d6520b6.css", "/static/latest/Panel.e73a15f0883258f2.css", "/static/latest/ContinueLink.15b61efe8be39218.css", "/static/latest/GenericPanel.module.938bfc65af449eaa.css"])]).then(t => t[0])), na = f(() => Promise.all([import("./ChangePasswordPanel.dfb78ba3.js"), eX(["/static/latest/index.77af498a5051b300.css", "/static/latest/FormError.b880d263c7949fde.css", "/static/latest/Input.2762c3e20d6520b6.css", "/static/latest/Panel.e73a15f0883258f2.css", "/static/latest/ContinueLink.15b61efe8be39218.css", "/static/latest/GenericPanel.module.938bfc65af449eaa.css"])]).then(t => t[0])), no = f(() => Promise.all([import("./PlusPanel.27cc1a80.js"), eX(["/static/latest/PlusPanel.44eb2a2c22a8188c.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/Panel.e73a15f0883258f2.css"])]).then(t => t[0])), nl = f(() => Promise.all([import("./PaymentPanel.91252921.js"), eX(["/static/latest/PaymentPanel.35f19398be05822e.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/PaymentForm.84991b3ba8107b90.css", "/static/latest/Panel.e73a15f0883258f2.css", "/static/latest/ContinueLink.15b61efe8be39218.css"])]).then(t => t[0])), nu = f(() => Promise.all([import("./CouponPanel.767a0363.js"), eX(["/static/latest/FormError.b880d263c7949fde.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/Input.2762c3e20d6520b6.css", "/static/latest/ContinueLink.15b61efe8be39218.css", "/static/latest/Panel.e73a15f0883258f2.css", "/static/latest/GenericPanel.module.938bfc65af449eaa.css"])]).then(t => t[0])), nc = f(() => Promise.all([import("./CancelPlusPanel.343038ee.js"), eX(["/static/latest/index.77af498a5051b300.css", "/static/latest/ContinueLink.15b61efe8be39218.css", "/static/latest/FormError.b880d263c7949fde.css", "/static/latest/Panel.e73a15f0883258f2.css", "/static/latest/GenericPanel.module.938bfc65af449eaa.css"])]).then(t => t[0])), nd = f(() => Promise.all([import("./DeactivatePanel.679aface.js"), eX(["/static/latest/index.77af498a5051b300.css", "/static/latest/FormError.b880d263c7949fde.css", "/static/latest/Panel.e73a15f0883258f2.css", "/static/latest/GenericPanel.module.938bfc65af449eaa.css", "/static/latest/ContinueLink.15b61efe8be39218.css"])]).then(t => t[0])), nh = f(() => Promise.all([import("./UpdateCardPanel.21d46431.js"), eX(["/static/latest/UpdateCardPanel.8cea0301116e649e.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/PaymentForm.84991b3ba8107b90.css", "/static/latest/Panel.e73a15f0883258f2.css", "/static/latest/ContinueLink.15b61efe8be39218.css"])]).then(t => t[0])), np = f(() => Promise.all([import("./HowToReadTabPanel.cfce537a.js"), eX(["/static/latest/HowToReadTabPanel.4e5ad16256add301.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/Panel.e73a15f0883258f2.css", "/static/latest/TocPointer.4277edfc32523766.css"])]).then(t => t[0])), nf = "p2287", ng = "p22sz", nm = "p21o9", n$ = "p22as", n_ = {
    exitActive: "p2287",
    enterActive: "p22sz",
    enter: "p21o9",
    exit: "p22as"
}, ny = "w6o", nv = "w613o", nb = "w617j", n0 = "w6ty", nw = {
    exitActive: "w6o",
    enterActive: "w613o",
    enter: "w617j",
    exit: "w6ty"
};
var nE = "/static/media/main.866931f6.svg", nk = "/static/media/text.9cfe6bcf.svg", nS = "/static/media/jobs.30375c6a.svg";
let nx = 4;
function nT(t, e) {
    let n = t,
        i = e;
    for (; 0 !== n && 0 !== i;)
        n >= i ? n %= i : i %= n;
    return n + i
}
let n3 = 11531520, n1 = 6e4, nL = t => t[0], nN = t => t[1], nI = t => 11531520 * nL(t) / nN(t), n2 = t => t / 11531520, n8 = t => Math.floor(11531520 * t), nA = (t, e) => Math.floor(n2(t) / e.bpm * e.type * 6e4);
function n7(t, e) {
    return 4 * e / nN(t) * nL(t)
}
let nC = 24, nP = 32, n6 = 1024, nO = 31;
function n9(t) {
    return 1024 === t
}
function n4(t) {
    return t >= 24 && t <= 31
}
function nR(t) {
    return t >= 32 && t <= 39
}
let nD = 0, nM = 1, nB = 2, n5 = 3, nF = 4, nH = 5, nW = 6, nV = 7, nU = 8, nX = 9, nG = 10, nz = 11, nj = 12, nq = 13, nY = 14, nK = 15, nJ = 16, nQ = 17, nZ = 18, it = 19, ie = 20, ii = 21, ir = 22, is = 23, ia = 24;
function io(t) {
    if (1024 === t)
        return 24;
    if (t < 32)
        return t < 24 ? t < 16 ? t < 8 ? 0 : 1 : t < 21 ? 2 : 3 : t < 27 ? t < 26 ? 4 : 5 : 6;
    if (t < 40)
        return 7;
    if (t < 68)
        return t < 47 ? t < 43 ? t < 42 ? 8 : 9 : t < 46 ? 10 : 11 : t < 56 ? t < 48 ? 12 : 13 : t < 64 ? 14 : 15;
    return t < 96 ? t < 80 ? t < 72 ? 16 : 17 : t < 88 ? 18 : 19 : t < 112 ? t < 104 ? 20 : 21 : t < 120 ? 22 : 23
}
function il() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
    if (t) {
        if (t.includes("below"))
            return "below";
        if (t.includes("above"))
            return "above"
    }
}
function iu() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
    if (t) {
        if (t.includes("shift"))
            return "shift";
        if (t.includes("legato"))
            return "legato";
        if (t.includes("downwards"))
            return "downwards";
        if (t.includes("upwards"))
            return "upwards"
    }
}
let ic = t => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\/|\s+/g, "-").replace(/[^a-z0-9-_]/g, ""), id = function () {
    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
    return ic(e.join("-"))
}, ih = t => t.replace(/-+/g, "-").replace(/^-*|-$/g, ""), ip = t => t.replace(/^the-/g, "");
function ig(t, e, n) {
    let i = t.views || 0,
        r = !0;
    for (let s of e) {
        if (t === s) {
            r = !1;
            continue
        }
        if (n(s.instrumentId)) {
            let a = s.views || 0;
            if (a > i || a === i && r)
                return !0
        }
    }
    return !1
}
function im(t) {
    return t.endsWith("-bass") || t.endsWith("-drum") ? t.slice(0, -4) : t
}
function i$(t, e, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (!t)
        return "/";
    let r = "",
        s = !0;
    if (t.tracks && void 0 !== e && !n) {
        let a = null,
            o = t.tracks[e];
        o && (n9(o.instrumentId) ? (r = "-drum", a = n9) : nR(o.instrumentId) ? (r = "-bass", a = nR) : n4(o.instrumentId) && (a = n4)),
            s = i || !a || ig(o, t.tracks, a)
    }
    let l = id(t.artist, t.title);
    s || (l = im(l));
    let u = n ? `/r${n}` : "",
        c = s ? `t${e}` : "";
    return "/a/wsa/" + ip(ih(l + r + `-tab-s${t.songId}${c}${u}`))
}
function i_(t, e) {
    if (!t)
        return "/";
    let n = e ? `/r${e}` : "",
        i = id(t.artist, t.title);
    return "/a/wsa/" + ip(ih(i + `-tab-s${t.songId}${n}`))
}
function iy(t, e) {
    let n = "",
        i = "",
        r = t.tracks && t.tracks[e];
    r && (n9(r.instrumentId) ? i = "-drum" : nR(r.instrumentId) ? i = "-bass" : n4(r.instrumentId) || (n = `t${r.partId}`));
    let s = id(t.artist, t.title);
    return s = im(s),
        "/a/wsa/" + ip(ih(s + i + `-tab-s${t.songId}${n}`))
}
function iv(t) {
    let e = id(t.artist || "");
    return "/a/wsa/" + ih(e + `-tabs-a${t.artistId}`)
}
function ib(t) {
    if (!t)
        return "/";
    let e = id(t.artist, t.title);
    return "/a/wsa/" + ip(ih(e + `-chords-s${t.songId}`))
}
!function (t) {
    t[t.V1 = 1] = "V1",
        t[t.V2 = 2] = "V2",
        t[t.V4 = 4] = "V4",
        t[t.MASTER = 2] = "MASTER",
        t[t.DEV = 777] = "DEV"
}
    (z || (z = {})), function (t) {
        t[t.TOO_LONG = 228] = "TOO_LONG",
            t[t.MIDI_FAILED = 229] = "MIDI_FAILED",
            t[t.NOT_FOUND = 404] = "NOT_FOUND",
            t[t.UNKNOWN = 500] = "UNKNOWN"
    }
        (j || (j = {}));
let i0 = [{
    displayName: "V1",
    version: z.V1,
    bucket: "audio",
    bucketDomains: ["audio1", "audio2", "audio3"],
    audioHashPropertyName: "audio"
}, {
    displayName: "V2",
    version: z.V2,
    versionLegacy: "audioV2",
    bucket: "audio3",
    bucketDomains: ["audio31", "audio32", "audio33"],
    audioHashPropertyName: "audioV2",
    audioErrorPropertyName: "audioV2Error",
    midiHashPropertyName: "audioV2Midi"
}, {
    displayName: "V4",
    version: z.V4,
    bucket: "audio4",
    bucketDomains: ["audio4-1", "audio4-2", "audio4-3"],
    audioHashPropertyName: "audioV4",
    audioErrorPropertyName: "audioV4Error",
    midiHashPropertyName: "audioV4Midi"
}, {
    displayName: "Dev",
    version: z.DEV,
    versionLegacy: "next",
    bucket: "audio2",
    bucketDomains: ["audio2"],
    audioHashPropertyName: "nextAudio",
    midiHashPropertyName: "nextMidi"
},], iw = new Map;
function iE(t) {
    return i0.filter(e => !!t[e.audioHashPropertyName]).map(t => t.version)
}
function ik(t, e) {
    return e === z.V2 ? t.audioV2Midi || null : e === z.V4 ? t.audioV4Midi || null : e === z.DEV && t.nextMidi || null
}
function iS(t, e) {
    let n = iL(e),
        i = t[n.audioHashPropertyName],
        r = n.audioErrorPropertyName ? t[n.audioErrorPropertyName] : null,
        s = ik(t, e);
    return {
        version: e,
        versionInfo: n,
        audio: i,
        audioError: r || void 0,
        midi: s || void 0
    }
}
function ix(t) {
    switch (t) {
        case "next":
            return z.DEV;
        case "prod":
            return z.MASTER;
        case "preprod":
            return z.V4;
        default:
            throw Error(`Unsupported env ${t}`)
    }
}
function iT(t) {
    return "prod" === t ? 2 : 3
}
function i3(t) {
    switch (t) {
        case "prod":
            return 2;
        case "next":
            return 3;
        case "preprod":
            return 4
    }
    throw Error(`Unsupported env ${t}`)
}
i0.forEach(t => iw.set(t.version, t));
class i1 {
    numericVersion = 0;
    payload = "";
    constructor(t, e) {
        this.numericVersion = t,
            this.payload = e
    }
    encode() {
        return i1.encode(this)
    }
    static getLatestAVTag(t) {
        return i3(t)
    }
    static getLatestMVTag(t) {
        return iT(t)
    }
    static encode(t) {
        return `v${t.numericVersion}-${t.payload}`
    }
    static decode(t) {
        if (!/^v\d+-/.test(t))
            return null;
        let [e, n] = t.split("-");
        return new i1(+e.substring(1), n)
    }
}
function iL(t) {
    let e = iw.get(t);
    if (e)
        return e;
    throw Error(`Unable to get audio version info for version ${t}`)
}
class iN {
    has(t, e) {
        return iE(t).includes(e)
    }
    getAll(t) {
        return iE(t)
    }
    get(t, e) {
        return iS(t, e)
    }
    getMVTagForEnv(t, e) {
        let n = ix(e),
            i = iS(t, n),
            r = i.midi;
        return r ? i1.decode(r) : null
    }
    getAVTagForEnv(t, e) {
        let n = ix(e),
            i = iS(t, n),
            r = i.audio;
        return r ? i1.decode(r) : null
    }
    hasLatestAVTag(t, e) {
        let n = this.getAVTagForEnv(t, e);
        return null != n && n.numericVersion >= i3(e)
    }
    hasLatestMVTag(t, e) {
        let n = this.getMVTagForEnv(t, e);
        return null != n && n.numericVersion >= iT(e)
    }
    hasLatestSound(t, e) {
        let n = this.getAVTagForEnv(t, e);
        if (null == n)
            return !1;
        let i = iT(e),
            r = i3(e),
            s = this.getMVTagForEnv(t, e);
        return null != s ? n.numericVersion >= r && s.numericVersion >= i : n.numericVersion >= r
    }
}
let iI = new iN;
function i2() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return "/tags" + (t ? `?page=${t}` : "")
}
function i8(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return "/tags/" + t.replace(/ /g, "+") + (e ? `?page=${e}` : "")
}
function iA(t, e, n, i) {
    return "tab" === t.page ? i$(e.current, e.partId, e.revisionId) : "chords" === t.page ? ib(n.current) : "tag" === t.page ? i.content ? i8(i.content.tag, i.content.page) : "/" : "tags" === t.page ? i.content ? i2(i.content.page) : "/" : void 0
}
!function (t) {
    t.FREE = "free",
        t.PLUS = "plus",
        t.BETA = "beta",
        t.BASIC = "basic"
}
    (q || (q = {})), function (t) {
        t.NONE = "none",
            t.LIFETIME = "lifetime"
    }
        (Y || (Y = {})), function (t) {
            t.BRAINTREE = "braintree",
                t.APP_STORE = "appstore",
                t.GOOGLE_PLAY = "googleplay",
                t.COUPON = "coupon",
                t.MANUAL = "manual",
                t.LEGACY_PAYPAL = "paypal"
        }
        (K || (K = {})), function (t) {
            t.ACTIVE = "active",
                t.CANCELED = "canceled",
                t.EXPIRED = "expired",
                t.OUTDATED = "outdated"
        }
        (J || (J = {}));
let i7 = {
    search: eq,
    favorites: eY,
    artist: eK,
    plus: no,
    submit: eJ,
    about: eZ,
    jobs: nt,
    help: ne,
    signin: nn,
    signup: ni,
    recoverpassword: na,
    changepassword: na,
    forgotpassword: ns,
    account: nr,
    cancelPlus: nc,
    deactivate: nd,
    updateCard: nh,
    subscribePlus: nl,
    coupon: nu,
    howToReadTab: np,
    privacy: eQ,
    terms: eQ,
    dnsmpd: eQ
};
function iC(t) {
    t.preventDefault()
}
let iP = g(t => {
    let {
        isSmallScreen: e
    } = t, {
        dispatch: n,
        device: i,
        user: a,
        route: o,
        query: l,
        routeContent: u,
        meta: c,
        chords: d,
        tags: h
    } = te("device", "user", "route", "query", "routeContent", "meta", "chords", "tags"), {
        isPanel: p,
        page: f
    } = o,
        g = iA(u, c, d, h);
    m(() => i.isDesktop && e1(!p), [p, i.isDesktop]),
        r(() => tu(p, f), [p, f]);
    let {
        isDesktop: $
    } = i, {
        hasPlus: _,
        isLoggedIn: y,
        profile: v
    } = a,
        b = ["ru", "ru-mo", "be", "uk"].some(t => -1 !== i.languages.indexOf(t));
    a.hasPlus = true;
    return s("div", {
        className: tL.pane
    }, !e && s("nav", {
        className: tL.float,
        id: "tablist"
    }, s(tQ, {
        id: "logo",
        className: tL.logo,
        route: o,
        url: "/",
        songUrl: g,
        title: "Songsterr"
    }, s("img", {
        src: nE,
        width: 30,
        height: 36,
        alt: "Songsterr"
    }), s("img", {
        src: nk,
        width: 62,
        height: 12,
        alt: "Songsterr"
    })), s("div", {
        className: tL.dividerEdge
    }), s(tJ, {
        id: "search",
        route: o,
        url: "/",
        songUrl: g
    }, s(et, {
        styles: tL,
        width: 30,
        height: 30
    }), s("div", {
        className: tL.text
    }, "Tabs")), s(tZ, {
        id: "favorites",
        route: o,
        url: "/a/wa/favorites",
        songUrl: g
    }, s(ei, {
        styles: tL
    }), s("div", {
        className: tL.text
    }, "Favorites")), $ && s(tI, {
        id: "submit",
        route: o,
        url: "/a/wa/submit",
        songUrl: g
    }, s(ea, {
        styles: tL
    }), s("div", {
        className: tL.text
    }, "Submit Tab")), s("div", {
        className: tL.dividerSmall
    }), !_ && s(tI, {
        id: "plus",
        route: o,
        url: "/a/wa/plus",
        songUrl: g,
        linkClick(t) {
            t || n("curiosity/setConversionProps", {
                "Last referring link": "Sidebar Button"
            })
        }
    }, s(el, {
        styles: tL
    }), s("div", {
        className: tL.text
    }, "Songsterr Plus")), s(tI, {
        id: "help",
        route: o,
        url: "/a/wa/help",
        songUrl: g
    }, s(eo, {
        styles: tL
    }), s("div", {
        className: tL.text
    }, "Questions?")), !y && s(tI, {
        id: "signin",
        route: o,
        url: "/a/wa/signin",
        songUrl: g
    }, s(ec, {
        styles: tL,
        width: 28,
        height: 29
    }), s("div", {
        className: tL.text
    }, "Sign In")), y && s(tI, {
        id: "account",
        route: o,
        url: "/a/wa/account",
        songUrl: g
    }, s(ed, {
        styles: tL,
        width: 29,
        height: 29
    }), s("div", {
        className: tL.text
    }, v.name)), s("div", {
        className: tL.dividerSmall
    }), $ && b && s(tp, {
        id: "menu-jobs",
        to: "/a/wa/jobs",
        className: tL.jobs,
        title: "Jobs at Songsterr"
    }, s("img", {
        src: nS,
        width: 79.271,
        height: 32,
        alt: "Jobs"
    }))), s(e3, null, p && s(eb, {
        animationStyles: nw,
        timeout: 400,
        key: "overlay"
    }, s(tp, {
        onTouchMove: iC,
        className: tL.overlay,
        id: "sidebar-overlay",
        to: g,
        title: "Back to tab",
        tabIndex: -1
    })), o.page in i7 && s(eb, {
        animationStyles: n_,
        timeout: 400,
        key: o.page
    }, s("main", {
        id: `panel-${o.page}`,
        className: tL.mainpanel
    }, s(eV, {
        component: i7[o.page],
        route: o,
        query: l,
        user: a,
        device: i,
        songUrl: g,
        isSmallScreen: e,
        id: o.page
    })))))
}), i6 = "C8p2d0", iO = "C8p2d0 C8pr1", i9 = "C8p2d0 C8p1q", i4 = {
    indicator: "C8p2d0",
    onlineIndicator: "C8p2d0 C8pr1",
    offlineIndicator: "C8p2d0 C8p1q"
}, iR = "Cir12y", iD = "Cir1tt", iM = "Cir29v", iB = "Cir1q8", i5 = {
    exitActive: "Cir12y",
    enterActive: "Cir1tt",
    enter: "Cir29v",
    exit: "Cir1q8"
};
function iF(t) {
    return t ? i4.onlineIndicator : i4.offlineIndicator
}
class iH extends o {
    constructor(t) {
        super(t),
            this.state = {
                online: navigator.onLine,
                className: iF(navigator.onLine),
                message: navigator.onLine ? null : "offline"
            },
            this.updateOnlineStatus = this.updateOnlineStatus.bind(this),
            this.hideIndicator = this.hideIndicator.bind(this)
    }
    componentDidMount() {
        window.addEventListener("online", this.updateOnlineStatus),
            window.addEventListener("offline", this.updateOnlineStatus)
    }
    componentWillUnmount() {
        window.removeEventListener("online", this.updateOnlineStatus, !0),
            window.removeEventListener("offline", this.updateOnlineStatus, !0)
    }
    hideIndicator() {
        this.state.online && this.setState({
            ...this.state,
            message: null
        })
    }
    updateOnlineStatus() {
        let t = navigator.onLine;
        t && (clearTimeout(this.hideIndicatorTimeout), this.hideIndicatorTimeout = setTimeout(this.hideIndicator, 5e3)),
            this.setState({
                online: navigator.onLine,
                className: iF(navigator.onLine),
                message: navigator.onLine ? "live" : "offline"
            })
    }
    render() {
        let {
            online: t,
            className: e,
            message: n
        } = this.state,
            i = null;
        return (n || !t) && (i = s(eb, {
            animationStyles: i5,
            timeout: 400
        }, s("div", {
            className: e
        }, n))),
            s(e3, null, i)
    }
}
let iW = "Bdq1f0", iV = "Bdq1h0", iU = "Bdq2sz", iX = "Bdq8o", iG = "Bdqf4", iz = {
    menu: "Bdq1f0",
    linkNotable: "Bdq1h0",
    linkText: "Bdq2sz",
    active: "Bdq8o",
    inactive: "Bdqf4"
};
function ij(t, e) {
    return `/admin/resources/${t}/records/${e}/show`
}
function iq(t, e) {
    return `/a/wa/SongAdminTools/${t}?id=${e}`
}
function iY(t) {
    return `https://www.songsterr.com${t}`
}
function iK(t) {
    switch (t.next) {
        case "subscribe":
            return "/a/wa/plus/payment";
        case "favorites":
            return "/a/wa/favorites";
        case "account":
            return "/a/wa/account";
        case "submit":
            return "/a/wa/submit";
        case "coupon":
            let e = t.code ? `?${new URLSearchParams({ code: t.code })}` : "";
            return `/a/wa/plus/coupon${e}`;
        default:
            return "/"
    }
}
let iJ = t => {
    window && !window.confirm("Are you sure?") && t.preventDefault()
};
function iQ(t) {
    let {
        meta: {
            songId: e
        },
        isAdmin: n,
        children: i
    } = t;
    if (!n)
        return s("nav", {
            className: iz.menu
        }, i);
    let r = iq("editSong", e),
        a = iq("updateSrwr", e),
        o = iq("rerender", e),
        l = iq("generatePng", e),
        u = iq("blockDueToLicenseRestriction", e);
    return s("nav", {
        className: iz.menu
    }, s("a", {
        className: iz.linkNotable,
        href: window.location.href + "?redesign=off"
    }, "SRWO"), s("a", {
        href: r,
        target: "_blank"
    }, "Edit"), s("a", {
        href: a,
        target: "_blank",
        onClick: iJ
    }, "Update"), s("a", {
        href: o,
        target: "_blank",
        onClick: iJ
    }, "Rerender"), s("a", {
        href: u,
        target: "_blank",
        onClick: iJ
    }, "Block"), s("a", {
        href: l,
        target: "_blank"
    }, "Generate PNG"), i)
}
let iZ = "C1p2za", rt = {
    close: "C1p2za"
}, re = t => {
    let {
        onClick: e,
        id: n,
        width: i = 11,
        height: r = 11
    } = t;
    return s("button", {
        className: rt.close,
        onClick: e
    }, s("svg", {
        width: i,
        height: r,
        viewBox: "0 0 11 11",
        "aria-labelledby": `${n}-close`
    }, s("title", {
        id: `${n}-close`
    }, "Close"), s("path", {
        d: "M1 1l9 9m-9 0l9-9"
    })))
}, rn = "z44l", ri = "z4qb", rr = "z44l z42qo", rs = "z44l z415m", ra = "z44l z430w", ro = "z44l z430w z410u", rl = "z44l z41yi", ru = "z44l z41uv", rc = "z44l z41rt", rd = "z44l z41rt z4kq", rh = "z44l z41rt z42wq", rp = "z44l z41rt z423c", rf = "z41gq", rg = "z44l z42g1", rm = "z44l z42gf", r$ = "z44l z433s", r_ = "z432r", ry = "z44l z4a1", rv = "z41xe", rb = "z44l z4a1 z424y", r0 = "z44l z4a1 z41vb", rw = "z44l z4a1 z42j7", rE = "z44l z41rt z4ow", rk = "z44l z41rt z4118", rS = "z44l z4a1 z424y z41xe z4ls", rx = "z44l z4a1 z41vb z41xe z421m", rT = "z44l z4a1 z424y z42fn", r3 = "z44l z4a1 z42j7 z4rq", r1 = "z44l z4a1 z42j7 z42ct", rL = "z44l z42qx", rN = "z4y3", rI = "z41pi", r2 = {
    button: "z44l",
    active: "z4qb",
    buttonGreen: "z44l z42qo",
    buttonBlue: "z44l z415m",
    buttonGrey: "z44l z430w",
    buttonDisabled: "z44l z430w z410u",
    buttonRed: "z44l z41yi",
    buttonFloat: "z44l z41uv",
    buttonLink: "z44l z41rt",
    buttonLinkFloat: "z44l z41rt z4kq",
    buttonLinkSmall: "z44l z41rt z42wq",
    buttonPromoUnsubscribe: "z44l z41rt z423c",
    link: "z41gq",
    buttonBlock: "z44l z42g1",
    buttonSmall: "z44l z42gf",
    google: "z44l z433s",
    googleIcon: "z432r",
    popupButton: "z44l z4a1",
    popupButtonSmall: "z41xe",
    popupButtonGreen: "z44l z4a1 z424y",
    popupButtonBlue: "z44l z4a1 z41vb",
    popupButtonOrange: "z44l z4a1 z42j7",
    popupButtonLinkGreen: "z44l z41rt z4ow",
    popupButtonLinkOrange: "z44l z41rt z4118",
    popupButtonGreenSmall: "z44l z4a1 z424y z41xe z4ls",
    popupButtonBlueSmall: "z44l z4a1 z41vb z41xe z421m",
    submitRevisionButton: "z44l z4a1 z424y z42fn",
    submitReportButton: "z44l z4a1 z42j7 z4rq",
    submitRevisionButtonWarning: "z44l z4a1 z42j7 z42ct",
    buttonBig: "z44l z42qx",
    greenHighlight: "z4y3",
    orangeHighlight: "z41pi"
}, r8 = "B9v2h1", rA = "B9vl", r7 = "B9v21x", rC = rb + " B9v2hx", rP = rb + " B9vhl", r6 = "B9v2h1 B9v2vm", rO = "B9v1fv", r9 = "B9v2v2", r4 = "B9vdn", rR = "B9vdn B9vjs", rD = "B9vdn B9v24z", rM = "B9vdn B9v165", rB = "B9vdn B9v2pd", r5 = "B9vdn B9vzs", rF = "B9vdn B9v1vp", rH = "B9vdn B9v1up", rW = "B9vdn B9v2wk", rV = "B9vdn B9v8w", rU = "B9vdn B9vl8", rX = "B9vdn B9v1c4", rG = {
    pane: "B9v2h1",
    title: "B9vl",
    body: "B9v21x",
    button: rb + " B9v2hx",
    link: rb + " B9vhl",
    nps: "B9v2h1 B9v2vm",
    score: "B9v1fv",
    npsLegend: "B9v2v2",
    npsButton: "B9vdn",
    npsButton0: "B9vdn B9vjs",
    npsButton1: "B9vdn B9v24z",
    npsButton2: "B9vdn B9v165",
    npsButton3: "B9vdn B9v2pd",
    npsButton4: "B9vdn B9vzs",
    npsButton5: "B9vdn B9v1vp",
    npsButton6: "B9vdn B9v1up",
    npsButton7: "B9vdn B9v2wk",
    npsButton8: "B9vdn B9v8w",
    npsButton9: "B9vdn B9vl8",
    npsButton10: "B9vdn B9v1c4"
}, rz = "hidden", rj = "intro", rq = "questions", rY = "not_chosen", rK = "email", rJ = "feeback", rQ = "start", rZ = "instructions", st = "restart", se = "survey", sn = "farewell", si = t => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(e => s("button", {
    className: rG[`npsButton${e}`],
    key: e,
    onClick: () => t(e)
}, e));
function sr() {
    let {
        dispatch: t,
        screener: e,
        ut: n
    } = te("screener", "ut"),
        i = e.active;
    if (!i || n.stage !== rz)
        return null;
    let r = a(() => {
        t("screener/dismiss", i)
    }, [i]);
    if (i.name.endsWith("NPS")) {
        let o = e => {
            t("screener/accept", {
                screener: i,
                value: e
            })
        };
        return s("aside", {
            className: rG.nps,
            id: "screener"
        }, s(re, {
            onClick: r,
            id: "screener"
        }), s("p", {
            className: rG.body
        }, i.body), s("div", {
            className: rG.score
        }, si(o)), s("p", {
            className: rG.npsLegend
        }, "0 - Not likely 10 - Very likely"))
    }
    let l = a(() => {
        t("screener/accept", {
            screener: i
        })
    }, [i]);
    return s("aside", {
        className: rG.pane,
        id: "screener"
    }, s(re, {
        onClick: r,
        id: "screener"
    }), s("h2", {
        className: rG.title
    }, i.title), s("p", {
        className: rG.body
    }, i.body), i.usertest ? s("button", {
        className: rG.button,
        onClick: l
    }, i.button) : s("a", {
        className: rG.link,
        href: i.link,
        onClick: l,
        rel: "noopener noreferrer",
        target: "_blank"
    }, i.button))
}
function ss(t) {
    return "android" === t.name.toLowerCase()
}
function sa(t) {
    return "ios" === t.name.toLowerCase()
}
function so(t) {
    return !!t.isTablet && "ios" === t.os.name.toLowerCase() || t.isDesktop && "Mac OS X" === t.os.name && "ontouchstart" in window
}
let sl = t => { };
function su(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (ss(t)) {
        let i = n.songId ? `%26tab_id%3D${n.songId}` : "";
        return `https://play.google.com/store/apps/details?id=com.songsterr&referrer=utm_source%3D${e}${i}`
    }
    return `https://apps.apple.com/app/apple-store/id399211291?pt=414338&mt=8&at=10lcbo&ct=${e}`
}
function sc(t) {
    let {
        dispatch: e,
        device: n
    } = te("device"), {
        source: i
    } = t,
        r = t.os ? {
            name: t.os
        }
            : n.os,
        o = t.extra || {},
        l = t.attrs || {},
        u = su(r, i, o),
        c = a(() => {
            t.onClick && t.onClick(),
                e("player/togglePlay", !1),
                e("curiosity/google", {
                    category: "Showroom",
                    action: `Clicked on ${ss(r) ? "Google Play" : "App Store"} link`
                })
        }, []);
    return s("a", {
        ...l,
        href: u,
        onClick: c,
        rel: "noopener noreferrer",
        target: "_blank"
    }, t.children)
}
let sd = "Ei1by", sh = "Ei2cl", sp = "Ei2zd", sf = "Ei2we", sg = {
    pane: "Ei1by",
    title: "Ei2cl",
    subtitle: "Ei2zd",
    actions: "Ei2we"
}, sm = "e81fc", s$ = "e8v0", s_ = "e8qv", sy = "e8ai", sv = {
    exitActive: "e81fc",
    enterActive: "e8v0",
    enter: "e8qv",
    exit: "e8ai"
}, sb = {
    animationStyles: sv
}, s0 = () => {
    let {
        dispatch: t,
        promo: e,
        device: n
    } = te("promo", "device"),
        i = e.active,
        r = () => t("promo/unsubscribe"),
        a = () => t("promo/dismiss"),
        o = {
            title: "Struggling to figure out\nthe rhythm of this fragment?",
            cta: n.isPhone ? "Slow it down in our app!" : "Slow it down on Plus!",
            source: "slowdown_promo_popup",
            link: "Slowdown Promo Popup",
            context: void 0
        };
    switch (e.active) {
        case "loop":
            o = {
                title: "Want to nail this fragment?",
                cta: n.isPhone ? "Practice it by looping\nin our app!" : "Practice it by looping\non Plus!",
                source: "loop_promo_popup",
                link: "Loop Promo Popup",
                context: "Loop"
            };
            break;
        case "noads":
            o = {
                title: "Bottom banners take up\ntoo much space?",
                cta: n.isPhone ? "Remove them in our app!" : "Remove them on Plus!",
                source: "noads_promo_popup",
                link: "No Ads Promo Popup",
                context: "No Ads"
            };
            break;
        case "print":
            o = {
                title: "Prefer to read and\nmarkup on paper?",
                cta: n.isPhone ? "Print the tab out in our app!" : "Print the tab out on Plus!",
                source: "print_promo_popup",
                link: "Print Promo Popup",
                context: "Print"
            };
            break;
        case "mute":
            o = {
                title: "Using tab as\na backing track?",
                cta: n.isPhone ? "Mute your instrument\nin our app!" : "Mute your instrument\non Plus!",
                source: "mute_promo_popup",
                link: "Mute Promo Popup",
                context: "Mute"
            };
            break;
        case "solo":
            o = {
                title: "Bass line is hard to hear?",
                cta: n.isPhone ? "Solo it in our app!" : "Solo it on Plus!",
                source: "solo_promo_popup",
                link: "Solo Promo Popup",
                context: "Solo"
            };
            break;
        case "retune":
            o = {
                title: "Don’t want to retune the guitar?",
                cta: n.isPhone ? "Pitch shift the tab in our app!" : "Pitch shift the tab on Plus!",
                source: "retune_promo_popup",
                link: "Retune Promo Popup",
                context: "Retune"
            }
    }
    let l = () => {
        t("curiosity/setConversionProps", {
            "Last referring link": o.link
        }),
            t("promo/dismiss")
    };
    return s(e3, null, i && s(eb, {
        ...sb,
        key: "popup"
    }, s("aside", {
        className: sg.pane,
        id: "promo"
    }, s("h2", {
        className: sg.title
    }, o.title), s("p", {
        className: sg.subtitle
    }, o.cta), s("div", {
        className: sg.actions
    }, !n.isPhone && s(tp, {
        to: "/a/wa/plus",
        className: r2.buttonGreen,
        onClick: l
    }, "Tell me more!"), n.isPhone && s(sc, {
        source: o.source,
        onClick: l,
        attrs: {
            className: r2.buttonGreen
        }
    }, ss(n.os) ? "Open Google Play" : "Open App Store"), s("a", {
        onClick: a,
        className: r2.buttonLink
    }, "No, thanks")), s("a", {
        onClick: r,
        className: r2.buttonPromoUnsubscribe
    }, "Don’t show ads like that"))))
}, sw = f(() => Promise.all([import("./UTRecorder.a1fd9e5e.js"), eX(["/static/latest/UTRecorder.0420d2af021d9053.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/FormError.b880d263c7949fde.css", "/static/latest/Input.2762c3e20d6520b6.css"])]).then(t => t[0]));
function sE() {
    let {
        ut: t
    } = te("ut"),
        e = t.stage;
    if (e === rz)
        return;
    let [n] = h(t => {
        "Sentry" in window && "function" == typeof window.Sentry.captureException && window.Sentry.captureException(t),
            console && console.error(t)
    });
    return n ? null : d(p, {
        fallback: void 0,
        children: d(sw, this.props)
    })
}
let sk = "Cpv1d", sS = "Cpvpq", sx = "Cpv6d", sT = "Cpv2kr", s3 = "Cpv2kr Cpv1th", s1 = "Cpv2kr Cpv1x", sL = {
    wrapper: "Cpv1d",
    controls: "Cpvpq",
    right: "Cpv6d",
    link: "Cpv2kr",
    active: "Cpv2kr Cpv1th",
    small: "Cpv2kr Cpv1x"
};
class sN extends Error {
    constructor(t, e, ...n) {
        super(...n),
            Error.captureStackTrace && Error.captureStackTrace(this, sN),
            this.name = "ValidationError",
            this.reasons = t,
            this.message = e || "Form validation failed."
    }
}
class sI extends sN {
    constructor(t, e, ...n) {
        super(t, e, ...n),
            Error.captureStackTrace && Error.captureStackTrace(this, sI),
            this.name = "ValidationWarning"
    }
}
class s2 extends Error {
    constructor(...t) {
        super(...t),
            Error.captureStackTrace && Error.captureStackTrace(this, s2),
            this.name = "FraudError",
            this.message = "Email verification failed."
    }
}
class s8 extends Error {
    constructor(t, ...e) {
        super(...e),
            Error.captureStackTrace && Error.captureStackTrace(this, s2),
            this.name = "RestrainError",
            this.action = t,
            this.message = "Your actions appear suspicious."
    }
}
class sA extends Error {
    constructor(...t) {
        super(...t),
            Error.captureStackTrace && Error.captureStackTrace(this, sA),
            this.name = "FetchError",
            this.message = "Network error occurred. Please try again later."
    }
}
class s7 extends Error {
    constructor(t, e, ...n) {
        super(...n),
            Error.captureStackTrace && Error.captureStackTrace(this, s7),
            this.name = "NetworkError",
            this.status = t,
            this.message = `${t} ${e}.`,
            "undefined" != typeof navigator && (this.onLine = navigator && navigator.onLine)
    }
}
async function sC(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    n = n || {
        method: "get",
        credentials: "include"
    },
        e = {
            ...e,
            Accept: "application/json",
            "Content-Type": "application/json"
        };
    try {
        return await fetch(t, {
            ...n,
            headers: e
        })
    } catch (i) {
        throw new sA
    }
}
async function sP(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    i = i || {
        method: "post",
        credentials: "include"
    },
        n = {
            ...n,
            Accept: "application/json",
            "Content-Type": "application/json"
        };
    let r = JSON.stringify(e);
    try {
        return await fetch(t, {
            ...i,
            headers: n,
            body: r
        })
    } catch (s) {
        throw new sA
    }
}
function s6(t) {
    if (!t.ok)
        throw new s7(t.status, t.statusText)
}
async function sO(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    e = e || await t.json();
    let n = 412 === t.status && "reCAPTCHA Validation Failed" === e.message,
        i = 400 === t.status && "reCAPTCHA Validation Failed." === e.message;
    if (n || i)
        throw new sN({
            __all__: "Please wait for reCAPTCHA logo to appear"
        }, e.message)
}
async function s9(t, e) {
    if (429 === t.status)
        throw new s8(e)
}
async function s4(t, e) {
    if (403 === t.status) {
        let n = await t.json(),
            i = n.message || e;
        throw new sN({
            __all__: i
        }, i)
    }
}
async function sR(t) {
    if (422 === t.status) {
        let e = await t.json();
        throw new sN(e.message || e.data || e)
    }
}
async function sD(t) {
    if (!t.ok) {
        let e = await t.json(),
            n = e.message || e,
            i = e.reasons || {
                __all__: n
            };
        if (await sO(t, e), 422 === t.status && "You have incorrect email." === n)
            throw new s2;
        throw new sN(i, n)
    }
}
async function sM(t) {
    if ([400, 422, 423].includes(+t.status)) {
        let e = await t.json();
        if (423 === t.status)
            throw new sI(e.reasons);
        throw new sN(e.reasons || e)
    }
}
async function sB(t) {
    if (!t.ok && 409 !== t.status)
        throw Error("Oops, something went wrong. Please try again later")
}
function s5(t) {
    return t
}
async function sF(t, e) {
    let n = s5(`/api/song/${t.songId}`),
        i = await fetch(n, {
            method: "delete",
            credentials: "include",
            signal: e
        });
    return e && e.aborted ? {
        success: !1
    }
        : (s6(i), await sR(i), s4(i, "Forbidden"), {
            success: !!i.ok
        })
}
async function sH(t, e, n) {
    let i = s5("/api/sound/update"),
        r = await sP(i, {
            revisionId: t,
            version: e
        });
    n && n.aborted || s6(r)
}
async function sW(t, e, n) {
    let i = s5("/api/sound/generate"),
        r = await sP(i, {
            revisionId: t,
            version: e
        });
    n && n.aborted || s6(r)
}
function sV(t, e) {
    return !t || "AllCountries" !== t.restriction && t.restriction !== e
}
let sU = "undefined" != typeof window && !!window.requestAnimationFrame, sX = t => t < 100 ? 50 : 100;
function sG(t) {
    try {
        return JSON.parse(window.localStorage.getItem(t))
    } catch (e) {
        return null
    }
}
function sz(t, e) {
    try {
        e ? window.localStorage.setItem(t, JSON.stringify(e)) : window.localStorage.removeItem(t)
    } catch (n) { }
}
var sj = {
    get: sG,
    set: sz
};
let sq = window.performance && window.performance.now ? window.performance.now.bind(window.performance) : Date.now;
function sY(t, e) {
    var n = this;
    let i;
    return function () {
        for (var r = arguments.length, s = Array(r), a = 0; a < r; a++)
            s[a] = arguments[a];
        let o = () => t.apply(n, s);
        clearTimeout(i),
            i = setTimeout(o, e)
    }
}
function sK(t, e) {
    let n = !1;
    return i => {
        n || (t(i), n = !0, setTimeout(() => {
            n = !1
        }, e))
    }
}
let sJ = ["scroll", "keydown", "click", "mousemove", "mousedown"];
class sQ {
    constructor() {
        this.hasFirstActivity = !1,
            this.reset(),
            this.engage(),
            this.trackFirstActivity()
    }
    engage() {
        for (let t of sJ)
            window.addEventListener(t, this.trackActivity)
    }
    disengage() {
        for (let t of sJ)
            window.removeEventListener(t, this.trackActivity)
    }
    reset() {
        this.setIsActive(!1)
    }
    trackFirstActivity() {
        sJ.forEach(t => window.addEventListener(t, () => {
            this.hasFirstActivity = !0
        }, {
            once: !0
        }))
    }
    trackActivity = sK(() => {
        this.lastActivityTimestampMs = sq()
    }, 200);
    setIsActive(t) {
        !this.isActive && t ? this.disengage() : this.isActive && !t && this.engage(),
            this.lastActivityTimestampMs = sq(),
            this.isActive = t
    }
    getTimeSinceLastActivity() {
        return this.isActive ? 0 : Math.round((sq() - this.lastActivityTimestampMs) / 6e4)
    }
}
let sZ = new sQ, at = {
    solo: "s",
    focus: "f",
    mute: "m"
}, ae = "hasUpdatedSoundV4";
function an(t, e) {
    var n,
        i,
        r;
    let s = (null === (n = e.new_sound) || void 0 === n ? void 0 : n.segment) === "drop",
        a = (null === (i = e.sound_v4) || void 0 === i ? void 0 : i.segment) === "drop";
    return a ? z.V2 : s ? z.V1 : t.isDesktop || (null === (r = e.sound_v4_mobile) || void 0 === r ? void 0 : r.segment) === "on" ? z.V4 : z.MASTER
}
async function ai(t) {
    try {
        let e = "hasUpdatedSoundV4",
            n = sG(e) || [];
        if (n.includes(t.revisionId))
            return;
        let i = t.revisionId;
        sz(e, [...n, i]),
            await sH(t.revisionId, z.V4)
    } catch (r) {
        console.warn("error triggering audio update request (v4)")
    }
}
async function ar(t, e, n, i, r) {
    let s = t.get(),
        a = s.meta.current;
    if (!a)
        return;
    let {
        type: o,
        audio: l,
        forcedVersion: u
    } = s.player,
        c = sX(s.player.speed),
        d = !!(null !== l.context && window && window.Worker),
        h = an(s.device, s.experiments);
    if (r || u ? h = r || u : iI.has(a, h) || (h = z.MASTER), !iI.has(a, h)) {
        let p = iI.getAll(a);
        h = p[p.length - 1] || z.MASTER
    }
    let f = iL(h),
        g = a[f.audioHashPropertyName];
    if (l && g && d && sU) {
        let m = `${e}/${i}/${g}/${c}/${at[o]}/${n}.opus`;
        t.dispatch("player/open", {
            url: m,
            version: h
        })
    }
}
let as = t => {
    t.on("curiosity/vpt10", t => {
        var e;
        if ("bot" === t.device.type || t.isTestMode)
            return;
        let n = null === (e = t.meta) || void 0 === e ? void 0 : e.current;
        !(!n || iI.has(n, z.V4)) && (sZ.getTimeSinceLastActivity() >= 5 || ai(n))
    }),
        t.on("meta/load:done", (e, n) => {
            let {
                songId: i,
                partId: r,
                current: s
            } = n;
            if (sV(s, e.device.country) && (ar(t, i, r, s.revisionId), "bot" === e.device.type || e.isTestMode))
                return
        })
}, aa = t => {
    var e;
    let {
        profile: n
    } = t, {
        dispatch: i,
        meta: r,
        player: a,
        experiments: o,
        device: l
    } = te("meta", "player", "experiments", "device"),
        u = r.current && a.version,
        d = n.admin || (null === (e = o.new_sound_control) || void 0 === e ? void 0 : e.segment) === "on",
        h = n.admin;
    if (!u || !d)
        return;
    let p = iI.get(r.current, a.version),
        f = i1.decode(p.audio),
        g = i1.decode(p.midi),
        m = "??",
        $ = "??",
        _ = "??";
    g && (m = g.numericVersion.toString(), $ = g.payload),
        f && (_ = f.numericVersion.toString());
    let y = m && s("a", $ && {
        className: sL.link,
        href: `https://github.com/songsterr/songsterr-processor-midi/commit/${$}`,
        target: "_blank"
    }, `midi: ${m}`),
        v = `audio: ${_}`,
        b = h && s("span", null, "　|　", y, " ", v),
        w = (t, e) => {
            t.preventDefault(),
                i("editor/sound:generate", {
                    version: e
                })
        },
        E = (t, e) => {
            t.preventDefault(),
                i("editor/sound:toggle", {
                    version: e
                })
        },
        k = (t, e) => {
            t.preventDefault(),
                document.firstElementChild.setAttribute("color-scheme", e)
        },
        S = s(c, null, "　|　", s("a", {
            className: sL.link,
            onClick: t => k(t, "light")
        }, "Light"), " ", s("a", {
            className: sL.link,
            onClick: t => k(t, "dark")
        }, "Dark"), " ", "　|　", s("a", {
            className: sL.small,
            onClick: t => w(t, z.V2)
        }, "Generate V2"), " ", s("a", {
            className: sL.small,
            onClick: t => w(t, z.V4)
        }, "Generate V4"), " ", s("a", {
            className: sL.small,
            onClick: t => w(t, z.DEV)
        }, "Generate Next"), " "),
        x = t => {
            let e = iL(t),
                n = !iI.has(r.current, t);
            return s("a", {
                className: a.version === e.version ? sL.active : sL.link,
                disabled: n,
                onClick: e => E(e, t)
            }, e.displayName)
        },
        T = function (t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return e && !h ? [] : [x(t), " "]
        },
        L = an(l, o),
        N = iL(L);
    return s("div", {
        className: sL.wrapper
    }, s("div", {
        className: sL.controls
    }, s("div", null, "", `Default: ${N.displayName}`, "　|　"), s("div", null, "Sound: ", ...T(z.V1, !0), ...T(z.V2), ...T(z.V4), ...T(z.DEV, !0), b), s("div", {
        className: sL.right
    }, "　|　", "List: ", s("a", {
        className: sL.small,
        href: "https://www.songsterr.com/api/sound/v2",
        target: "_blank"
    }, "V2"), " ", s("a", {
        className: sL.small,
        href: "https://www.songsterr.com/api/sound/dev",
        target: "_blank"
    }, "V3"), " ", s("a", {
        className: sL.small,
        href: "https://www.songsterr.com/api/sound/v4",
        target: "_blank"
    }, "V4"), " ", h && " ", h && S)))
}, ao = "ju1pe", al = {
    placeholder: "ju1pe"
}, au = "Cblr3", ac = ao + " Cbl2bs", ad = "Cbl17o", ah = {
    wrap: "Cblr3",
    inner: ao + " Cbl2bs",
    banner: "Cbl17o"
};
var ap = "/static/media/et640en.441770dd.png", af = "/static/media/et640ru.489aa22c.png", ag = "/static/media/rra640en.2ff86105.png", am = "/static/media/rra640ru.3dfded89.png";
let a$ = ["touchstart", "click", "scroll", "mousewheel", "mousemove", "mousedown"], a_ = t => t && t.replace(/["'=!+#*~;^()<>[\],&]/ig, "");
async function ay() {
    return "prod" !== window.__STAGE__ ? null : Promise.all([to("https://www.googletagservices.com/tag/js/gpt.js", "__LOADED_GTP__").catch(() => { }), to("https://cdn-b.notsy.io/sng/" + ("stage" === window.__STAGE__ ? "alpha.js" : "prebid.js"), "__LOADED_NOTSY__"),])
}
function av(t) {
    let {
        route: e,
        block: n,
        options: i,
        personalization: r,
        songId: s,
        artist: a,
        song: o,
        device: l
    } = t;
    if (!i.isForced && e.page !== i.page)
        return;
    let u = [];
    i.isTargeted && (s && u.push(["songID", s]), a && u.push(["artist", a]), o && u.push(["song", o]));
    let c = {
        page: n,
        npa: !r,
        targeting: u,
        gdpr: l.hasGDPR
    };
    l.hasGDPR && l.hasCCPA || (c.country = l.country),
        window.notsyInit(c)
}
async function ab(t) {
    try {
        await ay(),
            t("notsy/load:done", {
                loaded: window.__LOADED_NOTSY__
            })
    } catch (e) {
        t("notsy/load:error")
    }
}
function a0(t, e) {
    let {
        dispatch: i,
        ads: r,
        meta: s,
        chords: a,
        route: o,
        routeContent: l
    } = te("ads", "meta", "chords", "route", "routeContent"),
        u = window.__HAS_BEEN_SEEN_BEFORE__ || sZ.hasFirstActivity,
        [c, d] = n(u);
    m(() => {
        if (!c) {
            let t = () => {
                d(!0),
                    a$.forEach(e => window.removeEventListener(e, t))
            };
            return a$.forEach(e => window.addEventListener(e, t)),
                () => a$.forEach(e => window.removeEventListener(e, t))
        }
    }, [c]),
        m(() => {
            if (!c || r.notsyFailed)
                return;
            if (!r.notsyLoaded) {
                i("notsy/load");
                return
            }
            if ("tab" === o.page) {
                let {
                    songId: n
                } = o;
                if (s.loading || +n !== s.songId)
                    return
            }
            if ("chords" === o.page) {
                let {
                    songId: u
                } = o;
                if (a.loading || +u !== a.songId)
                    return
            }
            let d = {
                route: o,
                block: t,
                options: e,
                personalization: !0,
                songId: 0,
                artist: "",
                song: ""
            };
            "tab" === l.page && (d.artist = a_(s.current && s.current.artist), d.song = a_(s.current && s.current.title), d.songId = s.songId),
                "chords" === l.page && (d.artist = a_(a.current && a.current.artist), d.song = a_(a.current && a.current.title), d.songId = a.songId),
                i("notsy/fire", d)
        }, [r, t, c, s, a, e, o, l])
}
let aw = t => {
    t.on("notsy/load", () => ab(t.dispatch)),
        t.on("notsy/load:done", (t, e) => {
            let {
                loaded: n
            } = e;
            return {
                ads: {
                    ...t.ads,
                    notsyLoaded: n,
                    notsyFailed: !n
                }
            }
        }),
        t.on("notsy/load:error", t => ({
            ads: {
                ...t.ads,
                notsyLoaded: !1,
                notsyFailed: !0
            }
        })),
        t.on("notsy/fire", (t, e) => {
            av({
                ...e,
                device: t.device
            })
        })
}, aE = "https://apps.apple.com/app/apple-store/id1600207375?pt=414338&ct=srwm-banner-320x50&mt=8", ak = "https://play.google.com/store/apps/details?id=ru.demax.rhythmerr&referrer=utm_source%3DSRWMbanner320x50";
function aS(t) {
    let e = ss(t.os),
        n = ["ru", "ru-mo", "be", "uk"].some(e => -1 !== t.languages.indexOf(e));
    return {
        alt: e ? "Master rhythm skills with Rhythm Trainer by Songsterr" : "Ear training reinvented",
        event: e ? "Clicked on RRA banner" : "Clicked on ET banner",
        link: e ? "https://play.google.com/store/apps/details?id=ru.demax.rhythmerr&referrer=utm_source%3DSRWMbanner320x50" : "https://apps.apple.com/app/apple-store/id1600207375?pt=414338&ct=srwm-banner-320x50&mt=8",
        image: e ? n ? am : ag : n ? af : ap
    }
}
let ax = g(() => {
    let t = $(), {
        dispatch: e,
        ads: n,
        device: i
    } = te("ads", "device"), {
        alt: r,
        event: a,
        link: o,
        image: l
    } = aS(i),
        u = () => e("curiosity/event", {
            event: a
        });
    return a0("tab_page_mobile", {
        isTargeted: !0,
        page: "tab"
    }),
        m(() => {
            let e = t.current;
            if (e)
                try {
                    let n = document.getElementById("header"),
                        i = new IntersectionObserver(t => {
                            t.forEach(t => {
                                t.isIntersecting ? e.classList.contains("hidden") && e.classList.remove("hidden") : e.classList.contains("hidden") || e.classList.add("hidden")
                            })
                        }, {
                            rootMargin: "-120px 0px 0px 0px"
                        });
                    return n && i.observe(n),
                        () => i.disconnect()
                } catch (r) { }
        }, [t]),
        s("section", {
            id: "showroom_header",
            className: ah.wrap,
            ref: t
        }, s("div", {
            id: "Redesign_ATF_tab_page_320х50",
            className: ah.inner
        }, n.notsyFailed && s("a", {
            className: ah.link,
            onClick: u,
            href: o,
            target: "_blank"
        }, s("img", {
            src: l,
            className: ah.banner,
            alt: r
        }))))
}), aT = 12, a3 = 13, a1 = 25, aL = 18, aN = 5, aI = 12, a2 = 8, a8 = 12, aA = 5, a7 = 4, aC = 12, aP = 22, a6 = 12, aO = 4, a9 = 2, a4 = 2, aR = 0, aD = 0, aM = -5, aB = 4, a5 = 12, aF = -3;
function aH(t) {
    return -1 * Math.floor(t.width / 2)
}
function aW(t, e, n) {
    let i = aH(e),
        r = t.layout.absoluteX + i,
        s = r + e.width,
        a = 0;
    return n >= r && (a = n - r + 1), {
        x1: r,
        x2: s,
        diff: a
    }
}
function aV(t) {
    let e = t.layout.absoluteX - 6;
    return {
        x1: e,
        x2: e + 12
    }
}
function aU(t) {
    let e = t.layout.absoluteX - 5;
    return {
        x1: e,
        x2: e + 10
    }
}
function aX(t) {
    let e = t.layout.absoluteX - 5;
    return {
        x1: e,
        x2: e + 13
    }
}
function aG(t, e) {
    let n = e.text.length < 4 ? -1 * Math.floor(e.width / 2) : -10,
        i = t.layout.absoluteX + n,
        r = i + e.width;
    return {
        x1: i,
        x2: r
    }
}
function az(t, e) {
    let n = e.width,
        i = t.layout.absoluteX - Math.floor(n / 2);
    return {
        x1: i,
        x2: i + n
    }
}
function aj(t, e) {
    return t.x1 <= e.x1 && e.x1 < t.x2 || e.x1 <= t.x1 && t.x1 < e.x2
}
let aq = ["staccato", "accentuated", "heavyAccentuated"], aY = {
    tripletFeel: 1e3,
    capo: 100,
    measureMarker: 90,
    measureTempo: 80,
    lineHangingText: 70,
    beatText: 70,
    measureAlternateEnding: 70,
    letRing: 60,
    palmMute: 60,
    harmonic: 60,
    vibrato: 60,
    wideVibrato: 60,
    beatChord: 50,
    beatLyrics: 50,
    staccato: 40,
    beatTapping: 30,
    accentuated: 20,
    heavyAccentuated: 20,
    measureNumber: 0,
    beatHat: 0,
    noteBend: 0
}, aK = {
    capo: 18,
    letRing: 14,
    palmMute: 14,
    harmonic: 14,
    vibrato: 7,
    wideVibrato: 8,
    lineHangingText: 18,
    measureNumber: 5,
    measureAlternateEnding: 14,
    measureMarker: 18,
    measureTempo: 16,
    beatText: 18,
    beatChord: 17,
    beatLyrics: 14,
    beatTapping: 11,
    tripletFeel: 42,
    beatHat: 10,
    accentuated: 10,
    heavyAccentuated: 12,
    staccato: 10
}, aJ = 22;
class aQ {
    constructor() {
        this.levels = new Map,
            this.height = 0
    }
    _getLevel(t) {
        let e = this.levels.get(t);
        return e || (e = [], this.levels.set(t, e)),
            e
    }
    acquireLayer(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = aK[t];
        return this.acquireLayerWithHeight(t, i, e, n)
    }
    acquireLayerWithHeight(t, e, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            r = aY[t],
            s = {
                effect: t,
                voice: i,
                visible: !0,
                x1: n.x1,
                x2: n.x2,
                height: e,
                y: 0,
                diff: n.diff
            },
            a = this._getLevel(r);
        if (a.length && aq.includes(s.effect))
            for (let o of a)
                o.x1 === s.x1 && o.x2 === s.x2 && o.effect === s.effect && (o.voice = 0, s.visible = !1);
        return a.push(s),
            s
    }
    _fitLayer(t, e, n, i) {
        let r = t,
            s = "beatLyrics" === e.effect;
        if (n > 0 && !s)
            for (let a of i)
                aj(a, e) && (r = Math.max(r, a.y + a.height));
        e.y = r,
            this.height = Math.max(this.height, e.y + e.height),
            i.push(e)
    }
    shake() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 22,
            e = [];
        this.height = t;
        let n = Array.from(this.levels.keys()).sort((t, e) => t - e);
        for (let i of n) {
            let r = this.levels.get(i) || [];
            for (let s of r)
                s.visible && this._fitLayer(t, s, i, e)
        }
    }
}
class aZ {
    constructor(t, e) {
        this.layers = new aQ,
            this.bottomLayers = new aQ,
            this.x = 0,
            this.y = 0,
            this.maxX = t,
            this.maxY = 0,
            this.minX = 0,
            this.line = e,
            this.height = 0,
            this.measureLayouts = [],
            this.unscaledWidth = 0
    }
    get intervalSize() {
        var t;
        return (null === (t = this.placement) || void 0 === t ? void 0 : t.intervalSize) || 0
    }
}
function ot(t) {
    return t.y + t.layers.height
}
function oe(t) {
    return t.y + 12 - 5
}
function on(t) {
    return t.height - 24 + 10
}
class oi {
    constructor() {
        this.x = 0,
            this.originX = 0,
            this.absoluteX = 0,
            this.absoluteLoopLeftX = 0,
            this.absoluteLoopRightX = 0,
            this.duration = Number.MAX_VALUE,
            this.beats = [],
            this.occurrences = [],
            this.shifts = [],
            this.usedStrings = 0,
            this.usedRest = !1
    }
}
function or(t) {
    return ot(t.measureLayout.lineLayout)
}
function os(t) {
    return t.measureLayout.lineLayout.maxX
}
function oa(t) {
    return t.measureLayout.lineLayout.minX
}
function oo(t) {
    return t.occurrences[0]
}
function ol(t) {
    return t.occurrences[t.occurrences.length - 1]
}
function ou(t) {
    return t.occurrences[0]
}
function oc(t) {
    return t.occurrences[0] + t.duration
}
function od(t) {
    return t.occurrences[t.occurrences.length - 1] + t.duration
}
function oh(t, e) {
    return t.layout.measureLayout.lineLayout !== e.layout.measureLayout.lineLayout
}
function op(t, e) {
    return t.layout.measureLayout !== e.layout.measureLayout
}
function of(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (t === e && !n)
        return 0;
    let i = e.layout.x;
    if (n) {
        let r = e.nextBeat;
        r && (i = r.layout.x, op(e, r) && (i += e.layout.measureLayout.width))
    }
    let s = t.layout.measureLayout.x + i - t.layout.absoluteX,
        a = e.layout.measureLayout,
        o = t.layout.measureLayout,
        l = t;
    for (; l && o !== a;) {
        let u = l.layout.measureLayout;
        o !== u && (s += o.width, o = u),
            l = l.nextBeat
    }
    return s
}
function og(t) {
    let e = ov(t).beat,
        n = e.nextBeat ? e.nextBeat : e;
    return oh(oy(t).beat, n)
}
function om(t) {
    return oh(oy(t).beat, ov(t).beat)
}
class o$ {
    constructor(t) {
        this.refs = [t],
            this.keep = !0,
            this.layer = null
    }
}
function o_(t, e) {
    t.refs.push(e)
}
function oy(t) {
    return t.refs[0]
}
function ov(t) {
    return t.refs[t.refs.length - 1]
}
let ob = {
    family: "Arial",
    size: 13,
    style: "normal"
}, o0 = " ", ow = 3.6118, oE = "…", ok = 13, oS = t => function (e, n, i) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
        s = e.split(o0),
        a = s[0],
        o = t(a, ob),
        l = 1;
    for (; l < s.length - 1; l++) {
        let u = t(s[l], ob);
        if (o + 3.6118 + u > i)
            break;
        a += o0 + s[l],
            o += 3.6118 + u
    }
    let c = r ? "…" : "",
        d = r ? 13 : 0;
    a += c;
    let h = c + s.slice(l).join(" ");
    return {
        phrase: {
            text: a,
            width: o + d,
            layer: null
        },
        rest: {
            text: h,
            width: n - o + d,
            layer: null
        }
    }
}, ox = new Map;
function oT(t, e, n) {
    let i = ox.get(n.family);
    i || (i = new Map, ox.set(n.family, i));
    let r = i.get(n.style);
    r || (r = new Map, i.set(n.style, r));
    let s = r.get(n.size);
    s || (s = new Map, r.set(n.size, s));
    let a = s.get(e);
    return void 0 !== a || (a = t(e, n), s.set(e, a)),
        a
}
let o3 = t => function (e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ob;
    return e && e.length ? oT(t, e, n) : 0
};
class o1 {
    static textWidth;
    static fitTextToAvailableWidth
}
let oL = null;
function oN(t, e) {
    let n = !0;
    ("undefined" == typeof document || "function" != typeof document.createElement) && (n = !1),
        oL = n ? document.createElement("canvas") : null;
    let i = oL && "function" == typeof oL.getContext ? oL.getContext("2d") : null;
    if (!(n = !!i && "function" == typeof i.measureText) || !i)
        return 0;
    let r = {
        style: "normal",
        constraint: "normal",
        weight: "normal",
        size: ob.size,
        family: ob.family,
        align: "start",
        baseline: "alphabetic"
    },
        s = {
            ...r,
            ...e
        };
    return i.font = `${s.style} ${s.constraint} ${s.weight} ${s.size}px ${s.family}`,
        i.textAlign = s.align,
        i.textBaseline = s.baseline,
        +i.measureText(t).width.toFixed(4)
}
let oI = o3(oN), o2 = oS(oI);
class o8 extends o1 {
    static textWidth(t, e) {
        return oI(t, e)
    }
    static fitTextToAvailableWidth(t, e, n, i) {
        return o2(t, e, n, i)
    }
}
let oA = {
    bpm: 100,
    type: 4,
    position: 0
};
function o7(t, e) {
    t.x = Math.floor(t.originX * e),
        t.width = Math.floor(t.originWidth * e);
    let n = t.beatsLayouts,
        i = t.tempoLayouts,
        r = n[0];
    if (r) {
        for (let s of (r.absoluteLoopLeftX = t.x, i))
            s.measureOffset = Math.floor(s.originMeasureOffset * e);
        for (let a of n) {
            var o;
            if (a.x = Math.floor((((null === (o = a.measureLayout) || void 0 === o ? void 0 : o.firstBeatXOffset) || 0) + a.originX) * e), a.absoluteX = t.x + a.x, r !== a) {
                let l = a.x - r.x,
                    u = l < 40 ? .5 : .8,
                    c = Math.floor(l * u);
                r.absoluteLoopRightX = r.absoluteX + c,
                    a.absoluteLoopLeftX = a.absoluteX - (l - c)
            }
            r = a
        }
        r.absoluteLoopRightX = t.x + t.width
    }
}
function oC(t, e) {
    let n = t.layouts[0],
        i = Math.floor((n.width - e.measureOffset) * e.tempo.position),
        r = n.x + e.measureOffset + i,
        s = r + (e.tempo.bpm >= 100 ? 44 : 35);
    return {
        x1: r,
        x2: s
    }
}
function oP(t, e) {
    let n = t.layouts[0].x,
        i = n + e.width;
    return {
        x1: n,
        x2: i
    }
}
function o6(t) {
    let e = t.layouts[t.layouts.length - 1],
        n = e.x,
        i = n + e.width - 6;
    return {
        x1: n,
        x2: i
    }
}
function oO(t) {
    let e = t.layouts[0].x;
    return {
        x1: e,
        x2: e + 90
    }
}
function o9(t) {
    return t.layouts[0]
}
function o4(t) {
    return t.layouts[t.layouts.length - 1]
}
let oR = [[{
    key: 38,
    value: {
        name: "AS",
        string: 1.5
    }
}, {
    key: 40,
    value: {
        name: "ES",
        string: 2.5
    }
}
], [{
    key: 35,
    value: {
        name: "ABD",
        string: 3.5
    }
}, {
    key: 36,
    value: {
        name: "BD",
        string: 4.5
    }
}
], [{
    key: 41,
    value: {
        name: "LFT",
        string: 3.5
    }
}, {
    key: 43,
    value: {
        name: "HFT",
        string: 2.5
    }
}
], [{
    key: 47,
    value: {
        name: "LMT",
        string: 1
    }
}, {
    key: 48,
    value: {
        name: "HMT",
        string: .5
    }
}
], [{
    key: 51,
    value: {
        name: "RC1",
        string: 0
    }
}, {
    key: 59,
    value: {
        name: "RC2",
        string: 0
    }
}
], [{
    key: 49,
    value: {
        name: "CC1",
        string: -1
    }
}, {
    key: 57,
    value: {
        name: "CC2",
        string: 0
    }
}
], [{
    key: 60,
    value: {
        name: "HBG",
        string: 2.5
    }
}, {
    key: 61,
    value: {
        name: "LBG",
        string: 3
    }
}
], [{
    key: 76,
    value: {
        name: "HWB",
        string: 1
    }
}, {
    key: 77,
    value: {
        name: "LWB",
        string: 1.5
    }
}
],], oD = {
    hq: "High Q",
    sl: "Slap",
    Ssh: "Scratch Push",
    Sll: "Scratch Pull",
    Stx: "Sticks",
    sc: "Square Click",
    mc: "Metronome Click",
    mb: "Metronome Bell",
    BD: "Bass Drum",
    ABD: "Acoustic Bass Drum",
    HC: "Hand Clap",
    S: "Snare",
    AS: "Acoustic Snare",
    ES: "Electric Snare",
    SS: "Snare Side Stick",
    SR: "Snare Rim Shot",
    xH: "Closed Hi Hat",
    oH: "Open Hi Hat",
    fH: "Foot Hi Hat",
    hH: "Half Hi Hat",
    HT: "High Tom",
    LT: "Low Tom",
    FT: "Floor Tom",
    LFT: "Low Floor Tom",
    HFT: "High Floor Tom",
    MT: "Mid Tom",
    LMT: "Low-Mid Tom",
    HMT: "Hi-Mid Tom",
    CC: "Crash Cymbal",
    CC1: "Crash Cymbal 1",
    CC2: "Crash Cymbal 2",
    RC: "Ride Cymbal",
    RC1: "Ride Cymbal 1",
    RC2: "Ride Cymbal 2",
    RE: "Ride Edge",
    SC: "Splash Cymbal",
    cC: "Chinese Cymbal",
    rb: "Ride Bell",
    ta: "Tambourine",
    cb: "Cowbell",
    hcb: "High Cowbell",
    lcb: "Low Cowbell",
    vs: "Vibraslap",
    BG: "Bongo",
    HBG: "Hi Bongo",
    LBG: "Low Bongo",
    xC: "Mute Hi Conga",
    oC: "Open Hi Conga",
    LC: "Low Conga",
    ht: "High Timbale",
    lt: "Low Timbale",
    ha: "High Agogo",
    la: "Low Agogo",
    ca: "Cabasa",
    ma: "Maracas",
    SW: "Short Whistle",
    LW: "Long Whistle",
    SG: "Short Guiro",
    LG: "Long Guiro",
    cl: "Claves",
    WB: "Wood Block",
    HWB: "Hi Wood Block",
    LWB: "Low Wood Block",
    xU: "Mute Cuica",
    oU: "Open Cuica",
    xT: "Mute Triangle",
    oT: "Open Triangle",
    Sh: "Shaker",
    JB: "Jingle Bell",
    BT: "Bell Tree",
    Cs: "Castinets",
    xS: "Mute Surdo",
    oS: "Open Surdo"
}, oM = [3, 3, 1, -1, 1.5, 1.5, 1.5, 1.5, 4.5, 4.5, 1.5, 1.5, 1.5, 1.5, 3, - .5, 3, 5.5, 2, - .5, 1, 1, -1, 0, 0, -1, .5, 2.5, 0, 0, -1, 4.5, 0, 2.5, 2.5, 4.5, 4.5, 5, 5, 5.5, .5, 1, 4.5, 3.5, 5, 5.5, -1.5, -1, 2.5, 1, 1, 5.5, 5.5, - .5, - .5, -1, -1, -1, -1.5, 6, 6];
oM[64] = 1.5, oM[65] = -1, oM[66] = 0;
let oB = [3, 3, 1, -1.5, 1.5, 1.5, 2, 2, 4, 3.5, 1.5, 1.5, 1.5, 1.5, 2.5, - .5, 3, 4.5, 2.5, - .5, 2, 1, -1, .5, 0, -1.5, 0, 1.5, -1, 0, - .5, 5, 1, 2, 3, 4.5, 4.5, 5, 4, 4.5, 5, 5.5, 4.5, 3.5, 5, 5.5, -1.5, -1, 2.5, 1, 1.5, 4.5, 4.5, - .5, - .5, -1, -1, -1, -1.5, 5, 5];
oB[64] = 1.5, oB[65] = - .5, oB[66] = 0, oB[75] = - .5, oB[72] = .5;
let o5 = {
    hq: 9,
    sl: 6,
    Ssh: 13,
    Sll: 9,
    Stx: 11,
    sc: 8,
    mc: 10,
    mb: 10,
    ABD: 15,
    BD: 10,
    SS: 9,
    S: 5,
    AS: 10,
    HC: 10,
    ES: 9,
    FT: 9,
    LFT: 13,
    xH: 9,
    fH: 7,
    LT: 8,
    LMT: 14,
    oH: 9,
    MT: 10,
    CC: 10,
    CC1: 14,
    HT: 9,
    RC: 10,
    RE: 10,
    RC1: 14,
    cC: 9,
    rb: 7,
    ta: 6,
    SC: 10,
    cb: 8,
    hcb: 10,
    lcb: 10,
    CC2: 14,
    vs: 9,
    RC2: 14,
    BG: 10,
    HBG: 16,
    LBG: 15,
    xC: 9,
    oC: 9,
    LC: 9,
    ht: 7,
    lt: 4,
    ha: 8,
    la: 6,
    ca: 8,
    ma: 10,
    SW: 11,
    LW: 10,
    SG: 10,
    LG: 10,
    cl: 6,
    WB: 14,
    HWB: 17,
    LWB: 16,
    xU: 9,
    oU: 9,
    xT: 8,
    oT: 9,
    Sh: 9,
    JB: 9,
    BT: 9,
    Cs: 9,
    xS: 9,
    oS: 9
}, oF = ["hq", "sl", "Ssh", "Sll", "Stx", "sc", "mc", "mb", "BD", "BD", "SS", "S", "HC", "S", "FT", "xH", "FT", "fH", "LT", "oH", "MT", "MT", "CC", "HT", "RC", "cC", "rb", "ta", "SC", "cb", "CC", "vs", "RC", "BG", "BG", "xC", "oC", "LC", "ht", "lt", "ha", "la", "ca", "ma", "SW", "LW", "SG", "LG", "cl", "WB", "WB", "xU", "oU", "xT", "oT", "Sh", "JB", "BT", "Cs", "xS", "oS"];
function oH(t) {
    for (let e of oR) {
        let n = 0;
        for (let i of e)
            t.has(i.key) && n++;
        if (n > 1)
            for (let r of e)
                t.set(r.key, {
                    ...r.value,
                    fret: r.key
                })
    }
}
function oW(t, e) {
    return {
        string: e,
        name: oF[t - 27] || "*",
        fret: t
    }
}
function oV(t, e) {
    return (e ? oB[t - 27] : oM[t - 27]) || 0
}
function oU(t) {
    return !t.bogus && (!t.tie || !!t.tieShow || !!t.bendStart || !!t.slurStart || !!t.ghost || 0 === t.beat.index)
}
function oX(t, e, n) {
    if (!oU(t))
        return 0;
    if (n && n.usedDrums) {
        let i = n.usedDrums.get(t.fret);
        if (i) {
            let r = i.name || "S",
                s = o5[r] || 0;
            return s + e
        }
        return e
    }
    let a = 4;
    return t.dead ? a = 4 : t.fret >= 10 && (a = 8),
        t.ghost && (a += 5),
        a + e
}
function oG(t, e) {
    let n = e.get(t.fret);
    return n && n.string || 0
}
oF[64] = "SR", oF[65] = "hH", oF[66] = "RE", oF[72] = "lcb", oF[75] = "hcb";
let oz = 5, oj = {
    letRing: oK,
    palmMute: oJ,
    harmonic: oQ,
    vibrato: oZ,
    wideVibrato: oZ
};
function oq(t, e) {
    return {
        x1: e - 120,
        x2: e
    }
}
function oY(t, e) {
    if (!t.start || !t.stop)
        throw Error("Wrong line effect state");
    let n = t.start.absoluteX - 20,
        i = t.stop.absoluteX + 10;
    return i - n < e && (i = n + e), {
        x1: n,
        x2: i
    }
}
function oK(t) {
    return oY(t, 40)
}
function oJ(t) {
    return oY(t, 29)
}
function oQ(t) {
    return oY(t, 38)
}
function oZ(t) {
    let {
        start: e,
        stop: n
    } = t;
    if (!e || !n)
        throw Error("Wrong line effect state");
    let i = null,
        r = n.measureLayout,
        s = r.beatsLayouts,
        a = s.findIndex(t => t === n);
    if (a > -1 && a < s.length - 1)
        i = s[a + 1];
    else {
        let o = r.lineLayout.measureLayouts,
            l = o.findIndex(t => t === r);
        l > -1 && l < o.length - 1 && (i = o[l + 1].beatsLayouts[0])
    }
    let u = e.absoluteX,
        c = i ? i.absoluteX : os(n);
    return {
        x1: u,
        x2: c
    }
}
function lt(t) {
    let e = oy(t).note.bend;
    if (!e)
        throw Error("Wrong state at bend note");
    return -1 * (aM - e.tone / aB)
}
function le() {
    return {
        detected: !1,
        start: null,
        stop: null,
        value: void 0
    }
}
class ln {
    constructor(t, e, n) {
        this.index = t,
            this.strings = e.strings,
            this.effects = [],
            this.spaces = Array(this.strings),
            this.rhythmLines = 0,
            this.layout = new aZ(n, this),
            this.hangingText = [],
            this.capo = 0 === t && e.capo ? {
                capo: e.capo,
                layer: null
            }
                : void 0,
            this.rhythmEffects = {
                tremolo: new Map,
                tuplet: new Map
            }
    }
    joinLineEffect(t, e, n) {
        let i = t[e];
        i && !n.detected && (n.detected = !0, n.value = i, n.start = t.layout),
            i && i === n.value && (n.stop = t.layout),
            i ? n.value && i !== n.value && (this.finishLineEffect(e, n), this.joinLineEffect(t, e, n)) : this.finishLineEffect(e, n)
    }
    finishLineEffect(t, e) {
        if (e.detected) {
            let n = this.layout.layers.acquireLayer(t, oj[t](e));
            this.effects.push({
                effect: t,
                layer: n,
                effectValue: e.value
            }),
                e.detected = !1,
                e.value = void 0,
                e.start = null,
                e.stop = null
        }
    }
    getHangingTextPosition(t) {
        let e = this.layout.minX,
            n = e + t.width;
        return {
            x1: e,
            x2: n
        }
    }
    distribute(t, e, n, i) {
        let r = [];
        this.layout.placement = i;
        let s = t.usedDrums,
            a = n(this);
        for (let o of this.hangingText)
            o.layer = this.layout.layers.acquireLayer("lineHangingText", this.getHangingTextPosition(o));
        let l = this.capo;
        void 0 !== l && (l.layer = this.layout.layers.acquireLayer("capo", oq(l.capo, this.layout.maxX)));
        for (let u = 0; u < this.spaces.length; u++)
            this.spaces[u] = [];
        let c = le(),
            d = le(),
            h = le(),
            p = le(),
            f = le();
        for (let g of this.layout.measureLayouts) {
            let m = g.measure;
            o7(g, a);
            let $ = o9(m) === g;
            this.rhythmLines = Math.max(this.rhythmLines, m.rhythmLines);
            let _ = m.alternateEndingWithLayer;
            if (_ && (_.layer = this.layout.layers.acquireLayer("measureAlternateEnding", o6(m))), $) {
                let y = m.markerWithLayer;
                y && (y.layer = this.layout.layers.acquireLayer("measureMarker", oP(m, y)));
                let v = m.tripletFeelWithLayer;
                v && (v.layer = this.layout.layers.acquireLayer("tripletFeel", oO(m)))
            }
            let b = 0;
            for (let w of g.beatsLayouts)
                for (let E of w.beats)
                    if (E.lyrics) {
                        for (let k of E.lyrics)
                            if (k) {
                                let S = aW(E, k, b);
                                b = S.x2,
                                    k.layer = this.layout.bottomLayers.acquireLayer("beatLyrics", S)
                            }
                    } else {
                        let x = E.originalText;
                        if (x) {
                            let T = this.layout.maxX + 5 - E.layout.absoluteX,
                                L = x;
                            if (L.width > T) {
                                let {
                                    phrase: N,
                                    rest: I
                                } = o8.fitTextToAvailableWidth(L.text, L.width, T, e.hasHellip());
                                L = N,
                                    r.push(I)
                            }
                            L && (L.layer = this.layout.layers.acquireLayer("beatText", aG(E, L)), E.text = L)
                        }
                        let A = E.chord;
                        A && (A.layer = this.layout.layers.acquireLayer("beatChord", az(E, A)));
                        let C = E.tappingWithLayer;
                        for (let P of (C && (C.layer = this.layout.layers.acquireLayer("beatTapping", aG(E, C))), 0 === E.voice && (this.joinLineEffect(E, "letRing", c), this.joinLineEffect(E, "palmMute", d), this.joinLineEffect(E, "harmonic", h), this.joinLineEffect(E, "vibrato", p), this.joinLineEffect(E, "wideVibrato", f)), E.tuplet && E.tuplet > 0 && this.rhythmEffects.tuplet.set(E.voice, !0), E.tremolo && this.rhythmEffects.tremolo.set(E.voice, !0), E.accentuated = void 0, E.heavyAccentuated = void 0, E.staccato = void 0, E.notes)) {
                            if (!P.rest) {
                                let O = s ? oG(P, s) : P.string;
                                if (O % 1 == 0 && O >= 0 && O < t.strings) {
                                    let R = oX(P, 4, t);
                                    if (R) {
                                        let D = E.layout.absoluteX - R,
                                            M = R << 1,
                                            B = this.spaces[O];
                                        if (B) {
                                            let F = B.length;
                                            if (F) {
                                                let H = B[F - 1];
                                                H.x + H.w >= D ? (H.x = Math.min(H.x, D), H.w = E.layout.absoluteX + R - H.x) : B.push({
                                                    x: D,
                                                    w: M
                                                })
                                            } else
                                                B.push({
                                                    x: D,
                                                    w: M
                                                })
                                        }
                                    }
                                    s && (59 == P.fret || 93 == P.fret) && !E.hat && (E.hat = {
                                        type: "ride",
                                        layer: this.layout.layers.acquireLayer("beatHat", aX(E))
                                    }),
                                        1 !== P.accentuated || E.accentuated || (E.accentuated = {
                                            layer: this.layout.layers.acquireLayer("accentuated", aV(E), E.voice)
                                        }),
                                        2 !== P.accentuated || E.heavyAccentuated || (E.heavyAccentuated = {
                                            layer: this.layout.layers.acquireLayer("heavyAccentuated", aV(E), E.voice)
                                        }),
                                        P.staccato && !E.staccato && (E.staccato = {
                                            layer: this.layout.layers.acquireLayer("staccato", aU(E), E.voice)
                                        })
                                }
                            }
                            let W = P.bendStart;
                            if (W) {
                                let V = e.getBendCoordinates(W, P);
                                V.x1 += E.layout.absoluteX,
                                    V.x2 += E.layout.absoluteX,
                                    W.layer = this.layout.layers.acquireLayerWithHeight("noteBend", lt(W), V)
                            }
                        }
                    }
            for (let U of g.tempoLayouts)
                U.layer = this.layout.layers.acquireLayer("measureTempo", oC(m, U))
        }
        this.finishLineEffect("letRing", c),
            this.finishLineEffect("palmMute", d),
            this.finishLineEffect("harmonic", h),
            this.finishLineEffect("vibrato", p),
            this.finishLineEffect("wideVibrato", f),
            this.layout.layers.shake();
        let X = this.rhythmLines * a1,
            G = this.rhythmEffects.tremolo.size * aI,
            z = this.rhythmEffects.tuplet.size * a2,
            j = this.strings * this.layout.intervalSize;
        return this.layout.bottomLayers.shake(j + X + G + z),
            this.layout.layers.height += 12,
            this.layout.height = this.layout.layers.height + this.layout.bottomLayers.height + 12,
            this.layout.maxY = this.layout.y + this.layout.height,
            r
    }
}
class li {
    constructor(t, e) {
        this.measure = t,
            this.x = 0,
            this.width = 0,
            this.firstBeatXOffset = 0,
            this.originX = 0,
            this.originWidth = 0,
            this.lineLayout = e,
            this.beatsLayouts = [],
            this.tempoLayouts = []
    }
    get signatureOffset() {
        var t;
        return (null === (t = this.lineLayout.placement) || void 0 === t ? void 0 : t.signatureOffset(this.measure)) || 0
    }
}
class lr {
    constructor(t) {
        this.startIndex = t.index,
            this.endIndex = 0,
            this.alternateEndings = new Map
    }
}
function ls(t, e, n) {
    t.alternateEndings.set(e, n.index)
}
function la(t, e) {
    return t.alternateEndings.get(e) || 0
}
function lo(t) {
    let e = t.nextNoteOnString;
    return e && !e.tie ? 12 : 0
}
class ll {
    constructor(t) {
        this.width = t
    }
    areBeatsInSameSlice(t, e) {
        return or(t.layout) === or(e.layout)
    }
    getBendCoordinates(t, e) {
        let n = oy(t).beat,
            i = ov(t),
            r = i.note,
            s = r.nextNoteOnString,
            a = !!s && !!s.bendStart && !!s.tie,
            o = a ? i.beat.nextBeat : i.beat;
        if (!o)
            throw Error("Broken constraint");
        let l = of(n, e.beat),
            u = of(n, n),
            c = of(n, o, !a),
            d = c - l - lo(r);
        return {
            x1: u - l,
            x2: d
        }
    }
    bendsForNote(t) {
        let e = t.bendStart || t.bendPart || t.bendEnd;
        return e ? [e] : []
    }
    hasHellip() {
        return !0
    }
}
class lu extends ll {
    calcTabSize(t) {
        return t.reduce((t, e) => ({
            width: Math.max(e.width, t.width),
            height: t.height + e.height
        }), {
            width: 0,
            height: 0
        })
    }
    expectedSliceWidth(t) {
        return this.width
    }
    finalVerticalSeparatorPosition(t) {
        return null
    }
    getBendCoordinates(t, e) {
        let n = super.getBendCoordinates(t, e),
            i = n.x1,
            r = n.x2;
        if (og(t)) {
            let s = oy(t).beat;
            r = os(s.layout) - s.layout.absoluteX - 12
        }
        return {
            x1: i,
            x2: r
        }
    }
    getTieSlurPathLength(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = this.areBeatsInSameSlice(t, e);
        return i ? e.layout.absoluteX - t.layout.absoluteX : n ? e.layout.absoluteX : os(t.layout) - t.layout.absoluteX
    }
    makeScaleStrategy(t) {
        return e => e.index === t - 1 ? 1 : e.layout.maxX / e.layout.unscaledWidth
    }
    normalizeBeatCoordinates(t) {
        for (let e of t)
            delete e.normalizationData
    }
    shouldDrawBendOnNote(t, e) {
        return !!e.bendStart && e.bendStart === t
    }
    stringLineMaxX(t) {
        return t.layout.maxX - 1
    }
}
let lc = 25, ld = 15, lh = 35, lp = 20, lf = 25, lg = 30, lm = (t, e) => 1 / (4 * t / e);
class l$ {
    get distribute() {
        return "fitness"
    }
    get tuningOffset() {
        return 15
    }
    get intervalSize() {
        return 13
    }
    signatureOffset(t) {
        let e = 20;
        return (t.signature[0] > 10 || t.signature[1] > 10) && (e = 35),
            t.repeatStart && (e += 5),
            e
    }
    measureSpaceForSignature(t) {
        let e = 0;
        return t.hasSignature && (e = 20, (t.signature[0] > 10 || t.signature[1] > 10) && (e = 35), t.repeatStart && (e += 5)),
            e
    }
    measureBeatWidth(t, e, n, i, r, s) {
        let a = n ? lm(n, i) : n2(i),
            o = 70 * Math.log(a + 1) + 20;
        return r ? .2 * o : s && !t.measure.repeat ? o - Math.min(o >>> 1, 25) : o
    }
    measureLeftMargin(t) {
        return t.measure.repeatStart ? 30 : 25
    }
}
class l_ {
    constructor(t = "conservative") {
        this.strategy = t
    }
    get distribute() {
        return this.strategy
    }
    get tuningOffset() {
        return 25
    }
    get intervalSize() {
        return 12
    }
    signatureOffset(t) {
        return 35
    }
    measureSpaceForSignature(t) {
        return t.hasSignature ? 35 : 0
    }
    measureBeatWidth(t, e, n, i, r, s) {
        let a = n ? lm(n, i) : n2(i),
            o = 130 * Math.log(a + 1) + 20;
        return r ? .2 * o : o
    }
    measureLeftMargin(t, e) {
        return 25
    }
}
function ly(t, e) {
    let n = [...t.tempoLayoutsByTime.keys()].sort((t, e) => t - e);
    e.tempoLayouts = n.reduce((e, n) => {
        let i = t.tempoLayoutsByTime.get(n);
        return i && e.push(i),
            e
    }, [])
}
function lv(t, e, n, i) {
    let r = e.beatsLayoutsByTime,
        s = new li(e, n.layout);
    e.layouts = [s];
    let a = i.measureSpaceForSignature(e),
        o = [...r.keys()].sort((t, e) => t - e),
        l = 0,
        u = r.get(0),
        c = e.rest && !e.hasLyrics;
    if (u) {
        s.firstBeatXOffset = i.measureLeftMargin(s, !0),
            s.beatsLayouts.push(u),
            u.measureLayout = s;
        for (let d = 1; d < o.length; d++) {
            let h = o[d],
                p = r.get(h);
            p && (u.originX = a, a += i.measureBeatWidth(s, p, t, h - l, c, !1), l = h, u = p, s.beatsLayouts.push(p), p.measureLayout = s)
        }
        u.originX = a,
            a += i.measureBeatWidth(s, u, t, e.duration - l, c, !0),
            l0(s, e, s.firstBeatXOffset + a)
    }
    ly(e, s)
}
function lb(t, e, n, i) {
    let r = e.beatsLayoutsByTime,
        s = new li(e, n.layout);
    ly(e, s),
        e.layouts = [s];
    let a = i.measureSpaceForSignature(e),
        o = [...r.keys()].sort((t, e) => t - e),
        l = 0,
        u = r.get(0),
        c = e.rest && !e.hasLyrics;
    if (u) {
        s.firstBeatXOffset = i.measureLeftMargin(s, !0),
            s.beatsLayouts.push(u),
            u.measureLayout = s;
        for (let d = 1; d < o.length; d++) {
            let h = o[d],
                p = r.get(h);
            p && (u.originX = a, a += i.measureBeatWidth(s, p, t, h - l, c, !1), l = h, u = p, p.beats.every(t => t.beamStart) && (s.originWidth = Math.ceil(s.firstBeatXOffset + a), s = new li(e, n.layout), e.layouts.push(s), s.firstBeatXOffset = i.measureLeftMargin(s, !1), a = 0), s.beatsLayouts.push(p), p.measureLayout = s)
        }
        u.originX = a,
            a += i.measureBeatWidth(s, u, t, e.duration - l, c, !0),
            l0(s, e, s.firstBeatXOffset + a)
    }
}
function l0(t, e, n) {
    let i = e.markerWithLayer ? e.markerWithLayer.width : 0;
    t.originWidth = Math.ceil(Math.max(n, i))
}
function lw(t, e, n) {
    let i = new ln(e.length, t, n);
    return e.push(i),
        i
}
function lE(t, e) {
    t.layout.unscaledWidth += e
}
function lk(t, e) {
    l0(e, t, e.originWidth - e.firstBeatXOffset),
        e.firstBeatXOffset = 0
}
function lS(t, e) {
    t.layout.measureLayouts.push(e),
        e.lineLayout = t.layout,
        e.originX = t.layout.unscaledWidth,
        t.layout.unscaledWidth += e.originWidth
}
function lx(t, e, n) {
    return e.originWidth + t.layout.unscaledWidth <= n
}
function lT(t, e, n, i, r, s) {
    lb(t.tpqn, n, r, e);
    let a = !1;
    for (let o of n.layouts)
        !lx(r, o, s) && r.layout.measureLayouts.length > 0 && (r = lw(t, i, s), a = !1), a && lk(n, o), lS(r, o), a = !0;
    return r
}
function l3(t, e, n) {
    let i = e.width,
        r = [],
        s = lw(t, r, i),
        a = !!t.tuning;
    if (a && lE(s, n.tuningOffset), "conservative" === n.distribute)
        for (let o of t.measures) {
            lv(t.tpqn, o, s, n);
            let l = o.layouts[0];
            lx(s, l, i) ? lS(s, l) : (s.layout.measureLayouts.length > 0 && (s = lw(t, r, i)), lx(s, l, i) ? lS(s, l) : s = lT(t, n, o, r, s, i))
        }
    else if ("fitness" === n.distribute)
        for (let u of t.measures) {
            lv(t.tpqn, u, s, n);
            let c = u.layouts[0];
            lx(s, c, i) ? lS(s, c) : s = lT(t, n, u, r, s, i)
        }
    else
        for (let d of t.measures) {
            lv(t.tpqn, d, s, n);
            let h = d.layouts[0];
            lx(s, h, i) || s.layout.measureLayouts.length > 0 && (s = lw(t, r, i)),
                lS(s, h)
        }
    let p = [],
        f = 0,
        g = r.length,
        m = e.makeScaleStrategy(g);
    for (s of r)
        s.hangingText = p, s.layout.y = f, p = s.distribute(t, e, m, n), f += s.layout.height;
    return {
        lines: r,
        height: f
    }
}
class l1 {
    constructor(t) {
        this.source = t,
            this.tempo = {
                bpm: t.bpm,
                type: t.type,
                position: t.position || 0,
                linear: t.linear || !1,
                visible: t.visible || !1
            },
            this.measureOffset = 0,
            this.originMeasureOffset = 0,
            this.layer = void 0
    }
}
let lL = 1e5;
function lN(t) {
    let e = [],
        n = null,
        i = 0,
        r = !1,
        s = 0;
    for (let a = 0; a < t.length;) {
        if (++s > 1e5)
            throw Error("Watchdog");
        let o = t[a];
        if (e.push(o), o.reprise && o.reprise.startIndex === o.index && (!n || n.startIndex !== o.index) && (n = o.reprise, i = 1), n) {
            if (o.repeat && i < o.repeat)
                a = n.startIndex, i++, r = !1;
            else if (++a < t.length) {
                let l = t[a];
                if (l.alternateEndingWithLayer) {
                    let u = !1;
                    for (let c of l.alternateEndingWithLayer.alternateEnding)
                        if (c === i) {
                            u = !0;
                            break
                        }
                    u ? r = !0 : r ? (a = n.startIndex, i++, r = !1) : (a = la(n, i) || n.endIndex + 1, r = !0)
                }
                a > n.endIndex && (n = null, i = 0)
            }
        } else
            a++
    }
    return e
}
function lI(t, e, n) {
    return t * (6e4 / n / e)
}
let l2 = 960, l8 = t => 960 * (oA.bpm / oA.type) / (t.bpm / t.type), lA = t => t / 960 * 6e4 / oA.bpm, l7 = (t, e) => t * e * oA.type;
function lC(t, e) {
    let n = lN(e),
        i = new Map,
        r = [],
        s = [],
        a = oA,
        o = 960,
        l = 960,
        u = 0,
        c = 0;
    for (let d of n) {
        let h = d.beatsLayoutsByTime,
            p = d.tempoLayoutsByTime,
            f = t ? n7(d.signature, t) : nI(d.signature),
            g = [...h.keys()].sort((t, e) => t - e),
            m = h.get(0),
            $ = u,
            _ = u,
            y = c;
        if (m) {
            let v = c - 2 * u;
            m.shifts.push(v),
                r.push(v),
                m.occurrences.push(u),
                i.set(u, m);
            let b = p.get(0);
            b && (a = b.tempo, s.push({
                timestamp: u,
                tempo: a
            }), o = Math.floor(l8(a)), l = Math.floor(2 * l8(a)));
            for (let w = 1; w < g.length; w++) {
                let E = g[w],
                    k = h.get(E);
                if (k) {
                    if (E < f) {
                        if (t) {
                            let S = lI(E, t, a.bpm);
                            u = _ + S,
                                c = y + 2 * S
                        } else {
                            let x = n2(E);
                            u = _ + lA(l7(x, o)),
                                c = y + lA(l7(x, l))
                        }
                        m.duration = u - $;
                        let T = c - 2 * u;
                        m.shifts.push(T),
                            r.push(T),
                            k.occurrences.push(u),
                            i.set(u, k),
                            m = k,
                            $ = u
                    } else
                        k.occurrences.push(u)
                }
            }
        }
        if (t) {
            let L = lI(f, t, a.bpm);
            u = _ + L,
                c = y + 2 * L
        } else {
            let N = n2(f);
            u = _ + lA(l7(N, o)),
                c = y + lA(l7(N, l))
        }
        m && (m.duration = u - $)
    }
    return {
        timeline: i,
        tempos: s,
        shifts: r,
        progression: n.map(t => t.index + 1)
    }
}
function lP(t, e) {
    let n = t.get(e);
    if (!n)
        throw Error("Broken timeline");
    return n
}
function l6(t, e) {
    return 2 * t + e
}
function lO(t, e) {
    if (0 === e)
        return 0;
    let {
        timestamps: n
    } = t,
        i = n[n.length - 1];
    if (e <= 0)
        return l6(e, t.shifts[0] || 0);
    if (e >= i)
        return l6(e, t.shifts[n.length - 1] || 0);
    let r = 0,
        s = n.length,
        a = 0,
        o = 0;
    for (; s - r > 1;) {
        a = Math.floor((r + s) / 2);
        let l = n[a];
        if (e < l)
            s = a;
        else if (e > l)
            r = a;
        else {
            o = a;
            break
        }
    }
    return o = r,
        l6(e, t.shifts[o] || 0)
}
function l9(t, e, n) {
    let {
        timeline: i,
        timestamps: r
    } = t,
        s = r[0],
        a = r[r.length - 1];
    if (e <= s)
        return lP(i, s);
    if (e >= a)
        return lP(i, a);
    let o = 0,
        l = r.length,
        u = 0,
        c = r[0];
    for (; l - o > 1;) {
        u = Math.floor((o + l) / 2);
        let d = r[u];
        if (e < d)
            l = u;
        else if (e > d)
            o = u;
        else {
            break
        }
    }
    return lP(i, l - o > 1 ? r["left" === n ? u : u - 1] : r[o])
}
function l4(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "left", {
        timestamps: i
    } = t,
        r = i[0],
        s = i[i.length - 1];
    if (e <= r)
        return 0;
    if (e >= s)
        return i.length - 1;
    let a = 0,
        o = i.length,
        l = 0;
    for (; o - a > 1;) {
        l = Math.floor((a + o) / 2);
        let u = i[l];
        if (e < u)
            o = l;
        else {
            if (!(e > u))
                return l;
            a = l
        }
    }
    return o - a > 1 ? "left" === n ? l : l - 1 : a
}
function lR(t, e) {
    if (!t)
        return console.error("Broken or empty Part. Count In does not work."), {
            bpm: 0,
            signature: [0, 0]
        };
    let n = l9(t, e, "left"),
        i = lM(t, e).bpm,
        r = n.measureLayout.measure.signature;
    return {
        bpm: i,
        signature: r
    }
}
function lD(t, e) {
    let n = l9(t, e, "left"),
        i = n.measureLayout.beatsLayouts;
    return {
        loopStart: ou(i[0]),
        loopEnd: oc(i[i.length - 1])
    }
}
function lM(t, e) {
    let n = t.tempos[0];
    for (let i of t.tempos) {
        if (i.timestamp > e)
            break;
        n = i
    }
    return n ? n.tempo : oA
}
function lB(t, e, n, i, r) {
    let s = n.measureLayout.measure.reprise,
        a = i.measureLayout.measure.reprise,
        o = oo(n),
        l = oo(i),
        u = oc(i);
    s && (!a || s.startIndex !== a.startIndex) && (o = ol(n));
    let c = o,
        d = e;
    if (o > e || e >= u) {
        let h = l9(t, e, "left"),
            p = oo(h),
            f = ol(h);
        d = o <= p && p < u ? p : o <= f && f < u ? f : "right" === r ? l : c
    }
    return {
        cursor: d,
        loopStart: o,
        loopEnd: u
    }
}
function l5(t) {
    switch (t) {
        case "left":
            return .2;
        case "right":
            return .8;
        default:
            return .5
    }
}
function lF(t, e, n) {
    let i = t.layout.measureLayouts[0];
    for (let r of t.layout.measureLayouts) {
        if (r.x > e)
            break;
        i = r
    }
    let s = i.beatsLayouts,
        a = 0,
        o = s.length,
        l = 0,
        u = s[0];
    for (; o - a > 1;) {
        u = s[l = Math.floor((a + o) / 2)];
        let c = u.absoluteX;
        if (c < e)
            a = l;
        else if (c > e)
            o = l;
        else
            break
    }
    if (o - a > 1)
        return u; {
        if (o === s.length)
            return s[a];
        let d = s[a],
            h = s[o],
            p = h.absoluteX - d.absoluteX,
            f = l5(n);
        return d.absoluteX + p * f > e ? d : h
    }
}
function lH(t, e, n) {
    let i = 0,
        r = t.length,
        s = t[0];
    for (; r - i > 1;) {
        let a = Math.floor((i + r) / 2),
            o = t[a];
        if (e.y < o.layout.y)
            r = a;
        else if (e.y > o.layout.maxY)
            i = a;
        else {
            s = o;
            break
        }
    }
    return lF(s, e.x, n)
}
function lW(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    t.index = e,
        t.duration = 0,
        t.scale = t.scale || 1,
        t.repeat = Math.min(t.repeat || 0, n.useGenericTimeline ? 32 : 10),
        t.beatsLayoutsByTime = new Map,
        t.rhythmLines = 0;
    let i = t;
    t.tripletFeelWithLayer = i.tripletFeel ? {
        layer: null,
        feel: i.tripletFeel
    }
        : void 0,
        t.markerWithLayer = i.marker ? {
            layer: null,
            text: i.marker.text,
            width: i.marker.width
        }
            : void 0,
        t.alternateEndingWithLayer = i.alternateEnding ? {
            layer: null,
            alternateEnding: i.alternateEnding
        }
            : void 0
}
let lV = t => (t & t - 1) == 0;
function lU(t, e) {
    let n;
    return (n = t & t - 1 | e & e - 1 ? t * e / nT(t, e) : Math.max(t, e)) <= 0 || n >= 32768 || n % 1 != 0 ? t : n
}
function lX(t) {
    let e = [],
        n = !1,
        i = !1,
        r = !1,
        s = !1;
    for (let a of t)
        for (let o of (a.tripletFeel && (n = !0), a.voices))
            if (!o.rest)
                for (let l of o.beats) {
                    let {
                        tuplet: u,
                        duration: c,
                        notes: d
                    } = l;
                    if (u && !e.includes(u) && e.push(u), c && c.length) {
                        let h = nN(c);
                        if (!lV(h) || h > 32768)
                            continue;
                        for (let p of (e.includes(h) || e.push(h), d))
                            p.dead && (i = !0), (p.bend || p.slide) && (r = !0), p.tremolo && (s = !0)
                    }
                }
    n && e.push(24, 48),
        i && e.push(128),
        r && e.push(60),
        s && e.push(8, 16, 32, 64);
    let f = e.reduce(lU, Math.max(4 * Math.max(...e), 32)) || 128;
    for (; f < 1e4;)
        f *= 2;
    return Math.min(f, 32767)
}
function lG(t, e) {
    let n = isNaN(t.tpqn);
    e && n && (t.tpqn = e ? lX(t.measures) : null)
}
function lz(t, e) {
    if (t.repeatStart && (e.lastReprise = new lr(t), e.inReprise = !0), t.alternateEndingWithLayer) {
        if (e.lastReprise)
            for (let n of (t.reprise = e.lastReprise, t.alternateEndingWithLayer.alternateEnding))
                ls(e.lastReprise, n, t)
    } else
        e && e.inReprise && e.lastReprise && (t.reprise = e.lastReprise);
    if (t.repeat) {
        if (!e || !e.lastReprise)
            throw Error("Broken ending of reprise");
        e.lastReprise.endIndex = t.index,
            e.inReprise = !1
    }
}
let lj = [4, 4];
function lq(t, e) {
    t.hasSignature = !!t.signature,
        t.signature = t.signature || e.signature || lj,
        t.hasSignature && (e.signature = t.signature)
}
function lY(t) {
    return t.hasSignature ? 50 : 15
}
function lK(t, e, n) {
    e.tempoLayoutsByTime = new Map;
    let i = lY(e);
    for (let r of n.filter(t => +t.measure == +e.index + 1)) {
        let s = t ? Math.floor(4 * t * r.position) : n8(r.position),
            a = e.tempoLayoutsByTime.get(s);
        a || ((a = new l1(r)).measureOffset = i, a.originMeasureOffset = i, e.tempoLayoutsByTime.set(s, a))
    }
}
function lJ(t, e) {
    t.index = e,
        t.rest = t.rest || !1,
        t.beats = !t.rest && t.beats || [],
        t.hasSameRhythm = t.hasSameRhythm || !1,
        t.lyrics = !1
}
function lQ(t, e) {
    let n = t.rest || t.hasSameRhythm || 1 === t.beats.length && (1 === t.beats[0].duration[0] || 1 === t.beats[0].duration[1]);
    e.rhythmLines += n ? 0 : 1
}
function lZ(t, e, n, i) {
    t.index = e,
        t.measure = i,
        t.prevBeat = null,
        t.nextBeat = null,
        t.tuplet || (t.tuplet = 0),
        t.width = 0,
        t.voice = n;
    let r = t;
    t.chord = r.chord ? {
        layer: null,
        text: void 0 !== r.chord.text && void 0 !== r.chord.text.text ? r.chord.text.text : r.chord.text,
        width: r.chord.width
    }
        : void 0,
        t.originalText = r.text ? {
            layer: null,
            text: void 0 !== r.text.text && void 0 !== r.text.text.text ? r.text.text.text : r.text.text,
            width: r.text.width
        }
            : void 0,
        t.text = void 0,
        t.tappingWithLayer = r.tapping ? {
            layer: null,
            text: "T",
            width: 6,
            voice: n
        }
            : void 0
}
function ut(t) {
    if (!t)
        return;
    let e = t.points[0],
        n = e.tone,
        i = [{
            position: 0,
            tone: n
        }
        ];
    for (let r of t.points)
        i[i.length - 1].tone !== r.tone && (i.push({
            position: 0,
            tone: r.tone
        }), n = Math.max(n, r.tone));
    return 1 === i.length && i.push({
        position: 0,
        tone: n
    }),
        i.forEach((t, e) => {
            t.position = 60 * e / (i.length - 1)
        }), {
        ...t,
        points: i
    }
}
function ue(t, e, n, i) {
    t.index = e,
        t.beat = n,
        t.string = t.string || 0,
        t.fret = t.fret || 0,
        t.bend = i ? ut(t.bend) : t.bend,
        t.rightSlide = iu(t.slide),
        t.leftSlide = il(t.slide),
        t.bogus = !1
}
function un(t, e) {
    if (0 === t.index) {
        for (let n = 0; n < e.length; n++)
            if (!e[n]) {
                let i = t.notes.length,
                    r = {
                        string: n,
                        fret: 0
                    };
                ue(r, i, t, !1),
                    r.bogus = !0,
                    t.notes[i] = r
            }
    }
}
function ui(t, e, n) {
    e.usedDrums && (t.string = oV(t.fret, n))
}
function ur(t, e) {
    e[t.string] = !0
}
function us(t) {
    let e = t.ties;
    return e || (e = new Map, t.ties = e),
        e
}
function ua(t, e, n, i) {
    let r = us(i),
        s = r.get(t.string);
    if (s) {
        if (t.tie)
            o_(s, {
                note: t,
                beat: e,
                measure: n
            }), oy(s).note.tieStart = s, t.tieEnd = s, r.set(t.string, new o$({
                note: t,
                beat: e,
                measure: n
            }));
        else {
            let a = oy(s);
            a.note = t,
                a.beat = e,
                a.measure = n
        }
    } else
        r.set(t.string, new o$({
            note: t,
            beat: e,
            measure: n
        }))
}
function uo(t) {
    let e = t.slides;
    return e || (e = new Map, t.slides = e),
        e
}
function ul(t, e, n, i) {
    let r = uo(i),
        s = "legato" === t.rightSlide || "shift" === t.rightSlide,
        a = r.get(t.string);
    a && !t.tie && (o_(a, {
        note: t,
        beat: e,
        measure: n
    }), oy(a).note.slideStart = a, ov(a).note.slideEnd = a, r.delete(t.string)),
        s && r.set(t.string, new o$({
            note: t,
            beat: e,
            measure: n
        }))
}
function uu(t) {
    let e = t.slurs;
    return e || (e = new Map, t.slurs = e),
        e
}
function uc(t, e, n, i) {
    let r = uu(i),
        s = t.hp || "legato" === t.rightSlide,
        a = r.get(t.string);
    !a || s || t.tie || (o_(a, {
        note: t,
        beat: e,
        measure: n
    }), oy(a).note.slurStart = a, ov(a).note.slurEnd = a, r.delete(t.string)),
        !a && s && r.set(t.string, new o$({
            note: t,
            beat: e,
            measure: n
        }))
}
function ud(t) {
    let e = t.bends;
    return e || (e = new Map, t.bends = e),
        e
}
function uh(t, e, n, i) {
    let r = ud(i),
        s = r.get(t.string);
    if (!s && t.bend && t.tie && 0 === t.bend.points[0].tone && (t.ghost = !0), s) {
        !t.bend && t.tie && (s.keep = !0, o_(s, {
            note: t,
            beat: e,
            measure: n
        }));
        let a = t.bend || void 0 !== t.bend && !t.tie;
        if (a) {
            oy(s).note.bendStart = s;
            for (let o = 1; o < s.refs.length - 1; o++)
                s.refs[o].note.bendPart = s;
            ov(s).note.bendEnd = s,
                r.delete(t.string)
        }
    }
    t.bend && r.set(t.string, new o$({
        note: t,
        beat: e,
        measure: n
    }))
}
function up(t) {
    let e = t.prevNoteOnString;
    return e || (e = new Map, t.prevNoteOnString = e),
        e
}
function uf(t, e) {
    let n = up(e),
        i = t.string,
        r = n.get(i);
    r && (r.nextNoteOnString = t, t.prevNoteOnString = r),
        n.set(i, t)
}
function ug(t, e, n) {
    let i = ud(n);
    for (let [r, s] of i.entries())
        if (s.keep)
            s.keep = !1;
        else {
            oy(s).note.bendStart = s;
            for (let a = 1; a < s.refs.length - 1; a++)
                s.refs[a].note.bendPart = s;
            ov(s).note.bendEnd = s,
                i.delete(r)
        }
}
function um(t) {
    t.layout.usedRest = !0
}
function u$(t, e) {
    e.rest || (t.layout.usedStrings |= 1 << e.string)
}
function u_(t, e) {
    n9(t.instrumentId) && t.usedDrums && t.usedDrums.set(e.fret, oW(e.fret, e.string))
}
function uy(t, e, n, i) {
    t.rest || t.bogus ? 0 === i && um(e) : (u$(e, t), u_(n, t))
}
function uv(t) {
    let e = t.notes.find(t => t.harmonic);
    t.harmonic = e ? e.harmonic : void 0
}
function ub(t, e) {
    e.prevBeat && (e.prevBeat.nextBeat = t, t.prevBeat = e.prevBeat),
        e.prevBeat = t
}
function u0(t, e) {
    n9(t.instrumentId) && (t.usedDrums = new Map, e && (t.strings = e ? 5 : 6, t.isDrumStdOn = !0)),
        t.voices = t.voices || 1,
        t.withChords = !1
}
function uw(t, e) {
    if (!e.tremolo && t.tremolo) {
        let n = Array.isArray(t.tremolo) ? t.tremolo[1] : null;
        e.tremolo = {
            voice: e.voice,
            type: 32 === n ? 3 : 16 === n ? 2 : 1
        }
    }
}
function uE(t) {
    t.rest && (t.rhythmLines = 0)
}
function uk(t, e) {
    let n = t[e];
    return n || (n = {}, t[e] = n),
        n
}
function uS(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
            useStdDrumNotation: i = !1,
            useBendPointsMerge: r = !0,
            useGenericTimeline: s = !1
        } = n,
        a = t;
    u0(a, i),
        lG(a, s);
    let o = new ln(0, a, 0),
        l = {},
        u = Array(a.voices);
    for (let c = 0; c < a.measures.length; c++) {
        let d = a.measures[c];
        lW(d, c, n),
            d.layouts = [new li(d, o.layout)],
            lq(d, l),
            lK(a.tpqn, d, a.automations.tempo),
            lz(d, l);
        for (let h = 0; h < d.voices.length; h++) {
            let p = d.voices[h];
            if (lJ(p, h), 0 !== h && p.rest)
                continue;
            let f = uk(u, h),
                g = 0;
            for (let m = 0; m < p.beats.length; m++) {
                let $ = p.beats[m];
                lZ($, m, h, d);
                let _ = d.beatsLayoutsByTime.get(g);
                _ || (_ = new oi, d.beatsLayoutsByTime.set(g, _)),
                    g += a.tpqn ? n7($.duration, a.tpqn) : nI($.duration),
                    $.layout = _,
                    _.beats.unshift($),
                    ub($, f);
                let y = Array(a.strings);
                for (let v = 0; v < $.notes.length; v++) {
                    let b = $.notes[v];
                    ue(b, v, $, r),
                        ui(b, a, i),
                        ur(b, y),
                        uw(b, $)
                }
                un($, y);
                for (let w = 0; w < $.notes.length; w++) {
                    let E = $.notes[w];
                    uf(E, f),
                        uh(E, $, d, f),
                        ul(E, $, d, f),
                        uc(E, $, d, f),
                        ua(E, $, d, f),
                        uy(E, $, a, h)
                }
                ug($, d, f),
                    uv($),
                    !a.withChords && $.chord && (a.withChords = !0)
            }
            d.duration = Math.max(d.duration, g),
                lQ(p, d)
        }
        if (uE(d), e) {
            let k = e[c];
            if (k) {
                let S = d.voices.length,
                    x = {
                        beats: [],
                        hasSameRhythm: !0
                    };
                lJ(x, S),
                    x.lyrics = !0;
                let T = 0,
                    L = k.beats.length;
                for (let N = 0; N < L; N++) {
                    let I = k.beats[N],
                        A = d.beatsLayoutsByTime.get(T);
                    A || (A = new oi, d.beatsLayoutsByTime.set(T, A));
                    let C = {
                        ...I
                    };
                    lZ(C, N, S, d),
                        x.beats[N] = C,
                        C.layout = A,
                        A.beats.unshift(C),
                        T += a.tpqn ? n7(C.duration, a.tpqn) : nI(C.duration)
                }
                L && (d.duration = Math.max(d.duration, T), d.voices.unshift(x), d.hasLyrics = !0)
            }
        }
    }
    a.usedDrums && !a.isDrumStdOn && oH(a.usedDrums);
    try {
        let P = lC(a.tpqn, a.measures);
        a.timeline = P.timeline,
            a.tempos = P.tempos,
            a.shifts = P.shifts,
            a.progression = P.progression,
            a.timestamps = [...a.timeline.keys()]
    } catch (O) {
        return [O, a]
    }
    return [null, a]
}
let ux = t => t.currentTime, uT = t => "outputLatency" in t ? t.outputLatency : 0, u3 = t => "baseLatency" in t ? t.baseLatency : 0, u1 = t => uT(t) + u3(t);
function uL(t, e) {
    let n;
    for (n = e; t > 1; t--)
        n += e;
    return n
}
function uN() {
    try {
        let t = document.createElement("div");
        t.innerHTML = "<audio x-webkit-airplay='deny'></audio>";
        let e = t.children.item(0);
        return e.disableRemotePlayback = !0,
            e.controls = !1,
            e.src = "data:audio/mpeg;base64,//uQx" + uL(23, "A") + "WGluZwAAAA8AAAACAAACcQCA" + uL(16, "gICA") + uL(66, "/") + "8AAABhTEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB9AAAAnGMHkkI" + uL(320, "A") + "//sQxAADgnABGiAAQBCqgCRMAAgEAH" + uL(15, "/") + "7+n/9FTuQsQH//////2NG0jWUGlio5gLQTOtIoeR2WX////X4s9Atb/JRVCbBUpeRUq" + uL(18, "/") + "9RUi0f2jn/+xDECgPCjAEQAABN4AAANIAAAAQVTEFNRTMuMTAw" + uL(97, "V") + "Q==",
            e.loop = !0,
            e.load(), {
            play() {
                try {
                    let t = e.play();
                    t && t.then(() => {
                        "mediaSession" in navigator && (navigator.mediaSession.playbackState = "playing")
                    }, t => console.warn("Hack play failed", t))
                } catch (n) {
                    console.error(n)
                }
            },
            pause() {
                try {
                    let t = e.pause();
                    t && t.then(() => { }, t => console.warn("Hack pause failed", t)),
                        "mediaSession" in navigator && (navigator.mediaSession.playbackState = "paused")
                } catch (n) {
                    console.error(n)
                }
            }
        }
    } catch (n) {
        return console.error(n),
            null
    }
}
let uI = "bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz";
function u2() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21,
        e = "";
    for (; t-- > 0;)
        e += "bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz"[64 * Math.random() | 0];
    return e
}
let u8 = "/static/latest/WebWorker.144a7eaf.js", uA = window.performance || {
    offset: Date.now(),
    now: function () {
        return Date.now() - this.offset
    }
};
function u7(t) {
    return t / 1e3
}
function uC(t) { }
function uP(t, e) {
    if (t)
        throw Error(e)
}
class u6 {
    constructor(t) {
        this.state = {
            speed: 100,
            pitchShift: 0,
            cursor: 0,
            loopStart: 0,
            loopEnd: 0,
            type: "focus",
            isPlaying: !1,
            isCountIn: !1,
            isMetronome: !1,
            metronomeType: "regular",
            url: ""
        };
        try {
            let e = new window.AudioContext({
                latencyHint: "interactive"
            });
            if (!(44100 === e.sampleRate || 48e3 === e.sampleRate)) {
                let n = e.createBufferSource();
                n.buffer = e.createBuffer(1, 1, 48e3),
                    n.connect(e.destination),
                    n.start(0),
                    "close" in e && e.close(),
                    e = new window.AudioContext({
                        latencyHint: "interactive"
                    })
            }
            e.onstatechange = () => {
                console.log(`Audio context changed state to ${this.context.state}, isPlaying: ${this.state.isPlaying}, sample rate ${this.context.sampleRate}`)
            },
                this.context = e,
                this.freezeCheckSampleRate = this.context.sampleRate
        } catch (i) {
            console.error("error creating audio context", i),
                this.context = null
        }
        window.Worker && (this.worker = new Worker("/static/latest/WebWorker.144a7eaf.js"), this.worker.onmessage = this.onMessage, this.worker.onerror = t.onError),
            this.callback = t,
            this.buffers = [null, null, null, null, null],
            this.sources = [null, null, null, null, null],
            this.reuseIndex = 0,
            this.startedTime = null,
            this.token = "",
            this.countinDuration = 0,
            this.workerTs = 0,
            this.workerDelay = 0,
            this.hack = uN(),
            this.noSound = !1,
            this.marginIssueReported = !1,
            this.workerStarted = !1,
            this.hasSingleTrack = !1
    }
    get shouldUseWorker() {
        return this.context && this.worker && !this.noSound
    }
    resumeContext() {
        let t = this.context;
        t && "running" !== t.state && "resume" in t && (console.info("Resume context", t.state), t.resume().catch(console.error.bind(console)))
    }
    createAudioBuffers(t, e) {
        let n = 1.02 * e;
        for (let i = 0; i < this.buffers.length; i++) {
            let r = this.buffers[i];
            r && r.numberOfChannels === t && r.sampleRate === e && r.length === n || (this.buffers[i] = this.context.createBuffer(t, n, e))
        }
    }
    onOpened(t) {
        this.createAudioBuffers(t.channels, t.sampleRate),
            this.callback.onOpened(t)
    }
    onEmpty(t) {
        this.callback.onEmpty(t)
    }
    onLoad(t) {
        this.callback.onLoad(t)
    }
    onLoaded(t) {
        this.noSound = !1,
            this.callback.onLoaded(t)
    }
    onError(t) {
        this.noSound = !0,
            this.callback.onError(t.error, t.isNetworkError)
    }
    onPacket(t) {
        if (!this.state.isPlaying)
            return;
        if (this.token !== t.token) {
            var e;
            (null == process ? void 0 : null === (e = process.env) || void 0 === e ? void 0 : e.NODE_ENV) === "development" && console.log(`Drop audio packet with token mismatch: expected ${this.token}, actual ${t.token}`);
            return
        }
        let n = this.context;
        if (n.sampleRate !== this.freezeCheckSampleRate) {
            console.warn("SampleRate has changed", n.sampleRate, this.freezeCheckSampleRate),
                this.callback.onFreeze();
            return
        }
        this.reuseIndex = (this.reuseIndex + 1) % this.buffers.length;
        let i = this.buffers[this.reuseIndex];
        if (i.copyToChannel ? (i.copyToChannel(t.buffer0, 0), t.buffer1 && i.copyToChannel(t.buffer1, 1)) : (i.getChannelData(0).set(t.buffer0), t.buffer1 && i.getChannelData(1).set(t.buffer1)), !this.gain) {
            let r = n.createGain();
            r.gain.value = 1,
                r.connect(n.destination),
                this.gain = r
        }
        let s = n.createBufferSource();
        s.buffer = i,
            s.connect(this.gain),
            this.sources[this.reuseIndex] = s;
        let a = 0;
        if (null !== this.startedTime) {
            a = this.startedTime + u7(t.timestampMs);
            let o = a - n.currentTime;
            o < .2 && (console.log("Ahead of time schedule margin", o), console.info(`Sound generation delay ${this.workerDelay}ms`)),
                !this.marginIssueReported && t.timestampMs > 2e3 && (o < 0 && console.log("Ahead of time schedule margin is negative", o), o >= 0 && o < .2 && console.log("Ahead of time schedule margin is too small", o), this.marginIssueReported = !0)
        } else
            a = n.currentTime + .05, this.startedContextTime = ux(n) + .05, this.startedTime = a, this.workerDelay = Math.floor(uA.now() - this.workerTs), console.info(`Sound generation delay ${this.workerDelay}ms`), uP(0 !== t.timestampMs, `Got initial audio packet with unexpected timestamp ${t.timestampMs}`);
        s.start(a, 0, u7(t.durationMs))
    }
    onMessage = t => {
        try {
            let e = t.data.message;
            uC(e + (t.data.timestampMs ? " " + t.data.timestampMs : "") + (void 0 != t.data.index ? " " + t.data.index : "") + (void 0 != t.data.url ? " " + t.data.url : "")),
                "worker/packet" === e ? this.onPacket(t.data) : "worker/error" === e ? this.onError(t.data) : t.data.url === this.state.url && ("worker/load" === e ? this.onLoad(t.data) : "worker/loaded" === e ? this.onLoaded(t.data) : "worker/opened" === e ? this.onOpened(t.data) : "worker/empty" === e && this.onEmpty(t.data))
        } catch (n) {
            console.error(n),
                this.callback.onError(n)
        }
    };
    play() {
        this.resumeContext(),
            this.marginIssueReported = !1,
            this.shouldUseWorker ? this.worker.postMessage([this.startGenerateSoundPackets(),]) : this.startWithoutSound(),
            this.state = {
                ...this.state,
                isPlaying: !0
            },
            this.markIsPlaying()
    }
    getWorkerPosition() {
        let {
            cursor: t,
            loopStart: e,
            loopEnd: n
        } = this.state;
        return this.state.speed < 100 && this.correctTimestampFor50Timeline && (t = this.correctTimestampFor50Timeline(t), e = this.correctTimestampFor50Timeline(e), n = this.correctTimestampFor50Timeline(n)), {
            cursor: t,
            loopStart: e,
            loopEnd: n
        }
    }
    pause() {
        return this.turnOffSound(),
            this.state.isPlaying && (this.state = {
                ...this.state,
                isPlaying: !1
            }, this.workerStarted && (this.workerStarted = !1, this.worker.postMessage([{
                message: "worker/stopGenerate"
            }, {
                message: "worker/seek",
                position: this.getWorkerPosition()
            },]))),
            this.markIsPlaying(),
            this.state.cursor
    }
    turnOffSound() {
        if (this.state.isPlaying) {
            let t = this.gain;
            if (t) {
                for (let e of (t.gain.setValueAtTime(1, this.context.currentTime), t.gain.linearRampToValueAtTime(1e-4, this.context.currentTime + .02), this.gain = null, this.sources)) {
                    var n;
                    e && setTimeout((n = e, () => {
                        try {
                            n.stop()
                        } catch (t) { }
                    }), 50)
                }
                this.sources.fill(null)
            }
            this.state = {
                ...this.state,
                cursor: this.getCursor()
            },
                this.startedTime = null,
                this.startedContextTime = null,
                this.hack && this.hack.pause()
        }
    }
    seek(t, e, n) {
        this.turnOffSound(),
            this.state = {
                ...this.state,
                cursor: t,
                loopStart: e,
                loopEnd: n
            },
            this.shouldUseWorker ? this.worker.postMessage([{
                message: "worker/seek",
                position: this.getWorkerPosition()
            }, this.state.isPlaying && this.startGenerateSoundPackets(),]) : this.state.isPlaying && this.startWithoutSound()
    }
    speed(t) {
        return this.turnOffSound(),
            this.state = {
                ...this.state,
                speed: t
            },
            this.shouldUseWorker ? this.worker.postMessage([{
                message: "worker/setSpeed",
                speed: t
            }, {
                message: "worker/seek",
                position: this.getWorkerPosition()
            }, this.state.isPlaying && this.startGenerateSoundPackets(),]) : this.state.isPlaying && this.startWithoutSound(),
            this.state.cursor
    }
    type(t) {
        this.state = {
            ...this.state,
            type: t
        }
    }
    pitch(t) {
        return this.turnOffSound(),
            this.state = {
                ...this.state,
                pitchShift: t
            },
            this.shouldUseWorker ? this.worker.postMessage([{
                message: "worker/setPitch",
                pitchShift: t
            }, {
                message: "worker/seek",
                position: this.getWorkerPosition()
            }, this.state.isPlaying && this.startGenerateSoundPackets(),]) : this.state.isPlaying && this.startWithoutSound(),
            this.state.cursor
    }
    startWithoutSound() {
        this.updateCountIn(),
            this.startedTime = uA.now() / 1e3,
            this.startedContextTime = this.startedTime
    }
    updateCountIn() {
        let t = null;
        if (this.countinDuration = 0, this.state.isCountIn) {
            t = this.findBpmAndBeatByTimestamp(this.state.cursor);
            let e = 60 / t.bpm * 4 / t.signature[1];
            this.countinDuration = Math.floor(e * t.signature[0] * 100 / this.state.speed * 48e3) / 48e3;
            let n = this.generateCountInTimeline(),
                i = this.state.cursor,
                r;
            for (let s = 0; s < n.length; s++)
                if (Math.floor(n[s].timestamp) >= Math.floor(i)) {
                    r = n[s];
                    break
                }
            let a = r ? (r.timestamp - i) * (100 / this.state.speed) / 1e3 : 0;
            this.countinDuration -= a,
                t.correctedDurration = this.countinDuration
        }
        return t
    }
    updateMetronome() {
        return this.state.isMetronome ? this.generateMetronomeTimeline() : null
    }
    startGenerateSoundPackets() {
        this.hack && this.hack.play(),
            this.token = u2(),
            this.workerTs = uA.now(),
            this.workerStarted = !0;
        let t = "mute" === this.state.type && this.hasSingleTrack,
            e = this.updateMetronome(),
            n = this.state.metronomeType,
            i = this.updateCountIn();
        return {
            message: "worker/startGenerate",
            token: this.token,
            mute: t,
            countIn: i,
            metronomeTimeline: e,
            metronomeType: n
        }
    }
    reset(t, e, n, i, r, s) {
        this.turnOffSound();
        let a = this.state.isPlaying;
        this.state = {
            ...this.state,
            cursor: t.cursor,
            loopStart: t.loopStart,
            loopEnd: t.loopEnd,
            speed: e,
            pitchShift: n,
            isPlaying: !1,
            isCountIn: i,
            isMetronome: r,
            metronomeType: s
        },
            this.token = u2(),
            this.shouldUseWorker && this.worker.postMessage([a && {
                message: "worker/stopGenerate"
            }, {
                message: "worker/reset"
            }, {
                message: "worker/setSpeed",
                speed: e
            }, {
                message: "worker/setPitch",
                pitchShift: n
            }, {
                message: "worker/seek",
                position: this.getWorkerPosition()
            },]),
            this.markIsPlaying()
    }
    setBuffer(t, e) {
        this.state.url = e,
            this.worker.postMessage([{
                message: "worker/setBuffer",
                buffer0: t.getChannelData(0),
                buffer1: t.numberOfChannels > 1 ? t.getChannelData(1) : null,
                sampleRate: t.sampleRate,
                url: e
            }, {
                message: "worker/seek",
                position: this.getWorkerPosition()
            }, this.state.isPlaying && this.startGenerateSoundPackets(),])
    }
    open(t, e) {
        this.state.url = e,
            this.worker.postMessage([{
                message: "worker/open",
                url: e,
                version: t
            }, {
                message: "worker/seek",
                position: this.getWorkerPosition()
            },])
    }
    clearBuffer() {
        this.shouldUseWorker && this.worker.postMessage([{
            message: "worker/clearBuffer"
        },])
    }
    setCountin(t) {
        this.state = {
            ...this.state,
            isCountIn: t
        }
    }
    setMetronome(t, e) {
        this.state = {
            ...this.state,
            isMetronome: t,
            metronomeType: e
        }
    }
    getCursor() {
        let {
            state: t
        } = this;
        if (t.isPlaying && null !== this.startedTime) {
            let e = 1e3 * Math.max(this.passed(), 0),
                n = (e > 0 ? e * (t.speed / 100) : 0) + t.cursor;
            return t.loopEnd && n > t.loopEnd && (n = t.loopStart + (n - t.loopStart) % (t.loopEnd - t.loopStart)),
                n
        }
        return t.cursor
    }
    getActualPosition() {
        return {
            cursor: this.getCursor(),
            loopStart: this.state.loopStart,
            loopEnd: this.state.loopEnd
        }
    }
    get isPlaying() {
        return this.state.isPlaying
    }
    markIsPlaying() {
        let t = document.getElementById("root");
        t && (t.dataset.playing = this.isPlaying ? "on" : "off")
    }
    passed() {
        let {
            context: t,
            startedTime: e,
            countinDuration: n
        } = this;
        return null === e ? 0 : this.shouldUseWorker ? ux(t) - this.startedContextTime - n - u1(t) : uA.now() / 1e3 - e - n
    }
    isPositionChanged() {
        return this.state.isPlaying && this.passed() > 0
    }
}
let uO = 12, u9 = 3, u4 = 21, uR = 100, uD = 25, uM = 175;
function uB(t) {
    return Math.round(t / 100 * 12) / 12 * 100
}
function u5(t, e) {
    let n = Math.round(e.bpm * t / 12),
        i = Math.round(100 * t / 12);
    return {
        tempo: {
            ...e,
            bpm: n
        },
        speed: i,
        position: uX(i)
    }
}
function uF(t, e) {
    return u5(Math.round(t / 100 * 12), e)
}
function uH(t, e) {
    return {
        ...e,
        bpm: Math.round(e.bpm * t / 100)
    }
}
function uW(t, e, n, i) {
    let r = Math.round(t / 100 * 12);
    return r >= 21 ? {
        tempo: e,
        speed: t,
        position: n
    }
        : u5(r + 1, i)
}
function uV(t, e, n, i) {
    let r = Math.round(t / 100 * 12);
    return r <= 3 ? {
        tempo: e,
        speed: t,
        position: n
    }
        : u5(r - 1, i)
}
function uU(t, e, n, i, r) {
    let s = e.bpm + r,
        a = + (100 * s / i.bpm).toFixed(2),
        o = Math.round(a);
    return o < 25 || o > 175 ? {
        tempo: e,
        speed: t,
        position: n
    }
        : {
            tempo: {
                ...i,
                bpm: s
            },
            speed: a,
            position: uX(a)
        }
}
function uX(t) {
    let e = uB(t);
    return + ((e - 25) * 100 / 150).toFixed(6)
}
function uG(t) {
    return Math.round(150 * t / 100 + 25)
}
let uz = t => t ? (e, n) => lI(e, t, n.bpm) : (t, e) => nA(t, e), uj = t => {
    let e = [],
        n = 0,
        i = oA,
        r = uz(t.tpqn);
    for (let s of t.progression) {
        let a = t.measures[s - 1],
            o = nL(a.signature),
            l = a.duration / o;
        i = o9(a).tempoLayouts.length > 0 ? o9(a).tempoLayouts[0].tempo : i;
        for (let u = 0; u < o; u++) {
            let c = {
                accented: 0 === u,
                timestamp: parseFloat(n.toFixed(4)),
                signature: a.signature,
                bpm: i.bpm
            };
            e.push(c),
                n += r(l, i)
        }
    }
    return e
}, uq = (t, e) => {
    let n = [],
        i = 0,
        r = oA,
        s = uz(t.tpqn);
    for (let a of t.progression) {
        let o = t.measures[a - 1],
            l = nL(o.signature),
            u = nN(o.signature),
            c = o.duration,
            d = 8 !== u ? 4 * l : l;
        8 !== u ? c /= 4 * l : c /= l;
        let h = o9(o).tempoLayouts;
        r = h && h.length > 0 ? h[0].tempo : r;
        for (let p = 0; p < d; p++) {
            let f;
            if (8 === u)
                f = p % 3 + 1;
            else if ((p + 1) % 2 == 0) {
                if (16 !== e) {
                    i += s(c, r);
                    continue
                }
                f = "16th"
            } else if ((p + 1) % 4 == 1)
                f = Math.ceil((p + 1) / 4);
            else {
                if (4 === e) {
                    i += s(c, r);
                    continue
                }
                f = "8th"
            }
            let g = {
                division: 8 === u ? 4 : e,
                beatNum: f,
                timestamp: parseFloat(i.toFixed(4)),
                signature: o.signature,
                bpm: r.bpm
            };
            n.push(g),
                i += s(c, r)
        }
    }
    return n
}, uY = t => {
    let e = t.measures.find(t => {
        let e = nL(t.signature),
            n = nN(t.signature);
        return 4 !== n && 8 !== n && 2 !== n || (4 === n || 2 === n) && !!(e > 8)
    });
    return !e
};
function uK(t) {
    let e = new u6({
        onError: function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = e.message || e;
            console.error("error in audio player initialization: ", i),
                t.dispatch("player/error", {
                    error: i,
                    isNetworkError: n
                })
        },
        onFreeze: () => t.dispatch("player/togglePlay", !1),
        onOpened: () => t.dispatch("player/opened"),
        onLoad: () => t.dispatch("player/load"),
        onLoaded: () => t.dispatch("player/loaded"),
        onEmpty: () => t.dispatch("player/empty")
    }),
        n = !!(null !== e.context && window.Worker);
    t.dispatch("player/init", {
        audio: e,
        playbackAvailable: n
    })
}
async function uJ(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    t("player/togglePlay", n)
}
async function uQ(t) {
    if (t.get().user.hasPlus)
        return import("./playerPlus.fdf5876c.js")
}
async function uZ(t) {
    let e = t.get();
    if (e.demo.enabled && e.meta.songId === X)
        return import("./playerDemo.9ddbef46.js")
}
async function ct(t) {
    try {
        let e = await uQ(t);
        if (e && e.demo && !e.demo())
            return e.plusToggleLoop(t);
        if (e = await uZ(t))
            return e.demoToggleLoop(t)
    } catch (n) {
        console.error(n)
    }
}
function ce(t) {
    ci(t, 1)
}
function cn(t) {
    ci(t, -1)
}
function ci(t, e) {
    let {
        player: n
    } = t.get(),
        i = uH(n.speed, n.tempo),
        r = i.bpm + e,
        s = + (100 * r / n.tempo.bpm).toFixed(2),
        a = Math.round(s);
    !(a < 25) && !(a > 175) && cr(t, s)
}
async function cr(t, e) {
    try {
        let n = await uQ(t);
        if (n && n.demo && !n.demo())
            return n.plusChangeSpeed(t, e);
        if (n = await uZ(t))
            return n.demoChangeSpeed(t, e)
    } catch (i) {
        console.error(i)
    }
}
async function cs(t, e) {
    try {
        let n = await uQ(t);
        if (n && n.demo && !n.demo())
            return n.plusChangePitch(t, e);
        if (n = await uZ(t))
            return n.demoChangePitch(t, e)
    } catch (i) {
        console.error(i)
    }
}
function ca(t, e) {
    let {
        enabled: n = !1
    } = e;
    t("player/suspend", "fullscreen"),
        t("screen/toggleFullscreen", {
            enabled: n
        }),
        t("player/resume", "fullscreen")
}
async function co(t, e) {
    try {
        let n = await uQ(t);
        if (n && n.demo && !n.demo())
            return n.plusChangeType(t, e);
        if (n = await uZ(t))
            return n.demoChangeType(t, e)
    } catch (i) {
        console.error(i)
    }
}
async function cl(t) {
    try {
        let e = await import("./playerFree.0963e0e5.js");
        return e.plusRestoreDefaults(t)
    } catch (n) {
        console.error(n)
    }
}
async function cu(t) {
    t("player/toggleCountIn")
}
function cc(t, e) {
    return t === e || t.cursor === e.cursor && t.loopStart === e.loopStart && t.loopEnd === e.loopEnd
}
let cd = 100, ch = "focus", cp = z.MASTER, cf = 0, cg = t => ({
    player: {
        ...t.player,
        isAudioFailed: !1,
        isAudioNetworkFailed: !1
    }
}), cm = (t, e) => {
    let n = null != e ? e : !t.player.shouldPlay;
    sZ.setIsActive(n);
    let i = {
        ...t.player,
        shouldPlay: n
    }, {
        audio: r,
        canPlay: s
    } = t.player;
    return n && r.resumeContext(),
        s && n ? r.isPlaying || r.play() : r.isPlaying && (r.pause(), i.position = r.getActualPosition()), {
        player: i
    }
}, c$ = t => {
    t.on("meta/load:processing", (t, e) => {
        let {
            songHasChanged: n
        } = e;
        if (n) {
            let i = {
                cursor: 0,
                loopEnd: 0,
                loopStart: 0
            },
                r = t.player.isCountin,
                s = t.player.isMetronome,
                a = t.player.metronomeType;
            return t.player.audio && t.player.audio.reset(i, 100, 0, r, s, a), {
                player: {
                    ...t.player,
                    shouldPlay: !1,
                    isCountin: r,
                    position: i,
                    type: "focus",
                    version: cp,
                    pitchShift: 0,
                    speed: 100,
                    isAudioFailed: !1,
                    isAudioNetworkFailed: !1
                }
            }
        }
        return t.player.audio.pause(),
            cg(t)
    }),
        t.on("chords/load:processing", (t, e) => (t.player.audio.pause(), cg(t)));
    let e = (t, e) => {
        let {
            current: n
        } = e;
        t.player.audio.hasSingleTrack = !n.tracks || 1 === n.tracks.length
    };
    function n(t, e) {
        let {
            audio: n,
            shouldPlay: i
        } = t.player,
            r = t.player.locks;
        if (r.includes(e) || r.push(e), t.player.canPlay) {
            let s = {
                ...t.player,
                canPlay: !1
            };
            return i && n.isPlaying && (n.pause(), s.position = n.getActualPosition()), {
                player: s
            }
        }
    }
    function i(t, e) {
        let {
            audio: n,
            shouldPlay: i,
            locks: r
        } = t.player;
        for (let s of (Array.isArray(e) || (e = [e]), e)) {
            let a = r.findIndex(t => t === s);
            -1 !== a && r.splice(a, 1)
        }
        let o = !r.length;
        if (!t.player.canPlay && o)
            return i && !n.isPlaying && n.play(), {
                player: {
                    ...t.player,
                    canPlay: o
                }
            }
    }
    t.on("meta/load:done", e),
        t.on("part/load:inflated", (t, e) => {
            let {
                player: n
            } = t, {
                current: i
            } = e;
            n.audio.correctTimestampFor50Timeline = t => lO(i, t),
                n.audio.findBpmAndBeatByTimestamp = t => lR(i, t),
                n.audio.generateCountInTimeline = () => uj(i),
                n.audio.generateMetronomeTimeline = () => uq(i, 4);
            let r = uY(i),
                s = n.metronomeType;
            "voice" !== n.metronomeType || r || (s = "regular", n.audio.setMetronome(n.isMetronome, "regular"));
            let a = lM(i, n.position.cursor);
            return {
                player: {
                    ...n,
                    tempo: a,
                    voiceMetronomeAvailable: r,
                    metronomeType: s
                }
            }
        }),
        t.on("player/open", (t, e) => {
            let {
                url: n,
                version: i
            } = e;
            return t.player.audio.open(i, n), {
                player: {
                    ...t.player,
                    version: i,
                    isAudioFailed: !1,
                    isAudioNetworkFailed: !1
                }
            }
        }),
        t.on("meta/load:processing", t => n(t, "audio")),
        t.on("player/open", t => n(t, "audio")),
        t.on("player/load", t => n(t, "audio")),
        t.on("player/empty", t => n(t, "audio")),
        t.on("player/loaded", t => i(t, "audio")),
        t.on("meta/load:processing", t => n(t, "model")),
        t.on("part/load:done", t => i(t, "model")),
        t.on("player/load", cg),
        t.on("player/loaded", cg),
        t.on("player/error", (t, e) => {
            let {
                isNetworkError: n
            } = e;
            return {
                player: {
                    ...t.player,
                    isAudioFailed: !0,
                    isAudioNetworkFailed: n
                }
            }
        }),
        t.on("player/error", t => i(t, ["playerOpen", "playerLoad"])),
        t.on("player/init", (t, e) => {
            let {
                player: n
            } = t, {
                audio: i,
                playbackAvailable: r
            } = e;
            return i.setMetronome(n.isMetronome, "regular"), {
                player: {
                    ...n,
                    audio: i,
                    playbackAvailable: r,
                    metronomeType: "regular"
                }
            }
        }),
        t.on("player/moveCursor", (t, e) => {
            t.player.audio.seek(e.cursor, e.loopStart, e.loopEnd);
            let n = t.part.current ? lM(t.part.current, e.cursor) : t.player.tempo;
            return {
                player: {
                    ...t.player,
                    position: e,
                    tempo: n
                }
            }
        }),
        t.on("player/startPlay", t => cm(t, !0)),
        t.on("player/stopPlay", t => cm(t, !1)),
        t.on("player/togglePlay", cm),
        t.on("player/changeLoop", (t, e) => {
            let r = e ? n : i,
                s = r(t, "loop") || t;
            return {
                player: {
                    ...s.player,
                    isLoopChanging: e
                }
            }
        }),
        t.on("player/toggleLoop", t => {
            let e = t.player.audio,
                n = 0 !== t.player.position.loopEnd,
                i = e.getCursor(),
                r = {
                    ...t.player,
                    position: {
                        cursor: i,
                        loopStart: 0,
                        loopEnd: 0
                    }
                };
            if (!n && t.part.current) {
                let s = lD(t.part.current, i);
                r.position.loopStart = s.loopStart,
                    r.position.loopEnd = s.loopEnd
            }
            return e.seek(r.position.cursor, r.position.loopStart, r.position.loopEnd), {
                player: r
            }
        }),
        t.on("player/changeSpeed", (t, e) => {
            let {
                speed: n
            } = e, {
                audio: i
            } = t.player;
            i.speed(n);
            let r = {
                ...t.player,
                speed: n
            };
            return {
                player: r
            }
        }),
        t.on("player/changePitch", (t, e) => {
            let {
                audio: n
            } = t.player;
            n.pitch(e);
            let i = {
                ...t.player,
                pitchShift: e
            };
            return {
                player: i
            }
        }),
        t.on("player/changeType", (t, e) => {
            let {
                type: n
            } = e, {
                audio: i
            } = t.player;
            i.type(n);
            let r = {
                ...t.player,
                type: n
            };
            return {
                player: r
            }
        }),
        t.on("player/suspend", n),
        t.on("player/resume", i),
        t.on("player/tempoApply", (t, e) => ({
            player: {
                ...t.player,
                tempo: e
            }
        })),
        t.on("player/toggleCountIn", t => {
            let e = {
                ...t.player,
                isCountin: !t.player.isCountin
            };
            return e.audio.setCountin(e.isCountin), {
                player: e
            }
        }),
        t.on("player/toggleMetronome:init", () => {
            t.dispatch("player/suspend", "isMetronome"),
                t.dispatch("player/toggleMetronome"),
                t.dispatch("player/resume", "isMetronome")
        }),
        t.on("player/toggleMetronome", t => {
            let e = {
                ...t.player,
                isMetronome: !t.player.isMetronome
            };
            return e.audio.setMetronome(e.isMetronome, e.metronomeType), {
                player: e
            }
        }),
        t.on("player/changeMetronome:init", (e, n) => {
            let {
                player: i
            } = e;
            n !== i.metronomeType && (t.dispatch("player/suspend", "metronomeType"), t.dispatch("player/changeMetronome", n), t.dispatch("player/resume", "metronomeType"))
        }),
        t.on("player/changeMetronome", (t, e) => {
            let {
                player: n
            } = t;
            return n.audio.setMetronome(n.isMetronome, e), {
                player: {
                    ...n,
                    metronomeType: e
                }
            }
        }),
        t.on("user/signOut", () => {
            cl(t)
        }),
        t.on("editor/sound:toggle", (t, e) => {
            let {
                version: n
            } = e;
            return {
                player: {
                    ...t.player,
                    forcedVersion: n
                }
            }
        }),
        t.on("route/change", (t, e) => {
            let {
                route: r
            } = e;
            return r.isPanel ? n(t, "isPanel") : i(t, "isPanel")
        })
}, c_ = "data", cy = "revisions", cv = 1, cb, c0 = () => {
    if ("indexedDB" in window)
        try {
            let t = window.indexedDB.open(c_, 1);
            t.onupgradeneeded = () => {
                try {
                    let e = t.result;
                    e && (e.onerror = e => {
                        console.error(t.error),
                            e.preventDefault()
                    }, e.createObjectStore(cy))
                } catch (n) {
                    console.error(n)
                }
            },
                t.onerror = e => {
                    console.error(t.error),
                        e.preventDefault()
                },
                t.onblocked = t => {
                    console.error("Request to indexedDB was blocked!"),
                        t.preventDefault()
                },
                t.onsuccess = () => {
                    function e(t) {
                        t.preventDefault(),
                            cb = void 0
                    }
                    (cb = t.result).onabort = e,
                        cb.onclose = e
                }
        } catch (e) {
            console.error(e)
        }
};
c0();
let cw = (t, e) => new Promise((n, i) => {
    try {
        let r = cb.transaction(cy, t);
        r.oncomplete = () => n(),
            r.onerror = () => i(r.error),
            e(r.objectStore(cy))
    } catch (s) {
        try {
            window.indexedDB.deleteDatabase(c_)
        } catch (a) { }
        i(s)
    }
});
async function cE(t) {
    if (!cb)
        return c0(), null;
    try {
        let e = null;
        return await Promise.race([cw("readonly", n => e = n.get(t)), new Promise(t => setTimeout(t, 100)),]),
            e && e.result
    } catch (n) {
        return console.error(n),
            null
    }
}
async function ck(t, e) {
    if (!cb)
        return c0(), null;
    try {
        await Promise.race([cw("readwrite", n => n.put(e, t)), new Promise(t => setTimeout(t, 200)),])
    } catch (n) {
        return console.error(n),
            null
    }
}
let cS = 6, cx = 20;
async function cT(t, e, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        Accept: "application/json"
    },
        r = 0,
        s = "",
        a = {
            headers: i,
            signal: n
        };
    for (let o = 0; o < 6 && 404 !== r; o++) {
        try {
            if (n.aborted)
                return;
            let l = await fetch(t(o), a);
            if (n.aborted)
                return;
            if (l.ok) {
                let u;
                return await ("application/json" === i.Accept ? l.json() : "text/plain" === i.Accept ? l.text() : l.arrayBuffer())
            }
            r = l.status,
                s = 404 === l.status ? "Not Found" : l.statusText || "Network Error"
        } catch (c) {
            if (n.aborted || "AbortError" === c.name)
                return;
            console.error(c),
                r = 0,
                s = c.message || "Network Error"
        }
        await new Promise(t => setTimeout(t, 20 * o))
    }
    throw new s7(r, s)
}
function c3(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
    "requestIdleCallback" in window ? window.requestIdleCallback(t, {
        timeout: e
    }) : setTimeout(t, 0)
}
let c1 = t => new Promise(e => setTimeout(e, t));
function cL(t) {
    t.name = t.name.replace(/Дорожка/g, "Track")
}
class cN {
    constructor() {
        this.aborted = !1
    }
    addEventListener() { }
    removeEventListener() { }
    dispatchEvent() {
        return !1
    }
    throwIfAborted() { }
}
class cI {
    constructor() {
        this.signal = new cN
    }
    abort() {
        this.signal.aborted = !0
    }
}
Object.defineProperty(cI, "name", {
    value: "AbortController"
}), Object.defineProperty(cN, "name", {
    value: "AbortSignal"
});
var c2 = "undefined" != typeof AbortController ? AbortController : cI;
let c8 = ["dqsljvtekg760", "d34shlm8p2ums2", "d3cqchs6g3b5ew"], cA = ["d3rrfvx08uyjp1", "dodkcbujl0ebx", "dj1usja78sinh"];
function c7(t) {
    let e = t.name.toLowerCase(),
        n = t.instrument.toLowerCase(),
        i = t.name;
    ("untitled" === e || "drumkit" === e && "drums" === n || n.includes(e)) && (i = ""),
        t.title = t.instrument,
        i.length && (t.title = i + "\xa0-\xa0" + t.title)
}
function cC(t) {
    let e = {};
    for (let n of t) {
        let i = e[n.title];
        i || (i = [], e[n.title] = i),
            i.push(n)
    }
    for (let r in e) {
        let s = e[r];
        if (s.length > 1) {
            let a = 0;
            for (let o of s)
                o.title += " " + (a + 1), a++
        }
    }
}
async function cP(t, e, n) {
    let i = s5(`/api/meta/${t}${e ? ` / $ {
        e
    }
`: ""}`),
        r = await cT(() => i, "meta", n);
    if (n.aborted || !r)
        return null;
    if (r.tracks) {
        let s = 0;
        for (let a of r.tracks) {
            cL(a),
                c7(a),
                a.partId = s;
            let {
                instrumentId: o
            } = a;
            n9(o) ? a.isDrums = !0 : nR(o) ? a.isBassGuitar = !0 : n4(o) && (a.isGuitar = !0),
                s++
        }
        cC(r.tracks)
    }
    return r
}
async function c6(t, e, n, i, r) {
    console.log("DEBUG HERE");
    let s = `part_${e}_${n}_${i || ""}`,
        a = await cE(s);
    if (a)
        return a;
    let o = r => i ? `https://${c8[r % c8.length]}.cloudfront.net/${t}/${e}/${i}/${n}.json` : `https://${cA[r % cA.length]}.cloudfront.net/part/${e}/${n}`,
        l = await cT(o, "part", r);
    return !l || r.aborted ? null : (await ck(s, l), l)
}
async function cO(t, e, n, i) {
    let r = `lyrics_${e}_${n || ""}`,
        s = await cE(r);
    if (s)
        return s;
    let a = i => n ? `https://${c8[i % c8.length]}.cloudfront.net/${t}/${e}/${n}/lyrics.json` : `https://${cA[i % cA.length]}.cloudfront.net/lyrics/${e}`,
        o = await cT(a, "lyrics", i);
    return !o || i.aborted ? null : (await ck(r, o), o)
}
async function c9(t, e) {
    let n = s5(`/api/meta/${t}/revisions`);
    return await cT(() => n, "revisions", e)
}
async function c4(t, e) {
    let n = 0,
        i = null,
        r = new c2;
    for (; !i && n < 120;) {
        try {
            i = await cP(t, e, r.signal)
        } catch (s) {
            console.error(s),
                await c1(2e3)
        }
        n++
    }
    return i
}
var cR = "/static/media/artwork-96x96.7f1b5856.png", cD = "/static/media/artwork-128x128.8a4c15a5.png", cM = "/static/media/artwork-192x192.ef4ca073.png", cB = "/static/media/artwork-256x256.89e212c5.png", c5 = "/static/media/artwork-384x384.e3f936a7.png", cF = "/static/media/artwork-512x512.cab80a9e.png";
function cH(t, e) {
    if (!t.current)
        return !1;
    let n = iI.has(t.current, z.DEV),
        i = iI.has(t.current, z.MASTER),
        r = iI.has(t.current, z.V1);
    return i || r || e.isAdmin && n
}
function cW(t) {
    let e = t.get().meta;
    e.current && !e.isFailed && t.dispatch("meta/load:done", {
        songId: e.songId,
        revisionId: e.revisionId,
        partId: e.partId,
        current: e.current
    })
}
function cV(t, e) {
    if (!t && !t.length)
        return 0;
    let n = n4;
    "bass" === e ? n = nR : "drum" === e && (n = n9);
    let i = t.filter(t => n(t.instrumentId));
    i.length || (i = t);
    let r = i[0].partId,
        s = 0;
    for (let a of i) {
        let o = a.views || 0;
        o > s && (r = a.partId, s = o)
    }
    return r
}
async function cU(t, e, n, i, r) {
    let s = new c2;
    try {
        let a = t.get().meta,
            o = a.loading;
        o && o.ac.abort();
        let l = a.songId !== e,
            u = a.revisionId !== r;
        if (await t.dispatch("meta/load:processing", {
            songId: e,
            partInstrument: n,
            partId: i,
            revisionId: r,
            songHasChanged: l,
            revisionHasChanged: u,
            ac: s
        }), s.signal.aborted)
            return;
        let c = t.get().meta.current;
        if ((l || u || !c || c.songId !== e || r && c.revisionId !== r) && (c = await cP(e, r, s.signal), s.signal.aborted || !c))
            return;
        if (null == i)
            i = cV(c.tracks, n);
        else if (W && c.tracks && !c.tracks[i]) {
            await t.dispatch("navigate", i_(c, r));
            return
        }
        await t.dispatch("meta/load:done", {
            songId: e,
            partId: i,
            revisionId: r,
            current: c
        })
    } catch (d) {
        if (s.signal.aborted)
            return;
        t.dispatch("meta/load:error", {
            songId: e,
            revisionId: r,
            error: d
        })
    }
}
let cX = t => {
    t.on("route/change", (e, n) => {
        let {
            routeContent: i
        } = n;
        if (i && "tab" === i.page) {
            let {
                songId: r,
                partId: s,
                revisionId: a,
                partInstrument: o
            } = i;
            cU(t, r, o, s, a)
        }
    }),
        t.on("meta/load:processing", (t, e) => {
            let {
                songId: n,
                revisionId: i,
                ac: r
            } = e;
            return {
                meta: {
                    ...t.meta,
                    loading: {
                        songId: n,
                        revisionId: i,
                        ac: r
                    }
                }
            }
        }),
        t.on("meta/load:done", (t, e) => {
            let {
                songId: n,
                revisionId: i,
                partId: r,
                current: s
            } = e;
            return {
                meta: {
                    ...t.meta,
                    current: s,
                    allowedByLicense: sV(s, t.device.country),
                    songId: n,
                    revisionId: i,
                    partId: r,
                    loading: null,
                    isFailed: !1,
                    isNetworkFailed: !1,
                    isNotFound: !1
                }
            }
        }),
        t.on("meta/load:done", (t, e) => {
            let {
                current: n
            } = e;
            try {
                "undefined" != typeof MediaMetadata && (navigator.mediaSession.metadata = new MediaMetadata({
                    title: n.title,
                    artist: n.artist,
                    artwork: [{
                        src: cR,
                        sizes: "96x96",
                        type: "image/png"
                    }, {
                        src: cD,
                        sizes: "128x128",
                        type: "image/png"
                    }, {
                        src: cM,
                        sizes: "192x192",
                        type: "image/png"
                    }, {
                        src: cB,
                        sizes: "256x256",
                        type: "image/png"
                    }, {
                        src: c5,
                        sizes: "384x384",
                        type: "image/png"
                    }, {
                        src: cF,
                        sizes: "512x512",
                        type: "image/png"
                    },]
                }))
            } catch (i) {
                console.error(i)
            }
        }),
        t.on("meta/load:error", (t, e) => {
            let {
                songId: n,
                revisionId: i,
                error: r
            } = e;
            return {
                meta: {
                    ...t.meta,
                    current: null,
                    allowedByLicense: !0,
                    songId: n,
                    revisionId: i,
                    partId: null,
                    loading: null,
                    isFailed: !0,
                    isNetworkFailed: r instanceof s7 && 0 === r.status,
                    isNotFound: r instanceof s7 && (404 === r.status || 400 === r.status)
                }
            }
        }),
        t.on("meta/load:error", (t, e) => {
            let {
                error: n
            } = e;
            "Sentry" in window && "function" == typeof window.Sentry.captureException && window.Sentry.captureException(n),
                console.error(n)
        }),
        t.on("meta/setWasFavoriteOnServerRender", (t, e) => ({
            meta: {
                ...t.meta,
                wasFavoriteOnServerRender: e
            }
        }))
}, cG = "Bz8bn", cz = {
    overlay: "Bz8bn"
};
function cj() {
    let {
        layer: t,
        dispatch: e
    } = te("layer");
    return t.layer && d("div", {
        className: cz.overlay,
        onClick: () => e("layer/hide"),
        id: "hide-layer-overlay"
    })
}
let cq = f(() => Promise.all([import("./ConsentManager.2f6581da.js"), eX(["/static/latest/ConsentManager.25231f214ef3acad.css", "/static/latest/index.77af498a5051b300.css"])]).then(t => t[0])), cY = () => {
    let {
        consent: t
    } = te("consent");
    return "tcf" === t.suite ? d("div", {
        children: d(eV, {
            component: cq
        }, "wrap")
    }) : null
}, cK = "C6110p", cJ = "C611iz", cQ = "C61zq", cZ = "C6131n", dt = "C612su", de = "C61p", dn = "C61rs", di = "C61a4", dr = "C6133l", ds = "C611xo", da = "C612yg", dl = "C612gh", du = "C61287", dc = "C612h7", dd = "C612h7 C611ae", dh = "C61az", dp = "C61jc", df = "C611ts", dg = "C612rd", dm = "C61212", d$ = "C611fz", d_ = "C611m5", dy = {
    header: "C6110p",
    wrap: "C611iz",
    separator: "C61zq",
    placeholder: "C6131n",
    song: "C612su",
    dash: "C61p",
    artist: "C61rs",
    track: "C61a4",
    difficulty: "C6133l",
    fill: "C611xo",
    fillText: "C612yg",
    explainLink: "C612gh",
    difficultyLinksPanel: "C61287",
    findEasierSongsLink: "C612h7",
    reportInvalidDifficultyLink: "C612h7 C611ae",
    label: "C61az",
    showroom: "C61jc",
    demo: "C611ts",
    instrumentTab: "C612rd",
    burger: "C61212",
    icon: "C611fz",
    stroke: "C611m5"
}, dv = "Bcrye", db = "Bcr2z8", d0 = "Bcr19p", dw = "Bcr1zk", dE = "Bcr236", dk = "Bcr1zo", dS = "Bcr1os", dx = "Bcr1dk", dT = "Bcr1zo Bcrlb", d3 = "Bcrl3", d1 = {
    title: "Bcrye",
    line: "Bcr2z8",
    toggle: "Bcr19p",
    wrap: "Bcr1zk",
    wrapHorizontal: "Bcr236",
    notation: "Bcr1zo",
    name: "Bcr1os",
    def: "Bcr1dk",
    notation__old: "Bcr1zo Bcrlb",
    subtitle: "Bcrl3"
}, dL = "Ccsdl", dN = "Ccsnt", dI = "Ccstw", d2 = "Ccs2i1", d8 = {
    exitActive: "Ccsdl",
    enterActive: "Ccsnt",
    enter: "Ccstw",
    exit: "Ccs2i1"
}, dA = 27, d7 = 28, dC = 29, dP = 30, d6 = 31, dO = 32, d9 = 33, d4 = 34, dR = 36, dD = 35, dM = 39, dB = 38, d5 = 40, dF = 37, dH = 91, dW = 42, dV = 46, dU = 44, dX = 92, dG = 50, dz = 48, dj = 47, dq = 45, dY = 41, dK = 43, dJ = 49, dQ = 57, dZ = 51, ht = 59, he = 93, hn = 55, hi = 52, hr = 53, hs = 54, ha = 56, ho = 102, hl = 99, hu = 58, hc = 60, hd = 61, hh = 62, hp = 63, hf = 64, hg = 65, hm = 66, h$ = 67, h_ = 68, hy = 69, hv = 70, hb = 71, h0 = 72, hw = 73, hE = 74, hk = 75, hS = 76, hx = 76, hT = 77, h3 = 78, h1 = 79, hL = 80, hN = 81, hI = 82, h2 = 83, h8 = 84, hA = 85, h7 = 86, hC = 87, hP = [[36, "Kick/Bass\nDrum"], [35, "Acoustic\nBass\nDrum"], [50, "High\nFloor\nTom"], [48, "High\nTom"], [47, "Mid\nTom"], [45, "Low\n(Floor)\nTom"], [41, "Low\n(Floor)\nTom"], [43, "Very\nLow\nTom"], [38, "Snare"], [40, "Electric\nSnare"], [37, "Side\nStick\nSnare"], [91, "Rim\nShot\nSnare"], [42, "Closed\nHi Hat"], [92, "Half\nHi Hat"], [46, "Open\nHi Hat"], [44, "Foot\nHi Hat"], [93, "Ride\nEdge\n"], [59, "Ride\nEdge\n"], [51, "Ride\nCymbal\n"], [53, "Ride\nBell"], [55, "Splash\n"], [52, "China\n\n"], [49, "High\nCrash\n"], [57, "Medium\nCrash\n"], [99, "Low\nCowbell"], [56, "Cowbell"], [102, "High\nCowbell"], [27, "High Q"], [28, "Slap"], [29, "Scratch\nPush\n"], [30, "Scratch\nPull\n"], [31, "Sticks"], [32, "Square\nClick"], [33, "Metronome\nClick"], [34, "Metronome\nBell"], [39, "Hand\nClap"], [54, "Tambourine\n"], [58, "Vibraslap"], [60, "High\nBongo"], [61, "Low\nBongo"], [62, "Mute\nHigh\nConga"], [63, "Open\nHigh\nConga"], [64, "Low\nConga"], [65, "High\nTimbale"], [66, "Low\nTimbale"], [67, "High\nAgogo"], [68, "Low\nAgogo"], [69, "Cabasa"], [70, "Maracas"], [71, "Short\nWhistle"], [72, "Long\nWhistle"], [73, "Short\nGuiro\n"], [74, "Long\nGuiro\n"], [75, "Claves"], [76, "High\nWood\nBlock"], [77, "Low\nWood\nBlock"], [78, "Mute\nCuica"], [79, "Open\nCuica"], [80, "Mute\nTriangle"], [81, "Open\nTriangle"], [82, "Shaker\n"], [83, "Jingle\nBell\n"], [84, "Bell\nTree\n"], [85, "Castinets\n"], [86, "Mute\nSurdo\n"], [87, "Open\nSurdo\n"],], h6 = [42, 44, 37, 29, 30, 33, 55, 51, 78, 80, 86, 32, 62, 93, 59], hO = [49, 57], h9 = [56, 102, 99, 54, 76, 77];
function h4(t, e, n) {
    let i = n * (5 - e) + 3;
    return h6.includes(t) || hO.includes(t) || 92 === t || 46 === t || 52 === t || 93 === t || 59 === t ? `M0 4v${i - 4}` : h9.includes(t) ? `M0 3v${i - 3}` : `M0 0v${i}`
}
function hR(t) {
    let e = hP.filter(e => t.has(e[0]));
    return t.has(41) && t.has(45) && (e = e.filter(t => 45 !== t[0])),
        e
}
function hD(t) {
    let {
        noteString: e,
        intervalSize: n,
        className: i,
        noteTransform: r
    } = t;
    return d("use", {
        className: i,
        transform: r + ` translate(0, ${-(e - Math.round(.999 * e)) * n})`,
        xlinkHref: "#extraLine"
    })
}
function hM(t) {
    let {
        fret: e,
        className: n,
        transform: i
    } = t;
    return h6.includes(e) ? d("use", {
        className: n,
        transform: i,
        xlinkHref: "#drumCross"
    }) : hO.includes(e) ? d("use", {
        className: n,
        transform: i,
        xlinkHref: "#drumCross",
        style: "stroke-width: 2"
    }) : 52 === e ? d("g", {
        className: n,
        transform: i,
        children: [d("use", {
            xlinkHref: "#drumHat"
        }), d("use", {
            xlinkHref: "#drumCross",
            style: "stroke-width: 2"
        }),]
    }) : h9.includes(e) ? d("use", {
        className: n,
        transform: i,
        xlinkHref: "#drumTriangle"
    }) : [53, 91, 34].includes(e) ? d("use", {
        className: n,
        transform: i,
        xlinkHref: "#drumRhomb"
    }) : [46].includes(e) ? d("use", {
        className: n,
        transform: i,
        xlinkHref: "#drumCircleCross"
    }) : [92].includes(e) ? d("use", {
        className: n,
        transform: i,
        xlinkHref: "#drumCircleStroke"
    }) : [31].includes(e) ? d("use", {
        className: n,
        transform: i,
        xlinkHref: "#drumStroke"
    }) : d("use", {
        className: n,
        transform: i,
        xlinkHref: "#drum"
    })
}
let hB = "rw29l", h5 = {
    figure: "rw29l"
}, hF = "B6413b", hH = {
    strings: "B6413b"
}, hW = "h82xl", hV = "h89u", hU = "h82ou", hX = "h8j2", hG = "h82so", hz = "h81p9", hj = "h81p9 h8e1", hq = "h81p9 h82d8", hY = "h81p9 h82c6", hK = "h81p9 h8cd", hJ = "h816m", hQ = "h818t", hZ = "h818t h810t", pt = "h81w1", pe = "h82qg", pn = "h8152", pi = "h8ey", pr = "h8ey h81yr", ps = "h8ey h8306", pa = "h8ey h81cu", po = "h8ey h82xx", pl = "h8ey h81cp", pu = "h8ey h82tw", pc = "h8ey h85n", pd = "h8ey h82pf", ph = {
    harmonic: "h82xl",
    rest0: "h89u",
    rest1: "h82ou",
    rest2: "h8j2",
    rest3: "h82so",
    voice: "h81p9",
    voice0: "h81p9 h8e1",
    voice1: "h81p9 h82d8",
    voice2: "h81p9 h82c6",
    voice3: "h81p9 h8cd",
    edited: "h816m",
    vDrum: "h818t",
    vDrum0: "h818t h810t",
    vDrum1: "h81w1",
    vDrum2: "h82qg",
    vDrum3: "h8152",
    drumstick: "h8ey",
    drums0: "h8ey h81yr",
    drums1: "h8ey h8306",
    drums2: "h8ey h81cu",
    drums3: "h8ey h82xx",
    stick0: "h8ey h81cp",
    stick1: "h8ey h82tw",
    stick2: "h8ey h85n",
    stick3: "h8ey h82pf"
}, pp = 60;
function pf(t) {
    let {
        end: e,
        intervalSize: n
    } = t,
        i = "M0,0v48";
    for (let r = 0; r < 5; r++)
        i += `M0,${n * r} h${e}`;
    return i += "V0",
        s("path", {
            className: hH.strings,
            d: i
        })
}
function pg(t) {
    let {
        x: e,
        title: n,
        fret: i,
        string: r,
        intervalSize: a
    } = t;
    return s(c, null, s("text", {
        "text-anchor": "middle"
    }, n.split("\n").map((t, n) => s("tspan", {
        x: e,
        y: -14 * (3 - n)
    }, t))), s(pm, {
        x: e,
        fret: i,
        string: r,
        intervalSize: a
    }))
}
function pm(t) {
    let {
        x: e,
        fret: n,
        string: i,
        intervalSize: r
    } = t,
        a = ph.drums0,
        o = `translate(${e}, ${.5 + r * i})`,
        l = s(hM, {
            fret: n,
            className: a,
            transform: o
        }),
        u = (i <= -1 || i >= 5) && s(hD, {
            noteString: i,
            intervalSize: r,
            className: hH.strings,
            noteTransform: o
        });
    return 93 === n || 59 === n ? s(c, null, u, s("use", {
        className: a,
        transform: `translate(${e}, ${.5 - r / 2})`,
        xlinkHref: "#drumHatEdge"
    }), l) : u ? s(c, null, u, l) : l
}
function p$(t) {
    let {
        drumNotes: e,
        intervalSize: n
    } = t,
        i = 60 * Math.max(4, e.length);
    return s("svg", {
        className: h5.figure,
        width: i,
        height: 130
    }, s("g", {
        transform: "translate(0, 54)"
    }, s(pf, {
        end: i,
        intervalSize: n
    }), e.map((t, e) => s(pg, {
        fret: t[0],
        intervalSize: n,
        string: oV(t[0], !0),
        title: t[1],
        x: 60 * e + 30
    }))))
}
let p_ = "Byam0", py = "Bya2az", pv = "Bya2dc", pb = "Bya1se", p0 = {
    exitActive: "Byam0",
    enterActive: "Bya2az",
    enter: "Bya2dc",
    exit: "Bya1se"
}, pw = {
    animationStyles: p0
}, pE = {
    animationStyles: d8
}, pk = "help_notation";
function pS(t, e) {
    let n = hR(t),
        i = [];
    for (let r = 0; r < n.length; r += 4)
        i.push(n.slice(r, r + 4));
    return e && i.length % 2 == 1 && i.push([]),
        i
}
function px(t) {
    let e = Math.floor((t.size + 2) / 3),
        n = [...t.values()];
    return [n.slice(0, e), n.slice(e, 2 * e), n.slice(2 * e),]
}
let pT = g(t => {
    var e;
    let {
        usedDrums: n,
        horizontal: i
    } = t, {
        layer: r,
        experiments: a
    } = te("layer", "experiments"),
        o = r.layer === pk,
        l = (null === (e = a.drum_standard_notation) || void 0 === e ? void 0 : e.segment) !== "drop",
        u = l ? pS(n, i) : px(n);
    return s(e3, null, o && s(eb, i ? pw : pE, s("div", {
        className: i ? d1.wrapHorizontal : d1.wrap
    }, s("div", {
        className: l ? d1.notation : d1.notation__old,
        id: "drum_notation"
    }, s("h3", {
        className: d1.title
    }, "Instruments in the current track"), l ? u.map(t => d(p$, {
        drumNotes: t,
        intervalSize: 12
    })) : u.map((t, e) => s("div", {
        className: d1.col,
        key: e
    }, t.map(t => s("dl", {
        className: d1.line,
        key: t.name
    }, s("dt", {
        className: d1.name
    }, t.name), s("dd", {
        className: d1.def
    }, oD[t.name])))))))))
}), p3 = "Cpf12y", p1 = "Cpf2jn", pL = {
    difficulty: "Cpf12y",
    placeholder: "Cpf2jn"
}, pN = "VERY_EASY", pI = "EASY", p2 = "BELOW_INTERMEDIATE", p8 = "INTERMEDIATE", pA = "UPPER_INTERMEDIATE", p7 = "HARD", pC = "VERY_HARD", pP = "INSANE", p6 = {
    [pN]: "Beginner. Tier 1",
    [pI]: "Beginner. Tier 2",
    [p2]: "Intermediate. Tier 1",
    [p8]: "Intermediate. Tier 2",
    [pA]: "Intermediate. Tier 3",
    [p7]: "Advanced. Tier 1",
    [pC]: "Advanced. Tier 2",
    [pP]: "Advanced. Tier 3"
}, pO = {
    [pN]: 1,
    [pI]: 2,
    [p2]: 3,
    [p8]: 4,
    [pA]: 5,
    [p7]: 6,
    [pC]: 7,
    [pP]: 8
};
function p9(t) {
    return pO[t] || 0
}
function p4(t) {
    return p6[t] || ""
}
function pR(t, e) {
    let n = pO[t] || 0,
        i = pO[e] || 0;
    return n === i ? 0 : n > i ? 1 : -1
}
let pD = 5, pM = t => {
    let {
        id: e,
        difficultyString: n,
        difficultyNA: i
    } = t;
    if (!n || i)
        return s("span", {
            className: pL.placeholder,
            title: "Not calculated"
        });
    let r = 5 * p9(n);
    return s("span", {
        id: e,
        className: pL.difficulty,
        style: {
            "--diffSize": `${r}px`
        },
        title: p4(n)
    })
};
function pB(t) {
    let {
        styles: e
    } = t;
    return s("svg", {
        width: 13,
        height: 13,
        className: e.icon,
        viewBox: "0 -3 13 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, s("rect", {
        y: 1,
        width: 13,
        height: 11,
        rx: 3,
        className: e.fill
    }), s("path", {
        className: e.fillText,
        d: "M4.032 5.18h1.46c.02-.68.25-1.23 1.04-1.23.52 0 .86.32.86.8 0 .62-.52.91-.94 1.27-.66.57-.69 1.02-.69 1.84h1.33c0-.7.12-.89.7-1.29.64-.44 1.13-.96 1.13-1.79 0-1.23-.95-2.05-2.37-2.05-1.6 0-2.43.96-2.52 2.45zm3.16 3.29h-1.55V10h1.55V8.47z"
    }))
}
let p5 = "i5k2", pF = "i5k2 i52z2", pH = "i5k2 i51pj", pW = "i5k2 i52e5", pV = "i5k2 i52z2 i533w", pU = "i5k2 i52z2 i515d", pX = "i5k2 i52z2 i527v", pG = "i5k2 i52z2 i513s", pz = "i5k2 i52z2 i51e9", pj = "i5k2 i52z2 i51xu", pq = "i5k2 i52wn", pY = "i5p0", pK = "i5tp", pJ = "i5tp i51jx", pQ = "i5tp i5173", pZ = "i5t4", ft = "i51o8", fe = "i517k", fn = "i52ov", fi = {
    base: "i5k2",
    horizontalPopup: "i5k2 i52z2",
    verticalPopup: "i5k2 i51pj",
    verticalLeftPopup: "i5k2 i52e5",
    speedPopup: "i5k2 i52z2 i533w",
    pitchPopup: "i5k2 i52z2 i515d",
    soloPopup: "i5k2 i52z2 i527v",
    mutePopup: "i5k2 i52z2 i513s",
    loopPopup: "i5k2 i52z2 i51e9",
    printPopup: "i5k2 i52z2 i51xu",
    pitchshiftPopup: "i5k2 i52wn",
    link: "i5p0",
    basewrapper: "i5tp",
    wrapper: "i5tp i51jx",
    demowrapper: "i5tp i5173",
    text: "i5t4",
    linkText: "i51o8",
    demoText: "i517k",
    divider: "i52ov"
}, fr = p5 + " vtm3", fs = pZ + " vt1nf", fa = "vt25r", fo = {
    popup: p5 + " vtm3",
    text: pZ + " vt1nf",
    surveySection: "vt25r"
};
class fl extends o {
    componentDidMount() { }
    onUnderstandLinkClick = t => {
        t.preventDefault(),
            this.props.dispatch("layer/hide")
    };
    onStillHaveQuestionsLinkClick = () => { };
    render() {
        return s("div", {
            className: fo.popup,
            id: "explain-difficulty-popup"
        }, s("div", {
            className: fo.text
        }, "Each guitar track is assigned a difficulty level based on:", s("ol", {}, s("li", {}, "The speed required for playing left and right hand. Faster is harder."), s("li", {}, "The techniques required: bends, vibrato, harmonics, sweep picking, string skipping, etc. and their combinations."), s("li", {}, "The relative complexity of the chords used: F is harder than G because it requires a barre, Cm7b5 is harder than C5, etc.")), s("p", {}, "We usually skip the hardest 30% of a song (to skip solos) and roughly calculate the difficulty level based on the remaining 70%. In most cases, you can play the whole song in a band if you can play just 70% of the song."), s("p", {}, s("i", {}, "Disclaimer: the difficulty detection algorithm is experimental and designed for classic rock/metal songs that are played with a pick and it may produce less accurate results for other styles.")), s("div", {
            className: fo.surveySection
        }, s("a", {
            onClick: this.onUnderstandLinkClick,
            href: "",
            role: "button"
        }, "I understand, all clear"), s(tp, {
            to: "/a/wa/help#contact-us",
            onClick: this.onStillHaveQuestionsLinkClick
        }, "I still have questions"))))
    }
}
var fu = tn(fl);
let fc = {
    animationStyles: d8
};
function fd(t) {
    let {
        handleNotation: e,
        track: n
    } = t, {
        dispatch: i,
        part: r,
        screen: o,
        layer: l,
        device: u,
        isDeleted: d
    } = te("layer", "part", "meta", "screen", "layer", "device", "isDeleted"),
        h = u.isDesktop,
        p = o.isSmall,
        f = r.current && r.current.usedDrums,
        g = a(() => {
            i("layer/show", "difficulty_explained_popup")
        }, []),
        m = n.difficulty,
        $ = !p && m && "difficulty_explained_popup" === l.layer;
    return s(c, null, s("div", {
        className: dy.name,
        "aria-label": "track"
    }, "Track: ", n.title), p && !d && f && s("button", {
        className: d1.toggle,
        onClick: e,
        "aria-label": "notation"
    }, "(notation)"), p && !d && f && s(pT, {
        usedDrums: f
    }), p && s("hr", {
        className: dy.separator,
        width: 250
    }), m && s("div", {
        className: dy.difficulty,
        "aria-label": "track difficulty (rhythm)"
    }, s("span", {
        className: dy.label
    }, "Difficulty (Rhythm):"), s(pM, {
        id: "track-difficulty",
        difficultyString: n.difficulty
    }), h && s("button", {
        className: dy.explainLink,
        onClick: g,
        title: "Explain how difficulty is calculated",
        id: "explain_difficulty_link"
    }, s(pB, {
        styles: dy
    })), h && s(e3, null, $ && s(eb, fc, s(fu, null)))))
}
function fh() {
    return s("svg", {
        width: 55,
        height: 55,
        viewBox: "0 0 55 55"
    }, s("path", {
        d: "M48 0a6 6 0 0 1 6 6v42a6 6 0 0 1-6 6h-42a6 6 0 0 1-6-6v-42a6 6 0 0 1 6-6z",
        fill: "#FFAD00"
    }), s("path", {
        stroke: "#FFF",
        "stroke-width": 1.5,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        fill: "none",
        transform: "translate(7 10) scale(1.85)",
        d: eu
    }))
}
let fp = p5 + " Cpv2j2", ff = pK + " Cpv16o", fg = pZ + " Cpv2mh", fm = "Cpv2hv", f$ = {
    popup: p5 + " Cpv2j2",
    wrapper: pK + " Cpv16o",
    text: pZ + " Cpv2mh",
    link: "Cpv2hv"
};
function f_(t) {
    let {
        onClick: e,
        id: n
    } = t;
    return s(tp, {
        className: f$.popup,
        id: n,
        to: "/a/wa/signin",
        onClick: e,
        role: "dialog",
        "aria-label": "Sign up for free to favorite this tab."
    }, s("span", {
        className: f$.wrapper
    }, s(fh, null)), s("div", {
        className: f$.text
    }, "Please ", s("span", {
        className: f$.link
    }, "sign up"), " for free", s("br", null), "to favorite this tab."))
}
let fy = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"], fv = [43, 38, 33, 28], fb = [43, 38, 33, 26], f0 = [43, 38, 33, 28, 23], fw = [48, 43, 38, 33, 28, 23], fE = [64, 59, 55, 50, 45, 40], fk = [64, 59, 55, 50, 45, 38], fS = [64, 59, 55, 50, 45, 40, 35], fx = {
    4: {
        "E1 A1 D2 G2": "Standard 4-string bass",
        "D#1 G#1 C#2 F#3": "Down 1/2 step",
        "D1 G1 C2 F2": "Down 1 step",
        "C1 F1 A#1 D#2": "Down 2 step",
        "D1 A1 D2 G2": "Drop D"
    },
    5: {
        "B0 E1 A1 D2 G2": "Standard 5-string bass"
    },
    6: {
        "E2 A2 D3 G3 B3 E4": "STANDARD TUNING",
        "D2 A2 D3 G3 A3 D4": "DADGAD Dsus4",
        "D2 A2 D3 G3 B3 D4": "Double drop D",
        "D2 A2 D3 G3 B3 E4": "Drop D",
        "E2 A2 E3 A3 C#3 E4": "Open A major",
        "C2 G2 C3 G3 C3 E4": "Open C major",
        "D2 A2 D3 F#3 A3 D4": "Open D major",
        "E2 B2 E3 G#3 B3 E4": "Open E major",
        "E2 B2 E3 G3 B3 E4": "Open E minor",
        "D2 G2 D3 G3 B3 D4": "Open G major",
        "D2 G2 D3 G3 A#3 D4": "Open G minor",
        "E3 A3 D4 G4 B3 E5": "Nashville guitar",
        "B0 E1 A1 D2 G2 C3": "Standard 6-string bass"
    },
    7: {
        "B1 E2 A2 D3 G3 B3 E4": "7-string guitar"
    }
};
function fT(t, e) {
    return t.map(t => t + e)
}
function f3(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return t.map(t => fy[t % 12] + (e ? Math.floor(t / 12) - 1 : ""))
}
function f1(t) {
    return t.map(t => {
        let e = +t.slice(-1),
            n = t.substring(0, t.length - 1);
        return fy.indexOf(n) + (e + 1) * 12
    })
}
function fL(t, e) {
    let n = fN(t, e);
    if (n) {
        let i = n[0] - e[0];
        for (let r = 0; r < n.length; r++)
            if (e[r] + i !== n[r])
                return;
        return {
            tuningName: fI(n),
            pitch: i,
            standard: n
        }
    }
}
function fN(t, e) {
    if (n4(t)) {
        if (6 === e.length)
            return e[3] === e[5] + 12 ? fk : fE;
        if (7 === e.length)
            return fS
    } else if (nR(t)) {
        if (4 === e.length)
            return e[1] === e[3] + 12 ? fb : fv;
        if (5 === e.length)
            return f0;
        if (6 === e.length)
            return fw
    }
    return e
}
function fI(t) {
    let e = f3(t).reverse().join(" "),
        n = f3(t, !1).reverse().join(" ");
    if (t.length in fx && e in fx[t.length])
        return fx[t.length][e];
    let i = n.split(" ");
    return i.map((t, e) => e === i.length - 1 ? t.toLowerCase() : t).join(" ")
}
function f2(t) {
    return f3(t, !1).reverse().join(" ")
}
let f8 = [tM, tB, t5, tF,], fA = [tH, tW, tV, tU,], f7 = {
    instrument: tM,
    difficulty: tH,
    tunings: {}
}, fC = ["and", "or", "but", "nor", "yet", "so", "for", "a", "an", "the", "in", "to", "of", "at", "by", "up", "off", "on"], fP = t => t.charAt(0).toUpperCase() + t.slice(1);
function f6(t) {
    try {
        let e = t.split(" ");
        for (let n = 0; n < e.length; n++)
            0 !== n && n !== e.length - 1 && fC.includes(e[n].toLowerCase()) ? e[n] = e[n].toLowerCase() : e[n] = fP(e[n]);
        return e.join(" ")
    } catch {
        return t
    }
}
let fO = t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
function f9(t) {
    let e = [];
    function n(t, n) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = arguments.length > 3 ? arguments[3] : void 0;
        0 !== i && (n = fT(n, i)),
            r = r || tM;
        let s = f3(n).join(","),
            a = `${r}:${s}`,
            o = f2(n);
        e.push([`${t} (${o})`, a])
    }
    function i() {
        n("Standard 6-string", fE, 0, tB),
            n("Standard 7-string", fS, 0, tB),
            n("Drop D", fk, 0, tB),
            n("Drop C#", fk, -1, tB),
            n("Drop C", fk, -2, tB),
            n("Drop B", fk, -3, tB),
            n("Drop A#", fk, -4, tB),
            n("Drop A", fk, -5, tB),
            n("Drop G#", fk, -6, tB),
            n("Drop G", fk, -7, tB),
            n("Drop F#", fk, -8, tB),
            n("Drop F", fk, -9, tB)
    }
    if (e.push([fO(tX), tX]), t === t5) {
        n("Standard 4-string", fv, 0, t5),
            n("Standard 5-string", f0, 0, t5),
            n("Standard 6-string", fw, 0, t5),
            n("Drop D", fb, 0, t5),
            n("Drop C#", fb, -1, t5),
            n("Drop C", fb, -2, t5),
            n("Drop B", fb, -3, t5),
            n("Drop A#", fb, -4, t5),
            n("Drop A", fb, -5, t5);
        for (let r = 1; r <= 7; r++)
            n(`${r} st down`, fv, -r, t5)
    } else if (t === tB) {
        i();
        for (let s = 1; s <= 7; s++)
            n(`${s} st down`, fE, -s, tB)
    } else if (t === tM) {
        i();
        for (let a = 1; a <= 7; a++)
            n(`${a} st down`, fE, -a, tB);
        n("Bass: 4-string", fv, 0, t5),
            n("Bass: 5-string", f0, 0, t5),
            n("Bass: 6-string", fw, 0, t5),
            n("Bass: Drop D", fb, 0, t5),
            n("Bass: Drop C#", fb, -1, t5),
            n("Bass: Drop C", fb, -2, t5),
            n("Bass: Drop B", fb, -3, t5),
            n("Bass: Drop A#", fb, -4, t5),
            n("Bass: Drop A", fb, -5, t5)
    }
    return e
}
function f4(t) {
    let e = t.split(":");
    return [e[0], f1(e[1].split(",")).join(","),]
}
function fR(t, e) {
    if (e === tX)
        return t;
    let [n, i] = f4(e);
    return t.filter(t => (function (t) {
        let e = t.tracks;
        if (e)
            for (let r = 0; r < e.length; r++) {
                let s = e[r];
                if (void 0 !== s.tuning && s.tuning.join(",") === i && (n === t5 && nR(s.instrumentId) || n === tB && n4(s.instrumentId)))
                    return !0
            }
        return !1
    })(t))
}
function fD(t, e) {
    function n(t, e) {
        let n = t.tracks;
        if (n)
            for (let i = 0; i < n.length; i++) {
                let r = n[i];
                if (e(r.instrumentId))
                    return !0
            }
        return !1
    }
    return t.filter(t => {
        if (e === t5)
            return n(t, nR);
        if (e === tF)
            return n(t, n9);
        if (e === tB)
            return n(t, n4);
        if (e === tM)
            return !0;
        throw Error(`Invalid instrument filter value (${e})`)
    })
}
function fM(t, e) {
    return t ? e === tH ? t.slice() : t.slice().filter(t => {
        let n = t.difficulty;
        if (!n)
            return !1;
        if (e === tW)
            return 0 >= pR(n, pI);
        if (e === tV) {
            let i = pR(n, p2) >= 0,
                r = 0 > pR(n, p7);
            return i && r
        }
        return e === tU && pR(n, p7) >= 0
    }) : void 0
}
function fB(t, e) {
    return "none" !== e ? t.slice().sort((t, n) => {
        let i = t.difficulty,
            r = n.difficulty,
            s = "asc" === e ? pR(i, r) : pR(r, i);
        return 0 === s ? fV(n, t) : s
    }) : t
}
function f5(t, e, n) {
    return fB(fM(t, n), e)
}
function fF(t, e) {
    return {
        ...t,
        difficulty: e
    }
}
function fH(t, e) {
    return {
        ...t,
        instrument: e
    }
}
function fW(t, e, n) {
    let i = {
        ...t,
        tunings: {
            ...t.tunings
        }
    };
    return i.tunings[e] = n,
        i
}
function fV(t, e) {
    let n = fU(t),
        i = fU(e);
    return n < i ? -1 : n > i ? 1 : 0
}
function fU(t) {
    return t.tracks && 0 !== t.tracks.length ? t.tracks[t.defaultTrack].views : 0
}
function fX(t) {
    let e = t.tunings[t.instrument];
    return e && e !== tX || t.instrument !== tM || t.difficulty !== tH
}
function fG(t) {
    return t !== tM && t !== tB
}
function fz(t) {
    return t === tF
}
function fj(t) {
    let e = t.tunings[t.instrument];
    return {
        difficulty: t.difficulty !== tH ? t.difficulty : null,
        instrument: t.instrument !== tM ? t.instrument : null,
        tuning: e && e !== tX ? f4(e)[1] : null
    }
}
function fq(t) {
    return n9(t) ? n9 : nR(t) ? nR : n4
}
function fY(t) {
    return n9(t) ? 1024 : nR(t) ? 32 : 24
}
function fK(t, e) {
    let n = fq(e);
    return t && t.map(t => {
        if (t.tracks) {
            let e = t.tracks.reduce((t, e, i, r) => n(e.instrumentId) && (-1 === t || e.views > r[t].views) ? i : t, -1);
            return -1 !== e ? {
                ...t,
                defaultTrack: e
            }
                : t
        }
        return t
    })
}
function fJ(t, e) {
    if (t.difficulty !== e.difficulty && t.instrument !== e.instrument)
        return !1;
    let n = t.tunings[t.instrument],
        i = e.tunings[e.instrument];
    return !n && !i || n === i
}
let fQ = t => (t.sort((t, e) => {
    let n = t.artist.localeCompare(e.artist);
    return 0 === n ? t.title.localeCompare(e.title) : n
}), t);
function fZ(t) {
    try {
        let e = t.tracks;
        if (!e || !e.length)
            return;
        let n = e.filter(t => n4(t.instrumentId) && t.difficulty),
            i = -1;
        Number.isInteger(t.defaultTrack) && n4(e[t.defaultTrack].instrumentId) ? t.difficulty = e[t.defaultTrack].difficulty : (n.forEach((t, e) => {
            (-1 === i || (t.views || 0) > (n[i].views || 0)) && (i = e)
        }), -1 !== i && (t.difficulty = n[i].difficulty))
    } catch (r) {
        console.error(r)
    }
}
function gt(t) {
    return t.forEach(fZ),
        t.forEach(t => {
            t.title = f6(t.title)
        }),
        t
}
function ge(t) {
    switch (t) {
        case tU:
            return "2";
        case tV:
            return "1";
        default:
            return "0"
    }
}
function gn(t, e, n, i) {
    let r = !e.instrument || e.instrument === tB,
        s = e.instrument && e.instrument.toLowerCase() || void 0,
        a = e.tuning || void 0,
        o = r && e.difficulty && ge(e.difficulty) || void 0,
        l = {
            size: n.toString()
        };
    return i && (l.from = i.toString()),
        t && (l.pattern = t),
        s && (l.inst = s),
        o && (l.difficulty = o),
        a && (l.tuning = a),
        tD(l)
}
async function gi(t, e, n, i, r, s) {
    let a = gn(e, n, r, s),
        o = await fetch(`${t}${a}`, {
            signal: i,
            credentials: "omit"
        });
    if (i && i.aborted)
        return [];
    s6(o);
    let l = await o.json(),
        u = gt(l);
    return i && i.aborted ? [] : u
}
function gr(t, e, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        s = s5("/api/songs");
    return gi(s, t, e, n, i, r)
}
async function gs(t, e) {
    let n = s5(`/api/artist/${t}`),
        i = await cT(() => n, "artist", e);
    return e.aborted || !i ? null : i
}
function ga(t, e, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 500,
        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
        a = s5(`/api/artist/${t}/songs`);
    return gi(a, e, n, i, r, s)
}
async function go(t) {
    let e = s5("/api/favorites"),
        n = await fetch(e, {
            credentials: "include"
        });
    s6(n);
    let i = await n.json();
    return gt(fQ(i))
}
async function gl(t) {
    let e = s5(`/api/favorites/${t}`),
        n = await fetch(e, {
            method: "put",
            credentials: "include"
        });
    s6(n)
}
async function gu(t) {
    let e = s5(`/api/favorites/${t}`),
        n = await fetch(e, {
            method: "delete",
            credentials: "include"
        });
    s6(n)
}
let gc = "xji4", gd = "xj3s", gh = "xj248", gp = "xj248 xj13q", gf = {
    favorite: "xji4",
    toggle: "xj3s",
    star: "xj248",
    starSelected: "xj248 xj13q"
}, gg = {
    animationStyles: d8
};
function gm() {
    let {
        dispatch: t,
        user: e,
        favorites: n,
        meta: i,
        layer: r,
        isDeleted: o
    } = te("user", "favorites", "meta", "experiments", "layer", "isDeleted");
    if (o || !i.allowedByLicense)
        return;
    let l = "favorite" === r.layer,
        u = e.isLoggedIn,
        c = i.partId,
        d = u && (i.wasFavoriteOnServerRender || n.favorites.some(t => t.songId === i.songId)),
        h = a(() => {
            if (u && i.current) {
                if (d)
                    t("favorites/delete", i.songId);
                else {
                    let {
                        songId: e,
                        artistId: n,
                        artist: s,
                        title: a,
                        tracks: o
                    } = i.current,
                        h = {
                            songId: e,
                            artistId: n,
                            artist: s,
                            title: a,
                            tracks: o ? o.map(t => {
                                let {
                                    instrument: e,
                                    instrumentId: n,
                                    name: i,
                                    difficulty: r,
                                    tuning: s
                                } = t;
                                return {
                                    instrument: e,
                                    instrumentId: n,
                                    name: i,
                                    tuning: s,
                                    difficulty: r
                                }
                            }) : o,
                            defaultTrack: c
                        };
                    fZ(h),
                        t("favorites/add", {
                            songId: e,
                            song: h
                        })
                }
                r.layer && t("layer/hide")
            } else
                l ? t("layer/hide") : t("layer/show", "favorite")
        }, [r, u, d, i, c]),
        p = d ? gf.starSelected : gf.star;
    return s("div", {
        className: gf.favorite,
        id: "favorite"
    }, s("button", {
        className: gf.toggle,
        id: "favorite-toggle",
        onClick: h,
        title: d ? "Remove from favorites" : "Add to favorites"
    }, s(ei, {
        width: 30,
        height: 30,
        viewbox: "-4 -3 35 35",
        state: d ? "fill" : "none",
        styles: {
            icon: p
        },
        id: "favorite-icon"
    })), s(e3, null, l && s(eb, gg, s(f_, {
        id: "favorite-popup"
    }))))
}
function g$(t) {
    let {
        styles: e
    } = t;
    return s("svg", {
        width: 21,
        height: 21,
        viewBox: "1050 24.198 18 20.996",
        className: e.icon,
        id: "tab-delete-icon",
        role: "img",
        "aria-labelledby": "tab-delete-id"
    }, s("title", {
        id: "tab-delete-id"
    }, "Delete Tab"), s("path", {
        className: e.strokeAnim,
        d: "M1063.828 45.177l-10.282.017c-1.224-.003-2.215-.959-2.218-2.14V28.767c0-.434.364-.785.814-.785l13.716-.017c.45 0 .814.352.814.785v14.287c-.003 1.181-.995 2.138-2.219 2.14h-.625zm-10.768-15.625V42.86c0 .315.264.57.591.57h10.667a.58.58 0 0 0 .591-.57V29.552h-11.849z"
    }), s("path", {
        className: e.fill,
        d: "M1062.375 29.552h-7.094c-.449 0-.813-.352-.813-.785v-2.229c.002-1.292 1.087-2.339 2.426-2.34h3.868c1.339.001 2.425 1.048 2.426 2.34v2.229c0 .433-.364.785-.813.785zm-6.15-1.57h5.206v-1.266a.786.786 0 0 0-.8-.771h-3.607a.786.786 0 0 0-.799.771v1.266zM1059 41.691c-.483 0-.875-.351-.875-.785v-8.719c0-.433.392-.784.875-.784s.875.351.875.784v8.719c0 .434-.392.785-.875.785zM1055.781 41.691c-.483 0-.875-.351-.875-.785v-8.719c0-.433.392-.784.875-.784s.875.351.875.784v8.719c0 .434-.392.785-.875.785zM1062.25 41.691c-.483 0-.875-.351-.875-.785v-8.718c0-.434.392-.785.875-.785s.875.351.875.785v8.718c0 .434-.392.785-.875.785z"
    }), s("path", {
        className: e.strokeAnim,
        d: "M1067.169 29.677h-16.338c-.459 0-.831-.441-.831-.875 0-.433.372-.851.831-.851h16.338c.459 0 .831.418.831.851 0 .434-.372.875-.831.875z"
    }))
}
let g_ = "tnv2", gy = "tn1vk", gv = "tn1vk tnwo", gb = "tn13b", g0 = "tn1pz", gw = "tn1pz tn10k", gE = {
    delete: "tnv2",
    button: "tn1vk",
    buttonActive: "tn1vk tnwo",
    icon: "tn13b",
    fill: "tn1pz",
    strokeAnim: "tn1pz tn10k"
}, gk = (t, e) => {
    let n = `${t}, ${e}`,
        i = "You are about to delete the whole song with all its revisions permanently. To confirm deletion, please enter the song artist and title as described below:\n\n" + n + "\n",
        r = window.prompt(i);
    return r === n || (window.alert("Confirmation string does not match artist and title. Aborting deletion!"), !1)
}, gS = () => {
    let {
        dispatch: t,
        meta: e,
        part: n,
        editor: i,
        isDeleted: r
    } = te("meta", "part", "editor", "isDeleted"),
        o = !r && !e.isFailed && !n.isFailed && e.current && !!e.current.tracks && !!e.current.audio && i.canDelete;
    if (!o)
        return;
    let l = a(() => {
        e.current && gk(e.current.artist, e.current.title) && t("editor/delete", e.current)
    }, [t, e.current]),
        u = i.processingDeletion;
    return s("div", {
        className: gE.delete,
        id: "deletion"
    }, u && s(e6, {
        width: 21,
        height: 21,
        fill: "#42a4f8"
    }), !u && s("button", {
        className: gE.button,
        onClick: l
    }, s(g$, {
        styles: gE
    })))
};
function gx(t) {
    let {
        styles: e
    } = t;
    return s("svg", {
        width: 25,
        height: 24,
        viewBox: "0 0 25 24",
        className: e.icon,
        id: "revisions-icon",
        role: "img",
        "aria-labelledby": "revisions-title-id"
    }, s("title", {
        id: "revisions-title-id"
    }, "Revisions"), s("path", {
        className: e.strokeAnim,
        "stroke-width": "2",
        d: "M19 10.5V17a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h9"
    }), s("path", {
        className: e.stroke,
        "stroke-width": "1.8",
        "stroke-linecap": "round",
        strokeLinejoin: "round",
        d: "M17.8 7l-7 6.6-4.5 1.7 1.9-4.6 7-6.6"
    }), s("path", {
        className: e.fill,
        d: "M8.2 10.7l2.6 2.9-4.5 1.7zM19.4 6.3l1.8-1.7c1.4-1.4-2-5-3.5-3.6l-1.8 1.7z"
    }))
}
async function gT(t, e, n) {
    try {
        t("revisions/load:processing", {
            songId: e
        });
        let i = await c9(e, n);
        t("revisions/load:done", {
            songId: e,
            revisions: i
        })
    } catch (r) {
        if (n.aborted)
            return;
        t("revisions/load:error", {
            songId: e,
            error: r
        })
    }
}
let g3 = t => {
    t.on("meta/load:processing", (t, e) => {
        let {
            songId: n
        } = e;
        if (t.revisions.songId && n !== t.revisions.songId)
            return {
                revisions: {
                    revisions: null,
                    isLoading: !0,
                    isError: !1,
                    songId: void 0
                }
            }
    }),
        t.on("revisions/load:processing", (t, e) => {
            let {
                songId: n
            } = e;
            if (t.meta.songId === n)
                return {
                    revisions: {
                        ...t.revisions,
                        songId: n,
                        revisions: null,
                        isLoading: !0,
                        isError: !1
                    }
                }
        }),
        t.on("revisions/load:done", (t, e) => {
            let {
                revisions: n,
                songId: i
            } = e;
            if (t.meta.songId === i)
                return {
                    revisions: {
                        ...t.revisions,
                        revisions: n,
                        isLoading: !1,
                        isError: !1
                    }
                }
        }),
        t.on("revisions/load:error", (t, e) => {
            let {
                error: n,
                songId: i
            } = e;
            if (t.meta.songId === i)
                return {
                    revisions: {
                        ...t.revisions,
                        revisions: null,
                        isLoading: !1,
                        isError: !0
                    }
                }
        })
}, g1 = "Bo82u2", gL = "Bo81oq", gN = {
    popup: "Bo82u2",
    arrow: "Bo81oq"
}, gI = f(() => Promise.all([import("./RevisionsPopupContent.f102cba1.js"), eX(["/static/latest/RevisionsPopupContent.57c177b47e2d792d.css", "/static/latest/index.77af498a5051b300.css", "/static/latest/FileInput.7c805333bfa0e181.css", "/static/latest/FormError.b880d263c7949fde.css", "/static/latest/Input.2762c3e20d6520b6.css"])]).then(t => t[0])), g2 = 298, g8 = () => {
    let {
        dispatch: t,
        meta: e
    } = te("meta"),
        [r, a] = n({
            height: 298
        });
    return i(async () => {
        let n = new c2;
        return await gT(t, e.songId, n.signal),
            n.abort.bind(n)
    }, [e.songId]),
        m(() => t("upload/reset"), []),
        s("div", {
            id: "revisions-popup",
            className: gN.popup,
            style: r
        }, s(eV, {
            component: gI,
            style: r,
            setStyle: a
        }), s("div", {
            className: gN.arrow
        }))
}, gA = "e32l8", g7 = "e32ah", gC = "e32ah e3d0", gP = "e32em", g6 = "e32kz", gO = "e319r", g9 = "e319r e31k", g4 = {
    revisions: "e32l8",
    toggle: "e32ah",
    toggleActive: "e32ah e3d0",
    icon: "e32em",
    fill: "e32kz",
    stroke: "e319r",
    strokeAnim: "e319r e31k"
}, gR = {
    animationStyles: d8
}, gD = () => {
    let {
        dispatch: t,
        layer: e,
        isDeleted: n,
        screen: i,
        meta: r
    } = te("layer", "screen", "isDeleted", "meta"),
        o = !n && !i.isSmall && r.allowedByLicense;
    if (!o)
        return;
    let l = "revisions" === e.layer,
        u = a(() => {
            "revisions" === e.layer ? t("layer/hide") : t("layer/show", "revisions")
        }, [e.layer]),
        c = {
            className: l ? g4.toggleActive : g4.toggle,
            id: "revisions-toggle",
            onClick: u,
            title: l ? "Hide revisions" : "Show revisions"
        },
        d = s(g8, null);
    return s("div", {
        className: g4.revisions,
        id: "revisions"
    }, s("button", c, s(gx, {
        styles: g4
    })), s(e3, null, l && s(eb, gR, d)))
}, gM = "Cye1em", gB = "Cye35a", g5 = "Cye35a Cye1tx", gF = "Cye1ja", gH = "Cye2aa", gW = "Cye2dx", gV = "Cye2b7", gU = {
    buttonWrapper: "Cye1em",
    button: "Cye35a",
    active: "Cye35a Cye1tx",
    shape: "Cye1ja",
    popup: "Cye2aa",
    escPopup: "Cye2dx",
    clickOverlay: "Cye2b7"
}, gX = {
    animationStyles: d8,
    timeout: 500
}, gG = 3500, gz = "M18.948 17.041h-2.015l.001-2.326c0-1.412 1.031-2.679 2.655-2.679h4.277l-.016 2.02h-4.183c-.49-.042-.735.186-.735.685 0 .498.006 1.265.016 2.3zM4.918 17.072h2.015v-2.326c0-1.412-1.031-2.679-2.655-2.679H0l.016 2.02H4.2c.49-.042.734.186.734.685 0 .499-.006 1.265-.016 2.3zM18.948.032h-2.015l.001 2.325c0 1.412 1.031 2.679 2.655 2.679h4.277l-.016-2.019h-4.183c-.49.041-.735-.187-.735-.686 0-.498.006-1.264.016-2.299zM4.918 0h2.015v2.326c0 1.412-1.031 2.679-2.655 2.679H0l.016-2.019H4.2c.49.041.734-.187.734-.686 0-.498-.006-1.265-.016-2.3z", gj = "M2.015 5.005H0l.001-2.326C.001 1.267 1.032 0 2.656 0h4.277l-.016 2.02H2.734c-.49-.042-.735.186-.735.685 0 .498.006 1.265.016 2.3zM21.985 5.036H24l-.001-2.326c0-1.412-1.03-2.679-2.654-2.679h-4.278l.016 2.02h4.184c.49-.042.734.186.734.685 0 .499-.006 1.265-.016 2.3zM2.015 11.996H0l.001 2.325C.001 15.733 1.032 17 2.656 17h4.277l-.016-2.019H2.734c-.49.041-.735-.187-.735-.686 0-.498.006-1.264.016-2.299zM21.985 11.964H24l-.001 2.326c0 1.412-1.03 2.679-2.654 2.679h-4.278l.016-2.019h4.184c.49.041.734-.187.734-.686 0-.498-.006-1.265-.016-2.3z";
class gq extends o {
    pendingHideHint = null;
    constructor() {
        super(),
            this.state = {
                showHint: !1
            }
    }
    componentWillReceiveProps(t) {
        let e = this.props;
        t.isFullscreen !== e.isFullscreen && (this.cancelPendingHideHint(), t.isFullscreen && (this.setState({
            showHint: !0
        }), this.pendingHideHint = setTimeout(() => {
            this.setState({
                showHint: !1
            })
        }, 3500))),
            t.isFullscreen || this.setState({
                showHint: !1
            })
    }
    componentWillUnmount() {
        this.cancelPendingHideHint()
    }
    render() {
        let t = this.props.isFullscreen,
            e = "fullscreen-title-id";
        return s("div", {
            id: "fullscreen"
        }, s(e3, null, this.state.showHint && s(eb, gX, s("div", {
            className: gU.escPopup,
            onClick: this.onEscHintClick
        }, "Press ESC to exit fullscreen mode"))), s("div", {
            className: gU.buttonWrapper,
            id: "fullscreen-controls"
        }, s("button", {
            className: t ? gU.active : gU.button,
            onClick: this.props.handleFullscreen,
            "aria-label": "fullscreen"
        }, s("svg", {
            width: 24,
            height: 17,
            role: "img",
            "aria-labelledby": e
        }, s("title", {
            id: e
        }, t ? "Turn off fullscreen mode (ESC)" : "Turn on fullscreen mode (Alt + Enter)"), s("path", {
            className: gU.shape,
            d: t ? "M18.948 17.041h-2.015l.001-2.326c0-1.412 1.031-2.679 2.655-2.679h4.277l-.016 2.02h-4.183c-.49-.042-.735.186-.735.685 0 .498.006 1.265.016 2.3zM4.918 17.072h2.015v-2.326c0-1.412-1.031-2.679-2.655-2.679H0l.016 2.02H4.2c.49-.042.734.186.734.685 0 .499-.006 1.265-.016 2.3zM18.948.032h-2.015l.001 2.325c0 1.412 1.031 2.679 2.655 2.679h4.277l-.016-2.019h-4.183c-.49.041-.735-.187-.735-.686 0-.498.006-1.264.016-2.299zM4.918 0h2.015v2.326c0 1.412-1.031 2.679-2.655 2.679H0l.016-2.019H4.2c.49.041.734-.187.734-.686 0-.498-.006-1.265-.016-2.3z" : "M2.015 5.005H0l.001-2.326C.001 1.267 1.032 0 2.656 0h4.277l-.016 2.02H2.734c-.49-.042-.735.186-.735.685 0 .498.006 1.265.016 2.3zM21.985 5.036H24l-.001-2.326c0-1.412-1.03-2.679-2.654-2.679h-4.278l.016 2.02h4.184c.49-.042.734.186.734.685 0 .499-.006 1.265-.016 2.3zM2.015 11.996H0l.001 2.325C.001 15.733 1.032 17 2.656 17h4.277l-.016-2.019H2.734c-.49.041-.735-.187-.735-.686 0-.498.006-1.264.016-2.299zM21.985 11.964H24l-.001 2.326c0 1.412-1.03 2.679-2.654 2.679h-4.278l.016-2.019h4.184c.49.041.734-.187.734-.686 0-.498-.006-1.265-.016-2.3z"
        })))))
    }
    onEscHintClick = () => {
        this.cancelPendingHideHint(),
            this.setState({
                showHint: !1
            })
    };
    cancelPendingHideHint() {
        null != this.pendingHideHint && (clearTimeout(this.pendingHideHint), this.pendingHideHint = null)
    }
}
function gY(t) {
    let {
        shadow: e = "#CA7F06",
        width: n = 54,
        height: i = 30,
        id: r = "iconDemo"
    } = t;
    return s("svg", {
        width: n,
        height: i,
        viewBox: "0 0 54 30"
    }, s("defs", {}, s("filter", {
        id: r,
        x: "-200%",
        y: "-200%",
        width: "400%",
        height: "400%",
        "filter-units": "objectBoundingBox",
        "color-interpolation-filters": "sRGB"
    }, s("feGaussianBlur", {
        in: "SourceGraphic"
    }), s("feOffset", {
        dy: 3,
        result: "offsetBlur"
    }), s("feFlood", {
        "flood-color": e,
        "flood-opacity": 1
    }), s("feComposite", {
        in2: "offsetBlur",
        operator: "in",
        result: "dropShadow"
    }), s("feBlend", {
        in: "SourceGraphic",
        in2: "dropShadow"
    }))), s("path", {
        d: "M6.75 0h40.5A6.75 6.75 0 0 1 54 6.75v13.5A6.75 6.75 0 0 1 47.25 27H6.75A6.75 6.75 0 0 1 0 20.25V6.75A6.75 6.75 0 0 1 6.75 0z",
        fill: "#FF9D00",
        filter: `url(#${r})`,
        databackgound: ""
    }), s("path", {
        fill: "#FFF",
        d: "M13.18 15.76c.02.29.06.52.11.69.06.17.13.29.23.36s.23.1.38.1.28-.03.37-.1c.1-.07.18-.19.23-.36.06-.17.1-.4.11-.69a15.57 15.57 0 0 0 0-2.13 3.03 3.03 0 0 0-.1-.69.67.67 0 0 0-.24-.36.62.62 0 0 0-.37-.1.66.66 0 0 0-.38.1.67.67 0 0 0-.23.36c-.05.17-.09.4-.1.69a16.65 16.65 0 0 0 0 2.13zm4.12-6.55v9.47h-2.57V17.6h-.03c-.17.44-.4.76-.68.96-.28.2-.66.3-1.13.3-.89 0-1.5-.36-1.86-1.05a7.6 7.6 0 0 1-.53-3.28c0-.75.06-1.39.18-1.9.12-.5.28-.92.5-1.23.2-.32.46-.55.76-.68a2.4 2.4 0 0 1 2.02.03c.3.17.51.45.65.87h.03V9.2h2.66zM14.63 5.48h2.69v2.69h-2.69zM22.12 12.42c-.1-.2-.3-.3-.58-.3-.28 0-.46.1-.57.3-.1.2-.15.5-.15.93v.35h1.46v-.35c0-.43-.05-.74-.16-.93zm-1.3 3.77c0 .43.07.72.22.86a.7.7 0 0 0 .5.21c.23 0 .42-.09.55-.28.14-.2.2-.56.2-1.1h2.39c-.02.98-.27 1.72-.75 2.22-.48.5-1.28.74-2.38.74-.64 0-1.17-.07-1.6-.21a2.19 2.19 0 0 1-1.05-.7 3.02 3.02 0 0 1-.57-1.3 9.42 9.42 0 0 1-.17-1.93c0-.77.07-1.41.2-1.94.12-.54.32-.97.6-1.3.27-.34.63-.58 1.05-.73.43-.15.94-.23 1.54-.23.54 0 1 .06 1.4.2.4.12.73.33 1 .63s.47.7.6 1.18c.14.49.2 1.1.2 1.82v.81h-3.93v1.05zM29.22 12.7c-.1-.15-.27-.22-.5-.22-.24 0-.4.07-.5.22-.1.14-.15.39-.15.72v5.26H25.4v-7.97h2.57v.97h.03c.34-.79.99-1.18 1.93-1.18.55 0 .97.1 1.26.3.29.2.52.51.69.92.2-.45.48-.77.84-.95.36-.18.75-.27 1.16-.27.3 0 .57.03.82.1.25.06.47.18.65.34.2.17.34.4.45.67.1.27.16.63.16 1.06v6.01h-2.65v-5.26c0-.33-.05-.58-.15-.72-.1-.15-.27-.22-.5-.22-.24 0-.4.07-.5.22-.1.14-.15.39-.15.72v5.26h-2.65v-5.26c0-.33-.05-.58-.15-.72zM39.4 15.93c.02.32.06.57.12.76.06.19.14.31.23.38.1.07.21.1.36.1s.27-.03.37-.1c.1-.07.17-.2.23-.38.05-.19.09-.44.1-.76a21.45 21.45 0 0 0 0-2.47 3.69 3.69 0 0 0-.1-.76c-.06-.19-.13-.32-.23-.39a.63.63 0 0 0-.37-.1.6.6 0 0 0-.36.1c-.1.07-.17.2-.23.39-.06.18-.1.44-.12.76a20.82 20.82 0 0 0 0 2.47zm3.99.3c-.07.5-.23.95-.47 1.34-.23.39-.57.7-1.02.93-.45.23-1.04.34-1.79.34-.78 0-1.39-.1-1.84-.31-.45-.21-.8-.51-1.02-.89a3.4 3.4 0 0 1-.43-1.32 13 13 0 0 1 .01-3.17c.07-.5.23-.95.47-1.34.23-.4.57-.7 1.02-.95a3.78 3.78 0 0 1 1.79-.36c.78 0 1.39.11 1.84.33.45.22.8.53 1.02.9.23.4.37.84.43 1.34a13 13 0 0 1-.01 3.16z"
    }))
}
let gK = "Cy52of", gJ = {
    switcherLink: "Cy52of"
};
var gQ = "/static/media/to-chords.e5117428.svg", gZ = "/static/media/to-tab.10ed68c4.svg";
function mt(t) {
    let {
        isTab: e,
        isChords: n,
        song: i,
        meta: r,
        chords: s
    } = t;
    if (e && i.hasChords) {
        let a = i.title + " Chords";
        return d(tp, {
            to: ib(r.current),
            className: gJ.switcherLink,
            title: a,
            children: [d("img", {
                src: gQ,
                width: 23,
                height: 22,
                alt: a
            })]
        })
    }
    if (n && i.hasPlayer) {
        let o = i.title + " Tab";
        return d(tp, {
            to: i_(s.current),
            className: gJ.switcherLink,
            title: o,
            children: [d("img", {
                src: gZ,
                width: 23,
                height: 22,
                alt: o
            })]
        })
    }
}
function me(t) {
    let {
        styles: {
            icon: e,
            stroke: n
        }
    } = t;
    return s("svg", {
        width: 27,
        height: 25,
        viewBox: "0 0 27 25",
        className: e
    }, s("path", {
        d: "M0 5h27M0 12h27M0 19h27",
        className: n,
        "stroke-width": 2
    }))
}
function mn(t) {
    return nR(t) ? " Bass Tab" : n9(t) ? " Drum Tab" : " Tab"
}
function mi(t) {
    let {
        plusAccess: e,
        handleFullscreen: n,
        handleNotation: i,
        showFullUI: r = !0
    } = t, {
        dispatch: s,
        route: a,
        routeContent: o,
        songs: l,
        artist: u,
        screen: h,
        favorites: p,
        meta: f,
        demo: g,
        chords: m,
        isDeleted: $
    } = te("route", "routeContent", "songs", "artist", "favorites", "screen", "meta", "demo", "chords", "isDeleted"),
        _ = a.isPanel,
        y = h.isSmall,
        v = o.songId,
        b,
        w = !1,
        E = !1,
        k = !1,
        S = null,
        x;
    if ("tab" === o.page ? (w = !0, k = !e && f.allowedByLicense, f.current && f.current.songId === v && (b = f.current, null != f.partId && f.current.tracks && (S = f.current.tracks[f.partId])), !b && m.current && m.current.songId === v && (b = {
        ...m.current,
        hasChords: !0
    }), x = " Tab") : "chords" === o.page && (E = !0, m.current && m.current.songId === v && (b = m.current), !b && f.current && f.current.songId === v && (b = {
        ...f.current,
        hasPlayer: !0
    }), x = " Chords"), b || (b = l.songs.list.find(t => t.songId === v)), b || (b = u.songs.list.find(t => t.songId === v)), b || (b = p.favorites.find(t => t.songId === v)), !b)
        return;
    if ("tab" === o.page) {
        if (S)
            x = mn(S.instrumentId);
        else if (null == o.partId)
            "bass" === o.partInstrument ? x = mn(32) : "drum" === o.partInstrument && (x = mn(1024));
        else {
            let T = b.tracks;
            T && T[o.partId] && (x = mn(T[o.partId].instrumentId))
        }
    }
    if (!r)
        return d("header", {
            className: dy.header,
            id: "header",
            children: [d("div", {
                className: dy.wrap,
                children: [d("h1", {
                    className: dy.song,
                    children: [d("span", {
                        className: dy.artist,
                        "aria-label": "artist",
                        children: b.artist
                    }, "arts"), d("span", {
                        className: dy.dash,
                        children: "\xa0-\xa0"
                    }, "dash"), d("span", {
                        className: dy.title,
                        "aria-label": "title",
                        children: b.title
                    }, "ttl"), d("span", {
                        className: dy.instrumentTab,
                        "aria-label": "tab type",
                        children: x
                    }, "sfx"),]
                }, "h-h1"),]
            }),]
        });
    let L = () => s("curiosity/setConversionProps", {
        "Last referring link": "Demo Link"
    }),
        N = () => s("curiosity/setConversionProps", {
            "Last referring link": "Header Link"
        });
    return d("header", {
        className: dy.header,
        id: "header",
        children: [d("div", {
            className: dy.wrap,
            children: [y && d(tp, {
                to: `/${tK(l.pattern, l.filters)}`,
                className: dy.burger,
                title: "Search",
                id: "appheader-burger",
                children: d(me, {
                    styles: dy
                }, "icn")
            }, "menu"), !h.fullscreen && w && d(gm, null, "fav"), !h.fullscreen && d(mt, {
                isTab: w,
                isChords: E,
                song: b,
                meta: f,
                chords: m
            }, "switch"), d(_ ? "div" : "h1", {
                className: dy.song,
                children: [d(tp, {
                    className: dy.artist,
                    "aria-label": "artist",
                    to: `${iv(b)}${tK(u.pattern, u.filters)}`,
                    children: b.artist
                }, "artist"), d("span", {
                    className: dy.dash,
                    children: "\xa0-\xa0"
                }, "dash"), d("span", {
                    className: dy.title,
                    "aria-label": "title",
                    children: b.title
                }, "ttl"), d("span", {
                    className: dy.instrumentTab,
                    "aria-label": "tab type",
                    children: x
                }, "sfx"), !h.fullscreen && g.enabled && d(tp, {
                    to: "/a/wa/plus",
                    className: dy.demo,
                    "aria-label": "Demo Song",
                    onClick: L,
                    children: d(gY, {
                        width: 42,
                        height: 22,
                        shadow: "transparent",
                        id: "iconDemo2"
                    }, "demo")
                }),]
            }, _ ? "h-div" : "h-h1"), r && !h.fullscreen && w && d(c, {
                children: [d(gS, null, "del"), d(gD, null, "rev"),]
            }), !h.isSmall && d(gq, {
                isFullscreen: h.fullscreen,
                handleFullscreen: n
            }, "ctl"), k && d(tp, {
                id: "text-showroom",
                className: dy.showroom,
                to: "/a/wa/plus?from=header_link",
                onClick: N,
                children: ["Struggling to learn this song? Improve your playing with Songsterr Plus plan!"]
            }, "show"), S && !$ && d(_ ? "div" : "h2", {
                className: dy.track,
                children: d(fd, {
                    track: S,
                    handleNotation: i
                })
            }, _ ? "div" : "h2")]
        }),]
    })
}
let mr = "a1 1 0 1 0 2 0 1 1 0 1 0-2 0", ms = "M3 24v-7h2.5v4h1.5v-4h1.5v4h1.5v-4h5v4h1.5v-4h1.5v4h1.5v-4h1.5v4h1.5v-4h2.5v7z", ma = "M7 10v7H3c-3 0-3-7 0-7z", mo = "m1 0h.7c1-1.75 3-1.75 3-1.75a1.7 1.7 0 1 1 2.3 0h1.6a1.7 1.7 0 1 1 2.3 0h1.6a1.7 1.7 0 1 1 2.3 0h1.6c2 0 2 10.5 0 10.5h-1.6a1.7 1.7 0 1 1-2.3 0h-1.6a1.7 1.7 0 1 1-2.3 0H14a1.7 1.7 0 1 1-2.3 0s-2 0-3-1.75H8z", ml = "m4 2c-1 0-1 3 0 3l7-.5c1 0 1-2 0-2z", mu = `${ma}m1 0h2s-.1-1 .8-1l2 .3V8.08a2 2.5 45 1 1 1.6 0v1.46l3.6.54v-2a2 2.5 45 1 1 1.6 0v2.24l1.2.18s.5-1.8 1.85-1.8 1.85 2.4 1.85 2.4l1.5.2c1.5 0 1.5 4.3 0 4.3l-1.5.2s-.5 2.4-1.85 2.4-1.85-1.8-1.85-1.8l-1.2.18v2.24a2 2.5 45 1 1-1.6 0v-2l-3.6.54v1.46a2 2.5 45 1 1-1.6 0V17.6l-2 .3c-.9 0-.8-1-.8-1H8z`, mc = `${ma}m1 0c1 0 1.5-.5 2-1.5s.9-.9 1.5-.5l.8.52a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l2.7 1.9c1 .7 2.1 1.4 0 2.3-1.8.8-3.5 1.5-5.4 2.3-1 .4-1.4.2-1.4-.8 0-.8-.1-1.6-1.8-2.6-2-1-6-2.7-11-2.7zm2.8.8${mr}m2.8 1.8${mr}m2.8 1.8${mr}m2.8 1.8${mr}m2.8 1.8${mr}`, md = [`${ms}M3 9c0-4 2-6 6-6 8 0 4 8 16 8v5H3z`, "M17 6a1.5 1.5 0 1 1 0 1.7H3C2 7.7 2 6 3 6h14zM2 10.7c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8z", `${ms}M3 16v-2h1.2l-1-3V7h3v4l-1 3h3.65l-1-3V5h3v6l-1 3h3.65l-1-3V2h3v9l-1 3h3.65l-1-3V5h3v6l-1 3h3.65l-1-3V7h3v4l-1 3H25v2zm.7-6.5v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1`, `${ms}M9.8.1${mr}m3 1.36${mr}m3 1.36${mr}m3 1.36${mr}m3 1.36${mr}M3.43 10.52l.44-3.36 21.49 5.54-.18.88-21.75-3.06zM3 15.25l.25-2.72 21.78 2.19-.03.9-22-.37zM25.56 4.99s2.99.98.82 4.07L5.47-.23C6.6-4.34 8.2-3.05 8.61-3.06l16.95 8.05zm-21.39.15l.74-3.38 20.97 8.67-.23.83L4.17 5.14z`, `${ma}${mo}m12.7 2.5c1.5 0 1.5-2 0-2h-8c-1.5 0-1.5 2 0 2zm0 4c1.5 0 1.5-2 0-2h-8c-1.5 0-1.5 2 0 2z`, `${ma}${mo}m3.9 1.25${mr}m3.9 0${mr}m3.9 0${mr}m-7.8 4.5${mr}m3.9 0${mr}m3.9 0${mr}`, `${ma}m1 0c1.94-.05 1.08-1.86 3.33-1.54a1.3 1.3 0 1 1 1.4.32l1.4.32a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32s2.69.04 2.69 3.59c0 1.53-.75 4.62-3.65 4.62-1.23 0-2.18-1.59-3.5-1.59-2.8 0-3.88 2.8-7.22 2.8-1.87 0-2.04-3.77-4.25-3.77zm2.84.8${mr}m2.8.65${mr}m2.8.65${mr}m2.8.65${mr}m2.8.65${mr}`, `${ma}m1 0h.7c1-1.75 3-1.75 3-1.75h11c2 0 2 10.5 0 10.5h-11s-2 0-3-1.75H8zm3 5.5a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m-4-4a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0M13 19a1.5 1.5 0 1 1-1 2.5 1.5 1.5 0 1 1-1-2.5zM19 19a1.5 1.5 0 1 1-1 2.5 1.5 1.5 0 1 1-1-2.5zM13 8a1.5 1.5 0 1 1 1-2.5A1.5 1.5 0 1 1 15 8zM19 8a1.5 1.5 0 1 1 1-2.5A1.5 1.5 0 1 1 21 8z`, mu, `${mu}${ml}`, `${ma}m1 0h2s-.1-1 .8-1l2 .3V8.08a2 2.5 45 1 1 1.6 0v1.46l3.6.54v-2a2 2.5 45 1 1 1.6 0v2.24l2 .3a3.2 4.5 0 1 1 0 5.66l-2 .3v2.24a2 2.5 45 1 1-1.6 0v-2l-3.6.54v1.46a2 2.5 45 1 1-1.6 0V17.6l-2 .3c-.9 0-.8-1-.8-1H8z${ml}`, "M20 8c1.5 0 3 0 3 1s-1.5 2.5-1.5 2.5l-9.5 11s1.5 0 1.5.5v1h-7v-1c0-.5 1.5-.5 1.5-.5V3c0-1.25 2.5-1.25 2.5 0C13 3 19 8 20 8zm-2.5.5l-1.5-1V14l1.5-1.5v-4zm-2.75-1.75L13.5 6v10.5l1.25-1.25v-8.5zM12 5.5L10.5 5v14.5L12 18V5.5zm9 4c-.5-.5-2 0-2.5-.5v2.5l2.5-2z", "M16 16h-4l1.5-7.5h1L16 16zM9 8.25l3.5.25-1.25 7.5L9 8.25zM16.75 16L15.5 8.5l3.5-.25L16.75 16zm.75.5l1 7a6.5 2 0 0 1-9 0l1-7a6.5 2 0 0 0 7 0zm-7-.5c-2 0-6-9-6-9L8 8l2.5 8zM20 8l3.5-1s-4 9-6 9L20 8zM4.5 5.5a9.5 2 0 1 1 19 0 9.5 2 0 1 1-19 0zm3-.2a6.5 1.2 0 1 0 13 0 6.5 1.2 0 1 0-13 0z", "M15.5 17c0 1 4 1 4 5-3 2-9 2-12 0 0-4 4-4 4-5s-1-1-1.5-3-.5-5.5 3.5-5.5 4 3.5 3.5 5.5-1.5 2-1.5 3zm7-2.5c2 .5 3 1.5 3 2.5s-2 2-5.5 2c-1.5-2.5-4.5-1-2-4 1-1 1.5-4-.5-6 0-1 2-2.5 3-2 2 0 3 1 3 4-.5 1-1 2-1 3.5zm-6-6.5c-.5-.5-.5-.5-1-.75 0-.75 0-.75-.5-1.25-.5-1.5 0-3 2.5-3 2 0 3 1 2.5 2.5-2.5 0-3 1.5-3.5 2.5zM9 15c2.5 3-1 1.5-2 4-3.5 0-5.5-1-5.5-2s1-2 3-2.5c-1 0-2-1.5-2-1.5 1.3-1.7 1-3 1-4s2-3 3-2c1-1 3 1 3 2-2 2-1.5 5-.5 6zm1.5-7c-.5-.75-.5-2.5-4-2.5 0-2.5 3.5-3 4.5-2 1.5 1 1.5 2.5 1.5 3.75 0 0-1.5.25-2 .75z", "M3 15c-1.5 0-5 1.5-5-1.5S1.5 12 3 12v3zm1 0v-3h3a1.2 1.2 0 1 1 1 0h2.75a1.2 1.2 0 1 1 1 0h2.75a1.2 1.2 0 1 1 1 0H18v3h-1a5.5 4 0 1 1-11.5 0H7zm3 0a5.5 3 0 0 0 3.5 3v-3zm5 3a5.5 3 0 0 0 3.5-3H12zm13 1V8l-.5-.5S21 11.5 19 12v3c2 .5 5.5 4.5 5.5 4.5l.5-.5z", "M20.5 10.5a1 1.3 10 1 1-1 1l-1 1a1 1.3 10 1 1-1 1l-1 1a1 1.3 10 1 1-1 1l-4 4.5c-.5.5 1 1.5 2.5 0 .5-.5.5-1.5 1-1.75s1.27 0 1.5.5l1 6.25c0 .5-.5 1-1 1-1.5 0-2-2.5-5.5-1s-6-2.5-4-4.5L19.5 8c.5-.5.5-1.5 0-2l-2-2c-1 0-3-2-2-3s3 1 3 2l2 2c2.5 1 1.75 3.75.75 4.5l-.75 1z", "M3 14l1.5.5v-3L3 12s-5.5-.25-5.5 1S3 14 3 14zm2.5.5h2a1.2 1.2 0 1 1 2 0h2a1.2 1.2 0 1 1 2 0h2a1.2 1.2 0 1 1 2 0h2v-3h-14zm13 1.5h-1.75l.25-1.25h-1l.25 1.25h-3.5l.25-1.25h-1l.25 1.25h-3.5L9 14.75H8L8.25 16H6.5v1h12v-1zm7.75.75v-7.5L26 9l-3.5 2.5h-2v3h2L26 17l.25-.25z", "M28 15h-4a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-5.5a2 2 0 1 1 0-4h26z", `${ms}M3 7v9h22V7H3zm1.5 4a2.5 2.5 0 1 1 0 1H7v-1zm8.1-1.6a2.5 2.5 0 1 1-.7.7l1.7 1.7.7-.7zm7.9 4.6a2.5 2.5 0 1 1 1 0v-2.5h-1z`, "M11 4c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm11.7-1.7c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm-8.3 8.3c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm11.7-1.7c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5z", "M8 20.4a8.5 8.5 0 1 1 11.2 0 1.25 1.25 0 1 0 1.65 1.88 11 11 0 1 0-14.5 0A1.25 1.25 0 1 0 8 20.4zM9.64 8.63a6.5 6.5 0 1 0 2.91-1.24l1.7 3.95a1.6 1.6 0 0 1-2.93 1.25z", `${ma}m1 0l3 .2s.8-1.5 1.8-1.5a1.8 2 45 1 1 1.6 0c2 0 3 2.2 3 2.2s1-2.2 3-2.2a1.8 2 45 1 1 1.6 0c1 0 1.5 2.2 1.5 2.2a1.7 4 0 1 1 0 5.26s-.5 2.2-1.5 2.2a1.8 2 45 1 1-1.6 0c-2 0-3-2.2-3-2.2s-1 2.2-3 2.2a1.8 2 45 1 1-1.6 0c-1 0-1.8-1.5-1.8-1.5l-3 .2z`, "M22.5 3c2 2-.5 4-4 8 0 0-7 11-9 13-1 1-1.5 1-3-.5S4 21 5 20C7 18 17.5 9.5 17.5 9.5c2-2.5 4.5-4 3.5-5.25S19 5 17 6.5c0 0-3 4.5-5 6.5-1.5 1.5-2 0-3.5-1.5S7 9.5 7.5 9c2-2 8.5-4.25 8.5-4.25C19 2.5 20.5 1 22.5 3z", "M8 5c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm8-8c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm8-4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1z", "M6.17 9.65a9.03 4.82 0 1 0 8.26-3.35l1.83 1.39a7.43 3.5 0 1 1-8.59 2.4l7.04 2.06.2-.46-11-4.23a.7.7 0 1 0-.48 1.39zM6.8 2.8l9.57 6.25-.37.45-3.19-1.76a7.43 3.5 0 0 0-3.02.78l-1.54-.73a9.03 4.82 0 0 1 2.74-1.05L6 4a.7.7 0 0 1 .8-1.2zm17 9.76a9.03 4.82 0 0 1-3.21 3.69v7.18a9.03 4.82 0 0 0 3.21-3.69zm-4.92 4.29a9.03 4.82 0 0 1-8.44-.06l-.04 7.17a9.03 4.82 0 0 0 8.48.07zm-10.11-.69a9.03 4.82 0 0 1-3-3.2v7.18a9.03 4.82 0 0 0 3 3.2z",], mh = "translate(-5 14)rotate(-45)", mp = "translate(-7 14)rotate(-45)", mf = " translate(13 0)rotate(45)scale(.75)";
function mg(t) {
    return 3 === t ? " translate(13 0)rotate(45)scale(.75)" : 1 === t || t >= 4 && t <= 10 || 14 === t || 16 === t || 17 === t || 21 === t ? "translate(-5 14)rotate(-45)" : void 0
}
function mm(t) {
    let {
        instrumentId: e,
        name: n,
        className: i,
        transform: r
    } = t,
        a = io(e),
        o = n && 6 === a && n.includes("James Hetfield"),
        l = o ? mc : md[a],
        u = o ? "translate(-7 14)rotate(-45)" : mg(a);
    return s("path", {
        d: l,
        transform: (u || r) && `${r || ""}${u || ""}`,
        className: i
    })
}
let m$ = "Bh61wo", m_ = {
    icon: "Bh61wo"
};
class my extends o {
    render() {
        let {
            age: t
        } = this.props,
            e = m_.icon;
        return "young" === t ? s("svg", {
            className: e,
            width: 22,
            height: 29,
            viewBox: "0 0 87 115"
        }, s("path", {
            d: "m24.01 77.15-4.1 1.29-2.26 10.13s15.64 22.9 19.37 22.76c3.72-.14 23.35-21.45 23.35-21.45l-8.21-10.83-3.56-.24-15.7 2.3-8.89-3.96Z",
            fill: "#02141E"
        }), s("path", {
            d: "m24.03 76.93 2.52-7.54L51.2 66.8l2.38 7.65 1.45.1c-.9 1.69-2.76 5.2-3.07 5.72-.38.64-7 4.33-15.38 4.43-6.71.09-11.17-5.15-12.55-7.77Z",
            fill: "#C5C5C5"
        }), s("path", {
            d: "M21.55 63.76c-1.32-1.99-6.64-20.53-5.8-24.72l3.82-7c2.8-3.91 8.46-11.81 8.76-12.15.29-.34 7.37-1.6 10.87-2.17l11.76 7.94 9.7 18.65c-.06 3.01-2.67 11.46-3.6 13.28-1.16 2.27-6.98 12.09-8.9 14.06-2.1 2.16-6.4 4.67-12.92 4.8-6.78.14-12.38-10.7-13.7-12.69Z",
            fill: "#D9D7D7"
        }), s("path", {
            d: "M41.23 64.55c-1.68.75-4.85.68-6.8.55a15.24 15.24 0 0 1-4.02-.8c-1.06-.33-3.76-2.68-3.67-2.9.08-.22 2.8-.16 5.04-.24 1.02-.03 1.73.4 2.88.47 1.35.08 3.13-.16 4.26.01 1.66.26 3.96.44 4.6.58-.54.33-1.32 1.9-2.3 2.33Z",
            fill: "#DF7272"
        }), s("path", {
            d: "M26.9 61.46c.68.22 5.18 1.7 7.6 1.86 2.17.15 7.91-.56 8.86-1",
            stroke: "#9D5050",
            strokeWidth: ".1"
        }), s("path", {
            d: "M28.74 34.69c.75.2 2.36 2.62 2.1 3.06-.26.2-.88.6-1.26.66-.49.07-1.04-.81-1.7-1.17-.67-.35-2.27-.3-2.97-.2-.56.09-3.56.74-5 1.05-.1-.36-.2-1.4.1-1.38.38.03 4.4-1.4 5.02-1.43.62-.03 2.95-.8 3.7-.6ZM43.5 35.11c-.76.2-2.37 2.62-2.1 3.07.26.2.87.6 1.26.65.48.07 1.04-.8 1.7-1.16.67-.35 2.26-.3 2.96-.2.56.09 3.57.74 5 1.05.1-.37.21-1.4-.1-1.38-.37.03-4.4-1.4-5.01-1.43-.62-.04-2.96-.8-3.71-.6Z",
            fill: "#6D6D6D",
            fillOpacity: ".9"
        }), s("path", {
            d: "M.94 103.05c-.37-1.41 3.22-6.52 4.03-8.19.65-1.34 1.26-3.26 1.21-4.3-.04-1.05.15-2.2.25-3.58.09-1.38-4-4.32-4.06-5.13-.06-.82.1-1.38 1.4-1.76 1.3-.37 3.15-.37 3.22-1.4.07-1.04-2.95-2.75-2.9-3.55.06-.81 5.32-1.5 5.41-2.88.1-1.38-2.6-2.5-2.78-3.43-.16-.94-2.06-2-2-2.8.05-.8 2.25-.89 2.35-2.38.1-1.5-2.05-2.23-1.96-3.5.08-1.26.82-3.53.91-4.91.1-1.38-.83-5.48-.7-7.52.15-2.05 1.38-12.8 2.15-14.03.78-1.22 5.2-8.33 5.25-9.14.06-.8.92-2.8 1.43-4.18.66-1.81 2.4-3.4 2.44-4.1.05-.69 2.65-2.62 3.28-3.27.62-.66 1.56-.82 2.22-2.05.66-1.23 1.15-3.38 3.2-4.52 2.04-1.13 3.15-.38 4.46-.99 1.32-.6 2.7-1.67 4.2-1.56l3.65.24c1.04.07 1.47-1.29 2.28-1.23.8.05 1.87 1.51 2.72.88.85-.64 2.98-.5 4.24-.41 1.27.08 5.38 3.6 6.42 3.67 1.04.07 2.52.4 2.7 1.11.19.7-.04 2.31.39 2.92.42.6 2.95 2.51 3.8 3.61.86 1.1 2.66 6.9 3.34 7.17.68.28 1.03 1.92 1.55 1.03.52-.89 3.21-1.28 2.88.2-.33 1.48-1.98 5.42-1.55 5.91.42.5 2.25.85 2.65 1.8.4.96.7 5.03 1.6 5.44.9.4 1.28 1.59 1.12 2.39-.17.8-1.44 2.45-1.51 3.48-.07 1.04 1.53 4.74 2.8 4.82 1.26.09 4.65 4.88 4.48 5.68-.17.8-1.88.4-1.14 1.38.74.98.62 2.9.74 4.41.13 1.52-.33 3.3-.26 3.88.08.58 3.4 2.75 2.48 4.54-.94 1.79.15 4.4.91 5.14.76.75-1.85 1.84-2.24 2.51-.4.67-1.14 1.43-.16 2.42.97 1-.59 1.81.63 2.59 1.22.78 3.87 1.53 3 2.4-.87.87-1.35 3.38-1.24 1.77l.04-.45c-.04.27-.25 1.5-.85.97-.88-.75-.7 1.81-1.33.96-.64-.86 0 .11-.12 1.84s-1.26 3.16-.26 3.8c1 .65-1.36 4.77-2.24 5.76-.88.98-1.38 3.26-3.05 4.07-1.68.81-.63 4.12-1.38 5-.76.88-9.68 4.44-9.07 5.64.62 1.2-4.87-6.03-4.68-8.91.2-2.89-.62-5.67-.53-7.07.15-2.12-1.88-4.18-1.36-4.95.51-.78-.23-1.82-.13-3.3.09-1.25-.72-1.74-1.39-2.13-.66-.4.1-1.44.14-2.02.04-.58-1.23-3.08-1.48-3.61 0 0 .04-8.62-.42-9.46-.47-.85-1.48-1.33-1.35-3.18.06-.93 1.1-2.48 2.18-4.2 1.05-1.7 2.22-4.8 2.36-5.07.27-.56 1.86-1.29 1-2.27-.86-.99-.24-2.55-.1-4.56.13-2 1.27-3.1 1.35-4.26.46-.91-.98-.32-2.87-.99-1.27-.08.92-8.33-.49-9.5-.8-.68-1.8-2.77-2.72-2.83-.92-.06-4.2 1.22-4.1-.28.1-1.5-2.51-3.74-2.97-4.26-1.57-1.79-2.56-4.23-7.15-5.09-4.6-.85-4.55 2.39-4.83 3.06-.28.68-3.87 2.18-4.77 3.47-.69.99-2.56 3.45-4.28 4.95l-2.54 1.84-1.2 2.08-.86 2.38c-.8.92-.26 2.74-.24 3.5-.74.76-.3 4.56-.47 6.93-.2 2.9 2.99 9.95 3.33 10.99.48 1.45 1.9 3.97 2.44 4.96.53.99 2.29 2.42 2.23 3.22-.05.8-1.62 4.92-1.96 6.33-.37 1.53 2.88 5.48 2.8 6.52-.06 1.03 2.62 2.49 1.13 3.9-1.48 1.4-4.56 4.2-5.35 5.53-3 5.12-6.33 12.7-9.25 15-2.48 1.97-9.39.5-9.8-2.04-.29-1.7-2.82-1-2.7-2.85Z",
            fill: "#AAAFB0"
        }), s("ellipse", {
            cx: "44.96",
            cy: "41.16",
            rx: "2.43",
            ry: "1.44",
            transform: "rotate(17.55 44.96 41.16)",
            fill: "#4E4E4E"
        }), s("ellipse", {
            cx: "27.23",
            cy: "40.51",
            rx: "2.27",
            ry: "1.41",
            transform: "rotate(-10.18 27.23 40.51)",
            fill: "#4E4E4E"
        }), s("path", {
            d: "m36.12 52.79-.9.47-1.32-.1c-.88-.2-1.8-.13-2.3-.15l-1-1.7.1-1.52 2.37.16c1.25.12 3.8.33 4 .27.2-.05 1.99.55 2.86.85l.72.91-.1 1.4-1.54.38-1.71-.36s-.24.23-.53-.12c-.3-.34-.65-.5-.65-.5Z",
            fill: "#4E4E4E"
        }), s("path", {
            d: "M32.92 47.37c.65-1.33.58-4.36.65-6 .16-2.44 1.4-2.86 2.03-2.82.81.06 1.9.58 2.14 2.1.05.3.08 2 .22 2.6.14.61.33 3.4.8 4.12.63.93 3.15 2.14 3.5 5.44.2 1.9-3.29 1.25-3.7 1.22a4.36 4.36 0 0 1-1.49-.47c-.15-.17.43-.75.69-.5.25.24.79.35 1.26.3.48-.04.6-.45.67-1.07.07-.62-.79-.52-1.48-.52-.7 0-1.25.69-1.48 1.22-.24.53-.86.64-1.67.58-.8-.05-.9-1-1.1-1.06-.2-.07-1.35-2.13-2.08-.5-.73 1.64 1.15.98 1.52 1 .37.03.47.46.17.56-.3.1-1.6.05-2.22 0-.61-.03-1.54-.88-1.8-1.71-.28-.84.48-1.34.94-2 .45-.67 1.78-1.16 2.43-2.49Z",
            fill: "#AAAFB0"
        })) : "mature" === t ? s("svg", {
            className: e,
            width: 22,
            height: 30,
            viewBox: "0 0 80 115"
        }, s("path", {
            d: "m58.03 78.48 4.08 1.59 1.6 10.44s-17.39 21.68-21.24 21.8c-3.85.11-22.25-23.39-22.25-23.39l9.08-10.44h3.64l15.78 3.4 9.3-3.4Z",
            fill: "#292E38"
        }), s("path", {
            d: "m58.03 78.25-2.05-7.84-24.86-4.3-2.95 7.6h-1.48c.8 1.78 2.45 5.47 2.73 6.01.34.69 6.8 4.89 15.32 5.57 6.81.54 11.7-4.47 13.29-7.04Z",
            fill: "#949090"
        }), s("path", {
            d: "M60.18 66.44c1.48-1.93 9.43-21.8 8.86-26.11l-3.4-7.38c-2.58-4.16-7.8-12.58-8.07-12.94-.27-.37-7.38-2.12-10.9-2.96l-12.49 7.27L23.06 42.6c-.15 3.06-.25 9.67.57 11.58 1.02 2.38 9.08 16.92 10.55 19.3 1.48 2.38 3.86 5.1 10.68 6.24 6.8 1.14 13.85-11.35 15.32-13.28Z",
            fill: "#D9D7D7"
        }), s("path", {
            d: "M62.26 49.26c.22-2.64.55-6.7.55-7.13H47.33l1.75 7.27a1 1 0 0 0 .97.77h11.22a1 1 0 0 0 1-.91ZM43.17 49.83l.86-7.7H29.11l1.05 7.73a1 1 0 0 0 .99.86h11.02a1 1 0 0 0 1-.89Z",
            fill: "#292E38"
        }), s("path", {
            d: "M63.36 41.67v-1a.5.5 0 0 0-.5-.5H29.1v2h14.58l-.28 2.75h4.87l-.6-2.75h15.18a.5.5 0 0 0 .5-.5ZM24.3 42.68h5.15l1.03 1.78-6.19.35v-2.13ZM67.42 43.84c.05.28-3.37 1.13-5.1 1.52l-.48-2.68h3.58l2-.62c-.03.48-.06 1.5 0 1.78Z",
            fill: "#292E38"
        }), s("path", {
            d: "M37.43 61.66c1.37-.57 3.1-1.69 7.54-1.69 5.42-.25 8.83 2.41 9.38 2.75.55.35 1.17 1.28 1.41 2.42.19.88 0 4.29 0 4.98 0 .33 8.24-14.35 9-14.06.77.29.2 5.6-6.04 15.83-.26.42-2.27 2.2-3.2 3.04-.92.83-2.27.48-2.27.48.03-3 .06-8.87 0-9.31-.07-.55-1.45-.56-2.24-.7-.6-.12-1.49-.4-2.25-.72-.9-.38-1.9-1.04-2.5-1.04-.69 0-1.57.5-2.62.75-2.5.6-5.46 1.4-5.66 2.22-.14.53-.55 3.5-.55 4.2 0 .68 0 5.87-2.33 4.37-.8-.5-3.17-3.02-3.83-4.83 0-.3-3.24-5.11-4.59-9.58-.5-1.66-2.02-3.42-2.08-4.71a5.99 5.99 0 0 1 1.3-3.55c.36-.19 6.8 16.53 7.06 16.71.36.25 1.38 1.38 1.38.9 0-.48-.29-3.05-.29-3.51 0-1.22.83-3.89 3.38-4.95Z",
            fill: "#595F6A"
        }), s("path", {
            d: "M73.1 96.02c-.35.83-8.7 1.53-9.17 2.94 0 1.89-.14 6-.7 7.41-.71 1.77-2.24 2.7-3.53 4.12-1.3 1.41-2.6-2.24-3.18-1.41-.59.82 1.76 1.4 1.76 2 0 .58 0 1.53-1.17 2.7-1.18 1.18-2.47-1.41-3.88-1.17-1.41.23-2.7-2.12-3.06-3.53-.28-1.13.82-2.83 1.41-3.53 1.84-1.84 5.76-5.62 6.7-6 1.18-.47.7-3.53 0-4.94-.7-1.4-3.64-4.47-5.05-6-1.41-1.52 1.4-2.82 1.4-3.88s3.58-4.85 3.3-6.42c-.24-1.46-1.45-5.51-1.45-6.34 0-.82 1.45-1.94 1.8-2.64.36-.7 2.7-4.6 3.3-6.05.42-1.02 3.71-6.6 3-8.89-.72-2.31 1.94-7.82 1.24-8.64.07-.78.04-2.59-.72-3.58l-1.88-2.48h-1.64l-.6-2.11c-1.64-1.65-5.21-5.06-6.34-5.53-1.41-.59 1.64-3.06 1.41-3.76-.24-.71 1.06-6.24-6.82-6.24-7.88 0-8.35 6.23-8.35 6.94 0 .7-1 5.53-1 7.06 0 1.53-.7.69-1.64.69s-2.44.68-3.3 1.3c-1.52 1.1-3.35 3.51-4.65 3.51-1.97.55-5.11 1.88-4.7 2.85 0 1.17 2 3.4 2 5.45 0 2.05-1.06 3.6-2 4.54s-.59 2.47-.35 3.06c.23.59 5.28 7.98 5.28 9.86 0 1.88-.81 2.41-1.47 4.3-.2.55-.64 1.6.66 1.95 1.29.35 2.58 1.77 2.58 2.94 0 1.16-1.25 2.2-1.96 2.8l-.04.02c-.7.6-1.88 1.89-1.88 2.47 0 .6 1.35 2 .64 2.36-.7.35-1.9.17-1.9 1.45 0 1.51.8 2.2 1.26 3.01.47.83 4.7 4.7 6 5.3 1.3.59 2.82 3.88 2.82 6.82 0 2.94-6.94 10.93-6.23 9.76.7-1.18-3.76-7.65-4.47-8.59-.7-.94-9.4-7.05-11.05-8-1.65-.93-5.18-5.05-6-6.1-.82-1.07-2.24-7.89-1.18-8.48 1.06-.58 1.18-2.23 1.18-4 0-1.76-1.53-.82-2.24 0a9 9 0 0 1-1.88 1.77c-.94.7-2 1.65-2 3.3 0 1.64-1.33.93-2.15 0-.83-.95.86-4.36 2.15-5.06 1.3-.7 0 .11 1.06-.83s-.7-1.76-1.06-2.47c-.35-.7 1.18-2.82 2-3.53.83-.7 1.88-2.58 1.06-4.46-.82-1.89 2.94-4.12 3.06-4.7.12-.6-2.47-3.42-2.24-4.95.24-1.53 3.06-2.47 3.89-3.4.82-.95-5.65-2.36-5.77-3.18-.11-.83 3.65-3.41 4.94-3.41 1.3 0 3.18-3.65 3.18-4.7 0-1.07-1.18-2.83-1.3-3.65-.11-.83.36-2 1.3-2.36.94-.35 1.53-4.46 2-5.4.47-.95 2.35-1.18 2.82-1.65.47-.47-.94-4.59-1.18-6.12-.23-1.53 2.47-.94 2.94 0 .47.94.94-.7 1.65-.94.7-.23 2.94-6 3.88-7.05.94-1.06 3.65-2.83 4.12-3.41.47-.6.35-2.24.58-2.94.24-.7 1.77-.94 2.83-.94s5.4-4.36 6.7-4.36c1.3 0 3.53 1.06 4.35 1.77.82.7 2-.7 2.82-.7.83 0 1.18 1.4 2.24 1.4 1.06 0 2.35-1.4 3.88-1.4 1.53 0 2.7 2.58 4 3.29 1.3.7 2.47-1.3 4.47 0 2 1.29 2.35 4.82 2.94 6.11.59 1.3 1.53 1.53 2.11 2.23.6.71.7 2.7.7 3.42 0 .7 2.71 4 3.77 5.05 1.06 1.06 2 2.94 2 3.76 0 .83 4 8.35 4.7 9.65.71 1.3 1.22 12.3 1.22 14.4 0 2.08-1.21 6.18-1.21 7.59 0 1.41.58 3.76.58 5.06 0 1.29-2.23 1.88-2.23 3.4 0 1.54 2.23 1.77 2.23 2.6 0 .82-2 1.76-2.23 2.7-.24.94-3.06 1.88-3.06 3.3 0 1.4 5.3 2.46 5.3 3.28 0 .83-3.18 2.36-3.18 3.42 0 1.05 1.88 1.17 3.17 1.64 1.3.47 1.41 1.06 1.3 1.88-.12.83-4.47 3.53-4.47 4.94 0 1.41.12 2.59 0 3.65s-1.77 1.88-2.12 2.7Z",
            fill: "#AAAFB0"
        })) : s("svg", {
            className: e,
            width: 22,
            height: 33,
            viewBox: "0 0 75 120"
        }, s("path", {
            d: "M19.27 76.57c0-2-.56-14.24-.9-16.02l12.58-7.12 19.8 1c.89.93 2.67 3.05 2.67 4.12v15.8c-.15 1.22-.36 4.03 0 5.45.35 1.42 2.6 3.19 3.67 3.9l2.56 2-1.34 1.55a680.2 680.2 0 0 0-3.22 6.23c-.67 1.34-9.46 5.12-9.8 5.12H34.63c-5.71-2.41-17.22-7.3-17.58-7.56-.44-.34-2.22-7.35-1.11-8.13 1.11-.77 3.34-4.33 3.34-6.34Z",
            fill: "#C5C5C5"
        }), s("path", {
            d: "M11.15 50.2c-.78-1.22-1.12-9.67-1-12.12.51-2.4 1.69-7.56 2.22-8.9.67-1.67 4-12.68 6.79-15.13 2.78-2.44 15.24-4.45 17.68-3.89 2.45.56 17.8 10.9 17.8 12.35 0 1.44 4.23 16.35 4.56 17.57.34 1.23-.44 7.68-1.1 10.9-.68 3.23-2.46 3.34-3.46 3.79-.8.35-1.3 4.37-1.44 6.34-.75 3.78-5.28 11.37-17.47 11.46-15.24.1-18.91-11.8-19.36-13.13-.44-1.33-1.1-3.45-2.55-3.56-1.45-.11-1.9-4.45-2.67-5.67Z",
            fill: "#D9D7D7"
        }), s("path", {
            d: "M24.77 32.68c1.51.12 3.92 1.27 4.78 1.96-.11-1-.44-3.15-.86-3.67-.53-.66-3.84-.13-4.78-.2-1.92-.18-4.27 1.24-5.63 1.91-.05.54-.13 1.7 0 1.96.16.33 1.55-.74 1.92-1.02.37-.29 3.06-1.06 4.57-.94ZM50.9 33.13c-.33-.5-4.86-1.84-8.2-2.37-3.56-.2-4.35.2-3.94 1.92.09.4.93 1.27 1.46 1.27.54 0 3.17-.82 4.6-.82 1.91 0 7.02 1.51 6.9 1.14-.13-.37-.5-.65-.82-1.14Z",
            fill: "#6D6D6D",
            fillOpacity: ".9"
        }), s("path", {
            d: "M10.12 37.88c0 4.12-.2 10.66.91 12.55v-6.67c0-1.23.63-2.82 1.74-1.6.89.98.86 8 1.84 12.17h2.94c-.67-3.6-2.52-12.7-2.7-14.04-.18-1.34.78-4.74.52-9.44-.1-2.07.54-4.46.8-5.62.34-1.45 2.5-6.13 4.72-8.02 2.23-1.9 6.94-3.38 10.84-3.6 3.89-.22 5.86.23 11 2.14 5.67 2.12 8.35 7.65 9.02 8.87.67 1.23 2.27 10.04 2.5 10.93.17.71-.41 17.6.81 17.6 1.23 0 1.14-4.72 1.14-4.72 0-3.2-.2-6.07 2.04-6.92 1.31-.49.98 4.37 1.31 3.6.33-.78 1.77-10.59 2.43-11.92.67-1.34 1.67-3 1.9-4 .22-1-1.34-3.01-1.9-3.01-.55 0-1.22-3.34-.66-3.78.55-.45 1.44-1.9.66-2.45-.62-.44-4.94-3.5-7.53-5.1l3.67-.24c-1.5-2.57-4.94-4-6.37-4.54-.48-.19-3.6.14-4.98-.88-.64-.48.77-.25 0-2.26-.77-2-4.24-4.69-4.24-4.69s.91 4.12.2 4.12c-.89 0-5.43-4.4-8.24-5.5-1.93-.76 1.46 3.85.57 4.07 0 0-1.55-2.6-1.96-2.97-.41-.37-.94 1.87-2.2 2.36-1.27.5-4.06 2.5-4.5 2.61-1.33.34-3.25 2.7-3.91 3.14-.67.44-7.74 5.18-8.55 7.14-.59 1.4-3.82 8.54-3.82 9.77 0 1.22.53 3.56.3 4.9-.22 1.33-.3 1.88-.3 6Z",
            fill: "#AAAFB0"
        }), s("path", {
            d: "M29.84 67.8c.11-.7.55-2.44 1.42-3.84a37.3 37.3 0 0 0-2.23-1.48c-.8-.47-1.5-2.8-.98-4.77.04-.13 2.68 1.05 6.06 1.05 4.54 0 6.71-1.05 6.71-.85 0 .47.14 2.76 0 3.37-.13.6-2.49 2.2-3.16 2.68-.68.47.67.47 1.28 1.48.6 1.01 1.14 3.71 1.28 4.52.13.8-.44 2.7-.78 3.37-.34.68-.47 1.39-.8 2.06-.3.66-1.25 1.1-3.81 1.44-2.56.34-4.52-3.9-4.99-4.72-.38-.64-.16-3.14 0-4.3Z",
            fill: "#A5A5A5"
        }), s("path", {
            d: "M16.04 82.58c-2.48 1.29-8.8 5.28-12.64 8.26-1.37 1.07-1.3 3.03.05 4.13 7.59 6.16 30.1 24.3 32.06 24.3 2.36 0 16.07-9.02 20.25-11.9 4.54-3.14 13.05-8.3 17.19-12.56a2.25 2.25 0 0 0-.3-3.42C67.1 87.22 54.13 80.12 54.82 81.1c6.4 9.3-12.44 12.86-18.58 12.86-11.08-.64-18.7-6.98-20.2-11.39Z",
            fill: "#292E38"
        }), s("ellipse", {
            cx: "43.42",
            cy: "37.13",
            rx: "2.11",
            ry: "1.24",
            fill: "#4E4E4E"
        }), s("ellipse", {
            cx: "25.31",
            cy: "36.86",
            rx: "2.19",
            ry: "1.16",
            fill: "#4E4E4E"
        }), s("path", {
            d: "m33.02 49.25-4.04-.45V46.9l1.71-.62 5.14-.6 3.15 1.79-.7 1.8h-5.26Z",
            fill: "#4E4E4E"
        }), s("path", {
            d: "M30.28 44.53c1.45-.89 1.43-4.1 1.43-5.32 0-5.18 5.3-4.08 5.01-.24-.1 1.26.38 3.83.46 4.61.08.78 2.61 3.92 2.78 4.45.16.53-.17 1.43-.41 1.67-.25.25-1.51 0-1.84-.24-.32-.25.17-.53.33-.82.16-.28-.57-.9-1.35-.9-.77 0-1.59.62-1.59 1.19 0 .45.33.38.49.28-.1.08-.36.3-.49.5-.16.24-.78.65-1.55.52-.78-.12-1.1-1.02-1.23-1.3-.12-.29-.36-.57-.6-1.19-.25-.6-1.85-.36-2.17 0-.33.37-.2.62 1.4.9 1.6.29 1 .57.76.82-.24.24-1.75-.25-2.37-.25-.6 0-1.75-.24-1.83-.85-.09-.62 1.32-2.94 2.77-3.83Z",
            fill: "#AAAFB0"
        }), s("path", {
            d: "M43.8 55.73c0 1.14-3.5 3-9.62 3-6.31 0-8.57-2.47-8.57-3 0-.2 2.44-.15 3.2-.3.75-.16 3.22-.56 3.84-.68.46-.1.9.3 1.53.3.75 0 1-.3 1.45-.3.67 0 2.16.5 3.34.5.78 0 4.82.17 4.82.48Z",
            fill: "#DF7272"
        }), s("path", {
            d: "M26.13 55.89a.05.05 0 0 0-.02.1l.02-.1Zm17.24.1a.05.05 0 0 0-.02-.1l.02.1Zm-17.26 0c1.21.24 5 .98 8.19.98v-.1c-3.18 0-6.96-.74-8.17-.98l-.02.1Zm8.19.98c1.46 0 3.54-.2 5.35-.41a41.5 41.5 0 0 0 3.72-.58l-.02-.1c-.38.11-1.91.36-3.72.58-1.8.22-3.87.41-5.33.41v.1Z",
            fill: "#000",
            fillOpacity: ".3"
        }))
    }
}
let mv = {
    "2 X 4": 1996,
    "53rd & 3rd": 2003,
    "ain't my bitch": 1996,
    "all nightmare long": 2008,
    "all within my hands": 2003,
    "am i evil?": 1984,
    "am i savage?": 2016,
    "...and justice for all": 1988,
    "(anesthesia) – pulling teeth": 1983,
    astronomy: 1998,
    "atlas, rise!": 2016,
    attitude: 1997,
    "bad seed": 1997,
    battery: 1986,
    "better than you": 1997,
    blackened: 1988,
    "bleeding me": 1996,
    blitzkrieg: 1984,
    "brandenburg gate": 2011,
    breadfan: 1988,
    "broken, beat & scarred": 2008,
    "the call of ktulu": 1984,
    "carpe diem baby": 1997,
    "cheat on me": 2011,
    commando: 2003,
    confusion: 2016,
    "crash course in brain surgery": 1987,
    "creeping death": 1984,
    "cretin hop": 2003,
    cure: 1996,
    cyanide: 2008,
    "damage case": 1996,
    "damage, inc.": 1986,
    "the day that never comes": 2008,
    "devil's dance": 1997,
    "die, die my darling": 1998,
    "dirty window": 2003,
    "disposable heroes": 1986,
    "don't tread on me": 1991,
    dragon: 2011,
    "dream no more": 2016,
    "dyers eve": 1988,
    "the ecstasy of gold": 2007,
    "the end of the line": 2008,
    "enter sandman": 1991,
    escape: 1984,
    "eye of the beholder": 1988,
    "fade to black": 1984,
    "fight fire with fire": 1984,
    fixxxer: 1997,
    "for whom the bell tolls": 1984,
    "the four horsemen": 1983,
    frantic: 2003,
    "the frayed ends of sanity": 1988,
    "free speech for the dumb": 1998,
    frustration: 2011,
    fuel: 1997,
    "the god that failed": 1991,
    "halo on fire": 2016,
    hardwired: 2016,
    "harvester of sorrow": 1988,
    "hate train": 2011,
    "hell and back": 2011,
    helpless: 1987,
    "here comes revenge": 2016,
    "hero of the day": 1996,
    "hit the lights": 1983,
    "holier than thou": 1991,
    "the house jack built": 1996,
    "i disappear": 2e3,
    "iced honey": 2011,
    "invisible kid": 2003,
    "it's electric": 1998,
    "the judas kiss": 2008,
    "jump in the fire": 1983,
    "junior dad": 2011,
    "just a bullet away": 2011,
    "killing time": 1991,
    "king nothing": 1996,
    "last caress/green hell": 1987,
    "leper messiah": 1986,
    "little dog": 2011,
    "lords of summer": 2014,
    loverman: 1998,
    "low man's lyric": 1997,
    "mama said": 1996,
    manunkind: 2016,
    "master of puppets": 1986,
    "the memory remains": 1997,
    "mercyful fate": 1998,
    "metal militia": 1983,
    "mistress dread": 2011,
    "the more i see": 1998,
    "moth into flame": 2016,
    motorbreath: 1983,
    "murder one": 2016,
    "my apocalypse": 2008,
    "my friend of misery": 1991,
    "my world": 2003,
    "no remorse": 1983,
    "nothing else matters": 1991,
    "now i wanna sniff some glue": 2003,
    "now that we're dead": 2016,
    "of wolf and man": 1991,
    one: 1988,
    orion: 1986,
    "the outlaw torn": 1996,
    overkill: 1996,
    "phantom lord": 1983,
    "poor twisted me": 1996,
    "the prince": 1988,
    "prince charming": 1997,
    "pumping blood": 2011,
    purify: 2003,
    "rebel of babylon": 2011,
    "remember tomorrow": 2008,
    "ride the lightning": 1984,
    ronnie: 1996,
    "ronnie rising medley": 2014,
    "sabbra cadabra": 1998,
    "sad but true": 1991,
    "seek & destroy": 1983,
    "shoot me again": 2003,
    "the shortest straw": 1988,
    slither: 1997,
    "the small hours": 1987,
    "so what?": 1991,
    "some kind of monster": 2003,
    "spit out the bone": 2016,
    "st. anger": 2003,
    "stone cold crazy": 1990,
    "stone dead forever": 1996,
    "the struggle within": 1991,
    "suicide & redemption": 2008,
    "sweet amber": 2003,
    "that was just your life": 2008,
    "the thing that should not be": 1986,
    "thorn within": 1996,
    "through the never": 1991,
    "to live is to die": 1988,
    "today your love, tomorrow the world": 2003,
    "too late too late": 1996,
    "trapped under ice": 1984,
    "tuesday's gone": 1998,
    "turn the page": 1998,
    "the unforgiven": 1991,
    "the unforgiven ii": 1997,
    "the unforgiven iii": 2008,
    "the unnamed feeling": 2003,
    "until it sleeps": 1996,
    "the view": 2011,
    "the wait": 1987,
    "wasting my hate": 1996,
    "we did it again": 2002,
    "we're a happy family": 2003,
    "welcome home (sanitarium)": 1986,
    "when a blind man cries": 2012,
    "where the wild things are": 1997,
    "wherever i may roam": 1991,
    whiplash: 1983,
    "whiskey in the jar": 1998,
    "you really got me": 2010
}, mb = "wc27x", m0 = "wc1dg", mw = "wc2wi", mE = {
    instrument: "wc27x",
    instrumentActive: "wc1dg",
    instrumentMobile: "wc2wi"
};
class mk extends o {
    render() {
        let {
            active: t,
            mobile: e,
            name: n,
            instrumentId: i,
            isHetfieldVocals: r,
            songTitle: a
        } = this.props,
            o = t ? mE.instrumentActive : mE.instrument;
        if (o = e ? mE.instrumentMobile : o, r) {
            let l = mv[null == a ? void 0 : a.toLowerCase()];
            return l >= 1983 && l <= 1986 ? s(my, {
                age: "young"
            }) : l >= 1987 && l <= 1991 ? s(my, {
                age: "mature"
            }) : s(my, {
                age: "old"
            })
        }
        return s("svg", {
            className: this.props.className,
            width: "27",
            height: "27",
            viewBox: "0 0 27 27"
        }, s(mm, {
            className: o,
            instrumentId: i,
            name: n
        }))
    }
}
let mS = "Cix6", mx = "Cixn1", mT = "Cix1pm", m3 = "Cix2la", m1 = "Cix314", mL = "Cix2aq", mN = "Cix2lj", mI = "Cix268", m2 = "Cixvc", m8 = "Cix314 Cix4s", mA = "Cix6 Cix9m", m7 = {
    mixer: "Cix6",
    scroller: "Cixn1",
    shadowOverlay: "Cix1pm",
    arrow: "Cix2la",
    item: "Cix314",
    itemLink: "Cix2aq",
    tail: "Cix2lj",
    icon: "Cix268",
    text: "Cixvc",
    itemActive: "Cix314 Cix4s",
    mixerDropdown: "Cix6 Cix9m"
}, mC = 42, mP = 47, m6 = 20, mO = "#mixer-button";
function m9(t) {
    if (t < 2)
        return 1;
    if (2 === t)
        return 2;
    let e = document.querySelector(mO) || null,
        n = e ? Math.floor((e.offsetTop + 42) / 47) : 3,
        i = Math.floor(t / 2);
    return n < i ? n : i
}
function m4(t) {
    return 42 - 47 * t
}
function mR(t, e) {
    let n = document.querySelector(mO) || null,
        i = n ? n.offsetTop : 42,
        r = m4(m9(t));
    return {
        height: Math.min(47 * t, e - (i + r) * 2 - 20),
        top: r
    }
}
function mD(t) {
    return {
        top: -1 * t.top + 15
    }
}
class mM extends o {
    constructor(t) {
        super(t);
        let e = t.meta.current,
            n = e && e.tracks || [],
            i = mR(n.length, t.screen.viewport.height),
            r = mD(i),
            s = {
                height: i.height
            };
        this.state = {
            style: i,
            arrowStyle: r,
            scrollerStyle: s
        }
    }
    updateHeight = () => {
        let t = this.props.meta.current,
            e = t && t.tracks || [],
            n = mR(e.length, this.props.screen.viewport.height),
            i = mD(n),
            r = {
                height: n.height
            },
            s = this.state.style;
        (s.height !== n.height || s.top !== n.top) && this.setState({
            ...this.state,
            style: n,
            arrowStyle: i,
            scrollerStyle: r
        })
    };
    componentDidMount() {
        this.updateHeight()
    }
    componentDidUpdate() {
        this.updateHeight()
    }
    render() {
        let t = this.props.meta.current;
        if (!t)
            return;
        let {
            dispatch: e
        } = this.props,
            n = this.props.screen.isSmall, {
                partId: i,
                revisionId: r
            } = this.props.meta,
            a = t && t.tracks || [],
            o = n ? null : this.state.style,
            l = a && a.map((n, a) => {
                let o = i === a,
                    l = `${o ? m7.itemActive : m7.item}`,
                    u = !1;
                return "Metallica" === t.artist && (n.name.includes("Hetfield") || n.name.includes("James")) && !n4(n.instrumentId) && (u = !0),
                    s("div", {
                        className: l,
                        key: a,
                        "aria-label": "track"
                    }, s(tp, {
                        className: m7.itemLink,
                        to: i$(t, a, r),
                        "aria-current": o ? "page" : void 0,
                        onClick: () => e("songs/default", {
                            instrumentId: n.instrumentId
                        })
                    }, s(mk, {
                        className: m7.icon,
                        instrumentId: n.instrumentId,
                        name: n.name,
                        songTitle: t.title,
                        active: o,
                        isHetfieldVocals: u
                    }), s("span", {
                        className: m7.text
                    }, n.title)))
            });
        return s("div", {
            className: n ? m7.mixerDropdown : m7.mixer,
            style: o,
            role: "dialog",
            "aria-label": "Select track"
        }, n ? l : s("div", {
            className: m7.scroller,
            style: this.state.scrollerStyle
        }, l), n ? null : s("div", {
            className: m7.arrow,
            style: this.state.arrowStyle
        }))
    }
}
var mB = tn(mM, "screen", "meta");
function m5(t) {
    let {
        up: e,
        styles: {
            icon: n,
            stroke: i
        }
    } = t;
    return s("svg", {
        width: 14,
        height: 12,
        viewBox: "0 0 26 17",
        className: n
    }, s("path", {
        d: e ? "M3 14L13 4l10 10" : "M3 4l10 10L23 4",
        className: i,
        "stroke-width": 4,
        "stroke-linecap": "square"
    }))
}
let mF = "B1t2kr", mH = "B1t297", mW = "B1t1q7", mV = "B1t267", mU = "B1tga", mX = "B1t1kk", mG = "B1t1bd", mz = "B1t2x3", mj = "B1thf", mq = "B1tix", mY = {
    header: "B1t2kr",
    wrapper: "B1t297",
    stroke: "B1t1q7",
    burger: "B1t267",
    help: "B1tga",
    mixer: "B1t1kk",
    instrument: "B1t1bd",
    img: "B1t2x3",
    title: "B1thf",
    icon: "B1tix"
};
function mK(t) {
    return t.current && t.current.tracks && t.current.tracks[t.partId] || null
}
let mJ = {
    animationStyles: d8
};
function mQ(t) {
    let {
        songs: e,
        layer: n,
        meta: i
    } = te("songs", "layer", "meta"),
        r = "mixer" === n.layer, {
            isChords: a
        } = t,
        o = "Chords";
    if (!a) {
        let l = mK(i);
        o = l ? `${l.name} \u002d ${l.instrument}` : "Instrument"
    }
    return s("header", {
        className: mY.header,
        "data-controls": "tablature"
    }, s("div", {
        className: mY.wrapper
    }, s(tp, {
        to: `/${tK(e.pattern, e.filters)}`,
        className: mY.burger,
        title: "Search",
        id: "burger"
    }, s(me, {
        styles: mY
    })), s("button", {
        className: mY.mixer,
        onClick: t.handleMixer,
        role: "button",
        id: "control-mixer",
        title: r ? "Hide tracks" : "Show tracks",
        "aria-haspopup": !0,
        "aria-pressed": r
    }, s("div", {
        className: mY.title
    }, o), !a && s(m5, {
        up: r,
        styles: mY
    })), s(tp, {
        to: "/a/wa/help",
        className: mY.help,
        title: "Help"
    }, s(eo, {
        width: 27,
        height: 25,
        styles: mY
    }))), s(e3, null, r && s(eb, mJ, s(mB, null))))
}
let mZ = t => !t || !t.tracks || 1 === t.tracks.length, $t = t => t.user.hasPlus || t.demo.enabled, $e = (t, e) => t.layer.layer === e ? t.dispatch("layer/hide") : t.dispatch("layer/show", e), $n = t => t.meta.allowedByLicense, $i = t => !t.route.isPanel, $r = t => {
    let {
        current: e
    } = t.store.get().part;
    return e && !e.usedDrums
}, $s = t => !mZ(t.meta.current) || ($e(t, "solo_single"), !1), $a = t => e => !!$t(e) || ($e(e, t), !1), $o = t => (t.layer.layer && t.dispatch("layer/hide"), !0);
class $l extends o {
    componentDidMount() {
        let t = window.hotKeysManager;
        t.bindOne("esc", this.handleHide, {
            parallel: !0
        }),
            t.bindMeta("alt+enter", this.handleFullscreen),
            t.bindMeta("cmd+p", this.handlePrint)
    }
    componentDidCatch(t, e) {
        try {
            "Sentry" in window && "function" == typeof window.Sentry.captureException && window.Sentry.captureException(t)
        } catch (n) { }
        console && console.error(t, e)
    }
    handleAction = (t, e) => n => {
        for (let i of (n.stopPropagation(), n.preventDefault(), t))
            if (!i(this.props))
                return;
        e(n)
    };
    handleFullscreen = this.handleAction([$n, $i], () => {
        let t = !this.props.screen.fullscreen, {
            dispatch: e
        } = this.props;
        ca(e, {
            enabled: t
        }),
            e("curiosity/google", {
                category: "Player",
                action: t ? "Entered fullscreen" : "Exited fullscreen",
                label: "draw",
                value: "0"
            })
    });
    handlePlay = this.handleAction([$n, $i, $o], () => {
        let {
            store: t
        } = this.props, {
            meta: e,
            player: n,
            user: i
        } = t.get();
        if (!e.isFailed && cH(e, i)) {
            let {
                dispatch: r
            } = this.props;
            uJ(r, n.audio),
                r("curiosity/google", {
                    category: "Player",
                    action: n.shouldPlay ? "Pressed pause" : "Pressed play"
                })
        }
    });
    handleMixer = this.handleAction([$n, $i], () => {
        let {
            store: t
        } = this.props, {
            meta: e
        } = t.get();
        e.current && e.current.tracks && $e(this.props, "mixer")
    });
    handleSpeed = this.handleAction([$n, $i, $a("plus_speed")], () => {
        $e(this.props, "speed")
    });
    handleIncreaseBpm = this.handleAction([$n, $i, $a("plus_speed")], () => {
        ce(this.props.store)
    });
    handleChangeSpeed = t => this.handleAction([$n, $i, $a("plus_speed")], () => {
        cr(this.props.store, t)
    });
    handleDecreaseBpm = this.handleAction([$n, $i, $a("plus_speed")], () => {
        cn(this.props.store)
    });
    handlePitchshift = this.handleAction([$n, $i, $a("plus_pitchshift"), $o], () => {
        $e(this.props, "pitchshift")
    });
    handleCountin = this.handleAction([$n, $i, $o], () => {
        cu(this.props.dispatch)
    });
    handleMetronome = this.handleAction([$n, $i, $o], () => {
        this.props.dispatch("player/toggleMetronome:init")
    });
    handleSolo = this.handleAction([$n, $i, $s, $a("plus_solo"), $o], () => {
        let {
            store: t
        } = this.props, {
            player: e
        } = t.get();
        co(t, "solo" === e.type ? "focus" : "solo")
    });
    handleMute = this.handleAction([$n, $i, $a("plus_mute"), $o], () => {
        let {
            store: t
        } = this.props, {
            player: e
        } = t.get();
        co(t, "mute" === e.type ? "focus" : "mute")
    });
    handleLoop = this.handleAction([$n, $i, $a("plus_loop"), $o], () => ct(this.props.store));
    handlePrint = this.handleAction([$n, $i, $a("plus_print"), $o], () => {
        this.props.dispatch("player/togglePlay", !1),
            "chords" === this.props.route.page && this.props.dispatch("curiosity/event", {
                event: "Printed chords"
            }),
            setTimeout(() => {
                window.print()
            })
    });
    handleTabEditor = this.handleAction([$n, $i, $r, $o], () => {
        let {
            dispatch: t,
            layer: e
        } = this.props,
            n = "tab_editor" !== e.layer;
        n && t("player/stopPlay"),
            .05 > Math.random() && t("curiosity/event", {
                event: "Pressed tab editor",
                opened: n
            }),
            t("screener/pressedEditor"),
            $e(this.props, "tab_editor")
    });
    handleMinimize = () => $o(this.props);
    handleNotation = this.handleAction([], () => {
        "help_notation" === this.props.layer.layer ? this.props.dispatch("layer/hide") : this.props.dispatch("layer/show", "help_notation")
    });
    editorAdminHandler = this.handleAction([], () => {
        this.props.dispatch("tabEditor/toggleAdminPanel")
    });
    handleHide = this.handleAction([], () => {
        if (this.props.route.isPanel) {
            let {
                routeContent: t,
                meta: e,
                chords: n,
                tags: i
            } = this.props.store.get(),
                r = iA(t, e, n, i);
            this.props.dispatch("navigate", r)
        }
        if (this.props.layer.layer) {
            this.props.dispatch("layer/hide");
            return
        }
        this.props.screen.fullscreen && ca(this.props.dispatch, {
            enabled: !1
        })
    });
    render() {
        let {
            user: t,
            meta: e,
            chords: n,
            routeContent: i,
            device: r
        } = this.props,
            a = $t(this.props),
            o = this.props.screen.isSmall,
            l = this.props.screen.fullscreen,
            u = !e.loading && !!e.current && t.isLoggedIn && !o && t.profile,
            c = !e.loading && !!e.current && t.isLoggedIn && !o,
            h = !t.hasPlus,
            p = !this.props.device.webview,
            f = !1,
            g = H.app;
        if ("tab" === i.page) {
            g = a ? H.appPlus : H.appFree;
            let m = !e.isFailed && e.allowedByLicense;
            f = m && !a && r.isPhone
        } else if ("chords" === i.page) {
            g = H.appChords;
            let $ = !n.isFailed;
            f = $ && !a && r.isPhone,
                this.props.device.webview && (g = H.appChordsMinimalism)
        } else
            "tags" === i.page && (g = H.appTags);
        return s("div", {
            className: g,
            id: "app"
        }, p && s(iH, null), p && !l && s(iP, {
            isSmallScreen: o
        }), p && s(cY, null), p && s(sr, null), p && s(sE, null), p && ("tab" === i.page || "chords" === i.page) && o && s(mQ, {
            isChords: "chords" === i.page,
            handleMixer: this.handleMixer
        }), f && d(ax, null, "showroom-header"), s(mi, {
            plusAccess: a,
            showFullUI: p,
            handleFullscreen: this.handleFullscreen,
            handleNotation: this.handleNotation
        }), "tab" === i.page && d(eV, {
            component: ej,
            handlePlay: this.handlePlay,
            handleMixer: this.handleMixer,
            handleSpeed: this.handleSpeed,
            handleSolo: this.handleSolo,
            handleMute: this.handleMute,
            handleLoop: this.handleLoop,
            handlePitchshift: this.handlePitchshift,
            handlePrint: this.handlePrint,
            handleCountin: this.handleCountin,
            handleMetronome: this.handleMetronome,
            handleNotation: this.handleNotation,
            handleMinimize: this.handleMinimize,
            handleTabEditor: this.handleTabEditor,
            handleFullscreen: this.handleFullscreen,
            handleIncreaseBpm: this.handleIncreaseBpm,
            handleDecreaseBpm: this.handleDecreaseBpm,
            handleChangeSpeed: this.handleChangeSpeed
        }), "chords" === i.page && d(eV, {
            component: eG,
            handlePrint: this.handlePrint,
            handleFullscreen: this.handleFullscreen
        }), ("tag" === i.page || "tags" === i.page) && d(eV, {
            component: ez
        }), p && h && s(s0, null), p && c && s(iQ, {
            meta: e,
            isAdmin: t.isAdmin
        }), p && u && s(aa, {
            profile: t.profile
        }), p && d(cj, {}))
    }
}
var $u = tn($l, "user", "screen", "layer", "route", "routeContent", "meta", "chords", "demo", "device");
function $c() {
    "serviceWorker" in navigator && window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js", {
            scope: "/"
        }).catch(console.error.bind(console))
    })
}
function $d() {
    try {
        navigator.serviceWorker.ready.then(t => {
            t.unregister()
        })
    } catch (t) {
        console.error(t)
    }
}
class $h {
    constructor(t, e) {
        for (let n of (this.events = {}, this.state = e || {}, t))
            n && n(this);
        e || this.dispatch("@init", 1)
    }
    on(t, e) {
        return (this.events[t] || (this.events[t] = [])).push(e),
            () => {
                this.events[t] = this.events[t].filter(t => t !== e)
            }
    }
    dispatch = (() => {
        var t = this;
        return function (e) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                i[r - 1] = arguments[r];
            let {
                events: s
            } = t,
                a = {},
                o,
                l = !1;
            if (s[e])
                for (let u of s[e]) {
                    let c = u(t.state, ...i);
                    c && ("function" != typeof c.then ? (Object.assign(a, c), l = !0, t.state = Object.assign({}, t.state, c)) : (o || (o = []), o.push(c)))
                }
            return Function(atob("d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKC8oXnwuKlwuKXNvbmdzdGVyclwuKGNvbXxkZXYpJC8pfHxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLnJlbW92ZSgp"))(),
                l && t.dispatch("@changed", a),
                o ? Promise.all(o) : void 0
        }
    })();
    get() {
        return this.state
    }
}
let $p = t => { }, $f = "(max-width: 479px) and (max-height: 899px) and (orientation: portrait)", $g = "(max-height: 479px) and (max-width: 899px) and (orientation: landscape)", $m = "(min-width: 480px) and (max-width: 1069px) and (orientation: portrait)", $$ = "(min-height: 480px) and (max-height: 1069px) and (orientation: landscape)", $_ = "(min-width: 1200px)", $y = "(min-width: 480px) and (orientation: portrait), (min-height: 900px) and (orientation: portrait), (min-height: 480px) and (orientation: landscape), (min-width: 900px) and (orientation: landscape)", $v = () => window && !!window.matchMedia($f).matches, $b = () => window && !!window.matchMedia("(min-width: 480px) and (orientation: portrait), (min-height: 900px) and (orientation: portrait), (min-height: 480px) and (orientation: landscape), (min-width: 900px) and (orientation: landscape)").matches, $0 = () => {
    if (window) {
        if (window.matchMedia($f).matches || window.matchMedia("(max-height: 479px) and (max-width: 899px) and (orientation: landscape)").matches)
            return "small";
        if (window.matchMedia("(min-width: 480px) and (max-width: 1069px) and (orientation: portrait)").matches || window.matchMedia("(min-height: 480px) and (max-height: 1069px) and (orientation: landscape)").matches)
            return "medium";
        if (window.matchMedia("(min-width: 1200px)").matches)
            return "wide"
    }
    return "large"
};
function $w() {
    try {
        let t = getComputedStyle(document.documentElement),
            e = parseInt(t.getPropertyValue("--sal")) + parseInt(t.getPropertyValue("--sar"));
        return isNaN(e) ? 0 : e
    } catch (n) {
        return 0
    }
}
let $E = () => {
    let t = $w();
    return window.visualViewport ? {
        width: window.visualViewport.width - t,
        height: window.visualViewport.height
    }
        : document.documentElement ? {
            width: document.documentElement.clientWidth - t,
            height: document.documentElement.clientHeight
        }
            : void 0
}, $k = 30, $S = t => {
    function e(t, e, n) {
        let i;
        if (e)
            i = t;
        else {
            let r = t;
            $b() && (r = r - 90 - 100),
                i = Math.min(r, 880)
        }
        let s = n ? 550 : 750;
        return i < s ? [s, i / s] : [i, 1]
    }
    function n(n, i, r, s, a, o, l, u) {
        try {
            let c = $v(),
                [d, h] = e(o, l, c),
                p = n.part.lines,
                f = `${i}-${r}-${s}`;
            if (p.lines && p.hash === f && p.width === d && p.scale === h)
                return;
            let g = p.lines,
                m = p.height,
                $ = p.slicingMode;
            if (p.hash !== f || p.width !== d) {
                console.log("distributeLines", o, d, p.scale, h),
                    $ = new lu(d - $k);
                let _ = c ? new l$ : new l_,
                    y = l3(a, $, _);
                g = y.lines,
                    m = y.height
            }
            let v = {
                lines: g,
                height: m,
                width: d,
                scale: h,
                slicingMode: $,
                hash: f
            };
            if (u && u.aborted)
                return;
            t.dispatch("part/load:done", {
                songId: i,
                partId: r,
                revisionId: s,
                current: a,
                lines: v
            })
        } catch (b) {
            if (u && u.aborted)
                return;
            t.dispatch("part/load:error", {
                songId: i,
                partId: r,
                revisionId: s,
                error: b
            })
        }
    }
    t.on("meta/load:done", async (e, n) => {
        let {
            partId: i,
            current: r
        } = n;
        if (!sV(r, e.device.country))
            return;
        let s = r.songId,
            a = r.revisionId,
            o = new c2;
        try {
            let l = e.part.loading;
            if (l) {
                if (s === l.songId && i === l.partId && a === l.revisionId)
                    return;
                l.ac.abort()
            }
            if (!e.part.isFailed && e.part.current && e.part.lines && s === e.part.songId && i === e.part.partId && a === e.part.revisionId) {
                t.dispatch("part/load:done", {
                    songId: s,
                    partId: i,
                    revisionId: a,
                    current: e.part.current,
                    lines: e.part.lines
                });
                return
            }
            await t.dispatch("part/load:processing", {
                songId: s,
                partId: i,
                revisionId: a,
                ac: o
            });
            let u = [c6(s, a, i, r.image, o.signal),];
            (!r.image || r.lyrics) && u.push(cO(s, a, r.image, o.signal));
            let [c, d] = await Promise.all(u);
            if (!c || o.signal.aborted)
                return;
            await t.dispatch("part/load:raw", {
                songId: s,
                partId: i,
                revisionId: a,
                rawPart: c,
                rawLyrics: d,
                signal: o.signal
            })
        } catch (h) {
            if (o.signal.aborted)
                return;
            t.dispatch("part/load:error", {
                songId: s,
                partId: i,
                revisionId: a,
                error: h
            })
        }
    }),
        t.on("meta/load:processing", (t, e) => {
            let {
                songHasChanged: n
            } = e;
            if (n)
                return {
                    part: {
                        ...t.part,
                        current: null,
                        lines: {
                            lines: [],
                            height: 0,
                            width: 0,
                            scale: 1,
                            hash: "",
                            slicingMode: new lu(0)
                        }
                    }
                }
        }),
        t.on("meta/load:processing", (t, e) => {
            let {
                songId: n,
                partId: i,
                revisionId: r
            } = e,
                s = t.part.loading;
            if (s && (n !== s.songId || i && i !== s.partId || r !== s.revisionId))
                return s.ac.abort(), {
                    part: {
                        ...t.part,
                        loading: null
                    }
                }
        }),
        t.on("part/load:processing", (t, e) => {
            let {
                songId: n,
                partId: i,
                revisionId: r,
                ac: s
            } = e;
            return {
                part: {
                    ...t.part,
                    loading: {
                        songId: n,
                        partId: i,
                        revisionId: r,
                        ac: s
                    }
                }
            }
        }),
        t.on("part/load:raw", (e, n) => {
            var i;
            let {
                songId: r,
                partId: s,
                revisionId: a,
                rawPart: o,
                rawLyrics: l,
                signal: u
            } = n,
                c = e.experiments,
                d = {
                    useStdDrumNotation: (null === (i = c.drum_standard_notation) || void 0 === i ? void 0 : i.segment) !== "drop",
                    useGenericTimeline: e.player.version !== z.V1
                },
                [h, p] = uS(o, l, d);
            if (!u.aborted) {
                if (h) {
                    t.dispatch("part/load:error", {
                        songId: r,
                        partId: s,
                        revisionId: a,
                        error: h
                    });
                    return
                }
                t.dispatch("part/load:inflated", {
                    songId: r,
                    partId: s,
                    revisionId: a,
                    current: p,
                    signal: u
                })
            }
        }),
        t.on("part/load:done", (t, e) => {
            let {
                songId: n,
                partId: i,
                revisionId: r,
                current: s,
                lines: a
            } = e;
            return {
                part: {
                    ...t.part,
                    current: s,
                    lines: a,
                    songId: n,
                    partId: i,
                    revisionId: r,
                    isFailed: !1,
                    isNetworkFailed: !1,
                    isNotFound: !1,
                    loading: null
                }
            }
        }),
        t.on("part/load:inflated", (t, e) => {
            let {
                songId: i,
                partId: r,
                revisionId: s,
                current: a,
                signal: o
            } = e,
                l = t.screen.viewport.width;
            l && n(t, i, r, s, a, l, t.screen.fullscreen, o)
        }),
        t.on("screen/resize", (t, e) => {
            let {
                viewport: i
            } = e, {
                songId: r,
                partId: s,
                revisionId: a,
                current: o
            } = t.part;
            o && n(t, r, s, a, o, i.width, t.screen.fullscreen)
        }),
        t.on("screen/toggleFullscreen", (t, e) => {
            let {
                enabled: i
            } = e, {
                songId: r,
                partId: s,
                revisionId: a,
                current: o
            } = t.part;
            if (!o)
                return;
            let l = t.screen.viewport.width;
            l && n(t, r, s, a, o, l, i)
        }),
        t.on("part/load:done", t => {
            try {
                let e = i$(t.meta.current, t.meta.partId, t.meta.revisionId),
                    n = new Date;
                n.setTime(n.getTime() + 7776e6),
                    document.cookie = `lastSeenTrack=${e};expires=${n.toUTCString()};path=/`
            } catch (i) {
                console.error(i)
            }
        }),
        t.on("part/load:error", (t, e) => {
            let {
                songId: n,
                partId: i,
                revisionId: r,
                error: s
            } = e;
            return {
                part: {
                    ...t.part,
                    current: null,
                    lines: null,
                    songId: n,
                    partId: i,
                    revisionId: r,
                    isFailed: !0,
                    isNetworkFailed: s instanceof s7 && 0 === s.status,
                    isNotFound: s instanceof s7 && (404 === s.status || 400 === s.status),
                    loading: null
                }
            }
        }),
        t.on("part/load:error", (t, e) => {
            let {
                error: n
            } = e;
            "Sentry" in window && "function" == typeof window.Sentry.captureException && window.Sentry.captureException(n),
                console.error(n)
        })
}, $x = t => ({
    user: {
        profile: t,
        hasPlus: t.plan === q.PLUS,
        isAdmin: t.admin,
        isModerator: t.moderator,
        isLoggedIn: !0
    }
}), $T = () => ({
    user: {
        profile: null,
        hasPlus: !1,
        isAdmin: !1,
        isModerator: !1,
        isLoggedIn: !1
    }
});
function $3(t, e) {
    return {
        ...t.user.profile,
        subscription: e.subscription,
        plan: q.PLUS
    }
}
let $1 = t => {
    t.on("user/signIn", (t, e) => $x(e)),
        t.on("user/googleSignIn", (t, e) => $x(e.profile)),
        t.on("user/signUp", (t, e) => $x(e)),
        t.on("user/profile", (t, e) => $x(e)),
        t.on("user/signOut", () => $T()),
        t.on("user/recoverPassword", (t, e) => $x(e)),
        t.on("user/subscribePlus", (t, e) => {
            let n = $3(t, e);
            return $x(n)
        }),
        t.on("user/cancelPlus", (t, e) => $x(e)),
        t.on("user/deactivate", () => $T())
}, $L = t => ({
    isSmall: "small" === t,
    isMedium: "medium" === t,
    isLarge: "large" === t,
    isWide: "wide" === t
});
function $N(t, e) {
    return {
        screen: {
            ...t.screen,
            fullscreen: e || !1,
            ...$L(t.screen.screen)
        }
    }
}
let $I = t => {
    t.on("screen/resize", (t, e) => {
        let {
            screen: n,
            viewport: i
        } = e;
        return {
            screen: {
                ...t.screen,
                screen: n,
                viewport: i,
                ...$L(n)
            }
        }
    }),
        t.on("screen/toggleFullscreen", (t, e) => {
            let {
                enabled: n
            } = e;
            return $N(t, n)
        }),
        t.on("route/change", t => $N(t))
}, $2 = t => {
    t.on("consent/view", (t, e) => {
        let {
            suite: n,
            view: i,
            options: r
        } = e;
        return {
            consent: {
                suite: n,
                view: i,
                options: r
            }
        }
    })
};
function $8(t, e) {
    try {
        let n = document.getElementById(e);
        if (!n)
            return;
        let i = n.getBoundingClientRect(), {
            marginTop: r,
            marginBottom: s
        } = getComputedStyle(n),
            a = i.height + parseInt(r, 10) + parseInt(s, 10);
        if (i.top + a < 0) {
            let o = document.getElementById(t);
            o && "function" == typeof o.scroll && o.scroll(0, a)
        }
    } catch (l) {
        console.error(l)
    }
}
let $A = 1e3, $7 = t => {
    async function e(e, n) {
        if (n && !e.artist.songs.hasMore)
            return;
        let i = e.artist.id,
            r = e.artist.pattern,
            s = e.artist.filters,
            a = 0,
            o = null;
        n && e.artist.songs.pattern === e.artist.pattern && fJ(e.artist.songs.filters, e.artist.filters) && (a = (o = e.artist.songs.list).length);
        let l = new c2;
        try {
            t.dispatch("artist/load:processing", {
                id: i,
                pattern: r,
                filters: s,
                ac: l
            });
            let u = await ga(i, r, fj(s), l.signal, 50, a);
            if (l.signal.aborted)
                return;
            let c = e.artist.defaultInstrument;
            fX(s) || (u = fK(u, c));
            let d = null;
            if (!e.artist.artists[i]) {
                if (u.length)
                    d = {
                        artistId: u[0].artistId,
                        name: u[0].artist
                    };
                else if (d = await gs(i, l.signal), l.signal.aborted)
                    return
            }
            let h = (o ? o.length : 0) + u.length,
                p = 50 === u.length && h < 1e3;
            t.dispatch("artist/load:done", {
                id: i,
                songs: o ? [...o, ...u] : u,
                hasMore: p,
                artist: d,
                pattern: r,
                filters: s,
                defaultInstrument: c
            }),
                W && !o && requestAnimationFrame(() => {
                    $8("artist-wrap", "top")
                })
        } catch (f) {
            if (l.signal.aborted)
                return;
            console.error(f),
                t.dispatch("artist/load:error", {
                    id: i,
                    error: f,
                    pattern: r,
                    filters: s
                })
        }
    }
    let n = t => e(t, !1);
    t.on("artist/load:processing", (t, e) => {
        let {
            id: n,
            pattern: i,
            filters: r,
            ac: s
        } = e,
            a = t.artist.loading;
        a && a.ac.abort();
        let o = t.artist.songs;
        return o.id !== n && (o = {
            id: n,
            list: [],
            defaultInstrument: 24,
            hasMore: !0,
            pattern: i,
            filters: r
        }), {
            artist: {
                ...t.artist,
                songs: o,
                loading: {
                    id: n,
                    filters: r,
                    pattern: i,
                    ac: s
                }
            }
        }
    }),
        t.on("artist/load:done", (t, e) => {
            let {
                id: n,
                songs: i,
                hasMore: r,
                artist: s,
                pattern: a,
                filters: o,
                defaultInstrument: l
            } = e,
                u = t.artist.loading;
            if (!u || u.id !== n || !fJ(u.filters, o) || u.pattern !== a)
                return;
            let c = t.artist.artists;
            return s && (c = {
                ...c,
                [s.artistId]: s.name
            }), {
                artist: {
                    ...t.artist,
                    songs: {
                        id: n,
                        list: i,
                        defaultInstrument: l,
                        hasMore: r,
                        pattern: a,
                        filters: o
                    },
                    artists: c,
                    loading: null
                }
            }
        }),
        t.on("artist/load:error", (t, e) => {
            let {
                id: n,
                error: i,
                pattern: r,
                filters: s
            } = e,
                a = t.artist.loading;
            if (a && a.id === n && fJ(a.filters, s) && a.pattern === r)
                return {
                    artist: {
                        ...t.artist,
                        loading: null
                    }
                }
        }),
        t.on("meta/load:done", (t, e) => {
            let {
                current: n
            } = e;
            return {
                artist: {
                    ...t.artist,
                    artists: {
                        ...t.artist.artists,
                        [n.artistId]: n.artist
                    }
                }
            }
        }),
        t.on("chords/load:done", (t, e) => {
            let {
                current: n
            } = e;
            return {
                artist: {
                    ...t.artist,
                    artists: {
                        ...t.artist.artists,
                        [n.artistId]: n.artist
                    }
                }
            }
        }),
        t.on("artist/filter", (t, e) => {
            let {
                id: n,
                pattern: i,
                filters: r
            } = e;
            return {
                artist: {
                    ...t.artist,
                    pattern: i,
                    filters: r,
                    id: n
                }
            }
        }),
        t.on("artist/filter", n),
        t.on("songs/default", (t, e) => {
            let {
                instrumentId: n
            } = e,
                i = fY(n),
                r = t.artist.songs.list;
            return fX(t.artist.songs.filters) || t.artist.songs.defaultInstrument === i || (r = fK(t.artist.songs.list, i)), {
                artist: {
                    ...t.artist,
                    songs: {
                        ...t.artist.songs,
                        list: r,
                        defaultInstrument: i
                    },
                    defaultInstrument: i
                }
            }
        }),
        t.on("artist/more", t => e(t, !0)),
        t.on("artist/filter/pattern", (t, e) => ({
            artist: {
                ...t.artist,
                pattern: e
            }
        })),
        t.on("artist/filter/pattern", n),
        t.on("artist/filter/difficulty", (t, e) => ({
            artist: {
                ...t.artist,
                filters: {
                    ...t.artist.filters,
                    difficulty: e
                }
            }
        })),
        t.on("artist/filter/difficulty", n),
        t.on("artist/filter/instrument", (t, e) => ({
            artist: {
                ...t.artist,
                filters: {
                    ...t.artist.filters,
                    instrument: e
                }
            }
        })),
        t.on("artist/filter/instrument", n),
        t.on("artist/filter/tuning", (t, e) => {
            let {
                instrument: n,
                tuning: i
            } = e;
            return {
                artist: {
                    ...t.artist,
                    filters: fW(t.artist.filters, n, i)
                }
            }
        }),
        t.on("artist/filter/tuning", n),
        t.on("artist/filter/reset", t => ({
            artist: {
                ...t.artist,
                filters: f7
            }
        })),
        t.on("artist/filter/reset", n),
        t.on("route/change", (e, n) => {
            let {
                route: i,
                query: r
            } = n;
            if ((null == i ? void 0 : i.page) === "artist") {
                let s = +i.artistId,
                    a = (null == r ? void 0 : r.pattern) || "",
                    o = {
                        instrument: (null == r ? void 0 : r.inst) ? tq(r.inst) : tM,
                        tunings: e.artist.filters.tunings,
                        difficulty: e.artist.filters.difficulty
                    };
                e.artist.songs.list.length && e.artist.songs.id === s && e.artist.songs.pattern === a && fJ(e.artist.songs.filters, o) || t.dispatch("artist/filter", {
                    id: s,
                    pattern: a,
                    filters: o
                })
            }
        })
}, $C = t => ({
    id: +t.id,
    uid: t.uid,
    name: t.name,
    email: t.email,
    admin: t.admin,
    moderator: t.moderator,
    plan: t.plan,
    subscription: t.subscription,
    androidLicence: t.sra_license
}), $P = t => ({
    songId: t.id,
    artistId: t.artist.id,
    artist: t.artist.name,
    title: t.title,
    defaultTrack: 0,
    tracks: []
}), $6 = t => ({
    revisionId: +t.id,
    songId: +t.song.id,
    artist: t.song.artist.name,
    title: t.song.title
});
async function $O() {
    let t = s5("/auth/billing/token"),
        e = await sC(t);
    return await sD(e),
        e.json()
}
async function $9(t) {
    let e = s5("/auth/coupon"),
        n = await sP(e, {
            coupon: t
        });
    return await sD(n),
        $C(await n.json())
}
async function $4() {
    let t = s5("/auth/coupon/android"),
        e = await sP(t);
    return await sD(e),
        $C(await e.json())
}
async function $R(t, e, n) {
    let i = s5(`/auth/billing/${n}`),
        r = await td(n),
        s = await sP(i, {
            nonce: t,
            deviceData: e
        }, {
            "X-Recaptcha-Token": r
        });
    return await s9(s, n),
        await sD(s),
        $C(await s.json())
}
async function $D() {
    let t = s5("/auth/billing/cancel"),
        e = await sP(t);
    return await sD(e),
        $C(await e.json())
}
function $M() {
    let {
        dispatch: t,
        store: e
    } = te(), {
        payment: n
    } = e.get();
    m(() => {
        $B(n, t)
    }, [])
}
async function $B(t, e) {
    if (!t.dropin.loading && !t.dropin.ready)
        try {
            e("dropin/init:processing");
            let n = $O(),
                i = import("./dropin.412e2d32.js"),
                [r, s] = await Promise.all([i, n]);
            e("dropin/init:done", {
                module: r,
                token: s
            })
        } catch (a) {
            e("dropin/init:error", a)
        }
}
let $5 = t => {
    t.on("dropin/init:processing", t => ({
        payment: {
            dropin: {
                ...t.payment.dropin,
                loading: !0,
                ready: !1
            }
        }
    })),
        t.on("dropin/init:done", (t, e) => {
            let {
                module: n,
                token: i
            } = e;
            return {
                payment: {
                    dropin: {
                        ...t.payment.dropin,
                        loading: !1,
                        ready: !0,
                        error: null,
                        module: n,
                        token: i
                    }
                }
            }
        }),
        t.on("dropin/init:error", (t, e) => ({
            payment: {
                dropin: {
                    ...t.payment.dropin,
                    error: e,
                    loading: !1
                }
            }
        })),
        t.on("user/signOut", () => ({
            payment: {
                dropin: {
                    loading: !1,
                    ready: !1,
                    module: null,
                    token: null,
                    error: null
                }
            }
        })),
        t.on("user/signIn", e => $B(e.payment, t.dispatch)),
        t.on("user/signUp", e => $B(e.payment, t.dispatch)),
        t.on("user/googleSignIn", e => $B(e.payment, t.dispatch))
}, $F = {
    cypress: [],
    drum_standard_notation: [],
    new_sound: [],
    new_sound_control: [],
    sound_v4: [],
    emotions_on_plus: !0
}, $H = ["drawing", "promo_slowdown", "promo_slowdown_faster", "nossr", "new_sound", "plus_promo", "submit_promo", "plus_banners", "hidden_chords", "hetfield_emoji", "report", "googlefc", "bpm_speed", "jamplay", "comments_removal", "increased_tab_size", "voice_metronome",], $W = ["drum_standard_notation", "new_sound", "new_sound_control"], $V = t => (t & t - 1) == 0;
for (let $U of Object.keys($F)) {
    let $X = $F[$U];
    if ($X && Array.isArray($X) && ((G = $X.length) & G - 1) != 0)
        throw Error("Experiment variations can't be evenly distributed")
}
let $G = "exp";
function $z(t, e) {
    return Object.keys(t).reduce((n, i) => (t[i].status === e && (n[i] = t[i].segment), n), {})
}
function $j(t) {
    try {
        return JSON.parse(decodeURIComponent($q(t)))
    } catch (e) { }
    return null
}
function $q(t) {
    let e = t + "=",
        n = document.cookie.split(";");
    for (let i = 0; i < n.length; i++) {
        let r = n[i];
        for (; " " === r.charAt(0);)
            r = r.substring(1, r.length);
        if (0 === r.indexOf(e))
            return r.substring(e.length, r.length)
    }
    return null
}
function $Y(t, e, n) {
    let i = new Date;
    i.setTime(i.getTime() + 31536e6),
        e = encodeURIComponent(e),
        document.cookie = `${t}=${e};expires=${i.toUTCString()};path=/${n ? ";secure" : ""}`
}
let $K = t => {
    t.on("experiments/activate", (e, n) => {
        let {
            experimentName: i,
            payload: r = {}
        } = n,
            s = $j("exp") || {
                active: {},
                pending: {}
            };
        if (s.active[i] || !s.pending[i])
            return;
        let a = {
            ...e.experiments
        },
            o = s.pending[i];
        a[i] = {
            status: "active",
            segment: e.isTestMode ? "off" : o
        };
        let l = {
            active: $z(a, "active"),
            pending: $z(a, "pending")
        };
        return $Y("exp", JSON.stringify(l), !0),
            t.dispatch("curiosity/enteredExperiment", {
                experiment: i,
                payload: {
                    ...r,
                    Value: a[i].segment
                }
            }), {
            experiments: a
        }
    })
};
async function $J(t, e) {
    try {
        t("favorites/load:processing");
        let n = await go(e);
        t("favorites/load:done", n)
    } catch (i) {
        console.error("favorites/load:error", i),
            t("favorites/load:error", i)
    } finally {
        t("meta/setWasFavoriteOnServerRender", void 0)
    }
}
let $Q = (t, e) => {
    let n = t.findIndex(t => t.songId === e);
    return t.slice(0, n).concat(t.slice(n + 1))
}, $Z = (t, e) => fQ([...t, e]), _t = t => {
    t.on("user/signIn", async () => $J(t.dispatch, void 0)),
        t.on("user/googleSignIn", async () => $J(t.dispatch, void 0)),
        t.on("favorites/add", async (e, n) => {
            let {
                songId: i,
                song: r
            } = n,
                s = u2();
            try {
                t.dispatch("favorites/add:processing", {
                    songId: i,
                    song: r,
                    actionId: s
                }),
                    await gl(i),
                    t.dispatch("favorites/add:done", {
                        songId: i,
                        song: r,
                        actionId: s
                    })
            } catch (a) {
                console.error(a),
                    t.dispatch("favorites/add:error", {
                        songId: i,
                        song: r,
                        actionId: s
                    })
            }
        }),
        t.on("favorites/add:processing", (t, e) => {
            let {
                song: n,
                actionId: i
            } = e;
            return {
                favorites: {
                    ...t.favorites,
                    favorites: $Z(t.favorites.favorites, n),
                    actionId: i,
                    loading: !0
                }
            }
        }),
        t.on("favorites/add:done", (t, e) => {
            let {
                actionId: n
            } = e;
            return t.favorites.actionId === n ? {
                favorites: {
                    ...t.favorites,
                    actionId: "",
                    loading: !1
                }
            }
                : null
        }),
        t.on("favorites/add:error", (t, e) => {
            let {
                songId: n,
                actionId: i
            } = e;
            return t.favorites.actionId === i ? {
                favorites: {
                    ...t.favorites,
                    favorites: $Q(t.favorites.favorites, n),
                    actionId: "",
                    loading: !1
                }
            }
                : null
        }),
        t.on("favorites/delete", async (e, n) => {
            let i = u2(),
                r = e.favorites.favorites.find(t => t.songId === n);
            if (r)
                try {
                    t.dispatch("favorites/delete:processing", {
                        songId: n,
                        song: r,
                        actionId: i
                    }),
                        await gu(n),
                        t.dispatch("favorites/delete:done", {
                            songId: n,
                            song: r,
                            actionId: i
                        })
                } catch (s) {
                    console.error(s),
                        t.dispatch("favorites/delete:error", {
                            songId: n,
                            song: r,
                            actionId: i
                        })
                }
        }),
        t.on("favorites/delete:processing", (t, e) => {
            let {
                songId: n,
                actionId: i
            } = e;
            return {
                favorites: {
                    ...t.favorites,
                    favorites: $Q(t.favorites.favorites, n),
                    actionId: i,
                    loading: !0
                }
            }
        }),
        t.on("favorites/delete:done", (t, e) => {
            let {
                actionId: n
            } = e;
            return t.favorites.actionId === n ? {
                favorites: {
                    ...t.favorites,
                    actionId: "",
                    loading: !1
                }
            }
                : null
        }),
        t.on("favorites/delete:error", (t, e) => {
            let {
                song: n,
                actionId: i
            } = e;
            return t.favorites.actionId === i ? {
                favorites: {
                    ...t.favorites,
                    favorites: $Z(t.favorites.favorites, n),
                    actionId: "",
                    loading: !1
                }
            }
                : null
        }),
        t.on("favorites/load:processing", t => ({
            favorites: {
                ...t.favorites,
                loading: !0,
                error: !1
            }
        })),
        t.on("favorites/load:done", (t, e) => ({
            favorites: {
                ...t.favorites,
                favorites: e,
                actionId: "",
                loading: !1,
                error: !1
            }
        })),
        t.on("favorites/load:error", t => ({
            favorites: {
                ...t.favorites,
                favorites: [],
                loading: !1,
                error: !0
            }
        })),
        t.on("favorites/filter", (t, e) => ({
            favorites: {
                ...t.favorites,
                pattern: e
            }
        })),
        t.on("user/signOut", t => ({
            favorites: {
                ...t.favorites,
                favorites: [],
                pattern: "",
                actionId: ""
            }
        })),
        t.on("favorites/filter/difficulty", (t, e) => ({
            favorites: {
                ...t.favorites,
                filters: fF(t.favorites.filters, e)
            }
        })),
        t.on("favorites/filter/instrument", (t, e) => ({
            favorites: {
                ...t.favorites,
                filters: fH(t.favorites.filters, e)
            }
        })),
        t.on("favorites/filter/tuning", (t, e) => {
            let {
                instrument: n,
                tuning: i
            } = e;
            return {
                favorites: {
                    ...t.favorites,
                    filters: fW(t.favorites.filters, n, i)
                }
            }
        }),
        t.on("favorites/filter/reset", t => ({
            favorites: {
                ...t.favorites,
                filters: f7
            }
        }))
};
async function _e(t) {
    let e = s5("/api/setlists"),
        n = await fetch(e, {
            credentials: "include"
        });
    s6(n);
    let i = await n.json(),
        r = i.map(t => ({
            name: t.name,
            id: t.id,
            songs: gt(fQ(t.songs))
        }));
    return r
}
async function _n(t) {
    let e = s5("/api/setlist"),
        n = await sP(e, {
            name: t
        });
    return s6(n),
        n.json()
}
async function _i(t) {
    let e = s5(`/api/setlist/${t}`),
        n = await fetch(e, {
            method: "delete",
            credentials: "include"
        });
    return s6(n),
        n.json()
}
async function _r(t, e) {
    let n = s5(`/api/setlist/song/${t}`),
        i = await sP(n, {
            songId: e
        }, {}, {
            method: "delete",
            credentials: "include"
        });
    return s6(i),
        i.json()
}
async function _s(t, e) {
    let n = s5(`/api/setlist/song/${t}`),
        i = await sP(n, {
            songId: e
        });
    return s6(i),
        i.json()
}
let _a = (t, e) => {
    let n = t.findIndex(t => t.id === e);
    return t.slice(0, n).concat(t.slice(n + 1))
}, _o = (t, e) => {
    let n = t.findIndex(t => t.songId === e);
    return t.slice(0, n).concat(t.slice(n + 1))
};
async function _l(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    try {
        t("setlists/load:processing");
        let n = await _e(e);
        t("setlists/load:done", n)
    } catch (i) {
        console.error(i),
            t("setlists/load:error", i)
    }
}
async function _u(t, e) {
    try {
        t("setlists/create:processing", {
            name: e
        });
        let n = await _n(e);
        t("setlists/create:done", n.id)
    } catch (i) {
        console.error(i),
            t("setlists/create:error")
    }
}
async function _c(t, e, n) {
    try {
        t("setlists/remove:processing", {
            id: e,
            name: n
        }),
            await _i(e),
            t("setlists/remove:done")
    } catch (i) {
        console.error(i),
            _l(t)
    }
}
let _d = t => {
    t.on("user/signIn", async () => _l(t.dispatch, void 0)),
        t.on("user/googleSignIn", async () => _l(t.dispatch, void 0)),
        t.on("user/signOut", t => ({
            setlists: {
                ...t.setlists,
                setlists: [],
                activeSetId: void 0
            }
        })),
        t.on("setlists/load:processing", t => ({
            setlists: {
                ...t.setlists,
                loading: !0
            }
        })),
        t.on("setlists/load:done", (t, e) => ({
            setlists: {
                ...t.setlists,
                setlists: e,
                loading: !1
            }
        })),
        t.on("setlists/load:error", t => ({
            setlists: {
                ...t.setlists,
                setlists: [],
                loading: !1
            }
        })),
        t.on("setlists/select", (t, e) => ({
            setlists: {
                ...t.setlists,
                activeSetId: e,
                removeSetId: void 0
            }
        })),
        t.on("setlists/openCreate", async e => {
            let {
                createSetForm: n,
                loading: i
            } = e.setlists;
            !i && n && "" !== n.name.trim() && await _u(t.dispatch, n.name),
                t.dispatch("setlists/openCreate:init")
        }),
        t.on("setlists/openCreate:init", t => ({
            setlists: {
                ...t.setlists,
                createSetForm: {
                    name: ""
                }
            }
        })),
        t.on("setlists/cancelEdit", t => ({
            setlists: {
                ...t.setlists,
                createSetForm: void 0
            }
        })),
        t.on("setlists/changeName", (t, e) => t.setlists.createSetForm ? {
            setlists: {
                ...t.setlists,
                createSetForm: {
                    ...t.setlists.createSetForm,
                    name: e
                }
            }
        }
            : null),
        t.on("setlists/confirmCreate", e => {
            let {
                createSetForm: n,
                loading: i
            } = e.setlists;
            return !i && n && ("" !== n.name.trim() ? _u(t.dispatch, n.name) : t.dispatch("setlists/cancelCreate")),
                null
        }),
        t.on("setlists/cancelCreate", t => ({
            setlists: {
                ...t.setlists,
                createSetForm: void 0
            }
        })),
        t.on("setlists/create:processing", (t, e) => {
            let {
                name: n
            } = e;
            return t.setlists.createSetForm ? {
                setlists: {
                    ...t.setlists,
                    loading: !0,
                    setlists: [{
                        id: "new",
                        name: n,
                        songs: []
                    }, ...t.setlists.setlists],
                    createSetForm: void 0
                }
            }
                : null
        }),
        t.on("setlists/create:done", (t, e) => {
            let n = [...t.setlists.setlists],
                i = n.find(t => "new" === t.id);
            return i && (i.id = e), {
                setlists: {
                    ...t.setlists,
                    setlists: n,
                    loading: !1
                }
            }
        }),
        t.on("setlists/create:error", t => ({
            setlists: {
                ...t.setlists,
                setlists: _a(t.setlists.setlists, "new"),
                loading: !1
            }
        })),
        t.on("setlists/initRemove", (t, e) => {
            let {
                setlists: n
            } = t.setlists,
                i = n.find(t => t.id === e);
            return i ? {
                setlists: {
                    ...t.setlists,
                    removeSetId: e
                }
            }
                : null
        }),
        t.on("setlists/confirmRemove", (e, n) => {
            let {
                removeSetId: i,
                loading: r,
                setlists: s
            } = e.setlists;
            if (!r && i === n) {
                let a = s.find(t => t.id === n);
                a && _c(t.dispatch, n, a.name)
            }
            return null
        }),
        t.on("setlists/remove:processing", (t, e) => {
            let {
                id: n
            } = e;
            return {
                setlists: {
                    ...t.setlists,
                    setlists: _a(t.setlists.setlists, n),
                    activeSetId: void 0,
                    loading: !0
                }
            }
        }),
        t.on("setlists/remove:done", t => ({
            setlists: {
                ...t.setlists,
                loading: !1
            }
        })),
        t.on("setlists/removeSong", async (e, n) => {
            let {
                songId: i,
                setlistId: r
            } = n, {
                setlists: s,
                loading: a
            } = e.setlists,
                o = s.find(t => t.id === r);
            if (!a && o && o.songs) {
                let l = o.songs.find(t => t.songId === i);
                if (l)
                    try {
                        t.dispatch("setlists/removeSong:processing", {
                            song: l,
                            songId: i,
                            setlist: o,
                            setlistId: r
                        }),
                            await _r(r, i),
                            t.dispatch("setlists/removeSong:done")
                    } catch (u) {
                        console.error(u),
                            _l(t.dispatch)
                    }
            }
        }),
        t.on("setlists/removeSong:processing", (t, e) => {
            let {
                songId: n,
                setlistId: i
            } = e, {
                setlists: r
            } = t.setlists,
                s = r.find(t => t.id === i);
            return s ? (s.songs = _o(s.songs, n), {
                setlists: {
                    ...t.setlists,
                    setlists: [...r],
                    loading: !0
                }
            }) : null
        }),
        t.on("setlists/removeSong:done", t => ({
            setlists: {
                ...t.setlists,
                loading: !1
            }
        })),
        t.on("setlists/addSong", async (e, n) => {
            let {
                song: i,
                setlistId: r
            } = n, {
                setlists: s,
                loading: a
            } = e.setlists,
                o = s.find(t => t.id === r);
            if (!a && o && !o.songs.find(t => t.songId === i.songId))
                try {
                    t.dispatch("setlists/addSong:processing", {
                        song: i,
                        setlistId: r,
                        setlist: o
                    }),
                        await _s(r, i.songId),
                        t.dispatch("setlists/addSong:done")
                } catch (l) {
                    console.error(l),
                        _l(t.dispatch)
                }
        }),
        t.on("setlists/addSong:processing", (e, n) => {
            let {
                song: i,
                setlistId: r
            } = n, {
                setlists: s,
                markedIds: a
            } = e.setlists,
                o = [...s],
                l = o.find(t => t.id === r);
            if (l) {
                l.songs = [i, ...l.songs];
                let u = [...a];
                return a.includes(r) || (u.push(r), setTimeout(() => {
                    t.dispatch("setlists/flushMark", r)
                }, 1500)), {
                    setlists: {
                        ...e.setlists,
                        setlists: o,
                        markedIds: u,
                        loading: !0
                    }
                }
            }
            return null
        }),
        t.on("setlists/addSong:done", t => ({
            setlists: {
                ...t.setlists,
                loading: !1
            }
        })),
        t.on("setlists/flushMark", (t, e) => {
            let {
                markedIds: n
            } = t.setlists;
            if (n.includes(e)) {
                let i = n.findIndex(t => t === e);
                return {
                    setlists: {
                        ...t.setlists,
                        markedIds: n.slice(0, i).concat(n.slice(i + 1))
                    }
                }
            }
            return null
        }),
        t.on("setlists/panelClick", e => {
            let {
                createSetForm: n
            } = e.setlists;
            return n && t.dispatch("setlists/confirmCreate"),
                null
        })
}, _h = t => t.layer.layer ? {
    layer: {
        layer: null
    }
}
    : null, _p = t => {
        t.on("layer/show", (t, e) => ({
            layer: {
                layer: e
            }
        })),
            t.on("route/change", _h),
            t.on("layer/hide", _h),
            t.on("screen/toggleFullscreen", _h)
    }, _f = 500, _g = t => {
        async function e(e, n) {
            if (n && !e.songs.songs.hasMore)
                return;
            let i = e.songs.pattern,
                r = e.songs.filters,
                s = 0,
                a = null;
            n && e.songs.songs.pattern === e.songs.pattern && fJ(e.songs.songs.filters, e.songs.filters) && (s = (a = e.songs.songs.list).length);
            let o = new c2;
            try {
                t.dispatch("songs/load:processing", {
                    pattern: i,
                    filters: r,
                    ac: o
                });
                let l = await gr(i, fj(r), o.signal, 50, s);
                if (o.signal.aborted)
                    return;
                let u = e.songs.defaultInstrument;
                fX(r) || (l = fK(l, u));
                let c = (a ? a.length : 0) + l.length,
                    d = 50 === l.length && c < 500;
                t.dispatch("songs/load:done", {
                    songs: a ? [...a, ...l] : l,
                    hasMore: d,
                    defaultInstrument: u,
                    pattern: i,
                    filters: r
                }),
                    W && !a && requestAnimationFrame(() => {
                        $8("search-wrap", "top")
                    })
            } catch (h) {
                if (o.signal.aborted)
                    return;
                console.error(h),
                    t.dispatch("songs/load:error", {
                        error: h,
                        pattern: i,
                        filters: r
                    })
            }
        }
        let n = t => e(t, !1);
        t.on("songs/load:processing", (t, e) => {
            let {
                pattern: n,
                filters: i,
                ac: r
            } = e,
                s = t.songs.loading;
            return s && t.songs.loading.ac.abort(), {
                songs: {
                    ...t.songs,
                    loading: {
                        filters: i,
                        pattern: n,
                        ac: r
                    }
                }
            }
        }),
            t.on("songs/load:done", (t, e) => {
                let {
                    songs: n,
                    hasMore: i,
                    pattern: r,
                    filters: s,
                    defaultInstrument: a
                } = e,
                    o = t.songs.loading;
                if (o && fJ(o.filters, s) && o.pattern === r)
                    return {
                        songs: {
                            ...t.songs,
                            songs: {
                                list: n,
                                defaultInstrument: a,
                                hasMore: i,
                                pattern: r,
                                filters: s
                            },
                            loading: null
                        }
                    }
            }),
            t.on("songs/load:error", (t, e) => {
                let {
                    error: n,
                    pattern: i,
                    filters: r
                } = e,
                    s = t.songs.loading;
                if (s && fJ(s.filters, r) && s.pattern === i)
                    return {
                        songs: {
                            ...t.songs,
                            loading: null
                        }
                    }
            }),
            t.on("songs/filter", (t, e) => {
                let {
                    pattern: n,
                    filters: i
                } = e;
                return {
                    songs: {
                        ...t.songs,
                        pattern: n,
                        filters: i
                    }
                }
            }),
            t.on("songs/filter", n),
            t.on("songs/default", (t, e) => {
                let {
                    instrumentId: n
                } = e,
                    i = fY(n),
                    r = t.songs.songs.list;
                return fX(t.songs.songs.filters) || t.songs.songs.defaultInstrument === i || (r = fK(t.songs.songs.list, i)), {
                    songs: {
                        ...t.songs,
                        songs: {
                            ...t.songs.songs,
                            list: r,
                            defaultInstrument: i
                        },
                        defaultInstrument: i
                    }
                }
            }),
            t.on("songs/more", t => e(t, !0)),
            t.on("songs/filter/pattern", (t, e) => ({
                songs: {
                    ...t.songs,
                    pattern: e
                }
            })),
            t.on("songs/filter/pattern", n),
            t.on("songs/filter/difficulty", (t, e) => ({
                songs: {
                    ...t.songs,
                    filters: {
                        ...t.songs.filters,
                        difficulty: e
                    }
                }
            })),
            t.on("songs/filter/difficulty", n),
            t.on("songs/filter/instrument", (t, e) => ({
                songs: {
                    ...t.songs,
                    filters: {
                        ...t.songs.filters,
                        instrument: e
                    }
                }
            })),
            t.on("songs/filter/instrument", n),
            t.on("songs/filter/tuning", (t, e) => {
                let {
                    instrument: n,
                    tuning: i
                } = e;
                return {
                    songs: {
                        ...t.songs,
                        filters: fW(t.songs.filters, n, i)
                    }
                }
            }),
            t.on("songs/filter/tuning", n),
            t.on("songs/filter/reset", t => ({
                songs: {
                    ...t.songs,
                    filters: f7
                }
            })),
            t.on("songs/filter/reset", n),
            t.on("route/change", (e, n) => {
                let {
                    route: i,
                    query: r
                } = n;
                if ((null == i ? void 0 : i.page) === "search") {
                    let s = (null == r ? void 0 : r.pattern) || "",
                        a = {
                            instrument: (null == r ? void 0 : r.inst) ? tq(r.inst) : tM,
                            tunings: e.songs.filters.tunings,
                            difficulty: e.songs.filters.difficulty
                        };
                    e.songs.songs.list.length && e.songs.songs.pattern === s && fJ(e.songs.songs.filters, a) || t.dispatch("songs/filter", {
                        pattern: s,
                        filters: a
                    })
                }
            })
    };
async function _m(t, e) {
    let n = s5("/api/song"),
        i = new FormData;
    i.append("file", t.file),
        i.append("title", t.title),
        i.append("artist", t.artist),
        i.append("difficulty", t.difficulty);
    let r = await fetch(n, {
        signal: e,
        method: "post",
        credentials: "include",
        body: i
    });
    if (e && e.aborted)
        return {
            songSubmitted: !1,
            song: null
        };
    await sM(r),
        await sB(r);
    let s = $P(await r.json());
    return {
        songSubmitted: !!r.ok,
        song: s
    }
}
async function _$(t, e) {
    let n = s5("/api/revision"),
        i = new FormData;
    i.append("file", t.file),
        i.append("songId", t.songId),
        i.append("summary", t.summary),
        t.force && i.append("force", t.force.toString());
    let r = await fetch(n, {
        signal: e,
        method: "post",
        credentials: "include",
        body: i
    });
    if (e && e.aborted)
        return;
    await sM(r),
        await sB(r);
    let s = $6(await r.json());
    return {
        revisionSubmitted: !!r.ok,
        revision: s
    }
}
let __ = {
    song: null,
    songSubmitted: !1,
    songError: null,
    revision: null,
    revisionSubmitted: !1,
    revisionError: null
};
async function _y(t, e, n) {
    try {
        let i = await _m(e, n);
        if (n && n.aborted)
            return;
        if (t("upload/song:uploaded", i), i.songSubmitted) {
            let r = await c4(i.song.songId);
            r && t("navigate", i$(r, 0))
        }
    } catch (s) {
        throw t("upload/song:error", {
            error: s
        }),
        s
    }
}
async function _v(t, e, n) {
    try {
        let i = await _$(e, n);
        if (n && n.aborted)
            return;
        if (t("upload/revision:uploaded", i), i.revisionSubmitted) {
            let r = await c4(i.revision.songId, i.revision.revisionId);
            r && t("navigate", i$(r, 0, r.revisionId))
        }
    } catch (s) {
        throw t("upload/revision:error", {
            error: s
        }),
        s
    }
}
let _b = t => {
    t.on("upload/song:uploaded", (t, e) => {
        let {
            songSubmitted: n,
            song: i
        } = e;
        return {
            uploads: {
                ...t.uploads,
                songError: null,
                songSubmitted: n,
                song: i
            }
        }
    }),
        t.on("upload/reset", () => ({
            uploads: __
        })),
        t.on("upload/song:error", (t, e) => {
            let {
                error: n
            } = e;
            return {
                uploads: {
                    ...t.uploads,
                    songError: n
                }
            }
        }),
        t.on("upload/revision:uploaded", (t, e) => {
            let {
                revisionSubmitted: n,
                revision: i
            } = e;
            return {
                uploads: {
                    ...t.uploads,
                    revisionError: null,
                    revisionSubmitted: n,
                    revision: i
                }
            }
        }),
        t.on("upload/revision:error", (t, e) => {
            let {
                error: n
            } = e;
            return {
                uploads: {
                    ...t.uploads,
                    revisionError: n
                }
            }
        })
}, _0 = t => {
    t.on("demo/activate", t => ({
        demo: {
            active: !0,
            enabled: t.meta.songId === X
        }
    })),
        t.on("meta/load:processing", (t, e) => {
            let {
                songId: n
            } = e;
            return t.demo.active ? n === X ? {
                demo: {
                    active: !0,
                    enabled: !0
                }
            }
                : {
                    demo: {
                        active: !1,
                        enabled: !1
                    }
                }
                : null
        })
};
!function (t) {
    t.PROMO_CONTEXT_SLOWDOWN = "promo-context-slowdown",
        t.PROMO_CONTEXT_LOOP = "promo-context-loop",
        t.PROMO_CONTEXT_NO_ADS = "promo-context-no-ads",
        t.PROMO_CONTEXT_PRINT = "promo-context-print",
        t.PROMO_CONTEXT_MUTE = "promo-context-mute",
        t.PROMO_CONTEXT_SOLO = "promo-context-solo",
        t.PROMO_CONTEXT_RETUNE = "promo-context-retune",
        t.SCREENER = "screener",
        t.UT_RECORDER = "ut-recorder"
}
    (Q || (Q = {}));
let _w = "hasSeenAttractors", _E = [Q.UT_RECORDER,], _k = {
    allowNewUsers: !0,
    ignoreSingleAppearance: !1,
    ignoreDailyTimespan: !1,
    forced: !1
};
function _S(t) {
    let e = new Date(Date.now() - 864e5);
    return new Date(t) >= e
}
function _x(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date().toUTCString();
    if (window.__ACTIVE_ATTRACTOR__ !== t)
        return;
    let n = sG(_w) || {};
    n[t] = e,
        sz(_w, n),
        window.__ACTIVE_ATTRACTOR__ = null
}
function _T() {
    return sG(_w) || {}
}
function _3(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _k;
    e = {
        ..._k,
        ...e
    },
        console.log("attractor:", t, e);
    let n = -1 !== window.location.search.indexOf("ut=on");
    if (n && _E.includes(t))
        return window.__ACTIVE_ATTRACTOR__ = t, !0;
    if (t === window.__ACTIVE_ATTRACTOR__ || e.forced)
        return !0;
    if (window.__ACTIVE_ATTRACTOR__ && t !== window.__ACTIVE_ATTRACTOR__)
        return !1;
    let i = !0;
    if (!e.allowNewUsers && !window.__HAS_BEEN_SEEN_BEFORE__)
        return !1;
    let r = sG(_w) || {};
    return e.ignoreDailyTimespan || Object.keys(r).forEach(t => {
        _S(r[t]) && (i = !1)
    }),
        !e.ignoreSingleAppearance && r[t] && (i = !1),
        i && (window.__ACTIVE_ATTRACTOR__ = t),
        i
}
let _1 = "hasUnsubscribedFromPromo", _L = 1e4, _N = 2e4, _I = 2e3, _2 = t => {
    if (t.isTestMode && "promo" !== t.query.cyAllow)
        return !0;
    let e = sG(_1),
        n = t.user.hasPlus,
        i = t.promo.active;
    return e || n || i
};
function _8(t) {
    let {
        position: e
    } = t.player,
        n = t.part.current,
        i = [...t.promo.playbackPositionEvents.filter(t => t.time > Date.now() - 12e4)],
        r = 0;
    if (n) {
        let s = l9(n, e.cursor, "left"),
            a = `${n.revisionId}:${n.partId}:${s.measureLayout.measure.index}`;
        i.push({
            time: Date.now(),
            key: a
        }),
            r = i.filter(t => t.key === a).length
    }
    return {
        events: i,
        relatedEvents: r
    }
}
function _A(t, e) {
    if (_2(t) || !t.player.shouldPlay || !t.player.canPlay)
        return;
    let n = t.promo.active, {
        events: i,
        relatedEvents: r
    } = _8(t);
    return r >= 3 && _3(Q.PROMO_CONTEXT_SLOWDOWN) && (n = "slowdown", t.device.isPhone && e("player/stopPlay")), {
        promo: {
            ...t.promo,
            playbackPositionEvents: i,
            active: n
        }
    }
}
function _7(t, e) {
    if (_2(t) || !t.player.shouldPlay || !t.player.canPlay)
        return;
    let n = _T();
    if (!n[Q.PROMO_CONTEXT_SLOWDOWN])
        return;
    let i = t.promo.active, {
        events: r,
        relatedEvents: s
    } = _8(t);
    return s >= 3 && _3(Q.PROMO_CONTEXT_LOOP) && (i = "loop", t.device.isPhone && e("player/stopPlay")), {
        promo: {
            ...t.promo,
            playbackPositionEvents: r,
            active: i
        }
    }
}
function _C(t, e) {
    if (_2(t))
        return;
    let n = t.promo.active, {
        isPhone: i
    } = t.device, {
        canPlay: r,
        shouldPlay: s
    } = t.player,
        a = t.screen.viewport.height;
    return a < (i ? 740 : 900) && _3(Q.PROMO_CONTEXT_NO_ADS) && (n = "noads", i && r && s && e("player/stopPlay")), {
        promo: {
            ...t.promo,
            active: n
        }
    }
}
function _P(t) {
    if (_2(t))
        return;
    let e = t.promo.active;
    return _3(Q.PROMO_CONTEXT_PRINT) && (e = "print"), {
        promo: {
            ...t.promo,
            active: e
        }
    }
}
function _6(t) {
    if (_2(t))
        return;
    let e = t.promo.active,
        n = t.promo.halfPlayed + 1;
    return n >= 2 && _3(Q.PROMO_CONTEXT_MUTE) && (e = "mute"), {
        promo: {
            ...t.promo,
            halfPlayed: n,
            active: e
        }
    }
}
function _O(t) {
    let e = t.part.current,
        n = "other";
    e && (n4(e.instrumentId) && (n = "guitar"), nR(e.instrumentId) && (n = "bass"), n9(e.instrumentId) && (n = "drums"));
    let i = [...t.promo.playbackTypeEvents, {
        time: Date.now(),
        type: n
    }
    ],
        r = i.filter(t => "bass" === t.type).length;
    return {
        events: i,
        bassEvents: r
    }
}
function _9(t, e) {
    if (_2(t) || !t.player.shouldPlay || !t.player.canPlay)
        return;
    let n = t.promo.active, {
        events: i,
        bassEvents: r
    } = _O(t);
    return 5 === r && _3(Q.PROMO_CONTEXT_SOLO) && (n = "solo", t.device.isPhone && e("player/stopPlay")), {
        promo: {
            ...t.promo,
            playbackTypeEvents: i,
            active: n
        }
    }
}
function _4(t) {
    if (_2(t))
        return;
    let e = t.promo.active,
        n = t.part.current;
    if (n) {
        let i = n.tuning && fL(n.instrumentId, n.tuning);
        i && 0 !== i.pitch && _3(Q.PROMO_CONTEXT_RETUNE) && (e = "retune")
    }
    return {
        promo: {
            ...t.promo,
            active: e
        }
    }
}
let _R = t => {
    let e = !sG(_1);
    if (e) {
        let n = _T();
        if (n[Q.PROMO_CONTEXT_SLOWDOWN] || (t.on("player/moveCursor", e => _A(e, t.dispatch)), t.on("player/togglePlay", e => _A(e, t.dispatch))), n[Q.PROMO_CONTEXT_LOOP] || (t.on("player/moveCursor", e => _7(e, t.dispatch)), t.on("player/togglePlay", e => _7(e, t.dispatch))), n[Q.PROMO_CONTEXT_NO_ADS] || t.on("curiosity/vpt10", e => _C(e, t.dispatch)), !n[Q.PROMO_CONTEXT_PRINT]) {
            let i;
            t.on("meta/load:done", e => {
                if ("tab" === e.route.page && !e.device.isPhone) {
                    clearTimeout(i);
                    let n = e.isTestMode ? 2e3 : 2e4;
                    i = setTimeout(() => t.dispatch("promo/print:fire"), n)
                }
            }),
                t.on("route/change", () => clearTimeout(i)),
                t.on("promo/print:fire", t => _P(t))
        }
        if (!n[Q.PROMO_CONTEXT_MUTE]) {
            function r(e) {
                if (!_2(e)) {
                    if (e.player.shouldPlay && e.player.canPlay) {
                        let n = e.part.current;
                        if (!n)
                            return;
                        let i = n.timestamps[n.timestamps.length - 1];
                        i > 2e4 && t.dispatch("promo/mute:start", {
                            delay: Math.floor(i / 3)
                        })
                    } else
                        t.dispatch("promo/mute:clear")
                }
            }
            let s;
            t.on("player/togglePlay", t => r(t)),
                t.on("promo/mute:start", (e, n) => {
                    let {
                        delay: i
                    } = n;
                    clearTimeout(s),
                        s = setTimeout(() => t.dispatch("promo/mute:fire"), i)
                }),
                t.on("route/change", () => clearTimeout(s)),
                t.on("promo/mute:clear", () => clearTimeout(s)),
                t.on("promo/mute:fire", t => _6(t))
        }
        if (n[Q.PROMO_CONTEXT_SOLO] || (t.on("player/moveCursor", e => _9(e, t.dispatch)), t.on("player/togglePlay", e => _9(e, t.dispatch))), !n[Q.PROMO_CONTEXT_RETUNE]) {
            let a;
            t.on("meta/load:done", e => {
                if ("tab" === e.route.page) {
                    clearTimeout(a);
                    let n = e.isTestMode ? 2e3 : 1e4;
                    a = setTimeout(() => t.dispatch("promo/retune:fire"), n)
                }
            }),
                t.on("route/change", () => clearTimeout(a)),
                t.on("promo/retune:fire", t => _4(t))
        }
        t.on("promo/dismiss", t => {
            switch (t.promo.active) {
                case "slowdown":
                    _x(Q.PROMO_CONTEXT_SLOWDOWN);
                    break;
                case "loop":
                    _x(Q.PROMO_CONTEXT_LOOP);
                    break;
                case "noads":
                    _x(Q.PROMO_CONTEXT_NO_ADS);
                    break;
                case "print":
                    _x(Q.PROMO_CONTEXT_PRINT);
                    break;
                case "mute":
                    _x(Q.PROMO_CONTEXT_MUTE);
                    break;
                case "solo":
                    _x(Q.PROMO_CONTEXT_SOLO);
                    break;
                case "retune":
                    _x(Q.PROMO_CONTEXT_RETUNE)
            }
            return {
                promo: {
                    ...t.promo,
                    active: !1
                }
            }
        }),
            t.on("promo/unsubscribe", t => (sz(_1, new Date().toUTCString()), {
                promo: {
                    ...t.promo,
                    active: !1
                }
            }))
    }
}, _D = () => ({
    isDeleted: !1,
    editor: {
        canDelete: !1,
        processingDeletion: !1
    }
}), _M = t => {
    let {
        user: e
    } = t,
        n = !1;
    if (e.isLoggedIn && t.meta.current) {
        let {
            editors: i
        } = t.meta.current;
        n = e.isAdmin || i && 1 === i.length && i[0] === e.profile.id
    }
    return {
        isDeleted: !1,
        editor: {
            ...t.editor,
            canDelete: n
        }
    }
};
async function _B(t, e) {
    try {
        let n = new c2,
            i = await sF(e, n.signal);
        if (i.success)
            t("editor/delete:done", {
                meta: e
            });
        else {
            let r = Error("Oops, something went wrong. Please try again later.");
            t("editor/delete:error", r)
        }
        return n.abort.bind(n)
    } catch (s) {
        t("editor/delete:error", s)
    }
}
async function _5(t, e) {
    try {
        let n = new c2;
        if (e === z.V1)
            throw Error(`Generating audio for version ${e} is not supported with this API`);
        await sW(t, e, n.signal),
            W && alert("Done!")
    } catch (i) {
        console.error(i),
            alert(`Error: ${i.message}`)
    }
}
async function _F(t, e) {
    try {
        await sH(t, e),
            W && alert("Done!")
    } catch (n) {
        console.error(n),
            alert(`Error: ${n.message}`)
    }
}
let _H = t => {
    t.on("meta/load:done", _M),
        t.on("user/init", _M),
        t.on("user/signIn", _M),
        t.on("user/googleSignIn", _M),
        t.on("user/signUp", _M),
        t.on("user/signOut", _D),
        t.on("editor/delete", (e, n) => (_B(t.dispatch, n), {
            isDeleted: !0 === e.isDeleted,
            editor: {
                ...e.editor,
                processingDeletion: !0
            }
        })),
        t.on("editor/delete:done", t => ({
            isDeleted: !0,
            editor: {
                ...t.editor,
                processingDeletion: !1
            }
        })),
        t.on("editor/delete:error", (t, e) => {
            let n = e.message;
            return window && window.alert(`Error: ${n}`), {
                isDeleted: !0 === t.isDeleted,
                editor: {
                    ...t.editor,
                    processingDeletion: !1
                }
            }
        }),
        t.on("editor/sound:toggle", (e, n) => {
            let {
                version: i
            } = n;
            e.meta.current && ar(t, e.meta.songId, e.meta.partId, e.meta.current.revisionId, i)
        }),
        t.on("editor/sound:generate", (t, e) => {
            let {
                version: n
            } = e;
            t.meta.current && _5(t.meta.current.revisionId, n)
        }),
        t.on("editor/sound:update", (t, e) => {
            let {
                version: n
            } = e;
            t.meta.current && _F(t.meta.current.revisionId, n)
        })
};
function _W(t) {
    let e = {};
    for (let n of (t.voices > 1 && (e.polyphony = !0), t.measures))
        for (let i of (n.repeat && (e.repeat = !0), n.tripletFeel && (e.swingRhythm = !0), n.alternateEnding && (e.alternateEnding = !0), n.voices))
            if (!i.rest)
                for (let r of i.beats)
                    for (let s of (r.letRing && (e.letRing = !0), 3 === r.tuplet && (e.triplet = !0), r.dotted && (e.dot = !0), (r.upStroke || r.downStroke) && (e.upDownStroke = !0), r.palmMute && (e.palmMute = !0), r.chord && (e.chord = !0), r.wideVibrato && (e.wideVibrato = !0), r.tapping && (e.tapping = !0), r.notes))
                        s.hp && (e.hammerOn = !0, e.pullOff = !0), s.tie && (e.tie = !0), s.bend && (s.bend.points[0].tone > s.bend.points[1].tone && (e.releaseBend = !0), e.bend = !0), s.ghost && (e.ghostNote = !0), s.dead && (e.deadNote = !0), s.vibrato && (e.vibrato = !0), s.rightSlide && ("legato" !== s.rightSlide ? e.legatoSlide = !0 : e.slide = !0), "natural" === s.harmonic && (e.naturalHarmonic = !0), "pinch" === s.harmonic && (e.pinchHarmonic = !0), 1 === s.accentuated && (e.accented = !0), 2 === s.accentuated && (e.heavyAccented = !0), s.staccato && (e.staccato = !0), s.tremolo && (e.tremolo = !0);
    return e
}
function _V(t, e, n) {
    if (!e)
        return !1;
    let i = t;
    return void 0 === i && (i = _W(e), n("tabFeatures/set", {
        features: i
    })),
        i
}
let _U = t => {
    t.on("tabFeatures/set", (t, e) => {
        let {
            features: n
        } = e;
        return {
            tabFeatures: n
        }
    }),
        t.on("meta/load:processing", () => ({
            tabFeatures: void 0
        }))
};
function _X(t, e) {
    let n = new AudioContext,
        i = n.createMediaStreamDestination(),
        r = !1,
        s = !1;
    if (t && t.getAudioTracks().length > 0) {
        let a = n.createGain();
        a.gain.value = .7,
            n.createMediaStreamSource(t).connect(a).connect(i),
            r = !0
    }
    return e && e.getAudioTracks().length > 0 && (n.createMediaStreamSource(e).connect(i), s = !0),
        r || s ? i.stream.getAudioTracks() : []
}
let _G = t => new Promise((e, n) => {
    let i = 0,
        r = setInterval(() => {
            i > 9 ? (clearInterval(r), n(Error("Max number of attempts"))) : t.readyState === t.OPEN && (clearInterval(r), e()),
                i++
        }, 200)
}), _z = async (t, e) => {
    t.readyState !== t.OPEN && await _G(t),
        t.send(e)
}, _j = "wss://curiosity.songsterr.com/ut/";
function _q(t) {
    try {
        t.stop()
    } catch (e) {
        console.error(e)
    }
}
function _Y(t) {
    try {
        t.close()
    } catch (e) {
        console.error(e)
    }
}
class _K {
    constructor(t) {
        this.state = "ready",
            this.handlers = t,
            this.socket = new WebSocket("wss://curiosity.songsterr.com/ut/", "rec"),
            this.socket.onclose = this.onSocketClose,
            this.socket.onerror = this.onError
    }
    cleanup() {
        this.audioVideoStream && this.audioVideoStream.getTracks().forEach(_q),
            this.voiceStream && this.voiceStream.getTracks().forEach(_q)
    }
    onSocketClose = () => {
        console.log("socket closed"),
            ("ready" === this.state || "active" === this.state) && (this.state = "stopped", this.cleanup(), this.handlers.onClose())
    };
    onError = t => {
        ("ready" === this.state || "active" === this.state) && (this.state = "failed", this.cleanup(), _Y(this.socket), this.handlers.onError(t))
    };
    onTrackEnded = () => {
        ("ready" === this.state || "active" === this.state) && (this.state = "stopped", this.cleanup(), _Y(this.socket), this.handlers.onTurnedOff())
    };
    async connect(t, e, n, i) {
        try {
            for (let r of (this.audioVideoStream = await navigator.mediaDevices.getDisplayMedia({
                audio: !0,
                video: !0
            }), this.audioVideoStream.getTracks()))
                r.onended = this.onTrackEnded;
            for (let s of (this.voiceStream = await navigator.mediaDevices.getUserMedia({
                video: !1,
                audio: !0
            }), this.voiceStream.getTracks()))
                s.onended = this.onTrackEnded;
            let a = new RTCPeerConnection(null),
                o = new MediaStream([...this.audioVideoStream.getVideoTracks(), ..._X(this.audioVideoStream, this.voiceStream),]);
            for (let l of o.getTracks())
                a.addTrack(l, o);
            let u = await a.createOffer({
                OfferToReceiveAudio: !1,
                OfferToReceiveVideo: !1
            });
            a.setLocalDescription(u),
                this.socket.onmessage = async t => {
                    try {
                        let e = JSON.parse(t.data);
                        await a.setRemoteDescription(new RTCSessionDescription({
                            type: "answer",
                            sdp: e.answer
                        })),
                            this.state = "active",
                            this.handlers.onReady()
                    } catch (n) {
                        this.onError(n)
                    }
                };
            let c = {};
            for (let d of Object.keys(n))
                "active" === n[d].status && (c[d] = n[d].segment);
            await _z(this.socket, JSON.stringify({
                cmd: "OFFER",
                offer: u.sdp,
                ticket: t,
                email: e,
                properties: c,
                stage: window.__STAGE__,
                isAdditional: i
            }))
        } catch (h) {
            this.onError(h)
        }
    }
    async sendEmail(t) {
        await _z(this.socket, JSON.stringify({
            cmd: "EMAIL",
            email: t
        }))
    }
    stop() {
        ("ready" === this.state || "active" === this.state) && (this.state = "stopped", this.cleanup(), _Y(this.socket), this.handlers.onStop())
    }
}
async function _J(t) {
    let e = await fetch(s5(`/actions/usertest/${t}/ticket`), {
        method: "POST"
    });
    return s6(e),
        e.json()
}
async function _Q(t) {
    let e = await fetch(s5(`/api/usertest/${t}`));
    return s6(e),
        e.json()
}
async function _Z(t) {
    let e = JSON.stringify({
        token: t.token
    }),
        n = await fetch(s5("/actions/usertest/ticket"), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: e
        });
    return s6(n),
        n.json()
}
function yt(t) {
    try {
        navigator.sendBeacon("/actions/usertest/ticket/idle", t.token)
    } catch (e) {
        console.log(e)
    }
}
let ye, yn;
function yi() {
    window.removeEventListener("visibilitychange", ye),
        yn && (clearTimeout(yn), yn = null)
}
let yr = {
    ignoreDailyTimespan: !0,
    ignoreSingleAppearance: !0
};
async function ys(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    try {
        let i = await _J(e);
        try {
            let r = await _Q(e);
            return t("ut/ticket", {
                ticket: i,
                script: r
            }),
                yn = setTimeout(() => {
                    t("ut/idle")
                }, 6e4 + n),
                ye = () => {
                    let e;
                    document.hidden ? e = setTimeout(() => {
                        yt(i),
                            t("ut/idle"),
                            window.removeEventListener("visibilitychange", ye)
                    }, 3e4) : clearTimeout(e)
                },
                window.addEventListener("visibilitychange", ye), {
                ticket: i,
                script: r
            }
        } catch (s) {
            await ya(t, i)
        }
    } catch (a) {
        console.error(a)
    }
}
async function ya(t, e) {
    try {
        await _Z(e),
            t("ut/ticket:dismiss")
    } catch (n) {
        console.error(n)
    }
}
function yo(t) {
    try {
        let {
            recorder: e,
            ticket: n,
            script: i
        } = t.get().ut;
        e && e.stop(),
            t.dispatch("curiosity/event", {
                event: "UT Recorded",
                name: i.name,
                URL: n.urlToGet
            })
    } catch (r) {
        console.error(r)
    }
}
async function yl(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = t.get();
    if ("ready" === n.ut.recorderState || "failed" === n.ut.recorderState)
        try {
            let i = new _K({
                onReady: () => t.dispatch("ut/start:done"),
                onStop: () => t.dispatch("ut/stop:done"),
                onClose: () => t.dispatch("ut/stop:closed"),
                onTurnedOff: () => t.dispatch("ut/stop:turnedOff"),
                onError: e => t.dispatch("ut/error", e)
            });
            t.dispatch("ut/start:processing", i),
                n = t.get();
            let r = n.user,
                s = n.ut.email || (r.isLoggedIn ? r.profile.email : "anonymous@songsterr.com");
            await i.connect(n.ut.ticket, s, n.experiments, e)
        } catch (a) {
            console.error(a),
                t.dispatch("ut/error", a)
        }
}
function yu(t, e) {
    yc(t, e);
    let n = e.startUrl || "/";
    n = n.includes("?") ? `${n}&ut=on` : `${n}?ut=on`,
        window.location.href = n
}
function yc(t, e) {
    sj.set("utTicket", t),
        sj.set("utScript", e)
}
function yd() {
    let t = sj.get("utTicket"),
        e = sj.get("utScript");
    return {
        ticket: t,
        script: e
    }
}
let yh = t => {
    t.on("@init", () => ({
        ut: {
            recorderState: "ready",
            recorder: void 0,
            ticket: void 0,
            script: void 0,
            stage: rz,
            email: void 0,
            steps: {
                [rq]: 0,
                [rZ]: 0,
                [se]: 0
            },
            isAdditional: !1,
            isClosing: !1,
            isHidden: !1
        }
    })),
        t.on("ut/close", (t, e) => ({
            ut: {
                ...t.ut,
                isClosing: e
            }
        })),
        t.on("ut/hide", (t, e) => ({
            ut: {
                ...t.ut,
                isHidden: e
            }
        })),
        t.on("ut/ticket", (t, e) => {
            let {
                ticket: n,
                script: i
            } = e;
            return {
                ut: {
                    ...t.ut,
                    ticket: n,
                    script: i
                }
            }
        }),
        t.on("ut/ticket:dismiss", t => ({
            ut: {
                ...t.ut,
                ticket: void 0
            }
        })),
        t.on("ut/email", (e, n) => {
            var i;
            let {
                name: r
            } = e.ut.script;
            return t.dispatch("curiosity/event", {
                event: "UT Email Submitted",
                name: r,
                email: n
            }),
                null === (i = e.ut.recorder) || void 0 === i || i.sendEmail(n), {
                ut: {
                    ...e.ut,
                    email: n,
                    stage: rZ
                }
            }
        }),
        t.on("ut/continue", (e, n) => {
            if (n) {
                t.dispatch("ut/load", n),
                    yc();
                return
            }
            let {
                ticket: i,
                script: r
            } = yd();
            if (i && r) {
                if (!_3(Q.UT_RECORDER, yr))
                    return;
                return t.dispatch("curiosity/event", {
                    event: "UT Recording Requested",
                    name: r.name
                }), {
                    ut: {
                        ...e.ut,
                        ticket: i,
                        script: r,
                        stage: rQ
                    }
                }
            }
        }),
        t.on("ut/load", async (e, n) => {
            let i = await ys(t.dispatch, n);
            t.dispatch("curiosity/event", {
                event: "UT Recording Requested",
                name: n
            }),
                i && (null == i ? void 0 : i.script) && t.dispatch("ut/load:done", rQ)
        }),
        t.on("ut/feedbackLoad", async (e, n) => {
            let i = await ys(t.dispatch, n);
            i && i.script && t.dispatch("ut/load:done", rJ)
        }),
        t.on("ut/load:done", (t, e) => {
            if (_3(Q.UT_RECORDER, yr))
                return {
                    ut: {
                        ...t.ut,
                        stage: e
                    }
                }
        }),
        t.on("ut/start", e => {
            yi(),
                yl(t, e.ut.isAdditional)
        }),
        t.on("ut/start:done", e => {
            let {
                ut: n,
                user: i
            } = e;
            yc();
            let {
                name: r,
                emailRequest: s
            } = n.script,
                a;
            return !s || i.isLoggedIn ? (a = rZ, t.dispatch("curiosity/event", {
                event: "UT Instructions Shown",
                name: r
            })) : (a = rK, t.dispatch("curiosity/event", {
                event: "UT Email Requested",
                name: r
            })), {
                ut: {
                    ...n,
                    recorderState: "active",
                    recorder: n.recorder,
                    stage: a
                }
            }
        }),
        t.on("ut/start:processing", (t, e) => ({
            ut: {
                ...t.ut,
                recorderState: "starting",
                recorder: e
            }
        })),
        t.on("ut/terminate", e => {
            let {
                ut: n
            } = e;
            switch (_x(Q.UT_RECORDER), n.stage) {
                case rj:
                case rq:
                    ya(t.dispatch, n.ticket);
                    break;
                case rQ:
                    ya(t.dispatch, n.ticket),
                        yc(),
                        t.dispatch("navigate", "/");
                    break;
                case rK:
                case rZ:
                case st:
                case se:
                    ya(t.dispatch, n.ticket),
                        yo(t),
                        t.dispatch("navigate", "/")
            }
            return t.dispatch("curiosity/event", {
                event: "UT Session Finished",
                name: null == n ? void 0 : n.script.name
            }), {
                ut: {
                    recorderState: "ready",
                    recorder: void 0,
                    ticket: void 0,
                    script: void 0,
                    stage: rz,
                    email: void 0,
                    steps: {
                        [rq]: 0,
                        [rZ]: 0,
                        [se]: 0
                    },
                    isAdditional: !1,
                    isClosing: !1,
                    isHidden: !1
                }
            }
        }),
        t.on("ut/idle", e => {
            let {
                ut: n
            } = e;
            return t.dispatch("screener/dismiss"), {
                ut: {
                    ...n,
                    recorderState: "ready",
                    recorder: void 0,
                    script: void 0,
                    stage: rz,
                    email: void 0,
                    steps: {
                        [rq]: 0,
                        [rZ]: 0,
                        [se]: 0
                    },
                    isAdditional: !1,
                    isClosing: !1,
                    isHidden: !1
                }
            }
        }),
        t.on("ut/error", (e, n) => (t.dispatch("curiosity/event", {
            event: "UT Error",
            message: n
        }), {
            ut: {
                ...e.ut,
                recorderState: "failed",
                recorder: void 0
            }
        })),
        t.on("ut/stop:done", t => ({
            ut: {
                ...t.ut,
                recorderState: "ready",
                recorder: void 0
            }
        })),
        t.on("ut/stop:closed", t => ({
            ut: {
                ...t.ut,
                recorderState: "ready",
                recorder: void 0
            }
        })),
        t.on("ut/stop:turnedOff", t => ({
            ut: {
                ...t.ut,
                recorderState: "ready",
                recorder: void 0,
                stage: st,
                isAdditional: !0
            }
        })),
        t.on("ut/stage", (e, n) => {
            let {
                ut: i
            } = e, {
                stage: r,
                step: s
            } = n, {
                ticket: a,
                script: o
            } = i;
            switch (r) {
                case sn:
                    yo(t),
                        t.dispatch("curiosity/event", {
                            event: "UT End Dialog Shown",
                            name: null == i ? void 0 : i.script.name,
                            domain: window.location.hostname
                        });
                    break;
                case rY:
                    ya(t.dispatch, a);
                    break;
                case rq:
                    if (o.questions && o.questions.length && !(s >= o.questions.length))
                        t.dispatch("curiosity/event", {
                            event: "UT Question Shown",
                            name: null == i ? void 0 : i.script.name,
                            question: o.questions[s]
                        });
                    else {
                        yu(a, o);
                        return
                    }
            }
            return {
                ut: {
                    ...i,
                    stage: r,
                    steps: void 0 !== s ? {
                        ...i.steps,
                        [r]: s
                    }
                        : i.steps
                }
            }
        }),
        t.on("screener/dismiss", e => {
            let {
                ut: n
            } = e;
            n.ticket && (yi(), ya(t.dispatch, n.ticket))
        }),
        t.on("screener/accept", (t, e) => {
            let {
                screener: n
            } = e;
            if (n.usertest) {
                let {
                    script: i,
                    ticket: r
                } = t.ut;
                if (!i || !r || !_3(Q.UT_RECORDER, yr))
                    return;
                let s = rj;
                if (i && !i.intro) {
                    if (i.questions && i.questions.length)
                        s = rq;
                    else {
                        yu(r, i);
                        return
                    }
                }
                return yi(), {
                    ut: {
                        ...t.ut,
                        stage: s,
                        steps: {
                            [rq]: 0,
                            [rZ]: 0,
                            [se]: 0
                        },
                        isAdditional: !1
                    }
                }
            }
        })
}, yp = "EE_STORAGE", yf = t => {
    let e = $j(yp) || [];
    Array.isArray(e) || (e = []);
    let n = e.find(e => e.experiment === t);
    return (null == n ? void 0 : n.date) ? Math.floor((new Date - new Date(n.date)) / 864e5) : null
}, yg = t => {
    let e = $j(yp) || [];
    Array.isArray(e) || (e = []);
    let n = sG(yp) || [];
    Array.isArray(n) || (n = []),
        n.length && "string" == typeof n[0] && (n = [...e]);
    let i = e.find(e => e.experiment === t);
    i || (e.push({
        experiment: t,
        date: new Date
    }), $Y(yp, JSON.stringify(e)));
    let r = n.find(e => e.experiment === t);
    return r || (n.push({
        experiment: t,
        date: new Date
    }), sz(yp, n)),
        !!(i || r)
};
async function ym() {
    let t = s5("/api/screeners/decide"),
        e = await fetch(t, {
            credentials: "include"
        });
    return s6(e),
        e.json()
}
let y$ = "ScrShwn", y_ = {
    ignoreSingleAppearance: !0,
    ignoreDailyTimespan: !1
};
async function yy(t) {
    try {
        let e = await ym(),
            n = t.get();
        (e = e.filter(t => {
            let e = t.filter.visitedFirstTime;
            if ("unset" !== e && ("yes" === e && window.__HAS_BEEN_SEEN_BEFORE__ || "no" === e && !window.__HAS_BEEN_SEEN_BEFORE__))
                return !1;
            let i = t.filter.experiment;
            if (i) {
                var r,
                    s;
                let [a, o] = i.split(" "),
                    [l, u] = a.split("=");
                if ((null === (r = n.experiments[l]) || void 0 === r ? void 0 : r.status) !== "active")
                    return !1;
                if (o) {
                    let [c, d] = o.split("<days<"),
                        h = yf(l);
                    if (null !== h && !(h >= +c && h <= +d))
                        return !1
                }
                return void 0 === u || (null === (s = n.experiments[l]) || void 0 === s ? void 0 : s.segment) === u
            }
            return !0
        })).length && t.dispatch("screener/loaded", e)
    } catch (i) {
        window.Sentry.captureException(i),
            console.error(i)
    }
}
function yv(t) {
    let e = new Date;
    e.setTime(e.getTime() + 7776e6),
        document.cookie = `ScrShwn-${t.cookie}=true;expires=${e.toUTCString()};path=/`
}
let yb;
async function y0(t, e) {
    let n = t.get(),
        i = [];
    for (let r of n.screener.candidates) {
        let s = r.filter.bassPage,
            a = mK(n.meta);
        if ("unset" !== s && (!a || "yes" === s && !a.isBassGuitar || "no" === s && a.isBassGuitar))
            continue;
        let o = r.filter.drumsPage;
        ("unset" === o || a && ("yes" !== o || a.isDrums) && ("no" !== o || !a.isDrums)) && (!r.filter.showAfterAction || e.event && r.filter.showAfterAction === e.event) && i.push(r)
    }
    if (i.length) {
        let l = i[Math.floor(Math.random() * i.length)];
        if (l.usertest) {
            var u;
            let c = 1e3 * ((null === (u = l.filter) || void 0 === u ? void 0 : u.delay) || 0),
                d = await ys(t.dispatch, l.usertest, c);
            if (!d)
                return
        }
        if (clearTimeout(yb), l.filter.delay) {
            yb = setTimeout(() => {
                _3(Q.SCREENER, {
                    ...y_,
                    forced: e.forced
                }) && t.dispatch("screener/set", l)
            }, 1e3 * l.filter.delay);
            return
        }
        _3(Q.SCREENER, {
            ...y_,
            forced: e.forced
        }) && t.dispatch("screener/set", l)
    }
}
function yw(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = t.get();
    i.screener.candidates.length && c3(() => y0(t, {
        event: e,
        forced: n
    }))
}
let yE = t => {
    t.on("screener/set", (t, e) => (e && yv(e), {
        screener: {
            ...t.screener,
            candidates: [],
            active: e
        }
    })),
        t.on("screener/loaded", (e, n) => (c3(() => y0(t, {})), {
            screener: {
                ...e.screener,
                candidates: n,
                active: void 0
            }
        })),
        t.on("screener/dismiss", t => {
            let {
                screener: e
            } = t;
            return _x(Q.SCREENER), {
                screener: {
                    ...e,
                    candidates: [],
                    active: void 0
                }
            }
        }),
        t.on("screener/accept", t => {
            let {
                screener: e
            } = t;
            return _x(Q.SCREENER), {
                screener: {
                    ...e,
                    candidates: [],
                    active: void 0
                }
            }
        });
    let e = (e, n) => {
        let {
            event: i
        } = n;
        e.screener.candidates.length && c3(() => y0(t, {
            event: i
        }))
    };
    t.on("curiosity/conversion", e),
        t.on("curiosity/event", e),
        t.on("curiosity/vpt10", e => {
            e.screener.candidates.length && c3(() => y0(t, {
                event: "Viewed player tab for 10 minutes"
            }))
        }),
        t.on("screener/pressedEditor", () => yw(t, "PressedEditor"))
};
async function yk(t) {
    let e = s5("/api/textpage/" + t),
        n = await fetch(e);
    return s6(n),
        n.json()
}
async function yS(t, e) {
    let n = t.get().textpage;
    if (n.slug !== e || n.isError)
        try {
            t.dispatch("textpage/load:processing", e);
            let i = await yk(e);
            i.slug === t.get().textpage.slug && t.dispatch("textpage/load:done", i)
        } catch (r) {
            e === t.get().textpage.slug && t.dispatch("textpage/load:error", r)
        }
}
let yx = t => {
    t.on("textpage/load:processing", (t, e) => ({
        textpage: {
            slug: e,
            title: "",
            content: "",
            isLoading: !0,
            isError: !1
        }
    })),
        t.on("textpage/load:done", (t, e) => ({
            textpage: {
                ...e,
                isLoading: !1,
                isError: !1
            }
        })),
        t.on("textpage/load:error", t => ({
            textpage: {
                ...t.textpage,
                title: "",
                content: "",
                isLoading: !1,
                isError: !0
            }
        }))
};
async function yT() {
    let t = s5("/api/faq/compact"),
        e = await fetch(t);
    s6(e);
    let n = await e.json();
    return n.filter(t => t.isSRW)
}
async function y3(t) {
    if (void 0 === t.get().faq.content)
        try {
            t.dispatch("faq/load:processing");
            let e = await yT();
            t.dispatch("faq/load:done", e)
        } catch (n) {
            t.dispatch("faq/load:error", n)
        }
}
let y1 = t => {
    t.on("faq/load:processing", () => ({
        faq: {
            content: void 0,
            isLoading: !0,
            isError: !1
        }
    })),
        t.on("faq/load:done", (t, e) => ({
            faq: {
                content: e,
                isLoading: !1,
                isError: !1
            }
        })),
        t.on("faq/load:error", () => ({
            faq: {
                content: void 0,
                isLoading: !1,
                isError: !0
            }
        }))
}, yL = ["chordpro1", "chordpro2", "chordpro3"];
async function yN(t, e, n) {
    let i = s5(`/api/chords/${t}${e ? ` / $ {
        e
    }
`: ""}`),
        r = await cT(() => i, "meta", n);
    return n.aborted || !r ? null : r
}
async function yI(t, e, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
        Accept: "text/plain"
    },
        s = `chordpro_${e}_${n || ""}`,
        a = await cE(s);
    if (a && a.data)
        return a.data;
    let o = `${t}/${e}/${n}.chordpro`,
        l = t => {
            let e = t % yL.length + 1;
            return e < yL.length ? `https://${yL[e]}.songsterr.com/${o}` : `https://www.songsterr.com/cdn/chordpro/${o}`
        },
        u = await cT(l, "chordpro", i, r);
    return !u || i.aborted ? null : (await ck(s, {
        data: u
    }), u)
}
function y2(t) {
    let e = t.get().chords;
    e.current && !e.isFailed && t.dispatch("chords/load:done", {
        songId: e.songId,
        chordsRevisionId: e.chordsRevisionId,
        current: e.current
    })
}
async function y8(t, e, n) {
    let i = new c2;
    try {
        let r = t.get().chords,
            s = r.loading;
        s && s.ac.abort();
        let a = r.songId !== e,
            o = r.chordsRevisionId !== n;
        if (!r.isFailed && r.current && !a && !o) {
            await t.dispatch("chords/load:done", {
                songId: e,
                chordsRevisionId: n,
                current: r.current
            });
            return
        }
        if (await t.dispatch("chords/load:processing", {
            songId: e,
            chordsRevisionId: n,
            songHasChanged: a,
            chordsRevisionHasChanged: o,
            ac: i
        }), i.signal.aborted)
            return;
        let l = t.get().chords.current;
        if ((!l || l.songId !== e || n && l.chordsRevisionId !== n) && (l = await yN(e, n, i.signal), i.signal.aborted || !l))
            return;
        await t.dispatch("chords/load:done", {
            songId: e,
            chordsRevisionId: n,
            current: l
        })
    } catch (u) {
        if (i.signal.aborted)
            return;
        t.dispatch("chords/load:error", {
            songId: e,
            chordsRevisionId: n,
            error: u
        })
    }
}
let yA = t => {
    t.on("chords/load:processing", (t, e) => {
        let {
            songId: n,
            chordsRevisionId: i,
            ac: r
        } = e;
        return {
            chords: {
                ...t.chords,
                loading: {
                    songId: n,
                    chordsRevisionId: i,
                    ac: r
                }
            }
        }
    }),
        t.on("chords/load:done", (t, e) => {
            let {
                songId: n,
                chordsRevisionId: i,
                current: r
            } = e;
            return {
                chords: {
                    ...t.chords,
                    current: r,
                    songId: n,
                    chordsRevisionId: i,
                    loading: null,
                    isFailed: !1,
                    isNetworkFailed: !1,
                    isNotFound: !1
                }
            }
        }),
        t.on("chords/load:error", (t, e) => {
            let {
                songId: n,
                chordsRevisionId: i,
                error: r
            } = e;
            return {
                chords: {
                    ...t.chords,
                    current: null,
                    songId: n,
                    chordsRevisionId: i,
                    isFailed: !0,
                    isNetworkFailed: r instanceof s7 && 0 === r.status,
                    isNotFound: r instanceof s7 && (404 === r.status || 400 === r.status),
                    loading: null
                }
            }
        }),
        t.on("route/change", (e, n) => {
            let {
                routeContent: i
            } = n;
            i && "chords" === i.page && y8(t, i.songId, i.chordsRevisionId)
        })
}, y7 = t => {
    t.on("chords/load:done", async (e, n) => {
        let {
            current: i
        } = n,
            r = i.songId,
            s = i.chordsRevisionId,
            a = new c2;
        try {
            let o = e.chordpro.loading;
            if (o) {
                if (r === o.songId && s === o.chordsRevisionId)
                    return;
                o.ac.abort()
            }
            if (!e.chordpro.isFailed && e.chordpro.current && r === e.chordpro.songId && s === e.chordpro.chordsRevisionId) {
                t.dispatch("chordpro/load:done", {
                    songId: r,
                    chordsRevisionId: s,
                    current: e.chordpro.current
                });
                return
            }
            await t.dispatch("chordpro/load:processing", {
                songId: r,
                chordsRevisionId: s,
                ac: a
            });
            let l = await yI(r, s, i.chordpro, a.signal);
            if (!l || a.signal.aborted)
                return;
            await t.dispatch("chordpro/load:raw", {
                songId: r,
                chordsRevisionId: s,
                chordpro: l,
                signal: a.signal
            })
        } catch (u) {
            if (console.log("chordpro error", a.signal.aborted), a.signal.aborted)
                return;
            await t.dispatch("chordpro/load:error", {
                songId: r,
                chordsRevisionId: s,
                error: u
            })
        }
    }),
        t.on("chordpro/load:processing", (t, e) => {
            let {
                songId: n,
                chordsRevisionId: i,
                ac: r
            } = e;
            return {
                chordpro: {
                    ...t.chordpro,
                    loading: {
                        songId: n,
                        chordsRevisionId: i,
                        ac: r
                    }
                }
            }
        }),
        t.on("chordpro/load:raw", async (e, n) => {
            let {
                songId: i,
                chordsRevisionId: r,
                chordpro: s
            } = n;
            try {
                let a = (await import("./split.38967464.js")).split,
                    o = a(s);
                t.dispatch("chordpro/load:done", {
                    songId: i,
                    chordsRevisionId: r,
                    current: o
                })
            } catch (l) {
                t.dispatch("chordpro/load:error", {
                    songId: i,
                    chordsRevisionId: r,
                    error: l
                })
            }
        }),
        t.on("chordpro/load:done", (t, e) => {
            let {
                songId: n,
                chordsRevisionId: i,
                current: r
            } = e;
            return {
                chordpro: {
                    ...t.chordpro,
                    current: r,
                    songId: n,
                    chordsRevisionId: i,
                    isFailed: !1,
                    isNetworkFailed: !1,
                    isNotFound: !1,
                    loading: null
                }
            }
        }),
        t.on("chordpro/load:error", (t, e) => {
            let {
                songId: n,
                chordsRevisionId: i,
                error: r
            } = e;
            return {
                chordpro: {
                    ...t.chordpro,
                    current: null,
                    songId: n,
                    chordsRevisionId: i,
                    isFailed: !0,
                    isNetworkFailed: r instanceof s7 && 0 === r.status,
                    isNotFound: r instanceof s7 && (404 === r.status || 400 === r.status),
                    loading: null
                }
            }
        }),
        t.on("chords/load:processing", (t, e) => ({
            chordpro: {
                ...t.chordpro,
                current: null
            }
        })),
        t.on("chordpro/load:error", (t, e) => {
            let {
                error: n
            } = e;
            "Sentry" in window && "function" == typeof window.Sentry.captureException && window.Sentry.captureException(n),
                console.error(n)
        })
}, yC = t => {
    t.on("cursor/failed", () => ({
        cursor: {
            isFailed: !0
        }
    })),
        t.on("cursor/failed", (t, e) => {
            let {
                error: n
            } = e;
            try {
                "Sentry" in window && "function" == typeof window.Sentry.captureException && window.Sentry.captureException(n)
            } catch (i) { }
            console.error(n)
        }),
        t.on("meta/load:processing", (t, e) => {
            let {
                songHasChanged: n
            } = e;
            if (n && t.cursor && t.cursor.isFailed)
                return {
                    cursor: {
                        isFailed: !1
                    }
                }
        }),
        t.on("part/load:done", t => {
            if (t.cursor && t.cursor.isFailed)
                return {
                    cursor: {
                        isFailed: !1
                    }
                }
        })
};
async function yP(t, e, n) {
    let i;
    i = "tags" === t.page ? `/api/next/tags${e.page ? ` ? page = $ {
        e.page
    }
`: ""}` : `/api/next/tags/${t.name}${e.page ? ` ? page = $ {
        e.page
    }
`: ""}`;
    let r = s5(i),
        s = await cT(() => r, "tags", n);
    return n.aborted || !s ? null : s
}
function y6(t, e) {
    return !!e && ("tag" === t.page && "tag" === e.page && t.name === e.name || "tags" === t.page && "tags" === e.page)
}
function yO(t, e) {
    return !t.page && !e.page || t.page === e.page
}
async function y9(t, e, n) {
    let i = new c2;
    try {
        let r = t.get().tags,
            s = r.loading;
        if (s && s.ac.abort(), y6(e, r.route) && yO(n, r.query)) {
            await t.dispatch("tags/load:done", {
                route: e,
                query: n,
                content: r.content
            });
            return
        }
        if (await t.dispatch("tags/load:processing", {
            route: e,
            query: n,
            ac: i
        }), i.signal.aborted)
            return;
        let a = await yP(e, n, i.signal);
        await t.dispatch("tags/load:done", {
            route: e,
            query: n,
            content: a
        })
    } catch (o) {
        if (i.signal.aborted)
            return;
        console.error(o),
            await t.dispatch("tags/load:error", {
                route: e,
                query: n,
                error: o
            })
    }
}
let y4 = t => {
    t.on("route/change", (e, n) => {
        let {
            routeContent: i,
            queryContent: r
        } = n;
        i && ("tag" === i.page || "tags" === i.page) && y9(t, i, r || {})
    }),
        t.on("tags/load:processing", (t, e) => {
            let {
                route: n,
                query: i,
                ac: r
            } = e;
            return {
                tags: {
                    ...t.tags,
                    loading: {
                        route: n,
                        query: i,
                        ac: r
                    }
                }
            }
        }),
        t.on("tags/load:done", (t, e) => {
            let {
                route: n,
                query: i,
                content: r
            } = e;
            return {
                tags: {
                    ...t.tags,
                    content: r,
                    route: n,
                    query: i,
                    loading: null,
                    isFailed: !1,
                    isNetworkFailed: !1,
                    isNotFound: !1
                }
            }
        }),
        t.on("tags/load:error", (t, e) => {
            let {
                route: n,
                query: i,
                error: r
            } = e;
            return {
                tags: {
                    ...t.tags,
                    current: null,
                    route: n,
                    query: i,
                    loading: null,
                    isFailed: !0,
                    isNetworkFailed: r instanceof s7 && 0 === r.status,
                    isNotFound: r instanceof s7 && (404 === r.status || 400 === r.status)
                }
            }
        }),
        t.on("tags/load:error", (t, e) => {
            let {
                error: n
            } = e;
            "Sentry" in window && "function" == typeof window.Sentry.captureException && window.Sentry.captureException(n),
                console.error(n)
        })
}, yR = t => {
    t.on("chords/load:processing", () => ({
        chordDiagram: []
    })),
        t.on("chordDiagram/clear", () => ({
            chordDiagram: []
        })),
        t.on("chordDiagram/open", (t, e) => {
            let n = t.chordDiagram.find(t => t.chord === e.chord);
            return n ? {
                chordDiagram: t.chordDiagram.filter(t => t !== n)
            }
                : {
                    chordDiagram: [...t.chordDiagram, e]
                }
        }),
        t.on("chordDiagram/close", (t, e) => ({
            chordDiagram: t.chordDiagram.filter(t => t !== e)
        }))
};
async function yD(t, e) {
    let n = s5("/api/event/");
    try {
        await sP(n, {
            event: t,
            payload: e
        })
    } catch (i) {
        console.error(i)
    }
}
let yM, yB;
void 0 !== document.hidden ? (yM = "hidden", yB = "visibilityState") : void 0 !== document.mozHidden ? (yM = "mozHidden", yB = "mozVisibilityState") : void 0 !== document.msHidden ? (yM = "msHidden", yB = "msVisibilityState") : void 0 !== document.webkitHidden && (yM = "webkitHidden", yB = "webkitVisibilityState");
let y5 = () => yM ? {
    "Web document is hidden": document[yM],
    "Web document visibility": document[yB]
}
    : {}, yF = t => t ? (t.isBassGuitar && " Bass" || t.isDrums && " Drum" || "") + " Tab" : " Tab";
function yH() {
    return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
}
function yW() {
    return yH() + yH() + "-" + yH() + "-" + yH() + "-" + yH() + "-" + yH() + yH() + yH()
}
let yV = "Print--plus", yU = "Print--free";
function yX(t) {
    let e = t.rules || t.cssRules;
    for (let n of e)
        if (n.style.content && n.style.content.length) {
            let i = yW(),
                r = n.style.content.substring(0, 62) + i + n.style.content.substring(62 + i.length);
            r.length === n.style.content.length ? n.style.content = r : console.error("Something wrong with tracker url length")
        }
}
function yG(t) {
    try {
        let e = document.styleSheets;
        for (let n = 0; n < e.length; n++) {
            let i = e[n];
            "print" === i.media.mediaText && "print-ga" === i.ownerNode.id && yX(i)
        }
    } catch (r) {
        console.error("PrintTracker: " + r)
    }
}
function yz(t) {
    return t.split("+").map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(" ")
}
let yj = /[【】《》]/;
function yq(t) {
    return !yj.test(t) && -1 === t.indexOf(".com")
}
let yY = "Songsterr", yK = "Songsterr Tabs with Rhythm", yJ = {
    favorites: "Favorites",
    plus: "Songsterr Plus",
    submit: "Submit Tab",
    about: "About",
    jobs: "Jobs",
    help: "Questions",
    signin: "Sign In",
    signup: "Sign Up",
    recoverpassword: "Recover Password",
    changepassword: "Change Password",
    forgotpassword: "Forgot your password?",
    account: "Account",
    cancelPlus: "Cancel Subscription",
    deactivate: "Deactivate account",
    updateCard: "Update card",
    subscribePlus: "Paying",
    coupon: "Activate coupon",
    howToReadTab: "How to Read a Tab",
    privacy: "Privacy Policy",
    terms: "Terms Of Service",
    dnsmpd: "Do Not Sell My Personal Information",
    "": "",
    tab: "",
    chords: "",
    search: "",
    artist: ""
};
function yQ(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Guitar";
    if (t) {
        if (t.instrument === tF)
            return "Drum";
        if (t.instrument === t5)
            return "Bass";
        if (t.instrument === tB)
            return "Guitar"
    }
    return e
}
function yZ(t, e) {
    if (!e || !t.current || !t.current.tracks)
        return !1;
    let n = null;
    return n9(e.instrumentId) ? n = n9 : nR(e.instrumentId) ? n = nR : n4(e.instrumentId) && (n = n4),
        !n || ig(e, t.current.tracks, n)
}
function vt(t) {
    let {
        meta: e
    } = t;
    if (!e.current)
        return [yK, "Free online tab player"];
    let n = mK(e),
        i = "";
    yZ(e, n) && (i = ` \u002d ${n.title.replace(/\u00a0/g, " ")}`);
    let r = yF(n),
        s = e.allowedByLicense ? "" : " (Temporary Removed by Music Publisher) ",
        a = `${e.current.title}${r} by ${e.current.artist}${i}`;
    return [`${a}${s} | ${yK}`, `${a} with free online tab player. One accurate version. Recommended by The Wall Street Journal`,]
}
function ve(t) {
    let {
        chords: e
    } = t;
    if (!e.current)
        return yK;
    let {
        title: n,
        artist: i
    } = e.current;
    return `${n} Chords by ${i} | ${yK}`
}
function vn(t) {
    let e = t.route;
    if ("artist" === e.page)
        return vd(t);
    if ("tab" === e.page)
        return vt(t)[0];
    if ("chords" === e.page)
        return ve(t);
    if ("search" === e.page)
        return vc(t);
    if ("tag" === e.page || "tags" === e.page)
        return vp(t);
    return vh(t)
}
function vi(t) {
    return "tab" === t.route.page && t.meta.current ? {
        page: t.route.page,
        Artist: t.meta.current.artist,
        Title: t.meta.current.title
    }
        : {
            page: t.route.page
        }
}
function vr(t) {
    document.title = vn(t),
        window.ga && window.ga("send", "pageview", {
            location: window.location.href,
            title: document.title
        }),
        yG(vi(t))
}
tA.map(t => {
    let [e, n] = t;
    return "string" == typeof e && "string" == typeof n.page ? {
        [n.page]: e
    }
        : {}
}).reduce((t, e) => Object.assign(t, e), {});
let vs = (t, e) => t.artist.artists[e] || "Unknown Artist", va = t => {
    if (t.length > 0)
        return yq(t) ? `Search results for: '${t}'` : "Search results"
}, vo = t => [yQ(t.songs && t.songs.filters, "Guitar"), "Tabs with Rhythm"].join(" "), vl = t => [vs(t, +t.route.artistId), yQ(t.artist && t.artist.filters, ""), "Tabs"].join(" "), vu = t => yJ[t.route.page] || "";
function vc(t) {
    return [t.songs && t.songs.pattern && va(t.songs.pattern), vo(t), "Songsterr",].filter(Boolean).join(" | ")
}
function vd(t) {
    return [t.artist && t.artist.pattern && va(t.artist.pattern), vl(t), yK,].filter(Boolean).join(" | ")
}
function vh(t) {
    return [vu(t), yK,].join(" | ")
}
function vp(t) {
    let {
        tags: {
            content: e,
            route: n,
            query: i,
            isFailed: r,
            isNotFound: s
        }
    } = t;
    if (!e || r || s)
        return `${s ? "Not Found" : "Something Went Wrong"} | ${yK}`;
    let a = i.page ? ` Page ${i.page}` : "",
        o = "Top " + ("tag" === n.page ? `${yz(n.name)} Tabs` : "Tags") + a;
    return o + ` | ${yK}`
}
let vf;
async function vg(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    if (!vf) {
        if ("bot" === t.device.type)
            return;
        void 0 === e && t.user.isLoggedIn && (e = t.user.profile.id.toString());
        let {
            getDeviceId: n,
            init: i,
            track: r,
            Identify: s,
            identify: a,
            setUserId: o
        } = await import("./index.7184fbef.js");
        await i(window.__AMPLITUDE_API_KEY__ || "", e, {
            serverUrl: "https://curiosity.songsterr.com/2/httpapi",
            minIdLength: 1,
            attribution: {
                disabled: !0
            }
        }).promise,
            vf = {
                getDeviceId: n,
                init: i,
                track: r,
                Identify: s,
                identify: a,
                setUserId: o
            }
    }
    return vf
}
let vm = {
    phone: "Phone",
    tablet: "Tablet",
    desktop: "Desktop",
    tv: "TV",
    car: "Car",
    bot: "Bot"
};
function v$() {
    return "unknown"
}
function v_() {
    return window.matchMedia($f).matches ? "smallPortrait" : "wideOrLandscape"
}
let vy = {
    "Used metronome": !1,
    "Used countin": !1,
    "Used solo": !1,
    "Used mute": !1,
    "Used playback": !1,
    "Used speed": !1,
    "Used loop": !1,
    "Used mixer": !1,
    "Used pitchshift": !1,
    "Used fullscreen": !1
}, vv = "curiosity_sent_events", vb = t => -1 !== $W.indexOf(t) ? `Experiment: ${t}` : `Experiment: SRW ${t}`, v0 = t => {
    {
        let e = {};
        function n(t) {
            e = sG(vv) || e;
            let n = !e[t];
            return n && (e[t] = !0, sz(vv, e)),
                n
        }
        async function i(t, e) {
            let {
                setUserId: n
            } = await vg(t, e.id.toString());
            n(e.id.toString())
        }
        async function r(t) {
            let {
                setUserId: e
            } = await vg(t, null);
            e(null)
        }
        async function s(t, e) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            try {
                let s = t.user.isLoggedIn ? t.user.profile.plan : q.FREE,
                    a = t.user.isLoggedIn,
                    o = {
                        Plan: s,
                        "Signed in": a,
                        Env: V,
                        Url: window.location.href,
                        Referer: t.curiosity.referer.last,
                        Browser: t.browser.family,
                        "Browser version": t.browser.version,
                        System: t.device.os.name,
                        "System version": t.device.os.version,
                        "Device type (correct)": vm[t.device.type] || t.device.type,
                        ...i
                    },
                    l = n(e);
                if (r && !l)
                    return;
                !r && l && (o["First time"] = !0);
                let {
                    Identify: u,
                    track: c
                } = await vg(t),
                    d = new u;
                d.set("Plan", s),
                    d.set("Browser", t.browser.family),
                    d.set("Browser version", t.browser.version),
                    d.set("System version", t.device.os.version),
                    d.set("Signed in", a);
                let h = $j("exp");
                if (h && h.active)
                    for (let p of Object.keys(h.active))
                        d.set(vb(p), h.active[p]);
                for (let f of $H)
                    d.unset(vb(f));
                d.unset("Referer"),
                    t.curiosity.referer.last && d.set("Last referer", t.curiosity.referer.last),
                    t.curiosity.referer.original && d.set("Original referer", t.curiosity.referer.original);
                let g = {
                    version_name: "b4921fc9",
                    event_type: e,
                    user_properties: d.getUserProperties(),
                    event_properties: o
                };
                await c(g).promise,
                    "prod" !== window.__STAGE__ && console.log(`AD: ${e}`, o, d)
            } catch (m) {
                console.error(m),
                    window.Sentry.captureException(m)
            }
        }
        t.on("curiosity/conversion", (e, n) => {
            s(e, n.event, {
                ...n,
                ...e.curiosity.conversion,
                event: void 0
            }),
                t.dispatch("curiosity/google", {
                    category: "Conversion",
                    action: n.event
                })
        }),
            t.on("curiosity/event", (t, e) => {
                s(t, e.event, {
                    ...e,
                    event: void 0
                })
            }),
            t.on("curiosity/visitedPage", () => { }),
            t.on("curiosity/enteredExperiment", (t, e) => {
                let {
                    experiment: n,
                    payload: i
                } = e;
                yg(n) || s(t, `Entered experiment: SRW ${n}`, i)
            }),
            t.on("curiosity/google", (t, e) => {
                try {
                    window.ga && window.ga("send", "event", {
                        eventCategory: e.category,
                        eventAction: e.action,
                        eventLabel: e.label,
                        eventValue: e.value
                    }),
                        "prod" !== window.__STAGE__ && console.log(`GA: ${e.category}`, e)
                } catch (n) {
                    console.error(n),
                        window.Sentry.captureException(n)
                }
            }),
            t.on("curiosity/error", (e, n) => {
                let {
                    error: i,
                    message: r
                } = n;
                t.dispatch("curiosity/event", {
                    event: "Error",
                    Error: i,
                    Message: r
                }),
                    t.dispatch("curiosity/google", {
                        category: "Error",
                        action: i,
                        label: r
                    })
            }),
            t.on("curiosity/fraud", async t => {
                let {
                    Identify: e,
                    identify: n
                } = await vg(t),
                    i = new e;
                await n(i).promise
            }),
            t.on("curiosity/setConversionProps", (t, e) => ({
                curiosity: {
                    ...t.curiosity,
                    conversion: {
                        ...t.curiosity.conversion,
                        ...e
                    }
                }
            }));
        let a,
            o;
        t.on("curiosity/countdown:start", () => {
            clearTimeout(a),
                sZ.reset(),
                a = setTimeout(() => t.dispatch("curiosity/vpt10"), 6e5)
        }),
            t.on("curiosity/countdown:clear", () => {
                clearTimeout(a)
            }),
            t.on("curiosity/vcp5:start", () => {
                clearTimeout(o),
                    sZ.reset(),
                    o = setTimeout(() => t.dispatch("curiosity/vc5"), 3e5)
            }),
            t.on("curiosity/vcp5:clear", () => {
                clearTimeout(o)
            }),
            t.on("meta/load:processing", () => {
                clearTimeout(a),
                    clearTimeout(o)
            }),
            t.on("curiosity/vc5", () => {
                t.dispatch("curiosity/google", {
                    category: "Player",
                    action: "Viewed chords for 5 minutes"
                })
            }),
            t.on("curiosity/vpt10", e => {
                let n = sZ.getTimeSinceLastActivity();
                if (n >= 5)
                    return;
                let i = e.meta,
                    r = mK(i),
                    s = "Viewed player tab for 10 minutes";
                if (i.current && e.part.current) {
                    let a = i.current,
                        o = e.part.current;
                    yD(s, {
                        songId: i.songId,
                        revisionId: a.revisionId,
                        artistId: a.artistId,
                        partId: i.partId,
                        instrumentId: r && r.instrumentId
                    });
                    let l = iL(e.player.version),
                        u = l.versionLegacy || `audioV${l.version}`,
                        c;
                    for (let d of e.setlists.setlists)
                        if (-1 !== d.songs.findIndex(t => t.songId === i.songId)) {
                            c = d.name;
                            break
                        }
                    t.dispatch("curiosity/event", {
                        event: s,
                        ...e.curiosity.VPT10Props,
                        ...y5(),
                        Orientation: v$(),
                        Mode: v_(),
                        Fullscreen: e.screen.fullscreen,
                        Instrument: o.instrument,
                        Difficulty: r && r.difficulty,
                        "Minutes Since Last Activity": n,
                        Artist: a.artist,
                        Title: a.title,
                        "Song id": i.songId.toString(),
                        "Track id": r && r.partId.toString(),
                        "Track title": r && r.name,
                        "Has chords": o.withChords,
                        "Has chords link": a.hasChords || !1,
                        "Has sound v4": iI.has(a, z.V4),
                        "Sound version": u,
                        Tags: i.current.tags,
                        "Playlist Name": c
                    }),
                        t.dispatch("curiosity/google", {
                            category: "Player",
                            action: s
                        })
                }
            });
        let l = {};
        function u() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return t => {
                let n = {
                    ...t.curiosity.VPT10Props
                };
                return e.forEach(t => {
                    n[t] = !0
                }), {
                    curiosity: {
                        ...t.curiosity,
                        VPT10Props: n
                    }
                }
            }
        }
        t.on("curiosity/trigerHJ", (t, e) => {
            l[e] || t.screener.active || (console && console.info("hotjar event", e), window && "function" == typeof window.hj && (window.hj("trigger", e), l[e] = !0))
        }),
            t.on("user/signIn", (e, n) => {
                i(e, n),
                    t.dispatch("curiosity/conversion", {
                        event: "Signed in",
                        "Auth method": "Email"
                    })
            }),
            t.on("user/googleSignIn", (e, n) => {
                let {
                    profile: r,
                    isCreated: s
                } = n;
                i(e, r),
                    t.dispatch("curiosity/conversion", {
                        event: s ? "Signed up" : "Signed in",
                        "Auth method": "Google"
                    })
            }),
            t.on("user/signUp", (e, n) => {
                i(e, n),
                    t.dispatch("curiosity/conversion", {
                        event: "Signed up",
                        "Auth method": "Email"
                    })
            }),
            t.on("user/profile", (t, e) => {
                i(t, e)
            }),
            t.on("user/subscribePlus", (e, n) => {
                "subscribe" === n.mode ? t.dispatch("curiosity/conversion", {
                    event: "Subscribed",
                    "Payment type": n.paymentType
                }) : "update" === n.mode && t.dispatch("curiosity/conversion", {
                    event: "Updated subscription",
                    "Payment type": n.paymentType
                }),
                    t.dispatch("curiosity/google", {
                        category: "Subscription",
                        action: "subscribe" === n.mode ? "Subscribed" : "Updated subscription"
                    }),
                    i(e, $3(e, n))
            }),
            t.on("user/signOut", e => {
                t.dispatch("curiosity/event", {
                    event: "Signed out"
                }),
                    r(e)
            }),
            t.on("user/recoverPassword", (t, e) => {
                i(t, e)
            }),
            t.on("user/cancelPlus", (e, n) => {
                i(e, n),
                    t.dispatch("curiosity/conversion", {
                        event: "Canceled subscription"
                    })
            }),
            t.on("user/deactivate", e => {
                t.dispatch("curiosity/conversion", {
                    event: "Deactivated account"
                }),
                    r(e)
            }),
            t.on("editor/delete:done", (e, n) => t.dispatch("curiosity/event", {
                event: "Deleted song",
                Artist: n.artist,
                Title: n.title,
                "Song id": n.songId && n.songId.toString()
            })),
            t.on("editor/delete:error", (e, n) => t.dispatch("curiosity/error", {
                error: "Deleted song",
                message: n.message
            })),
            t.on("favorites/add", async (e, n) => {
                let {
                    songId: i,
                    song: r
                } = n;
                return t.dispatch("curiosity/event", {
                    event: "Added favorite",
                    Title: r.title,
                    Artist: r.artist,
                    "Song id": i.toString()
                })
            }),
            t.on("favorites/delete:processing", async (e, n) => {
                let {
                    songId: i,
                    song: r
                } = n;
                return t.dispatch("curiosity/event", {
                    event: "Removed favorite",
                    Title: r.title,
                    Artist: r.artist,
                    "Song id": i.toString()
                })
            }),
            t.on("upload/song:uploaded", (e, n) => {
                let {
                    songSubmitted: i,
                    song: r
                } = n;
                i && t.dispatch("curiosity/event", {
                    event: "Submitted tab",
                    Artist: r.artist,
                    Title: r.title
                })
            }),
            t.on("upload/song:error", (e, n) => {
                let {
                    error: i
                } = n;
                t.dispatch("curiosity/error", {
                    error: "Submitted tab",
                    message: i.message
                })
            }),
            t.on("upload/revision:uploaded", (e, n) => {
                let {
                    revisionSubmitted: i,
                    revision: r
                } = n;
                i && t.dispatch("curiosity/event", {
                    event: "Submitted revision",
                    Artist: r.artist,
                    Title: r.title
                })
            }),
            t.on("upload/revision:error", (e, n) => {
                let {
                    error: i
                } = n;
                t.dispatch("curiosity/error", {
                    error: "Submitted revision",
                    message: i.message
                })
            }),
            t.on("meta/load:processing", (t, e) => {
                let {
                    songHasChanged: n
                } = e;
                if (n) {
                    let i = {
                        ...vy
                    };
                    return i["Used countin"] = t.player.isCountin,
                        i["Used metronome"] = t.player.isMetronome, {
                        curiosity: {
                            ...t.curiosity,
                            VPT10Props: i
                        }
                    }
                }
            }),
            t.on("player/changeSpeed", (t, e) => {
                let {
                    speed: n
                } = e;
                return n <= 75 ? u("Used speed", "Slowed under 75%")(t) : u("Used speed")(t)
            }),
            t.on("player/togglePlay", t => {
                let {
                    isMetronome: e,
                    metronomeType: n,
                    canPlay: i
                } = t.player;
                return e && "voice" === n && i ? u("Used playback", "Played with Voice Metronome")(t) : u("Used playback")(t)
            }),
            t.on("player/toggleLoop", u("Used loop")),
            t.on("player/changePitch", u("Used pitchshift")),
            t.on("player/changeLoop", u("Used loop")),
            t.on("player/toggleCountIn", u("Used countin")),
            t.on("player/toggleMetronome", t => {
                let {
                    isMetronome: e,
                    metronomeType: n,
                    canPlay: i,
                    shouldPlay: r
                } = t.player;
                return e && "voice" === n && i && r ? u("Used metronome", "Played with Voice Metronome")(t) : u("Used metronome")(t)
            }),
            t.on("player/changeMetronome:init", (t, e) => {
                let {
                    isMetronome: n,
                    canPlay: i,
                    shouldPlay: r
                } = t.player;
                if (n && "voice" === e && i && r)
                    return u("Played with Voice Metronome")(t)
            }),
            t.on("player/changeType", (t, e) => {
                let {
                    type: n
                } = e;
                return "solo" === n ? u("Used solo")(t) : "mute" === n ? u("Used mute")(t) : void 0
            }),
            t.on("screen/toggleFullscreen", (t, e) => {
                let {
                    enabled: n
                } = e;
                return n && u("Used Fullscreen")(t)
            }),
            t.on("screener/set", (e, n) => {
                n && (n.disableEvents || t.dispatch("curiosity/event", {
                    event: "Screener shown",
                    Header: n.title,
                    Name: n.name
                }))
            }),
            t.on("route/change", (e, n) => {
                let {
                    route: i
                } = n;
                "tab" !== i.page && "chords" !== i.page && "search" !== i.page && "artist" !== i.page && vr(e),
                    t.dispatch("curiosity/countdown:clear"),
                    t.dispatch("curiosity/vcp5:clear")
            }),
            t.on("meta/load:done", e => {
                "tab" === e.route.page && (vr(e), t.dispatch("curiosity/countdown:start"))
            }),
            t.on("chords/load:done", e => {
                "chords" === e.route.page && (vr(e), t.dispatch("curiosity/vcp5:start"))
            }),
            t.on("screener/accept", (e, n) => {
                let {
                    screener: i,
                    value: r
                } = n;
                i && (i.name.endsWith("NPS") ? t.dispatch("curiosity/event", {
                    event: `NPS ${i.name.replace("NPS", "")}`,
                    Value: r
                }) : t.dispatch("curiosity/event", {
                    event: `Screener clicked: ${i.name}`
                }))
            })
    }
};
async function vw(t, e, n) {
    let i = s5(`/api/tab-editor?songId=${t}&part=${e}&revision=${n}`),
        r = await fetch(i);
    s6(r);
    let s = await r.json();
    if (!s.data)
        return;
    let a = JSON.parse(s.data),
        o = Array(a.measuresCount);
    return a.packedData.forEach(t => {
        let e = t.index;
        delete t.index,
            o[e] = t
    }), {
        songId: s.songId,
        part: s.part,
        revision: s.revision,
        data: o
    }
}
async function vE(t, e, n, i) {
    let r = s5("/api/tab-editor"),
        s = {
            songId: t,
            part: e,
            revision: n
        },
        a = [];
    i.forEach((t, e) => {
        t && a.push({
            ...t,
            index: e
        })
    }),
        0 !== a.length && (s.data = JSON.stringify({
            measuresCount: i.length,
            packedData: a
        }));
    let o = await sP(r, s);
    return s6(o),
        o.json()
}
async function vk(t) {
    let e = s5(`/api/tab-editor/${t}`),
        n = await fetch(e);
    s6(n);
    let i = await n.json();
    if (!i.data)
        return;
    let r = JSON.parse(i.data),
        s = Array(r.measuresCount);
    return r.packedData.forEach(t => {
        let e = t.index;
        delete t.index,
            s[e] = t
    }), {
        songId: i.songId,
        part: i.part,
        revision: i.revision,
        data: s
    }
}
async function vS(t, e) {
    let n = s5(`/api/tab-editor/admin-data?offset=${t}&limit=${e}`),
        i = await fetch(n);
    return s6(i),
        i.json()
}
let vx = [2182125, 1888170, 2255715], vT = "hasSeenEditor", v3 = () => sG(vT) || !1, v1 = () => sz(vT, !0);
function vL(t) {
    return t.returnValue = "o/",
        "o/"
}
let vN, vI, v2 = 12, v8 = function (t, e, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        r = t,
        s = i,
        a = r.layout,
        o = ot(a.measureLayout.lineLayout),
        l = a.measureLayout.measure.index,
        u = a.absoluteX * n,
        c = "",
        d = r.notes.find(t => t.string === e && !t.bogus);
    if (d)
        c = d.dead ? "X" : d.fret;
    else {
        let h = a.beats.filter(t => 0 !== t.notes.length && t.voice !== i);
        for (let p of h) {
            let f = p.notes.find(t => t.string === e && !t.bogus);
            f && (c = f.fret, r = p, s = p.voice)
        }
    }
    return {
        formX: u,
        formY: (o + 12 * (e - 1)) * n,
        fret: c,
        measureNum: l,
        beatNum: r.index,
        beat: r,
        voice: s
    }
}, vA = (t, e, n, i, r) => {
    if (t) {
        let s = t[e];
        if (s && s.beats) {
            let a = s.beats.find(t => t.beatNum === n && t.voice === r);
            if (a && a.editedNotes) {
                let o = a.editedNotes.find(t => t.string === i);
                if (o)
                    return o.fret
            }
        }
    }
}, v7 = t => {
    t.on("@init", () => ({
        tabEditor: {
            positioned: !1,
            beat: void 0,
            formX: 0,
            formY: 0,
            measureNum: 0,
            beatNum: 0,
            stringNum: 0,
            voice: 0,
            fret: "",
            originalFret: "",
            data: void 0,
            status: "unset",
            adminData: [],
            adminPanelOpened: !1
        }
    })),
        t.on("layer/show", (t, e) => {
            let {
                tabEditor: n
            } = t;
            if ("tab_editor" === e)
                return {
                    tabEditor: {
                        ...n,
                        positioned: !1,
                        beat: void 0,
                        formX: 0,
                        formY: 0,
                        fret: "",
                        originalFret: "",
                        measureNum: 0,
                        beatNum: 0,
                        stringNum: 0,
                        voice: 0
                    }
                }
        }),
        t.on("tabEditor/setForm", (e, n) => {
            let {
                beatsLayout: i,
                touch: r,
                scale: s
            } = n,
                a = ot(i.measureLayout.lineLayout),
                o = i.measureLayout.lineLayout.line.strings,
                l = r.y - a;
            if (l < -10 || l > 73)
                return;
            let u = Math.floor(l / 12),
                c = l - 12 * u <= 6 ? u : u + 1;
            c < 0 ? c = 0 : c >= o && (c = o - 1);
            let d,
                h;
            for (let p of i.beats)
                if (!p.rest && 0 !== p.notes.length) {
                    for (let f of p.notes)
                        if (f.string === c && !f.bogus) {
                            d = p.voice,
                                h = p;
                            break
                        }
                    if (void 0 !== d)
                        break
                }
            if (void 0 === d) {
                if (!(h = i.beats.find(t => !t.rest && 0 !== t.notes.length)))
                    return;
                d = h.voice
            }
            let {
                formX: g,
                formY: m,
                fret: $,
                beatNum: _,
                measureNum: y,
                ...v
            } = v8(h, c, s, d),
                b = vA(e.tabEditor.data, y, _, c, v.voice), {
                    device: w
                } = e,
                E = so(w) || ss(w.os) || sa(w.os);
            return E || t.dispatch("player/moveCursor", {
                cursor: oo(v.beat.layout),
                loopStart: e.player.position.loopStart,
                loopEnd: e.player.position.loopEnd
            }), {
                tabEditor: {
                    ...e.tabEditor,
                    positioned: !0,
                    formX: g,
                    formY: m,
                    fret: void 0 !== b ? `${b}` : `${$}`,
                    originalFret: `${$}`,
                    beat: h,
                    beatNum: _,
                    stringNum: c,
                    measureNum: y,
                    voice: d
                }
            }
        }),
        t.on("tabEditor/formMove", (e, n) => {
            let {
                tabEditor: i,
                player: r,
                device: s
            } = e, {
                scale: a,
                direction: o
            } = n, {
                stringNum: l,
                beat: u,
                positioned: c
            } = i;
            if (!c)
                return;
            let d = u,
                h = l,
                p = d.layout.measureLayout.lineLayout.line.strings;
            if ("up" === o)
                (h = l - 1) < 0 && (h = p - 1);
            else if ("down" === o)
                (h = l + 1) >= p && (h = 0);
            else if ("right" === o || "left" === o) {
                let f = "right" === o ? "nextBeat" : "prevBeat";
                do {
                    let g = d;
                    if (!(d = g[f])) {
                        let m = g.layout.beats.find(t => t[f] && !t.lyrics);
                        if (!m)
                            return
                    }
                    let $ = d.layout.measureLayout.measure.index;
                    for (let _ of g.layout.beats) {
                        if (!_[f] || _.lyrics || 0 === _.notes.length)
                            continue;
                        let y = _[f],
                            v = y.layout.measureLayout.measure.index;
                        if ("right" === o && v < $ || "left" === o && v > $)
                            $ = v, d = y;
                        else if (v === $) {
                            let b = d.duration[0] / d.duration[1],
                                w = _.duration[0] / _.duration[1];
                            w < b && ($ = v, d = y)
                        }
                    }
                    if (d.rest) {
                        let E = d.layout.beats.find(t => !t.rest && !t.lyrics && 0 !== t.notes.length);
                        E && (d = E)
                    }
                } while (!0 === d.rest)
            }
            let {
                formX: k,
                formY: S,
                fret: x,
                beatNum: T,
                measureNum: L,
                ...N
            } = v8(d, h, a, d.voice),
                I = vA(i.data, L, T, h, N.voice),
                A = so(s) || ss(s.os) || sa(s.os);
            return A || t.dispatch("player/moveCursor", {
                cursor: oo(N.beat.layout),
                loopStart: r.position.loopStart,
                loopEnd: r.position.loopEnd
            }), {
                tabEditor: {
                    ...i,
                    positioned: !0,
                    formX: k,
                    formY: S,
                    fret: void 0 !== I ? `${I}` : `${x}`,
                    originalFret: `${x}`,
                    beat: N.beat,
                    voice: N.voice,
                    beatNum: T,
                    stringNum: h,
                    measureNum: L
                }
            }
        }),
        t.on("screen/resize", t => {
            let {
                tabEditor: e
            } = t;
            if (e.positioned)
                return {
                    tabEditor: {
                        ...e,
                        positioned: !1,
                        beat: void 0,
                        formX: 0,
                        formY: 0,
                        measureNum: 0,
                        beatNum: 0,
                        stringNum: 0,
                        fret: "",
                        originalFret: ""
                    }
                }
        }),
        t.on("tabEditor/changeNote", (e, n) => {
            let {
                tabEditor: i,
                part: r,
                user: s
            } = e, {
                measureNum: a,
                fret: o,
                originalFret: l,
                stringNum: u,
                beatNum: c,
                voice: d,
                positioned: h
            } = i;
            if (!h || n === o)
                return;
            let p;
            if (i.data)
                p = [...i.data];
            else {
                let f = r.current.measures.length;
                p = Array(f)
            }
            let g = p[a];
            if (g && g.beats) {
                g = {
                    beats: [...g.beats]
                };
                let m = g.beats.findIndex(t => t.beatNum === c && t.voice === d);
                if (-1 === m)
                    g.beats.push({
                        beatNum: c,
                        voice: d,
                        editedNotes: [{
                            string: u,
                            fret: n,
                            originalFret: l
                        }
                        ]
                    });
                else {
                    let $ = g.beats[m];
                    $.editedNotes = [...$.editedNotes];
                    let _ = $.editedNotes.findIndex(t => t.string === u);
                    -1 !== _ && ($.editedNotes = $.editedNotes.slice(0, _).concat($.editedNotes.slice(_ + 1))),
                        "" === l && "" === n || l === n || $.editedNotes.push({
                            string: u,
                            fret: n,
                            originalFret: l
                        }),
                        0 === $.editedNotes.length && (g.beats = g.beats.slice(0, m).concat(g.beats.slice(m + 1))),
                        0 === g.beats.length && (g = void 0)
                }
                p[a] = g
            } else
                g = {
                    beats: [{
                        beatNum: c,
                        voice: d,
                        editedNotes: [{
                            string: u,
                            fret: n,
                            originalFret: l
                        }
                        ]
                    }
                    ]
                },
                    p[a] = g;
            return window.addEventListener("beforeunload", vL),
                clearTimeout(vN),
                vN = setTimeout(() => yw(t, "TriedEditor"), 2e4),
                s.isLoggedIn && (clearTimeout(vI), vI = setTimeout(() => t.dispatch("tabEditor/save"), 3e3)), {
                tabEditor: {
                    ...i,
                    data: p,
                    fret: n,
                    status: "changes"
                }
            }
        });
    let e = e => {
        let {
            tabEditor: n
        } = e;
        "changes" === n.status && t.dispatch("tabEditor/save")
    };
    t.on("user/signIn", e),
        t.on("user/googleSignIn", e),
        t.on("user/signUp", e),
        t.on("tabEditor/save", async e => {
            let {
                meta: n,
                part: i,
                tabEditor: r,
                user: s
            } = e;
            try {
                "changes" === r.status && s.isLoggedIn && (t.dispatch("tabEditor/save:changeStatus", "saving"), await vE(n.songId, i.partId, i.revisionId, r.data), .1 > Math.random() && t.dispatch("curiosity/event", {
                    event: "Autosaved tab edit 10% sampling"
                }), setTimeout(() => t.dispatch("tabEditor/save:changeStatus", "saved"), 1e3))
            } catch (a) {
                console.log(a)
            }
        }),
        t.on("tabEditor/save:changeStatus", (t, e) => {
            if (!("saved" === e && "changes" === t.tabEditor.status))
                return "saved" === e && window.removeEventListener("beforeunload", vL), {
                    tabEditor: {
                        ...t.tabEditor,
                        status: e
                    }
                }
        }),
        t.on("part/load:raw", () => {
            t.dispatch("tabEditor/load")
        }),
        t.on("tabEditor/load", async e => {
            let {
                user: n,
                part: i,
                query: r
            } = e;
            try {
                if (t.dispatch("tabEditor/load:flush"), n.isLoggedIn) {
                    var s;
                    let {
                        songId: a,
                        partId: o,
                        revisionId: l
                    } = i,
                        u;
                    (u = void 0 !== r.tabedit && (n.isAdmin || vx.includes(null === (s = n.profile) || void 0 === s ? void 0 : s.id)) ? await vk(+r.tabedit) : await vw(a, o, l)) && t.dispatch("tabEditor/load:done", {
                        songId: u.songId,
                        part: u.part,
                        data: u.data
                    })
                }
            } catch (c) {
                console.log(c)
            }
        }),
        t.on("tabEditor/load:flush", t => {
            let {
                tabEditor: e
            } = t;
            return window.removeEventListener("beforeunload", vL), {
                tabEditor: {
                    ...e,
                    positioned: !1,
                    beat: void 0,
                    formX: 0,
                    formY: 0,
                    measureNum: 0,
                    beatNum: 0,
                    stringNum: 0,
                    voice: 0,
                    fret: "",
                    originalFret: "",
                    data: void 0,
                    status: "unset"
                }
            }
        }),
        t.on("tabEditor/load:done", (t, e) => {
            let {
                songId: n,
                part: i,
                data: r
            } = e;
            if (n !== t.part.songId || i !== t.part.partId) {
                console.log("Loaded tab editor data lost its relevance");
                return
            }
            return {
                tabEditor: {
                    ...t.tabEditor,
                    data: r
                }
            }
        }),
        t.on("tabEditor/toggleAdminPanel", t => {
            var e;
            let {
                tabEditor: n,
                user: i
            } = t;
            if (i.isAdmin || vx.includes(null === (e = i.profile) || void 0 === e ? void 0 : e.id))
                return {
                    tabEditor: {
                        ...n,
                        adminPanelOpened: !n.adminPanelOpened,
                        adminData: []
                    }
                }
        }),
        t.on("tabEditor/loadAdminData", async (e, n) => {
            let {
                user: i
            } = e, {
                offset: r,
                limit: s
            } = n;
            try {
                var a;
                if (i.isAdmin || vx.includes(null === (a = i.profile) || void 0 === a ? void 0 : a.id)) {
                    let o = await vS(r, s);
                    t.dispatch("tabEditor/loadAdminData:done", o)
                }
            } catch (l) {
                console.log(l)
            }
        }),
        t.on("tabEditor/loadAdminData:done", (t, e) => ({
            tabEditor: {
                ...t.tabEditor,
                adminData: e
            }
        })),
        t.on("tabEditor/loadById", (e, n) => {
            var i;
            let r = e.tabEditor.adminData.find(t => t.id === n);
            if ((e.user.isAdmin || vx.includes(null === (i = e.user.profile) || void 0 === i ? void 0 : i.id)) && r) {
                let {
                    songId: s,
                    partId: a,
                    revisionId: o
                } = e.part,
                    l = i$({
                        songId: r.songId,
                        artist: "",
                        title: ""
                    }, r.part, r.revision);
                t.dispatch("navigate", `${l}?tabedit=${n}`),
                    r.songId === s && r.part === a && r.revision === o && c3(() => t.dispatch("tabEditor/load"))
            }
        })
};
var vC = t => new $h([$p, tR, c$, cX, as, $S, $1, $I, $2, $7, sl, $K, _t, _p, g3, $5, _g, _b, _0, _R, _H, _U, aw, _d, yE, yx, y1, yh, yA, y7, v7, yC, yR, y4, v0], t);
let vP = Array.from("1234567890qwertyuiopasdfghjklzxcvbnm"), v6 = Array.from("1234567890"), vO = ["Numpad1", "Numpad2", "Numpad3", "Numpad4", "Numpad5", "Numpad6", "Numpad7", "Numpad8", "Numpad9", "Numpad0"], v9 = {
    backspace: 8,
    delete: 46,
    tab: 9,
    enter: 13,
    esc: 27,
    space: 32,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    Numpad0: 96,
    Numpad1: 97,
    Numpad2: 98,
    Numpad3: 99,
    Numpad4: 100,
    Numpad5: 101,
    Numpad6: 102,
    Numpad7: 103,
    Numpad8: 104,
    Numpad9: 105,
    "+": 187,
    "-": 189
};
function v4(t) {
    let e = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
    return e || "cmd" !== t ? e && "ctrl" === t ? "cmd" : t : "ctrl"
}
function vR() {
    let t = document.activeElement;
    return !!(t && ["input", "select", "button", "textarea"].includes(t.tagName.toLowerCase())) && (t.blur && t.blur(), !0)
}
class vD {
    constructor(t) {
        this.store = t,
            this.handlers = {},
            this.meta = {},
            this.bindSources = {},
            window.addEventListener("keydown", this.keyboardHandler.bind(this), !1),
            window.addEventListener("keyup", this.preventHandler.bind(this), !1)
    }
    preventHandler(t) {
        t.target instanceof HTMLButtonElement && 32 === t.keyCode && !this.store.get().route.isPanel && (t.preventDefault(), t.stopPropagation())
    }
    keyboardHandler(t) {
        if (this.store.get().consent.view)
            return;
        if (t.altKey || t.shiftKey || t.metaKey || t.ctrlKey) {
            this.metaHandler(t);
            return
        }
        if (!this.handlers[t.keyCode] || t.repeat || (t.target instanceof HTMLInputElement || t.target instanceof HTMLTextAreaElement) && !t.target.hasAttribute("data-hotkey"))
            return;
        let e = this.handlers[t.keyCode],
            n = "function" == typeof e.global && e.global;
        if (e.global) {
            n(t);
            return
        }
        let i = this.store.get().route.isPanel;
        if (e.parallel) {
            let r = "function" == typeof e.parallel && e.parallel;
            i && vR() || r(t)
        }
        if (i) {
            let s = "function" == typeof e.onPanelPopup && e.onPanelPopup,
                a = "function" == typeof e.onPanel && e.onPanel;
            e.onPanelPopup ? s(t) : e.onPanel && a(t)
        } else {
            let o = "function" == typeof e.onPopup && e.onPopup,
                l = "function" == typeof e.onTab && e.onTab;
            e.onPopup ? o(t) : e.onTab && l(t)
        }
    }
    metaHandler(t) {
        if (16 === t.keyCode || 17 === t.keyCode || 18 === t.keyCode || 91 === t.keyCode || !this.meta[t.keyCode])
            return;
        let e = this.meta[t.keyCode],
            n;
        if (t.altKey ? n = e.alt : t.ctrlKey ? n = e.ctrl : t.metaKey ? n = e.cmd : t.shiftKey && (n = e.shift), n) {
            if (t.repeat) {
                n.repeat && n.repeat(t);
                return
            }
            let {
                route: {
                    isPanel: i
                },
                layer: {
                    layer: r
                }
            } = this.store.get();
            n.onTab ? i || null !== r || n.onTab(t) : n.global && n.global(t)
        }
    }
    bindMeta(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "global",
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "App",
            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            [s, a] = t.split("+");
        if (!("shift" === s || "ctrl" === s || "alt" === s || "cmd" === s)) {
            console.error("Please check your meta handler");
            return
        }
        this.bindSources[`${a}-${s}-${n}`] = i,
            this.meta[v9[a]] = this.meta[v9[a]] || {},
            this.meta[v9[a]][v4(s)] = this.meta[v9[a]][v4(s)] || {},
            this.meta[v9[a]][v4(s)][n] = e,
            r && (this.meta[v9[a]][v4(s)].repeat = sK(e, 400))
    }
    unbindMeta(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "global",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App",
            [i, r] = t.split("+");
        if (!("shift" === i || "ctrl" === i || "alt" === i || "cmd" === i)) {
            console.error("Please check your meta handler");
            return
        }
        let s = this.bindSources[`${r}-${i}-${e}`] === n;
        this.meta[v9[r]] && s && delete this.meta[v9[r]][v4(i)][e]
    }
    bindOne(t, e, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "App";
        this.bindSources[`${t}-${Object.keys(n)[0]}`] = i,
            this.handlers[v9[t]] = this.handlers[v9[t]] || {},
            this.handlers[v9[t]][Object.keys(n)[0]] = e
    }
    unbindOne(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App",
            i = this.bindSources[`${t}-${Object.keys(e)[0]}`] === n;
        this.handlers[v9[t]] && i && delete this.handlers[v9[t]][Object.keys(e)[0]]
    }
    bind(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App";
        for (let i in t)
            Object.prototype.hasOwnProperty.call(t, i) && ("keyboard*" === i ? vP.forEach(r => this.bindOne(r, t[i], e, n)) : "digits*" === i ? v6.forEach(r => this.bindOne(r, t[i], e, n)) : "numpad*" === i ? vO.forEach(r => this.bindOne(r, t[i], e, n)) : this.bindOne(i, t[i], e, n))
    }
    unbind(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App";
        for (let i in t)
            Object.prototype.hasOwnProperty.call(t, i) && ("keyboard*" === i ? vP.forEach(t => this.unbindOne(t, e, n)) : "digits*" === i ? v6.forEach(t => this.unbindOne(t, e, n)) : "numpad*" === i ? vO.forEach(t => this.unbindOne(t, e, n)) : this.unbindOne(i, e, n))
    }
}
async function vM() {
    await y();
    let t = vC(JSON.parse(document.getElementById("state").innerHTML)),
        e = t.get().device,
        n = e.webview,
        i = "bot" === e.type;
    window.Sentry && window.Sentry.onLoad(() => {
        let e = t.get(),
            n = {
                page: e.route.page
            };
        for (let i of Object.keys(e.experiments)) {
            let r = e.experiments[i];
            n["e_" + i] = `${r.segment} ${r.status}`
        }
        window.Sentry.setTags(n)
    }),
        window.hotKeysManager = new vD(t),
        n || i || uK(t);
    let r = () => {
        let e = $0(),
            n = $E();
        t.dispatch("screen/resize", {
            screen: e,
            viewport: n
        })
    };
    window.visualViewport ? window.visualViewport.addEventListener("resize", sY(r, 100)) : window.addEventListener("resize", sY(r, 100)),
        await Promise.resolve(),
        _(s(Z.Provider, {
            value: t
        }, s($u, {
            store: t
        })), document.getElementById("root")),
        r(),
        cW(t),
        y2(t);
    let a = t.get(),
        o = a,
        l = -1 !== window.location.search.indexOf("ut=on");
    if (n || i || l || c3(() => yy(t)), !n && !i) {
        if (c3(() => {
            let e = t.get();
            l && t.dispatch("ut/continue", e.query.utName),
                "favorites" !== o.route.page && e.user.isLoggedIn && (e.favorites.favorites.length || $J(t.dispatch), _l(t.dispatch)),
                t.dispatch("curiosity/visitedPage")
        }), c3(() => {
            "search" !== t.get().route.page && t.dispatch("songs/filter", {
                pattern: "",
                filters: {
                    instrument: tM,
                    tunings: {
                        [tM]: tX
                    },
                    difficulty: tH
                }
            })
        }), "undefined" != typeof dataLayer && -1 === String(window.location).indexOf("&ut=on")) {
            let {
                hasPlus: u,
                isLoggedIn: c
            } = t.get().user;
            dataLayer.push({
                event: c ? u ? "VISITED_PLUS" : "VISITED_FREE" : "VISITED_ANON"
            })
        }
        "off" === t.get().query.sw ? $d() : $c();
        let d = () => t.dispatch("player/resume", "pagehide"),
            h = () => t.dispatch("player/suspend", "pagehide");
        window.addEventListener("pageshow", d, !1),
            window.addEventListener("resume", d, !1),
            window.addEventListener("pagehide", h, !1),
            window.addEventListener("freeze", h, !1),
            "mediaSession" in navigator && (navigator.mediaSession.setActionHandler("play", () => {
                t.dispatch("player/togglePlay", !0)
            }), navigator.mediaSession.setActionHandler("pause", () => {
                t.dispatch("player/togglePlay", !1)
            }))
    }
    (a.isTestMode || "prod" !== window.__STAGE__) && (window.__store__ = t),
        window.trackNotsyEvent = (e, n) => "prod" === window.__STAGE__ && t.dispatch("curiosity/event", {
            event: e,
            ...n
        })
}
"undefined" == typeof window || window.APP_INITED || (window.APP_INITED = !0, vM().catch(t => {
    console.error(t)
}));
export {
    oo as $,
    sc as A,
    Z as B,
    eb as C,
    X as D,
    fi as E,
    rm as F,
    iy as G,
    ib as H,
    gY as I,
    i8 as J,
    yz as K,
    tp as L,
    i2 as M,
    tn as N,
    l9 as O,
    cs as P,
    fI as Q,
    s8 as R,
    rz as S,
    e3 as T,
    fL as U,
    sN as V,
    n4 as W,
    nR as X,
    l4 as Y,
    o9 as Z,
    r2 as _,
    rr as a,
    v1 as a$,
    ol as a0,
    lF as a1,
    ou as a2,
    o4 as a3,
    oc as a4,
    ot as a5,
    aC as a6,
    od as a7,
    aP as a8,
    a6 as a9,
    aN as aA,
    aL as aB,
    a1 as aC,
    aI as aD,
    a2 as aE,
    f3 as aF,
    c3 as aG,
    sU as aH,
    sY as aI,
    cc as aJ,
    lB as aK,
    $v as aL,
    lH as aM,
    or as aN,
    yV as aO,
    yU as aP,
    mm as aQ,
    uH as aR,
    uX as aS,
    uG as aT,
    uF as aU,
    uW as aV,
    uV as aW,
    cr as aX,
    uU as aY,
    p5 as aZ,
    v3 as a_,
    $k as aa,
    oe as ab,
    on as ac,
    sq as ad,
    so as ae,
    oU as af,
    ph as ag,
    hD as ah,
    hH as ai,
    h4 as aj,
    hM as ak,
    oy as al,
    ov as am,
    oX as an,
    aR as ao,
    aD as ap,
    of as aq,
    a4 as ar,
    os as as,
    oa as at,
    aM as au,
    a9 as av,
    aF as aw,
    aB as ax,
    aH as ay,
    om as az,
    rc as b,
    to as b$,
    nO as b0,
    mB as b1,
    pT as b2,
    pk as b3,
    uR as b4,
    eW as b5,
    cH as b6,
    iI as b7,
    z as b8,
    j as b9,
    f5 as bA,
    fD as bB,
    fR as bC,
    n9 as bD,
    iv as bE,
    c2 as bF,
    _y as bG,
    i_ as bH,
    r0 as bI,
    yS as bJ,
    tc as bK,
    iY as bL,
    vg as bM,
    q as bN,
    y3 as bO,
    td as bP,
    sP as bQ,
    s9 as bR,
    sD as bS,
    $C as bT,
    s4 as bU,
    s6 as bV,
    sR as bW,
    sO as bX,
    s5 as bY,
    sC as bZ,
    iK as b_,
    aS as ba,
    mK as bb,
    vr as bc,
    yQ as bd,
    tG as be,
    fG as bf,
    f8 as bg,
    tj as bh,
    fX as bi,
    tX as bj,
    tz as bk,
    tM as bl,
    ra as bm,
    rl as bn,
    tF as bo,
    t5 as bp,
    tB as bq,
    f9 as br,
    fA as bs,
    fO as bt,
    fz as bu,
    i$ as bv,
    pM as bw,
    W as bx,
    tK as by,
    ei as bz,
    rZ as c,
    $4 as c0,
    K as c1,
    su as c2,
    $M as c3,
    Y as c4,
    rL as c5,
    rN as c6,
    rI as c7,
    sK as c8,
    sA as c9,
    s2 as ca,
    $R as cb,
    $9 as cc,
    $D as cd,
    _V as ce,
    m5 as cf,
    $q as cg,
    $Y as ch,
    _v as ci,
    sI as cj,
    sG as ck,
    sz as cl,
    iq as cm,
    ij as cn,
    se as d,
    sn as e,
    rq as f,
    sX as g,
    rY as h,
    rQ as i,
    yi as j,
    rJ as k,
    ar as l,
    rK as m,
    st as n,
    rj as o,
    e6 as p,
    eP as q,
    p0 as r,
    re as s,
    sv as t,
    te as u,
    H as v,
    ao as w,
    ss as x,
    sa as y,
    a0 as z
}
