import {
  ae as a,
  af as n,
  ag as t,
  ah as s,
  ai as e,
  aj as i,
  ak as o,
  al as c,
  am as r,
} from "./index.1392f534.js";
async function d(c, d) {
  const w = r("/auth/signin"),
    u = { "X-Recaptcha-Token": await a("signin") },
    p = { email: c, password: d },
    l = await n(w, p, u);
  return (
    await t(l),
    s(l, "Invalid email or password"),
    await e(l, "signin"),
    i(l),
    o(await l.json())
  );
}
async function w(a) {
  const n = r("/auth/google-token?id_token=".concat(a)),
    t = await fetch(n, { credentials: "include", method: "get" });
  return (
    s(t, "Invalid email or password"),
    i(t),
    { profile: o(await t.json()), isCreated: 201 === t.status }
  );
}
async function u(d, w, u) {
  const p = r("/auth/signup"),
    l = { "X-Recaptcha-Token": await a("signup") },
    f = { name: d, email: w, password: u },
    h = await n(p, f, l);
  return (
    await t(h),
    await c(h),
    await e(h, "signup"),
    s(h, "Disposable email domain detected. Please, use different email."),
    i(h),
    o(await h.json())
  );
}
async function p() {
  const a = r("/auth/signout"),
    n = await fetch(a, { method: "post", credentials: "include" });
  if (403 === n.status)
    throw new Error("You already signed out. Please refresh page");
  return i(n), n.json();
}
async function l(a) {
  const n = r("/a/ra/person/forgotPassword.json"),
    t = new FormData();
  t.append("email", a);
  const s = await fetch(n, { method: "post", credentials: "include", body: t });
  return await c(s), i(s), s.json();
}
async function f(a, t) {
  const s = r("/auth/change"),
    e = { name: a, email: t },
    d = await n(s, e);
  return await c(d), i(d), o(await d.json());
}
async function h(a) {
  const t = r("/auth/change"),
    s = { password: a },
    e = await n(t, s);
  return await c(e), i(e), o(await e.json());
}
async function m(a, n) {
  const t = r("/a/ra/person/recoverPassword.json"),
    s = new FormData();
  s.append("key", a), s.append("password", n);
  const e = await fetch(t, { method: "post", credentials: "include", body: s });
  return await c(e), i(e), e.json();
}
async function g(s) {
  const e = r("/feedback/web"),
    o = { "X-Recaptcha-Token": await a("feedback") },
    c = await n(e, s, o);
  return await t(c), i(c), c;
}
async function y(a, t) {
  const s = r("/api/revision/".concat(a.revisionId, "/report")),
    e = await n(s, a);
  return t.aborted ? null : (i(e), e);
}
export {
  g as a,
  d as b,
  w as c,
  u as d,
  p as e,
  f,
  l as g,
  m as h,
  h as i,
  y as s,
};
//# sourceMappingURL=user.b94196d7.js.map
