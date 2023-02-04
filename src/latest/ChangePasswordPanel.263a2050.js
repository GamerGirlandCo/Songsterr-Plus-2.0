import { d as s, e as e, a as r } from "./preact.3d326435.js";
import {
  y as a,
  V as t,
  c7 as o,
  cj as n,
  n as i,
  U as l,
  L as c,
  j as p,
  T as u,
} from "./index.659fabbf.js";
import { A as d } from "./ActionButton.1cbc2cf9.js";
import { I as h } from "./Input.97539e13.js";
import { h as m, i as w } from "./user.15617609.js";
import { P as f } from "./Panel.693a3a8d.js";
import { S as v, C as g } from "./ContinueLink.dee8be95.js";
import { _ as P } from "./GenericPanel.module.67ac8ae5.js";
var b = null,
  j = null,
  y = null,
  S = null,
  A = null,
  N = null,
  k = null,
  x = null,
  C = null,
  R = null,
  L = [b, j, y, S, A, N, k, x, C, R];
class I extends s {
  password = e();
  passwordAgain = e();
  constructor(s) {
    super(s),
      (this.state = {
        error: null,
        processing: !1,
        next: !1,
        errorPassword: "",
        errorPasswordAgain: "",
      });
  }
  handleSubmit = async (s) => {
    s.preventDefault();
    let e = this.password.current,
      r = this.passwordAgain.current;
    try {
      if (
        (t([
          { field: e, validator: o },
          { field: r, validator: (s, r) => n(s, e.value, r) },
        ]),
        this.setState({ processing: !0, error: null }),
        this.props.route.isRecover)
      ) {
        let s = this.props.query.key || "",
          r = await m(s, e.value);
        this.props.dispatch("user/recoverPassword", r);
      } else {
        let s = await w(e.value);
        this.props.dispatch("user/changePassword", s);
      }
      this.setState({ processing: !1, error: null, next: !0 });
    } catch (s) {
      this.setState({ processing: !1, error: s });
    }
  };
  render() {
    let s;
    let { gettext: e } = i(L);
    s = this.state.next
      ? r(
          v,
          { key: "done", className: P.section, "data-section": "done" },
          r("h4", { className: P.title }, e("Your password has been changed.")),
          r(g, { href: "/a/wa/account" }, e("Click here to continue"))
        )
      : r(
          v,
          { key: "form", className: P.section, "data-section": "recover" },
          r("h4", { className: P.title }, e("Please enter your new password.")),
          r(
            "form",
            { noValidate: !0, onSubmit: this.handleSubmit, action: "" },
            r(l, { error: this.state.error }),
            r(h, {
              type: "password",
              label: e("New password"),
              name: "password",
              ref: this.password,
              error: this.state.error,
              autocomplete: "new-password",
            }),
            r(h, {
              type: "password",
              label: e("Once again"),
              name: "passwordAgain",
              ref: this.passwordAgain,
              error: this.state.error,
              autocomplete: "new-password",
            }),
            r(
              "div",
              { className: P.actions },
              r(d, { title: e("Save"), processing: this.state.processing }),
              r(
                c,
                {
                  to: this.props.route.isRecover ? "/" : "/a/wa/account",
                  className: p.buttonLinkFloat,
                },
                e("Cancel")
              )
            )
          )
        );
    let a = e(
        this.props.route.isRecover ? "Recover Password" : "Change Password"
      ),
      t = this.props.route.isRecover ? "recoverPassword" : "account-password";
    return r(f, { id: t, title: a }, r(u, null, s));
  }
}
var V = a(I, "user");
export { V as default };
