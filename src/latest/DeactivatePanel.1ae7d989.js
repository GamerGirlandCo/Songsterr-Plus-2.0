import { _ as e, v as t } from "./preact.294f37c2.js";
import {
  s as a,
  ay as s,
  aq as r,
  L as o,
  av as l,
  T as n,
} from "./index.6eeae9f8.js";
import { A as i } from "./ActionButton.5286af2f.js";
import { P as c } from "./Panel.404ed07e.js";
import { _ as u } from "./GenericPanel.module.67ac8ae5.js";
import { S as m, C as d } from "./ContinueLink.4b7402ca.js";
import { c as p, s as f } from "./google.ad6b2083.js";
import "./user.6707f531.js";
var h = null,
  y = null,
  v = null,
  g = null,
  j = null,
  w = null,
  x = null,
  N = null,
  S = null,
  b = null,
  k = [h, y, v, g, j, w, x, N, S, b];
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
    let { gettext: e } = s(k),
      a = t(
        m,
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
        m,
        { key: "done", className: u.section, "data-section": "done" },
        t(
          "h4",
          { className: u.title },
          e("Your account was successfully deleted.")
        ),
        t(d, {}, e("Farewell!"))
      ),
      f = this.state.next ? p : a;
    return t(
      c,
      { title: e("Delete account"), id: this.props.id },
      t(n, null, f)
    );
  }
}
var A = a(P, "user");
export { A as default };
