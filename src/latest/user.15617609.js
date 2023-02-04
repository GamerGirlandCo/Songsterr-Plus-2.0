import {
  bX as a,
  bY as t,
  bZ as i,
  b_ as s,
  b$ as e,
  c0 as n,
  bV as o,
  c1 as r,
  c2 as u,
  c3 as c,
  c4 as w,
  c5 as l,
} from "./index.659fabbf.js";
let p = {
  errors: "It introduced new mistakes in the tab",
  tracks: "It removed some instruments",
  glitches: "It has problems with audio/display",
  version: "I've got used to a previous revision",
  other: "Other reasons",
};
async function d(n, o, r) {
  let u = w("/auth/signup"),
    c = await a("signup"),
    l = await t(
      u,
      { name: n, email: o, password: r },
      { "X-Recaptcha-Token": c }
    );
  return await i(l, "signup"), await s(l), e(await l.json());
}
async function g(o, r) {
  let u = w("/auth/signin"),
    c = await a("signin"),
    l = await t(u, { email: o, password: r }, { "X-Recaptcha-Token": c });
  return (
    await i(l, "signin"),
    await n(l, "Invalid email or password"),
    await s(l),
    e(await l.json())
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
    i = await l(t);
  await n(i, "Invalid email or password"), await s(i);
  let o = e(await i.json()),
    r = 201 === i.status;
  return { profile: o, isCreated: r };
}
async function b(a, i) {
  let n = w("/auth/change"),
    o = await t(n, { name: a, email: i });
  return await s(o), r(o), e(await o.json());
}
async function v(a) {
  let i = w("/auth/change"),
    n = await t(i, { password: a });
  return await s(n), r(n), e(await n.json());
}
async function y(a) {
  let i = w("/auth/password/forgot"),
    e = await t(i, { email: a });
  return await s(e), r(e), e.json();
}
async function j(a, i) {
  let s = w("/auth/password/recover"),
    n = await t(s, { key: a, password: i });
  return await u(n), r(n), e(await n.json());
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
  return await c(n), r(n), n;
}
async function R(a, i) {
  let s = w(`/api/revision/${a.revisionId}/report`),
    e = await t(s, a);
  return i.aborted ? null : (r(e), e);
}
export {
  p as R,
  g as a,
  f as b,
  k as c,
  d as d,
  b as e,
  h as f,
  y as g,
  j as h,
  v as i,
  R as j,
  m as s,
};
