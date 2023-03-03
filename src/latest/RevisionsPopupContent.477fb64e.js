import {
  b as e,
  p as t,
  T as a,
  v as s,
  x as o,
  y as n,
  d as i,
  E as r,
  q as l,
  h as c,
  s as m,
} from "./preact.294f37c2.js";
import {
  ap as d,
  cQ as u,
  u as p,
  bG as C,
  av as f,
  aq as k,
  bH as v,
  ar as g,
  as as h,
  cR as w,
  at as b,
  cS as y,
  t as N,
  v as I,
  L as S,
  b9 as B,
  w as x,
  U as D,
  cT as j,
  bp as A,
  cU as L,
  T as R,
  C as $,
  cV as H,
  cW as M,
  ba as E,
  cu as W,
  cx as T,
  co as Z,
  cp as _,
  cw as V,
  c2 as O,
  cX as P,
  bM as q,
  bK as U,
} from "./index.6eeae9f8.js";
import { S as G, G as F } from "./UploadInstructions.4c3173fb.js";
import { I as Y } from "./Input.9e959f35.js";
import { A as z } from "./ActionButton.5286af2f.js";
import { _ as K } from "./UploadRevisionForm.module.967e0aac.js";
import { R as X, j as Q } from "./user.6707f531.js";
let J = d + " B9j34t",
  ee = { content: d + " B9j34t" },
  et = { ...u, ...ee },
  ea = (o) => {
    let { meta: n, actions: i } = o,
      { dispatch: r, device: l } = p("device"),
      c = e(),
      m = e(),
      [d, y] = t(!1),
      [N, I] = t(null),
      [S, B] = t(null),
      [x, D] = t(null),
      j = async (e, t, a, s) => {
        y(!0), I(null);
        try {
          let o = v();
          g([
            { field: e, validator: h },
            { field: t, validator: o },
          ]);
          let i = {
            file: t.files[0],
            summary: e.value,
            songId: n.songId.toString(),
            force: a,
          };
          await w(r, i, s), D(null);
        } catch (e) {
          e instanceof b ? (B(!0), D(e)) : (B(!1), I(e));
        }
        y(!1);
      },
      A = a(
        (e) => {
          e.preventDefault();
          let t = new C();
          return j(m.current, c.current, S, t.signal), t.abort.bind(t);
        },
        [m, c, S]
      ),
      L = n.tracks && n.tracks.length > 2;
    return s(
      "form",
      { noValidate: !0, className: K.form, onSubmit: A, action: "" },
      s("div", { className: K.errorWrapper }, s(k, { styles: u, error: N })),
      s(
        "p",
        { className: K.motto, "aria-label": "motto" },
        "Download the latest revision from the list below, make your edits, save the result and upload it using the form below.",
        L &&
          s(
            "span",
            { role: "warning" },
            s("br", null),
            "Please make sure to keep all the tracks in the resulting file."
          )
      ),
      s(F, {
        id: "revisionFile",
        ref: c,
        name: "file",
        error: x || N,
        popup: !0,
        errorStyles: x ? et : u,
      }),
      s(G, { device: l, styles: K, mode: "revision" }),
      s(Y, {
        ref: m,
        name: "summary",
        type: "textarea",
        error: N,
        placeholder:
          "Briefly explain your changes (fixed errors, replaces with whole new version, corrected tempo, etc)",
        styles: K,
        errorStyles: u,
        popup: !0,
      }),
      s(
        "div",
        { className: K.actions },
        s(z, {
          id: x ? "submitRevisionButtonWarning" : "submitRevisionButton",
          title: S ? "Submit anyway" : "Submit a new revision",
          processing: d,
        }),
        s("a", { className: f.popupButtonLinkGreen, onClick: i.back }, "Cancel")
      ),
      s(
        "p",
        { className: K.notice },
        "Once processing is complete, we'll send you an email notification,",
        "and the site will display the new revision."
      )
    );
  },
  es = "w31p8",
  eo = "w3261",
  en = "w3dp",
  ei = "w3a5",
  er = "w31q",
  el = "w3n5",
  ec = "w32aw",
  em = "w3s9",
  ed = "w3e7",
  eu = "w32jd",
  ep = "w31fb",
  eC = {
    section: "w31p8",
    current: "w3261",
    currentText: "w3dp",
    options: "w3a5",
    reason: "w31q",
    text: "w3n5",
    textarea: "w32aw",
    title: "w3s9",
    notice: "w3e7",
    successNotice: "w32jd",
    actions: "w31fb",
  },
  ef = "revisionReports";
