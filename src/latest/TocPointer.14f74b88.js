import { a as e } from "./preact.3d326435.js";
let o = "Bab1m2",
  a = "Bab317",
  t = "Bab1e0",
  l = "Bab3z",
  i = "Bab2ln",
  r = "Bab17n",
  n = {
    hidden: "Bab1m2",
    top: "Bab317",
    up: "Bab1e0",
    HowToReadTabPanel: "Bab3z",
    HelpPanel: "Bab2ln",
    tocArrow: "Bab17n",
  },
  c = function () {
    let o =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "top";
    return e("a", { id: o, className: n.hidden });
  },
  d = function (o) {
    let a =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#top";
    return e(
      "div",
      { className: n.top },
      e(
        "a",
        { href: a, className: `${n.up} ${n[o]}` },
        e(
          "svg",
          {
            width: 54,
            height: 54,
            viewBox: "0 0 54 54",
            "aria-labelledby": "help-toc",
          },
          e(
            "defs",
            null,
            e(
              "filter",
              {
                id: "toc_shadow",
                width: "200%",
                height: "200%",
                x: "-50%",
                y: "-50%",
              },
              e("feGaussianBlur", {
                stdDeviation: 2.1468,
                in: "SourceGraphic",
              }),
              e("feOffset", { dy: 2, result: "toca" }),
              e("feFlood", { floodColor: "#000000", floodOpacity: 0.15 }),
              e("feComposite", { in2: "toca", operator: "in", result: "tocb" }),
              e("feBlend", { in: "SourceGraphic", in2: "tocb", mode: "normal" })
            )
          ),
          e("title", { id: "help-toc" }, "Table of Content"),
          e("circle", { cx: 27, cy: 27, r: 20, filter: "url(#toc_shadow)" }),
          e("path", {
            className: n.tocArrow,
            d: "M27 20v14m-7-7l7-7 7 7",
            "stroke-width": 2,
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          })
        )
      )
    );
  };
export { d as T, c as a };
