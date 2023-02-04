import { h as e, p as t, a as r } from "./preact.3d326435.js";
import { u as n, L as o } from "./index.659fabbf.js";
let s = "fpfc",
  a = "fp2oj",
  l = "fpk2",
  i = "fprr",
  f = { error: "fpfc", title: "fp2oj", subtitle: "fpk2", store: "fprr" };
function c() {
  if (
    window &&
    "Sentry" in window &&
    "function" == typeof window.Sentry.lastEventId
  )
    return window.Sentry.lastEventId();
}
function p() {
  let { dispatch: s } = n();
  e(() => s("curiosity/error", { error: "Something Went Wrong" }), []);
  let [a, l] = t(void 0);
  return (
    e(() => {
      let e = setInterval(() => {
        let t = c();
        t && (l(t), clearInterval(e));
      }, 50);
      return () => clearTimeout(e);
    }, []),
    r(
      "div",
      { className: f.error },
      r("h5", { className: f.title }, r("span", null, "Something Went Wrong")),
      r(
        "p",
        { className: f.subtitle },
        "Please check your network connection and try to refresh the page."
      ),
      r(
        "p",
        { className: f.subtitle },
        "If the problem persists feel free to ",
        r(o, { to: "/a/wa/help#contact-us" }, "contact us"),
        "."
      ),
      a && r("p", { className: f.subtitle }, "Error ID: ", a)
    )
  );
}
export { p as S, c as g };
