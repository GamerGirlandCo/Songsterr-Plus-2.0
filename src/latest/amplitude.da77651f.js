function e() {
  return (
    "object" == typeof window &&
    void 0 !== (null === window || void 0 === window ? void 0 : window.document)
  );
}
var t,
  i =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  n = { exports: {} };
(t = n),
  (function (e) {
    function i(e, t) {
      var i = (65535 & e) + (65535 & t);
      return (((e >> 16) + (t >> 16) + (i >> 16)) << 16) | (65535 & i);
    }
    function n(e, t, n, o, r, s) {
      return i(((a = i(i(t, e), i(o, s))) << (u = r)) | (a >>> (32 - u)), n);
      var a, u;
    }
    function o(e, t, i, o, r, s, a) {
      return n((t & i) | (~t & o), e, t, r, s, a);
    }
    function r(e, t, i, o, r, s, a) {
      return n((t & o) | (i & ~o), e, t, r, s, a);
    }
    function s(e, t, i, o, r, s, a) {
      return n(t ^ i ^ o, e, t, r, s, a);
    }
    function a(e, t, i, o, r, s, a) {
      return n(i ^ (t | ~o), e, t, r, s, a);
    }
    function u(e, t) {
      var n, u, c, l, p;
      (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
      var d = 1732584193,
        h = -271733879,
        f = -1732584194,
        v = 271733878;
      for (n = 0; n < e.length; n += 16)
        (u = d),
          (c = h),
          (l = f),
          (p = v),
          (d = o(d, h, f, v, e[n], 7, -680876936)),
          (v = o(v, d, h, f, e[n + 1], 12, -389564586)),
          (f = o(f, v, d, h, e[n + 2], 17, 606105819)),
          (h = o(h, f, v, d, e[n + 3], 22, -1044525330)),
          (d = o(d, h, f, v, e[n + 4], 7, -176418897)),
          (v = o(v, d, h, f, e[n + 5], 12, 1200080426)),
          (f = o(f, v, d, h, e[n + 6], 17, -1473231341)),
          (h = o(h, f, v, d, e[n + 7], 22, -45705983)),
          (d = o(d, h, f, v, e[n + 8], 7, 1770035416)),
          (v = o(v, d, h, f, e[n + 9], 12, -1958414417)),
          (f = o(f, v, d, h, e[n + 10], 17, -42063)),
          (h = o(h, f, v, d, e[n + 11], 22, -1990404162)),
          (d = o(d, h, f, v, e[n + 12], 7, 1804603682)),
          (v = o(v, d, h, f, e[n + 13], 12, -40341101)),
          (f = o(f, v, d, h, e[n + 14], 17, -1502002290)),
          (d = r(
            d,
            (h = o(h, f, v, d, e[n + 15], 22, 1236535329)),
            f,
            v,
            e[n + 1],
            5,
            -165796510
          )),
          (v = r(v, d, h, f, e[n + 6], 9, -1069501632)),
          (f = r(f, v, d, h, e[n + 11], 14, 643717713)),
          (h = r(h, f, v, d, e[n], 20, -373897302)),
          (d = r(d, h, f, v, e[n + 5], 5, -701558691)),
          (v = r(v, d, h, f, e[n + 10], 9, 38016083)),
          (f = r(f, v, d, h, e[n + 15], 14, -660478335)),
          (h = r(h, f, v, d, e[n + 4], 20, -405537848)),
          (d = r(d, h, f, v, e[n + 9], 5, 568446438)),
          (v = r(v, d, h, f, e[n + 14], 9, -1019803690)),
          (f = r(f, v, d, h, e[n + 3], 14, -187363961)),
          (h = r(h, f, v, d, e[n + 8], 20, 1163531501)),
          (d = r(d, h, f, v, e[n + 13], 5, -1444681467)),
          (v = r(v, d, h, f, e[n + 2], 9, -51403784)),
          (f = r(f, v, d, h, e[n + 7], 14, 1735328473)),
          (d = s(
            d,
            (h = r(h, f, v, d, e[n + 12], 20, -1926607734)),
            f,
            v,
            e[n + 5],
            4,
            -378558
          )),
          (v = s(v, d, h, f, e[n + 8], 11, -2022574463)),
          (f = s(f, v, d, h, e[n + 11], 16, 1839030562)),
          (h = s(h, f, v, d, e[n + 14], 23, -35309556)),
          (d = s(d, h, f, v, e[n + 1], 4, -1530992060)),
          (v = s(v, d, h, f, e[n + 4], 11, 1272893353)),
          (f = s(f, v, d, h, e[n + 7], 16, -155497632)),
          (h = s(h, f, v, d, e[n + 10], 23, -1094730640)),
          (d = s(d, h, f, v, e[n + 13], 4, 681279174)),
          (v = s(v, d, h, f, e[n], 11, -358537222)),
          (f = s(f, v, d, h, e[n + 3], 16, -722521979)),
          (h = s(h, f, v, d, e[n + 6], 23, 76029189)),
          (d = s(d, h, f, v, e[n + 9], 4, -640364487)),
          (v = s(v, d, h, f, e[n + 12], 11, -421815835)),
          (f = s(f, v, d, h, e[n + 15], 16, 530742520)),
          (d = a(
            d,
            (h = s(h, f, v, d, e[n + 2], 23, -995338651)),
            f,
            v,
            e[n],
            6,
            -198630844
          )),
          (v = a(v, d, h, f, e[n + 7], 10, 1126891415)),
          (f = a(f, v, d, h, e[n + 14], 15, -1416354905)),
          (h = a(h, f, v, d, e[n + 5], 21, -57434055)),
          (d = a(d, h, f, v, e[n + 12], 6, 1700485571)),
          (v = a(v, d, h, f, e[n + 3], 10, -1894986606)),
          (f = a(f, v, d, h, e[n + 10], 15, -1051523)),
          (h = a(h, f, v, d, e[n + 1], 21, -2054922799)),
          (d = a(d, h, f, v, e[n + 8], 6, 1873313359)),
          (v = a(v, d, h, f, e[n + 15], 10, -30611744)),
          (f = a(f, v, d, h, e[n + 6], 15, -1560198380)),
          (h = a(h, f, v, d, e[n + 13], 21, 1309151649)),
          (d = a(d, h, f, v, e[n + 4], 6, -145523070)),
          (v = a(v, d, h, f, e[n + 11], 10, -1120210379)),
          (f = a(f, v, d, h, e[n + 2], 15, 718787259)),
          (h = a(h, f, v, d, e[n + 9], 21, -343485551)),
          (d = i(d, u)),
          (h = i(h, c)),
          (f = i(f, l)),
          (v = i(v, p));
      return [d, h, f, v];
    }
    function c(e) {
      var t,
        i = "",
        n = 32 * e.length;
      for (t = 0; t < n; t += 8)
        i += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
      return i;
    }
    function l(e) {
      var t,
        i = [];
      for (i[(e.length >> 2) - 1] = void 0, t = 0; t < i.length; t += 1)
        i[t] = 0;
      var n = 8 * e.length;
      for (t = 0; t < n; t += 8)
        i[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
      return i;
    }
    function p(e) {
      var t,
        i,
        n = "0123456789abcdef",
        o = "";
      for (i = 0; i < e.length; i += 1)
        (t = e.charCodeAt(i)),
          (o += n.charAt((t >>> 4) & 15) + n.charAt(15 & t));
      return o;
    }
    function d(e) {
      return unescape(encodeURIComponent(e));
    }
    function h(e) {
      return (function (e) {
        return c(u(l(e), 8 * e.length));
      })(d(e));
    }
    function f(e, t) {
      return (function (e, t) {
        var i,
          n,
          o = l(e),
          r = [],
          s = [];
        for (
          r[15] = s[15] = void 0,
            o.length > 16 && (o = u(o, 8 * e.length)),
            i = 0;
          i < 16;
          i += 1
        )
          (r[i] = 909522486 ^ o[i]), (s[i] = 1549556828 ^ o[i]);
        return (
          (n = u(r.concat(l(t)), 512 + 8 * t.length)), c(u(s.concat(n), 640))
        );
      })(d(e), d(t));
    }
    function v(e, t, i) {
      return t ? (i ? f(t, e) : p(f(t, e))) : i ? h(e) : p(h(e));
    }
    t.exports ? (t.exports = v) : (e.md5 = v);
  })(i);
var o = n.exports,
  r = {},
  s = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable;
function c(e) {
  if (null == e)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
var l = (function () {
    try {
      if (!Object.assign) return !1;
      var e = new String("abc");
      if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
      for (var t = {}, i = 0; i < 10; i++) t["_" + String.fromCharCode(i)] = i;
      if (
        "0123456789" !==
        Object.getOwnPropertyNames(t)
          .map(function (e) {
            return t[e];
          })
          .join("")
      )
        return !1;
      var n = {};
      return (
        "abcdefghijklmnopqrst".split("").forEach(function (e) {
          n[e] = e;
        }),
        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
      );
    } catch (e) {
      return !1;
    }
  })()
    ? Object.assign
    : function (e, t) {
        for (var i, n, o = c(e), r = 1; r < arguments.length; r++) {
          for (var l in (i = Object(arguments[r])))
            a.call(i, l) && (o[l] = i[l]);
          if (s) {
            n = s(i);
            for (var p = 0; p < n.length; p++)
              u.call(i, n[p]) && (o[n[p]] = i[n[p]]);
          }
        }
        return o;
      },
  p = new RegExp("%[a-f0-9]{2}", "gi"),
  d = new RegExp("(%[a-f0-9]{2})+", "gi");
function h(e, t) {
  try {
    return decodeURIComponent(e.join(""));
  } catch (e) {}
  if (1 === e.length) return e;
  t = t || 1;
  var i = e.slice(0, t),
    n = e.slice(t);
  return Array.prototype.concat.call([], h(i), h(n));
}
function f(e) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    for (var t = e.match(p), i = 1; i < t.length; i++)
      t = (e = h(t, i).join("")).match(p);
    return e;
  }
}
var v = l,
  b = function (e) {
    if ("string" != typeof e)
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`"
      );
    try {
      return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
    } catch (t) {
      return (function (e) {
        for (var t = { "%FE%FF": "��", "%FF%FE": "��" }, i = d.exec(e); i; ) {
          try {
            t[i[0]] = decodeURIComponent(i[0]);
          } catch (e) {
            var n = f(i[0]);
            n !== i[0] && (t[i[0]] = n);
          }
          i = d.exec(e);
        }
        t["%C2"] = "�";
        for (var o = Object.keys(t), r = 0; r < o.length; r++) {
          var s = o[r];
          e = e.replace(new RegExp(s, "g"), t[s]);
        }
        return e;
      })(e);
    }
  };
function m(e, t) {
  return t.encode
    ? t.strict
      ? encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        })
      : encodeURIComponent(e)
    : e;
}
function g(e) {
  return Array.isArray(e)
    ? e.sort()
    : "object" == typeof e
    ? g(Object.keys(e))
        .sort(function (e, t) {
          return Number(e) - Number(t);
        })
        .map(function (t) {
          return e[t];
        })
    : e;
}
function y(e) {
  var t = e.indexOf("?");
  return -1 === t ? "" : e.slice(t + 1);
}
function w(e, t) {
  var i = (function (e) {
      var t;
      switch (e.arrayFormat) {
        case "index":
          return function (e, i, n) {
            (t = /\[(\d*)\]$/.exec(e)),
              (e = e.replace(/\[\d*\]$/, "")),
              t
                ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = i))
                : (n[e] = i);
          };
        case "bracket":
          return function (e, i, n) {
            (t = /(\[\])$/.exec(e)),
              (e = e.replace(/\[\]$/, "")),
              t
                ? void 0 !== n[e]
                  ? (n[e] = [].concat(n[e], i))
                  : (n[e] = [i])
                : (n[e] = i);
          };
        default:
          return function (e, t, i) {
            void 0 !== i[e] ? (i[e] = [].concat(i[e], t)) : (i[e] = t);
          };
      }
    })((t = v({ arrayFormat: "none" }, t))),
    n = Object.create(null);
  return "string" != typeof e
    ? n
    : (e = e.trim().replace(/^[?#&]/, ""))
    ? (e.split("&").forEach(function (e) {
        var t = e.replace(/\+/g, " ").split("="),
          o = t.shift(),
          r = t.length > 0 ? t.join("=") : void 0;
        (r = void 0 === r ? null : b(r)), i(b(o), r, n);
      }),
      Object.keys(n)
        .sort()
        .reduce(function (e, t) {
          var i = n[t];
          return (
            Boolean(i) && "object" == typeof i && !Array.isArray(i)
              ? (e[t] = g(i))
              : (e[t] = i),
            e
          );
        }, Object.create(null)))
    : n;
}
(r.extract = y),
  (r.parse = w),
  (r.stringify = function (e, t) {
    !1 === (t = v({ encode: !0, strict: !0, arrayFormat: "none" }, t)).sort &&
      (t.sort = function () {});
    var i = (function (e) {
      switch (e.arrayFormat) {
        case "index":
          return function (t, i, n) {
            return null === i
              ? [m(t, e), "[", n, "]"].join("")
              : [m(t, e), "[", m(n, e), "]=", m(i, e)].join("");
          };
        case "bracket":
          return function (t, i) {
            return null === i ? m(t, e) : [m(t, e), "[]=", m(i, e)].join("");
          };
        default:
          return function (t, i) {
            return null === i ? m(t, e) : [m(t, e), "=", m(i, e)].join("");
          };
      }
    })(t);
    return e
      ? Object.keys(e)
          .sort(t.sort)
          .map(function (n) {
            var o = e[n];
            if (void 0 === o) return "";
            if (null === o) return m(n, t);
            if (Array.isArray(o)) {
              var r = [];
              return (
                o.slice().forEach(function (e) {
                  void 0 !== e && r.push(i(n, e, r.length));
                }),
                r.join("&")
              );
            }
            return m(n, t) + "=" + m(o, t);
          })
          .filter(function (e) {
            return e.length > 0;
          })
          .join("&")
      : "";
  }),
  (r.parseUrl = function (e, t) {
    return { url: e.split("?")[0] || "", query: w(y(e), t) };
  });
var _ = { exports: {} };
!(function (e, t) {
  !(function (i, n) {
    var o = "function",
      r = "undefined",
      s = "object",
      a = "string",
      u = "model",
      c = "name",
      l = "type",
      p = "vendor",
      d = "version",
      h = "architecture",
      f = "console",
      v = "mobile",
      b = "tablet",
      m = "smarttv",
      g = "wearable",
      y = "embedded",
      w = "Amazon",
      _ = "Apple",
      I = "ASUS",
      k = "BlackBerry",
      S = "Google",
      x = "Huawei",
      O = "LG",
      E = "Microsoft",
      C = "Motorola",
      N = "Samsung",
      A = "Sony",
      T = "Xiaomi",
      q = "Zebra",
      j = function (e) {
        for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
        return t;
      },
      P = function (e, t) {
        return typeof e === a && -1 !== R(t).indexOf(R(e));
      },
      R = function (e) {
        return e.toLowerCase();
      },
      U = function (e, t) {
        if (typeof e === a)
          return (
            (e = e.replace(/^\s+|\s+$/g, "")),
            typeof t === r ? e : e.substring(0, 255)
          );
      },
      D = function (e, t) {
        for (var i, r, a, u, c, l, p = 0; p < t.length && !c; ) {
          var d = t[p],
            h = t[p + 1];
          for (i = r = 0; i < d.length && !c; )
            if ((c = d[i++].exec(e)))
              for (a = 0; a < h.length; a++)
                (l = c[++r]),
                  typeof (u = h[a]) === s && u.length > 0
                    ? 2 == u.length
                      ? typeof u[1] == o
                        ? (this[u[0]] = u[1].call(this, l))
                        : (this[u[0]] = u[1])
                      : 3 == u.length
                      ? typeof u[1] !== o || (u[1].exec && u[1].test)
                        ? (this[u[0]] = l ? l.replace(u[1], u[2]) : n)
                        : (this[u[0]] = l ? u[1].call(this, l, u[2]) : n)
                      : 4 == u.length &&
                        (this[u[0]] = l
                          ? u[3].call(this, l.replace(u[1], u[2]))
                          : n)
                    : (this[u] = l || n);
          p += 2;
        }
      },
      z = function (e, t) {
        for (var i in t)
          if (typeof t[i] === s && t[i].length > 0) {
            for (var o = 0; o < t[i].length; o++)
              if (P(t[i][o], e)) return "?" === i ? n : i;
          } else if (P(t[i], e)) return "?" === i ? n : i;
        return e;
      },
      M = {
        ME: "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        2e3: "NT 5.0",
        XP: ["NT 5.1", "NT 5.2"],
        Vista: "NT 6.0",
        7: "NT 6.1",
        8: "NT 6.2",
        8.1: "NT 6.3",
        10: ["NT 6.4", "NT 10.0"],
        RT: "ARM",
      },
      B = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [d, [c, "Chrome"]],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [d, [c, "Edge"]],
          [
            /(opera mini)\/([-\w\.]+)/i,
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
          ],
          [c, d],
          [/opios[\/ ]+([\w\.]+)/i],
          [d, [c, "Opera Mini"]],
          [/\bopr\/([\w\.]+)/i],
          [d, [c, "Opera"]],
          [
            /(kindle)\/([\w\.]+)/i,
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
            /(?:ms|\()(ie) ([\w\.]+)/i,
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
            /(weibo)__([\d\.]+)/i,
          ],
          [c, d],
          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
          [d, [c, "UCBrowser"]],
          [/\bqbcore\/([\w\.]+)/i],
          [d, [c, "WeChat(Win) Desktop"]],
          [/micromessenger\/([\w\.]+)/i],
          [d, [c, "WeChat"]],
          [/konqueror\/([\w\.]+)/i],
          [d, [c, "Konqueror"]],
          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
          [d, [c, "IE"]],
          [/yabrowser\/([\w\.]+)/i],
          [d, [c, "Yandex"]],
          [/(avast|avg)\/([\w\.]+)/i],
          [[c, /(.+)/, "$1 Secure Browser"], d],
          [/\bfocus\/([\w\.]+)/i],
          [d, [c, "Firefox Focus"]],
          [/\bopt\/([\w\.]+)/i],
          [d, [c, "Opera Touch"]],
          [/coc_coc\w+\/([\w\.]+)/i],
          [d, [c, "Coc Coc"]],
          [/dolfin\/([\w\.]+)/i],
          [d, [c, "Dolphin"]],
          [/coast\/([\w\.]+)/i],
          [d, [c, "Opera Coast"]],
          [/miuibrowser\/([\w\.]+)/i],
          [d, [c, "MIUI Browser"]],
          [/fxios\/([-\w\.]+)/i],
          [d, [c, "Firefox"]],
          [/\bqihu|(qi?ho?o?|360)browser/i],
          [[c, "360 Browser"]],
          [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
          [[c, /(.+)/, "$1 Browser"], d],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [[c, /_/g, " "], d],
          [
            /(electron)\/([\w\.]+) safari/i,
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
          ],
          [c, d],
          [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
          [c],
          [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
          [[c, "Facebook"], d],
          [
            /safari (line)\/([\w\.]+)/i,
            /\b(line)\/([\w\.]+)\/iab/i,
            /(chromium|instagram)[\/ ]([-\w\.]+)/i,
          ],
          [c, d],
          [/\bgsa\/([\w\.]+) .*safari\//i],
          [d, [c, "GSA"]],
          [/headlesschrome(?:\/([\w\.]+)| )/i],
          [d, [c, "Chrome Headless"]],
          [/ wv\).+(chrome)\/([\w\.]+)/i],
          [[c, "Chrome WebView"], d],
          [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
          [d, [c, "Android Browser"]],
          [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
          [c, d],
          [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
          [d, [c, "Mobile Safari"]],
          [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
          [d, c],
          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
          [
            c,
            [
              d,
              z,
              {
                "1.0": "/8",
                1.2: "/1",
                1.3: "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/",
              },
            ],
          ],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [c, d],
          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
          [[c, "Netscape"], d],
          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
          [d, [c, "Firefox Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            /(swiftfox)/i,
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            /(firefox)\/([\w\.]+)/i,
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            /(links) \(([\w\.]+)/i,
          ],
          [c, d],
        ],
        cpu: [
          [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
          [[h, "amd64"]],
          [/(ia32(?=;))/i],
          [[h, R]],
          [/((?:i[346]|x)86)[;\)]/i],
          [[h, "ia32"]],
          [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
          [[h, "arm64"]],
          [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
          [[h, "armhf"]],
          [/windows (ce|mobile); ppc;/i],
          [[h, "arm"]],
          [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
          [[h, /ower/, "", R]],
          [/(sun4\w)[;\)]/i],
          [[h, "sparc"]],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
          ],
          [[h, R]],
        ],
        device: [
          [
            /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
          ],
          [u, [p, N], [l, b]],
          [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i,
          ],
          [u, [p, N], [l, v]],
          [/((ipod|iphone)\d+,\d+)/i],
          [u, [p, _], [l, v]],
          [/(ipad\d+,\d+)/i],
          [u, [p, _], [l, b]],
          [/\((ip(?:hone|od)[\w ]*);/i],
          [u, [p, _], [l, v]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
          ],
          [u, [p, _], [l, b]],
          [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
          [u, [p, x], [l, b]],
          [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i,
          ],
          [u, [p, x], [l, v]],
          [
            /\b(poco[\w ]+)(?: bui|\))/i,
            /\b; (\w+) build\/hm\1/i,
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
          ],
          [
            [u, /_/g, " "],
            [p, T],
            [l, v],
          ],
          [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
          [
            [u, /_/g, " "],
            [p, T],
            [l, b],
          ],
          [
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i,
          ],
          [u, [p, "OPPO"], [l, v]],
          [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
          [u, [p, "Vivo"], [l, v]],
          [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
          [u, [p, "Realme"], [l, v]],
          [
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
          ],
          [u, [p, C], [l, v]],
          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
          [u, [p, C], [l, b]],
          [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
          [u, [p, O], [l, b]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i,
          ],
          [u, [p, O], [l, v]],
          [
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
          ],
          [u, [p, "Lenovo"], [l, b]],
          [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
          [
            [u, /_/g, " "],
            [p, "Nokia"],
            [l, v],
          ],
          [/(pixel c)\b/i],
          [u, [p, S], [l, b]],
          [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
          [u, [p, S], [l, v]],
          [
            /droid.+ ([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
          ],
          [u, [p, A], [l, v]],
          [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
          [
            [u, "Xperia Tablet"],
            [p, A],
            [l, b],
          ],
          [
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
          ],
          [u, [p, "OnePlus"], [l, v]],
          [
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)( bui|\))/i,
            /(kf[a-z]+)( bui|\)).+silk\//i,
          ],
          [u, [p, w], [l, b]],
          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
          [
            [u, /(.+)/g, "Fire Phone $1"],
            [p, w],
            [l, v],
          ],
          [/(playbook);[-\w\),; ]+(rim)/i],
          [u, p, [l, b]],
          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
          [u, [p, k], [l, v]],
          [
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
          ],
          [u, [p, I], [l, b]],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [u, [p, I], [l, v]],
          [/(nexus 9)/i],
          [u, [p, "HTC"], [l, b]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i,
          ],
          [p, [u, /_/g, " "], [l, v]],
          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
          [u, [p, "Acer"], [l, b]],
          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
          [u, [p, "Meizu"], [l, v]],
          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
          [u, [p, "Sharp"], [l, v]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
            /(hp) ([\w ]+\w)/i,
            /(asus)-?(\w+)/i,
            /(microsoft); (lumia[\w ]+)/i,
            /(lenovo)[-_ ]?([-\w]+)/i,
            /(jolla)/i,
            /(oppo) ?([\w ]+) bui/i,
          ],
          [p, u, [l, v]],
          [
            /(archos) (gamepad2?)/i,
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            /(kindle)\/([\w\.]+)/i,
            /(nook)[\w ]+build\/(\w+)/i,
            /(dell) (strea[kpr\d ]*[\dko])/i,
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            /(trinity)[- ]*(t\d{3}) bui/i,
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            /(vodafone) ([\w ]+)(?:\)| bui)/i,
          ],
          [p, u, [l, b]],
          [/(surface duo)/i],
          [u, [p, E], [l, b]],
          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
          [u, [p, "Fairphone"], [l, v]],
          [/(u304aa)/i],
          [u, [p, "AT&T"], [l, v]],
          [/\bsie-(\w*)/i],
          [u, [p, "Siemens"], [l, v]],
          [/\b(rct\w+) b/i],
          [u, [p, "RCA"], [l, b]],
          [/\b(venue[\d ]{2,7}) b/i],
          [u, [p, "Dell"], [l, b]],
          [/\b(q(?:mv|ta)\w+) b/i],
          [u, [p, "Verizon"], [l, b]],
          [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
          [u, [p, "Barnes & Noble"], [l, b]],
          [/\b(tm\d{3}\w+) b/i],
          [u, [p, "NuVision"], [l, b]],
          [/\b(k88) b/i],
          [u, [p, "ZTE"], [l, b]],
          [/\b(nx\d{3}j) b/i],
          [u, [p, "ZTE"], [l, v]],
          [/\b(gen\d{3}) b.+49h/i],
          [u, [p, "Swiss"], [l, v]],
          [/\b(zur\d{3}) b/i],
          [u, [p, "Swiss"], [l, b]],
          [/\b((zeki)?tb.*\b) b/i],
          [u, [p, "Zeki"], [l, b]],
          [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
          [[p, "Dragon Touch"], u, [l, b]],
          [/\b(ns-?\w{0,9}) b/i],
          [u, [p, "Insignia"], [l, b]],
          [/\b((nxa|next)-?\w{0,9}) b/i],
          [u, [p, "NextBook"], [l, b]],
          [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
          [[p, "Voice"], u, [l, v]],
          [/\b(lvtel\-)?(v1[12]) b/i],
          [[p, "LvTel"], u, [l, v]],
          [/\b(ph-1) /i],
          [u, [p, "Essential"], [l, v]],
          [/\b(v(100md|700na|7011|917g).*\b) b/i],
          [u, [p, "Envizen"], [l, b]],
          [/\b(trio[-\w\. ]+) b/i],
          [u, [p, "MachSpeed"], [l, b]],
          [/\btu_(1491) b/i],
          [u, [p, "Rotor"], [l, b]],
          [/(shield[\w ]+) b/i],
          [u, [p, "Nvidia"], [l, b]],
          [/(sprint) (\w+)/i],
          [p, u, [l, v]],
          [/(kin\.[onetw]{3})/i],
          [
            [u, /\./g, " "],
            [p, E],
            [l, v],
          ],
          [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [u, [p, q], [l, b]],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [u, [p, q], [l, v]],
          [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
          [p, u, [l, f]],
          [/droid.+; (shield) bui/i],
          [u, [p, "Nvidia"], [l, f]],
          [/(playstation [345portablevi]+)/i],
          [u, [p, A], [l, f]],
          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
          [u, [p, E], [l, f]],
          [/smart-tv.+(samsung)/i],
          [p, [l, m]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [u, /^/, "SmartTV"],
            [p, N],
            [l, m],
          ],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [p, O],
            [l, m],
          ],
          [/(apple) ?tv/i],
          [p, [u, "Apple TV"], [l, m]],
          [/crkey/i],
          [
            [u, "Chromecast"],
            [p, S],
            [l, m],
          ],
          [/droid.+aft(\w)( bui|\))/i],
          [u, [p, w], [l, m]],
          [/\(dtv[\);].+(aquos)/i],
          [u, [p, "Sharp"], [l, m]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
          ],
          [
            [p, U],
            [u, U],
            [l, m],
          ],
          [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
          [[l, m]],
          [/((pebble))app/i],
          [p, u, [l, g]],
          [/droid.+; (glass) \d/i],
          [u, [p, S], [l, g]],
          [/droid.+; (wt63?0{2,3})\)/i],
          [u, [p, q], [l, g]],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [p, [l, y]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
          [u, [l, v]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
          [u, [l, b]],
          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
          [[l, b]],
          [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
          [[l, v]],
          [/(android[-\w\. ]{0,9});.+buil/i],
          [u, [p, "Generic"]],
        ],
        engine: [
          [/windows.+ edge\/([\w\.]+)/i],
          [d, [c, "EdgeHTML"]],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [d, [c, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
            /ekioh(flow)\/([\w\.]+)/i,
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
          ],
          [c, d],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [d, c],
        ],
        os: [
          [/microsoft (windows) (vista|xp)/i],
          [c, d],
          [
            /(windows) nt 6\.2; (arm)/i,
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
          ],
          [c, [d, z, M]],
          [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
          [
            [c, "Windows"],
            [d, z, M],
          ],
          [
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
            /cfnetwork\/.+darwin/i,
          ],
          [
            [d, /_/g, "."],
            [c, "iOS"],
          ],
          [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
          [
            [c, "Mac OS"],
            [d, /_/g, "."],
          ],
          [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
          [d, c],
          [
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            /(tizen|kaios)[\/ ]([\w\.]+)/i,
            /\((series40);/i,
          ],
          [c, d],
          [/\(bb(10);/i],
          [d, [c, k]],
          [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
          [d, [c, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
          ],
          [d, [c, "Firefox OS"]],
          [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
          [d, [c, "webOS"]],
          [/crkey\/([\d\.]+)/i],
          [d, [c, "Chromecast"]],
          [/(cros) [\w]+ ([\w\.]+\w)/i],
          [[c, "Chromium OS"], d],
          [
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            /(xbox); +xbox ([^\);]+)/i,
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            /(mint)[\/\(\) ]?(\w*)/i,
            /(mageia|vectorlinux)[; ]/i,
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            /(hurd|linux) ?([\w\.]*)/i,
            /(gnu) ?([\w\.]*)/i,
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            /(haiku) (\w+)/i,
          ],
          [c, d],
          [/(sunos) ?([\w\.\d]*)/i],
          [[c, "Solaris"], d],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
            /(unix) ?([\w\.]*)/i,
          ],
          [c, d],
        ],
      },
      K = function (e, t) {
        if ((typeof e === s && ((t = e), (e = n)), !(this instanceof K)))
          return new K(e, t).getResult();
        var o =
            e ||
            (typeof i !== r && i.navigator && i.navigator.userAgent
              ? i.navigator.userAgent
              : ""),
          u = t
            ? (function (e, t) {
                var i = {};
                for (var n in e)
                  t[n] && t[n].length % 2 == 0
                    ? (i[n] = t[n].concat(e[n]))
                    : (i[n] = e[n]);
                return i;
              })(B, t)
            : B;
        return (
          (this.getBrowser = function () {
            var e,
              t = {};
            return (
              (t.name = n),
              (t.version = n),
              D.call(t, o, u.browser),
              (t.major =
                typeof (e = t.version) === a
                  ? e.replace(/[^\d\.]/g, "").split(".")[0]
                  : n),
              t
            );
          }),
          (this.getCPU = function () {
            var e = {};
            return (e.architecture = n), D.call(e, o, u.cpu), e;
          }),
          (this.getDevice = function () {
            var e = {};
            return (
              (e.vendor = n),
              (e.model = n),
              (e.type = n),
              D.call(e, o, u.device),
              e
            );
          }),
          (this.getEngine = function () {
            var e = {};
            return (e.name = n), (e.version = n), D.call(e, o, u.engine), e;
          }),
          (this.getOS = function () {
            var e = {};
            return (e.name = n), (e.version = n), D.call(e, o, u.os), e;
          }),
          (this.getResult = function () {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU(),
            };
          }),
          (this.getUA = function () {
            return o;
          }),
          (this.setUA = function (e) {
            return (o = typeof e === a && e.length > 255 ? U(e, 255) : e), this;
          }),
          this.setUA(o),
          this
        );
      };
    (K.VERSION = "0.7.28"),
      (K.BROWSER = j([c, d, "major"])),
      (K.CPU = j([h])),
      (K.DEVICE = j([u, p, l, f, v, m, b, g, y])),
      (K.ENGINE = K.OS = j([c, d])),
      e.exports && (t = e.exports = K),
      (t.UAParser = K);
    var F = typeof i !== r && (i.jQuery || i.Zepto);
    if (F && !F.ua) {
      var $ = new K();
      (F.ua = $.getResult()),
        (F.ua.get = function () {
          return $.getUA();
        }),
        (F.ua.set = function (e) {
          $.setUA(e);
          var t = $.getResult();
          for (var i in t) F.ua[i] = t[i];
        });
    }
  })("object" == typeof window ? window : i);
})(_, _.exports);
var I = _.exports,
  k = { exports: {} };
function S(e) {
  return (
    (S =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    S(e)
  );
}
function x(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function O(e, t) {
  for (var i = 0; i < t.length; i++) {
    var n = t[i];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function E(e, t, i) {
  return t && O(e.prototype, t), i && O(e, i), e;
}
function C(e, t, i) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = i),
    e
  );
}
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols &&
      (n = n.concat(
        Object.getOwnPropertySymbols(i).filter(function (e) {
          return Object.getOwnPropertyDescriptor(i, e).enumerable;
        })
      )),
      n.forEach(function (t) {
        C(e, t, i[t]);
      });
  }
  return e;
}
!(function (e) {
  var t =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : void 0 !== i
        ? i
        : "undefined" != typeof self
        ? self
        : {},
    n = (function (e, i, n) {
      return (
        (function (e, i) {
          !(function (t, n) {
            var o = "function",
              r = "undefined",
              s = "object",
              a = "string",
              u = "model",
              c = "name",
              l = "type",
              p = "vendor",
              d = "version",
              h = "architecture",
              f = "console",
              v = "mobile",
              b = "tablet",
              m = "smarttv",
              g = "wearable",
              y = "embedded",
              w = "Amazon",
              _ = "Apple",
              I = "ASUS",
              k = "BlackBerry",
              S = "Google",
              x = "Huawei",
              O = "LG",
              E = "Microsoft",
              C = "Motorola",
              N = "Samsung",
              A = "Sony",
              T = "Xiaomi",
              q = "Zebra",
              j = function (e) {
                for (var t = {}, i = 0; i < e.length; i++)
                  t[e[i].toUpperCase()] = e[i];
                return t;
              },
              P = function (e, t) {
                return typeof e === a && -1 !== R(t).indexOf(R(e));
              },
              R = function (e) {
                return e.toLowerCase();
              },
              U = function (e, t) {
                if (typeof e === a)
                  return (
                    (e = e.replace(/^\s+|\s+$/g, "")),
                    typeof t === r ? e : e.substring(0, 255)
                  );
              },
              D = function (e, t) {
                for (var i, r, a, u, c, l, p = 0; p < t.length && !c; ) {
                  var d = t[p],
                    h = t[p + 1];
                  for (i = r = 0; i < d.length && !c; )
                    if ((c = d[i++].exec(e)))
                      for (a = 0; a < h.length; a++)
                        (l = c[++r]),
                          typeof (u = h[a]) === s && u.length > 0
                            ? 2 == u.length
                              ? typeof u[1] == o
                                ? (this[u[0]] = u[1].call(this, l))
                                : (this[u[0]] = u[1])
                              : 3 == u.length
                              ? typeof u[1] !== o || (u[1].exec && u[1].test)
                                ? (this[u[0]] = l ? l.replace(u[1], u[2]) : n)
                                : (this[u[0]] = l
                                    ? u[1].call(this, l, u[2])
                                    : n)
                              : 4 == u.length &&
                                (this[u[0]] = l
                                  ? u[3].call(this, l.replace(u[1], u[2]))
                                  : n)
                            : (this[u] = l || n);
                  p += 2;
                }
              },
              z = function (e, t) {
                for (var i in t)
                  if (typeof t[i] === s && t[i].length > 0) {
                    for (var o = 0; o < t[i].length; o++)
                      if (P(t[i][o], e)) return "?" === i ? n : i;
                  } else if (P(t[i], e)) return "?" === i ? n : i;
                return e;
              },
              M = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                8.1: "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM",
              },
              B = {
                browser: [
                  [/\b(?:crmo|crios)\/([\w\.]+)/i],
                  [d, [c, "Chrome"]],
                  [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                  [d, [c, "Edge"]],
                  [
                    /(opera mini)\/([-\w\.]+)/i,
                    /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                    /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                  ],
                  [c, d],
                  [/opios[\/ ]+([\w\.]+)/i],
                  [d, [c, "Opera Mini"]],
                  [/\bopr\/([\w\.]+)/i],
                  [d, [c, "Opera"]],
                  [
                    /(kindle)\/([\w\.]+)/i,
                    /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                    /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                    /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                    /(?:ms|\()(ie) ([\w\.]+)/i,
                    /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                    /(weibo)__([\d\.]+)/i,
                  ],
                  [c, d],
                  [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                  [d, [c, "UCBrowser"]],
                  [/\bqbcore\/([\w\.]+)/i],
                  [d, [c, "WeChat(Win) Desktop"]],
                  [/micromessenger\/([\w\.]+)/i],
                  [d, [c, "WeChat"]],
                  [/konqueror\/([\w\.]+)/i],
                  [d, [c, "Konqueror"]],
                  [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                  [d, [c, "IE"]],
                  [/yabrowser\/([\w\.]+)/i],
                  [d, [c, "Yandex"]],
                  [/(avast|avg)\/([\w\.]+)/i],
                  [[c, /(.+)/, "$1 Secure Browser"], d],
                  [/\bfocus\/([\w\.]+)/i],
                  [d, [c, "Firefox Focus"]],
                  [/\bopt\/([\w\.]+)/i],
                  [d, [c, "Opera Touch"]],
                  [/coc_coc\w+\/([\w\.]+)/i],
                  [d, [c, "Coc Coc"]],
                  [/dolfin\/([\w\.]+)/i],
                  [d, [c, "Dolphin"]],
                  [/coast\/([\w\.]+)/i],
                  [d, [c, "Opera Coast"]],
                  [/miuibrowser\/([\w\.]+)/i],
                  [d, [c, "MIUI Browser"]],
                  [/fxios\/([-\w\.]+)/i],
                  [d, [c, "Firefox"]],
                  [/\bqihu|(qi?ho?o?|360)browser/i],
                  [[c, "360 Browser"]],
                  [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                  [[c, /(.+)/, "$1 Browser"], d],
                  [/(comodo_dragon)\/([\w\.]+)/i],
                  [[c, /_/g, " "], d],
                  [
                    /(electron)\/([\w\.]+) safari/i,
                    /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                    /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
                  ],
                  [c, d],
                  [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                  [c],
                  [
                    /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i,
                  ],
                  [[c, "Facebook"], d],
                  [
                    /safari (line)\/([\w\.]+)/i,
                    /\b(line)\/([\w\.]+)\/iab/i,
                    /(chromium|instagram)[\/ ]([-\w\.]+)/i,
                  ],
                  [c, d],
                  [/\bgsa\/([\w\.]+) .*safari\//i],
                  [d, [c, "GSA"]],
                  [/headlesschrome(?:\/([\w\.]+)| )/i],
                  [d, [c, "Chrome Headless"]],
                  [/ wv\).+(chrome)\/([\w\.]+)/i],
                  [[c, "Chrome WebView"], d],
                  [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                  [d, [c, "Android Browser"]],
                  [
                    /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i,
                  ],
                  [c, d],
                  [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                  [d, [c, "Mobile Safari"]],
                  [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                  [d, c],
                  [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                  [
                    c,
                    [
                      d,
                      z,
                      {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/",
                      },
                    ],
                  ],
                  [/(webkit|khtml)\/([\w\.]+)/i],
                  [c, d],
                  [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                  [[c, "Netscape"], d],
                  [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                  [d, [c, "Firefox Reality"]],
                  [
                    /ekiohf.+(flow)\/([\w\.]+)/i,
                    /(swiftfox)/i,
                    /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                    /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                    /(firefox)\/([\w\.]+)/i,
                    /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                    /(links) \(([\w\.]+)/i,
                  ],
                  [c, d],
                ],
                cpu: [
                  [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                  [[h, "amd64"]],
                  [/(ia32(?=;))/i],
                  [[h, R]],
                  [/((?:i[346]|x)86)[;\)]/i],
                  [[h, "ia32"]],
                  [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                  [[h, "arm64"]],
                  [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                  [[h, "armhf"]],
                  [/windows (ce|mobile); ppc;/i],
                  [[h, "arm"]],
                  [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                  [[h, /ower/, "", R]],
                  [/(sun4\w)[;\)]/i],
                  [[h, "sparc"]],
                  [
                    /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                  ],
                  [[h, R]],
                ],
                device: [
                  [
                    /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
                  ],
                  [u, [p, N], [l, b]],
                  [
                    /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                    /samsung[- ]([-\w]+)/i,
                    /sec-(sgh\w+)/i,
                  ],
                  [u, [p, N], [l, v]],
                  [/((ipod|iphone)\d+,\d+)/i],
                  [u, [p, _], [l, v]],
                  [/(ipad\d+,\d+)/i],
                  [u, [p, _], [l, b]],
                  [/\((ip(?:hone|od)[\w ]*);/i],
                  [u, [p, _], [l, v]],
                  [
                    /\((ipad);[-\w\),; ]+apple/i,
                    /applecoremedia\/[\w\.]+ \((ipad)/i,
                    /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                  ],
                  [u, [p, _], [l, b]],
                  [
                    /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i,
                  ],
                  [u, [p, x], [l, b]],
                  [
                    /(?:huawei|honor)([-\w ]+)[;\)]/i,
                    /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i,
                  ],
                  [u, [p, x], [l, v]],
                  [
                    /\b(poco[\w ]+)(?: bui|\))/i,
                    /\b; (\w+) build\/hm\1/i,
                    /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                    /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                    /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
                  ],
                  [
                    [u, /_/g, " "],
                    [p, T],
                    [l, v],
                  ],
                  [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                  [
                    [u, /_/g, " "],
                    [p, T],
                    [l, b],
                  ],
                  [
                    /; (\w+) bui.+ oppo/i,
                    /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i,
                  ],
                  [u, [p, "OPPO"], [l, v]],
                  [
                    /vivo (\w+)(?: bui|\))/i,
                    /\b(v[12]\d{3}\w?[at])(?: bui|;)/i,
                  ],
                  [u, [p, "Vivo"], [l, v]],
                  [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                  [u, [p, "Realme"], [l, v]],
                  [
                    /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                    /\bmot(?:orola)?[- ](\w*)/i,
                    /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                  ],
                  [u, [p, C], [l, v]],
                  [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                  [u, [p, C], [l, b]],
                  [
                    /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
                  ],
                  [u, [p, O], [l, b]],
                  [
                    /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                    /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                    /\blg-?([\d\w]+) bui/i,
                  ],
                  [u, [p, O], [l, v]],
                  [
                    /(ideatab[-\w ]+)/i,
                    /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
                  ],
                  [u, [p, "Lenovo"], [l, b]],
                  [
                    /(?:maemo|nokia).*(n900|lumia \d+)/i,
                    /nokia[-_ ]?([-\w\.]*)/i,
                  ],
                  [
                    [u, /_/g, " "],
                    [p, "Nokia"],
                    [l, v],
                  ],
                  [/(pixel c)\b/i],
                  [u, [p, S], [l, b]],
                  [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                  [u, [p, S], [l, v]],
                  [
                    /droid.+ ([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                  ],
                  [u, [p, A], [l, v]],
                  [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                  [
                    [u, "Xperia Tablet"],
                    [p, A],
                    [l, b],
                  ],
                  [
                    / (kb2005|in20[12]5|be20[12][59])\b/i,
                    /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
                  ],
                  [u, [p, "OnePlus"], [l, v]],
                  [
                    /(alexa)webm/i,
                    /(kf[a-z]{2}wi)( bui|\))/i,
                    /(kf[a-z]+)( bui|\)).+silk\//i,
                  ],
                  [u, [p, w], [l, b]],
                  [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                  [
                    [u, /(.+)/g, "Fire Phone $1"],
                    [p, w],
                    [l, v],
                  ],
                  [/(playbook);[-\w\),; ]+(rim)/i],
                  [u, p, [l, b]],
                  [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                  [u, [p, k], [l, v]],
                  [
                    /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
                  ],
                  [u, [p, I], [l, b]],
                  [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                  [u, [p, I], [l, v]],
                  [/(nexus 9)/i],
                  [u, [p, "HTC"], [l, b]],
                  [
                    /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                    /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                    /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i,
                  ],
                  [p, [u, /_/g, " "], [l, v]],
                  [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                  [u, [p, "Acer"], [l, b]],
                  [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                  [u, [p, "Meizu"], [l, v]],
                  [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                  [u, [p, "Sharp"], [l, v]],
                  [
                    /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                    /(hp) ([\w ]+\w)/i,
                    /(asus)-?(\w+)/i,
                    /(microsoft); (lumia[\w ]+)/i,
                    /(lenovo)[-_ ]?([-\w]+)/i,
                    /(jolla)/i,
                    /(oppo) ?([\w ]+) bui/i,
                  ],
                  [p, u, [l, v]],
                  [
                    /(archos) (gamepad2?)/i,
                    /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                    /(kindle)\/([\w\.]+)/i,
                    /(nook)[\w ]+build\/(\w+)/i,
                    /(dell) (strea[kpr\d ]*[\dko])/i,
                    /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                    /(trinity)[- ]*(t\d{3}) bui/i,
                    /(gigaset)[- ]+(q\w{1,9}) bui/i,
                    /(vodafone) ([\w ]+)(?:\)| bui)/i,
                  ],
                  [p, u, [l, b]],
                  [/(surface duo)/i],
                  [u, [p, E], [l, b]],
                  [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                  [u, [p, "Fairphone"], [l, v]],
                  [/(u304aa)/i],
                  [u, [p, "AT&T"], [l, v]],
                  [/\bsie-(\w*)/i],
                  [u, [p, "Siemens"], [l, v]],
                  [/\b(rct\w+) b/i],
                  [u, [p, "RCA"], [l, b]],
                  [/\b(venue[\d ]{2,7}) b/i],
                  [u, [p, "Dell"], [l, b]],
                  [/\b(q(?:mv|ta)\w+) b/i],
                  [u, [p, "Verizon"], [l, b]],
                  [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                  [u, [p, "Barnes & Noble"], [l, b]],
                  [/\b(tm\d{3}\w+) b/i],
                  [u, [p, "NuVision"], [l, b]],
                  [/\b(k88) b/i],
                  [u, [p, "ZTE"], [l, b]],
                  [/\b(nx\d{3}j) b/i],
                  [u, [p, "ZTE"], [l, v]],
                  [/\b(gen\d{3}) b.+49h/i],
                  [u, [p, "Swiss"], [l, v]],
                  [/\b(zur\d{3}) b/i],
                  [u, [p, "Swiss"], [l, b]],
                  [/\b((zeki)?tb.*\b) b/i],
                  [u, [p, "Zeki"], [l, b]],
                  [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                  [[p, "Dragon Touch"], u, [l, b]],
                  [/\b(ns-?\w{0,9}) b/i],
                  [u, [p, "Insignia"], [l, b]],
                  [/\b((nxa|next)-?\w{0,9}) b/i],
                  [u, [p, "NextBook"], [l, b]],
                  [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                  [[p, "Voice"], u, [l, v]],
                  [/\b(lvtel\-)?(v1[12]) b/i],
                  [[p, "LvTel"], u, [l, v]],
                  [/\b(ph-1) /i],
                  [u, [p, "Essential"], [l, v]],
                  [/\b(v(100md|700na|7011|917g).*\b) b/i],
                  [u, [p, "Envizen"], [l, b]],
                  [/\b(trio[-\w\. ]+) b/i],
                  [u, [p, "MachSpeed"], [l, b]],
                  [/\btu_(1491) b/i],
                  [u, [p, "Rotor"], [l, b]],
                  [/(shield[\w ]+) b/i],
                  [u, [p, "Nvidia"], [l, b]],
                  [/(sprint) (\w+)/i],
                  [p, u, [l, v]],
                  [/(kin\.[onetw]{3})/i],
                  [
                    [u, /\./g, " "],
                    [p, E],
                    [l, v],
                  ],
                  [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                  [u, [p, q], [l, b]],
                  [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                  [u, [p, q], [l, v]],
                  [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                  [p, u, [l, f]],
                  [/droid.+; (shield) bui/i],
                  [u, [p, "Nvidia"], [l, f]],
                  [/(playstation [345portablevi]+)/i],
                  [u, [p, A], [l, f]],
                  [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                  [u, [p, E], [l, f]],
                  [/smart-tv.+(samsung)/i],
                  [p, [l, m]],
                  [/hbbtv.+maple;(\d+)/i],
                  [
                    [u, /^/, "SmartTV"],
                    [p, N],
                    [l, m],
                  ],
                  [
                    /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i,
                  ],
                  [
                    [p, O],
                    [l, m],
                  ],
                  [/(apple) ?tv/i],
                  [p, [u, "Apple TV"], [l, m]],
                  [/crkey/i],
                  [
                    [u, "Chromecast"],
                    [p, S],
                    [l, m],
                  ],
                  [/droid.+aft(\w)( bui|\))/i],
                  [u, [p, w], [l, m]],
                  [/\(dtv[\);].+(aquos)/i],
                  [u, [p, "Sharp"], [l, m]],
                  [
                    /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                    /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
                  ],
                  [
                    [p, U],
                    [u, U],
                    [l, m],
                  ],
                  [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                  [[l, m]],
                  [/((pebble))app/i],
                  [p, u, [l, g]],
                  [/droid.+; (glass) \d/i],
                  [u, [p, S], [l, g]],
                  [/droid.+; (wt63?0{2,3})\)/i],
                  [u, [p, q], [l, g]],
                  [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                  [p, [l, y]],
                  [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                  [u, [l, v]],
                  [
                    /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i,
                  ],
                  [u, [l, b]],
                  [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                  [[l, b]],
                  [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                  [[l, v]],
                  [/(android[-\w\. ]{0,9});.+buil/i],
                  [u, [p, "Generic"]],
                ],
                engine: [
                  [/windows.+ edge\/([\w\.]+)/i],
                  [d, [c, "EdgeHTML"]],
                  [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                  [d, [c, "Blink"]],
                  [
                    /(presto)\/([\w\.]+)/i,
                    /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                    /ekioh(flow)\/([\w\.]+)/i,
                    /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                    /(icab)[\/ ]([23]\.[\d\.]+)/i,
                  ],
                  [c, d],
                  [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                  [d, c],
                ],
                os: [
                  [/microsoft (windows) (vista|xp)/i],
                  [c, d],
                  [
                    /(windows) nt 6\.2; (arm)/i,
                    /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                    /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                  ],
                  [c, [d, z, M]],
                  [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                  [
                    [c, "Windows"],
                    [d, z, M],
                  ],
                  [
                    /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                    /cfnetwork\/.+darwin/i,
                  ],
                  [
                    [d, /_/g, "."],
                    [c, "iOS"],
                  ],
                  [
                    /(mac os x) ?([\w\. ]*)/i,
                    /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
                  ],
                  [
                    [c, "Mac OS"],
                    [d, /_/g, "."],
                  ],
                  [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                  [d, c],
                  [
                    /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                    /(blackberry)\w*\/([\w\.]*)/i,
                    /(tizen|kaios)[\/ ]([\w\.]+)/i,
                    /\((series40);/i,
                  ],
                  [c, d],
                  [/\(bb(10);/i],
                  [d, [c, k]],
                  [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                  [d, [c, "Symbian"]],
                  [
                    /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
                  ],
                  [d, [c, "Firefox OS"]],
                  [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                  [d, [c, "webOS"]],
                  [/crkey\/([\d\.]+)/i],
                  [d, [c, "Chromecast"]],
                  [/(cros) [\w]+ ([\w\.]+\w)/i],
                  [[c, "Chromium OS"], d],
                  [
                    /(nintendo|playstation) ([wids345portablevuch]+)/i,
                    /(xbox); +xbox ([^\);]+)/i,
                    /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                    /(mint)[\/\(\) ]?(\w*)/i,
                    /(mageia|vectorlinux)[; ]/i,
                    /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                    /(hurd|linux) ?([\w\.]*)/i,
                    /(gnu) ?([\w\.]*)/i,
                    /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                    /(haiku) (\w+)/i,
                  ],
                  [c, d],
                  [/(sunos) ?([\w\.\d]*)/i],
                  [[c, "Solaris"], d],
                  [
                    /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                    /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                    /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                    /(unix) ?([\w\.]*)/i,
                  ],
                  [c, d],
                ],
              },
              K = function (e, i) {
                if (
                  (typeof e === s && ((i = e), (e = n)), !(this instanceof K))
                )
                  return new K(e, i).getResult();
                var o =
                    e ||
                    (typeof t !== r && t.navigator && t.navigator.userAgent
                      ? t.navigator.userAgent
                      : ""),
                  u = i
                    ? (function (e, t) {
                        var i = {};
                        for (var n in e)
                          t[n] && t[n].length % 2 == 0
                            ? (i[n] = t[n].concat(e[n]))
                            : (i[n] = e[n]);
                        return i;
                      })(B, i)
                    : B;
                return (
                  (this.getBrowser = function () {
                    var e,
                      t = {};
                    return (
                      (t.name = n),
                      (t.version = n),
                      D.call(t, o, u.browser),
                      (t.major =
                        typeof (e = t.version) === a
                          ? e.replace(/[^\d\.]/g, "").split(".")[0]
                          : n),
                      t
                    );
                  }),
                  (this.getCPU = function () {
                    var e = {};
                    return (e.architecture = n), D.call(e, o, u.cpu), e;
                  }),
                  (this.getDevice = function () {
                    var e = {};
                    return (
                      (e.vendor = n),
                      (e.model = n),
                      (e.type = n),
                      D.call(e, o, u.device),
                      e
                    );
                  }),
                  (this.getEngine = function () {
                    var e = {};
                    return (
                      (e.name = n), (e.version = n), D.call(e, o, u.engine), e
                    );
                  }),
                  (this.getOS = function () {
                    var e = {};
                    return (e.name = n), (e.version = n), D.call(e, o, u.os), e;
                  }),
                  (this.getResult = function () {
                    return {
                      ua: this.getUA(),
                      browser: this.getBrowser(),
                      engine: this.getEngine(),
                      os: this.getOS(),
                      device: this.getDevice(),
                      cpu: this.getCPU(),
                    };
                  }),
                  (this.getUA = function () {
                    return o;
                  }),
                  (this.setUA = function (e) {
                    return (
                      (o = typeof e === a && e.length > 255 ? U(e, 255) : e),
                      this
                    );
                  }),
                  this.setUA(o),
                  this
                );
              };
            (K.VERSION = "0.7.28"),
              (K.BROWSER = j([c, d, "major"])),
              (K.CPU = j([h])),
              (K.DEVICE = j([u, p, l, f, v, m, b, g, y])),
              (K.ENGINE = K.OS = j([c, d])),
              e.exports && (i = e.exports = K),
              (i.UAParser = K);
            var F = typeof t !== r && (t.jQuery || t.Zepto);
            if (F && !F.ua) {
              var $ = new K();
              (F.ua = $.getResult()),
                (F.ua.get = function () {
                  return $.getUA();
                }),
                (F.ua.set = function (e) {
                  $.setUA(e);
                  var t = $.getResult();
                  for (var i in t) F.ua[i] = t[i];
                });
            }
          })("object" == typeof window ? window : t);
        })(
          (n = {
            path: void 0,
            exports: {},
            require: function (e, t) {
              return (function () {
                throw new Error(
                  "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                );
              })(null == t && n.path);
            },
          }),
          n.exports
        ),
        n.exports
      );
    })(),
    o = (function () {
      function e() {
        this.ua = new n.UAParser(navigator.userAgent).getResult();
      }
      return (
        (e.prototype.getApplicationContext = function () {
          return {
            versionName: this.versionName,
            language: a(),
            platform: "Web",
            os: r(this.ua),
            deviceModel: s(this.ua),
          };
        }),
        e
      );
    })(),
    r = function (e) {
      var t, i;
      return [
        null === (t = e.browser) || void 0 === t ? void 0 : t.name,
        null === (i = e.browser) || void 0 === i ? void 0 : i.major,
      ]
        .filter(function (e) {
          return null != e;
        })
        .join(" ");
    },
    s = function (e) {
      var t;
      return null === (t = e.os) || void 0 === t ? void 0 : t.name;
    },
    a = function () {
      return (
        ("undefined" != typeof navigator &&
          ((navigator.languages && navigator.languages[0]) ||
            navigator.language)) ||
        ""
      );
    },
    u = (function () {
      function e() {
        this.queue = [];
      }
      return (
        (e.prototype.logEvent = function (e) {
          this.receiver
            ? this.receiver(e)
            : this.queue.length < 512 && this.queue.push(e);
        }),
        (e.prototype.setEventReceiver = function (e) {
          (this.receiver = e),
            this.queue.length > 0 &&
              (this.queue.forEach(function (t) {
                e(t);
              }),
              (this.queue = []));
        }),
        e
      );
    })(),
    c = function () {
      return (
        (c =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++)
              for (var o in (t = arguments[i]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }),
        c.apply(this, arguments)
      );
    },
    l = (function () {
      function e() {
        (this.identity = { userProperties: {} }), (this.listeners = new Set());
      }
      return (
        (e.prototype.editIdentity = function () {
          var e = this,
            t = c({}, this.identity.userProperties),
            i = c(c({}, this.identity), { userProperties: t });
          return {
            setUserId: function (e) {
              return (i.userId = e), this;
            },
            setDeviceId: function (e) {
              return (i.deviceId = e), this;
            },
            setUserProperties: function (e) {
              return (i.userProperties = e), this;
            },
            updateUserProperties: function (e) {
              for (
                var t = i.userProperties || {}, n = 0, o = Object.entries(e);
                n < o.length;
                n++
              ) {
                var r = o[n],
                  s = r[0],
                  a = r[1];
                switch (s) {
                  case "$set":
                    for (var u = 0, c = Object.entries(a); u < c.length; u++) {
                      var l = c[u],
                        p = l[0],
                        d = l[1];
                      t[p] = d;
                    }
                    break;
                  case "$unset":
                    for (var h = 0, f = Object.keys(a); h < f.length; h++)
                      delete t[(p = f[h])];
                    break;
                  case "$clearAll":
                    t = {};
                }
              }
              return (i.userProperties = t), this;
            },
            commit: function () {
              return e.setIdentity(i), this;
            },
          };
        }),
        (e.prototype.getIdentity = function () {
          return c({}, this.identity);
        }),
        (e.prototype.setIdentity = function (e) {
          var t = c({}, this.identity);
          (this.identity = c({}, e)),
            p(t, this.identity) ||
              this.listeners.forEach(function (t) {
                t(e);
              });
        }),
        (e.prototype.addIdentityListener = function (e) {
          this.listeners.add(e);
        }),
        (e.prototype.removeIdentityListener = function (e) {
          this.listeners.delete(e);
        }),
        e
      );
    })(),
    p = function (e, t) {
      var i = typeof e;
      if (i !== typeof t) return !1;
      if (["string", "number", "boolean", "undefined"].includes(i))
        return e === t;
      if (e.length !== t.length) return !1;
      var n = Array.isArray(e),
        o = Array.isArray(t);
      if (n !== o) return !1;
      if (!n || !o) {
        var r = Object.keys(e).sort(),
          s = Object.keys(t).sort();
        if (!p(r, s)) return !1;
        var a = !0;
        return (
          Object.keys(e).forEach(function (i) {
            p(e[i], t[i]) || (a = !1);
          }),
          a
        );
      }
      for (var u = 0; u < e.length; u++) if (!p(e[u], t[u])) return !1;
      return !0;
    },
    d = "undefined" != typeof globalThis ? globalThis : i || self,
    h = (function () {
      function e() {
        (this.identityStore = new l()),
          (this.eventBridge = new u()),
          (this.applicationContextProvider = new o());
      }
      return (
        (e.getInstance = function (t) {
          return (
            d.analyticsConnectorInstances ||
              (d.analyticsConnectorInstances = {}),
            d.analyticsConnectorInstances[t] ||
              (d.analyticsConnectorInstances[t] = new e()),
            d.analyticsConnectorInstances[t]
          );
        }),
        e
      );
    })();
  (e.AnalyticsConnector = h),
    Object.defineProperty(e, "__esModule", { value: !0 });
})(k.exports);
var A =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof global
      ? global
      : void 0,
  T = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
      try {
        if (A.btoa && A.atob) return A.btoa(unescape(encodeURIComponent(e)));
      } catch (e) {}
      return T._encode(e);
    },
    _encode: function (e) {
      var t,
        i,
        n,
        o,
        r,
        s,
        a,
        u = "",
        c = 0;
      for (
        e = (function (e) {
          for (var t = "", i = 0; i < e.length; i++) {
            var n = e.charCodeAt(i);
            n < 128
              ? (t += String.fromCharCode(n))
              : n > 127 && n < 2048
              ? ((t += String.fromCharCode((n >> 6) | 192)),
                (t += String.fromCharCode((63 & n) | 128)))
              : ((t += String.fromCharCode((n >> 12) | 224)),
                (t += String.fromCharCode(((n >> 6) & 63) | 128)),
                (t += String.fromCharCode((63 & n) | 128)));
          }
          return t;
        })(e);
        c < e.length;

      )
        (o = (t = e.charCodeAt(c++)) >> 2),
          (r = ((3 & t) << 4) | ((i = e.charCodeAt(c++)) >> 4)),
          (s = ((15 & i) << 2) | ((n = e.charCodeAt(c++)) >> 6)),
          (a = 63 & n),
          isNaN(i) ? (s = a = 64) : isNaN(n) && (a = 64),
          (u =
            u +
            T._keyStr.charAt(o) +
            T._keyStr.charAt(r) +
            T._keyStr.charAt(s) +
            T._keyStr.charAt(a));
      return u;
    },
    decode: function (e) {
      try {
        if (A.btoa && A.atob) return decodeURIComponent(escape(A.atob(e)));
      } catch (e) {}
      return T._decode(e);
    },
    _decode: function (e) {
      var t,
        i,
        n,
        o,
        r,
        s,
        a = "",
        u = 0;
      for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); u < e.length; )
        (t =
          (T._keyStr.indexOf(e.charAt(u++)) << 2) |
          ((o = T._keyStr.indexOf(e.charAt(u++))) >> 4)),
          (i = ((15 & o) << 4) | ((r = T._keyStr.indexOf(e.charAt(u++))) >> 2)),
          (n = ((3 & r) << 6) | (s = T._keyStr.indexOf(e.charAt(u++)))),
          (a += String.fromCharCode(t)),
          64 !== r && (a += String.fromCharCode(i)),
          64 !== s && (a += String.fromCharCode(n));
      return (function (e) {
        for (var t = "", i = 0, n = 0, o = 0, r = 0; i < e.length; )
          (n = e.charCodeAt(i)) < 128
            ? ((t += String.fromCharCode(n)), i++)
            : n > 191 && n < 224
            ? ((o = e.charCodeAt(i + 1)),
              (t += String.fromCharCode(((31 & n) << 6) | (63 & o))),
              (i += 2))
            : ((o = e.charCodeAt(i + 1)),
              (r = e.charCodeAt(i + 2)),
              (t += String.fromCharCode(
                ((15 & n) << 12) | ((63 & o) << 6) | (63 & r)
              )),
              (i += 3));
        return t;
      })(a);
    },
  },
  q = Object.prototype.toString;
function j(e) {
  switch (q.call(e)) {
    case "[object Date]":
      return "date";
    case "[object RegExp]":
      return "regexp";
    case "[object Arguments]":
      return "arguments";
    case "[object Array]":
      return "array";
    case "[object Error]":
      return "error";
  }
  return null === e
    ? "null"
    : void 0 === e
    ? "undefined"
    : e != e
    ? "nan"
    : e && 1 === e.nodeType
    ? "element"
    : "undefined" != typeof Buffer &&
      "function" == typeof Buffer.isBuffer &&
      Buffer.isBuffer(e)
    ? "buffer"
    : S((e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e)));
}
var P,
  R = { DISABLE: 0, ERROR: 1, WARN: 2, INFO: 3 },
  U = R.WARN,
  D = {
    error: function (e) {
      U >= R.ERROR && z(e);
    },
    warn: function (e) {
      U >= R.WARN && z(e);
    },
    info: function (e) {
      U >= R.INFO && z(e);
    },
  },
  z = function (e) {
    try {
      console.log("[Amplitude] " + e);
    } catch (e) {}
  },
  M = function (e, t, i) {
    return (
      j(e) === i ||
      (D.error(
        "Invalid " + t + " input type. Expected " + i + " but received " + j(e)
      ),
      !1)
    );
  },
  B = function (e) {
    var t = j(e);
    if ("object" !== t)
      return (
        D.error(
          "Error: invalid properties format. Expecting Javascript object, received " +
            t +
            ", ignoring"
        ),
        {}
      );
    if (Object.keys(e).length > 1e3)
      return (
        D.error("Error: too many properties (more than 1000), ignoring"), {}
      );
    var i = {};
    for (var n in e)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        var o = n,
          r = j(o);
        "string" !== r &&
          ((o = String(o)),
          D.warn(
            "WARNING: Non-string property key, received type " +
              r +
              ', coercing to string "' +
              o +
              '"'
          ));
        var s = F(o, e[n]);
        null !== s && (i[o] = s);
      }
    return i;
  },
  K = ["nan", "function", "arguments", "regexp", "element"],
  F = function e(t, i) {
    var n = j(i);
    if (-1 !== K.indexOf(n))
      D.warn(
        'WARNING: Property key "' +
          t +
          '" with invalid value type ' +
          n +
          ", ignoring"
      ),
        (i = null);
    else if ("undefined" === n) i = null;
    else if ("error" === n)
      (i = String(i)),
        D.warn(
          'WARNING: Property key "' +
            t +
            '" with value type error, coercing to ' +
            i
        );
    else if ("array" === n) {
      for (var o = [], r = 0; r < i.length; r++) {
        var s = i[r],
          a = j(s);
        "array" !== a
          ? "object" === a
            ? o.push(B(s))
            : o.push(e(t, s))
          : D.warn(
              "WARNING: Cannot have " +
                a +
                " nested in an array property value, skipping"
            );
      }
      i = o;
    } else "object" === n && (i = B(i));
    return i;
  },
  $ = function (e, t) {
    var i = j(t);
    if ("string" === i) return t;
    if ("date" === i || "number" === i || "boolean" === i)
      return (
        (t = String(t)),
        D.warn(
          "WARNING: Non-string groupName, received type " +
            i +
            ', coercing to string "' +
            t +
            '"'
        ),
        t
      );
    if ("array" === i) {
      for (var n = [], o = 0; o < t.length; o++) {
        var r = t[o],
          s = j(r);
        "array" !== s && "object" !== s
          ? "string" === s
            ? n.push(r)
            : ("date" !== s && "number" !== s && "boolean" !== s) ||
              ((r = String(r)),
              D.warn(
                "WARNING: Non-string groupName, received type " +
                  s +
                  ', coercing to string "' +
                  r +
                  '"'
              ),
              n.push(r))
          : D.warn("WARNING: Skipping nested " + s + " in array groupName");
      }
      return n;
    }
    D.warn(
      "WARNING: Non-string groupName, received type " +
        i +
        ". Please use strings or array of strings for groupName"
    );
  },
  G = D,
  W = function (e) {
    return !e || 0 === e.length;
  },
  V = function () {
    return "undefined" != typeof WorkerGlobalScope;
  },
  L = function (e, t) {
    e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var i = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
    return null === i ? void 0 : decodeURIComponent(i[1].replace(/\+/g, " "));
  },
  Z = function e(t) {
    if ("array" === j(t)) for (var i = 0; i < t.length; i++) t[i] = e(t[i]);
    else if ("object" === j(t)) for (var n in t) n in t && (t[n] = e(t[n]));
    else
      t = (function (e) {
        return "string" === j(e) && e.length > 4096 ? e.substring(0, 4096) : e;
      })(t);
    return t;
  },
  J = function (e) {
    var t = j(e);
    if ("object" !== t)
      return (
        D.error(
          "Error: invalid groups format. Expecting Javascript object, received " +
            t +
            ", ignoring"
        ),
        {}
      );
    var i = {};
    for (var n in e)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        var o = n,
          r = j(o);
        "string" !== r &&
          ((o = String(o)),
          D.warn(
            "WARNING: Non-string groupType, received type " +
              r +
              ', coercing to string "' +
              o +
              '"'
          ));
        var s = $(0, e[n]);
        null !== s && (i[o] = s);
      }
    return i;
  },
  H = M,
  X = B,
  Q = function (e) {
    return !(
      !M(e, "deviceId", "string") ||
      (e.includes(".") &&
        (D.error(
          "Device IDs may not contain '.' characters. Value will be ignored: \"".concat(
            e,
            '"'
          )
        ),
        1))
    );
  },
  Y = function (e) {
    return !(
      !M(e, "transport", "string") ||
      ("http" !== e && "beacon" !== e
        ? (D.error(
            "transport value must be one of '"
              .concat("beacon", "' or '")
              .concat("http", "'")
          ),
          1)
        : "http" !== e &&
          !navigator.sendBeacon &&
          (D.error(
            "browser does not support sendBeacon, so transport must be HTTP"
          ),
          1))
    );
  },
  ee = function () {
    return A.location;
  },
  te = function () {
    for (var e = "", t = 0; t < 22; ++t)
      e +=
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
          Math.floor(64 * Math.random())
        );
    return e;
  },
  ie = function (e) {
    try {
      for (
        var t = document.cookie.split(";"), i = null, n = 0;
        n < t.length;
        n++
      ) {
        for (var o = t[n]; " " === o.charAt(0); ) o = o.substring(1, o.length);
        if (0 === o.indexOf(e)) {
          i = o.substring(e.length, o.length);
          break;
        }
      }
      return i;
    } catch (e) {
      return null;
    }
  },
  ne = function (e, t, i) {
    var n = null !== t ? i.expirationDays : -1;
    if (n) {
      var o = new Date();
      o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), (n = o);
    }
    var r = e + "=" + t;
    n && (r += "; expires=" + n.toUTCString()),
      (r += "; path=/"),
      i.domain && (r += "; domain=" + i.domain),
      i.secure && (r += "; Secure"),
      i.sameSite && (r += "; SameSite=" + i.sameSite),
      (document.cookie = r);
  },
  oe = function () {
    var e,
      t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      i = t.split(".")[4];
    return (
      i && (e = parseInt(i, 32)),
      e || (G.warn("unable to parse malformed cookie: ".concat(t)), 0)
    );
  },
  re = ne,
  se = ie,
  ae = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = "amp_cookie_test" + te();
    if ("undefined" == typeof document) return !1;
    var i = !1;
    try {
      var n = String(Date.now());
      ne(t, n, e),
        G.info("Testing if cookies available"),
        (i = ie(t + "=") === n);
    } catch (e) {
      G.warn(
        'Error thrown when checking for cookies. Reason: "'.concat(e, '"')
      );
    } finally {
      G.info("Cleaning up cookies availability test"), ne(t, null, e);
    }
    return i;
  },
  ue = function (e) {
    if (e) {
      if ("undefined" != typeof document) {
        var t = document.createElement("a");
        return (t.href = e), t.hostname || A.location.hostname;
      }
      if ("function" == typeof URL)
        return new URL(e).hostname || A.location.hostname;
    }
    return A.location.hostname;
  },
  ce = function (e) {
    var t = ue(e).split("."),
      i = [],
      n = "_tldtest_" + te();
    if (V()) return "";
    for (var o = t.length - 2; o >= 0; --o) i.push(t.slice(o).join("."));
    for (var r = 0; r < i.length; ++r) {
      var s = i[r],
        a = { domain: "." + s };
      if ((re(n, 1, a), se(n))) return re(n, null, a), s;
    }
    return "";
  },
  le = { expirationDays: void 0, domain: void 0 },
  pe = function (e) {
    var t = "";
    return (
      le.domain &&
        (t = "." === le.domain.charAt(0) ? le.domain.substring(1) : le.domain),
      e + t
    );
  },
  de = function (e) {
    var t = pe(e) + "=",
      i = se(t);
    try {
      if (i) return JSON.parse(T.decode(i));
    } catch (e) {
      return null;
    }
    return null;
  },
  he = function (e, t) {
    try {
      return re(pe(e), T.encode(JSON.stringify(t)), le), !0;
    } catch (e) {
      return !1;
    }
  },
  fe = function (e) {
    try {
      return re(pe(e), null, le), !0;
    } catch (e) {
      return !1;
    }
  },
  ve = {
    reset: function () {
      le = { expirationDays: void 0, domain: void 0 };
    },
    options: function (e) {
      if (0 === arguments.length) return le;
      (e = e || {}),
        (le.expirationDays = e.expirationDays),
        (le.secure = e.secure),
        (le.sameSite = e.sameSite);
      var t = W(e.domain) ? "." + ce(ee().href) : e.domain,
        i = Math.random();
      (le.domain = t), he("amplitude_test", i);
      var n = de("amplitude_test");
      return (
        (n && n === i) || (t = null), fe("amplitude_test"), (le.domain = t), le
      );
    },
    get: de,
    set: he,
    remove: fe,
    setRaw: function (e, t) {
      try {
        return re(pe(e), t, le), !0;
      } catch (e) {
        return !1;
      }
    },
    getRaw: function (e) {
      var t = pe(e) + "=";
      return se(t);
    },
  },
  be = (function () {
    function e() {
      x(this, e), (this.map = new Map()), (this.length = 0);
    }
    return (
      E(e, [
        {
          key: "key",
          value: function (e) {
            var t = Array.from(this.map.keys())[e];
            return this.map.get(t);
          },
        },
        {
          key: "getItem",
          value: function (e) {
            return this.map.get(e);
          },
        },
        {
          key: "setItem",
          value: function (e, t) {
            this.map.has(e) || (this.length += 1), this.map.set(e, t);
          },
        },
        {
          key: "removeItem",
          value: function (e) {
            this.map.has(e) && ((this.length -= 1), this.map.delete(e));
          },
        },
        {
          key: "clear",
          value: function () {
            this.map.clear(), (this.length = 0);
          },
        },
      ]),
      e
    );
  })();
if (
  (function () {
    var e,
      t = new Date();
    try {
      return (
        A.localStorage.setItem(t, t),
        (e = A.localStorage.getItem(t) === String(t)),
        A.localStorage.removeItem(t),
        e
      );
    } catch (e) {}
    return !1;
  })()
)
  P = A.localStorage;
else if (void 0 !== A && A.globalStorage)
  try {
    P = A.globalStorage[A.location.hostname];
  } catch (e) {}
else if ("undefined" != typeof document) {
  var me = document.createElement("div"),
    ge = "localStorage";
  (me.style.display = "none"),
    document.getElementsByTagName("head")[0].appendChild(me),
    me.addBehavior &&
      (me.addBehavior("#default#userdata"),
      (P = {
        length: 0,
        setItem: function (e, t) {
          me.load(ge),
            me.getAttribute(e) || this.length++,
            me.setAttribute(e, t),
            me.save(ge);
        },
        getItem: function (e) {
          return me.load(ge), me.getAttribute(e);
        },
        removeItem: function (e) {
          me.load(ge),
            me.getAttribute(e) && this.length--,
            me.removeAttribute(e),
            me.save(ge);
        },
        clear: function () {
          me.load(ge);
          for (
            var e, t = 0;
            (e = me.XMLDocument.documentElement.attributes[t++]);

          )
            me.removeAttribute(e.name);
          me.save(ge), (this.length = 0);
        },
        key: function (e) {
          return me.load(ge), me.XMLDocument.documentElement.attributes[e];
        },
      }),
      me.load(ge),
      (P.length = me.XMLDocument.documentElement.attributes.length));
} else V() && (P = new be());
P ||
  (P = {
    length: 0,
    setItem: function (e, t) {},
    getItem: function (e) {},
    removeItem: function (e) {},
    clear: function () {},
    key: function (e) {},
  });
var ye,
  we = P,
  _e = function () {
    this.storage = null;
  };
_e.prototype.getStorage = function () {
  if (null !== this.storage) return this.storage;
  if (ae()) this.storage = ve;
  else {
    var e = "amp_cookiestore_";
    this.storage = {
      _options: { expirationDays: void 0, domain: void 0, secure: !1 },
      reset: function () {
        this._options = { expirationDays: void 0, domain: void 0, secure: !1 };
      },
      options: function (e) {
        return 0 === arguments.length
          ? this._options
          : ((e = e || {}),
            (this._options.expirationDays =
              e.expirationDays || this._options.expirationDays),
            (this._options.domain =
              e.domain ||
              this._options.domain ||
              (A && A.location && A.location.hostname)),
            (this._options.secure = e.secure || !1));
      },
      get: function (t) {
        try {
          return JSON.parse(we.getItem(e + t));
        } catch (e) {}
        return null;
      },
      set: function (t, i) {
        try {
          return we.setItem(e + t, JSON.stringify(i)), !0;
        } catch (e) {}
        return !1;
      },
      remove: function (t) {
        try {
          we.removeItem(e + t);
        } catch (e) {
          return !1;
        }
      },
    };
  }
  return this.storage;
};
var Ie =
    (C((ye = {}), "cookies", !0),
    C(ye, "none", !0),
    C(ye, "localStorage", !0),
    C(ye, "sessionStorage", !0),
    ye),
  ke = (function () {
    function e(t) {
      var i = t.storageKey,
        n = t.disableCookies,
        o = t.domain,
        r = t.secure,
        s = t.sameSite,
        a = t.expirationDays,
        u = t.storage;
      x(this, e),
        (this.storageKey = i),
        (this.domain = o),
        (this.secure = r),
        (this.sameSite = s),
        (this.expirationDays = a),
        (this.cookieDomain = "");
      var c = ce(ee().href);
      if (((this.cookieDomain = o || (c ? "." + c : null)), Ie[u]))
        this.storage = u;
      else {
        var l =
          n ||
          !ae({
            domain: this.cookieDomain,
            secure: this.secure,
            sameSite: this.sameSite,
            expirationDays: this.expirationDays,
          });
        this.storage = l ? "localStorage" : "cookies";
      }
    }
    return (
      E(e, [
        {
          key: "getCookieStorageKey",
          value: function () {
            if (!this.domain) return this.storageKey;
            var e =
              "." === this.domain.charAt(0)
                ? this.domain.substring(1)
                : this.domain;
            return "".concat(this.storageKey).concat(e ? "_".concat(e) : "");
          },
        },
        {
          key: "save",
          value: function (e) {
            var t = e.deviceId,
              i = e.userId,
              n = e.optOut,
              o = e.sessionId,
              r = e.lastEventTime,
              s = e.eventId,
              a = e.identifyId,
              u = e.sequenceNumber;
            if ("none" !== this.storage) {
              var c = [
                t,
                T.encode(i || ""),
                n ? "1" : "",
                o ? o.toString(32) : "0",
                r ? r.toString(32) : "0",
                s ? s.toString(32) : "0",
                a ? a.toString(32) : "0",
                u ? u.toString(32) : "0",
              ].join(".");
              switch (this.storage) {
                case "sessionStorage":
                  A.sessionStorage &&
                    A.sessionStorage.setItem(this.storageKey, c);
                  break;
                case "localStorage":
                  we.setItem(this.storageKey, c);
                  break;
                case "cookies":
                  this.saveCookie(c);
              }
            }
          },
        },
        {
          key: "saveCookie",
          value: function (e) {
            re(this.getCookieStorageKey(), e, {
              domain: this.cookieDomain,
              secure: this.secure,
              sameSite: this.sameSite,
              expirationDays: this.expirationDays,
            });
          },
        },
        {
          key: "load",
          value: function () {
            var e,
              t,
              i,
              n = this;
            if ("cookies" === this.storage) {
              var o = this.getCookieStorageKey() + "=",
                r = (function (e) {
                  try {
                    var t = document.cookie.split(";").map(function (e) {
                        return e.trimStart();
                      }),
                      i = [],
                      n = !0,
                      o = !1,
                      r = void 0;
                    try {
                      for (
                        var s, a = t[Symbol.iterator]();
                        !(n = (s = a.next()).done);
                        n = !0
                      ) {
                        for (var u = s.value; " " === u.charAt(0); )
                          u = u.substring(1);
                        0 === u.indexOf(e) && i.push(u.substring(e.length));
                      }
                    } catch (e) {
                      (o = !0), (r = e);
                    } finally {
                      try {
                        n || null == a.return || a.return();
                      } finally {
                        if (o) throw r;
                      }
                    }
                    return i;
                  } catch (e) {
                    return [];
                  }
                })(o);
              if (0 === r.length || 1 === r.length) e = r[0];
              else {
                var s = ((t = r),
                ((i = t),
                (function (e) {
                  if (Array.isArray(e)) {
                    for (var t = 0, i = new Array(e.length); t < e.length; t++)
                      i[t] = e[t];
                    return i;
                  }
                })(i) ||
                  (function (e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(i) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance"
                    );
                  })()).sort(function (e, t) {
                  var i = oe(e);
                  return oe(t) - i;
                }))[0];
                r.forEach(function () {
                  return re(n.getCookieStorageKey(), null, {});
                }),
                  this.saveCookie(s),
                  (e = se(o));
              }
            }
            if ((e || (e = we.getItem(this.storageKey)), !e))
              try {
                e =
                  A.sessionStorage && A.sessionStorage.getItem(this.storageKey);
              } catch (e) {
                G.info(
                  'window.sessionStorage unavailable. Reason: "'.concat(e, '"')
                );
              }
            if (!e) return null;
            var a = e.split("."),
              u = null;
            if (a[1])
              try {
                u = T.decode(a[1]);
              } catch (e) {
                u = null;
              }
            return {
              deviceId: a[0],
              userId: u,
              optOut: "1" === a[2],
              sessionId: parseInt(a[3], 32),
              lastEventTime: parseInt(a[4], 32),
              eventId: parseInt(a[5], 32),
              identifyId: parseInt(a[6], 32),
              sequenceNumber: parseInt(a[7], 32),
            };
          },
        },
        {
          key: "clear",
          value: function () {
            var e;
            if (
              ("cookies" === this.storage &&
                ((e = se(this.getCookieStorageKey() + "=")),
                re(this.getCookieStorageKey(), null, {
                  domain: this.cookieDomain,
                  secure: this.secure,
                  sameSite: this.sameSite,
                  expirationDays: 0,
                })),
              e || ((e = we.getItem(this.storageKey)), we.clear()),
              !e)
            )
              try {
                (e =
                  A.sessionStorage &&
                  A.sessionStorage.getItem(this.storageKey)),
                  A.sessionStorage.clear();
              } catch (e) {
                G.info(
                  'window.sessionStorage unavailable. Reason: "'.concat(e, '"')
                );
              }
            return !!e;
          },
        },
      ]),
      e
    );
  })(),
  Se = function () {
    (this.userPropertiesOperations = {}), (this.properties = []);
  };
(Se.prototype.add = function (e, t) {
  return (
    "number" === j(t) || "string" === j(t)
      ? this._addOperation("$add", e, t)
      : G.error(
          "Unsupported type for value: " + j(t) + ", expecting number or string"
        ),
    this
  );
}),
  (Se.prototype.append = function (e, t) {
    return this._addOperation("$append", e, t), this;
  }),
  (Se.prototype.clearAll = function () {
    return Object.keys(this.userPropertiesOperations).length > 0
      ? (Object.prototype.hasOwnProperty.call(
          this.userPropertiesOperations,
          "$clearAll"
        ) ||
          G.error(
            "Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"
          ),
        this)
      : ((this.userPropertiesOperations.$clearAll = "-"), this);
  }),
  (Se.prototype.prepend = function (e, t) {
    return this._addOperation("$prepend", e, t), this;
  }),
  (Se.prototype.set = function (e, t) {
    return this._addOperation("$set", e, t), this;
  }),
  (Se.prototype.setOnce = function (e, t) {
    return this._addOperation("$setOnce", e, t), this;
  }),
  (Se.prototype.unset = function (e) {
    return this._addOperation("$unset", e, "-"), this;
  }),
  (Se.prototype.preInsert = function (e, t) {
    return this._addOperation("$preInsert", e, t), this;
  }),
  (Se.prototype.postInsert = function (e, t) {
    return this._addOperation("$postInsert", e, t), this;
  }),
  (Se.prototype.remove = function (e, t) {
    return this._addOperation("$remove", e, t), this;
  }),
  (Se.prototype._addOperation = function (e, t, i) {
    Object.prototype.hasOwnProperty.call(
      this.userPropertiesOperations,
      "$clearAll"
    )
      ? G.error(
          "This identify already contains a $clearAll operation, skipping operation " +
            e
        )
      : -1 === this.properties.indexOf(t)
      ? (Object.prototype.hasOwnProperty.call(
          this.userPropertiesOperations,
          e
        ) || (this.userPropertiesOperations[e] = {}),
        (this.userPropertiesOperations[e][t] = i),
        this.properties.push(t))
      : G.error(
          'User property "' +
            t +
            '" already used in this identify, skipping operation ' +
            e
        );
  });
var xe = function (e, t, i) {
  (this.url = e), (this.data = t || {}), (this.headers = i);
};
xe.prototype.send = function (e) {
  if (A.XDomainRequest) {
    var t = new A.XDomainRequest();
    t.open("POST", this.url, !0),
      (t.onload = function () {
        e(200, t.responseText);
      }),
      (t.onerror = function () {
        "Request Entity Too Large" === t.responseText
          ? e(413, t.responseText)
          : e(500, t.responseText);
      }),
      (t.ontimeout = function () {}),
      (t.onprogress = function () {}),
      t.send(r.stringify(this.data));
  } else if ("undefined" != typeof XMLHttpRequest) {
    var i = new XMLHttpRequest();
    i.open("POST", this.url, !0),
      (i.onreadystatechange = function () {
        4 === i.readyState && e(i.status, i.responseText);
      }),
      (function (e, t) {
        for (var i in t)
          ("Cross-Origin-Resource-Policy" !== i || t[i]) &&
            e.setRequestHeader(i, t[i]);
      })(i, this.headers),
      i.send(r.stringify(this.data));
  } else {
    var n = void 0;
    fetch(this.url, {
      method: "POST",
      headers: this.headers,
      body: r.stringify(this.data),
    })
      .then(function (e) {
        return (n = e.status), e.text();
      })
      .then(function (t) {
        e(n, t);
      });
  }
};
var Oe = function () {
  (this._price = null),
    (this._productId = null),
    (this._quantity = 1),
    (this._revenueType = null),
    (this._properties = null);
};
(Oe.prototype.setProductId = function (e) {
  return (
    "string" !== j(e)
      ? G.error(
          "Unsupported type for productId: " + j(e) + ", expecting string"
        )
      : W(e)
      ? G.error("Invalid empty productId")
      : (this._productId = e),
    this
  );
}),
  (Oe.prototype.setQuantity = function (e) {
    return (
      "number" !== j(e)
        ? G.error(
            "Unsupported type for quantity: " + j(e) + ", expecting number"
          )
        : (this._quantity = parseInt(e)),
      this
    );
  }),
  (Oe.prototype.setPrice = function (e) {
    return (
      "number" !== j(e)
        ? G.error("Unsupported type for price: " + j(e) + ", expecting number")
        : (this._price = e),
      this
    );
  }),
  (Oe.prototype.setRevenueType = function (e) {
    return (
      "string" !== j(e)
        ? G.error(
            "Unsupported type for revenueType: " + j(e) + ", expecting string"
          )
        : (this._revenueType = e),
      this
    );
  }),
  (Oe.prototype.setEventProperties = function (e) {
    return (
      "object" !== j(e)
        ? G.error(
            "Unsupported type for eventProperties: " +
              j(e) +
              ", expecting object"
          )
        : (this._properties = X(e)),
      this
    );
  }),
  (Oe.prototype._isValidRevenue = function () {
    return (
      "number" === j(this._price) ||
      (G.error("Invalid revenue, need to set price field"), !1)
    );
  }),
  (Oe.prototype._toJSONObject = function () {
    var e = "object" === j(this._properties) ? this._properties : {};
    return (
      null !== this._productId && (e.$productId = this._productId),
      null !== this._quantity && (e.$quantity = this._quantity),
      null !== this._price && (e.$price = this._price),
      null !== this._revenueType && (e.$revenueType = this._revenueType),
      e
    );
  });
var Ee = function e(t) {
    return t
      ? (t ^ ((16 * Math.random()) >> (t / 4))).toString(16)
      : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
  },
  Ce = function (e) {
    var t = "api.amplitude.com";
    switch (e) {
      case "EU":
        t = "api.eu.amplitude.com";
        break;
      case "US":
        t = "api.amplitude.com";
    }
    return t;
  },
  Ne = {
    apiEndpoint: "api.amplitude.com",
    batchEvents: !1,
    cookieExpiration: 365,
    cookieName: "amplitude_id",
    sameSiteCookie: "Lax",
    cookieForceUpgrade: !1,
    deferInitialization: !1,
    disableCookies: !1,
    deviceIdFromUrlParam: !1,
    domain: "",
    eventUploadPeriodMillis: 3e4,
    eventUploadThreshold: 30,
    forceHttps: !0,
    includeFbclid: !1,
    includeGclid: !1,
    includeReferrer: !1,
    includeUtm: !1,
    language:
      ("undefined" != typeof navigator &&
        ((navigator.languages && navigator.languages[0]) ||
          navigator.language ||
          navigator.userLanguage)) ||
      "",
    library: { name: "amplitude-js", version: "8.18.1" },
    logLevel: "WARN",
    logAttributionCapturedEvent: !1,
    optOut: !1,
    onError: function () {},
    onExitPage: function () {},
    onNewSessionStart: function () {},
    plan: { branch: "", source: "", version: "", versionId: "" },
    platform: "Web",
    savedMaxCount: 1e3,
    saveEvents: !0,
    saveParamsReferrerOncePerSession: !0,
    secureCookie: !1,
    sessionTimeout: 18e5,
    storage: "",
    trackingOptions: {
      city: !0,
      country: !0,
      carrier: !0,
      device_manufacturer: !0,
      device_model: !0,
      dma: !0,
      ip_address: !0,
      language: !0,
      os_name: !0,
      os_version: !0,
      platform: !0,
      region: !0,
      version_name: !0,
    },
    transport: "http",
    unsetParamsReferrerOnNewSession: !1,
    unsentKey: "amplitude_unsent",
    unsentIdentifyKey: "amplitude_unsent_identify",
    uploadBatchSize: 100,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Cross-Origin-Resource-Policy": "cross-origin",
    },
    serverZone: "US",
    useDynamicConfig: !1,
    serverZoneBasedApi: !1,
    sessionId: null,
  },
  Ae = new ((function () {
    function e() {
      return (
        x(this, e),
        e.instance ||
          ((this.ingestionEndpoint = "api.amplitude.com"), (e.instance = this)),
        e.instance
      );
    }
    return (
      E(e, [
        {
          key: "refresh",
          value: function (e, t, i) {
            var n = "https";
            t || "https:" === A.location.protocol || (n = "http");
            var o =
                n +
                "://" +
                (function (e) {
                  var t = "regionconfig.amplitude.com";
                  switch (e) {
                    case "EU":
                      t = "regionconfig.eu.amplitude.com";
                      break;
                    case "US":
                      t = "regionconfig.amplitude.com";
                  }
                  return t;
                })(e),
              r = this;
            if (A.XDomainRequest) {
              var s = new A.XDomainRequest();
              s.open("GET", o, !0),
                (s.onload = function () {
                  var e = JSON.parse(s.responseText);
                  (r.ingestionEndpoint = e.ingestionEndpoint), i && i();
                }),
                (s.onerror = function () {}),
                (s.ontimeout = function () {}),
                (s.onprogress = function () {}),
                s.send();
            } else {
              var a = new XMLHttpRequest();
              a.open("GET", o, !0),
                (a.onreadystatechange = function () {
                  if (4 === a.readyState && 200 === a.status) {
                    var e = JSON.parse(a.responseText);
                    (r.ingestionEndpoint = e.ingestionEndpoint), i && i();
                  }
                }),
                a.send();
            }
          },
        },
      ]),
      e
    );
  })())(),
  Te = function (t) {
    e() ||
      V() ||
      G.warn(
        "amplitude-js will not work in a non-browser environment. If you are planning to add Amplitude to a node environment, please use @amplitude/node"
      ),
      (this._instanceName = W(t) ? "$default_instance" : t.toLowerCase()),
      (this._unsentEvents = []),
      (this._unsentIdentifys = []),
      (this._ua = new I(navigator.userAgent).getResult()),
      (this.options = N({}, Ne, {
        trackingOptions: N({}, Ne.trackingOptions),
      })),
      (this.cookieStorage = new _e().getStorage()),
      (this._q = []),
      (this._sending = !1),
      (this._updateScheduled = !1),
      (this._onInitCallbacks = []),
      (this._onNewSessionStartCallbacks = []),
      (this._eventId = 0),
      (this._identifyId = 0),
      (this._lastEventTime = null),
      (this._newSession = !1),
      (this._sequenceNumber = 0),
      (this._sessionId = null),
      (this._isInitialized = !1),
      (this._connector = null),
      (this._userAgent = (navigator && navigator.userAgent) || null);
  };
(Te.prototype.Identify = Se),
  (Te.prototype.Revenue = Oe),
  (Te.prototype.init = function (t, i, n, o) {
    var r,
      s = this;
    if ("string" !== j(t) || W(t))
      G.error("Invalid apiKey. Please re-initialize with a valid apiKey");
    else
      try {
        (this._connector = k.exports.AnalyticsConnector.getInstance(
          this._instanceName
        )),
          je(this.options, n),
          (e() || V()) &&
            void 0 !== A.Prototype &&
            Array.prototype.toJSON &&
            ((function () {
              var t;
              if (e()) {
                var i = window,
                  n = Array;
                void 0 !== i.Prototype &&
                  void 0 !==
                    (null === (t = n.prototype) || void 0 === t
                      ? void 0
                      : t.toJSON) &&
                  delete n.prototype.toJSON;
              }
            })(),
            G.warn(
              "Prototype.js injected Array.prototype.toJSON. Deleting Array.prototype.toJSON to prevent double-stringify"
            )),
          this.options.cookieName !== Ne.cookieName &&
            G.warn(
              "The cookieName option is deprecated. We will be ignoring it for newer cookies"
            ),
          this.options.serverZoneBasedApi &&
            (this.options.apiEndpoint = Ce(this.options.serverZone)),
          this._refreshDynamicConfig(),
          (this.options.apiKey = t),
          (this._storageSuffix =
            "_" +
            t +
            ("$default_instance" === this._instanceName
              ? ""
              : "_" + this._instanceName)),
          (this._storageSuffixV5 = t.slice(0, 6)),
          (this._oldCookiename = this.options.cookieName + this._storageSuffix),
          (this._unsentKey = this.options.unsentKey + this._storageSuffix),
          (this._unsentIdentifyKey =
            this.options.unsentIdentifyKey + this._storageSuffix),
          (this._cookieName = "amp_" + this._storageSuffixV5),
          this.cookieStorage.options({
            expirationDays: this.options.cookieExpiration,
            domain: this.options.domain,
            secure: this.options.secureCookie,
            sameSite: this.options.sameSiteCookie,
          }),
          (this._metadataStorage = new ke({
            storageKey: this._cookieName,
            disableCookies: this.options.disableCookies,
            expirationDays: this.options.cookieExpiration,
            domain: this.options.domain,
            secure: this.options.secureCookie,
            sameSite: this.options.sameSiteCookie,
            storage: this.options.storage,
          }));
        var a = !!this.cookieStorage.get(this._oldCookiename),
          u = !!this._metadataStorage.load();
        this._useOldCookie = !u && a && !this.options.cookieForceUpgrade;
        var c = u || a;
        if (
          ((this.options.domain = this.cookieStorage.options().domain),
          this.options.deferInitialization && !c)
        )
          return void this._deferInitialization(t, i, n, o);
        "string" === j(this.options.logLevel) &&
          ((r = this.options.logLevel),
          Object.prototype.hasOwnProperty.call(R, r) && (U = R[r]));
        var l = Fe(this);
        (this._apiPropertiesTrackingOptions =
          Object.keys(l).length > 0 ? { tracking_options: l } : {}),
          this.options.cookieForceUpgrade &&
            a &&
            (u || Re(this), this.cookieStorage.remove(this._oldCookiename)),
          Pe(this),
          (this._pendingReadStorage = !0),
          this.options.saveEvents &&
            ((this._unsentEvents = this._loadSavedUnsentEvents(
              this.options.unsentKey
            )
              .map(function (e) {
                return { event: e };
              })
              .concat(this._unsentEvents)),
            (this._unsentIdentifys = this._loadSavedUnsentEvents(
              this.options.unsentIdentifyKey
            )
              .map(function (e) {
                return { event: e };
              })
              .concat(this._unsentIdentifys))),
          n &&
            n.onNewSessionStart &&
            this.onNewSessionStart(this.options.onNewSessionStart),
          (function (e) {
            n &&
              n.deviceId &&
              !Q(n.deviceId) &&
              (G.error(
                'Invalid device ID rejected. Randomly generated UUID will be used instead of "'.concat(
                  n.deviceId,
                  '"'
                )
              ),
              delete n.deviceId),
              (s.options.deviceId = s._getInitialDeviceId(
                n && n.deviceId,
                void 0
              )),
              (s.options.userId =
                ("string" === j(i) && !W(i) && i) ||
                ("number" === j(i) && i.toString()) ||
                s.options.userId ||
                null);
            var t = new Date().getTime(),
              o =
                !s._sessionId ||
                !s._lastEventTime ||
                t - s._lastEventTime > s.options.sessionTimeout ||
                s.options.sessionId;
            o &&
              (s.options.unsetParamsReferrerOnNewSession && s._unsetUTMParams(),
              (s._newSession = !0),
              (s._sessionId = s.options.sessionId || t),
              (s.options.sessionId = void 0),
              s.options.saveParamsReferrerOncePerSession &&
                s._trackParamsAndReferrer()),
              s.options.saveParamsReferrerOncePerSession ||
                s._trackParamsAndReferrer(),
              s.options.saveEvents &&
                (qe(s._unsentEvents), qe(s._unsentIdentifys)),
              (s._lastEventTime = t),
              De(s),
              (s._pendingReadStorage = !1),
              s._sendEventsIfReady();
            for (var r = 0; r < s._onInitCallbacks.length; r++)
              s._onInitCallbacks[r](s);
            (s._onInitCallbacks = []),
              (s._isInitialized = !0),
              o && s._runNewSessionStartCallbacks();
          })(),
          this.runQueuedFunctions(),
          "function" === j(o) && o(this);
        var p = this.options.onExitPage;
        "function" !== j(p) ||
          this.pageHandlersAdded ||
          ((this.pageHandlersAdded = !0),
          A.addEventListener(
            "pagehide",
            function () {
              var e;
              (e = s.options.transport),
                s.setTransport("beacon"),
                p(),
                s.setTransport(e);
            },
            !1
          )),
          this._connector.eventBridge.setEventReceiver(function (e) {
            s._logEvent(e.eventType, e.eventProperties, e.userProperties);
          });
        var d = this._connector.identityStore.editIdentity();
        this.options.deviceId && d.setDeviceId(this.options.deviceId),
          this.options.userId && d.setUserId(this.options.userId),
          d.commit();
      } catch (e) {
        G.error(e), n && "function" === j(n.onError) && n.onError(e);
      }
  }),
  (Te.prototype._runNewSessionStartCallbacks = function () {
    for (var e = 0; e < this._onNewSessionStartCallbacks.length; e++)
      this._onNewSessionStartCallbacks[e](this);
  }),
  (Te.prototype.deleteLowerLevelDomainCookies = function () {
    var e = ue(),
      t =
        this.options.domain && "." === this.options.domain[0]
          ? this.options.domain.slice(1)
          : this.options.domain;
    if (t && V() && e !== t && new RegExp(t + "$").test(e)) {
      for (
        var i = e.split("."), n = t.split("."), o = i.length;
        o > n.length;
        --o
      ) {
        var r = i.slice(i.length - o).join(".");
        re(this._cookieName, null, { domain: "." + r });
      }
      re(this._cookieName, null, {});
    }
  }),
  (Te.prototype._getInitialDeviceId = function (e, t) {
    if (e) return e;
    if (this.options.deviceIdFromUrlParam) {
      var i = this._getDeviceIdFromUrlParam(this._getUrlParams());
      if (i) return i;
    }
    return this.options.deviceId ? this.options.deviceId : t || te();
  });
var qe = function (e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t].event.user_properties,
      n = e[t].event.event_properties,
      o = e[t].event.groups;
    (e[t].event.user_properties = X(i)),
      (e[t].event.event_properties = X(n)),
      (e[t].event.groups = J(o));
  }
};
Te.prototype._trackParamsAndReferrer = function () {
  var e, t, i, n;
  if (
    (this.options.includeUtm && (e = this._initUtmData()),
    this.options.includeReferrer &&
      (t = this._saveReferrer(this._getReferrer())),
    this.options.includeGclid && (i = this._saveGclid(this._getUrlParams())),
    this.options.includeFbclid && (n = this._saveFbclid(this._getUrlParams())),
    this.options.logAttributionCapturedEvent)
  ) {
    var o = N({}, e, t, i, n);
    Object.keys(o).length > 0 &&
      this.logEvent("[Amplitude] Attribution Captured", o);
  }
};
var je = function e(t, i) {
  if ("object" === j(i)) {
    var n = new Set(["headers"]),
      o = function (n) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          var o = i[n],
            r = j(t[n]);
          ("transport" !== n || Y(o)) &&
            ("sessionId" !== n || null === o
              ? H(o, n + " option", r) &&
                ("boolean" === r
                  ? (t[n] = !!o)
                  : ("string" === r && !W(o)) ||
                    ("number" === r && o > 0) ||
                    "function" === r
                  ? (t[n] = o)
                  : "object" === r && e(t[n], o))
              : (t[n] =
                  (M((s = o), "sessionId", "number") &&
                    new Date(s).getTime() > 0) ||
                  (D.error(
                    "sessionId value must in milliseconds since epoch (Unix Timestamp)"
                  ),
                  0)
                    ? o
                    : null));
        }
        var s;
      };
    for (var r in i)
      n.has(r)
        ? (t[r] = N({}, t[r], i[r]))
        : Object.prototype.hasOwnProperty.call(i, r) && o(r);
  }
};
(Te.prototype.runQueuedFunctions = function () {
  var e = this._q;
  this._q = [];
  for (var t = 0; t < e.length; t++) {
    var i = this[e[t][0]];
    "function" === j(i) && i.apply(this, e[t].slice(1));
  }
}),
  (Te.prototype._apiKeySet = function (e) {
    return (
      !W(this.options.apiKey) ||
      (G.error(
        "Invalid apiKey. Please set a valid apiKey with init() before calling " +
          e
      ),
      !1)
    );
  }),
  (Te.prototype._loadSavedUnsentEvents = function (e) {
    var t = this._getFromStorage(we, e),
      i = this._parseSavedUnsentEventsString(t, e);
    return this._setInStorage(we, e, JSON.stringify(i)), i;
  }),
  (Te.prototype._parseSavedUnsentEventsString = function (e, t) {
    if (W(e)) return [];
    if ("string" === j(e))
      try {
        var i = JSON.parse(e);
        if ("array" === j(i)) return i;
      } catch (e) {}
    return (
      G.error(
        "Unable to load " + t + " events. Restart with a new empty queue."
      ),
      []
    );
  }),
  (Te.prototype.isNewSession = function () {
    return this._newSession;
  }),
  (Te.prototype.onInit = function (e) {
    this._isInitialized ? e(this) : this._onInitCallbacks.push(e);
  }),
  (Te.prototype.onNewSessionStart = function (e) {
    this._onNewSessionStartCallbacks.push(e);
  }),
  (Te.prototype.getSessionId = function () {
    return this._sessionId;
  }),
  (Te.prototype.nextEventId = function () {
    return this._eventId++, this._eventId;
  }),
  (Te.prototype.nextIdentifyId = function () {
    return this._identifyId++, this._identifyId;
  }),
  (Te.prototype.nextSequenceNumber = function () {
    return this._sequenceNumber++, this._sequenceNumber;
  }),
  (Te.prototype._unsentCount = function () {
    return this._unsentEvents.length + this._unsentIdentifys.length;
  }),
  (Te.prototype._sendEventsIfReady = function () {
    return (
      0 !== this._unsentCount() &&
      (this.options.batchEvents
        ? this._unsentCount() >= this.options.eventUploadThreshold ||
          "beacon" === this.options.transport
          ? (this.sendEvents(), !0)
          : (this._updateScheduled ||
              ((this._updateScheduled = !0),
              setTimeout(
                function () {
                  (this._updateScheduled = !1), this.sendEvents();
                }.bind(this),
                this.options.eventUploadPeriodMillis
              )),
            !1)
        : (this.sendEvents(), !0))
    );
  }),
  (Te.prototype.clearStorage = function () {
    return this._metadataStorage.clear();
  }),
  (Te.prototype._getFromStorage = function (e, t) {
    return e.getItem(t + this._storageSuffix);
  }),
  (Te.prototype._setInStorage = function (e, t, i) {
    e.setItem(t + this._storageSuffix, i);
  });
var Pe = function (e) {
    if (e._useOldCookie) {
      var t = e.cookieStorage.get(e._oldCookiename);
      "object" !== j(t) || Ue(e, t);
    } else {
      var i = e._metadataStorage.load();
      "object" === j(i) && Ue(e, i);
    }
  },
  Re = function (e) {
    var t = e.cookieStorage.get(e._oldCookiename);
    "object" === j(t) && (Ue(e, t), De(e));
  },
  Ue = function (e, t) {
    t.deviceId && (e.options.deviceId = t.deviceId),
      t.userId && (e.options.userId = t.userId),
      null !== t.optOut &&
        void 0 !== t.optOut &&
        !1 !== t.optOut &&
        (e.options.optOut = t.optOut),
      t.sessionId && (e._sessionId = parseInt(t.sessionId, 10)),
      t.lastEventTime && (e._lastEventTime = parseInt(t.lastEventTime, 10)),
      t.eventId && (e._eventId = parseInt(t.eventId, 10)),
      t.identifyId && (e._identifyId = parseInt(t.identifyId, 10)),
      t.sequenceNumber && (e._sequenceNumber = parseInt(t.sequenceNumber, 10));
  },
  De = function (e) {
    var t = {
      deviceId: e.options.deviceId,
      userId: e.options.userId,
      optOut: e.options.optOut,
      sessionId: e._sessionId,
      lastEventTime: e._lastEventTime,
      eventId: e._eventId,
      identifyId: e._identifyId,
      sequenceNumber: e._sequenceNumber,
    };
    e._useOldCookie
      ? e.cookieStorage.set(e.options.cookieName + e._storageSuffix, t)
      : e._metadataStorage.save(t);
  };
(Te.prototype._initUtmData = function (e, t) {
  var i,
    n,
    o,
    r,
    s,
    a,
    u,
    c,
    l,
    p,
    d,
    h =
      ((r = function (e, t, i, n) {
        return L(e, t) || L(i, n);
      }),
      (s = r(
        "utm_source",
        (n = e = e || this._getUrlParams()),
        "utmcsr",
        (o = (i = t = t || this.cookieStorage.get("__utmz"))
          ? "?" + i.split(".").slice(-1)[0].replace(/\|/g, "&")
          : "")
      )),
      (a = r("utm_medium", n, "utmcmd", o)),
      (u = r("utm_campaign", n, "utmccn", o)),
      (c = r("utm_term", n, "utmctr", o)),
      (l = r("utm_content", n, "utmcct", o)),
      (p = {}),
      (d = function (e, t) {
        W(t) || (p[e] = t);
      })("utm_source", s),
      d("utm_medium", a),
      d("utm_campaign", u),
      d("utm_term", c),
      d("utm_content", l),
      p);
  return ze(this, h), h;
}),
  (Te.prototype._unsetUTMParams = function () {
    var e = new Se();
    e.unset("referrer"),
      e.unset("utm_source"),
      e.unset("utm_medium"),
      e.unset("utm_campaign"),
      e.unset("utm_term"),
      e.unset("utm_content"),
      this.identify(e);
  });
var ze = function (e, t) {
  if ("object" === j(t) && 0 !== Object.keys(t).length) {
    var i = new Se();
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) &&
        (i.setOnce("initial_" + n, t[n]), i.set(n, t[n]));
    e.identify(i);
  }
};
(Te.prototype._getReferrer = function () {
  return "undefined" != typeof document ? document.referrer : "";
}),
  (Te.prototype._getUrlParams = function () {
    return A.location.search;
  }),
  (Te.prototype._saveGclid = function (e) {
    var t = L("gclid", e);
    if (!W(t)) {
      var i = { gclid: t };
      return ze(this, i), i;
    }
  }),
  (Te.prototype._saveFbclid = function (e) {
    var t = L("fbclid", e);
    if (!W(t)) {
      var i = { fbclid: t };
      return ze(this, i), i;
    }
  }),
  (Te.prototype._getDeviceIdFromUrlParam = function (e) {
    return L("amp_device_id", e);
  }),
  (Te.prototype._getReferringDomain = function (e) {
    if (W(e)) return null;
    var t = e.split("/");
    return t.length >= 3 ? t[2] : null;
  }),
  (Te.prototype._saveReferrer = function (e) {
    if (!W(e)) {
      var t = { referrer: e, referring_domain: this._getReferringDomain(e) };
      return ze(this, t), t;
    }
  }),
  (Te.prototype.saveEvents = function () {
    try {
      var e = JSON.stringify(
        this._unsentEvents.map(function (e) {
          return e.event;
        })
      );
      this._setInStorage(we, this.options.unsentKey, e);
    } catch (e) {}
    try {
      var t = JSON.stringify(
        this._unsentIdentifys.map(function (e) {
          return e.event;
        })
      );
      this._setInStorage(we, this.options.unsentIdentifyKey, t);
    } catch (e) {}
  }),
  (Te.prototype.setDomain = function (e) {
    if (this._shouldDeferCall())
      return this._q.push(
        ["setDomain"].concat(Array.prototype.slice.call(arguments, 0))
      );
    if (H(e, "domain", "string"))
      try {
        this.cookieStorage.options({
          expirationDays: this.options.cookieExpiration,
          secure: this.options.secureCookie,
          domain: e,
          sameSite: this.options.sameSiteCookie,
        }),
          (this.options.domain = this.cookieStorage.options().domain),
          Pe(this),
          De(this);
      } catch (e) {
        G.error(e);
      }
  }),
  (Te.prototype.setUserId = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (H(t, "startNewSession", "boolean")) {
      if (this._shouldDeferCall())
        return this._q.push(
          ["setUserId"].concat(Array.prototype.slice.call(arguments, 0))
        );
      try {
        (this.options.userId = (null != e && "" + e) || null),
          t &&
            (this.options.unsetParamsReferrerOnNewSession &&
              this._unsetUTMParams(),
            (this._newSession = !0),
            (this._sessionId = new Date().getTime()),
            this._runNewSessionStartCallbacks(),
            this.options.saveParamsReferrerOncePerSession &&
              this._trackParamsAndReferrer()),
          De(this),
          this._connector &&
            this._connector.identityStore
              .editIdentity()
              .setUserId(this.options.userId)
              .commit();
      } catch (e) {
        G.error(e);
      }
    }
  }),
  (Te.prototype.setGroup = function (e, t) {
    if (this._shouldDeferCall())
      return this._q.push(
        ["setGroup"].concat(Array.prototype.slice.call(arguments, 0))
      );
    if (this._apiKeySet("setGroup()") && H(e, "groupType", "string") && !W(e)) {
      var i = {};
      i[e] = t;
      var n = new Se().set(e, t);
      this._logEvent(
        "$identify",
        null,
        null,
        n.userPropertiesOperations,
        i,
        null,
        null,
        null
      );
    }
  }),
  (Te.prototype.setOptOut = function (e) {
    if (this._shouldDeferCall())
      return this._q.push(
        ["setOptOut"].concat(Array.prototype.slice.call(arguments, 0))
      );
    if (H(e, "enable", "boolean"))
      try {
        (this.options.optOut = e), De(this);
      } catch (e) {
        G.error(e);
      }
  }),
  (Te.prototype.setSessionId = function (e) {
    if (H(e, "sessionId", "number"))
      try {
        (this._sessionId = e), De(this);
      } catch (e) {
        G.error(e);
      }
  }),
  (Te.prototype.resetSessionId = function () {
    this.setSessionId(new Date().getTime());
  }),
  (Te.prototype.regenerateDeviceId = function () {
    if (this._shouldDeferCall())
      return this._q.push(
        ["regenerateDeviceId"].concat(Array.prototype.slice.call(arguments, 0))
      );
    this.setDeviceId(te());
  }),
  (Te.prototype.setDeviceId = function (e) {
    if (this._shouldDeferCall())
      return this._q.push(
        ["setDeviceId"].concat(Array.prototype.slice.call(arguments, 0))
      );
    if (Q(e))
      try {
        W(e) ||
          ((this.options.deviceId = "" + e),
          De(this),
          this._connector &&
            this._connector.identityStore
              .editIdentity()
              .setDeviceId(this.options.deviceId)
              .commit());
      } catch (e) {
        G.error(e);
      }
  }),
  (Te.prototype.setTransport = function (e) {
    if (this._shouldDeferCall())
      return this._q.push(
        ["setTransport"].concat(Array.prototype.slice.call(arguments, 0))
      );
    Y(e) && (this.options.transport = e);
  }),
  (Te.prototype.setUserProperties = function (e) {
    if (this._shouldDeferCall())
      return this._q.push(
        ["setUserProperties"].concat(Array.prototype.slice.call(arguments, 0))
      );
    if (
      this._apiKeySet("setUserProperties()") &&
      H(e, "userProperties", "object")
    ) {
      var t = Z(X(e));
      if (0 !== Object.keys(t).length) {
        var i = new Se();
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && i.set(n, t[n]);
        this.identify(i);
      }
    }
  }),
  (Te.prototype.clearUserProperties = function () {
    if (this._shouldDeferCall())
      return this._q.push(
        ["clearUserProperties"].concat(Array.prototype.slice.call(arguments, 0))
      );
    if (this._apiKeySet("clearUserProperties()")) {
      var e = new Se();
      e.clearAll(), this.identify(e);
    }
  });
var Me = function (e, t) {
  for (var i = 0; i < t._q.length; i++) {
    var n = e[t._q[i][0]];
    "function" === j(n) && n.apply(e, t._q[i].slice(1));
  }
  return e;
};
(Te.prototype.identify = function (e, t, i, n) {
  if (this._shouldDeferCall())
    return this._q.push(
      ["identify"].concat(Array.prototype.slice.call(arguments, 0))
    );
  if (this._apiKeySet("identify()"))
    if (
      ("object" === j(e) &&
        Object.prototype.hasOwnProperty.call(e, "_q") &&
        (e = Me(new Se(), e)),
      e instanceof Se)
    ) {
      if (Object.keys(e.userPropertiesOperations).length > 0)
        return this._logEvent(
          "$identify",
          null,
          null,
          e.userPropertiesOperations,
          null,
          null,
          null,
          t,
          i,
          n
        );
      Ge(t, i, 0, "No request sent", { reason: "No user property operations" });
    } else
      G.error(
        "Invalid identify input type. Expected Identify object but saw " + j(e)
      ),
        Ge(t, i, 0, "No request sent", {
          reason: "Invalid identify input type",
        });
  else Ge(t, i, 0, "No request sent", { reason: "API key is not set" });
}),
  (Te.prototype.groupIdentify = function (e, t, i, n, o, r) {
    if (this._shouldDeferCall())
      return this._q.push(
        ["groupIdentify"].concat(Array.prototype.slice.call(arguments, 0))
      );
    if (this._apiKeySet("groupIdentify()"))
      if (H(e, "group_type", "string") && !W(e))
        if (null != t)
          if (
            ("object" === j(i) &&
              Object.prototype.hasOwnProperty.call(i, "_q") &&
              (i = Me(new Se(), i)),
            i instanceof Se)
          ) {
            if (Object.keys(i.userPropertiesOperations).length > 0)
              return this._logEvent(
                "$groupidentify",
                null,
                null,
                null,
                C({}, e, t),
                i.userPropertiesOperations,
                null,
                n,
                o,
                r
              );
            Ge(n, o, 0, "No request sent", {
              reason: "No group property operations",
            });
          } else
            G.error(
              "Invalid identify input type. Expected Identify object but saw " +
                j(i)
            ),
              Ge(n, o, 0, "No request sent", {
                reason: "Invalid identify input type",
              });
        else Ge(n, o, 0, "No request sent", { reason: "Invalid group name" });
      else Ge(n, o, 0, "No request sent", { reason: "Invalid group type" });
    else Ge(n, o, 0, "No request sent", { reason: "API key is not set" });
  }),
  (Te.prototype.setVersionName = function (e) {
    if (this._shouldDeferCall())
      return this._q.push(
        ["setVersionName"].concat(Array.prototype.slice.call(arguments, 0))
      );
    H(e, "versionName", "string") && (this.options.versionName = e);
  }),
  (Te.prototype._logEvent = function (e, t, i, n, o, r, s, a, u, c) {
    if ((Pe(this), e))
      if (this.options.optOut)
        Ge(a, u, 0, "No request sent", { reason: "optOut is set to true" });
      else
        try {
          var l;
          l =
            "$identify" === e || "$groupidentify" === e
              ? this.nextIdentifyId()
              : this.nextEventId();
          var p = this.nextSequenceNumber(),
            d = "number" === j(s) ? s : new Date().getTime();
          c
            ? (this._sessionId = -1)
            : (!this._sessionId ||
                !this._lastEventTime ||
                d - this._lastEventTime > this.options.sessionTimeout) &&
              ((this._sessionId = d), this._runNewSessionStartCallbacks()),
            (this._lastEventTime = d),
            De(this);
          var h = this._ua.browser.name,
            f = this._ua.browser.major,
            v = this._ua.device.model || this._ua.os.name,
            b = this._ua.device.vendor;
          n = n || {};
          var m = N({}, this._apiPropertiesTrackingOptions);
          (i = N({}, i || {}, m)), (t = t || {}), (o = o || {}), (r = r || {});
          var g = {
            device_id: this.options.deviceId,
            user_id: this.options.userId,
            timestamp: d,
            event_id: l,
            session_id: this._sessionId || -1,
            event_type: e,
            version_name: this.options.versionName || null,
            platform: Ke(this, "platform") ? this.options.platform : null,
            os_name: (Ke(this, "os_name") && h) || null,
            os_version: (Ke(this, "os_version") && f) || null,
            device_model: (Ke(this, "device_model") && v) || null,
            device_manufacturer: (Ke(this, "device_manufacturer") && b) || null,
            language: Ke(this, "language") ? this.options.language : null,
            api_properties: i,
            event_properties: Z(X(t)),
            user_properties: Z(X(n)),
            uuid: Ee(),
            library: this.options.library,
            sequence_number: p,
            groups: Z(J(o)),
            group_properties: Z(X(r)),
            user_agent: this._userAgent,
          };
          return (
            Be(this) &&
              (g.plan = {
                branch: this.options.plan.branch || void 0,
                source: this.options.plan.source || void 0,
                version: this.options.plan.version || void 0,
                versionId: this.options.plan.versionId || void 0,
              }),
            "$identify" === e || "$groupidentify" === e
              ? (this._unsentIdentifys.push({
                  event: g,
                  callback: a,
                  errorCallback: u,
                }),
                this._limitEventsQueued(this._unsentIdentifys))
              : (this._unsentEvents.push({
                  event: g,
                  callback: a,
                  errorCallback: u,
                }),
                this._limitEventsQueued(this._unsentEvents)),
            this.options.saveEvents && this.saveEvents(),
            this._sendEventsIfReady(),
            "$identify" === e &&
              this._connector &&
              this._connector.identityStore
                .editIdentity()
                .updateUserProperties(Z(X(n)))
                .commit(),
            l
          );
        } catch (e) {
          G.error(e);
        }
    else Ge(a, u, 0, "No request sent", { reason: "Missing eventType" });
  });
var Be = function (e) {
    return (
      e.options.plan &&
      (e.options.plan.source ||
        e.options.plan.branch ||
        e.options.plan.version ||
        e.options.plan.versionId)
    );
  },
  Ke = function (e, t) {
    return !!e.options.trackingOptions[t];
  },
  Fe = function (e) {
    for (
      var t = ["city", "country", "dma", "ip_address", "region"], i = {}, n = 0;
      n < t.length;
      n++
    ) {
      var o = t[n];
      Ke(e, o) || (i[o] = !1);
    }
    return i;
  };
(Te.prototype._limitEventsQueued = function (e) {
  e.length > this.options.savedMaxCount &&
    e.splice(0, e.length - this.options.savedMaxCount).forEach(function (e) {
      Ge(e.callback, e.errorCallback, 0, "No request sent", {
        reason:
          "Event dropped because options.savedMaxCount exceeded. User may be offline or have a content blocker",
      });
    });
}),
  (Te.prototype.logEvent = function (e, t, i, n) {
    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    return this._shouldDeferCall()
      ? this._q.push(
          ["logEvent"].concat(Array.prototype.slice.call(arguments, 0))
        )
      : this.logEventWithTimestamp(e, t, null, i, n, o);
  }),
  (Te.prototype.logEventWithTimestamp = function (e, t, i, n, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
    return this._shouldDeferCall()
      ? this._q.push(
          ["logEventWithTimestamp"].concat(
            Array.prototype.slice.call(arguments, 0)
          )
        )
      : this._apiKeySet("logEvent()")
      ? H(e, "eventType", "string")
        ? W(e)
          ? (Ge(n, o, 0, "No request sent", { reason: "Missing eventType" }),
            -1)
          : (H(r, "outOfSession", "boolean") ||
              Ge(n, o, 0, "No request sent", {
                reason: "Invalid outOfSession value",
              }),
            this._logEvent(e, t, null, null, null, null, i, n, o, r))
        : (Ge(n, o, 0, "No request sent", {
            reason: "Invalid type for eventType",
          }),
          -1)
      : (Ge(n, o, 0, "No request sent", { reason: "API key not set" }), -1);
  }),
  (Te.prototype.logEventWithGroups = function (e, t, i, n, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
    return this._shouldDeferCall()
      ? this._q.push(
          ["logEventWithGroups"].concat(
            Array.prototype.slice.call(arguments, 0)
          )
        )
      : this._apiKeySet("logEventWithGroups()")
      ? H(e, "eventType", "string")
        ? (H(r, "outOfSession", "boolean") ||
            Ge(event.callback, event.errorCallback, 0, "No request sent", {
              reason: "Invalid outOfSession value",
            }),
          this._logEvent(e, t, null, null, i, null, null, n, o, r))
        : (Ge(event.callback, event.errorCallback, 0, "No request sent", {
            reason: "Invalid type for eventType",
          }),
          -1)
      : (Ge(event.callback, event.errorCallback, 0, "No request sent", {
          reason: "API key not set",
        }),
        -1);
  });
var $e = function (e) {
    return !isNaN(parseFloat(e)) && isFinite(e);
  },
  Ge = function (e, t, i, n, o) {
    "function" === j(e) && e(i, n, o), "function" === j(t) && t(i, n, o);
  };
(Te.prototype.logRevenueV2 = function (e) {
  if (this._shouldDeferCall())
    return this._q.push(
      ["logRevenueV2"].concat(Array.prototype.slice.call(arguments, 0))
    );
  if (this._apiKeySet("logRevenueV2()"))
    if (
      ("object" === j(e) &&
        Object.prototype.hasOwnProperty.call(e, "_q") &&
        (e = Me(new Oe(), e)),
      e instanceof Oe)
    ) {
      if (e && e._isValidRevenue())
        return this.logEvent("revenue_amount", e._toJSONObject());
    } else
      G.error(
        "Invalid revenue input type. Expected Revenue object but saw " + j(e)
      );
}),
  (Te.prototype.logRevenue = function (e, t, i) {
    return this._shouldDeferCall()
      ? this._q.push(
          ["logRevenue"].concat(Array.prototype.slice.call(arguments, 0))
        )
      : this._apiKeySet("logRevenue()") && $e(e) && (void 0 === t || $e(t))
      ? this._logEvent(
          "revenue_amount",
          {},
          {
            productId: i,
            special: "revenue_amount",
            quantity: t || 1,
            price: e,
          },
          null,
          null,
          null,
          null,
          null
        )
      : -1;
  }),
  (Te.prototype._logErrorsOnEvents = function (e, t, i, n) {
    for (
      var o = ["_unsentEvents", "_unsentIdentifys"], r = 0;
      r < o.length;
      r++
    )
      for (
        var s = o[r], a = "_unsentEvents" === s ? e : t, u = 0;
        u < this[s].length;
        u++
      ) {
        var c = this[s][u];
        c.event.event_id <= a && c.errorCallback && c.errorCallback(i, n);
      }
  }),
  (Te.prototype.removeEvents = function (e, t, i, n) {
    We(this, "_unsentEvents", e, i, n), We(this, "_unsentIdentifys", t, i, n);
  });
var We = function (e, t, i, n, o) {
  if (!(i < 0)) {
    for (var r = [], s = 0; s < e[t].length; s++) {
      var a = e[t][s];
      a.event.event_id > i ? r.push(a) : a.callback && a.callback(n, o);
    }
    e[t] = r;
  }
};
(Te.prototype.sendEvents = function () {
  if (this._apiKeySet("sendEvents()")) {
    if (this.options.optOut)
      this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
        reason: "Opt out is set to true",
      });
    else if (0 !== this._unsentCount()) {
      if ("beacon" !== this.options.transport) {
        if (this._sending) return;
        this._sending = !0;
      }
      var e =
          (this.options.forceHttps || "https:" === A.location.protocol
            ? "https"
            : "http") +
          "://" +
          this.options.apiEndpoint,
        t = Math.min(this._unsentCount(), this.options.uploadBatchSize),
        i = this._mergeEventsAndIdentifys(t),
        n = i.maxEventId,
        r = i.maxIdentifyId,
        s = JSON.stringify(
          i.eventsToSend.map(function (e) {
            return e.event;
          })
        ),
        a = new Date().getTime(),
        u = {
          client: this.options.apiKey,
          e: s,
          v: 2,
          upload_time: a,
          checksum: o(2 + this.options.apiKey + s + a),
        };
      if ("beacon" !== this.options.transport) {
        var c = this;
        try {
          new xe(e, u, this.options.headers).send(function (e, i) {
            c._sending = !1;
            try {
              200 === e && "success" === i
                ? (c.removeEvents(n, r, e, i),
                  c.options.saveEvents && c.saveEvents(),
                  c._sendEventsIfReady())
                : (c._logErrorsOnEvents(n, r, e, i),
                  413 === e &&
                    (1 === c.options.uploadBatchSize &&
                      c.removeEvents(n, r, e, i),
                    (c.options.uploadBatchSize = Math.ceil(t / 2)),
                    c.sendEvents()));
            } catch (e) {}
          });
        } catch (e) {
          var l = "Request failed to send";
          G.error(l),
            c._logErrorsOnEvents(n, r, 0, l),
            c.removeEvents(n, r, 0, l, { reason: e.message });
        }
      } else
        navigator.sendBeacon(e, new URLSearchParams(u))
          ? (this.removeEvents(n, r, 200, "success"),
            this.options.saveEvents && this.saveEvents())
          : this._logErrorsOnEvents(n, r, 0, "");
    }
  } else
    this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
      reason: "API key not set",
    });
}),
  (Te.prototype._mergeEventsAndIdentifys = function (e) {
    for (var t = [], i = 0, n = -1, o = 0, r = -1; t.length < e; ) {
      var s = void 0,
        a = o >= this._unsentIdentifys.length,
        u = i >= this._unsentEvents.length;
      if (u && a) {
        G.error(
          "Merging Events and Identifys, less events and identifys than expected"
        );
        break;
      }
      a
        ? (n = (s = this._unsentEvents[i++]).event.event_id)
        : u
        ? (r = (s = this._unsentIdentifys[o++]).event.event_id)
        : !("sequence_number" in this._unsentEvents[i].event) ||
          this._unsentEvents[i].event.sequence_number <
            this._unsentIdentifys[o].event.sequence_number
        ? (n = (s = this._unsentEvents[i++]).event.event_id)
        : (r = (s = this._unsentIdentifys[o++]).event.event_id),
        t.push(s);
    }
    return { eventsToSend: t, maxEventId: n, maxIdentifyId: r };
  }),
  (Te.prototype.setGlobalUserProperties = function (e) {
    this.setUserProperties(e);
  }),
  (Te.prototype.__VERSION__ = function () {
    return this.options.library.version;
  }),
  (Te.prototype.setLibrary = function (e, t) {
    null != e && (this.options.library.name = e),
      null != t && (this.options.library.version = t);
  }),
  (Te.prototype._shouldDeferCall = function () {
    return this._pendingReadStorage || this._initializationDeferred;
  }),
  (Te.prototype._deferInitialization = function () {
    (this._initializationDeferred = !0),
      this._q.push(["init"].concat(Array.prototype.slice.call(arguments, 0)));
  }),
  (Te.prototype.enableTracking = function () {
    (this._initializationDeferred = !1), De(this), this.runQueuedFunctions();
  }),
  (Te.prototype._refreshDynamicConfig = function () {
    this.options.useDynamicConfig &&
      Ae.refresh(
        this.options.serverZone,
        this.options.forceHttps,
        function () {
          this.options.apiEndpoint = Ae.ingestionEndpoint;
        }.bind(this)
      );
  }),
  (Te.prototype.getDeviceId = function () {
    return this.options.deviceId;
  }),
  (Te.prototype.getUserId = function () {
    return this.options.userId;
  }),
  (Te.prototype.setMinTimeBetweenSessionsMillis = function (e) {
    if (H(e, "timeInMillis", "number")) {
      if (this._shouldDeferCall())
        return this._q.push(
          ["setMinTimeBetweenSessionsMillis"].concat(
            Array.prototype.slice.call(arguments, 0)
          )
        );
      try {
        this.options.sessionTimeout = e;
      } catch (e) {
        G.error(e);
      }
    }
  }),
  (Te.prototype.setEventUploadThreshold = function (e) {
    if (H(e, "eventUploadThreshold", "number")) {
      if (this._shouldDeferCall())
        return this._q.push(
          ["setEventUploadThreshold"].concat(
            Array.prototype.slice.call(arguments, 0)
          )
        );
      try {
        this.options.eventUploadThreshold = e;
      } catch (e) {
        G.error(e);
      }
    }
  }),
  (Te.prototype.setUseDynamicConfig = function (e) {
    if (H(e, "useDynamicConfig", "boolean")) {
      if (this._shouldDeferCall())
        return this._q.push(
          ["setUseDynamicConfig"].concat(
            Array.prototype.slice.call(arguments, 0)
          )
        );
      try {
        (this.options.useDynamicConfig = e), this._refreshDynamicConfig();
      } catch (e) {
        G.error(e);
      }
    }
  }),
  (Te.prototype.setServerZone = function (e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    if (("EU" === e || "US" === e) && H(t, "serverZoneBasedApi", "boolean")) {
      if (this._shouldDeferCall())
        return this._q.push(
          ["setServerZone"].concat(Array.prototype.slice.call(arguments, 0))
        );
      try {
        (this.options.serverZone = e),
          (this.options.serverZoneBasedApi = t),
          t && (this.options.apiEndpoint = Ce(this.options.serverZone));
      } catch (e) {
        G.error(e);
      }
    }
  }),
  (Te.prototype.setServerUrl = function (e) {
    if (H(e, "serverUrl", "string")) {
      if (this._shouldDeferCall())
        return this._q.push(
          ["setServerUrl"].concat(Array.prototype.slice.call(arguments, 0))
        );
      try {
        this.options.apiEndpoint = e;
      } catch (e) {
        G.error(e);
      }
    }
  });
var Ve = function () {
  (this.options = N({}, Ne)), (this._q = []), (this._instances = {});
};
(Ve.prototype.Identify = Se),
  (Ve.prototype.Revenue = Oe),
  (Ve.prototype.getInstance = function (e) {
    e = W(e) ? "$default_instance" : e.toLowerCase();
    var t = this._instances[e];
    return void 0 === t && ((t = new Te(e)), (this._instances[e] = t)), t;
  }),
  (Ve.prototype.init = function (e, t, i, n) {
    this.getInstance().init(
      e,
      t,
      i,
      function (e) {
        (this.options = e.options), "function" === j(n) && n(e);
      }.bind(this)
    );
  }),
  (Ve.prototype.isNewSession = function () {
    return this.getInstance().isNewSession();
  }),
  (Ve.prototype.getSessionId = function () {
    return this.getInstance().getSessionId();
  }),
  (Ve.prototype.nextEventId = function () {
    return this.getInstance().nextEventId();
  }),
  (Ve.prototype.nextIdentifyId = function () {
    return this.getInstance().nextIdentifyId();
  }),
  (Ve.prototype.nextSequenceNumber = function () {
    return this.getInstance().nextSequenceNumber();
  }),
  (Ve.prototype.saveEvents = function () {
    this.getInstance().saveEvents();
  }),
  (Ve.prototype.setDomain = function (e) {
    this.getInstance().setDomain(e);
  }),
  (Ve.prototype.setUserId = function (e) {
    this.getInstance().setUserId(e);
  }),
  (Ve.prototype.setGroup = function (e, t) {
    this.getInstance().setGroup(e, t);
  }),
  (Ve.prototype.setOptOut = function (e) {
    this.getInstance().setOptOut(e);
  }),
  (Ve.prototype.regenerateDeviceId = function () {
    this.getInstance().regenerateDeviceId();
  }),
  (Ve.prototype.setDeviceId = function (e) {
    this.getInstance().setDeviceId(e);
  }),
  (Ve.prototype.setUserProperties = function (e) {
    this.getInstance().setUserProperties(e);
  }),
  (Ve.prototype.clearUserProperties = function () {
    this.getInstance().clearUserProperties();
  }),
  (Ve.prototype.identify = function (e, t) {
    this.getInstance().identify(e, t);
  }),
  (Ve.prototype.setVersionName = function (e) {
    this.getInstance().setVersionName(e);
  }),
  (Ve.prototype.logEvent = function (e, t, i) {
    return this.getInstance().logEvent(e, t, i);
  }),
  (Ve.prototype.logEventWithGroups = function (e, t, i, n) {
    return this.getInstance().logEventWithGroups(e, t, i, n);
  }),
  (Ve.prototype.logRevenueV2 = function (e) {
    return this.getInstance().logRevenueV2(e);
  }),
  (Ve.prototype.logRevenue = function (e, t, i) {
    return this.getInstance().logRevenue(e, t, i);
  }),
  (Ve.prototype.removeEvents = function (e, t) {
    this.getInstance().removeEvents(e, t);
  }),
  (Ve.prototype.sendEvents = function (e) {
    this.getInstance().sendEvents(e);
  }),
  (Ve.prototype.setGlobalUserProperties = function (e) {
    this.getInstance().setUserProperties(e);
  }),
  (Ve.prototype.__VERSION__ = "8.18.1");
var Le = (void 0 !== A && A.amplitude) || {},
  Ze = new Ve();
for (var Je in ((Ze._q = Le._q || []), Le._iq))
  Object.prototype.hasOwnProperty.call(Le._iq, Je) &&
    (Ze.getInstance(Je)._q = Le._iq[Je]._q || []);
window.amplitude = Ze;
//# sourceMappingURL=amplitude.da77651f.js.map
