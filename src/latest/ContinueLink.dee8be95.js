import { a as e } from "./preact.3d326435.js";
import { C as t, u as n, bw as i, j as a, L as s } from "./index.659fabbf.js";
let r = "Bze2yc",
  o = "Bze2ni",
  c = "Bze1ng",
  m = "Bze2x",
  u = {
    exitActive: "Bze2yc",
    enterActive: "Bze2ni",
    enter: "Bze1ng",
    exit: "Bze2x",
  };
function l(n) {
  return e(
    t,
    { ...n, timeout: { enter: 300, exit: 0 }, animationStyles: u },
    e(
      "section",
      { className: n.className, "data-section": n["data-section"] },
      n.children
    )
  );
}
function z(t) {
  let { id: r, className: o, children: c, href: m } = t,
    u = m;
  if (!u) {
    let { meta: e } = n("meta");
    u = i(e.current, e.partId, e.revisionId);
  }
  return e(
    s,
    { id: r, to: u, className: o || a.buttonGreen },
    c || "Click here to continue"
  );
}
export { z as C, l as S };
