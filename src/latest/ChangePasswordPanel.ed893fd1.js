import { _ as s, c as e, v as a } from "./preact.294f37c2.js";
import {
  s as r,
  ar as t,
  bX as o,
  c7 as n,
  ay as i,
  aq as l,
  L as c,
  av as p,
  T as u,
} from "./index.6eeae9f8.js";
import { A as d } from "./ActionButton.5286af2f.js";
import { I as h } from "./Input.9e959f35.js";
import { f as m, g as w } from "./user.6707f531.js";
import { P as f } from "./Panel.404ed07e.js";
import { S as v, C as g } from "./ContinueLink.4b7402ca.js";
import { _ as P } from "./GenericPanel.module.67ac8ae5.js";
var y = null,
  b = null,
  j = null,
  S = null,
  A = null,
  N = null,
  k = null,
  x = null,
  C = null,
  R = null,
  L = [y, b, j, S, A, N, k, x, C, R];
class q extends s {
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
      a = this.passwordAgain.current;
    try {
      if (
        (t([
          { field: e, validator: o },
          { field: a, validator: (s, a) => n(s, e.value, a) },
        ]),
        this.setState({ processing: !0, error: null }),
        this.props.route.isRecover)
      ) {
        let s = this.props.query.key || "",
          a = await m(s, e.value);
        this.props.dispatch("user/recoverPassword", a);
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
      ? a(
          v,
          { key: "done", className: P.section, "data-section": "done" },
          a("h4", { className: P.title }, e("Your password has been changed.")),
          a(g, { href: "/a/wa/account" }, e("Click here to continue"))
        )
      : a(
          v,
          { key: "form", className: P.section, "data-section": "recover" },
          a("h4", { className: P.title }, e("Please enter your new password.")),
          a(
            "form",
            { noValidate: !0, onSubmit: this.handleSubmit, action: "" },
            a(l, { error: this.state.error }),
            a(h, {
              type: "password",
              label: e("New password"),
              name: "password",
              ref: this.password,
              error: this.state.error,
              autocomplete: "new-password",
            }),
            a(h, {
              type: "password",
              label: e("Once again"),
              name: "passwordAgain",
              ref: this.passwordAgain,
              error: this.state.error,
              autocomplete: "new-password",
            }),
            a(
              "div",
              { className: P.actions },
              a(d, { title: e("Save"), processing: this.state.processing }),
              a(
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
    let r = e(
        this.props.route.isRecover ? "Recover Password" : "Change Password"
      ),
      t = this.props.route.isRecover ? "recoverPassword" : "account-password";
    return a(f, { id: t, title: r }, a(u, null, s));
  }
}
var I = r(q, "user");
export { I as default };
