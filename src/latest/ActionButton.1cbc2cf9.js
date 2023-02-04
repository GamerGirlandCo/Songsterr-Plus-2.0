import { a as t } from "./preact.3d326435.js";
import { j as a, k as n, m as o } from "./index.659fabbf.js";
function s(s) {
  let {
      processing: e,
      title: f,
      id: r,
      width: b = 17,
      height: i = 17,
      isDisabled: l = !1,
      onClick: u,
    } = s,
    m = l ? a.buttonDisabled : a[r] || a.buttonGreen;
  return t(
    "button",
    { id: r, className: m, disabled: l || e, onClick: u },
    e && t(n, { width: b, height: i, fill: "#fff", className: o.button }),
    t("span", null, f)
  );
}
export { s as A };
