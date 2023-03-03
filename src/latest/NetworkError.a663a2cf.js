import { v as e, h as r } from "./preact.294f37c2.js";
import { L as o, u as t } from "./index.6eeae9f8.js";
let s = "Bho10o",
  a = "Bho1s0",
  n = "Bho1fy",
  l = { error: "Bho10o", title: "Bho1s0", subtitle: "Bho1fy" };
function i() {
  return e(
    "div",
    { className: l.error },
    e("h1", { className: l.title }, e("span", null, "Page Not Found!")),
    e(
      "h2",
      { className: l.subtitle },
      "Please try ",
      e(o, { to: "/" }, "searching"),
      " for the song you need."
    )
  );
}
function c() {
  let { dispatch: o } = t();
  return (
    r(() => o("curiosity/error", { error: "Network" }), []),
    e(
      "div",
      { className: l.error },
      e("h1", { className: l.title }, e("span", null, "Network Error")),
      e(
        "h2",
        { className: l.subtitle },
        "Please, check your network connection and try again."
      )
    )
  );
}
export { i as N, c as a };
