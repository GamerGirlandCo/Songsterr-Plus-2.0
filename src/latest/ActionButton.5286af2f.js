import { v as t } from "./preact.294f37c2.js";
import { av as a, b9 as e, ba as n } from "./index.6eeae9f8.js";
function o(o) {
  let {
      processing: s,
      title: f,
      id: r,
      width: b = 17,
      height: i = 17,
      isDisabled: l = !1,
      onClick: u,
    } = o,
    c = l ? a.buttonDisabled : a[r] || a.buttonGreen;
  return t(
    "button",
    { id: r, className: c, disabled: l || s, onClick: u },
    s && t(e, { width: b, height: i, fill: "#fff", className: n.button }),
    t("span", null, f)
  );
}
export { o as A };
