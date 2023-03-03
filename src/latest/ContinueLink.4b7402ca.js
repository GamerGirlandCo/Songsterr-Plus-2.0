import { v as e } from "./preact.294f37c2.js";
import { C as t, u as n, bp as i, av as a, L as r } from "./index.6eeae9f8.js";
let s = "Bze2yc",
  c = "Bze2ni",
  o = "Bze1ng",
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
  let { id: s, className: c, children: o, href: m } = t,
    u = m;
  if (!u) {
    let { meta: e } = n("meta");
    u = i(e.current, e.partId, e.revisionId);
  }
  return e(
    r,
    { id: s, to: u, className: c || a.buttonGreen },
    o || "Click here to continue"
  );
}
export { z as C, l as S };
