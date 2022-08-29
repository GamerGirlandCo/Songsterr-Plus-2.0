import {
    g as e,
    h as a,
    _ as t,
    d as s,
    y as r
}
from "./preact.272910a2.js";
import {
    u as i,
    c0 as n,
    a as l,
    L as o,
    c1 as c,
    c2 as d,
    N as m,
    c3 as u,
    c4 as p,
    bN as N
}
from "./index.b0563877.js";
import {
    A as g
}
from "./ActionButton.3e8facf6.js";
import {
    F as f,
    v as h,
    b as y,
    e as A
}
from "./FormError.15baa318.js";
import {
    e as P,
    f as b
}
from "./user.9b07dcdf.js";
import {
    b as k
}
from "./google.20e6aa6a.js";
import {
    P as E
}
from "./Panel.d80d9593.js";
import {
    f as C,
    h as v,
    I as x
}
from "./Input.d3dc4ead.js";
function L(e, a) {
    switch (a.type) {
    case "process":
        return {
            ...e,
            processing: !0,
            error: null
        };
    case "success":
        return {
            ...e,
            processing: !1
        };
    case "failure":
        return {
            ...e,
            processing: !1,
            error: a.error
        };
    default:
        return {
            ...e
        }
    }
}
let $ = "Bok2qu", S = {
    actions: "Bok2qu"
};
function _() {
    let {
        dispatch: t
    } = i(),
    [s, r] = e(L, {
        processing: !1,
        error: null
    }),
    l = async e => {
        e.preventDefault();
        try {
            r({
                type: "process"
            });
            let a = await n();
            t("user/profile", a),
            t("curiosity/conversion", {
                event: "Activated android promo"
            }),
            r({
                type: "success"
            })
        } catch (s) {
            console.error(s),
            t("curiosity/error", {
                error: "Android Promo",
                message: s.message
            }),
            r({
                type: "failure",
                error: s
            })
        }
    };
    return a("form", {
        noValidate: !0,
        onSubmit: l,
        action: ""
    }, a(f, {
            error: s.error
        }), a("div", {
            className: S.actions
        }, a(g, {
                id: "startAndroidPromo",
                title: "Start free trial",
                processing: s.processing
            })))
}
let O = "C9u2vz", U = "C9u2j5", w = "C9u2j5 C9u2nk", D = "C9u2j5 C9u9g", I = "C9u2j5 C9u1d4", R = "C9u2j5 C9uur", T = "C9u1mb", F = C + " C9u1qv", V = v + " C9u2ck", B = "C9u2gr", G = C + " C9u1qv C9uuh", M = "C9u1q2", Y = "C9uxb", j = "C9u1zy", q = "C9u2x0", z = "C9u2bk", H = "C9ueb", J = "C9ueb C9uk4", K = "C9ueb C9u2k5", Q = {
    sectionSignout: "C9u2vz",
    section: "C9u2j5",
    sectionAccount: "C9u2j5 C9u2nk",
    sectionProfile: "C9u2j5 C9u9g",
    sectionUpdateCard: "C9u2j5 C9u1d4",
    sectionPrivacy: "C9u2j5 C9uur",
    actions: "C9u1mb",
    field: C + " C9u1qv",
    hint: v + " C9u2ck",
    link: "C9u2gr",
    fieldCard: C + " C9u1qv C9uuh",
    miniCard: "C9u1q2",
    miniCardInner: "C9uxb",
    miniCardNumber: "C9u1zy",
    miniCardBtn: "C9u2x0",
    noticeTitle: "C9u2bk",
    notice: "C9ueb",
    noticeAndroid: "C9ueb C9uk4",
    noticeCancellation: "C9ueb C9u2k5"
}, W = "Bpz1tm", X = "Bpz1tm Bpzg8", Z = "Bpz1tm Bpz2gy", ee = "Bpz1tm Bpz1d", ea = "Bpz1tm Bpz2j1", et = "Bpz1a9", es = "Bpzoo", er = "Bpz1mu", ei = "Bpz2d3", en = "Bpz32k", el = "Bpz171", eo = l + " Bpz1dt", ec = {
    badge: "Bpz1tm",
    badgePlus: "Bpz1tm Bpzg8",
    badgePlusExtended: "Bpz1tm Bpz2gy",
    badgeFree: "Bpz1tm Bpz1d",
    badgeAndroidLifetime: "Bpz1tm Bpz2j1",
    header: "Bpz1a9",
    secondary: "Bpzoo",
    primary: "Bpz1mu",
    footer: "Bpz2d3",
    icon: "Bpz32k",
    text: "Bpz171",
    button: l + " Bpz1dt"
};
var ed = "/static/media/devices.a3e3d850.svg";
function em(e) {
	console.log("Account panel");
    let {
        onClick: t
    } = e;
    return a("div", {
        className: ec.badgeFree
    }, a("div", {
            className: ec.header
        }, a("img", {
                src: ed,
                className: ec.icon,
                width: 149,
                height: 66
            }), a("div", {
                className: ec.text,
                id: "account-type"
            }, a("span", {
                    className: ec.secondary
                }, "ACCOUNT TYPE"), a("span", {
                    className: ec.primary
                }, "FREE"))), a("div", {
            className: ec.footer,
            id: "account-meta"
        }, a(o, {
                to: "/a/wa/plus",
                className: ec.button,
                onClick: t
            }, "Upgrade to PLUS")))
}
var eu = "/static/media/plus.57c4d40a.svg";
let ep = [c.BRAINTREE, c.APP_STORE, c.GOOGLE_PLAY, ];
function eN(e) {
    let {
        subscription: t
    } = e,
    s = null;
    if (t) {
        let r = ep.includes(t.type) && t.cancellationDate,
        i = t.type === c.COUPON,
        n = t.type === c.MANUAL,
        l = t.type === c.APP_STORE && !r,
        o = t.type === c.GOOGLE_PLAY && !r,
        d = n ? "forever" : null;
        t.endDate && (d = `till ${new Date(t.endDate).toLocaleDateString()}`),
        s = (i || n || r || l || o) && a("div", {
            className: ec.footer,
            id: "account-meta"
        }, i && a("span", null, a("strong", null, "Promo")), n && a("span", null, a("strong", null, "Holy cow!")), r && a("span", null, a("strong", null, "Canceled")), l && a("span", null, a("strong", null, "App Store")), o && a("span", null, a("strong", null, "Google Play")), d && a("span", null, `Active ${d}`))
    }
    return a("div", {
        className: s ? ec.badgePlusExtended : ec.badgePlus
    }, a("div", {
            className: ec.header
        }, a("div", {
                className: ec.header
            }, a("img", {
                    src: eu,
                    className: ec.icon,
                    width: 144,
                    height: 73
                }), a("div", {
                    className: ec.text,
                    id: "account-type"
                }, a("span", {
                        className: ec.secondary
                    }, "ACCOUNT TYPE"), a("span", {
                        className: ec.primary
                    }, "PLUS"))), s))
}
var eg = "/static/media/android.181a8323.svg";
function ef() {
    return a("div", {
        className: ec.badgeAndroidLifetime
    }, a("div", {
            className: ec.header
        }, a("img", {
                src: eg,
                className: ec.icon,
                width: 86,
                height: 65
            }), a("div", {
                className: ec.text,
                id: "account-type"
            }, a("span", {
                    className: ec.secondary
                }, "ACCOUNT TYPE"), a("span", {
                    className: ec.primary
                }, "Android"), a("span", {
                    className: ec.primary
                }, "Lifetime"))), a("div", {
            className: ec.footer,
            id: "account-meta"
        }, a("span", null, "You have all the features unlocked for the ", a("a", {
                    href: d({
                        name: "Android"
                    }, "android_lifetime")
                }, "Songsterr Android"), " app.")))
}
let eh = "Bab2hr", ey = "Bab2hx", eA = "Bab2b4", eP = {
    section: "Bab2hr",
    actions: "Bab2hx",
    link: "Bab2b4"
}, eb = () => {
    let {
        dispatch: s,
        user: r
    } = i("user"),
    n = t(),
    l = t(),
    [c, d] = e(L, {
        processing: !1,
        error: null
    }),
    m = async e => {
        e.preventDefault();
        try {
            d({
                type: "process"
            }),
            h([{
                        field: n.current,
                        validator: y
                    }, {
                        field: l.current,
                        validator: A
                    }, ]);
            let a = await P(n.current.value, l.current.value);
            s("user/profile", a),
            d({
                type: "success"
            })
        } catch (t) {
            console.error(t),
            d({
                type: "failure",
                error: t
            })
        }
    };
    return a("section", {
        className: eP.section,
        "data-section": "update"
    }, a("form", {
            noValidate: !0,
            onSubmit: m,
            action: ""
        }, a(f, {
                error: c.error
            }), a(x, {
                type: "text",
                label: "Name",
                ref: n,
                name: "name",
                defaultValue: r.profile.name || "",
                error: c.error,
                autocomplete: "name"
            }), a(x, {
                type: "email",
                label: "Email",
                ref: l,
                name: "email",
                defaultValue: r.profile.email || "",
                error: c.error,
                autocomplete: "email"
            }), a("div", {
                className: eP.actions
            }, a(g, {
                    title: "Save",
                    processing: c.processing
                }))), a(o, {
            to: "/a/wa/account/password",
            className: eP.link,
            "data-link": "password"
        }, "Change password"))
};
class ek extends s {
    name = r();
    email = r();
    constructor(e) {
        super(e),
        this.state = {
            error: null,
            processing: !1,
            signoutError: null,
            signoutProcessing: !1
        }
    }
    onUpgradeClick = () => {
        this.props.dispatch("curiosity/setConversionProps", {
            "Last referring link": "AccountPanel Upgrade Link"
        })
    };
    handleSignOut = async e => {
        e.preventDefault();
        try {
            this.setState({
                signoutProcessing: !0,
                signoutError: null
            }),
            await b(),
            this.props.dispatch("user/signOut"),
            k(),
            this.setState({
                signoutProcessing: !1,
                signoutError: null
            }),
            this.props.dispatch("navigate", "/a/wa/signin")
        } catch (a) {
            this.setState({
                signoutProcessing: !1,
                signoutError: a
            })
        }
    };
    render() {
        u();
		this.props.user.profile.plan="plus";
		console.log("DEBUG HERE");
        let {
            hasPlus: e,
            isLoggedIn: t,
            profile: s
        } = this.props.user;
        if (!t)
            return a(E, {
                title: "Account",
                id: "account"
            }, a("div", {
                    className: "Panel-inner"
                }));
        let {
            plan: r,
            subscription: i
        } = s,
        n = i && !i.cancellationDate,
        l = n && i.type !== c.MANUAL,
        d = n && i.type === c.BRAINTREE,
        m = !e && s.androidLicence === p.LIFETIME,
        h = r === N.FREE && !m,
        y = r === N.PLUS && !m;
		return a(E, {
            title: "Account",
            id: this.props.id
        }, a("div", {
                className: "Panel-inner"
            }, a(eb, null), a("section", {
                    className: Q.sectionProfile,
                    "data-section": "profile"
                }, m && a(ef, null), m && a("div", {
                        className: Q.noticeAndroid,
                        id: "account-android-notice"
                    }, a(o, {
                            id: "upgradeFromAndroid",
                            to: "/a/wa/plus",
                            onClick: this.onUpgradeClick
                        }, "Upgrade to PLUS"), " to get all the features across all the platforms, or\xa0start a\xa0one month free trial.", a(_, null)), h && a(em, {
                        onClick: this.onUpgradeClick
                    }), h && a(o, {
                        id: "activateCoupon",
                        to: "/a/wa/plus/coupon",
                        className: Q.link,
                        "data-link": "coupon"
                    }, "Activate coupon"), y && a(eN, {
                        subscription: i
                    }), l && a(o, {
                        id: "cancelSubscription",
                        to: "/a/wa/account/subscription",
                        className: Q.link,
                        "data-link": "cancel"
                    }, "Cancel subscription")), d && a("section", {
                    className: Q.sectionUpdateCard,
                    "data-section": "card"
                }, a("div", {
                        className: Q.miniCard
                    }, a("div", {
                            className: Q.miniCardInner
                        }, a("div", {
                                className: Q.miniCardNumber,
                                "data-value": "card"
                            }, "XXXX-XXXX-XXXX-XXXX"), a("div", {
                                className: Q.miniCardBtn
                            }, a(o, {
                                    id: "updateCardLink",
                                    to: "/a/wa/account/card",
                                    "data-link": "card"
                                }, "Update card"))))), a("section", {
                    className: Q.sectionPrivacy,
                    "data-section": "privacy"
                }, a("p", {
                        className: Q.noticeTitle
                    }, "EXPORT"), a("p", {
                        className: Q.notice,
                        "data-label": "privacy-notice"
                    }, "You are in\xa0control of\xa0the content in\xa0your Songsterr account, even if\xa0you stop using Songsterr or\xa0decide to\xa0delete your account altogether."), a("a", {
                        id: "exportPersonalData",
                        className: Q.link,
                        target: "_blank",
                        href: "/api/privacy/data",
                        "data-link": "export"
                    }, "Download my data (JSON)"), !e && a(o, {
                        to: "/a/wa/account/deactivate",
                        className: Q.link,
                        "data-link": "deactivate"
                    }, "Deactivate my account")), a("section", {
                    className: Q.sectionSignout,
                    "data-section": "signout"
                }, a(f, {
                        error: this.state.signoutError
                    }), a("form", {
                        noValidate: !0,
                        onSubmit: this.handleSignOut
                    }, a(g, {
                            id: "signout",
                            title: "Sign out",
                            processing: this.state.signoutProcessing
                        })))))
    }
}
var eE = m(ek, "user", "experiments");
export {
    eE as default
}
