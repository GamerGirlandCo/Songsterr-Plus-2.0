import { cd as e } from "./index.6eeae9f8.js";
import { h as t, i as n } from "./user.6707f531.js";
async function a() {
  window.__INITIALIZED_GAPI__ ||
    (await e("https://apis.google.com/js/client.js", "__LOADED_GAPI__"),
    await new Promise((e, t) => {
      if (!window.gapi) return t(Error("No window.gapi"));
      window.gapi.load("client:auth2", {
        callback() {
          setTimeout(function () {
            if (!window.gapi || !window.gapi.client)
              return t(Error("No window.gapi.client"));
            (window.__INITIALIZED_GAPI__ = !0),
              window.gapi.client
                .init({
                  clientId: window.__GOOGLE_CLIENT_ID__,
                  scope: "profile email",
                })
                .then(e, t);
          }, 1);
        },
        onerror: t,
      });
    }));
}
async function i() {
  try {
    await a();
  } catch (e) {
    "idpiframe_initialization_failed" !== e.error && console.error(e);
  }
}
async function r() {
  await a();
  let e = window.gapi;
  await e.auth2.getAuthInstance().signIn();
  let n = e.auth2.getAuthInstance().currentUser.get(),
    i = n.getAuthResponse().id_token;
  return t(i);
}
let o = "Oops, something went wrong. Please try again later";
function s(e) {
  if (!(e instanceof Error) && e.error)
    switch (e.error.toLowerCase()) {
      case "popup_closed_by_user":
        return null;
      case "idpiframe_initialization_failed":
        return e.details ? Error(e.details) : Error(o);
      case "popup_blocked_by_browser":
        return Error("Pop-up blocked by browser. Please try again");
      case "access_denied":
        return Error("Access was not granted. Please try again");
      default:
        return Error(o);
    }
  return e;
}
async function c() {
  try {
    await a();
    let e = window.gapi;
    e.auth2.getAuthInstance().isSignedIn.get() &&
      (await e.auth2.getAuthInstance().signOut());
  } catch (e) {}
}
async function g() {
  await n();
  try {
    await a();
    let e = window.gapi;
    e.auth2.getAuthInstance().isSignedIn.get() &&
      e.auth2.getAuthInstance().currentUser.get().disconnect();
  } catch (e) {}
}
export { r as a, c as b, g as c, i as g, s as s };