function ek(e, t) {
  switch (t.type) {
    case "enable":
      return { ...e, form: !0 };
    case "toggle":
      return { ...e, reason: t.kind };
    case "submit":
      return { ...e, processing: !0, error: null };
    case "success":
      return { ...e, processing: !1, success: !0 };
    case "failure":
      return { ...e, processing: !1, error: t.error };
  }
}
function ev(e) {
  let t = N(ef) || [];
  t.push(e), I(ef, t);
}
let eg = o((t) => {
    let { meta: o, actions: i } = t,
      r = e(),
      { dispatch: l } = p(),
      [c, m] = n(ek, {
        form: !1,
        processing: !1,
        error: null,
        reason: null,
        message: null,
        success: !1,
      }),
      d = async (e, t, a, s) => {
        m({ type: "submit" });
        try {
          y(t, a);
          let o = {
            songId: e.songId,
            revisionId: e.revisionId,
            kind: t,
            summary: a,
          };
          await Q(o, s),
            ev(e.revisionId),
            m({ type: "success" }),
            setTimeout(i.success, 0),
            l("curiosity/event", {
              event: "Reported revision",
              Reason: X[t],
              Summary: a,
              "Song id": e.songId.toString(),
            });
        } catch (e) {
          m({ type: "failure", error: e });
        }
      },
      v = a(
        (e) => {
          e.preventDefault();
          let t = new C();
          return d(o, c.reason, r.current.value, t.signal), t.abort.bind(t);
        },
        [c, o]
      );
    return c.success
      ? s(
          "section",
          { className: eC.section, "data-section": "report" },
          s("p", null, "Your report has been sent."),
          s(
            "p",
            { className: eC.successNotice },
            "We'll review your report as soon as possible. ",
            s("br", null),
            "And will roll back the revision in case of a problem."
          ),
          s(
            "div",
            { className: eC.actions },
            s("a", { className: f.popupButtonOrange, onClick: i.back }, "OK")
          )
        )
      : s(
          "section",
          { className: eC.section, "data-section": "report" },
          s(
            "form",
            { noValidate: !0, className: eC.form, onSubmit: v, action: "" },
            s(k, { styles: u, error: c.error }),
            s(
              "p",
              { className: eC.title },
              "Do you think that the new revision made the tab worse?",
              s("br", null),
              "If so, please tell us why:"
            ),
            s(
              "ul",
              { className: eC.options },
              Object.keys(X).map((e) => {
                let t = {
                  key: e,
                  className: eC.reason,
                  onClick: () => m({ type: "toggle", kind: e }),
                };
                return s(
                  "li",
                  t,
                  s("input", {
                    type: "radio",
                    name: "reason",
                    checked: c.reason === e,
                    value: e,
                  }),
                  s("label", { className: eC.text }, X[e])
                );
              })
            ),
            s(Y, {
              ref: r,
              name: "comment",
              type: "textarea",
              error: c.error,
              placeholder:
                "Provide additional details on problematic tracks, measures, notes, etc.",
              styles: eC,
              errorStyles: u,
              popup: !0,
            }),
            s(
              "p",
              { className: eC.notice },
              "Note! Your remarks will be sent to the author of the revision."
            ),
            s(
              "div",
              { className: eC.actions },
              s(
                "a",
                { className: f.popupButtonLinkOrange, onClick: i.back },
                "Cancel"
              ),
              s(z, {
                id: "submitReportButton",
                title: "Report",
                processing: c.processing,
              })
            ),
            s(
              "p",
              { className: eC.notice },
              "We'll review your report as soon as possible. ",
              s("br", null),
              "And will roll back the revision in case of a problem."
            )
          )
        );
  }),
  eh = "\x01",
  ew = /(\b(https?):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi,
  eb = (e) => e.replace(ew, (e) => "\x01" + e + "\x01").split("\x01");
function ey(e) {
  let { children: t, styles: a } = e,
    o = eb(t),
    n = o.map((e, t) => {
      let o = ew.test(e);
      if (o)
        return s(
          "a",
          {
            className: a.link,
            key: `url${t}`,
            href: e,
            rel: "noopener noreferrer ugc",
            target: "_blank",
          },
          e
        );
      let n = e.endsWith("(via editor)");
      if (n) {
        let o = e.replace("(via editor)", "");
        return (
          o.trim(),
          s(
            i,
            { key: `editor${t}` },
            (o = o.replace(/\s+$/, "") + " (via editor)").replace(
              "(via editor)",
              "via "
            ),
            s(
              S,
              {
                className: a.smallLink,
                key: `link${t}`,
                to: `${window.location.pathname}/editor`,
              },
              "Songsterr Tab Editor"
            )
          )
        );
      }
      return s(i, { key: `text${t}` }, e);
    });
  return s("p", { className: a.message }, n);
}
let eN = "C7k1rh",
  eI = "C7kb5",
  eS = "C7k2am",
  eB = "C7k1rh C7kks",
  ex = "C7k1rh C7k2yw",
  eD = "C7k2fj",
  ej = "C7k1rh C7k2yw C7k22w",
  eA = "C7krn",
  eL = "C7k23d",
  eR = "C7kl6",
  e$ = "C7k7o",
  eH = "C7k2a1",
  eM = "C7kwj",
  eE = "C7k7t",
  eW = "C7kwj C7k11e",
  eT = "C7k182",
  eZ = "C7k5j",
  e_ = "C7kv8",
  eV = "C7k2fj C7kel",
  eO = "C7k1d0",
  eP = "C7k34p",
  eq = "C7k1dv",
  eU = "C7k2n7",
  eG = "C7kxy",
  eF = {
    item: "C7k1rh",
    commentsIcon: "C7kb5",
    topWrap: "C7k2am",
    itemActive: "C7k1rh C7kks",
    itemInvalid: "C7k1rh C7k2yw",
    message: "C7k2fj",
    itemInvalidActive: "C7k1rh C7k2yw C7k22w",
    meta: "C7krn",
    person: "C7k23d",
    adminLinks: "C7kl6",
    adminLink: "C7k7o",
    metaLinks: "C7k2a1",
    link: "C7kwj",
    actionLink: "C7k7t",
    smallLink: "C7kwj C7k11e",
    links: "C7k182",
    linksWrapper: "C7k5j",
    linkActive: "C7kv8",
    block: "C7k2fj C7kel",
    editBtn: "C7k1d0",
    deleteBtn: "C7k34p",
    blockReasons: "C7k1dv",
    info: "C7k2n7",
    infoWrapper: "C7kxy",
  },
  eY = "Boi34j",
  ez = "Boi1x6",
  eK = "Boi32g",
  eX = "Boi1fu",
  eQ = "Boi33j",
  eJ = "Boiq6",
  e1 = "Boizh",
  e0 = {
    wrapper: "Boi34j",
    link: "Boi1x6",
    linkDisabled: "Boi32g",
    operationalLink: "Boi1fu",
    deleteLink: "Boi33j",
    editLink: "Boiq6",
    fill: "Boizh",
  };
function e3() {
  return s(
    "svg",
    { width: 13, height: 11, viewBox: "0 0 13 11" },
    s("path", {
      d: "M3.919 1a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v.3H11.7a.7.7 0 1 1 0 1.4h-.382l-.814 6.51a1.7 1.7 0 0 1-1.687 1.49H3.583a1.7 1.7 0 0 1-1.687-1.49L1.082 2.7H.7a.7.7 0 1 1 0-1.4h3.219V1Zm1 .3h2.5V1h-2.5v.3ZM2.493 2.7l.792 6.337a.3.3 0 0 0 .298.263h5.234a.3.3 0 0 0 .298-.263L9.907 2.7H2.493Zm5.902 1.387a.7.7 0 1 0-1.39-.174l-.5 4a.7.7 0 1 0 1.39.174l.5-4Zm-3.782-.782a.7.7 0 0 1 .782.608l.5 4a.7.7 0 1 1-1.39.174l-.5-4a.7.7 0 0 1 .608-.782Z",
      fillRule: "evenodd",
      clipRule: "evenodd",
    })
  );
}
let e4 = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      a = "You are about to delete the revision permanently.";
    if (t) return window.confirm(`${a} Are you sure?`);
    let s = `${a} To confirm deletion, please type "${e}" into the field below:`,
      o = window.prompt(s);
    return (
      o === e.toString() ||
      (window.alert("Confirmation string does not match artist and title."), !1)
    );
  },
  e7 = (e) => {
    let { revisionId: a, songLink: o } = e,
      { dispatch: n, user: i } = p("user"),
      [r, l] = t(!1),
      c = async (e) => {
        e.preventDefault();
        try {
          l(!0);
          let e = x(i, D.MANAGE_SONGS);
          e4(a, e) && (await j(n, { revisionId: a }), n("navigate", o)), l(!1);
        } catch (e) {
          l(!1);
        }
      };
    return s(
      "a",
      {
        className: `${e0.link} ${e0.operationalLink} ${e0.deleteLink}`,
        onClick: c,
      },
      !r && s(e3, null),
      r && s(B, { width: 10, height: 10, fill: "#6ccd43" })
    );
  };
