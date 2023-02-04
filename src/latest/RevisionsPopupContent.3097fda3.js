var e, t;
import {
  _ as s,
  p as a,
  T as i,
  a as o,
  R as n,
  y as r,
  c as l,
  s as c,
  h as u,
} from "./preact.3d326435.js";
import {
  R as m,
  cN as p,
  u as d,
  bG as h,
  j as v,
  U as k,
  bH as w,
  V as f,
  W as g,
  cO as b,
  X as C,
  cP as N,
  aj as y,
  ak as S,
  L as I,
  k as x,
  cQ as B,
  al as D,
  am as j,
  bw as H,
  cR as R,
  ce as M,
  cS as A,
  bK as _,
  m as V,
} from "./index.659fabbf.js";
import { S as E, G as O } from "./UploadInstructions.44ed80b7.js";
import { I as Z } from "./Input.97539e13.js";
import { A as W } from "./ActionButton.1cbc2cf9.js";
import { _ as $ } from "./UploadRevisionForm.module.37c9033c.js";
import { R as L, j as T } from "./user.15617609.js";
let U = m + " B9j34t",
  z = { content: m + " B9j34t" },
  P = { ...p, ...z },
  F = (e) => {
    let { meta: t, actions: n } = e,
      { dispatch: r, device: l } = d("device"),
      c = s(),
      u = s(),
      [m, N] = a(!1),
      [y, S] = a(null),
      [I, x] = a(null),
      [B, D] = a(null),
      j = async (e, s, a, i) => {
        N(!0), S(null);
        try {
          let o = w();
          f([
            { field: e, validator: g },
            { field: s, validator: o },
          ]);
          let n = {
            file: s.files[0],
            summary: e.value,
            songId: t.songId.toString(),
            force: a,
          };
          await b(r, n, i), D(null);
        } catch (e) {
          e instanceof C ? (x(!0), D(e)) : (x(!1), S(e));
        }
        N(!1);
      },
      H = i(
        (e) => {
          e.preventDefault();
          let t = new h();
          return j(u.current, c.current, I, t.signal), t.abort.bind(t);
        },
        [u, c, I]
      ),
      R = t.tracks && t.tracks.length > 2;
    return o(
      "form",
      { noValidate: !0, className: $.form, onSubmit: H, action: "" },
      o(k, { styles: p, error: y }),
      o(
        "p",
        { className: $.motto, "aria-label": "motto" },
        "Download the latest revision from the list below, make your edits,",
        o("br", null),
        "save the result and upload it using the form below.",
        R &&
          o(
            "span",
            { role: "warning" },
            o("br", null),
            "Please make sure to keep all the tracks in the resulting file."
          )
      ),
      o(O, {
        id: "revisionFile",
        ref: c,
        name: "file",
        error: B || y,
        popup: !0,
        errorStyles: B ? P : p,
      }),
      o(E, { device: l, styles: $, mode: "revision" }),
      o(Z, {
        ref: u,
        name: "summary",
        type: "textarea",
        error: y,
        placeholder:
          "Briefly explain your changes (fixed errors, replaces with whole new version, corrected tempo, etc)",
        styles: $,
        errorStyles: p,
        popup: !0,
      }),
      o(
        "div",
        { className: $.actions },
        o(
          "a",
          { className: v.popupButtonLinkGreen, onClick: n.back },
          "Cancel"
        ),
        o(W, {
          id: B ? "submitRevisionButtonWarning" : "submitRevisionButton",
          title: I ? "Submit anyway" : "Submit revision",
          processing: m,
        })
      ),
      o(
        "p",
        { className: $.notice },
        "Once processing is complete, we'll send you an email notification,",
        o("br", null),
        "and the site will display the new revision."
      )
    );
  },
  G = "w31p8",
  Y = "w3261",
  q = "w3dp",
  K = "w3a5",
  Q = "w31q",
  X = "w3n5",
  J = "w32aw",
  ee = "w3s9",
  et = "w3e7",
  es = "w31fb",
  ea = {
    section: "w31p8",
    current: "w3261",
    currentText: "w3dp",
    options: "w3a5",
    reason: "w31q",
    text: "w3n5",
    textarea: "w32aw",
    title: "w3s9",
    notice: "w3e7",
    actions: "w31fb",
  },
  ei = "revisionReports";
