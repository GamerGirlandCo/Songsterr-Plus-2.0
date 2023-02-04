import { d as e, a as t } from "./preact.3d326435.js";
import {
  y as s,
  n as a,
  U as r,
  L as o,
  j as l,
  T as n,
} from "./index.659fabbf.js";
import { A as i } from "./ActionButton.1cbc2cf9.js";
import { P as c } from "./Panel.693a3a8d.js";
import { _ as u } from "./GenericPanel.module.67ac8ae5.js";
import { S as d, C as m } from "./ContinueLink.dee8be95.js";
import { c as p, s as f } from "./google.d50e47be.js";
import "./user.15617609.js";
var h = null,
  y = null,
  v = null,
  j = null,
  g = null,
  b = null,
  w = null,
  x = null,
  N = null,
  S = null,
  k = [h, y, v, j, g, b, w, x, N, S];
class P extends e {
  constructor(e) {
    super(e), (this.state = { error: null, processing: !1, next: !1 });
  }
  deactivate = async (e) => {
    e.preventDefault();
    try {
      this.setState({ error: null, processing: !0 }),
        await p(),
        this.props.dispatch("user/deactivate"),
        this.setState({ processing: !1, error: null, next: !0 });
    } catch (e) {
      this.setState({ processing: !1, error: f(e) });
    }
  };
  render() {
    let { gettext: e } = a(k),
      s = t(
        d,
        {
          key: "deactivate",
          className: u.section,
          "data-section": "deactivation",
        },
        t(
          "h4",
          { className: u.title },
          e(
            "Are you sure you want to permanently delete you account? You will loose all your user data."
          )
        ),
        t(
          "form",
          { noValidate: !0, onSubmit: this.deactivate },
          t(r, { error: this.state.error }),
          t(
            "div",
            { className: u.actions },
            t(i, {
              title: e("I'm sure, delete my account"),
              processing: this.state.processing,
            }),
            t(o, { to: "/a/wa/account", className: l.buttonLink }, e("Cancel"))
          )
        )
      ),
      p = t(
        d,
        { key: "done", className: u.section, "data-section": "done" },
        t(
          "h4",
          { className: u.title },
          e("Your account was successfully deleted.")
        ),
        t(m, {}, e("Farewell!"))
      ),
      f = this.state.next ? p : s;
    return t(
      c,
      { title: e("Delete account"), id: this.props.id },
      t(n, null, f)
    );
  }
}
var A = s(P, "user");
export { A as default };