function e2() {
  return s(
    "svg",
    { width: 17, height: 9, viewBox: "0 0 17 9" },
    s("circle", {
      cx: 8.5,
      cy: 4.5,
      r: 3.4,
      strokeWidth: 1.2,
      stroke: "#4fd80b",
      fill: "none",
    }),
    s("circle", {
      cx: 8.5,
      cy: 4.5,
      r: 1.5,
      strokeWidth: 1.2,
      fill: "#4fd80b",
    }),
    s("path", {
      d: "M16.4657 4.39158C16.4659 4.3915 16.4651 4.39411 16.4629 4.39971C16.4644 4.39447 16.4655 4.39167 16.4657 4.39158ZM16.3894 4.46151C16.3977 4.47528 16.4052 4.48811 16.412 4.5C16.4052 4.51189 16.3977 4.52472 16.3894 4.53849C16.3139 4.66364 16.1923 4.83633 16.0219 5.04197C15.682 5.45204 15.1669 5.96992 14.4843 6.47737C13.1211 7.49094 11.1084 8.45 8.5 8.45C5.89159 8.45 3.87893 7.49094 2.51565 6.47737C1.83312 5.96992 1.31804 5.45204 0.978126 5.04197C0.807668 4.83633 0.686099 4.66364 0.610609 4.53849C0.602303 4.52472 0.594778 4.51189 0.587981 4.5C0.594778 4.48811 0.602303 4.47528 0.610609 4.46151C0.686099 4.33636 0.807668 4.16367 0.978126 3.95803C1.31804 3.54796 1.83312 3.03008 2.51565 2.52263C3.87893 1.50906 5.89159 0.55 8.5 0.55C11.1084 0.55 13.1211 1.50906 14.4843 2.52263C15.1669 3.03008 15.682 3.54796 16.0219 3.95803C16.1923 4.16367 16.3139 4.33636 16.3894 4.46151ZM0.53429 4.39159C0.534456 4.39168 0.535573 4.3945 0.537141 4.39977C0.534907 4.39412 0.534123 4.39149 0.53429 4.39159ZM0.53429 4.60841C0.534123 4.60851 0.534908 4.60588 0.537142 4.60023C0.535573 4.6055 0.534456 4.60832 0.53429 4.60841ZM16.4629 4.60027C16.4651 4.60592 16.4659 4.60854 16.4657 4.60841C16.4655 4.60829 16.4644 4.60548 16.4629 4.60027Z",
      strokeWidth: 1.1,
      stroke: "#4fd80b",
      fill: "none",
    })
  );
}
function e5() {
  return s(
    "svg",
    { width: 13, height: 9, viewBox: "0 0 13 9" },
    s("path", {
      d: "M2.194 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v.5h-8V1Zm0 2h8v1.5h-8V3Zm3.648 5.868L.26 6.775C-.158 6.618-.046 6 .399 6h11.589c.445 0 .557.618.14.775L6.545 8.868a1 1 0 0 1-.703 0Z",
      fillRule: "evenodd",
      clipRule: "evenodd",
    })
  );
}
function e6(e) {
  let { styles: t } = e;
  return s(
    "svg",
    { width: 9, height: 10, viewBox: "0 0 8 8" },
    s("path", {
      d: "M1 1h7.682a.2.2 0 0 1 .18.287L7.437 4.252a.5.5 0 0 0 0 .433l1.425 2.966a.2.2 0 0 1-.18.287H1V1Z",
    }),
    s("path", { d: "M0 .5A.5.5 0 0 1 .5 0H1a.5.5 0 0 1 .5.5V10H0V.5Z" }),
    s("path", {
      d: "M1.375 2.438h5.144a.1.1 0 0 1 .088.147l-.948 1.732a.3.3 0 0 0 0 .288l.948 1.731a.1.1 0 0 1-.088.148H1.375V2.438Z",
      className: t.fill,
    })
  );
}
function e9() {
  return s("span", null, "-/+");
}
function e8() {
  return s(
    "svg",
    { width: 16, height: 12, viewBox: "0 -1 16 12" },
    s("path", {
      d: "M2 0a2 2 0 0 0-2 2v4.5a2 2 0 0 0 2 2h3.679a4 4 0 0 1 1.576.323l6.04 2.59a.1.1 0 0 0 .135-.124l-.71-2.13a.5.5 0 0 1 .474-.659H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm.61 1.5a1 1 0 0 0-1 1v3.357a1 1 0 0 0 .986 1l3.812.05a4 4 0 0 1 1.95.538l3.099 1.792a.1.1 0 0 0 .148-.103l-.288-1.707a.5.5 0 0 1 .493-.583h1.58a1 1 0 0 0 1-1V2.5a1 1 0 0 0-1-1H2.61Z",
      fillRule: "evenodd",
      clipRule: "evenodd",
    })
  );
}
let te = { animationStyles: M },
  tt = (e) => {
    let { dispatch: t, user: a } = p("user", "experiments"),
      {
        isCurrent: o,
        isLatestNonBlocked: n,
        isBaseRevision: i,
        isInvalid: r,
        reportAction: l,
        revision: c,
        commentsAmount: m,
        toggleComments: d,
        toggleDownloadPopup: u,
        showDownloadPopup: C,
        meta: f,
        partId: k,
        revisionBefore: v,
      } = e,
      { revisionId: g, tracks: h } = c,
      w = f.songId.toString(),
      b = h ? Math.min(h - 1, k) : 0,
      y = x(a, D.MANAGE_REVISIONS),
      I = A(f, b),
      B = A(f, b, g),
      j = (N(ef) || []).includes(g),
      M = o && n && !r && !i,
      E = a.profile && a.profile.id === c.personId,
      W = new Date(c.createdAt).getTime() > new Date().getTime() - 864e5,
      T = M && !E && !c.isBlocked,
      Z = y || (M && E && W),
      _ = (e) => {
        a?.isLoggedIn
          ? t("curiosity/event", { event: "Downloaded revision", "Song id": w })
          : (e.preventDefault(), u());
      },
      V =
        T &&
        s(
          "a",
          { className: j ? e0.linkDisabled : e0.link, onClick: j ? void 0 : l },
          s(e6, { styles: e0 }),
          s("span", null, j ? "reported" : "report")
        ),
      O =
        y &&
        v &&
        s(
          S,
          { className: e0.link, to: L(f, v, c), "aria-label": "action" },
          s(e9, null),
          " changes"
        ),
      P =
        !o &&
        s(
          S,
          {
            className: e0.link,
            to: B,
            "aria-label": "view",
            onClick: () =>
              t("curiosity/event", {
                event: "Clicked on View revision link",
                "Song id": w,
              }),
          },
          s(e2, null),
          s("span", null, "view")
        ),
      q = s(
        "a",
        {
          id: "download-link",
          className: e0.link,
          href: c.source,
          "aria-label": "download",
          download: !0,
          target: "_blank",
          onClick: _,
        },
        s(e5, null),
        s("span", null, "download"),
        s(
          R,
          null,
          C && s($, te, s(H, { id: "download-popup", variant: "download" }))
        )
      ),
      U = `${m}\u00A0comment${1 === m ? "" : "s"}`,
      G = s("a", {
        className: e0.link,
        "aria-label": "comments",
        onClick: d,
        children: [s(e8, null), U],
      });
    return s(
      "div",
      { className: e0.wrapper },
      P,
      O,
      G,
      V,
      q,
      Z && s(e7, { revisionId: g, songLink: I })
    );
  },
  ta = "Cc339",
  ts = "Cc32ns",
  to = "Cc3149",
  tn = "Cc320j",
  ti = "Cc389",
  tr = "Cc31cy",
  tl = "Cc3t7",
  tc = "Cc319j",
  tm = "Cc340",
  td = "Cc31qh",
  tu = "Cc3187",
  tp = {
    comments: "Cc339",
    commentsActive: "Cc32ns",
    commentsList: "Cc3149",
    textarea: "Cc320j",
    textareaWrap: "Cc389",
    textareaPlaceholder: "Cc31cy",
    form: "Cc3t7",
    form__send: "Cc319j",
    form__error: "Cc340",
    loader: "Cc31qh",
    closeBtn: "Cc3187",
  };
