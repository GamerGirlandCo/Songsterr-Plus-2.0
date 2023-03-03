import { _ as t, c as e, v as a } from "./preact.294f37c2.js";
import {
  s as o,
  ar as s,
  bI as n,
  cb as r,
  ay as i,
  aq as c,
  L as l,
  av as u,
  T as p,
} from "./index.6eeae9f8.js";
import { I as h } from "./Input.9e959f35.js";
import { A as m } from "./ActionButton.5286af2f.js";
import { S as d, C as f } from "./ContinueLink.4b7402ca.js";
import { P as v } from "./Panel.404ed07e.js";
import { _ as y } from "./GenericPanel.module.67ac8ae5.js";
var b = null,
  g = null,
  S = null,
  j = null,
  x = null,
  A = null,
  C = null,
  N = null,
  k = null,
  P = null,
  w = [b, g, S, j, x, A, C, N, k, P];
class I extends t {
  coupon = e();
  constructor(t) {
    super(t), (this.state = { error: null, processing: !1, next: !1 });
  }
  activate = async () => {
    let t = this.coupon.current;
    try {
      s([{ field: t, validator: n }]),
        this.setState({ processing: !0, error: null });
      let e = await r(t.value);
      this.props.dispatch("user/profile", e),
        this.props.dispatch("curiosity/conversion", {
          event: "Activated coupon",
          Coupon: t.value,
        }),
        this.props.dispatch("curiosity/google", {
          category: "Subscription",
          action: "Activated coupon",
        }),
        this.setState({ processing: !1, error: null, next: !0 });
    } catch (t) {
      this.setState({ processing: !1, error: t });
    }
  };
  handleSubmit = async (t) => {
    t.preventDefault(), await this.activate();
  };
  componentDidMount() {
    this.coupon.current && this.coupon.current.value && this.activate();
  }
  render() {
    let { gettext: t } = i(w),
      e = a(
        d,
        { key: "form", className: y.section, "data-section": "coupon" },
        a("h4", { className: y.title }, t("Please enter coupon.")),
        a(
          "form",
          { noValidate: !0, onSubmit: this.handleSubmit, action: "" },
          a(c, { error: this.state.error }),
          a(h, {
            type: "text",
            label: t("Coupon"),
            name: "coupon",
            ref: this.coupon,
            error: this.state.error,
            autocomplete: "coupon",
            defaultValue: this.props.query.code || "",
          }),
          a(
            "div",
            { className: y.actions },
            a(m, { title: t("Activate"), processing: this.state.processing }),
            a(
              l,
              { to: "/a/wa/account", className: u.buttonLinkFloat },
              "Cancel"
            )
          )
        )
      ),
      o = a(
        d,
        { key: "done", className: y.section, "data-section": "done" },
        a(
          "h4",
          { className: y.title },
          t("The coupon has been successfully applied.")
        ),
        a(f, { href: "/a/wa/account" }, t("Start rockin'"))
      ),
      s = this.state.next ? o : e;
    return a(
      v,
      { id: "activate-coupon", title: t("Activate coupon") },
      a(p, null, s)
    );
  }
}
var L = o(I, "user");
export { L as default };
