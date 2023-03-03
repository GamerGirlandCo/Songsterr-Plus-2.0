import { _ as e, q as t, h as o, v as n } from "./preact.294f37c2.js";
import { P as a } from "./Panel.404ed07e.js";
import { u as r, be as s, bL as i, A as l } from "./index.6eeae9f8.js";
let c = "Cbj2o2",
  d = "Cbj22m",
  p = { textpage: "Cbj2o2", section: "Cbj22m" },
  m = {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    dnsmpd: "Do Not Sell My Personal Information",
  };
class g extends e {
  render() {
    let { textpage: e } = r("textpage");
    {
      let n = t(s);
      o(() => {
        i(n, this.props.route.page);
      }, [this.props.route.page]),
        o(() => {
          let e;
          let t = document.getElementById("manage-consent");
          return (
            t &&
              ((e = (e) => {
                n.dispatch("consent/view", {
                  suite: "tcf",
                  view: "details",
                  options: null,
                }),
                  e.preventDefault();
              }),
              t.addEventListener("click", e)),
            () => t && e && t.removeEventListener("click", e)
          );
        }, [e.content]);
    }
    return n(
      a,
      { title: e.title || m[e.slug] || "Placeholder", id: e.slug },
      n(
        "div",
        { className: p.section },
        e.isLoading &&
          n(l, {
            level: "info",
            title: "Loading...",
            action: "",
            reason: "textpage_loading",
          }),
        e.isError &&
          n(l, {
            level: "info",
            title: "Something went wrong",
            action: "Please, try to reload page.",
            reason: "textpage_error",
          }),
        !e.isLoading &&
          !e.isError &&
          n("div", {
            className: p.textpage,
            dangerouslySetInnerHTML: { __html: e.content },
          })
      )
    );
  }
}
export { g as TextPanel, g as default };
