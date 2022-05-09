import {
  bK as a,
  bL as t,
  bM as n,
  bO as e,
  bP as s,
  bN as o,
  bQ as i,
  bR as r,
  bS as c,
} from "./index.3637aaf7.js";
const d = {
  errors: "It introduced new mistakes in the tab",
  tracks: "It removed some instruments",
  glitches: "It has problems with audio/display",
  version: "I've got used to a previous revision",
  other: "Other reasons",
};
async function u(r, d) {
  const u = c("/auth/signin"),
    w = { "X-Recaptcha-Token": await a("signin") },
    p = { email: r, password: d },
    l = await t(u, p, w);
  return (
    await n(l),
    e(l, "Invalid email or password"),
    await s(l, "signin"),
    o(l),
    i(await l.json())
  );
}
async function w(a) {
  const t = c(`/auth/google-token?id_token=${a}`),
    n = await fetch(t, { credentials: "include", method: "get" });
  return (
    e(n, "Invalid email or password"),
    o(n),
    { profile: i(await n.json()), isCreated: 201 === n.status }
  );
}
async function p(d, u, w) {
  const p = c("/auth/signup"),
    l = { "X-Recaptcha-Token": await a("signup") },
    h = { name: d, email: u, password: w },
    f = await t(p, h, l);
  return (
    await n(f),
    await r(f),
    await s(f, "signup"),
    e(f, "Disposable email domain detected. Please, use different email."),
    o(f),
    i(await f.json())
  );
}
async function l() {
  const a = c("/auth/signout"),
    t = await fetch(a, { method: "post", credentials: "include" });
  if (403 === t.status)
    throw new Error("You already signed out. Please refresh page");
  return o(t), t.json();
}
async function h(a) {
  const t = c("/a/ra/person/forgotPassword.json"),
    n = new FormData();
  n.append("email", a);
  const e = await fetch(t, { method: "post", credentials: "include", body: n });
  return await r(e), o(e), e.json();
}
async function f(a, n) {
  const e = c("/auth/change"),
    s = { name: a, email: n },
    d = await t(e, s);
  return await r(d), o(d), i(await d.json());
}
async function m(a) {
  const n = c("/auth/change"),
    e = { password: a },
    s = await t(n, e);
  return await r(s), o(s), i(await s.json());
}
async function b(a, t) {
  const n = c("/a/ra/person/recoverPassword.json"),
    e = new FormData();
  e.append("key", a), e.append("password", t);
  const s = await fetch(n, { method: "post", credentials: "include", body: e });
  return await r(s), o(s), s.json();
}
async function g(e) {
  const s = c("/feedback/web"),
    i = { "X-Recaptcha-Token": await a("feedback") },
    r = await t(s, e, i);
  return await n(r), o(r), r;
}
async function y(a, n) {
  const e = c(`/api/revision/${a.revisionId}/report`),
    s = await t(e, a);
  return n.aborted ? null : (o(s), s);
}
export { b, d, f, g, h, l, m, p, u, w, y };
//# sourceMappingURL=user.804c31aa.js.map
