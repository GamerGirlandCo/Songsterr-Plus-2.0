import { a as e } from "./preact.3d326435.js";
let a = "Bx22t6",
  t = "Bx22u6",
  x = "Bx2306",
  s = "Bx2306 Bx21yv",
  d = "Bx22bi",
  i = {
    stub: "Bx22t6",
    text: "Bx22u6",
    header: "Bx2306",
    headerRed: "Bx2306 Bx21yv",
    hint: "Bx22bi",
  };
function r(a) {
  let { id: t, icon: x, header: s, headerColor: d, hint: r, children: B } = a,
    l = "red" === d ? i.headerRed : i.header;
  return e(
    "div",
    { className: i.stub, "data-stub": t },
    x(),
    e(
      "div",
      { className: i.text },
      e("div", { className: l }, s),
      r && e("div", { className: i.hint, "aria-label": "hint" }, r())
    ),
    B
  );
}
export { r as S };