function eo(e, t) {
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
function en(e) {
  let t = y(ei) || [];
  t.push(e), S(ei, t);
}
let er = n((e) => {
    let { meta: t, actions: a } = e,
      n = s(),
      { dispatch: l } = d(),
      [c, u] = r(eo, {
        form: !1,
        processing: !1,
        error: null,
        reason: null,
        message: null,
        success: !1,
      }),
      m = async (e, t, s, i) => {
        u({ type: "submit" });
        try {
          N(t, s);
          let o = {
            songId: e.songId,
            revisionId: e.revisionId,
            kind: t,
            summary: s,
          };
          await T(o, i),
            en(e.revisionId),
            u({ type: "success" }),
            setTimeout(a.success, 0),
            l("curiosity/event", {
              event: "Reported revision",
              Reason: L[t],
              Summary: s,
              "Song id": e.songId.toString(),
            });
        } catch (e) {
          u({ type: "failure", error: e });
        }
      },
      w = i(
        (e) => {
          e.preventDefault();
          let s = new h();
          return m(t, c.reason, n.current.value, s.signal), s.abort.bind(s);
        },
        [c, t]
      );
    return c.success
      ? o(
          "section",
          { className: ea.section, "data-section": "report" },
          o("p", null, "Your report has been sent."),
          o(
            "p",
            { className: ea.notice },
            "We'll review your report as soon as possible. ",
            o("br", null),
            "And will roll back the revision in case of a problem."
          ),
          o(
            "div",
            { className: ea.actions },
            o("a", { className: v.popupButtonOrange, onClick: a.back }, "OK")
          )
        )
      : o(
          "section",
          { className: ea.section, "data-section": "report" },
          o(
            "form",
            { noValidate: !0, className: ea.form, onSubmit: w, action: "" },
            o(k, { styles: p, error: c.error }),
            o(
              "p",
              { className: ea.title },
              "Do you think that the new revision made the tab worse?",
              o("br", null),
              "If so, please tell us why:"
            ),
            o(
              "ul",
              { className: ea.options },
              Object.keys(L).map((e) => {
                let t = {
                  key: e,
                  className: ea.reason,
                  onClick: () => u({ type: "toggle", kind: e }),
                };
                return o(
                  "li",
                  t,
                  o("input", {
                    type: "radio",
                    name: "reason",
                    checked: c.reason === e,
                    value: e,
                  }),
                  o("label", { className: ea.text }, L[e])
                );
              })
            ),
            o(Z, {
              ref: n,
              name: "comment",
              type: "textarea",
              error: c.error,
              placeholder:
                "Provide additional details on problematic tracks, measures, notes, etc.",
              styles: ea,
              errorStyles: p,
              popup: !0,
            }),
            o(
              "p",
              { className: ea.notice },
              "Note! Your remarks will be sent to the author of the revision."
            ),
            o(
              "div",
              { className: ea.actions },
              o(
                "a",
                { className: v.popupButtonLinkOrange, onClick: a.back },
                "Cancel"
              ),
              o(W, {
                id: "submitReportButton",
                title: "Report",
                processing: c.processing,
              })
            ),
            o(
              "p",
              { className: ea.notice },
              "We'll review your report as soon as possible. ",
              o("br", null),
              "And will roll back the revision in case of a problem."
            )
          )
        );
  }),
  el = "\x01",
  ec = /(\b(https?):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi,
  eu = (e) => e.replace(ec, (e) => "\x01" + e + "\x01").split("\x01");
function em(e) {
  let { children: t, styles: s } = e,
    a = eu(t),
    i = a.map((e, t) => {
      let a = ec.test(e);
      if (a)
        return o(
          "a",
          {
            className: s.link,
            key: `url${t}`,
            href: e,
            rel: "noopener noreferrer ugc",
            target: "_blank",
          },
          e
        );
      let i = e.endsWith("(via editor)");
      return i
        ? o(
            l,
            { key: `editor${t}` },
            e.replace("(via editor)", ""),
            o(
              I,
              {
                className: s.smallLink,
                key: `link${t}`,
                to: `${window.location.pathname}/editor`,
              },
              "via Songsterr Tab Editor"
            )
          )
        : o(l, { key: `text${t}` }, e);
    });
  return o("p", { className: s.message }, i);
}
let ep = "C7k1rh",
  ed = "C7k1rh C7kks",
  eh = "C7k1rh C7k2yw",
  ev = "C7k2fj",
  ek = "C7k1rh C7k2yw C7k22w",
  ew = "C7kwj",
  ef = "C7kwj C7k11e",
  eg = "C7k182",
  eb = "C7k23d",
  eC = "C7k2fj C7kel",
  eN = "C7k1dv",
  ey = {
    item: "C7k1rh",
    itemActive: "C7k1rh C7kks",
    itemInvalid: "C7k1rh C7k2yw",
    message: "C7k2fj",
    itemInvalidActive: "C7k1rh C7k2yw C7k22w",
    link: "C7kwj",
    smallLink: "C7kwj C7k11e",
    links: "C7k182",
    person: "C7k23d",
    block: "C7k2fj C7kel",
    blockReasons: "C7k1dv",
  };
function eS() {
  return o(
    "svg",
    { width: 9, height: 10, viewBox: "0 0 9 10" },
    o("path", {
      d: "m6.59 9.99-4.9.01C1.11 10 .64 9.55.64 8.99V2.18c0-.2.15-.38.4-.38h6.51c.22 0 .4.16.4.38v6.81c0 .56-.49 1-1.07 1h-.29ZM1.46 2.55v6.36c0 .13.12.25.28.25h5.09c.15 0 .28-.12.28-.25V2.55H1.46Z",
    }),
    o("path", {
      d: "M5.91 2.55h-3.4c-.21 0-.38-.16-.38-.37V1.12C2.13.5 2.65 0 3.27 0h1.85c.64 0 1.16.5 1.16 1.12v1.06c0 .21-.17.37-.37.37ZM2.97 1.8h2.48v-.59c0-.2-.18-.39-.39-.37H3.34c-.2-.02-.37.17-.37.37v.59Zm1.32 6.54c-.23 0-.42-.18-.42-.37V3.81c0-.2.19-.37.42-.37.22 0 .42.17.42.37v4.16c0 .19-.2.37-.42.37Zm-1.54 0c-.23 0-.41-.18-.41-.37V3.81c0-.2.18-.37.41-.37.24 0 .42.17.42.37v4.16c0 .19-.18.37-.42.37Zm3.09 0c-.24 0-.4-.18-.4-.37V3.81c0-.2.16-.37.4-.37.23 0 .42.17.42.37v4.16c0 .19-.19.37-.42.37Z",
    }),
    o("path", {
      d: "M8.17 2.61H.41C.17 2.61 0 2.4 0 2.2c0-.21.17-.41.41-.41h7.76c.24 0 .41.2.41.41 0 .2-.17.41-.41.41Z",
    })
  );
}
let eI = "Boi34j",
  ex = "Boi1x6",
  eB = "Boi32g",
  eD = { wrapper: "Boi34j", link: "Boi1x6", linkDisabled: "Boi32g" },
  ej = (e) => {
    let t = `You are about to delete your revision permanently. To confirm deletion, please ID for revision you want to delete "${e}" into the field below:`,
      s = window.prompt(t);
    return (
      s === e.toString() ||
      (window.alert("Confirmation string does not match artist and title."), !1)
    );
  },
  eH = (e) => {
    let { revisionId: t, songLink: s } = e,
      { dispatch: i } = d(),
      [n, r] = a(!1),
      l = async (e) => {
        e.preventDefault();
        try {
          r(!0),
            ej(t) && (await B(i, { revisionId: t }), i("navigate", s)),
            r(!1);
        } catch (e) {
          r(!1);
        }
      };
    return o(
      "a",
      { className: eD.link, onClick: l },
      !n && o(eS, null),
      n && o(x, { width: 10, height: 10, fill: "#6ccd43" }),
      " delete"
    );
  };
function eR() {
  return o(
    "svg",
    { width: 15, height: 8, viewBox: "0 0 15 8" },
    o("path", {
      d: "M8 2.9a1.1 1.1 0 0 0 0 2.2 1.1 1.1 0 0 0 0-2.2zm0 4a2.9 2.9 0 0 1 0-5.8 2.9 2.9 0 0 1 0 5.8zM14.5 3C13.2 2 10.9.3 8 .3S2.8 2 1.5 3c-.9.6-.9 1.4 0 2C2.8 6 5.1 7.7 8 7.7S13.2 6 14.5 5c.9-.6.9-1.4 0-2z",
    })
  );
}
function eM() {
  return o(
    "svg",
    { width: 8, height: 8, viewBox: "0 0 8 8" },
    o("path", { d: "M6 0H2v4H0l4 4L8 4H6V0z" })
  );
}
function eA() {
  return o(
    "svg",
    { width: 8, height: 8, viewBox: "0 0 8 8" },
    o("path", {
      d: "M7.45 4.71 6.17 2.67 7.46.61c.02-.04.03-.1 0-.14A.139.139 0 0 0 7.34.4H1.88V.13c0-.07-.31-.13-.39-.13-.07 0-.41.06-.41.13v7.73c0 .08.36.13.43.13.08 0 .46-.04.46-.12V4.93h5.38c.07 0 .13-.06.13-.13 0-.03-.02-.06-.03-.09z",
    })
  );
}
function e_() {
  return o(
    "svg",
    { width: 10, height: 10, viewBox: "0 0 10 10" },
    o("path", {
      d: "m9.76 2.66-.53.47L7.21.97l.45-.44c.58-.58 1-.27 1.56.33.56.59 1.11 1.23.54 1.8Zm-.6 2.32v3.31c.01.8-.51 1.47-1.36 1.47H6.33c-1.79 0-4.5.01-4.92 0C.83 9.76 0 9.4 0 8.32V1.98C0 1.38.45.61 1.42.61h4.54v.81l-4.54.01c-.4-.01-.59.17-.59.55 0 .39 0 2.52.01 6.4-.01.37.18.56.58.56h6.36c.37.01.56-.2.56-.63s.01-1.54.01-3.33h.81ZM6.97 2.12l.25-.24-.47-.49-.25.23-3.15 3.03-.07.07-.02.08-.67 2.29-.17.59.59-.17 2.2-.62.08-.03.06-.06 3.16-3.02.24-.24-.47-.49-.25.23-3.08 2.96-1.07-1.13.01-.03 3.08-2.96Z",
    })
  );
}
let eV = (e) => {
    let {
        dispatch: t,
        user: s,
        meta: a,
        experiments: i,
      } = d("user", "meta", "experiments"),
      {
        isCurrent: n,
        isLatest: r,
        isBaseRevision: l,
        isInvalid: c,
        reportAction: u,
        revision: m,
      } = e,
      { revisionId: p, tracks: h } = m,
      v = a.songId.toString(),
      k = h ? Math.min(h - 1, a.partId) : 0,
      w = D(s, j.MANAGE_REVISIONS),
      f = i.download_without_sign_in?.segment === "on" || s?.isLoggedIn,
      g = H(a.current, k),
      b = H(a.current, k, p),
      C = (y(ei) || []).includes(p),
      N = n && r && !c && !l,
      S = s.profile && s.profile.id === m.personId,
      x = new Date(m.createdAt).getTime() > new Date().getTime() - 864e5,
      B = N && !S && !m.isBlocked,
      M = w || (N && S && x),
      A =
        B &&
        o(
          "a",
          { className: C ? eD.linkDisabled : eD.link, onClick: C ? void 0 : u },
          o(eA, null),
          C ? " reported" : " report"
        ),
      _ = M && o(eH, { revisionId: p, songLink: g }),
      V =
        w &&
        o(
          "a",
          { className: eD.link, href: R("Revision", p), target: "_blank" },
          o(e_, null),
          " edit"
        ),
      E =
        !n &&
        o(
          I,
          {
            className: eD.link,
            to: b,
            "aria-label": "view",
            onClick: () =>
              t("curiosity/event", {
                event: "Clicked on View revision link",
                "Song id": v,
              }),
          },
          o(eR, null),
          " view"
        ),
      O =
        f &&
        o(
          "a",
          {
            className: eD.link,
            href: m.source,
            "aria-label": "download",
            download: !0,
            target: "_blank",
            onClick: () =>
              t("curiosity/event", {
                event: "Downloaded revision",
                "Song id": v,
              }),
          },
          o(eM, null),
          " download"
        );
    return o("span", { className: eD.wrapper }, E, A, V, _, O);
  },
  eE = (e) => {
    let t;
    let {
        revision: s,
        isCurrent: a,
        isLatest: i,
        isInvalid: n,
        isBaseRevision: r,
        processing: l,
        locales: c,
        reportAction: u,
      } = e,
      { revisionId: m, isBlocked: p } = s,
      d = M(new Date(s.createdAt), c);
    t =
      n || p
        ? a
          ? ey.itemInvalidActive
          : ey.itemInvalid
        : a
        ? ey.itemActive
        : ey.item;
    let h =
      s.isBlocked &&
      s.reports.length > 0 &&
      o(
        "div",
        { className: ey.block },
        "Block reasons:",
        o(
          "ul",
          { className: ey.blockReasons },
          s.reports.map((e) =>
            o("li", {}, `${A.get(e.kind)}${e.summary ? `: ${e.summary}` : ""}`)
          )
        )
      );
    return o(
      "li",
      { key: m, className: t },
      o(em, { styles: ey }, s.description),
      h,
      o(
        "p",
        { className: ey.links },
        `${d} \u2013 by `,
        o("span", { className: ey.person }, s.person),
        !l &&
          o(eV, {
            revision: s,
            isCurrent: a,
            isLatest: i,
            isBaseRevision: r,
            isInvalid: n,
            reportAction: u,
          })
      )
    );
  },
  eO = "Cca1wi",
  eZ = "Cca13w",
  eW = "Ccahc",
  e$ = "Cca1mk",
  eL = "Cca34p",
  eT = "Cca1z3",
  eU = "Ccame",
  ez = "Cca1lf",
  eP = "Cca1lf Cca1gp",
  eF = "Cca2yf",
  eG = "Cca2yf Cca2uj",
  eY = "Cca1p3",
  eq = {
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
  },
  eK = 38,
  eQ = 107;
!(function (e) {
  (e[(e.HIDDEN = 0)] = "HIDDEN"), (e[(e.SHOWN = 1)] = "SHOWN");
})(e || (e = {})),
  (function (e) {
    (e[(e.HIDDEN = 0)] = "HIDDEN"),
      (e[(e.SHOWN = 1)] = "SHOWN"),
      (e[(e.SUCCESS = 2)] = "SUCCESS");
  })(t || (t = {}));
let eX = (e) => ({ height: e - 76 }),
  eJ = (n) => {
    let { style: r, setStyle: m } = n,
      {
        dispatch: p,
        user: h,
        revisions: k,
        uploads: w,
        meta: f,
        device: g,
        screen: b,
        experiments: C,
      } = d(
        "user",
        "revisions",
        "uploads",
        "meta",
        "device",
        "screen",
        "experiments"
      ),
      { isLoggedIn: N } = h,
      { isLoading: y } = k,
      { revision: S, revisionError: B, revisionSubmitted: D } = w,
      [j, H] = a(e.HIDDEN),
      [R, M] = a(t.HIDDEN),
      A = s(),
      E = s(),
      O = R ? "Report revision" : "Revisions";
    c(() => {
      let e = E.current.scrollHeight,
        t = eX(b.viewport.height).height,
        s = { ...r, height: Math.min(e + 107, t) };
      r.height !== s.height && m(s);
    }, [b, E, k, S, w, R, j]),
      u(() => {
        !1 === h.isLoggedIn &&
          C.download_without_sign_in?.status === "pending" &&
          p("experiments/activate", {
            experimentName: "download_without_sign_in",
            payload: { "Song id": f.songId.toString() },
          });
      }, []);
    let Z = N && S && !B,
      W = N && S && S.songId !== f.songId,
      $ = W ? `${S.artist} ΓÇô ${S.title}` : "",
      L = { success: () => M(t.SUCCESS), back: () => M(t.HIDDEN) },
      T = { back: () => H(e.HIDDEN) },
      U = o(
        "section",
        { className: eq.section, "data-section": "welcome" },
        o("p", { className: eq.motto }, "Have a better tab for this song?"),
        o("p", { className: eq.motto }, "Care to fix the current tab?"),
        o(
          "p",
          { className: eq.subMotto },
          "Submit your corrections for everyone to enjoy!"
        ),
        o(
          "div",
          { className: eq.auth, "aria-label": "auth" },
          "Please ",
          o(I, { "data-link": "signin", to: "/a/wa/signin" }, "sign up"),
          " for free to submit a new revision."
        )
      ),
      z = o(
        "section",
        { className: eq.sectionForm, "data-section": "submit" },
        o("p", { className: eq.motto }, "Have a better tab for this song?"),
        o("p", { className: eq.motto }, "Care to fix the current tab?"),
        o(
          "p",
          { className: eq.subMotto },
          "Submit your corrections for everyone to enjoy!"
        ),
        o(
          "div",
          { className: eq.actions },
          o(
            "a",
            {
              id: "submit-revision-button",
              className: v.popupButtonGreen,
              onClick: () => H(e.SHOWN),
            },
            "Submit a new revision"
          )
        )
      ),
      P = o(
        "section",
        { className: eq.sectionForm, "data-section": "submit" },
        o(F, { meta: f.current, actions: T })
      ),
      G = o(
        "section",
        { className: eq.section, "data-section": "duplicate" },
        o(
          "p",
          { className: eq.motto, "aria-label": "motto" },
          "Submitted version already exists on Songsterr."
        ),
        !W &&
          o(
            "p",
            { className: eq.subMotto, "aria-label": "info" },
            "Uploaded file looks exactly like the latest version of this song."
          ),
        W &&
          o(
            "div",
            null,
            o(
              "p",
              { className: eq.subMotto, "aria-label": "info" },
              "Uploaded file looks like a duplicate of ",
              o("br", null),
              o(I, { to: _(S), "data-link": "duplicate" }, $)
            )
          )
      ),
      Y = o(
        "section",
        { className: eq.section, "data-section": "success" },
        o(
          "div",
          null,
          o(
            "p",
            { className: eq.motto },
            "Thanks for contributing to Songsterr!"
          ),
          o(
            "p",
            { className: eq.subMotto },
            "We are processing the file and will redirect",
            o("br", null),
            "to a new revision as soon as possible."
          ),
          o("div", null, o(x, { fill: "#fefefe", width: 30, height: 30 }))
        )
      ),
      q = i(
        (e, s) =>
          1 === e.length || 0 !== s
            ? { reportAction: null }
            : {
                reportAction: () => {
                  A.current && (A.current.scrollTop = 0),
                    R || M(t.SHOWN),
                    p("curiosity/event", { event: "Clicked on Report link" });
                },
              },
        [A, R]
      ),
      K = k.revisions?.length - 1,
      Q = o(
        "section",
        { className: eq.sectionContent, "data-section": "revisions" },
        o(
          "ul",
          { className: eq.list },
          k.revisions &&
            f.current &&
            k.revisions.map((e, t) =>
              o(eE, {
                revision: e,
                isCurrent: f.current.revisionId === e.revisionId,
                isLatest: 0 === t,
                isBaseRevision: t === K,
                isInvalid: !e.tracks,
                key: e.revisionId,
                locales: g.locale ? [g.locale] : void 0,
                processing: D,
                ...q(k.revisions, t),
              })
            )
        )
      ),
      X = !N && !R,
      J = N && !Z && !R && !j,
      ee = N && !Z && !R && !!j,
      et = Z && !R && !D,
      es = Z && !R && D;
    return o(
      l,
      {},
      o("h3", { className: eq.title }, O),
      o(
        "div",
        { className: eq.scroller, ref: A },
        o(
          "div",
          { className: eq.content, ref: E },
          X && U,
          J && z,
          ee && P,
          et && G,
          es && Y,
          N && !!R && o(er, { meta: f.current, actions: L }),
          !N &&
            !!R &&
            o(
              "section",
              { className: eq.section, "data-section": "welcome" },
              o(
                "div",
                { className: eq.authReport, "aria-label": "auth" },
                "Please ",
                o(I, { "data-link": "signin", to: "/a/wa/signin" }, "sign up"),
                " for free to report issues."
              ),
              o(
                "a",
                { className: v.popupButtonLinkOrange, onClick: () => M(0) },
                "Back to revisions"
              )
            ),
          y &&
            !R &&
            o(
              "div",
              { className: eq.spinner },
              o(x, {
                className: V.revisions,
                width: 25,
                height: 24,
                fill: "#f7f6ee",
              })
            ),
          !y && !R && Q
        )
      )
    );
  };
export { eJ as default };
