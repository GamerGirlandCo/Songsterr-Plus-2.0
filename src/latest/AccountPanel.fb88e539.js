import { y as e, a as a, _ as t, d as n, e as s } from "./preact.3d326435.js";
import {
  u as r,
  U as i,
  ca as o,
  L as l,
  V as c,
  bP as u,
  bQ as d,
  q as p,
  n as m,
  cb as g,
  cc as C,
  cd as f,
  ce as v,
  cf as h,
  y as y,
  cg as N,
  h as b,
  ch as B,
  bU as k,
} from "./index.659fabbf.js";
import { A as P } from "./ActionButton.1cbc2cf9.js";
import { I as z, f as A, h as E } from "./Input.97539e13.js";
import { e as x, f as S } from "./user.15617609.js";
import { b as w } from "./google.d50e47be.js";
import { P as U } from "./Panel.693a3a8d.js";
function j(e, a) {
  switch (a.type) {
    case "process":
      return { ...e, processing: !0, error: null };
    case "success":
      return { ...e, processing: !1 };
    case "failure":
      return { ...e, processing: !1, error: a.error };
    default:
      return { ...e };
  }
}
let L = "Bok2qu",
  X = { actions: "Bok2qu" };
function O() {
  let { dispatch: t } = r(),
    [n, s] = e(j, { processing: !1, error: null }),
    l = async (e) => {
      e.preventDefault();
      try {
        s({ type: "process" });
        let e = await o();
        t("user/profile", e),
          t("curiosity/conversion", { event: "Activated android promo" }),
          s({ type: "success" });
      } catch (e) {
        console.error(e),
          t("curiosity/error", { error: "Android Promo", message: e.message }),
          s({ type: "failure", error: e });
      }
    };
  return a(
    "form",
    { noValidate: !0, onSubmit: l, action: "" },
    a(i, { error: n.error }),
    a(
      "div",
      { className: X.actions },
      a(P, {
        id: "startAndroidPromo",
        title: "Start free trial",
        processing: n.processing,
      })
    )
  );
}
let T = "Bab2hr",
  D = "Bab2hx",
  R = "Bab2b4",
  q = { section: "Bab2hr", actions: "Bab2hx", link: "Bab2b4" },
  I = () => {
    let { dispatch: n, user: s } = r("user"),
      o = t(),
      p = t(),
      [m, g] = e(j, { processing: !1, error: null }),
      C = async (e) => {
        e.preventDefault();
        try {
          g({ type: "process" }),
            c([
              { field: o.current, validator: u },
              { field: p.current, validator: d },
            ]);
          let e = await x(o.current.value, p.current.value);
          n("user/profile", e), g({ type: "success" });
        } catch (e) {
          console.error(e), g({ type: "failure", error: e });
        }
      };
    return a(
      "section",
      { className: q.section, "data-section": "update" },
      a(
        "form",
        { noValidate: !0, onSubmit: C, action: "" },
        a(i, { error: m.error }),
        a(z, {
          type: "text",
          label: "Name",
          ref: o,
          name: "name",
          defaultValue: s.profile.name || "",
          error: m.error,
          autocomplete: "name",
        }),
        a(z, {
          type: "email",
          label: "Email",
          ref: p,
          name: "email",
          defaultValue: s.profile.email || "",
          error: m.error,
          autocomplete: "email",
        }),
        a(
          "div",
          { className: q.actions },
          a(P, { title: "Save", processing: m.processing })
        )
      ),
      a(
        l,
        {
          to: "/a/wa/account/password",
          className: q.link,
          "data-link": "password",
        },
        "Change password"
      )
    );
  },
  Y = "C9u2vz",
  F = "C9u2j5",
  M = "C9u2j5 C9u2nk",
  V = "C9u2j5 C9u9g",
  _ = "C9u2j5 C9u1d4",
  G = "C9u2j5 C9uur",
  $ = "C9u1mb",
  H = A + " C9u1qv",
  J = E + " C9u2ck",
  Q = "C9u2gr",
  K = A + " C9u1qv C9uuh",
  W = "C9u1q2",
  Z = "C9uxb",
  ee = "C9u1zy",
  ea = "C9u2x0",
  et = "C9u2bk",
  en = "C9ueb",
  es = "C9ueb C9uk4",
  er = "C9ueb C9u2k5",
  ei = {
    sectionSignout: "C9u2vz",
    section: "C9u2j5",
    sectionAccount: "C9u2j5 C9u2nk",
    sectionProfile: "C9u2j5 C9u9g",
    sectionUpdateCard: "C9u2j5 C9u1d4",
    sectionPrivacy: "C9u2j5 C9uur",
    actions: "C9u1mb",
    field: A + " C9u1qv",
    hint: E + " C9u2ck",
    link: "C9u2gr",
    fieldCard: A + " C9u1qv C9uuh",
    miniCard: "C9u1q2",
    miniCardInner: "C9uxb",
    miniCardNumber: "C9u1zy",
    miniCardBtn: "C9u2x0",
    noticeTitle: "C9u2bk",
    notice: "C9ueb",
    noticeAndroid: "C9ueb C9uk4",
    noticeCancellation: "C9ueb C9u2k5",
  },
  eo = "Bpz1tm",
  el = "Bpz1tm Bpzg8",
  ec = "Bpz1tm Bpz2gy",
  eu = "Bpz1tm Bpz1d",
  ed = "Bpz1tm Bpz2j1",
  ep = "Bpz1a9",
  em = "Bpzoo",
  eg = "Bpz1mu",
  eC = "Bpz2d3",
  ef = "Bpz32k",
  ev = "Bpz171",
  eh = p + " Bpz1dt",
  ey = {
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
    button: p + " Bpz1dt",
  };
