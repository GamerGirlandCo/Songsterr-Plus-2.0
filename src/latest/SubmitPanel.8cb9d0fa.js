import {
  b as t,
  p as a,
  T as e,
  v as i,
  x as l,
  h as s,
} from "./preact.294f37c2.js";
import { P as n } from "./Panel.404ed07e.js";
import { I as o } from "./Input.9e959f35.js";
import { G as r, S as u } from "./UploadInstructions.4c3173fb.js";
import {
  u as c,
  bG as d,
  aq as m,
  bH as f,
  ar as b,
  bI as p,
  bJ as v,
  ay as x,
  b9 as h,
  L as H,
  av as V,
  bK as g,
} from "./index.6eeae9f8.js";
import { A as C } from "./ActionButton.5286af2f.js";
import { S as k } from "./Stub.f5c89f87.js";
let w = "Bv92k3",
  M = "Bv92se",
  Z = { actions: "Bv92k3", notice: "Bv92se" },
  y = () => {
    let { dispatch: l, device: s } = c("device"),
      n = t(),
      x = t(),
      h = t(),
      [H, V] = a(!1),
      [g, k] = a(null),
      w = async (t, a, e, i) => {
        V(!0), k(null);
        try {
          let s = f();
          b([
            { field: t, validator: p },
            { field: a, validator: p },
            { field: e, validator: s },
          ]);
          let n = {
            file: e.files[0],
            title: a.value,
            artist: t.value,
            difficulty: "Intermediate",
          };
          await v(l, n, i);
        } catch (t) {
          console.error(t), k(t);
        }
        V(!1);
      },
      M = e(
        (t) => {
          t.preventDefault();
          let a = new d();
          return w(n.current, x.current, h.current, a.signal), a.abort.bind(a);
        },
        [n, x, h]
      );
    return i(
      "form",
      { noValidate: !0, className: Z.form, onSubmit: M, action: "" },
      i(m, { error: g }),
      i(o, { type: "text", label: "Artist", ref: n, name: "artist", error: g }),
      i(o, { type: "text", label: "Title", ref: x, name: "title", error: g }),
      i(u, { device: s, styles: Z, mode: "tab" }),
      i(r, { id: "tabFile", ref: h, name: "file", error: g }),
      i(
        "div",
        { className: Z.actions },
        i(C, { id: "submitTab", title: "Submit", processing: H })
      )
    );
  };
function N() {
  return i(
    "svg",
    { width: 189, height: 105, viewBox: "0 0 189 105" },
    i("path", {
      d: "M62 39C63.1046 39 64 38.1046 64 37C64 35.8954 63.1046 35 62 35V39ZM127 35C125.895 35 125 35.8954 125 37C125 38.1046 125.895 39 127 39V35ZM185 38V102H189V38H185ZM186 101H3V105H186V101ZM4 102V38H0V102H4ZM3 39H62V35H3V39ZM127 39H186V35H127V39ZM3 101C3.55228 101 4 101.448 4 102H0C0 103.657 1.34316 105 3 105V101ZM185 102C185 101.448 185.448 101 186 101V105C187.657 105 189 103.657 189 102H185ZM189 38C189 36.3431 187.657 35 186 35V39C185.448 39 185 38.5523 185 38H189ZM4 38C4 38.5523 3.55228 39 3 39V35C1.34315 35 0 36.3431 0 38H4Z",
      fill: "#3A3A3A",
    }),
    i("path", {
      d: "M92.5 68C92.5 69.1046 93.3954 70 94.5 70C95.6046 70 96.5 69.1046 96.5 68H92.5ZM95.9142 1.08579C95.1332 0.304738 93.8668 0.304738 93.0858 1.08579L80.3579 13.8137C79.5768 14.5948 79.5768 15.8611 80.3579 16.6421C81.1389 17.4232 82.4052 17.4232 83.1863 16.6421L94.5 5.32843L105.814 16.6421C106.595 17.4232 107.861 17.4232 108.642 16.6421C109.423 15.8611 109.423 14.5948 108.642 13.8137L95.9142 1.08579ZM96.5 68V2.5H92.5V68H96.5Z",
      fill: "#3A3A3A",
    })
  );
}
let B = "Bkk4b",
  A = "Bkk227",
  S = "Bkk1g9",
  j = { title: "Bkk4b", section: "Bkk227", notice: "Bkk1g9" };
var I = null,
  L = null,
  P = null,
  G = null,
  T = null,
  U = null,
  q = null,
  D = null,
  F = null,
  J = null,
  K = [I, L, P, G, T, U, q, D, F, J];
let R = l((t) => {
  let { gettext: a } = x(K),
    { dispatch: e, uploads: l, user: o } = c("uploads", "user"),
    { song: r, songSubmitted: u, songError: d } = l,
    { isLoggedIn: m } = o,
    f = !m,
    b = m && !r,
    p = m && r && !d,
    v = p && !u,
    C = p && u;
  return (
    s(() => e("upload/reset"), []),
    i(
      n,
      { title: "Submit Tab", id: t.id },
      f &&
        i(k, {
          id: "submit",
          header: a("Have a tab to share?"),
          icon: () => i(N, null),
          hint: () =>
            i(
              "span",
              {},
              a("Please "),
              i(
                H,
                { to: "/a/wa/signin?next=submit", "data-link": "signin" },
                a("sign up")
              ),
              a(" for free to submit your tab.")
            ),
        }),
      b &&
        i(
          "section",
          { className: j.section, "data-section": "submit" },
          i(
            "h4",
            { className: j.title },
            a("Have a tab to share?"),
            i("br", null),
            a(
              "Upload it in Guitar\xa0Pro format and fill\xa0in\xa0the\xa0fields below."
            )
          ),
          i(
            "div",
            null,
            i(
              "p",
              { className: j.notice },
              a(
                "Your tab will appear on\xa0the\xa0site in\xa0a\xa0few\xa0minutes and we'll send you an\xa0email with\xa0a\xa0link\xa0to\xa0it."
              )
            ),
            i(y, null)
          )
        ),
      v &&
        i(
          "section",
          { className: j.section, "data-section": "duplicate" },
          i(
            "h4",
            { className: j.title },
            a("Submitted song already exists on Songsterr.")
          ),
          i(
            "div",
            null,
            i(
              "p",
              { className: j.notice },
              a(
                "If you feel that you have a better version, please submit it via Upload\xa0New\xa0Revision button on existing song's page."
              )
            ),
            i(
              H,
              { className: V.buttonGreen, to: g(r) },
              a("View existing song")
            )
          )
        ),
      C &&
        i(
          "section",
          { className: j.section, "data-section": "success" },
          i(
            "h4",
            { className: j.title },
            a("Thanks for contributing to Songsterr!")
          ),
          i(
            "div",
            null,
            i(
              "p",
              { className: j.notice },
              a("We are processing your tab"),
              i("br", null),
              a("and will redirect to it as soon as possible.")
            ),
            i("div", null, i(h, { fill: "#777", width: 25, height: 20 }))
          )
        )
    )
  );
});
export { R as default };