var tC,
  tf,
  tk = (e) => {
    let { fill: t } = e;
    return s(
      "div",
      { style: { width: "100%", height: "100%", display: "flex" } },
      s(B, {
        width: 35,
        height: 30,
        fill: t ?? "#fff",
        style: { margin: "auto" },
        className: E.google,
      })
    );
  };
async function tv(e) {
  let t = T(`/api/${e}/comment`),
    a = await fetch(t);
  W(a);
  let s = await a.json();
  return s.comments;
}
async function tg(e, t) {
  let a = T("/api/comment"),
    s = await Z("comment"),
    o = await _(a, { text: t, revisionId: e }, { "X-Recaptcha-Token": s });
  return await V(o), W(o), o;
}
async function th(e) {
  let t = T(`/api/comment/${e}`),
    a = await fetch(t, { method: "DELETE" });
  W(a);
}
async function tw(e) {
  let t = T(`/api/comment/${e}`),
    a = await _(t);
  W(a);
}
let tb = { comments: [], loading: !1 },
  ty = r(null);
function tN(e, t) {
  switch (t.type) {
    case "updateComments":
      return { ...e, comments: t.payload };
    case "startLoading":
      return { ...e, loading: !0 };
    case "endLoading":
      return { ...e, loading: !1 };
    default:
      throw Error(`Unhandled action type: ${t.type}`);
  }
}
function tI() {
  let e = l(ty);
  if (void 0 === e) throw Error("useCount must be used within a CountProvider");
  return e;
}
async function tS(e, t) {
  e({ type: "startLoading" });
  let a = await tv(t);
  return (
    a.reverse(),
    e({ type: "updateComments", payload: a }),
    e({ type: "endLoading" }),
    a
  );
}
async function tB(e, t, a, s, o) {
  await tg(a, s),
    t.push({
      id: Date.now(),
      text: s,
      userName: "You",
      createdAt: new Date().toDateString(),
      deletedAt: null,
      userId: o,
      mock: !0,
    }),
    e({ type: "updateComments", payload: t });
}
function tx(e, t) {
  return e.findIndex((e) => e.id === t);
}
async function tD(e, t, a) {
  let s = tx(t, a);
  await th(a),
    (t[s].deletedAt = new Date().toUTCString()),
    e({ type: "updateComments", payload: t });
}
async function tj(e, t, a) {
  let s = tx(t, a);
  await tw(a),
    (t[s].deletedAt = null),
    e({ type: "updateComments", payload: t });
}
function tA(e) {
  e({ type: "updateComments", payload: [] });
}
let tL = "Cmg2qi",
  tR = "Cmg2w3",
  t$ = "Cmgil",
  tH = "Cmg2ja",
  tM = "Cmg2ma",
  tE = "Cmg2bq",
  tW = "Cmga3",
  tT = "Cmg1k6",
  tZ = {
    comment: "Cmg2qi",
    message: "Cmg2w3",
    unblockBtn: "Cmgil",
    blockBtn: "Cmg2ja",
    meta: "Cmg2ma",
    person: "Cmg2bq",
    error: "Cmga3",
    loader: "Cmg1k6",
  },
  t_ = (e) => {
    let a,
      { data: o, isAdmin: n, user: i } = e,
      { state: r, dispatch: l } = tI(),
      [c, m] = t({ error: null, processing: !1 }),
      [d, u] = t();
    async function p() {
      try {
        clearTimeout(d),
          m({ error: null, processing: !0 }),
          await tD(l, r.comments, o.id),
          m({ error: null, processing: !1 });
      } catch (e) {
        m({ error: e, processing: !1 }),
          u(setTimeout(() => m({ error: null, processing: !1 }), 4e3));
      }
    }
    async function C() {
      try {
        clearTimeout(d),
          m({ error: null, processing: !0 }),
          await tj(l, r.comments, o.id),
          m({ error: null, processing: !1 });
      } catch (e) {
        m({ error: e, processing: !1 }),
          u(setTimeout(() => m({ error: null, processing: !1 }), 4e3));
      }
    }
    return (
      c.processing &&
        (a = s(B, {
          fill: "#3a3a3a",
          height: 15,
          className: `${E.google} ${tZ.loader}`,
        })),
      o.deletedAt &&
        !c.processing &&
        (a = s("button", { className: tZ.unblockBtn, onClick: C }, "unblock")),
      o.deletedAt ||
        c.processing ||
        (a = s("button", { className: tZ.blockBtn, onClick: p }, "block")),
      s(
        "li",
        { className: tZ.comment, key: o.id },
        s("p", { className: tZ.message }, o.text),
        s(
          "p",
          { className: tZ.meta },
          `${new Date(o.createdAt).toLocaleDateString()} by `,
          s(
            "span",
            { className: tZ.person },
            `${o.userId === i.profile?.id ? "You" : o.userName}`
          ),
          n && !o.mock && a,
          c.error && s("div", { className: tZ.error }, s(k, { error: c.error }))
        )
      )
    );
  },
  tV = (a) => {
    let { showComments: o, isAdmin: n, revisionId: i } = a,
      [r, l] = t(""),
      [c, m] = t({ error: null, processing: !1 }),
      { state: d, dispatch: u } = tI(),
      { user: C, dispatch: f } = p("user"),
      v = e(null),
      g = e(null),
      h = c.processing || !r.trim().length;
    function w(e) {
      l(e.target.value);
    }
    async function b(e) {
      if (!h)
        try {
          e.preventDefault(),
            m({ error: null, processing: !0 }),
            await tB(u, d.comments, i, r, C.profile.id),
            f("curiosity/conversion", {
              event: "Posted comment",
              "Is author of revision": C.profile.id === i,
            }),
            (g.current.value = ""),
            l(""),
            m({ error: null, processing: !1 });
        } catch (e) {
          m({ error: e, processing: !1 });
        }
    }
    return s(
      "article",
      { className: o ? tp.commentsActive : tp.comments },
      !d.loading &&
        s(
          "ul",
          { className: tp.commentsList },
          d.comments.map((e) => s(t_, { data: e, isAdmin: n, user: C }))
        ),
      d.loading &&
        s("div", { className: tp.loader }, s(tk, { fill: "#3a3a3a" })),
      C.isLoggedIn
        ? s(
            "form",
            { className: tp.form, ref: v, onSubmit: b },
            c.error &&
              s("div", { className: tp.form__error }, s(k, { error: c.error })),
            s(
              "div",
              { className: tp.textareaWrap },
              s("div", { className: tp.textareaPlaceholder }, r),
              s(Y, {
                type: "textarea",
                name: "comment",
                error: c.error,
                styles: tp,
                onChange: w,
                placeholder: "Enter your comment here",
                ref: g,
              })
            ),
            s(
              "div",
              { className: tp.form__send },
              s(z, {
                title: "Comment",
                onClick: b,
                isDisabled: h,
                processing: c.processing,
              })
            )
          )
        : s(
            "p",
            { className: tp.notAuthMessage },
            "Please ",
            s(S, { "data-link": "signin", to: "/a/wa/signin" }, "sign up"),
            " to comment on this revision"
          )
    );
  },
  tO = (a) => {
    let o;
    let {
        index: i,
        revision: r,
        revisionBefore: l,
        isLatestNonBlocked: m,
        meta: d,
        partId: u,
        isCurrent: C,
        isInvalid: f,
        isBaseRevision: k,
        processing: v,
        locales: g,
        reportAction: h,
        activeSignupPopupIndex: w,
        toggleSignupPopup: b,
      } = a,
      { revisionId: y, isBlocked: N } = r,
      I = O(new Date(r.createdAt), g);
    o =
      f || N
        ? C
          ? eF.itemInvalidActive
          : eF.itemInvalid
        : C
        ? eF.itemActive
        : eF.item;
    let S =
        r.isBlocked &&
        r.reports.length > 0 &&
        s(
          "div",
          { className: eF.block },
          "The revision was blocked by moderator. It was flagged by other users with the following reasons:",
          s(
            "ul",
            { className: eF.blockReasons },
            r.reports.map((e) =>
              s(
                "li",
                {},
                `${P.get(e.kind)}${e.summary ? `: ${e.summary}` : ""}`
              )
            )
          )
        ),
      { dispatch: B, user: j } = p("user", "meta"),
      [A, L] = n(tN, tb),
      R = e(null),
      $ = x(j, D.MANAGE_REVISIONS),
      [H, M] = t(!1),
      E = A.comments.length ? A.comments.length : r.commentsAmount;
    function W() {
      0 === E ? tA(L) : tS(L, r.revisionId),
        setTimeout(() => R.current.scrollIntoView({ behavior: "smooth" }), 100);
    }
    function T() {
      M(!H), B("curiosity/conversion", { event: "Clicked comments" }), H || W();
    }
    return (
      c(() => {
        (async () => {
          if (0 !== i) return;
          if (j?.profile?.id === r.personId) {
            M(!0), W();
            return;
          }
          let e = await tv(r.revisionId);
          e.some((e) => e.userId === j?.profile?.id) && (M(!0), W());
        })();
      }, [i, r.revisionId, j]),
      s(
        "li",
        { key: y, className: o, ref: R },
        s(ey, { styles: eF }, r.description),
        S,
        s(
          "div",
          { className: eF.links },
          !v &&
            s(tt, {
              revision: r,
              revisionBefore: l,
              meta: d,
              partId: u,
              isCurrent: C,
              isLatestNonBlocked: m,
              isBaseRevision: k,
              isInvalid: f,
              reportAction: h,
              toggleComments: T,
              commentsAmount: E,
              showDownloadPopup: w === i,
              toggleDownloadPopup: () => b(i),
            }),
          s(
            "div",
            { className: eF.infoWrapper },
            s(
              "p",
              { className: eF.info },
              `${I} by `,
              s("span", { className: eF.person }, r.person)
            )
          )
        ),
        s(ty.Provider, {
          value: { state: A, dispatch: L },
          children: s(tV, {
            showComments: H,
            isAdmin: $,
            revisionId: r.revisionId,
            closeComments: T,
          }),
        })
      )
    );
  },
  tP = "Cca1wi",
  tq = "Cca13w",
  tU = "Ccahc",
  tG = "Cca1mk",
  tF = "Cca34p",
  tY = "Cca1z3",
  tz = "Ccame",
  tK = "Cca1lf",
  tX = "Cca1lf Cca1gp",
  tQ = "Cca2yf",
  tJ = "Cca2yf Cca2uj",
  t1 = "Cca1p3",
  t0 = "Cca2ul",
  t3 = "Ccafl",
  t4 = "Cca302",
  t7 = {
    scroller: "Cca1wi",
    spinner: "Cca13w",
    title: "Ccahc",
    content: "Cca1mk",
    section: "Cca34p",
    sectionForm: "Cca1z3",
    actions: "Ccame",
    motto: "Cca1lf",
    subMotto: "Cca1lf Cca1gp",
    auth: "Cca2yf",
    authReport: "Cca2yf Cca2uj",
    list: "Cca1p3",
    revision: "Cca2ul",
    backToRevisionsBtn: "Ccafl",
    mobileSubmitRevisionBtn: "Cca302",
  };