var eN = "/static/media/devices.fde9455f.svg",
  eb = null,
  eB = null,
  ek = null,
  eP = null,
  ez = null,
  eA = null,
  eE = null,
  ex = null,
  eS = null,
  ew = null,
  eU = [eb, eB, ek, eP, ez, eA, eE, ex, eS, ew];
function ej(e) {
  let { onClick: t } = e,
    { gettext: n } = m(eU);
  return a(
    "div",
    { className: ey.badgeFree },
    a(
      "div",
      { className: ey.header },
      a("img", { src: eN, className: ey.icon, width: 149, height: 66 }),
      a(
        "div",
        { className: ey.text, id: "account-type" },
        a("span", { className: ey.secondary }, n("ACCOUNT TYPE")),
        a("span", { className: ey.primary }, n("FREE"))
      )
    ),
    a(
      "div",
      { className: ey.footer, id: "account-meta" },
      a(
        l,
        { to: "/a/wa/plus", className: ey.button, onClick: t },
        n("Upgrade to PLUS")
      )
    )
  );
}
var eL = "/static/media/plus.eaeb734d.svg",
  eX = null,
  eO = null,
  eT = null,
  eD = null,
  eR = null,
  eq = null,
  eI = null,
  eY = null,
  eF = null,
  eM = null,
  eV = [eX, eO, eT, eD, eR, eq, eI, eY, eF, eM];
let e_ = [g.BRAINTREE, g.APP_STORE, g.GOOGLE_PLAY];
function eG(e) {
  let { subscription: t } = e,
    { gettext: n } = m(eV),
    { device: s } = r("device"),
    i = null;
  if (t) {
    let e = e_.includes(t.type) && t.cancellationDate,
      r = t.type === g.COUPON,
      o = t.type === g.MANUAL,
      l = t.type === g.APP_STORE && !e,
      c = t.type === g.GOOGLE_PLAY && !e,
      u = t.type === g.BRAINTREE && "plus" !== t.plan.id && !e,
      d = C.get(t.countryCode),
      p = d && n`${f(t.plan)}/mo.`,
      m = o ? "forever" : null;
    if ((t.countryCode && u && (m = n`in ${d}`), t.endDate)) {
      let e = s.locale ? [s.locale] : void 0;
      m = n`till ${v(new Date(t.endDate), e)}`;
    }
    i =
      (r || o || e || l || c || u) &&
      a(
        "div",
        { className: ey.footer, id: "account-meta" },
        r && a("span", null, a("strong", null, "Promo")),
        o && a("span", null, a("strong", null, "Holy cow!")),
        e && a("span", null, a("strong", null, "Canceled")),
        l && a("span", null, a("strong", null, "App Store")),
        c && a("span", null, a("strong", null, "Google Play")),
        u && p && a("span", null, a("strong", null, p)),
        m && a("span", null, `Active ${m}`)
      );
  }
  return a(
    "div",
    { className: i ? ey.badgePlusExtended : ey.badgePlus },
    a(
      "div",
      { className: ey.header },
      a(
        "div",
        { className: ey.header },
        a("img", { src: eL, className: ey.icon, width: 144, height: 73 }),
        a(
          "div",
          { className: ey.text, id: "account-type" },
          a("span", { className: ey.secondary }, n("ACCOUNT TYPE")),
          a("span", { className: ey.primary }, n("PLUS"))
        )
      ),
      i
    )
  );
}
var e$ = "/static/media/android.a60e0f77.svg";
function eH() {
  return a(
    "div",
    { className: ey.badgeAndroidLifetime },
    a(
      "div",
      { className: ey.header },
      a("img", { src: e$, className: ey.icon, width: 86, height: 65 }),
      a(
        "div",
        { className: ey.text, id: "account-type" },
        a("span", { className: ey.secondary }, "ACCOUNT TYPE"),
        a("span", { className: ey.primary }, "Android"),
        a("span", { className: ey.primary }, "Lifetime")
      )
    ),
    a(
      "div",
      { className: ey.footer, id: "account-meta" },
      a(
        "span",
        null,
        "You have all the features unlocked for the ",
        a(
          "a",
          { href: h({ name: "Android" }, "android_lifetime") },
          "Songsterr Android"
        ),
        " app."
      )
    )
  );
}
var eJ = null,
  eQ = null,
  eK = null,
  eW = null,
  eZ = null,
  e9 = null,
  e1 = null,
  e2 = null,
  e0 = null,
  e5 = null,
  e3 = [eJ, eQ, eK, eW, eZ, e9, e1, e2, e0, e5];
