import { h as e, p as t, v as r } from "./preact.294f37c2.js";
import { u as n, L as o } from "./index.6eeae9f8.js";
let s = "fpfc",
  a = "fp2oj",
  l = "fpk2",
  i = "fprr",
  c = { error: "fpfc", title: "fp2oj", subtitle: "fpk2", store: "fprr" };
function f() {
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
        let t = f();
        t && (l(t), clearInterval(e));
      }, 50);
      return () => clearTimeout(e);
    }, []),
    r(
      "div",
      { className: c.error },
      r("h5", { className: c.title }, r("span", null, "Something Went Wrong")),
      r(
        "p",
        { className: c.subtitle },
        "Please check your network connection and try to refresh the page."
      ),
      r(
        "p",
        { className: c.subtitle },
        "If the problem persists feel free to ",
        r(o, { to: "/a/wa/help#contact-us" }, "contact us"),
        "."
      ),
      a && r("p", { className: c.subtitle }, "Error ID: ", a)
    )
  );
}
export { p as S, f as g };
