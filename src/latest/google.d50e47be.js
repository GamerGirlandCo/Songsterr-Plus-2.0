import { c8 as t } from "./index.659fabbf.js";
import { b as e, c as n } from "./user.15617609.js";
async function a() {
  window.__INITIALIZED_GAPI__ ||
    (await t("https://apis.google.com/js/client.js", "__LOADED_GAPI__"),
    await new Promise((t, e) => {
      if (!window.gapi) return e(Error("No window.gapi"));
      window.gapi.load("client:auth2", {
        callback() {
          setTimeout(function () {
            if (!window.gapi || !window.gapi.client)
              return e(Error("No window.gapi.client"));
            (window.__INITIALIZED_GAPI__ = !0),
              window.gapi.client
                .init({
                  clientId: window.__GOOGLE_CLIENT_ID__,
                  scope: "profile email",
                })
                .then(t, e);
          }, 1);
        },
        onerror: e,
      });
    }));
}
async function i() {
  try {
    await a();
  } catch (t) {
    "idpiframe_initialization_failed" !== t.error && console.error(t);
  }
}
async function r() {
  await a();
  let t = window.gapi;
  await t.auth2.getAuthInstance().signIn();
  let n = t.auth2.getAuthInstance().currentUser.get(),
    i = n.getAuthResponse().id_token;
  return e(i);
}
let o = "Oops, something went wrong. Please try again later";
function s(t) {
  if (!(t instanceof Error) && t.error)
    switch (t.error.toLowerCase()) {
      case "popup_closed_by_user":
        return null;
      case "idpiframe_initialization_failed":
        return t.details ? Error(t.details) : Error(o);
      case "popup_blocked_by_browser":
        return Error("Pop-up blocked by browser. Please try again");
      case "access_denied":
        return Error("Access was not granted. Please try again");
      default:
        return Error(o);
    }
  return t;
}
async function c() {
  try {
    await a();
    let t = window.gapi;
    t.auth2.getAuthInstance().isSignedIn.get() &&
      (await t.auth2.getAuthInstance().signOut());
  } catch (t) {}
}
async function g() {
  await n();
  try {
    await a();
    let t = window.gapi;
    t.auth2.getAuthInstance().isSignedIn.get() &&
      t.auth2.getAuthInstance().currentUser.get().disconnect();
  } catch (t) {}
}
export { r as a, c as b, g as c, i as g, s as s };
