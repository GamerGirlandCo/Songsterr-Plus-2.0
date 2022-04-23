!(function (e, t, n, o, r, i, c, a, s) {
  let d = !0,
    l = !1;
  for (let e = 0; e < document.scripts.length; e++)
    if (document.scripts[e].src.indexOf(c) > -1) {
      d = !("no" === document.scripts[e].getAttribute("data-lazy"));
      break;
    }
  let u = !1;
  const f = [],
    p = function (e) {
      (e.e ||
        e.p ||
        (e.f && e.f.indexOf("capture") > -1) ||
        (e.f && e.f.indexOf("showReportDialog") > -1)) &&
        d &&
        h(f),
        p.data.push(e);
    };
  function h(o) {
    if (u) return;
    u = !0;
    const r = t.getElementsByTagName(n)[0],
      i = t.createElement(n);
    (i.src = "https://browser.sentry-cdn.com/6.2.3/bundle.min.js"),
      (i.crossorigin = "anonymous"),
      i.addEventListener("load", () => {
        try {
          (e.onerror = _), (e.onunhandledrejection = y);
          const t = e.Sentry,
            n = t.init;
          (t.init = function (e) {
            const t = s;
            for (const n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            n(t);
          }),
            (function (t, n) {
              try {
                const o = p.data;
                for (let e = 0; e < t.length; e++)
                  "function" == typeof t[e] && t[e]();
                let r = !1;
                const i = e.__SENTRY__;
                void 0 !== i && i.hub && i.hub.getClient() && (r = !0);
                let c = !1;
                for (let e = 0; e < o.length; e++)
                  if (o[e].f) {
                    c = !0;
                    const t = o[e];
                    !1 === r && "init" !== t.f && n.init(),
                      (r = !0),
                      n[t.f].apply(n, t.a);
                  }
                !1 === r && !1 === c && n.init();
                const a = e.onerror,
                  s = e.onunhandledrejection;
                for (let t = 0; t < o.length; t++)
                  o[t].e && a
                    ? a.apply(e, o[t].e)
                    : o[t].p && s && s.apply(e, [o[t].p]);
              } catch (e) {
                console.error(e);
              }
            })(o, t);
        } catch (e) {
          console.error(e);
        }
      }),
      r.parentNode.insertBefore(i, r);
  }
  (p.data = []),
    (e.Sentry = e.Sentry || {}),
    (e.Sentry.onLoad = function (e) {
      f.push(e), (d && !l) || h(f);
    }),
    (e.Sentry.forceLoad = function () {
      (l = !0),
        d &&
          setTimeout(() => {
            h(f);
          });
    }),
    [
      "init",
      "addBreadcrumb",
      "captureMessage",
      "captureException",
      "captureEvent",
      "configureScope",
      "withScope",
      "showReportDialog",
    ].forEach((t) => {
      e.Sentry[t] = function () {
        p({ f: t, a: arguments });
      };
    });
  const _ = e.onerror;
  e.onerror = function (t, n, o, r, i) {
    p({ e: [].slice.call(arguments) }), _ && _.apply(e, arguments);
  };
  const y = e.onunhandledrejection;
  (e.onunhandledrejection = function (t) {
    p({ p: t.reason }), y && y.apply(e, arguments);
  }),
    d ||
      setTimeout(() => {
        h(f);
      });
})(window, document, "script", 0, 0, 0, window.__SENTRY_CLIENT_KEY__ || "", 0, {
  dsn: window.__SENTRY_DSN__ || "",
  release: process.env.COMMIT || "",
  environment: window.__STAGE__ || "",
  allowUrls: [/.*\.songsterr\.(com|dev)/],
  denyUrls: [
    /\/inj_js\//i,
    /gpt\/pubads/i,
    /securepubads\.g\.doubleclick\.net/,
    /cdn-b\.notsy\.io/,
  ],
  ignoreErrors: [
    "Network request failed",
    "NetworkError when attempting to fetch resource",
    "The operation was aborted",
    "Failed to fetch",
    "Unable to decode audio data",
    /ResizeObserver/,
    /__firefox__/,
    /MediaDecodeAudioData/,
    /Blocked a frame with origin/,
  ],
});
//# sourceMappingURL=SentryLazy.7f582ac5.js.map
