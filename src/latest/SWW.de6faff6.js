import { y as e, m as t, v as n } from "./preact.f8a34c73.js";
import { u as o, L as r } from "./index.3637aaf7.js";
function s() {
  if (
    window &&
    "Sentry" in window &&
    "function" == typeof window.Sentry.lastEventId
  )
    return window.Sentry.lastEventId();
}
function a() {
  const { dispatch: a } = o();
  e(() => a("curiosity/error", { error: "Something Went Wrong" }), []);
  const [c, i] = t(void 0);
  return (
    e(() => {
      const e = setInterval(() => {
        const t = s();
        t && (i(t), clearInterval(e));
      }, 50);
      return () => clearTimeout(e);
    }, []),
    n(
      "section",
      { className: "fpfc" },
      n("h5", { className: "fp2oj" }, n("span", null, "Something Went Wrong")),
      n(
        "p",
        { className: "fpk2" },
        "Please check your network connection and try to refresh the page."
      ),
      n(
        "p",
        { className: "fpk2" },
        "If the problem persists feel free to ",
        n(r, { to: "/a/wa/help#contact-us" }, "contact us"),
        "."
      ),
      c && n("p", { className: "fpk2" }, "Error ID: ", c)
    )
  );
}
export { a, s };
//# sourceMappingURL=SWW.de6faff6.js.map
