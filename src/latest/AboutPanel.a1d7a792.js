import { a as a } from "./preact.3d326435.js";
import { n as e, L as t, A as o } from "./index.659fabbf.js";
import { P as s } from "./Panel.693a3a8d.js";
import { s as i } from "./signature.7ef6ac6e.js";
import { a as n, g as l } from "./gplay.79326319.js";
let r = "Cjzh0",
  u = "Cjz16q",
  c = "Cjz1hy",
  d = "Cjz13j",
  p = "Cjz1v8",
  g = "Cjzia",
  h = {
    info: "Cjzh0",
    left: "Cjz16q",
    right: "Cjz1hy",
    signature: "Cjz13j",
    bottom: "Cjz1v8",
    stores: "Cjzia",
  };
var m = h,
  b = null,
  y = null,
  f = null,
  w = null,
  v = null,
  j = null,
  C = null,
  S = null,
  z = null,
  k = null,
  A = [b, y, f, w, v, j, C, S, z, k];
function P(r) {
  let { gettext: u } = e(A),
    c = (e, t) =>
      a(
        o,
        {
          source: "about",
          os: "ios" === e ? "iOS" : "Android",
          eventProperties: {
            Via: "about page",
            "App store": "ios" === e ? "App Store" : "Google Play",
          },
        },
        t
      );
  return a(
    s,
    { title: u("About"), id: r.id },
    a(
      "div",
      { className: m.info },
      a(
        "div",
        { className: m.left },
        a(
          "p",
          null,
          u("Songsterr is an "),
          a("strong", null, u("archive of guitar, bass and drum tabs")),
          u(
            ". It is collaboratively built and maintained by your fellow music lovers. Anyone with Internet access can contribute new tabs and make changes to existing ones. Much like "
          ),
          a(
            "a",
            {
              href: "https://www.wikipedia.org/",
              rel: "noopener noreferrer",
              target: "_blank",
            },
            u("Wikipedia")
          ),
          u(
            ", contributions cannot damage Songsterr because the software allows easy reversal of mistakes and experienced editors are watching to help and ensure that edits are cumulative improvements."
          )
        ),
        a(
          "p",
          null,
          u("Songsterr is also an "),
          a("strong", null, u("online tab player")),
          u(
            " which makes learning tabs easier. It accompanies each tab with a song audio and automatically scrolls through each tab, indicating exactly which note is being played."
          )
        )
      ),
      a(
        "div",
        { className: m.right },
        a(
          "p",
          null,
          a(t, { to: "/a/wa/plus" }, u("Paid plan")),
          u(
            " unlocks advanced player features, including Print, Tempo Control, Loop and more."
          )
        ),
        a(
          "p",
          null,
          u("Finally, Songsterr has a "),
          a(
            "strong",
            null,
            u("mobile app for\xa0"),
            c("ios", u("iOS")),
            " and ",
            c("ios", u("Android"))
          ),
          u(
            " with instant access to realistic playback of 400,000 songs (800,000 tab tracks) from Songsterr.com. With the Songsterr app you no longer need to download tabs from third-party sites or upload them from your computer to your device."
          )
        ),
        a(
          "p",
          null,
          u("Songsterr is "),
          a("strong", null, u("100% legal")),
          u(
            ". Support by paid users is the only thing that keeps the site alive by allowing us to pay royalties to music creators."
          )
        ),
        a(
          "p",
          null,
          a(t, { to: "/a/wa/help#contact-us" }, u("Contact us")),
          u(" if you have any questions.")
        ),
        a(
          "div",
          { className: m.signature },
          a("img", { src: i, width: 182, height: 53, alt: "Songsterr" })
        ),
        a(
          "div",
          { className: m.bottom },
          a(
            "div",
            { className: m.stores },
            c(
              "ios",
              a("img", { src: n, width: 160, height: 53, alt: "AppStore" })
            ),
            c(
              "android",
              a("img", {
                src: l,
                width: 180.425532,
                height: 53,
                alt: "Google Play",
              })
            )
          )
        )
      )
    )
  );
}
export { P as default };