class e4 extends n {
  name = s();
  email = s();
  constructor(e) {
    super(e),
      (this.state = {
        error: null,
        processing: !1,
        signoutError: null,
        signoutProcessing: !1,
      });
  }
  onUpgradeClick = () => {
    this.props.dispatch("curiosity/setConversionProps", {
      "Last referring link": "AccountPanel Upgrade Link",
    });
  };
  onMigrateClick = () => {
    this.props.dispatch("payment/popup:show");
  };
  handleSignOut = async (e) => {
    e.preventDefault();
    try {
      this.setState({ signoutProcessing: !0, signoutError: null }),
        await S(),
        this.props.dispatch("user/signOut"),
        w(),
        this.setState({ signoutProcessing: !1, signoutError: null }),
        this.props.dispatch("navigate", "/a/wa/signin");
    } catch (e) {
      this.setState({ signoutProcessing: !1, signoutError: e });
    }
  };
  render() {
    let { gettext: e } = m(e3);
    N();
    let { user: t } = this.props,
      { isLoggedIn: n, profile: s } = this.props.user;
    if (!n)
      return a(
        U,
        { title: e("Account"), id: "account" },
        a("div", { className: "Panel-inner" })
      );
    let { plan: r, subscription: o } = s,
      c = o && !o.cancellationDate,
      u = c && o.type === g.BRAINTREE,
      d = c && o.type !== g.MANUAL,
      p = u && "plus" === o.plan.id && "plus" !== this.props.payment.plan.id,
      C = !b(t) && s.androidLicence === B.LIFETIME,
      f = r === k.FREE && !C,
      v = r === k.PLUS && !C;
    return a(
      U,
      { title: e("Account"), id: this.props.id },
      a(
        "div",
        { className: "Panel-inner" },
        a(I, null),
        a(
          "section",
          { className: ei.sectionProfile, "data-section": "profile" },
          C && a(eH, null),
          C &&
            a(
              "div",
              { className: ei.noticeAndroid, id: "account-android-notice" },
              a(
                l,
                {
                  id: "upgradeFromAndroid",
                  to: "/a/wa/plus",
                  onClick: this.onUpgradeClick,
                },
                e("Upgrade to PLUS")
              ),
              e(
                " to get all the features across all the platforms, or\xa0start a\xa0one month free trial."
              ),
              a(O, null)
            ),
          f && a(ej, { onClick: this.onUpgradeClick }),
          f &&
            a(
              l,
              {
                id: "activateCoupon",
                to: "/a/wa/plus/coupon",
                className: ei.link,
                "data-link": "coupon",
              },
              e("Activate coupon")
            ),
          v && a(eG, { subscription: o }),
          d &&
            a(
              l,
              {
                id: "cancelSubscription",
                to: "/a/wa/account/subscription",
                className: ei.link,
                "data-link": "cancel",
              },
              e("Cancel subscription")
            ),
          p &&
            a(
              "a",
              {
                onClick: this.onMigrateClick,
                className: ei.link,
                "data-link": "migrate",
              },
              e("Migrate to regional price")
            )
        ),
        u &&
          a(
            "section",
            { className: ei.sectionUpdateCard, "data-section": "card" },
            a(
              "div",
              { className: ei.miniCard },
              a(
                "div",
                { className: ei.miniCardInner },
                a(
                  "div",
                  { className: ei.miniCardNumber, "data-value": "card" },
                  "XXXX-XXXX-XXXX-XXXX"
                ),
                a(
                  "div",
                  { className: ei.miniCardBtn },
                  a(
                    l,
                    {
                      id: "updateCardLink",
                      to: "/a/wa/account/card",
                      "data-link": "card",
                    },
                    e("Update card")
                  )
                )
              )
            )
          ),
        a(
          "section",
          { className: ei.sectionPrivacy, "data-section": "privacy" },
          a("p", { className: ei.noticeTitle }, e("EXPORT")),
          a(
            "p",
            { className: ei.notice, "data-label": "privacy-notice" },
            e(
              "You are in\xa0control of\xa0the content in\xa0your Songsterr account, even if\xa0you stop using Songsterr or\xa0decide to\xa0delete your account altogether."
            )
          ),
          a(
            "a",
            {
              id: "exportPersonalData",
              className: ei.link,
              target: "_blank",
              href: "/api/privacy/data",
              "data-link": "export",
            },
            e("Download my data (JSON)")
          ),
          !b(t) &&
            a(
              l,
              {
                to: "/a/wa/account/deactivate",
                className: ei.link,
                "data-link": "deactivate",
              },
              e("Delete my account")
            )
        ),
        a(
          "section",
          { className: ei.sectionSignout, "data-section": "signout" },
          a(i, { error: this.state.signoutError }),
          a(
            "form",
            { noValidate: !0, onSubmit: this.handleSignOut },
            a(P, {
              id: "signout",
              title: e("Sign out"),
              processing: this.state.signoutProcessing,
            })
          )
        )
      )
    );
  }
}
var e6 = y(e4, "user", "payment");
export { e6 as default };
