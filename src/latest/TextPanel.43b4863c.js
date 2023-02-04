import { d as e, q as t, h as a, a as o } from "./preact.3d326435.js";
import { P as n } from "./Panel.693a3a8d.js";
import { u as r, S as s, bN as i, ac as l } from "./index.659fabbf.js";
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
      let o = t(s);
      a(() => {
        i(o, this.props.route.page);
      }, [this.props.route.page]),
        a(() => {
          let e;
          let t = document.getElementById("manage-consent");
          return (
            t &&
              ((e = (e) => {
                o.dispatch("consent/view", {
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
    return o(
      n,
      { title: e.title || m[e.slug] || "Placeholder", id: e.slug },
      o(
        "div",
        { className: p.section },
        e.isLoading &&
          o(l, {
            level: "info",
            title: "Loading...",
            action: "",
            reason: "textpage_loading",
          }),
        e.isError &&
          o(l, {
            level: "info",
            title: "Something went wrong",
            action: "Please, try to reload page.",
            reason: "textpage_error",
          }),
        !e.isLoading &&
          !e.isError &&
          o("div", {
            className: p.textpage,
            dangerouslySetInnerHTML: { __html: e.content },
          })
      )
    );
  }
}
export { g as TextPanel, g as default };
