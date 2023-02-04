import { d as t, a as e } from "./preact.3d326435.js";
import {
  y as s,
  cb as a,
  cu as n,
  n as i,
  U as c,
  j as r,
  L as l,
  T as o,
} from "./index.659fabbf.js";
import { A as p } from "./ActionButton.1cbc2cf9.js";
import { S as u, C as m } from "./ContinueLink.dee8be95.js";
import { P as h } from "./Panel.693a3a8d.js";
import { _ as d } from "./GenericPanel.module.67ac8ae5.js";
var b = null,
  f = null,
  y = null,
  P = null,
  C = null,
  S = null,
  w = null,
  g = null,
  A = null,
  N = null,
  k = [b, f, y, P, C, S, w, g, A, N];
let _ =
    "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=F6Q2JNH34XCCG",
  j = "https://apps.apple.com/account/subscriptions";
class v extends t {
  constructor(t) {
    super(t), (this.state = { error: null, processing: !1, next: !1 });
  }
  cancelSubscription = async (t) => {
    t.preventDefault();
    try {
      this.setState({ processing: !0, error: null });
      let t = this.props.user.profile;
      t?.subscription?.type !== a.LEGACY_PAYPAL && (t = await n()),
        this.props.dispatch("user/cancelPlus", t),
        this.setState({ processing: !1, error: null, next: !0 });
    } catch (t) {
      this.props.dispatch("curiosity/error", {
        error: "Subscription",
        message: t.message,
      }),
        this.setState({ processing: !1, error: t });
    }
  };
  cancelThirdParty = () => {
    this.setState({ next: !0 });
  };
  render() {
    let t;
    let { gettext: s } = i(k),
      n = this.props.user.profile.subscription,
      b = n?.type === a.LEGACY_PAYPAL,
      f = n?.type === a.APP_STORE,
      y = !b && !f,
      { processing: P } = this.state,
      C = s("I'm sure, cancel my subscription");
    return (
      (t = this.state.next
        ? e(
            u,
            { key: "done", className: d.section, "data-section": "done" },
            e(
              "h4",
              { className: d.title },
              b &&
                s(
                  "Your Sonsgterr Plus subscription will remain active until you cancel it on PayPal."
                ),
              f &&
                s(
                  "Your Sonsgterr Plus subscription will remain active until you cancel it on the App Store."
                ),
              y &&
                s(
                  "Canceled, Songsterr plus will be active till the end of the last paid month."
                )
            ),
            e(
              m,
              { id: "doneCancelation", href: "/a/wa/account" },
              s("Click here to continue")
            )
          )
        : e(
            u,
            { key: "cancel", className: d.section, "data-section": "form" },
            e(
              "h4",
              { className: d.title },
              s("Are you sure you want to cancel your subscription?")
            ),
            e(
              "form",
              { noValidate: !0, onSubmit: this.cancelSubscription },
              e(c, { error: this.state.error }),
              e(
                "div",
                { className: d.actions },
                b &&
                  e(
                    "a",
                    {
                      target: "_blank",
                      onClick: this.cancelThirdParty,
                      href: "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=F6Q2JNH34XCCG",
                      className: r.buttonGreen,
                      "data-action": "cancelPayPal",
                    },
                    C
                  ),
                f &&
                  e(
                    "a",
                    {
                      target: "_blank",
                      onClick: this.cancelThirdParty,
                      href: "https://apps.apple.com/account/subscriptions",
                      className: r.buttonGreen,
                      "data-action": "cancelAppStore",
                    },
                    C
                  ),
                y &&
                  e(p, { id: "confirmCancellation", title: C, processing: P }),
                e(
                  l,
                  {
                    to: "/a/wa/account",
                    className: r.buttonLink,
                    "data-action": "cancel",
                  },
                  s("No, keep it")
                )
              )
            )
          )),
      e(
        h,
        { title: s("Cancel Subscription"), id: this.props.id },
        e(o, null, t)
      )
    );
  }
}
var x = s(v);
export { x as default };
