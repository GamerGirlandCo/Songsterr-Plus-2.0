import {
  b as e,
  h as r,
  k as a,
  p as t,
  T as o,
  v as n,
} from "./preact.294f37c2.js";
import {
  d as l,
  cm as s,
  bZ as i,
  cn as d,
  aq as u,
  bH as p,
  ar as f,
  G as c,
} from "./index.6eeae9f8.js";
import { a as v } from "./Input.9e959f35.js";
let h = "Bor2lc",
  m = "Bor2lc Bor1vf",
  g = "Bor21p",
  B = "Bore7",
  w = "Bor1iu",
  y = "Bor2h9",
  b = "Bor2h9 Bor2sy",
  N = l + " Bor32q",
  H = s + " Borei",
  k = "Bor2cy",
  x = "Bor18n",
  T = "Bor1xx",
  E = "Bor1je",
  P = "Bor1n1",
  V = {
    field: "Bor2lc",
    popupField: "Bor2lc Bor1vf",
    hint: "Bor21p",
    file: "Bore7",
    input: "Bor1iu",
    readonly: "Bor2h9",
    popupReadonly: "Bor2h9 Bor2sy",
    button: l + " Bor32q",
    buttonBlue: s + " Borei",
    layer: "Bor2cy",
    inner: "Bor18n",
    label: "Bor1xx",
    svgColor: "Bor1je",
    svgStroke: "Bor1n1",
  };
function G() {
  for (var a = arguments.length, t = Array(a), o = 0; o < a; o++)
    t[o] = arguments[o];
  let n = e();
  return (
    r(() => {
      t.forEach((e) => {
        e && ("function" == typeof e ? e(n.current) : (e.current = n.current));
      });
    }, [t]),
    n
  );
}
let L = a((a, l) => {
  let { id: s, name: c, error: h, errorStyles: m, popup: g } = a,
    [B, w] = t(null),
    [y, b] = t(null),
    [N, H] = t(null),
    k = G(l, e(null)),
    x = o((e) => {
      let r = e.target.files.length ? e.target.files[0].name : null;
      w(r);
    }, []);
  r(() => {
    let e = 0,
      r = (e) => {
        e.preventDefault(), e.stopPropagation();
      },
      a = (r) => {
        r.preventDefault(),
          r.stopPropagation(),
          e++,
          r.dataTransfer.items && r.dataTransfer.items.length > 0 && b(!0);
      },
      t = (r) => {
        r.preventDefault(), r.stopPropagation(), --e > 0 || b(!1);
      },
      o = (r) => {
        r.preventDefault(),
          r.stopPropagation(),
          b(!1),
          r.dataTransfer.files &&
            r.dataTransfer.files.length > 0 &&
            (n(r.dataTransfer.files), r.dataTransfer.clearData(), (e = 0));
      },
      n = (e) => {
        try {
          k.current.files = e;
          let r = p();
          f([{ field: k.current, validator: r }]),
            H(null),
            w(e[0].name),
            (k.current.files = e);
        } catch (e) {
          H(e), w(null), (k.current.files = null);
        }
      };
    return (
      window.addEventListener("dragenter", a),
      window.addEventListener("dragleave", t),
      window.addEventListener("dragover", r),
      window.addEventListener("drop", o),
      () => {
        window.removeEventListener("dragenter", a),
          window.removeEventListener("dragleave", t),
          window.removeEventListener("dragover", r),
          window.removeEventListener("drop", o);
      }
    );
  }, []);
  let T = i(N || h, c),
    E = n(
      "span",
      { className: g ? V.popupReadonly : V.readonly, "data-info": "filename" },
      B
    ),
    P = n(
      "span",
      { className: g ? V.buttonBlue : V.button, "data-info": "button" },
      "Choose your Guitar Pro file"
    );
  return n(
    "label",
    { className: g ? V.popupField : V.field, "data-input": c },
    g
      ? n(u, { styles: m, errorMessage: T, name: c })
      : n("div", { className: V.hint, "data-label": c }, "Guitar Pro Tab"),
    n("input", {
      id: s,
      accept: d.map((e) => `.${e}`).join(", "),
      name: c,
      type: "file",
      ref: k,
      onChange: x,
      className: V.file,
    }),
    y &&
      n(
        "div",
        { className: V.layer, "data-id": s },
        n(
          "div",
          { className: V.inner },
          n(
            "svg",
            { width: "188", height: "100", fill: "none" },
            n("path", {
              className: V.svgStroke,
              strokeWidth: "4",
              strokeDasharray: "8 8",
              d: "M2 2h104v24H82v48H2V2z",
            }),
            n(
              "mask",
              {
                id: "a",
                maskUnits: "userSpaceOnUse",
                x: "80",
                y: "24",
                width: "108",
                height: "76",
              },
              n("path", {
                fill: "#fff",
                d: "M186 24H82a2 2 0 00-2 2v72c0 1.1.9 2 2 2h104a2 2 0 002-2V26a2 2 0 00-2-2z",
              })
            ),
            n(
              "g",
              { mask: "url(#a)" },
              n("path", {
                className: V.svgStroke,
                strokeWidth: "8",
                d: "M186 24H82a2 2 0 00-2 2v72c0 1.1.9 2 2 2h104a2 2 0 002-2V26a2 2 0 00-2-2z",
              }),
              n("path", {
                className: V.svgColor,
                d: "M132.02 77H135.98V63.74H149.06V60.2H135.98V46.94H132.02V60.2H118.94V63.74H132.02V77Z",
              })
            )
          ),
          n("div", { className: V.label }, "Drop GuitarPro file here")
        )
      ),
    !g && n(v, { name: c, errorMessage: T }),
    B ? E : P
  );
});
function j(e) {
  let r = c(e.os)
      ? "https://play.google.com/store/apps/details?id=org.herac.tuxguitar.android.activity.admob"
      : "https://sourceforge.net/projects/tuxguitar",
    a = { rel: "noopener noreferrer", target: "_blank" },
    t = n("a", { href: "https://www.guitar-pro.com", ...a }, "Guitar Pro"),
    o = n("a", { href: r, ...a }, "TuxGuitar");
  return { linkToGp: t, linkToTux: o };
}
let D = (e) => {
  let { device: r, styles: a, mode: t } = e,
    { linkToGp: o, linkToTux: l } = j(r),
    s = "revision" === t ? "To edit a tab" : "To create a tab";
  return n(
    "p",
    { className: a.notice, "aria-label": "requirements" },
    `${s} you'll need to either buy `,
    o,
    " software or use a free ",
    l,
    " alternative."
  );
};
export { L as G, D as S };