!(function (e) {
  (e[(e.HIDDEN = 0)] = "HIDDEN"), (e[(e.SHOWN = 1)] = "SHOWN");
})(tC || (tC = {})),
  (function (e) {
    (e[(e.HIDDEN = 0)] = "HIDDEN"),
      (e[(e.SHOWN = 1)] = "SHOWN"),
      (e[(e.SUCCESS = 2)] = "SUCCESS");
  })(tf || (tf = {}));
let t2 = () => {
  let {
      dispatch: o,
      user: n,
      revisions: r,
      uploads: l,
      meta: d,
      device: u,
      screen: C,
      diff: k,
      route: v,
      experiments: g,
    } = p(
      "user",
      "revisions",
      "uploads",
      "meta",
      "device",
      "screen",
      "diff",
      "route",
      "experiments"
    ),
    { isLoggedIn: h } = n,
    { isLoading: w } = r,
    { revision: b, revisionError: y, revisionSubmitted: N } = l,
    [I, x] = t(tC.HIDDEN),
    [D, j] = t(tf.HIDDEN),
    [A, L] = t(null),
    R = e(),
    $ = e(),
    H = D ? "Report revision" : "Revisions",
    M = "diff" === v.page ? k.current?.after : d.current,
    W = "diff" === v.page ? k.songId : d.songId;
  m(() => {
    if (document.body)
      return (
        document.body.classList.add("grecaptcha-visible"),
        q(),
        () => {
          document.body.classList.remove("grecaptcha-visible");
        }
      );
  }, []),
    c(() => {
      g.revision_comments?.status === "pending" &&
        o("experiments/activate", { experimentName: "revision_comments" });
    }, []);
  let T = r?.revisions?.findIndex((e) => !e.isBlocked),
    Z = h && b && !y,
    _ = h && b && b.songId !== W,
    V = _ ? `${b.artist} ΓÇô ${b.title}` : "",
    O = { success: () => j(tf.SUCCESS), back: () => j(tf.HIDDEN) },
    P = { back: () => x(tC.HIDDEN) },
    G = (e) => {
      L(e);
    },
    F = (e) => {
      "download-popup" !== e.target.id &&
        "download-link" !== e.target.parentNode.id &&
        L(null);
    },
    Y = s(
      "section",
      { className: t7.section, "data-section": "welcome" },
      s(
        "div",
        { className: t7.motto },
        s("span", null, "Have a better tab for this song?"),
        s("span", null, "Care to fix the current tab?")
      ),
      s(
        "p",
        { className: t7.subMotto },
        "Submit your corrections for everyone to enjoy!"
      ),
      s(
        "div",
        { className: t7.auth, "aria-label": "auth" },
        "Please ",
        s(S, { "data-link": "signin", to: "/a/wa/signin" }, "sign up"),
        " for free to submit a new revision."
      )
    ),
    z = s(
      "a",
      {
        id: "submit-revision-button",
        className: f.popupButtonGreen,
        onClick: () => x(tC.SHOWN),
      },
      "Submit new revision"
    ),
    K = s(
      "section",
      { className: t7.sectionForm, "data-section": "submit" },
      s(
        "div",
        { className: t7.motto },
        s("span", null, "Have a better tab for this song?"),
        s("span", null, "Care to fix the current tab?")
      ),
      s(
        "p",
        { className: t7.subMotto },
        "Submit your corrections for everyone to enjoy!"
      ),
      s("div", { className: t7.actions }, z)
    ),
    X = s(
      "section",
      { className: t7.sectionForm, "data-section": "submit" },
      s(ea, { meta: M, actions: P })
    ),
    Q = s(
      "section",
      { className: t7.section, "data-section": "duplicate" },
      s(
        "p",
        { className: t7.motto, "aria-label": "motto" },
        "Submitted version already exists on Songsterr."
      ),
      !_ &&
        s(
          "p",
          { className: t7.subMotto, "aria-label": "info" },
          "Uploaded file looks exactly like the latest version of this song."
        ),
      _ &&
        s(
          "div",
          null,
          s(
            "p",
            { className: t7.subMotto, "aria-label": "info" },
            "Uploaded file looks like a duplicate of ",
            s("br", null),
            s(S, { to: U(b), "data-link": "duplicate" }, V)
          )
        )
    ),
    J = s(
      "section",
      { className: t7.section, "data-section": "success" },
      s(
        "div",
        null,
        s(
          "p",
          { className: t7.motto },
          "Thanks for contributing to Songsterr!"
        ),
        s(
          "p",
          { className: t7.subMotto },
          "We are processing the file and will redirect",
          s("br", null),
          "to a new revision as soon as possible."
        ),
        s("div", null, s(B, { fill: "#fefefe", width: 30, height: 30 }))
      )
    ),
    ee = a(
      (e, t) =>
        1 === e.length || 0 !== t
          ? { reportAction: null }
          : {
              reportAction: () => {
                R.current && (R.current.scrollTop = 0),
                  D || j(tf.SHOWN),
                  o("curiosity/event", { event: "Clicked on Report link" });
              },
            },
      [R, D]
    ),
    et = r.revisions?.length - 1,
    es = s(
      "section",
      { className: t7.sectionContent, "data-section": "revisions" },
      s(
        "ul",
        { className: t7.list },
        M &&
          r.revisions?.map((e, t) =>
            s(tO, {
              index: t,
              revision: e,
              isCurrent: d.current?.revisionId === e?.revisionId,
              isLatestNonBlocked: t === T,
              isBaseRevision: t === et,
              isInvalid: !e.tracks,
              revisionBefore: r.revisions[t + 1],
              meta: M,
              partId: d.partId,
              key: e.revisionId,
              locales: u.locale ? [u.locale] : void 0,
              processing: N,
              activeSignupPopupIndex: A,
              toggleSignupPopup: G,
              ...ee(r.revisions, t),
            })
          )
      )
    ),
    eo = !h && !D && !C.isSmall,
    en = h && !Z && !D && !I && !C.isSmall,
    ei = h && !Z && !D && !!I,
    er = Z && !D && !N,
    el = Z && !D && N;
  return s(
    i,
    {},
    s("h3", { className: t7.title }, H),
    s(
      "div",
      { className: t7.scroller, ref: R, onClick: F },
      s(
        "div",
        { className: t7.content, ref: $ },
        eo && Y,
        en && K,
        ei && X,
        er && Q,
        el && J,
        C.isSmall && s("div", { className: t7.mobileSubmitRevisionBtn }, z),
        h && !!D && s(eg, { meta: d.current, actions: O }),
        !h &&
          !!D &&
          s(
            "section",
            { className: t7.section, "data-section": "welcome" },
            s(
              "div",
              { className: t7.authReport, "aria-label": "auth" },
              "Please ",
              s(S, { "data-link": "signin", to: "/a/wa/signin" }, "sign up"),
              " for free to report issues."
            ),
            s(
              "a",
              {
                className: `${f.popupButtonLinkOrange} ${t7.backToRevisionsBtn}`,
                onClick: () => j(0),
              },
              "Back to revisions"
            )
          ),
        w &&
          !D &&
          s(
            "div",
            { className: t7.spinner },
            s(B, {
              className: E.revisions,
              width: 25,
              height: 24,
              fill: "#f7f6ee",
            })
          ),
        !w && !D && es
      )
    )
  );
};
export { t2 as default };
