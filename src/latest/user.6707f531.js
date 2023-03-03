import {
  co as a,
  cp as t,
  cq as i,
  cr as s,
  cs as e,
  ct as n,
  bT as o,
  cu as r,
  cv as c,
  cw as u,
  cx as w,
  cy as p,
} from "./index.6eeae9f8.js";
let l = {
  errors: "It introduced new mistakes in the tab",
  tracks: "It removed some instruments",
  glitches: "It has problems with audio/display",
  version: "I've got used to a previous revision",
  other: "Other reasons",
};
async function d(n, o, r) {
  let c = w("/auth/signup"),
    u = await a("signup"),
    p = await t(
      c,
      { name: n, email: o, password: r },
      { "X-Recaptcha-Token": u }
    );
  return await i(p, "signup"), await s(p), e(await p.json());
}
async function g(o, r) {
  let c = w("/auth/signin"),
    u = await a("signin"),
    p = await t(c, { email: o, password: r }, { "X-Recaptcha-Token": u });
  return (
    await i(p, "signin"),
    await n(p, "Invalid email or password"),
    await s(p),
    e(await p.json())
  );
}
async function h() {
  let a = w("/auth/signout"),
    i = await t(a);
  if (401 === i.status || 403 === i.status)
    throw new o({ __all__: "You already signed out. Please refresh page" });
  r(i);
}
async function f(a) {
  let t = w(`/auth/google-token?id_token=${a}`),
    i = await p(t);
  await n(i, "Invalid email or password"), await s(i);
  let o = e(await i.json()),
    r = 201 === i.status;
  return { profile: o, isCreated: r };
}
async function v(a, i) {
  let n = w("/auth/change"),
    o = await t(n, { name: a, email: i });
  return await s(o), r(o), e(await o.json());
}
async function y(a) {
  let i = w("/auth/change"),
    n = await t(i, { password: a });
  return await s(n), r(n), e(await n.json());
}
async function b(a) {
  let i = w("/auth/password/forgot"),
    e = await t(i, { email: a });
  return await s(e), r(e), e.json();
}
async function j(a, i) {
  let s = w("/auth/password/recover"),
    n = await t(s, { key: a, password: i });
  return await c(n), r(n), e(await n.json());
}
async function k() {
  let a = w("/auth/deactivate"),
    i = await t(a);
  if (403 === i.status)
    throw Error("You already signed out. Please refresh page");
  return r(i), i.json();
}
async function m(i) {
  let s = w("/feedback/web"),
    e = await a("feedback"),
    n = await t(s, i, { "X-Recaptcha-Token": e });
  return await u(n), r(n), n;
}
async function R(a, i) {
  let s = w(`/api/revision/${a.revisionId}/report`),
    e = await t(s, a);
  return i.aborted ? null : (r(e), e);
}
export {
  l as R,
  g as a,
  d as b,
  v as c,
  h as d,
  b as e,
  j as f,
  y as g,
  f as h,
  k as i,
  R as j,
  m as s,
};
