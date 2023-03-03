import { _ as t, v as e } from "./preact.294f37c2.js";
import {
  s as a,
  b$ as s,
  cc as n,
  ay as i,
  aq as c,
  av as o,
  L as r,
  T as l,
} from "./index.6eeae9f8.js";
import { P as u } from "./Panel.404ed07e.js";
import { A as p } from "./ActionButton.5286af2f.js";
import { S as h, C as m } from "./ContinueLink.4b7402ca.js";
import { _ as d } from "./GenericPanel.module.67ac8ae5.js";
var b = null,
  y = null,
  P = null,
  f = null,
  g = null,
  C = null,
  S = null,
  w = null,
  A = null,
  k = null,
  G = [b, y, P, f, g, C, S, w, A, k];
let N =
    "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=F6Q2JNH34XCCG",
  _ = "https://apps.apple.com/account/subscriptions",
  v = "https://play.google.com/store/account/subscriptions";
class L extends t {
  constructor(t) {
    super(t), (this.state = { error: null, processing: !1, next: !1 });
  }
  cancelSubscription = async (t) => {
    t.preventDefault();
    try {
      this.setState({ processing: !0, error: null });
      let t = this.props.user.profile;
      t?.subscription?.type !== s.LEGACY_PAYPAL && (t = await n()),
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
    let { gettext: a } = i(G),
      n = this.props.user.profile.subscription,
      b = n?.type === s.LEGACY_PAYPAL,
      y = n?.type === s.APP_STORE,
      P = n?.type === s.GOOGLE_PLAY,
      f = !b && !y && !P,
      { processing: g } = this.state,
      C = a("I'm sure, cancel my subscription");
    return (
      (t = this.state.next
        ? e(
            h,
            { key: "done", className: d.section, "data-section": "done" },
            e(
              "h4",
              { className: d.title },
              b &&
                a(
                  "Your Songsterr Plus subscription will remain active until you cancel it on PayPal."
                ),
              y &&
                a(
                  "Your Songsterr Plus subscription will remain active until you cancel it on the App Store."
                ),
              P &&
                a(
                  "Your Songsterr Plus subscription will remain active until you cancel it on the Google Play."
                ),
              f &&
                a(
                  "Canceled, Songsterr Plus will be active till the end of the last paid month."
                )
            ),
            e(
              m,
              { id: "doneCancelation", href: "/a/wa/account" },
              a("Click here to continue")
            )
          )
        : e(
            h,
            { key: "cancel", className: d.section, "data-section": "form" },
            e(
              "h4",
              { className: d.title },
              a("Are you sure you want to cancel your subscription?")
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
                      className: o.buttonGreen,
                      "data-action": "cancelPayPal",
                    },
                    C
                  ),
                y &&
                  e(
                    "a",
                    {
                      target: "_blank",
                      onClick: this.cancelThirdParty,
                      href: "https://apps.apple.com/account/subscriptions",
                      className: o.buttonGreen,
                      "data-action": "cancelAppStore",
                    },
                    C
                  ),
                P &&
                  e(
                    "a",
                    {
                      target: "_blank",
                      onClick: this.cancelThirdParty,
                      href: "https://play.google.com/store/account/subscriptions",
                      className: o.buttonGreen,
                      "data-action": "cancelGooglePlay",
                    },
                    C
                  ),
                f &&
                  e(p, { id: "confirmCancellation", title: C, processing: g }),
                e(
                  r,
                  {
                    to: "/a/wa/account",
                    className: o.buttonLink,
                    "data-action": "cancel",
                  },
                  a("No, keep it")
                )
              )
            )
          )),
      e(
        u,
        { title: a("Cancel Subscription"), id: this.props.id },
        e(l, null, t)
      )
    );
  }
}
var Y = a(L);
export { Y as default };
